// order-limits-02: size chips pick the variant (live: by the first option; preview: only the label). The stepper is
// capped at the variant's limit (quantity_rule.max, else the Limit setting) minus what is already in the bag; reaching
// it draws the line under the rule and swaps the stock line for the at-limit / in-the-bag line. The Add label carries
// the live total. Add posts /cart/add.js, then dispatches cart:refresh; Shopify's 422
// (rule or stock) shows the error line. In the Theme Editor preview (no product) Add only shows the added state. The
// entry motion starts when the band scrolls in, under html.blko-ui-motion only. Re-runs on shopify:section:load.
(() => {
  function money(cents, fmt) {
    const n = cents / 100;
    const amount = n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (!fmt) return '$' + amount;
    return fmt.replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => (k === 'amount_no_decimals' ? Math.round(n).toLocaleString('en-US') : k.indexOf('comma') > -1 ? amount.replace(/,/g, ' ').replace('.', ',') : amount));
  }

  function init(root) {
    if (!root || root.dataset.bound) return;
    root.dataset.bound = '1';
    const d = root.dataset;
    const live = root.hasAttribute('data-live');
    let variants = [];
    try { variants = JSON.parse((root.querySelector('[data-variants]') || {}).textContent || '[]'); } catch (e) { variants = []; }
    const q = root.querySelector('blko-ui-quantity');
    const form = root.querySelector('[data-form]');
    if (!q || !form) return;
    const idInput = root.querySelector('[data-id]');
    const status = root.querySelector('[data-status]');
    const under = root.querySelector('[data-under]');
    const cartLink = root.querySelector('[data-cart]');
    const bag = Number(d.bag) || 0;
    let cents = Number(d.cents) || 0;
    const picked = root.querySelector('[data-picked]');
    const add = root.querySelector('[data-add]');
    let current = variants.find((v) => String(v.id) === idInput.value) || null;
    let limit = (Number(d.cap) || Number(q.dataset.max) || Number(d.limit) || 1) + bag;
    let cap = Math.max(1, limit - bag);
    let stockText = status.textContent;

    const stock = () => {
      if (!current) return stockText;
      return current.left == null ? (d.tUntracked || '').replace(/\[made\]/g, d.made) : (d.tStock || '').replace(/\[left\]/g, current.left).replace(/\[made\]/g, d.made);
    };
    const draw = () => {
      const atLimit = q.value >= cap;
      if (under) under.dataset.on = String(atLimit);
      status.classList.remove('is-error');
      status.classList.toggle('is-limit', atLimit);
      status.textContent = atLimit && bag > 0 ? (d.tBag || '').replace(/\[bag\]/g, bag).replace(/\[left\]/g, cap) : atLimit ? (d.tLimit || '').replace(/\[limit\]/g, limit) : stockText;
    };
    const resetAdd = () => {
      if (cartLink) cartLink.hidden = true;
      const sold = !!(current && !current.a);
      add.disabled = sold;
      add.textContent = sold ? d.tSold : (d.tAdd || '').replace(/\[n\]/g, q.value).replace(/\[total\]/g, money(cents * q.value, d.money));
    };

    root.addEventListener('blko-ui:change', (e) => {
      if (!q.contains(e.target) && e.target !== q) return;
      resetAdd();
      draw();
    });

    root.querySelectorAll('[data-blko-ui-options] .blko-ui-option').forEach((b) => b.addEventListener('click', () => {
      if (b.disabled) return;
      root.querySelectorAll('[data-blko-ui-options] .blko-ui-option').forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      picked.textContent = b.value;
      if (live) {
        current = variants.find((v) => v.o === b.value && v.a) || variants.find((v) => v.o === b.value) || current;
        if (current) {
          idInput.value = current.id;
          limit = Math.max(current.min || 1, current.max || Number(d.limit) || 1);
          cap = Math.max(current.min || 1, limit - bag);
          cents = current.p;
          q.dataset.min = String(current.min || 1);
          q.dataset.max = String(cap);
          stockText = stock();
          q.value = Math.min(q.value, cap);
        }
      }
      resetAdd();
      draw();
    }));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (add.disabled) return;
      if (!live) { add.textContent = d.tAdded; return; }
      try {
        const r = await fetch((window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : '/') + 'cart/add.js', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ items: [{ id: Number(idInput.value), quantity: q.value }] }),
        });
        if (!r.ok) throw new Error(String(r.status));
        add.textContent = d.tAdded;
        if (cartLink) cartLink.hidden = false;
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      } catch (err) {
        status.classList.remove('is-limit');
        status.classList.add('is-error');
        status.textContent = d.tError;
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

  const all = (scope) => scope.querySelectorAll('[data-borderlimits02]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all(document), { once: true });
  else all(document);
  document.addEventListener('shopify:section:load', (e) => all(e.target));
  document.addEventListener('shopify:section:unload', (e) => e.target.querySelectorAll('[data-borderlimits02]').forEach((r) => r.blkoCleanup && r.blkoCleanup()));
})();
