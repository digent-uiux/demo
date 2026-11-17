/* Lather v3 social: product chips synced with the store data; slow drift on wide screens with motion.
   The strip is doubled for a seamless loop; the copy is hidden from assistive tech and focus. */
(() => {
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const strip = root.querySelector('.s-social__strip'), track = root.querySelector('.s-social__track');
    if (!strip || !track || !track.children.length) return;
    const L = window.LATHER;
    if (L && L.products) root.querySelectorAll('.s-social__chip[data-pid]').forEach(b => {
      const p = L.products[b.dataset.pid]; if (!p) return;
      const img = b.querySelector('img'); if (img && p.img) img.src = p.img;
      b.querySelector('[data-n]').textContent = p.name;
      b.querySelector('[data-p]').textContent = L.fmt(p.price);
      const u = L.url && L.url(b.dataset.pid); if (u) b.href = u;
      b.setAttribute('aria-label', `${p.name}, ${L.fmt(p.price)}`);
    });
    const wide = matchMedia('(min-width: 761px)');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    let doubled = false;
    function arm() {
      const on = document.documentElement.classList.contains('motion') && wide.matches && !reduce.matches;
      if (on && !doubled) {
        [...track.children].forEach(t => {
          const c = t.cloneNode(true);
          c.removeAttribute('data-shopify-editor-block');
          c.setAttribute('aria-hidden', 'true'); c.setAttribute('inert', '');
          c.querySelectorAll('a, button').forEach(b => b.tabIndex = -1);
          track.appendChild(c);
        });
        doubled = true;
      }
      if (!on && doubled) { [...track.children].slice(track.children.length / 2).forEach(c => c.remove()); doubled = false; }
      strip.classList.toggle('is-drift', on);
    }
    arm();
    wide.addEventListener ? wide.addEventListener('change', arm) : wide.addListener(arm);
  }
  const run = () => document.querySelectorAll('[data-lv3-social]').forEach(init);
  if (document.readyState === 'complete') run(); else { document.addEventListener('DOMContentLoaded', run); addEventListener('load', run); }
  document.addEventListener('shopify:section:load', e => e.target.querySelectorAll('[data-lv3-social]').forEach(init));
})();
