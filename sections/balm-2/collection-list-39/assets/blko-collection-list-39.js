// collection-list-39: one depth drift. While the board passes ("top bottom" -> "bottom top"), --p goes 0 -> 1 on the
// board, smoothed (k 0.18 a frame); the CSS turns it into a small translate (front plate up to 28px each way, mid plates
// less, the other way). Only under the balm kit (html.blko-kit-balm), never for ?static, automated browsers or reduced
// motion: without it --p stays unset and every plate is at rest (the final frame). Stops when the value settles.
(() => {
  const live = () => {
    try {
      return document.documentElement.classList.contains('blko-kit-balm') && !new URLSearchParams(location.search).has('static') &&
        !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) { return false; }
  };
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const board = root.querySelector('[data-board]');
    if (!board || !live()) return;
    let cur = -1, raf = 0, on = false;
    const target = () => {
      const r = board.getBoundingClientRect(), h = innerHeight;
      return Math.min(1, Math.max(0, (h - r.top) / (h + r.height)));
    };
    const tick = () => {
      raf = 0;
      const to = target();
      cur = cur < 0 ? to : cur + (to - cur) * 0.18;
      if (Math.abs(to - cur) < 1e-4) cur = to;
      board.style.setProperty('--p', cur.toFixed(4));
      if (cur !== to) raf = requestAnimationFrame(tick);
    };
    const go = () => { if (on && !raf) raf = requestAnimationFrame(tick); };
    new IntersectionObserver(([e]) => { on = e.isIntersecting; go(); }, { rootMargin: '25% 0px' }).observe(board);
    addEventListener('scroll', go, { passive: true });
    addEventListener('resize', go);
  }
  const all = () => document.querySelectorAll('[data-bcollectionlist39]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
