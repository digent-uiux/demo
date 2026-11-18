/* Lather v3, 45 Routine: step picks, set prices, running total, add-all, honest countdown. Uses window.LATHER. */
(() => {
  const pad = n => String(n).padStart(2, '0');
  const fmt = c => (window.LATHER && window.LATHER.fmt) ? window.LATHER.fmt(c / 100) : '$' + (c / 100).toFixed(c % 100 ? 2 : 0);

  function init(root) {
    if (!root || root.dataset.rtReady) return;
    root.dataset.rtReady = '1';
    const OFF = parseFloat(root.dataset.off) || 0;
    const timers = [];

    /* ---- countdown: weekly to a day and time, or to a fixed date (shopper's local time) ---- */
    const box = root.querySelector('[data-cd-box]');
    if (box) {
      const cd = {};
      box.querySelectorAll('[data-cd]').forEach(el => { cd[el.dataset.cd] = el; });
      const mode = root.dataset.cdMode;
      const day = +root.dataset.cdDay || 0, hr = +root.dataset.cdHour, mi = +root.dataset.cdMin;
      function nextWeekly() {
        const now = new Date();
        const t = new Date(now);
        t.setDate(now.getDate() + ((7 + day - now.getDay()) % 7));
        t.setHours(isNaN(hr) ? 23 : hr, isNaN(mi) ? 59 : mi, 0, 0);
        if (t <= now) t.setDate(t.getDate() + 7);
        return t;
      }
      function fixed() {
        const m = (root.dataset.cdDate || '').trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2}))?/);
        return m ? new Date(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 23, m[5] ? +m[5] : 59, 0, 0) : null;
      }
      let end = mode === 'date' ? fixed() : nextWeekly();
      function tickClock() {
        if (!end) { box.hidden = true; return; }
        let ms = end - Date.now();
        if (ms <= 0) {
          if (mode === 'date') { box.hidden = true; return; } // a fixed sale is over: no fake timer
          end = nextWeekly(); ms = end - Date.now(); // the new week's price window
        }
        const s = Math.floor(ms / 1000);
        cd.d.textContent = pad(Math.floor(s / 86400));
        cd.h.textContent = pad(Math.floor(s % 86400 / 3600));
        cd.m.textContent = pad(Math.floor(s % 3600 / 60));
        cd.s.textContent = pad(s % 60);
      }
      tickClock();
      timers.push(setInterval(tickClock, 1000));
    }

    // the photo settles when it scrolls in
    const ph = root.querySelector('.s-routine__photo');
    if (ph) {
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { ph.classList.add('in'); io.disconnect(); } }), { threshold: .15 });
        io.observe(ph);
      } else ph.classList.add('in');
    }

    /* ---- picks and prices ---- */
    const steps = [...root.querySelectorAll('.s-routine__step')];
    const totalEl = root.querySelector('[data-rt-total]');
    const fineEl = root.querySelector('[data-rt-fine]');
    const setCents = c => Math.round(c * (100 - OFF) / 100);
    // the current pick of a step, or null when an add-on is unticked
    function pickOf(step) {
      const sel = step.querySelector('select[data-pick]');
      if (sel) { const o = sel.options[sel.selectedIndex]; return o ? { key: o.value, cents: +o.dataset.cents || 0, name: o.dataset.name } : null; }
      const chk = step.querySelector('[data-pick-addon]');
      if (chk) return { key: chk.dataset.key, cents: +chk.dataset.cents || 0, name: chk.dataset.name, on: chk.checked };
      return null;
    }
    function picks() {
      return steps.map(pickOf).filter(p => p && p.on !== false);
    }
    function swapThumb(step, key) {
      const tpl = [...step.querySelectorAll('template[data-thumb]')].find(t => t.dataset.thumb === key);
      const box = step.querySelector('.s-routine__thumb');
      const cur = box && box.firstElementChild;
      if (!tpl || !cur || cur.tagName === 'TEMPLATE' || box.dataset.now === key) return;
      box.dataset.now = key;
      cur.classList.add('swap');
      setTimeout(() => {
        const next = tpl.content.firstElementChild.cloneNode(true);
        next.classList.add('swap');
        cur.replaceWith(next);
        requestAnimationFrame(() => requestAnimationFrame(() => next.classList.remove('swap')));
      }, 180);
    }
    function render(changed) {
      steps.forEach(step => {
        const p = pickOf(step); if (!p) return;
        const pp = step.querySelector('[data-pp]');
        if (pp) pp.innerHTML = fmt(setCents(p.cents)) + (OFF > 0 ? ' <s>' + fmt(p.cents) + '</s>' : '');
        if (p.on !== undefined) step.classList.toggle('is-off', !p.on);
      });
      const p = picks();
      const orig = p.reduce((a, x) => a + x.cents, 0);
      const tot = p.reduce((a, x) => a + setCents(x.cents), 0);
      if (totalEl) totalEl.innerHTML = fmt(tot) + (OFF > 0 ? ' <s>' + fmt(orig) + '</s>' : '');
      if (fineEl) fineEl.textContent = (root.dataset.fine || '').split('[count]').join(String(p.length));
      if (changed && totalEl) { totalEl.classList.remove('tick'); void totalEl.offsetWidth; totalEl.classList.add('tick'); }
    }
    steps.forEach(step => {
      const sel = step.querySelector('select[data-pick]');
      if (sel) {
        step.querySelector('.s-routine__thumb').dataset.now = sel.value;
        sel.addEventListener('change', () => { swapThumb(step, sel.value); render(true); });
      }
      const chk = step.querySelector('[data-pick-addon]');
      if (chk) chk.addEventListener('change', () => render(true));
    });
    const addBtn = root.querySelector('[data-rt-add]');
    if (addBtn) addBtn.addEventListener('click', () => {
      const L = window.LATHER; if (!L) return;
      picks().forEach(p => {
        const note = OFF > 0 ? (root.dataset.note || '').split('[discount]').join(String(OFF)).split('[price]').join(fmt(p.cents)) : '';
        L.add(p.key, 1, { key: 'routine-' + p.key, name: p.name, price: setCents(p.cents) / 100, note });
      });
    });
    render(false);
    root._rtStop = () => timers.forEach(clearInterval);
  }

  const boot = () => document.querySelectorAll('.s-routine').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  // theme editor: re-init a re-rendered section, stop the old clock
  document.addEventListener('shopify:section:unload', e => { const r = e.target.querySelector('.s-routine'); if (r && r._rtStop) r._rtStop(); });
  document.addEventListener('shopify:section:load', e => init(e.target.querySelector('.s-routine')));
})();
