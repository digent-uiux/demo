// Scoped version of kits/liquid.mjs: CSS only, no page/layout mutations.
import fs from 'node:fs';import path from 'node:path';import {registerHooks} from 'node:module';
registerHooks({resolve:(spec,ctx,next)=>{try{return next(spec,ctx)}catch(e){if(/^\.\.?\//.test(spec)&& !/\.\w+$/.test(spec))return next(spec+'.ts',ctx);throw e}}});
const site=path.resolve('design-system/site'),{lqSel}=await import(site+'/components/ui/kits/sel.ts'),kit=await import(site+'/components/ui/kits/linen.ts'),{theme}=await import(site+'/themes/linen.ts');
const m=theme.motion,S=lqSel('linen',{'motion-duration':m.duration,'motion-ease':m.ease,'motion-distance':m.distance,'motion-stagger':m.stagger,'motion-hover-scale':String(m.hoverScale)});
const css='/* Linen motion kit. GENERATED from components/ui/kits/linen.ts by kits/liquid.mjs; do not edit.\n   Runs only under html.blko-kit-linen (added by blko-linen-motion.js when motion is allowed). */\n'+kit.css(S).trim()+'\n';
fs.writeFileSync(site+'/liquid/linen/assets/blko-linen-motion.css',css);
for(const id of ['collection-banner-86','featured-products-44'])fs.writeFileSync(site+'/liquid/blocks/'+id+'/assets/blko-linen-motion.css',css);
console.log('Regenerated Linen CSS and the two reconciled standalone copies.');
