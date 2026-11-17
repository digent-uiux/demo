/* Lather v3 FAQ: accordion, one open at a time (keeps the column short beside the sticky photo). */
(() => {
  function init(root) {
    if (root.dataset.lv3Ready) return; root.dataset.lv3Ready = '1';
    const items = [...root.querySelectorAll('.s-faq__item')];
    const set = (it, open) => { it.classList.toggle('is-open', open); it.querySelector('.s-faq__q').setAttribute('aria-expanded', open ? 'true' : 'false'); };
    const toggle = (it, open) => { items.forEach(o => { if (o !== it && o.classList.contains('is-open')) set(o, false); }); set(it, open); };
    items.forEach(it => {
      it.querySelector('.s-faq__q').addEventListener('click', () => toggle(it, !it.classList.contains('is-open')));
      it.addEventListener('shopify:block:select', () => toggle(it, true));
    });
  }
  const run = () => document.querySelectorAll('[data-lv3-faq]').forEach(init);
  if (document.readyState === 'complete') run(); else { document.addEventListener('DOMContentLoaded', run); addEventListener('load', run); }
  document.addEventListener('shopify:section:load', e => e.target.querySelectorAll('[data-lv3-faq]').forEach(init));
})();
