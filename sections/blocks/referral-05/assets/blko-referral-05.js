// referral-05: Claim checks the email (empty / typo messages as in the DS), then the Shopify customer form posts as
// usual. After the reload the ticket is shown (Liquid: form.posted_successfully?); this script fills in the address,
// moves focus to the code, switches the picks to their prices with the code, and handles Copy and "Not you?".
(() => {
  const okMail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const esc = (t) => t.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const KEY = 'blko-ref05-email';

  function init(root) {
    if (root.dataset.bound) return;
    root.dataset.bound = '1';
    const form = root.querySelector('[data-claim]');
    if (!form) return;
    const fields = form.querySelector('[data-fields]'), done = form.querySelector('[data-done]');
    const email = form.querySelector('input[type="email"]'), msg = form.querySelector('.breferral05__msg');
    const picks = root.querySelector('.breferral05__picks'), saved = form.querySelector('[data-saved]');
    const btn = form.querySelector('[data-copy]'), code = form.querySelector('[data-code]');

    const say = (t, err) => {
      msg.textContent = t;
      msg.toggleAttribute('data-error', !!err);
      if (err) msg.setAttribute('role', 'alert'); else msg.removeAttribute('role');
      if (err) email.setAttribute('aria-invalid', 'true'); else email.removeAttribute('aria-invalid');
    };
    email.addEventListener('input', () => { if (msg.hasAttribute('data-error')) say(msg.dataset.hint, false); });
    form.addEventListener('submit', (e) => {
      const v = email.value.trim();
      if (!v || !okMail(v)) {
        e.preventDefault();
        say(v ? msg.dataset.tBad : msg.dataset.tEmpty, true);
        email.focus();
        return;
      }
      try { sessionStorage.setItem(KEY, v); } catch (er) {}
    });

    if (done.hasAttribute('data-posted')) {
      let v = '';
      try { v = sessionStorage.getItem(KEY) || ''; } catch (er) {}
      if (v) saved.innerHTML = esc(saved.dataset.t).replace('[email]', '<b>' + esc(v) + '</b>');
      if (picks) picks.setAttribute('data-claimed', '');
      requestAnimationFrame(() => code.focus({ preventScroll: true }));
    }

    btn.addEventListener('click', () => {
      try { navigator.clipboard.writeText(code.textContent.trim()).catch(() => {}); } catch (er) {}
      btn.querySelector('[data-ico="copy"]').hidden = true;
      btn.querySelector('[data-ico="check"]').hidden = false;
      btn.querySelector('[data-copy-text]').textContent = btn.dataset.tCopied;
      btn.setAttribute('aria-label', btn.dataset.tLabelDone);
      btn.classList.replace('blko-ui-button--primary', 'blko-ui-button--secondary');
      saved.textContent = saved.dataset.tCopied;
    });

    form.querySelector('[data-reset]').addEventListener('click', () => {
      try { sessionStorage.removeItem(KEY); } catch (er) {}
      done.hidden = true; fields.hidden = false;
      if (picks) picks.removeAttribute('data-claimed');
      email.value = ''; say(msg.dataset.hint, false);
      setTimeout(() => email.focus(), 0);
    });
  }
  const all = () => document.querySelectorAll('[data-breferral05]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
