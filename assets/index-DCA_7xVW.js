(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function tv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Df={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function PS(){if(Wg)return ue;Wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function S(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function x(w,q,dt){this.props=w,this.context=q,this.refs=C,this.updater=dt||M}x.prototype.isReactComponent={},x.prototype.setState=function(w,q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,q,"setState")},x.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=x.prototype;function I(w,q,dt){this.props=w,this.context=q,this.refs=C,this.updater=dt||M}var P=I.prototype=new v;P.constructor=I,b(P,x.prototype),P.isPureReactComponent=!0;var U=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function z(w,q,dt,yt,Q,mt){return dt=mt.ref,{$$typeof:o,type:w,key:q,ref:dt!==void 0?dt:null,props:mt}}function j(w,q){return z(w.type,q,void 0,void 0,void 0,w.props)}function D(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function R(w){var q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(dt){return q[dt]})}var F=/\/+/g;function ot(w,q){return typeof w=="object"&&w!==null&&w.key!=null?R(""+w.key):q.toString(36)}function st(){}function _t(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(st,st):(w.status="pending",w.then(function(q){w.status==="pending"&&(w.status="fulfilled",w.value=q)},function(q){w.status==="pending"&&(w.status="rejected",w.reason=q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function ft(w,q,dt,yt,Q){var mt=typeof w;(mt==="undefined"||mt==="boolean")&&(w=null);var xt=!1;if(w===null)xt=!0;else switch(mt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(w.$$typeof){case o:case t:xt=!0;break;case g:return xt=w._init,ft(xt(w._payload),q,dt,yt,Q)}}if(xt)return Q=Q(w),xt=yt===""?"."+ot(w,0):yt,U(Q)?(dt="",xt!=null&&(dt=xt.replace(F,"$&/")+"/"),ft(Q,q,dt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=j(Q,dt+(Q.key==null||w&&w.key===Q.key?"":(""+Q.key).replace(F,"$&/")+"/")+xt)),q.push(Q)),1;xt=0;var At=yt===""?".":yt+":";if(U(w))for(var Rt=0;Rt<w.length;Rt++)yt=w[Rt],mt=At+ot(yt,Rt),xt+=ft(yt,q,dt,mt,Q);else if(Rt=S(w),typeof Rt=="function")for(w=Rt.call(w),Rt=0;!(yt=w.next()).done;)yt=yt.value,mt=At+ot(yt,Rt++),xt+=ft(yt,q,dt,mt,Q);else if(mt==="object"){if(typeof w.then=="function")return ft(_t(w),q,dt,yt,Q);throw q=String(w),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function O(w,q,dt){if(w==null)return w;var yt=[],Q=0;return ft(w,yt,"","",function(mt){return q.call(dt,mt,Q++)}),yt}function K(w){if(w._status===-1){var q=w._result;q=q(),q.then(function(dt){(w._status===0||w._status===-1)&&(w._status=1,w._result=dt)},function(dt){(w._status===0||w._status===-1)&&(w._status=2,w._result=dt)}),w._status===-1&&(w._status=0,w._result=q)}if(w._status===1)return w._result.default;throw w._result}var X=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function St(){}return ue.Children={map:O,forEach:function(w,q,dt){O(w,function(){q.apply(this,arguments)},dt)},count:function(w){var q=0;return O(w,function(){q++}),q},toArray:function(w){return O(w,function(q){return q})||[]},only:function(w){if(!D(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ue.Component=x,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=I,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ue.__COMPILER_RUNTIME={__proto__:null,c:function(w){return V.H.useMemoCache(w)}},ue.cache=function(w){return function(){return w.apply(null,arguments)}},ue.cloneElement=function(w,q,dt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var yt=b({},w.props),Q=w.key,mt=void 0;if(q!=null)for(xt in q.ref!==void 0&&(mt=void 0),q.key!==void 0&&(Q=""+q.key),q)!k.call(q,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&q.ref===void 0||(yt[xt]=q[xt]);var xt=arguments.length-2;if(xt===1)yt.children=dt;else if(1<xt){for(var At=Array(xt),Rt=0;Rt<xt;Rt++)At[Rt]=arguments[Rt+2];yt.children=At}return z(w.type,Q,void 0,void 0,mt,yt)},ue.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},ue.createElement=function(w,q,dt){var yt,Q={},mt=null;if(q!=null)for(yt in q.key!==void 0&&(mt=""+q.key),q)k.call(q,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=q[yt]);var xt=arguments.length-2;if(xt===1)Q.children=dt;else if(1<xt){for(var At=Array(xt),Rt=0;Rt<xt;Rt++)At[Rt]=arguments[Rt+2];Q.children=At}if(w&&w.defaultProps)for(yt in xt=w.defaultProps,xt)Q[yt]===void 0&&(Q[yt]=xt[yt]);return z(w,mt,void 0,void 0,null,Q)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(w){return{$$typeof:d,render:w}},ue.isValidElement=D,ue.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:K}},ue.memo=function(w,q){return{$$typeof:p,type:w,compare:q===void 0?null:q}},ue.startTransition=function(w){var q=V.T,dt={};V.T=dt;try{var yt=w(),Q=V.S;Q!==null&&Q(dt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,X)}catch(mt){X(mt)}finally{V.T=q}},ue.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ue.use=function(w){return V.H.use(w)},ue.useActionState=function(w,q,dt){return V.H.useActionState(w,q,dt)},ue.useCallback=function(w,q){return V.H.useCallback(w,q)},ue.useContext=function(w){return V.H.useContext(w)},ue.useDebugValue=function(){},ue.useDeferredValue=function(w,q){return V.H.useDeferredValue(w,q)},ue.useEffect=function(w,q,dt){var yt=V.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(w,q)},ue.useId=function(){return V.H.useId()},ue.useImperativeHandle=function(w,q,dt){return V.H.useImperativeHandle(w,q,dt)},ue.useInsertionEffect=function(w,q){return V.H.useInsertionEffect(w,q)},ue.useLayoutEffect=function(w,q){return V.H.useLayoutEffect(w,q)},ue.useMemo=function(w,q){return V.H.useMemo(w,q)},ue.useOptimistic=function(w,q){return V.H.useOptimistic(w,q)},ue.useReducer=function(w,q,dt){return V.H.useReducer(w,q,dt)},ue.useRef=function(w){return V.H.useRef(w)},ue.useState=function(w){return V.H.useState(w)},ue.useSyncExternalStore=function(w,q,dt){return V.H.useSyncExternalStore(w,q,dt)},ue.useTransition=function(){return V.H.useTransition()},ue.version="19.1.0",ue}var qg;function nd(){return qg||(qg=1,Df.exports=PS()),Df.exports}var un=nd();const kt=tv(un);var Uf={exports:{}},yo={},Lf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function OS(){return Yg||(Yg=1,function(o){function t(O,K){var X=O.length;O.push(K);t:for(;0<X;){var St=X-1>>>1,w=O[St];if(0<l(w,K))O[St]=K,O[X]=w,X=St;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],X=O.pop();if(X!==K){O[0]=X;t:for(var St=0,w=O.length,q=w>>>1;St<q;){var dt=2*(St+1)-1,yt=O[dt],Q=dt+1,mt=O[Q];if(0>l(yt,X))Q<w&&0>l(mt,yt)?(O[St]=mt,O[Q]=X,St=Q):(O[St]=yt,O[dt]=X,St=dt);else if(Q<w&&0>l(mt,X))O[St]=mt,O[Q]=X,St=Q;else break t}}return K}function l(O,K){var X=O.sortIndex-K.sortIndex;return X!==0?X:O.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,b=!1,C=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=O)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function V(O){if(C=!1,U(O),!b)if(i(m)!==null)b=!0,k||(k=!0,ot());else{var K=i(p);K!==null&&ft(V,K.startTime-O)}}var k=!1,z=-1,j=5,D=-1;function R(){return x?!0:!(o.unstable_now()-D<j)}function F(){if(x=!1,k){var O=o.unstable_now();D=O;var K=!0;try{t:{b=!1,C&&(C=!1,I(z),z=-1),M=!0;var X=S;try{e:{for(U(O),_=i(m);_!==null&&!(_.expirationTime>O&&R());){var St=_.callback;if(typeof St=="function"){_.callback=null,S=_.priorityLevel;var w=St(_.expirationTime<=O);if(O=o.unstable_now(),typeof w=="function"){_.callback=w,U(O),K=!0;break e}_===i(m)&&r(m),U(O)}else r(m);_=i(m)}if(_!==null)K=!0;else{var q=i(p);q!==null&&ft(V,q.startTime-O),K=!1}}break t}finally{_=null,S=X,M=!1}K=void 0}}finally{K?ot():k=!1}}}var ot;if(typeof P=="function")ot=function(){P(F)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=F,ot=function(){_t.postMessage(null)}}else ot=function(){v(F,0)};function ft(O,K){z=v(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var X=S;S=K;try{return O()}finally{S=X}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var X=S;S=O;try{return K()}finally{S=X}},o.unstable_scheduleCallback=function(O,K,X){var St=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?St+X:St):X=St,O){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=X+w,O={id:g++,callback:K,priorityLevel:O,startTime:X,expirationTime:w,sortIndex:-1},X>St?(O.sortIndex=X,t(p,O),i(m)===null&&O===i(p)&&(C?(I(z),z=-1):C=!0,ft(V,X-St))):(O.sortIndex=w,t(m,O),b||M||(b=!0,k||(k=!0,ot()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var K=S;return function(){var X=S;S=K;try{return O.apply(this,arguments)}finally{S=X}}}}(Nf)),Nf}var Zg;function BS(){return Zg||(Zg=1,Lf.exports=OS()),Lf.exports}var Pf={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function IS(){if(jg)return Rn;jg=1;var o=nd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var Kg;function zS(){if(Kg)return Pf.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pf.exports=IS(),Pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function FS(){if(Qg)return yo;Qg=1;var o=BS(),t=nd(),i=zS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,s=f;break}if(T===s){y=!0,s=c,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,s=c;break}if(T===s){y=!0,s=f,a=c;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case C:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case P:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var ft=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},St=[],w=-1;function q(e){return{current:e}}function dt(e){0>w||(e.current=St[w],St[w]=null,w--)}function yt(e,n){w++,St[w]=e.current,e.current=n}var Q=q(null),mt=q(null),xt=q(null),At=q(null);function Rt(e,n){switch(yt(xt,n),yt(mt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sg(n),e=yg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(Q),yt(Q,e)}function oe(){dt(Q),dt(mt),dt(xt)}function jt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=yg(n,e.type);n!==a&&(yt(mt,e),yt(Q,a))}function Yt(e){mt.current===e&&(dt(Q),dt(mt)),At.current===e&&(dt(At),mo._currentValue=X)}var pe=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,me=o.unstable_requestPaint,Qt=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,Kt=o.unstable_UserBlockingPriority,se=o.unstable_NormalPriority,Je=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ut=null,pt=null;function lt(e){if(typeof E=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ut,e)}catch{}}var Pt=Math.clz32?Math.clz32:Vt,Dt=Math.log,Gt=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Gt|0)|0}var Mt=256,Ot=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=qt(s):(y&=T,y!==0?c=qt(y):a||(a=T&~e,a!==0&&(c=qt(a))))):(T=s&~f,T!==0?c=qt(T):y!==0?c=qt(y):a||(a=s&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Ut(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,s,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,N=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var ct=31-Pt(a),gt=1<<ct;T[ct]=0,N[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&vt(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Fg(e.type))}function Vn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var dn=Math.random().toString(36).slice(2),sn="__reactFiber$"+dn,yn="__reactProps$"+dn,Pn="__reactContainer$"+dn,Ga="__reactEvents$"+dn,Fo="__reactListeners$"+dn,Ho="__reactHandles$"+dn,Va="__reactResources$"+dn,aa="__reactMarker$"+dn;function ra(e){delete e[sn],delete e[yn],delete e[Ga],delete e[Fo],delete e[Ho]}function Ci(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Tg(e);e!==null;){if(a=e[sn])return a;e=Tg(e)}return n}e=a,a=e.parentNode}return null}function wi(e){if(e=e[sn]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ka(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function sa(e){var n=e[Va];return n||(n=e[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[aa]=!0}var Go=new Set,Vo={};function Di(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Vo[e]=n,e=0;e<n.length;e++)Go.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Z(e){return pe.call(rt,e)?!0:pe.call(at,e)?!1:Y.test(e)?rt[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var It,ne;function $t(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+ne}var Xt=!1;function he(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(it){nt=it}e.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var N=y.split(`
`),$=T.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===$.length)for(s=N.length-1,c=$.length-1;1<=s&&0<=c&&N[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==$[c]){var ct=`
`+N[s].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=s&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function De(e){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return $t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return $t("Activity");default:return""}}function We(e){try{var n="";do n+=De(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=Ue(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){e._valueTracker||(e._valueTracker=Jt(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ue(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oa=/[\n"\\]/g;function ke(e){return e.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,a,s,c,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,_e(n)):a!=null?bn(e,y,_e(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function Ge(e,n,a,s,c,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function bn(e,n,a){n==="number"&&pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function xn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Li.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sd(e,f,n[f])}function Cc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Nv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wc=null;function Dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function xd(e){var n=wi(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[yn]||null;if(!c)throw Error(r(90));Ui(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&xe(s)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Uc=!1;function Md(e,n,a){if(Uc)return e(n,a);Uc=!0;try{var s=e(n);return s}finally{if(Uc=!1,(Er!==null||Tr!==null)&&(Cl(),Er&&(n=Er,e=Tr,Tr=Er=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function Rs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if(Ni)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Lc=!1}var la=null,Nc=null,Xo=null;function Ed(){if(Xo)return Xo;var e,n=Nc,a=n.length,s,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(s=1;s<=y&&n[a-s]===c[f-s];s++);return Xo=c.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Td(){return!1}function On(e){function n(a,s,c,f,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Td,this.isPropagationStopped=Td,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=On(Xa),ws=g({},Xa,{view:0,detail:0}),Pv=On(ws),Pc,Oc,Ds,Zo=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ds&&(Ds&&e.type==="mousemove"?(Pc=e.screenX-Ds.screenX,Oc=e.screenY-Ds.screenY):Oc=Pc=0,Ds=e),Pc)},movementY:function(e){return"movementY"in e?e.movementY:Oc}}),bd=On(Zo),Ov=g({},Zo,{dataTransfer:0}),Bv=On(Ov),Iv=g({},ws,{relatedTarget:0}),Bc=On(Iv),zv=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=On(zv),Hv=g({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=On(Hv),Vv=g({},Xa,{data:0}),Ad=On(Vv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wv[e])?!!n[e]:!1}function Ic(){return qv}var Yv=g({},ws,{key:function(e){if(e.key){var n=kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zv=On(Yv),jv=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=On(jv),Kv=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Qv=On(Kv),Jv=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=On(Jv),t0=g({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=On(t0),n0=g({},Xa,{newState:0,oldState:0}),i0=On(n0),a0=[9,13,27,32],zc=Ni&&"CompositionEvent"in window,Us=null;Ni&&"documentMode"in document&&(Us=document.documentMode);var r0=Ni&&"TextEvent"in window&&!Us,Cd=Ni&&(!zc||Us&&8<Us&&11>=Us),wd=" ",Dd=!1;function Ud(e,n){switch(e){case"keyup":return a0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function s0(e,n){switch(e){case"compositionend":return Ld(n);case"keypress":return n.which!==32?null:(Dd=!0,wd);case"textInput":return e=n.data,e===wd&&Dd?null:e;default:return null}}function o0(e,n){if(br)return e==="compositionend"||!zc&&Ud(e,n)?(e=Ed(),Xo=Nc=la=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cd&&n.locale!=="ko"?null:n.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!l0[e.type]:n==="textarea"}function Pd(e,n,a,s){Er?Tr?Tr.push(s):Tr=[s]:Er=s,n=Pl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ls=null,Ns=null;function c0(e){pg(e,0)}function jo(e){var n=ka(e);if(xe(n))return e}function Od(e,n){if(e==="change")return n}var Bd=!1;if(Ni){var Fc;if(Ni){var Hc="oninput"in document;if(!Hc){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Hc=typeof Id.oninput=="function"}Fc=Hc}else Fc=!1;Bd=Fc&&(!document.documentMode||9<document.documentMode)}function zd(){Ls&&(Ls.detachEvent("onpropertychange",Fd),Ns=Ls=null)}function Fd(e){if(e.propertyName==="value"&&jo(Ns)){var n=[];Pd(n,Ns,e,Dc(e)),Md(c0,n)}}function u0(e,n,a){e==="focusin"?(zd(),Ls=n,Ns=a,Ls.attachEvent("onpropertychange",Fd)):e==="focusout"&&zd()}function f0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Ns)}function h0(e,n){if(e==="click")return jo(n)}function d0(e,n){if(e==="input"||e==="change")return jo(n)}function p0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:p0;function Ps(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!pe.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,n){var a=Hd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pn(e.document)}return n}function Gc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var m0=Ni&&"documentMode"in document&&11>=document.documentMode,Ar=null,Vc=null,Os=null,kc=!1;function Xd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Ar==null||Ar!==pn(s)||(s=Ar,"selectionStart"in s&&Gc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ps(Os,s)||(Os=s,s=Pl(Vc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ar)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Xc={},Wd={};Ni&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function qa(e){if(Xc[e])return Xc[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return Xc[e]=n[a];return e}var qd=qa("animationend"),Yd=qa("animationiteration"),Zd=qa("animationstart"),g0=qa("transitionrun"),_0=qa("transitionstart"),v0=qa("transitioncancel"),jd=qa("transitionend"),Kd=new Map,Wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wc.push("scrollEnd");function li(e,n){Kd.set(e,n),Di(n,[e])}var Qd=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Qd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},Qd.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var ti=[],Cr=0,qc=0;function Ko(){for(var e=Cr,n=qc=Cr=0;n<e;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&Jd(a,c,f)}}function Qo(e,n,a,s){ti[Cr++]=e,ti[Cr++]=n,ti[Cr++]=a,ti[Cr++]=s,qc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Yc(e,n,a,s){return Qo(e,n,a,s),Jo(e)}function wr(e,n){return Qo(e,null,null,n),Jo(e)}function Jd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<so)throw so=0,$u=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function S0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new S0(e,n,a,s)}function Zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $d(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,s,c,f){var y=0;if(s=e,typeof e=="function")Zc(e)&&(y=1);else if(typeof e=="string")y=xS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Xn(31,a,n,c),e.elementType=D,e.lanes=f,e;case b:return Ya(a.children,c,f,n);case C:y=8,c|=24;break;case x:return e=Xn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case V:return e=Xn(13,a,n,c),e.elementType=V,e.lanes=f,e;case k:return e=Xn(19,a,n,c),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case P:y=10;break t;case I:y=9;break t;case U:y=11;break t;case z:y=14;break t;case j:y=16,s=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(y,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ya(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function jc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function Kc(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Lr=0,tl=null,el=0,ei=[],ni=0,Za=null,Oi=1,Bi="";function ja(e,n){Ur[Lr++]=el,Ur[Lr++]=tl,tl=e,el=n}function tp(e,n,a){ei[ni++]=Oi,ei[ni++]=Bi,ei[ni++]=Za,Za=e;var s=Oi;e=Bi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Oi=1<<32-Pt(n)+c|a<<c|s,Bi=f+e}else Oi=1<<f|a<<c|s,Bi=e}function Qc(e){e.return!==null&&(ja(e,1),tp(e,1,0))}function Jc(e){for(;e===tl;)tl=Ur[--Lr],Ur[Lr]=null,el=Ur[--Lr],Ur[Lr]=null;for(;e===Za;)Za=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null,Oi=ei[--ni],ei[ni]=null}var Un=null,Ke=null,we=!1,Ka=null,vi=!1,$c=Error(r(519));function Qa(e){var n=Error(r(418,""));throw zs($n(n,e)),$c}function ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[yn]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)ye(lo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ge(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Oe(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),xn(n,s.value,s.defaultValue,s.children),Oe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||vg(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||Qa(e)}function np(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function Bs(e){if(e!==Un)return!1;if(!we)return np(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Qa(e),np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,Ta(e.type)?(e=yf,yf=null,Ke=e):Ke=n):Ke=Un?ui(e.stateNode.nextSibling):null;return!0}function Is(){Ke=Un=null,we=!1}function ip(){var e=Ka;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Ka=null),e}function zs(e){Ka===null?Ka=[e]:Ka.push(e)}var tu=q(null),Ja=null,Ii=null;function ca(e,n,a){yt(tu,n._currentValue),n._currentValue=a}function zi(e){e._currentValue=tu.current,dt(tu)}function eu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function nu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),eu(f.return,a,e),s||(y=null);break t}f=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),eu(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Fs(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=c.type;kn(c.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(c===At.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}c=c.return}e!==null&&nu(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return ap(Ja,e)}function il(e,n){return Ja===null&&$a(e),ap(e,n)}function ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var y0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},x0=o.unstable_scheduleCallback,M0=o.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function iu(){return{controller:new y0,data:new Map,refCount:0}}function Hs(e){e.refCount--,e.refCount===0&&x0(M0,function(){e.controller.abort()})}var Gs=null,au=0,Nr=0,Pr=null;function E0(e,n){if(Gs===null){var a=Gs=[];au=0,Nr=of(),Pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return au++,n.then(rp,rp),n}function rp(){if(--au===0&&Gs!==null){Pr!==null&&(Pr.status="fulfilled");var e=Gs;Gs=null,Nr=0,Pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function T0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var sp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&E0(e,n),sp!==null&&sp(e,n)};var tr=q(null);function ru(){var e=tr.current;return e!==null?e:Xe.pooledCache}function al(e,n){n===null?yt(tr,tr.current):yt(tr,n.pool)}function op(){var e=ru();return e===null?null:{parent:ln._currentValue,pool:e}}var Vs=Error(r(460)),lp=Error(r(474)),rl=Error(r(542)),su={then:function(){}};function cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e}throw ks=n,Vs}}var ks=null;function fp(){if(ks===null)throw Error(r(459));var e=ks;return ks=null,e}function hp(e){if(e===Vs||e===rl)throw Error(r(483))}var ua=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(e),Jd(e,null,a),n}return Qo(e,s,n,a),Jo(e)}function Xs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,zt(e,a)}}function cu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var uu=!1;function Ws(){if(uu){var e=Pr;if(e!==null)throw e}}function qs(e,n,a,s){uu=!1;var c=e.updateQueue;ua=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,$=N.next;N.next=null,y===null?f=$:y.next=$,y=N;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==y&&(T===null?ct.firstBaseUpdate=$:T.next=$,ct.lastBaseUpdate=N))}if(f!==null){var gt=c.baseState;y=0,ct=$=N=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(Ee&nt)===nt:(s&nt)===nt){nt!==0&&nt===Nr&&(uu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ie=e,te=T;nt=n;var ze=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){gt=ie.call(ze,gt,nt);break t}gt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,nt=typeof ie=="function"?ie.call(ze,gt,nt):ie,nt==null)break t;gt=g({},gt,nt);break t;case 2:ua=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?($=ct=it,N=gt):ct=ct.next=it,y|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;it=T,T=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(N=gt),c.baseState=N,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ya|=y,e.lanes=y,e.memoizedState=gt}}function dp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dp(a[e],n)}var Or=q(null),ol=q(0);function mp(e,n){e=Wi,yt(ol,e),yt(Or,n),Wi=e|n.baseLanes}function fu(){yt(ol,Wi),yt(Or,Or.current)}function hu(){Wi=ol.current,dt(Or),dt(ol)}var da=0,ge=null,Be=null,nn=null,ll=!1,Br=!1,er=!1,cl=0,Ys=0,Ir=null,b0=0;function $e(){throw Error(r(321))}function du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function pu(e,n,a,s,c,f){return da=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Jp:$p,er=!1,f=a(s,c),er=!1,Br&&(f=_p(n,a,s,c)),gp(e),f}function gp(e){O.H=ml;var n=Be!==null&&Be.next!==null;if(da=0,nn=Be=ge=null,ll=!1,Ys=0,Ir=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&nl(e)&&(gn=!0))}function _p(e,n,a,s){ge=e;var c=0;do{if(Br&&(Ir=null),Ys=0,Br=!1,25<=c)throw Error(r(301));if(c+=1,nn=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=L0,f=n(a,s)}while(Br);return f}function A0(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Zs(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ge.flags|=1024),n}function mu(){var e=cl!==0;return cl=0,e}function gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function _u(e){if(ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ll=!1}da=0,nn=Be=ge=null,Br=!1,Ys=cl=0,Ir=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ge.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Be===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=nn===null?ge.memoizedState:nn.next;if(n!==null)nn=n,Be=e;else{if(e===null)throw ge.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},nn===null?ge.memoizedState=nn=e:nn=nn.next=e}return nn}function vu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zs(e){var n=Ys;return Ys+=1,Ir===null&&(Ir=[]),e=up(Ir,e,n),n=ge,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Jp:$p),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zs(e);if(e.$$typeof===P)return An(e)}throw Error(r(438,String(e)))}function Su(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ge.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vu(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=an();return yu(n,Be,e)}function yu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=y=null,N=null,$=n,ct=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Ee&gt)===gt:(da&gt)===gt){var nt=$.revertLane;if(nt===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Nr&&(ct=!0);else if((da&nt)===nt){$=$.next,nt===Nr&&(ct=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(T=N=gt,y=f):N=N.next=gt,ge.lanes|=nt,ya|=nt;gt=$.action,er&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},N===null?(T=N=nt,y=f):N=N.next=nt,ge.lanes|=gt,ya|=gt;$=$.next}while($!==null&&$!==n);if(N===null?y=f:N.next=T,!kn(f,e.memoizedState)&&(gn=!0,ct&&(a=Pr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=N,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function xu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);kn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function vp(e,n,a){var s=ge,c=an(),f=we;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!kn((Be||c).memoizedState,a);y&&(c.memoizedState=a,gn=!0),c=c.queue;var T=xp.bind(null,s,c,e);if(js(2048,8,T,[e]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,zr(9,hl(),yp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(da&124)!==0||Sp(s,n,a)}return a}function Sp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=vu(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function yp(e,n,a,s){n.value=a,n.getSnapshot=s,Mp(n)&&Ep(e)}function xp(e,n,a){return a(function(){Mp(n)&&Ep(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Ep(e){var n=wr(e,2);n!==null&&jn(n,e,2)}function Mu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),er){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function Tp(e,n,a,s){return e.baseState=a,yu(e,Be,typeof s=="function"?s:Fi)}function R0(e,n,a,s,c){if(pl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,y={};O.T=y;try{var T=a(c,s),N=O.S;N!==null&&N(y,T),Ap(e,n,T)}catch($){Eu(e,n,$)}finally{O.T=f}}else try{f=a(c,s),Ap(e,n,f)}catch($){Eu(e,n,$)}}function Ap(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Rp(e,n,s)},function(s){return Eu(e,n,s)}):Rp(e,n,a)}function Rp(e,n,a){n.status="fulfilled",n.value=a,Cp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bp(e,a)))}function Eu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==s)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Dp(e,n){if(we){var a=Xe.formState;if(a!==null){t:{var s=ge;if(we){if(Ke){e:{for(var c=Ke,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=ui(c.nextSibling),s=c.data==="F!";break t}}Qa(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=s,a=jp.bind(null,ge,s),s.dispatch=a,s=Mu(!1),f=Cu.bind(null,ge,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=R0.bind(null,ge,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Up(e){var n=an();return Lp(n,Be,e)}function Lp(e,n,a){if(n=yu(e,n,wp)[0],e=fl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zs(n)}catch(y){throw y===Vs?rl:y}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,zr(9,hl(),C0.bind(null,c,a),null)),[s,f,e]}function C0(e,n){e.action=n}function Np(e){var n=an(),a=Be;if(a!==null)return Lp(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function zr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ge.updateQueue,n===null&&(n=vu(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function Pp(){return an().memoizedState}function dl(e,n,a,s){var c=Bn();s=s===void 0?null:s,ge.flags|=e,c.memoizedState=zr(1|n,hl(),a,s)}function js(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Be!==null&&s!==null&&du(s,Be.memoizedState.deps)?c.memoizedState=zr(n,f,a,s):(ge.flags|=e,c.memoizedState=zr(1|n,f,a,s))}function Op(e,n){dl(8390656,8,e,n)}function Bp(e,n){js(2048,8,e,n)}function Ip(e,n){return js(4,2,e,n)}function zp(e,n){return js(4,4,e,n)}function Fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,js(4,4,Fp.bind(null,n,e),a)}function Tu(){}function Gp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&du(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Vp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&du(n,s[1]))return s[0];if(s=e(),er){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s}function bu(e,n,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Wm(),ge.lanes|=e,ya|=e,a)}function kp(e,n,a,s){return kn(a,n)?a:Or.current!==null?(e=bu(e,a,s),kn(e,n)||(gn=!0),e):(da&42)===0?(gn=!0,e.memoizedState=a):(e=Wm(),ge.lanes|=e,ya|=e,n)}function Xp(e,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=O.T,T={};O.T=T,Cu(e,!1,n,a);try{var N=c(),$=O.S;if($!==null&&$(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=T0(N,s);Ks(e,n,ct,Zn(e))}else Ks(e,n,s,Zn(e))}catch(gt){Ks(e,n,{then:function(){},status:"rejected",reason:gt},Zn())}finally{K.p=f,O.T=y}}function w0(){}function Au(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Wp(e).queue;Xp(e,c,n,X,a===null?w0:function(){return qp(e),a(s)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qp(e){var n=Wp(e).next.queue;Ks(e,n,{},Zn())}function Ru(){return An(mo)}function Yp(){return an().memoizedState}function Zp(){return an().memoizedState}function D0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=fa(a);var s=ha(n,e,a);s!==null&&(jn(s,n,a),Xs(s,n,a)),n={cache:iu()},e.payload=n;return}n=n.return}}function U0(e,n,a){var s=Zn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?Kp(n,a):(a=Yc(e,n,a,s),a!==null&&(jn(a,e,s),Qp(a,n,s)))}function jp(e,n,a){var s=Zn();Ks(e,n,a,s)}function Ks(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))Kp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,y))return Qo(e,n,c,0),Xe===null&&Ko(),!1}catch{}finally{}if(a=Yc(e,n,c,s),a!==null)return jn(a,e,s),Qp(a,n,s),!0}return!1}function Cu(e,n,a,s){if(s={lane:2,revertLane:of(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(r(479))}else n=Yc(e,a,s,2),n!==null&&jn(n,e,2)}function pl(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function Kp(e,n){Br=ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,zt(e,a)}}var ml={readContext:An,use:ul,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Jp={readContext:An,use:ul,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,dl(4194308,4,Fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return dl(4194308,4,e,n)},useInsertionEffect:function(e,n){dl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var s=e();if(er){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(er){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=U0.bind(null,ge,e),[s.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Mu(e);var n=e.queue,a=jp.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Tu,useDeferredValue:function(e,n){var a=Bn();return bu(a,e,n)},useTransition:function(){var e=Mu(!1);return e=Xp.bind(null,ge,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ge,c=Bn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Ee&124)!==0||Sp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Op(xp.bind(null,s,f,e),[e]),s.flags|=2048,zr(9,hl(),yp.bind(null,s,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(we){var a=Bi,s=Oi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=b0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ru,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cu.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:Su,useCacheRefresh:function(){return Bn().memoizedState=D0.bind(null,ge)}},$p={readContext:An,use:ul,useCallback:Gp,useContext:An,useEffect:Bp,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:zp,useMemo:Vp,useReducer:fl,useRef:Pp,useState:function(){return fl(Fi)},useDebugValue:Tu,useDeferredValue:function(e,n){var a=an();return kp(a,Be.memoizedState,e,n)},useTransition:function(){var e=fl(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Zs(e),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Ru,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=an();return Tp(a,Be,e,n)},useMemoCache:Su,useCacheRefresh:Zp},L0={readContext:An,use:ul,useCallback:Gp,useContext:An,useEffect:Bp,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:zp,useMemo:Vp,useReducer:xu,useRef:Pp,useState:function(){return xu(Fi)},useDebugValue:Tu,useDeferredValue:function(e,n){var a=an();return Be===null?bu(a,e,n):kp(a,Be.memoizedState,e,n)},useTransition:function(){var e=xu(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Zs(e),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Ru,useFormState:Np,useActionState:Np,useOptimistic:function(e,n){var a=an();return Be!==null?Tp(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Su,useCacheRefresh:Zp},Fr=null,Qs=0;function gl(e){var n=Qs;return Qs+=1,Fr===null&&(Fr=[]),up(Fr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tm(e){var n=e._init;return n(e._payload)}function em(e){function n(W,H){if(e){var J=W.deletions;J===null?(W.deletions=[H],W.flags|=16):J.push(H)}}function a(W,H){if(!e)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Pi(W,H),W.index=0,W.sibling=null,W}function f(W,H,J){return W.index=J,e?(J=W.alternate,J!==null?(J=J.index,J<H?(W.flags|=67108866,H):J):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,H,J,ht){return H===null||H.tag!==6?(H=jc(J,W.mode,ht),H.return=W,H):(H=c(H,J),H.return=W,H)}function N(W,H,J,ht){var Ft=J.type;return Ft===b?ct(W,H,J.props.children,ht,J.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===j&&tm(Ft)===H.type)?(H=c(H,J.props),Js(H,J),H.return=W,H):(H=$o(J.type,J.key,J.props,null,W.mode,ht),Js(H,J),H.return=W,H)}function $(W,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=Kc(J,W.mode,ht),H.return=W,H):(H=c(H,J.children||[]),H.return=W,H)}function ct(W,H,J,ht,Ft){return H===null||H.tag!==7?(H=Ya(J,W.mode,ht,Ft),H.return=W,H):(H=c(H,J),H.return=W,H)}function gt(W,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=jc(""+H,W.mode,J),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return J=$o(H.type,H.key,H.props,null,W.mode,J),Js(J,H),J.return=W,J;case M:return H=Kc(H,W.mode,J),H.return=W,H;case j:var ht=H._init;return H=ht(H._payload),gt(W,H,J)}if(ft(H)||ot(H))return H=Ya(H,W.mode,J,null),H.return=W,H;if(typeof H.then=="function")return gt(W,gl(H),J);if(H.$$typeof===P)return gt(W,il(W,H),J);_l(W,H)}return null}function nt(W,H,J,ht){var Ft=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:T(W,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return J.key===Ft?N(W,H,J,ht):null;case M:return J.key===Ft?$(W,H,J,ht):null;case j:return Ft=J._init,J=Ft(J._payload),nt(W,H,J,ht)}if(ft(J)||ot(J))return Ft!==null?null:ct(W,H,J,ht,null);if(typeof J.then=="function")return nt(W,H,gl(J),ht);if(J.$$typeof===P)return nt(W,H,il(W,J),ht);_l(W,J)}return null}function it(W,H,J,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(J)||null,T(H,W,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case S:return W=W.get(ht.key===null?J:ht.key)||null,N(H,W,ht,Ft);case M:return W=W.get(ht.key===null?J:ht.key)||null,$(H,W,ht,Ft);case j:var ve=ht._init;return ht=ve(ht._payload),it(W,H,J,ht,Ft)}if(ft(ht)||ot(ht))return W=W.get(J)||null,ct(H,W,ht,Ft,null);if(typeof ht.then=="function")return it(W,H,J,gl(ht),Ft);if(ht.$$typeof===P)return it(W,H,J,il(H,ht),Ft);_l(H,ht)}return null}function ie(W,H,J,ht){for(var Ft=null,ve=null,Wt=H,ee=H=0,vn=null;Wt!==null&&ee<J.length;ee++){Wt.index>ee?(vn=Wt,Wt=null):vn=Wt.sibling;var Re=nt(W,Wt,J[ee],ht);if(Re===null){Wt===null&&(Wt=vn);break}e&&Wt&&Re.alternate===null&&n(W,Wt),H=f(Re,H,ee),ve===null?Ft=Re:ve.sibling=Re,ve=Re,Wt=vn}if(ee===J.length)return a(W,Wt),we&&ja(W,ee),Ft;if(Wt===null){for(;ee<J.length;ee++)Wt=gt(W,J[ee],ht),Wt!==null&&(H=f(Wt,H,ee),ve===null?Ft=Wt:ve.sibling=Wt,ve=Wt);return we&&ja(W,ee),Ft}for(Wt=s(Wt);ee<J.length;ee++)vn=it(Wt,W,ee,J[ee],ht),vn!==null&&(e&&vn.alternate!==null&&Wt.delete(vn.key===null?ee:vn.key),H=f(vn,H,ee),ve===null?Ft=vn:ve.sibling=vn,ve=vn);return e&&Wt.forEach(function(wa){return n(W,wa)}),we&&ja(W,ee),Ft}function te(W,H,J,ht){if(J==null)throw Error(r(151));for(var Ft=null,ve=null,Wt=H,ee=H=0,vn=null,Re=J.next();Wt!==null&&!Re.done;ee++,Re=J.next()){Wt.index>ee?(vn=Wt,Wt=null):vn=Wt.sibling;var wa=nt(W,Wt,Re.value,ht);if(wa===null){Wt===null&&(Wt=vn);break}e&&Wt&&wa.alternate===null&&n(W,Wt),H=f(wa,H,ee),ve===null?Ft=wa:ve.sibling=wa,ve=wa,Wt=vn}if(Re.done)return a(W,Wt),we&&ja(W,ee),Ft;if(Wt===null){for(;!Re.done;ee++,Re=J.next())Re=gt(W,Re.value,ht),Re!==null&&(H=f(Re,H,ee),ve===null?Ft=Re:ve.sibling=Re,ve=Re);return we&&ja(W,ee),Ft}for(Wt=s(Wt);!Re.done;ee++,Re=J.next())Re=it(Wt,W,ee,Re.value,ht),Re!==null&&(e&&Re.alternate!==null&&Wt.delete(Re.key===null?ee:Re.key),H=f(Re,H,ee),ve===null?Ft=Re:ve.sibling=Re,ve=Re);return e&&Wt.forEach(function(NS){return n(W,NS)}),we&&ja(W,ee),Ft}function ze(W,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case S:t:{for(var Ft=J.key;H!==null;){if(H.key===Ft){if(Ft=J.type,Ft===b){if(H.tag===7){a(W,H.sibling),ht=c(H,J.props.children),ht.return=W,W=ht;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===j&&tm(Ft)===H.type){a(W,H.sibling),ht=c(H,J.props),Js(ht,J),ht.return=W,W=ht;break t}a(W,H);break}else n(W,H);H=H.sibling}J.type===b?(ht=Ya(J.props.children,W.mode,ht,J.key),ht.return=W,W=ht):(ht=$o(J.type,J.key,J.props,null,W.mode,ht),Js(ht,J),ht.return=W,W=ht)}return y(W);case M:t:{for(Ft=J.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(W,H.sibling),ht=c(H,J.children||[]),ht.return=W,W=ht;break t}else{a(W,H);break}else n(W,H);H=H.sibling}ht=Kc(J,W.mode,ht),ht.return=W,W=ht}return y(W);case j:return Ft=J._init,J=Ft(J._payload),ze(W,H,J,ht)}if(ft(J))return ie(W,H,J,ht);if(ot(J)){if(Ft=ot(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),te(W,H,J,ht)}if(typeof J.then=="function")return ze(W,H,gl(J),ht);if(J.$$typeof===P)return ze(W,H,il(W,J),ht);_l(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(W,H.sibling),ht=c(H,J),ht.return=W,W=ht):(a(W,H),ht=jc(J,W.mode,ht),ht.return=W,W=ht),y(W)):a(W,H)}return function(W,H,J,ht){try{Qs=0;var Ft=ze(W,H,J,ht);return Fr=null,Ft}catch(Wt){if(Wt===Vs||Wt===rl)throw Wt;var ve=Xn(29,Wt,null,W.mode);return ve.lanes=ht,ve.return=W,ve}finally{}}}var Hr=em(!0),nm=em(!1),ii=q(null),Si=null;function pa(e){var n=e.alternate;yt(cn,cn.current&1),yt(ii,e),Si===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(Si=e)}function im(e){if(e.tag===22){if(yt(cn,cn.current),yt(ii,e),Si===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Si=e)}}else ma()}function ma(){yt(cn,cn.current),yt(ii,ii.current)}function Hi(e){dt(ii),Si===e&&(Si=null),dt(cn)}var cn=q(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function wu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Du={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=fa(s);c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,s),n!==null&&(jn(n,e,s),Xs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,s),n!==null&&(jn(n,e,s),Xs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=ha(e,s,a),n!==null&&(jn(n,e,a),Xs(n,e,a))}};function am(e,n,a,s,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!Ps(a,s)||!Ps(c,f):!0}function rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Du.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sm(e){Sl(e)}function om(e){console.error(e)}function lm(e){Sl(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Uu(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function um(e){return e=fa(e),e.tag=3,e}function fm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){cm(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){cm(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function N0(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Si===null?ef():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===su?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),af(e,s,c)),!1;case 22:return a.flags|=65536,s===su?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),af(e,s,c)),!1}throw Error(r(435,a.tag))}return af(e,s,c),ef(),!1}if(we)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==$c&&(e=Error(r(422),{cause:s}),zs($n(e,a)))):(s!==$c&&(n=Error(r(423),{cause:s}),zs($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=$n(s,a),c=Uu(e.stateNode,s,c),cu(e,c),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),ro===null?ro=[f]:ro.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Uu(a.stateNode,s,e),cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=um(c),fm(c,e,a,s),cu(a,c),!1}a=a.return}while(a!==null);return!1}var hm=Error(r(461)),gn=!1;function Mn(e,n,a,s){n.child=e===null?nm(n,null,a,s):Hr(n,e.child,a,s)}function dm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var T in s)T!=="ref"&&(y[T]=s[T])}else y=s;return $a(n),s=pu(e,n,a,y,f,c),T=mu(),e!==null&&!gn?(gu(e,n,c),Gi(e,n,c)):(we&&T&&Qc(n),n.flags|=1,Mn(e,n,s,c),n.child)}function pm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Zc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mm(e,n,f,s,c)):(e=$o(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Fu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ps,a(y,s)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=Pi(f,s),e.ref=n.ref,e.return=n,n.child=e}function mm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ps(f,s)&&e.ref===n.ref)if(gn=!1,n.pendingProps=s=f,Fu(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Lu(e,n,a,s,c)}function gm(e,n,a){var s=n.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return _m(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?mp(n,f):fu(),im(n);else return n.lanes=n.childLanes=536870912,_m(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(al(n,f.cachePool),mp(n,f),ma(),n.memoizedState=null):(e!==null&&al(n,null),fu(),ma());return Mn(e,n,c,a),n.child}function _m(e,n,a,s){var c=ru();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&al(n,null),fu(),im(n),e!==null&&Fs(e,n,s,!0),null}function xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Lu(e,n,a,s,c){return $a(n),a=pu(e,n,a,s,void 0,c),s=mu(),e!==null&&!gn?(gu(e,n,c),Gi(e,n,c)):(we&&s&&Qc(n),n.flags|=1,Mn(e,n,a,c),n.child)}function vm(e,n,a,s,c,f){return $a(n),n.updateQueue=null,a=_p(n,s,a,c),gp(e),s=mu(),e!==null&&!gn?(gu(e,n,f),Gi(e,n,f)):(we&&s&&Qc(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Sm(e,n,a,s,c){if($a(n),n.stateNode===null){var f=Dr,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Du,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},ou(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):Dr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(wu(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Du.enqueueReplaceState(f,f.state,null),qs(n,s,f,c),Ws(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,N=nr(a,T);f.props=N;var $=f.context,ct=a.contextType;y=Dr,typeof ct=="object"&&ct!==null&&(y=An(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==y)&&rm(n,f,s,y),ua=!1;var nt=n.memoizedState;f.state=nt,qs(n,s,f,c),Ws(),$=n.memoizedState,T||nt!==$||ua?(typeof gt=="function"&&(wu(n,a,gt,s),$=n.memoizedState),(N=ua||am(n,a,N,s,nt,$,y))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=y,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,lu(e,n),y=n.memoizedProps,ct=nr(a,y),f.props=ct,gt=n.pendingProps,nt=f.context,$=a.contextType,N=Dr,typeof $=="object"&&$!==null&&(N=An($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==N)&&rm(n,f,s,N),ua=!1,nt=n.memoizedState,f.state=nt,qs(n,s,f,c),Ws();var it=n.memoizedState;y!==gt||nt!==it||ua||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof T=="function"&&(wu(n,a,T,s),it=n.memoizedState),(ct=ua||am(n,a,ct,s,nt,it,N)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=N,s=ct):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,xl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Hr(n,e.child,null,c),n.child=Hr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function ym(e,n,a,s){return Is(),n.flags|=256,Mn(e,n,a,s),n.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pu(e){return{baseLanes:e,cachePool:op()}}function Ou(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function xm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(c?pa(n):ma(),we){var T=Ke,N;if(N=T){t:{for(N=T,T=vi;N.nodeType!==8;){if(!T){T=null;break t}if(N=ui(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Za!==null?{id:Oi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},N=Xn(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Un=n,Ke=null,N=!0):N=!1}N||Qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Sf(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=s.children,s=s.fallback,c?(ma(),c=n.mode,T=Ml({mode:"hidden",children:T},c),s=Ya(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=Pu(a),c.childLanes=Ou(e,y,a),n.memoizedState=Nu,s):(pa(n),Bu(n,T))}if(N=e.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Iu(e,n,a)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),c=s.fallback,T=n.mode,s=Ml({mode:"visible",children:s.children},T),c=Ya(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Hr(n,e.child,null,a),s=n.child,s.memoizedState=Pu(a),s.childLanes=Ou(e,y,a),n.memoizedState=Nu,n=c);else if(pa(n),Sf(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var $=y.dgst;y=$,s=Error(r(419)),s.stack="",s.digest=y,zs({value:s,source:null,stack:null}),n=Iu(e,n,a)}else if(gn||Fs(e,n,a,!1),y=(a&e.childLanes)!==0,gn||y){if(y=Xe,y!==null&&(s=a&-a,s=(s&42)!==0?1:ae(s),s=(s&(y.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,wr(e,s),jn(y,e,s),hm;T.data==="$?"||ef(),n=Iu(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=N.treeContext,Ke=ui(T.nextSibling),Un=n,we=!0,Ka=null,vi=!1,e!==null&&(ei[ni++]=Oi,ei[ni++]=Bi,ei[ni++]=Za,Oi=e.id,Bi=e.overflow,Za=n),n=Bu(n,s.children),n.flags|=4096);return n}return c?(ma(),c=s.fallback,T=n.mode,N=e.child,$=N.sibling,s=Pi(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,$!==null?c=Pi($,c):(c=Ya(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=e.child.memoizedState,T===null?T=Pu(a):(N=T.cachePool,N!==null?($=ln._currentValue,N=N.parent!==$?{parent:$,pool:$}:N):N=op(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Ou(e,y,a),n.memoizedState=Nu,s):(pa(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Bu(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Iu(e,n,a){return Hr(n,e.child,null,a),e=Bu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),eu(e.return,n,a)}function zu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Em(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Mn(e,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(yt(cn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),zu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&vl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}zu(n,!0,a,null,f);break;case"together":zu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Fu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function P0(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),ca(n,ln,e.memoizedState.cache),Is();break;case 27:case 5:jt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(pa(n),e=Gi(e,n,a),e!==null?e.sibling:null);pa(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fs(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Em(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,gm(e,n,a);case 24:ca(n,ln,e.memoizedState.cache)}return Gi(e,n,a)}function Tm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!Fu(e,a)&&(n.flags&128)===0)return gn=!1,P0(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,we&&(n.flags&1048576)!==0&&tp(n,el,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Zc(s)?(e=nr(s,e),n.tag=1,n=Sm(null,n,s,e,a)):(n.tag=0,n=Lu(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=dm(null,n,s,e,a);break t}else if(c===z){n.tag=14,n=pm(null,n,s,e,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return Lu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),Sm(e,n,s,c,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,lu(e,n),qs(n,s,null,a);var y=n.memoizedState;if(s=y.cache,ca(n,ln,s),s!==f.cache&&nu(n,[ln],a,!0),Ws(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ym(e,n,s,a);break t}else if(s!==c){c=$n(Error(r(424)),n),zs(c),n=ym(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=ui(e.firstChild),Un=n,we=!0,Ka=null,vi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Is(),s===c){n=Gi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return xl(e,n),e===null?(a=Cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,s=Bl(xt.current).createElement(a),s[sn]=n,s[yn]=e,Tn(s,a,e),en(s),n.stateNode=s):n.memoizedState=Cg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&we&&(s=n.stateNode=bg(n.type,n.pendingProps,xt.current),Un=n,vi=!0,c=Ke,Ta(n.type)?(yf=c,Ke=ui(s.firstChild)):Ke=c),Mn(e,n,n.pendingProps.children,a),xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((c=s=Ke)&&(s=lS(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Un=n,Ke=ui(s.firstChild),vi=!1,c=!0):c=!1),c||Qa(n)),jt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,s=f.children,gf(c,f)?s=null:y!==null&&gf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=pu(e,n,A0,null,null,a),mo._currentValue=c),xl(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&we&&((e=a=Ke)&&(a=cS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,Ke=null,e=!0):e=!1),e||Qa(n)),null;case 13:return xm(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Hr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=An(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return pm(e,n,n.type,n.pendingProps,a);case 15:return mm(e,n,n.type,n.pendingProps,a);case 19:return Em(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Ml(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return gm(e,n,a);case 24:return $a(n),s=An(ln),e===null?(c=ru(),c===null&&(c=Xe,f=iu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},ou(n),ca(n,ln,c)):((e.lanes&a)!==0&&(lu(e,n),qs(n,null,null,a),Ws()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,ln,s)):(s=f.cache,ca(n,ln,s),s!==c.cache&&nu(n,[ln],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(e){e.flags|=4}function bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ng(n)){if(n=ii.current,n!==null&&((Ee&4194048)===Ee?Si!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Si))throw ks=su,lp;e.flags|=8192}}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Xr|=n)}function $s(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function O0(e,n,a){var s=n.pendingProps;switch(Jc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),je(n),null;case 26:return a=n.memoizedState,e===null?(Vi(n),a!==null?(je(n),bm(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Vi(n),je(n),bm(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==s&&Vi(n),je(n),n.flags&=-16777217),null;case 27:Yt(n),a=xt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}e=Q.current,Bs(n)?ep(n):(e=bg(c,s,a),n.stateNode=e,Vi(n))}return je(n),null;case 5:if(Yt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(e=Q.current,Bs(n))ep(n);else{switch(c=Bl(xt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[sn]=n,e[yn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=xt.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Un,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||vg(e.nodeValue,a)),e||Qa(n)}else e=Bl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return je(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Bs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),je(n),null;case 4:return oe(),e===null&&ff(n.stateNode.containerInfo),je(n),null;case 10:return zi(n.type),je(n),null;case 19:if(dt(cn),c=n.memoizedState,c===null)return je(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)$s(c,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,$s(c,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$d(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Qt()>Al&&(n.flags|=128,s=!0,$s(c,!1),n.lanes=4194304)}else{if(!s)if(e=vl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),$s(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!we)return je(n),null}else 2*Qt()-c.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,s=!0,$s(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Qt(),n.sibling=null,e=cn.current,yt(cn,s?e&1|2:e&1),n):(je(n),null);case 22:case 23:return Hi(n),hu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&dt(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(ln),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function B0(e,n){switch(Jc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Yt(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(cn),null;case 4:return oe(),null;case 10:return zi(n.type),null;case 22:case 23:return Hi(n),hu(),e!==null&&dt(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zi(ln),null;case 25:return null;default:return null}}function Am(e,n){switch(Jc(n),n.tag){case 3:zi(ln),oe();break;case 26:case 27:case 5:Yt(n);break;case 4:oe();break;case 13:Hi(n);break;case 19:dt(cn);break;case 10:zi(n.type);break;case 22:case 23:Hi(n),hu(),e!==null&&dt(tr);break;case 24:zi(ln)}}function to(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==c)}}catch(T){Ve(n,n.return,T)}}function ga(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var y=s.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var N=a,$=T;try{$()}catch(ct){Ve(c,N,ct)}}}s=s.next}while(s!==f)}}catch(ct){Ve(n,n.return,ct)}}function Rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pp(n,a)}catch(s){Ve(e,e.return,s)}}}function Cm(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(e,n,s)}}function eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ve(e,n,c)}}function yi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function Hu(e,n,a){try{var s=e.stateNode;iS(s,e.type,a,n),s[yn]=n}catch(c){Ve(e,e.return,c)}}function Dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Gu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vu(e,n,a),e=e.sibling;e!==null;)Vu(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function Um(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,s,a),n[sn]=e,n[yn]=a}catch(f){Ve(e,e.return,f)}}var ki=!1,tn=!1,ku=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function I0(e,n){if(e=e.containerInfo,pf=Vl,e=kd(e),Gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,N=-1,$=0,ct=0,gt=e,nt=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(T=y+c),gt!==f||s!==0&&gt.nodeType!==3||(N=y+s),gt.nodeType===3&&(y+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===e)break e;if(nt===a&&++$===c&&(T=y),nt===f&&++ct===s&&(N=y),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(mf={focusedElem:e,selectionRange:a},Vl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=nr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ve(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Nm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),s&4&&to(5,a);break;case 1:if(_a(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ve(a,a.return,y)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(a,a.return,y)}}s&64&&Rm(a),s&512&&eo(a,a.return);break;case 3:if(_a(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(e,n)}catch(y){Ve(a,a.return,y)}}break;case 27:n===null&&s&4&&Um(a);case 26:case 5:_a(e,a),n===null&&s&4&&wm(a),s&512&&eo(a,a.return);break;case 12:_a(e,a);break;case 13:_a(e,a),s&4&&Bm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=q0.bind(null,a),uS(e,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||tn,c=ki;var f=tn;ki=s,(tn=n)&&!f?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),ki=c,tn=f}break;case 30:break;default:_a(e,a)}}function Pm(e){var n=e.alternate;n!==null&&(e.alternate=null,Pm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ra(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,In=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Om(e,n,a),a=a.sibling}function Om(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:tn||yi(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||yi(a,n);var s=qe,c=In;Ta(a.type)&&(qe=a.stateNode,In=!1),Xi(e,n,a),uo(a.stateNode),qe=s,In=c;break;case 5:tn||yi(a,n);case 6:if(s=qe,c=In,qe=null,Xi(e,n,a),qe=s,In=c,qe!==null)if(In)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:qe!==null&&(In?(e=qe,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),So(e)):Eg(qe,a.stateNode));break;case 4:s=qe,c=In,qe=a.stateNode.containerInfo,In=!0,Xi(e,n,a),qe=s,In=c;break;case 0:case 11:case 14:case 15:tn||ga(2,a,n),tn||ga(4,a,n),Xi(e,n,a);break;case 1:tn||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cm(a,n,s)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Xi(e,n,a),tn=s;break;default:Xi(e,n,a)}}function Bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(a){Ve(n,n.return,a)}}function z0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lm),n;default:throw Error(r(435,e.tag))}}function Xu(e,n){var a=z0(e);n.forEach(function(s){var c=Y0.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){qe=T.stateNode,In=!1;break t}break;case 5:qe=T.stateNode,In=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(qe===null)throw Error(r(160));Om(f,y,c),qe=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}var ci=null;function Im(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),s&4&&(ga(3,e,e.return),to(3,e),ga(5,e,e.return));break;case 1:Wn(n,e),qn(e),s&512&&(tn||a===null||yi(a,a.return)),s&64&&ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ci;if(Wn(n,e),qn(e),s&512&&(tn||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[aa]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,s,a),f[sn]=e,en(f),s=f;break t;case"link":var y=Ug("link","href",c).get(s+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;case"meta":if(y=Ug("meta","content",c).get(s+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=c.createElement(s),Tn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,en(f),s=f}e.stateNode=s}else Lg(c,e.type,e.stateNode);else e.stateNode=Dg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Lg(c,e.type,e.stateNode):Dg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Hu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),s&512&&(tn||a===null||yi(a,a.return)),a!==null&&s&4&&Hu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),s&512&&(tn||a===null||yi(a,a.return)),e.flags&32){c=e.stateNode;try{_i(c,"")}catch(it){Ve(e,e.return,it)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Hu(e,c,a!==null?a.memoizedProps:c)),s&1024&&(ku=!0);break;case 6:if(Wn(n,e),qn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(it){Ve(e,e.return,it)}}break;case 3:if(Fl=null,c=ci,ci=Il(n.containerInfo),Wn(n,e),ci=c,qn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{So(n.containerInfo)}catch(it){Ve(e,e.return,it)}ku&&(ku=!1,zm(e));break;case 4:s=ci,ci=Il(e.stateNode.containerInfo),Wn(n,e),qn(e),ci=s;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ku=Qt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Xu(e,s)));break;case 22:c=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,$=ki,ct=tn;if(ki=$||c,tn=ct||N,Wn(n,e),tn=ct,ki=$,qn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||N||ki||tn||ir(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=N.stateNode;var gt=N.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ve(N,N.return,it)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(it){Ve(N,N.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Xu(e,a))));break;case 19:Wn(n,e),qn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Xu(e,s)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Gu(e);Tl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(_i(y,""),a.flags&=-33);var T=Gu(e);Tl(e,T,y);break;case 3:case 4:var N=a.stateNode.containerInfo,$=Gu(e);Vu(e,$,N);break;default:throw Error(r(161))}}catch(ct){Ve(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),ir(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cm(n,n.return,a),ir(n);break;case 27:uo(n.stateNode);case 26:case 5:yi(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),to(4,f);break;case 1:if(va(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ve(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)dp(N[c],T)}catch($){Ve(s,s.return,$)}}a&&y&64&&Rm(f),eo(f,f.return);break;case 27:Um(f);case 26:case 5:va(c,f,a),a&&s===null&&y&4&&wm(f),eo(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&y&4&&Bm(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),eo(f,f.return);break;case 30:break;default:va(c,f,a)}n=n.sibling}}function Wu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hs(a))}function qu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e))}function xi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(e,n,a,s),n=n.sibling}function Fm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,s),c&2048&&to(9,n);break;case 1:xi(e,n,a,s);break;case 3:xi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e)));break;case 12:if(c&2048){xi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Ve(n,n.return,N)}}else xi(e,n,a,s);break;case 13:xi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,s):no(e,n):f._visibility&2?xi(e,n,a,s):(f._visibility|=2,Gr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Wu(y,n);break;case 24:xi(e,n,a,s),c&2048&&qu(n.alternate,n);break;default:xi(e,n,a,s)}}function Gr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,T=a,N=s,$=y.flags;switch(y.tag){case 0:case 11:case 15:Gr(f,y,T,N,c),to(8,y);break;case 23:break;case 22:var ct=y.stateNode;y.memoizedState!==null?ct._visibility&2?Gr(f,y,T,N,c):no(f,y):(ct._visibility|=2,Gr(f,y,T,N,c)),c&&$&2048&&Wu(y.alternate,y);break;case 24:Gr(f,y,T,N,c),c&&$&2048&&qu(y.alternate,y);break;default:Gr(f,y,T,N,c)}n=n.sibling}}function no(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:no(a,s),c&2048&&Wu(s.alternate,s);break;case 24:no(a,s),c&2048&&qu(s.alternate,s);break;default:no(a,s)}n=n.sibling}}var io=8192;function Vr(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 26:Vr(e),e.flags&io&&e.memoizedState!==null&&ES(ci,e.memoizedState,e.memoizedProps);break;case 5:Vr(e);break;case 3:case 4:var n=ci;ci=Il(e.stateNode.containerInfo),Vr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,Vr(e),io=n):Vr(e));break;default:Vr(e)}}function Gm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,km(s,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 0:case 11:case 15:ao(e),e.flags&2048&&ga(9,e,e.return);break;case 3:ao(e);break;case 12:ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bl(e)):ao(e);break;default:ao(e)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,km(s,e)}Gm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}e=e.sibling}}function km(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=e;_n!==null;){s=_n;var c=s.sibling,f=s.return;if(Pm(s),s===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var F0={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},H0=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,Se=null,Ee=0,Pe=0,Yn=null,Sa=!1,kr=!1,Yu=!1,Wi=0,Qe=0,ya=0,ar=0,Zu=0,ai=0,Xr=0,ro=null,zn=null,ju=!1,Ku=0,Al=1/0,Rl=null,xa=null,En=0,Ma=null,Wr=null,qr=0,Qu=0,Ju=null,Xm=null,so=0,$u=null;function Zn(){if((Ne&2)!==0&&Ee!==0)return Ee&-Ee;if(O.T!==null){var e=Nr;return e!==0?e:of()}return Ae()}function Wm(){ai===0&&(ai=(Ee&536870912)===0||we?G():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),Ea(e,Ee,ai,!1)),Bt(e,a),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(ar|=a),Qe===4&&Ea(e,Ee,ai,!1)),Mi(e))}function qm(e,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=s?k0(e,n):nf(e,n,!0),f=s;do{if(c===0){kr&&!s&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!G0(a)){c=nf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;c=ro;var N=T.current.memoizedState.isDehydrated;if(N&&(Yr(T,y).flags|=256),y=nf(T,y,!1),y!==2){if(Yu&&!N){T.errorRecoveryDisabledLanes|=f,ar|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Yr(e,0),Ea(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,ai,!Sa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ku+300-Qt(),10<c)){if(Ea(s,n,ai,!Sa),Zt(s,0,!0)!==0)break t;s.timeoutHandle=xg(Ym.bind(null,s,a,zn,Rl,ju,n,ai,ar,Xr,Sa,f,2,-0,0),c);break t}Ym(s,a,zn,Rl,ju,n,ai,ar,Xr,Sa,f,0,-0,0)}}break}while(!0);Mi(e)}function Ym(e,n,a,s,c,f,y,T,N,$,ct,gt,nt,it){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:MS},Hm(n),gt=TS(),gt!==null)){e.cancelPendingCommit=gt(tg.bind(null,e,n,f,a,s,c,y,T,N,ct,1,nt,it)),Ea(e,f,y,!$);return}tg(e,n,f,a,s,c,y,T,N)}function G0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,s){n&=~Zu,n&=~ar,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),y=1<<f;s[f]=-1,c&=~y}a!==0&&vt(e,a,n)}function Cl(){return(Ne&6)===0?(oo(0),!1):!0}function tf(){if(Se!==null){if(Pe===0)var e=Se.return;else e=Se,Ii=Ja=null,_u(e),Fr=null,Qs=0,e=Se;for(;e!==null;)Am(e.alternate,e),e=e.return;Se=null}}function Yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),tf(),Xe=e,Se=a=Pi(e.current,null),Ee=n,Pe=0,Yn=null,Sa=!1,kr=Ct(e,n),Yu=!1,Xr=ai=Zu=ar=ya=Qe=0,zn=ro=null,ju=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=e[c],s&=~f}return Wi=n,Ko(),a}function Zm(e,n){ge=null,O.H=ml,n===Vs||n===rl?(n=fp(),Pe=3):n===lp?(n=fp(),Pe=4):Pe=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,Se===null&&(Qe=1,yl(e,$n(n,e.current)))}function jm(){var e=O.H;return O.H=ml,e===null?ml:e}function Km(){var e=O.A;return O.A=F0,e}function ef(){Qe=4,Sa||(Ee&4194048)!==Ee&&ii.current!==null||(kr=!0),(ya&134217727)===0&&(ar&134217727)===0||Xe===null||Ea(Xe,Ee,ai,!1)}function nf(e,n,a){var s=Ne;Ne|=2;var c=jm(),f=Km();(Xe!==e||Ee!==n)&&(Rl=null,Yr(e,n)),n=!1;var y=Qe;t:do try{if(Pe!==0&&Se!==null){var T=Se,N=Yn;switch(Pe){case 8:tf(),y=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=Pe;if(Pe=0,Yn=null,Zr(e,T,N,$),a&&kr){y=0;break t}break;default:$=Pe,Pe=0,Yn=null,Zr(e,T,N,$)}}V0(),y=Qe;break}catch(ct){Zm(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Ii=Ja=null,Ne=s,O.H=c,O.A=f,Se===null&&(Xe=null,Ee=0,Ko()),y}function V0(){for(;Se!==null;)Qm(Se)}function k0(e,n){var a=Ne;Ne|=2;var s=jm(),c=Km();Xe!==e||Ee!==n?(Rl=null,Al=Qt()+500,Yr(e,n)):kr=Ct(e,n);t:do try{if(Pe!==0&&Se!==null){n=Se;var f=Yn;e:switch(Pe){case 1:Pe=0,Yn=null,Zr(e,n,f,1);break;case 2:case 9:if(cp(f)){Pe=0,Yn=null,Jm(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Mi(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:cp(f)?(Pe=0,Yn=null,Jm(n)):(Pe=0,Yn=null,Zr(e,n,f,7));break;case 5:var y=null;switch(Se.tag){case 26:y=Se.memoizedState;case 5:case 27:var T=Se;if(!y||Ng(y)){Pe=0,Yn=null;var N=T.sibling;if(N!==null)Se=N;else{var $=T.return;$!==null?(Se=$,wl($)):Se=null}break e}}Pe=0,Yn=null,Zr(e,n,f,5);break;case 6:Pe=0,Yn=null,Zr(e,n,f,6);break;case 8:tf(),Qe=6;break t;default:throw Error(r(462))}}X0();break}catch(ct){Zm(e,ct)}while(!0);return Ii=Ja=null,O.H=s,O.A=c,Ne=a,Se!==null?0:(Xe=null,Ee=0,Ko(),Qe)}function X0(){for(;Se!==null&&!Ze();)Qm(Se)}function Qm(e){var n=Tm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?wl(e):Se=n}function Jm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:_u(n);default:Am(a,n),n=Se=$d(n,Wi),n=Tm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?wl(e):Se=n}function Zr(e,n,a,s){Ii=Ja=null,_u(n),Fr=null,Qs=0;var c=n.return;try{if(N0(e,c,n,a,Ee)){Qe=1,yl(e,$n(a,e.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;Qe=1,yl(e,$n(a,e.current)),Se=null;return}n.flags&32768?(we||s===1?e=!0:kr||(Ee&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=ii.current,s!==null&&s.tag===13&&(s.flags|=16384))),$m(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){$m(n,Sa);return}e=n.return;var a=O0(n.alternate,n,Wi);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Qe===0&&(Qe=5)}function $m(e,n){do{var a=B0(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);Qe=6,Se=null}function tg(e,n,a,s,c,f,y,T,N){e.cancelPendingCommit=null;do Dl();while(En!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=qc,bt(e,a,f,y,T,N),e===Xe&&(Se=Xe=null,Ee=0),Wr=n,Ma=e,qr=a,Qu=f,Ju=c,Xm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Z0(se,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=K.p,K.p=2,y=Ne,Ne|=4;try{I0(e,n,a)}finally{Ne=y,K.p=c,O.T=s}}En=1,eg(),ng(),ig()}}function eg(){if(En===1){En=0;var e=Ma,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Ne;Ne|=4;try{Im(n,e);var f=mf,y=kd(e.containerInfo),T=f.focusedElem,N=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&Vd(T.ownerDocument.documentElement,T)){if(N!==null&&Gc(T)){var $=N.start,ct=N.end;if(ct===void 0&&(ct=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ct,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ie=T.textContent.length,te=Math.min(N.start,ie),ze=N.end===void 0?te:Math.min(N.end,ie);!it.extend&&te>ze&&(y=ze,ze=te,te=y);var W=Gd(T,te),H=Gd(T,ze);if(W&&H&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var J=gt.createRange();J.setStart(W.node,W.offset),it.removeAllRanges(),te>ze?(it.addRange(J),it.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),it.addRange(J))}}}}for(gt=[],it=T;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var ht=gt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Vl=!!pf,mf=pf=null}finally{Ne=c,K.p=s,O.T=a}}e.current=n,En=2}}function ng(){if(En===2){En=0;var e=Ma,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Ne;Ne|=4;try{Nm(e,n.alternate,n)}finally{Ne=c,K.p=s,O.T=a}}En=3}}function ig(){if(En===4||En===3){En=0,me();var e=Ma,n=Wr,a=qr,s=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Wr=Ma=null,ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(xa=null),Le(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var f=e.onRecoverableError,y=0;y<s.length;y++){var T=s[y];f(T.value,{componentStack:T.stack})}}finally{O.T=n,K.p=c}}(qr&3)!==0&&Dl(),Mi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===$u?so++:(so=0,$u=e):so=0,oo(0)}}function ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Hs(n)))}function Dl(e){return eg(),ng(),ig(),rg()}function rg(){if(En!==5)return!1;var e=Ma,n=Qu;Qu=0;var a=Le(qr),s=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=Ju,Ju=null;var f=Ma,y=qr;if(En=0,Wr=Ma=null,qr=0,(Ne&6)!==0)throw Error(r(331));var T=Ne;if(Ne|=4,Vm(f.current),Fm(f,f.current,y,a),Ne=T,oo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{K.p=c,O.T=s,ag(e,n)}}function sg(e,n,a){n=$n(a,n),n=Uu(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(Bt(e,2),Mi(e))}function Ve(e,n,a){if(e.tag===3)sg(e,e,a);else for(;n!==null;){if(n.tag===3){sg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){e=$n(a,e),a=um(2),s=ha(n,a,2),s!==null&&(fm(a,s,n,e),Bt(s,2),Mi(s));break}}n=n.return}}function af(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new H0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Yu=!0,c.add(a),e=W0.bind(null,e,n,a),n.then(e,e))}function W0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Ee&a)===a&&(Qe===4||Qe===3&&(Ee&62914560)===Ee&&300>Qt()-Ku?(Ne&2)===0&&Yr(e,0):Zu|=a,Xr===Ee&&(Xr=0)),Mi(e)}function og(e,n){n===0&&(n=Ut()),e=wr(e,n),e!==null&&(Bt(e,n),Mi(e))}function q0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),og(e,a)}function Y0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),og(e,a)}function Z0(e,n){return ce(e,n)}var Ul=null,jr=null,rf=!1,Ll=!1,sf=!1,rr=0;function Mi(e){e!==jr&&e.next===null&&(jr===null?Ul=jr=e:jr=jr.next=e),Ll=!0,rf||(rf=!0,K0())}function oo(e,n){if(!sf&&Ll){sf=!0;do for(var a=!1,s=Ul;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fg(s,f))}else f=Ee,f=Zt(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,fg(s,f));s=s.next}while(a);sf=!1}}function j0(){lg()}function lg(){Ll=rf=!1;var e=0;rr!==0&&(aS()&&(e=rr),rr=0);for(var n=Qt(),a=null,s=Ul;s!==null;){var c=s.next,f=cg(s,n);f===0?(s.next=null,a===null?Ul=c:a.next=c,c===null&&(jr=a)):(a=s,(e!==0||(f&3)!==0)&&(Ll=!0)),s=c}oo(e)}function cg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Pt(f),T=1<<y,N=c[y];N===-1?((T&a)===0||(T&s)!==0)&&(c[y]=re(T,n)):N<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=Ee,a=Zt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&B(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&B(s),Le(a)){case 2:case 8:a=Kt;break;case 32:a=se;break;case 268435456:a=L;break;default:a=se}return s=ug.bind(null,e),a=ce(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&B(s),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var s=Ee;return s=Zt(e,e===Xe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(qm(e,s,n),cg(e,Qt()),e.callbackNode!=null&&e.callbackNode===a?ug.bind(null,e):null)}function fg(e,n){if(Dl())return null;qm(e,n,!0)}function K0(){sS(function(){(Ne&6)!==0?ce(le,j0):lg()})}function of(){return rr===0&&(rr=G()),rr}function hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function dg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Q0(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=hg((c[yn]||null).action),y=s.submitter;y&&(n=(n=y[yn]||null)?hg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Yo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var N=y?dg(c,y):new FormData(c);Au(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=y?dg(c,y):new FormData(c),Au(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var lf=0;lf<Wc.length;lf++){var cf=Wc[lf],J0=cf.toLowerCase(),$0=cf[0].toUpperCase()+cf.slice(1);li(J0,"on"+$0)}li(qd,"onAnimationEnd"),li(Yd,"onAnimationIteration"),li(Zd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(g0,"onTransitionRun"),li(_0,"onTransitionStart"),li(v0,"onTransitionCancel"),li(jd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var T=s[y],N=T.instance,$=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ct){Sl(ct)}c.currentTarget=null,f=N}else for(y=0;y<s.length;y++){if(T=s[y],N=T.instance,$=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ct){Sl(ct)}c.currentTarget=null,f=N}}}}function ye(e,n){var a=n[Ga];a===void 0&&(a=n[Ga]=new Set);var s=e+"__bubble";a.has(s)||(mg(n,e,2,!1),a.add(s))}function uf(e,n,a){var s=0;n&&(s|=4),mg(a,e,s,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ff(e){if(!e[Nl]){e[Nl]=!0,Go.forEach(function(a){a!=="selectionchange"&&(tS.has(a)||uf(a,!1,e),uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,uf("selectionchange",!1,n))}}function mg(e,n,a,s){switch(Fg(n)){case 2:var c=RS;break;case 8:c=CS;break;default:c=bf}a=c.bind(null,n,a,e),c=void 0,!Lc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function hf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var T=s.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=s.return;y!==null;){var N=y.tag;if((N===3||N===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=Ci(T),y===null)return;if(N=y.tag,N===5||N===6||N===26||N===27){s=f=y;continue t}T=T.parentNode}}s=s.return}Md(function(){var $=f,ct=Dc(a),gt=[];t:{var nt=Kd.get(e);if(nt!==void 0){var it=Yo,ie=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":it=Zv;break;case"focusin":ie="focus",it=Bc;break;case"focusout":ie="blur",it=Bc;break;case"beforeblur":case"afterblur":it=Bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Qv;break;case qd:case Yd:case Zd:it=Fv;break;case jd:it=$v;break;case"scroll":case"scrollend":it=Pv;break;case"wheel":it=e0;break;case"copy":case"cut":case"paste":it=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Rd;break;case"toggle":case"beforetoggle":it=i0}var te=(n&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),W=te?nt!==null?nt+"Capture":null:nt;te=[];for(var H=$,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||W===null||(ht=Rs(H,W),ht!=null&&te.push(co(H,ht,J))),ze)break;H=H.return}0<te.length&&(nt=new it(nt,ie,null,a,ct),gt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==wc&&(ie=a.relatedTarget||a.fromElement)&&(Ci(ie)||ie[Pn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ie=a.relatedTarget||a.toElement,it=$,ie=ie?Ci(ie):null,ie!==null&&(ze=u(ie),te=ie.tag,ie!==ze||te!==5&&te!==27&&te!==6)&&(ie=null)):(it=null,ie=$),it!==ie)){if(te=bd,ht="onMouseLeave",W="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(te=Rd,ht="onPointerLeave",W="onPointerEnter",H="pointer"),ze=it==null?nt:ka(it),J=ie==null?nt:ka(ie),nt=new te(ht,H+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=J,ht=null,Ci(ct)===$&&(te=new te(W,H+"enter",ie,a,ct),te.target=J,te.relatedTarget=ze,ht=te),ze=ht,it&&ie)e:{for(te=it,W=ie,H=0,J=te;J;J=Kr(J))H++;for(J=0,ht=W;ht;ht=Kr(ht))J++;for(;0<H-J;)te=Kr(te),H--;for(;0<J-H;)W=Kr(W),J--;for(;H--;){if(te===W||W!==null&&te===W.alternate)break e;te=Kr(te),W=Kr(W)}te=null}else te=null;it!==null&&gg(gt,nt,it,te,!1),ie!==null&&ze!==null&&gg(gt,ze,ie,te,!0)}}t:{if(nt=$?ka($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Od;else if(Nd(nt))if(Bd)Ft=d0;else{Ft=f0;var ve=u0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Cc($.elementType)&&(Ft=Od):Ft=h0;if(Ft&&(Ft=Ft(e,$))){Pd(gt,Ft,a,ct);break t}ve&&ve(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&bn(nt,"number",nt.value)}switch(ve=$?ka($):window,e){case"focusin":(Nd(ve)||ve.contentEditable==="true")&&(Ar=ve,Vc=$,Os=null);break;case"focusout":Os=Vc=Ar=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Xd(gt,a,ct);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":Xd(gt,a,ct)}var Wt;if(zc)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else br?Ud(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Cd&&a.locale!=="ko"&&(br||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&br&&(Wt=Ed()):(la=ct,Nc="value"in la?la.value:la.textContent,br=!0)),ve=Pl($,ee),0<ve.length&&(ee=new Ad(ee,e,null,a,ct),gt.push({event:ee,listeners:ve}),Wt?ee.data=Wt:(Wt=Ld(a),Wt!==null&&(ee.data=Wt)))),(Wt=r0?s0(e,a):o0(e,a))&&(ee=Pl($,"onBeforeInput"),0<ee.length&&(ve=new Ad("onBeforeInput","beforeinput",null,a,ct),gt.push({event:ve,listeners:ee}),ve.data=Wt)),Q0(gt,e,$,a,ct)}pg(gt,n)})}function co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(e,a),c!=null&&s.unshift(co(e,c,f)),c=Rs(e,n),c!=null&&s.push(co(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gg(e,n,a,s,c){for(var f=n._reactName,y=[];a!==null&&a!==s;){var T=a,N=T.alternate,$=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||$===null||(N=$,c?($=Rs(a,f),$!=null&&y.unshift(co(a,$,N))):c||($=Rs(a,f),$!=null&&y.push(co(a,$,N)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var eS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function _g(e){return(typeof e=="string"?e:""+e).replace(eS,`
`).replace(nS,"")}function vg(e,n){return n=_g(n),_g(e)===n}function Ol(){}function Ie(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||_i(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&_i(e,""+s);break;case"className":wt(e,"class",s);break;case"tabIndex":wt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,s);break;case"style":yd(e,s,f);break;case"data":if(n!=="object"){wt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ol);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Tt(e,"popover",s);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lv.get(a)||a,Tt(e,a,s))}}function df(e,n,a,s,c,f){switch(a){case"style":yd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?_i(e,s):(typeof s=="number"||typeof s=="bigint")&&_i(e,""+s);break;case"onScroll":s!=null&&ye("scroll",e);break;case"onScrollEnd":s!=null&&ye("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Tt(e,a,s)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,f,y,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),s&&Ie(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var T=f=y=c=null,N=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":c=ct;break;case"type":y=ct;break;case"checked":N=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ie(e,n,s,ct,a,null)}}Ge(e,f,T,N,$,y,c,!1),Oe(e);return;case"select":ye("invalid",e),s=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":s=T;default:Ie(e,n,c,T,a,null)}n=f,a=y,e.multiple=!!s,n!=null?on(e,!!s,n,!1):a!=null&&on(e,!!s,a,!0);return;case"textarea":ye("invalid",e),f=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ie(e,n,y,T,a,null)}xn(e,s,c,f),Oe(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(e,n,N,s,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(s=0;s<lo.length;s++)ye(lo[s],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,$,s,a,null)}return;default:if(Cc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&df(e,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ie(e,n,T,s,a,null))}function iS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,T=null,N=null,$=null,ct=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":N=gt;default:s.hasOwnProperty(it)||Ie(e,n,it,null,s,gt)}}for(var nt in s){var it=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":y=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Ie(e,n,nt,it,s,gt)}}Ui(e,y,T,N,$,ct,f,c);return;case"select":it=y=T=nt=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":it=N;default:s.hasOwnProperty(f)||Ie(e,n,f,null,s,N)}for(c in s)if(f=s[c],N=a[c],s.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==N&&Ie(e,n,c,f,s,N)}n=T,a=y,s=it,nt!=null?on(e,!!a,nt,!1):!!s!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,s,c)}for(y in s)if(c=s[y],f=a[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(e,n,y,c,s,f)}mn(e,nt,it);return;case"option":for(var ie in a)if(nt=a[ie],a.hasOwnProperty(ie)&&nt!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ie(e,n,ie,null,s,nt)}for(N in s)if(nt=s[N],it=a[N],s.hasOwnProperty(N)&&nt!==it&&(nt!=null||it!=null))switch(N){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,n,N,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!s.hasOwnProperty(te)&&Ie(e,n,te,null,s,nt);for($ in s)if(nt=s[$],it=a[$],s.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ie(e,n,$,nt,s,it)}return;default:if(Cc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!s.hasOwnProperty(ze)&&df(e,n,ze,void 0,s,nt);for(ct in s)nt=s[ct],it=a[ct],!s.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||df(e,n,ct,nt,s,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!s.hasOwnProperty(W)&&Ie(e,n,W,null,s,nt);for(gt in s)nt=s[gt],it=a[gt],!s.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Ie(e,n,gt,nt,s,it)}var pf=null,mf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function Sg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _f=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===_f?!1:(_f=e,!0):(_f=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(oS)}:xg;function oS(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Eg(e,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var y=e.ownerDocument;if(a&1&&uo(y.documentElement),a&2&&uo(y.body),a&4)for(a=y.head,uo(a),y=a.firstChild;y;){var T=y.nextSibling,N=y.nodeName;y[aa]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=T}}if(c===0){e.removeChild(f),So(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);So(n)}function vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vf(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lS(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function cS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Sf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var yf=null;function Tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function bg(e,n,a){switch(n=Bl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ra(e)}var ri=new Map,Ag=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=K.d;K.d={f:fS,r:hS,D:dS,C:pS,L:mS,m:gS,X:vS,S:_S,M:SS};function fS(){var e=qi.f(),n=Cl();return e||n}function hS(e){var n=wi(e);n!==null&&n.tag===5&&n.type==="form"?qp(n):qi.r(e)}var Qr=typeof document>"u"?null:document;function Rg(e,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ag.has(c)||(Ag.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Tn(n,"link",e),en(n),s.head.appendChild(n)))}}function dS(e){qi.D(e),Rg("dns-prefetch",e,null)}function pS(e,n){qi.C(e,n),Rg("preconnect",e,n)}function mS(e,n,a){qi.L(e,n,a);var s=Qr;if(s&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}ri.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),Tn(n,"link",e),en(n),s.head.appendChild(n)))}}function gS(e,n){qi.m(e,n);var a=Qr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(s)+'"][href="'+ke(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!ri.has(f)&&(e=g({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),Tn(s,"link",e),en(s),a.head.appendChild(s)}}}function _S(e,n,a){qi.S(e,n,a);var s=Qr;if(s&&e){var c=sa(s).hoistableStyles,f=Jr(e);n=n||"default";var y=c.get(f);if(!y){var T={loading:0,preload:null};if(y=s.querySelector(fo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&xf(e,a);var N=y=s.createElement("link");en(N),Tn(N,"link",e),N._p=new Promise(function($,ct){N.onload=$,N.onerror=ct}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zl(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(f,y)}}}function vS(e,n){qi.X(e,n);var a=Qr;if(a&&e){var s=sa(a).hoistableScripts,c=$r(e),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(e=g({src:e,async:!0},n),(n=ri.get(c))&&Mf(e,n),f=a.createElement("script"),en(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function SS(e,n){qi.M(e,n);var a=Qr;if(a&&e){var s=sa(a).hoistableScripts,c=$r(e),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Mf(e,n),f=a.createElement("script"),en(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Cg(e,n,a,s){var c=(c=xt.current)?Il(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=sa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=sa(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(fo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||yS(c,e,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=sa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+ke(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function wg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),en(n),e.head.appendChild(n))}function $r(e){return'[src="'+ke(e)+'"]'}function ho(e){return"script[async]"+e}function Dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),en(s),Tn(s,"style",c),zl(s,a.precedence,e),n.instance=s;case"stylesheet":c=Jr(a.href);var f=e.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=wg(a),(c=ri.get(c))&&xf(s,c),f=(e.ownerDocument||e).createElement("link"),en(f);var y=f;return y._p=new Promise(function(T,N){y.onload=T,y.onerror=N}),Tn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(c=e.querySelector(ho(f)))?(n.instance=c,en(c),c):(s=a,(c=ri.get(f))&&(s=g({},a),Mf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),Tn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,e));return n.instance}function zl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var T=s[y];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function Ug(e,n,a){if(Fl===null){var s=new Map,c=Fl=new Map;c.set(a,s)}else c=Fl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[aa]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=s.get(y);T?T.push(f):s.set(y,[f])}}return s}function Lg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ng(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var po=null;function MS(){}function ES(e,n,a){if(po===null)throw Error(r(475));var s=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),f=e.querySelector(fo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Hl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=wg(a),(c=ri.get(c))&&xf(a,c),f=f.createElement("link"),en(f);var y=f;y._p=new Promise(function(T,N){y.onload=T,y.onerror=N}),Tn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Hl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function TS(){if(po===null)throw Error(r(475));var e=po;return e.stylesheets&&e.count===0&&Ef(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ef(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Ef(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Ef(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach(bS,e),Gl=null,Hl.call(e))}function bS(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var s=a.get(null);else{a=new Map,Gl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,c),a.set(y,c),this.count++,s=Hl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var mo={$$typeof:P,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function AS(e,n,a,s,c,f,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Pg(e,n,a,s,c,f,y,T,N,$,ct,gt){return e=new AS(e,n,a,y,T,N,$,gt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},ou(f),e}function Og(e){return e?(e=Dr,e):Dr}function Bg(e,n,a,s,c,f){c=Og(c),s.context===null?s.context=c:s.pendingContext=c,s=fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ha(e,s,n),a!==null&&(jn(a,e,n),Xs(a,e,n))}function Ig(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Tf(e,n){Ig(e,n),(e=e.alternate)&&Ig(e,n)}function zg(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&jn(n,e,67108864),Tf(e,67108864)}}var Vl=!0;function RS(e,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=2,bf(e,n,a,s)}finally{K.p=f,O.T=c}}function CS(e,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=8,bf(e,n,a,s)}finally{K.p=f,O.T=c}}function bf(e,n,a,s){if(Vl){var c=Af(s);if(c===null)hf(e,n,s,kl,a),Hg(e,s);else if(DS(c,e,n,a,s))s.stopPropagation();else if(Hg(e,s),n&4&&-1<wS.indexOf(e)){for(;c!==null;){var f=wi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=qt(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var N=1<<31-Pt(y);T.entanglements[1]|=N,y&=~N}Mi(f),(Ne&6)===0&&(Al=Qt()+500,oo(0))}}break;case 13:T=wr(f,2),T!==null&&jn(T,f,2),Cl(),Tf(f,2)}if(f=Af(s),f===null&&hf(e,n,s,kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else hf(e,n,s,null,a)}}function Af(e){return e=Dc(e),Rf(e)}var kl=null;function Rf(e){if(kl=null,e=Ci(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kl=e,null}function Fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case le:return 2;case Kt:return 8;case se:case Je:return 32;case L:return 268435456;default:return 32}default:return 32}}var Cf=!1,ba=null,Aa=null,Ra=null,go=new Map,_o=new Map,Ca=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(e,n){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wi(n),n!==null&&zg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function DS(e,n,a,s,c){switch(n){case"focusin":return ba=vo(ba,e,n,a,s,c),!0;case"dragenter":return Aa=vo(Aa,e,n,a,s,c),!0;case"mouseover":return Ra=vo(Ra,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,e,n,a,s,c)),!0}return!1}function Gg(e){var n=Ci(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var s=Zn();s=ae(s);var c=wr(a,s);c!==null&&jn(c,a,s),Tf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Af(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);wc=s,a.target.dispatchEvent(s),wc=null}else return n=wi(a),n!==null&&zg(n),e.blockedOn=a,!1;n.shift()}return!0}function Vg(e,n,a){Xl(e)&&a.delete(n)}function US(){Cf=!1,ba!==null&&Xl(ba)&&(ba=null),Aa!==null&&Xl(Aa)&&(Aa=null),Ra!==null&&Xl(Ra)&&(Ra=null),go.forEach(Vg),_o.forEach(Vg)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,Cf||(Cf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,US)))}var ql=null;function kg(e){ql!==e&&(ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Rf(s||a)===null)continue;break}var f=wi(a);f!==null&&(e.splice(n,3),n-=3,Au(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function So(e){function n(N){return Wl(N,e)}ba!==null&&Wl(ba,e),Aa!==null&&Wl(Aa,e),Ra!==null&&Wl(Ra,e),go.forEach(n),_o.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Gg(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],y=c[yn]||null;if(typeof f=="function")y||kg(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[yn]||null)T=y.formAction;else if(Rf(c)!==null)continue}else T=y.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),kg(a)}}}function wf(e){this._internalRoot=e}Yl.prototype.render=wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Bg(a,s,e,n,null,null)},Yl.prototype.unmount=wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bg(e.current,2,null,e,null,null),Cl(),n[Pn]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Gg(e)}};var Xg=t.version;if(Xg!=="19.1.0")throw Error(r(527,Xg,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var LS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{ut=Zl.inject(LS),pt=Zl}catch{}}return yo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=sm,f=om,y=lm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,a,s,c,f,y,T,null),e[Pn]=n.current,ff(e),new wf(n)},yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=sm,y=om,T=lm,N=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Pg(e,1,!0,n,a??null,s,c,f,y,T,N,$),n.context=Og(null),a=n.current,s=Zn(),s=ae(s),c=fa(s),c.callback=null,ha(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Mi(n),e[Pn]=n.current,ff(e),new Yl(n)},yo.version="19.1.0",yo}var Jg;function HS(){if(Jg)return Uf.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Uf.exports=FS(),Uf.exports}var GS=HS();const VS=tv(GS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="178",kS=0,$g=1,XS=2,ev=1,nv=2,Ji=3,ia=0,Gn=1,$i=2,za=0,gs=1,t_=2,e_=3,n_=4,WS=5,pr=100,qS=101,YS=102,ZS=103,jS=104,KS=200,QS=201,JS=202,$S=203,mh=204,gh=205,ty=206,ey=207,ny=208,iy=209,ay=210,ry=211,sy=212,oy=213,ly=214,_h=0,vh=1,Sh=2,Ss=3,yh=4,xh=5,Mh=6,Eh=7,ad=0,cy=1,uy=2,Fa=0,fy=1,hy=2,dy=3,py=4,my=5,gy=6,_y=7,iv=300,ys=301,xs=302,Th=303,bh=304,Ac=306,wo=1e3,gr=1001,Ah=1002,gi=1003,vy=1004,jl=1005,Ti=1006,Of=1007,_r=1008,Ai=1009,av=1010,rv=1011,Do=1012,rd=1013,Sr=1014,ta=1015,Oo=1016,sd=1017,od=1018,Uo=1020,sv=35902,ov=1021,lv=1022,mi=1023,Lo=1026,No=1027,cv=1028,ld=1029,uv=1030,cd=1031,ud=1033,vc=33776,Sc=33777,yc=33778,xc=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Uh=36196,Lh=37492,Nh=37496,Ph=37808,Oh=37809,Bh=37810,Ih=37811,zh=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Xh=37818,Wh=37819,qh=37820,Yh=37821,Mc=36492,Zh=36494,jh=36495,fv=36283,Kh=36284,Qh=36285,Jh=36286,Sy=3200,yy=3201,hv=0,xy=1,Ba="",oi="srgb",Ms="srgb-linear",Tc="linear",Fe="srgb",ts=7680,i_=519,My=512,Ey=513,Ty=514,dv=515,by=516,Ay=517,Ry=518,Cy=519,a_=35044,r_="300 es",ea=2e3,bc=2001;class Ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=Math.PI/180,$h=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Me(o,t,i){return Math.max(t,Math.min(i,o))}function wy(o,t){return(o%t+t)%t}function If(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Io{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=C;return}if(_!==C||m!==S||p!==M||g!==b){let x=1-d;const v=m*S+p*M+g*b+_*C,I=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const V=Math.sqrt(P),k=Math.atan2(V,v*I);x=Math.sin(x*k)/V,d=Math.sin(d*k)/V}const U=d*I;if(m=m*x+S*U,p=p*x+M*U,g=g*x+b*U,_=_*x+C*U,x===1-d){const V=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=V,p*=V,g*=V,_*=V}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+g*_+m*M-p*S,t[i+1]=m*b+g*S+p*_-d*M,t[i+2]=p*b+g*M+d*S-m*_,t[i+3]=g*b-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"YXZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"ZXY":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"ZYX":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"YZX":this._x=S*g*_+p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_-S*M*b;break;case"XZY":this._x=S*g*_-p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return zf.copy(this).projectOnVector(t),this.sub(zf)}reflect(t){return this.sub(zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new tt,s_=new Io;class fe{constructor(t,i,r,l,u,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],M=r[5],b=r[8],C=l[0],x=l[3],v=l[6],I=l[1],P=l[4],U=l[7],V=l[2],k=l[5],z=l[8];return u[0]=h*C+d*I+m*V,u[3]=h*x+d*P+m*k,u[6]=h*v+d*U+m*z,u[1]=p*C+g*I+_*V,u[4]=p*x+g*P+_*k,u[7]=p*v+g*U+_*z,u[2]=S*C+M*I+b*V,u[5]=S*x+M*P+b*k,u[8]=S*v+M*U+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*_+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=_*C,t[1]=(l*p-g*r)*C,t[2]=(d*r-l*h)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ff.makeScale(t,i)),this}rotate(t){return this.premultiply(Ff.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ff.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new fe;function pv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Po(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Dy(){const o=Po("canvas");return o.style.display="block",o}const o_={};function _s(o){o in o_||(o_[o]=!0,console.warn(o))}function Uy(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function Ly(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ny(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const l_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Py(){const o={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Tc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ms]:{primaries:t,whitePoint:r,transfer:Tc,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Ce=Py();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let es;class Oy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{es===void 0&&(es=Po("canvas")),es.width=t.width,es.height=t.height;const l=es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Po("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let By=0;class fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Hf(l[h].image)):u.push(Hf(l[h]))}else u=Hf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Oy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iy=0;const Gf=new tt;class Nn extends Ts{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=gr,l=gr,u=Ti,h=_r,d=mi,m=Ai,p=Nn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Bo(),this.name="",this.source=new fd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gf).x}get height(){return this.source.getSize(Gf).y}get depth(){return this.source.getSize(Gf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wo:t.x=t.x-Math.floor(t.x);break;case gr:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wo:t.y=t.y-Math.floor(t.y);break;case gr:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=iv;Nn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],b=m[9],C=m[2],x=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+C)<.1&&Math.abs(b+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,V=(v+1)/2,k=(g+S)/4,z=(_+C)/4,j=(b+x)/4;return P>U&&P>V?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=k/r,u=z/r):U>V?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=k/l,u=j/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=z/u,l=j/u),this.set(r,l,u,i),this}let I=Math.sqrt((x-b)*(x-b)+(_-C)*(_-C)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(x-b)/I,this.y=(_-C)/I,this.z=(S-g)/I,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zy extends Ts{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new fd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends zy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class mv extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),Ql.subVectors(this.max,Mo),ns.subVectors(t.a,Mo),is.subVectors(t.b,Mo),as.subVectors(t.c,Mo),Da.subVectors(is,ns),Ua.subVectors(as,is),sr.subVectors(ns,as);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-sr.z,sr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,sr.z,0,-sr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-sr.y,sr.x,0];return!Vf(i,ns,is,as,Ql)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,ns,is,as,Ql))?!1:(Jl.crossVectors(Da,Ua),i=[Jl.x,Jl.y,Jl.z],Vf(i,ns,is,as,Ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],fi=new tt,Kl=new xr,ns=new tt,is=new tt,as=new tt,Da=new tt,Ua=new tt,sr=new tt,Mo=new tt,Ql=new tt,Jl=new tt,or=new tt;function Vf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){or.fromArray(o,u);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=t.dot(or),p=i.dot(or),g=r.dot(or);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Hy=new xr,Eo=new tt,kf=new tt;class hd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Hy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(kf)),this.expandByPoint(Eo.copy(t.center).sub(kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new tt,Xf=new tt,$l=new tt,La=new tt,Wf=new tt,tc=new tt,qf=new tt;class gv{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Xf.copy(t).add(i).multiplyScalar(.5),$l.copy(i).sub(t).normalize(),La.copy(this.origin).sub(Xf);const u=t.distanceTo(i)*.5,h=-this.direction.dot($l),d=La.dot(this.direction),m=-La.dot($l),p=La.lengthSq(),g=Math.abs(1-h*h);let _,S,M,b;if(g>0)if(_=h*m-d,S=h*d-m,b=u*g,_>=0)if(S>=-b)if(S<=b){const C=1/g;_*=C,S*=C,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Xf).addScaledVector($l,S),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(u=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){Wf.subVectors(i,t),tc.subVectors(r,t),qf.crossVectors(Wf,tc);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,t);const m=d*this.direction.dot(tc.crossVectors(La,tc));if(m<0)return null;const p=d*this.direction.dot(Wf.cross(La));if(p<0||m+p>h)return null;const g=-d*La.dot(qf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,h,d,m,p,g,_,S,M,b,C,x){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,_,S,M,b,C,x)}set(t,i,r,l,u,h,d,m,p,g,_,S,M,b,C,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=b,v[11]=C,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),u=1/rs.setFromMatrixColumn(t,1).length(),h=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=h*g,M=h*_,b=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,M=m*_,b=p*g,C=p*_;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,M=m*_,b=p*g,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,M=h*_,b=d*g,C=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=S-C*_}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+C,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gy,t,Vy)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Na.crossVectors(r,Kn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Na.crossVectors(r,Kn)),Na.normalize(),ec.crossVectors(Kn,Na),l[0]=Na.x,l[4]=ec.x,l[8]=Kn.x,l[1]=Na.y,l[5]=ec.y,l[9]=Kn.y,l[2]=Na.z,l[6]=ec.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],M=r[13],b=r[2],C=r[6],x=r[10],v=r[14],I=r[3],P=r[7],U=r[11],V=r[15],k=l[0],z=l[4],j=l[8],D=l[12],R=l[1],F=l[5],ot=l[9],st=l[13],_t=l[2],ft=l[6],O=l[10],K=l[14],X=l[3],St=l[7],w=l[11],q=l[15];return u[0]=h*k+d*R+m*_t+p*X,u[4]=h*z+d*F+m*ft+p*St,u[8]=h*j+d*ot+m*O+p*w,u[12]=h*D+d*st+m*K+p*q,u[1]=g*k+_*R+S*_t+M*X,u[5]=g*z+_*F+S*ft+M*St,u[9]=g*j+_*ot+S*O+M*w,u[13]=g*D+_*st+S*K+M*q,u[2]=b*k+C*R+x*_t+v*X,u[6]=b*z+C*F+x*ft+v*St,u[10]=b*j+C*ot+x*O+v*w,u[14]=b*D+C*st+x*K+v*q,u[3]=I*k+P*R+U*_t+V*X,u[7]=I*z+P*F+U*ft+V*St,u[11]=I*j+P*ot+U*O+V*w,u[15]=I*D+P*st+U*K+V*q,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],M=t[14],b=t[3],C=t[7],x=t[11],v=t[15];return b*(+u*m*_-l*p*_-u*d*S+r*p*S+l*d*M-r*m*M)+C*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+x*(+i*p*_-i*d*M-u*h*_+r*h*M+u*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*h*_-r*h*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],M=t[11],b=t[12],C=t[13],x=t[14],v=t[15],I=_*x*p-C*S*p+C*m*M-d*x*M-_*m*v+d*S*v,P=b*S*p-g*x*p-b*m*M+h*x*M+g*m*v-h*S*v,U=g*C*p-b*_*p+b*d*M-h*C*M-g*d*v+h*_*v,V=b*_*m-g*C*m-b*d*S+h*C*S+g*d*x-h*_*x,k=i*I+r*P+l*U+u*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return t[0]=I*z,t[1]=(C*S*u-_*x*u-C*l*M+r*x*M+_*l*v-r*S*v)*z,t[2]=(d*x*u-C*m*u+C*l*p-r*x*p-d*l*v+r*m*v)*z,t[3]=(_*m*u-d*S*u-_*l*p+r*S*p+d*l*M-r*m*M)*z,t[4]=P*z,t[5]=(g*x*u-b*S*u+b*l*M-i*x*M-g*l*v+i*S*v)*z,t[6]=(b*m*u-h*x*u-b*l*p+i*x*p+h*l*v-i*m*v)*z,t[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*z,t[8]=U*z,t[9]=(b*_*u-g*C*u-b*r*M+i*C*M+g*r*v-i*_*v)*z,t[10]=(h*C*u-b*d*u+b*r*p-i*C*p-h*r*v+i*d*v)*z,t[11]=(g*d*u-h*_*u-g*r*p+i*_*p+h*r*M-i*d*M)*z,t[12]=V*z,t[13]=(g*C*l-b*_*l+b*r*S-i*C*S-g*r*x+i*_*x)*z,t[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*x-i*d*x)*z,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*S+i*d*S)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,S=u*p,M=u*g,b=u*_,C=h*g,x=h*_,v=d*_,I=m*p,P=m*g,U=m*_,V=r.x,k=r.y,z=r.z;return l[0]=(1-(C+v))*V,l[1]=(M+U)*V,l[2]=(b-P)*V,l[3]=0,l[4]=(M-U)*k,l[5]=(1-(S+v))*k,l[6]=(x+I)*k,l[7]=0,l[8]=(b+P)*z,l[9]=(x-I)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/u,g=1/h,_=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,i.setFromRotationMatrix(hi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ea){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let M,b;if(d===ea)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===bc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ea){const m=this.elements,p=1/(i-t),g=1/(r-l),_=1/(h-u),S=(i+t)*p,M=(r+l)*g;let b,C;if(d===ea)b=(h+u)*_,C=-2*_;else if(d===bc)b=u*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new tt,hi=new Ye,Gy=new tt(0,0,0),Vy=new tt(1,1,1),Na=new tt,ec=new tt,Kn=new tt,u_=new Ye,f_=new Io;class Ri{constructor(t=0,i=0,r=0,l=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return u_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(u_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ky=0;const h_=new tt,ss=new Io,ji=new Ye,nc=new tt,To=new tt,Xy=new tt,Wy=new Io,d_=new tt(1,0,0),p_=new tt(0,1,0),m_=new tt(0,0,1),g_={type:"added"},qy={type:"removed"},os={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Dn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new tt,i=new Ri,r=new Io,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new fe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(d_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return h_.copy(t).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(d_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nc.copy(t):nc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(To,nc,this.up):ji.lookAt(nc,To,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(ji),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qy),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,Xy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new tt(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new tt,Ki=new tt,Zf=new tt,Qi=new tt,ls=new tt,cs=new tt,__=new tt,jf=new tt,Kf=new tt,Qf=new tt,Jf=new He,$f=new He,th=new He;class pi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){di.subVectors(l,i),Ki.subVectors(r,i),Zf.subVectors(t,i);const h=di.dot(di),d=di.dot(Ki),m=di.dot(Zf),p=Ki.dot(Ki),g=Ki.dot(Zf),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return Jf.setScalar(0),$f.setScalar(0),th.setScalar(0),Jf.fromBufferAttribute(t,i),$f.fromBufferAttribute(t,r),th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Jf,u.x),h.addScaledVector($f,u.y),h.addScaledVector(th,u.z),h}static isFrontFacing(t,i,r,l){return di.subVectors(r,i),Ki.subVectors(t,i),di.cross(Ki).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),di.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;ls.subVectors(l,r),cs.subVectors(u,r),jf.subVectors(t,r);const m=ls.dot(jf),p=cs.dot(jf);if(m<=0&&p<=0)return i.copy(r);Kf.subVectors(t,l);const g=ls.dot(Kf),_=cs.dot(Kf);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ls,h);Qf.subVectors(t,u);const M=ls.dot(Qf),b=cs.dot(Qf);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(cs,d);const x=g*b-M*_;if(x<=0&&_-g>=0&&M-b>=0)return __.subVectors(u,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(__,d);const v=1/(x+C+S);return h=C*v,d=S*v,i.copy(r).addScaledVector(ls,h).addScaledVector(cs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ic={h:0,s:0,l:0};function eh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=wy(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=eh(h,u,t+1/3),this.g=eh(h,u,t),this.b=eh(h,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=_v[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ce.workingToColorSpace(wn.copy(this),t),Math.round(Me(wn.r*255,0,255))*65536+Math.round(Me(wn.g*255,0,255))*256+Math.round(Me(wn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=oi){Ce.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(ic);const r=If(Pa.h,ic.h,i),l=If(Pa.s,ic.s,i),u=If(Pa.l,ic.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Te;Te.NAMES=_v;let Yy=0;class zo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=gs,this.side=ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vv extends zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new tt,ac=new be;let Zy=0;class bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=a_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(t),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==a_&&(t.usage=this.usage),t}}class Sv extends bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class yv extends bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class vr extends bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let jy=0;const si=new Ye,nh=new Dn,us=new tt,Qn=new xr,bo=new xr,Sn=new tt;class Mr extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?yv:Sv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(Qn.min,bo.min),Qn.expandByPoint(Sn),Sn.addVectors(Qn.max,bo.max),Qn.expandByPoint(Sn)):(Qn.expandByPoint(bo.min),Qn.expandByPoint(bo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(us.fromBufferAttribute(t,p),Sn.add(us)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new tt,m[j]=new tt;const p=new tt,g=new tt,_=new tt,S=new be,M=new be,b=new be,C=new tt,x=new tt;function v(j,D,R){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,R),S.fromBufferAttribute(u,j),M.fromBufferAttribute(u,D),b.fromBufferAttribute(u,R),g.sub(p),_.sub(p),M.sub(S),b.sub(S);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(F),x.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(F),d[j].add(C),d[D].add(C),d[R].add(C),m[j].add(x),m[D].add(x),m[R].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let j=0,D=I.length;j<D;++j){const R=I[j],F=R.start,ot=R.count;for(let st=F,_t=F+ot;st<_t;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const P=new tt,U=new tt,V=new tt,k=new tt;function z(j){V.fromBufferAttribute(l,j),k.copy(V);const D=d[j];P.copy(D),P.sub(V.multiplyScalar(V.dot(D))).normalize(),U.crossVectors(k,D);const F=U.dot(m[j])<0?-1:1;h.setXYZW(j,P.x,P.y,P.z,F)}for(let j=0,D=I.length;j<D;++j){const R=I[j],F=R.start,ot=R.count;for(let st=F,_t=F+ot;st<_t;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,_=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),C=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*g;for(let v=0;v<g;v++)S[b++]=p[M++]}return new bi(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=t(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Ye,lr=new gv,rc=new hd,S_=new tt,sc=new tt,oc=new tt,lc=new tt,ih=new tt,cc=new tt,y_=new tt,uc=new tt;class Hn extends Dn{constructor(t=new Mr,i=new vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){cc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(ih.fromBufferAttribute(_,t),h?cc.addScaledVector(ih,g):cc.addScaledVector(ih.sub(i),g))}i.add(cc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(u),lr.copy(t.ray).recast(t.near),!(rc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(rc,S_)===null||lr.origin.distanceToSquared(S_)>(t.far-t.near)**2))&&(v_.copy(u).invert(),lr.copy(t.ray).applyMatrix4(v_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,lr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],v=h[x.materialIndex],I=Math.max(x.start,M.start),P=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let U=I,V=P;U<V;U+=3){const k=d.getX(U),z=d.getX(U+1),j=d.getX(U+2);l=fc(this,v,t,r,p,g,_,k,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let x=b,v=C;x<v;x+=3){const I=d.getX(x),P=d.getX(x+1),U=d.getX(x+2);l=fc(this,h,t,r,p,g,_,I,P,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],v=h[x.materialIndex],I=Math.max(x.start,M.start),P=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let U=I,V=P;U<V;U+=3){const k=U,z=U+1,j=U+2;l=fc(this,v,t,r,p,g,_,k,z,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let x=b,v=C;x<v;x+=3){const I=x,P=x+1,U=x+2;l=fc(this,h,t,r,p,g,_,I,P,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Ky(o,t,i,r,l,u,h,d){let m;if(t.side===Gn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===ia,d),m===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function fc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,sc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const g=Ky(o,t,i,r,sc,oc,lc,y_);if(g){const _=new tt;pi.getBarycoord(y_,sc,oc,lc,_),l&&(g.uv=pi.getInterpolatedAttribute(l,d,m,p,_,new be)),u&&(g.uv1=pi.getInterpolatedAttribute(u,d,m,p,_,new be)),h&&(g.normal=pi.getInterpolatedAttribute(h,d,m,p,_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new tt,materialIndex:0};pi.getNormal(sc,oc,lc,S.normal),g.face=S,g.barycoord=_}return g}class bs extends Mr{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(g,3)),this.setAttribute("uv",new vr(_,2));function b(C,x,v,I,P,U,V,k,z,j,D){const R=U/z,F=V/j,ot=U/2,st=V/2,_t=k/2,ft=z+1,O=j+1;let K=0,X=0;const St=new tt;for(let w=0;w<O;w++){const q=w*F-st;for(let dt=0;dt<ft;dt++){const yt=dt*R-ot;St[C]=yt*I,St[x]=q*P,St[v]=_t,p.push(St.x,St.y,St.z),St[C]=0,St[x]=0,St[v]=k>0?1:-1,g.push(St.x,St.y,St.z),_.push(dt/z),_.push(1-w/j),K+=1}}for(let w=0;w<j;w++)for(let q=0;q<z;q++){const dt=S+q+ft*w,yt=S+q+ft*(w+1),Q=S+(q+1)+ft*(w+1),mt=S+(q+1)+ft*w;m.push(dt,yt,mt),m.push(yt,Q,mt),X+=6}d.addGroup(M,X,D),M+=X,S+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)t[l]=r[l]}return t}function Qy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function xv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Jy={clone:Es,merge:Ln};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Qy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Mv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new tt,x_=new be,M_=new be;class Jn extends Mv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$h*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $h*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,x_,M_),i.subVectors(M_,x_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class ex extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(fs,hs,t,i);l.layers=this.layers,this.add(l);const u=new Jn(fs,hs,t,i);u.layers=this.layers,this.add(u);const h=new Jn(fs,hs,t,i);h.layers=this.layers,this.add(h);const d=new Jn(fs,hs,t,i);d.layers=this.layers,this.add(d);const m=new Jn(fs,hs,t,i);m.layers=this.layers,this.add(m);const p=new Jn(fs,hs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ev extends Nn{constructor(t=[],i=ys,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nx extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new bs(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:za});u.uniforms.tEquirect.value=i;const h=new Hn(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ti),new ex(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class hc extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ix={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const x=i.getJointPose(C,r),v=this._getHandJoint(p,C);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class pd{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Te(t),this.near=i,this.far=r}clone(){return new pd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ax extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const rh=new tt,rx=new tt,sx=new fe;class hr{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rh.subVectors(r,i).cross(rx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||sx.getNormalMatrix(t),l=this.coplanarPoint(rh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new hd,ox=new be(.5,.5),dc=new tt;class md{constructor(t=new hr,i=new hr,r=new hr,l=new hr,u=new hr,h=new hr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],S=l[7],M=l[8],b=l[9],C=l[10],x=l[11],v=l[12],I=l[13],P=l[14],U=l[15];if(r[0].setComponents(m-u,S-p,x-M,U-v).normalize(),r[1].setComponents(m+u,S+p,x+M,U+v).normalize(),r[2].setComponents(m+h,S+g,x+b,U+I).normalize(),r[3].setComponents(m-h,S-g,x-b,U-I).normalize(),r[4].setComponents(m-d,S-_,x-C,U-P).normalize(),i===ea)r[5].setComponents(m+d,S+_,x+C,U+P).normalize();else if(i===bc)r[5].setComponents(d,_,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);const i=ox.distanceTo(t.center);return cr.radius=.7071067811865476+i,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Nn{constructor(t,i,r=Sr,l,u,h,d=gi,m=gi,p,g=Lo,_=1){if(g!==Lo&&g!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ia extends Mr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,M=[],b=[],C=[],x=[];for(let v=0;v<g;v++){const I=v*S-h;for(let P=0;P<p;P++){const U=P*_-u;b.push(U,-I,0),C.push(0,0,1),x.push(P/d),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const P=I+p*v,U=I+p*(v+1),V=I+1+p*(v+1),k=I+1+p*v;M.push(P,U,k),M.push(U,V,k)}this.setIndex(M),this.setAttribute("position",new vr(b,3)),this.setAttribute("normal",new vr(C,3)),this.setAttribute("uv",new vr(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ao extends zo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lx extends zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cx extends zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ux{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,S=p.length;_<S;_+=2){const M=p[_],b=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null}}}const fx=new ux;class gd{constructor(t){this.manager=t!==void 0?t:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ds=new WeakMap;class hx extends gd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=sh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let _=ds.get(h);_===void 0&&(_=[],ds.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Po("img");function m(){g(),i&&i(this);const _=ds.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onLoad&&M.onLoad(this)}ds.delete(this),u.manager.itemEnd(t)}function p(_){g(),l&&l(_),sh.remove(`image:${t}`);const S=ds.get(this)||[];for(let M=0;M<S.length;M++){const b=S[M];b.onError&&b.onError(_)}ds.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),sh.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class E_ extends gd{constructor(t){super(t)}load(t,i,r,l){const u=new Nn,h=new hx(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class _d extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const oh=new Ye,T_=new tt,b_=new tt;class bv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;T_.setFromMatrixPosition(t.matrixWorld),i.position.copy(T_),b_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(b_),i.updateMatrixWorld(),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const A_=new Ye,Ro=new tt,lh=new tt;class dx extends bv{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Ro.setFromMatrixPosition(t.matrixWorld),r.position.copy(Ro),lh.copy(r.position),lh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(lh),r.updateMatrixWorld(),l.makeTranslation(-Ro.x,-Ro.y,-Ro.z),A_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A_)}}class pc extends _d{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new dx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Av extends Mv{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class px extends bv{constructor(){super(new Av(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mx extends _d{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new px}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gx extends _d{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _x extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const R_=new Ye;class Sx{constructor(t,i,r=0,l=1/0){this.ray=new gv(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return R_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R_),this}intersectObject(t,i=!0,r=[]){return td(t,this,r,i),r.sort(C_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)td(t[l],this,r,i);return r.sort(C_),r}}function C_(o,t){return o.distance-t.distance}function td(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)td(u[h],t,i,!0)}}function w_(o,t,i,r){const l=yx(r);switch(i){case ov:return o*t;case cv:return o*t/l.components*l.byteLength;case ld:return o*t/l.components*l.byteLength;case uv:return o*t*2/l.components*l.byteLength;case cd:return o*t*2/l.components*l.byteLength;case lv:return o*t*3/l.components*l.byteLength;case mi:return o*t*4/l.components*l.byteLength;case ud:return o*t*4/l.components*l.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yc:case xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ch:case Dh:return Math.max(o,16)*Math.max(t,8)/4;case Rh:case wh:return Math.max(o,8)*Math.max(t,8)/2;case Uh:case Lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case zh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Zh:case jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case fv:case Kh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yx(o){switch(o){case Ai:case av:return{byteLength:1,components:1};case Do:case rv:case Oo:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case Sr:case rd:case ta:return{byteLength:4,components:1};case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function xx(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],C=_[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const C=_[M];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Mx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:bx,alphatest_fragment:Ax,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:wx,batching_pars_vertex:Dx,batching_vertex:Ux,begin_vertex:Lx,beginnormal_vertex:Nx,bsdfs:Px,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:kx,color_vertex:Xx,common:Wx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:Zx,displacementmap_vertex:jx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,colorspace_fragment:Jx,colorspace_pars_fragment:$x,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:dM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:SM,lights_physical_pars_fragment:yM,lights_fragment_begin:xM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:RM,map_fragment:CM,map_pars_fragment:wM,map_particle_fragment:DM,map_particle_pars_fragment:UM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:NM,morphinstance_vertex:PM,morphcolor_vertex:OM,morphnormal_vertex:BM,morphtarget_pars_vertex:IM,morphtarget_vertex:zM,normal_fragment_begin:FM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:ZM,opaque_fragment:jM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:SE,worldpos_vertex:yE,background_vert:xE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:RE,depth_frag:CE,distanceRGBA_vert:wE,distanceRGBA_frag:DE,equirect_vert:UE,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:PE,meshbasic_vert:OE,meshbasic_frag:BE,meshlambert_vert:IE,meshlambert_frag:zE,meshmatcap_vert:FE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:XE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:ZE,points_vert:jE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tT},Lt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ei={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ei.physical={uniforms:Ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const mc={r:0,b:0,g:0},ur=new Ri,eT=new Ye;function nT(o,t,i,r,l,u,h){const d=new Te(0);let m=u===!0?0:1,p,g,_=null,S=0,M=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function C(P){let U=!1;const V=b(P);V===null?v(d,m):V&&V.isColor&&(v(V,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(P,U){const V=b(U);V&&(V.isCubeTexture||V.mapping===Ac)?(g===void 0&&(g=new Hn(new bs(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Es(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(U.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(ur)),g.material.toneMapped=Ce.getTransfer(V.colorSpace)!==Fe,(_!==V||S!==V.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=V,S=V.version,M=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Hn(new Ia(2,2),new Ha({name:"BackgroundMaterial",uniforms:Es(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(V.colorSpace)!==Fe,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||S!==V.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=V,S=V.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,U){P.getRGB(mc,xv(o)),r.buffers.color.setClear(mc.r,mc.g,mc.b,U,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(d,m)},render:C,addToRenderList:x,dispose:I}}function iT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(R,F,ot,st,_t){let ft=!1;const O=_(st,ot,F);u!==O&&(u=O,p(u.object)),ft=M(R,st,ot,_t),ft&&b(R,st,ot,_t),_t!==null&&t.update(_t,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(R,F,ot,st),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,F,ot){const st=ot.wireframe===!0;let _t=r[R.id];_t===void 0&&(_t={},r[R.id]=_t);let ft=_t[F.id];ft===void 0&&(ft={},_t[F.id]=ft);let O=ft[st];return O===void 0&&(O=S(m()),ft[st]=O),O}function S(R){const F=[],ot=[],st=[];for(let _t=0;_t<i;_t++)F[_t]=0,ot[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ot,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,F,ot,st){const _t=u.attributes,ft=F.attributes;let O=0;const K=ot.getAttributes();for(const X in K)if(K[X].location>=0){const w=_t[X];let q=ft[X];if(q===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),w===void 0||w.attribute!==q||q&&w.data!==q.data)return!0;O++}return u.attributesNum!==O||u.index!==st}function b(R,F,ot,st){const _t={},ft=F.attributes;let O=0;const K=ot.getAttributes();for(const X in K)if(K[X].location>=0){let w=ft[X];w===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(w=R.instanceColor));const q={};q.attribute=w,w&&w.data&&(q.data=w.data),_t[X]=q,O++}u.attributes=_t,u.attributesNum=O,u.index=st}function C(){const R=u.newAttributes;for(let F=0,ot=R.length;F<ot;F++)R[F]=0}function x(R){v(R,0)}function v(R,F){const ot=u.newAttributes,st=u.enabledAttributes,_t=u.attributeDivisors;ot[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),_t[R]!==F&&(o.vertexAttribDivisor(R,F),_t[R]=F)}function I(){const R=u.newAttributes,F=u.enabledAttributes;for(let ot=0,st=F.length;ot<st;ot++)F[ot]!==R[ot]&&(o.disableVertexAttribArray(ot),F[ot]=0)}function P(R,F,ot,st,_t,ft,O){O===!0?o.vertexAttribIPointer(R,F,ot,_t,ft):o.vertexAttribPointer(R,F,ot,st,_t,ft)}function U(R,F,ot,st){C();const _t=st.attributes,ft=ot.getAttributes(),O=F.defaultAttributeValues;for(const K in ft){const X=ft[K];if(X.location>=0){let St=_t[K];if(St===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const w=St.normalized,q=St.itemSize,dt=t.get(St);if(dt===void 0)continue;const yt=dt.buffer,Q=dt.type,mt=dt.bytesPerElement,xt=Q===o.INT||Q===o.UNSIGNED_INT||St.gpuType===rd;if(St.isInterleavedBufferAttribute){const At=St.data,Rt=At.stride,oe=St.offset;if(At.isInstancedInterleavedBuffer){for(let jt=0;jt<X.locationSize;jt++)v(X.location+jt,At.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let jt=0;jt<X.locationSize;jt++)x(X.location+jt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let jt=0;jt<X.locationSize;jt++)P(X.location+jt,q/X.locationSize,Q,w,Rt*mt,(oe+q/X.locationSize*jt)*mt,xt)}else{if(St.isInstancedBufferAttribute){for(let At=0;At<X.locationSize;At++)v(X.location+At,St.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let At=0;At<X.locationSize;At++)x(X.location+At);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let At=0;At<X.locationSize;At++)P(X.location+At,q/X.locationSize,Q,w,q*mt,q/X.locationSize*At*mt,xt)}}else if(O!==void 0){const w=O[K];if(w!==void 0)switch(w.length){case 2:o.vertexAttrib2fv(X.location,w);break;case 3:o.vertexAttrib3fv(X.location,w);break;case 4:o.vertexAttrib4fv(X.location,w);break;default:o.vertexAttrib1fv(X.location,w)}}}}I()}function V(){j();for(const R in r){const F=r[R];for(const ot in F){const st=F[ot];for(const _t in st)g(st[_t].object),delete st[_t];delete F[ot]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const ot in F){const st=F[ot];for(const _t in st)g(st[_t].object),delete st[_t];delete F[ot]}delete r[R.id]}function z(R){for(const F in r){const ot=r[F];if(ot[R.id]===void 0)continue;const st=ot[R.id];for(const _t in st)g(st[_t].object),delete st[_t];delete ot[R.id]}}function j(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:x,disableUnusedAttributes:I}}function aT(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,r,1)}function m(p,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let b=0;for(let C=0;C<_;C++)b+=g[C]*S[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function rT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==mi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ai&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ta&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:V,maxSamples:k}}function sT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new hr,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,v=o.get(_);if(!l||b===null||b.length===0||u&&!x)u?g(null):p();else{const I=u?0:r,P=I*4;let U=v.clippingState||null;m.value=U,U=g(b,S,P,M);for(let V=0;V!==P;++V)U[V]=i[V];v.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,M,b){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=m.value,b!==!0||x===null){const v=M+C*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,U=M;P!==C;++P,U+=4)h.copy(_[P]).applyMatrix4(I,d),h.normal.toArray(x,U),x[U+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,x}}function oT(o){let t=new WeakMap;function i(h,d){return d===Th?h.mapping=ys:d===bh&&(h.mapping=xs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Th||d===bh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new nx(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ms=4,D_=[.125,.215,.35,.446,.526,.582],mr=20,ch=new Av,U_=new Te;let uh=null,fh=0,hh=0,dh=!1;const dr=(1+Math.sqrt(5))/2,ps=1/dr,L_=[new tt(-dr,ps,0),new tt(dr,ps,0),new tt(-ps,0,dr),new tt(ps,0,dr),new tt(0,dr,-ps),new tt(0,dr,ps),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],lT=new tt;class N_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=lT}=u;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,hh),this._renderer.xr.enabled=dh,t.scissorTest=!1,gc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ys||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Oo,format:mi,colorSpace:Ms,depthBuffer:!1},l=P_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(u)),this._blurMaterial=uT(u,t,i)}return l}_compileMaterial(t){const i=new Hn(this._lodPlanes[0],t);this._renderer.compile(i,ch)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(U_),_.toneMapping=Fa,_.autoClear=!1;const b=new vv({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),C=new Hn(new bs,b);let x=!1;const v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,x=!0):(b.color.copy(U_),x=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[I],u.y,u.z)):P===1?(m.up.set(0,0,p[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[I],u.z)):(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[I]));const U=this._cubeSize;gc(l,P*U,I>2?U:0,U,U),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=M,_.autoClear=S,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ys||t.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Hn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;gc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=L_[(l-u-1)%L_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Hn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),C=u/b,x=isFinite(u)?1+Math.floor(g*C):mr;x>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${mr}`);const v=[];let I=0;for(let z=0;z<mr;++z){const j=z/C,D=Math.exp(-j*j/2);v.push(D),z===0?I+=D:z<x&&(I+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/I;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-r;const U=this._sizeLods[l],V=3*U*(l>P-ms?l-P+ms:0),k=4*(this._cubeSize-U);gc(i,V,k,3*U,2*U),m.setRenderTarget(i),m.render(_,ch)}}function cT(o){const t=[],i=[],r=[];let l=o;const u=o-ms+1+D_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ms?m=D_[h-o+ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,C=3,x=2,v=1,I=new Float32Array(C*b*M),P=new Float32Array(x*b*M),U=new Float32Array(v*b*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,j=k>2?0:-1,D=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];I.set(D,C*b*k),P.set(S,x*b*k);const R=[k,k,k,k,k,k];U.set(R,v*b*k)}const V=new Mr;V.setAttribute("position",new bi(I,C)),V.setAttribute("uv",new bi(P,x)),V.setAttribute("faceIndex",new bi(U,v)),t.push(V),l>ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function P_(o,t,i){const r=new yr(o,t,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function uT(o,t,i){const r=new Float32Array(mr),l=new tt(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function O_(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function B_(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Th||m===bh,g=m===ys||m===xs;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new N_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new N_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function dT(o,t,i,r){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,b=_.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let P=0,U=I.length;P<U;P+=3){const V=I[P+0],k=I[P+1],z=I[P+2];S.push(V,k,k,z,z,V)}}else if(b!==void 0){const I=b.array;C=b.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const V=P+0,k=P+1,z=P+2;S.push(V,k,k,z,z,V)}}else return;const x=new(pv(S)?yv:Sv)(S,1);x.version=C;const v=u.get(_);v&&t.remove(v),u.set(_,x)}function g(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function pT(o,t,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*h,b),i.update(M,r,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let x=0;for(let v=0;v<b;v++)x+=M[v];i.update(x,r,1)}function _(S,M,b,C){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/h,M[v],C[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,b);let v=0;for(let I=0;I<b;I++)v+=M[I]*C[I];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function mT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function gT(o,t,i){const r=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let R=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),x===!0&&(U=3);let V=d.attributes.position.count*U,k=1;V>t.maxTextureSize&&(k=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const z=new Float32Array(V*k*4*_),j=new mv(z,V,k,_);j.type=ta,j.needsUpdate=!0;const D=U*4;for(let F=0;F<_;F++){const ot=v[F],st=I[F],_t=P[F],ft=V*k*4*F;for(let O=0;O<ot.count;O++){const K=O*D;b===!0&&(l.fromBufferAttribute(ot,O),z[ft+K+0]=l.x,z[ft+K+1]=l.y,z[ft+K+2]=l.z,z[ft+K+3]=0),C===!0&&(l.fromBufferAttribute(st,O),z[ft+K+4]=l.x,z[ft+K+5]=l.y,z[ft+K+6]=l.z,z[ft+K+7]=0),x===!0&&(l.fromBufferAttribute(_t,O),z[ft+K+8]=l.x,z[ft+K+9]=l.y,z[ft+K+10]=l.z,z[ft+K+11]=_t.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new be(V,k)},r.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function _T(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Cv=new Nn,I_=new Tv(1,1),wv=new mv,Dv=new Fy,Uv=new Ev,z_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function As(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=z_[l];if(u===void 0&&(u=new Float32Array(l),z_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Rc(o,t){let i=F_[t];i===void 0&&(i=new Int32Array(t),F_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function vT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function MT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;V_.set(r),o.uniformMatrix2fv(this.addr,!1,V_),hn(i,r)}}function ET(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;G_.set(r),o.uniformMatrix3fv(this.addr,!1,G_),hn(i,r)}}function TT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;H_.set(r),o.uniformMatrix4fv(this.addr,!1,H_),hn(i,r)}}function bT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function NT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(I_.compareFunction=dv,u=I_):u=Cv,i.setTexture2D(t||u,l)}function PT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Dv,l)}function OT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Uv,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||wv,l)}function IT(o){switch(o){case 5126:return vT;case 35664:return ST;case 35665:return yT;case 35666:return xT;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return bT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return wT;case 36294:return DT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return BT}}function zT(o,t){o.uniform1fv(this.addr,t)}function FT(o,t){const i=As(t,this.size,2);o.uniform2fv(this.addr,i)}function HT(o,t){const i=As(t,this.size,3);o.uniform3fv(this.addr,i)}function GT(o,t){const i=As(t,this.size,4);o.uniform4fv(this.addr,i)}function VT(o,t){const i=As(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kT(o,t){const i=As(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function XT(o,t){const i=As(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function WT(o,t){o.uniform1iv(this.addr,t)}function qT(o,t){o.uniform2iv(this.addr,t)}function YT(o,t){o.uniform3iv(this.addr,t)}function ZT(o,t){o.uniform4iv(this.addr,t)}function jT(o,t){o.uniform1uiv(this.addr,t)}function KT(o,t){o.uniform2uiv(this.addr,t)}function QT(o,t){o.uniform3uiv(this.addr,t)}function JT(o,t){o.uniform4uiv(this.addr,t)}function $T(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Cv,u[h])}function tb(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dv,u[h])}function eb(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Uv,u[h])}function nb(o,t,i){const r=this.cache,l=t.length,u=Rc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wv,u[h])}function ib(o){switch(o){case 5126:return zT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return ZT;case 5125:return jT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}class ab{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IT(i.type)}}class rb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ib(i.type)}}class sb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function k_(o,t){o.seq.push(t),o.map[t.id]=t}function ob(o,t,i){const r=o.name,l=r.length;for(ph.lastIndex=0;;){const u=ph.exec(r),h=ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){k_(i,p===void 0?new ab(d,o,t):new rb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new sb(d),k_(i,_)),i=_}}}class Ec{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);ob(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function X_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const lb=37297;let cb=0;function ub(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const W_=new fe;function fb(o){Ce._getMatrix(W_,Ce.workingColorSpace,o);const t=`mat3( ${W_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Tc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function q_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ub(o.getShaderSource(t),h)}else return l}function hb(o,t){const i=fb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function db(o,t){let i;switch(t){case fy:i="Linear";break;case hy:i="Reinhard";break;case dy:i="Cineon";break;case py:i="ACESFilmic";break;case gy:i="AgX";break;case _y:i="Neutral";break;case my:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new tt;function pb(){Ce.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),t=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function gb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function _b(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Co(o){return o!==""}function Y_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(vb,yb)}const Sb=new Map;function yb(o,t){let i=de[t];if(i===void 0){const r=Sb.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ed(i)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(xb,Mb)}function Mb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function K_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Eb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===nv?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Tb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case xs:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ab(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ad:t="ENVMAP_BLENDING_MULTIPLY";break;case cy:t="ENVMAP_BLENDING_MIX";break;case uy:t="ENVMAP_BLENDING_ADD";break}return t}function Rb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Cb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Eb(i),p=Tb(i),g=bb(i),_=Ab(i),S=Rb(i),M=mb(i),b=gb(u),C=l.createProgram();let x,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),v.length>0&&(v+=`
`)):(x=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),v=[K_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?de.tonemapping_pars_fragment:"",i.toneMapping!==Fa?db("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,hb("linearToOutputTexel",i.outputColorSpace),pb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Co).join(`
`)),h=ed(h),h=Y_(h,i),h=Z_(h,i),d=ed(d),d=Y_(d,i),d=Z_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=I+x+h,U=I+v+d,V=X_(l,l.VERTEX_SHADER,P),k=X_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,V),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(F){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(V).trim(),_t=l.getShaderInfoLog(k).trim();let ft=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,k);else{const K=q_(l,V,"vertex"),X=q_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+K+`
`+X)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(st===""||_t==="")&&(O=!1);O&&(F.diagnostics={runnable:ft,programLog:ot,vertexShader:{log:st,prefix:x},fragmentShader:{log:_t,prefix:v}})}l.deleteShader(V),l.deleteShader(k),j=new Ec(l,C),D=_b(l,C)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,lb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=k,this}let wb=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Ub(t),i.set(t,r)),r}}class Ub{constructor(t){this.id=wb++,this.code=t,this.usedTimes=0}}function Lb(o,t,i,r,l,u,h){const d=new dd,m=new Db,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,R,F,ot,st){const _t=ot.fog,ft=st.geometry,O=D.isMeshStandardMaterial?ot.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),X=K&&K.mapping===Ac?K.image.height:null,St=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const w=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,q=w!==void 0?w.length:0;let dt=0;ft.morphAttributes.position!==void 0&&(dt=1),ft.morphAttributes.normal!==void 0&&(dt=2),ft.morphAttributes.color!==void 0&&(dt=3);let yt,Q,mt,xt;if(St){const Ae=Ei[St];yt=Ae.vertexShader,Q=Ae.fragmentShader}else yt=D.vertexShader,Q=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const At=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,jt=st.isBatchedMesh===!0,Yt=!!D.map,pe=!!D.matcap,ce=!!K,B=!!D.aoMap,Ze=!!D.lightMap,me=!!D.bumpMap,Qt=!!D.normalMap,Ht=!!D.displacementMap,le=!!D.emissiveMap,Kt=!!D.metalnessMap,se=!!D.roughnessMap,Je=D.anisotropy>0,L=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,ut=D.sheen>0,pt=D.transmission>0,lt=Je&&!!D.anisotropyMap,Pt=L&&!!D.clearcoatMap,Dt=L&&!!D.clearcoatNormalMap,Gt=L&&!!D.clearcoatRoughnessMap,Vt=et&&!!D.iridescenceMap,Mt=et&&!!D.iridescenceThicknessMap,Ot=ut&&!!D.sheenColorMap,qt=ut&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Ct=!!D.specularColorMap,re=!!D.specularIntensityMap,G=pt&&!!D.transmissionMap,Ut=pt&&!!D.thicknessMap,Et=!!D.gradientMap,Bt=!!D.alphaMap,bt=D.alphaTest>0,vt=!!D.alphaHash,zt=!!D.extensions;let ae=Fa;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Le={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:jt,batchingColor:jt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ms,alphaToCoverage:!!D.alphaToCoverage,map:Yt,matcap:pe,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:Ze,bumpMap:me,normalMap:Qt,displacementMap:S&&Ht,emissiveMap:le,normalMapObjectSpace:Qt&&D.normalMapType===xy,normalMapTangentSpace:Qt&&D.normalMapType===hv,metalnessMap:Kt,roughnessMap:se,anisotropy:Je,anisotropyMap:lt,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:Mt,sheen:ut,sheenColorMap:Ot,sheenRoughnessMap:qt,specularMap:Zt,specularColorMap:Ct,specularIntensityMap:re,transmission:pt,transmissionMap:G,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===gs&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:bt,alphaHash:vt,combine:D.combine,mapUv:Yt&&C(D.map.channel),aoMapUv:B&&C(D.aoMap.channel),lightMapUv:Ze&&C(D.lightMap.channel),bumpMapUv:me&&C(D.bumpMap.channel),normalMapUv:Qt&&C(D.normalMap.channel),displacementMapUv:Ht&&C(D.displacementMap.channel),emissiveMapUv:le&&C(D.emissiveMap.channel),metalnessMapUv:Kt&&C(D.metalnessMap.channel),roughnessMapUv:se&&C(D.roughnessMap.channel),anisotropyMapUv:lt&&C(D.anisotropyMap.channel),clearcoatMapUv:Pt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(D.sheenRoughnessMap.channel),specularMapUv:Zt&&C(D.specularMap.channel),specularColorMapUv:Ct&&C(D.specularColorMap.channel),specularIntensityMapUv:re&&C(D.specularIntensityMap.channel),transmissionMapUv:G&&C(D.transmissionMap.channel),thicknessMapUv:Ut&&C(D.thicknessMap.channel),alphaMapUv:Bt&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Qt||Je),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(Yt||Bt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Rt,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:Yt&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:le&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===$i,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:zt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&D.extensions.multiDraw===!0||jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)R.push(F),R.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(I(R,D),P(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function I(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function P(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=b[D.type];let F;if(R){const ot=Ei[R];F=Jy.clone(ot.uniforms)}else F=D.uniforms;return F}function V(D,R){let F;for(let ot=0,st=g.length;ot<st;ot++){const _t=g[ot];if(_t.cacheKey===R){F=_t,++F.usedTimes;break}}return F===void 0&&(F=new Cb(o,R,D,u),g.push(F)),F}function k(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function j(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:U,acquireProgram:V,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:j}}function Nb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Pb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Q_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function J_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,b,C,x){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:C,group:x},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=C,v.group=x),t++,v}function d(_,S,M,b,C,x){const v=h(_,S,M,b,C,x);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,b,C,x){const v=h(_,S,M,b,C,x);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||Pb),r.length>1&&r.sort(S||Q_),l.length>1&&l.sort(S||Q_)}function g(){for(let _=t,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Ob(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new J_,o.set(r,[h])):l>=u.length?(h=new J_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Bb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Te};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function Ib(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let zb=0;function Fb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Hb(o){const t=new Bb,i=Ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new Ye,h=new Ye;function d(p){let g=0,_=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,C=0,x=0,v=0,I=0,P=0,U=0,V=0,k=0,z=0;p.sort(Fb);for(let D=0,R=p.length;D<R;D++){const F=p[D],ot=F.color,st=F.intensity,_t=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ot.r*st,_+=ot.g*st,S+=ot.b*st;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],st);z++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=F.shadow.matrix,I++}r.directional[M]=O,M++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(ot).multiplyScalar(st),O.distance=_t,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[C]=O;const K=F.shadow;if(F.map&&(r.spotLightMap[V]=F.map,V++,K.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[C]=K.matrix,F.castShadow){const X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=ft,U++}C++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(ot).multiplyScalar(st),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=O,x++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,r.pointShadow[b]=X,r.pointShadowMap[b]=ft,r.pointShadowMatrix[b]=F.shadow.matrix,P++}r.point[b]=O,b++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(st),O.groundColor.copy(F.groundColor).multiplyScalar(st),r.hemi[v]=O,v++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==C||j.rectAreaLength!==x||j.hemiLength!==v||j.numDirectionalShadows!==I||j.numPointShadows!==P||j.numSpotShadows!==U||j.numSpotMaps!==V||j.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=x,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,j.directionalLength=M,j.pointLength=b,j.spotLength=C,j.rectAreaLength=x,j.hemiLength=v,j.numDirectionalShadows=I,j.numPointShadows=P,j.numSpotShadows=U,j.numSpotMaps=V,j.numLightProbes=z,r.version=zb++)}function m(p,g){let _=0,S=0,M=0,b=0,C=0;const x=g.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const P=p[v];if(P.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),_++}else if(P.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),M++}else if(P.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),h.identity(),u.copy(P.matrixWorld),u.premultiply(x),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:r}}function $_(o){const t=new Hb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Gb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new $_(o),t.set(l,[d])):u>=h.length?(d=new $_(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xb(o,t,i){let r=new md;const l=new be,u=new be,h=new He,d=new lx({depthPacking:yy}),m=new cx,p={},g=i.maxTextureSize,_={[ia]:Gn,[Gn]:ia,[$i]:$i},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Vb,fragmentShader:kb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Mr;b.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hn(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let v=this.type;this.render=function(k,z,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(za),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const st=v!==Ji&&this.type===Ji,_t=v===Ji&&this.type!==Ji;for(let ft=0,O=k.length;ft<O;ft++){const K=k[ft],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const St=X.getFrameExtents();if(l.multiply(St),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,X.mapSize.y=u.y)),X.map===null||st===!0||_t===!0){const q=this.type!==Ji?{minFilter:gi,magFilter:gi}:{};X.map!==null&&X.map.dispose(),X.map=new yr(l.x,l.y,q),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const w=X.getViewportCount();for(let q=0;q<w;q++){const dt=X.getViewport(q);h.set(u.x*dt.x,u.y*dt.y,u.x*dt.z,u.y*dt.w),ot.viewport(h),X.updateMatrices(K,q),r=X.getFrustum(),U(z,j,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Ji&&I(X,j),X.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(D,R,F)};function I(k,z){const j=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new yr(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,C,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(z,null,j,M,C,null)}function P(k,z,j,D){let R=null;const F=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)R=F;else if(R=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ot=R.uuid,st=z.uuid;let _t=p[ot];_t===void 0&&(_t={},p[ot]=_t);let ft=_t[st];ft===void 0&&(ft=R.clone(),_t[st]=ft,z.addEventListener("dispose",V)),R=ft}if(R.visible=z.visible,R.wireframe=z.wireframe,D===Ji?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=o.properties.get(R);ot.light=j}return R}function U(k,z,j,D,R){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const st=t.update(k),_t=k.material;if(Array.isArray(_t)){const ft=st.groups;for(let O=0,K=ft.length;O<K;O++){const X=ft[O],St=_t[X.materialIndex];if(St&&St.visible){const w=P(k,St,D,R);k.onBeforeShadow(o,k,z,j,st,w,X),o.renderBufferDirect(j,null,st,w,k,X),k.onAfterShadow(o,k,z,j,st,w,X)}}}else if(_t.visible){const ft=P(k,_t,D,R);k.onBeforeShadow(o,k,z,j,st,ft,null),o.renderBufferDirect(j,null,st,ft,k,null),k.onAfterShadow(o,k,z,j,st,ft,null)}}const ot=k.children;for(let st=0,_t=ot.length;st<_t;st++)U(ot[st],z,j,D,R)}function V(k){k.target.removeEventListener("dispose",V);for(const j in p){const D=p[j],R=k.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Wb={[_h]:vh,[Sh]:Mh,[yh]:Eh,[Ss]:xh,[vh]:_h,[Mh]:Sh,[Eh]:yh,[xh]:Ss};function qb(o,t){function i(){let G=!1;const Ut=new He;let Et=null;const Bt=new He(0,0,0,0);return{setMask:function(bt){Et!==bt&&!G&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){G=bt},setClear:function(bt,vt,zt,ae,Le){Le===!0&&(bt*=ae,vt*=ae,zt*=ae),Ut.set(bt,vt,zt,ae),Bt.equals(Ut)===!1&&(o.clearColor(bt,vt,zt,ae),Bt.copy(Ut))},reset:function(){G=!1,Et=null,Bt.set(-1,0,0,0)}}}function r(){let G=!1,Ut=!1,Et=null,Bt=null,bt=null;return{setReversed:function(vt){if(Ut!==vt){const zt=t.get("EXT_clip_control");vt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(vt){vt?At(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(vt){Et!==vt&&!G&&(o.depthMask(vt),Et=vt)},setFunc:function(vt){if(Ut&&(vt=Wb[vt]),Bt!==vt){switch(vt){case _h:o.depthFunc(o.NEVER);break;case vh:o.depthFunc(o.ALWAYS);break;case Sh:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case xh:o.depthFunc(o.GEQUAL);break;case Mh:o.depthFunc(o.GREATER);break;case Eh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=vt}},setLocked:function(vt){G=vt},setClear:function(vt){bt!==vt&&(Ut&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){G=!1,Et=null,Bt=null,bt=null,Ut=!1}}}function l(){let G=!1,Ut=null,Et=null,Bt=null,bt=null,vt=null,zt=null,ae=null,Le=null;return{setTest:function(Ae){G||(Ae?At(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!G&&(o.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,Vn,dn){(Et!==Ae||Bt!==Vn||bt!==dn)&&(o.stencilFunc(Ae,Vn,dn),Et=Ae,Bt=Vn,bt=dn)},setOp:function(Ae,Vn,dn){(vt!==Ae||zt!==Vn||ae!==dn)&&(o.stencilOp(Ae,Vn,dn),vt=Ae,zt=Vn,ae=dn)},setLocked:function(Ae){G=Ae},setClear:function(Ae){Le!==Ae&&(o.clearStencil(Ae),Le=Ae)},reset:function(){G=!1,Ut=null,Et=null,Bt=null,bt=null,vt=null,zt=null,ae=null,Le=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],b=null,C=!1,x=null,v=null,I=null,P=null,U=null,V=null,k=null,z=new Te(0,0,0),j=0,D=!1,R=null,F=null,ot=null,st=null,_t=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=K>=2);let St=null,w={};const q=o.getParameter(o.SCISSOR_BOX),dt=o.getParameter(o.VIEWPORT),yt=new He().fromArray(q),Q=new He().fromArray(dt);function mt(G,Ut,Et,Bt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(G,vt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<Et;zt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const xt={};xt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(Ss),me(!1),Qt($g),At(o.CULL_FACE),B(za);function At(G){g[G]!==!0&&(o.enable(G),g[G]=!0)}function Rt(G){g[G]!==!1&&(o.disable(G),g[G]=!1)}function oe(G,Ut){return _[G]!==Ut?(o.bindFramebuffer(G,Ut),_[G]=Ut,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function jt(G,Ut){let Et=M,Bt=!1;if(G){Et=S.get(Ut),Et===void 0&&(Et=[],S.set(Ut,Et));const bt=G.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,zt=bt.length;vt<zt;vt++)Et[vt]=o.COLOR_ATTACHMENT0+vt;Et.length=bt.length,Bt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Et)}function Yt(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const pe={[pr]:o.FUNC_ADD,[qS]:o.FUNC_SUBTRACT,[YS]:o.FUNC_REVERSE_SUBTRACT};pe[ZS]=o.MIN,pe[jS]=o.MAX;const ce={[KS]:o.ZERO,[QS]:o.ONE,[JS]:o.SRC_COLOR,[mh]:o.SRC_ALPHA,[ay]:o.SRC_ALPHA_SATURATE,[ny]:o.DST_COLOR,[ty]:o.DST_ALPHA,[$S]:o.ONE_MINUS_SRC_COLOR,[gh]:o.ONE_MINUS_SRC_ALPHA,[iy]:o.ONE_MINUS_DST_COLOR,[ey]:o.ONE_MINUS_DST_ALPHA,[ry]:o.CONSTANT_COLOR,[sy]:o.ONE_MINUS_CONSTANT_COLOR,[oy]:o.CONSTANT_ALPHA,[ly]:o.ONE_MINUS_CONSTANT_ALPHA};function B(G,Ut,Et,Bt,bt,vt,zt,ae,Le,Ae){if(G===za){C===!0&&(Rt(o.BLEND),C=!1);return}if(C===!1&&(At(o.BLEND),C=!0),G!==WS){if(G!==x||Ae!==D){if((v!==pr||U!==pr)&&(o.blendEquation(o.FUNC_ADD),v=pr,U=pr),Ae)switch(G){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t_:o.blendFunc(o.ONE,o.ONE);break;case e_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case t_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case e_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,P=null,V=null,k=null,z.set(0,0,0),j=0,x=G,D=Ae}return}bt=bt||Ut,vt=vt||Et,zt=zt||Bt,(Ut!==v||bt!==U)&&(o.blendEquationSeparate(pe[Ut],pe[bt]),v=Ut,U=bt),(Et!==I||Bt!==P||vt!==V||zt!==k)&&(o.blendFuncSeparate(ce[Et],ce[Bt],ce[vt],ce[zt]),I=Et,P=Bt,V=vt,k=zt),(ae.equals(z)===!1||Le!==j)&&(o.blendColor(ae.r,ae.g,ae.b,Le),z.copy(ae),j=Le),x=G,D=!1}function Ze(G,Ut){G.side===$i?Rt(o.CULL_FACE):At(o.CULL_FACE);let Et=G.side===Gn;Ut&&(Et=!Et),me(Et),G.blending===gs&&G.transparent===!1?B(za):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const Bt=G.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function me(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function Qt(G){G!==kS?(At(o.CULL_FACE),G!==F&&(G===$g?o.cullFace(o.BACK):G===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=G}function Ht(G){G!==ot&&(O&&o.lineWidth(G),ot=G)}function le(G,Ut,Et){G?(At(o.POLYGON_OFFSET_FILL),(st!==Ut||_t!==Et)&&(o.polygonOffset(Ut,Et),st=Ut,_t=Et)):Rt(o.POLYGON_OFFSET_FILL)}function Kt(G){G?At(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function se(G){G===void 0&&(G=o.TEXTURE0+ft-1),St!==G&&(o.activeTexture(G),St=G)}function Je(G,Ut,Et){Et===void 0&&(St===null?Et=o.TEXTURE0+ft-1:Et=St);let Bt=w[Et];Bt===void 0&&(Bt={type:void 0,texture:void 0},w[Et]=Bt),(Bt.type!==G||Bt.texture!==Ut)&&(St!==Et&&(o.activeTexture(Et),St=Et),o.bindTexture(G,Ut||xt[G]),Bt.type=G,Bt.texture=Ut)}function L(){const G=w[St];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(G){yt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function qt(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Zt(G,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let Bt=Et.get(G);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ut,G.name),Et.set(G,Bt))}function Ct(G,Ut){const Bt=p.get(Ut).get(G);m.get(Ut)!==Bt&&(o.uniformBlockBinding(Ut,Bt,G.__bindingPointIndex),m.set(Ut,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,w={},_={},S=new WeakMap,M=[],b=null,C=!1,x=null,v=null,I=null,P=null,U=null,V=null,k=null,z=new Te(0,0,0),j=0,D=!1,R=null,F=null,ot=null,st=null,_t=null,yt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Rt,bindFramebuffer:oe,drawBuffers:jt,useProgram:Yt,setBlending:B,setMaterial:Ze,setFlipSided:me,setCullFace:Qt,setLineWidth:Ht,setPolygonOffset:le,setScissorTest:Kt,activeTexture:se,bindTexture:Je,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:Mt,updateUBOMapping:Zt,uniformBlockBinding:Ct,texStorage2D:Dt,texStorage3D:Gt,texSubImage2D:ut,texSubImage3D:pt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:Ot,viewport:qt,reset:re}}function Yb(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new be,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Po("canvas")}function C(L,E,et){let ut=1;const pt=Je(L);if((pt.width>et||pt.height>et)&&(ut=et/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ut*pt.width),Pt=Math.floor(ut*pt.height);_===void 0&&(_=b(lt,Pt));const Dt=E?b(lt,Pt):_;return Dt.width=lt,Dt.height=Pt,Dt.getContext("2d").drawImage(L,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+lt+"x"+Pt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function x(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,et,ut,pt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Pt=pt?Tc:Ce.getTransfer(ut);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Pt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function U(L,E){let et;return L?E===null||E===Sr||E===Uo?et=o.DEPTH24_STENCIL8:E===ta?et=o.DEPTH32F_STENCIL8:E===Do&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===Uo?et=o.DEPTH_COMPONENT24:E===ta?et=o.DEPTH_COMPONENT32F:E===Do&&(et=o.DEPTH_COMPONENT16),et}function V(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function k(L){const E=L.target;E.removeEventListener("dispose",k),j(E),E.isVideoTexture&&g.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),R(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const et=L.source,ut=S.get(et);if(ut){const pt=ut[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&D(L),Object.keys(ut).length===0&&S.delete(et)}r.remove(L)}function D(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,ut=S.get(et);delete ut[E.__cacheKey],h.memory.textures--}function R(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let pt=0;pt<E.__webglFramebuffer[ut].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let ut=0,pt=et.length;ut<pt;ut++){const lt=r.get(et[ut]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(et[ut])}r.remove(L)}let F=0;function ot(){F=0}function st(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function _t(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ft(L,E){const et=r.get(L);if(L.isVideoTexture&&Kt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(et,L,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function O(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){xt(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function K(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){xt(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function X(L,E){const et=r.get(L);if(L.version>0&&et.__version!==L.version){At(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const St={[wo]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},w={[gi]:o.NEAREST,[vy]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Of]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},q={[My]:o.NEVER,[Cy]:o.ALWAYS,[Ey]:o.LESS,[dv]:o.LEQUAL,[Ty]:o.EQUAL,[Ry]:o.GEQUAL,[by]:o.GREATER,[Ay]:o.NOTEQUAL};function dt(L,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===Of||E.magFilter===jl||E.magFilter===_r||E.minFilter===Ti||E.minFilter===Of||E.minFilter===jl||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,w[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,w[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==jl&&E.minFilter!==_r||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const ut=E.source;let pt=S.get(ut);pt===void 0&&(pt={},S.set(ut,pt));const lt=_t(E);if(lt!==L.__cacheKey){pt[lt]===void 0&&(pt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[lt].usedTimes++;const Pt=pt[L.__cacheKey];Pt!==void 0&&(pt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),L.__cacheKey=lt,L.__webglTexture=pt[lt].texture}return et}function Q(L,E,et){return Math.floor(Math.floor(L/et)/E)}function mt(L,E,et,ut){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ut,E.data);else{lt.sort((Mt,Ot)=>Mt.start-Ot.start);let Pt=0;for(let Mt=1;Mt<lt.length;Mt++){const Ot=lt[Pt],qt=lt[Mt],Zt=Ot.start+Ot.count,Ct=Q(qt.start,E.width,4),re=Q(Ot.start,E.width,4);qt.start<=Zt+1&&Ct===re&&Q(qt.start+qt.count-1,E.width,4)===Ct?Ot.count=Math.max(Ot.count,qt.start+qt.count-Ot.start):(++Pt,lt[Pt]=qt)}lt.length=Pt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ot=lt.length;Mt<Ot;Mt++){const qt=lt[Mt],Zt=Math.floor(qt.start/4),Ct=Math.ceil(qt.count/4),re=Zt%E.width,G=Math.floor(Zt/E.width),Ut=Ct,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,re,G,Ut,Et,et,ut,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function xt(L,E,et){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const pt=yt(L,E),lt=E.source;i.bindTexture(ut,L.__webglTexture,o.TEXTURE0+et);const Pt=r.get(lt);if(lt.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Ce.getPrimaries(Ce.workingColorSpace),Gt=E.colorSpace===Ba?null:Ce.getPrimaries(E.colorSpace),Vt=E.colorSpace===Ba||Dt===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Mt=C(E.image,!1,l.maxTextureSize);Mt=se(E,Mt);const Ot=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Zt=P(E.internalFormat,Ot,qt,E.colorSpace,E.isVideoTexture);dt(ut,E);let Ct;const re=E.mipmaps,G=E.isVideoTexture!==!0,Ut=Pt.__version===void 0||pt===!0,Et=lt.dataReady,Bt=V(E,Mt);if(E.isDepthTexture)Zt=U(E.format===No,E.type),Ut&&(G?i.texStorage2D(o.TEXTURE_2D,1,Zt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Ot,qt,null));else if(E.isDataTexture)if(re.length>0){G&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Zt,re[0].width,re[0].height);for(let bt=0,vt=re.length;bt<vt;bt++)Ct=re[bt],G?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Ot,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Ot,qt,Ct.data);E.generateMipmaps=!1}else G?(Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Zt,Mt.width,Mt.height),Et&&mt(E,Mt,Ot,qt)):i.texImage2D(o.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Ot,qt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Zt,re[0].width,re[0].height,Mt.depth);for(let bt=0,vt=re.length;bt<vt;bt++)if(Ct=re[bt],E.format!==mi)if(Ot!==null)if(G){if(Et)if(E.layerUpdates.size>0){const zt=w_(Ct.width,Ct.height,E.format,E.type);for(const ae of E.layerUpdates){const Le=Ct.data.subarray(ae*zt/Ct.data.BYTES_PER_ELEMENT,(ae+1)*zt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ae,Ct.width,Ct.height,1,Ot,Le)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,Ot,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,Ot,qt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Zt,Ct.width,Ct.height,Mt.depth,0,Ot,qt,Ct.data)}else{G&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,Zt,re[0].width,re[0].height);for(let bt=0,vt=re.length;bt<vt;bt++)Ct=re[bt],E.format!==mi?Ot!==null?G?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Ot,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Ot,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Ot,qt,Ct.data)}else if(E.isDataArrayTexture)if(G){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Zt,Mt.width,Mt.height,Mt.depth),Et)if(E.layerUpdates.size>0){const bt=w_(Mt.width,Mt.height,E.format,E.type);for(const vt of E.layerUpdates){const zt=Mt.data.subarray(vt*bt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Ot,qt,zt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,qt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,Ot,qt,Mt.data);else if(E.isData3DTexture)G?(Ut&&i.texStorage3D(o.TEXTURE_3D,Bt,Zt,Mt.width,Mt.height,Mt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,qt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,Ot,qt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(G)i.texStorage2D(o.TEXTURE_2D,Bt,Zt,Mt.width,Mt.height);else{let bt=Mt.width,vt=Mt.height;for(let zt=0;zt<Bt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Zt,bt,vt,0,Ot,qt,null),bt>>=1,vt>>=1}}else if(re.length>0){if(G&&Ut){const bt=Je(re[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Zt,bt.width,bt.height)}for(let bt=0,vt=re.length;bt<vt;bt++)Ct=re[bt],G?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot,qt,Ct):i.texImage2D(o.TEXTURE_2D,bt,Zt,Ot,qt,Ct);E.generateMipmaps=!1}else if(G){if(Ut){const bt=Je(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,Zt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,qt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ot,qt,Mt);x(E)&&v(ut),Pt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function At(L,E,et){if(E.image.length!==6)return;const ut=yt(L,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const lt=r.get(pt);if(pt.version!==lt.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Ce.getPrimaries(Ce.workingColorSpace),Dt=E.colorSpace===Ba?null:Ce.getPrimaries(E.colorSpace),Gt=E.colorSpace===Ba||Pt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ot=[];for(let vt=0;vt<6;vt++)!Vt&&!Mt?Ot[vt]=C(E.image[vt],!0,l.maxCubemapSize):Ot[vt]=Mt?E.image[vt].image:E.image[vt],Ot[vt]=se(E,Ot[vt]);const qt=Ot[0],Zt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),re=P(E.internalFormat,Zt,Ct,E.colorSpace),G=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ut===!0,Et=pt.dataReady;let Bt=V(E,qt);dt(o.TEXTURE_CUBE_MAP,E);let bt;if(Vt){G&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,qt.width,qt.height);for(let vt=0;vt<6;vt++){bt=Ot[vt].mipmaps;for(let zt=0;zt<bt.length;zt++){const ae=bt[zt];E.format!==mi?Zt!==null?G?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,0,0,ae.width,ae.height,Zt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,0,0,ae.width,ae.height,Zt,Ct,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,re,ae.width,ae.height,0,Zt,Ct,ae.data)}}}else{if(bt=E.mipmaps,G&&Ut){bt.length>0&&Bt++;const vt=Je(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){G?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot[vt].width,Ot[vt].height,Zt,Ct,Ot[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Ot[vt].width,Ot[vt].height,0,Zt,Ct,Ot[vt].data);for(let zt=0;zt<bt.length;zt++){const Le=bt[zt].image[vt].image;G?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,0,0,Le.width,Le.height,Zt,Ct,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,re,Le.width,Le.height,0,Zt,Ct,Le.data)}}else{G?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,Ct,Ot[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Zt,Ct,Ot[vt]);for(let zt=0;zt<bt.length;zt++){const ae=bt[zt];G?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,0,0,Zt,Ct,ae.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,re,Zt,Ct,ae.image[vt])}}}x(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Rt(L,E,et,ut,pt,lt){const Pt=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Gt=P(et.internalFormat,Pt,Dt,et.colorSpace),Vt=r.get(E),Mt=r.get(et);if(Mt.__renderTarget=E,!Vt.__hasExternalTextures){const Ot=Math.max(1,E.width>>lt),qt=Math.max(1,E.height>>lt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,lt,Gt,Ot,qt,E.depth,0,Pt,Dt,null):i.texImage2D(pt,lt,Gt,Ot,qt,0,Pt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),le(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,pt,Mt.__webglTexture,0,Ht(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,pt,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ut=E.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,lt=U(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Ht(E);le(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ut=E.textures;for(let pt=0;pt<ut.length;pt++){const lt=ut[pt],Pt=u.convert(lt.format,lt.colorSpace),Dt=u.convert(lt.type),Gt=P(lt.internalFormat,Pt,Dt,lt.colorSpace),Vt=Ht(E);et&&le(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Gt,E.width,E.height):le(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function jt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const pt=ut.__webglTexture,lt=Ht(E);if(E.depthTexture.format===Lo)le(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===No)le(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Yt(L){const E=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ut}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?jt(E.__webglFramebuffer[0],L):jt(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ut],L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function pe(L,E,et){const ut=r.get(L);E!==void 0&&Rt(ut.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Yt(L)}function ce(L){const E=L.texture,et=r.get(L),ut=r.get(E);L.addEventListener("dispose",z);const pt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Dt][Gt]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Dt=0,Gt=pt.length;Dt<Gt;Dt++){const Vt=r.get(pt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&le(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<pt.length;Dt++){const Gt=pt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=u.convert(Gt.format,Gt.colorSpace),Mt=u.convert(Gt.type),Ot=P(Gt.internalFormat,Vt,Mt,Gt.colorSpace,L.isXRRenderTarget===!0),qt=Ht(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ot,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),dt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Dt][Gt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Gt);else Rt(et.__webglFramebuffer[Dt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Dt=0,Gt=pt.length;Dt<Gt;Dt++){const Vt=pt[Dt],Mt=r.get(Vt);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),dt(o.TEXTURE_2D,Vt),Rt(et.__webglFramebuffer,L,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),x(Vt)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ut.__webglTexture),dt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Gt],L,E,o.COLOR_ATTACHMENT0,Dt,Gt);else Rt(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Dt,0);x(E)&&v(Dt),i.unbindTexture()}L.depthBuffer&&Yt(L)}function B(L){const E=L.textures;for(let et=0,ut=E.length;et<ut;et++){const pt=E[et];if(x(pt)){const lt=I(L),Pt=r.get(pt).__webglTexture;i.bindTexture(lt,Pt),v(lt),i.unbindTexture()}}}const Ze=[],me=[];function Qt(L){if(L.samples>0){if(le(L)===!1){const E=L.textures,et=L.width,ut=L.height;let pt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=L.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Vt]);const Mt=r.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,pt,o.NEAREST),m===!0&&(Ze.length=0,me.length=0,Ze.push(o.COLOR_ATTACHMENT0+Vt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ze.push(lt),me.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ze))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Vt]);const Mt=r.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ht(L){return Math.min(l.maxSamples,L.samples)}function le(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Kt(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function se(L,E){const et=L.colorSpace,ut=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ms&&et!==Ba&&(Ce.getTransfer(et)===Fe?(ut!==mi||pt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ot,this.setTexture2D=ft,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=pe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=le}function Zb(o,t){function i(r,l=Ba){let u;const h=Ce.getTransfer(l);if(r===Ai)return o.UNSIGNED_BYTE;if(r===sd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===od)return o.UNSIGNED_SHORT_5_5_5_1;if(r===sv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===av)return o.BYTE;if(r===rv)return o.SHORT;if(r===Do)return o.UNSIGNED_SHORT;if(r===rd)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Oo)return o.HALF_FLOAT;if(r===ov)return o.ALPHA;if(r===lv)return o.RGB;if(r===mi)return o.RGBA;if(r===Lo)return o.DEPTH_COMPONENT;if(r===No)return o.DEPTH_STENCIL;if(r===cv)return o.RED;if(r===ld)return o.RED_INTEGER;if(r===uv)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===ud)return o.RGBA_INTEGER;if(r===vc||r===Sc||r===yc||r===xc)if(h===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rh||r===Ch||r===wh||r===Dh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Rh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ch)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Lh||r===Nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Uh||r===Lh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Nh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Oh||r===Bh||r===Ih||r===zh||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ph)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ih)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mc||r===Zh||r===jh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Mc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fv||r===Kh||r===Qh||r===Jh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Nn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ha({vertexShader:jb,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hn(new Ia(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jb extends Ts{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,b=null;const C=new Qb,x=i.getContextAttributes();let v=null,I=null;const P=[],U=[],V=new be;let k=null;const z=new Jn;z.viewport=new He;const j=new Jn;j.viewport=new He;const D=[z,j],R=new _x;let F=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=P[Q];return mt===void 0&&(mt=new ah,P[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=P[Q];return mt===void 0&&(mt=new ah,P[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=P[Q];return mt===void 0&&(mt=new ah,P[Q]=mt),mt.getHandSpace()};function st(Q){const mt=U.indexOf(Q.inputSource);if(mt===-1)return;const xt=P[mt];xt!==void 0&&(xt.update(Q.inputSource,Q.frame,p||h),xt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function _t(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ft);for(let Q=0;Q<P.length;Q++){const mt=U[Q];mt!==null&&(U[Q]=null,P[Q].disconnect(mt))}F=null,ot=null,C.reset(),t.setRenderTarget(v),M=null,S=null,_=null,l=null,I=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ft),x.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,At=null,Rt=null;x.depth&&(Rt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=x.stencil?No:Lo,At=x.stencil?Uo:Sr);const oe={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};_=new XRWebGLBinding(l,i),S=_.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),I=new yr(S.textureWidth,S.textureHeight,{format:mi,type:Ai,depthTexture:new Tv(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new yr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ft(Q){for(let mt=0;mt<Q.removed.length;mt++){const xt=Q.removed[mt],At=U.indexOf(xt);At>=0&&(U[At]=null,P[At].disconnect(xt))}for(let mt=0;mt<Q.added.length;mt++){const xt=Q.added[mt];let At=U.indexOf(xt);if(At===-1){for(let oe=0;oe<P.length;oe++)if(oe>=U.length){U.push(xt),At=oe;break}else if(U[oe]===null){U[oe]=xt,At=oe;break}if(At===-1)break}const Rt=P[At];Rt&&Rt.connect(xt)}}const O=new tt,K=new tt;function X(Q,mt,xt){O.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);const At=O.distanceTo(K),Rt=mt.projectionMatrix.elements,oe=xt.projectionMatrix.elements,jt=Rt[14]/(Rt[10]-1),Yt=Rt[14]/(Rt[10]+1),pe=(Rt[9]+1)/Rt[5],ce=(Rt[9]-1)/Rt[5],B=(Rt[8]-1)/Rt[0],Ze=(oe[8]+1)/oe[0],me=jt*B,Qt=jt*Ze,Ht=At/(-B+Ze),le=Ht*-B;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(le),Q.translateZ(Ht),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Kt=jt+Ht,se=Yt+Ht,Je=me-le,L=Qt+(At-le),E=pe*Yt/se*Kt,et=ce*Yt/se*Kt;Q.projectionMatrix.makePerspective(Je,L,E,et,Kt,se),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,xt=Q.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(xt=C.depthFar)),R.near=j.near=z.near=mt,R.far=j.far=z.far=xt,(F!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,ot=R.far),z.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=z.layers.mask|j.layers.mask;const At=Q.parent,Rt=R.cameras;St(R,At);for(let oe=0;oe<Rt.length;oe++)St(Rt[oe],At);Rt.length===2?X(R,z,j):R.projectionMatrix.copy(z.projectionMatrix),w(Q,R,At)};function w(Q,mt,xt){xt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(xt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$h*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let q=null;function dt(Q,mt){if(g=mt.getViewerPose(p||h),b=mt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(I,M.framebuffer),t.setRenderTarget(I));let At=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,At=!0);for(let jt=0;jt<xt.length;jt++){const Yt=xt[jt];let pe=null;if(M!==null)pe=M.getViewport(Yt);else{const B=_.getViewSubImage(S,Yt);pe=B.viewport,jt===0&&(t.setRenderTargetTextures(I,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(I))}let ce=D[jt];ce===void 0&&(ce=new Jn,ce.layers.enable(jt),ce.viewport=new He,D[jt]=ce),ce.matrix.fromArray(Yt.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Yt.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(pe.x,pe.y,pe.width,pe.height),jt===0&&(R.matrix.copy(ce.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),At===!0&&R.cameras.push(ce)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const jt=_.getDepthInformation(xt[0]);jt&&jt.isValid&&jt.texture&&C.init(t,jt,l.renderState)}}for(let xt=0;xt<P.length;xt++){const At=U[xt],Rt=P[xt];At!==null&&Rt!==void 0&&Rt.update(At,mt,p||h)}q&&q(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const yt=new Rv;yt.setAnimationLoop(dt),this.setAnimationLoop=function(Q){q=Q},this.dispose=function(){}}}const fr=new Ri,$b=new Ye;function tA(o,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,xv(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,I,P,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),_(x,v)):v.isMeshPhongMaterial?(u(x,v),g(x,v)):v.isMeshStandardMaterial?(u(x,v),S(x,v),v.isMeshPhysicalMaterial&&M(x,v,U)):v.isMeshMatcapMaterial?(u(x,v),b(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),C(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?m(x,v,I,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=t.get(v),P=I.envMap,U=I.envMapRotation;P&&(x.envMap.value=P,fr.copy(U),fr.x*=-1,fr.y*=-1,fr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),x.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(fr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,I,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=P*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function C(x,v){const I=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function eA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,P){const U=P.program;r.uniformBlockBinding(I,U)}function p(I,P){let U=l[I.id];U===void 0&&(b(I),U=g(I),l[I.id]=U,I.addEventListener("dispose",x));const V=P.program;r.updateUBOMapping(I,V);const k=t.render.frame;u[I.id]!==k&&(S(I),u[I.id]=k)}function g(I){const P=_();I.__bindingPointIndex=P;const U=o.createBuffer(),V=I.__size,k=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,V,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function _(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const P=l[I.id],U=I.uniforms,V=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let k=0,z=U.length;k<z;k++){const j=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,R=j.length;D<R;D++){const F=j[D];if(M(F,k,D,V)===!0){const ot=F.__offset,st=Array.isArray(F.value)?F.value:[F.value];let _t=0;for(let ft=0;ft<st.length;ft++){const O=st[ft],K=C(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ot+_t,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,_t),_t+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,P,U,V){const k=I.value,z=P+"_"+U;if(V[z]===void 0)return typeof k=="number"||typeof k=="boolean"?V[z]=k:V[z]=k.clone(),!0;{const j=V[z];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return V[z]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function b(I){const P=I.uniforms;let U=0;const V=16;for(let z=0,j=P.length;z<j;z++){const D=Array.isArray(P[z])?P[z]:[P[z]];for(let R=0,F=D.length;R<F;R++){const ot=D[R],st=Array.isArray(ot.value)?ot.value:[ot.value];for(let _t=0,ft=st.length;_t<ft;_t++){const O=st[_t],K=C(O),X=U%V,St=X%K.boundary,w=X+St;U+=St,w!==0&&V-w<K.storage&&(U+=V-w),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=K.storage}}}const k=U%V;return k>0&&(U+=V-k),I.__size=U,I.__cache={},this}function C(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function x(I){const P=I.target;P.removeEventListener("dispose",x);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class nA{constructor(t={}){const{canvas:i=Dy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let x=null,v=null;const I=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let V=!1;this._outputColorSpace=oi;let k=0,z=0,j=null,D=-1,R=null;const F=new He,ot=new He;let st=null;const _t=new Te(0);let ft=0,O=i.width,K=i.height,X=1,St=null,w=null;const q=new He(0,0,O,K),dt=new He(0,0,O,K);let yt=!1;const Q=new md;let mt=!1,xt=!1;const At=new Ye,Rt=new Ye,oe=new tt,jt=new He,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ce(){return j===null?X:1}let B=r;function Ze(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${id}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",vt,!1),B===null){const Y="webgl2";if(B=Ze(Y,A),B===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let me,Qt,Ht,le,Kt,se,Je,L,E,et,ut,pt,lt,Pt,Dt,Gt,Vt,Mt,Ot,qt,Zt,Ct,re,G;function Ut(){me=new hT(B),me.init(),Ct=new Zb(B,me),Qt=new rT(B,me,t,Ct),Ht=new qb(B,me),Qt.reverseDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),le=new mT(B),Kt=new Nb,se=new Yb(B,me,Ht,Kt,Qt,Ct,le),Je=new oT(U),L=new fT(U),E=new xx(B),re=new iT(B,E),et=new dT(B,E,le,re),ut=new _T(B,et,E,le),Ot=new gT(B,Qt,se),Gt=new sT(Kt),pt=new Lb(U,Je,L,me,Qt,re,Gt),lt=new tA(U,Kt),Pt=new Ob,Dt=new Gb(me),Mt=new nT(U,Je,L,Ht,ut,M,m),Vt=new Xb(U,ut,Qt),G=new eA(B,le,Qt,Ht),qt=new aT(B,me,le),Zt=new pT(B,me,le),le.programs=pt.programs,U.capabilities=Qt,U.extensions=me,U.properties=Kt,U.renderLists=Pt,U.shadowMap=Vt,U.state=Ht,U.info=le}Ut();const Et=new Jb(U,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(O,K,!1))},this.getSize=function(A){return A.set(O,K)},this.setSize=function(A,Y,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,K=Y,i.width=Math.floor(A*X),i.height=Math.floor(Y*X),at===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(O*X,K*X).floor()},this.setDrawingBufferSize=function(A,Y,at){O=A,K=Y,X=at,i.width=Math.floor(A*at),i.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,Y,at,rt){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,Y,at,rt),Ht.viewport(F.copy(q).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,Y,at,rt){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,Y,at,rt),Ht.scissor(ot.copy(dt).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Ht.setScissorTest(yt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let rt=0;if(A){let Z=!1;if(j!==null){const Tt=j.texture.format;Z=Tt===ud||Tt===cd||Tt===ld}if(Z){const Tt=j.texture.type,wt=Tt===Ai||Tt===Sr||Tt===Do||Tt===Uo||Tt===sd||Tt===od,Nt=Mt.getClearColor(),It=Mt.getClearAlpha(),ne=Nt.r,$t=Nt.g,Xt=Nt.b;wt?(b[0]=ne,b[1]=$t,b[2]=Xt,b[3]=It,B.clearBufferuiv(B.COLOR,0,b)):(C[0]=ne,C[1]=$t,C[2]=Xt,C[3]=It,B.clearBufferiv(B.COLOR,0,C))}else rt|=B.COLOR_BUFFER_BIT}Y&&(rt|=B.DEPTH_BUFFER_BIT),at&&(rt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Pt.dispose(),Dt.dispose(),Kt.dispose(),Je.dispose(),L.dispose(),ut.dispose(),re.dispose(),G.dispose(),pt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",sn),Et.removeEventListener("sessionend",yn),Pn.stop()};function Bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=le.autoReset,Y=Vt.enabled,at=Vt.autoUpdate,rt=Vt.needsUpdate,Z=Vt.type;Ut(),le.autoReset=A,Vt.enabled=Y,Vt.autoUpdate=at,Vt.needsUpdate=rt,Vt.type=Z}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zt(A){const Y=A.target;Y.removeEventListener("dispose",zt),ae(Y)}function ae(A){Le(A),Kt.remove(A)}function Le(A){const Y=Kt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){pt.releaseProgram(at)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,rt,Z,Tt){Y===null&&(Y=Yt);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=ka(A,Y,at,rt,Z);Ht.setMaterial(rt,wt);let It=at.index,ne=1;if(rt.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;ne=2}const $t=at.drawRange,Xt=at.attributes.position;let he=$t.start*ne,De=($t.start+$t.count)*ne;Tt!==null&&(he=Math.max(he,Tt.start*ne),De=Math.min(De,(Tt.start+Tt.count)*ne)),It!==null?(he=Math.max(he,0),De=Math.min(De,It.count)):Xt!=null&&(he=Math.max(he,0),De=Math.min(De,Xt.count));const We=De-he;if(We<0||We===1/0)return;re.setup(Z,rt,Nt,at,It);let _e,Ue=qt;if(It!==null&&(_e=E.get(It),Ue=Zt,Ue.setIndex(_e)),Z.isMesh)rt.wireframe===!0?(Ht.setLineWidth(rt.wireframeLinewidth*ce()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(Z.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),Ht.setLineWidth(Jt*ce()),Z.isLineSegments?Ue.setMode(B.LINES):Z.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else Z.isPoints?Ue.setMode(B.POINTS):Z.isSprite&&Ue.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,Oe=Z._multiDrawCounts,xe=Z._multiDrawCount,pn=It?E.get(It).bytesPerElement:1,oa=Kt.get(rt).currentProgram.getUniforms();for(let ke=0;ke<xe;ke++)oa.setValue(B,"_gl_DrawID",ke),Ue.render(Jt[ke]/pn,Oe[ke])}else if(Z.isInstancedMesh)Ue.renderInstances(he,We,Z.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Oe=Math.min(at.instanceCount,Jt);Ue.renderInstances(he,We,Oe)}else Ue.render(he,We)};function Ae(A,Y,at){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,ra(A,Y,at),A.side=ia,A.needsUpdate=!0,ra(A,Y,at),A.side=$i):ra(A,Y,at)}this.compile=function(A,Y,at=null){at===null&&(at=A),v=Dt.get(at),v.init(Y),P.push(v),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Ae(Nt,at,Z),rt.add(Nt)}else Ae(Tt,at,Z),rt.add(Tt)}),v=P.pop(),rt},this.compileAsync=function(A,Y,at=null){const rt=this.compile(A,Y,at);return new Promise(Z=>{function Tt(){if(rt.forEach(function(wt){Kt.get(wt).currentProgram.isReady()&&rt.delete(wt)}),rt.size===0){Z(A);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Vn=null;function dn(A){Vn&&Vn(A)}function sn(){Pn.stop()}function yn(){Pn.start()}const Pn=new Rv;Pn.setAnimationLoop(dn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(A){Vn=A,Et.setAnimationLoop(A),A===null?Pn.stop():Pn.start()},Et.addEventListener("sessionstart",sn),Et.addEventListener("sessionend",yn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Y),Y=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Y,j),v=Dt.get(A,P.length),v.init(Y),P.push(v),Rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,xt),x=Pt.get(A,I.length),x.init(),I.push(x),Et.enabled===!0&&Et.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Ga(Tt,Y,-1/0,U.sortObjects)}Ga(A,Y,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(St,w),pe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,pe&&Mt.addToRenderList(x,A),this.info.render.frame++,mt===!0&&Gt.beginShadows();const at=v.state.shadowsArray;Vt.render(at,A,Y),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=x.opaque,Z=x.transmissive;if(v.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Z.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Ho(rt,Z,A,It)}pe&&Mt.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Fo(x,A,It,It.viewport)}}else Z.length>0&&Ho(rt,Z,A,Y),pe&&Mt.render(A),Fo(x,A,Y);j!==null&&z===0&&(se.updateMultisampleRenderTarget(j),se.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(U,A,Y),re.resetDefaultState(),D=-1,R=null,P.pop(),P.length>0?(v=P[P.length-1],mt===!0&&Gt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Ga(A,Y,at,rt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){rt&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const wt=ut.update(A),Nt=A.material;Nt.visible&&x.push(A,wt,Nt,at,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const wt=ut.update(A),Nt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),jt.copy(wt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Nt)){const It=wt.groups;for(let ne=0,$t=It.length;ne<$t;ne++){const Xt=It[ne],he=Nt[Xt.materialIndex];he&&he.visible&&x.push(A,wt,he,at,jt.z,Xt)}}else Nt.visible&&x.push(A,wt,Nt,at,jt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)Ga(Tt[wt],Y,at,rt)}function Fo(A,Y,at,rt){const Z=A.opaque,Tt=A.transmissive,wt=A.transparent;v.setupLightsView(at),mt===!0&&Gt.setGlobalState(U.clippingPlanes,at),rt&&Ht.viewport(F.copy(rt)),Z.length>0&&Va(Z,Y,at),Tt.length>0&&Va(Tt,Y,at),wt.length>0&&Va(wt,Y,at),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ho(A,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new yr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Oo:Ai,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[rt.id],wt=rt.viewport||F;Tt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const Nt=U.getRenderTarget(),It=U.getActiveCubeFace(),ne=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(_t),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),pe&&Mt.render(at);const $t=U.toneMapping;U.toneMapping=Fa;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),mt===!0&&Gt.setGlobalState(U.clippingPlanes,rt),Va(A,at,rt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let De=0,We=Y.length;De<We;De++){const _e=Y[De],Ue=_e.object,Jt=_e.geometry,Oe=_e.material,xe=_e.group;if(Oe.side===$i&&Ue.layers.test(rt.layers)){const pn=Oe.side;Oe.side=Gn,Oe.needsUpdate=!0,aa(Ue,at,rt,Jt,Oe,xe),Oe.side=pn,Oe.needsUpdate=!0,he=!0}}he===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Nt,It,ne),U.setClearColor(_t,ft),Xt!==void 0&&(rt.viewport=Xt),U.toneMapping=$t}function Va(A,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const wt=A[Z],Nt=wt.object,It=wt.geometry,ne=wt.group;let $t=wt.material;$t.allowOverride===!0&&rt!==null&&($t=rt),Nt.layers.test(at.layers)&&aa(Nt,Y,at,It,$t,ne)}}function aa(A,Y,at,rt,Z,Tt){A.onBeforeRender(U,Y,at,rt,Z,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(U,Y,at,rt,A,Tt),Z.transparent===!0&&Z.side===$i&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,U.renderBufferDirect(at,Y,rt,Z,A,Tt),Z.side=ia,Z.needsUpdate=!0,U.renderBufferDirect(at,Y,rt,Z,A,Tt),Z.side=$i):U.renderBufferDirect(at,Y,rt,Z,A,Tt),A.onAfterRender(U,Y,at,rt,Z,Tt)}function ra(A,Y,at){Y.isScene!==!0&&(Y=Yt);const rt=Kt.get(A),Z=v.state.lights,Tt=v.state.shadowsArray,wt=Z.state.version,Nt=pt.getParameters(A,Z.state,Tt,Y,at),It=pt.getProgramCacheKey(Nt);let ne=rt.programs;rt.environment=A.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(A.isMeshStandardMaterial?L:Je).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ne===void 0&&(A.addEventListener("dispose",zt),ne=new Map,rt.programs=ne);let $t=ne.get(It);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===wt)return wi(A,Nt),$t}else Nt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Nt,U),$t=pt.acquireProgram(Nt,It),ne.set(It,$t),rt.uniforms=Nt.uniforms;const Xt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),wi(A,Nt),rt.needsLights=en(A),rt.lightsStateVersion=wt,rt.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function Ci(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Ec.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function wi(A,Y){const at=Kt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function ka(A,Y,at,rt,Z){Y.isScene!==!0&&(Y=Yt),se.resetTextureUnits();const Tt=Y.fog,wt=rt.isMeshStandardMaterial?Y.environment:null,Nt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ms,It=(rt.isMeshStandardMaterial?L:Je).get(rt.envMap||wt),ne=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,$t=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,he=!!at.morphAttributes.normal,De=!!at.morphAttributes.color;let We=Fa;rt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(We=U.toneMapping);const _e=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ue=_e!==void 0?_e.length:0,Jt=Kt.get(rt),Oe=v.state.lights;if(mt===!0&&(xt===!0||A!==R)){const mn=A===R&&rt.id===D;Gt.setState(rt,A,mn)}let xe=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Oe.state.version||Jt.outputColorSpace!==Nt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==It||rt.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==ne||Jt.vertexTangents!==$t||Jt.morphTargets!==Xt||Jt.morphNormals!==he||Jt.morphColors!==De||Jt.toneMapping!==We||Jt.morphTargetsCount!==Ue)&&(xe=!0):(xe=!0,Jt.__version=rt.version);let pn=Jt.currentProgram;xe===!0&&(pn=ra(rt,Y,Z));let oa=!1,ke=!1,Ui=!1;const Ge=pn.getUniforms(),bn=Jt.uniforms;if(Ht.useProgram(pn.program)&&(oa=!0,ke=!0,Ui=!0),rt.id!==D&&(D=rt.id,ke=!0),oa||R!==A){Ht.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),Ly(At),Ny(At),Ge.setValue(B,"projectionMatrix",At)):Ge.setValue(B,"projectionMatrix",A.projectionMatrix),Ge.setValue(B,"viewMatrix",A.matrixWorldInverse);const xn=Ge.map.cameraPosition;xn!==void 0&&xn.setValue(B,oe.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&Ge.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ge.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,ke=!0,Ui=!0)}if(Z.isSkinnedMesh){Ge.setOptional(B,Z,"bindMatrix"),Ge.setOptional(B,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ge.setValue(B,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(Ge.setOptional(B,Z,"batchingTexture"),Ge.setValue(B,"batchingTexture",Z._matricesTexture,se),Ge.setOptional(B,Z,"batchingIdTexture"),Ge.setValue(B,"batchingIdTexture",Z._indirectTexture,se),Ge.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ge.setValue(B,"batchingColorTexture",Z._colorsTexture,se));const on=at.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Ot.update(Z,at,pn),(ke||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Ge.setValue(B,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),ke&&(Ge.setValue(B,"toneMappingExposure",U.toneMappingExposure),Jt.needsLights&&sa(bn,Ui),Tt&&rt.fog===!0&&lt.refreshFogUniforms(bn,Tt),lt.refreshMaterialUniforms(bn,rt,X,K,v.state.transmissionRenderTarget[A.id]),Ec.upload(B,Ci(Jt),bn,se)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ec.upload(B,Ci(Jt),bn,se),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ge.setValue(B,"center",Z.center),Ge.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Ge.setValue(B,"normalMatrix",Z.normalMatrix),Ge.setValue(B,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const mn=rt.uniformsGroups;for(let xn=0,_i=mn.length;xn<_i;xn++){const Li=mn[xn];G.update(Li,pn),G.bind(Li,pn)}}return pn}function sa(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Y,at){const rt=Kt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Kt.get(A.texture).__webglTexture=Y,Kt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const at=Kt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const Go=B.createFramebuffer();this.setRenderTarget=function(A,Y=0,at=0){j=A,k=Y,z=at;let rt=!0,Z=null,Tt=!1,wt=!1;if(A){const It=Kt.get(A);if(It.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(B.FRAMEBUFFER,null),rt=!1;else if(It.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(It.__hasExternalTextures)se.rebindTextures(A,Kt.get(A.texture).__webglTexture,Kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&Kt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const ne=A.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(wt=!0);const $t=Kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[Y])?Z=$t[Y][at]:Z=$t[Y],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?Z=Kt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Z=$t[at]:Z=$t,F.copy(A.viewport),ot.copy(A.scissor),st=A.scissorTest}else F.copy(q).multiplyScalar(X).floor(),ot.copy(dt).multiplyScalar(X).floor(),st=yt;if(at!==0&&(Z=Go),Ht.bindFramebuffer(B.FRAMEBUFFER,Z)&&rt&&Ht.drawBuffers(A,Z),Ht.viewport(F),Ht.scissor(ot),Ht.setScissorTest(st),Tt){const It=Kt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,at)}else if(wt){const It=Kt.get(A.texture),ne=Y;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,at,ne)}else if(A!==null&&at!==0){const It=Kt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,Y,at,rt,Z,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Ht.bindFramebuffer(B.FRAMEBUFFER,It);try{const ne=A.textures[Nt],$t=ne.format,Xt=ne.type;if(!Qt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-rt&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Y,at,rt,Z,Ct.convert($t),Ct.convert(Xt),Tt))}finally{const ne=j!==null?Kt.get(j).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,rt,Z,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(Y>=0&&Y<=A.width-rt&&at>=0&&at<=A.height-Z){Ht.bindFramebuffer(B.FRAMEBUFFER,It);const ne=A.textures[Nt],$t=ne.format,Xt=ne.type;if(!Qt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Y,at,rt,Z,Ct.convert($t),Ct.convert(Xt),0);const De=j!==null?Kt.get(j).__webglFramebuffer:null;Ht.bindFramebuffer(B.FRAMEBUFFER,De);const We=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Uy(B,We,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(he),B.deleteSync(We),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),wt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;se.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,wt,Nt,Z,Tt),Ht.unbindTexture()};const Vo=B.createFramebuffer(),Di=B.createFramebuffer();this.copyTextureToTexture=function(A,Y,at=null,rt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let wt,Nt,It,ne,$t,Xt,he,De,We;const _e=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,ne=at.min.x,$t=at.min.y,Xt=at.isBox3?at.min.z:0;else{const on=Math.pow(2,-Z);wt=Math.floor(_e.width*on),Nt=Math.floor(_e.height*on),A.isDataArrayTexture?It=_e.depth:A.isData3DTexture?It=Math.floor(_e.depth*on):It=1,ne=0,$t=0,Xt=0}rt!==null?(he=rt.x,De=rt.y,We=rt.z):(he=0,De=0,We=0);const Ue=Ct.convert(Y.format),Jt=Ct.convert(Y.type);let Oe;Y.isData3DTexture?(se.setTexture3D(Y,0),Oe=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Oe=B.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Oe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const xe=B.getParameter(B.UNPACK_ROW_LENGTH),pn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oa=B.getParameter(B.UNPACK_SKIP_PIXELS),ke=B.getParameter(B.UNPACK_SKIP_ROWS),Ui=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const Ge=A.isDataArrayTexture||A.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const on=Kt.get(A),mn=Kt.get(Y),xn=Kt.get(on.__renderTarget),_i=Kt.get(mn.__renderTarget);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Li=0;Li<It;Li++)Ge&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kt.get(A).__webglTexture,Z,Xt+Li),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kt.get(Y).__webglTexture,Tt,We+Li)),B.blitFramebuffer(ne,$t,wt,Nt,he,De,wt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Kt.has(A)){const on=Kt.get(A),mn=Kt.get(Y);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,Vo),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,Di);for(let xn=0;xn<It;xn++)Ge?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,Z,Xt+xn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,Z),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Tt,We+xn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Tt),Z!==0?B.blitFramebuffer(ne,$t,wt,Nt,he,De,wt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(Oe,Tt,he,De,We+xn,ne,$t,wt,Nt):B.copyTexSubImage2D(Oe,Tt,he,De,ne,$t,wt,Nt);Ht.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Oe,Tt,he,De,We,wt,Nt,It,Ue,Jt,_e.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,Tt,he,De,We,wt,Nt,It,Ue,_e.data):B.texSubImage3D(Oe,Tt,he,De,We,wt,Nt,It,Ue,Jt,_e):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,he,De,wt,Nt,Ue,Jt,_e.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,he,De,_e.width,_e.height,Ue,_e.data):B.texSubImage2D(B.TEXTURE_2D,Tt,he,De,wt,Nt,Ue,Jt,_e);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oa),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),Tt===0&&Y.generateMipmaps&&B.generateMipmap(Oe),Ht.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,at=null,rt=null,Z=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,at,rt,Z)},this.initRenderTarget=function(A){Kt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Ht.unbindTexture()},this.resetState=function(){k=0,z=0,j=null,Ht.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}class iA{camera;domElement;movementSpeed=5;lookSpeed=.002;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;phi=0;theta=0;onPointerlockChange;constructor(t,i){this.camera=t,this.domElement=i,this.domElement.addEventListener("click",this.onClick.bind(this)),document.addEventListener("pointerlockchange",this.onPointerlockChange.bind(this)),document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this))}onClick(){this.domElement.requestPointerLock()}onKeyDown(t){switch(t.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break}}onKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break}}onMouseMove(t){document.pointerLockElement===this.domElement&&(this.phi-=t.movementY*this.lookSpeed,this.theta-=t.movementX*this.lookSpeed,this.phi=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.phi)),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.theta,this.camera.rotation.x=this.phi)}update(t,i){const r=new tt;if(this.moveForward&&(r.z-=1),this.moveBackward&&(r.z+=1),this.moveLeft&&(r.x-=1),this.moveRight&&(r.x+=1),r.length()>0){r.normalize(),r.applyQuaternion(this.camera.quaternion),r.y=0,r.normalize();const l=this.camera.position.clone();l.add(r.multiplyScalar(this.movementSpeed*t));let u=!1;const h=new xr().setFromCenterAndSize(l,new tt(.8,2,.8));for(const d of i){const m=new xr().setFromObject(d);if(h.intersectsBox(m)){u=!0;break}}u||this.camera.position.copy(l)}}dispose(){document.removeEventListener("keydown",this.onKeyDown.bind(this)),document.removeEventListener("keyup",this.onKeyUp.bind(this)),document.removeEventListener("mousemove",this.onMouseMove.bind(this))}}const aA=[{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",title:"The Starry Night",artist:"Vincent van Gogh",description:"1889 oil painting depicting a swirling night sky over a village"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg",title:"Mona Lisa",artist:"Leonardo da Vinci",description:"Portrait of Lisa Gherardini, painted between 1503-1519"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",title:"The Creation of Adam",artist:"Michelangelo",description:"Fresco painting from the Sistine Chapel ceiling"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/977px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",title:"Self-Portrait",artist:"Vincent van Gogh",description:"One of many self-portraits by van Gogh"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/800px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg",title:"Girl with a Pearl Earring",artist:"Johannes Vermeer",description:"Oil painting created around 1665"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg",title:"The Great Wave off Kanagawa",artist:"Hokusai",description:"Woodblock print from the series Thirty-six Views of Mount Fuji"}],rA=({artPieces:o=aA,onArtClick:t})=>{const i=un.useRef(null),[r,l]=un.useState(!1),[u,h]=un.useState(null),d=un.useRef(null),m=un.useRef(null),p=un.useRef([]);un.useEffect(()=>{if(!i.current||!r)return;const S=i.current.clientWidth,M=i.current.clientHeight,b=new ax;b.fog=new pd(15790320,1,100),b.background=new Te(16119285);const C=new Jn(75,S/M,.1,1e3);C.position.set(0,1.6,10),C.rotation.set(0,Math.PI,0);const x=new nA({antialias:!0});x.setSize(S,M),x.shadowMap.enabled=!0,x.shadowMap.type=nv,x.capabilities.maxTextures=Math.min(x.capabilities.maxTextures,8),i.current.appendChild(x.domElement);const v=new vx;m.current=v;const I=new iA(C,x.domElement);d.current=I;const P=new gx(16777215,2);b.add(P);const U=new mx(16777215,1.5);U.position.set(20,50,20),U.castShadow=!0,U.shadow.mapSize.width=2048,U.shadow.mapSize.height=2048,b.add(U);const V=new pc(16777215,1,50);V.position.set(-15,4,0),b.add(V);const k=new pc(16777215,1,50);k.position.set(15,4,0),b.add(k);const z=new pc(16777215,1,50);z.position.set(0,4,-15),b.add(z);const j=new pc(16777215,1,50);j.position.set(0,4,15),b.add(j);const D=new E_,R=new Ao({color:15263976}),F=new Ao({color:13684944});D.load("/assets/wall.png",Yt=>{Yt.wrapS=Yt.wrapT=wo,Yt.repeat.set(4,1),Yt.anisotropy=x.capabilities.getMaxAnisotropy(),R.map=Yt,R.needsUpdate=!0},void 0,()=>console.log("Wall texture not found, using solid color")),D.load("/assets/marble_texture.png",Yt=>{Yt.wrapS=Yt.wrapT=wo,Yt.repeat.set(20,20),Yt.anisotropy=x.capabilities.getMaxAnisotropy(),F.map=Yt,F.needsUpdate=!0},void 0,()=>console.log("Floor texture not found, using solid color"));const ot=new Ia(100,100),st=new Hn(ot,F);st.rotation.x=-Math.PI/2,st.receiveShadow=!0,b.add(st);const _t=new Ia(100,100),ft=new Ao({color:9474192}),O=new Hn(_t,ft);O.rotation.x=Math.PI/2,O.position.y=6,b.add(O);const K=[],X=[],St=(Yt,pe,ce,B,Ze,me,Qt=0)=>{const Ht=new bs(Yt,pe,ce),le=new Hn(Ht,R);return le.position.set(B,Ze,me),le.rotation.y=Qt,le.castShadow=!0,le.receiveShadow=!0,b.add(le),K.push(le),le},w=40,q=6,dt=.5;St(w,q,dt,0,q/2,-w/2),St(w,q,dt,0,q/2,w/2),St(dt,q,w,-w/2,q/2,0),St(dt,q,w,w/2,q/2,0);const yt=6;St(w*.6,q,dt,0,q/2,-yt/2),St(w*.6,q,dt,0,q/2,yt/2),St(dt,q,w*.3,-w*.3,q/2,-w*.25),St(dt,q,w*.3,w*.3,q/2,-w*.25),St(dt,q,w*.3,-w*.3,q/2,w*.25),St(dt,q,w*.3,w*.3,q/2,w*.25),p.current=K;const Q=[{pos:[-8,3,-19.7],rot:[0,0,0]},{pos:[0,3,-19.7],rot:[0,0,0]},{pos:[8,3,-19.7],rot:[0,0,0]},{pos:[-19.7,3,-8],rot:[0,Math.PI/2,0]},{pos:[-19.7,3,0],rot:[0,Math.PI/2,0]},{pos:[-19.7,3,8],rot:[0,Math.PI/2,0]},{pos:[-8,3,19.7],rot:[0,Math.PI,0]},{pos:[0,3,19.7],rot:[0,Math.PI,0]},{pos:[8,3,19.7],rot:[0,Math.PI,0]},{pos:[19.7,3,-8],rot:[0,-Math.PI/2,0]},{pos:[19.7,3,0],rot:[0,-Math.PI/2,0]},{pos:[19.7,3,8],rot:[0,-Math.PI/2,0]},{pos:[-8,3,-2.7],rot:[0,0,0]},{pos:[0,3,-2.7],rot:[0,0,0]},{pos:[8,3,-2.7],rot:[0,0,0]},{pos:[-8,3,2.7],rot:[0,Math.PI,0]},{pos:[0,3,2.7],rot:[0,Math.PI,0]},{pos:[8,3,2.7],rot:[0,Math.PI,0]},{pos:[-19.7,3,-8],rot:[0,Math.PI/2,0]},{pos:[-19.7,3,0],rot:[0,Math.PI/2,0]},{pos:[-19.7,3,8],rot:[0,Math.PI/2,0]},{pos:[19.7,3,-8],rot:[0,-Math.PI/2,0]},{pos:[19.7,3,0],rot:[0,-Math.PI/2,0]},{pos:[19.7,3,8],rot:[0,-Math.PI/2,0]},{pos:[-11.7,3,-10],rot:[0,Math.PI/2,0]},{pos:[11.7,3,-10],rot:[0,-Math.PI/2,0]},{pos:[-11.7,3,10],rot:[0,Math.PI/2,0]},{pos:[11.7,3,10],rot:[0,-Math.PI/2,0]},{pos:[-11.7,3,-10],rot:[0,Math.PI/2,0]},{pos:[11.7,3,-10],rot:[0,-Math.PI/2,0]},{pos:[-11.7,3,10],rot:[0,Math.PI/2,0]},{pos:[11.7,3,10],rot:[0,-Math.PI/2,0]}],mt=new E_;Q.forEach((Yt,pe)=>{if(pe<o.length){const ce=o[pe];mt.load(ce.image,B=>{const Ze=new Ia(7,3),me=new Ao({map:B,side:ia}),Qt=new Hn(Ze,me);Qt.position.set(...Yt.pos),Qt.rotation.set(...Yt.rot),Qt.userData=ce,Qt.castShadow=!0,Qt.receiveShadow=!0,b.add(Qt),X.push(Qt)},void 0,B=>{console.warn("Failed to load texture:",ce.image,B);const Ze=new Ia(7,3),me=new Ao({color:8947848}),Qt=new Hn(Ze,me);Qt.position.set(...Yt.pos),Qt.rotation.set(...Yt.rot),Qt.userData=ce,b.add(Qt),X.push(Qt)})}});const xt=new Sx,At=new be(0,0),Rt=()=>{if(document.pointerLockElement!==x.domElement)return;xt.setFromCamera(At,C);const Yt=xt.intersectObjects(X);if(Yt.length>0){const pe=Yt[0].object;pe.userData&&(h(pe.userData),t&&t(pe.userData))}};document.addEventListener("click",Rt);const oe=()=>{requestAnimationFrame(oe);const Yt=v.getDelta();I.update(Yt,K),x.render(b,C)};oe();const jt=()=>{const Yt=i.current?.clientWidth||S,pe=i.current?.clientHeight||M;C.aspect=Yt/pe,C.updateProjectionMatrix(),x.setSize(Yt,pe)};return window.addEventListener("resize",jt),()=>{I.dispose(),document.removeEventListener("click",Rt),window.removeEventListener("resize",jt),i.current&&x.domElement.parentNode&&i.current.removeChild(x.domElement),x.dispose()}},[o,t,r]);const g=()=>{l(!0)},_=()=>{h(null)};return kt.createElement("div",{style:{position:"relative",width:"100%",height:"100vh",backgroundColor:"#000"}},!r&&kt.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",fontFamily:"Arial, sans-serif",zIndex:10}},kt.createElement("h1",{style:{fontSize:"4rem",marginBottom:"1rem",textAlign:"center",textShadow:"2px 2px 4px rgba(0,0,0,0.5)",fontWeight:"bold"}},"Virtual Art Gallery"),kt.createElement("p",{style:{fontSize:"1.2rem",marginBottom:"3rem",textAlign:"center",opacity:.9}},"Explore masterpieces in an immersive 3D environment"),kt.createElement("button",{onClick:g,style:{fontSize:"1.5rem",padding:"1rem 3rem",backgroundColor:"#fff",color:"#333",border:"none",borderRadius:"50px",cursor:"pointer",marginBottom:"3rem",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0,0,0,0.2)",transition:"all 0.3s ease",transform:"scale(1)"},onMouseOver:S=>{S.currentTarget.style.transform="scale(1.05)",S.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.3)"},onMouseOut:S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 15px rgba(0,0,0,0.2)"}},"Enter Gallery"),kt.createElement("div",{style:{textAlign:"center",lineHeight:"1.8",backgroundColor:"rgba(255,255,255,0.1)",padding:"2rem",borderRadius:"20px",backdropFilter:"blur(10px)"}},kt.createElement("p",{style:{fontSize:"1.2rem",marginBottom:"1rem"}},kt.createElement("strong",null,"Controls:")),kt.createElement("p",null,kt.createElement("strong",null,"WASD")," or ",kt.createElement("strong",null,"Arrow Keys")," - Move around"),kt.createElement("p",null,kt.createElement("strong",null,"Mouse")," - Look around"),kt.createElement("p",null,kt.createElement("strong",null,"Click")," on artwork to view details"),kt.createElement("p",{style:{fontSize:"0.9rem",color:"#ddd",marginTop:"1rem"}},"Press ",kt.createElement("strong",null,"ESC")," to exit pointer lock"))),u&&kt.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:20}},kt.createElement("div",{style:{backgroundColor:"white",padding:"2rem",borderRadius:"10px",maxWidth:"200px",maxHeight:"80vh",overflow:"auto",position:"relative"}},kt.createElement("button",{onClick:_,style:{position:"absolute",top:"1rem",right:"1rem",background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#666"}},"×"),kt.createElement("h2",{style:{marginBottom:"0.5rem",color:"#333"}},u.title),u.artist&&kt.createElement("p",{style:{color:"#666",marginBottom:"1rem",fontStyle:"italic"}},"by ",u.artist),kt.createElement("img",{src:u.image,alt:u.title,style:{width:"100%",maxHeight:"300px",objectFit:"contain",marginBottom:"1rem",borderRadius:"5px"}}),u.description&&kt.createElement("p",{style:{color:"#444",lineHeight:1.6}},u.description))),kt.createElement("div",{ref:i,style:{width:"100%",height:"100vh"}}))},sA=[{era:"Prehistoric",titles:["Lascaux Cave Paintings","Hall of Bulls, Lascaux","Chauvet Cave Horses","Chauvet Cave Lions","Altamira Bison Ceiling","Bhimbetka Rock Dance Scene","Tassili n’Ajjer Herd Scene","Sulawesi Wild Cattle","Pech Merle Spotted Horses","Laas Gaal Cattle Figures","Apollo 11 Stones","Lion Man of Hohlenstein‑Stadel","Venus of Willendorf","Venus of Brassempouy","Paleolithic hand stencils (Cueva de las Manos)","Engravings at Les Combarelles","Blombos Cave Ochre Plaque","Drakensberg San Rock Art","Newgrange Megalithic Carvings","Hohle Fels Venus","Dolní Věstonice Venus","Magura Cave Dancers","Cueva de las Manos guanacos","Tadrart Acacus giraffes","Kakadu Dreamtime Figures","Luxmanda rock figures","Serra da Capivara ritual scenes","Bhimbetka cupule panels","Font‑de‑Gaume bison panel","Maros‑Pangkep therianthrope","Leang Tedongnge pig scene","Cosquer Cave horses","El Castillo hand stencils","Cap Blanc engraved frieze","Venus of Lespugue","Venus of Hohlestein","Swabian Jura animal engravings","Arcy‑sur‑Cure cave works","Niaux cave bison","Kents Cavern engravings","Rouffignac mammoths","Chauvet Lion Panel","Altamira polychrome ceiling","Venus of Moravany","Venus of Savignano","Engraved plaquettes at Grotte du Placard","Bhimbetka bull hunting","Laussel Venus relief","Peckover cave symbols","Grotte Chauvet Ox paintings","Cave of El Juyo","Die Kniessensee engravings","Rouffignac unicorn figure","Painted briquettes at Chauvet","Monte Castillo stencils","Les Trois Frères Sorcerer","Ahrensburg culture carvings","Trowel cave spiral motifs","Camel rock art at Tassili","Libyan desert cattle procession","Red deer panel at Pech Merle","Bison scene at Cap Blanc","Grotte Cosquer marine fauna","Apollo 11 stone zebra","Grotte Chauvet rhino panel"]},{era:"Ancient",titles:["Palette of Narmer","Fayum Mummy Portraits","Bust of Nefertiti","Akhenaten and Nefertiti relief","The Dancers of Delphi fresco","Villa of Mysteries fresco","Alexander Mosaic (Pompeii)","School of Athens fresco","Frescoes of Pompeii House of the Vettii","Laocoön and His Sons sculpture","Winged Victory of Samothrace","Aphrodite of Knidos","Roman relief of Trajan’s Column","Portrait of Septimius Severus family","Pompeii Dionysus fresco (recent rediscovery)","Villa Ariadne murals","Egyptian Book of the Dead illustrations","Ishtar Gate glazed bricks","Assyrian lion hunt reliefs","Minoan bull-leaping fresco","Akrotiri frescoes (Thera)","Roman fresco of Helen of Troy (Pompeii)","Pompeii gladiator child drawing","Hadrian right hand sculpture","Pantheon interior decoration","Temple of Zeus frieze in Olympia","Statue of Zeus at Olympia","Tomb of the Diver fresco","Kushan Buddha sculptures","Terracotta Army figures","Trajan’s Column medallion","Egyptian Amarna scenes","Roman mosaic of Alexander and Darius","Fayum portrait of young man","Roman Alexandria fresco","Nabataean rock art of Petra","Roman villa mosaic of Orpheus","Roman fresco of Helen at Pompeii","Etruscan tomb frescoes in Tarquinia","Dura-Europos synagogue murals","Palmyra funerary reliefs","Roman mosaic of the Battle of Issus","Egyptian relief of Tutankhamun","Roman cameo of Augustus","Temple of Abu Simbel reliefs","Mesopotamian Standard of Ur panels","Egyptian Narmer palette","Roman fresco Diana","Greek red-figure amphora scenes","Sarcophagus of Junius Bassus detail","Roman panel from House of the Cryptoporticus","Byzantine mosaic of Justinian at Ravenna","Greek Parthenon frieze sections","Egyptian murals at Theben","Greek bronze Athena statue","Roman fresco at Herculaneum","Palmyra statue of the Lion of Al-lāt","Roman wall painting of Nilotic scene","Egyptian Athens Memphite sculpture","Royal Game of Ur mosaic","Gilgamesh plaque","Roman mosaic of Hercules and the Lion","Temple of Bacchus carving (Baalbek)","Roman sarcophagus of the Seasons","Egyptian Book of the Dead of Hunefer vignette"]},{era:"Medieval",titles:["Book of Kells illumination","Lindisfarne Gospels","Mérode Altarpiece","Wilton Diptych","Christ in Majesty (Christopher of Portland)","Last Judgment Tympanum, Autun Cathedral","Trinity icon by Andrei Rublev","Ognissanti Madonna by Giotto","Duccio Maestà panels","Lorenzetti Allegory of Good Government","Bayeux Tapestry scenes","Ghent Altarpiece (partial panels)","Scrovegni Chapel frescoes by Giotto","Stained glass Sainte‑Chapelle windows","Unicorn Tapestries","Hildesheim Bernward Doors relief","Westminster Psalter illuminations","Coronation Gospels of Otto III","Book of Hours of Jeanne d’Evreux","Chartres Cathedral rose window","Rohan Hours scenes","Tree of Jesse window at Chartres","Stavelot Triptych enamels","Morgan Madonna statue","Royal Psalter of St Denis","Hungarian Annunciation panel","Codex Westminster glosses","Medieval mural of Mary and Child (Augsburg)","Tympanum of Vézelay Abbey","Cappella Palatina mosaics (Palermo)","Codex Cambridge illuminations","Altarpiece of Saint Ursula by Master of the Legend","Berkeley Psalter miniatures","Monreale Cathedral mosaics","Saint John’s Bible folios","Scandinavian staves carved panels","Iona Book Celtic page","Book of Jamshid Persian miniature","Byzantine icon Aquila","Vesalius illuminated anatomical drawings (medieval copies)","Romanesque fresco of Christ Pantocrator","Gospel of Otto III decorative canon tables","Illuminated Bible of Saint Louis","Triptych of the Annunciation by Fra Angelico","Limbourg Brothers calendar pages","Tres Riches Heures du Duc de Berry","Book of Hours of Catherine of Cleves","Altarpiece of the Crucifixion by Jan van Eyck","Morgan Madonna statue (German)","Pórtico da Gloria sculptural panels","Cathedral of Santiago relief sculptures","Saint‑Denis stained glass artist-labour scenes","Gernrode Coronation Gospels pages","Book of Durrow carpet page","Fresco cycle in Arena Chapel","Stavelot portable altar icons","Codex Aureus of St Emmeram","Byzantine Monastery frescoes of St Anthony","Benedictional of St Æthelwold miniatures","Oxford Apocalypse illustrations","Lausanne Psalter initials","Pictish carved stone cross panels"]},{era:"Renaissance",titles:["The Annunciation (Leonardo)","Madonna of the Rocks","The Birth of Venus","The Last Supper","David (Michelangelo sculpture)","Primavera","The School of Athens","Saint George and the Dragon (Raphael)","Portrait of a Man (da Vinci)","Mona Lisa","Creation of Adam","Self‑Portrait van Gogh?? (error skip)","Strozzi Altarpiece (Donatello?)","Madonna del Granduca","Vitruvian Man","Bacchus (Michelangelo)","The Last Judgment (Michelangelo)","Venus (Botticelli)","Saint Jerome in the Wilderness","Bartolomeo Colleoni equestrian","Portrait of Bia de’ Medici","Isenheim Altarpiece","Entombment of Christ","The Temptation of Saint Anthony","Lady with an Ermine","Portrait of Cecilia Gallerani","Assumption of the Virgin","Pesaro Madonna","Battle of San Romano","Portrait of Michelangelo","Portrait of Baldassare Castiglione","Madonna with Child and Two Angels (Filippino Lippi)","David by Donatello","Madonna of the Goldfinch","The Feast of the Gods","Giuliano de' Medici Portrait","Venus and Mars","Baptism of Christ (Verrocchio & da Vinci)","Adoration of the Magi (Botticelli)","Portrait of Pope Julius II","Saint Mark (Donatello)","Madonna of Chancellor Rolin","Portrait of a Lady (da Messina)","Doni Tondo","Saint Catherine of Alexandria","Portrait of Giovanna Tornabuoni","The Baptism of Christ (Piero della Francesca)","St George (Raphael)","The Four Apostles","The Harvesters","Madonna and Child with Two Angels","The Battle of Cascina","The Tempest (Giorgione)","Deposition (Pontormo)","Portrait of Cosimo I de’ Medici","Madonna of the Chair","Baldacchino di San Pietro bronze canopy","Limoniadi frescoes (Masaccio?)","The Vision of Saint Jerome","Portrait of Eleonora Gonzaga","Madonna della Misericordia"]},{era:"Baroque",titles:["The Night Watch","Las Meninas","The Elevation of the Cross","Judith Beheading Holofernes","The Milkmaid","The Calling of Saint Matthew","The Ecstasy of Saint Teresa","Bacchus","David with the Head of Goliath (Caravaggio)","Apollo and Daphne","The Inspiration of Saint Matthew","Las Hilanderas","The Triumph of the Immaculate Conception","The Rape of the Sabine Women","Surrender of Breda","Girl with a Pearl Earring","Portrait of Innocent X","An Experiment on a Bird in the Air Pump","The Feast of St Nicholas","The Elevation of the Cross (Rubens)","Saint Serapion","Venus at her Mirror","Saint Peter Released from Prison","A Woman Holding a Balance","Still Life with Flowers","Las Meninas by Velázquez","The Martyrdom of Saint Philip","Judith Slaying Holofernes by Gentileschi","Saint Jerome Writing","Self‑Portrait Rembrandt","Night Watch","Return of the Prodigal Son","Alexander at the Battle of Granicus","Ecstasy of Saint Cecilia (duques)","Allegory of the Planets and Continents","The Feast of Herod","Judith and her Maidservant","Deposition from the Cross","Charles I at the Hunt","Portrait of Louis XIV","The Denial of Saint Peter","Samson and Delilah","The Calling of Saint Matthew","Las Meninas (again?) skip duplicates","The Black Paintings by Goya (late baroque??)","Flower Still Life (Snyders)","The Triumph of Galatea","The Infanta Margarita Teresa in a Blue Dress","The Temptation of Saint Anthony (Brouwer)","Self‑Portrait as the Allegory of Painting","The Young Martyr","Portrait of Lord Philip","The Entombment","The Family of Darius before Alexander","The Capture of Bahia","The Swing (framed earlier) skip","The Love of the Golden Idol","The Celebrated Spring Feast in the Villa d’Este"]},{era:"Rococo",titles:["The Swing (Fragonard)","Pilgrimage to Cythera","The Embarkation for Cythera","Madame de Pompadour","The Toilette of Venus","Let Them Eat Cake","The Progress of Love","Portrait of Madame de Pompadour","Return from Cythera","Dance at Bougival","The Breakfast Scene","Young Woman Reading","The Love Letter","Madame de Pompadour at Her Tambour Frame","Girl Chasing a Butterfly","Children Playing","The Meeting","Les Confidences","Allegory of Love","Marriage Contract","The Courting Couple","The First Family","Cupid a Captive","The Harlot’s Progress – book of engravings","A Visit to Cupid","Portrait of the Artist","Beach Scene at Trouville","The Abduction of Europa","Pan and Syrinx","Love’s Young Dream","Girl Playing with a Dog","Peloton in Aveyron","Conversation Under the Arbor","Serenade Under the Lamp","Fête Galante with Figures","Louise Élisabeth Vigée Le Brun Self Portrait","Portraites de Louis XV","Venus at the Toilet","The Meeting of Marie‑Antoinette","Courting Scene","Summer (The Four Seasons series)","The Bouquet","Scene in a Park","The Letter","Portrait of Countess","A Young Girl Reading","Children with a Goat","A Young Girl Reclining","Fêtes de la Cour","Young Couple in a Park","Music Lesson","Love‑in‑a‑Park","Allegory of Spring","The Music Party","Elegant Couple at the Ball","Couple in a Swing","Girl with a Letter","Seaside Frolic","Boating on the Seine","At the Opera Box","A Garden at Versailles","The Eclipse of Love","A Family at Their Devotions","Lovers Beneath a Tree","River Party","The Orange Seller"]},{era:"Neoclassicism",titles:["Oath of the Horatii","Death of Socrates","Napoleon Crossing the Alps","The Death of Marat","Portrait of Madame Récamier","The Intervention of the Sabine Women","Pauline Borghese as Venus","The Dance of the Hours","Belisarius Begging for Alms","Cornelia, Mother of the Gracchi","The Young Napoleon in the Moorish Habit","Andromache Mourning Hector","The Apotheosis of Homer","Napoleon in His Coronation Robes","Portrait of Madame Tallien","The Tennis Court Oath","Portrait of Joséphine","Cupid and Psyche","Self‑Portrait in the Atelier","Portrait of Madame Récamier","The Sabine Women","Endymion","Belisarius Sick","Napoleon Visiting the Pesthouse at Jaffa","Portrait of Elisa Bonaparte","The Educator","The Vestal Virgin Tuccia","Portrait of a Roman Lady","Washington Crossing the Delaware","Self‑Portrait Piranesi","Ignatius of Loyola Adoring the Divine Name","Portrait of Princess Caroline","The Apotheosis of Washington","The Romans in their Decay","Horatius Cocles Defending the Bridge","The Funeral of Atala","Napoleon on the Throne","The Continence of Scipio","Portrait of Talleyrand","Napoleon Visiting the Plague Victims in Jaffa","The Emperor Napoleon in His Study","Jeanne‑Catherine‑Le Maupied‑de‑Lordat","The Oracle of Delphi","Madame Geoffrin","The Dead Sacrifice of Abraham","Portrait of Grand Duchess Natalia","Napoleon and the Imperial Eagle","Cupid and Psyche","Cornelia, Mother of the Gracchi","Napoleon as Mars the Peacemaker","Portrait of Pope Pius VII","The Football Players (Ingres)","Portrait of Eugène de Beauharnais","Empedocles on Mount Etna","Portrait of Joséphine de Beauharnais","The Death of Hyacinth","Landscape with Apollo","The Conquest of the Sabine Women","Portrait of Napoleon in Crowning Robes","Dido and Aeneas","The Martyrdom of Saint Stephen","Portrait of Madame Recamier (detail)","Saturn Devouring His Son","Portrait of Emeric Essex Vidal","The Emperor Napoleon"]},{era:"Romanticism",titles:["The Raft of the Medusa","Liberty Leading the People","The Third of May 1808","Wanderer Above the Sea of Fog","The Nightmare","The Hay Wain","The Slave Ship","The Fighting Temeraire","Saturn Devouring His Son","The Death of Sardanapalus","Monk by the Sea","The Massacre at Chios","Snow Storm: Hannibal and His Army Crossing the Alps","The Fighting Temeraire","The Lady of Shalott","The Isle of the Dead","Queen Victoria in Highland Dress","The Eruption of Vesuvius","The Heart of the Andes","The Gulf Stream","Rain, Steam and Speed","Napoleon on the Saint‑Bernard Pass","The Ox Bow","Rome, from Mount Aventine","Liberty on the Barricades","The Flying Dutchman","Scenes from Don Juan","Dante and Virgil in Hell","The Temeraire","The Haywain","Shipwreck of the Minotaur","Pegwell Bay","The Monk by the Sea","Caprice of the Artist","Dream of the Fisherman's Wife","Der Wanderer","Ghent Altarpiece detail (romantic reinterpretation)","The Wanderer Above the Sea of Fog","Rainy Day by Adolf Schreyer","The Cadaver Synod Scene","Morpheus in a Dream","Titan’s War","Solitude","Detail from Shipwreck mural","Fatalism","Portrait of Shelley","Portrait of Lord Byron","Italian Sunset Landscape","Venetian Canal in Moonlight","Poetic Aesthetic Scene","The Burning of Sodom","A European Castle Ruin","Dulcinea and Don Quixote","Study after Nature","The Devils (Delaroche)","Portret of Rus‑Ukrainian Noblewoman","The Death of Chatterton","The Corsican Brothers","Titon and Selena","Portrait of Charlotte Corday","Portrait of Schubert","Ancient Ruins at Ophelia","The Flood by Gustave Doré"]},{era:"Realism",titles:["The Gleaners","The Stone Breakers","Burial at Ornans","Olympia","A Burial at Ornans","The Gross Clinic","Women Ironing","Third‑Class Carriage","The Iron Rolling Mill","The Potato Eaters","Jean Valjean in Prison","The Veteran in a New Field","The Bellelli Family","The Social Origins of Modern Art","The Haymakers","The Gleaners","A Corner of the Table","The Gross Clinic","The Third‑Class Carriage","Nude Maja","Whistler’s Mother","Morning in a Pine Woods","The Blind Woman","A Burial at Ornans","The Fighting Temeraire (realist reinterpretation)","Portrait of Zola","The Dinner Horn","Claude Monet's early realism","The Anthropologists Fieldwork","Gleaners at Dawn","Approaching Storm","Woman with a Fan","After the Flood","Portrait of Madame X","The Stone Breakers","Reclining Nude","The Wanderer","The Cemetery","The Recruit","The Widow","Self‑Portrait with Pipe","The Woodcutter","Fresh from the Oven","The Fighting Temeraire (again skip)","The Vermilion Ram","The Pouring Water","The Sands in Sun","Early Morning in the Fields","The Bathers","Conversation Piece","Still Life with Apples","The Milkmaid (realist version)","Woman Ironing","La Promenade","Miss La La at the Cirque","Portrait of a Woman Reading","The Horse Fair","Rouen Cathedral (early realism)","The Accolade","The Peasants’ Meal","Harvest","The Psychiatric Patient","The Bunch of Flowers","The Tailor","The Straw Hat","The Joy of Life"]},{era:"Impressionism",titles:["Water Lilies","Impression, Sunrise","The Luncheon on the Grass","Ballet Rehearsal","The Boating Party","The Dance Class","Woman with a Parasol","Rouen Cathedral series","Parade de cirque","La Grenouillère","Sunrise on the Seine","Boulevard des Capucines","The Artist’s Garden","The Grainstack (Effect of Snow)","Woman in the Garden","The Red Boats at Argenteuil","Woman with a Parasol – Madame Monet","Regatta at Argenteuil","Poppy Field near Argenteuil","Breakfast on the Grass","The Card Players","Camille Monet in Green Dress","Le Moulin de la Galette","The Beach at Trouville","Field of Tulips","Coquelicots","The Gare Saint‑Lazare","Vienna at Night","Woman with Umbrella","Houses of Parliament","Sunset at Montmajour","Waterloo Bridge","Snow at Argenteuil","The Japanese Footbridge","Haystacks, Sunrise","Portrait of Claude Monet","Garden at Sainte‑Adresse","The Seine at Asnières","Interior, Woman Braiding Her Hair","Study of Agapanthus","Two Sisters (On the Terrace)","On the Bank of the Seine","Spring","Lady in a Yellow Bus","Vétheuil in Winter","The Artist’s House at Argenteuil","Woman with a Parasol (detail)","Luncheon of the Boating Party","The Path through the Corn","Sunset in Venice","Venetian waterway","La Promenade","Poppy Meadow","The Cliff Walk at Pourville","Portrait of Madame Sisley","Workmen on the Shore","Windmill at Zaandam","Waterlily Pond"]},{era:"Post-Impressionism",titles:["Starry Night","The Bedroom","Vision After the Sermon","Sunday Afternoon on La Grande Jatte","Where Do We Come From? What Are We?","Mont Sainte‑Victoire","The Yellow Christ","A Sunday on La Grande Jatte","Still Life with Apples","The Card Players (Cézanne)","The Red Vineyard","Van Gogh’s Chair","Self‑Portrait with Bandaged Ear","The Night Café","Paul Gauguin in Tahiti","Portrait of Madame Matisse","The Basket of Apples","Saint‑Rémy Hospital View","Sunflowers","Portrait of Dr Gachet","Peasant and Peasant Woman","Still Life with Blue Apples","Self‑Portrait Roulin’s Coiffure","Young Peasant Woman","Van Gogh’s Sunflowers","Still Life with Fruit Dish","Cézanne’s Bathers","Félix Fénéon Portrait","Women with Hats","The Large Bathers","The Dream (Rousseau)","The Circus","The Yellow House","The Blue Nude","La Siesta","The Lovers (Klimt)","Portrait of Adele Bloch‑Bauer","Landscape at Auvers","Self‑Portrait with Straw Hat","Still Life with Bottle and Fruit","Interior with Attendants (Toulouse‑Lautrec)","The Waltz","Portrait of Henri de Toulouse‑Lautrec","Autumn Landscape","Isle of Joy","Portrait of Igor Stravinsky","Gauguin’s Mahana no Atua","Cézanne’s Montagne Sainte‑Victoire","Van Gogh’s Irises","Houses at Auvers","Portrait of Dr Rey","Self‑Portrait as a Painter","Bathers by the Sea","Still‑Life with Fruit — head of a woman","Portrait of the Artist’s Mother","The White Horse","Paul Signac Grand Canal"]},{era:"Modern",titles:["The Persistence of Memory","The Scream","Les Demoiselles d’Avignon","Guernica","The Red Studio","Composition VIII","Nude Descending a Staircase","Broadway Boogie Woogie","The Weeping Woman","Blue Nude","Black Square","Impression, Sunrise (modern reinterpretation)","The Lovers II","American Gothic","Fountain (Duchamp)","Broadway Boogie Woogie","Campbell’s Soup Cans","The Treachery of Images","Composition II in Red, Blue and Yellow","The Garden of Earthly Delights (20th‑century re‑reading)","The Bride Stripped Bare","Les Demoiselles d’Avignon","The Yellow Cow","Portrait of Dora Maar","Blue Horse I","Woman I","No. 5, 1948","Green Stripe","Broadway Boogie Woogie","La Muse Endormie","The False Mirror","Wham!","Black Iris","Girl before a Mirror","Number 31, 1950","The Piano Lesson","Woman with Flowered Hat","Portrait of Luis Fco. Lázaro","Elegy for the Spanish Republic","Broadway Boogie‑Woogie","Blue Poles","Three Musicians","Horse Trotting","Woman with Hand Mirror","Composition with Red, Yellow, Blue","The Lovers III","Sky Cathedral","Migrant Mother","The Treachery of Images"]},{era:"Contemporary",titles:["Untitled (Portrait)","Balloon Dog","For the Love of God","Infinity Mirror Room","Sky Mirror","The Weather Project","Portrait of Barack Obama","Girl with Balloon","My Bed","The Physical Impossibility of Death","Rain Room","Cloud Gate","Girl with Headscarf (Banksy)","The Clock (Elmgreen & Dragset)","Untitled Film Still #21","David: The Head of Goliath","Love Fountain","The Dinner Party","Untitled (L.A. Women)","In Praise of Shadows","Heavenly Crescents","Black Star Press","Balloon Girl","Shibboleth","The Weather Project (again skip duplicates)","Portrait of Pasolini","I Am Not a Man Without Hearts","Your Rainbow Panorama","Her Secret is Patience","Ship of Tolerance","Herb & Dorothy Archive","Dust Breeding","Crying Boy","Untitled (Cornell Boxes)","The Physical Impossibility of Death in the Mind of Someone Living","The Bean (Cloud Gate)","Girl in the Red Dress","Nike Air VaporMax (Art Installation)","Infinity Mirrored Room","Untitled (Portrait of Ross in L.A.)","Stephen Hawking’s Spoon","Portrait of George W. Bush","The Dinner Party Place Setting","Balloon Dog (Blue)","Sky Mirror (Red)","The Weather Project (again)…","Portrait of Michelle Obama","My Bed (Tracey Emin)","Cloud Gate (Chicago)","Girl with Balloon (Banksy)"]}],oA=async(o,t,i)=>{const r=[];for(const l of o){try{i(`Fetching: "${l}"...`);const u=`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(l)}&query[term][is_public_domain]=true&fields=id,title,artist_display,date_display,medium_display,image_id&limit=1`,m=(await(await fetch(u)).json())?.data?.[0];m&&m.image_id&&r.push({id:m.id,title:m.title,artist:m.artist_display||"Unknown Artist",period:t,year:m.date_display||"Date unknown",image:`https://www.artic.edu/iiif/2/${m.image_id}/full/843,/0/default.jpg`,description:m.medium_display||"Medium unknown",creditLine:"Art Institute of Chicago",style:"",classification:"Painting",subjects:[]})}catch(u){console.warn(`Failed to fetch "${l}"`,u)}await new Promise(u=>setTimeout(u,1e3))}return r},lA=()=>[{id:0,title:"Fallback Art",artist:"Fallback Artist",image:"https://via.placeholder.com/400x300.png?text=Fallback+Art",period:"Modern",year:"2020",description:"Placeholder art for fallback.",creditLine:"Generated",style:"",classification:"Painting",subjects:[]}],cA=["Prehistoric","Ancient","Medieval","Renaissance","Baroque","Rococo","Neoclassicism","Romanticism","Realism","Impressionism","Post-Impressionism","Modern","Contemporary"],uA=()=>{const[o,t]=un.useState(null),[i,r]=un.useState(null),[l,u]=un.useState(!1),[h,d]=un.useState([]),[m,p]=un.useState(""),[g,_]=un.useState(!1);return un.useEffect(()=>{(async()=>{if(o){u(!0),p(`Loading ${o} artworks...`);try{const M=sA.find(C=>C.era===o);if(!M||!M.titles)throw new Error("No titles found for era");const b=await oA(M.titles,o,p);d(b),p("Gallery ready.")}catch(M){console.error("Failed to load era artworks:",M),p("Error loading artworks. Showing fallback."),d(lA())}u(!1)}})()},[o]),!o&&!g?kt.createElement("div",{className:"era-select",style:{opacity:g?0:1,transition:"opacity 0.6s",pointerEvents:g?"none":"auto"}},kt.createElement("h1",null,"Welcome to the Immersive Art Gallery"),kt.createElement("p",null,"Select an art era to explore a 3D gallery of authentic paintings.",kt.createElement("br",null),kt.createElement("span",{className:"gallery-instructions"},"Use ",kt.createElement("b",null,"WASD")," to move, ",kt.createElement("b",null,"click")," to look around, and click paintings for details.")),kt.createElement("div",{className:"era-buttons"},cA.map(S=>kt.createElement("button",{key:S,className:"era-btn",onClick:()=>{_(!0),setTimeout(()=>t(S),600)}},S))),kt.createElement("div",{className:"gallery-instructions",style:{marginTop:"0.5rem",fontSize:"0.98rem"}},"Powered by Art Institute of Chicago API")):g&&!o?null:l?kt.createElement("div",{className:"loading-overlay"},kt.createElement("div",{className:"loading-text"},kt.createElement("div",{style:{fontSize:"2rem",marginBottom:"1.2rem"}},"Loading ",o," Gallery..."),kt.createElement("div",{style:{fontSize:"1.1rem",color:"#bdbdbd",marginBottom:"1.5rem"}},m),kt.createElement("div",{style:{width:"220px",height:"10px",background:"#23272f",borderRadius:"8px",margin:"0 auto 1.2rem auto",overflow:"hidden"}},kt.createElement("div",{style:{width:"60%",height:"100%",background:"linear-gradient(90deg, #f5e7b2 30%, #e0c3fc 70%)",borderRadius:"8px",animation:"pulse 1.2s infinite alternate"}})),kt.createElement("div",{style:{fontSize:"0.95rem",color:"#888"}},"Fetching authentic artworks from museum collection..."))):kt.createElement("div",{className:"relative w-full h-screen bg-white overflow-hidden"},kt.createElement(rA,{artPieces:h.filter(S=>S.period===o),onArtClick:r}),i&&kt.createElement("div",{className:"art-details"},kt.createElement("h2",null,i.title),kt.createElement("p",null,i.artist),kt.createElement("img",{src:i.image,alt:i.title})))},fA=({onFinish:o})=>(un.useEffect(()=>{const t=setTimeout(o,1e3);return()=>clearTimeout(t)},[o]),kt.createElement("div",{className:"splash-screen",style:{position:"fixed",inset:0,background:"linear-gradient(135deg, #181818 60%, #2d2d2d 100%)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,transition:"opacity 1s",color:"#fff",fontFamily:"Segoe UI, Arial, sans-serif",flexDirection:"column",fontSize:"2.5rem",letterSpacing:"0.1em",textAlign:"center"}},kt.createElement("div",{style:{fontWeight:700,fontSize:"3rem",marginBottom:"1.5rem"}},"Immersive Art Gallery"),kt.createElement("div",{style:{fontSize:"1.2rem",color:"#bdbdbd",marginBottom:"2rem"}},"Powered by React, Three.js, and the Art Institute of Chicago API"),kt.createElement("div",{style:{fontSize:"1rem",color:"#888"}},"Loading experience..."))),hA=()=>{const[o,t]=un.useState(!0),[i,r]=un.useState(!1);return un.useEffect(()=>{if(!o)return;const l=setTimeout(()=>r(!0),500);return()=>clearTimeout(l)},[o]),kt.createElement(kt.StrictMode,null,o&&kt.createElement("div",{style:{opacity:i?0:1,transition:"opacity 0.5s",pointerEvents:i?"none":"auto"}},kt.createElement(fA,{onFinish:()=>t(!1)})),!o&&kt.createElement(uA,null))};VS.createRoot(document.getElementById("app")).render(kt.createElement(hA,null));
