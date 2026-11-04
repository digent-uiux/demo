// testimonial-13: the review index (shows one quote at a time, works without the kit) and, with the balm kit's motion
// on (html.blko-kit-balm: not ?static, not reduced motion), the focus pull: the shown quote's words are wrapped once
// (spaces stay text, <em> words keep their face) and rack into focus when the block reaches 80% of the screen, again
// on every pick. Without motion nothing is split and the final frame stays as rendered.
(() => {
  const on = () => document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  function split(q) {
    if (q.dataset.split) return; q.dataset.split = '1';
    let i = 0;
    const walk = document.createTreeWalker(q, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walk.nextNode()) if (!walk.currentNode.parentElement.closest('[aria-hidden]')) texts.push(walk.currentNode);
    texts.forEach((t) => {
      const parts = t.nodeValue.split(/(\s+)/).filter(Boolean).map((w) => {
        if (!w.trim()) return document.createTextNode(w);
        const s = document.createElement('span');
        s.className = 'btestimonial13__w'; s.textContent = w; s.style.setProperty('--i', i++);
        return s;
      });
      t.replaceWith(...parts);
    });
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const figs = [...root.querySelectorAll('[data-quote]')], ixs = [...root.querySelectorAll('[data-ix]')], no = root.querySelector('[data-no]');
    const motion = on() && 'IntersectionObserver' in window;
    let seen = !motion;
    const play = (f) => {
      if (!motion) return;
      const q = f.querySelector('[data-q]');
      split(q);
      q.removeAttribute('data-in');
      if (seen) { void q.offsetWidth; q.setAttribute('data-in', ''); }
    };
    ixs.forEach((b) => b.addEventListener('click', () => {
      const n = +b.dataset.ix;
      figs.forEach((f, i) => { f.hidden = i !== n; });
      ixs.forEach((x, i) => x.setAttribute('aria-pressed', String(i === n)));
      if (no) no.textContent = String(n + 1).padStart(2, '0');
      seen = true; play(figs[n]);
    }));
    if (!motion || !figs.length) return;
    play(figs[0]);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect(); seen = true;
      const f = figs.find((x) => !x.hidden) || figs[0];
      play(f);
    }, { rootMargin: '0px 0px -20% 0px' });
    io.observe(root.querySelector('[data-stage]') || root);
  }
  const all = () => document.querySelectorAll('.btestimonial13').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
