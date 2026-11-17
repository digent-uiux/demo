/* Lather v3 hero slideshow (parts/05-hero.html). One init per [data-lv3-hero]; re-inits in the theme editor. */
(() => {
  function init(root) {
    if (!root || root.dataset.lv3Ready) return;
    root.dataset.lv3Ready = '1';
    const slides = [...root.querySelectorAll('.s-hero__slide')];
    const heads = [...root.querySelectorAll('.s-hero__h')];
    const bars = [...root.querySelectorAll('.s-hero__bar')];
    const motion = document.documentElement.classList.contains('motion');
    let cur = 0;
    function go(n) {
      if (!slides.length) return;
      n = (n + slides.length) % slides.length;
      if (n === cur) return;
      [slides, heads].forEach(list => list.forEach((el, i) => {
        el.classList.toggle('is-on', i === n);
        el.setAttribute('aria-hidden', i === n ? 'false' : 'true');
      }));
      bars.forEach((b, i) => {
        if (i === n) {
          b.setAttribute('aria-current', 'true');
          const f = b.querySelector('b'); f.style.animation = 'none'; void f.offsetWidth; f.style.animation = '';
        } else b.removeAttribute('aria-current');
      });
      cur = n;
    }
    root._lv3Go = go;
    bars.forEach(b => b.addEventListener('click', () => go(+b.dataset.go)));
    root.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => go(cur + +b.dataset.step)));
    root.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' && e.target.closest('.s-hero__ctrl')) go(cur + 1);
      if (e.key === 'ArrowLeft' && e.target.closest('.s-hero__ctrl')) go(cur - 1);
    });
    // Autoplay 7s, driven by the progress-line animation; paused on hover, focus or hidden tab.
    if (!motion) { root.classList.remove('is-intro'); return; }
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('is-intro')));
    if (slides.length < 2) return;
    root.classList.add('is-auto');
    root.addEventListener('animationend', e => { if (e.animationName === 's-hero-prog') go(cur + 1); });
    let hover = false, focus = false;
    const sync = () => root.classList.toggle('is-paused', hover || focus || document.hidden || !!root._lv3Hold);
    root._lv3Sync = sync;
    root.addEventListener('mouseenter', () => { hover = true; sync(); });
    root.addEventListener('mouseleave', () => { hover = false; sync(); });
    root.addEventListener('focusin', () => { focus = true; sync(); });
    root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) { focus = false; sync(); } });
    document.addEventListener('visibilitychange', sync);
  }
  const all = (scope) => (scope || document).querySelectorAll('[data-lv3-hero]').forEach(init);
  // Like the HTML: start on DOMContentLoaded (after every deferred script, the runtime included).
  if (document.readyState === 'complete') all(); else document.addEventListener('DOMContentLoaded', () => all());
  // Theme editor: re-init a reloaded section; show and hold the selected slide.
  document.addEventListener('shopify:section:load', e => all(e.target));
  document.addEventListener('shopify:block:select', e => {
    const fig = e.target.closest && e.target.closest('.s-hero__slide'); if (!fig) return;
    const root = fig.closest('[data-lv3-hero]'); if (!root || !root._lv3Go) return;
    root._lv3Go(+fig.dataset.i); root._lv3Hold = true; root._lv3Sync && root._lv3Sync();
  });
  document.addEventListener('shopify:block:deselect', e => {
    const root = e.target.closest && e.target.closest('[data-lv3-hero]'); if (!root) return;
    root._lv3Hold = false; root._lv3Sync && root._lv3Sync();
  });
})();
