/* Prices, plans and quantity rules are server-rendered catalog values. */
(() => {
  function mount(scope = document) {
    scope.querySelectorAll('[data-linen-product]').forEach(root => {
      if (root.linenBound) return;
      let catalog;
      try { catalog = JSON.parse(root.querySelector('[data-product-catalog]').textContent); } catch { return; }
      root.linenBound = true;
      const form = root.querySelector('form'), master = form.querySelector('[data-product-variant]'), options = [...form.querySelectorAll('[data-product-option]')], plan = form.querySelector('[data-product-plan]'), quantity = form.querySelector('[data-product-quantity]'), add = form.querySelector('[data-product-add]'), payment = form.querySelector('[data-product-payment]'), price = root.querySelector('[data-product-price]'), compare = root.querySelector('[data-product-compare]');
      const media = root.closest('blko-product-detail-27').querySelector('.bproductdetail27__frame'), originalMedia = media?.innerHTML;
      form.dataset.productForm = ''; form.dataset.linenAjaxForm = ''; form.dataset.added = root.dataset.added;
      let selected = catalog.variants.find(v => String(v.id) === master.value);
      function render(updateURL = true) {
        if (plan) {
          [...plan.options].forEach(o => { o.disabled = Boolean(o.value && !selected?.plans.some(a => String(a.id) === o.value)); });
          if (plan.selectedOptions[0]?.disabled) plan.value = catalog.requiresPlan ? String(selected?.plans[0]?.id || '') : '';
        }
        const allocation = plan?.value ? selected?.plans.find(a => String(a.id) === plan.value) : null;
        const validPlan = (!plan?.value || Boolean(allocation)) && (!catalog.requiresPlan || Boolean(allocation)), available = Boolean(selected?.available && validPlan);
        root.querySelector('[data-product-stock]').textContent = !selected || !validPlan ? root.dataset.unavailable : available ? root.dataset.inStock : root.dataset.soldOut;
        form.querySelectorAll('[data-product-option-label]').forEach(label => { label.textContent = form.querySelector(`[data-product-option="${label.dataset.productOptionLabel}"]:checked`)?.value || ''; });
        master.disabled = !selected || !validPlan;
        master.value = selected ? String(selected.id) : '';
        form.dataset.available = String(available);
        add.disabled = !available || form.dataset.pending === 'true';
        root.querySelector('[data-product-add-label]').textContent = !selected || !validPlan ? root.dataset.unavailable : available ? root.dataset.add : root.dataset.soldOut;
        price.textContent = allocation?.price || selected?.price || root.dataset.unavailable;
        compare.textContent = allocation?.compare || (!allocation && selected?.compare) || '';
        compare.hidden = !compare.textContent;
        payment.hidden = !available;
        payment.inert = !available;
        if (selected) {
          quantity.min = selected.min; quantity.step = selected.step;
          if (selected.max) quantity.max = selected.max; else quantity.removeAttribute('max');
          const n = Number(quantity.value), min = Number(selected.min), step = Number(selected.step);
          if (!Number.isInteger(n) || n < min || (n - min) % step || selected.max && n > selected.max) quantity.value = min;
          if (media) {
            const image = selected.image || catalog.image;
            if (image) {
              let img = media.querySelector('img');
              if (!img) { img = document.createElement('img'); img.className = 'bproductdetail27__img'; media.replaceChildren(img); }
              img.src = image.src; img.srcset = image.srcset; img.alt = image.alt;
              img.sizes = '(min-width: 1024px) 45vw, 100vw';
            } else if (media.innerHTML !== originalMedia) media.innerHTML = originalMedia;
          }
        }
        if (updateURL) {
          const url = new URL(location.href);
          if (selected) url.searchParams.set('variant', selected.id); else url.searchParams.delete('variant');
          if (allocation) url.searchParams.set('selling_plan', allocation.id); else url.searchParams.delete('selling_plan');
          history.replaceState({}, '', url);
        }
      }
      if (options.length) {
        root.querySelector('[data-native-variants]').hidden = true;
        root.querySelector('[data-product-options]').hidden = false;
        options.forEach(input => input.addEventListener('change', () => {
          const chosen = [...form.querySelectorAll('[data-product-option]:checked')].sort((a,b) => Number(a.dataset.productOption)-Number(b.dataset.productOption)).map(o => o.value);
          selected = catalog.variants.find(v => v.options.length === chosen.length && v.options.every((o,i) => o === chosen[i]));
          render();
        }));
      }
      master.addEventListener('change', () => { selected = catalog.variants.find(v => String(v.id) === master.value); render(); });
      plan?.addEventListener('change', () => render());
      form.addEventListener('submit', event => { if (add.disabled || !selected || !form.checkValidity()) event.preventDefault(); });
      render(false);
    });
  }
  mount(); document.addEventListener('shopify:section:load', event => mount(event.target));
})();
