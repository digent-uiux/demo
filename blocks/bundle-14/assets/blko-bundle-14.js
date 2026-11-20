/* Travel pouch: pick four minis that fit 100 ml. Prices come from the real variant (or the demo price), in the shop's
   money format. A full kit shows `discount_pct` off (display only: the discount itself is an automatic discount in
   Shopify admin; 0 hides the sale price and the savings line). "Add the kit" posts all four variants in ONE
   /cart/add.js call. Sold-out minis cannot be picked; a variant menu changes the variant and price of its mini. */
(() => {
  const thou = (s, t, d) => { const p = s.split('.'); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, t); return p.join(d); };
  const fmt = (fmtStr, cents) => {
    const n = Math.round(cents) / 100, sh = n % 1 === 0 ? n.toFixed(0) : n.toFixed(2);
    return String(fmtStr || '${{amount}}').replace(/\{\{\s*(\w+)\s*\}\}/, (a, k) => {
      switch (k) {
        case 'amount_no_decimals': return thou(n.toFixed(0), ',', '.');
        case 'amount_with_comma_separator': return thou(sh, '.', ',');
        case 'amount_no_decimals_with_comma_separator': return thou(n.toFixed(0), '.', ',');
        case 'amount_with_apostrophe_separator': return thou(sh, "'", '.');
        case 'amount_with_space_separator': return thou(sh, ' ', ',');
        default: return thou(sh, ',', '.');
      }
    });
  };
  const init = (scope = document) => {
    scope.querySelectorAll('[data-bbundle14]').forEach(root => {
      if (root.dataset.ready) return;
      root.dataset.ready = 'true';
      let s = {};
      try { s = JSON.parse(root.dataset.config); } catch (e) { return; }
      const pct = Number(s.discount_pct) || 0;
      const money = cents => fmt(root.dataset.money, cents);
      const minis = [...root.querySelectorAll('[data-mini]')];
      const byId = id => minis.find(m => m.dataset.mini === id);
      const slots = root.querySelector('.bbundle14__slots');
      const add = root.querySelector('[data-add]');
      const error = root.querySelector('.bbundle14__error');
      const cache = new Map();
      let kit = minis.filter(m => m.dataset.initial === 'true' && !m.dataset.sold).map(m => m.dataset.mini);
      let added = false;
      const render = () => {
        const ml = kit.reduce((n, id) => n + Number(byId(id).dataset.ml), 0);
        const full = kit.reduce((n, id) => n + Number(byId(id).dataset.cents), 0);
        const ready = kit.length === 4 && ml <= 100;
        const sale = ready && pct > 0;
        minis.forEach(m => {
          const on = kit.includes(m.dataset.mini), over = ml + Number(m.dataset.ml) - 100;
          const why = on ? '' : m.dataset.sold ? s.sold : kit.length >= 4 ? s.four : over > 0 ? s.over.replace('[amount]', over) : '';
          m.disabled = !!why;
          m.setAttribute('aria-pressed', String(on));
          m.setAttribute('aria-label', m.dataset.name + ', ' + m.dataset.ml + ' ml, ' + money(Number(m.dataset.cents)) + (why ? '. ' + why : ''));
          m.querySelector('[data-check]').hidden = !on;
          m.querySelector('[data-plus]').hidden = on;
          m.querySelector('[data-price]').textContent = why || money(Number(m.dataset.cents));
        });
        const wanted = kit.concat(Array.from({ length: 4 - kit.length }, (_, i) => 'empty-' + (kit.length + i)));
        for (const [id, node] of cache) if (!wanted.includes(id)) { node.remove(); cache.delete(id); }
        wanted.forEach((id, i) => {
          let node = cache.get(id);
          if (!node) {
            if (id.startsWith('empty-')) {
              node = document.createElement('li');
              const e = document.createElement('span');
              e.className = 'bbundle14__empty blko-ui-text--badge';
              e.textContent = i + 1;
              node.append(e);
            } else node = root.querySelector('template[data-slot="' + id + '"]').content.firstElementChild.cloneNode(true);
            cache.set(id, node);
          }
          if (slots.children[i] !== node) slots.insertBefore(node, slots.children[i] || null);
        });
        root.querySelector('[data-volume]').textContent = ml + ' / 100 ml';
        root.querySelector('[role=meter]').setAttribute('aria-valuenow', ml);
        const fill = root.querySelector('[data-fill]');
        fill.style.width = Math.min(100, ml) + '%';
        fill.toggleAttribute('data-high', ml > 85);
        root.querySelector('[data-count]').textContent = (kit.length < 4 ? s.pick.replace('[amount]', 4 - kit.length) : s.complete) + ', ' + kit.length + ' ' + s.of + ' 4';
        const total = root.querySelector('[data-total]');
        total.hidden = !kit.length;
        const amount = total.querySelector('.blko-ui-price__amount');
        amount.classList.toggle('blko-ui-price__sale', sale);
        amount.textContent = money(sale ? Math.round(full * (100 - pct) / 100) : full);
        let compare = total.querySelector('[data-compare]');
        if (sale && !compare) {
          compare = document.createElement('s');
          compare.dataset.compare = '';
          compare.className = 'blko-ui-price__compare';
          total.querySelector('.blko-ui-price').append(compare);
        }
        if (compare) { compare.hidden = !sale; compare.textContent = money(full); }
        let save = total.querySelector('[data-save]');
        if (sale && !save) {
          save = document.createElement('span');
          save.dataset.save = '';
          save.className = 'blko-ui-price__saving';
          total.querySelector('.blko-ui-price').append(save);
        }
        if (save) { save.hidden = !sale; save.textContent = s.save + ' ' + pct + '%'; }
        add.disabled = !ready;
        add.textContent = added ? s.added : ready ? s.add : s.fill;
      };
      const toggle = id => {
        const m = byId(id);
        if (!m || m.dataset.sold) return;
        added = false;
        error.hidden = true;
        kit = kit.includes(id) ? kit.filter(x => x !== id) : kit.length < 4 ? [...kit, id] : kit;
        render();
      };
      minis.forEach(m => m.addEventListener('click', () => toggle(m.dataset.mini)));
      slots.addEventListener('click', e => {
        const button = e.target.closest('[data-remove]');
        if (button) toggle(button.dataset.remove);
      });
      // variant menu: the mini adds the picked variant at its price
      root.addEventListener('change', e => {
        const sel = e.target.closest('[data-var]');
        if (!sel) return;
        const m = byId(sel.dataset.var), o = sel.selectedOptions[0];
        if (!m || !o || o.disabled) return;
        m.dataset.variant = sel.value;
        m.dataset.cents = o.dataset.cents || m.dataset.cents;
        added = false;
        render();
      });
      add.addEventListener('click', async () => {
        const chosen = kit.map(byId), live = chosen.some(m => Number(m.dataset.variant));
        if (live) {
          if (chosen.some(m => !Number(m.dataset.variant))) return;
          add.disabled = true;
          error.hidden = true;
          const props = { _travel_kit: 'four-minis' };
          if (pct) props._kit_discount = pct + '%';
          try {
            const rootUrl = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
            const response = await fetch(rootUrl + 'cart/add.js', {
              method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({ items: chosen.map(m => ({ id: Number(m.dataset.variant), quantity: 1, properties: props })) })
            });
            if (!response.ok) throw Error(String(response.status));
            document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
          } catch (err) {
            error.textContent = s.error;
            error.hidden = false;
            add.disabled = false;
            return;
          }
        }
        added = true;
        render();
      });
      render();
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => init()); else init();
  document.addEventListener('shopify:section:load', event => init(event.target));
})();
