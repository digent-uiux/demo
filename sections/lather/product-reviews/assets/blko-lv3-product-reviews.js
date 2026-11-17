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
/* "Write a review": opens the form drawer (<dialog>), checks it, sends it, says it will appear after a check.
   data-rev-write="form": the drawer in this section. Sends through the form's own action (Shopify contact form, tag
   "review") with fetch; a captcha or an error falls back to a normal submit. The static demo (data-demo) sends nothing.
   data-rev-write="app": a reviews app owns the form; the button clicks the app's own "Write a review" control. */
(() => {
  const motion = () => document.documentElement.classList.contains('motion') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  function init(root) {
    const btn = root.querySelector('[data-rev-write]');
    if (!btn || btn.dataset.lv3Ready) return; btn.dataset.lv3Ready = '1';

    if (btn.dataset.revWrite === 'app') {
      btn.addEventListener('click', () => {
        const box = root.querySelector('.s-pdp-reviews__apps'); if (!box) return;
        let t = btn.dataset.appSelector ? document.querySelector(btn.dataset.appSelector) : null;
        if (!t) t = [...box.querySelectorAll('button, a, [role="button"]')].find(el => /write\s+(a\s+)?review/i.test(el.textContent || el.getAttribute('aria-label') || ''));
        if (t) t.click(); else { box.scrollIntoView({ behavior: motion() ? 'smooth' : 'auto', block: 'start' }); }
      });
      return;
    }

    const dlg = root.querySelector('[data-rev-dialog]'); if (!dlg || !dlg.showModal) return;
    const form = dlg.querySelector('form');
    const ask = dlg.querySelector('[data-rev-ask]'), done = dlg.querySelector('[data-rev-done]');
    const stars = [...dlg.querySelectorAll('[data-rev-stars] input')], starBox = dlg.querySelector('[data-rev-stars]');
    const rateTxt = dlg.querySelector('[data-rev-rate-txt]');
    const file = dlg.querySelector('[data-rev-file]'), pick = dlg.querySelector('[data-rev-pick]');
    const photoNote = dlg.querySelector('[data-rev-photo-name]');
    const submit = dlg.querySelector('[type="submit"]');
    const T = dlg.dataset;
    let url = null;

    const paint = n => stars.forEach((s, i) => s.nextElementSibling.classList.toggle('on', i < n));
    const val = () => { const c = stars.find(s => s.checked); return c ? +c.value : 0; };
    const sayRate = () => { const n = val(); if (rateTxt) rateTxt.textContent = n ? (T.rateTpl || '[n] out of 5').replace('[n]', n) : ''; };
    stars.forEach((s, i) => {
      const l = s.nextElementSibling;
      l.addEventListener('mouseenter', () => paint(i + 1));
      l.addEventListener('mouseleave', () => paint(val()));
      s.addEventListener('change', () => { paint(val()); sayRate(); setErr('rating', ''); });
    });

    function setErr(name, msg) {
      const out = dlg.querySelector(`[data-rev-err="${name}"]`); if (out) out.textContent = msg;
      if (name === 'rating') { starBox.classList.toggle('is-bad', !!msg); return; }
      const f = form.querySelector(`[data-rev-field="${name}"]`);
      if (f) { if (msg) f.setAttribute('aria-invalid', 'true'); else f.removeAttribute('aria-invalid'); }
    }
    function check() {
      const bad = [];
      if (!val()) { setErr('rating', T.errRating); bad.push(stars[0]); }
      [['text', T.errText], ['name', T.errName], ['email', T.errEmail]].forEach(([n, m]) => {
        const f = form.querySelector(`[data-rev-field="${n}"]`); if (!f) return;
        const v = f.value.trim();
        const ok = n === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) : v.length > (n === 'text' ? 9 : 0);
        setErr(n, ok ? '' : m); if (!ok) bad.push(f);
      });
      if (bad.length) bad[0].focus();
      return !bad.length;
    }
    form.querySelectorAll('[data-rev-field]').forEach(f => f.addEventListener('input', () => { if (f.getAttribute('aria-invalid')) setErr(f.dataset.revField, ''); }));

    if (file) file.addEventListener('change', () => {
      const f = file.files && file.files[0];
      if (url) { URL.revokeObjectURL(url); url = null; }
      if (!f) { pick.hidden = true; if (photoNote) photoNote.value = ''; return; }
      url = URL.createObjectURL(f);
      pick.querySelector('img').src = url; pick.querySelector('span').textContent = f.name; pick.hidden = false;
      if (photoNote) photoNote.value = f.name;
    });
    if (pick) pick.querySelector('button').addEventListener('click', () => { file.value = ''; file.dispatchEvent(new Event('change')); file.focus(); });

    function open() {
      if (dlg.open) return;
      dlg.showModal(); document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => requestAnimationFrame(() => dlg.classList.add('is-in')));
      const first = done && !done.hidden ? done : (stars.find(s => s.checked) || stars[0]);
      if (first) first.focus({ preventScroll: true });
    }
    function close() {
      if (!dlg.open) return;
      dlg.classList.remove('is-in');
      const end = () => { dlg.close(); document.documentElement.style.overflow = ''; };
      if (motion()) setTimeout(end, 420); else end();
    }
    function thanks() {
      ask.hidden = true; done.hidden = false; done.focus();
      form.reset(); paint(0); sayRate(); if (file) file.dispatchEvent(new Event('change'));
    }
    function again() { done.hidden = true; ask.hidden = false; (stars[0] || form).focus(); }

    btn.addEventListener('click', open);
    dlg.addEventListener('cancel', e => { e.preventDefault(); close(); });
    dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
    dlg.querySelectorAll('[data-rev-close]').forEach(b => b.addEventListener('click', close));
    dlg.querySelectorAll('[data-rev-again]').forEach(b => b.addEventListener('click', again));

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!check()) return;
      submit.setAttribute('aria-busy', 'true'); submit.disabled = true;
      const fin = () => { submit.removeAttribute('aria-busy'); submit.disabled = false; };
      if (root.hasAttribute('data-demo')) { setTimeout(() => { fin(); thanks(); }, 600); return; }
      const body = new FormData(form); body.delete('review_photo');
      fetch(form.action, { method: 'POST', body, headers: { Accept: 'text/html' } })
        .then(r => {
          if (r.ok && /contact_posted=true/.test(r.url)) { fin(); thanks(); return; }
          throw new Error('fallback');
        })
        .catch(() => { fin(); if (file) file.disabled = true; HTMLFormElement.prototype.submit.call(form); });
    });

    // back from a normal submit (captcha): Shopify returns with ?contact_posted=true#<form id>
    if (/[?&]contact_posted=true/.test(location.search) && form.id && location.hash === '#' + form.id) { ask.hidden = true; done.hidden = false; open(); }
  }
  const all = r => (r || document).querySelectorAll('.s-pdp-reviews').forEach(init);
  if (document.readyState !== 'loading') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
