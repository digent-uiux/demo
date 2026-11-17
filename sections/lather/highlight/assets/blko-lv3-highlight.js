/* Lather v3 highlight (parts/10-highlight.html): words and photo pills fill in with scroll. */
(() => {
  function init(root) {
    if (!root || root.dataset.lv3Ready) return;
    const txt = root.querySelector('.s-hl__txt');
    if (!txt || !document.documentElement.classList.contains('motion')) return;
    root.dataset.lv3Ready = '1';
    // wrap each word of the text nodes in a span; pills stay as they are and count as a word
    [...txt.childNodes].forEach(n => {
      if (n.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(t => {
        if (!t) return;
        if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
        const s = document.createElement('span'); s.className = 's-hl__w'; s.textContent = t; frag.appendChild(s);
      });
      n.replaceWith(frag);
    });
    const units = [...txt.querySelectorAll('.s-hl__w, .s-hl__pill')];
    root.classList.add('is-armed');
    let raf = 0, live = false;
    function paint() {
      raf = 0;
      const r = txt.getBoundingClientRect(), vh = innerHeight;
      // 0 when the text top reaches 85% of the viewport, 1 when its bottom reaches 45%
      const p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .4)));
      const lit = p * (units.length + 2);
      units.forEach((u, i) => u.style.setProperty('--o', (.35 + .65 * Math.min(1, Math.max(0, lit - i))).toFixed(3)));
    }
    const ask = () => { if (live && !raf) raf = requestAnimationFrame(paint); };
    new IntersectionObserver(es => { live = es[0].isIntersecting; ask(); }, { rootMargin: '10% 0px' }).observe(root);
    addEventListener('scroll', ask, { passive: true });
    addEventListener('resize', ask);
    paint();
  }
  const all = (scope) => (scope || document).querySelectorAll('[data-lv3-hl]').forEach(init);
  // Like the HTML: start on DOMContentLoaded (after every deferred script, the runtime included).
  if (document.readyState === 'complete') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
