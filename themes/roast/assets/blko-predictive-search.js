// Roast predictive search. [data-search-open] links open a modal <dialog>; typing fetches
// /search/suggest?q=…&section_id=blko-predictive-search (Section Rendering API, 200 ms debounce, aborts stale requests)
// and swaps the results. Arrow keys move through the results (combobox), Enter follows the selected one or submits the
// form (the /search page), Escape closes. Without JS the links go to /search.
(() => {
  if (customElements.get('blko-predictive-search')) return;
  class PS extends HTMLElement {
    connectedCallback() {
      this.dialog = this.querySelector('[data-dialog]');
      this.input = this.querySelector('[data-input]');
      this.body = this.querySelector('[data-body]');
      this.idle = this.body.innerHTML;
      document.addEventListener('click', (e) => {
        const o = e.target.closest('[data-search-open]');
        if (!o || e.metaKey || e.ctrlKey) return;
        e.preventDefault(); this.open(o);
      });
      this.addEventListener('click', (e) => {
        if (e.target === this.dialog || e.target.closest('[data-close]')) this.close();
      });
      this.dialog.addEventListener('close', () => { document.documentElement.style.overflow = ''; if (this.from && this.from.focus) this.from.focus(); });
      let t = 0;
      this.input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => this.search(), 200); });
      this.input.addEventListener('keydown', (e) => this.key(e));
    }
    open(from) {
      this.from = from;
      if (!this.dialog.open) this.dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
      this.input.focus(); this.input.select();
    }
    close() { if (this.dialog.open) this.dialog.close(); }
    opts() { return [...this.body.querySelectorAll('[data-opt]')]; }
    async search() {
      const q = this.input.value.trim();
      if (this.ctrl) this.ctrl.abort();
      if (!q) { this.body.innerHTML = this.idle; this.input.setAttribute('aria-expanded', 'false'); return; }
      this.ctrl = new AbortController();
      this.body.setAttribute('aria-busy', 'true');
      try {
        const u = `${this.dataset.url}?q=${encodeURIComponent(q)}&resources[type]=product,collection,query,page,article&resources[limit]=6&resources[options][fields]=title,product_type,variants.title,vendor,tag&section_id=blko-predictive-search`;
        const r = await fetch(u, { signal: this.ctrl.signal });
        if (!r.ok) throw new Error(r.status);
        const res = new DOMParser().parseFromString(await r.text(), 'text/html').querySelector('[data-results]');
        if (res) { this.body.replaceChildren(res); this.input.setAttribute('aria-expanded', 'true'); }
        this.opts().forEach((o, i) => { o.id = `${this.input.id}-o${i}`; o.setAttribute('role', 'option'); });
      } catch (err) { if (err.name !== 'AbortError') this.body.innerHTML = this.idle; }
      finally { this.body.removeAttribute('aria-busy'); this.input.removeAttribute('aria-activedescendant'); }
    }
    key(e) {
      const o = this.opts(); if (!o.length) return;
      const cur = o.findIndex((x) => x.getAttribute('aria-selected') === 'true');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const n = e.key === 'ArrowDown' ? (cur + 1) % o.length : (cur - 1 + o.length) % o.length;
        o.forEach((x, i) => x.setAttribute('aria-selected', String(i === n)));
        this.input.setAttribute('aria-activedescendant', o[n].id);
        o[n].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && cur > -1) { e.preventDefault(); o[cur].click(); }
    }
  }
  customElements.define('blko-predictive-search', PS);
})();
