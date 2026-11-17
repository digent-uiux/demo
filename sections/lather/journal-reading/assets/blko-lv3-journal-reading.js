/* Lather v3, journal list: in-place category filter (demo chips), live count, #category / #card-anchor links. */
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lv3-journal]').forEach(root => {
      const buttons = [...root.querySelectorAll('[data-journal-filter]')];
      const cards = [...root.querySelectorAll('[data-category]')];
      const count = root.querySelector('[data-count]');
      const one = root.dataset.one || '[count] short read';
      const many = root.dataset.many || '[count] short reads';
      const setCount = n => { if (count) count.textContent = (n === 1 ? one : many).replace('[count]', n); };
      const cats = card => (card.dataset.category || '').split(' ').filter(Boolean);
      function filter(category) {
        let visible = 0;
        cards.forEach(card => {
          const show = category === 'all' || cats(card).includes(category);
          card.hidden = !show;
          const d = card.querySelector('details');
          if (!show && d) d.open = false;
          if (show) visible++;
        });
        buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.journalFilter === category)));
        setCount(visible);
      }
      setCount(cards.length);
      if (!buttons.length) return;
      buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.journalFilter)));
      function fromHash() {
        const h = decodeURIComponent(location.hash.slice(1));
        if (!h) return;
        if (buttons.some(button => button.dataset.journalFilter === h)) return filter(h);
        const card = cards.find(c => c.id === h);
        const c = card && cats(card)[0];
        if (c && buttons.some(button => button.dataset.journalFilter === c)) filter(c);
      }
      fromHash();
      addEventListener('hashchange', fromHash);
    });
  });
})();
