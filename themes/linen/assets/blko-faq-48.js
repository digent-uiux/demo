if (!customElements.get('blko-faq-48')) {
  customElements.define('blko-faq-48', class extends HTMLElement {
    connectedCallback() {
      this.addEventListener('click', (e) => {
        const q = e.target.closest('[data-q]');
        if (q) {
          const open = q.getAttribute('aria-expanded') !== 'true';
          this.querySelectorAll('[data-q]').forEach((b) => {
            b.setAttribute('aria-expanded', 'false');
            document.getElementById(b.getAttribute('aria-controls')).hidden = true;
          });
          q.setAttribute('aria-expanded', String(open));
          document.getElementById(q.getAttribute('aria-controls')).hidden = !open;
          return;
        }
        const v = e.target.closest('[data-yes],[data-no]');
        if (v) {
          const tpl = this.querySelector(v.hasAttribute('data-yes') ? '[data-thanks]' : '[data-sorry]');
          v.closest('[data-vote]').replaceChildren(tpl.content.cloneNode(true));
        }
      });
    }
  });
}
