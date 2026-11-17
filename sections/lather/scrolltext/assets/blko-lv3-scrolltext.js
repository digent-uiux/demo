(() => {
  function setup(root) {
    if (!root || root.dataset.stReady) return;
    root.dataset.stReady = '1';
    const html = document.documentElement;
    const rows = [...root.querySelectorAll('.s-scrolltext__row')].map(row => {
      const track = row.querySelector('.s-scrolltext__track');
      const set = track && track.querySelector('.s-scrolltext__set');
      return { row, track, set, dir: +row.dataset.dir || -1, x: 0, w: 0 };
    }).filter(r => r.set);
    // clone sets so each track is at least two viewports wide (seamless loop)
    function fill() {
      rows.forEach(r => {
        [...r.track.querySelectorAll('.s-scrolltext__set')].slice(1).forEach(n => n.remove());
        r.w = r.set.getBoundingClientRect().width;
        if (!r.w) return;
        const need = Math.ceil((innerWidth * 2) / r.w) + 1;
        for (let i = 1; i < need; i++) r.track.appendChild(r.set.cloneNode(true));
        if (r.dir > 0 && r.x === 0) r.x = -r.w * 0.4;
      });
    }
    fill();
    if (!html.classList.contains('motion')) return; // static frame: rows sit still, all words readable

    const BASE = +root.dataset.speed || 42; // px per second
    let boost = 0, lastY = scrollY, lastT = performance.now(), running = false, raf = 0, visible = false, off = false;
    addEventListener('scroll', () => {
      const now = performance.now();
      const dt = Math.max(16, now - lastT);
      const v = Math.abs(scrollY - lastY) / dt * 1000; // px/s of page scroll
      boost = Math.min(9, Math.max(boost, v / 260));
      lastY = scrollY; lastT = now;
    }, { passive: true });
    let prev = performance.now();
    function tick(now) {
      const dt = Math.min(64, now - prev) / 1000;
      prev = now;
      boost *= Math.pow(0.04, dt); // ease the nudge back out within ~1s
      const speed = BASE * (1 + boost);
      rows.forEach(r => {
        if (!r.w) return;
        r.x += r.dir * speed * dt;
        // keep x inside [-w, 0)
        r.x = ((r.x % r.w) - r.w) % r.w;
        r.track.style.transform = 'translate3d(' + r.x.toFixed(2) + 'px,0,0)';
      });
      raf = requestAnimationFrame(tick);
    }
    function start() { if (running || off) return; running = true; prev = performance.now(); raf = requestAnimationFrame(tick); }
    function stop() { running = false; cancelAnimationFrame(raf); }
    new IntersectionObserver(es => es.forEach(en => { visible = en.isIntersecting; visible && !document.hidden ? start() : stop(); }))
      .observe(root);
    document.addEventListener('visibilitychange', () => { document.hidden ? stop() : visible && start(); });
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const onMq = () => { off = mq.matches; if (off) { stop(); rows.forEach(r => { r.track.style.transform = ''; }); } else if (visible) start(); };
    onMq();
    mq.addEventListener ? mq.addEventListener('change', onMq) : mq.addListener(onMq);
    let rt = 0;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(fill, 200); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fill);
  }
  const init = () => document.querySelectorAll('.s-scrolltext').forEach(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', e => setup(e.target.querySelector('.s-scrolltext')));
})();
