if (!customElements.get('blko-cart-page-13')) {
  customElements.define('blko-cart-page-13', class extends HTMLElement {
    connectedCallback() {
      if(this._linenBound)return;this._linenBound=true;this.live = this.hasAttribute('data-live');
      const fmt = this.dataset.fmt || '$7';
      this.money = (n) => fmt.replace('7', n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }));
      this.addEventListener('blko-ui:change', (e) => {
        const line = e.target.closest('[data-line]');
        if (!line) return;
        if (e.target.matches('[data-blko-ui-option]')) this.size(line, e.target.value);
        else if (e.target.matches('blko-ui-quantity')) this.qty(line, e.detail.value);
      });
      this.addEventListener('click', (e) => {
        const rm = e.target.closest('[data-remove]');
        if (rm){e.preventDefault();this.qty(rm.closest('[data-line]'), 0);}
      });
      this.addEventListener('change', (e) => {
        if(this.live){
          const input=e.target,line=input.closest('[data-line]');
          if(line&&input.matches('input[name="updates[]"]')){if(!input.checkValidity()||!Number.isInteger(Number(input.value))){input.reportValidity();return;}this.qty(line,Number(input.value));}
          else if(input.matches('[data-wrap]'))this.save('update',{attributes:{Wrap:input.value}}).catch(()=>this.querySelectorAll('[data-wrap]').forEach(r=>r.checked=r.defaultChecked));
          else if(input.name==='note')this.save('update',{note:input.value}).catch(()=>{});
          else if(input.name==='attributes[Gift note]')this.save('update',{attributes:{'Gift note':input.value}}).catch(()=>{});
        }else if (e.target.matches('[data-wrap]')) this.wrap(e.target);
      });
      const note = this.querySelector('textarea');
      if (note) {
        note.maxLength = 80;
        note.addEventListener('input', () => { const n = this.querySelector('[data-len]'); if (n) n.textContent = note.value.length; });
      }
    }
    async save(action,body){
      if(this.dataset.stale)return;
      try{
        if(window.LinenCart){if(action==='change')return await window.LinenCart.change(body.id,body.quantity);return await window.LinenCart.update(body);}
        const r=await fetch((window.Shopify?.routes?.root||'/')+'cart/'+action+'.js',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(body)});if(!r.ok)throw Error();location.reload();
      }catch(error){const status=this.querySelector('[data-linen-cart-status]');if(status){status.hidden=false;status.textContent=this.dataset.cartError;}throw error;}
    }
    async post(url,body){return this.save(url.split('/').pop().split('.')[0],body);}
    async size(line, z) {
      const opt = line.querySelector(`[data-opt="${CSS.escape(z)}"]`);
      if (!opt) return;
      line.querySelector('[data-size]').textContent = z;
      line.querySelector('[data-fit]').textContent = opt.dataset.fit;
      if(this.live)return;
    }
    async qty(line, q) {
      if(this.dataset.stale||this.getAttribute('aria-busy')==='true')return;
      if (this.live) {
        try{await this.save('change',{id:line.dataset.key,quantity:q});}catch{const input=line.querySelector('input[name="updates[]"]');if(input)input.value=input.defaultValue;}
        return;
      }
      line.dataset.qty = q;
      if (q === 0) line.hidden = true;
      else line.querySelector('[data-total] .blko-ui-price__amount').textContent = this.money(Number(line.dataset.price) * q);
      this.totals();
    }
    wrap(input) {
      const cloth = input.closest('fieldset');
      const none = input.hasAttribute('data-none');
      cloth.style.setProperty('--tone', `var(--c-${input.dataset.tone})`);
      cloth.toggleAttribute('data-none', none);
      this.querySelector('[data-wrap-note]').textContent = input.dataset.note ? input.dataset.note + '.' : '';
      this.querySelector('[data-note-field]').hidden = none;
      this.totals();
    }
    totals() {
      if (this.live) {
        const w = this.querySelector('[data-wrap]:checked');
        const cost = this.querySelector('[data-wrap-cost]');
        if (w) {
          cost.textContent = w.hasAttribute('data-none') ? cost.dataset.none : cost.dataset.free;
          this.post('cart/update.js', { attributes: { Wrap: w.value } });
        }
        return;
      }
      const lines = [...this.querySelectorAll('[data-line]:not([hidden])')];
      const sub = lines.reduce((s, l) => s + Number(l.dataset.price) * Number(l.dataset.qty), 0);
      const count = lines.reduce((s, l) => s + Number(l.dataset.qty), 0);
      const free = Number(this.dataset.free), ship = sub >= free || sub === 0 ? 0 : Number(this.dataset.ship);
      const w = this.querySelector('[data-wrap]:checked');
      const wp = lines.length && w ? Number(w.dataset.price) : 0;
      const $ = (s) => this.querySelector(s);
      const freeWord = $('[data-wrap-cost]').dataset.free, noneWord = $('[data-wrap-cost]').dataset.none;
      $('[data-count]').textContent = count;
      $('[data-one]').hidden = count !== 1;
      $('[data-many]').hidden = count === 1;
      $('[data-subtotal]').textContent = this.money(sub);
      $('[data-wrap-cost]').textContent = wp ? this.money(wp) : noneWord;
      $('[data-ship-cost]').textContent = ship ? this.money(ship) : freeWord;
      const sl = $('[data-ship-line]');
      sl.textContent = sub >= free ? sl.dataset.done : sl.dataset.more.replace('[amount]', this.money(free - sub));
      $('[data-total]:not([data-line] *)').textContent = this.money(sub + wp + ship);
      $('[data-checkout]').disabled = !lines.length;
      $('[data-empty]').hidden = lines.length > 0;
    }
  });
}
