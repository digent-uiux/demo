if (!customElements.get('blko-collection-grid-34')) {
  customElements.define('blko-collection-grid-34', class extends HTMLElement {
    connectedCallback() {
      if(this._linenBound)return;this._linenBound=true;const d = this.dataset;this.live=d.live==='true';
      this.mine = null; this.cloth = ''; this.sort = 'shelf'; this.bag = 0;
      this.shown = Number(d.first) || 6;
      this.cells = [...this.querySelectorAll('[data-cell]')];
      this.cells.forEach((c) => { c.stock = Object.fromEntries(c.dataset.stock.split('|').filter(Boolean).map((p) => { const [k, v] = p.split(':'); return [k, Number(v)]; })); });
      this.addEventListener('click', (e) => {
        const t = e.target.closest('button');
        if (!t || !this.contains(t)) return;
        if(t.hasAttribute('data-demo-clear')){this.mine=null;this.cloth='';this.sort='shelf';this.querySelector('[data-sort]').value='shelf';this.render();}
        else if (t.dataset.mine !== undefined) { this.mine = this.mine === t.dataset.mine ? null : t.dataset.mine; this.shown = Number(d.first) || 6; this.render(); }
        else if (t.dataset.clothBtn !== undefined) { this.cloth = t.dataset.clothBtn; this.shown = Number(d.first) || 6; this.render(); }
        else if (t.hasAttribute('data-more-btn')) { this.shown += Number(d.step) || 3; this.render(); }
        else if (t.dataset.size) { const c = t.closest('[data-cell]'); c.pick = t.dataset.size; this.tag(c); }
        else if (t.hasAttribute('data-add')) this.add(t.closest('[data-cell]'), t);
      });
      this.querySelector('[data-sort]')?.addEventListener('change', (e) => { this.sort = e.target.value; this.render(); });
    }
    inSize(c) { return !this.mine || (c.stock[this.mine] || 0) > 0 || (c.dataset.plain && !Object.keys(c.stock).length); }
    chosen(c) { return c.pick || (this.mine && (c.stock[this.mine] || 0) > 0 ? this.mine : null); }
    tag(c) {
      const d = this.dataset, z = this.chosen(c), left = c.querySelector('[data-left]'), add = c.querySelector('[data-add]');
      const sizes = Object.keys(c.stock);
      if (!sizes.length) return;
      c.querySelectorAll('[data-size]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === z)));
      if (z) {
        const n = c.stock[z];
        if(this.live){const price=c.querySelector(`[data-size="${CSS.escape(z)}"]`)?.dataset.price;if(price)c.querySelector('.bx-price__now').textContent=price;const compare=c.querySelector('[data-card-compare]');if(compare){compare.textContent=c.querySelector(`[data-size="${CSS.escape(z)}"]`)?.dataset.compare||'';compare.hidden=!compare.textContent;}left.textContent=d.available;add.disabled=n<=0;add.textContent=d.addLabel.replace('[s]',z);return;}
        left.innerHTML = '';
        if (n <= 2) { const s = document.createElement('span'); s.className = 'is-few'; s.textContent = d.few.replace('[n]', n).replace('[s]', z); left.append(s); }
        else left.textContent = d.on.replace('[s]', z);
      } else left.textContent = d.sizesLeft.replace('[k]', sizes.filter((s) => c.stock[s] > 0).length).replace('[n]', sizes.length);
      add.disabled = !z;
      add.textContent = z ? d.addLabel.replace('[s]', z) : d.pick;
    }
    async add(c, btn) {
      const z = this.chosen(c), id = z ? c.querySelector(`[data-size="${CSS.escape(z)}"]`)?.dataset.variant : c.dataset.plain;
      const status=this.querySelector('[data-status]');
      if(!id && this.live){status.textContent=this.dataset.error;return;}
      if(!this.live){this.bag+=1;this.status(this.list().length);return;}
      btn.disabled=true;
      try{
        if(window.LinenCart)await window.LinenCart.add({items:[{id:Number(id),quantity:1}]});
        else{const r=await fetch((window.Shopify?.routes?.root||'/')+'cart/add.js',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({items:[{id:Number(id),quantity:1}]})});if(!r.ok)throw Error();document.dispatchEvent(new CustomEvent('cart:refresh'));}
        this.bag+=1;this.status(this.cells.length);
      }catch{status.textContent=this.dataset.error;}finally{btn.disabled=false;}
    }
    list() {
      const s = this.sort, list = this.cells.filter((c) => (!this.cloth || c.dataset.cloth === this.cloth) && this.inSize(c));
      return list.sort((a, b) => (s === 'low' ? a.dataset.price - b.dataset.price : s === 'high' ? b.dataset.price - a.dataset.price : a.dataset.order - b.dataset.order));
    }
    status(n) {
      const d = this.dataset;
      this.querySelector('[data-status]').textContent = `${this.live ? Number(d.catalogCount) : n} ${d.count}${this.mine ? ` ${d.in} ${this.mine}` : ''}${this.bag ? ` · ${this.bag} ${d.bag}` : ''}`;
    }
    render() {
      const d = this.dataset, list = this.list(), grid = this.querySelector('[data-grid]');
      this.querySelectorAll('[data-mine]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mine === this.mine)));
      this.querySelectorAll('[data-cloth-btn]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.clothBtn === this.cloth));
        b.querySelector('[data-n]').textContent = this.cells.filter((c) => (!b.dataset.clothBtn || c.dataset.cloth === b.dataset.clothBtn) && this.inSize(c)).length;
      });
      this.cells.forEach((c) => { c.hidden = true; });
      list.forEach((c, i) => { grid.append(c); c.hidden = i >= this.shown; c.querySelector('.bcollectiongrid34__tag').className = `bcollectiongrid34__tag bcollectiongrid34__tag--${i % 2 ? 'r' : 'l'}`; this.tag(c); });
      const bare = this.querySelector('[data-bare]');
      bare.hidden = list.length > 0;
      grid.hidden = !list.length;
      if (!list.length) bare.textContent = `${(this.cloth ? d.bareOne.replace('[cloth]', this.cloth.toLowerCase()) : d.bareAll).replace('[s]', this.mine || '')} ${d.restock}`;
      const more = this.querySelector('[data-more]');
      more.hidden = this.shown >= list.length;
      this.querySelector('[data-out]').textContent = d.outText.replace('[n]', Math.min(this.shown, list.length)).replace('[total]', list.length);
      this.status(list.length);
    }
  });
}
