/* ইঞ্জিন — সাধারণত এই ফাইল বদলাতে হবে না। প্রশ্ন-উত্তর যোগ করুন data.js এ */
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hl=s=>esc(s).replace(/\{\{(.+?)\}\}/g,'<b>$1</b>');
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let prog=ld('ielts_prog',{}),sec='guide',filter=0,cur=null,tab='read',level=2;
const paras=t=>t.split(/\n\s*\n/);
const wc=t=>t.replace(/\{\{|\}\}/g,'').trim().split(/\s+/).length;
const items=()=>sec=='task'?TASKS:sec=='vocab'?VOCAB:GUIDE;
const label=x=>sec=='task'?'Task '+x.type+(x.kind?' · '+x.kind:''):sec=='vocab'?'Vocab':'Guide';
const gtext=x=>x.words?x.words.map(w=>w.ex.map(e=>`[${w.m}] ${e}`).join('\n\n')).join('\n\n'):x.answer;

function home(){
 cur=null;const l=items().filter(x=>sec!='task'||!filter||x.type==filter);
 $('#app').innerHTML=`<div class="tabs">${[['guide','📘 গাইড'],['task','✍️ Writing Task'],['vocab','📚 Vocabulary']].map(([k,t])=>`<button class="${sec==k?'on':''}" onclick="sec='${k}';home()">${t}</button>`).join('')}</div>`
 +(sec=='task'?`<div class="chips">${[[0,'সব'],[1,'Task 1'],[2,'Task 2']].map(([v,t])=>`<button class="${filter==v?'on':''}" onclick="filter=${v};home()">${t}</button>`).join('')}</div>`:'')
 +l.map(x=>{const p=prog[x.id]||{};return `<div class="card" onclick="openQ('${x.id}')"><span class="tag">${label(x)}</span><h3>${esc(x.title)}</h3><small>${x.topic?esc(x.topic)+' · ':''}${sec=='guide'?'':`📖 পড়া: ${p.r||0}/3 · 🧩 সেরা স্কোর: ${p.b!=null?p.b+'%':'—'}`}</small></div>`}).join('');
}
function openQ(id){cur=items().find(x=>x.id==id);tab='read';view()}
function view(){
 if(sec=='guide')return guideView();
 const x=cur;
 $('#app').innerHTML=`<button class="link" onclick="home()">← ফিরে যান</button> <span class="tag">${label(x)}</span><h2>${esc(x.title)}</h2>
 ${x.prompt?`<div class="prompt">${esc(x.prompt).replace(/\n/g,'<br>')}</div>`:''}
 <div class="tabs"><button class="${tab=='read'?'on':''}" onclick="tab='read';view()">১. টিউটোরিয়াল</button><button class="${tab=='gap'?'on':''}" onclick="tab='gap';view()">২. Fill in the gaps</button></div><div id="body"></div>`;
 tab=='read'?read():gap();
}
function guideView(){
 const x=cur;
 $('#app').innerHTML=`<button class="link" onclick="home()">← ফিরে যান</button> <span class="tag">Guide</span><h2>${esc(x.title)}</h2>`
 +x.sections.map(s=>`<div class="box"><h3>${esc(s[0])}</h3>${s[1].map(l=>l[0]=='-'?`<p>• ${hl(l.slice(1).trim())}</p>`:`<p>${hl(l)}</p>`).join('')}</div>`).join('')
 +`<div class="row"><button class="pri" onclick="sec='task';home()">এবার practice → Writing Task</button></div>`;
}
function read(){
 const x=cur,p=prog[x.id]||{};
 let h='<div class="tip">💡 ৩ বার জোরে জোরে পড়ুন, তারপর নিজে নিজে লিখে practice করুন। <b>বোল্ড</b> অংশগুলো মুখস্থ করুন।</div>';
 if(x.tips)h+=`<div class="tip">${x.tips.map(t=>'• '+esc(t)).join('<br>')}</div>`;
 if(x.vocab)h+=`<table>${x.vocab.map(v=>`<tr><td><b>${esc(v[0])}</b></td><td>${esc(v[1])}</td></tr>`).join('')}</table>`;
 h+=x.words?x.words.map(w=>`<div class="box"><h3>${esc(w.w)} <small>— ${esc(w.m)}</small></h3>${w.s?`<small>≈ ${esc(w.s)}</small>`:''}${w.ex.map(e=>`<p>• ${hl(e)}</p>`).join('')}</div>`).join('')
  :`<div class="ans">${paras(x.answer).map(s=>`<p>${hl(s)}</p>`).join('')}</div><p class="sub">Words: ${wc(x.answer)}</p>`;
 h+=`<div class="row"><button class="pri" onclick="markRead()">✅ আমি একবার জোরে পড়েছি (${p.r||0}/3)</button><button onclick="tab='gap';view()">পড়া শেষ → Gap পূরণ</button></div>`;
 $('#body').innerHTML=h;
}
function markRead(){const p=prog[cur.id]=prog[cur.id]||{};p.r=(p.r||0)+1;sv('ielts_prog',prog);read()}
const inp=w=>`<input data-a="${esc(w)}" style="width:${(w.length*.62+1.4).toFixed(1)}em" autocomplete="off" autocapitalize="off" spellcheck="false">`;
function gapHtml(text){
 const man=/\{\{(.+?)\}\}/.test(text);let n=0;
 return paras(text).map(par=>'<p>'+(man?par.split(/\{\{(.+?)\}\}/).map((s,i)=>i%2?inp(s):esc(s)).join(''):
  par.split(/(\s+)/).map(t=>{const m=t.match(/^([^A-Za-z]*)([A-Za-z-]{8,})([^A-Za-z]*)$/);return m&&(++n%level===0)?esc(m[1])+inp(m[2])+esc(m[3]):esc(t)}).join(''))+'</p>').join('');
}
function gap(){
 const t=gtext(cur),man=/\{\{/.test(t);
 $('#body').innerHTML=(man?'':`<div class="row"><label>কঠিনতা:</label><select id="lv" style="width:auto" onchange="level=+this.value;gap()"><option value="3">সহজ (কম gap)</option><option value="2">মাঝারি</option><option value="1">কঠিন (বেশি gap)</option></select></div>`)
 +`<div class="tip">ফাঁকা জায়গায় সঠিক শব্দ বসান। বড়/ছোট হাতের অক্ষর ধরা হবে না।</div>
 <div class="ans">${gapHtml(t)}</div><div id="res"></div>
 <div class="row"><button class="pri" onclick="check()">✔ Check</button><button onclick="reveal()">👁 উত্তর দেখুন</button><button onclick="gap()">↺ রিসেট</button></div>`;
 if($('#lv'))$('#lv').value=level;
 const is=[...document.querySelectorAll('#body input')];
 is.forEach((i,k)=>i.addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();(is[k+1]||i).focus()}}));
}
function check(){
 const is=[...document.querySelectorAll('#body input')];let ok=0;
 is.forEach(i=>{const g=i.value.trim().toLowerCase()==i.dataset.a.toLowerCase();i.className=g?'ok':(i.value?'bad':'');if(g)ok++});
 const pc=is.length?Math.round(ok/is.length*100):0;
 $('#res').textContent=`${ok}/${is.length} সঠিক (${pc}%)`+(pc==100?' 🎉 পারফেক্ট!':'');
 const p=prog[cur.id]=prog[cur.id]||{};if(p.b==null||pc>p.b)p.b=pc;sv('ielts_prog',prog);
}
function reveal(){document.querySelectorAll('#body input').forEach(i=>{i.value=i.dataset.a;i.className='ok'})}
home();
