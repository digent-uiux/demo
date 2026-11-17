// Dimensions 03: cm / in flip, door + hall verdicts per size row, the "Choose this size" toggle (preview without a
// product), and the scroll reveal arm (photo unclips, outlines draw row by row). Static = final frame.
(()=>{
  const motionOn=()=>document.documentElement.classList.contains('blko-ui-motion');
  const arm=(root)=>{
    const band=root.querySelector('[data-d3]');
    if(!band||band.dataset.armed!==undefined||!motionOn()||!('IntersectionObserver' in window))return;
    band.setAttribute('data-armed','');
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){band.setAttribute('data-in','');io.disconnect();}},{threshold:.15});
    io.observe(band);
  };
  const choose=(root)=>{
    const btns=[...root.querySelectorAll('[data-choose]')];
    btns.forEach(b=>b.addEventListener('click',()=>btns.forEach(x=>{
      const on=x===b;x.setAttribute('aria-pressed',String(on));
      x.textContent=on?root.dataset.chosenLabel:root.dataset.chooseLabel;
      x.classList.toggle('blko-ui-button--primary',on);x.classList.toggle('blko-ui-button--outline',!on);
      const li=x.closest('[data-row]');if(li)li.classList.toggle('bdimensions03__row--on',on);
    })));
  };
  const fill=(t,m)=>Object.keys(m).reduce((a,k)=>a.split('['+k+']').join(m[k]),t||'');
  const init=(scope=document)=>{
    scope.querySelectorAll('[data-bdimensions03]').forEach(root=>{
      arm(root);
      if(root.dataset.ready)return;root.dataset.ready='true';
      choose(root);
      const D=root.dataset,q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
      const inW=q('[data-in=w]'),inH=q('[data-in=h]'),inHall=q('[data-in=hall]'),turn=q('[data-turn]'),hall=q('[data-hall]'),flip=q('[data-flip]');
      let metric=true;
      const u=()=>metric?'cm':'in';
      const show=cm=>metric?`${cm}`:`${Math.round(cm/2.54*10)/10}`;
      const read=i=>{const n=parseFloat(i&&i.value);return Number.isFinite(n)&&n>0?(metric?n:n*2.54):null;};
      const verdict=(r,dW,dH,hW)=>{
        if(dW===null||dH===null)return null;
        const length=r.part||r.w,thin=Math.min(r.d,r.h),thinNL=Math.min(r.d,r.h-r.legs);
        if(Math.max(r.d,r.h)>dH)return{tone:'no',text:D.tall};
        let res;
        if(thin+2<=dW)res={tone:'ok',text:D.side};
        else if(thinNL+2<=dW)res={tone:'warn',text:D.legs};
        else return{tone:'no',text:fill(D.need,{value:show(thinNL+2)+' '+u()})};
        if(turn&&turn.checked&&hW!==null){
          const max=Math.pow(Math.pow(hW,2/3)+Math.pow(dW,2/3),1.5);
          if(length>max)return{tone:'no',text:fill(D.turnMsg,{value:show(Math.round(max))+' '+u()})};
        }
        return r.part?{tone:res.tone==='ok'?'warn':res.tone,text:fill(D.parts,{verdict:res.text})}:res;
      };
      const update=()=>{
        const dW=read(inW),dH=read(inH),hW=read(inHall);
        qa('[data-row]').forEach(li=>{
          const r={w:+li.dataset.w,d:+li.dataset.d,h:+li.dataset.h,legs:+li.dataset.legs,part:+li.dataset.part};
          const v=verdict(r,dW,dH,hW),p=li.querySelector('[data-verdict]');
          if(!p)return;
          p.dataset.tone=v?v.tone:'none';
          p.querySelector('[data-text]').textContent=v?v.text:D.empty;
        });
      };
      const conv=i=>{if(!i)return;const n=parseFloat(i.value);if(Number.isFinite(n))i.value=String(metric?Math.round(n/2.54*10)/10:Math.round(n*2.54));};
      flip&&flip.addEventListener('click',()=>{
        [inW,inH,inHall].forEach(conv);metric=!metric;
        flip.textContent=metric?D.showIn:D.showCm;
        qa('[data-u]').forEach(s=>{s.textContent=u();});
        qa('[data-cm]').forEach(s=>{s.textContent=show(+s.dataset.cm);});
        update();
      });
      turn&&turn.addEventListener('change',()=>{if(inHall)inHall.disabled=!turn.checked;if(hall)hall.classList.toggle('bdimensions03__hall--off',!turn.checked);update();});
      [inW,inH,inHall].forEach(i=>i&&i.addEventListener('input',()=>{const v=i.value.replace(/[^0-9.]/g,'');if(v!==i.value)i.value=v;update();}));
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init());else init();
  document.addEventListener('shopify:section:load',e=>init(e.target));
})();
