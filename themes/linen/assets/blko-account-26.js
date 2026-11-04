if (!customElements.get('blko-account-26')) {
  customElements.define('blko-account-26', class extends HTMLElement {
    connectedCallback() {
      const pieceIn = this.querySelector('[data-piece-input]');
      const repairIn = this.querySelector('[data-repair-input]');
      const send = this.querySelector('[data-send]');
      const nameOf = (i) => this.querySelector(`[data-panel="${i}"] h2`)?.textContent.trim() || '';
      if (pieceIn) pieceIn.value = nameOf(0);
      this.addEventListener('click', (e) => {
        const b = e.target.closest('[data-piece]');
        if (!b) return;
        const i = b.dataset.piece;
        this.querySelectorAll('[data-piece]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        this.querySelectorAll('[data-panel]').forEach((p) => (p.hidden = p.dataset.panel !== i));
        if (pieceIn) pieceIn.value = nameOf(i);
        this.querySelectorAll('[data-blko-ui-option]').forEach((o) => o.setAttribute('aria-pressed', 'false'));
        if (repairIn) repairIn.value = '';
        if (send) send.disabled = true;
      });
      this.addEventListener('click', (e) => {
        const o = e.target.closest('[data-blko-ui-option]');
        if (!o || !repairIn) return;
        requestAnimationFrame(() => {
          const on = this.querySelector('[data-blko-ui-option][aria-pressed="true"]');
          repairIn.value = on ? on.value || on.textContent.trim() : '';
          if (send) send.disabled = !on;
        });
      });
    }
  });
}
