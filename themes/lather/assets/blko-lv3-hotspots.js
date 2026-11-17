/* Lather v3, 55 Hotspots: pins placed with object-fit: cover maths, pin <-> card sync, slider arrows and dashes. */
(() => {
  function init(sec) {
    if (!sec || sec.dataset.lookReady) return;
    sec.dataset.lookReady = '1';
    const stage = sec.querySelector('.s-look__stage');
    const img = sec.querySelector('.s-look__img');
    const panel = sec.querySelector('.s-look__panel');
    const pins = [...sec.querySelectorAll('.s-look__pin')];
    const cards = [...sec.querySelectorAll('.s-look__card')];
    const track = sec.querySelector('.s-look__track');
    const dashes = [...sec.querySelectorAll('.s-look__dash span')];
    const [prev, next] = sec.querySelectorAll('.s-look__arrows button');
    if (!stage || !img || !track || !cards.length) return;
    const ratio = parseFloat(stage.dataset.ratio) || 1.5;
    let active = -1;

    // place pins on the photo with the same maths as object-fit: cover
    function place() {
      const W = stage.clientWidth, H = stage.clientHeight; if (!W || !H) return;
      const pos = (getComputedStyle(img).objectPosition || '').split(' ').map(v => parseFloat(v) / 100);
      const s = Math.max(W / ratio, H); // rendered image height
      const iw = s * ratio, ih = s;
      const ox = (W - iw) * (isNaN(pos[0]) ? .5 : pos[0]);
      const oy = (H - ih) * (isNaN(pos[1]) ? .5 : pos[1]);
      pins.forEach(p => {
        const x = ox + parseFloat(p.dataset.fx) * iw, y = oy + parseFloat(p.dataset.fy) * ih;
        p.style.setProperty('--px', (x / W * 100).toFixed(2) + '%');
        p.style.setProperty('--py', (y / H * 100).toFixed(2) + '%');
      });
    }
    place();
    if ('ResizeObserver' in window) new ResizeObserver(place).observe(stage);

    function cardLeft(i) { return cards[i].offsetLeft - track.firstElementChild.offsetLeft; }
    function setActive(i, scroll) {
      if (i === active && !scroll) return;
      active = i;
      pins.forEach((p, k) => p.classList.toggle('is-on', k === i));
      cards.forEach((c, k) => c.classList.toggle('is-on', k === i));
      dashes.forEach((d, k) => d.classList.toggle('is-on', k === Math.max(0, i)));
      if (scroll && i >= 0 && cards[i]) track.scrollTo({ left: cardLeft(i), behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto' });
    }
    function clear() { active = -1; pins.forEach(p => p.classList.remove('is-on')); cards.forEach(c => c.classList.remove('is-on')); }

    pins.forEach((p, i) => {
      p.addEventListener('mouseenter', () => setActive(i, true));
      p.addEventListener('focus', () => setActive(i, true));
      p.addEventListener('click', () => {
        setActive(i, true);
        // on small screens the slider sits under the photo: bring it into view
        if (matchMedia('(max-width:760px)').matches) {
          const r = track.getBoundingClientRect();
          if (r.bottom > innerHeight || r.top < 0) track.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    });
    stage.addEventListener('mouseleave', e => { if (!panel.contains(e.relatedTarget)) clear(); });
    cards.forEach((c, i) => {
      c.addEventListener('mouseenter', () => setActive(i, false));
      c.addEventListener('focusin', () => setActive(i, false));
    });
    panel.addEventListener('mouseleave', clear);

    // slider position drives the dashes and the arrows
    function current() {
      let best = 0, d = Infinity;
      cards.forEach((c, i) => { const dd = Math.abs(cardLeft(i) - track.scrollLeft); if (dd < d) { d = dd; best = i; } });
      return best;
    }
    function sync() {
      const i = current();
      dashes.forEach((d, k) => d.classList.toggle('is-on', k === i));
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4;
    }
    let st = 0;
    track.addEventListener('scroll', () => { cancelAnimationFrame(st); st = requestAnimationFrame(sync); }, { passive: true });
    [prev, next].forEach(b => b && b.addEventListener('click', () => {
      const i = Math.min(cards.length - 1, Math.max(0, current() + +b.dataset.dir));
      setActive(i, true);
    }));
    sync();

    // the photo eases in when the section arrives
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { sec.classList.add('is-in'); io.disconnect(); }
      }), { threshold: .2 });
      io.observe(stage);
    } else sec.classList.add('is-in');

    // theme editor: selecting a pin block shows its card
    sec._lookSelect = el => { const i = pins.indexOf(el); if (i >= 0) setActive(i, true); };
  }

  const boot = () => document.querySelectorAll('.s-look').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', e => init(e.target.querySelector('.s-look')));
  document.addEventListener('shopify:block:select', e => { const sec = e.target.closest('.s-look'); if (sec && sec._lookSelect) sec._lookSelect(e.target); });
})();
