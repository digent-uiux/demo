/* Lather v3 featured products (parts/15-featured.html). Cards are rendered by Liquid into <template data-feat-tab>;
   this swaps them into the rail per tab (blur cross-fade), drives the arrows and the tab keyboard. Add / quick view
   go through window.LATHER's global [data-add] / [data-quick] delegation. */
(() => {
  function init(root) {
    if (!root || root.dataset.lv3Ready) return;
    root.dataset.lv3Ready = '1';
    const rail = root.querySelector('.s-feat__rail'), panel = root.querySelector('.s-feat__panel');
    if (!rail || !panel) return;
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const prev = root.querySelector('[data-dir="-1"]'), next = root.querySelector('[data-dir="1"]');
    const tpl = k => root.querySelector(`template[data-feat-tab="${k}"]`);
    const arrows = () => {
      const max = rail.scrollWidth - rail.clientWidth - 2;
      prev.disabled = rail.scrollLeft <= 2; next.disabled = rail.scrollLeft >= max;
    };
    const fill = key => { const t = tpl(key); rail.innerHTML = t ? t.innerHTML : ''; rail.scrollLeft = 0; arrows(); };
    arrows();
    const motion = document.documentElement.classList.contains('motion');
    let busy = 0;
    function select(tab, focus, instant) {
      if (tab.getAttribute('aria-selected') === 'true') return;
      tabs.forEach(t => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
      panel.setAttribute('aria-labelledby', tab.id);
      if (focus) tab.focus();
      clearTimeout(busy);
      if (!motion || instant) { fill(tab.dataset.tab); return; }
      panel.classList.add('is-out');
      busy = setTimeout(() => { fill(tab.dataset.tab); requestAnimationFrame(() => panel.classList.remove('is-out')); }, 370);
    }
    root._lv3Select = t => select(t, false, true);
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
      });
    });
    const step = d => {
      const c = rail.querySelector('.s-feat__card'); const w = c ? c.getBoundingClientRect().width + 16 : 300;
      rail.scrollBy({ left: d * w, behavior: motion ? 'smooth' : 'auto' });
    };
    prev.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));
    rail.addEventListener('scroll', arrows, { passive: true });
    addEventListener('resize', arrows);
  }
  const all = (scope) => (scope || document).querySelectorAll('[data-lv3-feat]').forEach(init);
  // Like the HTML: start on DOMContentLoaded (after every deferred script, the runtime included).
  if (document.readyState === 'complete') all(); else document.addEventListener('DOMContentLoaded', () => all());
  document.addEventListener('shopify:section:load', e => all(e.target));
  // Theme editor: selecting a tab block shows that tab.
  document.addEventListener('shopify:block:select', e => {
    const t = e.target.closest && e.target.closest('.s-feat [role="tab"]'); if (!t) return;
    const root = t.closest('[data-lv3-feat]'); root && root._lv3Select && root._lv3Select(t);
  });
})();
