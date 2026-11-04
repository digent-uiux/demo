// cart-page-36. Live cart: the stepper and remove post /cart/change.js with section rendering and swap this section in
// place; Undo re-adds the removed line (/cart/add.js, same variant, quantity, plan and properties); the gift note saves
// to cart.note (/cart/update.js). Every change dispatches blko:cart:updated {detail: cart} (and Undo also blko:cart:add).
// A blko:cart:updated from another block re-renders the section. Preview: recounts in place like the DS (hairline,
// subtotal, shipping, total, remove + undo, empty state with "Put … back").
(() => {
  if (window.__blkoCartPage36) return; window.__blkoCartPage36 = true; // one copy, even with the section twice
  const root_ = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  const post = (path, body) => fetch(root_ + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
    .then((r) => r.json().then((j) => { if (!r.ok) throw j; return j; }));
  const gone = {}; // section id → { item, name, at } for Undo across re-renders
  let self = false; // our own blko:cart:updated

  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const d = root.dataset, live = d.mode === 'live', sid = d.section;
    const $ = (s) => root.querySelector(s);
    const $$ = (s) => [...root.querySelectorAll(s)];
    const money = (c) => { const v = Math.round(c) / 100; return d.m0.replace('0', v % 1 ? v.toFixed(2) : String(v)); };
    const pad = (n) => (n < 10 ? '0' : '') + n;
    const count = (n) => (n === 1 ? d.lItem : d.lItems).replace('[n]', pad(n));
    const status = $('[data-status]');
    const putBack = $('[data-put-back]');

    const showUndo = (g, onUndo) => {
      const name = g ? g.name : '';
      if (status) {
        status.textContent = '';
        if (g) {
          status.append(d.lOff.replace('[name]', name) + ' ');
          const b = document.createElement('button'); b.type = 'button'; b.textContent = d.lUndo; b.addEventListener('click', onUndo);
          status.append(b);
        }
      }
      if (putBack) {
        putBack.hidden = !g;
        if (g) { putBack.textContent = d.lBack.replace('[name]', name); putBack.onclick = onUndo; }
      }
    };

    // Gift note: the switch opens the card message; the count follows the text.
    const gift = $('[data-gift]'), note = $('[data-note]'), cnt = $('[data-cnt]'), row = $('[data-gift-row]'), mirror = $('[data-note-mirror]');
    let nt = 0;
    const saveNote = () => {
      const on = gift.querySelector('input').checked, v = on ? note.value : '';
      if (mirror) mirror.value = v;
      if (!live) return;
      clearTimeout(nt);
      nt = setTimeout(() => post('cart/update.js', { note: v }).then(announce).catch(() => {}), 500);
    };
    if (gift) {
      gift.querySelector('input').addEventListener('change', (e) => {
        gift.classList.toggle('is-on', e.target.checked);
        if (row) row.textContent = e.target.checked ? d.lInc : d.lNone;
        if (e.target.checked) note.focus();
        saveNote();
      });
      note.addEventListener('input', () => { cnt.textContent = note.value.length; saveNote(); });
    }

    function announce(cart) {
      self = true;
      document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: cart }));
      self = false;
    }

    if (live) {
      let busy = false;
      const swap = (cart, focusSel) => {
        const html = cart.sections && cart.sections[sid];
        if (!html) { window.location.reload(); return; }
        const next = new DOMParser().parseFromString(html, 'text/html').querySelector('.bcartpage36[data-mode]');
        if (!next) { window.location.reload(); return; }
        root.replaceWith(next);
        init(next);
        const f = focusSel && next.querySelector(focusSel);
        (f || next.querySelector('[data-status] button') || next.querySelector('[data-put-back]:not([hidden])') || next.querySelector('h1')).focus?.({ preventScroll: true });
      };
      const fail = (e) => {
        busy = false; root.removeAttribute('aria-busy');
        if (status) status.textContent = (e && (e.description || e.message)) || d.lErr;
      };
      const change = (key, quantity, focusSel) => {
        if (busy) return; busy = true; root.setAttribute('aria-busy', 'true');
        post('cart/change.js', { id: key, quantity, sections: [sid], sections_url: window.location.pathname })
          .then((cart) => { swap(cart, focusSel); announce(cart); }, fail);
      };
      const undo = () => {
        const g = gone[sid]; if (!g || busy) return;
        busy = true; root.setAttribute('aria-busy', 'true');
        post('cart/add.js', { items: [g.item], sections: [sid], sections_url: window.location.pathname })
          .then((j) => {
            delete gone[sid];
            document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'cart-page-36' } }));
            return fetch(root_ + 'cart.js').then((r) => r.json()).then((cart) => { cart.sections = j.sections; swap(cart, j.items && j.items[0] ? '[data-key="' + CSS.escape(j.items[0].key) + '"] [data-rm]' : ''); announce(cart); });
          }, fail);
      };
      if (gone[sid]) showUndo(gone[sid], undo);

      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-rm]'); if (!b) return;
        const li = b.closest('[data-line-item]');
        const item = { id: Number(li.dataset.variant), quantity: Number(li.dataset.qty) };
        if (li.dataset.plan) item.selling_plan = Number(li.dataset.plan);
        try { const p = JSON.parse(li.dataset.props || '{}'); if (p && Object.keys(p).length) item.properties = p; } catch (_) {}
        gone[sid] = { item, name: li.dataset.name };
        change(li.dataset.key, 0);
      });
      const timers = new Map();
      root.addEventListener('blko-ui:change', (e) => {
        const li = e.target.closest('[data-line-item]'); if (!li) return;
        const key = li.dataset.key, q = e.detail.value, dir = e.target.contains(document.activeElement) ? document.activeElement.dataset.step : '';
        clearTimeout(timers.get(key));
        timers.set(key, setTimeout(() => { delete gone[sid]; change(key, q, '[data-key="' + CSS.escape(key) + '"] [data-step="' + (dir || '1') + '"]'); }, 400));
      });
      return;
    }

    // Preview: recount in place.
    const FREE = Number(d.free), FEE = Number(d.fee);
    let held = null;
    const draw = () => {
      const rows = $$('[data-line-item]');
      let n = 0, sub = 0;
      rows.forEach((li, i) => {
        const q = Number(li.dataset.qty), lc = Number(li.dataset.price) * q;
        n += q; sub += lc;
        li.querySelector('[data-paid]').textContent = money(lc);
        li.querySelector('[data-no]').textContent = pad(i + 1);
      });
      const ship = sub >= FREE || !rows.length ? 0 : FEE, left = Math.max(0, FREE - sub);
      $$('[data-count]').forEach((el) => { el.textContent = count(n); });
      $('[data-left]').textContent = money(left);
      $('[data-left-on]').hidden = left <= 0;
      $('[data-left-done]').hidden = left > 0;
      $('[data-fill]').style.transform = 'scaleX(' + (FREE > 0 ? Math.min(1, sub / FREE) : 1) + ')';
      $('[data-subtotal]').textContent = money(sub);
      $('[data-ship]').textContent = ship ? money(ship) : d.lFree;
      $('[data-total]').textContent = money(sub + ship);
      root.toggleAttribute('data-is-empty', !rows.length);
    };
    const undo = () => {
      if (!held) return;
      const list = $('[data-lines]'), ref = list.children[held.at] || null;
      list.insertBefore(held.li, ref);
      const back = held.li; held = null; showUndo(null); draw();
      const r = back.querySelector('[data-rm]'); if (r) r.focus({ preventScroll: true });
    };
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-rm]'); if (!b) return;
      const li = b.closest('[data-line-item]');
      held = { li, at: [...li.parentNode.children].indexOf(li) };
      li.remove();
      draw();
      showUndo({ name: li.dataset.name }, undo);
      const f = root.hasAttribute('data-is-empty') ? putBack : status && status.querySelector('button');
      if (f) f.focus({ preventScroll: true });
    });
    root.addEventListener('blko-ui:change', (e) => {
      const li = e.target.closest('[data-line-item]'); if (!li) return;
      li.dataset.qty = e.detail.value; draw();
    });
    const co = $('[data-checkout-form]'); if (co) co.addEventListener('submit', (e) => e.preventDefault());
  }

  // Another block changed the cart: re-render this section from the server.
  document.addEventListener('blko:cart:updated', () => {
    if (self) return;
    document.querySelectorAll('.bcartpage36[data-mode][data-section]').forEach((root) => {
      if (root.getAttribute('aria-busy') === 'true') return;
      if (root.dataset.mode !== 'live' && !root.hasAttribute('data-is-empty')) return;
      fetch(window.location.pathname + '?section_id=' + encodeURIComponent(root.dataset.section)).then((r) => r.text()).then((html) => {
        const next = new DOMParser().parseFromString(html, 'text/html').querySelector('.bcartpage36');
        if (next && root.isConnected) { root.replaceWith(next); init(next); }
      }).catch(() => {});
    });
  });

  const boot = () => document.querySelectorAll('.bcartpage36[data-mode]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
