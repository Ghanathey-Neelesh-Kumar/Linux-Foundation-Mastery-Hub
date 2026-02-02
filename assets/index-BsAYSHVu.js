(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))f(U);new MutationObserver(U=>{for(const _ of U)if(_.type==="childList")for(const Z of _.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&f(Z)}).observe(document,{childList:!0,subtree:!0});function K(U){const _={};return U.integrity&&(_.integrity=U.integrity),U.referrerPolicy&&(_.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?_.credentials="include":U.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function f(U){if(U.ep)return;U.ep=!0;const _=K(U);fetch(U.href,_)}})();var ol={exports:{}},Si={};var hf;function Xh(){if(hf)return Si;hf=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function K(f,U,_){var Z=null;if(_!==void 0&&(Z=""+_),U.key!==void 0&&(Z=""+U.key),"key"in U){_={};for(var fe in U)fe!=="key"&&(_[fe]=U[fe])}else _=U;return U=_.ref,{$$typeof:w,type:f,key:Z,ref:U!==void 0?U:null,props:_}}return Si.Fragment=B,Si.jsx=K,Si.jsxs=K,Si}var mf;function Zh(){return mf||(mf=1,ol.exports=Xh()),ol.exports}var T=Zh(),sl={exports:{}},H={};var gf;function Jh(){if(gf)return H;gf=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),ae=Symbol.iterator;function ge(u){return u===null||typeof u!="object"?null:(u=ae&&u[ae]||u["@@iterator"],typeof u=="function"?u:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ke=Object.assign,Ve={};function je(u,C,D){this.props=u,this.context=C,this.refs=Ve,this.updater=D||ze}je.prototype.isReactComponent={},je.prototype.setState=function(u,C){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,C,"setState")},je.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function ft(){}ft.prototype=je.prototype;function Ee(u,C,D){this.props=u,this.context=C,this.refs=Ve,this.updater=D||ze}var De=Ee.prototype=new ft;De.constructor=Ee,ke(De,je.prototype),De.isPureReactComponent=!0;var pt=Array.isArray;function Le(){}var G={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function ht(u,C,D){var E=D.ref;return{$$typeof:w,type:u,key:C,ref:E!==void 0?E:null,props:D}}function Jt(u,C){return ht(u.type,C,u.props)}function mt(u){return typeof u=="object"&&u!==null&&u.$$typeof===w}function re(u){var C={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(D){return C[D]})}var Ie=/\/+/g;function Ye(u,C){return typeof u=="object"&&u!==null&&u.key!=null?re(""+u.key):C.toString(36)}function tt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Le,Le):(u.status="pending",u.then(function(C){u.status==="pending"&&(u.status="fulfilled",u.value=C)},function(C){u.status==="pending"&&(u.status="rejected",u.reason=C)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function v(u,C,D,E,j){var W=typeof u;(W==="undefined"||W==="boolean")&&(u=null);var ne=!1;if(u===null)ne=!0;else switch(W){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(u.$$typeof){case w:case B:ne=!0;break;case I:return ne=u._init,v(ne(u._payload),C,D,E,j)}}if(ne)return j=j(u),ne=E===""?"."+Ye(u,0):E,pt(j)?(D="",ne!=null&&(D=ne.replace(Ie,"$&/")+"/"),v(j,C,D,"",function(Da){return Da})):j!=null&&(mt(j)&&(j=Jt(j,D+(j.key==null||u&&u.key===j.key?"":(""+j.key).replace(Ie,"$&/")+"/")+ne)),C.push(j)),1;ne=0;var Ge=E===""?".":E+":";if(pt(u))for(var be=0;be<u.length;be++)E=u[be],W=Ge+Ye(E,be),ne+=v(E,C,D,W,j);else if(be=ge(u),typeof be=="function")for(u=be.call(u),be=0;!(E=u.next()).done;)E=E.value,W=Ge+Ye(E,be++),ne+=v(E,C,D,W,j);else if(W==="object"){if(typeof u.then=="function")return v(tt(u),C,D,E,j);throw C=String(u),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ne}function x(u,C,D){if(u==null)return u;var E=[],j=0;return v(u,E,"","",function(W){return C.call(D,W,j++)}),E}function N(u){if(u._status===-1){var C=u._result;C=C(),C.then(function(D){(u._status===0||u._status===-1)&&(u._status=1,u._result=D)},function(D){(u._status===0||u._status===-1)&&(u._status=2,u._result=D)}),u._status===-1&&(u._status=0,u._result=C)}if(u._status===1)return u._result.default;throw u._result}var te=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},ie={map:x,forEach:function(u,C,D){x(u,function(){C.apply(this,arguments)},D)},count:function(u){var C=0;return x(u,function(){C++}),C},toArray:function(u){return x(u,function(C){return C})||[]},only:function(u){if(!mt(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return H.Activity=z,H.Children=ie,H.Component=je,H.Fragment=K,H.Profiler=U,H.PureComponent=Ee,H.StrictMode=f,H.Suspense=k,H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,H.__COMPILER_RUNTIME={__proto__:null,c:function(u){return G.H.useMemoCache(u)}},H.cache=function(u){return function(){return u.apply(null,arguments)}},H.cacheSignal=function(){return null},H.cloneElement=function(u,C,D){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var E=ke({},u.props),j=u.key;if(C!=null)for(W in C.key!==void 0&&(j=""+C.key),C)!_e.call(C,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&C.ref===void 0||(E[W]=C[W]);var W=arguments.length-2;if(W===1)E.children=D;else if(1<W){for(var ne=Array(W),Ge=0;Ge<W;Ge++)ne[Ge]=arguments[Ge+2];E.children=ne}return ht(u.type,j,E)},H.createContext=function(u){return u={$$typeof:Z,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:_,_context:u},u},H.createElement=function(u,C,D){var E,j={},W=null;if(C!=null)for(E in C.key!==void 0&&(W=""+C.key),C)_e.call(C,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(j[E]=C[E]);var ne=arguments.length-2;if(ne===1)j.children=D;else if(1<ne){for(var Ge=Array(ne),be=0;be<ne;be++)Ge[be]=arguments[be+2];j.children=Ge}if(u&&u.defaultProps)for(E in ne=u.defaultProps,ne)j[E]===void 0&&(j[E]=ne[E]);return ht(u,W,j)},H.createRef=function(){return{current:null}},H.forwardRef=function(u){return{$$typeof:fe,render:u}},H.isValidElement=mt,H.lazy=function(u){return{$$typeof:I,_payload:{_status:-1,_result:u},_init:N}},H.memo=function(u,C){return{$$typeof:b,type:u,compare:C===void 0?null:C}},H.startTransition=function(u){var C=G.T,D={};G.T=D;try{var E=u(),j=G.S;j!==null&&j(D,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(Le,te)}catch(W){te(W)}finally{C!==null&&D.types!==null&&(C.types=D.types),G.T=C}},H.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},H.use=function(u){return G.H.use(u)},H.useActionState=function(u,C,D){return G.H.useActionState(u,C,D)},H.useCallback=function(u,C){return G.H.useCallback(u,C)},H.useContext=function(u){return G.H.useContext(u)},H.useDebugValue=function(){},H.useDeferredValue=function(u,C){return G.H.useDeferredValue(u,C)},H.useEffect=function(u,C){return G.H.useEffect(u,C)},H.useEffectEvent=function(u){return G.H.useEffectEvent(u)},H.useId=function(){return G.H.useId()},H.useImperativeHandle=function(u,C,D){return G.H.useImperativeHandle(u,C,D)},H.useInsertionEffect=function(u,C){return G.H.useInsertionEffect(u,C)},H.useLayoutEffect=function(u,C){return G.H.useLayoutEffect(u,C)},H.useMemo=function(u,C){return G.H.useMemo(u,C)},H.useOptimistic=function(u,C){return G.H.useOptimistic(u,C)},H.useReducer=function(u,C,D){return G.H.useReducer(u,C,D)},H.useRef=function(u){return G.H.useRef(u)},H.useState=function(u){return G.H.useState(u)},H.useSyncExternalStore=function(u,C,D){return G.H.useSyncExternalStore(u,C,D)},H.useTransition=function(){return G.H.useTransition()},H.version="19.2.3",H}var yf;function dl(){return yf||(yf=1,sl.exports=Jh()),sl.exports}var Be=dl(),rl={exports:{}},Ai={},ll={exports:{}},cl={};var vf;function Fh(){return vf||(vf=1,(function(w){function B(v,x){var N=v.length;v.push(x);e:for(;0<N;){var te=N-1>>>1,ie=v[te];if(0<U(ie,x))v[te]=x,v[N]=ie,N=te;else break e}}function K(v){return v.length===0?null:v[0]}function f(v){if(v.length===0)return null;var x=v[0],N=v.pop();if(N!==x){v[0]=N;e:for(var te=0,ie=v.length,u=ie>>>1;te<u;){var C=2*(te+1)-1,D=v[C],E=C+1,j=v[E];if(0>U(D,N))E<ie&&0>U(j,D)?(v[te]=j,v[E]=N,te=E):(v[te]=D,v[C]=N,te=C);else if(E<ie&&0>U(j,N))v[te]=j,v[E]=N,te=E;else break e}}return x}function U(v,x){var N=v.sortIndex-x.sortIndex;return N!==0?N:v.id-x.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;w.unstable_now=function(){return _.now()}}else{var Z=Date,fe=Z.now();w.unstable_now=function(){return Z.now()-fe}}var k=[],b=[],I=1,z=null,ae=3,ge=!1,ze=!1,ke=!1,Ve=!1,je=typeof setTimeout=="function"?setTimeout:null,ft=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;function De(v){for(var x=K(b);x!==null;){if(x.callback===null)f(b);else if(x.startTime<=v)f(b),x.sortIndex=x.expirationTime,B(k,x);else break;x=K(b)}}function pt(v){if(ke=!1,De(v),!ze)if(K(k)!==null)ze=!0,Le||(Le=!0,re());else{var x=K(b);x!==null&&tt(pt,x.startTime-v)}}var Le=!1,G=-1,_e=5,ht=-1;function Jt(){return Ve?!0:!(w.unstable_now()-ht<_e)}function mt(){if(Ve=!1,Le){var v=w.unstable_now();ht=v;var x=!0;try{e:{ze=!1,ke&&(ke=!1,ft(G),G=-1),ge=!0;var N=ae;try{t:{for(De(v),z=K(k);z!==null&&!(z.expirationTime>v&&Jt());){var te=z.callback;if(typeof te=="function"){z.callback=null,ae=z.priorityLevel;var ie=te(z.expirationTime<=v);if(v=w.unstable_now(),typeof ie=="function"){z.callback=ie,De(v),x=!0;break t}z===K(k)&&f(k),De(v)}else f(k);z=K(k)}if(z!==null)x=!0;else{var u=K(b);u!==null&&tt(pt,u.startTime-v),x=!1}}break e}finally{z=null,ae=N,ge=!1}x=void 0}}finally{x?re():Le=!1}}}var re;if(typeof Ee=="function")re=function(){Ee(mt)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Ye=Ie.port2;Ie.port1.onmessage=mt,re=function(){Ye.postMessage(null)}}else re=function(){je(mt,0)};function tt(v,x){G=je(function(){v(w.unstable_now())},x)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(v){v.callback=null},w.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<v?Math.floor(1e3/v):5},w.unstable_getCurrentPriorityLevel=function(){return ae},w.unstable_next=function(v){switch(ae){case 1:case 2:case 3:var x=3;break;default:x=ae}var N=ae;ae=x;try{return v()}finally{ae=N}},w.unstable_requestPaint=function(){Ve=!0},w.unstable_runWithPriority=function(v,x){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var N=ae;ae=v;try{return x()}finally{ae=N}},w.unstable_scheduleCallback=function(v,x,N){var te=w.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?te+N:te):N=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=N+ie,v={id:I++,callback:x,priorityLevel:v,startTime:N,expirationTime:ie,sortIndex:-1},N>te?(v.sortIndex=N,B(b,v),K(k)===null&&v===K(b)&&(ke?(ft(G),G=-1):ke=!0,tt(pt,N-te))):(v.sortIndex=ie,B(k,v),ze||ge||(ze=!0,Le||(Le=!0,re()))),v},w.unstable_shouldYield=Jt,w.unstable_wrapCallback=function(v){var x=ae;return function(){var N=ae;ae=x;try{return v.apply(this,arguments)}finally{ae=N}}}})(cl)),cl}var bf;function $h(){return bf||(bf=1,ll.exports=Fh()),ll.exports}var ul={exports:{}},Pe={};var Sf;function em(){if(Sf)return Pe;Sf=1;var w=dl();function B(k){var b="https://react.dev/errors/"+k;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)b+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+k+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function K(){}var f={d:{f:K,r:function(){throw Error(B(522))},D:K,C:K,L:K,m:K,X:K,S:K,M:K},p:0,findDOMNode:null},U=Symbol.for("react.portal");function _(k,b,I){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:z==null?null:""+z,children:k,containerInfo:b,implementation:I}}var Z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fe(k,b){if(k==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Pe.createPortal=function(k,b){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(B(299));return _(k,b,null,I)},Pe.flushSync=function(k){var b=Z.T,I=f.p;try{if(Z.T=null,f.p=2,k)return k()}finally{Z.T=b,f.p=I,f.d.f()}},Pe.preconnect=function(k,b){typeof k=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,f.d.C(k,b))},Pe.prefetchDNS=function(k){typeof k=="string"&&f.d.D(k)},Pe.preinit=function(k,b){if(typeof k=="string"&&b&&typeof b.as=="string"){var I=b.as,z=fe(I,b.crossOrigin),ae=typeof b.integrity=="string"?b.integrity:void 0,ge=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;I==="style"?f.d.S(k,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:z,integrity:ae,fetchPriority:ge}):I==="script"&&f.d.X(k,{crossOrigin:z,integrity:ae,fetchPriority:ge,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Pe.preinitModule=function(k,b){if(typeof k=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var I=fe(b.as,b.crossOrigin);f.d.M(k,{crossOrigin:I,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&f.d.M(k)},Pe.preload=function(k,b){if(typeof k=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var I=b.as,z=fe(I,b.crossOrigin);f.d.L(k,I,{crossOrigin:z,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Pe.preloadModule=function(k,b){if(typeof k=="string")if(b){var I=fe(b.as,b.crossOrigin);f.d.m(k,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:I,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else f.d.m(k)},Pe.requestFormReset=function(k){f.d.r(k)},Pe.unstable_batchedUpdates=function(k,b){return k(b)},Pe.useFormState=function(k,b,I){return Z.H.useFormState(k,b,I)},Pe.useFormStatus=function(){return Z.H.useHostTransitionStatus()},Pe.version="19.2.3",Pe}var Af;function tm(){if(Af)return ul.exports;Af=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),ul.exports=em(),ul.exports}var Cf;function nm(){if(Cf)return Ai;Cf=1;var w=$h(),B=dl(),K=tm();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(_(e)!==e)throw Error(f(188))}function b(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return k(i),e;if(o===a)return k(i),t;o=o.sibling}throw Error(f(188))}if(n.return!==a.return)n=i,a=o;else{for(var s=!1,r=i.child;r;){if(r===n){s=!0,n=i,a=o;break}if(r===a){s=!0,a=i,n=o;break}r=r.sibling}if(!s){for(r=o.child;r;){if(r===n){s=!0,n=o,a=i;break}if(r===a){s=!0,a=o,n=i;break}r=r.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==a)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,ae=Symbol.for("react.element"),ge=Symbol.for("react.transitional.element"),ze=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),ft=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),Jt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case je:return"Profiler";case Ve:return"StrictMode";case pt:return"Suspense";case Le:return"SuspenseList";case ht:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ze:return"Portal";case Ee:return e.displayName||"Context";case ft:return(e._context.displayName||"Context")+".Consumer";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var tt=Array.isArray,v=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function u(e){return{current:e}}function C(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function D(e,t){ie++,te[ie]=e.current,e.current=t}var E=u(null),j=u(null),W=u(null),ne=u(null);function Ge(e,t){switch(D(W,t),D(j,e),D(E,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=Hd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(E),D(E,e)}function be(){C(E),C(j),C(W)}function Da(e){e.memoizedState!==null&&D(ne,e);var t=E.current,n=Hd(t,e.type);t!==n&&(D(j,e),D(E,n))}function Ci(e){j.current===e&&(C(E),C(j)),ne.current===e&&(C(ne),gi._currentValue=N)}var _o,fl;function Tn(e){if(_o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||"",fl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_o+e+fl}var Po=!1;function Io(e,t){if(!e||Po)return"";Po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(g){var m=g}Reflect.construct(e,[],A)}else{try{A.call()}catch(g){m=g}e.call(A.prototype)}}else{try{throw Error()}catch(g){m=g}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),s=o[0],r=o[1];if(s&&r){var l=s.split(`
`),h=r.split(`
`);for(i=a=0;a<l.length&&!l[a].includes("DetermineComponentFrameRoot");)a++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(a===l.length||i===h.length)for(a=l.length-1,i=h.length-1;1<=a&&0<=i&&l[a]!==h[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==h[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==h[i]){var y=`
`+l[a].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=a&&0<=i);break}}}finally{Po=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Tn(n):""}function kf(e,t){switch(e.tag){case 26:case 27:case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return e.child!==t&&t!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return Io(e.type,!1);case 11:return Io(e.type.render,!1);case 1:return Io(e.type,!0);case 31:return Tn("Activity");default:return""}}function pl(e){try{var t="",n=null;do t+=kf(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Go=Object.prototype.hasOwnProperty,Wo=w.unstable_scheduleCallback,Vo=w.unstable_cancelCallback,Df=w.unstable_shouldYield,qf=w.unstable_requestPaint,nt=w.unstable_now,Ef=w.unstable_getCurrentPriorityLevel,hl=w.unstable_ImmediatePriority,ml=w.unstable_UserBlockingPriority,wi=w.unstable_NormalPriority,Rf=w.unstable_LowPriority,gl=w.unstable_IdlePriority,Mf=w.log,zf=w.unstable_setDisableYieldValue,qa=null,at=null;function Ft(e){if(typeof Mf=="function"&&zf(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(qa,e)}catch{}}var it=Math.clz32?Math.clz32:Kf,Nf=Math.log,Of=Math.LN2;function Kf(e){return e>>>=0,e===0?32:31-(Nf(e)/Of|0)|0}var Ti=256,xi=262144,ki=4194304;function xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~o,a!==0?i=xn(a):(s&=r,s!==0?i=xn(s):n||(n=r&~e,n!==0&&(i=xn(n))))):(r=a&~o,r!==0?i=xn(r):s!==0?i=xn(s):n||(n=a&~e,n!==0&&(i=xn(n)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:i}function Ea(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yl(){var e=ki;return ki<<=1,(ki&62914560)===0&&(ki=4194304),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hf(e,t,n,a,i,o){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,l=e.expirationTimes,h=e.hiddenUpdates;for(n=s&~n;0<n;){var y=31-it(n),A=1<<y;r[y]=0,l[y]=-1;var m=h[y];if(m!==null)for(h[y]=null,y=0;y<m.length;y++){var g=m[y];g!==null&&(g.lane&=-536870913)}n&=~A}a!==0&&vl(e,a,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function vl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-it(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Sl(e,t){var n=t&-t;return n=(n&42)!==0?1:Qo(n),(n&(e.suspendedLanes|t))!==0?0:n}function Qo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Al(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:rf(e.type))}function Cl(e,t){var n=x.p;try{return x.p=e,t()}finally{x.p=n}}var $t=Math.random().toString(36).slice(2),Ne="__reactFiber$"+$t,Qe="__reactProps$"+$t,In="__reactContainer$"+$t,Zo="__reactEvents$"+$t,Bf="__reactListeners$"+$t,jf="__reactHandles$"+$t,wl="__reactResources$"+$t,Ma="__reactMarker$"+$t;function Jo(e){delete e[Ne],delete e[Qe],delete e[Zo],delete e[Bf],delete e[jf]}function Gn(e){var t=e[Ne];if(t)return t;for(var n=e.parentNode;n;){if(t=n[In]||n[Ne]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[Ne])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function Wn(e){if(e=e[Ne]||e[In]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Vn(e){var t=e[wl];return t||(t=e[wl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Ma]=!0}var Tl=new Set,xl={};function kn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(xl[e]=t,e=0;e<t.length;e++)Tl.add(t[e])}var Lf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kl={},Dl={};function _f(e){return Go.call(Dl,e)?!0:Go.call(kl,e)?!1:Lf.test(e)?Dl[e]=!0:(kl[e]=!0,!1)}function qi(e,t,n){if(_f(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ei(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ql(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pf(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){if(!e._valueTracker){var t=ql(e)?"checked":"value";e._valueTracker=Pf(e,t,""+e[t])}}function El(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ql(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var If=/[\n"\\]/g;function yt(e){return e.replace(If,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $o(e,t,n,a,i,o,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?es(e,s,gt(t)):n!=null?es(e,s,gt(n)):a!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+gt(r):e.removeAttribute("name")}function Rl(e,t,n,a,i,o,s,r){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Fo(e);return}n=n!=null?""+gt(n):"",t=t!=null?""+gt(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Fo(e)}function es(e,t,n){t==="number"&&Ri(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Qn(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ml(e,t,n){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+gt(n):""}function zl(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(f(92));if(tt(a)){if(1<a.length)throw Error(f(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Fo(e)}function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nl(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Gf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ol(e,t,n){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Nl(e,i,a)}else for(var o in t)t.hasOwnProperty(o)&&Nl(e,o,t[o])}function ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return Vf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var ns=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zn=null,Jn=null;function Kl(e){var t=Wn(e);if(t&&(e=t.stateNode)){var n=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if($o(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[Qe]||null;if(!i)throw Error(f(90));$o(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&El(a)}break e;case"textarea":Ml(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}}}var is=!1;function Ul(e,t,n){if(is)return e(t,n);is=!0;try{var a=e(t);return a}finally{if(is=!1,(Zn!==null||Jn!==null)&&(bo(),Zn&&(t=Zn,e=Jn,Jn=Zn=null,Kl(t),e)))for(t=0;t<e.length;t++)Kl(e[t])}}function Na(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Qe]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Kt)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){os=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{os=!1}var en=null,ss=null,zi=null;function Hl(){if(zi)return zi;var e,t=ss,n=t.length,a,i="value"in en?en.value:en.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===i[o-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Bl(){return!1}function Xe(e){function t(n,a,i,o,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(o):o[r]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oi:Bl,this.isPropagationStopped=Bl,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=Xe(Dn),Ka=z({},Dn,{view:0,detail:0}),Yf=Xe(Ka),rs,ls,Ua,Ui=z({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(rs=e.screenX-Ua.screenX,ls=e.screenY-Ua.screenY):ls=rs=0,Ua=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),jl=Xe(Ui),Qf=z({},Ui,{dataTransfer:0}),Xf=Xe(Qf),Zf=z({},Ka,{relatedTarget:0}),cs=Xe(Zf),Jf=z({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Xe(Jf),$f=z({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ep=Xe($f),tp=z({},Dn,{data:0}),Ll=Xe(tp),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function us(){return op}var sp=z({},Ka,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rp=Xe(sp),lp=z({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_l=Xe(lp),cp=z({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),up=Xe(cp),dp=z({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=Xe(dp),pp=z({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hp=Xe(pp),mp=z({},Dn,{newState:0,oldState:0}),gp=Xe(mp),yp=[9,13,27,32],ds=Kt&&"CompositionEvent"in window,Ha=null;Kt&&"documentMode"in document&&(Ha=document.documentMode);var vp=Kt&&"TextEvent"in window&&!Ha,Pl=Kt&&(!ds||Ha&&8<Ha&&11>=Ha),Il=" ",Gl=!1;function Wl(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function bp(e,t){switch(e){case"compositionend":return Vl(t);case"keypress":return t.which!==32?null:(Gl=!0,Il);case"textInput":return e=t.data,e===Il&&Gl?null:e;default:return null}}function Sp(e,t){if(Fn)return e==="compositionend"||!ds&&Wl(e,t)?(e=Hl(),zi=ss=en=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pl&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Ql(e,t,n,a){Zn?Jn?Jn.push(a):Jn=[a]:Zn=a,t=ko(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ba=null,ja=null;function Cp(e){Rd(e,0)}function Hi(e){var t=za(e);if(El(t))return e}function Xl(e,t){if(e==="change")return t}var Zl=!1;if(Kt){var fs;if(Kt){var ps="oninput"in document;if(!ps){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),ps=typeof Jl.oninput=="function"}fs=ps}else fs=!1;Zl=fs&&(!document.documentMode||9<document.documentMode)}function Fl(){Ba&&(Ba.detachEvent("onpropertychange",$l),ja=Ba=null)}function $l(e){if(e.propertyName==="value"&&Hi(ja)){var t=[];Ql(t,ja,e,as(e)),Ul(Cp,t)}}function wp(e,t,n){e==="focusin"?(Fl(),Ba=t,ja=n,Ba.attachEvent("onpropertychange",$l)):e==="focusout"&&Fl()}function Tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(ja)}function xp(e,t){if(e==="click")return Hi(t)}function kp(e,t){if(e==="input"||e==="change")return Hi(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Dp;function La(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Go.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var n=ec(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ec(n)}}function nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ri(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qp=Kt&&"documentMode"in document&&11>=document.documentMode,$n=null,ms=null,_a=null,gs=!1;function ic(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||$n==null||$n!==Ri(a)||(a=$n,"selectionStart"in a&&hs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),_a&&La(_a,a)||(_a=a,a=ko(ms,"onSelect"),0<a.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=$n)))}function qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ea={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionrun:qn("Transition","TransitionRun"),transitionstart:qn("Transition","TransitionStart"),transitioncancel:qn("Transition","TransitionCancel"),transitionend:qn("Transition","TransitionEnd")},ys={},oc={};Kt&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function En(e){if(ys[e])return ys[e];if(!ea[e])return e;var t=ea[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oc)return ys[e]=t[n];return e}var sc=En("animationend"),rc=En("animationiteration"),lc=En("animationstart"),Ep=En("transitionrun"),Rp=En("transitionstart"),Mp=En("transitioncancel"),cc=En("transitionend"),uc=new Map,vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vs.push("scrollEnd");function kt(e,t){uc.set(e,t),kn(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],ta=0,bs=0;function ji(){for(var e=ta,t=bs=ta=0;t<e;){var n=vt[t];vt[t++]=null;var a=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var o=vt[t];if(vt[t++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}o!==0&&dc(n,i,o)}}function Li(e,t,n,a){vt[ta++]=e,vt[ta++]=t,vt[ta++]=n,vt[ta++]=a,bs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ss(e,t,n,a){return Li(e,t,n,a),_i(e)}function Rn(e,t){return Li(e,null,null,t),_i(e)}function dc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-it(n),e=o.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),o):null}function _i(e){if(50<ci)throw ci=0,Er=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var na={};function zp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,a){return new zp(e,t,n,a)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pi(e,t,n,a,i,o){var s=0;if(a=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=Hh(e,n,E.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ht:return e=st(31,n,t,i),e.elementType=ht,e.lanes=o,e;case ke:return Mn(n.children,i,o,t);case Ve:s=8,i|=24;break;case je:return e=st(12,n,t,i|2),e.elementType=je,e.lanes=o,e;case pt:return e=st(13,n,t,i),e.elementType=pt,e.lanes=o,e;case Le:return e=st(19,n,t,i),e.elementType=Le,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:s=10;break e;case ft:s=9;break e;case De:s=11;break e;case G:s=14;break e;case _e:s=16,a=null;break e}s=29,n=Error(f(130,e===null?"null":typeof e,"")),a=null}return t=st(s,n,t,i),t.elementType=e,t.type=a,t.lanes=o,t}function Mn(e,t,n,a){return e=st(7,e,a,t),e.lanes=n,e}function Cs(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function pc(e){var t=st(18,null,null,0);return t.stateNode=e,t}function ws(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var n=hc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:pl(t)},hc.set(e,t),t)}return{value:e,source:t,stack:pl(t)}}var aa=[],ia=0,Ii=null,Pa=0,St=[],At=0,tn=null,Et=1,Rt="";function Ht(e,t){aa[ia++]=Pa,aa[ia++]=Ii,Ii=e,Pa=t}function mc(e,t,n){St[At++]=Et,St[At++]=Rt,St[At++]=tn,tn=e;var a=Et;e=Rt;var i=32-it(a)-1;a&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var s=i-i%5;o=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Et=1<<32-it(t)+i|n<<i|a,Rt=o+e}else Et=1<<o|n<<i|a,Rt=e}function Ts(e){e.return!==null&&(Ht(e,1),mc(e,1,0))}function xs(e){for(;e===Ii;)Ii=aa[--ia],aa[ia]=null,Pa=aa[--ia],aa[ia]=null;for(;e===tn;)tn=St[--At],St[At]=null,Rt=St[--At],St[At]=null,Et=St[--At],St[At]=null}function gc(e,t){St[At++]=Et,St[At++]=Rt,St[At++]=tn,Et=t.id,Rt=t.overflow,tn=e}var Oe=null,pe=null,J=!1,nn=null,Ct=!1,ks=Error(f(519));function an(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(bt(t,e)),ks}function yc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ne]=e,t[Qe]=a,n){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(n=0;n<di.length;n++)Y(di[n],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),Rl(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),zl(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Od(t.textContent,n)?(a.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),a.onScroll!=null&&Y("scroll",t),a.onScrollEnd!=null&&Y("scrollend",t),a.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||an(e,!0)}function vc(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Oe=Oe.return}}function oa(e){if(e!==Oe)return!1;if(!J)return vc(e),J=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gr(e.type,e.memoizedProps)),n=!n),n&&pe&&an(e),vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=Id(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=Id(e)}else t===27?(t=pe,vn(e.type)?(e=Xr,Xr=null,pe=e):pe=t):pe=Oe?Tt(e.stateNode.nextSibling):null;return!0}function zn(){pe=Oe=null,J=!1}function Ds(){var e=nn;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),nn=null),e}function Ia(e){nn===null?nn=[e]:nn.push(e)}var qs=u(null),Nn=null,Bt=null;function on(e,t,n){D(qs,t._currentValue),t._currentValue=n}function jt(e){e._currentValue=qs.current,C(qs)}function Es(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Rs(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;e:for(;o!==null;){var r=o;o=i;for(var l=0;l<t.length;l++)if(r.context===t[l]){o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),Es(o.return,n,e),a||(s=null);break e}o=r.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(f(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Es(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function sa(e,t,n,a){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var r=i.type;ot(i.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(i===ne.current){if(s=i.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}i=i.return}e!==null&&Rs(t,e,n,a),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function On(e){Nn=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return bc(Nn,e)}function Wi(e,t){return Nn===null&&On(e),bc(e,t)}function bc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bt===null){if(e===null)throw Error(f(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return n}var Np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Op=w.unstable_scheduleCallback,Kp=w.unstable_NormalPriority,Ce={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ms(){return{controller:new Np,data:new Map,refCount:0}}function Ga(e){e.refCount--,e.refCount===0&&Op(Kp,function(){e.controller.abort()})}var Wa=null,zs=0,ra=0,la=null;function Up(e,t){if(Wa===null){var n=Wa=[];zs=0,ra=Kr(),la={status:"pending",value:void 0,then:function(a){n.push(a)}}}return zs++,t.then(Sc,Sc),t}function Sc(){if(--zs===0&&Wa!==null){la!==null&&(la.status="fulfilled");var e=Wa;Wa=null,ra=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Ac=v.S;v.S=function(e,t){id=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Up(e,t),Ac!==null&&Ac(e,t)};var Kn=u(null);function Ns(){var e=Kn.current;return e!==null?e:de.pooledCache}function Vi(e,t){t===null?D(Kn,Kn.current):D(Kn,t.pool)}function Cc(){var e=Ns();return e===null?null:{parent:Ce._currentValue,pool:e}}var ca=Error(f(460)),Os=Error(f(474)),Yi=Error(f(542)),Qi={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e}throw Hn=t,ca}}function Un(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Hn=n,ca):n}}var Hn=null;function xc(){if(Hn===null)throw Error(f(459));var e=Hn;return Hn=null,e}function kc(e){if(e===ca||e===Yi)throw Error(f(483))}var ua=null,Va=0;function Xi(e){var t=Va;return Va+=1,ua===null&&(ua=[]),Tc(ua,e,t)}function Ya(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zi(e,t){throw t.$$typeof===ae?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function a(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=Ut(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=67108866,c):p):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function r(d,c,p,S){return c===null||c.tag!==6?(c=Cs(p,d.mode,S),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,S){var M=p.type;return M===ke?y(d,c,p.props.children,S,p.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_e&&Un(M)===c.type)?(c=i(c,p.props),Ya(c,p),c.return=d,c):(c=Pi(p.type,p.key,p.props,null,d.mode,S),Ya(c,p),c.return=d,c)}function h(d,c,p,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ws(p,d.mode,S),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function y(d,c,p,S,M){return c===null||c.tag!==7?(c=Mn(p,d.mode,S,M),c.return=d,c):(c=i(c,p),c.return=d,c)}function A(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Cs(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ge:return p=Pi(c.type,c.key,c.props,null,d.mode,p),Ya(p,c),p.return=d,p;case ze:return c=ws(c,d.mode,p),c.return=d,c;case _e:return c=Un(c),A(d,c,p)}if(tt(c)||re(c))return c=Mn(c,d.mode,p,null),c.return=d,c;if(typeof c.then=="function")return A(d,Xi(c),p);if(c.$$typeof===Ee)return A(d,Wi(d,c),p);Zi(d,c)}return null}function m(d,c,p,S){var M=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return M!==null?null:r(d,c,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ge:return p.key===M?l(d,c,p,S):null;case ze:return p.key===M?h(d,c,p,S):null;case _e:return p=Un(p),m(d,c,p,S)}if(tt(p)||re(p))return M!==null?null:y(d,c,p,S,null);if(typeof p.then=="function")return m(d,c,Xi(p),S);if(p.$$typeof===Ee)return m(d,c,Wi(d,p),S);Zi(d,p)}return null}function g(d,c,p,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(p)||null,r(c,d,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ge:return d=d.get(S.key===null?p:S.key)||null,l(c,d,S,M);case ze:return d=d.get(S.key===null?p:S.key)||null,h(c,d,S,M);case _e:return S=Un(S),g(d,c,p,S,M)}if(tt(S)||re(S))return d=d.get(p)||null,y(c,d,S,M,null);if(typeof S.then=="function")return g(d,c,p,Xi(S),M);if(S.$$typeof===Ee)return g(d,c,p,Wi(c,S),M);Zi(c,S)}return null}function q(d,c,p,S){for(var M=null,F=null,R=c,P=c=0,X=null;R!==null&&P<p.length;P++){R.index>P?(X=R,R=null):X=R.sibling;var $=m(d,R,p[P],S);if($===null){R===null&&(R=X);break}e&&R&&$.alternate===null&&t(d,R),c=o($,c,P),F===null?M=$:F.sibling=$,F=$,R=X}if(P===p.length)return n(d,R),J&&Ht(d,P),M;if(R===null){for(;P<p.length;P++)R=A(d,p[P],S),R!==null&&(c=o(R,c,P),F===null?M=R:F.sibling=R,F=R);return J&&Ht(d,P),M}for(R=a(R);P<p.length;P++)X=g(R,d,P,p[P],S),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?P:X.key),c=o(X,c,P),F===null?M=X:F.sibling=X,F=X);return e&&R.forEach(function(wn){return t(d,wn)}),J&&Ht(d,P),M}function O(d,c,p,S){if(p==null)throw Error(f(151));for(var M=null,F=null,R=c,P=c=0,X=null,$=p.next();R!==null&&!$.done;P++,$=p.next()){R.index>P?(X=R,R=null):X=R.sibling;var wn=m(d,R,$.value,S);if(wn===null){R===null&&(R=X);break}e&&R&&wn.alternate===null&&t(d,R),c=o(wn,c,P),F===null?M=wn:F.sibling=wn,F=wn,R=X}if($.done)return n(d,R),J&&Ht(d,P),M;if(R===null){for(;!$.done;P++,$=p.next())$=A(d,$.value,S),$!==null&&(c=o($,c,P),F===null?M=$:F.sibling=$,F=$);return J&&Ht(d,P),M}for(R=a(R);!$.done;P++,$=p.next())$=g(R,d,P,$.value,S),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?P:$.key),c=o($,c,P),F===null?M=$:F.sibling=$,F=$);return e&&R.forEach(function(Qh){return t(d,Qh)}),J&&Ht(d,P),M}function ue(d,c,p,S){if(typeof p=="object"&&p!==null&&p.type===ke&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ge:e:{for(var M=p.key;c!==null;){if(c.key===M){if(M=p.type,M===ke){if(c.tag===7){n(d,c.sibling),S=i(c,p.props.children),S.return=d,d=S;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_e&&Un(M)===c.type){n(d,c.sibling),S=i(c,p.props),Ya(S,p),S.return=d,d=S;break e}n(d,c);break}else t(d,c);c=c.sibling}p.type===ke?(S=Mn(p.props.children,d.mode,S,p.key),S.return=d,d=S):(S=Pi(p.type,p.key,p.props,null,d.mode,S),Ya(S,p),S.return=d,d=S)}return s(d);case ze:e:{for(M=p.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),S=i(c,p.children||[]),S.return=d,d=S;break e}else{n(d,c);break}else t(d,c);c=c.sibling}S=ws(p,d.mode,S),S.return=d,d=S}return s(d);case _e:return p=Un(p),ue(d,c,p,S)}if(tt(p))return q(d,c,p,S);if(re(p)){if(M=re(p),typeof M!="function")throw Error(f(150));return p=M.call(p),O(d,c,p,S)}if(typeof p.then=="function")return ue(d,c,Xi(p),S);if(p.$$typeof===Ee)return ue(d,c,Wi(d,p),S);Zi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),S=i(c,p),S.return=d,d=S):(n(d,c),S=Cs(p,d.mode,S),S.return=d,d=S),s(d)):n(d,c)}return function(d,c,p,S){try{Va=0;var M=ue(d,c,p,S);return ua=null,M}catch(R){if(R===ca||R===Yi)throw R;var F=st(29,R,null,d.mode);return F.lanes=S,F.return=d,F}}}var Bn=Dc(!0),qc=Dc(!1),sn=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ee&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=_i(e),dc(e,null,n),t}return Li(e,a,t,n),_i(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bl(e,n)}}function Hs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bs=!1;function Xa(){if(Bs){var e=la;if(e!==null)throw e}}function Za(e,t,n,a){Bs=!1;var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var l=r,h=l.next;l.next=null,s===null?o=h:s.next=h,s=l;var y=e.alternate;y!==null&&(y=y.updateQueue,r=y.lastBaseUpdate,r!==s&&(r===null?y.firstBaseUpdate=h:r.next=h,y.lastBaseUpdate=l))}if(o!==null){var A=i.baseState;s=0,y=h=l=null,r=o;do{var m=r.lane&-536870913,g=m!==r.lane;if(g?(Q&m)===m:(a&m)===m){m!==0&&m===ra&&(Bs=!0),y!==null&&(y=y.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var q=e,O=r;m=t;var ue=n;switch(O.tag){case 1:if(q=O.payload,typeof q=="function"){A=q.call(ue,A,m);break e}A=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=O.payload,m=typeof q=="function"?q.call(ue,A,m):q,m==null)break e;A=z({},A,m);break e;case 2:sn=!0}}m=r.callback,m!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[m]:g.push(m))}else g={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},y===null?(h=y=g,l=A):y=y.next=g,s|=m;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;g=r,r=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);y===null&&(l=A),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=y,o===null&&(i.shared.lanes=0),pn|=s,e.lanes=s,e.memoizedState=A}}function Ec(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Rc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ec(n[e],t)}var da=u(null),Ji=u(0);function Mc(e,t){e=Qt,D(Ji,e),D(da,t),Qt=e|t.baseLanes}function js(){D(Ji,Qt),D(da,da.current)}function Ls(){Qt=Ji.current,C(da),C(Ji)}var rt=u(null),wt=null;function cn(e){var t=e.alternate;D(Se,Se.current&1),D(rt,e),wt===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(wt=e)}function _s(e){D(Se,Se.current),D(rt,e),wt===null&&(wt=e)}function zc(e){e.tag===22?(D(Se,Se.current),D(rt,e),wt===null&&(wt=e)):un()}function un(){D(Se,Se.current),D(rt,rt.current)}function lt(e){C(rt),wt===e&&(wt=null),C(Se)}var Se=u(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yr(n)||Qr(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,L=null,le=null,we=null,$i=!1,fa=!1,jn=!1,eo=0,Ja=0,pa=null,Bp=0;function ye(){throw Error(f(321))}function Ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Is(e,t,n,a,i,o){return Lt=o,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?mu:ir,jn=!1,o=n(a,i),jn=!1,fa&&(o=Oc(t,n,a,i)),Nc(e),o}function Nc(e){v.H=ei;var t=le!==null&&le.next!==null;if(Lt=0,we=le=L=null,$i=!1,Ja=0,pa=null,t)throw Error(f(300));e===null||Te||(e=e.dependencies,e!==null&&Gi(e)&&(Te=!0))}function Oc(e,t,n,a){L=e;var i=0;do{if(fa&&(pa=null),Ja=0,fa=!1,25<=i)throw Error(f(301));if(i+=1,we=le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}v.H=gu,o=t(n,a)}while(fa);return o}function jp(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fa(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(L.flags|=1024),t}function Gs(){var e=eo!==0;return eo=0,e}function Ws(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vs(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}Lt=0,we=le=L=null,fa=!1,Ja=eo=0,pa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?L.memoizedState=we=e:we=we.next=e,we}function Ae(){if(le===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=we===null?L.memoizedState:we.next;if(t!==null)we=t,le=e;else{if(e===null)throw L.alternate===null?Error(f(467)):Error(f(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},we===null?L.memoizedState=we=e:we=we.next=e}return we}function to(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fa(e){var t=Ja;return Ja+=1,pa===null&&(pa=[]),e=Tc(pa,e,t),t=L,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?mu:ir),e}function no(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fa(e);if(e.$$typeof===Ee)return Ke(e)}throw Error(f(438,String(e)))}function Ys(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=to(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Jt;return t.index++,n}function _t(e,t){return typeof t=="function"?t(e):t}function ao(e){var t=Ae();return Qs(t,le,e)}function Qs(e,t,n){var a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=n;var i=e.baseQueue,o=a.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,a.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var r=s=null,l=null,h=t,y=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(Q&A)===A:(Lt&A)===A){var m=h.revertLane;if(m===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===ra&&(y=!0);else if((Lt&m)===m){h=h.next,m===ra&&(y=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},l===null?(r=l=A,s=o):l=l.next=A,L.lanes|=m,pn|=m;A=h.action,jn&&n(o,A),o=h.hasEagerState?h.eagerState:n(o,A)}else m={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},l===null?(r=l=m,s=o):l=l.next=m,L.lanes|=A,pn|=A;h=h.next}while(h!==null&&h!==t);if(l===null?s=o:l.next=r,!ot(o,e.memoizedState)&&(Te=!0,y&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,a.lastRenderedState=o}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Xs(e){var t=Ae(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ot(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Kc(e,t,n){var a=L,i=Ae(),o=J;if(o){if(n===void 0)throw Error(f(407));n=n()}else n=t();var s=!ot((le||i).memoizedState,n);if(s&&(i.memoizedState=n,Te=!0),i=i.queue,Fs(Bc.bind(null,a,i,e),[e]),i.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Hc.bind(null,a,i,n,t),null),de===null)throw Error(f(349));o||(Lt&127)!==0||Uc(a,t,n)}return n}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=to(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,a){t.value=n,t.getSnapshot=a,jc(t)&&Lc(e)}function Bc(e,t,n){return n(function(){jc(t)&&Lc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Lc(e){var t=Rn(e,2);t!==null&&et(t,e,2)}function Zs(e){var t=We();if(typeof e=="function"){var n=e;if(e=n(),jn){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:e},t}function _c(e,t,n,a){return e.baseState=n,Qs(e,le,typeof a=="function"?a:_t)}function Lp(e,t,n,a,i){if(so(e))throw Error(f(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};v.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,Pc(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Pc(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var o=v.T,s={};v.T=s;try{var r=n(i,a),l=v.S;l!==null&&l(s,r),Ic(e,t,r)}catch(h){Js(e,t,h)}finally{o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}else try{o=n(i,a),Ic(e,t,o)}catch(h){Js(e,t,h)}}function Ic(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Gc(e,t,a)},function(a){return Js(e,t,a)}):Gc(e,t,n)}function Gc(e,t,n){t.status="fulfilled",t.value=n,Wc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Pc(e,n)))}function Js(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Wc(t),t=t.next;while(t!==a)}e.action=null}function Wc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vc(e,t){return t}function Yc(e,t){if(J){var n=de.formState;if(n!==null){e:{var a=L;if(J){if(pe){t:{for(var i=pe,o=Ct;i.nodeType!==8;){if(!o){i=null;break t}if(i=Tt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){pe=Tt(i.nextSibling),a=i.data==="F!";break e}}an(a)}a=!1}a&&(t=n[0])}}return n=We(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:t},n.queue=a,n=fu.bind(null,L,a),a.dispatch=n,a=Zs(!1),o=ar.bind(null,L,!1,a.queue),a=We(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Lp.bind(null,L,i,o,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Qc(e){var t=Ae();return Xc(t,le,e)}function Xc(e,t,n){if(t=Qs(e,t,Vc)[0],e=ao(_t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Fa(t)}catch(s){throw s===ca?Yi:s}else a=t;t=Ae();var i=t.queue,o=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ha(9,{destroy:void 0},_p.bind(null,i,n),null)),[a,o,e]}function _p(e,t){e.action=t}function Zc(e){var t=Ae(),n=le;if(n!==null)return Xc(t,n,e);Ae(),t=t.memoizedState,n=Ae();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ha(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=L.updateQueue,t===null&&(t=to(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Jc(){return Ae().memoizedState}function io(e,t,n,a){var i=We();L.flags|=e,i.memoizedState=ha(1|t,{destroy:void 0},n,a===void 0?null:a)}function oo(e,t,n,a){var i=Ae();a=a===void 0?null:a;var o=i.memoizedState.inst;le!==null&&a!==null&&Ps(a,le.memoizedState.deps)?i.memoizedState=ha(t,o,n,a):(L.flags|=e,i.memoizedState=ha(1|t,o,n,a))}function Fc(e,t){io(8390656,8,e,t)}function Fs(e,t){oo(2048,8,e,t)}function Pp(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=to(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $c(e){var t=Ae().memoizedState;return Pp({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function eu(e,t){return oo(4,2,e,t)}function tu(e,t){return oo(4,4,e,t)}function nu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){n=n!=null?n.concat([e]):null,oo(4,4,nu.bind(null,t,e),n)}function $s(){}function iu(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ps(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ou(e,t){var n=Ae();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ps(t,a[1]))return a[0];if(a=e(),jn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a}function er(e,t,n){return n===void 0||(Lt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sd(),L.lanes|=e,pn|=e,n)}function su(e,t,n,a){return ot(n,t)?n:da.current!==null?(e=er(e,n,a),ot(e,t)||(Te=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(Q&261930)===0?(Te=!0,e.memoizedState=n):(e=sd(),L.lanes|=e,pn|=e,t)}function ru(e,t,n,a,i){var o=x.p;x.p=o!==0&&8>o?o:8;var s=v.T,r={};v.T=r,ar(e,!1,t,n);try{var l=i(),h=v.S;if(h!==null&&h(r,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var y=Hp(l,a);$a(e,t,y,dt(e))}else $a(e,t,a,dt(e))}catch(A){$a(e,t,{then:function(){},status:"rejected",reason:A},dt())}finally{x.p=o,s!==null&&r.types!==null&&(s.types=r.types),v.T=s}}function Ip(){}function tr(e,t,n,a){if(e.tag!==5)throw Error(f(476));var i=lu(e).queue;ru(e,i,t,N,n===null?Ip:function(){return cu(e),n(a)})}function lu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:N},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cu(e){var t=lu(e);t.next===null&&(t=e.alternate.memoizedState),$a(e,t.next.queue,{},dt())}function nr(){return Ke(gi)}function uu(){return Ae().memoizedState}function du(){return Ae().memoizedState}function Gp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=dt();e=rn(n);var a=ln(t,e,n);a!==null&&(et(a,t,n),Qa(a,t,n)),t={cache:Ms()},e.payload=t;return}t=t.return}}function Wp(e,t,n){var a=dt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},so(e)?pu(t,n):(n=Ss(e,t,n,a),n!==null&&(et(n,e,a),hu(n,t,a)))}function fu(e,t,n){var a=dt();$a(e,t,n,a)}function $a(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(so(e))pu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,r=o(s,n);if(i.hasEagerState=!0,i.eagerState=r,ot(r,s))return Li(e,t,i,0),de===null&&ji(),!1}catch{}if(n=Ss(e,t,i,a),n!==null)return et(n,e,a),hu(n,t,a),!0}return!1}function ar(e,t,n,a){if(a={lane:2,revertLane:Kr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},so(e)){if(t)throw Error(f(479))}else t=Ss(e,n,a,2),t!==null&&et(t,e,2)}function so(e){var t=e.alternate;return e===L||t!==null&&t===L}function pu(e,t){fa=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hu(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bl(e,n)}}var ei={readContext:Ke,use:no,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ei.useEffectEvent=ye;var mu={readContext:Ke,use:no,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Fc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,io(4194308,4,nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var n=We();t=t===void 0?null:t;var a=e();if(jn){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=We();if(n!==void 0){var i=n(t);if(jn){Ft(!0);try{n(t)}finally{Ft(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Wp.bind(null,L,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,n=fu.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$s,useDeferredValue:function(e,t){var n=We();return er(n,e,t)},useTransition:function(){var e=Zs(!1);return e=ru.bind(null,L,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=L,i=We();if(J){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),de===null)throw Error(f(349));(Q&127)!==0||Uc(a,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fc(Bc.bind(null,a,o,e),[e]),a.flags|=2048,ha(9,{destroy:void 0},Hc.bind(null,a,o,n,t),null),n},useId:function(){var e=We(),t=de.identifierPrefix;if(J){var n=Rt,a=Et;n=(a&~(1<<32-it(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Bp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nr,useFormState:Yc,useActionState:Yc,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ar.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ys,useCacheRefresh:function(){return We().memoizedState=Gp.bind(null,L)},useEffectEvent:function(e){var t=We(),n={impl:e};return t.memoizedState=n,function(){if((ee&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},ir={readContext:Ke,use:no,useCallback:iu,useContext:Ke,useEffect:Fs,useImperativeHandle:au,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:ao,useRef:Jc,useState:function(){return ao(_t)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Ae();return su(n,le.memoizedState,e,t)},useTransition:function(){var e=ao(_t)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Kc,useId:uu,useHostTransitionStatus:nr,useFormState:Qc,useActionState:Qc,useOptimistic:function(e,t){var n=Ae();return _c(n,le,e,t)},useMemoCache:Ys,useCacheRefresh:du};ir.useEffectEvent=$c;var gu={readContext:Ke,use:no,useCallback:iu,useContext:Ke,useEffect:Fs,useImperativeHandle:au,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:Xs,useRef:Jc,useState:function(){return Xs(_t)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Ae();return le===null?er(n,e,t):su(n,le.memoizedState,e,t)},useTransition:function(){var e=Xs(_t)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fa(e),t]},useSyncExternalStore:Kc,useId:uu,useHostTransitionStatus:nr,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var n=Ae();return le!==null?_c(n,le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ys,useCacheRefresh:du};gu.useEffectEvent=$c;function or(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=dt(),i=rn(a);i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,a),t!==null&&(et(t,e,a),Qa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=dt(),i=rn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ln(e,i,a),t!==null&&(et(t,e,a),Qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),a=rn(n);a.tag=2,t!=null&&(a.callback=t),t=ln(e,a,n),t!==null&&(et(t,e,n),Qa(t,e,n))}};function yu(e,t,n,a,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,s):t.prototype&&t.prototype.isPureReactComponent?!La(n,a)||!La(i,o):!0}function vu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&sr.enqueueReplaceState(t,t.state,null)}function Ln(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=z({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function bu(e){Bi(e)}function Su(e){console.error(e)}function Au(e){Bi(e)}function ro(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Cu(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rr(e,t,n){return n=rn(n),n.tag=3,n.payload={element:null},n.callback=function(){ro(e,t)},n}function wu(e){return e=rn(e),e.tag=3,e}function Tu(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;e.payload=function(){return i(o)},e.callback=function(){Cu(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Cu(t,n,a),typeof i!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function Vp(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&sa(t,n,i,!0),n=rt.current,n!==null){switch(n.tag){case 31:case 13:return wt===null?So():n.alternate===null&&ve===0&&(ve=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Qi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),zr(e,a,i)),!1;case 22:return n.flags|=65536,a===Qi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),zr(e,a,i)),!1}throw Error(f(435,n.tag))}return zr(e,a,i),So(),!1}if(J)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ks&&(e=Error(f(422),{cause:a}),Ia(bt(e,n)))):(a!==ks&&(t=Error(f(423),{cause:a}),Ia(bt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=bt(a,n),i=rr(e.stateNode,a,i),Hs(e,i),ve!==4&&(ve=2)),!1;var o=Error(f(520),{cause:a});if(o=bt(o,n),li===null?li=[o]:li.push(o),ve!==4&&(ve=2),t===null)return!0;a=bt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rr(n.stateNode,a,e),Hs(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(hn===null||!hn.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=wu(i),Tu(i,e,n,a),Hs(n,i),!1}n=n.return}while(n!==null);return!1}var lr=Error(f(461)),Te=!1;function Ue(e,t,n,a){t.child=e===null?qc(t,null,n,a):Bn(t,e.child,n,a)}function xu(e,t,n,a,i){n=n.render;var o=t.ref;if("ref"in a){var s={};for(var r in a)r!=="ref"&&(s[r]=a[r])}else s=a;return On(t),a=Is(e,t,n,s,o,i),r=Gs(),e!==null&&!Te?(Ws(e,t,i),Pt(e,t,i)):(J&&r&&Ts(t),t.flags|=1,Ue(e,t,a,i),t.child)}function ku(e,t,n,a,i){if(e===null){var o=n.type;return typeof o=="function"&&!As(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Du(e,t,o,a,i)):(e=Pi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!gr(e,i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(s,a)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Ut(o,a),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,a,i){if(e!==null){var o=e.memoizedProps;if(La(o,a)&&e.ref===t.ref)if(Te=!1,t.pendingProps=a=o,gr(e,i))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return cr(e,t,n,a,i)}function qu(e,t,n,a){var i=a.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~o}else a=0,t.child=null;return Eu(e,t,o,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,o!==null?o.cachePool:null),o!==null?Mc(t,o):js(),zc(t);else return a=t.lanes=536870912,Eu(e,t,o!==null?o.baseLanes|n:n,n,a)}else o!==null?(Vi(t,o.cachePool),Mc(t,o),un(),t.memoizedState=null):(e!==null&&Vi(t,null),js(),un());return Ue(e,t,i,n),t.child}function ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Eu(e,t,n,a,i){var o=Ns();return o=o===null?null:{parent:Ce._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Vi(t,null),js(),zc(t),e!==null&&sa(e,t,a,!0),t.childLanes=i,null}function lo(e,t){return t=uo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ru(e,t,n){return Bn(t,e.child,null,n),e=lo(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Yp(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(J){if(a.mode==="hidden")return e=lo(t,a),t.lanes=536870912,ti(null,e);if(_s(t),(e=pe)?(e=Pd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tn!==null?{id:Et,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},n=pc(e),n.return=t,t.child=n,Oe=t,pe=null)):e=null,e===null)throw an(t);return t.lanes=536870912,null}return lo(t,a)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(_s(t),i)if(t.flags&256)t.flags&=-257,t=Ru(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Te||sa(e,t,n,!1),i=(n&e.childLanes)!==0,Te||i){if(a=de,a!==null&&(s=Sl(a,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Rn(e,s),et(a,e,s),lr;So(),t=Ru(e,t,n)}else e=o.treeContext,pe=Tt(s.nextSibling),Oe=t,J=!0,nn=null,Ct=!1,e!==null&&gc(t,e),t=lo(t,a),t.flags|=4096;return t}return e=Ut(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function co(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cr(e,t,n,a,i){return On(t),n=Is(e,t,n,a,void 0,i),a=Gs(),e!==null&&!Te?(Ws(e,t,i),Pt(e,t,i)):(J&&a&&Ts(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Mu(e,t,n,a,i,o){return On(t),t.updateQueue=null,n=Oc(t,a,n,i),Nc(e),a=Gs(),e!==null&&!Te?(Ws(e,t,o),Pt(e,t,o)):(J&&a&&Ts(t),t.flags|=1,Ue(e,t,n,o),t.child)}function zu(e,t,n,a,i){if(On(t),t.stateNode===null){var o=na,s=n.contextType;typeof s=="object"&&s!==null&&(o=Ke(s)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=sr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Ks(t),s=n.contextType,o.context=typeof s=="object"&&s!==null?Ke(s):na,o.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(or(t,n,s,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&sr.enqueueReplaceState(o,o.state,null),Za(t,a,o,i),Xa(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var r=t.memoizedProps,l=Ln(n,r);o.props=l;var h=o.context,y=n.contextType;s=na,typeof y=="object"&&y!==null&&(s=Ke(y));var A=n.getDerivedStateFromProps;y=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r||h!==s)&&vu(t,o,a,s),sn=!1;var m=t.memoizedState;o.state=m,Za(t,a,o,i),Xa(),h=t.memoizedState,r||m!==h||sn?(typeof A=="function"&&(or(t,n,A,a),h=t.memoizedState),(l=sn||yu(t,n,l,a,m,h,s))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),o.props=a,o.state=h,o.context=s,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Us(e,t),s=t.memoizedProps,y=Ln(n,s),o.props=y,A=t.pendingProps,m=o.context,h=n.contextType,l=na,typeof h=="object"&&h!==null&&(l=Ke(h)),r=n.getDerivedStateFromProps,(h=typeof r=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==A||m!==l)&&vu(t,o,a,l),sn=!1,m=t.memoizedState,o.state=m,Za(t,a,o,i),Xa();var g=t.memoizedState;s!==A||m!==g||sn||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof r=="function"&&(or(t,n,r,a),g=t.memoizedState),(y=sn||yu(t,n,y,a,m,g,l)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),o.props=a,o.state=g,o.context=l,a=y):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,co(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=Bn(t,e.child,null,i),t.child=Bn(t,null,n,i)):Ue(e,t,n,i),t.memoizedState=o.state,e=t.child):e=Pt(e,t,i),e}function Nu(e,t,n,a){return zn(),t.flags|=256,Ue(e,t,n,a),t.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dr(e){return{baseLanes:e,cachePool:Cc()}}function fr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ut),e}function Ou(e,t,n){var a=t.pendingProps,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(J){if(i?cn(t):un(),(e=pe)?(e=Pd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tn!==null?{id:Et,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},n=pc(e),n.return=t,t.child=n,Oe=t,pe=null)):e=null,e===null)throw an(t);return Qr(e)?t.lanes=32:t.lanes=536870912,null}var r=a.children;return a=a.fallback,i?(un(),i=t.mode,r=uo({mode:"hidden",children:r},i),a=Mn(a,i,n,null),r.return=t,a.return=t,r.sibling=a,t.child=r,a=t.child,a.memoizedState=dr(n),a.childLanes=fr(e,s,n),t.memoizedState=ur,ti(null,a)):(cn(t),pr(t,r))}var l=e.memoizedState;if(l!==null&&(r=l.dehydrated,r!==null)){if(o)t.flags&256?(cn(t),t.flags&=-257,t=hr(e,t,n)):t.memoizedState!==null?(un(),t.child=e.child,t.flags|=128,t=null):(un(),r=a.fallback,i=t.mode,a=uo({mode:"visible",children:a.children},i),r=Mn(r,i,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Bn(t,e.child,null,n),a=t.child,a.memoizedState=dr(n),a.childLanes=fr(e,s,n),t.memoizedState=ur,t=ti(null,a));else if(cn(t),Qr(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var h=s.dgst;s=h,a=Error(f(419)),a.stack="",a.digest=s,Ia({value:a,source:null,stack:null}),t=hr(e,t,n)}else if(Te||sa(e,t,n,!1),s=(n&e.childLanes)!==0,Te||s){if(s=de,s!==null&&(a=Sl(s,n),a!==0&&a!==l.retryLane))throw l.retryLane=a,Rn(e,a),et(s,e,a),lr;Yr(r)||So(),t=hr(e,t,n)}else Yr(r)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,pe=Tt(r.nextSibling),Oe=t,J=!0,nn=null,Ct=!1,e!==null&&gc(t,e),t=pr(t,a.children),t.flags|=4096);return t}return i?(un(),r=a.fallback,i=t.mode,l=e.child,h=l.sibling,a=Ut(l,{mode:"hidden",children:a.children}),a.subtreeFlags=l.subtreeFlags&65011712,h!==null?r=Ut(h,r):(r=Mn(r,i,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,ti(null,a),a=t.child,r=e.child.memoizedState,r===null?r=dr(n):(i=r.cachePool,i!==null?(l=Ce._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Cc(),r={baseLanes:r.baseLanes|n,cachePool:i}),a.memoizedState=r,a.childLanes=fr(e,s,n),t.memoizedState=ur,ti(e.child,a)):(cn(t),n=e.child,e=n.sibling,n=Ut(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function pr(e,t){return t=uo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function uo(e,t){return e=st(22,e,null,t),e.lanes=0,e}function hr(e,t,n){return Bn(t,e.child,null,n),e=pr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ku(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Es(e.return,t,n)}function mr(e,t,n,a,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i,s.treeForkCount=o)}function Uu(e,t,n){var a=t.pendingProps,i=a.revealOrder,o=a.tail;a=a.children;var s=Se.current,r=(s&2)!==0;if(r?(s=s&1|2,t.flags|=128):s&=1,D(Se,s),Ue(e,t,a,n),a=J?Pa:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mr(t,!1,i,n,o,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mr(t,!0,n,null,o,a);break;case"together":mr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gi(e)))}function Qp(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),on(t,Ce,e.memoizedState.cache),zn();break;case 27:case 5:Da(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:on(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_s(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ou(e,t,n):(cn(t),e=Pt(e,t,n),e!==null?e.sibling:null);cn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(sa(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Uu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(Se,Se.current),a)break;return null;case 22:return t.lanes=0,qu(e,t,n,t.pendingProps);case 24:on(t,Ce,e.memoizedState.cache)}return Pt(e,t,n)}function Hu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!gr(e,n)&&(t.flags&128)===0)return Te=!1,Qp(e,t,n);Te=(e.flags&131072)!==0}else Te=!1,J&&(t.flags&1048576)!==0&&mc(t,Pa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Un(t.elementType),t.type=e,typeof e=="function")As(e)?(a=Ln(e,a),t.tag=1,t=zu(null,t,e,a,n)):(t.tag=0,t=cr(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===De){t.tag=11,t=xu(null,t,e,a,n);break e}else if(i===G){t.tag=14,t=ku(null,t,e,a,n);break e}}throw t=Ye(e)||e,Error(f(306,t,""))}}return t;case 0:return cr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ln(a,t.pendingProps),zu(e,t,a,i,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(f(387));a=t.pendingProps;var o=t.memoizedState;i=o.element,Us(e,t),Za(t,a,null,n);var s=t.memoizedState;if(a=s.cache,on(t,Ce,a),a!==o.cache&&Rs(t,[Ce],n,!0),Xa(),a=s.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Nu(e,t,a,n);break e}else if(a!==i){i=bt(Error(f(424)),t),Ia(i),t=Nu(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pe=Tt(e.firstChild),Oe=t,J=!0,nn=null,Ct=!0,n=qc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),a===i){t=Pt(e,t,n);break e}Ue(e,t,a,n)}t=t.child}return t;case 26:return co(e,t),e===null?(n=Qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:J||(n=t.type,e=t.pendingProps,a=Do(W.current).createElement(n),a[Ne]=t,a[Qe]=e,He(a,n,e),Re(a),t.stateNode=a):t.memoizedState=Qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&J&&(a=t.stateNode=Wd(t.type,t.pendingProps,W.current),Oe=t,Ct=!0,i=pe,vn(t.type)?(Xr=i,pe=Tt(a.firstChild)):pe=i),Ue(e,t,t.pendingProps.children,n),co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((i=a=pe)&&(a=Th(a,t.type,t.pendingProps,Ct),a!==null?(t.stateNode=a,Oe=t,pe=Tt(a.firstChild),Ct=!1,i=!0):i=!1),i||an(t)),Da(t),i=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,Gr(i,o)?a=null:s!==null&&Gr(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Is(e,t,jp,null,null,n),gi._currentValue=i),co(e,t),Ue(e,t,a,n),t.child;case 6:return e===null&&J&&((e=n=pe)&&(n=xh(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Oe=t,pe=null,e=!0):e=!1),e||an(t)),null;case 13:return Ou(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Bn(t,null,a,n):Ue(e,t,a,n),t.child;case 11:return xu(e,t,t.type,t.pendingProps,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,on(t,t.type,a.value),Ue(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,On(t),i=Ke(i),a=a(i),t.flags|=1,Ue(e,t,a,n),t.child;case 14:return ku(e,t,t.type,t.pendingProps,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 19:return Uu(e,t,n);case 31:return Yp(e,t,n);case 22:return qu(e,t,n,t.pendingProps);case 24:return On(t),a=Ke(Ce),e===null?(i=Ns(),i===null&&(i=de,o=Ms(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:a,cache:i},Ks(t),on(t,Ce,i)):((e.lanes&n)!==0&&(Us(e,t),Za(t,null,null,n),Xa()),i=e.memoizedState,o=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),on(t,Ce,a)):(a=o.cache,on(t,Ce,a),a!==i.cache&&Rs(t,[Ce],n,!0))),Ue(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function It(e){e.flags|=4}function yr(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ud())e.flags|=8192;else throw Hn=Qi,Os}else e.flags&=-16777217}function Bu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$d(t))if(ud())e.flags|=8192;else throw Hn=Qi,Os}function fo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yl():536870912,e.lanes|=t,va|=t)}function ni(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Xp(e,t,n){var a=t.pendingProps;switch(xs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),jt(Ce),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),he(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(It(t),o!==null?(he(t),Bu(t,o)):(he(t),yr(t,i,null,a,n))):o?o!==e.memoizedState?(It(t),he(t),Bu(t,o)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&It(t),he(t),yr(t,i,e,a,n)),null;case 27:if(Ci(t),n=W.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return he(t),null}e=E.current,oa(t)?yc(t):(e=Wd(i,a,n),t.stateNode=e,It(t))}return he(t),null;case 5:if(Ci(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return he(t),null}if(o=E.current,oa(t))yc(t);else{var s=Do(W.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?o.multiple=!0:a.size&&(o.size=a.size);break;default:o=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}o[Ne]=t,o[Qe]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(He(o,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&It(t)}}return he(t),yr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(f(166));if(e=W.current,oa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Oe,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ne]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Od(e.nodeValue,n)),e||an(t,!0)}else e=Do(e).createTextNode(a),e[Ne]=t,t.stateNode=e}return he(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=oa(t),n!==null){if(e===null){if(!a)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ne]=t}else zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else n=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return he(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=oa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Ne]=t}else zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else i=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),fo(t,t.updateQueue),he(t),null);case 4:return be(),e===null&&jr(t.stateNode.containerInfo),he(t),null;case 10:return jt(t.type),he(t),null;case 19:if(C(Se),a=t.memoizedState,a===null)return he(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)ni(a,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Fi(e),o!==null){for(t.flags|=128,ni(a,!1),e=o.updateQueue,t.updateQueue=e,fo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fc(n,e),n=n.sibling;return D(Se,Se.current&1|2),J&&Ht(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>yo&&(t.flags|=128,i=!0,ni(a,!1),t.lanes=4194304)}else{if(!i)if(e=Fi(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fo(t,e),ni(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!J)return he(t),null}else 2*nt()-a.renderingStartTime>yo&&n!==536870912&&(t.flags|=128,i=!0,ni(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,n=Se.current,D(Se,i?n&1|2:n&1),J&&Ht(t,a.treeForkCount),e):(he(t),null);case 22:case 23:return lt(t),Ls(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),n=t.updateQueue,n!==null&&fo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&C(Kn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jt(Ce),he(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Zp(e,t){switch(xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jt(Ce),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ci(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(f(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Se),null;case 4:return be(),null;case 10:return jt(t.type),null;case 22:case 23:return lt(t),Ls(),e!==null&&C(Kn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jt(Ce),null;case 25:return null;default:return null}}function ju(e,t){switch(xs(t),t.tag){case 3:jt(Ce),be();break;case 26:case 27:case 5:Ci(t);break;case 4:be();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:C(Se);break;case 10:jt(t.type);break;case 22:case 23:lt(t),Ls(),e!==null&&C(Kn);break;case 24:jt(Ce)}}function ai(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var o=n.create,s=n.inst;a=o(),s.destroy=a}n=n.next}while(n!==i)}}catch(r){se(t,t.return,r)}}function dn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){var s=a.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,i=t;var l=n,h=r;try{h()}catch(y){se(i,l,y)}}}a=a.next}while(a!==o)}}catch(y){se(t,t.return,y)}}function Lu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rc(t,n)}catch(a){se(e,e.return,a)}}}function _u(e,t,n){n.props=Ln(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){se(e,t,a)}}function ii(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){se(e,t,i)}}function Mt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){se(e,t,i)}else n.current=null}function Pu(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){se(e,e.return,i)}}function vr(e,t,n){try{var a=e.stateNode;vh(a,e.type,n,t),a[Qe]=t}catch(i){se(e,e.return,i)}}function Iu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vn(e.type)||e.tag===4}function br(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ot));else if(a!==4&&(a===27&&vn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Sr(e,t,n),e=e.sibling;e!==null;)Sr(e,t,n),e=e.sibling}function po(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&vn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(po(e,t,n),e=e.sibling;e!==null;)po(e,t,n),e=e.sibling}function Gu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);He(t,a,n),t[Ne]=e,t[Qe]=n}catch(o){se(e,e.return,o)}}var Gt=!1,xe=!1,Ar=!1,Wu=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Jp(e,t){if(e=e.containerInfo,Pr=Oo,e=ac(e),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,r=-1,l=-1,h=0,y=0,A=e,m=null;t:for(;;){for(var g;A!==n||i!==0&&A.nodeType!==3||(r=s+i),A!==o||a!==0&&A.nodeType!==3||(l=s+a),A.nodeType===3&&(s+=A.nodeValue.length),(g=A.firstChild)!==null;)m=A,A=g;for(;;){if(A===e)break t;if(m===n&&++h===i&&(r=s),m===o&&++y===a&&(l=s),(g=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=g}n=r===-1||l===-1?null:{start:r,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ir={focusedElem:e,selectionRange:n},Oo=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var q=Ln(n.type,i);e=a.getSnapshotBeforeUpdate(q,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(O){se(n,n.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Vu(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(e,n),a&4&&ai(5,n);break;case 1:if(Vt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){se(n,n.return,s)}else{var i=Ln(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){se(n,n.return,s)}}a&64&&Lu(n),a&512&&ii(n,n.return);break;case 3:if(Vt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rc(e,t)}catch(s){se(n,n.return,s)}}break;case 27:t===null&&a&4&&Gu(n);case 26:case 5:Vt(e,n),t===null&&a&4&&Pu(n),a&512&&ii(n,n.return);break;case 12:Vt(e,n);break;case 31:Vt(e,n),a&4&&Xu(e,n);break;case 13:Vt(e,n),a&4&&Zu(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sh.bind(null,n),kh(e,n))));break;case 22:if(a=n.memoizedState!==null||Gt,!a){t=t!==null&&t.memoizedState!==null||xe,i=Gt;var o=xe;Gt=a,(xe=t)&&!o?Yt(e,n,(n.subtreeFlags&8772)!==0):Vt(e,n),Gt=i,xe=o}break;case 30:break;default:Vt(e,n)}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,Ze=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 26:xe||Mt(n,t),Wt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xe||Mt(n,t);var a=me,i=Ze;vn(n.type)&&(me=n.stateNode,Ze=!1),Wt(e,t,n),pi(n.stateNode),me=a,Ze=i;break;case 5:xe||Mt(n,t);case 6:if(a=me,i=Ze,me=null,Wt(e,t,n),me=a,Ze=i,me!==null)if(Ze)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(n.stateNode)}catch(o){se(n,t,o)}else try{me.removeChild(n.stateNode)}catch(o){se(n,t,o)}break;case 18:me!==null&&(Ze?(e=me,Ld(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ka(e)):Ld(me,n.stateNode));break;case 4:a=me,i=Ze,me=n.stateNode.containerInfo,Ze=!0,Wt(e,t,n),me=a,Ze=i;break;case 0:case 11:case 14:case 15:dn(2,n,t),xe||dn(4,n,t),Wt(e,t,n);break;case 1:xe||(Mt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&_u(n,t,a)),Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:xe=(a=xe)||n.memoizedState!==null,Wt(e,t,n),xe=a;break;default:Wt(e,t,n)}}function Xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ka(e)}catch(n){se(t,t.return,n)}}}function Zu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ka(e)}catch(n){se(t,t.return,n)}}function Fp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wu),t;default:throw Error(f(435,e.tag))}}function ho(e,t){var n=Fp(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=rh.bind(null,e,a);a.then(i,i)}})}function Je(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],o=e,s=t,r=s;e:for(;r!==null;){switch(r.tag){case 27:if(vn(r.type)){me=r.stateNode,Ze=!1;break e}break;case 5:me=r.stateNode,Ze=!1;break e;case 3:case 4:me=r.stateNode.containerInfo,Ze=!0;break e}r=r.return}if(me===null)throw Error(f(160));Qu(o,s,i),me=null,Ze=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}var Dt=null;function Ju(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Je(t,e),Fe(e),a&4&&(dn(3,e,e.return),ai(3,e),dn(5,e,e.return));break;case 1:Je(t,e),Fe(e),a&512&&(xe||n===null||Mt(n,n.return)),a&64&&Gt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Dt;if(Je(t,e),Fe(e),a&512&&(xe||n===null||Mt(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Ma]||o[Ne]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),He(o,a,n),o[Ne]=e,Re(o),a=o;break e;case"link":var s=Jd("link","href",i).get(a+(n.href||""));if(s){for(var r=0;r<s.length;r++)if(o=s[r],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break t}}o=i.createElement(a),He(o,a,n),i.head.appendChild(o);break;case"meta":if(s=Jd("meta","content",i).get(a+(n.content||""))){for(r=0;r<s.length;r++)if(o=s[r],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break t}}o=i.createElement(a),He(o,a,n),i.head.appendChild(o);break;default:throw Error(f(468,a))}o[Ne]=e,Re(o),a=o}e.stateNode=a}else Fd(i,e.type,e.stateNode);else e.stateNode=Zd(i,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?Fd(i,e.type,e.stateNode):Zd(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&vr(e,e.memoizedProps,n.memoizedProps)}break;case 27:Je(t,e),Fe(e),a&512&&(xe||n===null||Mt(n,n.return)),n!==null&&a&4&&vr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Je(t,e),Fe(e),a&512&&(xe||n===null||Mt(n,n.return)),e.flags&32){i=e.stateNode;try{Xn(i,"")}catch(q){se(e,e.return,q)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,vr(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Ar=!0);break;case 6:if(Je(t,e),Fe(e),a&4){if(e.stateNode===null)throw Error(f(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(q){se(e,e.return,q)}}break;case 3:if(Ro=null,i=Dt,Dt=qo(t.containerInfo),Je(t,e),Dt=i,Fe(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(t.containerInfo)}catch(q){se(e,e.return,q)}Ar&&(Ar=!1,Fu(e));break;case 4:a=Dt,Dt=qo(e.stateNode.containerInfo),Je(t,e),Fe(e),Dt=a;break;case 12:Je(t,e),Fe(e);break;case 31:Je(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ho(e,a)));break;case 13:Je(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(go=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ho(e,a)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,h=Gt,y=xe;if(Gt=h||i,xe=y||l,Je(t,e),xe=y,Gt=h,Fe(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||Gt||xe||_n(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,i)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=l.stateNode;var A=l.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(q){se(l,l.return,q)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(q){se(l,l.return,q)}}}else if(t.tag===18){if(n===null){l=t;try{var g=l.stateNode;i?_d(g,!0):_d(l.stateNode,!1)}catch(q){se(l,l.return,q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ho(e,n))));break;case 19:Je(t,e),Fe(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ho(e,a)));break;case 30:break;case 21:break;default:Je(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Iu(a)){n=a;break}a=a.return}if(n==null)throw Error(f(160));switch(n.tag){case 27:var i=n.stateNode,o=br(e);po(e,o,i);break;case 5:var s=n.stateNode;n.flags&32&&(Xn(s,""),n.flags&=-33);var r=br(e);po(e,r,s);break;case 3:case 4:var l=n.stateNode.containerInfo,h=br(e);Sr(e,h,l);break;default:throw Error(f(161))}}catch(y){se(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vu(e,t.alternate,t),t=t.sibling}function _n(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dn(4,t,t.return),_n(t);break;case 1:Mt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_u(t,t.return,n),_n(t);break;case 27:pi(t.stateNode);case 26:case 5:Mt(t,t.return),_n(t);break;case 22:t.memoizedState===null&&_n(t);break;case 30:_n(t);break;default:_n(t)}e=e.sibling}}function Yt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:Yt(i,o,n),ai(4,o);break;case 1:if(Yt(i,o,n),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){se(a,a.return,h)}if(a=o,i=a.updateQueue,i!==null){var r=a.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Ec(l[i],r)}catch(h){se(a,a.return,h)}}n&&s&64&&Lu(o),ii(o,o.return);break;case 27:Gu(o);case 26:case 5:Yt(i,o,n),n&&a===null&&s&4&&Pu(o),ii(o,o.return);break;case 12:Yt(i,o,n);break;case 31:Yt(i,o,n),n&&s&4&&Xu(i,o);break;case 13:Yt(i,o,n),n&&s&4&&Zu(i,o);break;case 22:o.memoizedState===null&&Yt(i,o,n),ii(o,o.return);break;case 30:break;default:Yt(i,o,n)}t=t.sibling}}function Cr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ga(n))}function wr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$u(e,t,n,a),t=t.sibling}function $u(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&ai(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ga(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,r=o.onPostCommit;typeof r=="function"&&r(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){se(t,t.return,l)}}else qt(e,t,n,a);break;case 31:qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?qt(e,t,n,a):oi(e,t):o._visibility&2?qt(e,t,n,a):(o._visibility|=2,ma(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Cr(s,t);break;case 24:qt(e,t,n,a),i&2048&&wr(t.alternate,t);break;default:qt(e,t,n,a)}}function ma(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,r=n,l=a,h=s.flags;switch(s.tag){case 0:case 11:case 15:ma(o,s,r,l,i),ai(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?ma(o,s,r,l,i):oi(o,s):(y._visibility|=2,ma(o,s,r,l,i)),i&&h&2048&&Cr(s.alternate,s);break;case 24:ma(o,s,r,l,i),i&&h&2048&&wr(s.alternate,s);break;default:ma(o,s,r,l,i)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:oi(n,a),i&2048&&Cr(a.alternate,a);break;case 24:oi(n,a),i&2048&&wr(a.alternate,a);break;default:oi(n,a)}t=t.sibling}}var si=8192;function ga(e,t,n){if(e.subtreeFlags&si)for(e=e.child;e!==null;)ed(e,t,n),e=e.sibling}function ed(e,t,n){switch(e.tag){case 26:ga(e,t,n),e.flags&si&&e.memoizedState!==null&&Bh(n,Dt,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,n);break;case 3:case 4:var a=Dt;Dt=qo(e.stateNode.containerInfo),ga(e,t,n),Dt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=si,si=16777216,ga(e,t,n),si=a):ga(e,t,n));break;default:ga(e,t,n)}}function td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Me=a,ad(a,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(e),e=e.sibling}function nd(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&dn(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mo(e)):ri(e);break;default:ri(e)}}function mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Me=a,ad(a,e)}td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dn(8,t,t.return),mo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mo(t));break;default:mo(t)}e=e.sibling}}function ad(e,t){for(;Me!==null;){var n=Me;switch(n.tag){case 0:case 11:case 15:dn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Me=a;else e:for(n=e;Me!==null;){a=Me;var i=a.sibling,o=a.return;if(Yu(a),a===n){Me=null;break e}if(i!==null){i.return=o,Me=i;break e}Me=o}}}var $p={getCacheForType:function(e){var t=Ke(Ce),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ke(Ce).controller.signal}},eh=typeof WeakMap=="function"?WeakMap:Map,ee=0,de=null,V=null,Q=0,oe=0,ct=null,fn=!1,ya=!1,Tr=!1,Qt=0,ve=0,pn=0,Pn=0,xr=0,ut=0,va=0,li=null,$e=null,kr=!1,go=0,id=0,yo=1/0,vo=null,hn=null,qe=0,mn=null,ba=null,Xt=0,Dr=0,qr=null,od=null,ci=0,Er=null;function dt(){return(ee&2)!==0&&Q!==0?Q&-Q:v.T!==null?Kr():Al()}function sd(){if(ut===0)if((Q&536870912)===0||J){var e=xi;xi<<=1,(xi&3932160)===0&&(xi=262144),ut=e}else ut=536870912;return e=rt.current,e!==null&&(e.flags|=32),ut}function et(e,t,n){(e===de&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Sa(e,0),gn(e,Q,ut,!1)),Ra(e,n),((ee&2)===0||e!==de)&&(e===de&&((ee&2)===0&&(Pn|=n),ve===4&&gn(e,Q,ut,!1)),zt(e))}function rd(e,t,n){if((ee&6)!==0)throw Error(f(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ea(e,t),i=a?ah(e,t):Mr(e,t,!0),o=a;do{if(i===0){ya&&!a&&gn(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!th(n)){i=Mr(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var r=e;i=li;var l=r.current.memoizedState.isDehydrated;if(l&&(Sa(r,s).flags|=256),s=Mr(r,s,!1),s!==2){if(Tr&&!l){r.errorRecoveryDisabledLanes|=o,Pn|=o,i=4;break e}o=$e,$e=i,o!==null&&($e===null?$e=o:$e.push.apply($e,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Sa(e,0),gn(e,t,0,!0);break}e:{switch(a=e,o=i,o){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:gn(a,t,ut,!fn);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(i=go+300-nt(),10<i)){if(gn(a,t,ut,!fn),Di(a,0,!0)!==0)break e;Xt=t,a.timeoutHandle=Bd(ld.bind(null,a,n,$e,vo,kr,t,ut,Pn,va,fn,o,"Throttled",-0,0),i);break e}ld(a,n,$e,vo,kr,t,ut,Pn,va,fn,o,null,-0,0)}}break}while(!0);zt(e)}function ld(e,t,n,a,i,o,s,r,l,h,y,A,m,g){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},ed(t,o,A);var q=(o&62914560)===o?go-nt():(o&4194048)===o?id-nt():0;if(q=jh(A,q),q!==null){Xt=o,e.cancelPendingCommit=q(gd.bind(null,e,t,o,n,a,i,s,r,l,y,A,null,m,g)),gn(e,o,s,!h);return}}gd(e,t,o,n,a,i,s,r,l)}function th(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t,n,a){t&=~xr,t&=~Pn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var o=31-it(i),s=1<<o;a[o]=-1,i&=~s}n!==0&&vl(e,n,t)}function bo(){return(ee&6)===0?(ui(0),!1):!0}function Rr(){if(V!==null){if(oe===0)var e=V.return;else e=V,Bt=Nn=null,Vs(e),ua=null,Va=0,e=V;for(;e!==null;)ju(e.alternate,e),e=e.return;V=null}}function Sa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ah(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xt=0,Rr(),de=e,V=n=Ut(e.current,null),Q=t,oe=0,ct=null,fn=!1,ya=Ea(e,t),Tr=!1,va=ut=xr=Pn=pn=ve=0,$e=li=null,kr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-it(a),o=1<<i;t|=e[i],a&=~o}return Qt=t,ji(),n}function cd(e,t){L=null,v.H=ei,t===ca||t===Yi?(t=xc(),oe=3):t===Os?(t=xc(),oe=4):oe=t===lr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,V===null&&(ve=1,ro(e,bt(t,e.current)))}function ud(){var e=rt.current;return e===null?!0:(Q&4194048)===Q?wt===null:(Q&62914560)===Q||(Q&536870912)!==0?e===wt:!1}function dd(){var e=v.H;return v.H=ei,e===null?ei:e}function fd(){var e=v.A;return v.A=$p,e}function So(){ve=4,fn||(Q&4194048)!==Q&&rt.current!==null||(ya=!0),(pn&134217727)===0&&(Pn&134217727)===0||de===null||gn(de,Q,ut,!1)}function Mr(e,t,n){var a=ee;ee|=2;var i=dd(),o=fd();(de!==e||Q!==t)&&(vo=null,Sa(e,t)),t=!1;var s=ve;e:do try{if(oe!==0&&V!==null){var r=V,l=ct;switch(oe){case 8:Rr(),s=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var h=oe;if(oe=0,ct=null,Aa(e,r,l,h),n&&ya){s=0;break e}break;default:h=oe,oe=0,ct=null,Aa(e,r,l,h)}}nh(),s=ve;break}catch(y){cd(e,y)}while(!0);return t&&e.shellSuspendCounter++,Bt=Nn=null,ee=a,v.H=i,v.A=o,V===null&&(de=null,Q=0,ji()),s}function nh(){for(;V!==null;)pd(V)}function ah(e,t){var n=ee;ee|=2;var a=dd(),i=fd();de!==e||Q!==t?(vo=null,yo=nt()+500,Sa(e,t)):ya=Ea(e,t);e:do try{if(oe!==0&&V!==null){t=V;var o=ct;t:switch(oe){case 1:oe=0,ct=null,Aa(e,t,o,1);break;case 2:case 9:if(wc(o)){oe=0,ct=null,hd(t);break}t=function(){oe!==2&&oe!==9||de!==e||(oe=7),zt(e)},o.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:wc(o)?(oe=0,ct=null,hd(t)):(oe=0,ct=null,Aa(e,t,o,7));break;case 5:var s=null;switch(V.tag){case 26:s=V.memoizedState;case 5:case 27:var r=V;if(s?$d(s):r.stateNode.complete){oe=0,ct=null;var l=r.sibling;if(l!==null)V=l;else{var h=r.return;h!==null?(V=h,Ao(h)):V=null}break t}}oe=0,ct=null,Aa(e,t,o,5);break;case 6:oe=0,ct=null,Aa(e,t,o,6);break;case 8:Rr(),ve=6;break e;default:throw Error(f(462))}}ih();break}catch(y){cd(e,y)}while(!0);return Bt=Nn=null,v.H=a,v.A=i,ee=n,V!==null?0:(de=null,Q=0,ji(),ve)}function ih(){for(;V!==null&&!Df();)pd(V)}function pd(e){var t=Hu(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?Ao(e):V=t}function hd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Mu(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Mu(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:Vs(t);default:ju(n,t),t=V=fc(t,Qt),t=Hu(n,t,Qt)}e.memoizedProps=e.pendingProps,t===null?Ao(e):V=t}function Aa(e,t,n,a){Bt=Nn=null,Vs(t),ua=null,Va=0;var i=t.return;try{if(Vp(e,i,t,n,Q)){ve=1,ro(e,bt(n,e.current)),V=null;return}}catch(o){if(i!==null)throw V=i,o;ve=1,ro(e,bt(n,e.current)),V=null;return}t.flags&32768?(J||a===1?e=!0:ya||(Q&536870912)!==0?e=!1:(fn=e=!0,(a===2||a===9||a===3||a===6)&&(a=rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),md(t,e)):Ao(t)}function Ao(e){var t=e;do{if((t.flags&32768)!==0){md(t,fn);return}e=t.return;var n=Xp(t.alternate,t,Qt);if(n!==null){V=n;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);ve===0&&(ve=5)}function md(e,t){do{var n=Zp(e.alternate,e);if(n!==null){n.flags&=32767,V=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=n}while(e!==null);ve=6,V=null}function gd(e,t,n,a,i,o,s,r,l){e.cancelPendingCommit=null;do Co();while(qe!==0);if((ee&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(o=t.lanes|t.childLanes,o|=bs,Hf(e,n,o,s,r,l),e===de&&(V=de=null,Q=0),ba=t,mn=e,Xt=n,Dr=o,qr=i,od=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lh(wi,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,i=x.p,x.p=2,s=ee,ee|=4;try{Jp(e,t,n)}finally{ee=s,x.p=i,v.T=a}}qe=1,yd(),vd(),bd()}}function yd(){if(qe===1){qe=0;var e=mn,t=ba,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null;var a=x.p;x.p=2;var i=ee;ee|=4;try{Ju(t,e);var o=Ir,s=ac(e.containerInfo),r=o.focusedElem,l=o.selectionRange;if(s!==r&&r&&r.ownerDocument&&nc(r.ownerDocument.documentElement,r)){if(l!==null&&hs(r)){var h=l.start,y=l.end;if(y===void 0&&(y=h),"selectionStart"in r)r.selectionStart=h,r.selectionEnd=Math.min(y,r.value.length);else{var A=r.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var g=m.getSelection(),q=r.textContent.length,O=Math.min(l.start,q),ue=l.end===void 0?O:Math.min(l.end,q);!g.extend&&O>ue&&(s=ue,ue=O,O=s);var d=tc(r,O),c=tc(r,ue);if(d&&c&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==c.node||g.focusOffset!==c.offset)){var p=A.createRange();p.setStart(d.node,d.offset),g.removeAllRanges(),O>ue?(g.addRange(p),g.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),g.addRange(p))}}}}for(A=[],g=r;g=g.parentNode;)g.nodeType===1&&A.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<A.length;r++){var S=A[r];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Oo=!!Pr,Ir=Pr=null}finally{ee=i,x.p=a,v.T=n}}e.current=t,qe=2}}function vd(){if(qe===2){qe=0;var e=mn,t=ba,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=v.T,v.T=null;var a=x.p;x.p=2;var i=ee;ee|=4;try{Vu(e,t.alternate,t)}finally{ee=i,x.p=a,v.T=n}}qe=3}}function bd(){if(qe===4||qe===3){qe=0,qf();var e=mn,t=ba,n=Xt,a=od;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,ba=mn=null,Sd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(hn=null),Xo(n),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=v.T,i=x.p,x.p=2,v.T=null;try{for(var o=e.onRecoverableError,s=0;s<a.length;s++){var r=a[s];o(r.value,{componentStack:r.stack})}}finally{v.T=t,x.p=i}}(Xt&3)!==0&&Co(),zt(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Er?ci++:(ci=0,Er=e):ci=0,ui(0)}}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ga(t)))}function Co(){return yd(),vd(),bd(),Ad()}function Ad(){if(qe!==5)return!1;var e=mn,t=Dr;Dr=0;var n=Xo(Xt),a=v.T,i=x.p;try{x.p=32>n?32:n,v.T=null,n=qr,qr=null;var o=mn,s=Xt;if(qe=0,ba=mn=null,Xt=0,(ee&6)!==0)throw Error(f(331));var r=ee;if(ee|=4,nd(o.current),$u(o,o.current,s,n),ee=r,ui(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(qa,o)}catch{}return!0}finally{x.p=i,v.T=a,Sd(e,t)}}function Cd(e,t,n){t=bt(n,t),t=rr(e.stateNode,t,2),e=ln(e,t,2),e!==null&&(Ra(e,2),zt(e))}function se(e,t,n){if(e.tag===3)Cd(e,e,n);else for(;t!==null;){if(t.tag===3){Cd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hn===null||!hn.has(a))){e=bt(n,e),n=wu(2),a=ln(t,n,2),a!==null&&(Tu(n,a,t,e),Ra(a,2),zt(a));break}}t=t.return}}function zr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new eh;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Tr=!0,i.add(n),e=oh.bind(null,e,t,n),t.then(e,e))}function oh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Q&n)===n&&(ve===4||ve===3&&(Q&62914560)===Q&&300>nt()-go?(ee&2)===0&&Sa(e,0):xr|=n,va===Q&&(va=0)),zt(e)}function wd(e,t){t===0&&(t=yl()),e=Rn(e,t),e!==null&&(Ra(e,t),zt(e))}function sh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function rh(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(t),wd(e,n)}function lh(e,t){return Wo(e,t)}var wo=null,Ca=null,Nr=!1,To=!1,Or=!1,yn=0;function zt(e){e!==Ca&&e.next===null&&(Ca===null?wo=Ca=e:Ca=Ca.next=e),To=!0,Nr||(Nr=!0,uh())}function ui(e,t){if(!Or&&To){Or=!0;do for(var n=!1,a=wo;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var s=a.suspendedLanes,r=a.pingedLanes;o=(1<<31-it(42|e)+1)-1,o&=i&~(s&~r),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Dd(a,o))}else o=Q,o=Di(a,a===de?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Ea(a,o)||(n=!0,Dd(a,o));a=a.next}while(n);Or=!1}}function ch(){Td()}function Td(){To=Nr=!1;var e=0;yn!==0&&Sh()&&(e=yn);for(var t=nt(),n=null,a=wo;a!==null;){var i=a.next,o=xd(a,t);o===0?(a.next=null,n===null?wo=i:n.next=i,i===null&&(Ca=n)):(n=a,(e!==0||(o&3)!==0)&&(To=!0)),a=i}qe!==0&&qe!==5||ui(e),yn!==0&&(yn=0)}function xd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-it(o),r=1<<s,l=i[s];l===-1?((r&n)===0||(r&a)!==0)&&(i[s]=Uf(r,t)):l<=t&&(e.expiredLanes|=r),o&=~r}if(t=de,n=Q,n=Di(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ea(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Vo(a),Xo(n)){case 2:case 8:n=ml;break;case 32:n=wi;break;case 268435456:n=gl;break;default:n=wi}return a=kd.bind(null,e),n=Wo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Vo(a),e.callbackPriority=2,e.callbackNode=null,2}function kd(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Co()&&e.callbackNode!==n)return null;var a=Q;return a=Di(e,e===de?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rd(e,a,t),xd(e,nt()),e.callbackNode!=null&&e.callbackNode===n?kd.bind(null,e):null)}function Dd(e,t){if(Co())return null;rd(e,t,!0)}function uh(){Ch(function(){(ee&6)!==0?Wo(hl,ch):Td()})}function Kr(){if(yn===0){var e=ra;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),yn=e}return yn}function qd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function Ed(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dh(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var o=qd((i[Qe]||null).action),s=a.submitter;s&&(t=(t=s[Qe]||null)?qd(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var r=new Ki("action","action",null,a,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yn!==0){var l=s?Ed(i,s):new FormData(i);tr(n,{pending:!0,data:l,method:i.method,action:o},null,l)}}else typeof o=="function"&&(r.preventDefault(),l=s?Ed(i,s):new FormData(i),tr(n,{pending:!0,data:l,method:i.method,action:o},o,l))},currentTarget:i}]})}}for(var Ur=0;Ur<vs.length;Ur++){var Hr=vs[Ur],fh=Hr.toLowerCase(),ph=Hr[0].toUpperCase()+Hr.slice(1);kt(fh,"on"+ph)}kt(sc,"onAnimationEnd"),kt(rc,"onAnimationIteration"),kt(lc,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Ep,"onTransitionRun"),kt(Rp,"onTransitionStart"),kt(Mp,"onTransitionCancel"),kt(cc,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var s=a.length-1;0<=s;s--){var r=a[s],l=r.instance,h=r.currentTarget;if(r=r.listener,l!==o&&i.isPropagationStopped())break e;o=r,i.currentTarget=h;try{o(i)}catch(y){Bi(y)}i.currentTarget=null,o=l}else for(s=0;s<a.length;s++){if(r=a[s],l=r.instance,h=r.currentTarget,r=r.listener,l!==o&&i.isPropagationStopped())break e;o=r,i.currentTarget=h;try{o(i)}catch(y){Bi(y)}i.currentTarget=null,o=l}}}}function Y(e,t){var n=t[Zo];n===void 0&&(n=t[Zo]=new Set);var a=e+"__bubble";n.has(a)||(Md(t,e,2,!1),n.add(a))}function Br(e,t,n){var a=0;t&&(a|=4),Md(n,e,a,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[xo]){e[xo]=!0,Tl.forEach(function(n){n!=="selectionchange"&&(hh.has(n)||Br(n,!1,e),Br(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,Br("selectionchange",!1,t))}}function Md(e,t,n,a){switch(rf(t)){case 2:var i=Ph;break;case 8:i=Ih;break;default:i=el}n=i.bind(null,t,n,e),i=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lr(e,t,n,a,i){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var r=a.stateNode.containerInfo;if(r===i)break;if(s===4)for(s=a.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;r!==null;){if(s=Gn(r),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){a=o=s;continue e}r=r.parentNode}}a=a.return}Ul(function(){var h=o,y=as(n),A=[];e:{var m=uc.get(e);if(m!==void 0){var g=Ki,q=e;switch(e){case"keypress":if(Ni(n)===0)break e;case"keydown":case"keyup":g=rp;break;case"focusin":q="focus",g=cs;break;case"focusout":q="blur",g=cs;break;case"beforeblur":case"afterblur":g=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=up;break;case sc:case rc:case lc:g=Ff;break;case cc:g=fp;break;case"scroll":case"scrollend":g=Yf;break;case"wheel":g=hp;break;case"copy":case"cut":case"paste":g=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_l;break;case"toggle":case"beforetoggle":g=gp}var O=(t&4)!==0,ue=!O&&(e==="scroll"||e==="scrollend"),d=O?m!==null?m+"Capture":null:m;O=[];for(var c=h,p;c!==null;){var S=c;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||d===null||(S=Na(c,d),S!=null&&O.push(fi(c,S,p))),ue)break;c=c.return}0<O.length&&(m=new g(m,q,null,n,y),A.push({event:m,listeners:O}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==ns&&(q=n.relatedTarget||n.fromElement)&&(Gn(q)||q[In]))break e;if((g||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,g?(q=n.relatedTarget||n.toElement,g=h,q=q?Gn(q):null,q!==null&&(ue=_(q),O=q.tag,q!==ue||O!==5&&O!==27&&O!==6)&&(q=null)):(g=null,q=h),g!==q)){if(O=jl,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(O=_l,S="onPointerLeave",d="onPointerEnter",c="pointer"),ue=g==null?m:za(g),p=q==null?m:za(q),m=new O(S,c+"leave",g,n,y),m.target=ue,m.relatedTarget=p,S=null,Gn(y)===h&&(O=new O(d,c+"enter",q,n,y),O.target=p,O.relatedTarget=ue,S=O),ue=S,g&&q)t:{for(O=mh,d=g,c=q,p=0,S=d;S;S=O(S))p++;S=0;for(var M=c;M;M=O(M))S++;for(;0<p-S;)d=O(d),p--;for(;0<S-p;)c=O(c),S--;for(;p--;){if(d===c||c!==null&&d===c.alternate){O=d;break t}d=O(d),c=O(c)}O=null}else O=null;g!==null&&zd(A,m,g,O,!1),q!==null&&ue!==null&&zd(A,ue,q,O,!0)}}e:{if(m=h?za(h):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var F=Xl;else if(Yl(m))if(Zl)F=kp;else{F=Tp;var R=wp}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&ts(h.elementType)&&(F=Xl):F=xp;if(F&&(F=F(e,h))){Ql(A,F,n,y);break e}R&&R(e,m,h),e==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&es(m,"number",m.value)}switch(R=h?za(h):window,e){case"focusin":(Yl(R)||R.contentEditable==="true")&&($n=R,ms=h,_a=null);break;case"focusout":_a=ms=$n=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,ic(A,n,y);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":ic(A,n,y)}var P;if(ds)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fn?Wl(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(Pl&&n.locale!=="ko"&&(Fn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fn&&(P=Hl()):(en=y,ss="value"in en?en.value:en.textContent,Fn=!0)),R=ko(h,X),0<R.length&&(X=new Ll(X,e,null,n,y),A.push({event:X,listeners:R}),P?X.data=P:(P=Vl(n),P!==null&&(X.data=P)))),(P=vp?bp(e,n):Sp(e,n))&&(X=ko(h,"onBeforeInput"),0<X.length&&(R=new Ll("onBeforeInput","beforeinput",null,n,y),A.push({event:R,listeners:X}),R.data=P)),dh(A,e,h,n,y)}Rd(A,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Na(e,n),i!=null&&a.unshift(fi(e,i,o)),i=Na(e,t),i!=null&&a.push(fi(e,i,o))),e.tag===3)return a;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,n,a,i){for(var o=t._reactName,s=[];n!==null&&n!==a;){var r=n,l=r.alternate,h=r.stateNode;if(r=r.tag,l!==null&&l===a)break;r!==5&&r!==26&&r!==27||h===null||(l=h,i?(h=Na(n,o),h!=null&&s.unshift(fi(n,h,l))):i||(h=Na(n,o),h!=null&&s.push(fi(n,h,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var gh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(yh,"")}function Od(e,t){return t=Nd(t),Nd(e)===t}function ce(e,t,n,a,i,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Xn(e,""+a);break;case"className":Ei(e,"class",a);break;case"tabIndex":Ei(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(e,n,a);break;case"style":Ol(e,a,o);break;case"data":if(t!=="object"){Ei(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Mi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",i.name,i,null),ce(e,t,"formEncType",i.formEncType,i,null),ce(e,t,"formMethod",i.formMethod,i,null),ce(e,t,"formTarget",i.formTarget,i,null)):(ce(e,t,"encType",i.encType,i,null),ce(e,t,"method",i.method,i,null),ce(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Mi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Mi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Y("beforetoggle",e),Y("toggle",e),qi(e,"popover",a);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":qi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wf.get(n)||n,qi(e,n,a))}}function _r(e,t,n,a,i,o){switch(n){case"style":Ol(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Xn(e,a):(typeof a=="number"||typeof a=="bigint")&&Xn(e,""+a);break;case"onScroll":a!=null&&Y("scroll",e);break;case"onScrollEnd":a!=null&&Y("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[Qe]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):qi(e,n,a)}}}function He(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var a=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ce(e,t,o,s,n,null)}}i&&ce(e,t,"srcSet",n.srcSet,n,null),a&&ce(e,t,"src",n.src,n,null);return;case"input":Y("invalid",e);var r=o=s=i=null,l=null,h=null;for(a in n)if(n.hasOwnProperty(a)){var y=n[a];if(y!=null)switch(a){case"name":i=y;break;case"type":s=y;break;case"checked":l=y;break;case"defaultChecked":h=y;break;case"value":o=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:ce(e,t,a,y,n,null)}}Rl(e,o,r,l,h,s,i,!1);return;case"select":Y("invalid",e),a=s=o=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":o=r;break;case"defaultValue":s=r;break;case"multiple":a=r;default:ce(e,t,i,r,n,null)}t=o,n=s,e.multiple=!!a,t!=null?Qn(e,!!a,t,!1):n!=null&&Qn(e,!!a,n,!0);return;case"textarea":Y("invalid",e),o=i=a=null;for(s in n)if(n.hasOwnProperty(s)&&(r=n[s],r!=null))switch(s){case"value":a=r;break;case"defaultValue":i=r;break;case"children":o=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(f(91));break;default:ce(e,t,s,r,n,null)}zl(e,a,i,o);return;case"option":for(l in n)n.hasOwnProperty(l)&&(a=n[l],a!=null)&&(l==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ce(e,t,l,a,n,null));return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(a=0;a<di.length;a++)Y(di[a],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(a=n[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ce(e,t,h,a,n,null)}return;default:if(ts(t)){for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!==void 0&&_r(e,t,y,a,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(a=n[r],a!=null&&ce(e,t,r,a,n,null))}function vh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,r=null,l=null,h=null,y=null;for(g in n){var A=n[g];if(n.hasOwnProperty(g)&&A!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":l=A;default:a.hasOwnProperty(g)||ce(e,t,g,null,a,A)}}for(var m in a){var g=a[m];if(A=n[m],a.hasOwnProperty(m)&&(g!=null||A!=null))switch(m){case"type":o=g;break;case"name":i=g;break;case"checked":h=g;break;case"defaultChecked":y=g;break;case"value":s=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:g!==A&&ce(e,t,m,g,a,A)}}$o(e,s,r,l,h,y,o,i);return;case"select":g=s=r=m=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case"value":break;case"multiple":g=l;default:a.hasOwnProperty(o)||ce(e,t,o,null,a,l)}for(i in a)if(o=a[i],l=n[i],a.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case"value":m=o;break;case"defaultValue":r=o;break;case"multiple":s=o;default:o!==l&&ce(e,t,i,o,a,l)}t=r,n=s,a=g,m!=null?Qn(e,!!n,m,!1):!!a!=!!n&&(t!=null?Qn(e,!!n,t,!0):Qn(e,!!n,n?[]:"",!1));return;case"textarea":g=m=null;for(r in n)if(i=n[r],n.hasOwnProperty(r)&&i!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ce(e,t,r,null,a,i)}for(s in a)if(i=a[s],o=n[s],a.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case"value":m=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==o&&ce(e,t,s,i,a,o)}Ml(e,m,g);return;case"option":for(var q in n)m=n[q],n.hasOwnProperty(q)&&m!=null&&!a.hasOwnProperty(q)&&(q==="selected"?e.selected=!1:ce(e,t,q,null,a,m));for(l in a)m=a[l],g=n[l],a.hasOwnProperty(l)&&m!==g&&(m!=null||g!=null)&&(l==="selected"?e.selected=m&&typeof m!="function"&&typeof m!="symbol":ce(e,t,l,m,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in n)m=n[O],n.hasOwnProperty(O)&&m!=null&&!a.hasOwnProperty(O)&&ce(e,t,O,null,a,m);for(h in a)if(m=a[h],g=n[h],a.hasOwnProperty(h)&&m!==g&&(m!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,t));break;default:ce(e,t,h,m,a,g)}return;default:if(ts(t)){for(var ue in n)m=n[ue],n.hasOwnProperty(ue)&&m!==void 0&&!a.hasOwnProperty(ue)&&_r(e,t,ue,void 0,a,m);for(y in a)m=a[y],g=n[y],!a.hasOwnProperty(y)||m===g||m===void 0&&g===void 0||_r(e,t,y,m,a,g);return}}for(var d in n)m=n[d],n.hasOwnProperty(d)&&m!=null&&!a.hasOwnProperty(d)&&ce(e,t,d,null,a,m);for(A in a)m=a[A],g=n[A],!a.hasOwnProperty(A)||m===g||m==null&&g==null||ce(e,t,A,m,a,g)}function Kd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],o=i.transferSize,s=i.initiatorType,r=i.duration;if(o&&r&&Kd(s)){for(s=0,r=i.responseEnd,a+=1;a<n.length;a++){var l=n[a],h=l.startTime;if(h>r)break;var y=l.transferSize,A=l.initiatorType;y&&Kd(A)&&(l=l.responseEnd,s+=y*(l<r?1:(r-h)/(l-h)))}if(--a,t+=8*(o+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pr=null,Ir=null;function Do(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wr=null;function Sh(){var e=window.event;return e&&e.type==="popstate"?e===Wr?!1:(Wr=e,!0):(Wr=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(wh)}:Bd;function wh(e){setTimeout(function(){throw e})}function vn(e){return e==="head"}function Ld(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),ka(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")pi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,pi(n);for(var o=n.firstChild;o;){var s=o.nextSibling,r=o.nodeName;o[Ma]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=s}}else n==="body"&&pi(e.ownerDocument.body);n=i}while(n);ka(t)}function _d(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Vr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vr(n),Jo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Th(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function xh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Tt(e.nextSibling),e===null))return null;return e}function Pd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Yr(e){return e.data==="$?"||e.data==="$~"}function Qr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xr=null;function Id(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Tt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Wd(e,t,n){switch(t=Do(n),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jo(e)}var xt=new Map,Vd=new Set;function qo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=x.d;x.d={f:Dh,r:qh,D:Eh,C:Rh,L:Mh,m:zh,X:Oh,S:Nh,M:Kh};function Dh(){var e=Zt.f(),t=bo();return e||t}function qh(e){var t=Wn(e);t!==null&&t.tag===5&&t.type==="form"?cu(t):Zt.r(e)}var wa=typeof document>"u"?null:document;function Yd(e,t,n){var a=wa;if(a&&typeof t=="string"&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Vd.has(i)||(Vd.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),He(t,"link",e),Re(t),a.head.appendChild(t)))}}function Eh(e){Zt.D(e),Yd("dns-prefetch",e,null)}function Rh(e,t){Zt.C(e,t),Yd("preconnect",e,t)}function Mh(e,t,n){Zt.L(e,t,n);var a=wa;if(a&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+yt(n.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var o=i;switch(t){case"style":o=Ta(e);break;case"script":o=xa(e)}xt.has(o)||(e=z({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),xt.set(o,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(hi(o))||t==="script"&&a.querySelector(mi(o))||(t=a.createElement("link"),He(t,"link",e),Re(t),a.head.appendChild(t)))}}function zh(e,t){Zt.m(e,t);var n=wa;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+yt(a)+'"][href="'+yt(e)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=xa(e)}if(!xt.has(o)&&(e=z({rel:"modulepreload",href:e},t),xt.set(o,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mi(o)))return}a=n.createElement("link"),He(a,"link",e),Re(a),n.head.appendChild(a)}}}function Nh(e,t,n){Zt.S(e,t,n);var a=wa;if(a&&e){var i=Vn(a).hoistableStyles,o=Ta(e);t=t||"default";var s=i.get(o);if(!s){var r={loading:0,preload:null};if(s=a.querySelector(hi(o)))r.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=xt.get(o))&&Zr(e,n);var l=s=a.createElement("link");Re(l),He(l,"link",e),l._p=new Promise(function(h,y){l.onload=h,l.onerror=y}),l.addEventListener("load",function(){r.loading|=1}),l.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Eo(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:r},i.set(o,s)}}}function Oh(e,t){Zt.X(e,t);var n=wa;if(n&&e){var a=Vn(n).hoistableScripts,i=xa(e),o=a.get(i);o||(o=n.querySelector(mi(i)),o||(e=z({src:e,async:!0},t),(t=xt.get(i))&&Jr(e,t),o=n.createElement("script"),Re(o),He(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Kh(e,t){Zt.M(e,t);var n=wa;if(n&&e){var a=Vn(n).hoistableScripts,i=xa(e),o=a.get(i);o||(o=n.querySelector(mi(i)),o||(e=z({src:e,async:!0,type:"module"},t),(t=xt.get(i))&&Jr(e,t),o=n.createElement("script"),Re(o),He(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Qd(e,t,n,a){var i=(i=W.current)?qo(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ta(n.href),n=Vn(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ta(n.href);var o=Vn(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(hi(e)))&&!o._p&&(s.instance=o,s.state.loading=5),xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xt.set(e,n),o||Uh(i,e,n,s.state))),t&&a===null)throw Error(f(528,""));return s}if(t&&a!==null)throw Error(f(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xa(n),n=Vn(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Ta(e){return'href="'+yt(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function Xd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Uh(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),He(t,"link",n),Re(t),e.head.appendChild(t))}function xa(e){return'[src="'+yt(e)+'"]'}function mi(e){return"script[async]"+e}function Zd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(a)return t.instance=a,Re(a),a;var i=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Re(a),He(a,"style",i),Eo(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ta(n.href);var o=e.querySelector(hi(i));if(o)return t.state.loading|=4,t.instance=o,Re(o),o;a=Xd(n),(i=xt.get(i))&&Zr(a,i),o=(e.ownerDocument||e).createElement("link"),Re(o);var s=o;return s._p=new Promise(function(r,l){s.onload=r,s.onerror=l}),He(o,"link",a),t.state.loading|=4,Eo(o,n.precedence,e),t.instance=o;case"script":return o=xa(n.src),(i=e.querySelector(mi(o)))?(t.instance=i,Re(i),i):(a=n,(i=xt.get(o))&&(a=z({},n),Jr(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Re(i),He(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Eo(a,n.precedence,e));return t.instance}function Eo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,s=0;s<a.length;s++){var r=a[s];if(r.dataset.precedence===t)o=r;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ro=null;function Jd(e,t,n){if(Ro===null){var a=new Map,i=Ro=new Map;i.set(n,a)}else i=Ro,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Ma]||o[Ne]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var r=a.get(s);r?r.push(o):a.set(s,[o])}}return a}function Fd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Hh(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bh(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ta(a.href),o=t.querySelector(hi(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,Re(o);return}o=t.ownerDocument||t,a=Xd(a),(i=xt.get(i))&&Zr(a,i),o=o.createElement("link"),Re(o);var s=o;s._p=new Promise(function(r,l){s.onload=r,s.onerror=l}),He(o,"link",a),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Mo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fr=0;function jh(e,t){return e.stylesheets&&e.count===0&&No(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&No(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Fr===0&&(Fr=62500*bh());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&No(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Fr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Mo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zo=null;function No(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zo=new Map,t.forEach(Lh,e),zo=null,Mo.call(e))}function Lh(e,t){if(!(t.state.loading&4)){var n=zo.get(e);if(n)var a=n.get(null);else{n=new Map,zo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var s=i[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}i=t.instance,s=i.getAttribute("data-precedence"),o=n.get(s)||a,o===a&&n.set(null,i),n.set(s,i),this.count++,a=Mo.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function _h(e,t,n,a,i,o,s,r,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.hiddenUpdates=Yo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ef(e,t,n,a,i,o,s,r,l,h,y,A){return e=new _h(e,t,n,s,l,h,y,A,r),t=1,o===!0&&(t|=24),o=st(3,null,null,t),e.current=o,o.stateNode=e,t=Ms(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Ks(o),e}function tf(e){return e?(e=na,e):na}function nf(e,t,n,a,i,o){i=tf(i),a.context===null?a.context=i:a.pendingContext=i,a=rn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=ln(e,a,t),n!==null&&(et(n,e,t),Qa(n,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $r(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function of(e){if(e.tag===13||e.tag===31){var t=Rn(e,67108864);t!==null&&et(t,e,67108864),$r(e,67108864)}}function sf(e){if(e.tag===13||e.tag===31){var t=dt();t=Qo(t);var n=Rn(e,t);n!==null&&et(n,e,t),$r(e,t)}}var Oo=!0;function Ph(e,t,n,a){var i=v.T;v.T=null;var o=x.p;try{x.p=2,el(e,t,n,a)}finally{x.p=o,v.T=i}}function Ih(e,t,n,a){var i=v.T;v.T=null;var o=x.p;try{x.p=8,el(e,t,n,a)}finally{x.p=o,v.T=i}}function el(e,t,n,a){if(Oo){var i=tl(a);if(i===null)Lr(e,t,a,Ko,n),lf(e,a);else if(Wh(i,e,t,n,a))a.stopPropagation();else if(lf(e,a),t&4&&-1<Gh.indexOf(e)){for(;i!==null;){var o=Wn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=xn(o.pendingLanes);if(s!==0){var r=o;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var l=1<<31-it(s);r.entanglements[1]|=l,s&=~l}zt(o),(ee&6)===0&&(yo=nt()+500,ui(0))}}break;case 31:case 13:r=Rn(o,2),r!==null&&et(r,o,2),bo(),$r(o,2)}if(o=tl(a),o===null&&Lr(e,t,a,Ko,n),o===i)break;i=o}i!==null&&a.stopPropagation()}else Lr(e,t,a,null,n)}}function tl(e){return e=as(e),nl(e)}var Ko=null;function nl(e){if(Ko=null,e=Gn(e),e!==null){var t=_(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Z(t),e!==null)return e;e=null}else if(n===31){if(e=fe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ko=e,null}function rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ef()){case hl:return 2;case ml:return 8;case wi:case Rf:return 32;case gl:return 268435456;default:return 32}default:return 32}}var al=!1,bn=null,Sn=null,An=null,yi=new Map,vi=new Map,Cn=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,n,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wn(t),t!==null&&of(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wh(e,t,n,a,i){switch(t){case"focusin":return bn=bi(bn,e,t,n,a,i),!0;case"dragenter":return Sn=bi(Sn,e,t,n,a,i),!0;case"mouseover":return An=bi(An,e,t,n,a,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,bi(yi.get(o)||null,e,t,n,a,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,bi(vi.get(o)||null,e,t,n,a,i)),!0}return!1}function cf(e){var t=Gn(e.target);if(t!==null){var n=_(t);if(n!==null){if(t=n.tag,t===13){if(t=Z(n),t!==null){e.blockedOn=t,Cl(e.priority,function(){sf(n)});return}}else if(t===31){if(t=fe(n),t!==null){e.blockedOn=t,Cl(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tl(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ns=a,n.target.dispatchEvent(a),ns=null}else return t=Wn(n),t!==null&&of(t),e.blockedOn=n,!1;t.shift()}return!0}function uf(e,t,n){Uo(e)&&n.delete(t)}function Vh(){al=!1,bn!==null&&Uo(bn)&&(bn=null),Sn!==null&&Uo(Sn)&&(Sn=null),An!==null&&Uo(An)&&(An=null),yi.forEach(uf),vi.forEach(uf)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,Vh)))}var Bo=null;function df(e){Bo!==e&&(Bo=e,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Bo===e&&(Bo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(nl(a||n)===null)continue;break}var o=Wn(n);o!==null&&(e.splice(t,3),t-=3,tr(o,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ka(e){function t(l){return Ho(l,e)}bn!==null&&Ho(bn,e),Sn!==null&&Ho(Sn,e),An!==null&&Ho(An,e),yi.forEach(t),vi.forEach(t);for(var n=0;n<Cn.length;n++){var a=Cn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)cf(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],o=n[a+1],s=i[Qe]||null;if(typeof o=="function")s||df(n);else if(s){var r=null;if(o&&o.hasAttribute("formAction")){if(i=o,s=o[Qe]||null)r=s.formAction;else if(nl(i)!==null)continue}else r=s.action;typeof r=="function"?n[a+1]=r:(n.splice(a,3),a-=3),df(n)}}}function ff(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function il(e){this._internalRoot=e}jo.prototype.render=il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var n=t.current,a=dt();nf(n,a,e,t,null,null)},jo.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nf(e.current,2,null,e,null,null),bo(),t[In]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Al();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&cf(e)}};var pf=B.version;if(pf!=="19.2.3")throw Error(f(527,pf,"19.2.3"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=b(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{qa=Lo.inject(Yh),at=Lo}catch{}}return Ai.createRoot=function(e,t){if(!U(e))throw Error(f(299));var n=!1,a="",i=bu,o=Su,s=Au;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ef(e,1,!1,null,null,n,a,null,i,o,s,ff),e[In]=t.current,jr(e),new il(t)},Ai.hydrateRoot=function(e,t,n){if(!U(e))throw Error(f(299));var a=!1,i="",o=bu,s=Su,r=Au,l=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=ef(e,1,!0,t,n??null,a,i,l,o,s,r,ff),t.context=tf(null),n=t.current,a=dt(),a=Qo(a),i=rn(a),i.callback=null,ln(n,i,a),n=a,t.current.lanes=n,Ra(t,n),zt(t),e[In]=t.current,jr(e),new jo(t)},Ai.version="19.2.3",Ai}var wf;function am(){if(wf)return rl.exports;wf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),rl.exports=nm(),rl.exports}var im=am();const om=({questionData:w,onAnswerSelect:B,selectedAnswer:K,showResult:f})=>{const{question:U,options:_,correctAnswer:Z}=w,fe=k=>{let b="option-btn";if(f){if(k===Z)return b+" correct";if(K===k&&k!==Z)return b+" incorrect";if(k!==Z&&k!==K)return b+" dimmed"}else if(K===k)return b+" selected";return b};return T.jsxs("div",{className:"glass-panel question-card",children:[T.jsx("h2",{className:"question-text",children:U}),T.jsx("div",{className:"options-grid",children:_.map((k,b)=>T.jsx("button",{className:fe(k),onClick:()=>!f&&B(k),disabled:f,children:k},b))}),T.jsx("style",{children:`
        .question-card {
            padding: 2rem;
            margin-bottom: 2rem;
            text-align: left;
        }
        .question-text {
            margin-bottom: 1.5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .options-grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
            .options-grid { grid-template-columns: 1fr 1fr; }
        }
        .option-btn {
            padding: 1rem;
            text-align: left;
            border: 2px solid transparent;
            background: rgba(255,255,255,0.05);
            transition: all 0.3s ease;
        }
        .option-btn:hover:not(:disabled) {
            border-color: var(--color-accent);
            background: rgba(255,255,255,0.1);
        }
        .option-btn.selected {
            border-color: var(--color-accent);
            background: rgba(56, 189, 248, 0.1);
        }
        .option-btn.correct {
            border-color: var(--color-success);
            background: rgba(34, 197, 94, 0.1);
            color: var(--color-success);
        }
        .option-btn.incorrect {
            border-color: var(--color-error);
            background: rgba(239, 68, 68, 0.1);
            color: var(--color-error);
        }
        .option-btn.dimmed {
            opacity: 0.5;
        }
      `})]})},sm=({content:w})=>T.jsxs("div",{className:"glass-panel explanation-card fade-in",children:[T.jsx("div",{className:"explanation-header",children:T.jsx("h3",{children:"🎓 Explanation & Concept"})}),T.jsx("div",{className:"explanation-content",children:T.jsx("pre",{style:{whiteSpace:"pre-wrap",fontFamily:"inherit"},children:w.trim()})}),T.jsx("style",{children:`
        .explanation-card {
            padding: 2rem;
            margin-top: 2rem;
            text-align: left;
            background: linear-gradient(to bottom right, #1e293b, #0f172a);
            border: 1px solid var(--color-accent);
        }
        .explanation-header {
            margin-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 0.5rem;
        }
        .explanation-header h3 {
            color: var(--color-accent);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .explanation-content {
            line-height: 1.6;
            color: var(--color-text-secondary);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `})]}),Tf=["Persistence is the key to mastery. Keep going!","Every expert was once a beginner. You've got this!","Don't stop when you're tired. Stop when you're done.","Certification is specific knowledge, but learning is a lifelong journey.","Failure is just another way to learn how to do it right.","Small progress is still progress.","The only way to do great work is to love what you do.","Believing in yourself is the first secret to success."],rm=({onResume:w,onQuit:B})=>{const K=Tf[Math.floor(Math.random()*Tf.length)];return T.jsxs("div",{className:"modal-overlay",children:[T.jsxs("div",{className:"modal-content glass-panel fade-in-up",children:[T.jsx("h3",{children:"Wait! You're doing great. 🐧"}),T.jsxs("p",{className:"motivational-quote",children:['"',K,'"']}),T.jsx("p",{className:"sub-text",children:"Are you sure you want to stop? You're building your future right now."}),T.jsxs("div",{className:"modal-actions",children:[T.jsx("button",{className:"primary resume-btn",onClick:w,children:"Resume Quiz 🚀"}),T.jsx("button",{className:"text-btn quit-btn",onClick:B,children:"I really need to quit"})]})]}),T.jsx("style",{children:`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.85); /* Dark blur overlay */
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-content {
            max-width: 500px;
            padding: 3rem;
            text-align: center;
            border: 1px solid var(--color-accent);
            box-shadow: 0 0 50px rgba(56, 189, 248, 0.2);
        }
        .fade-in-up {
            animation: fadeInUp 0.4s ease-out;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h3 { 
            color: var(--color-accent); 
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }
        .motivational-quote {
            font-size: 1.25rem;
            font-style: italic;
            margin-bottom: 2rem;
            line-height: 1.6;
            color: var(--color-text-primary);
        }
        .sub-text {
            color: var(--color-text-secondary);
            margin-bottom: 2rem;
        }
        .modal-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
        .resume-btn {
            font-size: 1.2rem;
            padding: 1rem 3rem;
            width: 100%;
            max-width: 300px;
        }
        .quit-btn {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }
        .quit-btn:hover {
            color: var(--color-error);
        }
      `})]})},lm=w=>[...w].sort(()=>Math.random()-.5),cm=({questions:w,onBackToMenu:B,onRetry:K})=>{const[f,U]=Be.useState(0),[_,Z]=Be.useState(null),[fe,k]=Be.useState(!1),[b,I]=Be.useState(0),[z,ae]=Be.useState(!1),[ge,ze]=Be.useState(()=>w&&w.length>0?w.length*90:0),[ke,Ve]=Be.useState(!1),[je,ft]=Be.useState(!1);Be.useEffect(()=>{U(0),Z(null),k(!1),I(0),ae(!1),Ve(!1),ft(!1),w&&w.length>0&&ze(w.length*90)},[w]),Be.useEffect(()=>{if(ge>0&&!z&&!je&&!ke){const re=setInterval(()=>{ze(Ie=>Ie-1)},1e3);return()=>clearInterval(re)}else ge===0&&!z&&w.length>0&&ae(!0)},[ge,z,je,ke,w.length]);const Ee=re=>{const Ie=Math.floor(re/60),Ye=re%60;return`${Ie}:${Ye<10?"0":""}${Ye}`};if(!w||w.length===0)return T.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:["No questions available in this category yet. ",T.jsx("button",{onClick:B,children:"Go Back"})]});const De=w[f],pt=Be.useMemo(()=>De?lm(De.options):[],[De]),Le={...De,options:pt},G=re=>{Z(re),k(!0),re===De.correctAnswer&&I(Ie=>Ie+1)},_e=()=>{f<w.length-1?(U(re=>re+1),Z(null),k(!1)):ae(!0)},ht=()=>{ft(!0),Ve(!0)},Jt=()=>{ft(!1),Ve(!1)},mt=()=>{Ve(!1),B()};if(z){const re=b/w.length*100,Ie=[{title:"Phenomenal Work! 🏆",body:"You nailed every single question. You are arguably ready for the real exam!"},{title:"Flawless Victory! 🥋",body:"Zero mistakes. Your knowledge is razor sharp."},{title:"Linux Master! 🐧",body:"You clearly know your stuff. Keep up the amazing work!"}],Ye=[{title:"Excellent Job! 🌟",body:"Strong performance. Just a few tweaks and you'll be perfect."},{title:"Great work! 🚀",body:"You have a solid grasp of the concepts. Keep polishing those edge cases."},{title:"Very Impressive! 👏",body:"You're well on your way to certification success."}],tt=[{title:"Good Effort! 👍",body:"You're getting there. Review the explanations for the ones you missed."},{title:"Not Bad! 📚",body:"You have a good foundation, but there are some gaps to fill."},{title:"Solid Start! 🌱",body:"Keep practicing and focusing on the areas where you struggled."}],v=[{title:"Keep Practicing! 💪",body:"Don't get discouraged. Certification takes persistence. Review the concepts and try again."},{title:"Learning Opportunity! 💡",body:"Every mistake is a chance to learn. Analyse what went wrong."},{title:"Don't Give Up! 🛡️",body:"Persistence is key. Review the material and give it another shot."}],x=u=>u[Math.floor(Math.random()*u.length)];let N;re===100?N=x(Ie):re>=80?N=x(Ye):re>=50?N=x(tt):N=x(v);const{title:te,body:ie}=N;return T.jsxs("div",{className:"glass-panel result-card",children:[T.jsx("h2",{children:ge===0?"⏰ Time's Up!":"🎉 Quiz Completed!"}),T.jsxs("div",{className:"score-display",children:[T.jsx("span",{className:"score-number",children:b}),T.jsxs("span",{className:"score-total",children:["/ ",w.length]})]}),T.jsxs("div",{className:"feedback-section",children:[T.jsx("h3",{children:te}),T.jsx("p",{children:ie}),T.jsxs("div",{className:"cert-wish",children:[T.jsx("span",{className:"wish-icon",children:"🍀"}),T.jsx("p",{children:"Best of luck on your certification journey! You've got this."})]})]}),T.jsxs("div",{className:"result-actions",children:[T.jsx("button",{className:"primary",onClick:K,children:"Take New Quiz"}),T.jsx("button",{className:"secondary",onClick:B,children:"Back to Dashboard"})]}),T.jsx("style",{children:`
            .result-card { padding: 3rem; margin: 2rem auto; max-width: 600px; }
            .score-display { font-size: 4rem; font-weight: 700; margin: 2rem 0; color: var(--color-accent); }
            .score-total { font-size: 2rem; color: var(--color-text-secondary); }
            .feedback-section { margin-bottom: 2rem; }
            .feedback-section h3 { color: var(--color-text-primary); margin-bottom: 0.5rem; font-size: 1.5rem; }
            .feedback-section p { color: var(--color-text-secondary); line-height: 1.6; }
            .cert-wish { 
                margin-top: 2rem; 
                padding: 1.5rem; 
                background: rgba(255, 255, 255, 0.05); 
                border-radius: var(--radius-md);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
            }
            .wish-icon { font-size: 2rem; }
            .cert-wish p { color: var(--color-accent); font-weight: 600; margin: 0; }
            .result-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; }
            .secondary { background: transparent; border: 1px solid var(--color-text-secondary); }
            .secondary:hover { border-color: var(--color-accent); color: var(--color-accent); }
        `})]})}return T.jsxs("div",{className:"quiz-container",children:[ke&&T.jsx(rm,{onResume:Jt,onQuit:mt}),T.jsxs("div",{className:"quiz-top-bar",children:[T.jsx("button",{className:"end-quiz-btn",onClick:ht,children:"End Quiz"}),T.jsxs("div",{className:`timer ${ge<60?"timer-low":""}`,children:["⏰ ",Ee(ge)]})]}),T.jsxs("div",{className:"quiz-header",children:[T.jsxs("span",{children:["Question ",f+1," of ",w.length]}),T.jsxs("span",{className:"current-score",children:["Score: ",b]})]}),T.jsx("div",{className:"progress-bar",children:T.jsx("div",{className:"progress-fill",style:{width:`${f/w.length*100}%`}})}),T.jsx(om,{questionData:Le,selectedAnswer:_,onAnswerSelect:G,showResult:fe}),fe&&T.jsxs("div",{className:"fade-in",children:[T.jsx(sm,{content:De.explanation}),T.jsx("div",{className:"controls",children:T.jsx("button",{className:"primary next-btn",onClick:_e,children:f===w.length-1?"Finish Quiz":"Next Question →"})})]}),T.jsx("style",{children:`
        .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
        }
        .quiz-top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        .timer {
            font-size: 1.2rem;
            font-weight: 700;
            background: rgba(255,255,255,0.05);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .timer-low {
            color: var(--color-error);
            border-color: var(--color-error);
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        .text-btn {
            background: none;
            border: none;
            padding: 0;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }
        .text-btn:hover {
            color: var(--color-accent);
            text-decoration: underline;
        }
        .quiz-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            color: var(--color-text-secondary);
            font-weight: 500;
        }
        .progress-bar {
            height: 6px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-bottom: 2rem;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: var(--color-accent);
            transition: width 0.3s ease;
        }
        .controls {
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
        }
        .next-btn {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
        }
      `})]})},um=[{id:"kcna",title:"KCNA (Kubernetes and Cloud Native Associate)",description:"Foundational knowledge of Kubernetes and cloud-native ecosystem."},{id:"kcsa",title:"KCSA (Kubernetes and Cloud Native Security Associate)",description:"Security fundamentals for cloud-native architectures."},{id:"lfcs",title:"LFCS (Linux Foundation Certified SysAdmin)",description:"Essential commands, file systems, and user management.",comingSoon:!0},{id:"lfce",title:"LFCE (Linux Foundation Certified Engineer)",description:"Advanced networking, system design, and automation.",comingSoon:!0},{id:"cks",title:"CKS (Certified Kubernetes Security Specialist)",description:"Cluster hardening, system security, and policy.",comingSoon:!0},{id:"cka",title:"CKA (Certified Kubernetes Administrator)",description:"Cluster administration, installation, configuration, and troubleshooting.",comingSoon:!0},{id:"ckad",title:"CKAD (Certified Kubernetes Application Developer)",description:"Cloud-native application design, build, and deployment for Kubernetes.",comingSoon:!0},{id:"cnpe",title:"CNPE (Certified Cloud Native Platform Engineer)",description:"Platform engineering practices for cloud-native ecosystems.",comingSoon:!0},{id:"pca",title:"PCA (Prometheus Certified Associate)",description:"Observability using Prometheus.",comingSoon:!0},{id:"ica",title:"ICA (Istio Certified Associate)",description:"Service mesh fundamentals using Istio.",comingSoon:!0},{id:"cca",title:"CCA (Cilium Certified Associate)",description:"Networking, observability, and security with Cilium.",comingSoon:!0},{id:"capa",title:"CAPA (Certified Argo Project Associate)",description:"GitOps and continuous delivery with Argo.",comingSoon:!0},{id:"cgoa",title:"CGOA (Certified GitOps Associate)",description:"GitOps principles and practices.",comingSoon:!0},{id:"cba",title:"CBA (Certified Backstage Associate)",description:"Building developer portals with Backstage.",comingSoon:!0},{id:"otca",title:"OTCA (OpenTelemetry Certified Associate)",description:"Observability and telemetry standards.",comingSoon:!0},{id:"kca",title:"KCA (Kyverno Certified Associate)",description:"Policy management for Kubernetes using Kyverno.",comingSoon:!0},{id:"cnpa",title:"CNPA (Certified Cloud Native Platform Engineering Associate)",description:"Foundational platform engineering concepts.",comingSoon:!0}],xf={lfcs:[{id:1,question:"Which command is used to display the current working directory in Linux?",options:["pwd","ls","cd","dir"],correctAnswer:"pwd",explanation:`
### Concept: Navigation
The \`pwd\` (Print Working Directory) command displays the full absolute path of the current directory you are in.

- **ls**: Lists files.
- **cd**: Changes directory.
`},{id:2,question:"How do you create a new directory named 'projects'?",options:["touch projects","mkdir projects","rm -r projects","new projects"],correctAnswer:"mkdir projects",explanation:`
### Concept: File Management
The \`mkdir\` (Make Directory) command is used to create new directories. 
`},{id:3,question:"Which command changes file permissions?",options:["chown","chmod","chgrp","umask"],correctAnswer:"chmod",explanation:`
### Concept: Permissions
**chmod** (change mode) is the command used to change the access permissions of file system objects.

- **chown**: Change file owner.
- **chgrp**: Change group ownership.
- **umask**: Set default permissions.
`},{id:4,question:"Which symbol represents the user's home directory?",options:["/",".","~",".."],correctAnswer:"~",explanation:"\n### Concept: Shell Expansions\nThe tilde `~` character is a standard shell expansion that resolves to the current user's home directory (e.g., `/home/student`).\n"},{id:5,question:"Which command is used to search for text patterns within a file?",options:["find","locate","grep","sed"],correctAnswer:"grep",explanation:'\n### Concept: Text Processing\n`grep` (Global Regular Expression Print) searches for patterns in files.\n\nExample:\n```bash\ngrep "error" /var/log/syslog\n```\n'},{id:6,question:"What does the 'r' permissions flag stand for?",options:["Run","Read","Remove","Recursive"],correctAnswer:"Read",explanation:`
### Concept: Permissions
In Linux permissions:
- **r** = Read (4)
- **w** = Write (2)
- **x** = Execute (1)
`},{id:7,question:"Which command lists running processes?",options:["ps","top","jobs","All of the above"],correctAnswer:"All of the above",explanation:`
### Concept: Process Management
- **ps**: Snapshot of current processes.
- **top**: Real-time view of processes.
- **jobs**: Lists jobs in the current shell.
`},{id:8,question:"How do you view the content of a file named 'notes.txt'?",options:["cat notes.txt","ls notes.txt","touch notes.txt","cd notes.txt"],correctAnswer:"cat notes.txt",explanation:`
### Concept: File Operations
\`cat\` (concatenate) is commonly used to display file contents to the terminal output.
`},{id:9,question:"Which directory conventionally contains configuration files?",options:["/bin","/etc","/var","/home"],correctAnswer:"/etc",explanation:`
### Concept: FHS (Filesystem Hierarchy Standard)
- **/etc**: System-wide configuration files.
- **/bin**: Essential user binaries.
- **/var**: Variable data (log, spool).
`},{id:10,question:"Which command creates an empty file if it doesn't exist?",options:["mkfile","touch","cat","nano"],correctAnswer:"touch",explanation:`
### Concept: File Management
\`touch\` updates the access timestamp of a file, but if the file does not exist, it creates an empty one.
`},{id:11,question:"Which command removes a directory and all it contents?",options:["rmdir","rm -r","del","erase"],correctAnswer:"rm -r",explanation:`
### Concept: Deletion
- **rm -r**: Recursively remove a directory and its contents.
- **rmdir**: Only removes *empty* directories.
`},{id:12,question:"What is the PID of the init/systemd process usually?",options:["0","1","100","999"],correctAnswer:"1",explanation:`
### Concept: Boot Process
The first process started by the kernel is **init** (or modern **systemd**), which is assigned PID 1.
`},{id:13,question:"Which command shows disk usage of files and directories?",options:["df","du","fdisk","free"],correctAnswer:"du",explanation:`
### Concept: Disk Management
- **du** (Disk Usage): Estimates file space usage.
- **df** (Disk Free): Shows file system availability.
`},{id:14,question:"Which command is used to change the owner of a file?",options:["chmod","chown","chgrp","passwd"],correctAnswer:"chown",explanation:`
### Concept: Permissions
**chown** (Change Owner) is used to change the file owner and group.

Usage: \`chown user:group file\`
`},{id:15,question:"What constitutes a 'hard link'?",options:["A pointer to the file name","A pointer to the inode","A shortcut","A copy of the file"],correctAnswer:"A pointer to the inode",explanation:`
### Concept: Filesystems
A **hard link** points directly to the inode of the original file. Deleting the original filename does not affect the data if a hard link exists.
`},{id:16,question:"Which command brings a background job to the foreground?",options:["bg","fg","jobs","top"],correctAnswer:"fg",explanation:`
### Concept: Job Control
- **fg**: Moves a job to the foreground.
- **bg**: Resumes a stopped job in the background.
`}],lfce:[{id:101,question:"Which command is used to trace the route packets take to a network host?",options:["ping","traceroute","netstat","route"],correctAnswer:"traceroute",explanation:`
### Concept: Networking
\`traceroute\` prints the route packets take to a network host, showing each hop along the way.
      `},{id:102,question:"Which tool is used to monitor network traffic in real-time?",options:["tcpdump","netstat","ss","ip addr"],correctAnswer:"tcpdump",explanation:`
### Concept: Network Analysis
**tcpdump** is a powerful command-line packet analyzer.
`},{id:103,question:"Which file is used to configure static DNS resolution?",options:["/etc/hosts","/etc/resolv.conf","/etc/dns","/etc/network"],correctAnswer:"/etc/hosts",explanation:`
### Concept: Networking
- **/etc/hosts**: Local static mapping of IP addresses to hostnames.
- **/etc/resolv.conf**: Configuration for DNS nameservers.
`},{id:104,question:"What is the command to create a Git repository?",options:["git init","git start","git create","git new"],correctAnswer:"git init",explanation:`
### Concept: Version Control
\`git init\` initializes a new Git repository in the current directory.
`},{id:105,question:"Which protocol is used for secure remote login?",options:["FTP","Telnet","SSH","HTTP"],correctAnswer:"SSH",explanation:`
### Concept: Security
**SSH** (Secure Shell) provides encrypted communication for remote logins.
`}],cks:[{id:201,question:"Which admission controller should be enabled to enforce pod security policies?",options:["NodeRestriction","PodSecurityPolicy","ServiceAccount","LimitRanger"],correctAnswer:"PodSecurityPolicy",explanation:`
### Concept: Security
**PodSecurityPolicy** (deprecated in newer k8s but relevant for legacy certs, replaced by Pod Security Standards) is the admission controller that validates pods against policies.
      `},{id:202,question:"Which component is responsible for maintaining the state of the cluster?",options:["kubelet","etcd","scheduler","controller-manager"],correctAnswer:"etcd",explanation:`
### Concept: Kubernetes Architecture
**etcd** is the consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.
`},{id:203,question:"Which command checks for vulnerabilities in container images?",options:["kubectl scan","trivy","docker inspect","kube-bench"],correctAnswer:"trivy",explanation:`
### Concept: Container Security
**Trivy** is a popular open-source scanner for vulnerabilities in container images, file systems, and git repositories.
`},{id:204,question:"How do you securely store sensitive information in Kubernetes?",options:["ConfigMap","Environment Variables","Secrets","Plain text"],correctAnswer:"Secrets",explanation:`
### Concept: Kubernetes Objects
**Secrets** are designed to store sensitive data like passwords, OAuth tokens, and ssh keys.
`},{id:205,question:"Which profile is used to restrict system calls a container can make?",options:["AppArmor","Seccomp","SELinux","All of the above"],correctAnswer:"All of the above",explanation:`
### Concept: System Security
- **Seccomp**: Restricts syscalls.
- **AppArmor/SELinux**: Mandatory Access Control (MAC) systems to restrict capabilities.
`}],cka:[],ckad:[],cnpe:[],kcsa:[{id:501,question:"What does the '4C' security model in cloud-native computing stand for?",options:["Cloud, Clusters, Containers, and Code","Compute, Capacity, Cost, and Connectivity","Control, Compliance, Configuration, and Consensus","Core, Cell, Chip, and Circuit"],correctAnswer:"Cloud, Clusters, Containers, and Code",explanation:`
### Concept: Layers of Cloud Native Security
The CNCF describes security in layers often referred to as the **4C's of Cloud Native Security**.

**The Layers:**
1.  **Cloud**: The underlying infrastructure (AWS, Azure, Home server). If the cloud is insecure, everything else is at risk.
2.  **Cluster**: The Kubernetes control plane and node environment.
3.  **Containers**: The image security and runtime isolation.
4.  **Code**: Application security, including dependencies and business logic.

Each layer builds upon the next, meaning security must be addressed at every level.
      `},{id:502,question:"Which of the following describes 'STRIDE' in the context of threat modeling?",options:["A tool for scanning container images","A framework for identifying security threats","A Kubernetes network plugin","A protocol for encrypted storage"],correctAnswer:"A framework for identifying security threats",explanation:`
### Concept: Threat Modeling (STRIDE)
**STRIDE** is a mnemonic developed by Microsoft for identifying computer security threats.

**S.T.R.I.D.E stands for:**
- **S**poofing: Impersonating someone or something.
- **T**ampering: Modifying data or code.
- **R**epudiation: Claiming you didn't do an action.
- **I**nformation Disclosure: Leaking private data.
- **D**enial of Service: Crashing the system.
- **E**levation of Privilege: Gaining unauthorized permissions.
      `},{id:503,question:"What is the primary difference between Authentication and Authorization?",options:["Authentication is about 'who you are', Authorization is about 'what you can do'","Authentication is for users, Authorization is for machines","Authentication happens in the cloud, Authorization happens on the node","They are synonyms in cloud-native security"],correctAnswer:"Authentication is about 'who you are', Authorization is about 'what you can do'",explanation:`
### Concept: Identity & Access Management (IAM)
- **Authentication (AuthN)**: The process of verifying the identity of a user or process (e.g., using a certificate, token, or password).
- **Authorization (AuthZ)**: The process of determining if a verified identity has permission to perform a specific action (e.g., RBAC rules).

**Analogy:**
- **AuthN**: Showing your ID to a security guard to enter a building.
- **AuthZ**: Using your keycard to see if you are allowed to enter the server room once inside.
      `},{id:504,question:"Which Kubernetes component is the primary target for securing the cluster's API?",options:["kube-proxy","kube-apiserver","kube-scheduler","etcd"],correctAnswer:"kube-apiserver",explanation:`
### Concept: Securing the Control Plane
The **kube-apiserver** is the central gateway for all cluster operations.

**Security Measures:**
- **TLS**: Use certificates for all communication.
- **Bypass prevention**: Ensure users can't talk to kubelets or etcd directly.
- **Authentication**: Enable OIDC, Service Accounts, or Client Certs.
- **Audit Logging**: Track who did what and when.
      `},{id:505,question:"In Kubernetes RBAC, what is the difference between a Role and a ClusterRole?",options:["Role is for pods, ClusterRole is for nodes","Role is limited to a specific namespace, ClusterRole is cluster-wide","Role is for users, ClusterRole is for services","There is no difference"],correctAnswer:"Role is limited to a specific namespace, ClusterRole is cluster-wide",explanation:`
### Concept: RBAC (Role-Based Access Control)
- **Role**: Defines permissions within a single namespace (e.g., 'can read pods in "dev" namespace').
- **ClusterRole**: Defines permissions cluster-wide or for non-namespaced resources (e.g., 'can read nodes' or 'can read pods in all namespaces').

**Matching Bindings:**
- **RoleBinding**: Grants Role permissions to a user/group within a specific namespace.
- **ClusterRoleBinding**: Grants ClusterRole permissions to a user/group cluster-wide.
      `},{id:506,question:"What is 'Image Scanning' primarily used for in a CI/CD pipeline?",options:["Making the image file size smaller","Identifying known vulnerabilities (CVEs) in the container image","Speeding up the build process","Uploading the image to a registry"],correctAnswer:"Identifying known vulnerabilities (CVEs) in the container image",explanation:`
### Concept: Supply Chain Security
**Image Scanning** tools (like Trivy, Grype, or Clair) look at the packages and libraries inside a container image and compare them against a database of **Known Vulnerabilities (CVEs)**.

**Why it matters:** It prevents you from deploying software with security holes that attackers could exploit. Best practice is to scan during build, in the registry, and continuously in production.
      `},{id:507,question:"What is the security benefit of 'Distroless' images?",options:["They are easier to debug","They have a smaller attack surface as they contain only the app and its runtime dependencies","They include all Linux utilities for convenience","They automatically encrypt data"],correctAnswer:"They have a smaller attack surface as they contain only the app and its runtime dependencies",explanation:`
### Concept: Hardening Container Images
**Distroless** images contain only your application and its runtime dependencies. They do **not** contain package managers, shells, or standard Linux utilities (like \`ls\`, \`curl\`, \`sh\`).

**Benefits:**
- **Reduced Attack Surface**: Attackers cannot use a shell to explore your pod if they compromise the app.
- **Smaller Size**: Faster downloads and less storage.
- **Less Noise**: Scanners find fewer vulnerabilities because there are fewer packages.
      `},{id:508,question:"What does 'Network Policy' provide in Kubernetes?",options:["A way to assign IP addresses to nodes","Specification of how groups of pods are allowed to communicate with each other","A method for encrypting traffic","Hardware firewall configuration"],correctAnswer:"Specification of how groups of pods are allowed to communicate with each other",explanation:`
### Concept: Network Security
By default, Kubernetes pods follow a **non-isolated** model (every pod can talk to every other pod).

**Network Policies** allow you to implement **Zero Trust** by:
- **Default Deny**: Blocking all traffic and only allowing what is necessary.
- **Isolation**: Restricting traffic based on labels, namespaces, or IP blocks.
- **Ingress/Egress control**: Managing both incoming and outgoing connections.

**Note**: You need a CNI plugin that supports Network Policies (like Calico or Cilium) for these rules to be enforced.
      `},{id:509,question:"What is 'Secrets Management' in the context of cloud-native applications?",options:["Hiding the existence of your application","Safely storing and retrieving sensitive data (API keys, passwords, certificates)","Storing large database backups","Managing cluster administrator names"],correctAnswer:"Safely storing and retrieving sensitive data (API keys, passwords, certificates)",explanation:`
### Concept: Managing Sensitive Data
**Secrets Management** ensures that sensitive data is not stored in plain text (like in your Git repo or Dockerfile).

**Approaches:**
1.  **K8s Secrets**: Better than plain text, but only base64 encoded by default. Should be combined with **Encryption at Rest**.
2.  **External Vaults**: Using tools like **HashiCorp Vault**, AWS Secrets Manager, or Azure Key Vault to store secrets externally and inject them at runtime.
      `},{id:510,question:"Which CNCF project provides a policy engine for Kubernetes, allowing you to enforce security policies as code?",options:["Kyverno","Prometheus","Envoy","Helm"],correctAnswer:"Kyverno",explanation:`
### Concept: Policy-as-Code
**Kyverno** is a policy engine designed for Kubernetes.

**What it does:**
- **Validate**: Check if a resource follows rules (e.g., "Must have a 'team' label").
- **Mutate**: Change a resource automatically (e.g., "Inject a sidecar proxy").
- **Generate**: Create secondary resources (e.g., "Create a default NetworkPolicy for every new namespace").

**Why it's cool:** It uses standard Kubernetes YAML for policies, so you don't need to learn a new language.
      `},{id:511,question:"Which DREAD category measures how many users are affected by an exploit?",options:["Discoverability","Reproducibility","Affected Users","Explanability"],correctAnswer:"Affected Users",explanation:`
### Concept: Threat Modeling (DREAD)
**DREAD** is a framework for risk assessment.
- **Affected Users**: Measures the blast radius (how many people/systems impacted).
- **Discoverability**: How easy it is to find the vulnerability.
- **Reproducibility**: How easy it is to repeat the exploit.
      `},{id:512,question:"What is the primary purpose of 'Security by Design' in cloud-native application development?",options:["To scan for vulnerabilities after deployment","To integrate security considerations into every phase of the development lifecycle","To use only specific secure programming languages","To hide the source code from public view"],correctAnswer:"To integrate security considerations into every phase of the development lifecycle",explanation:`
### Concept: Security by Design
Security by Design means making security a core requirement from the start, rather than an afterthought or an "add-on" after the code is written.
      `},{id:513,question:"Which Pod Security Standard profile provides the tightest restrictions, preventing potential privilege escalation?",options:["Privileged","Baseline","Restricted","Default"],correctAnswer:"Restricted",explanation:`
### Concept: Pod Security Standards
- **Privileged**: Unrestricted (allows for escalation).
- **Baseline**: Minimal restrictions (prevents known escalations).
- **Restricted**: Heavily restricted (best practice for security-sensitive workloads).
      `},{id:514,question:"What does the 'Supply Chain Levels for Software Artifacts' (SLSA) framework aim to prevent?",options:["Network-based DDoS attacks","Unauthorized access to the Kubernetes API","Tampering and compromise during the software build and distribution process","Data leaks from production databases"],correctAnswer:"Tampering and compromise during the software build and distribution process",explanation:`
### Concept: Supply Chain Security (SLSA)
**SLSA** (pronounced "salsa") provides a set of standards and controls to ensure the integrity of software artifacts throughout their lifecycle.
      `},{id:515,question:"In Kubernetes, which component is responsible for authorizing requests after they have been authenticated?",options:["kube-scheduler","kube-apiserver","kubelet","container runtime"],correctAnswer:"kube-apiserver",explanation:`
### Concept: API Server Security
The **kube-apiserver** performs Authentication (Who are you?), Authorization (What can you do?), and Admission Control (Is this allowed?).
      `},{id:516,question:"Which Linux kernel feature is used by Kubernetes to isolate the resource usage (CPU, Memory) of different containers?",options:["Namespaces","Control Groups (cgroups)","SELinux","AppArmor"],correctAnswer:"Control Groups (cgroups)",explanation:`
### Concept: Container Isolation
- **cgroups**: Manage and limit resource usage (CPU, RAM).
- **Namespaces**: Provide isolation for view of the system (Network, Process IDs, Mount points).
      `},{id:517,question:"What is the role of a 'Mutating Admission Webhook'?",options:["To validate if a resource follows specific security rules","To modify the content of a resource request before it is saved to etcd","To delete unauthorized pods automatically","To rotate certificates for the cluster nodes"],correctAnswer:"To modify the content of a resource request before it is saved to etcd",explanation:`
### Concept: Admission Control
**Mutating Webhooks** can change the resource (e.g., injecting a sidecar container or setting default resource limits).
      `},{id:518,question:"Which standard provides a comprehensive set of security benchmarks specifically for Kubernetes clusters?",options:["PCI-DSS","HIPAA","CIS Benchmarks","GDPR"],correctAnswer:"CIS Benchmarks",explanation:`
### Concept: Compliance and Standards
The **CIS (Center for Internet Security) Benchmarks** are highly regarded industry standards for hardening Kubernetes clusters and their components.
      `},{id:519,question:"What does 'Shift Left' mean in the context of Cloud Native Security?",options:["Moving workloads from public cloud to private cloud","Addressing security earlier in the development lifecycle (DevSecOps)","Changing the orientation of network diagrams","Prioritizing frontend security over backend security"],correctAnswer:"Addressing security earlier in the development lifecycle (DevSecOps)",explanation:`
### Concept: Shift Left
By shifting left, teams identify and fix vulnerabilities during the coding and build phases, reducing the cost and risk of security issues in production.
      `},{id:520,question:"Which Kubernetes resource is used to provide fine-grained control over what a pod is capable of doing on the host node?",options:["NetworkPolicy","RuntimeClass","SecurityContext","ResourceQuota"],correctAnswer:"SecurityContext",explanation:`
### Concept: Pod Security
A **SecurityContext** defines privilege and access control settings for a Pod or Container (e.g., runAsUser, privileged: false, allowPrivilegeEscalation: false).
      `},{id:521,question:"What is the primary security risk of running containers with the 'privileged' flag set to true?",options:["The container will consume too much memory","The container can bypass most security isolations and access the host node's resources","The container will have a slower network connection","The container cannot be scanned by vulnerability tools"],correctAnswer:"The container can bypass most security isolations and access the host node's resources",explanation:`
### Concept: Privileged Containers
Privileged containers have nearly all the capabilities of the host, making a "container escape" much easier for an attacker.
      `},{id:522,question:"Which CNCF project acts as an open-source, cloud-native runtime security tool for detecting unusual behavior in containers?",options:["Falco","Trivy","Prometheus","Envoy"],correctAnswer:"Falco",explanation:`
### Concept: Runtime Security
**Falco** uses kernel instrumentation (eBPF) to monitor system calls and detect suspicious activity (e.g., a shell being spawned in a production container).
      `},{id:523,question:"What is an 'SBOM' in the context of software supply chain security?",options:["Secure Backup of Metadata","Software Bill of Materials","Standard Binary Object Mapping","System Build Operation Management"],correctAnswer:"Software Bill of Materials",explanation:`
### Concept: Supply Chain Security (SBOM)
An **SBOM** is a complete list of all components (libraries, dependencies) used to build a piece of software, allowing for better vulnerability tracking.
      `},{id:524,question:"In the '4C' security model, which layer is responsible for the physical security of the data center?",options:["Cloud","Cluster","Container","Code"],correctAnswer:"Cloud",explanation:`
### Concept: 4C Model
The **Cloud** layer includes the physical infrastructure, whether provided by a public cloud vendor or managed in an on-premise data center.
      `},{id:525,question:"What does 'Least Privilege' mean when defining RBAC roles in Kubernetes?",options:["Giving users as few permissions as possible while still allowing them to do their job","Only allowing senior developers to access the cluster","Creating only one admin role for the entire cluster","Hiding the existence of certain namespaces from users"],correctAnswer:"Giving users as few permissions as possible while still allowing them to do their job",explanation:`
### Concept: RBAC Principles
The **Principle of Least Privilege** reduces the blast radius of a compromised account by ensuring it only has the specific permissions it needs.
      `},{id:526,question:"Which format is typically used for Kubernetes Network Policies?",options:["JSON","YAML","XML","TOML"],correctAnswer:"YAML",explanation:`
### Concept: Network Policies
Like most Kubernetes resources, **NetworkPolicies** are defined using YAML manifests.
      `},{id:527,question:"What is the primary benefit of using 'Namespaced' resources in Kubernetes for multi-tenancy?",options:["Better performance for large clusters","Logical isolation and resource quota management for different teams","Automatic encryption of all data in the namespace","Hiding pods from the cluster administrator"],correctAnswer:"Logical isolation and resource quota management for different teams",explanation:`
### Concept: Namespaces
Namespaces allow multiple teams to share a single cluster without accidentally interfering with each others' resources.
      `},{id:528,question:"Which tool is commonly used to sign container images to ensure their integrity?",options:["Cosign","Docker Hub","Kubectl","Minikube"],correctAnswer:"Cosign",explanation:`
### Concept: Supply Chain Security (Signing)
**Cosign** (part of the Sigstore project) allows developers to sign images, providing a way to verify that an image hasn't been tampered with since it was built.
      `},{id:529,question:"What is a 'Deny All' Network Policy used for?",options:["To block all internet access for the entire cluster","To prevent any communication between pods in a namespace by default","To delete all pods that are not compliant with security rules","To disable the Kubernetes API server permanently"],correctAnswer:"To prevent any communication between pods in a namespace by default",explanation:`
### Concept: Zero Trust Networking
Starting with a **Deny All** policy and explicitly allowing only necessary traffic is a core practice of the "Zero Trust" security model.
      `},{id:530,question:"Which Kubernetes component manages the encryption of secrets at rest in etcd?",options:["kube-apiserver","kube-scheduler","kube-controller-manager","etcd"],correctAnswer:"kube-apiserver",explanation:`
### Concept: Secret Security
The **kube-apiserver** handles the encryption/decryption of secrets before they are written to or read from **etcd**.
      `},{id:531,question:"What is 'Runtime Security' focused on?",options:["Finding bugs in the source code","Scanning images in a registry","Detecting and preventing malicious activity while containers are running","Setting up hardware firewalls in the data center"],correctAnswer:"Detecting and preventing malicious activity while containers are running",explanation:`
### Concept: Runtime Security
Detection of unexpected process execution, suspicious network connections, or unauthorized file access occurs at the runtime layer.
      `},{id:532,question:"Which of the following is a potential risk of using third-party container images from public registries?",options:["They might contain malware or unpatched vulnerabilities","They are always slower to download than private images","They cannot be used in production environments","They require a special license from the CNCF"],correctAnswer:"They might contain malware or unpatched vulnerabilities",explanation:`
### Concept: Supply Chain Security
Always scan and verify third-party images before use, and ideally use a private registry to mirror only trusted versions.
      `},{id:533,question:"What is the purpose of 'Audit Logs' in Kubernetes?",options:["To improve the performance of the API server","To provide a chronological record of calls to the Kubernetes API","To store application level logs for debugging","To replace standard Linux system logs"],correctAnswer:"To provide a chronological record of calls to the Kubernetes API",explanation:`
### Concept: Auditing
Audit logs answer: "Who did what, when, and from where?", which is essential for security forensic and compliance.
      `},{id:534,question:"Which admission controller is used to limit the amount of resources (CPU/Memory) a namespace can consume?",options:["LimitRanger","ResourceQuota","PodSecurity","NodeRestriction"],correctAnswer:"ResourceQuota",explanation:`
### Concept: Resource Management
**ResourceQuotas** prevent a single team or application from consuming all the resources in a cluster (Denial of Service).
      `},{id:535,question:"What is 'Vulnerability Scanning'?",options:["Checking if a computer is plugged in","Identifying known security flaws in software components","Writing code that is impossible to hack","Monitoring network traffic for DDoS attacks"],correctAnswer:"Identifying known security flaws in software components",explanation:`
### Concept: Vulnerability Management
Scanners like **Trivy** check package lists against databases of known CVEs (Common Vulnerabilities and Exposures).
      `},{id:536,question:"Which CNCF project provides a container-native, policy-based firewall?",options:["Cilium","Linkerd","Kube-router","Calico"],correctAnswer:"Cilium",explanation:`
### Concept: Network Security
**Cilium** uses eBPF to provide high-performance networking and security, including identity-aware L7 policy enforcement.
      `},{id:537,question:"What is the primary benefit of using 'In-Place' upgrades for Kubernetes cluster components compared to 'Blue/Green' upgrades?",options:["In-Place upgrades are always faster","In-Place upgrades require less additional infrastructure during the process","In-Place upgrades are safer and easier to roll back","In-Place upgrades automatically fix all security vulnerabilities"],correctAnswer:"In-Place upgrades require less additional infrastructure during the process",explanation:`
### Concept: Cluster Lifecycle Security
While Blue/Green is safer for rollback, In-Place upgrades (like using kubeadm upgrade) are more resource-efficient as they don't require spawning a second cluster.
      `},{id:538,question:"Which of the following is a common method for securing the 'Code' layer in the 4C model?",options:["Setting up a VPN for developers","Static Application Security Testing (SAST)","Installing an antivirus on the production nodes","Using a hardware security module (HSM)"],correctAnswer:"Static Application Security Testing (SAST)",explanation:`
### Concept: 4C Model (Code)
**SAST** tools analyze source code for security vulnerabilities (like SQL injection or hardcoded secrets) before the code is even compiled.
      `},{id:539,question:"What is the function of the 'kube-scheduler' in the context of security?",options:["To encrypt pod communication","To ensure pods are placed on nodes that meet their security requirements (e.g., taints/tolerations)","To scan pods for root access","To manage RBAC for the nodes"],correctAnswer:"To ensure pods are placed on nodes that meet their security requirements (e.g., taints/tolerations)",explanation:`
### Concept: Scheduling Security
The scheduler enforces constraints like **NodeSelector**, **Affinity**, and **Taints/Tolerations**, which can be used to isolate sensitive workloads on specific hardened nodes.
      `},{id:540,question:"Which Kubernetes resource allows you to define a set of 'trusted' container registries from which images can be pulled?",options:["ImagePolicyWebhook","NetworkPolicy","PodSecurityPolicy","ConfigMap"],correctAnswer:"ImagePolicyWebhook",explanation:`
### Concept: Admission Control (Image Policy)
An **ImagePolicyWebhook** allows an external admission controller to decide whether an image should be allowed in the cluster based on its origin or tags.
      `},{id:541,question:"What does 'Taint' do to a Kubernetes node?",options:["It infects the node with a virus for testing","It allows a node to repel a set of pods unless those pods have a matching toleration","It encrypts all data stored locally on the node","It prevents the node from connecting to the internet"],correctAnswer:"It allows a node to repel a set of pods unless those pods have a matching toleration",explanation:`
### Concept: Node Isolation
Taints and Tolerations are used to ensure that pods are not scheduled onto inappropriate nodes (e.g., keeping non-GPU workloads off GPU nodes).
      `},{id:542,question:"Which CNCF project provides a universal identity control plane for multi-cloud and hybrid environments?",options:["SPIFFE","SPIRE","Istio","Kuma"],correctAnswer:"SPIRE",explanation:`
### Concept: Identity (SPIRE)
**SPIRE** (the SPIFFE Runtime Environment) is a tool for issuing identities to software components across heterogeneous environments.
      `},{id:543,question:"What is the primary goal of the 'Cloud Native Computing Foundation' (CNCF) Security Technical Advisory Group (TAG)?",options:["To write the code for all CNCF projects","To provide security guidance, best practices, and audits for cloud-native projects","To sell security software to enterprises","To replace the Linux Kernel with a more secure version"],correctAnswer:"To provide security guidance, best practices, and audits for cloud-native projects",explanation:`
### Concept: Ecosystem and Community
The **Security TAG** facilitates the security audits of CNCF projects and helps define the cloud-native security landscape.
      `},{id:544,question:"Which of the following describes 'Compliance' as code?",options:["Writing laws using Python","Automating the verification of security requirements using programmable tools (e.g., OPA, Kyverno)","Storing legal documents in a Git repository","Hiring a developer to be a lawyer"],correctAnswer:"Automating the verification of security requirements using programmable tools (e.g., OPA, Kyverno)",explanation:`
### Concept: Compliance-as-Code
By automating compliance checks, organizations can ensure that every change to their infrastructure follows necessary regulations and internal policies.
      `},{id:545,question:"What is an 'Identity Provider' (IdP) in the context of Kubernetes authentication?",options:["A system that stores and manages user identities (e.g., Google, Okta, Active Directory)","A tool that creates random passwords for pods","A hardware device used to identify servers","A Kubernetes service that lists all users in the cluster"],correctAnswer:"A system that stores and manages user identities (e.g., Google, Okta, Active Directory)",explanation:`
### Concept: Authentication (IdP)
Kubernetes can integrate with external IdPs using protocols like **OIDC** (OpenID Connect) to manage user access centrally.
      `},{id:546,question:"In Kubernetes, what happens if a request fails the 'Authorization' step?",options:["The request is delayed for 10 minutes","The user's account is deleted","The API server returns a 403 Forbidden error","The cluster is restarted automatically"],correctAnswer:"The API server returns a 403 Forbidden error",explanation:`
### Concept: API Server Workflow
1. AuthN (401 if fails)
2. **AuthZ** (403 if fails)
3. Admission Control (403 if fails)
      `},{id:547,question:"Which Service Mesh project is known for its 'sidecar-less' architecture option?",options:["Istio","Linkerd","Cilium Service Mesh","Consul"],correctAnswer:"Cilium Service Mesh",explanation:`
### Concept: Service Mesh Architecture
Cilium uses eBPF to provide service mesh features at the node level, potentially removing the need for a sidecar proxy in every pod.
      `},{id:548,question:"What is the purpose of the 'Secrets Store CSI Driver'?",options:["To encrypt ordinary files on a node","To mount secrets from external stores (like Vault, AWS Secrets Manager) as volumes in pods","To replace the etcd database with a secure alternative","To back up the Kubernetes control plane"],correctAnswer:"To mount secrets from external stores (like Vault, AWS Secrets Manager) as volumes in pods",explanation:`
### Concept: Secrets Management
The **Secrets Store CSI Driver** allows Kubernetes to integrate naturally with enterprise-grade secrets management systems.
      `},{id:549,question:"Which Pod Security Standard profile should be used for highly privileged system components like CNI plugins?",options:["Restricted","Baseline","Privileged","None"],correctAnswer:"Privileged",explanation:`
### Concept: Pod Security Standards
Certain infrastructure components REQUIRE high privileges to function (e.g., modifying network interfaces). These should be the ONLY pods running under the 'Privileged' profile.
      `},{id:550,question:"What is a 'Zero-Day Vulnerability'?",options:["A vulnerability that takes 0 days to fix","A software flaw that is known to the vendor but not yet patched","A vulnerability that is discovered and exploited before the vendor is aware of it","A vulnerability that only exists on the first day of a month"],correctAnswer:"A vulnerability that is discovered and exploited before the vendor is aware of it",explanation:`
### Concept: Vulnerability Management
"Zero-day" refers to the fact that the vendor has had zero days to fix the issue before it starts being exploited.
      `},{id:551,question:"Which Kubernetes resource provides a way to define permissions for resources across TWO or more namespaces simultaneously?",options:["RoleBinding","ClusterRoleBinding","NamespaceBinding","MultiRoleBinding"],correctAnswer:"ClusterRoleBinding",explanation:`
### Concept: RBAC (Cluster Scope)
A **ClusterRoleBinding** grants the permissions defined in a ClusterRole to a user across the ENTIRE cluster, including all current and future namespaces.
      `},{id:552,question:"What is the primary risk of using 'hostPath' volumes in Kubernetes pods?",options:["The pod will consume too much disk space","The pod could potentially read or modify any file on the host node, leading to a container escape","HostPath volumes are deleted when the pod is deleted","HostPath volumes are only compatible with Windows nodes"],correctAnswer:"The pod could potentially read or modify any file on the host node, leading to a container escape",explanation:`
### Concept: Volume Security
Using **hostPath** allows a container to reach out of its isolated filesystem and interact with the host OS, which is a major security risk.
      `},{id:553,question:"What does 'Threat Intelligence' involve?",options:["Making servers smarter using AI","Collecting and analyzing information about current and potential attacks/attackers","Hiring hackers to join your security team","Running a script that deletes all suspicious files"],correctAnswer:"Collecting and analyzing information about current and potential attacks/attackers",explanation:`
### Concept: Security Operations
Threat Intelligence helps organizations understand the "who, why, and how" of attacks, allowing them to better prepare their defenses.
      `},{id:554,question:"Which CNCF project provides a way to centrally manage and enforce policies across a fleet of Kubernetes clusters?",options:["OPA Gatekeeper","ArgoCD","Crossplane","Kyverno"],correctAnswer:"OPA Gatekeeper",explanation:`
### Concept: Policy Management
**Gatekeeper** is a customizable admission webhook that enforces CRD-based policies executed by **Open Policy Agent (OPA)**.
      `},{id:555,question:"What is 'Segmentation' in the context of cloud-native network security?",options:["Dividing a large image into smaller layers","Breaking a monolith into microservices","Dividing a network into smaller, isolated sub-networks or zones to limit the lateral movement of an attacker","Storing data across multiple physical disks"],correctAnswer:"Dividing a network into smaller, isolated sub-networks or zones to limit the lateral movement of an attacker",explanation:`
### Concept: Network Security
In Kubernetes, segmentation is typically achieved using **Namespaces** and **NetworkPolicies**.
      `},{id:556,question:"Which command is used to check the effective RBAC permissions for a specific user in a namespace?",options:["kubectl get rbac","kubectl describe user","kubectl auth can-i","kubectl check-permissions"],correctAnswer:"kubectl auth can-i",explanation:`
### Concept: RBAC Verification
\`kubectl auth can-i\` is a very useful command for debugging permissions and verifying that your RBAC roles are working as intended.
      `},{id:557,question:"What is the purpose of 'Gvisor' in container security?",options:["To provide a GUI for Docker","To provide an extra layer of kernel isolation by intercepting system calls made by containers","To speed up container startup times","To monitor network traffic between pods"],correctAnswer:"To provide an extra layer of kernel isolation by intercepting system calls made by containers",explanation:`
### Concept: Sandboxed Runtimes
**gVisor** (and Kata Containers) provide stronger isolation than standard runtimes by ensuring that the container never interacts directly with the host kernel.
      `},{id:558,question:"Which of the following is a key requirement of the 'GDPR' regulation that impacts cloud-native applications?",options:["All applications must be written in Go","Data of EU citizens must be protected and handled according to strict privacy rules","All clusters must be hosted in Europe","Every pod must have a unique EU-certified ID"],correctAnswer:"Data of EU citizens must be protected and handled according to strict privacy rules",explanation:`
### Concept: Compliance (GDPR)
GDPR compliance involves technical and organizational measures to ensure data privacy and security for European users.
      `},{id:559,question:"What does 'Observability' contribute to security operations?",options:["It makes the system impossible to hack","It provides the necessary data (logs, traces) to detect and investigate security incidents","It stores passwords in a secure way","It prevents all unauthorized logins"],correctAnswer:"It provides the necessary data (logs, traces) to detect and investigate security incidents",explanation:`
### Concept: Security Observability
Observability is critical for "Security Information and Event Management" (SIEM) and incident response.
      `},{id:560,question:"Which CNCF project provides an open standards-based framework for cloud-native secret management and rotation?",options:["Vault","External Secrets Operator","Bank-Vaults","Secrets Store CSI"],correctAnswer:"Bank-Vaults",explanation:`
### Concept: Secrets Management
Projects like **Bank-Vaults** (or the widely used HashiCorp Vault) provide advanced features like automatic secret rotation and dynamic secret generation.
      `},{id:561,question:"Which of the following is a key security feature provided by a Container Runtime Interface (CRI)?",options:["Automatic code obfuscation","Hardware-level encryption for all containers","Isolation of container processes from the host and other containers","Real-time malware scanning during execution"],correctAnswer:"Isolation of container processes from the host and other containers",explanation:`
### Concept: CRI Security
The **Container Runtime Interface (CRI)** and the underlying runtime (like containerd or CRI-O) are responsible for utilizing Linux kernel features (Namespaces, cgroups) to provide process-level isolation.
`},{id:562,question:"What is the primary security goal of 'Network Segmentation' in a Kubernetes cluster?",options:["To increase network throughput between pods","To prevent lateral movement by attackers if one service is compromised","To assign static IP addresses to all production pods","To disable the use of the Kubernetes API server"],correctAnswer:"To prevent lateral movement by attackers if one service is compromised",explanation:`
### Concept: Network Segmentation
By dividing the network into segments (using Namespaces and **NetworkPolicies**), you ensure that a breach in one application doesn't automatically grant the attacker access to every other service in the cluster.
`},{id:563,question:"Which component is often used in Kubernetes to manage identity and access for users outside the cluster?",options:["kube-proxy","OIDC (OpenID Connect) Provider","CoreDNS","etcd"],correctAnswer:"OIDC (OpenID Connect) Provider",explanation:`
### Concept: External Authentication
Kubernetes can delegate authentication to external **OIDC providers** (like Okta, Google, or Keycloak), allowing for centralized identity management and Single Sign-On (SSO).
`},{id:564,question:"In the context of the '4C' security model, what does the 'Code' layer focus on?",options:["Securing the data center's physical perimeter","Hardening the Linux kernel on the worker nodes","Protecting application logic, dependencies, and handling secrets securely","Configuring BIOS passwords on physical servers"],correctAnswer:"Protecting application logic, dependencies, and handling secrets securely",explanation:`
### Concept: 4C Model (Code)
The **Code** layer is the top-most layer. It involves practices like SAST/DAST, dependency scanning (SCA), and ensuring that the application itself doesn't leak secrets or have logic flaws.
`},{id:565,question:"Which of the following is a common threat targeted by 'Supply Chain Security' measures?",options:["Phishing attacks against cluster administrators","Physical theft of a worker node from a data center","Injection of malicious code into a widely used open-source library","Accidentally deleting a namespace using kubectl"],correctAnswer:"Injection of malicious code into a widely used open-source library",explanation:`
### Concept: Supply Chain Security
Supply chain attacks (like the SolarWinds breach) focus on compromising the tools, libraries, or distribution channels used to build and deliver software.
`},{id:566,question:"What is 'Encryption at Rest' specifically protecting in a Kubernetes environment?",options:["Data while it is being transmitted over the network","Data stored in the etcd database when it is written to disk","User passwords while they are being typed in a browser","The source code of the application in the Git repository"],correctAnswer:"Data stored in the etcd database when it is written to disk",explanation:`
### Concept: Encryption at Rest
**Encryption at Rest** ensures that if the physical storage media (e.g., an SSD or EBS volume) where **etcd** data resides is stolen, the data (including secrets) remains unreadable without the decryption key.
`},{id:567,question:"Which Kubernetes resource is used to limit the amount of CPU or memory a pod can request?",options:["NetworkPolicy","ResourceQuota","SecurityContext","HorizontalPodAutoscaler"],correctAnswer:"ResourceQuota",explanation:`
### Concept: Resource Management
**ResourceQuotas** are used at the namespace level to prevent any single team or application from consuming all cluster resources, which is a form of Deny of Service (DoS) protection.
`},{id:568,question:"What is 'Admission Control' in Kubernetes?",options:["A process for logging users into the cluster","A series of plugins that intercept and can modify or reject requests to the API server","A method for physically controlling access to the server room","A way to assign static IP addresses to pods"],correctAnswer:"A series of plugins that intercept and can modify or reject requests to the API server",explanation:`
### Concept: Admission Control
**Admission Controllers** act as a gatekeeper. After authentication and authorization, they can validate or mutate resources (like pods or services) before they are persisted in etcd.
`},{id:569,question:"Which tool would you use to perform 'Static Analysis' of a Kubernetes YAML file for security misconfigurations?",options:["Kube-hunter","Kube-bench","Checkov or Kube-score","Wireshark"],correctAnswer:"Checkov or Kube-score",explanation:`
### Concept: Static Analysis (IaC)
Tools like **Checkov**, **Kube-score**, or **Terrascan** analyze "Infrastructure as Code" (YAML/Terraform) to find misconfigurations (like running as root) before they are even deployed.
`},{id:570,question:"What is the primary function of a 'Service Mesh' in terms of security?",options:["To speed up the download of container images","To provide mutual TLS (mTLS) for all inter-service communication","To manage the physical cooling of servers","To replace the Kubernetes API server"],correctAnswer:"To provide mutual TLS (mTLS) for all inter-service communication",explanation:`
### Concept: Service Mesh Security
A **Service Mesh** (like Istio or Linkerd) provides a transparent way to secure service-to-service communication with **mTLS**, providing both encryption and strong identity verification.
`},{id:571,question:"Which concept involves addressed security during the planning and coding phases of development?",options:["Reactive Security","Shift Right","Shift Left","Post-mortem Analysis"],correctAnswer:"Shift Left",explanation:`
### Concept: Shift Left
**Shift Left** security means integrating security checks, testing, and considerations earlier in the software development lifecycle (SDLC) rather than waiting for production.
`},{id:572,question:"What is a 'Vulnerability Disclosure Policy' (VDP)?",options:["A policy that forbids anyone from looking for bugs in your software","A public-facing policy explaining how researchers can safely report security flaws","A document that lists every password used by the company","A contract signed by hackers to keep all bugs secret forever"],correctAnswer:"A public-facing policy explaining how researchers can safely report security flaws",explanation:`
### Concept: Vulnerability Disclosure
A **VDP** encourages 'ethical hackers' to report bugs responsibly, ensuring they have a clear path to do so without fear of legal action.
`},{id:573,question:"Which of the following describes 'Mutual TLS' (mTLS)?",options:["Only the server proves its identity to the client","Both the client and the server prove their identities to each other using certificates","A protocol used to encrypt hard disks","A way for two users to share the same password"],correctAnswer:"Both the client and the server prove their identities to each other using certificates",explanation:`
### Concept: mTLS
In **mTLS**, both parties verify each other's certificates, ensuring that only trusted services can communicate with each other.
`},{id:574,question:"What is the security risk of 'Credential Leakage' in a CI/CD pipeline?",options:["The pipeline will run too slowly","Attackers could gain access to production environments or sensitive data","The source code will be deleted automatically","The build process will consume too much memory"],correctAnswer:"Attackers could gain access to production environments or sensitive data",explanation:`
### Concept: Secret Management
Leaks often occur when secrets (like API keys) are accidentally committed to Git or printed in build logs. Using a dedicated secrets manager is essential.
`},{id:575,question:"In threat modeling, what does 'Likelihood' and 'Impact' help determine?",options:["The speed of the network","The overall Risk level of a threat","The number of pods needed for an application","The physical location of the data center"],correctAnswer:"The overall Risk level of a threat",explanation:`
### Concept: Risk Assessment
**Risk = Likelihood x Impact**. This helps security teams prioritize which threats to address first.
`},{id:576,question:"Which Kubernetes component manages and issues certificates for pods when using a Service Mesh?",options:["Kubelet","Control Plane (e.g., Istiod)","Etcd","Kube-proxy"],correctAnswer:"Control Plane (e.g., Istiod)",explanation:`
### Concept: Certificate Authority (CA)
In a service mesh, the control plane component (like **Istiod**) acts as a CA, issuing and rotating short-lived certificates for the sidecar proxies.
`},{id:577,question:"What is the primary purpose of 'Dynamic Application Security Testing' (DAST)?",options:["To scan the source code for bugs","To test a running application for vulnerabilities by simulating attacks","To check the security of the physical server room","To manage user permissions in the database"],correctAnswer:"To test a running application for vulnerabilities by simulating attacks",explanation:`
### Concept: DAST
**DAST** tools interact with the application from the outside (like an attacker would) to find issues like SQL injection or cross-site scripting while the app is active.
`},{id:578,question:"Which type of policy is typically used to restrict which users can run 'kubectl' commands?",options:["NetworkPolicy","RBAC (Role-Based Access Control)","ResourceQuota","CSI Policy"],correctAnswer:"RBAC (Role-Based Access Control)",explanation:`
### Concept: Authorization
**RBAC** determines which subjects (users, groups, service accounts) have permission to perform specific verbs (get, list, delete) on Kubernetes resources.
`},{id:579,question:"What does 'Secrets Encryption at Rest' in Kubernetes specifically encrypt?",options:["Environment variables in the pod","Secret data stored in etcd","Source code in the repository","Logs in the logging system"],correctAnswer:"Secret data stored in etcd",explanation:`
### Concept: Secret Security
By default, K8s secrets are only base64 encoded. **Encryption at Rest** adds a layer of cryptographic protection when they are saved to disk in etcd.
`},{id:580,question:"Which CNCF project is a common choice for 'Cloud Native Logging' and can be used for security auditing?",options:["Fluentd","Envoy","Harbor","Argo"],correctAnswer:"Fluentd",explanation:`
### Concept: Observability
**Fluentd** (and Fluent Bit) collect, process, and forward logs from containers and nodes to a central location for analysis and long-term storage.
`},{id:581,question:"What is 'Container Escape'?",options:["When a container finishes its task and stops","When an attacker breaks out of a container's isolation to gain access to the host OS","When a container is deleted by the scheduler","When a container uses too much CPU"],correctAnswer:"When an attacker breaks out of a container's isolation to gain access to the host OS",explanation:`
### Concept: Runtime Security
**Container Escape** is a critical security failure where the isolation boundaries (provided by the kernel) are bypassed, giving the attacker control over the underlying node.
`},{id:582,question:"Which of the following is a security best practice for managing Kubernetes Secrets?",options:["Commit them to your public Git repository for transparency","Avoid using secrets and use plain text ConfigMaps instead","Use an external secrets manager like HashiCorp Vault or AWS Secrets Manager","Print secret values in application logs to help with debugging"],correctAnswer:"Use an external secrets manager like HashiCorp Vault or AWS Secrets Manager",explanation:`
### Concept: Secrets Management
External secret managers provide better security, audit trails, and features like automatic rotation compared to native Kubernetes secrets alone.
`},{id:583,question:"What is 'Trust Root' in the context of TLS/SSL?",options:["The highest-level certificate authority (CA) that is trusted by the system","The main password for the cluster","The physical location of the first server built","A special kind of user account"],correctAnswer:"The highest-level certificate authority (CA) that is trusted by the system",explanation:`
### Concept: Identity & Trust
The **Trust Root** is the foundation of the chain of trust. If the root CA is trusted, all certificates issued by it or its intermediates are also trusted.
`},{id:584,question:"Which component of the '4C' security model includes securing your cloud provider's console and API access?",options:["Code","Container","Cluster","Cloud"],correctAnswer:"Cloud",explanation:`
### Concept: 4C Model (Cloud)
The **Cloud** layer is the foundation. It involves securing the IAM, VPCs, and overall account access of your cloud environment (AWS, GCP, Azure, etc.).
`},{id:585,question:"What is the purpose of 'Image Signing' in a containerized environment?",options:["To make the images look more professional","To ensure that an image hasn't been tampered with and comes from a trusted source","To reduce the size of the image","To speed up the container startup time"],correctAnswer:"To ensure that an image hasn't been tampered with and comes from a trusted source",explanation:`
### Concept: Supply Chain Security
**Image Signing** (using tools like Cosign) creates a digital signature that can be verified by the Kubernetes cluster (e.g., using a policy engine) before the image is allowed to run.
`},{id:586,question:"Which of the following describes 'Least Privilege' in the context of Kubernetes Service Accounts?",options:["Every pod should use the default service account with full admin rights","Pods should only be granted the specific permissions they need to perform their function","Service accounts should only be used for monitoring tools","All service accounts must have the same permissions to simplify management"],correctAnswer:"Pods should only be granted the specific permissions they need to perform their function",explanation:`
### Concept: RBAC & Service Accounts
The **Principle of Least Privilege** ensures that if a pod is compromised, the attacker's ability to interact with the Kubernetes API is limited to only what that specific pod was authorized to do.
`},{id:587,question:"What is 'Runtime Security Monitoring' primarily looking for?",options:["Errors in the application's configuration files","Unexpected or suspicious behavior while containers are running (e.g., shell access, file changes)","The number of users visiting the website","The total cost of running the cluster"],correctAnswer:"Unexpected or suspicious behavior while containers are running (e.g., shell access, file changes)",explanation:`
### Concept: Runtime Security
Monitoring tools (like Falco) watch for events that deviate from the 'normal' behavior of a container, alerting on potential compromises in real-time.
`},{id:588,question:"What does 'CVE' stand for in the context of cybersecurity?",options:["Common Vulnerabilities and Exposures","Container Vulnerability Encryption","Cluster Verification Engine","Critical Vulnerability Error"],correctAnswer:"Common Vulnerabilities and Exposures",explanation:`
### Concept: Vulnerability Management
**CVE** is a list of publicly disclosed cybersecurity vulnerabilities. Each entry (e.g., CVE-2021-44228) provides a standardized identifier for a specific flaw in a specific software package.
`},{id:589,question:"Which Kubernetes feature can be used to ensure that a pod only runs on a node that has specific security hardware (e.g., a TPM)?",options:["NetworkPolicy","NodeSelector or Affinity","ResourceQuota","LimitRange"],correctAnswer:"NodeSelector or Affinity",explanation:`
### Concept: Node Isolation
**NodeSelectors** and **Affinity/Anti-affinity** rules allow you to control pod placement, ensuring sensitive workloads only run on appropriately hardened or equipped hardware.
`},{id:590,question:"What is the primary benefit of using 'Namespaces' for security in a shared Kubernetes cluster?",options:["They make the network 10x faster","They provide a scope for RBAC policies and Resource Quotas, enabling multi-tenancy","They automatically encrypt all traffic passing through them","They prevent any communication between pods by default"],correctAnswer:"They provide a scope for RBAC policies and Resource Quotas, enabling multi-tenancy",explanation:`
### Concept: Multi-tenancy
**Namespaces** allow you to logically divide cluster resources, ensuring that Team A's developers cannot accidentally (or maliciously) modify Team B's applications.
`},{id:591,question:"What does 'SCA' (Software Composition Analysis) focus on?",options:["Testing the speed of the application","Identifying vulnerabilities in open-source libraries and dependencies used by your application","Scanning the physical network for unauthorized devices","Managing the deployment of virtual machines"],correctAnswer:"Identifying vulnerabilities in open-source libraries and dependencies used by your application",explanation:`
### Concept: Supply Chain Security
**SCA** tools (like Snyk or OWASP Dependency-Check) analyze your project's manifest files (e.g., package.json, pom.xml) to find known vulnerabilities in the third-party code you rely on.
`},{id:592,question:"Which of the following is a security risk of 'Excessive Permissions' given to a CI/CD service account?",options:["The build process will be too slow","A compromise of the CI/CD pipeline could allow an attacker to take over the entire Kubernetes cluster","The application will use more memory than usual","The logs will be harder to read"],correctAnswer:"A compromise of the CI/CD pipeline could allow an attacker to take over the entire Kubernetes cluster",explanation:`
### Concept: Pipeline Security
Always follow the **Principle of Least Privilege** for CI/CD tools. They should only have the minimum permissions required to deploy specific resources in specific namespaces.
`},{id:593,question:"What is 'Audit Sink' in Kubernetes?",options:["A place where old and unused logs are deleted","An API object that defines where audit events should be sent (e.g., an external log collector)","A security vulnerability that allows logs to be leaked","A tool for cleaning up disk space on worker nodes"],correctAnswer:"An API object that defines where audit events should be sent (e.g., an external log collector)",explanation:`
### Concept: Auditing
**Audit Sinks** allow you to stream Kubernetes audit logs to external platforms for real-time monitoring, alerting, and long-term compliance storage.
`},{id:594,question:"Which CNCF project provides a cloud-native service mesh with a focus on ease of use and 'Security by Default'?",options:["Linkerd","Kelsey","Prometheus","Helm"],correctAnswer:"Linkerd",explanation:`
### Concept: Service Mesh
**Linkerd** is known for being extremely lightweight and providing automatic **mTLS** out-of-the-box without requiring complex configuration.
`},{id:595,question:"What is 'Compliance Drift'?",options:["When an application gets faster over time","When a system's configuration changes over time, moving away from its initial secure and compliant state","When a cluster is moved from one cloud provider to another","When developers stop following the company's dress code"],correctAnswer:"When a system's configuration changes over time, moving away from its initial secure and compliant state",explanation:`
### Concept: Governance & Compliance
Continuous monitoring and automated remediation are needed to detect and fix **Compliance Drift** before it becomes a security risk.
`},{id:596,question:"What is the purpose of 'Pod Disruption Budgets' (PDBs) in the context of security maintenance?",options:["To limit the cost of running pods","To ensure that a minimum number of pods remain available during voluntary disruptions (like security patching/upgrades)","To prevent pods from being deleted by the administrator","To manage network traffic during a DDoS attack"],correctAnswer:"To ensure that a minimum number of pods remain available during voluntary disruptions (like security patching/upgrades)",explanation:`
### Concept: Availability
**PDBs** ensure that as you roll out security updates to your cluster nodes, the availability of your critical applications is maintained.
`},{id:597,question:"Which of the following describes 'Zero Trust Architecture'?",options:["Trusting all internal traffic automatically","Continuously verifying the identity and integrity of every request, regardless of where it originates","A network where no one is allowed to log in","A system that has zero security vulnerabilities"],correctAnswer:"Continuously verifying the identity and integrity of every request, regardless of where it originates",explanation:`
### Concept: Zero Trust
In a **Zero Trust** model, "location" (being inside the network) is no longer a proxy for "trust". Every connection must be authenticated and authorized.
`},{id:598,question:"What is 'Secrets Sprawl'?",options:["When a secret is used in more than one application","The unintentional and unmanaged distribution of secrets (keys, passwords) across various platforms and tools","When a database grows too large to manage","When a developer shares their password with a teammate"],correctAnswer:"The unintentional and unmanaged distribution of secrets (keys, passwords) across various platforms and tools",explanation:`
### Concept: Secrets Management
**Secrets Sprawl** makes it difficult to rotate keys, audit access, or ensure that credentials aren't leaked in logs or shared drives.
`},{id:599,question:"Which Kubernetes component should be restricted from direct public internet access to prevent attacks?",options:["Kube-apiserver","Etcd","Kubelet","All of the above"],correctAnswer:"All of the above",explanation:`
### Concept: Control Plane Hardening
Exposing core Kubernetes components to the internet increases the risk of brute-force attacks or exploitation of unpatched vulnerabilities. They should be behind VPNs or firewalls.
`},{id:600,question:"What is 'Container Sandboxing'?",options:["Running containers in a visual simulator","Using additional technologies (like gVisor or Kata) to provide stronger isolation than standard Linux containers","Using a smaller base image for your container","Encrypting the container's filesystem"],correctAnswer:"Using additional technologies (like gVisor or Kata) to provide stronger isolation than standard Linux containers",explanation:`
### Concept: Deep Isolation
Standard containers share the host kernel. **Sandboxing** provides an extra layer (like a guest kernel) to further isolate the container and protect the host.
`},{id:601,question:"What is 'Dynamic Secret Generation' in a tool like HashiCorp Vault?",options:["Creating a random password for a user","Creating short-lived, unique credentials on-demand for a specific task or session","Generating secrets that change their value every 5 seconds","Automating the backup of existing secrets"],correctAnswer:"Creating short-lived, unique credentials on-demand for a specific task or session",explanation:`
### Concept: Secrets Management
**Dynamic secrets** (e.g., for a database) are created when requested and automatically deleted when they expire, making stolen credentials useless after a short period.
`},{id:602,question:"Which of the following is a security risk of 'Default' configurations in Kubernetes?",options:["The defaults are often optimized for ease of use rather than maximum security","The defaults are always 10 versions behind the latest release","The defaults require more CPU and Memory than custom configs","The defaults cannot be changed by the administrator"],correctAnswer:"The defaults are often optimized for ease of use rather than maximum security",explanation:`
### Concept: Cluster Hardening
Many Kubernetes defaults (like open pod-to-pod communication) should be tightened according to your specific security requirements before going to production.
`},{id:603,question:"What is an 'Identity Provider' (IdP) responsible for?",options:["Assigning IP addresses to containers","Verifying and managing user identities and providing tokens for authentication","Scanning images for vulnerabilities","Monitoring the performance of the cluster"],correctAnswer:"Verifying and managing user identities and providing tokens for authentication",explanation:`
### Concept: Identity Management
An **IdP** (like Google, Azure AD, or an on-prem LDAP) is the source of truth for "who" a user is.
`},{id:604,question:"What is 'Data Sovereignty'?",options:["The idea that data should be free for everyone to access","The concept that data is subject to the laws and governance structures of the nation where it is physically located","A protocol for encrypting data during international transit","A system for assigning 'kingdoms' to different datasets"],correctAnswer:"The concept that data is subject to the laws and governance structures of the nation where it is physically located",explanation:`
### Concept: Governance & Compliance
**Data Sovereignty** is a major factor in cloud-native design, often requiring that sensitive data be stored and processed within specific geographic boundaries.
`},{id:605,question:"Which '4C' layer would focus on setting up a Web Application Firewall (WAF) to block malicious traffic?",options:["Code","Container","Cluster","Cloud"],correctAnswer:"Cloud",explanation:`
### Concept: 4C Model (Cloud)
A **WAF** typically sits at the edge of your cloud environment, intercepting HTTP traffic before it even reaches your Kubernetes cluster.
`},{id:606,question:"What does 'mTLS' solve that standard TLS does not?",options:["It makes the encryption 100% unbreakable","It allows the server to verify the identity of the client (and vice versa)","It works without requiring any certificates","It hide the IP address of the server"],correctAnswer:"It allows the server to verify the identity of the client (and vice versa)",explanation:`
### Concept: Identity & Authentication
Standard TLS only verifies the server. **mTLS** ensures that ONLY authorized clients (other services in your mesh) can talk to your service.
`},{id:607,question:"What is the primary goal of the 'CIS Benchmarks' for Kubernetes?",options:["To provide a guide for passing the CKA exam","To provide a set of best-practice settings and configurations for hardening a cluster","To list all known security vulnerabilities in Kubernetes","To provide a comparison of different cloud providers"],correctAnswer:"To provide a set of best-practice settings and configurations for hardening a cluster",explanation:`
### Concept: Compliance & Hardening
The **CIS (Center for Internet Security) Benchmarks** are the industry standard for verifying that your Kubernetes components (API server, kubelet, etcd) are configured securely.
`},{id:608,question:"What is 'Process Whitelisting' (or Allowlisting) in container security?",options:["Allowing any process to run in a container as long as it's signed","Defining the exact set of processes that are allowed to run in a container and blocking everything else","Giving all processes 'root' access for better performance","A list of developers who are allowed to create containers"],correctAnswer:"Defining the exact set of processes that are allowed to run in a container and blocking everything else",explanation:`
### Concept: Runtime Security
If an attacker manages to get a shell in your container but it's not on the **allowlist**, the runtime security tool will block it immediately.
`},{id:609,question:"Which type of volume is generally considered 'more secure' for sensitive data, as it only exists as long as the pod is running and is stored in memory?",options:["hostPath","persistentVolume","emptyDir with medium: Memory","NFS"],correctAnswer:"emptyDir with medium: Memory",explanation:`
### Concept: Data Privacy
Using **Memory-backed emptyDir** ensures that sensitive temporary data is never written to a physical disk, reducing the risk of data leakage after the pod is deleted.
`},{id:610,question:"What is the purpose of 'Network Isolation' between different stages of a CI/CD pipeline (e.g., Build vs Prod)?",options:["To make the build process faster","To prevent a compromise in the build stage from affecting the production environment","To reduce the cost of network egress","To ensure that all developers use the same version of Linux"],correctAnswer:"To prevent a compromise in the build stage from preceding to the production environment",explanation:`
### Concept: Pipeline Security
Isolation ensures that even if an attacker compromises a 'Build' server, they cannot use it as a bridge to reach and attack your 'Production' clusters.
`}],kcna:[{id:301,question:"What is the main benefit of a microservices architecture?",options:["Faster development and independent scaling","Simplified data management","Lower initial development costs","Improved monolithic performance"],correctAnswer:"Faster development and independent scaling",explanation:`
### Concept: Cloud Native Architecture
Microservices allow teams to develop, deploy, and scale services independently, which accelerates the development lifecycle and improves system resilience.
      `},{id:302,question:"What is the smallest deployable unit in Kubernetes?",options:["Container","Pod","Service","Node"],correctAnswer:"Pod",explanation:`
### Concept: Kubernetes Fundamentals
A **Pod** is the smallest and simplest unit in the Kubernetes object model that you create or deploy. It represents a single instance of a running process in your cluster.
      `},{id:303,question:"Which CNCF project is a graduated container runtime?",options:["Docker","containerd","CRIO","Rocket"],correctAnswer:"containerd",explanation:`
### Concept: Container Orchestration
**containerd** is an industry-standard container runtime with an emphasis on simplicity, robustness, and portability. It is a graduated project within the CNCF.
      `},{id:304,question:'What are the "Three Pillars of Observability"?',options:["Logs, Metrics, and Traces","Speed, Scale, and Reliability","CPU, RAM, and Disk","Dev, Ops, and Sec"],correctAnswer:"Logs, Metrics, and Traces",explanation:`
### Concept: Cloud Native Observability
Observability is traditionally built on three types of data:
- **Logs**: Discrete events.
- **Metrics**: Aggregate data over time.
- **Traces**: End-to-end request journeys.
      `},{id:305,question:'What is the "Zero Trust" security model?',options:["Trust everyone inside the network","Never trust, always verify","Trust no one except the admin","Trust but verify later"],correctAnswer:"Never trust, always verify",explanation:`
### Concept: Cloud Native Security
**Zero Trust** is a security framework requiring all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated for security configuration and risk posture.
      `},{id:306,question:"What is the primary role of the Kubernetes Control Plane?",options:["To run application containers","To manage the cluster state and make decisions about the cluster","To provide storage for containers","To handle network traffic between pods"],correctAnswer:"To manage the cluster state and make decisions about the cluster",explanation:`
### Concept: Kubernetes Architecture

The **Control Plane** is the brain of the Kubernetes cluster. It manages the cluster state, makes scheduling decisions, and responds to cluster events.

**Key Control Plane components:**
- **kube-apiserver**: Entry point for all REST commands
- **etcd**: Distributed key-value store for cluster data
- **kube-scheduler**: Assigns pods to nodes
- **kube-controller-manager**: Runs controller processes

**Why other options are incorrect:**
- Running containers happens on worker nodes, not the control plane
- Storage is handled by storage classes and persistent volumes
- Network traffic is managed by CNI plugins and kube-proxy
      `},{id:307,question:"Which component runs on every node in a Kubernetes cluster and ensures containers are running in pods?",options:["kube-proxy","kubelet","container runtime","kube-scheduler"],correctAnswer:"kubelet",explanation:`
### Concept: Node Components

The **kubelet** is an agent that runs on each node in the cluster. It ensures that containers described in Pod specifications are running and healthy.

**Kubelet responsibilities:**
- Registers the node with the API server
- Watches for pod assignments from the scheduler
- Ensures containers are running via the container runtime
- Reports node and pod status back to the control plane

**Why other options are incorrect:**
- **kube-proxy**: Maintains network rules for pod communication
- **container runtime**: Actually runs the containers (Docker, containerd, CRI-O)
- **kube-scheduler**: Lives in the control plane, assigns pods to nodes
      `},{id:308,question:"What is a Pod in Kubernetes?",options:["A single container running in Kubernetes","The smallest deployable unit that can contain one or more containers","A node in the Kubernetes cluster","A storage volume for containers"],correctAnswer:"The smallest deployable unit that can contain one or more containers",explanation:`
### Concept: Pods - Fundamental Unit

A **Pod** is the smallest and simplest unit in Kubernetes. It represents a running process in your cluster and can contain one or more tightly coupled containers.

**Pod characteristics:**
- Containers in a pod share network namespace (same IP address)
- Share storage volumes
- Scheduled together on the same node
- Represent a single instance of an application

**Common patterns:**
- **Single container pod**: Most common use case
- **Multi-container pod**: Sidecar, ambassador, or adapter patterns

**Why other options are incorrect:**
- While pods often contain a single container, they can contain multiple
- Nodes are machines in the cluster, not pods
- Volumes are separate resources attached to pods
      `},{id:309,question:"Which Kubernetes object is responsible for managing a set of identical pods and ensuring the desired number of replicas are running?",options:["DaemonSet","StatefulSet","Deployment","Job"],correctAnswer:"Deployment",explanation:`
### Concept: Workload Resources

A **Deployment** provides declarative updates for Pods and ReplicaSets. It manages the desired state of your application, including the number of replicas.

**Deployment features:**
- Rolling updates and rollbacks
- Scaling up or down
- Self-healing (recreates failed pods)
- Declarative configuration

**When to use each:**
- **Deployment**: Stateless applications (most common)
- **StatefulSet**: Stateful applications needing stable network identities
- **DaemonSet**: Run a pod on every node (monitoring, logging)
- **Job**: Run-to-completion tasks

**Example use case:** Web servers, API services, microservices
      `},{id:310,question:"What is the purpose of a Kubernetes Service?",options:["To provide persistent storage for pods","To expose a set of pods as a network service with a stable endpoint","To schedule pods on nodes","To manage secrets and configuration"],correctAnswer:"To expose a set of pods as a network service with a stable endpoint",explanation:`
### Concept: Service Discovery and Networking

A **Service** is an abstraction that defines a logical set of Pods and a policy to access them. It provides a stable IP address and DNS name for dynamic pods.

**Why Services are needed:**
- Pods are ephemeral (they can be created/destroyed)
- Pods get different IP addresses when recreated
- Services provide a stable endpoint for clients

**Service types:**
- **ClusterIP** (default): Internal cluster access only
- **NodePort**: Exposes service on each node's IP at a static port
- **LoadBalancer**: Creates external load balancer (cloud providers)
- **ExternalName**: Maps to external DNS name

**Why other options are incorrect:**
- Storage: Handled by PersistentVolumes and PersistentVolumeClaims
- Scheduling: Done by kube-scheduler
- Secrets: Managed by Secret and ConfigMap objects
      `},{id:311,question:"What does a Namespace provide in Kubernetes?",options:["Network isolation between pods","A way to divide cluster resources between multiple users or teams","Persistent storage for applications","Load balancing across nodes"],correctAnswer:"A way to divide cluster resources between multiple users or teams",explanation:`
### Concept: Resource Organization

**Namespaces** provide a mechanism for isolating groups of resources within a single cluster. They're ideal for multi-tenant environments.

**Use cases:**
- Separate environments (dev, staging, prod)
- Team isolation
- Resource quota enforcement
- Access control boundaries

**Default namespaces:**
- **default**: Default namespace for objects with no namespace
- **kube-system**: For Kubernetes system components
- **kube-public**: Readable by all users
- **kube-node-lease**: For node heartbeat data

**Important notes:**
- Not all objects are namespaced (nodes, PVs are cluster-wide)
- Namespaces don't provide network isolation by default (use Network Policies)

**Why other options are incorrect:**
- Network isolation requires Network Policies
- Storage is handled separately
- Load balancing is done by Services and Ingress
      `},{id:312,question:"Which kubectl command is used to create resources from a YAML file?",options:["kubectl create -f file.yaml","kubectl run -f file.yaml","kubectl deploy -f file.yaml","kubectl start -f file.yaml"],correctAnswer:"kubectl create -f file.yaml",explanation:`
### Concept: Declarative Configuration

**kubectl create** is used to create resources from a file, directory, or stdin. The \`-f\` flag specifies the file containing the resource definition.

**Common kubectl commands:**
- **kubectl create -f**: Create resources (fails if exists)
- **kubectl apply -f**: Create or update resources (idempotent)
- **kubectl delete -f**: Delete resources defined in file
- **kubectl get**: List resources
- **kubectl describe**: Show detailed information

**Create vs Apply:**
- **create**: Imperative - fails if resource exists
- **apply**: Declarative - creates or updates, tracks changes

**Best practice:** Use \`kubectl apply\` for declarative management in production.

**Example:**
\`\`\`bash
kubectl create -f deployment.yaml
kubectl apply -f deployment.yaml  # Preferred
\`\`\`
      `},{id:313,question:"What is the primary benefit of using containers?",options:["They provide better security than virtual machines","They package application code with dependencies for consistent deployment across environments","They are faster than running applications directly on the host OS","They require less disk space than installing applications directly"],correctAnswer:"They package application code with dependencies for consistent deployment across environments",explanation:`
### Concept: Container Fundamentals

**Containers** package application code together with all dependencies, libraries, and configuration files needed to run, ensuring consistency across different environments.

**Key benefits:**
- **Portability**: "It works on my machine" → "It works everywhere"
- **Consistency**: Same environment from dev to production
- **Isolation**: Applications don't interfere with each other
- **Efficiency**: Share OS kernel, lighter than VMs

**The "dependency problem" containers solve:**
- Different OS versions
- Different library versions
- Configuration drift
- Environment-specific bugs

**Why other options are incorrect:**
- Security depends on configuration (not inherently better than VMs)
- Speed benefits exist but aren't the primary advantage
- Disk space savings are a benefit, not the main purpose
      `},{id:314,question:"What is the difference between a container image and a container?",options:["They are the same thing","An image is a running instance, a container is the template","An image is a read-only template, a container is a running instance of an image","An image is stored locally, a container is stored in a registry"],correctAnswer:"An image is a read-only template, a container is a running instance of an image",explanation:`
### Concept: Images vs Containers

**Container Image**: A read-only template containing the application code, runtime, libraries, and dependencies. Think of it as a blueprint or class in OOP.

**Container**: A running instance of an image with a writable layer. Think of it as an object instantiated from a class.

**Analogy:**
- **Image** = Recipe (instructions)
- **Container** = Cake made from recipe (actual running instance)

**Key differences:**
- One image can create many containers
- Images are immutable (don't change)
- Containers have a writable layer (can change at runtime)
- Images are stored in registries (Docker Hub, ECR, GCR)
- Containers exist on the host where they run

**Example:**
\`\`\`bash
docker run nginx:latest  # Creates container from nginx image
# Can create multiple containers from same image
\`\`\`
      `},{id:315,question:"Which tool is NOT a container runtime compatible with Kubernetes?",options:["containerd","CRI-O","Docker Engine (via dockershim)","Podman"],correctAnswer:"Podman",explanation:`
### Concept: Container Runtimes & CRI

Kubernetes uses the **Container Runtime Interface (CRI)** to communicate with container runtimes. The runtime must implement CRI to work with Kubernetes.

**CRI-compatible runtimes:**
- **containerd**: Industry-standard, graduated CNCF project
- **CRI-O**: Lightweight, built specifically for Kubernetes
- **Docker Engine**: Previously used via dockershim (deprecated in 1.24, removed in 1.25)

**Podman** is a daemonless container engine for developing, managing, and running OCI containers. While Podman is excellent for local development and can manage containers, it does not implement the Kubernetes CRI by default; additional integration layers or shims are required for Podman to act as a CRI runtime in Kubernetes environments.

**Current best practices:**
- Use containerd or CRI-O as your runtime
- Podman is great for local development and rootless containers
      `},{id:316,question:"What does the Open Container Initiative (OCI) standardize?",options:["How to orchestrate containers in production","Container image format and runtime specifications","Kubernetes API specifications","Container networking protocols"],correctAnswer:"Container image format and runtime specifications",explanation:`
### Concept: Container Standards

The **Open Container Initiative (OCI)** is an industry standards organization that defines open specifications for container technology.

**OCI Specifications:**
1. **Image Specification**: How to package container images
2. **Runtime Specification**: How to run containers
3. **Distribution Specification**: How to distribute container images

**Why OCI matters:**
- **Interoperability**: Images work across different runtimes
- **Avoid vendor lock-in**: Use any OCI-compliant tool
- **Innovation**: Multiple implementations can compete

**Examples:**
- Docker, containerd, CRI-O all follow OCI specs
- Images built with Docker can run with containerd
- Registries support OCI image format

**Why other options are incorrect:**
- Orchestration is handled by Kubernetes, not OCI
- Kubernetes API is managed by CNCF/Kubernetes project
- Networking is covered by CNI (Container Network Interface)
      `},{id:317,question:"In the context of Cloud Native applications, what does 'immutable infrastructure' mean?",options:["Infrastructure that cannot be deleted once created","Infrastructure components are replaced rather than modified","Infrastructure that runs the same code forever","Infrastructure that doesn't require updates"],correctAnswer:"Infrastructure components are replaced rather than modified",explanation:`
### Concept: Cloud Native Principles

**Immutable Infrastructure** means that once deployed, infrastructure components are never modified. Instead, you replace them with new instances.

**Traditional vs Immutable:**
- **Traditional (mutable)**: SSH into server, update packages, change config
- **Immutable**: Build new image with updates, deploy new instances, remove old

**Benefits:**
- **Consistency**: No configuration drift
- **Reliability**: Same image in dev/staging/prod
- **Easy rollback**: Keep previous images
- **Debugging**: Exact replica of what failed

**How it works with containers:**
1. Build new container image with changes
2. Push to registry
3. Deploy new containers
4. Remove old containers

**Real-world example:**
Instead of updating packages on a running server, you:
- Build new container image with updated packages
- Deploy new pods with new image
- Old pods are terminated

**Why other options are incorrect:**
- You can delete infrastructure (that's how you replace it)
- Code changes regularly (via new images)
- Infrastructure does require updates (via replacement)
      `},{id:318,question:"What is a key characteristic of microservices architecture?",options:["All services share the same database","Applications are built as a collection of small, independent services","Services must be written in the same programming language","All services run on a single server"],correctAnswer:"Applications are built as a collection of small, independent services",explanation:`
### Concept: Microservices Architecture

**Microservices** is an architectural style where an application is composed of small, independent services that communicate over well-defined APIs.

**Key characteristics:**
- **Single responsibility**: Each service does one thing well
- **Independence**: Developed, deployed, and scaled independently
- **Decentralized**: Own data, tech stack, and lifecycle
- **Communication**: Typically via HTTP/REST or message queues

**Benefits:**
- Scale individual services based on demand
- Different teams can work independently
- Technology diversity (polyglot)
- Easier to understand and modify small services
- Fault isolation

**Challenges:**
- Distributed system complexity
- Service discovery and communication
- Data consistency
- Testing and monitoring

**Contrast with Monolith:**
- **Monolith**: All code in one application
- **Microservices**: Split into independent services

**Why other options are incorrect:**
- Each service typically has its own database (data independence)
- Services can use different languages (polyglot)
- Services run distributed across multiple servers/containers
      `},{id:319,question:"What is the role of etcd in a Kubernetes cluster?",options:["It runs application containers","It stores all cluster configuration and state data","It manages network policies between pods","It schedules pods to nodes"],correctAnswer:"It stores all cluster configuration and state data",explanation:`
### Concept: etcd - Cluster Data Store

**etcd** is a distributed, consistent key-value store used as Kubernetes' backing store for all cluster data. It's the source of truth for the cluster.

**What etcd stores:**
- Cluster configuration
- Current state of all resources (pods, services, etc.)
- Secrets and ConfigMaps
- Node information
- Resource quotas and policies

**Key characteristics:**
- **Distributed**: Runs across multiple nodes for HA
- **Consistent**: Uses Raft consensus algorithm
- **Reliable**: Critical for cluster operation
- **Fast**: Optimized for reads

**Why it matters:**
- If etcd is down, cluster can't make changes
- Regular backups are critical for disaster recovery
- All kubectl commands query/update etcd via API server

**Architecture:**
\`\`\`
kubectl → API Server → etcd
                ↓
         Controllers/Scheduler
\`\`\`

**Why other options are incorrect:**
- Containers run on worker nodes (via kubelet)
- Network policies enforced by CNI plugins/kube-proxy
- Scheduling done by kube-scheduler
      `},{id:320,question:"What is the purpose of a ReplicaSet in Kubernetes?",options:["To backup pod data to multiple locations","To maintain a stable set of replica pods running at any given time","To replicate data across multiple nodes","To create copies of container images"],correctAnswer:"To maintain a stable set of replica pods running at any given time",explanation:`
### Concept: ReplicaSets

A **ReplicaSet** ensures that a specified number of pod replicas are running at any given time. It's the mechanism that provides self-healing and scaling.

**How ReplicaSets work:**
1. You specify desired number of replicas.
2. ReplicaSet monitors actual number of pods.
3. Creates pods if too few exist.
4. Deletes pods if too many exist.

**Key fields in a ReplicaSet spec:**
- \`replicas\`: desired number of pod replicas
- \`selector\`: label selector used to identify which pods belong to the ReplicaSet
- \`template\`: pod template used to create new pods

**Example:**
\`\`\`yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:stable
\`\`\`

ReplicaSets are often managed by Deployments (which provide declarative updates, rolling updates, and rollback capabilities). If you need advanced ordering or stable network IDs, consider StatefulSet instead.
      `},{id:321,question:"Which CNCF project is used for multi-cluster networking and security using eBPF?",options:["Cilium","Calico","Istio","Linkerd"],correctAnswer:"Cilium",explanation:`
### Concept: Cloud Native Networking
**Cilium** is an open-source project that provides networking, security, and observability for cloud-native environments such as Kubernetes.

- **eBPF-based**: It uses eBPF technology to provide high-performance networking and security.
- **Service Mesh**: It can also act as a sidecarless service mesh.
- **Observability**: Through the **Hubble** project, it provides deep visibility into network flows.
      `},{id:322,question:"Which component in Kubernetes is responsible for scheduling pods to nodes?",options:["kube-apiserver","kube-scheduler","kube-controller-manager","kubelet"],correctAnswer:"kube-scheduler",explanation:`
### Concept: Kubernetes Control Plane Components
**kube-scheduler** is the control plane component responsible for assigning pods to nodes.
- **Watch for Pods**: It watches for newly created pods that have no node assigned.
- **Selection Criteria**: It selects an optimal node based on resource requirements, constraints, affinity/anti-affinity specifications, and other factors.
- **Scheduling Decision**: The scheduler makes the decision but doesn't run the pod - that's the kubelet's job.
- **Pluggable**: Custom schedulers can be implemented for specific scheduling requirements.
      `},{id:323,question:"What is the primary purpose of a Container Runtime Interface (CRI)?",options:["To provide a standard API for container orchestration","To enable Kubernetes to work with different container runtimes","To manage container images and registries","To handle container networking"],correctAnswer:"To enable Kubernetes to work with different container runtimes",explanation:`
### Concept: Container Runtime Interface (CRI)
**CRI** is a plugin interface that enables kubelet to use a variety of container runtimes without needing to recompile.
- **Abstraction Layer**: It provides a standardized interface between Kubernetes and container runtimes.
- **Runtime Examples**: containerd, CRI-O, and Docker Engine (via dockershim, now deprecated) are CRI-compatible runtimes.
- **Flexibility**: Allows users to choose the container runtime that best fits their needs.
- **gRPC Protocol**: CRI uses gRPC for communication between kubelet and the runtime.
      `},{id:324,question:"Which CNCF project provides distributed tracing for microservices?",options:["Prometheus","Jaeger","Fluentd","Grafana"],correctAnswer:"Jaeger",explanation:`
### Concept: Observability - Distributed Tracing
**Jaeger** is an open-source, end-to-end distributed tracing system for monitoring and troubleshooting microservices-based architectures.
- **Trace Propagation**: Tracks requests as they flow through multiple services.
- **Performance Optimization**: Helps identify bottlenecks and latency issues.
- **Root Cause Analysis**: Assists in debugging distributed transactions.
- **OpenTelemetry Compatible**: Works with OpenTelemetry for standardized instrumentation.
      `},{id:325,question:"What is the default DNS service used in Kubernetes clusters?",options:["BIND","CoreDNS","dnsmasq","Consul"],correctAnswer:"CoreDNS",explanation:`
### Concept: Kubernetes Service Discovery
**CoreDNS** is the default DNS server for Kubernetes clusters (since version 1.13).
- **Service Discovery**: Automatically creates DNS records for Kubernetes services.
- **Plugin Architecture**: Highly extensible through plugins for various DNS functions.
- **DNS-Based**: Enables pods to discover services using DNS names.
- **Replaced kube-dns**: CoreDNS replaced kube-dns as the default due to better performance and flexibility.
      `},{id:326,question:"Which of the following is NOT one of the 'Three Pillars of Observability'?",options:["Metrics","Logs","Traces","Alerts"],correctAnswer:"Alerts",explanation:`
### Concept: Observability in Cloud Native Systems
The **Three Pillars of Observability** are fundamental data types for understanding system behavior:
- **Metrics**: Numerical measurements over time (e.g., CPU usage, request rate).
- **Logs**: Discrete event records with timestamps and context.
- **Traces**: Request flows across distributed systems showing latency and dependencies.
- **Alerts**: While important, alerts are actions taken based on observability data, not a pillar themselves.
      `},{id:327,question:"What does the 'declarative' nature of Kubernetes mean?",options:["You write code to manually create each resource","You describe the desired state and Kubernetes works to maintain it","You must declare all variables before using them","You need to declare dependencies between resources"],correctAnswer:"You describe the desired state and Kubernetes works to maintain it",explanation:`
### Concept: Declarative Configuration
**Declarative configuration** is a core principle of Kubernetes where you specify what you want, not how to achieve it.
- **Desired State**: You define the desired state in manifest files (YAML/JSON).
- **Reconciliation Loop**: Kubernetes controllers continuously work to match the current state with the desired state.
- **Self-Healing**: If the actual state drifts from desired state, Kubernetes automatically corrects it.
- **vs Imperative**: Contrasts with imperative commands where you specify exact steps to execute.
      `},{id:328,question:"Which storage abstraction in Kubernetes allows pods to request storage without knowing the underlying storage provider?",options:["Volume","PersistentVolume","PersistentVolumeClaim","StorageClass"],correctAnswer:"PersistentVolumeClaim",explanation:`
### Concept: Kubernetes Storage Abstractions
**PersistentVolumeClaim (PVC)** is a request for storage by a user, abstracting storage details from the pod.
- **Storage Request**: Pods use PVCs to request storage without knowing implementation details.
- **Binding**: PVCs are bound to PersistentVolumes (PVs) that satisfy the request.
- **Dynamic Provisioning**: Can trigger automatic PV creation via StorageClass.
- **Portability**: Makes applications portable across different storage backends.
      `},{id:329,question:"What is the purpose of a Service Mesh in cloud native architectures?",options:["To provide load balancing for incoming traffic","To manage communication between microservices with features like traffic management and security","To store configuration data for services","To schedule containers across cluster nodes"],correctAnswer:"To manage communication between microservices with features like traffic management and security",explanation:`
### Concept: Service Mesh
A **Service Mesh** is a dedicated infrastructure layer for handling service-to-service communication in microservices architectures.
- **Traffic Management**: Provides advanced routing, load balancing, and circuit breaking.
- **Security**: Implements mTLS, authentication, and authorization between services.
- **Observability**: Generates metrics, logs, and traces for all service interactions.
- **Examples**: Istio, Linkerd, and Consul are popular service mesh implementations.
      `},{id:330,question:"Which Open Container Initiative (OCI) specification defines the structure and format of container images?",options:["Runtime Specification","Image Specification","Distribution Specification","Container Specification"],correctAnswer:"Image Specification",explanation:`
### Concept: OCI Standards
The **OCI Image Specification** defines the format of container images to ensure portability across different platforms.
- **Image Format**: Specifies how container images should be structured and packaged.
- **Layers**: Defines the layer-based filesystem structure.
- **Manifest**: Describes image configuration and layer references.
- **Portability**: Ensures images work across different OCI-compliant runtimes and registries.
      `},{id:331,question:"In Kubernetes, what is the smallest deployable unit?",options:["Container","Pod","Deployment","Node"],correctAnswer:"Pod",explanation:`
### Concept: Kubernetes Workload Fundamentals
A **Pod** is the smallest and simplest unit in the Kubernetes object model that you create or deploy.
- **Container Group**: A pod can contain one or more containers that share resources.
- **Shared Context**: Containers in a pod share network namespace, IP address, and storage volumes.
- **Atomic Unit**: Pods are created, scheduled, and managed as a single unit.
- **Ephemeral**: Pods are designed to be ephemeral and replaceable.
      `},{id:332,question:"A developer wants to ensure that their application pods are distributed across different nodes for high availability. Which Kubernetes feature should they use?",options:["NodeSelector","Pod Anti-Affinity","Taints and Tolerations","Resource Requests"],correctAnswer:"Pod Anti-Affinity",explanation:`
### Concept: Pod Scheduling and High Availability
**Pod Anti-Affinity** is used to spread pods across different nodes, zones, or other topology domains to ensure high availability.
- **Distribution Strategy**: Prevents multiple replicas of the same application from running on the same node.
- **Failure Isolation**: If a node fails, you won't lose all replicas at once.
- **Topology Keys**: Can use labels like kubernetes.io/hostname, topology.kubernetes.io/zone for distribution.
- **Required vs Preferred**: Can be hard (requiredDuringSchedulingIgnoredDuringExecution) or soft (preferredDuringSchedulingIgnoredDuringExecution).

**Why other options are incorrect**:
- NodeSelector: Only selects specific nodes, doesn't ensure distribution
- Taints and Tolerations: Controls which pods can/cannot be scheduled on nodes
- Resource Requests: For resource allocation, not distribution
  `},{id:333,question:"Your organization wants to implement a GitOps workflow for Kubernetes deployments. Which CNCF project is specifically designed for this purpose?",options:["Jenkins","Helm","Argo CD","Prometheus"],correctAnswer:"Argo CD",explanation:`
### Concept: GitOps and Continuous Deployment
**Argo CD** is a declarative, GitOps continuous delivery tool for Kubernetes, and is a CNCF graduated project.
- **Git as Source of Truth**: Keeps cluster state synchronized with Git repository declarations.
- **Automated Sync**: Automatically deploys applications when Git repository changes are detected.
- **Drift Detection**: Detects and corrects configuration drift from desired state.
- **Multi-cluster Support**: Can manage deployments across multiple Kubernetes clusters.
- **Visual UI**: Provides a web interface to visualize application state and sync status.

**GitOps Principles**:
1. Declarative configuration stored in Git
2. Automated deployment from Git
3. Continuous reconciliation of desired vs actual state
4. Immutable infrastructure through version control
  `},{id:334,question:"Which statement is TRUE about container images and layers?",options:["Each RUN instruction in a Dockerfile creates a new container","Image layers are mutable and can be modified after creation","Multiple containers can share the same read-only image layers","Deleting files in a later layer reduces the total image size"],correctAnswer:"Multiple containers can share the same read-only image layers",explanation:`
### Concept: Container Image Architecture and Layering
**Container images use a layered filesystem** where multiple containers can share common base layers, optimizing storage and transfer.
- **Layer Sharing**: Read-only layers are shared between containers using the same base image.
- **Copy-on-Write**: Each container gets its own writable layer on top of shared read-only layers.
- **Storage Efficiency**: Dramatically reduces disk space usage when running multiple containers.
- **Fast Deployment**: Layers already present don't need to be downloaded again.

**Why other options are incorrect**:
- RUN creates a layer, not a container
- Image layers are immutable (read-only) once created
- Deleting files in later layers doesn't reduce size - the deleted files still exist in previous layers (layer accumulation)

**Best Practice**: Combine commands in Dockerfile to reduce layers and clean up in the same RUN instruction.
  `},{id:335,question:"In a microservices architecture, Service A needs to call Service B, but Service B is temporarily unavailable. Which service mesh feature prevents Service A from being overwhelmed with failed requests?",options:["Load Balancing","Circuit Breaker","Mutual TLS","Traffic Splitting"],correctAnswer:"Circuit Breaker",explanation:`
### Concept: Service Mesh Resilience Patterns
**Circuit Breaker** is a pattern that prevents cascading failures by stopping requests to failing services after a threshold is reached.
- **Failure Detection**: Monitors request failures and latency to detect service issues.
- **Three States**: Closed (normal), Open (blocking requests), Half-Open (testing recovery).
- **Fast Fail**: Returns errors immediately instead of waiting for timeouts when circuit is open.
- **Auto Recovery**: Periodically tests if the failing service has recovered.
- **Protection**: Prevents resource exhaustion from retrying failed operations.

**Circuit Breaker States**:
1. **Closed**: Requests flow normally, failures are counted
2. **Open**: Threshold exceeded, requests fail immediately
3. **Half-Open**: Limited requests allowed to test recovery

**Implementation**: Available in service meshes like Istio, Linkerd, and libraries like Hystrix.
  `},{id:336,question:"A company wants to run different versions of their application simultaneously and gradually shift traffic from v1 to v2. What deployment strategy should they use?",options:["Blue-Green Deployment","Recreate Deployment","Canary Deployment","Rolling Update"],correctAnswer:"Canary Deployment",explanation:`
### Concept: Cloud Native Deployment Strategies
**Canary Deployment** gradually shifts traffic from an old version to a new version, allowing for monitoring and quick rollback if issues arise.
- **Gradual Rollout**: Start with small percentage (e.g., 5%) of traffic to new version.
- **Monitor Metrics**: Observe error rates, latency, and other KPIs during rollout.
- **Progressive Increase**: Gradually increase traffic to new version if metrics are healthy.
- **Quick Rollback**: Easy to revert by shifting traffic back to old version.
- **Risk Mitigation**: Limits blast radius of bugs or performance issues.

**Comparison with other strategies**:
- **Blue-Green**: Instant 100% switch between versions (all-or-nothing)
- **Rolling Update**: Replaces pods gradually without traffic control
- **Recreate**: Downtime approach, terminates all old pods before starting new ones

**Tools**: Implemented via service mesh (Istio, Linkerd), Flagger, or Argo Rollouts.
  `},{id:337,question:"What is the primary benefit of using an Ingress Controller over a LoadBalancer Service in Kubernetes?",options:["Ingress Controllers provide faster networking","A single Ingress can route to multiple services using path-based routing, reducing external load balancers needed","Ingress Controllers encrypt all traffic automatically","LoadBalancer Services only work with cloud providers"],correctAnswer:"A single Ingress can route to multiple services using path-based routing, reducing external load balancers needed",explanation:`
### Concept: Kubernetes Ingress and Traffic Management
**Ingress** provides HTTP/HTTPS routing to multiple services through a single entry point, offering cost and management benefits.
- **Cost Efficiency**: One load balancer can route to multiple services instead of one per service.
- **Path-Based Routing**: Routes like /api → api-service, /web → web-service from single endpoint.
- **Host-Based Routing**: Different domains/subdomains can route to different services.
- **TLS Termination**: Centralized SSL/TLS certificate management.
- **Layer 7 Features**: URL rewriting, redirects, authentication at application layer.

**Ingress Components**:
- **Ingress Resource**: Kubernetes object defining routing rules
- **Ingress Controller**: Implementation (NGINX, Traefik, HAProxy, etc.) that enforces rules

**Example Use Case**: Instead of 10 LoadBalancer services (10 cloud load balancers = $$$), use 1 Ingress with routing rules.

**Popular Ingress Controllers**: NGINX Ingress, Traefik, HAProxy, Kong, Contour, Ambassador
  `},{id:338,question:"In observability, what does 'cardinality' refer to, and why is it important?",options:["The number of data points collected per second","The number of unique combinations of label values in metrics","The accuracy of measurements","The time it takes to query metrics"],correctAnswer:"The number of unique combinations of label values in metrics",explanation:`
### Concept: Observability Metrics and Cardinality
**Cardinality** refers to the number of unique time series created by different combinations of metric labels, which significantly impacts system performance.
- **Time Series Explosion**: Each unique label combination creates a new time series.
- **Resource Impact**: High cardinality can overwhelm metric storage and query systems.
- **Example**: A metric with labels for user_id, request_id, and timestamp creates millions of series.
- **Best Practice**: Use labels for aggregatable dimensions (service, endpoint, status) not unique IDs.

**High Cardinality Problems**:
- Increased storage costs
- Slower queries
- Higher memory usage in Prometheus/similar systems
- Potential system crashes

**Good Label Examples**: environment, service_name, http_status, region
**Bad Label Examples**: user_id, transaction_id, email, timestamp

**Rule of Thumb**: Keep total unique label combinations under 10,000 per metric in Prometheus.
  `},{id:339,question:"Your team needs to ensure that a Kubernetes cluster can automatically scale nodes based on pod resource requirements. Which component should be deployed?",options:["Horizontal Pod Autoscaler (HPA)","Vertical Pod Autoscaler (VPA)","Cluster Autoscaler","Metrics Server"],correctAnswer:"Cluster Autoscaler",explanation:`
### Concept: Kubernetes Autoscaling - Infrastructure Level
**Cluster Autoscaler** automatically adjusts the number of nodes in a cluster based on pending pods and resource utilization.
- **Scale Up**: Adds nodes when pods can't be scheduled due to insufficient resources.
- **Scale Down**: Removes underutilized nodes when pods can be rescheduled elsewhere.
- **Cloud Integration**: Works with cloud providers (AWS, GCP, Azure) to provision/terminate nodes.
- **Pod Awareness**: Respects PodDisruptionBudgets and pod priorities during scale down.
- **Cost Optimization**: Reduces costs by removing idle nodes while ensuring capacity.

**Autoscaling Hierarchy**:
1. **HPA**: Scales number of pod replicas based on metrics (CPU, memory, custom)
2. **VPA**: Adjusts CPU/memory requests for individual pods
3. **Cluster Autoscaler**: Scales number of nodes in the cluster

**Trigger**: When scheduler cannot place pods due to insufficient node resources.

**Considerations**: Requires cloud provider support, has cool-down periods, works with node groups/pools.
  `},{id:340,question:"Which Open Policy Agent (OPA) integration point in Kubernetes allows you to enforce policies BEFORE resources are persisted to etcd?",options:["Custom Resource Definitions","Admission Controllers","Network Policies","RBAC Rules"],correctAnswer:"Admission Controllers",explanation:`
### Concept: Kubernetes Policy Enforcement and Admission Control
**Admission Controllers** are plugins that intercept requests to the Kubernetes API before object persistence, enabling policy enforcement.
- **Validation Stage**: Checks if requests comply with policies before storing in etcd.
- **Mutation Stage**: Can modify requests (e.g., inject sidecars, set defaults).
- **OPA Integration**: OPA Gatekeeper uses ValidatingWebhookConfiguration and MutatingWebhookConfiguration.
- **Early Enforcement**: Prevents non-compliant resources from being created.
- **Policy Examples**: Require labels, enforce naming conventions, block privileged containers, require resource limits.

**Admission Control Flow**:
1. Request sent to API server
2. Authentication (who are you?)
3. Authorization (what can you do?)
4. **Admission Controllers** (should this be allowed based on policy?)
5. Validation
6. Persistence to etcd

**OPA Gatekeeper**: Kubernetes-native policy enforcement using OPA and ConstraintTemplates.

**Built-in Admission Controllers**: PodSecurityPolicy, ResourceQuota, LimitRanger, NamespaceLifecycle
  `},{id:341,question:"A company wants to implement zero-trust security between microservices. Which capability is MOST important?",options:["Network segmentation using Network Policies","Mutual TLS (mTLS) for service-to-service communication","Container image scanning","Secrets encryption at rest"],correctAnswer:"Mutual TLS (mTLS) for service-to-service communication",explanation:`
### Concept: Zero Trust Security in Cloud Native Environments
**Mutual TLS (mTLS)** provides bidirectional authentication and encryption between services, forming the foundation of zero-trust architecture.
- **Bidirectional Auth**: Both client and server verify each other's identity using certificates.
- **Encryption**: All communication is encrypted in transit.
- **Identity-Based**: Services authenticate based on cryptographic identity, not network location.
- **Zero Trust Principle**: "Never trust, always verify" - even internal communication is authenticated.
- **Service Mesh Implementation**: Automatically handled by service meshes like Istio, Linkerd.

**mTLS Benefits**:
- Prevents man-in-the-middle attacks
- Ensures only authorized services can communicate
- Provides audit trail of service interactions
- Encryption without application code changes

**Zero Trust Components**:
1. **mTLS**: Authentication and encryption (most critical)
2. Network Policies: Traffic control
3. RBAC: Authorization
4. Policy Enforcement: OPA, service mesh policies

**Comparison**: Network Policies control traffic flow, but don't verify identity or encrypt. mTLS does both.
  `},{id:342,question:"When designing a cloud native application, which principle suggests that configuration should be externalized from the application code?",options:["Immutable Infrastructure","The Twelve-Factor App Methodology","Domain-Driven Design","Event-Driven Architecture"],correctAnswer:"The Twelve-Factor App Methodology",explanation:`
### Concept: Cloud Native Application Design Principles
**The Twelve-Factor App** is a methodology for building SaaS applications that emphasizes portability and cloud-native best practices.
- **Factor III - Config**: Store configuration in environment variables, separate from code.
- **Environment Parity**: Same codebase runs in dev, staging, and production with different configs.
- **Portability**: Applications can move between environments without code changes.
- **Security**: Credentials and secrets never committed to version control.
- **Kubernetes Implementation**: ConfigMaps and Secrets for configuration management.

**Key Twelve-Factor Principles**:
1. One codebase, many deploys
2. Explicit dependencies
3. **Config in environment**
4. Backing services as attached resources
5. Build, release, run separation
6. Stateless processes
7. Port binding
8. Concurrency through process model
9. Fast startup and graceful shutdown
10. Dev/prod parity
11. Logs as event streams
12. Admin processes

**Configuration Anti-Pattern**: Hardcoding database URLs, API keys, or environment-specific settings in code.
  `},{id:343,question:"Your application needs to access cloud provider APIs (like AWS S3). What is the cloud-native way to provide credentials without storing them in the container?",options:["Embed credentials in the container image","Use Kubernetes Secrets mounted as environment variables","Use Workload Identity / IAM Roles for Service Accounts (IRSA)","Store credentials in a ConfigMap"],correctAnswer:"Use Workload Identity / IAM Roles for Service Accounts (IRSA)",explanation:`
### Concept: Cloud Native Security - Credential Management
**Workload Identity** (GCP) and **IAM Roles for Service Accounts (IRSA)** (AWS) allow pods to assume cloud IAM roles without static credentials.
- **No Static Credentials**: Eliminates need to store long-lived credentials.
- **Automatic Rotation**: Credentials are temporary and auto-rotated.
- **Least Privilege**: Each workload gets only the permissions it needs.
- **Service Account Binding**: Kubernetes ServiceAccount is mapped to cloud IAM role.
- **Transparent**: Application uses standard cloud SDK, credentials injected automatically.

**How It Works** (AWS IRSA):
1. Create IAM role with specific permissions
2. Associate IAM role with Kubernetes ServiceAccount
3. Pod uses the ServiceAccount
4. AWS STS provides temporary credentials to pod
5. Application uses credentials transparently

**Why other options are worse**:
- Embedding in image: Credentials leak, hard to rotate, security nightmare
- K8s Secrets: Better, but still static credentials to manage
- ConfigMap: NEVER for credentials - ConfigMaps are not encrypted

**Azure Equivalent**: Azure AD Workload Identity
  `},{id:344,question:"In a Kubernetes cluster, which component is responsible for maintaining the desired state of pods on a specific node?",options:["kube-scheduler","kube-controller-manager","kubelet","kube-proxy"],correctAnswer:"kubelet",explanation:`
### Concept: Kubernetes Node Components
**kubelet** is the primary node agent that ensures containers described in PodSpecs are running and healthy on its node.
- **Pod Lifecycle**: Creates, starts, stops, and monitors containers in pods.
- **Health Checks**: Executes liveness, readiness, and startup probes.
- **Reports Status**: Sends node and pod status to control plane.
- **Pulls Images**: Works with container runtime to pull images from registries.
- **Resource Management**: Enforces resource limits and requests.
- **Volume Management**: Mounts volumes for pods.

**kubelet Responsibilities**:
1. Watch API server for pods assigned to its node
2. Ensure pod containers are running
3. Report pod and node status back to control plane
4. Execute container lifecycle hooks
5. Collect and report resource metrics

**Communication**:
- **Receives**: Pod specs from API server
- **Interacts**: With container runtime via CRI
- **Reports**: Node status, pod status, events

**Key Point**: kubelet maintains ACTUAL state to match DESIRED state defined in PodSpecs.
  `},{id:345,question:"Which CNCF project provides a standardized vendor-neutral way to collect telemetry data (metrics, logs, traces) from applications?",options:["Prometheus","Jaeger","OpenTelemetry","Fluentd"],correctAnswer:"OpenTelemetry",explanation:`
### Concept: Observability Standards and Instrumentation
**OpenTelemetry (OTel)** is a CNCF project that provides a unified set of APIs, SDKs, and tools for collecting observability data.
- **Vendor Neutral**: Avoids lock-in to specific observability backends.
- **Three Signals**: Collects metrics, traces, and logs through single framework.
- **Auto-Instrumentation**: Provides automatic instrumentation for many languages/frameworks.
- **Exporters**: Can send data to multiple backends (Prometheus, Jaeger, Datadog, etc.).
- **Standardization**: Merges OpenTracing and OpenCensus projects.

**OpenTelemetry Components**:
- **API**: Language-specific instrumentation interface
- **SDK**: Implementation of API with configuration
- **Collector**: Vendor-agnostic receiver, processor, and exporter for telemetry
- **Instrumentation Libraries**: Pre-built instrumentation for frameworks

**Data Flow**:
Application → OTel SDK → OTel Collector → Backend (Prometheus/Jaeger/etc.)

**Why It's Important**: Write instrumentation once, switch backends without code changes.

**Adoption**: Supported by all major observability vendors and cloud providers.
  `},{id:346,question:"A StatefulSet manages pods with identities pod-0, pod-1, pod-2. If pod-1 is deleted, what happens?",options:["A new pod is created with a random name","The pod is recreated with the same name 'pod-1' and reattaches to the same PersistentVolume","The StatefulSet creates pod-3 instead","The pod is not recreated until the entire StatefulSet is restarted"],correctAnswer:"The pod is recreated with the same name 'pod-1' and reattaches to the same PersistentVolume",explanation:`
### Concept: StatefulSets and Stateful Applications
**StatefulSets** provide stable, unique network identifiers and stable persistent storage for pods, essential for stateful workloads.
- **Stable Identity**: Each pod gets a persistent identifier (pod-0, pod-1, etc.) that survives rescheduling.
- **Ordered Deployment**: Pods are created sequentially (0→1→2) and terminated in reverse.
- **Stable Storage**: Each pod's PersistentVolumeClaim is retained and remounted on pod recreation.
- **Stable Network**: DNS entries remain consistent (pod-1.service-name.namespace.svc.cluster.local).
- **Use Cases**: Databases, message queues, distributed systems requiring stable identity.

**StatefulSet Guarantees**:
1. Pods have ordinal index (0, 1, 2...)
2. Pod names are deterministic: <statefulset-name>-<ordinal>
3. Each pod gets dedicated PVC that persists across restarts
4. Pods maintain identity even when rescheduled to different nodes

**vs Deployment**: Deployments create pods with random names and treat all replicas as interchangeable.

**Example Use Cases**: MySQL clusters, Kafka brokers, ZooKeeper ensembles, Cassandra nodes.
  `},{id:347,question:"What is the main purpose of a DaemonSet in Kubernetes?",options:["To run a copy of a pod on every node (or selected nodes) in the cluster","To run pods that should never be terminated","To run pods with administrative privileges","To run background jobs on a schedule"],correctAnswer:"To run a copy of a pod on every node (or selected nodes) in the cluster",explanation:`
### Concept: Kubernetes Workload Controllers - DaemonSet
**DaemonSet** ensures that all (or specific) nodes run a copy of a pod, automatically adding/removing pods as nodes are added/removed.
- **Node-Level Services**: Perfect for node-level functionality needed on every node.
- **Automatic Scaling**: As cluster grows/shrinks, DaemonSet pods are added/removed automatically.
- **Node Selection**: Can use nodeSelector or affinity to run on specific node subsets.
- **No Replica Count**: Unlike Deployments, you don't specify replicas - it's one per node.

**Common Use Cases**:
- **Log Collection**: Fluentd, Filebeat running on each node
- **Monitoring Agents**: Node exporters, monitoring daemons
- **Network Plugins**: CNI network plugins, kube-proxy
- **Storage Daemons**: Ceph, GlusterFS daemons
- **Security Agents**: Intrusion detection, vulnerability scanners

**DaemonSet Behavior**:
- New node joins cluster → DaemonSet pod automatically scheduled
- Node removed → DaemonSet pod automatically cleaned up
- Node matches selector → Pod created
- Node stops matching selector → Pod removed

**Update Strategy**: Rolling update or OnDelete for controlled rollouts.
  `},{id:348,question:"In container security, what does 'rootless containers' refer to?",options:["Containers that don't require root permissions to run the container runtime daemon","Containers without a root filesystem","Containers that cannot access the root directory","Containers without a base image"],correctAnswer:"Containers that don't require root permissions to run the container runtime daemon",explanation:`
### Concept: Container Security - Rootless Containers
**Rootless containers** allow running the container runtime daemon without root privileges, significantly reducing security risks.
- **Daemon Privilege**: The container runtime itself runs as a non-root user.
- **Security Improvement**: Container escapes don't grant root access to host.
- **User Namespaces**: Leverages Linux user namespaces for isolation.
- **Reduced Attack Surface**: Compromising container doesn't compromise entire system.
- **Multi-Tenancy**: Safer for shared systems where users run their own containers.

**Traditional vs Rootless**:
- **Traditional**: Docker daemon runs as root, containers can be rootless but daemon isn't
- **Rootless**: Both daemon and containers run without root

**Limitations**:
- Some features may not work (certain volume types, port binding <1024)
- Performance overhead from user namespace mapping
- Not all CNI plugins supported

**Supported Runtimes**: 
- Docker (rootless mode)
- Podman (rootless by default)
- containerd with rootless support

**Security Principle**: Principle of least privilege - run with minimum necessary permissions.
  `},{id:349,question:"Your company uses Helm to package Kubernetes applications. What is the purpose of the values.yaml file?",options:["It defines the Helm chart version and dependencies","It contains default configuration values that can be overridden during installation","It lists all Kubernetes resources to be created","It stores the release history"],correctAnswer:"It contains default configuration values that can be overridden during installation",explanation:`
### Concept: Helm - Kubernetes Package Management
**values.yaml** provides default configuration values for a Helm chart, enabling customization without modifying templates.
- **Default Values**: Provides sensible defaults for chart installation.
- **Parameterization**: Makes charts reusable across environments (dev/staging/prod).
- **Override Mechanism**: Values can be overridden with -f custom-values.yaml or --set flags.
- **Template Variables**: Values referenced in templates using {{ .Values.key }}.
- **Type Safety**: Can include schema validation via values.schema.json.

**Helm Chart Structure**:
\`\`\`
mychart/
  Chart.yaml          # Chart metadata
  values.yaml         # Default configuration values
  templates/          # Kubernetes manifest templates
  charts/             # Dependent charts
  README.md
\`\`\`

**Usage Examples**:
\`\`\`bash
# Use defaults
helm install myapp ./mychart

# Override with file
helm install myapp ./mychart -f prod-values.yaml

# Override specific values
helm install myapp ./mychart --set replicas=5
\`\`\`

**values.yaml Example**:
\`\`\`yaml
replicaCount: 3
image:
repository: nginx
tag: "1.21"
service:
type: LoadBalancer
port: 80
\`\`\`

**Best Practice**: Keep values.yaml minimal with well-documented defaults.
  `},{id:350,question:"Which statement about Kubernetes etcd is CORRECT?",options:["etcd runs on worker nodes to store pod data","etcd is a distributed key-value store that serves as Kubernetes' backing store for all cluster data","etcd is only used for storing container logs","Each pod has its own etcd instance"],correctAnswer:"etcd is a distributed key-value store that serves as Kubernetes' backing store for all cluster data",explanation:`
### Concept: Kubernetes Data Store - etcd
**etcd** is a consistent, distributed key-value store that provides a reliable way to store Kubernetes cluster state and configuration.
- **Single Source of Truth**: All cluster state (pods, services, configs, secrets) stored in etcd.
- **Distributed Consensus**: Uses Raft algorithm for consistency across multiple instances.
- **Watch Mechanism**: Kubernetes components watch etcd for changes to react to state updates.
- **Control Plane Only**: Runs on control plane nodes, not worker nodes.
- **High Availability**: Typically run in clusters of 3 or 5 instances for fault tolerance.

**What's Stored in etcd**:
- All Kubernetes objects (Pods, Services, ConfigMaps, Secrets, etc.)
- Cluster configuration
- State information
- Resource version data

**Critical Importance**:
- **No etcd = No cluster**: If etcd is down, cluster state cannot be modified
- **Backup Critical**: etcd backups are essential for disaster recovery
- **Performance Impact**: etcd performance directly affects cluster responsiveness

**Security Considerations**:
- Encrypt etcd data at rest
- Use TLS for etcd communication
- Restrict network access to etcd
- Regular backups with encryption

**Note**: Only API server communicates directly with etcd, not individual components.
  `},{id:351,question:"A developer wants to ensure their pod continues running even if a health check temporarily fails. Which type of probe should they configure?",options:["livenessProbe only","readinessProbe only","startupProbe only","Both readinessProbe and appropriate failureThreshold settings"],correctAnswer:"Both readinessProbe and appropriate failureThreshold settings",explanation:`
### Concept: Kubernetes Health Checks and Probes
Understanding the different probe types and their configurations is crucial for application reliability.

**Probe Types**:
- **livenessProbe**: Determines if container should be restarted (kills and restarts on failure)
- **readinessProbe**: Determines if pod should receive traffic (removes from service endpoints on failure)
- **startupProbe**: Gives slow-starting containers time to start before other probes begin

**For Temporary Failures**:
- **readinessProbe is safer**: Removes pod from load balancer but doesn't restart it
- **failureThreshold**: Number of consecutive failures before action (default: 3)
- **periodSeconds**: How often to probe (default: 10)
- **timeoutSeconds**: Probe timeout (default: 1)

**Configuration Example**:
\`\`\`yaml
readinessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 3    # Allows 3 failures before marking unready
  successThreshold: 1    # 1 success to mark ready again
\`\`\`

**Why readinessProbe is better for temporary issues**:
- Pod stays alive, just stops receiving traffic
- Can recover automatically without restart
- Maintains state and connections
- No pod churn or restart overhead

**Best Practice**: Use readinessProbe for temporary issues, livenessProbe only for deadlocks/unrecoverable states.
  `},{id:352,question:"Which Cloud Native Computing Foundation (CNCF) maturity level indicates a project has the highest level of adoption and stability?",options:["Sandbox","Incubating","Graduated","Archived"],correctAnswer:"Graduated",explanation:`
### Concept: CNCF Project Maturity Levels
The **CNCF uses three maturity levels** to classify projects based on their adoption, governance, and community health.

**CNCF Maturity Levels**:

1. **Sandbox**: 
   - Early-stage projects
   - Experimental and innovative
   - CNCF provides neutral home
   - Example: Early-stage projects exploring new ideas

2. **Incubating**:
   - Growing adoption
   - Healthy governance
   - Production use by multiple organizations
   - Example: Argo, Flux, Linkerd (at various points)

3. **Graduated**: 
   - Widespread production adoption
   - Strong governance and committer diversity
   - Documented security and stability
   - Examples: Kubernetes, Prometheus, Envoy, containerd, CoreDNS, Helm, Jaeger

**Graduation Criteria**:
- Multiple production deployments
- Healthy number of committers from multiple organizations
- Clear governance process
- Security audit completed
- Adopted by multiple end users
- Demonstrated growth in contributors and adoption
      `},{id:353,question:"What is the primary purpose of the Container Network Interface (CNI) in Kubernetes?",options:["To manage container storage","To provide a standardized interface for networking plugins","To schedule containers to nodes","To manage container images"],correctAnswer:"To provide a standardized interface for networking plugins",explanation:`
### Concept: Container Network Interface (CNI)
**CNI** is a cloud-native standard for configuring network interfaces in Linux containers.
- **Interoperability**: Allows different networking solutions (Flannel, Calico, Cilium, etc.) to work with multiple orchestrators.
- **Responsibility**: CNI plugins are responsible for inserting a network interface into the container network namespace and making any necessary changes on the host.
- **Standardized**: Kubernetes uses CNI to enable networking between pods across different nodes.
      `},{id:354,question:"Which Kubernetes component automatically adjusts the CPU and memory reservations (requests) for your pods based on historical resource usage?",options:["Horizontal Pod Autoscaler (HPA)","Vertical Pod Autoscaler (VPA)","Cluster Autoscaler","Node Problem Detector"],correctAnswer:"Vertical Pod Autoscaler (VPA)",explanation:`
### Concept: Vertical Pod Autoscaling
**Vertical Pod Autoscaler (VPA)** frees users from having to set exact resource requests and limits for their pods.
- **Resource Optimization**: It analyzes historical resource usage and automatically sets the appropriate CPU and memory requests.
- **Rightsizing**: Prevents both over-provisioning (wasted costs) and under-provisioning (performance issues).
- **Restarting**: Note that most VPA implementations currently require restarting the pod to apply changes (unlike HPA).
      `},{id:355,question:"In Kubernetes admission control, which type of webhook is allowed to modify the resource request before it is validated?",options:["Validating Admission Webhook","Mutating Admission Webhook","Resource Admission Webhook","Configuration Admission Webhook"],correctAnswer:"Mutating Admission Webhook",explanation:`
### Concept: Admission Controllers
**Admission Webhooks** come in two flavors: Mutating and Validating.
- **Mutating Webhooks**: These are called first. They can modify (mutate) the object sent to the API server (e.g., injecting a sidecar container or setting default labels).
- **Validating Webhooks**: These are called second. They can only accept or reject the request based on policy, but cannot modify it.
      `},{id:356,question:"What is the primary data collection model used by Prometheus for gathering metrics from targets?",options:["Push-based model","Pull-based model","Event-driven model","Stream-based model"],correctAnswer:"Pull-based model",explanation:`
### Concept: Prometheus Data Collection
**Prometheus** primarily uses a **pull-based model** for metrics collection.
- **Scraping**: The Prometheus server periodically "scrapes" (HTTP GET) metrics from configured targets.
- **Discovery**: It uses service discovery to find which targets to scrape.
- **Push Gateway**: While a "Pushgateway" exists for short-lived jobs, the core philosophy is pull-based, which allows the server to control the scrape rate and detect if a target is down.
      `},{id:357,question:"Which Kubernetes object is used to limit the total resource consumption (like total CPU or number of Pods) within a specific Namespace?",options:["LimitRange","ResourceQuota","HorizontalPodAutoscaler","PodDisruptionBudget"],correctAnswer:"ResourceQuota",explanation:`
### Concept: Resource Quotas
A **ResourceQuota** provides constraints that limit aggregate resource consumption per Namespace.
- **Multi-tenancy**: Essential for clusters shared by multiple teams or projects.
- **Resource Types**: Can limit CPU, Memory, number of Pods, Services, PersistentVolumeClaims, etc.
- **Enforcement**: If a request exceeds the quota, the API server rejects the request.
      `},{id:358,question:"Which Kubernetes resource allows you to set default CPU and memory requests/limits for all containers in a namespace if they are not explicitly specified?",options:["ResourceQuota","LimitRange","ConfigMap","PodSecurityContext"],correctAnswer:"LimitRange",explanation:`
### Concept: Limit Ranges
A **LimitRange** is used to enumerate min/max resource constraints and default values for resources (like Pods and Containers) in a Namespace.
- **Defaulting**: If a user creates a pod without specifying resources, LimitRange can automatically apply default values.
- **Constraints**: It can also enforce that a container's request/limit must be within a certain range.
- **Quota vs LimitRange**: ResourceQuota limits *aggregate* usage, while LimitRange controls *individual* resource specifications.
      `},{id:359,question:"What does the Container Storage Interface (CSI) provide to the Kubernetes ecosystem?",options:["A way to run containers without Docker","A standardized interface for storage vendors to integrate with container orchestrators","A distributed filesystem for pods","A tool for backing up etcd"],correctAnswer:"A standardized interface for storage vendors to integrate with container orchestrators",explanation:`
### Concept: Container Storage Interface (CSI)
**CSI** is a standard for exposing arbitrary block and file storage systems to containerized workloads.
- **Decoupling**: It allows storage vendors to develop their plugins "out-of-tree" (independently of the Kubernetes core code).
- **Standardization**: Plugins developed for CSI can work across different orchestrators (Kubernetes, Mesos, etc.).
- **Operations**: Handles volume lifecycle operations like provision, attach, and mount.
      `},{id:360,question:"In Kubernetes scheduling, what occurs when a high-priority pod cannot be scheduled, and the scheduler evicts lower-priority pods to make room?",options:["Scaling","Preemption","Rebalancing","Draining"],correctAnswer:"Preemption",explanation:`
### Concept: Pod Priority and Preemption
**Pod Priority** indicates the importance of a Pod relative to other Pods.
- **Scheduling Order**: Higher priority pods are scheduled before lower priority ones.
- **Preemption**: If a high-priority pod can't be scheduled due to lack of resources, the scheduler can kill (preempt) lower-priority pods to free up space.
- **PriorityClass**: You define priority levels using PriorityClass objects.
      `},{id:361,question:"Which CNCF project extends Horizontal Pod Autoscaler (HPA) to scale applications based on external event sources like Kafka, RabbitMQ, or Prometheus metrics?",options:["KNative","KEDA","Dapr","Crossplane"],correctAnswer:"KEDA",explanation:`
### Concept: KEDA (Kubernetes Event-Driven Autoscaling)
**KEDA** is a CNCF graduated project that provides event-driven autoscaling for Kubernetes.
- **Event-Driven**: It can scale containers to zero or out to thousands based on the number of events waiting in a queue (e.g., Azure Service Bus, Kafka, RabbitMQ).
- **HPA Integration**: It works by acting as an external metrics provider for the standard Horizontal Pod Autoscaler.
- **Scalers**: It includes dozens of built-in "scalers" for different event sources.
      `},{id:362,question:"Which CNCF graduated project is commonly used as a unified logging layer to collect, process, and forward logs in cloud-native environments?",options:["Prometheus","Jaeger","Fluentd","Envoy"],correctAnswer:"Fluentd",explanation:`
### Concept: Fluentd
**Fluentd** is an open-source data collector for unified logging.
- **Unified Layer**: It decouples data sources from backend storage.
- **JSON-based**: It treats logs as JSON, allowing for structured logging.
- **Plugins**: Has over 1,000 plugins to connect various inputs (logs, metrics) to various outputs (Elasticsearch, S3, Kafka).
- **Cloud Native**: Often deployed as a DaemonSet in Kubernetes to collect logs from every node.
      `},{id:27,question:"What is an Ingress in Kubernetes?",options:["A way to manage inbound traffic and provide routing rules to services","A security policy that controls which pods can communicate","A storage volume type for external data","A component that monitors cluster health"],correctAnswer:"A way to manage inbound traffic and provide routing rules to services",explanation:`
### Concept: Ingress and Load Balancing

**Ingress** is a Kubernetes resource that manages external access to services, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting.

**What Ingress provides:**
- **Path-based routing**: /api → API Service, /web → Web Service
- **Host-based routing**: api.example.com → API Service, web.example.com → Web Service
- **SSL/TLS termination**: Handle HTTPS at the edge
- **Load balancing**: Distribute traffic across pods

**Ingress vs Service:**
- **Service (LoadBalancer)**: One external IP per service (expensive)
- **Ingress**: One entry point, routes to multiple services

**Requires Ingress Controller:**
- **NGINX Ingress Controller** (most popular)
- **Traefik**
- **HAProxy**
- **Cloud provider ingress** (GKE, EKS, AKS)

**Example use case:**
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
\`\`\`

**Why other options are incorrect:**
- Security/communication control is Network Policies
- Storage volumes are PV/PVC
- Cluster health monitoring is done by Prometheus/metrics-server
      `},{id:28,question:"What is the purpose of a Liveness Probe in Kubernetes?",options:["To check if a container is ready to accept traffic","To determine if a container is running and restart it if it's not responding","To monitor the overall health of the cluster","To check if a pod has sufficient resources"],correctAnswer:"To determine if a container is running and restart it if it's not responding",explanation:`
### Concept: Health Checks and Probes

**Liveness Probe** checks if a container is still running properly. If the probe fails, Kubernetes kills and restarts the container.

**When to use Liveness Probe:**
- Application is running but stuck in deadlock
- Process exists but can't handle requests
- Application has become unresponsive

**Probe types:**
1. **HTTP GET**: Send HTTP request, expect 200-399 status
2. **TCP Socket**: Try to open TCP connection
3. **Exec**: Run command inside container, expect exit code 0

**Example:**
\`\`\`yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
  failureThreshold: 3
\`\`\`

**Liveness vs Readiness vs Startup:**
- **Liveness**: "Is the app alive?" → Restart if fails
- **Readiness**: "Is the app ready for traffic?" → Remove from service if fails
- **Startup**: "Has the app started?" → For slow-starting containers

**Real-world scenario:**
A web app has a memory leak. After 2 hours, it stops responding. Liveness probe fails, Kubernetes restarts the container, app works again.

**Best practices:**
- Set appropriate initialDelaySeconds for startup
- Don't check external dependencies in liveness (only the app itself)
- Keep probe lightweight

**Why other options are incorrect:**
- Ready to accept traffic → That's Readiness Probe
- Cluster health → That's monitoring tools
- Resource checking → That's resource limits/metrics
      `},{id:29,question:"What is the difference between Liveness and Readiness probes?",options:["They are the same thing with different names","Liveness restarts failed containers; Readiness removes pods from service endpoints","Liveness checks CPU, Readiness checks memory","Liveness is for containers, Readiness is for pods"],correctAnswer:"Liveness restarts failed containers; Readiness removes pods from service endpoints",explanation:`
### Concept: Probe Types and Actions

**Liveness Probe** and **Readiness Probe** serve different purposes and trigger different actions when they fail.

**Liveness Probe:**
- **Purpose**: Detect if container is alive/healthy
- **Action on failure**: **Restart the container**
- **Use case**: Deadlocks, hung processes, corrupted state
- **Question it answers**: "Should this container be restarted?"

**Readiness Probe:**
- **Purpose**: Detect if container is ready to serve traffic
- **Action on failure**: **Remove from Service endpoints** (no restart)
- **Use case**: Warming up, loading data, waiting for dependencies
- **Question it answers**: "Should this pod receive traffic?"

**Key difference in action:**
\`\`\`
Liveness fails → kubelet RESTARTS container
Readiness fails → kube-proxy STOPS sending traffic (pod stays running)
\`\`\`

**Example scenario:**
\`\`\`yaml
readinessProbe:
  httpGet:
    path: /ready  # Returns 200 when cache is loaded
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5

livenessProbe:
  httpGet:
    path: /healthz  # Returns 200 if app is functioning
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
\`\`\`

**Real-world example:**
App needs 30 seconds to load cache:
- **Readiness**: Fails for 30s (no traffic sent), then passes (traffic flows)
- **Liveness**: Always passes (app is healthy, just initializing)

**Why other options are incorrect:**
- They have different purposes and actions
- Both can check any endpoint (not CPU/memory specific)
- Both check containers (pods contain containers)
      `},{id:30,question:"What is a StatefulSet used for in Kubernetes?",options:["To manage stateless applications with replicas","To manage stateful applications that require stable network identities and persistent storage","To store application state in memory","To create static IP addresses for pods"],correctAnswer:"To manage stateful applications that require stable network identities and persistent storage",explanation:`
### Concept: Stateful Applications

**StatefulSet** is a workload resource for managing stateful applications that require stable, unique network identities and persistent storage.

**Key characteristics:**
1. **Stable network identity**: Predictable pod names (app-0, app-1, app-2)
2. **Stable storage**: Each pod gets its own PersistentVolume
3. **Ordered deployment**: Pods created sequentially (0 → 1 → 2)
4. **Ordered termination**: Pods deleted in reverse (2 → 1 → 0)
5. **Ordered updates**: Rolling updates in order

**When to use StatefulSet:**
- **Databases**: MySQL, PostgreSQL, MongoDB
- **Distributed systems**: Kafka, ZooKeeper, etcd
- **Applications needing**: Stable hostnames, ordered startup/shutdown

**StatefulSet vs Deployment:**
\`\`\`
Deployment:
- Random pod names: web-7d8f9-abc12
- Any pod is interchangeable
- Stateless apps (web servers, APIs)

StatefulSet:
- Predictable names: mysql-0, mysql-1, mysql-2
- Each pod has unique identity
- Stateful apps (databases, queues)
\`\`\`

**Example:**
\`\`\`yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    # Pod template
  volumeClaimTemplates:
    # Each pod gets its own PVC
\`\`\`

**Pod naming:**
- mysql-0 (always first to start, last to stop)
- mysql-1 (starts after mysql-0)
- mysql-2 (starts after mysql-1)

**Why other options are incorrect:**
- Stateless apps use Deployments, not StatefulSets
- Doesn't store state in memory (uses persistent volumes)
- Provides stable DNS names, not static IPs
      `},{id:31,question:"What is a Service Mesh?",options:["A network of physical servers hosting services","Infrastructure layer that handles service-to-service communication with features like traffic management and security","A type of Kubernetes Service","A mesh network topology for containers"],correctAnswer:"Infrastructure layer that handles service-to-service communication with features like traffic management and security",explanation:`
### Concept: Service Mesh Architecture

**Service Mesh** is a dedicated infrastructure layer for managing service-to-service communication in microservices architectures. It provides observability, security, and traffic management without changing application code.

**Key features:**
- **Traffic management**: Load balancing, routing, retries, timeouts
- **Security**: mTLS encryption, authentication, authorization
- **Observability**: Distributed tracing, metrics, logging
- **Resilience**: Circuit breaking, fault injection, retries

**How it works:**
\`\`\`
Service A → Sidecar Proxy → Network → Sidecar Proxy → Service B
                ↓                              ↓
          Control Plane ← Telemetry/Policies → Control Plane
\`\`\`

**Architecture components:**
1. **Data Plane**: Sidecar proxies (Envoy) next to each service
2. **Control Plane**: Configuration and policy management

**Popular service meshes:**
- **Istio**: Feature-rich, complex (uses Envoy)
- **Linkerd**: Lightweight, simpler (CNCF graduated)
- **Consul Connect**: From HashiCorp
- **AWS App Mesh**: AWS managed service mesh

**What service mesh provides:**
- **mTLS**: Automatic encryption between services
- **Traffic splitting**: 90% to v1, 10% to v2 (canary deployments)
- **Circuit breaking**: Stop calling failing services
- **Observability**: Built-in metrics and tracing

**When to use:**
- Many microservices (10+ services)
- Need for advanced traffic control
- Security requirements (encryption, auth)
- Complex deployment strategies

**Trade-offs:**
- Adds complexity and latency
- Resource overhead (sidecar proxies)
- Learning curve

**Why other options are incorrect:**
- Not about physical infrastructure
- Different from Kubernetes Service objects
- Not a network topology, but a communication layer
      `},{id:32,question:"What is the primary purpose of Helm in Kubernetes?",options:["To monitor Kubernetes clusters","To package, share, and manage Kubernetes applications using charts","To provide security scanning for containers","To manage Kubernetes node resources"],correctAnswer:"To package, share, and manage Kubernetes applications using charts",explanation:`
### Concept: Package Management

**Helm** is a package manager for Kubernetes that helps you define, install, and upgrade complex Kubernetes applications using reusable packages called Charts.

**Key concepts:**
- **Chart**: Package of pre-configured Kubernetes resources
- **Release**: Instance of a chart running in cluster
- **Repository**: Collection of charts (like npm registry)
- **Values**: Configuration parameters for charts

**What Helm solves:**
\`\`\`
Without Helm:
- 15 separate YAML files
- Manual configuration for each environment
- Difficult to version and share
- Hard to update/rollback

With Helm:
- One chart
- Values files for different environments
- Easy versioning
- Simple install/upgrade/rollback
\`\`\`

**Common Helm commands:**
\`\`\`bash
helm install myapp ./mychart          # Install chart
helm upgrade myapp ./mychart          # Upgrade release
helm rollback myapp 1                 # Rollback to version 1
helm uninstall myapp                  # Remove release
helm list                             # List releases
\`\`\`

**Chart structure:**
\`\`\`
mychart/
  Chart.yaml           # Chart metadata
  values.yaml          # Default configuration
  templates/           # Kubernetes manifests
    deployment.yaml
    service.yaml
    ingress.yaml
\`\`\`

**Benefits:**
- **Reusability**: Share charts via repositories
- **Templating**: Parameterize configurations
- **Version control**: Track application versions
- **Dependency management**: Charts can depend on other charts
- **Easy rollbacks**: Go back to previous versions

**Popular chart repositories:**
- **Artifact Hub**: Public charts (prometheus, nginx, mysql)
- **Bitnami**: Well-maintained application charts
- **Private repos**: For internal applications

**Why other options are incorrect:**
- Monitoring: That's Prometheus/Grafana
- Security scanning: That's Trivy/Snyk
- Node management: That's Kubernetes itself
      `},{id:33,question:"What is the Container Network Interface (CNI)?",options:["A user interface for managing containers","A specification for configuring network interfaces in Linux containers","A network monitoring tool for containers","A container registry interface"],correctAnswer:"A specification for configuring network interfaces in Linux containers",explanation:`
### Concept: Container Networking

**CNI (Container Network Interface)** is a specification and set of libraries for configuring network interfaces in Linux containers. It provides a plugin-based architecture for container networking.

**What CNI does:**
- Creates network interfaces for containers
- Assigns IP addresses to pods
- Sets up routing rules
- Enables pod-to-pod communication
- Provides network isolation

**How CNI works:**
\`\`\`
1. kubelet calls CNI plugin
2. CNI plugin creates network interface
3. Assigns IP from configured range
4. Sets up routes and firewall rules
5. Returns network configuration to kubelet
\`\`\`

**Popular CNI plugins:**
- **Calico**: Network policies, BGP routing (popular choice)
- **Flannel**: Simple overlay network (easy to set up)
- **Weave Net**: Mesh network with encryption
- **Cilium**: eBPF-based, advanced features
- **AWS VPC CNI**: Native AWS networking for EKS
- **Azure CNI**: Native Azure networking for AKS

**CNI responsibilities:**
- **IP Address Management (IPAM)**: Assign IPs to pods
- **Network connectivity**: Enable pod communication
- **Network policies**: Security rules (some plugins)

**Example network requirements:**
\`\`\`
Kubernetes networking model requires:
1. All pods can communicate without NAT
2. All nodes can communicate with all pods
3. Pod sees same IP as others see it

CNI plugins implement these requirements
\`\`\`

**Choosing a CNI:**
- **Calico**: Network policies, performance
- **Flannel**: Simplicity, getting started
- **Cilium**: Advanced features, observability
- **Cloud CNI**: Best integration with cloud provider

**Why other options are incorrect:**
- Not a user interface (it's a specification)
- Not a monitoring tool (it's for networking setup)
- Not related to container registries
      `},{id:34,question:"What is autoscaling in Kubernetes, and what types are available?",options:["Only manual scaling by changing replica counts","Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), and Cluster Autoscaler","Only CPU-based scaling","Automatic container image updates"],correctAnswer:"Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), and Cluster Autoscaler",explanation:`
### Concept: Dynamic Resource Scaling

**Autoscaling** in Kubernetes automatically adjusts resources based on demand. There are three main types, each serving different purposes.

**1. Horizontal Pod Autoscaler (HPA):**
- **Scales**: Number of pod replicas (scale out/in)
- **Based on**: CPU, memory, custom metrics
- **Use case**: Handle variable traffic load
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

**2. Vertical Pod Autoscaler (VPA):**
- **Scales**: CPU and memory requests/limits (scale up/down)
- **Based on**: Historical usage patterns
- **Use case**: Right-size pod resources
- **Note**: Requires pod restart to apply changes

**3. Cluster Autoscaler:**
- **Scales**: Number of nodes in the cluster
- **Based on**: Pending pods that can't be scheduled
- **Use case**: Add nodes when needed, remove when idle
- **Cloud integration**: Works with AWS, GCP, Azure

**How they work together:**
\`\`\`
1. Traffic increases
2. HPA adds more pods
3. Pods can't be scheduled (no node capacity)
4. Cluster Autoscaler adds nodes
5. Pods scheduled on new nodes

6. Traffic decreases
7. HPA removes pods
8. Nodes become underutilized
9. Cluster Autoscaler removes nodes
\`\`\`

**Metrics sources:**
- **Resource metrics**: CPU, memory (metrics-server)
- **Custom metrics**: Application metrics via Prometheus
- **External metrics**: Cloud provider metrics

**Best practices:**
- Set appropriate min/max replicas
- Configure resource requests (required for HPA)
- Use VPA for workloads with variable resource needs
- Monitor autoscaling behavior

**Why other options are incorrect:**
- Manual scaling exists but isn't autoscaling
- Can scale based on many metrics, not just CPU
- Not related to image updates (that's different)
      `},{id:35,question:"What is the purpose of Resource Quotas in Kubernetes?",options:["To limit the number of users in a cluster","To limit aggregate resource consumption per namespace","To set CPU and memory limits for individual containers","To control the number of Kubernetes API requests"],correctAnswer:"To limit aggregate resource consumption per namespace",explanation:`
### Concept: Resource Management and Governance

**Resource Quotas** provide constraints that limit the aggregate resource consumption per namespace, enabling fair resource sharing in multi-tenant clusters.

**What Resource Quotas limit:**
- **Compute resources**: CPU, memory (total across all pods)
- **Storage resources**: PersistentVolumeClaims, storage capacity
- **Object counts**: Pods, Services, ConfigMaps, Secrets, etc.

**Example ResourceQuota:**
\`\`\`yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: development
spec:
  hard:
    requests.cpu: "10"           # Max 10 CPU cores requested
    requests.memory: 20Gi         # Max 20GB memory requested
    limits.cpu: "20"              # Max 20 CPU cores limit
    limits.memory: 40Gi           # Max 40GB memory limit
    persistentvolumeclaims: "5"   # Max 5 PVCs
    pods: "20"                    # Max 20 pods
    services: "10"                # Max 10 services
\`\`\`

**How it works:**
\`\`\`
1. Admin creates ResourceQuota in namespace
2. User tries to create pod
3. Kubernetes checks if quota allows it
4. If within quota → pod created
5. If exceeds quota → request rejected
\`\`\`

**Use cases:**
- **Multi-tenancy**: Prevent one team from using all cluster resources
- **Cost control**: Limit spending in cloud environments
- **Capacity planning**: Ensure fair distribution
- **Environment separation**: Dev gets less than prod

**ResourceQuota vs LimitRange:**
- **ResourceQuota**: Limits **total** resources in namespace
- **LimitRange**: Sets **default/min/max** for individual pods/containers

**Best practices:**
\`\`\`yaml
# Combine with LimitRange for complete control
ResourceQuota: "Namespace can use max 20 cores total"
LimitRange: "Each pod can use 0.5-2 cores"
\`\`\`

**Monitoring quotas:**
\`\`\`bash
kubectl describe resourcequota -n development
# Shows used vs hard limits
\`\`\`

**Why other options are incorrect:**
- User limits are handled by RBAC, not quotas
- Individual container limits are set in pod specs (resources.limits)
- API rate limiting is separate (API priority and fairness)
      `},{id:36,question:"What is a Custom Resource Definition (CRD) in Kubernetes?",options:["A custom Docker image for specific use cases","A way to extend Kubernetes API with custom resource types","A custom configuration for existing Kubernetes resources","A security definition for custom roles"],correctAnswer:"A way to extend Kubernetes API with custom resource types",explanation:`
### Concept: Kubernetes Extensibility

**Custom Resource Definition (CRD)** allows you to extend the Kubernetes API by defining your own custom resource types, treating them as first-class Kubernetes objects.

**What CRDs enable:**
- Define new resource types beyond built-in ones
- Use kubectl to manage custom resources
- Store custom objects in etcd
- Watch and react to custom resources
- Integrate with Kubernetes ecosystem

**How CRDs work:**
\`\`\`yaml
# 1. Define the CRD
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.example.com
spec:
  group: example.com
  versions:
    - name: v1
      served: true
      storage: true
  scope: Namespaced
  names:
    plural: databases
    singular: database
    kind: Database

# 2. Create instances of your custom resource
apiVersion: example.com/v1
kind: Database
metadata:
  name: my-postgres
spec:
  type: postgresql
  version: "14"
  storage: 100Gi
\`\`\`

**Real-world examples:**
- **Prometheus Operator**: ServiceMonitor, PrometheusRule CRDs
- **Cert-Manager**: Certificate, Issuer CRDs
- **Istio**: VirtualService, DestinationRule CRDs
- **ArgoCD**: Application, AppProject CRDs

**CRDs + Operators pattern:**
\`\`\`
CRD defines: "What a Database resource looks like"
Operator (controller) implements: "How to create/manage actual databases"

User creates Database CR → Operator watches → Creates actual DB pods/services
\`\`\`

**Benefits:**
- **Declarative management**: Use YAML like any Kubernetes resource
- **Kubectl integration**: \`kubectl get databases\`
- **RBAC**: Apply standard Kubernetes permissions
- **Ecosystem integration**: Works with GitOps, Helm, etc.

**Use cases:**
- Application-specific resources (databases, message queues)
- Infrastructure resources (load balancers, DNS records)
- Configuration abstractions
- Custom workflows

**CRD vs ConfigMap:**
- **ConfigMap**: Store configuration data
- **CRD**: Define new API resource types with validation and versioning

**Why other options are incorrect:**
- Not related to Docker images
- Not for configuring existing resources (that's annotations/labels)
- Not related to RBAC roles (though RBAC can control access to CRDs)
      `},{id:400,question:"What is the Open Container Initiative (OCI) primarily responsible for?",options:["Developing Kubernetes features","Defining industry standards for container formats and runtimes","Managing cloud provider infrastructure","Creating service mesh specifications"],correctAnswer:"Defining industry standards for container formats and runtimes",explanation:`
### Concept: Container Standards (OCI)
The **Open Container Initiative (OCI)** is an open governance structure for the express purpose of creating open industry standards around container formats and runtimes.

**Two Main Specifications:**
1.  **Image Spec**: Defines how a container image should be built.
2.  **Runtime Spec**: Defines how a container should be executed.

**Why it matters:** It ensures that an image built with one tool (like Docker) can run on any compliant runtime (like containerd or CRI-O).
      `},{id:401,question:"According to the CNCF, what is a key characteristic of cloud-native technologies?",options:["They only run on public clouds","They empower organizations to build and run scalable applications in dynamic environments","They require manual scaling and management","They are strictly monolithic in nature"],correctAnswer:"They empower organizations to build and run scalable applications in dynamic environments",explanation:`
### Concept: Cloud Native Definition
The **CNCF definition** states that cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds.

**Core Pillars:**
- **Containers**: Isolated environments.
- **Service Meshes**: Managing communication.
- **Microservices**: Independent components.
- **Immutable Infrastructure**: Predictable changes.
- **Declarative APIs**: Defining the "what" rather than the "how."
      `},{id:402,question:"Which Kubernetes component acts as the cluster's 'brain' by storing the entire cluster state?",options:["kube-apiserver","etcd","kube-scheduler","kube-controller-manager"],correctAnswer:"etcd",explanation:`
### Concept: Control Plane Architecture
**etcd** is a consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.

**Key Roles:**
- **Source of Truth**: If it's not in etcd, it's not in the cluster.
- **Consistency**: Uses the Raft consensus algorithm.
- **Watch Mechanism**: Allows other components to react to changes in state.
      `},{id:403,question:"Which component is responsible for selecting the best node for a newly created pod?",options:["kube-controller-manager","kube-scheduler","kube-proxy","kubelet"],correctAnswer:"kube-scheduler",explanation:`
### Concept: Scheduling
The **kube-scheduler** is a control plane process which assigns Pods to Nodes.

**Selection Process:**
1.  **Filtering**: Finds nodes that meet pod requirements (CPU, RAM, Taints/Tolerations).
2.  **Scoring**: Ranks the filtered nodes to pick the best fit.
3.  **Binding**: Notifies the API server of the decision.
      `},{id:404,question:"Which component runs on every node and ensures that the containers described in PodSpecs are running and healthy?",options:["kube-proxy","containerd","kubelet","kube-apiserver"],correctAnswer:"kubelet",explanation:`
### Concept: Node Components
The **kubelet** is an agent that runs on each node in the cluster. It does not manage containers which were not created by Kubernetes.

**Main Tasks:**
- **Pod Lifecycle**: Starts, stops, and monitors containers.
- **Reporting**: Tells the control plane about node and pod status.
- **Health Checks**: Executes Liveness and Readiness probes.
      `},{id:405,question:"What is the primary role of kube-proxy in a Kubernetes cluster?",options:["To manage storage volumes","To maintain network rules on nodes and allow communication to pods","To schedule pods to nodes","To authenticate users"],correctAnswer:"To maintain network rules on nodes and allow communication to pods",explanation:`
### Concept: Kubernetes Networking
**kube-proxy** is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

**Functions:**
- **Load Balancing**: Distributes traffic to pods behind a Service.
- **Rule Management**: Uses iptables, IPVS, or nftables to handle routing.
- **Connection Handling**: Manages network connections from inside or outside the cluster.
      `},{id:406,question:"Which Kubernetes resource is used to run a background task on every single node of the cluster?",options:["Deployment","StatefulSet","DaemonSet","ReplicaSet"],correctAnswer:"DaemonSet",explanation:`
### Concept: Workload Controllers
A **DaemonSet** ensures that all (or some) Nodes run a copy of a Pod.

**Common Use Cases:**
- **Logging**: Running fluentd or logstash on every node.
- **Monitoring**: Running prometheus node-exporter on every node.
- **Networking**: Running a CNI plugin or kube-proxy on every node.
      `},{id:407,question:"What is the difference between a Job and a CronJob?",options:["Jobs are for web servers, CronJobs are for databases","Jobs run once to completion, while CronJobs run on a schedule","Jobs run on nodes, CronJobs run in the control plane","There is no difference"],correctAnswer:"Jobs run once to completion, while CronJobs run on a schedule",explanation:`
### Concept: Batch Workloads
- **Job**: Creates one or more Pods and ensures that a specified number of them successfully terminate (e.g., a data migration or backup).
- **CronJob**: Manages Jobs based on a time-based schedule (CRON format). Think of it as a wrapper around the Job object.
      `},{id:408,question:"Which tool is commonly used to automate the deployment of Kubernetes applications using a Git-based workflow?",options:["ArgoCD","Jenkins","Docker Desktop","Postman"],correctAnswer:"ArgoCD",explanation:`
### Concept: GitOps
**ArgoCD** is a declarative, GitOps continuous delivery tool for Kubernetes.

**How it works:**
1.  **Git as Source of Truth**: Application state is stored in Git.
2.  **Pull-based**: ArgoCD watches the Git repo and automatically syncs changes to the cluster.
3.  **Drift Detection**: It can detect and fix differences between Git and the live cluster state.
      `},{id:409,question:"What does the 'Serverless' model primarily focus on for developers?",options:["Managing the underline physical hardware","Writing code/functions without worrying about server provisioning or scaling","Running applications without any servers anywhere","Using only local storage"],correctAnswer:"Writing code/functions without worrying about server provisioning or scaling",explanation:`
### Concept: Serverless Computing
The **Serverless** model (also known as FaaS - Function as a Service) abstracts away the server management layer.

**Key Traits:**
- **No Provisioning**: Developers focus on code, not infrastructure.
- **Auto-scaling**: Scales automatically based on events (often to zero).
- **Pay-per-use**: Costs are based on actual execution time and resources used.
      `},{id:410,question:"In the context of Observability, what are 'Distributed Traces' used for?",options:["Measuring CPU usage","Tracking a single request as it moves through multiple microservices","Counting the number of errors in logs","Mapping physical hardware addresses"],correctAnswer:"Tracking a single request as it moves through multiple microservices",explanation:`
### Concept: Observability (Tracing)
**Distributed Tracing** allows you to see the path a request takes through a complex microservices architecture.

**Benefits:**
- **Pinpointing Latency**: Finding which service is slow.
- **Dependency Mapping**: Understanding how services interact.
- **Error Analysis**: Seeing where in the chain a request failed.
- **Project Examples**: Jaeger, Zipkin, Honeycomb.
      `},{id:411,question:"What is the primary function of a Service Mesh Control Plane?",options:["To forward network packets between containers","To manage and configure the sidecar proxies (Data Plane)","To store application data in a database","To schedule pods onto nodes"],correctAnswer:"To manage and configure the sidecar proxies (Data Plane)",explanation:`
### Concept: Service Mesh Architecture
A Service Mesh is split into two parts:
1.  **Data Plane**: Sidecar proxies (like Envoy) that handle actual traffic.
2.  **Control Plane**: The central brain that distributes policies, certificates, and configurations to those proxies.

**Examples**: Istio's 'istiod' or Linkerd's control plane components.
      `},{id:412,question:"Which security concept ensures that a pod only has the minimum permissions necessary to perform its job?",options:["Role-Based Access Control (RBAC)","Least Privilege","Network Segmentation","Encryption at rest"],correctAnswer:"Least Privilege",explanation:`
### Concept: Security Best Practices
The **Principle of Least Privilege** is the practice of limiting access rights for users, accounts, and computing processes to only those resources which are absolutely necessary.

**In Kubernetes:**
- Use **RBAC** to restrict API access.
- Use **Network Policies** to restrict network traffic.
- Use **SecurityContext** to run containers as non-root.
      `},{id:413,question:"What is a 'StorageClass' in Kubernetes primarily used for?",options:["Defining the type of storage to be dynamically provisioned","Manually mounting a local disk to a pod","Backing up etcd data","Managing cluster secrets"],correctAnswer:"Defining the type of storage to be dynamically provisioned",explanation:`
### Concept: Dynamic Storage Provisioning
A **StorageClass** provides a way for administrators to describe the "classes" of storage they offer.

**How it works:**
1.  **Admin** creates a StorageClass (e.g., "fast-ssd").
2.  **Developer** creates a PersistentVolumeClaim (PVC) referencing that class.
3.  **Kubernetes** automatically creates the actual disk (PV) based on the class definition.
      `},{id:414,question:"Which tool is a vendor-neutral, open-standard framework for collecting observability telemetry (logs, metrics, and traces)?",options:["Prometheus","OpenTelemetry","Grafana","Fluentd"],correctAnswer:"OpenTelemetry",explanation:`
### Concept: Observability Standardization
**OpenTelemetry (OTel)** is a CNCF project that provides a standardized set of APIs, SDKs, and tools to ingest, transform, and send telemetry data to an observability backend.

**Why it's important:** It prevents vendor lock-in, as you can switch backends (like switching from Jaeger to Datadog) without changing your application code.
      `},{id:415,question:"What is the purpose of the 'helm install' command?",options:["To create a new Kubernetes cluster","To deploy a Helm Chart into the cluster as a 'Release'","To update a container image","To delete a namespace"],correctAnswer:"To deploy a Helm Chart into the cluster as a 'Release'",explanation:`
### Concept: Helm (Package Management)
**Helm** uses a packaging format called charts.
- **Chart**: A bundle of information necessary to create an instance of a Kubernetes application.
- **Release**: A running instance of a chart in a cluster.

The \`helm install\` command takes a chart and creates a new release.
      `},{id:416,question:"In Kubernetes, what is a 'Static Pod'?",options:["A pod that never changes its IP address","A pod managed directly by the kubelet on a specific node, bypassing the API server","A pod that doesn't run any containers","A pod used for permanent storage"],correctAnswer:"A pod managed directly by the kubelet on a specific node, bypassing the API server",explanation:`
### Concept: Specialized Pods
**Static Pods** are managed directly by the kubelet daemon on a specific node, without the API server observing them.

**Characteristics:**
- **No Controller**: Not managed by Deployments or DaemonSets.
- **File-based**: Kubelet watches a directory on the host (e.g., \`/etc/kubernetes/manifests\`).
- **Use Case**: Often used to run control plane components (API server, Scheduler) on the master nodes before the cluster is fully up.
      `},{id:417,question:"Which of the following is an example of an L7 (Application Layer) Service Mesh feature?",options:["Port-based routing","IP address filtering","HTTP Header-based traffic splitting","TCP connection limiting"],correctAnswer:"HTTP Header-based traffic splitting",explanation:`
### Concept: Service Mesh Capabilities
Service Meshes operate at the **Application Layer (L7)**, allowing them to understand protocol-specific data (HTTP, gRPC).

**L7 Features:**
- **Canary Deployments**: Route 10% of users with header \`version: beta\` to a new service.
- **Retries/Timeouts**: Automatically retry failed HTTP calls.
- **Traces**: Inject headers for distributed tracing.
- **mTLS**: Encrypt communication based on service identity.
      `},{id:418,question:"What is the role of an 'Ingress Controller'?",options:["To define routing rules only","To act as a load balancer and implement the rules defined in Ingress resources","To manage pod-to-pod communication","To schedule containers"],correctAnswer:"To act as a load balancer and implement the rules defined in Ingress resources",explanation:`
### Concept: External Access
The **Ingress resource** is just a configuration object (a piece of metadata). To make it work, you need an **Ingress Controller**.

**How it works:**
1.  The controller watches the API server for Ingress objects.
2.  It reconfigures a load balancer (like NGINX, HAProxy, or a Cloud LB) to match those rules.
3.  Traffic hits the LB and gets routed to the correct Services.
      `},{id:419,question:"Which CNCF project is a graduated tool for cloud-native storage, providing a unified interface for multiple storage backends?",options:["Rook","Longhorn","Etcd","Velero"],correctAnswer:"Rook",explanation:`
### Concept: Cloud Native Storage
**Rook** is an open-source cloud-native storage orchestrator for Kubernetes.

**What it does:**
- Turns storage software (like **Ceph**) into self-managing, self-scaling, self-healing storage services.
- Automates the tasks of a storage administrator: deployment, bootstrapping, configuration, provisioning, scaling, and monitoring.
      `},{id:420,question:"What does 'Immutable Infrastructure' mean in a cloud-native context?",options:["Updating servers by logging in and changing config files","Infrastructure that cannot be changed once deployed; updates involve replacing the entire component","Infrastructure that never needs updates","Hardware that is water-proof and fire-proof"],correctAnswer:"Infrastructure that cannot be changed once deployed; updates involve replacing the entire component",explanation:`
### Concept: Infrastructure Patterns
**Immutable Infrastructure** is the practice of replacing components rather than modifying them in place.

**Benefits:**
- **Consistency**: No configuration drift (all instances are identical).
- **Predictability**: You know exactly what is running.
- **Rollbacks**: Reverting to a previous version is as simple as re-deploying the old image.
- **Tools**: Containers and Terraform are core to this pattern.
      `},{id:421,question:"What is the purpose of 'Pod Disruption Budgets' (PDBs)?",options:["To limit the amount of money spent on pods","To ensure a minimum number of pods remain available during voluntary disruptions (like node maintenance)","To stop pods from consuming too much CPU","To automate the deletion of old pods"],correctAnswer:"To ensure a minimum number of pods remain available during voluntary disruptions (like node maintenance)",explanation:`
### Concept: High Availability
A **Pod Disruption Budget (PDB)** limits the number of Pods of a replicated application that are down simultaneously from voluntary disruptions.

**Voluntary Disruptions:**
- Draining a node for maintenance.
- Cluster autoscaling.
- Deleting a deployment.

**Involuntary Disruptions** (PDBs cannot prevent these):
- Hardware failure.
- Kernel panic.
- Network split.
      `},{id:422,question:"In Kubernetes, what is the role of a 'Custom Controller'?",options:["To provide a custom UI for the cluster","To watch Custom Resources (CRDs) and implement the logic to move the current state to the desired state","To manage user authentication","To replace the default scheduler"],correctAnswer:"To watch Custom Resources (CRDs) and implement the logic to move the current state to the desired state",explanation:`
### Concept: The Operator Pattern
The **Operator Pattern** combines Custom Resources (CRDs) and Custom Controllers.

**The Loop:**
1.  **Observe**: Check the state of the Custom Resource.
2.  **Analyze**: Determine the difference between desired state (YAML) and actual state.
3.  **Act**: Perform actions (create pods, configure DBs, etc.) to match the desired state.
      `},{id:423,question:"Which of the following describes 'Loose Coupling' as a microservices best practice?",options:["Services should share the same database for performance","Services should be independent and communicate through well-defined APIs","Services should be written in the same programming language","Services should all run on a single large server"],correctAnswer:"Services should be independent and communicate through well-defined APIs",explanation:`
### Concept: Microservices Design
**Loose Coupling** is a design goal where each service is independent of others.

**Key results:**
- **Independent Scaling**: Scale only the checkout service, not the whole site.
- **Fault Tolerance**: If the search service fails, the checkout can still work.
- **Agility**: Teams can use different languages or frameworks (Polyglot).
- **Technology Choice**: One service can use MongoDB while another uses MySQL.
      `},{id:424,question:"What is 'Polyglot Persistence'?",options:["Using multiple languages for documentation","Using different database technologies based on the specific needs of each microservice","Storing data in multiple geographical regions","Backing up data to multiple types of media"],correctAnswer:"Using different database technologies based on the specific needs of each microservice",explanation:`
### Concept: Modern Data Architecture
**Polyglot Persistence** is the idea that different data storage technologies are best suited for different data tasks.

**Examples in one application:**
- **Product Catalog**: Document store (MongoDB).
- **Inventory/Transactions**: Relational database (PostgreSQL).
- **Search**: Search engine (Elasticsearch).
- **Session Cache**: Key-value store (Redis).
      `},{id:425,question:"What is the function of the CNCF 'Sandbox' stage?",options:["For projects that are ready for mass production","For early-stage projects that need a neutral home and are being experimented with","For projects that are being retired","For projects that are fully proprietary"],correctAnswer:"For early-stage projects that need a neutral home and are being experimented with",explanation:`
### Concept: CNCF Project Stages
1.  **Sandbox**: Early-stage, experimental, minimal requirements.
2.  **Incubating**: Used in production by several companies, healthy contributor base.
3.  **Graduated**: Widely adopted, clear governance, security audit complete (e.g., Kubernetes, Prometheus, Envoy).
      `},{id:426,question:"Which tool is commonly used for distributed tracing in cloud-native environments?",options:["Prometheus","Jaeger","Logstash","Kibana"],correctAnswer:"Jaeger",explanation:`
### Concept: Tracing Tools
**Jaeger** is an open-source, end-to-end distributed tracing tool.

**Features:**
- Distributed context propagation.
- Distributed transaction monitoring.
- Root cause analysis.
- Service dependency analysis.
      `},{id:427,question:"What is the primary benefit of 'Declarative Configuration' in Kubernetes?",options:["It's faster to type than imperative commands","You define the desired state, and Kubernetes works to maintain it automatically","It doesn't require any YAML files","It makes pods run faster"],correctAnswer:"You define the desired state, and Kubernetes works to maintain it automatically",explanation:`
### Concept: Declarative vs Imperative
- **Imperative**: "Run these three containers now." ( kubectl run ... )
- **Declarative**: "I want three containers to be running at all times." ( apply -f deployment.yaml )

**The Power of Declarative:**
If a node crashes and a pod dies, Kubernetes notices the actual state (2 pods) doesn't match the desired state (3 pods) and automatically starts a new one to self-heal.
      `},{id:428,question:"Which component of a Kubernetes node is responsible for managing the container lifecycle?",options:["kube-proxy","the container runtime (e.g., containerd)","kubelet","the cloud provider"],correctAnswer:"the container runtime (e.g., containerd)",explanation:`
### Concept: Container Runtimes
While the **kubelet** is the architect, the **container runtime** is the actual construction worker.

**Responsibilities:**
- Pulling images from a registry.
- Unpacking images.
- Creating the isolated environment (namespaces/cgroups).
- Starting and stopping the container processes.
      `},{id:429,question:"What does 'Observability' provide that 'Monitoring' traditionally does not?",options:["More graphs and dashboards","Deep insights into 'unknown unknowns' and complex system behaviors","Alerts when a server goes down","A way to count the number of users"],correctAnswer:"Deep insights into 'unknown unknowns' and complex system behaviors",explanation:`
### Concept: Monitoring vs Observability
- Monitoring: Tells you *what* is happening (CPU is 90%, Server is down). It handles "known unknowns."
- Observability: Tells you *why* it's happening by exploring the internal state of a system based on its outputs. It handles "unknown unknowns."

**Observability requires**: Logs, Metrics, and Traces (The Three Pillars) to be correlated.
      `},{id:430,question:"Which component of the Kubernetes Control Plane is responsible for maintaining the state of resources like Deployments and Services through various reconciliation loops?",options:["kube-apiserver","kube-scheduler","kube-controller-manager","etcd"],correctAnswer:"kube-controller-manager",explanation:`
### Concept: Control Plane Components
The **kube-controller-manager** runs various controllers that handle the background synchronization of the cluster.

**Key Controllers:**
- **Deployment Controller**: Manages the lifecycle of ReplicaSets and Pods.
- **Node Controller**: Monitors node health and status.
- **Service Account Controller**: Creates default accounts for new namespaces.
- **EndpointSlice Controller**: Populates network endpoints for services.

**Why other options are incorrect:**
- **kube-apiserver**: Front-end for the control plane; handles validation and persistence.
- **kube-scheduler**: Only responsible for placing pods on nodes.
- **etcd**: The database that stores the state, but doesn't perform the logic to maintain it.
      `},{id:431,question:"In the context of Distributed Tracing, what is the primary purpose of 'Context Propagation'?",options:["To reduce the storage size of trace data","To pass trace IDs and metadata across service boundaries and protocols","To encrypt sensitive data within a trace span","To automatically generate logs when a trace fails"],correctAnswer:"To pass trace IDs and metadata across service boundaries and protocols",explanation:`
### Concept: Observability (Tracing)
**Context Propagation** is the mechanism that allows a single request's identity to be maintained as it travels through a distributed system.

- **Trace ID**: A unique identifier for the entire request path.
- **Span ID**: Identifies individual operations within a service.
- **Baggage**: User-defined key-value pairs passed across services.
- **Implementation**: Usually handled by injecting headers (like W3C Trace Context) into HTTP/gRPC requests.

**High Difficulty Note**: Without context propagation, you would have disconnected "spans" from different services and no way to correlate them into a single journey.
      `},{id:432,question:"Which Service Mesh feature allows the platform to intercept and manage traffic without requiring any changes to the application's source code?",options:["In-cluster load balancing","Sidecar Proxy Injection","Mutual TLS (mTLS)","Service Discovery"],correctAnswer:"Sidecar Proxy Injection",explanation:`
### Concept: Service Mesh Data Plane
**Sidecar Proxy Injection** (using proxies like Envoy) is the fundamental pattern that enables service mesh features transparently.

- **Traffic Interception**: The sidecar uses IP tables to redirect all incoming and outgoing traffic through the proxy.
- **Language Independence**: Since the proxy is a separate process, the mesh works with any programming language.
- **Decoupling**: Security (mTLS) and Traffic Management (retries) are offloaded from the app developer to the platform.
      `},{id:433,question:"What is the specific role of the Container Runtime Interface (CRI) in a Kubernetes cluster?",options:["To provide a GUI for managing containers","To create a standardized API for the kubelet to communicate with different container runtimes","To speed up the pulling of large container images","To replace Docker with a more secure alternative"],correctAnswer:"To create a standardized API for the kubelet to communicate with different container runtimes",explanation:`
### Concept: Kubernetes Architecture (Interfaces)
The **CRI** is the plugin interface which enables the kubelet to use a wide variety of container runtimes, without the need to recompile the cluster.

- **Standardization**: Allows runtimes like **containerd**, **CRI-O**, and **Mirantis Container Runtime** to be swapped easily.
- **Components**: Consists of a RuntimeService (to manage pods/containers) and an ImageService (to manage images).
- **History**: Introduced to move away from the "hardcoded" Docker dependency in early Kubernetes versions.
      `},{id:434,question:"In a GitOps workflow using a tool like ArgoCD, how is 'Configuration Drift' typically managed?",options:["The developer manually logs into the cluster to fix the drift","A webhook triggers a Slack alert for the admin to take action","The controller continuously reconciles the live state to match the desired state in Git","The cluster automatically shuts down if drift is detected"],correctAnswer:"The controller continuously reconciles the live state to match the desired state in Git",explanation:`
### Concept: GitOps and Drift
**Configuration Drift** occurs when someone manually changes a resource in the cluster (e.g., using 'kubectl edit'), making it different from the version in Git.

- **Reconciliation Loop**: GitOps tools use a "pull" model where they watch Git for changes AND watch the cluster for drift.
- **Self-Healing**: If drift is detected, the tool can automatically overwrite the manual change with the "truth" from Git.
- **Source of Truth**: Git is always the single source of truth for the entire infrastructure state.
      `},{id:435,question:"During the Kubernetes scheduling process, what is the difference between 'Filtering' and 'Scoring'?",options:["Filtering checks for disk space; Scoring checks for CPU","Filtering removes nodes that don't meet requirements; Scoring ranks the remaining nodes","Filtering is for Pods; Scoring is for Nodes","Filtering happens after a pod is scheduled; Scoring happens before"],correctAnswer:"Filtering removes nodes that don't meet requirements; Scoring ranks the remaining nodes",explanation:`
### Concept: Scheduling Process
The **kube-scheduler** selects the best node for a pod in two main phases:

1.  **Filtering (Predicates)**: Finds the set of Nodes where it's even *possible* to schedule the Pod (checking taints, resource limits, node selectors).
2.  **Scoring (Priorities)**: Ranks the nodes that survived filtering to find the *best* fit (e.g., picking nodes balanced across zones, or nodes with the most free resources).

**Note**: If no nodes survive the filtering phase, the pod remains in 'Pending' state.
      `},{id:436,question:"What is the primary motivation for introducing the Container Storage Interface (CSI) in cloud-native ecosystems?",options:["To make cloud storage cheaper","To provide a standard interface for storage vendors to write plugins that work across different orchestrators (K8s, Mesos, etc.)","To allow containers to share the same local disk","To encrypt data automatically at the storage layer"],correctAnswer:"To provide a standard interface for storage vendors to write plugins that work across different orchestrators (K8s, Mesos, etc.)",explanation:`
### Concept: Storage (Interfaces)
The **CSI** allows storage providers (like AWS, NetApp, or Portworx) to write a single driver that works across all OCI-compliant orchestrators.

- **Out-of-Tree**: It allowed Kubernetes to remove "in-tree" storage code, meaning the K8s core doesn't need to be updated every time a storage vendor releases a feature.
- **Flexibility**: Enables dynamic provisioning, snapshots, and resizing across various hardware and cloud backends.
      `},{id:437,question:"According to the CNCF definition, why is 'Immutable Infrastructure' considered a core pillar of cloud-native computing?",options:["Because hardware doesn't change once it's installed in a data center","To ensure that changes are predictable, repeatable, and easily reversible","To prevent hackers from changing the system configuration","Because it makes the system run faster than mutable infrastructure"],correctAnswer:"To ensure that changes are predictable, repeatable, and easily reversible",explanation:`
### Concept: Cloud Native Definition
**Immutable Infrastructure** means that instead of patching or configuring existing servers, you replace them with a new version built from a common image.

- **Predictability**: You know exactly what version of the OS and app is running because the image was tested in CI/CD.
- **Consistency**: Eliminates "Configuration Drift" across multiple servers.
- **Recovery**: If a deployment fails, you simply roll back to the previously known-good "immutable" image.
      `},{id:438,question:"Which security mechanism in Linux (used by Kubernetes) restricts the available system calls (syscalls) a process can make to the host kernel?",options:["AppArmor","Seccomp","RBAC","Network Policies"],correctAnswer:"Seccomp",explanation:`
### Concept: Runtime Security
**Seccomp (Secure Computing Mode)** is a Linux kernel feature that acts as a sandbox for processes, restricting their ability to use syscalls.

- **Attack Surface**: Most vulnerabilities require specific syscalls. Blocking unnecessary ones (like 'mount' or 'reboot') dramatically reduces the risk.
- **Kubernetes Usage**: You can apply a seccomp profile to a pod or container via the 'securityContext'.
- **Runtime Default**: Many clusters now use the 'RuntimeDefault' profile for better baseline security.
      `},{id:439,question:"What is the fundamental difference between Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA) in Kubernetes?",options:["HPA scales nodes; VPA scales pods","HPA increases the number of pod replicas; VPA increases the CPU/RAM allocated to existing pods","HPA is for cloud; VPA is for on-premise","HPA is for web servers; VPA is for databases"],correctAnswer:"HPA increases the number of pod replicas; VPA increases the CPU/RAM allocated to existing pods",explanation:`
### Concept: Autoscaling
The **CNCF definition** emphasizes scalability, resilience, and manageability in dynamic cloud environments.

**Core Techniques:**
- **Containers**: Isolated environments for applications.
- **Service Meshes**: Managing communication between services.
- **Microservices**: Breaking apps into small, independent parts.
- **Immutable Infrastructure**: Replacing servers instead of patching them.
- **Declarative APIs**: Defining the 'what' instead of the 'how'.
      `},{id:441,question:"What is the primary role of the 'kube-scheduler' in a Kubernetes cluster?",options:["To manage the lifecycle of containers on a node","To decide which node a newly created or unscheduled pod should run on","To provide an API for users to interact with the cluster","To store the cluster state and configuration"],correctAnswer:"To decide which node a newly created or unscheduled pod should run on",explanation:`
### Concept: Control Plane Components
The **kube-scheduler** watches for newly created Pods that have no Node assigned and selects a Node for them to run on.

**Selection Factors:**
- **Individual and collective resource requirements**: CPU, Memory, Disk.
- **Hardware/Software/Policy constraints**: Taints, Tolerations, NodeSelectors.
- **Affinity and anti-affinity specifications**.
- **Data locality**: Running pods near the data they need.
      `},{id:442,question:"Which Kubernetes resource is used to provide an IP address and a single DNS name for a set of Pods, enabling basic load balancing?",options:["Deployment","ConfigMap","Service","Ingress"],correctAnswer:"Service",explanation:`
### Concept: Kubernetes Networking
A **Service** is an abstraction which defines a logical set of Pods and a policy by which to access them.

**Common Types:**
- **ClusterIP**: Exposes the Service on a cluster-internal IP (Default).
- **NodePort**: Exposes the Service on each Node's IP at a static port.
- **LoadBalancer**: Exposes the Service externally using a cloud provider's load balancer.
- **ExternalName**: Maps a Service to a DNS name.
      `},{id:443,question:"What is the purpose of a 'Readiness Probe' in Kubernetes?",options:["To check if the container is running and if it should be restarted","To check if the application in the container is ready to accept traffic","To check if the node has enough resources for the container","To check if the container image has security vulnerabilities"],correctAnswer:"To check if the application in the container is ready to accept traffic",explanation:`
### Concept: Health Checks
Kubernetes uses three types of probes:
1.  **Liveness Probe**: Determines if a container needs to be restarted (e.g., app is stuck in a loop).
2.  **Readiness Probe**: Determines if a container should receive traffic. If it fails, the pod is removed from Service endpoints.
3.  **Startup Probe**: Disables liveness and readiness checks until the app has finished starting up.
      `},{id:444,question:"In the context of 'Serverless' computing, what does 'Scale to Zero' mean?",options:["Deleting the application when it has too many errors","Reducing the infrastructure cost to zero when there is no incoming traffic","A bug that causes all pods to crash","Limiting the application to only run on one CPU core"],correctAnswer:"Reducing the infrastructure cost to zero when there is no incoming traffic",explanation:`
### Concept: Serverless Computing
**Scale to Zero** is a key benefit of serverless platforms (like Knative). 

- When no requests are being processed, no active containers/instances are running.
- This results in zero resource billing during idle times.
- The platform automatically spins up an instance as soon as a new request arrives (potentially causing a "cold start").
      `},{id:445,question:"Which component is responsible for implementing the 'Service' networking logic on each node (e.g., managing iptables or IPVS)?",options:["kube-apiserver","kube-controller-manager","kube-proxy","containerd"],correctAnswer:"kube-proxy",explanation:`
### Concept: Node Components
**kube-proxy** is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

**Modes:**
- **iptables**: Legacy mode, uses Linux iptables rules.
- **IPVS**: Higher performance, better load-balancing algorithms.
- **userspace**: Very old, slowest mode.
      `},{id:446,question:"What is 'Prometheus' primarily used for in the cloud-native ecosystem?",options:["Distributed tracing","Log aggregation and analysis","Metric collection and alerting","Container runtime management"],correctAnswer:"Metric collection and alerting",explanation:`
### Concept: Cloud Native Observability
**Prometheus** is a leading monitoring tool that collects data from targets as time-series metrics.

- **Pull Model**: Prometheus scrapes metrics from applications/exporters via HTTP.
- **PromQL**: A powerful query language for slicing and dicing metric data.
- **AlertManager**: Handles alerts based on defined metric thresholds.
      `},{id:447,question:"What is the role of a 'Sidecar' container in a Pod?",options:["To replace the primary application container","To run a helper process that supports the main application (e.g., logging, proxying, caching)","To increase the storage capacity of the pod","To provide a backup image in case the main one fails"],correctAnswer:"To run a helper process that supports the main application (e.g., logging, proxying, caching)",explanation:`
### Concept: Pod Patterns
The **Sidecar pattern** involves running a second container alongside the main one to extend or enhance its functionality without modifying its code.

**Common use cases:**
- **Proxying**: Envoy as a sidecar in a Service Mesh.
- **Logging**: A log collector like Fluent Bit.
- **Syncing**: A process that pulls files from Git.
      `},{id:448,question:"Which of the following describes 'Horizontal Scaling'?",options:["Adding more CPU and RAM to an existing server","Adding more instances (replicas) of an application or server","Reducing the number of users on a system","Moving data from a hard drive to an SSD"],correctAnswer:"Adding more instances (replicas) of an application or server",explanation:`
### Concept: Scalability
- **Horizontal Scaling (Scaling Out)**: Adding more nodes/pods. This is the preferred method for cloud-native applications as it provides better fault tolerance.
- **Vertical Scaling (Scaling Up)**: Increasing the resources of a single machine. It has a physical limit and creates a single point of failure.
      `},{id:449,question:"What is 'Helm' in the Kubernetes ecosystem?",options:["A container runtime that replaces Docker","A package manager for Kubernetes applications that uses 'Charts'","A tool for debugging network latency","The security engine for the control plane"],correctAnswer:"A package manager for Kubernetes applications that uses 'Charts'",explanation:`
### Concept: Application Delivery
**Helm** simplifies the deployment of complex applications by grouping multiple YAML manifests into a single reusable package called a **Chart**.

- **Templates**: Allows parameterized YAML files.
- **Release Management**: Easy rollback to previous versions of a deployment.
- **Repository**: Shareable collections of charts.
      `},{id:450,question:"What is 'GITOPS'?",options:["A branding term for working with Git","Using Git as the single source of truth for declarative infrastructure and applications","A way to write code that only works on GitHub","A manual process for managing server configuration"],correctAnswer:"Using Git as the single source of truth for declarative infrastructure and applications",explanation:`
### Concept: Modern CD
**GitOps** is an operational framework that takes DevOps best practices used for application development (version control, collaboration, compliance, CI/CD) and applies them to infrastructure automation.

**Key principles:**
1.  **Declarative**: The state is described in Git.
2.  **Versioned & Immutable**: Every change is a commit.
3.  **Pulled Automatically**: Tools like ArgoCD pull changes to the cluster.
4.  **Continuously Reconciled**: Discrepancies are automatically corrected.
      `},{id:451,question:"What is 'Container Orchestration'?",options:["Writing a script to start a single container","The automation of lifecycle management for containers, including deployment, scaling, and networking","Designing the UI for a Docker management tool","Purchasing servers from a cloud provider"],correctAnswer:"The automation of lifecycle management for containers, including deployment, scaling, and networking",explanation:`
### Concept: Orchestration
While tools like Docker manage individual containers, **Orchestrators** (like Kubernetes) manage the entire system of containers across a cluster of machines.

**Tasks include:**
- Load balancing.
- Self-healing (restarting failed containers).
- Dynamic scheduling.
- Resource allocation.
      `},{id:452,question:"In cloud-native observability, what are the 'Three Pillars'?",options:["CPU, Memory, and Disk","Logs, Metrics, and Traces","Nodes, Pods, and Services","Docker, Kubernetes, and Helm"],correctAnswer:"Logs, Metrics, and Traces",explanation:`
### Concept: Observability Pillars
1.  **Metrics**: Numeric data measured over time (e.g., CPU usage, Request count).
2.  **Logs**: Discrete events emitted by applications (e.g., "User logged in").
3.  **Traces**: The journey of a single request through a distributed system.
      `},{id:453,question:"What is an 'Ingress' in Kubernetes?",options:["An internal load balancer for pods","An API object that manages external access to the services in a cluster, typically HTTP","A specialized node for database storage","A security policy that blocks all incoming traffic"],correctAnswer:"An API object that manages external access to the services in a cluster, typically HTTP",explanation:`
### Concept: Ingress
**Ingress** provides a way to expose multiple services under a single IP/hostname, handling things like SSL termination and path-based routing.

**Comparison:**
- **Service (NodePort/LoadBalancer)**: One service per entry point.
- **Ingress**: A single entry point for many services (e.g., example.com/app1 and example.com/app2).
      `},{id:454,question:"What is 'Service Mesh'?",options:["A physical network of cables connecting servers","A dedicated infrastructure layer for managing service-to-service communication, including security, traffic management, and observability","A way to combine multiple databases into one","A Kubernetes plugin for managing pod storage"],correctAnswer:"A dedicated infrastructure layer for managing service-to-service communication, including security, traffic management, and observability",explanation:`
### Concept: Service Mesh
As microservices grow, managing the network between them becomes complex. A **Service Mesh** (like Istio or Linkerd) offloads network logic from the application to the infrastructure.

**Features:**
- **mTLS**: Automatic encryption of data-in-transit.
- **Traffic Spitting**: Canary deployments (90% traffic to V1, 10% to V2).
- **Retries and Circuit Breaking**.
- **Observability**: Automatic tracing and metrics for all network calls.
      `},{id:455,question:"What is the primary purpose of 'Namespaces' in Kubernetes?",options:["To speed up the pod startup time","To provide a mechanism for isolating groups of resources within a single cluster","To hide resources from the cluster administrator","To group pods by their physical location in the data center"],correctAnswer:"To provide a mechanism for isolating groups of resources within a single cluster",explanation:`
### Concept: Multi-tenancy
**Namespaces** allow you to partition a single cluster into multiple virtual clusters.

**Use cases:**
- **Environment Separation**: 'dev', 'staging', 'prod' in one cluster.
- **Team Isolation**: Each team gets its own namespace.
- **Resource Quotas**: Limiting the total CPU/Memory that a specific group can use.
      `},{id:456,question:"What is 'Microservices' architecture?",options:["A single large application that is easy to deploy","An architectural style that structures an application as a collection of small, autonomous services modeled around a business domain","Using very small servers to run your code","Minifying Javascript files to improve performance"],correctAnswer:"An architectural style that structures an application as a collection of small, autonomous services modeled around a business domain",explanation:`
### Concept: Microservices
Microservices allow for independent development, deployment, and scaling of different parts of an application.

**Contrast with Monolith:**
- **Monolith**: One code base, one deployment, one scale unit. Hard to change.
- **Microservices**: Many services, many deployments, independent scale units. Complex to manage but provides high agility.
      `},{id:457,question:"What is 'Immutable Infrastructure'?",options:["Infrastructure that is impossible to hack","Infrastructure where servers are never modified after deployment; instead, they are replaced with new versions","A data center that cannot be moved","Using read-only hard drives for all servers"],correctAnswer:"Infrastructure where servers are never modified after deployment; instead, they are replaced with new versions",explanation:`
### Concept: Immutability
In **Immutable Infrastructure**, you don't use tools like Ansible to "patch" a running server. Instead, you build a new image (e.g., an AMI or a Container Image), test it, and deploy it as a replacement.

- **Benefit**: Eliminates "Configuration Drift" where servers that started the same become different over time due to manual tweaks.
- **Benefit**: Easier rollbacks (just switch back to the old image).
      `},{id:458,question:"Which CNCF project graduated first?",options:["Prometheus","Kubernetes","Envoy","Helm"],correctAnswer:"Kubernetes",explanation:`
### Concept: CNCF History
**Kubernetes** was the first project to graduate from the CNCF (in 2018), marking its maturity as a production-grade orchestration platform.
      `},{id:459,question:"In Kubernetes, what is a 'ReplicaSet' responsible for?",options:["Defining the network policy for a pod","Ensuring that a specified number of pod replicas are running at any given time","Storing the persisted data for a pod","Managing the deployment of helm charts"],correctAnswer:"Ensuring that a specified number of pod replicas are running at any given time",explanation:`
### Concept: Self-Healing
A **ReplicaSet**'s purpose is to maintain a stable set of replica Pods. It is often used to guarantee the availability of a specified number of identical Pods.

**Note**: You should generally use a **Deployment** instead of directly using a ReplicaSet, as Deployments provide declarative updates and rolling versions.
      `},{id:460,question:"What is an 'Admission Controller' in Kubernetes?",options:["A person who decides who can join the cluster","A piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object","A plugin that allows pods to join the network","A specialized node for handling user logins"],correctAnswer:"A piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object",explanation:`
### Concept: API Server Security
**Admission Controllers** can "Validate" (decide whether to allow a request) or "Mutate" (change the request).

**Examples:**
- **ResourceQuota**: Checks if the namespace has room for the new pod.
- **LimitRanger**: Sets default resource limits if none were specified.
- **AlwaysPullImages**: Forces containers to always pull the latest image.
      `},{id:461,question:"What is 'Cloud Native Storage'?",options:["Any hard drive used in a cloud data center","Storage solutions designed specifically for containerized environments, providing features like dynamic provisioning and high availability","A way to store files on a personal laptop","A specialized type of RAM"],correctAnswer:"Storage solutions designed specifically for containerized environments, providing features like dynamic provisioning and high availability",explanation:`
### Concept: Storage
**Cloud Native Storage** (like Rook or Longhorn) understands orchestrators like Kubernetes.

- **Dynamic Provisioning**: Storage is created automatically when a pod requests it via a PersistentVolumeClaim (PVC).
- **High Availability**: Data is replicated across multiple nodes/zones.
- **Agility**: Storage follows the pod even if it moves to a different node.
      `},{id:462,question:"What is 'OpenTelemetry'?",options:["A free version of a popular monitoring tool","A standardized framework and set of tools for generating, collecting, and exporting telemetry data (Metrics, Logs, Traces)","A method for opening network ports in a firewall","A replacement for the Kubernetes API"],correctAnswer:"A standardized framework and set of tools for generating, collecting, and exporting telemetry data (Metrics, Logs, Traces)",explanation:`
### Concept: Standardized Observability
**OpenTelemetry (OTel)** provides a single set of APIs and SDKs to capture telemetry data from your applications in a vendor-neutral way.

- **Unified**: Handles all three pillars of observability.
- **Vendor-Neutral**: You can change your backend (e.g., from Jaeger to Honeycomb) without changing your application code.
      `},{id:463,question:"Which component in Kubernetes is the 'Source of Truth' for the cluster's state?",options:["kube-apiserver","etcd","kubelet","kube-proxy"],correctAnswer:"etcd",explanation:`
### Concept: Control Plane Components
**etcd** is a consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.

**Importance:**
- If etcd is lost, the entire cluster configuration is lost.
- It is critical to have a reliable backup plan for etcd.
- It uses the Raft consensus algorithm for consistency.
      `},{id:464,question:"What does 'Eventual Consistency' mean in a cloud-native system?",options:["The system is always perfectly accurate at every millisecond","If no new updates are made to a specific data item, eventually all accesses to that item will return the last updated value","The system will eventually crash","The application will only work during business hours"],correctAnswer:"If no new updates are made to a specific data item, eventually all accesses to that item will return the last updated value",explanation:`
### Concept: Distributed Systems
In highly distributed systems, achieving perfect consistency (CAP theorem) is difficult. Many cloud-native services choose **Eventual Consistency** to ensure high availability and performance.

- **Trade-off**: For a short period, different users might see slightly different versions of the data.
      `},{id:465,question:"Which of the following is a core characteristic of a 'Cloud Native' application?",options:["It consists of a single large binary","It is designed to be resilient and thrive in dynamic environments","It must be hosted in a public cloud data center","It requires manual scaling by a system administrator"],correctAnswer:"It is designed to be resilient and thrive in dynamic environments",explanation:`
### Concept: Cloud Native Characteristics
Cloud - native apps are built and run using technologies that empower them to be scalable, resilient, and manageable.

** Key traits:**
- ** Resilience **: The app can recover from failures(nodes, disks, network) automatically.
- ** Dynamic **: The environment changes constantly(scaling, deployments), and the app adapts.
- ** Automation **: Minimal manual intervention for operations.
      `},{id:466,question:"What is the primary benefit of 'Serverless' architectures for developers?",options:["It allows them to manage the underlying OS more effectively","It abstracts away infrastructure management, allowing them to focus solely on writing code","It makes applications run faster on any hardware","It eliminates the need for any cloud provider"],correctAnswer:"It abstracts away infrastructure management, allowing them to focus solely on writing code",explanation:`
### Concept: Serverless Computing
In ** Serverless **, the cloud provider manages the allocation and provisioning of servers.Developers only provide the code(functions) and triggers.

- ** Developer focus **: Logic and value, not maintenance.
- ** Scale **: Automatic scaling based on demand.
- ** Cost **: Pay - per - execution model.
      `},{id:467,question:"In the 'OCI' (Open Container Initiative) standards, what does the 'Runtime Specification' define?",options:["How a container image should be stored in a registry","How a container should be launched and run by a container runtime","The syntax for a Dockerfile","The networking protocol for service-to-service communication"],correctAnswer:"How a container should be launched and run by a container runtime",explanation:`
### Concept: OCI Standards
The ** OCI Runtime Spec ** ensures that different runtimes(like runc, Kata, or gVisor) can all run the same container bundles in a consistent way.

- ** Bundle **: A directory containing a 'config.json' and a root filesystem.
- ** Lifecycle **: Standard operations like 'create', 'start', 'state', 'delete'.
      `},{id:468,question:"Which component in a Service Mesh is responsible for the actual traffic routing, encryption, and telemetry collection?",options:["Control Plane","Data Plane (Sidecar Proxies)","API Gateway","Kubernetes API Server"],correctAnswer:"Data Plane (Sidecar Proxies)",explanation:`
### Concept: Service Mesh Data Plane
The ** Data Plane ** consists of lightweight proxies(like Envoy) deployed as sidecars alongside every service instance.

- ** Mediation **: Intercepts all network traffic between services.
- ** Enforcement **: Applies policies defined by the control plane(e.g., mTLS, retries).
- ** Observation **: Collects metrics and traces for every request.
      `},{id:469,question:"What does 'Observability' help developers understand about 'Unknown Unknowns'?",options:["It helps them count how many users were on the site yesterday","It allows them to ask new questions of their system to debug complex, unforeseen failures","It provides a list of all potential bugs in the code","It tells them exactly when a server will fail in the future"],correctAnswer:"It allows them to ask new questions of their system to debug complex, unforeseen failures",explanation:`
### Concept: Observability vs Monitoring
  ** Monitoring ** handles "Known Unknowns"(e.g., I know memory can run out, so I monitor memory usage).

** Observability ** handles "Unknown Unknowns"(e.g., the system is slow only for users in Japan using Safari on a Tuesday).You use the rich telemetry data to explore and pinpoint the cause of issues you didn't even know were possible.
  `},{id:470,question:"Which CNCF project provides an open-source system for automating deployment, scaling, and management of containerized applications?",options:["Docker","Kubernetes","Ansible","Jenkins"],correctAnswer:"Kubernetes",explanation:`
### Concept: Orchestration
  ** Kubernetes ** is the most widely adopted container orchestrator in the world, originally developed by Google and now maintained by the CNCF.
      `},{id:471,question:"What is 'Distributed Tracing' specifically designed to solve?",options:["High CPU usage on a single node","Tracking a single request as it passes through many different services and networks","Aggregating logs from multiple physical machines","Ensuring that all containers use the same base image"],correctAnswer:"Tracking a single request as it passes through many different services and networks",explanation:`
### Concept: Observability(Tracing)
In microservices, a single user click might touch dozens of services. ** Distributed Tracing ** (like Jaeger) correlates the work done by each service using a unique Trace ID.

- ** Visualize **: See the timing and dependencies of each step.
- ** Bottlenecks **: Quickly find which service is causing a delay.
      `},{id:472,question:"In Kubernetes, what is the 'Controller Pattern'?",options:["A way to write code using only 'if' statements","A control loop that watches the shared state of the cluster through the API server and makes changes attempting to move the current state towards the desired state","A specialized hardware device for controlling a cluster","A UI element in the Kubernetes dashboard"],correctAnswer:"A control loop that watches the shared state of the cluster through the API server and makes changes attempting to move the current state towards the desired state",explanation:`
### Concept: Control Loops
Kubernetes is a system of ** Controllers **.Each controller is responsible for a specific part of the cluster state.

** The Loop:**
  1. ** Observe **: Check the current state.
2. ** Diff **: Compare current state with desired state(YAML).
3. ** Act **: Perform actions to fix the difference.
      `},{id:473,question:"What is a 'Persistent Volume' (PV) in Kubernetes?",options:["A temporary folder for log files","A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes","A backup of the etcd database","A container that never stops running"],correctAnswer:"A piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes",explanation:`
### Concept: Storage
A ** PV ** is a cluster resource(like a Node) that has a lifecycle independent of any individual Pod that uses it.

- ** PV **: The actual storage(NFS, AWS EBS, Local Disk).
- ** PVC **: A request for storage by a user / pod.
- ** StorageClass **: Allows for "Just-in-Time" dynamic provisioning of PVs.
      `},{id:474,question:"What is the primary function of the 'kubelet'?",options:["To manage the cluster's network policies","To ensure that containers are running in a Pod according to the PodSpec","To decide which node a pod should run on","To provide a web interface for the cluster"],correctAnswer:"To ensure that containers are running in a Pod according to the PodSpec",explanation:`
### Concept: Node Components
The ** kubelet ** is the primary "node agent" that runs on each node.It takes a set of PodSpecs provided via the API server and ensures that the containers described in those PodSpecs are running and healthy.
      `},{id:475,question:"Which CNCF project provides a cloud-native, open-source logging solution?",options:["Fluentd / Fluent Bit","Prometheus","Jaeger","Envoy"],correctAnswer:"Fluentd / Fluent Bit",explanation:`
### Concept: Observability(Logging)
  ** Fluentd ** and ** Fluent Bit ** are unified logging layers that collect, process, and forward logs from various sources to various destinations(like Elasticsearch, S3, or Splunk).
      `},{id:476,question:"What is 'Cloud Native Application Delivery' focusing on?",options:["Buying more physical servers for the data center","The complete lifecycle of software development, from code to production using automation and cloud-native tools","The shipping speed of hardware components","Manual deployment of zip files to a server"],correctAnswer:"The complete lifecycle of software development, from code to production using automation and cloud-native tools",explanation:`
### Concept: App Delivery
Modern application delivery emphasizes speed and reliability through ** CI / CD **, ** GitOps **, and ** Progressive Delivery ** (e.g., Canary, Blue / Green).
      `},{id:477,question:"What is 'Autoscaling' in a Kubernetes sense?",options:["Automatically buying more cloud credits","Dynamically adjusting the resources (Nodes or Pods) dedicated to a workload based on demand","A script that restarts the cluster every night","Upgrading the Kubernetes version automatically"],correctAnswer:"Dynamically adjusting the resources (Nodes or Pods) dedicated to a workload based on demand",explanation:`
### Concept: Autoscaling
  - ** HPA(Horizontal Pod Autoscaler) **: Scaled number of pods.
- ** VPA(Vertical Pod Autoscaler) **: Scales CPU / Memory of existing pods.
- ** Cluster Autoscaler **: Adds or removes physical Nodes to the cluster.
      `},{id:478,question:"What are 'Taints and Tolerations' used for in Kubernetes?",options:["To encrypt data in etcd","To ensure that pods are not scheduled onto inappropriate nodes","To manage user roles and permissions","To speed up container networking"],correctAnswer:"To ensure that pods are not scheduled onto inappropriate nodes",explanation:`
### Concept: Scheduling
  - ** Taint **: A marker applied to a ** Node ** to "repel" pods unless they have a matching toleration. (e.g., "This node is for GPUs only").
- ** Toleration **: Applied to a ** Pod ** to allow it to be scheduled on a tainted node.
      `},{id:479,question:"Which of the following describes 'Policy-as-Code'?",options:["Writing comments in the code explaining company rules","The practice of managing and enforcing policies (security, compliance, governance) using programmable and automated files (e.g. Kyverno, OPA)","A document in Git that lists out developer rules","Using AI to write code for you"],correctAnswer:"The practice of managing and enforcing policies (security, compliance, governance) using programmable and automated files (e.g. Kyverno, OPA)",explanation:`
### Concept: Modern Governance
  ** Policy - as - Code ** moves policy enforcement into the CI / CD pipeline and the orchestrator.

- ** Example **: A policy that says "No container can run as root".
- ** Enforcement **: Admission controllers(like Kyverno) block any YAML that violates the policy.
      `},{id:480,question:"What is an 'Operator' in the Kubernetes world?",options:["A system administrator who manages the cluster","A method of packaging, deploying, and managing a Kubernetes application using both CRDs and custom controller logic","A specialized tool for managing network cables","A built-in Kubernetes component for manual scaling"],correctAnswer:"A method of packaging, deploying, and managing a Kubernetes application using both CRDs and custom controller logic",explanation:`
### Concept: The Operator Pattern
An ** Operator ** encodes the domain - specific knowledge of a human operator into software.

- ** Goal **: Automate complex stateful apps(like Databases).
- ** CRD **: Defines the state(e.g., "I want a 3-node Postgres cluster").
- ** Controller **: Performs the complex work(e.g., setting up replication, handling failover).
      `},{id:481,question:"What is 'Cilium' primarily known for in a cluster?",options:["Replacing the Kubernetes API server","A high-performance CNI that uses eBPF for networking, security, and observability","A tool for managing Helm charts","A dashboard for visualizing pod status"],correctAnswer:"A high-performance CNI that uses eBPF for networking, security, and observability",explanation:`
### Concept: Cloud Native Networking
  ** Cilium ** is an open - source project that uses ** eBPF ** (Extended Berkeley Packet Filter) technology to provide powerful networking and security features directly in the Linux kernel.
      `},{id:482,question:"What is the role of a 'Registry' in containerization?",options:["To store the cluster's user passwords","To store and share container images","To track the resource usage of each pod","To manage the DNS names for services"],correctAnswer:"To store and share container images",explanation:`
### Concept: Container Images
A ** Registry ** (like Docker Hub, Quay, or Google Artifact Registry) is a centralized place where images are uploaded(pushed) and downloaded(pulled) by nodes.
      `},{id:483,question:"What is the primary difference between a 'Deployment' and a 'StatefulSet'?",options:["StatefulSet is faster than Deployment","Deployment is for stateless apps; StatefulSet is for apps that require persistent identity and stable storage (e.g., databases)","StatefulSet is only for on-premise clusters","Deployment can only run one pod at a time"],correctAnswer:"Deployment is for stateless apps; StatefulSet is for apps that require persistent identity and stable storage (e.g., databases)",explanation:`
### Concept: Workload API
  - ** Deployment **: Pods are interchangeable(cattle).If one dies, a new one with a random name replaces it.
- ** StatefulSet **: Pods have unique, sticky identities(pets).E.g., 'mysql-0' always gets the same network ID and same persistent disk even after a restart.
      `},{id:484,question:"What does 'eBPF' stand for and what is its significance in cloud-native?",options:["Extended Berkeley Packet Filter; allows running sandboxed programs in the Linux kernel without changing kernel source code","Electronic Build Power Framework; speeds up container builds","Embedded Binary Process Flow; a method for tracing microservices","Encryption Block Packet Format; a new security standard for storage"],correctAnswer:"Extended Berkeley Packet Filter; allows running sandboxed programs in the Linux kernel without changing kernel source code",explanation:`
### Concept: eBPF
  ** eBPF ** has revolutionized cloud - native infrastructure by enabling high - performance networking(Cilium), deep observability(Hubble), and advanced security(Falco) with minimal overhead.
      `},{id:485,question:"What is the 'Twelve-Factor App' methodology?",options:["A list of twelve steps for installing Kubernetes","A set of best practices for building modern, cloud-native applications that are portable and resilient","A security standard for twelve different types of cloud providers","A mathematical formula for calculating cloud costs"],correctAnswer:"A set of best practices for building modern, cloud-native applications that are portable and resilient",explanation:`
### Concept: App Design
The ** Twelve - Factor App ** methodology(e.g., Codebase, Dependencies, Config in env vars, Statelessness) provides a roadmap for building apps that fit perfectly into containerized environments.
      `},{id:486,question:"What is the purpose of 'Network Policies' in Kubernetes?",options:["To assign static IP addresses to nodes","To provide a declarative way to specify which pods are allowed to communicate with each other","To increase the bandwidth of the cluster network","To manage the firewall of the physical data center"],correctAnswer:"To provide a declarative way to specify which pods are allowed to communicate with each other",explanation:`
### Concept: Zero Trust
By default, all pods in Kubernetes can talk to each other. ** Network Policies ** allow you to implement a "Default Deny" posture and only allow necessary traffic, improving security.
      `},{id:487,question:"What is 'Grafana' commonly used for?",options:["A database for storing logs","A visualization and dashboarding platform for observing metric data (often from Prometheus)","A tool for managing container images","A security scanner for Kubernetes clusters"],correctAnswer:"A visualization and dashboarding platform for observing metric data (often from Prometheus)",explanation:`
### Concept: Visualization
  ** Grafana ** allows you to create beautiful, interactive dashboards to monitor the health and performance of your applications and infrastructure.
      `},{id:488,question:"What is 'Istio'?",options:["A container runtime like containerd","A popular open-source Service Mesh that provides advanced traffic management, security, and observability","A package manager for Kubernetes","A tool for backing up etcd"],correctAnswer:"A popular open-source Service Mesh that provides advanced traffic management, security, and observability",explanation:`
### Concept: Service Mesh
  ** Istio ** is one of the most mature service meshes, offering features like request routing, mTLS, and rich telemetry out - of - the - box.
      `},{id:489,question:"Which of the following is an example of an 'Admission Controller' task?",options:["Deciding which node a pod should run on","Checking if a specific image registry is allowed before allowing a pod to be created","Encrypting a database on disk","Managing the CSS of the application dashboard"],correctAnswer:"Checking if a specific image registry is allowed before allowing a pod to be created",explanation:`
### Concept: Admission Control
Admission controllers can enforce rules like "Only allow images from 'mycompany.registry.io'".This happens during the API request phase, before any pod is actually scheduled or run.
      `}]},dm=({onSelectCategory:w})=>T.jsxs("div",{className:"category-menu",children:[T.jsx("h2",{children:"Select Your Certification Path"}),T.jsx("div",{className:"categories-grid",children:um.map(B=>{const K=B.comingSoon;return T.jsxs("button",{className:`category-card glass-panel ${K?"inactive":""}`,onClick:()=>!K&&w(B.id),disabled:K,children:[T.jsxs("div",{className:"card-content",children:[T.jsx("h3",{children:B.title}),T.jsx("p",{children:B.description})]}),!K&&T.jsx("div",{className:"start-badge",children:"Start Practice →"}),K&&T.jsxs("div",{className:"inactive-overlay",children:[T.jsx("span",{className:"lock-icon",children:"🔒"}),T.jsx("span",{children:"Coming Soon"})]})]},B.id)})}),T.jsx("style",{children:`
        .category-menu {
            max-width: 1000px;
            margin: 0 auto;
            animation: fadeIn 0.5s ease-out;
        }
        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .category-card {
            padding: 2rem;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            cursor: pointer;
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.3s ease;
            background: var(--color-bg-card);
            position: relative;
            overflow: hidden; /* Ensure overlay stays inside */
            min-height: 200px;
        }

        /* Active Card Hover */
        .category-card:not(.inactive):hover {
            transform: translateY(-5px);
            border-color: var(--color-accent);
            box-shadow: var(--shadow-glow);
        }

        /* Inactive Card Styling - Looks Normal initially */
        .category-card.inactive {
            cursor: default;
            /* No opacity reduction, looks fully active */
        }

        /* Card Content Wrapper to be blurred */
        .card-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: filter 0.3s ease;
        }

        .category-card h3 {
            margin: 0;
            color: var(--color-accent);
            font-size: 1.25rem;
        }
        
        .category-card p {
            margin: 0;
            color: var(--color-text-secondary);
        }

        /* Overlay Styling */
        .inactive-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.8); /* Dark semi-transparent background */
            backdrop-filter: blur(4px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            opacity: 0; /* Hidden by default */
            transition: opacity 0.3s ease;
            color: var(--color-text-primary);
            font-weight: bold;
            font-size: 1.2rem;
            z-index: 10;
        }

        .lock-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        /* Show overlay on hover */
        .category-card.inactive:hover .inactive-overlay {
            opacity: 1;
        }

        .start-badge {
            margin-top: auto;
            font-weight: 600;
            color: var(--color-text-primary);
            text-align: right;
        }
      `})]}),fm=({totalAvailable:w,onSelectCount:B,onBack:K})=>{const[f,U]=Be.useState(""),[_,Z]=Be.useState(""),fe=()=>{const b=parseInt(f,10);if(isNaN(b)||b<1){Z("Please enter a valid number greater than 0.");return}if(b>w){Z(`Please choose a number between 1 and ${w}.`);return}B(b)},k=b=>{b.key==="Enter"&&fe()};return T.jsxs("div",{className:"count-selector-container glass-panel fade-in",children:[T.jsxs("div",{className:"selector-header",children:[T.jsx("button",{className:"back-btn",onClick:K,children:"← Back"}),T.jsx("h2",{children:"How many questions?"})]}),T.jsxs("p",{className:"subtitle",children:["There are ",T.jsx("span",{className:"highlight",children:w})," questions available in this category."]}),T.jsxs("div",{className:"input-container",children:[T.jsx("label",{htmlFor:"question-count",className:"input-label",children:"Number of questions:"}),T.jsxs("div",{className:"input-group",children:[T.jsx("input",{id:"question-count",type:"number",className:"count-input",value:f,onChange:b=>{U(b.target.value),Z("")},onKeyDown:k,placeholder:"e.g. 10",min:"1",max:w}),T.jsx("button",{className:"primary start-btn",onClick:fe,children:"Start Exam"})]}),_&&T.jsx("p",{className:"error-msg",children:_})]}),T.jsx("style",{children:`
        .count-selector-container {
            max-width: 600px;
            margin: 2rem auto;
            padding: 3rem;
            text-align: center;
        }
        .selector-header {
            position: relative;
            margin-bottom: 2rem;
        }
        .back-btn {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            padding: 0;
        }
        .back-btn:hover { color: var(--color-accent); text-decoration: underline; }
        .subtitle { color: var(--color-text-secondary); margin-bottom: 2rem; }
        .highlight { color: var(--color-accent); font-weight: bold; }
        
        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        .input-label {
            font-size: 1.1rem;
            color: var(--color-text-primary);
        }
        .input-group {
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .count-input {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.8rem 1rem;
            border-radius: var(--radius-md);
            font-size: 1.2rem;
            width: 100px;
            text-align: center;
        }
        .count-input:focus {
            outline: none;
            border-color: var(--color-accent);
            box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
        }
        .start-btn {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
        }
        .error-msg {
            color: var(--color-error);
            font-size: 0.9rem;
            margin-top: 0.5rem;
            animation: shake 0.4s ease-in-out;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
      `})]})},pm=({onLogoClick:w})=>T.jsxs("header",{className:"main-header",children:[T.jsxs("div",{className:"logo-container",onClick:w,style:{cursor:"pointer"},children:[T.jsx("span",{className:"icon",children:"🐧"}),T.jsxs("h1",{children:["Linux Foundation Mastery ",T.jsx("span",{className:"highlight",children:"Hub"})]})]}),T.jsx("p",{className:"subtitle",children:"Master Linux Foundations with Concept-First Practice"})]}),hm=()=>T.jsx("footer",{className:"main-footer",children:T.jsxs("p",{children:["© ",new Date().getFullYear()," Linux Cert Prep • Built for Certification Success"]})});function mm(){const[w,B]=Be.useState("menu"),[K,f]=Be.useState(null),[U,_]=Be.useState([]),Z=I=>{f(I),B("select_count")},fe=I=>{const ge=[...xf[K]||[]].sort(()=>.5-Math.random()).slice(0,I);_(ge),B("quiz")},k=()=>{B("menu"),f(null),_([])},b=()=>{B("menu"),f(null)};return T.jsxs("div",{className:"app-layout",children:[T.jsx(pm,{onLogoClick:k}),T.jsxs("main",{className:"main-content",children:[w==="menu"&&T.jsx(dm,{onSelectCategory:Z}),w==="select_count"&&T.jsx(fm,{totalAvailable:xf[K]?.length||0,onSelectCount:fe,onBack:b}),w==="quiz"&&T.jsx(cm,{questions:U,onBackToMenu:k,onRetry:()=>B("select_count")})]}),T.jsx(hm,{})]})}im.createRoot(document.getElementById("root")).render(T.jsx(Be.StrictMode,{children:T.jsx(mm,{})}));
