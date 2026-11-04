/* Progressive commerce controls. Shopify remains authoritative for prices and facets. */
(() => {
  function mount(scope = document) {
    scope.querySelectorAll('[data-linen-filter-shell]').forEach(shell => {
      if (shell.linenBound || !window.HTMLDialogElement) return;
      shell.linenBound = true;
      const summary = shell.querySelector('summary'), form = shell.querySelector('form');
      const dialog = document.createElement('dialog');
      dialog.className = 'blko-linen-dialog blko-linen-filter';
      dialog.setAttribute('aria-label', summary.textContent.trim());
      const close = document.createElement('button');
      close.type = 'button'; close.className = 'blko-linen-filter__close';
      close.textContent = shell.dataset.close;
      dialog.append(close, form); shell.after(dialog);
      let overflow = '';
      const shut = () => dialog.close();
      close.addEventListener('click', shut);
      summary.addEventListener('click', event => {
        event.preventDefault();
        if (dialog.open) return;
        overflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        dialog.showModal(); close.focus();
      });
      const floating = document.createElement('button');
      floating.type = 'button'; floating.className = 'blko-linen-filter-float';
      floating.textContent = summary.textContent.trim(); floating.hidden = true;
      floating.addEventListener('click', () => summary.click()); document.body.append(floating);
      const controller = new AbortController(), region = shell.closest('blko-collection-grid-34');
      const place = () => { floating.hidden = summary.getBoundingClientRect().bottom >= 0 || region.getBoundingClientRect().bottom < 100; };
      document.addEventListener('scroll', place, {passive: true, signal: controller.signal});
      document.addEventListener('shopify:section:unload', event => {
        if (event.target.contains(shell)) { if (dialog.open) dialog.close(); controller.abort(); floating.remove(); }
      }, {signal: controller.signal});
      dialog.addEventListener('close', () => {
        document.documentElement.style.overflow = overflow;
        summary.focus();
      });
      dialog.addEventListener('click', event => {
        const box = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) shut();
      });
    });
    scope.querySelectorAll('[data-linen-density]').forEach(button => {
      if (button.linenBound) return;
      button.linenBound = true;
      button.addEventListener('click', () => {
        const root = button.closest('blko-collection-grid-34');
        root.dataset.density = button.dataset.linenDensity;
        root.querySelectorAll('[data-linen-density]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      });
    });
    scope.querySelectorAll('[data-card-quick]').forEach(button => {
      if (button.linenBound) return;
      button.linenBound = true;
      button.addEventListener('click', () => {
        const cell = button.closest('[data-cell]'), add = cell.querySelector('[data-add]');
        if (add && !add.disabled) add.click();
        else {
          const size = cell.querySelector('[data-size]:not(:disabled)');
          if (size) { size.focus(); size.scrollIntoView({block: 'center', behavior: 'instant'}); }
        }
      });
    });
    scope.querySelectorAll('[data-linen-product]').forEach(root => {
      if (root.refinementsBound) return;
      root.refinementsBound = true;
      const form = root.querySelector('form'), quantity = form.querySelector('[data-product-quantity]');
      root.querySelectorAll('[data-quantity-step]').forEach(button => button.addEventListener('click', () => {
        if (button.dataset.quantityStep === 'up') quantity.stepUp(); else quantity.stepDown();
        quantity.dispatchEvent(new Event('input', {bubbles: true}));
      }));
      const sticky = root.querySelector('[data-product-sticky]'), add = form.querySelector('[data-product-add]');
      if (sticky && 'IntersectionObserver' in window) {
        // Section container queries create a containing block for fixed children.
        // Keep the floating bar in the viewport, outside that containment.
        document.body.append(sticky);
        const observer = new IntersectionObserver(entries => {
          const box = entries[0].boundingClientRect;
          sticky.hidden = entries[0].isIntersecting || box.top > 0;
        }, {threshold: 0});
        observer.observe(add);
        sticky.querySelector('button').addEventListener('click', () => {
          if (!add.disabled) form.requestSubmit(add);
        });
        const sync = () => {
          sticky.querySelector('button').disabled = add.disabled;
          sticky.querySelector('[data-sticky-price]').textContent = root.querySelector('[data-product-price]').textContent;
          sticky.querySelector('[data-sticky-variant]').textContent = [...form.querySelectorAll('[data-product-option]:checked')].map(input => input.value).join(' / ') || form.querySelector('[data-product-variant]')?.selectedOptions[0]?.textContent || '';
        };
        const stateObserver = new MutationObserver(sync), priceObserver = new MutationObserver(sync);
        stateObserver.observe(add, {attributes: true, attributeFilter: ['disabled']});
        priceObserver.observe(root.querySelector('[data-product-price]'), {subtree: true, childList: true, characterData: true});
        const controller = new AbortController();
        document.addEventListener('shopify:section:unload', event => {
          if (event.target.contains(root)) { observer.disconnect(); stateObserver.disconnect(); priceObserver.disconnect(); sticky.remove(); controller.abort(); }
        }, {signal: controller.signal});
        form.addEventListener('change', sync); sync();
      }
    });
  }
  mount(); document.addEventListener('shopify:section:load', event => mount(event.target));
  function menus(scope = document) {
    scope.querySelectorAll('blko-header-38').forEach(header => {
      if (header.drawerBound || !window.HTMLDialogElement) return;
      header.drawerBound = true;
      const trigger = header.querySelector('[data-toggle]'), sheet = header.querySelector('.bheader38__sheet');
      if (!trigger || !sheet) return;
      const dialog = document.createElement('dialog'), close = document.createElement('button');
      dialog.className = 'blko-linen-dialog blko-linen-menu bheader38 bheader38--theme';
      dialog.setAttribute('aria-label', sheet.getAttribute('aria-label'));
      close.type = 'button'; close.className = 'blko-linen-filter__close'; close.textContent = trigger.dataset.close;
      dialog.append(close); header.append(dialog); dialog.append(sheet);
      let overflow = '';
      trigger.addEventListener('click', () => {
        if (trigger.getAttribute('aria-expanded') === 'true' && !dialog.open) {
          overflow = document.documentElement.style.overflow;
          document.documentElement.style.overflow = 'hidden';
          dialog.showModal(); close.focus();
        }
      });
      close.addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', () => {
        sheet.hidden = true; trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-label', trigger.dataset.open);
        document.documentElement.style.overflow = overflow; trigger.focus();
      });
      dialog.addEventListener('click', event => {
        const box = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
      });
      const controller = new AbortController();
      const wide = matchMedia('(min-width:1024px)');
      wide.addEventListener('change', () => { if (wide.matches && dialog.open) dialog.close(); }, {signal: controller.signal});
      document.addEventListener('shopify:section:unload', event => {
        if (event.target.contains(header)) { if (dialog.open) dialog.close(); controller.abort(); }
      }, {signal: controller.signal});
      header.addEventListener('keydown', event => {
        if (event.key === 'Escape' && dialog.open && !event.defaultPrevented) dialog.close();
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => menus());
  document.addEventListener('shopify:section:load', event => menus(event.target));
})();
