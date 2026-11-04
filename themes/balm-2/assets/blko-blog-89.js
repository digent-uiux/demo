// blog-89: the bench window. Pointing at an index entry (fine pointers) or focusing it puts that note in the arched
// window: its layer gets data-on (the previous keeps data-was underneath), the sill plate's figure number and topic
// follow, only the shown picture keeps its alt text. Under the balm kit the window is marked data-live after the first
// pick, so the CSS fills the arch from the sill up (clip-path + scale); without motion the picture just swaps.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const win = root.querySelector('[data-win]'), rows = Array.from(root.querySelectorAll('[data-i]'));
    const pics = Array.from(root.querySelectorAll('[data-pic]'));
    const fn = root.querySelector('[data-fn]'), ft = root.querySelector('[data-ft]');
    if (!win || rows.length < 2) return;
    const motion = document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    let cur = 1;
    const pick = (i) => {
      if (i === cur) return;
      pics.forEach((p) => {
        const n = +p.dataset.pic, img = p.querySelector('img');
        p.toggleAttribute('data-was', n === cur);
        p.toggleAttribute('data-on', n === i);
        if (img) img.alt = n === i ? (p.dataset.alt || '') : '';
      });
      rows.forEach((r) => r.toggleAttribute('data-on', +r.dataset.i === i));
      const row = rows.find((r) => +r.dataset.i === i);
      if (fn) fn.textContent = (i < 10 ? '0' : '') + i;
      if (ft && row) ft.textContent = row.dataset.topic || '';
      if (motion) win.setAttribute('data-live', '');
      cur = i;
    };
    rows.forEach((r) => {
      r.addEventListener('pointerenter', () => { if (fine.matches) pick(+r.dataset.i); });
      r.addEventListener('focusin', () => pick(+r.dataset.i));
    });
    root.addEventListener('shopify:block:select', (e) => {
      const r = e.target.closest && e.target.closest('[data-i]');
      if (r) pick(+r.dataset.i);
    });
  }
  const all = () => document.querySelectorAll('[data-bblog89]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
