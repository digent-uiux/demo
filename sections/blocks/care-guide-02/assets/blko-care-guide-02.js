// Care guide 02: wash slider crossfades new -> washed photo and fills the meter; habits tick and count.
// Also arms the scroll reveal (photo unclips, meter fills, habits rise). Static = final frame.
(()=>{
  const motionOn=()=>document.documentElement.classList.contains('blko-ui-motion');
  const arm=(root)=>{
    const band=root.querySelector('[data-cg2]');
    if(!band||band.dataset.armed!==undefined||!motionOn()||!('IntersectionObserver' in window))return;
    band.setAttribute('data-armed','');
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){band.setAttribute('data-in','');io.disconnect();}},{threshold:.2});
    io.observe(band);
  };
  const fill=(t,map)=>Object.keys(map).reduce((a,k)=>a.split('['+k+']').join(map[k]),t||'');
  const init=(scope=document)=>{
    scope.querySelectorAll('[data-bcareguide02]').forEach(root=>{
      arm(root);
      if(root.dataset.ready)return;root.dataset.ready='true';
      const d=root.dataset,range=root.querySelector('[data-washes]'),washed=root.querySelector('.bcareguide02__washed');
      const badge=root.querySelector('[data-badge]'),stage=root.querySelector('[data-stage]'),soft=root.querySelector('[data-soft]'),bar=root.querySelector('[data-fill]');
      const boxes=[...root.querySelectorAll('[data-habit]')],count=root.querySelector('[data-count]');
      const update=()=>{
        if(!range)return;
        const w=Number(range.value),max=Number(range.max)||40,t=w/max;
        const pct=Math.round(22+76*(1-Math.exp(-w/(max*.35))));
        const tag=w===1?d.one:fill(d.many,{count:w});
        const st=w<max*.125?d.s1:w<max*.375?d.s2:w<max*.75?d.s3:d.s4;
        const sv=fill(d.softness,{percent:pct});
        if(washed)washed.style.opacity=t.toFixed(2);
        if(badge)badge.textContent=tag;
        if(stage)stage.textContent=st;
        if(soft)soft.textContent=sv;
        if(bar)bar.style.width=pct+'%';
        range.setAttribute('aria-valuetext',tag+', '+sv);
      };
      const tally=()=>{if(count)count.textContent=fill(d.countText,{done:boxes.filter(b=>b.checked).length,total:boxes.length});};
      range&&range.addEventListener('input',update);
      boxes.forEach(b=>b.addEventListener('change',tally));
      update();tally();
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init());else init();
  document.addEventListener('shopify:section:load',e=>init(e.target));
})();
