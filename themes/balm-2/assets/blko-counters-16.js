// counters-16: count scene. With the balm kit's motion on (html.blko-kit-balm: not ?static, not reduced motion), the
// figures, the gauge fill and the ledger leaders hold at 0 until the band reaches 80% of the screen, then count up once
// (1400ms, easeOutExpo, 120ms apart, the gauge first): the fill rises (scaleY) with the gauge figure and each leader
// draws (scaleX) as its row counts. Without motion the final frame stays as rendered.
(() => {
  const expo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const fmt = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const band = root.querySelector('[data-band]');
    const stats = [...root.querySelectorAll('[data-stat]')];
    if (!band || !stats.length || !document.documentElement.classList.contains('blko-kit-balm') || !('IntersectionObserver' in window)) return;
    const fill = root.querySelector('[data-fill]'), leaders = [...root.querySelectorAll('[data-leader]')];
    const paint = (p) => {
      stats.forEach((s, i) => { s.querySelector('[data-val]').textContent = fmt((+s.dataset.v || 0) * p[i], +s.dataset.d || 0); });
      if (fill) fill.style.transform = 'scaleY(' + p[0] + ')';
      leaders.forEach((l, i) => { l.style.transform = 'scaleX(' + (p[i + 1] == null ? 1 : p[i + 1]) + ')'; });
    };
    paint(stats.map(() => 0));
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = stats.map((_, i) => expo(Math.min(1, Math.max(0, (t - t0 - i * 120) / 1400))));
        paint(p);
        if (p[p.length - 1] < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { rootMargin: '0px 0px -20% 0px' });
    io.observe(band);
  }
  const all = () => document.querySelectorAll('.bcounters16').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
