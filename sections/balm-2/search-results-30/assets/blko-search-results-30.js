// search-results-30: step chips filter the tiles (and renumber them), the clear button empties the field, and Add puts
// the product in the bag (/cart/add.js → blko:cart:add + blko:cart:updated) or takes it out (/cart/change.js). Tiles
// without a product (theme-editor preview) only toggle.
(() => {
  const root_ = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  const post = (path, body) => fetch(root_ + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
    .then((r) => r.json().then((j) => { if (!r.ok) throw j; return j; }));
  const ping = () => fetch(root_ + 'cart.js').then((r) => r.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: c }))).catch(() => {});
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const input = root.querySelector('[data-q]'), clear = root.querySelector('[data-clear]');
    if (input && clear) {
      input.addEventListener('input', () => { clear.hidden = !input.value; });
      clear.addEventListener('click', () => { input.value = ''; clear.hidden = true; input.focus(); });
    }
    const items = [...root.querySelectorAll('[data-item]')], status = root.querySelector('[data-status]');
    const chips = [...root.querySelectorAll('[data-step-btn]')];
    const show = (step) => {
      let n = 0;
      items.forEach((li) => {
        const on = !step || li.dataset.step === step; li.hidden = !on;
        if (on) { n++; const no = li.querySelector('[data-no]'); if (no) no.textContent = String(n).padStart(2, '0'); }
      });
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.stepBtn === step)));
      if (status) status.textContent = status.dataset.t.replace('[n]', n);
    };
    chips.forEach((c) => c.addEventListener('click', () => show(c.dataset.stepBtn)));
    root.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', async () => {
      if (b.getAttribute('aria-busy') === 'true') return;
      const on = b.getAttribute('aria-pressed') === 'true', vid = b.dataset.vid;
      const set = (v) => {
        b.setAttribute('aria-pressed', String(v)); b.setAttribute('aria-label', v ? b.dataset.aRem : b.dataset.aAdd);
        b.querySelector('[data-off]').hidden = v; b.querySelector('[data-on]').hidden = !v;
      };
      if (!vid) { set(!on); return; }
      b.setAttribute('aria-busy', 'true');
      try {
        if (on) { await post('cart/change.js', { id: String(vid), quantity: 0 }); set(false); }
        else {
          const j = await post('cart/add.js', { items: [{ id: Number(vid), quantity: 1 }] });
          set(true);
          document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'search-results-30' } }));
        }
        ping();
      } catch (e) { /* keep the state; the cart did not change */ }
      b.removeAttribute('aria-busy');
    }));
  }
  const all = () => document.querySelectorAll('.bsearchresults30').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
