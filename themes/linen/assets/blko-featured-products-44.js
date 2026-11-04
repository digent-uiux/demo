if (!customElements.get('blko-featured-products-44')) {
  customElements.define('blko-featured-products-44', class extends HTMLElement {
    connectedCallback() {
      if (this._on) return;
      this._on = true;
      const live = this.querySelector('[data-live]');
      const count = () => { live.textContent = live.dataset.text.replace('N', this.querySelectorAll('[data-variant][aria-pressed="true"]').length); };
      const set = (btn, on) => { btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? btn.dataset.added : btn.dataset.add); count(); };
      this.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-variant]');
        if (!btn) return;
        if (!btn.dataset.variant) { if(this.dataset.preview==='true')set(btn, btn.getAttribute('aria-pressed') !== 'true');else live.textContent=this.dataset.error; return; }
        if (btn.getAttribute('aria-pressed') === 'true') return;
        btn.disabled = true;
        try {
          const root = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
          const r = window.LinenCart ? await window.LinenCart.add({items:[{id:Number(btn.dataset.variant),quantity:1}]}) : await fetch(root + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: Number(btn.dataset.variant), quantity: 1 }] }) });
          if (!window.LinenCart && !r.ok) throw new Error();
          set(btn, true);
          document.dispatchEvent(new CustomEvent('blko:cart:add', { bubbles: true, detail: { id: Number(btn.dataset.variant) } }));
        } catch (_) { btn.setAttribute('aria-pressed', 'false'); live.textContent=this.dataset.error; } finally { btn.disabled = false; }
      });
    }
  });
}
