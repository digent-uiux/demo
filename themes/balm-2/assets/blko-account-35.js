// account-35: tabs (click, arrows, Home, End), Order again (the order's variants → /cart/add.js → blko:cart:add +
// blko:cart:updated), and a confirm before an address is removed.
(() => {
  const root_ = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const tabs = [...root.querySelectorAll('[role=tab]')];
    const pick = (i, focus) => {
      const n = (i + tabs.length) % tabs.length;
      tabs.forEach((t, k) => {
        const on = k === n; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        const p = root.querySelector('#' + CSS.escape(t.getAttribute('aria-controls'))); if (p) p.hidden = !on;
      });
      if (focus) tabs[n].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(i, true));
      t.addEventListener('keydown', (e) => {
        const k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (k === undefined) return; e.preventDefault(); pick(k, true);
      });
    });
    root.querySelectorAll('[data-reorder]').forEach((b) => b.addEventListener('click', async () => {
      if (b.getAttribute('aria-busy') === 'true') return;
      const items = b.dataset.reorder.split(',').filter(Boolean).map((x) => { const [id, q] = x.split(':'); return { id: Number(id), quantity: Number(q) || 1 }; });
      if (!items.length) return;
      const label = b.textContent; b.setAttribute('aria-busy', 'true'); b.textContent = b.dataset.busy;
      try {
        const r = await fetch(root_ + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items }) });
        const j = await r.json(); if (!r.ok) throw j;
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'account-35' } }));
        fetch(root_ + 'cart.js').then((x) => x.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: c }))).catch(() => {});
        b.textContent = b.dataset.done;
      } catch (e) { b.textContent = label; }
      b.removeAttribute('aria-busy');
      setTimeout(() => { b.textContent = label; }, 2400);
    }));
    // Theme-editor preview of the refill label: Change opens the cadence editor, Skip shows an undo line.
    const rf = root.querySelector('[data-refill]');
    if (rf) {
      const edit = rf.querySelector('[data-edit]'), acts = rf.querySelector('[data-acts]'), sk = rf.querySelector('[data-skipped]');
      rf.querySelector('[data-change]').addEventListener('click', () => { edit.hidden = false; acts.hidden = true; });
      rf.querySelector('[data-save]').addEventListener('click', () => { edit.hidden = true; acts.hidden = false; });
      rf.querySelector('[data-skip]').addEventListener('click', () => { sk.hidden = false; });
      rf.querySelector('[data-undo]').addEventListener('click', () => { sk.hidden = true; });
    }
    root.querySelectorAll('form[data-confirm]').forEach((f) => f.addEventListener('submit', (e) => { if (!confirm(f.dataset.confirm)) e.preventDefault(); }));
  }
  const all = () => document.querySelectorAll('.baccount35').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
