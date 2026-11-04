// header-19: sticky wrapper (setting), drawer with focus trap / Escape / focus return, live cart count.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const wrap = root.parentElement;
    if (root.dataset.sticky === 'true' && wrap && wrap.classList.contains('shopify-section')) Object.assign(wrap.style, { position: 'sticky', top: '0', zIndex: '40' });
    const openBtn = root.querySelector('[data-open]'), drawer = root.querySelector('[data-drawer]'), panel = root.querySelector('[data-panel]');
    let last = null;
    const focusables = () => [...panel.querySelectorAll('a[href], button:not([disabled])')].filter((e) => e.offsetParent !== null);
    const set = (open) => {
      if (open) {
        last = document.activeElement; drawer.hidden = false;
        requestAnimationFrame(() => requestAnimationFrame(() => drawer.setAttribute('data-open', '')));
        document.documentElement.style.overflow = 'hidden';
        const f = focusables(); if (f[0]) f[0].focus();
      } else {
        drawer.removeAttribute('data-open'); document.documentElement.style.overflow = '';
        const done = () => { if (!drawer.hasAttribute('data-open')) drawer.hidden = true; };
        matchMedia('(prefers-reduced-motion: reduce)').matches ? done() : setTimeout(done, 450);
        (last && last !== document.body ? last : openBtn).focus();
      }
      openBtn.setAttribute('aria-expanded', String(open));
    };
    openBtn.addEventListener('click', () => set(true));
    drawer.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => set(false)));
    drawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); set(false); return; }
      if (e.key !== 'Tab') return;
      const f = focusables(); if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
    addEventListener('resize', () => { if (!drawer.hidden && innerWidth >= 768) set(false); });
  }
  const setCount = (n) => document.querySelectorAll('[data-bheader19] [data-bag]').forEach((bag) => {
    const c = bag.querySelector('[data-cart-count]');
    if (c) { c.textContent = n; c.hidden = !(n > 0); }
    if (bag.dataset.label) bag.setAttribute('aria-label', bag.dataset.label.replace('#', n));
  });
  document.addEventListener('blko:cart:updated', (e) => { const n = e.detail && e.detail.item_count; if (typeof n === 'number') setCount(n); });
  const all = () => document.querySelectorAll('[data-bheader19]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
