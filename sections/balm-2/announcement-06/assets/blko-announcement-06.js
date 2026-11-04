// announcement-06: the dismiss button hides the bar for the rest of the visit (sessionStorage, ignored when blocked).
(() => {
  const KEY = 'blko-ann06-off';
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const bar = root.querySelector('.bannouncement06__bar'), x = root.querySelector('[data-dismiss]');
    const designer = window.Shopify && Shopify.designMode;
    try { if (!designer && sessionStorage.getItem(KEY)) bar.hidden = true; } catch (e) {}
    x.addEventListener('click', () => {
      bar.hidden = true;
      try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
    });
  }
  const all = () => document.querySelectorAll('[data-bannouncement06]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
