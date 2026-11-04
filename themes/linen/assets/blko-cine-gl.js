/* GENERATED from design-system/site/components/ui/kits/cine-gl.ts (Blocko cine kit). Do not edit: change the TS and regenerate. */
(function () {
  if (window.BlkoCineGL) return;
const N = 16;
const LIFE = 3.2;
let used = false;
const VS = "attribute vec2 a;varying vec2 v;void main(){v=vec2(a.x*.5+.5,.5-a.y*.5);gl_Position=vec4(a,0.,1.);}";
const FS = `precision mediump float;
uniform sampler2D T;uniform vec2 R;uniform vec4 C;uniform vec4 D[${N}];uniform float S,K;varying vec2 v;
void main(){
  float asp=R.x/R.y;vec2 o=vec2(0.);float h=0.;
  for(int i=0;i<${N};i++){
    vec4 d=D[i];if(d.w<=0.)continue;
    vec2 q=(v-d.xy)*vec2(asp,1.);float r=length(q);
    float x=r-d.z*.3;
    float w=sin(x*46.)*exp(-x*x*34.)*exp(-d.z*1.25)*d.w;
    o+=q/max(r,1e-4)*w;h+=w;
  }
  o.x/=asp;
  vec2 uv=C.xy*(v+o*S)+C.zw,k=o*K;
  vec3 c=vec3(texture2D(T,uv+k).r,texture2D(T,uv).g,texture2D(T,uv-k).b);
  gl_FragColor=vec4(c+h*.09,1.);
}`;
function allowed() {
    var _a;
    const nav = navigator;
    return document.documentElement.classList.contains("blko-cine")
        && !matchMedia("(prefers-reduced-motion: reduce)").matches
        && !((_a = nav.connection) === null || _a === void 0 ? void 0 : _a.saveData)
        && !(nav.deviceMemory && nav.deviceMemory <= 2);
}
function cineRipple(host, img, opt = {}) {
    if (used || !allowed())
        return null;
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl", { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, powerPreference: "low-power" });
    if (!gl)
        return null;
    used = true;
    c.setAttribute("aria-hidden", "true");
    c.style.cssText = "position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .5s ease;pointer-events:none";
    host.appendChild(c);
    const coarse = matchMedia("(pointer: coarse)").matches;
    const dpr = Math.min(devicePixelRatio || 1, coarse ? 1.25 : 1.5);
    const drops = new Float32Array(N * 4);
    const data = new Float32Array(N * 4);
    let head = 0, raf = 0, dead = false, ready = false, visible = true, shown = false;
    let W = 0, H = 0, prog = null;
    const u = {};
    const t0 = performance.now();
    const now = () => (performance.now() - t0) / 1000;
    const drop = (x, y, amp) => {
        drops.set([x, y, now(), amp], head * 4);
        head = (head + 1) % N;
        wake();
    };
    const draw = () => {
        raf = 0;
        if (dead || !ready || !prog)
            return;
        const t = now();
        data.fill(0);
        let alive = false;
        for (let i = 0; i < N; i++) {
            const age = t - drops[i * 4 + 2];
            if (drops[i * 4 + 3] > 0 && age < LIFE) {
                alive = true;
                data[i * 4] = drops[i * 4];
                data[i * 4 + 1] = drops[i * 4 + 1];
                data[i * 4 + 2] = age;
                data[i * 4 + 3] = drops[i * 4 + 3];
            }
        }
        gl.uniform4fv(u.D, data);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        if (!shown) {
            shown = true;
            c.style.opacity = "1";
        }
        if (alive && visible)
            raf = requestAnimationFrame(draw);
    };
    function wake() { if (!raf && ready && visible && !dead)
        raf = requestAnimationFrame(draw); }
    const cover = () => {
        var _a, _b;
        const iw = img.naturalWidth || 1, ih = img.naturalHeight || 1, ca = W / H, ia = iw / ih;
        const pos = getComputedStyle(img).objectPosition.split(" ").map((s) => (s.endsWith("%") ? parseFloat(s) / 100 : 0.5));
        const sx = ca > ia ? 1 : ca / ia, sy = ca > ia ? ia / ca : 1;
        gl.uniform4f(u.C, sx, sy, (1 - sx) * ((_a = pos[0]) !== null && _a !== void 0 ? _a : 0.5), (1 - sy) * ((_b = pos[1]) !== null && _b !== void 0 ? _b : 0.5));
    };
    const resize = () => {
        const r = host.getBoundingClientRect();
        const w = Math.max(1, Math.round(r.width * dpr)), h = Math.max(1, Math.round(r.height * dpr));
        if (coarse && w === W && Math.abs(h - H) < 120 * dpr)
            return;
        W = w;
        H = h;
        c.width = W;
        c.height = H;
        gl.viewport(0, 0, W, H);
        if (ready) {
            gl.uniform2f(u.R, W, H);
            cover();
            wake();
        }
    };
    const setup = () => {
        var _a, _b;
        if (dead)
            return;
        const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
        prog = gl.createProgram();
        gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
            return dispose();
        gl.useProgram(prog);
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const a = gl.getAttribLocation(prog, "a");
        gl.enableVertexAttribArray(a);
        gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
        ["T", "R", "C", "D", "S", "K"].forEach((n) => (u[n] = gl.getUniformLocation(prog, n)));
        gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
        [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach((p) => gl.texParameteri(gl.TEXTURE_2D, p, gl.CLAMP_TO_EDGE));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        try {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
        }
        catch {
            return dispose();
        }
        gl.uniform1i(u.T, 0);
        gl.uniform1f(u.S, (_a = opt.strength) !== null && _a !== void 0 ? _a : 0.07);
        gl.uniform1f(u.K, (_b = opt.rgb) !== null && _b !== void 0 ? _b : 0.007);
        ready = true;
        resize();
        gl.uniform2f(u.R, W, H);
        cover();
        draw();
        if (coarse)
            sweep();
        else
            drop(0.62, 0.52, 0.55);
    };
    let swept = false;
    function sweep() {
        if (swept)
            return;
        swept = true;
        for (let i = 0; i <= 14; i++) {
            window.setTimeout(() => {
                if (dead)
                    return;
                const k = i / 14, e = 1 - (1 - k) ** 3;
                drop(0.12 + 0.76 * e, 0.58 - 0.14 * Math.sin(k * Math.PI), 0.7);
            }, i * 100);
        }
    }
    let lx = -1, ly = -1, lt = 0;
    const move = (e) => {
        if (e.pointerType !== "mouse" && e.pointerType !== "pen")
            return;
        const r = host.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height, t = performance.now();
        const d = Math.hypot((x - lx) * (r.width / r.height), y - ly);
        if (lx < 0 || (d > 0.02 && t - lt > 30)) {
            drop(x, y, lx < 0 ? 0.5 : Math.min(1, 0.35 + (d / Math.max(16, t - lt)) * 40));
            lx = x;
            ly = y;
            lt = t;
        }
    };
    const leave = () => { lx = -1; };
    const host2 = host.closest("section") || host;
    if (!coarse) {
        host2.addEventListener("pointermove", move);
        host2.addEventListener("pointerleave", leave);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) {
            if (coarse && ready)
                sweep();
            wake();
        }
    }, { rootMargin: "25% 0px" });
    io.observe(host);
    const lost = (e) => { e.preventDefault(); dispose(); };
    c.addEventListener("webglcontextlost", lost);
    function dispose() {
        var _a;
        if (dead)
            return;
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        host2.removeEventListener("pointermove", move);
        host2.removeEventListener("pointerleave", leave);
        c.removeEventListener("webglcontextlost", lost);
        (_a = gl.getExtension("WEBGL_lose_context")) === null || _a === void 0 ? void 0 : _a.loseContext();
        c.remove();
        used = false;
    }
    (img.complete && img.naturalWidth ? Promise.resolve() : img.decode()).then(setup, dispose);
    return dispose;
}

  window.BlkoCineGL = { cineRipple };
})();
