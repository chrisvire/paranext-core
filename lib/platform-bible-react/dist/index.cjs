"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const b=require("react/jsx-runtime"),H=require("react"),Ya=require("platform-bible-utils"),ts=require("@radix-ui/react-dropdown-menu"),Te=require("lucide-react"),Pe=require("clsx"),Ja=require("tailwind-merge"),me=require("@mui/material"),Lr=require("@mui/styled-engine"),an=require("react-dom"),Qo=require("react-data-grid"),Za=require("@radix-ui/react-slot"),Qa=require("class-variance-authority"),el=require("@radix-ui/react-select");function er(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const C=er(H),xe=er(ts),tl=er(an),we=er(el);var nl=Object.defineProperty,rl=(e,t,n)=>t in e?nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t,n)=>(rl(e,typeof t!="symbol"?t+"":t,n),n);const Rt=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV","TOB","JDT","ESG","WIS","SIR","BAR","LJE","S3Y","SUS","BEL","1MA","2MA","3MA","4MA","1ES","2ES","MAN","PS2","ODA","PSS","JSA","JDB","TBS","SST","DNT","BLT","XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","3ES","EZA","5EZ","6EZ","INT","CNC","GLO","TDX","NDX","DAG","PS3","2BA","LBA","JUB","ENO","1MQ","2MQ","3MQ","REP","4BA","LAO"],io=["XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","INT","CNC","GLO","TDX","NDX"],ns=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther (Hebrew)","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel (Hebrew)","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation","Tobit","Judith","Esther Greek","Wisdom of Solomon","Sirach (Ecclesiasticus)","Baruch","Letter of Jeremiah","Song of 3 Young Men","Susanna","Bel and the Dragon","1 Maccabees","2 Maccabees","3 Maccabees","4 Maccabees","1 Esdras (Greek)","2 Esdras (Latin)","Prayer of Manasseh","Psalm 151","Odes","Psalms of Solomon","Joshua A. *obsolete*","Judges B. *obsolete*","Tobit S. *obsolete*","Susanna Th. *obsolete*","Daniel Th. *obsolete*","Bel Th. *obsolete*","Extra A","Extra B","Extra C","Extra D","Extra E","Extra F","Extra G","Front Matter","Back Matter","Other Matter","3 Ezra *obsolete*","Apocalypse of Ezra","5 Ezra (Latin Prologue)","6 Ezra (Latin Epilogue)","Introduction","Concordance ","Glossary ","Topical Index","Names Index","Daniel Greek","Psalms 152-155","2 Baruch (Apocalypse)","Letter of Baruch","Jubilees","Enoch","1 Meqabyan","2 Meqabyan","3 Meqabyan","Reproof (Proverbs 25-31)","4 Baruch (Rest of Baruch)","Laodiceans"],ei=fl();function qt(e,t=!0){return t&&(e=e.toUpperCase()),e in ei?ei[e]:0}function so(e){return qt(e)>0}function ol(e){const t=typeof e=="string"?qt(e):e;return t>=40&&t<=66}function il(e){return(typeof e=="string"?qt(e):e)<=39}function rs(e){return e<=66}function sl(e){const t=typeof e=="string"?qt(e):e;return ss(t)&&!rs(t)}function*al(){for(let e=1;e<=Rt.length;e++)yield e}const ll=1,os=Rt.length;function ul(){return["XXA","XXB","XXC","XXD","XXE","XXF","XXG"]}function ao(e,t="***"){const n=e-1;return n<0||n>=Rt.length?t:Rt[n]}function is(e){return e<=0||e>os?"******":ns[e-1]}function cl(e){return is(qt(e))}function ss(e){const t=typeof e=="number"?ao(e):e;return so(t)&&!io.includes(t)}function dl(e){const t=typeof e=="number"?ao(e):e;return so(t)&&io.includes(t)}function pl(e){return ns[e-1].includes("*obsolete*")}function fl(){const e={};for(let t=0;t<Rt.length;t++)e[Rt[t]]=t+1;return e}const ge={allBookIds:Rt,nonCanonicalIds:io,bookIdToNumber:qt,isBookIdValid:so,isBookNT:ol,isBookOT:il,isBookOTNT:rs,isBookDC:sl,allBookNumbers:al,firstBook:ll,lastBook:os,extraBooks:ul,bookNumberToId:ao,bookNumberToEnglishName:is,bookIdToEnglishName:cl,isCanonical:ss,isExtraMaterial:dl,isObsolete:pl};var ct=(e=>(e[e.Unknown=0]="Unknown",e[e.Original=1]="Original",e[e.Septuagint=2]="Septuagint",e[e.Vulgate=3]="Vulgate",e[e.English=4]="English",e[e.RussianProtestant=5]="RussianProtestant",e[e.RussianOrthodox=6]="RussianOrthodox",e))(ct||{});const Ae=class{constructor(t){if(oe(this,"name"),oe(this,"fullPath"),oe(this,"isPresent"),oe(this,"hasVerseSegments"),oe(this,"isCustomized"),oe(this,"baseVersification"),oe(this,"scriptureBooks"),oe(this,"_type"),t!=null)typeof t=="string"?this.name=t:this._type=t;else throw new Error("Argument null")}get type(){return this._type}equals(t){return!t.type||!this.type?!1:t.type===this.type}};oe(Ae,"Original",new Ae(ct.Original)),oe(Ae,"Septuagint",new Ae(ct.Septuagint)),oe(Ae,"Vulgate",new Ae(ct.Vulgate)),oe(Ae,"English",new Ae(ct.English)),oe(Ae,"RussianProtestant",new Ae(ct.RussianProtestant)),oe(Ae,"RussianOrthodox",new Ae(ct.RussianOrthodox));let At=Ae;function ti(e,t){const n=t[0];for(let r=1;r<t.length;r++)e=e.split(t[r]).join(n);return e.split(n)}var as=(e=>(e[e.Valid=0]="Valid",e[e.UnknownVersification=1]="UnknownVersification",e[e.OutOfRange=2]="OutOfRange",e[e.VerseOutOfOrder=3]="VerseOutOfOrder",e[e.VerseRepeated=4]="VerseRepeated",e))(as||{});const $e=class ae{constructor(t,n,r,o){if(oe(this,"firstChapter"),oe(this,"lastChapter"),oe(this,"lastVerse"),oe(this,"hasSegmentsDefined"),oe(this,"text"),oe(this,"BBBCCCVVVS"),oe(this,"longHashCode"),oe(this,"versification"),oe(this,"rtlMark","‏"),oe(this,"_bookNum",0),oe(this,"_chapterNum",0),oe(this,"_verseNum",0),oe(this,"_verse"),r==null&&o==null)if(t!=null&&typeof t=="string"){const i=t,s=n!=null&&n instanceof At?n:void 0;this.setEmpty(s),this.parse(i)}else if(t!=null&&typeof t=="number"){const i=n!=null&&n instanceof At?n:void 0;this.setEmpty(i),this._verseNum=t%ae.chapterDigitShifter,this._chapterNum=Math.floor(t%ae.bookDigitShifter/ae.chapterDigitShifter),this._bookNum=Math.floor(t/ae.bookDigitShifter)}else if(n==null)if(t!=null&&t instanceof ae){const i=t;this._bookNum=i.bookNum,this._chapterNum=i.chapterNum,this._verseNum=i.verseNum,this._verse=i.verse,this.versification=i.versification}else{if(t==null)return;const i=t instanceof At?t:ae.defaultVersification;this.setEmpty(i)}else throw new Error("VerseRef constructor not supported.");else if(t!=null&&n!=null&&r!=null)if(typeof t=="string"&&typeof n=="string"&&typeof r=="string")this.setEmpty(o),this.updateInternal(t,n,r);else if(typeof t=="number"&&typeof n=="number"&&typeof r=="number")this._bookNum=t,this._chapterNum=n,this._verseNum=r,this.versification=o??ae.defaultVersification;else throw new Error("VerseRef constructor not supported.");else throw new Error("VerseRef constructor not supported.")}static parse(t,n=ae.defaultVersification){const r=new ae(n);return r.parse(t),r}static isVerseParseable(t){return t.length>0&&"0123456789".includes(t[0])&&!t.endsWith(this.verseRangeSeparator)&&!t.endsWith(this.verseSequenceIndicator)}static tryParse(t){let n;try{return n=ae.parse(t),{success:!0,verseRef:n}}catch(r){if(r instanceof Qt)return n=new ae,{success:!1,verseRef:n};throw r}}static getBBBCCCVVV(t,n,r){return t%ae.bcvMaxValue*ae.bookDigitShifter+(n>=0?n%ae.bcvMaxValue*ae.chapterDigitShifter:0)+(r>=0?r%ae.bcvMaxValue:0)}static tryGetVerseNum(t){let n;if(!t)return n=-1,{success:!0,vNum:n};n=0;let r;for(let o=0;o<t.length;o++){if(r=t[o],r<"0"||r>"9")return o===0&&(n=-1),{success:!1,vNum:n};if(n=n*10+ +r-+"0",n>ae.bcvMaxValue)return n=-1,{success:!1,vNum:n}}return{success:!0,vNum:n}}get isDefault(){return this.bookNum===0&&this.chapterNum===0&&this.verseNum===0&&this.versification==null}get hasMultiple(){return this._verse!=null&&(this._verse.includes(ae.verseRangeSeparator)||this._verse.includes(ae.verseSequenceIndicator))}get book(){return ge.bookNumberToId(this.bookNum,"")}set book(t){this.bookNum=ge.bookIdToNumber(t)}get chapter(){return this.isDefault||this._chapterNum<0?"":this._chapterNum.toString()}set chapter(t){const n=+t;this._chapterNum=Number.isInteger(n)?n:-1}get verse(){return this._verse!=null?this._verse:this.isDefault||this._verseNum<0?"":this._verseNum.toString()}set verse(t){const{success:n,vNum:r}=ae.tryGetVerseNum(t);this._verse=n?void 0:t.replace(this.rtlMark,""),this._verseNum=r,!(this._verseNum>=0)&&({vNum:this._verseNum}=ae.tryGetVerseNum(this._verse))}get bookNum(){return this._bookNum}set bookNum(t){if(t<=0||t>ge.lastBook)throw new Qt("BookNum must be greater than zero and less than or equal to last book");this._bookNum=t}get chapterNum(){return this._chapterNum}set chapterNum(t){this.chapterNum=t}get verseNum(){return this._verseNum}set verseNum(t){this._verseNum=t}get versificationStr(){var t;return(t=this.versification)==null?void 0:t.name}set versificationStr(t){this.versification=this.versification!=null?new At(t):void 0}get valid(){return this.validStatus===0}get validStatus(){return this.validateVerse(ae.verseRangeSeparators,ae.verseSequenceIndicators)}get BBBCCC(){return ae.getBBBCCCVVV(this._bookNum,this._chapterNum,0)}get BBBCCCVVV(){return ae.getBBBCCCVVV(this._bookNum,this._chapterNum,this._verseNum)}get isExcluded(){return!1}parse(t){if(t=t.replace(this.rtlMark,""),t.includes("/")){const i=t.split("/");if(t=i[0],i.length>1)try{const s=+i[1].trim();this.versification=new At(ct[s])}catch{throw new Qt("Invalid reference : "+t)}}const n=t.trim().split(" ");if(n.length!==2)throw new Qt("Invalid reference : "+t);const r=n[1].split(":"),o=+r[0];if(r.length!==2||ge.bookIdToNumber(n[0])===0||!Number.isInteger(o)||o<0||!ae.isVerseParseable(r[1]))throw new Qt("Invalid reference : "+t);this.updateInternal(n[0],r[0],r[1])}simplify(){this._verse=void 0}clone(){return new ae(this)}toString(){const t=this.book;return t===""?"":`${t} ${this.chapter}:${this.verse}`}equals(t){return t instanceof ae?t._bookNum===this._bookNum&&t._chapterNum===this._chapterNum&&t._verseNum===this._verseNum&&t.verse===this.verse&&t.versification!=null&&this.versification!=null&&t.versification.equals(this.versification):!1}allVerses(t=!1,n=ae.verseRangeSeparators,r=ae.verseSequenceIndicators){if(this._verse==null||this.chapterNum<=0)return[this.clone()];const o=[],i=ti(this._verse,r);for(const s of i.map(a=>ti(a,n))){const a=this.clone();a.verse=s[0];const u=a.verseNum;if(o.push(a),s.length>1){const c=this.clone();if(c.verse=s[1],!t)for(let d=u+1;d<c.verseNum;d++){const g=new ae(this._bookNum,this._chapterNum,d,this.versification);this.isExcluded||o.push(g)}o.push(c)}}return o}validateVerse(t,n){if(!this.verse)return this.internalValid;let r=0;for(const o of this.allVerses(!0,t,n)){const i=o.internalValid;if(i!==0)return i;const s=o.BBBCCCVVV;if(r>s)return 3;if(r===s)return 4;r=s}return 0}get internalValid(){return this.versification==null?1:this._bookNum<=0||this._bookNum>ge.lastBook?2:(ge.isCanonical(this._bookNum),0)}setEmpty(t=ae.defaultVersification){this._bookNum=0,this._chapterNum=-1,this._verse=void 0,this.versification=t}updateInternal(t,n,r){this.bookNum=ge.bookIdToNumber(t),this.chapter=n,this.verse=r}};oe($e,"defaultVersification",At.English),oe($e,"verseRangeSeparator","-"),oe($e,"verseSequenceIndicator",","),oe($e,"verseRangeSeparators",[$e.verseRangeSeparator]),oe($e,"verseSequenceIndicators",[$e.verseSequenceIndicator]),oe($e,"chapterDigitShifter",1e3),oe($e,"bookDigitShifter",$e.chapterDigitShifter*$e.chapterDigitShifter),oe($e,"bcvMaxValue",$e.chapterDigitShifter-1),oe($e,"ValidStatusType",as);class Qt extends Error{}function pe(...e){return Ja.twMerge(Pe.clsx(e))}const ls=xe.Root,gl=xe.Trigger,ml=C.forwardRef(({className:e,inset:t,children:n,...r},o)=>b.jsxs(xe.SubTrigger,{ref:o,className:pe("pr-flex pr-cursor-default pr-select-none pr-items-center pr-rounded-sm pr-px-2 pr-py-1.5 pr-text-sm pr-outline-none focus:pr-bg-accent data-[state=open]:pr-bg-accent",t&&"pr-pl-8",e),...r,children:[n,b.jsx(Te.ChevronRight,{className:"pr-ml-auto pr-h-4 pr-w-4"})]}));ml.displayName=xe.SubTrigger.displayName;const hl=C.forwardRef(({className:e,...t},n)=>b.jsx(xe.SubContent,{ref:n,className:pe("pr-z-50 pr-min-w-[8rem] pr-overflow-hidden pr-rounded-md pr-border pr-bg-popover pr-p-1 pr-text-popover-foreground pr-shadow-lg data-[state=open]:pr-animate-in data-[state=closed]:pr-animate-out data-[state=closed]:pr-fade-out-0 data-[state=open]:pr-fade-in-0 data-[state=closed]:pr-zoom-out-95 data-[state=open]:pr-zoom-in-95 data-[side=bottom]:pr-slide-in-from-top-2 data-[side=left]:pr-slide-in-from-right-2 data-[side=right]:pr-slide-in-from-left-2 data-[side=top]:pr-slide-in-from-bottom-2",e),...t}));hl.displayName=xe.SubContent.displayName;const lo=C.forwardRef(({className:e,sideOffset:t=4,...n},r)=>b.jsx(xe.Portal,{children:b.jsx(xe.Content,{ref:r,sideOffset:t,className:pe("pr-z-50 pr-min-w-[8rem] pr-overflow-hidden pr-rounded-md pr-border pr-bg-popover pr-p-1 pr-text-popover-foreground pr-shadow-md data-[state=open]:pr-animate-in data-[state=closed]:pr-animate-out data-[state=closed]:pr-fade-out-0 data-[state=open]:pr-fade-in-0 data-[state=closed]:pr-zoom-out-95 data-[state=open]:pr-zoom-in-95 data-[side=bottom]:pr-slide-in-from-top-2 data-[side=left]:pr-slide-in-from-right-2 data-[side=right]:pr-slide-in-from-left-2 data-[side=top]:pr-slide-in-from-bottom-2",e),...n})}));lo.displayName=xe.Content.displayName;const us=C.forwardRef(({className:e,inset:t,...n},r)=>b.jsx(xe.Item,{ref:r,className:pe("pr-cursor-default pr-select-none pr-items-center pr-rounded-sm pr-px-2 pr-py-1.5 pr-text-sm pr-outline-none pr-transition-colors focus:pr-bg-accent data-[disabled]:pr-pointer-events-none data-[disabled]:pr-opacity-50",t&&"pr-pl-8",e),...n}));us.displayName=xe.Item.displayName;const cs=C.forwardRef(({className:e,children:t,checked:n,...r},o)=>b.jsxs(xe.CheckboxItem,{ref:o,className:pe("pr-relative pr-flex pr-cursor-default pr-select-none pr-items-center pr-rounded-sm pr-py-1.5 pr-pl-8 pr-pr-2 pr-text-sm pr-outline-none pr-transition-colors focus:pr-bg-accent focus:pr-text-accent-foreground data-[disabled]:pr-pointer-events-none data-[disabled]:pr-opacity-50",e),checked:n,...r,children:[b.jsx("span",{className:"pr-absolute pr-left-2 pr-flex pr-h-3.5 pr-w-3.5 pr-items-center pr-justify-center",children:b.jsx(xe.ItemIndicator,{children:b.jsx(Te.Check,{className:"pr-h-4 pr-w-4"})})}),t]}));cs.displayName=xe.CheckboxItem.displayName;const vl=C.forwardRef(({className:e,children:t,...n},r)=>b.jsxs(xe.RadioItem,{ref:r,className:pe("pr-relative pr-flex pr-cursor-default pr-select-none pr-items-center pr-rounded-sm pr-py-1.5 pr-pl-8 pr-pr-2 pr-text-sm pr-outline-none pr-transition-colors focus:pr-bg-accent focus:pr-text-accent-foreground data-[disabled]:pr-pointer-events-none data-[disabled]:pr-opacity-50",e),...n,children:[b.jsx("span",{className:"pr-absolute pr-left-2 pr-flex pr-h-3.5 pr-w-3.5 pr-items-center pr-justify-center",children:b.jsx(xe.ItemIndicator,{children:b.jsx(Te.Circle,{className:"pr-h-2 pr-w-2 pr-fill-current"})})}),t]}));vl.displayName=xe.RadioItem.displayName;const tr=C.forwardRef(({className:e,inset:t,...n},r)=>b.jsx(xe.Label,{ref:r,className:pe("pr-px-2 pr-py-1.5 pr-text-sm pr-font-semibold",t&&"pr-pl-8",e),...n}));tr.displayName=xe.Label.displayName;const uo=C.forwardRef(({className:e,...t},n)=>b.jsx(xe.Separator,{ref:n,className:pe("pr--mx-1 pr-my-1 pr-h-px pr-bg-muted",e),...t}));uo.displayName=xe.Separator.displayName;const co=C.forwardRef(({className:e,type:t,...n},r)=>b.jsx("input",{type:t,className:pe("pr-flex pr-h-10 pr-w-full pr-rounded-md pr-bg-background pr-px-3 pr-py-2 pr-text-sm pr-ring-offset-background file:pr-border-0 file:pr-bg-transparent file:pr-text-sm file:pr-font-medium placeholder:pr-text-muted-foreground disabled:pr-cursor-not-allowed disabled:pr-opacity-50",e),ref:r,...n}));co.displayName="Input";const bl=H.forwardRef(({handleSearch:e,handleKeyDown:t,handleOnClick:n,handleSubmit:r,...o},i)=>b.jsxs("div",{className:"pr-relative",children:[b.jsx(co,{...o,type:"text",className:"pr-box-border pr-gap-2.5 pr-rounded-lg pr-border pr-border-solid pr-border-black pr-bg-white pr-py-2 pr-pl-4 pr-pr-3 pr-font-medium pr-text-slate-900 pr-shadow-none pr-outline-none",onChange:s=>e(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r(),t(s)},onClick:n,ref:i}),b.jsx(Te.History,{className:"pr-absolute pr-right-3 pr-top-1/2 pr-h-4 pr-w-4 pr--translate-y-1/2 pr-transform pr-cursor-pointer pr-text-gray-500",onClick:()=>{console.log("back in history")}})]}));function yl({handleSelectChapter:e,endChapter:t,activeChapter:n,highlightedChapter:r,handleHighlightedChapter:o}){const i=Array.from({length:t},(a,u)=>u+1),s=H.useCallback(a=>{o(a)},[o]);return b.jsx("div",{className:pe("pr-flex pr-flex-wrap pr-items-start pr-justify-start pr-self-stretch"),children:i.map(a=>b.jsx("div",{className:pe("pr-flex pr-h-4 pr-w-4 pr-cursor-pointer pr-items-center pr-justify-end pr-rounded-md pr-p-2 pr-text-amber-800",{"pr-font-semibold pr-text-amber-900":a===n,"pr-bg-amber-200":a===r}),onClick:u=>{u.preventDefault(),u.stopPropagation(),e(a)},role:"button",onKeyDown:u=>{u.key==="Enter"&&e(a)},tabIndex:0,onMouseMove:()=>s(a),children:a},a))})}const wl=H.forwardRef(({bookId:e,handleSelectBook:t,isSelected:n,handleHighlightBook:r,handleKeyDown:o,bookType:i,children:s},a)=>b.jsxs(us,{ref:a,textValue:e,className:pe("pr-font-normal pr-text-slate-700",{"pr-bg-amber-50 pr-text-yellow-900 data-[highlighted]:pr-bg-amber-100":n}),onSelect:u=>{u.preventDefault(),t()},onKeyDown:u=>{o(u)},onFocus:r,onMouseMove:r,children:[b.jsx("span",{className:pe("pr-border-b-0 pr-border-l-2 pr-border-r-0 pr-border-t-0 pr-border-solid pr-px-2",{"pr-font-bold":n,"pr-border-l-red-200":i.toLowerCase()==="ot","pr-border-l-purple-200":i.toLowerCase()==="nt","pr-border-l-indigo-200":i.toLowerCase()==="dc"}),children:ge.bookIdToEnglishName(e)}),n&&b.jsx("div",{children:s})]},e));function xl({handleSort:e,handleLocationHistory:t,handleBookmarks:n}){return b.jsxs(tr,{className:"pr-flex pr-justify-between",children:[b.jsx("p",{className:"pr-inline-block pr-align-middle",children:"Go To"}),b.jsxs("div",{className:"pr-flex pr-items-center",children:[b.jsx(Te.ArrowDownWideNarrow,{onClick:e,className:"pr-h-4 pr-w-4 pr-cursor-pointer pr-gap-2 pr-p-2"}),b.jsx(Te.Clock,{onClick:t,className:"pr-h-4 pr-w-4 pr-cursor-pointer pr-gap-2 pr-p-2"}),b.jsx(Te.Bookmark,{onClick:n,className:"pr-h-4 pr-w-4 pr-cursor-pointer pr-gap-2 pr-p-2"})]})]})}const dn=ge.allBookIds,Sl={OT:"Old Testament",NT:"New Testament",DC:"Deuterocanon"},ni=["OT","NT","DC"],Cl=32+32+32,El=[/^(\w+)$/i,/^(\w+)(?:\s(\d+))$/i,/^(\w+)(?:\s(\d+):(\d+))$/i],Rl=e=>({OT:dn.filter(n=>ge.isBookOT(n)),NT:dn.filter(n=>ge.isBookNT(n)),DC:dn.filter(n=>ge.isBookDC(n))})[e],en=e=>Ya.getChaptersForBook(ge.bookIdToNumber(e));function Tl(){return dn.map(t=>ge.bookIdToEnglishName(t))}function Pl(e){return Tl().includes(e)}function kl(e){const t=e.toLowerCase().replace(/^\w/,n=>n.toUpperCase());if(Pl(t))return dn.find(r=>ge.bookIdToEnglishName(r)===t)}function Ol({scrRef:e,handleSubmit:t}){const[n,r]=H.useState(""),[o,i]=H.useState(ge.bookNumberToId(e.bookNum)),[s,a]=H.useState(e.chapterNum??0),[u,c]=H.useState(ge.bookNumberToId(e.bookNum)),[d,g]=H.useState(!1),[p,f]=H.useState(d),h=H.useRef(void 0),m=H.useRef(void 0),v=H.useRef(void 0),w=H.useCallback(P=>Rl(P).filter($=>{const N=ge.bookIdToEnglishName($).toLowerCase(),V=n.replace(/[^a-zA-Z]/g,"").toLowerCase();return N.includes(V)||$.toLowerCase().includes(V)}),[n]),k=P=>{r(P)},x=H.useRef(!1),S=H.useCallback(P=>{if(x.current){x.current=!1;return}g(P)},[]),y=H.useCallback((P,$,N,V)=>{if(a(ge.bookNumberToId(e.bookNum)!==P?1:e.chapterNum),$||en(P)===-1){t({bookNum:ge.bookIdToNumber(P),chapterNum:N||1,verseNum:V||1}),g(!1),r("");return}i(o!==P?P:""),g(!$)},[t,e.bookNum,e.chapterNum,o]),T=P=>{P<=0||P>en(o)||y(o,!0,P)},O=H.useCallback(()=>{El.forEach(P=>{const $=n.match(P);if($){const[N,V=void 0,F=void 0]=$.slice(1),M=kl(N);(ge.isBookIdValid(N)||M)&&y(M??N,!0,V?parseInt(V,10):1,F?parseInt(F,10):1)}})},[y,n]),A=H.useCallback(P=>{d?(P.key==="ArrowDown"||P.key==="ArrowUp")&&(typeof v<"u"&&v.current!==null?v.current.focus():typeof m<"u"&&m.current!==null&&m.current.focus(),P.preventDefault()):g(!0)},[d]),D=P=>{const{key:$}=P;$==="ArrowRight"||$==="ArrowLeft"||$==="ArrowDown"||$==="ArrowUp"||$==="Enter"||(h.current.dispatchEvent(new KeyboardEvent("keydown",{key:$})),h.current.focus())},L=P=>{const{key:$}=P;if(u===o){if($==="Enter"){P.preventDefault(),y(o,!0,s);return}let N=0;if($==="ArrowRight")if(s<en(u))N=1;else{P.preventDefault();return}else if($==="ArrowLeft")if(s>1)N=-1;else{P.preventDefault();return}else $==="ArrowDown"?N=6:$==="ArrowUp"&&(N=-6);s+N<=0||s+N>en(u)?a(0):N!==0&&(a(s+N),P.preventDefault())}};return H.useEffect(()=>{o===u?o===ge.bookNumberToId(e.bookNum)?a(e.chapterNum):a(1):a(0)},[u,e.bookNum,e.chapterNum,o]),H.useLayoutEffect(()=>{f(d)},[d]),H.useLayoutEffect(()=>{const P=setTimeout(()=>{if(p&&m.current&&v.current){const N=v.current.offsetTop-Cl;m.current.scrollTo({top:N,behavior:"instant"})}},10);return()=>{clearTimeout(P)}},[p]),b.jsx("div",{children:b.jsxs(ls,{modal:!1,open:d,onOpenChange:S,children:[b.jsx(gl,{asChild:!0,children:b.jsx(bl,{ref:h,value:n,handleSearch:k,handleKeyDown:A,handleOnClick:()=>{i(ge.bookNumberToId(e.bookNum)),c(ge.bookNumberToId(e.bookNum)),a(e.chapterNum>0?e.chapterNum:0),g(!0),h.current.focus()},onFocus:()=>{x.current=!0},handleSubmit:O,placeholder:`${ge.bookNumberToEnglishName(e.bookNum)} ${e.chapterNum}:${e.verseNum}`})}),b.jsxs(lo,{className:"pr-overflow-y-auto pr-font-normal pr-text-slate-700",style:{width:"233px",maxHeight:"500px"},onKeyDown:D,align:"start",ref:m,children:[b.jsx(xl,{handleSort:()=>console.log("sorting"),handleLocationHistory:()=>console.log("location history"),handleBookmarks:()=>console.log("bookmarks")}),ni.map((P,$)=>w(P).length>0&&b.jsxs("div",{children:[b.jsx(tr,{className:"pr-font-semibold pr-text-slate-700",children:Sl[P]}),w(P).map(N=>b.jsx("div",{children:b.jsx(wl,{bookId:N,handleSelectBook:()=>y(N,!1),isSelected:o===N,handleHighlightBook:()=>c(N),handleKeyDown:L,bookType:P,ref:V=>{o===N&&(v.current=V)},children:b.jsx(yl,{handleSelectChapter:T,endChapter:en(N),activeChapter:e.bookNum===ge.bookIdToNumber(N)?e.chapterNum:0,highlightedChapter:s,handleHighlightedChapter:V=>{a(V)}})})},N)),ni.length-1!==$?b.jsx(uo,{}):void 0]},P))]})]})})}function _l({id:e,isDisabled:t=!1,className:n,onClick:r,onContextMenu:o,children:i}){return b.jsx(me.Button,{id:e,disabled:t,className:`papi-button ${n??""}`,onClick:r,onContextMenu:o,children:i})}function Br({id:e,title:t,isDisabled:n=!1,isClearable:r=!0,hasError:o=!1,isFullWidth:i=!1,width:s,options:a=[],className:u,value:c,onChange:d,onFocus:g,onBlur:p,getOptionLabel:f}){return b.jsx(me.Autocomplete,{id:e,disablePortal:!0,disabled:n,disableClearable:!r,fullWidth:i,options:a,className:`papi-combo-box ${o?"error":""} ${u??""}`,value:c,onChange:d,onFocus:g,onBlur:p,getOptionLabel:f,renderInput:h=>b.jsx(me.TextField,{...h,error:o,fullWidth:i,disabled:n,label:t,style:{width:s}})})}function Nl({startChapter:e,endChapter:t,handleSelectStartChapter:n,handleSelectEndChapter:r,isDisabled:o,chapterCount:i}){const s=H.useMemo(()=>Array.from({length:i},(c,d)=>d+1),[i]),a=(c,d)=>{n(d),d>t&&r(d)},u=(c,d)=>{r(d),d<e&&n(d)};return b.jsxs(b.Fragment,{children:[b.jsx(me.FormControlLabel,{className:"book-selection-chapter-form-label start",disabled:o,control:b.jsx(Br,{onChange:(c,d)=>a(c,d),className:"book-selection-chapter",isClearable:!1,options:s,getOptionLabel:c=>c.toString(),value:e,isDisabled:o},"start chapter"),label:"Chapters",labelPlacement:"start"}),b.jsx(me.FormControlLabel,{className:"book-selection-chapter-form-label end",disabled:o,control:b.jsx(Br,{onChange:(c,d)=>u(c,d),className:"book-selection-chapter",isClearable:!1,options:s,getOptionLabel:c=>c.toString(),value:t,isDisabled:o},"end chapter"),label:"to",labelPlacement:"start"})]})}var St=(e=>(e.After="after",e.Before="before",e.Above="above",e.Below="below",e))(St||{});function ds({id:e,isChecked:t,labelText:n="",labelPosition:r=St.After,isIndeterminate:o=!1,isDefaultChecked:i,isDisabled:s=!1,hasError:a=!1,className:u,onChange:c}){const d=b.jsx(me.Checkbox,{id:e,checked:t,indeterminate:o,defaultChecked:i,disabled:s,className:`papi-checkbox ${a?"error":""} ${u??""}`,onChange:c});let g;if(n){const p=r===St.Before||r===St.Above,f=b.jsx("span",{className:`papi-checkbox-label ${a?"error":""} ${u??""}`,children:n}),h=r===St.Before||r===St.After,m=h?f:b.jsx("div",{children:f}),v=h?d:b.jsx("div",{children:d});g=b.jsxs(me.FormLabel,{className:`papi-checkbox ${r.toString()}`,disabled:s,error:a,children:[p&&m,v,!p&&m]})}else g=d;return g}function fe(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function $l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ml(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var zr={exports:{}},$n={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri;function Il(){if(ri)return le;ri=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,k=e?Symbol.for("react.scope"):60119;function x(y){if(typeof y=="object"&&y!==null){var T=y.$$typeof;switch(T){case t:switch(y=y.type,y){case u:case c:case r:case i:case o:case g:return y;default:switch(y=y&&y.$$typeof,y){case a:case d:case h:case f:case s:return y;default:return T}}case n:return T}}}function S(y){return x(y)===c}return le.AsyncMode=u,le.ConcurrentMode=c,le.ContextConsumer=a,le.ContextProvider=s,le.Element=t,le.ForwardRef=d,le.Fragment=r,le.Lazy=h,le.Memo=f,le.Portal=n,le.Profiler=i,le.StrictMode=o,le.Suspense=g,le.isAsyncMode=function(y){return S(y)||x(y)===u},le.isConcurrentMode=S,le.isContextConsumer=function(y){return x(y)===a},le.isContextProvider=function(y){return x(y)===s},le.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===t},le.isForwardRef=function(y){return x(y)===d},le.isFragment=function(y){return x(y)===r},le.isLazy=function(y){return x(y)===h},le.isMemo=function(y){return x(y)===f},le.isPortal=function(y){return x(y)===n},le.isProfiler=function(y){return x(y)===i},le.isStrictMode=function(y){return x(y)===o},le.isSuspense=function(y){return x(y)===g},le.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===r||y===c||y===i||y===o||y===g||y===p||typeof y=="object"&&y!==null&&(y.$$typeof===h||y.$$typeof===f||y.$$typeof===s||y.$$typeof===a||y.$$typeof===d||y.$$typeof===v||y.$$typeof===w||y.$$typeof===k||y.$$typeof===m)},le.typeOf=x,le}var ue={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi;function jl(){return oi||(oi=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,k=e?Symbol.for("react.scope"):60119;function x(I){return typeof I=="string"||typeof I=="function"||I===r||I===c||I===i||I===o||I===g||I===p||typeof I=="object"&&I!==null&&(I.$$typeof===h||I.$$typeof===f||I.$$typeof===s||I.$$typeof===a||I.$$typeof===d||I.$$typeof===v||I.$$typeof===w||I.$$typeof===k||I.$$typeof===m)}function S(I){if(typeof I=="object"&&I!==null){var ee=I.$$typeof;switch(ee){case t:var _=I.type;switch(_){case u:case c:case r:case i:case o:case g:return _;default:var se=_&&_.$$typeof;switch(se){case a:case d:case h:case f:case s:return se;default:return ee}}case n:return ee}}}var y=u,T=c,O=a,A=s,D=t,L=d,P=r,$=h,N=f,V=n,F=i,M=o,B=g,ne=!1;function te(I){return ne||(ne=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(I)||S(I)===u}function R(I){return S(I)===c}function j(I){return S(I)===a}function G(I){return S(I)===s}function K(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function z(I){return S(I)===d}function U(I){return S(I)===r}function W(I){return S(I)===h}function X(I){return S(I)===f}function q(I){return S(I)===n}function Y(I){return S(I)===i}function Q(I){return S(I)===o}function ie(I){return S(I)===g}ue.AsyncMode=y,ue.ConcurrentMode=T,ue.ContextConsumer=O,ue.ContextProvider=A,ue.Element=D,ue.ForwardRef=L,ue.Fragment=P,ue.Lazy=$,ue.Memo=N,ue.Portal=V,ue.Profiler=F,ue.StrictMode=M,ue.Suspense=B,ue.isAsyncMode=te,ue.isConcurrentMode=R,ue.isContextConsumer=j,ue.isContextProvider=G,ue.isElement=K,ue.isForwardRef=z,ue.isFragment=U,ue.isLazy=W,ue.isMemo=X,ue.isPortal=q,ue.isProfiler=Y,ue.isStrictMode=Q,ue.isSuspense=ie,ue.isValidElementType=x,ue.typeOf=S}()),ue}var ii;function ps(){return ii||(ii=1,process.env.NODE_ENV==="production"?$n.exports=Il():$n.exports=jl()),$n.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var wr,si;function Fl(){if(si)return wr;si=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(i){if(i==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(i)}function o(){try{if(!Object.assign)return!1;var i=new String("abc");if(i[5]="de",Object.getOwnPropertyNames(i)[0]==="5")return!1;for(var s={},a=0;a<10;a++)s["_"+String.fromCharCode(a)]=a;var u=Object.getOwnPropertyNames(s).map(function(d){return s[d]});if(u.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(d){c[d]=d}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return wr=o()?Object.assign:function(i,s){for(var a,u=r(i),c,d=1;d<arguments.length;d++){a=Object(arguments[d]);for(var g in a)t.call(a,g)&&(u[g]=a[g]);if(e){c=e(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(u[c[p]]=a[c[p]])}}return u},wr}var xr,ai;function po(){if(ai)return xr;ai=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xr=e,xr}var Sr,li;function fs(){return li||(li=1,Sr=Function.call.bind(Object.prototype.hasOwnProperty)),Sr}var Cr,ui;function Al(){if(ui)return Cr;ui=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=po(),n={},r=fs();e=function(i){var s="Warning: "+i;typeof console<"u"&&console.error(s);try{throw new Error(s)}catch{}}}function o(i,s,a,u,c){if(process.env.NODE_ENV!=="production"){for(var d in i)if(r(i,d)){var g;try{if(typeof i[d]!="function"){var p=Error((u||"React class")+": "+a+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}g=i[d](s,d,u,a,null,t)}catch(h){g=h}if(g&&!(g instanceof Error)&&e((u||"React class")+": type specification of "+a+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof g+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),g instanceof Error&&!(g.message in n)){n[g.message]=!0;var f=c?c():"";e("Failed "+a+" type: "+g.message+(f??""))}}}}return o.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},Cr=o,Cr}var Er,ci;function Dl(){if(ci)return Er;ci=1;var e=ps(),t=Fl(),n=po(),r=fs(),o=Al(),i=function(){};process.env.NODE_ENV!=="production"&&(i=function(a){var u="Warning: "+a;typeof console<"u"&&console.error(u);try{throw new Error(u)}catch{}});function s(){return null}return Er=function(a,u){var c=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function g(R){var j=R&&(c&&R[c]||R[d]);if(typeof j=="function")return j}var p="<<anonymous>>",f={array:w("array"),bigint:w("bigint"),bool:w("boolean"),func:w("function"),number:w("number"),object:w("object"),string:w("string"),symbol:w("symbol"),any:k(),arrayOf:x,element:S(),elementType:y(),instanceOf:T,node:L(),objectOf:A,oneOf:O,oneOfType:D,shape:$,exact:N};function h(R,j){return R===j?R!==0||1/R===1/j:R!==R&&j!==j}function m(R,j){this.message=R,this.data=j&&typeof j=="object"?j:{},this.stack=""}m.prototype=Error.prototype;function v(R){if(process.env.NODE_ENV!=="production")var j={},G=0;function K(U,W,X,q,Y,Q,ie){if(q=q||p,Q=Q||X,ie!==n){if(u){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var ee=q+":"+X;!j[ee]&&G<3&&(i("You are manually calling a React.PropTypes validation function for the `"+Q+"` prop on `"+q+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),j[ee]=!0,G++)}}return W[X]==null?U?W[X]===null?new m("The "+Y+" `"+Q+"` is marked as required "+("in `"+q+"`, but its value is `null`.")):new m("The "+Y+" `"+Q+"` is marked as required in "+("`"+q+"`, but its value is `undefined`.")):null:R(W,X,q,Y,Q)}var z=K.bind(null,!1);return z.isRequired=K.bind(null,!0),z}function w(R){function j(G,K,z,U,W,X){var q=G[K],Y=M(q);if(Y!==R){var Q=B(q);return new m("Invalid "+U+" `"+W+"` of type "+("`"+Q+"` supplied to `"+z+"`, expected ")+("`"+R+"`."),{expectedType:R})}return null}return v(j)}function k(){return v(s)}function x(R){function j(G,K,z,U,W){if(typeof R!="function")return new m("Property `"+W+"` of component `"+z+"` has invalid PropType notation inside arrayOf.");var X=G[K];if(!Array.isArray(X)){var q=M(X);return new m("Invalid "+U+" `"+W+"` of type "+("`"+q+"` supplied to `"+z+"`, expected an array."))}for(var Y=0;Y<X.length;Y++){var Q=R(X,Y,z,U,W+"["+Y+"]",n);if(Q instanceof Error)return Q}return null}return v(j)}function S(){function R(j,G,K,z,U){var W=j[G];if(!a(W)){var X=M(W);return new m("Invalid "+z+" `"+U+"` of type "+("`"+X+"` supplied to `"+K+"`, expected a single ReactElement."))}return null}return v(R)}function y(){function R(j,G,K,z,U){var W=j[G];if(!e.isValidElementType(W)){var X=M(W);return new m("Invalid "+z+" `"+U+"` of type "+("`"+X+"` supplied to `"+K+"`, expected a single ReactElement type."))}return null}return v(R)}function T(R){function j(G,K,z,U,W){if(!(G[K]instanceof R)){var X=R.name||p,q=te(G[K]);return new m("Invalid "+U+" `"+W+"` of type "+("`"+q+"` supplied to `"+z+"`, expected ")+("instance of `"+X+"`."))}return null}return v(j)}function O(R){if(!Array.isArray(R))return process.env.NODE_ENV!=="production"&&(arguments.length>1?i("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):i("Invalid argument supplied to oneOf, expected an array.")),s;function j(G,K,z,U,W){for(var X=G[K],q=0;q<R.length;q++)if(h(X,R[q]))return null;var Y=JSON.stringify(R,function(ie,I){var ee=B(I);return ee==="symbol"?String(I):I});return new m("Invalid "+U+" `"+W+"` of value `"+String(X)+"` "+("supplied to `"+z+"`, expected one of "+Y+"."))}return v(j)}function A(R){function j(G,K,z,U,W){if(typeof R!="function")return new m("Property `"+W+"` of component `"+z+"` has invalid PropType notation inside objectOf.");var X=G[K],q=M(X);if(q!=="object")return new m("Invalid "+U+" `"+W+"` of type "+("`"+q+"` supplied to `"+z+"`, expected an object."));for(var Y in X)if(r(X,Y)){var Q=R(X,Y,z,U,W+"."+Y,n);if(Q instanceof Error)return Q}return null}return v(j)}function D(R){if(!Array.isArray(R))return process.env.NODE_ENV!=="production"&&i("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var j=0;j<R.length;j++){var G=R[j];if(typeof G!="function")return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ne(G)+" at index "+j+"."),s}function K(z,U,W,X,q){for(var Y=[],Q=0;Q<R.length;Q++){var ie=R[Q],I=ie(z,U,W,X,q,n);if(I==null)return null;I.data&&r(I.data,"expectedType")&&Y.push(I.data.expectedType)}var ee=Y.length>0?", expected one of type ["+Y.join(", ")+"]":"";return new m("Invalid "+X+" `"+q+"` supplied to "+("`"+W+"`"+ee+"."))}return v(K)}function L(){function R(j,G,K,z,U){return V(j[G])?null:new m("Invalid "+z+" `"+U+"` supplied to "+("`"+K+"`, expected a ReactNode."))}return v(R)}function P(R,j,G,K,z){return new m((R||"React class")+": "+j+" type `"+G+"."+K+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+z+"`.")}function $(R){function j(G,K,z,U,W){var X=G[K],q=M(X);if(q!=="object")return new m("Invalid "+U+" `"+W+"` of type `"+q+"` "+("supplied to `"+z+"`, expected `object`."));for(var Y in R){var Q=R[Y];if(typeof Q!="function")return P(z,U,W,Y,B(Q));var ie=Q(X,Y,z,U,W+"."+Y,n);if(ie)return ie}return null}return v(j)}function N(R){function j(G,K,z,U,W){var X=G[K],q=M(X);if(q!=="object")return new m("Invalid "+U+" `"+W+"` of type `"+q+"` "+("supplied to `"+z+"`, expected `object`."));var Y=t({},G[K],R);for(var Q in Y){var ie=R[Q];if(r(R,Q)&&typeof ie!="function")return P(z,U,W,Q,B(ie));if(!ie)return new m("Invalid "+U+" `"+W+"` key `"+Q+"` supplied to `"+z+"`.\nBad object: "+JSON.stringify(G[K],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(R),null,"  "));var I=ie(X,Q,z,U,W+"."+Q,n);if(I)return I}return null}return v(j)}function V(R){switch(typeof R){case"number":case"string":case"undefined":return!0;case"boolean":return!R;case"object":if(Array.isArray(R))return R.every(V);if(R===null||a(R))return!0;var j=g(R);if(j){var G=j.call(R),K;if(j!==R.entries){for(;!(K=G.next()).done;)if(!V(K.value))return!1}else for(;!(K=G.next()).done;){var z=K.value;if(z&&!V(z[1]))return!1}}else return!1;return!0;default:return!1}}function F(R,j){return R==="symbol"?!0:j?j["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&j instanceof Symbol:!1}function M(R){var j=typeof R;return Array.isArray(R)?"array":R instanceof RegExp?"object":F(j,R)?"symbol":j}function B(R){if(typeof R>"u"||R===null)return""+R;var j=M(R);if(j==="object"){if(R instanceof Date)return"date";if(R instanceof RegExp)return"regexp"}return j}function ne(R){var j=B(R);switch(j){case"array":case"object":return"an "+j;case"boolean":case"date":case"regexp":return"a "+j;default:return j}}function te(R){return!R.constructor||!R.constructor.name?p:R.constructor.name}return f.checkPropTypes=o,f.resetWarningCache=o.resetWarningCache,f.PropTypes=f,f},Er}var Rr,di;function Vl(){if(di)return Rr;di=1;var e=po();function t(){}function n(){}return n.resetWarningCache=t,Rr=function(){function r(s,a,u,c,d,g){if(g!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function o(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Rr}if(process.env.NODE_ENV!=="production"){var Ll=ps(),Bl=!0;zr.exports=Dl()(Ll.isElement,Bl)}else zr.exports=Vl()();var zl=zr.exports;const l=$l(zl);function Wt(e,t){return process.env.NODE_ENV==="production"?()=>null:function(...r){return e(...r)||t(...r)}}function Ct(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function gs(e){if(!Ct(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=gs(e[n])}),t}function rt(e,t,n={clone:!0}){const r=n.clone?E({},e):e;return Ct(e)&&Ct(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(Ct(t[o])&&o in e&&Ct(e[o])?r[o]=rt(e[o],t[o],n):n.clone?r[o]=Ct(t[o])?gs(t[o]):t[o]:r[o]=t[o])}),r}function Hl(e){const{prototype:t={}}=e;return!!t.isReactComponent}function ms(e,t,n,r,o){const i=e[t],s=o||t;if(i==null||typeof window>"u")return null;let a;const u=i.type;return typeof u=="function"&&!Hl(u)&&(a="Did you accidentally use a plain function component for an element instead?"),a!==void 0?new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const hs=Wt(l.element,ms);hs.isRequired=Wt(l.element.isRequired,ms);const Sn=hs;function Gl(e){const{prototype:t={}}=e;return!!t.isReactComponent}function Ul(e,t,n,r,o){const i=e[t],s=o||t;if(i==null||typeof window>"u")return null;let a;return typeof i=="function"&&!Gl(i)&&(a="Did you accidentally provide a plain function component instead?"),a!==void 0?new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const ql=Wt(l.elementType,Ul),Wl="exact-prop: ​";function vs(e){return process.env.NODE_ENV==="production"?e:E({},e,{[Wl]:t=>{const n=Object.keys(t).filter(r=>!e.hasOwnProperty(r));return n.length>0?new Error(`The following props are not supported: ${n.map(r=>`\`${r}\``).join(", ")}. Please remove them.`):null}})}function Lt(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var Hr={exports:{}},ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi;function Xl(){if(pi)return ce;pi=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function m(v){if(typeof v=="object"&&v!==null){var w=v.$$typeof;switch(w){case e:switch(v=v.type,v){case n:case o:case r:case c:case d:return v;default:switch(v=v&&v.$$typeof,v){case a:case s:case u:case p:case g:case i:return v;default:return w}}case t:return w}}}return ce.ContextConsumer=s,ce.ContextProvider=i,ce.Element=e,ce.ForwardRef=u,ce.Fragment=n,ce.Lazy=p,ce.Memo=g,ce.Portal=t,ce.Profiler=o,ce.StrictMode=r,ce.Suspense=c,ce.SuspenseList=d,ce.isAsyncMode=function(){return!1},ce.isConcurrentMode=function(){return!1},ce.isContextConsumer=function(v){return m(v)===s},ce.isContextProvider=function(v){return m(v)===i},ce.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===e},ce.isForwardRef=function(v){return m(v)===u},ce.isFragment=function(v){return m(v)===n},ce.isLazy=function(v){return m(v)===p},ce.isMemo=function(v){return m(v)===g},ce.isPortal=function(v){return m(v)===t},ce.isProfiler=function(v){return m(v)===o},ce.isStrictMode=function(v){return m(v)===r},ce.isSuspense=function(v){return m(v)===c},ce.isSuspenseList=function(v){return m(v)===d},ce.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===n||v===o||v===r||v===c||v===d||v===f||typeof v=="object"&&v!==null&&(v.$$typeof===p||v.$$typeof===g||v.$$typeof===i||v.$$typeof===s||v.$$typeof===u||v.$$typeof===h||v.getModuleId!==void 0)},ce.typeOf=m,ce}var de={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi;function Kl(){return fi||(fi=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),h=!1,m=!1,v=!1,w=!1,k=!1,x;x=Symbol.for("react.module.reference");function S(_){return!!(typeof _=="string"||typeof _=="function"||_===n||_===o||k||_===r||_===c||_===d||w||_===f||h||m||v||typeof _=="object"&&_!==null&&(_.$$typeof===p||_.$$typeof===g||_.$$typeof===i||_.$$typeof===s||_.$$typeof===u||_.$$typeof===x||_.getModuleId!==void 0))}function y(_){if(typeof _=="object"&&_!==null){var se=_.$$typeof;switch(se){case e:var Ce=_.type;switch(Ce){case n:case o:case r:case c:case d:return Ce;default:var _e=Ce&&Ce.$$typeof;switch(_e){case a:case s:case u:case p:case g:case i:return _e;default:return se}}case t:return se}}}var T=s,O=i,A=e,D=u,L=n,P=p,$=g,N=t,V=o,F=r,M=c,B=d,ne=!1,te=!1;function R(_){return ne||(ne=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function j(_){return te||(te=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function G(_){return y(_)===s}function K(_){return y(_)===i}function z(_){return typeof _=="object"&&_!==null&&_.$$typeof===e}function U(_){return y(_)===u}function W(_){return y(_)===n}function X(_){return y(_)===p}function q(_){return y(_)===g}function Y(_){return y(_)===t}function Q(_){return y(_)===o}function ie(_){return y(_)===r}function I(_){return y(_)===c}function ee(_){return y(_)===d}de.ContextConsumer=T,de.ContextProvider=O,de.Element=A,de.ForwardRef=D,de.Fragment=L,de.Lazy=P,de.Memo=$,de.Portal=N,de.Profiler=V,de.StrictMode=F,de.Suspense=M,de.SuspenseList=B,de.isAsyncMode=R,de.isConcurrentMode=j,de.isContextConsumer=G,de.isContextProvider=K,de.isElement=z,de.isForwardRef=U,de.isFragment=W,de.isLazy=X,de.isMemo=q,de.isPortal=Y,de.isProfiler=Q,de.isStrictMode=ie,de.isSuspense=I,de.isSuspenseList=ee,de.isValidElementType=S,de.typeOf=y}()),de}process.env.NODE_ENV==="production"?Hr.exports=Xl():Hr.exports=Kl();var Un=Hr.exports;const Yl=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Jl(e){const t=`${e}`.match(Yl);return t&&t[1]||""}function bs(e,t=""){return e.displayName||e.name||Jl(e)||t}function gi(e,t,n){const r=bs(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function Zl(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return bs(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Un.ForwardRef:return gi(e,e.render,"ForwardRef");case Un.Memo:return gi(e,e.type,"memo");default:return}}}function ot(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const i=e[t],s=o||t;return i==null?null:i&&i.nodeType!==1?new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`):null}const Ql=l.oneOfType([l.func,l.object]),fo=Ql;function Ye(e){if(typeof e!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Lt(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Gr(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function ys(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function eu(e,t){return process.env.NODE_ENV==="production"?()=>null:(n,r,o,i,s)=>{const a=o||"<<anonymous>>",u=s||r;return typeof n[r]<"u"?new Error(`The ${i} \`${u}\` of \`${a}\` is deprecated. ${t}`):null}}function tu(e,t){var n,r;return C.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function ke(e){return e&&e.ownerDocument||document}function Bt(e){return ke(e).defaultView||window}function nu(e,t){if(process.env.NODE_ENV==="production")return()=>null;const n=t?E({},t.propTypes):null;return o=>(i,s,a,u,c,...d)=>{const g=c||s,p=n==null?void 0:n[g];if(p){const f=p(i,s,a,u,c,...d);if(f)return f}return typeof i[s]<"u"&&!i[o]?new Error(`The prop \`${g}\` of \`${e}\` can only be used together with the \`${o}\` prop.`):null}}function qn(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const ru=typeof window<"u"?C.useLayoutEffect:C.useEffect,Tt=ru;let mi=0;function ou(e){const[t,n]=C.useState(e),r=e||t;return C.useEffect(()=>{t==null&&(mi+=1,n(`mui-${mi}`))},[t]),r}const hi=C["useId".toString()];function ws(e){if(hi!==void 0){const t=hi();return e??t}return ou(e)}function iu(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const i=o||t;return typeof e[t]<"u"?new Error(`The prop \`${i}\` is not supported. Please remove it.`):null}function xs({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=C.useRef(e!==void 0),[i,s]=C.useState(t),a=o?e:i;if(process.env.NODE_ENV!=="production"){C.useEffect(()=>{o!==(e!==void 0)&&console.error([`MUI: A component is changing the ${o?"":"un"}controlled ${r} state of ${n} to be ${o?"un":""}controlled.`,"Elements should not switch from uncontrolled to controlled (or vice versa).",`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.","More info: https://fb.me/react-controlled-components"].join(`
`))},[r,n,e]);const{current:c}=C.useRef(t);C.useEffect(()=>{!o&&c!==t&&console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`))},[JSON.stringify(t)])}const u=C.useCallback(c=>{o||s(c)},[]);return[a,u]}function vn(e){const t=C.useRef(e);return Tt(()=>{t.current=e}),C.useRef((...n)=>(0,t.current)(...n)).current}function Ge(...e){return C.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{qn(n,t)})},e)}const vi={};function su(e,t){const n=C.useRef(vi);return n.current===vi&&(n.current=e(t)),n}const au=[];function lu(e){C.useEffect(e,au)}class Cn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Cn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function ln(){const e=su(Cn.create).current;return lu(e.disposeEffect),e}let nr=!0,Ur=!1;const uu=new Cn,cu={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function du(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&cu[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function pu(e){e.metaKey||e.altKey||e.ctrlKey||(nr=!0)}function Tr(){nr=!1}function fu(){this.visibilityState==="hidden"&&Ur&&(nr=!0)}function gu(e){e.addEventListener("keydown",pu,!0),e.addEventListener("mousedown",Tr,!0),e.addEventListener("pointerdown",Tr,!0),e.addEventListener("touchstart",Tr,!0),e.addEventListener("visibilitychange",fu,!0)}function mu(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return nr||du(t)}function Ss(){const e=C.useCallback(o=>{o!=null&&gu(o.ownerDocument)},[]),t=C.useRef(!1);function n(){return t.current?(Ur=!0,uu.start(100,()=>{Ur=!1}),t.current=!1,!0):!1}function r(o){return mu(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function Cs(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function hu(e){const t=typeof e;switch(t){case"number":return Number.isNaN(e)?"NaN":Number.isFinite(e)?e!==Math.floor(e)?"float":"number":"Infinity";case"object":return e===null?"null":e.constructor.name;default:return t}}function vu(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}const bu=Number.isInteger||vu;function Es(e,t,n,r){const o=e[t];if(o==null||!bu(o)){const i=hu(o);return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`)}return null}function Rs(e,t,...n){return e[t]===void 0?null:Es(e,t,...n)}function qr(){return null}Rs.isRequired=Es;qr.isRequired=qr;const Ts=process.env.NODE_ENV==="production"?qr:Rs;function Ps(e,t){const n=E({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=E({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=E({},i),Object.keys(o).forEach(s=>{n[r][s]=Ps(o[s],i[s])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function at(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,s)=>{if(s){const a=t(s);a!==""&&i.push(a),n&&n[s]&&i.push(n[s])}return i},[]).join(" ")}),r}const bi=e=>e,yu=()=>{let e=bi;return{configure(t){e=t},generate(t){return e(t)},reset(){e=bi}}},wu=yu(),ks=wu,Os={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ze(e,t,n="Mui"){const r=Os[t];return r?`${n}-${r}`:`${ks.generate(e)}-${t}`}function mt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Ze(e,o,n)}),r}function xu(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function _s(e){return typeof e=="string"}function un(e,t,n){return e===void 0||_s(e)?t:E({},t,{ownerState:E({},t.ownerState,n)})}const Su={disableDefaultClasses:!1},Cu=C.createContext(Su);function Eu(e){const{disableDefaultClasses:t}=C.useContext(Cu);return n=>t?"":e(n)}function Ns(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Ru(e,t,n){return typeof e=="function"?e(t,n):e}function yi(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Tu(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const f=Pe(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),h=E({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),m=E({},n,o,r);return f.length>0&&(m.className=f),Object.keys(h).length>0&&(m.style=h),{props:m,internalRef:void 0}}const s=Ns(E({},o,r)),a=yi(r),u=yi(o),c=t(s),d=Pe(c==null?void 0:c.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),g=E({},c==null?void 0:c.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),p=E({},c,n,u,a);return d.length>0&&(p.className=d),Object.keys(g).length>0&&(p.style=g),{props:p,internalRef:c.ref}}const Pu=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Pt(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,s=fe(e,Pu),a=i?{}:Ru(r,o),{props:u,internalRef:c}=Tu(E({},s,{externalSlotProps:a})),d=Ge(c,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return un(n,E({},u,{ref:d}),o)}const $s="base";function ku(e){return`${$s}--${e}`}function Ou(e,t){return`${$s}-${e}-${t}`}function Ms(e,t){const n=Os[t];return n?ku(n):Ou(e,t)}function _u(e,t){const n={};return t.forEach(r=>{n[r]=Ms(e,r)}),n}const Nu=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function $u(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Mu(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Iu(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Mu(e))}function ju(e){const t=[],n=[];return Array.from(e.querySelectorAll(Nu)).forEach((r,o)=>{const i=$u(r);i===-1||!Iu(r)||(i===0?t.push(r):n.push({documentOrder:o,tabIndex:i,node:r}))}),n.sort((r,o)=>r.tabIndex===o.tabIndex?r.documentOrder-o.documentOrder:r.tabIndex-o.tabIndex).map(r=>r.node).concat(t)}function Fu(){return!0}function Wn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=ju,isEnabled:s=Fu,open:a}=e,u=C.useRef(!1),c=C.useRef(null),d=C.useRef(null),g=C.useRef(null),p=C.useRef(null),f=C.useRef(!1),h=C.useRef(null),m=Ge(t.ref,h),v=C.useRef(null);C.useEffect(()=>{!a||!h.current||(f.current=!n)},[n,a]),C.useEffect(()=>{if(!a||!h.current)return;const x=ke(h.current);return h.current.contains(x.activeElement)||(h.current.hasAttribute("tabIndex")||(process.env.NODE_ENV!=="production"&&console.error(["MUI: The modal content node does not accept focus.",'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)),h.current.setAttribute("tabIndex","-1")),f.current&&h.current.focus()),()=>{o||(g.current&&g.current.focus&&(u.current=!0,g.current.focus()),g.current=null)}},[a]),C.useEffect(()=>{if(!a||!h.current)return;const x=ke(h.current),S=O=>{v.current=O,!(r||!s()||O.key!=="Tab")&&x.activeElement===h.current&&O.shiftKey&&(u.current=!0,d.current&&d.current.focus())},y=()=>{const O=h.current;if(O===null)return;if(!x.hasFocus()||!s()||u.current){u.current=!1;return}if(O.contains(x.activeElement)||r&&x.activeElement!==c.current&&x.activeElement!==d.current)return;if(x.activeElement!==p.current)p.current=null;else if(p.current!==null)return;if(!f.current)return;let A=[];if((x.activeElement===c.current||x.activeElement===d.current)&&(A=i(h.current)),A.length>0){var D,L;const P=!!((D=v.current)!=null&&D.shiftKey&&((L=v.current)==null?void 0:L.key)==="Tab"),$=A[0],N=A[A.length-1];typeof $!="string"&&typeof N!="string"&&(P?N.focus():$.focus())}else O.focus()};x.addEventListener("focusin",y),x.addEventListener("keydown",S,!0);const T=setInterval(()=>{x.activeElement&&x.activeElement.tagName==="BODY"&&y()},50);return()=>{clearInterval(T),x.removeEventListener("focusin",y),x.removeEventListener("keydown",S,!0)}},[n,r,o,s,a,i]);const w=x=>{g.current===null&&(g.current=x.relatedTarget),f.current=!0,p.current=x.target;const S=t.props.onFocus;S&&S(x)},k=x=>{g.current===null&&(g.current=x.relatedTarget),f.current=!0};return b.jsxs(C.Fragment,{children:[b.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:c,"data-testid":"sentinelStart"}),C.cloneElement(t,{ref:m,onFocus:w}),b.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:d,"data-testid":"sentinelEnd"})]})}process.env.NODE_ENV!=="production"&&(Wn.propTypes={children:Sn,disableAutoFocus:l.bool,disableEnforceFocus:l.bool,disableRestoreFocus:l.bool,getTabbable:l.func,isEnabled:l.func,open:l.bool.isRequired});process.env.NODE_ENV!=="production"&&(Wn["propTypes"]=vs(Wn.propTypes));function Au(e){return typeof e=="function"?e():e}const bn=C.forwardRef(function(t,n){const{children:r,container:o,disablePortal:i=!1}=t,[s,a]=C.useState(null),u=Ge(C.isValidElement(r)?r.ref:null,n);if(Tt(()=>{i||a(Au(o)||document.body)},[o,i]),Tt(()=>{if(s&&!i)return qn(n,s),()=>{qn(n,null)}},[n,s,i]),i){if(C.isValidElement(r)){const c={ref:u};return C.cloneElement(r,c)}return b.jsx(C.Fragment,{children:r})}return b.jsx(C.Fragment,{children:s&&tl.createPortal(r,s)})});process.env.NODE_ENV!=="production"&&(bn.propTypes={children:l.node,container:l.oneOfType([ot,l.func]),disablePortal:l.bool});process.env.NODE_ENV!=="production"&&(bn["propTypes"]=vs(bn.propTypes));function Du(e){const t=ke(e);return t.body===e?Bt(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function pn(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function wi(e){return parseInt(Bt(e).getComputedStyle(e).paddingRight,10)||0}function Vu(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function xi(e,t,n,r,o){const i=[t,n,...r];[].forEach.call(e.children,s=>{const a=i.indexOf(s)===-1,u=!Vu(s);a&&u&&pn(s,o)})}function Pr(e,t){let n=-1;return e.some((r,o)=>t(r)?(n=o,!0):!1),n}function Lu(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Du(r)){const s=Cs(ke(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${wi(r)+s}px`;const a=ke(r).querySelectorAll(".mui-fixed");[].forEach.call(a,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${wi(u)+s}px`})}let i;if(r.parentNode instanceof DocumentFragment)i=ke(r).body;else{const s=r.parentElement,a=Bt(r);i=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:s,property:a})=>{i?s.style.setProperty(a,i):s.style.removeProperty(a)})}}function Bu(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class zu{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&pn(t.modalRef,!1);const o=Bu(n);xi(n,t.mount,t.modalRef,o,!0);const i=Pr(this.containers,s=>s.container===n);return i!==-1?(this.containers[i].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),r)}mount(t,n){const r=Pr(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[r];o.restore||(o.restore=Lu(o,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const o=Pr(this.containers,s=>s.modals.indexOf(t)!==-1),i=this.containers[o];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(r,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&pn(t.modalRef,n),xi(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(o,1);else{const s=i.modals[i.modals.length-1];s.modalRef&&pn(s.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Hu(e){return typeof e=="function"?e():e}function Gu(e){return e?e.props.hasOwnProperty("in"):!1}const Uu=new zu;function qu(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:o=Uu,closeAfterTransition:i=!1,onTransitionEnter:s,onTransitionExited:a,children:u,onClose:c,open:d,rootRef:g}=e,p=C.useRef({}),f=C.useRef(null),h=C.useRef(null),m=Ge(h,g),[v,w]=C.useState(!d),k=Gu(u);let x=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(x=!1);const S=()=>ke(f.current),y=()=>(p.current.modalRef=h.current,p.current.mount=f.current,p.current),T=()=>{o.mount(y(),{disableScrollLock:r}),h.current&&(h.current.scrollTop=0)},O=vn(()=>{const M=Hu(t)||S().body;o.add(y(),M),h.current&&T()}),A=C.useCallback(()=>o.isTopModal(y()),[o]),D=vn(M=>{f.current=M,M&&(d&&A()?T():h.current&&pn(h.current,x))}),L=C.useCallback(()=>{o.remove(y(),x)},[x,o]);C.useEffect(()=>()=>{L()},[L]),C.useEffect(()=>{d?O():(!k||!i)&&L()},[d,L,k,i,O]);const P=M=>B=>{var ne;(ne=M.onKeyDown)==null||ne.call(M,B),!(B.key!=="Escape"||B.which===229||!A())&&(n||(B.stopPropagation(),c&&c(B,"escapeKeyDown")))},$=M=>B=>{var ne;(ne=M.onClick)==null||ne.call(M,B),B.target===B.currentTarget&&c&&c(B,"backdropClick")};return{getRootProps:(M={})=>{const B=Ns(e);delete B.onTransitionEnter,delete B.onTransitionExited;const ne=E({},B,M);return E({role:"presentation"},ne,{onKeyDown:P(ne),ref:m})},getBackdropProps:(M={})=>{const B=M;return E({"aria-hidden":!0},B,{onClick:$(B),open:d})},getTransitionProps:()=>{const M=()=>{w(!1),s&&s()},B=()=>{w(!0),a&&a(),i&&L()};return{onEnter:Gr(M,u==null?void 0:u.props.onEnter),onExited:Gr(B,u==null?void 0:u.props.onExited)}},rootRef:m,portalRef:D,isTopModal:A,exited:v,hasTransition:k}}var Me="top",Ue="bottom",qe="right",Ie="left",go="auto",En=[Me,Ue,qe,Ie],zt="start",yn="end",Wu="clippingParents",Is="viewport",tn="popper",Xu="reference",Si=En.reduce(function(e,t){return e.concat([t+"-"+zt,t+"-"+yn])},[]),js=[].concat(En,[go]).reduce(function(e,t){return e.concat([t,t+"-"+zt,t+"-"+yn])},[]),Ku="beforeRead",Yu="read",Ju="afterRead",Zu="beforeMain",Qu="main",ec="afterMain",tc="beforeWrite",nc="write",rc="afterWrite",oc=[Ku,Yu,Ju,Zu,Qu,ec,tc,nc,rc];function Je(e){return e?(e.nodeName||"").toLowerCase():null}function Ve(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function kt(e){var t=Ve(e).Element;return e instanceof t||e instanceof Element}function He(e){var t=Ve(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function mo(e){if(typeof ShadowRoot>"u")return!1;var t=Ve(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ic(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!He(i)||!Je(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(s){var a=o[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function sc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},s=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),a=s.reduce(function(u,c){return u[c]="",u},{});!He(o)||!Je(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(u){o.removeAttribute(u)}))})}}const ac={name:"applyStyles",enabled:!0,phase:"write",fn:ic,effect:sc,requires:["computeStyles"]};function Ke(e){return e.split("-")[0]}var Et=Math.max,Xn=Math.min,Ht=Math.round;function Wr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Fs(){return!/^((?!chrome|android).)*safari/i.test(Wr())}function Gt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&He(e)&&(o=e.offsetWidth>0&&Ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ht(r.height)/e.offsetHeight||1);var s=kt(e)?Ve(e):window,a=s.visualViewport,u=!Fs()&&n,c=(r.left+(u&&a?a.offsetLeft:0))/o,d=(r.top+(u&&a?a.offsetTop:0))/i,g=r.width/o,p=r.height/i;return{width:g,height:p,top:d,right:c+g,bottom:d+p,left:c,x:c,y:d}}function ho(e){var t=Gt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function As(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&mo(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function it(e){return Ve(e).getComputedStyle(e)}function lc(e){return["table","td","th"].indexOf(Je(e))>=0}function ht(e){return((kt(e)?e.ownerDocument:e.document)||window.document).documentElement}function rr(e){return Je(e)==="html"?e:e.assignedSlot||e.parentNode||(mo(e)?e.host:null)||ht(e)}function Ci(e){return!He(e)||it(e).position==="fixed"?null:e.offsetParent}function uc(e){var t=/firefox/i.test(Wr()),n=/Trident/i.test(Wr());if(n&&He(e)){var r=it(e);if(r.position==="fixed")return null}var o=rr(e);for(mo(o)&&(o=o.host);He(o)&&["html","body"].indexOf(Je(o))<0;){var i=it(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Rn(e){for(var t=Ve(e),n=Ci(e);n&&lc(n)&&it(n).position==="static";)n=Ci(n);return n&&(Je(n)==="html"||Je(n)==="body"&&it(n).position==="static")?t:n||uc(e)||t}function vo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fn(e,t,n){return Et(e,Xn(t,n))}function cc(e,t,n){var r=fn(e,t,n);return r>n?n:r}function Ds(){return{top:0,right:0,bottom:0,left:0}}function Vs(e){return Object.assign({},Ds(),e)}function Ls(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var dc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Vs(typeof t!="number"?t:Ls(t,En))};function pc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=Ke(n.placement),u=vo(a),c=[Ie,qe].indexOf(a)>=0,d=c?"height":"width";if(!(!i||!s)){var g=dc(o.padding,n),p=ho(i),f=u==="y"?Me:Ie,h=u==="y"?Ue:qe,m=n.rects.reference[d]+n.rects.reference[u]-s[u]-n.rects.popper[d],v=s[u]-n.rects.reference[u],w=Rn(i),k=w?u==="y"?w.clientHeight||0:w.clientWidth||0:0,x=m/2-v/2,S=g[f],y=k-p[d]-g[h],T=k/2-p[d]/2+x,O=fn(S,T,y),A=u;n.modifiersData[r]=(t={},t[A]=O,t.centerOffset=O-T,t)}}function fc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||As(t.elements.popper,o)&&(t.elements.arrow=o))}const gc={name:"arrow",enabled:!0,phase:"main",fn:pc,effect:fc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ut(e){return e.split("-")[1]}var mc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hc(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Ht(n*o)/o||0,y:Ht(r*o)/o||0}}function Ei(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,s=e.offsets,a=e.position,u=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,g=e.isFixed,p=s.x,f=p===void 0?0:p,h=s.y,m=h===void 0?0:h,v=typeof d=="function"?d({x:f,y:m}):{x:f,y:m};f=v.x,m=v.y;var w=s.hasOwnProperty("x"),k=s.hasOwnProperty("y"),x=Ie,S=Me,y=window;if(c){var T=Rn(n),O="clientHeight",A="clientWidth";if(T===Ve(n)&&(T=ht(n),it(T).position!=="static"&&a==="absolute"&&(O="scrollHeight",A="scrollWidth")),T=T,o===Me||(o===Ie||o===qe)&&i===yn){S=Ue;var D=g&&T===y&&y.visualViewport?y.visualViewport.height:T[O];m-=D-r.height,m*=u?1:-1}if(o===Ie||(o===Me||o===Ue)&&i===yn){x=qe;var L=g&&T===y&&y.visualViewport?y.visualViewport.width:T[A];f-=L-r.width,f*=u?1:-1}}var P=Object.assign({position:a},c&&mc),$=d===!0?hc({x:f,y:m},Ve(n)):{x:f,y:m};if(f=$.x,m=$.y,u){var N;return Object.assign({},P,(N={},N[S]=k?"0":"",N[x]=w?"0":"",N.transform=(y.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",N))}return Object.assign({},P,(t={},t[S]=k?m+"px":"",t[x]=w?f+"px":"",t.transform="",t))}function vc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,s=i===void 0?!0:i,a=n.roundOffsets,u=a===void 0?!0:a,c={placement:Ke(t.placement),variation:Ut(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ei(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ei(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const bc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vc,data:{}};var Mn={passive:!0};function yc(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,s=r.resize,a=s===void 0?!0:s,u=Ve(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(d){d.addEventListener("scroll",n.update,Mn)}),a&&u.addEventListener("resize",n.update,Mn),function(){i&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Mn)}),a&&u.removeEventListener("resize",n.update,Mn)}}const wc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yc,data:{}};var xc={left:"right",right:"left",bottom:"top",top:"bottom"};function Ln(e){return e.replace(/left|right|bottom|top/g,function(t){return xc[t]})}var Sc={start:"end",end:"start"};function Ri(e){return e.replace(/start|end/g,function(t){return Sc[t]})}function bo(e){var t=Ve(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function yo(e){return Gt(ht(e)).left+bo(e).scrollLeft}function Cc(e,t){var n=Ve(e),r=ht(e),o=n.visualViewport,i=r.clientWidth,s=r.clientHeight,a=0,u=0;if(o){i=o.width,s=o.height;var c=Fs();(c||!c&&t==="fixed")&&(a=o.offsetLeft,u=o.offsetTop)}return{width:i,height:s,x:a+yo(e),y:u}}function Ec(e){var t,n=ht(e),r=bo(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Et(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Et(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+yo(e),u=-r.scrollTop;return it(o||n).direction==="rtl"&&(a+=Et(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:u}}function wo(e){var t=it(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Bs(e){return["html","body","#document"].indexOf(Je(e))>=0?e.ownerDocument.body:He(e)&&wo(e)?e:Bs(rr(e))}function gn(e,t){var n;t===void 0&&(t=[]);var r=Bs(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Ve(r),s=o?[i].concat(i.visualViewport||[],wo(r)?r:[]):r,a=t.concat(s);return o?a:a.concat(gn(rr(s)))}function Xr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Rc(e,t){var n=Gt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ti(e,t,n){return t===Is?Xr(Cc(e,n)):kt(t)?Rc(t,n):Xr(Ec(ht(e)))}function Tc(e){var t=gn(rr(e)),n=["absolute","fixed"].indexOf(it(e).position)>=0,r=n&&He(e)?Rn(e):e;return kt(r)?t.filter(function(o){return kt(o)&&As(o,r)&&Je(o)!=="body"}):[]}function Pc(e,t,n,r){var o=t==="clippingParents"?Tc(e):[].concat(t),i=[].concat(o,[n]),s=i[0],a=i.reduce(function(u,c){var d=Ti(e,c,r);return u.top=Et(d.top,u.top),u.right=Xn(d.right,u.right),u.bottom=Xn(d.bottom,u.bottom),u.left=Et(d.left,u.left),u},Ti(e,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function zs(e){var t=e.reference,n=e.element,r=e.placement,o=r?Ke(r):null,i=r?Ut(r):null,s=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,u;switch(o){case Me:u={x:s,y:t.y-n.height};break;case Ue:u={x:s,y:t.y+t.height};break;case qe:u={x:t.x+t.width,y:a};break;case Ie:u={x:t.x-n.width,y:a};break;default:u={x:t.x,y:t.y}}var c=o?vo(o):null;if(c!=null){var d=c==="y"?"height":"width";switch(i){case zt:u[c]=u[c]-(t[d]/2-n[d]/2);break;case yn:u[c]=u[c]+(t[d]/2-n[d]/2);break}}return u}function wn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,s=i===void 0?e.strategy:i,a=n.boundary,u=a===void 0?Wu:a,c=n.rootBoundary,d=c===void 0?Is:c,g=n.elementContext,p=g===void 0?tn:g,f=n.altBoundary,h=f===void 0?!1:f,m=n.padding,v=m===void 0?0:m,w=Vs(typeof v!="number"?v:Ls(v,En)),k=p===tn?Xu:tn,x=e.rects.popper,S=e.elements[h?k:p],y=Pc(kt(S)?S:S.contextElement||ht(e.elements.popper),u,d,s),T=Gt(e.elements.reference),O=zs({reference:T,element:x,strategy:"absolute",placement:o}),A=Xr(Object.assign({},x,O)),D=p===tn?A:T,L={top:y.top-D.top+w.top,bottom:D.bottom-y.bottom+w.bottom,left:y.left-D.left+w.left,right:D.right-y.right+w.right},P=e.modifiersData.offset;if(p===tn&&P){var $=P[o];Object.keys(L).forEach(function(N){var V=[qe,Ue].indexOf(N)>=0?1:-1,F=[Me,Ue].indexOf(N)>=0?"y":"x";L[N]+=$[F]*V})}return L}function kc(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,u=n.allowedAutoPlacements,c=u===void 0?js:u,d=Ut(r),g=d?a?Si:Si.filter(function(h){return Ut(h)===d}):En,p=g.filter(function(h){return c.indexOf(h)>=0});p.length===0&&(p=g);var f=p.reduce(function(h,m){return h[m]=wn(e,{placement:m,boundary:o,rootBoundary:i,padding:s})[Ke(m)],h},{});return Object.keys(f).sort(function(h,m){return f[h]-f[m]})}function Oc(e){if(Ke(e)===go)return[];var t=Ln(e);return[Ri(e),t,Ri(t)]}function _c(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,s=n.altAxis,a=s===void 0?!0:s,u=n.fallbackPlacements,c=n.padding,d=n.boundary,g=n.rootBoundary,p=n.altBoundary,f=n.flipVariations,h=f===void 0?!0:f,m=n.allowedAutoPlacements,v=t.options.placement,w=Ke(v),k=w===v,x=u||(k||!h?[Ln(v)]:Oc(v)),S=[v].concat(x).reduce(function(z,U){return z.concat(Ke(U)===go?kc(t,{placement:U,boundary:d,rootBoundary:g,padding:c,flipVariations:h,allowedAutoPlacements:m}):U)},[]),y=t.rects.reference,T=t.rects.popper,O=new Map,A=!0,D=S[0],L=0;L<S.length;L++){var P=S[L],$=Ke(P),N=Ut(P)===zt,V=[Me,Ue].indexOf($)>=0,F=V?"width":"height",M=wn(t,{placement:P,boundary:d,rootBoundary:g,altBoundary:p,padding:c}),B=V?N?qe:Ie:N?Ue:Me;y[F]>T[F]&&(B=Ln(B));var ne=Ln(B),te=[];if(i&&te.push(M[$]<=0),a&&te.push(M[B]<=0,M[ne]<=0),te.every(function(z){return z})){D=P,A=!1;break}O.set(P,te)}if(A)for(var R=h?3:1,j=function(U){var W=S.find(function(X){var q=O.get(X);if(q)return q.slice(0,U).every(function(Y){return Y})});if(W)return D=W,"break"},G=R;G>0;G--){var K=j(G);if(K==="break")break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}}const Nc={name:"flip",enabled:!0,phase:"main",fn:_c,requiresIfExists:["offset"],data:{_skip:!1}};function Pi(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ki(e){return[Me,qe,Ue,Ie].some(function(t){return e[t]>=0})}function $c(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=wn(t,{elementContext:"reference"}),a=wn(t,{altBoundary:!0}),u=Pi(s,r),c=Pi(a,o,i),d=ki(u),g=ki(c);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}const Mc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$c};function Ic(e,t,n){var r=Ke(e),o=[Ie,Me].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[Ie,qe].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function jc(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,s=js.reduce(function(d,g){return d[g]=Ic(g,t.rects,i),d},{}),a=s[t.placement],u=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=s}const Fc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:jc};function Ac(e){var t=e.state,n=e.name;t.modifiersData[n]=zs({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Dc={name:"popperOffsets",enabled:!0,phase:"read",fn:Ac,data:{}};function Vc(e){return e==="x"?"y":"x"}function Lc(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,s=n.altAxis,a=s===void 0?!1:s,u=n.boundary,c=n.rootBoundary,d=n.altBoundary,g=n.padding,p=n.tether,f=p===void 0?!0:p,h=n.tetherOffset,m=h===void 0?0:h,v=wn(t,{boundary:u,rootBoundary:c,padding:g,altBoundary:d}),w=Ke(t.placement),k=Ut(t.placement),x=!k,S=vo(w),y=Vc(S),T=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,D=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,L=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(T){if(i){var N,V=S==="y"?Me:Ie,F=S==="y"?Ue:qe,M=S==="y"?"height":"width",B=T[S],ne=B+v[V],te=B-v[F],R=f?-A[M]/2:0,j=k===zt?O[M]:A[M],G=k===zt?-A[M]:-O[M],K=t.elements.arrow,z=f&&K?ho(K):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ds(),W=U[V],X=U[F],q=fn(0,O[M],z[M]),Y=x?O[M]/2-R-q-W-L.mainAxis:j-q-W-L.mainAxis,Q=x?-O[M]/2+R+q+X+L.mainAxis:G+q+X+L.mainAxis,ie=t.elements.arrow&&Rn(t.elements.arrow),I=ie?S==="y"?ie.clientTop||0:ie.clientLeft||0:0,ee=(N=P==null?void 0:P[S])!=null?N:0,_=B+Y-ee-I,se=B+Q-ee,Ce=fn(f?Xn(ne,_):ne,B,f?Et(te,se):te);T[S]=Ce,$[S]=Ce-B}if(a){var _e,ye=S==="x"?Me:Ie,bt=S==="x"?Ue:qe,Ne=T[y],Qe=y==="y"?"height":"width",je=Ne+v[ye],et=Ne-v[bt],Ee=[Me,Ie].indexOf(w)!==-1,_t=(_e=P==null?void 0:P[y])!=null?_e:0,yt=Ee?je:Ne-O[Qe]-A[Qe]-_t+L.altAxis,Xt=Ee?Ne+O[Qe]+A[Qe]-_t-L.altAxis:et,On=f&&Ee?cc(yt,Ne,Xt):fn(f?yt:je,Ne,f?Xt:et);T[y]=On,$[y]=On-Ne}t.modifiersData[r]=$}}const Bc={name:"preventOverflow",enabled:!0,phase:"main",fn:Lc,requiresIfExists:["offset"]};function zc(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Hc(e){return e===Ve(e)||!He(e)?bo(e):zc(e)}function Gc(e){var t=e.getBoundingClientRect(),n=Ht(t.width)/e.offsetWidth||1,r=Ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Uc(e,t,n){n===void 0&&(n=!1);var r=He(t),o=He(t)&&Gc(t),i=ht(t),s=Gt(e,o,n),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&((Je(t)!=="body"||wo(i))&&(a=Hc(t)),He(t)?(u=Gt(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=yo(i))),{x:s.left+a.scrollLeft-u.x,y:s.top+a.scrollTop-u.y,width:s.width,height:s.height}}function qc(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var u=t.get(a);u&&o(u)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Wc(e){var t=qc(e);return oc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Xc(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Kc(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Oi={placement:"bottom",modifiers:[],strategy:"absolute"};function _i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Yc(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?Oi:o;return function(a,u,c){c===void 0&&(c=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oi,i),modifiersData:{},elements:{reference:a,popper:u},attributes:{},styles:{}},g=[],p=!1,f={state:d,setOptions:function(w){var k=typeof w=="function"?w(d.options):w;m(),d.options=Object.assign({},i,d.options,k),d.scrollParents={reference:kt(a)?gn(a):a.contextElement?gn(a.contextElement):[],popper:gn(u)};var x=Wc(Kc([].concat(r,d.options.modifiers)));return d.orderedModifiers=x.filter(function(S){return S.enabled}),h(),f.update()},forceUpdate:function(){if(!p){var w=d.elements,k=w.reference,x=w.popper;if(_i(k,x)){d.rects={reference:Uc(k,Rn(x),d.options.strategy==="fixed"),popper:ho(x)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(L){return d.modifiersData[L.name]=Object.assign({},L.data)});for(var S=0;S<d.orderedModifiers.length;S++){if(d.reset===!0){d.reset=!1,S=-1;continue}var y=d.orderedModifiers[S],T=y.fn,O=y.options,A=O===void 0?{}:O,D=y.name;typeof T=="function"&&(d=T({state:d,options:A,name:D,instance:f})||d)}}}},update:Xc(function(){return new Promise(function(v){f.forceUpdate(),v(d)})}),destroy:function(){m(),p=!0}};if(!_i(a,u))return f;f.setOptions(c).then(function(v){!p&&c.onFirstUpdate&&c.onFirstUpdate(v)});function h(){d.orderedModifiers.forEach(function(v){var w=v.name,k=v.options,x=k===void 0?{}:k,S=v.effect;if(typeof S=="function"){var y=S({state:d,name:w,instance:f,options:x}),T=function(){};g.push(y||T)}})}function m(){g.forEach(function(v){return v()}),g=[]}return f}}var Jc=[wc,Dc,bc,ac,Fc,Nc,Bc,gc,Mc],Zc=Yc({defaultModifiers:Jc});const Hs="Popper";function Qc(e){return Ms(Hs,e)}_u(Hs,["root"]);const ed=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],td=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function nd(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Kn(e){return typeof e=="function"?e():e}function or(e){return e.nodeType!==void 0}function rd(e){return!or(e)}const od=()=>at({root:["root"]},Eu(Qc)),id={},sd=C.forwardRef(function(t,n){var r;const{anchorEl:o,children:i,direction:s,disablePortal:a,modifiers:u,open:c,placement:d,popperOptions:g,popperRef:p,slotProps:f={},slots:h={},TransitionProps:m}=t,v=fe(t,ed),w=C.useRef(null),k=Ge(w,n),x=C.useRef(null),S=Ge(x,p),y=C.useRef(S);Tt(()=>{y.current=S},[S]),C.useImperativeHandle(p,()=>x.current,[]);const T=nd(d,s),[O,A]=C.useState(T),[D,L]=C.useState(Kn(o));C.useEffect(()=>{x.current&&x.current.forceUpdate()}),C.useEffect(()=>{o&&L(Kn(o))},[o]),Tt(()=>{if(!D||!c)return;const F=ne=>{A(ne.placement)};if(process.env.NODE_ENV!=="production"&&D&&or(D)&&D.nodeType===1){const ne=D.getBoundingClientRect();process.env.NODE_ENV!=="test"&&ne.top===0&&ne.left===0&&ne.right===0&&ne.bottom===0&&console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}let M=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:ne})=>{F(ne)}}];u!=null&&(M=M.concat(u)),g&&g.modifiers!=null&&(M=M.concat(g.modifiers));const B=Zc(D,w.current,E({placement:T},g,{modifiers:M}));return y.current(B),()=>{B.destroy(),y.current(null)}},[D,a,u,c,g,T]);const P={placement:O};m!==null&&(P.TransitionProps=m);const $=od(),N=(r=h.root)!=null?r:"div",V=Pt({elementType:N,externalSlotProps:f.root,externalForwardedProps:v,additionalProps:{role:"tooltip",ref:k},ownerState:t,className:$.root});return b.jsx(N,E({},V,{children:typeof i=="function"?i(P):i}))}),Gs=C.forwardRef(function(t,n){const{anchorEl:r,children:o,container:i,direction:s="ltr",disablePortal:a=!1,keepMounted:u=!1,modifiers:c,open:d,placement:g="bottom",popperOptions:p=id,popperRef:f,style:h,transition:m=!1,slotProps:v={},slots:w={}}=t,k=fe(t,td),[x,S]=C.useState(!0),y=()=>{S(!1)},T=()=>{S(!0)};if(!u&&!d&&(!m||x))return null;let O;if(i)O=i;else if(r){const L=Kn(r);O=L&&or(L)?ke(L).body:ke(null).body}const A=!d&&u&&(!m||x)?"none":void 0,D=m?{in:d,onEnter:y,onExited:T}:void 0;return b.jsx(bn,{disablePortal:a,container:O,children:b.jsx(sd,E({anchorEl:r,direction:s,disablePortal:a,modifiers:c,ref:n,open:m?!x:d,placement:g,popperOptions:p,popperRef:f,slotProps:v,slots:w},k,{style:E({position:"fixed",top:0,left:0,display:A},h),TransitionProps:D,children:o}))})});process.env.NODE_ENV!=="production"&&(Gs.propTypes={anchorEl:Wt(l.oneOfType([ot,l.object,l.func]),e=>{if(e.open){const t=Kn(e.anchorEl);if(t&&or(t)&&t.nodeType===1){const n=t.getBoundingClientRect();if(process.env.NODE_ENV!=="test"&&n.top===0&&n.left===0&&n.right===0&&n.bottom===0)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else if(!t||typeof t.getBoundingClientRect!="function"||rd(t)&&t.contextElement!=null&&t.contextElement.nodeType!==1)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","It should be an HTML element instance or a virtualElement ","(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`))}return null}),children:l.oneOfType([l.node,l.func]),container:l.oneOfType([ot,l.func]),direction:l.oneOf(["ltr","rtl"]),disablePortal:l.bool,keepMounted:l.bool,modifiers:l.arrayOf(l.shape({data:l.object,effect:l.func,enabled:l.bool,fn:l.func,name:l.any,options:l.object,phase:l.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:l.arrayOf(l.string),requiresIfExists:l.arrayOf(l.string)})),open:l.bool.isRequired,placement:l.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:l.shape({modifiers:l.array,onFirstUpdate:l.func,placement:l.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:l.oneOf(["absolute","fixed"])}),popperRef:fo,slotProps:l.shape({root:l.oneOfType([l.func,l.object])}),slots:l.shape({root:l.elementType}),transition:l.bool});const ad=["values","unit","step"],ld=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>E({},n,{[r.key]:r.val}),{})};function ud(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=fe(e,ad),i=ld(t),s=Object.keys(i);function a(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function u(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function c(p,f){const h=s.indexOf(f);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(h!==-1&&typeof t[s[h]]=="number"?t[s[h]]:f)-r/100}${n})`}function d(p){return s.indexOf(p)+1<s.length?c(p,s[s.indexOf(p)+1]):a(p)}function g(p){const f=s.indexOf(p);return f===0?a(s[1]):f===s.length-1?u(s[f]):c(p,s[s.indexOf(p)+1]).replace("@media","@media not all and")}return E({keys:s,values:i,up:a,down:u,between:c,only:d,not:g,unit:n},o)}const cd={borderRadius:4},dd=cd,pd=process.env.NODE_ENV!=="production"?l.oneOfType([l.number,l.string,l.object,l.array]):{},vt=pd;function mn(e,t){return t?rt(e,t,{clone:!1}):e}const xo={xs:0,sm:600,md:900,lg:1200,xl:1536},Ni={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${xo[e]}px)`};function st(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||Ni;return t.reduce((s,a,u)=>(s[i.up(i.keys[u])]=n(t[u]),s),{})}if(typeof t=="object"){const i=r.breakpoints||Ni;return Object.keys(t).reduce((s,a)=>{if(Object.keys(i.values||xo).indexOf(a)!==-1){const u=i.up(a);s[u]=n(t[a],a)}else{const u=a;s[u]=t[u]}return s},{})}return n(t)}function fd(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function gd(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function ir(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Yn(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=ir(e,n)||r,t&&(o=t(o,r,e)),o}function Se(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=s=>{if(s[t]==null)return null;const a=s[t],u=s.theme,c=ir(u,r)||{};return st(s,a,g=>{let p=Yn(c,o,g);return g===p&&typeof g=="string"&&(p=Yn(c,o,`${t}${g==="default"?"":Ye(g)}`,g)),n===!1?p:{[n]:p}})};return i.propTypes=process.env.NODE_ENV!=="production"?{[t]:vt}:{},i.filterProps=[t],i}function md(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const hd={m:"margin",p:"padding"},vd={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$i={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},bd=md(e=>{if(e.length>2)if($i[e])e=$i[e];else return[e];const[t,n]=e.split(""),r=hd[t],o=vd[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),sr=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ar=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],yd=[...sr,...ar];function Tn(e,t,n,r){var o;const i=(o=ir(e,t,!1))!=null?o:n;return typeof i=="number"?s=>typeof s=="string"?s:(process.env.NODE_ENV!=="production"&&typeof s!="number"&&console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`),i*s):Array.isArray(i)?s=>typeof s=="string"?s:(process.env.NODE_ENV!=="production"&&(Number.isInteger(s)?s>i.length-1&&console.error([`MUI: The value provided (${s}) overflows.`,`The supported values are: ${JSON.stringify(i)}.`,`${s} > ${i.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))),i[s]):typeof i=="function"?i:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function Us(e){return Tn(e,"spacing",8,"spacing")}function Pn(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function wd(e,t){return n=>e.reduce((r,o)=>(r[o]=Pn(t,n),r),{})}function xd(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=bd(n),i=wd(o,r),s=e[n];return st(e,s,i)}function qs(e,t){const n=Us(e.theme);return Object.keys(e).map(r=>xd(e,t,r,n)).reduce(mn,{})}function ve(e){return qs(e,sr)}ve.propTypes=process.env.NODE_ENV!=="production"?sr.reduce((e,t)=>(e[t]=vt,e),{}):{};ve.filterProps=sr;function be(e){return qs(e,ar)}be.propTypes=process.env.NODE_ENV!=="production"?ar.reduce((e,t)=>(e[t]=vt,e),{}):{};be.filterProps=ar;process.env.NODE_ENV!=="production"&&yd.reduce((e,t)=>(e[t]=vt,e),{});function Sd(e=8){if(e.mui)return e;const t=Us({spacing:e}),n=(...r)=>(process.env.NODE_ENV!=="production"&&(r.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)),(r.length===0?[1]:r).map(i=>{const s=t(i);return typeof s=="number"?`${s}px`:s}).join(" "));return n.mui=!0,n}function lr(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?mn(o,t[i](r)):o,{});return n.propTypes=process.env.NODE_ENV!=="production"?e.reduce((r,o)=>Object.assign(r,o.propTypes),{}):{},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function ze(e){return typeof e!="number"?e:`${e}px solid`}function We(e,t){return Se({prop:e,themeKey:"borders",transform:t})}const Cd=We("border",ze),Ed=We("borderTop",ze),Rd=We("borderRight",ze),Td=We("borderBottom",ze),Pd=We("borderLeft",ze),kd=We("borderColor"),Od=We("borderTopColor"),_d=We("borderRightColor"),Nd=We("borderBottomColor"),$d=We("borderLeftColor"),Md=We("outline",ze),Id=We("outlineColor"),ur=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Tn(e.theme,"shape.borderRadius",4,"borderRadius"),n=r=>({borderRadius:Pn(t,r)});return st(e,e.borderRadius,n)}return null};ur.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:vt}:{};ur.filterProps=["borderRadius"];lr(Cd,Ed,Rd,Td,Pd,kd,Od,_d,Nd,$d,ur,Md,Id);const cr=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Tn(e.theme,"spacing",8,"gap"),n=r=>({gap:Pn(t,r)});return st(e,e.gap,n)}return null};cr.propTypes=process.env.NODE_ENV!=="production"?{gap:vt}:{};cr.filterProps=["gap"];const dr=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Tn(e.theme,"spacing",8,"columnGap"),n=r=>({columnGap:Pn(t,r)});return st(e,e.columnGap,n)}return null};dr.propTypes=process.env.NODE_ENV!=="production"?{columnGap:vt}:{};dr.filterProps=["columnGap"];const pr=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Tn(e.theme,"spacing",8,"rowGap"),n=r=>({rowGap:Pn(t,r)});return st(e,e.rowGap,n)}return null};pr.propTypes=process.env.NODE_ENV!=="production"?{rowGap:vt}:{};pr.filterProps=["rowGap"];const jd=Se({prop:"gridColumn"}),Fd=Se({prop:"gridRow"}),Ad=Se({prop:"gridAutoFlow"}),Dd=Se({prop:"gridAutoColumns"}),Vd=Se({prop:"gridAutoRows"}),Ld=Se({prop:"gridTemplateColumns"}),Bd=Se({prop:"gridTemplateRows"}),zd=Se({prop:"gridTemplateAreas"}),Hd=Se({prop:"gridArea"});lr(cr,dr,pr,jd,Fd,Ad,Dd,Vd,Ld,Bd,zd,Hd);function Vt(e,t){return t==="grey"?t:e}const Gd=Se({prop:"color",themeKey:"palette",transform:Vt}),Ud=Se({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Vt}),qd=Se({prop:"backgroundColor",themeKey:"palette",transform:Vt});lr(Gd,Ud,qd);function De(e){return e<=1&&e!==0?`${e*100}%`:e}const Wd=Se({prop:"width",transform:De}),So=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||xo[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:De(n)}};return st(e,e.maxWidth,t)}return null};So.filterProps=["maxWidth"];const Xd=Se({prop:"minWidth",transform:De}),Kd=Se({prop:"height",transform:De}),Yd=Se({prop:"maxHeight",transform:De}),Jd=Se({prop:"minHeight",transform:De});Se({prop:"size",cssProperty:"width",transform:De});Se({prop:"size",cssProperty:"height",transform:De});const Zd=Se({prop:"boxSizing"});lr(Wd,So,Xd,Kd,Yd,Jd,Zd);const Qd={border:{themeKey:"borders",transform:ze},borderTop:{themeKey:"borders",transform:ze},borderRight:{themeKey:"borders",transform:ze},borderBottom:{themeKey:"borders",transform:ze},borderLeft:{themeKey:"borders",transform:ze},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:ze},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ur},color:{themeKey:"palette",transform:Vt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Vt},backgroundColor:{themeKey:"palette",transform:Vt},p:{style:be},pt:{style:be},pr:{style:be},pb:{style:be},pl:{style:be},px:{style:be},py:{style:be},padding:{style:be},paddingTop:{style:be},paddingRight:{style:be},paddingBottom:{style:be},paddingLeft:{style:be},paddingX:{style:be},paddingY:{style:be},paddingInline:{style:be},paddingInlineStart:{style:be},paddingInlineEnd:{style:be},paddingBlock:{style:be},paddingBlockStart:{style:be},paddingBlockEnd:{style:be},m:{style:ve},mt:{style:ve},mr:{style:ve},mb:{style:ve},ml:{style:ve},mx:{style:ve},my:{style:ve},margin:{style:ve},marginTop:{style:ve},marginRight:{style:ve},marginBottom:{style:ve},marginLeft:{style:ve},marginX:{style:ve},marginY:{style:ve},marginInline:{style:ve},marginInlineStart:{style:ve},marginInlineEnd:{style:ve},marginBlock:{style:ve},marginBlockStart:{style:ve},marginBlockEnd:{style:ve},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:cr},rowGap:{style:pr},columnGap:{style:dr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:De},maxWidth:{style:So},minWidth:{transform:De},height:{transform:De},maxHeight:{transform:De},minHeight:{transform:De},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Co=Qd;function ep(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function tp(e,t){return typeof e=="function"?e(t):e}function np(){function e(n,r,o,i){const s={[n]:r,theme:o},a=i[n];if(!a)return{[n]:r};const{cssProperty:u=n,themeKey:c,transform:d,style:g}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const p=ir(o,c)||{};return g?g(s):st(s,r,h=>{let m=Yn(p,d,h);return h===m&&typeof h=="string"&&(m=Yn(p,d,`${n}${h==="default"?"":Ye(h)}`,h)),u===!1?m:{[u]:m}})}function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:Co;function a(u){let c=u;if(typeof u=="function")c=u(i);else if(typeof u!="object")return u;if(!c)return null;const d=fd(i.breakpoints),g=Object.keys(d);let p=d;return Object.keys(c).forEach(f=>{const h=tp(c[f],i);if(h!=null)if(typeof h=="object")if(s[f])p=mn(p,e(f,h,i,s));else{const m=st({theme:i},h,v=>({[f]:v}));ep(m,h)?p[f]=t({sx:h,theme:i}):p=mn(p,m)}else p=mn(p,e(f,h,i,s))}),gd(g,p)}return Array.isArray(o)?o.map(a):a(o)}return t}const Ws=np();Ws.filterProps=["sx"];const Eo=Ws;function rp(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const op=["breakpoints","palette","spacing","shape"];function Ro(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,s=fe(e,op),a=ud(n),u=Sd(o);let c=rt({breakpoints:a,direction:"ltr",components:{},palette:E({mode:"light"},r),spacing:u,shape:E({},dd,i)},s);return c.applyStyles=rp,c=t.reduce((d,g)=>rt(d,g),c),c.unstable_sxConfig=E({},Co,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(g){return Eo({sx:g,theme:this})},c}function ip(e){return Object.keys(e).length===0}function Xs(e=null){const t=C.useContext(Lr.ThemeContext);return!t||ip(t)?e:t}const sp=Ro();function Ks(e=sp){return Xs(e)}const ap=["ownerState"],lp=["variants"],up=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function cp(e){return Object.keys(e).length===0}function dp(e){return typeof e=="string"&&e.charCodeAt(0)>96}function Bn(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const pp=Ro(),Mi=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function In({defaultTheme:e,theme:t,themeId:n}){return cp(t)?e:t[n]||t}function fp(e){return e?(t,n)=>n[e]:null}function zn(e,t){let{ownerState:n}=t,r=fe(t,ap);const o=typeof e=="function"?e(E({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(i=>zn(i,E({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:i=[]}=o;let a=fe(o,lp);return i.forEach(u=>{let c=!0;typeof u.props=="function"?c=u.props(E({ownerState:n},r,n)):Object.keys(u.props).forEach(d=>{(n==null?void 0:n[d])!==u.props[d]&&r[d]!==u.props[d]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof u.style=="function"?u.style(E({ownerState:n},r,n)):u.style))}),a}return o}function gp(e={}){const{themeId:t,defaultTheme:n=pp,rootShouldForwardProp:r=Bn,slotShouldForwardProp:o=Bn}=e,i=s=>Eo(E({},s,{theme:In(E({},s,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(s,a={})=>{Lr.internal_processStyles(s,y=>y.filter(T=>!(T!=null&&T.__mui_systemSx)));const{name:u,slot:c,skipVariantsResolver:d,skipSx:g,overridesResolver:p=fp(Mi(c))}=a,f=fe(a,up),h=d!==void 0?d:c&&c!=="Root"&&c!=="root"||!1,m=g||!1;let v;process.env.NODE_ENV!=="production"&&u&&(v=`${u}-${Mi(c||"Root")}`);let w=Bn;c==="Root"||c==="root"?w=r:c?w=o:dp(s)&&(w=void 0);const k=Lr(s,E({shouldForwardProp:w,label:v},f)),x=y=>typeof y=="function"&&y.__emotion_real!==y||Ct(y)?T=>zn(y,E({},T,{theme:In({theme:T.theme,defaultTheme:n,themeId:t})})):y,S=(y,...T)=>{let O=x(y);const A=T?T.map(x):[];u&&p&&A.push(P=>{const $=In(E({},P,{defaultTheme:n,themeId:t}));if(!$.components||!$.components[u]||!$.components[u].styleOverrides)return null;const N=$.components[u].styleOverrides,V={};return Object.entries(N).forEach(([F,M])=>{V[F]=zn(M,E({},P,{theme:$}))}),p(P,V)}),u&&!h&&A.push(P=>{var $;const N=In(E({},P,{defaultTheme:n,themeId:t})),V=N==null||($=N.components)==null||($=$[u])==null?void 0:$.variants;return zn({variants:V},E({},P,{theme:N}))}),m||A.push(i);const D=A.length-T.length;if(Array.isArray(y)&&D>0){const P=new Array(D).fill("");O=[...y,...P],O.raw=[...y.raw,...P]}const L=k(O,...A);if(process.env.NODE_ENV!=="production"){let P;u&&(P=`${u}${Ye(c||"")}`),P===void 0&&(P=`Styled(${Zl(s)})`),L.displayName=P}return s.muiName&&(L.muiName=s.muiName),L};return k.withConfig&&(S.withConfig=k.withConfig),S}}function mp(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:Ps(t.components[n].defaultProps,r)}function hp({props:e,name:t,defaultTheme:n,themeId:r}){let o=Ks(n);return r&&(o=o[r]||o),mp({theme:o,name:t,props:e})}function To(e,t=0,n=1){return process.env.NODE_ENV!=="production"&&(e<t||e>n)&&console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`),xu(e,t,n)}function vp(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ot(e){if(e.type)return e;if(e.charAt(0)==="#")return Ot(vp(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Lt(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Lt(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}function fr(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function bp(e){e=Ot(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),s=(c,d=(c+n/30)%12)=>o-i*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const u=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(a+="a",u.push(t[3])),fr({type:a,values:u})}function Ii(e){e=Ot(e);let t=e.type==="hsl"||e.type==="hsla"?Ot(bp(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ji(e,t){const n=Ii(e),r=Ii(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Jn(e,t){return e=Ot(e),t=To(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,fr(e)}function yp(e,t){if(e=Ot(e),t=To(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return fr(e)}function wp(e,t){if(e=Ot(e),t=To(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return fr(e)}function xp(e,t){return E({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Sp={black:"#000",white:"#fff"},xn=Sp,Cp={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ep=Cp,Rp={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Nt=Rp,Tp={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},$t=Tp,Pp={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},nn=Pp,kp={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Mt=kp,Op={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},It=Op,_p={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},jt=_p,Np=["mode","contrastThreshold","tonalOffset"],Fi={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:xn.white,default:xn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},kr={text:{primary:xn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:xn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ai(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=wp(e.main,o):t==="dark"&&(e.dark=yp(e.main,i)))}function $p(e="light"){return e==="dark"?{main:Mt[200],light:Mt[50],dark:Mt[400]}:{main:Mt[700],light:Mt[400],dark:Mt[800]}}function Mp(e="light"){return e==="dark"?{main:Nt[200],light:Nt[50],dark:Nt[400]}:{main:Nt[500],light:Nt[300],dark:Nt[700]}}function Ip(e="light"){return e==="dark"?{main:$t[500],light:$t[300],dark:$t[700]}:{main:$t[700],light:$t[400],dark:$t[800]}}function jp(e="light"){return e==="dark"?{main:It[400],light:It[300],dark:It[700]}:{main:It[700],light:It[500],dark:It[900]}}function Fp(e="light"){return e==="dark"?{main:jt[400],light:jt[300],dark:jt[700]}:{main:jt[800],light:jt[500],dark:jt[900]}}function Ap(e="light"){return e==="dark"?{main:nn[400],light:nn[300],dark:nn[700]}:{main:"#ed6c02",light:nn[500],dark:nn[900]}}function Dp(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=fe(e,Np),i=e.primary||$p(t),s=e.secondary||Mp(t),a=e.error||Ip(t),u=e.info||jp(t),c=e.success||Fp(t),d=e.warning||Ap(t);function g(m){const v=ji(m,kr.text.primary)>=n?kr.text.primary:Fi.text.primary;if(process.env.NODE_ENV!=="production"){const w=ji(m,v);w<3&&console.error([`MUI: The contrast ratio of ${w}:1 for ${v} on ${m}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return v}const p=({color:m,name:v,mainShade:w=500,lightShade:k=300,darkShade:x=700})=>{if(m=E({},m),!m.main&&m[w]&&(m.main=m[w]),!m.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${v?` (${v})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.`:Lt(11,v?` (${v})`:"",w));if(typeof m.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${v?` (${v})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Lt(12,v?` (${v})`:"",JSON.stringify(m.main)));return Ai(m,"light",k,r),Ai(m,"dark",x,r),m.contrastText||(m.contrastText=g(m.main)),m},f={dark:kr,light:Fi};return process.env.NODE_ENV!=="production"&&(f[t]||console.error(`MUI: The palette mode \`${t}\` is not supported.`)),rt(E({common:E({},xn),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:a,name:"error"}),warning:p({color:d,name:"warning"}),info:p({color:u,name:"info"}),success:p({color:c,name:"success"}),grey:Ep,contrastThreshold:n,getContrastText:g,augmentColor:p,tonalOffset:r},f[t]),o)}const Vp=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Lp(e){return Math.round(e*1e5)/1e5}const Di={textTransform:"uppercase"},Vi='"Roboto", "Helvetica", "Arial", sans-serif';function Bp(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Vi,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:u=700,htmlFontSize:c=16,allVariants:d,pxToRem:g}=n,p=fe(n,Vp);process.env.NODE_ENV!=="production"&&(typeof o!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof c!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const f=o/14,h=g||(w=>`${w/c*f}rem`),m=(w,k,x,S,y)=>E({fontFamily:r,fontWeight:w,fontSize:h(k),lineHeight:x},r===Vi?{letterSpacing:`${Lp(S/k)}em`}:{},y,d),v={h1:m(i,96,1.167,-1.5),h2:m(i,60,1.2,-.5),h3:m(s,48,1.167,0),h4:m(s,34,1.235,.25),h5:m(s,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(s,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(s,16,1.5,.15),body2:m(s,14,1.43,.15),button:m(a,14,1.75,.4,Di),caption:m(s,12,1.66,.4),overline:m(s,12,2.66,1,Di),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return rt(E({htmlFontSize:c,pxToRem:h,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:u},v),p,{clone:!1})}const zp=.2,Hp=.14,Gp=.12;function he(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zp})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Hp})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gp})`].join(",")}const Up=["none",he(0,2,1,-1,0,1,1,0,0,1,3,0),he(0,3,1,-2,0,2,2,0,0,1,5,0),he(0,3,3,-2,0,3,4,0,0,1,8,0),he(0,2,4,-1,0,4,5,0,0,1,10,0),he(0,3,5,-1,0,5,8,0,0,1,14,0),he(0,3,5,-1,0,6,10,0,0,1,18,0),he(0,4,5,-2,0,7,10,1,0,2,16,1),he(0,5,5,-3,0,8,10,1,0,3,14,2),he(0,5,6,-3,0,9,12,1,0,3,16,2),he(0,6,6,-3,0,10,14,1,0,4,18,3),he(0,6,7,-4,0,11,15,1,0,4,20,3),he(0,7,8,-4,0,12,17,2,0,5,22,4),he(0,7,8,-4,0,13,19,2,0,5,24,4),he(0,7,9,-4,0,14,21,2,0,5,26,4),he(0,8,9,-5,0,15,22,2,0,6,28,5),he(0,8,10,-5,0,16,24,2,0,6,30,5),he(0,8,11,-5,0,17,26,2,0,6,32,5),he(0,9,11,-5,0,18,28,2,0,7,34,6),he(0,9,12,-6,0,19,29,2,0,7,36,6),he(0,10,13,-6,0,20,31,3,0,8,38,7),he(0,10,13,-6,0,21,33,3,0,8,40,7),he(0,10,14,-6,0,22,35,3,0,8,42,7),he(0,11,14,-7,0,23,36,3,0,9,44,8),he(0,11,15,-7,0,24,38,3,0,9,46,8)],qp=Up,Wp=["duration","easing","delay"],Xp={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Kp={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Li(e){return`${Math.round(e)}ms`}function Yp(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Jp(e){const t=E({},Xp,e.easing),n=E({},Kp,e.duration);return E({getAutoHeightDuration:Yp,create:(o=["all"],i={})=>{const{duration:s=n.standard,easing:a=t.easeInOut,delay:u=0}=i,c=fe(i,Wp);if(process.env.NODE_ENV!=="production"){const d=p=>typeof p=="string",g=p=>!isNaN(parseFloat(p));!d(o)&&!Array.isArray(o)&&console.error('MUI: Argument "props" must be a string or Array.'),!g(s)&&!d(s)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`),d(a)||console.error('MUI: Argument "easing" must be a string.'),!g(u)&&!d(u)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof i!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(c).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`)}return(Array.isArray(o)?o:[o]).map(d=>`${d} ${typeof s=="string"?s:Li(s)} ${a} ${typeof u=="string"?u:Li(u)}`).join(",")}},e,{easing:t,duration:n})}const Zp={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Qp=Zp,ef=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function tf(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,s=fe(e,ef);if(e.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Lt(18));const a=Dp(r),u=Ro(e);let c=rt(u,{mixins:xp(u.breakpoints,n),palette:a,shadows:qp.slice(),typography:Bp(a,i),transitions:Jp(o),zIndex:E({},Qp)});if(c=rt(c,s),c=t.reduce((d,g)=>rt(d,g),c),process.env.NODE_ENV!=="production"){const d=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],g=(p,f)=>{let h;for(h in p){const m=p[h];if(d.indexOf(h)!==-1&&Object.keys(m).length>0){if(process.env.NODE_ENV!=="production"){const v=Ze("",h);console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${h}\` internal state.`,"You can not override it like this: ",JSON.stringify(p,null,2),"",`Instead, you need to use the '&.${v}' syntax:`,JSON.stringify({root:{[`&.${v}`]:m}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}p[h]={}}}};Object.keys(c.components).forEach(p=>{const f=c.components[p].styleOverrides;f&&p.indexOf("Mui")===0&&g(f,p)})}return c.unstable_sxConfig=E({},Co,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(g){return Eo({sx:g,theme:this})},c}const nf=tf(),Po=nf,ko="$$material",Ys=e=>Bn(e)&&e!=="classes",rf=gp({themeId:ko,defaultTheme:Po,rootShouldForwardProp:Ys}),Oe=rf;function kn(){const e=Ks(Po);return process.env.NODE_ENV!=="production"&&C.useDebugValue(e),e[ko]||e}function lt({props:e,name:t}){return hp({props:e,name:t,defaultTheme:Po,themeId:ko})}function Kr(e,t){return Kr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Kr(e,t)}function of(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Kr(e,t)}const Bi={disabled:!1};var sf=process.env.NODE_ENV!=="production"?l.oneOfType([l.number,l.shape({enter:l.number,exit:l.number,appear:l.number}).isRequired]):null;process.env.NODE_ENV!=="production"&&l.oneOfType([l.string,l.shape({enter:l.string,exit:l.string,active:l.string}),l.shape({enter:l.string,enterDone:l.string,enterActive:l.string,exit:l.string,exitDone:l.string,exitActive:l.string})]);const Js=H.createContext(null);var af=function(t){return t.scrollTop},cn="unmounted",wt="exited",xt="entering",Dt="entered",Yr="exiting",ut=function(e){of(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,a=s&&!s.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?a?(u=wt,i.appearStatus=xt):u=Dt:r.unmountOnExit||r.mountOnEnter?u=cn:u=wt,i.state={status:u},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===cn?{status:wt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==xt&&s!==Dt&&(i=xt):(s===xt||s===Dt)&&(i=Yr)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===xt){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:an.findDOMNode(this);s&&af(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===wt&&this.setState({status:cn})},n.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,u=this.props.nodeRef?[a]:[an.findDOMNode(this),a],c=u[0],d=u[1],g=this.getTimeouts(),p=a?g.appear:g.enter;if(!o&&!s||Bi.disabled){this.safeSetState({status:Dt},function(){i.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:xt},function(){i.props.onEntering(c,d),i.onTransitionEnd(p,function(){i.safeSetState({status:Dt},function(){i.props.onEntered(c,d)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:an.findDOMNode(this);if(!i||Bi.disabled){this.safeSetState({status:wt},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Yr},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:wt},function(){o.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:an.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===cn)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=fe(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return H.createElement(Js.Provider,{value:null},typeof s=="function"?s(o,a):H.cloneElement(H.Children.only(s),a))},t}(H.Component);ut.contextType=Js;ut.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:l.shape({current:typeof Element>"u"?l.any:function(e,t,n,r,o,i){var s=e[t];return l.instanceOf(s&&"ownerDocument"in s?s.ownerDocument.defaultView.Element:Element)(e,t,n,r,o,i)}}),children:l.oneOfType([l.func.isRequired,l.element.isRequired]).isRequired,in:l.bool,mountOnEnter:l.bool,unmountOnExit:l.bool,appear:l.bool,enter:l.bool,exit:l.bool,timeout:function(t){var n=sf;t.addEndListener||(n=n.isRequired);for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return n.apply(void 0,[t].concat(o))},addEndListener:l.func,onEnter:l.func,onEntering:l.func,onEntered:l.func,onExit:l.func,onExiting:l.func,onExited:l.func}:{};function Ft(){}ut.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ft,onEntering:Ft,onEntered:Ft,onExit:Ft,onExiting:Ft,onExited:Ft};ut.UNMOUNTED=cn;ut.EXITED=wt;ut.ENTERING=xt;ut.ENTERED=Dt;ut.EXITING=Yr;const Zs=ut,Qs=e=>e.scrollTop;function Zn(e,t){var n,r;const{timeout:o,easing:i,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:s.transitionDelay}}const lf=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Jr(e){return`scale(${e}, ${e**2})`}const uf={entering:{opacity:1,transform:Jr(1)},entered:{opacity:1,transform:"none"}},Or=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Oo=C.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:s,in:a,onEnter:u,onEntered:c,onEntering:d,onExit:g,onExited:p,onExiting:f,style:h,timeout:m="auto",TransitionComponent:v=Zs}=t,w=fe(t,lf),k=ln(),x=C.useRef(),S=kn(),y=C.useRef(null),T=Ge(y,i.ref,n),O=F=>M=>{if(F){const B=y.current;M===void 0?F(B):F(B,M)}},A=O(d),D=O((F,M)=>{Qs(F);const{duration:B,delay:ne,easing:te}=Zn({style:h,timeout:m,easing:s},{mode:"enter"});let R;m==="auto"?(R=S.transitions.getAutoHeightDuration(F.clientHeight),x.current=R):R=B,F.style.transition=[S.transitions.create("opacity",{duration:R,delay:ne}),S.transitions.create("transform",{duration:Or?R:R*.666,delay:ne,easing:te})].join(","),u&&u(F,M)}),L=O(c),P=O(f),$=O(F=>{const{duration:M,delay:B,easing:ne}=Zn({style:h,timeout:m,easing:s},{mode:"exit"});let te;m==="auto"?(te=S.transitions.getAutoHeightDuration(F.clientHeight),x.current=te):te=M,F.style.transition=[S.transitions.create("opacity",{duration:te,delay:B}),S.transitions.create("transform",{duration:Or?te:te*.666,delay:Or?B:B||te*.333,easing:ne})].join(","),F.style.opacity=0,F.style.transform=Jr(.75),g&&g(F)}),N=O(p),V=F=>{m==="auto"&&k.start(x.current||0,F),r&&r(y.current,F)};return b.jsx(v,E({appear:o,in:a,nodeRef:y,onEnter:D,onEntered:L,onEntering:A,onExit:$,onExited:N,onExiting:P,addEndListener:V,timeout:m==="auto"?null:m},w,{children:(F,M)=>C.cloneElement(i,E({style:E({opacity:0,transform:Jr(.75),visibility:F==="exited"&&!a?"hidden":void 0},uf[F],h,i.props.style),ref:T},M))}))});process.env.NODE_ENV!=="production"&&(Oo.propTypes={addEndListener:l.func,appear:l.bool,children:Sn.isRequired,easing:l.oneOfType([l.shape({enter:l.string,exit:l.string}),l.string]),in:l.bool,onEnter:l.func,onEntered:l.func,onEntering:l.func,onExit:l.func,onExited:l.func,onExiting:l.func,style:l.object,timeout:l.oneOfType([l.oneOf(["auto"]),l.number,l.shape({appear:l.number,enter:l.number,exit:l.number})])});Oo.muiSupportAuto=!0;const Zr=Oo,cf=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},zi=cf,df=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],pf=Oe(Gs,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ea=C.forwardRef(function(t,n){var r;const o=Xs(),i=lt({props:t,name:"MuiPopper"}),{anchorEl:s,component:a,components:u,componentsProps:c,container:d,disablePortal:g,keepMounted:p,modifiers:f,open:h,placement:m,popperOptions:v,popperRef:w,transition:k,slots:x,slotProps:S}=i,y=fe(i,df),T=(r=x==null?void 0:x.root)!=null?r:u==null?void 0:u.Root,O=E({anchorEl:s,container:d,disablePortal:g,keepMounted:p,modifiers:f,open:h,placement:m,popperOptions:v,popperRef:w,transition:k},y);return b.jsx(pf,E({as:a,direction:o==null?void 0:o.direction,slots:{root:T},slotProps:S??c},O,{ref:n}))});process.env.NODE_ENV!=="production"&&(ea.propTypes={anchorEl:l.oneOfType([ot,l.object,l.func]),children:l.oneOfType([l.node,l.func]),component:l.elementType,components:l.shape({Root:l.elementType}),componentsProps:l.shape({root:l.oneOfType([l.func,l.object])}),container:l.oneOfType([ot,l.func]),disablePortal:l.bool,keepMounted:l.bool,modifiers:l.arrayOf(l.shape({data:l.object,effect:l.func,enabled:l.bool,fn:l.func,name:l.any,options:l.object,phase:l.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:l.arrayOf(l.string),requiresIfExists:l.arrayOf(l.string)})),open:l.bool.isRequired,placement:l.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:l.shape({modifiers:l.array,onFirstUpdate:l.func,placement:l.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:l.oneOf(["absolute","fixed"])}),popperRef:fo,slotProps:l.shape({root:l.oneOfType([l.func,l.object])}),slots:l.shape({root:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),transition:l.bool});const ta=ea;function ff(e){return Ze("MuiTooltip",e)}const gf=mt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),dt=gf,mf=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function hf(e){return Math.round(e*1e5)/1e5}const vf=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:i}=e,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${Ye(i.split("-")[0])}`],arrow:["arrow"]};return at(s,ff,t)},bf=Oe(ta,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>E({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${dt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${dt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${dt.arrow}`]:E({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${dt.arrow}`]:E({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),yf=Oe("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${Ye(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>E({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Jn(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${hf(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${dt.popper}[data-popper-placement*="left"] &`]:E({transformOrigin:"right center"},t.isRtl?E({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):E({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${dt.popper}[data-popper-placement*="right"] &`]:E({transformOrigin:"left center"},t.isRtl?E({marginRight:"14px"},t.touch&&{marginRight:"24px"}):E({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${dt.popper}[data-popper-placement*="top"] &`]:E({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${dt.popper}[data-popper-placement*="bottom"] &`]:E({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),wf=Oe("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Jn(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let jn=!1;const Hi=new Cn;let rn={x:0,y:0};function Fn(e,t){return n=>{t&&t(n),e(n)}}const na=C.forwardRef(function(t,n){var r,o,i,s,a,u,c,d,g,p,f,h,m,v,w,k,x,S,y;const T=lt({props:t,name:"MuiTooltip"}),{arrow:O=!1,children:A,components:D={},componentsProps:L={},describeChild:P=!1,disableFocusListener:$=!1,disableHoverListener:N=!1,disableInteractive:V=!1,disableTouchListener:F=!1,enterDelay:M=100,enterNextDelay:B=0,enterTouchDelay:ne=700,followCursor:te=!1,id:R,leaveDelay:j=0,leaveTouchDelay:G=1500,onClose:K,onOpen:z,open:U,placement:W="bottom",PopperComponent:X,PopperProps:q={},slotProps:Y={},slots:Q={},title:ie,TransitionComponent:I=Zr,TransitionProps:ee}=T,_=fe(T,mf),se=C.isValidElement(A)?A:b.jsx("span",{children:A}),Ce=kn(),_e=Ce.direction==="rtl",[ye,bt]=C.useState(),[Ne,Qe]=C.useState(null),je=C.useRef(!1),et=V||te,Ee=ln(),_t=ln(),yt=ln(),Xt=ln(),[On,Vo]=xs({controlled:U,default:!1,name:"Tooltip",state:"open"});let tt=On;if(process.env.NODE_ENV!=="production"){const{current:re}=C.useRef(U!==void 0);C.useEffect(()=>{ye&&ye.disabled&&!re&&ie!==""&&ye.tagName.toLowerCase()==="button"&&console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.","A disabled element does not fire events.","Tooltip needs to listen to the child element's events to display the title.","","Add a simple wrapper element, such as a `span`."].join(`
`))},[ie,ye,re])}const mr=ws(R),Kt=C.useRef(),_n=vn(()=>{Kt.current!==void 0&&(document.body.style.WebkitUserSelect=Kt.current,Kt.current=void 0),Xt.clear()});C.useEffect(()=>_n,[_n]);const Lo=re=>{Hi.clear(),jn=!0,Vo(!0),z&&!tt&&z(re)},Nn=vn(re=>{Hi.start(800+j,()=>{jn=!1}),Vo(!1),K&&tt&&K(re),Ee.start(Ce.transitions.duration.shortest,()=>{je.current=!1})}),hr=re=>{je.current&&re.type!=="touchstart"||(ye&&ye.removeAttribute("title"),_t.clear(),yt.clear(),M||jn&&B?_t.start(jn?B:M,()=>{Lo(re)}):Lo(re))},Bo=re=>{_t.clear(),yt.start(j,()=>{Nn(re)})},{isFocusVisibleRef:zo,onBlur:Da,onFocus:Va,ref:La}=Ss(),[,Ho]=C.useState(!1),Go=re=>{Da(re),zo.current===!1&&(Ho(!1),Bo(re))},Uo=re=>{ye||bt(re.currentTarget),Va(re),zo.current===!0&&(Ho(!0),hr(re))},qo=re=>{je.current=!0;const Fe=se.props;Fe.onTouchStart&&Fe.onTouchStart(re)},Wo=hr,Xo=Bo,Ba=re=>{qo(re),yt.clear(),Ee.clear(),_n(),Kt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Xt.start(ne,()=>{document.body.style.WebkitUserSelect=Kt.current,hr(re)})},za=re=>{se.props.onTouchEnd&&se.props.onTouchEnd(re),_n(),yt.start(G,()=>{Nn(re)})};C.useEffect(()=>{if(!tt)return;function re(Fe){(Fe.key==="Escape"||Fe.key==="Esc")&&Nn(Fe)}return document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)}},[Nn,tt]);const Ha=Ge(se.ref,La,bt,n);!ie&&ie!==0&&(tt=!1);const vr=C.useRef(),Ga=re=>{const Fe=se.props;Fe.onMouseMove&&Fe.onMouseMove(re),rn={x:re.clientX,y:re.clientY},vr.current&&vr.current.update()},Yt={},br=typeof ie=="string";P?(Yt.title=!tt&&br&&!N?ie:null,Yt["aria-describedby"]=tt?mr:null):(Yt["aria-label"]=br?ie:null,Yt["aria-labelledby"]=tt&&!br?mr:null);const Be=E({},Yt,_,se.props,{className:Pe(_.className,se.props.className),onTouchStart:qo,ref:Ha},te?{onMouseMove:Ga}:{});process.env.NODE_ENV!=="production"&&(Be["data-mui-internal-clone-element"]=!0,C.useEffect(()=>{ye&&!ye.getAttribute("data-mui-internal-clone-element")&&console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.","Please make sure that props are spread on the same element that the ref is applied to."].join(`
`))},[ye]));const Jt={};F||(Be.onTouchStart=Ba,Be.onTouchEnd=za),N||(Be.onMouseOver=Fn(Wo,Be.onMouseOver),Be.onMouseLeave=Fn(Xo,Be.onMouseLeave),et||(Jt.onMouseOver=Wo,Jt.onMouseLeave=Xo)),$||(Be.onFocus=Fn(Uo,Be.onFocus),Be.onBlur=Fn(Go,Be.onBlur),et||(Jt.onFocus=Uo,Jt.onBlur=Go)),process.env.NODE_ENV!=="production"&&se.props.title&&console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.",`Remove this title prop \`${se.props.title}\` or the Tooltip component.`].join(`
`));const Ua=C.useMemo(()=>{var re;let Fe=[{name:"arrow",enabled:!!Ne,options:{element:Ne,padding:4}}];return(re=q.popperOptions)!=null&&re.modifiers&&(Fe=Fe.concat(q.popperOptions.modifiers)),E({},q.popperOptions,{modifiers:Fe})},[Ne,q]),Zt=E({},T,{isRtl:_e,arrow:O,disableInteractive:et,placement:W,PopperComponentProp:X,touch:je.current}),yr=vf(Zt),Ko=(r=(o=Q.popper)!=null?o:D.Popper)!=null?r:bf,Yo=(i=(s=(a=Q.transition)!=null?a:D.Transition)!=null?s:I)!=null?i:Zr,Jo=(u=(c=Q.tooltip)!=null?c:D.Tooltip)!=null?u:yf,Zo=(d=(g=Q.arrow)!=null?g:D.Arrow)!=null?d:wf,qa=un(Ko,E({},q,(p=Y.popper)!=null?p:L.popper,{className:Pe(yr.popper,q==null?void 0:q.className,(f=(h=Y.popper)!=null?h:L.popper)==null?void 0:f.className)}),Zt),Wa=un(Yo,E({},ee,(m=Y.transition)!=null?m:L.transition),Zt),Xa=un(Jo,E({},(v=Y.tooltip)!=null?v:L.tooltip,{className:Pe(yr.tooltip,(w=(k=Y.tooltip)!=null?k:L.tooltip)==null?void 0:w.className)}),Zt),Ka=un(Zo,E({},(x=Y.arrow)!=null?x:L.arrow,{className:Pe(yr.arrow,(S=(y=Y.arrow)!=null?y:L.arrow)==null?void 0:S.className)}),Zt);return b.jsxs(C.Fragment,{children:[C.cloneElement(se,Be),b.jsx(Ko,E({as:X??ta,placement:W,anchorEl:te?{getBoundingClientRect:()=>({top:rn.y,left:rn.x,right:rn.x,bottom:rn.y,width:0,height:0})}:ye,popperRef:vr,open:ye?tt:!1,id:mr,transition:!0},Jt,qa,{popperOptions:Ua,children:({TransitionProps:re})=>b.jsx(Yo,E({timeout:Ce.transitions.duration.shorter},re,Wa,{children:b.jsxs(Jo,E({},Xa,{children:[ie,O?b.jsx(Zo,E({},Ka,{ref:Qe})):null]}))}))}))]})});process.env.NODE_ENV!=="production"&&(na.propTypes={arrow:l.bool,children:Sn.isRequired,classes:l.object,className:l.string,components:l.shape({Arrow:l.elementType,Popper:l.elementType,Tooltip:l.elementType,Transition:l.elementType}),componentsProps:l.shape({arrow:l.object,popper:l.object,tooltip:l.object,transition:l.object}),describeChild:l.bool,disableFocusListener:l.bool,disableHoverListener:l.bool,disableInteractive:l.bool,disableTouchListener:l.bool,enterDelay:l.number,enterNextDelay:l.number,enterTouchDelay:l.number,followCursor:l.bool,id:l.string,leaveDelay:l.number,leaveTouchDelay:l.number,onClose:l.func,onOpen:l.func,open:l.bool,placement:l.oneOf(["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),PopperComponent:l.elementType,PopperProps:l.object,slotProps:l.shape({arrow:l.object,popper:l.object,tooltip:l.object,transition:l.object}),slots:l.shape({arrow:l.elementType,popper:l.elementType,tooltip:l.elementType,transition:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),title:l.node,TransitionComponent:l.elementType,TransitionProps:l.object});const xf=na;var _o={},ra={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ra);var Sf=ra.exports,_r={};function Cf(e){return Ze("MuiSvgIcon",e)}mt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ef=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Rf=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${Ye(t)}`,`fontSize${Ye(n)}`]};return at(o,Cf,r)},Tf=Oe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ye(n.color)}`],t[`fontSize${Ye(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,s,a,u,c,d,g,p,f,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,20))||"1.25rem",medium:((a=e.typography)==null||(u=a.pxToRem)==null?void 0:u.call(a,24))||"1.5rem",large:((c=e.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}[t.fontSize],color:(g=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?g:{action:(f=(e.vars||e).palette)==null||(f=f.action)==null?void 0:f.active,disabled:(h=(e.vars||e).palette)==null||(h=h.action)==null?void 0:h.disabled,inherit:void 0}[t.color]}}),No=C.forwardRef(function(t,n){const r=lt({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:s="inherit",component:a="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:g,viewBox:p="0 0 24 24"}=r,f=fe(r,Ef),h=C.isValidElement(o)&&o.type==="svg",m=E({},r,{color:s,component:a,fontSize:u,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:p,hasSvgAsChild:h}),v={};d||(v.viewBox=p);const w=Rf(m);return b.jsxs(Tf,E({as:a,className:Pe(w.root,i),focusable:"false",color:c,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:n},v,f,h&&o.props,{ownerState:m,children:[h?o.props.children:o,g?b.jsx("title",{children:g}):null]}))});process.env.NODE_ENV!=="production"&&(No.propTypes={children:l.node,classes:l.object,className:l.string,color:l.oneOfType([l.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),l.string]),component:l.elementType,fontSize:l.oneOfType([l.oneOf(["inherit","large","medium","small"]),l.string]),htmlColor:l.string,inheritViewBox:l.bool,shapeRendering:l.string,sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),titleAccess:l.string,viewBox:l.string});No.muiName="SvgIcon";const Gi=No;function oa(e,t){function n(r,o){return b.jsx(Gi,E({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return process.env.NODE_ENV!=="production"&&(n.displayName=`${t}Icon`),n.muiName=Gi.muiName,C.memo(C.forwardRef(n))}const Pf={configure:e=>{process.env.NODE_ENV!=="production"&&console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),ks.configure(e)}},kf=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ye,createChainedFunction:Gr,createSvgIcon:oa,debounce:ys,deprecatedPropType:eu,isMuiElement:tu,ownerDocument:ke,ownerWindow:Bt,requirePropFactory:nu,setRef:qn,unstable_ClassNameGenerator:Pf,unstable_useEnhancedEffect:Tt,unstable_useId:ws,unsupportedProp:iu,useControlled:xs,useEventCallback:vn,useForkRef:Ge,useIsFocusVisible:Ss},Symbol.toStringTag,{value:"Module"})),Of=Ml(kf);var Ui;function _f(){return Ui||(Ui=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Of}(_r)),_r}var Nf=Sf;Object.defineProperty(_o,"__esModule",{value:!0});var ia=_o.default=void 0,$f=Nf(_f()),Mf=b;ia=_o.default=(0,$f.default)((0,Mf.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");function qi(e,t,n){return e?b.jsx(me.ListItemIcon,{className:`papi-menu-icon-${n?"leading":"trailing"}`,children:b.jsx("img",{src:e,alt:`${n?"Leading":"Trailing"} icon for ${t}`})}):void 0}function $o(e){const{onClick:t,label:n,tooltip:r,allowForLeadingIcons:o=!0,iconPathBefore:i=void 0,iconPathAfter:s=void 0,hasAutoFocus:a=!1,className:u,isDisabled:c=!1,isDense:d=!0,isSubMenuParent:g=!1,hasDisabledGutters:p=!1,hasDivider:f=!1,focusVisibleClassName:h,id:m,children:v}=e,w=b.jsx(me.MenuItem,{sx:{lineHeight:.8},autoFocus:a,className:u,disabled:c,dense:d,disableGutters:p,divider:f,focusVisibleClassName:h,onClick:t,id:m,children:n?b.jsxs(b.Fragment,{children:[qi(i,n,!0),b.jsx(me.ListItemText,{primary:n,inset:!i&&o}),g?b.jsx(me.ListItemIcon,{className:"papi-menu-icon-trailing",children:b.jsx(ia,{})}):qi(s,n,!1)]}):v});return r?b.jsx(xf,{title:r,placement:"right",children:b.jsx("div",{children:w})}):w}function sa(e){return Object.entries(e.groups).map(([n,r])=>({id:n,group:r}))}function If(e){const[t,n]=H.useState(void 0),{parentMenuItem:r,parentItemProps:o,menuDefinition:i}=e,s=c=>{n(c.currentTarget)},a=()=>{n(void 0)},u=()=>{let c=sa(i).filter(d=>"menuItem"in d.group);if(!(r!=null&&r.id))throw new Error("A valid parent menu item is required for submenus.");return c=c.filter(d=>"menuItem"in d.group&&d.group.menuItem===r.id),b.jsx(Mo,{...e,includedGroups:c})};return b.jsxs(b.Fragment,{children:[b.jsx($o,{onClick:s,...o,isSubMenuParent:!0}),b.jsx(me.Menu,{anchorEl:t,open:!!t,onClose:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:u()},r.id)]})}const jf=(e,t)=>t.filter(o=>o.group===e).sort((o,i)=>(o.order||0)-(i.order||0));function Mo(e){const{menuDefinition:t,onClick:n,commandHandler:r,includedGroups:o}=e,{items:i,allowForLeadingIcons:s}=H.useMemo(()=>{const d=o&&o.length>0?o:sa(t).filter(h=>!("menuItem"in h.group)),g=Object.values(d).sort((h,m)=>(h.group.order||0)-(m.group.order||0)),p=[];g.forEach(h=>{jf(h.id,t.items).forEach(m=>p.push({item:m,isLastItemInGroup:!1})),p.length>0&&(p[p.length-1].isLastItemInGroup=!0)}),p.length>0&&(p[p.length-1].isLastItemInGroup=!1);const f=p.some(h=>"iconPathBefore"in h.item&&h.item.iconPathBefore);return{items:p,allowForLeadingIcons:f}},[o,t]),a=({item:d,isLastItemInGroup:g})=>({className:"papi-menu-item",label:d.label,tooltip:d.tooltip,iconPathBefore:"iconPathBefore"in d?d.iconPathBefore:void 0,iconPathAfter:"iconPathAfter"in d?d.iconPathAfter:void 0,hasDivider:g,allowForLeadingIcons:s}),[u]=i;if(!u)return b.jsx("div",{});const c=u.item.group;return b.jsx("div",{role:"menu","aria-label":c,children:i.map((d,g)=>{const{item:p}=d,f=a(d);if("command"in p){const h=p.group+g;return b.jsx($o,{onClick:m=>{n==null||n(m),r(p)},...f},h)}return b.jsx(If,{parentMenuItem:p,parentItemProps:f,...e},c+p.id)})},c)}function Ff(e){const{menuDefinition:t,columnId:n}=e;let i=Object.entries(t.groups).map(([s,a])=>({id:s,group:a})).filter(s=>"column"in s.group);return n&&"columns"in t&&t.columns[n]&&(i=i.filter(s=>"column"in s.group&&s.group.column===n)),b.jsx(Mo,{...e,includedGroups:i})}function Af({commandHandler:e,menuDefinition:t,id:n,metadata:r,onClick:o,className:i}){return b.jsxs(me.Grid,{id:n,item:!0,xs:"auto",role:"menu","aria-label":n,className:`papi-menu-column ${i??""}`,children:[b.jsx("h3",{"aria-label":r.label,className:`papi-menu-column-header ${i??""}`,children:r.label}),b.jsx(me.List,{id:n,dense:!0,className:i??"",children:b.jsx(Ff,{commandHandler:e,menuDefinition:t,columnId:n,onClick:o})})]})}function aa({commandHandler:e,className:t,multiColumnMenu:n,id:r}){const{columns:o}=n,i=H.useMemo(()=>{const s=new Map;return Object.getOwnPropertyNames(o).forEach(a=>{if(a==="isExtensible")return;const u=a,c=o[u];typeof c=="object"&&typeof c.order=="number"&&!Number.isNaN(c.order)?s.set(c.order,{id:u,metadata:c}):console.warn(`Property ${a} (${typeof c}) on menu ${r} is not a valid column and is being ignored. This might indicate data corruption`)}),Array.from(s.values()).sort((a,u)=>(a.metadata.order||0)-(u.metadata.order||0))},[o,r]);return b.jsx(me.Grid,{container:!0,spacing:0,className:`papi-multi-column-menu ${t??""}`,columns:i.length,role:"menu","aria-label":"GridMenu",id:r,children:i.map((s,a)=>b.jsx(Af,{commandHandler:e,menuDefinition:n,...s,className:t},a))})}const la=C.createContext({});process.env.NODE_ENV!=="production"&&(la.displayName="ListContext");const Df=la;function Vf(e){return Ze("MuiList",e)}mt("MuiList",["root","padding","dense","subheader"]);const Lf=["children","className","component","dense","disablePadding","subheader"],Bf=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return at({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},Vf,t)},zf=Oe("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>E({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),ua=C.forwardRef(function(t,n){const r=lt({props:t,name:"MuiList"}),{children:o,className:i,component:s="ul",dense:a=!1,disablePadding:u=!1,subheader:c}=r,d=fe(r,Lf),g=C.useMemo(()=>({dense:a}),[a]),p=E({},r,{component:s,dense:a,disablePadding:u}),f=Bf(p);return b.jsx(Df.Provider,{value:g,children:b.jsxs(zf,E({as:s,className:Pe(f.root,i),ref:n,ownerState:p},d,{children:[c,o]}))})});process.env.NODE_ENV!=="production"&&(ua.propTypes={children:l.node,classes:l.object,className:l.string,component:l.elementType,dense:l.bool,disablePadding:l.bool,subheader:l.node,sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object])});const Hf=ua,Gf=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Nr(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Wi(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function ca(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function on(e,t,n,r,o,i){let s=!1,a=o(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const u=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!ca(a,i)||u)a=o(e,a,n);else return a.focus(),!0}return!1}const da=C.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:s,className:a,disabledItemsFocusable:u=!1,disableListWrap:c=!1,onKeyDown:d,variant:g="selectedMenu"}=t,p=fe(t,Gf),f=C.useRef(null),h=C.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Tt(()=>{o&&f.current.focus()},[o]),C.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(x,S)=>{const y=!f.current.style.width;if(x.clientHeight<f.current.clientHeight&&y){const T=`${Cs(ke(x))}px`;f.current.style[S.direction==="rtl"?"paddingLeft":"paddingRight"]=T,f.current.style.width=`calc(100% + ${T})`}return f.current}}),[]);const m=x=>{const S=f.current,y=x.key,T=ke(S).activeElement;if(y==="ArrowDown")x.preventDefault(),on(S,T,c,u,Nr);else if(y==="ArrowUp")x.preventDefault(),on(S,T,c,u,Wi);else if(y==="Home")x.preventDefault(),on(S,null,c,u,Nr);else if(y==="End")x.preventDefault(),on(S,null,c,u,Wi);else if(y.length===1){const O=h.current,A=y.toLowerCase(),D=performance.now();O.keys.length>0&&(D-O.lastTime>500?(O.keys=[],O.repeating=!0,O.previousKeyMatched=!0):O.repeating&&A!==O.keys[0]&&(O.repeating=!1)),O.lastTime=D,O.keys.push(A);const L=T&&!O.repeating&&ca(T,O);O.previousKeyMatched&&(L||on(S,T,!1,u,Nr,O))?x.preventDefault():O.previousKeyMatched=!1}d&&d(x)},v=Ge(f,n);let w=-1;C.Children.forEach(s,(x,S)=>{if(!C.isValidElement(x)){w===S&&(w+=1,w>=s.length&&(w=-1));return}process.env.NODE_ENV!=="production"&&Un.isFragment(x)&&console.error(["MUI: The Menu component doesn't accept a Fragment as a child.","Consider providing an array instead."].join(`
`)),x.props.disabled||(g==="selectedMenu"&&x.props.selected||w===-1)&&(w=S),w===S&&(x.props.disabled||x.props.muiSkipListHighlight||x.type.muiSkipListHighlight)&&(w+=1,w>=s.length&&(w=-1))});const k=C.Children.map(s,(x,S)=>{if(S===w){const y={};return i&&(y.autoFocus=!0),x.props.tabIndex===void 0&&g==="selectedMenu"&&(y.tabIndex=0),C.cloneElement(x,y)}return x});return b.jsx(Hf,E({role:"menu",ref:v,className:a,onKeyDown:m,tabIndex:o?0:-1},p,{children:k}))});process.env.NODE_ENV!=="production"&&(da.propTypes={autoFocus:l.bool,autoFocusItem:l.bool,children:l.node,className:l.string,disabledItemsFocusable:l.bool,disableListWrap:l.bool,onKeyDown:l.func,variant:l.oneOf(["menu","selectedMenu"])});const Uf=da,qf=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Wf={entering:{opacity:1},entered:{opacity:1}},pa=C.forwardRef(function(t,n){const r=kn(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:s=!0,children:a,easing:u,in:c,onEnter:d,onEntered:g,onEntering:p,onExit:f,onExited:h,onExiting:m,style:v,timeout:w=o,TransitionComponent:k=Zs}=t,x=fe(t,qf),S=C.useRef(null),y=Ge(S,a.ref,n),T=V=>F=>{if(V){const M=S.current;F===void 0?V(M):V(M,F)}},O=T(p),A=T((V,F)=>{Qs(V);const M=Zn({style:v,timeout:w,easing:u},{mode:"enter"});V.style.webkitTransition=r.transitions.create("opacity",M),V.style.transition=r.transitions.create("opacity",M),d&&d(V,F)}),D=T(g),L=T(m),P=T(V=>{const F=Zn({style:v,timeout:w,easing:u},{mode:"exit"});V.style.webkitTransition=r.transitions.create("opacity",F),V.style.transition=r.transitions.create("opacity",F),f&&f(V)}),$=T(h),N=V=>{i&&i(S.current,V)};return b.jsx(k,E({appear:s,in:c,nodeRef:S,onEnter:A,onEntered:D,onEntering:O,onExit:P,onExited:$,onExiting:L,addEndListener:N,timeout:w},x,{children:(V,F)=>C.cloneElement(a,E({style:E({opacity:0,visibility:V==="exited"&&!c?"hidden":void 0},Wf[V],v,a.props.style),ref:y},F))}))});process.env.NODE_ENV!=="production"&&(pa.propTypes={addEndListener:l.func,appear:l.bool,children:Sn.isRequired,easing:l.oneOfType([l.shape({enter:l.string,exit:l.string}),l.string]),in:l.bool,onEnter:l.func,onEntered:l.func,onEntering:l.func,onExit:l.func,onExited:l.func,onExiting:l.func,style:l.object,timeout:l.oneOfType([l.number,l.shape({appear:l.number,enter:l.number,exit:l.number})])});const Xf=pa;function Kf(e){return Ze("MuiBackdrop",e)}mt("MuiBackdrop",["root","invisible"]);const Yf=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Jf=e=>{const{classes:t,invisible:n}=e;return at({root:["root",n&&"invisible"]},Kf,t)},Zf=Oe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>E({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),fa=C.forwardRef(function(t,n){var r,o,i;const s=lt({props:t,name:"MuiBackdrop"}),{children:a,className:u,component:c="div",components:d={},componentsProps:g={},invisible:p=!1,open:f,slotProps:h={},slots:m={},TransitionComponent:v=Xf,transitionDuration:w}=s,k=fe(s,Yf),x=E({},s,{component:c,invisible:p}),S=Jf(x),y=(r=h.root)!=null?r:g.root;return b.jsx(v,E({in:f,timeout:w},k,{children:b.jsx(Zf,E({"aria-hidden":!0},y,{as:(o=(i=m.root)!=null?i:d.Root)!=null?o:c,className:Pe(S.root,u,y==null?void 0:y.className),ownerState:E({},x,y==null?void 0:y.ownerState),classes:S,ref:n,children:a}))}))});process.env.NODE_ENV!=="production"&&(fa.propTypes={children:l.node,classes:l.object,className:l.string,component:l.elementType,components:l.shape({Root:l.elementType}),componentsProps:l.shape({root:l.object}),invisible:l.bool,open:l.bool.isRequired,slotProps:l.shape({root:l.object}),slots:l.shape({root:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),TransitionComponent:l.elementType,transitionDuration:l.oneOfType([l.number,l.shape({appear:l.number,enter:l.number,exit:l.number})])});const Qf=fa;function eg(e){return Ze("MuiModal",e)}mt("MuiModal",["root","hidden","backdrop"]);const tg=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ng=e=>{const{open:t,exited:n,classes:r}=e;return at({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},eg,r)},rg=Oe("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>E({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),og=Oe(Qf,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ga=C.forwardRef(function(t,n){var r,o,i,s,a,u;const c=lt({name:"MuiModal",props:t}),{BackdropComponent:d=og,BackdropProps:g,className:p,closeAfterTransition:f=!1,children:h,container:m,component:v,components:w={},componentsProps:k={},disableAutoFocus:x=!1,disableEnforceFocus:S=!1,disableEscapeKeyDown:y=!1,disablePortal:T=!1,disableRestoreFocus:O=!1,disableScrollLock:A=!1,hideBackdrop:D=!1,keepMounted:L=!1,onBackdropClick:P,open:$,slotProps:N,slots:V}=c,F=fe(c,tg),M=E({},c,{closeAfterTransition:f,disableAutoFocus:x,disableEnforceFocus:S,disableEscapeKeyDown:y,disablePortal:T,disableRestoreFocus:O,disableScrollLock:A,hideBackdrop:D,keepMounted:L}),{getRootProps:B,getBackdropProps:ne,getTransitionProps:te,portalRef:R,isTopModal:j,exited:G,hasTransition:K}=qu(E({},M,{rootRef:n})),z=E({},M,{exited:G}),U=ng(z),W={};if(h.props.tabIndex===void 0&&(W.tabIndex="-1"),K){const{onEnter:ee,onExited:_}=te();W.onEnter=ee,W.onExited=_}const X=(r=(o=V==null?void 0:V.root)!=null?o:w.Root)!=null?r:rg,q=(i=(s=V==null?void 0:V.backdrop)!=null?s:w.Backdrop)!=null?i:d,Y=(a=N==null?void 0:N.root)!=null?a:k.root,Q=(u=N==null?void 0:N.backdrop)!=null?u:k.backdrop,ie=Pt({elementType:X,externalSlotProps:Y,externalForwardedProps:F,getSlotProps:B,additionalProps:{ref:n,as:v},ownerState:z,className:Pe(p,Y==null?void 0:Y.className,U==null?void 0:U.root,!z.open&&z.exited&&(U==null?void 0:U.hidden))}),I=Pt({elementType:q,externalSlotProps:Q,additionalProps:g,getSlotProps:ee=>ne(E({},ee,{onClick:_=>{P&&P(_),ee!=null&&ee.onClick&&ee.onClick(_)}})),className:Pe(Q==null?void 0:Q.className,g==null?void 0:g.className,U==null?void 0:U.backdrop),ownerState:z});return!L&&!$&&(!K||G)?null:b.jsx(bn,{ref:R,container:m,disablePortal:T,children:b.jsxs(X,E({},ie,{children:[!D&&d?b.jsx(q,E({},I)):null,b.jsx(Wn,{disableEnforceFocus:S,disableAutoFocus:x,disableRestoreFocus:O,isEnabled:j,open:$,children:C.cloneElement(h,W)})]}))})});process.env.NODE_ENV!=="production"&&(ga.propTypes={BackdropComponent:l.elementType,BackdropProps:l.object,children:Sn.isRequired,classes:l.object,className:l.string,closeAfterTransition:l.bool,component:l.elementType,components:l.shape({Backdrop:l.elementType,Root:l.elementType}),componentsProps:l.shape({backdrop:l.oneOfType([l.func,l.object]),root:l.oneOfType([l.func,l.object])}),container:l.oneOfType([ot,l.func]),disableAutoFocus:l.bool,disableEnforceFocus:l.bool,disableEscapeKeyDown:l.bool,disablePortal:l.bool,disableRestoreFocus:l.bool,disableScrollLock:l.bool,hideBackdrop:l.bool,keepMounted:l.bool,onBackdropClick:l.func,onClose:l.func,onTransitionEnter:l.func,onTransitionExited:l.func,open:l.bool.isRequired,slotProps:l.shape({backdrop:l.oneOfType([l.func,l.object]),root:l.oneOfType([l.func,l.object])}),slots:l.shape({backdrop:l.elementType,root:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object])});const ig=ga;function sg(e){return Ze("MuiPaper",e)}mt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ag=["className","component","elevation","square","variant"],lg=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return at(i,sg,o)},ug=Oe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return E({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&E({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Jn("#fff",zi(t.elevation))}, ${Jn("#fff",zi(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),ma=C.forwardRef(function(t,n){const r=lt({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:s=1,square:a=!1,variant:u="elevation"}=r,c=fe(r,ag),d=E({},r,{component:i,elevation:s,square:a,variant:u}),g=lg(d);return process.env.NODE_ENV!=="production"&&kn().shadows[s]===void 0&&console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`,`Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)),b.jsx(ug,E({as:i,ownerState:d,className:Pe(g.root,o),ref:n},c))});process.env.NODE_ENV!=="production"&&(ma.propTypes={children:l.node,classes:l.object,className:l.string,component:l.elementType,elevation:Wt(Ts,e=>{const{elevation:t,variant:n}=e;return t>0&&n==="outlined"?new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`):null}),square:l.bool,sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),variant:l.oneOfType([l.oneOf(["elevation","outlined"]),l.string])});const cg=ma;function dg(e){return Ze("MuiPopover",e)}mt("MuiPopover",["root","paper"]);const pg=["onEntering"],fg=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],gg=["slotProps"];function Xi(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Ki(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Yi(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Hn(e){return typeof e=="function"?e():e}const mg=e=>{const{classes:t}=e;return at({root:["root"],paper:["paper"]},dg,t)},hg=Oe(ig,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ha=Oe(cg,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),va=C.forwardRef(function(t,n){var r,o,i;const s=lt({props:t,name:"MuiPopover"}),{action:a,anchorEl:u,anchorOrigin:c={vertical:"top",horizontal:"left"},anchorPosition:d,anchorReference:g="anchorEl",children:p,className:f,container:h,elevation:m=8,marginThreshold:v=16,open:w,PaperProps:k={},slots:x,slotProps:S,transformOrigin:y={vertical:"top",horizontal:"left"},TransitionComponent:T=Zr,transitionDuration:O="auto",TransitionProps:{onEntering:A}={},disableScrollLock:D=!1}=s,L=fe(s.TransitionProps,pg),P=fe(s,fg),$=(r=S==null?void 0:S.paper)!=null?r:k,N=C.useRef(),V=Ge(N,$.ref),F=E({},s,{anchorOrigin:c,anchorReference:g,elevation:m,marginThreshold:v,externalPaperSlotProps:$,transformOrigin:y,TransitionComponent:T,transitionDuration:O,TransitionProps:L}),M=mg(F),B=C.useCallback(()=>{if(g==="anchorPosition")return process.env.NODE_ENV!=="production"&&(d||console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')),d;const ee=Hn(u),_=ee&&ee.nodeType===1?ee:ke(N.current).body,se=_.getBoundingClientRect();if(process.env.NODE_ENV!=="production"){const Ce=_.getBoundingClientRect();process.env.NODE_ENV!=="test"&&Ce.top===0&&Ce.left===0&&Ce.right===0&&Ce.bottom===0&&console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}return{top:se.top+Xi(se,c.vertical),left:se.left+Ki(se,c.horizontal)}},[u,c.horizontal,c.vertical,d,g]),ne=C.useCallback(ee=>({vertical:Xi(ee,y.vertical),horizontal:Ki(ee,y.horizontal)}),[y.horizontal,y.vertical]),te=C.useCallback(ee=>{const _={width:ee.offsetWidth,height:ee.offsetHeight},se=ne(_);if(g==="none")return{top:null,left:null,transformOrigin:Yi(se)};const Ce=B();let _e=Ce.top-se.vertical,ye=Ce.left-se.horizontal;const bt=_e+_.height,Ne=ye+_.width,Qe=Bt(Hn(u)),je=Qe.innerHeight-v,et=Qe.innerWidth-v;if(v!==null&&_e<v){const Ee=_e-v;_e-=Ee,se.vertical+=Ee}else if(v!==null&&bt>je){const Ee=bt-je;_e-=Ee,se.vertical+=Ee}if(process.env.NODE_ENV!=="production"&&_.height>je&&_.height&&je&&console.error(["MUI: The popover component is too tall.",`Some part of it can not be seen on the screen (${_.height-je}px).`,"Please consider adding a `max-height` to improve the user-experience."].join(`
`)),v!==null&&ye<v){const Ee=ye-v;ye-=Ee,se.horizontal+=Ee}else if(Ne>et){const Ee=Ne-et;ye-=Ee,se.horizontal+=Ee}return{top:`${Math.round(_e)}px`,left:`${Math.round(ye)}px`,transformOrigin:Yi(se)}},[u,g,B,ne,v]),[R,j]=C.useState(w),G=C.useCallback(()=>{const ee=N.current;if(!ee)return;const _=te(ee);_.top!==null&&(ee.style.top=_.top),_.left!==null&&(ee.style.left=_.left),ee.style.transformOrigin=_.transformOrigin,j(!0)},[te]);C.useEffect(()=>(D&&window.addEventListener("scroll",G),()=>window.removeEventListener("scroll",G)),[u,D,G]);const K=(ee,_)=>{A&&A(ee,_),G()},z=()=>{j(!1)};C.useEffect(()=>{w&&G()}),C.useImperativeHandle(a,()=>w?{updatePosition:()=>{G()}}:null,[w,G]),C.useEffect(()=>{if(!w)return;const ee=ys(()=>{G()}),_=Bt(u);return _.addEventListener("resize",ee),()=>{ee.clear(),_.removeEventListener("resize",ee)}},[u,w,G]);let U=O;O==="auto"&&!T.muiSupportAuto&&(U=void 0);const W=h||(u?ke(Hn(u)).body:void 0),X=(o=x==null?void 0:x.root)!=null?o:hg,q=(i=x==null?void 0:x.paper)!=null?i:ha,Y=Pt({elementType:q,externalSlotProps:E({},$,{style:R?$.style:E({},$.style,{opacity:0})}),additionalProps:{elevation:m,ref:V},ownerState:F,className:Pe(M.paper,$==null?void 0:$.className)}),Q=Pt({elementType:X,externalSlotProps:(S==null?void 0:S.root)||{},externalForwardedProps:P,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:W,open:w},ownerState:F,className:Pe(M.root,f)}),{slotProps:ie}=Q,I=fe(Q,gg);return b.jsx(X,E({},I,!_s(X)&&{slotProps:ie,disableScrollLock:D},{children:b.jsx(T,E({appear:!0,in:w,onEntering:K,onExited:z,timeout:U},L,{children:b.jsx(q,E({},Y,{children:p}))}))}))});process.env.NODE_ENV!=="production"&&(va.propTypes={action:fo,anchorEl:Wt(l.oneOfType([ot,l.func]),e=>{if(e.open&&(!e.anchorReference||e.anchorReference==="anchorEl")){const t=Hn(e.anchorEl);if(t&&t.nodeType===1){const n=t.getBoundingClientRect();if(process.env.NODE_ENV!=="test"&&n.top===0&&n.left===0&&n.right===0&&n.bottom===0)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.",`It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`))}return null}),anchorOrigin:l.shape({horizontal:l.oneOfType([l.oneOf(["center","left","right"]),l.number]).isRequired,vertical:l.oneOfType([l.oneOf(["bottom","center","top"]),l.number]).isRequired}),anchorPosition:l.shape({left:l.number.isRequired,top:l.number.isRequired}),anchorReference:l.oneOf(["anchorEl","anchorPosition","none"]),children:l.node,classes:l.object,className:l.string,container:l.oneOfType([ot,l.func]),disableScrollLock:l.bool,elevation:Ts,marginThreshold:l.number,onClose:l.func,open:l.bool.isRequired,PaperProps:l.shape({component:ql}),slotProps:l.shape({paper:l.oneOfType([l.func,l.object]),root:l.oneOfType([l.func,l.object])}),slots:l.shape({paper:l.elementType,root:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),transformOrigin:l.shape({horizontal:l.oneOfType([l.oneOf(["center","left","right"]),l.number]).isRequired,vertical:l.oneOfType([l.oneOf(["bottom","center","top"]),l.number]).isRequired}),TransitionComponent:l.elementType,transitionDuration:l.oneOfType([l.oneOf(["auto"]),l.number,l.shape({appear:l.number,enter:l.number,exit:l.number})]),TransitionProps:l.object});const vg=va;function bg(e){return Ze("MuiMenu",e)}mt("MuiMenu",["root","paper","list"]);const yg=["onEntering"],wg=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],xg={vertical:"top",horizontal:"right"},Sg={vertical:"top",horizontal:"left"},Cg=e=>{const{classes:t}=e;return at({root:["root"],paper:["paper"],list:["list"]},bg,t)},Eg=Oe(vg,{shouldForwardProp:e=>Ys(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Rg=Oe(ha,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Tg=Oe(Uf,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),ba=C.forwardRef(function(t,n){var r,o;const i=lt({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:a,className:u,disableAutoFocusItem:c=!1,MenuListProps:d={},onClose:g,open:p,PaperProps:f={},PopoverClasses:h,transitionDuration:m="auto",TransitionProps:{onEntering:v}={},variant:w="selectedMenu",slots:k={},slotProps:x={}}=i,S=fe(i.TransitionProps,yg),y=fe(i,wg),T=kn(),O=T.direction==="rtl",A=E({},i,{autoFocus:s,disableAutoFocusItem:c,MenuListProps:d,onEntering:v,PaperProps:f,transitionDuration:m,TransitionProps:S,variant:w}),D=Cg(A),L=s&&!c&&p,P=C.useRef(null),$=(te,R)=>{P.current&&P.current.adjustStyleForScrollbar(te,T),v&&v(te,R)},N=te=>{te.key==="Tab"&&(te.preventDefault(),g&&g(te,"tabKeyDown"))};let V=-1;C.Children.map(a,(te,R)=>{C.isValidElement(te)&&(process.env.NODE_ENV!=="production"&&Un.isFragment(te)&&console.error(["MUI: The Menu component doesn't accept a Fragment as a child.","Consider providing an array instead."].join(`
`)),te.props.disabled||(w==="selectedMenu"&&te.props.selected||V===-1)&&(V=R))});const F=(r=k.paper)!=null?r:Rg,M=(o=x.paper)!=null?o:f,B=Pt({elementType:k.root,externalSlotProps:x.root,ownerState:A,className:[D.root,u]}),ne=Pt({elementType:F,externalSlotProps:M,ownerState:A,className:D.paper});return b.jsx(Eg,E({onClose:g,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?xg:Sg,slots:{paper:F,root:k.root},slotProps:{root:B,paper:ne},open:p,ref:n,transitionDuration:m,TransitionProps:E({onEntering:$},S),ownerState:A},y,{classes:h,children:b.jsx(Tg,E({onKeyDown:N,actions:P,autoFocus:s&&(V===-1||c),autoFocusItem:L,variant:w},d,{className:Pe(D.list,d.className),children:a}))}))});process.env.NODE_ENV!=="production"&&(ba.propTypes={anchorEl:l.oneOfType([ot,l.func]),autoFocus:l.bool,children:l.node,classes:l.object,className:l.string,disableAutoFocusItem:l.bool,MenuListProps:l.object,onClose:l.func,open:l.bool.isRequired,PaperProps:l.object,PopoverClasses:l.object,slotProps:l.shape({paper:l.oneOfType([l.func,l.object]),root:l.oneOfType([l.func,l.object])}),slots:l.shape({paper:l.elementType,root:l.elementType}),sx:l.oneOfType([l.arrayOf(l.oneOfType([l.func,l.object,l.bool])),l.func,l.object]),transitionDuration:l.oneOfType([l.oneOf(["auto"]),l.number,l.shape({appear:l.number,enter:l.number,exit:l.number})]),TransitionProps:l.object,variant:l.oneOf(["menu","selectedMenu"])});const Pg=ba;function kg({className:e,commandHandler:t,menuDefinition:n,children:r}){var c;const[o,i]=H.useState(void 0),s=H.useCallback(d=>{d.preventDefault(),i(o===void 0?{mouseX:d.clientX+2,mouseY:d.clientY-6}:void 0)},[o]),a=H.useCallback(()=>{i(void 0)},[]),u=H.useMemo(()=>{if(o!==void 0)return{top:o.mouseY,left:o.mouseX}},[o]);return(((c=n==null?void 0:n.items)==null?void 0:c.length)??0)===0||!r?r:b.jsxs("div",{className:`papi-context-menu-target ${e??""}`,onContextMenu:s,children:[r,b.jsx(Pg,{className:`papi-context-menu ${e??""}`,open:o!==void 0,onClose:a,anchorReference:"anchorPosition",anchorPosition:u,children:b.jsx(Mo,{menuDefinition:n,commandHandler:t,onClick:a})})]})}const Og=oa(b.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function _g(e){return{preserveValue:!0,...e}}const Qn=(e,t,n={})=>{const r=H.useRef(t);r.current=t;const o=H.useRef(n);o.current=_g(o.current);const[i,s]=H.useState(()=>r.current),[a,u]=H.useState(!0);return H.useEffect(()=>{let c=!0;return u(!!e),(async()=>{if(e){const d=await e();c&&(s(()=>d),u(!1))}})(),()=>{c=!1,o.current.preserveValue||s(()=>r.current)}},[e]),[i,a]};function ya({menuProvider:e,normalMenu:t,fullMenu:n,commandHandler:r,containerRef:o,className:i,ariaLabelPrefix:s,children:a}){const[u,c]=H.useState(!1),[d,g]=H.useState(!1),p=H.useCallback(()=>{u&&c(!1),g(!1)},[u]),f=H.useCallback(S=>{S.stopPropagation(),c(y=>{const T=!y;return T&&S.shiftKey?g(!0):T||g(!1),T})},[]),h=H.useCallback(S=>(p(),r(S)),[r,p]),[m,v]=H.useState({top:1,left:1});H.useEffect(()=>{if(u){const S=o==null?void 0:o.current;if(S){const y=S.getBoundingClientRect(),T=window.scrollY,O=window.scrollX,A=y.top+T+S.clientHeight,D=y.left+O;v({top:A,left:D})}}},[u,o]);const[w]=Qn(H.useCallback(async()=>(e==null?void 0:e(!1))??t,[e,t,u]),t),[k]=Qn(H.useCallback(async()=>(e==null?void 0:e(!0))??n??w,[e,n,w,u]),n??w),x=d&&k?k:w;return b.jsxs(b.Fragment,{children:[b.jsx(me.IconButton,{sx:{paddingTop:0,paddingBottom:0},edge:"start",className:`papi-menuButton ${i??""}`,color:"inherit","aria-label":`${s??""} menu button`,onClick:f,children:a??b.jsx(Og,{})}),b.jsx(me.Drawer,{className:`papi-menu-drawer ${i??""}`,anchor:"left",variant:"temporary",open:u,onClose:p,PaperProps:{className:"papi-menu-drawer-paper",style:{top:m.top,left:m.left}},children:x?b.jsx(aa,{className:i,id:`${s??""} main menu`,commandHandler:h,multiColumnMenu:x}):void 0})]})}function Ng({id:e,label:t,isDisabled:n=!1,tooltip:r,isTooltipSuppressed:o=!1,adjustMarginToAlignToEdge:i=!1,size:s="medium",className:a,onClick:u,children:c}){return b.jsx(me.IconButton,{id:e,disabled:n,edge:i,size:s,"aria-label":t,title:o?void 0:r??t,className:`papi-icon-button ${a??""}`,onClick:u,children:c})}function Io({variant:e="outlined",id:t,isDisabled:n=!1,hasError:r=!1,isFullWidth:o=!1,helperText:i,label:s,placeholder:a,isRequired:u=!1,className:c,defaultValue:d,value:g,onChange:p,onFocus:f,onBlur:h}){return b.jsx(me.TextField,{variant:e,id:t,disabled:n,error:r,fullWidth:o,helperText:i,label:s,placeholder:a,required:u,className:`papi-textfield ${c??""}`,defaultValue:d,value:g,onChange:p,onFocus:f,onBlur:h})}function $g({onSearch:e,placeholder:t,isFullWidth:n}){const[r,o]=H.useState(""),i=s=>{o(s),e(s)};return b.jsx(me.Paper,{component:"form",className:"search-bar-paper",children:b.jsx(Io,{isFullWidth:n,className:"search-bar-input",placeholder:t,value:r,onChange:s=>i(s.target.value)})})}function Mg({id:e,isDisabled:t=!1,orientation:n="horizontal",min:r=0,max:o=100,step:i=1,showMarks:s=!1,defaultValue:a,value:u,valueLabelDisplay:c="off",className:d,onChange:g,onChangeCommitted:p}){return b.jsx(me.Slider,{id:e,disabled:t,orientation:n,min:r,max:o,step:i,marks:s,defaultValue:a,value:u,valueLabelDisplay:c,className:`papi-slider ${n} ${d??""}`,onChange:g,onChangeCommitted:p})}function Ig({autoHideDuration:e=void 0,id:t,isOpen:n=!1,className:r,onClose:o,anchorOrigin:i={vertical:"bottom",horizontal:"left"},ContentProps:s,children:a}){const u={action:(s==null?void 0:s.action)||a,message:s==null?void 0:s.message,className:r};return b.jsx(me.Snackbar,{autoHideDuration:e??void 0,open:n,onClose:o,anchorOrigin:i,id:t,ContentProps:u})}function jg({id:e,isChecked:t,isDisabled:n=!1,hasError:r=!1,className:o,onChange:i}){return b.jsx(me.Switch,{id:e,checked:t,disabled:n,className:`papi-switch ${r?"error":""} ${o??""}`,onChange:i})}function Ji({onRowChange:e,row:t,column:n}){const r=o=>{e({...t,[n.key]:o.target.value})};return b.jsx(Io,{defaultValue:t[n.key],onChange:r})}const Fg=({onChange:e,disabled:t,checked:n,...r})=>{const o=i=>{e(i.target.checked,i.nativeEvent.shiftKey)};return b.jsx(ds,{...r,isChecked:n,isDisabled:t,onChange:o})};function Ag({columns:e,sortColumns:t,onSortColumnsChange:n,onColumnResize:r,defaultColumnWidth:o,defaultColumnMinWidth:i,defaultColumnMaxWidth:s,defaultColumnSortable:a=!0,defaultColumnResizable:u=!0,rows:c,enableSelectColumn:d,selectColumnWidth:g=50,rowKeyGetter:p,rowHeight:f=35,headerRowHeight:h=35,selectedRows:m,onSelectedRowsChange:v,onRowsChange:w,onCellClick:k,onCellDoubleClick:x,onCellContextMenu:S,onCellKeyDown:y,direction:T="ltr",enableVirtualization:O=!0,onCopy:A,onPaste:D,onScroll:L,className:P,"data-testid":$}){const N=H.useMemo(()=>{const V=e.map(F=>typeof F.editable=="function"?{...F,editable:B=>!!F.editable(B),renderEditCell:F.renderEditCell||Ji}:F.editable&&!F.renderEditCell?{...F,renderEditCell:Ji}:F.renderEditCell&&!F.editable?{...F,editable:!1}:F);return d?[{...Qo.SelectColumn,minWidth:g},...V]:V},[e,d,g]);return b.jsx(Qo,{columns:N,defaultColumnOptions:{width:o,minWidth:i,maxWidth:s,sortable:a,resizable:u},sortColumns:t,onSortColumnsChange:n,onColumnResize:r,rows:c,rowKeyGetter:p,rowHeight:f,headerRowHeight:h,selectedRows:m,onSelectedRowsChange:v,onRowsChange:w,onCellClick:k,onCellDoubleClick:x,onCellContextMenu:S,onCellKeyDown:y,direction:T,enableVirtualization:O,onCopy:A,onPaste:D,onScroll:L,renderers:{renderCheckbox:Fg},className:`papi-table ${P??"rdg-light"}`,"data-testid":$})}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function pt(e,t){return typeof e=="function"?e(t):e}function Le(e,t){return n=>{t.setState(r=>({...r,[e]:pt(n,r[e])}))}}function gr(e){return e instanceof Function}function Dg(e){return Array.isArray(e)&&e.every(t=>typeof t=="number")}function Vg(e,t){const n=[],r=o=>{o.forEach(i=>{n.push(i);const s=t(i);s!=null&&s.length&&r(s)})};return r(e),n}function J(e,t,n){let r=[],o;return i=>{let s;n.key&&n.debug&&(s=Date.now());const a=e(i);if(!(a.length!==r.length||a.some((d,g)=>r[g]!==d)))return o;r=a;let c;if(n.key&&n.debug&&(c=Date.now()),o=t(...a),n==null||n.onChange==null||n.onChange(o),n.key&&n.debug&&n!=null&&n.debug()){const d=Math.round((Date.now()-s)*100)/100,g=Math.round((Date.now()-c)*100)/100,p=g/16,f=(h,m)=>{for(h=String(h);h.length<m;)h=" "+h;return h};console.info(`%c⏱ ${f(g,5)} /${f(d,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*p,120))}deg 100% 31%);`,n==null?void 0:n.key)}return o}}function Z(e,t,n,r){return{debug:()=>{var o;return(o=e==null?void 0:e.debugAll)!=null?o:e[t]},key:process.env.NODE_ENV==="development"&&n,onChange:r}}function Lg(e,t,n,r){const o=()=>{var s;return(s=i.getValue())!=null?s:e.options.renderFallbackValue},i={id:`${t.id}_${n.id}`,row:t,column:n,getValue:()=>t.getValue(r),renderValue:o,getContext:J(()=>[e,n,t,i],(s,a,u,c)=>({table:s,column:a,row:u,cell:c,getValue:c.getValue,renderValue:c.renderValue}),Z(e.options,"debugCells","cell.getContext"))};return e._features.forEach(s=>{s.createCell==null||s.createCell(i,n,t,e)},{}),i}function Bg(e,t,n,r){var o,i;const a={...e._getDefaultColumnDef(),...t},u=a.accessorKey;let c=(o=(i=a.id)!=null?i:u?u.replace(".","_"):void 0)!=null?o:typeof a.header=="string"?a.header:void 0,d;if(a.accessorFn?d=a.accessorFn:u&&(u.includes(".")?d=p=>{let f=p;for(const m of u.split(".")){var h;f=(h=f)==null?void 0:h[m],process.env.NODE_ENV!=="production"&&f===void 0&&console.warn(`"${m}" in deeply nested key "${u}" returned undefined.`)}return f}:d=p=>p[a.accessorKey]),!c)throw process.env.NODE_ENV!=="production"?new Error(a.accessorFn?"Columns require an id when using an accessorFn":"Columns require an id when using a non-string header"):new Error;let g={id:`${String(c)}`,accessorFn:d,parent:r,depth:n,columnDef:a,columns:[],getFlatColumns:J(()=>[!0],()=>{var p;return[g,...(p=g.columns)==null?void 0:p.flatMap(f=>f.getFlatColumns())]},Z(e.options,"debugColumns","column.getFlatColumns")),getLeafColumns:J(()=>[e._getOrderColumnsFn()],p=>{var f;if((f=g.columns)!=null&&f.length){let h=g.columns.flatMap(m=>m.getLeafColumns());return p(h)}return[g]},Z(e.options,"debugColumns","column.getLeafColumns"))};for(const p of e._features)p.createColumn==null||p.createColumn(g,e);return g}const Re="debugHeaders";function Zi(e,t,n){var r;let i={id:(r=n.id)!=null?r:t.id,column:t,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const s=[],a=u=>{u.subHeaders&&u.subHeaders.length&&u.subHeaders.map(a),s.push(u)};return a(i),s},getContext:()=>({table:e,header:i,column:t})};return e._features.forEach(s=>{s.createHeader==null||s.createHeader(i,e)}),i}const zg={createTable:e=>{e.getHeaderGroups=J(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r,o)=>{var i,s;const a=(i=r==null?void 0:r.map(g=>n.find(p=>p.id===g)).filter(Boolean))!=null?i:[],u=(s=o==null?void 0:o.map(g=>n.find(p=>p.id===g)).filter(Boolean))!=null?s:[],c=n.filter(g=>!(r!=null&&r.includes(g.id))&&!(o!=null&&o.includes(g.id)));return An(t,[...a,...c,...u],e)},Z(e.options,Re,"getHeaderGroups")),e.getCenterHeaderGroups=J(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r,o)=>(n=n.filter(i=>!(r!=null&&r.includes(i.id))&&!(o!=null&&o.includes(i.id))),An(t,n,e,"center")),Z(e.options,Re,"getCenterHeaderGroups")),e.getLeftHeaderGroups=J(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(t,n,r)=>{var o;const i=(o=r==null?void 0:r.map(s=>n.find(a=>a.id===s)).filter(Boolean))!=null?o:[];return An(t,i,e,"left")},Z(e.options,Re,"getLeftHeaderGroups")),e.getRightHeaderGroups=J(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(t,n,r)=>{var o;const i=(o=r==null?void 0:r.map(s=>n.find(a=>a.id===s)).filter(Boolean))!=null?o:[];return An(t,i,e,"right")},Z(e.options,Re,"getRightHeaderGroups")),e.getFooterGroups=J(()=>[e.getHeaderGroups()],t=>[...t].reverse(),Z(e.options,Re,"getFooterGroups")),e.getLeftFooterGroups=J(()=>[e.getLeftHeaderGroups()],t=>[...t].reverse(),Z(e.options,Re,"getLeftFooterGroups")),e.getCenterFooterGroups=J(()=>[e.getCenterHeaderGroups()],t=>[...t].reverse(),Z(e.options,Re,"getCenterFooterGroups")),e.getRightFooterGroups=J(()=>[e.getRightHeaderGroups()],t=>[...t].reverse(),Z(e.options,Re,"getRightFooterGroups")),e.getFlatHeaders=J(()=>[e.getHeaderGroups()],t=>t.map(n=>n.headers).flat(),Z(e.options,Re,"getFlatHeaders")),e.getLeftFlatHeaders=J(()=>[e.getLeftHeaderGroups()],t=>t.map(n=>n.headers).flat(),Z(e.options,Re,"getLeftFlatHeaders")),e.getCenterFlatHeaders=J(()=>[e.getCenterHeaderGroups()],t=>t.map(n=>n.headers).flat(),Z(e.options,Re,"getCenterFlatHeaders")),e.getRightFlatHeaders=J(()=>[e.getRightHeaderGroups()],t=>t.map(n=>n.headers).flat(),Z(e.options,Re,"getRightFlatHeaders")),e.getCenterLeafHeaders=J(()=>[e.getCenterFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),Z(e.options,Re,"getCenterLeafHeaders")),e.getLeftLeafHeaders=J(()=>[e.getLeftFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),Z(e.options,Re,"getLeftLeafHeaders")),e.getRightLeafHeaders=J(()=>[e.getRightFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),Z(e.options,Re,"getRightLeafHeaders")),e.getLeafHeaders=J(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(t,n,r)=>{var o,i,s,a,u,c;return[...(o=(i=t[0])==null?void 0:i.headers)!=null?o:[],...(s=(a=n[0])==null?void 0:a.headers)!=null?s:[],...(u=(c=r[0])==null?void 0:c.headers)!=null?u:[]].map(d=>d.getLeafHeaders()).flat()},Z(e.options,Re,"getLeafHeaders"))}};function An(e,t,n,r){var o,i;let s=0;const a=function(p,f){f===void 0&&(f=1),s=Math.max(s,f),p.filter(h=>h.getIsVisible()).forEach(h=>{var m;(m=h.columns)!=null&&m.length&&a(h.columns,f+1)},0)};a(e);let u=[];const c=(p,f)=>{const h={depth:f,id:[r,`${f}`].filter(Boolean).join("_"),headers:[]},m=[];p.forEach(v=>{const w=[...m].reverse()[0],k=v.column.depth===h.depth;let x,S=!1;if(k&&v.column.parent?x=v.column.parent:(x=v.column,S=!0),w&&(w==null?void 0:w.column)===x)w.subHeaders.push(v);else{const y=Zi(n,x,{id:[r,f,x.id,v==null?void 0:v.id].filter(Boolean).join("_"),isPlaceholder:S,placeholderId:S?`${m.filter(T=>T.column===x).length}`:void 0,depth:f,index:m.length});y.subHeaders.push(v),m.push(y)}h.headers.push(v),v.headerGroup=h}),u.push(h),f>0&&c(m,f-1)},d=t.map((p,f)=>Zi(n,p,{depth:s,index:f}));c(d,s-1),u.reverse();const g=p=>p.filter(h=>h.column.getIsVisible()).map(h=>{let m=0,v=0,w=[0];h.subHeaders&&h.subHeaders.length?(w=[],g(h.subHeaders).forEach(x=>{let{colSpan:S,rowSpan:y}=x;m+=S,w.push(y)})):m=1;const k=Math.min(...w);return v=v+k,h.colSpan=m,h.rowSpan=v,{colSpan:m,rowSpan:v}});return g((o=(i=u[0])==null?void 0:i.headers)!=null?o:[]),u}const jo=(e,t,n,r,o,i,s)=>{let a={id:t,index:r,original:n,depth:o,parentId:s,_valuesCache:{},_uniqueValuesCache:{},getValue:u=>{if(a._valuesCache.hasOwnProperty(u))return a._valuesCache[u];const c=e.getColumn(u);if(c!=null&&c.accessorFn)return a._valuesCache[u]=c.accessorFn(a.original,r),a._valuesCache[u]},getUniqueValues:u=>{if(a._uniqueValuesCache.hasOwnProperty(u))return a._uniqueValuesCache[u];const c=e.getColumn(u);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(a._uniqueValuesCache[u]=c.columnDef.getUniqueValues(a.original,r),a._uniqueValuesCache[u]):(a._uniqueValuesCache[u]=[a.getValue(u)],a._uniqueValuesCache[u])},renderValue:u=>{var c;return(c=a.getValue(u))!=null?c:e.options.renderFallbackValue},subRows:i??[],getLeafRows:()=>Vg(a.subRows,u=>u.subRows),getParentRow:()=>a.parentId?e.getRow(a.parentId,!0):void 0,getParentRows:()=>{let u=[],c=a;for(;;){const d=c.getParentRow();if(!d)break;u.push(d),c=d}return u.reverse()},getAllCells:J(()=>[e.getAllLeafColumns()],u=>u.map(c=>Lg(e,a,c,c.id)),Z(e.options,"debugRows","getAllCells")),_getAllCellsByColumnId:J(()=>[a.getAllCells()],u=>u.reduce((c,d)=>(c[d.column.id]=d,c),{}),Z(e.options,"debugRows","getAllCellsByColumnId"))};for(let u=0;u<e._features.length;u++){const c=e._features[u];c==null||c.createRow==null||c.createRow(a,e)}return a},Hg={createColumn:(e,t)=>{e._getFacetedRowModel=t.options.getFacetedRowModel&&t.options.getFacetedRowModel(t,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():t.getPreFilteredRowModel(),e._getFacetedUniqueValues=t.options.getFacetedUniqueValues&&t.options.getFacetedUniqueValues(t,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=t.options.getFacetedMinMaxValues&&t.options.getFacetedMinMaxValues(t,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},wa=(e,t,n)=>{var r;const o=n.toLowerCase();return!!(!((r=e.getValue(t))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(o))};wa.autoRemove=e=>Xe(e);const xa=(e,t,n)=>{var r;return!!(!((r=e.getValue(t))==null||(r=r.toString())==null)&&r.includes(n))};xa.autoRemove=e=>Xe(e);const Sa=(e,t,n)=>{var r;return((r=e.getValue(t))==null||(r=r.toString())==null?void 0:r.toLowerCase())===(n==null?void 0:n.toLowerCase())};Sa.autoRemove=e=>Xe(e);const Ca=(e,t,n)=>{var r;return(r=e.getValue(t))==null?void 0:r.includes(n)};Ca.autoRemove=e=>Xe(e)||!(e!=null&&e.length);const Ea=(e,t,n)=>!n.some(r=>{var o;return!((o=e.getValue(t))!=null&&o.includes(r))});Ea.autoRemove=e=>Xe(e)||!(e!=null&&e.length);const Ra=(e,t,n)=>n.some(r=>{var o;return(o=e.getValue(t))==null?void 0:o.includes(r)});Ra.autoRemove=e=>Xe(e)||!(e!=null&&e.length);const Ta=(e,t,n)=>e.getValue(t)===n;Ta.autoRemove=e=>Xe(e);const Pa=(e,t,n)=>e.getValue(t)==n;Pa.autoRemove=e=>Xe(e);const Fo=(e,t,n)=>{let[r,o]=n;const i=e.getValue(t);return i>=r&&i<=o};Fo.resolveFilterValue=e=>{let[t,n]=e,r=typeof t!="number"?parseFloat(t):t,o=typeof n!="number"?parseFloat(n):n,i=t===null||Number.isNaN(r)?-1/0:r,s=n===null||Number.isNaN(o)?1/0:o;if(i>s){const a=i;i=s,s=a}return[i,s]};Fo.autoRemove=e=>Xe(e)||Xe(e[0])&&Xe(e[1]);const nt={includesString:wa,includesStringSensitive:xa,equalsString:Sa,arrIncludes:Ca,arrIncludesAll:Ea,arrIncludesSome:Ra,equals:Ta,weakEquals:Pa,inNumberRange:Fo};function Xe(e){return e==null||e===""}const Gg={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:Le("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,t)=>{e.getAutoFilterFn=()=>{const n=t.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(e.id);return typeof r=="string"?nt.includesString:typeof r=="number"?nt.inNumberRange:typeof r=="boolean"||r!==null&&typeof r=="object"?nt.equals:Array.isArray(r)?nt.arrIncludes:nt.weakEquals},e.getFilterFn=()=>{var n,r;return gr(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(r=t.options.filterFns)==null?void 0:r[e.columnDef.filterFn])!=null?n:nt[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,r,o;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((r=t.options.enableColumnFilters)!=null?r:!0)&&((o=t.options.enableFilters)!=null?o:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=t.getState().columnFilters)==null||(n=n.find(r=>r.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,r;return(n=(r=t.getState().columnFilters)==null?void 0:r.findIndex(o=>o.id===e.id))!=null?n:-1},e.setFilterValue=n=>{t.setColumnFilters(r=>{const o=e.getFilterFn(),i=r==null?void 0:r.find(d=>d.id===e.id),s=pt(n,i?i.value:void 0);if(Qi(o,s,e)){var a;return(a=r==null?void 0:r.filter(d=>d.id!==e.id))!=null?a:[]}const u={id:e.id,value:s};if(i){var c;return(c=r==null?void 0:r.map(d=>d.id===e.id?u:d))!=null?c:[]}return r!=null&&r.length?[...r,u]:[u]})}},createRow:(e,t)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=t=>{const n=e.getAllLeafColumns(),r=o=>{var i;return(i=pt(t,o))==null?void 0:i.filter(s=>{const a=n.find(u=>u.id===s.id);if(a){const u=a.getFilterFn();if(Qi(u,s.value,a))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(r)},e.resetColumnFilters=t=>{var n,r;e.setColumnFilters(t?[]:(n=(r=e.initialState)==null?void 0:r.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function Qi(e,t,n){return(e&&e.autoRemove?e.autoRemove(t,n):!1)||typeof t>"u"||typeof t=="string"&&!t}const Ug=(e,t,n)=>n.reduce((r,o)=>{const i=o.getValue(e);return r+(typeof i=="number"?i:0)},0),qg=(e,t,n)=>{let r;return n.forEach(o=>{const i=o.getValue(e);i!=null&&(r>i||r===void 0&&i>=i)&&(r=i)}),r},Wg=(e,t,n)=>{let r;return n.forEach(o=>{const i=o.getValue(e);i!=null&&(r<i||r===void 0&&i>=i)&&(r=i)}),r},Xg=(e,t,n)=>{let r,o;return n.forEach(i=>{const s=i.getValue(e);s!=null&&(r===void 0?s>=s&&(r=o=s):(r>s&&(r=s),o<s&&(o=s)))}),[r,o]},Kg=(e,t)=>{let n=0,r=0;if(t.forEach(o=>{let i=o.getValue(e);i!=null&&(i=+i)>=i&&(++n,r+=i)}),n)return r/n},Yg=(e,t)=>{if(!t.length)return;const n=t.map(i=>i.getValue(e));if(!Dg(n))return;if(n.length===1)return n[0];const r=Math.floor(n.length/2),o=n.sort((i,s)=>i-s);return n.length%2!==0?o[r]:(o[r-1]+o[r])/2},Jg=(e,t)=>Array.from(new Set(t.map(n=>n.getValue(e))).values()),Zg=(e,t)=>new Set(t.map(n=>n.getValue(e))).size,Qg=(e,t)=>t.length,$r={sum:Ug,min:qg,max:Wg,extent:Xg,mean:Kg,median:Yg,unique:Jg,uniqueCount:Zg,count:Qg},em={getDefaultColumnDef:()=>({aggregatedCell:e=>{var t,n;return(t=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?t:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:Le("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,t)=>{e.toggleGrouping=()=>{t.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(r=>r!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,r;return((n=e.columnDef.enableGrouping)!=null?n:!0)&&((r=t.options.enableGrouping)!=null?r:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var n;return(n=t.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=t.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=t.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(e.id);if(typeof r=="number")return $r.sum;if(Object.prototype.toString.call(r)==="[object Date]")return $r.extent},e.getAggregationFn=()=>{var n,r;if(!e)throw new Error;return gr(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(r=t.options.aggregationFns)==null?void 0:r[e.columnDef.aggregationFn])!=null?n:$r[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=t=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(t),e.resetGrouping=t=>{var n,r;e.setGrouping(t?[]:(n=(r=e.initialState)==null?void 0:r.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,t)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const r=t.getColumn(n);return r!=null&&r.columnDef.getGroupingValue?(e._groupingValuesCache[n]=r.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,t,n,r)=>{e.getIsGrouped=()=>t.getIsGrouped()&&t.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&t.getIsGrouped(),e.getIsAggregated=()=>{var o;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((o=n.subRows)!=null&&o.length)}}};function tm(e,t,n){if(!(t!=null&&t.length)||!n)return e;const r=e.filter(i=>!t.includes(i.id));return n==="remove"?r:[...t.map(i=>e.find(s=>s.id===i)).filter(Boolean),...r]}const nm={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:Le("columnOrder",e)}),createColumn:(e,t)=>{e.getIndex=J(n=>[hn(t,n)],n=>n.findIndex(r=>r.id===e.id),Z(t.options,"debugColumns","getIndex")),e.getIsFirstColumn=n=>{var r;return((r=hn(t,n)[0])==null?void 0:r.id)===e.id},e.getIsLastColumn=n=>{var r;const o=hn(t,n);return((r=o[o.length-1])==null?void 0:r.id)===e.id}},createTable:e=>{e.setColumnOrder=t=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(t),e.resetColumnOrder=t=>{var n;e.setColumnOrder(t?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=J(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(t,n,r)=>o=>{let i=[];if(!(t!=null&&t.length))i=o;else{const s=[...t],a=[...o];for(;a.length&&s.length;){const u=s.shift(),c=a.findIndex(d=>d.id===u);c>-1&&i.push(a.splice(c,1)[0])}i=[...i,...a]}return tm(i,n,r)},Z(e.options,"debugTable","_getOrderColumnsFn"))}},Mr=()=>({left:[],right:[]}),rm={getInitialState:e=>({columnPinning:Mr(),...e}),getDefaultOptions:e=>({onColumnPinningChange:Le("columnPinning",e)}),createColumn:(e,t)=>{e.pin=n=>{const r=e.getLeafColumns().map(o=>o.id).filter(Boolean);t.setColumnPinning(o=>{var i,s;if(n==="right"){var a,u;return{left:((a=o==null?void 0:o.left)!=null?a:[]).filter(g=>!(r!=null&&r.includes(g))),right:[...((u=o==null?void 0:o.right)!=null?u:[]).filter(g=>!(r!=null&&r.includes(g))),...r]}}if(n==="left"){var c,d;return{left:[...((c=o==null?void 0:o.left)!=null?c:[]).filter(g=>!(r!=null&&r.includes(g))),...r],right:((d=o==null?void 0:o.right)!=null?d:[]).filter(g=>!(r!=null&&r.includes(g)))}}return{left:((i=o==null?void 0:o.left)!=null?i:[]).filter(g=>!(r!=null&&r.includes(g))),right:((s=o==null?void 0:o.right)!=null?s:[]).filter(g=>!(r!=null&&r.includes(g)))}})},e.getCanPin=()=>e.getLeafColumns().some(r=>{var o,i,s;return((o=r.columnDef.enablePinning)!=null?o:!0)&&((i=(s=t.options.enableColumnPinning)!=null?s:t.options.enablePinning)!=null?i:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(a=>a.id),{left:r,right:o}=t.getState().columnPinning,i=n.some(a=>r==null?void 0:r.includes(a)),s=n.some(a=>o==null?void 0:o.includes(a));return i?"left":s?"right":!1},e.getPinnedIndex=()=>{var n,r;const o=e.getIsPinned();return o?(n=(r=t.getState().columnPinning)==null||(r=r[o])==null?void 0:r.indexOf(e.id))!=null?n:-1:0}},createRow:(e,t)=>{e.getCenterVisibleCells=J(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left,t.getState().columnPinning.right],(n,r,o)=>{const i=[...r??[],...o??[]];return n.filter(s=>!i.includes(s.column.id))},Z(t.options,"debugRows","getCenterVisibleCells")),e.getLeftVisibleCells=J(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left],(n,r)=>(r??[]).map(i=>n.find(s=>s.column.id===i)).filter(Boolean).map(i=>({...i,position:"left"})),Z(t.options,"debugRows","getLeftVisibleCells")),e.getRightVisibleCells=J(()=>[e._getAllVisibleCells(),t.getState().columnPinning.right],(n,r)=>(r??[]).map(i=>n.find(s=>s.column.id===i)).filter(Boolean).map(i=>({...i,position:"right"})),Z(t.options,"debugRows","getRightVisibleCells"))},createTable:e=>{e.setColumnPinning=t=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(t),e.resetColumnPinning=t=>{var n,r;return e.setColumnPinning(t?Mr():(n=(r=e.initialState)==null?void 0:r.columnPinning)!=null?n:Mr())},e.getIsSomeColumnsPinned=t=>{var n;const r=e.getState().columnPinning;if(!t){var o,i;return!!((o=r.left)!=null&&o.length||(i=r.right)!=null&&i.length)}return!!((n=r[t])!=null&&n.length)},e.getLeftLeafColumns=J(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(t,n)=>(n??[]).map(r=>t.find(o=>o.id===r)).filter(Boolean),Z(e.options,"debugColumns","getLeftLeafColumns")),e.getRightLeafColumns=J(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(t,n)=>(n??[]).map(r=>t.find(o=>o.id===r)).filter(Boolean),Z(e.options,"debugColumns","getRightLeafColumns")),e.getCenterLeafColumns=J(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r)=>{const o=[...n??[],...r??[]];return t.filter(i=>!o.includes(i.id))},Z(e.options,"debugColumns","getCenterLeafColumns"))}},Dn={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Ir=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),om={getDefaultColumnDef:()=>Dn,getInitialState:e=>({columnSizing:{},columnSizingInfo:Ir(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:Le("columnSizing",e),onColumnSizingInfoChange:Le("columnSizingInfo",e)}),createColumn:(e,t)=>{e.getSize=()=>{var n,r,o;const i=t.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:Dn.minSize,(r=i??e.columnDef.size)!=null?r:Dn.size),(o=e.columnDef.maxSize)!=null?o:Dn.maxSize)},e.getStart=J(n=>[n,hn(t,n),t.getState().columnSizing],(n,r)=>r.slice(0,e.getIndex(n)).reduce((o,i)=>o+i.getSize(),0),Z(t.options,"debugColumns","getStart")),e.getAfter=J(n=>[n,hn(t,n),t.getState().columnSizing],(n,r)=>r.slice(e.getIndex(n)+1).reduce((o,i)=>o+i.getSize(),0),Z(t.options,"debugColumns","getAfter")),e.resetSize=()=>{t.setColumnSizing(n=>{let{[e.id]:r,...o}=n;return o})},e.getCanResize=()=>{var n,r;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((r=t.options.enableColumnResizing)!=null?r:!0)},e.getIsResizing=()=>t.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,t)=>{e.getSize=()=>{let n=0;const r=o=>{if(o.subHeaders.length)o.subHeaders.forEach(r);else{var i;n+=(i=o.column.getSize())!=null?i:0}};return r(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const r=t.getColumn(e.column.id),o=r==null?void 0:r.getCanResize();return i=>{if(!r||!o||(i.persist==null||i.persist(),jr(i)&&i.touches&&i.touches.length>1))return;const s=e.getSize(),a=e?e.getLeafHeaders().map(w=>[w.column.id,w.column.getSize()]):[[r.id,r.getSize()]],u=jr(i)?Math.round(i.touches[0].clientX):i.clientX,c={},d=(w,k)=>{typeof k=="number"&&(t.setColumnSizingInfo(x=>{var S,y;const T=t.options.columnResizeDirection==="rtl"?-1:1,O=(k-((S=x==null?void 0:x.startOffset)!=null?S:0))*T,A=Math.max(O/((y=x==null?void 0:x.startSize)!=null?y:0),-.999999);return x.columnSizingStart.forEach(D=>{let[L,P]=D;c[L]=Math.round(Math.max(P+P*A,0)*100)/100}),{...x,deltaOffset:O,deltaPercentage:A}}),(t.options.columnResizeMode==="onChange"||w==="end")&&t.setColumnSizing(x=>({...x,...c})))},g=w=>d("move",w),p=w=>{d("end",w),t.setColumnSizingInfo(k=>({...k,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},f=n||typeof document<"u"?document:null,h={moveHandler:w=>g(w.clientX),upHandler:w=>{f==null||f.removeEventListener("mousemove",h.moveHandler),f==null||f.removeEventListener("mouseup",h.upHandler),p(w.clientX)}},m={moveHandler:w=>(w.cancelable&&(w.preventDefault(),w.stopPropagation()),g(w.touches[0].clientX),!1),upHandler:w=>{var k;f==null||f.removeEventListener("touchmove",m.moveHandler),f==null||f.removeEventListener("touchend",m.upHandler),w.cancelable&&(w.preventDefault(),w.stopPropagation()),p((k=w.touches[0])==null?void 0:k.clientX)}},v=im()?{passive:!1}:!1;jr(i)?(f==null||f.addEventListener("touchmove",m.moveHandler,v),f==null||f.addEventListener("touchend",m.upHandler,v)):(f==null||f.addEventListener("mousemove",h.moveHandler,v),f==null||f.addEventListener("mouseup",h.upHandler,v)),t.setColumnSizingInfo(w=>({...w,startOffset:u,startSize:s,deltaOffset:0,deltaPercentage:0,columnSizingStart:a,isResizingColumn:r.id}))}}},createTable:e=>{e.setColumnSizing=t=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(t),e.setColumnSizingInfo=t=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(t),e.resetColumnSizing=t=>{var n;e.setColumnSizing(t?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=t=>{var n;e.setColumnSizingInfo(t?Ir():(n=e.initialState.columnSizingInfo)!=null?n:Ir())},e.getTotalSize=()=>{var t,n;return(t=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((r,o)=>r+o.getSize(),0))!=null?t:0},e.getLeftTotalSize=()=>{var t,n;return(t=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((r,o)=>r+o.getSize(),0))!=null?t:0},e.getCenterTotalSize=()=>{var t,n;return(t=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((r,o)=>r+o.getSize(),0))!=null?t:0},e.getRightTotalSize=()=>{var t,n;return(t=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((r,o)=>r+o.getSize(),0))!=null?t:0}}};let Vn=null;function im(){if(typeof Vn=="boolean")return Vn;let e=!1;try{const t={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,t),window.removeEventListener("test",n)}catch{e=!1}return Vn=e,Vn}function jr(e){return e.type==="touchstart"}const sm={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:Le("columnVisibility",e)}),createColumn:(e,t)=>{e.toggleVisibility=n=>{e.getCanHide()&&t.setColumnVisibility(r=>({...r,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,r;const o=e.columns;return(n=o.length?o.some(i=>i.getIsVisible()):(r=t.getState().columnVisibility)==null?void 0:r[e.id])!=null?n:!0},e.getCanHide=()=>{var n,r;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((r=t.options.enableHiding)!=null?r:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,t)=>{e._getAllVisibleCells=J(()=>[e.getAllCells(),t.getState().columnVisibility],n=>n.filter(r=>r.column.getIsVisible()),Z(t.options,"debugRows","_getAllVisibleCells")),e.getVisibleCells=J(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,r,o)=>[...n,...r,...o],Z(t.options,"debugRows","getVisibleCells"))},createTable:e=>{const t=(n,r)=>J(()=>[r(),r().filter(o=>o.getIsVisible()).map(o=>o.id).join("_")],o=>o.filter(i=>i.getIsVisible==null?void 0:i.getIsVisible()),Z(e.options,"debugColumns",n));e.getVisibleFlatColumns=t("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=t("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=t("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=t("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=t("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var r;e.setColumnVisibility(n?{}:(r=e.initialState.columnVisibility)!=null?r:{})},e.toggleAllColumnsVisible=n=>{var r;n=(r=n)!=null?r:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((o,i)=>({...o,[i.id]:n||!(i.getCanHide!=null&&i.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var r;e.toggleAllColumnsVisible((r=n.target)==null?void 0:r.checked)}}};function hn(e,t){return t?t==="center"?e.getCenterVisibleLeafColumns():t==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const am={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},lm={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:Le("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:t=>{var n;const r=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[t.id])==null?void 0:n.getValue();return typeof r=="string"||typeof r=="number"}}),createColumn:(e,t)=>{e.getCanGlobalFilter=()=>{var n,r,o,i;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((r=t.options.enableGlobalFilter)!=null?r:!0)&&((o=t.options.enableFilters)!=null?o:!0)&&((i=t.options.getColumnCanGlobalFilter==null?void 0:t.options.getColumnCanGlobalFilter(e))!=null?i:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>nt.includesString,e.getGlobalFilterFn=()=>{var t,n;const{globalFilterFn:r}=e.options;return gr(r)?r:r==="auto"?e.getGlobalAutoFilterFn():(t=(n=e.options.filterFns)==null?void 0:n[r])!=null?t:nt[r]},e.setGlobalFilter=t=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(t)},e.resetGlobalFilter=t=>{e.setGlobalFilter(t?void 0:e.initialState.globalFilter)}}},um={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:Le("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let t=!1,n=!1;e._autoResetExpanded=()=>{var r,o;if(!t){e._queue(()=>{t=!0});return}if((r=(o=e.options.autoResetAll)!=null?o:e.options.autoResetExpanded)!=null?r:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=r=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(r),e.toggleAllRowsExpanded=r=>{r??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=r=>{var o,i;e.setExpanded(r?{}:(o=(i=e.initialState)==null?void 0:i.expanded)!=null?o:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(r=>r.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>r=>{r.persist==null||r.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const r=e.getState().expanded;return r===!0||Object.values(r).some(Boolean)},e.getIsAllRowsExpanded=()=>{const r=e.getState().expanded;return typeof r=="boolean"?r===!0:!(!Object.keys(r).length||e.getRowModel().flatRows.some(o=>!o.getIsExpanded()))},e.getExpandedDepth=()=>{let r=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(i=>{const s=i.split(".");r=Math.max(r,s.length)}),r},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,t)=>{e.toggleExpanded=n=>{t.setExpanded(r=>{var o;const i=r===!0?!0:!!(r!=null&&r[e.id]);let s={};if(r===!0?Object.keys(t.getRowModel().rowsById).forEach(a=>{s[a]=!0}):s=r,n=(o=n)!=null?o:!i,!i&&n)return{...s,[e.id]:!0};if(i&&!n){const{[e.id]:a,...u}=s;return u}return r})},e.getIsExpanded=()=>{var n;const r=t.getState().expanded;return!!((n=t.options.getIsRowExpanded==null?void 0:t.options.getIsRowExpanded(e))!=null?n:r===!0||r!=null&&r[e.id])},e.getCanExpand=()=>{var n,r,o;return(n=t.options.getRowCanExpand==null?void 0:t.options.getRowCanExpand(e))!=null?n:((r=t.options.enableExpanding)!=null?r:!0)&&!!((o=e.subRows)!=null&&o.length)},e.getIsAllParentsExpanded=()=>{let n=!0,r=e;for(;n&&r.parentId;)r=t.getRow(r.parentId,!0),n=r.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},Qr=0,eo=10,Fr=()=>({pageIndex:Qr,pageSize:eo}),cm={getInitialState:e=>({...e,pagination:{...Fr(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:Le("pagination",e)}),createTable:e=>{let t=!1,n=!1;e._autoResetPageIndex=()=>{var r,o;if(!t){e._queue(()=>{t=!0});return}if((r=(o=e.options.autoResetAll)!=null?o:e.options.autoResetPageIndex)!=null?r:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=r=>{const o=i=>pt(r,i);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(o)},e.resetPagination=r=>{var o;e.setPagination(r?Fr():(o=e.initialState.pagination)!=null?o:Fr())},e.setPageIndex=r=>{e.setPagination(o=>{let i=pt(r,o.pageIndex);const s=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return i=Math.max(0,Math.min(i,s)),{...o,pageIndex:i}})},e.resetPageIndex=r=>{var o,i;e.setPageIndex(r?Qr:(o=(i=e.initialState)==null||(i=i.pagination)==null?void 0:i.pageIndex)!=null?o:Qr)},e.resetPageSize=r=>{var o,i;e.setPageSize(r?eo:(o=(i=e.initialState)==null||(i=i.pagination)==null?void 0:i.pageSize)!=null?o:eo)},e.setPageSize=r=>{e.setPagination(o=>{const i=Math.max(1,pt(r,o.pageSize)),s=o.pageSize*o.pageIndex,a=Math.floor(s/i);return{...o,pageIndex:a,pageSize:i}})},e.setPageCount=r=>e.setPagination(o=>{var i;let s=pt(r,(i=e.options.pageCount)!=null?i:-1);return typeof s=="number"&&(s=Math.max(-1,s)),{...o,pageCount:s}}),e.getPageOptions=J(()=>[e.getPageCount()],r=>{let o=[];return r&&r>0&&(o=[...new Array(r)].fill(null).map((i,s)=>s)),o},Z(e.options,"debugTable","getPageOptions")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:r}=e.getState().pagination,o=e.getPageCount();return o===-1?!0:o===0?!1:r<o-1},e.previousPage=()=>e.setPageIndex(r=>r-1),e.nextPage=()=>e.setPageIndex(r=>r+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var r;return(r=e.options.pageCount)!=null?r:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var r;return(r=e.options.rowCount)!=null?r:e.getPrePaginationRowModel().rows.length}}},Ar=()=>({top:[],bottom:[]}),dm={getInitialState:e=>({rowPinning:Ar(),...e}),getDefaultOptions:e=>({onRowPinningChange:Le("rowPinning",e)}),createRow:(e,t)=>{e.pin=(n,r,o)=>{const i=r?e.getLeafRows().map(u=>{let{id:c}=u;return c}):[],s=o?e.getParentRows().map(u=>{let{id:c}=u;return c}):[],a=new Set([...s,e.id,...i]);t.setRowPinning(u=>{var c,d;if(n==="bottom"){var g,p;return{top:((g=u==null?void 0:u.top)!=null?g:[]).filter(m=>!(a!=null&&a.has(m))),bottom:[...((p=u==null?void 0:u.bottom)!=null?p:[]).filter(m=>!(a!=null&&a.has(m))),...Array.from(a)]}}if(n==="top"){var f,h;return{top:[...((f=u==null?void 0:u.top)!=null?f:[]).filter(m=>!(a!=null&&a.has(m))),...Array.from(a)],bottom:((h=u==null?void 0:u.bottom)!=null?h:[]).filter(m=>!(a!=null&&a.has(m)))}}return{top:((c=u==null?void 0:u.top)!=null?c:[]).filter(m=>!(a!=null&&a.has(m))),bottom:((d=u==null?void 0:u.bottom)!=null?d:[]).filter(m=>!(a!=null&&a.has(m)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:r,enablePinning:o}=t.options;return typeof r=="function"?r(e):(n=r??o)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:r,bottom:o}=t.getState().rowPinning,i=n.some(a=>r==null?void 0:r.includes(a)),s=n.some(a=>o==null?void 0:o.includes(a));return i?"top":s?"bottom":!1},e.getPinnedIndex=()=>{var n,r;const o=e.getIsPinned();if(!o)return-1;const i=(n=t._getPinnedRows(o))==null?void 0:n.map(s=>{let{id:a}=s;return a});return(r=i==null?void 0:i.indexOf(e.id))!=null?r:-1}},createTable:e=>{e.setRowPinning=t=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(t),e.resetRowPinning=t=>{var n,r;return e.setRowPinning(t?Ar():(n=(r=e.initialState)==null?void 0:r.rowPinning)!=null?n:Ar())},e.getIsSomeRowsPinned=t=>{var n;const r=e.getState().rowPinning;if(!t){var o,i;return!!((o=r.top)!=null&&o.length||(i=r.bottom)!=null&&i.length)}return!!((n=r[t])!=null&&n.length)},e._getPinnedRows=J(t=>[e.getRowModel().rows,e.getState().rowPinning[t],t],(t,n,r)=>{var o;return((o=e.options.keepPinnedRows)==null||o?(n??[]).map(s=>{const a=e.getRow(s,!0);return a.getIsAllParentsExpanded()?a:null}):(n??[]).map(s=>t.find(a=>a.id===s))).filter(Boolean).map(s=>({...s,position:r}))},Z(e.options,"debugRows","_getPinnedRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=J(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(t,n,r)=>{const o=new Set([...n??[],...r??[]]);return t.filter(i=>!o.has(i.id))},Z(e.options,"debugRows","getCenterRows"))}},pm={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:Le("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=t=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(t),e.resetRowSelection=t=>{var n;return e.setRowSelection(t?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=t=>{e.setRowSelection(n=>{t=typeof t<"u"?t:!e.getIsAllRowsSelected();const r={...n},o=e.getPreGroupedRowModel().flatRows;return t?o.forEach(i=>{i.getCanSelect()&&(r[i.id]=!0)}):o.forEach(i=>{delete r[i.id]}),r})},e.toggleAllPageRowsSelected=t=>e.setRowSelection(n=>{const r=typeof t<"u"?t:!e.getIsAllPageRowsSelected(),o={...n};return e.getRowModel().rows.forEach(i=>{to(o,i.id,r,!0,e)}),o}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=J(()=>[e.getState().rowSelection,e.getCoreRowModel()],(t,n)=>Object.keys(t).length?Dr(e,n):{rows:[],flatRows:[],rowsById:{}},Z(e.options,"debugTable","getSelectedRowModel")),e.getFilteredSelectedRowModel=J(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(t,n)=>Object.keys(t).length?Dr(e,n):{rows:[],flatRows:[],rowsById:{}},Z(e.options,"debugTable","getFilteredSelectedRowModel")),e.getGroupedSelectedRowModel=J(()=>[e.getState().rowSelection,e.getSortedRowModel()],(t,n)=>Object.keys(t).length?Dr(e,n):{rows:[],flatRows:[],rowsById:{}},Z(e.options,"debugTable","getGroupedSelectedRowModel")),e.getIsAllRowsSelected=()=>{const t=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let r=!!(t.length&&Object.keys(n).length);return r&&t.some(o=>o.getCanSelect()&&!n[o.id])&&(r=!1),r},e.getIsAllPageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows.filter(o=>o.getCanSelect()),{rowSelection:n}=e.getState();let r=!!t.length;return r&&t.some(o=>!n[o.id])&&(r=!1),r},e.getIsSomeRowsSelected=()=>{var t;const n=Object.keys((t=e.getState().rowSelection)!=null?t:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:t.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>t=>{e.toggleAllRowsSelected(t.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>t=>{e.toggleAllPageRowsSelected(t.target.checked)}},createRow:(e,t)=>{e.toggleSelected=(n,r)=>{const o=e.getIsSelected();t.setRowSelection(i=>{var s;if(n=typeof n<"u"?n:!o,e.getCanSelect()&&o===n)return i;const a={...i};return to(a,e.id,n,(s=r==null?void 0:r.selectChildren)!=null?s:!0,t),a})},e.getIsSelected=()=>{const{rowSelection:n}=t.getState();return Ao(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=t.getState();return no(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=t.getState();return no(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof t.options.enableRowSelection=="function"?t.options.enableRowSelection(e):(n=t.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof t.options.enableSubRowSelection=="function"?t.options.enableSubRowSelection(e):(n=t.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof t.options.enableMultiRowSelection=="function"?t.options.enableMultiRowSelection(e):(n=t.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return r=>{var o;n&&e.toggleSelected((o=r.target)==null?void 0:o.checked)}}}},to=(e,t,n,r,o)=>{var i;const s=o.getRow(t,!0);n?(s.getCanMultiSelect()||Object.keys(e).forEach(a=>delete e[a]),s.getCanSelect()&&(e[t]=!0)):delete e[t],r&&(i=s.subRows)!=null&&i.length&&s.getCanSelectSubRows()&&s.subRows.forEach(a=>to(e,a.id,n,r,o))};function Dr(e,t){const n=e.getState().rowSelection,r=[],o={},i=function(s,a){return s.map(u=>{var c;const d=Ao(u,n);if(d&&(r.push(u),o[u.id]=u),(c=u.subRows)!=null&&c.length&&(u={...u,subRows:i(u.subRows)}),d)return u}).filter(Boolean)};return{rows:i(t.rows),flatRows:r,rowsById:o}}function Ao(e,t){var n;return(n=t[e.id])!=null?n:!1}function no(e,t,n){var r;if(!((r=e.subRows)!=null&&r.length))return!1;let o=!0,i=!1;return e.subRows.forEach(s=>{if(!(i&&!o)&&(s.getCanSelect()&&(Ao(s,t)?i=!0:o=!1),s.subRows&&s.subRows.length)){const a=no(s,t);a==="all"?i=!0:(a==="some"&&(i=!0),o=!1)}}),o?"all":i?"some":!1}const ro=/([0-9]+)/gm,fm=(e,t,n)=>ka(gt(e.getValue(n)).toLowerCase(),gt(t.getValue(n)).toLowerCase()),gm=(e,t,n)=>ka(gt(e.getValue(n)),gt(t.getValue(n))),mm=(e,t,n)=>Do(gt(e.getValue(n)).toLowerCase(),gt(t.getValue(n)).toLowerCase()),hm=(e,t,n)=>Do(gt(e.getValue(n)),gt(t.getValue(n))),vm=(e,t,n)=>{const r=e.getValue(n),o=t.getValue(n);return r>o?1:r<o?-1:0},bm=(e,t,n)=>Do(e.getValue(n),t.getValue(n));function Do(e,t){return e===t?0:e>t?1:-1}function gt(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function ka(e,t){const n=e.split(ro).filter(Boolean),r=t.split(ro).filter(Boolean);for(;n.length&&r.length;){const o=n.shift(),i=r.shift(),s=parseInt(o,10),a=parseInt(i,10),u=[s,a].sort();if(isNaN(u[0])){if(o>i)return 1;if(i>o)return-1;continue}if(isNaN(u[1]))return isNaN(s)?-1:1;if(s>a)return 1;if(a>s)return-1}return n.length-r.length}const sn={alphanumeric:fm,alphanumericCaseSensitive:gm,text:mm,textCaseSensitive:hm,datetime:vm,basic:bm},ym={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:Le("sorting",e),isMultiSortEvent:t=>t.shiftKey}),createColumn:(e,t)=>{e.getAutoSortingFn=()=>{const n=t.getFilteredRowModel().flatRows.slice(10);let r=!1;for(const o of n){const i=o==null?void 0:o.getValue(e.id);if(Object.prototype.toString.call(i)==="[object Date]")return sn.datetime;if(typeof i=="string"&&(r=!0,i.split(ro).length>1))return sn.alphanumeric}return r?sn.text:sn.basic},e.getAutoSortDir=()=>{const n=t.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,r;if(!e)throw new Error;return gr(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(r=t.options.sortingFns)==null?void 0:r[e.columnDef.sortingFn])!=null?n:sn[e.columnDef.sortingFn]},e.toggleSorting=(n,r)=>{const o=e.getNextSortingOrder(),i=typeof n<"u"&&n!==null;t.setSorting(s=>{const a=s==null?void 0:s.find(f=>f.id===e.id),u=s==null?void 0:s.findIndex(f=>f.id===e.id);let c=[],d,g=i?n:o==="desc";if(s!=null&&s.length&&e.getCanMultiSort()&&r?a?d="toggle":d="add":s!=null&&s.length&&u!==s.length-1?d="replace":a?d="toggle":d="replace",d==="toggle"&&(i||o||(d="remove")),d==="add"){var p;c=[...s,{id:e.id,desc:g}],c.splice(0,c.length-((p=t.options.maxMultiSortColCount)!=null?p:Number.MAX_SAFE_INTEGER))}else d==="toggle"?c=s.map(f=>f.id===e.id?{...f,desc:g}:f):d==="remove"?c=s.filter(f=>f.id!==e.id):c=[{id:e.id,desc:g}];return c})},e.getFirstSortDir=()=>{var n,r;return((n=(r=e.columnDef.sortDescFirst)!=null?r:t.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var r,o;const i=e.getFirstSortDir(),s=e.getIsSorted();return s?s!==i&&((r=t.options.enableSortingRemoval)==null||r)&&(!(n&&(o=t.options.enableMultiRemove)!=null)||o)?!1:s==="desc"?"asc":"desc":i},e.getCanSort=()=>{var n,r;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((r=t.options.enableSorting)!=null?r:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,r;return(n=(r=e.columnDef.enableMultiSort)!=null?r:t.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const r=(n=t.getState().sorting)==null?void 0:n.find(o=>o.id===e.id);return r?r.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,r;return(n=(r=t.getState().sorting)==null?void 0:r.findIndex(o=>o.id===e.id))!=null?n:-1},e.clearSorting=()=>{t.setSorting(n=>n!=null&&n.length?n.filter(r=>r.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return r=>{n&&(r.persist==null||r.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?t.options.isMultiSortEvent==null?void 0:t.options.isMultiSortEvent(r):!1))}}},createTable:e=>{e.setSorting=t=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(t),e.resetSorting=t=>{var n,r;e.setSorting(t?[]:(n=(r=e.initialState)==null?void 0:r.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},wm=[zg,sm,nm,rm,Hg,Gg,am,lm,ym,em,um,cm,dm,pm,om];function xm(e){var t,n;process.env.NODE_ENV!=="production"&&(e.debugAll||e.debugTable)&&console.info("Creating Table Instance...");const r=[...wm,...(t=e._features)!=null?t:[]];let o={_features:r};const i=o._features.reduce((p,f)=>Object.assign(p,f.getDefaultOptions==null?void 0:f.getDefaultOptions(o)),{}),s=p=>o.options.mergeOptions?o.options.mergeOptions(i,p):{...i,...p};let u={...{},...(n=e.initialState)!=null?n:{}};o._features.forEach(p=>{var f;u=(f=p.getInitialState==null?void 0:p.getInitialState(u))!=null?f:u});const c=[];let d=!1;const g={_features:r,options:{...i,...e},initialState:u,_queue:p=>{c.push(p),d||(d=!0,Promise.resolve().then(()=>{for(;c.length;)c.shift()();d=!1}).catch(f=>setTimeout(()=>{throw f})))},reset:()=>{o.setState(o.initialState)},setOptions:p=>{const f=pt(p,o.options);o.options=s(f)},getState:()=>o.options.state,setState:p=>{o.options.onStateChange==null||o.options.onStateChange(p)},_getRowId:(p,f,h)=>{var m;return(m=o.options.getRowId==null?void 0:o.options.getRowId(p,f,h))!=null?m:`${h?[h.id,f].join("."):f}`},getCoreRowModel:()=>(o._getCoreRowModel||(o._getCoreRowModel=o.options.getCoreRowModel(o)),o._getCoreRowModel()),getRowModel:()=>o.getPaginationRowModel(),getRow:(p,f)=>{let h=(f?o.getPrePaginationRowModel():o.getRowModel()).rowsById[p];if(!h&&(h=o.getCoreRowModel().rowsById[p],!h))throw process.env.NODE_ENV!=="production"?new Error(`getRow could not find row with ID: ${p}`):new Error;return h},_getDefaultColumnDef:J(()=>[o.options.defaultColumn],p=>{var f;return p=(f=p)!=null?f:{},{header:h=>{const m=h.header.column.columnDef;return m.accessorKey?m.accessorKey:m.accessorFn?m.id:null},cell:h=>{var m,v;return(m=(v=h.renderValue())==null||v.toString==null?void 0:v.toString())!=null?m:null},...o._features.reduce((h,m)=>Object.assign(h,m.getDefaultColumnDef==null?void 0:m.getDefaultColumnDef()),{}),...p}},Z(e,"debugColumns","_getDefaultColumnDef")),_getColumnDefs:()=>o.options.columns,getAllColumns:J(()=>[o._getColumnDefs()],p=>{const f=function(h,m,v){return v===void 0&&(v=0),h.map(w=>{const k=Bg(o,w,v,m),x=w;return k.columns=x.columns?f(x.columns,k,v+1):[],k})};return f(p)},Z(e,"debugColumns","getAllColumns")),getAllFlatColumns:J(()=>[o.getAllColumns()],p=>p.flatMap(f=>f.getFlatColumns()),Z(e,"debugColumns","getAllFlatColumns")),_getAllFlatColumnsById:J(()=>[o.getAllFlatColumns()],p=>p.reduce((f,h)=>(f[h.id]=h,f),{}),Z(e,"debugColumns","getAllFlatColumnsById")),getAllLeafColumns:J(()=>[o.getAllColumns(),o._getOrderColumnsFn()],(p,f)=>{let h=p.flatMap(m=>m.getLeafColumns());return f(h)},Z(e,"debugColumns","getAllLeafColumns")),getColumn:p=>{const f=o._getAllFlatColumnsById()[p];return process.env.NODE_ENV!=="production"&&!f&&console.error(`[Table] Column with id '${p}' does not exist.`),f}};Object.assign(o,g);for(let p=0;p<o._features.length;p++){const f=o._features[p];f==null||f.createTable==null||f.createTable(o)}return o}function Sm(){return e=>J(()=>[e.options.data],t=>{const n={rows:[],flatRows:[],rowsById:{}},r=function(o,i,s){i===void 0&&(i=0);const a=[];for(let c=0;c<o.length;c++){const d=jo(e,e._getRowId(o[c],c,s),o[c],c,i,void 0,s==null?void 0:s.id);if(n.flatRows.push(d),n.rowsById[d.id]=d,a.push(d),e.options.getSubRows){var u;d.originalSubRows=e.options.getSubRows(o[c],c),(u=d.originalSubRows)!=null&&u.length&&(d.subRows=r(d.originalSubRows,i+1,d))}}return a};return n.rows=r(t),n},Z(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Cm(e){const t=[],n=r=>{var o;t.push(r),(o=r.subRows)!=null&&o.length&&r.getIsExpanded()&&r.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}function Em(e,t,n){return n.options.filterFromLeafRows?Rm(e,t,n):Tm(e,t,n)}function Rm(e,t,n){var r;const o=[],i={},s=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(u,c){c===void 0&&(c=0);const d=[];for(let p=0;p<u.length;p++){var g;let f=u[p];const h=jo(n,f.id,f.original,f.index,f.depth,void 0,f.parentId);if(h.columnFilters=f.columnFilters,(g=f.subRows)!=null&&g.length&&c<s){if(h.subRows=a(f.subRows,c+1),f=h,t(f)&&!h.subRows.length){d.push(f),i[f.id]=f,o.push(f);continue}if(t(f)||h.subRows.length){d.push(f),i[f.id]=f,o.push(f);continue}}else f=h,t(f)&&(d.push(f),i[f.id]=f,o.push(f))}return d};return{rows:a(e),flatRows:o,rowsById:i}}function Tm(e,t,n){var r;const o=[],i={},s=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(u,c){c===void 0&&(c=0);const d=[];for(let p=0;p<u.length;p++){let f=u[p];if(t(f)){var g;if((g=f.subRows)!=null&&g.length&&c<s){const m=jo(n,f.id,f.original,f.index,f.depth,void 0,f.parentId);m.subRows=a(f.subRows,c+1),f=m}d.push(f),o.push(f),i[f.id]=f}}return d};return{rows:a(e),flatRows:o,rowsById:i}}function Pm(){return e=>J(()=>[e.getPreFilteredRowModel(),e.getState().columnFilters,e.getState().globalFilter],(t,n,r)=>{if(!t.rows.length||!(n!=null&&n.length)&&!r){for(let p=0;p<t.flatRows.length;p++)t.flatRows[p].columnFilters={},t.flatRows[p].columnFiltersMeta={};return t}const o=[],i=[];(n??[]).forEach(p=>{var f;const h=e.getColumn(p.id);if(!h)return;const m=h.getFilterFn();if(!m){process.env.NODE_ENV!=="production"&&console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${h.id}.`);return}o.push({id:p.id,filterFn:m,resolvedValue:(f=m.resolveFilterValue==null?void 0:m.resolveFilterValue(p.value))!=null?f:p.value})});const s=n.map(p=>p.id),a=e.getGlobalFilterFn(),u=e.getAllLeafColumns().filter(p=>p.getCanGlobalFilter());r&&a&&u.length&&(s.push("__global__"),u.forEach(p=>{var f;i.push({id:p.id,filterFn:a,resolvedValue:(f=a.resolveFilterValue==null?void 0:a.resolveFilterValue(r))!=null?f:r})}));let c,d;for(let p=0;p<t.flatRows.length;p++){const f=t.flatRows[p];if(f.columnFilters={},o.length)for(let h=0;h<o.length;h++){c=o[h];const m=c.id;f.columnFilters[m]=c.filterFn(f,m,c.resolvedValue,v=>{f.columnFiltersMeta[m]=v})}if(i.length){for(let h=0;h<i.length;h++){d=i[h];const m=d.id;if(d.filterFn(f,m,d.resolvedValue,v=>{f.columnFiltersMeta[m]=v})){f.columnFilters.__global__=!0;break}}f.columnFilters.__global__!==!0&&(f.columnFilters.__global__=!1)}}const g=p=>{for(let f=0;f<s.length;f++)if(p.columnFilters[s[f]]===!1)return!1;return!0};return Em(t.rows,g,e)},Z(e.options,"debugTable","getFilteredRowModel",()=>e._autoResetPageIndex()))}function km(e){return t=>J(()=>[t.getState().pagination,t.getPrePaginationRowModel(),t.options.paginateExpandedRows?void 0:t.getState().expanded],(n,r)=>{if(!r.rows.length)return r;const{pageSize:o,pageIndex:i}=n;let{rows:s,flatRows:a,rowsById:u}=r;const c=o*i,d=c+o;s=s.slice(c,d);let g;t.options.paginateExpandedRows?g={rows:s,flatRows:a,rowsById:u}:g=Cm({rows:s,flatRows:a,rowsById:u}),g.flatRows=[];const p=f=>{g.flatRows.push(f),f.subRows.length&&f.subRows.forEach(p)};return g.rows.forEach(p),g},Z(t.options,"debugTable","getPaginationRowModel"))}function Om(){return e=>J(()=>[e.getState().sorting,e.getPreSortedRowModel()],(t,n)=>{if(!n.rows.length||!(t!=null&&t.length))return n;const r=e.getState().sorting,o=[],i=r.filter(u=>{var c;return(c=e.getColumn(u.id))==null?void 0:c.getCanSort()}),s={};i.forEach(u=>{const c=e.getColumn(u.id);c&&(s[u.id]={sortUndefined:c.columnDef.sortUndefined,invertSorting:c.columnDef.invertSorting,sortingFn:c.getSortingFn()})});const a=u=>{const c=u.map(d=>({...d}));return c.sort((d,g)=>{for(let f=0;f<i.length;f+=1){var p;const h=i[f],m=s[h.id],v=m.sortUndefined,w=(p=h==null?void 0:h.desc)!=null?p:!1;let k=0;if(v){const x=d.getValue(h.id),S=g.getValue(h.id),y=x===void 0,T=S===void 0;if(y||T){if(v==="first")return y?-1:1;if(v==="last")return y?1:-1;k=y&&T?0:y?v:-v}}if(k===0&&(k=m.sortingFn(d,g,h.id)),k!==0)return w&&(k*=-1),m.invertSorting&&(k*=-1),k}return d.index-g.index}),c.forEach(d=>{var g;o.push(d),(g=d.subRows)!=null&&g.length&&(d.subRows=a(d.subRows))}),c};return{rows:a(n.rows),flatRows:o,rowsById:n.rowsById}},Z(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function es(e,t){return e?_m(e)?C.createElement(e,t):e:null}function _m(e){return Nm(e)||typeof e=="function"||$m(e)}function Nm(e){return typeof e=="function"&&(()=>{const t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function $m(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function Mm(e){const t={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=C.useState(()=>({current:xm(t)})),[r,o]=C.useState(()=>n.current.initialState);return n.current.setOptions(i=>({...i,...e,state:{...r,...e.state},onStateChange:s=>{o(s),e.onStateChange==null||e.onStateChange(s)}})),n.current}const Oa=C.forwardRef(({className:e,...t},n)=>b.jsx("div",{className:"pr-relative pr-w-full pr-overflow-auto",children:b.jsx("table",{ref:n,className:pe("pr-w-full pr-caption-bottom pr-text-sm",e),...t})}));Oa.displayName="Table";const _a=C.forwardRef(({className:e,...t},n)=>b.jsx("thead",{ref:n,className:pe("[&_tr]:pr-border-b",e),...t}));_a.displayName="TableHeader";const Na=C.forwardRef(({className:e,...t},n)=>b.jsx("tbody",{ref:n,className:pe("[&_tr:last-child]:pr-border-0",e),...t}));Na.displayName="TableBody";const Im=C.forwardRef(({className:e,...t},n)=>b.jsx("tfoot",{ref:n,className:pe("pr-border-t pr-bg-muted/50 pr-font-medium [&>tr]:last:pr-border-b-0",e),...t}));Im.displayName="TableFooter";const Gn=C.forwardRef(({className:e,...t},n)=>b.jsx("tr",{ref:n,className:pe("pr-border-b pr-transition-colors hover:pr-bg-muted/50 data-[state=selected]:pr-bg-muted",e),...t}));Gn.displayName="TableRow";const $a=C.forwardRef(({className:e,...t},n)=>b.jsx("th",{ref:n,className:pe("pr-h-12 pr-px-4 pr-text-left pr-align-middle pr-font-medium pr-text-muted-foreground [&:has([role=checkbox])]:pr-pr-0",e),...t}));$a.displayName="TableHead";const oo=C.forwardRef(({className:e,...t},n)=>b.jsx("td",{ref:n,className:pe("pr-p-4 pr-align-middle [&:has([role=checkbox])]:pr-pr-0",e),...t}));oo.displayName="TableCell";const jm=C.forwardRef(({className:e,...t},n)=>b.jsx("caption",{ref:n,className:pe("pr-mt-4 pr-text-sm pr-text-muted-foreground",e),...t}));jm.displayName="TableCaption";const Fm=Qa.cva("pr-inline-flex pr-items-center pr-justify-center pr-whitespace-nowrap pr-rounded-md pr-text-sm pr-font-medium pr-ring-offset-background pr-transition-colors focus-visible:pr-outline-none focus-visible:pr-ring-2 focus-visible:pr-ring-ring focus-visible:pr-ring-offset-2 disabled:pr-pointer-events-none disabled:pr-opacity-50",{variants:{variant:{default:"pr-bg-primary pr-text-primary-foreground hover:pr-bg-primary/90",destructive:"pr-bg-destructive pr-text-destructive-foreground hover:pr-bg-destructive/90",outline:"pr-border pr-border-input pr-bg-background hover:pr-bg-accent hover:pr-text-accent-foreground",secondary:"pr-bg-secondary pr-text-secondary-foreground hover:pr-bg-secondary/80",ghost:"hover:pr-bg-accent hover:pr-text-accent-foreground",link:"pr-text-primary pr-underline-offset-4 hover:pr-underline"},size:{default:"pr-h-10 pr-px-4 pr-py-2",sm:"pr-h-9 pr-rounded-md pr-px-3",lg:"pr-h-11 pr-rounded-md pr-px-8",icon:"pr-h-10 pr-w-10"}},defaultVariants:{variant:"default",size:"default"}}),ft=C.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{const s=r?Za.Slot:"button";return b.jsx(s,{className:pe(Fm({variant:t,size:n,className:e})),ref:i,...o})});ft.displayName="Button";const Am=we.Root,Dm=we.Value,Ma=C.forwardRef(({className:e,children:t,...n},r)=>b.jsxs(we.Trigger,{ref:r,className:pe("pr-flex pr-h-10 pr-w-full pr-items-center pr-justify-between pr-rounded-md pr-border pr-border-input pr-bg-background pr-px-3 pr-py-2 pr-text-sm pr-ring-offset-background placeholder:pr-text-muted-foreground focus:pr-outline-none focus:pr-ring-2 focus:pr-ring-ring focus:pr-ring-offset-2 disabled:pr-cursor-not-allowed disabled:pr-opacity-50 [&>span]:pr-line-clamp-1",e),...n,children:[t,b.jsx(we.Icon,{asChild:!0,children:b.jsx(Te.ChevronDown,{className:"pr-h-4 pr-w-4 pr-opacity-50"})})]}));Ma.displayName=we.Trigger.displayName;const Ia=C.forwardRef(({className:e,...t},n)=>b.jsx(we.ScrollUpButton,{ref:n,className:pe("pr-flex pr-cursor-default pr-items-center pr-justify-center pr-py-1",e),...t,children:b.jsx(Te.ChevronUp,{className:"pr-h-4 pr-w-4"})}));Ia.displayName=we.ScrollUpButton.displayName;const ja=C.forwardRef(({className:e,...t},n)=>b.jsx(we.ScrollDownButton,{ref:n,className:pe("pr-flex pr-cursor-default pr-items-center pr-justify-center pr-py-1",e),...t,children:b.jsx(Te.ChevronDown,{className:"pr-h-4 pr-w-4"})}));ja.displayName=we.ScrollDownButton.displayName;const Fa=C.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>b.jsx(we.Portal,{children:b.jsxs(we.Content,{ref:o,className:pe("pr-relative pr-z-50 pr-max-h-96 pr-min-w-[8rem] pr-overflow-hidden pr-rounded-md pr-border pr-bg-popover pr-text-popover-foreground pr-shadow-md data-[state=open]:pr-animate-in data-[state=closed]:pr-animate-out data-[state=closed]:pr-fade-out-0 data-[state=open]:pr-fade-in-0 data-[state=closed]:pr-zoom-out-95 data-[state=open]:pr-zoom-in-95 data-[side=bottom]:pr-slide-in-from-top-2 data-[side=left]:pr-slide-in-from-right-2 data-[side=right]:pr-slide-in-from-left-2 data-[side=top]:pr-slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:pr-translate-y-1 data-[side=left]:pr--translate-x-1 data-[side=right]:pr-translate-x-1 data-[side=top]:pr--translate-y-1",e),position:n,...r,children:[b.jsx(Ia,{}),b.jsx(we.Viewport,{className:pe("pr-p-1",n==="popper"&&"pr-h-[var(--radix-select-trigger-height)] pr-w-full pr-min-w-[var(--radix-select-trigger-width)]"),children:t}),b.jsx(ja,{})]})}));Fa.displayName=we.Content.displayName;const Vm=C.forwardRef(({className:e,...t},n)=>b.jsx(we.Label,{ref:n,className:pe("pr-py-1.5 pr-pl-8 pr-pr-2 pr-text-sm pr-font-semibold",e),...t}));Vm.displayName=we.Label.displayName;const Aa=C.forwardRef(({className:e,children:t,...n},r)=>b.jsxs(we.Item,{ref:r,className:pe("pr-relative pr-flex pr-w-full pr-cursor-default pr-select-none pr-items-center pr-rounded-sm pr-py-1.5 pr-pl-8 pr-pr-2 pr-text-sm pr-outline-none focus:pr-bg-accent focus:pr-text-accent-foreground data-[disabled]:pr-pointer-events-none data-[disabled]:pr-opacity-50",e),...n,children:[b.jsx("span",{className:"pr-absolute pr-left-2 pr-flex pr-h-3.5 pr-w-3.5 pr-items-center pr-justify-center",children:b.jsx(we.ItemIndicator,{children:b.jsx(Te.Check,{className:"pr-h-4 pr-w-4"})})}),b.jsx(we.ItemText,{children:t})]}));Aa.displayName=we.Item.displayName;const Lm=C.forwardRef(({className:e,...t},n)=>b.jsx(we.Separator,{ref:n,className:pe("pr--mx-1 pr-my-1 pr-h-px pr-bg-muted",e),...t}));Lm.displayName=we.Separator.displayName;function Bm({table:e}){return b.jsx("div",{className:"pr-flex pr-items-center pr-justify-between pr-px-2 pr-pb-3 pr-pt-3",children:b.jsxs("div",{className:"pr-flex pr-items-center pr-space-x-6 lg:pr-space-x-8",children:[b.jsxs("div",{className:"pr-flex-1 pr-text-sm pr-text-muted-foreground",children:[e.getFilteredSelectedRowModel().rows.length," of"," ",e.getFilteredRowModel().rows.length," row(s) selected"]}),b.jsxs("div",{className:"pr-flex pr-items-center pr-space-x-2",children:[b.jsx("p",{className:"pr-text-nowrap pr-text-sm pr-font-medium",children:"Rows per page"}),b.jsxs(Am,{value:`${e.getState().pagination.pageSize}`,onValueChange:t=>{e.setPageSize(Number(t))},children:[b.jsx(Ma,{className:"pr-h-8 pr-w-[70px]",children:b.jsx(Dm,{placeholder:e.getState().pagination.pageSize})}),b.jsx(Fa,{side:"top",children:[10,20,30,40,50].map(t=>b.jsx(Aa,{value:`${t}`,children:t},t))})]})]}),b.jsxs("div",{className:"pr-flex pr-w-[100px] pr-items-center pr-justify-center pr-text-sm pr-font-medium",children:["Page ",e.getState().pagination.pageIndex+1," of ",e.getPageCount()]}),b.jsxs("div",{className:"pr-flex pr-items-center pr-space-x-2",children:[b.jsxs(ft,{variant:"outline",size:"icon",className:"pr-hidden pr-h-8 pr-w-8 pr-p-0 lg:pr-flex",onClick:()=>e.setPageIndex(0),disabled:!e.getCanPreviousPage(),children:[b.jsx("span",{className:"pr-sr-only",children:"Go to first page"}),b.jsx(Te.ArrowLeftIcon,{className:"pr-h-4 pr-w-4"})]}),b.jsxs(ft,{variant:"outline",size:"icon",className:"pr-h-8 pr-w-8 pr-p-0",onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:[b.jsx("span",{className:"pr-sr-only",children:"Go to previous page"}),b.jsx(Te.ChevronLeftIcon,{className:"pr-h-4 pr-w-4"})]}),b.jsxs(ft,{variant:"outline",size:"icon",className:"pr-h-8 pr-w-8 pr-p-0",onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:[b.jsx("span",{className:"pr-sr-only",children:"Go to next page"}),b.jsx(Te.ChevronRightIcon,{className:"pr-h-4 pr-w-4"})]}),b.jsxs(ft,{variant:"outline",size:"icon",className:"pr-hidden pr-h-8 pr-w-8 pr-p-0 lg:pr-flex",onClick:()=>e.setPageIndex(e.getPageCount()-1),disabled:!e.getCanNextPage(),children:[b.jsx("span",{className:"pr-sr-only",children:"Go to last page"}),b.jsx(Te.ArrowRightIcon,{className:"pr-h-4 pr-w-4"})]})]})]})})}function zm({table:e}){return b.jsxs(ls,{children:[b.jsx(ts.DropdownMenuTrigger,{asChild:!0,children:b.jsxs(ft,{variant:"outline",size:"sm",className:"pr-ml-auto pr-hidden pr-h-8 lg:pr-flex",children:[b.jsx(Te.FilterIcon,{className:"pr-mr-2 pr-h-4 pr-w-4"}),"View"]})}),b.jsxs(lo,{align:"end",className:"pr-w-[150px]",children:[b.jsx(tr,{children:"Toggle columns"}),b.jsx(uo,{}),e.getAllColumns().filter(t=>t.getCanHide()).map(t=>b.jsx(cs,{className:"pr-capitalize",checked:t.getIsVisible(),onCheckedChange:n=>t.toggleVisibility(!!n),children:t.id},t.id))]})]})}function Hm({columns:e,data:t,showPaginationControls:n=!1,showColumnVisibilityControls:r=!1}){var f,h;const[o,i]=H.useState([]),[s,a]=H.useState([]),[u,c]=H.useState({}),[d,g]=H.useState({}),p=Mm({data:t,columns:e,getCoreRowModel:Sm(),getPaginationRowModel:km(),onSortingChange:i,getSortedRowModel:Om(),onColumnFiltersChange:a,getFilteredRowModel:Pm(),onColumnVisibilityChange:c,onRowSelectionChange:g,state:{sorting:o,columnFilters:s,columnVisibility:u,rowSelection:d}});return b.jsxs("div",{children:[b.jsx("div",{className:"pr-flex pr-items-center pr-py-4",children:b.jsx(co,{placeholder:"Filter emails...",value:((f=p.getColumn("email"))==null?void 0:f.getFilterValue())??"",onChange:m=>{var v;return(v=p.getColumn("email"))==null?void 0:v.setFilterValue(m.target.value)},className:"pr-max-w pr-border pr-border-b-slate-100"})}),r&&b.jsx(zm,{table:p}),b.jsx("div",{className:"pr-rounded-md pr-border",children:b.jsxs(Oa,{children:[b.jsx(_a,{children:p.getHeaderGroups().map(m=>b.jsx(Gn,{children:m.headers.map(v=>b.jsx($a,{children:v.isPlaceholder?void 0:es(v.column.columnDef.header,v.getContext())},v.id))},m.id))}),b.jsx(Na,{children:(h=p.getRowModel().rows)!=null&&h.length?p.getRowModel().rows.map(m=>b.jsx(Gn,{"data-state":m.getIsSelected()&&"selected",children:m.getVisibleCells().map(v=>b.jsx(oo,{children:es(v.column.columnDef.cell,v.getContext())},v.id))},m.id)):b.jsx(Gn,{children:b.jsx(oo,{colSpan:e.length,className:"pr-h-24 pr-text-center",children:"No results."})})})]})}),b.jsxs("div",{className:"pr-flex pr-items-center pr-justify-end pr-space-x-2 pr-py-4",children:[b.jsx(ft,{variant:"outline",size:"sm",onClick:()=>p.previousPage(),disabled:!p.getCanPreviousPage(),children:"Previous"}),b.jsx(ft,{variant:"outline",size:"sm",onClick:()=>p.nextPage(),disabled:!p.getCanNextPage(),children:"Next"})]}),n&&b.jsx(Bm,{table:p})]})}function Gm({menuProvider:e,commandHandler:t,className:n,id:r,children:o}){const i=H.useRef(void 0);return b.jsx("div",{ref:i,style:{position:"relative"},children:b.jsx(me.AppBar,{position:"static",id:r,children:b.jsxs(me.Toolbar,{className:`papi-toolbar ${n??""}`,variant:"dense",children:[e?b.jsx(ya,{commandHandler:t,containerRef:i,menuProvider:e}):void 0,o?b.jsx("div",{className:"papi-toolbar-children",children:o}):void 0]})})})}const Um=(e,t)=>{H.useEffect(()=>{if(!e)return()=>{};const n=e(t);return()=>{n()}},[e,t])},Vr=()=>!1,qm=(e,t)=>{const[n]=Qn(H.useCallback(async()=>{if(!e)return Vr;const r=await Promise.resolve(e(t));return async()=>r()},[t,e]),Vr,{preserveValue:!1});H.useEffect(()=>()=>{n!==Vr&&n()},[n])};exports.BookChapterControl=Ol;exports.Button=_l;exports.ChapterRangeSelector=Nl;exports.Checkbox=ds;exports.ComboBox=Br;exports.ContextMenu=kg;exports.DataTable=Hm;exports.GridMenu=aa;exports.HamburgerMenuButton=ya;exports.IconButton=Ng;exports.LabelPosition=St;exports.MenuItem=$o;exports.SearchBar=$g;exports.Slider=Mg;exports.Snackbar=Ig;exports.Switch=jg;exports.Table=Ag;exports.TextField=Io;exports.Toolbar=Gm;exports.useEvent=Um;exports.useEventAsync=qm;exports.usePromise=Qn;function Wm(e,t="top"){if(!e||typeof document>"u")return;const n=document.head||document.querySelector("head"),r=n.querySelector(":first-child"),o=document.createElement("style");o.appendChild(document.createTextNode(e)),t==="top"&&r?n.insertBefore(o,r):n.appendChild(o)}Wm(`.papi-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
}

.papi-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-button.secondary {
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  color: #333;
}

.papi-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-button.video {
  background-color: red;
  color: white;
}

.papi-button.video a,
.papi-button.video a:visited {
  color: white;
  text-decoration: none;
}

.papi-button.video a:hover {
  color: white;
  text-decoration: underline;
}
.papi-switch {
  background-color: transparent;
}

.papi-switch.primary {
  background-color: #1ea7fd;
}

.papi-switch.secondary {
  background-color: #6fc8ff;
}

.papi-switch.error {
  background-color: #f00;
}

.papi-switch.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-switch.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-slider {
  background-color: transparent;
  color: #1ea7fd;
}

.papi-slider.vertical {
  min-height: 200px;
}

.papi-slider.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-slider.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-snackbar {
  font-family: Arial, Helvetica, sans-serif;
}

.papi-snackbar.primary {
  background: #1ea7fd;
  color: white;
}

.papi-snackbar.external {
  background-color: lightsteelblue;
  border-color: white;
  border-style: dotted;
  padding: 2%;
  width: 30%;
}

.papi-snackbar.secondary {
  background: transparent;
  color: #333;
}

.papi-snackbar.alert {
  background: lightcoral;
}

.papi-snackbar.paratext {
  background: darkgreen;
  color: greenyellow;
}

.papi-snackbar.bright {
  background: greenyellow;
  color: darkgreen;
}
.papi-checkbox {
  background-color: transparent;
}

.papi-checkbox.error {
  color: #f00;
}

.papi-checkbox.error:hover {
  background-color: rgba(255, 0, 0, 0.2);
}

.papi-checkbox.paratext {
  color: greenyellow;
}

.papi-checkbox-label.paratext {
  color: darkgreen;
}

.papi-checkbox.paratext:hover {
  background-color: rgba(0, 100, 0, 0.3);
}

.papi-checkbox.paratext.bright {
  color: darkgreen;
}

.papi-checkbox-label.paratext.bright {
  background-color: greenyellow;
}

.papi-checkbox.paratext.bright:hover {
  background-color: rgba(173, 255, 47, 0.3);
}

.papi-checkbox.below,
.papi-checkbox.above {
  text-align: center;
}
.papi-icon-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
}

.papi-icon-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-icon-button.secondary {
  background-color: transparent;
  color: #333;
}

.papi-icon-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-icon-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.search-bar-paper {
  display: flex;
  align-items: center;
}

.search-button {
  padding: 10px;
}
.papi-context-menu-target {
  white-space: nowrap;
  cursor: context-menu;
}

.papi-context-menu-target * {
  white-space: normal;
}

.papi-context-menu-target:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07); /* Faint shadowy background */
}

.papi-context-menu-target.paratext:hover {
  box-shadow: 0 0 10px rgba(0, 100, 0, 0.07); /* Faint shadowy background */
}

.papi-context-menu-target.paratext.bright:hover {
  box-shadow: 0 0 10px rgba(173, 255, 47, 0.07); /* Faint shadowy background */
}

.papi-context-menu.paratext ul {
  background-color: rgb(76, 106, 76);
  color: rgb(214, 255, 152);
}

.papi-context-menu.paratext.bright ul {
  color: rgb(76, 106, 76);
  background-color: rgb(214, 255, 152);
}
.papi-menu-item {
  background-color: transparent;
}

.papi-menu-icon-trailing {
  margin-left: 10px;
  place-content: flex-end;
}

.papi-menu-item img {
  max-width: 24px;
  max-height: 24px;
}
.papi-combo-box {
  background-color: transparent;
}

.papi-combo-box.fullwidth {
  width: 100%;
}

.papi-combo-box.error {
  background-color: #f00;
}

.papi-combo-box.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-combo-box.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-toolbar {
  background-color: #eee;
  color: black;
}

.papi-toolbar.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-toolbar.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-menu-drawer-paper {
  height: fit-content !important;
  position: absolute !important;
}

.papi-toolbar-children {
  padding: 10px;
  position: relative;
}
.papi-multi-column-menu {
  background-color: rgb(222, 222, 222);
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  padding-right: 3px;
}

.papi-menu-column {
  font-size: 11pt;
  font-weight: 600;
  padding-bottom: 2px;
}

.papi-menu-column ul {
  padding-top: 0;
}

.papi-menu-column-header {
  background-color: rgb(181, 181, 181);
  padding-left: 24px;
  margin-top: 0;
  margin-bottom: 0;
}

.papi-multi-column-menu.paratext {
  background-color: rgb(76, 106, 76);
  color: rgb(214, 255, 152);
}

.papi-multi-column-menu.paratext.bright {
  color: rgb(76, 106, 76);
  background-color: rgb(214, 255, 152);
}
/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}
  @font-face {
    font-family: 'Inter';
    font-display: 'swap';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  }

  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }
  * {
  border-color: hsl(var(--border));
}

  body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.pr-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pr-absolute {
  position: absolute;
}
.pr-relative {
  position: relative;
}
.pr-left-2 {
  left: 0.5rem;
}
.pr-right-3 {
  right: 0.75rem;
}
.pr-top-1\\/2 {
  top: 50%;
}
.pr-z-50 {
  z-index: 50;
}
.pr-m-3 {
  margin: 0.75rem;
}
.pr--mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.pr-my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.pr-ml-2 {
  margin-left: 0.5rem;
}
.pr-ml-3 {
  margin-left: 0.75rem;
}
.pr-ml-auto {
  margin-left: auto;
}
.pr-mr-2 {
  margin-right: 0.5rem;
}
.pr-mt-4 {
  margin-top: 1rem;
}
.pr-box-border {
  box-sizing: border-box;
}
.pr-inline-block {
  display: inline-block;
}
.pr-flex {
  display: flex;
}
.pr-inline-flex {
  display: inline-flex;
}
.pr-hidden {
  display: none;
}
.pr-h-10 {
  height: 2.5rem;
}
.pr-h-11 {
  height: 2.75rem;
}
.pr-h-12 {
  height: 3rem;
}
.pr-h-2 {
  height: 0.5rem;
}
.pr-h-24 {
  height: 6rem;
}
.pr-h-3 {
  height: 0.75rem;
}
.pr-h-3\\.5 {
  height: 0.875rem;
}
.pr-h-4 {
  height: 1rem;
}
.pr-h-8 {
  height: 2rem;
}
.pr-h-9 {
  height: 2.25rem;
}
.pr-h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.pr-h-px {
  height: 1px;
}
.pr-max-h-96 {
  max-height: 24rem;
}
.pr-w-10 {
  width: 2.5rem;
}
.pr-w-2 {
  width: 0.5rem;
}
.pr-w-3 {
  width: 0.75rem;
}
.pr-w-3\\.5 {
  width: 0.875rem;
}
.pr-w-4 {
  width: 1rem;
}
.pr-w-8 {
  width: 2rem;
}
.pr-w-\\[100px\\] {
  width: 100px;
}
.pr-w-\\[150px\\] {
  width: 150px;
}
.pr-w-\\[70px\\] {
  width: 70px;
}
.pr-w-full {
  width: 100%;
}
.pr-min-w-\\[8rem\\] {
  min-width: 8rem;
}
.pr-min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.pr-flex-1 {
  flex: 1 1 0%;
}
.pr-shrink-0 {
  flex-shrink: 0;
}
.pr-caption-bottom {
  caption-side: bottom;
}
.pr--translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.pr-transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.pr-cursor-default {
  cursor: default;
}
.pr-cursor-pointer {
  cursor: pointer;
}
.pr-select-none {
  user-select: none;
}
.pr-flex-wrap {
  flex-wrap: wrap;
}
.pr-items-start {
  align-items: flex-start;
}
.pr-items-center {
  align-items: center;
}
.pr-justify-start {
  justify-content: flex-start;
}
.pr-justify-end {
  justify-content: flex-end;
}
.pr-justify-center {
  justify-content: center;
}
.pr-justify-between {
  justify-content: space-between;
}
.pr-gap-2 {
  gap: 0.5rem;
}
.pr-gap-2\\.5 {
  gap: 0.625rem;
}
.pr-space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.pr-space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.pr-self-stretch {
  align-self: stretch;
}
.pr-overflow-auto {
  overflow: auto;
}
.pr-overflow-hidden {
  overflow: hidden;
}
.pr-overflow-y-auto {
  overflow-y: auto;
}
.pr-whitespace-nowrap {
  white-space: nowrap;
}
.pr-text-nowrap {
  text-wrap: nowrap;
}
.pr-rounded-lg {
  border-radius: var(--radius);
}
.pr-rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.pr-rounded-sm {
  border-radius: calc(var(--radius) - 4px);
}
.pr-border {
  border-width: 1px;
}
.pr-border-b {
  border-bottom-width: 1px;
}
.pr-border-b-0 {
  border-bottom-width: 0px;
}
.pr-border-l-2 {
  border-left-width: 2px;
}
.pr-border-r-0 {
  border-right-width: 0px;
}
.pr-border-t {
  border-top-width: 1px;
}
.pr-border-t-0 {
  border-top-width: 0px;
}
.pr-border-solid {
  border-style: solid;
}
.pr-border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.pr-border-input {
  border-color: hsl(var(--input));
}
.pr-border-primary {
  border-color: hsl(var(--primary));
}
.pr-border-b-slate-100 {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(241 245 249 / var(--tw-border-opacity));
}
.pr-border-l-indigo-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(199 210 254 / var(--tw-border-opacity));
}
.pr-border-l-purple-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(233 213 255 / var(--tw-border-opacity));
}
.pr-border-l-red-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 202 202 / var(--tw-border-opacity));
}
.pr-bg-amber-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity));
}
.pr-bg-amber-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 230 138 / var(--tw-bg-opacity));
}
.pr-bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity));
}
.pr-bg-background {
  background-color: hsl(var(--background));
}
.pr-bg-destructive {
  background-color: hsl(var(--destructive));
}
.pr-bg-muted {
  background-color: hsl(var(--muted));
}
.pr-bg-muted\\/50 {
  background-color: hsl(var(--muted) / 0.5);
}
.pr-bg-popover {
  background-color: hsl(var(--popover));
}
.pr-bg-primary {
  background-color: hsl(var(--primary));
}
.pr-bg-secondary {
  background-color: hsl(var(--secondary));
}
.pr-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.pr-fill-current {
  fill: currentColor;
}
.pr-p-0 {
  padding: 0px;
}
.pr-p-1 {
  padding: 0.25rem;
}
.pr-p-2 {
  padding: 0.5rem;
}
.pr-p-4 {
  padding: 1rem;
}
.pr-px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.pr-px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.pr-px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.pr-px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.pr-py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.pr-py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.pr-py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pr-py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pr-pb-3 {
  padding-bottom: 0.75rem;
}
.pr-pl-4 {
  padding-left: 1rem;
}
.pr-pl-8 {
  padding-left: 2rem;
}
.pr-pr-2 {
  padding-right: 0.5rem;
}
.pr-pr-3 {
  padding-right: 0.75rem;
}
.pr-pt-3 {
  padding-top: 0.75rem;
}
.pr-text-left {
  text-align: left;
}
.pr-text-center {
  text-align: center;
}
.pr-text-right {
  text-align: right;
}
.pr-align-middle {
  vertical-align: middle;
}
.pr-text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.pr-text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.pr-font-bold {
  font-weight: 700;
}
.pr-font-medium {
  font-weight: 500;
}
.pr-font-normal {
  font-weight: 400;
}
.pr-font-semibold {
  font-weight: 600;
}
.pr-capitalize {
  text-transform: capitalize;
}
.pr-tracking-widest {
  letter-spacing: 0.1em;
}
.pr-text-amber-800 {
  --tw-text-opacity: 1;
  color: rgb(146 64 14 / var(--tw-text-opacity));
}
.pr-text-amber-900 {
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity));
}
.pr-text-current {
  color: currentColor;
}
.pr-text-destructive-foreground {
  color: hsl(var(--destructive-foreground));
}
.pr-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.pr-text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.pr-text-muted-foreground\\/70 {
  color: hsl(var(--muted-foreground) / 0.7);
}
.pr-text-popover-foreground {
  color: hsl(var(--popover-foreground));
}
.pr-text-primary {
  color: hsl(var(--primary));
}
.pr-text-primary-foreground {
  color: hsl(var(--primary-foreground));
}
.pr-text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}
.pr-text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}
.pr-text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}
.pr-text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}
.pr-underline-offset-4 {
  text-underline-offset: 4px;
}
.pr-opacity-50 {
  opacity: 0.5;
}
.pr-opacity-60 {
  opacity: 0.6;
}
.pr-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.pr-shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.pr-shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.pr-outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.pr-ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.pr-transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.file\\:pr-border-0::file-selector-button {
  border-width: 0px;
}
.file\\:pr-bg-transparent::file-selector-button {
  background-color: transparent;
}
.file\\:pr-text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.file\\:pr-font-medium::file-selector-button {
  font-weight: 500;
}
.placeholder\\:pr-text-muted-foreground::placeholder {
  color: hsl(var(--muted-foreground));
}
.hover\\:pr-bg-accent:hover {
  background-color: hsl(var(--accent));
}
.hover\\:pr-bg-destructive\\/90:hover {
  background-color: hsl(var(--destructive) / 0.9);
}
.hover\\:pr-bg-muted\\/50:hover {
  background-color: hsl(var(--muted) / 0.5);
}
.hover\\:pr-bg-primary\\/90:hover {
  background-color: hsl(var(--primary) / 0.9);
}
.hover\\:pr-bg-secondary\\/80:hover {
  background-color: hsl(var(--secondary) / 0.8);
}
.hover\\:pr-text-accent-foreground:hover {
  color: hsl(var(--accent-foreground));
}
.hover\\:pr-underline:hover {
  text-decoration-line: underline;
}
.focus\\:pr-bg-accent:focus {
  background-color: hsl(var(--accent));
}
.focus\\:pr-text-accent-foreground:focus {
  color: hsl(var(--accent-foreground));
}
.focus\\:pr-outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:pr-ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:pr-ring-ring:focus {
  --tw-ring-color: hsl(var(--ring));
}
.focus\\:pr-ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:pr-outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-visible\\:pr-ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:pr-ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}
.focus-visible\\:pr-ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}
.disabled\\:pr-pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\\:pr-cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:pr-opacity-50:disabled {
  opacity: 0.5;
}
.data-\\[disabled\\]\\:pr-pointer-events-none[data-disabled] {
  pointer-events: none;
}
.data-\\[side\\=bottom\\]\\:pr-translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=left\\]\\:pr--translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=right\\]\\:pr-translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=top\\]\\:pr--translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[highlighted\\]\\:pr-bg-amber-100[data-highlighted] {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity));
}
.data-\\[state\\=checked\\]\\:pr-bg-primary[data-state=checked] {
  background-color: hsl(var(--primary));
}
.data-\\[state\\=open\\]\\:pr-bg-accent[data-state=open] {
  background-color: hsl(var(--accent));
}
.data-\\[state\\=selected\\]\\:pr-bg-muted[data-state=selected] {
  background-color: hsl(var(--muted));
}
.data-\\[state\\=checked\\]\\:pr-text-primary-foreground[data-state=checked] {
  color: hsl(var(--primary-foreground));
}
.data-\\[disabled\\]\\:pr-opacity-50[data-disabled] {
  opacity: 0.5;
}
.data-\\[state\\=open\\]\\:pr-animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:pr-animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:pr-fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}
.data-\\[state\\=open\\]\\:pr-fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}
.data-\\[state\\=closed\\]\\:pr-zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}
.data-\\[state\\=open\\]\\:pr-zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}
.data-\\[side\\=bottom\\]\\:pr-slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}
.data-\\[side\\=left\\]\\:pr-slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}
.data-\\[side\\=right\\]\\:pr-slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}
.data-\\[side\\=top\\]\\:pr-slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}
@media (min-width: 1024px) {

  .lg\\:pr-flex {
    display: flex;
  }

  .lg\\:pr-space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }
}
.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-pr-0:has([role=checkbox]) {
  padding-right: 0px;
}
.\\[\\&\\>span\\]\\:pr-line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.\\[\\&\\>tr\\]\\:last\\:pr-border-b-0:last-child>tr {
  border-bottom-width: 0px;
}
.\\[\\&_tr\\:last-child\\]\\:pr-border-0 tr:last-child {
  border-width: 0px;
}
.\\[\\&_tr\\]\\:pr-border-b tr {
  border-bottom-width: 1px;
}
.papi-table.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-table.paratext.bright {
  color: darkgreen;
  background-color: greenyellow;
}
@layer rdg {
  @layer Defaults,
    FocusSink,
    CheckboxInput,
    CheckboxIcon,
    CheckboxLabel,
    Cell,
    HeaderCell,
    SummaryCell,
    EditCell,
    Row,
    HeaderRow,
    SummaryRow,
    GroupedRow,
    Root;
}

.mlln6zg7-0-0-beta-42 {
  @layer rdg.MeasuringCell {
    contain: strict;
    grid-row: 1;
    visibility: hidden;
  }
}


.cj343x07-0-0-beta-42 {
  @layer rdg.Cell {
    /* max-content does not work with size containment
     * dynamically switching between different containment styles incurs a heavy relayout penalty
     * Chromium bug: at odd zoom levels or subpixel positioning,
     * layout/paint/style containment can make cell borders disappear
     *   https://bugs.chromium.org/p/chromium/issues/detail?id=1326946
     */
    position: relative; /* needed for absolute positioning to work */
    padding-block: 0;
    padding-inline: 8px;
    border-inline-end: 1px solid var(--rdg-border-color);
    border-block-end: 1px solid var(--rdg-border-color);
    grid-row-start: var(--rdg-grid-row-start);
    background-color: inherit;

    white-space: nowrap;
    overflow: clip;
    text-overflow: ellipsis;
    outline: none;

    &[aria-selected='true'] {
      outline: 2px solid var(--rdg-selection-color);
      outline-offset: -2px;
    }
  }
}

.csofj7r7-0-0-beta-42 {
  @layer rdg.Cell {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1;
  }
}

.ch2wcw87-0-0-beta-42 {
  @layer rdg.Cell {
    box-shadow: calc(2px * var(--rdg-sign)) 0 5px -2px rgba(136, 136, 136, 0.3);
  }
}


.c1bn88vv7-0-0-beta-42 {
  @layer rdg.CheckboxLabel {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    margin-inline-end: 1px; /* align checkbox in row group cell */
  }
}

.c1qt073l7-0-0-beta-42 {
  @layer rdg.CheckboxInput {
    all: unset;
  }
}

.cf71kmq7-0-0-beta-42 {
  @layer rdg.CheckboxIcon {
    content: '';
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--rdg-border-color);
    background-color: var(--rdg-background-color);

    .c1qt073l7-0-0-beta-42:checked + & {
      background-color: var(--rdg-checkbox-color);
      outline: 4px solid var(--rdg-background-color);
      outline-offset: -6px;
    }

    .c1qt073l7-0-0-beta-42:focus + & {
      border-color: var(--rdg-checkbox-focus-color);
    }
  }
}

.c1lwve4p7-0-0-beta-42 {
  @layer rdg.CheckboxLabel {
    cursor: default;

    .cf71kmq7-0-0-beta-42 {
      border-color: var(--rdg-checkbox-disabled-border-color);
      background-color: var(--rdg-checkbox-disabled-background-color);
    }
  }
}


.g1s9ylgp7-0-0-beta-42 {
  @layer rdg.GroupCellContent {
    outline: none;
  }
}

.cz54e4y7-0-0-beta-42 {
  @layer rdg.GroupCellCaret {
    margin-inline-start: 4px;
    stroke: currentColor;
    stroke-width: 1.5px;
    fill: transparent;
    vertical-align: middle;

    > path {
      transition: d 0.1s;
    }
  }
}


.c1w9bbhr7-0-0-beta-42 {
  @layer rdg.DragHandle {
    --rdg-drag-handle-size: 8px;
    z-index: 0;
    cursor: move;
    inline-size: var(--rdg-drag-handle-size);
    block-size: var(--rdg-drag-handle-size);
    background-color: var(--rdg-selection-color);
    place-self: end;

    &:hover {
      --rdg-drag-handle-size: 16px;
      border: 2px solid var(--rdg-selection-color);
      background-color: var(--rdg-background-color);
    }
  }
}

.c1creorc7-0-0-beta-42 {
  @layer rdg.DragHandle {
    z-index: 1;
    position: sticky;
  }
}


.cis5rrm7-0-0-beta-42 {
  @layer rdg.EditCell {
    padding: 0;
  }
}


.h44jtk67-0-0-beta-42 {
  @layer rdg.SortableHeaderCell {
    display: flex;
  }
}

.hcgkhxz7-0-0-beta-42 {
  @layer rdg.SortableHeaderCellName {
    flex-grow: 1;
    overflow: clip;
    text-overflow: ellipsis;
  }
}


.c6l2wv17-0-0-beta-42 {
  @layer rdg.HeaderCell {
    cursor: pointer;
  }
}

.c1kqdw7y7-0-0-beta-42 {
  @layer rdg.HeaderCell {
    touch-action: none;
  }
}

.r1y6ywlx7-0-0-beta-42 {
  @layer rdg.HeaderCell {
    cursor: col-resize;
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 10px;
  }
}

.c1bezg5o7-0-0-beta-42 {
  opacity: 0.5;
}

.c1vc96037-0-0-beta-42 {
  background-color: var(--rdg-header-draggable-background-color);
}


.r1upfr807-0-0-beta-42 {
  @layer rdg.Row {
    display: contents;
    line-height: var(--rdg-row-height);
    background-color: var(--rdg-background-color);

    &:hover {
      background-color: var(--rdg-row-hover-background-color);
    }

    &[aria-selected='true'] {
      background-color: var(--rdg-row-selected-background-color);

      &:hover {
        background-color: var(--rdg-row-selected-hover-background-color);
      }
    }
  }
}

.r190mhd37-0-0-beta-42 {
  @layer rdg.FocusSink {
    outline: 2px solid var(--rdg-selection-color);
    outline-offset: -2px;
  }
}

.r139qu9m7-0-0-beta-42 {
  @layer rdg.FocusSink {
    &::before {
      content: '';
      display: inline-block;
      height: 100%;
      position: sticky;
      inset-inline-start: 0;
      border-inline-start: 2px solid var(--rdg-selection-color);
    }
  }
}


.h10tskcx7-0-0-beta-42 {
  @layer rdg.HeaderRow {
    display: contents;
    line-height: var(--rdg-header-row-height);
    background-color: var(--rdg-header-background-color);
    font-weight: bold;

    & > .cj343x07-0-0-beta-42 {
      /* Should have a higher value than 1 to show up above regular cells and the focus sink */
      z-index: 2;
      position: sticky;
    }

    & > .csofj7r7-0-0-beta-42 {
      z-index: 3;
    }
  }
}


.c6ra8a37-0-0-beta-42 {
  @layer rdg.Cell {
    background-color: #ccccff;
  }
}

.cq910m07-0-0-beta-42 {
  @layer rdg.Cell {
    background-color: #ccccff;

    &.c6ra8a37-0-0-beta-42 {
      background-color: #9999ff;
    }
  }
}


.a3ejtar7-0-0-beta-42 {
  @layer rdg.SortIcon {
    fill: currentColor;

    > path {
      transition: d 0.1s;
    }
  }
}


.rnvodz57-0-0-beta-42 {
  @layer rdg.Defaults {
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  @layer rdg.Root {
    --rdg-color: #000;   --rdg-border-color: #ddd;   --rdg-summary-border-color: #aaa;   --rdg-background-color: hsl(0deg 0% 100%);   --rdg-header-background-color: hsl(0deg 0% 97.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 90.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 96%);   --rdg-row-selected-background-color: hsl(207deg 76% 92%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 88%);   --rdg-checkbox-color: hsl(207deg 100% 29%);   --rdg-checkbox-focus-color: hsl(207deg 100% 69%);   --rdg-checkbox-disabled-border-color: #ccc;   --rdg-checkbox-disabled-background-color: #ddd;
    --rdg-selection-color: #66afe9;
    --rdg-font-size: 14px;

    display: grid;

    color-scheme: var(--rdg-color-scheme, light dark);

    /* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */
    /* We set a stacking context so internal elements don't render on top of external elements. */
    /* size containment is not used as it could break "width: min-content" for example, and the grid would infinitely resize on Chromium browsers */
    contain: content;
    content-visibility: auto;
    block-size: 350px;
    border: 1px solid var(--rdg-border-color);
    box-sizing: border-box;
    overflow: auto;
    background-color: var(--rdg-background-color);
    color: var(--rdg-color);
    font-size: var(--rdg-font-size);

    /* needed on Firefox to fix scrollbars */
    &::before {
      content: '';
      grid-column: 1/-1;
      grid-row: 1/-1;
    }

    &.rdg-dark {
      --rdg-color-scheme: dark;
      --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 17.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
    }

    &.rdg-light {
      --rdg-color-scheme: light;
    }

    @media (prefers-color-scheme: dark) {
      &:not(.rdg-light) {
        --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 17.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
      }
    }
  }
}

.vlqv91k7-0-0-beta-42 {
  @layer rdg.Root {
    user-select: none;

    & .r1upfr807-0-0-beta-42 {
      cursor: move;
    }
  }
}

.f1lsfrzw7-0-0-beta-42 {
  @layer rdg.FocusSink {
    grid-column: 1/-1;
    pointer-events: none;
    /* Should have a higher value than 1 to show up above regular frozen cells */
    z-index: 1;
  }
}

.f1cte0lg7-0-0-beta-42 {
  @layer rdg.FocusSink {
    /* Should have a higher value than 3 to show up above header and summary rows */
    z-index: 3;
  }
}


.s8wc6fl7-0-0-beta-42 {
  @layer rdg.SummaryCell {
    inset-block-start: var(--rdg-summary-row-top);
    inset-block-end: var(--rdg-summary-row-bottom);
  }
}


.skuhp557-0-0-beta-42 {
  @layer rdg.SummaryRow {
    line-height: var(--rdg-summary-row-height);

    > .cj343x07-0-0-beta-42 {
      position: sticky;
    }
  }
}

.tf8l5ub7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      z-index: 2;
    }

    > .csofj7r7-0-0-beta-42 {
      z-index: 3;
    }
  }
}

.tb9ughf7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      border-block-end: 2px solid var(--rdg-summary-border-color);
    }
  }
}

.b1yssfnt7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      border-block-start: 2px solid var(--rdg-summary-border-color);
    }
  }
}


.g1yxluv37-0-0-beta-42 {
  @layer rdg.GroupedRow {
    &:not([aria-selected='true']) {
      background-color: var(--rdg-header-background-color);
    }

    > .cj343x07-0-0-beta-42:not(:last-child):not(.ch2wcw87-0-0-beta-42) {
      border-inline-end: none;
    }
  }
}


.t7vyx3i7-0-0-beta-42 {
  @layer rdg.TextEditor {
    appearance: none;

    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border: 2px solid #ccc;
    vertical-align: top;
    color: var(--rdg-color);
    background-color: var(--rdg-background-color);

    font-family: inherit;
    font-size: var(--rdg-font-size);

    &:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    &::placeholder {
      color: #999;
      opacity: 1;
    }
  }
}

`,"top");
//# sourceMappingURL=index.cjs.map
