if (!customElements.get('blko-contact-54')) {
  customElements.define('blko-contact-54', class extends HTMLElement {
    connectedCallback() {
      this.form = this.querySelector('form');
      this.fields = this.querySelector('[data-fields]');
      if (!this.form || !this.fields) return;
      this.form.noValidate = true;
      this.tried = false;
      this.addEventListener('click', (e) => {
        if (e.target.closest('[data-open]')) return this.toggle(true);
        if (e.target.closest('[data-close]')) return this.toggle(false);
        const z = e.target.closest('[data-sz]');
        if (z) {
          this.querySelectorAll('[data-sz]').forEach((b) => b.setAttribute('aria-pressed', String(b === z)));
          this.querySelector('[data-size]').value = z.dataset.sz;
          if (this.tried) this.check();
        }
      });
      this.addEventListener('input', () => this.tried && this.check());
      this.form.addEventListener('submit', (e) => {
        this.tried = true;
        if (!this.check()) {
          e.preventDefault();
          this.querySelector('[data-alert]').textContent = this.dataset.alert || '';
        }
      });
    }
    toggle(open) {
      const acts = this.querySelector('[data-acts]');
      this.fields.hidden = !open;
      if (acts) acts.hidden = open;
      if (open) this.querySelector('[data-piece]').focus();
      else {
        this.tried = false;
        this.querySelectorAll('[data-err]').forEach((p) => (p.hidden = true));
        this.querySelector('[data-open]')?.focus();
      }
    }
    check() {
      const piece = this.querySelector('[data-piece]');
      const email = this.querySelector('[data-email]');
      const bad = {
        piece: piece.value.trim().length < 2,
        size: !this.querySelector('[data-size]').value,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()),
      };
      piece.setAttribute('aria-invalid', String(bad.piece));
      email.setAttribute('aria-invalid', String(bad.email));
      Object.entries(bad).forEach(([k, v]) => (this.querySelector(`[data-err="${k}"]`).hidden = !v));
      return !Object.values(bad).some(Boolean);
    }
  });
}
