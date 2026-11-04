// article-31: "In this story" Add toggles (the card is in the page twice, phone and desktop, so both stay in step):
// /cart/add.js → blko:cart:add + blko:cart:updated, /cart/change.js to take it out; preview rows only toggle.
// Scene: the amber reading hairline follows the scroll (body top at 25% → bottom at 85% of the viewport) when the
// balm kit is on and motion is allowed; otherwise it stays full length.
(() => {
  const root_ = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  const post = (path, body) => fetch(root_ + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
    .then((r) => r.json().then((j) => { if (!r.ok) throw j; return j; }));
  const ping = () => fetch(root_ + 'cart.js').then((r) => r.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: c }))).catch(() => {});
  function scene(root) {
    const body = root.querySelector('[data-body]'), bar = root.querySelector('[data-bar]');
    if (!body || !bar) return;
    const on = () => document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cur = null, raf = 0;
    const tick = () => {
      raf = 0;
      if (!on()) { bar.style.transform = ''; cur = null; return; }
      const r = body.getBoundingClientRect(), vh = innerHeight;
      const span = Math.max(1, r.height - 0.6 * vh), t = Math.min(1, Math.max(0, (0.25 * vh - r.top) / span));
      cur = cur === null ? t : cur + (t - cur) * 0.2;
      bar.style.transform = 'scaleX(' + cur.toFixed(4) + ')';
      if (Math.abs(t - cur) > 0.001) raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick);
    new MutationObserver(kick).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    kick();
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    scene(root);
    const stats = [...root.querySelectorAll('[data-status]')];
    const set = (key, v) => {
      root.querySelectorAll('[data-add][data-key="' + key + '"]').forEach((b) => {
        b.setAttribute('aria-pressed', String(v)); b.setAttribute('aria-label', v ? b.dataset.aRem : b.dataset.aAdd);
        b.querySelector('[data-off]').hidden = v; b.querySelector('[data-on]').hidden = !v;
      });
      const n = new Set([...root.querySelectorAll('[data-add][aria-pressed="true"]')].map((b) => b.dataset.key)).size;
      stats.forEach((s) => { s.textContent = n ? s.dataset.added.replace('[n]', n) : s.dataset.idle; });
    };
    root.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', async () => {
      if (b.getAttribute('aria-busy') === 'true') return;
      const on = b.getAttribute('aria-pressed') === 'true', vid = b.dataset.vid, key = b.dataset.key;
      if (!vid) { set(key, !on); return; }
      b.setAttribute('aria-busy', 'true');
      try {
        if (on) { await post('cart/change.js', { id: String(vid), quantity: 0 }); set(key, false); }
        else {
          const j = await post('cart/add.js', { items: [{ id: Number(vid), quantity: 1 }] });
          set(key, true);
          document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'article-31' } }));
        }
        ping();
      } catch (e) { /* the cart did not change */ }
      b.removeAttribute('aria-busy');
    }));
  }
  const all = () => document.querySelectorAll('.barticle31').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
