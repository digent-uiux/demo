/* Lather v3 bundle (port of home-v3 parts/30-bundle.html).
   Prices come from each row (data-cents, from the real variant or the demo setting); discount tiers and copy come
   from the section's JSON config. "Add set" calls window.LATHER.add('set', 1, {items, properties}): when every
   picked row is a real product the runtime posts each variant to /cart/add.js with the line property
   "Set: <name>"; otherwise the set goes to the demo cart as one line, as in the HTML. */
(() => {
  function setup(root) {
    if (!root || root.dataset.bundleReady || !window.LATHER) return;
    root.dataset.bundleReady = '1';
    const L = window.LATHER;
    let C = {};
    try { C = JSON.parse(root.querySelector('script[data-bundle-config]').textContent); } catch (e) { return; }
    const T = (s, m) => String(s || '').replace(/\[(\w+)\]/g, (a, k) => (m && k in m ? m[k] : a));
    const rows = [...root.querySelectorAll('.s-bundle__row')];
    const state = {}, info = {};
    rows.forEach(r => {
      const id = r.dataset.id;
      state[id] = +r.querySelector('.qty span').textContent || 0;
      info[id] = { cents: +r.dataset.cents || 0, name: r.dataset.name || id, thumb: r.dataset.thumb || '', row: r };
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
    const money = cents => L.fmt(cents / 100);
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
        b.textContent = n < 2 ? C.cta_pick : T(C.cta_add, { amount: money(totalCents) });
      });
    }
    root.addEventListener('click', e => {
      const ps = e.target.closest('[data-pick-set]');
      if (ps && SETS[ps.dataset.pickSet]) {
        SETS[ps.dataset.pickSet].ids.forEach(id => { if (state[id] < 1) state[id] = 1; });
        render(true);
        return;
      }
      const b = e.target.closest('.s-bundle__row .qty button');
      if (b) {
        const id = b.closest('.s-bundle__row').dataset.id;
        state[id] = Math.max(0, Math.min(9, state[id] + (+b.dataset.d)));
        render(true);
        return;
      }
      const add = e.target.closest('[data-bundle-add]');
      if (add && !add.disabled) {
        const { n, pct, totalCents, sets } = calc();
        if (n < 2) return;
        const picked = Object.keys(state).filter(id => state[id] > 0);
        const list = picked.map(id => info[id].name + (state[id] > 1 ? ' ×' + state[id] : '')).join(', ');
        const one = sets.length === 1 && n === SETS[sets[0]].ids.length;
        const name = one ? T(C.set_name, { set: SETS[sets[0]].name }) : C.mix_name;
        const props = { Set: name };
        if (pct) props._set_discount = pct + '%';
        const first = picked[0];
        L.add('set', 1, {
          key: 'set-' + Date.now(),
          items: picked.map(id => ({ id, qty: state[id] })),
          properties: props,
          name,
          price: totalCents / 100,
          img: info[first].thumb || (L.products[first] && L.products[first].img) || '',
          note: T(C.note, { n, pct, list })
        });
      }
    });
    render(false);
  }
  const init = () => document.querySelectorAll('.s-bundle').forEach(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', e => setup(e.target.querySelector('.s-bundle')));
})();
