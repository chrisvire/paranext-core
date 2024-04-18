"use strict";var we=Object.defineProperty;var Ee=(t,e,r)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var d=(t,e,r)=>(Ee(t,typeof e!="symbol"?e+"":e,r),r);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const Oe=require("async-mutex");class je{constructor(e,r=1e4){d(this,"variableName");d(this,"promiseToValue");d(this,"resolver");d(this,"rejecter");this.variableName=e,this.promiseToValue=new Promise((s,i)=>{this.resolver=s,this.rejecter=i}),r>0&&setTimeout(()=>{this.rejecter&&(this.rejecter(`Timeout reached when waiting for ${this.variableName} to settle`),this.complete())},r),Object.seal(this)}get promise(){return this.promiseToValue}get hasSettled(){return Object.isFrozen(this)}resolveToValue(e,r=!1){if(this.resolver)console.debug(`${this.variableName} is being resolved now`),this.resolver(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent resolution of ${this.variableName}`)}}rejectWithReason(e,r=!1){if(this.rejecter)console.debug(`${this.variableName} is being rejected now`),this.rejecter(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent rejection of ${this.variableName}`)}}complete(){this.resolver=void 0,this.rejecter=void 0,Object.freeze(this)}}class H{constructor(){d(this,"subscribe",this.event);d(this,"subscriptions");d(this,"lazyEvent");d(this,"isDisposed",!1);d(this,"dispose",()=>this.disposeFn());d(this,"emit",e=>{this.emitFn(e)})}get event(){return this.assertNotDisposed(),this.lazyEvent||(this.lazyEvent=e=>{if(!e||typeof e!="function")throw new Error("Event handler callback must be a function!");return this.subscriptions||(this.subscriptions=[]),this.subscriptions.push(e),()=>{if(!this.subscriptions)return!1;const r=this.subscriptions.indexOf(e);return r<0?!1:(this.subscriptions.splice(r,1),!0)}}),this.lazyEvent}emitFn(e){var r;this.assertNotDisposed(),(r=this.subscriptions)==null||r.forEach(s=>s(e))}assertNotDisposed(){if(this.isDisposed)throw new Error("Emitter is disposed")}disposeFn(){return this.assertNotDisposed(),this.isDisposed=!0,this.subscriptions=void 0,this.lazyEvent=void 0,Promise.resolve(!0)}}function Se(){return"00-0-4-1-000".replace(/[^-]/g,t=>((Math.random()+~~t)*65536>>t).toString(16).padStart(4,"0"))}function W(t){return typeof t=="string"||t instanceof String}function v(t){return JSON.parse(JSON.stringify(t))}function Ae(t,e=300){if(W(t))throw new Error("Tried to debounce a string! Could be XSS");let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>t(...s),e)}}function Pe(t,e,r){const s=new Map;return t.forEach(i=>{const n=e(i),o=s.get(n),a=r?r(i,n):i;o?o.push(a):s.set(n,[a])}),s}function Ce(t){return typeof t=="object"&&t!==null&&"message"in t&&typeof t.message=="string"}function qe(t){if(Ce(t))return t;try{return new Error(JSON.stringify(t))}catch{return new Error(String(t))}}function Me(t){return qe(t).message}function L(t){return new Promise(e=>setTimeout(e,t))}function Te(t,e){const r=L(e).then(()=>{});return Promise.any([r,t()])}function De(t,e="obj"){const r=new Set;Object.getOwnPropertyNames(t).forEach(i=>{try{typeof t[i]=="function"&&r.add(i)}catch(n){console.debug(`Skipping ${i} on ${e} due to error: ${n}`)}});let s=Object.getPrototypeOf(t);for(;s&&Object.getPrototypeOf(s);)Object.getOwnPropertyNames(s).forEach(i=>{try{typeof t[i]=="function"&&r.add(i)}catch(n){console.debug(`Skipping ${i} on ${e}'s prototype due to error: ${n}`)}}),s=Object.getPrototypeOf(s);return r}function xe(t,e={}){return new Proxy(e,{get(r,s){return s in r?r[s]:async(...i)=>(await t())[s](...i)}})}class Z{constructor(e,r){d(this,"baseDocument");d(this,"contributions",new Map);d(this,"latestOutput");d(this,"options");d(this,"onDidRebuildEmitter",new H);d(this,"onDidRebuild",this.onDidRebuildEmitter.subscribe);this.baseDocument=e,this.options=r,this.updateBaseDocument(e)}updateBaseDocument(e){return this.validateBaseDocument(e),this.baseDocument=this.options.copyDocuments?v(e):e,this.baseDocument=this.transformBaseDocumentAfterValidation(this.baseDocument),this.rebuild()}addOrUpdateContribution(e,r){this.validateContribution(e,r);const s=this.contributions.get(e);let i=this.options.copyDocuments&&r?v(r):r;i=this.transformContributionAfterValidation(e,i),this.contributions.set(e,i);try{return this.rebuild()}catch(n){throw s?this.contributions.set(e,s):this.contributions.delete(e),new Error(`Error when setting the document named ${e}: ${n}`)}}deleteContribution(e){const r=this.contributions.get(e);if(!r)throw new Error(`${e} does not exist`);this.contributions.delete(e);try{return this.rebuild()}catch(s){throw this.contributions.set(e,r),new Error(`Error when deleting the document named ${e}: ${s}`)}}deleteAllContributions(){if(this.contributions.size<=0)return this.latestOutput;const e=[...this.contributions.entries()];e.forEach(([r])=>this.contributions.delete(r));try{return this.rebuild()}catch(r){throw e.forEach(([s,i])=>this.contributions.set(s,i)),new Error(`Error when deleting all contributions: ${r}`)}}rebuild(){if(this.contributions.size===0){let r=v(this.baseDocument);return r=this.transformFinalOutputBeforeValidation(r),this.validateOutput(r),this.latestOutput=r,this.onDidRebuildEmitter.emit(void 0),this.latestOutput}let e=this.baseDocument;return this.contributions.forEach(r=>{e=Re(e,r,this.options.ignoreDuplicateProperties),this.validateOutput(e)}),e=this.transformFinalOutputBeforeValidation(e),this.validateOutput(e),this.latestOutput=e,this.onDidRebuildEmitter.emit(void 0),this.latestOutput}transformBaseDocumentAfterValidation(e){return e}transformContributionAfterValidation(e,r){return r}validateBaseDocument(e){}validateContribution(e,r){}validateOutput(e){}transformFinalOutputBeforeValidation(e){return e}}function R(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||Array.isArray(r))&&(e=!1)}),e}function I(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||!Array.isArray(r))&&(e=!1)}),e}function Re(t,e,r){const s=v(t);return e?X(s,v(e),r):s}function X(t,e,r){if(!e)return t;if(R(t,e)){const s=t,i=e;Object.keys(i).forEach(n=>{if(Object.hasOwn(s,n)){if(R(s[n],i[n]))s[n]=X(s[n],i[n],r);else if(I(s[n],i[n]))s[n]=s[n].concat(i[n]);else if(!r)throw new Error(`Cannot merge objects: key "${n}" already exists in the target object`)}else s[n]=i[n]})}else I(t,e)&&t.push(...e);return t}class Ie extends Z{constructor(e,r){super(e,r)}get output(){return this.latestOutput}}class Be{constructor(e="Anonymous"){d(this,"unsubscribers",new Set);this.name=e}add(...e){e.forEach(r=>{"dispose"in r?this.unsubscribers.add(r.dispose):this.unsubscribers.add(r)})}async runAllUnsubscribers(){const e=[...this.unsubscribers].map(s=>s()),r=await Promise.all(e);return this.unsubscribers.clear(),r.every((s,i)=>(s||console.error(`UnsubscriberAsyncList ${this.name}: Unsubscriber at index ${i} failed!`),s))}}class Q extends Oe.Mutex{}class ze{constructor(){d(this,"mutexesByID",new Map)}get(e){let r=this.mutexesByID.get(e);return r||(r=new Q,this.mutexesByID.set(e,r),r)}}const Y=[{shortName:"ERR",fullNames:["ERROR"],chapters:-1},{shortName:"GEN",fullNames:["Genesis"],chapters:50},{shortName:"EXO",fullNames:["Exodus"],chapters:40},{shortName:"LEV",fullNames:["Leviticus"],chapters:27},{shortName:"NUM",fullNames:["Numbers"],chapters:36},{shortName:"DEU",fullNames:["Deuteronomy"],chapters:34},{shortName:"JOS",fullNames:["Joshua"],chapters:24},{shortName:"JDG",fullNames:["Judges"],chapters:21},{shortName:"RUT",fullNames:["Ruth"],chapters:4},{shortName:"1SA",fullNames:["1 Samuel"],chapters:31},{shortName:"2SA",fullNames:["2 Samuel"],chapters:24},{shortName:"1KI",fullNames:["1 Kings"],chapters:22},{shortName:"2KI",fullNames:["2 Kings"],chapters:25},{shortName:"1CH",fullNames:["1 Chronicles"],chapters:29},{shortName:"2CH",fullNames:["2 Chronicles"],chapters:36},{shortName:"EZR",fullNames:["Ezra"],chapters:10},{shortName:"NEH",fullNames:["Nehemiah"],chapters:13},{shortName:"EST",fullNames:["Esther"],chapters:10},{shortName:"JOB",fullNames:["Job"],chapters:42},{shortName:"PSA",fullNames:["Psalm","Psalms"],chapters:150},{shortName:"PRO",fullNames:["Proverbs"],chapters:31},{shortName:"ECC",fullNames:["Ecclesiastes"],chapters:12},{shortName:"SNG",fullNames:["Song of Solomon","Song of Songs"],chapters:8},{shortName:"ISA",fullNames:["Isaiah"],chapters:66},{shortName:"JER",fullNames:["Jeremiah"],chapters:52},{shortName:"LAM",fullNames:["Lamentations"],chapters:5},{shortName:"EZK",fullNames:["Ezekiel"],chapters:48},{shortName:"DAN",fullNames:["Daniel"],chapters:12},{shortName:"HOS",fullNames:["Hosea"],chapters:14},{shortName:"JOL",fullNames:["Joel"],chapters:3},{shortName:"AMO",fullNames:["Amos"],chapters:9},{shortName:"OBA",fullNames:["Obadiah"],chapters:1},{shortName:"JON",fullNames:["Jonah"],chapters:4},{shortName:"MIC",fullNames:["Micah"],chapters:7},{shortName:"NAM",fullNames:["Nahum"],chapters:3},{shortName:"HAB",fullNames:["Habakkuk"],chapters:3},{shortName:"ZEP",fullNames:["Zephaniah"],chapters:3},{shortName:"HAG",fullNames:["Haggai"],chapters:2},{shortName:"ZEC",fullNames:["Zechariah"],chapters:14},{shortName:"MAL",fullNames:["Malachi"],chapters:4},{shortName:"MAT",fullNames:["Matthew"],chapters:28},{shortName:"MRK",fullNames:["Mark"],chapters:16},{shortName:"LUK",fullNames:["Luke"],chapters:24},{shortName:"JHN",fullNames:["John"],chapters:21},{shortName:"ACT",fullNames:["Acts"],chapters:28},{shortName:"ROM",fullNames:["Romans"],chapters:16},{shortName:"1CO",fullNames:["1 Corinthians"],chapters:16},{shortName:"2CO",fullNames:["2 Corinthians"],chapters:13},{shortName:"GAL",fullNames:["Galatians"],chapters:6},{shortName:"EPH",fullNames:["Ephesians"],chapters:6},{shortName:"PHP",fullNames:["Philippians"],chapters:4},{shortName:"COL",fullNames:["Colossians"],chapters:4},{shortName:"1TH",fullNames:["1 Thessalonians"],chapters:5},{shortName:"2TH",fullNames:["2 Thessalonians"],chapters:3},{shortName:"1TI",fullNames:["1 Timothy"],chapters:6},{shortName:"2TI",fullNames:["2 Timothy"],chapters:4},{shortName:"TIT",fullNames:["Titus"],chapters:3},{shortName:"PHM",fullNames:["Philemon"],chapters:1},{shortName:"HEB",fullNames:["Hebrews"],chapters:13},{shortName:"JAS",fullNames:["James"],chapters:5},{shortName:"1PE",fullNames:["1 Peter"],chapters:5},{shortName:"2PE",fullNames:["2 Peter"],chapters:3},{shortName:"1JN",fullNames:["1 John"],chapters:5},{shortName:"2JN",fullNames:["2 John"],chapters:1},{shortName:"3JN",fullNames:["3 John"],chapters:1},{shortName:"JUD",fullNames:["Jude"],chapters:1},{shortName:"REV",fullNames:["Revelation"],chapters:22}],ee=1,te=Y.length-1,re=1,se=1,ie=t=>{var e;return((e=Y[t])==null?void 0:e.chapters)??-1},_e=(t,e)=>({bookNum:Math.max(ee,Math.min(t.bookNum+e,te)),chapterNum:1,verseNum:1}),Ge=(t,e)=>({...t,chapterNum:Math.min(Math.max(re,t.chapterNum+e),ie(t.bookNum)),verseNum:1}),Ve=(t,e)=>({...t,verseNum:Math.max(se,t.verseNum+e)}),Je=t=>(...e)=>t.map(s=>s(...e)).every(s=>s),Ke=t=>async(...e)=>{const r=t.map(async s=>s(...e));return(await Promise.all(r)).every(s=>s)};var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y={},Ue=()=>{const t="\\ud800-\\udfff",e="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",i="\\u1ab0-\\u1aff",n="\\u1dc0-\\u1dff",o=e+r+s+i+n,a="\\ufe0e\\ufe0f",c="\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93",p=`[${t}]`,u=`[${o}]`,l="\\ud83c[\\udffb-\\udfff]",f=`(?:${u}|${l})`,g=`[^${t}]`,m="(?:\\uD83C[\\uDDE6-\\uDDFF]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",P="\\u200d",be="(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)",ye=`[${c}]`,D=`${f}?`,x=`[${a}]?`,ve=`(?:${P}(?:${[g,m,$].join("|")})${x+D})*`,Ne=x+D+ve,$e=`(?:${[`${g}${u}?`,u,m,$,p,ye].join("|")})`;return new RegExp(`${be}|${l}(?=${l})|${$e+Ne}`,"g")},Fe=B&&B.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(y,"__esModule",{value:!0});var j=Fe(Ue);function C(t){if(typeof t!="string")throw new Error("A string is expected as input");return t.match(j.default())||[]}var ke=y.toArray=C;function M(t){if(typeof t!="string")throw new Error("Input must be a string");var e=t.match(j.default());return e===null?0:e.length}var He=y.length=M;function ne(t,e,r){if(e===void 0&&(e=0),typeof t!="string")throw new Error("Input must be a string");(typeof e!="number"||e<0)&&(e=0),typeof r=="number"&&r<0&&(r=0);var s=t.match(j.default());return s?s.slice(e,r).join(""):""}var We=y.substring=ne;function Le(t,e,r){if(e===void 0&&(e=0),typeof t!="string")throw new Error("Input must be a string");var s=M(t);if(typeof e!="number"&&(e=parseInt(e,10)),e>=s)return"";e<0&&(e+=s);var i;typeof r>"u"?i=s:(typeof r!="number"&&(r=parseInt(r,10)),i=r>=0?r+e:e);var n=t.match(j.default());return n?n.slice(e,i).join(""):""}var Ze=y.substr=Le;function Xe(t,e,r,s){if(e===void 0&&(e=16),r===void 0&&(r="#"),s===void 0&&(s="right"),typeof t!="string"||typeof e!="number")throw new Error("Invalid arguments specified");if(["left","right"].indexOf(s)===-1)throw new Error("Pad position should be either left or right");typeof r!="string"&&(r=String(r));var i=M(t);if(i>e)return ne(t,0,e);if(i<e){var n=r.repeat(e-i);return s==="left"?n+t:t+n}return t}var oe=y.limit=Xe;function Qe(t,e,r){if(r===void 0&&(r=0),typeof t!="string")throw new Error("Input must be a string");if(t==="")return e===""?0:-1;r=Number(r),r=isNaN(r)?0:r,e=String(e);var s=C(t);if(r>=s.length)return e===""?s.length:-1;if(e==="")return r;var i=C(e),n=!1,o;for(o=r;o<s.length;o+=1){for(var a=0;a<i.length&&i[a]===s[o+a];)a+=1;if(a===i.length&&i[a-1]===s[o+a-1]){n=!0;break}}return n?o:-1}var Ye=y.indexOf=Qe;function et(t,e){if(!(e>h(t)||e<-h(t)))return A(t,e,1)}function tt(t,e){return e<0||e>h(t)-1?"":A(t,e,1)}function rt(t,e){if(!(e<0||e>h(t)-1))return A(t,e,1).codePointAt(0)}function st(t,e,r=h(t)){const s=ue(t,e);return!(s===-1||s+h(e)!==r)}function ae(t,e,r=0){const s=E(t,r);return S(s,e)!==-1}function S(t,e,r=0){return Ye(t,e,r)}function ue(t,e,r){let s=r===void 0?h(t):r;s<0?s=0:s>=h(t)&&(s=h(t)-1);for(let i=s;i>=0;i--)if(A(t,i,h(e))===e)return i;return-1}function h(t){return He(t)}function it(t,e){const r=e.toUpperCase();return r==="NONE"?t:t.normalize(r)}function nt(t,e,r=" "){return e<=h(t)?t:oe(t,e,r,"right")}function ot(t,e,r=" "){return e<=h(t)?t:oe(t,e,r,"left")}function z(t,e){return e>t?t:e<-t?0:e<0?e+t:e}function at(t,e,r){const s=h(t);if(e>s||r&&(e>r&&!(e>=0&&e<s&&r<0&&r>-s)||r<-s))return"";const i=z(s,e),n=r?z(s,r):void 0;return E(t,i,n)}function ut(t,e,r){const s=[];if(r!==void 0&&r<=0)return[t];if(e==="")return le(t).slice(0,r);let i=e;(typeof e=="string"||e instanceof RegExp&&!ae(e.flags,"g"))&&(i=new RegExp(e,"g"));const n=t.match(i);let o=0;if(!n)return[t];for(let a=0;a<(r?r-1:n.length);a++){const c=S(t,n[a],o),p=h(n[a]);if(s.push(E(t,o,c)),o=c+p,r!==void 0&&s.length===r)break}return s.push(E(t,o)),s}function lt(t,e,r=0){return S(t,e,r)===r}function A(t,e=0,r=h(t)-e){return Ze(t,e,r)}function E(t,e,r=h(t)){return We(t,e,r)}function le(t){return ke(t)}var ct=Object.getOwnPropertyNames,ft=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty;function _(t,e){return function(s,i,n){return t(s,i,n)&&e(s,i,n)}}function O(t){return function(r,s,i){if(!r||!s||typeof r!="object"||typeof s!="object")return t(r,s,i);var n=i.cache,o=n.get(r),a=n.get(s);if(o&&a)return o===s&&a===r;n.set(r,s),n.set(s,r);var c=t(r,s,i);return n.delete(r),n.delete(s),c}}function G(t){return ct(t).concat(ft(t))}var ce=Object.hasOwn||function(t,e){return pt.call(t,e)};function N(t,e){return t||e?t===e:t===e||t!==t&&e!==e}var fe="_owner",V=Object.getOwnPropertyDescriptor,J=Object.keys;function dt(t,e,r){var s=t.length;if(e.length!==s)return!1;for(;s-- >0;)if(!r.equals(t[s],e[s],s,s,t,e,r))return!1;return!0}function ht(t,e){return N(t.getTime(),e.getTime())}function K(t,e,r){if(t.size!==e.size)return!1;for(var s={},i=t.entries(),n=0,o,a;(o=i.next())&&!o.done;){for(var c=e.entries(),p=!1,u=0;(a=c.next())&&!a.done;){var l=o.value,f=l[0],g=l[1],m=a.value,$=m[0],P=m[1];!p&&!s[u]&&(p=r.equals(f,$,n,u,t,e,r)&&r.equals(g,P,f,$,t,e,r))&&(s[u]=!0),u++}if(!p)return!1;n++}return!0}function mt(t,e,r){var s=J(t),i=s.length;if(J(e).length!==i)return!1;for(var n;i-- >0;)if(n=s[i],n===fe&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!ce(e,n)||!r.equals(t[n],e[n],n,n,t,e,r))return!1;return!0}function w(t,e,r){var s=G(t),i=s.length;if(G(e).length!==i)return!1;for(var n,o,a;i-- >0;)if(n=s[i],n===fe&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!ce(e,n)||!r.equals(t[n],e[n],n,n,t,e,r)||(o=V(t,n),a=V(e,n),(o||a)&&(!o||!a||o.configurable!==a.configurable||o.enumerable!==a.enumerable||o.writable!==a.writable)))return!1;return!0}function gt(t,e){return N(t.valueOf(),e.valueOf())}function bt(t,e){return t.source===e.source&&t.flags===e.flags}function U(t,e,r){if(t.size!==e.size)return!1;for(var s={},i=t.values(),n,o;(n=i.next())&&!n.done;){for(var a=e.values(),c=!1,p=0;(o=a.next())&&!o.done;)!c&&!s[p]&&(c=r.equals(n.value,o.value,n.value,o.value,t,e,r))&&(s[p]=!0),p++;if(!c)return!1}return!0}function yt(t,e){var r=t.length;if(e.length!==r)return!1;for(;r-- >0;)if(t[r]!==e[r])return!1;return!0}var vt="[object Arguments]",Nt="[object Boolean]",$t="[object Date]",wt="[object Map]",Et="[object Number]",Ot="[object Object]",jt="[object RegExp]",St="[object Set]",At="[object String]",Pt=Array.isArray,F=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,k=Object.assign,Ct=Object.prototype.toString.call.bind(Object.prototype.toString);function qt(t){var e=t.areArraysEqual,r=t.areDatesEqual,s=t.areMapsEqual,i=t.areObjectsEqual,n=t.arePrimitiveWrappersEqual,o=t.areRegExpsEqual,a=t.areSetsEqual,c=t.areTypedArraysEqual;return function(u,l,f){if(u===l)return!0;if(u==null||l==null||typeof u!="object"||typeof l!="object")return u!==u&&l!==l;var g=u.constructor;if(g!==l.constructor)return!1;if(g===Object)return i(u,l,f);if(Pt(u))return e(u,l,f);if(F!=null&&F(u))return c(u,l,f);if(g===Date)return r(u,l,f);if(g===RegExp)return o(u,l,f);if(g===Map)return s(u,l,f);if(g===Set)return a(u,l,f);var m=Ct(u);return m===$t?r(u,l,f):m===jt?o(u,l,f):m===wt?s(u,l,f):m===St?a(u,l,f):m===Ot?typeof u.then!="function"&&typeof l.then!="function"&&i(u,l,f):m===vt?i(u,l,f):m===Nt||m===Et||m===At?n(u,l,f):!1}}function Mt(t){var e=t.circular,r=t.createCustomConfig,s=t.strict,i={areArraysEqual:s?w:dt,areDatesEqual:ht,areMapsEqual:s?_(K,w):K,areObjectsEqual:s?w:mt,arePrimitiveWrappersEqual:gt,areRegExpsEqual:bt,areSetsEqual:s?_(U,w):U,areTypedArraysEqual:s?w:yt};if(r&&(i=k({},i,r(i))),e){var n=O(i.areArraysEqual),o=O(i.areMapsEqual),a=O(i.areObjectsEqual),c=O(i.areSetsEqual);i=k({},i,{areArraysEqual:n,areMapsEqual:o,areObjectsEqual:a,areSetsEqual:c})}return i}function Tt(t){return function(e,r,s,i,n,o,a){return t(e,r,a)}}function Dt(t){var e=t.circular,r=t.comparator,s=t.createState,i=t.equals,n=t.strict;if(s)return function(c,p){var u=s(),l=u.cache,f=l===void 0?e?new WeakMap:void 0:l,g=u.meta;return r(c,p,{cache:f,equals:i,meta:g,strict:n})};if(e)return function(c,p){return r(c,p,{cache:new WeakMap,equals:i,meta:void 0,strict:n})};var o={cache:void 0,equals:i,meta:void 0,strict:n};return function(c,p){return r(c,p,o)}}var xt=b();b({strict:!0});b({circular:!0});b({circular:!0,strict:!0});b({createInternalComparator:function(){return N}});b({strict:!0,createInternalComparator:function(){return N}});b({circular:!0,createInternalComparator:function(){return N}});b({circular:!0,createInternalComparator:function(){return N},strict:!0});function b(t){t===void 0&&(t={});var e=t.circular,r=e===void 0?!1:e,s=t.createInternalComparator,i=t.createState,n=t.strict,o=n===void 0?!1:n,a=Mt(t),c=qt(a),p=s?s(c):Tt(c);return Dt({circular:r,comparator:c,createState:i,equals:p,strict:o})}function Rt(t,e){return xt(t,e)}function q(t,e,r){return JSON.stringify(t,(i,n)=>{let o=n;return e&&(o=e(i,o)),o===void 0&&(o=null),o},r)}function pe(t,e){function r(i){return Object.keys(i).forEach(n=>{i[n]===null?i[n]=void 0:typeof i[n]=="object"&&(i[n]=r(i[n]))}),i}const s=JSON.parse(t,e);if(s!==null)return typeof s=="object"?r(s):s}function It(t){try{const e=q(t);return e===q(pe(e))}catch{return!1}}const Bt=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),de={title:"Platform.Bible menus",type:"object",properties:{mainMenu:{description:"Top level menu for the application",$ref:"#/$defs/multiColumnMenu"},defaultWebViewTopMenu:{description:"Default top menu for web views that don't specify their own",$ref:"#/$defs/multiColumnMenu"},defaultWebViewContextMenu:{description:"Default context menu for web views that don't specify their own",$ref:"#/$defs/singleColumnMenu"},webViewMenus:{description:"Menus that apply per web view in the application",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{$ref:"#/$defs/menusForOneWebView"}},additionalProperties:!1}},required:["mainMenu","defaultWebViewTopMenu","defaultWebViewContextMenu","webViewMenus"],additionalProperties:!1,$defs:{localizeKey:{description:"Identifier for a string that will be localized in a menu based on the user's UI language",type:"string",pattern:"^%[\\w\\-\\.]+%$"},referencedItem:{description:"Name of some UI element (i.e., tab, column, group, menu item) or some PAPI object (i.e., command)",type:"string",pattern:"^[\\w\\-]+\\.[\\w\\-]+$"},columnsWithHeaders:{description:"Group of columns that can be combined with other columns to form a multi-column menu",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single column with a header string",type:"object",properties:{label:{description:"Header text for this this column in the UI",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},order:{description:"Relative order of this column compared to other columns (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu groups to this column",type:"boolean"}},required:["label","order"],additionalProperties:!1}},properties:{isExtensible:{description:"Defines whether contributions are allowed to add columns to this multi-column menu",type:"boolean"}}},menuGroups:{description:"Group of menu items that can be combined with other groups to form a single menu/submenu. Groups are separated using a line within the menu/submenu.",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single group that contains menu items",type:"object",oneOf:[{properties:{column:{description:"Column where this group belongs, not required for single column menus",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["order"],additionalProperties:!1},{properties:{menuItem:{description:"Menu item that anchors the submenu where this group belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["menuItem","order"],additionalProperties:!1}]}},additionalProperties:!1},menuItem:{description:"Single item in a menu that can be clicked on to take an action or can be the parent of a submenu",type:"object",oneOf:[{properties:{id:{description:"ID for this menu item that holds a submenu",$ref:"#/$defs/referencedItem"}},required:["id"]},{properties:{command:{description:"Name of the PAPI command to run when this menu item is selected.",$ref:"#/$defs/referencedItem"},iconPathBefore:{description:"Path to the icon to display before the menu text",type:"string"},iconPathAfter:{description:"Path to the icon to display after the menu text",type:"string"}},required:["command"]}],properties:{label:{description:"Key that represents the text of this menu item to display",$ref:"#/$defs/localizeKey"},tooltip:{description:"Key that represents the text to display if a mouse pointer hovers over the menu item",$ref:"#/$defs/localizeKey"},searchTerms:{description:"Key that represents additional words the platform should reference when users are searching for menu items",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},group:{description:"Group to which this menu item belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this menu item compared to other menu items in the same group (sorted ascending)",type:"number"}},required:["label","group","order"],unevaluatedProperties:!1},groupsAndItems:{description:"Core schema for a column",type:"object",properties:{groups:{description:"Groups that belong in this menu",$ref:"#/$defs/menuGroups"},items:{description:"List of menu items that belong in this menu",type:"array",items:{$ref:"#/$defs/menuItem"},uniqueItems:!0}},required:["groups","items"]},singleColumnMenu:{description:"Menu that contains a column without a header",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"}],unevaluatedProperties:!1},multiColumnMenu:{description:"Menu that can contain multiple columns with headers",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"},{properties:{columns:{description:"Columns that belong in this menu",$ref:"#/$defs/columnsWithHeaders"}},required:["columns"]}],unevaluatedProperties:!1},menusForOneWebView:{description:"Set of menus that are associated with a single tab",type:"object",properties:{includeDefaults:{description:"Indicates whether the platform default menus should be included for this webview",type:"boolean"},topMenu:{description:"Menu that opens when you click on the top left corner of a tab",$ref:"#/$defs/multiColumnMenu"},contextMenu:{description:"Menu that opens when you right click on the main body/area of a tab",$ref:"#/$defs/singleColumnMenu"}},additionalProperties:!1}}};Object.freeze(de);const T={projectSettingsContribution:{description:"The data an extension provides to inform Platform.Bible of the project settings it provides",anyOf:[{$ref:"#/$defs/projectSettingsGroup"},{type:"array",items:{$ref:"#/$defs/projectSettingsGroup"}}]},projectSettingsGroup:{description:"Group of related settings definitions",type:"object",properties:{label:{description:"localizeKey that displays in the project settings dialog as the group name",$ref:"#/$defs/localizeKey"},description:{description:"localizeKey that displays in the project settings dialog to describe the group",$ref:"#/$defs/localizeKey"},properties:{$ref:"#/$defs/projectSettingProperties"}},required:["label","properties"]},projectSettingProperties:{description:"Object whose keys are setting IDs and whose values are settings objects",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{$ref:"#/$defs/projectSetting"}},additionalProperties:!1},projectSetting:{description:"A description of an extension's setting entry",anyOf:[{$ref:"#/$defs/extensionControlledProjectSetting"}]},extensionControlledProjectSetting:{description:"Setting definition that is validated by the extension.",allOf:[{$ref:"#/$defs/projectSettingBase"},{$ref:"#/$defs/modifierExtensionControlled"}]},projectSettingBase:{description:"Base information needed to describe a project setting entry",allOf:[{$ref:"#/$defs/settingBase"},{$ref:"#/$defs/modifierProject"}]},modifierProject:{description:"Modifies setting type to be project setting",type:"object",properties:{includeProjectTypes:{description:"`RegExp` pattern(s) to match against `projectType` (using the [`test`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) function) to determine whether this project setting should be displayed in the Project Settings Dialog of that `projectType`. null means do not show on any Project Settings dialog",anyOf:[{type:"null"},{type:"string"},{type:"array",items:{type:"string"}}]},excludeProjectTypes:{description:"`RegExp` pattern to match against `projectType` to determine if this project setting should absolutely not be displayed in the Project Settings dialog of that `projectType` even if it matches with `includeProjectTypes`",anyOf:[{type:"null"},{type:"string"},{type:"array",items:{type:"string"}}]}}},settingsContribution:{description:"The data an extension provides to inform Platform.Bible of the settings it provides",anyOf:[{$ref:"#/$defs/settingsGroup"},{type:"array",items:{$ref:"#/$defs/settingsGroup"}}]},settingsGroup:{description:"Group of related settings definitions",type:"object",properties:{label:{description:"localizeKey that displays in the settings dialog as the group name",$ref:"#/$defs/localizeKey"},description:{description:"localizeKey that displays in the settings dialog to describe the group",$ref:"#/$defs/localizeKey"},properties:{$ref:"#/$defs/settingProperties"}},required:["label","properties"]},settingProperties:{description:"Object whose keys are setting IDs and whose values are settings objects",type:"object",patternProperties:{"^[\\w-]+\\.[\\w-]+$":{$ref:"#/$defs/setting"}},additionalProperties:!1},setting:{description:"A description of an extension's setting entry",anyOf:[{$ref:"#/$defs/extensionControlledSetting"}]},extensionControlledSetting:{description:"Setting definition that is validated by the extension.",allOf:[{$ref:"#/$defs/settingBase"},{$ref:"#/$defs/modifierExtensionControlled"}]},settingBase:{description:"Base information needed to describe a setting entry",allOf:[{$ref:"#/$defs/stateBase"},{type:"object",properties:{label:{description:"localizeKey that displays in the settings dialog as the setting name",$ref:"#/$defs/localizeKey"},description:{description:"localizeKey that displays in the settings dialog to describe the setting",$ref:"#/$defs/localizeKey"}},required:["label"]}]},projectStateContribution:{description:"The data an extension provides to inform Platform.Bible of the project state it provides",$ref:"#/$defs/userStateProperties"},userStateContribution:{description:"The data an extension provides to inform Platform.Bible of the user state it provides",$ref:"#/$defs/userStateProperties"},userStateProperties:{description:"Object whose keys are state IDs and whose values are state objects",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{$ref:"#/$defs/userState"}},additionalProperties:!1},userState:{description:"A description of an extension's user state entry",anyOf:[{$ref:"#/$defs/extensionControlledState"}]},extensionControlledState:{description:"State definition that is validated by the extension.",allOf:[{$ref:"#/$defs/stateBase"},{$ref:"#/$defs/modifierExtensionControlled"}]},modifierExtensionControlled:{description:'Modifies state/setting type to be extension-controlled. "Extension-controlled" means the extension provides the component and the validator for the state/setting, so the state/setting is controlled by the extension.',not:{anyOf:[{type:"object",required:["platformType"]},{type:"object",required:["type"]}]}},stateBase:{description:"Base information needed to describe a state entry",type:"object",properties:{default:{description:"default value for the state/setting",type:"any"},derivesFrom:{description:"a state/setting ID whose value to set to this state/setting's starting value the first time this state/setting is loaded",$ref:"#/$defs/id"}},required:["default"]},localizeKey:{description:"Identifier for a string that will be localized based on the user's UI language",type:"string",pattern:"^%[\\w\\-\\.]+%$",tsType:"LocalizeKey"},id:{description:"",type:"string",pattern:"^[\\w\\-]+\\.[\\w\\-]+$",tsType:"Id"}};function he(t){t&&Object.values(t).forEach(e=>{if(e.type){if("tsType"in e&&delete e.tsType,e.type==="any"){delete e.type;return}e.type==="object"&&he(e.properties)}})}he(T);const me={$schema:"https://json-schema.org/draft/2020-12/schema",title:"Project Settings Contribution",description:"The data an extension provides to inform Platform.Bible of the project settings it provides",anyOf:[{$ref:"#/$defs/projectSettingsGroup"},{type:"array",items:{$ref:"#/$defs/projectSettingsGroup"}}],$defs:T};Object.freeze(me);const ge={$schema:"https://json-schema.org/draft/2020-12/schema",title:"Settings Contribution",description:"The data an extension provides to inform Platform.Bible of the settings it provides",anyOf:[{$ref:"#/$defs/settingsGroup"},{type:"array",items:{$ref:"#/$defs/settingsGroup"}}],$defs:T};Object.freeze(ge);exports.AsyncVariable=je;exports.DocumentCombiner=Z;exports.FIRST_SCR_BOOK_NUM=ee;exports.FIRST_SCR_CHAPTER_NUM=re;exports.FIRST_SCR_VERSE_NUM=se;exports.LAST_SCR_BOOK_NUM=te;exports.Mutex=Q;exports.MutexMap=ze;exports.NonValidatingDocumentCombiner=Ie;exports.PlatformEventEmitter=H;exports.UnsubscriberAsyncList=Be;exports.aggregateUnsubscriberAsyncs=Ke;exports.aggregateUnsubscribers=Je;exports.at=et;exports.charAt=tt;exports.codePointAt=rt;exports.createSyncProxyForAsyncObject=xe;exports.debounce=Ae;exports.deepClone=v;exports.deepEqual=Rt;exports.deserialize=pe;exports.endsWith=st;exports.getAllObjectFunctionNames=De;exports.getChaptersForBook=ie;exports.getErrorMessage=Me;exports.groupBy=Pe;exports.htmlEncode=Bt;exports.includes=ae;exports.indexOf=S;exports.isSerializable=It;exports.isString=W;exports.lastIndexOf=ue;exports.menuDocumentSchema=de;exports.newGuid=Se;exports.normalize=it;exports.offsetBook=_e;exports.offsetChapter=Ge;exports.offsetVerse=Ve;exports.padEnd=nt;exports.padStart=ot;exports.projectSettingsDocumentSchema=me;exports.serialize=q;exports.settingsDocumentSchema=ge;exports.slice=at;exports.split=ut;exports.startsWith=lt;exports.stringLength=h;exports.substring=E;exports.toArray=le;exports.wait=L;exports.waitForDuration=Te;
//# sourceMappingURL=index.cjs.map
