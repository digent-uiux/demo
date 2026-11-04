// featured-products-46: the sundial tabs and the in-image Add to bag pill / "+" button.
// Tabs: roving tabindex, arrows / Home / End, click; the dial's --a follows the chosen tab's angle (CSS turns the sun).
// Under the balm kit (motion allowed) the sun waits beyond the left end of the arc and rises to its hour once the dial
// is a fifth into the screen (data-cine "" -> "in" -> "done"); later picks glide it (CSS transition). Theme editor:
// selecting an Hour block opens its shelf.
// Add: Live cards post their form to /cart/add.js, then fire
// blko:cart:add and blko:cart:updated (item_count); a failed fetch falls back to the normal form submit. aria-pressed
// swaps the label/icon to "Added" (CSS) for a moment. Preview cards toggle it. No motion here: the pill only fades (CSS).
(() => {
  function flash(btn) {
    btn.setAttribute('aria-pressed', 'true');
    setTimeout(() => btn.setAttribute('aria-pressed', 'false'), 2200);
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const base = root.dataset.root || '/', err = root.querySelector('[data-err]');
    const url = (p) => base.replace(/\/?$/, '/') + p;
    const dial = root.querySelector('[data-dial]');
    const tabs = Array.from(root.querySelectorAll('[role=tab]'));
    const pick = (t, focus) => {
      tabs.forEach((x) => {
        const on = x === t, p = document.getElementById(x.getAttribute('aria-controls'));
        x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        if (p) p.hidden = !on;
      });
      if (dial) dial.style.setProperty('--a', t.dataset.a + 'deg');
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(t));
      t.addEventListener('keydown', (e) => {
        const n = tabs.length, k = e.key;
        const j = k === 'ArrowRight' ? (i + 1) % n : k === 'ArrowLeft' ? (i - 1 + n) % n : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
        if (j < 0) return;
        e.preventDefault(); pick(tabs[j], true);
      });
    });
    root.addEventListener('shopify:block:select', (e) => {
      const p = e.target.closest && e.target.closest('[role=tabpanel]');
      const t = p && tabs.find((x) => x.getAttribute('aria-controls') === p.id);
      if (t) pick(t);
    });
    const on = document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (dial && on && 'IntersectionObserver' in window) {
      dial.dataset.cine = '';
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        requestAnimationFrame(() => { dial.dataset.cine = 'in'; });
        setTimeout(() => { dial.dataset.cine = 'done'; }, 1500);
      }, { rootMargin: '0px 0px -20% 0px' });
      io.observe(dial);
    }
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-toggle]');
      if (!b || !root.contains(b)) return;
      b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    });
    root.addEventListener('submit', async (e) => {
      const form = e.target.closest('[data-add]');
      if (!form || !window.fetch) return;
      e.preventDefault();
      const btn = form.querySelector('[data-btn]');
      if (!btn || btn.disabled) return;
      btn.disabled = true; if (err) err.hidden = true;
      try {
        const r = await fetch(url('cart/add.js'), { method: 'POST', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: new FormData(form) });
        const j = await r.json();
        btn.disabled = false;
        if (!r.ok) { if (err) { err.textContent = j.description || j.message || err.textContent; err.hidden = false; } return; }
        flash(btn);
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'featured-products-46' } }));
        fetch(url('cart.js')).then((x) => x.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: c.item_count, cart: c } }))).catch(() => {});
      } catch (x) { btn.disabled = false; form.submit(); }
    });
  }
  const all = () => document.querySelectorAll('[data-bfeaturedproducts46]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
