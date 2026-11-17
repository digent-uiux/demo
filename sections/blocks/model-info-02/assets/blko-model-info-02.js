// model-info-02: "Choose X" picks that column (its button turns solid, the others outline) and its variant: the buy
// row shows the colour and size and its price. Add posts /cart/add.js with that variant, then dispatches cart:refresh;
// in the Theme Editor preview (no product) it only shows the added state. The entry motion (photo shutters, size letters)
// starts when the band scrolls in, under html.blko-ui-motion only. Re-runs on shopify:section:load.
(() => {
  function money(cents, fmt) {
    const n = cents / 100;
    const amount = n.toLocaleString('en-US', { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });
    if (!fmt) return '$' + amount;
    return fmt.replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => (k === 'amount_no_decimals' ? Math.round(n).toLocaleString('en-US') : k.indexOf('comma') > -1 ? amount.replace(/,/g, ' ').replace('.', ',') : amount));
  }
  const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);

  function init(root) {
    if (!root || root.dataset.bound) return;
    root.dataset.bound = '1';
    const d = root.dataset;
    const live = root.hasAttribute('data-live');
    const cols = [...root.querySelectorAll('[data-col]')];
    const pickEl = root.querySelector('[data-pick]');
    const priceEl = root.querySelector('[data-price] .blko-ui-price__amount');
    const add = root.querySelector('[data-add]');
    const error = root.querySelector('[data-error]');
    if (!cols.length || !add) return;
    let current = cols.find((c) => c.hasAttribute('data-on')) || cols[0];
    const fill = (t, c) => (t || '').replace(/\[size\]/g, c.dataset.size).replace(/\[colour\]/g, c.dataset.colour);

    const resetAdd = () => {
      const ok = current.dataset.ok !== 'false';
      add.disabled = !ok;
      add.textContent = ok ? d.tAdd : d.tSold;
    };

    cols.forEach((c) => {
      const b = c.querySelector('[data-choose]');
      if (!b) return;
      b.addEventListener('click', () => {
        current = c;
        cols.forEach((o) => {
          const on = o === c;
          const ob = o.querySelector('[data-choose]');
          o.toggleAttribute('data-on', on);
          ob.setAttribute('aria-pressed', String(on));
          ob.classList.toggle('blko-ui-button--primary', on);
          ob.classList.toggle('blko-ui-button--outline', !on);
          ob.textContent = fill(on ? d.tChosen : d.tChoose, o);
        });
        pickEl.textContent = cap(fill(d.tPick, c));
        if (priceEl) priceEl.textContent = money(Number(c.dataset.price) || 0, d.money);
        error.hidden = true;
        resetAdd();
      });
    });

    add.addEventListener('click', async () => {
      if (add.disabled) return;
      if (!live) { add.textContent = fill(d.tAdded, current); return; }
      try {
        const r = await fetch((window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : '/') + 'cart/add.js', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ items: [{ id: Number(current.dataset.id), quantity: 1 }] }),
        });
        if (!r.ok) throw new Error(String(r.status));
        add.textContent = fill(d.tAdded, current);
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      } catch (err) {
        error.textContent = d.tError;
        error.hidden = false;
      }
    });

    if (document.documentElement.classList.contains('blko-ui-motion') && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        root.dataset.in = '';
        io.disconnect();
      }, { rootMargin: '0px 0px -20% 0px' });
      io.observe(root);
      root.blkoCleanup = () => io.disconnect();
    } else {
      root.dataset.in = '';
    }
  }

  const all = (scope) => scope.querySelectorAll('[data-bmodelinfo02]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all(document), { once: true });
  else all(document);
  document.addEventListener('shopify:section:load', (e) => all(e.target));
  document.addEventListener('shopify:section:unload', (e) => e.target.querySelectorAll('[data-bmodelinfo02]').forEach((r) => r.blkoCleanup && r.blkoCleanup()));
})();
