/* Lather v3 collection catalogue (port of pages/collection/20-catalogue.html).
   data-mode on the root:
     demo    filter + sort in the browser, URL kept in sync (?need=a,b&sort=price-low), as in the HTML
     static  real collection without storefront filters: filter group blocks filter the cards by tag; sort reloads (sort_by)
     server  real storefront filters: any change submits the GET form (filters + sort_by) */
(() => {
  const init = root => {
    if (!root || root.dataset.lv3Ready) return;
    root.dataset.lv3Ready = '1';
    const mode = root.dataset.mode || 'demo';
    const form = root.querySelector('[data-filter-form]');
    const list = root.querySelector('[data-list]');
    const sort = root.querySelector('[data-sort]');
    const details = root.querySelector('[data-filters]');
    if (!form || !list || !sort || !details) return;
    const summary = details.querySelector('summary');
    if (matchMedia('(max-width:760px)').matches) details.open = false;

    if (mode === 'server') {
      let t;
      const go = () => { clearTimeout(t); t = setTimeout(() => form.submit(), 60); };
      form.addEventListener('change', go);
      sort.addEventListener('change', go);
      return;
    }

    const cards = [...list.querySelectorAll('[data-product]')];
    const count = root.querySelector('[data-count]');
    const active = root.querySelector('[data-active]');
    const empty = root.querySelector('[data-empty]');
    const editorial = root.querySelector('[data-editorial]');
    const boxes = [...form.querySelectorAll('input[type="checkbox"]')];
    const groups = [...new Set(boxes.map(b => b.name))];
    const total = +root.dataset.total || cards.length;
    const tpl = (s, n) => String(s || '').replace('[count]', n);
    const params = new URLSearchParams(location.search);
    boxes.forEach(input => { input.checked = (params.get(input.name) || '').split(',').includes(input.value); });
    if (mode === 'demo' && [...sort.options].some(o => o.value === params.get('sort'))) sort.value = params.get('sort');

    function render(updateURL = true) {
      const selected = Object.fromEntries(groups.map(g => [g, boxes.filter(b => b.name === g && b.checked).map(b => b.value)]));
      const any = boxes.some(b => b.checked);
      let shown = 0;
      cards.forEach(card => {
        const facets = (card.dataset.facets || '').split(' ');
        const match = groups.every(g => !selected[g].length || selected[g].some(v => facets.includes(g + ':' + v)));
        card.hidden = !match;
        if (match) shown++;
      });
      let ordered = cards;
      if (mode === 'demo') {
        ordered = [...cards].sort((a, b) => sort.value === 'price-low' ? +a.dataset.price - +b.dataset.price : sort.value === 'price-high' ? +b.dataset.price - +a.dataset.price : sort.value === 'name' ? a.dataset.name.localeCompare(b.dataset.name) : +a.dataset.order - +b.dataset.order);
        ordered.forEach(card => list.append(card));
      }
      if (editorial) {
        editorial.hidden = any || (mode === 'demo' && sort.value !== 'featured');
        if (!editorial.hidden) list.insertBefore(editorial, ordered[+editorial.dataset.pos || 0] || null);
      }
      const n = any ? shown : total;
      if (empty) empty.hidden = n !== 0;
      list.hidden = n === 0;
      if (count) count.textContent = tpl(n === 1 ? root.dataset.countOne : root.dataset.countOther, n);
      if (active) {
        active.replaceChildren();
        boxes.filter(b => b.checked).forEach(input => {
          const button = document.createElement('button');
          button.type = 'button';
          const label = input.parentElement.textContent.trim();
          button.textContent = label + ' ×';
          button.setAttribute('aria-label', (root.dataset.remove || 'Remove filter:') + ' ' + label);
          button.addEventListener('click', () => { input.checked = false; render(); summary.focus(); });
          active.append(button);
        });
      }
      if (updateURL) {
        const query = new URLSearchParams(location.search);
        groups.forEach(g => { if (selected[g].length) query.set(g, selected[g].join(',')); else query.delete(g); });
        if (mode === 'demo') { if (sort.value !== 'featured') query.set('sort', sort.value); else query.delete('sort'); }
        const qs = query.toString();
        try { history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash); } catch (_) {}
      }
    }

    form.addEventListener('submit', e => e.preventDefault());
    form.addEventListener('change', () => render());
    form.addEventListener('reset', () => { setTimeout(() => render(), 0); });
    sort.addEventListener('change', () => {
      if (mode === 'demo') { render(); return; }
      const url = new URL(location.href);
      url.searchParams.set('sort_by', sort.value);
      url.searchParams.delete('page');
      location.href = url.pathname + url.search + url.hash;
    });
    const reset = root.querySelector('[data-reset]');
    if (reset) reset.addEventListener('click', () => { boxes.forEach(b => { b.checked = false; }); render(); summary.focus(); });
    render(false);
  };
  const all = scope => (scope || document).querySelectorAll('[data-lv3-catalogue]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all());
  else all();
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
