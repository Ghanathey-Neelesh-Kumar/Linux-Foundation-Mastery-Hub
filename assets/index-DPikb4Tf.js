(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))d(H);new MutationObserver(H=>{for(const L of H)if(L.type==="childList")for(const P of L.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&d(P)}).observe(document,{childList:!0,subtree:!0});function U(H){const L={};return H.integrity&&(L.integrity=H.integrity),H.referrerPolicy&&(L.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?L.credentials="include":H.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function d(H){if(H.ep)return;H.ep=!0;const L=U(H);fetch(H.href,L)}})();var lr={exports:{}},Si={};var pd;function Wp(){if(pd)return Si;pd=1;var T=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function U(d,H,L){var P=null;if(L!==void 0&&(P=""+L),H.key!==void 0&&(P=""+H.key),"key"in H){L={};for(var de in H)de!=="key"&&(L[de]=H[de])}else L=H;return H=L.ref,{$$typeof:T,type:d,key:P,ref:H!==void 0?H:null,props:L}}return Si.Fragment=j,Si.jsx=U,Si.jsxs=U,Si}var hd;function Pp(){return hd||(hd=1,lr.exports=Wp()),lr.exports}var w=Pp(),or={exports:{}},_={};var gd;function Ip(){if(gd)return _;gd=1;var T=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),ne=Symbol.iterator;function ge(c){return c===null||typeof c!="object"?null:(c=ne&&c[ne]||c["@@iterator"],typeof c=="function"?c:null)}var Oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},De=Object.assign,Xe={};function Be(c,A,E){this.props=c,this.context=A,this.refs=Xe,this.updater=E||Oe}Be.prototype.isReactComponent={},Be.prototype.setState=function(c,A){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,A,"setState")},Be.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function dt(){}dt.prototype=Be.prototype;function Re(c,A,E){this.props=c,this.context=A,this.refs=Xe,this.updater=E||Oe}var Ee=Re.prototype=new dt;Ee.constructor=Re,De(Ee,Be.prototype),Ee.isPureReactComponent=!0;var mt=Array.isArray;function Ke(){}var Q={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function pt(c,A,E){var R=E.ref;return{$$typeof:T,type:c,key:A,ref:R!==void 0?R:null,props:E}}function It(c,A){return pt(c.type,A,c.props)}function ht(c){return typeof c=="object"&&c!==null&&c.$$typeof===T}function se(c){var A={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(E){return A[E]})}var Ye=/\/+/g;function Ze(c,A){return typeof c=="object"&&c!==null&&c.key!=null?se(""+c.key):A.toString(36)}function tt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Ke,Ke):(c.status="pending",c.then(function(A){c.status==="pending"&&(c.status="fulfilled",c.value=A)},function(A){c.status==="pending"&&(c.status="rejected",c.reason=A)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function v(c,A,E,R,B){var V=typeof c;(V==="undefined"||V==="boolean")&&(c=null);var ae=!1;if(c===null)ae=!0;else switch(V){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(c.$$typeof){case T:case j:ae=!0;break;case Y:return ae=c._init,v(ae(c._payload),A,E,R,B)}}if(ae)return B=B(c),ae=R===""?"."+Ze(c,0):R,mt(B)?(E="",ae!=null&&(E=ae.replace(Ye,"$&/")+"/"),v(B,A,E,"",function(En){return En})):B!=null&&(ht(B)&&(B=It(B,E+(B.key==null||c&&c.key===B.key?"":(""+B.key).replace(Ye,"$&/")+"/")+ae)),A.push(B)),1;ae=0;var Qe=R===""?".":R+":";if(mt(c))for(var be=0;be<c.length;be++)R=c[be],V=Qe+Ze(R,be),ae+=v(R,A,E,V,B);else if(be=ge(c),typeof be=="function")for(c=be.call(c),be=0;!(R=c.next()).done;)R=R.value,V=Qe+Ze(R,be++),ae+=v(R,A,E,V,B);else if(V==="object"){if(typeof c.then=="function")return v(tt(c),A,E,R,B);throw A=String(c),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ae}function x(c,A,E){if(c==null)return c;var R=[],B=0;return v(c,R,"","",function(V){return A.call(E,V,B++)}),R}function q(c){if(c._status===-1){var A=c._result;A=A(),A.then(function(E){(c._status===0||c._status===-1)&&(c._status=1,c._result=E)},function(E){(c._status===0||c._status===-1)&&(c._status=2,c._result=E)}),c._status===-1&&(c._status=0,c._result=A)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ie={map:x,forEach:function(c,A,E){x(c,function(){A.apply(this,arguments)},E)},count:function(c){var A=0;return x(c,function(){A++}),A},toArray:function(c){return x(c,function(A){return A})||[]},only:function(c){if(!ht(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return _.Activity=O,_.Children=ie,_.Component=Be,_.Fragment=U,_.Profiler=H,_.PureComponent=Re,_.StrictMode=d,_.Suspense=D,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,_.__COMPILER_RUNTIME={__proto__:null,c:function(c){return Q.H.useMemoCache(c)}},_.cache=function(c){return function(){return c.apply(null,arguments)}},_.cacheSignal=function(){return null},_.cloneElement=function(c,A,E){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=De({},c.props),B=c.key;if(A!=null)for(V in A.key!==void 0&&(B=""+A.key),A)!Le.call(A,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&A.ref===void 0||(R[V]=A[V]);var V=arguments.length-2;if(V===1)R.children=E;else if(1<V){for(var ae=Array(V),Qe=0;Qe<V;Qe++)ae[Qe]=arguments[Qe+2];R.children=ae}return pt(c.type,B,R)},_.createContext=function(c){return c={$$typeof:P,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:L,_context:c},c},_.createElement=function(c,A,E){var R,B={},V=null;if(A!=null)for(R in A.key!==void 0&&(V=""+A.key),A)Le.call(A,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(B[R]=A[R]);var ae=arguments.length-2;if(ae===1)B.children=E;else if(1<ae){for(var Qe=Array(ae),be=0;be<ae;be++)Qe[be]=arguments[be+2];B.children=Qe}if(c&&c.defaultProps)for(R in ae=c.defaultProps,ae)B[R]===void 0&&(B[R]=ae[R]);return pt(c,V,B)},_.createRef=function(){return{current:null}},_.forwardRef=function(c){return{$$typeof:de,render:c}},_.isValidElement=ht,_.lazy=function(c){return{$$typeof:Y,_payload:{_status:-1,_result:c},_init:q}},_.memo=function(c,A){return{$$typeof:b,type:c,compare:A===void 0?null:A}},_.startTransition=function(c){var A=Q.T,E={};Q.T=E;try{var R=c(),B=Q.S;B!==null&&B(E,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Ke,te)}catch(V){te(V)}finally{A!==null&&E.types!==null&&(A.types=E.types),Q.T=A}},_.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},_.use=function(c){return Q.H.use(c)},_.useActionState=function(c,A,E){return Q.H.useActionState(c,A,E)},_.useCallback=function(c,A){return Q.H.useCallback(c,A)},_.useContext=function(c){return Q.H.useContext(c)},_.useDebugValue=function(){},_.useDeferredValue=function(c,A){return Q.H.useDeferredValue(c,A)},_.useEffect=function(c,A){return Q.H.useEffect(c,A)},_.useEffectEvent=function(c){return Q.H.useEffectEvent(c)},_.useId=function(){return Q.H.useId()},_.useImperativeHandle=function(c,A,E){return Q.H.useImperativeHandle(c,A,E)},_.useInsertionEffect=function(c,A){return Q.H.useInsertionEffect(c,A)},_.useLayoutEffect=function(c,A){return Q.H.useLayoutEffect(c,A)},_.useMemo=function(c,A){return Q.H.useMemo(c,A)},_.useOptimistic=function(c,A){return Q.H.useOptimistic(c,A)},_.useReducer=function(c,A,E){return Q.H.useReducer(c,A,E)},_.useRef=function(c){return Q.H.useRef(c)},_.useState=function(c){return Q.H.useState(c)},_.useSyncExternalStore=function(c,A,E){return Q.H.useSyncExternalStore(c,A,E)},_.useTransition=function(){return Q.H.useTransition()},_.version="19.2.3",_}var yd;function fr(){return yd||(yd=1,or.exports=Ip()),or.exports}var je=fr(),sr={exports:{}},Ci={},rr={exports:{}},ur={};var vd;function Fp(){return vd||(vd=1,(function(T){function j(v,x){var q=v.length;v.push(x);e:for(;0<q;){var te=q-1>>>1,ie=v[te];if(0<H(ie,x))v[te]=x,v[q]=ie,q=te;else break e}}function U(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var x=v[0],q=v.pop();if(q!==x){v[0]=q;e:for(var te=0,ie=v.length,c=ie>>>1;te<c;){var A=2*(te+1)-1,E=v[A],R=A+1,B=v[R];if(0>H(E,q))R<ie&&0>H(B,E)?(v[te]=B,v[R]=q,te=R):(v[te]=E,v[A]=q,te=A);else if(R<ie&&0>H(B,q))v[te]=B,v[R]=q,te=R;else break e}}return x}function H(v,x){var q=v.sortIndex-x.sortIndex;return q!==0?q:v.id-x.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;T.unstable_now=function(){return L.now()}}else{var P=Date,de=P.now();T.unstable_now=function(){return P.now()-de}}var D=[],b=[],Y=1,O=null,ne=3,ge=!1,Oe=!1,De=!1,Xe=!1,Be=typeof setTimeout=="function"?setTimeout:null,dt=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function Ee(v){for(var x=U(b);x!==null;){if(x.callback===null)d(b);else if(x.startTime<=v)d(b),x.sortIndex=x.expirationTime,j(D,x);else break;x=U(b)}}function mt(v){if(De=!1,Ee(v),!Oe)if(U(D)!==null)Oe=!0,Ke||(Ke=!0,se());else{var x=U(b);x!==null&&tt(mt,x.startTime-v)}}var Ke=!1,Q=-1,Le=5,pt=-1;function It(){return Xe?!0:!(T.unstable_now()-pt<Le)}function ht(){if(Xe=!1,Ke){var v=T.unstable_now();pt=v;var x=!0;try{e:{Oe=!1,De&&(De=!1,dt(Q),Q=-1),ge=!0;var q=ne;try{t:{for(Ee(v),O=U(D);O!==null&&!(O.expirationTime>v&&It());){var te=O.callback;if(typeof te=="function"){O.callback=null,ne=O.priorityLevel;var ie=te(O.expirationTime<=v);if(v=T.unstable_now(),typeof ie=="function"){O.callback=ie,Ee(v),x=!0;break t}O===U(D)&&d(D),Ee(v)}else d(D);O=U(D)}if(O!==null)x=!0;else{var c=U(b);c!==null&&tt(mt,c.startTime-v),x=!1}}break e}finally{O=null,ne=q,ge=!1}x=void 0}}finally{x?se():Ke=!1}}}var se;if(typeof Re=="function")se=function(){Re(ht)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ze=Ye.port2;Ye.port1.onmessage=ht,se=function(){Ze.postMessage(null)}}else se=function(){Be(ht,0)};function tt(v,x){Q=Be(function(){v(T.unstable_now())},x)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(v){v.callback=null},T.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<v?Math.floor(1e3/v):5},T.unstable_getCurrentPriorityLevel=function(){return ne},T.unstable_next=function(v){switch(ne){case 1:case 2:case 3:var x=3;break;default:x=ne}var q=ne;ne=x;try{return v()}finally{ne=q}},T.unstable_requestPaint=function(){Xe=!0},T.unstable_runWithPriority=function(v,x){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=ne;ne=v;try{return x()}finally{ne=q}},T.unstable_scheduleCallback=function(v,x,q){var te=T.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=q+ie,v={id:Y++,callback:x,priorityLevel:v,startTime:q,expirationTime:ie,sortIndex:-1},q>te?(v.sortIndex=q,j(b,v),U(D)===null&&v===U(b)&&(De?(dt(Q),Q=-1):De=!0,tt(mt,q-te))):(v.sortIndex=ie,j(D,v),Oe||ge||(Oe=!0,Ke||(Ke=!0,se()))),v},T.unstable_shouldYield=It,T.unstable_wrapCallback=function(v){var x=ne;return function(){var q=ne;ne=x;try{return v.apply(this,arguments)}finally{ne=q}}}})(ur)),ur}var bd;function $p(){return bd||(bd=1,rr.exports=Fp()),rr.exports}var cr={exports:{}},Ge={};var Sd;function eh(){if(Sd)return Ge;Sd=1;var T=fr();function j(D){var b="https://react.dev/errors/"+D;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)b+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+D+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var d={d:{f:U,r:function(){throw Error(j(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},H=Symbol.for("react.portal");function L(D,b,Y){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:O==null?null:""+O,children:D,containerInfo:b,implementation:Y}}var P=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function de(D,b){if(D==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ge.createPortal=function(D,b){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(j(299));return L(D,b,null,Y)},Ge.flushSync=function(D){var b=P.T,Y=d.p;try{if(P.T=null,d.p=2,D)return D()}finally{P.T=b,d.p=Y,d.d.f()}},Ge.preconnect=function(D,b){typeof D=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(D,b))},Ge.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Ge.preinit=function(D,b){if(typeof D=="string"&&b&&typeof b.as=="string"){var Y=b.as,O=de(Y,b.crossOrigin),ne=typeof b.integrity=="string"?b.integrity:void 0,ge=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;Y==="style"?d.d.S(D,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:O,integrity:ne,fetchPriority:ge}):Y==="script"&&d.d.X(D,{crossOrigin:O,integrity:ne,fetchPriority:ge,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Ge.preinitModule=function(D,b){if(typeof D=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var Y=de(b.as,b.crossOrigin);d.d.M(D,{crossOrigin:Y,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&d.d.M(D)},Ge.preload=function(D,b){if(typeof D=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var Y=b.as,O=de(Y,b.crossOrigin);d.d.L(D,Y,{crossOrigin:O,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Ge.preloadModule=function(D,b){if(typeof D=="string")if(b){var Y=de(b.as,b.crossOrigin);d.d.m(D,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:Y,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else d.d.m(D)},Ge.requestFormReset=function(D){d.d.r(D)},Ge.unstable_batchedUpdates=function(D,b){return D(b)},Ge.useFormState=function(D,b,Y){return P.H.useFormState(D,b,Y)},Ge.useFormStatus=function(){return P.H.useHostTransitionStatus()},Ge.version="19.2.3",Ge}var Cd;function th(){if(Cd)return cr.exports;Cd=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(j){console.error(j)}}return T(),cr.exports=eh(),cr.exports}var Ad;function ah(){if(Ad)return Ci;Ad=1;var T=$p(),j=fr(),U=th();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function L(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function P(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function de(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(L(e)!==e)throw Error(d(188))}function b(e){var t=e.alternate;if(!t){if(t=L(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return D(i),e;if(l===n)return D(i),t;l=l.sibling}throw Error(d(188))}if(a.return!==n.return)a=i,n=l;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,n=l;break}if(s===n){o=!0,n=i,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,n=i;break}if(s===n){o=!0,n=l,a=i;break}s=s.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,ne=Symbol.for("react.element"),ge=Symbol.for("react.transitional.element"),Oe=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Xe=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),mt=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),It=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Symbol.for("react.client.reference");function Ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case Be:return"Profiler";case Xe:return"StrictMode";case mt:return"Suspense";case Ke:return"SuspenseList";case pt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Oe:return"Portal";case Re:return e.displayName||"Context";case dt:return(e._context.displayName||"Context")+".Consumer";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Ze(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return Ze(e(t))}catch{}}return null}var tt=Array.isArray,v=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function c(e){return{current:e}}function A(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function E(e,t){ie++,te[ie]=e.current,e.current=t}var R=c(null),B=c(null),V=c(null),ae=c(null);function Qe(e,t){switch(E(V,t),E(B,e),E(R,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_f(t),e=jf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(R),E(R,e)}function be(){A(R),A(B),A(V)}function En(e){e.memoizedState!==null&&E(ae,e);var t=R.current,a=jf(t,e.type);t!==a&&(E(B,e),E(R,a))}function Ai(e){B.current===e&&(A(R),A(B)),ae.current===e&&(A(ae),gi._currentValue=q)}var Kl,dr;function Ta(e){if(Kl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||"",dr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kl+e+dr}var Ll=!1;function Gl(e,t){if(!e||Ll)return"";Ll=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(g){var h=g}Reflect.construct(e,[],C)}else{try{C.call()}catch(g){h=g}e.call(C.prototype)}}else{try{throw Error()}catch(g){h=g}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var r=o.split(`
`),p=s.split(`
`);for(i=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;i<p.length&&!p[i].includes("DetermineComponentFrameRoot");)i++;if(n===r.length||i===p.length)for(n=r.length-1,i=p.length-1;1<=n&&0<=i&&r[n]!==p[i];)i--;for(;1<=n&&0<=i;n--,i--)if(r[n]!==p[i]){if(n!==1||i!==1)do if(n--,i--,0>i||r[n]!==p[i]){var y=`
`+r[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{Ll=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Dd(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Gl(e.type,!1);case 11:return Gl(e.type.render,!1);case 1:return Gl(e.type,!0);case 31:return Ta("Activity");default:return""}}function mr(e){try{var t="",a=null;do t+=Dd(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Yl=Object.prototype.hasOwnProperty,Ql=T.unstable_scheduleCallback,Vl=T.unstable_cancelCallback,Ed=T.unstable_shouldYield,zd=T.unstable_requestPaint,at=T.unstable_now,Rd=T.unstable_getCurrentPriorityLevel,pr=T.unstable_ImmediatePriority,hr=T.unstable_UserBlockingPriority,Ti=T.unstable_NormalPriority,Nd=T.unstable_LowPriority,gr=T.unstable_IdlePriority,Md=T.log,Od=T.unstable_setDisableYieldValue,zn=null,nt=null;function Ft(e){if(typeof Md=="function"&&Od(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(zn,e)}catch{}}var it=Math.clz32?Math.clz32:Ud,qd=Math.log,kd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(qd(e)/kd|0)|0}var wi=256,xi=262144,Di=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ei(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~l,n!==0?i=wa(n):(o&=s,o!==0?i=wa(o):a||(a=s&~e,a!==0&&(i=wa(a))))):(s=n&~l,s!==0?i=wa(s):o!==0?i=wa(o):a||(a=n&~e,a!==0&&(i=wa(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function Xl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _d(e,t,a,n,i,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var y=31-it(a),C=1<<y;s[y]=0,r[y]=-1;var h=p[y];if(h!==null)for(p[y]=null,y=0;y<h.length;y++){var g=h[y];g!==null&&(g.lane&=-536870913)}a&=~C}n!==0&&vr(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function vr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-it(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function br(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-it(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Sr(e,t){var a=t&-t;return a=(a&42)!==0?1:Zl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cr(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:sd(e.type))}function Ar(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var $t=Math.random().toString(36).slice(2),qe="__reactFiber$"+$t,Je="__reactProps$"+$t,Ga="__reactContainer$"+$t,Wl="__reactEvents$"+$t,jd="__reactListeners$"+$t,Bd="__reactHandles$"+$t,Tr="__reactResources$"+$t,Mn="__reactMarker$"+$t;function Pl(e){delete e[qe],delete e[Je],delete e[Wl],delete e[jd],delete e[Bd]}function Ya(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Vf(e);e!==null;){if(a=e[qe])return a;e=Vf(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[qe]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function On(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Va(e){var t=e[Tr];return t||(t=e[Tr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ne(e){e[Mn]=!0}var wr=new Set,xr={};function xa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(xr[e]=t,e=0;e<t.length;e++)wr.add(t[e])}var Kd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},Er={};function Ld(e){return Yl.call(Er,e)?!0:Yl.call(Dr,e)?!1:Kd.test(e)?Er[e]=!0:(Dr[e]=!0,!1)}function zi(e,t,a){if(Ld(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){if(!e._valueTracker){var t=zr(e)?"checked":"value";e._valueTracker=Gd(e,t,""+e[t])}}function Rr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=zr(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function yt(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,a,n,i,l,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$l(e,o,gt(t)):a!=null?$l(e,o,gt(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+gt(s):e.removeAttribute("name")}function Nr(e,t,a,n,i,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Il(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Il(e)}function $l(e,t,a){t==="number"&&Ni(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mr(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function Or(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(tt(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Il(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function kr(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&qr(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&qr(e,l,t[l])}function eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var to=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Pa=null;function Ur(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Je]||null;if(!i)throw Error(d(90));Fl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Rr(n)}break e;case"textarea":Mr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var no=!1;function Hr(e,t,a){if(no)return e(t,a);no=!0;try{var n=e(t);return n}finally{if(no=!1,(Wa!==null||Pa!==null)&&(vl(),Wa&&(t=Wa,e=Pa,Pa=Wa=null,Ur(t),e)))for(t=0;t<e.length;t++)Ur(e[t])}}function qn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Je]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(Ut)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){io=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{io=!1}var ea=null,lo=null,Oi=null;function _r(){if(Oi)return Oi;var e,t=lo,a=t.length,n,i="value"in ea?ea.value:ea.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[l-n];n++);return Oi=i.slice(e,1<n?1-n:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function jr(){return!1}function We(e){function t(a,n,i,l,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ki:jr,this.isPropagationStopped=jr,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=We(Da),Un=O({},Da,{view:0,detail:0}),Zd=We(Un),oo,so,Hn,Hi=O({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(oo=e.screenX-Hn.screenX,so=e.screenY-Hn.screenY):so=oo=0,Hn=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Br=We(Hi),Jd=O({},Hi,{dataTransfer:0}),Wd=We(Jd),Pd=O({},Un,{relatedTarget:0}),ro=We(Pd),Id=O({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=We(Id),$d=O({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=We($d),tm=O({},Da,{data:0}),Kr=We(tm),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=im[e])?!!t[e]:!1}function uo(){return lm}var om=O({},Un,{key:function(e){if(e.key){var t=am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=We(om),rm=O({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lr=We(rm),um=O({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),cm=We(um),fm=O({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=We(fm),mm=O({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=We(mm),hm=O({},Da,{newState:0,oldState:0}),gm=We(hm),ym=[9,13,27,32],co=Ut&&"CompositionEvent"in window,_n=null;Ut&&"documentMode"in document&&(_n=document.documentMode);var vm=Ut&&"TextEvent"in window&&!_n,Gr=Ut&&(!co||_n&&8<_n&&11>=_n),Yr=" ",Qr=!1;function Vr(e,t){switch(e){case"keyup":return ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function bm(e,t){switch(e){case"compositionend":return Xr(t);case"keypress":return t.which!==32?null:(Qr=!0,Yr);case"textInput":return e=t.data,e===Yr&&Qr?null:e;default:return null}}function Sm(e,t){if(Ia)return e==="compositionend"||!co&&Vr(e,t)?(e=_r(),Oi=lo=ea=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gr&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function Jr(e,t,a,n){Wa?Pa?Pa.push(n):Pa=[n]:Wa=n,t=xl(t,"onChange"),0<t.length&&(a=new Ui("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var jn=null,Bn=null;function Am(e){Mf(e,0)}function _i(e){var t=On(e);if(Rr(t))return e}function Wr(e,t){if(e==="change")return t}var Pr=!1;if(Ut){var fo;if(Ut){var mo="oninput"in document;if(!mo){var Ir=document.createElement("div");Ir.setAttribute("oninput","return;"),mo=typeof Ir.oninput=="function"}fo=mo}else fo=!1;Pr=fo&&(!document.documentMode||9<document.documentMode)}function Fr(){jn&&(jn.detachEvent("onpropertychange",$r),Bn=jn=null)}function $r(e){if(e.propertyName==="value"&&_i(Bn)){var t=[];Jr(t,Bn,e,ao(e)),Hr(Am,t)}}function Tm(e,t,a){e==="focusin"?(Fr(),jn=t,Bn=a,jn.attachEvent("onpropertychange",$r)):e==="focusout"&&Fr()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Bn)}function xm(e,t){if(e==="click")return _i(t)}function Dm(e,t){if(e==="input"||e==="change")return _i(t)}function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Em;function Kn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Yl.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var a=eu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=eu(a)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ni(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ni(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zm=Ut&&"documentMode"in document&&11>=document.documentMode,Fa=null,ho=null,Ln=null,go=!1;function iu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;go||Fa==null||Fa!==Ni(n)||(n=Fa,"selectionStart"in n&&po(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&Kn(Ln,n)||(Ln=n,n=xl(ho,"onSelect"),0<n.length&&(t=new Ui("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Fa)))}function Ea(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},yo={},lu={};Ut&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function za(e){if(yo[e])return yo[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lu)return yo[e]=t[a];return e}var ou=za("animationend"),su=za("animationiteration"),ru=za("animationstart"),Rm=za("transitionrun"),Nm=za("transitionstart"),Mm=za("transitioncancel"),uu=za("transitionend"),cu=new Map,vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vo.push("scrollEnd");function Dt(e,t){cu.set(e,t),xa(t,[e])}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],en=0,bo=0;function Bi(){for(var e=en,t=bo=en=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var l=vt[t];if(vt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}l!==0&&fu(a,i,l)}}function Ki(e,t,a,n){vt[en++]=e,vt[en++]=t,vt[en++]=a,vt[en++]=n,bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function So(e,t,a,n){return Ki(e,t,a,n),Li(e)}function Ra(e,t){return Ki(e,null,null,t),Li(e)}function fu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-it(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Li(e){if(50<ui)throw ui=0,Rs=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tn={};function Om(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,a,n){return new Om(e,t,a,n)}function Co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=ot(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function du(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,a,n,i,l){var o=0;if(n=e,typeof e=="function")Co(e)&&(o=1);else if(typeof e=="string")o=_p(e,a,R.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pt:return e=ot(31,a,t,i),e.elementType=pt,e.lanes=l,e;case De:return Na(a.children,i,l,t);case Xe:o=8,i|=24;break;case Be:return e=ot(12,a,t,i|2),e.elementType=Be,e.lanes=l,e;case mt:return e=ot(13,a,t,i),e.elementType=mt,e.lanes=l,e;case Ke:return e=ot(19,a,t,i),e.elementType=Ke,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:o=10;break e;case dt:o=9;break e;case Ee:o=11;break e;case Q:o=14;break e;case Le:o=16,n=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=ot(o,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Na(e,t,a,n){return e=ot(7,e,n,t),e.lanes=a,e}function Ao(e,t,a){return e=ot(6,e,null,t),e.lanes=a,e}function mu(e){var t=ot(18,null,null,0);return t.stateNode=e,t}function To(e,t,a){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pu=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:mr(t)},pu.set(e,t),t)}return{value:e,source:t,stack:mr(t)}}var an=[],nn=0,Yi=null,Gn=0,St=[],Ct=0,ta=null,Rt=1,Nt="";function _t(e,t){an[nn++]=Gn,an[nn++]=Yi,Yi=e,Gn=t}function hu(e,t,a){St[Ct++]=Rt,St[Ct++]=Nt,St[Ct++]=ta,ta=e;var n=Rt;e=Nt;var i=32-it(n)-1;n&=~(1<<i),a+=1;var l=32-it(t)+i;if(30<l){var o=i-i%5;l=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Rt=1<<32-it(t)+i|a<<i|n,Nt=l+e}else Rt=1<<l|a<<i|n,Nt=e}function wo(e){e.return!==null&&(_t(e,1),hu(e,1,0))}function xo(e){for(;e===Yi;)Yi=an[--nn],an[nn]=null,Gn=an[--nn],an[nn]=null;for(;e===ta;)ta=St[--Ct],St[Ct]=null,Nt=St[--Ct],St[Ct]=null,Rt=St[--Ct],St[Ct]=null}function gu(e,t){St[Ct++]=Rt,St[Ct++]=Nt,St[Ct++]=ta,Rt=t.id,Nt=t.overflow,ta=e}var ke=null,me=null,I=!1,aa=null,At=!1,Do=Error(d(519));function na(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yn(bt(t,e)),Do}function yu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[qe]=e,t[Je]=n,a){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(a=0;a<fi.length;a++)Z(fi[a],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),Nr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),Or(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Uf(t.textContent,a)?(n.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),n.onScroll!=null&&Z("scroll",t),n.onScrollEnd!=null&&Z("scrollend",t),n.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||na(e,!0)}function vu(e){for(ke=e.return;ke;)switch(ke.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:ke=ke.return}}function ln(e){if(e!==ke)return!1;if(!I)return vu(e),I=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qs(e.type,e.memoizedProps)),a=!a),a&&me&&na(e),vu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));me=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));me=Qf(e)}else t===27?(t=me,ya(e.type)?(e=Ws,Ws=null,me=e):me=t):me=ke?wt(e.stateNode.nextSibling):null;return!0}function Ma(){me=ke=null,I=!1}function Eo(){var e=aa;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),aa=null),e}function Yn(e){aa===null?aa=[e]:aa.push(e)}var zo=c(null),Oa=null,jt=null;function ia(e,t,a){E(zo,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=zo.current,A(zo)}function Ro(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function No(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var s=l;l=i;for(var r=0;r<t.length;r++)if(s.context===t[r]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),Ro(l.return,a,e),n||(o=null);break e}l=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(d(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Ro(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function on(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var s=i.type;lt(i.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(i===ae.current){if(o=i.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}i=i.return}e!==null&&No(t,e,a,n),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Oa=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return bu(Oa,e)}function Vi(e,t){return Oa===null&&qa(e),bu(e,t)}function bu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},jt===null){if(e===null)throw Error(d(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return a}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},km=T.unstable_scheduleCallback,Um=T.unstable_NormalPriority,Ae={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mo(){return{controller:new qm,data:new Map,refCount:0}}function Qn(e){e.refCount--,e.refCount===0&&km(Um,function(){e.controller.abort()})}var Vn=null,Oo=0,sn=0,rn=null;function Hm(e,t){if(Vn===null){var a=Vn=[];Oo=0,sn=Us(),rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Oo++,t.then(Su,Su),t}function Su(){if(--Oo===0&&Vn!==null){rn!==null&&(rn.status="fulfilled");var e=Vn;Vn=null,sn=0,rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _m(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Cu=v.S;v.S=function(e,t){lf=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hm(e,t),Cu!==null&&Cu(e,t)};var ka=c(null);function qo(){var e=ka.current;return e!==null?e:fe.pooledCache}function Xi(e,t){t===null?E(ka,ka.current):E(ka,t.pool)}function Au(){var e=qo();return e===null?null:{parent:Ae._currentValue,pool:e}}var un=Error(d(460)),ko=Error(d(474)),Zi=Error(d(542)),Ji={then:function(){}};function Tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(kt,kt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Du(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Du(e),e}throw Ha=t,un}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,un):a}}var Ha=null;function xu(){if(Ha===null)throw Error(d(459));var e=Ha;return Ha=null,e}function Du(e){if(e===un||e===Zi)throw Error(d(483))}var cn=null,Xn=0;function Wi(e){var t=Xn;return Xn+=1,cn===null&&(cn=[]),wu(cn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pi(e,t){throw t.$$typeof===ne?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eu(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function a(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function n(f){for(var u=new Map;f!==null;)f.key!==null?u.set(f.key,f):u.set(f.index,f),f=f.sibling;return u}function i(f,u){return f=Ht(f,u),f.index=0,f.sibling=null,f}function l(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=67108866,u):m):(f.flags|=67108866,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function s(f,u,m,S){return u===null||u.tag!==6?(u=Ao(m,f.mode,S),u.return=f,u):(u=i(u,m),u.return=f,u)}function r(f,u,m,S){var M=m.type;return M===De?y(f,u,m.props.children,S,m.key):u!==null&&(u.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Le&&Ua(M)===u.type)?(u=i(u,m.props),Zn(u,m),u.return=f,u):(u=Gi(m.type,m.key,m.props,null,f.mode,S),Zn(u,m),u.return=f,u)}function p(f,u,m,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=To(m,f.mode,S),u.return=f,u):(u=i(u,m.children||[]),u.return=f,u)}function y(f,u,m,S,M){return u===null||u.tag!==7?(u=Na(m,f.mode,S,M),u.return=f,u):(u=i(u,m),u.return=f,u)}function C(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Ao(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ge:return m=Gi(u.type,u.key,u.props,null,f.mode,m),Zn(m,u),m.return=f,m;case Oe:return u=To(u,f.mode,m),u.return=f,u;case Le:return u=Ua(u),C(f,u,m)}if(tt(u)||se(u))return u=Na(u,f.mode,m,null),u.return=f,u;if(typeof u.then=="function")return C(f,Wi(u),m);if(u.$$typeof===Re)return C(f,Vi(f,u),m);Pi(f,u)}return null}function h(f,u,m,S){var M=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:s(f,u,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ge:return m.key===M?r(f,u,m,S):null;case Oe:return m.key===M?p(f,u,m,S):null;case Le:return m=Ua(m),h(f,u,m,S)}if(tt(m)||se(m))return M!==null?null:y(f,u,m,S,null);if(typeof m.then=="function")return h(f,u,Wi(m),S);if(m.$$typeof===Re)return h(f,u,Vi(f,m),S);Pi(f,m)}return null}function g(f,u,m,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(m)||null,s(u,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ge:return f=f.get(S.key===null?m:S.key)||null,r(u,f,S,M);case Oe:return f=f.get(S.key===null?m:S.key)||null,p(u,f,S,M);case Le:return S=Ua(S),g(f,u,m,S,M)}if(tt(S)||se(S))return f=f.get(m)||null,y(u,f,S,M,null);if(typeof S.then=="function")return g(f,u,m,Wi(S),M);if(S.$$typeof===Re)return g(f,u,m,Vi(u,S),M);Pi(u,S)}return null}function z(f,u,m,S){for(var M=null,F=null,N=u,G=u=0,W=null;N!==null&&G<m.length;G++){N.index>G?(W=N,N=null):W=N.sibling;var $=h(f,N,m[G],S);if($===null){N===null&&(N=W);break}e&&N&&$.alternate===null&&t(f,N),u=l($,u,G),F===null?M=$:F.sibling=$,F=$,N=W}if(G===m.length)return a(f,N),I&&_t(f,G),M;if(N===null){for(;G<m.length;G++)N=C(f,m[G],S),N!==null&&(u=l(N,u,G),F===null?M=N:F.sibling=N,F=N);return I&&_t(f,G),M}for(N=n(N);G<m.length;G++)W=g(N,f,G,m[G],S),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?G:W.key),u=l(W,u,G),F===null?M=W:F.sibling=W,F=W);return e&&N.forEach(function(Aa){return t(f,Aa)}),I&&_t(f,G),M}function k(f,u,m,S){if(m==null)throw Error(d(151));for(var M=null,F=null,N=u,G=u=0,W=null,$=m.next();N!==null&&!$.done;G++,$=m.next()){N.index>G?(W=N,N=null):W=N.sibling;var Aa=h(f,N,$.value,S);if(Aa===null){N===null&&(N=W);break}e&&N&&Aa.alternate===null&&t(f,N),u=l(Aa,u,G),F===null?M=Aa:F.sibling=Aa,F=Aa,N=W}if($.done)return a(f,N),I&&_t(f,G),M;if(N===null){for(;!$.done;G++,$=m.next())$=C(f,$.value,S),$!==null&&(u=l($,u,G),F===null?M=$:F.sibling=$,F=$);return I&&_t(f,G),M}for(N=n(N);!$.done;G++,$=m.next())$=g(N,f,G,$.value,S),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?G:$.key),u=l($,u,G),F===null?M=$:F.sibling=$,F=$);return e&&N.forEach(function(Jp){return t(f,Jp)}),I&&_t(f,G),M}function ce(f,u,m,S){if(typeof m=="object"&&m!==null&&m.type===De&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ge:e:{for(var M=m.key;u!==null;){if(u.key===M){if(M=m.type,M===De){if(u.tag===7){a(f,u.sibling),S=i(u,m.props.children),S.return=f,f=S;break e}}else if(u.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Le&&Ua(M)===u.type){a(f,u.sibling),S=i(u,m.props),Zn(S,m),S.return=f,f=S;break e}a(f,u);break}else t(f,u);u=u.sibling}m.type===De?(S=Na(m.props.children,f.mode,S,m.key),S.return=f,f=S):(S=Gi(m.type,m.key,m.props,null,f.mode,S),Zn(S,m),S.return=f,f=S)}return o(f);case Oe:e:{for(M=m.key;u!==null;){if(u.key===M)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){a(f,u.sibling),S=i(u,m.children||[]),S.return=f,f=S;break e}else{a(f,u);break}else t(f,u);u=u.sibling}S=To(m,f.mode,S),S.return=f,f=S}return o(f);case Le:return m=Ua(m),ce(f,u,m,S)}if(tt(m))return z(f,u,m,S);if(se(m)){if(M=se(m),typeof M!="function")throw Error(d(150));return m=M.call(m),k(f,u,m,S)}if(typeof m.then=="function")return ce(f,u,Wi(m),S);if(m.$$typeof===Re)return ce(f,u,Vi(f,m),S);Pi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,u!==null&&u.tag===6?(a(f,u.sibling),S=i(u,m),S.return=f,f=S):(a(f,u),S=Ao(m,f.mode,S),S.return=f,f=S),o(f)):a(f,u)}return function(f,u,m,S){try{Xn=0;var M=ce(f,u,m,S);return cn=null,M}catch(N){if(N===un||N===Zi)throw N;var F=ot(29,N,null,f.mode);return F.lanes=S,F.return=f,F}}}var _a=Eu(!0),zu=Eu(!1),la=!1;function Uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ho(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Li(e),fu(e,null,a),t}return Ki(e,n,t,a),Li(e)}function Jn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}function _o(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jo=!1;function Wn(){if(jo){var e=rn;if(e!==null)throw e}}function Pn(e,t,a,n){jo=!1;var i=e.updateQueue;la=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var r=s,p=r.next;r.next=null,o===null?l=p:o.next=p,o=r;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=r))}if(l!==null){var C=i.baseState;o=0,y=p=r=null,s=l;do{var h=s.lane&-536870913,g=h!==s.lane;if(g?(J&h)===h:(n&h)===h){h!==0&&h===sn&&(jo=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var z=e,k=s;h=t;var ce=a;switch(k.tag){case 1:if(z=k.payload,typeof z=="function"){C=z.call(ce,C,h);break e}C=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=k.payload,h=typeof z=="function"?z.call(ce,C,h):z,h==null)break e;C=O({},C,h);break e;case 2:la=!0}}h=s.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[h]:g.push(h))}else g={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=g,r=C):y=y.next=g,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);y===null&&(r=C),i.baseState=r,i.firstBaseUpdate=p,i.lastBaseUpdate=y,l===null&&(i.shared.lanes=0),da|=o,e.lanes=o,e.memoizedState=C}}function Ru(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Nu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ru(a[e],t)}var fn=c(null),Ii=c(0);function Mu(e,t){e=Jt,E(Ii,e),E(fn,t),Jt=e|t.baseLanes}function Bo(){E(Ii,Jt),E(fn,fn.current)}function Ko(){Jt=Ii.current,A(fn),A(Ii)}var st=c(null),Tt=null;function ra(e){var t=e.alternate;E(Se,Se.current&1),E(st,e),Tt===null&&(t===null||fn.current!==null||t.memoizedState!==null)&&(Tt=e)}function Lo(e){E(Se,Se.current),E(st,e),Tt===null&&(Tt=e)}function Ou(e){e.tag===22?(E(Se,Se.current),E(st,e),Tt===null&&(Tt=e)):ua()}function ua(){E(Se,Se.current),E(st,st.current)}function rt(e){A(st),Tt===e&&(Tt=null),A(Se)}var Se=c(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zs(a)||Js(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,K=null,re=null,Te=null,$i=!1,dn=!1,ja=!1,el=0,In=0,mn=null,jm=0;function ye(){throw Error(d(321))}function Go(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!lt(e[a],t[a]))return!1;return!0}function Yo(e,t,a,n,i,l){return Kt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hc:is,ja=!1,l=a(n,i),ja=!1,dn&&(l=ku(t,a,n,i)),qu(e),l}function qu(e){v.H=ei;var t=re!==null&&re.next!==null;if(Kt=0,Te=re=K=null,$i=!1,In=0,mn=null,t)throw Error(d(300));e===null||we||(e=e.dependencies,e!==null&&Qi(e)&&(we=!0))}function ku(e,t,a,n){K=e;var i=0;do{if(dn&&(mn=null),In=0,dn=!1,25<=i)throw Error(d(301));if(i+=1,Te=re=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}v.H=gc,l=t(a,n)}while(dn);return l}function Bm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fn(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(K.flags|=1024),t}function Qo(){var e=el!==0;return el=0,e}function Vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xo(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}Kt=0,Te=re=K=null,dn=!1,In=el=0,mn=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?K.memoizedState=Te=e:Te=Te.next=e,Te}function Ce(){if(re===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Te===null?K.memoizedState:Te.next;if(t!==null)Te=t,re=e;else{if(e===null)throw K.alternate===null?Error(d(467)):Error(d(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Te===null?K.memoizedState=Te=e:Te=Te.next=e}return Te}function tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fn(e){var t=In;return In+=1,mn===null&&(mn=[]),e=wu(mn,e,t),t=K,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hc:is),e}function al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fn(e);if(e.$$typeof===Re)return Ue(e)}throw Error(d(438,String(e)))}function Zo(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=K.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=tl(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=It;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Ce();return Jo(t,re,e)}function Jo(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var s=o=null,r=null,p=t,y=!1;do{var C=p.lane&-536870913;if(C!==p.lane?(J&C)===C:(Kt&C)===C){var h=p.revertLane;if(h===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),C===sn&&(y=!0);else if((Kt&h)===h){p=p.next,h===sn&&(y=!0);continue}else C={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=C,o=l):r=r.next=C,K.lanes|=h,da|=h;C=p.action,ja&&a(l,C),l=p.hasEagerState?p.eagerState:a(l,C)}else h={lane:C,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=h,o=l):r=r.next=h,K.lanes|=C,da|=C;p=p.next}while(p!==null&&p!==t);if(r===null?o=l:r.next=s,!lt(l,e.memoizedState)&&(we=!0,y&&(a=rn,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=r,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Wo(e){var t=Ce(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);lt(l,t.memoizedState)||(we=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Uu(e,t,a){var n=K,i=Ce(),l=I;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!lt((re||i).memoizedState,a);if(o&&(i.memoizedState=a,we=!0),i=i.queue,Fo(ju.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,pn(9,{destroy:void 0},_u.bind(null,n,i,a,t),null),fe===null)throw Error(d(349));l||(Kt&127)!==0||Hu(n,t,a)}return a}function Hu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=tl(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function _u(e,t,a,n){t.value=a,t.getSnapshot=n,Bu(t)&&Ku(e)}function ju(e,t,a){return a(function(){Bu(t)&&Ku(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!lt(e,a)}catch{return!0}}function Ku(e){var t=Ra(e,2);t!==null&&et(t,e,2)}function Po(e){var t=Ve();if(typeof e=="function"){var a=e;if(e=a(),ja){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Lu(e,t,a,n){return e.baseState=a,Jo(e,re,typeof n=="function"?n:Lt)}function Km(e,t,a,n,i){if(ol(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};v.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,Gu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Gu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=v.T,o={};v.T=o;try{var s=a(i,n),r=v.S;r!==null&&r(o,s),Yu(e,t,s)}catch(p){Io(e,t,p)}finally{l!==null&&o.types!==null&&(l.types=o.types),v.T=l}}else try{l=a(i,n),Yu(e,t,l)}catch(p){Io(e,t,p)}}function Yu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Qu(e,t,n)},function(n){return Io(e,t,n)}):Qu(e,t,a)}function Qu(e,t,a){t.status="fulfilled",t.value=a,Vu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gu(e,a)))}function Io(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Vu(t),t=t.next;while(t!==n)}e.action=null}function Vu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xu(e,t){return t}function Zu(e,t){if(I){var a=fe.formState;if(a!==null){e:{var n=K;if(I){if(me){t:{for(var i=me,l=At;i.nodeType!==8;){if(!l){i=null;break t}if(i=wt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){me=wt(i.nextSibling),n=i.data==="F!";break e}}na(n)}n=!1}n&&(t=a[0])}}return a=Ve(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},a.queue=n,a=dc.bind(null,K,n),n.dispatch=a,n=Po(!1),l=ns.bind(null,K,!1,n.queue),n=Ve(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Km.bind(null,K,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ju(e){var t=Ce();return Wu(t,re,e)}function Wu(e,t,a){if(t=Jo(e,t,Xu)[0],e=nl(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fn(t)}catch(o){throw o===un?Zi:o}else n=t;t=Ce();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(K.flags|=2048,pn(9,{destroy:void 0},Lm.bind(null,i,a),null)),[n,l,e]}function Lm(e,t){e.action=t}function Pu(e){var t=Ce(),a=re;if(a!==null)return Wu(t,a,e);Ce(),t=t.memoizedState,a=Ce();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=K.updateQueue,t===null&&(t=tl(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Iu(){return Ce().memoizedState}function il(e,t,a,n){var i=Ve();K.flags|=e,i.memoizedState=pn(1|t,{destroy:void 0},a,n===void 0?null:n)}function ll(e,t,a,n){var i=Ce();n=n===void 0?null:n;var l=i.memoizedState.inst;re!==null&&n!==null&&Go(n,re.memoizedState.deps)?i.memoizedState=pn(t,l,a,n):(K.flags|=e,i.memoizedState=pn(1|t,l,a,n))}function Fu(e,t){il(8390656,8,e,t)}function Fo(e,t){ll(2048,8,e,t)}function Gm(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=tl(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $u(e){var t=Ce().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function ec(e,t){return ll(4,2,e,t)}function tc(e,t){return ll(4,4,e,t)}function ac(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,a){a=a!=null?a.concat([e]):null,ll(4,4,ac.bind(null,t,e),a)}function $o(){}function ic(e,t){var a=Ce();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Go(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lc(e,t){var a=Ce();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Go(t,n[1]))return n[0];if(n=e(),ja){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n}function es(e,t,a){return a===void 0||(Kt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),K.lanes|=e,da|=e,a)}function oc(e,t,a,n){return lt(a,t)?a:fn.current!==null?(e=es(e,a,n),lt(e,t)||(we=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(J&261930)===0?(we=!0,e.memoizedState=a):(e=sf(),K.lanes|=e,da|=e,t)}function sc(e,t,a,n,i){var l=x.p;x.p=l!==0&&8>l?l:8;var o=v.T,s={};v.T=s,ns(e,!1,t,a);try{var r=i(),p=v.S;if(p!==null&&p(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var y=_m(r,n);$n(e,t,y,ft(e))}else $n(e,t,n,ft(e))}catch(C){$n(e,t,{then:function(){},status:"rejected",reason:C},ft())}finally{x.p=l,o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}function Ym(){}function ts(e,t,a,n){if(e.tag!==5)throw Error(d(476));var i=rc(e).queue;sc(e,i,t,q,a===null?Ym:function(){return uc(e),a(n)})}function rc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=rc(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},ft())}function as(){return Ue(gi)}function cc(){return Ce().memoizedState}function fc(){return Ce().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ft();e=oa(a);var n=sa(t,e,a);n!==null&&(et(n,t,a),Jn(n,t,a)),t={cache:Mo()},e.payload=t;return}t=t.return}}function Vm(e,t,a){var n=ft();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ol(e)?mc(t,a):(a=So(e,t,a,n),a!==null&&(et(a,e,n),pc(a,t,n)))}function dc(e,t,a){var n=ft();$n(e,t,a,n)}function $n(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(e))mc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,a);if(i.hasEagerState=!0,i.eagerState=s,lt(s,o))return Ki(e,t,i,0),fe===null&&Bi(),!1}catch{}if(a=So(e,t,i,n),a!==null)return et(a,e,n),pc(a,t,n),!0}return!1}function ns(e,t,a,n){if(n={lane:2,revertLane:Us(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(d(479))}else t=So(e,a,n,2),t!==null&&et(t,e,2)}function ol(e){var t=e.alternate;return e===K||t!==null&&t===K}function mc(e,t){dn=$i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}var ei={readContext:Ue,use:al,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ei.useEffectEvent=ye;var hc={readContext:Ue,use:al,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Fu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,il(4194308,4,ac.bind(null,t,e),a)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){il(4,2,e,t)},useMemo:function(e,t){var a=Ve();t=t===void 0?null:t;var n=e();if(ja){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ve();if(a!==void 0){var i=a(t);if(ja){Ft(!0);try{a(t)}finally{Ft(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Vm.bind(null,K,e),[n.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Po(e);var t=e.queue,a=dc.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ve();return es(a,e,t)},useTransition:function(){var e=Po(!1);return e=sc.bind(null,K,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=K,i=Ve();if(I){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),fe===null)throw Error(d(349));(J&127)!==0||Hu(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Fu(ju.bind(null,n,l,e),[e]),n.flags|=2048,pn(9,{destroy:void 0},_u.bind(null,n,l,a,t),null),a},useId:function(){var e=Ve(),t=fe.identifierPrefix;if(I){var a=Nt,n=Rt;a=(n&~(1<<32-it(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=el++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=jm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:as,useFormState:Zu,useActionState:Zu,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ns.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zo,useCacheRefresh:function(){return Ve().memoizedState=Qm.bind(null,K)},useEffectEvent:function(e){var t=Ve(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},is={readContext:Ue,use:al,useCallback:ic,useContext:Ue,useEffect:Fo,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:nl,useRef:Iu,useState:function(){return nl(Lt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ce();return oc(a,re.memoizedState,e,t)},useTransition:function(){var e=nl(Lt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:Uu,useId:cc,useHostTransitionStatus:as,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var a=Ce();return Lu(a,re,e,t)},useMemoCache:Zo,useCacheRefresh:fc};is.useEffectEvent=$u;var gc={readContext:Ue,use:al,useCallback:ic,useContext:Ue,useEffect:Fo,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:lc,useReducer:Wo,useRef:Iu,useState:function(){return Wo(Lt)},useDebugValue:$o,useDeferredValue:function(e,t){var a=Ce();return re===null?es(a,e,t):oc(a,re.memoizedState,e,t)},useTransition:function(){var e=Wo(Lt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:Uu,useId:cc,useHostTransitionStatus:as,useFormState:Pu,useActionState:Pu,useOptimistic:function(e,t){var a=Ce();return re!==null?Lu(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zo,useCacheRefresh:fc};gc.useEffectEvent=$u;function ls(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var os={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ft(),i=oa(n);i.payload=t,a!=null&&(i.callback=a),t=sa(e,i,n),t!==null&&(et(t,e,n),Jn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ft(),i=oa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=sa(e,i,n),t!==null&&(et(t,e,n),Jn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ft(),n=oa(a);n.tag=2,t!=null&&(n.callback=t),t=sa(e,n,a),t!==null&&(et(t,e,a),Jn(t,e,a))}};function yc(e,t,a,n,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(a,n)||!Kn(i,l):!0}function vc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function bc(e){ji(e)}function Sc(e){console.error(e)}function Cc(e){ji(e)}function sl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ac(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ss(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){sl(e,t)},a}function Tc(e){return e=oa(e),e.tag=3,e}function wc(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){Ac(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ac(t,a,n),typeof i!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Xm(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&on(t,a,i,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?bl():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ji?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Os(e,n,i)),!1;case 22:return a.flags|=65536,n===Ji?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Os(e,n,i)),!1}throw Error(d(435,a.tag))}return Os(e,n,i),bl(),!1}if(I)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Do&&(e=Error(d(422),{cause:n}),Yn(bt(e,a)))):(n!==Do&&(t=Error(d(423),{cause:n}),Yn(bt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=bt(n,a),i=ss(e.stateNode,n,i),_o(e,i),ve!==4&&(ve=2)),!1;var l=Error(d(520),{cause:n});if(l=bt(l,a),ri===null?ri=[l]:ri.push(l),ve!==4&&(ve=2),t===null)return!0;n=bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ss(a.stateNode,n,e),_o(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Tc(i),wc(i,e,a,n),_o(a,i),!1}a=a.return}while(a!==null);return!1}var rs=Error(d(461)),we=!1;function He(e,t,a,n){t.child=e===null?zu(t,null,a,n):_a(t,e.child,a,n)}function xc(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var o={};for(var s in n)s!=="ref"&&(o[s]=n[s])}else o=n;return qa(t),n=Yo(e,t,a,o,l,i),s=Qo(),e!==null&&!we?(Vo(e,t,i),Gt(e,t,i)):(I&&s&&wo(t),t.flags|=1,He(e,t,n,i),t.child)}function Dc(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!Co(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Ec(e,t,l,n,i)):(e=Gi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!gs(e,i)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Kn,a(o,n)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Ht(l,n),e.ref=t.ref,e.return=t,t.child=e}function Ec(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Kn(l,n)&&e.ref===t.ref)if(we=!1,t.pendingProps=n=l,gs(e,i))(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return us(e,t,a,n,i)}function zc(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Rc(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xi(t,l!==null?l.cachePool:null),l!==null?Mu(t,l):Bo(),Ou(t);else return n=t.lanes=536870912,Rc(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(Xi(t,l.cachePool),Mu(t,l),ua(),t.memoizedState=null):(e!==null&&Xi(t,null),Bo(),ua());return He(e,t,i,a),t.child}function ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rc(e,t,a,n,i){var l=qo();return l=l===null?null:{parent:Ae._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Xi(t,null),Bo(),Ou(t),e!==null&&on(e,t,n,!0),t.childLanes=i,null}function rl(e,t){return t=cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nc(e,t,a){return _a(t,e.child,null,a),e=rl(t,t.pendingProps),e.flags|=2,rt(t),t.memoizedState=null,e}function Zm(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(I){if(n.mode==="hidden")return e=rl(t,n),t.lanes=536870912,ti(null,e);if(Lo(t),(e=me)?(e=Yf(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Rt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=mu(e),a.return=t,t.child=a,ke=t,me=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return rl(t,n)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Lo(t),i)if(t.flags&256)t.flags&=-257,t=Nc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(we||on(e,t,a,!1),i=(a&e.childLanes)!==0,we||i){if(n=fe,n!==null&&(o=Sr(n,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Ra(e,o),et(n,e,o),rs;bl(),t=Nc(e,t,a)}else e=l.treeContext,me=wt(o.nextSibling),ke=t,I=!0,aa=null,At=!1,e!==null&&gu(t,e),t=rl(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ul(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function us(e,t,a,n,i){return qa(t),a=Yo(e,t,a,n,void 0,i),n=Qo(),e!==null&&!we?(Vo(e,t,i),Gt(e,t,i)):(I&&n&&wo(t),t.flags|=1,He(e,t,a,i),t.child)}function Mc(e,t,a,n,i,l){return qa(t),t.updateQueue=null,a=ku(t,n,a,i),qu(e),n=Qo(),e!==null&&!we?(Vo(e,t,l),Gt(e,t,l)):(I&&n&&wo(t),t.flags|=1,He(e,t,a,l),t.child)}function Oc(e,t,a,n,i){if(qa(t),t.stateNode===null){var l=tn,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ue(o)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=os,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},Uo(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ue(o):tn,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(ls(t,a,o,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&os.enqueueReplaceState(l,l.state,null),Pn(t,n,l,i),Wn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var s=t.memoizedProps,r=Ba(a,s);l.props=r;var p=l.context,y=a.contextType;o=tn,typeof y=="object"&&y!==null&&(o=Ue(y));var C=a.getDerivedStateFromProps;y=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||p!==o)&&vc(t,l,n,o),la=!1;var h=t.memoizedState;l.state=h,Pn(t,n,l,i),Wn(),p=t.memoizedState,s||h!==p||la?(typeof C=="function"&&(ls(t,a,C,n),p=t.memoizedState),(r=la||yc(t,a,r,n,h,p,o))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),l.props=n,l.state=p,l.context=o,n=r):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Ho(e,t),o=t.memoizedProps,y=Ba(a,o),l.props=y,C=t.pendingProps,h=l.context,p=a.contextType,r=tn,typeof p=="object"&&p!==null&&(r=Ue(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==C||h!==r)&&vc(t,l,n,r),la=!1,h=t.memoizedState,l.state=h,Pn(t,n,l,i),Wn();var g=t.memoizedState;o!==C||h!==g||la||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s=="function"&&(ls(t,a,s,n),g=t.memoizedState),(y=la||yc(t,a,y,n,h,g,r)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,r)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),l.props=n,l.state=g,l.context=r,n=y):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,ul(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=_a(t,e.child,null,i),t.child=_a(t,null,a,i)):He(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Gt(e,t,i),e}function qc(e,t,a,n){return Ma(),t.flags|=256,He(e,t,a,n),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fs(e){return{baseLanes:e,cachePool:Au()}}function ds(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ct),e}function kc(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(I){if(i?ra(t):ua(),(e=me)?(e=Yf(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Rt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=mu(e),a.return=t,t.child=a,ke=t,me=null)):e=null,e===null)throw na(t);return Js(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,i?(ua(),i=t.mode,s=cl({mode:"hidden",children:s},i),n=Na(n,i,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=fs(a),n.childLanes=ds(e,o,a),t.memoizedState=cs,ti(null,n)):(ra(t),ms(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(l)t.flags&256?(ra(t),t.flags&=-257,t=ps(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=n.fallback,i=t.mode,n=cl({mode:"visible",children:n.children},i),s=Na(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,_a(t,e.child,null,a),n=t.child,n.memoizedState=fs(a),n.childLanes=ds(e,o,a),t.memoizedState=cs,t=ti(null,n));else if(ra(t),Js(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var p=o.dgst;o=p,n=Error(d(419)),n.stack="",n.digest=o,Yn({value:n,source:null,stack:null}),t=ps(e,t,a)}else if(we||on(e,t,a,!1),o=(a&e.childLanes)!==0,we||o){if(o=fe,o!==null&&(n=Sr(o,a),n!==0&&n!==r.retryLane))throw r.retryLane=n,Ra(e,n),et(o,e,n),rs;Zs(s)||bl(),t=ps(e,t,a)}else Zs(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,me=wt(s.nextSibling),ke=t,I=!0,aa=null,At=!1,e!==null&&gu(t,e),t=ms(t,n.children),t.flags|=4096);return t}return i?(ua(),s=n.fallback,i=t.mode,r=e.child,p=r.sibling,n=Ht(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,p!==null?s=Ht(p,s):(s=Na(s,i,a,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,ti(null,n),n=t.child,s=e.child.memoizedState,s===null?s=fs(a):(i=s.cachePool,i!==null?(r=Ae._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Au(),s={baseLanes:s.baseLanes|a,cachePool:i}),n.memoizedState=s,n.childLanes=ds(e,o,a),t.memoizedState=cs,ti(e.child,n)):(ra(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function ms(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=ot(22,e,null,t),e.lanes=0,e}function ps(e,t,a){return _a(t,e.child,null,a),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ro(e.return,t,a)}function hs(e,t,a,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=l)}function Hc(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var o=Se.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,E(Se,o),He(e,t,n,a),n=I?Gn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,a,t);else if(e.tag===19)Uc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Fi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),hs(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}hs(t,!0,a,null,l,n);break;case"together":hs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(on(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qi(e)))}function Jm(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),ia(t,Ae,e.memoizedState.cache),Ma();break;case 27:case 5:En(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kc(e,t,a):(ra(t),e=Gt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(on(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Hc(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(Se,Se.current),n)break;return null;case 22:return t.lanes=0,zc(e,t,a,t.pendingProps);case 24:ia(t,Ae,e.memoizedState.cache)}return Gt(e,t,a)}function _c(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)we=!0;else{if(!gs(e,a)&&(t.flags&128)===0)return we=!1,Jm(e,t,a);we=(e.flags&131072)!==0}else we=!1,I&&(t.flags&1048576)!==0&&hu(t,Gn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")Co(e)?(n=Ba(e,n),t.tag=1,t=Oc(null,t,e,n,a)):(t.tag=0,t=us(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===Ee){t.tag=11,t=xc(null,t,e,n,a);break e}else if(i===Q){t.tag=14,t=Dc(null,t,e,n,a);break e}}throw t=Ze(e)||e,Error(d(306,t,""))}}return t;case 0:return us(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ba(n,t.pendingProps),Oc(e,t,n,i,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,Ho(e,t),Pn(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ia(t,Ae,n),n!==l.cache&&No(t,[Ae],a,!0),Wn(),n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=qc(e,t,n,a);break e}else if(n!==i){i=bt(Error(d(424)),t),Yn(i),t=qc(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=wt(e.firstChild),ke=t,I=!0,aa=null,At=!0,a=zu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ma(),n===i){t=Gt(e,t,a);break e}He(e,t,n,a)}t=t.child}return t;case 26:return ul(e,t),e===null?(a=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=a:I||(a=t.type,e=t.pendingProps,n=Dl(V.current).createElement(a),n[qe]=t,n[Je]=e,_e(n,a,e),Ne(n),t.stateNode=n):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return En(t),e===null&&I&&(n=t.stateNode=Xf(t.type,t.pendingProps,V.current),ke=t,At=!0,i=me,ya(t.type)?(Ws=i,me=wt(n.firstChild)):me=i),He(e,t,t.pendingProps.children,a),ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((i=n=me)&&(n=wp(n,t.type,t.pendingProps,At),n!==null?(t.stateNode=n,ke=t,me=wt(n.firstChild),At=!1,i=!0):i=!1),i||na(t)),En(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,n=l.children,Qs(i,l)?n=null:o!==null&&Qs(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Yo(e,t,Bm,null,null,a),gi._currentValue=i),ul(e,t),He(e,t,n,a),t.child;case 6:return e===null&&I&&((e=a=me)&&(a=xp(a,t.pendingProps,At),a!==null?(t.stateNode=a,ke=t,me=null,e=!0):e=!1),e||na(t)),null;case 13:return kc(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=_a(t,null,n,a):He(e,t,n,a),t.child;case 11:return xc(e,t,t.type,t.pendingProps,a);case 7:return He(e,t,t.pendingProps,a),t.child;case 8:return He(e,t,t.pendingProps.children,a),t.child;case 12:return He(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ia(t,t.type,n.value),He(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,qa(t),i=Ue(i),n=n(i),t.flags|=1,He(e,t,n,a),t.child;case 14:return Dc(e,t,t.type,t.pendingProps,a);case 15:return Ec(e,t,t.type,t.pendingProps,a);case 19:return Hc(e,t,a);case 31:return Zm(e,t,a);case 22:return zc(e,t,a,t.pendingProps);case 24:return qa(t),n=Ue(Ae),e===null?(i=qo(),i===null&&(i=fe,l=Mo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},Uo(t),ia(t,Ae,i)):((e.lanes&a)!==0&&(Ho(e,t),Pn(t,null,null,a),Wn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ia(t,Ae,n)):(n=l.cache,ia(t,Ae,n),n!==i.cache&&No(t,[Ae],a,!0))),He(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Yt(e){e.flags|=4}function ys(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ff())e.flags|=8192;else throw Ha=Ji,ko}else e.flags&=-16777217}function jc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ed(t))if(ff())e.flags|=8192;else throw Ha=Ji,ko}function fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yr():536870912,e.lanes|=t,vn|=t)}function ai(e,t){if(!I)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Wm(e,t,a){var n=t.pendingProps;switch(xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Bt(Ae),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ln(t)?Yt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Eo())),pe(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Yt(t),l!==null?(pe(t),jc(t,l)):(pe(t),ys(t,i,null,n,a))):l?l!==e.memoizedState?(Yt(t),pe(t),jc(t,l)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Yt(t),pe(t),ys(t,i,e,n,a)),null;case 27:if(Ai(t),a=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Yt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return pe(t),null}e=R.current,ln(t)?yu(t):(e=Xf(i,n,a),t.stateNode=e,Yt(t))}return pe(t),null;case 5:if(Ai(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Yt(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return pe(t),null}if(l=R.current,ln(t))yu(t);else{var o=Dl(V.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}l[qe]=t,l[Je]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(_e(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Yt(t)}}return pe(t),ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Yt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=V.current,ln(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ke,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Uf(e.nodeValue,a)),e||na(t,!0)}else e=Dl(e).createTextNode(n),e[qe]=t,t.stateNode=e}return pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=ln(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qe]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else a=Eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return pe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[qe]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else i=Eo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fl(t,t.updateQueue),pe(t),null);case 4:return be(),e===null&&Bs(t.stateNode.containerInfo),pe(t),null;case 10:return Bt(t.type),pe(t),null;case 19:if(A(Se),n=t.memoizedState,n===null)return pe(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ai(n,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Fi(e),l!==null){for(t.flags|=128,ai(n,!1),e=l.updateQueue,t.updateQueue=e,fl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)du(a,e),a=a.sibling;return E(Se,Se.current&1|2),I&&_t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&at()>gl&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304)}else{if(!i)if(e=Fi(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fl(t,e),ai(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!I)return pe(t),null}else 2*at()-n.renderingStartTime>gl&&a!==536870912&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=at(),e.sibling=null,a=Se.current,E(Se,i?a&1|2:a&1),I&&_t(t,n.treeForkCount),e):(pe(t),null);case 22:case 23:return rt(t),Ko(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),a=t.updateQueue,a!==null&&fl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&A(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(Ae),pe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Pm(e,t){switch(xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(Ae),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ai(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Se),null;case 4:return be(),null;case 10:return Bt(t.type),null;case 22:case 23:return rt(t),Ko(),e!==null&&A(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(Ae),null;case 25:return null;default:return null}}function Bc(e,t){switch(xo(t),t.tag){case 3:Bt(Ae),be();break;case 26:case 27:case 5:Ai(t);break;case 4:be();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:A(Se);break;case 10:Bt(t.type);break;case 22:case 23:rt(t),Ko(),e!==null&&A(ka);break;case 24:Bt(Ae)}}function ni(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,o=a.inst;n=l(),o.destroy=n}a=a.next}while(a!==i)}}catch(s){oe(t,t.return,s)}}function ca(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var o=n.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var r=a,p=s;try{p()}catch(y){oe(i,r,y)}}}n=n.next}while(n!==l)}}catch(y){oe(t,t.return,y)}}function Kc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Nu(t,a)}catch(n){oe(e,e.return,n)}}}function Lc(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){oe(e,t,n)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){oe(e,t,i)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){oe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){oe(e,t,i)}else a.current=null}function Gc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){oe(e,e.return,i)}}function vs(e,t,a){try{var n=e.stateNode;vp(n,e.type,a,t),n[Je]=t}catch(i){oe(e,e.return,i)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kt));else if(n!==4&&(n===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ss(e,t,a),e=e.sibling;e!==null;)Ss(e,t,a),e=e.sibling}function dl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dl(e,t,a),e=e.sibling;e!==null;)dl(e,t,a),e=e.sibling}function Qc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);_e(t,n,a),t[qe]=e,t[Je]=a}catch(l){oe(e,e.return,l)}}var Qt=!1,xe=!1,Cs=!1,Vc=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Im(e,t){if(e=e.containerInfo,Gs=ql,e=nu(e),po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,s=-1,r=-1,p=0,y=0,C=e,h=null;t:for(;;){for(var g;C!==a||i!==0&&C.nodeType!==3||(s=o+i),C!==l||n!==0&&C.nodeType!==3||(r=o+n),C.nodeType===3&&(o+=C.nodeValue.length),(g=C.firstChild)!==null;)h=C,C=g;for(;;){if(C===e)break t;if(h===a&&++p===i&&(s=o),h===l&&++y===n&&(r=o),(g=C.nextSibling)!==null)break;C=h,h=C.parentNode}C=g}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ys={focusedElem:e,selectionRange:a},ql=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var z=Ba(a.type,i);e=n.getSnapshotBeforeUpdate(z,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(k){oe(a,a.return,k)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Xc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&ni(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){oe(a,a.return,o)}else{var i=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){oe(a,a.return,o)}}n&64&&Kc(a),n&512&&ii(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Nu(e,t)}catch(o){oe(a,a.return,o)}}break;case 27:t===null&&n&4&&Qc(a);case 26:case 5:Xt(e,a),t===null&&n&4&&Gc(a),n&512&&ii(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&Wc(e,a);break;case 13:Xt(e,a),n&4&&Pc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=op.bind(null,a),Dp(e,a))));break;case 22:if(n=a.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||xe,i=Qt;var l=xe;Qt=n,(xe=t)&&!l?Zt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Qt=i,xe=l}break;case 30:break;default:Xt(e,a)}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Pe=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Jc(e,t,a),a=a.sibling}function Jc(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(zn,a)}catch{}switch(a.tag){case 26:xe||Mt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xe||Mt(a,t);var n=he,i=Pe;ya(a.type)&&(he=a.stateNode,Pe=!1),Vt(e,t,a),mi(a.stateNode),he=n,Pe=i;break;case 5:xe||Mt(a,t);case 6:if(n=he,i=Pe,he=null,Vt(e,t,a),he=n,Pe=i,he!==null)if(Pe)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(a.stateNode)}catch(l){oe(a,t,l)}else try{he.removeChild(a.stateNode)}catch(l){oe(a,t,l)}break;case 18:he!==null&&(Pe?(e=he,Lf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):Lf(he,a.stateNode));break;case 4:n=he,i=Pe,he=a.stateNode.containerInfo,Pe=!0,Vt(e,t,a),he=n,Pe=i;break;case 0:case 11:case 14:case 15:ca(2,a,t),xe||ca(4,a,t),Vt(e,t,a);break;case 1:xe||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Lc(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:xe=(n=xe)||a.memoizedState!==null,Vt(e,t,a),xe=n;break;default:Vt(e,t,a)}}function Wc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dn(e)}catch(a){oe(t,t.return,a)}}}function Pc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){oe(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vc),t;default:throw Error(d(435,e.tag))}}function ml(e,t){var a=Fm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=sp.bind(null,e,n);n.then(i,i)}})}function Ie(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){he=s.stateNode,Pe=!1;break e}break;case 5:he=s.stateNode,Pe=!1;break e;case 3:case 4:he=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(he===null)throw Error(d(160));Jc(l,o,i),he=null,Pe=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}var Et=null;function Ic(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(t,e),Fe(e),n&4&&(ca(3,e,e.return),ni(3,e),ca(5,e,e.return));break;case 1:Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&64&&Qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Et;if(Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Mn]||l[qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),_e(l,n,a),l[qe]=e,Ne(l),n=l;break e;case"link":var o=Ff("link","href",i).get(n+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}l=i.createElement(n),_e(l,n,a),i.head.appendChild(l);break;case"meta":if(o=Ff("meta","content",i).get(n+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}l=i.createElement(n),_e(l,n,a),i.head.appendChild(l);break;default:throw Error(d(468,n))}l[qe]=e,Ne(l),n=l}e.stateNode=n}else $f(i,e.type,e.stateNode);else e.stateNode=If(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?$f(i,e.type,e.stateNode):If(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),a!==null&&n&4&&vs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ie(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),e.flags&32){i=e.stateNode;try{Ja(i,"")}catch(z){oe(e,e.return,z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,vs(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Cs=!0);break;case 6:if(Ie(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(z){oe(e,e.return,z)}}break;case 3:if(Rl=null,i=Et,Et=El(t.containerInfo),Ie(t,e),Et=i,Fe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(z){oe(e,e.return,z)}Cs&&(Cs=!1,Fc(e));break;case 4:n=Et,Et=El(e.stateNode.containerInfo),Ie(t,e),Fe(e),Et=n;break;case 12:Ie(t,e),Fe(e);break;case 31:Ie(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 13:Ie(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hl=at()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 22:i=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,p=Qt,y=xe;if(Qt=p||i,xe=y||r,Ie(t,e),xe=y,Qt=p,Fe(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||r||Qt||xe||Ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(l=r.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var C=r.memoizedProps.style,h=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(z){oe(r,r.return,z)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(z){oe(r,r.return,z)}}}else if(t.tag===18){if(a===null){r=t;try{var g=r.stateNode;i?Gf(g,!0):Gf(r.stateNode,!1)}catch(z){oe(r,r.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ml(e,a))));break;case 19:Ie(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 30:break;case 21:break;default:Ie(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Yc(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,l=bs(e);dl(e,l,i);break;case 5:var o=a.stateNode;a.flags&32&&(Ja(o,""),a.flags&=-33);var s=bs(e);dl(e,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,p=bs(e);Ss(e,p,r);break;default:throw Error(d(161))}}catch(y){oe(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xc(e,t.alternate,t),t=t.sibling}function Ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ka(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Lc(t,t.return,a),Ka(t);break;case 27:mi(t.stateNode);case 26:case 5:Mt(t,t.return),Ka(t);break;case 22:t.memoizedState===null&&Ka(t);break;case 30:Ka(t);break;default:Ka(t)}e=e.sibling}}function Zt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Zt(i,l,a),ni(4,l);break;case 1:if(Zt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(p){oe(n,n.return,p)}if(n=l,i=n.updateQueue,i!==null){var s=n.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)Ru(r[i],s)}catch(p){oe(n,n.return,p)}}a&&o&64&&Kc(l),ii(l,l.return);break;case 27:Qc(l);case 26:case 5:Zt(i,l,a),a&&n===null&&o&4&&Gc(l),ii(l,l.return);break;case 12:Zt(i,l,a);break;case 31:Zt(i,l,a),a&&o&4&&Wc(i,l);break;case 13:Zt(i,l,a),a&&o&4&&Pc(i,l);break;case 22:l.memoizedState===null&&Zt(i,l,a),ii(l,l.return);break;case 30:break;default:Zt(i,l,a)}t=t.sibling}}function As(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qn(a))}function Ts(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e))}function zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$c(e,t,a,n),t=t.sibling}function $c(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,n),i&2048&&ni(9,t);break;case 1:zt(e,t,a,n);break;case 3:zt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e)));break;case 12:if(i&2048){zt(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){oe(t,t.return,r)}}else zt(e,t,a,n);break;case 31:zt(e,t,a,n);break;case 13:zt(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?zt(e,t,a,n):li(e,t):l._visibility&2?zt(e,t,a,n):(l._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&As(o,t);break;case 24:zt(e,t,a,n),i&2048&&Ts(t.alternate,t);break;default:zt(e,t,a,n)}}function hn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,s=a,r=n,p=o.flags;switch(o.tag){case 0:case 11:case 15:hn(l,o,s,r,i),ni(8,o);break;case 23:break;case 22:var y=o.stateNode;o.memoizedState!==null?y._visibility&2?hn(l,o,s,r,i):li(l,o):(y._visibility|=2,hn(l,o,s,r,i)),i&&p&2048&&As(o.alternate,o);break;case 24:hn(l,o,s,r,i),i&&p&2048&&Ts(o.alternate,o);break;default:hn(l,o,s,r,i)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:li(a,n),i&2048&&As(n.alternate,n);break;case 24:li(a,n),i&2048&&Ts(n.alternate,n);break;default:li(a,n)}t=t.sibling}}var oi=8192;function gn(e,t,a){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)ef(e,t,a),e=e.sibling}function ef(e,t,a){switch(e.tag){case 26:gn(e,t,a),e.flags&oi&&e.memoizedState!==null&&jp(a,Et,e.memoizedState,e.memoizedProps);break;case 5:gn(e,t,a);break;case 3:case 4:var n=Et;Et=El(e.stateNode.containerInfo),gn(e,t,a),Et=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oi,oi=16777216,gn(e,t,a),oi=n):gn(e,t,a));break;default:gn(e,t,a)}}function tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nf(n,e)}tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&ca(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pl(e)):si(e);break;default:si(e)}}function pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nf(n,e)}tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),pl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pl(t));break;default:pl(t)}e=e.sibling}}function nf(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Me=n;else e:for(a=e;Me!==null;){n=Me;var i=n.sibling,l=n.return;if(Zc(n),n===a){Me=null;break e}if(i!==null){i.return=l,Me=i;break e}Me=l}}}var $m={getCacheForType:function(e){var t=Ue(Ae),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ue(Ae).controller.signal}},ep=typeof WeakMap=="function"?WeakMap:Map,ee=0,fe=null,X=null,J=0,le=0,ut=null,fa=!1,yn=!1,ws=!1,Jt=0,ve=0,da=0,La=0,xs=0,ct=0,vn=0,ri=null,$e=null,Ds=!1,hl=0,lf=0,gl=1/0,yl=null,ma=null,ze=0,pa=null,bn=null,Wt=0,Es=0,zs=null,of=null,ui=0,Rs=null;function ft(){return(ee&2)!==0&&J!==0?J&-J:v.T!==null?Us():Cr()}function sf(){if(ct===0)if((J&536870912)===0||I){var e=xi;xi<<=1,(xi&3932160)===0&&(xi=262144),ct=e}else ct=536870912;return e=st.current,e!==null&&(e.flags|=32),ct}function et(e,t,a){(e===fe&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ha(e,J,ct,!1)),Nn(e,a),((ee&2)===0||e!==fe)&&(e===fe&&((ee&2)===0&&(La|=a),ve===4&&ha(e,J,ct,!1)),Ot(e))}function rf(e,t,a){if((ee&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rn(e,t),i=n?np(e,t):Ms(e,t,!0),l=n;do{if(i===0){yn&&!n&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!tp(a)){i=Ms(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;i=ri;var r=s.current.memoizedState.isDehydrated;if(r&&(Sn(s,o).flags|=256),o=Ms(s,o,!1),o!==2){if(ws&&!r){s.errorRecoveryDisabledLanes|=l,La|=l,i=4;break e}l=$e,$e=i,l!==null&&($e===null?$e=l:$e.push.apply($e,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){Sn(e,0),ha(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:ha(n,t,ct,!fa);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=hl+300-at(),10<i)){if(ha(n,t,ct,!fa),Ei(n,0,!0)!==0)break e;Wt=t,n.timeoutHandle=Bf(uf.bind(null,n,a,$e,yl,Ds,t,ct,La,vn,fa,l,"Throttled",-0,0),i);break e}uf(n,a,$e,yl,Ds,t,ct,La,vn,fa,l,null,-0,0)}}break}while(!0);Ot(e)}function uf(e,t,a,n,i,l,o,s,r,p,y,C,h,g){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},ef(t,l,C);var z=(l&62914560)===l?hl-at():(l&4194048)===l?lf-at():0;if(z=Bp(C,z),z!==null){Wt=l,e.cancelPendingCommit=z(yf.bind(null,e,t,l,a,n,i,o,s,r,y,C,null,h,g)),ha(e,l,o,!p);return}}yf(e,t,l,a,n,i,o,s,r)}function tp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!lt(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,n){t&=~xs,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-it(i),o=1<<l;n[l]=-1,i&=~o}a!==0&&vr(e,a,t)}function vl(){return(ee&6)===0?(ci(0),!1):!0}function Ns(){if(X!==null){if(le===0)var e=X.return;else e=X,jt=Oa=null,Xo(e),cn=null,Xn=0,e=X;for(;e!==null;)Bc(e.alternate,e),e=e.return;X=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,Ns(),fe=e,X=a=Ht(e.current,null),J=t,le=0,ut=null,fa=!1,yn=Rn(e,t),ws=!1,vn=ct=xs=La=da=ve=0,$e=ri=null,Ds=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-it(n),l=1<<i;t|=e[i],n&=~l}return Jt=t,Bi(),a}function cf(e,t){K=null,v.H=ei,t===un||t===Zi?(t=xu(),le=3):t===ko?(t=xu(),le=4):le=t===rs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,X===null&&(ve=1,sl(e,bt(t,e.current)))}function ff(){var e=st.current;return e===null?!0:(J&4194048)===J?Tt===null:(J&62914560)===J||(J&536870912)!==0?e===Tt:!1}function df(){var e=v.H;return v.H=ei,e===null?ei:e}function mf(){var e=v.A;return v.A=$m,e}function bl(){ve=4,fa||(J&4194048)!==J&&st.current!==null||(yn=!0),(da&134217727)===0&&(La&134217727)===0||fe===null||ha(fe,J,ct,!1)}function Ms(e,t,a){var n=ee;ee|=2;var i=df(),l=mf();(fe!==e||J!==t)&&(yl=null,Sn(e,t)),t=!1;var o=ve;e:do try{if(le!==0&&X!==null){var s=X,r=ut;switch(le){case 8:Ns(),o=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var p=le;if(le=0,ut=null,Cn(e,s,r,p),a&&yn){o=0;break e}break;default:p=le,le=0,ut=null,Cn(e,s,r,p)}}ap(),o=ve;break}catch(y){cf(e,y)}while(!0);return t&&e.shellSuspendCounter++,jt=Oa=null,ee=n,v.H=i,v.A=l,X===null&&(fe=null,J=0,Bi()),o}function ap(){for(;X!==null;)pf(X)}function np(e,t){var a=ee;ee|=2;var n=df(),i=mf();fe!==e||J!==t?(yl=null,gl=at()+500,Sn(e,t)):yn=Rn(e,t);e:do try{if(le!==0&&X!==null){t=X;var l=ut;t:switch(le){case 1:le=0,ut=null,Cn(e,t,l,1);break;case 2:case 9:if(Tu(l)){le=0,ut=null,hf(t);break}t=function(){le!==2&&le!==9||fe!==e||(le=7),Ot(e)},l.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Tu(l)?(le=0,ut=null,hf(t)):(le=0,ut=null,Cn(e,t,l,7));break;case 5:var o=null;switch(X.tag){case 26:o=X.memoizedState;case 5:case 27:var s=X;if(o?ed(o):s.stateNode.complete){le=0,ut=null;var r=s.sibling;if(r!==null)X=r;else{var p=s.return;p!==null?(X=p,Sl(p)):X=null}break t}}le=0,ut=null,Cn(e,t,l,5);break;case 6:le=0,ut=null,Cn(e,t,l,6);break;case 8:Ns(),ve=6;break e;default:throw Error(d(462))}}ip();break}catch(y){cf(e,y)}while(!0);return jt=Oa=null,v.H=n,v.A=i,ee=a,X!==null?0:(fe=null,J=0,Bi(),ve)}function ip(){for(;X!==null&&!Ed();)pf(X)}function pf(e){var t=_c(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Sl(e):X=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mc(a,t,t.pendingProps,t.type,void 0,J);break;case 11:t=Mc(a,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Xo(t);default:Bc(a,t),t=X=du(t,Jt),t=_c(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?Sl(e):X=t}function Cn(e,t,a,n){jt=Oa=null,Xo(t),cn=null,Xn=0;var i=t.return;try{if(Xm(e,i,t,a,J)){ve=1,sl(e,bt(a,e.current)),X=null;return}}catch(l){if(i!==null)throw X=i,l;ve=1,sl(e,bt(a,e.current)),X=null;return}t.flags&32768?(I||n===1?e=!0:yn||(J&536870912)!==0?e=!1:(fa=e=!0,(n===2||n===9||n===3||n===6)&&(n=st.current,n!==null&&n.tag===13&&(n.flags|=16384))),gf(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){gf(t,fa);return}e=t.return;var a=Wm(t.alternate,t,Jt);if(a!==null){X=a;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ve===0&&(ve=5)}function gf(e,t){do{var a=Pm(e.alternate,e);if(a!==null){a.flags&=32767,X=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=a}while(e!==null);ve=6,X=null}function yf(e,t,a,n,i,l,o,s,r){e.cancelPendingCommit=null;do Cl();while(ze!==0);if((ee&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=bo,_d(e,a,l,o,s,r),e===fe&&(X=fe=null,J=0),bn=t,pa=e,Wt=a,Es=l,zs=i,of=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rp(Ti,function(){return Af(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,i=x.p,x.p=2,o=ee,ee|=4;try{Im(e,t,a)}finally{ee=o,x.p=i,v.T=n}}ze=1,vf(),bf(),Sf()}}function vf(){if(ze===1){ze=0;var e=pa,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var i=ee;ee|=4;try{Ic(t,e);var l=Ys,o=nu(e.containerInfo),s=l.focusedElem,r=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&au(s.ownerDocument.documentElement,s)){if(r!==null&&po(s)){var p=r.start,y=r.end;if(y===void 0&&(y=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(y,s.value.length);else{var C=s.ownerDocument||document,h=C&&C.defaultView||window;if(h.getSelection){var g=h.getSelection(),z=s.textContent.length,k=Math.min(r.start,z),ce=r.end===void 0?k:Math.min(r.end,z);!g.extend&&k>ce&&(o=ce,ce=k,k=o);var f=tu(s,k),u=tu(s,ce);if(f&&u&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==u.node||g.focusOffset!==u.offset)){var m=C.createRange();m.setStart(f.node,f.offset),g.removeAllRanges(),k>ce?(g.addRange(m),g.extend(u.node,u.offset)):(m.setEnd(u.node,u.offset),g.addRange(m))}}}}for(C=[],g=s;g=g.parentNode;)g.nodeType===1&&C.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var S=C[s];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}ql=!!Gs,Ys=Gs=null}finally{ee=i,x.p=n,v.T=a}}e.current=t,ze=2}}function bf(){if(ze===2){ze=0;var e=pa,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var i=ee;ee|=4;try{Xc(e,t.alternate,t)}finally{ee=i,x.p=n,v.T=a}}ze=3}}function Sf(){if(ze===4||ze===3){ze=0,zd();var e=pa,t=bn,a=Wt,n=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ze=5:(ze=0,bn=pa=null,Cf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ma=null),Jl(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(zn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,i=x.p,x.p=2,v.T=null;try{for(var l=e.onRecoverableError,o=0;o<n.length;o++){var s=n[o];l(s.value,{componentStack:s.stack})}}finally{v.T=t,x.p=i}}(Wt&3)!==0&&Cl(),Ot(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Rs?ui++:(ui=0,Rs=e):ui=0,ci(0)}}function Cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qn(t)))}function Cl(){return vf(),bf(),Sf(),Af()}function Af(){if(ze!==5)return!1;var e=pa,t=Es;Es=0;var a=Jl(Wt),n=v.T,i=x.p;try{x.p=32>a?32:a,v.T=null,a=zs,zs=null;var l=pa,o=Wt;if(ze=0,bn=pa=null,Wt=0,(ee&6)!==0)throw Error(d(331));var s=ee;if(ee|=4,af(l.current),$c(l,l.current,o,a),ee=s,ci(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(zn,l)}catch{}return!0}finally{x.p=i,v.T=n,Cf(e,t)}}function Tf(e,t,a){t=bt(a,t),t=ss(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(Nn(e,2),Ot(e))}function oe(e,t,a){if(e.tag===3)Tf(e,e,a);else for(;t!==null;){if(t.tag===3){Tf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))){e=bt(a,e),a=Tc(2),n=sa(t,a,2),n!==null&&(wc(a,n,t,e),Nn(n,2),Ot(n));break}}t=t.return}}function Os(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ep;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(ws=!0,i.add(a),e=lp.bind(null,e,t,a),t.then(e,e))}function lp(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fe===e&&(J&a)===a&&(ve===4||ve===3&&(J&62914560)===J&&300>at()-hl?(ee&2)===0&&Sn(e,0):xs|=a,vn===J&&(vn=0)),Ot(e)}function wf(e,t){t===0&&(t=yr()),e=Ra(e,t),e!==null&&(Nn(e,t),Ot(e))}function op(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),wf(e,a)}function sp(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),wf(e,a)}function rp(e,t){return Ql(e,t)}var Al=null,An=null,qs=!1,Tl=!1,ks=!1,ga=0;function Ot(e){e!==An&&e.next===null&&(An===null?Al=An=e:An=An.next=e),Tl=!0,qs||(qs=!0,cp())}function ci(e,t){if(!ks&&Tl){ks=!0;do for(var a=!1,n=Al;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var o=n.suspendedLanes,s=n.pingedLanes;l=(1<<31-it(42|e)+1)-1,l&=i&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,zf(n,l))}else l=J,l=Ei(n,n===fe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Rn(n,l)||(a=!0,zf(n,l));n=n.next}while(a);ks=!1}}function up(){xf()}function xf(){Tl=qs=!1;var e=0;ga!==0&&Sp()&&(e=ga);for(var t=at(),a=null,n=Al;n!==null;){var i=n.next,l=Df(n,t);l===0?(n.next=null,a===null?Al=i:a.next=i,i===null&&(An=a)):(a=n,(e!==0||(l&3)!==0)&&(Tl=!0)),n=i}ze!==0&&ze!==5||ci(e),ga!==0&&(ga=0)}function Df(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-it(l),s=1<<o,r=i[o];r===-1?((s&a)===0||(s&n)!==0)&&(i[o]=Hd(s,t)):r<=t&&(e.expiredLanes|=s),l&=~s}if(t=fe,a=J,a=Ei(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Vl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Vl(n),Jl(a)){case 2:case 8:a=hr;break;case 32:a=Ti;break;case 268435456:a=gr;break;default:a=Ti}return n=Ef.bind(null,e),a=Ql(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Vl(n),e.callbackPriority=2,e.callbackNode=null,2}function Ef(e,t){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Cl()&&e.callbackNode!==a)return null;var n=J;return n=Ei(e,e===fe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(rf(e,n,t),Df(e,at()),e.callbackNode!=null&&e.callbackNode===a?Ef.bind(null,e):null)}function zf(e,t){if(Cl())return null;rf(e,t,!0)}function cp(){Ap(function(){(ee&6)!==0?Ql(pr,up):xf()})}function Us(){if(ga===0){var e=sn;e===0&&(e=wi,wi<<=1,(wi&261888)===0&&(wi=256)),ga=e}return ga}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function Nf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Rf((i[Je]||null).action),o=n.submitter;o&&(t=(t=o[Je]||null)?Rf(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var s=new Ui("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ga!==0){var r=o?Nf(i,o):new FormData(i);ts(a,{pending:!0,data:r,method:i.method,action:l},null,r)}}else typeof l=="function"&&(s.preventDefault(),r=o?Nf(i,o):new FormData(i),ts(a,{pending:!0,data:r,method:i.method,action:l},l,r))},currentTarget:i}]})}}for(var Hs=0;Hs<vo.length;Hs++){var _s=vo[Hs],dp=_s.toLowerCase(),mp=_s[0].toUpperCase()+_s.slice(1);Dt(dp,"on"+mp)}Dt(ou,"onAnimationEnd"),Dt(su,"onAnimationIteration"),Dt(ru,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Rm,"onTransitionRun"),Dt(Nm,"onTransitionStart"),Dt(Mm,"onTransitionCancel"),Dt(uu,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function Mf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],r=s.instance,p=s.currentTarget;if(s=s.listener,r!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=p;try{l(i)}catch(y){ji(y)}i.currentTarget=null,l=r}else for(o=0;o<n.length;o++){if(s=n[o],r=s.instance,p=s.currentTarget,s=s.listener,r!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=p;try{l(i)}catch(y){ji(y)}i.currentTarget=null,l=r}}}}function Z(e,t){var a=t[Wl];a===void 0&&(a=t[Wl]=new Set);var n=e+"__bubble";a.has(n)||(Of(t,e,2,!1),a.add(n))}function js(e,t,a){var n=0;t&&(n|=4),Of(a,e,n,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Bs(e){if(!e[wl]){e[wl]=!0,wr.forEach(function(a){a!=="selectionchange"&&(pp.has(a)||js(a,!1,e),js(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,js("selectionchange",!1,t))}}function Of(e,t,a,n){switch(sd(t)){case 2:var i=Gp;break;case 8:i=Yp;break;default:i=er}a=i.bind(null,t,a,e),i=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Ks(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=n.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ya(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){n=l=o;continue e}s=s.parentNode}}n=n.return}Hr(function(){var p=l,y=ao(a),C=[];e:{var h=cu.get(e);if(h!==void 0){var g=Ui,z=e;switch(e){case"keypress":if(qi(a)===0)break e;case"keydown":case"keyup":g=sm;break;case"focusin":z="focus",g=ro;break;case"focusout":z="blur",g=ro;break;case"beforeblur":case"afterblur":g=ro;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cm;break;case ou:case su:case ru:g=Fd;break;case uu:g=dm;break;case"scroll":case"scrollend":g=Zd;break;case"wheel":g=pm;break;case"copy":case"cut":case"paste":g=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lr;break;case"toggle":case"beforetoggle":g=gm}var k=(t&4)!==0,ce=!k&&(e==="scroll"||e==="scrollend"),f=k?h!==null?h+"Capture":null:h;k=[];for(var u=p,m;u!==null;){var S=u;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||f===null||(S=qn(u,f),S!=null&&k.push(di(u,S,m))),ce)break;u=u.return}0<k.length&&(h=new g(h,z,null,a,y),C.push({event:h,listeners:k}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&a!==to&&(z=a.relatedTarget||a.fromElement)&&(Ya(z)||z[Ga]))break e;if((g||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,g?(z=a.relatedTarget||a.toElement,g=p,z=z?Ya(z):null,z!==null&&(ce=L(z),k=z.tag,z!==ce||k!==5&&k!==27&&k!==6)&&(z=null)):(g=null,z=p),g!==z)){if(k=Br,S="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Lr,S="onPointerLeave",f="onPointerEnter",u="pointer"),ce=g==null?h:On(g),m=z==null?h:On(z),h=new k(S,u+"leave",g,a,y),h.target=ce,h.relatedTarget=m,S=null,Ya(y)===p&&(k=new k(f,u+"enter",z,a,y),k.target=m,k.relatedTarget=ce,S=k),ce=S,g&&z)t:{for(k=hp,f=g,u=z,m=0,S=f;S;S=k(S))m++;S=0;for(var M=u;M;M=k(M))S++;for(;0<m-S;)f=k(f),m--;for(;0<S-m;)u=k(u),S--;for(;m--;){if(f===u||u!==null&&f===u.alternate){k=f;break t}f=k(f),u=k(u)}k=null}else k=null;g!==null&&qf(C,h,g,k,!1),z!==null&&ce!==null&&qf(C,ce,z,k,!0)}}e:{if(h=p?On(p):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var F=Wr;else if(Zr(h))if(Pr)F=Dm;else{F=wm;var N=Tm}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&eo(p.elementType)&&(F=Wr):F=xm;if(F&&(F=F(e,p))){Jr(C,F,a,y);break e}N&&N(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&$l(h,"number",h.value)}switch(N=p?On(p):window,e){case"focusin":(Zr(N)||N.contentEditable==="true")&&(Fa=N,ho=p,Ln=null);break;case"focusout":Ln=ho=Fa=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,iu(C,a,y);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":iu(C,a,y)}var G;if(co)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ia?Vr(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(Gr&&a.locale!=="ko"&&(Ia||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ia&&(G=_r()):(ea=y,lo="value"in ea?ea.value:ea.textContent,Ia=!0)),N=xl(p,W),0<N.length&&(W=new Kr(W,e,null,a,y),C.push({event:W,listeners:N}),G?W.data=G:(G=Xr(a),G!==null&&(W.data=G)))),(G=vm?bm(e,a):Sm(e,a))&&(W=xl(p,"onBeforeInput"),0<W.length&&(N=new Kr("onBeforeInput","beforeinput",null,a,y),C.push({event:N,listeners:W}),N.data=G)),fp(C,e,p,a,y)}Mf(C,t)})}function di(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=qn(e,a),i!=null&&n.unshift(di(e,i,l)),i=qn(e,t),i!=null&&n.push(di(e,i,l))),e.tag===3)return n;e=e.return}return[]}function hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qf(e,t,a,n,i){for(var l=t._reactName,o=[];a!==null&&a!==n;){var s=a,r=s.alternate,p=s.stateNode;if(s=s.tag,r!==null&&r===n)break;s!==5&&s!==26&&s!==27||p===null||(r=p,i?(p=qn(a,l),p!=null&&o.unshift(di(a,p,r))):i||(p=qn(a,l),p!=null&&o.push(di(a,p,r)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var gp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(gp,`
`).replace(yp,"")}function Uf(e,t){return t=kf(t),kf(e)===t}function ue(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ja(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":kr(e,n,l);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",i.name,i,null),ue(e,t,"formEncType",i.formEncType,i,null),ue(e,t,"formMethod",i.formMethod,i,null),ue(e,t,"formTarget",i.formTarget,i,null)):(ue(e,t,"encType",i.encType,i,null),ue(e,t,"method",i.method,i,null),ue(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=kt);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Mi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Z("beforetoggle",e),Z("toggle",e),zi(e,"popover",n);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":zi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vd.get(a)||a,zi(e,a,n))}}function Ls(e,t,a,n,i,l){switch(a){case"style":kr(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&Ja(e,""+n);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"onClick":n!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[Je]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):zi(e,a,n)}}}function _e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ue(e,t,l,o,a,null)}}i&&ue(e,t,"srcSet",a.srcSet,a,null),n&&ue(e,t,"src",a.src,a,null);return;case"input":Z("invalid",e);var s=l=o=i=null,r=null,p=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":o=y;break;case"checked":r=y;break;case"defaultChecked":p=y;break;case"value":l=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:ue(e,t,n,y,a,null)}}Nr(e,l,s,r,p,o,i,!1);return;case"select":Z("invalid",e),n=o=l=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":n=s;default:ue(e,t,i,s,a,null)}t=l,a=o,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":Z("invalid",e),l=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":n=s;break;case"defaultValue":i=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:ue(e,t,o,s,a,null)}Or(e,n,i,l);return;case"option":for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null)&&(r==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ue(e,t,r,n,a,null));return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(n=0;n<fi.length;n++)Z(fi[n],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ue(e,t,p,n,a,null)}return;default:if(eo(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Ls(e,t,y,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&ue(e,t,s,n,a,null))}function vp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,s=null,r=null,p=null,y=null;for(g in a){var C=a[g];if(a.hasOwnProperty(g)&&C!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=C;default:n.hasOwnProperty(g)||ue(e,t,g,null,n,C)}}for(var h in n){var g=n[h];if(C=a[h],n.hasOwnProperty(h)&&(g!=null||C!=null))switch(h){case"type":l=g;break;case"name":i=g;break;case"checked":p=g;break;case"defaultChecked":y=g;break;case"value":o=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,t));break;default:g!==C&&ue(e,t,h,g,n,C)}}Fl(e,o,s,r,p,y,l,i);return;case"select":g=o=s=h=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":g=r;default:n.hasOwnProperty(l)||ue(e,t,l,null,n,r)}for(i in n)if(l=n[i],r=a[i],n.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":h=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==r&&ue(e,t,i,l,n,r)}t=s,a=o,n=g,h!=null?Za(e,!!a,h,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":g=h=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ue(e,t,s,null,n,i)}for(o in n)if(i=n[o],l=a[o],n.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":h=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&ue(e,t,o,i,n,l)}Mr(e,h,g);return;case"option":for(var z in a)h=a[z],a.hasOwnProperty(z)&&h!=null&&!n.hasOwnProperty(z)&&(z==="selected"?e.selected=!1:ue(e,t,z,null,n,h));for(r in n)h=n[r],g=a[r],n.hasOwnProperty(r)&&h!==g&&(h!=null||g!=null)&&(r==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":ue(e,t,r,h,n,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in a)h=a[k],a.hasOwnProperty(k)&&h!=null&&!n.hasOwnProperty(k)&&ue(e,t,k,null,n,h);for(p in n)if(h=n[p],g=a[p],n.hasOwnProperty(p)&&h!==g&&(h!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,t));break;default:ue(e,t,p,h,n,g)}return;default:if(eo(t)){for(var ce in a)h=a[ce],a.hasOwnProperty(ce)&&h!==void 0&&!n.hasOwnProperty(ce)&&Ls(e,t,ce,void 0,n,h);for(y in n)h=n[y],g=a[y],!n.hasOwnProperty(y)||h===g||h===void 0&&g===void 0||Ls(e,t,y,h,n,g);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&ue(e,t,f,null,n,h);for(C in n)h=n[C],g=a[C],!n.hasOwnProperty(C)||h===g||h==null&&g==null||ue(e,t,C,h,n,g)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,o=i.initiatorType,s=i.duration;if(l&&s&&Hf(o)){for(o=0,s=i.responseEnd,n+=1;n<a.length;n++){var r=a[n],p=r.startTime;if(p>s)break;var y=r.transferSize,C=r.initiatorType;y&&Hf(C)&&(r=r.responseEnd,o+=y*(r<s?1:(s-p)/(r-p)))}if(--n,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gs=null,Ys=null;function Dl(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=null;function Sp(){var e=window.event;return e&&e.type==="popstate"?e===Vs?!1:(Vs=e,!0):(Vs=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(e){return Kf.resolve(null).then(e).catch(Tp)}:Bf;function Tp(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Lf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Dn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[Mn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&mi(e.ownerDocument.body);a=i}while(a);Dn(t)}function Gf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xs(a),Pl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wp(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Mn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function xp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function Yf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function Zs(e){return e.data==="$?"||e.data==="$~"}function Js(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Dp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ws=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xf(e,t,a){switch(t=Dl(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pl(e)}var xt=new Map,Zf=new Set;function El(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=x.d;x.d={f:Ep,r:zp,D:Rp,C:Np,L:Mp,m:Op,X:kp,S:qp,M:Up};function Ep(){var e=Pt.f(),t=vl();return e||t}function zp(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?uc(t):Pt.r(e)}var Tn=typeof document>"u"?null:document;function Jf(e,t,a){var n=Tn;if(n&&typeof t=="string"&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Zf.has(i)||(Zf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),_e(t,"link",e),Ne(t),n.head.appendChild(t)))}}function Rp(e){Pt.D(e),Jf("dns-prefetch",e,null)}function Np(e,t){Pt.C(e,t),Jf("preconnect",e,t)}function Mp(e,t,a){Pt.L(e,t,a);var n=Tn;if(n&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+yt(a.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var l=i;switch(t){case"style":l=wn(e);break;case"script":l=xn(e)}xt.has(l)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(pi(l))||t==="script"&&n.querySelector(hi(l))||(t=n.createElement("link"),_e(t,"link",e),Ne(t),n.head.appendChild(t)))}}function Op(e,t){Pt.m(e,t);var a=Tn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+yt(n)+'"][href="'+yt(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=xn(e)}if(!xt.has(l)&&(e=O({rel:"modulepreload",href:e},t),xt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(l)))return}n=a.createElement("link"),_e(n,"link",e),Ne(n),a.head.appendChild(n)}}}function qp(e,t,a){Pt.S(e,t,a);var n=Tn;if(n&&e){var i=Va(n).hoistableStyles,l=wn(e);t=t||"default";var o=i.get(l);if(!o){var s={loading:0,preload:null};if(o=n.querySelector(pi(l)))s.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(l))&&Ps(e,a);var r=o=n.createElement("link");Ne(r),_e(r,"link",e),r._p=new Promise(function(p,y){r.onload=p,r.onerror=y}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,zl(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(l,o)}}}function kp(e,t){Pt.X(e,t);var a=Tn;if(a&&e){var n=Va(a).hoistableScripts,i=xn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=O({src:e,async:!0},t),(t=xt.get(i))&&Is(e,t),l=a.createElement("script"),Ne(l),_e(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Up(e,t){Pt.M(e,t);var a=Tn;if(a&&e){var n=Va(a).hoistableScripts,i=xn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=O({src:e,async:!0,type:"module"},t),(t=xt.get(i))&&Is(e,t),l=a.createElement("script"),Ne(l),_e(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Wf(e,t,a,n){var i=(i=V.current)?El(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=wn(a.href),a=Va(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=wn(a.href);var l=Va(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(pi(e)))&&!l._p&&(o.instance=l,o.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),l||Hp(i,e,a,o.state))),t&&n===null)throw Error(d(528,""));return o}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xn(a),a=Va(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function wn(e){return'href="'+yt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),_e(t,"link",a),Ne(t),e.head.appendChild(t))}function xn(e){return'[src="'+yt(e)+'"]'}function hi(e){return"script[async]"+e}function If(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(n)return t.instance=n,Ne(n),n;var i=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ne(n),_e(n,"style",i),zl(n,a.precedence,e),t.instance=n;case"stylesheet":i=wn(a.href);var l=e.querySelector(pi(i));if(l)return t.state.loading|=4,t.instance=l,Ne(l),l;n=Pf(a),(i=xt.get(i))&&Ps(n,i),l=(e.ownerDocument||e).createElement("link"),Ne(l);var o=l;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),_e(l,"link",n),t.state.loading|=4,zl(l,a.precedence,e),t.instance=l;case"script":return l=xn(a.src),(i=e.querySelector(hi(l)))?(t.instance=i,Ne(i),i):(n=a,(i=xt.get(l))&&(n=O({},a),Is(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ne(i),_e(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,zl(n,a.precedence,e));return t.instance}function zl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,o=0;o<n.length;o++){var s=n[o];if(s.dataset.precedence===t)l=s;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Is(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rl=null;function Ff(e,t,a){if(Rl===null){var n=new Map,i=Rl=new Map;i.set(a,n)}else i=Rl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[Mn]||l[qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var s=n.get(o);s?s.push(l):n.set(o,[l])}}return n}function $f(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _p(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ed(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=wn(n.href),l=t.querySelector(pi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Nl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Ne(l);return}l=t.ownerDocument||t,n=Pf(n),(i=xt.get(i))&&Ps(n,i),l=l.createElement("link"),Ne(l);var o=l;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),_e(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Nl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fs=0;function Bp(e,t){return e.stylesheets&&e.count===0&&Ol(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Fs===0&&(Fs=62500*bp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Fs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ol(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ml=null;function Ol(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ml=new Map,t.forEach(Kp,e),Ml=null,Nl.call(e))}function Kp(e,t){if(!(t.state.loading&4)){var a=Ml.get(e);if(a)var n=a.get(null);else{a=new Map,Ml.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),l=a.get(o)||n,l===n&&a.set(null,i),a.set(o,i),this.count++,n=Nl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:Re,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Lp(e,t,a,n,i,l,o,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.hiddenUpdates=Xl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function td(e,t,a,n,i,l,o,s,r,p,y,C){return e=new Lp(e,t,a,o,r,p,y,C,s),t=1,l===!0&&(t|=24),l=ot(3,null,null,t),e.current=l,l.stateNode=e,t=Mo(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},Uo(l),e}function ad(e){return e?(e=tn,e):tn}function nd(e,t,a,n,i,l){i=ad(i),n.context===null?n.context=i:n.pendingContext=i,n=oa(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=sa(e,n,t),a!==null&&(et(a,e,t),Jn(a,e,t))}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $s(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function ld(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&et(t,e,67108864),$s(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=ft();t=Zl(t);var a=Ra(e,t);a!==null&&et(a,e,t),$s(e,t)}}var ql=!0;function Gp(e,t,a,n){var i=v.T;v.T=null;var l=x.p;try{x.p=2,er(e,t,a,n)}finally{x.p=l,v.T=i}}function Yp(e,t,a,n){var i=v.T;v.T=null;var l=x.p;try{x.p=8,er(e,t,a,n)}finally{x.p=l,v.T=i}}function er(e,t,a,n){if(ql){var i=tr(n);if(i===null)Ks(e,t,n,kl,a),rd(e,n);else if(Vp(i,e,t,a,n))n.stopPropagation();else if(rd(e,n),t&4&&-1<Qp.indexOf(e)){for(;i!==null;){var l=Qa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=wa(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-it(o);s.entanglements[1]|=r,o&=~r}Ot(l),(ee&6)===0&&(gl=at()+500,ci(0))}}break;case 31:case 13:s=Ra(l,2),s!==null&&et(s,l,2),vl(),$s(l,2)}if(l=tr(n),l===null&&Ks(e,t,n,kl,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Ks(e,t,n,null,a)}}function tr(e){return e=ao(e),ar(e)}var kl=null;function ar(e){if(kl=null,e=Ya(e),e!==null){var t=L(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=P(t),e!==null)return e;e=null}else if(a===31){if(e=de(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return kl=e,null}function sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case pr:return 2;case hr:return 8;case Ti:case Nd:return 32;case gr:return 268435456;default:return 32}default:return 32}}var nr=!1,va=null,ba=null,Sa=null,yi=new Map,vi=new Map,Ca=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rd(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Qa(t),t!==null&&ld(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,a,n,i){switch(t){case"focusin":return va=bi(va,e,t,a,n,i),!0;case"dragenter":return ba=bi(ba,e,t,a,n,i),!0;case"mouseover":return Sa=bi(Sa,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return yi.set(l,bi(yi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,vi.set(l,bi(vi.get(l)||null,e,t,a,n,i)),!0}return!1}function ud(e){var t=Ya(e.target);if(t!==null){var a=L(t);if(a!==null){if(t=a.tag,t===13){if(t=P(a),t!==null){e.blockedOn=t,Ar(e.priority,function(){od(a)});return}}else if(t===31){if(t=de(a),t!==null){e.blockedOn=t,Ar(e.priority,function(){od(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);to=n,a.target.dispatchEvent(n),to=null}else return t=Qa(a),t!==null&&ld(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){Ul(e)&&a.delete(t)}function Xp(){nr=!1,va!==null&&Ul(va)&&(va=null),ba!==null&&Ul(ba)&&(ba=null),Sa!==null&&Ul(Sa)&&(Sa=null),yi.forEach(cd),vi.forEach(cd)}function Hl(e,t){e.blockedOn===t&&(e.blockedOn=null,nr||(nr=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Xp)))}var _l=null;function fd(e){_l!==e&&(_l=e,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){_l===e&&(_l=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ar(n||a)===null)continue;break}var l=Qa(a);l!==null&&(e.splice(t,3),t-=3,ts(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Dn(e){function t(r){return Hl(r,e)}va!==null&&Hl(va,e),ba!==null&&Hl(ba,e),Sa!==null&&Hl(Sa,e),yi.forEach(t),vi.forEach(t);for(var a=0;a<Ca.length;a++){var n=Ca[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)ud(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],o=i[Je]||null;if(typeof l=="function")o||fd(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[Je]||null)s=o.formAction;else if(ar(i)!==null)continue}else s=o.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),fd(a)}}}function dd(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ir(e){this._internalRoot=e}jl.prototype.render=ir.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=ft();nd(a,n,e,t,null,null)},jl.prototype.unmount=ir.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nd(e.current,2,null,e,null,null),vl(),t[Ga]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&ud(e)}};var md=j.version;if(md!=="19.2.3")throw Error(d(527,md,"19.2.3"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=b(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{zn=Bl.inject(Zp),nt=Bl}catch{}}return Ci.createRoot=function(e,t){if(!H(e))throw Error(d(299));var a=!1,n="",i=bc,l=Sc,o=Cc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=td(e,1,!1,null,null,a,n,null,i,l,o,dd),e[Ga]=t.current,Bs(e),new ir(t)},Ci.hydrateRoot=function(e,t,a){if(!H(e))throw Error(d(299));var n=!1,i="",l=bc,o=Sc,s=Cc,r=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=td(e,1,!0,t,a??null,n,i,r,l,o,s,dd),t.context=ad(null),a=t.current,n=ft(),n=Zl(n),i=oa(n),i.callback=null,sa(a,i,n),a=n,t.current.lanes=a,Nn(t,a),Ot(t),e[Ga]=t.current,Bs(e),new jl(t)},Ci.version="19.2.3",Ci}var Td;function nh(){if(Td)return sr.exports;Td=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(j){console.error(j)}}return T(),sr.exports=ah(),sr.exports}var ih=nh();const lh=({questionData:T,onAnswerSelect:j,selectedAnswer:U,showResult:d})=>{const{question:H,options:L,correctAnswer:P}=T,de=D=>{let b="option-btn";if(d){if(D===P)return b+" correct";if(U===D&&D!==P)return b+" incorrect";if(D!==P&&D!==U)return b+" dimmed"}else if(U===D)return b+" selected";return b};return w.jsxs("div",{className:"glass-panel question-card",children:[w.jsx("h2",{className:"question-text",children:H}),w.jsx("div",{className:"options-grid",children:L.map((D,b)=>w.jsx("button",{className:de(D),onClick:()=>!d&&j(D),disabled:d,children:D},b))}),w.jsx("style",{children:`
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
      `})]})},oh=({content:T})=>w.jsxs("div",{className:"glass-panel explanation-card fade-in",children:[w.jsx("div",{className:"explanation-header",children:w.jsx("h3",{children:"🎓 Explanation & Concept"})}),w.jsx("div",{className:"explanation-content",children:w.jsx("pre",{style:{whiteSpace:"pre-wrap",fontFamily:"inherit"},children:T.trim()})}),w.jsx("style",{children:`
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
      `})]}),wd=["Persistence is the key to mastery. Keep going!","Every expert was once a beginner. You've got this!","Don't stop when you're tired. Stop when you're done.","Certification is specific knowledge, but learning is a lifelong journey.","Failure is just another way to learn how to do it right.","Small progress is still progress.","The only way to do great work is to love what you do.","Believing in yourself is the first secret to success."],sh=({onResume:T,onQuit:j})=>{const U=wd[Math.floor(Math.random()*wd.length)];return w.jsxs("div",{className:"modal-overlay",children:[w.jsxs("div",{className:"modal-content glass-panel fade-in-up",children:[w.jsx("h3",{children:"Wait! You're doing great. 🐧"}),w.jsxs("p",{className:"motivational-quote",children:['"',U,'"']}),w.jsx("p",{className:"sub-text",children:"Are you sure you want to stop? You're building your future right now."}),w.jsxs("div",{className:"modal-actions",children:[w.jsx("button",{className:"primary resume-btn",onClick:T,children:"Resume Quiz 🚀"}),w.jsx("button",{className:"text-btn quit-btn",onClick:j,children:"I really need to quit"})]})]}),w.jsx("style",{children:`
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
      `})]})},rh=T=>[...T].sort(()=>Math.random()-.5),uh=({questions:T,onBackToMenu:j,onRetry:U})=>{const[d,H]=je.useState(0),[L,P]=je.useState(null),[de,D]=je.useState(!1),[b,Y]=je.useState(0),[O,ne]=je.useState(!1),[ge,Oe]=je.useState(()=>T&&T.length>0?T.length*90:0),[De,Xe]=je.useState(!1),[Be,dt]=je.useState(!1);je.useEffect(()=>{H(0),P(null),D(!1),Y(0),ne(!1),Xe(!1),dt(!1),T&&T.length>0&&Oe(T.length*90)},[T]),je.useEffect(()=>{if(ge>0&&!O&&!Be&&!De){const se=setInterval(()=>{Oe(Ye=>Ye-1)},1e3);return()=>clearInterval(se)}else ge===0&&!O&&T.length>0&&ne(!0)},[ge,O,Be,De,T.length]);const Re=se=>{const Ye=Math.floor(se/60),Ze=se%60;return`${Ye}:${Ze<10?"0":""}${Ze}`};if(!T||T.length===0)return w.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:["No questions available in this category yet. ",w.jsx("button",{onClick:j,children:"Go Back"})]});const Ee=T[d],mt=je.useMemo(()=>Ee?rh(Ee.options):[],[Ee]),Ke={...Ee,options:mt},Q=se=>{P(se),D(!0),se===Ee.correctAnswer&&Y(Ye=>Ye+1)},Le=()=>{d<T.length-1?(H(se=>se+1),P(null),D(!1)):ne(!0)},pt=()=>{dt(!0),Xe(!0)},It=()=>{dt(!1),Xe(!1)},ht=()=>{Xe(!1),j()};if(O){const se=b/T.length*100,Ye=[{title:"Phenomenal Work! 🏆",body:"You nailed every single question. You are arguably ready for the real exam!"},{title:"Flawless Victory! 🥋",body:"Zero mistakes. Your knowledge is razor sharp."},{title:"Linux Master! 🐧",body:"You clearly know your stuff. Keep up the amazing work!"}],Ze=[{title:"Excellent Job! 🌟",body:"Strong performance. Just a few tweaks and you'll be perfect."},{title:"Great work! 🚀",body:"You have a solid grasp of the concepts. Keep polishing those edge cases."},{title:"Very Impressive! 👏",body:"You're well on your way to certification success."}],tt=[{title:"Good Effort! 👍",body:"You're getting there. Review the explanations for the ones you missed."},{title:"Not Bad! 📚",body:"You have a good foundation, but there are some gaps to fill."},{title:"Solid Start! 🌱",body:"Keep practicing and focusing on the areas where you struggled."}],v=[{title:"Keep Practicing! 💪",body:"Don't get discouraged. Certification takes persistence. Review the concepts and try again."},{title:"Learning Opportunity! 💡",body:"Every mistake is a chance to learn. Analyse what went wrong."},{title:"Don't Give Up! 🛡️",body:"Persistence is key. Review the material and give it another shot."}],x=c=>c[Math.floor(Math.random()*c.length)];let q;se===100?q=x(Ye):se>=80?q=x(Ze):se>=50?q=x(tt):q=x(v);const{title:te,body:ie}=q;return w.jsxs("div",{className:"glass-panel result-card",children:[w.jsx("h2",{children:ge===0?"⏰ Time's Up!":"🎉 Quiz Completed!"}),w.jsxs("div",{className:"score-display",children:[w.jsx("span",{className:"score-number",children:b}),w.jsxs("span",{className:"score-total",children:["/ ",T.length]})]}),w.jsxs("div",{className:"feedback-section",children:[w.jsx("h3",{children:te}),w.jsx("p",{children:ie}),w.jsxs("div",{className:"cert-wish",children:[w.jsx("span",{className:"wish-icon",children:"🍀"}),w.jsx("p",{children:"Best of luck on your certification journey! You've got this."})]})]}),w.jsxs("div",{className:"result-actions",children:[w.jsx("button",{className:"primary",onClick:U,children:"Take New Quiz"}),w.jsx("button",{className:"secondary",onClick:j,children:"Back to Dashboard"})]}),w.jsx("style",{children:`
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
        `})]})}return w.jsxs("div",{className:"quiz-container",children:[De&&w.jsx(sh,{onResume:It,onQuit:ht}),w.jsxs("div",{className:"quiz-top-bar",children:[w.jsx("button",{className:"end-quiz-btn",onClick:pt,children:"End Quiz"}),w.jsxs("div",{className:`timer ${ge<60?"timer-low":""}`,children:["⏰ ",Re(ge)]})]}),w.jsxs("div",{className:"quiz-header",children:[w.jsxs("span",{children:["Question ",d+1," of ",T.length]}),w.jsxs("span",{className:"current-score",children:["Score: ",b]})]}),w.jsx("div",{className:"progress-bar",children:w.jsx("div",{className:"progress-fill",style:{width:`${d/T.length*100}%`}})}),w.jsx(lh,{questionData:Ke,selectedAnswer:L,onAnswerSelect:Q,showResult:de}),de&&w.jsxs("div",{className:"fade-in",children:[w.jsx(oh,{content:Ee.explanation}),w.jsx("div",{className:"controls",children:w.jsx("button",{className:"primary next-btn",onClick:Le,children:d===T.length-1?"Finish Quiz":"Next Question →"})})]}),w.jsx("style",{children:`
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
      `})]})},ch=[{id:"kcna",title:"KCNA (Kubernetes and Cloud Native Associate)",description:"Foundational knowledge of Kubernetes and cloud-native ecosystem."},{id:"kcsa",title:"KCSA (Kubernetes and Cloud Native Security Associate)",description:"Security fundamentals for cloud-native architectures."},{id:"lfcs",title:"LFCS (Linux Foundation Certified SysAdmin)",description:"Essential commands, file systems, and user management.",comingSoon:!0},{id:"lfce",title:"LFCE (Linux Foundation Certified Engineer)",description:"Advanced networking, system design, and automation.",comingSoon:!0},{id:"cks",title:"CKS (Certified Kubernetes Security Specialist)",description:"Cluster hardening, system security, and policy.",comingSoon:!0},{id:"cka",title:"CKA (Certified Kubernetes Administrator)",description:"Cluster administration, installation, configuration, and troubleshooting.",comingSoon:!0},{id:"ckad",title:"CKAD (Certified Kubernetes Application Developer)",description:"Cloud-native application design, build, and deployment for Kubernetes.",comingSoon:!0},{id:"cnpe",title:"CNPE (Certified Cloud Native Platform Engineer)",description:"Platform engineering practices for cloud-native ecosystems.",comingSoon:!0},{id:"pca",title:"PCA (Prometheus Certified Associate)",description:"Observability using Prometheus.",comingSoon:!0},{id:"ica",title:"ICA (Istio Certified Associate)",description:"Service mesh fundamentals using Istio.",comingSoon:!0},{id:"cca",title:"CCA (Cilium Certified Associate)",description:"Networking, observability, and security with Cilium.",comingSoon:!0},{id:"capa",title:"CAPA (Certified Argo Project Associate)",description:"GitOps and continuous delivery with Argo.",comingSoon:!0},{id:"cgoa",title:"CGOA (Certified GitOps Associate)",description:"GitOps principles and practices.",comingSoon:!0},{id:"cba",title:"CBA (Certified Backstage Associate)",description:"Building developer portals with Backstage.",comingSoon:!0},{id:"otca",title:"OTCA (OpenTelemetry Certified Associate)",description:"Observability and telemetry standards.",comingSoon:!0},{id:"kca",title:"KCA (Kyverno Certified Associate)",description:"Policy management for Kubernetes using Kyverno.",comingSoon:!0},{id:"cnpa",title:"CNPA (Certified Cloud Native Platform Engineering Associate)",description:"Foundational platform engineering concepts.",comingSoon:!0}],xd={lfcs:[{id:1,question:"Which command is used to display the current working directory in Linux?",options:["pwd","ls","cd","dir"],correctAnswer:"pwd",explanation:`
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
- **Monitoring**: Tells you *what* is happening (CPU is 90%, Server is down). It handles "known unknowns."
- **Observability**: Tells you *why* it's happening by exploring the internal state of a system based on its outputs. It handles "unknown unknowns."

**Observability requires**: Logs, Metrics, and Traces (The Three Pillars) to be correlated.
      `}]},fh=({onSelectCategory:T})=>w.jsxs("div",{className:"category-menu",children:[w.jsx("h2",{children:"Select Your Certification Path"}),w.jsx("div",{className:"categories-grid",children:ch.map(j=>{const U=j.comingSoon;return w.jsxs("button",{className:`category-card glass-panel ${U?"inactive":""}`,onClick:()=>!U&&T(j.id),disabled:U,children:[w.jsxs("div",{className:"card-content",children:[w.jsx("h3",{children:j.title}),w.jsx("p",{children:j.description})]}),!U&&w.jsx("div",{className:"start-badge",children:"Start Practice →"}),U&&w.jsxs("div",{className:"inactive-overlay",children:[w.jsx("span",{className:"lock-icon",children:"🔒"}),w.jsx("span",{children:"Coming Soon"})]})]},j.id)})}),w.jsx("style",{children:`
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
      `})]}),dh=({totalAvailable:T,onSelectCount:j,onBack:U})=>{const[d,H]=je.useState(""),[L,P]=je.useState(""),de=()=>{const b=parseInt(d,10);if(isNaN(b)||b<1){P("Please enter a valid number greater than 0.");return}if(b>T){P(`Please choose a number between 1 and ${T}.`);return}j(b)},D=b=>{b.key==="Enter"&&de()};return w.jsxs("div",{className:"count-selector-container glass-panel fade-in",children:[w.jsxs("div",{className:"selector-header",children:[w.jsx("button",{className:"back-btn",onClick:U,children:"← Back"}),w.jsx("h2",{children:"How many questions?"})]}),w.jsxs("p",{className:"subtitle",children:["There are ",w.jsx("span",{className:"highlight",children:T})," questions available in this category."]}),w.jsxs("div",{className:"input-container",children:[w.jsx("label",{htmlFor:"question-count",className:"input-label",children:"Number of questions:"}),w.jsxs("div",{className:"input-group",children:[w.jsx("input",{id:"question-count",type:"number",className:"count-input",value:d,onChange:b=>{H(b.target.value),P("")},onKeyDown:D,placeholder:"e.g. 10",min:"1",max:T}),w.jsx("button",{className:"primary start-btn",onClick:de,children:"Start Exam"})]}),L&&w.jsx("p",{className:"error-msg",children:L})]}),w.jsx("style",{children:`
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
      `})]})},mh=({onLogoClick:T})=>w.jsxs("header",{className:"main-header",children:[w.jsxs("div",{className:"logo-container",onClick:T,style:{cursor:"pointer"},children:[w.jsx("span",{className:"icon",children:"🐧"}),w.jsxs("h1",{children:["Linux Foundation Mastery ",w.jsx("span",{className:"highlight",children:"Hub"})]})]}),w.jsx("p",{className:"subtitle",children:"Master Linux Foundations with Concept-First Practice"})]}),ph=()=>w.jsx("footer",{className:"main-footer",children:w.jsxs("p",{children:["© ",new Date().getFullYear()," Linux Cert Prep • Built for Certification Success"]})});function hh(){const[T,j]=je.useState("menu"),[U,d]=je.useState(null),[H,L]=je.useState([]),P=Y=>{d(Y),j("select_count")},de=Y=>{const ge=[...xd[U]||[]].sort(()=>.5-Math.random()).slice(0,Y);L(ge),j("quiz")},D=()=>{j("menu"),d(null),L([])},b=()=>{j("menu"),d(null)};return w.jsxs("div",{className:"app-layout",children:[w.jsx(mh,{onLogoClick:D}),w.jsxs("main",{className:"main-content",children:[T==="menu"&&w.jsx(fh,{onSelectCategory:P}),T==="select_count"&&w.jsx(dh,{totalAvailable:xd[U]?.length||0,onSelectCount:de,onBack:b}),T==="quiz"&&w.jsx(uh,{questions:H,onBackToMenu:D,onRetry:()=>j("select_count")})]}),w.jsx(ph,{})]})}ih.createRoot(document.getElementById("root")).render(w.jsx(je.StrictMode,{children:w.jsx(hh,{})}));
