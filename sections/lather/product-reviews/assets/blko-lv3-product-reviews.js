/* Lather v3 product page, reviews: skin-type filter, "Show more", one lead review.
   Markup carries the first state (lead, wide, hidden extras), so nothing shifts on load.
   Filtering: leaving reviews fade out, the rest glide to their new place (transform only), new ones rise in.
   Buttons and chips only change colour. Without html.motion every change is instant. */
(() => {
  const EASE = 'cubic-bezier(.22,.61,.36,1)';
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const list = root.querySelector('[data-rev-list]'); if (!list) return;
    const items = [...list.querySelectorAll('[data-skin]')];
    const chips = [...root.querySelectorAll('[data-rev-filter]')];
    const more = root.querySelector('[data-rev-more]');
    const shown = root.querySelector('[data-rev-shown]');
    const page = Math.max(1, +root.dataset.page || 5);
    let filter = 'all', limit = page, busy = false;
    const moving = () => document.documentElement.classList.contains('motion') && !!list.animate;
    const isOn = el => !el.classList.contains('is-off');

    // counts per chip, from the reviews really on the page
    chips.forEach(c => {
      const f = c.dataset.revFilter, n = f === 'all' ? items.length : items.filter(el => el.dataset.skin === f).length;
      const out = c.querySelector('[data-n]'); if (out) out.textContent = n;
      if (f !== 'all' && !n) c.hidden = true;
    });

    function layout() {
      const match = items.filter(el => filter === 'all' || el.dataset.skin === filter);
      const vis = match.slice(0, limit);
      items.forEach(el => { el.classList.remove('is-lead', 'is-solo', 'is-pair', 'is-wide', 'is-r', 'is-nl'); el.classList.add('is-off'); });
      vis.forEach((el, i) => {
        el.classList.remove('is-off');
        if (i === 0) { el.classList.add('is-lead'); if (vis.length === 1) el.classList.add('is-solo'); else if (vis.length === 2) el.classList.add('is-pair'); }
        else if (i >= 3) el.classList.add(...[['is-wide'], [], ['is-nl'], ['is-wide', 'is-r']][(i - 3) % 4]);
      });
      if (more) more.hidden = match.length <= limit;
      if (shown) shown.textContent = (shown.dataset.tpl || '').replace('[shown]', vis.length).replace('[total]', match.length);
      chips.forEach(c => c.setAttribute('aria-pressed', c.dataset.revFilter === filter ? 'true' : 'false'));
      return vis;
    }

    function run(focusNew) {
      if (busy) return;
      const before = items.filter(isOn);
      if (!moving()) {
        const vis = layout();
        if (focusNew) { const f = vis.find(el => !before.includes(el)); if (f) f.focus({ preventScroll: true }); }
        return;
      }
      busy = true;
      const first = new Map(before.map(el => [el, { r: el.getBoundingClientRect(), lead: el.classList.contains('is-lead') }]));
      const match = items.filter(el => filter === 'all' || el.dataset.skin === filter).slice(0, limit);
      const leaving = before.filter(el => !match.includes(el));
      const out = leaving.map(el => el.animate([{ opacity: 1 }, { opacity: 0, transform: 'scale(.98)' }], { duration: 180, easing: 'ease-out', fill: 'forwards' }));
      Promise.all(out.map(a => a.finished.catch(() => {}))).then(() => {
        out.forEach(a => a.cancel());
        const vis = layout();
        let k = 0;
        vis.forEach(el => {
          el.classList.add('in');
          const f = first.get(el);
          if (f && f.lead === el.classList.contains('is-lead')) {
            const r = el.getBoundingClientRect(), dx = f.r.left - r.left, dy = f.r.top - r.top;
            if (Math.abs(dx) + Math.abs(dy) > 1) el.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 560, easing: EASE });
          } else {
            el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 520, delay: 60 * k++, easing: EASE, fill: 'backwards' });
          }
        });
        if (focusNew) { const f = vis.find(el => !before.includes(el)); if (f) f.focus({ preventScroll: true }); }
        setTimeout(() => { busy = false; }, 200);
      });
    }

    chips.forEach(c => c.addEventListener('click', () => {
      if (c.dataset.revFilter === filter) return;
      filter = c.dataset.revFilter; limit = page; run(false);
    }));
    if (more) more.addEventListener('click', () => { limit += page; run(true); });
    items.forEach(el => el.addEventListener('shopify:block:select', () => {
      filter = 'all'; limit = Math.max(limit, items.indexOf(el) + 1); run(false);
    }));
    layout();
  }
  const all = r => (r || document).querySelectorAll('[data-lv3-pdp-reviews]').forEach(init);
  if (document.readyState !== 'loading') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
