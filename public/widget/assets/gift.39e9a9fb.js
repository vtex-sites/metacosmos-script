import{S as F,i as P,e as j,a8 as y,j as d,L as q,n as h,l as I,T as L,u as w,w as b,U as N,r as g,v as Q,y as m,b8 as $,b9 as C,aI as A,X as S,A as R,$ as T,C as k,a0 as _,au as U,a1 as X}from"./app.js";import{A as G,C as v,a as B}from"./CameraFrameCapture.b6c23c51.js";import"./index.befe4af7.js";import"./checkmark-md.6daac746.js";function D(s){let t,a,i;var n=s[1];function p(e){var r;return{props:{intro:((r=e[0])==null?void 0:r.type)==="webcam",isGift:!0}}}return n&&(t=y(n,p(s)),t.$on("photo",s[3]),t.$on("ended",s[4])),{c(){t&&d(t.$$.fragment),a=q()},m(e,r){t&&h(t,e,r),I(e,a,r),i=!0},p(e,[r]){var u;const c={};if(r&1&&(c.intro=((u=e[0])==null?void 0:u.type)==="webcam"),n!==(n=e[1])){if(t){L();const f=t;w(f.$$.fragment,1,0,()=>{b(f,1)}),N()}n?(t=y(n,p(e)),t.$on("photo",e[3]),t.$on("ended",e[4]),d(t.$$.fragment),g(t.$$.fragment,1),h(t,a.parentNode,a)):t=null}else n&&t.$set(c)},i(e){i||(t&&g(t.$$.fragment,e),i=!0)},o(e){t&&w(t.$$.fragment,e),i=!1},d(e){e&&Q(a),t&&b(t,e)}}}function E(s,t,a){let i,n,p,e;m(s,$,o=>a(5,i=o)),m(s,C,o=>a(6,n=o)),m(s,A,o=>a(7,p=o)),m(s,S,o=>a(0,e=o));const r=R();let c;const u=async o=>{T(!0),k.face_analysis_started(),_(A,p=await B(o,l=>{_(C,n=l.percent,n),_($,i=l.step,i)}),p),U.resetQuiz(),k.face_analysis_finished()},f=({detail:o})=>e&&_(S,e.data=o,e),z=()=>r.push(X.GiftSelection);return s.$$.update=()=>{if(s.$$.dirty&1){e:{if(!e)break e;e.type==="photo"?a(1,c=G):e.type==="webcam"&&e.data?a(1,c=G):a(1,c=v)}}if(s.$$.dirty&1){e:{if(!e)break e;(e.type==="photo"||e.type==="webcam"&&e.data)&&u(e.data)}}},[e,c,r,f,z]}class H extends F{constructor(t){super(),P(this,t,E,D,j,{})}}const V=H;export{V as default};
//# sourceMappingURL=gift.39e9a9fb.js.map
