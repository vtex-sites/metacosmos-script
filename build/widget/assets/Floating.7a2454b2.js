import{S as q,i as J,e as Q,f as U,L as G,l as W,r as R,T as K,u as C,U as Z,v as I,H as A,a2 as $,a3 as tt,ad as et,ae as T,I as P,J as nt,M as ot,g as it,k as L,D as M,a4 as S,o as st,P as ct,Q as lt,R as at,a5 as rt,a6 as D,x as ft,a7 as ut}from"./app.js";import{s as V,f as B}from"./index.befe4af7.js";const mt=(t,e=t.ownerDocument)=>{const o=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return e.addEventListener("click",o,!0),{destroy:()=>e.removeEventListener("click",o,!0)}},dt=(t,e)=>(e.appendChild(t),{update:o=>o.appendChild(t),destroy:()=>t.parentNode&&t.parentNode.removeChild(t)});function w(t){return t.split("-")[0]}function k(t){return t.split("-")[1]}function E(t){return["top","bottom"].includes(w(t))?"x":"y"}function gt(t){return t==="y"?"height":"width"}function F(t,e,o){let{reference:n,floating:i}=t;const a=n.x+n.width/2-i.width/2,g=n.y+n.height/2-i.height/2,u=E(e),s=gt(u),c=n[s]/2-i[s]/2,r=w(e),f=u==="x";let m;switch(r){case"top":m={x:a,y:n.y-i.height};break;case"bottom":m={x:a,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:g};break;case"left":m={x:n.x-i.width,y:g};break;default:m={x:n.x,y:n.y}}switch(k(e)){case"start":m[u]-=c*(o&&f?-1:1);break;case"end":m[u]+=c*(o&&f?-1:1);break}return m}const ht=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:a=[],platform:g}=o,u=await(g.isRTL==null?void 0:g.isRTL(e));let s=await g.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:r}=F(s,n,u),f=n,m={},p=0;for(let d=0;d<a.length;d++){const{name:y,fn:x}=a[d],{x:l,y:h,data:_,reset:b}=await x({x:c,y:r,initialPlacement:n,placement:f,strategy:i,middlewareData:m,rects:s,platform:g,elements:{reference:t,floating:e}});if(c=l!=null?l:c,r=h!=null?h:r,m={...m,[y]:{...m[y],..._}},b&&p<=50){p++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(s=b.rects===!0?await g.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:c,y:r}=F(s,f,u)),d=-1;continue}}return{x:c,y:r,placement:f,strategy:i,middlewareData:m}};function pt(t){return{top:0,right:0,bottom:0,left:0,...t}}function xt(t){return typeof t!="number"?pt(t):{top:t,right:t,bottom:t,left:t}}function H(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function X(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:a,rects:g,elements:u,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:r="viewport",elementContext:f="floating",altBoundary:m=!1,padding:p=0}=e,d=xt(p),x=u[m?f==="floating"?"reference":"floating":f],l=H(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(x)))==null||o?x:x.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:c,rootBoundary:r,strategy:s})),h=H(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?{...g.floating,x:n,y:i}:g.reference,offsetParent:await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),strategy:s}):g[f]);return{top:l.top-h.top+d.top,bottom:h.bottom-l.bottom+d.bottom,left:l.left-h.left+d.left,right:h.right-l.right+d.right}}const yt=Math.min,v=Math.max;function N(t,e,o){return v(t,yt(e,o))}async function _t(t,e){const{placement:o,platform:n,elements:i}=t,a=await(n.isRTL==null?void 0:n.isRTL(i.floating)),g=w(o),u=k(o),s=E(o)==="x",c=["left","top"].includes(g)?-1:1,r=a&&s?-1:1,f=typeof e=="function"?e(t):e;let{mainAxis:m,crossAxis:p,alignmentAxis:d}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof d=="number"&&(p=u==="end"?d*-1:d),s?{x:p*r,y:m*c}:{x:m*c,y:p*r}}const bt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await _t(e,t);return{x:o+i.x,y:n+i.y,data:i}}}};function vt(t){return t==="x"?"y":"x"}const wt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:a=!0,crossAxis:g=!1,limiter:u={fn:x=>{let{x:l,y:h}=x;return{x:l,y:h}}},...s}=t,c={x:o,y:n},r=await X(e,s),f=E(w(i)),m=vt(f);let p=c[f],d=c[m];if(a){const x=f==="y"?"top":"left",l=f==="y"?"bottom":"right",h=p+r[x],_=p-r[l];p=N(h,p,_)}if(g){const x=m==="y"?"top":"left",l=m==="y"?"bottom":"right",h=d+r[x],_=d-r[l];d=N(h,d,_)}const y=u.fn({...e,[f]:p,[m]:d});return{...y,data:{x:y.x-o,y:y.y-n}}}}},Rt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:n,platform:i,elements:a}=e,{apply:g=()=>{},...u}=t,s=await X(e,u),c=w(o),r=k(o);let f,m;c==="top"||c==="bottom"?(f=c,m=r===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(m=c,f=r==="end"?"top":"bottom");const p=v(s.left,0),d=v(s.right,0),y=v(s.top,0),x=v(s.bottom,0),l={availableHeight:n.floating.height-(["left","right"].includes(o)?2*(y!==0||x!==0?y+x:v(s.top,s.bottom)):s[f]),availableWidth:n.floating.width-(["top","bottom"].includes(o)?2*(p!==0||d!==0?p+d:v(s.left,s.right)):s[m])};await g({...e,...l});const h=await i.getDimensions(a.floating);return n.floating.width!==h.width||n.floating.height!==h.height?{reset:{rects:!0}}:{}}}},Ct=({reference:t,floating:e})=>({reference:Lt(t,O(e)),floating:{x:0,y:0,...Y(e)}}),Y=t=>({width:t.offsetWidth,height:t.offsetHeight}),kt=({element:t})=>O(t).getBoundingClientRect(),Et=({rect:t,offsetParent:e})=>{const o=e.getBoundingClientRect();return{...t,x:t.x+(o.left+e.clientLeft),y:t.y+(o.top+e.clientTop)}},O=t=>{let e=t.offsetParent;if(!e)for(;(e=t.parentElement)&&!/(relative|absolute|fixed)/.test(getComputedStyle(e).position););return e},Ot=t=>t.ownerDocument,At=()=>{throw new Error('The "getClientRects" is not implemented')},Tt=t=>t&&t.nodeType===Node.ELEMENT_NODE&&t.style&&t.ownerDocument,Pt=()=>!1,Lt=(t,e)=>{const o=t.getBoundingClientRect(),n=e.getBoundingClientRect();return{x:o.left-(n.left+e.clientLeft),y:o.top-(n.top+e.clientTop),width:o.width,height:o.height}},Mt=Object.freeze(Object.defineProperty({__proto__:null,getElementRects:Ct,getDimensions:Y,getClippingRect:kt,convertOffsetParentRelativeRectToViewportRelativeRect:Et,getOffsetParent:O,getDocumentElement:Ot,getClientRects:At,isElement:Tt,isRTL:Pt},Symbol.toStringTag,{value:"Module"}));function St(t){U(t,"svelte-1cdh4c3","div.svelte-1cdh4c3{display:flex;flex-direction:column;left:0;position:absolute;top:0;z-index:99999999}div.svelte-1cdh4c3>*{min-height:0}")}const Dt=t=>({}),j=t=>({close:t[0]});function z(t){let e,o,n,i,a,g;const u=t[10].default,s=ot(u,t,t[9],j);return{c(){e=it("div"),s&&s.c(),L(e,"class",o=M(t[4].class)+" svelte-1cdh4c3")},m(c,r){W(c,e,r),s&&s.m(e,null),t[11](e),i=!0,a||(g=[S(dt.call(null,e,t[3])),S(mt.call(null,e,t[3])),st(e,"click_outside",t[0])],a=!0)},p(c,r){t=c,s&&s.p&&(!i||r&512)&&ct(s,u,t,t[9],i?at(u,t[9],r,Dt):lt(t[9]),j),(!i||r&16&&o!==(o=M(t[4].class)+" svelte-1cdh4c3"))&&L(e,"class",o)},i(c){i||(R(s,c),c&&rt(()=>{n||(n=D(e,B,{duration:200,easing:V},!0)),n.run(1)}),i=!0)},o(c){C(s,c),c&&(n||(n=D(e,B,{duration:200,easing:V},!1)),n.run(0)),i=!1},d(c){c&&I(e),s&&s.d(c),t[11](null),c&&n&&n.end(),a=!1,ft(g)}}}function Vt(t){let e,o,n=t[1]&&z(t);return{c(){n&&n.c(),e=G()},m(i,a){n&&n.m(i,a),W(i,e,a),o=!0},p(i,[a]){i[1]?n?(n.p(i,a),a&2&&R(n,1)):(n=z(i),n.c(),R(n,1),n.m(e.parentNode,e)):n&&(K(),C(n,1,1,()=>{n=null}),Z())},i(i){o||(R(n),o=!0)},o(i){C(n),o=!1},d(i){n&&n.d(i),i&&I(e)}}}function Bt(t,e,o){const n=["anchor","placement","offset","open","close"];let i=A(e,n),{$$slots:a={},$$scope:g}=e,{anchor:u=void 0}=e,{placement:s="bottom"}=e,{offset:c=[0,0]}=e,r=null,f;const m=$(),p=tt(),d=l=>o(1,r=l),y=()=>o(1,r=null);et(()=>{const l=(u?Promise.resolve():T()).then(()=>{if(!u)return()=>{};const h=u instanceof HTMLElement,_=({currentTarget:b})=>d(b);return h?(u.addEventListener("click",_),()=>u.removeEventListener("click",_)):u.$on("click",_)});return()=>l.then(h=>h())});function x(l){ut[l?"unshift":"push"](()=>{f=l,o(2,f)})}return t.$$set=l=>{e=P(P({},e),nt(l)),o(4,i=A(e,n)),"anchor"in l&&o(5,u=l.anchor),"placement"in l&&o(6,s=l.placement),"offset"in l&&o(7,c=l.offset),"$$scope"in l&&o(9,g=l.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&p(r?"open":"close"),t.$$.dirty&198&&T().then(()=>r&&ht(r,f,{platform:Mt,strategy:"absolute",placement:s.endsWith("-corner")?s.replace("-corner","").replace("left","start").replace("right","end"):s,middleware:[bt(({rects:l})=>{let[h,_]=c;return s.endsWith("-corner")&&/(left|right)/.test(s)&&(_+=(/left/.test(s)?-1:1)*l.floating.width),{mainAxis:h,crossAxis:_}}),Rt({apply:({availableHeight:l})=>{Object.assign(f.style,{maxHeight:`${l}px`})}}),wt({padding:12})]}).then(({x:l,y:h})=>Object.assign(f.style,{left:`${l}px`,top:`${h}px`})))},[y,r,f,m,i,u,s,c,d,g,a,x]}class Nt extends q{constructor(e){super(),J(this,e,Bt,Vt,Q,{anchor:5,placement:6,offset:7,open:8,close:0},St)}get open(){return this.$$.ctx[8]}get close(){return this.$$.ctx[0]}}export{Nt as F,mt as c,dt as p};
//# sourceMappingURL=Floating.7a2454b2.js.map