/* Lather v3, 60 Compare: a skin chip brings the matching card forward; the others step back. */
(() => {
  function init(sec) {
    if (!sec || sec.dataset.cmpReady) return;
    sec.dataset.cmpReady = '1';
    const row = sec.querySelector('.s-cmp__row');
    const chips = [...sec.querySelectorAll('.s-cmp__chips .chip')];
    const cards = [...sec.querySelectorAll('.s-cmp__card')];
    if (!row) return;
    function pick(chip, force) {
      const on = force === undefined ? chip.getAttribute('aria-pressed') !== 'true' : force;
      chips.forEach(c => c.setAttribute('aria-pressed', String(on && c === chip)));
      cards.forEach(card => {
        const best = on && card.dataset.c === chip.dataset.pick;
        card.classList.toggle('is-pick', best);
        if (best && row.scrollWidth > row.clientWidth) row.scrollTo({ left: card.offsetLeft - row.offsetLeft, behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto' });
      });
      if (on) row.dataset.pick = chip.dataset.pick; else delete row.dataset.pick;
    }
    chips.forEach(c => c.addEventListener('click', () => pick(c)));
    sec._cmpPick = id => { const c = chips.find(x => x.dataset.pick === id); if (c) pick(c, true); };
  }
  const boot = () => document.querySelectorAll('.s-cmp').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', e => init(e.target.querySelector('.s-cmp')));
  // theme editor: selecting a card block picks it
  document.addEventListener('shopify:block:select', e => {
    const sec = e.target.closest('.s-cmp'); if (sec && sec._cmpPick && e.target.dataset.c) sec._cmpPick(e.target.dataset.c);
  });
})();
