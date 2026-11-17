/* Lather v3, account pages (port of home-v3/pages/account/10-account.html). Tabs "Log in" / "Create account" and the
   "Forgot your password?" panel switch in place, as in the HTML; the forms themselves post to Shopify
   ({% form 'customer_login' %}, 'create_customer', 'recover_customer_password'). A form that came back with errors or
   a sent reset link opens its own panel; #recover in the URL opens the reset panel. */
(function () {
  'use strict';
  function boot(scope) {
    (scope || document).querySelectorAll('[data-lv3-account]').forEach(function (root) {
      if (root.__lv3) return; root.__lv3 = true;
      var tablist = root.querySelector('#account-tabs'); if (!tablist) return;
      var panels = ['login', 'create', 'reset'];
      var status = root.querySelector('#account-status');
      var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role=tab]'));
      var panel = function (k) { return root.querySelector('#account-' + k); };
      function mode(name, quiet) {
        panels.forEach(function (k) { var p = panel(k); if (p) p.hidden = k !== name; });
        tabs.forEach(function (t) { var on = t.dataset.mode === name; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
        if (!quiet && status) status.textContent = '';
        if (name === 'reset' && !quiet) { var h = root.querySelector('#account-reset h2'); if (h) h.focus(); }
      }
      root.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { mode(b.dataset.mode); }); });
      tabs.forEach(function (t, i) {
        t.addEventListener('keydown', function (e) {
          var n;
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') n = (i + 1) % tabs.length;
          if (e.key === 'Home') n = 0;
          if (e.key === 'End') n = tabs.length - 1;
          if (n !== undefined) { e.preventDefault(); mode(tabs[n].dataset.mode); tabs[n].focus(); }
        });
      });
      /* which panel to open: a posted form wins, then #recover, then the template's own */
      var open = root.querySelector('[data-acct-open]');
      var start = open ? open.getAttribute('data-acct-open') : /^#recover/.test(location.hash) ? 'reset' : root.dataset.start || 'login';
      mode(start, true);
      var err = root.querySelector('.s-acct-access__error');
      if (err && open) { var f = panel(start) && panel(start).querySelector('input'); if (f) f.focus({ preventScroll: true }); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { boot(); }); else boot();
  document.addEventListener('shopify:section:load', function (e) { boot(e.target); });
})();
