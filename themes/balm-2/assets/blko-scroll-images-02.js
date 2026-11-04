// scroll-images-02: the pinned rack-focus scene. Only with the balm kit (html.blko-kit-balm), and not for ?static,
// automated browsers or reduced motion; otherwise the markup stays the final frame. Progress runs "top top" →
// "bottom bottom" over the track, smoothed (k 0.18); each change of focus takes 0.12 of the track.
(() => {
  const live = () => {
    try {
      return document.documentElement.classList.contains('blko-kit-balm') && !new URLSearchParams(location.search).has('static') &&
        !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) { return false; }
  };
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const photos = Array.from(root.querySelectorAll('[data-photo]')), items = Array.from(root.querySelectorAll('[data-item]'));
    const n = photos.length;
    if (n < 2 || !live()) return;
    const track = root.querySelector('[data-track]'), bar = root.querySelector('[data-bar]'), count = root.querySelector('[data-count]');
    root.style.setProperty('--len', root.dataset.len || 3);
    root.classList.add('is-pinned');
    // focus changes spread evenly: change k is centred at (k + 1) / n of the way, 0.12 long
    const changes = Array.from({ length: n - 1 }, (_, k) => { const c = (k + 1) / n; return [c - 0.06, c + 0.06]; });
    let target = 0, p = 0, raf = 0;
    const draw = () => {
      const c = changes.map(([a, b]) => ease(clamp((p - a) / (b - a))));
      const w = photos.map((_, i) => (i === 0 ? 1 : c[i - 1]) * (i < n - 1 ? 1 - c[i] : 1));
      photos.forEach((ph, i) => {
        const v = w[i];
        ph.style.opacity = v.toFixed(3);
        ph.style.filter = v > 0.995 ? '' : 'blur(' + ((1 - v) * 14).toFixed(1) + 'px)';
        ph.style.transform = 'scale(' + (1 + (1 - v) * 0.04).toFixed(4) + ')';
        ph.style.visibility = v < 0.005 ? 'hidden' : '';
      });
      items.forEach((li, i) => {
        const v = w[i] || 0;
        li.style.opacity = (0.32 + v * 0.68).toFixed(3);
        li.style.filter = v > 0.99 ? '' : 'blur(' + ((1 - v) * 1.5).toFixed(2) + 'px)';
      });
      if (bar) bar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      if (count) count.textContent = String(w.indexOf(Math.max(...w)) + 1).padStart(2, '0');
    };
    const tick = () => {
      p += (target - p) * 0.18;
      if (Math.abs(target - p) < 0.0005) p = target;
      draw();
      raf = p === target ? 0 : requestAnimationFrame(tick);
    };
    const measure = () => {
      const r = track.getBoundingClientRect(), span = r.height - innerHeight;
      target = span > 0 ? clamp(-r.top / span) : 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    addEventListener('scroll', measure, { passive: true });
    addEventListener('resize', measure);
    measure(); p = target; draw();
  }
  const all = () => document.querySelectorAll('[data-bscrollimages02]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
