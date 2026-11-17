/* Lather v3 search results (port of pages/search/20-results.html).
   data-mode on the results root:
     demo    filters the rows in the browser as you type, URL ?q= kept in sync, as in the HTML
     browse / server  a real store: the form submits to /search; suggestion buttons run that search */
(() => {
  const init = root => {
    if (!root || root.dataset.lv3Ready) return;
    root.dataset.lv3Ready = '1';
    const mode = root.dataset.mode || 'demo';
    const form = document.querySelector('[data-lv3-search-form]');
    const input = form && form.querySelector('[data-lv3-search-input]');
    if (!form || !input) return;
    if (root.id) input.setAttribute('aria-controls', root.id);
    const terms = [...document.querySelectorAll('[data-search-term]')];

    if (mode !== 'demo') {
      terms.forEach(button => button.addEventListener('click', () => { input.value = button.dataset.searchTerm; form.submit(); }));
      return;
    }

    const cards = [...root.querySelectorAll('[data-search-product]')];
    const list = root.querySelector('[data-list]');
    const heading = root.querySelector('[data-heading]');
    const count = root.querySelector('[data-count]');
    const empty = root.querySelector('[data-empty]');
    const d = root.dataset;
    const normal = value => String(value || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    const index = cards.map(card => ({ card, words: normal(card.dataset.words) }));
    let timer;
    const render = (query, updateURL) => {
      const value = query.trim().slice(0, 100), words = normal(value).split(' ').filter(Boolean);
      let matches = 0;
      index.forEach(({ card, words: w }) => { const show = words.every(t => w.includes(t)); card.hidden = !show; if (show) matches++; });
      if (heading) heading.textContent = value ? String(d.headingResults || '').replace('[terms]', value) : d.headingAll || '';
      if (count) count.textContent = String(matches === 1 ? d.countOne : d.countOther).replace('[count]', matches);
      if (empty) empty.hidden = matches > 0;
      if (list) list.hidden = matches === 0;
      if (updateURL) {
        const url = new URL(location.href);
        if (value) url.searchParams.set('q', value); else url.searchParams.delete('q');
        try { history.replaceState(null, '', url.pathname + url.search + url.hash); } catch (_) {}
      }
    };
    input.value = (new URLSearchParams(location.search).get('q') || '').slice(0, 100);
    render(input.value, false);
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => render(input.value, true), 160); });
    form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); render(input.value, true); });
    terms.forEach(button => button.addEventListener('click', () => { input.value = button.dataset.searchTerm; render(input.value, true); input.focus(); }));
    const clear = root.querySelector('[data-clear]');
    if (clear) clear.addEventListener('click', () => { input.value = ''; render('', true); input.focus(); });
    window.addEventListener('popstate', () => { input.value = (new URLSearchParams(location.search).get('q') || '').slice(0, 100); render(input.value, false); });
    window.addEventListener('pagehide', () => clearTimeout(timer), { once: true });
  };
  const all = scope => (scope || document).querySelectorAll('[data-lv3-search-results]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => all());
  else all();
  document.addEventListener('shopify:section:load', e => all(e.target));
})();
