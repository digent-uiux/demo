if (!customElements.get('blko-search-results-11')) {
  customElements.define('blko-search-results-11', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.preview !== 'true' || this.bound) return;
      this.bound = true;
      this.sort = 'featured';
      this.cards = [...this.querySelectorAll('[data-card]')];
      this.addEventListener('click', (e) => {
        const f = e.target.closest('[data-fibre]');
        if (f && f.matches('button')) { f.setAttribute('aria-pressed', String(f.getAttribute('aria-pressed') !== 'true')); this.render(); }
      });
      this.querySelector('[data-sort]')?.addEventListener('change', (e) => { this.sort = e.target.value; this.render(); });
      const q = this.querySelector('[data-q]');
      q?.addEventListener('input', () => { this.querySelector('[data-echo]').textContent = q.value || this.querySelector('[data-echo]').dataset.empty || q.value; });
    }
    render() {
      const d = this.dataset, on = [...this.querySelectorAll('button[data-fibre][aria-pressed="true"]')];
      const keys = on.map((b) => b.dataset.fibre);
      const list = this.cards.filter((c) => !keys.length || keys.includes(c.dataset.fibre));
      const s = this.sort;
      list.sort((a, b) => (s === 'low' ? a.dataset.price - b.dataset.price : s === 'high' ? b.dataset.price - a.dataset.price : a.dataset.order - b.dataset.order));
      const grid = this.querySelector('[data-grid]');
      this.cards.forEach((c) => { c.hidden = !list.includes(c); });
      list.forEach((c) => grid.append(c));
      this.querySelector('[data-listed]').textContent = keys.length ? on.map((b) => b.dataset.name.toLowerCase()).join(` ${d.and} `) : d.every;
      this.querySelector('[data-tail-line]').textContent = d.tail.replace('[n]', list.length);
      this.querySelector('[data-empty]').hidden = list.length > 0;
    }
  });
}
