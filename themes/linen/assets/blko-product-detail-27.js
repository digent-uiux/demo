if (!customElements.get('blko-product-detail-27')) {
  customElements.define('blko-product-detail-27', class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.live === 'true' || this.bound) return;
      this.bound = true;
      const d = this.dataset;
      const fmt = d.fmt || '$7';
      this.cents = d.cents === 'true';
      this.money = (n) => { const v = this.cents ? Math.round(n) / 100 : Math.round(n * 100) / 100; return fmt.replace('7', v.toLocaleString('en-US', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 })); };
      this.base = Number(d.base);
      this.qty = 1;
      this.ways = Object.fromEntries([...this.querySelectorAll('[data-colourways] li')].map((l) => [l.dataset.month, l.dataset]));
      this.plan = this.querySelector('.bproductdetail27__pl[aria-pressed="true"]') || this.querySelector('.bproductdetail27__pl');
      if (this.plan) this.setPlan(this.plan, true);
      this.addEventListener('click', (e) => {
        const p = e.target.closest('.bproductdetail27__pl');
        if (p) this.setPlan(p);
      });
      this.addEventListener('blko-ui:change', (e) => {
        if (e.target.matches('blko-ui-quantity')) this.qty = e.detail.value;
        else if (e.target.matches('[data-blko-ui-option]')) {
          const o = this.querySelector(`[data-opt="${CSS.escape(e.target.value)}"]`);
          this.querySelector('[data-size-now]').textContent = e.target.value;
          if (o?.dataset.vid) { this.querySelector('[data-variant]').value = o.dataset.vid; this.base = Number(o.dataset.price); }
        }
        this.touch();
      });
      this.querySelector('[data-form]')?.addEventListener('submit', (e) => this.add(e));
    }
    off() { return this.plan ? Number(this.plan.dataset.off) : 0; }
    unit() { const u = (this.base * (100 - this.off())) / 100; return this.cents ? Math.round(u) : Math.round(u * 100) / 100; }
    setPlan(p, init) {
      const d = this.dataset;
      this.plan = p;
      this.querySelectorAll('.bproductdetail27__pl').forEach((b) => b.setAttribute('aria-pressed', String(b === p)));
      this.querySelector('[data-sp]').value = p.dataset.plan || '';
      if (init) return;
      const list = this.querySelector('[data-parcels]');
      list.replaceChildren(...p.dataset.months.split(',').map((m, i) => {
        m = m.trim();
        const c = this.ways[m], li = document.createElement('li');
        li.className = 'bproductdetail27__pc';
        li.innerHTML = '<span aria-hidden="true" class="bproductdetail27__sw"></span><span class="bproductdetail27__pt"><span class="bx-small bproductdetail27__pm"></span><span class="bx-label bx-muted"></span></span>';
        li.querySelector('.bproductdetail27__sw').style.background = c?.hex || '';
        li.querySelector('.bproductdetail27__pm').textContent = i === 0 ? d.now : m;
        li.querySelector('.bx-label').textContent = c?.name || d.seasonal;
        return li;
      }));
      this.querySelector('[data-plan-note]').textContent = this.off() > 0 ? d.planNote : d.onceNote;
      this.touch();
    }
    touch() {
      const d = this.dataset, off = this.off(), u = this.unit();
      this.querySelector('[data-unit]').textContent = this.money(u);
      this.querySelector('[data-was]').hidden = off === 0;
      const o = this.querySelector('[data-off]');
      o.hidden = off === 0;
      o.textContent = d.offText.replace('[n]', off);
      this.querySelector('[data-btn]').textContent = `${off > 0 ? d.start : d.add} · ${this.money(u * this.qty)}`;
      this.querySelector('[data-msg-line]').textContent = '';
    }
    async add(e) {
      e.preventDefault();
      const d = this.dataset, form = e.currentTarget, btn = this.querySelector('[data-btn]');
      if (form.querySelector('[name="id"]').value) {
        const fd = new FormData(form);
        if (!fd.get('selling_plan')) fd.delete('selling_plan');
        await fetch((window.Shopify?.routes?.root || '/') + 'cart/add.js', { method: 'POST', headers: { Accept: 'application/json' }, body: fd });
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      }
      btn.replaceChildren(this.querySelector('.bproductdetail27__tick').cloneNode(true), ` ${d.added}`);
      btn.firstChild.style.display = 'inline-block';
      const size = this.querySelector('[data-size-now]')?.textContent || '';
      this.querySelector('[data-msg-line]').textContent = d.msg.replace('[q]', this.qty).replace('[s]', size).replace('[plan]', (this.plan?.dataset.label || '').toLowerCase());
    }
  });
}
