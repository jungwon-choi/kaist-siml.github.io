function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function m(){return h("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return y(t," ")}function b(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}let x;function S(t){x=t}function w(){if(!x)throw new Error("Function called outside component initialization");return x}const P=[],j=[],A=[],N=[],R=Promise.resolve();let I=!1;function L(t){A.push(t)}let O=!1;const C=new Set;function T(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];S(e),U(e.$$)}for(S(null),P.length=0;j.length;)j.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];C.has(e)||(C.add(e),e())}A.length=0}while(P.length);for(;N.length;)N.pop()();I=!1,O=!1,C.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const k=new Set;let q;function J(){q={r:0,c:[],p:q}}function M(){q.r||o(q.c),q=q.p}function B(t,e){t&&t.i&&(k.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),q.c.push((()=>{k.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function V(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function F(t,e){t&&t.l(e)}function Y(t,e,r,c){const{fragment:i,on_mount:a,on_destroy:l,after_update:f}=t.$$;i&&i.m(e,r),c||L((()=>{const e=a.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(L)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(P.push(t),I||(I=!0,R.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,n,s,c,i,a,l=[-1]){const f=x;S(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&G(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=$(n.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();n.intro&&B(e.$$.fragment),Y(e,n.target,n.anchor,n.customElement),T()}S(f)}class X{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function Z(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const tt={};function et(e){let n,r,o,s,c,i,a,m,b,x,S,w,P,j,A,N,R;return{c(){n=p("header"),r=p("div"),o=p("a"),s=h("SIML"),c=d(),i=p("div"),a=p("a"),m=h("Home"),b=d(),x=p("a"),S=h("Publication"),w=d(),P=p("a"),j=h("Project"),A=d(),N=p("a"),R=h("People"),this.h()},l(t){n=v(t,"HEADER",{class:!0});var e=$(n);r=v(e,"DIV",{class:!0});var l=$(r);o=v(l,"A",{class:!0,href:!0});var f=$(o);s=y(f,"SIML"),f.forEach(u),c=_(l),i=v(l,"DIV",{class:!0});var p=$(i);a=v(p,"A",{href:!0,class:!0});var h=$(a);m=y(h,"Home"),h.forEach(u),b=_(p),x=v(p,"A",{href:!0,class:!0});var d=$(x);S=y(d,"Publication"),d.forEach(u),w=_(p),P=v(p,"A",{href:!0,class:!0});var g=$(P);j=y(g,"Project"),g.forEach(u),A=_(p),N=v(p,"A",{href:!0,class:!0});var E=$(N);R=y(E,"People"),E.forEach(u),p.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){g(o,"class","brand svelte-1caxc0l"),g(o,"href","/home"),g(a,"href","/home"),g(a,"class","svelte-1caxc0l"),E(a,"current","home"===e[0]),g(x,"href","/publication"),g(x,"class","svelte-1caxc0l"),E(x,"current","publication"===e[0]),g(P,"href","/project"),g(P,"class","svelte-1caxc0l"),E(P,"current","project"===e[0]),g(N,"href","/people"),g(N,"class","svelte-1caxc0l"),E(N,"current","people"===e[0]),g(i,"class","nav svelte-1caxc0l"),g(r,"class","content svelte-1caxc0l"),g(n,"class","svelte-1caxc0l")},m(t,e){f(t,n,e),l(n,r),l(r,o),l(o,s),l(r,c),l(r,i),l(i,a),l(a,m),l(i,b),l(i,x),l(x,S),l(i,w),l(i,P),l(P,j),l(i,A),l(i,N),l(N,R)},p(t,[e]){1&e&&E(a,"current","home"===t[0]),1&e&&E(x,"current","publication"===t[0]),1&e&&E(P,"current","project"===t[0]),1&e&&E(N,"current","people"===t[0])},i:t,o:t,d(t){t&&u(n)}}}function nt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class rt extends X{constructor(t){super(),W(this,t,nt,et,c,{segment:0})}}function ot(e){let n,r,o,s,c;return{c(){n=p("footer"),r=p("div"),o=p("p"),s=p("span"),c=h("© SIML 2021"),this.h()},l(t){n=v(t,"FOOTER",{class:!0});var e=$(n);r=v(e,"DIV",{class:!0});var i=$(r);o=v(i,"P",{class:!0});var a=$(o);s=v(a,"SPAN",{class:!0});var l=$(s);c=y(l,"© SIML 2021"),l.forEach(u),a.forEach(u),i.forEach(u),e.forEach(u),this.h()},h(){g(s,"class","text-muted svelte-1ccoii6"),g(o,"class","justify-right svelte-1ccoii6"),g(r,"class","content svelte-1ccoii6"),g(n,"class","svelte-1ccoii6")},m(t,e){f(t,n,e),l(n,r),l(r,o),l(o,s),l(s,c)},p:t,i:t,o:t,d(t){t&&u(n)}}}class st extends X{constructor(t){super(),W(this,t,null,ot,c,{})}}function ct(t){let e,n,r,o,s;e=new rt({props:{segment:t[0]}});const c=t[2].default,l=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(c,t,t[1],null);return o=new st({}),{c(){K(e.$$.fragment),n=d(),l&&l.c(),r=d(),K(o.$$.fragment)},l(t){F(e.$$.fragment,t),n=_(t),l&&l.l(t),r=_(t),F(o.$$.fragment,t)},m(t,c){Y(e,t,c),f(t,n,c),l&&l.m(t,c),f(t,r,c),Y(o,t,c),s=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),l&&l.p&&2&n&&a(l,c,t,t[1],n,null,null)},i(t){s||(B(e.$$.fragment,t),B(l,t),B(o.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),D(l,t),D(o.$$.fragment,t),s=!1},d(t){z(e,t),t&&u(n),l&&l.d(t),t&&u(r),z(o,t)}}}function it(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;var c;return c=()=>{const t=window.location.pathname.replace(/\/$/,"");document.querySelectorAll("a").forEach((e=>{e.hash&&"#"===e.href.split("/").slice(-1)[0][0]&&(e.href=t+e.hash)}))},w().$$.on_mount.push(c),t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class at extends X{constructor(t){super(),W(this,t,it,ct,c,{segment:0})}}function lt(e){let n,r,o;return{c(){n=p("main"),r=p("h1"),o=h("Page not found"),this.h()},l(t){n=v(t,"MAIN",{class:!0});var e=$(n);r=v(e,"H1",{});var s=$(r);o=y(s,"Page not found"),s.forEach(u),e.forEach(u),this.h()},h(){g(n,"class","svelte-16lww9f")},m(t,e){f(t,n,e),l(n,r),l(r,o)},p:t,i:t,o:t,d(t){t&&u(n)}}}class ft extends X{constructor(t){super(),W(this,t,null,lt,c,{})}}function ut(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&K(n.$$.fragment),r=m()},l(t){n&&F(n.$$.fragment,t),r=m()},m(t,e){n&&Y(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?V(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){J();const t=n;D(t.$$.fragment,1,0,(()=>{z(t,1)})),M()}c?(n=new c(i()),K(n.$$.fragment),B(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&B(n.$$.fragment,t),o=!0)},o(t){n&&D(n.$$.fragment,t),o=!1},d(t){t&&u(r),n&&z(n,t)}}}function pt(t){let e,n;return e=new ft({props:{error:t[0],status:t[1]}}),{c(){K(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ht(t){let e,n,r,o;const s=[pt,ut],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(J(),D(c[a],1,1,(()=>{c[a]=null})),M(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){o||(B(n),o=!0)},o(t){D(n),o=!1},d(t){c[e].d(t),t&&u(r)}}}function dt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new at({props:s}),{c(){K(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=12&e?V(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(B(n.$$.fragment,t),r=!0)},o(t){D(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var f,u,p;return f=l,w().$$.after_update.push(f),u=tt,p=r,w().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class gt extends X{constructor(t){super(),W(this,t,mt,dt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const $t=[],vt=[{js:()=>Promise.all([import("./index.260806fa.js"),__inject_styles(["client-283bdb64.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./publication.389274d0.js"),__inject_styles(["client-283bdb64.css","publication-c8207b43.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./project.47682343.js"),__inject_styles(["client-283bdb64.css","project-c8207b43.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./people.786690fe.js"),__inject_styles(["client-283bdb64.css","people-c8207b43.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./home.c1d56f56.js"),__inject_styles(["client-283bdb64.css","home-c8207b43.css"])]).then((function(t){return t[0]}))}],yt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/publication\/?$/,parts:[{i:1}]},{pattern:/^\/project\/?$/,parts:[{i:2}]},{pattern:/^\/people\/?$/,parts:[{i:3}]},{pattern:/^\/home\/?$/,parts:[{i:4}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function _t(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function bt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Et,xt=1;const St="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},wt={};let Pt,jt;function At(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Nt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt))return null;let e=t.pathname.slice(Pt.length);if(""===e&&(e="/"),!$t.some((t=>t.test(e))))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=At(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Rt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=bt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Nt(o);if(s){Ot(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),St.pushState({id:Et},"",o.href)}}function It(){return{x:pageXOffset,y:pageYOffset}}function Lt(t){if(wt[Et]=It(),t.state){const e=Nt(new URL(location.href));e?Ot(e,t.state.id):location.href=location.href}else xt=xt+1,function(t){Et=t}(xt),St.replaceState({id:Et},"",location.href)}function Ot(t,e,n,r){return _t(this,void 0,void 0,(function*(){const o=!!e;if(o)Et=e;else{const t=It();wt[Et]=t,Et=e=++xt,wt[Et]=n?t:{x:0,y:0}}if(yield jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=wt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),wt[Et]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ct(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Tt,Ut=null;function kt(t){const e=bt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Nt(new URL(t,Ct(document)));if(e)Ut&&t===Ut.href||(Ut={href:t,promise:te(e)}),Ut.promise}(e.href)}function qt(t){clearTimeout(Tt),Tt=setTimeout((()=>{kt(t)}),20)}function Jt(t,e={noscroll:!1,replaceState:!1}){const n=Nt(new URL(t,Ct(document)));return n?(St[e.replaceState?"replaceState":"pushState"]({id:Et},"",t),Ot(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Mt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Bt,Dt,Vt,Ht=!1,Kt=[],Ft="{}";const Yt={page:function(t){const e=Z(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Z(null),session:Z(Mt&&Mt.session)};let zt,Gt,Wt;function Xt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Qt(t){return _t(this,void 0,void 0,(function*(){Bt&&Yt.preloading.set(!0);const e=function(t){return Ut&&Ut.href===t.href?Ut.promise:te(t)}(t),n=Dt={},r=yield e,{redirect:o}=r;if(n===Dt)if(o)yield Jt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Zt(n,e,Xt(e,t.page))}}))}function Zt(t,e,n){return _t(this,void 0,void 0,(function*(){Yt.page.set(n),Yt.preloading.set(!1),Bt?Bt.$set(e):(e.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},e.level0={props:yield Vt},e.notify=Yt.page.notify,Bt=new gt({target:Wt,props:e,hydrate:!0})),Kt=t,Ft=JSON.stringify(n.query),Ht=!0,Gt=!1}))}function te(t){return _t(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Vt){const t=()=>({});Vt=Mt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},zt)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;i=yield Promise.all(e.parts.map(((e,i)=>_t(this,void 0,void 0,(function*(){const u=r[i];if(function(t,e,n,r){if(r!==Ft)return!0;const o=Kt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,u,l,o)&&(f=!0),s.segments[a]=r[i+1],!e)return{segment:u};const p=a++;if(!Gt&&!f&&Kt[i]&&Kt[i].part===e.i)return Kt[i];f=!1;const{default:h,preload:d}=yield vt[e.i].js();let m;return m=Ht||!Mt.preloaded[i+1]?d?yield d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},zt):{}:Mt.preloaded[i+1],s[`level${p}`]={component:h,props:m,segment:u,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var ee,ne,re;Yt.session.subscribe((t=>_t(void 0,void 0,void 0,(function*(){if(zt=t,!Ht)return;Gt=!0;const e=Nt(new URL(location.href)),n=Dt={},{redirect:r,props:o,branch:s}=yield te(e);n===Dt&&(r?yield Jt(r.location,{replaceState:!0}):yield Zt(s,o,Xt(o,e.page)))})))),ee={target:document.getElementById("sapper")},ne=ee.target,Wt=ne,re=Mt.baseUrl,Pt=re,jt=Qt,"scrollRestoration"in St&&(St.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{St.scrollRestoration="auto"})),addEventListener("load",(()=>{St.scrollRestoration="manual"})),addEventListener("click",Rt),addEventListener("popstate",Lt),addEventListener("touchstart",kt),addEventListener("mousemove",qt),Mt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Mt;Vt||(Vt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Vt},level1:{props:{status:s,error:c},component:ft},segments:o},a=At(n);Zt([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;St.replaceState({id:xt},"",e);const n=Nt(new URL(location.href));if(n)return Ot(n,xt,!0,t)}));export{X as S,$ as a,y as b,v as c,u as d,p as e,g as f,f as g,l as h,W as i,d as j,_ as k,b as l,t as n,c as s,h as t};

import __inject_styles from './inject_styles.5607aec6.js';