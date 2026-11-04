if (!customElements.get('blko-blog-53')) {
  customElements.define('blko-blog-53', class extends HTMLElement {
    connectedCallback() {
      this.cards = [...this.querySelectorAll('[data-card]')];
      this.deck = this.querySelector('[data-deck]');
      if (!this.cards.length) return;
      this.i = 0;
      this.dx = 0;
      this.addEventListener('click', (e) => {
        const g = e.target.closest('[data-go]');
        if (g) return this.go(Number(g.dataset.go));
        const s = e.target.closest('[data-step]');
        if (s) this.go(this.i + Number(s.dataset.step));
      });
      this.deck.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') this.go(this.i + 1);
        if (e.key === 'ArrowLeft') this.go(this.i - 1);
      });
      this.deck.addEventListener('pointerdown', (e) => {
        const top = e.target.closest('[data-card]');
        if (!top || Number(top.dataset.card) !== this.i) return;
        this.x0 = e.clientX;
        this.moved = false;
        this.deck.classList.add('is-drag');
        top.setPointerCapture(e.pointerId);
      });
      this.deck.addEventListener('pointermove', (e) => {
        if (this.x0 == null) return;
        this.dx = e.clientX - this.x0;
        if (Math.abs(this.dx) > 4) this.moved = true;
        this.paint();
      });
      const up = () => {
        if (this.x0 == null) return;
        const dx = this.dx;
        this.x0 = null;
        this.dx = 0;
        this.deck.classList.remove('is-drag');
        if (dx < -70) this.go(this.i + 1); else if (dx > 70) this.go(this.i - 1); else this.paint();
      };
      this.deck.addEventListener('pointerup', up);
      this.deck.addEventListener('pointercancel', up);
      this.deck.addEventListener('click', (e) => { if (this.moved) { e.preventDefault(); this.moved = false; } }, true);
      this.paint();
    }
    go(n) {
      this.i = Math.max(0, Math.min(this.cards.length - 1, n));
      this.paint();
    }
    paint() {
      const total = this.cards.length;
      const pad = (n) => String(n).padStart(2, '0');
      this.cards.forEach((c, n) => {
        const d = n - this.i;
        const top = d === 0;
        c.hidden = d < 0 || d > 2;
        const tilt = top ? this.dx / 25 : d % 2 ? 2.5 : -2;
        c.style.zIndex = 10 - d;
        c.style.transform = `translate(${top ? this.dx : 0}px, ${d * -14}px) rotate(${tilt}deg) scale(${1 - d * 0.04})`;
        c.classList.toggle('is-top', top);
        if (top) c.removeAttribute('aria-hidden'); else c.setAttribute('aria-hidden', 'true');
        c.querySelectorAll('a').forEach((a) => (top ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
      });
      this.querySelectorAll('[data-go]').forEach((b) => {
        const on = Number(b.dataset.go) === this.i;
        const attr = b.classList.contains('bblog53__dot') ? 'page' : 'true';
        if (on) b.setAttribute('aria-current', attr); else b.removeAttribute('aria-current');
      });
      const [prev, next] = this.querySelectorAll('[data-step]');
      prev.disabled = this.i === 0;
      next.disabled = this.i === total - 1;
      this.deck.setAttribute('aria-label', this.dataset.of.replace('[n]', this.i + 1).replace('[total]', total));
      this.querySelector('[data-counter]').textContent = `${pad(this.i + 1)} / ${pad(total)}`;
    }
  });
}
