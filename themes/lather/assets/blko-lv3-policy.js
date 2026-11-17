/* Lather v3 policies: "On this page" follows the reading position (aria-current on the link of the heading in view). */
(() => {
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const links = [...root.querySelectorAll('.s-policy__toc a[href^="#"]')];
    const heads = links.map(a => document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).filter(Boolean);
    if (!heads.length) return;
    let current = '', raf = 0;
    const update = () => {
      raf = 0; let pick = heads[0];
      heads.forEach(h => { if (h.getBoundingClientRect().top <= 160) pick = h; });
      if (pick.id === current) return; current = pick.id;
      links.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + current ? 'true' : 'false'));
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  }
  const all = r => (r || document).querySelectorAll('[data-lv3-policy]').forEach(init);
  if (document.readyState !== 'loading') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
