import{S as A,i as F,c as P,d as T,b8 as $e,J as ke,H as oe,E as le,e as k,g as q,f as V,h as n,A as U,L as ie,j as x,k as u,m as B,l as D,p as E,M as Le,N as ye,O as je,R as ze,t as j,n as z,o as $,q as G,r as ve,D as re,a2 as K,G as Me,T as I,b9 as b,B as Z,P as X,Q as Y,C as Ce,aw as Ve,aa as N,w as H,ba as Ze,y as se,aq as Se}from"./realidade-aumentada-app.js";import{B as J}from"./Button.27026b2a.js";const qe=""+new URL("frame.edadad5a.svg",import.meta.url).href;function Be(o){T(o,"svelte-b9kbd",'form.svelte-b9kbd.svelte-b9kbd{--tw-text-opacity:1;color:rgb(45 45 54/var(--tw-text-opacity));height:296px;position:relative;width:100%}form.active.svelte-b9kbd>div.svelte-b9kbd{opacity:0;pointer-events:none}form.svelte-b9kbd:hover rect{fill:#f3f3f3;stroke:#737376}label.svelte-b9kbd.svelte-b9kbd{--tw-bg-opacity:1;background-color:rgb(248 248 248/var(--tw-bg-opacity));border-radius:8px;cursor:pointer;display:block;height:100%;position:relative;width:100%}label.svelte-b9kbd svg{border-radius:inherit;height:100%;width:100%}label.svelte-b9kbd rect{fill:#f8f8f8;stroke:#dcdcdd;height:100%;left:0;position:absolute;top:0;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}label.active.svelte-b9kbd rect,label.svelte-b9kbd:hover rect{fill:#f3f3f3;stroke:#737376}label.svelte-b9kbd.svelte-b9kbd:after{--tw-translate-x:-50%;--tw-translate-y:-50%;content:"Drop file here to upload";font-size:16px;left:50%;line-height:24px;pointer-events:none;position:absolute;text-align:center;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}label.svelte-b9kbd.svelte-b9kbd:not(.active):after{--tw-content:"";content:var(--tw-content);opacity:0}label.svelte-b9kbd.svelte-b9kbd:not(.valid):after{content:"Unsupported file type"}label.svelte-b9kbd:not(.valid) rect{fill:#fcededf3;stroke:#e64f4f}div.svelte-b9kbd.svelte-b9kbd{--tw-translate-x:-50%;--tw-translate-y:-50%;left:50%;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}')}function Ge(o){let e,t,l,r,i,s,c,a,d,C,p;l=new $e({props:{src:qe}}),l.$on("load",o[11]);const m=o[8].default,L=ke(m,o,o[7],null);let f=[{class:a=oe("dropzone-form",o[1]&&"active")},o[6]],h={};for(let g=0;g<f.length;g+=1)h=le(h,f[g]);return{c(){e=k("form"),t=k("label"),q(l.$$.fragment),r=V(),i=k("input"),s=V(),c=k("div"),L&&L.c(),n(i,"type","file"),n(i,"accept",o[0]),i.hidden=!0,n(t,"class","tint-dropzone svelte-b9kbd"),U(t,"active",o[1]),U(t,"valid",o[2]),n(c,"class","svelte-b9kbd"),ie(e,h),U(e,"svelte-b9kbd",!0)},m(g,_){x(g,e,_),u(e,t),B(l,t,null),u(t,r),u(t,i),u(e,s),u(e,c),L&&L.m(c,null),d=!0,C||(p=[D(i,"input",o[12]),D(t,"dragenter",E(o[13])),D(t,"dragover",E(o[10])),D(t,"dragleave",E(o[14])),D(t,"dragenter",E(o[15])),D(t,"drop",E(o[16])),D(t,"drop",E(o[17])),D(e,"submit",E(o[9]))],C=!0)},p(g,[_]){(!d||_&1)&&n(i,"accept",g[0]),(!d||_&2)&&U(t,"active",g[1]),(!d||_&4)&&U(t,"valid",g[2]),L&&L.p&&(!d||_&128)&&Le(L,m,g,g[7],d?je(m,g[7],_,null):ye(g[7]),null),ie(e,h=ze(f,[(!d||_&2&&a!==(a=oe("dropzone-form",g[1]&&"active")))&&{class:a},_&64&&g[6]])),U(e,"svelte-b9kbd",!0)},i(g){d||(j(l.$$.fragment,g),j(L,g),d=!0)},o(g){z(l.$$.fragment,g),z(L,g),d=!1},d(g){g&&$(e),G(l),L&&L.d(g),C=!1,ve(p)}}}function De(o,e,t){let l;const r=["accept"];let i=re(e,r),{$$slots:s={},$$scope:c}=e,{accept:a="*"}=e,d=!1,C=!0;const p=K(),m=v=>Boolean(v&&[...v.items].every(w=>l.test(w.type))),L=v=>{const w=getComputedStyle(v).borderRadius.replace("px","");if(!w)return;const M=v.querySelector("rect");M.setAttribute("rx",w),M.setAttribute("ry",w)};function f(v){I.call(this,o,v)}function h(v){I.call(this,o,v)}const g=({detail:v})=>L(v),_=({currentTarget:v})=>p("input",v.files),y=()=>t(1,d=!0),W=()=>t(1,d=!1),ee=({dataTransfer:v})=>t(2,C=m(v)),O=()=>t(1,d=!1),te=({dataTransfer:v})=>m(v)&&p("input",v.files);return o.$$set=v=>{e=le(le({},e),Me(v)),t(6,i=re(e,r)),"accept"in v&&t(0,a=v.accept),"$$scope"in v&&t(7,c=v.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&(l=new RegExp(a)),o.$$.dirty&2&&!d&&t(2,C=!0)},[a,d,C,p,m,L,i,c,s,f,h,g,_,y,W,ee,O,te]}class ge extends A{constructor(e){super(),F(this,e,De,Ge,P,{accept:0},Be)}}function Ae(o){let e,t,l,r,i;return{c(){e=b("svg"),t=b("path"),l=b("path"),r=b("path"),i=b("path"),n(t,"fill-rule","evenodd"),n(t,"clip-rule","evenodd"),n(t,"d","M15.3549 24.0459C15.7691 24.0459 16.1049 24.3817 16.1049 24.7959C16.1049 27.946 16.692 31.652 18.0715 34.5405C19.4485 37.4239 21.5284 39.3469 24.5 39.3469C27.4717 39.3469 29.5515 37.4239 30.9285 34.5405C32.3081 31.652 32.8952 27.946 32.8952 24.7959C32.8952 24.3817 33.231 24.0459 33.6452 24.0459C34.0594 24.0459 34.3952 24.3817 34.3952 24.7959C34.3952 28.092 33.7867 32.0366 32.2821 35.187C30.775 38.3426 28.2822 40.8469 24.5 40.8469C20.7178 40.8469 18.225 38.3426 16.718 35.187C15.2134 32.0366 14.6049 28.092 14.6049 24.7959C14.6049 24.3817 14.9406 24.0459 15.3549 24.0459Z"),n(t,"fill","currentColor"),n(l,"fill-rule","evenodd"),n(l,"clip-rule","evenodd"),n(l,"d","M24.5 12.105C17.4584 12.105 11.75 17.8134 11.75 24.855C11.75 28.9092 13.6378 31.6367 16.5842 33.2398C16.9481 33.4378 17.0826 33.8932 16.8846 34.2571C16.6866 34.6209 16.2312 34.7554 15.8674 34.5574C12.4544 32.7005 10.25 29.4768 10.25 24.855C10.25 16.9849 16.6299 10.605 24.5 10.605C32.3701 10.605 38.75 16.9849 38.75 24.855C38.75 29.4768 36.5456 32.7005 33.1326 34.5574C32.7688 34.7554 32.3134 34.6209 32.1154 34.2571C31.9174 33.8932 32.0519 33.4378 32.4158 33.2398C35.3622 31.6367 37.25 28.9092 37.25 24.855C37.25 17.8134 31.5416 12.105 24.5 12.105Z"),n(l,"fill","currentColor"),n(r,"fill-rule","evenodd"),n(r,"clip-rule","evenodd"),n(r,"d","M19.7277 9.21536C18.5602 10.1302 17.8468 11.4409 17.8468 13.0968C17.8468 13.511 17.511 13.8468 17.0968 13.8468C16.6826 13.8468 16.3468 13.511 16.3468 13.0968C16.3468 10.9569 17.2907 9.2193 18.8026 8.03464C20.2991 6.86202 22.3225 6.25 24.5 6.25C26.6775 6.25 28.7009 6.86202 30.1975 8.03464C31.7094 9.2193 32.6533 10.9569 32.6533 13.0968C32.6533 13.511 32.3175 13.8468 31.9033 13.8468C31.489 13.8468 31.1533 13.511 31.1533 13.0968C31.1533 11.4409 30.4398 10.1302 29.2723 9.21536C28.0894 8.28851 26.4112 7.75 24.5 7.75C22.5889 7.75 20.9106 8.28851 19.7277 9.21536Z"),n(r,"fill","currentColor"),n(i,"fill-rule","evenodd"),n(i,"clip-rule","evenodd"),n(i,"d","M25.2045 17.1784C25.0792 17.0043 24.8851 16.8919 24.6717 16.8701C24.4582 16.8483 24.2456 16.919 24.0876 17.0643L24.0783 17.0729L24.0492 17.0996L23.9351 17.2036C23.8353 17.2943 23.6894 17.4264 23.5059 17.5908C23.1389 17.9196 22.6221 18.3773 22.0239 18.8921C20.8226 19.9258 19.311 21.1741 18.0273 22.0742C16.8052 22.9312 15.1372 23.5954 13.7333 24.0497C13.0391 24.2744 12.4245 24.443 11.9842 24.5553C11.7642 24.6113 11.5884 24.6532 11.4684 24.6809C11.4085 24.6947 11.3625 24.7049 11.3321 24.7116L11.2984 24.719L11.2905 24.7207L11.289 24.721C10.8837 24.8063 10.6242 25.204 10.7094 25.6093C10.7947 26.0147 11.1924 26.2741 11.5978 26.1889L11.4434 25.4549C11.5978 26.1889 11.5976 26.1889 11.5978 26.1889L11.6026 26.1878L11.6137 26.1855L11.6544 26.1766C11.6895 26.1689 11.7403 26.1575 11.8054 26.1425C11.9355 26.1125 12.1226 26.068 12.3548 26.0088C12.8187 25.8905 13.4645 25.7133 14.1951 25.4768C15.6409 25.009 17.4801 24.2899 18.8884 23.3024C20.2351 22.3582 21.7923 21.0703 23.0023 20.0291C23.6064 19.5092 24.1284 19.047 24.5008 18.7134C24.7879 19.0641 25.1896 19.5319 25.6894 20.0568C26.7547 21.1755 28.2856 22.5748 30.1216 23.6476C31.9528 24.7175 33.8344 25.3532 35.2501 25.7218C35.96 25.9066 36.5578 26.0255 36.9807 26.0986C37.1923 26.1351 37.3604 26.1603 37.4773 26.1764C37.5358 26.1845 37.5814 26.1904 37.6133 26.1943L37.6507 26.1987L37.6615 26.2L37.6648 26.2003L37.666 26.2005C37.6662 26.2005 37.6668 26.2006 37.7476 25.4549L37.666 26.2005C38.0778 26.2451 38.4486 25.9476 38.4933 25.5358C38.5379 25.1241 38.2404 24.7541 37.8288 24.7093L37.8229 24.7087L37.7962 24.7055C37.7716 24.7024 37.7335 24.6976 37.6828 24.6906C37.5814 24.6765 37.43 24.654 37.2361 24.6205C36.848 24.5534 36.2916 24.4429 35.628 24.2702C34.2967 23.9236 32.5545 23.3318 30.8784 22.3524C29.2072 21.3759 27.7859 20.0832 26.7757 19.0224C26.2727 18.4942 25.8765 18.0286 25.6074 17.6968C25.4729 17.531 25.3703 17.3989 25.3023 17.3094C25.2683 17.2647 25.2429 17.2307 25.2265 17.2085L25.2086 17.1842L25.2045 17.1784Z"),n(i,"fill","currentColor"),n(e,"width","48"),n(e,"height","48"),n(e,"viewBox","0 0 48 48"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(s,c){x(s,e,c),u(e,t),u(e,l),u(e,r),u(e,i)},p:Z,i:Z,o:Z,d(s){s&&$(e)}}}class we extends A{constructor(e){super(),F(this,e,null,Ae,P,{})}}function Fe(o){let e,t,l,r,i,s,c;return{c(){e=b("svg"),t=b("path"),l=b("path"),r=b("path"),i=b("path"),s=b("path"),c=b("path"),n(t,"fill-rule","evenodd"),n(t,"clip-rule","evenodd"),n(t,"d","M23.9998 14.75C20.0098 14.75 16.75 18.0938 16.75 22.3077C16.75 24.5399 17.569 26.8001 18.9068 28.4931C20.2418 30.1827 22.0384 31.2459 23.9887 31.25C25.849 31.1905 27.6674 30.0614 29.0437 28.3323C30.4191 26.6043 31.2684 24.3765 31.2497 22.3145L31.2496 22.3077H31.2497C31.2497 18.1338 27.9874 14.75 23.9998 14.75ZM15.25 22.3077C15.25 17.3192 19.1285 13.25 23.9998 13.25C28.8725 13.25 32.7479 17.3625 32.7497 22.3042C32.771 24.7571 31.7744 27.3102 30.2173 29.2665C28.663 31.2192 26.4655 32.6772 24.0221 32.7497C24.0191 32.7498 24.0162 32.7498 24.0132 32.7499C24.0088 32.75 24.0043 32.75 23.9998 32.75C21.4701 32.75 19.2711 31.3735 17.7298 29.423C16.1887 27.4726 15.25 24.8867 15.25 22.3077Z"),n(t,"fill","currentColor"),n(l,"fill-rule","evenodd"),n(l,"clip-rule","evenodd"),n(l,"d","M16.1715 34.4213C15.8015 34.7129 15.75 34.9141 15.75 35C15.75 35.4142 15.4142 35.75 15 35.75C14.5858 35.75 14.25 35.4142 14.25 35C14.25 34.2575 14.7021 33.6695 15.243 33.2432C15.7924 32.8103 16.5409 32.4532 17.3989 32.1672C19.1227 31.5925 21.4565 31.25 24 31.25C26.5435 31.25 28.8773 31.5925 30.6011 32.1672C31.4591 32.4532 32.2076 32.8103 32.757 33.2432C33.2979 33.6695 33.75 34.2575 33.75 35C33.75 35.4142 33.4142 35.75 33 35.75C32.5858 35.75 32.25 35.4142 32.25 35C32.25 34.9141 32.1985 34.7129 31.8285 34.4213C31.467 34.1364 30.8975 33.8471 30.1268 33.5902C28.5933 33.079 26.4271 32.75 24 32.75C21.5729 32.75 19.4067 33.079 17.8732 33.5902C17.1025 33.8471 16.533 34.1364 16.1715 34.4213Z"),n(l,"fill","currentColor"),n(r,"fill-rule","evenodd"),n(r,"clip-rule","evenodd"),n(r,"d","M18.5278 7.99821C18.5288 8.41242 18.1938 8.74901 17.7796 8.75L16.6373 8.75273C13.9031 8.78494 12.9458 9.10084 11.9916 9.61117C10.9634 10.161 10.161 10.9634 9.61117 11.9916C9.07331 12.9973 8.75 14.007 8.75 17.116V17.7778C8.75 18.192 8.41421 18.5278 8 18.5278C7.58579 18.5278 7.25 18.192 7.25 17.7778V17.116C7.25 13.8854 7.58678 12.5962 8.28845 11.2842C8.9781 9.99463 9.99463 8.9781 11.2842 8.28845C12.5253 7.62471 13.7465 7.28641 16.6233 7.25279L16.6302 7.25271V7.25274L17.776 7.25C18.1902 7.24901 18.5268 7.584 18.5278 7.99821Z"),n(r,"fill","currentColor"),n(i,"fill-rule","evenodd"),n(i,"clip-rule","evenodd"),n(i,"d","M29.4722 7.99821C29.4712 8.41242 29.8062 8.74901 30.2204 8.75L31.3627 8.75273C34.0969 8.78494 35.0542 9.10084 36.0084 9.61117C37.0366 10.161 37.839 10.9634 38.3888 11.9916C38.9267 12.9973 39.25 14.007 39.25 17.116V17.7778C39.25 18.192 39.5858 18.5278 40 18.5278C40.4142 18.5278 40.75 18.192 40.75 17.7778V17.116C40.75 13.8854 40.4132 12.5962 39.7116 11.2842C39.0219 9.99463 38.0054 8.9781 36.7158 8.28845C35.4747 7.62471 34.2535 7.28641 31.3767 7.25279L31.3698 7.25271V7.25274L30.224 7.25C29.8098 7.24901 29.4732 7.584 29.4722 7.99821Z"),n(i,"fill","currentColor"),n(s,"fill-rule","evenodd"),n(s,"clip-rule","evenodd"),n(s,"d","M18.5278 40.0018C18.5288 39.5876 18.1938 39.251 17.7796 39.25L16.6373 39.2473C13.9031 39.2151 12.9458 38.8992 11.9916 38.3888C10.9634 37.839 10.161 37.0366 9.61117 36.0084C9.07331 35.0027 8.75 33.993 8.75 30.884V30.2222C8.75 29.808 8.41421 29.4722 8 29.4722C7.58579 29.4722 7.25 29.808 7.25 30.2222V30.884C7.25 34.1146 7.58678 35.4038 8.28845 36.7158C8.9781 38.0054 9.99463 39.0219 11.2842 39.7116C12.5253 40.3753 13.7465 40.7136 16.6233 40.7472L16.6302 40.7473V40.7473L17.776 40.75C18.1902 40.751 18.5268 40.416 18.5278 40.0018Z"),n(s,"fill","currentColor"),n(c,"fill-rule","evenodd"),n(c,"clip-rule","evenodd"),n(c,"d","M29.4722 40.0018C29.4712 39.5876 29.8062 39.251 30.2204 39.25L31.3627 39.2473C34.0969 39.2151 35.0542 38.8992 36.0084 38.3888C37.0366 37.839 37.839 37.0366 38.3888 36.0084C38.9267 35.0027 39.25 33.993 39.25 30.884V30.2222C39.25 29.808 39.5858 29.4722 40 29.4722C40.4142 29.4722 40.75 29.808 40.75 30.2222V30.884C40.75 34.1146 40.4132 35.4038 39.7116 36.7158C39.0219 38.0054 38.0054 39.0219 36.7158 39.7116C35.4747 40.3753 34.2535 40.7136 31.3767 40.7472L31.3698 40.7473V40.7473L30.224 40.75C29.8098 40.751 29.4732 40.416 29.4722 40.0018Z"),n(c,"fill","currentColor"),n(e,"width","48"),n(e,"height","48"),n(e,"viewBox","0 0 48 48"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(a,d){x(a,e,d),u(e,t),u(e,l),u(e,r),u(e,i),u(e,s),u(e,c)},p:Z,i:Z,o:Z,d(a){a&&$(e)}}}class _e extends A{constructor(e){super(),F(this,e,null,Fe,P,{})}}function Pe(o){let e,t,l,r,i,s,c,a,d,C;return{c(){e=b("svg"),t=b("path"),l=b("path"),r=b("path"),i=b("path"),s=b("path"),c=b("path"),a=b("path"),d=b("path"),C=b("path"),n(t,"fill-rule","evenodd"),n(t,"clip-rule","evenodd"),n(t,"d","M24 33.5C29.2467 33.5 33.5 29.2467 33.5 24C33.5 18.7533 29.2467 14.5 24 14.5C18.7533 14.5 14.5 18.7533 14.5 24C14.5 29.2467 18.7533 33.5 24 33.5ZM24 35C30.0751 35 35 30.0751 35 24C35 17.9249 30.0751 13 24 13C17.9249 13 13 17.9249 13 24C13 30.0751 17.9249 35 24 35Z"),n(t,"fill","currentColor"),n(l,"fill-rule","evenodd"),n(l,"clip-rule","evenodd"),n(l,"d","M37.9654 37.9653C37.6725 38.2582 37.1976 38.2582 36.9047 37.9653L32.6621 33.7226C32.3692 33.4297 32.3692 32.9549 32.6621 32.662C32.955 32.3691 33.4299 32.3691 33.7227 32.662L37.9654 36.9046C38.2583 37.1975 38.2583 37.6724 37.9654 37.9653Z"),n(l,"fill","currentColor"),n(r,"fill-rule","evenodd"),n(r,"clip-rule","evenodd"),n(r,"d","M15.3379 15.3378C15.0451 15.6307 14.5702 15.6307 14.2773 15.3378L10.0346 11.0952C9.74175 10.8023 9.74175 10.3274 10.0346 10.0345C10.3275 9.74164 10.8024 9.74164 11.0953 10.0345L15.3379 14.2772C15.6308 14.5701 15.6308 15.0449 15.3379 15.3378Z"),n(r,"fill","currentColor"),n(i,"fill-rule","evenodd"),n(i,"clip-rule","evenodd"),n(i,"d","M37.9654 10.0346C38.2583 10.3275 38.2583 10.8024 37.9654 11.0953L33.7228 15.3379C33.4299 15.6308 32.955 15.6308 32.6621 15.3379C32.3692 15.045 32.3692 14.5701 32.6621 14.2773L36.9047 10.0346C37.1976 9.74172 37.6725 9.74172 37.9654 10.0346Z"),n(i,"fill","currentColor"),n(s,"fill-rule","evenodd"),n(s,"clip-rule","evenodd"),n(s,"d","M15.338 32.6621C15.6308 32.9549 15.6308 33.4298 15.338 33.7227L11.0953 37.9654C10.8024 38.2582 10.3275 38.2582 10.0347 37.9654C9.74176 37.6725 9.74176 37.1976 10.0347 36.9047L14.2773 32.6621C14.5702 32.3692 15.0451 32.3692 15.338 32.6621Z"),n(s,"fill","currentColor"),n(c,"fill-rule","evenodd"),n(c,"clip-rule","evenodd"),n(c,"d","M43.75 24C43.75 24.4142 43.4142 24.75 43 24.75L37 24.75C36.5858 24.75 36.25 24.4142 36.25 24C36.25 23.5858 36.5858 23.25 37 23.25L43 23.25C43.4142 23.25 43.75 23.5858 43.75 24Z"),n(c,"fill","currentColor"),n(a,"fill-rule","evenodd"),n(a,"clip-rule","evenodd"),n(a,"d","M11.75 24C11.75 24.4142 11.4142 24.75 11 24.75L5 24.75C4.58579 24.75 4.25 24.4142 4.25 24C4.25 23.5858 4.58579 23.25 5 23.25L11 23.25C11.4142 23.25 11.75 23.5858 11.75 24Z"),n(a,"fill","currentColor"),n(d,"fill-rule","evenodd"),n(d,"clip-rule","evenodd"),n(d,"d","M24 4.25C24.4142 4.25 24.75 4.58579 24.75 5V11C24.75 11.4142 24.4142 11.75 24 11.75C23.5858 11.75 23.25 11.4142 23.25 11V5C23.25 4.58579 23.5858 4.25 24 4.25Z"),n(d,"fill","currentColor"),n(C,"fill-rule","evenodd"),n(C,"clip-rule","evenodd"),n(C,"d","M24 36.25C24.4142 36.25 24.75 36.5858 24.75 37V43C24.75 43.4142 24.4142 43.75 24 43.75C23.5858 43.75 23.25 43.4142 23.25 43V37C23.25 36.5858 23.5858 36.25 24 36.25Z"),n(C,"fill","currentColor"),n(e,"width","48"),n(e,"height","48"),n(e,"viewBox","0 0 48 48"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(p,m){x(p,e,m),u(e,t),u(e,l),u(e,r),u(e,i),u(e,s),u(e,c),u(e,a),u(e,d),u(e,C)},p:Z,i:Z,o:Z,d(p){p&&$(e)}}}class be extends A{constructor(e){super(),F(this,e,null,Pe,P,{})}}function Ee(o){let e,t,l,r,i,s,c;return{c(){e=b("svg"),t=b("path"),l=b("path"),r=b("path"),i=b("path"),s=b("path"),c=b("path"),n(t,"fill-rule","evenodd"),n(t,"clip-rule","evenodd"),n(t,"d","M24 21.75C22.7573 21.75 21.75 22.7573 21.75 24C21.75 25.2427 22.7573 26.25 24 26.25C25.2426 26.25 26.25 25.2427 26.25 24C26.25 22.7573 25.2426 21.75 24 21.75ZM20.25 24C20.25 21.9289 21.9289 20.25 24 20.25C26.071 20.25 27.75 21.9289 27.75 24C27.75 26.0711 26.071 27.75 24 27.75C21.9289 27.75 20.25 26.0711 20.25 24Z"),n(t,"fill","currentColor"),n(l,"fill-rule","evenodd"),n(l,"clip-rule","evenodd"),n(l,"d","M14.7932 24C16.0984 27.6199 19.7136 30.25 24 30.25C28.2864 30.25 31.9015 27.6199 33.2067 24C31.9015 20.3801 28.2864 17.75 24 17.75C19.7136 17.75 16.0984 20.3801 14.7932 24ZM13.2876 23.7655C14.7273 19.3915 18.9935 16.25 24 16.25C29.0065 16.25 33.2727 19.3916 34.7124 23.7655C34.7625 23.9178 34.7625 24.0822 34.7124 24.2345C33.2727 28.6085 29.0064 31.75 24 31.75C18.9935 31.75 14.7273 28.6085 13.2876 24.2345C13.2375 24.0822 13.2375 23.9178 13.2876 23.7655Z"),n(l,"fill","currentColor"),n(r,"fill-rule","evenodd"),n(r,"clip-rule","evenodd"),n(r,"d","M18.5278 7.99821C18.5288 8.41242 18.1938 8.74901 17.7796 8.75L16.6373 8.75273C13.9031 8.78494 12.9458 9.10084 11.9916 9.61117C10.9634 10.161 10.161 10.9634 9.61117 11.9916C9.07331 12.9973 8.75 14.007 8.75 17.116V17.7778C8.75 18.192 8.41421 18.5278 8 18.5278C7.58579 18.5278 7.25 18.192 7.25 17.7778V17.116C7.25 13.8854 7.58678 12.5962 8.28845 11.2842C8.9781 9.99463 9.99463 8.9781 11.2842 8.28845C12.5253 7.62471 13.7465 7.28641 16.6233 7.25279L16.6302 7.25271V7.25274L17.776 7.25C18.1902 7.24901 18.5268 7.584 18.5278 7.99821Z"),n(r,"fill","currentColor"),n(i,"fill-rule","evenodd"),n(i,"clip-rule","evenodd"),n(i,"d","M29.4722 7.99821C29.4712 8.41242 29.8062 8.74901 30.2204 8.75L31.3627 8.75273C34.0969 8.78494 35.0542 9.10084 36.0084 9.61117C37.0366 10.161 37.839 10.9634 38.3888 11.9916C38.9267 12.9973 39.25 14.007 39.25 17.116V17.7778C39.25 18.192 39.5858 18.5278 40 18.5278C40.4142 18.5278 40.75 18.192 40.75 17.7778V17.116C40.75 13.8854 40.4132 12.5962 39.7116 11.2842C39.0219 9.99463 38.0054 8.9781 36.7158 8.28845C35.4747 7.62471 34.2535 7.28641 31.3767 7.25279L31.3698 7.25271V7.25274L30.224 7.25C29.8098 7.24901 29.4732 7.584 29.4722 7.99821Z"),n(i,"fill","currentColor"),n(s,"fill-rule","evenodd"),n(s,"clip-rule","evenodd"),n(s,"d","M18.5278 40.0018C18.5288 39.5876 18.1938 39.251 17.7796 39.25L16.6373 39.2473C13.9031 39.2151 12.9458 38.8992 11.9916 38.3888C10.9634 37.839 10.161 37.0366 9.61117 36.0084C9.07331 35.0027 8.75 33.993 8.75 30.884V30.2222C8.75 29.808 8.41421 29.4722 8 29.4722C7.58579 29.4722 7.25 29.808 7.25 30.2222V30.884C7.25 34.1146 7.58678 35.4038 8.28845 36.7158C8.9781 38.0054 9.99463 39.0219 11.2842 39.7116C12.5253 40.3753 13.7465 40.7136 16.6233 40.7472L16.6302 40.7473V40.7473L17.776 40.75C18.1902 40.751 18.5268 40.416 18.5278 40.0018Z"),n(s,"fill","currentColor"),n(c,"fill-rule","evenodd"),n(c,"clip-rule","evenodd"),n(c,"d","M29.4722 40.0018C29.4712 39.5876 29.8062 39.251 30.2204 39.25L31.3627 39.2473C34.0969 39.2151 35.0542 38.8992 36.0084 38.3888C37.0366 37.839 37.839 37.0366 38.3888 36.0084C38.9267 35.0027 39.25 33.993 39.25 30.884V30.2222C39.25 29.808 39.5858 29.4722 40 29.4722C40.4142 29.4722 40.75 29.808 40.75 30.2222V30.884C40.75 34.1146 40.4132 35.4038 39.7116 36.7158C39.0219 38.0054 38.0054 39.0219 36.7158 39.7116C35.4747 40.3753 34.2535 40.7136 31.3767 40.7472L31.3698 40.7473V40.7473L30.224 40.75C29.8098 40.751 29.4732 40.416 29.4722 40.0018Z"),n(c,"fill","currentColor"),n(e,"width","48"),n(e,"height","48"),n(e,"viewBox","0 0 48 48"),n(e,"fill","none"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(a,d){x(a,e,d),u(e,t),u(e,l),u(e,r),u(e,i),u(e,s),u(e,c)},p:Z,i:Z,o:Z,d(a){a&&$(e)}}}class xe extends A{constructor(e){super(),F(this,e,null,Ee,P,{})}}const He=()=>matchMedia("(any-hover: hover)").matches,Re=()=>/Android/i.test(navigator.userAgent),Ue=()=>He()&&!Re();function Ie(o){T(o,"svelte-1l0xjrk","article.svelte-1l0xjrk.svelte-1l0xjrk,section.svelte-1l0xjrk.svelte-1l0xjrk{align-items:center;display:flex;flex-direction:column}article.svelte-1l0xjrk.svelte-1l0xjrk{justify-content:center}h1.svelte-1l0xjrk.svelte-1l0xjrk{font-size:16px;line-height:24px;margin-bottom:20px}@media(min-width:768px){h1.svelte-1l0xjrk.svelte-1l0xjrk{font-size:20px;line-height:28px}}.tips-container.svelte-1l0xjrk.svelte-1l0xjrk{display:grid;gap:16px;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:24px}.tip.svelte-1l0xjrk.svelte-1l0xjrk{align-items:center;display:flex;flex-direction:column;font-size:14px;line-height:20px;margin-bottom:4px;width:120px}.tip.svelte-1l0xjrk svg{--tw-text-opacity:1;color:rgb(22 22 26/var(--tw-text-opacity))}.tip.svelte-1l0xjrk span.svelte-1l0xjrk{margin-top:4px}form.svelte-1l0xjrk.svelte-1l0xjrk,form.svelte-1l0xjrk .buttons.svelte-1l0xjrk{display:flex!important;flex-direction:column!important;margin-top:0!important;max-width:278px!important;width:100%!important}form.svelte-1l0xjrk .buttons.svelte-1l0xjrk button,form.svelte-1l0xjrk .buttons.svelte-1l0xjrk label{width:100%}.tint-camera-or-photo.svelte-1l0xjrk .primary{margin-bottom:12px}.tint-camera-or-photo.svelte-1l0xjrk .secondary{margin-bottom:24px}form.svelte-1l0xjrk p.svelte-1l0xjrk{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity));cursor:pointer;font-size:14px;font-weight:700;line-height:20px;opacity:.6;text-align:center}")}function ae(o,e,t){const l=o.slice();return l[12]=e[t],l}function ce(o){let e,t,l,r,i=o[12].title+"",s,c,a;var d=o[12].svg;function C(p){return{}}return d&&(t=N(d,C())),{c(){e=k("div"),t&&q(t.$$.fragment),l=V(),r=k("span"),s=H(i),c=V(),n(r,"class","svelte-1l0xjrk"),n(e,"class","tip svelte-1l0xjrk")},m(p,m){x(p,e,m),t&&B(t,e,null),u(e,l),u(e,r),u(r,s),u(e,c),a=!0},p(p,m){if(d!==(d=p[12].svg)){if(t){X();const L=t;z(L.$$.fragment,1,0,()=>{G(L,1)}),Y()}d?(t=N(d,C()),q(t.$$.fragment),j(t.$$.fragment,1),B(t,e,l)):t=null}},i(p){a||(t&&j(t.$$.fragment,p),a=!0)},o(p){t&&z(t.$$.fragment,p),a=!1},d(p){p&&$(e),t&&G(t)}}}function Xe(o){let e;return{c(){e=H("Live camera")},m(t,l){x(t,e,l)},d(t){t&&$(e)}}}function Ye(o){let e,t;return e=new J({props:{as:"label",variant:o[3]?"primary":"secondary",size:"lg",$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){q(e.$$.fragment)},m(l,r){B(e,l,r),t=!0},p(l,r){const i={};r&32768&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Ne(o){let e,t;return e=new J({props:{variant:o[3]?"primary":"secondary",size:"lg",$$slots:{default:[Te]},$$scope:{ctx:o}}}),e.$on("click",o[7]),e.$on("click",o[8]),{c(){q(e.$$.fragment)},m(l,r){B(e,l,r),t=!0},p(l,r){const i={};r&32768&&(i.$$scope={dirty:r,ctx:l}),e.$set(i)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function Oe(o){let e,t,l,r;return{c(){e=H(`Upload photo
          `),t=k("input"),n(t,"type","file"),n(t,"accept","image/*"),t.hidden=!0},m(i,s){x(i,e,s),x(i,t,s),l||(r=[D(t,"click",o[9]),D(t,"input",o[10])],l=!0)},p:Z,d(i){i&&$(e),i&&$(t),l=!1,ve(r)}}}function Te(o){let e;return{c(){e=H("Upload photo")},m(t,l){x(t,e,l)},d(t){t&&$(e)}}}function de(o){let e,t,l;return{c(){e=k("p"),e.textContent="Continue with uploaded photo",n(e,"class","svelte-1l0xjrk")},m(r,i){x(r,e,i),t||(l=D(e,"click",o[11]),t=!0)},p:Z,d(r){r&&$(e),t=!1,l()}}}function Je(o){let e,t,l,r,i,s,c,a,d,C,p,m,L,f,h,g,_=o[1],y=[];for(let w=0;w<_.length;w+=1)y[w]=ce(ae(o,_,w));const W=w=>z(y[w],1,1,()=>{y[w]=null});d=new J({props:{variant:o[3]?"secondary":"primary",size:"lg",$$slots:{default:[Xe]},$$scope:{ctx:o}}}),d.$on("click",o[6]);const ee=[Ne,Ye],O=[];function te(w,M){return w[2]?0:1}p=te(o),m=O[p]=ee[p](o);let v=o[0]&&de(o);return{c(){e=k("section"),t=k("article"),l=k("h1"),l.textContent="Tips for virtual try-on",r=V(),i=k("div");for(let w=0;w<y.length;w+=1)y[w].c();s=V(),c=k("form"),a=k("div"),q(d.$$.fragment),C=V(),m.c(),L=V(),v&&v.c(),n(l,"class","svelte-1l0xjrk"),n(i,"class","tips-container svelte-1l0xjrk"),n(t,"class","svelte-1l0xjrk"),n(a,"class","buttons svelte-1l0xjrk"),n(a,"style",o[3]?"flex-direction: column-reverse !important;":""),n(c,"class","svelte-1l0xjrk"),n(e,"class","tint-camera-or-photo svelte-1l0xjrk")},m(w,M){x(w,e,M),u(e,t),u(t,l),u(t,r),u(t,i);for(let R=0;R<y.length;R+=1)y[R].m(i,null);u(e,s),u(e,c),u(c,a),B(d,a,null),u(a,C),O[p].m(a,null),u(c,L),v&&v.m(c,null),f=!0,h||(g=D(c,"submit",E(o[5])),h=!0)},p(w,[M]){if(M&2){_=w[1];let S;for(S=0;S<_.length;S+=1){const ne=ae(w,_,S);y[S]?(y[S].p(ne,M),j(y[S],1)):(y[S]=ce(ne),y[S].c(),j(y[S],1),y[S].m(i,null))}for(X(),S=_.length;S<y.length;S+=1)W(S);Y()}const R={};M&32768&&(R.$$scope={dirty:M,ctx:w}),d.$set(R),m.p(w,M),w[0]?v?v.p(w,M):(v=de(w),v.c(),v.m(c,null)):v&&(v.d(1),v=null)},i(w){if(!f){for(let M=0;M<_.length;M+=1)j(y[M]);j(d.$$.fragment,w),j(m),f=!0}},o(w){y=y.filter(Boolean);for(let M=0;M<y.length;M+=1)z(y[M]);z(d.$$.fragment,w),z(m),f=!1},d(w){w&&$(e),Ce(y,w),G(d),O[p].d(),v&&v.d(),h=!1,g()}}}function Qe(o,e,t){let{showSkip:l=!1}=e;const r=[{title:"Face uncovered",svg:we},{title:"Head in the frame",svg:_e},{title:"Look straight",svg:xe},{title:"Even lighting",svg:be}],i=Ue(),s=Ve(),c=K();function a(h){I.call(this,o,h)}const d=()=>Ze().then(h=>c("webcam",h)),C=()=>c("dnd"),p=()=>se.upload_photo_clicked(),m=()=>se.upload_photo_clicked(),L=({currentTarget:h})=>c("photo",h.files[0]),f=()=>c("skip");return o.$$set=h=>{"showSkip"in h&&t(0,l=h.showSkip)},[l,r,i,s,c,a,d,C,p,m,L,f]}class Q extends A{constructor(e){super(),F(this,e,Qe,Je,P,{showSkip:0},Ie)}}function Ke(o){T(o,"svelte-12oxi6q","section.svelte-12oxi6q{align-items:center;display:flex;flex-direction:column;gap:16px;height:100%;justify-content:center;width:100%}h2.svelte-12oxi6q{font-size:16px;line-height:24px}@media(min-width:768px){h2.svelte-12oxi6q{font-size:20px;line-height:28px}}div.svelte-12oxi6q{align-items:center;display:flex;flex-direction:column;gap:16px;white-space:nowrap}")}function We(o){let e,t,l,r;return{c(){e=H(`Add photo
        `),t=k("input"),n(t,"type","file"),n(t,"accept","image/*"),t.hidden=!0},m(i,s){x(i,e,s),x(i,t,s),l||(r=D(t,"input",o[1]),l=!0)},p:Z,d(i){i&&$(e),i&&$(t),l=!1,r()}}}function et(o){let e,t,l,r,i;return t=new J({props:{as:"label",size:"lg",$$slots:{default:[We]},$$scope:{ctx:o}}}),{c(){e=k("div"),q(t.$$.fragment),l=V(),r=k("span"),r.textContent="or drag it here",n(e,"class","svelte-12oxi6q")},m(s,c){x(s,e,c),B(t,e,null),u(e,l),u(e,r),i=!0},p(s,c){const a={};c&8&&(a.$$scope={dirty:c,ctx:s}),t.$set(a)},i(s){i||(j(t.$$.fragment,s),i=!0)},o(s){z(t.$$.fragment,s),i=!1},d(s){s&&$(e),G(t)}}}function tt(o){let e,t,l,r,i;return r=new ge({props:{accept:"image/*",$$slots:{default:[et]},$$scope:{ctx:o}}}),r.$on("input",o[2]),{c(){e=k("section"),t=k("h2"),t.textContent="Upload photo",l=V(),q(r.$$.fragment),n(t,"class","svelte-12oxi6q"),n(e,"class","svelte-12oxi6q")},m(s,c){x(s,e,c),u(e,t),u(e,l),B(r,e,null),i=!0},p(s,[c]){const a={};c&8&&(a.$$scope={dirty:c,ctx:s}),r.$set(a)},i(s){i||(j(r.$$.fragment,s),i=!0)},o(s){z(r.$$.fragment,s),i=!1},d(s){s&&$(e),G(r)}}}function lt(o){const e=K();return[e,({currentTarget:r})=>e("photo",r.files[0]),({detail:r})=>e("photo",r[0])]}class nt extends A{constructor(e){super(),F(this,e,lt,tt,P,{},Ke)}}function ot(o){T(o,"svelte-1mtdeew",".photo-gift.svelte-1mtdeew.svelte-1mtdeew{width:100%}@media(min-width:768px){.photo-gift.svelte-1mtdeew.svelte-1mtdeew{width:auto}}.photo-gift.svelte-1mtdeew form.dropzone-form{margin-top:48px;width:100%}@media(min-width:768px){.photo-gift.svelte-1mtdeew form.dropzone-form{width:656px}}.photo-gift.svelte-1mtdeew form.dropzone-form>div{align-items:center;display:flex;flex-direction:column;width:100%}@media(min-width:768px){.photo-gift.svelte-1mtdeew form.dropzone-form>div{width:auto}}.photo-gift.svelte-1mtdeew form.dropzone-form>label{height:72%}@media(min-width:768px){.photo-gift.svelte-1mtdeew form.dropzone-form>label{height:100%}}.add-photo{position:absolute;top:120px;width:105%}@media(min-width:768px){.add-photo{position:relative;top:auto;width:auto}}form p.svelte-1mtdeew.svelte-1mtdeew{--tw-text-opacity:1;color:rgb(26 22 22/var(--tw-text-opacity));font-size:16px;font-weight:700;line-height:24px;margin-top:-88px;opacity:.5}@media(min-width:768px){form p.svelte-1mtdeew.svelte-1mtdeew{margin-top:28px}}ul.svelte-1mtdeew.svelte-1mtdeew{display:grid;gap:0;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));margin-top:8px;opacity:.5;row-gap:16px}@media(min-width:768px){ul.svelte-1mtdeew.svelte-1mtdeew{grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr));margin-top:16px}}ul.svelte-1mtdeew>li.svelte-1mtdeew{align-items:center;display:flex;flex-direction:column;width:111.6px}ul.svelte-1mtdeew>li.svelte-1mtdeew svg{--tw-text-opacity:1;color:rgb(22 22 26/var(--tw-text-opacity));height:36px;margin-bottom:4px;width:36px}ul.svelte-1mtdeew>li.svelte-1mtdeew{font-size:12px;line-height:16px}hr.svelte-1mtdeew.svelte-1mtdeew{background-color:#0000001a;display:none;height:1px;margin-bottom:32px;margin-top:28px;width:530px}@media(min-width:768px){hr.svelte-1mtdeew.svelte-1mtdeew{display:block}}.dnd-text.svelte-1mtdeew.svelte-1mtdeew{--tw-text-opacity:1;color:rgb(45 45 54/var(--tw-text-opacity));display:none;font-size:14px;font-weight:400;line-height:20px;margin-bottom:40px;margin-top:4px;opacity:1}@media(min-width:768px){.dnd-text.svelte-1mtdeew.svelte-1mtdeew{display:block}}")}function pe(o,e,t){const l=o.slice();return l[3]=e[t],l}function fe(o){let e,t,l,r,i=o[3].title+"",s,c,a;var d=o[3].svg;function C(p){return{props:{fill:"#ff0000"}}}return d&&(t=N(d,C())),{c(){e=k("li"),t&&q(t.$$.fragment),l=V(),r=k("span"),s=H(i),c=V(),n(e,"class","svelte-1mtdeew")},m(p,m){x(p,e,m),t&&B(t,e,null),u(e,l),u(e,r),u(r,s),u(e,c),a=!0},p(p,m){if(d!==(d=p[3].svg)){if(t){X();const L=t;z(L.$$.fragment,1,0,()=>{G(L,1)}),Y()}d?(t=N(d,C()),q(t.$$.fragment),j(t.$$.fragment,1),B(t,e,l)):t=null}},i(p){a||(t&&j(t.$$.fragment,p),a=!0)},o(p){t&&z(t.$$.fragment,p),a=!1},d(p){p&&$(e),t&&G(t)}}}function it(o){let e,t,l,r;return{c(){e=H(`Add photo
      `),t=k("input"),n(t,"type","file"),n(t,"accept","image/*"),t.hidden=!0},m(i,s){x(i,e,s),x(i,t,s),l||(r=D(t,"input",o[1]),l=!0)},p:Z,d(i){i&&$(e),i&&$(t),l=!1,r()}}}function rt(o){let e,t,l,r,i,s,c,a,d,C,p=ue,m=[];for(let f=0;f<p.length;f+=1)m[f]=fe(pe(o,p,f));const L=f=>z(m[f],1,1,()=>{m[f]=null});return c=new J({props:{size:"lg",as:"label",class:"add-photo",$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){e=k("p"),e.textContent="Tips for photo",t=V(),l=k("ul");for(let f=0;f<m.length;f+=1)m[f].c();r=V(),i=k("hr"),s=V(),q(c.$$.fragment),a=V(),d=k("p"),d.textContent="or drop file here to upload",n(e,"class","svelte-1mtdeew"),n(l,"class","svelte-1mtdeew"),n(i,"class","svelte-1mtdeew"),n(d,"class","dnd-text svelte-1mtdeew")},m(f,h){x(f,e,h),x(f,t,h),x(f,l,h);for(let g=0;g<m.length;g+=1)m[g].m(l,null);x(f,r,h),x(f,i,h),x(f,s,h),B(c,f,h),x(f,a,h),x(f,d,h),C=!0},p(f,h){if(h&0){p=ue;let _;for(_=0;_<p.length;_+=1){const y=pe(f,p,_);m[_]?(m[_].p(y,h),j(m[_],1)):(m[_]=fe(y),m[_].c(),j(m[_],1),m[_].m(l,null))}for(X(),_=p.length;_<m.length;_+=1)L(_);Y()}const g={};h&64&&(g.$$scope={dirty:h,ctx:f}),c.$set(g)},i(f){if(!C){for(let h=0;h<p.length;h+=1)j(m[h]);j(c.$$.fragment,f),C=!0}},o(f){m=m.filter(Boolean);for(let h=0;h<m.length;h+=1)z(m[h]);z(c.$$.fragment,f),C=!1},d(f){f&&$(e),f&&$(t),f&&$(l),Ce(m,f),f&&$(r),f&&$(i),f&&$(s),G(c,f),f&&$(a),f&&$(d)}}}function st(o){let e,t,l;return t=new ge({props:{accept:"image/*",$$slots:{default:[rt]},$$scope:{ctx:o}}}),t.$on("input",o[2]),{c(){e=k("div"),q(t.$$.fragment),n(e,"class","photo-gift svelte-1mtdeew")},m(r,i){x(r,e,i),B(t,e,null),l=!0},p(r,[i]){const s={};i&64&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){l||(j(t.$$.fragment,r),l=!0)},o(r){z(t.$$.fragment,r),l=!1},d(r){r&&$(e),G(t)}}}const ue=[{title:"Face uncovered",svg:we},{title:"Head in the frame",svg:_e},{title:"Look straight",svg:xe},{title:"Even lighting",svg:be}];function at(o){const e=K();return[e,({currentTarget:r})=>e("photo",r.files[0]),({detail:r})=>e("photo",r[0])]}class me extends A{constructor(e){super(),F(this,e,at,st,P,{},ot)}}function ct(o){T(o,"svelte-xdkt05","div.svelte-xdkt05{align-items:center;display:flex;flex-direction:column;height:100%;position:relative;width:100%}div.svelte-xdkt05>.back{left:-24px;position:absolute;top:-16px}@media(min-width:768px){div.svelte-xdkt05>.back{left:-56px;top:-16px}}")}function he(o){let e,t;return e=new Se({props:{class:"back",icon:"arrow-left",size:"sm"}}),e.$on("click",o[3]),{c(){q(e.$$.fragment)},m(l,r){B(e,l,r),t=!0},p:Z,i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){G(e,l)}}}function dt(o){let e,t,l,r,i=o[2]!==Q&&!o[1]&&he(o);var s=o[2];function c(a){return{props:{showSkip:a[0],isGift:a[1]}}}return s&&(l=N(s,c(o)),l.$on("dnd",o[4]),l.$on("webcam",o[5]),l.$on("photo",o[6]),l.$on("skip",o[7])),{c(){e=k("div"),i&&i.c(),t=V(),l&&q(l.$$.fragment),n(e,"class","svelte-xdkt05")},m(a,d){x(a,e,d),i&&i.m(e,null),u(e,t),l&&B(l,e,null),r=!0},p(a,[d]){a[2]!==Q&&!a[1]?i?(i.p(a,d),d&6&&j(i,1)):(i=he(a),i.c(),j(i,1),i.m(e,t)):i&&(X(),z(i,1,1,()=>{i=null}),Y());const C={};if(d&1&&(C.showSkip=a[0]),d&2&&(C.isGift=a[1]),s!==(s=a[2])){if(l){X();const p=l;z(p.$$.fragment,1,0,()=>{G(p,1)}),Y()}s?(l=N(s,c(a)),l.$on("dnd",a[4]),l.$on("webcam",a[5]),l.$on("photo",a[6]),l.$on("skip",a[7]),q(l.$$.fragment),j(l.$$.fragment,1),B(l,e,null)):l=null}else s&&l.$set(C)},i(a){r||(j(i),l&&j(l.$$.fragment,a),r=!0)},o(a){z(i),l&&z(l.$$.fragment,a),r=!1},d(a){a&&$(e),i&&i.d(),l&&G(l)}}}function pt(o,e,t){let{showSkip:l=!1}=e,{isGift:r=!1}=e,i=r?me:Q;const s=()=>t(2,i=r?me:Q),c=()=>t(2,i=nt);function a(p){I.call(this,o,p)}function d(p){I.call(this,o,p)}function C(p){I.call(this,o,p)}return o.$$set=p=>{"showSkip"in p&&t(0,l=p.showSkip),"isGift"in p&&t(1,r=p.isGift)},[l,r,i,s,c,a,d,C]}class mt extends A{constructor(e){super(),F(this,e,pt,dt,P,{showSkip:0,isGift:1},ct)}}export{mt as I};
//# sourceMappingURL=ImageSourceSelector.ce406806.js.map