/* Lather v3 reveal (liquid/_tools/lv3-reveal.js, shared by every lv3 block): [data-rv] gets .in when it enters the view.
   The CSS only hides anything under html.blko-ui-motion (blko-ui-motion.js: off for ?static, reduced motion, automation). */
(() => {
  if (window.blkoLv3Reveal) return;
  window.blkoLv3Reveal = true;
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }) : null;
  const run = (root) => (root || document).querySelectorAll('[data-rv]:not(.in)').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => run()); else run();
  document.addEventListener('shopify:section:load', (e) => e.target.querySelectorAll('[data-rv]').forEach((el) => el.classList.add('in')));
})();
/* Lather v3 bundle (blko-lv3-bundle.js, without the v3 store runtime). Prices come from each row (data-cents, from the
   real variant or the demo setting); discount tiers and copy come from the section's JSON config. "Add set" posts every
   picked row with a variant to /cart/add.js with the line property "Set: <name>" (+ hidden _set_discount), then the
   button confirms inline; with demo rows only it just confirms. */
(() => {
  function setup(root) {
    if (!root || root.dataset.bundleReady) return;
    root.dataset.bundleReady = '1';
    let C = {};
    try { C = JSON.parse(root.querySelector('script[data-bundle-config]').textContent); } catch (e) { return; }
    const T = (s, m) => String(s || '').replace(/\[(\w+)\]/g, (a, k) => (m && k in m ? m[k] : a));
    const rows = [...root.querySelectorAll('.s-bundle__row')];
    const state = {}, info = {};
    rows.forEach(r => {
      const id = r.dataset.id;
      state[id] = +r.querySelector('.qty span').textContent || 0;
      info[id] = { cents: +r.dataset.cents || 0, name: r.dataset.name || id, thumb: r.dataset.thumb || '', variant: +r.dataset.variant || 0, sold: r.dataset.sold === '1', row: r };
    });
    const SETS = {};
    root.querySelectorAll('.s-bundle__group').forEach(g => {
      SETS[g.dataset.set] = { name: g.dataset.name || '', ids: [...g.querySelectorAll('.s-bundle__row')].map(r => r.dataset.id) };
    });
    const $ = sel => root.querySelector(sel);
    const slots = [...root.querySelectorAll('.s-bundle__slot')];
    const stops = [...root.querySelectorAll('[data-bundle-stops] li')];
    const ctas = [...root.querySelectorAll('[data-bundle-add]')];
    const tiers = [C.t2 || 0, C.t3 || 0, C.t4 || 0];
    const setPct = C.set || 0;
    let lastSig = '';

    const tierPct = n => (n >= 4 ? tiers[2] : n === 3 ? tiers[1] : n === 2 ? tiers[0] : 0);
    // full sets always get the set discount, whatever the item count
    const fullSets = () => Object.keys(SETS).filter(k => SETS[k].ids.length && SETS[k].ids.every(id => state[id] > 0));
    /* money: the shop's money format, whole amounts without decimals as in v3 ($18, $9.50) */
    const money = cents => {
      const n = Math.round(cents) / 100, whole = n % 1 === 0;
      const sh = whole ? n.toFixed(0) : n.toFixed(2);
      const thou = (s, t, d) => { const p = s.split('.'); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, t); return p.join(d); };
      return String(C.money || '${{amount}}').replace(/\{\{\s*(\w+)\s*\}\}/, (a, k) => {
        switch (k) {
          case 'amount_no_decimals': return thou(n.toFixed(0), ',', '.');
          case 'amount_with_comma_separator': return thou(sh, '.', ',');
          case 'amount_no_decimals_with_comma_separator': return thou(n.toFixed(0), '.', ',');
          case 'amount_with_apostrophe_separator': return thou(sh, "'", '.');
          case 'amount_with_space_separator': return thou(sh, ' ', ',');
          default: return thou(sh, ',', '.');
        }
      });
    };
    let added = false, back = 0;
    function calc() {
      const items = [];
      let cents = 0;
      Object.keys(state).forEach(id => {
        for (let i = 0; i < state[id]; i++) items.push(id);
        cents += state[id] * info[id].cents;
      });
      const n = items.length;
      const sets = fullSets();
      const pct = sets.length ? setPct : tierPct(n);
      const totalCents = Math.round(cents * (100 - pct) / 100);
      return { items, n, pct, cents, totalCents, sets };
    }
    function message(n, pct, sets) {
      if (sets.length) return T(C.msg_set, { set: SETS[sets[0]].name, pct });
      if (n === 0) return T(C.msg_empty, { next: tiers[0] });
      if (n === 1) return T(C.msg_one, { next: tiers[0] });
      if (n === 2) return T(C.msg_mid, { pct, next: tiers[1] });
      if (n === 3) return T(C.msg_mid, { pct, next: tiers[2] });
      return T(C.msg_max, { pct });
    }
    function thumbNode(id) {
      const src = info[id].thumb;
      if (src) { const img = document.createElement('img'); img.src = src; img.alt = info[id].name; return img; }
      const ph = info[id].row.querySelector('svg.s-bundle__thumb');
      if (ph) { const c = ph.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.removeAttribute('class'); return c; }
      return null;
    }
    function render(changed) {
      const { items, n, pct, cents, totalCents, sets } = calc();
      rows.forEach(r => {
        const q = state[r.dataset.id];
        r.querySelector('.qty span').textContent = q;
        r.classList.toggle('is-on', q > 0);
        r.querySelector('[data-d="-1"]').disabled = q === 0;
        r.querySelector('[data-d="1"]').disabled = info[r.dataset.id].sold;
      });
      // slots: first 4 items, the 4th shows "+n" when there are more
      slots.forEach((s, i) => {
        const id = items[i];
        const prev = s.dataset.id || '';
        if ((id || '') !== prev) {
          s.innerHTML = '';
          if (id) {
            const node = thumbNode(id);
            if (node) { if (changed && node.tagName === 'IMG') node.className = 'is-new'; s.appendChild(node); }
          }
          s.dataset.id = id || '';
        }
        s.classList.toggle('is-full', !!id);
        const old = s.querySelector('.s-bundle__more');
        if (old) old.remove();
        if (i === slots.length - 1 && n > slots.length) {
          const m = document.createElement('span');
          m.className = 's-bundle__more'; m.textContent = '+' + (n - slots.length);
          s.appendChild(m);
        }
      });
      $('[data-bundle-count]').textContent = n === 1 ? T(C.item_one, { n }) : T(C.item_many, { n });
      $('[data-bundle-fill]').style.transform = 'scaleX(' + (sets.length ? 1 : Math.min(n, 4) / 4) + ')';
      stops.forEach((s, i) => s.classList.toggle('is-hit', pct > 0 && pct >= tiers[i]));
      $('[data-bundle-msg]').textContent = message(n, pct, sets);
      const tEl = $('[data-bundle-total]');
      tEl.innerHTML = money(totalCents) + (pct ? ' <s>' + money(cents) + '</s>' : '');
      $('[data-bundle-save]').textContent = pct ? T(C.save, { amount: money(cents - totalCents) }) : (n ? C.no_discount : '');
      const sig = n + ':' + totalCents;
      if (changed && sig !== lastSig) { tEl.classList.remove('tick'); void tEl.offsetWidth; tEl.classList.add('tick'); }
      lastSig = sig;
      ctas.forEach(b => {
        b.disabled = n < 2;
        b.textContent = n < 2 ? C.cta_pick : added ? (C.added || T(C.cta_add, { amount: money(totalCents) })) : T(C.cta_add, { amount: money(totalCents) });
      });
    }
    root.addEventListener('click', e => {
      const ps = e.target.closest('[data-pick-set]');
      if (ps && SETS[ps.dataset.pickSet]) {
        added = false;
        SETS[ps.dataset.pickSet].ids.forEach(id => { if (state[id] < 1 && !info[id].sold) state[id] = 1; });
        render(true);
        return;
      }
      const b = e.target.closest('.s-bundle__row .qty button');
      if (b) {
        const id = b.closest('.s-bundle__row').dataset.id;
        if (info[id].sold) return;
        added = false;
        state[id] = Math.max(0, Math.min(9, state[id] + (+b.dataset.d)));
        render(true);
        return;
      }
      const add = e.target.closest('[data-bundle-add]');
      if (add && !add.disabled) addSet();
    });
    // variant menu: the row adds the picked variant at its price
    root.addEventListener('change', e => {
      const sel = e.target.closest('.s-bundle__var');
      if (!sel) return;
      const id = sel.closest('.s-bundle__row').dataset.id, o = sel.selectedOptions[0];
      if (!o || o.disabled) return;
      info[id].variant = +sel.value;
      info[id].cents = +o.dataset.cents || info[id].cents;
      info[id].row.dataset.variant = sel.value;
      info[id].row.dataset.cents = info[id].cents;
      const pr = info[id].row.querySelector('.price');
      if (pr) pr.textContent = money(info[id].cents);
      added = false;
      render(true);
    });
    async function addSet() {
      const { n, pct, sets } = calc();
      if (n < 2) return;
      const picked = Object.keys(state).filter(id => state[id] > 0);
      const one = sets.length === 1 && n === SETS[sets[0]].ids.length;
      const name = one ? T(C.set_name, { set: SETS[sets[0]].name }) : C.mix_name;
      const props = { Set: name };
      if (pct) props._set_discount = pct + '%';
      const live = picked.filter(id => info[id].variant);
      const msgEl = $('[data-bundle-msg]');
      if (live.length) {
        ctas.forEach(b => { b.disabled = true; });
        try {
          const rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
          const r = await fetch(rootUrl + 'cart/add.js', {
            method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ items: live.map(id => ({ id: info[id].variant, quantity: state[id], properties: props })) })
          });
          if (!r.ok) throw new Error(String(r.status));
          document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
        } catch (err) {
          render(false);
          if (msgEl && C.error) msgEl.textContent = C.error;
          return;
        }
      }
      // inline confirmation in the button label, back to the total after a moment
      added = true;
      render(false);
      clearTimeout(back);
      back = setTimeout(() => { added = false; render(false); }, 2400);
    }
    render(false);
  }
  const init = () => document.querySelectorAll('.bbundle17 .s-bundle').forEach(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', e => setup(e.target.querySelector('.bbundle17 .s-bundle')));
})();
