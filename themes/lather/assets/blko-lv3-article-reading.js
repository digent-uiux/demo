/* Lather v3, article body: reading progress bar, active contents link, contents built from a real article's h2s,
   product mentions placed after their heading section, prices from window.LATHER. */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-lv3-article]');
  if (!root) return;
  const body = root.querySelector('.s-art-reading__body');
  const nav = root.querySelector('.s-art-reading__contents');
  const slug = t => t.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';

  if (root.hasAttribute('data-auto-toc') && body) {
    const hs = [...body.querySelectorAll(':scope > h2')];
    root.querySelectorAll('[data-after]').forEach(el => {
      const n = parseInt(el.dataset.after, 10) || 0;
      const next = n > 0 ? hs[n] : null;
      const tags = body.querySelector('.s-art-reading__tags');
      if (next) body.insertBefore(el, next);
      else body.insertBefore(el, tags || null);
    });
    if (nav) {
      const used = new Set();
      hs.forEach(h => {
        if (!h.id) { let id = 'art-' + slug(h.textContent), i = 2; while (used.has(id) || document.getElementById(id)) id = 'art-' + slug(h.textContent) + '-' + i++; h.id = id; }
        used.add(h.id);
        const a = document.createElement('a'); a.href = '#' + h.id; a.textContent = h.textContent.trim(); nav.appendChild(a);
      });
      if (hs.length < 2) nav.hidden = true;
    }
  }

  const progress = document.getElementById('art-progress');
  const links = nav ? [...nav.querySelectorAll('a')] : [];
  const headings = links.map(a => document.getElementById(decodeURIComponent(a.hash.slice(1))));
  let frame = 0;
  function update() {
    frame = 0;
    const rect = root.getBoundingClientRect(), distance = Math.max(1, root.offsetHeight - innerHeight * .55), ratio = Math.max(0, Math.min(1, (-rect.top + innerHeight * .2) / distance));
    if (progress) progress.style.transform = 'scaleX(' + ratio + ')';
    let active = 0;
    headings.forEach((h, i) => { if (h && h.getBoundingClientRect().top < innerHeight * .38) active = i; });
    links.forEach((a, i) => { if (i === active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  update();
  addEventListener('pagehide', () => { removeEventListener('scroll', schedule); removeEventListener('resize', schedule); if (frame) cancelAnimationFrame(frame); }, { once: true });

  const L = window.LATHER;
  if (L && L.products) root.querySelectorAll('[data-art-price]').forEach(e => { const p = L.products[e.dataset.artPrice]; if (p && p.price != null) e.textContent = L.fmt(p.price); });
});
