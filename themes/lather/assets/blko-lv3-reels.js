/* Lather v3 reels: centred clip is large; its clip plays (muted, lazy) only while centred and in view. */
(() => {
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const rail = root.querySelector('.s-reels__rail');
    const cards = rail ? [...rail.querySelectorAll('.s-reels__card')] : [];
    const prev = root.querySelector('[data-reels="-1"]'), next = root.querySelector('[data-reels="1"]');
    if (!cards.length) { if (prev) prev.disabled = true; if (next) next.disabled = true; return; }
    const L = window.LATHER;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // keep chips in sync with the store data
    if (L && L.products) root.querySelectorAll('.s-reels__chip[data-quick]').forEach(b => {
      const p = L.products[b.dataset.quick]; if (!p) return;
      const img = b.querySelector('img'); if (img && p.img) img.src = p.img;
      b.querySelector('[data-n]').textContent = p.name;
      b.querySelector('[data-p]').textContent = L.fmt(p.price);
      b.setAttribute('aria-label', `${b.getAttribute('aria-label').split(':')[0]}: ${p.name}, ${L.fmt(p.price)}`);
    });

    // a clip is either a lazy <video data-src> (mp4 URL) or a Shopify video_tag (<source> inside, preload none)
    const videos = cards.map(c => {
      const v = c.querySelector('video'); if (!v) return null;
      if (!v.dataset.src && !v.querySelector('source') && !v.getAttribute('src')) return null;
      v.muted = true; v.loop = true; v.playsInline = true; v.removeAttribute('autoplay'); v.removeAttribute('controls');
      v.setAttribute('aria-hidden', 'true'); v.setAttribute('tabindex', '-1');
      v.addEventListener('playing', () => v.classList.add('is-ready'), { once: true });
      return v;
    });

    let on = -1, inView = false;
    function syncVideo() {
      videos.forEach((v, i) => {
        if (!v) return;
        if (i === on && inView && !reduce) {
          if (v.dataset.src && !v.getAttribute('src')) v.src = v.dataset.src;
          const pr = v.play(); if (pr && pr.catch) pr.catch(() => {});
        } else if (!v.paused) v.pause();
      });
    }
    function pick() {
      const r = rail.getBoundingClientRect(), mid = r.left + r.width / 2;
      let best = 0, bd = Infinity;
      cards.forEach((c, i) => { const b = c.getBoundingClientRect(); const d = Math.abs(b.left + b.width / 2 - mid); if (d < bd) { bd = d; best = i; } });
      if (best === on) return;
      on = best;
      cards.forEach((c, i) => { c.classList.toggle('is-on', i === on); if (i === on) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current'); });
      if (prev) prev.disabled = on === 0;
      if (next) next.disabled = on === cards.length - 1;
      syncVideo();
    }
    function go(i, smooth = true) {
      const c = cards[Math.max(0, Math.min(cards.length - 1, i))];
      rail.scrollTo({ left: c.offsetLeft - (rail.clientWidth - c.offsetWidth) / 2, behavior: smooth && !reduce ? 'smooth' : 'auto' });
    }
    let raf = 0;
    rail.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; pick(); }); }, { passive: true });
    if (prev) prev.addEventListener('click', () => go(on - 1));
    if (next) next.addEventListener('click', () => go(on + 1));
    cards.forEach((c, i) => c.addEventListener('click', e => { if (e.target.closest('[data-quick]')) return; if (i !== on) go(i); }));
    addEventListener('resize', () => go(on, false));
    new IntersectionObserver(es => { inView = es[0].isIntersecting; syncVideo(); }, { threshold: .25 }).observe(rail);

    go(Math.min(cards.length - 1, +root.dataset.start || 0), false); pick();
    requestAnimationFrame(() => rail.classList.add('is-live'));
  }
  const run = () => document.querySelectorAll('[data-lv3-reels]').forEach(init);
  // wait for DOMContentLoaded so window.LATHER (deferred runtime) exists; init is idempotent
  if (document.readyState === 'complete') run(); else { document.addEventListener('DOMContentLoaded', run); addEventListener('load', run); }
  document.addEventListener('shopify:section:load', e => e.target.querySelectorAll('[data-lv3-reels]').forEach(init));
})();
