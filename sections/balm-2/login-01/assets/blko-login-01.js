// login-01 (the bottle tag): Show / Hide on the password, client checks before the forms post to Shopify (empty or malformed email,
// empty password: the field is described and focused), a busy label on submit, and the switch between sign-in and
// the reset side of the tag (also on #recover, the address Shopify's own links use); the tag's side label follows.
(() => {
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const t = root.dataset;
    const panes = { login: root.querySelector('[data-pane="login"]'), recover: root.querySelector('[data-pane="recover"]') };
    const show = (k, focus) => {
      Object.entries(panes).forEach(([n, p]) => { if (p) p.hidden = n !== k; });
      root.querySelectorAll('[data-side]').forEach((sp) => { sp.hidden = sp.dataset.side !== k; });
      if (k === 'recover') {
        const from = panes.login.querySelector('[data-email]'), to = panes.recover.querySelector('[data-email]');
        if (from && to && !to.value) to.value = from.value;
        if (focus) (to && !to.value ? to : panes.recover.querySelector('[data-rec-h]')).focus();
      } else if (focus) { const e = panes.login.querySelector('[data-email]'); if (e) e.focus(); }
    };
    root.querySelectorAll('[data-show-recover]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); show('recover', true); history.replaceState(null, '', '#recover'); }));
    root.querySelectorAll('[data-show-login]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); show('login', true); history.replaceState(null, '', location.pathname + location.search); }));
    if (location.hash === '#recover') show('recover', false);
    addEventListener('hashchange', () => { if (location.hash === '#recover') show('recover', true); });

    const eye = root.querySelector('[data-eye]');
    if (eye) eye.addEventListener('click', () => {
      const inp = root.querySelector('#' + CSS.escape(eye.getAttribute('aria-controls'))), on = eye.getAttribute('aria-pressed') !== 'true';
      inp.type = on ? 'text' : 'password';
      eye.setAttribute('aria-pressed', String(on)); eye.textContent = on ? eye.dataset.tHide : eye.dataset.tShow;
      eye.setAttribute('aria-label', on ? eye.dataset.aHide : eye.dataset.aShow);
    });

    const mark = (inp, msg) => {
      const err = inp.closest('[data-field]').querySelector('[data-err]');
      if (msg) { inp.setAttribute('aria-invalid', 'true'); inp.setAttribute('aria-describedby', err.id); err.textContent = msg; err.hidden = false; }
      else { inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); err.textContent = ''; err.hidden = true; }
      return !msg;
    };
    root.querySelectorAll('form').forEach((form) => {
      const em = form.querySelector('[data-email]'), pw = form.querySelector('[data-password]'), btn = form.querySelector('[type="submit"]');
      [em, pw].forEach((i) => i && i.addEventListener('input', () => { if (i.getAttribute('aria-invalid')) mark(i, ''); }));
      form.addEventListener('submit', (e) => {
        if (btn && btn.getAttribute('aria-busy') === 'true') { e.preventDefault(); return; }
        const v = em ? em.value.trim() : '';
        const okE = !em || mark(em, !v ? t.tEmail : !EMAIL.test(v) ? t.tEmailBad : '');
        const okP = !pw || mark(pw, pw.value ? '' : t.tPassword);
        if (!okE || !okP) { e.preventDefault(); (!okE ? em : pw).focus(); return; }
        if (btn) {
          btn.setAttribute('aria-busy', 'true');
          const l = btn.querySelector('[data-label]'); if (l) l.textContent = l.dataset.busy;
          const live = form.querySelector('[data-live]'); if (live) live.textContent = l ? l.dataset.busy : '';
        }
      });
    });
    // Back from the browser cache (bfcache) after a redirect: undo the busy state.
    addEventListener('pageshow', () => root.querySelectorAll('[aria-busy="true"]').forEach((b) => b.removeAttribute('aria-busy')));
  }
  const all = () => document.querySelectorAll('.blogin01').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
