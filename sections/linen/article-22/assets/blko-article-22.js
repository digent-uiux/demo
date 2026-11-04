if (!customElements.get('blko-article-22-compare')) {
  customElements.define('blko-article-22-compare', class extends HTMLElement {
    connectedCallback() {
      const r = this.querySelector('input[type="range"]');
      if (!r) return;
      r.addEventListener('input', () => {
        this.style.setProperty('--pos', `${r.value}%`);
        r.setAttribute('aria-valuetext', `${r.value}% ${r.dataset.label}`);
      });
    }
  });
}
if (!customElements.get('blko-article-22-look')) {
  customElements.define('blko-article-22-look', class extends HTMLElement {
    connectedCallback() {
      this.btn = this.querySelector('[data-add]');
      this.addEventListener('click', (e) => {
        const z = e.target.closest('[data-size]');
        if (z) {
          const on = z.getAttribute('aria-pressed') !== 'true';
          z.closest('[data-item]').querySelectorAll('[data-size]').forEach((b) => b.setAttribute('aria-pressed', String(on && b === z)));
          this.added(false);
          return this.render();
        }
        if (e.target.closest('[data-add]')) this.add();
      });
      this.render();
    }
    picks() {
      return [...this.querySelectorAll('[data-item]')].map((i) => ({ name: i.dataset.name, b: i.querySelector('[data-size][aria-pressed="true"]') })).filter((p) => p.b);
    }
    render() {
      const p = this.picks();
      const d = this.dataset;
      this.querySelector('[data-sum]').textContent = p.length ? `${p.length} ${p.length > 1 ? d.many : d.one}: ${p.map((x) => `${x.name} (${x.b.dataset.size})`).join(', ')}` : d.none;
      const cents = p.reduce((n, x) => n + Number(x.b.dataset.price), 0);
      const fmt = (c) => `$${(c / 100).toLocaleString('en-US', { minimumFractionDigits: c % 100 ? 2 : 0, maximumFractionDigits: 2 })}`;
      const one = p.length === 1 ? p[0].b.dataset.label : fmt(cents);
      this.querySelector('[data-add-text]').innerHTML = `${d.add} · <span class="tabular">${one}</span>`;
      this.btn.disabled = !p.length;
    }
    added(on) {
      this.querySelector('[data-add-text]').hidden = on;
      this.querySelector('[data-done]').hidden = !on;
    }
    async add() {
      const items = this.picks().filter((x) => x.b.dataset.id).map((x) => ({ id: Number(x.b.dataset.id), quantity: 1 }));
      if (items.length) {
        const res = await fetch(`${window.Shopify?.routes?.root || '/'}cart/add.js`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items }) });
        if (!res.ok) return;
        document.dispatchEvent(new CustomEvent('cart:refresh'));
      }
      this.added(true);
    }
  });
}
