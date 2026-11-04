// collection-banner-73: the focus switch. "Front" / "Back" set data-focus on the figure (the soft plane blurs, the other
// sharpens; CSS transition only under the balm kit) and aria-pressed. Hidden without JS. The load rack is CSS only.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const fig = root.querySelector('[data-fig]'), ui = root.querySelector('[data-focus-ui]');
    if (!fig || !ui) return;
    const btns = [...ui.querySelectorAll('[data-plane]')];
    btns.forEach((b) => b.addEventListener('click', () => {
      fig.dataset.focus = b.dataset.plane;
      btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    }));
    ui.hidden = false;
  }
  const all = () => document.querySelectorAll('[data-bcollectionbanner73]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
