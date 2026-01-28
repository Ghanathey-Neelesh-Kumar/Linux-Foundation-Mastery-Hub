(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const Y of H)if(Y.type==="childList")for(const P of Y.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function _(H){const Y={};return H.integrity&&(Y.integrity=H.integrity),H.referrerPolicy&&(Y.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?Y.credentials="include":H.crossOrigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function d(H){if(H.ep)return;H.ep=!0;const Y=_(H);fetch(H.href,Y)}})();var is={exports:{}},Sl={};var pd;function Wp(){if(pd)return Sl;pd=1;var T=Symbol.for("react.transitional.element"),k=Symbol.for("react.fragment");function _(d,H,Y){var P=null;if(Y!==void 0&&(P=""+Y),H.key!==void 0&&(P=""+H.key),"key"in H){Y={};for(var de in H)de!=="key"&&(Y[de]=H[de])}else Y=H;return H=Y.ref,{$$typeof:T,type:d,key:P,ref:H!==void 0?H:null,props:Y}}return Sl.Fragment=k,Sl.jsx=_,Sl.jsxs=_,Sl}var hd;function Pp(){return hd||(hd=1,is.exports=Wp()),is.exports}var z=Pp(),os={exports:{}},j={};var yd;function Ip(){if(yd)return j;yd=1;var T=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),P=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),ne=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var Oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ee=Object.assign,Xe={};function Be(r,C,D){this.props=r,this.context=C,this.refs=Xe,this.updater=D||Oe}Be.prototype.isReactComponent={},Be.prototype.setState=function(r,C){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,C,"setState")},Be.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function dt(){}dt.prototype=Be.prototype;function Ne(r,C,D){this.props=r,this.context=C,this.refs=Xe,this.updater=D||Oe}var De=Ne.prototype=new dt;De.constructor=Ne,Ee(De,Be.prototype),De.isPureReactComponent=!0;var mt=Array.isArray;function Ke(){}var Q={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function pt(r,C,D){var N=D.ref;return{$$typeof:T,type:r,key:C,ref:N!==void 0?N:null,props:D}}function It(r,C){return pt(r.type,C,r.props)}function ht(r){return typeof r=="object"&&r!==null&&r.$$typeof===T}function ue(r){var C={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(D){return C[D]})}var Ge=/\/+/g;function Ze(r,C){return typeof r=="object"&&r!==null&&r.key!=null?ue(""+r.key):C.toString(36)}function tt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ke,Ke):(r.status="pending",r.then(function(C){r.status==="pending"&&(r.status="fulfilled",r.value=C)},function(C){r.status==="pending"&&(r.status="rejected",r.reason=C)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,C,D,N,B){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var ae=!1;if(r===null)ae=!0;else switch(V){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(r.$$typeof){case T:case k:ae=!0;break;case G:return ae=r._init,v(ae(r._payload),C,D,N,B)}}if(ae)return B=B(r),ae=N===""?"."+Ze(r,0):N,mt(B)?(D="",ae!=null&&(D=ae.replace(Ge,"$&/")+"/"),v(B,C,D,"",function(Dn){return Dn})):B!=null&&(ht(B)&&(B=It(B,D+(B.key==null||r&&r.key===B.key?"":(""+B.key).replace(Ge,"$&/")+"/")+ae)),C.push(B)),1;ae=0;var Qe=N===""?".":N+":";if(mt(r))for(var be=0;be<r.length;be++)N=r[be],V=Qe+Ze(N,be),ae+=v(N,C,D,V,B);else if(be=ye(r),typeof be=="function")for(r=be.call(r),be=0;!(N=r.next()).done;)N=N.value,V=Qe+Ze(N,be++),ae+=v(N,C,D,V,B);else if(V==="object"){if(typeof r.then=="function")return v(tt(r),C,D,N,B);throw C=String(r),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ae}function x(r,C,D){if(r==null)return r;var N=[],B=0;return v(r,N,"","",function(V){return C.call(D,V,B++)}),N}function q(r){if(r._status===-1){var C=r._result;C=C(),C.then(function(D){(r._status===0||r._status===-1)&&(r._status=1,r._result=D)},function(D){(r._status===0||r._status===-1)&&(r._status=2,r._result=D)}),r._status===-1&&(r._status=0,r._result=C)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},le={map:x,forEach:function(r,C,D){x(r,function(){C.apply(this,arguments)},D)},count:function(r){var C=0;return x(r,function(){C++}),C},toArray:function(r){return x(r,function(C){return C})||[]},only:function(r){if(!ht(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return j.Activity=O,j.Children=le,j.Component=Be,j.Fragment=_,j.Profiler=H,j.PureComponent=Ne,j.StrictMode=d,j.Suspense=E,j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,j.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Q.H.useMemoCache(r)}},j.cache=function(r){return function(){return r.apply(null,arguments)}},j.cacheSignal=function(){return null},j.cloneElement=function(r,C,D){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var N=Ee({},r.props),B=r.key;if(C!=null)for(V in C.key!==void 0&&(B=""+C.key),C)!Ye.call(C,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&C.ref===void 0||(N[V]=C[V]);var V=arguments.length-2;if(V===1)N.children=D;else if(1<V){for(var ae=Array(V),Qe=0;Qe<V;Qe++)ae[Qe]=arguments[Qe+2];N.children=ae}return pt(r.type,B,N)},j.createContext=function(r){return r={$$typeof:P,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Y,_context:r},r},j.createElement=function(r,C,D){var N,B={},V=null;if(C!=null)for(N in C.key!==void 0&&(V=""+C.key),C)Ye.call(C,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(B[N]=C[N]);var ae=arguments.length-2;if(ae===1)B.children=D;else if(1<ae){for(var Qe=Array(ae),be=0;be<ae;be++)Qe[be]=arguments[be+2];B.children=Qe}if(r&&r.defaultProps)for(N in ae=r.defaultProps,ae)B[N]===void 0&&(B[N]=ae[N]);return pt(r,V,B)},j.createRef=function(){return{current:null}},j.forwardRef=function(r){return{$$typeof:de,render:r}},j.isValidElement=ht,j.lazy=function(r){return{$$typeof:G,_payload:{_status:-1,_result:r},_init:q}},j.memo=function(r,C){return{$$typeof:b,type:r,compare:C===void 0?null:C}},j.startTransition=function(r){var C=Q.T,D={};Q.T=D;try{var N=r(),B=Q.S;B!==null&&B(D,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Ke,te)}catch(V){te(V)}finally{C!==null&&D.types!==null&&(C.types=D.types),Q.T=C}},j.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},j.use=function(r){return Q.H.use(r)},j.useActionState=function(r,C,D){return Q.H.useActionState(r,C,D)},j.useCallback=function(r,C){return Q.H.useCallback(r,C)},j.useContext=function(r){return Q.H.useContext(r)},j.useDebugValue=function(){},j.useDeferredValue=function(r,C){return Q.H.useDeferredValue(r,C)},j.useEffect=function(r,C){return Q.H.useEffect(r,C)},j.useEffectEvent=function(r){return Q.H.useEffectEvent(r)},j.useId=function(){return Q.H.useId()},j.useImperativeHandle=function(r,C,D){return Q.H.useImperativeHandle(r,C,D)},j.useInsertionEffect=function(r,C){return Q.H.useInsertionEffect(r,C)},j.useLayoutEffect=function(r,C){return Q.H.useLayoutEffect(r,C)},j.useMemo=function(r,C){return Q.H.useMemo(r,C)},j.useOptimistic=function(r,C){return Q.H.useOptimistic(r,C)},j.useReducer=function(r,C,D){return Q.H.useReducer(r,C,D)},j.useRef=function(r){return Q.H.useRef(r)},j.useState=function(r){return Q.H.useState(r)},j.useSyncExternalStore=function(r,C,D){return Q.H.useSyncExternalStore(r,C,D)},j.useTransition=function(){return Q.H.useTransition()},j.version="19.2.3",j}var gd;function fs(){return gd||(gd=1,os.exports=Ip()),os.exports}var ke=fs(),us={exports:{}},Al={},ss={exports:{}},cs={};var vd;function Fp(){return vd||(vd=1,(function(T){function k(v,x){var q=v.length;v.push(x);e:for(;0<q;){var te=q-1>>>1,le=v[te];if(0<H(le,x))v[te]=x,v[q]=le,q=te;else break e}}function _(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var x=v[0],q=v.pop();if(q!==x){v[0]=q;e:for(var te=0,le=v.length,r=le>>>1;te<r;){var C=2*(te+1)-1,D=v[C],N=C+1,B=v[N];if(0>H(D,q))N<le&&0>H(B,D)?(v[te]=B,v[N]=q,te=N):(v[te]=D,v[C]=q,te=C);else if(N<le&&0>H(B,q))v[te]=B,v[N]=q,te=N;else break e}}return x}function H(v,x){var q=v.sortIndex-x.sortIndex;return q!==0?q:v.id-x.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Y=performance;T.unstable_now=function(){return Y.now()}}else{var P=Date,de=P.now();T.unstable_now=function(){return P.now()-de}}var E=[],b=[],G=1,O=null,ne=3,ye=!1,Oe=!1,Ee=!1,Xe=!1,Be=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;function De(v){for(var x=_(b);x!==null;){if(x.callback===null)d(b);else if(x.startTime<=v)d(b),x.sortIndex=x.expirationTime,k(E,x);else break;x=_(b)}}function mt(v){if(Ee=!1,De(v),!Oe)if(_(E)!==null)Oe=!0,Ke||(Ke=!0,ue());else{var x=_(b);x!==null&&tt(mt,x.startTime-v)}}var Ke=!1,Q=-1,Ye=5,pt=-1;function It(){return Xe?!0:!(T.unstable_now()-pt<Ye)}function ht(){if(Xe=!1,Ke){var v=T.unstable_now();pt=v;var x=!0;try{e:{Oe=!1,Ee&&(Ee=!1,dt(Q),Q=-1),ye=!0;var q=ne;try{t:{for(De(v),O=_(E);O!==null&&!(O.expirationTime>v&&It());){var te=O.callback;if(typeof te=="function"){O.callback=null,ne=O.priorityLevel;var le=te(O.expirationTime<=v);if(v=T.unstable_now(),typeof le=="function"){O.callback=le,De(v),x=!0;break t}O===_(E)&&d(E),De(v)}else d(E);O=_(E)}if(O!==null)x=!0;else{var r=_(b);r!==null&&tt(mt,r.startTime-v),x=!1}}break e}finally{O=null,ne=q,ye=!1}x=void 0}}finally{x?ue():Ke=!1}}}var ue;if(typeof Ne=="function")ue=function(){Ne(ht)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ze=Ge.port2;Ge.port1.onmessage=ht,ue=function(){Ze.postMessage(null)}}else ue=function(){Be(ht,0)};function tt(v,x){Q=Be(function(){v(T.unstable_now())},x)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(v){v.callback=null},T.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<v?Math.floor(1e3/v):5},T.unstable_getCurrentPriorityLevel=function(){return ne},T.unstable_next=function(v){switch(ne){case 1:case 2:case 3:var x=3;break;default:x=ne}var q=ne;ne=x;try{return v()}finally{ne=q}},T.unstable_requestPaint=function(){Xe=!0},T.unstable_runWithPriority=function(v,x){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=ne;ne=v;try{return x()}finally{ne=q}},T.unstable_scheduleCallback=function(v,x,q){var te=T.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,v){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=q+le,v={id:G++,callback:x,priorityLevel:v,startTime:q,expirationTime:le,sortIndex:-1},q>te?(v.sortIndex=q,k(b,v),_(E)===null&&v===_(b)&&(Ee?(dt(Q),Q=-1):Ee=!0,tt(mt,q-te))):(v.sortIndex=le,k(E,v),Oe||ye||(Oe=!0,Ke||(Ke=!0,ue()))),v},T.unstable_shouldYield=It,T.unstable_wrapCallback=function(v){var x=ne;return function(){var q=ne;ne=x;try{return v.apply(this,arguments)}finally{ne=q}}}})(cs)),cs}var bd;function $p(){return bd||(bd=1,ss.exports=Fp()),ss.exports}var rs={exports:{}},Le={};var Sd;function eh(){if(Sd)return Le;Sd=1;var T=fs();function k(E){var b="https://react.dev/errors/"+E;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)b+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+E+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var d={d:{f:_,r:function(){throw Error(k(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},H=Symbol.for("react.portal");function Y(E,b,G){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:O==null?null:""+O,children:E,containerInfo:b,implementation:G}}var P=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function de(E,b){if(E==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Le.createPortal=function(E,b){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(k(299));return Y(E,b,null,G)},Le.flushSync=function(E){var b=P.T,G=d.p;try{if(P.T=null,d.p=2,E)return E()}finally{P.T=b,d.p=G,d.d.f()}},Le.preconnect=function(E,b){typeof E=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(E,b))},Le.prefetchDNS=function(E){typeof E=="string"&&d.d.D(E)},Le.preinit=function(E,b){if(typeof E=="string"&&b&&typeof b.as=="string"){var G=b.as,O=de(G,b.crossOrigin),ne=typeof b.integrity=="string"?b.integrity:void 0,ye=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;G==="style"?d.d.S(E,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:O,integrity:ne,fetchPriority:ye}):G==="script"&&d.d.X(E,{crossOrigin:O,integrity:ne,fetchPriority:ye,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Le.preinitModule=function(E,b){if(typeof E=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var G=de(b.as,b.crossOrigin);d.d.M(E,{crossOrigin:G,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&d.d.M(E)},Le.preload=function(E,b){if(typeof E=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var G=b.as,O=de(G,b.crossOrigin);d.d.L(E,G,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Le.preloadModule=function(E,b){if(typeof E=="string")if(b){var G=de(b.as,b.crossOrigin);d.d.m(E,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:G,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else d.d.m(E)},Le.requestFormReset=function(E){d.d.r(E)},Le.unstable_batchedUpdates=function(E,b){return E(b)},Le.useFormState=function(E,b,G){return P.H.useFormState(E,b,G)},Le.useFormStatus=function(){return P.H.useHostTransitionStatus()},Le.version="19.2.3",Le}var Ad;function th(){if(Ad)return rs.exports;Ad=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(k){console.error(k)}}return T(),rs.exports=eh(),rs.exports}var Cd;function ah(){if(Cd)return Al;Cd=1;var T=$p(),k=fs(),_=th();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function P(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function de(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(Y(e)!==e)throw Error(d(188))}function b(e){var t=e.alternate;if(!t){if(t=Y(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return E(l),e;if(i===n)return E(l),t;i=i.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=i;else{for(var o=!1,u=l.child;u;){if(u===a){o=!0,a=l,n=i;break}if(u===n){o=!0,n=l,a=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===a){o=!0,a=i,n=l;break}if(u===n){o=!0,n=i,a=l;break}u=u.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function G(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=G(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,ne=Symbol.for("react.element"),ye=Symbol.for("react.transitional.element"),Oe=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Xe=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),Ne=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),It=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case Be:return"Profiler";case Xe:return"StrictMode";case mt:return"Suspense";case Ke:return"SuspenseList";case pt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Oe:return"Portal";case Ne:return e.displayName||"Context";case dt:return(e._context.displayName||"Context")+".Consumer";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Ze(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ze(e(t))}catch{}}return null}var tt=Array.isArray,v=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},te=[],le=-1;function r(e){return{current:e}}function C(e){0>le||(e.current=te[le],te[le]=null,le--)}function D(e,t){le++,te[le]=e.current,e.current=t}var N=r(null),B=r(null),V=r(null),ae=r(null);function Qe(e,t){switch(D(V,t),D(B,e),D(N,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jf(t),e=kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(N),D(N,e)}function be(){C(N),C(B),C(V)}function Dn(e){e.memoizedState!==null&&D(ae,e);var t=N.current,a=kf(t,e.type);t!==a&&(D(B,e),D(N,a))}function Cl(e){B.current===e&&(C(N),C(B)),ae.current===e&&(C(ae),yl._currentValue=q)}var Ki,ds;function Ta(e){if(Ki===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||"",ds=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ki+e+ds}var Yi=!1;function Li(e,t){if(!e||Yi)return"";Yi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var h=y}Reflect.construct(e,[],A)}else{try{A.call()}catch(y){h=y}e.call(A.prototype)}}else{try{throw Error()}catch(y){h=y}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var s=o.split(`
`),p=u.split(`
`);for(l=n=0;n<s.length&&!s[n].includes("DetermineComponentFrameRoot");)n++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(n===s.length||l===p.length)for(n=s.length-1,l=p.length-1;1<=n&&0<=l&&s[n]!==p[l];)l--;for(;1<=n&&0<=l;n--,l--)if(s[n]!==p[l]){if(n!==1||l!==1)do if(n--,l--,0>l||s[n]!==p[l]){var g=`
`+s[n].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=n&&0<=l);break}}}finally{Yi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Ed(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Li(e.type,!1);case 11:return Li(e.type.render,!1);case 1:return Li(e.type,!0);case 31:return Ta("Activity");default:return""}}function ms(e){try{var t="",a=null;do t+=Ed(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gi=Object.prototype.hasOwnProperty,Qi=T.unstable_scheduleCallback,Vi=T.unstable_cancelCallback,Dd=T.unstable_shouldYield,wd=T.unstable_requestPaint,at=T.unstable_now,Nd=T.unstable_getCurrentPriorityLevel,ps=T.unstable_ImmediatePriority,hs=T.unstable_UserBlockingPriority,Tl=T.unstable_NormalPriority,Rd=T.unstable_LowPriority,ys=T.unstable_IdlePriority,Md=T.log,Od=T.unstable_setDisableYieldValue,wn=null,nt=null;function Ft(e){if(typeof Md=="function"&&Od(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(wn,e)}catch{}}var lt=Math.clz32?Math.clz32:_d,qd=Math.log,Ud=Math.LN2;function _d(e){return e>>>=0,e===0?32:31-(qd(e)/Ud|0)|0}var zl=256,xl=262144,El=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~i,n!==0?l=za(n):(o&=u,o!==0?l=za(o):a||(a=u&~e,a!==0&&(l=za(a))))):(u=n&~i,u!==0?l=za(u):o!==0?l=za(o):a||(a=n&~e,a!==0&&(l=za(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Nn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gs(){var e=El;return El<<=1,(El&62914560)===0&&(El=4194304),e}function Xi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jd(e,t,a,n,l,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,s=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var g=31-lt(a),A=1<<g;u[g]=0,s[g]=-1;var h=p[g];if(h!==null)for(p[g]=null,g=0;g<h.length;g++){var y=h[g];y!==null&&(y.lane&=-536870913)}a&=~A}n!==0&&vs(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function vs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-lt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function bs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-lt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Ss(e,t){var a=t&-t;return a=(a&42)!==0?1:Zi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function As(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:ud(e.type))}function Cs(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var $t=Math.random().toString(36).slice(2),qe="__reactFiber$"+$t,Je="__reactProps$"+$t,La="__reactContainer$"+$t,Wi="__reactEvents$"+$t,kd="__reactListeners$"+$t,Bd="__reactHandles$"+$t,Ts="__reactResources$"+$t,Mn="__reactMarker$"+$t;function Pi(e){delete e[qe],delete e[Je],delete e[Wi],delete e[kd],delete e[Bd]}function Ga(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[La]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Vf(e);e!==null;){if(a=e[qe])return a;e=Vf(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[qe]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function On(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Va(e){var t=e[Ts];return t||(t=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Mn]=!0}var zs=new Set,xs={};function xa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(xs[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var Kd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Es={},Ds={};function Yd(e){return Gi.call(Ds,e)?!0:Gi.call(Es,e)?!1:Kd.test(e)?Ds[e]=!0:(Es[e]=!0,!1)}function wl(e,t,a){if(Yd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Nl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ld(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=ws(e)?"checked":"value";e._valueTracker=Ld(e,t,""+e[t])}}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ws(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gd=/[\n"\\]/g;function gt(e){return e.replace(Gd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fi(e,t,a,n,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$i(e,o,yt(t)):a!=null?$i(e,o,yt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+yt(u):e.removeAttribute("name")}function Rs(e,t,a,n,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ii(e)}function $i(e,t,a){t==="number"&&Rl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ms(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function Os(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(tt(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ii(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qs(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Us(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&qs(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&qs(e,i,t[i])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Pa=null;function _s(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Je]||null;if(!l)throw Error(d(90));Fi(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ns(n)}break e;case"textarea":Ms(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var no=!1;function Hs(e,t,a){if(no)return e(t,a);no=!0;try{var n=e(t);return n}finally{if(no=!1,(Wa!==null||Pa!==null)&&(vi(),Wa&&(t=Wa,e=Pa,Pa=Wa=null,_s(t),e)))for(t=0;t<e.length;t++)_s(e[t])}}function qn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Je]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=!1;if(_t)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){lo=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{lo=!1}var ea=null,io=null,Ol=null;function js(){if(Ol)return Ol;var e,t=io,a=t.length,n,l="value"in ea?ea.value:ea.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[i-n];n++);return Ol=l.slice(e,1<n?1-n:void 0)}function ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function ks(){return!1}function We(e){function t(a,n,l,i,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ul:ks,this.isPropagationStopped=ks,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=We(Ea),_n=O({},Ea,{view:0,detail:0}),Zd=We(_n),oo,uo,Hn,Hl=O({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(oo=e.screenX-Hn.screenX,uo=e.screenY-Hn.screenY):uo=oo=0,Hn=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),Bs=We(Hl),Jd=O({},Hl,{dataTransfer:0}),Wd=We(Jd),Pd=O({},_n,{relatedTarget:0}),so=We(Pd),Id=O({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=We(Id),$d=O({},Ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=We($d),tm=O({},Ea,{data:0}),Ks=We(tm),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function co(){return im}var om=O({},_n,{key:function(e){if(e.key){var t=am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=We(om),sm=O({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=We(sm),cm=O({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),rm=We(cm),fm=O({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=We(fm),mm=O({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=We(mm),hm=O({},Ea,{newState:0,oldState:0}),ym=We(hm),gm=[9,13,27,32],ro=_t&&"CompositionEvent"in window,jn=null;_t&&"documentMode"in document&&(jn=document.documentMode);var vm=_t&&"TextEvent"in window&&!jn,Ls=_t&&(!ro||jn&&8<jn&&11>=jn),Gs=" ",Qs=!1;function Vs(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function bm(e,t){switch(e){case"compositionend":return Xs(t);case"keypress":return t.which!==32?null:(Qs=!0,Gs);case"textInput":return e=t.data,e===Gs&&Qs?null:e;default:return null}}function Sm(e,t){if(Ia)return e==="compositionend"||!ro&&Vs(e,t)?(e=js(),Ol=io=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ls&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function Js(e,t,a,n){Wa?Pa?Pa.push(n):Pa=[n]:Wa=n,t=xi(t,"onChange"),0<t.length&&(a=new _l("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var kn=null,Bn=null;function Cm(e){Mf(e,0)}function jl(e){var t=On(e);if(Ns(t))return e}function Ws(e,t){if(e==="change")return t}var Ps=!1;if(_t){var fo;if(_t){var mo="oninput"in document;if(!mo){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),mo=typeof Is.oninput=="function"}fo=mo}else fo=!1;Ps=fo&&(!document.documentMode||9<document.documentMode)}function Fs(){kn&&(kn.detachEvent("onpropertychange",$s),Bn=kn=null)}function $s(e){if(e.propertyName==="value"&&jl(Bn)){var t=[];Js(t,Bn,e,ao(e)),Hs(Cm,t)}}function Tm(e,t,a){e==="focusin"?(Fs(),kn=t,Bn=a,kn.attachEvent("onpropertychange",$s)):e==="focusout"&&Fs()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(Bn)}function xm(e,t){if(e==="click")return jl(t)}function Em(e,t){if(e==="input"||e==="change")return jl(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Dm;function Kn(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Gi.call(t,l)||!it(e[l],t[l]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var a=ec(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ec(a)}}function ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Rl(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wm=_t&&"documentMode"in document&&11>=document.documentMode,Fa=null,ho=null,Yn=null,yo=!1;function lc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yo||Fa==null||Fa!==Rl(n)||(n=Fa,"selectionStart"in n&&po(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Yn&&Kn(Yn,n)||(Yn=n,n=xi(ho,"onSelect"),0<n.length&&(t=new _l("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Fa)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},go={},ic={};_t&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function wa(e){if(go[e])return go[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ic)return go[e]=t[a];return e}var oc=wa("animationend"),uc=wa("animationiteration"),sc=wa("animationstart"),Nm=wa("transitionrun"),Rm=wa("transitionstart"),Mm=wa("transitioncancel"),cc=wa("transitionend"),rc=new Map,vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vo.push("scrollEnd");function Et(e,t){rc.set(e,t),xa(t,[e])}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],en=0,bo=0;function Bl(){for(var e=en,t=bo=en=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}i!==0&&fc(a,l,i)}}function Kl(e,t,a,n){vt[en++]=e,vt[en++]=t,vt[en++]=a,vt[en++]=n,bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function So(e,t,a,n){return Kl(e,t,a,n),Yl(e)}function Na(e,t){return Kl(e,null,null,t),Yl(e)}function fc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-lt(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Yl(e){if(50<cl)throw cl=0,Nu=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tn={};function Om(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,n){return new Om(e,t,a,n)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ll(e,t,a,n,l,i){var o=0;if(n=e,typeof e=="function")Ao(e)&&(o=1);else if(typeof e=="string")o=jp(e,a,N.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pt:return e=ot(31,a,t,l),e.elementType=pt,e.lanes=i,e;case Ee:return Ra(a.children,l,i,t);case Xe:o=8,l|=24;break;case Be:return e=ot(12,a,t,l|2),e.elementType=Be,e.lanes=i,e;case mt:return e=ot(13,a,t,l),e.elementType=mt,e.lanes=i,e;case Ke:return e=ot(19,a,t,l),e.elementType=Ke,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:o=10;break e;case dt:o=9;break e;case De:o=11;break e;case Q:o=14;break e;case Ye:o=16,n=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=ot(o,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ra(e,t,a,n){return e=ot(7,e,n,t),e.lanes=a,e}function Co(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function mc(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function To(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=pc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ms(t)},pc.set(e,t),t)}return{value:e,source:t,stack:ms(t)}}var an=[],nn=0,Gl=null,Ln=0,St=[],At=0,ta=null,Nt=1,Rt="";function jt(e,t){an[nn++]=Ln,an[nn++]=Gl,Gl=e,Ln=t}function hc(e,t,a){St[At++]=Nt,St[At++]=Rt,St[At++]=ta,ta=e;var n=Nt;e=Rt;var l=32-lt(n)-1;n&=~(1<<l),a+=1;var i=32-lt(t)+l;if(30<i){var o=l-l%5;i=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Nt=1<<32-lt(t)+l|a<<l|n,Rt=i+e}else Nt=1<<i|a<<l|n,Rt=e}function zo(e){e.return!==null&&(jt(e,1),hc(e,1,0))}function xo(e){for(;e===Gl;)Gl=an[--nn],an[nn]=null,Ln=an[--nn],an[nn]=null;for(;e===ta;)ta=St[--At],St[At]=null,Rt=St[--At],St[At]=null,Nt=St[--At],St[At]=null}function yc(e,t){St[At++]=Nt,St[At++]=Rt,St[At++]=ta,Nt=t.id,Rt=t.overflow,ta=e}var Ue=null,me=null,I=!1,aa=null,Ct=!1,Eo=Error(d(519));function na(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gn(bt(t,e)),Eo}function gc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[qe]=e,t[Je]=n,a){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(a=0;a<fl.length;a++)Z(fl[a],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),Rs(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),Os(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||_f(t.textContent,a)?(n.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),n.onScroll!=null&&Z("scroll",t),n.onScrollEnd!=null&&Z("scrollend",t),n.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||na(e,!0)}function vc(e){for(Ue=e.return;Ue;)switch(Ue.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ue=Ue.return}}function ln(e){if(e!==Ue)return!1;if(!I)return vc(e),I=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qu(e.type,e.memoizedProps)),a=!a),a&&me&&na(e),vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));me=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));me=Qf(e)}else t===27?(t=me,ga(e.type)?(e=Wu,Wu=null,me=e):me=t):me=Ue?zt(e.stateNode.nextSibling):null;return!0}function Ma(){me=Ue=null,I=!1}function Do(){var e=aa;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),aa=null),e}function Gn(e){aa===null?aa=[e]:aa.push(e)}var wo=r(null),Oa=null,kt=null;function la(e,t,a){D(wo,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=wo.current,C(wo)}function No(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ro(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var s=0;s<t.length;s++)if(u.context===t[s]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),No(i.return,a,e),n||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(d(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),No(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function on(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var u=l.type;it(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===ae.current){if(o=l.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}l=l.return}e!==null&&Ro(t,e,a,n),t.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Oa=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return bc(Oa,e)}function Vl(e,t){return Oa===null&&qa(e),bc(e,t)}function bc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(d(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Um=T.unstable_scheduleCallback,_m=T.unstable_NormalPriority,Ce={$$typeof:Ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mo(){return{controller:new qm,data:new Map,refCount:0}}function Qn(e){e.refCount--,e.refCount===0&&Um(_m,function(){e.controller.abort()})}var Vn=null,Oo=0,un=0,sn=null;function Hm(e,t){if(Vn===null){var a=Vn=[];Oo=0,un=_u(),sn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Oo++,t.then(Sc,Sc),t}function Sc(){if(--Oo===0&&Vn!==null){sn!==null&&(sn.status="fulfilled");var e=Vn;Vn=null,un=0,sn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Ac=v.S;v.S=function(e,t){lf=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hm(e,t),Ac!==null&&Ac(e,t)};var Ua=r(null);function qo(){var e=Ua.current;return e!==null?e:fe.pooledCache}function Xl(e,t){t===null?D(Ua,Ua.current):D(Ua,t.pool)}function Cc(){var e=qo();return e===null?null:{parent:Ce._currentValue,pool:e}}var cn=Error(d(460)),Uo=Error(d(474)),Zl=Error(d(542)),Jl={then:function(){}};function Tc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ec(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ec(e),e}throw Ha=t,cn}}function _a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,cn):a}}var Ha=null;function xc(){if(Ha===null)throw Error(d(459));var e=Ha;return Ha=null,e}function Ec(e){if(e===cn||e===Zl)throw Error(d(483))}var rn=null,Xn=0;function Wl(e){var t=Xn;return Xn+=1,rn===null&&(rn=[]),zc(rn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pl(e,t){throw t.$$typeof===ne?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dc(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function l(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,c,m,S){return c===null||c.tag!==6?(c=Co(m,f.mode,S),c.return=f,c):(c=l(c,m),c.return=f,c)}function s(f,c,m,S){var M=m.type;return M===Ee?g(f,c,m.props.children,S,m.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ye&&_a(M)===c.type)?(c=l(c,m.props),Zn(c,m),c.return=f,c):(c=Ll(m.type,m.key,m.props,null,f.mode,S),Zn(c,m),c.return=f,c)}function p(f,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=To(m,f.mode,S),c.return=f,c):(c=l(c,m.children||[]),c.return=f,c)}function g(f,c,m,S,M){return c===null||c.tag!==7?(c=Ra(m,f.mode,S,M),c.return=f,c):(c=l(c,m),c.return=f,c)}function A(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Co(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ye:return m=Ll(c.type,c.key,c.props,null,f.mode,m),Zn(m,c),m.return=f,m;case Oe:return c=To(c,f.mode,m),c.return=f,c;case Ye:return c=_a(c),A(f,c,m)}if(tt(c)||ue(c))return c=Ra(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return A(f,Wl(c),m);if(c.$$typeof===Ne)return A(f,Vl(f,c),m);Pl(f,c)}return null}function h(f,c,m,S){var M=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:u(f,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ye:return m.key===M?s(f,c,m,S):null;case Oe:return m.key===M?p(f,c,m,S):null;case Ye:return m=_a(m),h(f,c,m,S)}if(tt(m)||ue(m))return M!==null?null:g(f,c,m,S,null);if(typeof m.then=="function")return h(f,c,Wl(m),S);if(m.$$typeof===Ne)return h(f,c,Vl(f,m),S);Pl(f,m)}return null}function y(f,c,m,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(m)||null,u(c,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ye:return f=f.get(S.key===null?m:S.key)||null,s(c,f,S,M);case Oe:return f=f.get(S.key===null?m:S.key)||null,p(c,f,S,M);case Ye:return S=_a(S),y(f,c,m,S,M)}if(tt(S)||ue(S))return f=f.get(m)||null,g(c,f,S,M,null);if(typeof S.then=="function")return y(f,c,m,Wl(S),M);if(S.$$typeof===Ne)return y(f,c,m,Vl(c,S),M);Pl(c,S)}return null}function w(f,c,m,S){for(var M=null,F=null,R=c,L=c=0,W=null;R!==null&&L<m.length;L++){R.index>L?(W=R,R=null):W=R.sibling;var $=h(f,R,m[L],S);if($===null){R===null&&(R=W);break}e&&R&&$.alternate===null&&t(f,R),c=i($,c,L),F===null?M=$:F.sibling=$,F=$,R=W}if(L===m.length)return a(f,R),I&&jt(f,L),M;if(R===null){for(;L<m.length;L++)R=A(f,m[L],S),R!==null&&(c=i(R,c,L),F===null?M=R:F.sibling=R,F=R);return I&&jt(f,L),M}for(R=n(R);L<m.length;L++)W=y(R,f,L,m[L],S),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?L:W.key),c=i(W,c,L),F===null?M=W:F.sibling=W,F=W);return e&&R.forEach(function(Ca){return t(f,Ca)}),I&&jt(f,L),M}function U(f,c,m,S){if(m==null)throw Error(d(151));for(var M=null,F=null,R=c,L=c=0,W=null,$=m.next();R!==null&&!$.done;L++,$=m.next()){R.index>L?(W=R,R=null):W=R.sibling;var Ca=h(f,R,$.value,S);if(Ca===null){R===null&&(R=W);break}e&&R&&Ca.alternate===null&&t(f,R),c=i(Ca,c,L),F===null?M=Ca:F.sibling=Ca,F=Ca,R=W}if($.done)return a(f,R),I&&jt(f,L),M;if(R===null){for(;!$.done;L++,$=m.next())$=A(f,$.value,S),$!==null&&(c=i($,c,L),F===null?M=$:F.sibling=$,F=$);return I&&jt(f,L),M}for(R=n(R);!$.done;L++,$=m.next())$=y(R,f,L,$.value,S),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?L:$.key),c=i($,c,L),F===null?M=$:F.sibling=$,F=$);return e&&R.forEach(function(Jp){return t(f,Jp)}),I&&jt(f,L),M}function re(f,c,m,S){if(typeof m=="object"&&m!==null&&m.type===Ee&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ye:e:{for(var M=m.key;c!==null;){if(c.key===M){if(M=m.type,M===Ee){if(c.tag===7){a(f,c.sibling),S=l(c,m.props.children),S.return=f,f=S;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ye&&_a(M)===c.type){a(f,c.sibling),S=l(c,m.props),Zn(S,m),S.return=f,f=S;break e}a(f,c);break}else t(f,c);c=c.sibling}m.type===Ee?(S=Ra(m.props.children,f.mode,S,m.key),S.return=f,f=S):(S=Ll(m.type,m.key,m.props,null,f.mode,S),Zn(S,m),S.return=f,f=S)}return o(f);case Oe:e:{for(M=m.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(f,c.sibling),S=l(c,m.children||[]),S.return=f,f=S;break e}else{a(f,c);break}else t(f,c);c=c.sibling}S=To(m,f.mode,S),S.return=f,f=S}return o(f);case Ye:return m=_a(m),re(f,c,m,S)}if(tt(m))return w(f,c,m,S);if(ue(m)){if(M=ue(m),typeof M!="function")throw Error(d(150));return m=M.call(m),U(f,c,m,S)}if(typeof m.then=="function")return re(f,c,Wl(m),S);if(m.$$typeof===Ne)return re(f,c,Vl(f,m),S);Pl(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(f,c.sibling),S=l(c,m),S.return=f,f=S):(a(f,c),S=Co(m,f.mode,S),S.return=f,f=S),o(f)):a(f,c)}return function(f,c,m,S){try{Xn=0;var M=re(f,c,m,S);return rn=null,M}catch(R){if(R===cn||R===Zl)throw R;var F=ot(29,R,null,f.mode);return F.lanes=S,F.return=f,F}}}var ja=Dc(!0),wc=Dc(!1),ia=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ho(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ee&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Yl(e),fc(e,null,a),t}return Kl(e,n,t,a),Yl(e)}function Jn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,bs(e,a)}}function jo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ko=!1;function Wn(){if(ko){var e=sn;if(e!==null)throw e}}function Pn(e,t,a,n){ko=!1;var l=e.updateQueue;ia=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,p=s.next;s.next=null,o===null?i=p:o.next=p,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==o&&(u===null?g.firstBaseUpdate=p:u.next=p,g.lastBaseUpdate=s))}if(i!==null){var A=l.baseState;o=0,g=p=s=null,u=i;do{var h=u.lane&-536870913,y=h!==u.lane;if(y?(J&h)===h:(n&h)===h){h!==0&&h===un&&(ko=!0),g!==null&&(g=g.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var w=e,U=u;h=t;var re=a;switch(U.tag){case 1:if(w=U.payload,typeof w=="function"){A=w.call(re,A,h);break e}A=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=U.payload,h=typeof w=="function"?w.call(re,A,h):w,h==null)break e;A=O({},A,h);break e;case 2:ia=!0}}h=u.callback,h!==null&&(e.flags|=64,y&&(e.flags|=8192),y=l.callbacks,y===null?l.callbacks=[h]:y.push(h))}else y={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(p=g=y,s=A):g=g.next=y,o|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;y=u,u=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);g===null&&(s=A),l.baseState=s,l.firstBaseUpdate=p,l.lastBaseUpdate=g,i===null&&(l.shared.lanes=0),da|=o,e.lanes=o,e.memoizedState=A}}function Nc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Rc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nc(a[e],t)}var fn=r(null),Il=r(0);function Mc(e,t){e=Jt,D(Il,e),D(fn,t),Jt=e|t.baseLanes}function Bo(){D(Il,Jt),D(fn,fn.current)}function Ko(){Jt=Il.current,C(fn),C(Il)}var ut=r(null),Tt=null;function sa(e){var t=e.alternate;D(Se,Se.current&1),D(ut,e),Tt===null&&(t===null||fn.current!==null||t.memoizedState!==null)&&(Tt=e)}function Yo(e){D(Se,Se.current),D(ut,e),Tt===null&&(Tt=e)}function Oc(e){e.tag===22?(D(Se,Se.current),D(ut,e),Tt===null&&(Tt=e)):ca()}function ca(){D(Se,Se.current),D(ut,ut.current)}function st(e){C(ut),Tt===e&&(Tt=null),C(Se)}var Se=r(0);function Fl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zu(a)||Ju(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,K=null,se=null,Te=null,$l=!1,dn=!1,ka=!1,ei=0,In=0,mn=null,km=0;function ge(){throw Error(d(321))}function Lo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function Go(e,t,a,n,l,i){return Kt=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hr:lu,ka=!1,i=a(n,l),ka=!1,dn&&(i=Uc(t,a,n,l)),qc(e),i}function qc(e){v.H=el;var t=se!==null&&se.next!==null;if(Kt=0,Te=se=K=null,$l=!1,In=0,mn=null,t)throw Error(d(300));e===null||ze||(e=e.dependencies,e!==null&&Ql(e)&&(ze=!0))}function Uc(e,t,a,n){K=e;var l=0;do{if(dn&&(mn=null),In=0,dn=!1,25<=l)throw Error(d(301));if(l+=1,Te=se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=yr,i=t(a,n)}while(dn);return i}function Bm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fn(t):t,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(K.flags|=1024),t}function Qo(){var e=ei!==0;return ei=0,e}function Vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xo(e){if($l){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$l=!1}Kt=0,Te=se=K=null,dn=!1,In=ei=0,mn=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?K.memoizedState=Te=e:Te=Te.next=e,Te}function Ae(){if(se===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=Te===null?K.memoizedState:Te.next;if(t!==null)Te=t,se=e;else{if(e===null)throw K.alternate===null?Error(d(467)):Error(d(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Te===null?K.memoizedState=Te=e:Te=Te.next=e}return Te}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fn(e){var t=In;return In+=1,mn===null&&(mn=[]),e=zc(mn,e,t),t=K,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hr:lu),e}function ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fn(e);if(e.$$typeof===Ne)return _e(e)}throw Error(d(438,String(e)))}function Zo(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=K.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ti(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=It;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Ae();return Jo(t,se,e)}function Jo(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,s=null,p=t,g=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(J&A)===A:(Kt&A)===A){var h=p.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===un&&(g=!0);else if((Kt&h)===h){p=p.next,h===un&&(g=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(u=s=A,o=i):s=s.next=A,K.lanes|=h,da|=h;A=p.action,ka&&a(i,A),i=p.hasEagerState?p.eagerState:a(i,A)}else h={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(u=s=h,o=i):s=s.next=h,K.lanes|=A,da|=A;p=p.next}while(p!==null&&p!==t);if(s===null?o=i:s.next=u,!it(i,e.memoizedState)&&(ze=!0,g&&(a=sn,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=s,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Wo(e){var t=Ae(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);it(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function _c(e,t,a){var n=K,l=Ae(),i=I;if(i){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!it((se||l).memoizedState,a);if(o&&(l.memoizedState=a,ze=!0),l=l.queue,Fo(kc.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,pn(9,{destroy:void 0},jc.bind(null,n,l,a,t),null),fe===null)throw Error(d(349));i||(Kt&127)!==0||Hc(n,t,a)}return a}function Hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=ti(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function jc(e,t,a,n){t.value=a,t.getSnapshot=n,Bc(t)&&Kc(e)}function kc(e,t,a){return a(function(){Bc(t)&&Kc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function Kc(e){var t=Na(e,2);t!==null&&et(t,e,2)}function Po(e){var t=Ve();if(typeof e=="function"){var a=e;if(e=a(),ka){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Yc(e,t,a,n){return e.baseState=a,Jo(e,se,typeof n=="function"?n:Yt)}function Km(e,t,a,n,l){if(oi(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};v.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Lc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Lc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=v.T,o={};v.T=o;try{var u=a(l,n),s=v.S;s!==null&&s(o,u),Gc(e,t,u)}catch(p){Io(e,t,p)}finally{i!==null&&o.types!==null&&(i.types=o.types),v.T=i}}else try{i=a(l,n),Gc(e,t,i)}catch(p){Io(e,t,p)}}function Gc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Qc(e,t,n)},function(n){return Io(e,t,n)}):Qc(e,t,a)}function Qc(e,t,a){t.status="fulfilled",t.value=a,Vc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Lc(e,a)))}function Io(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Vc(t),t=t.next;while(t!==n)}e.action=null}function Vc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xc(e,t){return t}function Zc(e,t){if(I){var a=fe.formState;if(a!==null){e:{var n=K;if(I){if(me){t:{for(var l=me,i=Ct;l.nodeType!==8;){if(!i){l=null;break t}if(l=zt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){me=zt(l.nextSibling),n=l.data==="F!";break e}}na(n)}n=!1}n&&(t=a[0])}}return a=Ve(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},a.queue=n,a=dr.bind(null,K,n),n.dispatch=a,n=Po(!1),i=nu.bind(null,K,!1,n.queue),n=Ve(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Km.bind(null,K,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Jc(e){var t=Ae();return Wc(t,se,e)}function Wc(e,t,a){if(t=Jo(e,t,Xc)[0],e=ni(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fn(t)}catch(o){throw o===cn?Zl:o}else n=t;t=Ae();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(K.flags|=2048,pn(9,{destroy:void 0},Ym.bind(null,l,a),null)),[n,i,e]}function Ym(e,t){e.action=t}function Pc(e){var t=Ae(),a=se;if(a!==null)return Wc(t,a,e);Ae(),t=t.memoizedState,a=Ae();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=K.updateQueue,t===null&&(t=ti(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Ic(){return Ae().memoizedState}function li(e,t,a,n){var l=Ve();K.flags|=e,l.memoizedState=pn(1|t,{destroy:void 0},a,n===void 0?null:n)}function ii(e,t,a,n){var l=Ae();n=n===void 0?null:n;var i=l.memoizedState.inst;se!==null&&n!==null&&Lo(n,se.memoizedState.deps)?l.memoizedState=pn(t,i,a,n):(K.flags|=e,l.memoizedState=pn(1|t,i,a,n))}function Fc(e,t){li(8390656,8,e,t)}function Fo(e,t){ii(2048,8,e,t)}function Lm(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=ti(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $c(e){var t=Ae().memoizedState;return Lm({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function er(e,t){return ii(4,2,e,t)}function tr(e,t){return ii(4,4,e,t)}function ar(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nr(e,t,a){a=a!=null?a.concat([e]):null,ii(4,4,ar.bind(null,t,e),a)}function $o(){}function lr(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Lo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ir(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Lo(t,n[1]))return n[0];if(n=e(),ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n}function eu(e,t,a){return a===void 0||(Kt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=uf(),K.lanes|=e,da|=e,a)}function or(e,t,a,n){return it(a,t)?a:fn.current!==null?(e=eu(e,a,n),it(e,t)||(ze=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(J&261930)===0?(ze=!0,e.memoizedState=a):(e=uf(),K.lanes|=e,da|=e,t)}function ur(e,t,a,n,l){var i=x.p;x.p=i!==0&&8>i?i:8;var o=v.T,u={};v.T=u,nu(e,!1,t,a);try{var s=l(),p=v.S;if(p!==null&&p(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=jm(s,n);$n(e,t,g,ft(e))}else $n(e,t,n,ft(e))}catch(A){$n(e,t,{then:function(){},status:"rejected",reason:A},ft())}finally{x.p=i,o!==null&&u.types!==null&&(o.types=u.types),v.T=o}}function Gm(){}function tu(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=sr(e).queue;ur(e,l,t,q,a===null?Gm:function(){return cr(e),a(n)})}function sr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cr(e){var t=sr(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},ft())}function au(){return _e(yl)}function rr(){return Ae().memoizedState}function fr(){return Ae().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ft();e=oa(a);var n=ua(t,e,a);n!==null&&(et(n,t,a),Jn(n,t,a)),t={cache:Mo()},e.payload=t;return}t=t.return}}function Vm(e,t,a){var n=ft();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(e)?mr(t,a):(a=So(e,t,a,n),a!==null&&(et(a,e,n),pr(a,t,n)))}function dr(e,t,a){var n=ft();$n(e,t,a,n)}function $n(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oi(e))mr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,a);if(l.hasEagerState=!0,l.eagerState=u,it(u,o))return Kl(e,t,l,0),fe===null&&Bl(),!1}catch{}if(a=So(e,t,l,n),a!==null)return et(a,e,n),pr(a,t,n),!0}return!1}function nu(e,t,a,n){if(n={lane:2,revertLane:_u(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oi(e)){if(t)throw Error(d(479))}else t=So(e,a,n,2),t!==null&&et(t,e,2)}function oi(e){var t=e.alternate;return e===K||t!==null&&t===K}function mr(e,t){dn=$l=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,bs(e,a)}}var el={readContext:_e,use:ai,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge};el.useEffectEvent=ge;var hr={readContext:_e,use:ai,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Fc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,li(4194308,4,ar.bind(null,t,e),a)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){li(4,2,e,t)},useMemo:function(e,t){var a=Ve();t=t===void 0?null:t;var n=e();if(ka){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ve();if(a!==void 0){var l=a(t);if(ka){Ft(!0);try{a(t)}finally{Ft(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Vm.bind(null,K,e),[n.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Po(e);var t=e.queue,a=dr.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ve();return eu(a,e,t)},useTransition:function(){var e=Po(!1);return e=ur.bind(null,K,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=K,l=Ve();if(I){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),fe===null)throw Error(d(349));(J&127)!==0||Hc(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Fc(kc.bind(null,n,i,e),[e]),n.flags|=2048,pn(9,{destroy:void 0},jc.bind(null,n,i,a,t),null),a},useId:function(){var e=Ve(),t=fe.identifierPrefix;if(I){var a=Rt,n=Nt;a=(n&~(1<<32-lt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ei++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=km++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:au,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nu.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zo,useCacheRefresh:function(){return Ve().memoizedState=Qm.bind(null,K)},useEffectEvent:function(e){var t=Ve(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},lu={readContext:_e,use:ai,useCallback:lr,useContext:_e,useEffect:Fo,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:tr,useMemo:ir,useReducer:ni,useRef:Ic,useState:function(){return ni(Yt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ae();return or(a,se.memoizedState,e,t)},useTransition:function(){var e=ni(Yt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:_c,useId:rr,useHostTransitionStatus:au,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,t){var a=Ae();return Yc(a,se,e,t)},useMemoCache:Zo,useCacheRefresh:fr};lu.useEffectEvent=$c;var yr={readContext:_e,use:ai,useCallback:lr,useContext:_e,useEffect:Fo,useImperativeHandle:nr,useInsertionEffect:er,useLayoutEffect:tr,useMemo:ir,useReducer:Wo,useRef:Ic,useState:function(){return Wo(Yt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ae();return se===null?eu(a,e,t):or(a,se.memoizedState,e,t)},useTransition:function(){var e=Wo(Yt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:_c,useId:rr,useHostTransitionStatus:au,useFormState:Pc,useActionState:Pc,useOptimistic:function(e,t){var a=Ae();return se!==null?Yc(a,se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zo,useCacheRefresh:fr};yr.useEffectEvent=$c;function iu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ou={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ft(),l=oa(n);l.payload=t,a!=null&&(l.callback=a),t=ua(e,l,n),t!==null&&(et(t,e,n),Jn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ft(),l=oa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ua(e,l,n),t!==null&&(et(t,e,n),Jn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ft(),n=oa(a);n.tag=2,t!=null&&(n.callback=t),t=ua(e,n,a),t!==null&&(et(t,e,a),Jn(t,e,a))}};function gr(e,t,a,n,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(a,n)||!Kn(l,i):!0}function vr(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function br(e){kl(e)}function Sr(e){console.error(e)}function Ar(e){kl(e)}function ui(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Cr(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function uu(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){ui(e,t)},a}function Tr(e){return e=oa(e),e.tag=3,e}function zr(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Cr(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Cr(t,a,n),typeof l!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Xm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&on(t,a,l,!0),a=ut.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?bi():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Jl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ou(e,n,l)),!1;case 22:return a.flags|=65536,n===Jl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ou(e,n,l)),!1}throw Error(d(435,a.tag))}return Ou(e,n,l),bi(),!1}if(I)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Eo&&(e=Error(d(422),{cause:n}),Gn(bt(e,a)))):(n!==Eo&&(t=Error(d(423),{cause:n}),Gn(bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=bt(n,a),l=uu(e.stateNode,n,l),jo(e,l),ve!==4&&(ve=2)),!1;var i=Error(d(520),{cause:n});if(i=bt(i,a),sl===null?sl=[i]:sl.push(i),ve!==4&&(ve=2),t===null)return!0;n=bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=uu(a.stateNode,n,e),jo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Tr(l),zr(l,e,a,n),jo(a,l),!1}a=a.return}while(a!==null);return!1}var su=Error(d(461)),ze=!1;function He(e,t,a,n){t.child=e===null?wc(t,null,a,n):ja(t,e.child,a,n)}function xr(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var o={};for(var u in n)u!=="ref"&&(o[u]=n[u])}else o=n;return qa(t),n=Go(e,t,a,o,i,l),u=Qo(),e!==null&&!ze?(Vo(e,t,l),Lt(e,t,l)):(I&&u&&zo(t),t.flags|=1,He(e,t,n,l),t.child)}function Er(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Ao(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Dr(e,t,i,n,l)):(e=Ll(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!yu(e,l)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Kn,a(o,n)&&e.ref===t.ref)return Lt(e,t,l)}return t.flags|=1,e=Ht(i,n),e.ref=t.ref,e.return=t,t.child=e}function Dr(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Kn(i,n)&&e.ref===t.ref)if(ze=!1,t.pendingProps=n=i,yu(e,l))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Lt(e,t,l)}return cu(e,t,a,n,l)}function wr(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Nr(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xl(t,i!==null?i.cachePool:null),i!==null?Mc(t,i):Bo(),Oc(t);else return n=t.lanes=536870912,Nr(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Xl(t,i.cachePool),Mc(t,i),ca(),t.memoizedState=null):(e!==null&&Xl(t,null),Bo(),ca());return He(e,t,l,a),t.child}function tl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nr(e,t,a,n,l){var i=qo();return i=i===null?null:{parent:Ce._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Xl(t,null),Bo(),Oc(t),e!==null&&on(e,t,n,!0),t.childLanes=l,null}function si(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rr(e,t,a){return ja(t,e.child,null,a),e=si(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function Zm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(I){if(n.mode==="hidden")return e=si(t,n),t.lanes=536870912,tl(null,e);if(Yo(t),(e=me)?(e=Gf(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Nt,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Ue=t,me=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return si(t,n)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Yo(t),l)if(t.flags&256)t.flags&=-257,t=Rr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(ze||on(e,t,a,!1),l=(a&e.childLanes)!==0,ze||l){if(n=fe,n!==null&&(o=Ss(n,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Na(e,o),et(n,e,o),su;bi(),t=Rr(e,t,a)}else e=i.treeContext,me=zt(o.nextSibling),Ue=t,I=!0,aa=null,Ct=!1,e!==null&&yc(t,e),t=si(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ci(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cu(e,t,a,n,l){return qa(t),a=Go(e,t,a,n,void 0,l),n=Qo(),e!==null&&!ze?(Vo(e,t,l),Lt(e,t,l)):(I&&n&&zo(t),t.flags|=1,He(e,t,a,l),t.child)}function Mr(e,t,a,n,l,i){return qa(t),t.updateQueue=null,a=Uc(t,n,a,l),qc(e),n=Qo(),e!==null&&!ze?(Vo(e,t,i),Lt(e,t,i)):(I&&n&&zo(t),t.flags|=1,He(e,t,a,i),t.child)}function Or(e,t,a,n,l){if(qa(t),t.stateNode===null){var i=tn,o=a.contextType;typeof o=="object"&&o!==null&&(i=_e(o)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},_o(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?_e(o):tn,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(iu(t,a,o,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ou.enqueueReplaceState(i,i.state,null),Pn(t,n,i,l),Wn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,s=Ba(a,u);i.props=s;var p=i.context,g=a.contextType;o=tn,typeof g=="object"&&g!==null&&(o=_e(g));var A=a.getDerivedStateFromProps;g=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==o)&&vr(t,i,n,o),ia=!1;var h=t.memoizedState;i.state=h,Pn(t,n,i,l),Wn(),p=t.memoizedState,u||h!==p||ia?(typeof A=="function"&&(iu(t,a,A,n),p=t.memoizedState),(s=ia||gr(t,a,s,n,h,p,o))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),i.props=n,i.state=p,i.context=o,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Ho(e,t),o=t.memoizedProps,g=Ba(a,o),i.props=g,A=t.pendingProps,h=i.context,p=a.contextType,s=tn,typeof p=="object"&&p!==null&&(s=_e(p)),u=a.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==A||h!==s)&&vr(t,i,n,s),ia=!1,h=t.memoizedState,i.state=h,Pn(t,n,i,l),Wn();var y=t.memoizedState;o!==A||h!==y||ia||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof u=="function"&&(iu(t,a,u,n),y=t.memoizedState),(g=ia||gr(t,a,g,n,h,y,s)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=s,n=g):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,ci(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=ja(t,e.child,null,l),t.child=ja(t,null,a,l)):He(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Lt(e,t,l),e}function qr(e,t,a,n){return Ma(),t.flags|=256,He(e,t,a,n),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fu(e){return{baseLanes:e,cachePool:Cc()}}function du(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=rt),e}function Ur(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(I){if(l?sa(t):ca(),(e=me)?(e=Gf(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Nt,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Ue=t,me=null)):e=null,e===null)throw na(t);return Ju(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,l?(ca(),l=t.mode,u=ri({mode:"hidden",children:u},l),n=Ra(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=fu(a),n.childLanes=du(e,o,a),t.memoizedState=ru,tl(null,n)):(sa(t),mu(t,u))}var s=e.memoizedState;if(s!==null&&(u=s.dehydrated,u!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=pu(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),u=n.fallback,l=t.mode,n=ri({mode:"visible",children:n.children},l),u=Ra(u,l,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,ja(t,e.child,null,a),n=t.child,n.memoizedState=fu(a),n.childLanes=du(e,o,a),t.memoizedState=ru,t=tl(null,n));else if(sa(t),Ju(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var p=o.dgst;o=p,n=Error(d(419)),n.stack="",n.digest=o,Gn({value:n,source:null,stack:null}),t=pu(e,t,a)}else if(ze||on(e,t,a,!1),o=(a&e.childLanes)!==0,ze||o){if(o=fe,o!==null&&(n=Ss(o,a),n!==0&&n!==s.retryLane))throw s.retryLane=n,Na(e,n),et(o,e,n),su;Zu(u)||bi(),t=pu(e,t,a)}else Zu(u)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,me=zt(u.nextSibling),Ue=t,I=!0,aa=null,Ct=!1,e!==null&&yc(t,e),t=mu(t,n.children),t.flags|=4096);return t}return l?(ca(),u=n.fallback,l=t.mode,s=e.child,p=s.sibling,n=Ht(s,{mode:"hidden",children:n.children}),n.subtreeFlags=s.subtreeFlags&65011712,p!==null?u=Ht(p,u):(u=Ra(u,l,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,tl(null,n),n=t.child,u=e.child.memoizedState,u===null?u=fu(a):(l=u.cachePool,l!==null?(s=Ce._currentValue,l=l.parent!==s?{parent:s,pool:s}:l):l=Cc(),u={baseLanes:u.baseLanes|a,cachePool:l}),n.memoizedState=u,n.childLanes=du(e,o,a),t.memoizedState=ru,tl(e.child,n)):(sa(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function mu(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function pu(e,t,a){return ja(t,e.child,null,a),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _r(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),No(e.return,t,a)}function hu(e,t,a,n,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l,o.treeForkCount=i)}function Hr(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var o=Se.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,D(Se,o),He(e,t,n,a),n=I?Ln:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_r(e,a,t);else if(e.tag===19)_r(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),hu(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Fl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}hu(t,!0,a,null,i,n);break;case"together":hu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Lt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(on(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Jm(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),la(t,Ce,e.memoizedState.cache),Ma();break;case 27:case 5:Dn(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ur(e,t,a):(sa(t),e=Lt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(on(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Hr(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(Se,Se.current),n)break;return null;case 22:return t.lanes=0,wr(e,t,a,t.pendingProps);case 24:la(t,Ce,e.memoizedState.cache)}return Lt(e,t,a)}function jr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!yu(e,a)&&(t.flags&128)===0)return ze=!1,Jm(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,I&&(t.flags&1048576)!==0&&hc(t,Ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")Ao(e)?(n=Ba(e,n),t.tag=1,t=Or(null,t,e,n,a)):(t.tag=0,t=cu(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===De){t.tag=11,t=xr(null,t,e,n,a);break e}else if(l===Q){t.tag=14,t=Er(null,t,e,n,a);break e}}throw t=Ze(e)||e,Error(d(306,t,""))}}return t;case 0:return cu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ba(n,t.pendingProps),Or(e,t,n,l,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Ho(e,t),Pn(t,n,null,a);var o=t.memoizedState;if(n=o.cache,la(t,Ce,n),n!==i.cache&&Ro(t,[Ce],a,!0),Wn(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qr(e,t,n,a);break e}else if(n!==l){l=bt(Error(d(424)),t),Gn(l),t=qr(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=zt(e.firstChild),Ue=t,I=!0,aa=null,Ct=!0,a=wc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ma(),n===l){t=Lt(e,t,a);break e}He(e,t,n,a)}t=t.child}return t;case 26:return ci(e,t),e===null?(a=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=a:I||(a=t.type,e=t.pendingProps,n=Ei(V.current).createElement(a),n[qe]=t,n[Je]=e,je(n,a,e),Re(n),t.stateNode=n):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&I&&(n=t.stateNode=Xf(t.type,t.pendingProps,V.current),Ue=t,Ct=!0,l=me,ga(t.type)?(Wu=l,me=zt(n.firstChild)):me=l),He(e,t,t.pendingProps.children,a),ci(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((l=n=me)&&(n=zp(n,t.type,t.pendingProps,Ct),n!==null?(t.stateNode=n,Ue=t,me=zt(n.firstChild),Ct=!1,l=!0):l=!1),l||na(t)),Dn(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,Qu(l,i)?n=null:o!==null&&Qu(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=Go(e,t,Bm,null,null,a),yl._currentValue=l),ci(e,t),He(e,t,n,a),t.child;case 6:return e===null&&I&&((e=a=me)&&(a=xp(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,Ue=t,me=null,e=!0):e=!1),e||na(t)),null;case 13:return Ur(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ja(t,null,n,a):He(e,t,n,a),t.child;case 11:return xr(e,t,t.type,t.pendingProps,a);case 7:return He(e,t,t.pendingProps,a),t.child;case 8:return He(e,t,t.pendingProps.children,a),t.child;case 12:return He(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,la(t,t.type,n.value),He(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,qa(t),l=_e(l),n=n(l),t.flags|=1,He(e,t,n,a),t.child;case 14:return Er(e,t,t.type,t.pendingProps,a);case 15:return Dr(e,t,t.type,t.pendingProps,a);case 19:return Hr(e,t,a);case 31:return Zm(e,t,a);case 22:return wr(e,t,a,t.pendingProps);case 24:return qa(t),n=_e(Ce),e===null?(l=qo(),l===null&&(l=fe,i=Mo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},_o(t),la(t,Ce,l)):((e.lanes&a)!==0&&(Ho(e,t),Pn(t,null,null,a),Wn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),la(t,Ce,n)):(n=i.cache,la(t,Ce,n),n!==l.cache&&Ro(t,[Ce],a,!0))),He(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Gt(e){e.flags|=4}function gu(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ff())e.flags|=8192;else throw Ha=Jl,Uo}else e.flags&=-16777217}function kr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ed(t))if(ff())e.flags|=8192;else throw Ha=Jl,Uo}function fi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gs():536870912,e.lanes|=t,vn|=t)}function al(e,t){if(!I)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Wm(e,t,a){var n=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(Ce),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ln(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Do())),pe(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Gt(t),i!==null?(pe(t),kr(t,i)):(pe(t),gu(t,l,null,n,a))):i?i!==e.memoizedState?(Gt(t),pe(t),kr(t,i)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Gt(t),pe(t),gu(t,l,e,n,a)),null;case 27:if(Cl(t),a=V.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return pe(t),null}e=N.current,ln(t)?gc(t):(e=Xf(l,n,a),t.stateNode=e,Gt(t))}return pe(t),null;case 5:if(Cl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return pe(t),null}if(i=N.current,ln(t))gc(t);else{var o=Ei(V.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(l,{is:n.is}):o.createElement(l)}}i[qe]=t,i[Je]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(je(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gt(t)}}return pe(t),gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=V.current,ln(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ue,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||_f(e.nodeValue,a)),e||na(t,!0)}else e=Ei(e).createTextNode(n),e[qe]=t,t.stateNode=e}return pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=ln(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qe]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else a=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(d(558))}return pe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[qe]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else l=Do(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fi(t,t.updateQueue),pe(t),null);case 4:return be(),e===null&&Bu(t.stateNode.containerInfo),pe(t),null;case 10:return Bt(t.type),pe(t),null;case 19:if(C(Se),n=t.memoizedState,n===null)return pe(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)al(n,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Fl(e),i!==null){for(t.flags|=128,al(n,!1),e=i.updateQueue,t.updateQueue=e,fi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dc(a,e),a=a.sibling;return D(Se,Se.current&1|2),I&&jt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&at()>yi&&(t.flags|=128,l=!0,al(n,!1),t.lanes=4194304)}else{if(!l)if(e=Fl(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,fi(t,e),al(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!I)return pe(t),null}else 2*at()-n.renderingStartTime>yi&&a!==536870912&&(t.flags|=128,l=!0,al(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=at(),e.sibling=null,a=Se.current,D(Se,l?a&1|2:a&1),I&&jt(t,n.treeForkCount),e):(pe(t),null);case 22:case 23:return st(t),Ko(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),a=t.updateQueue,a!==null&&fi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&C(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Ce),pe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Pm(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Ce),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Cl(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Se),null;case 4:return be(),null;case 10:return Bt(t.type),null;case 22:case 23:return st(t),Ko(),e!==null&&C(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Ce),null;case 25:return null;default:return null}}function Br(e,t){switch(xo(t),t.tag){case 3:Bt(Ce),be();break;case 26:case 27:case 5:Cl(t);break;case 4:be();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:C(Se);break;case 10:Bt(t.type);break;case 22:case 23:st(t),Ko(),e!==null&&C(Ua);break;case 24:Bt(Ce)}}function nl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,o=a.inst;n=i(),o.destroy=n}a=a.next}while(a!==l)}}catch(u){oe(t,t.return,u)}}function ra(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var o=n.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var s=a,p=u;try{p()}catch(g){oe(l,s,g)}}}n=n.next}while(n!==i)}}catch(g){oe(t,t.return,g)}}function Kr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Rc(t,a)}catch(n){oe(e,e.return,n)}}}function Yr(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){oe(e,t,n)}}function ll(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){oe(e,t,l)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){oe(e,t,l)}else a.current=null}function Lr(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){oe(e,e.return,l)}}function vu(e,t,a){try{var n=e.stateNode;vp(n,e.type,a,t),n[Je]=t}catch(l){oe(e,e.return,l)}}function Gr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Su(e,t,a),e=e.sibling;e!==null;)Su(e,t,a),e=e.sibling}function di(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(di(e,t,a),e=e.sibling;e!==null;)di(e,t,a),e=e.sibling}function Qr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);je(t,n,a),t[qe]=e,t[Je]=a}catch(i){oe(e,e.return,i)}}var Qt=!1,xe=!1,Au=!1,Vr=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Im(e,t){if(e=e.containerInfo,Lu=qi,e=nc(e),po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,u=-1,s=-1,p=0,g=0,A=e,h=null;t:for(;;){for(var y;A!==a||l!==0&&A.nodeType!==3||(u=o+l),A!==i||n!==0&&A.nodeType!==3||(s=o+n),A.nodeType===3&&(o+=A.nodeValue.length),(y=A.firstChild)!==null;)h=A,A=y;for(;;){if(A===e)break t;if(h===a&&++p===l&&(u=o),h===i&&++g===n&&(s=o),(y=A.nextSibling)!==null)break;A=h,h=A.parentNode}A=y}a=u===-1||s===-1?null:{start:u,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gu={focusedElem:e,selectionRange:a},qi=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var w=Ba(a.type,l);e=n.getSnapshotBeforeUpdate(w,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(U){oe(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Xr(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&nl(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){oe(a,a.return,o)}else{var l=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){oe(a,a.return,o)}}n&64&&Kr(a),n&512&&ll(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Rc(e,t)}catch(o){oe(a,a.return,o)}}break;case 27:t===null&&n&4&&Qr(a);case 26:case 5:Xt(e,a),t===null&&n&4&&Lr(a),n&512&&ll(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&Wr(e,a);break;case 13:Xt(e,a),n&4&&Pr(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=op.bind(null,a),Ep(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||xe,l=Qt;var i=xe;Qt=n,(xe=t)&&!i?Zt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Qt=l,xe=i}break;case 30:break;default:Xt(e,a)}}function Zr(e){var t=e.alternate;t!==null&&(e.alternate=null,Zr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Pe=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Jr(e,t,a),a=a.sibling}function Jr(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(wn,a)}catch{}switch(a.tag){case 26:xe||Mt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xe||Mt(a,t);var n=he,l=Pe;ga(a.type)&&(he=a.stateNode,Pe=!1),Vt(e,t,a),ml(a.stateNode),he=n,Pe=l;break;case 5:xe||Mt(a,t);case 6:if(n=he,l=Pe,he=null,Vt(e,t,a),he=n,Pe=l,he!==null)if(Pe)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(a.stateNode)}catch(i){oe(a,t,i)}else try{he.removeChild(a.stateNode)}catch(i){oe(a,t,i)}break;case 18:he!==null&&(Pe?(e=he,Yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),En(e)):Yf(he,a.stateNode));break;case 4:n=he,l=Pe,he=a.stateNode.containerInfo,Pe=!0,Vt(e,t,a),he=n,Pe=l;break;case 0:case 11:case 14:case 15:ra(2,a,t),xe||ra(4,a,t),Vt(e,t,a);break;case 1:xe||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Yr(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:xe=(n=xe)||a.memoizedState!==null,Vt(e,t,a),xe=n;break;default:Vt(e,t,a)}}function Wr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{En(e)}catch(a){oe(t,t.return,a)}}}function Pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{En(e)}catch(a){oe(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vr),t;default:throw Error(d(435,e.tag))}}function mi(e,t){var a=Fm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=up.bind(null,e,n);n.then(l,l)}})}function Ie(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ga(u.type)){he=u.stateNode,Pe=!1;break e}break;case 5:he=u.stateNode,Pe=!1;break e;case 3:case 4:he=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(he===null)throw Error(d(160));Jr(i,o,l),he=null,Pe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ir(t,e),t=t.sibling}var Dt=null;function Ir(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),Fe(e),n&4&&(ra(3,e,e.return),nl(3,e),ra(5,e,e.return));break;case 1:Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Dt;if(Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Mn]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),je(i,n,a),i[qe]=e,Re(i),n=i;break e;case"link":var o=Ff("link","href",l).get(n+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(n),je(i,n,a),l.head.appendChild(i);break;case"meta":if(o=Ff("meta","content",l).get(n+(a.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break t}}i=l.createElement(n),je(i,n,a),l.head.appendChild(i);break;default:throw Error(d(468,n))}i[qe]=e,Re(i),n=i}e.stateNode=n}else $f(l,e.type,e.stateNode);else e.stateNode=If(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?$f(l,e.type,e.stateNode):If(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),a!==null&&n&4&&vu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),e.flags&32){l=e.stateNode;try{Ja(l,"")}catch(w){oe(e,e.return,w)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,vu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Au=!0);break;case 6:if(Ie(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(w){oe(e,e.return,w)}}break;case 3:if(Ni=null,l=Dt,Dt=Di(t.containerInfo),Ie(t,e),Dt=l,Fe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(w){oe(e,e.return,w)}Au&&(Au=!1,Fr(e));break;case 4:n=Dt,Dt=Di(e.stateNode.containerInfo),Ie(t,e),Fe(e),Dt=n;break;case 12:Ie(t,e),Fe(e);break;case 31:Ie(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mi(e,n)));break;case 13:Ie(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=at()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mi(e,n)));break;case 22:l=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,p=Qt,g=xe;if(Qt=p||l,xe=g||s,Ie(t,e),xe=g,Qt=p,Fe(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||s||Qt||xe||Ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(i=s.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=s.stateNode;var A=s.memoizedProps.style,h=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(w){oe(s,s.return,w)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=l?"":s.memoizedProps}catch(w){oe(s,s.return,w)}}}else if(t.tag===18){if(a===null){s=t;try{var y=s.stateNode;l?Lf(y,!0):Lf(s.stateNode,!1)}catch(w){oe(s,s.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,mi(e,a))));break;case 19:Ie(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,mi(e,n)));break;case 30:break;case 21:break;default:Ie(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Gr(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,i=bu(e);di(e,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(Ja(o,""),a.flags&=-33);var u=bu(e);di(e,u,o);break;case 3:case 4:var s=a.stateNode.containerInfo,p=bu(e);Su(e,p,s);break;default:throw Error(d(161))}}catch(g){oe(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xr(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ka(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yr(t,t.return,a),Ka(t);break;case 27:ml(t.stateNode);case 26:case 5:Mt(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function Zt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(l,i,a),nl(4,i);break;case 1:if(Zt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){oe(n,n.return,p)}if(n=i,l=n.updateQueue,l!==null){var u=n.stateNode;try{var s=l.shared.hiddenCallbacks;if(s!==null)for(l.shared.hiddenCallbacks=null,l=0;l<s.length;l++)Nc(s[l],u)}catch(p){oe(n,n.return,p)}}a&&o&64&&Kr(i),ll(i,i.return);break;case 27:Qr(i);case 26:case 5:Zt(l,i,a),a&&n===null&&o&4&&Lr(i),ll(i,i.return);break;case 12:Zt(l,i,a);break;case 31:Zt(l,i,a),a&&o&4&&Wr(l,i);break;case 13:Zt(l,i,a),a&&o&4&&Pr(l,i);break;case 22:i.memoizedState===null&&Zt(l,i,a),ll(i,i.return);break;case 30:break;default:Zt(l,i,a)}t=t.sibling}}function Cu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qn(a))}function Tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e))}function wt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$r(e,t,a,n),t=t.sibling}function $r(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,a,n),l&2048&&nl(9,t);break;case 1:wt(e,t,a,n);break;case 3:wt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e)));break;case 12:if(l&2048){wt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){oe(t,t.return,s)}}else wt(e,t,a,n);break;case 31:wt(e,t,a,n);break;case 13:wt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,a,n):il(e,t):i._visibility&2?wt(e,t,a,n):(i._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Cu(o,t);break;case 24:wt(e,t,a,n),l&2048&&Tu(t.alternate,t);break;default:wt(e,t,a,n)}}function hn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=a,s=n,p=o.flags;switch(o.tag){case 0:case 11:case 15:hn(i,o,u,s,l),nl(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?hn(i,o,u,s,l):il(i,o):(g._visibility|=2,hn(i,o,u,s,l)),l&&p&2048&&Cu(o.alternate,o);break;case 24:hn(i,o,u,s,l),l&&p&2048&&Tu(o.alternate,o);break;default:hn(i,o,u,s,l)}t=t.sibling}}function il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:il(a,n),l&2048&&Cu(n.alternate,n);break;case 24:il(a,n),l&2048&&Tu(n.alternate,n);break;default:il(a,n)}t=t.sibling}}var ol=8192;function yn(e,t,a){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)ef(e,t,a),e=e.sibling}function ef(e,t,a){switch(e.tag){case 26:yn(e,t,a),e.flags&ol&&e.memoizedState!==null&&kp(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:yn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Di(e.stateNode.containerInfo),yn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ol,ol=16777216,yn(e,t,a),ol=n):yn(e,t,a));break;default:yn(e,t,a)}}function tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nf(n,e)}tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&ra(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):ul(e);break;default:ul(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nf(n,e)}tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),pi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function nf(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Me=n;else e:for(a=e;Me!==null;){n=Me;var l=n.sibling,i=n.return;if(Zr(n),n===a){Me=null;break e}if(l!==null){l.return=i,Me=l;break e}Me=i}}}var $m={getCacheForType:function(e){var t=_e(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return _e(Ce).controller.signal}},ep=typeof WeakMap=="function"?WeakMap:Map,ee=0,fe=null,X=null,J=0,ie=0,ct=null,fa=!1,gn=!1,zu=!1,Jt=0,ve=0,da=0,Ya=0,xu=0,rt=0,vn=0,sl=null,$e=null,Eu=!1,hi=0,lf=0,yi=1/0,gi=null,ma=null,we=0,pa=null,bn=null,Wt=0,Du=0,wu=null,of=null,cl=0,Nu=null;function ft(){return(ee&2)!==0&&J!==0?J&-J:v.T!==null?_u():As()}function uf(){if(rt===0)if((J&536870912)===0||I){var e=xl;xl<<=1,(xl&3932160)===0&&(xl=262144),rt=e}else rt=536870912;return e=ut.current,e!==null&&(e.flags|=32),rt}function et(e,t,a){(e===fe&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ha(e,J,rt,!1)),Rn(e,a),((ee&2)===0||e!==fe)&&(e===fe&&((ee&2)===0&&(Ya|=a),ve===4&&ha(e,J,rt,!1)),Ot(e))}function sf(e,t,a){if((ee&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Nn(e,t),l=n?np(e,t):Mu(e,t,!0),i=n;do{if(l===0){gn&&!n&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!tp(a)){l=Mu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=sl;var s=u.current.memoizedState.isDehydrated;if(s&&(Sn(u,o).flags|=256),o=Mu(u,o,!1),o!==2){if(zu&&!s){u.errorRecoveryDisabledLanes|=i,Ya|=i,l=4;break e}i=$e,$e=l,i!==null&&($e===null?$e=i:$e.push.apply($e,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Sn(e,0),ha(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:ha(n,t,rt,!fa);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=hi+300-at(),10<l)){if(ha(n,t,rt,!fa),Dl(n,0,!0)!==0)break e;Wt=t,n.timeoutHandle=Bf(cf.bind(null,n,a,$e,gi,Eu,t,rt,Ya,vn,fa,i,"Throttled",-0,0),l);break e}cf(n,a,$e,gi,Eu,t,rt,Ya,vn,fa,i,null,-0,0)}}break}while(!0);Ot(e)}function cf(e,t,a,n,l,i,o,u,s,p,g,A,h,y){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ef(t,i,A);var w=(i&62914560)===i?hi-at():(i&4194048)===i?lf-at():0;if(w=Bp(A,w),w!==null){Wt=i,e.cancelPendingCommit=w(gf.bind(null,e,t,i,a,n,l,o,u,s,g,A,null,h,y)),ha(e,i,o,!p);return}}gf(e,t,i,a,n,l,o,u,s)}function tp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!it(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,n){t&=~xu,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-lt(l),o=1<<i;n[i]=-1,l&=~o}a!==0&&vs(e,a,t)}function vi(){return(ee&6)===0?(rl(0),!1):!0}function Ru(){if(X!==null){if(ie===0)var e=X.return;else e=X,kt=Oa=null,Xo(e),rn=null,Xn=0,e=X;for(;e!==null;)Br(e.alternate,e),e=e.return;X=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,Ru(),fe=e,X=a=Ht(e.current,null),J=t,ie=0,ct=null,fa=!1,gn=Nn(e,t),zu=!1,vn=rt=xu=Ya=da=ve=0,$e=sl=null,Eu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-lt(n),i=1<<l;t|=e[l],n&=~i}return Jt=t,Bl(),a}function rf(e,t){K=null,v.H=el,t===cn||t===Zl?(t=xc(),ie=3):t===Uo?(t=xc(),ie=4):ie=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,X===null&&(ve=1,ui(e,bt(t,e.current)))}function ff(){var e=ut.current;return e===null?!0:(J&4194048)===J?Tt===null:(J&62914560)===J||(J&536870912)!==0?e===Tt:!1}function df(){var e=v.H;return v.H=el,e===null?el:e}function mf(){var e=v.A;return v.A=$m,e}function bi(){ve=4,fa||(J&4194048)!==J&&ut.current!==null||(gn=!0),(da&134217727)===0&&(Ya&134217727)===0||fe===null||ha(fe,J,rt,!1)}function Mu(e,t,a){var n=ee;ee|=2;var l=df(),i=mf();(fe!==e||J!==t)&&(gi=null,Sn(e,t)),t=!1;var o=ve;e:do try{if(ie!==0&&X!==null){var u=X,s=ct;switch(ie){case 8:Ru(),o=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var p=ie;if(ie=0,ct=null,An(e,u,s,p),a&&gn){o=0;break e}break;default:p=ie,ie=0,ct=null,An(e,u,s,p)}}ap(),o=ve;break}catch(g){rf(e,g)}while(!0);return t&&e.shellSuspendCounter++,kt=Oa=null,ee=n,v.H=l,v.A=i,X===null&&(fe=null,J=0,Bl()),o}function ap(){for(;X!==null;)pf(X)}function np(e,t){var a=ee;ee|=2;var n=df(),l=mf();fe!==e||J!==t?(gi=null,yi=at()+500,Sn(e,t)):gn=Nn(e,t);e:do try{if(ie!==0&&X!==null){t=X;var i=ct;t:switch(ie){case 1:ie=0,ct=null,An(e,t,i,1);break;case 2:case 9:if(Tc(i)){ie=0,ct=null,hf(t);break}t=function(){ie!==2&&ie!==9||fe!==e||(ie=7),Ot(e)},i.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:Tc(i)?(ie=0,ct=null,hf(t)):(ie=0,ct=null,An(e,t,i,7));break;case 5:var o=null;switch(X.tag){case 26:o=X.memoizedState;case 5:case 27:var u=X;if(o?ed(o):u.stateNode.complete){ie=0,ct=null;var s=u.sibling;if(s!==null)X=s;else{var p=u.return;p!==null?(X=p,Si(p)):X=null}break t}}ie=0,ct=null,An(e,t,i,5);break;case 6:ie=0,ct=null,An(e,t,i,6);break;case 8:Ru(),ve=6;break e;default:throw Error(d(462))}}lp();break}catch(g){rf(e,g)}while(!0);return kt=Oa=null,v.H=n,v.A=l,ee=a,X!==null?0:(fe=null,J=0,Bl(),ve)}function lp(){for(;X!==null&&!Dd();)pf(X)}function pf(e){var t=jr(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Si(e):X=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mr(a,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Mr(a,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Xo(t);default:Br(a,t),t=X=dc(t,Jt),t=jr(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?Si(e):X=t}function An(e,t,a,n){kt=Oa=null,Xo(t),rn=null,Xn=0;var l=t.return;try{if(Xm(e,l,t,a,J)){ve=1,ui(e,bt(a,e.current)),X=null;return}}catch(i){if(l!==null)throw X=l,i;ve=1,ui(e,bt(a,e.current)),X=null;return}t.flags&32768?(I||n===1?e=!0:gn||(J&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=ut.current,n!==null&&n.tag===13&&(n.flags|=16384))),yf(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){yf(t,fa);return}e=t.return;var a=Wm(t.alternate,t,Jt);if(a!==null){X=a;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ve===0&&(ve=5)}function yf(e,t){do{var a=Pm(e.alternate,e);if(a!==null){a.flags&=32767,X=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=a}while(e!==null);ve=6,X=null}function gf(e,t,a,n,l,i,o,u,s){e.cancelPendingCommit=null;do Ai();while(we!==0);if((ee&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=bo,jd(e,a,i,o,u,s),e===fe&&(X=fe=null,J=0),bn=t,pa=e,Wt=a,Du=i,wu=l,of=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sp(Tl,function(){return Cf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,l=x.p,x.p=2,o=ee,ee|=4;try{Im(e,t,a)}finally{ee=o,x.p=l,v.T=n}}we=1,vf(),bf(),Sf()}}function vf(){if(we===1){we=0;var e=pa,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var l=ee;ee|=4;try{Ir(t,e);var i=Gu,o=nc(e.containerInfo),u=i.focusedElem,s=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&ac(u.ownerDocument.documentElement,u)){if(s!==null&&po(u)){var p=s.start,g=s.end;if(g===void 0&&(g=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(g,u.value.length);else{var A=u.ownerDocument||document,h=A&&A.defaultView||window;if(h.getSelection){var y=h.getSelection(),w=u.textContent.length,U=Math.min(s.start,w),re=s.end===void 0?U:Math.min(s.end,w);!y.extend&&U>re&&(o=re,re=U,U=o);var f=tc(u,U),c=tc(u,re);if(f&&c&&(y.rangeCount!==1||y.anchorNode!==f.node||y.anchorOffset!==f.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var m=A.createRange();m.setStart(f.node,f.offset),y.removeAllRanges(),U>re?(y.addRange(m),y.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),y.addRange(m))}}}}for(A=[],y=u;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var S=A[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}qi=!!Lu,Gu=Lu=null}finally{ee=l,x.p=n,v.T=a}}e.current=t,we=2}}function bf(){if(we===2){we=0;var e=pa,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var l=ee;ee|=4;try{Xr(e,t.alternate,t)}finally{ee=l,x.p=n,v.T=a}}we=3}}function Sf(){if(we===4||we===3){we=0,wd();var e=pa,t=bn,a=Wt,n=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?we=5:(we=0,bn=pa=null,Af(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ma=null),Ji(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,l=x.p,x.p=2,v.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var u=n[o];i(u.value,{componentStack:u.stack})}}finally{v.T=t,x.p=l}}(Wt&3)!==0&&Ai(),Ot(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Nu?cl++:(cl=0,Nu=e):cl=0,rl(0)}}function Af(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qn(t)))}function Ai(){return vf(),bf(),Sf(),Cf()}function Cf(){if(we!==5)return!1;var e=pa,t=Du;Du=0;var a=Ji(Wt),n=v.T,l=x.p;try{x.p=32>a?32:a,v.T=null,a=wu,wu=null;var i=pa,o=Wt;if(we=0,bn=pa=null,Wt=0,(ee&6)!==0)throw Error(d(331));var u=ee;if(ee|=4,af(i.current),$r(i,i.current,o,a),ee=u,rl(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(wn,i)}catch{}return!0}finally{x.p=l,v.T=n,Af(e,t)}}function Tf(e,t,a){t=bt(a,t),t=uu(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Rn(e,2),Ot(e))}function oe(e,t,a){if(e.tag===3)Tf(e,e,a);else for(;t!==null;){if(t.tag===3){Tf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=bt(a,e),a=Tr(2),n=ua(t,a,2),n!==null&&(zr(a,n,t,e),Rn(n,2),Ot(n));break}}t=t.return}}function Ou(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ep;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(zu=!0,l.add(a),e=ip.bind(null,e,t,a),t.then(e,e))}function ip(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fe===e&&(J&a)===a&&(ve===4||ve===3&&(J&62914560)===J&&300>at()-hi?(ee&2)===0&&Sn(e,0):xu|=a,vn===J&&(vn=0)),Ot(e)}function zf(e,t){t===0&&(t=gs()),e=Na(e,t),e!==null&&(Rn(e,t),Ot(e))}function op(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),zf(e,a)}function up(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),zf(e,a)}function sp(e,t){return Qi(e,t)}var Ci=null,Cn=null,qu=!1,Ti=!1,Uu=!1,ya=0;function Ot(e){e!==Cn&&e.next===null&&(Cn===null?Ci=Cn=e:Cn=Cn.next=e),Ti=!0,qu||(qu=!0,rp())}function rl(e,t){if(!Uu&&Ti){Uu=!0;do for(var a=!1,n=Ci;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var o=n.suspendedLanes,u=n.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,wf(n,i))}else i=J,i=Dl(n,n===fe?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Nn(n,i)||(a=!0,wf(n,i));n=n.next}while(a);Uu=!1}}function cp(){xf()}function xf(){Ti=qu=!1;var e=0;ya!==0&&Sp()&&(e=ya);for(var t=at(),a=null,n=Ci;n!==null;){var l=n.next,i=Ef(n,t);i===0?(n.next=null,a===null?Ci=l:a.next=l,l===null&&(Cn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ti=!0)),n=l}we!==0&&we!==5||rl(e),ya!==0&&(ya=0)}function Ef(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-lt(i),u=1<<o,s=l[o];s===-1?((u&a)===0||(u&n)!==0)&&(l[o]=Hd(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}if(t=fe,a=J,a=Dl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Vi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Vi(n),Ji(a)){case 2:case 8:a=hs;break;case 32:a=Tl;break;case 268435456:a=ys;break;default:a=Tl}return n=Df.bind(null,e),a=Qi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Vi(n),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ai()&&e.callbackNode!==a)return null;var n=J;return n=Dl(e,e===fe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sf(e,n,t),Ef(e,at()),e.callbackNode!=null&&e.callbackNode===a?Df.bind(null,e):null)}function wf(e,t){if(Ai())return null;sf(e,t,!0)}function rp(){Cp(function(){(ee&6)!==0?Qi(ps,cp):xf()})}function _u(){if(ya===0){var e=un;e===0&&(e=zl,zl<<=1,(zl&261888)===0&&(zl=256)),ya=e}return ya}function Nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Rf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fp(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Nf((l[Je]||null).action),o=n.submitter;o&&(t=(t=o[Je]||null)?Nf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new _l("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ya!==0){var s=o?Rf(l,o):new FormData(l);tu(a,{pending:!0,data:s,method:l.method,action:i},null,s)}}else typeof i=="function"&&(u.preventDefault(),s=o?Rf(l,o):new FormData(l),tu(a,{pending:!0,data:s,method:l.method,action:i},i,s))},currentTarget:l}]})}}for(var Hu=0;Hu<vo.length;Hu++){var ju=vo[Hu],dp=ju.toLowerCase(),mp=ju[0].toUpperCase()+ju.slice(1);Et(dp,"on"+mp)}Et(oc,"onAnimationEnd"),Et(uc,"onAnimationIteration"),Et(sc,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Nm,"onTransitionRun"),Et(Rm,"onTransitionStart"),Et(Mm,"onTransitionCancel"),Et(cc,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function Mf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(g){kl(g)}l.currentTarget=null,i=s}else for(o=0;o<n.length;o++){if(u=n[o],s=u.instance,p=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=p;try{i(l)}catch(g){kl(g)}l.currentTarget=null,i=s}}}}function Z(e,t){var a=t[Wi];a===void 0&&(a=t[Wi]=new Set);var n=e+"__bubble";a.has(n)||(Of(t,e,2,!1),a.add(n))}function ku(e,t,a){var n=0;t&&(n|=4),Of(a,e,n,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[zi]){e[zi]=!0,zs.forEach(function(a){a!=="selectionchange"&&(pp.has(a)||ku(a,!1,e),ku(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,ku("selectionchange",!1,t))}}function Of(e,t,a,n){switch(ud(t)){case 2:var l=Lp;break;case 8:l=Gp;break;default:l=es}a=l.bind(null,t,a,e),l=void 0,!lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ku(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=n.return;o!==null;){var s=o.tag;if((s===3||s===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Ga(u),o===null)return;if(s=o.tag,s===5||s===6||s===26||s===27){n=i=o;continue e}u=u.parentNode}}n=n.return}Hs(function(){var p=i,g=ao(a),A=[];e:{var h=rc.get(e);if(h!==void 0){var y=_l,w=e;switch(e){case"keypress":if(ql(a)===0)break e;case"keydown":case"keyup":y=um;break;case"focusin":w="focus",y=so;break;case"focusout":w="blur",y=so;break;case"beforeblur":case"afterblur":y=so;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=rm;break;case oc:case uc:case sc:y=Fd;break;case cc:y=dm;break;case"scroll":case"scrollend":y=Zd;break;case"wheel":y=pm;break;case"copy":case"cut":case"paste":y=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ys;break;case"toggle":case"beforetoggle":y=ym}var U=(t&4)!==0,re=!U&&(e==="scroll"||e==="scrollend"),f=U?h!==null?h+"Capture":null:h;U=[];for(var c=p,m;c!==null;){var S=c;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||f===null||(S=qn(c,f),S!=null&&U.push(dl(c,S,m))),re)break;c=c.return}0<U.length&&(h=new y(h,w,null,a,g),A.push({event:h,listeners:U}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&a!==to&&(w=a.relatedTarget||a.fromElement)&&(Ga(w)||w[La]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=a.relatedTarget||a.toElement,y=p,w=w?Ga(w):null,w!==null&&(re=Y(w),U=w.tag,w!==re||U!==5&&U!==27&&U!==6)&&(w=null)):(y=null,w=p),y!==w)){if(U=Bs,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(U=Ys,S="onPointerLeave",f="onPointerEnter",c="pointer"),re=y==null?h:On(y),m=w==null?h:On(w),h=new U(S,c+"leave",y,a,g),h.target=re,h.relatedTarget=m,S=null,Ga(g)===p&&(U=new U(f,c+"enter",w,a,g),U.target=m,U.relatedTarget=re,S=U),re=S,y&&w)t:{for(U=hp,f=y,c=w,m=0,S=f;S;S=U(S))m++;S=0;for(var M=c;M;M=U(M))S++;for(;0<m-S;)f=U(f),m--;for(;0<S-m;)c=U(c),S--;for(;m--;){if(f===c||c!==null&&f===c.alternate){U=f;break t}f=U(f),c=U(c)}U=null}else U=null;y!==null&&qf(A,h,y,U,!1),w!==null&&re!==null&&qf(A,re,w,U,!0)}}e:{if(h=p?On(p):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var F=Ws;else if(Zs(h))if(Ps)F=Em;else{F=zm;var R=Tm}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&eo(p.elementType)&&(F=Ws):F=xm;if(F&&(F=F(e,p))){Js(A,F,a,g);break e}R&&R(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&$i(h,"number",h.value)}switch(R=p?On(p):window,e){case"focusin":(Zs(R)||R.contentEditable==="true")&&(Fa=R,ho=p,Yn=null);break;case"focusout":Yn=ho=Fa=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,lc(A,a,g);break;case"selectionchange":if(wm)break;case"keydown":case"keyup":lc(A,a,g)}var L;if(ro)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ia?Vs(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(Ls&&a.locale!=="ko"&&(Ia||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ia&&(L=js()):(ea=g,io="value"in ea?ea.value:ea.textContent,Ia=!0)),R=xi(p,W),0<R.length&&(W=new Ks(W,e,null,a,g),A.push({event:W,listeners:R}),L?W.data=L:(L=Xs(a),L!==null&&(W.data=L)))),(L=vm?bm(e,a):Sm(e,a))&&(W=xi(p,"onBeforeInput"),0<W.length&&(R=new Ks("onBeforeInput","beforeinput",null,a,g),A.push({event:R,listeners:W}),R.data=L)),fp(A,e,p,a,g)}Mf(A,t)})}function dl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xi(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=qn(e,a),l!=null&&n.unshift(dl(e,l,i)),l=qn(e,t),l!=null&&n.push(dl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qf(e,t,a,n,l){for(var i=t._reactName,o=[];a!==null&&a!==n;){var u=a,s=u.alternate,p=u.stateNode;if(u=u.tag,s!==null&&s===n)break;u!==5&&u!==26&&u!==27||p===null||(s=p,l?(p=qn(a,i),p!=null&&o.unshift(dl(a,p,s))):l||(p=qn(a,i),p!=null&&o.push(dl(a,p,s)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var yp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(gp,"")}function _f(e,t){return t=Uf(t),Uf(e)===t}function ce(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ja(e,""+n);break;case"className":Nl(e,"class",n);break;case"tabIndex":Nl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,a,n);break;case"style":Us(e,n,i);break;case"data":if(t!=="object"){Nl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ml(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ce(e,t,"name",l.name,l,null),ce(e,t,"formEncType",l.formEncType,l,null),ce(e,t,"formMethod",l.formMethod,l,null),ce(e,t,"formTarget",l.formTarget,l,null)):(ce(e,t,"encType",l.encType,l,null),ce(e,t,"method",l.method,l,null),ce(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ml(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ut);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Z("beforetoggle",e),Z("toggle",e),wl(e,"popover",n);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":wl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vd.get(a)||a,wl(e,a,n))}}function Yu(e,t,a,n,l,i){switch(a){case"style":Us(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&Ja(e,""+n);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):wl(e,a,n)}}}function je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,i,o,a,null)}}l&&ce(e,t,"srcSet",a.srcSet,a,null),n&&ce(e,t,"src",a.src,a,null);return;case"input":Z("invalid",e);var u=i=o=l=null,s=null,p=null;for(n in a)if(a.hasOwnProperty(n)){var g=a[n];if(g!=null)switch(n){case"name":l=g;break;case"type":o=g;break;case"checked":s=g;break;case"defaultChecked":p=g;break;case"value":i=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,t));break;default:ce(e,t,n,g,a,null)}}Rs(e,i,u,s,p,o,l,!1);return;case"select":Z("invalid",e),n=o=i=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":n=u;default:ce(e,t,l,u,a,null)}t=i,a=o,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":Z("invalid",e),i=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":n=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:ce(e,t,o,u,a,null)}Os(e,n,l,i);return;case"option":for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null)&&(s==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ce(e,t,s,n,a,null));return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(n=0;n<fl.length;n++)Z(fl[n],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,p,n,a,null)}return;default:if(eo(t)){for(g in a)a.hasOwnProperty(g)&&(n=a[g],n!==void 0&&Yu(e,t,g,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&ce(e,t,u,n,a,null))}function vp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,s=null,p=null,g=null;for(y in a){var A=a[y];if(a.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=A;default:n.hasOwnProperty(y)||ce(e,t,y,null,n,A)}}for(var h in n){var y=n[h];if(A=a[h],n.hasOwnProperty(h)&&(y!=null||A!=null))switch(h){case"type":i=y;break;case"name":l=y;break;case"checked":p=y;break;case"defaultChecked":g=y;break;case"value":o=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:y!==A&&ce(e,t,h,y,n,A)}}Fi(e,o,u,s,p,g,i,l);return;case"select":y=o=u=h=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":y=s;default:n.hasOwnProperty(i)||ce(e,t,i,null,n,s)}for(l in n)if(i=n[l],s=a[l],n.hasOwnProperty(l)&&(i!=null||s!=null))switch(l){case"value":h=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==s&&ce(e,t,l,i,n,s)}t=u,a=o,n=y,h!=null?Za(e,!!a,h,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ce(e,t,u,null,n,l)}for(o in n)if(l=n[o],i=a[o],n.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":h=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==i&&ce(e,t,o,l,n,i)}Ms(e,h,y);return;case"option":for(var w in a)h=a[w],a.hasOwnProperty(w)&&h!=null&&!n.hasOwnProperty(w)&&(w==="selected"?e.selected=!1:ce(e,t,w,null,n,h));for(s in n)h=n[s],y=a[s],n.hasOwnProperty(s)&&h!==y&&(h!=null||y!=null)&&(s==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ce(e,t,s,h,n,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)h=a[U],a.hasOwnProperty(U)&&h!=null&&!n.hasOwnProperty(U)&&ce(e,t,U,null,n,h);for(p in n)if(h=n[p],y=a[p],n.hasOwnProperty(p)&&h!==y&&(h!=null||y!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,t));break;default:ce(e,t,p,h,n,y)}return;default:if(eo(t)){for(var re in a)h=a[re],a.hasOwnProperty(re)&&h!==void 0&&!n.hasOwnProperty(re)&&Yu(e,t,re,void 0,n,h);for(g in n)h=n[g],y=a[g],!n.hasOwnProperty(g)||h===y||h===void 0&&y===void 0||Yu(e,t,g,h,n,y);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&ce(e,t,f,null,n,h);for(A in n)h=n[A],y=a[A],!n.hasOwnProperty(A)||h===y||h==null&&y==null||ce(e,t,A,h,n,y)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&Hf(o)){for(o=0,u=l.responseEnd,n+=1;n<a.length;n++){var s=a[n],p=s.startTime;if(p>u)break;var g=s.transferSize,A=s.initiatorType;g&&Hf(A)&&(s=s.responseEnd,o+=g*(s<u?1:(u-p)/(s-p)))}if(--n,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,Gu=null;function Ei(e){return e.nodeType===9?e:e.ownerDocument}function jf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vu=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===Vu?!1:(Vu=e,!0):(Vu=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(e){return Kf.resolve(null).then(e).catch(Tp)}:Bf;function Tp(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function Yf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),En(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ml(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ml(a);for(var i=a.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[Mn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&ml(e.ownerDocument.body);a=l}while(a);En(t)}function Lf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xu(a),Pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zp(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Mn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function xp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function Gf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Zu(e){return e.data==="$?"||e.data==="$~"}function Ju(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ep(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wu=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xf(e,t,a){switch(t=Ei(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function ml(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pi(e)}var xt=new Map,Zf=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=x.d;x.d={f:Dp,r:wp,D:Np,C:Rp,L:Mp,m:Op,X:Up,S:qp,M:_p};function Dp(){var e=Pt.f(),t=vi();return e||t}function wp(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?cr(t):Pt.r(e)}var Tn=typeof document>"u"?null:document;function Jf(e,t,a){var n=Tn;if(n&&typeof t=="string"&&t){var l=gt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Zf.has(l)||(Zf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),je(t,"link",e),Re(t),n.head.appendChild(t)))}}function Np(e){Pt.D(e),Jf("dns-prefetch",e,null)}function Rp(e,t){Pt.C(e,t),Jf("preconnect",e,t)}function Mp(e,t,a){Pt.L(e,t,a);var n=Tn;if(n&&e&&t){var l='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+gt(a.imageSizes)+'"]')):l+='[href="'+gt(e)+'"]';var i=l;switch(t){case"style":i=zn(e);break;case"script":i=xn(e)}xt.has(i)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(pl(i))||t==="script"&&n.querySelector(hl(i))||(t=n.createElement("link"),je(t,"link",e),Re(t),n.head.appendChild(t)))}}function Op(e,t){Pt.m(e,t);var a=Tn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+gt(n)+'"][href="'+gt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xn(e)}if(!xt.has(i)&&(e=O({rel:"modulepreload",href:e},t),xt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(i)))return}n=a.createElement("link"),je(n,"link",e),Re(n),a.head.appendChild(n)}}}function qp(e,t,a){Pt.S(e,t,a);var n=Tn;if(n&&e){var l=Va(n).hoistableStyles,i=zn(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=n.querySelector(pl(i)))u.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(i))&&Pu(e,a);var s=o=n.createElement("link");Re(s),je(s,"link",e),s._p=new Promise(function(p,g){s.onload=p,s.onerror=g}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,wi(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function Up(e,t){Pt.X(e,t);var a=Tn;if(a&&e){var n=Va(a).hoistableScripts,l=xn(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=O({src:e,async:!0},t),(t=xt.get(l))&&Iu(e,t),i=a.createElement("script"),Re(i),je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function _p(e,t){Pt.M(e,t);var a=Tn;if(a&&e){var n=Va(a).hoistableScripts,l=xn(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=O({src:e,async:!0,type:"module"},t),(t=xt.get(l))&&Iu(e,t),i=a.createElement("script"),Re(i),je(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Wf(e,t,a,n){var l=(l=V.current)?Di(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zn(a.href),a=Va(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zn(a.href);var i=Va(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(pl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),i||Hp(l,e,a,o.state))),t&&n===null)throw Error(d(528,""));return o}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xn(a),a=Va(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function zn(e){return'href="'+gt(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),je(t,"link",a),Re(t),e.head.appendChild(t))}function xn(e){return'[src="'+gt(e)+'"]'}function hl(e){return"script[async]"+e}function If(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+gt(a.href)+'"]');if(n)return t.instance=n,Re(n),n;var l=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Re(n),je(n,"style",l),wi(n,a.precedence,e),t.instance=n;case"stylesheet":l=zn(a.href);var i=e.querySelector(pl(l));if(i)return t.state.loading|=4,t.instance=i,Re(i),i;n=Pf(a),(l=xt.get(l))&&Pu(n,l),i=(e.ownerDocument||e).createElement("link"),Re(i);var o=i;return o._p=new Promise(function(u,s){o.onload=u,o.onerror=s}),je(i,"link",n),t.state.loading|=4,wi(i,a.precedence,e),t.instance=i;case"script":return i=xn(a.src),(l=e.querySelector(hl(i)))?(t.instance=l,Re(l),l):(n=a,(l=xt.get(i))&&(n=O({},a),Iu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Re(l),je(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,wi(n,a.precedence,e));return t.instance}function wi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,o=0;o<n.length;o++){var u=n[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ni=null;function Ff(e,t,a){if(Ni===null){var n=new Map,l=Ni=new Map;l.set(a,n)}else l=Ni,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Mn]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=n.get(o);u?u.push(i):n.set(o,[i])}}return n}function $f(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zn(n.href),i=t.querySelector(pl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ri.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Re(i);return}i=t.ownerDocument||t,n=Pf(n),(l=xt.get(l))&&Pu(n,l),i=i.createElement("link"),Re(i);var o=i;o._p=new Promise(function(u,s){o.onload=u,o.onerror=s}),je(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ri.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fu=0;function Bp(e,t){return e.stylesheets&&e.count===0&&Oi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fu===0&&(Fu=62500*bp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Ri(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mi=null;function Oi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mi=new Map,t.forEach(Kp,e),Mi=null,Ri.call(e))}function Kp(e,t){if(!(t.state.loading&4)){var a=Mi.get(e);if(a)var n=a.get(null);else{a=new Map,Mi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),i=a.get(o)||n,i===n&&a.set(null,l),a.set(o,l),this.count++,n=Ri.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var yl={$$typeof:Ne,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Yp(e,t,a,n,l,i,o,u,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.hiddenUpdates=Xi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function td(e,t,a,n,l,i,o,u,s,p,g,A){return e=new Yp(e,t,a,o,s,p,g,A,u),t=1,i===!0&&(t|=24),i=ot(3,null,null,t),e.current=i,i.stateNode=e,t=Mo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},_o(i),e}function ad(e){return e?(e=tn,e):tn}function nd(e,t,a,n,l,i){l=ad(l),n.context===null?n.context=l:n.pendingContext=l,n=oa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=ua(e,n,t),a!==null&&(et(a,e,t),Jn(a,e,t))}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $u(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function id(e){if(e.tag===13||e.tag===31){var t=Na(e,67108864);t!==null&&et(t,e,67108864),$u(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=ft();t=Zi(t);var a=Na(e,t);a!==null&&et(a,e,t),$u(e,t)}}var qi=!0;function Lp(e,t,a,n){var l=v.T;v.T=null;var i=x.p;try{x.p=2,es(e,t,a,n)}finally{x.p=i,v.T=l}}function Gp(e,t,a,n){var l=v.T;v.T=null;var i=x.p;try{x.p=8,es(e,t,a,n)}finally{x.p=i,v.T=l}}function es(e,t,a,n){if(qi){var l=ts(n);if(l===null)Ku(e,t,n,Ui,a),sd(e,n);else if(Vp(l,e,t,a,n))n.stopPropagation();else if(sd(e,n),t&4&&-1<Qp.indexOf(e)){for(;l!==null;){var i=Qa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=za(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var s=1<<31-lt(o);u.entanglements[1]|=s,o&=~s}Ot(i),(ee&6)===0&&(yi=at()+500,rl(0))}}break;case 31:case 13:u=Na(i,2),u!==null&&et(u,i,2),vi(),$u(i,2)}if(i=ts(n),i===null&&Ku(e,t,n,Ui,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Ku(e,t,n,null,a)}}function ts(e){return e=ao(e),as(e)}var Ui=null;function as(e){if(Ui=null,e=Ga(e),e!==null){var t=Y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=P(t),e!==null)return e;e=null}else if(a===31){if(e=de(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function ud(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nd()){case ps:return 2;case hs:return 8;case Tl:case Rd:return 32;case ys:return 268435456;default:return 32}default:return 32}}var ns=!1,va=null,ba=null,Sa=null,gl=new Map,vl=new Map,Aa=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sd(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(t.pointerId)}}function bl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&id(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Vp(e,t,a,n,l){switch(t){case"focusin":return va=bl(va,e,t,a,n,l),!0;case"dragenter":return ba=bl(ba,e,t,a,n,l),!0;case"mouseover":return Sa=bl(Sa,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return gl.set(i,bl(gl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,vl.set(i,bl(vl.get(i)||null,e,t,a,n,l)),!0}return!1}function cd(e){var t=Ga(e.target);if(t!==null){var a=Y(t);if(a!==null){if(t=a.tag,t===13){if(t=P(a),t!==null){e.blockedOn=t,Cs(e.priority,function(){od(a)});return}}else if(t===31){if(t=de(a),t!==null){e.blockedOn=t,Cs(e.priority,function(){od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ts(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);to=n,a.target.dispatchEvent(n),to=null}else return t=Qa(a),t!==null&&id(t),e.blockedOn=a,!1;t.shift()}return!0}function rd(e,t,a){_i(e)&&a.delete(t)}function Xp(){ns=!1,va!==null&&_i(va)&&(va=null),ba!==null&&_i(ba)&&(ba=null),Sa!==null&&_i(Sa)&&(Sa=null),gl.forEach(rd),vl.forEach(rd)}function Hi(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Xp)))}var ji=null;function fd(e){ji!==e&&(ji=e,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){ji===e&&(ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(as(n||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,tu(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function En(e){function t(s){return Hi(s,e)}va!==null&&Hi(va,e),ba!==null&&Hi(ba,e),Sa!==null&&Hi(Sa,e),gl.forEach(t),vl.forEach(t);for(var a=0;a<Aa.length;a++){var n=Aa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)cd(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],o=l[Je]||null;if(typeof i=="function")o||fd(a);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Je]||null)u=o.formAction;else if(as(l)!==null)continue}else u=o.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),fd(a)}}}function dd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ls(e){this._internalRoot=e}ki.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=ft();nd(a,n,e,t,null,null)},ki.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nd(e.current,2,null,e,null,null),vi(),t[La]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=As();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&cd(e)}};var md=k.version;if(md!=="19.2.3")throw Error(d(527,md,"19.2.3"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=b(t),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{wn=Bi.inject(Zp),nt=Bi}catch{}}return Al.createRoot=function(e,t){if(!H(e))throw Error(d(299));var a=!1,n="",l=br,i=Sr,o=Ar;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=td(e,1,!1,null,null,a,n,null,l,i,o,dd),e[La]=t.current,Bu(e),new ls(t)},Al.hydrateRoot=function(e,t,a){if(!H(e))throw Error(d(299));var n=!1,l="",i=br,o=Sr,u=Ar,s=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=td(e,1,!0,t,a??null,n,l,s,i,o,u,dd),t.context=ad(null),a=t.current,n=ft(),n=Zi(n),l=oa(n),l.callback=null,ua(a,l,n),a=n,t.current.lanes=a,Rn(t,a),Ot(t),e[La]=t.current,Bu(e),new ki(t)},Al.version="19.2.3",Al}var Td;function nh(){if(Td)return us.exports;Td=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(k){console.error(k)}}return T(),us.exports=ah(),us.exports}var lh=nh();const ih=({questionData:T,onAnswerSelect:k,selectedAnswer:_,showResult:d})=>{const{question:H,options:Y,correctAnswer:P}=T,de=E=>{let b="option-btn";if(d){if(E===P)return b+" correct";if(_===E&&E!==P)return b+" incorrect";if(E!==P&&E!==_)return b+" dimmed"}else if(_===E)return b+" selected";return b};return z.jsxs("div",{className:"glass-panel question-card",children:[z.jsx("h2",{className:"question-text",children:H}),z.jsx("div",{className:"options-grid",children:Y.map((E,b)=>z.jsx("button",{className:de(E),onClick:()=>!d&&k(E),disabled:d,children:E},b))}),z.jsx("style",{children:`
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
      `})]})},oh=({content:T})=>z.jsxs("div",{className:"glass-panel explanation-card fade-in",children:[z.jsx("div",{className:"explanation-header",children:z.jsx("h3",{children:"🎓 Explanation & Concept"})}),z.jsx("div",{className:"explanation-content",children:z.jsx("pre",{style:{whiteSpace:"pre-wrap",fontFamily:"inherit"},children:T.trim()})}),z.jsx("style",{children:`
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
      `})]}),zd=["Persistence is the key to mastery. Keep going!","Every expert was once a beginner. You've got this!","Don't stop when you're tired. Stop when you're done.","Certification is specific knowledge, but learning is a lifelong journey.","Failure is just another way to learn how to do it right.","Small progress is still progress.","The only way to do great work is to love what you do.","Believing in yourself is the first secret to success."],uh=({onResume:T,onQuit:k})=>{const _=zd[Math.floor(Math.random()*zd.length)];return z.jsxs("div",{className:"modal-overlay",children:[z.jsxs("div",{className:"modal-content glass-panel fade-in-up",children:[z.jsx("h3",{children:"Wait! You're doing great. 🐧"}),z.jsxs("p",{className:"motivational-quote",children:['"',_,'"']}),z.jsx("p",{className:"sub-text",children:"Are you sure you want to stop? You're building your future right now."}),z.jsxs("div",{className:"modal-actions",children:[z.jsx("button",{className:"primary resume-btn",onClick:T,children:"Resume Quiz 🚀"}),z.jsx("button",{className:"text-btn quit-btn",onClick:k,children:"I really need to quit"})]})]}),z.jsx("style",{children:`
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
      `})]})},sh=T=>[...T].sort(()=>Math.random()-.5),ch=({questions:T,onBackToMenu:k,onRetry:_})=>{const[d,H]=ke.useState(0),[Y,P]=ke.useState(null),[de,E]=ke.useState(!1),[b,G]=ke.useState(0),[O,ne]=ke.useState(!1),[ye,Oe]=ke.useState(()=>T&&T.length>0?T.length*90:0),[Ee,Xe]=ke.useState(!1),[Be,dt]=ke.useState(!1);ke.useEffect(()=>{H(0),P(null),E(!1),G(0),ne(!1),Xe(!1),dt(!1),T&&T.length>0&&Oe(T.length*90)},[T]),ke.useEffect(()=>{if(ye>0&&!O&&!Be&&!Ee){const ue=setInterval(()=>{Oe(Ge=>Ge-1)},1e3);return()=>clearInterval(ue)}else ye===0&&!O&&T.length>0&&ne(!0)},[ye,O,Be,Ee,T.length]);const Ne=ue=>{const Ge=Math.floor(ue/60),Ze=ue%60;return`${Ge}:${Ze<10?"0":""}${Ze}`};if(!T||T.length===0)return z.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:["No questions available in this category yet. ",z.jsx("button",{onClick:k,children:"Go Back"})]});const De=T[d],mt=ke.useMemo(()=>De?sh(De.options):[],[De]),Ke={...De,options:mt},Q=ue=>{P(ue),E(!0),ue===De.correctAnswer&&G(Ge=>Ge+1)},Ye=()=>{d<T.length-1?(H(ue=>ue+1),P(null),E(!1)):ne(!0)},pt=()=>{dt(!0),Xe(!0)},It=()=>{dt(!1),Xe(!1)},ht=()=>{Xe(!1),k()};if(O){const ue=b/T.length*100,Ge=[{title:"Phenomenal Work! 🏆",body:"You nailed every single question. You are arguably ready for the real exam!"},{title:"Flawless Victory! 🥋",body:"Zero mistakes. Your knowledge is razor sharp."},{title:"Linux Master! 🐧",body:"You clearly know your stuff. Keep up the amazing work!"}],Ze=[{title:"Excellent Job! 🌟",body:"Strong performance. Just a few tweaks and you'll be perfect."},{title:"Great work! 🚀",body:"You have a solid grasp of the concepts. Keep polishing those edge cases."},{title:"Very Impressive! 👏",body:"You're well on your way to certification success."}],tt=[{title:"Good Effort! 👍",body:"You're getting there. Review the explanations for the ones you missed."},{title:"Not Bad! 📚",body:"You have a good foundation, but there are some gaps to fill."},{title:"Solid Start! 🌱",body:"Keep practicing and focusing on the areas where you struggled."}],v=[{title:"Keep Practicing! 💪",body:"Don't get discouraged. Certification takes persistence. Review the concepts and try again."},{title:"Learning Opportunity! 💡",body:"Every mistake is a chance to learn. Analyse what went wrong."},{title:"Don't Give Up! 🛡️",body:"Persistence is key. Review the material and give it another shot."}],x=r=>r[Math.floor(Math.random()*r.length)];let q;ue===100?q=x(Ge):ue>=80?q=x(Ze):ue>=50?q=x(tt):q=x(v);const{title:te,body:le}=q;return z.jsxs("div",{className:"glass-panel result-card",children:[z.jsx("h2",{children:ye===0?"⏰ Time's Up!":"🎉 Quiz Completed!"}),z.jsxs("div",{className:"score-display",children:[z.jsx("span",{className:"score-number",children:b}),z.jsxs("span",{className:"score-total",children:["/ ",T.length]})]}),z.jsxs("div",{className:"feedback-section",children:[z.jsx("h3",{children:te}),z.jsx("p",{children:le}),z.jsxs("div",{className:"cert-wish",children:[z.jsx("span",{className:"wish-icon",children:"🍀"}),z.jsx("p",{children:"Best of luck on your certification journey! You've got this."})]})]}),z.jsxs("div",{className:"result-actions",children:[z.jsx("button",{className:"primary",onClick:_,children:"Take New Quiz"}),z.jsx("button",{className:"secondary",onClick:k,children:"Back to Dashboard"})]}),z.jsx("style",{children:`
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
        `})]})}return z.jsxs("div",{className:"quiz-container",children:[Ee&&z.jsx(uh,{onResume:It,onQuit:ht}),z.jsxs("div",{className:"quiz-top-bar",children:[z.jsx("button",{className:"end-quiz-btn",onClick:pt,children:"End Quiz"}),z.jsxs("div",{className:`timer ${ye<60?"timer-low":""}`,children:["⏰ ",Ne(ye)]})]}),z.jsxs("div",{className:"quiz-header",children:[z.jsxs("span",{children:["Question ",d+1," of ",T.length]}),z.jsxs("span",{className:"current-score",children:["Score: ",b]})]}),z.jsx("div",{className:"progress-bar",children:z.jsx("div",{className:"progress-fill",style:{width:`${d/T.length*100}%`}})}),z.jsx(ih,{questionData:Ke,selectedAnswer:Y,onAnswerSelect:Q,showResult:de}),de&&z.jsxs("div",{className:"fade-in",children:[z.jsx(oh,{content:De.explanation}),z.jsx("div",{className:"controls",children:z.jsx("button",{className:"primary next-btn",onClick:Ye,children:d===T.length-1?"Finish Quiz":"Next Question →"})})]}),z.jsx("style",{children:`
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
      `})]})},rh=[{id:"kcna",title:"KCNA (Kubernetes and Cloud Native Associate)",description:"Foundational knowledge of Kubernetes and cloud-native ecosystem."},{id:"lfcs",title:"LFCS (Linux Foundation Certified SysAdmin)",description:"Essential commands, file systems, and user management.",comingSoon:!0},{id:"lfce",title:"LFCE (Linux Foundation Certified Engineer)",description:"Advanced networking, system design, and automation.",comingSoon:!0},{id:"cks",title:"CKS (Certified Kubernetes Security Specialist)",description:"Cluster hardening, system security, and policy.",comingSoon:!0},{id:"cka",title:"CKA (Certified Kubernetes Administrator)",description:"Cluster administration, installation, configuration, and troubleshooting.",comingSoon:!0},{id:"ckad",title:"CKAD (Certified Kubernetes Application Developer)",description:"Cloud-native application design, build, and deployment for Kubernetes.",comingSoon:!0},{id:"cnpe",title:"CNPE (Certified Cloud Native Platform Engineer)",description:"Platform engineering practices for cloud-native ecosystems.",comingSoon:!0},{id:"kcsa",title:"KCSA (Kubernetes and Cloud Native Security Associate)",description:"Security fundamentals for cloud-native architectures.",comingSoon:!0},{id:"pca",title:"PCA (Prometheus Certified Associate)",description:"Observability using Prometheus.",comingSoon:!0},{id:"ica",title:"ICA (Istio Certified Associate)",description:"Service mesh fundamentals using Istio.",comingSoon:!0},{id:"cca",title:"CCA (Cilium Certified Associate)",description:"Networking, observability, and security with Cilium.",comingSoon:!0},{id:"capa",title:"CAPA (Certified Argo Project Associate)",description:"GitOps and continuous delivery with Argo.",comingSoon:!0},{id:"cgoa",title:"CGOA (Certified GitOps Associate)",description:"GitOps principles and practices.",comingSoon:!0},{id:"cba",title:"CBA (Certified Backstage Associate)",description:"Building developer portals with Backstage.",comingSoon:!0},{id:"otca",title:"OTCA (OpenTelemetry Certified Associate)",description:"Observability and telemetry standards.",comingSoon:!0},{id:"kca",title:"KCA (Kyverno Certified Associate)",description:"Policy management for Kubernetes using Kyverno.",comingSoon:!0},{id:"cnpa",title:"CNPA (Certified Cloud Native Platform Engineering Associate)",description:"Foundational platform engineering concepts.",comingSoon:!0}],xd={lfcs:[{id:1,question:"Which command is used to display the current working directory in Linux?",options:["pwd","ls","cd","dir"],correctAnswer:"pwd",explanation:`
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
`}],cka:[],ckad:[],cnpe:[],kcna:[{id:301,question:"What is the main benefit of a microservices architecture?",options:["Faster development and independent scaling","Simplified data management","Lower initial development costs","Improved monolithic performance"],correctAnswer:"Faster development and independent scaling",explanation:`
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
      `}]},fh=({onSelectCategory:T})=>z.jsxs("div",{className:"category-menu",children:[z.jsx("h2",{children:"Select Your Certification Path"}),z.jsx("div",{className:"categories-grid",children:rh.map(k=>{const _=k.comingSoon;return z.jsxs("button",{className:`category-card glass-panel ${_?"inactive":""}`,onClick:()=>!_&&T(k.id),disabled:_,children:[z.jsxs("div",{className:"card-content",children:[z.jsx("h3",{children:k.title}),z.jsx("p",{children:k.description})]}),!_&&z.jsx("div",{className:"start-badge",children:"Start Practice →"}),_&&z.jsxs("div",{className:"inactive-overlay",children:[z.jsx("span",{className:"lock-icon",children:"🔒"}),z.jsx("span",{children:"Coming Soon"})]})]},k.id)})}),z.jsx("style",{children:`
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
      `})]}),dh=({totalAvailable:T,onSelectCount:k,onBack:_})=>{const[d,H]=ke.useState(""),[Y,P]=ke.useState(""),de=()=>{const b=parseInt(d,10);if(isNaN(b)||b<1){P("Please enter a valid number greater than 0.");return}if(b>T){P(`Please choose a number between 1 and ${T}.`);return}k(b)},E=b=>{b.key==="Enter"&&de()};return z.jsxs("div",{className:"count-selector-container glass-panel fade-in",children:[z.jsxs("div",{className:"selector-header",children:[z.jsx("button",{className:"back-btn",onClick:_,children:"← Back"}),z.jsx("h2",{children:"How many questions?"})]}),z.jsxs("p",{className:"subtitle",children:["There are ",z.jsx("span",{className:"highlight",children:T})," questions available in this category."]}),z.jsxs("div",{className:"input-container",children:[z.jsx("label",{htmlFor:"question-count",className:"input-label",children:"Number of questions:"}),z.jsxs("div",{className:"input-group",children:[z.jsx("input",{id:"question-count",type:"number",className:"count-input",value:d,onChange:b=>{H(b.target.value),P("")},onKeyDown:E,placeholder:"e.g. 10",min:"1",max:T}),z.jsx("button",{className:"primary start-btn",onClick:de,children:"Start Exam"})]}),Y&&z.jsx("p",{className:"error-msg",children:Y})]}),z.jsx("style",{children:`
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
      `})]})},mh=({onLogoClick:T})=>z.jsxs("header",{className:"main-header",children:[z.jsxs("div",{className:"logo-container",onClick:T,style:{cursor:"pointer"},children:[z.jsx("span",{className:"icon",children:"🐧"}),z.jsxs("h1",{children:["Linux Foundation Mastery ",z.jsx("span",{className:"highlight",children:"Hub"})]})]}),z.jsx("p",{className:"subtitle",children:"Master Linux Foundations with Concept-First Practice"})]}),ph=()=>z.jsx("footer",{className:"main-footer",children:z.jsxs("p",{children:["© ",new Date().getFullYear()," Linux Cert Prep • Built for Certification Success"]})});function hh(){const[T,k]=ke.useState("menu"),[_,d]=ke.useState(null),[H,Y]=ke.useState([]),P=G=>{d(G),k("select_count")},de=G=>{const ye=[...xd[_]||[]].sort(()=>.5-Math.random()).slice(0,G);Y(ye),k("quiz")},E=()=>{k("menu"),d(null),Y([])},b=()=>{k("menu"),d(null)};return z.jsxs("div",{className:"app-layout",children:[z.jsx(mh,{onLogoClick:E}),z.jsxs("main",{className:"main-content",children:[T==="menu"&&z.jsx(fh,{onSelectCategory:P}),T==="select_count"&&z.jsx(dh,{totalAvailable:xd[_]?.length||0,onSelectCount:de,onBack:b}),T==="quiz"&&z.jsx(ch,{questions:H,onBackToMenu:E,onRetry:()=>k("select_count")})]}),z.jsx(ph,{})]})}lh.createRoot(document.getElementById("root")).render(z.jsx(ke.StrictMode,{children:z.jsx(hh,{})}));
