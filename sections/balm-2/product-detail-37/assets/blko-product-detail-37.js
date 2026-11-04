// product-detail-37: the focus scale switches the photo (stops, arrow keys; the rack focus itself is CSS, only with the
// balm kit on), options pick a variant (price, plan prices, unit price, photo, availability, ?variant=, the id select) or
// a preview size; purchase options switch to the plan price; quantity updates the button total. The form posts to
// /cart/add.js, then dispatches blko:cart:add (+ blko:cart:updated with the count); a failed fetch falls back to a
// normal submit. The stock line follows the variant (available + the stock map; amber at or under data-low-at).
// "Pairs with": loads the complementary recommendation (section id) into the card; "+ Add" posts /cart/add.js, then
// blko:cart:add. Sticky bar: a throttled scroll check on the add row (on once it is above the viewport) and the footer
// (off while in view); it mirrors the button label, disabled state, price and variant, and its button submits the
// main form. It only fades (CSS); inert while hidden; never on with ?static or webdriver.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const g = root.querySelector('[data-root]'); if (!g) return;
    const d = g.dataset, live = d.live === 'true';
    const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
    const root_ = (window.Shopify && Shopify.routes && Shopify.routes.root) || '/';
    const money = (c) => { const v = Math.round(c) / 100; return d.money.replace(/0([.,]00)?/, v % 1 ? v.toFixed(2) : String(v)); };

    // Gallery: the focus scale
    const shots = $$('[data-shot]'), stops = $$('[data-go]'), ns = $$('[data-n]'), needle = $('[data-needle]');
    let active = 0;
    const show = (i, focus) => {
      if (!shots[i]) return;
      if (i !== active) {
        shots[active].removeAttribute('data-on'); shots[active].setAttribute('aria-hidden', 'true');
        shots[i].setAttribute('data-on', ''); shots[i].removeAttribute('aria-hidden');
        active = i;
      }
      stops.forEach((t, k) => { t.setAttribute('aria-pressed', String(k === i)); t.tabIndex = k === i ? 0 : -1; });
      if (needle) needle.style.setProperty('--k', String(i));
      ns.forEach((n) => { n.textContent = String(i + 1).padStart(2, '0'); });
      if (focus && stops[i]) stops[i].focus();
    };
    stops.forEach((t) => t.addEventListener('click', () => show(+t.dataset.go)));
    const scale = $('[data-scale]');
    if (scale) scale.addEventListener('keydown', (e) => {
      const n = shots.length; let k = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') k = (active + 1) % n;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') k = (active - 1 + n) % n;
      if (k === null) return;
      e.preventDefault(); show(k, true);
    });

    // Price / variant / plan state
    const form = $('form'), add = $('[data-add]'), label = add && add.querySelector('[data-l]');
    const idSel = $('[data-id]'), unitEl = $('[data-unit]'), sizeEl = $('[data-size]'), priceEl = $('[data-price]');
    const json = (s) => { try { return JSON.parse(($(s) || {}).textContent || 'null'); } catch (e) { return null; } };
    const variants = json('[data-variants]'), stockMap = json('[data-stock]');
    const bar = $('[data-bar]'), barAdd = $('[data-bar-add]'), barL = $('[data-bar-l]'), barPrice = $('[data-bar-price]'), barVar = $('[data-bar-var]');
    const stockEl = $('[data-stock-line]'), lowAt = stockEl ? +stockEl.dataset.lowAt || 5 : 5;
    const drawStock = (state, n) => {
      if (!stockEl) return;
      stockEl.dataset.state = state;
      const t = stockEl.querySelector('[data-stock-text]');
      if (t) t.textContent = state === 'out' ? stockEl.dataset.out : state === 'low' ? stockEl.dataset.low.replace('#', n) : stockEl.dataset.in;
    };
    const stockOf = (v) => {
      if (!v || !v.available) return ['out'];
      const m = stockMap && stockMap[v.id];
      return m && m[1] && m[0] > 0 && m[0] <= lowAt ? ['low', m[0]] : ['in'];
    };
    let base = 0, price = 0, qty = 1, available = !(add && add.disabled), current = null;
    const groups = $$('[data-group]').sort((a, b) => a.dataset.group - b.dataset.group);
    const pressed = (gr) => { const b = gr.querySelector('[aria-pressed="true"]'); return b ? b.value : null; };
    const planInput = () => root.querySelector('input[name="selling_plan"]:checked');
    // The sticky bar mirrors the main button: label, disabled state, price, variant + plan.
    const syncBar = (state) => {
      if (!bar) return;
      if (barL) barL.textContent = state === 'add' ? add.dataset.addLabel : state;
      if (barAdd) barAdd.disabled = add.disabled;
      if (barPrice) barPrice.textContent = money(price);
      if (barVar) {
        const pi = planInput(), pn = pi && pi.value ? pi.closest('label').querySelector('.bproductdetail37__pn') : null;
        const vt = live && variants ? (current && current.public_title) || '' : sizeEl ? sizeEl.textContent.trim() : '';
        barVar.textContent = [vt, pn ? pn.textContent.trim() : ''].filter(Boolean).join(' · ');
      }
    };
    const setLabel = (state) => {
      if (!label) return;
      if (state === 'add') { label.innerHTML = ''; label.append(add.dataset.addLabel + ' · '); const s = document.createElement('span'); s.dataset.sum = ''; s.textContent = money(price * qty); label.append(s); }
      else label.textContent = state;
      syncBar(state);
    };
    const drawPrice = (p, cmp) => {
      if (!priceEl) return;
      const amt = priceEl.querySelector('.blko-ui-price__amount'), was = priceEl.querySelector('.blko-ui-price__compare');
      if (amt) { amt.textContent = money(p); amt.classList.toggle('blko-ui-price__sale', !!(cmp && cmp > p)); }
      if (was) { was.hidden = !(cmp && cmp > p); const m = was.lastChild; if (m && cmp) m.textContent = money(cmp); }
      else if (cmp && cmp > p && amt) { const s = document.createElement('s'); s.className = 'blko-ui-price__compare'; s.textContent = money(cmp); amt.after(s); }
    };
    // The price of the chosen plan for the current variant (live: allocations; preview: data-off percent).
    const planPrice = (v, inp) => {
      if (!inp || !inp.value) return base;
      if (v && v.selling_plan_allocations) { const a = v.selling_plan_allocations.find((x) => String(x.selling_plan_id) === inp.value); return a ? a.price : base; }
      return Math.round(base * (100 - (+inp.dataset.off || 0)) / 100);
    };
    const drawPlans = (v) => {
      $$('[data-plan-price]').forEach((el) => {
        const id = el.dataset.planPrice;
        let p = base;
        if (id && v && v.selling_plan_allocations) { const a = v.selling_plan_allocations.find((x) => String(x.selling_plan_id) === id); if (a) p = a.price; }
        else if (id) { const inp = root.querySelector(`input[name="selling_plan"][value="${id}"]`); p = Math.round(base * (100 - (+(inp && inp.dataset.off) || 0)) / 100); }
        el.textContent = money(p);
      });
    };
    const refresh = (cmp) => {
      price = planPrice(current, planInput());
      drawPrice(price, price < base ? base : cmp);
      if (available) setLabel('add');
    };
    if (variants) { const v = variants.find((x) => idSel && String(x.id) === idSel.value) || variants[0]; current = v; base = price = v.price; }
    else { const p = groups[0] && pressed(groups[0]); base = price = p ? +p.split('|')[0] : 0; }

    const outMarks = () => {
      if (!variants) return;
      groups.forEach((gr, gi) => {
        gr.querySelectorAll('[data-blko-ui-option]').forEach((b) => {
          const vals = groups.map(pressed); vals[gi] = b.value;
          const ok = variants.some((v) => v.available && v.options.every((o, k) => o === vals[k]));
          b.classList.toggle('bproductdetail37__opt--out', !ok);
        });
      });
    };
    const applyVariant = () => {
      const vals = groups.map(pressed);
      const v = variants.find((x) => x.options.every((o, k) => o === vals[k]));
      current = v || null;
      if (!v) { available = false; add.disabled = true; setLabel(add.dataset.unavail); drawStock('out'); if (unitEl) unitEl.textContent = ''; outMarks(); return; }
      base = v.price; available = v.available; add.disabled = !v.available;
      drawStock(...stockOf(v));
      if (idSel) idSel.value = String(v.id);
      if (sizeEl) sizeEl.textContent = v.option1 && !(variants.length === 1) ? v.option1 : '';
      if (unitEl) {
        if (v.unit_price && v.unit_price_measurement) { const m = v.unit_price_measurement; const u = (m.reference_value !== 1 ? m.reference_value : '') + m.reference_unit; unitEl.textContent = money(v.unit_price) + ' ' + d.per.replace('#', u); }
        else unitEl.textContent = '';
      }
      drawPlans(v); refresh(v.compare_at_price);
      if (!v.available) setLabel(add.dataset.sold);
      if (v.featured_media) { const k = shots.findIndex((s) => s.dataset.mediaId === String(v.featured_media.id)); if (k > -1) show(k); }
      if (d.url && history.replaceState) history.replaceState(history.state, '', d.url + '?variant=' + v.id);
      outMarks();
    };
    root.addEventListener('change', (e) => {
      if (!e.target.matches('input[name="selling_plan"]')) return;
      refresh(current ? current.compare_at_price : 0);
      if (!available) setLabel(add.dataset.sold);
    });
    root.addEventListener('blko-ui:change', (e) => {
      const t = e.target;
      if (t.matches('blko-ui-quantity')) { qty = e.detail.value; const s = add && add.querySelector('[data-sum]'); if (s) s.textContent = money(price * qty); return; }
      if (!t.matches('[data-blko-ui-option]')) return;
      const gr = t.closest('[data-group]'); const sv = gr && gr.querySelector('[data-sel]');
      const vl = t.querySelector('[data-vl]');
      if (sv) sv.textContent = (vl ? vl.textContent : t.textContent).trim();
      if (live && variants) { applyVariant(); return; }
      if (gr && gr.hasAttribute('data-demo')) {
        const [p, ml, ok, st] = t.value.split('|').map(Number); base = p;
        if (sizeEl && vl) sizeEl.textContent = vl.textContent.trim();
        if (unitEl && ml && d.unitWord) unitEl.textContent = money(Math.round(p / ml)) + ' ' + d.per.replace('#', d.unitWord);
        available = ok !== 0; add.disabled = !available;
        drawStock(!available ? 'out' : st > 0 && st <= lowAt ? 'low' : 'in', st);
        drawPlans(null); refresh(0);
        if (!available) setLabel(add.dataset.sold);
      }
    });
    if (live && variants) outMarks();

    // Add to bag
    if (form && add) form.addEventListener('submit', async (e) => {
      const err = $('[data-err]');
      if (!live || !window.fetch) { e.preventDefault(); if (!live) { setLabel(add.dataset.added); setTimeout(() => setLabel('add'), 2200); } return; }
      e.preventDefault();
      if (err) err.hidden = true;
      add.setAttribute('aria-busy', 'true');
      try {
        const r = await fetch(root_ + 'cart/add.js', { method: 'POST', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body: new FormData(form) });
        const j = await r.json();
        if (!r.ok) { if (err) { err.textContent = j.description || j.message || err.dataset.error; err.hidden = false; } add.removeAttribute('aria-busy'); return; }
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'product-detail-37' } }));
        fetch(root_ + 'cart.js').then((x) => x.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: c.item_count, cart: c } }))).catch(() => {});
        setLabel(add.dataset.added);
        setTimeout(() => setLabel(available ? 'add' : add.dataset.sold), 2200);
      } catch (x) { form.submit(); return; }
      add.removeAttribute('aria-busy');
    });

    // Pairs with: the complementary recommendation (rendered by section id) replaces the picker product.
    const pair = $('[data-pair]');
    if (pair && pair.dataset.show !== 'false' && pair.dataset.recs && pair.dataset.auto === 'true' && window.fetch && window.DOMParser) {
      fetch(pair.dataset.recs).then((r) => r.text()).then((html) => {
        const n = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-pair]');
        if (n && n.querySelector('[data-pair-id]:not([data-pair-id=""])')) { pair.innerHTML = n.innerHTML; pair.dataset.on = 'true'; }
      }).catch(() => {});
    }
    root.addEventListener('click', async (e) => {
      const b = e.target.closest('[data-pair-add]');
      if (!b || b.getAttribute('aria-busy')) return;
      const done = () => { b.textContent = b.dataset.added; setTimeout(() => { b.textContent = b.dataset.label; }, 2200); };
      const id = b.dataset.pairAdd;
      if (!id || !window.fetch) { done(); return; }
      b.setAttribute('aria-busy', 'true');
      const err = $('[data-err]');
      try {
        const r = await fetch(root_ + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: +id, quantity: 1 }] }) });
        const j = await r.json();
        if (!r.ok) { if (err) { err.textContent = j.description || j.message || err.dataset.error; err.hidden = false; } }
        else {
          document.dispatchEvent(new CustomEvent('blko:cart:add', { detail: { items: j.items || [j], source: 'product-detail-37' } }));
          fetch(root_ + 'cart.js').then((x) => x.json()).then((c) => document.dispatchEvent(new CustomEvent('blko:cart:updated', { detail: { item_count: c.item_count, cart: c } }))).catch(() => {});
          done();
        }
      } catch (x) { if (err) { err.textContent = err.dataset.error; err.hidden = false; } }
      b.removeAttribute('aria-busy');
    });

    // Sticky bar: on once the add row is above the viewport, off while the footer is in view. Fades only (CSS).
    const row = $('[data-addrow]');
    const still = (() => { try { return new URLSearchParams(location.search).has('static') || navigator.webdriver; } catch (e) { return true; } })();
    if (bar && bar.dataset.show !== 'false' && row && add && !still) {
      let past = false, foot = false;
      const set = () => { const on = past && !foot; bar.toggleAttribute('data-on', on); bar.inert = !on; };
      // A rAF-throttled scroll check, not an IntersectionObserver: a jump past the row (fast wheel, anchor, restored
      // scroll) never crosses the viewport, so an observer would not fire.
      const f = document.querySelector('.shopify-section-group-footer-group, footer');
      let raf = 0;
      const check = () => { raf = 0; past = row.getBoundingClientRect().bottom < 0; foot = !!f && f.getBoundingClientRect().top < innerHeight; set(); };
      addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(check); }, { passive: true });
      addEventListener('resize', () => { if (!raf) raf = requestAnimationFrame(check); }, { passive: true });
      check();
      if (barAdd) barAdd.addEventListener('click', () => {
        if (add.disabled || !form) return;
        if (form.requestSubmit) form.requestSubmit(add); else add.click();
      });
    }
  }
  const all = () => document.querySelectorAll('[data-bproductdetail37]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
