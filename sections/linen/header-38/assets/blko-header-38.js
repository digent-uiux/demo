if (!customElements.get('blko-header-38')) {
  customElements.define('blko-header-38', class extends HTMLElement {
    connectedCallback() {
      if (this._on) return;
      this._on = true;
      const btn = this.querySelector('[data-toggle]');
      const sheet = this.querySelector('#' + CSS.escape(btn.getAttribute('aria-controls')));
      const set = (open) => {
        btn.setAttribute('aria-expanded', open);
        btn.setAttribute('aria-label', open ? btn.dataset.close : btn.dataset.open);
        sheet.hidden = !open;
      };
      btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
      this.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) { set(false); btn.focus(); } });
      const live = this.querySelector('[data-live]');
      const hint = live && live.textContent;
      this.querySelectorAll('[data-chip]').forEach((chip) => chip.addEventListener('click', () => {
        const on = chip.getAttribute('aria-pressed') !== 'true';
        this.querySelectorAll('[data-chip]').forEach((c) => c.setAttribute('aria-pressed', 'false'));
        chip.setAttribute('aria-pressed', on);
        const tpl = this.querySelector(`template[data-pick="${chip.dataset.chip}"]`);
        if (on && tpl) live.replaceChildren(tpl.content.cloneNode(true)); else live.textContent = hint;
      }));
    }
  });
}
