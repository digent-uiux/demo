// image-with-text-36: three-depth scroll parallax. Writes --p (0..1, smoothed k .18) on the band while it crosses the
// viewport ("top bottom" → "bottom top"); the CSS turns it into translate on the photo, the tags and the label.
// Runs only when the balm kit has switched motion on (html.blko-kit-balm: not ?static, not reduced motion), and only
// while the band is near the viewport. Without it --p stays unset and every layer sits at rest (the final frame).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const band = root.querySelector('[data-band]');
    if (!band || band.dataset.parallax === 'false') return;
    const on = () => document.documentElement.classList.contains('blko-kit-balm');
    let raf = 0, cur = null, live = false, last = 0;
    const target = () => { const r = band.getBoundingClientRect(); const p = (innerHeight - r.top) / (innerHeight + r.height); return Math.min(1, Math.max(0, p)); };
    const tick = (t) => {
      raf = 0;
      if (!on()) { band.style.removeProperty('--p'); return; }
      const to = target();
      const dt = last ? Math.min(0.1, (t - last) / 1000) : 1 / 60; last = t;
      cur = cur == null ? to : cur + (to - cur) * (1 - Math.pow(1 - 0.18, dt * 60));
      if (Math.abs(to - cur) < 1e-4) cur = to;
      band.style.setProperty('--p', cur.toFixed(4));
      if (cur !== to) raf = requestAnimationFrame(tick); else last = 0;
    };
    const kick = () => { if (live && !raf) raf = requestAnimationFrame(tick); };
    new IntersectionObserver(([e]) => { live = e.isIntersecting; kick(); }, { rootMargin: '25% 0px' }).observe(band);
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick);
  }
  const all = () => document.querySelectorAll('.bimagewithtext36').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
