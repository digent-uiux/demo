/* Lather v3 reviews: faces are a tablist pager (click, arrow keys), plus arrows and swipe on the photo. */
(() => {
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const tabs = [...root.querySelectorAll('.s-reviews__face')];
    const slides = [...root.querySelectorAll('.s-reviews__slide')];
    if (!slides.length) return;
    let cur = 0;
    function show(i, focus) {
      cur = (i + slides.length) % slides.length;
      slides.forEach((s, k) => { s.classList.toggle('is-on', k === cur); s.setAttribute('aria-hidden', k === cur ? 'false' : 'true'); });
      tabs.forEach((t, k) => { t.setAttribute('aria-selected', k === cur ? 'true' : 'false'); t.tabIndex = k === cur ? 0 : -1; });
      if (focus && tabs[cur]) tabs[cur].focus();
    }
    tabs.forEach((t, k) => {
      t.addEventListener('click', () => show(k));
      t.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); show(cur + 1, true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); show(cur - 1, true); }
      });
    });
    root.querySelectorAll('[data-rvgo]').forEach(b => b.addEventListener('click', () => show(cur + +b.dataset.rvgo)));
    // swipe on the photo (touch)
    const stage = root.querySelector('.s-reviews__stage'); let x0 = null;
    if (stage) {
      stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 48) show(cur + (dx < 0 ? 1 : -1)); x0 = null; });
    }
    // theme editor: selecting a review block shows it
    slides.forEach((s, k) => s.addEventListener('shopify:block:select', () => show(k)));
    show(0);
  }
  const run = () => document.querySelectorAll('[data-lv3-reviews]').forEach(init);
  if (document.readyState === 'complete') run(); else { document.addEventListener('DOMContentLoaded', run); addEventListener('load', run); }
  document.addEventListener('shopify:section:load', e => e.target.querySelectorAll('[data-lv3-reviews]').forEach(init));
})();
