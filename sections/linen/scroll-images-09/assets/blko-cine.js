/* GENERATED from design-system/site/components/ui/kits/cine.ts (Blocko cine kit). Do not edit: change the TS and regenerate. */
(function () {
  if (window.BlkoCine) return;
function cineOn() {
    return typeof document !== "undefined" && document.documentElement.classList.contains("blko-cine") && !matchMedia("(prefers-reduced-motion: reduce)").matches;
}
const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);
const phase = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const damp = (cur, to, k, dt) => cur + (to - cur) * (1 - (1 - k) ** (dt * 60));
function parseEdge(spec) {
    const [a, b = "top"] = spec.split(" ");
    const m = b.match(/^([a-z]+|\d+%)([+-]=)?(\d+)?$/) || [b, b];
    return { a, b: m[1], off: m[2] ? (m[2][0] === "-" ? -1 : 1) * +(m[3] || 0) : 0 };
}
const elY = (r, e) => (e === "top" ? r.top : e === "bottom" ? r.bottom : r.top + r.height / 2);
const vpY = (e, h) => (e.endsWith("%") ? (h * parseFloat(e)) / 100 : e === "top" ? 0 : e === "bottom" ? h : h / 2);
function cineProgress(el, start = "top bottom", end = "bottom top") {
    const r = el.getBoundingClientRect(), h = innerHeight, s = parseEdge(start), e = parseEdge(end);
    const d0 = elY(r, s.a) - vpY(s.b, h) - s.off;
    const d1 = elY(r, e.a) - vpY(e.b, h) - e.off;
    return d0 === d1 ? +(d1 <= 0) : clamp01(d0 / (d0 - d1));
}
function cineTrack(el, set, { start = "top top", end = "bottom bottom", k = 0.18, play = 0 } = {}) {
    if (!cineOn())
        return () => { };
    let raf = 0, live = false, cur = cineProgress(el, start, end), last = 0, t0 = 0, timed = 0;
    const span = () => Math.max(1, el.offsetHeight - innerHeight);
    const reachable = () => {
        const se = document.scrollingElement || document.documentElement, s = parseEdge(start), e = parseEdge(end), r = el.getBoundingClientRect();
        const left = se.scrollHeight - innerHeight - scrollY;
        const d0 = elY(r, s.a) - vpY(s.b, innerHeight) - s.off, d1 = elY(r, e.a) - vpY(e.b, innerHeight) - e.off;
        return d0 >= -scrollY - 1 && d1 <= left + 1;
    };
    if (play && !reachable())
        cur = 0;
    const tick = (t) => {
        raf = 0;
        let to = cineProgress(el, start, end);
        if (play && (t0 || !reachable())) {
            if (!t0)
                t0 = t;
            timed = Math.min(1, (t - t0) / play);
            to = ease(timed);
        }
        const dt = last ? Math.min(0.1, (t - last) / 1000) : 1 / 60;
        last = t;
        cur = Math.abs(to - cur) * span() > innerHeight * 1.5 ? to : damp(cur, to, k, dt);
        if (Math.abs(to - cur) < 1e-4)
            cur = to;
        set(cur);
        if (cur !== to || (t0 && timed < 1))
            raf = requestAnimationFrame(tick);
        else
            last = 0;
    };
    const on = () => { if (live && !raf)
        raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver(([e]) => { live = e.isIntersecting; on(); }, { rootMargin: play ? "0px 0px -10% 0px" : "25% 0px" });
    io.observe(el);
    set(cur);
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => { io.disconnect(); removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
}
function cineInk(i, n, p, ov = 0.3) {
    const at = (i / Math.max(1, n)) * (1 - ov);
    return clamp01((p - at) / ov);
}
function cineLines(el, sel = "[data-w]", onLines) {
    let w = 0, t = 0;
    const measure = () => {
        let top = null, i = -1;
        el.querySelectorAll(sel).forEach((s) => {
            const y = s.offsetTop;
            if (top === null || Math.abs(y - top) > 2) {
                top = y;
                i++;
            }
            s.style.setProperty("--l", String(i));
        });
        onLines === null || onLines === void 0 ? void 0 : onLines(i + 1);
    };
    measure();
    const ro = new ResizeObserver(() => {
        if (el.offsetWidth === w)
            return;
        w = el.offsetWidth;
        clearTimeout(t);
        t = window.setTimeout(measure, 150);
    });
    ro.observe(el);
    return () => { ro.disconnect(); clearTimeout(t); };
}
function cinePointer(el, set, k = 0.12) {
    if (!cineOn() || !matchMedia("(hover: hover) and (pointer: fine)").matches)
        return () => { };
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, last = 0;
    const tick = (t) => {
        const dt = last ? Math.min(0.1, (t - last) / 1000) : 1 / 60;
        last = t;
        x = damp(x, tx, k, dt);
        y = damp(y, ty, k, dt);
        set(x, y);
        raf = Math.abs(tx - x) + Math.abs(ty - y) > 1e-3 ? requestAnimationFrame(tick) : (last = 0);
    };
    const go = () => { if (!raf)
        raf = requestAnimationFrame(tick); };
    const move = (e) => {
        const r = el.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width) * 2 - 1;
        ty = ((e.clientY - r.top) / r.height) * 2 - 1;
        go();
    };
    const leave = () => { tx = 0; ty = 0; go(); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); cancelAnimationFrame(raf); };
}

function cineReveal(el) {
    if (!cineOn())
        return () => { };
    if (el.dataset.cine === "load" || el.dataset.cine === "in")
        return () => { };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) {
        el.dataset.cine = "in";
        io.disconnect();
    } }, { rootMargin: "0px 0px -15% 0px" });
    io.observe(el);
    return () => io.disconnect();
}
function cineButtons(root) {
    if (!cineOn() || !matchMedia("(hover: hover)").matches)
        return () => { };
    const off = [];
    root.querySelectorAll(".cine-btn").forEach((b) => {
        const at = (e) => {
            const r = b.getBoundingClientRect();
            b.style.setProperty("--cx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
            b.style.setProperty("--cy", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
        };
        b.addEventListener("pointerenter", at);
        b.addEventListener("pointerleave", at);
        off.push(() => { b.removeEventListener("pointerenter", at); b.removeEventListener("pointerleave", at); });
    });
    return () => off.forEach((f) => f());
}

  window.BlkoCine = { cineButtons, cineInk, cineLines, cineOn, cinePointer, cineProgress, cineReveal, cineTrack, clamp01, damp, ease, phase };
})();
