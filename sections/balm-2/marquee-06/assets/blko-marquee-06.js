// marquee-06: the ticker. Only with the balm kit (html.blko-kit-balm) and not for ?static, automated browsers or
// reduced motion: it duplicates the row (aria-hidden, links out of the tab order), drifts one loop per "speed"
// seconds, stops on hover / focus (CSS) and with the pause button. Otherwise the still row stays (the final frame).
(() => {
  const live = () => {
    try {
      return document.documentElement.classList.contains('blko-kit-balm') && !new URLSearchParams(location.search).has('static') &&
        !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) { return false; }
  };
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    if (!live()) return;
    const dup = root.querySelector('[data-dup]'), btn = root.querySelector('[data-pause]');
    if (!dup) return;
    dup.hidden = false;
    dup.querySelectorAll('a').forEach((a) => { a.tabIndex = -1; });
    root.classList.add('is-running');
    if (!btn) return;
    btn.hidden = false;
    btn.addEventListener('click', () => {
      const on = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', String(on));
      btn.setAttribute('aria-label', on ? btn.dataset.playLabel : btn.dataset.pauseLabel);
      root.classList.toggle('is-paused', on);
    });
  }
  const all = () => document.querySelectorAll('[data-bmarquee06]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
