// page-header-08: the live "Open now / Closed" line under the bench hours, worked out in the studio's time zone and
// refreshed each minute. Runs under ?static too (the DS works it out after mount the same way).
(() => {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function status(el) {
    const tz = el.dataset.tz; if (!tz) return '';
    let parts;
    try { parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()); } catch (e) { return ''; }
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
    const day = get('weekday'), h = Number(get('hour')), m = get('minute');
    const O = +el.dataset.open, C = +el.dataset.close, days = (el.dataset.days || '').split(',').map((d) => d.trim());
    const isOpen = (d) => days.includes(d);
    if (isOpen(day) && h >= O && h < C) return { open: true, text: el.dataset.tOpen.replace('{time}', String(h).padStart(2, '0') + ':' + m).replace('{place}', el.dataset.place || tz) };
    let i = DAYS.indexOf(day), next;
    if (isOpen(day) && h < O) next = el.dataset.tToday;
    else {
      for (let k = 1; k <= 7; k++) { const d = DAYS[(i + k) % 7]; if (isOpen(d)) { next = k === 1 ? el.dataset.tTomorrow : ({ Sun: 'Sunday', Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' })[d]; break; } }
    }
    if (!next) return '';
    return { open: false, text: el.dataset.tClosed.replace('{day}', next).replace('{hour}', O) };
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const el = root.querySelector('[data-status]'); if (!el) return;
    const tick = () => {
      const s = status(el);
      el.textContent = '';
      if (!s) return;
      const dot = document.createElement('span'); dot.setAttribute('aria-hidden', 'true'); dot.className = 'bpageheader08__dot' + (s.open ? ' is-open' : '');
      el.append(dot, document.createTextNode(s.text));
    };
    tick(); setInterval(tick, 60000);
  }
  const all = () => document.querySelectorAll('.bpageheader08').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
