// blog-64: the drawer scene. With the balm kit on and motion allowed, the cards wait lowered in the drawer and rise to
// their pulled heights once the drawer is a fifth into the screen (CSS does the move; data-cine = "" → "in" → "done").
// Without motion the cards stand at their final heights.
(() => {
  function init(root) {
    const d = root.querySelector('[data-drawer]');
    if (!d || d.dataset.bound) return; d.dataset.bound = '1';
    const on = document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!on || !('IntersectionObserver' in window)) return;
    d.dataset.cine = '';
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      d.dataset.cine = 'in';
      setTimeout(() => { d.dataset.cine = 'done'; }, 1400);
    }, { rootMargin: '0px 0px -20% 0px' });
    io.observe(d);
  }
  const all = () => document.querySelectorAll('.bblog64').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
