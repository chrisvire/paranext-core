"use strict";var he=Object.defineProperty;var pe=(t,e,r)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var p=(t,e,r)=>(pe(t,typeof e!="symbol"?e+"":e,r),r);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});class me{constructor(e,r=1e4){p(this,"variableName");p(this,"promiseToValue");p(this,"resolver");p(this,"rejecter");this.variableName=e,this.promiseToValue=new Promise((s,n)=>{this.resolver=s,this.rejecter=n}),r>0&&setTimeout(()=>{this.rejecter&&(this.rejecter(`Timeout reached when waiting for ${this.variableName} to settle`),this.complete())},r),Object.seal(this)}get promise(){return this.promiseToValue}get hasSettled(){return Object.isFrozen(this)}resolveToValue(e,r=!1){if(this.resolver)console.debug(`${this.variableName} is being resolved now`),this.resolver(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent resolution of ${this.variableName}`)}}rejectWithReason(e,r=!1){if(this.rejecter)console.debug(`${this.variableName} is being rejected now`),this.rejecter(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent rejection of ${this.variableName}`)}}complete(){this.resolver=void 0,this.rejecter=void 0,Object.freeze(this)}}function de(){return"00-0-4-1-000".replace(/[^-]/g,t=>((Math.random()+~~t)*65536>>t).toString(16).padStart(4,"0"))}function F(t){return typeof t=="string"||t instanceof String}function E(t){return JSON.parse(JSON.stringify(t))}function be(t,e=300){if(F(t))throw new Error("Tried to debounce a string! Could be XSS");let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>t(...s),e)}}function ge(t,e,r){const s=new Map;return t.forEach(n=>{const o=e(n),a=s.get(o),i=r?r(n,o):n;a?a.push(i):s.set(o,[i])}),s}function Ne(t){return typeof t=="object"&&t!==null&&"message"in t&&typeof t.message=="string"}function ve(t){if(Ne(t))return t;try{return new Error(JSON.stringify(t))}catch{return new Error(String(t))}}function ye(t){return ve(t).message}function H(t){return new Promise(e=>setTimeout(e,t))}function we(t,e){const r=H(e).then(()=>{});return Promise.any([r,t()])}function Ee(t,e="obj"){const r=new Set;Object.getOwnPropertyNames(t).forEach(n=>{try{typeof t[n]=="function"&&r.add(n)}catch(o){console.debug(`Skipping ${n} on ${e} due to error: ${o}`)}});let s=Object.getPrototypeOf(t);for(;s&&Object.getPrototypeOf(s);)Object.getOwnPropertyNames(s).forEach(n=>{try{typeof t[n]=="function"&&r.add(n)}catch(o){console.debug(`Skipping ${n} on ${e}'s prototype due to error: ${o}`)}}),s=Object.getPrototypeOf(s);return r}function Oe(t,e={}){return new Proxy(e,{get(r,s){return s in r?r[s]:async(...n)=>(await t())[s](...n)}})}class $e{constructor(e,r){p(this,"baseDocument");p(this,"contributions",new Map);p(this,"latestOutput");p(this,"options");this.baseDocument=e,this.options=r,this.updateBaseDocument(e)}updateBaseDocument(e){return this.validateStartingDocument(e),this.baseDocument=this.options.copyDocuments?E(e):e,this.rebuild()}addOrUpdateContribution(e,r){this.validateContribution(e,r);const s=this.contributions.get(e),n=this.options.copyDocuments&&r?E(r):r;this.contributions.set(e,n);try{return this.rebuild()}catch(o){throw s?this.contributions.set(e,s):this.contributions.delete(e),new Error(`Error when setting the document named ${e}: ${o}`)}}deleteContribution(e){const r=this.contributions.get(e);if(!r)throw new Error("{documentKey} does not exist");this.contributions.delete(e);try{return this.rebuild()}catch(s){throw this.contributions.set(e,r),new Error(`Error when deleting the document named ${e}: ${s}`)}}rebuild(){if(this.contributions.size===0){let r=E(this.baseDocument);return r=this.transformFinalOutput(r),this.validateOutput(r),this.latestOutput=r,this.latestOutput}let e=this.baseDocument;return this.contributions.forEach(r=>{e=k(e,r,this.options.ignoreDuplicateProperties),this.validateOutput(e)}),e=this.transformFinalOutput(e),this.validateOutput(e),this.latestOutput=e,this.latestOutput}}function Ae(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||Array.isArray(r))&&(e=!1)}),e}function Se(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||!Array.isArray(r))&&(e=!1)}),e}function k(t,e,r){const s=E(t);return e&&Object.keys(e).forEach(n=>{if(Object.hasOwn(t,n)){if(Ae(t[n],e[n]))s[n]=k(t[n],e[n],r);else if(Se(t[n],e[n]))s[n]=s[n].concat(e[n]);else if(!r)throw new Error(`Cannot merge objects: key "${n}" already exists in the target object`)}else s[n]=e[n]}),s}class qe{constructor(e="Anonymous"){p(this,"unsubscribers",new Set);this.name=e}add(...e){e.forEach(r=>{"dispose"in r?this.unsubscribers.add(r.dispose):this.unsubscribers.add(r)})}async runAllUnsubscribers(){const e=[...this.unsubscribers].map(s=>s()),r=await Promise.all(e);return this.unsubscribers.clear(),r.every((s,n)=>(s||console.error(`UnsubscriberAsyncList ${this.name}: Unsubscriber at index ${n} failed!`),s))}}class je{constructor(){p(this,"subscribe",this.event);p(this,"subscriptions");p(this,"lazyEvent");p(this,"isDisposed",!1);p(this,"dispose",()=>this.disposeFn());p(this,"emit",e=>{this.emitFn(e)})}get event(){return this.assertNotDisposed(),this.lazyEvent||(this.lazyEvent=e=>{if(!e||typeof e!="function")throw new Error("Event handler callback must be a function!");return this.subscriptions||(this.subscriptions=[]),this.subscriptions.push(e),()=>{if(!this.subscriptions)return!1;const r=this.subscriptions.indexOf(e);return r<0?!1:(this.subscriptions.splice(r,1),!0)}}),this.lazyEvent}emitFn(e){var r;this.assertNotDisposed(),(r=this.subscriptions)==null||r.forEach(s=>s(e))}assertNotDisposed(){if(this.isDisposed)throw new Error("Emitter is disposed")}disposeFn(){return this.assertNotDisposed(),this.isDisposed=!0,this.subscriptions=void 0,this.lazyEvent=void 0,Promise.resolve(!0)}}const W=[{shortName:"ERR",fullNames:["ERROR"],chapters:-1},{shortName:"GEN",fullNames:["Genesis"],chapters:50},{shortName:"EXO",fullNames:["Exodus"],chapters:40},{shortName:"LEV",fullNames:["Leviticus"],chapters:27},{shortName:"NUM",fullNames:["Numbers"],chapters:36},{shortName:"DEU",fullNames:["Deuteronomy"],chapters:34},{shortName:"JOS",fullNames:["Joshua"],chapters:24},{shortName:"JDG",fullNames:["Judges"],chapters:21},{shortName:"RUT",fullNames:["Ruth"],chapters:4},{shortName:"1SA",fullNames:["1 Samuel"],chapters:31},{shortName:"2SA",fullNames:["2 Samuel"],chapters:24},{shortName:"1KI",fullNames:["1 Kings"],chapters:22},{shortName:"2KI",fullNames:["2 Kings"],chapters:25},{shortName:"1CH",fullNames:["1 Chronicles"],chapters:29},{shortName:"2CH",fullNames:["2 Chronicles"],chapters:36},{shortName:"EZR",fullNames:["Ezra"],chapters:10},{shortName:"NEH",fullNames:["Nehemiah"],chapters:13},{shortName:"EST",fullNames:["Esther"],chapters:10},{shortName:"JOB",fullNames:["Job"],chapters:42},{shortName:"PSA",fullNames:["Psalm","Psalms"],chapters:150},{shortName:"PRO",fullNames:["Proverbs"],chapters:31},{shortName:"ECC",fullNames:["Ecclesiastes"],chapters:12},{shortName:"SNG",fullNames:["Song of Solomon","Song of Songs"],chapters:8},{shortName:"ISA",fullNames:["Isaiah"],chapters:66},{shortName:"JER",fullNames:["Jeremiah"],chapters:52},{shortName:"LAM",fullNames:["Lamentations"],chapters:5},{shortName:"EZK",fullNames:["Ezekiel"],chapters:48},{shortName:"DAN",fullNames:["Daniel"],chapters:12},{shortName:"HOS",fullNames:["Hosea"],chapters:14},{shortName:"JOL",fullNames:["Joel"],chapters:3},{shortName:"AMO",fullNames:["Amos"],chapters:9},{shortName:"OBA",fullNames:["Obadiah"],chapters:1},{shortName:"JON",fullNames:["Jonah"],chapters:4},{shortName:"MIC",fullNames:["Micah"],chapters:7},{shortName:"NAM",fullNames:["Nahum"],chapters:3},{shortName:"HAB",fullNames:["Habakkuk"],chapters:3},{shortName:"ZEP",fullNames:["Zephaniah"],chapters:3},{shortName:"HAG",fullNames:["Haggai"],chapters:2},{shortName:"ZEC",fullNames:["Zechariah"],chapters:14},{shortName:"MAL",fullNames:["Malachi"],chapters:4},{shortName:"MAT",fullNames:["Matthew"],chapters:28},{shortName:"MRK",fullNames:["Mark"],chapters:16},{shortName:"LUK",fullNames:["Luke"],chapters:24},{shortName:"JHN",fullNames:["John"],chapters:21},{shortName:"ACT",fullNames:["Acts"],chapters:28},{shortName:"ROM",fullNames:["Romans"],chapters:16},{shortName:"1CO",fullNames:["1 Corinthians"],chapters:16},{shortName:"2CO",fullNames:["2 Corinthians"],chapters:13},{shortName:"GAL",fullNames:["Galatians"],chapters:6},{shortName:"EPH",fullNames:["Ephesians"],chapters:6},{shortName:"PHP",fullNames:["Philippians"],chapters:4},{shortName:"COL",fullNames:["Colossians"],chapters:4},{shortName:"1TH",fullNames:["1 Thessalonians"],chapters:5},{shortName:"2TH",fullNames:["2 Thessalonians"],chapters:3},{shortName:"1TI",fullNames:["1 Timothy"],chapters:6},{shortName:"2TI",fullNames:["2 Timothy"],chapters:4},{shortName:"TIT",fullNames:["Titus"],chapters:3},{shortName:"PHM",fullNames:["Philemon"],chapters:1},{shortName:"HEB",fullNames:["Hebrews"],chapters:13},{shortName:"JAS",fullNames:["James"],chapters:5},{shortName:"1PE",fullNames:["1 Peter"],chapters:5},{shortName:"2PE",fullNames:["2 Peter"],chapters:3},{shortName:"1JN",fullNames:["1 John"],chapters:5},{shortName:"2JN",fullNames:["2 John"],chapters:1},{shortName:"3JN",fullNames:["3 John"],chapters:1},{shortName:"JUD",fullNames:["Jude"],chapters:1},{shortName:"REV",fullNames:["Revelation"],chapters:22}],K=1,L=W.length-1,Z=1,X=1,Q=t=>{var e;return((e=W[t])==null?void 0:e.chapters)??-1},Ce=(t,e)=>({bookNum:Math.max(K,Math.min(t.bookNum+e,L)),chapterNum:1,verseNum:1}),Me=(t,e)=>({...t,chapterNum:Math.min(Math.max(Z,t.chapterNum+e),Q(t.bookNum)),verseNum:1}),Pe=(t,e)=>({...t,verseNum:Math.max(X,t.verseNum+e)}),Te=t=>(...e)=>t.map(s=>s(...e)).every(s=>s),Re=t=>async(...e)=>{const r=t.map(async s=>s(...e));return(await Promise.all(r)).every(s=>s)};var D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N={},De=()=>{const t="\\ud800-\\udfff",e="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",n="\\u1ab0-\\u1aff",o="\\u1dc0-\\u1dff",a=e+r+s+n+o,i="\\ufe0e\\ufe0f",c="\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93",h=`[${t}]`,u=`[${a}]`,l="\\ud83c[\\udffb-\\udfff]",f=`(?:${u}|${l})`,b=`[^${t}]`,d="(?:\\uD83C[\\uDDE6-\\uDDFF]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",j="\\u200d",ie="(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)",ue=`[${c}]`,T=`${f}?`,R=`[${i}]?`,le=`(?:${j}(?:${[b,d,y].join("|")})${R+T})*`,ce=R+T+le,fe=`(?:${[`${b}${u}?`,u,d,y,h,ue].join("|")})`;return new RegExp(`${ie}|${l}(?=${l})|${fe+ce}`,"g")},Ie=D&&D.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(N,"__esModule",{value:!0});var A=Ie(De);function C(t){if(typeof t!="string")throw new Error("A string is expected as input");return t.match(A.default())||[]}var _e=N.toArray=C;function P(t){if(typeof t!="string")throw new Error("Input must be a string");var e=t.match(A.default());return e===null?0:e.length}var xe=N.length=P;function Y(t,e,r){if(e===void 0&&(e=0),typeof t!="string")throw new Error("Input must be a string");(typeof e!="number"||e<0)&&(e=0),typeof r=="number"&&r<0&&(r=0);var s=t.match(A.default());return s?s.slice(e,r).join(""):""}var ze=N.substring=Y;function Be(t,e,r){if(e===void 0&&(e=0),typeof t!="string")throw new Error("Input must be a string");var s=P(t);if(typeof e!="number"&&(e=parseInt(e,10)),e>=s)return"";e<0&&(e+=s);var n;typeof r>"u"?n=s:(typeof r!="number"&&(r=parseInt(r,10)),n=r>=0?r+e:e);var o=t.match(A.default());return o?o.slice(e,n).join(""):""}var Je=N.substr=Be;function Ge(t,e,r,s){if(e===void 0&&(e=16),r===void 0&&(r="#"),s===void 0&&(s="right"),typeof t!="string"||typeof e!="number")throw new Error("Invalid arguments specified");if(["left","right"].indexOf(s)===-1)throw new Error("Pad position should be either left or right");typeof r!="string"&&(r=String(r));var n=P(t);if(n>e)return Y(t,0,e);if(n<e){var o=r.repeat(e-n);return s==="left"?o+t:t+o}return t}var ee=N.limit=Ge;function Ue(t,e,r){if(r===void 0&&(r=0),typeof t!="string")throw new Error("Input must be a string");if(t==="")return e===""?0:-1;r=Number(r),r=isNaN(r)?0:r,e=String(e);var s=C(t);if(r>=s.length)return e===""?s.length:-1;if(e==="")return r;var n=C(e),o=!1,a;for(a=r;a<s.length;a+=1){for(var i=0;i<n.length&&n[i]===s[a+i];)i+=1;if(i===n.length&&n[i-1]===s[a+i-1]){o=!0;break}}return o?a:-1}var Ve=N.indexOf=Ue;function Fe(t,e){if(!(e>m(t)||e<-m(t)))return q(t,e,1)}function He(t,e){return e<0||e>m(t)-1?"":q(t,e,1)}function ke(t,e){if(!(e<0||e>m(t)-1))return q(t,e,1).codePointAt(0)}function We(t,e,r=m(t)){const s=te(t,e);return!(s===-1||s+m(e)!==r)}function Ke(t,e,r=0){const s=O(t,r);return S(s,e)!==-1}function S(t,e,r=0){return Ve(t,e,r)}function te(t,e,r=1/0){let s=r;s<0?s=0:s>=m(t)&&(s=m(t)-1);for(let n=s;n>=0;n--)if(q(t,n,m(e))===e)return n;return-1}function m(t){return xe(t)}function Le(t,e){const r=e.toUpperCase();return r==="NONE"?t:t.normalize(r)}function Ze(t,e,r=" "){return e<=m(t)?t:ee(t,e,r,"right")}function Xe(t,e,r=" "){return e<=m(t)?t:ee(t,e,r,"left")}function I(t,e){return e>t?t:e<-t?0:e<0?e+t:e}function Qe(t,e,r){const s=m(t);if(e>s||r&&(e>r&&!(e>0&&e<s&&r<0&&r>-s)||r<-s||e<0&&e>-s&&r>0))return"";const n=I(s,e),o=r?I(s,r):void 0;return O(t,n,o)}function Ye(t,e,r){const s=[];if(r!==void 0&&r<=0)return[t];if(e==="")return re(t).slice(0,r);let n=e;(typeof e=="string"||e instanceof RegExp&&!e.flags.includes("g"))&&(n=new RegExp(e,"g"));const o=t.match(n);let a=0;if(o){for(let i=0;i<(r?r-1:o.length);i++){const c=S(t,o[i],a),h=m(o[i]);if(s.push(O(t,a,c)),a=c+h,r!==void 0&&s.length===r)break}return s.push(O(t,a)),s}}function et(t,e,r=0){return S(t,e,r)===r}function q(t,e=0,r=m(t)-e){return Je(t,e,r)}function O(t,e,r=m(t)){return ze(t,e,r)}function re(t){return _e(t)}var tt=Object.getOwnPropertyNames,rt=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty;function _(t,e){return function(s,n,o){return t(s,n,o)&&e(s,n,o)}}function $(t){return function(r,s,n){if(!r||!s||typeof r!="object"||typeof s!="object")return t(r,s,n);var o=n.cache,a=o.get(r),i=o.get(s);if(a&&i)return a===s&&i===r;o.set(r,s),o.set(s,r);var c=t(r,s,n);return o.delete(r),o.delete(s),c}}function x(t){return tt(t).concat(rt(t))}var se=Object.hasOwn||function(t,e){return st.call(t,e)};function v(t,e){return t||e?t===e:t===e||t!==t&&e!==e}var ne="_owner",z=Object.getOwnPropertyDescriptor,B=Object.keys;function nt(t,e,r){var s=t.length;if(e.length!==s)return!1;for(;s-- >0;)if(!r.equals(t[s],e[s],s,s,t,e,r))return!1;return!0}function ot(t,e){return v(t.getTime(),e.getTime())}function J(t,e,r){if(t.size!==e.size)return!1;for(var s={},n=t.entries(),o=0,a,i;(a=n.next())&&!a.done;){for(var c=e.entries(),h=!1,u=0;(i=c.next())&&!i.done;){var l=a.value,f=l[0],b=l[1],d=i.value,y=d[0],j=d[1];!h&&!s[u]&&(h=r.equals(f,y,o,u,t,e,r)&&r.equals(b,j,f,y,t,e,r))&&(s[u]=!0),u++}if(!h)return!1;o++}return!0}function at(t,e,r){var s=B(t),n=s.length;if(B(e).length!==n)return!1;for(var o;n-- >0;)if(o=s[n],o===ne&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!se(e,o)||!r.equals(t[o],e[o],o,o,t,e,r))return!1;return!0}function w(t,e,r){var s=x(t),n=s.length;if(x(e).length!==n)return!1;for(var o,a,i;n-- >0;)if(o=s[n],o===ne&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!se(e,o)||!r.equals(t[o],e[o],o,o,t,e,r)||(a=z(t,o),i=z(e,o),(a||i)&&(!a||!i||a.configurable!==i.configurable||a.enumerable!==i.enumerable||a.writable!==i.writable)))return!1;return!0}function it(t,e){return v(t.valueOf(),e.valueOf())}function ut(t,e){return t.source===e.source&&t.flags===e.flags}function G(t,e,r){if(t.size!==e.size)return!1;for(var s={},n=t.values(),o,a;(o=n.next())&&!o.done;){for(var i=e.values(),c=!1,h=0;(a=i.next())&&!a.done;)!c&&!s[h]&&(c=r.equals(o.value,a.value,o.value,a.value,t,e,r))&&(s[h]=!0),h++;if(!c)return!1}return!0}function lt(t,e){var r=t.length;if(e.length!==r)return!1;for(;r-- >0;)if(t[r]!==e[r])return!1;return!0}var ct="[object Arguments]",ft="[object Boolean]",ht="[object Date]",pt="[object Map]",mt="[object Number]",dt="[object Object]",bt="[object RegExp]",gt="[object Set]",Nt="[object String]",vt=Array.isArray,U=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,V=Object.assign,yt=Object.prototype.toString.call.bind(Object.prototype.toString);function wt(t){var e=t.areArraysEqual,r=t.areDatesEqual,s=t.areMapsEqual,n=t.areObjectsEqual,o=t.arePrimitiveWrappersEqual,a=t.areRegExpsEqual,i=t.areSetsEqual,c=t.areTypedArraysEqual;return function(u,l,f){if(u===l)return!0;if(u==null||l==null||typeof u!="object"||typeof l!="object")return u!==u&&l!==l;var b=u.constructor;if(b!==l.constructor)return!1;if(b===Object)return n(u,l,f);if(vt(u))return e(u,l,f);if(U!=null&&U(u))return c(u,l,f);if(b===Date)return r(u,l,f);if(b===RegExp)return a(u,l,f);if(b===Map)return s(u,l,f);if(b===Set)return i(u,l,f);var d=yt(u);return d===ht?r(u,l,f):d===bt?a(u,l,f):d===pt?s(u,l,f):d===gt?i(u,l,f):d===dt?typeof u.then!="function"&&typeof l.then!="function"&&n(u,l,f):d===ct?n(u,l,f):d===ft||d===mt||d===Nt?o(u,l,f):!1}}function Et(t){var e=t.circular,r=t.createCustomConfig,s=t.strict,n={areArraysEqual:s?w:nt,areDatesEqual:ot,areMapsEqual:s?_(J,w):J,areObjectsEqual:s?w:at,arePrimitiveWrappersEqual:it,areRegExpsEqual:ut,areSetsEqual:s?_(G,w):G,areTypedArraysEqual:s?w:lt};if(r&&(n=V({},n,r(n))),e){var o=$(n.areArraysEqual),a=$(n.areMapsEqual),i=$(n.areObjectsEqual),c=$(n.areSetsEqual);n=V({},n,{areArraysEqual:o,areMapsEqual:a,areObjectsEqual:i,areSetsEqual:c})}return n}function Ot(t){return function(e,r,s,n,o,a,i){return t(e,r,i)}}function $t(t){var e=t.circular,r=t.comparator,s=t.createState,n=t.equals,o=t.strict;if(s)return function(c,h){var u=s(),l=u.cache,f=l===void 0?e?new WeakMap:void 0:l,b=u.meta;return r(c,h,{cache:f,equals:n,meta:b,strict:o})};if(e)return function(c,h){return r(c,h,{cache:new WeakMap,equals:n,meta:void 0,strict:o})};var a={cache:void 0,equals:n,meta:void 0,strict:o};return function(c,h){return r(c,h,a)}}var At=g();g({strict:!0});g({circular:!0});g({circular:!0,strict:!0});g({createInternalComparator:function(){return v}});g({strict:!0,createInternalComparator:function(){return v}});g({circular:!0,createInternalComparator:function(){return v}});g({circular:!0,createInternalComparator:function(){return v},strict:!0});function g(t){t===void 0&&(t={});var e=t.circular,r=e===void 0?!1:e,s=t.createInternalComparator,n=t.createState,o=t.strict,a=o===void 0?!1:o,i=Et(t),c=wt(i),h=s?s(c):Ot(c);return $t({circular:r,comparator:c,createState:n,equals:h,strict:a})}function St(t,e){return At(t,e)}function M(t,e,r){return JSON.stringify(t,(n,o)=>{let a=o;return e&&(a=e(n,a)),a===void 0&&(a=null),a},r)}function oe(t,e){function r(n){return Object.keys(n).forEach(o=>{n[o]===null?n[o]=void 0:typeof n[o]=="object"&&(n[o]=r(n[o]))}),n}const s=JSON.parse(t,e);if(s!==null)return typeof s=="object"?r(s):s}function qt(t){try{const e=M(t);return e===M(oe(e))}catch{return!1}}const jt=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),ae={title:"Platform.Bible menus",type:"object",properties:{mainMenu:{description:"Top level menu for the application",$ref:"#/$defs/multiColumnMenu"},defaultWebViewTopMenu:{description:"Default top menu for web views that don't specify their own",$ref:"#/$defs/multiColumnMenu"},defaultWebViewContextMenu:{description:"Default context menu for web views that don't specify their own",$ref:"#/$defs/singleColumnMenu"},webViewMenus:{description:"Menus that apply per web view in the application",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{$ref:"#/$defs/menusForOneWebView"}},additionalProperties:!1}},required:["mainMenu","defaultWebViewTopMenu","defaultWebViewContextMenu","webViewMenus"],additionalProperties:!1,$defs:{localizeKey:{description:"Identifier for a string that will be localized in a menu based on the user's UI language",type:"string",pattern:"^%[\\w\\-\\.]+%$"},referencedItem:{description:"Name of some UI element (i.e., tab, column, group, menu item) or some PAPI object (i.e., command)",type:"string",pattern:"^[\\w\\-]+\\.[\\w\\-]+$"},columnsWithHeaders:{description:"Group of columns that can be combined with other columns to form a multi-column menu",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single column with a header string",type:"object",properties:{label:{description:"Header text for this this column in the UI",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},order:{description:"Relative order of this column compared to other columns (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu groups to this column",type:"boolean"}},required:["label","order"],additionalProperties:!1}},properties:{isExtensible:{description:"Defines whether contributions are allowed to add columns to this multi-column menu",type:"boolean"}}},menuGroups:{description:"Group of menu items that can be combined with other groups to form a single menu/submenu. Groups are separated using a line within the menu/submenu.",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single group that contains menu items",type:"object",oneOf:[{properties:{column:{description:"Column where this group belongs, not required for single column menus",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["order"],additionalProperties:!1},{properties:{menuItem:{description:"Menu item that anchors the submenu where this group belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["menuItem","order"],additionalProperties:!1}]}},additionalProperties:!1},menuItem:{description:"Single item in a menu that can be clicked on to take an action or can be the parent of a submenu",type:"object",oneOf:[{properties:{id:{description:"ID for this menu item that holds a submenu",$ref:"#/$defs/referencedItem"}},required:["id"]},{properties:{command:{description:"Name of the PAPI command to run when this menu item is selected.",$ref:"#/$defs/referencedItem"},iconPathBefore:{description:"Path to the icon to display before the menu text",type:"string"},iconPathAfter:{description:"Path to the icon to display after the menu text",type:"string"}},required:["command"]}],properties:{label:{description:"Key that represents the text of this menu item to display",$ref:"#/$defs/localizeKey"},tooltip:{description:"Key that represents the text to display if a mouse pointer hovers over the menu item",$ref:"#/$defs/localizeKey"},searchTerms:{description:"Key that represents additional words the platform should reference when users are searching for menu items",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},group:{description:"Group to which this menu item belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this menu item compared to other menu items in the same group (sorted ascending)",type:"number"}},required:["label","group","order"],unevaluatedProperties:!1},groupsAndItems:{description:"Core schema for a column",type:"object",properties:{groups:{description:"Groups that belong in this menu",$ref:"#/$defs/menuGroups"},items:{description:"List of menu items that belong in this menu",type:"array",items:{$ref:"#/$defs/menuItem"},uniqueItems:!0}},required:["groups","items"]},singleColumnMenu:{description:"Menu that contains a column without a header",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"}],unevaluatedProperties:!1},multiColumnMenu:{description:"Menu that can contain multiple columns with headers",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"},{properties:{columns:{description:"Columns that belong in this menu",$ref:"#/$defs/columnsWithHeaders"}},required:["columns"]}],unevaluatedProperties:!1},menusForOneWebView:{description:"Set of menus that are associated with a single tab",type:"object",properties:{includeDefaults:{description:"Indicates whether the platform default menus should be included for this webview",type:"boolean"},topMenu:{description:"Menu that opens when you click on the top left corner of a tab",$ref:"#/$defs/multiColumnMenu"},contextMenu:{description:"Menu that opens when you right click on the main body/area of a tab",$ref:"#/$defs/singleColumnMenu"}},additionalProperties:!1}}};Object.freeze(ae);exports.AsyncVariable=me;exports.DocumentCombinerEngine=$e;exports.FIRST_SCR_BOOK_NUM=K;exports.FIRST_SCR_CHAPTER_NUM=Z;exports.FIRST_SCR_VERSE_NUM=X;exports.LAST_SCR_BOOK_NUM=L;exports.PlatformEventEmitter=je;exports.UnsubscriberAsyncList=qe;exports.aggregateUnsubscriberAsyncs=Re;exports.aggregateUnsubscribers=Te;exports.at=Fe;exports.charAt=He;exports.codePointAt=ke;exports.createSyncProxyForAsyncObject=Oe;exports.debounce=be;exports.deepClone=E;exports.deepEqual=St;exports.deserialize=oe;exports.endsWith=We;exports.getAllObjectFunctionNames=Ee;exports.getChaptersForBook=Q;exports.getErrorMessage=ye;exports.groupBy=ge;exports.htmlEncode=jt;exports.includes=Ke;exports.indexOf=S;exports.isSerializable=qt;exports.isString=F;exports.lastIndexOf=te;exports.length=m;exports.menuDocumentSchema=ae;exports.newGuid=de;exports.normalize=Le;exports.offsetBook=Ce;exports.offsetChapter=Me;exports.offsetVerse=Pe;exports.padEnd=Ze;exports.padStart=Xe;exports.serialize=M;exports.slice=Qe;exports.split=Ye;exports.startsWith=et;exports.substring=O;exports.toArray=re;exports.wait=H;exports.waitForDuration=we;
//# sourceMappingURL=index.cjs.map
