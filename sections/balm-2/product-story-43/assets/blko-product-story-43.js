// product-story-43: "Read the whole letter" opens / folds the rest of the letter.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const b = root.querySelector('[data-toggle]'), m = root.querySelector('[data-more]');
    if (!b || !m) return;
    b.addEventListener('click', () => {
      const on = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(on)); m.hidden = !on;
      b.textContent = on ? b.dataset.close : b.dataset.open;
    });
  }
  const all = () => document.querySelectorAll('.bproductstory43').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
