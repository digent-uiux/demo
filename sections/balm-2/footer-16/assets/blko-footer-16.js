// footer-16: the country / language selects submit the localization form on change (the button stays for no-JS).
// With the balm kit on (html.blko-kit-balm, which already excludes ?static and reduced motion) the CSS "prints" the
// label once the reveal script marks the group shown; nothing to run here for that.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const f = root.querySelector('.bfooter16__loc');
    if (!f) return;
    f.setAttribute('data-js', '');
    f.querySelectorAll('[data-autosubmit]').forEach((s) => s.addEventListener('change', () => f.submit()));
  }
  const all = () => document.querySelectorAll('[data-bfooter16]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
