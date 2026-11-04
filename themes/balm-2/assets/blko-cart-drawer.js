// Balm cart drawer (behaviour after the roast drawer). Section Rendering API: every cart change asks Shopify for the
// re-rendered "blko-cart-drawer" section and swaps [data-drawer-body], then sets every [data-cart-count] to the real
// count and fires `blko:cart:updated` (detail.item_count) so other sections (cart-page-36) can follow.
// Opens on: the header bag ([data-bag]), any product form posted to /cart/add (intercepted -> /cart/add.js), and the
// `blko:cart:add` event that balm sections fire after their own /cart/add.js call (`cart:refresh` only refreshes).
// Lines change through /cart/change.js (−/+, Remove). Native <dialog>: focus trap, Escape, focus return.
(() => {
  if (customElements.get('blko-cart-drawer')) return;
  const ROOT = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
  const ID = 'blko-cart-drawer';
  const onCartPage = () => /\/cart\/?$/.test(location.pathname);

  class Drawer extends HTMLElement {
    connectedCallback() {
      this.dialog = this.querySelector('[data-dialog]');
      this.on = this.dataset.enabled !== 'false';
      this.addEventListener('click', (e) => {
        if (e.target === this.dialog) return this.close(); // backdrop
        if (e.target.closest('[data-close]')) return this.close();
        const q = e.target.closest('[data-qty]');
        if (q) this.change(q.closest('[data-key]').dataset.key, +q.dataset.qty);
      });
      this.dialog.addEventListener('cancel', (e) => { e.preventDefault(); this.close(); });
      document.addEventListener('click', (e) => {
        const bag = e.target.closest('[data-bag]');
        if (!bag || !this.on || onCartPage() || e.metaKey || e.ctrlKey) return;
        e.preventDefault(); this.open(bag);
      });
      document.addEventListener('submit', (e) => {
        const f = e.target;
        if (!this.on || !(f instanceof HTMLFormElement) || !/\/cart\/add\/?$/.test(f.getAttribute('action') || '')) return;
        if (e.submitter && e.submitter.name === 'checkout') return;
        e.preventDefault(); this.add(new FormData(f), f);
      });
      const refreshOpen = () => this.refresh().then(() => { if (this.on && this.count() > 0 && !onCartPage()) this.open(); });
      document.addEventListener('blko:cart:add', refreshOpen);
      document.addEventListener('cart:refresh', () => this.refresh());
    }
    body() { return this.querySelector('[data-drawer-body]'); }
    count() { return parseInt(this.body().dataset.count, 10) || 0; }
    open(from) {
      this.from = from || document.activeElement;
      if (!this.dialog.open) {
        this.dialog.classList.add('is-opening');
        this.dialog.showModal();
        clearTimeout(this.t); this.t = setTimeout(() => this.dialog.classList.remove('is-opening'), 950);
      }
      document.documentElement.style.overflow = 'hidden';
    }
    close() {
      if (!this.dialog.open) return;
      const done = () => { this.dialog.classList.remove('is-closing'); this.dialog.close(); document.documentElement.style.overflow = ''; if (this.from && this.from.focus) this.from.focus(); };
      if (!document.documentElement.classList.contains('blko-kit-balm')) return done();
      this.dialog.classList.add('is-closing');
      setTimeout(done, 300);
    }
    render(html) {
      if (!html) return;
      const next = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-drawer-body]');
      if (!next) return;
      const body = this.body(), focusKey = document.activeElement && document.activeElement.closest('[data-key]');
      body.replaceWith(next);
      const n = this.count();
      document.querySelectorAll('[data-cart-count]').forEach((c) => { c.textContent = n < 100 ? String(n) : '99+'; c.hidden = n === 0; });
      document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: n } }));
      if (focusKey && this.dialog.open) {
        const again = this.querySelector(`[data-key="${CSS.escape(focusKey.dataset.key)}"] [data-qty]`);
        (again || this.querySelector('[data-close]')).focus();
      }
    }
    say(msg) { const m = this.querySelector('[data-msg]'); if (m) m.textContent = msg || ''; }
    busy(v) { this.body().setAttribute('aria-busy', String(v)); }
    async refresh() {
      const r = await fetch(`${location.pathname}?sections=${ID}`, { headers: { Accept: 'application/json' } }).catch(() => null);
      if (r && r.ok) this.render((await r.json())[ID]);
    }
    async post(path, payload) {
      const r = await fetch(ROOT + path, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, sections: ID, sections_url: location.pathname }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.status) throw new Error(j.description || j.message || 'Error');
      return j;
    }
    async change(key, quantity) {
      this.busy(true);
      try { const j = await this.post('cart/change.js', { id: key, quantity }); this.render(j.sections && j.sections[ID]); this.say(''); }
      catch (err) { this.say(err.message); }
      finally { this.busy(false); }
    }
    async add(data, form) {
      const btn = form.querySelector('[type="submit"]:not([name="checkout"])');
      if (btn) btn.setAttribute('aria-disabled', 'true');
      const items = [{ id: +data.get('id'), quantity: +(data.get('quantity') || 1) }];
      const plan = data.get('selling_plan'); if (plan) items[0].selling_plan = +plan;
      const props = {}; for (const [k, v] of data) { const m = k.match(/^properties\[(.+)\]$/); if (m && v) props[m[1]] = v; }
      if (Object.keys(props).length) items[0].properties = props;
      try {
        const j = await this.post('cart/add.js', { items });
        this.render(j.sections && j.sections[ID]);
        this.open(btn);
      } catch (err) {
        const out = form.querySelector('[data-msg], [role="alert"]');
        if (out) out.textContent = err.message; else { this.say(err.message); this.open(btn); }
      } finally { if (btn) btn.removeAttribute('aria-disabled'); }
    }
  }
  customElements.define('blko-cart-drawer', Drawer);
})();
