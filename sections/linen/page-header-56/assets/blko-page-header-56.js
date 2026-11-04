if (!customElements.get('blko-page-header-56')) {
  customElements.define('blko-page-header-56', class extends HTMLElement {
    connectedCallback() {
      this.input = this.querySelector('[data-q]');
      this.items = [...this.querySelectorAll('[data-question]')];
      this.input.addEventListener('input', () => this.update());
      this.querySelectorAll('[data-hint]').forEach((b) => b.addEventListener('click', () => { this.input.value = b.dataset.hint; this.update(); }));
    }
    update() {
      const term = this.input.value.trim().toLowerCase();
      const hits = term ? this.items.filter((li) => li.dataset.question.includes(term)) : [];
      this.items.forEach((li) => { li.hidden = !hits.slice(0, 2).includes(li); });
      this.querySelector('[data-hits]').hidden = hits.length === 0;
      const n = term ? hits.length : this.items.length;
      this.querySelector('[data-count]').textContent = (n === 1 ? this.dataset.one : this.dataset.other).replace(/\d+|\{\{\s*count\s*\}\}/, n);
    }
  });
}
