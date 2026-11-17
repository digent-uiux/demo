// model-info-01: the model rows are a radio group (click, arrow keys). Picking one shows its photo (crossfade), moves
// the ruler marker to its height and shows its measurement sheet (the figures lift in by CSS when the sheet appears).
// The entry motion (photo, ruler ticks, marker climb) starts when the band scrolls in, under html.blko-ui-motion only.
// Re-runs on shopify:section:load.
(() => {
  function init(root) {
    if (!root || root.dataset.bound) return;
    root.dataset.bound = '1';
    const picks = [...root.querySelectorAll('[data-pick]')];
    const shots = [...root.querySelectorAll('[data-shot]')];
    const sheets = [...root.querySelectorAll('[data-sheet]')];
    const mark = root.querySelector('[data-mark]');
    const tag = root.querySelector('[data-mark-tag]');
    if (!picks.length) return;

    const pick = (i, focus) => {
      picks.forEach((b, j) => { b.setAttribute('aria-checked', String(j === i)); b.tabIndex = j === i ? 0 : -1; });
      shots.forEach((s, j) => { s.classList.toggle('is-on', j === i); if (s.tagName === 'IMG') { if (j === i) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true'); } });
      sheets.forEach((s, j) => { s.hidden = j !== i; });
      if (mark) mark.style.translate = '0 ' + picks[i].dataset.at + '%';
      if (tag) tag.textContent = picks[i].dataset.ft;
      if (focus) picks[i].focus();
    };
    picks.forEach((b, i) => {
      b.tabIndex = b.getAttribute('aria-checked') === 'true' ? 0 : -1;
      b.addEventListener('click', () => pick(i));
      b.addEventListener('keydown', (e) => {
        const k = e.key;
        if (k !== 'ArrowDown' && k !== 'ArrowRight' && k !== 'ArrowUp' && k !== 'ArrowLeft') return;
        e.preventDefault();
        const n = (i + (k === 'ArrowDown' || k === 'ArrowRight' ? 1 : -1) + picks.length) % picks.length;
        pick(n, true);
      });
    });

    if (document.documentElement.classList.contains('blko-ui-motion') && 'IntersectionObserver' in window) {
      let t = 0;
      const io = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        root.dataset.in = '';
        io.disconnect();
        t = window.setTimeout(() => { root.dataset.done = ''; }, 1300);
      }, { rootMargin: '0px 0px -20% 0px' });
      io.observe(root);
      root.blkoCleanup = () => { io.disconnect(); clearTimeout(t); };
    } else {
      root.dataset.in = '';
      root.dataset.done = '';
    }
  }

  const all = (scope) => scope.querySelectorAll('[data-bmodelinfo01]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all(document), { once: true });
  else all(document);
  document.addEventListener('shopify:section:load', (e) => all(e.target));
  document.addEventListener('shopify:section:unload', (e) => e.target.querySelectorAll('[data-bmodelinfo01]').forEach((r) => r.blkoCleanup && r.blkoCleanup()));
})();
