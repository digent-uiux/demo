/* Lather v3 founder: parallax that never crops the face. While the section enters, the photo settles 1.06 -> 1 from the
   top edge; once the section top passes the viewport top, the photo drifts down slower than the page. Motion-gated. */
(() => {
  function init(sec) {
    if (sec.dataset.lv3Ready) return;
    const img = sec.querySelector('.s-founder__img'); if (!img) return;
    if (!document.documentElement.classList.contains('motion')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sec.dataset.lv3Ready = '1';
    let live = false, raf = 0;
    function frame() {
      raf = 0;
      const r = sec.getBoundingClientRect(), vh = innerHeight;
      let s = 1, d = 0;
      if (r.top > 0) s = 1 + 0.06 * Math.min(1, r.top / vh);
      else d = Math.min(-r.top * 0.14, r.height * 0.18);
      img.style.transform = `translate3d(0,${d.toFixed(1)}px,0) scale(${s.toFixed(4)})`;
    }
    const req = () => { if (live && !raf) raf = requestAnimationFrame(frame); };
    new IntersectionObserver(es => { live = es[0].isIntersecting; req(); }, { rootMargin: '10% 0px' }).observe(sec);
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', req);
    frame();
  }
  const run = () => document.querySelectorAll('[data-lv3-founder]').forEach(init);
  // wait for DOMContentLoaded so html.motion (set by the shared runtime) is in place; init is idempotent
  if (document.readyState === 'complete') run(); else { document.addEventListener('DOMContentLoaded', run); addEventListener('load', run); }
  document.addEventListener('shopify:section:load', e => e.target.querySelectorAll('[data-lv3-founder]').forEach(init));
})();
