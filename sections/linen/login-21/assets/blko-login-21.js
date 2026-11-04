if (!customElements.get('blko-login-21')) {
  customElements.define('blko-login-21', class extends HTMLElement {
    connectedCallback() {
      const login = this.querySelector('[data-login]');
      const recover = this.querySelector('[data-recover]');
      const show = (which, focus) => {
        login.hidden = which !== 'login';
        recover.hidden = which !== 'recover';
        if (focus) (which === 'login' ? login : recover).querySelector('input[type="email"]')?.focus();
      };
      if (location.hash === '#recover' || this.querySelector('[data-recovered]')) show('recover');
      this.addEventListener('click', (e) => {
        const s = e.target.closest('[data-show]');
        if (s) { e.preventDefault(); show(s.dataset.show, true); return; }
        const v = e.target.closest('[data-via]');
        if (v) {
          this.querySelectorAll('[data-via]').forEach((b) => b.setAttribute('aria-pressed', String(b === v)));
          const st = this.querySelector('[data-status]');
          st.textContent = st.dataset.tpl.replace('[method]', v.dataset.via.toLowerCase());
          st.hidden = false;
        }
      });
    }
  });
}
