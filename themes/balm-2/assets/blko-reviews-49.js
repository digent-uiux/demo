// reviews-49: the skin chips and Show more. A chip filters the notes (data-skin), shows the first N of them (the
// "Notes before Show more" setting), updates "x of y notes" and recomputes the reading from the notes of that skin
// (average, stars, count, the five bars; All restores the section's figures). Show more reveals the rest of the current
// skin and moves focus to the first revealed note. With the balm kit on (html.blko-kit-balm, not reduced motion) a pick
// replays the focus pull (data-play on the root): the average pulls sharp, the notes blur in one after another.
(() => {
  const motion = () => document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (v) => (Math.round(v * 10) / 10).toFixed(1);
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const list = root.querySelector('[data-shown]'), sum = root.querySelector('[data-sum]');
    if (!list || !sum) return;
    const notes = [...list.querySelectorAll('[data-note]')], chips = [...root.querySelectorAll('[role="radio"][data-skin]')];
    const more = root.querySelector('[data-more]'), of = root.querySelector('[data-of]');
    const n0 = +list.dataset.shown || 4;
    const q = (s) => sum.querySelector(s);
    const allBars = (sum.dataset.bars || '').split(',').map((x) => +x || 0);
    let skin = '';
    const match = () => notes.filter((n) => !skin || n.dataset.skin === skin);
    const show = (count) => {
      const m = match();
      notes.forEach((n) => { n.hidden = true; });
      m.slice(0, count).forEach((n, i) => { n.hidden = false; n.style.setProperty('--n', i); });
      if (more) more.hidden = m.length <= count;
      if (of) of.textContent = (of.dataset.t || '').replace('[x]', Math.min(count, m.length)).replace('[y]', m.length);
    };
    const reading = (chip) => {
      let avg = +sum.dataset.avg, count = +sum.dataset.count, bars = allBars, word = sum.dataset.tReviews;
      if (skin) {
        const m = match();
        bars = [5, 4, 3, 2, 1].map((s) => m.filter((n) => +n.dataset.stars === s).length);
        count = m.length;
        avg = m.reduce((a, n) => a + (+n.dataset.stars || 0), 0) / (count || 1);
        word = count === 1 ? sum.dataset.tNote : sum.dataset.tNotes;
      }
      q('[data-label]').textContent = chip.dataset.reading;
      q('[data-avg-out]').textContent = fmt(avg);
      q('[data-count-out]').textContent = count.toLocaleString('en-US') + ' ' + word;
      const clip = q('[data-stars] .blko-ui-stars__clip'), st = q('[data-stars] [role="img"]');
      if (clip) clip.style.width = (avg / 5) * 100 + '%';
      if (st) st.setAttribute('aria-label', st.getAttribute('aria-label').replace(/[\d.]+/, fmt(avg)));
      const total = bars.reduce((a, b) => a + b, 0), top = Math.max(...bars);
      sum.querySelectorAll('[data-bar]').forEach((b, i) => {
        b.style.width = (total ? (bars[i] / total) * 100 : 0) + '%';
        b.classList.toggle('is-top', bars[i] === top && top > 0);
      });
      sum.querySelectorAll('[data-bar-n]').forEach((b, i) => { b.textContent = bars[i]; });
    };
    chips.forEach((c) => c.addEventListener('click', () => {
      skin = c.dataset.skin;
      chips.forEach((x) => x.setAttribute('aria-checked', String(x === c)));
      show(n0); reading(c);
      if (motion()) { root.removeAttribute('data-play'); void root.offsetWidth; root.setAttribute('data-play', ''); }
    }));
    if (more) more.addEventListener('click', () => {
      const first = match()[n0];
      show(Infinity);
      if (first) { first.tabIndex = -1; first.focus({ preventScroll: true }); }
    });
  }
  const all = () => document.querySelectorAll('[data-breviews49]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
