// Isolated fixtures on the stock LiquidJS renderer. Never modifies the shared renderer.
import fs from 'node:fs';import path from 'node:path';
const fixtureFile=process.argv[2];process.argv.splice(2,1);const here=path.resolve('design-system/site/liquid/_tools/standalone');let src=fs.readFileSync(here+'/render.mjs','utf8');
src=src.replace('import { Liquid, Tag, Hash, Context } from "liquidjs";',`import{createRequire}from'node:module';const{Liquid,Tag,Hash,Context}=createRequire(${JSON.stringify(path.resolve('design-system/site/liquid/_tools/package.json'))})('liquidjs');`);
src=src.replace('const HERE = path.dirname(fileURLToPath(import.meta.url));',`const HERE=${JSON.stringify(here)};`);
const fixture=JSON.parse(fs.readFileSync(fixtureFile,'utf8'));if(fixture.paginate)src=src.replace('paginate: { current_page: 1, pages: 1, items: 0, parts: [], previous: null, next: null }','paginate: '+JSON.stringify(fixture.paginate));
src=src.replace('const html = await engine.parseAndRender(body, ctx);',`const fixture=${JSON.stringify(fixture)};Object.assign(ctx,fixture.globals||{});Object.assign(ctx.section.settings,fixture.settings||{});ctx.section.blocks.forEach((b,i)=>Object.assign(b.settings,fixture.blocks?.[i]||{}));const html = await engine.parseAndRender(body, ctx);`);
await import('data:text/javascript;base64,'+Buffer.from(src).toString('base64'));
