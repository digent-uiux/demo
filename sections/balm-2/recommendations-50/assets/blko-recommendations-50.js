// recommendations-50: the sample pouch. The pouch shows the cards whose button is pressed (live: the sample is in the
// cart; preview: toggled), in the order they were added, one per slot; when every slot is full the other buttons are
// aria-disabled and read "Pouch full". Live add posts /cart/add.js, remove posts /cart/change.js (quantity 0); then
// blko:cart:add (on add) and blko:cart:updated {detail: cart} are dispatched: cart-page-36 re-renders its own section
// from the server on that event, and the header count / drawer follow. A blko:cart:updated from another block resyncs
// the pressed states from detail.items. Without fetch the forms post normally. A sample landing in a slot racks into
// focus (CSS, html.blko-kit-balm only). On product/cart pages the section fetches its recommendations and swaps in.
(() => {
  let self = false;
  function setup(root) {
    const d = root.dataset, max = parseInt(d.slots, 10) || 3;
    const btns = () => Array.from(root.querySelectorAll('[data-btn]'));
    const slots = Array.from(root.querySelectorAll('[data-slot]'));
    const n = root.querySelector('[data-n]'), status = root.querySelector('[data-status]');
    let order = btns().filter((b) => b.getAttribute('aria-pressed') === 'true');
    let busy = false;
    const fmt = (cents) => {
      try { return new Intl.NumberFormat(document.documentElement.lang || undefined, { style: 'currency', currency: d.currency || 'USD', minimumFractionDigits: cents % 100 ? 2 : 0 }).format(cents / 100); }
      catch (e) { return (cents / 100).toFixed(2); }
    };
    const card = (b) => b.closest('[data-card]');
    const draw = () => {
      order = order.filter((b) => b.isConnected && b.getAttribute('aria-pressed') === 'true');
      btns().forEach((b) => { if (b.getAttribute('aria-pressed') === 'true' && !order.includes(b)) order.push(b); });
      const full = order.length >= max;
      btns().forEach((b) => {
        const on = b.getAttribute('aria-pressed') === 'true';
        if (!on && full) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
      });
      slots.forEach((li, i) => {
        const b = order[i], well = li.querySelector('.brecommendations50__well'), name = li.querySelector('.brecommendations50__sname');
        const id = b ? (b.dataset.variant || card(b).dataset.name) : '';
        if (li.dataset.id === id) return;
        li.dataset.id = id;
        well.textContent = '';
        if (!b) {
          li.classList.remove('is-full');
          const s = document.createElement('span'); s.className = 'brecommendations50__snum'; s.setAttribute('aria-hidden', 'true'); s.textContent = String(i + 1).padStart(2, '0');
          well.append(s); name.textContent = d.tEmpty; return;
        }
        li.classList.add('is-full');
        const nm = card(b).dataset.name, src = card(b).querySelector('img.brecommendations50__img');
        if (src) { const im = document.createElement('img'); im.src = src.currentSrc || src.src; im.alt = ''; im.className = 'brecommendations50__simg'; well.append(im); }
        else { const ph = card(b).querySelector('.brecommendations50__media svg'); if (ph) well.append(ph.cloneNode(true)); }
        const x = document.createElement('button'); x.type = 'button'; x.className = 'brecommendations50__x';
        x.setAttribute('aria-label', d.tRemove.replace('[name]', nm));
        x.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
        x.addEventListener('click', () => toggle(b));
        well.append(x); name.textContent = nm;
      });
      if (n) n.textContent = order.length;
      if (status) {
        status.textContent = '';
        if (!order.length) status.textContent = status.dataset.idle;
        else { const t = document.createElement('b'); t.textContent = fmt(order.reduce((s, b) => s + (parseInt(b.dataset.cents, 10) || 0), 0)); status.append(t, ' · ' + status.dataset.tail); }
      }
    };
    const setBusy = (b, label) => {
      if (label) { b.setAttribute('aria-busy', 'true'); const l = b.querySelector('[data-busy-label]'); if (l) l.textContent = label; }
      else b.removeAttribute('aria-busy');
    };
    const post = (path, body) => fetch((d.root || '/').replace(/\/?$/, '/') + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: JSON.stringify(body) })
      .then((r) => r.json().then((j) => { if (!r.ok) throw j; return j; }));
    const announce = () => fetch((d.root || '/').replace(/\/?$/, '/') + 'cart.js').then((r) => r.json()).then((cart) => {
      self = true; document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: cart })); self = false;
    }).catch(() => {});
    const toggle = (b) => {
      if (busy || b.disabled || b.getAttribute('aria-busy') === 'true') return;
      const on = b.getAttribute('aria-pressed') === 'true';
      if (!on && b.getAttribute('aria-disabled') === 'true') return;
      busy = true; setBusy(b, on ? d.tRemoving : d.tAdding);
      const done = (pressed) => { busy = false; setBusy(b); b.setAttribute('aria-pressed', String(pressed)); draw(); };
      if (!b.dataset.variant) { setTimeout(() => done(!on), 450); return; } // preview card
      if (!window.fetch) { busy = false; setBusy(b); if (!on) b.form.submit(); return; }
      const req = on ? post('cart/change.js', { id: b.dataset.key, quantity: 0 }) : post('cart/add.js', { items: [{ id: +b.dataset.variant, quantity: 1 }] });
      req.then((j) => {
        if (!on) {
          const it = (j.items || [j])[0]; b.dataset.key = (it && it.key) || '';
          document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'recommendations-50' } }));
        } else b.dataset.key = '';
        done(!on); announce();
      }).catch((e) => { busy = false; setBusy(b); if (status) status.textContent = (e && (e.description || e.message)) || d.tError; });
    };
    root.addEventListener('click', (e) => { const b = e.target.closest('[data-btn]'); if (b && root.contains(b) && b.type !== 'submit') toggle(b); });
    root.addEventListener('submit', (e) => {
      const f = e.target.closest('[data-add]'); if (!f || !window.fetch) return;
      e.preventDefault(); const b = f.querySelector('[data-btn]'); if (b) toggle(b);
    });
    // Another block changed the cart: the pressed state follows the cart lines.
    document.addEventListener('blko:cart:updated', (e) => {
      if (self || !root.isConnected || !e.detail || !Array.isArray(e.detail.items)) return;
      const keys = new Map(e.detail.items.map((it) => [String(it.variant_id), it.key]));
      btns().forEach((b) => { if (!b.dataset.variant) return; const k = keys.get(b.dataset.variant); b.dataset.key = k || ''; b.setAttribute('aria-pressed', String(!!k)); });
      draw();
    });
    draw();
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    if (!root.dataset.url) { setup(root); return; }
    if (!window.fetch) return;
    fetch(root.dataset.url).then((r) => r.text()).then((html) => {
      const fresh = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-brecommendations50]');
      if (!fresh || !fresh.querySelector('[data-items] > li')) return;
      root.innerHTML = fresh.innerHTML; root.hidden = false; setup(root);
    }).catch(() => {});
  }
  const all = () => document.querySelectorAll('[data-brecommendations50]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
