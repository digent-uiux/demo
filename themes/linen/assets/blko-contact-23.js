if (!customElements.get('blko-contact-23')) {
  customElements.define('blko-contact-23', class extends HTMLElement {
    connectedCallback() {
      this.form = this.querySelector('[data-form]');
      if (!this.form || !this.querySelector('[data-piece-input]')) return;
      this.unit = 'cm';
      this.q = (s) => this.querySelector(s);
      this.now = this.form.querySelector('[name="contact[Now]"]');
      this.want = this.form.querySelector('[name="contact[Wanted]"]');
      this.addEventListener('blko-ui:change', () => this.pickPiece());
      this.querySelectorAll('[data-blko-ui-option]').forEach((b) => b.addEventListener('click', () => setTimeout(() => this.pickPiece())));
      this.querySelectorAll('[data-job]').forEach((b) => b.addEventListener('click', () => {
        b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
        this.syncJobs();
      }));
      this.querySelectorAll('[data-u]').forEach((b) => b.addEventListener('click', () => this.setUnit(b.dataset.u)));
      this.querySelectorAll('[data-m]').forEach((b) => b.addEventListener('click', () => {
        this.querySelectorAll('[data-m]').forEach((x) => x.setAttribute('aria-checked', String(x === b)));
        this.q('[data-method-input]').value = b.dataset.m;
      }));
      [this.now, this.want].forEach((i) => { i.inputMode = 'decimal'; i.addEventListener('input', () => this.diff()); });
      this.form.addEventListener('submit', (e) => { if (!this.validate()) e.preventDefault(); });
      this.syncJobs();
    }
    pickPiece() {
      const on = this.querySelector('[data-blko-ui-option][aria-pressed="true"]');
      if (!on) return;
      const name = on.value;
      if (this.q('[data-piece-input]').value === name) return;
      this.q('[data-piece-input]').value = name;
      this.querySelectorAll('[data-for]').forEach((el) => { el.hidden = el.dataset.for !== name; });
      this.querySelectorAll('[data-job]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
      const group = [...this.querySelectorAll('[data-for]')].find((el) => el.dataset.for === name && el.querySelector('[data-job]'));
      if (group) group.querySelector('[data-job]').setAttribute('aria-pressed', 'true');
      this.syncJobs();
    }
    syncJobs() {
      const name = this.q('[data-piece-input]').value;
      const group = [...this.querySelectorAll('[data-for]')].find((el) => el.dataset.for === name && el.querySelector('[data-job]'));
      this.jobs = group ? [...group.querySelectorAll('[data-job][aria-pressed="true"]')].map((b) => b.dataset.job) : [];
      this.q('[data-jobs-input]').value = this.jobs.join(', ');
    }
    setUnit(u) {
      this.unit = u;
      this.querySelectorAll('[data-u]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.u === u)));
      this.querySelectorAll('[data-unit]').forEach((s) => { s.textContent = u; });
      this.q('[data-unit-input]').value = u;
      this.now.placeholder = u === 'cm' ? '82' : '32';
      this.want.placeholder = u === 'cm' ? '78' : '30.5';
      this.diff();
    }
    diff() {
      const a = parseFloat(this.now.value), b = parseFloat(this.want.value);
      const d = Number.isFinite(a) && Number.isFinite(b) ? Math.round((a - b) * 10) / 10 : null;
      this.q('[data-diff]').textContent = d === null || d === 0 ? '–' : `${d > 0 ? '−' : '+'}${Math.abs(d)} ${this.unit}`;
    }
    err(key, msg, input) {
      const el = this.q(`[data-err="${key}"]`);
      el.hidden = !msg;
      el.textContent = msg || '';
      if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
      return !msg;
    }
    validate() {
      this.syncJobs();
      const b = parseFloat(this.want.value);
      const email = this.form.querySelector('[name="contact[email]"]');
      const ok = [
        this.err('jobs', this.jobs.length ? '' : this.dataset.errJobs),
        this.err('want', Number.isFinite(b) && b > 0 ? '' : this.dataset.errWant.replace('[unit]', this.unit), this.want),
        this.err('email', /^\S+@\S+\.\S+$/.test(email.value) ? '' : this.dataset.errEmail, email),
      ];
      return ok.every(Boolean);
    }
  });
}
