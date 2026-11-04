if (!customElements.get('blko-featured-products-49')) {
  customElements.define('blko-featured-products-49', class extends HTMLElement {
    connectedCallback() {
      if (this._on) return;
      this._on = true;
      this.addEventListener('click', (e) => {
        const dot = e.target.closest('[data-sw]');
        if (!dot) return;
        const box = dot.closest('[role="group"]');
        box.querySelectorAll('[data-sw]').forEach((d) => d.setAttribute('aria-pressed', d === dot));
        const card = dot.closest('li');
        const name = card.querySelector('[data-cname]');
        if (name) name.textContent = dot.dataset.name;
        if (dot.dataset.url) {
          card.querySelector('.bfeaturedproducts49__link').href = dot.dataset.url;
          card.querySelector('.bx-price__now').textContent = dot.dataset.price;
          const was=card.querySelector('.bx-price__was');
          was.hidden=dot.dataset.sale!=='true';
          was.lastChild.textContent=dot.dataset.compare;
          card.querySelector('[data-sale-badge]').hidden=dot.dataset.sale!=='true';
          if(dot.dataset.image){const image=card.querySelector('img');if(image){image.src=dot.dataset.image;image.srcset=dot.dataset.srcset||'';}}
        }
      });
    }
  });
}
