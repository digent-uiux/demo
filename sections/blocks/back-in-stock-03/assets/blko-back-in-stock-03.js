// back-in-stock-03: per-size bells. A bell opens the inline email form under its row (one at a time). Save checks the
// email and posts the row's Shopify contact form in place (fetch; Shopify's bot challenge falls back to a normal
// submit). The bell then turns "On" (pressed, no toggle: the request is already with the store), the waiting count
// goes up by one, and the email is remembered in localStorage (try/catch), so later bells sign up at once. Add posts
// cart/add.js and fires cart:refresh. Re-runs on shopify:section:load.
// Motion (html.blko-ui-motion only, no reduced motion): the root is armed (data-armed) and marked in view (data-in) when
// it scrolls in, which plays the CSS photo mask and row unmask; the waiting counts tick up from 0 (1200ms, ease-out
// expo). Without the motion layer the counts show as printed.
(() => {
  const STORE = 'blko-back-in-stock';
  const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const load = () => { try { return JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { return {}; } };
  const keep = (o) => { try { localStorage.setItem(STORE, JSON.stringify(o)); } catch (e) { /* storage blocked */ } };
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function init(root) {
    if (!root || root.dataset.bound) return;
    root.dataset.bound = '1';
    const d = root.dataset;
    const live = root.hasAttribute('data-live');
    const design = root.hasAttribute('data-design') || !!(window.Shopify && window.Shopify.designMode);
    const foot = root.querySelector('[data-foot]');
    const status = root.querySelector('[data-status]');
    const rows = [...root.querySelectorAll('[data-row]')];
    const ac = new AbortController();
    const on = { signal: ac.signal };
    root.blkoCleanup = () => ac.abort();

    const saidNote = (email) => {
      if (!foot || !email) return;
      foot.innerHTML = esc(d.tSaved || '').replace('[email]', `<span data-email>${esc(email)}</span>`);
    };
    const ring = (row) => {
      const bell = row.querySelector('[data-bell]');
      if (!bell || bell.getAttribute('aria-pressed') === 'true') return;
      bell.setAttribute('aria-pressed', 'true');
      bell.removeAttribute('aria-expanded');
      bell.setAttribute('aria-label', (d.tStop || '').replace('[size]', row.dataset.size));
      bell.querySelector('[data-bell-label]').textContent = d.tOn;
      const w = row.querySelector('[data-waiting]');
      if (w) { const n = Number(w.dataset.waiting) + 1; w.dataset.waiting = n; w.textContent = (d.tWaiting || '').replace('[n]', n); }
      const f = row.querySelector('[data-form]');
      if (f) f.hidden = true;
    };
    const send = async (row, email) => {
      const form = row.querySelector('form');
      const all = load();
      const done = () => { all[row.dataset.key] = true; all.email = email; keep(all); ring(row); saidNote(email); };
      if (design || !form) { done(); return true; }
      const input = form.querySelector('input[type=email]');
      input.value = email;
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'text/html' } });
        if (/\/challenge/.test(res.url)) { done(); form.submit(); return true; }
        if (!res.ok) throw new Error('contact');
        done();
        return true;
      } catch (err) {
        const f = row.querySelector('[data-form]');
        const e = row.querySelector('[data-error]');
        if (f) f.hidden = false;
        if (e) { e.querySelector('[data-error-text]').textContent = d.tError; e.hidden = false; }
        return false;
      }
    };

    rows.forEach((row) => {
      const bell = row.querySelector('[data-bell]');
      const wrap = row.querySelector('[data-form]');
      const form = row.querySelector('form');
      if (bell) bell.addEventListener('click', () => {
        if (bell.getAttribute('aria-pressed') === 'true') return;
        const email = load().email;
        if (email) { send(row, email); return; }
        const open = wrap.hidden;
        rows.forEach((r) => { const w = r.querySelector('[data-form]'); const b = r.querySelector('[data-bell]'); if (w && w !== wrap) { w.hidden = true; if (b && b.hasAttribute('aria-expanded')) b.setAttribute('aria-expanded', 'false'); } });
        wrap.hidden = !open;
        bell.setAttribute('aria-expanded', String(open));
        if (open) form.querySelector('input[type=email]').focus({ preventScroll: true });
      }, on);
      if (form) {
        const errText = row.querySelector('[data-error-text]');
        const emailErr = errText ? errText.textContent : '';
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const input = form.querySelector('input[type=email]');
          const err = row.querySelector('[data-error]');
          if (!valid(input.value)) {
            errText.textContent = emailErr; err.hidden = false;
            input.setAttribute('aria-invalid', 'true'); input.focus();
            return;
          }
          err.hidden = true; input.removeAttribute('aria-invalid');
          const btn = form.querySelector('[type=submit]');
          btn.disabled = true;
          const ok = await send(row, input.value.trim());
          btn.disabled = false;
          if (ok && bell) bell.focus({ preventScroll: true });
        }, on);
      }
      const add = row.querySelector('[data-add]');
      if (add) add.addEventListener('click', async () => {
        if (!add.dataset.id) { status.textContent = d.tAddPreview; return; }
        add.disabled = true;
        try {
          const res = await fetch(`${(window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/'}cart/add.js`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: Number(add.dataset.id), quantity: 1 }] }) });
          if (!res.ok) throw new Error('cart');
          add.setAttribute('data-added', '');
          add.querySelector('[data-add-label]').textContent = d.tInBag;
          status.textContent = `${row.dataset.size}: ${d.tInBag}`;
          document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
        } catch (err) { status.textContent = d.tAddError; }
        finally { add.disabled = false; }
      }, on);
    });

    const de = document.documentElement;
    if (!root.dataset.armed && de.classList.contains('blko-ui-motion') && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.dataset.armed = '1';
      const tpl = esc(d.tWaiting || '[n]');
      const nums = [...root.querySelectorAll('[data-waiting]')];
      const set = (k) => nums.forEach((w) => { w.innerHTML = tpl.replace('[n]', `<span data-count>${Math.round(Number(w.dataset.waiting) * k)}</span>`); });
      set(0);
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        root.setAttribute('data-in', '');
        const t0 = performance.now() + 300;
        const tick = (t) => {
          if (ac.signal.aborted) return;
          const p = Math.max(0, Math.min(1, (t - t0) / 1200));
          set(p === 1 ? 1 : 1 - Math.pow(2, -10 * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.25 });
      io.observe(root);
      ac.signal.addEventListener('abort', () => io.disconnect());
    }

    const saved = load();
    rows.forEach((row) => { if (saved[row.dataset.key]) ring(row); });
    if (saved.email && rows.some((r) => saved[r.dataset.key])) saidNote(saved.email);
  }

  const all = (scope) => scope.querySelectorAll('[data-bbackinstock03]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all(document), { once: true });
  else all(document);
  document.addEventListener('shopify:section:load', (e) => all(e.target));
  document.addEventListener('shopify:section:unload', (e) => e.target.querySelectorAll('[data-bbackinstock03]').forEach((r) => r.blkoCleanup && r.blkoCleanup()));
})();
