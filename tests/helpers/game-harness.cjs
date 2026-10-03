// Runs the shipped scripts against the real page's element inventory and bindings.
// This boundary double does not emulate layout, Leaflet, or assistive technology.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function createGame() {
  const root=path.join(__dirname,'../..');
  const html=fs.readFileSync(path.join(root,'carmen-sandiego-bentonville.html'),'utf8');
  const elements=new Map(), timers=new Map(), docEvents=new Map(), windowEvents=new Map();
  let timerId=0, clock=0, document, context;
  class Element {
    constructor(tag='div') {
      this.tagName=tag.toUpperCase(); this.children=[]; this.attributes={}; this.disabled=false;
      this.value=''; this.style={}; this.isConnected=true; this.hidden=false; this.classes=new Set();
      this.classList={add:(...c)=>c.forEach(x=>this.classes.add(x)),remove:(...c)=>c.forEach(x=>this.classes.delete(x)),contains:c=>this.classes.has(c),toggle:(c,force)=>{const on=force===undefined?!this.classes.has(c):force;on?this.classes.add(c):this.classes.delete(c);return on;}};
    }
    set className(v){this.classes=new Set(v.split(/\s+/));} get className(){return [...this.classes].join(' ');}
    set innerHTML(v){this.html=v;this.children=[];} get innerHTML(){return this.html||'';}
    appendChild(child){child.parentElement=this;this.children.push(child);return child;}
    setAttribute(k,v){this.attributes[k]=String(v);if(k==='class')this.className=v;if(k==='id')this.id=v;}
    getAttribute(k){return this.attributes[k]??null;}
    matches(selector){return selector.split(',').some(s=>{
      s=s.trim();if(s.startsWith('.'))return this.classList.contains(s.slice(1));
      if(s.startsWith('#'))return this.id===s.slice(1);
      const attr=s.match(/^(\w+)?\[([\w-]+)(?:="([^"]*)")?\]$/);
      if(attr)return (!attr[1]||this.tagName===attr[1].toUpperCase()) && Object.hasOwn(this.attributes,attr[2]) && (attr[3]===undefined||this.attributes[attr[2]]===attr[3]);
      return this.tagName===s.toUpperCase();
    });}
    focus(){document.activeElement=this;}
    remove(){this.isConnected=false;if(this.parentElement)this.parentElement.children=this.parentElement.children.filter(e=>e!==this);}
    querySelectorAll(selector){return this.children.flatMap(child=>[...(child.matches(selector)?[child]:[]),...child.querySelectorAll(selector)]);}
    querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
    closest(selector){return this.matches(selector)?this:this.parentElement?.closest(selector)||null;}
    click(){if(!this.disabled)this.onclick?.();}
  }
  const tree=new Element('root'), stack=[tree], voids=new Set(['AREA','BASE','BR','COL','EMBED','HR','IMG','INPUT','LINK','META','PARAM','SOURCE','TRACK','WBR']);
  for(const match of html.replace(/<!--[\s\S]*?-->/g,'').matchAll(/<(\/?)([a-z][\w-]*)\b([^>]*)>/gi)) {
    const [,close,tag,attrs]=match;
    if(close){if(stack.at(-1).tagName===tag.toUpperCase())stack.pop();continue;}
    const el=new Element(tag);
    for(const attr of attrs.matchAll(/([\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'))?/g))el.setAttribute(attr[1],attr[2]??attr[3]??'');
    el.disabled=Object.hasOwn(el.attributes,'disabled');el.hidden=Object.hasOwn(el.attributes,'hidden');
    if(el.id){if(elements.has(el.id))throw new Error(`Duplicate HTML id: ${el.id}`);elements.set(el.id,el);}
    stack.at(-1).appendChild(el);if(!voids.has(el.tagName))stack.push(el);
  }
  const register=(events,type,fn)=>events.set(type,[...(events.get(type)||[]),fn]);
  const dispatch=async(events,type,event)=>{for(const fn of events.get(type)||[])await fn(event);};
  document={getElementById:id=>elements.get(id)||null,createElement:tag=>new Element(tag),head:tree.querySelector('head'),body:tree.querySelector('body'),
    addEventListener:(type,fn)=>register(docEvents,type,fn),querySelectorAll:selector=>tree.querySelectorAll(selector),
    querySelector:selector=>selector==='#app > :not(.hidden)'?elements.get('app').children.find(e=>!e.classList.contains('hidden')):tree.querySelector(selector)};
  const backing=new Map();const localStorage={getItem:key=>backing.get(key)??null,setItem:(key,value)=>backing.set(key,String(value)),removeItem:key=>backing.delete(key)};
  context=vm.createContext({document,console,AbortController,fetch:()=>Promise.reject(new Error('No network in harness')),
    setTimeout:(fn,ms=0)=>{const id=++timerId;timers.set(id,{fn,due:clock+ms});return id;},clearTimeout:id=>timers.delete(id),
    window:{localStorage,matchMedia:()=>({matches:true,addEventListener(){}}),addEventListener:(type,fn)=>register(windowEvents,type,fn)},Date,Math});
  const run=code=>vm.runInContext(code,context);
  for(const match of html.matchAll(/<script[^>]*src="\.\/([^"]+)"[^>]*>/g))vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
  for(const el of tree.querySelectorAll('[onclick]'))el.onclick=()=>run(el.getAttribute('onclick'));
  run('state.settings.sound=false; packLoading=false; applyQuizPack(DEFAULT_QUIZ_PACK);');
  return {run,document,backing,context,
    boot:()=>dispatch(docEvents,'DOMContentLoaded',{}),
    dispatchWindow:(type,event)=>dispatch(windowEvents,type,event),
    dispatchKey:(key,target=document.body,extra={})=>dispatch(docEvents,'keydown',{key,target,preventDefault(){},...extra}),
    state:()=>JSON.parse(run('JSON.stringify(state)')),
    snapshot:()=>JSON.parse(backing.get('carmen_save')),
    flush(){let count=0;while(timers.size){if(++count>200)throw new Error('Timer loop');const [id,{fn,due}]=[...timers.entries()].sort((a,b)=>a[1].due-b[1].due)[0];timers.delete(id);clock=due;fn();}},
    start(count=4){run(`state.stopCount=${count}; selectDifficulty('detective');`);},
    solve(){run('selectChoice(state.activePuzzleCorrectIndex)');this.flush();document.getElementById('goToWarrantBtn').click();},
    warrant(correct=true){const answer=JSON.parse(run('JSON.stringify(getLocationCase(state.currentLocationIndex).warrantAnswers)'));for(const field of ['city','hideout','disguise'])document.getElementById(`warrant${field[0].toUpperCase()+field.slice(1)}`).value=correct?answer[field]:'wrong';run('submitWarrant()');}
  };
}
module.exports={createGame};
