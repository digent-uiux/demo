// recommendations-37: on product pages the section fetches itself from the recommendations endpoint and swaps in
// (stays hidden when nothing comes back). Add posts to /cart/add.js (the "Add all" form as JSON items[]), then fires
// blko:cart:add and blko:cart:updated (item_count); a failed fetch falls back to the normal form submit. Preview buttons
// toggle Added. Pointing at a key row or a mount lifts that pair (class only; no movement).
(() => {
  function flash(btn) {
    const label = btn.textContent;
    btn.textContent = btn.dataset.added; btn.setAttribute('aria-pressed', 'true');
    setTimeout(() => { btn.textContent = label; btn.setAttribute('aria-pressed', 'false'); }, 2200);
  }
  function bind(root) {
    const base = root.dataset.root || '/';
    const url = (p) => base.replace(/\/?$/, '/') + p;
    const lift = (i) => {
      const board = root.querySelector('[data-items]');
      if (board) board.classList.toggle('is-on', i !== null);
      root.querySelectorAll('[data-i]').forEach((el) => el.classList.toggle('is-on', el.dataset.i === String(i)));
    };
    root.addEventListener('mouseover', (e) => { const t = e.target.closest('[data-i]'); lift(t && root.contains(t) ? t.dataset.i : null); });
    root.addEventListener('mouseleave', () => lift(null));
    root.addEventListener('focusin', (e) => { const t = e.target.closest('[data-i]'); lift(t ? t.dataset.i : null); });
    root.addEventListener('focusout', () => lift(null));
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-toggle]');
      if (!b || !root.contains(b)) return;
      const on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? b.dataset.added : b.dataset.addLabel;
    });
    root.addEventListener('submit', async (e) => {
      const form = e.target.closest('[data-add]');
      if (!form || !window.fetch) return;
      e.preventDefault();
      const btn = form.querySelector('[data-btn]'), err = root.querySelector('[data-err]');
      if (!btn || btn.disabled) return;
      btn.disabled = true; if (err) err.hidden = true;
      let body = new FormData(form), headers = { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
      if (form.hasAttribute('data-bundle')) {
        const ids = [...form.querySelectorAll('input[name="items[][id]"]')].map((x) => ({ id: +x.value, quantity: 1 }));
        body = JSON.stringify({ items: ids }); headers['Content-Type'] = 'application/json';
      }
      try {
        const r = await fetch(url('cart/add.js'), { method: 'POST', headers, body });
        const j = await r.json();
        btn.disabled = false;
        if (!r.ok) { if (err) { err.textContent = j.description || j.message || err.textContent; err.hidden = false; } return; }
        flash(btn);
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'recommendations-37' } }));
        fetch(url('cart.js')).then((x) => x.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: c.item_count, cart: c } }))).catch(() => {});
      } catch (x) { btn.disabled = false; form.submit(); }
    });
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    bind(root);
    if (!root.dataset.url || !window.fetch) return;
    fetch(root.dataset.url).then((r) => r.text()).then((html) => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const fresh = doc.querySelector('[data-brecommendations37]');
      if (!fresh || !fresh.querySelector('[data-items] > *')) return;
      root.innerHTML = fresh.innerHTML; root.hidden = false;
    }).catch(() => {});
  }
  const all = () => document.querySelectorAll('[data-brecommendations37]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
