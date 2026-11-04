if (!customElements.get('blko-team-21')) {
  customElements.define('blko-team-21', class extends HTMLElement {
    connectedCallback() {
      this.state = { col: 'since', dir: 1 };
      this.querySelectorAll('[data-sort]').forEach((b) => b.addEventListener('click', () => {
        const col = b.dataset.sort;
        this.state = this.state.col === col ? { col, dir: -this.state.dir } : { col, dir: 1 };
        this.apply();
      }));
      this.apply();
    }
    apply() {
      const { col, dir } = this.state;
      const body = this.querySelector('[data-rows]');
      const rows = [...body.children].sort((a, b) => (col === 'since' ? a.dataset.since - b.dataset.since : a.dataset[col].localeCompare(b.dataset[col])) * dir);
      rows.forEach((r) => body.appendChild(r));
      this.querySelectorAll('[data-col]').forEach((th) => {
        th.setAttribute('aria-sort', th.dataset.col === col ? (dir === 1 ? 'ascending' : 'descending') : 'none');
      });
    }
  });
}
