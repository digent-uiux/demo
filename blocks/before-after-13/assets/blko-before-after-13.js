// before-after-13: the shade row. Add posts the form's variant to cart/add.js (routes.root_url): Adding -> Added +
// View bag and cart:refresh, or the error message with the button back. A sold-out variant stays locked (server-rendered).
// No product (preview): Add is simulated. Marks the section root data-in once in view (the lines fade in).
// Idempotent define; connectedCallback re-runs on shopify:section:load, disconnectedCallback cleans up.
(() => {
  const TAG = 'blko-ba-add';
  if (customElements.get(TAG)) return;
  class BaAdd extends HTMLElement {
    connectedCallback() {
      if (this.bound) return;
      this.bound = true;
      this.form = this.querySelector('form');
      this.btn = this.querySelector('[data-add]');
      this.cta = this.querySelector('[data-cta]');
      this.status = this.querySelector('[data-status]');
      this.onSubmit = (e) => { e.preventDefault(); this.add(); };
      if (this.form) this.form.addEventListener('submit', this.onSubmit);
      const root = this.closest('[data-bbeforeafter13]');
      if (root && 'IntersectionObserver' in window) {
        this.io = new IntersectionObserver((es) => { if (es.some((x) => x.isIntersecting)) { root.setAttribute('data-in', ''); this.io.disconnect(); } }, { rootMargin: '0px 0px -10% 0px' });
        this.io.observe(root);
      } else if (root) root.setAttribute('data-in', '');
    }
    disconnectedCallback() {
      if (this.form) this.form.removeEventListener('submit', this.onSubmit);
      if (this.io) this.io.disconnect();
      clearTimeout(this.timer);
      this.bound = false;
    }
    async add() {
      const d = this.dataset;
      if (!this.btn || this.btn.disabled || this.busy) return;
      this.busy = true;
      this.btn.setAttribute('aria-busy', 'true');
      this.cta.textContent = d.tAdding;
      this.status.textContent = '';
      try {
        if (!this.hasAttribute('data-live')) await new Promise((r) => { this.timer = setTimeout(r, 600); });
        else {
          const id = this.form.querySelector('[name="id"]').value;
          const base = (window.Shopify && Shopify.routes && Shopify.routes.root) || d.root || '/';
          const res = await fetch(base + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: Number(id), quantity: 1 }] }) });
          const body = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(body.description || body.message || '');
          document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
        }
        this.cta.textContent = d.tAdded;
        this.status.textContent = d.tInBag + ' ';
        const a = document.createElement('a');
        a.href = d.cartUrl || '/cart';
        a.textContent = d.tView;
        this.status.appendChild(a);
      } catch (err) {
        this.cta.textContent = d.tAdd;
        this.status.textContent = (err && err.message) || d.tError;
      } finally {
        this.busy = false;
        this.btn.removeAttribute('aria-busy');
      }
    }
  }
  customElements.define(TAG, BaAdd);
})();
