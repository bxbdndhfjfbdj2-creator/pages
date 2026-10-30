async function main(){
 const title=document.querySelector('#title'),caption=document.querySelector('#caption'),chart=document.querySelector('#chart');
 try{
   const res=await fetch('./data.json',{cache:'no-cache'});
   if(!res.ok)throw new Error('HTTP '+res.status);
   const data=await res.json();title.textContent=data.title;
   caption.textContent='数据更新：'+data.updated+' · 修改 data.json 后提交，网页会自动更新';
   for(const item of data.items){
     const row=document.createElement('div');row.className='row';
     const label=document.createElement('span');label.textContent=item.name;
     const bar=document.createElement('div');bar.className='bar';
     const fill=document.createElement('div');fill.className='fill';
     fill.style.width=Math.max(0,Math.min(100,Number(item.value)||0))+'%';
     bar.append(fill);
     const n=document.createElement('b');n.textContent=item.value;
     row.append(label,bar,n);chart.append(row);
   }
 }catch(e){title.textContent='数据加载失败';caption.textContent=String(e);}
}
main();
