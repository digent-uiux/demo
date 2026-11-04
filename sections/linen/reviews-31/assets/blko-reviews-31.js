if (!customElements.get('blko-reviews-31')) {
  customElements.define('blko-reviews-31', class extends HTMLElement {
    connectedCallback() {
      this.list = this.querySelector('[data-list]');
      this.items = [...this.querySelectorAll('[data-review]')];
      this.stage = this.dataset.start;
      this.star = null;
      this.sort = 'washes';
      this.shown = 3;
      this.addEventListener('click', (e) => {
        const t = e.target;
        const st = t.closest('[data-stage]');
        if (st) { this.stage = st.dataset.stage; this.shown = 3; return this.render(); }
        const sr = t.closest('[data-star]');
        if (sr) { this.star = this.star === sr.dataset.star ? null : sr.dataset.star; this.shown = 3; return this.render(); }
        if (t.closest('[data-moreb]')) { this.shown += 3; return this.render(); }
        if (t.closest('[data-reset]')) { this.stage = 'all'; this.star = null; return this.render(); }
        const u = t.closest('[data-useful]');
        if (u) {
          const on = u.getAttribute('aria-pressed') !== 'true';
          u.setAttribute('aria-pressed', String(on));
          u.querySelector('[data-un]').textContent = Number(u.dataset.n) + (on ? 1 : 0);
        }
      });
      this.querySelector('[data-sort]')?.addEventListener('change', (e) => { this.sort = e.target.value; this.render(); });
      this.render();
    }
    render() {
      this.querySelectorAll('[data-stage]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.stage === this.stage)));
      this.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== this.stage));
      this.querySelectorAll('[data-star]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.star === this.star)));
      this.querySelectorAll('[data-seg]').forEach((s) => s.classList.toggle('is-dim', this.star !== null && s.dataset.seg !== this.star));
      const key = { washes: (a, b) => b.dataset.washes - a.dataset.washes, recent: (a, b) => a.dataset.order - b.dataset.order, helpful: (a, b) => b.dataset.helpful - a.dataset.helpful }[this.sort];
      const hit = this.items.filter((r) => (this.stage === 'all' || r.dataset.stage === this.stage) && (this.star === null || r.dataset.stars === this.star)).sort(key);
      const empty = this.querySelector('[data-empty]');
      this.items.forEach((r) => (r.hidden = true));
      hit.forEach((r, i) => { this.list.insertBefore(r, empty); r.hidden = i >= this.shown; });
      empty.hidden = hit.length > 0;
      const d = this.dataset;
      const lab = this.querySelector(`[data-stage="${this.stage}"]`)?.dataset.label;
      this.querySelector('[data-count]').textContent = `${hit.length} ${hit.length === 1 ? d.one : d.many}${lab ? ` ${d.at} ${lab.toLowerCase()}` : ''}${this.star ? ` · ${this.star} ${d.stars}` : ''}`;
      const rest = hit.length - this.shown;
      this.querySelector('[data-morew]').hidden = rest <= 0;
      this.querySelector('[data-moreb]').textContent = `${d.more} (${rest})`;
    }
  });
}
