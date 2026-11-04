if (!customElements.get('blko-collection-banner-58')) {
  customElements.define('blko-collection-banner-58', class extends HTMLElement {
    connectedCallback() {
      const line = this.querySelector('[data-lotline]');
      this.querySelectorAll('[data-slug],[data-all]').forEach((a) => a.addEventListener('click', () => {
        this.querySelectorAll('[aria-current]').forEach((x) => x.removeAttribute('aria-current'));
        a.setAttribute('aria-current', 'page');
        if (a.dataset.all !== undefined) { line.textContent = line.dataset.default; return; }
        const n = Number(a.dataset.count);
        line.textContent = `${this.dataset.lot} ${a.dataset.slug} · ${(n === 1 ? this.dataset.notesOne : this.dataset.notesOther).replace(/\{\{\s*count\s*\}\}/, n)}`;
      }));
    }
  });
}
