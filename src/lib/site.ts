import { readdirSync,existsSync,readFileSync } from 'node:fs';
import { join } from 'node:path';
export const base = import.meta.env.BASE_URL;
export const href = (path = '') => base + path.replace(/^\/+/, '');
export const resource = (path: string) => /^(https?:|mailto:|#)/.test(path) ? path : href(path);
export type HtmlApp={slug:string;title:string;description:string;category:string;tags:string[];featured:boolean};
export function getApps():HtmlApp[] {
 const dir=join(process.cwd(),'public','demos');
 if(!existsSync(dir))return [];
 return readdirSync(dir,{withFileTypes:true}).filter(x=>x.isDirectory()&&/^[a-z0-9_-]+$/.test(x.name))
 .filter(x=>existsSync(join(dir,x.name,'index.html')))
 .map(x=>{
   const f=join(dir,x.name,'app.json');
   const m=existsSync(f)?JSON.parse(readFileSync(f,'utf8')):{};
   return {slug:x.name,title:m.title||x.name,description:m.description||'独立 HTML 页面',
      category:m.category||'网页作品',tags:Array.isArray(m.tags)?m.tags:[],featured:m.featured===true} as HtmlApp;
 }).sort((a,b)=>a.title.localeCompare(b.title,'zh'));
}
