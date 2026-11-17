(() => {
  function setup(root) {
    if (!root || root.dataset.gridReady) return;
    root.dataset.gridReady = '1';
    const chips = [...root.querySelectorAll('.s-grid__chips .chip')];
    const cards = [...root.querySelectorAll('.s-grid__card')];
    const count = root.querySelector('[data-grid-count]');
    const one = root.dataset.countOne || '[n] product';
    const many = root.dataset.countMany || '[n] products';
    const motion = () => document.documentElement.classList.contains('motion') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tags = c => (c.dataset.tags || '').toLowerCase().split(/[\s,]+/).filter(Boolean);
    let timer = 0;
    function apply(f) {
      const show = c => f === 'all' || tags(c).includes(f);
      const n = cards.filter(show).length;
      if (count) count.textContent = (n === 1 ? one : many).replace('[n]', n);
      clearTimeout(timer);
      if (!motion()) { cards.forEach(c => { c.hidden = !show(c); }); return; }
      // out: fade and blur the leavers, then remove them from the grid and bring the rest in
      cards.forEach(c => { if (!show(c) && !c.hidden) c.classList.add('is-out'); });
      timer = setTimeout(() => {
        cards.forEach(c => {
          const s = show(c);
          if (!s) { c.hidden = true; return; }
          if (c.hidden) { c.hidden = false; c.classList.add('is-out'); }
        });
        void root.offsetWidth;
        requestAnimationFrame(() => cards.forEach(c => { if (!c.hidden) { c.classList.add('in'); c.classList.remove('is-out'); } }));
      }, 340);
    }
    chips.forEach(ch => ch.addEventListener('click', () => {
      if (ch.getAttribute('aria-pressed') === 'true') return;
      chips.forEach(c => c.setAttribute('aria-pressed', String(c === ch)));
      apply((ch.dataset.f || 'all').toLowerCase());
    }));
  }
  const init = () => document.querySelectorAll('.s-grid').forEach(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', e => setup(e.target.querySelector('.s-grid')));
})();
