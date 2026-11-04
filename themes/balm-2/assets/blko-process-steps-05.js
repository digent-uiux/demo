// process-steps-05: batch-code lookup. L-MMDD (this year) → every [data-stamp] shows that batch's dates; a wrong code
// gets an inline error in the field's hint slot. Clear restores the "Day n" stamps.
(() => {
  const fmt = (d) => d.toLocaleDateString(document.documentElement.lang || 'en-US', { day: 'numeric', month: 'short' });
  const plus = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const form = root.querySelector('[data-form]');
    if (!form) return;
    const input = form.querySelector('input'), status = form.querySelector('[data-status]');
    const msg = form.querySelector('.blko-ui-field__hint, .blko-ui-field__error');
    const year = +root.dataset.year || new Date().getFullYear(), day = root.dataset.day || 'Day';
    const stamps = Array.from(root.querySelectorAll('[data-stamp]'));
    const parse = (code) => {
      const m = /^L-?(\d{2})(\d{2})$/i.exec(code.trim());
      if (!m) return null;
      const mo = +m[1], dd = +m[2], d = new Date(year, mo - 1, dd);
      return d.getMonth() === mo - 1 && d.getDate() === dd ? d : null;
    };
    const setMsg = (err) => {
      if (!msg) return;
      const id = input.id + (err ? '-error' : '-hint');
      msg.id = id; msg.className = err ? 'blko-ui-field__error' : 'blko-ui-field__hint';
      if (err) msg.setAttribute('role', 'alert'); else msg.removeAttribute('role');
      msg.textContent = err || root.dataset.hint || '';
      input.setAttribute('aria-describedby', id);
      if (err) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    };
    const render = (mixed) => {
      stamps.forEach((el) => {
        const from = +el.dataset.from || 0, to = el.dataset.to;
        el.textContent = mixed
          ? (to ? fmt(plus(mixed, from)) + ' – ' + fmt(plus(mixed, +to)) : fmt(plus(mixed, from)))
          : (to ? day + ' ' + from + '–' + to : day + ' ' + from);
      });
    };
    const reset = () => {
      delete root.dataset.batch; render(null); input.value = '';
      status.innerHTML = '<span class="bprocesssteps05__muted"></span>';
      status.firstChild.textContent = root.dataset.typical || '';
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const mixed = parse(input.value);
      if (!mixed) { setMsg(root.dataset.bad || 'Invalid code'); return; }
      setMsg('');
      const code = 'L-' + (/(\d{4})$/.exec(input.value.trim()) || ['', ''])[1];
      root.dataset.batch = code;
      render(mixed);
      const ship = +root.dataset.ship || 0;
      const line = (root.dataset.went || 'went into the oil') + ' ' + fmt(mixed) + ', ' + (root.dataset.shipped || 'shipped') + ' ' + fmt(plus(mixed, ship)) + '.';
      status.innerHTML = '';
      const b = document.createElement('b'); b.textContent = code;
      const btn = document.createElement('button'); btn.type = 'button'; btn.textContent = root.dataset.clear || 'Clear';
      btn.addEventListener('click', () => { reset(); input.focus(); });
      status.append(b, ' ' + line + ' ', btn);
    });
  }
  const all = () => document.querySelectorAll('[data-bprocesssteps05]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
