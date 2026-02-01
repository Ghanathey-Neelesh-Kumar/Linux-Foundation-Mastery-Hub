(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))f(H);new MutationObserver(H=>{for(const L of H)if(L.type==="childList")for(const Z of L.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&f(Z)}).observe(document,{childList:!0,subtree:!0});function U(H){const L={};return H.integrity&&(L.integrity=H.integrity),H.referrerPolicy&&(L.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?L.credentials="include":H.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function f(H){if(H.ep)return;H.ep=!0;const L=U(H);fetch(H.href,L)}})();var or={exports:{}},Si={};var hf;function Xh(){if(hf)return Si;hf=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function U(f,H,L){var Z=null;if(L!==void 0&&(Z=""+L),H.key!==void 0&&(Z=""+H.key),"key"in H){L={};for(var fe in H)fe!=="key"&&(L[fe]=H[fe])}else L=H;return H=L.ref,{$$typeof:w,type:f,key:Z,ref:H!==void 0?H:null,props:L}}return Si.Fragment=B,Si.jsx=U,Si.jsxs=U,Si}var mf;function Zh(){return mf||(mf=1,or.exports=Xh()),or.exports}var T=Zh(),sr={exports:{}},K={};var gf;function Jh(){if(gf)return K;gf=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),ne=Symbol.iterator;function ge(u){return u===null||typeof u!="object"?null:(u=ne&&u[ne]||u["@@iterator"],typeof u=="function"?u:null)}var qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ke=Object.assign,Ie={};function je(u,C,D){this.props=u,this.context=C,this.refs=Ie,this.updater=D||qe}je.prototype.isReactComponent={},je.prototype.setState=function(u,C){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,C,"setState")},je.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function ft(){}ft.prototype=je.prototype;function ze(u,C,D){this.props=u,this.context=C,this.refs=Ie,this.updater=D||qe}var De=ze.prototype=new ft;De.constructor=ze,ke(De,je.prototype),De.isPureReactComponent=!0;var pt=Array.isArray;function _e(){}var Y={H:null,A:null,T:null,S:null},Le=Object.prototype.hasOwnProperty;function ht(u,C,D){var z=D.ref;return{$$typeof:w,type:u,key:C,ref:z!==void 0?z:null,props:D}}function Jt(u,C){return ht(u.type,C,u.props)}function mt(u){return typeof u=="object"&&u!==null&&u.$$typeof===w}function le(u){var C={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(D){return C[D]})}var Pe=/\/+/g;function Qe(u,C){return typeof u=="object"&&u!==null&&u.key!=null?le(""+u.key):C.toString(36)}function tt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(_e,_e):(u.status="pending",u.then(function(C){u.status==="pending"&&(u.status="fulfilled",u.value=C)},function(C){u.status==="pending"&&(u.status="rejected",u.reason=C)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function v(u,C,D,z,j){var V=typeof u;(V==="undefined"||V==="boolean")&&(u=null);var ae=!1;if(u===null)ae=!0;else switch(V){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(u.$$typeof){case w:case B:ae=!0;break;case P:return ae=u._init,v(ae(u._payload),C,D,z,j)}}if(ae)return j=j(u),ae=z===""?"."+Qe(u,0):z,pt(j)?(D="",ae!=null&&(D=ae.replace(Pe,"$&/")+"/"),v(j,C,D,"",function(Dn){return Dn})):j!=null&&(mt(j)&&(j=Jt(j,D+(j.key==null||u&&u.key===j.key?"":(""+j.key).replace(Pe,"$&/")+"/")+ae)),C.push(j)),1;ae=0;var Ye=z===""?".":z+":";if(pt(u))for(var be=0;be<u.length;be++)z=u[be],V=Ye+Qe(z,be),ae+=v(z,C,D,V,j);else if(be=ge(u),typeof be=="function")for(u=be.call(u),be=0;!(z=u.next()).done;)z=z.value,V=Ye+Qe(z,be++),ae+=v(z,C,D,V,j);else if(V==="object"){if(typeof u.then=="function")return v(tt(u),C,D,z,j);throw C=String(u),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ae}function x(u,C,D){if(u==null)return u;var z=[],j=0;return v(u,z,"","",function(V){return C.call(D,V,j++)}),z}function N(u){if(u._status===-1){var C=u._result;C=C(),C.then(function(D){(u._status===0||u._status===-1)&&(u._status=1,u._result=D)},function(D){(u._status===0||u._status===-1)&&(u._status=2,u._result=D)}),u._status===-1&&(u._status=0,u._result=C)}if(u._status===1)return u._result.default;throw u._result}var te=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},ie={map:x,forEach:function(u,C,D){x(u,function(){C.apply(this,arguments)},D)},count:function(u){var C=0;return x(u,function(){C++}),C},toArray:function(u){return x(u,function(C){return C})||[]},only:function(u){if(!mt(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return K.Activity=q,K.Children=ie,K.Component=je,K.Fragment=U,K.Profiler=H,K.PureComponent=ze,K.StrictMode=f,K.Suspense=k,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,K.__COMPILER_RUNTIME={__proto__:null,c:function(u){return Y.H.useMemoCache(u)}},K.cache=function(u){return function(){return u.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(u,C,D){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var z=ke({},u.props),j=u.key;if(C!=null)for(V in C.key!==void 0&&(j=""+C.key),C)!Le.call(C,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&C.ref===void 0||(z[V]=C[V]);var V=arguments.length-2;if(V===1)z.children=D;else if(1<V){for(var ae=Array(V),Ye=0;Ye<V;Ye++)ae[Ye]=arguments[Ye+2];z.children=ae}return ht(u.type,j,z)},K.createContext=function(u){return u={$$typeof:Z,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:L,_context:u},u},K.createElement=function(u,C,D){var z,j={},V=null;if(C!=null)for(z in C.key!==void 0&&(V=""+C.key),C)Le.call(C,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(j[z]=C[z]);var ae=arguments.length-2;if(ae===1)j.children=D;else if(1<ae){for(var Ye=Array(ae),be=0;be<ae;be++)Ye[be]=arguments[be+2];j.children=Ye}if(u&&u.defaultProps)for(z in ae=u.defaultProps,ae)j[z]===void 0&&(j[z]=ae[z]);return ht(u,V,j)},K.createRef=function(){return{current:null}},K.forwardRef=function(u){return{$$typeof:fe,render:u}},K.isValidElement=mt,K.lazy=function(u){return{$$typeof:P,_payload:{_status:-1,_result:u},_init:N}},K.memo=function(u,C){return{$$typeof:b,type:u,compare:C===void 0?null:C}},K.startTransition=function(u){var C=Y.T,D={};Y.T=D;try{var z=u(),j=Y.S;j!==null&&j(D,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(_e,te)}catch(V){te(V)}finally{C!==null&&D.types!==null&&(C.types=D.types),Y.T=C}},K.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},K.use=function(u){return Y.H.use(u)},K.useActionState=function(u,C,D){return Y.H.useActionState(u,C,D)},K.useCallback=function(u,C){return Y.H.useCallback(u,C)},K.useContext=function(u){return Y.H.useContext(u)},K.useDebugValue=function(){},K.useDeferredValue=function(u,C){return Y.H.useDeferredValue(u,C)},K.useEffect=function(u,C){return Y.H.useEffect(u,C)},K.useEffectEvent=function(u){return Y.H.useEffectEvent(u)},K.useId=function(){return Y.H.useId()},K.useImperativeHandle=function(u,C,D){return Y.H.useImperativeHandle(u,C,D)},K.useInsertionEffect=function(u,C){return Y.H.useInsertionEffect(u,C)},K.useLayoutEffect=function(u,C){return Y.H.useLayoutEffect(u,C)},K.useMemo=function(u,C){return Y.H.useMemo(u,C)},K.useOptimistic=function(u,C){return Y.H.useOptimistic(u,C)},K.useReducer=function(u,C,D){return Y.H.useReducer(u,C,D)},K.useRef=function(u){return Y.H.useRef(u)},K.useState=function(u){return Y.H.useState(u)},K.useSyncExternalStore=function(u,C,D){return Y.H.useSyncExternalStore(u,C,D)},K.useTransition=function(){return Y.H.useTransition()},K.version="19.2.3",K}var yf;function dr(){return yf||(yf=1,sr.exports=Jh()),sr.exports}var Be=dr(),lr={exports:{}},Ai={},rr={exports:{}},cr={};var vf;function Fh(){return vf||(vf=1,(function(w){function B(v,x){var N=v.length;v.push(x);e:for(;0<N;){var te=N-1>>>1,ie=v[te];if(0<H(ie,x))v[te]=x,v[N]=ie,N=te;else break e}}function U(v){return v.length===0?null:v[0]}function f(v){if(v.length===0)return null;var x=v[0],N=v.pop();if(N!==x){v[0]=N;e:for(var te=0,ie=v.length,u=ie>>>1;te<u;){var C=2*(te+1)-1,D=v[C],z=C+1,j=v[z];if(0>H(D,N))z<ie&&0>H(j,D)?(v[te]=j,v[z]=N,te=z):(v[te]=D,v[C]=N,te=C);else if(z<ie&&0>H(j,N))v[te]=j,v[z]=N,te=z;else break e}}return x}function H(v,x){var N=v.sortIndex-x.sortIndex;return N!==0?N:v.id-x.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;w.unstable_now=function(){return L.now()}}else{var Z=Date,fe=Z.now();w.unstable_now=function(){return Z.now()-fe}}var k=[],b=[],P=1,q=null,ne=3,ge=!1,qe=!1,ke=!1,Ie=!1,je=typeof setTimeout=="function"?setTimeout:null,ft=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;function De(v){for(var x=U(b);x!==null;){if(x.callback===null)f(b);else if(x.startTime<=v)f(b),x.sortIndex=x.expirationTime,B(k,x);else break;x=U(b)}}function pt(v){if(ke=!1,De(v),!qe)if(U(k)!==null)qe=!0,_e||(_e=!0,le());else{var x=U(b);x!==null&&tt(pt,x.startTime-v)}}var _e=!1,Y=-1,Le=5,ht=-1;function Jt(){return Ie?!0:!(w.unstable_now()-ht<Le)}function mt(){if(Ie=!1,_e){var v=w.unstable_now();ht=v;var x=!0;try{e:{qe=!1,ke&&(ke=!1,ft(Y),Y=-1),ge=!0;var N=ne;try{t:{for(De(v),q=U(k);q!==null&&!(q.expirationTime>v&&Jt());){var te=q.callback;if(typeof te=="function"){q.callback=null,ne=q.priorityLevel;var ie=te(q.expirationTime<=v);if(v=w.unstable_now(),typeof ie=="function"){q.callback=ie,De(v),x=!0;break t}q===U(k)&&f(k),De(v)}else f(k);q=U(k)}if(q!==null)x=!0;else{var u=U(b);u!==null&&tt(pt,u.startTime-v),x=!1}}break e}finally{q=null,ne=N,ge=!1}x=void 0}}finally{x?le():_e=!1}}}var le;if(typeof ze=="function")le=function(){ze(mt)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Qe=Pe.port2;Pe.port1.onmessage=mt,le=function(){Qe.postMessage(null)}}else le=function(){je(mt,0)};function tt(v,x){Y=je(function(){v(w.unstable_now())},x)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(v){v.callback=null},w.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<v?Math.floor(1e3/v):5},w.unstable_getCurrentPriorityLevel=function(){return ne},w.unstable_next=function(v){switch(ne){case 1:case 2:case 3:var x=3;break;default:x=ne}var N=ne;ne=x;try{return v()}finally{ne=N}},w.unstable_requestPaint=function(){Ie=!0},w.unstable_runWithPriority=function(v,x){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var N=ne;ne=v;try{return x()}finally{ne=N}},w.unstable_scheduleCallback=function(v,x,N){var te=w.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?te+N:te):N=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=N+ie,v={id:P++,callback:x,priorityLevel:v,startTime:N,expirationTime:ie,sortIndex:-1},N>te?(v.sortIndex=N,B(b,v),U(k)===null&&v===U(b)&&(ke?(ft(Y),Y=-1):ke=!0,tt(pt,N-te))):(v.sortIndex=ie,B(k,v),qe||ge||(qe=!0,_e||(_e=!0,le()))),v},w.unstable_shouldYield=Jt,w.unstable_wrapCallback=function(v){var x=ne;return function(){var N=ne;ne=x;try{return v.apply(this,arguments)}finally{ne=N}}}})(cr)),cr}var bf;function $h(){return bf||(bf=1,rr.exports=Fh()),rr.exports}var ur={exports:{}},Ge={};var Sf;function em(){if(Sf)return Ge;Sf=1;var w=dr();function B(k){var b="https://react.dev/errors/"+k;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)b+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+k+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var f={d:{f:U,r:function(){throw Error(B(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},H=Symbol.for("react.portal");function L(k,b,P){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:q==null?null:""+q,children:k,containerInfo:b,implementation:P}}var Z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fe(k,b){if(k==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Ge.createPortal=function(k,b){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(B(299));return L(k,b,null,P)},Ge.flushSync=function(k){var b=Z.T,P=f.p;try{if(Z.T=null,f.p=2,k)return k()}finally{Z.T=b,f.p=P,f.d.f()}},Ge.preconnect=function(k,b){typeof k=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,f.d.C(k,b))},Ge.prefetchDNS=function(k){typeof k=="string"&&f.d.D(k)},Ge.preinit=function(k,b){if(typeof k=="string"&&b&&typeof b.as=="string"){var P=b.as,q=fe(P,b.crossOrigin),ne=typeof b.integrity=="string"?b.integrity:void 0,ge=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;P==="style"?f.d.S(k,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:q,integrity:ne,fetchPriority:ge}):P==="script"&&f.d.X(k,{crossOrigin:q,integrity:ne,fetchPriority:ge,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Ge.preinitModule=function(k,b){if(typeof k=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var P=fe(b.as,b.crossOrigin);f.d.M(k,{crossOrigin:P,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&f.d.M(k)},Ge.preload=function(k,b){if(typeof k=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var P=b.as,q=fe(P,b.crossOrigin);f.d.L(k,P,{crossOrigin:q,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Ge.preloadModule=function(k,b){if(typeof k=="string")if(b){var P=fe(b.as,b.crossOrigin);f.d.m(k,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:P,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else f.d.m(k)},Ge.requestFormReset=function(k){f.d.r(k)},Ge.unstable_batchedUpdates=function(k,b){return k(b)},Ge.useFormState=function(k,b,P){return Z.H.useFormState(k,b,P)},Ge.useFormStatus=function(){return Z.H.useHostTransitionStatus()},Ge.version="19.2.3",Ge}var Af;function tm(){if(Af)return ur.exports;Af=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),ur.exports=em(),ur.exports}var Cf;function am(){if(Cf)return Ai;Cf=1;var w=$h(),B=dr(),U=tm();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function L(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(L(e)!==e)throw Error(f(188))}function b(e){var t=e.alternate;if(!t){if(t=L(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return k(i),e;if(o===n)return k(i),t;o=o.sibling}throw Error(f(188))}if(a.return!==n.return)a=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===a){s=!0,a=i,n=o;break}if(l===n){s=!0,n=i,a=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===a){s=!0,a=o,n=i;break}if(l===n){s=!0,n=o,a=i;break}l=l.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==n)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,ne=Symbol.for("react.element"),ge=Symbol.for("react.transitional.element"),qe=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),ft=Symbol.for("react.consumer"),ze=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),Jt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case je:return"Profiler";case Ie:return"StrictMode";case pt:return"Suspense";case _e:return"SuspenseList";case ht:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case qe:return"Portal";case ze:return e.displayName||"Context";case ft:return(e._context.displayName||"Context")+".Consumer";case De:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Qe(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return Qe(e(t))}catch{}}return null}var tt=Array.isArray,v=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function u(e){return{current:e}}function C(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function D(e,t){ie++,te[ie]=e.current,e.current=t}var z=u(null),j=u(null),V=u(null),ae=u(null);function Ye(e,t){switch(D(V,t),D(j,e),D(z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Kd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(z),D(z,e)}function be(){C(z),C(j),C(V)}function Dn(e){e.memoizedState!==null&&D(ae,e);var t=z.current,a=Kd(t,e.type);t!==a&&(D(j,e),D(z,a))}function Ci(e){j.current===e&&(C(z),C(j)),ae.current===e&&(C(ae),gi._currentValue=N)}var Lo,fr;function wa(e){if(Lo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Lo=t&&t[1]||"",fr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lo+e+fr}var Go=!1;function Po(e,t){if(!e||Go)return"";Go=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(g){var m=g}Reflect.construct(e,[],A)}else{try{A.call()}catch(g){m=g}e.call(A.prototype)}}else{try{throw Error()}catch(g){m=g}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),s=o[0],l=o[1];if(s&&l){var r=s.split(`
`),h=l.split(`
`);for(i=n=0;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(n===r.length||i===h.length)for(n=r.length-1,i=h.length-1;1<=n&&0<=i&&r[n]!==h[i];)i--;for(;1<=n&&0<=i;n--,i--)if(r[n]!==h[i]){if(n!==1||i!==1)do if(n--,i--,0>i||r[n]!==h[i]){var y=`
`+r[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{Go=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function kf(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return Po(e.type,!1);case 11:return Po(e.type.render,!1);case 1:return Po(e.type,!0);case 31:return wa("Activity");default:return""}}function pr(e){try{var t="",a=null;do t+=kf(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Yo=Object.prototype.hasOwnProperty,Vo=w.unstable_scheduleCallback,Io=w.unstable_cancelCallback,Df=w.unstable_shouldYield,Ef=w.unstable_requestPaint,at=w.unstable_now,zf=w.unstable_getCurrentPriorityLevel,hr=w.unstable_ImmediatePriority,mr=w.unstable_UserBlockingPriority,wi=w.unstable_NormalPriority,Rf=w.unstable_LowPriority,gr=w.unstable_IdlePriority,Mf=w.log,qf=w.unstable_setDisableYieldValue,En=null,nt=null;function Ft(e){if(typeof Mf=="function"&&qf(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(En,e)}catch{}}var it=Math.clz32?Math.clz32:Uf,Nf=Math.log,Of=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(Nf(e)/Of|0)|0}var Ti=256,xi=262144,ki=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var l=n&134217727;return l!==0?(n=l&~o,n!==0?i=Ta(n):(s&=l,s!==0?i=Ta(s):a||(a=l&~e,a!==0&&(i=Ta(a))))):(l=n&~o,l!==0?i=Ta(l):s!==0?i=Ta(s):a||(a=n&~e,a!==0&&(i=Ta(a)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:i}function zn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var e=ki;return ki<<=1,(ki&62914560)===0&&(ki=4194304),e}function Qo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kf(e,t,a,n,i,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var l=e.entanglements,r=e.expirationTimes,h=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-it(a),A=1<<y;l[y]=0,r[y]=-1;var m=h[y];if(m!==null)for(h[y]=null,y=0;y<m.length;y++){var g=m[y];g!==null&&(g.lane&=-536870913)}a&=~A}n!==0&&vr(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function vr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-it(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function br(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-it(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Sr(e,t){var a=t&-t;return a=(a&42)!==0?1:Wo(a),(a&(e.suspendedLanes|t))!==0?0:a}function Wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ar(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:lf(e.type))}function Cr(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var $t=Math.random().toString(36).slice(2),Ne="__reactFiber$"+$t,We="__reactProps$"+$t,Ga="__reactContainer$"+$t,Zo="__reactEvents$"+$t,Bf="__reactListeners$"+$t,jf="__reactHandles$"+$t,wr="__reactResources$"+$t,Mn="__reactMarker$"+$t;function Jo(e){delete e[Ne],delete e[We],delete e[Zo],delete e[Bf],delete e[jf]}function Pa(e){var t=e[Ne];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Ne]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Yd(e);e!==null;){if(a=e[Ne])return a;e=Yd(e)}return t}e=a,a=e.parentNode}return null}function Ya(e){if(e=e[Ne]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Va(e){var t=e[wr];return t||(t=e[wr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[Mn]=!0}var Tr=new Set,xr={};function xa(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(xr[e]=t,e=0;e<t.length;e++)Tr.add(t[e])}var _f=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kr={},Dr={};function Lf(e){return Yo.call(Dr,e)?!0:Yo.call(kr,e)?!1:_f.test(e)?Dr[e]=!0:(kr[e]=!0,!1)}function Ei(e,t,a){if(Lf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Er(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){if(!e._valueTracker){var t=Er(e)?"checked":"value";e._valueTracker=Gf(e,t,""+e[t])}}function zr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Er(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pf=/[\n"\\]/g;function yt(e){return e.replace(Pf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $o(e,t,a,n,i,o,s,l){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?es(e,s,gt(t)):a!=null?es(e,s,gt(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+gt(l):e.removeAttribute("name")}function Rr(e,t,a,n,i,o,s,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Fo(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,l||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Fo(e)}function es(e,t,a){t==="number"&&Ri(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qa(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mr(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function qr(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(f(92));if(tt(n)){if(1<n.length)throw Error(f(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Fo(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Yf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Or(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Nr(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&Nr(e,o,t[o])}function ts(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),If=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return If.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var as=null;function ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Za=null;function Ur(e){var t=Ya(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if($o(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[We]||null;if(!i)throw Error(f(90));$o(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&zr(n)}break e;case"textarea":Mr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Qa(e,!!a.multiple,t,!1)}}}var is=!1;function Hr(e,t,a){if(is)return e(t,a);is=!0;try{var n=e(t);return n}finally{if(is=!1,(Xa!==null||Za!==null)&&(bo(),Xa&&(t=Xa,e=Za,Za=Xa=null,Ur(t),e)))for(t=0;t<e.length;t++)Ur(e[t])}}function Nn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[We]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Ut)try{var On={};Object.defineProperty(On,"passive",{get:function(){os=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{os=!1}var ea=null,ss=null,qi=null;function Kr(){if(qi)return qi;var e,t=ss,a=t.length,n,i="value"in ea?ea.value:ea.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[o-n];n++);return qi=i.slice(e,1<n?1-n:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Br(){return!1}function Xe(e){function t(a,n,i,o,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oi:Br,this.isPropagationStopped=Br,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=Xe(ka),Un=q({},ka,{view:0,detail:0}),Qf=Xe(Un),ls,rs,Hn,Hi=q({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(ls=e.screenX-Hn.screenX,rs=e.screenY-Hn.screenY):rs=ls=0,Hn=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),jr=Xe(Hi),Wf=q({},Hi,{dataTransfer:0}),Xf=Xe(Wf),Zf=q({},Un,{relatedTarget:0}),cs=Xe(Zf),Jf=q({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Xe(Jf),$f=q({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ep=Xe($f),tp=q({},ka,{data:0}),_r=Xe(tp),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ip[e])?!!t[e]:!1}function us(){return op}var sp=q({},Un,{key:function(e){if(e.key){var t=ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=Xe(sp),rp=q({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lr=Xe(rp),cp=q({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),up=Xe(cp),dp=q({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=Xe(dp),pp=q({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hp=Xe(pp),mp=q({},ka,{newState:0,oldState:0}),gp=Xe(mp),yp=[9,13,27,32],ds=Ut&&"CompositionEvent"in window,Kn=null;Ut&&"documentMode"in document&&(Kn=document.documentMode);var vp=Ut&&"TextEvent"in window&&!Kn,Gr=Ut&&(!ds||Kn&&8<Kn&&11>=Kn),Pr=" ",Yr=!1;function Vr(e,t){switch(e){case"keyup":return yp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ir(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function bp(e,t){switch(e){case"compositionend":return Ir(t);case"keypress":return t.which!==32?null:(Yr=!0,Pr);case"textInput":return e=t.data,e===Pr&&Yr?null:e;default:return null}}function Sp(e,t){if(Ja)return e==="compositionend"||!ds&&Vr(e,t)?(e=Kr(),qi=ss=ea=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gr&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Wr(e,t,a,n){Xa?Za?Za.push(n):Za=[n]:Xa=n,t=ko(t,"onChange"),0<t.length&&(a=new Ui("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Bn=null,jn=null;function Cp(e){Rd(e,0)}function Ki(e){var t=qn(e);if(zr(t))return e}function Xr(e,t){if(e==="change")return t}var Zr=!1;if(Ut){var fs;if(Ut){var ps="oninput"in document;if(!ps){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),ps=typeof Jr.oninput=="function"}fs=ps}else fs=!1;Zr=fs&&(!document.documentMode||9<document.documentMode)}function Fr(){Bn&&(Bn.detachEvent("onpropertychange",$r),jn=Bn=null)}function $r(e){if(e.propertyName==="value"&&Ki(jn)){var t=[];Wr(t,jn,e,ns(e)),Hr(Cp,t)}}function wp(e,t,a){e==="focusin"?(Fr(),Bn=t,jn=a,Bn.attachEvent("onpropertychange",$r)):e==="focusout"&&Fr()}function Tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(jn)}function xp(e,t){if(e==="click")return Ki(t)}function kp(e,t){if(e==="input"||e==="change")return Ki(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Dp;function _n(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Yo.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var a=ec(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ec(a)}}function ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ri(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ri(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ep=Ut&&"documentMode"in document&&11>=document.documentMode,Fa=null,ms=null,Ln=null,gs=!1;function ic(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gs||Fa==null||Fa!==Ri(n)||(n=Fa,"selectionStart"in n&&hs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&_n(Ln,n)||(Ln=n,n=ko(ms,"onSelect"),0<n.length&&(t=new Ui("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Fa)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},ys={},oc={};Ut&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Ea(e){if(ys[e])return ys[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in oc)return ys[e]=t[a];return e}var sc=Ea("animationend"),lc=Ea("animationiteration"),rc=Ea("animationstart"),zp=Ea("transitionrun"),Rp=Ea("transitionstart"),Mp=Ea("transitioncancel"),cc=Ea("transitionend"),uc=new Map,vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vs.push("scrollEnd");function kt(e,t){uc.set(e,t),xa(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],en=0,bs=0;function ji(){for(var e=en,t=bs=en=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var o=vt[t];if(vt[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}o!==0&&dc(a,i,o)}}function _i(e,t,a,n){vt[en++]=e,vt[en++]=t,vt[en++]=a,vt[en++]=n,bs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ss(e,t,a,n){return _i(e,t,a,n),Li(e)}function za(e,t){return _i(e,null,null,t),Li(e)}function dc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-it(a),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),o):null}function Li(e){if(50<ci)throw ci=0,zl=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tn={};function qp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,a,n){return new qp(e,t,a,n)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=st(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,a,n,i,o){var s=0;if(n=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=Kh(e,a,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ht:return e=st(31,a,t,i),e.elementType=ht,e.lanes=o,e;case ke:return Ra(a.children,i,o,t);case Ie:s=8,i|=24;break;case je:return e=st(12,a,t,i|2),e.elementType=je,e.lanes=o,e;case pt:return e=st(13,a,t,i),e.elementType=pt,e.lanes=o,e;case _e:return e=st(19,a,t,i),e.elementType=_e,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:s=10;break e;case ft:s=9;break e;case De:s=11;break e;case Y:s=14;break e;case Le:s=16,n=null;break e}s=29,a=Error(f(130,e===null?"null":typeof e,"")),n=null}return t=st(s,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Ra(e,t,a,n){return e=st(7,e,n,t),e.lanes=a,e}function Cs(e,t,a){return e=st(6,e,null,t),e.lanes=a,e}function pc(e){var t=st(18,null,null,0);return t.stateNode=e,t}function ws(e,t,a){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=hc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:pr(t)},hc.set(e,t),t)}return{value:e,source:t,stack:pr(t)}}var an=[],nn=0,Pi=null,Gn=0,St=[],At=0,ta=null,zt=1,Rt="";function Kt(e,t){an[nn++]=Gn,an[nn++]=Pi,Pi=e,Gn=t}function mc(e,t,a){St[At++]=zt,St[At++]=Rt,St[At++]=ta,ta=e;var n=zt;e=Rt;var i=32-it(n)-1;n&=~(1<<i),a+=1;var o=32-it(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,zt=1<<32-it(t)+i|a<<i|n,Rt=o+e}else zt=1<<o|a<<i|n,Rt=e}function Ts(e){e.return!==null&&(Kt(e,1),mc(e,1,0))}function xs(e){for(;e===Pi;)Pi=an[--nn],an[nn]=null,Gn=an[--nn],an[nn]=null;for(;e===ta;)ta=St[--At],St[At]=null,Rt=St[--At],St[At]=null,zt=St[--At],St[At]=null}function gc(e,t){St[At++]=zt,St[At++]=Rt,St[At++]=ta,zt=t.id,Rt=t.overflow,ta=e}var Oe=null,pe=null,J=!1,aa=null,Ct=!1,ks=Error(f(519));function na(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pn(bt(t,e)),ks}function yc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ne]=e,t[We]=n,a){case"dialog":Q("cancel",t),Q("close",t);break;case"iframe":case"object":case"embed":Q("load",t);break;case"video":case"audio":for(a=0;a<di.length;a++)Q(di[a],t);break;case"source":Q("error",t);break;case"img":case"image":case"link":Q("error",t),Q("load",t);break;case"details":Q("toggle",t);break;case"input":Q("invalid",t),Rr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Q("invalid",t);break;case"textarea":Q("invalid",t),qr(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Od(t.textContent,a)?(n.popover!=null&&(Q("beforetoggle",t),Q("toggle",t)),n.onScroll!=null&&Q("scroll",t),n.onScrollEnd!=null&&Q("scrollend",t),n.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||na(e,!0)}function vc(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Oe=Oe.return}}function on(e){if(e!==Oe)return!1;if(!J)return vc(e),J=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yl(e.type,e.memoizedProps)),a=!a),a&&pe&&na(e),vc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=Pd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));pe=Pd(e)}else t===27?(t=pe,ya(e.type)?(e=Xl,Xl=null,pe=e):pe=t):pe=Oe?Tt(e.stateNode.nextSibling):null;return!0}function Ma(){pe=Oe=null,J=!1}function Ds(){var e=aa;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),aa=null),e}function Pn(e){aa===null?aa=[e]:aa.push(e)}var Es=u(null),qa=null,Bt=null;function ia(e,t,a){D(Es,t._currentValue),t._currentValue=a}function jt(e){e._currentValue=Es.current,C(Es)}function zs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Rs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=i;for(var r=0;r<t.length;r++)if(l.context===t[r]){o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),zs(o.return,a,e),n||(s=null);break e}o=l.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(f(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),zs(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function sn(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var l=i.type;ot(i.pendingProps.value,s.value)||(e!==null?e.push(l):e=[l])}}else if(i===ae.current){if(s=i.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}i=i.return}e!==null&&Rs(t,e,a,n),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){qa=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return bc(qa,e)}function Vi(e,t){return qa===null&&Na(e),bc(e,t)}function bc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(f(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var Np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Op=w.unstable_scheduleCallback,Up=w.unstable_NormalPriority,Ce={$$typeof:ze,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ms(){return{controller:new Np,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&Op(Up,function(){e.controller.abort()})}var Vn=null,qs=0,ln=0,rn=null;function Hp(e,t){if(Vn===null){var a=Vn=[];qs=0,ln=Ul(),rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return qs++,t.then(Sc,Sc),t}function Sc(){if(--qs===0&&Vn!==null){rn!==null&&(rn.status="fulfilled");var e=Vn;Vn=null,ln=0,rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ac=v.S;v.S=function(e,t){id=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hp(e,t),Ac!==null&&Ac(e,t)};var Oa=u(null);function Ns(){var e=Oa.current;return e!==null?e:de.pooledCache}function Ii(e,t){t===null?D(Oa,Oa.current):D(Oa,t.pool)}function Cc(){var e=Ns();return e===null?null:{parent:Ce._currentValue,pool:e}}var cn=Error(f(460)),Os=Error(f(474)),Qi=Error(f(542)),Wi={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e}throw Ha=t,cn}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,cn):a}}var Ha=null;function xc(){if(Ha===null)throw Error(f(459));var e=Ha;return Ha=null,e}function kc(e){if(e===cn||e===Qi)throw Error(f(483))}var un=null,In=0;function Xi(e){var t=In;return In+=1,un===null&&(un=[]),Tc(un,e,t)}function Qn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zi(e,t){throw t.$$typeof===ne?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function a(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=Ht(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=67108866,c):p):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function l(d,c,p,S){return c===null||c.tag!==6?(c=Cs(p,d.mode,S),c.return=d,c):(c=i(c,p),c.return=d,c)}function r(d,c,p,S){var M=p.type;return M===ke?y(d,c,p.props.children,S,p.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Le&&Ua(M)===c.type)?(c=i(c,p.props),Qn(c,p),c.return=d,c):(c=Gi(p.type,p.key,p.props,null,d.mode,S),Qn(c,p),c.return=d,c)}function h(d,c,p,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ws(p,d.mode,S),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function y(d,c,p,S,M){return c===null||c.tag!==7?(c=Ra(p,d.mode,S,M),c.return=d,c):(c=i(c,p),c.return=d,c)}function A(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Cs(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ge:return p=Gi(c.type,c.key,c.props,null,d.mode,p),Qn(p,c),p.return=d,p;case qe:return c=ws(c,d.mode,p),c.return=d,c;case Le:return c=Ua(c),A(d,c,p)}if(tt(c)||le(c))return c=Ra(c,d.mode,p,null),c.return=d,c;if(typeof c.then=="function")return A(d,Xi(c),p);if(c.$$typeof===ze)return A(d,Vi(d,c),p);Zi(d,c)}return null}function m(d,c,p,S){var M=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return M!==null?null:l(d,c,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ge:return p.key===M?r(d,c,p,S):null;case qe:return p.key===M?h(d,c,p,S):null;case Le:return p=Ua(p),m(d,c,p,S)}if(tt(p)||le(p))return M!==null?null:y(d,c,p,S,null);if(typeof p.then=="function")return m(d,c,Xi(p),S);if(p.$$typeof===ze)return m(d,c,Vi(d,p),S);Zi(d,p)}return null}function g(d,c,p,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(p)||null,l(c,d,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ge:return d=d.get(S.key===null?p:S.key)||null,r(c,d,S,M);case qe:return d=d.get(S.key===null?p:S.key)||null,h(c,d,S,M);case Le:return S=Ua(S),g(d,c,p,S,M)}if(tt(S)||le(S))return d=d.get(p)||null,y(c,d,S,M,null);if(typeof S.then=="function")return g(d,c,p,Xi(S),M);if(S.$$typeof===ze)return g(d,c,p,Vi(c,S),M);Zi(c,S)}return null}function E(d,c,p,S){for(var M=null,F=null,R=c,G=c=0,X=null;R!==null&&G<p.length;G++){R.index>G?(X=R,R=null):X=R.sibling;var $=m(d,R,p[G],S);if($===null){R===null&&(R=X);break}e&&R&&$.alternate===null&&t(d,R),c=o($,c,G),F===null?M=$:F.sibling=$,F=$,R=X}if(G===p.length)return a(d,R),J&&Kt(d,G),M;if(R===null){for(;G<p.length;G++)R=A(d,p[G],S),R!==null&&(c=o(R,c,G),F===null?M=R:F.sibling=R,F=R);return J&&Kt(d,G),M}for(R=n(R);G<p.length;G++)X=g(R,d,G,p[G],S),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?G:X.key),c=o(X,c,G),F===null?M=X:F.sibling=X,F=X);return e&&R.forEach(function(Ca){return t(d,Ca)}),J&&Kt(d,G),M}function O(d,c,p,S){if(p==null)throw Error(f(151));for(var M=null,F=null,R=c,G=c=0,X=null,$=p.next();R!==null&&!$.done;G++,$=p.next()){R.index>G?(X=R,R=null):X=R.sibling;var Ca=m(d,R,$.value,S);if(Ca===null){R===null&&(R=X);break}e&&R&&Ca.alternate===null&&t(d,R),c=o(Ca,c,G),F===null?M=Ca:F.sibling=Ca,F=Ca,R=X}if($.done)return a(d,R),J&&Kt(d,G),M;if(R===null){for(;!$.done;G++,$=p.next())$=A(d,$.value,S),$!==null&&(c=o($,c,G),F===null?M=$:F.sibling=$,F=$);return J&&Kt(d,G),M}for(R=n(R);!$.done;G++,$=p.next())$=g(R,d,G,$.value,S),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?G:$.key),c=o($,c,G),F===null?M=$:F.sibling=$,F=$);return e&&R.forEach(function(Wh){return t(d,Wh)}),J&&Kt(d,G),M}function ue(d,c,p,S){if(typeof p=="object"&&p!==null&&p.type===ke&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ge:e:{for(var M=p.key;c!==null;){if(c.key===M){if(M=p.type,M===ke){if(c.tag===7){a(d,c.sibling),S=i(c,p.props.children),S.return=d,d=S;break e}}else if(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Le&&Ua(M)===c.type){a(d,c.sibling),S=i(c,p.props),Qn(S,p),S.return=d,d=S;break e}a(d,c);break}else t(d,c);c=c.sibling}p.type===ke?(S=Ra(p.props.children,d.mode,S,p.key),S.return=d,d=S):(S=Gi(p.type,p.key,p.props,null,d.mode,S),Qn(S,p),S.return=d,d=S)}return s(d);case qe:e:{for(M=p.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){a(d,c.sibling),S=i(c,p.children||[]),S.return=d,d=S;break e}else{a(d,c);break}else t(d,c);c=c.sibling}S=ws(p,d.mode,S),S.return=d,d=S}return s(d);case Le:return p=Ua(p),ue(d,c,p,S)}if(tt(p))return E(d,c,p,S);if(le(p)){if(M=le(p),typeof M!="function")throw Error(f(150));return p=M.call(p),O(d,c,p,S)}if(typeof p.then=="function")return ue(d,c,Xi(p),S);if(p.$$typeof===ze)return ue(d,c,Vi(d,p),S);Zi(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(a(d,c.sibling),S=i(c,p),S.return=d,d=S):(a(d,c),S=Cs(p,d.mode,S),S.return=d,d=S),s(d)):a(d,c)}return function(d,c,p,S){try{In=0;var M=ue(d,c,p,S);return un=null,M}catch(R){if(R===cn||R===Qi)throw R;var F=st(29,R,null,d.mode);return F.lanes=S,F.return=d,F}}}var Ka=Dc(!0),Ec=Dc(!1),oa=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Li(e),dc(e,null,a),t}return _i(e,n,t,a),Li(e)}function Wn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}function Ks(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bs=!1;function Xn(){if(Bs){var e=rn;if(e!==null)throw e}}function Zn(e,t,a,n){Bs=!1;var i=e.updateQueue;oa=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var r=l,h=r.next;r.next=null,s===null?o=h:s.next=h,s=r;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==s&&(l===null?y.firstBaseUpdate=h:l.next=h,y.lastBaseUpdate=r))}if(o!==null){var A=i.baseState;s=0,y=h=r=null,l=o;do{var m=l.lane&-536870913,g=m!==l.lane;if(g?(W&m)===m:(n&m)===m){m!==0&&m===ln&&(Bs=!0),y!==null&&(y=y.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var E=e,O=l;m=t;var ue=a;switch(O.tag){case 1:if(E=O.payload,typeof E=="function"){A=E.call(ue,A,m);break e}A=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=O.payload,m=typeof E=="function"?E.call(ue,A,m):E,m==null)break e;A=q({},A,m);break e;case 2:oa=!0}}m=l.callback,m!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[m]:g.push(m))}else g={lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(h=y=g,r=A):y=y.next=g,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);y===null&&(r=A),i.baseState=r,i.firstBaseUpdate=h,i.lastBaseUpdate=y,o===null&&(i.shared.lanes=0),fa|=s,e.lanes=s,e.memoizedState=A}}function zc(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function Rc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zc(a[e],t)}var dn=u(null),Ji=u(0);function Mc(e,t){e=Wt,D(Ji,e),D(dn,t),Wt=e|t.baseLanes}function js(){D(Ji,Wt),D(dn,dn.current)}function _s(){Wt=Ji.current,C(dn),C(Ji)}var lt=u(null),wt=null;function ra(e){var t=e.alternate;D(Se,Se.current&1),D(lt,e),wt===null&&(t===null||dn.current!==null||t.memoizedState!==null)&&(wt=e)}function Ls(e){D(Se,Se.current),D(lt,e),wt===null&&(wt=e)}function qc(e){e.tag===22?(D(Se,Se.current),D(lt,e),wt===null&&(wt=e)):ca()}function ca(){D(Se,Se.current),D(lt,lt.current)}function rt(e){C(lt),wt===e&&(wt=null),C(Se)}var Se=u(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ql(a)||Wl(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _t=0,_=null,re=null,we=null,$i=!1,fn=!1,Ba=!1,eo=0,Jn=0,pn=null,Bp=0;function ye(){throw Error(f(321))}function Gs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ot(e[a],t[a]))return!1;return!0}function Ps(e,t,a,n,i,o){return _t=o,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?mu:il,Ba=!1,o=a(n,i),Ba=!1,fn&&(o=Oc(t,a,n,i)),Nc(e),o}function Nc(e){v.H=ei;var t=re!==null&&re.next!==null;if(_t=0,we=re=_=null,$i=!1,Jn=0,pn=null,t)throw Error(f(300));e===null||Te||(e=e.dependencies,e!==null&&Yi(e)&&(Te=!0))}function Oc(e,t,a,n){_=e;var i=0;do{if(fn&&(pn=null),Jn=0,fn=!1,25<=i)throw Error(f(301));if(i+=1,we=re=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}v.H=gu,o=t(a,n)}while(fn);return o}function jp(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fn(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(_.flags|=1024),t}function Ys(){var e=eo!==0;return eo=0,e}function Vs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Is(e){if($i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$i=!1}_t=0,we=re=_=null,fn=!1,Jn=eo=0,pn=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?_.memoizedState=we=e:we=we.next=e,we}function Ae(){if(re===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=we===null?_.memoizedState:we.next;if(t!==null)we=t,re=e;else{if(e===null)throw _.alternate===null?Error(f(467)):Error(f(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},we===null?_.memoizedState=we=e:we=we.next=e}return we}function to(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fn(e){var t=Jn;return Jn+=1,pn===null&&(pn=[]),e=Tc(pn,e,t),t=_,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?mu:il),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fn(e);if(e.$$typeof===ze)return Ue(e)}throw Error(f(438,String(e)))}function Qs(e){var t=null,a=_.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=_.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=to(),_.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Jt;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function no(e){var t=Ae();return Ws(t,re,e)}function Ws(e,t,a){var n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var l=s=null,r=null,h=t,y=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(W&A)===A:(_t&A)===A){var m=h.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===ln&&(y=!0);else if((_t&m)===m){h=h.next,m===ln&&(y=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(l=r=A,s=o):r=r.next=A,_.lanes|=m,fa|=m;A=h.action,Ba&&a(o,A),o=h.hasEagerState?h.eagerState:a(o,A)}else m={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},r===null?(l=r=m,s=o):r=r.next=m,_.lanes|=A,fa|=A;h=h.next}while(h!==null&&h!==t);if(r===null?s=o:r.next=l,!ot(o,e.memoizedState)&&(Te=!0,y&&(a=rn,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=r,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Xs(e){var t=Ae(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ot(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Uc(e,t,a){var n=_,i=Ae(),o=J;if(o){if(a===void 0)throw Error(f(407));a=a()}else a=t();var s=!ot((re||i).memoizedState,a);if(s&&(i.memoizedState=a,Te=!0),i=i.queue,Fs(Bc.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,hn(9,{destroy:void 0},Kc.bind(null,n,i,a,t),null),de===null)throw Error(f(349));o||(_t&127)!==0||Hc(n,t,a)}return a}function Hc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=_.updateQueue,t===null?(t=to(),_.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Kc(e,t,a,n){t.value=a,t.getSnapshot=n,jc(t)&&_c(e)}function Bc(e,t,a){return a(function(){jc(t)&&_c(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ot(e,a)}catch{return!0}}function _c(e){var t=za(e,2);t!==null&&et(t,e,2)}function Zs(e){var t=Ve();if(typeof e=="function"){var a=e;if(e=a(),Ba){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Lc(e,t,a,n){return e.baseState=a,Ws(e,re,typeof n=="function"?n:Lt)}function _p(e,t,a,n,i){if(so(e))throw Error(f(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};v.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Gc(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Gc(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=v.T,s={};v.T=s;try{var l=a(i,n),r=v.S;r!==null&&r(s,l),Pc(e,t,l)}catch(h){Js(e,t,h)}finally{o!==null&&s.types!==null&&(o.types=s.types),v.T=o}}else try{o=a(i,n),Pc(e,t,o)}catch(h){Js(e,t,h)}}function Pc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Yc(e,t,n)},function(n){return Js(e,t,n)}):Yc(e,t,a)}function Yc(e,t,a){t.status="fulfilled",t.value=a,Vc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gc(e,a)))}function Js(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Vc(t),t=t.next;while(t!==n)}e.action=null}function Vc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ic(e,t){return t}function Qc(e,t){if(J){var a=de.formState;if(a!==null){e:{var n=_;if(J){if(pe){t:{for(var i=pe,o=Ct;i.nodeType!==8;){if(!o){i=null;break t}if(i=Tt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){pe=Tt(i.nextSibling),n=i.data==="F!";break e}}na(n)}n=!1}n&&(t=a[0])}}return a=Ve(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ic,lastRenderedState:t},a.queue=n,a=fu.bind(null,_,n),n.dispatch=a,n=Zs(!1),o=nl.bind(null,_,!1,n.queue),n=Ve(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=_p.bind(null,_,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Wc(e){var t=Ae();return Xc(t,re,e)}function Xc(e,t,a){if(t=Ws(e,t,Ic)[0],e=no(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fn(t)}catch(s){throw s===cn?Qi:s}else n=t;t=Ae();var i=t.queue,o=i.dispatch;return a!==t.memoizedState&&(_.flags|=2048,hn(9,{destroy:void 0},Lp.bind(null,i,a),null)),[n,o,e]}function Lp(e,t){e.action=t}function Zc(e){var t=Ae(),a=re;if(a!==null)return Xc(t,a,e);Ae(),t=t.memoizedState,a=Ae();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function hn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=_.updateQueue,t===null&&(t=to(),_.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Jc(){return Ae().memoizedState}function io(e,t,a,n){var i=Ve();_.flags|=e,i.memoizedState=hn(1|t,{destroy:void 0},a,n===void 0?null:n)}function oo(e,t,a,n){var i=Ae();n=n===void 0?null:n;var o=i.memoizedState.inst;re!==null&&n!==null&&Gs(n,re.memoizedState.deps)?i.memoizedState=hn(t,o,a,n):(_.flags|=e,i.memoizedState=hn(1|t,o,a,n))}function Fc(e,t){io(8390656,8,e,t)}function Fs(e,t){oo(2048,8,e,t)}function Gp(e){_.flags|=4;var t=_.updateQueue;if(t===null)t=to(),_.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $c(e){var t=Ae().memoizedState;return Gp({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function eu(e,t){return oo(4,2,e,t)}function tu(e,t){return oo(4,4,e,t)}function au(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nu(e,t,a){a=a!=null?a.concat([e]):null,oo(4,4,au.bind(null,t,e),a)}function $s(){}function iu(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ou(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gs(t,n[1]))return n[0];if(n=e(),Ba){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n}function el(e,t,a){return a===void 0||(_t&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sd(),_.lanes|=e,fa|=e,a)}function su(e,t,a,n){return ot(a,t)?a:dn.current!==null?(e=el(e,a,n),ot(e,t)||(Te=!0),e):(_t&42)===0||(_t&1073741824)!==0&&(W&261930)===0?(Te=!0,e.memoizedState=a):(e=sd(),_.lanes|=e,fa|=e,t)}function lu(e,t,a,n,i){var o=x.p;x.p=o!==0&&8>o?o:8;var s=v.T,l={};v.T=l,nl(e,!1,t,a);try{var r=i(),h=v.S;if(h!==null&&h(l,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var y=Kp(r,n);$n(e,t,y,dt(e))}else $n(e,t,n,dt(e))}catch(A){$n(e,t,{then:function(){},status:"rejected",reason:A},dt())}finally{x.p=o,s!==null&&l.types!==null&&(s.types=l.types),v.T=s}}function Pp(){}function tl(e,t,a,n){if(e.tag!==5)throw Error(f(476));var i=ru(e).queue;lu(e,i,t,N,a===null?Pp:function(){return cu(e),a(n)})}function ru(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:N},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cu(e){var t=ru(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},dt())}function al(){return Ue(gi)}function uu(){return Ae().memoizedState}function du(){return Ae().memoizedState}function Yp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=dt();e=sa(a);var n=la(t,e,a);n!==null&&(et(n,t,a),Wn(n,t,a)),t={cache:Ms()},e.payload=t;return}t=t.return}}function Vp(e,t,a){var n=dt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},so(e)?pu(t,a):(a=Ss(e,t,a,n),a!==null&&(et(a,e,n),hu(a,t,n)))}function fu(e,t,a){var n=dt();$n(e,t,a,n)}function $n(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(so(e))pu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,a);if(i.hasEagerState=!0,i.eagerState=l,ot(l,s))return _i(e,t,i,0),de===null&&ji(),!1}catch{}if(a=Ss(e,t,i,n),a!==null)return et(a,e,n),hu(a,t,n),!0}return!1}function nl(e,t,a,n){if(n={lane:2,revertLane:Ul(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},so(e)){if(t)throw Error(f(479))}else t=Ss(e,a,n,2),t!==null&&et(t,e,2)}function so(e){var t=e.alternate;return e===_||t!==null&&t===_}function pu(e,t){fn=$i=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function hu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,br(e,a)}}var ei={readContext:Ue,use:ao,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};ei.useEffectEvent=ye;var mu={readContext:Ue,use:ao,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Fc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,io(4194308,4,au.bind(null,t,e),a)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var a=Ve();t=t===void 0?null:t;var n=e();if(Ba){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ve();if(a!==void 0){var i=a(t);if(Ba){Ft(!0);try{a(t)}finally{Ft(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Vp.bind(null,_,e),[n.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=Zs(e);var t=e.queue,a=fu.bind(null,_,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$s,useDeferredValue:function(e,t){var a=Ve();return el(a,e,t)},useTransition:function(){var e=Zs(!1);return e=lu.bind(null,_,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=_,i=Ve();if(J){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),de===null)throw Error(f(349));(W&127)!==0||Hc(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,Fc(Bc.bind(null,n,o,e),[e]),n.flags|=2048,hn(9,{destroy:void 0},Kc.bind(null,n,o,a,t),null),a},useId:function(){var e=Ve(),t=de.identifierPrefix;if(J){var a=Rt,n=zt;a=(n&~(1<<32-it(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=eo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:al,useFormState:Qc,useActionState:Qc,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nl.bind(null,_,!0,a),a.dispatch=t,[e,t]},useMemoCache:Qs,useCacheRefresh:function(){return Ve().memoizedState=Yp.bind(null,_)},useEffectEvent:function(e){var t=Ve(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},il={readContext:Ue,use:ao,useCallback:iu,useContext:Ue,useEffect:Fs,useImperativeHandle:nu,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:no,useRef:Jc,useState:function(){return no(Lt)},useDebugValue:$s,useDeferredValue:function(e,t){var a=Ae();return su(a,re.memoizedState,e,t)},useTransition:function(){var e=no(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:Uc,useId:uu,useHostTransitionStatus:al,useFormState:Wc,useActionState:Wc,useOptimistic:function(e,t){var a=Ae();return Lc(a,re,e,t)},useMemoCache:Qs,useCacheRefresh:du};il.useEffectEvent=$c;var gu={readContext:Ue,use:ao,useCallback:iu,useContext:Ue,useEffect:Fs,useImperativeHandle:nu,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:Xs,useRef:Jc,useState:function(){return Xs(Lt)},useDebugValue:$s,useDeferredValue:function(e,t){var a=Ae();return re===null?el(a,e,t):su(a,re.memoizedState,e,t)},useTransition:function(){var e=Xs(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:Uc,useId:uu,useHostTransitionStatus:al,useFormState:Zc,useActionState:Zc,useOptimistic:function(e,t){var a=Ae();return re!==null?Lc(a,re,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qs,useCacheRefresh:du};gu.useEffectEvent=$c;function ol(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sl={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=dt(),i=sa(n);i.payload=t,a!=null&&(i.callback=a),t=la(e,i,n),t!==null&&(et(t,e,n),Wn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=dt(),i=sa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=la(e,i,n),t!==null&&(et(t,e,n),Wn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=dt(),n=sa(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(et(t,e,a),Wn(t,e,a))}};function yu(e,t,a,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!_n(a,n)||!_n(i,o):!0}function vu(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function ja(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=q({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function bu(e){Bi(e)}function Su(e){console.error(e)}function Au(e){Bi(e)}function lo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Cu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ll(e,t,a){return a=sa(a),a.tag=3,a.payload={element:null},a.callback=function(){lo(e,t)},a}function wu(e){return e=sa(e),e.tag=3,e}function Tu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){Cu(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Cu(t,a,n),typeof i!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})})}function Ip(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&sn(t,a,i,!0),a=lt.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?So():a.alternate===null&&ve===0&&(ve=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ql(e,n,i)),!1;case 22:return a.flags|=65536,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ql(e,n,i)),!1}throw Error(f(435,a.tag))}return ql(e,n,i),So(),!1}if(J)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==ks&&(e=Error(f(422),{cause:n}),Pn(bt(e,a)))):(n!==ks&&(t=Error(f(423),{cause:n}),Pn(bt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=bt(n,a),i=ll(e.stateNode,n,i),Ks(e,i),ve!==4&&(ve=2)),!1;var o=Error(f(520),{cause:n});if(o=bt(o,a),ri===null?ri=[o]:ri.push(o),ve!==4&&(ve=2),t===null)return!0;n=bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ll(a.stateNode,n,e),Ks(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(pa===null||!pa.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=wu(i),Tu(i,e,a,n),Ks(a,i),!1}a=a.return}while(a!==null);return!1}var rl=Error(f(461)),Te=!1;function He(e,t,a,n){t.child=e===null?Ec(t,null,a,n):Ka(t,e.child,a,n)}function xu(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}else s=n;return Na(t),n=Ps(e,t,a,s,o,i),l=Ys(),e!==null&&!Te?(Vs(e,t,i),Gt(e,t,i)):(J&&l&&Ts(t),t.flags|=1,He(e,t,n,i),t.child)}function ku(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!As(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Du(e,t,o,n,i)):(e=Gi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!gl(e,i)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(s,n)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Ht(o,n),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(_n(o,n)&&e.ref===t.ref)if(Te=!1,t.pendingProps=n=o,gl(e,i))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return cl(e,t,a,n,i)}function Eu(e,t,a,n){var i=n.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~o}else n=0,t.child=null;return zu(e,t,o,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ii(t,o!==null?o.cachePool:null),o!==null?Mc(t,o):js(),qc(t);else return n=t.lanes=536870912,zu(e,t,o!==null?o.baseLanes|a:a,a,n)}else o!==null?(Ii(t,o.cachePool),Mc(t,o),ca(),t.memoizedState=null):(e!==null&&Ii(t,null),js(),ca());return He(e,t,i,a),t.child}function ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zu(e,t,a,n,i){var o=Ns();return o=o===null?null:{parent:Ce._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&Ii(t,null),js(),qc(t),e!==null&&sn(e,t,n,!0),t.childLanes=i,null}function ro(e,t){return t=uo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ru(e,t,a){return Ka(t,e.child,null,a),e=ro(t,t.pendingProps),e.flags|=2,rt(t),t.memoizedState=null,e}function Qp(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(J){if(n.mode==="hidden")return e=ro(t,n),t.lanes=536870912,ti(null,e);if(Ls(t),(e=pe)?(e=Gd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:zt,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=pc(e),a.return=t,t.child=a,Oe=t,pe=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return ro(t,n)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ls(t),i)if(t.flags&256)t.flags&=-257,t=Ru(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Te||sn(e,t,a,!1),i=(a&e.childLanes)!==0,Te||i){if(n=de,n!==null&&(s=Sr(n,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,za(e,s),et(n,e,s),rl;So(),t=Ru(e,t,a)}else e=o.treeContext,pe=Tt(s.nextSibling),Oe=t,J=!0,aa=null,Ct=!1,e!==null&&gc(t,e),t=ro(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function co(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function cl(e,t,a,n,i){return Na(t),a=Ps(e,t,a,n,void 0,i),n=Ys(),e!==null&&!Te?(Vs(e,t,i),Gt(e,t,i)):(J&&n&&Ts(t),t.flags|=1,He(e,t,a,i),t.child)}function Mu(e,t,a,n,i,o){return Na(t),t.updateQueue=null,a=Oc(t,n,a,i),Nc(e),n=Ys(),e!==null&&!Te?(Vs(e,t,o),Gt(e,t,o)):(J&&n&&Ts(t),t.flags|=1,He(e,t,a,o),t.child)}function qu(e,t,a,n,i){if(Na(t),t.stateNode===null){var o=tn,s=a.contextType;typeof s=="object"&&s!==null&&(o=Ue(s)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=sl,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},Us(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?Ue(s):tn,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(ol(t,a,s,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&sl.enqueueReplaceState(o,o.state,null),Zn(t,n,o,i),Xn(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var l=t.memoizedProps,r=ja(a,l);o.props=r;var h=o.context,y=a.contextType;s=tn,typeof y=="object"&&y!==null&&(s=Ue(y));var A=a.getDerivedStateFromProps;y=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||h!==s)&&vu(t,o,n,s),oa=!1;var m=t.memoizedState;o.state=m,Zn(t,n,o,i),Xn(),h=t.memoizedState,l||m!==h||oa?(typeof A=="function"&&(ol(t,a,A,n),h=t.memoizedState),(r=oa||yu(t,a,r,n,m,h,s))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),o.props=n,o.state=h,o.context=s,n=r):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Hs(e,t),s=t.memoizedProps,y=ja(a,s),o.props=y,A=t.pendingProps,m=o.context,h=a.contextType,r=tn,typeof h=="object"&&h!==null&&(r=Ue(h)),l=a.getDerivedStateFromProps,(h=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==A||m!==r)&&vu(t,o,n,r),oa=!1,m=t.memoizedState,o.state=m,Zn(t,n,o,i),Xn();var g=t.memoizedState;s!==A||m!==g||oa||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof l=="function"&&(ol(t,a,l,n),g=t.memoizedState),(y=oa||yu(t,a,y,n,m,g,r)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,g,r),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,g,r)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),o.props=n,o.state=g,o.context=r,n=y):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,co(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,a,i)):He(e,t,a,i),t.memoizedState=o.state,e=t.child):e=Gt(e,t,i),e}function Nu(e,t,a,n){return Ma(),t.flags|=256,He(e,t,a,n),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dl(e){return{baseLanes:e,cachePool:Cc()}}function fl(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ut),e}function Ou(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(J){if(i?ra(t):ca(),(e=pe)?(e=Gd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:zt,overflow:Rt}:null,retryLane:536870912,hydrationErrors:null},a=pc(e),a.return=t,t.child=a,Oe=t,pe=null)):e=null,e===null)throw na(t);return Wl(e)?t.lanes=32:t.lanes=536870912,null}var l=n.children;return n=n.fallback,i?(ca(),i=t.mode,l=uo({mode:"hidden",children:l},i),n=Ra(n,i,a,null),l.return=t,n.return=t,l.sibling=n,t.child=l,n=t.child,n.memoizedState=dl(a),n.childLanes=fl(e,s,a),t.memoizedState=ul,ti(null,n)):(ra(t),pl(t,l))}var r=e.memoizedState;if(r!==null&&(l=r.dehydrated,l!==null)){if(o)t.flags&256?(ra(t),t.flags&=-257,t=hl(e,t,a)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,t=null):(ca(),l=n.fallback,i=t.mode,n=uo({mode:"visible",children:n.children},i),l=Ra(l,i,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Ka(t,e.child,null,a),n=t.child,n.memoizedState=dl(a),n.childLanes=fl(e,s,a),t.memoizedState=ul,t=ti(null,n));else if(ra(t),Wl(l)){if(s=l.nextSibling&&l.nextSibling.dataset,s)var h=s.dgst;s=h,n=Error(f(419)),n.stack="",n.digest=s,Pn({value:n,source:null,stack:null}),t=hl(e,t,a)}else if(Te||sn(e,t,a,!1),s=(a&e.childLanes)!==0,Te||s){if(s=de,s!==null&&(n=Sr(s,a),n!==0&&n!==r.retryLane))throw r.retryLane=n,za(e,n),et(s,e,n),rl;Ql(l)||So(),t=hl(e,t,a)}else Ql(l)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,pe=Tt(l.nextSibling),Oe=t,J=!0,aa=null,Ct=!1,e!==null&&gc(t,e),t=pl(t,n.children),t.flags|=4096);return t}return i?(ca(),l=n.fallback,i=t.mode,r=e.child,h=r.sibling,n=Ht(r,{mode:"hidden",children:n.children}),n.subtreeFlags=r.subtreeFlags&65011712,h!==null?l=Ht(h,l):(l=Ra(l,i,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,ti(null,n),n=t.child,l=e.child.memoizedState,l===null?l=dl(a):(i=l.cachePool,i!==null?(r=Ce._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Cc(),l={baseLanes:l.baseLanes|a,cachePool:i}),n.memoizedState=l,n.childLanes=fl(e,s,a),t.memoizedState=ul,ti(e.child,n)):(ra(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function pl(e,t){return t=uo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function uo(e,t){return e=st(22,e,null,t),e.lanes=0,e}function hl(e,t,a){return Ka(t,e.child,null,a),e=pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),zs(e.return,t,a)}function ml(e,t,a,n,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i,s.treeForkCount=o)}function Hu(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;n=n.children;var s=Se.current,l=(s&2)!==0;if(l?(s=s&1|2,t.flags|=128):s&=1,D(Se,s),He(e,t,n,a),n=J?Gn:0,!l&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,a,t);else if(e.tag===19)Uu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Fi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ml(t,!1,i,a,o,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ml(t,!0,a,null,o,n);break;case"together":ml(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(sn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function gl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yi(e)))}function Wp(e,t,a){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),ia(t,Ce,e.memoizedState.cache),Ma();break;case 27:case 5:Dn(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ls(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ou(e,t,a):(ra(t),e=Gt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(sn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Hu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(Se,Se.current),n)break;return null;case 22:return t.lanes=0,Eu(e,t,a,t.pendingProps);case 24:ia(t,Ce,e.memoizedState.cache)}return Gt(e,t,a)}function Ku(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!gl(e,a)&&(t.flags&128)===0)return Te=!1,Wp(e,t,a);Te=(e.flags&131072)!==0}else Te=!1,J&&(t.flags&1048576)!==0&&mc(t,Gn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")As(e)?(n=ja(e,n),t.tag=1,t=qu(null,t,e,n,a)):(t.tag=0,t=cl(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===De){t.tag=11,t=xu(null,t,e,n,a);break e}else if(i===Y){t.tag=14,t=ku(null,t,e,n,a);break e}}throw t=Qe(e)||e,Error(f(306,t,""))}}return t;case 0:return cl(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=ja(n,t.pendingProps),qu(e,t,n,i,a);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(f(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,Hs(e,t),Zn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ia(t,Ce,n),n!==o.cache&&Rs(t,[Ce],a,!0),Xn(),n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Nu(e,t,n,a);break e}else if(n!==i){i=bt(Error(f(424)),t),Pn(i),t=Nu(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,pe=Tt(e.firstChild),Oe=t,J=!0,aa=null,Ct=!0,a=Ec(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ma(),n===i){t=Gt(e,t,a);break e}He(e,t,n,a)}t=t.child}return t;case 26:return co(e,t),e===null?(a=Wd(t.type,null,t.pendingProps,null))?t.memoizedState=a:J||(a=t.type,e=t.pendingProps,n=Do(V.current).createElement(a),n[Ne]=t,n[We]=e,Ke(n,a,e),Re(n),t.stateNode=n):t.memoizedState=Wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Dn(t),e===null&&J&&(n=t.stateNode=Vd(t.type,t.pendingProps,V.current),Oe=t,Ct=!0,i=pe,ya(t.type)?(Xl=i,pe=Tt(n.firstChild)):pe=i),He(e,t,t.pendingProps.children,a),co(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((i=n=pe)&&(n=Th(n,t.type,t.pendingProps,Ct),n!==null?(t.stateNode=n,Oe=t,pe=Tt(n.firstChild),Ct=!1,i=!0):i=!1),i||na(t)),Dn(t),i=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,n=o.children,Yl(i,o)?n=null:s!==null&&Yl(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Ps(e,t,jp,null,null,a),gi._currentValue=i),co(e,t),He(e,t,n,a),t.child;case 6:return e===null&&J&&((e=a=pe)&&(a=xh(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,Oe=t,pe=null,e=!0):e=!1),e||na(t)),null;case 13:return Ou(e,t,a);case 4:return Ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ka(t,null,n,a):He(e,t,n,a),t.child;case 11:return xu(e,t,t.type,t.pendingProps,a);case 7:return He(e,t,t.pendingProps,a),t.child;case 8:return He(e,t,t.pendingProps.children,a),t.child;case 12:return He(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ia(t,t.type,n.value),He(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Na(t),i=Ue(i),n=n(i),t.flags|=1,He(e,t,n,a),t.child;case 14:return ku(e,t,t.type,t.pendingProps,a);case 15:return Du(e,t,t.type,t.pendingProps,a);case 19:return Hu(e,t,a);case 31:return Qp(e,t,a);case 22:return Eu(e,t,a,t.pendingProps);case 24:return Na(t),n=Ue(Ce),e===null?(i=Ns(),i===null&&(i=de,o=Ms(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},Us(t),ia(t,Ce,i)):((e.lanes&a)!==0&&(Hs(e,t),Zn(t,null,null,a),Xn()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ia(t,Ce,n)):(n=o.cache,ia(t,Ce,n),n!==i.cache&&Rs(t,[Ce],a,!0))),He(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function Pt(e){e.flags|=4}function yl(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ud())e.flags|=8192;else throw Ha=Wi,Os}else e.flags&=-16777217}function Bu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$d(t))if(ud())e.flags|=8192;else throw Ha=Wi,Os}function fo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yr():536870912,e.lanes|=t,vn|=t)}function ai(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Xp(e,t,a){var n=t.pendingProps;switch(xs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jt(Ce),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(on(t)?Pt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),he(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(Pt(t),o!==null?(he(t),Bu(t,o)):(he(t),yl(t,i,null,n,a))):o?o!==e.memoizedState?(Pt(t),he(t),Bu(t,o)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Pt(t),he(t),yl(t,i,e,n,a)),null;case 27:if(Ci(t),a=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return he(t),null}e=z.current,on(t)?yc(t):(e=Vd(i,n,a),t.stateNode=e,Pt(t))}return he(t),null;case 5:if(Ci(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return he(t),null}if(o=z.current,on(t))yc(t);else{var s=Do(V.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?s.createElement(i,{is:n.is}):s.createElement(i)}}o[Ne]=t,o[We]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(Ke(o,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Pt(t)}}return he(t),yl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Pt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(f(166));if(e=V.current,on(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Oe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ne]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Od(e.nodeValue,a)),e||na(t,!0)}else e=Do(e).createTextNode(n),e[Ne]=t,t.stateNode=e}return he(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=on(t),a!==null){if(e===null){if(!n)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ne]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else a=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(f(558))}return he(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=on(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Ne]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else i=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fo(t,t.updateQueue),he(t),null);case 4:return be(),e===null&&jl(t.stateNode.containerInfo),he(t),null;case 10:return jt(t.type),he(t),null;case 19:if(C(Se),n=t.memoizedState,n===null)return he(t),null;if(i=(t.flags&128)!==0,o=n.rendering,o===null)if(i)ai(n,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Fi(e),o!==null){for(t.flags|=128,ai(n,!1),e=o.updateQueue,t.updateQueue=e,fo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return D(Se,Se.current&1|2),J&&Kt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&at()>yo&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304)}else{if(!i)if(e=Fi(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fo(t,e),ai(n,!0),n.tail===null&&n.tailMode==="hidden"&&!o.alternate&&!J)return he(t),null}else 2*at()-n.renderingStartTime>yo&&a!==536870912&&(t.flags|=128,i=!0,ai(n,!1),t.lanes=4194304);n.isBackwards?(o.sibling=t.child,t.child=o):(e=n.last,e!==null?e.sibling=o:t.child=o,n.last=o)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=at(),e.sibling=null,a=Se.current,D(Se,i?a&1|2:a&1),J&&Kt(t,n.treeForkCount),e):(he(t),null);case 22:case 23:return rt(t),_s(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),a=t.updateQueue,a!==null&&fo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&C(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),jt(Ce),he(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function Zp(e,t){switch(xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jt(Ce),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ci(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(f(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Se),null;case 4:return be(),null;case 10:return jt(t.type),null;case 22:case 23:return rt(t),_s(),e!==null&&C(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jt(Ce),null;case 25:return null;default:return null}}function ju(e,t){switch(xs(t),t.tag){case 3:jt(Ce),be();break;case 26:case 27:case 5:Ci(t);break;case 4:be();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:C(Se);break;case 10:jt(t.type);break;case 22:case 23:rt(t),_s(),e!==null&&C(Oa);break;case 24:jt(Ce)}}function ni(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,s=a.inst;n=o(),s.destroy=n}a=a.next}while(a!==i)}}catch(l){se(t,t.return,l)}}function ua(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var s=n.inst,l=s.destroy;if(l!==void 0){s.destroy=void 0,i=t;var r=a,h=l;try{h()}catch(y){se(i,r,y)}}}n=n.next}while(n!==o)}}catch(y){se(t,t.return,y)}}function _u(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Rc(t,a)}catch(n){se(e,e.return,n)}}}function Lu(e,t,a){a.props=ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){se(e,t,n)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){se(e,t,i)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){se(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){se(e,t,i)}else a.current=null}function Gu(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){se(e,e.return,i)}}function vl(e,t,a){try{var n=e.stateNode;vh(n,e.type,a,t),n[We]=t}catch(i){se(e,e.return,i)}}function Pu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(n!==4&&(n===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Sl(e,t,a),e=e.sibling;e!==null;)Sl(e,t,a),e=e.sibling}function po(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(po(e,t,a),e=e.sibling;e!==null;)po(e,t,a),e=e.sibling}function Yu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ke(t,n,a),t[Ne]=e,t[We]=a}catch(o){se(e,e.return,o)}}var Yt=!1,xe=!1,Al=!1,Vu=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Jp(e,t){if(e=e.containerInfo,Gl=Oo,e=nc(e),hs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,l=-1,r=-1,h=0,y=0,A=e,m=null;t:for(;;){for(var g;A!==a||i!==0&&A.nodeType!==3||(l=s+i),A!==o||n!==0&&A.nodeType!==3||(r=s+n),A.nodeType===3&&(s+=A.nodeValue.length),(g=A.firstChild)!==null;)m=A,A=g;for(;;){if(A===e)break t;if(m===a&&++h===i&&(l=s),m===o&&++y===n&&(r=s),(g=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=g}a=l===-1||r===-1?null:{start:l,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pl={focusedElem:e,selectionRange:a},Oo=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var E=ja(a.type,i);e=n.getSnapshotBeforeUpdate(E,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(O){se(a,a.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Il(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Il(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Iu(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),n&4&&ni(5,a);break;case 1:if(It(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){se(a,a.return,s)}else{var i=ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){se(a,a.return,s)}}n&64&&_u(a),n&512&&ii(a,a.return);break;case 3:if(It(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Rc(e,t)}catch(s){se(a,a.return,s)}}break;case 27:t===null&&n&4&&Yu(a);case 26:case 5:It(e,a),t===null&&n&4&&Gu(a),n&512&&ii(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),n&4&&Xu(e,a);break;case 13:It(e,a),n&4&&Zu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sh.bind(null,a),kh(e,a))));break;case 22:if(n=a.memoizedState!==null||Yt,!n){t=t!==null&&t.memoizedState!==null||xe,i=Yt;var o=xe;Yt=n,(xe=t)&&!o?Qt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Yt=i,xe=o}break;case 30:break;default:It(e,a)}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,Ze=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Wu(e,t,a),a=a.sibling}function Wu(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 26:xe||Mt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xe||Mt(a,t);var n=me,i=Ze;ya(a.type)&&(me=a.stateNode,Ze=!1),Vt(e,t,a),pi(a.stateNode),me=n,Ze=i;break;case 5:xe||Mt(a,t);case 6:if(n=me,i=Ze,me=null,Vt(e,t,a),me=n,Ze=i,me!==null)if(Ze)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(a.stateNode)}catch(o){se(a,t,o)}else try{me.removeChild(a.stateNode)}catch(o){se(a,t,o)}break;case 18:me!==null&&(Ze?(e=me,_d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),kn(e)):_d(me,a.stateNode));break;case 4:n=me,i=Ze,me=a.stateNode.containerInfo,Ze=!0,Vt(e,t,a),me=n,Ze=i;break;case 0:case 11:case 14:case 15:ua(2,a,t),xe||ua(4,a,t),Vt(e,t,a);break;case 1:xe||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Lu(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:xe=(n=xe)||a.memoizedState!==null,Vt(e,t,a),xe=n;break;default:Vt(e,t,a)}}function Xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kn(e)}catch(a){se(t,t.return,a)}}}function Zu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kn(e)}catch(a){se(t,t.return,a)}}function Fp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vu),t;default:throw Error(f(435,e.tag))}}function ho(e,t){var a=Fp(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=lh.bind(null,e,n);n.then(i,i)}})}function Je(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 27:if(ya(l.type)){me=l.stateNode,Ze=!1;break e}break;case 5:me=l.stateNode,Ze=!1;break e;case 3:case 4:me=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(me===null)throw Error(f(160));Wu(o,s,i),me=null,Ze=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}var Dt=null;function Ju(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Je(t,e),Fe(e),n&4&&(ua(3,e,e.return),ni(3,e),ua(5,e,e.return));break;case 1:Je(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&64&&Yt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Dt;if(Je(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Mn]||o[Ne]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Ke(o,n,a),o[Ne]=e,Re(o),n=o;break e;case"link":var s=Jd("link","href",i).get(n+(a.href||""));if(s){for(var l=0;l<s.length;l++)if(o=s[l],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(l,1);break t}}o=i.createElement(n),Ke(o,n,a),i.head.appendChild(o);break;case"meta":if(s=Jd("meta","content",i).get(n+(a.content||""))){for(l=0;l<s.length;l++)if(o=s[l],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(l,1);break t}}o=i.createElement(n),Ke(o,n,a),i.head.appendChild(o);break;default:throw Error(f(468,n))}o[Ne]=e,Re(o),n=o}e.stateNode=n}else Fd(i,e.type,e.stateNode);else e.stateNode=Zd(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Fd(i,e.type,e.stateNode):Zd(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vl(e,e.memoizedProps,a.memoizedProps)}break;case 27:Je(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),a!==null&&n&4&&vl(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Je(t,e),Fe(e),n&512&&(xe||a===null||Mt(a,a.return)),e.flags&32){i=e.stateNode;try{Wa(i,"")}catch(E){se(e,e.return,E)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,vl(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Al=!0);break;case 6:if(Je(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(f(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(E){se(e,e.return,E)}}break;case 3:if(Ro=null,i=Dt,Dt=Eo(t.containerInfo),Je(t,e),Dt=i,Fe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(t.containerInfo)}catch(E){se(e,e.return,E)}Al&&(Al=!1,Fu(e));break;case 4:n=Dt,Dt=Eo(e.stateNode.containerInfo),Je(t,e),Fe(e),Dt=n;break;case 12:Je(t,e),Fe(e);break;case 31:Je(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ho(e,n)));break;case 13:Je(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(go=at()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ho(e,n)));break;case 22:i=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,h=Yt,y=xe;if(Yt=h||i,xe=y||r,Je(t,e),xe=y,Yt=h,Fe(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||r||Yt||xe||_a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(o=r.stateNode,i)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{l=r.stateNode;var A=r.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(E){se(r,r.return,E)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(E){se(r,r.return,E)}}}else if(t.tag===18){if(a===null){r=t;try{var g=r.stateNode;i?Ld(g,!0):Ld(r.stateNode,!1)}catch(E){se(r,r.return,E)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ho(e,a))));break;case 19:Je(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ho(e,n)));break;case 30:break;case 21:break;default:Je(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Pu(n)){a=n;break}n=n.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var i=a.stateNode,o=bl(e);po(e,o,i);break;case 5:var s=a.stateNode;a.flags&32&&(Wa(s,""),a.flags&=-33);var l=bl(e);po(e,l,s);break;case 3:case 4:var r=a.stateNode.containerInfo,h=bl(e);Sl(e,h,r);break;default:throw Error(f(161))}}catch(y){se(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Iu(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),_a(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Lu(t,t.return,a),_a(t);break;case 27:pi(t.stateNode);case 26:case 5:Mt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function Qt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:Qt(i,o,a),ni(4,o);break;case 1:if(Qt(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){se(n,n.return,h)}if(n=o,i=n.updateQueue,i!==null){var l=n.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)zc(r[i],l)}catch(h){se(n,n.return,h)}}a&&s&64&&_u(o),ii(o,o.return);break;case 27:Yu(o);case 26:case 5:Qt(i,o,a),a&&n===null&&s&4&&Gu(o),ii(o,o.return);break;case 12:Qt(i,o,a);break;case 31:Qt(i,o,a),a&&s&4&&Xu(i,o);break;case 13:Qt(i,o,a),a&&s&4&&Zu(i,o);break;case 22:o.memoizedState===null&&Qt(i,o,a),ii(o,o.return);break;case 30:break;default:Qt(i,o,a)}t=t.sibling}}function Cl(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function Et(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$u(e,t,a,n),t=t.sibling}function $u(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,a,n),i&2048&&ni(9,t);break;case 1:Et(e,t,a,n);break;case 3:Et(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(i&2048){Et(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,l=o.onPostCommit;typeof l=="function"&&l(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){se(t,t.return,r)}}else Et(e,t,a,n);break;case 31:Et(e,t,a,n);break;case 13:Et(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Et(e,t,a,n):oi(e,t):o._visibility&2?Et(e,t,a,n):(o._visibility|=2,mn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Cl(s,t);break;case 24:Et(e,t,a,n),i&2048&&wl(t.alternate,t);break;default:Et(e,t,a,n)}}function mn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,l=a,r=n,h=s.flags;switch(s.tag){case 0:case 11:case 15:mn(o,s,l,r,i),ni(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?mn(o,s,l,r,i):oi(o,s):(y._visibility|=2,mn(o,s,l,r,i)),i&&h&2048&&Cl(s.alternate,s);break;case 24:mn(o,s,l,r,i),i&&h&2048&&wl(s.alternate,s);break;default:mn(o,s,l,r,i)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:oi(a,n),i&2048&&Cl(n.alternate,n);break;case 24:oi(a,n),i&2048&&wl(n.alternate,n);break;default:oi(a,n)}t=t.sibling}}var si=8192;function gn(e,t,a){if(e.subtreeFlags&si)for(e=e.child;e!==null;)ed(e,t,a),e=e.sibling}function ed(e,t,a){switch(e.tag){case 26:gn(e,t,a),e.flags&si&&e.memoizedState!==null&&Bh(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:gn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Eo(e.stateNode.containerInfo),gn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=si,si=16777216,gn(e,t,a),si=n):gn(e,t,a));break;default:gn(e,t,a)}}function td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nd(n,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ad(e),e=e.sibling}function ad(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&ua(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mo(e)):li(e);break;default:li(e)}}function mo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Me=n,nd(n,e)}td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),mo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mo(t));break;default:mo(t)}e=e.sibling}}function nd(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Me=n;else e:for(a=e;Me!==null;){n=Me;var i=n.sibling,o=n.return;if(Qu(n),n===a){Me=null;break e}if(i!==null){i.return=o,Me=i;break e}Me=o}}}var $p={getCacheForType:function(e){var t=Ue(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ue(Ce).controller.signal}},eh=typeof WeakMap=="function"?WeakMap:Map,ee=0,de=null,I=null,W=0,oe=0,ct=null,da=!1,yn=!1,Tl=!1,Wt=0,ve=0,fa=0,La=0,xl=0,ut=0,vn=0,ri=null,$e=null,kl=!1,go=0,id=0,yo=1/0,vo=null,pa=null,Ee=0,ha=null,bn=null,Xt=0,Dl=0,El=null,od=null,ci=0,zl=null;function dt(){return(ee&2)!==0&&W!==0?W&-W:v.T!==null?Ul():Ar()}function sd(){if(ut===0)if((W&536870912)===0||J){var e=xi;xi<<=1,(xi&3932160)===0&&(xi=262144),ut=e}else ut=536870912;return e=lt.current,e!==null&&(e.flags|=32),ut}function et(e,t,a){(e===de&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),ma(e,W,ut,!1)),Rn(e,a),((ee&2)===0||e!==de)&&(e===de&&((ee&2)===0&&(La|=a),ve===4&&ma(e,W,ut,!1)),qt(e))}function ld(e,t,a){if((ee&6)!==0)throw Error(f(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zn(e,t),i=n?nh(e,t):Ml(e,t,!0),o=n;do{if(i===0){yn&&!n&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!th(a)){i=Ml(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var l=e;i=ri;var r=l.current.memoizedState.isDehydrated;if(r&&(Sn(l,s).flags|=256),s=Ml(l,s,!1),s!==2){if(Tl&&!r){l.errorRecoveryDisabledLanes|=o,La|=o,i=4;break e}o=$e,$e=i,o!==null&&($e===null?$e=o:$e.push.apply($e,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Sn(e,0),ma(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:ma(n,t,ut,!da);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(i=go+300-at(),10<i)){if(ma(n,t,ut,!da),Di(n,0,!0)!==0)break e;Xt=t,n.timeoutHandle=Bd(rd.bind(null,n,a,$e,vo,kl,t,ut,La,vn,da,o,"Throttled",-0,0),i);break e}rd(n,a,$e,vo,kl,t,ut,La,vn,da,o,null,-0,0)}}break}while(!0);qt(e)}function rd(e,t,a,n,i,o,s,l,r,h,y,A,m,g){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},ed(t,o,A);var E=(o&62914560)===o?go-at():(o&4194048)===o?id-at():0;if(E=jh(A,E),E!==null){Xt=o,e.cancelPendingCommit=E(gd.bind(null,e,t,o,a,n,i,s,l,r,y,A,null,m,g)),ma(e,o,s,!h);return}}gd(e,t,o,a,n,i,s,l,r)}function th(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,n){t&=~xl,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-it(i),s=1<<o;n[o]=-1,i&=~s}a!==0&&vr(e,a,t)}function bo(){return(ee&6)===0?(ui(0),!1):!0}function Rl(){if(I!==null){if(oe===0)var e=I.return;else e=I,Bt=qa=null,Is(e),un=null,In=0,e=I;for(;e!==null;)ju(e.alternate,e),e=e.return;I=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ah(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Xt=0,Rl(),de=e,I=a=Ht(e.current,null),W=t,oe=0,ct=null,da=!1,yn=zn(e,t),Tl=!1,vn=ut=xl=La=fa=ve=0,$e=ri=null,kl=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-it(n),o=1<<i;t|=e[i],n&=~o}return Wt=t,ji(),a}function cd(e,t){_=null,v.H=ei,t===cn||t===Qi?(t=xc(),oe=3):t===Os?(t=xc(),oe=4):oe=t===rl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,I===null&&(ve=1,lo(e,bt(t,e.current)))}function ud(){var e=lt.current;return e===null?!0:(W&4194048)===W?wt===null:(W&62914560)===W||(W&536870912)!==0?e===wt:!1}function dd(){var e=v.H;return v.H=ei,e===null?ei:e}function fd(){var e=v.A;return v.A=$p,e}function So(){ve=4,da||(W&4194048)!==W&&lt.current!==null||(yn=!0),(fa&134217727)===0&&(La&134217727)===0||de===null||ma(de,W,ut,!1)}function Ml(e,t,a){var n=ee;ee|=2;var i=dd(),o=fd();(de!==e||W!==t)&&(vo=null,Sn(e,t)),t=!1;var s=ve;e:do try{if(oe!==0&&I!==null){var l=I,r=ct;switch(oe){case 8:Rl(),s=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var h=oe;if(oe=0,ct=null,An(e,l,r,h),a&&yn){s=0;break e}break;default:h=oe,oe=0,ct=null,An(e,l,r,h)}}ah(),s=ve;break}catch(y){cd(e,y)}while(!0);return t&&e.shellSuspendCounter++,Bt=qa=null,ee=n,v.H=i,v.A=o,I===null&&(de=null,W=0,ji()),s}function ah(){for(;I!==null;)pd(I)}function nh(e,t){var a=ee;ee|=2;var n=dd(),i=fd();de!==e||W!==t?(vo=null,yo=at()+500,Sn(e,t)):yn=zn(e,t);e:do try{if(oe!==0&&I!==null){t=I;var o=ct;t:switch(oe){case 1:oe=0,ct=null,An(e,t,o,1);break;case 2:case 9:if(wc(o)){oe=0,ct=null,hd(t);break}t=function(){oe!==2&&oe!==9||de!==e||(oe=7),qt(e)},o.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:wc(o)?(oe=0,ct=null,hd(t)):(oe=0,ct=null,An(e,t,o,7));break;case 5:var s=null;switch(I.tag){case 26:s=I.memoizedState;case 5:case 27:var l=I;if(s?$d(s):l.stateNode.complete){oe=0,ct=null;var r=l.sibling;if(r!==null)I=r;else{var h=l.return;h!==null?(I=h,Ao(h)):I=null}break t}}oe=0,ct=null,An(e,t,o,5);break;case 6:oe=0,ct=null,An(e,t,o,6);break;case 8:Rl(),ve=6;break e;default:throw Error(f(462))}}ih();break}catch(y){cd(e,y)}while(!0);return Bt=qa=null,v.H=n,v.A=i,ee=a,I!==null?0:(de=null,W=0,ji(),ve)}function ih(){for(;I!==null&&!Df();)pd(I)}function pd(e){var t=Ku(e.alternate,e,Wt);e.memoizedProps=e.pendingProps,t===null?Ao(e):I=t}function hd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mu(a,t,t.pendingProps,t.type,void 0,W);break;case 11:t=Mu(a,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Is(t);default:ju(a,t),t=I=fc(t,Wt),t=Ku(a,t,Wt)}e.memoizedProps=e.pendingProps,t===null?Ao(e):I=t}function An(e,t,a,n){Bt=qa=null,Is(t),un=null,In=0;var i=t.return;try{if(Ip(e,i,t,a,W)){ve=1,lo(e,bt(a,e.current)),I=null;return}}catch(o){if(i!==null)throw I=i,o;ve=1,lo(e,bt(a,e.current)),I=null;return}t.flags&32768?(J||n===1?e=!0:yn||(W&536870912)!==0?e=!1:(da=e=!0,(n===2||n===9||n===3||n===6)&&(n=lt.current,n!==null&&n.tag===13&&(n.flags|=16384))),md(t,e)):Ao(t)}function Ao(e){var t=e;do{if((t.flags&32768)!==0){md(t,da);return}e=t.return;var a=Xp(t.alternate,t,Wt);if(a!==null){I=a;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);ve===0&&(ve=5)}function md(e,t){do{var a=Zp(e.alternate,e);if(a!==null){a.flags&=32767,I=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=a}while(e!==null);ve=6,I=null}function gd(e,t,a,n,i,o,s,l,r){e.cancelPendingCommit=null;do Co();while(Ee!==0);if((ee&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(o=t.lanes|t.childLanes,o|=bs,Kf(e,a,o,s,l,r),e===de&&(I=de=null,W=0),bn=t,ha=e,Xt=a,Dl=o,El=i,od=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rh(wi,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,i=x.p,x.p=2,s=ee,ee|=4;try{Jp(e,t,a)}finally{ee=s,x.p=i,v.T=n}}Ee=1,yd(),vd(),bd()}}function yd(){if(Ee===1){Ee=0;var e=ha,t=bn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var i=ee;ee|=4;try{Ju(t,e);var o=Pl,s=nc(e.containerInfo),l=o.focusedElem,r=o.selectionRange;if(s!==l&&l&&l.ownerDocument&&ac(l.ownerDocument.documentElement,l)){if(r!==null&&hs(l)){var h=r.start,y=r.end;if(y===void 0&&(y=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(y,l.value.length);else{var A=l.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var g=m.getSelection(),E=l.textContent.length,O=Math.min(r.start,E),ue=r.end===void 0?O:Math.min(r.end,E);!g.extend&&O>ue&&(s=ue,ue=O,O=s);var d=tc(l,O),c=tc(l,ue);if(d&&c&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==c.node||g.focusOffset!==c.offset)){var p=A.createRange();p.setStart(d.node,d.offset),g.removeAllRanges(),O>ue?(g.addRange(p),g.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),g.addRange(p))}}}}for(A=[],g=l;g=g.parentNode;)g.nodeType===1&&A.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<A.length;l++){var S=A[l];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Oo=!!Gl,Pl=Gl=null}finally{ee=i,x.p=n,v.T=a}}e.current=t,Ee=2}}function vd(){if(Ee===2){Ee=0;var e=ha,t=bn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=x.p;x.p=2;var i=ee;ee|=4;try{Iu(e,t.alternate,t)}finally{ee=i,x.p=n,v.T=a}}Ee=3}}function bd(){if(Ee===4||Ee===3){Ee=0,Ef();var e=ha,t=bn,a=Xt,n=od;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,bn=ha=null,Sd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pa=null),Xo(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(En,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,i=x.p,x.p=2,v.T=null;try{for(var o=e.onRecoverableError,s=0;s<n.length;s++){var l=n[s];o(l.value,{componentStack:l.stack})}}finally{v.T=t,x.p=i}}(Xt&3)!==0&&Co(),qt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===zl?ci++:(ci=0,zl=e):ci=0,ui(0)}}function Sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function Co(){return yd(),vd(),bd(),Ad()}function Ad(){if(Ee!==5)return!1;var e=ha,t=Dl;Dl=0;var a=Xo(Xt),n=v.T,i=x.p;try{x.p=32>a?32:a,v.T=null,a=El,El=null;var o=ha,s=Xt;if(Ee=0,bn=ha=null,Xt=0,(ee&6)!==0)throw Error(f(331));var l=ee;if(ee|=4,ad(o.current),$u(o,o.current,s,a),ee=l,ui(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(En,o)}catch{}return!0}finally{x.p=i,v.T=n,Sd(e,t)}}function Cd(e,t,a){t=bt(a,t),t=ll(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Rn(e,2),qt(e))}function se(e,t,a){if(e.tag===3)Cd(e,e,a);else for(;t!==null;){if(t.tag===3){Cd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pa===null||!pa.has(n))){e=bt(a,e),a=wu(2),n=la(t,a,2),n!==null&&(Tu(a,n,t,e),Rn(n,2),qt(n));break}}t=t.return}}function ql(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new eh;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Tl=!0,i.add(a),e=oh.bind(null,e,t,a),t.then(e,e))}function oh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(W&a)===a&&(ve===4||ve===3&&(W&62914560)===W&&300>at()-go?(ee&2)===0&&Sn(e,0):xl|=a,vn===W&&(vn=0)),qt(e)}function wd(e,t){t===0&&(t=yr()),e=za(e,t),e!==null&&(Rn(e,t),qt(e))}function sh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),wd(e,a)}function lh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(t),wd(e,a)}function rh(e,t){return Vo(e,t)}var wo=null,Cn=null,Nl=!1,To=!1,Ol=!1,ga=0;function qt(e){e!==Cn&&e.next===null&&(Cn===null?wo=Cn=e:Cn=Cn.next=e),To=!0,Nl||(Nl=!0,uh())}function ui(e,t){if(!Ol&&To){Ol=!0;do for(var a=!1,n=wo;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var s=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-it(42|e)+1)-1,o&=i&~(s&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Dd(n,o))}else o=W,o=Di(n,n===de?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||zn(n,o)||(a=!0,Dd(n,o));n=n.next}while(a);Ol=!1}}function ch(){Td()}function Td(){To=Nl=!1;var e=0;ga!==0&&Sh()&&(e=ga);for(var t=at(),a=null,n=wo;n!==null;){var i=n.next,o=xd(n,t);o===0?(n.next=null,a===null?wo=i:a.next=i,i===null&&(Cn=a)):(a=n,(e!==0||(o&3)!==0)&&(To=!0)),n=i}Ee!==0&&Ee!==5||ui(e),ga!==0&&(ga=0)}function xd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-it(o),l=1<<s,r=i[s];r===-1?((l&a)===0||(l&n)!==0)&&(i[s]=Hf(l,t)):r<=t&&(e.expiredLanes|=l),o&=~l}if(t=de,a=W,a=Di(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Io(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Io(n),Xo(a)){case 2:case 8:a=mr;break;case 32:a=wi;break;case 268435456:a=gr;break;default:a=wi}return n=kd.bind(null,e),a=Vo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Io(n),e.callbackPriority=2,e.callbackNode=null,2}function kd(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Co()&&e.callbackNode!==a)return null;var n=W;return n=Di(e,e===de?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ld(e,n,t),xd(e,at()),e.callbackNode!=null&&e.callbackNode===a?kd.bind(null,e):null)}function Dd(e,t){if(Co())return null;ld(e,t,!0)}function uh(){Ch(function(){(ee&6)!==0?Vo(hr,ch):Td()})}function Ul(){if(ga===0){var e=ln;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),ga=e}return ga}function Ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function zd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function dh(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=Ed((i[We]||null).action),s=n.submitter;s&&(t=(t=s[We]||null)?Ed(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var l=new Ui("action","action",null,n,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ga!==0){var r=s?zd(i,s):new FormData(i);tl(a,{pending:!0,data:r,method:i.method,action:o},null,r)}}else typeof o=="function"&&(l.preventDefault(),r=s?zd(i,s):new FormData(i),tl(a,{pending:!0,data:r,method:i.method,action:o},o,r))},currentTarget:i}]})}}for(var Hl=0;Hl<vs.length;Hl++){var Kl=vs[Hl],fh=Kl.toLowerCase(),ph=Kl[0].toUpperCase()+Kl.slice(1);kt(fh,"on"+ph)}kt(sc,"onAnimationEnd"),kt(lc,"onAnimationIteration"),kt(rc,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(zp,"onTransitionRun"),kt(Rp,"onTransitionStart"),kt(Mp,"onTransitionCancel"),kt(cc,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function Rd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],r=l.instance,h=l.currentTarget;if(l=l.listener,r!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=h;try{o(i)}catch(y){Bi(y)}i.currentTarget=null,o=r}else for(s=0;s<n.length;s++){if(l=n[s],r=l.instance,h=l.currentTarget,l=l.listener,r!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=h;try{o(i)}catch(y){Bi(y)}i.currentTarget=null,o=r}}}}function Q(e,t){var a=t[Zo];a===void 0&&(a=t[Zo]=new Set);var n=e+"__bubble";a.has(n)||(Md(t,e,2,!1),a.add(n))}function Bl(e,t,a){var n=0;t&&(n|=4),Md(a,e,n,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function jl(e){if(!e[xo]){e[xo]=!0,Tr.forEach(function(a){a!=="selectionchange"&&(hh.has(a)||Bl(a,!1,e),Bl(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,Bl("selectionchange",!1,t))}}function Md(e,t,a,n){switch(lf(t)){case 2:var i=Gh;break;case 8:i=Ph;break;default:i=er}a=i.bind(null,t,a,e),i=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function _l(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i)break;if(s===4)for(s=n.return;s!==null;){var r=s.tag;if((r===3||r===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;l!==null;){if(s=Pa(l),s===null)return;if(r=s.tag,r===5||r===6||r===26||r===27){n=o=s;continue e}l=l.parentNode}}n=n.return}Hr(function(){var h=o,y=ns(a),A=[];e:{var m=uc.get(e);if(m!==void 0){var g=Ui,E=e;switch(e){case"keypress":if(Ni(a)===0)break e;case"keydown":case"keyup":g=lp;break;case"focusin":E="focus",g=cs;break;case"focusout":E="blur",g=cs;break;case"beforeblur":case"afterblur":g=cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=jr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=up;break;case sc:case lc:case rc:g=Ff;break;case cc:g=fp;break;case"scroll":case"scrollend":g=Qf;break;case"wheel":g=hp;break;case"copy":case"cut":case"paste":g=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lr;break;case"toggle":case"beforetoggle":g=gp}var O=(t&4)!==0,ue=!O&&(e==="scroll"||e==="scrollend"),d=O?m!==null?m+"Capture":null:m;O=[];for(var c=h,p;c!==null;){var S=c;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||d===null||(S=Nn(c,d),S!=null&&O.push(fi(c,S,p))),ue)break;c=c.return}0<O.length&&(m=new g(m,E,null,a,y),A.push({event:m,listeners:O}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&a!==as&&(E=a.relatedTarget||a.fromElement)&&(Pa(E)||E[Ga]))break e;if((g||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,g?(E=a.relatedTarget||a.toElement,g=h,E=E?Pa(E):null,E!==null&&(ue=L(E),O=E.tag,E!==ue||O!==5&&O!==27&&O!==6)&&(E=null)):(g=null,E=h),g!==E)){if(O=jr,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(O=Lr,S="onPointerLeave",d="onPointerEnter",c="pointer"),ue=g==null?m:qn(g),p=E==null?m:qn(E),m=new O(S,c+"leave",g,a,y),m.target=ue,m.relatedTarget=p,S=null,Pa(y)===h&&(O=new O(d,c+"enter",E,a,y),O.target=p,O.relatedTarget=ue,S=O),ue=S,g&&E)t:{for(O=mh,d=g,c=E,p=0,S=d;S;S=O(S))p++;S=0;for(var M=c;M;M=O(M))S++;for(;0<p-S;)d=O(d),p--;for(;0<S-p;)c=O(c),S--;for(;p--;){if(d===c||c!==null&&d===c.alternate){O=d;break t}d=O(d),c=O(c)}O=null}else O=null;g!==null&&qd(A,m,g,O,!1),E!==null&&ue!==null&&qd(A,ue,E,O,!0)}}e:{if(m=h?qn(h):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var F=Xr;else if(Qr(m))if(Zr)F=kp;else{F=Tp;var R=wp}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&ts(h.elementType)&&(F=Xr):F=xp;if(F&&(F=F(e,h))){Wr(A,F,a,y);break e}R&&R(e,m,h),e==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&es(m,"number",m.value)}switch(R=h?qn(h):window,e){case"focusin":(Qr(R)||R.contentEditable==="true")&&(Fa=R,ms=h,Ln=null);break;case"focusout":Ln=ms=Fa=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,ic(A,a,y);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":ic(A,a,y)}var G;if(ds)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Ja?Vr(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Gr&&a.locale!=="ko"&&(Ja||X!=="onCompositionStart"?X==="onCompositionEnd"&&Ja&&(G=Kr()):(ea=y,ss="value"in ea?ea.value:ea.textContent,Ja=!0)),R=ko(h,X),0<R.length&&(X=new _r(X,e,null,a,y),A.push({event:X,listeners:R}),G?X.data=G:(G=Ir(a),G!==null&&(X.data=G)))),(G=vp?bp(e,a):Sp(e,a))&&(X=ko(h,"onBeforeInput"),0<X.length&&(R=new _r("onBeforeInput","beforeinput",null,a,y),A.push({event:R,listeners:X}),R.data=G)),dh(A,e,h,a,y)}Rd(A,t)})}function fi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ko(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Nn(e,a),i!=null&&n.unshift(fi(e,i,o)),i=Nn(e,t),i!=null&&n.push(fi(e,i,o))),e.tag===3)return n;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qd(e,t,a,n,i){for(var o=t._reactName,s=[];a!==null&&a!==n;){var l=a,r=l.alternate,h=l.stateNode;if(l=l.tag,r!==null&&r===n)break;l!==5&&l!==26&&l!==27||h===null||(r=h,i?(h=Nn(a,o),h!=null&&s.unshift(fi(a,h,r))):i||(h=Nn(a,o),h!=null&&s.push(fi(a,h,r)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var gh=/\r\n?/g,yh=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(yh,"")}function Od(e,t){return t=Nd(t),Nd(e)===t}function ce(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Wa(e,""+n);break;case"className":zi(e,"class",n);break;case"tabIndex":zi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(e,a,n);break;case"style":Or(e,n,o);break;case"data":if(t!=="object"){zi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&ce(e,t,"name",i.name,i,null),ce(e,t,"formEncType",i.formEncType,i,null),ce(e,t,"formMethod",i.formMethod,i,null),ce(e,t,"formTarget",i.formTarget,i,null)):(ce(e,t,"encType",i.encType,i,null),ce(e,t,"method",i.method,i,null),ce(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Mi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Q("beforetoggle",e),Q("toggle",e),Ei(e,"popover",n);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ei(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vf.get(a)||a,Ei(e,a,n))}}function Ll(e,t,a,n,i,o){switch(a){case"style":Or(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&Wa(e,""+n);break;case"onScroll":n!=null&&Q("scroll",e);break;case"onScrollEnd":n!=null&&Q("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[We]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ei(e,a,n)}}}function Ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Q("error",e),Q("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ce(e,t,o,s,a,null)}}i&&ce(e,t,"srcSet",a.srcSet,a,null),n&&ce(e,t,"src",a.src,a,null);return;case"input":Q("invalid",e);var l=o=s=i=null,r=null,h=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":s=y;break;case"checked":r=y;break;case"defaultChecked":h=y;break;case"value":o=y;break;case"defaultValue":l=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:ce(e,t,n,y,a,null)}}Rr(e,o,l,r,h,s,i,!1);return;case"select":Q("invalid",e),n=s=o=null;for(i in a)if(a.hasOwnProperty(i)&&(l=a[i],l!=null))switch(i){case"value":o=l;break;case"defaultValue":s=l;break;case"multiple":n=l;default:ce(e,t,i,l,a,null)}t=o,a=s,e.multiple=!!n,t!=null?Qa(e,!!n,t,!1):a!=null&&Qa(e,!!n,a,!0);return;case"textarea":Q("invalid",e),o=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"value":n=l;break;case"defaultValue":i=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:ce(e,t,s,l,a,null)}qr(e,n,i,o);return;case"option":for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null)&&(r==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ce(e,t,r,n,a,null));return;case"dialog":Q("beforetoggle",e),Q("toggle",e),Q("cancel",e),Q("close",e);break;case"iframe":case"object":Q("load",e);break;case"video":case"audio":for(n=0;n<di.length;n++)Q(di[n],e);break;case"image":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"embed":case"source":case"link":Q("error",e),Q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(n=a[h],n!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ce(e,t,h,n,a,null)}return;default:if(ts(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Ll(e,t,y,n,a,void 0));return}}for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null&&ce(e,t,l,n,a,null))}function vh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,s=null,l=null,r=null,h=null,y=null;for(g in a){var A=a[g];if(a.hasOwnProperty(g)&&A!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=A;default:n.hasOwnProperty(g)||ce(e,t,g,null,n,A)}}for(var m in n){var g=n[m];if(A=a[m],n.hasOwnProperty(m)&&(g!=null||A!=null))switch(m){case"type":o=g;break;case"name":i=g;break;case"checked":h=g;break;case"defaultChecked":y=g;break;case"value":s=g;break;case"defaultValue":l=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:g!==A&&ce(e,t,m,g,n,A)}}$o(e,s,l,r,h,y,o,i);return;case"select":g=s=l=m=null;for(o in a)if(r=a[o],a.hasOwnProperty(o)&&r!=null)switch(o){case"value":break;case"multiple":g=r;default:n.hasOwnProperty(o)||ce(e,t,o,null,n,r)}for(i in n)if(o=n[i],r=a[i],n.hasOwnProperty(i)&&(o!=null||r!=null))switch(i){case"value":m=o;break;case"defaultValue":l=o;break;case"multiple":s=o;default:o!==r&&ce(e,t,i,o,n,r)}t=l,a=s,n=g,m!=null?Qa(e,!!a,m,!1):!!n!=!!a&&(t!=null?Qa(e,!!a,t,!0):Qa(e,!!a,a?[]:"",!1));return;case"textarea":g=m=null;for(l in a)if(i=a[l],a.hasOwnProperty(l)&&i!=null&&!n.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:ce(e,t,l,null,n,i)}for(s in n)if(i=n[s],o=a[s],n.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case"value":m=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==o&&ce(e,t,s,i,n,o)}Mr(e,m,g);return;case"option":for(var E in a)m=a[E],a.hasOwnProperty(E)&&m!=null&&!n.hasOwnProperty(E)&&(E==="selected"?e.selected=!1:ce(e,t,E,null,n,m));for(r in n)m=n[r],g=a[r],n.hasOwnProperty(r)&&m!==g&&(m!=null||g!=null)&&(r==="selected"?e.selected=m&&typeof m!="function"&&typeof m!="symbol":ce(e,t,r,m,n,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in a)m=a[O],a.hasOwnProperty(O)&&m!=null&&!n.hasOwnProperty(O)&&ce(e,t,O,null,n,m);for(h in n)if(m=n[h],g=a[h],n.hasOwnProperty(h)&&m!==g&&(m!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(f(137,t));break;default:ce(e,t,h,m,n,g)}return;default:if(ts(t)){for(var ue in a)m=a[ue],a.hasOwnProperty(ue)&&m!==void 0&&!n.hasOwnProperty(ue)&&Ll(e,t,ue,void 0,n,m);for(y in n)m=n[y],g=a[y],!n.hasOwnProperty(y)||m===g||m===void 0&&g===void 0||Ll(e,t,y,m,n,g);return}}for(var d in a)m=a[d],a.hasOwnProperty(d)&&m!=null&&!n.hasOwnProperty(d)&&ce(e,t,d,null,n,m);for(A in n)m=n[A],g=a[A],!n.hasOwnProperty(A)||m===g||m==null&&g==null||ce(e,t,A,m,n,g)}function Ud(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],o=i.transferSize,s=i.initiatorType,l=i.duration;if(o&&l&&Ud(s)){for(s=0,l=i.responseEnd,n+=1;n<a.length;n++){var r=a[n],h=r.startTime;if(h>l)break;var y=r.transferSize,A=r.initiatorType;y&&Ud(A)&&(r=r.responseEnd,s+=y*(r<l?1:(l-h)/(r-h)))}if(--n,t+=8*(o+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gl=null,Pl=null;function Do(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=null;function Sh(){var e=window.event;return e&&e.type==="popstate"?e===Vl?!1:(Vl=e,!0):(Vl=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(wh)}:Bd;function wh(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function _d(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),kn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")pi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pi(a);for(var o=a.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Mn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&pi(e.ownerDocument.body);a=i}while(a);kn(t)}function Ld(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Il(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Il(a),Jo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Th(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Mn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function xh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Gd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Ql(e){return e.data==="$?"||e.data==="$~"}function Wl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Xl=null;function Pd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vd(e,t,a){switch(t=Do(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jo(e)}var xt=new Map,Id=new Set;function Eo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=x.d;x.d={f:Dh,r:Eh,D:zh,C:Rh,L:Mh,m:qh,X:Oh,S:Nh,M:Uh};function Dh(){var e=Zt.f(),t=bo();return e||t}function Eh(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?cu(t):Zt.r(e)}var wn=typeof document>"u"?null:document;function Qd(e,t,a){var n=wn;if(n&&typeof t=="string"&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Id.has(i)||(Id.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Ke(t,"link",e),Re(t),n.head.appendChild(t)))}}function zh(e){Zt.D(e),Qd("dns-prefetch",e,null)}function Rh(e,t){Zt.C(e,t),Qd("preconnect",e,t)}function Mh(e,t,a){Zt.L(e,t,a);var n=wn;if(n&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+yt(a.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var o=i;switch(t){case"style":o=Tn(e);break;case"script":o=xn(e)}xt.has(o)||(e=q({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),xt.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(hi(o))||t==="script"&&n.querySelector(mi(o))||(t=n.createElement("link"),Ke(t,"link",e),Re(t),n.head.appendChild(t)))}}function qh(e,t){Zt.m(e,t);var a=wn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+yt(n)+'"][href="'+yt(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=xn(e)}if(!xt.has(o)&&(e=q({rel:"modulepreload",href:e},t),xt.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mi(o)))return}n=a.createElement("link"),Ke(n,"link",e),Re(n),a.head.appendChild(n)}}}function Nh(e,t,a){Zt.S(e,t,a);var n=wn;if(n&&e){var i=Va(n).hoistableStyles,o=Tn(e);t=t||"default";var s=i.get(o);if(!s){var l={loading:0,preload:null};if(s=n.querySelector(hi(o)))l.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},a),(a=xt.get(o))&&Zl(e,a);var r=s=n.createElement("link");Re(r),Ke(r,"link",e),r._p=new Promise(function(h,y){r.onload=h,r.onerror=y}),r.addEventListener("load",function(){l.loading|=1}),r.addEventListener("error",function(){l.loading|=2}),l.loading|=4,zo(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:l},i.set(o,s)}}}function Oh(e,t){Zt.X(e,t);var a=wn;if(a&&e){var n=Va(a).hoistableScripts,i=xn(e),o=n.get(i);o||(o=a.querySelector(mi(i)),o||(e=q({src:e,async:!0},t),(t=xt.get(i))&&Jl(e,t),o=a.createElement("script"),Re(o),Ke(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Uh(e,t){Zt.M(e,t);var a=wn;if(a&&e){var n=Va(a).hoistableScripts,i=xn(e),o=n.get(i);o||(o=a.querySelector(mi(i)),o||(e=q({src:e,async:!0,type:"module"},t),(t=xt.get(i))&&Jl(e,t),o=a.createElement("script"),Re(o),Ke(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Wd(e,t,a,n){var i=(i=V.current)?Eo(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Va(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var o=Va(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(hi(e)))&&!o._p&&(s.instance=o,s.state.loading=5),xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xt.set(e,a),o||Hh(i,e,a,s.state))),t&&n===null)throw Error(f(528,""));return s}if(t&&n!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xn(a),a=Va(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Tn(e){return'href="'+yt(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function Xd(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function Hh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ke(t,"link",a),Re(t),e.head.appendChild(t))}function xn(e){return'[src="'+yt(e)+'"]'}function mi(e){return"script[async]"+e}function Zd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(n)return t.instance=n,Re(n),n;var i=q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Re(n),Ke(n,"style",i),zo(n,a.precedence,e),t.instance=n;case"stylesheet":i=Tn(a.href);var o=e.querySelector(hi(i));if(o)return t.state.loading|=4,t.instance=o,Re(o),o;n=Xd(a),(i=xt.get(i))&&Zl(n,i),o=(e.ownerDocument||e).createElement("link"),Re(o);var s=o;return s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),Ke(o,"link",n),t.state.loading|=4,zo(o,a.precedence,e),t.instance=o;case"script":return o=xn(a.src),(i=e.querySelector(mi(o)))?(t.instance=i,Re(i),i):(n=a,(i=xt.get(o))&&(n=q({},a),Jl(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Re(i),Ke(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,zo(n,a.precedence,e));return t.instance}function zo(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,s=0;s<n.length;s++){var l=n[s];if(l.dataset.precedence===t)o=l;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Zl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jl(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ro=null;function Jd(e,t,a){if(Ro===null){var n=new Map,i=Ro=new Map;i.set(a,n)}else i=Ro,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[Mn]||o[Ne]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var l=n.get(s);l?l.push(o):n.set(s,[o])}}return n}function Fd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Kh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Tn(n.href),o=t.querySelector(hi(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mo.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,Re(o);return}o=t.ownerDocument||t,n=Xd(n),(i=xt.get(i))&&Zl(n,i),o=o.createElement("link"),Re(o);var s=o;s._p=new Promise(function(l,r){s.onload=l,s.onerror=r}),Ke(o,"link",n),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Mo.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fl=0;function jh(e,t){return e.stylesheets&&e.count===0&&No(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&No(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Fl===0&&(Fl=62500*bh());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&No(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Fl?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Mo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qo=null;function No(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qo=new Map,t.forEach(_h,e),qo=null,Mo.call(e))}function _h(e,t){if(!(t.state.loading&4)){var a=qo.get(e);if(a)var n=a.get(null);else{a=new Map,qo.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var s=i[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),o=a.get(s)||n,o===n&&a.set(null,i),a.set(s,i),this.count++,n=Mo.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:ze,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function Lh(e,t,a,n,i,o,s,l,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.hiddenUpdates=Qo(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ef(e,t,a,n,i,o,s,l,r,h,y,A){return e=new Lh(e,t,a,s,r,h,y,A,l),t=1,o===!0&&(t|=24),o=st(3,null,null,t),e.current=o,o.stateNode=e,t=Ms(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},Us(o),e}function tf(e){return e?(e=tn,e):tn}function af(e,t,a,n,i,o){i=tf(i),n.context===null?n.context=i:n.pendingContext=i,n=sa(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=la(e,n,t),a!==null&&(et(a,e,t),Wn(a,e,t))}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $l(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function of(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&et(t,e,67108864),$l(e,67108864)}}function sf(e){if(e.tag===13||e.tag===31){var t=dt();t=Wo(t);var a=za(e,t);a!==null&&et(a,e,t),$l(e,t)}}var Oo=!0;function Gh(e,t,a,n){var i=v.T;v.T=null;var o=x.p;try{x.p=2,er(e,t,a,n)}finally{x.p=o,v.T=i}}function Ph(e,t,a,n){var i=v.T;v.T=null;var o=x.p;try{x.p=8,er(e,t,a,n)}finally{x.p=o,v.T=i}}function er(e,t,a,n){if(Oo){var i=tr(n);if(i===null)_l(e,t,n,Uo,a),rf(e,n);else if(Vh(i,e,t,a,n))n.stopPropagation();else if(rf(e,n),t&4&&-1<Yh.indexOf(e)){for(;i!==null;){var o=Ya(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Ta(o.pendingLanes);if(s!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;s;){var r=1<<31-it(s);l.entanglements[1]|=r,s&=~r}qt(o),(ee&6)===0&&(yo=at()+500,ui(0))}}break;case 31:case 13:l=za(o,2),l!==null&&et(l,o,2),bo(),$l(o,2)}if(o=tr(n),o===null&&_l(e,t,n,Uo,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else _l(e,t,n,null,a)}}function tr(e){return e=ns(e),ar(e)}var Uo=null;function ar(e){if(Uo=null,e=Pa(e),e!==null){var t=L(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Z(t),e!==null)return e;e=null}else if(a===31){if(e=fe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Uo=e,null}function lf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zf()){case hr:return 2;case mr:return 8;case wi:case Rf:return 32;case gr:return 268435456;default:return 32}default:return 32}}var nr=!1,va=null,ba=null,Sa=null,yi=new Map,vi=new Map,Aa=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rf(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function bi(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ya(t),t!==null&&of(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vh(e,t,a,n,i){switch(t){case"focusin":return va=bi(va,e,t,a,n,i),!0;case"dragenter":return ba=bi(ba,e,t,a,n,i),!0;case"mouseover":return Sa=bi(Sa,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,bi(yi.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,bi(vi.get(o)||null,e,t,a,n,i)),!0}return!1}function cf(e){var t=Pa(e.target);if(t!==null){var a=L(t);if(a!==null){if(t=a.tag,t===13){if(t=Z(a),t!==null){e.blockedOn=t,Cr(e.priority,function(){sf(a)});return}}else if(t===31){if(t=fe(a),t!==null){e.blockedOn=t,Cr(e.priority,function(){sf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);as=n,a.target.dispatchEvent(n),as=null}else return t=Ya(a),t!==null&&of(t),e.blockedOn=a,!1;t.shift()}return!0}function uf(e,t,a){Ho(e)&&a.delete(t)}function Ih(){nr=!1,va!==null&&Ho(va)&&(va=null),ba!==null&&Ho(ba)&&(ba=null),Sa!==null&&Ho(Sa)&&(Sa=null),yi.forEach(uf),vi.forEach(uf)}function Ko(e,t){e.blockedOn===t&&(e.blockedOn=null,nr||(nr=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,Ih)))}var Bo=null;function df(e){Bo!==e&&(Bo=e,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Bo===e&&(Bo=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ar(n||a)===null)continue;break}var o=Ya(a);o!==null&&(e.splice(t,3),t-=3,tl(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function kn(e){function t(r){return Ko(r,e)}va!==null&&Ko(va,e),ba!==null&&Ko(ba,e),Sa!==null&&Ko(Sa,e),yi.forEach(t),vi.forEach(t);for(var a=0;a<Aa.length;a++){var n=Aa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)cf(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],s=i[We]||null;if(typeof o=="function")s||df(a);else if(s){var l=null;if(o&&o.hasAttribute("formAction")){if(i=o,s=o[We]||null)l=s.formAction;else if(ar(i)!==null)continue}else l=s.action;typeof l=="function"?a[n+1]=l:(a.splice(n,3),n-=3),df(a)}}}function ff(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ir(e){this._internalRoot=e}jo.prototype.render=ir.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,n=dt();af(a,n,e,t,null,null)},jo.prototype.unmount=ir.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;af(e.current,2,null,e,null,null),bo(),t[Ga]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ar();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&cf(e)}};var pf=B.version;if(pf!=="19.2.3")throw Error(f(527,pf,"19.2.3"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=b(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Qh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{En=_o.inject(Qh),nt=_o}catch{}}return Ai.createRoot=function(e,t){if(!H(e))throw Error(f(299));var a=!1,n="",i=bu,o=Su,s=Au;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ef(e,1,!1,null,null,a,n,null,i,o,s,ff),e[Ga]=t.current,jl(e),new ir(t)},Ai.hydrateRoot=function(e,t,a){if(!H(e))throw Error(f(299));var n=!1,i="",o=bu,s=Su,l=Au,r=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=ef(e,1,!0,t,a??null,n,i,r,o,s,l,ff),t.context=tf(null),a=t.current,n=dt(),n=Wo(n),i=sa(n),i.callback=null,la(a,i,n),a=n,t.current.lanes=a,Rn(t,a),qt(t),e[Ga]=t.current,jl(e),new jo(t)},Ai.version="19.2.3",Ai}var wf;function nm(){if(wf)return lr.exports;wf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),lr.exports=am(),lr.exports}var im=nm();const om=({questionData:w,onAnswerSelect:B,selectedAnswer:U,showResult:f})=>{const{question:H,options:L,correctAnswer:Z}=w,fe=k=>{let b="option-btn";if(f){if(k===Z)return b+" correct";if(U===k&&k!==Z)return b+" incorrect";if(k!==Z&&k!==U)return b+" dimmed"}else if(U===k)return b+" selected";return b};return T.jsxs("div",{className:"glass-panel question-card",children:[T.jsx("h2",{className:"question-text",children:H}),T.jsx("div",{className:"options-grid",children:L.map((k,b)=>T.jsx("button",{className:fe(k),onClick:()=>!f&&B(k),disabled:f,children:k},b))}),T.jsx("style",{children:`
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
      `})]}),Tf=["Persistence is the key to mastery. Keep going!","Every expert was once a beginner. You've got this!","Don't stop when you're tired. Stop when you're done.","Certification is specific knowledge, but learning is a lifelong journey.","Failure is just another way to learn how to do it right.","Small progress is still progress.","The only way to do great work is to love what you do.","Believing in yourself is the first secret to success."],lm=({onResume:w,onQuit:B})=>{const U=Tf[Math.floor(Math.random()*Tf.length)];return T.jsxs("div",{className:"modal-overlay",children:[T.jsxs("div",{className:"modal-content glass-panel fade-in-up",children:[T.jsx("h3",{children:"Wait! You're doing great. 🐧"}),T.jsxs("p",{className:"motivational-quote",children:['"',U,'"']}),T.jsx("p",{className:"sub-text",children:"Are you sure you want to stop? You're building your future right now."}),T.jsxs("div",{className:"modal-actions",children:[T.jsx("button",{className:"primary resume-btn",onClick:w,children:"Resume Quiz 🚀"}),T.jsx("button",{className:"text-btn quit-btn",onClick:B,children:"I really need to quit"})]})]}),T.jsx("style",{children:`
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
      `})]})},rm=w=>[...w].sort(()=>Math.random()-.5),cm=({questions:w,onBackToMenu:B,onRetry:U})=>{const[f,H]=Be.useState(0),[L,Z]=Be.useState(null),[fe,k]=Be.useState(!1),[b,P]=Be.useState(0),[q,ne]=Be.useState(!1),[ge,qe]=Be.useState(()=>w&&w.length>0?w.length*90:0),[ke,Ie]=Be.useState(!1),[je,ft]=Be.useState(!1);Be.useEffect(()=>{H(0),Z(null),k(!1),P(0),ne(!1),Ie(!1),ft(!1),w&&w.length>0&&qe(w.length*90)},[w]),Be.useEffect(()=>{if(ge>0&&!q&&!je&&!ke){const le=setInterval(()=>{qe(Pe=>Pe-1)},1e3);return()=>clearInterval(le)}else ge===0&&!q&&w.length>0&&ne(!0)},[ge,q,je,ke,w.length]);const ze=le=>{const Pe=Math.floor(le/60),Qe=le%60;return`${Pe}:${Qe<10?"0":""}${Qe}`};if(!w||w.length===0)return T.jsxs("div",{className:"glass-panel",style:{padding:"2rem"},children:["No questions available in this category yet. ",T.jsx("button",{onClick:B,children:"Go Back"})]});const De=w[f],pt=Be.useMemo(()=>De?rm(De.options):[],[De]),_e={...De,options:pt},Y=le=>{Z(le),k(!0),le===De.correctAnswer&&P(Pe=>Pe+1)},Le=()=>{f<w.length-1?(H(le=>le+1),Z(null),k(!1)):ne(!0)},ht=()=>{ft(!0),Ie(!0)},Jt=()=>{ft(!1),Ie(!1)},mt=()=>{Ie(!1),B()};if(q){const le=b/w.length*100,Pe=[{title:"Phenomenal Work! 🏆",body:"You nailed every single question. You are arguably ready for the real exam!"},{title:"Flawless Victory! 🥋",body:"Zero mistakes. Your knowledge is razor sharp."},{title:"Linux Master! 🐧",body:"You clearly know your stuff. Keep up the amazing work!"}],Qe=[{title:"Excellent Job! 🌟",body:"Strong performance. Just a few tweaks and you'll be perfect."},{title:"Great work! 🚀",body:"You have a solid grasp of the concepts. Keep polishing those edge cases."},{title:"Very Impressive! 👏",body:"You're well on your way to certification success."}],tt=[{title:"Good Effort! 👍",body:"You're getting there. Review the explanations for the ones you missed."},{title:"Not Bad! 📚",body:"You have a good foundation, but there are some gaps to fill."},{title:"Solid Start! 🌱",body:"Keep practicing and focusing on the areas where you struggled."}],v=[{title:"Keep Practicing! 💪",body:"Don't get discouraged. Certification takes persistence. Review the concepts and try again."},{title:"Learning Opportunity! 💡",body:"Every mistake is a chance to learn. Analyse what went wrong."},{title:"Don't Give Up! 🛡️",body:"Persistence is key. Review the material and give it another shot."}],x=u=>u[Math.floor(Math.random()*u.length)];let N;le===100?N=x(Pe):le>=80?N=x(Qe):le>=50?N=x(tt):N=x(v);const{title:te,body:ie}=N;return T.jsxs("div",{className:"glass-panel result-card",children:[T.jsx("h2",{children:ge===0?"⏰ Time's Up!":"🎉 Quiz Completed!"}),T.jsxs("div",{className:"score-display",children:[T.jsx("span",{className:"score-number",children:b}),T.jsxs("span",{className:"score-total",children:["/ ",w.length]})]}),T.jsxs("div",{className:"feedback-section",children:[T.jsx("h3",{children:te}),T.jsx("p",{children:ie}),T.jsxs("div",{className:"cert-wish",children:[T.jsx("span",{className:"wish-icon",children:"🍀"}),T.jsx("p",{children:"Best of luck on your certification journey! You've got this."})]})]}),T.jsxs("div",{className:"result-actions",children:[T.jsx("button",{className:"primary",onClick:U,children:"Take New Quiz"}),T.jsx("button",{className:"secondary",onClick:B,children:"Back to Dashboard"})]}),T.jsx("style",{children:`
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
        `})]})}return T.jsxs("div",{className:"quiz-container",children:[ke&&T.jsx(lm,{onResume:Jt,onQuit:mt}),T.jsxs("div",{className:"quiz-top-bar",children:[T.jsx("button",{className:"end-quiz-btn",onClick:ht,children:"End Quiz"}),T.jsxs("div",{className:`timer ${ge<60?"timer-low":""}`,children:["⏰ ",ze(ge)]})]}),T.jsxs("div",{className:"quiz-header",children:[T.jsxs("span",{children:["Question ",f+1," of ",w.length]}),T.jsxs("span",{className:"current-score",children:["Score: ",b]})]}),T.jsx("div",{className:"progress-bar",children:T.jsx("div",{className:"progress-fill",style:{width:`${f/w.length*100}%`}})}),T.jsx(om,{questionData:_e,selectedAnswer:L,onAnswerSelect:Y,showResult:fe}),fe&&T.jsxs("div",{className:"fade-in",children:[T.jsx(sm,{content:De.explanation}),T.jsx("div",{className:"controls",children:T.jsx("button",{className:"primary next-btn",onClick:Le,children:f===w.length-1?"Finish Quiz":"Next Question →"})})]}),T.jsx("style",{children:`
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
      `}]},dm=({onSelectCategory:w})=>T.jsxs("div",{className:"category-menu",children:[T.jsx("h2",{children:"Select Your Certification Path"}),T.jsx("div",{className:"categories-grid",children:um.map(B=>{const U=B.comingSoon;return T.jsxs("button",{className:`category-card glass-panel ${U?"inactive":""}`,onClick:()=>!U&&w(B.id),disabled:U,children:[T.jsxs("div",{className:"card-content",children:[T.jsx("h3",{children:B.title}),T.jsx("p",{children:B.description})]}),!U&&T.jsx("div",{className:"start-badge",children:"Start Practice →"}),U&&T.jsxs("div",{className:"inactive-overlay",children:[T.jsx("span",{className:"lock-icon",children:"🔒"}),T.jsx("span",{children:"Coming Soon"})]})]},B.id)})}),T.jsx("style",{children:`
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
      `})]}),fm=({totalAvailable:w,onSelectCount:B,onBack:U})=>{const[f,H]=Be.useState(""),[L,Z]=Be.useState(""),fe=()=>{const b=parseInt(f,10);if(isNaN(b)||b<1){Z("Please enter a valid number greater than 0.");return}if(b>w){Z(`Please choose a number between 1 and ${w}.`);return}B(b)},k=b=>{b.key==="Enter"&&fe()};return T.jsxs("div",{className:"count-selector-container glass-panel fade-in",children:[T.jsxs("div",{className:"selector-header",children:[T.jsx("button",{className:"back-btn",onClick:U,children:"← Back"}),T.jsx("h2",{children:"How many questions?"})]}),T.jsxs("p",{className:"subtitle",children:["There are ",T.jsx("span",{className:"highlight",children:w})," questions available in this category."]}),T.jsxs("div",{className:"input-container",children:[T.jsx("label",{htmlFor:"question-count",className:"input-label",children:"Number of questions:"}),T.jsxs("div",{className:"input-group",children:[T.jsx("input",{id:"question-count",type:"number",className:"count-input",value:f,onChange:b=>{H(b.target.value),Z("")},onKeyDown:k,placeholder:"e.g. 10",min:"1",max:w}),T.jsx("button",{className:"primary start-btn",onClick:fe,children:"Start Exam"})]}),L&&T.jsx("p",{className:"error-msg",children:L})]}),T.jsx("style",{children:`
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
      `})]})},pm=({onLogoClick:w})=>T.jsxs("header",{className:"main-header",children:[T.jsxs("div",{className:"logo-container",onClick:w,style:{cursor:"pointer"},children:[T.jsx("span",{className:"icon",children:"🐧"}),T.jsxs("h1",{children:["Linux Foundation Mastery ",T.jsx("span",{className:"highlight",children:"Hub"})]})]}),T.jsx("p",{className:"subtitle",children:"Master Linux Foundations with Concept-First Practice"})]}),hm=()=>T.jsx("footer",{className:"main-footer",children:T.jsxs("p",{children:["© ",new Date().getFullYear()," Linux Cert Prep • Built for Certification Success"]})});function mm(){const[w,B]=Be.useState("menu"),[U,f]=Be.useState(null),[H,L]=Be.useState([]),Z=P=>{f(P),B("select_count")},fe=P=>{const ge=[...xf[U]||[]].sort(()=>.5-Math.random()).slice(0,P);L(ge),B("quiz")},k=()=>{B("menu"),f(null),L([])},b=()=>{B("menu"),f(null)};return T.jsxs("div",{className:"app-layout",children:[T.jsx(pm,{onLogoClick:k}),T.jsxs("main",{className:"main-content",children:[w==="menu"&&T.jsx(dm,{onSelectCategory:Z}),w==="select_count"&&T.jsx(fm,{totalAvailable:xf[U]?.length||0,onSelectCount:fe,onBack:b}),w==="quiz"&&T.jsx(cm,{questions:H,onBackToMenu:k,onRetry:()=>B("select_count")})]}),T.jsx(hm,{})]})}im.createRoot(document.getElementById("root")).render(T.jsx(Be.StrictMode,{children:T.jsx(mm,{})}));
