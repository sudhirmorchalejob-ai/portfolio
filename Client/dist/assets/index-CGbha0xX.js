function q_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mg={exports:{}},Gl={},gg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),K_=Symbol.for("react.portal"),J_=Symbol.for("react.fragment"),Z_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),ex=Symbol.for("react.provider"),tx=Symbol.for("react.context"),nx=Symbol.for("react.forward_ref"),ix=Symbol.for("react.suspense"),rx=Symbol.for("react.memo"),sx=Symbol.for("react.lazy"),ch=Symbol.iterator;function ox(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,xg={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||vg}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yg(){}yg.prototype=Ns.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||vg}var zd=Bd.prototype=new yg;zd.constructor=Bd;_g(zd,Ns.prototype);zd.isPureReactComponent=!0;var uh=Array.isArray,Sg=Object.prototype.hasOwnProperty,Hd={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:t,key:s,ref:o,props:r,_owner:Hd.current}}function ax(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function lx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lx(""+t.key):e.toString(36)}function Ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case K_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,uh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),Ka(r,e,n,"",function(c){return c})):r!=null&&(Vd(r)&&(r=ax(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",uh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xc(s,a);o+=Ka(s,e,n,l,r)}else if(l=ox(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,a++),o+=Ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var i=[],r=0;return Ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ja={transition:null},ux={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Hd};function wg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ns;je.Fragment=J_;je.Profiler=Q_;je.PureComponent=Bd;je.StrictMode=Z_;je.Suspense=ix;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;je.act=wg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_g({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ho,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:tx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ex,_context:t},t.Consumer=t};je.createElement=Mg;je.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:nx,render:t}};je.isValidElement=Vd;je.lazy=function(t){return{$$typeof:sx,_payload:{_status:-1,_result:t},_init:cx}};je.memo=function(t,e){return{$$typeof:rx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};je.unstable_act=wg;je.useCallback=function(t,e){return Qt.current.useCallback(t,e)};je.useContext=function(t){return Qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Qt.current.useEffect(t,e)};je.useId=function(){return Qt.current.useId()};je.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};je.useRef=function(t){return Qt.current.useRef(t)};je.useState=function(t){return Qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Qt.current.useTransition()};je.version="18.3.1";gg.exports=je;var se=gg.exports;const Gd=Y_(se),dx=q_({__proto__:null,default:Gd},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=se,hx=Symbol.for("react.element"),px=Symbol.for("react.fragment"),mx=Object.prototype.hasOwnProperty,gx=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vx={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)mx.call(e,i)&&!vx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hx,type:t,key:s,ref:o,props:r,_owner:gx.current}}Gl.Fragment=px;Gl.jsx=Tg;Gl.jsxs=Tg;mg.exports=Gl;var S=mg.exports,Pu={},bg={exports:{}},En={},Ag={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var k=L.length;L.push(O);e:for(;0<k;){var K=k-1>>>1,Z=L[K];if(0<r(Z,O))L[K]=O,L[k]=Z,k=K;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],k=L.pop();if(k!==O){L[0]=k;e:for(var K=0,Z=L.length,X=Z>>>1;K<X;){var J=2*(K+1)-1,le=L[J],pe=J+1,ge=L[pe];if(0>r(le,k))pe<Z&&0>r(ge,le)?(L[K]=ge,L[pe]=k,K=pe):(L[K]=le,L[J]=k,K=J);else if(pe<Z&&0>r(ge,k))L[K]=ge,L[pe]=k,K=pe;else break e}}return O}function r(L,O){var k=L.sortIndex-O.sortIndex;return k!==0?k:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,p=3,v=!1,m=!1,_=!1,h=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(L){if(_=!1,x(L),!m)if(n(l)!==null)m=!0,P(C);else{var O=n(c);O!==null&&q(y,O.startTime-L)}}function C(L,O){m=!1,_&&(_=!1,u(U),U=-1),v=!0;var k=p;try{for(x(O),f=n(l);f!==null&&(!(f.expirationTime>O)||L&&!V());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var Z=K(f.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),x(O)}else i(l);f=n(l)}if(f!==null)var X=!0;else{var J=n(c);J!==null&&q(y,J.startTime-O),X=!1}return X}finally{f=null,p=k,v=!1}}var A=!1,b=null,U=-1,E=5,w=-1;function V(){return!(t.unstable_now()-w<E)}function Y(){if(b!==null){var L=t.unstable_now();w=L;var O=!0;try{O=b(!0,L)}finally{O?ne():(A=!1,b=null)}}else A=!1}var ne;if(typeof g=="function")ne=function(){g(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,G=N.port2;N.port1.onmessage=Y,ne=function(){G.postMessage(null)}}else ne=function(){h(Y,0)};function P(L){b=L,A||(A=!0,ne())}function q(L,O){U=h(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||v||(m=!0,P(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var k=p;p=O;try{return L()}finally{p=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var k=p;p=L;try{return O()}finally{p=k}},t.unstable_scheduleCallback=function(L,O,k){var K=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?K+k:K):k=K,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=k+Z,L={id:d++,callback:O,priorityLevel:L,startTime:k,expirationTime:Z,sortIndex:-1},k>K?(L.sortIndex=k,e(c,L),n(l)===null&&L===n(c)&&(_?(u(U),U=-1):_=!0,q(y,k-K))):(L.sortIndex=Z,e(l,L),m||v||(m=!0,P(C))),L},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(L){var O=p;return function(){var k=p;p=O;try{return L.apply(this,arguments)}finally{p=k}}}})(Rg);Ag.exports=Rg;var _x=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx=se,Sn=_x;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,yo={};function Nr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(yo[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,yx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},hh={};function Sx(t){return Lu.call(hh,t)?!0:Lu.call(fh,t)?!1:yx.test(t)?hh[t]=!0:(fh[t]=!0,!1)}function Ex(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mx(t,e,n,i){if(e===null||typeof e>"u"||Ex(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Ft[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,jd);Ft[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mx(e,n,r,i)&&(n=null),i||r===null?Sx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,yc;function ro(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Ec(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function wx(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Du:return"Profiler";case $d:return"StrictMode";case Uu:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lg:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function Tx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bx(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=bx(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ig(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function Ou(t,e){Ig(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(so(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Fg(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ax=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){Ax.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Rx=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(Rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,ms=null,gs=null;function xh(t){if(t=Wo(t)){if(typeof Wu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=ql(e),Wu(t.stateNode,t.type,e))}}function Hg(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Vg(){if(ms){var t=ms,e=gs;if(gs=ms=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function Gg(t,e){return t(e)}function Wg(){}var Mc=!1;function jg(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return Gg(t,e,n)}finally{Mc=!1,(ms!==null||gs!==null)&&(Wg(),Vg())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var ju=!1;if(_i)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){ju=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{ju=!1}function Cx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var uo=!1,hl=null,pl=!1,Xu=null,Px={onError:function(t){uo=!0,hl=t}};function Lx(t,e,n,i,r,s,o,a,l){uo=!1,hl=null,Cx.apply(Px,arguments)}function Dx(t,e,n,i,r,s,o,a,l){if(Lx.apply(this,arguments),uo){if(uo){var c=hl;uo=!1,hl=null}else throw Error(te(198));pl||(pl=!0,Xu=c)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(Ir(t)!==t)throw Error(te(188))}function Ux(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function $g(t){return t=Ux(t),t!==null?qg(t):null}function qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qg(t);if(e!==null)return e;t=t.sibling}return null}var Yg=Sn.unstable_scheduleCallback,Sh=Sn.unstable_cancelCallback,Nx=Sn.unstable_shouldYield,Ix=Sn.unstable_requestPaint,_t=Sn.unstable_now,Fx=Sn.unstable_getCurrentPriorityLevel,Jd=Sn.unstable_ImmediatePriority,Kg=Sn.unstable_UserBlockingPriority,ml=Sn.unstable_NormalPriority,Ox=Sn.unstable_LowPriority,Jg=Sn.unstable_IdlePriority,Wl=null,ti=null;function kx(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Hx,Bx=Math.log,zx=Math.LN2;function Hx(t){return t>>>=0,t===0?32:31-(Bx(t)/zx|0)|0}var da=64,fa=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oo(a):(s&=o,s!==0&&(i=oo(s)))}else o=n&~r,o!==0?i=oo(o):s!==0&&(i=oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Vx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zg(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,Qd,t0,n0,i0,qu=!1,ha=[],zi=null,Hi=null,Vi=null,Mo=new Map,wo=new Map,Ui=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xx(t,e,n,i,r){switch(e){case"focusin":return zi=js(zi,t,e,n,i,r),!0;case"dragenter":return Hi=js(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=js(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,js(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wo.set(s,js(wo.get(s)||null,t,e,n,i,r)),!0}return!1}function r0(t){var e=mr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Xg(n),e!==null){t.blockedOn=e,i0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=Wo(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){Za(t)&&n.delete(e)}function $x(){qu=!1,zi!==null&&Za(zi)&&(zi=null),Hi!==null&&Za(Hi)&&(Hi=null),Vi!==null&&Za(Vi)&&(Vi=null),Mo.forEach(Mh),wo.forEach(Mh)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,qu||(qu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,$x)))}function To(t){function e(r){return Xs(r,t)}if(0<ha.length){Xs(ha[0],t);for(var n=1;n<ha.length;n++){var i=ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Xs(zi,t),Hi!==null&&Xs(Hi,t),Vi!==null&&Xs(Vi,t),Mo.forEach(e),wo.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Ui.shift()}var vs=Mi.ReactCurrentBatchConfig,vl=!0;function qx(t,e,n,i){var r=Je,s=vs.transition;vs.transition=null;try{Je=1,ef(t,e,n,i)}finally{Je=r,vs.transition=s}}function Yx(t,e,n,i){var r=Je,s=vs.transition;vs.transition=null;try{Je=4,ef(t,e,n,i)}finally{Je=r,vs.transition=s}}function ef(t,e,n,i){if(vl){var r=Yu(t,e,n,i);if(r===null)Nc(t,e,i,_l,n),Eh(t,i);else if(Xx(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<jx.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&e0(s),s=Yu(t,e,n,i),s===null&&Nc(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var _l=null;function Yu(t,e,n,i){if(_l=null,t=Kd(i),t=mr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fx()){case Jd:return 1;case Kg:return 4;case ml:case Ox:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var Ii=null,tf=null,Qa=null;function o0(){if(Qa)return Qa;var t,e=tf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function wh(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:wh,this.isPropagationStopped=wh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Mn(Is),Go=ht({},Is,{view:0,detail:0}),Kx=Mn(Go),Tc,bc,$s,jl=ht({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Tc=t.screenX-$s.screenX,bc=t.screenY-$s.screenY):bc=Tc=0,$s=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),Th=Mn(jl),Jx=ht({},jl,{dataTransfer:0}),Zx=Mn(Jx),Qx=ht({},Go,{relatedTarget:0}),Ac=Mn(Qx),ey=ht({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=Mn(ey),ny=ht({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iy=Mn(ny),ry=ht({},Is,{data:0}),bh=Mn(ry),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ay[t])?!!e[t]:!1}function rf(){return ly}var cy=ht({},Go,{key:function(t){if(t.key){var e=sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uy=Mn(cy),dy=ht({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=Mn(dy),fy=ht({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),hy=Mn(fy),py=ht({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=Mn(py),gy=ht({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=Mn(gy),_y=[9,13,27,32],sf=_i&&"CompositionEvent"in window,fo=null;_i&&"documentMode"in document&&(fo=document.documentMode);var xy=_i&&"TextEvent"in window&&!fo,a0=_i&&(!sf||fo&&8<fo&&11>=fo),Rh=" ",Ch=!1;function l0(t,e){switch(t){case"keyup":return _y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function yy(t,e){switch(t){case"compositionend":return c0(e);case"keypress":return e.which!==32?null:(Ch=!0,Rh);case"textInput":return t=e.data,t===Rh&&Ch?null:t;default:return null}}function Sy(t,e){if(ns)return t==="compositionend"||!sf&&l0(t,e)?(t=o0(),Qa=tf=Ii=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function u0(t,e,n,i){Hg(i),e=xl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,bo=null;function My(t){S0(t,0)}function Xl(t){var e=ss(t);if(Ng(e))return t}function wy(t,e){if(t==="change")return e}var d0=!1;if(_i){var Rc;if(_i){var Cc="oninput"in document;if(!Cc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Cc=typeof Lh.oninput=="function"}Rc=Cc}else Rc=!1;d0=Rc&&(!document.documentMode||9<document.documentMode)}function Dh(){ho&&(ho.detachEvent("onpropertychange",f0),bo=ho=null)}function f0(t){if(t.propertyName==="value"&&Xl(bo)){var e=[];u0(e,bo,t,Kd(t)),jg(My,e)}}function Ty(t,e,n){t==="focusin"?(Dh(),ho=e,bo=n,ho.attachEvent("onpropertychange",f0)):t==="focusout"&&Dh()}function by(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(bo)}function Ay(t,e){if(t==="click")return Xl(e)}function Ry(t,e){if(t==="input"||t==="change")return Xl(e)}function Cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Cy;function Ao(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=Uh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Py(t){var e=p0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(i!==null&&of(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nh(n,s);var o=Nh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ly=_i&&"documentMode"in document&&11>=document.documentMode,is=null,Ku=null,po=null,Ju=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||is==null||is!==fl(i)||(i=is,"selectionStart"in i&&of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Ao(po,i)||(po=i,i=xl(Ku,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Pc={},m0={};_i&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function $l(t){if(Pc[t])return Pc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return Pc[t]=e[n];return t}var g0=$l("animationend"),v0=$l("animationiteration"),_0=$l("animationstart"),x0=$l("transitionend"),y0=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){y0.set(t,e),Nr(e,[t])}for(var Lc=0;Lc<Fh.length;Lc++){var Dc=Fh[Lc],Dy=Dc.toLowerCase(),Uy=Dc[0].toUpperCase()+Dc.slice(1);er(Dy,"on"+Uy)}er(g0,"onAnimationEnd");er(v0,"onAnimationIteration");er(_0,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(x0,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Dx(i,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,c),s=l}}}if(pl)throw t=Xu,pl=!1,Xu=null,t}function rt(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[ga]){t[ga]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(Ny.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,Uc("selectionchange",!1,e))}}function E0(t,e,n,i){switch(s0(e)){case 1:var r=qx;break;case 4:r=Yx;break;default:r=ef}n=r.bind(null,e,n,t),r=void 0,!ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jg(function(){var c=s,d=Kd(n),f=[];e:{var p=y0.get(t);if(p!==void 0){var v=nf,m=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":v=uy;break;case"focusin":m="focus",v=Ac;break;case"focusout":m="blur",v=Ac;break;case"beforeblur":case"afterblur":v=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hy;break;case g0:case v0:case _0:v=ty;break;case x0:v=my;break;case"scroll":v=Kx;break;case"wheel":v=vy;break;case"copy":case"cut":case"paste":v=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ah}var _=(e&4)!==0,h=!_&&t==="scroll",u=_?p!==null?p+"Capture":null:p;_=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=Eo(g,u),y!=null&&_.push(Co(g,y,x)))),h)break;g=g.return}0<_.length&&(p=new v(p,m,null,n,d),f.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==Gu&&(m=n.relatedTarget||n.fromElement)&&(mr(m)||m[xi]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=c,m=m?mr(m):null,m!==null&&(h=Ir(m),m!==h||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=c),v!==m)){if(_=Th,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ah,y="onPointerLeave",u="onPointerEnter",g="pointer"),h=v==null?p:ss(v),x=m==null?p:ss(m),p=new _(y,g+"leave",v,n,d),p.target=h,p.relatedTarget=x,y=null,mr(d)===c&&(_=new _(u,g+"enter",m,n,d),_.target=x,_.relatedTarget=h,y=_),h=y,v&&m)t:{for(_=v,u=m,g=0,x=_;x;x=Or(x))g++;for(x=0,y=u;y;y=Or(y))x++;for(;0<g-x;)_=Or(_),g--;for(;0<x-g;)u=Or(u),x--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=Or(_),u=Or(u)}_=null}else _=null;v!==null&&kh(f,p,v,_,!1),m!==null&&h!==null&&kh(f,h,m,_,!0)}}e:{if(p=c?ss(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=wy;else if(Ph(p))if(d0)C=Ry;else{C=by;var A=Ty}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Ay);if(C&&(C=C(t,c))){u0(f,C,n,d);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&ku(p,"number",p.value)}switch(A=c?ss(c):window,t){case"focusin":(Ph(A)||A.contentEditable==="true")&&(is=A,Ku=c,po=null);break;case"focusout":po=Ku=is=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Ih(f,n,d);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":Ih(f,n,d)}var b;if(sf)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else ns?l0(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(a0&&n.locale!=="ko"&&(ns||U!=="onCompositionStart"?U==="onCompositionEnd"&&ns&&(b=o0()):(Ii=d,tf="value"in Ii?Ii.value:Ii.textContent,ns=!0)),A=xl(c,U),0<A.length&&(U=new bh(U,t,null,n,d),f.push({event:U,listeners:A}),b?U.data=b:(b=c0(n),b!==null&&(U.data=b)))),(b=xy?yy(t,n):Sy(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(d=new bh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}S0(f,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=Eo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Eo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=Eo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Fy,"")}function va(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(te(425))}function yl(){}var Zu=null,Qu=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(By)}:td;function By(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),To(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);To(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Fs,Po="__reactProps$"+Fs,xi="__reactContainer$"+Fs,nd="__reactEvents$"+Fs,zy="__reactListeners$"+Fs,Hy="__reactHandles$"+Fs;function mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Qn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Qn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function ql(t){return t[Po]||null}var id=[],os=-1;function tr(t){return{current:t}}function ot(t){0>os||(t.current=id[os],id[os]=null,os--)}function it(t,e){os++,id[os]=t.current,t.current=e}var Zi={},jt=tr(Zi),on=tr(!1),br=Zi;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Sl(){ot(on),ot(jt)}function Vh(t,e,n){if(jt.current!==Zi)throw Error(te(168));it(jt,e),it(on,n)}function M0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Tx(t)||"Unknown",r));return ht({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,br=jt.current,it(jt,t),it(on,on.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=M0(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,ot(on),ot(jt),it(jt,t)):ot(on),it(on,n)}var fi=null,Yl=!1,Fc=!1;function w0(t){fi===null?fi=[t]:fi.push(t)}function Vy(t){Yl=!0,w0(t)}function nr(){if(!Fc&&fi!==null){Fc=!0;var t=0,e=Je;try{var n=fi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Yl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Yg(Jd,nr),r}finally{Je=e,Fc=!1}}return null}var as=[],ls=0,Ml=null,wl=0,An=[],Rn=0,Ar=null,pi=1,mi="";function cr(t,e){as[ls++]=wl,as[ls++]=Ml,Ml=t,wl=e}function T0(t,e,n){An[Rn++]=pi,An[Rn++]=mi,An[Rn++]=Ar,Ar=t;var i=pi;t=mi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-jn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function af(t){t.return!==null&&(cr(t,1),T0(t,1,0))}function lf(t){for(;t===Ml;)Ml=as[--ls],as[ls]=null,wl=as[--ls],as[ls]=null;for(;t===Ar;)Ar=An[--Rn],An[Rn]=null,mi=An[--Rn],An[Rn]=null,pi=An[--Rn],An[Rn]=null}var _n=null,vn=null,at=!1,Hn=null;function b0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(at){var e=vn;if(e){var n=e;if(!Wh(t,e)){if(rd(t))throw Error(te(418));e=Gi(n.nextSibling);var i=_n;e&&Wh(t,e)?b0(i,n):(t.flags=t.flags&-4097|2,at=!1,_n=t)}}else{if(rd(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,_n=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function _a(t){if(t!==_n)return!1;if(!at)return jh(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=vn)){if(rd(t))throw A0(),Error(te(418));for(;e;)b0(t,e),e=Gi(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?Gi(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=vn;t;)t=Gi(t.nextSibling)}function ws(){vn=_n=null,at=!1}function cf(t){Hn===null?Hn=[t]:Hn.push(t)}var Gy=Mi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function R0(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,y){return g===null||g.tag!==6?(g=Gc(x,u.mode,y),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,y){var C=x.type;return C===ts?d(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&Xh(C)===g.type)?(y=r(g,x.props),y.ref=qs(u,g,x),y.return=u,y):(y=al(x.type,x.key,x.props,null,u.mode,y),y.ref=qs(u,g,x),y.return=u,y)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Wc(x,u.mode,y),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,y,C){return g===null||g.tag!==7?(g=yr(x,u.mode,y,C),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case la:return x=al(g.type,g.key,g.props,null,u.mode,x),x.ref=qs(u,null,g),x.return=u,x;case es:return g=Wc(g,u.mode,x),g.return=u,g;case Li:var y=g._init;return f(u,y(g._payload),x)}if(so(g)||Gs(g))return g=yr(g,u.mode,x,null),g.return=u,g;xa(u,g)}return null}function p(u,g,x,y){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case la:return x.key===C?l(u,g,x,y):null;case es:return x.key===C?c(u,g,x,y):null;case Li:return C=x._init,p(u,g,C(x._payload),y)}if(so(x)||Gs(x))return C!==null?null:d(u,g,x,y,null);xa(u,x)}return null}function v(u,g,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(g,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case la:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,C);case es:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,C);case Li:var A=y._init;return v(u,g,x,A(y._payload),C)}if(so(y)||Gs(y))return u=u.get(x)||null,d(g,u,y,C,null);xa(g,y)}return null}function m(u,g,x,y){for(var C=null,A=null,b=g,U=g=0,E=null;b!==null&&U<x.length;U++){b.index>U?(E=b,b=null):E=b.sibling;var w=p(u,b,x[U],y);if(w===null){b===null&&(b=E);break}t&&b&&w.alternate===null&&e(u,b),g=s(w,g,U),A===null?C=w:A.sibling=w,A=w,b=E}if(U===x.length)return n(u,b),at&&cr(u,U),C;if(b===null){for(;U<x.length;U++)b=f(u,x[U],y),b!==null&&(g=s(b,g,U),A===null?C=b:A.sibling=b,A=b);return at&&cr(u,U),C}for(b=i(u,b);U<x.length;U++)E=v(b,u,U,x[U],y),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?U:E.key),g=s(E,g,U),A===null?C=E:A.sibling=E,A=E);return t&&b.forEach(function(V){return e(u,V)}),at&&cr(u,U),C}function _(u,g,x,y){var C=Gs(x);if(typeof C!="function")throw Error(te(150));if(x=C.call(x),x==null)throw Error(te(151));for(var A=C=null,b=g,U=g=0,E=null,w=x.next();b!==null&&!w.done;U++,w=x.next()){b.index>U?(E=b,b=null):E=b.sibling;var V=p(u,b,w.value,y);if(V===null){b===null&&(b=E);break}t&&b&&V.alternate===null&&e(u,b),g=s(V,g,U),A===null?C=V:A.sibling=V,A=V,b=E}if(w.done)return n(u,b),at&&cr(u,U),C;if(b===null){for(;!w.done;U++,w=x.next())w=f(u,w.value,y),w!==null&&(g=s(w,g,U),A===null?C=w:A.sibling=w,A=w);return at&&cr(u,U),C}for(b=i(u,b);!w.done;U++,w=x.next())w=v(b,u,U,w.value,y),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?U:w.key),g=s(w,g,U),A===null?C=w:A.sibling=w,A=w);return t&&b.forEach(function(Y){return e(u,Y)}),at&&cr(u,U),C}function h(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case la:e:{for(var C=x.key,A=g;A!==null;){if(A.key===C){if(C=x.type,C===ts){if(A.tag===7){n(u,A.sibling),g=r(A,x.props.children),g.return=u,u=g;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&Xh(C)===A.type){n(u,A.sibling),g=r(A,x.props),g.ref=qs(u,A,x),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===ts?(g=yr(x.props.children,u.mode,y,x.key),g.return=u,u=g):(y=al(x.type,x.key,x.props,null,u.mode,y),y.ref=qs(u,g,x),y.return=u,u=y)}return o(u);case es:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Wc(x,u.mode,y),g.return=u,u=g}return o(u);case Li:return A=x._init,h(u,g,A(x._payload),y)}if(so(x))return m(u,g,x,y);if(Gs(x))return _(u,g,x,y);xa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=Gc(x,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return h}var Ts=R0(!0),C0=R0(!1),Tl=tr(null),bl=null,cs=null,uf=null;function df(){uf=cs=bl=null}function ff(t){var e=Tl.current;ot(Tl),t._currentValue=e}function od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){bl=t,uf=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(bl===null)throw Error(te(308));cs=t,bl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var gr=null;function hf(t){gr===null?gr=[t]:gr.push(t)}function P0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}function $h(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,v=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(p=e,v=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){f=m.call(v,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,p=typeof m=="function"?m.call(v,f,p):m,p==null)break e;f=ht({},f,p);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=f}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var jo={},ni=tr(jo),Lo=tr(jo),Do=tr(jo);function vr(t){if(t===jo)throw Error(te(174));return t}function mf(t,e){switch(it(Do,e),it(Lo,t),it(ni,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}ot(ni),it(ni,e)}function bs(){ot(ni),ot(Lo),ot(Do)}function D0(t){vr(Do.current);var e=vr(ni.current),n=zu(e,t.type);e!==n&&(it(Lo,t),it(ni,n))}function gf(t){Lo.current===t&&(ot(ni),ot(Lo))}var dt=tr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function vf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var nl=Mi.ReactCurrentDispatcher,kc=Mi.ReactCurrentBatchConfig,Rr=0,ft=null,wt=null,Lt=null,Cl=!1,mo=!1,Uo=0,Wy=0;function kt(){throw Error(te(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function xf(t,e,n,i,r,s){if(Rr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?qy:Yy,t=n(i,r),mo){s=0;do{if(mo=!1,Uo=0,25<=s)throw Error(te(301));s+=1,Lt=wt=null,e.updateQueue=null,nl.current=Ky,t=n(i,r)}while(mo)}if(nl.current=Pl,e=wt!==null&&wt.next!==null,Rr=0,Lt=wt=ft=null,Cl=!1,e)throw Error(te(300));return t}function yf(){var t=Uo!==0;return Uo=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Nn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Lt===null?ft.memoizedState:Lt.next;if(e!==null)Lt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function No(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Rr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ft.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U0(){}function N0(t,e){var n=ft,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Sf(O0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Io(9,F0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));Rr&30||I0(n,e,r)}return r}function I0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,i){e.value=n,e.getSnapshot=i,k0(e)&&B0(t)}function O0(t,e,n){return n(function(){k0(e)&&B0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function B0(t){var e=yi(t,1);e!==null&&Xn(e,t,1,-1)}function Yh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=$y.bind(null,ft,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z0(){return Nn().memoizedState}function il(t,e,n,i){var r=Jn();ft.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&_f(i,o.deps)){r.memoizedState=Io(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function Kh(t,e){return il(8390656,8,t,e)}function Sf(t,e){return Kl(2048,8,t,e)}function H0(t,e){return Kl(4,2,t,e)}function V0(t,e){return Kl(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W0(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,G0.bind(null,e,t),n)}function Ef(){}function j0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return Rr&21?($n(n,e)||(n=Zg(),ft.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function jy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{Je=n,kc.transition=i}}function q0(){return Nn().memoizedState}function Xy(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))K0(e,n);else if(n=P0(t,e,n,i),n!==null){var r=Zt();Xn(n,t,i,r),J0(n,e,i)}}function $y(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))K0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P0(t,e,r,i),n!==null&&(r=Zt(),Xn(n,t,i,r),J0(n,e,i))}}function Y0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function K0(t,e){mo=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}var Pl={readContext:Un,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},qy={readContext:Un,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Xy.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Ef,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=jy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Jn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));Rr&30||I0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(O0.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,F0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Dt.identifierPrefix;if(at){var n=mi,i=pi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Wy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yy={readContext:Un,useCallback:j0,useContext:Un,useEffect:Sf,useImperativeHandle:W0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:X0,useReducer:Bc,useRef:z0,useState:function(){return Bc(No)},useDebugValue:Ef,useDeferredValue:function(t){var e=Nn();return $0(e,wt.memoizedState,t)},useTransition:function(){var t=Bc(No)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1},Ky={readContext:Un,useCallback:j0,useContext:Un,useEffect:Sf,useImperativeHandle:W0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:X0,useReducer:zc,useRef:z0,useState:function(){return zc(No)},useDebugValue:Ef,useDeferredValue:function(t){var e=Nn();return wt===null?e.memoizedState=t:$0(e,wt.memoizedState,t)},useTransition:function(){var t=zc(No)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Xi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Xn(e,t,r,i),tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Xi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Xn(e,t,r,i),tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Xi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Xn(e,t,i,n),tl(e,t,i))}};function Jh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function Z0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=an(e)?br:jt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=an(e)?br:jt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=wx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function Q0(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,xd=i),cd(t,e)},n}function ev(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var Zy=Mi.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?C0(e,null,n,i):Ts(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=xf(t,e,n,i,s,r),n=yf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(at&&n&&af(e),e.flags|=1,Kt(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return ud(t,e,n,i,r)}function nv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ds,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ds,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ds,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ds,mn),mn|=i;return Kt(t,e,r,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var s=an(n)?br:jt.current;return s=Ms(e,s),_s(e,r),n=xf(t,e,n,i,s,r),i=yf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(at&&i&&af(e),e.flags|=1,Kt(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(an(n)){var s=!0;El(e)}else s=!1;if(_s(e,r),e.stateNode===null)rl(t,e),Z0(e,n,i),ld(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=an(n)?br:jt.current,c=Ms(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Zh(e,o,i,c),Di=!1;var p=e.memoizedState;o.state=p,Al(e,i,o,r),l=e.memoizedState,a!==i||p!==l||on.current||Di?(typeof d=="function"&&(ad(e,n,d,i),l=e.memoizedState),(a=Di||Jh(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,L0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=an(n)?br:jt.current,l=Ms(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Zh(e,o,i,l),Di=!1,p=e.memoizedState,o.state=p,Al(e,i,o,r);var m=e.memoizedState;a!==f||p!==m||on.current||Di?(typeof v=="function"&&(ad(e,n,v,i),m=e.memoizedState),(c=Di||Jh(e,n,c,i,p,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return dd(t,e,n,i,s,r)}function dd(t,e,n,i,r,s){iv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gh(e,n,!1),Si(t,e,s);i=e.stateNode,Zy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?Vh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vh(t,e.context,!1),mf(t,e.containerInfo)}function sp(t,e,n,i,r){return ws(),cf(r),e.flags|=256,Kt(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hd(n),e.memoizedState=fd,t):Mf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Qy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,i){return i!==null&&cf(i),Ts(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(te(422))),ya(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=hd(o),e.memoizedState=fd,s);if(!(e.mode&1))return ya(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Hc(s,i,void 0),ya(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Xn(i,t,r,-1))}return Cf(),i=Hc(Error(te(421))),ya(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Gi(r.nextSibling),_n=e,at=!0,Hn=null,t!==null&&(An[Rn++]=pi,An[Rn++]=mi,An[Rn++]=Ar,pi=t.id,mi=t.overflow,Ar=e),e=Mf(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),od(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:rv(e),ws();break;case 5:D0(e);break;case 1:an(e.type)&&El(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?sv(t,e,n):(it(dt,dt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return Si(t,e,n)}var av,pd,lv,cv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(ni.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}Hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tS(t,e,n){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return an(e.type)&&Sl(),Bt(e),null;case 3:return i=e.stateNode,bs(),ot(on),ot(jt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Ed(Hn),Hn=null))),pd(t,e),Bt(e),null;case 5:gf(e);var r=vr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Bt(e),null}if(t=vr(ni.current),_a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<ao.length;r++)rt(ao[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":mh(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":vh(i,s),rt("invalid",i)}Hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",""+a]):yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":ca(i),gh(i,s,!0);break;case"textarea":ca(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Po]=i,av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ao.length;r++)rt(ao[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":mh(t,i),r=Fu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":vh(t,i),r=Bu(t,i),rt("invalid",t);break;default:r=i}Hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(t,l):typeof l=="number"&&So(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Xd(t,s,l,o))}switch(n){case"input":ca(t),gh(t,i,!1);break;case"textarea":ca(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=vr(Do.current),vr(ni.current),_a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&vn!==null&&e.mode&1&&!(e.flags&128))A0(),ws(),e.flags|=98560,s=!1;else if(s=_a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Qn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Hn!==null&&(Ed(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Tt===0&&(Tt=3):Cf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return bs(),pd(t,e),t===null&&Ro(e.stateNode.containerInfo),Bt(e),null;case 10:return ff(e.type._context),Bt(e),null;case 17:return an(e.type)&&Sl(),Bt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Rs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Bt(e),null}else 2*_t()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Rf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function nS(t,e){switch(lf(e),e.tag){case 1:return an(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ot(on),ot(jt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return bs(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var Sa=!1,Vt=!1,iS=typeof WeakSet=="function"?WeakSet:Set,he=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function md(t,e,n){try{n()}catch(i){gt(t,e,i)}}var ap=!1;function rS(t,e){if(Zu=vl,t=p0(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},vl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,h=m.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bn(e.type,_),h);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return m=ap,ap=!1,m}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&md(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Po],delete e[nd],delete e[zy],delete e[Hy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Ut=null,zn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Vt||us(n,e);case 6:var i=Ut,r=zn;Ut=null,Ti(t,e,n),Ut=i,zn=r,Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),To(t)):Ic(Ut,n.stateNode));break;case 4:i=Ut,r=zn,Ut=n.stateNode.containerInfo,zn=!0,Ti(t,e,n),Ut=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Vt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ti(t,e,n),Vt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(i){var r=hS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,zn=!1;break e;case 3:Ut=a.stateNode.containerInfo,zn=!0;break e;case 4:Ut=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ut===null)throw Error(te(160));fv(s,o,r),Ut=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Kn(t),i&4){try{go(3,t,t.return),Zl(3,t)}catch(_){gt(t,t.return,_)}try{go(5,t,t.return)}catch(_){gt(t,t.return,_)}}break;case 1:In(e,t),Kn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(In(e,t),Kn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{So(r,"")}catch(_){gt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ig(r,s),Vu(a,o);var c=Vu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?zg(r,f):d==="dangerouslySetInnerHTML"?kg(r,f):d==="children"?So(r,f):Xd(r,d,f,c)}switch(a){case"input":Ou(r,s);break;case"textarea":Fg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ps(r,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(_){gt(t,t.return,_)}}break;case 6:if(In(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){gt(t,t.return,_)}}break;case 3:if(In(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(_){gt(t,t.return,_)}break;case 4:In(e,t),Kn(t);break;case 13:In(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=_t())),i&4&&cp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,In(e,t),Vt=c):In(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(f=he=d;he!==null;){switch(p=he,v=p.child,p.tag){case 0:case 11:case 14:case 15:go(4,p,p.return);break;case 1:us(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){gt(i,n,_)}}break;case 5:us(p,p.return);break;case 22:if(p.memoizedState!==null){dp(f);continue}}v!==null?(v.return=p,he=v):dp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(_){gt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){gt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Kn(t),i&4&&cp(t);break;case 21:break;default:In(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(So(r,""),i.flags&=-33);var s=lp(t);_d(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lp(t);vd(t,a,o);break;default:throw Error(te(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){he=t,pv(t)}function pv(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Sa;var c=Vt;if(Sa=o,(Vt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,he=l):fp(r);for(;s!==null;)he=s,pv(s),s=s.sibling;he=r,Sa=a,Vt=c}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):up(t)}}function up(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&To(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Vt||e.flags&512&&gd(e)}catch(p){gt(e,e.return,p)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function dp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function fp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{gd(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{gd(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var oS=Math.ceil,Ll=Mi.ReactCurrentDispatcher,wf=Mi.ReactCurrentOwner,Dn=Mi.ReactCurrentBatchConfig,Ye=0,Dt=null,St=null,It=0,mn=0,ds=tr(0),Tt=0,Fo=null,Cr=0,Ql=0,Tf=0,vo=null,nn=null,bf=0,Rs=1/0,di=null,Dl=!1,xd=null,ji=null,Ea=!1,Fi=null,Ul=0,_o=0,yd=null,sl=-1,ol=0;function Zt(){return Ye&6?_t():sl!==-1?sl:sl=_t()}function Xi(t){return t.mode&1?Ye&2&&It!==0?It&-It:Gy.transition!==null?(ol===0&&(ol=Zg()),ol):(t=Je,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function Xn(t,e,n,i){if(50<_o)throw _o=0,yd=null,Error(te(185));Vo(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(Ql|=n),Tt===4&&Ni(t,It)),ln(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Rs=_t()+500,Yl&&nr()))}function ln(t,e){var n=t.callbackNode;Gx(t,e);var i=gl(t,t===Dt?It:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?Vy(hp.bind(null,t)):w0(hp.bind(null,t)),ky(function(){!(Ye&6)&&nr()}),n=null;else{switch(Qg(i)){case 1:n=Jd;break;case 4:n=Kg;break;case 16:n=ml;break;case 536870912:n=Jg;break;default:n=ml}n=Ev(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(sl=-1,ol=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=gl(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Ye;Ye|=2;var s=vv();(Dt!==t||It!==e)&&(di=null,Rs=_t()+500,xr(t,e));do try{cS();break}catch(a){gv(t,a)}while(!0);df(),Ll.current=s,Ye=r,St!==null?e=0:(Dt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=$u(t),r!==0&&(i=r,e=Sd(t,r))),e===1)throw n=Fo,xr(t,0),Ni(t,i),ln(t,_t()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!aS(r)&&(e=Nl(t,i),e===2&&(s=$u(t),s!==0&&(i=s,e=Sd(t,s))),e===1))throw n=Fo,xr(t,0),Ni(t,i),ln(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ur(t,nn,di);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=bf+500-_t(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=td(ur.bind(null,t,nn,di),e);break}ur(t,nn,di);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oS(i/1960))-i,10<i){t.timeoutHandle=td(ur.bind(null,t,nn,di),i);break}ur(t,nn,di);break;case 5:ur(t,nn,di);break;default:throw Error(te(329))}}}return ln(t,_t()),t.callbackNode===n?mv.bind(null,t):null}function Sd(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Ed(e)),t}function Ed(t){nn===null?nn=t:nn.push.apply(nn,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Tf,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Ye&6)throw Error(te(327));xs();var e=gl(t,0);if(!(e&1))return ln(t,_t()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=$u(t);i!==0&&(e=i,n=Sd(t,i))}if(n===1)throw n=Fo,xr(t,0),Ni(t,e),ln(t,_t()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,nn,di),ln(t,_t()),null}function Af(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Rs=_t()+500,Yl&&nr())}}function Pr(t){Fi!==null&&Fi.tag===0&&!(Ye&6)&&xs();var e=Ye;Ye|=1;var n=Dn.transition,i=Je;try{if(Dn.transition=null,Je=1,t)return t()}finally{Je=i,Dn.transition=n,Ye=e,!(Ye&6)&&nr()}}function Rf(){mn=ds.current,ot(ds)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Oy(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:bs(),ot(on),ot(jt),vf();break;case 5:gf(i);break;case 4:bs();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:ff(i.type._context);break;case 22:case 23:Rf()}n=n.return}if(Dt=t,St=t=$i(t.current,null),It=mn=e,Tt=0,Fo=null,Tf=Ql=Cr=0,nn=vo=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function gv(t,e){do{var n=St;try{if(df(),nl.current=Pl,Cl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Rr=0,Lt=wt=ft=null,mo=!1,Uo=0,wf.current=null,n===null||n.return===null){Tt=1,Fo=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ep(o);if(v!==null){v.flags&=-257,tp(v,o,a,s,e),v.mode&1&&Qh(s,c,e),e=v,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){Qh(s,c,e),Cf();break e}l=Error(te(426))}}else if(at&&a.mode&1){var h=ep(o);if(h!==null){!(h.flags&65536)&&(h.flags|=256),tp(h,o,a,s,e),cf(As(l,a));break e}}s=l=As(l,a),Tt!==4&&(Tt=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Q0(s,l,e);$h(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ji===null||!ji.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ev(s,a,e);$h(s,y);break e}}s=s.return}while(s!==null)}xv(n)}catch(C){e=C,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function vv(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function Cf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Cr&268435455)&&!(Ql&268435455)||Ni(Dt,It)}function Nl(t,e){var n=Ye;Ye|=2;var i=vv();(Dt!==t||It!==e)&&(di=null,xr(t,e));do try{lS();break}catch(r){gv(t,r)}while(!0);if(df(),Ye=n,Ll.current=i,St!==null)throw Error(te(261));return Dt=null,It=0,Tt}function lS(){for(;St!==null;)_v(St)}function cS(){for(;St!==null&&!Nx();)_v(St)}function _v(t){var e=Sv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?xv(t):St=e,wf.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=tS(n,e,mn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Je,r=Dn.transition;try{Dn.transition=null,Je=1,uS(t,e,n,i)}finally{Dn.transition=r,Je=i}return null}function uS(t,e,n,i){do xs();while(Fi!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wx(t,s),t===Dt&&(St=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Ev(ml,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Je;Je=1;var a=Ye;Ye|=4,wf.current=null,rS(t,n),hv(n,t),Py(Qu),vl=!!Zu,Qu=Zu=null,t.current=n,sS(n),Ix(),Ye=a,Je=o,Dn.transition=s}else t.current=n;if(Ea&&(Ea=!1,Fi=t,Ul=r),s=t.pendingLanes,s===0&&(ji=null),kx(n.stateNode),ln(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=xd,xd=null,t;return Ul&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===yd?_o++:(_o=0,yd=t):_o=0,nr(),null}function xs(){if(Fi!==null){var t=Qg(Ul),e=Dn.transition,n=Je;try{if(Dn.transition=null,Je=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Ul=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:go(8,d,s)}var f=d.child;if(f!==null)f.return=d,he=f;else for(;he!==null;){d=he;var p=d.sibling,v=d.return;if(uv(d),d===c){he=null;break}if(p!==null){p.return=v,he=p;break}he=v}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var h=_.sibling;_.sibling=null,_=h}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,he=x;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(C){gt(a,a.return,C)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Ye=r,nr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{Je=n,Dn.transition=e}}return!1}function pp(t,e,n){e=As(n,e),e=Q0(t,e,1),t=Wi(t,e,1),e=Zt(),t!==null&&(Vo(t,1,e),ln(t,e))}function gt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=As(n,t),t=ev(e,t,1),e=Wi(e,t,1),t=Zt(),e!==null&&(Vo(e,1,t),ln(e,t));break}}e=e.return}}function dS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>_t()-bf?xr(t,0):Tf|=n),ln(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=Zt();t=yi(t,e),t!==null&&(Vo(t,e,n),ln(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function hS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),yv(t,n)}var Sv;Sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,eS(t,e,n);sn=!!(t.flags&131072)}else sn=!1,at&&e.flags&1048576&&T0(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rl(t,e),t=e.pendingProps;var r=Ms(e,jt.current);_s(e,n),r=xf(null,e,i,t,r,n);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,ld(e,i,t,n),e=dd(null,e,i,!0,s,n)):(e.tag=0,at&&s&&af(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mS(i),t=Bn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,Bn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),rp(t,e,i,r,n);case 3:e:{if(rv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,L0(t,e),Al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(te(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(te(424)),e),e=sp(t,e,i,n,r);break e}else for(vn=Gi(e.stateNode.containerInfo.firstChild),_n=e,at=!0,Hn=null,n=C0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=Si(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return D0(e),t===null&&sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ed(i,r)?o=null:s!==null&&ed(i,s)&&(e.flags|=32),iv(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return sv(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),np(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Tl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!on.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Un(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),ip(t,e,i,r,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),rl(t,e),e.tag=1,an(i)?(t=!0,El(e)):t=!1,_s(e,n),Z0(e,i,r),ld(e,i,r,n),dd(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return nv(t,e,n)}throw Error(te(156,e.tag))};function Ev(t,e){return Yg(t,e)}function pS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new pS(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Yd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return yr(n.children,r,s,e);case $d:o=8,r|=8;break;case Du:return t=Ln(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Uu:return t=Ln(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Nu:return t=Ln(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case Dg:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:o=10;break e;case Lg:o=9;break e;case qd:o=11;break e;case Yd:o=14;break e;case Li:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,i,r,s,o,a,l){return t=new gS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function vS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mv(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(an(n))return M0(t,n,e)}return e}function wv(t,e,n,i,r,s,o,a,l){return t=Lf(n,i,!0,t,r,s,o,a,l),t.context=Mv(null),n=t.current,i=Zt(),r=Xi(n),s=vi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,Vo(t,r,i),ln(t,i),t}function tc(t,e,n,i){var r=e.current,s=Zt(),o=Xi(r);return n=Mv(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(Xn(t,r,o,s),tl(t,r,o)),o}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function _S(){return null}var Tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}nc.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));tc(t,e,null,null)};nc.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){tc(null,t,null,null)}),e[xi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&r0(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function xS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(o);s.call(c)}}var o=wv(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=o,t[xi]=o.current,Ro(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Il(l);a.call(c)}}var l=Lf(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[xi]=l.current,Ro(t.nodeType===8?t.parentNode:t),Pr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Il(o);a.call(l)}}tc(e,o,t,r)}else o=xS(n,e,t,r,i);return Il(o)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Zd(e,n|1),ln(e,_t()),!(Ye&6)&&(Rs=_t()+500,nr()))}break;case 13:Pr(function(){var i=yi(t,1);if(i!==null){var r=Zt();Xn(i,t,1,r)}}),Df(t,1)}};Qd=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Zt();Xn(e,t,134217728,n)}Df(t,134217728)}};t0=function(t){if(t.tag===13){var e=Xi(t),n=yi(t,e);if(n!==null){var i=Zt();Xn(n,t,e,i)}Df(t,e)}};n0=function(){return Je};i0=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(te(90));Ng(i),Ou(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Gg=Af;Wg=Pr;var yS={usingClientEntryPoint:!1,Events:[Wo,ss,ql,Hg,Vg,Af]},Ks={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{Wl=Ma.inject(SS),ti=Ma}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(te(200));return vS(t,e,null,n)};En.createRoot=function(t,e){if(!Nf(t))throw Error(te(299));var n=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Ro(t.nodeType===8?t.parentNode:t),new Uf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Pr(t)};En.hydrate=function(t,e,n){if(!ic(e))throw Error(te(200));return rc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wv(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};En.render=function(t,e,n){if(!ic(e))throw Error(te(200));return rc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!ic(t))throw Error(te(40));return t._reactRootContainer?(Pr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};En.unstable_batchedUpdates=Af;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return rc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),bg.exports=En;var ES=bg.exports,vp=ES;Pu.createRoot=vp.createRoot,Pu.hydrateRoot=vp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oo.apply(this,arguments)}var Oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Oi||(Oi={}));const _p="popstate";function MS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Md("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Av(r)}return TS(e,n,null,t)}function Et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function If(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wS(){return Math.random().toString(36).substr(2,8)}function xp(t,e){return{usr:t.state,key:t.key,idx:e}}function Md(t,e,n,i){return n===void 0&&(n=null),Oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||i||wS()})}function Av(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function TS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Oi.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Oo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Oi.Pop;let h=d(),u=h==null?null:h-c;c=h,l&&l({action:a,location:_.location,delta:u})}function p(h,u){a=Oi.Push;let g=Md(_.location,h,u);c=d()+1;let x=xp(g,c),y=_.createHref(g);try{o.pushState(x,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function v(h,u){a=Oi.Replace;let g=Md(_.location,h,u);c=d();let x=xp(g,c),y=_.createHref(g);o.replaceState(x,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function m(h){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof h=="string"?h:Av(h);return g=g.replace(/ $/,"%20"),Et(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let _={get action(){return a},get location(){return t(r,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_p,f),l=h,()=>{r.removeEventListener(_p,f),l=null}},createHref(h){return e(r,h)},createURL:m,encodeLocation(h){let u=m(h);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:v,go(h){return o.go(h)}};return _}var yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yp||(yp={}));function bS(t,e,n){return n===void 0&&(n="/"),AS(t,e,n)}function AS(t,e,n,i){let r=typeof e=="string"?Os(e):e,s=Pv(r.pathname||"/",n);if(s==null)return null;let o=Rv(t);RS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=zS(s);a=OS(o[l],c)}return a}function Rv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Sr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:IS(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Cv(s.path))r(s,o,l)}),e}function Cv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Cv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const CS=/^:[\w-]+$/,PS=3,LS=2,DS=1,US=10,NS=-2,Sp=t=>t==="*";function IS(t,e){let n=t.split("/"),i=n.length;return n.some(Sp)&&(i+=NS),e&&(i+=LS),n.filter(r=>!Sp(r)).reduce((r,s)=>r+(CS.test(s)?PS:s===""?DS:US),i)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function OS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=kS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Sr([s,f.pathname]),pathnameBase:jS(Sr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Sr([s,f.pathnameBase]))}return o}function kS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=BS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let _=a[f]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[f];return v&&!m?c[p]=void 0:c[p]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function BS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),If(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function zS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return If(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const HS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VS=t=>HS.test(t);function GS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Os(t):t,s;if(n)if(VS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),If(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Ep(n.substring(1),"/"):s=Ep(n,e)}else s=e;return{pathname:s,search:XS(i),hash:$S(r)}}function Ep(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lv(t,e){let n=WS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Dv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Os(t):(r=Oo({},t),Et(!r.pathname||!r.pathname.includes("?"),jc("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),jc("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),jc("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=GS(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),jS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$S=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uv=["post","put","patch","delete"];new Set(Uv);const YS=["get",...Uv];new Set(YS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ko.apply(this,arguments)}const Ff=se.createContext(null),KS=se.createContext(null),Xo=se.createContext(null),sc=se.createContext(null),Fr=se.createContext({outlet:null,matches:[],isDataRoute:!1}),Nv=se.createContext(null);function $o(){return se.useContext(sc)!=null}function Of(){return $o()||Et(!1),se.useContext(sc).location}function Iv(t){se.useContext(Xo).static||se.useLayoutEffect(t)}function qo(){let{isDataRoute:t}=se.useContext(Fr);return t?cE():JS()}function JS(){$o()||Et(!1);let t=se.useContext(Ff),{basename:e,future:n,navigator:i}=se.useContext(Xo),{matches:r}=se.useContext(Fr),{pathname:s}=Of(),o=JSON.stringify(Lv(r,n.v7_relativeSplatPath)),a=se.useRef(!1);return Iv(()=>{a.current=!0}),se.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=Dv(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Sr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,o,s,t])}function ZS(t,e){return QS(t,e)}function QS(t,e,n,i){$o()||Et(!1);let{navigator:r}=se.useContext(Xo),{matches:s}=se.useContext(Fr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Of(),d;if(e){var f;let h=typeof e=="string"?Os(e):e;l==="/"||(f=h.pathname)!=null&&f.startsWith(l)||Et(!1),d=h}else d=c;let p=d.pathname||"/",v=p;if(l!=="/"){let h=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(h.length).join("/")}let m=bS(t,{pathname:v}),_=rE(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:Sr([l,r.encodeLocation?r.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:Sr([l,r.encodeLocation?r.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),s,n,i);return e&&_?se.createElement(sc.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Oi.Pop}},_):_}function eE(){let t=lE(),e=qS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},e),n?se.createElement("pre",{style:r},n):null,null)}const tE=se.createElement(eE,null);class nE extends se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?se.createElement(Fr.Provider,{value:this.props.routeContext},se.createElement(Nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iE(t){let{routeContext:e,match:n,children:i}=t,r=se.useContext(Ff);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),se.createElement(Fr.Provider,{value:e},i)}function rE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Et(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:v}=n,m=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||m){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let v,m=!1,_=null,h=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||tE,l&&(c<0&&p===0?(uE("route-fallback"),m=!0,h=null):c===p&&(m=!0,h=f.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,p+1)),g=()=>{let x;return v?x=_:m?x=h:f.route.Component?x=se.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,se.createElement(iE,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?se.createElement(nE,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Fv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fv||{}),Ov=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ov||{});function sE(t){let e=se.useContext(Ff);return e||Et(!1),e}function oE(t){let e=se.useContext(KS);return e||Et(!1),e}function aE(t){let e=se.useContext(Fr);return e||Et(!1),e}function kv(t){let e=aE(),n=e.matches[e.matches.length-1];return n.route.id||Et(!1),n.route.id}function lE(){var t;let e=se.useContext(Nv),n=oE(),i=kv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function cE(){let{router:t}=sE(Fv.UseNavigateStable),e=kv(Ov.UseNavigateStable),n=se.useRef(!1);return Iv(()=>{n.current=!0}),se.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ko({fromRouteId:e},s)))},[t,e])}const Mp={};function uE(t,e,n){Mp[t]||(Mp[t]=!0)}function dE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Xc(t){let{to:e,replace:n,state:i,relative:r}=t;$o()||Et(!1);let{future:s,static:o}=se.useContext(Xo),{matches:a}=se.useContext(Fr),{pathname:l}=Of(),c=qo(),d=Dv(e,Lv(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return se.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function lo(t){Et(!1)}function fE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Oi.Pop,navigator:s,static:o=!1,future:a}=t;$o()&&Et(!1);let l=e.replace(/^\/*/,"/"),c=se.useMemo(()=>({basename:l,navigator:s,static:o,future:ko({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Os(i));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:m="default"}=i,_=se.useMemo(()=>{let h=Pv(d,l);return h==null?null:{location:{pathname:h,search:f,hash:p,state:v,key:m},navigationType:r}},[l,d,f,p,v,m,r]);return _==null?null:se.createElement(Xo.Provider,{value:c},se.createElement(sc.Provider,{children:n,value:_}))}function hE(t){let{children:e,location:n}=t;return ZS(wd(e),n)}new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let n=[];return se.Children.forEach(t,(i,r)=>{if(!se.isValidElement(i))return;let s=[...e,r];if(i.type===se.Fragment){n.push.apply(n,wd(i.props.children,s));return}i.type!==lo&&Et(!1),!i.props.index||!i.props.children||Et(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=wd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pE="6";try{window.__reactRouterVersion=pE}catch{}const mE="startTransition",wp=dx[mE];function gE(t){let{basename:e,children:n,future:i,window:r}=t,s=se.useRef();s.current==null&&(s.current=MS({window:r,v5Compat:!0}));let o=s.current,[a,l]=se.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=se.useCallback(f=>{c&&wp?wp(()=>l(f)):l(f)},[l,c]);return se.useLayoutEffect(()=>o.listen(d),[o,d]),se.useEffect(()=>dE(i),[i]),se.createElement(fE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Tp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tp||(Tp={}));var bp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bp||(bp={}));function Bv({color:t="#7b2fff",count:e=120,speed:n=.3}){const i=se.useRef(null);return se.useEffect(()=>{const r=i.current,s=r.getContext("2d");let o,a,l;const c=()=>{a=r.width=r.offsetWidth,l=r.height=r.offsetHeight};c(),window.addEventListener("resize",c);const f=(h=>{const u=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),x=parseInt(h.slice(5,7),16);return{r:u,g,b:x}})(t),p=Array.from({length:e},()=>({x:Math.random(),y:Math.random(),z:Math.random(),vx:(Math.random()-.5)*2e-4,vy:(Math.random()-.5)*2e-4,vz:(Math.random()-.5)*3e-4*n,size:Math.random()*1.5+.5}));let v={x:.5,y:.5};const m=h=>{v.x=h.clientX/a,v.y=h.clientY/l};window.addEventListener("mousemove",m);const _=()=>{s.clearRect(0,0,a,l);for(const h of p)h.x+=h.vx+(v.x-.5)*8e-5,h.y+=h.vy+(v.y-.5)*8e-5,h.z+=h.vz,h.x<0&&(h.x=1),h.x>1&&(h.x=0),h.y<0&&(h.y=1),h.y>1&&(h.y=0),h.z<0&&(h.z=1),h.z>1&&(h.z=0);for(let h=0;h<p.length;h++)for(let u=h+1;u<p.length;u++){const g=p[h],x=p[u],y=(g.x-x.x)*a,C=(g.y-x.y)*l,A=Math.sqrt(y*y+C*C);if(A<100){const b=(1-A/100)*.15*Math.min(g.z,x.z);s.beginPath(),s.strokeStyle=`rgba(${f.r},${f.g},${f.b},${b})`,s.lineWidth=.5,s.moveTo(g.x*a,g.y*l),s.lineTo(x.x*a,x.y*l),s.stroke()}}for(const h of p){const u=.4+h.z*.6,g=h.size*(.5+h.z*.8);s.beginPath(),s.arc(h.x*a,h.y*l,g,0,Math.PI*2),s.fillStyle=`rgba(${f.r},${f.g},${f.b},${u})`,s.fill()}o=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",c),window.removeEventListener("mousemove",m)}},[t,e,n]),S.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="160",vE=0,Ap=1,_E=2,zv=1,xE=2,ui=3,Qi=0,cn=1,hi=2,qi=0,ys=1,Rp=2,Cp=3,Pp=4,yE=5,hr=100,SE=101,EE=102,Lp=103,Dp=104,ME=200,wE=201,TE=202,bE=203,Td=204,bd=205,AE=206,RE=207,CE=208,PE=209,LE=210,DE=211,UE=212,NE=213,IE=214,FE=0,OE=1,kE=2,Fl=3,BE=4,zE=5,HE=6,VE=7,Bf=0,GE=1,WE=2,Yi=0,jE=1,XE=2,$E=3,qE=4,YE=5,KE=6,Hv=300,Cs=301,Ps=302,Ad=303,Rd=304,oc=306,Cd=1e3,Gn=1001,Pd=1002,Jt=1003,Up=1004,$c=1005,Cn=1006,JE=1007,Bo=1008,Ki=1009,ZE=1010,QE=1011,zf=1012,Vv=1013,ki=1014,Bi=1015,zo=1016,Gv=1017,Wv=1018,Er=1020,eM=1021,Wn=1023,tM=1024,nM=1025,Mr=1026,Ls=1027,iM=1028,jv=1029,rM=1030,Xv=1031,$v=1033,qc=33776,Yc=33777,Kc=33778,Jc=33779,Np=35840,Ip=35841,Fp=35842,Op=35843,qv=36196,kp=37492,Bp=37496,zp=37808,Hp=37809,Vp=37810,Gp=37811,Wp=37812,jp=37813,Xp=37814,$p=37815,qp=37816,Yp=37817,Kp=37818,Jp=37819,Zp=37820,Qp=37821,Zc=36492,em=36494,tm=36495,sM=36283,nm=36284,im=36285,rm=36286,Yv=3e3,wr=3001,oM=3200,aM=3201,Kv=0,lM=1,Pn="",Nt="srgb",Ei="srgb-linear",Hf="display-p3",ac="display-p3-linear",Ol="linear",st="srgb",kl="rec709",Bl="p3",kr=7680,sm=519,cM=512,uM=513,dM=514,Jv=515,fM=516,hM=517,pM=518,mM=519,om=35044,am="300 es",Ld=1035,gi=2e3,zl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Dd=180/Math.PI;function Yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function gM(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function lm(t){return(t&t-1)===0&&t!==0}function Ud(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],v=i[5],m=i[8],_=r[0],h=r[3],u=r[6],g=r[1],x=r[4],y=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*_+a*g+l*C,s[3]=o*h+a*x+l*A,s[6]=o*u+a*y+l*b,s[1]=c*_+d*g+f*C,s[4]=c*h+d*x+f*A,s[7]=c*u+d*y+f*b,s[2]=p*_+v*g+m*C,s[5]=p*h+v*x+m*A,s[8]=p*u+v*y+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*s,v=c*s-o*l,m=n*f+i*p+r*v;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=v*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Ge;function Zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vM(){const t=Hl("canvas");return t.style.display="block",t}const cm={};function xo(t){t in cm||(cm[t]=!0,console.warn(t))}const um=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[Ei]:{transfer:Ol,primaries:kl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:st,primaries:kl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Ol,primaries:Bl,toReference:t=>t.applyMatrix3(dm),fromReference:t=>t.applyMatrix3(um)},[Hf]:{transfer:st,primaries:Bl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(dm),fromReference:t=>t.applyMatrix3(um).convertLinearToSRGB()}},_M=new Set([Ei,ac]),Qe={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_M.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wa[e].toReference,r=wa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wa[t].primaries},getTransfer:function(t){return t===Pn?Ol:wa[t].transfer}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Hl("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class e_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yM=0;class xn extends ks{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Gn,r=Gn,s=Cn,o=Bo,a=Wn,l=Ki,c=xn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Yo(),this.name="",this.source=new e_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===wr?Nt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?wr:Yv}set encoding(e){xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?Nt:Pn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Hv;xn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],v=l[5],m=l[9],_=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(m-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(m+h)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(v+1)/2,C=(u+1)/2,A=(d+p)/4,b=(f+_)/4,U=(m+h)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=b/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((h-m)*(h-m)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(g)<.001&&(g=1),this.x=(h-m)/g,this.y=(f-_)/g,this.z=(p-d)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?Nt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends SM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t_ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EM extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[o+0],v=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=v,e[n+2]=m,e[n+3]=_;return}if(f!==_||l!==p||c!==v||d!==m){let h=1-a;const u=l*p+c*v+d*m+f*_,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*g);h=Math.sin(h*A)/C,a=Math.sin(a*A)/C}const y=a*g;if(l=l*h+p*y,c=c*h+v*y,d=d*h+m*y,f=f*h+_*y,h===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],p=s[o+1],v=s[o+2],m=s[o+3];return e[n]=a*m+d*f+l*v-c*p,e[n+1]=l*m+d*p+c*f-a*v,e[n+2]=c*m+d*v+a*p-l*f,e[n+3]=d*m-a*f-l*p-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),p=l(i/2),v=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*v*m,this._y=c*v*f-p*d*m,this._z=c*d*m+p*v*f,this._w=c*d*f-p*v*m;break;case"YXZ":this._x=p*d*f+c*v*m,this._y=c*v*f-p*d*m,this._z=c*d*m-p*v*f,this._w=c*d*f+p*v*m;break;case"ZXY":this._x=p*d*f-c*v*m,this._y=c*v*f+p*d*m,this._z=c*d*m+p*v*f,this._w=c*d*f-p*v*m;break;case"ZYX":this._x=p*d*f-c*v*m,this._y=c*v*f+p*d*m,this._z=c*d*m-p*v*f,this._w=c*d*f+p*v*m;break;case"YZX":this._x=p*d*f+c*v*m,this._y=c*v*f+p*d*m,this._z=c*d*m-p*v*f,this._w=c*d*f-p*v*m;break;case"XZY":this._x=p*d*f-c*v*m,this._y=c*v*f-p*d*m,this._z=c*d*m+p*v*f,this._w=c*d*f+p*v*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new I,fm=new Ko;class Jo{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),ba.subVectors(this.max,Zs),zr.subVectors(e.a,Zs),Hr.subVectors(e.b,Zs),Vr.subVectors(e.c,Zs),bi.subVectors(Hr,zr),Ai.subVectors(Vr,Hr),sr.subVectors(zr,Vr);let n=[0,-bi.z,bi.y,0,-Ai.z,Ai.y,0,-sr.z,sr.y,bi.z,0,-bi.x,Ai.z,0,-Ai.x,sr.z,0,-sr.x,-bi.y,bi.x,0,-Ai.y,Ai.x,0,-sr.y,sr.x,0];return!su(n,zr,Hr,Vr,ba)||(n=[1,0,0,0,1,0,0,0,1],!su(n,zr,Hr,Vr,ba))?!1:(Aa.crossVectors(bi,Ai),n=[Aa.x,Aa.y,Aa.z],su(n,zr,Hr,Vr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,Ta=new Jo,zr=new I,Hr=new I,Vr=new I,bi=new I,Ai=new I,sr=new I,Zs=new I,ba=new I,Aa=new I,or=new I;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const MM=new Jo,Qs=new I,ou=new I;class Vf{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(ou)),this.expandByPoint(Qs.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new I,au=new I,Ra=new I,Ri=new I,lu=new I,Ca=new I,cu=new I;class wM{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ra),a=Ri.dot(this.direction),l=-Ri.dot(Ra),c=Ri.lengthSq(),d=Math.abs(1-o*o);let f,p,v,m;if(d>0)if(f=o*l-a,p=o*a-l,m=s*d,f>=0)if(p>=-m)if(p<=m){const _=1/d;f*=_,p*=_,v=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*l)+c;else p<=-m?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+p*(p+2*l)+c):p<=m?(f=0,p=Math.min(Math.max(-s,-l),s),v=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),v=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(au).addScaledVector(Ra,p),v}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),Ca.subVectors(i,e),cu.crossVectors(lu,Ca);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Ri,Ca));if(l<0)return null;const c=a*this.direction.dot(lu.cross(Ri));if(c<0||l+c>o)return null;const d=-a*Ri.dot(cu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,d,f,p,v,m,_,h){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,p,v,m,_,h)}set(e,n,i,r,s,o,a,l,c,d,f,p,v,m,_,h){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=v,u[7]=m,u[11]=_,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*d,v=o*f,m=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=v+m*c,n[5]=p-_*c,n[9]=-a*l,n[2]=_-p*c,n[6]=m+v*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,v=l*f,m=c*d,_=c*f;n[0]=p+_*a,n[4]=m*a-v,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=v*a-m,n[6]=_+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,v=l*f,m=c*d,_=c*f;n[0]=p-_*a,n[4]=-o*f,n[8]=m+v*a,n[1]=v+m*a,n[5]=o*d,n[9]=_-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,v=o*f,m=a*d,_=a*f;n[0]=l*d,n[4]=m*c-v,n[8]=p*c+_,n[1]=l*f,n[5]=_*c+p,n[9]=v*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,v=o*c,m=a*l,_=a*c;n[0]=l*d,n[4]=_-p*f,n[8]=m*f+v,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*f+m,n[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,v=o*c,m=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+_,n[5]=o*d,n[9]=v*f-m,n[2]=m*f-v,n[6]=a*d,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,bM)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ci.crossVectors(i,hn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ci.crossVectors(i,hn)),Ci.normalize(),Pa.crossVectors(hn,Ci),r[0]=Ci.x,r[4]=Pa.x,r[8]=hn.x,r[1]=Ci.y,r[5]=Pa.y,r[9]=hn.y,r[2]=Ci.z,r[6]=Pa.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],v=i[13],m=i[2],_=i[6],h=i[10],u=i[14],g=i[3],x=i[7],y=i[11],C=i[15],A=r[0],b=r[4],U=r[8],E=r[12],w=r[1],V=r[5],Y=r[9],ne=r[13],N=r[2],G=r[6],P=r[10],q=r[14],L=r[3],O=r[7],k=r[11],K=r[15];return s[0]=o*A+a*w+l*N+c*L,s[4]=o*b+a*V+l*G+c*O,s[8]=o*U+a*Y+l*P+c*k,s[12]=o*E+a*ne+l*q+c*K,s[1]=d*A+f*w+p*N+v*L,s[5]=d*b+f*V+p*G+v*O,s[9]=d*U+f*Y+p*P+v*k,s[13]=d*E+f*ne+p*q+v*K,s[2]=m*A+_*w+h*N+u*L,s[6]=m*b+_*V+h*G+u*O,s[10]=m*U+_*Y+h*P+u*k,s[14]=m*E+_*ne+h*q+u*K,s[3]=g*A+x*w+y*N+C*L,s[7]=g*b+x*V+y*G+C*O,s[11]=g*U+x*Y+y*P+C*k,s[15]=g*E+x*ne+y*q+C*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],v=e[14],m=e[3],_=e[7],h=e[11],u=e[15];return m*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*v-i*l*v)+_*(+n*l*v-n*c*p+s*o*p-r*o*v+r*c*d-s*l*d)+h*(+n*c*f-n*a*v-s*o*f+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],v=e[11],m=e[12],_=e[13],h=e[14],u=e[15],g=f*h*c-_*p*c+_*l*v-a*h*v-f*l*u+a*p*u,x=m*p*c-d*h*c-m*l*v+o*h*v+d*l*u-o*p*u,y=d*_*c-m*f*c+m*a*v-o*_*v-d*a*u+o*f*u,C=m*f*l-d*_*l-m*a*p+o*_*p+d*a*h-o*f*h,A=n*g+i*x+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=g*b,e[1]=(_*p*s-f*h*s-_*r*v+i*h*v+f*r*u-i*p*u)*b,e[2]=(a*h*s-_*l*s+_*r*c-i*h*c-a*r*u+i*l*u)*b,e[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*v-i*l*v)*b,e[4]=x*b,e[5]=(d*h*s-m*p*s+m*r*v-n*h*v-d*r*u+n*p*u)*b,e[6]=(m*l*s-o*h*s-m*r*c+n*h*c+o*r*u-n*l*u)*b,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*v+n*l*v)*b,e[8]=y*b,e[9]=(m*f*s-d*_*s-m*i*v+n*_*v+d*i*u-n*f*u)*b,e[10]=(o*_*s-m*a*s+m*i*c-n*_*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*v-n*a*v)*b,e[12]=C*b,e[13]=(d*_*r-m*f*r+m*i*p-n*_*p-d*i*h+n*f*h)*b,e[14]=(m*a*r-o*_*r-m*i*l+n*_*l+o*i*h-n*a*h)*b,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*p+n*a*p)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,p=s*c,v=s*d,m=s*f,_=o*d,h=o*f,u=a*f,g=l*c,x=l*d,y=l*f,C=i.x,A=i.y,b=i.z;return r[0]=(1-(_+u))*C,r[1]=(v+y)*C,r[2]=(m-x)*C,r[3]=0,r[4]=(v-y)*A,r[5]=(1-(p+u))*A,r[6]=(h+g)*A,r[7]=0,r[8]=(m+x)*b,r[9]=(h-g)*b,r[10]=(1-(p+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,d=1/o,f=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,m;if(a===gi)v=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===zl)v=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),p=(n+e)*c,v=(i+r)*d;let m,_;if(a===gi)m=(o+s)*f,_=-2*f;else if(a===zl)m=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new I,On=new Mt,TM=new I(0,0,0),bM=new I(1,1,1),Ci=new I,Pa=new I,hn=new I,hm=new Mt,pm=new Ko;class lc{constructor(e=0,n=0,i=0,r=lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lc.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AM=0;const mm=new I,Wr=new Ko,ai=new Mt,La=new I,eo=new I,RM=new I,CM=new Ko,gm=new I(1,0,0),vm=new I(0,1,0),_m=new I(0,0,1),PM={type:"added"},LM={type:"removed"};class Wt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new I,n=new lc,i=new Ko,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ge}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,n){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?La.copy(e):La.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(eo,La,this.up):ai.lookAt(La,eo,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ai),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,RM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),v=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new I,li=new I,uu=new I,ci=new I,jr=new I,Xr=new I,xm=new I,du=new I,fu=new I,hu=new I;let Da=!1;class Vn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),li.subVectors(i,n),uu.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(li),l=kn.dot(uu),c=li.dot(li),d=li.dot(uu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,v=(c*l-a*d)*p,m=(o*d-a*l)*p;return s.set(1-v-m,m,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),li.subVectors(e,n),kn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;jr.subVectors(r,i),Xr.subVectors(s,i),du.subVectors(e,i);const l=jr.dot(du),c=Xr.dot(du);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const d=jr.dot(fu),f=Xr.dot(fu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(jr,o);hu.subVectors(e,s);const v=jr.dot(hu),m=Xr.dot(hu);if(m>=0&&v<=m)return n.copy(s);const _=v*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Xr,a);const h=d*m-v*f;if(h<=0&&f-d>=0&&v-m>=0)return xm.subVectors(s,r),a=(f-d)/(f-d+(v-m)),n.copy(r).addScaledVector(xm,a);const u=1/(h+_+p);return o=_*u,a=p*u,n.copy(i).addScaledVector(jr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=gM(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(rn(Ht.r*255,0,255))*65536+Math.round(rn(Ht.g*255,0,255))*256+Math.round(rn(Ht.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Nt){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Ua);const i=eu(Pi.h,Ua.h,n),r=eu(Pi.s,Ua.s,n),s=eu(Pi.l,Ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Xe;Xe.NAMES=i_;let DM=0;class Zo extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=ys,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=bd,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==bd&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class r_ extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,Na=new $e;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=om,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(e),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class s_ extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UM=0;const Tn=new Mt,mu=new Wt,$r=new I,pn=new Jo,to=new Jo,Pt=new I;class wi extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(pn.min,to.min),pn.expandByPoint(Pt),Pt.addVectors(pn.max,to.max),pn.expandByPoint(Pt)):(pn.expandByPoint(to.min),pn.expandByPoint(to.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),Pt.add($r)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new I,d[w]=new I;const f=new I,p=new I,v=new I,m=new $e,_=new $e,h=new $e,u=new I,g=new I;function x(w,V,Y){f.fromArray(r,w*3),p.fromArray(r,V*3),v.fromArray(r,Y*3),m.fromArray(o,w*2),_.fromArray(o,V*2),h.fromArray(o,Y*2),p.sub(f),v.sub(f),_.sub(m),h.sub(m);const ne=1/(_.x*h.y-h.x*_.y);isFinite(ne)&&(u.copy(p).multiplyScalar(h.y).addScaledVector(v,-_.y).multiplyScalar(ne),g.copy(v).multiplyScalar(_.x).addScaledVector(p,-h.x).multiplyScalar(ne),c[w].add(u),c[V].add(u),c[Y].add(u),d[w].add(g),d[V].add(g),d[Y].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,V=y.length;w<V;++w){const Y=y[w],ne=Y.start,N=Y.count;for(let G=ne,P=ne+N;G<P;G+=3)x(i[G+0],i[G+1],i[G+2])}const C=new I,A=new I,b=new I,U=new I;function E(w){b.fromArray(s,w*3),U.copy(b);const V=c[w];C.copy(V),C.sub(b.multiplyScalar(b.dot(V))).normalize(),A.crossVectors(U,V);const ne=A.dot(d[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=ne}for(let w=0,V=y.length;w<V;++w){const Y=y[w],ne=Y.start,N=Y.count;for(let G=ne,P=ne+N;G<P;G+=3)E(i[G+0]),E(i[G+1]),E(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let p=0,v=e.count;p<v;p+=3){const m=e.getX(p+0),_=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,h),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,v=n.count;p<v;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let v=0,m=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?v=l[_]*a.data.stride+a.offset:v=l[_]*d;for(let u=0;u<d;u++)p[m++]=c[v++]}return new ii(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],v=e(p,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const v=c[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,v=f.length;p<v;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ym=new Mt,ar=new wM,Ia=new Vf,Sm=new I,qr=new I,Yr=new I,Kr=new I,gu=new I,Fa=new I,Oa=new $e,ka=new $e,Ba=new $e,Em=new I,Mm=new I,wm=new I,za=new I,Ha=new I;class ei extends Wt{constructor(e=new wi,n=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(gu.fromBufferAttribute(f,e),o?Fa.addScaledVector(gu,d):Fa.addScaledVector(gu.sub(n),d))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ia.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ia,Sm)===null||ar.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(s).invert(),ar.copy(e.ray).applyMatrix4(ym),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const h=p[m],u=o[h.materialIndex],g=Math.max(h.start,v.start),x=Math.min(a.count,Math.min(h.start+h.count,v.start+v.count));for(let y=g,C=x;y<C;y+=3){const A=a.getX(y),b=a.getX(y+1),U=a.getX(y+2);r=Va(this,u,e,i,c,d,f,A,b,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const m=Math.max(0,v.start),_=Math.min(a.count,v.start+v.count);for(let h=m,u=_;h<u;h+=3){const g=a.getX(h),x=a.getX(h+1),y=a.getX(h+2);r=Va(this,o,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const h=p[m],u=o[h.materialIndex],g=Math.max(h.start,v.start),x=Math.min(l.count,Math.min(h.start+h.count,v.start+v.count));for(let y=g,C=x;y<C;y+=3){const A=y,b=y+1,U=y+2;r=Va(this,u,e,i,c,d,f,A,b,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const m=Math.max(0,v.start),_=Math.min(l.count,v.start+v.count);for(let h=m,u=_;h<u;h+=3){const g=h,x=h+1,y=h+2;r=Va(this,o,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}}}function NM(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ha);return c<n.near||c>n.far?null:{distance:c,point:Ha.clone(),object:t}}function Va(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qr),t.getVertexPosition(l,Yr),t.getVertexPosition(c,Kr);const d=NM(t,e,n,i,qr,Yr,Kr,za);if(d){r&&(Oa.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),d.uv=Vn.getInterpolation(za,qr,Yr,Kr,Oa,ka,Ba,new $e)),s&&(Oa.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),d.uv1=Vn.getInterpolation(za,qr,Yr,Kr,Oa,ka,Ba,new $e),d.uv2=d.uv1),o&&(Em.fromBufferAttribute(o,a),Mm.fromBufferAttribute(o,l),wm.fromBufferAttribute(o,c),d.normal=Vn.getInterpolation(za,qr,Yr,Kr,Em,Mm,wm,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Vn.getNormal(qr,Yr,Kr,f.normal),d.face=f}return d}class Qo extends wi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,v=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(d,3)),this.setAttribute("uv",new yn(f,2));function m(_,h,u,g,x,y,C,A,b,U,E){const w=y/b,V=C/U,Y=y/2,ne=C/2,N=A/2,G=b+1,P=U+1;let q=0,L=0;const O=new I;for(let k=0;k<P;k++){const K=k*V-ne;for(let Z=0;Z<G;Z++){const X=Z*w-Y;O[_]=X*g,O[h]=K*x,O[u]=N,c.push(O.x,O.y,O.z),O[_]=0,O[h]=0,O[u]=A>0?1:-1,d.push(O.x,O.y,O.z),f.push(Z/b),f.push(1-k/U),q+=1}}for(let k=0;k<U;k++)for(let K=0;K<b;K++){const Z=p+K+G*k,X=p+K+G*(k+1),J=p+(K+1)+G*(k+1),le=p+(K+1)+G*k;l.push(Z,X,le),l.push(X,J,le),L+=6}a.addGroup(v,L,E),v+=L,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function IM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const FM={clone:Ds,merge:Yt};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,Zr=1;class BM extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Jr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Jr,Zr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Jr,Zr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Jr,Zr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Jr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Jr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,v),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class c_ extends xn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zM extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wr?Nt:Pn),this.texture=new c_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qo(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:qi});s.uniforms.tEquirect.value=n;const o=new ei(r,s),a=n.minFilter;return n.minFilter===Bo&&(n.minFilter=Cn),new BM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new I,HM=new I,VM=new Ge;class dr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(HM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||VM.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Vf,Ga=new I;class Gf{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],v=r[8],m=r[9],_=r[10],h=r[11],u=r[12],g=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,p-c,h-v,y-u).normalize(),i[1].setComponents(l+s,p+c,h+v,y+u).normalize(),i[2].setComponents(l+o,p+d,h+m,y+g).normalize(),i[3].setComponents(l-o,p-d,h-m,y-g).normalize(),i[4].setComponents(l-a,p-f,h-_,y-x).normalize(),n===gi)i[5].setComponents(l+a,p+f,h+_,y+x).normalize();else if(n===zl)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,p=c.usage,v=f.byteLength,m=t.createBuffer();t.bindBuffer(d,m),t.bufferData(d,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,d,f){const p=d.array,v=d._updateRange,m=d.updateRanges;if(t.bindBuffer(f,c),v.count===-1&&m.length===0&&t.bufferSubData(f,0,p),m.length!==0){for(let _=0,h=m.length;_<h;_++){const u=m[_];n?t.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):t.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):t.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Wf extends wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,p=n/l,v=[],m=[],_=[],h=[];for(let u=0;u<d;u++){const g=u*p-o;for(let x=0;x<c;x++){const y=x*f-s;m.push(y,-g,0),_.push(0,0,1),h.push(x/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,y=g+c*(u+1),C=g+1+c*(u+1),A=g+1+c*u;v.push(x,y,A),v.push(y,C,A)}this.setIndex(v),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.width,e.height,e.widthSegments,e.heightSegments)}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i1=`#ifdef USE_IRIDESCENCE
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
#endif`,r1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h1=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m1=`vec3 transformedNormal = objectNormal;
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
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,E1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
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
}`,D1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,O1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
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
#endif`,G1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,W1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ew=`#if defined( USE_POINTS_UV )
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
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ow=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
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
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Lw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Jw=`#define DISTANCE
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
}`,Zw=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aT=`#define MATCAP
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
}`,lT=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cT=`#define NORMAL
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
}`,uT=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
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
}`,fT=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hT=`#define STANDARD
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
}`,pT=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mT=`#define TOON
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
}`,gT=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,yT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ET=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:WM,alphahash_pars_fragment:jM,alphamap_fragment:XM,alphamap_pars_fragment:$M,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:KM,aomap_pars_fragment:JM,batching_pars_vertex:ZM,batching_vertex:QM,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:d1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:v1,emissivemap_fragment:_1,emissivemap_pars_fragment:x1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:E1,envmap_common_pars_fragment:M1,envmap_pars_fragment:w1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:O1,envmap_vertex:b1,fog_vertex:A1,fog_pars_vertex:R1,fog_fragment:C1,fog_pars_fragment:P1,gradientmap_pars_fragment:L1,lightmap_fragment:D1,lightmap_pars_fragment:U1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:I1,lights_pars_begin:F1,lights_toon_fragment:k1,lights_toon_pars_fragment:B1,lights_phong_fragment:z1,lights_phong_pars_fragment:H1,lights_physical_fragment:V1,lights_physical_pars_fragment:G1,lights_fragment_begin:W1,lights_fragment_maps:j1,lights_fragment_end:X1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:K1,map_fragment:J1,map_pars_fragment:Z1,map_particle_fragment:Q1,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:ow,normal_fragment_begin:aw,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:dw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:vw,packing:_w,premultiplied_alpha_fragment:xw,project_vertex:yw,dithering_fragment:Sw,dithering_pars_fragment:Ew,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:bw,shadowmap_vertex:Aw,shadowmask_pars_fragment:Rw,skinbase_vertex:Cw,skinning_pars_vertex:Pw,skinning_vertex:Lw,skinnormal_vertex:Dw,specularmap_fragment:Uw,specularmap_pars_fragment:Nw,tonemapping_fragment:Iw,tonemapping_pars_fragment:Fw,transmission_fragment:Ow,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Hw,worldpos_vertex:Vw,background_vert:Gw,background_frag:Ww,backgroundCube_vert:jw,backgroundCube_frag:Xw,cube_vert:$w,cube_frag:qw,depth_vert:Yw,depth_frag:Kw,distanceRGBA_vert:Jw,distanceRGBA_frag:Zw,equirect_vert:Qw,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:aT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:dT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:vT,points_frag:_T,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:ET},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Zn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Wa={r:0,b:0,g:0};function MT(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,d,f=null,p=0,v=null;function m(h,u){let g=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===oc)?(d===void 0&&(d=new ei(new Qo(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Ds(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,(f!==x||p!==x.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,f=x,p=x.version,v=t.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ei(new Wf(2,2),new Dr({name:"BackgroundMaterial",uniforms:Ds(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,v=t.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function _(h,u){h.getRGB(Wa,a_(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(h,u=1){a.set(h),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,_(a,l)},render:m}}function wT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let c=l,d=!1;function f(N,G,P,q,L){let O=!1;if(o){const k=_(q,P,G);c!==k&&(c=k,v(c.object)),O=u(N,q,P,L),O&&g(N,q,P,L)}else{const k=G.wireframe===!0;(c.geometry!==q.id||c.program!==P.id||c.wireframe!==k)&&(c.geometry=q.id,c.program=P.id,c.wireframe=k,O=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,U(N,G,P,q),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function m(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,G,P){const q=P.wireframe===!0;let L=a[N.id];L===void 0&&(L={},a[N.id]=L);let O=L[G.id];O===void 0&&(O={},L[G.id]=O);let k=O[q];return k===void 0&&(k=h(p()),O[q]=k),k}function h(N){const G=[],P=[],q=[];for(let L=0;L<r;L++)G[L]=0,P[L]=0,q[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:P,attributeDivisors:q,object:N,attributes:{},index:null}}function u(N,G,P,q){const L=c.attributes,O=G.attributes;let k=0;const K=P.getAttributes();for(const Z in K)if(K[Z].location>=0){const J=L[Z];let le=O[Z];if(le===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;k++}return c.attributesNum!==k||c.index!==q}function g(N,G,P,q){const L={},O=G.attributes;let k=0;const K=P.getAttributes();for(const Z in K)if(K[Z].location>=0){let J=O[Z];J===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),L[Z]=le,k++}c.attributes=L,c.attributesNum=k,c.index=q}function x(){const N=c.newAttributes;for(let G=0,P=N.length;G<P;G++)N[G]=0}function y(N){C(N,0)}function C(N,G){const P=c.newAttributes,q=c.enabledAttributes,L=c.attributeDivisors;P[N]=1,q[N]===0&&(t.enableVertexAttribArray(N),q[N]=1),L[N]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),L[N]=G)}function A(){const N=c.newAttributes,G=c.enabledAttributes;for(let P=0,q=G.length;P<q;P++)G[P]!==N[P]&&(t.disableVertexAttribArray(P),G[P]=0)}function b(N,G,P,q,L,O,k){k===!0?t.vertexAttribIPointer(N,G,P,L,O):t.vertexAttribPointer(N,G,P,q,L,O)}function U(N,G,P,q){if(i.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const L=q.attributes,O=P.getAttributes(),k=G.defaultAttributeValues;for(const K in O){const Z=O[K];if(Z.location>=0){let X=L[K];if(X===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const J=X.normalized,le=X.itemSize,pe=n.get(X);if(pe===void 0)continue;const ge=pe.buffer,Pe=pe.type,Le=pe.bytesPerElement,me=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||X.gpuType===Vv);if(X.isInterleavedBufferAttribute){const qe=X.data,z=qe.stride,Xt=X.offset;if(qe.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)C(Z.location+Me,qe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Me=0;Me<Z.locationSize;Me++)y(Z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Me=0;Me<Z.locationSize;Me++)b(Z.location+Me,le/Z.locationSize,Pe,J,z*Le,(Xt+le/Z.locationSize*Me)*Le,me)}else{if(X.isInstancedBufferAttribute){for(let qe=0;qe<Z.locationSize;qe++)C(Z.location+qe,X.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let qe=0;qe<Z.locationSize;qe++)y(Z.location+qe);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let qe=0;qe<Z.locationSize;qe++)b(Z.location+qe,le/Z.locationSize,Pe,J,le*Le,le/Z.locationSize*qe*Le,me)}}else if(k!==void 0){const J=k[K];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(Z.location,J);break;case 3:t.vertexAttrib3fv(Z.location,J);break;case 4:t.vertexAttrib4fv(Z.location,J);break;default:t.vertexAttrib1fv(Z.location,J)}}}}A()}function E(){Y();for(const N in a){const G=a[N];for(const P in G){const q=G[P];for(const L in q)m(q[L].object),delete q[L];delete G[P]}delete a[N]}}function w(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const P in G){const q=G[P];for(const L in q)m(q[L].object),delete q[L];delete G[P]}delete a[N.id]}function V(N){for(const G in a){const P=a[G];if(P[N.id]===void 0)continue;const q=P[N.id];for(const L in q)m(q[L].object),delete q[L];delete P[N.id]}}function Y(){ne(),d=!0,c!==l&&(c=l,v(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:ne,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function TT(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,p){if(p===0)return;let v,m;if(r)v=t,m="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,d,f,p),n.update(f,s,p)}function c(d,f,p){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p;m++)this.render(d[m],f[m]);else{v.multiDrawArraysWEBGL(s,d,0,f,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];n.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function bT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,y=o||e.has("OES_texture_float"),C=x&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:h,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:A}}function AT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new dr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||i!==0||r;return r=p,i=f.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,v){const m=f.clippingPlanes,_=f.clipIntersection,h=f.clipShadows,u=t.get(f);if(!r||m===null||m.length===0||s&&!h)s?d(null):c();else{const g=s?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=d(m,p,x,v);for(let C=0;C!==x;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,v,m){const _=f!==null?f.length:0;let h=null;if(_!==0){if(h=l.value,m!==!0||h===null){const u=v+_*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(h===null||h.length<u)&&(h=new Float32Array(u));for(let x=0,y=v;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(h,y),h[y+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function RT(t){let e=new WeakMap;function n(o,a){return a===Ad?o.mapping=Cs:a===Rd&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ad||a===Rd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class d_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Tm=[.125,.215,.35,.446,.526,.582],pr=20,_u=new d_,bm=new Xe;let xu=null,yu=0,Su=0;const fr=(1+Math.sqrt(5))/2,Qr=1/fr,Am=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,fr,Qr),new I(0,fr,-Qr),new I(Qr,0,fr),new I(-Qr,0,fr),new I(fr,Qr,0),new I(-fr,Qr,0)];class Rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,yu,Su),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:zo,format:Wn,colorSpace:Ei,depthBuffer:!1},r=Cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(s)),this._blurMaterial=PT(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,_u)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(bm),d.toneMapping=Yi,d.autoClear=!1;const v=new r_({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new ei(new Qo,v);let _=!1;const h=e.background;h?h.isColor&&(v.color.copy(h),e.background=null,_=!0):(v.color.copy(bm),_=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;ja(r,g*x,u>2?x:0,x,x),d.setRenderTarget(r),_&&d.render(m,a),d.render(e,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Am[(r-1)%Am.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ei(this._lodPlanes[r],c),p=c.uniforms,v=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*pr-1),_=s/m,h=isFinite(s)?1+Math.floor(d*_):pr;h>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${pr}`);const u=[];let g=0;for(let b=0;b<pr;++b){const U=b/_,E=Math.exp(-U*U/2);u.push(E),b===0?g+=E:b<h&&(g+=2*E)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=m,p.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-fs?r-x+fs:0),A=4*(this._cubeSize-y);ja(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(f,_u)}}function CT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=Tm[o-t+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,m=6,_=3,h=2,u=1,g=new Float32Array(_*m*v),x=new Float32Array(h*m*v),y=new Float32Array(u*m*v);for(let A=0;A<v;A++){const b=A%3*2/3-1,U=A>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];g.set(E,_*m*A),x.set(p,h*m*A);const w=[A,A,A,A,A,A];y.set(w,u*m*A)}const C=new wi;C.setAttribute("position",new ii(g,_)),C.setAttribute("uv",new ii(x,h)),C.setAttribute("faceIndex",new ii(y,u)),e.push(C),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cm(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PT(t,e,n){const i=new Float32Array(pr),r=new I(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Pm(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Lm(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function LT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ad||l===Rd,d=l===Cs||l===Ps;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Rm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Rm(t));const p=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function DT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UT(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);for(const m in p.morphAttributes){const _=p.morphAttributes[m];for(let h=0,u=_.length;h<u;h++)e.remove(_[h])}p.removeEventListener("dispose",o),delete r[p.id];const v=s.get(p);v&&(e.remove(v),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER);const v=f.morphAttributes;for(const m in v){const _=v[m];for(let h=0,u=_.length;h<u;h++)e.update(_[h],t.ARRAY_BUFFER)}}function c(f){const p=[],v=f.index,m=f.attributes.position;let _=0;if(v!==null){const g=v.array;_=v.version;for(let x=0,y=g.length;x<y;x+=3){const C=g[x+0],A=g[x+1],b=g[x+2];p.push(C,A,A,b,b,C)}}else if(m!==void 0){const g=m.array;_=m.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const C=x+0,A=x+1,b=x+2;p.push(C,A,A,b,b,C)}}else return;const h=new(Zv(p)?o_:s_)(p,1);h.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,h)}function d(f){const p=s.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function NT(t,e,n,i){const r=i.isWebGL2;let s;function o(v){s=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function d(v,m){t.drawElements(s,m,a,v*l),n.update(m,s,1)}function f(v,m,_){if(_===0)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[u](s,m,a,v*l,_),n.update(m,s,_)}function p(v,m,_){if(_===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<_;u++)this.render(v[u]/l,m[u]);else{h.multiDrawElementsWEBGL(s,m,0,a,v,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FT(t,e){return t[0]-e[0]}function OT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function kT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let h=s.get(d);if(h===void 0||h.count!==_){let G=function(){ne.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var v=G;h!==void 0&&h.texture.dispose();const x=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),C===!0&&(E=3);let w=d.attributes.position.count*E,V=1;w>e.maxTextureSize&&(V=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Y=new Float32Array(w*V*4*_),ne=new t_(Y,w,V,_);ne.type=Bi,ne.needsUpdate=!0;const N=E*4;for(let P=0;P<_;P++){const q=A[P],L=b[P],O=U[P],k=w*V*4*P;for(let K=0;K<q.count;K++){const Z=K*N;x===!0&&(o.fromBufferAttribute(q,K),Y[k+Z+0]=o.x,Y[k+Z+1]=o.y,Y[k+Z+2]=o.z,Y[k+Z+3]=0),y===!0&&(o.fromBufferAttribute(L,K),Y[k+Z+4]=o.x,Y[k+Z+5]=o.y,Y[k+Z+6]=o.z,Y[k+Z+7]=0),C===!0&&(o.fromBufferAttribute(O,K),Y[k+Z+8]=o.x,Y[k+Z+9]=o.y,Y[k+Z+10]=o.z,Y[k+Z+11]=O.itemSize===4?o.w:1)}}h={count:_,texture:ne,size:new $e(w,V)},s.set(d,h),d.addEventListener("dispose",G)}let u=0;for(let x=0;x<p.length;x++)u+=p[x];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}else{const m=p===void 0?0:p.length;let _=i[d.id];if(_===void 0||_.length!==m){_=[];for(let y=0;y<m;y++)_[y]=[y,0];i[d.id]=_}for(let y=0;y<m;y++){const C=_[y];C[0]=y,C[1]=p[y]}_.sort(OT);for(let y=0;y<8;y++)y<m&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(FT);const h=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(h&&d.getAttribute("morphTarget"+y)!==h[A]&&d.setAttribute("morphTarget"+y,h[A]),u&&d.getAttribute("morphNormal"+y)!==u[A]&&d.setAttribute("morphNormal"+y,u[A]),r[y]=b,g+=b):(h&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const x=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function BT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class f_ extends xn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Mr,d!==Mr&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mr&&(i=ki),i===void 0&&d===Ls&&(i=Er),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new xn,p_=new f_(1,1);p_.compareFunction=Jv;const m_=new t_,g_=new EM,v_=new c_,Dm=[],Um=[],Nm=new Float32Array(16),Im=new Float32Array(9),Fm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Fm.set(i),t.uniformMatrix2fv(this.addr,!1,Fm),At(n,i)}}function jT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Im.set(i),t.uniformMatrix3fv(this.addr,!1,Im),At(n,i)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(bt(n,i))return;Nm.set(i),t.uniformMatrix4fv(this.addr,!1,Nm),At(n,i)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?p_:h_;n.setTexture2D(e||s,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function sb(t){switch(t){case 5126:return zT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return $T;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return KT;case 5125:return JT;case 36294:return ZT;case 36295:return QT;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(t,e){t.uniform1fv(this.addr,e)}function ab(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function lb(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function cb(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function ub(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function db(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fb(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hb(t,e){t.uniform1iv(this.addr,e)}function pb(t,e){t.uniform2iv(this.addr,e)}function mb(t,e){t.uniform3iv(this.addr,e)}function gb(t,e){t.uniform4iv(this.addr,e)}function vb(t,e){t.uniform1uiv(this.addr,e)}function _b(t,e){t.uniform2uiv(this.addr,e)}function xb(t,e){t.uniform3uiv(this.addr,e)}function yb(t,e){t.uniform4uiv(this.addr,e)}function Sb(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||h_,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||g_,s[o])}function Mb(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function wb(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||m_,s[o])}function Tb(t){switch(t){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return _b;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return wb}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sb(n.type)}}class Ab{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tb(n.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Om(t,e){t.seq.push(e),t.map[e.id]=e}function Cb(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Om(n,c===void 0?new bb(a,t,e):new Ab(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Rb(a),Om(n,f)),n=f}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Cb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pb=37297;let Lb=0;function Db(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ub(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Bl&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===Bl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case ac:return[i,"LinearTransferOETF"];case Nt:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Db(t.getShaderSource(e),o)}else return r}function Nb(t,e){const n=Ub(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Ib(t,e){let n;switch(e){case jE:n="Linear";break;case XE:n="Reinhard";break;case $E:n="OptimizedCineon";break;case qE:n="ACESFilmic";break;case KE:n="AgX";break;case YE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Fb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function Ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hs(t){return t!==""}function zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(zb,Vb)}const Hb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vb(t,e){let n=Oe[e];if(n===void 0){const i=Hb.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===xE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bf:e="ENVMAP_BLENDING_MULTIPLY";break;case GE:e="ENVMAP_BLENDING_MIX";break;case WE:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jb(n),c=Xb(n),d=$b(n),f=qb(n),p=Yb(n),v=n.isWebGL2?"":Fb(n),m=Ob(n),_=kb(s),h=r.createProgram();let u,g,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),g.length>0&&(g+=`
`)):(u=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),g=[v,Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Yi?Ib("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),o=Nd(o),o=zm(o,n),o=Hm(o,n),a=Nd(a),a=zm(a,n),a=Hm(a,n),o=Vm(o),a=Vm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+u+o,C=x+g+a,A=km(r,r.VERTEX_SHADER,y),b=km(r,r.FRAGMENT_SHADER,C);r.attachShader(h,A),r.attachShader(h,b),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function U(Y){if(t.debug.checkShaderErrors){const ne=r.getProgramInfoLog(h).trim(),N=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(b).trim();let P=!0,q=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,h,A,b);else{const L=Bm(r,A,"vertex"),O=Bm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+L+`
`+O)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(N===""||G==="")&&(q=!1);q&&(Y.diagnostics={runnable:P,programLog:ne,vertexShader:{log:N,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(A),r.deleteShader(b),E=new ll(r,h),w=Bb(r,h)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(h,Pb)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=A,this.fragmentShader=b,this}let Jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Qb(e),n.set(e,i)),i}}class Qb{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function eA(t,e,n,i,r,s,o){const a=new n_,l=new Zb,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function h(E,w,V,Y,ne){const N=Y.fog,G=ne.geometry,P=E.isMeshStandardMaterial?Y.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||P),L=q&&q.mapping===oc?q.image.height:null,O=m[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,K=k!==void 0?k.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let X,J,le,pe;if(O){const $t=Zn[O];X=$t.vertexShader,J=$t.fragmentShader}else X=E.vertexShader,J=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const ge=t.getRenderTarget(),Pe=ne.isInstancedMesh===!0,Le=ne.isBatchedMesh===!0,me=!!E.map,qe=!!E.matcap,z=!!q,Xt=!!E.aoMap,Me=!!E.lightMap,Ue=!!E.bumpMap,xe=!!E.normalMap,ct=!!E.displacementMap,ke=!!E.emissiveMap,R=!!E.metalnessMap,M=!!E.roughnessMap,W=E.anisotropy>0,ie=E.clearcoat>0,ee=E.iridescence>0,re=E.sheen>0,ye=E.transmission>0,de=W&&!!E.anisotropyMap,ve=ie&&!!E.clearcoatMap,Ae=ie&&!!E.clearcoatNormalMap,Be=ie&&!!E.clearcoatRoughnessMap,Q=ee&&!!E.iridescenceMap,Ze=ee&&!!E.iridescenceThicknessMap,We=re&&!!E.sheenColorMap,De=re&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,_e=!!E.specularColorMap,Fe=!!E.specularIntensityMap,Ke=ye&&!!E.transmissionMap,pt=ye&&!!E.thicknessMap,He=!!E.gradientMap,oe=!!E.alphaMap,D=E.alphaTest>0,ce=!!E.alphaHash,ue=!!E.extensions,Re=!!G.attributes.uv1,we=!!G.attributes.uv2,et=!!G.attributes.uv3;let tt=Yi;return E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:d,shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:X,fragmentShader:J,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Le,instancing:Pe,instancingColor:Pe&&ne.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ei,map:me,matcap:qe,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:L,aoMap:Xt,lightMap:Me,bumpMap:Ue,normalMap:xe,displacementMap:p&&ct,emissiveMap:ke,normalMapObjectSpace:xe&&E.normalMapType===lM,normalMapTangentSpace:xe&&E.normalMapType===Kv,metalnessMap:R,roughnessMap:M,anisotropy:W,anisotropyMap:de,clearcoat:ie,clearcoatMap:ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ze,sheen:re,sheenColorMap:We,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:_e,specularIntensityMap:Fe,transmission:ye,transmissionMap:Ke,thicknessMap:pt,gradientMap:He,opaque:E.transparent===!1&&E.blending===ys,alphaMap:oe,alphaTest:D,alphaHash:ce,combine:E.combine,mapUv:me&&_(E.map.channel),aoMapUv:Xt&&_(E.aoMap.channel),lightMapUv:Me&&_(E.lightMap.channel),bumpMapUv:Ue&&_(E.bumpMap.channel),normalMapUv:xe&&_(E.normalMap.channel),displacementMapUv:ct&&_(E.displacementMap.channel),emissiveMapUv:ke&&_(E.emissiveMap.channel),metalnessMapUv:R&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:de&&_(E.anisotropyMap.channel),clearcoatMapUv:ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(E.sheenRoughnessMap.channel),specularMapUv:Ee&&_(E.specularMap.channel),specularColorMapUv:_e&&_(E.specularColorMap.channel),specularIntensityMapUv:Fe&&_(E.specularIntensityMap.channel),transmissionMapUv:Ke&&_(E.transmissionMap.channel),thicknessMapUv:pt&&_(E.thicknessMap.channel),alphaMapUv:oe&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xe||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:we,vertexUv3s:et,pointsUvs:ne.isPoints===!0&&!!G.attributes.uv&&(me||oe),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:me&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ue&&E.extensions.derivatives===!0,extensionFragDepth:ue&&E.extensions.fragDepth===!0,extensionDrawBuffers:ue&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)w.push(V),w.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(g(w,E),x(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function g(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function x(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const w=m[E.type];let V;if(w){const Y=Zn[w];V=FM.clone(Y.uniforms)}else V=E.uniforms;return V}function C(E,w){let V;for(let Y=0,ne=c.length;Y<ne;Y++){const N=c[Y];if(N.cacheKey===w){V=N,++V.usedTimes;break}}return V===void 0&&(V=new Kb(t,w,E,s),c.push(V)),V}function A(E){if(--E.usedTimes===0){const w=c.indexOf(E);c[w]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:U}}function tA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,v,m,_,h){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:v,groupOrder:m,renderOrder:f.renderOrder,z:_,group:h},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=v,u.groupOrder=m,u.renderOrder=f.renderOrder,u.z=_,u.group=h),e++,u}function a(f,p,v,m,_,h){const u=o(f,p,v,m,_,h);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(f,p,v,m,_,h){const u=o(f,p,v,m,_,h);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||nA),i.length>1&&i.sort(p||Wm),r.length>1&&r.sort(p||Wm)}function d(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function iA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new jm,t.set(i,[o])):r>=s.length?(o=new jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Xe};break;case"SpotLight":n={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function sA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oA=0;function aA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lA(t,e){const n=new rA,i=sA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,o=new Mt,a=new Mt;function l(d,f){let p=0,v=0,m=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,h=0,u=0,g=0,x=0,y=0,C=0,A=0,b=0,U=0,E=0;d.sort(aA);const w=f===!0?Math.PI:1;for(let Y=0,ne=d.length;Y<ne;Y++){const N=d[Y],G=N.color,P=N.intensity,q=N.distance,L=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=G.r*P*w,v+=G.g*P*w,m+=G.b*P*w;else if(N.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(N.sh.coefficients[O],P);E++}else if(N.isDirectionalLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const k=N.shadow,K=i.get(N);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=L,r.directionalShadowMatrix[_]=N.shadow.matrix,y++}r.directional[_]=O,_++}else if(N.isSpotLight){const O=n.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(G).multiplyScalar(P*w),O.distance=q,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,r.spot[u]=O;const k=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,k.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[u]=k.matrix,N.castShadow){const K=i.get(N);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=L,A++}u++}else if(N.isRectAreaLight){const O=n.get(N);O.color.copy(G).multiplyScalar(P),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),r.rectArea[g]=O,g++}else if(N.isPointLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*w),O.distance=N.distance,O.decay=N.decay,N.castShadow){const k=N.shadow,K=i.get(N);K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,r.pointShadow[h]=K,r.pointShadowMap[h]=L,r.pointShadowMatrix[h]=N.shadow.matrix,C++}r.point[h]=O,h++}else if(N.isHemisphereLight){const O=n.get(N);O.skyColor.copy(N.color).multiplyScalar(P*w),O.groundColor.copy(N.groundColor).multiplyScalar(P*w),r.hemi[x]=O,x++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=m;const V=r.hash;(V.directionalLength!==_||V.pointLength!==h||V.spotLength!==u||V.rectAreaLength!==g||V.hemiLength!==x||V.numDirectionalShadows!==y||V.numPointShadows!==C||V.numSpotShadows!==A||V.numSpotMaps!==b||V.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=g,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,V.directionalLength=_,V.pointLength=h,V.spotLength=u,V.rectAreaLength=g,V.hemiLength=x,V.numDirectionalShadows=y,V.numPointShadows=C,V.numSpotShadows=A,V.numSpotMaps=b,V.numLightProbes=E,r.version=oA++)}function c(d,f){let p=0,v=0,m=0,_=0,h=0;const u=f.matrixWorldInverse;for(let g=0,x=d.length;g<x;g++){const y=d[g];if(y.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),p++}else if(y.isSpotLight){const C=r.spot[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),m++}else if(y.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),v++}else if(y.isHemisphereLight){const C=r.hemi[h];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),h++}}}return{setup:l,setupView:c,state:r}}function Xm(t,e){const n=new lA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Xm(t,e),n.set(s,[l])):o>=a.length?(l=new Xm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class uA extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dA extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
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
}`;function pA(t,e,n){let i=new Gf;const r=new $e,s=new $e,o=new lt,a=new uA({depthPacking:aM}),l=new dA,c={},d=n.maxTextureSize,f={[Qi]:cn,[cn]:Qi,[hi]:hi},p=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:fA,fragmentShader:hA}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const m=new wi;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ei(m,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zv;let u=this.type;this.render=function(A,b,U){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(qi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ne=u!==ui&&this.type===ui,N=u===ui&&this.type!==ui;for(let G=0,P=A.length;G<P;G++){const q=A[G],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,L.mapSize.y=s.y)),L.map===null||ne===!0||N===!0){const K=this.type!==ui?{minFilter:Jt,magFilter:Jt}:{};L.map!==null&&L.map.dispose(),L.map=new Lr(r.x,r.y,K),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const k=L.getViewportCount();for(let K=0;K<k;K++){const Z=L.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),L.updateMatrices(q,K),i=L.getFrustum(),y(b,U,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===ui&&g(L,U),L.needsUpdate=!1}u=this.type,h.needsUpdate=!1,t.setRenderTarget(E,w,V)};function g(A,b){const U=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lr(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,U,p,_,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,U,v,_,null)}function x(A,b,U,E){let w=null;const V=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)w=V;else if(w=U.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=w.uuid,ne=b.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let G=N[ne];G===void 0&&(G=w.clone(),N[ne]=G,b.addEventListener("dispose",C)),w=G}if(w.visible=b.visible,w.wireframe=b.wireframe,E===ui?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:f[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=t.properties.get(w);Y.light=U}return w}function y(A,b,U,E,w){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),N=A.material;if(Array.isArray(N)){const G=ne.groups;for(let P=0,q=G.length;P<q;P++){const L=G[P],O=N[L.materialIndex];if(O&&O.visible){const k=x(A,O,E,w);A.onBeforeShadow(t,A,b,U,ne,k,L),t.renderBufferDirect(U,null,ne,k,A,L),A.onAfterShadow(t,A,b,U,ne,k,L)}}}else if(N.visible){const G=x(A,N,E,w);A.onBeforeShadow(t,A,b,U,ne,G,null),t.renderBufferDirect(U,null,ne,G,A,null),A.onAfterShadow(t,A,b,U,ne,G,null)}}const Y=A.children;for(let ne=0,N=Y.length;ne<N;ne++)y(Y[ne],b,U,E,w)}function C(A){A.target.removeEventListener("dispose",C);for(const U in c){const E=c[U],w=A.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function mA(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const ce=new lt;let ue=null;const Re=new lt(0,0,0,0);return{setMask:function(we){ue!==we&&!D&&(t.colorMask(we,we,we,we),ue=we)},setLocked:function(we){D=we},setClear:function(we,et,tt,Rt,$t){$t===!0&&(we*=Rt,et*=Rt,tt*=Rt),ce.set(we,et,tt,Rt),Re.equals(ce)===!1&&(t.clearColor(we,et,tt,Rt),Re.copy(ce))},reset:function(){D=!1,ue=null,Re.set(-1,0,0,0)}}}function s(){let D=!1,ce=null,ue=null,Re=null;return{setTest:function(we){we?Le(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(we){ce!==we&&!D&&(t.depthMask(we),ce=we)},setFunc:function(we){if(ue!==we){switch(we){case FE:t.depthFunc(t.NEVER);break;case OE:t.depthFunc(t.ALWAYS);break;case kE:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case BE:t.depthFunc(t.EQUAL);break;case zE:t.depthFunc(t.GEQUAL);break;case HE:t.depthFunc(t.GREATER);break;case VE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=we}},setLocked:function(we){D=we},setClear:function(we){Re!==we&&(t.clearDepth(we),Re=we)},reset:function(){D=!1,ce=null,ue=null,Re=null}}}function o(){let D=!1,ce=null,ue=null,Re=null,we=null,et=null,tt=null,Rt=null,$t=null;return{setTest:function(nt){D||(nt?Le(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!D&&(t.stencilMask(nt),ce=nt)},setFunc:function(nt,qt,Yn){(ue!==nt||Re!==qt||we!==Yn)&&(t.stencilFunc(nt,qt,Yn),ue=nt,Re=qt,we=Yn)},setOp:function(nt,qt,Yn){(et!==nt||tt!==qt||Rt!==Yn)&&(t.stencilOp(nt,qt,Yn),et=nt,tt=qt,Rt=Yn)},setLocked:function(nt){D=nt},setClear:function(nt){$t!==nt&&(t.clearStencil(nt),$t=nt)},reset:function(){D=!1,ce=null,ue=null,Re=null,we=null,et=null,tt=null,Rt=null,$t=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let p={},v={},m=new WeakMap,_=[],h=null,u=!1,g=null,x=null,y=null,C=null,A=null,b=null,U=null,E=new Xe(0,0,0),w=0,V=!1,Y=null,ne=null,N=null,G=null,P=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,O=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),L=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),L=O>=2);let K=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),le=new lt().fromArray(X),pe=new lt().fromArray(J);function ge(D,ce,ue,Re){const we=new Uint8Array(4),et=t.createTexture();t.bindTexture(D,et),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ue;tt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ce+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return et}const Pe={};Pe[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(t.DEPTH_TEST),l.setFunc(Fl),ke(!1),R(Ap),Le(t.CULL_FACE),xe(qi);function Le(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function me(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function qe(D,ce){return v[D]!==ce?(t.bindFramebuffer(D,ce),v[D]=ce,i&&(D===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ce),D===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function z(D,ce){let ue=_,Re=!1;if(D)if(ue=m.get(ce),ue===void 0&&(ue=[],m.set(ce,ue)),D.isWebGLMultipleRenderTargets){const we=D.texture;if(ue.length!==we.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=we.length;et<tt;et++)ue[et]=t.COLOR_ATTACHMENT0+et;ue.length=we.length,Re=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Re=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Xt(D){return h!==D?(t.useProgram(D),h=D,!0):!1}const Me={[hr]:t.FUNC_ADD,[SE]:t.FUNC_SUBTRACT,[EE]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Lp]=t.MIN,Me[Dp]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[Lp]=D.MIN_EXT,Me[Dp]=D.MAX_EXT)}const Ue={[ME]:t.ZERO,[wE]:t.ONE,[TE]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[LE]:t.SRC_ALPHA_SATURATE,[CE]:t.DST_COLOR,[AE]:t.DST_ALPHA,[bE]:t.ONE_MINUS_SRC_COLOR,[bd]:t.ONE_MINUS_SRC_ALPHA,[PE]:t.ONE_MINUS_DST_COLOR,[RE]:t.ONE_MINUS_DST_ALPHA,[DE]:t.CONSTANT_COLOR,[UE]:t.ONE_MINUS_CONSTANT_COLOR,[NE]:t.CONSTANT_ALPHA,[IE]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(D,ce,ue,Re,we,et,tt,Rt,$t,nt){if(D===qi){u===!0&&(me(t.BLEND),u=!1);return}if(u===!1&&(Le(t.BLEND),u=!0),D!==yE){if(D!==g||nt!==V){if((x!==hr||A!==hr)&&(t.blendEquation(t.FUNC_ADD),x=hr,A=hr),nt)switch(D){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.ONE,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,C=null,b=null,U=null,E.set(0,0,0),w=0,g=D,V=nt}return}we=we||ce,et=et||ue,tt=tt||Re,(ce!==x||we!==A)&&(t.blendEquationSeparate(Me[ce],Me[we]),x=ce,A=we),(ue!==y||Re!==C||et!==b||tt!==U)&&(t.blendFuncSeparate(Ue[ue],Ue[Re],Ue[et],Ue[tt]),y=ue,C=Re,b=et,U=tt),(Rt.equals(E)===!1||$t!==w)&&(t.blendColor(Rt.r,Rt.g,Rt.b,$t),E.copy(Rt),w=$t),g=D,V=!1}function ct(D,ce){D.side===hi?me(t.CULL_FACE):Le(t.CULL_FACE);let ue=D.side===cn;ce&&(ue=!ue),ke(ue),D.blending===ys&&D.transparent===!1?xe(qi):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Re=D.stencilWrite;c.setTest(Re),Re&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Le(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){Y!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),Y=D)}function R(D){D!==vE?(Le(t.CULL_FACE),D!==ne&&(D===Ap?t.cullFace(t.BACK):D===_E?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),ne=D}function M(D){D!==N&&(L&&t.lineWidth(D),N=D)}function W(D,ce,ue){D?(Le(t.POLYGON_OFFSET_FILL),(G!==ce||P!==ue)&&(t.polygonOffset(ce,ue),G=ce,P=ue)):me(t.POLYGON_OFFSET_FILL)}function ie(D){D?Le(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function ee(D){D===void 0&&(D=t.TEXTURE0+q-1),K!==D&&(t.activeTexture(D),K=D)}function re(D,ce,ue){ue===void 0&&(K===null?ue=t.TEXTURE0+q-1:ue=K);let Re=Z[ue];Re===void 0&&(Re={type:void 0,texture:void 0},Z[ue]=Re),(Re.type!==D||Re.texture!==ce)&&(K!==ue&&(t.activeTexture(ue),K=ue),t.bindTexture(D,ce||Pe[D]),Re.type=D,Re.texture=ce)}function ye(){const D=Z[K];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){le.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),le.copy(D))}function Ke(D){pe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function pt(D,ce){let ue=f.get(ce);ue===void 0&&(ue=new WeakMap,f.set(ce,ue));let Re=ue.get(D);Re===void 0&&(Re=t.getUniformBlockIndex(ce,D.name),ue.set(D,Re))}function He(D,ce){const Re=f.get(ce).get(D);d.get(ce)!==Re&&(t.uniformBlockBinding(ce,Re,D.__bindingPointIndex),d.set(ce,Re))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},K=null,Z={},v={},m=new WeakMap,_=[],h=null,u=!1,g=null,x=null,y=null,C=null,A=null,b=null,U=null,E=new Xe(0,0,0),w=0,V=!1,Y=null,ne=null,N=null,G=null,P=null,le.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:me,bindFramebuffer:qe,drawBuffers:z,useProgram:Xt,setBlending:xe,setMaterial:ct,setFlipSided:ke,setCullFace:R,setLineWidth:M,setPolygonOffset:W,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:ye,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:Ee,texImage3D:_e,updateUBOMapping:pt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ze,scissor:Fe,viewport:Ke,reset:oe}}function gA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return v?new OffscreenCanvas(R,M):Hl("canvas")}function _(R,M,W,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=M?Ud:Math.floor,ye=re(ee*R.width),de=re(ee*R.height);f===void 0&&(f=m(ye,de));const ve=W?m(ye,de):f;return ve.width=ye,ve.height=de,ve.getContext("2d").drawImage(R,0,0,ye,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+de+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function h(R){return lm(R.width)&&lm(R.height)}function u(R){return a?!1:R.wrapS!==Gn||R.wrapT!==Gn||R.minFilter!==Jt&&R.minFilter!==Cn}function g(R,M){return R.generateMipmaps&&M&&R.minFilter!==Jt&&R.minFilter!==Cn}function x(R){t.generateMipmap(R)}function y(R,M,W,ie,ee=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=M;if(M===t.RED&&(W===t.FLOAT&&(re=t.R32F),W===t.HALF_FLOAT&&(re=t.R16F),W===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(re=t.R8UI),W===t.UNSIGNED_SHORT&&(re=t.R16UI),W===t.UNSIGNED_INT&&(re=t.R32UI),W===t.BYTE&&(re=t.R8I),W===t.SHORT&&(re=t.R16I),W===t.INT&&(re=t.R32I)),M===t.RG&&(W===t.FLOAT&&(re=t.RG32F),W===t.HALF_FLOAT&&(re=t.RG16F),W===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA){const ye=ee?Ol:Qe.getTransfer(ie);W===t.FLOAT&&(re=t.RGBA32F),W===t.HALF_FLOAT&&(re=t.RGBA16F),W===t.UNSIGNED_BYTE&&(re=ye===st?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function C(R,M,W){return g(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===Jt||R===Up||R===$c?t.NEAREST:t.LINEAR}function b(R){const M=R.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&d.delete(M)}function U(R){const M=R.target;M.removeEventListener("dispose",U),V(M)}function E(R){const M=i.get(R);if(M.__webglInit===void 0)return;const W=R.source,ie=p.get(W);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(ie).length===0&&p.delete(W)}i.remove(R)}function w(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const W=R.source,ie=p.get(W);delete ie[M.__cacheKey],o.memory.textures--}function V(R){const M=R.texture,W=i.get(R),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(W.__webglFramebuffer[ee]))for(let re=0;re<W.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(W.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(W.__webglFramebuffer[ee]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ee])}else{if(Array.isArray(W.__webglFramebuffer))for(let ee=0;ee<W.__webglFramebuffer.length;ee++)t.deleteFramebuffer(W.__webglFramebuffer[ee]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=M.length;ee<re;ee++){const ye=i.get(M[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(R)}let Y=0;function ne(){Y=0}function N(){const R=Y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Y+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function P(R,M){const W=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(W,R,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function q(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){le(W,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function L(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){le(W,R,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function O(R,M){const W=i.get(R);if(R.version>0&&W.__version!==R.version){pe(W,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const k={[Cd]:t.REPEAT,[Gn]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},K={[Jt]:t.NEAREST,[Up]:t.NEAREST_MIPMAP_NEAREST,[$c]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[JE]:t.LINEAR_MIPMAP_NEAREST,[Bo]:t.LINEAR_MIPMAP_LINEAR},Z={[cM]:t.NEVER,[mM]:t.ALWAYS,[uM]:t.LESS,[Jv]:t.LEQUAL,[dM]:t.EQUAL,[pM]:t.GEQUAL,[fM]:t.GREATER,[hM]:t.NOTEQUAL};function X(R,M,W){if(W?(t.texParameteri(R,t.TEXTURE_WRAP_S,k[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,k[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,k[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Gn||M.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Jt&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Jt||M.minFilter!==$c&&M.minFilter!==Bo||M.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const ie=M.source;let ee=p.get(ie);ee===void 0&&(ee={},p.set(ie,ee));const re=G(M);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[re].usedTimes++;const ye=ee[R.__cacheKey];ye!==void 0&&(ee[R.__cacheKey].usedTimes--,ye.usedTimes===0&&w(M)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return W}function le(R,M,W){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=J(R,M),re=M.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+W);const ye=i.get(re);if(re.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const de=Qe.getPrimaries(Qe.workingColorSpace),ve=M.colorSpace===Pn?null:Qe.getPrimaries(M.colorSpace),Ae=M.colorSpace===Pn||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=u(M)&&h(M.image)===!1;let Q=_(M.image,Be,!1,r.maxTextureSize);Q=ke(M,Q);const Ze=h(Q)||a,We=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Ee=y(M.internalFormat,We,De,M.colorSpace,M.isVideoTexture);X(ie,M,Ze);let _e;const Fe=M.mipmaps,Ke=a&&M.isVideoTexture!==!0&&Ee!==qv,pt=ye.__version===void 0||ee===!0,He=C(M,Q,Ze);if(M.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?M.type===Bi?Ee=t.DEPTH_COMPONENT32F:M.type===ki?Ee=t.DEPTH_COMPONENT24:M.type===Er?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:M.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mr&&Ee===t.DEPTH_COMPONENT&&M.type!==zf&&M.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ki,De=s.convert(M.type)),M.format===Ls&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Er,De=s.convert(M.type))),pt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ee,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,We,De,null));else if(M.isDataTexture)if(Fe.length>0&&Ze){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,We,De,_e.data);M.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,He,Ee,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,We,De,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,Q.width,Q.height,0,We,De,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ee,Fe[0].width,Fe[0].height,Q.depth);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],M.format!==Wn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,Q.depth,We,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ee,_e.width,_e.height,Q.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,Q.depth,We,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ee,_e.width,_e.height,Q.depth,0,We,De,_e.data)}else{Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],M.format!==Wn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,We,De,_e.data)}else if(M.isDataArrayTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Ee,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,We,De,Q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,We,De,Q.data);else if(M.isData3DTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_3D,He,Ee,Q.width,Q.height,Q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,We,De,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,We,De,Q.data);else if(M.isFramebufferTexture){if(pt)if(Ke)n.texStorage2D(t.TEXTURE_2D,He,Ee,Q.width,Q.height);else{let oe=Q.width,D=Q.height;for(let ce=0;ce<He;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ee,oe,D,0,We,De,null),oe>>=1,D>>=1}}else if(Fe.length>0&&Ze){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,He,Ee,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)_e=Fe[oe],Ke?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,We,De,_e):n.texImage2D(t.TEXTURE_2D,oe,Ee,We,De,_e);M.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,He,Ee,Q.width,Q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,De,Q)):n.texImage2D(t.TEXTURE_2D,0,Ee,We,De,Q);g(M,Ze)&&x(ie),ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,W){if(M.image.length!==6)return;const ie=J(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const ye=Qe.getPrimaries(Qe.workingColorSpace),de=M.colorSpace===Pn?null:Qe.getPrimaries(M.colorSpace),ve=M.colorSpace===Pn||ye===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let oe=0;oe<6;oe++)!Ae&&!Be?Q[oe]=_(M.image[oe],!1,!0,r.maxCubemapSize):Q[oe]=Be?M.image[oe].image:M.image[oe],Q[oe]=ke(M,Q[oe]);const Ze=Q[0],We=h(Ze)||a,De=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),_e=y(M.internalFormat,De,Ee,M.colorSpace),Fe=a&&M.isVideoTexture!==!0,Ke=re.__version===void 0||ie===!0;let pt=C(M,Ze,We);X(t.TEXTURE_CUBE_MAP,M,We);let He;if(Ae){Fe&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,Ze.width,Ze.height);for(let oe=0;oe<6;oe++){He=Q[oe].mipmaps;for(let D=0;D<He.length;D++){const ce=He[D];M.format!==Wn?De!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,ce.width,ce.height,De,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,ce.width,ce.height,De,Ee,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,_e,ce.width,ce.height,0,De,Ee,ce.data)}}}else{He=M.mipmaps,Fe&&Ke&&(He.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,Q[0].width,Q[0].height));for(let oe=0;oe<6;oe++)if(Be){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Q[oe].width,Q[oe].height,De,Ee,Q[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,Q[oe].width,Q[oe].height,0,De,Ee,Q[oe].data);for(let D=0;D<He.length;D++){const ue=He[D].image[oe].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,ue.width,ue.height,De,Ee,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,ue.width,ue.height,0,De,Ee,ue.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,Ee,Q[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,De,Ee,Q[oe]);for(let D=0;D<He.length;D++){const ce=He[D];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,De,Ee,ce.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,_e,De,Ee,ce.image[oe])}}}g(M,We)&&x(t.TEXTURE_CUBE_MAP),re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,W,ie,ee,re){const ye=s.convert(W.format,W.colorSpace),de=s.convert(W.type),ve=y(W.internalFormat,ye,de,W.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>re),Q=Math.max(1,M.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,ve,Be,Q,M.depth,0,ye,de,null):n.texImage2D(ee,re,ve,Be,Q,0,ye,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(W).__webglTexture,0,Ue(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(W).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||xe(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Bi?ie=t.DEPTH_COMPONENT32F:ee.type===ki&&(ie=t.DEPTH_COMPONENT24));const re=Ue(M);xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Ue(M);W&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ye=s.convert(re.format,re.colorSpace),de=s.convert(re.type),ve=y(re.internalFormat,ye,de,re.colorSpace),Ae=Ue(M);W&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ve,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ee=Ue(M);if(M.depthTexture.format===Mr)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Ls)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function me(R){const M=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,R)}else if(W){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),Pe(M.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Pe(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,M,W){const ie=i.get(R);M!==void 0&&ge(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&me(R)}function z(R){const M=R.texture,W=i.get(R),ie=i.get(M);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,ye=h(R)||a;if(ee){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let ve=0;ve<M.mipmaps.length;ve++)W.__webglFramebuffer[de][ve]=t.createFramebuffer()}else W.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)W.__webglFramebuffer[de]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const de=R.texture;for(let ve=0,Ae=de.length;ve<Ae;ve++){const Be=i.get(de[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const de=re?M:[M];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const Ae=de[ve];W.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);const Be=s.convert(Ae.format,Ae.colorSpace),Q=s.convert(Ae.type),Ze=y(Ae.internalFormat,Be,Q,Ae.colorSpace,R.isXRRenderTarget===!0),We=Ue(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),X(t.TEXTURE_CUBE_MAP,M,ye);for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(W.__webglFramebuffer[de][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ge(W.__webglFramebuffer[de],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(M,ye)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const de=R.texture;for(let ve=0,Ae=de.length;ve<Ae;ve++){const Be=de[ve],Q=i.get(Be);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),X(t.TEXTURE_2D,Be,ye),ge(W.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),g(Be,ye)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ie.__webglTexture),X(de,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(W.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,de,ve);else ge(W.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,de,0);g(M,ye)&&x(de),n.unbindTexture()}R.depthBuffer&&me(R)}function Xt(R){const M=h(R)||a,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=W.length;ie<ee;ie++){const re=W[ie];if(g(re,M)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(re).__webglTexture;n.bindTexture(ye,de),x(ye),n.unbindTexture()}}}function Me(R){if(a&&R.samples>0&&xe(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,ie=R.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ae=0;Ae<M.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){re.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&re.push(ye);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ve){const Q=i.get(M[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,W,ie,0,0,W,ie,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ae=0;Ae<M.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const Be=i.get(M[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ue(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ke(R,M){const W=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ld||W!==Ei&&W!==Pn&&(Qe.getTransfer(W)===st?a===!1?e.has("EXT_sRGB")===!0&&ie===Wn?(R.format=Ld,R.minFilter=Cn,R.generateMipmaps=!1):M=Qv.sRGBToLinear(M):(ie!==Wn||ee!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=N,this.resetTextureUnits=ne,this.setTexture2D=P,this.setTexture2DArray=q,this.setTexture3D=L,this.setTextureCube=O,this.rebindTextures=qe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function vA(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=Qe.getTransfer(o);if(s===Ki)return t.UNSIGNED_BYTE;if(s===Gv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Wv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ZE)return t.BYTE;if(s===QE)return t.SHORT;if(s===zf)return t.UNSIGNED_SHORT;if(s===Vv)return t.INT;if(s===ki)return t.UNSIGNED_INT;if(s===Bi)return t.FLOAT;if(s===zo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===eM)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===tM)return t.LUMINANCE;if(s===nM)return t.LUMINANCE_ALPHA;if(s===Mr)return t.DEPTH_COMPONENT;if(s===Ls)return t.DEPTH_STENCIL;if(s===Ld)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===iM)return t.RED;if(s===jv)return t.RED_INTEGER;if(s===rM)return t.RG;if(s===Xv)return t.RG_INTEGER;if(s===$v)return t.RGBA_INTEGER;if(s===qc||s===Yc||s===Kc||s===Jc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Np||s===Ip||s===Fp||s===Op)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Np)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ip)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Op)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kp||s===Bp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kp)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zp||s===Hp||s===Vp||s===Gp||s===Wp||s===jp||s===Xp||s===$p||s===qp||s===Yp||s===Kp||s===Jp||s===Zp||s===Qp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$p)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zc||s===em||s===tm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===em)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sM||s===nm||s===im||s===rm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===nm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===im)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class _A extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xa extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const h=n.getJointPose(_,i),u=this._getHandJoint(c,_);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),v=.02,m=.005;c.inputState.pinching&&p>v+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=v-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yA extends ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,v=null,m=null;const _=n.getContextAttributes();let h=null,u=null;const g=[],x=[],y=new $e;let C=null;const A=new gn;A.layers.enable(1),A.viewport=new lt;const b=new gn;b.layers.enable(2),b.viewport=new lt;const U=[A,b],E=new _A;E.layers.enable(1),E.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=g[X];return J===void 0&&(J=new Mu,g[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=g[X];return J===void 0&&(J=new Mu,g[X]=J),J.getGripSpace()},this.getHand=function(X){let J=g[X];return J===void 0&&(J=new Mu,g[X]=J),J.getHandSpace()};function Y(X){const J=x.indexOf(X.inputSource);if(J===-1)return;const le=g[J];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function ne(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",N);for(let X=0;X<g.length;X++){const J=x[X];J!==null&&(x[X]=null,g[X].disconnect(J))}w=null,V=null,e.setRenderTarget(h),v=null,p=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new Lr(v.framebufferWidth,v.framebufferHeight,{format:Wn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,le=null,pe=null;_.depth&&(pe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=_.stencil?Ls:Mr,le=_.stencil?Er:ki);const ge={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new Lr(p.textureWidth,p.textureHeight,{format:Wn,type:Ki,depthTexture:new f_(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(X){for(let J=0;J<X.removed.length;J++){const le=X.removed[J],pe=x.indexOf(le);pe>=0&&(x[pe]=null,g[pe].disconnect(le))}for(let J=0;J<X.added.length;J++){const le=X.added[J];let pe=x.indexOf(le);if(pe===-1){for(let Pe=0;Pe<g.length;Pe++)if(Pe>=x.length){x.push(le),pe=Pe;break}else if(x[Pe]===null){x[Pe]=le,pe=Pe;break}if(pe===-1)break}const ge=g[pe];ge&&ge.connect(le)}}const G=new I,P=new I;function q(X,J,le){G.setFromMatrixPosition(J.matrixWorld),P.setFromMatrixPosition(le.matrixWorld);const pe=G.distanceTo(P),ge=J.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),me=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],z=(ge[9]-1)/ge[5],Xt=(ge[8]-1)/ge[0],Me=(Pe[8]+1)/Pe[0],Ue=Le*Xt,xe=Le*Me,ct=pe/(-Xt+Me),ke=ct*-Xt;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Le+ct,M=me+ct,W=Ue-ke,ie=xe+(pe-ke),ee=qe*me/M*R,re=z*me/M*R;X.projectionMatrix.makePerspective(W,ie,ee,re,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function L(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;E.near=b.near=A.near=X.near,E.far=b.far=A.far=X.far,(w!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,V=E.far);const J=X.parent,le=E.cameras;L(E,J);for(let pe=0;pe<le.length;pe++)L(le[pe],J);le.length===2?q(E,A,b):E.projectionMatrix.copy(A.projectionMatrix),O(X,E,J)};function O(X,J,le){le===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Dd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&v===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)};let k=null;function K(X,J){if(d=J.getViewerPose(c||o),m=J,d!==null){const le=d.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let pe=!1;le.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let ge=0;ge<le.length;ge++){const Pe=le[ge];let Le=null;if(v!==null)Le=v.getViewport(Pe);else{const qe=f.getViewSubImage(p,Pe);Le=qe.viewport,ge===0&&(e.setRenderTargetTextures(u,qe.colorTexture,p.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let me=U[ge];me===void 0&&(me=new gn,me.layers.enable(ge),me.viewport=new lt,U[ge]=me),me.matrix.fromArray(Pe.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Pe.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(E.matrix.copy(me.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(me)}}for(let le=0;le<g.length;le++){const pe=x[le],ge=g[le];pe!==null&&ge!==void 0&&ge.update(pe,J,c||o)}k&&k(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const Z=new u_;Z.setAnimationLoop(K),this.setAnimationLoop=function(X){k=X},this.dispose=function(){}}}function SA(t,e){function n(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,a_(t)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(h,u):u.isMeshToonMaterial?(s(h,u),f(h,u)):u.isMeshPhongMaterial?(s(h,u),d(h,u)):u.isMeshStandardMaterial?(s(h,u),p(h,u),u.isMeshPhysicalMaterial&&v(h,u,y)):u.isMeshMatcapMaterial?(s(h,u),m(h,u)):u.isMeshDepthMaterial?s(h,u):u.isMeshDistanceMaterial?(s(h,u),_(h,u)):u.isMeshNormalMaterial?s(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,g,x):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,n(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===cn&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,n(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===cn&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,n(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,n(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap){h.lightMap.value=u.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=u.lightMapIntensity*x,n(u.lightMap,h.lightMapTransform)}u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,g,x){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*g,h.scale.value=x*.5,u.map&&(h.map.value=u.map,n(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,h.roughnessMapTransform)),e.get(u).envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function v(h,u,g){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&h.clearcoatNormalScale.value.negate())),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,u){u.matcap&&(h.matcap.value=u.matcap)}function _(h,u){const g=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(g.matrixWorld),h.nearDistance.value=g.shadow.camera.near,h.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(m(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",h));const C=x.program;i.updateUBOMapping(g,C);const A=e.render.frame;s[g.id]!==A&&(p(g),s[g.id]=A)}function d(g){const x=f();g.__bindingPointIndex=x;const y=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const x=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,b=y.length;A<b;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,w=U.length;E<w;E++){const V=U[E];if(v(V,A,E,C)===!0){const Y=V.__offset,ne=Array.isArray(V.value)?V.value:[V.value];let N=0;for(let G=0;G<ne.length;G++){const P=ne[G],q=_(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,Y+N,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,x,y,C){const A=g.value,b=x+"_"+y;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const U=C[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function m(g){const x=g.uniforms;let y=0;const C=16;for(let b=0,U=x.length;b<U;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,V=E.length;w<V;w++){const Y=E[w],ne=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,G=ne.length;N<G;N++){const P=ne[N],q=_(P),L=y%C;L!==0&&C-L<q.boundary&&(y+=C-L),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=q.storage}}}const A=y%C;return A>0&&(y+=C-A),g.__size=y,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function h(g){const x=g.target;x.removeEventListener("dispose",h);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class __{constructor(e={}){const{canvas:n=vM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const v=new Uint32Array(4),m=new Int32Array(4);let _=null,h=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const x=this;let y=!1,C=0,A=0,b=null,U=-1,E=null;const w=new lt,V=new lt;let Y=null;const ne=new Xe(0);let N=0,G=n.width,P=n.height,q=1,L=null,O=null;const k=new lt(0,0,G,P),K=new lt(0,0,G,P);let Z=!1;const X=new Gf;let J=!1,le=!1,pe=null;const ge=new Mt,Pe=new $e,Le=new I,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return b===null?q:1}let z=i;function Xt(T,F){for(let j=0;j<T.length;j++){const $=T[j],H=n.getContext($,F);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",ce,!1),z===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),z=Xt(F,T),z===null)throw Xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Ue,xe,ct,ke,R,M,W,ie,ee,re,ye,de,ve,Ae,Be,Q,Ze,We,De,Ee,_e,Fe,Ke;function pt(){Me=new DT(z),Ue=new bT(z,Me,e),Me.init(Ue),_e=new vA(z,Me,Ue),xe=new mA(z,Me,Ue),ct=new IT(z),ke=new tA,R=new gA(z,Me,xe,ke,Ue,_e,ct),M=new RT(x),W=new LT(x),ie=new GM(z,Ue),Fe=new wT(z,Me,ie,Ue),ee=new UT(z,ie,ct,Fe),re=new BT(z,ee,ie,ct),We=new kT(z,Ue,R),Be=new AT(ke),ye=new eA(x,M,W,Me,Ue,Fe,Be),de=new SA(x,ke),ve=new iA,Ae=new cA(Me,Ue),Ze=new MT(x,M,W,xe,re,p,l),Q=new pA(x,re,Ue),Ke=new EA(z,ct,Ue,xe),De=new TT(z,Me,ct,Ue),Ee=new NT(z,Me,ct,Ue),ct.programs=ye.programs,x.capabilities=Ue,x.extensions=Me,x.properties=ke,x.renderLists=ve,x.shadowMap=Q,x.state=xe,x.info=ct}pt();const He=new yA(x,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(G,P,!1))},this.getSize=function(T){return T.set(G,P)},this.setSize=function(T,F,j=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,P=F,n.width=Math.floor(T*q),n.height=Math.floor(F*q),j===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(G*q,P*q).floor()},this.setDrawingBufferSize=function(T,F,j){G=T,P=F,q=j,n.width=Math.floor(T*j),n.height=Math.floor(F*j),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,F,j,$){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,F,j,$),xe.viewport(w.copy(k).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,F,j,$){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,j,$),xe.scissor(V.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){xe.setScissorTest(Z=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,F=!0,j=!0){let $=0;if(T){let H=!1;if(b!==null){const fe=b.texture.format;H=fe===$v||fe===Xv||fe===jv}if(H){const fe=b.texture.type,Se=fe===Ki||fe===ki||fe===zf||fe===Er||fe===Gv||fe===Wv,Te=Ze.getClearColor(),Ce=Ze.getClearAlpha(),ze=Te.r,Ne=Te.g,Ie=Te.b;Se?(v[0]=ze,v[1]=Ne,v[2]=Ie,v[3]=Ce,z.clearBufferuiv(z.COLOR,0,v)):(m[0]=ze,m[1]=Ne,m[2]=Ie,m[3]=Ce,z.clearBufferiv(z.COLOR,0,m))}else $|=z.COLOR_BUFFER_BIT}F&&($|=z.DEPTH_BUFFER_BIT),j&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ve.dispose(),Ae.dispose(),ke.dispose(),M.dispose(),W.dispose(),re.dispose(),Fe.dispose(),Ke.dispose(),ye.dispose(),He.dispose(),He.removeEventListener("sessionstart",$t),He.removeEventListener("sessionend",nt),pe&&(pe.dispose(),pe=null),qt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ct.autoReset,F=Q.enabled,j=Q.autoUpdate,$=Q.needsUpdate,H=Q.type;pt(),ct.autoReset=T,Q.enabled=F,Q.autoUpdate=j,Q.needsUpdate=$,Q.type=H}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const F=T.target;F.removeEventListener("dispose",ue),Re(F)}function Re(T){we(T),ke.remove(T)}function we(T){const F=ke.get(T).programs;F!==void 0&&(F.forEach(function(j){ye.releaseProgram(j)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,j,$,H,fe){F===null&&(F=me);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Te=W_(T,F,j,$,H);xe.setMaterial($,Se);let Ce=j.index,ze=1;if($.wireframe===!0){if(Ce=ee.getWireframeAttribute(j),Ce===void 0)return;ze=2}const Ne=j.drawRange,Ie=j.attributes.position;let vt=Ne.start*ze,fn=(Ne.start+Ne.count)*ze;fe!==null&&(vt=Math.max(vt,fe.start*ze),fn=Math.min(fn,(fe.start+fe.count)*ze)),Ce!==null?(vt=Math.max(vt,0),fn=Math.min(fn,Ce.count)):Ie!=null&&(vt=Math.max(vt,0),fn=Math.min(fn,Ie.count));const Ct=fn-vt;if(Ct<0||Ct===1/0)return;Fe.setup(H,$,Te,j,Ce);let ri,ut=De;if(Ce!==null&&(ri=ie.get(Ce),ut=Ee,ut.setIndex(ri)),H.isMesh)$.wireframe===!0?(xe.setLineWidth($.wireframeLinewidth*qe()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(H.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),xe.setLineWidth(Ve*qe()),H.isLineSegments?ut.setMode(z.LINES):H.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else H.isPoints?ut.setMode(z.POINTS):H.isSprite&&ut.setMode(z.TRIANGLES);if(H.isBatchedMesh)ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ut.renderInstances(vt,Ct,H.count);else if(j.isInstancedBufferGeometry){const Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,mc=Math.min(j.instanceCount,Ve);ut.renderInstances(vt,Ct,mc)}else ut.render(vt,Ct)};function et(T,F,j){T.transparent===!0&&T.side===hi&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,oa(T,F,j),T.side=Qi,T.needsUpdate=!0,oa(T,F,j),T.side=hi):oa(T,F,j)}this.compile=function(T,F,j=null){j===null&&(j=T),h=Ae.get(j),h.init(),g.push(h),j.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(x._useLegacyLights);const $=new Set;return T.traverse(function(H){const fe=H.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Te=fe[Se];et(Te,j,H),$.add(Te)}else et(fe,j,H),$.add(fe)}),g.pop(),h=null,$},this.compileAsync=function(T,F,j=null){const $=this.compile(T,F,j);return new Promise(H=>{function fe(){if($.forEach(function(Se){ke.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){H(T);return}setTimeout(fe,10)}Me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let tt=null;function Rt(T){tt&&tt(T)}function $t(){qt.stop()}function nt(){qt.start()}const qt=new u_;qt.setAnimationLoop(Rt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(T){tt=T,He.setAnimationLoop(T),T===null?qt.stop():qt.start()},He.addEventListener("sessionstart",$t),He.addEventListener("sessionend",nt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(F),F=He.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,b),h=Ae.get(T,g.length),h.init(),g.push(h),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ge),le=this.localClippingEnabled,J=Be.init(this.clippingPlanes,le),_=ve.get(T,u.length),_.init(),u.push(_),Yn(T,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(L,O),this.info.render.frame++,J===!0&&Be.beginShadows();const j=h.state.shadowsArray;if(Q.render(j,T,F),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,T),h.setupLights(x._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let H=0,fe=$.length;H<fe;H++){const Se=$[H];ih(_,T,Se,Se.viewport)}}else ih(_,T,F);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,F),Fe.resetDefaultState(),U=-1,E=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Yn(T,F,j,$){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){$&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const Se=re.update(T),Te=T.material;Te.visible&&_.push(T,Se,Te,j,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Se=re.update(T),Te=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Le.copy(Se.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){const Ce=Se.groups;for(let ze=0,Ne=Ce.length;ze<Ne;ze++){const Ie=Ce[ze],vt=Te[Ie.materialIndex];vt&&vt.visible&&_.push(T,Se,vt,j,Le.z,Ie)}}else Te.visible&&_.push(T,Se,Te,j,Le.z,null)}}const fe=T.children;for(let Se=0,Te=fe.length;Se<Te;Se++)Yn(fe[Se],F,j,$)}function ih(T,F,j,$){const H=T.opaque,fe=T.transmissive,Se=T.transparent;h.setupLightsView(j),J===!0&&Be.setGlobalState(x.clippingPlanes,j),fe.length>0&&G_(H,fe,F,j),$&&xe.viewport(w.copy($)),H.length>0&&sa(H,F,j),fe.length>0&&sa(fe,F,j),Se.length>0&&sa(Se,F,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function G_(T,F,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=Ue.isWebGL2;pe===null&&(pe=new Lr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?zo:Ki,minFilter:Bo,samples:fe?4:0})),x.getDrawingBufferSize(Pe),fe?pe.setSize(Pe.x,Pe.y):pe.setSize(Ud(Pe.x),Ud(Pe.y));const Se=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(ne),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=Yi,sa(T,j,$),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Ce=!1;for(let ze=0,Ne=F.length;ze<Ne;ze++){const Ie=F[ze],vt=Ie.object,fn=Ie.geometry,Ct=Ie.material,ri=Ie.group;if(Ct.side===hi&&vt.layers.test($.layers)){const ut=Ct.side;Ct.side=cn,Ct.needsUpdate=!0,rh(vt,j,$,fn,Ct,ri),Ct.side=ut,Ct.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),x.setRenderTarget(Se),x.setClearColor(ne,N),x.toneMapping=Te}function sa(T,F,j){const $=F.isScene===!0?F.overrideMaterial:null;for(let H=0,fe=T.length;H<fe;H++){const Se=T[H],Te=Se.object,Ce=Se.geometry,ze=$===null?Se.material:$,Ne=Se.group;Te.layers.test(j.layers)&&rh(Te,F,j,Ce,ze,Ne)}}function rh(T,F,j,$,H,fe){T.onBeforeRender(x,F,j,$,H,fe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,F,j,$,T,fe),H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,x.renderBufferDirect(j,F,$,H,T,fe),H.side=Qi,H.needsUpdate=!0,x.renderBufferDirect(j,F,$,H,T,fe),H.side=hi):x.renderBufferDirect(j,F,$,H,T,fe),T.onAfterRender(x,F,j,$,H,fe)}function oa(T,F,j){F.isScene!==!0&&(F=me);const $=ke.get(T),H=h.state.lights,fe=h.state.shadowsArray,Se=H.state.version,Te=ye.getParameters(T,H.state,fe,F,j),Ce=ye.getProgramCacheKey(Te);let ze=$.programs;$.environment=T.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(T.isMeshStandardMaterial?W:M).get(T.envMap||$.environment),ze===void 0&&(T.addEventListener("dispose",ue),ze=new Map,$.programs=ze);let Ne=ze.get(Ce);if(Ne!==void 0){if($.currentProgram===Ne&&$.lightsStateVersion===Se)return oh(T,Te),Ne}else Te.uniforms=ye.getUniforms(T),T.onBuild(j,Te,x),T.onBeforeCompile(Te,x),Ne=ye.acquireProgram(Te,Ce),ze.set(Ce,Ne),$.uniforms=Te.uniforms;const Ie=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=Be.uniform),oh(T,Te),$.needsLights=X_(T),$.lightsStateVersion=Se,$.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ne,$.uniformsList=null,Ne}function sh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ll.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function oh(T,F){const j=ke.get(T);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function W_(T,F,j,$,H){F.isScene!==!0&&(F=me),R.resetTextureUnits();const fe=F.fog,Se=$.isMeshStandardMaterial?F.environment:null,Te=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ei,Ce=($.isMeshStandardMaterial?W:M).get($.envMap||Se),ze=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,fn=!!j.morphAttributes.color;let Ct=Yi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=x.toneMapping);const ri=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ut=ri!==void 0?ri.length:0,Ve=ke.get($),mc=h.state.lights;if(J===!0&&(le===!0||T!==E)){const wn=T===E&&$.id===U;Be.setState($,T,wn)}let mt=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==mc.state.version||Ve.outputColorSpace!==Te||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||Ve.envMap!==Ce||$.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ne||Ve.morphTargets!==Ie||Ve.morphNormals!==vt||Ve.morphColors!==fn||Ve.toneMapping!==Ct||Ue.isWebGL2===!0&&Ve.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Ve.__version=$.version);let ir=Ve.currentProgram;mt===!0&&(ir=oa($,F,H));let ah=!1,Vs=!1,gc=!1;const Ot=ir.getUniforms(),rr=Ve.uniforms;if(xe.useProgram(ir.program)&&(ah=!0,Vs=!0,gc=!0),$.id!==U&&(U=$.id,Vs=!0),ah||E!==T){Ot.setValue(z,"projectionMatrix",T.projectionMatrix),Ot.setValue(z,"viewMatrix",T.matrixWorldInverse);const wn=Ot.map.cameraPosition;wn!==void 0&&wn.setValue(z,Le.setFromMatrixPosition(T.matrixWorld)),Ue.logarithmicDepthBuffer&&Ot.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Vs=!0,gc=!0)}if(H.isSkinnedMesh){Ot.setOptional(z,H,"bindMatrix"),Ot.setOptional(z,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(Ue.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ot.setValue(z,"boneTexture",wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ot.setOptional(z,H,"batchingTexture"),Ot.setValue(z,"batchingTexture",H._matricesTexture,R));const vc=j.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&Ue.isWebGL2===!0)&&We.update(H,j,ir),(Vs||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,Ot.setValue(z,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(rr.envMap.value=Ce,rr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Vs&&(Ot.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&j_(rr,gc),fe&&$.fog===!0&&de.refreshFogUniforms(rr,fe),de.refreshMaterialUniforms(rr,$,q,P,pe),ll.upload(z,sh(Ve),rr,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ll.upload(z,sh(Ve),rr,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(z,"center",H.center),Ot.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ot.setValue(z,"normalMatrix",H.normalMatrix),Ot.setValue(z,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const wn=$.uniformsGroups;for(let _c=0,$_=wn.length;_c<$_;_c++)if(Ue.isWebGL2){const lh=wn[_c];Ke.update(lh,ir),Ke.bind(lh,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function j_(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function X_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,j){ke.get(T.texture).__webglTexture=F,ke.get(T.depthTexture).__webglTexture=j;const $=ke.get(T);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const j=ke.get(T);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,j=0){b=T,C=F,A=j;let $=!0,H=null,fe=!1,Se=!1;if(T){const Ce=ke.get(T);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(z.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ce.__hasExternalTextures&&R.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Ne=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?H=Ne[F][j]:H=Ne[F],fe=!0):Ue.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?H=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[j]:H=Ne,w.copy(T.viewport),V.copy(T.scissor),Y=T.scissorTest}else w.copy(k).multiplyScalar(q).floor(),V.copy(K).multiplyScalar(q).floor(),Y=Z;if(xe.bindFramebuffer(z.FRAMEBUFFER,H)&&Ue.drawBuffers&&$&&xe.drawBuffers(T,H),xe.viewport(w),xe.scissor(V),xe.setScissorTest(Y),fe){const Ce=ke.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,j)}else if(Se){const Ce=ke.get(T.texture),ze=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,ze)}U=-1},this.readRenderTargetPixels=function(T,F,j,$,H,fe,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){xe.bindFramebuffer(z.FRAMEBUFFER,Te);try{const Ce=T.texture,ze=Ce.format,Ne=Ce.type;if(ze!==Wn&&_e.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ne===zo&&(Me.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ne!==Ki&&_e.convert(Ne)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Bi&&(Ue.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-$&&j>=0&&j<=T.height-H&&z.readPixels(F,j,$,H,_e.convert(ze),_e.convert(Ne),fe)}finally{const Ce=b!==null?ke.get(b).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,F,j=0){const $=Math.pow(2,-j),H=Math.floor(F.image.width*$),fe=Math.floor(F.image.height*$);R.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,T.x,T.y,H,fe),xe.unbindTexture()},this.copyTextureToTexture=function(T,F,j,$=0){const H=F.image.width,fe=F.image.height,Se=_e.convert(j.format),Te=_e.convert(j.type);R.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,T.x,T.y,H,fe,Se,Te,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,$,T.x,T.y,Se,Te,F.image),$===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,F,j,$,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ce=_e.convert($.format),ze=_e.convert($.type);let Ne;if($.isData3DTexture)R.setTexture3D($,0),Ne=z.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)R.setTexture2DArray($,0),Ne=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const Ie=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ct=z.getParameter(z.UNPACK_SKIP_ROWS),ri=z.getParameter(z.UNPACK_SKIP_IMAGES),ut=j.isCompressedTexture?j.mipmaps[H]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(Ne,H,F.x,F.y,F.z,fe,Se,Te,Ce,ze,ut.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ne,H,F.x,F.y,F.z,fe,Se,Te,Ce,ut.data)):z.texSubImage3D(Ne,H,F.x,F.y,F.z,fe,Se,Te,Ce,ze,ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ie),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ct),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ri),H===0&&$.generateMipmaps&&z.generateMipmap(Ne),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,xe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?wr:Yv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?Nt:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MA extends __{}MA.prototype.isWebGL1Renderer=!0;class wA extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class zs extends wi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new yn(s,3)),this.setAttribute("normal",new yn(s.slice(),3)),this.setAttribute("uv",new yn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new I,y=new I,C=new I;for(let A=0;A<n.length;A+=3)v(n[A+0],x),v(n[A+1],y),v(n[A+2],C),l(x,y,C,g)}function l(g,x,y,C){const A=C+1,b=[];for(let U=0;U<=A;U++){b[U]=[];const E=g.clone().lerp(y,U/A),w=x.clone().lerp(y,U/A),V=A-U;for(let Y=0;Y<=V;Y++)Y===0&&U===A?b[U][Y]=E:b[U][Y]=E.clone().lerp(w,Y/V)}for(let U=0;U<A;U++)for(let E=0;E<2*(A-U)-1;E++){const w=Math.floor(E/2);E%2===0?(p(b[U][w+1]),p(b[U+1][w]),p(b[U][w])):(p(b[U][w+1]),p(b[U+1][w+1]),p(b[U+1][w]))}}function c(g){const x=new I;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(g),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function d(){const g=new I;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const y=h(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;o.push(y,1-C)}m(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],y=o[g+2],C=o[g+4],A=Math.max(x,y,C),b=Math.min(x,y,C);A>.9&&b<.1&&(x<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function p(g){s.push(g.x,g.y,g.z)}function v(g,x){const y=g*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function m(){const g=new I,x=new I,y=new I,C=new I,A=new $e,b=new $e,U=new $e;for(let E=0,w=0;E<s.length;E+=9,w+=6){g.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(o[w+0],o[w+1]),b.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),C.copy(g).add(x).add(y).divideScalar(3);const V=h(C);_(A,w+0,g,V),_(b,w+2,x,V),_(U,w+4,y,V)}}function _(g,x,y,C){C<0&&g.x===1&&(o[x]=g.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function h(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.vertices,e.indices,e.radius,e.details)}}class Xf extends zs{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xf(e.radius,e.detail)}}class $f extends zs{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $f(e.radius,e.detail)}}class qf extends zs{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new qf(e.radius,e.detail)}}class Yf extends zs{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yf(e.radius,e.detail)}}class Kf extends wi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new I,f=new I,p=new I;for(let v=0;v<=i;v++)for(let m=0;m<=r;m++){const _=m/r*s,h=v/i*Math.PI*2;f.x=(e+n*Math.cos(h))*Math.cos(_),f.y=(e+n*Math.cos(h))*Math.sin(_),f.z=n*Math.sin(h),a.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(m/r),c.push(v/i)}for(let v=1;v<=i;v++)for(let m=1;m<=r;m++){const _=(r+1)*v+m-1,h=(r+1)*(v-1)+m-1,u=(r+1)*(v-1)+m,g=(r+1)*v+m;o.push(_,h,g),o.push(h,u,g)}this.setIndex(o),this.setAttribute("position",new yn(a,3)),this.setAttribute("normal",new yn(l,3)),this.setAttribute("uv",new yn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $m extends Zo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kv,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const wu=new Mt,qm=new I,Ym=new I;class x_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Km=new Mt,no=new I,Tu=new I;class TA extends x_{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),Tu.copy(i.position),Tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tu),i.updateMatrixWorld(),r.makeTranslation(-no.x,-no.y,-no.z),Km.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class bA extends Jf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new TA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AA extends x_{constructor(){super(new d_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RA extends Jf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new AA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CA extends Jf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);function PA({type:t="icosahedron",color:e="#7b2fff",size:n=1}){const i=se.useRef(null);return se.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight,a=new __({antialias:!0,alpha:!0});a.setPixelRatio(window.devicePixelRatio),a.setSize(s,o),a.setClearColor(0,0),r.appendChild(a.domElement);const l=new wA,c=new gn(50,s/o,.1,100);c.position.set(0,0,4*n);let d;t==="icosahedron"?d=new $f(1.2*n,0):t==="torus"?d=new Kf(.9*n,.35*n,16,60):t==="octahedron"?d=new qf(1.2*n,0):t==="dodecahedron"?d=new Xf(1.1*n,0):d=new Yf(1.3*n,0);const f=new $m({color:new Xe(e),wireframe:!0,transparent:!0,opacity:.6}),p=new ei(d,f);l.add(p);const v=new $m({color:new Xe(e),transparent:!0,opacity:.08}),m=new ei(d.clone(),v);l.add(m);const _=new CA(16777215,.5);l.add(_);const h=new RA(new Xe(e),2);h.position.set(2,3,4),l.add(h);const u=new bA(62932,1.5,10);u.position.set(-3,-2,2),l.add(u);let g={x:0,y:0};const x=U=>{const E=r.getBoundingClientRect();g.x=((U.clientX-E.left)/s-.5)*2,g.y=-((U.clientY-E.top)/o-.5)*2};r.addEventListener("mousemove",x);let y,C=0;const A=()=>{y=requestAnimationFrame(A),C+=.008,p.rotation.x=C*.4+g.y*.3,p.rotation.y=C*.6+g.x*.3,m.rotation.x=p.rotation.x,m.rotation.y=p.rotation.y,u.position.x=Math.sin(C*1.5)*3,u.position.y=Math.cos(C)*2,a.render(l,c)};A();const b=()=>{const U=r.clientWidth,E=r.clientHeight;c.aspect=U/E,c.updateProjectionMatrix(),a.setSize(U,E)};return window.addEventListener("resize",b),()=>{cancelAnimationFrame(y),r.removeEventListener("mousemove",x),window.removeEventListener("resize",b),r.removeChild(a.domElement),a.dispose()}},[t,e,n]),S.jsx("div",{ref:i,style:{width:"100%",height:"100%"}})}function y_({step:t=1}){const e=qo(),n=[{n:1,label:"Template",path:"/"},{n:2,label:"Details",path:"/input"},{n:3,label:"Preview",path:"/preview"}];return S.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(3,2,10,0.8)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 32px",height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[S.jsxs("button",{onClick:()=>e("/"),style:{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer"},children:[S.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",display:"flex",alignItems:"center",justifyContent:"center",clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"},children:S.jsx("span",{style:{color:"white",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",fontWeight:"700"},children:"P3"})}),S.jsxs("span",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"16px",color:"#fffae6",letterSpacing:"0.02em"},children:["Portfolio",S.jsx("span",{style:{color:"#7b2fff"},children:"3D"})]})]}),S.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:n.map((i,r)=>S.jsxs(Gd.Fragment,{children:[S.jsxs("button",{onClick:()=>i.n<t&&e(i.path),style:{display:"flex",alignItems:"center",gap:"8px",background:"none",border:"none",cursor:i.n<=t?"pointer":"default",padding:"6px 12px",opacity:i.n>t?.35:1,transition:"opacity 0.2s"},children:[S.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontFamily:"'JetBrains Mono', monospace",fontWeight:"500",background:i.n<t?"rgba(0,245,212,0.15)":i.n===t?"rgba(123,47,255,0.3)":"rgba(255,255,255,0.06)",border:i.n<t?"1px solid rgba(0,245,212,0.4)":i.n===t?"1px solid rgba(123,47,255,0.6)":"1px solid rgba(255,255,255,0.1)",color:i.n<t?"#00f5d4":i.n===t?"#c59fff":"#fffae680"},children:i.n<t?"✓":i.n}),S.jsx("span",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",color:i.n===t?"#fffae6":"rgba(255,250,230,0.5)",fontWeight:i.n===t?"500":"400"},children:i.label})]}),r<n.length-1&&S.jsx("div",{style:{width:"20px",height:"1px",background:"rgba(255,255,255,0.1)"}})]},i.n))}),S.jsx("div",{style:{width:"140px"}})]})}const Jm=[{id:"cosmic",name:"Cosmic",tag:"Dark · Immersive · 3D",desc:"Deep-space aesthetic with floating elements, neon accents, and glassmorphism panels.",geo:"icosahedron",accent:"#7b2fff",accentAlt:"#00f5d4",preview:"cosmic"},{id:"ember",name:"Ember",tag:"Bold · Warm · Editorial",desc:"Volcanic energy with ember tones, strong typography, and kinetic section reveals.",geo:"dodecahedron",accent:"#ff4d00",accentAlt:"#ff9a3c",preview:"ember"}];function LA(){return S.jsxs("div",{style:{width:"100%",height:"100%",background:"#03020a",position:"relative",overflow:"hidden",padding:"20px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[S.jsxs("div",{children:[S.jsx("div",{style:{width:"80px",height:"12px",background:"linear-gradient(90deg,#7b2fff,#00f5d4)",borderRadius:"2px",marginBottom:"6px"}}),S.jsx("div",{style:{width:"50px",height:"8px",background:"rgba(123,47,255,0.3)",borderRadius:"2px"}})]}),S.jsx("div",{style:{display:"flex",gap:"6px"},children:["#7b2fff","#00f5d4","rgba(255,255,255,0.1)"].map((t,e)=>S.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:t}},e))})]}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"10px"},children:[...Array(4)].map((t,e)=>S.jsxs("div",{style:{background:"rgba(123,47,255,0.07)",border:"1px solid rgba(123,47,255,0.2)",borderRadius:"6px",padding:"8px 10px"},children:[S.jsx("div",{style:{width:"40px",height:"7px",background:`rgba(${e%2===0?"123,47,255":"0,245,212"},0.4)`,borderRadius:"2px",marginBottom:"5px"}}),S.jsx("div",{style:{width:"100%",height:"5px",background:"rgba(255,255,255,0.06)",borderRadius:"1px",marginBottom:"3px"}}),S.jsx("div",{style:{width:"70%",height:"5px",background:"rgba(255,255,255,0.06)",borderRadius:"1px"}})]},e))}),S.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:["React","Three.js","Node","AWS"].map((t,e)=>S.jsx("span",{style:{fontSize:"8px",padding:"2px 6px",border:"1px solid rgba(123,47,255,0.35)",borderRadius:"2px",color:"rgba(123,47,255,0.8)",fontFamily:"monospace"},children:t},e))})]})}function DA(){return S.jsxs("div",{style:{width:"100%",height:"100%",background:"#0a0402",position:"relative",overflow:"hidden",padding:"20px"},children:[S.jsx("div",{style:{height:"3px",background:"linear-gradient(90deg,#ff4d00,#ff9a3c)",marginBottom:"16px",borderRadius:"2px"}}),S.jsxs("div",{style:{marginBottom:"14px"},children:[S.jsx("div",{style:{width:"90px",height:"14px",background:"linear-gradient(90deg,#ff4d00,#ff9a3c)",borderRadius:"2px",marginBottom:"6px"}}),S.jsx("div",{style:{width:"60px",height:"9px",background:"rgba(255,77,0,0.25)",borderRadius:"2px",marginBottom:"4px"}}),S.jsx("div",{style:{width:"100%",height:"5px",background:"rgba(255,255,255,0.05)",borderRadius:"1px",marginBottom:"3px"}}),S.jsx("div",{style:{width:"80%",height:"5px",background:"rgba(255,255,255,0.05)",borderRadius:"1px"}})]}),[...Array(3)].map((t,e)=>S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[S.jsx("div",{style:{width:"3px",height:"24px",background:`rgba(255,77,0,${.8-e*.2})`,borderRadius:"2px"}}),S.jsxs("div",{style:{flex:1},children:[S.jsx("div",{style:{width:`${70-e*15}%`,height:"6px",background:"rgba(255,154,60,0.25)",borderRadius:"2px",marginBottom:"3px"}}),S.jsx("div",{style:{width:`${90-e*10}%`,height:"4px",background:"rgba(255,255,255,0.06)",borderRadius:"1px"}})]})]},e))]})}function UA({t,selected:e,onSelect:n}){const i=se.useRef(null),r=o=>{if(!i.current)return;const a=i.current.getBoundingClientRect(),l=(o.clientX-a.left)/a.width-.5,c=(o.clientY-a.top)/a.height-.5;i.current.style.transform=`perspective(800px) rotateY(${l*14}deg) rotateX(${-c*10}deg) scale(1.03)`},s=()=>{i.current&&(i.current.style.transform="perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)")};return S.jsxs("div",{ref:i,onClick:()=>n(t.id),onMouseMove:r,onMouseLeave:s,style:{cursor:"pointer",transition:"transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s",transformStyle:"preserve-3d",boxShadow:e?`0 0 0 2px ${t.accent}, 0 20px 60px ${t.accent}40, 0 0 80px ${t.accent}20`:"0 8px 40px rgba(0,0,0,0.5)",borderRadius:"12px",overflow:"hidden"},children:[S.jsxs("div",{style:{height:"240px",background:t.preview==="cosmic"?"#03020a":"#0a0402",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",top:0,right:0,width:"160px",height:"160px",opacity:.7},children:S.jsx(PA,{type:t.geo,color:t.accent,size:.9})}),S.jsx("div",{style:{position:"absolute",inset:0,right:"80px"},children:t.preview==="cosmic"?S.jsx(LA,{}):S.jsx(DA,{})}),S.jsx("div",{style:{position:"absolute",top:0,right:"60px",width:"100px",height:"100%",background:`linear-gradient(90deg, transparent, ${t.preview==="cosmic"?"#03020a":"#0a0402"})`}})]}),S.jsxs("div",{style:{background:`linear-gradient(135deg, rgba(${t.preview==="cosmic"?"3,2,10":"10,4,2"},0.95) 0%, rgba(${t.preview==="cosmic"?"10,5,20":"20,8,4"},0.95) 100%)`,borderTop:`1px solid ${t.accent}30`,padding:"20px 24px 22px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[S.jsxs("div",{children:[S.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",color:`${t.accent}99`,textTransform:"uppercase"},children:t.tag}),S.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"22px",fontWeight:"800",color:"#fffae6",margin:"4px 0 0",letterSpacing:"-0.01em"},children:t.name})]}),S.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",border:`2px solid ${e?t.accent:"rgba(255,255,255,0.15)"}`,background:e?t.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:e&&S.jsx("span",{style:{color:"white",fontSize:"12px",lineHeight:1},children:"✓"})})]}),S.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.5)",lineHeight:1.7,margin:0},children:t.desc}),S.jsx("div",{style:{height:"2px",background:`linear-gradient(90deg, ${t.accent}, ${t.accentAlt})`,marginTop:"16px",borderRadius:"1px",opacity:e?1:.3,transition:"opacity 0.3s"}})]})]})}function NA({selectedTemplate:t,onSelect:e}){var s;const n=qo(),[i,r]=se.useState(null);return S.jsxs("div",{style:{minHeight:"100vh",background:"#03020a",position:"relative",overflow:"hidden"},children:[S.jsx(y_,{step:1}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0},children:S.jsx(Bv,{color:"#7b2fff",count:80,speed:.4})}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,255,0.12) 0%, transparent 70%)"}}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,background:"radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,245,212,0.06) 0%, transparent 60%)"}}),S.jsxs("div",{style:{position:"relative",zIndex:1,paddingTop:"120px",paddingBottom:"80px",maxWidth:"1000px",margin:"0 auto",padding:"120px 40px 80px"},children:[S.jsxs("div",{className:"fade-up",style:{marginBottom:"60px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[S.jsx("div",{style:{width:"24px",height:"1px",background:"#00f5d4"}}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",letterSpacing:"0.3em",color:"#00f5d4",textTransform:"uppercase"},children:"Step 01 of 03"})]}),S.jsxs("h1",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(42px,6vw,72px)",fontWeight:"800",lineHeight:"0.95",letterSpacing:"-0.03em",marginBottom:"20px"},children:[S.jsx("span",{style:{display:"block",color:"#fffae6"},children:"Choose your"}),S.jsx("span",{className:"grad-plasma",style:{display:"block"},children:"visual universe."})]}),S.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"16px",color:"rgba(255,250,230,0.45)",maxWidth:"420px",lineHeight:1.7},children:"Each template is a fully 3D-rendered experience. Drag the cards to interact — your portfolio will feel this alive."})]}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(380px,1fr))",gap:"24px",marginBottom:"48px"},children:Jm.map((o,a)=>S.jsx("div",{className:"fade-up",style:{animationDelay:`${a*.15}s`},children:S.jsx(UA,{t:o,selected:t===o.id,onSelect:e})},o.id))}),S.jsxs("div",{className:"fade-up",style:{animationDelay:"0.4s",display:"flex",alignItems:"center",gap:"20px"},children:[S.jsxs("button",{onClick:()=>t&&n("/input"),disabled:!t,className:"btn-3d btn-plasma",style:{opacity:t?1:.4,cursor:t?"pointer":"not-allowed",borderRadius:"6px"},children:[S.jsx("span",{children:"Continue"}),S.jsx("span",{style:{fontSize:"16px"},children:"→"})]}),!t&&S.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.1em"},children:"↑ select a template first"}),t&&S.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"#00f5d4",letterSpacing:"0.05em"},children:["✓ ",(s=Jm.find(o=>o.id===t))==null?void 0:s.name," selected"]})]})]})]})}function S_(t,e){return function(){return t.apply(e,arguments)}}const{toString:IA}=Object.prototype,{getPrototypeOf:Zf}=Object,{iterator:uc,toStringTag:E_}=Symbol,dc=(t=>e=>{const n=IA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qn=t=>(t=t.toLowerCase(),e=>dc(e)===t),fc=t=>e=>typeof e===t,{isArray:Hs}=Array,Us=fc("undefined");function ea(t){return t!==null&&!Us(t)&&t.constructor!==null&&!Us(t.constructor)&&un(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const M_=qn("ArrayBuffer");function FA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&M_(t.buffer),e}const OA=fc("string"),un=fc("function"),w_=fc("number"),ta=t=>t!==null&&typeof t=="object",kA=t=>t===!0||t===!1,cl=t=>{if(dc(t)!=="object")return!1;const e=Zf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(E_ in t)&&!(uc in t)},BA=t=>{if(!ta(t)||ea(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},zA=qn("Date"),HA=qn("File"),VA=t=>!!(t&&typeof t.uri<"u"),GA=t=>t&&typeof t.getParts<"u",WA=qn("Blob"),jA=qn("FileList"),XA=t=>ta(t)&&un(t.pipe);function $A(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Zm=$A(),Qm=typeof Zm.FormData<"u"?Zm.FormData:void 0,qA=t=>{let e;return t&&(Qm&&t instanceof Qm||un(t.append)&&((e=dc(t))==="formdata"||e==="object"&&un(t.toString)&&t.toString()==="[object FormData]"))},YA=qn("URLSearchParams"),[KA,JA,ZA,QA]=["ReadableStream","Request","Response","Headers"].map(qn),eR=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function na(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Hs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(ea(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function T_(t,e){if(ea(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const _r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,b_=t=>!Us(t)&&t!==_r;function Id(){const{caseless:t,skipUndefined:e}=b_(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&T_(n,s)||s;cl(n[o])&&cl(r)?n[o]=Id(n[o],r):cl(r)?n[o]=Id({},r):Hs(r)?n[o]=r.slice():(!e||!Us(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&na(arguments[r],i);return n}const tR=(t,e,n,{allOwnKeys:i}={})=>(na(e,(r,s)=>{n&&un(r)?Object.defineProperty(t,s,{value:S_(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),nR=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),iR=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rR=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Zf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},sR=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},oR=t=>{if(!t)return null;if(Hs(t))return t;let e=t.length;if(!w_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},aR=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Zf(Uint8Array)),lR=(t,e)=>{const i=(t&&t[uc]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},cR=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},uR=qn("HTMLFormElement"),dR=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),eg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fR=qn("RegExp"),A_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};na(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},hR=t=>{A_(t,(e,n)=>{if(un(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(un(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pR=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Hs(t)?i(t):i(String(t).split(e)),n},mR=()=>{},gR=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function vR(t){return!!(t&&un(t.append)&&t[E_]==="FormData"&&t[uc])}const _R=t=>{const e=new Array(10),n=(i,r)=>{if(ta(i)){if(e.indexOf(i)>=0)return;if(ea(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Hs(i)?[]:{};return na(i,(o,a)=>{const l=n(o,r+1);!Us(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},xR=qn("AsyncFunction"),yR=t=>t&&(ta(t)||un(t))&&un(t.then)&&un(t.catch),R_=((t,e)=>t?setImmediate:e?((n,i)=>(_r.addEventListener("message",({source:r,data:s})=>{r===_r&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),_r.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",un(_r.postMessage)),SR=typeof queueMicrotask<"u"?queueMicrotask.bind(_r):typeof process<"u"&&process.nextTick||R_,ER=t=>t!=null&&un(t[uc]),B={isArray:Hs,isArrayBuffer:M_,isBuffer:ea,isFormData:qA,isArrayBufferView:FA,isString:OA,isNumber:w_,isBoolean:kA,isObject:ta,isPlainObject:cl,isEmptyObject:BA,isReadableStream:KA,isRequest:JA,isResponse:ZA,isHeaders:QA,isUndefined:Us,isDate:zA,isFile:HA,isReactNativeBlob:VA,isReactNative:GA,isBlob:WA,isRegExp:fR,isFunction:un,isStream:XA,isURLSearchParams:YA,isTypedArray:aR,isFileList:jA,forEach:na,merge:Id,extend:tR,trim:eR,stripBOM:nR,inherits:iR,toFlatObject:rR,kindOf:dc,kindOfTest:qn,endsWith:sR,toArray:oR,forEachEntry:lR,matchAll:cR,isHTMLForm:uR,hasOwnProperty:eg,hasOwnProp:eg,reduceDescriptors:A_,freezeMethods:hR,toObjectSet:pR,toCamelCase:dR,noop:mR,toFiniteNumber:gR,findKey:T_,global:_r,isContextDefined:b_,isSpecCompliantForm:vR,toJSONObject:_R,isAsyncFn:xR,isThenable:yR,setImmediate:R_,asap:SR,isIterable:ER};let be=class C_ extends Error{static from(e,n,i,r,s,o){const a=new C_(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";const MR=null;function Fd(t){return B.isPlainObject(t)||B.isArray(t)}function P_(t){return B.endsWith(t,"[]")?t.slice(0,-2):t}function bu(t,e,n){return t?t.concat(e).map(function(r,s){return r=P_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function wR(t){return B.isArray(t)&&!t.some(Fd)}const TR=B.toFlatObject(B,{},null,function(e){return/^is[A-Z]/.test(e)});function hc(t,e,n){if(!B.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,h){return!B.isUndefined(h[_])});const i=n.metaTokens,r=n.visitor||d,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(e);if(!B.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(B.isDate(m))return m.toISOString();if(B.isBoolean(m))return m.toString();if(!l&&B.isBlob(m))throw new be("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(m)||B.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,_,h){let u=m;if(B.isReactNative(e)&&B.isReactNativeBlob(m))return e.append(bu(h,_,s),c(m)),!1;if(m&&!h&&typeof m=="object"){if(B.endsWith(_,"{}"))_=i?_:_.slice(0,-2),m=JSON.stringify(m);else if(B.isArray(m)&&wR(m)||(B.isFileList(m)||B.endsWith(_,"[]"))&&(u=B.toArray(m)))return _=P_(_),u.forEach(function(x,y){!(B.isUndefined(x)||x===null)&&e.append(o===!0?bu([_],y,s):o===null?_:_+"[]",c(x))}),!1}return Fd(m)?!0:(e.append(bu(h,_,s),c(m)),!1)}const f=[],p=Object.assign(TR,{defaultVisitor:d,convertValue:c,isVisitable:Fd});function v(m,_){if(!B.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(m),B.forEach(m,function(u,g){(!(B.isUndefined(u)||u===null)&&r.call(e,u,B.isString(g)?g.trim():g,_,p))===!0&&v(u,_?_.concat(g):[g])}),f.pop()}}if(!B.isObject(t))throw new TypeError("data must be an object");return v(t),e}function tg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Qf(t,e){this._pairs=[],t&&hc(t,this,e)}const L_=Qf.prototype;L_.append=function(e,n){this._pairs.push([e,n])};L_.toString=function(e){const n=e?function(i){return e.call(this,i,tg)}:tg;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function bR(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function D_(t,e,n){if(!e)return t;const i=n&&n.encode||bR,r=B.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=B.isURLSearchParams(e)?e.toString():new Qf(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class ng{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){B.forEach(this.handlers,function(i){i!==null&&e(i)})}}const eh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},AR=typeof URLSearchParams<"u"?URLSearchParams:Qf,RR=typeof FormData<"u"?FormData:null,CR=typeof Blob<"u"?Blob:null,PR={isBrowser:!0,classes:{URLSearchParams:AR,FormData:RR,Blob:CR},protocols:["http","https","file","blob","url","data"]},th=typeof window<"u"&&typeof document<"u",Od=typeof navigator=="object"&&navigator||void 0,LR=th&&(!Od||["ReactNative","NativeScript","NS"].indexOf(Od.product)<0),DR=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",UR=th&&window.location.href||"http://localhost",NR=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:th,hasStandardBrowserEnv:LR,hasStandardBrowserWebWorkerEnv:DR,navigator:Od,origin:UR},Symbol.toStringTag,{value:"Module"})),Gt={...NR,...PR};function IR(t,e){return hc(t,new Gt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Gt.isNode&&B.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function FR(t){return B.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function OR(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function U_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&B.isArray(r)?r.length:o,l?(B.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!B.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&B.isArray(r[o])&&(r[o]=OR(r[o])),!a)}if(B.isFormData(t)&&B.isFunction(t.entries)){const n={};return B.forEachEntry(t,(i,r)=>{e(FR(i),r,n,0)}),n}return null}function kR(t,e,n){if(B.isString(t))try{return(e||JSON.parse)(t),B.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ia={transitional:eh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=B.isObject(e);if(s&&B.isHTMLForm(e)&&(e=new FormData(e)),B.isFormData(e))return r?JSON.stringify(U_(e)):e;if(B.isArrayBuffer(e)||B.isBuffer(e)||B.isStream(e)||B.isFile(e)||B.isBlob(e)||B.isReadableStream(e))return e;if(B.isArrayBufferView(e))return e.buffer;if(B.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return IR(e,this.formSerializer).toString();if((a=B.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return hc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),kR(e)):e}],transformResponse:[function(e){const n=this.transitional||ia.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(B.isResponse(e)||B.isReadableStream(e))return e;if(e&&B.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?be.from(a,be.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],t=>{ia.headers[t]={}});const BR=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zR=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&BR[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},ig=Symbol("internals");function io(t){return t&&String(t).trim().toLowerCase()}function ul(t){return t===!1||t==null?t:B.isArray(t)?t.map(ul):String(t)}function HR(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const VR=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Au(t,e,n,i,r){if(B.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!B.isString(e)){if(B.isString(i))return e.indexOf(i)!==-1;if(B.isRegExp(i))return i.test(e)}}function GR(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function WR(t,e){const n=B.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let dn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const d=io(l);if(!d)throw new Error("header name must be a non-empty string");const f=B.findKey(r,d);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=ul(a))}const o=(a,l)=>B.forEach(a,(c,d)=>s(c,d,l));if(B.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(B.isString(e)&&(e=e.trim())&&!VR(e))o(zR(e),n);else if(B.isObject(e)&&B.isIterable(e)){let a={},l,c;for(const d of e){if(!B.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(l=a[c])?B.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=io(e),e){const i=B.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return HR(r);if(B.isFunction(n))return n.call(this,r,i);if(B.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=io(e),e){const i=B.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Au(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=io(o),o){const a=B.findKey(i,o);a&&(!n||Au(i,i[a],a,n))&&(delete i[a],r=!0)}}return B.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Au(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return B.forEach(this,(r,s)=>{const o=B.findKey(i,s);if(o){n[o]=ul(r),delete n[s];return}const a=e?GR(s):String(s).trim();a!==s&&delete n[s],n[a]=ul(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return B.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&B.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[ig]=this[ig]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=io(o);i[a]||(WR(r,o),i[a]=!0)}return B.isArray(e)?e.forEach(s):s(e),this}};dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(dn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});B.freezeMethods(dn);function Ru(t,e){const n=this||ia,i=e||n,r=dn.from(i.headers);let s=i.data;return B.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function N_(t){return!!(t&&t.__CANCEL__)}let ra=class extends be{constructor(e,n,i){super(e??"canceled",be.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function I_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function jR(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function XR(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,p=0;for(;f!==r;)p+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const v=d&&c-d;return v?Math.round(p*1e3/v):void 0}}function $R(t,e){let n=0,i=1e3/e,r,s;const o=(c,d=Date.now())=>{n=d,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=i?o(c,d):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Vl=(t,e,n=3)=>{let i=0;const r=XR(50,250);return $R(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),d=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},rg=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},sg=t=>(...e)=>B.asap(()=>t(...e)),qR=Gt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Gt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,YR=Gt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];B.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),B.isString(i)&&a.push(`path=${i}`),B.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),B.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function KR(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function JR(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function F_(t,e,n){let i=!KR(e);return t&&(i||n==!1)?JR(t,e):e}const og=t=>t instanceof dn?{...t}:t;function Ur(t,e){e=e||{};const n={};function i(c,d,f,p){return B.isPlainObject(c)&&B.isPlainObject(d)?B.merge.call({caseless:p},c,d):B.isPlainObject(d)?B.merge({},d):B.isArray(d)?d.slice():d}function r(c,d,f,p){if(B.isUndefined(d)){if(!B.isUndefined(c))return i(void 0,c,f,p)}else return i(c,d,f,p)}function s(c,d){if(!B.isUndefined(d))return i(void 0,d)}function o(c,d){if(B.isUndefined(d)){if(!B.isUndefined(c))return i(void 0,c)}else return i(void 0,d)}function a(c,d,f){if(f in e)return i(c,d);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d,f)=>r(og(c),og(d),f,!0)};return B.forEach(Object.keys({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const f=B.hasOwnProp(l,d)?l[d]:r,p=f(t[d],e[d],d);B.isUndefined(p)&&f!==a||(n[d]=p)}),n}const O_=t=>{const e=Ur({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=dn.from(o),e.url=D_(F_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),B.isFormData(n)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(B.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([d,f])=>{c.includes(d.toLowerCase())&&o.set(d,f)})}}if(Gt.hasStandardBrowserEnv&&(i&&B.isFunction(i)&&(i=i(e)),i||i!==!1&&qR(e.url))){const l=r&&s&&YR.read(s);l&&o.set(r,l)}return e},ZR=typeof XMLHttpRequest<"u",QR=ZR&&function(t){return new Promise(function(n,i){const r=O_(t);let s=r.data;const o=dn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,d,f,p,v,m;function _(){v&&v(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function u(){if(!h)return;const x=dn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:x,config:t,request:h};I_(function(b){n(b),_()},function(b){i(b),_()},C),h=null}"onloadend"in h?h.onloadend=u:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(u)},h.onabort=function(){h&&(i(new be("Request aborted",be.ECONNABORTED,t,h)),h=null)},h.onerror=function(y){const C=y&&y.message?y.message:"Network Error",A=new be(C,be.ERR_NETWORK,t,h);A.event=y||null,i(A),h=null},h.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const C=r.transitional||eh;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new be(y,C.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,t,h)),h=null},s===void 0&&o.setContentType(null),"setRequestHeader"in h&&B.forEach(o.toJSON(),function(y,C){h.setRequestHeader(C,y)}),B.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),a&&a!=="json"&&(h.responseType=r.responseType),c&&([p,m]=Vl(c,!0),h.addEventListener("progress",p)),l&&h.upload&&([f,v]=Vl(l),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",v)),(r.cancelToken||r.signal)&&(d=x=>{h&&(i(!x||x.type?new ra(null,t,h):x),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const g=jR(r.url);if(g&&Gt.protocols.indexOf(g)===-1){i(new be("Unsupported protocol "+g+":",be.ERR_BAD_REQUEST,t));return}h.send(s||null)})},e2=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const d=c instanceof Error?c:this.reason;i.abort(d instanceof be?d:new ra(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new be(`timeout of ${e}ms exceeded`,be.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>B.asap(a),l}},t2=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},n2=async function*(t,e){for await(const n of i2(t))yield*t2(n,e)},i2=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},ag=(t,e,n,i)=>{const r=n2(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await r.next();if(c){a(),l.close();return}let f=d.byteLength;if(n){let p=s+=f;n(p)}l.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},lg=64*1024,{isFunction:$a}=B,r2=(({Request:t,Response:e})=>({Request:t,Response:e}))(B.global),{ReadableStream:cg,TextEncoder:ug}=B.global,dg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},s2=t=>{t=B.merge.call({skipUndefined:!0},r2,t);const{fetch:e,Request:n,Response:i}=t,r=e?$a(e):typeof fetch=="function",s=$a(n),o=$a(i);if(!r)return!1;const a=r&&$a(cg),l=r&&(typeof ug=="function"?(m=>_=>m.encode(_))(new ug):async m=>new Uint8Array(await new n(m).arrayBuffer())),c=s&&a&&dg(()=>{let m=!1;const _=new n(Gt.origin,{body:new cg,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!_}),d=o&&a&&dg(()=>B.isReadableStream(new i("").body)),f={stream:d&&(m=>m.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!f[m]&&(f[m]=(_,h)=>{let u=_&&_[m];if(u)return u.call(_);throw new be(`Response type '${m}' is not supported`,be.ERR_NOT_SUPPORT,h)})});const p=async m=>{if(m==null)return 0;if(B.isBlob(m))return m.size;if(B.isSpecCompliantForm(m))return(await new n(Gt.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(B.isArrayBufferView(m)||B.isArrayBuffer(m))return m.byteLength;if(B.isURLSearchParams(m)&&(m=m+""),B.isString(m))return(await l(m)).byteLength},v=async(m,_)=>{const h=B.toFiniteNumber(m.getContentLength());return h??p(_)};return async m=>{let{url:_,method:h,data:u,signal:g,cancelToken:x,timeout:y,onDownloadProgress:C,onUploadProgress:A,responseType:b,headers:U,withCredentials:E="same-origin",fetchOptions:w}=O_(m),V=e||fetch;b=b?(b+"").toLowerCase():"text";let Y=e2([g,x&&x.toAbortSignal()],y),ne=null;const N=Y&&Y.unsubscribe&&(()=>{Y.unsubscribe()});let G;try{if(A&&c&&h!=="get"&&h!=="head"&&(G=await v(U,u))!==0){let K=new n(_,{method:"POST",body:u,duplex:"half"}),Z;if(B.isFormData(u)&&(Z=K.headers.get("content-type"))&&U.setContentType(Z),K.body){const[X,J]=rg(G,Vl(sg(A)));u=ag(K.body,lg,X,J)}}B.isString(E)||(E=E?"include":"omit");const P=s&&"credentials"in n.prototype,q={...w,signal:Y,method:h.toUpperCase(),headers:U.normalize().toJSON(),body:u,duplex:"half",credentials:P?E:void 0};ne=s&&new n(_,q);let L=await(s?V(ne,w):V(_,q));const O=d&&(b==="stream"||b==="response");if(d&&(C||O&&N)){const K={};["status","statusText","headers"].forEach(le=>{K[le]=L[le]});const Z=B.toFiniteNumber(L.headers.get("content-length")),[X,J]=C&&rg(Z,Vl(sg(C),!0))||[];L=new i(ag(L.body,lg,X,()=>{J&&J(),N&&N()}),K)}b=b||"text";let k=await f[B.findKey(f,b)||"text"](L,m);return!O&&N&&N(),await new Promise((K,Z)=>{I_(K,Z,{data:k,headers:dn.from(L.headers),status:L.status,statusText:L.statusText,config:m,request:ne})})}catch(P){throw N&&N(),P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,m,ne,P&&P.response),{cause:P.cause||P}):be.from(P,P&&P.code,m,ne,P&&P.response)}}},o2=new Map,k_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,d=o2;for(;a--;)l=s[a],c=d.get(l),c===void 0&&d.set(l,c=a?new Map:s2(e)),d=c;return c};k_();const nh={http:MR,xhr:QR,fetch:{get:k_}};B.forEach(nh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const fg=t=>`- ${t}`,a2=t=>B.isFunction(t)||t===null||t===!1;function l2(t,e){t=B.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!a2(i)&&(r=nh[(a=String(i)).toLowerCase()],r===void 0))throw new be(`Unknown adapter '${a}'`);if(r&&(B.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(fg).join(`
`):" "+fg(o[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const B_={getAdapter:l2,adapters:nh};function Cu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ra(null,t)}function hg(t){return Cu(t),t.headers=dn.from(t.headers),t.data=Ru.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),B_.getAdapter(t.adapter||ia.adapter,t)(t).then(function(i){return Cu(t),i.data=Ru.call(t,t.transformResponse,i),i.headers=dn.from(i.headers),i},function(i){return N_(i)||(Cu(t),i&&i.response&&(i.response.data=Ru.call(t,t.transformResponse,i.response),i.response.headers=dn.from(i.response.headers))),Promise.reject(i)})}const z_="1.13.6",pc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const pg={};pc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+z_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new be(r(o," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!pg[o]&&(pg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};pc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function c2(t,e,n){if(typeof t!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new be("option "+s+" must be "+l,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+s,be.ERR_BAD_OPTION)}}const dl={assertOptions:c2,validators:pc},bn=dl.validators;let Tr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ng,response:new ng}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ur(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&dl.assertOptions(i,{silentJSONParsing:bn.transitional(bn.boolean),forcedJSONParsing:bn.transitional(bn.boolean),clarifyTimeoutError:bn.transitional(bn.boolean),legacyInterceptorReqResOrdering:bn.transitional(bn.boolean)},!1),r!=null&&(B.isFunction(r)?n.paramsSerializer={serialize:r}:dl.assertOptions(r,{encode:bn.function,serialize:bn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),dl.assertOptions(n,{baseUrl:bn.spelling("baseURL"),withXsrfToken:bn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&B.merge(s.common,s[n.method]);s&&B.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=dn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const h=n.transitional||eh;h&&h.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let d,f=0,p;if(!l){const m=[hg.bind(this),void 0];for(m.unshift(...a),m.push(...c),p=m.length,d=Promise.resolve(n);f<p;)d=d.then(m[f++],m[f++]);return d}p=a.length;let v=n;for(;f<p;){const m=a[f++],_=a[f++];try{v=m(v)}catch(h){_.call(this,h);break}}try{d=hg.call(this,v)}catch(m){return Promise.reject(m)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=Ur(this.defaults,e);const n=F_(e.baseURL,e.url,e.allowAbsoluteUrls);return D_(n,e.params,e.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(e){Tr.prototype[e]=function(n,i){return this.request(Ur(i||{},{method:e,url:n,data:(i||{}).data}))}});B.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ur(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Tr.prototype[e]=n(),Tr.prototype[e+"Form"]=n(!0)});let u2=class H_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new ra(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new H_(function(r){e=r}),cancel:e}}};function d2(t){return function(n){return t.apply(null,n)}}function f2(t){return B.isObject(t)&&t.isAxiosError===!0}const kd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(kd).forEach(([t,e])=>{kd[e]=t});function V_(t){const e=new Tr(t),n=S_(Tr.prototype.request,e);return B.extend(n,Tr.prototype,e,{allOwnKeys:!0}),B.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return V_(Ur(t,r))},n}const xt=V_(ia);xt.Axios=Tr;xt.CanceledError=ra;xt.CancelToken=u2;xt.isCancel=N_;xt.VERSION=z_;xt.toFormData=hc;xt.AxiosError=be;xt.Cancel=xt.CanceledError;xt.all=function(e){return Promise.all(e)};xt.spread=d2;xt.isAxiosError=f2;xt.mergeConfig=Ur;xt.AxiosHeaders=dn;xt.formToJSON=t=>U_(B.isHTMLForm(t)?new FormData(t):t);xt.getAdapter=B_.getAdapter;xt.HttpStatusCode=kd;xt.default=xt;const{Axios:A2,AxiosError:R2,CanceledError:C2,isCancel:P2,CancelToken:L2,VERSION:D2,all:U2,Cancel:N2,isAxiosError:I2,spread:F2,toFormData:O2,AxiosHeaders:k2,HttpStatusCode:B2,formToJSON:z2,getAdapter:H2,mergeConfig:V2}=xt;function h2({userData:t,setUserData:e,selectedTemplate:n}){var w,V,Y,ne,N,G;const i=qo(),[r,s]=se.useState("form"),[o,a]=se.useState(!1),[l,c]=se.useState(null),[d,f]=se.useState(!1),[p,v]=se.useState("basic"),m=se.useRef(),_=n==="ember"?"#ff4d00":"#7b2fff",h=n==="ember"?"#ff9a3c":"#00f5d4",[u,g]=se.useState({name:t.name||"",title:t.title||"",about:t.about||"",skills:(t.skills||[]).join(", "),education:t.education||"",experience:t.experience||"",projects:(w=t.projects)!=null&&w.length?t.projects:[{title:"",description:""}],email:((V=t.contact)==null?void 0:V.email)||"",phone:((Y=t.contact)==null?void 0:Y.phone)||"",linkedin:((ne=t.contact)==null?void 0:ne.linkedin)||"",github:((N=t.contact)==null?void 0:N.github)||"",website:((G=t.contact)==null?void 0:G.website)||""}),x=(P,q)=>g(L=>({...L,[P]:q})),y=(P,q,L)=>{const O=[...u.projects];O[P]={...O[P],[q]:L},g(k=>({...k,projects:O}))},C=[{id:"basic",label:"Identity",icon:"◈"},{id:"skills",label:"Skills",icon:"◎"},{id:"projects",label:"Projects",icon:"◉"},{id:"career",label:"Career",icon:"◐"},{id:"contact",label:"Contact",icon:"◑"}],A=P=>{P.preventDefault(),e({name:u.name,title:u.title,about:u.about,skills:u.skills.split(",").map(q=>q.trim()).filter(Boolean),education:u.education,experience:u.experience,projects:u.projects.filter(q=>q.title),contact:{email:u.email,phone:u.phone,linkedin:u.linkedin,github:u.github,website:u.website}}),i("/preview")},b=async P=>{var O,k,K,Z,X,J,le,pe,ge,Pe;if(!P)return;const q=P.name.split(".").pop().toLowerCase();if(!["pdf","docx"].includes(q)){c({type:"error",msg:"Only PDF or DOCX files."});return}a(!0),c(null);const L=new FormData;L.append("resume",P);try{const me=(await xt.post("/api/parse-resume",L)).data.data;e(me),g({name:me.name||"",title:me.title||"",about:me.about||"",skills:(me.skills||[]).join(", "),education:me.education||"",experience:me.experience||"",projects:(O=me.projects)!=null&&O.length?me.projects:[{title:"",description:""}],email:((k=me.contact)==null?void 0:k.email)||"",phone:((K=me.contact)==null?void 0:K.phone)||"",linkedin:((Z=me.contact)==null?void 0:Z.linkedin)||"",github:((X=me.contact)==null?void 0:X.github)||"",website:((J=me.contact)==null?void 0:J.website)||""}),c({type:"success",msg:`Parsed! Found ${((le=me.skills)==null?void 0:le.length)||0} skills, ${((pe=me.projects)==null?void 0:pe.length)||0} projects.`})}catch(Le){c({type:"error",msg:((Pe=(ge=Le.response)==null?void 0:ge.data)==null?void 0:Pe.error)||"Parse failed. Try the manual form."})}finally{a(!1)}},U={background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",color:"#fffae6",padding:"12px 16px",fontFamily:"'Outfit',sans-serif",fontSize:"14px",width:"100%",outline:"none",borderRadius:"4px",transition:"border-color 0.2s, box-shadow 0.2s"},E={fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",textTransform:"uppercase",color:`${h}80`,display:"block",marginBottom:"6px"};return S.jsxs("div",{style:{minHeight:"100vh",background:"#03020a",position:"relative",paddingTop:"64px"},children:[S.jsx(y_,{step:2}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,opacity:.3},children:S.jsx(Bv,{color:_,count:60,speed:.2})}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,background:`radial-gradient(ellipse 70% 50% at 20% 30%, ${_}10 0%, transparent 60%)`}}),S.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:"1100px",margin:"0 auto",padding:"40px 40px 80px",display:"grid",gridTemplateColumns:"220px 1fr",gap:"40px"},children:[S.jsxs("div",{children:[S.jsxs("div",{style:{marginBottom:"32px"},children:[S.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",color:"rgba(255,250,230,0.3)",marginBottom:"12px",textTransform:"uppercase"},children:"Input Mode"}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{id:"form",label:"✏  Manual Form"},{id:"upload",label:"⬆  Upload Resume"}].map(P=>S.jsx("button",{onClick:()=>s(P.id),style:{padding:"10px 14px",textAlign:"left",background:r===P.id?`${_}18`:"transparent",border:`1px solid ${r===P.id?_+"50":"rgba(255,255,255,0.06)"}`,color:r===P.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"4px",transition:"all 0.2s"},children:P.label},P.id))})]}),r==="form"&&S.jsxs("div",{children:[S.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",color:"rgba(255,250,230,0.3)",marginBottom:"12px",textTransform:"uppercase"},children:"Sections"}),C.map(P=>S.jsxs("button",{onClick:()=>v(P.id),style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"10px 14px",background:p===P.id?`${_}15`:"transparent",border:`1px solid ${p===P.id?_+"40":"transparent"}`,color:p===P.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"4px",marginBottom:"4px",textAlign:"left",transition:"all 0.2s"},children:[S.jsx("span",{style:{color:`${_}80`,fontFamily:"monospace",fontSize:"14px"},children:P.icon}),P.label]},P.id))]})]}),S.jsxs("div",{children:[S.jsxs("div",{style:{marginBottom:"32px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[S.jsx("div",{style:{width:"20px",height:"1px",background:h}}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.3em",color:h,textTransform:"uppercase"},children:"Step 02 of 03"})]}),S.jsx("h1",{style:{fontFamily:"'Syne',sans-serif",fontSize:"40px",fontWeight:"800",letterSpacing:"-0.02em",color:"#fffae6"},children:r==="form"?"Build your profile":"Upload & auto-fill"})]}),r==="upload"&&S.jsxs("div",{children:[S.jsx("div",{onDragOver:P=>{P.preventDefault(),f(!0)},onDragLeave:()=>f(!1),onDrop:P=>{P.preventDefault(),f(!1),b(P.dataTransfer.files[0])},onClick:()=>m.current.click(),style:{border:`2px dashed ${d?h:_+"40"}`,borderRadius:"8px",padding:"60px 40px",textAlign:"center",cursor:"pointer",background:d?`${h}08`:`${_}05`,transition:"all 0.3s",position:"relative",overflow:"hidden"},children:o?S.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[S.jsx("div",{style:{width:"40px",height:"40px",border:`2px solid ${_}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),S.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",color:"rgba(255,250,230,0.5)",fontSize:"14px"},children:"Parsing your resume with AI…"}),S.jsx("style",{children:"@keyframes spin{to{transform:rotate(360deg)}}"})]}):S.jsxs(S.Fragment,{children:[S.jsx("div",{style:{fontSize:"40px",marginBottom:"16px",opacity:.5},children:"⬆"}),S.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontSize:"20px",fontWeight:"700",color:"#fffae6",marginBottom:"8px"},children:"Drop your resume here"}),S.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.3)"},children:"PDF or DOCX · max 10MB · auto-extracts all fields"})]})}),S.jsx("input",{ref:m,type:"file",accept:".pdf,.docx",style:{display:"none"},onChange:P=>b(P.target.files[0])}),l&&S.jsxs("div",{style:{marginTop:"16px",padding:"14px 20px",borderRadius:"6px",fontSize:"13px",background:l.type==="success"?"rgba(0,245,212,0.08)":"rgba(255,77,0,0.08)",border:`1px solid ${l.type==="success"?"rgba(0,245,212,0.3)":"rgba(255,77,0,0.3)"}`,color:l.type==="success"?"#00f5d4":"#ff6b3d",fontFamily:"'Outfit',sans-serif"},children:[l.type==="success"?"✓ ":"✕ ",l.msg]}),(l==null?void 0:l.type)==="success"&&S.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"20px"},children:[S.jsx("button",{onClick:()=>s("form"),className:"btn-3d btn-neon",style:{borderRadius:"4px",padding:"12px 24px",fontSize:"13px"},children:"Review Data"}),S.jsx("button",{onClick:()=>i("/preview"),className:"btn-3d btn-plasma",style:{borderRadius:"4px",padding:"12px 24px",fontSize:"13px"},children:"Preview Portfolio →"})]})]}),r==="form"&&S.jsxs("form",{onSubmit:A,children:[p==="basic"&&S.jsxs("div",{style:{display:"grid",gap:"20px"},children:[S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Full Name *"}),S.jsx("input",{style:U,value:u.name,onChange:P=>x("name",P.target.value),required:!0,placeholder:"Jordan Blake",onFocus:P=>{P.target.style.borderColor=`${h}60`,P.target.style.boxShadow=`0 0 0 3px ${h}10`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)",P.target.style.boxShadow="none"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Job Title *"}),S.jsx("input",{style:U,value:u.title,onChange:P=>x("title",P.target.value),required:!0,placeholder:"Full Stack Developer",onFocus:P=>{P.target.style.borderColor=`${h}60`,P.target.style.boxShadow=`0 0 0 3px ${h}10`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)",P.target.style.boxShadow="none"}})]})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"About / Summary"}),S.jsx("textarea",{style:{...U,resize:"none",minHeight:"100px",lineHeight:"1.7"},value:u.about,onChange:P=>x("about",P.target.value),placeholder:"A compelling story about who you are and what you build…",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:S.jsx("button",{type:"button",onClick:()=>v("skills"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Skills →"})})]}),p==="skills"&&S.jsxs("div",{style:{display:"grid",gap:"20px"},children:[S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Skills (comma-separated)"}),S.jsx("textarea",{style:{...U,resize:"none",minHeight:"80px",lineHeight:"1.7"},value:u.skills,onChange:P=>x("skills",P.target.value),placeholder:"React, Three.js, Node.js, TypeScript, AWS…",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),u.skills&&S.jsxs("div",{children:[S.jsx("div",{style:E,children:"Preview"}),S.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:u.skills.split(",").map(P=>P.trim()).filter(Boolean).map((P,q)=>S.jsx("span",{className:"skill-pill",style:{borderColor:`${_}40`,color:`${_}cc`,background:`${_}10`},children:P},q))})]}),S.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:S.jsx("button",{type:"button",onClick:()=>v("projects"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Projects →"})})]}),p==="projects"&&S.jsxs("div",{style:{display:"grid",gap:"16px"},children:[u.projects.map((P,q)=>S.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"8px",padding:"20px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[S.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:`${_}80`,letterSpacing:"0.15em",textTransform:"uppercase"},children:["Project ",q+1]}),u.projects.length>1&&S.jsx("button",{type:"button",onClick:()=>g(L=>({...L,projects:L.projects.filter((O,k)=>k!==q)})),style:{background:"none",border:"none",color:"rgba(255,77,0,0.5)",cursor:"pointer",fontSize:"12px",fontFamily:"'JetBrains Mono',monospace"},children:"remove ✕"})]}),S.jsx("input",{style:{...U,marginBottom:"10px"},placeholder:"Project title",value:P.title,onChange:L=>y(q,"title",L.target.value),onFocus:L=>{L.target.style.borderColor=`${h}60`},onBlur:L=>{L.target.style.borderColor="rgba(255,255,255,0.08)"}}),S.jsx("textarea",{style:{...U,resize:"none",minHeight:"60px"},placeholder:"What did you build and what impact did it have?",value:P.description,onChange:L=>y(q,"description",L.target.value),onFocus:L=>{L.target.style.borderColor=`${h}60`},onBlur:L=>{L.target.style.borderColor="rgba(255,255,255,0.08)"}})]},q)),S.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[S.jsx("button",{type:"button",onClick:()=>g(P=>({...P,projects:[...P.projects,{title:"",description:""}]})),className:"btn-3d btn-neon",style:{borderRadius:"4px",padding:"10px 20px",fontSize:"12px"},children:"+ Add Project"}),S.jsx("button",{type:"button",onClick:()=>v("career"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Career →"})]})]}),p==="career"&&S.jsxs("div",{style:{display:"grid",gap:"20px"},children:[S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Work Experience"}),S.jsx("textarea",{style:{...U,resize:"none",minHeight:"120px",lineHeight:"1.8"},value:u.experience,onChange:P=>x("experience",P.target.value),placeholder:`Staff Engineer @ Vercel (2022–Present)
Senior Engineer @ Stripe (2020–2022)`,onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Education"}),S.jsx("textarea",{style:{...U,resize:"none",minHeight:"80px",lineHeight:"1.8"},value:u.education,onChange:P=>x("education",P.target.value),placeholder:`M.S. Computer Science — Stanford, 2019
B.S. Software Engineering — UC Berkeley, 2017`,onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:S.jsx("button",{type:"button",onClick:()=>v("contact"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Contact →"})})]}),p==="contact"&&S.jsxs("div",{style:{display:"grid",gap:"16px"},children:[S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Email"}),S.jsx("input",{style:U,type:"email",value:u.email,onChange:P=>x("email",P.target.value),placeholder:"you@domain.com",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"Phone"}),S.jsx("input",{style:U,value:u.phone,onChange:P=>x("phone",P.target.value),placeholder:"+1 (555) 000-0000",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"LinkedIn"}),S.jsx("input",{style:U,value:u.linkedin,onChange:P=>x("linkedin",P.target.value),placeholder:"https://linkedin.com/in/...",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:E,children:"GitHub"}),S.jsx("input",{style:U,value:u.github,onChange:P=>x("github",P.target.value),placeholder:"https://github.com/...",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]}),S.jsxs("div",{style:{gridColumn:"1/-1"},children:[S.jsx("label",{style:E,children:"Website"}),S.jsx("input",{style:U,value:u.website,onChange:P=>x("website",P.target.value),placeholder:"https://yoursite.dev",onFocus:P=>{P.target.style.borderColor=`${h}60`},onBlur:P=>{P.target.style.borderColor="rgba(255,255,255,0.08)"}})]})]}),S.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:"8px"},children:S.jsx("button",{type:"submit",className:"btn-3d btn-plasma",style:{borderRadius:"4px",fontSize:"15px",padding:"16px 40px"},children:"Generate Portfolio ✦"})})]})]})]})]})]})}function p2({children:t,style:e={},accentColor:n="#7b2fff"}){return S.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",backdropFilter:"blur(20px)",borderRadius:"12px",padding:"28px",position:"relative",overflow:"hidden",...e},children:[S.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg, transparent, ${n}60, transparent)`}}),t]})}function qa({children:t}){return S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[S.jsx("div",{style:{width:"16px",height:"1px",background:"linear-gradient(90deg, #7b2fff, #00f5d4)"}}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",letterSpacing:"0.25em",textTransform:"uppercase",color:"#00f5d4",opacity:.7},children:t})]})}function m2({skill:t}){return S.jsx("span",{style:{display:"inline-block",padding:"4px 12px",fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",letterSpacing:"0.03em",border:"1px solid rgba(123,47,255,0.35)",background:"rgba(123,47,255,0.08)",color:"rgba(123,47,255,0.9)",borderRadius:"3px",margin:"3px",transition:"all 0.2s"},children:t})}function g2({proj:t,index:e}){return S.jsxs("div",{style:{background:"rgba(123,47,255,0.04)",border:"1px solid rgba(123,47,255,0.15)",borderRadius:"10px",padding:"20px 22px",position:"relative",overflow:"hidden",transition:"border-color 0.3s"},children:[S.jsx("div",{style:{position:"absolute",top:0,left:0,bottom:0,width:"3px",background:"linear-gradient(180deg, #7b2fff, #00f5d4)"}}),S.jsxs("div",{style:{paddingLeft:"12px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[S.jsx("h3",{style:{fontFamily:"'Syne', sans-serif",fontSize:"16px",fontWeight:"700",color:"#fffae6",letterSpacing:"-0.01em",margin:0},children:t.title}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(0,245,212,0.5)",border:"1px solid rgba(0,245,212,0.2)",padding:"2px 8px",borderRadius:"3px",flexShrink:0,marginLeft:"12px"},children:String(e+1).padStart(2,"0")})]}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:"rgba(255,250,230,0.45)",margin:0},children:t.description})]})]})}function v2({data:t}){var f,p,v;const{name:e="Your Name",title:n="Your Title",about:i="",skills:r=[],projects:s=[],education:o="",experience:a="",contact:l={}}=t||{},c=a?a.split(`
`).filter(Boolean):[],d=o?o.split(`
`).filter(Boolean):[];return S.jsxs("div",{style:{fontFamily:"'Outfit', sans-serif",background:"#03020a",minHeight:"100vh",color:"#fffae6",position:"relative",overflow:"hidden"},children:[S.jsx("div",{style:{position:"absolute",top:"-15%",right:"-10%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",pointerEvents:"none"}}),S.jsx("div",{style:{position:"absolute",bottom:"10%",left:"-10%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),S.jsx("div",{style:{position:"absolute",top:"40%",right:"20%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)",pointerEvents:"none"}}),S.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,pointerEvents:"none",opacity:.5}}),S.jsxs("div",{style:{padding:"64px 64px 48px",borderBottom:"1px solid rgba(255,255,255,0.05)",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, rgba(123,47,255,0.4), rgba(0,245,212,0.4), transparent)"}}),S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"40px",flexWrap:"wrap"},children:[S.jsxs("div",{style:{flex:1,minWidth:"300px"},children:[S.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",border:"1px solid rgba(0,245,212,0.25)",borderRadius:"20px",marginBottom:"24px",background:"rgba(0,245,212,0.04)"},children:[S.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00f5d4",boxShadow:"0 0 8px #00f5d4, 0 0 16px rgba(0,245,212,0.5)"}}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",color:"#00f5d4",letterSpacing:"0.12em"},children:"Open to opportunities"})]}),S.jsx("h1",{style:{fontFamily:"'Syne', sans-serif",fontSize:"clamp(48px, 7vw, 88px)",fontWeight:"800",lineHeight:"0.9",letterSpacing:"-0.04em",marginBottom:"20px",background:"linear-gradient(135deg, #fffae6 0%, rgba(255,250,230,0.7) 40%, #a78bfa 80%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"24px"},children:[S.jsx("div",{style:{width:"24px",height:"2px",background:"linear-gradient(90deg, #7b2fff, #00f5d4)"}}),S.jsx("span",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:"300",color:"#7b2fff",letterSpacing:"0.08em"},children:n})]}),i&&S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"15px",lineHeight:"1.8",color:"rgba(255,250,230,0.45)",maxWidth:"540px",fontWeight:"300"},children:i})]}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"8px"},children:[{icon:"✉",val:l.email,href:`mailto:${l.email}`},{icon:"◉",val:l.phone},{icon:"⬡",val:(f=l.linkedin)==null?void 0:f.replace("https://",""),href:l.linkedin},{icon:"◈",val:(p=l.github)==null?void 0:p.replace("https://",""),href:l.github},{icon:"◎",val:(v=l.website)==null?void 0:v.replace("https://",""),href:l.website}].filter(m=>m.val).map((m,_)=>S.jsxs("a",{href:m.href||"#",style:{display:"flex",alignItems:"center",gap:"10px",fontFamily:"'JetBrains Mono', monospace",fontSize:"12px",color:"rgba(255,250,230,0.4)",textDecoration:"none",padding:"6px 12px",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"4px",background:"rgba(255,255,255,0.02)",transition:"all 0.2s",whiteSpace:"nowrap"},children:[S.jsx("span",{style:{color:"#7b2fff",fontSize:"13px"},children:m.icon}),m.val.length>30?m.val.substring(0,28)+"…":m.val]},_))})]})]}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.6fr",minHeight:"70vh"},children:[S.jsxs("div",{style:{borderRight:"1px solid rgba(255,255,255,0.04)",padding:"48px 40px"},children:[r.length>0&&S.jsxs("div",{style:{marginBottom:"44px"},children:[S.jsx(qa,{children:"Tech Stack"}),S.jsx("div",{style:{display:"flex",flexWrap:"wrap",margin:"-3px"},children:r.map((m,_)=>S.jsx(m2,{skill:m},_))})]}),d.length>0&&S.jsxs("div",{style:{marginBottom:"44px"},children:[S.jsx(qa,{children:"Education"}),S.jsxs("div",{style:{position:"relative",paddingLeft:"20px"},children:[S.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:"linear-gradient(180deg, #7b2fff, transparent)"}}),d.map((m,_)=>S.jsxs("div",{style:{marginBottom:"8px",position:"relative"},children:[_===0&&S.jsx("div",{style:{position:"absolute",left:"-23px",top:"6px",width:"7px",height:"7px",borderRadius:"50%",background:"#7b2fff",boxShadow:"0 0 8px #7b2fff"}}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:_===0||m.includes("—")||m.includes("B.")||m.includes("M.")?"rgba(255,250,230,0.8)":"rgba(255,250,230,0.4)",margin:0,fontWeight:_===0?"500":"400"},children:m})]},_))]})]}),c.length>0&&S.jsxs("div",{children:[S.jsx(qa,{children:"Experience"}),S.jsxs("div",{style:{position:"relative",paddingLeft:"20px"},children:[S.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:"linear-gradient(180deg, #00f5d4, transparent)"}}),c.map((m,_)=>{const h=m.includes("@");return S.jsxs("div",{style:{marginBottom:"10px",position:"relative"},children:[h&&S.jsx("div",{style:{position:"absolute",left:"-23px",top:"6px",width:"7px",height:"7px",borderRadius:"50%",background:"#00f5d4",boxShadow:"0 0 8px #00f5d4"}}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",margin:0,color:h?"rgba(255,250,230,0.85)":"rgba(255,250,230,0.35)",fontWeight:h?"500":"400"},children:m})]},_)})]})]})]}),S.jsxs("div",{style:{padding:"48px 48px 48px 56px"},children:[s.length>0&&S.jsxs("div",{children:[S.jsx(qa,{children:"Featured Projects"}),S.jsx("div",{style:{display:"grid",gap:"16px"},children:s.map((m,_)=>S.jsx(g2,{proj:m,index:_},_))})]}),S.jsx("div",{style:{marginTop:"48px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[{label:"Projects",value:s.length||"—"},{label:"Skills",value:r.length||"—"},{label:"Years Exp.",value:(()=>{const m=a==null?void 0:a.match(/\((\d{4})/);return m?`${new Date().getFullYear()-parseInt(m[1])}+`:"—"})()}].map((m,_)=>S.jsxs(p2,{style:{padding:"20px",textAlign:"center"},children:[S.jsx("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:"28px",fontWeight:"800",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"4px"},children:m.value}),S.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.15em",textTransform:"uppercase"},children:m.label})]},_))})]})]}),S.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.04)",padding:"20px 64px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[S.jsx("div",{style:{width:"20px",height:"20px",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}),S.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.2em",textTransform:"uppercase"},children:[e," · Cosmic Portfolio"]})]}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.15)",letterSpacing:"0.1em"},children:new Date().getFullYear()})]})]})}function Ya({title:t,children:e}){return S.jsxs("div",{style:{marginBottom:"48px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[S.jsx("div",{style:{width:"4px",height:"28px",background:"linear-gradient(180deg, #ff4d00, #ff9a3c)",borderRadius:"2px"}}),S.jsx("h2",{style:{fontFamily:"'Syne', sans-serif",fontSize:"11px",fontWeight:"600",letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(255,154,60,0.7)",margin:0},children:t}),S.jsx("div",{style:{flex:1,height:"1px",background:"linear-gradient(90deg, rgba(255,77,0,0.3), transparent)"}})]}),e]})}function _2({proj:t,index:e}){const n=["#ff4d00","#ff6b1a","#ff8533","#ff9a4c"],i=n[e%n.length];return S.jsxs("div",{style:{background:"rgba(255,77,0,0.04)",border:"1px solid rgba(255,77,0,0.12)",borderRadius:"8px",padding:"22px 24px",position:"relative",overflow:"hidden",transition:"border-color 0.3s"},children:[S.jsx("div",{style:{position:"absolute",right:"16px",top:"12px",fontFamily:"'Syne', sans-serif",fontSize:"48px",fontWeight:"800",color:`${i}08`,lineHeight:1,letterSpacing:"-0.04em",userSelect:"none"},children:String(e+1).padStart(2,"0")}),S.jsx("h3",{style:{fontFamily:"'Syne', sans-serif",fontSize:"17px",fontWeight:"700",color:"#1a0800",letterSpacing:"-0.01em",marginBottom:"8px"},children:t.title}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:"rgba(26,8,0,0.55)",margin:0},children:t.description}),S.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg, ${i}, transparent)`,opacity:.6}})]})}function x2({data:t}){var f,p,v;const{name:e="Your Name",title:n="Your Title",about:i="",skills:r=[],projects:s=[],education:o="",experience:a="",contact:l={}}=t||{},c=a?a.split(`
`).filter(Boolean):[],d=o?o.split(`
`).filter(Boolean):[];return S.jsxs("div",{style:{fontFamily:"'Outfit', sans-serif",background:"#fdf8f4",minHeight:"100vh",color:"#1a0800",position:"relative",overflow:"hidden"},children:[S.jsxs("div",{style:{background:"linear-gradient(135deg, #0a0402 0%, #1a0800 50%, #0f0400 100%)",padding:"64px 64px 56px",position:"relative",overflow:"hidden"},children:[S.jsx("div",{style:{position:"absolute",top:"-40%",right:"-10%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 65%)",pointerEvents:"none"}}),S.jsx("div",{style:{position:"absolute",bottom:"-30%",left:"20%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,154,60,0.1) 0%, transparent 65%)",pointerEvents:"none"}}),S.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"3px",background:"linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80, #ff9a3c, #ff4d00)"}}),S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",position:"relative",zIndex:1},children:[S.jsxs("div",{style:{flex:1,minWidth:"280px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[S.jsx("div",{style:{width:"32px",height:"2px",background:"linear-gradient(90deg, #ff4d00, #ff9a3c)"}}),S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",letterSpacing:"0.25em",color:"rgba(255,154,60,0.7)",textTransform:"uppercase"},children:"Portfolio"})]}),S.jsxs("h1",{style:{fontFamily:"'Syne', sans-serif",fontSize:"clamp(50px, 7.5vw, 96px)",fontWeight:"800",lineHeight:"0.88",letterSpacing:"-0.04em",marginBottom:"20px"},children:[S.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #fff5ee 0%, rgba(255,245,238,0.75) 60%, #ff9a3c 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.split(" ")[0]}),S.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #ff4d00 0%, #ff9a3c 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.split(" ").slice(1).join(" ")})]}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"17px",fontWeight:"300",color:"rgba(255,245,238,0.5)",letterSpacing:"0.04em"},children:n})]}),S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{icon:"→",val:l.email,href:`mailto:${l.email}`},{icon:"→",val:l.phone},{icon:"→",val:(f=l.github)==null?void 0:f.replace("https://",""),href:l.github},{icon:"→",val:(p=l.linkedin)==null?void 0:p.replace("https://",""),href:l.linkedin},{icon:"→",val:(v=l.website)==null?void 0:v.replace("https://",""),href:l.website}].filter(m=>m.val).map((m,_)=>S.jsxs("a",{href:m.href||"#",style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"'JetBrains Mono', monospace",fontSize:"12px",color:"rgba(255,245,238,0.35)",textDecoration:"none",transition:"color 0.2s"},children:[S.jsx("span",{style:{color:"#ff4d00",fontSize:"14px"},children:m.icon}),m.val.length>32?m.val.substring(0,30)+"…":m.val]},_))})]}),i&&S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"15px",lineHeight:"1.8",color:"rgba(255,245,238,0.4)",maxWidth:"600px",marginTop:"32px",fontWeight:"300",position:"relative",zIndex:1},children:i})]}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.5fr"},children:[S.jsxs("div",{style:{padding:"48px 40px",borderRight:"1px solid rgba(26,8,0,0.08)"},children:[r.length>0&&S.jsx(Ya,{title:"Skills & Tools",children:S.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:r.map((m,_)=>S.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",padding:"5px 12px",background:"rgba(255,77,0,0.06)",border:"1px solid rgba(255,77,0,0.18)",color:"rgba(255,77,0,0.8)",borderRadius:"3px"},children:m},_))})}),c.length>0&&S.jsx(Ya,{title:"Experience",children:c.map((m,_)=>{const h=m.includes("@");return S.jsxs("div",{style:{display:"flex",gap:"14px",marginBottom:"12px",alignItems:"flex-start"},children:[S.jsx("div",{style:{flexShrink:0,marginTop:"6px"},children:S.jsx("div",{style:{width:"7px",height:"7px",borderRadius:"50%",background:h?"#ff4d00":"rgba(255,77,0,0.15)",boxShadow:h?"0 0 6px rgba(255,77,0,0.6)":"none"}})}),S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:h?"#1a0800":"rgba(26,8,0,0.45)",fontWeight:h?"600":"400",margin:0},children:m})]},_)})}),d.length>0&&S.jsx(Ya,{title:"Education",children:d.map((m,_)=>S.jsx("div",{style:{paddingLeft:"16px",borderLeft:"2px solid rgba(255,77,0,0.2)",marginBottom:"10px"},children:S.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:_===0?"#1a0800":"rgba(26,8,0,0.5)",fontWeight:_===0?"600":"400",margin:0},children:m})},_))})]}),S.jsxs("div",{style:{padding:"48px 48px 48px 48px"},children:[s.length>0&&S.jsx(Ya,{title:"Projects",children:S.jsx("div",{style:{display:"grid",gap:"14px"},children:s.map((m,_)=>S.jsx(_2,{proj:m,index:_},_))})}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(255,77,0,0.1)",border:"1px solid rgba(255,77,0,0.1)",borderRadius:"8px",overflow:"hidden"},children:[{n:s.length||0,l:"Projects"},{n:r.length||0,l:"Technologies"},{n:(()=>{const m=a==null?void 0:a.match(/\((\d{4})/);return m?`${new Date().getFullYear()-parseInt(m[1])}+`:"5+"})(),l:"Years"}].map((m,_)=>S.jsxs("div",{style:{background:"#fdf8f4",padding:"24px 20px",textAlign:"center"},children:[S.jsx("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:"32px",fontWeight:"800",color:"#ff4d00",lineHeight:1,marginBottom:"6px"},children:m.n}),S.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(26,8,0,0.4)",letterSpacing:"0.15em",textTransform:"uppercase"},children:m.l})]},_))})]})]}),S.jsxs("div",{style:{borderTop:"3px solid",borderImage:"linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80) 1",padding:"20px 64px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#0a0402"},children:[S.jsx("span",{style:{fontFamily:"'Syne', sans-serif",fontSize:"14px",fontWeight:"700",background:"linear-gradient(90deg, #ff4d00, #ff9a3c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.01em"},children:e}),S.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,245,238,0.2)",letterSpacing:"0.15em"},children:[new Date().getFullYear()," · EMBER PORTFOLIO"]})]})]})}function y2({userData:t,selectedTemplate:e}){var l;const n=qo(),[i,r]=se.useState("desktop"),s=[{id:"desktop",label:"Desktop",width:"100%"},{id:"tablet",label:"Tablet",width:"768px"},{id:"mobile",label:"Mobile",width:"390px"}],o=e==="ember"?"#ff4d00":"#7b2fff",a=e==="ember"?"#ff9a3c":"#00f5d4";return S.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0f",display:"flex",flexDirection:"column"},children:[S.jsxs("div",{style:{background:"rgba(3,2,10,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 24px",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,flexShrink:0},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[S.jsx("button",{onClick:()=>n("/input"),style:{background:"none",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,250,230,0.5)",padding:"6px 14px",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",cursor:"pointer",letterSpacing:"0.1em",borderRadius:"4px",transition:"all 0.2s"},children:"← Edit"}),S.jsx("div",{style:{width:"1px",height:"24px",background:"rgba(255,255,255,0.08)"}}),S.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.1em"},children:["LIVE PREVIEW · ",S.jsx("span",{style:{color:a},children:e==="cosmic"?"COSMIC":"EMBER"})]})]}),S.jsx("div",{style:{display:"flex",gap:"2px",background:"rgba(255,255,255,0.04)",padding:"3px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.06)"},children:s.map(c=>S.jsx("button",{onClick:()=>r(c.id),style:{padding:"5px 16px",background:i===c.id?`${o}25`:"transparent",border:`1px solid ${i===c.id?o+"50":"transparent"}`,color:i===c.id?"#fffae6":"rgba(255,250,230,0.35)",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.1em",cursor:"pointer",borderRadius:"4px",transition:"all 0.2s",textTransform:"uppercase"},children:c.label},c.id))}),S.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[S.jsx("button",{onClick:()=>n("/"),style:{background:"none",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,250,230,0.4)",padding:"6px 14px",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",cursor:"pointer",letterSpacing:"0.08em",borderRadius:"4px"},children:"New Template"}),S.jsx("button",{onClick:()=>window.print(),style:{background:`linear-gradient(135deg, ${o}, ${a})`,border:"none",color:"white",padding:"7px 20px",fontFamily:"'Syne',sans-serif",fontWeight:"600",fontSize:"12px",cursor:"pointer",letterSpacing:"0.08em",borderRadius:"4px",textTransform:"uppercase"},children:"Export PDF"})]})]}),S.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"32px 24px",background:"#0a0a0f",overflowY:"auto"},children:[S.jsx("div",{style:{position:"fixed",inset:0,background:`radial-gradient(ellipse 60% 40% at 50% 20%, ${o}08 0%, transparent 60%)`,pointerEvents:"none"}}),S.jsx("div",{style:{width:((l=s.find(c=>c.id===i))==null?void 0:l.width)||"100%",maxWidth:"100%",background:"white",boxShadow:`0 0 0 1px rgba(255,255,255,0.1), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${o}15`,transition:"width 0.4s cubic-bezier(0.23,1,0.32,1)",minHeight:"90vh",position:"relative",zIndex:1,borderRadius:i==="desktop"?"0":"12px",overflow:"hidden"},children:e==="cosmic"?S.jsx(v2,{data:t}):S.jsx(x2,{data:t})})]}),S.jsxs("div",{style:{background:"rgba(3,2,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.04)",padding:"10px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0},children:[S.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.1em"},children:[t.name," · ",e==null?void 0:e.toUpperCase()," TEMPLATE"]}),S.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.1em"},children:[new Date().getFullYear()," · Portfolio3D"]})]})]})}const S2={name:"Jordan Blake",title:"Creative Full Stack Developer",about:"I architect digital experiences that live at the intersection of engineering and art. 6 years turning complex problems into elegant, performant solutions.",skills:["React","Three.js","TypeScript","Node.js","Python","WebGL","GraphQL","AWS","Docker","PostgreSQL","Redis","Figma"],projects:[{title:"Neural Canvas",description:"Real-time AI art generation platform processing 50K+ images/day with custom diffusion pipeline."},{title:"Velocity OS",description:"Cloud-native developer toolkit reducing deployment times by 80% for 200+ engineering teams."},{title:"Quantum Chat",description:"End-to-end encrypted messaging with sub-50ms latency serving 1M+ active users globally."},{title:"DataForge",description:"Visual data pipeline builder with drag-and-drop interface handling petabyte-scale ETL jobs."}],education:`M.S. Computer Science — Stanford University, 2019
B.S. Software Engineering — UC Berkeley, 2017`,experience:`Staff Engineer @ Vercel (2022–Present)
Senior Engineer @ Stripe (2020–2022)
Full Stack Developer @ Airbnb (2019–2020)`,contact:{email:"jordan@blake.dev",phone:"+1 (415) 555-0199",linkedin:"https://linkedin.com/in/jordanblake",github:"https://github.com/jordanblake",website:"https://blake.dev"}};function E2(){const t=se.useRef(null),e=se.useRef(null),n=se.useRef({x:0,y:0}),i=se.useRef({x:0,y:0});return se.useEffect(()=>{const r=a=>{n.current={x:a.clientX,y:a.clientY},t.current&&(t.current.style.left=a.clientX+"px",t.current.style.top=a.clientY+"px")};window.addEventListener("mousemove",r);let s;const o=()=>{e.current&&(i.current.x+=(n.current.x-i.current.x)*.12,i.current.y+=(n.current.y-i.current.y)*.12,e.current.style.left=i.current.x+"px",e.current.style.top=i.current.y+"px"),s=requestAnimationFrame(o)};return s=requestAnimationFrame(o),()=>{window.removeEventListener("mousemove",r),cancelAnimationFrame(s)}},[]),S.jsxs(S.Fragment,{children:[S.jsx("div",{id:"cursor",ref:t}),S.jsx("div",{id:"cursor-ring",ref:e})]})}function M2(){const[t,e]=se.useState(null),[n,i]=se.useState(S2);return S.jsxs(gE,{children:[S.jsx(E2,{}),S.jsxs(hE,{children:[S.jsx(lo,{path:"/",element:S.jsx(NA,{selectedTemplate:t,onSelect:e})}),S.jsx(lo,{path:"/input",element:t?S.jsx(h2,{userData:n,setUserData:i,selectedTemplate:t}):S.jsx(Xc,{to:"/",replace:!0})}),S.jsx(lo,{path:"/preview",element:t?S.jsx(y2,{userData:n,selectedTemplate:t}):S.jsx(Xc,{to:"/",replace:!0})}),S.jsx(lo,{path:"*",element:S.jsx(Xc,{to:"/",replace:!0})})]})]})}Pu.createRoot(document.getElementById("root")).render(S.jsx(Gd.StrictMode,{children:S.jsx(M2,{})}));
