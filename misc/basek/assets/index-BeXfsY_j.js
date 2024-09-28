var bt=Object.defineProperty;var yt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>yt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const wt=(e,t)=>e===t,m=Symbol("solid-proxy"),Ve=Symbol("solid-track"),Fe={equals:wt};let xt=We;const D=1,W=2,He={owned:null,cleanups:null,context:null,owner:null};var b=null;let ae=null,St=null,h=null,g=null,C=null,ee=0;function $t(e,t){const n=h,s=b,o=e.length===0,i=t===void 0?s:t,l=o?He:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=o?e:()=>e(()=>te(()=>ne(l)));b=l,h=null;try{return j(r,!0)}finally{h=n,b=s}}function G(e,t){t=t?Object.assign({},Fe,t):Fe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Ge(n,o));return[At.bind(n),s]}function X(e,t,n){const s=Tt(e,t,!1,D);pe(s)}function _t(e){return j(e,!1)}function te(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function de(){return h}function At(){if(this.sources&&this.state)if(this.state===D)pe(this);else{const e=g;g=null,j(()=>Q(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function Ge(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],l=ae&&ae.running;l&&ae.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?g.push(i):C.push(i),i.observers&&Xe(i)),l||(i.state=D)}if(g.length>1e6)throw g=[],new Error},!1)),t}function pe(e){if(!e.fn)return;ne(e);const t=ee;Et(e,e.value,t)}function Et(e,t,n){let s;const o=b,i=h;h=b=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(ne),e.owned=null),e.updatedAt=n+1,Qe(l)}finally{h=i,b=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ge(e,s):e.value=s,e.updatedAt=n)}function Tt(e,t,n,s=D,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==He&&(b.owned?b.owned.push(i):b.owned=[i]),i}function Ke(e){if(e.state===0)return;if(e.state===W)return Q(e);if(e.suspense&&te(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)pe(e);else if(e.state===W){const s=g;g=null,j(()=>Q(e,t[0]),!1),g=s}}function j(e,t){if(g)return e();let n=!1;t||(g=[]),C?n=!0:C=[],ee++;try{const s=e();return vt(n),s}catch(s){n||(C=null),g=null,Qe(s)}}function vt(e){if(g&&(We(g),g=null),e)return;const t=C;C=null,t.length&&j(()=>xt(t),!1)}function We(e){for(let t=0;t<e.length;t++)Ke(e[t])}function Q(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===D?s!==t&&(!s.updatedAt||s.updatedAt<ee)&&Ke(s):o===W&&Q(s,t)}}}function Xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=W,n.pure?g.push(n):C.push(n),n.observers&&Xe(n))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),l=n.observerSlots.pop();s<o.length&&(i.sourceSlots[l]=s,o[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ct(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Qe(e,t=b){throw Ct(e)}function mt(e,t){return te(()=>e(t||{}))}function Dt(e,t,n){let s=n.length,o=t.length,i=s,l=0,r=0,a=t[o-1].nextSibling,c=null;for(;l<o||r<i;){if(t[l]===n[r]){l++,r++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const f=i<s?r?n[r-1].nextSibling:n[i-r]:a;for(;r<i;)e.insertBefore(n[r++],f)}else if(i===r)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[r]===t[o-1]){const f=t[--o].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--i],f),t[o]=n[i]}else{if(!c){c=new Map;let u=r;for(;u<i;)c.set(n[u],u++)}const f=c.get(t[l]);if(f!=null)if(r<f&&f<i){let u=l,y=1,d;for(;++u<o&&u<i&&!((d=c.get(t[u]))==null||d!==f+y);)y++;if(y>f-r){const w=t[l];for(;r<f;)e.insertBefore(n[r++],w)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const qe="_$DX_DELEGATE";function Pt(e,t,n,s={}){let o;return $t(i=>{o=i,t===document?e():p(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function Mt(e,t,n){let s;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Ot(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Lt))}}function kt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function fe(e,t,n){return te(()=>e(t,n))}function p(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);X(o=>Y(e,t(),o,n),s)}function Lt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=k(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=k(e,n,s);else{if(i==="function")return X(()=>{let r=t();for(;typeof r=="function";)r=r();n=Y(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],a=n&&Array.isArray(n);if(he(r,t,n,o))return X(()=>n=Y(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=k(e,n,s),l)return n}else a?n.length===0?Re(e,r,s):Dt(e,n,r):(n&&k(e),Re(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=k(e,n,s,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function he(e,t,n,s){let o=!1;for(let i=0,l=t.length;i<l;i++){let r=t[i],a=n&&n[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=he(e,r,a)||o;else if(c==="function")if(s){for(;typeof r=="function";)r=r();o=he(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||o}else e.push(r),o=!0;else{const f=String(r);a&&a.nodeType===3&&a.data===f?e.push(a):e.push(document.createTextNode(f))}}return o}function Re(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function k(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(o!==r){const a=r.parentNode===e;!i&&!l?a?e.replaceChild(o,r):e.insertBefore(o,n):a&&r.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const F="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_|~^>.!()*+,;=@:[]{}'$#?/%<&\"\\`";class L{constructor(t){O(this,"_charToDigit");O(this,"_digitToChar");O(this,"_alphabet");if(typeof t!="string")throw new TypeError("parameter `alphabet` is not a string");const n=new Map;for(let i=0;i<t.length;++i){if(/\s/u.test(t[i]))throw new Error("the alphabet has a whitespace character");const l=t.charCodeAt(i);if(l>127)throw new Error(`the alphabet has the non-ASCII character '${t[i]}'`);if(n.has(l))throw new Error(`the alphabet has the repeated character '${t[i]}'`);n.set(l,i)}if(t.length<2)throw new Error("the alphabet has fewer than 2 characters");const s=new Uint8Array(256),o=new Uint8Array(t.length);for(let i=0;i<s.length;++i)s[i]=255;for(const[i,l]of n.entries())o[l]=i,s[i]=l;this._charToDigit=s,this._digitToChar=o,this._alphabet=t}get charToDigitMap(){return this._charToDigit}get digitToCharMap(){return this._digitToChar}get alphabet(){return this._alphabet}get base(){return this._alphabet.length}}function q(e,t){if(typeof e!="string")throw new TypeError("parameter `text` is not a string");return Bt(Nt.encode(e),t)}function K(e,t){return ze.decode(jt(e.replaceAll(/\s/gu,""),t))}function Bt(e,t){if(!(e instanceof Uint8Array||e instanceof Uint8ClampedArray))throw new TypeError("parameter `binaryData` is not a Uint8Array or Uint8ClampedArray");t=Ye(t);const n=t.base,s=t.digitToCharMap,o=be[n],i=o[1],l=o[2];let r=new Uint8Array(Math.ceil(e.length*ye[n])+16),a=0,c=0,f=o[0]-1,u=0,y=0;for(const d of e){const w=f+1-c,A=d*w;for(f=c+(Math.ceil((A+w)/256)-1),c+=Math.ceil(A/256);;){const x=Math.floor(c/i),S=Math.floor(f/i);if(x!==S){if(S-x!==1)break;const $=Math.floor(c/l);if(Math.floor(f/l)-$!==1)break;c=x*i+c%l*n,f=S*i+f%l*n+(n-1),++u,y=x;break}if(r=T(r,x,a++),u>0){const $=x===y?n-1:0;for(;u>0;--u)r=T(r,$,a++)}c=c%i*n,f=f%i*n+(n-1)}}if(u>0){const d=Math.floor(f/i);for(r=T(r,d,a++);u-- >0;)r=T(r,0,a++);c=c%i*n,f=f%i*n+(n-1)}for(;;){if(c===0&&f===o[0]-1){r=T(r,0,a++);break}const d=Math.floor(c/i),w=Math.floor(f/i);if(w-d>1){r=T(r,d+1,a++);break}r=T(r,w,a++),d<w?c=0:c=c%i*n,f=f%i*n+(n-1)}for(let d=0;d<a;++d)r[d]=s[r[d]];return ze.decode(new Uint8Array(r.buffer,0,a))}function jt(e,t){if(typeof e!="string")throw new TypeError("parameter `encodedString` is not a string");t=Ye(t);const n=t.base,s=t.charToDigitMap,o=be[n],i=o[1],l=o[2];let r=new Uint8Array(Math.ceil(e.length/ye[n])+16),a=0,c=0,f=o[0]-1,u=0,y=0,d=!0;for(let A=0;A<e.length;){const x=s[e.charCodeAt(A++)];if(x===255)throw new Error(`the encoding does not contain the character '${e[A-1]}'`);if(u+=o[++y]*x,A===e.length){if(x===0)break;d=!1}for(;;){const S=u+(o[y]-1),$=f+1-c,P=Math.floor((u-c)*256/$);if(Math.floor((S-c)*256/$)!==P||(r=T(r,P,a++),!d))break;const N=P*$;for(f=c+(Math.ceil((N+$)/256)-1),c+=Math.ceil(N/256);;){const U=Math.floor(c/i),M=Math.floor(f/i);if(U!==M){if(M-U!==1)break;const oe=Math.floor(c/l);if(Math.floor(f/l)-oe!==1)break;c=U*i+c%l*n,f=M*i+f%l*n+(n-1),u=u-u%i+u%l*n,--y;break}c=c%i*n,f=f%i*n+(n-1),u=u%i*n,--y}}}const w=new Uint8Array(a);return w.set(new Uint8Array(r.buffer,0,a)),w}function T(e,t,n){if(n===e.length){const s=n+(n>>1),o=new Uint8Array(s);o.set(e),e=o}return e[n]=t,e}function Ye(e){if(typeof e=="string")e!==ue.alphabet&&(ue=new L(e)),e=ue;else if(!(e instanceof L))throw new TypeError("encoding is not a BasekEncoding or string");return e}const Nt=new TextEncoder,ze=new TextDecoder,be=[[],[]],ye=[0,0];for(let e=2;e<=255;++e){let t=1;const n=[t];for(;e*t<=(Number.MAX_SAFE_INTEGER+1)/256;)t*=e,n.push(t);n.reverse(),be.push(n),ye.push(8/Math.log2(e))}let ue=new L(F.slice(0,85));const ge=Symbol("store-raw"),B=Symbol("store-node"),E=Symbol("store-has"),Je=Symbol("store-self");function Ze(e){let t=e[m];if(!t&&(Object.defineProperty(e,m,{value:t=new Proxy(e,Vt)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=n.length;o<i;o++){const l=n[o];s[l].get&&Object.defineProperty(e,l,{enumerable:s[l].enumerable,get:s[l].get.bind(t)})}}return t}function z(e){let t;return e!=null&&typeof e=="object"&&(e[m]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function R(e,t=new Set){let n,s,o,i;if(n=e!=null&&e[ge])return n;if(!z(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,r=e.length;l<r;l++)o=e[l],(s=R(o,t))!==o&&(e[l]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let a=0,c=l.length;a<c;a++)i=l[a],!r[i].get&&(o=e[i],(s=R(o,t))!==o&&(e[i]=s))}return e}function J(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function H(e,t,n){if(e[t])return e[t];const[s,o]=G(n,{equals:!1,internal:!0});return s.$=o,e[t]=s}function Ut(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===m||t===B||(delete n.value,delete n.writable,n.get=()=>e[m][t]),n}function et(e){de()&&H(J(e,B),Je)()}function It(e){return et(e),Reflect.ownKeys(e)}const Vt={get(e,t,n){if(t===ge)return e;if(t===m)return n;if(t===Ve)return et(e),n;const s=J(e,B),o=s[t];let i=o?o():e[t];if(t===B||t===E||t==="__proto__")return i;if(!o){const l=Object.getOwnPropertyDescriptor(e,t);de()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=H(s,t,i)())}return z(i)?Ze(i):i},has(e,t){return t===ge||t===m||t===Ve||t===B||t===E||t==="__proto__"?!0:(de()&&H(J(e,E),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:It,getOwnPropertyDescriptor:Ut};function Z(e,t,n,s=!1){if(!s&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?(delete e[t],e[E]&&e[E][t]&&o!==void 0&&e[E][t].$()):(e[t]=n,e[E]&&e[E][t]&&o===void 0&&e[E][t].$());let l=J(e,B),r;if((r=H(l,t,o))&&r.$(()=>n),Array.isArray(e)&&e.length!==i){for(let a=e.length;a<i;a++)(r=l[a])&&r.$();(r=H(l,"length",i))&&r.$(e.length)}(r=l[Je])&&r.$()}function tt(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const o=n[s];Z(e,o,t[o])}}function Ft(e,t){if(typeof t=="function"&&(t=t(e)),t=R(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const o=t[n];e[n]!==o&&Z(e,n,o)}Z(e,"length",s)}else tt(e,t)}function V(e,t,n=[]){let s,o=e;if(t.length>1){s=t.shift();const l=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let a=0;a<s.length;a++)V(e,[s[a]].concat(t),n);return}else if(r&&l==="function"){for(let a=0;a<e.length;a++)s(e[a],a)&&V(e,[a].concat(t),n);return}else if(r&&l==="object"){const{from:a=0,to:c=e.length-1,by:f=1}=s;for(let u=a;u<=c;u+=f)V(e,[u].concat(t),n);return}else if(t.length>1){V(e[s],t,[s].concat(n));return}o=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||s===void 0&&i==null||(i=R(i),s===void 0||z(o)&&z(i)&&!Array.isArray(i)?tt(o,i):Z(e,s,i))}function qt(...[e,t]){const n=R(e||{}),s=Array.isArray(n),o=Ze(n);function i(...l){_t(()=>{s&&l.length===1?Ft(n,l[0]):V(n,l)})}return[o,i]}var Rt=Mt(`<div class="m-auto flex flex-col gap-4"><div><h1>Basek</h1><p>A family of efficient base-k binary-to-text encodings.</p></div><div><h2>Text</h2><textarea class="w-full h-56"placeholder="Example: The quick brown fox jumps over the lazy dog."></textarea><p class="text-sm text-gray-500"> bytes</p></div><div class="flex flex-row gap-2"><button>Encode</button><button>Decode</button></div><div><h2>Encoded String</h2><textarea class="break-all w-full h-20"></textarea><p class="text-sm text-gray-500"> bytes</p></div><div><h2>Alphabet</h2><textarea class="break-all w-full h-12"placeholder="Must be at least 2 characters.
Must have unique, non-whitespace, printable ASCII characters."></textarea><p class="text-sm text-gray-500"> characters</p></div><div><h2>Benchmarks</h2><p>This benchmark generates 10 MB of random ASCII text and then measures the encode and decode times.</p></div><div class="flex flex-row gap-2"><button>Run Benchmarks</button><p class=my-auto>(takes several seconds)</p></div><div><p>Base-10 Encode: <!> bytes/sec</p><p>Base-10 Decode: <!> bytes/sec</p></div><div><p>Base-64 Encode: <!> bytes/sec</p><p>Base-64 Decode: <!> bytes/sec</p></div><div><p>Base-85 Encode: <!> bytes/sec</p><p>Base-85 Decode: <!> bytes/sec</p></div><div><p>btoa() Encode: <!> bytes/sec</p><p>atob() Decode: <!> bytes/sec</p></div><p class="m-auto justify-center text-gray-500">Created by Rex Berry • View <a href=https://github.com/RexBerry/basek>the source code</a> on GitHub`);function Ht(){const e="The quick brown fox jumps over the lazy dog.",[t,n]=G(""),[s,o]=G(""),[i,l]=G(F.slice(0,85)),[r,a]=qt({base10Encode:0,base10Decode:0,base64Encode:0,base64Decode:0,base85Encode:0,base85Decode:0,btoaEncode:0,atobDecode:0});let c,f,u;const y=new TextEncoder;return(()=>{var d=Rt(),w=d.firstChild,A=w.nextSibling,x=A.firstChild,S=x.nextSibling,$=S.nextSibling,P=$.firstChild,ie=A.nextSibling,N=ie.firstChild,U=N.nextSibling,M=ie.nextSibling,oe=M.firstChild,v=oe.nextSibling,we=v.nextSibling,nt=we.firstChild,xe=M.nextSibling,it=xe.firstChild,I=it.nextSibling,Se=I.nextSibling,ot=Se.firstChild,st=xe.nextSibling,$e=st.nextSibling,rt=$e.firstChild,_e=$e.nextSibling,se=_e.firstChild,lt=se.firstChild,Ae=lt.nextSibling;Ae.nextSibling;var Ee=se.nextSibling,ct=Ee.firstChild,Te=ct.nextSibling;Te.nextSibling;var ve=_e.nextSibling,re=ve.firstChild,at=re.firstChild,Ce=at.nextSibling;Ce.nextSibling;var me=re.nextSibling,ft=me.firstChild,De=ft.nextSibling;De.nextSibling;var Pe=ve.nextSibling,le=Pe.firstChild,ut=le.firstChild,Me=ut.nextSibling;Me.nextSibling;var Oe=le.nextSibling,dt=Oe.firstChild,ke=dt.nextSibling;ke.nextSibling;var ht=Pe.nextSibling,ce=ht.firstChild,gt=ce.firstChild,Le=gt.nextSibling;Le.nextSibling;var Be=ce.nextSibling,pt=Be.firstChild,je=pt.nextSibling;je.nextSibling,S.$$input=_=>n(_.target.value);var Ne=c;typeof Ne=="function"?fe(Ne,S):c=S,p(S,t),p($,()=>y.encode(t()).length.toLocaleString(),P),N.$$click=()=>{try{f.value=q(t(),i()),o(f.value)}catch(_){alert(_)}},U.$$click=()=>{try{c.value=K(s(),i()),n(c.value)}catch(_){alert(_)}},v.$$input=_=>o(_.target.value);var Ue=f;typeof Ue=="function"?fe(Ue,v):f=v,p(v,s),p(we,()=>y.encode(s()).length.toLocaleString(),nt),I.$$input=_=>l(_.target.value);var Ie=u;return typeof Ie=="function"?fe(Ie,I):u=I,p(I,i),p(Se,()=>i().length.toLocaleString(),ot),rt.$$click=()=>{try{Gt(a)}catch(_){alert(_)}},p(se,()=>r.base10Encode.toLocaleString(),Ae),p(Ee,()=>r.base10Decode.toLocaleString(),Te),p(re,()=>r.base64Encode.toLocaleString(),Ce),p(me,()=>r.base64Decode.toLocaleString(),De),p(le,()=>r.base85Encode.toLocaleString(),Me),p(Oe,()=>r.base85Decode.toLocaleString(),ke),p(ce,()=>r.btoaEncode.toLocaleString(),Le),p(Be,()=>r.atobDecode.toLocaleString(),je),X(()=>kt(v,"placeholder",`May contain whitespace.
Example: ${q(e,i())}`)),d})()}function Gt(e){const t=new Uint8Array(1e7);for(let f=0;f<t.length;++f)t[f]=Math.floor(95*Math.random())+32;const n=new TextDecoder().decode(t);let s="",o="";function i(f){return Math.round(n.length/Math.max(.001,f))}const l=new L(F.slice(0,10)),r=new L(F.slice(0,64)),a=new L(F.slice(0,85)),c=new Kt;c.start(),s=q(n,l),c.stop(),e("base10Encode",i(c.elapsedSeconds())),c.start(),o=K(s,l),c.stop(),e("base10Decode",i(c.elapsedSeconds())),o!==n&&alert("Base-10 encode and decode gave an incorrect result"),c.start(),s=q(n,r),c.stop(),e("base64Encode",i(c.elapsedSeconds())),c.start(),o=K(s,r),c.stop(),e("base64Decode",i(c.elapsedSeconds())),o!==n&&alert("Base-64 encode and decode gave an incorrect result"),c.start(),s=q(n,a),c.stop(),e("base85Encode",i(c.elapsedSeconds())),c.start(),o=K(s,a),c.stop(),e("base85Decode",i(c.elapsedSeconds())),o!==n&&alert("Base-85 encode and decode gave an incorrect result"),c.start(),s=btoa(n),c.stop(),e("btoaEncode",i(c.elapsedSeconds())),c.start(),o=atob(s),c.stop(),e("atobDecode",i(c.elapsedSeconds())),o!==n&&alert("btoa() encode and atob() decode gave an incorrect result")}class Kt{constructor(){O(this,"_startTime");O(this,"_stopTime");this._startTime=0,this._stopTime=0}start(){this._startTime=performance.now()}stop(){this._stopTime=performance.now()}elapsedSeconds(){return Math.round(1e3*(this._stopTime-this._startTime))/1e6}}Ot(["input","click"]);const Wt=document.getElementById("root");Pt(()=>mt(Ht,{}),Wt);
