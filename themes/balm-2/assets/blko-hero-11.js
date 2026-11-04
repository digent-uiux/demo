// hero-11: the pointer light. On fine pointers an amber patch follows the cursor over the photo (damped, k 0.1) and
// settles back to rest on leave; the loop stops when still. Off for ?static, reduced motion, automated browsers and
// without the balm kit (html.blko-kit-balm), where the patch stays at rest (the final frame).
(() => {
  const live = () => {
    try {
      return document.documentElement.classList.contains('blko-kit-balm') && !new URLSearchParams(location.search).has('static') &&
        !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer: fine)').matches;
    } catch (e) { return false; }
  };
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const f = root.querySelector('[data-fig]');
    if (!f || !live()) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const tick = () => {
      x += (tx - x) * 0.1; y += (ty - y) * 0.1;
      f.style.setProperty('--h11-x', (62 + x * 22).toFixed(2) + '%');
      f.style.setProperty('--h11-y', (40 + y * 20).toFixed(2) + '%');
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const go = () => { if (!raf) raf = requestAnimationFrame(tick); };
    f.addEventListener('pointermove', (e) => {
      const r = f.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1; ty = ((e.clientY - r.top) / r.height) * 2 - 1; go();
    });
    f.addEventListener('pointerleave', () => { tx = 0; ty = 0; go(); });
  }
  const all = () => document.querySelectorAll('[data-bhero11]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
