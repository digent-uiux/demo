// Isolated source render for worker QA; no DS/Next build and no server.
const fs=require('fs'),path=require('path'),Module=require('module'),site=path.resolve('design-system/site');
const req=Module.createRequire(site+'/package.json'),ts=req('typescript'),React=req('react'),{renderToStaticMarkup}=req('react-dom/server');
const resolve=Module._resolveFilename;Module._resolveFilename=function(id,parent,...rest){if(id.startsWith('@/'))id=site+'/'+id.slice(2);return resolve.call(this,id,parent,...rest)};
for(const ext of['.ts','.tsx'])Module._extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,f);
const slug=process.argv[2],file=site+'/registry/'+slug.replace(/-\d+$/,'')+'/'+slug+'.tsx';
const Component=require(file).default;
(async()=>{const html=await(await fetch('http://127.0.0.1:8790/embed/'+slug.replace(/-(\d+)$/,'/$1')+'/?theme=linen&static')).text();const out=process.argv[3]||'/tmp/linen-source-'+slug+'.html';
const head=html.match(/<head>([\s\S]*?)<\/head>/)[1].replaceAll('href="/','href="http://127.0.0.1:8790/').replace(/<script[\s\S]*?<\/script>/g,'');const theme=html.match(/<[^>]+data-theme="linen"[^>]*>/)?.[0]||'<div data-theme="linen">';fs.writeFileSync(out,'<!doctype html>'+html.match(/<html[^>]*>/)[0].replace('<html','<html data-theme="linen"')+'<head>'+head+'</head>'+html.match(/<body[^>]*>/)[0]+theme+renderToStaticMarkup(React.createElement(Component))+'</div></body></html>');console.log(out)})().catch(e=>{console.error(e);process.exitCode=1});
