var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,u;function l(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function a(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function f(t){let n;return a(t,(t=>n=t))(),n}function d(t,n,e){t.$$.on_destroy.push(a(n,e))}function g(t,n,e){return t.set(e),n}function h(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function _(t,n){t.value=null==n?"":n}function k(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function H(t){u=t}function E(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const S=[],P=[],W=[],O=[],U=Promise.resolve();let q=!1;function C(t){W.push(t)}const j=new Set;let L=0;function M(){const t=u;do{for(;L<S.length;){const t=S[L];L++,H(t),N(t.$$)}for(H(null),S.length=0,L=0;P.length;)P.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];j.has(n)||(j.add(n),n())}W.length=0}while(S.length);for(;O.length;)O.pop()();q=!1,j.clear(),H(t)}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const T=new Set;let A;function B(){A={r:0,c:[],p:A}}function D(){A.r||r(A.c),A=A.p}function I(t,n){t&&t.i&&(T.delete(t),t.i(n))}function z(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),A.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t){t&&t.c()}function K(t,n,o,s){const{fragment:i,on_mount:u,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,o),s||C((()=>{const n=u.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(C)}function R(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(S.push(t),q||(q=!0,U.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,e,c,s,i,l,a,f=[-1]){const d=u;H(n);const g=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};a&&a(g.root);let h=!1;if(g.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),h&&V(n,t)),e})):[],g.update(),h=!0,r(g.before_update),g.fragment=!!s&&s(g.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);g.fragment&&g.fragment.l(t),t.forEach(m)}else g.fragment&&g.fragment.c();e.intro&&I(n.$$.fragment),K(n,e.target,e.anchor,e.customElement),M()}H(d)}class G{$destroy(){R(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];var Q={};const X=function(n,e){const o="undefined"!=typeof localStorage;function r(t,n){o&&localStorage.setItem(t,JSON.stringify(n))}if(!Q[n]){const c=function(n,e=t){let o;const r=new Set;function c(t){if(s(n,t)&&(n=t,o)){const t=!Y.length;for(const t of r)t[1](),Y.push(t,n);if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const u=[s,i];return r.add(u),1===r.size&&(o=e(c)||t),s(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}(e,(t=>{const e=o?localStorage.getItem(n):null;if(e&&t(JSON.parse(e)),o){const e=e=>{e.key===n&&t(e.newValue?JSON.parse(e.newValue):null)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}})),{subscribe:i,set:u}=c;Q[n]={set(t){r(n,t),u(t)},update(t){const e=t(f(c));r(n,e),u(e)},subscribe:i}}return Q[n]}("config",{title:"Hello, World!",bgPath:"./assets/dark.png",services:[{name:"Discord",url:"#",iconUrl:"assets/discord.png",iconW:40,iconH:32},{name:"Pixiv",url:"https://pixiv.net",iconUrl:"assets/pixiv.png",iconW:40,iconH:40},{name:"YouTube",url:"https://youtube.com",iconUrl:"assets/youtube.png",iconW:40,iconH:27},{name:"GitHub",url:"https://github.com",iconUrl:"assets/github.png",iconW:40,iconH:40}]});function Z(n){let e,o,r,c=n[0].title+"";return{c(){e=$("div"),o=$("p"),r=b(c),y(o,"class","svelte-ljx5sv"),y(e,"class","title svelte-ljx5sv")},m(t,n){p(t,e,n),h(e,o),h(o,r)},p(t,[n]){1&n&&c!==(c=t[0].title+"")&&w(r,c)},i:t,o:t,d(t){t&&m(e)}}}function tt(t,n,e){let o;return d(t,X,(t=>e(0,o=t))),[o]}class nt extends G{constructor(t){super(),F(this,t,tt,Z,s,{})}}function et(n){let e,o,r,c,s,i;return{c(){e=$("h1"),o=b(n[2]),r=b(":"),c=b(n[1]),s=b(":"),i=b(n[0]),y(e,"class","svelte-l3mpxp")},m(t,n){p(t,e,n),h(e,o),h(e,r),h(e,c),h(e,s),h(e,i)},p(t,[n]){4&n&&w(o,t[2]),2&n&&w(c,t[1]),1&n&&w(i,t[0])},i:t,o:t,d(t){t&&m(e)}}}function ot(t,n,e){let o,r,c,s=new Date;return E((()=>{const t=setInterval((()=>{e(3,s=new Date)}),1e3);return()=>{clearInterval(t)}})),t.$$.update=()=>{8&t.$$.dirty&&e(2,o=(s.getHours()<10?"0":"")+s.getHours()),8&t.$$.dirty&&e(1,r=(s.getMinutes()<10?"0":"")+s.getMinutes()),8&t.$$.dirty&&e(0,c=(s.getSeconds()<10?"0":"")+s.getSeconds())},[c,r,o,s]}class rt extends G{constructor(t){super(),F(this,t,ot,et,s,{})}}function ct(n){let e,o,r,c,s,i,u;return{c(){e=$("a"),o=$("div"),r=$("img"),s=v(),i=$("p"),u=b(n[0]),l(r.src,c=n[2])||y(r,"src",c),y(r,"width",n[3]),y(r,"height",n[4]),y(o,"class","button svelte-l6mapv"),y(e,"href",n[1])},m(t,n){p(t,e,n),h(e,o),h(o,r),h(o,s),h(o,i),h(i,u)},p(t,[n]){4&n&&!l(r.src,c=t[2])&&y(r,"src",c),8&n&&y(r,"width",t[3]),16&n&&y(r,"height",t[4]),1&n&&w(u,t[0]),2&n&&y(e,"href",t[1])},i:t,o:t,d(t){t&&m(e)}}}function st(t,n,e){let{name:o}=n,{url:r}=n,{iconUrl:c}=n,{iconW:s}=n,{iconH:i}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name),"url"in t&&e(1,r=t.url),"iconUrl"in t&&e(2,c=t.iconUrl),"iconW"in t&&e(3,s=t.iconW),"iconH"in t&&e(4,i=t.iconH)},[o,r,c,s,i]}class it extends G{constructor(t){super(),F(this,t,st,ct,s,{name:0,url:1,iconUrl:2,iconW:3,iconH:4})}}function ut(n){let e,o,c,s,i,u,l,a,f,d,g,b,w,k,H,E,S,P,W,O;return{c(){e=$("h2"),e.textContent="Settings",o=v(),c=$("div"),s=$("h3"),s.textContent="Title",i=v(),u=$("input"),l=v(),a=$("span"),a.textContent="OK",f=v(),d=$("hr"),g=v(),b=$("h3"),b.textContent="Background image",w=v(),k=$("small"),k.innerHTML='<a href="https://github.com/rvnpower/bnt/README.md#bg">Read about this</a>',H=v(),E=$("input"),S=v(),P=$("span"),P.textContent="OK",y(a,"class","confirm button svelte-cen74h"),y(P,"class","confirm button svelte-cen74h"),y(c,"class","settings svelte-cen74h")},m(t,r){p(t,e,r),p(t,o,r),p(t,c,r),h(c,s),h(c,i),h(c,u),_(u,n[0]),h(c,l),h(c,a),h(c,f),h(c,d),h(c,g),h(c,b),h(c,w),h(c,k),h(c,H),h(c,E),_(E,n[1]),h(c,S),h(c,P),W||(O=[x(u,"input",n[3]),x(a,"click",n[4]),x(E,"input",n[5]),x(P,"click",n[6])],W=!0)},p(t,[n]){1&n&&u.value!==t[0]&&_(u,t[0]),2&n&&E.value!==t[1]&&_(E,t[1])},i:t,o:t,d(t){t&&m(e),t&&m(o),t&&m(c),W=!1,r(O)}}}function lt(t,n,e){let o;d(t,X,(t=>e(2,o=t)));let r=o.title,c=o.bgPath;return[r,c,o,function(){r=this.value,e(0,r)},()=>{""===r&&e(0,r="Hello, World!"),g(X,o.title=r,o)},function(){c=this.value,e(1,c)},()=>{""===c&&e(1,c="./assets/dark.png"),g(X,o.bgPath=c,o)}]}class at extends G{constructor(t){super(),F(this,t,lt,ut,s,{})}}function ft(t,n,e){const o=t.slice();return o[3]=n[e],o}function dt(n){let e,o;return e=new at({}),{c(){J(e.$$.fragment)},m(t,n){K(e,t,n),o=!0},p:t,i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){R(e,t)}}}function gt(t){let n,e,o,r,c,s,i;e=new nt({}),r=new rt({});let u=t[1].services,l=[];for(let n=0;n<u.length;n+=1)l[n]=ht(ft(t,u,n));const a=t=>z(l[t],1,1,(()=>{l[t]=null}));return{c(){n=$("div"),J(e.$$.fragment),o=v(),J(r.$$.fragment),c=v(),s=$("div");for(let t=0;t<l.length;t+=1)l[t].c();y(n,"class","header flex-center svelte-10n6qx8"),y(s,"class","services svelte-10n6qx8")},m(t,u){p(t,n,u),K(e,n,null),h(n,o),K(r,n,null),p(t,c,u),p(t,s,u);for(let t=0;t<l.length;t+=1)l[t].m(s,null);i=!0},p(t,n){if(2&n){let e;for(u=t[1].services,e=0;e<u.length;e+=1){const o=ft(t,u,e);l[e]?(l[e].p(o,n),I(l[e],1)):(l[e]=ht(o),l[e].c(),I(l[e],1),l[e].m(s,null))}for(B(),e=u.length;e<l.length;e+=1)a(e);D()}},i(t){if(!i){I(e.$$.fragment,t),I(r.$$.fragment,t);for(let t=0;t<u.length;t+=1)I(l[t]);i=!0}},o(t){z(e.$$.fragment,t),z(r.$$.fragment,t),l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)z(l[t]);i=!1},d(t){t&&m(n),R(e),R(r),t&&m(c),t&&m(s),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(l,t)}}}function ht(t){let e,o;const r=[t[3]];let c={};for(let t=0;t<r.length;t+=1)c=n(c,r[t]);return e=new it({props:c}),{c(){J(e.$$.fragment)},m(t,n){K(e,t,n),o=!0},p(t,n){const o=2&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=n[c];if(i){for(const t in s)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(r,[(c=t[3],"object"==typeof c&&null!==c?c:{})]):{};var c;e.$set(o)},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){R(e,t)}}}function pt(t){let n,e,o,r,c,s,i,u,l,a,f=`url(${t[1].bgPath})`;const d=[gt,dt],g=[];function b(t,n){return t[0]?1:0}return s=b(t),i=g[s]=d[s](t),{c(){n=$("div"),e=$("div"),o=$("div"),r=$("button"),r.innerHTML='<img src="assets/gear.png" alt="Settings" width="40" height="40"/>',c=v(),i.c(),y(r,"class","settingsBtn svelte-10n6qx8"),y(o,"class","settings svelte-10n6qx8"),y(e,"class","interface svelte-10n6qx8"),y(n,"class","container flex-center svelte-10n6qx8"),k(n,"--bgPath",f,!1)},m(i,f){p(i,n,f),h(n,e),h(e,o),h(o,r),h(e,c),g[s].m(e,null),u=!0,l||(a=x(r,"click",t[2]),l=!0)},p(t,[o]){let r=s;s=b(t),s===r?g[s].p(t,o):(B(),z(g[r],1,1,(()=>{g[r]=null})),D(),i=g[s],i?i.p(t,o):(i=g[s]=d[s](t),i.c()),I(i,1),i.m(e,null)),2&o&&f!==(f=`url(${t[1].bgPath})`)&&k(n,"--bgPath",f,!1)},i(t){u||(I(i),u=!0)},o(t){z(i),u=!1},d(t){t&&m(n),g[s].d(),l=!1,a()}}}function mt(t,n,e){let o;d(t,X,(t=>e(1,o=t)));let r=!1;return[r,o,()=>e(0,r=!r)]}return new class extends G{constructor(t){super(),F(this,t,mt,pt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map