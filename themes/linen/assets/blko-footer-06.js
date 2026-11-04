if (!customElements.get('blko-footer-06')) {
  customElements.define('blko-footer-06', class extends HTMLElement {
    connectedCallback() {
      this.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-toggle]');
        if (!btn || !this.contains(btn)) return;
        const open = btn.getAttribute('aria-expanded') !== 'true';
        this.querySelectorAll('[data-toggle]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
        btn.setAttribute('aria-expanded', String(open));
      });
    }
  });
}
