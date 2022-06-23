var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s,u;function l(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}function a(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function f(t){let n;return a(t,(t=>n=t))(),n}function d(t,n,e){t.$$.on_destroy.push(a(n,e))}function p(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function x(t,n){t.value=null==n?"":n}function _(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function H(t){u=t}function k(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const E=[],S=[],W=[],U=[],P=Promise.resolve();let j=!1;function L(t){W.push(t)}const M=new Set;let N=0;function O(){const t=u;do{for(;N<E.length;){const t=E[N];N++,H(t),T(t.$$)}for(H(null),E.length=0,N=0;S.length;)S.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];M.has(n)||(M.add(n),n())}W.length=0}while(E.length);for(;U.length;)U.pop()();j=!1,M.clear(),H(t)}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const A=new Set;let C;function B(){C={r:0,c:[],p:C}}function D(){C.r||r(C.c),C=C.p}function I(t,n){t&&t.i&&(A.delete(t),t.i(n))}function z(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),C.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t){t&&t.c()}function F(t,n,o,i){const{fragment:s,on_mount:u,on_destroy:l,after_update:a}=t.$$;s&&s.m(n,o),i||L((()=>{const n=u.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(L)}function R(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(E.push(t),j||(j=!0,P.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,e,c,i,s,l,a,f=[-1]){const d=u;H(n);const p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};a&&a(p.root);let g=!1;if(p.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&V(n,t)),e})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();e.intro&&I(n.$$.fragment),F(n,e.target,e.anchor,e.customElement),O()}H(d)}class G{$destroy(){R(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];var K={};function Q(n,e){const o="undefined"!=typeof localStorage;function r(t,n){o&&localStorage.setItem(t,JSON.stringify(n))}if(!K[n]){const c=function(n,e=t){let o;const r=new Set;function c(t){if(i(n,t)&&(n=t,o)){const t=!Y.length;for(const t of r)t[1](),Y.push(t,n);if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,s=t){const u=[i,s];return r.add(u),1===r.size&&(o=e(c)||t),i(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}(e,(t=>{const e=o?localStorage.getItem(n):null;if(e&&t(JSON.parse(e)),o){const e=e=>{e.key===n&&t(e.newValue?JSON.parse(e.newValue):null)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}})),{subscribe:s,set:u}=c;K[n]={set(t){r(n,t),u(t)},update(t){const e=t(f(c));r(n,e),u(e)},subscribe:s}}return K[n]}const X=Q("title","Hello, World!"),Z=Q("bgPath","/public/assets/dark.png");function tt(n){let e,o,r;return{c(){e=m("div"),o=m("p"),r=$(n[0]),y(o,"class","svelte-ljx5sv"),y(e,"class","title svelte-ljx5sv")},m(t,n){g(t,e,n),p(e,o),p(o,r)},p(t,[n]){1&n&&w(r,t[0])},i:t,o:t,d(t){t&&h(e)}}}function nt(t,n,e){let o;return d(t,X,(t=>e(0,o=t))),[o]}class et extends G{constructor(t){super(),q(this,t,nt,tt,i,{})}}function ot(n){let e,o,r,c,i,s;return{c(){e=m("h1"),o=$(n[2]),r=$(":"),c=$(n[1]),i=$(":"),s=$(n[0]),y(e,"class","svelte-l3mpxp")},m(t,n){g(t,e,n),p(e,o),p(e,r),p(e,c),p(e,i),p(e,s)},p(t,[n]){4&n&&w(o,t[2]),2&n&&w(c,t[1]),1&n&&w(s,t[0])},i:t,o:t,d(t){t&&h(e)}}}function rt(t,n,e){let o,r,c,i=new Date;return k((()=>{const t=setInterval((()=>{e(3,i=new Date)}),1e3);return()=>{clearInterval(t)}})),t.$$.update=()=>{8&t.$$.dirty&&e(2,o=(i.getHours()<10?"0":"")+i.getHours()),8&t.$$.dirty&&e(1,r=(i.getMinutes()<10?"0":"")+i.getMinutes()),8&t.$$.dirty&&e(0,c=(i.getSeconds()<10?"0":"")+i.getSeconds())},[c,r,o,i]}class ct extends G{constructor(t){super(),q(this,t,rt,ot,i,{})}}function it(n){let e,o,r,c,i,s,u;return{c(){e=m("a"),o=m("div"),r=m("img"),i=v(),s=m("p"),u=$(n[0]),l(r.src,c=n[2])||y(r,"src",c),y(r,"width",n[3]),y(r,"height",n[4]),y(o,"class","service svelte-1lwul24"),y(e,"href",n[1])},m(t,n){g(t,e,n),p(e,o),p(o,r),p(o,i),p(o,s),p(s,u)},p(t,[n]){4&n&&!l(r.src,c=t[2])&&y(r,"src",c),8&n&&y(r,"width",t[3]),16&n&&y(r,"height",t[4]),1&n&&w(u,t[0]),2&n&&y(e,"href",t[1])},i:t,o:t,d(t){t&&h(e)}}}function st(t,n,e){let{name:o}=n,{url:r}=n,{iconUrl:c}=n,{iconW:i}=n,{iconH:s}=n;return t.$$set=t=>{"name"in t&&e(0,o=t.name),"url"in t&&e(1,r=t.url),"iconUrl"in t&&e(2,c=t.iconUrl),"iconW"in t&&e(3,i=t.iconW),"iconH"in t&&e(4,s=t.iconH)},[o,r,c,i,s]}class ut extends G{constructor(t){super(),q(this,t,st,it,i,{name:0,url:1,iconUrl:2,iconW:3,iconH:4})}}function lt(t,n,e){const o=t.slice();return o[7]=n[e],o}function at(n){let e,o,c,i,s,u,l,a,f,d,$,w,_,H;return{c(){e=m("h2"),e.textContent="Settings",o=v(),c=m("div"),i=m("h3"),i.textContent="Title",s=v(),u=m("input"),l=v(),a=m("h3"),a.textContent="Background image",f=v(),d=m("small"),d.innerHTML='<a href="https://github.com/rvnpower/bnt/README.md#bg">Read about this</a>',$=v(),w=m("input"),y(d,"class","svelte-awyo7a"),y(c,"class","normal svelte-awyo7a")},m(t,r){g(t,e,r),g(t,o,r),g(t,c,r),p(c,i),p(c,s),p(c,u),x(u,n[2]),p(c,l),p(c,a),p(c,f),p(c,d),p(c,$),p(c,w),x(w,n[1]),_||(H=[b(u,"input",n[5]),b(w,"input",n[6])],_=!0)},p(t,n){4&n&&u.value!==t[2]&&x(u,t[2]),2&n&&w.value!==t[1]&&x(w,t[1])},i:t,o:t,d(t){t&&h(e),t&&h(o),t&&h(c),_=!1,r(H)}}}function ft(t){let n,e,o,r,c,i,s;e=new et({}),r=new ct({});let u=t[3].services,l=[];for(let n=0;n<u.length;n+=1)l[n]=dt(lt(t,u,n));const a=t=>z(l[t],1,1,(()=>{l[t]=null}));return{c(){n=m("div"),J(e.$$.fragment),o=v(),J(r.$$.fragment),c=v(),i=m("div");for(let t=0;t<l.length;t+=1)l[t].c();y(n,"class","header flex-center svelte-awyo7a"),y(i,"class","services svelte-awyo7a")},m(t,u){g(t,n,u),F(e,n,null),p(n,o),F(r,n,null),g(t,c,u),g(t,i,u);for(let t=0;t<l.length;t+=1)l[t].m(i,null);s=!0},p(t,n){if(8&n){let e;for(u=t[3].services,e=0;e<u.length;e+=1){const o=lt(t,u,e);l[e]?(l[e].p(o,n),I(l[e],1)):(l[e]=dt(o),l[e].c(),I(l[e],1),l[e].m(i,null))}for(B(),e=u.length;e<l.length;e+=1)a(e);D()}},i(t){if(!s){I(e.$$.fragment,t),I(r.$$.fragment,t);for(let t=0;t<u.length;t+=1)I(l[t]);s=!0}},o(t){z(e.$$.fragment,t),z(r.$$.fragment,t),l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)z(l[t]);s=!1},d(t){t&&h(n),R(e),R(r),t&&h(c),t&&h(i),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(l,t)}}}function dt(t){let e,o;const r=[t[7]];let c={};for(let t=0;t<r.length;t+=1)c=n(c,r[t]);return e=new ut({props:c}),{c(){J(e.$$.fragment)},m(t,n){F(e,t,n),o=!0},p(t,n){const o=8&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=n[c];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(r,[(c=t[7],"object"==typeof c&&null!==c?c:{})]):{};var c;e.$set(o)},i(t){o||(I(e.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),o=!1},d(t){R(e,t)}}}function pt(t){let n,e,o,r,c,i,s,u,l,a,f=`url(${t[1]})`;const d=[ft,at],$=[];function w(t,n){return t[0]?1:0}return i=w(t),s=$[i]=d[i](t),{c(){n=m("div"),e=m("div"),o=m("div"),r=m("button"),r.innerHTML='<img src="assets/gear.png" alt="Settings" width="40" height="40"/>',c=v(),s.c(),y(r,"class","settingsBtn svelte-awyo7a"),y(o,"class","settings svelte-awyo7a"),y(e,"class","interface svelte-awyo7a"),y(n,"class","container flex-center svelte-awyo7a"),_(n,"--bgPath",f,!1)},m(s,f){g(s,n,f),p(n,e),p(e,o),p(o,r),p(e,c),$[i].m(e,null),u=!0,l||(a=b(r,"click",t[4]),l=!0)},p(t,[o]){let r=i;i=w(t),i===r?$[i].p(t,o):(B(),z($[r],1,1,(()=>{$[r]=null})),D(),s=$[i],s?s.p(t,o):(s=$[i]=d[i](t),s.c()),I(s,1),s.m(e,null)),2&o&&f!==(f=`url(${t[1]})`)&&_(n,"--bgPath",f,!1)},i(t){u||(I(s),u=!0)},o(t){z(s),u=!1},d(t){t&&h(n),$[i].d(),l=!1,a()}}}function gt(t,n,e){let o,r;d(t,Z,(t=>e(1,o=t))),d(t,X,(t=>e(2,r=t)));let c=!1;return[c,o,r,{title:"Hello, World!",services:[{name:"Discord",url:"#",iconUrl:"assets/discord.png",iconW:40,iconH:32},{name:"Pixiv",url:"https://pixiv.net",iconUrl:"assets/pixiv.png",iconW:40,iconH:40},{name:"Facebook",url:"https://facebook.com",iconUrl:"assets/facebook.png",iconW:40,iconH:40},{name:"YouTube",url:"https://youtube.com",iconUrl:"assets/youtube.png",iconW:40,iconH:27},{name:"GitHub",url:"https://github.com",iconUrl:"assets/github.png",iconW:40,iconH:40}]},function(){e(0,c=!c)},function(){r=this.value,X.set(r)},function(){o=this.value,Z.set(o)}]}return new class extends G{constructor(t){super(),q(this,t,gt,pt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
