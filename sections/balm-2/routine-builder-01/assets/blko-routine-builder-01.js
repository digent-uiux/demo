// routine-builder-01: a concern picks, per step, the first option whose "for" list holds it; Include toggles a step;
// the apothecary label, total and ritual saving follow. Add posts the chosen variants to /cart/add.js (hidden
// _ritual property), then fires blko:cart:add + blko:cart:updated; without fetch the form posts to /cart/add.
(() => {
  function money(cents, fmt) {
    const whole = cents % 100 === 0;
    const sep = (n, d, t, dec) => { const [a, b] = (n / 100).toFixed(dec).split('.'); return a.replace(/\B(?=(\d{3})+(?!\d))/g, t) + (b ? d + b : ''); };
    const dec = whole ? 0 : 2;
    const f = fmt || '${{amount}}';
    return f.replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => {
      if (k === 'amount_no_decimals') return sep(cents, '.', ',', 0);
      if (k === 'amount_with_comma_separator') return sep(cents, ',', '.', dec);
      if (k === 'amount_no_decimals_with_comma_separator') return sep(cents, ',', '.', 0);
      if (k === 'amount_with_apostrophe_separator') return sep(cents, '.', "'", dec);
      return sep(cents, '.', ',', dec);
    });
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const form = root.querySelector('[data-form]');
    if (!form) return;
    const off = parseInt(root.dataset.off, 10) || 0, fmt = root.dataset.money;
    const steps = Array.from(form.querySelectorAll('[data-step]'));
    const lines = root.querySelector('[data-lines]'), total = root.querySelector('[data-total]');
    const note = root.querySelector('[data-note]'), add = root.querySelector('[data-add]'), err = root.querySelector('[data-err]');
    const sun = root.querySelector('[data-ico-sun]').innerHTML, moon = root.querySelector('[data-ico-moon]').innerHTML;
    const concern = () => form.querySelector('input[name$="-concern"]:checked');
    const radios = (st) => Array.from(st.querySelectorAll('input[type=radio]'));
    const inc = (st) => st.querySelector('.blko-ui-checkbox input');
    function render() {
      const c = concern(), cv = c ? c.value : '';
      root.querySelector('[data-rno]').textContent = String(c ? c.dataset.n : 1).padStart(2, '0');
      root.querySelector('[data-rfor]').textContent = cv;
      let sub = 0, n = 0, html = '';
      steps.forEach((st) => {
        const on = inc(st).checked;
        st.classList.toggle('is-off', !on);
        radios(st).forEach((r) => {
          r.disabled = !on || r.dataset.soldOut === '1';
          const m = r.closest('label').querySelector('[data-match]');
          const hit = r.dataset.for.split('|').includes(cv);
          m.hidden = !hit; m.textContent = root.dataset.matchWord + ' ' + cv;
        });
        const p = radios(st).find((r) => r.checked);
        if (!on || !p) return;
        const cents = parseInt(p.dataset.cents, 10) || 0, w = p.dataset.when;
        sub += cents; n += 1;
        html += '<li class="broutinebuilder01__ln"><span class="broutinebuilder01__lnum">' + esc(st.dataset.numeral) + '</span><span class="broutinebuilder01__lcopy"><span class="broutinebuilder01__lname">' + esc(p.dataset.name) +
          '</span><span class="broutinebuilder01__lmeta">' + (w.includes('AM') ? sun : '') + (w.includes('PM') ? moon : '') + esc(w) + (p.dataset.size ? ' · ' + esc(p.dataset.size) : '') +
          '</span></span><span class="broutinebuilder01__lprice">' + esc(money(cents, fmt)) + '</span></li>';
      });
      lines.innerHTML = n ? html : '<li class="broutinebuilder01__empty">' + esc(lines.dataset.empty) + '</li>';
      const full = n === steps.length && n > 0 && off > 0;
      const t = full ? Math.round(sub * (100 - off) / 100) : sub;
      total.innerHTML = '<span class="blko-ui-price blko-ui-price--lg"><span class="blko-ui-price__amount' + (full ? ' blko-ui-price__sale' : '') + '">' + esc(money(t, fmt)) + '</span>' +
        (full ? '<s class="blko-ui-price__compare">' + esc(money(sub, fmt)) + '</s>' : '') + '</span>';
      if (note && off > 0) note.textContent = full ? note.dataset.full : note.dataset.part;
      add.disabled = n === 0;
    }
    steps.forEach((st) => radios(st).forEach((r) => { if (r.disabled) r.dataset.soldOut = '1'; }));
    form.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name && t.name.endsWith('-concern')) {
        steps.forEach((st) => {
          const rs = radios(st).filter((r) => r.dataset.soldOut !== '1');
          const hit = rs.find((r) => r.dataset.for.split('|').includes(t.value)) || rs[0];
          if (hit) hit.checked = true;
        });
      }
      render();
    });
    form.addEventListener('submit', async (e) => {
      if (!window.fetch) return;
      e.preventDefault();
      if (err) err.hidden = true;
      const c = concern();
      const picks = steps.filter((st) => inc(st).checked).map((st) => radios(st).find((r) => r.checked)).filter(Boolean);
      if (!picks.length) return;
      const label = add.textContent;
      const done = () => { add.textContent = add.dataset.added; setTimeout(() => { add.textContent = label; }, 2200); };
      if (picks.some((r) => r.hasAttribute('data-preview'))) { done(); return; }
      const items = picks.map((r) => ({ id: Number(r.value), quantity: 1, properties: { _ritual: c ? c.value : '' } }));
      const base = (root.dataset.root || '/').replace(/\/?$/, '/');
      add.disabled = true;
      try {
        const r = await fetch(base + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items }) });
        const j = await r.json();
        add.disabled = false;
        if (!r.ok) { if (err) { err.textContent = j.description || j.message || err.textContent; err.hidden = false; } return; }
        done();
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'routine-builder-01' } }));
        fetch(base + 'cart.js').then((x) => x.json()).then((cart) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: cart.item_count, cart } }))).catch(() => {});
      } catch (x) { add.disabled = false; form.submit(); }
    });
  }
  const all = () => document.querySelectorAll('[data-broutinebuilder01]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
