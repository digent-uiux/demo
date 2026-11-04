if (!customElements.get('blko-product-story-16')) {
  customElements.define('blko-product-story-16', class extends HTMLElement {
    connectedCallback() {
      this.addEventListener('blko-ui:change', (e) => {
        const key = e.detail && e.detail.index === 1 ? 'b' : 'a';
        this.querySelectorAll('[data-a]').forEach((row) => {
          const [v, u] = row.dataset[key].split('|');
          row.querySelector('[data-v]').textContent = v;
          row.querySelector('[data-u]').textContent = u;
        });
      });
    }
  });
}
