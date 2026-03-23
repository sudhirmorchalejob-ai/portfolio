function qv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mg={exports:{}},Gl={},gg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Zv=Symbol.for("react.strict_mode"),Qv=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),ny=Symbol.for("react.forward_ref"),iy=Symbol.for("react.suspense"),ry=Symbol.for("react.memo"),sy=Symbol.for("react.lazy"),up=Symbol.iterator;function oy(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg=Object.assign,yg={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||xg}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _g(){}_g.prototype=Ns.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||xg}var Hd=jd.prototype=new _g;Hd.constructor=jd;vg(Hd,Ns.prototype);Hd.isPureReactComponent=!0;var dp=Array.isArray,Sg=Object.prototype.hasOwnProperty,Vd={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:t,key:s,ref:o,props:r,_owner:Vd.current}}function ay(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function ly(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ly(""+t.key):e.toString(36)}function Ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case Jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Sc(o,0):i,dp(r)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),Ka(r,e,n,"",function(c){return c})):r!=null&&(Gd(r)&&(r=ay(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Sc(s,a);o+=Ka(s,e,n,l,r)}else if(l=oy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Sc(s,a++),o+=Ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var i=[],r=0;return Ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Za={transition:null},uy={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Za,ReactCurrentOwner:Vd};function bg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ns;Xe.Fragment=Kv;Xe.Profiler=Qv;Xe.PureComponent=jd;Xe.StrictMode=Zv;Xe.Suspense=iy;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;Xe.act=bg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ey,_context:t},t.Consumer=t};Xe.createElement=Mg;Xe.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:ny,render:t}};Xe.isValidElement=Gd;Xe.lazy=function(t){return{$$typeof:sy,_payload:{_status:-1,_result:t},_init:cy}};Xe.memo=function(t,e){return{$$typeof:ry,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};Xe.unstable_act=bg;Xe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Xe.useContext=function(t){return Qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Xe.useId=function(){return Qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Qt.current.useRef(t)};Xe.useState=function(t){return Qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Qt.current.useTransition()};Xe.version="18.3.1";gg.exports=Xe;var ie=gg.exports;const Wl=Yv(ie),dy=qv({__proto__:null,default:Wl},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=ie,py=Symbol.for("react.element"),hy=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,gy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)my.call(e,i)&&!xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:py,type:t,key:s,ref:o,props:r,_owner:gy.current}}Gl.Fragment=hy;Gl.jsx=wg;Gl.jsxs=wg;mg.exports=Gl;var f=mg.exports,Du={},Tg={exports:{}},En={},Ag={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var B=D.length;D.push(k);e:for(;0<B;){var Y=B-1>>>1,Q=D[Y];if(0<r(Q,k))D[Y]=k,D[B]=Q,B=Y;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],B=D.pop();if(B!==k){D[0]=B;e:for(var Y=0,Q=D.length,$=Q>>>1;Y<$;){var K=2*(Y+1)-1,ce=D[K],me=K+1,ge=D[me];if(0>r(ce,B))me<Q&&0>r(ge,ce)?(D[Y]=ge,D[me]=B,Y=me):(D[Y]=ce,D[K]=B,Y=K);else if(me<Q&&0>r(ge,B))D[Y]=ge,D[me]=B,Y=me;else break e}}return k}function r(D,k){var B=D.sortIndex-k.sortIndex;return B!==0?B:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,p=3,y=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(D){if(x=!1,_(D),!g)if(n(l)!==null)g=!0,X(R);else{var k=n(c);k!==null&&Z(S,k.startTime-D)}}function R(D,k){g=!1,x&&(x=!1,u(P),P=-1),y=!0;var B=p;try{for(_(k),h=n(l);h!==null&&(!(h.expirationTime>k)||D&&!j());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,p=h.priorityLevel;var Q=Y(h.expirationTime<=k);k=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&i(l),_(k)}else i(l);h=n(l)}if(h!==null)var $=!0;else{var K=n(c);K!==null&&Z(S,K.startTime-k),$=!1}return $}finally{h=null,p=B,y=!1}}var T=!1,w=null,P=-1,E=5,b=-1;function j(){return!(t.unstable_now()-b<E)}function J(){if(w!==null){var D=t.unstable_now();b=D;var k=!0;try{k=w(!0,D)}finally{k?te():(T=!1,w=null)}}else T=!1}var te;if(typeof v=="function")te=function(){v(J)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,V=I.port2;I.port1.onmessage=J,te=function(){V.postMessage(null)}}else te=function(){m(J,0)};function X(D){w=D,T||(T=!0,te())}function Z(D,k){P=m(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,X(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var k=3;break;default:k=p}var B=p;p=k;try{return D()}finally{p=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=p;p=D;try{return k()}finally{p=B}},t.unstable_scheduleCallback=function(D,k,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,D={id:d++,callback:k,priorityLevel:D,startTime:B,expirationTime:Q,sortIndex:-1},B>Y?(D.sortIndex=B,e(c,D),n(l)===null&&D===n(c)&&(x?(u(P),P=-1):x=!0,Z(S,B-Y))):(D.sortIndex=Q,e(l,D),g||y||(g=!0,X(R))),D},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(D){var k=p;return function(){var B=p;p=k;try{return D.apply(this,arguments)}finally{p=B}}}})(Rg);Ag.exports=Rg;var vy=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy=ie,Sn=vy;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,_o={};function Nr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(_o[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,_y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},hp={};function Sy(t){return Iu.call(hp,t)?!0:Iu.call(pp,t)?!1:_y.test(t)?hp[t]=!0:(pp[t]=!0,!1)}function Ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function My(t,e,n,i){if(e===null||typeof e>"u"||Ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(My(e,n,r,i)&&(n=null),i||r===null?Sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Fu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),mp=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Ec;function ro(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Mc=!1;function bc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function by(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Nu:return"Profiler";case qd:return"StrictMode";case Uu:return"Suspense";case Fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lg:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Ou(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Ou(t(e))}catch{}}return null}function wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ou(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ty(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=Ty(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function Bu(t,e){Ug(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(so(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Fg(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){Ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ry=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,ms=null,gs=null;function _p(t){if(t=Go(t)){if(typeof Xu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Jl(e),Xu(t.stateNode,t.type,e))}}function jg(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Hg(){if(ms){var t=ms,e=gs;if(gs=ms=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function Vg(t,e){return t(e)}function Gg(){}var wc=!1;function Wg(t,e,n){if(wc)return t(e,n);wc=!0;try{return Vg(t,e,n)}finally{wc=!1,(ms!==null||gs!==null)&&(Gg(),Hg())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var $u=!1;if(vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{$u=!1}function Cy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var uo=!1,hl=null,ml=!1,qu=null,Py={onError:function(t){uo=!0,hl=t}};function Ly(t,e,n,i,r,s,o,a,l){uo=!1,hl=null,Cy.apply(Py,arguments)}function Dy(t,e,n,i,r,s,o,a,l){if(Ly.apply(this,arguments),uo){if(uo){var c=hl;uo=!1,hl=null}else throw Error(re(198));ml||(ml=!0,qu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Ur(t)!==t)throw Error(re(188))}function Iy(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function $g(t){return t=Iy(t),t!==null?qg(t):null}function qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qg(t);if(e!==null)return e;t=t.sibling}return null}var Yg=Sn.unstable_scheduleCallback,Ep=Sn.unstable_cancelCallback,Ny=Sn.unstable_shouldYield,Uy=Sn.unstable_requestPaint,_t=Sn.unstable_now,Fy=Sn.unstable_getCurrentPriorityLevel,Zd=Sn.unstable_ImmediatePriority,Jg=Sn.unstable_UserBlockingPriority,gl=Sn.unstable_NormalPriority,Oy=Sn.unstable_LowPriority,Kg=Sn.unstable_IdlePriority,Xl=null,ti=null;function ky(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:jy,By=Math.log,zy=Math.LN2;function jy(t){return t>>>=0,t===0?32:31-(By(t)/zy|0)|0}var da=64,fa=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oo(a):(s&=o,s!==0&&(i=oo(s)))}else o=n&~r,o!==0?i=oo(o):s!==0&&(i=oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function Hy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Hy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zg(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function Gy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,ef,t0,n0,i0,Ju=!1,pa=[],zi=null,ji=null,Hi=null,Mo=new Map,bo=new Map,Ii=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Go(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xy(t,e,n,i,r){switch(e){case"focusin":return zi=Ws(zi,t,e,n,i,r),!0;case"dragenter":return ji=Ws(ji,t,e,n,i,r),!0;case"mouseover":return Hi=Ws(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Ws(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,Ws(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function r0(t){var e=mr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Xg(n),e!==null){t.blockedOn=e,i0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wu=i,n.target.dispatchEvent(i),Wu=null}else return e=Go(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){Qa(t)&&n.delete(e)}function $y(){Ju=!1,zi!==null&&Qa(zi)&&(zi=null),ji!==null&&Qa(ji)&&(ji=null),Hi!==null&&Qa(Hi)&&(Hi=null),Mo.forEach(bp),bo.forEach(bp)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,$y)))}function wo(t){function e(r){return Xs(r,t)}if(0<pa.length){Xs(pa[0],t);for(var n=1;n<pa.length;n++){var i=pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&Xs(zi,t),ji!==null&&Xs(ji,t),Hi!==null&&Xs(Hi,t),Mo.forEach(e),bo.forEach(e),n=0;n<Ii.length;n++)i=Ii[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ii.length&&(n=Ii[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Ii.shift()}var xs=Mi.ReactCurrentBatchConfig,vl=!0;function qy(t,e,n,i){var r=Ze,s=xs.transition;xs.transition=null;try{Ze=1,tf(t,e,n,i)}finally{Ze=r,xs.transition=s}}function Yy(t,e,n,i){var r=Ze,s=xs.transition;xs.transition=null;try{Ze=4,tf(t,e,n,i)}finally{Ze=r,xs.transition=s}}function tf(t,e,n,i){if(vl){var r=Ku(t,e,n,i);if(r===null)Fc(t,e,i,yl,n),Mp(t,i);else if(Xy(r,t,e,n,i))i.stopPropagation();else if(Mp(t,i),e&4&&-1<Wy.indexOf(t)){for(;r!==null;){var s=Go(r);if(s!==null&&e0(s),s=Ku(t,e,n,i),s===null&&Fc(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fc(t,e,i,null,n)}}var yl=null;function Ku(t,e,n,i){if(yl=null,t=Kd(i),t=mr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fy()){case Zd:return 1;case Jg:return 4;case gl:case Oy:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Ui=null,nf=null,el=null;function o0(){if(el)return el;var t,e=nf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return el=r.slice(t,1<i?1-i:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function wp(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:wp,this.isPropagationStopped=wp,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=Mn(Us),Vo=mt({},Us,{view:0,detail:0}),Jy=Mn(Vo),Ac,Rc,$s,$l=mt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Ac=t.screenX-$s.screenX,Rc=t.screenY-$s.screenY):Rc=Ac=0,$s=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Tp=Mn($l),Ky=mt({},$l,{dataTransfer:0}),Zy=Mn(Ky),Qy=mt({},Vo,{relatedTarget:0}),Cc=Mn(Qy),e_=mt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Mn(e_),n_=mt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=Mn(n_),r_=mt({},Us,{data:0}),Ap=Mn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a_[t])?!!e[t]:!1}function sf(){return l_}var c_=mt({},Vo,{key:function(t){if(t.key){var e=s_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u_=Mn(c_),d_=mt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Mn(d_),f_=mt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),p_=Mn(f_),h_=mt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Mn(h_),g_=mt({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Mn(g_),v_=[9,13,27,32],of=vi&&"CompositionEvent"in window,fo=null;vi&&"documentMode"in document&&(fo=document.documentMode);var y_=vi&&"TextEvent"in window&&!fo,a0=vi&&(!of||fo&&8<fo&&11>=fo),Cp=" ",Pp=!1;function l0(t,e){switch(t){case"keyup":return v_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function __(t,e){switch(t){case"compositionend":return c0(e);case"keypress":return e.which!==32?null:(Pp=!0,Cp);case"textInput":return t=e.data,t===Cp&&Pp?null:t;default:return null}}function S_(t,e){if(ns)return t==="compositionend"||!of&&l0(t,e)?(t=o0(),el=nf=Ui=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E_[t.type]:e==="textarea"}function u0(t,e,n,i){jg(i),e=_l(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,To=null;function M_(t){S0(t,0)}function ql(t){var e=ss(t);if(Ng(e))return t}function b_(t,e){if(t==="change")return e}var d0=!1;if(vi){var Pc;if(vi){var Lc="oninput"in document;if(!Lc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Lc=typeof Dp.oninput=="function"}Pc=Lc}else Pc=!1;d0=Pc&&(!document.documentMode||9<document.documentMode)}function Ip(){po&&(po.detachEvent("onpropertychange",f0),To=po=null)}function f0(t){if(t.propertyName==="value"&&ql(To)){var e=[];u0(e,To,t,Kd(t)),Wg(M_,e)}}function w_(t,e,n){t==="focusin"?(Ip(),po=e,To=n,po.attachEvent("onpropertychange",f0)):t==="focusout"&&Ip()}function T_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(To)}function A_(t,e){if(t==="click")return ql(e)}function R_(t,e){if(t==="input"||t==="change")return ql(e)}function C_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:C_;function Ao(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Iu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function p0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h0(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function P_(t){var e=h0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Up(n,s);var o=Up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L_=vi&&"documentMode"in document&&11>=document.documentMode,is=null,Zu=null,ho=null,Qu=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||is==null||is!==pl(i)||(i=is,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&Ao(ho,i)||(ho=i,i=_l(Zu,"onSelect"),0<i.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Dc={},m0={};vi&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Yl(t){if(Dc[t])return Dc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return Dc[t]=e[n];return t}var g0=Yl("animationend"),x0=Yl("animationiteration"),v0=Yl("animationstart"),y0=Yl("transitionend"),_0=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){_0.set(t,e),Nr(e,[t])}for(var Ic=0;Ic<Op.length;Ic++){var Nc=Op[Ic],D_=Nc.toLowerCase(),I_=Nc[0].toUpperCase()+Nc.slice(1);er(D_,"on"+I_)}er(g0,"onAnimationEnd");er(x0,"onAnimationIteration");er(v0,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(y0,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Dy(i,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}}}if(ml)throw t=qu,ml=!1,qu=null,t}function ot(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[ga]){t[ga]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(N_.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,Uc("selectionchange",!1,e))}}function E0(t,e,n,i){switch(s0(e)){case 1:var r=qy;break;case 4:r=Yy;break;default:r=tf}n=r.bind(null,e,n,t),r=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wg(function(){var c=s,d=Kd(n),h=[];e:{var p=_0.get(t);if(p!==void 0){var y=rf,g=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":y=u_;break;case"focusin":g="focus",y=Cc;break;case"focusout":g="blur",y=Cc;break;case"beforeblur":case"afterblur":y=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=p_;break;case g0:case x0:case v0:y=t_;break;case y0:y=m_;break;case"scroll":y=Jy;break;case"wheel":y=x_;break;case"copy":case"cut":case"paste":y=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rp}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?p!==null?p+"Capture":null:p;x=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,u!==null&&(S=Eo(v,u),S!=null&&x.push(Co(v,S,_)))),m)break;v=v.return}0<x.length&&(p=new y(p,g,null,n,d),h.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Wu&&(g=n.relatedTarget||n.fromElement)&&(mr(g)||g[yi]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=c,g=g?mr(g):null,g!==null&&(m=Ur(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=c),y!==g)){if(x=Tp,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Rp,S="onPointerLeave",u="onPointerEnter",v="pointer"),m=y==null?p:ss(y),_=g==null?p:ss(g),p=new x(S,v+"leave",y,n,d),p.target=m,p.relatedTarget=_,S=null,mr(d)===c&&(x=new x(u,v+"enter",g,n,d),x.target=_,x.relatedTarget=m,S=x),m=S,y&&g)t:{for(x=y,u=g,v=0,_=x;_;_=Or(_))v++;for(_=0,S=u;S;S=Or(S))_++;for(;0<v-_;)x=Or(x),v--;for(;0<_-v;)u=Or(u),_--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=Or(x),u=Or(u)}x=null}else x=null;y!==null&&Bp(h,p,y,x,!1),g!==null&&m!==null&&Bp(h,m,g,x,!0)}}e:{if(p=c?ss(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var R=b_;else if(Lp(p))if(d0)R=R_;else{R=T_;var T=w_}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=A_);if(R&&(R=R(t,c))){u0(h,R,n,d);break e}T&&T(t,p,c),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&zu(p,"number",p.value)}switch(T=c?ss(c):window,t){case"focusin":(Lp(T)||T.contentEditable==="true")&&(is=T,Zu=c,ho=null);break;case"focusout":ho=Zu=is=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Fp(h,n,d);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":Fp(h,n,d)}var w;if(of)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?l0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(a0&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(w=o0()):(Ui=d,nf="value"in Ui?Ui.value:Ui.textContent,ns=!0)),T=_l(c,P),0<T.length&&(P=new Ap(P,t,null,n,d),h.push({event:P,listeners:T}),w?P.data=w:(w=c0(n),w!==null&&(P.data=w)))),(w=y_?__(t,n):S_(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(d=new Ap("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=w))}S0(h,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=Eo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Eo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=Eo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var U_=/\r\n?/g,F_=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(U_,`
`).replace(F_,"")}function xa(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(re(425))}function Sl(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch(B_)}:id;function B_(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Fs,Po="__reactProps$"+Fs,yi="__reactContainer$"+Fs,rd="__reactEvents$"+Fs,z_="__reactListeners$"+Fs,j_="__reactHandles$"+Fs;function mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[Qn])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[Qn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Jl(t){return t[Po]||null}var sd=[],os=-1;function tr(t){return{current:t}}function lt(t){0>os||(t.current=sd[os],sd[os]=null,os--)}function st(t,e){os++,sd[os]=t.current,t.current=e}var Zi={},Xt=tr(Zi),on=tr(!1),Tr=Zi;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function El(){lt(on),lt(Xt)}function Vp(t,e,n){if(Xt.current!==Zi)throw Error(re(168));st(Xt,e),st(on,n)}function M0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,wy(t)||"Unknown",r));return mt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Tr=Xt.current,st(Xt,t),st(on,on.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=M0(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,lt(on),lt(Xt),st(Xt,t)):lt(on),st(on,n)}var fi=null,Kl=!1,kc=!1;function b0(t){fi===null?fi=[t]:fi.push(t)}function H_(t){Kl=!0,b0(t)}function nr(){if(!kc&&fi!==null){kc=!0;var t=0,e=Ze;try{var n=fi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Kl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Yg(Zd,nr),r}finally{Ze=e,kc=!1}}return null}var as=[],ls=0,bl=null,wl=0,An=[],Rn=0,Ar=null,hi=1,mi="";function cr(t,e){as[ls++]=wl,as[ls++]=bl,bl=t,wl=e}function w0(t,e,n){An[Rn++]=hi,An[Rn++]=mi,An[Rn++]=Ar,Ar=t;var i=hi;t=mi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Wn(e)+r|n<<r|i,mi=s+t}else hi=1<<s|n<<r|i,mi=t}function lf(t){t.return!==null&&(cr(t,1),w0(t,1,0))}function cf(t){for(;t===bl;)bl=as[--ls],as[ls]=null,wl=as[--ls],as[ls]=null;for(;t===Ar;)Ar=An[--Rn],An[Rn]=null,mi=An[--Rn],An[Rn]=null,hi=An[--Rn],An[Rn]=null}var vn=null,xn=null,ct=!1,jn=null;function T0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,xn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:hi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,xn=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(ct){var e=xn;if(e){var n=e;if(!Wp(t,e)){if(od(t))throw Error(re(418));e=Vi(n.nextSibling);var i=vn;e&&Wp(t,e)?T0(i,n):(t.flags=t.flags&-4097|2,ct=!1,vn=t)}}else{if(od(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,vn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function va(t){if(t!==vn)return!1;if(!ct)return Xp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=xn)){if(od(t))throw A0(),Error(re(418));for(;e;)T0(t,e),e=Vi(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=vn?Vi(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=xn;t;)t=Vi(t.nextSibling)}function bs(){xn=vn=null,ct=!1}function uf(t){jn===null?jn=[t]:jn.push(t)}var V_=Mi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function R0(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=$i(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,S){return v===null||v.tag!==6?(v=Wc(_,u.mode,S),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,S){var R=_.type;return R===ts?d(u,v,_.props.children,S,_.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&$p(R)===v.type)?(S=r(v,_.props),S.ref=qs(u,v,_),S.return=u,S):(S=ll(_.type,_.key,_.props,null,u.mode,S),S.ref=qs(u,v,_),S.return=u,S)}function c(u,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Xc(_,u.mode,S),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function d(u,v,_,S,R){return v===null||v.tag!==7?(v=_r(_,u.mode,S,R),v.return=u,v):(v=r(v,_),v.return=u,v)}function h(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return _=ll(v.type,v.key,v.props,null,u.mode,_),_.ref=qs(u,null,v),_.return=u,_;case es:return v=Xc(v,u.mode,_),v.return=u,v;case Li:var S=v._init;return h(u,S(v._payload),_)}if(so(v)||Vs(v))return v=_r(v,u.mode,_,null),v.return=u,v;ya(u,v)}return null}function p(u,v,_,S){var R=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(u,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case la:return _.key===R?l(u,v,_,S):null;case es:return _.key===R?c(u,v,_,S):null;case Li:return R=_._init,p(u,v,R(_._payload),S)}if(so(_)||Vs(_))return R!==null?null:d(u,v,_,S,null);ya(u,_)}return null}function y(u,v,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(_)||null,a(v,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case la:return u=u.get(S.key===null?_:S.key)||null,l(v,u,S,R);case es:return u=u.get(S.key===null?_:S.key)||null,c(v,u,S,R);case Li:var T=S._init;return y(u,v,_,T(S._payload),R)}if(so(S)||Vs(S))return u=u.get(_)||null,d(v,u,S,R,null);ya(v,S)}return null}function g(u,v,_,S){for(var R=null,T=null,w=v,P=v=0,E=null;w!==null&&P<_.length;P++){w.index>P?(E=w,w=null):E=w.sibling;var b=p(u,w,_[P],S);if(b===null){w===null&&(w=E);break}t&&w&&b.alternate===null&&e(u,w),v=s(b,v,P),T===null?R=b:T.sibling=b,T=b,w=E}if(P===_.length)return n(u,w),ct&&cr(u,P),R;if(w===null){for(;P<_.length;P++)w=h(u,_[P],S),w!==null&&(v=s(w,v,P),T===null?R=w:T.sibling=w,T=w);return ct&&cr(u,P),R}for(w=i(u,w);P<_.length;P++)E=y(w,u,P,_[P],S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),v=s(E,v,P),T===null?R=E:T.sibling=E,T=E);return t&&w.forEach(function(j){return e(u,j)}),ct&&cr(u,P),R}function x(u,v,_,S){var R=Vs(_);if(typeof R!="function")throw Error(re(150));if(_=R.call(_),_==null)throw Error(re(151));for(var T=R=null,w=v,P=v=0,E=null,b=_.next();w!==null&&!b.done;P++,b=_.next()){w.index>P?(E=w,w=null):E=w.sibling;var j=p(u,w,b.value,S);if(j===null){w===null&&(w=E);break}t&&w&&j.alternate===null&&e(u,w),v=s(j,v,P),T===null?R=j:T.sibling=j,T=j,w=E}if(b.done)return n(u,w),ct&&cr(u,P),R;if(w===null){for(;!b.done;P++,b=_.next())b=h(u,b.value,S),b!==null&&(v=s(b,v,P),T===null?R=b:T.sibling=b,T=b);return ct&&cr(u,P),R}for(w=i(u,w);!b.done;P++,b=_.next())b=y(w,u,P,b.value,S),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?P:b.key),v=s(b,v,P),T===null?R=b:T.sibling=b,T=b);return t&&w.forEach(function(J){return e(u,J)}),ct&&cr(u,P),R}function m(u,v,_,S){if(typeof _=="object"&&_!==null&&_.type===ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case la:e:{for(var R=_.key,T=v;T!==null;){if(T.key===R){if(R=_.type,R===ts){if(T.tag===7){n(u,T.sibling),v=r(T,_.props.children),v.return=u,u=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&$p(R)===T.type){n(u,T.sibling),v=r(T,_.props),v.ref=qs(u,T,_),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===ts?(v=_r(_.props.children,u.mode,S,_.key),v.return=u,u=v):(S=ll(_.type,_.key,_.props,null,u.mode,S),S.ref=qs(u,v,_),S.return=u,u=S)}return o(u);case es:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Xc(_,u.mode,S),v.return=u,u=v}return o(u);case Li:return T=_._init,m(u,v,T(_._payload),S)}if(so(_))return g(u,v,_,S);if(Vs(_))return x(u,v,_,S);ya(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=Wc(_,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return m}var ws=R0(!0),C0=R0(!1),Tl=tr(null),Al=null,cs=null,df=null;function ff(){df=cs=Al=null}function pf(t){var e=Tl.current;lt(Tl),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){Al=t,df=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Al===null)throw Error(re(308));cs=t,Al.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var gr=null;function hf(t){gr===null?gr=[t]:gr.push(t)}function P0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}function qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(p=e,y=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(y,h,p);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(y,h,p):g,p==null)break e;h=mt({},h,p);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=h):d=d.next=y,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function Yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Wo={},ni=tr(Wo),Lo=tr(Wo),Do=tr(Wo);function xr(t){if(t===Wo)throw Error(re(174));return t}function gf(t,e){switch(st(Do,e),st(Lo,t),st(ni,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hu(e,t)}lt(ni),st(ni,e)}function Ts(){lt(ni),lt(Lo),lt(Do)}function D0(t){xr(Do.current);var e=xr(ni.current),n=Hu(e,t.type);e!==n&&(st(Lo,t),st(ni,n))}function xf(t){Lo.current===t&&(lt(ni),lt(Lo))}var pt=tr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function vf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var il=Mi.ReactCurrentDispatcher,zc=Mi.ReactCurrentBatchConfig,Rr=0,ht=null,wt=null,Dt=null,Pl=!1,mo=!1,Io=0,G_=0;function Bt(){throw Error(re(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function _f(t,e,n,i,r,s){if(Rr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?q_:Y_,t=n(i,r),mo){s=0;do{if(mo=!1,Io=0,25<=s)throw Error(re(301));s+=1,Dt=wt=null,e.updateQueue=null,il.current=J_,t=n(i,r)}while(mo)}if(il.current=Ll,e=wt!==null&&wt.next!==null,Rr=0,Dt=wt=ht=null,Pl=!1,e)throw Error(re(300));return t}function Sf(){var t=Io!==0;return Io=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Nn(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function No(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Rr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ht.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function I0(){}function N0(t,e){var n=ht,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Ef(O0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Uo(9,F0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(re(349));Rr&30||U0(n,e,r)}return r}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,i){e.value=n,e.getSnapshot=i,k0(e)&&B0(t)}function O0(t,e,n){return n(function(){k0(e)&&B0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function B0(t){var e=_i(t,1);e!==null&&Xn(e,t,1,-1)}function Jp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=$_.bind(null,ht,t),[e.memoizedState,t]}function Uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z0(){return Nn().memoizedState}function rl(t,e,n,i){var r=Kn();ht.flags|=t,r.memoizedState=Uo(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){r.memoizedState=Uo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Uo(1|e,n,s,i)}function Kp(t,e){return rl(8390656,8,t,e)}function Ef(t,e){return Zl(2048,8,t,e)}function j0(t,e){return Zl(4,2,t,e)}function H0(t,e){return Zl(4,4,t,e)}function V0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,V0.bind(null,e,t),n)}function Mf(){}function W0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return Rr&21?($n(n,e)||(n=Zg(),ht.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function W_(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{Ze=n,zc.transition=i}}function q0(){return Nn().memoizedState}function X_(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(t))J0(e,n);else if(n=P0(t,e,n,i),n!==null){var r=Zt();Xn(n,t,i,r),K0(n,e,i)}}function $_(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(t))J0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P0(t,e,r,i),n!==null&&(r=Zt(),Xn(n,t,i,r),K0(n,e,i))}}function Y0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function J0(t,e){mo=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function K0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}var Ll={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},q_={readContext:In,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=X_.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Jp,useDebugValue:Mf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Jp(!1),e=t[0];return t=W_.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Kn();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),It===null)throw Error(re(349));Rr&30||U0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kp(O0.bind(null,i,s,t),[t]),i.flags|=2048,Uo(9,F0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=It.identifierPrefix;if(ct){var n=mi,i=hi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y_={readContext:In,useCallback:W0,useContext:In,useEffect:Ef,useImperativeHandle:G0,useInsertionEffect:j0,useLayoutEffect:H0,useMemo:X0,useReducer:jc,useRef:z0,useState:function(){return jc(No)},useDebugValue:Mf,useDeferredValue:function(t){var e=Nn();return $0(e,wt.memoizedState,t)},useTransition:function(){var t=jc(No)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1},J_={readContext:In,useCallback:W0,useContext:In,useEffect:Ef,useImperativeHandle:G0,useInsertionEffect:j0,useLayoutEffect:H0,useMemo:X0,useReducer:Hc,useRef:z0,useState:function(){return Hc(No)},useDebugValue:Mf,useDeferredValue:function(t){var e=Nn();return wt===null?e.memoizedState=t:$0(e,wt.memoizedState,t)},useTransition:function(){var t=Hc(No)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Xi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Xn(e,t,r,i),nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Xi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Xn(e,t,r,i),nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Xi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Xn(e,t,i,n),nl(e,t,i))}};function Zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function Z0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=an(e)?Tr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=an(e)?Tr:Xt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=by(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function Q0(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,Sd=i),dd(t,e)},n}function ex(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function eh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function th(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var Z_=Mi.ReactCurrentOwner,sn=!1;function Jt(t,e,n,i){e.child=t===null?C0(e,null,n,i):ws(e,t.child,n,i)}function ih(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=_f(t,e,n,i,s,r),n=Sf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&n&&lf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function rh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tx(t,e,s,i,r)):(t=ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function tx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return fd(t,e,n,i,r)}function nx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ds,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ds,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ds,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ds,mn),mn|=i;return Jt(t,e,r,n),e.child}function ix(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,i,r){var s=an(n)?Tr:Xt.current;return s=Ms(e,s),vs(e,r),n=_f(t,e,n,i,s,r),i=Sf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&i&&lf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function sh(t,e,n,i,r){if(an(n)){var s=!0;Ml(e)}else s=!1;if(vs(e,r),e.stateNode===null)sl(t,e),Z0(e,n,i),ud(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=an(n)?Tr:Xt.current,c=Ms(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qp(e,o,i,c),Di=!1;var p=e.memoizedState;o.state=p,Rl(e,i,o,r),l=e.memoizedState,a!==i||p!==l||on.current||Di?(typeof d=="function"&&(cd(e,n,d,i),l=e.memoizedState),(a=Di||Zp(e,n,a,i,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,L0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=an(n)?Tr:Xt.current,l=Ms(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Qp(e,o,i,l),Di=!1,p=e.memoizedState,o.state=p,Rl(e,i,o,r);var g=e.memoizedState;a!==h||p!==g||on.current||Di?(typeof y=="function"&&(cd(e,n,y,i),g=e.memoizedState),(c=Di||Zp(e,n,c,i,p,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){ix(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gp(e,n,!1),Si(t,e,s);i=e.stateNode,Z_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function rx(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),gf(t,e.containerInfo)}function oh(t,e,n,i,r){return bs(),uf(r),e.flags|=256,Jt(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function sx(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(pt,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=hd,t):bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Q_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&uf(i),ws(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(re(422))),_a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=md(o),e.memoizedState=hd,s);if(!(e.mode&1))return _a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Vc(s,i,void 0),_a(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Xn(i,t,r,-1))}return Pf(),i=Vc(Error(re(421))),_a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=Vi(r.nextSibling),vn=e,ct=!0,jn=null,t!==null&&(An[Rn++]=hi,An[Rn++]=mi,An[Rn++]=Ar,hi=t.id,mi=t.overflow,Ar=e),e=bf(e,i.children),e.flags|=4096,e)}function ah(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ld(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ah(t,n,e);else if(t.tag===19)ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:rx(e),bs();break;case 5:D0(e);break;case 1:an(e.type)&&Ml(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?sx(t,e,n):(st(pt,pt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,nx(t,e,n)}return Si(t,e,n)}var ax,gd,lx,cx;ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};lx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(ni.current);var s=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=ju(t,r),i=ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Vu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tS(t,e,n){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&El(),zt(e),null;case 3:return i=e.stateNode,Ts(),lt(on),lt(Xt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(bd(jn),jn=null))),gd(t,e),zt(e),null;case 5:xf(e);var r=xr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)lx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return zt(e),null}if(t=xr(ni.current),va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ao.length;r++)ot(ao[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":gp(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":vp(i,s),ot("invalid",i)}Vu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":ca(i),xp(i,s,!0);break;case"textarea":ca(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Po]=i,ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ao.length;r++)ot(ao[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":gp(t,i),r=ku(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":vp(t,i),r=ju(t,i),ot("invalid",t);break;default:r=i}Vu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(t,l):typeof l=="number"&&So(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&$d(t,s,l,o))}switch(n){case"input":ca(t),xp(t,i,!1);break;case"textarea":ca(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)cx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=xr(Do.current),xr(ni.current),va(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return zt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&xn!==null&&e.mode&1&&!(e.flags&128))A0(),bs(),e.flags|=98560,s=!1;else if(s=va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Qn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else jn!==null&&(bd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Tt===0&&(Tt=3):Pf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ts(),gd(t,e),t===null&&Ro(e.stateNode.containerInfo),zt(e),null;case 10:return pf(e.type._context),zt(e),null;case 17:return an(e.type)&&El(),zt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Rs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return zt(e),null}else 2*_t()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=pt.current,st(pt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function nS(t,e){switch(cf(e),e.tag){case 1:return an(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),lt(on),lt(Xt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return Ts(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Sa=!1,Vt=!1,iS=typeof WeakSet=="function"?WeakSet:Set,he=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){vt(t,e,i)}}var lh=!1;function rS(t,e){if(ed=vl,t=h0(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var y;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},vl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return g=lh,lh=!1,g}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ux(t){var e=t.alternate;e!==null&&(t.alternate=null,ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Po],delete e[rd],delete e[z_],delete e[j_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dx(t){return t.tag===5||t.tag===3||t.tag===4}function ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Nt=null,zn=!1;function wi(t,e,n){for(n=n.child;n!==null;)fx(t,e,n),n=n.sibling}function fx(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Vt||us(n,e);case 6:var i=Nt,r=zn;Nt=null,wi(t,e,n),Nt=i,zn=r,Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),wo(t)):Oc(Nt,n.stateNode));break;case 4:i=Nt,r=zn,Nt=n.stateNode.containerInfo,zn=!0,wi(t,e,n),Nt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Vt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,wi(t,e,n),Vt=i):wi(t,e,n);break;default:wi(t,e,n)}}function uh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(i){var r=pS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,zn=!1;break e;case 3:Nt=a.stateNode.containerInfo,zn=!0;break e;case 4:Nt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Nt===null)throw Error(re(160));fx(s,o,r),Nt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)px(e,t),e=e.sibling}function px(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Jn(t),i&4){try{go(3,t,t.return),ec(3,t)}catch(x){vt(t,t.return,x)}try{go(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:Un(e,t),Jn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Un(e,t),Jn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{So(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ug(r,s),Gu(a,o);var c=Gu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?zg(r,h):d==="dangerouslySetInnerHTML"?kg(r,h):d==="children"?So(r,h):$d(r,d,h,c)}switch(a){case"input":Bu(r,s);break;case"textarea":Fg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?hs(r,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(Un(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(Un(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:Un(e,t),Jn(t);break;case 13:Un(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=_t())),i&4&&uh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,Un(e,t),Vt=c):Un(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(h=he=d;he!==null;){switch(p=he,y=p.child,p.tag){case 0:case 11:case 14:case 15:go(4,p,p.return);break;case 1:us(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:us(p,p.return);break;case 22:if(p.memoizedState!==null){fh(h);continue}}y!==null?(y.return=p,he=y):fh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(x){vt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){vt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),Jn(t),i&4&&uh(t);break;case 21:break;default:Un(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(So(r,""),i.flags&=-33);var s=ch(t);_d(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ch(t);yd(t,a,o);break;default:throw Error(re(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){he=t,hx(t)}function hx(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=Sa;var c=Vt;if(Sa=o,(Vt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?ph(r):l!==null?(l.return=o,he=l):ph(r);for(;s!==null;)he=s,hx(s),s=s.sibling;he=r,Sa=a,Vt=c}dh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):dh(t)}}function dh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Vt||e.flags&512&&vd(e)}catch(p){vt(e,e.return,p)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function fh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function ph(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{vd(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var oS=Math.ceil,Dl=Mi.ReactCurrentDispatcher,wf=Mi.ReactCurrentOwner,Dn=Mi.ReactCurrentBatchConfig,Ye=0,It=null,Et=null,Ft=0,mn=0,ds=tr(0),Tt=0,Fo=null,Cr=0,tc=0,Tf=0,xo=null,nn=null,Af=0,Rs=1/0,di=null,Il=!1,Sd=null,Wi=null,Ea=!1,Fi=null,Nl=0,vo=0,Ed=null,ol=-1,al=0;function Zt(){return Ye&6?_t():ol!==-1?ol:ol=_t()}function Xi(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:V_.transition!==null?(al===0&&(al=Zg()),al):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function Xn(t,e,n,i){if(50<vo)throw vo=0,Ed=null,Error(re(185));Ho(t,n,i),(!(Ye&2)||t!==It)&&(t===It&&(!(Ye&2)&&(tc|=n),Tt===4&&Ni(t,Ft)),ln(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Rs=_t()+500,Kl&&nr()))}function ln(t,e){var n=t.callbackNode;Vy(t,e);var i=xl(t,t===It?Ft:0);if(i===0)n!==null&&Ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ep(n),e===1)t.tag===0?H_(hh.bind(null,t)):b0(hh.bind(null,t)),k_(function(){!(Ye&6)&&nr()}),n=null;else{switch(Qg(i)){case 1:n=Zd;break;case 4:n=Jg;break;case 16:n=gl;break;case 536870912:n=Kg;break;default:n=gl}n=Ex(n,mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mx(t,e){if(ol=-1,al=0,Ye&6)throw Error(re(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=xl(t,t===It?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=Ye;Ye|=2;var s=xx();(It!==t||Ft!==e)&&(di=null,Rs=_t()+500,yr(t,e));do try{cS();break}catch(a){gx(t,a)}while(!0);ff(),Dl.current=s,Ye=r,Et!==null?e=0:(It=null,Ft=0,e=Tt)}if(e!==0){if(e===2&&(r=Yu(t),r!==0&&(i=r,e=Md(t,r))),e===1)throw n=Fo,yr(t,0),Ni(t,i),ln(t,_t()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!aS(r)&&(e=Ul(t,i),e===2&&(s=Yu(t),s!==0&&(i=s,e=Md(t,s))),e===1))throw n=Fo,yr(t,0),Ni(t,i),ln(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:ur(t,nn,di);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Af+500-_t(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=id(ur.bind(null,t,nn,di),e);break}ur(t,nn,di);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oS(i/1960))-i,10<i){t.timeoutHandle=id(ur.bind(null,t,nn,di),i);break}ur(t,nn,di);break;case 5:ur(t,nn,di);break;default:throw Error(re(329))}}}return ln(t,_t()),t.callbackNode===n?mx.bind(null,t):null}function Md(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=nn,nn=n,e!==null&&bd(e)),t}function bd(t){nn===null?nn=t:nn.push.apply(nn,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Tf,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function hh(t){if(Ye&6)throw Error(re(327));ys();var e=xl(t,0);if(!(e&1))return ln(t,_t()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Yu(t);i!==0&&(e=i,n=Md(t,i))}if(n===1)throw n=Fo,yr(t,0),Ni(t,e),ln(t,_t()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,nn,di),ln(t,_t()),null}function Rf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Rs=_t()+500,Kl&&nr())}}function Pr(t){Fi!==null&&Fi.tag===0&&!(Ye&6)&&ys();var e=Ye;Ye|=1;var n=Dn.transition,i=Ze;try{if(Dn.transition=null,Ze=1,t)return t()}finally{Ze=i,Dn.transition=n,Ye=e,!(Ye&6)&&nr()}}function Cf(){mn=ds.current,lt(ds)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Ts(),lt(on),lt(Xt),vf();break;case 5:xf(i);break;case 4:Ts();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:pf(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(It=t,Et=t=$i(t.current,null),Ft=mn=e,Tt=0,Fo=null,Tf=tc=Cr=0,nn=xo=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function gx(t,e){do{var n=Et;try{if(ff(),il.current=Ll,Pl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Rr=0,Dt=wt=ht=null,mo=!1,Io=0,wf.current=null,n===null||n.return===null){Tt=1,Fo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=th(o);if(y!==null){y.flags&=-257,nh(y,o,a,s,e),y.mode&1&&eh(s,c,e),e=y,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){eh(s,c,e),Pf();break e}l=Error(re(426))}}else if(ct&&a.mode&1){var m=th(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),nh(m,o,a,s,e),uf(As(l,a));break e}}s=l=As(l,a),Tt!==4&&(Tt=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Q0(s,l,e);qp(s,u);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wi===null||!Wi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ex(s,a,e);qp(s,S);break e}}s=s.return}while(s!==null)}yx(n)}catch(R){e=R,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function xx(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Pf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),It===null||!(Cr&268435455)&&!(tc&268435455)||Ni(It,Ft)}function Ul(t,e){var n=Ye;Ye|=2;var i=xx();(It!==t||Ft!==e)&&(di=null,yr(t,e));do try{lS();break}catch(r){gx(t,r)}while(!0);if(ff(),Ye=n,Dl.current=i,Et!==null)throw Error(re(261));return It=null,Ft=0,Tt}function lS(){for(;Et!==null;)vx(Et)}function cS(){for(;Et!==null&&!Ny();)vx(Et)}function vx(t){var e=Sx(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?yx(t):Et=e,wf.current=null}function yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=tS(n,e,mn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function ur(t,e,n){var i=Ze,r=Dn.transition;try{Dn.transition=null,Ze=1,uS(t,e,n,i)}finally{Dn.transition=r,Ze=i}return null}function uS(t,e,n,i){do ys();while(Fi!==null);if(Ye&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gy(t,s),t===It&&(Et=It=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ea||(Ea=!0,Ex(gl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Ze;Ze=1;var a=Ye;Ye|=4,wf.current=null,rS(t,n),px(n,t),P_(td),vl=!!ed,td=ed=null,t.current=n,sS(n),Uy(),Ye=a,Ze=o,Dn.transition=s}else t.current=n;if(Ea&&(Ea=!1,Fi=t,Nl=r),s=t.pendingLanes,s===0&&(Wi=null),ky(n.stateNode),ln(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=Sd,Sd=null,t;return Nl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Ed?vo++:(vo=0,Ed=t):vo=0,nr(),null}function ys(){if(Fi!==null){var t=Qg(Nl),e=Dn.transition,n=Ze;try{if(Dn.transition=null,Ze=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Nl=0,Ye&6)throw Error(re(331));var r=Ye;for(Ye|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:go(8,d,s)}var h=d.child;if(h!==null)h.return=d,he=h;else for(;he!==null;){d=he;var p=d.sibling,y=d.return;if(ux(d),d===c){he=null;break}if(p!==null){p.return=y,he=p;break}he=y}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,he=_;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(R){vt(a,a.return,R)}if(a===o){he=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,he=S;break e}he=a.return}}if(Ye=r,nr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{Ze=n,Dn.transition=e}}return!1}function mh(t,e,n){e=As(n,e),e=Q0(t,e,1),t=Gi(t,e,1),e=Zt(),t!==null&&(Ho(t,1,e),ln(t,e))}function vt(t,e,n){if(t.tag===3)mh(t,t,n);else for(;e!==null;){if(e.tag===3){mh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=As(n,t),t=ex(e,t,1),e=Gi(e,t,1),t=Zt(),e!==null&&(Ho(e,1,t),ln(e,t));break}}e=e.return}}function dS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ft&n)===n&&(Tt===4||Tt===3&&(Ft&130023424)===Ft&&500>_t()-Af?yr(t,0):Tf|=n),ln(t,e)}function _x(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=Zt();t=_i(t,e),t!==null&&(Ho(t,e,n),ln(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_x(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),_x(t,n)}var Sx;Sx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,eS(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ct&&e.flags&1048576&&w0(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(t,e),t=e.pendingProps;var r=Ms(e,Xt.current);vs(e,n),r=_f(null,e,i,t,r,n);var s=Sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mf(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,ud(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&lf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mS(i),t=Bn(i,t),r){case 0:e=fd(null,e,i,t,n);break e;case 1:e=sh(null,e,i,t,n);break e;case 11:e=ih(null,e,i,t,n);break e;case 14:e=rh(null,e,i,Bn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),fd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),sh(t,e,i,r,n);case 3:e:{if(rx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,L0(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(re(423)),e),e=oh(t,e,i,n,r);break e}else if(i!==r){r=As(Error(re(424)),e),e=oh(t,e,i,n,r);break e}else for(xn=Vi(e.stateNode.containerInfo.firstChild),vn=e,ct=!0,jn=null,n=C0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Si(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return D0(e),t===null&&ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,nd(i,r)?o=null:s!==null&&nd(i,s)&&(e.flags|=32),ix(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&ad(e),null;case 13:return sx(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ih(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Tl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!on.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ld(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=In(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),rh(t,e,i,r,n);case 15:return tx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),sl(t,e),e.tag=1,an(i)?(t=!0,Ml(e)):t=!1,vs(e,n),Z0(e,i,r),ud(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return ox(t,e,n);case 22:return nx(t,e,n)}throw Error(re(156,e.tag))};function Ex(t,e){return Yg(t,e)}function hS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new hS(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return _r(n.children,r,s,e);case qd:o=8,r|=8;break;case Nu:return t=Ln(12,n,e,r|2),t.elementType=Nu,t.lanes=s,t;case Uu:return t=Ln(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Fu:return t=Ln(19,n,e,r),t.elementType=Fu,t.lanes=s,t;case Dg:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:o=10;break e;case Lg:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case Li:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,o,a,l){return t=new gS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function xS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return Zi;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(an(n))return M0(t,n,e)}return e}function bx(t,e,n,i,r,s,o,a,l){return t=Df(n,i,!0,t,r,s,o,a,l),t.context=Mx(null),n=t.current,i=Zt(),r=Xi(n),s=xi(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Ho(t,r,i),ln(t,i),t}function ic(t,e,n,i){var r=e.current,s=Zt(),o=Xi(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(Xn(t,r,o,s),nl(t,r,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){gh(t,e),(t=t.alternate)&&gh(t,e)}function vS(){return null}var wx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}rc.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ic(t,e,null,null)};rc.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){ic(null,t,null,null)}),e[yi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ii.length&&e!==0&&e<Ii[n].priority;n++);Ii.splice(n,0,t),n===0&&r0(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xh(){}function yS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fl(o);s.call(c)}}var o=bx(e,i,t,0,null,!1,!1,"",xh);return t._reactRootContainer=o,t[yi]=o.current,Ro(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fl(l);a.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",xh);return t._reactRootContainer=l,t[yi]=l.current,Ro(t.nodeType===8?t.parentNode:t),Pr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fl(o);a.call(l)}}ic(e,o,t,r)}else o=yS(n,e,t,r,i);return Fl(o)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(Qd(e,n|1),ln(e,_t()),!(Ye&6)&&(Rs=_t()+500,nr()))}break;case 13:Pr(function(){var i=_i(t,1);if(i!==null){var r=Zt();Xn(i,t,1,r)}}),If(t,1)}};ef=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Zt();Xn(e,t,134217728,n)}If(t,134217728)}};t0=function(t){if(t.tag===13){var e=Xi(t),n=_i(t,e);if(n!==null){var i=Zt();Xn(n,t,e,i)}If(t,e)}};n0=function(){return Ze};i0=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Xu=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(re(90));Ng(i),Bu(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};Vg=Rf;Gg=Pr;var _S={usingClientEntryPoint:!1,Events:[Go,ss,Jl,jg,Hg,Rf]},Js={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SS={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{Xl=Ma.inject(SS),ti=Ma}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(re(200));return xS(t,e,null,n)};En.createRoot=function(t,e){if(!Uf(t))throw Error(re(299));var n=!1,i="",r=wx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,Ro(t.nodeType===8?t.parentNode:t),new Nf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Pr(t)};En.hydrate=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=wx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bx(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,Ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};En.render=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!sc(t))throw Error(re(40));return t._reactRootContainer?(Pr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};En.unstable_batchedUpdates=Rf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return oc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx)}catch(t){console.error(t)}}Tx(),Tg.exports=En;var ES=Tg.exports,vh=ES;Du.createRoot=vh.createRoot,Du.hydrateRoot=vh.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Oo.apply(this,arguments)}var Oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Oi||(Oi={}));const yh="popstate";function MS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return wd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ax(r)}return wS(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ff(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bS(){return Math.random().toString(36).substr(2,8)}function _h(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,n,i){return n===void 0&&(n=null),Oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||i||bS()})}function Ax(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function wS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Oi.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Oo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Oi.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:u})}function p(m,u){a=Oi.Push;let v=wd(x.location,m,u);c=d()+1;let _=_h(v,c),S=x.createHref(v);try{o.pushState(_,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function y(m,u){a=Oi.Replace;let v=wd(x.location,m,u);c=d();let _=_h(v,c),S=x.createHref(v);o.replaceState(_,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function g(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Ax(m);return v=v.replace(/ $/,"%20"),Mt(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(yh,h),l=m,()=>{r.removeEventListener(yh,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let u=g(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:y,go(m){return o.go(m)}};return x}var Sh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sh||(Sh={}));function TS(t,e,n){return n===void 0&&(n="/"),AS(t,e,n)}function AS(t,e,n,i){let r=typeof e=="string"?Os(e):e,s=Px(r.pathname||"/",n);if(s==null)return null;let o=Rx(t);RS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=zS(s);a=OS(o[l],c)}return a}function Rx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Sr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rx(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:US(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Cx(s.path))r(s,o,l)}),e}function Cx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Cx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function RS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const CS=/^:[\w-]+$/,PS=3,LS=2,DS=1,IS=10,NS=-2,Eh=t=>t==="*";function US(t,e){let n=t.split("/"),i=n.length;return n.some(Eh)&&(i+=NS),e&&(i+=LS),n.filter(r=>!Eh(r)).reduce((r,s)=>r+(CS.test(s)?PS:s===""?DS:IS),i)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function OS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=kS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:Sr([s,h.pathname]),pathnameBase:WS(Sr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=Sr([s,h.pathnameBase]))}return o}function kS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=BS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return y&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function BS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ff(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function zS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ff(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Px(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HS=t=>jS.test(t);function VS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Os(t):t,s;if(n)if(HS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ff(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Mh(n.substring(1),"/"):s=Mh(n,e)}else s=e;return{pathname:s,search:XS(i),hash:$S(r)}}function Mh(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lx(t,e){let n=GS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Dx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Os(t):(r=Oo({},t),Mt(!r.pathname||!r.pathname.includes("?"),$c("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),$c("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),$c("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;r.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=VS(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),WS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$S=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ix=["post","put","patch","delete"];new Set(Ix);const YS=["get",...Ix];new Set(YS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ko.apply(this,arguments)}const Of=ie.createContext(null),JS=ie.createContext(null),Xo=ie.createContext(null),ac=ie.createContext(null),Fr=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),Nx=ie.createContext(null);function $o(){return ie.useContext(ac)!=null}function kf(){return $o()||Mt(!1),ie.useContext(ac).location}function Ux(t){ie.useContext(Xo).static||ie.useLayoutEffect(t)}function qo(){let{isDataRoute:t}=ie.useContext(Fr);return t?c1():KS()}function KS(){$o()||Mt(!1);let t=ie.useContext(Of),{basename:e,future:n,navigator:i}=ie.useContext(Xo),{matches:r}=ie.useContext(Fr),{pathname:s}=kf(),o=JSON.stringify(Lx(r,n.v7_relativeSplatPath)),a=ie.useRef(!1);return Ux(()=>{a.current=!0}),ie.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=Dx(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Sr([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,o,s,t])}function ZS(t,e){return QS(t,e)}function QS(t,e,n,i){$o()||Mt(!1);let{navigator:r}=ie.useContext(Xo),{matches:s}=ie.useContext(Fr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=kf(),d;if(e){var h;let m=typeof e=="string"?Os(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Mt(!1),d=m}else d=c;let p=d.pathname||"/",y=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=TS(t,{pathname:y}),x=r1(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Sr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Sr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?ie.createElement(ac.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Oi.Pop}},x):x}function e1(){let t=l1(),e=qS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),n?ie.createElement("pre",{style:r},n):null,null)}const t1=ie.createElement(e1,null);class n1 extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ie.createElement(Fr.Provider,{value:this.props.routeContext},ie.createElement(Nx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(t){let{routeContext:e,match:n,children:i}=t,r=ie.useContext(Of);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ie.createElement(Fr.Provider,{value:e},i)}function r1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Mt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:y}=n,g=h.route.loader&&p[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let y,g=!1,x=null,m=null;n&&(y=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||t1,l&&(c<0&&p===0?(u1("route-fallback"),g=!0,m=null):c===p&&(g=!0,m=h.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,p+1)),v=()=>{let _;return y?_=x:g?_=m:h.route.Component?_=ie.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=d,ie.createElement(i1,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?ie.createElement(n1,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var Fx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fx||{}),Ox=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ox||{});function s1(t){let e=ie.useContext(Of);return e||Mt(!1),e}function o1(t){let e=ie.useContext(JS);return e||Mt(!1),e}function a1(t){let e=ie.useContext(Fr);return e||Mt(!1),e}function kx(t){let e=a1(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function l1(){var t;let e=ie.useContext(Nx),n=o1(),i=kx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function c1(){let{router:t}=s1(Fx.UseNavigateStable),e=kx(Ox.UseNavigateStable),n=ie.useRef(!1);return Ux(()=>{n.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ko({fromRouteId:e},s)))},[t,e])}const bh={};function u1(t,e,n){bh[t]||(bh[t]=!0)}function d1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function qc(t){let{to:e,replace:n,state:i,relative:r}=t;$o()||Mt(!1);let{future:s,static:o}=ie.useContext(Xo),{matches:a}=ie.useContext(Fr),{pathname:l}=kf(),c=qo(),d=Dx(e,Lx(a,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(d);return ie.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function lo(t){Mt(!1)}function f1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Oi.Pop,navigator:s,static:o=!1,future:a}=t;$o()&&Mt(!1);let l=e.replace(/^\/*/,"/"),c=ie.useMemo(()=>({basename:l,navigator:s,static:o,future:ko({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Os(i));let{pathname:d="/",search:h="",hash:p="",state:y=null,key:g="default"}=i,x=ie.useMemo(()=>{let m=Px(d,l);return m==null?null:{location:{pathname:m,search:h,hash:p,state:y,key:g},navigationType:r}},[l,d,h,p,y,g,r]);return x==null?null:ie.createElement(Xo.Provider,{value:c},ie.createElement(ac.Provider,{children:n,value:x}))}function p1(t){let{children:e,location:n}=t;return ZS(Td(e),n)}new Promise(()=>{});function Td(t,e){e===void 0&&(e=[]);let n=[];return ie.Children.forEach(t,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){n.push.apply(n,Td(i.props.children,s));return}i.type!==lo&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Td(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const h1="6";try{window.__reactRouterVersion=h1}catch{}const m1="startTransition",wh=dy[m1];function g1(t){let{basename:e,children:n,future:i,window:r}=t,s=ie.useRef();s.current==null&&(s.current=MS({window:r,v5Compat:!0}));let o=s.current,[a,l]=ie.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=ie.useCallback(h=>{c&&wh?wh(()=>l(h)):l(h)},[l,c]);return ie.useLayoutEffect(()=>o.listen(d),[o,d]),ie.useEffect(()=>d1(i),[i]),ie.createElement(f1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var Th;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Th||(Th={}));var Ah;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ah||(Ah={}));function Bx({color:t="#7b2fff",count:e=120,speed:n=.3}){const i=ie.useRef(null);return ie.useEffect(()=>{const r=i.current,s=r.getContext("2d");let o,a,l;const c=()=>{a=r.width=r.offsetWidth,l=r.height=r.offsetHeight};c(),window.addEventListener("resize",c);const h=(m=>{const u=parseInt(m.slice(1,3),16),v=parseInt(m.slice(3,5),16),_=parseInt(m.slice(5,7),16);return{r:u,g:v,b:_}})(t),p=Array.from({length:e},()=>({x:Math.random(),y:Math.random(),z:Math.random(),vx:(Math.random()-.5)*2e-4,vy:(Math.random()-.5)*2e-4,vz:(Math.random()-.5)*3e-4*n,size:Math.random()*1.5+.5}));let y={x:.5,y:.5};const g=m=>{y.x=m.clientX/a,y.y=m.clientY/l};window.addEventListener("mousemove",g);const x=()=>{s.clearRect(0,0,a,l);for(const m of p)m.x+=m.vx+(y.x-.5)*8e-5,m.y+=m.vy+(y.y-.5)*8e-5,m.z+=m.vz,m.x<0&&(m.x=1),m.x>1&&(m.x=0),m.y<0&&(m.y=1),m.y>1&&(m.y=0),m.z<0&&(m.z=1),m.z>1&&(m.z=0);for(let m=0;m<p.length;m++)for(let u=m+1;u<p.length;u++){const v=p[m],_=p[u],S=(v.x-_.x)*a,R=(v.y-_.y)*l,T=Math.sqrt(S*S+R*R);if(T<100){const w=(1-T/100)*.15*Math.min(v.z,_.z);s.beginPath(),s.strokeStyle=`rgba(${h.r},${h.g},${h.b},${w})`,s.lineWidth=.5,s.moveTo(v.x*a,v.y*l),s.lineTo(_.x*a,_.y*l),s.stroke()}}for(const m of p){const u=.4+m.z*.6,v=m.size*(.5+m.z*.8);s.beginPath(),s.arc(m.x*a,m.y*l,v,0,Math.PI*2),s.fillStyle=`rgba(${h.r},${h.g},${h.b},${u})`,s.fill()}o=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",c),window.removeEventListener("mousemove",g)}},[t,e,n]),f.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="160",x1=0,Rh=1,v1=2,zx=1,y1=2,ui=3,Qi=0,cn=1,pi=2,qi=0,_s=1,Ch=2,Ph=3,Lh=4,_1=5,pr=100,S1=101,E1=102,Dh=103,Ih=104,M1=200,b1=201,w1=202,T1=203,Ad=204,Rd=205,A1=206,R1=207,C1=208,P1=209,L1=210,D1=211,I1=212,N1=213,U1=214,F1=0,O1=1,k1=2,Ol=3,B1=4,z1=5,j1=6,H1=7,zf=0,V1=1,G1=2,Yi=0,W1=1,X1=2,$1=3,q1=4,Y1=5,J1=6,jx=300,Cs=301,Ps=302,Cd=303,Pd=304,lc=306,Ld=1e3,Vn=1001,Dd=1002,Kt=1003,Nh=1004,Yc=1005,Cn=1006,K1=1007,Bo=1008,Ji=1009,Z1=1010,Q1=1011,jf=1012,Hx=1013,ki=1014,Bi=1015,zo=1016,Vx=1017,Gx=1018,Er=1020,eE=1021,Gn=1023,tE=1024,nE=1025,Mr=1026,Ls=1027,iE=1028,Wx=1029,rE=1030,Xx=1031,$x=1033,Jc=33776,Kc=33777,Zc=33778,Qc=33779,Uh=35840,Fh=35841,Oh=35842,kh=35843,qx=36196,Bh=37492,zh=37496,jh=37808,Hh=37809,Vh=37810,Gh=37811,Wh=37812,Xh=37813,$h=37814,qh=37815,Yh=37816,Jh=37817,Kh=37818,Zh=37819,Qh=37820,em=37821,eu=36492,tm=36494,nm=36495,sE=36283,im=36284,rm=36285,sm=36286,Yx=3e3,br=3001,oE=3200,aE=3201,Jx=0,lE=1,Pn="",Ut="srgb",Ei="srgb-linear",Hf="display-p3",cc="display-p3-linear",kl="linear",at="srgb",Bl="rec709",zl="p3",kr=7680,om=519,cE=512,uE=513,dE=514,Kx=515,fE=516,pE=517,hE=518,mE=519,am=35044,lm="300 es",Id=1035,gi=2e3,jl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=Math.PI/180,Nd=180/Math.PI;function Yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function gE(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function cm(t){return(t&t-1)===0&&t!==0}function Ud(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],y=i[5],g=i[8],x=r[0],m=r[3],u=r[6],v=r[1],_=r[4],S=r[7],R=r[2],T=r[5],w=r[8];return s[0]=o*x+a*v+l*R,s[3]=o*m+a*_+l*T,s[6]=o*u+a*S+l*w,s[1]=c*x+d*v+h*R,s[4]=c*m+d*_+h*T,s[7]=c*u+d*S+h*w,s[2]=p*x+y*v+g*R,s[5]=p*m+y*_+g*T,s[8]=p*u+y*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*s,y=c*s-o*l,g=n*h+i*p+r*y;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=p*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=y*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(iu.makeScale(e,n)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new Ge;function Zx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xE(){const t=Hl("canvas");return t.style.display="block",t}const um={};function yo(t){t in um||(um[t]=!0,console.warn(t))}const dm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[Ei]:{transfer:kl,primaries:Bl,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:at,primaries:Bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cc]:{transfer:kl,primaries:zl,toReference:t=>t.applyMatrix3(fm),fromReference:t=>t.applyMatrix3(dm)},[Hf]:{transfer:at,primaries:zl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(fm),fromReference:t=>t.applyMatrix3(dm).convertLinearToSRGB()}},vE=new Set([Ei,cc]),et={enabled:!0,_workingColorSpace:Ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ba[e].toReference,r=ba[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ba[t].primaries},getTransfer:function(t){return t===Pn?kl:ba[t].transfer}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ru(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class Qx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Hl("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ss(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yE=0;class ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _E=0;class yn extends ks{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=Bo,a=Gn,l=Ji,c=yn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Yo(),this.name="",this.source=new ev(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===br?Ut:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?br:Yx}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===br?Ut:Pn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=jx;yn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],y=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+y+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(y+1)/2,R=(u+1)/2,T=(d+p)/4,w=(h+x)/4,P=(g+m)/4;return _>S&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(p-d)/v,this.w=Math.acos((c+y+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SE extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===br?Ut:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ev(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends SE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tv extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EE extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const p=s[o+0],y=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=p,e[n+1]=y,e[n+2]=g,e[n+3]=x;return}if(h!==x||l!==p||c!==y||d!==g){let m=1-a;const u=l*p+c*y+d*g+h*x,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,u*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*v;if(l=l*m+p*S,c=c*m+y*S,d=d*m+g*S,h=h*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],p=s[o+1],y=s[o+2],g=s[o+3];return e[n]=a*g+d*h+l*y-c*p,e[n+1]=l*g+d*p+c*h-a*y,e[n+2]=c*g+d*y+a*p-l*h,e[n+3]=d*g-a*h-l*p-c*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),p=l(i/2),y=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*d*h+c*y*g,this._y=c*y*h-p*d*g,this._z=c*d*g+p*y*h,this._w=c*d*h-p*y*g;break;case"YXZ":this._x=p*d*h+c*y*g,this._y=c*y*h-p*d*g,this._z=c*d*g-p*y*h,this._w=c*d*h+p*y*g;break;case"ZXY":this._x=p*d*h-c*y*g,this._y=c*y*h+p*d*g,this._z=c*d*g+p*y*h,this._w=c*d*h-p*y*g;break;case"ZYX":this._x=p*d*h-c*y*g,this._y=c*y*h+p*d*g,this._z=c*d*g-p*y*h,this._w=c*d*h+p*y*g;break;case"YZX":this._x=p*d*h+c*y*g,this._y=c*y*h+p*d*g,this._z=c*d*g-p*y*h,this._w=c*d*h-p*y*g;break;case"XZY":this._x=p*d*h-c*y*g,this._y=c*y*h-p*d*g,this._z=c*d*g+p*y*h,this._w=c*d*h+p*y*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],p=i+a+h;if(p>0){const y=.5/Math.sqrt(p+1);this._w=.25/y,this._x=(d-l)*y,this._y=(s-c)*y,this._z=(o-r)*y}else if(i>a&&i>h){const y=2*Math.sqrt(1+i-a-h);this._w=(d-l)/y,this._x=.25*y,this._y=(r+o)/y,this._z=(s+c)/y}else if(a>h){const y=2*Math.sqrt(1+a-i-h);this._w=(s-c)/y,this._x=(r+o)/y,this._y=.25*y,this._z=(l+d)/y}else{const y=2*Math.sqrt(1+h-i-a);this._w=(o-r)/y,this._x=(s+c)/y,this._y=(l+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const y=1-n;return this._w=y*o+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new F,pm=new Jo;class Ko{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ta.subVectors(this.max,Zs),zr.subVectors(e.a,Zs),jr.subVectors(e.b,Zs),Hr.subVectors(e.c,Zs),Ti.subVectors(jr,zr),Ai.subVectors(Hr,jr),sr.subVectors(zr,Hr);let n=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-sr.z,sr.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,sr.z,0,-sr.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-sr.y,sr.x,0];return!au(n,zr,jr,Hr,Ta)||(n=[1,0,0,0,1,0,0,0,1],!au(n,zr,jr,Hr,Ta))?!1:(Aa.crossVectors(Ti,Ai),n=[Aa.x,Aa.y,Aa.z],au(n,zr,jr,Hr,Ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,wa=new Ko,zr=new F,jr=new F,Hr=new F,Ti=new F,Ai=new F,sr=new F,Zs=new F,Ta=new F,Aa=new F,or=new F;function au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ME=new Ko,Qs=new F,lu=new F;class Vf{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ME.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(lu)),this.expandByPoint(Qs.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new F,cu=new F,Ra=new F,Ri=new F,uu=new F,Ca=new F,du=new F;class bE{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ra),a=Ri.dot(this.direction),l=-Ri.dot(Ra),c=Ri.lengthSq(),d=Math.abs(1-o*o);let h,p,y,g;if(d>0)if(h=o*l-a,p=o*a-l,g=s*d,h>=0)if(p>=-g)if(p<=g){const x=1/d;h*=x,p*=x,y=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),y=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),y=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),y=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),y=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),y=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),y=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cu).addScaledVector(Ra,p),y}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){uu.subVectors(n,e),Ca.subVectors(i,e),du.crossVectors(uu,Ca);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Ri,Ca));if(l<0)return null;const c=a*this.direction.dot(uu.cross(Ri));if(c<0||l+c>o)return null;const d=-a*Ri.dot(du);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,c,d,h,p,y,g,x,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,p,y,g,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,p,y,g,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=y,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,y=o*h,g=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=y+g*c,n[5]=p-x*c,n[9]=-a*l,n[2]=x-p*c,n[6]=g+y*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,y=l*h,g=c*d,x=c*h;n[0]=p+x*a,n[4]=g*a-y,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=y*a-g,n[6]=x+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,y=l*h,g=c*d,x=c*h;n[0]=p-x*a,n[4]=-o*h,n[8]=g+y*a,n[1]=y+g*a,n[5]=o*d,n[9]=x-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,y=o*h,g=a*d,x=a*h;n[0]=l*d,n[4]=g*c-y,n[8]=p*c+x,n[1]=l*h,n[5]=x*c+p,n[9]=y*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,y=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=x-p*h,n[8]=g*h+y,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=y*h+g,n[10]=p-x*h}else if(e.order==="XZY"){const p=o*l,y=o*c,g=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=p*h+x,n[5]=o*d,n[9]=y*h-g,n[2]=g*h-y,n[6]=a*d,n[10]=x*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,TE)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ci.crossVectors(i,pn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ci.crossVectors(i,pn)),Ci.normalize(),Pa.crossVectors(pn,Ci),r[0]=Ci.x,r[4]=Pa.x,r[8]=pn.x,r[1]=Ci.y,r[5]=Pa.y,r[9]=pn.y,r[2]=Ci.z,r[6]=Pa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],y=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],_=i[7],S=i[11],R=i[15],T=r[0],w=r[4],P=r[8],E=r[12],b=r[1],j=r[5],J=r[9],te=r[13],I=r[2],V=r[6],X=r[10],Z=r[14],D=r[3],k=r[7],B=r[11],Y=r[15];return s[0]=o*T+a*b+l*I+c*D,s[4]=o*w+a*j+l*V+c*k,s[8]=o*P+a*J+l*X+c*B,s[12]=o*E+a*te+l*Z+c*Y,s[1]=d*T+h*b+p*I+y*D,s[5]=d*w+h*j+p*V+y*k,s[9]=d*P+h*J+p*X+y*B,s[13]=d*E+h*te+p*Z+y*Y,s[2]=g*T+x*b+m*I+u*D,s[6]=g*w+x*j+m*V+u*k,s[10]=g*P+x*J+m*X+u*B,s[14]=g*E+x*te+m*Z+u*Y,s[3]=v*T+_*b+S*I+R*D,s[7]=v*w+_*j+S*V+R*k,s[11]=v*P+_*J+S*X+R*B,s[15]=v*E+_*te+S*Z+R*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],y=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*p+i*c*p+r*a*y-i*l*y)+x*(+n*l*y-n*c*p+s*o*p-r*o*y+r*c*d-s*l*d)+m*(+n*c*h-n*a*y-s*o*h+i*o*y+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*p+r*o*h-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],y=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=h*m*c-x*p*c+x*l*y-a*m*y-h*l*u+a*p*u,_=g*p*c-d*m*c-g*l*y+o*m*y+d*l*u-o*p*u,S=d*x*c-g*h*c+g*a*y-o*x*y-d*a*u+o*h*u,R=g*h*l-d*x*l-g*a*p+o*x*p+d*a*m-o*h*m,T=n*v+i*_+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(x*p*s-h*m*s-x*r*y+i*m*y+h*r*u-i*p*u)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*p*s-h*r*c+i*p*c+a*r*y-i*l*y)*w,e[4]=_*w,e[5]=(d*m*s-g*p*s+g*r*y-n*m*y-d*r*u+n*p*u)*w,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*y+n*l*y)*w,e[8]=S*w,e[9]=(g*h*s-d*x*s-g*i*y+n*x*y+d*i*u-n*h*u)*w,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*y-n*a*y)*w,e[12]=R*w,e[13]=(d*x*r-g*h*r+g*i*p-n*x*p-d*i*m+n*h*m)*w,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*p+n*a*p)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,p=s*c,y=s*d,g=s*h,x=o*d,m=o*h,u=a*h,v=l*c,_=l*d,S=l*h,R=i.x,T=i.y,w=i.z;return r[0]=(1-(x+u))*R,r[1]=(y+S)*R,r[2]=(g-_)*R,r[3]=0,r[4]=(y-S)*T,r[5]=(1-(p+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(p+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,d=1/o,h=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let y,g;if(a===gi)y=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===jl)y=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),p=(n+e)*c,y=(i+r)*d;let g,x;if(a===gi)g=(o+s)*h,x=-2*h;else if(a===jl)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-y,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new F,On=new bt,wE=new F(0,0,0),TE=new F(1,1,1),Ci=new F,Pa=new F,pn=new F,hm=new bt,mm=new Jo;class uc{constructor(e=0,n=0,i=0,r=uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,y),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,y),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,y),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,y));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uc.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const gm=new F,Gr=new Jo,ai=new bt,La=new F,eo=new F,RE=new F,CE=new Jo,xm=new F(1,0,0),vm=new F(0,1,0),ym=new F(0,0,1),PE={type:"added"},LE={type:"removed"};class Wt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,n=new uc,i=new Jo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?La.copy(e):La.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(eo,La,this.up):ai.lookAt(La,eo,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ai),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),y=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),y.length>0&&(i.animations=y),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new F,li=new F,fu=new F,ci=new F,Wr=new F,Xr=new F,_m=new F,pu=new F,hu=new F,mu=new F;let Da=!1;class Hn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),li.subVectors(i,n),fu.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(li),l=kn.dot(fu),c=li.dot(li),d=li.dot(fu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,y=(c*l-a*d)*p,g=(o*d-a*l)*p;return s.set(1-y-g,g,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),li.subVectors(e,n),kn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),Xr.subVectors(s,i),pu.subVectors(e,i);const l=Wr.dot(pu),c=Xr.dot(pu);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const d=Wr.dot(hu),h=Xr.dot(hu);if(d>=0&&h<=d)return n.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Wr,o);mu.subVectors(e,s);const y=Wr.dot(mu),g=Xr.dot(mu);if(g>=0&&y<=g)return n.copy(s);const x=y*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Xr,a);const m=d*g-y*h;if(m<=0&&h-d>=0&&y-g>=0)return _m.subVectors(s,r),a=(h-d)/(h-d+(y-g)),n.copy(r).addScaledVector(_m,a);const u=1/(m+x+p);return o=x*u,a=p*u,n.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=gE(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gu(o,s,e+1/3),this.g=gu(o,s,e),this.b=gu(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=iv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(Ht.copy(this),e),Math.round(rn(Ht.r*255,0,255))*65536+Math.round(rn(Ht.g*255,0,255))*256+Math.round(rn(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Ia);const i=nu(Pi.h,Ia.h,n),r=nu(Pi.s,Ia.s,n),s=nu(Pi.l,Ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new $e;$e.NAMES=iv;let DE=0;class Zo extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=_s,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rv extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,Na=new qe;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(e),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class sv extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ov extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let IE=0;const wn=new bt,xu=new Wt,$r=new F,hn=new Ko,to=new Ko,Lt=new F;class bi extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zx(e)?ov:sv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,to.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,to.max),hn.expandByPoint(Lt)):(hn.expandByPoint(to.min),hn.expandByPoint(to.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Lt.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),Lt.add($r)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<a;b++)c[b]=new F,d[b]=new F;const h=new F,p=new F,y=new F,g=new qe,x=new qe,m=new qe,u=new F,v=new F;function _(b,j,J){h.fromArray(r,b*3),p.fromArray(r,j*3),y.fromArray(r,J*3),g.fromArray(o,b*2),x.fromArray(o,j*2),m.fromArray(o,J*2),p.sub(h),y.sub(h),x.sub(g),m.sub(g);const te=1/(x.x*m.y-m.x*x.y);isFinite(te)&&(u.copy(p).multiplyScalar(m.y).addScaledVector(y,-x.y).multiplyScalar(te),v.copy(y).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(te),c[b].add(u),c[j].add(u),c[J].add(u),d[b].add(v),d[j].add(v),d[J].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,j=S.length;b<j;++b){const J=S[b],te=J.start,I=J.count;for(let V=te,X=te+I;V<X;V+=3)_(i[V+0],i[V+1],i[V+2])}const R=new F,T=new F,w=new F,P=new F;function E(b){w.fromArray(s,b*3),P.copy(w);const j=c[b];R.copy(j),R.sub(w.multiplyScalar(w.dot(j))).normalize(),T.crossVectors(P,j);const te=T.dot(d[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=te}for(let b=0,j=S.length;b<j;++b){const J=S[b],te=J.start,I=J.count;for(let V=te,X=te+I;V<X;V+=3)E(i[V+0]),E(i[V+1]),E(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,y=i.count;p<y;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,d=new F,h=new F;if(e)for(let p=0,y=e.count;p<y;p+=3){const g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,y=n.count;p<y;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d);let y=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?y=l[x]*a.data.stride+a.offset:y=l[x]*d;for(let u=0;u<d;u++)p[g++]=c[y++]}return new ii(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const p=c[d],y=e(p,i);l.push(y)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const y=c[h];d.push(y.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,y=h.length;p<y;p++)d.push(h[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new bt,ar=new bE,Ua=new Vf,Em=new F,qr=new F,Yr=new F,Jr=new F,vu=new F,Fa=new F,Oa=new qe,ka=new qe,Ba=new qe,Mm=new F,bm=new F,wm=new F,za=new F,ja=new F;class ei extends Wt{constructor(e=new bi,n=new rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(vu.fromBufferAttribute(h,e),o?Fa.addScaledVector(vu,d):Fa.addScaledVector(vu.sub(n),d))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ua.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ua,Em)===null||ar.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,y=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],u=o[m.materialIndex],v=Math.max(m.start,y.start),_=Math.min(a.count,Math.min(m.start+m.count,y.start+y.count));for(let S=v,R=_;S<R;S+=3){const T=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=Ha(this,u,e,i,c,d,h,T,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,y.start),x=Math.min(a.count,y.start+y.count);for(let m=g,u=x;m<u;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Ha(this,o,e,i,c,d,h,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],u=o[m.materialIndex],v=Math.max(m.start,y.start),_=Math.min(l.count,Math.min(m.start+m.count,y.start+y.count));for(let S=v,R=_;S<R;S+=3){const T=S,w=S+1,P=S+2;r=Ha(this,u,e,i,c,d,h,T,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,y.start),x=Math.min(l.count,y.start+y.count);for(let m=g,u=x;m<u;m+=3){const v=m,_=m+1,S=m+2;r=Ha(this,o,e,i,c,d,h,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function NE(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function Ha(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qr),t.getVertexPosition(l,Yr),t.getVertexPosition(c,Jr);const d=NE(t,e,n,i,qr,Yr,Jr,za);if(d){r&&(Oa.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),d.uv=Hn.getInterpolation(za,qr,Yr,Jr,Oa,ka,Ba,new qe)),s&&(Oa.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),d.uv1=Hn.getInterpolation(za,qr,Yr,Jr,Oa,ka,Ba,new qe),d.uv2=d.uv1),o&&(Mm.fromBufferAttribute(o,a),bm.fromBufferAttribute(o,l),wm.fromBufferAttribute(o,c),d.normal=Hn.getInterpolation(za,qr,Yr,Jr,Mm,bm,wm,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Hn.getNormal(qr,Yr,Jr,h.normal),d.face=h}return d}class Qo extends bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,y=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(d,3)),this.setAttribute("uv",new _n(h,2));function g(x,m,u,v,_,S,R,T,w,P,E){const b=S/w,j=R/P,J=S/2,te=R/2,I=T/2,V=w+1,X=P+1;let Z=0,D=0;const k=new F;for(let B=0;B<X;B++){const Y=B*j-te;for(let Q=0;Q<V;Q++){const $=Q*b-J;k[x]=$*v,k[m]=Y*_,k[u]=I,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[u]=T>0?1:-1,d.push(k.x,k.y,k.z),h.push(Q/w),h.push(1-B/P),Z+=1}}for(let B=0;B<P;B++)for(let Y=0;Y<w;Y++){const Q=p+Y+V*B,$=p+Y+V*(B+1),K=p+(Y+1)+V*(B+1),ce=p+(Y+1)+V*B;l.push(Q,$,ce),l.push($,K,ce),D+=6}a.addGroup(y,D,E),y+=D,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function UE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function av(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const FE={clone:Ds,merge:Yt};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=UE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lv extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends lv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Kr=-90,Zr=1;class BE extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Kr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,y),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cv extends yn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===br?Ut:Pn),this.texture=new cv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qo(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:qi});s.uniforms.tEquirect.value=n;const o=new ei(r,s),a=n.minFilter;return n.minFilter===Bo&&(n.minFilter=Cn),new BE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yu=new F,jE=new F,HE=new Ge;class dr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yu.subVectors(i,n).cross(jE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HE.getNormalMatrix(e),r=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Vf,Va=new F;class Gf{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],y=r[8],g=r[9],x=r[10],m=r[11],u=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,m-y,S-u).normalize(),i[1].setComponents(l+s,p+c,m+y,S+u).normalize(),i[2].setComponents(l+o,p+d,m+g,S+v).normalize(),i[3].setComponents(l-o,p-d,m-g,S-v).normalize(),i[4].setComponents(l-a,p-h,m-x,S-_).normalize(),n===gi)i[5].setComponents(l+a,p+h,m+x,S+_).normalize();else if(n===jl)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function VE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,p=c.usage,y=h.byteLength,g=t.createBuffer();t.bindBuffer(d,g),t.bufferData(d,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:y}}function s(c,d,h){const p=d.array,y=d._updateRange,g=d.updateRanges;if(t.bindBuffer(h,c),y.count===-1&&g.length===0&&t.bufferSubData(h,0,p),g.length!==0){for(let x=0,m=g.length;x<m;x++){const u=g[x];n?t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}y.count!==-1&&(n?t.bufferSubData(h,y.offset*p.BYTES_PER_ELEMENT,p,y.offset,y.count):t.bufferSubData(h,y.offset*p.BYTES_PER_ELEMENT,p.subarray(y.offset,y.offset+y.count)),y.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Wf extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,p=n/l,y=[],g=[],x=[],m=[];for(let u=0;u<d;u++){const v=u*p-o;for(let _=0;_<c;_++){const S=_*h-s;g.push(S,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const _=v+c*u,S=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;y.push(_,S,T),y.push(S,R,T)}this.setIndex(y),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.width,e.height,e.widthSegments,e.heightSegments)}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
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
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
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
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
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
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mM=`vec3 transformedNormal = objectNormal;
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
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`
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
}`,EM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
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
}`,DM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
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
#endif`,OM=`#ifdef USE_ENVMAP
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
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#endif`,VM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ob=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
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
}`,Jb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Zb=`#define DISTANCE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`uniform float scale;
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
}`,n2=`uniform vec3 diffuse;
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
}`,i2=`#include <common>
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
}`,r2=`uniform vec3 diffuse;
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
}`,s2=`#define LAMBERT
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
}`,o2=`#define LAMBERT
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
}`,a2=`#define MATCAP
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
}`,l2=`#define MATCAP
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
}`,c2=`#define NORMAL
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
}`,u2=`#define NORMAL
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
}`,d2=`#define PHONG
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
}`,f2=`#define PHONG
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
}`,p2=`#define STANDARD
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
}`,h2=`#define STANDARD
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
}`,m2=`#define TOON
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
}`,g2=`#define TOON
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
}`,x2=`uniform float size;
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
}`,v2=`uniform vec3 diffuse;
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
}`,y2=`#include <common>
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
}`,_2=`uniform vec3 color;
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
}`,S2=`uniform float rotation;
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
}`,E2=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:GE,alphahash_pars_fragment:WE,alphamap_fragment:XE,alphamap_pars_fragment:$E,alphatest_fragment:qE,alphatest_pars_fragment:YE,aomap_fragment:JE,aomap_pars_fragment:KE,batching_pars_vertex:ZE,batching_vertex:QE,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:dM,color_vertex:fM,common:pM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:xM,emissivemap_fragment:vM,emissivemap_pars_fragment:yM,colorspace_fragment:_M,colorspace_pars_fragment:SM,envmap_fragment:EM,envmap_common_pars_fragment:MM,envmap_pars_fragment:bM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:OM,envmap_vertex:TM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:PM,gradientmap_pars_fragment:LM,lightmap_fragment:DM,lightmap_pars_fragment:IM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:UM,lights_pars_begin:FM,lights_toon_fragment:kM,lights_toon_pars_fragment:BM,lights_phong_fragment:zM,lights_phong_pars_fragment:jM,lights_physical_fragment:HM,lights_physical_pars_fragment:VM,lights_fragment_begin:GM,lights_fragment_maps:WM,lights_fragment_end:XM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:JM,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:QM,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphcolor_vertex:ib,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ob,normal_fragment_begin:ab,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:db,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:xb,packing:vb,premultiplied_alpha_fragment:yb,project_vertex:_b,dithering_fragment:Sb,dithering_pars_fragment:Eb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:Pb,skinning_vertex:Lb,skinnormal_vertex:Db,specularmap_fragment:Ib,specularmap_pars_fragment:Nb,tonemapping_fragment:Ub,tonemapping_pars_fragment:Fb,transmission_fragment:Ob,transmission_pars_fragment:kb,uv_pars_fragment:Bb,uv_pars_vertex:zb,uv_vertex:jb,worldpos_vertex:Hb,background_vert:Vb,background_frag:Gb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:$b,cube_frag:qb,depth_vert:Yb,depth_frag:Jb,distanceRGBA_vert:Kb,distanceRGBA_frag:Zb,equirect_vert:Qb,equirect_frag:e2,linedashed_vert:t2,linedashed_frag:n2,meshbasic_vert:i2,meshbasic_frag:r2,meshlambert_vert:s2,meshlambert_frag:o2,meshmatcap_vert:a2,meshmatcap_frag:l2,meshnormal_vert:c2,meshnormal_frag:u2,meshphong_vert:d2,meshphong_frag:f2,meshphysical_vert:p2,meshphysical_frag:h2,meshtoon_vert:m2,meshtoon_frag:g2,points_vert:x2,points_frag:v2,shadow_vert:y2,shadow_frag:_2,sprite_vert:S2,sprite_frag:E2},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Zn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ga={r:0,b:0,g:0};function M2(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,d,h=null,p=0,y=null;function g(m,u){let v=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lc)?(d===void 0&&(d=new ei(new Qo(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Ds(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=et.getTransfer(_.colorSpace)!==at,(h!==_||p!==_.version||y!==t.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,y=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ei(new Wf(2,2),new Dr({name:"BackgroundMaterial",uniforms:Ds(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==at,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||y!==t.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,y=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Ga,av(t)),i.buffers.color.setClear(Ga.r,Ga.g,Ga.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function b2(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(I,V,X,Z,D){let k=!1;if(o){const B=x(Z,X,V);c!==B&&(c=B,y(c.object)),k=u(I,Z,X,D),k&&v(I,Z,X,D)}else{const B=V.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==B)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=B,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,P(I,V,X,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function y(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,V,X){const Z=X.wireframe===!0;let D=a[I.id];D===void 0&&(D={},a[I.id]=D);let k=D[V.id];k===void 0&&(k={},D[V.id]=k);let B=k[Z];return B===void 0&&(B=m(p()),k[Z]=B),B}function m(I){const V=[],X=[],Z=[];for(let D=0;D<r;D++)V[D]=0,X[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:Z,object:I,attributes:{},index:null}}function u(I,V,X,Z){const D=c.attributes,k=V.attributes;let B=0;const Y=X.getAttributes();for(const Q in Y)if(Y[Q].location>=0){const K=D[Q];let ce=k[Q];if(ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;B++}return c.attributesNum!==B||c.index!==Z}function v(I,V,X,Z){const D={},k=V.attributes;let B=0;const Y=X.getAttributes();for(const Q in Y)if(Y[Q].location>=0){let K=k[Q];K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),D[Q]=ce,B++}c.attributes=D,c.attributesNum=B,c.index=Z}function _(){const I=c.newAttributes;for(let V=0,X=I.length;V<X;V++)I[V]=0}function S(I){R(I,0)}function R(I,V){const X=c.newAttributes,Z=c.enabledAttributes,D=c.attributeDivisors;X[I]=1,Z[I]===0&&(t.enableVertexAttribArray(I),Z[I]=1),D[I]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),D[I]=V)}function T(){const I=c.newAttributes,V=c.enabledAttributes;for(let X=0,Z=V.length;X<Z;X++)V[X]!==I[X]&&(t.disableVertexAttribArray(X),V[X]=0)}function w(I,V,X,Z,D,k,B){B===!0?t.vertexAttribIPointer(I,V,X,D,k):t.vertexAttribPointer(I,V,X,Z,D,k)}function P(I,V,X,Z){if(i.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=Z.attributes,k=X.getAttributes(),B=V.defaultAttributeValues;for(const Y in k){const Q=k[Y];if(Q.location>=0){let $=D[Y];if($===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const K=$.normalized,ce=$.itemSize,me=n.get($);if(me===void 0)continue;const ge=me.buffer,Ie=me.type,Ne=me.bytesPerElement,U=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||$.gpuType===Hx);if($.isInterleavedBufferAttribute){const Me=$.data,N=Me.stride,tt=$.offset;if(Me.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)R(Q.location+_e,Me.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let _e=0;_e<Q.locationSize;_e++)S(Q.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let _e=0;_e<Q.locationSize;_e++)w(Q.location+_e,ce/Q.locationSize,Ie,K,N*Ne,(tt+ce/Q.locationSize*_e)*Ne,U)}else{if($.isInstancedBufferAttribute){for(let Me=0;Me<Q.locationSize;Me++)R(Q.location+Me,$.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<Q.locationSize;Me++)S(Q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Me=0;Me<Q.locationSize;Me++)w(Q.location+Me,ce/Q.locationSize,Ie,K,ce*Ne,ce/Q.locationSize*Me*Ne,U)}}else if(B!==void 0){const K=B[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}T()}function E(){J();for(const I in a){const V=a[I];for(const X in V){const Z=V[X];for(const D in Z)g(Z[D].object),delete Z[D];delete V[X]}delete a[I]}}function b(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const X in V){const Z=V[X];for(const D in Z)g(Z[D].object),delete Z[D];delete V[X]}delete a[I.id]}function j(I){for(const V in a){const X=a[V];if(X[I.id]===void 0)continue;const Z=X[I.id];for(const D in Z)g(Z[D].object),delete Z[D];delete X[I.id]}}function J(){te(),d=!0,c!==l&&(c=l,y(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function w2(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,p){if(p===0)return;let y,g;if(r)y=t,g="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,d,h,p),n.update(h,s,p)}function c(d,h,p){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<p;g++)this.render(d[g],h[g]);else{y.multiDrawArraysWEBGL(s,d,0,h,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function T2(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=o||e.has("OES_texture_float"),R=_&&S,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function A2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new dr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const y=h.length!==0||p||i!==0||r;return r=p,i=h.length,y},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,y){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,_=v*4;let S=u.clippingState||null;l.value=S,S=d(g,p,_,y);for(let R=0;R!==_;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,y,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=y+x*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,S=y;_!==x;++_,S+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function R2(t){let e=new WeakMap;function n(o,a){return a===Cd?o.mapping=Cs:a===Pd&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cd||a===Pd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zE(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dv extends lv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Tm=[.125,.215,.35,.446,.526,.582],hr=20,_u=new dv,Am=new $e;let Su=null,Eu=0,Mu=0;const fr=(1+Math.sqrt(5))/2,Qr=1/fr,Rm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fr,Qr),new F(0,fr,-Qr),new F(Qr,0,fr),new F(-Qr,0,fr),new F(fr,Qr,0),new F(-fr,Qr,0)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Eu,Mu),e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:zo,format:Gn,colorSpace:Ei,depthBuffer:!1},r=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C2(s)),this._blurMaterial=P2(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,_u)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Am),d.toneMapping=Yi,d.autoClear=!1;const y=new rv({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new ei(new Qo,y);let x=!1;const m=e.background;m?m.isColor&&(y.color.copy(m),e.background=null,x=!0):(y.color.copy(Am),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Wa(r,v*_,u>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rm[(r-1)%Rm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ei(this._lodPlanes[r],c),p=c.uniforms,y=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*y):2*Math.PI/(2*hr-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const u=[];let v=0;for(let w=0;w<hr;++w){const P=w/x,E=Math.exp(-P*P/2);u.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const S=this._sizeLods[r],R=3*S*(r>_-fs?r-_+fs:0),T=4*(this._cubeSize-S);Wa(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(h,_u)}}function C2(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=Tm[o-t+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],y=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*y),_=new Float32Array(m*g*y),S=new Float32Array(u*g*y);for(let T=0;T<y;T++){const w=T%3*2/3-1,P=T>2?0:-1,E=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(E,x*g*T),_.set(p,m*g*T);const b=[T,T,T,T,T,T];S.set(b,u*g*T)}const R=new bi;R.setAttribute("position",new ii(v,x)),R.setAttribute("uv",new ii(_,m)),R.setAttribute("faceIndex",new ii(S,u)),e.push(R),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pm(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function P2(t,e,n){const i=new Float32Array(hr),r=new F(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Lm(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Dm(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function L2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cd||l===Pd,d=l===Cs||l===Ps;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Cm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Cm(t));const p=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function D2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function I2(t,e,n,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const y=s.get(p);y&&(e.remove(y),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],t.ARRAY_BUFFER);const y=h.morphAttributes;for(const g in y){const x=y[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const p=[],y=h.index,g=h.attributes.position;let x=0;if(y!==null){const v=y.array;x=y.version;for(let _=0,S=v.length;_<S;_+=3){const R=v[_+0],T=v[_+1],w=v[_+2];p.push(R,T,T,w,w,R)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const R=_+0,T=_+1,w=_+2;p.push(R,T,T,w,w,R)}}else return;const m=new(Zx(p)?ov:sv)(p,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const p=s.get(h);if(p){const y=h.index;y!==null&&p.version<y.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function N2(t,e,n,i){const r=i.isWebGL2;let s;function o(y){s=y}let a,l;function c(y){a=y.type,l=y.bytesPerElement}function d(y,g){t.drawElements(s,g,a,y*l),n.update(g,s,1)}function h(y,g,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,a,y*l,x),n.update(g,s,x)}function p(y,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(y[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,a,y,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function U2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function F2(t,e){return t[0]-e[0]}function O2(t,e){return Math.abs(e[1])-Math.abs(t[1])}function k2(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let V=function(){te.dispose(),s.delete(d),d.removeEventListener("dispose",V)};var y=V;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),R===!0&&(E=3);let b=d.attributes.position.count*E,j=1;b>e.maxTextureSize&&(j=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const J=new Float32Array(b*j*4*x),te=new tv(J,b,j,x);te.type=Bi,te.needsUpdate=!0;const I=E*4;for(let X=0;X<x;X++){const Z=T[X],D=w[X],k=P[X],B=b*j*4*X;for(let Y=0;Y<Z.count;Y++){const Q=Y*I;_===!0&&(o.fromBufferAttribute(Z,Y),J[B+Q+0]=o.x,J[B+Q+1]=o.y,J[B+Q+2]=o.z,J[B+Q+3]=0),S===!0&&(o.fromBufferAttribute(D,Y),J[B+Q+4]=o.x,J[B+Q+5]=o.y,J[B+Q+6]=o.z,J[B+Q+7]=0),R===!0&&(o.fromBufferAttribute(k,Y),J[B+Q+8]=o.x,J[B+Q+9]=o.y,J[B+Q+10]=o.z,J[B+Q+11]=k.itemSize===4?o.w:1)}}m={count:x,texture:te,size:new qe(b,j)},s.set(d,m),d.addEventListener("dispose",V)}let u=0;for(let _=0;_<p.length;_++)u+=p[_];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",p),h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let x=i[d.id];if(x===void 0||x.length!==g){x=[];for(let S=0;S<g;S++)x[S]=[S,0];i[d.id]=x}for(let S=0;S<g;S++){const R=x[S];R[0]=S,R[1]=p[S]}x.sort(O2);for(let S=0;S<8;S++)S<g&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(F2);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const R=a[S],T=R[0],w=R[1];T!==Number.MAX_SAFE_INTEGER&&w?(m&&d.getAttribute("morphTarget"+S)!==m[T]&&d.setAttribute("morphTarget"+S,m[T]),u&&d.getAttribute("morphNormal"+S)!==u[T]&&d.setAttribute("morphNormal"+S,u[T]),r[S]=w,v+=w):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const _=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function B2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class fv extends yn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Mr,d!==Mr&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Mr&&(i=ki),i===void 0&&d===Ls&&(i=Er),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const pv=new yn,hv=new fv(1,1);hv.compareFunction=Kx;const mv=new tv,gv=new EE,xv=new cv,Im=[],Nm=[],Um=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Im[r];if(s===void 0&&(s=new Float32Array(r),Im[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function G2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Om.set(i),t.uniformMatrix2fv(this.addr,!1,Om),Rt(n,i)}}function W2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Fm.set(i),t.uniformMatrix3fv(this.addr,!1,Fm),Rt(n,i)}}function X2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;Um.set(i),t.uniformMatrix4fv(this.addr,!1,Um),Rt(n,i)}}function $2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?hv:pv;n.setTexture2D(e||s,r)}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gv,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xv,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mv,r)}function sw(t){switch(t){case 5126:return z2;case 35664:return j2;case 35665:return H2;case 35666:return V2;case 35674:return G2;case 35675:return W2;case 35676:return X2;case 5124:case 35670:return $2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return J2;case 5125:return K2;case 36294:return Z2;case 36295:return Q2;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(t,e){t.uniform1fv(this.addr,e)}function aw(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function lw(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function cw(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function uw(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fw(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function hw(t,e){t.uniform2iv(this.addr,e)}function mw(t,e){t.uniform3iv(this.addr,e)}function gw(t,e){t.uniform4iv(this.addr,e)}function xw(t,e){t.uniform1uiv(this.addr,e)}function vw(t,e){t.uniform2uiv(this.addr,e)}function yw(t,e){t.uniform3uiv(this.addr,e)}function _w(t,e){t.uniform4uiv(this.addr,e)}function Sw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||pv,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||gv,s[o])}function Mw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xv,s[o])}function bw(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||mv,s[o])}function ww(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return pw;case 35667:case 35671:return hw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return xw;case 36294:return vw;case 36295:return yw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return bw}}class Tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ww(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function Cw(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),o=bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){km(n,c===void 0?new Tw(a,t,e):new Aw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Rw(a),km(n,h)),n=h}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Cw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pw=37297;let Lw=0;function Dw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Iw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ei:case cc:return[i,"LinearTransferOETF"];case Ut:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Dw(t.getShaderSource(e),o)}else return r}function Nw(t,e){const n=Iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Uw(t,e){let n;switch(e){case W1:n="Linear";break;case X1:n="Reinhard";break;case $1:n="OptimizedCineon";break;case q1:n="ACESFilmic";break;case J1:n="AgX";break;case Y1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Fw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function Ow(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ps(t){return t!==""}function jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(zw,Hw)}const jw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hw(t,e){let n=Be[e];if(n===void 0){const i=jw.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const Vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(t){return t.replace(Vw,Gw)}function Gw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ww(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===y1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Xw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $w(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function qw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case V1:e="ENVMAP_BLENDING_MIX";break;case G1:e="ENVMAP_BLENDING_ADD";break}return e}function Yw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Jw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ww(n),c=Xw(n),d=$w(n),h=qw(n),p=Yw(n),y=n.isWebGL2?"":Fw(n),g=Ow(n),x=kw(s),m=r.createProgram();let u,v,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ps).join(`
`),u.length>0&&(u+=`
`),v=[y,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ps).join(`
`),v.length>0&&(v+=`
`)):(u=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),v=[y,Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Yi?Uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Nw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ps).join(`
`)),o=Fd(o),o=jm(o,n),o=Hm(o,n),a=Fd(a),a=jm(a,n),a=Hm(a,n),o=Vm(o),a=Vm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=_+u+o,R=_+v+a,T=Bm(r,r.VERTEX_SHADER,S),w=Bm(r,r.FRAGMENT_SHADER,R);r.attachShader(m,T),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(J){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(T).trim(),V=r.getShaderInfoLog(w).trim();let X=!0,Z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,T,w);else{const D=zm(r,T,"vertex"),k=zm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+D+`
`+k)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||V==="")&&(Z=!1);Z&&(J.diagnostics={runnable:X,programLog:te,vertexShader:{log:I,prefix:u},fragmentShader:{log:V,prefix:v}})}r.deleteShader(T),r.deleteShader(w),E=new cl(r,m),b=Bw(r,m)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(m,Pw)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}let Kw=0;class Zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Qw(e),n.set(e,i)),i}}class Qw{constructor(e){this.id=Kw++,this.code=e,this.usedTimes=0}}function eT(t,e,n,i,r,s,o){const a=new nv,l=new Zw,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let y=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,b,j,J,te){const I=J.fog,V=te.geometry,X=E.isMeshStandardMaterial?J.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),D=Z&&Z.mapping===lc?Z.image.height:null,k=g[E.type];E.precision!==null&&(y=r.getMaxPrecision(E.precision),y!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",y,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=B!==void 0?B.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let $,K,ce,me;if(k){const $t=Zn[k];$=$t.vertexShader,K=$t.fragmentShader}else $=E.vertexShader,K=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const ge=t.getRenderTarget(),Ie=te.isInstancedMesh===!0,Ne=te.isBatchedMesh===!0,U=!!E.map,Me=!!E.matcap,N=!!Z,tt=!!E.aoMap,_e=!!E.lightMap,Te=!!E.bumpMap,xe=!!E.normalMap,Je=!!E.displacementMap,Pe=!!E.emissiveMap,C=!!E.metalnessMap,M=!!E.roughnessMap,G=E.anisotropy>0,se=E.clearcoat>0,ne=E.iridescence>0,oe=E.sheen>0,Se=E.transmission>0,fe=G&&!!E.anisotropyMap,ve=se&&!!E.clearcoatMap,Ce=se&&!!E.clearcoatNormalMap,ze=se&&!!E.clearcoatRoughnessMap,ee=ne&&!!E.iridescenceMap,Qe=ne&&!!E.iridescenceThicknessMap,We=oe&&!!E.sheenColorMap,Ue=oe&&!!E.sheenRoughnessMap,be=!!E.specularMap,ye=!!E.specularColorMap,ke=!!E.specularIntensityMap,Ke=Se&&!!E.transmissionMap,gt=Se&&!!E.thicknessMap,He=!!E.gradientMap,ae=!!E.alphaMap,L=E.alphaTest>0,ue=!!E.alphaHash,de=!!E.extensions,Le=!!V.attributes.uv1,we=!!V.attributes.uv2,nt=!!V.attributes.uv3;let it=Yi;return E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:K,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:y,batching:Ne,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ei,map:U,matcap:Me,envMap:N,envMapMode:N&&Z.mapping,envMapCubeUVHeight:D,aoMap:tt,lightMap:_e,bumpMap:Te,normalMap:xe,displacementMap:p&&Je,emissiveMap:Pe,normalMapObjectSpace:xe&&E.normalMapType===lE,normalMapTangentSpace:xe&&E.normalMapType===Jx,metalnessMap:C,roughnessMap:M,anisotropy:G,anisotropyMap:fe,clearcoat:se,clearcoatMap:ve,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:ne,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:oe,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:ye,specularIntensityMap:ke,transmission:Se,transmissionMap:Ke,thicknessMap:gt,gradientMap:He,opaque:E.transparent===!1&&E.blending===_s,alphaMap:ae,alphaTest:L,alphaHash:ue,combine:E.combine,mapUv:U&&x(E.map.channel),aoMapUv:tt&&x(E.aoMap.channel),lightMapUv:_e&&x(E.lightMap.channel),bumpMapUv:Te&&x(E.bumpMap.channel),normalMapUv:xe&&x(E.normalMap.channel),displacementMapUv:Je&&x(E.displacementMap.channel),emissiveMapUv:Pe&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:M&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:be&&x(E.specularMap.channel),specularColorMapUv:ye&&x(E.specularColorMap.channel),specularIntensityMapUv:ke&&x(E.specularIntensityMap.channel),transmissionMapUv:Ke&&x(E.transmissionMap.channel),thicknessMapUv:gt&&x(E.thicknessMap.channel),alphaMapUv:ae&&x(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:we,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!V.attributes.uv&&(U||ae),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:U&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pi,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:de&&E.extensions.derivatives===!0,extensionFragDepth:de&&E.extensions.fragDepth===!0,extensionDrawBuffers:de&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)b.push(j),b.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(v(b,E),_(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const b=g[E.type];let j;if(b){const J=Zn[b];j=FE.clone(J.uniforms)}else j=E.uniforms;return j}function R(E,b){let j;for(let J=0,te=c.length;J<te;J++){const I=c[J];if(I.cacheKey===b){j=I,++j.usedTimes;break}}return j===void 0&&(j=new Jw(t,b,E,s),c.push(j)),j}function T(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function tT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,y,g,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:y,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=y,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,p,y,g,x,m){const u=o(h,p,y,g,x,m);y.transmission>0?i.push(u):y.transparent===!0?r.push(u):n.push(u)}function l(h,p,y,g,x,m){const u=o(h,p,y,g,x,m);y.transmission>0?i.unshift(u):y.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,p){n.length>1&&n.sort(h||nT),i.length>1&&i.sort(p||Wm),r.length>1&&r.sort(p||Wm)}function d(){for(let h=e,p=t.length;h<p;h++){const y=t[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function iT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xm,t.set(i,[o])):r>=s.length?(o=new Xm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new $e};break;case"SpotLight":n={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oT=0;function aT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lT(t,e){const n=new rT,i=sT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new F);const s=new F,o=new bt,a=new bt;function l(d,h){let p=0,y=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let x=0,m=0,u=0,v=0,_=0,S=0,R=0,T=0,w=0,P=0,E=0;d.sort(aT);const b=h===!0?Math.PI:1;for(let J=0,te=d.length;J<te;J++){const I=d[J],V=I.color,X=I.intensity,Z=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=V.r*X*b,y+=V.g*X*b,g+=V.b*X*b;else if(I.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(I.sh.coefficients[k],X);E++}else if(I.isDirectionalLight){const k=n.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const B=I.shadow,Y=i.get(I);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=I.shadow.matrix,S++}r.directional[x]=k,x++}else if(I.isSpotLight){const k=n.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(V).multiplyScalar(X*b),k.distance=Z,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,r.spot[u]=k;const B=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,B.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[u]=B.matrix,I.castShadow){const Y=i.get(I);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=D,T++}u++}else if(I.isRectAreaLight){const k=n.get(I);k.color.copy(V).multiplyScalar(X),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=k,v++}else if(I.isPointLight){const k=n.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*b),k.distance=I.distance,k.decay=I.decay,I.castShadow){const B=I.shadow,Y=i.get(I);Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=I.shadow.matrix,R++}r.point[m]=k,m++}else if(I.isHemisphereLight){const k=n.get(I);k.skyColor.copy(I.color).multiplyScalar(X*b),k.groundColor.copy(I.groundColor).multiplyScalar(X*b),r.hemi[_]=k,_++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=y,r.ambient[2]=g;const j=r.hash;(j.directionalLength!==x||j.pointLength!==m||j.spotLength!==u||j.rectAreaLength!==v||j.hemiLength!==_||j.numDirectionalShadows!==S||j.numPointShadows!==R||j.numSpotShadows!==T||j.numSpotMaps!==w||j.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,j.directionalLength=x,j.pointLength=m,j.spotLength=u,j.rectAreaLength=v,j.hemiLength=_,j.numDirectionalShadows=S,j.numPointShadows=R,j.numSpotShadows=T,j.numSpotMaps=w,j.numLightProbes=E,r.version=oT++)}function c(d,h){let p=0,y=0,g=0,x=0,m=0;const u=h.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const S=d[v];if(S.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),p++}else if(S.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),g++}else if(S.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),y++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function $m(t,e){const n=new lT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new $m(t,e),n.set(s,[l])):o>=a.length?(l=new $m(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class uT extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`;function hT(t,e,n){let i=new Gf;const r=new qe,s=new qe,o=new ut,a=new uT({depthPacking:aE}),l=new dT,c={},d=n.maxTextureSize,h={[Qi]:cn,[cn]:Qi,[pi]:pi},p=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:fT,fragmentShader:pT}),y=p.clone();y.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ei(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zx;let u=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),j=t.getActiveMipmapLevel(),J=t.state;J.setBlending(qi),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const te=u!==ui&&this.type===ui,I=u===ui&&this.type!==ui;for(let V=0,X=T.length;V<X;V++){const Z=T[V],D=Z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||te===!0||I===!0){const Y=this.type!==ui?{minFilter:Kt,magFilter:Kt}:{};D.map!==null&&D.map.dispose(),D.map=new Lr(r.x,r.y,Y),D.map.texture.name=Z.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const B=D.getViewportCount();for(let Y=0;Y<B;Y++){const Q=D.getViewport(Y);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),J.viewport(o),D.updateMatrices(Z,Y),i=D.getFrustum(),S(w,P,D.camera,Z,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&v(D,P),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,b,j)};function v(T,w){const P=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,y.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,y.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lr(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,P,p,x,null),y.uniforms.shadow_pass.value=T.mapPass.texture,y.uniforms.resolution.value=T.mapSize,y.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,P,y,x,null)}function _(T,w,P,E){let b=null;const j=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(j!==void 0)b=j;else if(b=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const J=b.uuid,te=w.uuid;let I=c[J];I===void 0&&(I={},c[J]=I);let V=I[te];V===void 0&&(V=b.clone(),I[te]=V,w.addEventListener("dispose",R)),b=V}if(b.visible=w.visible,b.wireframe=w.wireframe,E===ui?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const J=t.properties.get(b);J.light=P}return b}function S(T,w,P,E,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const te=e.update(T),I=T.material;if(Array.isArray(I)){const V=te.groups;for(let X=0,Z=V.length;X<Z;X++){const D=V[X],k=I[D.materialIndex];if(k&&k.visible){const B=_(T,k,E,b);T.onBeforeShadow(t,T,w,P,te,B,D),t.renderBufferDirect(P,null,te,B,T,D),T.onAfterShadow(t,T,w,P,te,B,D)}}}else if(I.visible){const V=_(T,I,E,b);T.onBeforeShadow(t,T,w,P,te,V,null),t.renderBufferDirect(P,null,te,V,T,null),T.onAfterShadow(t,T,w,P,te,V,null)}}const J=T.children;for(let te=0,I=J.length;te<I;te++)S(J[te],w,P,E,b)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function mT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ue=new ut;let de=null;const Le=new ut(0,0,0,0);return{setMask:function(we){de!==we&&!L&&(t.colorMask(we,we,we,we),de=we)},setLocked:function(we){L=we},setClear:function(we,nt,it,Ct,$t){$t===!0&&(we*=Ct,nt*=Ct,it*=Ct),ue.set(we,nt,it,Ct),Le.equals(ue)===!1&&(t.clearColor(we,nt,it,Ct),Le.copy(ue))},reset:function(){L=!1,de=null,Le.set(-1,0,0,0)}}}function s(){let L=!1,ue=null,de=null,Le=null;return{setTest:function(we){we?Ne(t.DEPTH_TEST):U(t.DEPTH_TEST)},setMask:function(we){ue!==we&&!L&&(t.depthMask(we),ue=we)},setFunc:function(we){if(de!==we){switch(we){case F1:t.depthFunc(t.NEVER);break;case O1:t.depthFunc(t.ALWAYS);break;case k1:t.depthFunc(t.LESS);break;case Ol:t.depthFunc(t.LEQUAL);break;case B1:t.depthFunc(t.EQUAL);break;case z1:t.depthFunc(t.GEQUAL);break;case j1:t.depthFunc(t.GREATER);break;case H1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=we}},setLocked:function(we){L=we},setClear:function(we){Le!==we&&(t.clearDepth(we),Le=we)},reset:function(){L=!1,ue=null,de=null,Le=null}}}function o(){let L=!1,ue=null,de=null,Le=null,we=null,nt=null,it=null,Ct=null,$t=null;return{setTest:function(rt){L||(rt?Ne(t.STENCIL_TEST):U(t.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!L&&(t.stencilMask(rt),ue=rt)},setFunc:function(rt,qt,Yn){(de!==rt||Le!==qt||we!==Yn)&&(t.stencilFunc(rt,qt,Yn),de=rt,Le=qt,we=Yn)},setOp:function(rt,qt,Yn){(nt!==rt||it!==qt||Ct!==Yn)&&(t.stencilOp(rt,qt,Yn),nt=rt,it=qt,Ct=Yn)},setLocked:function(rt){L=rt},setClear:function(rt){$t!==rt&&(t.clearStencil(rt),$t=rt)},reset:function(){L=!1,ue=null,de=null,Le=null,we=null,nt=null,it=null,Ct=null,$t=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let p={},y={},g=new WeakMap,x=[],m=null,u=!1,v=null,_=null,S=null,R=null,T=null,w=null,P=null,E=new $e(0,0,0),b=0,j=!1,J=null,te=null,I=null,V=null,X=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=k>=2);let Y=null,Q={};const $=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new ut().fromArray($),me=new ut().fromArray(K);function ge(L,ue,de,Le){const we=new Uint8Array(4),nt=t.createTexture();t.bindTexture(L,nt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<de;it++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ue+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return nt}const Ie={};Ie[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(Ol),Pe(!1),C(Rh),Ne(t.CULL_FACE),xe(qi);function Ne(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function U(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function Me(L,ue){return y[L]!==ue?(t.bindFramebuffer(L,ue),y[L]=ue,i&&(L===t.DRAW_FRAMEBUFFER&&(y[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(y[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function N(L,ue){let de=x,Le=!1;if(L)if(de=g.get(ue),de===void 0&&(de=[],g.set(ue,de)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(de.length!==we.length||de[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=we.length;nt<it;nt++)de[nt]=t.COLOR_ATTACHMENT0+nt;de.length=we.length,Le=!0}}else de[0]!==t.COLOR_ATTACHMENT0&&(de[0]=t.COLOR_ATTACHMENT0,Le=!0);else de[0]!==t.BACK&&(de[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function tt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const _e={[pr]:t.FUNC_ADD,[S1]:t.FUNC_SUBTRACT,[E1]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[Dh]=t.MIN,_e[Ih]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Dh]=L.MIN_EXT,_e[Ih]=L.MAX_EXT)}const Te={[M1]:t.ZERO,[b1]:t.ONE,[w1]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[L1]:t.SRC_ALPHA_SATURATE,[C1]:t.DST_COLOR,[A1]:t.DST_ALPHA,[T1]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[P1]:t.ONE_MINUS_DST_COLOR,[R1]:t.ONE_MINUS_DST_ALPHA,[D1]:t.CONSTANT_COLOR,[I1]:t.ONE_MINUS_CONSTANT_COLOR,[N1]:t.CONSTANT_ALPHA,[U1]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(L,ue,de,Le,we,nt,it,Ct,$t,rt){if(L===qi){u===!0&&(U(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),L!==_1){if(L!==v||rt!==j){if((_!==pr||T!==pr)&&(t.blendEquation(t.FUNC_ADD),_=pr,T=pr),rt)switch(L){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.ONE,t.ONE);break;case Ph:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ph:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,w=null,P=null,E.set(0,0,0),b=0,v=L,j=rt}return}we=we||ue,nt=nt||de,it=it||Le,(ue!==_||we!==T)&&(t.blendEquationSeparate(_e[ue],_e[we]),_=ue,T=we),(de!==S||Le!==R||nt!==w||it!==P)&&(t.blendFuncSeparate(Te[de],Te[Le],Te[nt],Te[it]),S=de,R=Le,w=nt,P=it),(Ct.equals(E)===!1||$t!==b)&&(t.blendColor(Ct.r,Ct.g,Ct.b,$t),E.copy(Ct),b=$t),v=L,j=!1}function Je(L,ue){L.side===pi?U(t.CULL_FACE):Ne(t.CULL_FACE);let de=L.side===cn;ue&&(de=!de),Pe(de),L.blending===_s&&L.transparent===!1?xe(qi):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):U(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(L){J!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),J=L)}function C(L){L!==x1?(Ne(t.CULL_FACE),L!==te&&(L===Rh?t.cullFace(t.BACK):L===v1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):U(t.CULL_FACE),te=L}function M(L){L!==I&&(D&&t.lineWidth(L),I=L)}function G(L,ue,de){L?(Ne(t.POLYGON_OFFSET_FILL),(V!==ue||X!==de)&&(t.polygonOffset(ue,de),V=ue,X=de)):U(t.POLYGON_OFFSET_FILL)}function se(L){L?Ne(t.SCISSOR_TEST):U(t.SCISSOR_TEST)}function ne(L){L===void 0&&(L=t.TEXTURE0+Z-1),Y!==L&&(t.activeTexture(L),Y=L)}function oe(L,ue,de){de===void 0&&(Y===null?de=t.TEXTURE0+Z-1:de=Y);let Le=Q[de];Le===void 0&&(Le={type:void 0,texture:void 0},Q[de]=Le),(Le.type!==L||Le.texture!==ue)&&(Y!==de&&(t.activeTexture(de),Y=de),t.bindTexture(L,ue||Ie[L]),Le.type=L,Le.texture=ue)}function Se(){const L=Q[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Ke(L){me.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function gt(L,ue){let de=h.get(ue);de===void 0&&(de=new WeakMap,h.set(ue,de));let Le=de.get(L);Le===void 0&&(Le=t.getUniformBlockIndex(ue,L.name),de.set(L,Le))}function He(L,ue){const Le=h.get(ue).get(L);d.get(ue)!==Le&&(t.uniformBlockBinding(ue,Le,L.__bindingPointIndex),d.set(ue,Le))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},Y=null,Q={},y={},g=new WeakMap,x=[],m=null,u=!1,v=null,_=null,S=null,R=null,T=null,w=null,P=null,E=new $e(0,0,0),b=0,j=!1,J=null,te=null,I=null,V=null,X=null,ce.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:U,bindFramebuffer:Me,drawBuffers:N,useProgram:tt,setBlending:xe,setMaterial:Je,setFlipSided:Pe,setCullFace:C,setLineWidth:M,setPolygonOffset:G,setScissorTest:se,activeTexture:ne,bindTexture:oe,unbindTexture:Se,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:be,texImage3D:ye,updateUBOMapping:gt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Ue,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:ke,viewport:Ke,reset:ae}}function gT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return y?new OffscreenCanvas(C,M):Hl("canvas")}function x(C,M,G,se){let ne=1;if((C.width>se||C.height>se)&&(ne=se/Math.max(C.width,C.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=M?Ud:Math.floor,Se=oe(ne*C.width),fe=oe(ne*C.height);h===void 0&&(h=g(Se,fe));const ve=G?g(Se,fe):h;return ve.width=Se,ve.height=fe,ve.getContext("2d").drawImage(C,0,0,Se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+fe+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return cm(C.width)&&cm(C.height)}function u(C){return a?!1:C.wrapS!==Vn||C.wrapT!==Vn||C.minFilter!==Kt&&C.minFilter!==Cn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==Kt&&C.minFilter!==Cn}function _(C){t.generateMipmap(C)}function S(C,M,G,se,ne=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=M;if(M===t.RED&&(G===t.FLOAT&&(oe=t.R32F),G===t.HALF_FLOAT&&(oe=t.R16F),G===t.UNSIGNED_BYTE&&(oe=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(oe=t.R8UI),G===t.UNSIGNED_SHORT&&(oe=t.R16UI),G===t.UNSIGNED_INT&&(oe=t.R32UI),G===t.BYTE&&(oe=t.R8I),G===t.SHORT&&(oe=t.R16I),G===t.INT&&(oe=t.R32I)),M===t.RG&&(G===t.FLOAT&&(oe=t.RG32F),G===t.HALF_FLOAT&&(oe=t.RG16F),G===t.UNSIGNED_BYTE&&(oe=t.RG8)),M===t.RGBA){const Se=ne?kl:et.getTransfer(se);G===t.FLOAT&&(oe=t.RGBA32F),G===t.HALF_FLOAT&&(oe=t.RGBA16F),G===t.UNSIGNED_BYTE&&(oe=Se===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function R(C,M,G){return v(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===Kt||C===Nh||C===Yc?t.NEAREST:t.LINEAR}function w(C){const M=C.target;M.removeEventListener("dispose",w),E(M),M.isVideoTexture&&d.delete(M)}function P(C){const M=C.target;M.removeEventListener("dispose",P),j(M)}function E(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,se=p.get(G);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(C),Object.keys(se).length===0&&p.delete(G)}i.remove(C)}function b(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const G=C.source,se=p.get(G);delete se[M.__cacheKey],o.memory.textures--}function j(C){const M=C.texture,G=i.get(C),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let oe=0;oe<G.__webglFramebuffer[ne].length;oe++)t.deleteFramebuffer(G.__webglFramebuffer[ne][oe]);else t.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ne]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const Se=i.get(M[ne]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(C)}let J=0;function te(){J=0}function I(){const C=J;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),J+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){const G=i.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,C,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function Z(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ce(G,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function D(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ce(G,C,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function k(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){me(G,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const B={[Ld]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[Dd]:t.MIRRORED_REPEAT},Y={[Kt]:t.NEAREST,[Nh]:t.NEAREST_MIPMAP_NEAREST,[Yc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[K1]:t.LINEAR_MIPMAP_NEAREST,[Bo]:t.LINEAR_MIPMAP_LINEAR},Q={[cE]:t.NEVER,[mE]:t.ALWAYS,[uE]:t.LESS,[Kx]:t.LEQUAL,[dE]:t.EQUAL,[hE]:t.GEQUAL,[fE]:t.GREATER,[pE]:t.NOTEQUAL};function $(C,M,G){if(G?(t.texParameteri(C,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Kt||M.minFilter!==Yc&&M.minFilter!==Bo||M.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const se=M.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const oe=V(M);if(oe!==C.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const Se=ne[C.__cacheKey];Se!==void 0&&(ne[C.__cacheKey].usedTimes--,Se.usedTimes===0&&b(M)),C.__cacheKey=oe,C.__webglTexture=ne[oe].texture}return G}function ce(C,M,G){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ne=K(C,M),oe=M.source;n.bindTexture(se,C.__webglTexture,t.TEXTURE0+G);const Se=i.get(oe);if(oe.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const fe=et.getPrimaries(et.workingColorSpace),ve=M.colorSpace===Pn?null:et.getPrimaries(M.colorSpace),Ce=M.colorSpace===Pn||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=u(M)&&m(M.image)===!1;let ee=x(M.image,ze,!1,r.maxTextureSize);ee=Pe(M,ee);const Qe=m(ee)||a,We=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),be=S(M.internalFormat,We,Ue,M.colorSpace,M.isVideoTexture);$(se,M,Qe);let ye;const ke=M.mipmaps,Ke=a&&M.isVideoTexture!==!0&&be!==qx,gt=Se.__version===void 0||ne===!0,He=R(M,ee,Qe);if(M.isDepthTexture)be=t.DEPTH_COMPONENT,a?M.type===Bi?be=t.DEPTH_COMPONENT32F:M.type===ki?be=t.DEPTH_COMPONENT24:M.type===Er?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:M.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Mr&&be===t.DEPTH_COMPONENT&&M.type!==jf&&M.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ki,Ue=s.convert(M.type)),M.format===Ls&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,M.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Er,Ue=s.convert(M.type))),gt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,be,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,be,ee.width,ee.height,0,We,Ue,null));else if(M.isDataTexture)if(ke.length>0&&Qe){Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let ae=0,L=ke.length;ae<L;ae++)ye=ke[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ye.width,ye.height,We,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ae,be,ye.width,ye.height,0,We,Ue,ye.data);M.generateMipmaps=!1}else Ke?(gt&&n.texStorage2D(t.TEXTURE_2D,He,be,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,We,Ue,ee.data)):n.texImage2D(t.TEXTURE_2D,0,be,ee.width,ee.height,0,We,Ue,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,be,ke[0].width,ke[0].height,ee.depth);for(let ae=0,L=ke.length;ae<L;ae++)ye=ke[ae],M.format!==Gn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,We,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,be,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,We,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,be,ye.width,ye.height,ee.depth,0,We,Ue,ye.data)}else{Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let ae=0,L=ke.length;ae<L;ae++)ye=ke[ae],M.format!==Gn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ye.width,ye.height,We,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ye.width,ye.height,We,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ae,be,ye.width,ye.height,0,We,Ue,ye.data)}else if(M.isDataArrayTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,be,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,We,Ue,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,We,Ue,ee.data);else if(M.isData3DTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_3D,He,be,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,We,Ue,ee.data)):n.texImage3D(t.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,We,Ue,ee.data);else if(M.isFramebufferTexture){if(gt)if(Ke)n.texStorage2D(t.TEXTURE_2D,He,be,ee.width,ee.height);else{let ae=ee.width,L=ee.height;for(let ue=0;ue<He;ue++)n.texImage2D(t.TEXTURE_2D,ue,be,ae,L,0,We,Ue,null),ae>>=1,L>>=1}}else if(ke.length>0&&Qe){Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,He,be,ke[0].width,ke[0].height);for(let ae=0,L=ke.length;ae<L;ae++)ye=ke[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,We,Ue,ye):n.texImage2D(t.TEXTURE_2D,ae,be,We,Ue,ye);M.generateMipmaps=!1}else Ke?(gt&&n.texStorage2D(t.TEXTURE_2D,He,be,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Ue,ee)):n.texImage2D(t.TEXTURE_2D,0,be,We,Ue,ee);v(M,Qe)&&_(se),Se.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function me(C,M,G){if(M.image.length!==6)return;const se=K(C,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const Se=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===Pn?null:et.getPrimaries(M.colorSpace),ve=M.colorSpace===Pn||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Ce&&!ze?ee[ae]=x(M.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=ze?M.image[ae].image:M.image[ae],ee[ae]=Pe(M,ee[ae]);const Qe=ee[0],We=m(Qe)||a,Ue=s.convert(M.format,M.colorSpace),be=s.convert(M.type),ye=S(M.internalFormat,Ue,be,M.colorSpace),ke=a&&M.isVideoTexture!==!0,Ke=oe.__version===void 0||se===!0;let gt=R(M,Qe,We);$(t.TEXTURE_CUBE_MAP,M,We);let He;if(Ce){ke&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ye,Qe.width,Qe.height);for(let ae=0;ae<6;ae++){He=ee[ae].mipmaps;for(let L=0;L<He.length;L++){const ue=He[L];M.format!==Gn?Ue!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,ue.width,ue.height,Ue,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,ue.width,ue.height,Ue,be,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,ye,ue.width,ue.height,0,Ue,be,ue.data)}}}else{He=M.mipmaps,ke&&Ke&&(He.length>0&&gt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,ye,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(ze){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,Ue,be,ee[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,ee[ae].width,ee[ae].height,0,Ue,be,ee[ae].data);for(let L=0;L<He.length;L++){const de=He[L].image[ae].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,de.width,de.height,Ue,be,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,ye,de.width,de.height,0,Ue,be,de.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,be,ee[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,Ue,be,ee[ae]);for(let L=0;L<He.length;L++){const ue=He[L];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,Ue,be,ue.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,ye,Ue,be,ue.image[ae])}}}v(M,We)&&_(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,G,se,ne,oe){const Se=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),ve=S(G.internalFormat,Se,fe,G.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>oe),ee=Math.max(1,M.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,ve,ze,ee,M.depth,0,Se,fe,null):n.texImage2D(ne,oe,ve,ze,ee,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,Te(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||xe(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Bi?se=t.DEPTH_COMPONENT32F:ne.type===ki&&(se=t.DEPTH_COMPONENT24));const oe=Te(M);xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const se=Te(M);G&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],Se=s.convert(oe.format,oe.colorSpace),fe=s.convert(oe.type),ve=S(oe.internalFormat,Se,fe,oe.colorSpace),Ce=Te(M);G&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ve,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=Te(M);if(M.depthTexture.format===Mr)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ls)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function U(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),Ie(M.__webglDepthbuffer[se],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ie(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(C,M,G){const se=i.get(C);M!==void 0&&ge(se.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&U(C)}function N(C){const M=C.texture,G=i.get(C),se=i.get(M);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Se=m(C)||a;if(ne){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)G.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const fe=C.texture;for(let ve=0,Ce=fe.length;ve<Ce;ve++){const ze=i.get(fe[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&xe(C)===!1){const fe=oe?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const Ce=fe[ve];G.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);const ze=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),Qe=S(Ce.internalFormat,ze,ee,Ce.colorSpace,C.isXRRenderTarget===!0),We=Te(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Qe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),$(t.TEXTURE_CUBE_MAP,M,Se);for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(G.__webglFramebuffer[fe][ve],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ge(G.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(M,Se)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const fe=C.texture;for(let ve=0,Ce=fe.length;ve<Ce;ve++){const ze=fe[ve],ee=i.get(ze);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),$(t.TEXTURE_2D,ze,Se),ge(G.__webglFramebuffer,C,ze,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),v(ze,Se)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,se.__webglTexture),$(fe,M,Se),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(G.__webglFramebuffer[ve],C,M,t.COLOR_ATTACHMENT0,fe,ve);else ge(G.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,fe,0);v(M,Se)&&_(fe),n.unbindTexture()}C.depthBuffer&&U(C)}function tt(C){const M=m(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0,ne=G.length;se<ne;se++){const oe=G[se];if(v(oe,M)){const Se=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(oe).__webglTexture;n.bindTexture(Se,fe),_(Se),n.unbindTexture()}}}function _e(C){if(a&&C.samples>0&&xe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,se=C.height;let ne=t.COLOR_BUFFER_BIT;const oe=[],Se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(C),ve=C.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){oe.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&oe.push(Se);const ze=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ve){const ee=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,se,0,0,G,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);const ze=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Te(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Je(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function Pe(C,M){const G=C.colorSpace,se=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Id||G!==Ei&&G!==Pn&&(et.getTransfer(G)===at?a===!1?e.has("EXT_sRGB")===!0&&se===Gn?(C.format=Id,C.minFilter=Cn,C.generateMipmaps=!1):M=Qx.sRGBToLinear(M):(se!==Gn||ne!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=Me,this.setupRenderTarget=N,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function xT(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=et.getTransfer(o);if(s===Ji)return t.UNSIGNED_BYTE;if(s===Vx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Gx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Z1)return t.BYTE;if(s===Q1)return t.SHORT;if(s===jf)return t.UNSIGNED_SHORT;if(s===Hx)return t.INT;if(s===ki)return t.UNSIGNED_INT;if(s===Bi)return t.FLOAT;if(s===zo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===eE)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===tE)return t.LUMINANCE;if(s===nE)return t.LUMINANCE_ALPHA;if(s===Mr)return t.DEPTH_COMPONENT;if(s===Ls)return t.DEPTH_STENCIL;if(s===Id)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===iE)return t.RED;if(s===Wx)return t.RED_INTEGER;if(s===rE)return t.RG;if(s===Xx)return t.RG_INTEGER;if(s===$x)return t.RGBA_INTEGER;if(s===Jc||s===Kc||s===Zc||s===Qc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Uh||s===Fh||s===Oh||s===kh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bh||s===zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bh)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Hh||s===Vh||s===Gh||s===Wh||s===Xh||s===$h||s===qh||s===Yh||s===Jh||s===Kh||s===Zh||s===Qh||s===em)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===em)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eu||s===tm||s===nm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===eu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sE||s===im||s===rm||s===sm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===im)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class vT extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xa extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),y=.02,g=.005;c.inputState.pinching&&p>y+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=y-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _T extends ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,y=null,g=null;const x=n.getContextAttributes();let m=null,u=null;const v=[],_=[],S=new qe;let R=null;const T=new gn;T.layers.enable(1),T.viewport=new ut;const w=new gn;w.layers.enable(2),w.viewport=new ut;const P=[T,w],E=new vT;E.layers.enable(1),E.layers.enable(2);let b=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=v[$];return K===void 0&&(K=new wu,v[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=v[$];return K===void 0&&(K=new wu,v[$]=K),K.getGripSpace()},this.getHand=function($){let K=v[$];return K===void 0&&(K=new wu,v[$]=K),K.getHandSpace()};function J($){const K=_.indexOf($.inputSource);if(K===-1)return;const ce=v[K];ce!==void 0&&(ce.update($.inputSource,$.frame,c||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",I);for(let $=0;$<v.length;$++){const K=_[$];K!==null&&(_[$]=null,v[$].disconnect(K))}b=null,j=null,e.setRenderTarget(m),y=null,p=null,h=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:y},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",te),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};y=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),u=new Lr(y.framebufferWidth,y.framebufferHeight,{format:Gn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ce=null,me=null;x.depth&&(me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?Ls:Mr,ce=x.stencil?Er:ki);const ge={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new Lr(p.textureWidth,p.textureHeight,{format:Gn,type:Ji,depthTexture:new fv(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I($){for(let K=0;K<$.removed.length;K++){const ce=$.removed[K],me=_.indexOf(ce);me>=0&&(_[me]=null,v[me].disconnect(ce))}for(let K=0;K<$.added.length;K++){const ce=$.added[K];let me=_.indexOf(ce);if(me===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=_.length){_.push(ce),me=Ie;break}else if(_[Ie]===null){_[Ie]=ce,me=Ie;break}if(me===-1)break}const ge=v[me];ge&&ge.connect(ce)}}const V=new F,X=new F;function Z($,K,ce){V.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const me=V.distanceTo(X),ge=K.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),U=ge[14]/(ge[10]+1),Me=(ge[9]+1)/ge[5],N=(ge[9]-1)/ge[5],tt=(ge[8]-1)/ge[0],_e=(Ie[8]+1)/Ie[0],Te=Ne*tt,xe=Ne*_e,Je=me/(-tt+_e),Pe=Je*-tt;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pe),$.translateZ(Je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const C=Ne+Je,M=U+Je,G=Te-Pe,se=xe+(me-Pe),ne=Me*U/M*C,oe=N*U/M*C;$.projectionMatrix.makePerspective(G,se,ne,oe,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function D($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;E.near=w.near=T.near=$.near,E.far=w.far=T.far=$.far,(b!==E.near||j!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,j=E.far);const K=$.parent,ce=E.cameras;D(E,K);for(let me=0;me<ce.length;me++)D(ce[me],K);ce.length===2?Z(E,T,w):E.projectionMatrix.copy(T.projectionMatrix),k($,E,K)};function k($,K,ce){ce===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&y===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)};let B=null;function Y($,K){if(d=K.getViewerPose(c||o),g=K,d!==null){const ce=d.views;y!==null&&(e.setRenderTargetFramebuffer(u,y.framebuffer),e.setRenderTarget(u));let me=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,me=!0);for(let ge=0;ge<ce.length;ge++){const Ie=ce[ge];let Ne=null;if(y!==null)Ne=y.getViewport(Ie);else{const Me=h.getViewSubImage(p,Ie);Ne=Me.viewport,ge===0&&(e.setRenderTargetTextures(u,Me.colorTexture,p.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(u))}let U=P[ge];U===void 0&&(U=new gn,U.layers.enable(ge),U.viewport=new ut,P[ge]=U),U.matrix.fromArray(Ie.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ie.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&(E.matrix.copy(U.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),me===!0&&E.cameras.push(U)}}for(let ce=0;ce<v.length;ce++){const me=_[ce],ge=v[ce];me!==null&&ge!==void 0&&ge.update(me,K,c||o)}B&&B($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Q=new uv;Q.setAnimationLoop(Y),this.setAnimationLoop=function($){B=$},this.dispose=function(){}}}function ST(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,av(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&y(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function y(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ET(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(p(v),s[v.id]=T)}function d(v){const _=h();v.__bindingPointIndex=_;const S=t.createBuffer(),R=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const _=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,w=S.length;T<w;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,b=P.length;E<b;E++){const j=P[E];if(y(j,T,E,R)===!0){const J=j.__offset,te=Array.isArray(j.value)?j.value:[j.value];let I=0;for(let V=0;V<te.length;V++){const X=te[V],Z=x(X);typeof X=="number"||typeof X=="boolean"?(j.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,J+I,j.__data)):X.isMatrix3?(j.__data[0]=X.elements[0],j.__data[1]=X.elements[1],j.__data[2]=X.elements[2],j.__data[3]=0,j.__data[4]=X.elements[3],j.__data[5]=X.elements[4],j.__data[6]=X.elements[5],j.__data[7]=0,j.__data[8]=X.elements[6],j.__data[9]=X.elements[7],j.__data[10]=X.elements[8],j.__data[11]=0):(X.toArray(j.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,j.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(v,_,S,R){const T=v.value,w=_+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const P=R[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const _=v.uniforms;let S=0;const R=16;for(let w=0,P=_.length;w<P;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,j=E.length;b<j;b++){const J=E[b],te=Array.isArray(J.value)?J.value:[J.value];for(let I=0,V=te.length;I<V;I++){const X=te[I],Z=x(X),D=S%R;D!==0&&R-D<Z.boundary&&(S+=R-D),J.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=S,S+=Z.storage}}}const T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class vv{constructor(e={}){const{canvas:n=xE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const y=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const _=this;let S=!1,R=0,T=0,w=null,P=-1,E=null;const b=new ut,j=new ut;let J=null;const te=new $e(0);let I=0,V=n.width,X=n.height,Z=1,D=null,k=null;const B=new ut(0,0,V,X),Y=new ut(0,0,V,X);let Q=!1;const $=new Gf;let K=!1,ce=!1,me=null;const ge=new bt,Ie=new qe,Ne=new F,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return w===null?Z:1}let N=i;function tt(A,O){for(let W=0;W<A.length;W++){const q=A[W],H=n.getContext(q,O);if(H!==null)return H}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ue,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),N=tt(O,A),N===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Te,xe,Je,Pe,C,M,G,se,ne,oe,Se,fe,ve,Ce,ze,ee,Qe,We,Ue,be,ye,ke,Ke;function gt(){_e=new D2(N),Te=new T2(N,_e,e),_e.init(Te),ye=new xT(N,_e,Te),xe=new mT(N,_e,Te),Je=new U2(N),Pe=new tT,C=new gT(N,_e,xe,Pe,Te,ye,Je),M=new R2(_),G=new L2(_),se=new VE(N,Te),ke=new b2(N,_e,se,Te),ne=new I2(N,se,Je,ke),oe=new B2(N,ne,se,Je),We=new k2(N,Te,C),ze=new A2(Pe),Se=new eT(_,M,G,_e,Te,ke,ze),fe=new ST(_,Pe),ve=new iT,Ce=new cT(_e,Te),Qe=new M2(_,M,G,xe,oe,p,l),ee=new hT(_,oe,Te),Ke=new ET(N,Je,Te,xe),Ue=new w2(N,_e,Je,Te),be=new N2(N,_e,Je,Te),Je.programs=Se.programs,_.capabilities=Te,_.extensions=_e,_.properties=Pe,_.renderLists=ve,_.shadowMap=ee,_.state=xe,_.info=Je}gt();const He=new _T(_,N);this.xr=He,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(V,X,!1))},this.getSize=function(A){return A.set(V,X)},this.setSize=function(A,O,W=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,X=O,n.width=Math.floor(A*Z),n.height=Math.floor(O*Z),W===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(V*Z,X*Z).floor()},this.setDrawingBufferSize=function(A,O,W){V=A,X=O,Z=W,n.width=Math.floor(A*W),n.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,O,W,q){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,O,W,q),xe.viewport(b.copy(B).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,O,W,q){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,O,W,q),xe.scissor(j.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){xe.setScissorTest(Q=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,O=!0,W=!0){let q=0;if(A){let H=!1;if(w!==null){const pe=w.texture.format;H=pe===$x||pe===Xx||pe===Wx}if(H){const pe=w.texture.type,Ee=pe===Ji||pe===ki||pe===jf||pe===Er||pe===Vx||pe===Gx,Ae=Qe.getClearColor(),De=Qe.getClearAlpha(),je=Ae.r,Fe=Ae.g,Oe=Ae.b;Ee?(y[0]=je,y[1]=Fe,y[2]=Oe,y[3]=De,N.clearBufferuiv(N.COLOR,0,y)):(g[0]=je,g[1]=Fe,g[2]=Oe,g[3]=De,N.clearBufferiv(N.COLOR,0,g))}else q|=N.COLOR_BUFFER_BIT}O&&(q|=N.DEPTH_BUFFER_BIT),W&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),ve.dispose(),Ce.dispose(),Pe.dispose(),M.dispose(),G.dispose(),oe.dispose(),ke.dispose(),Ke.dispose(),Se.dispose(),He.dispose(),He.removeEventListener("sessionstart",$t),He.removeEventListener("sessionend",rt),me&&(me.dispose(),me=null),qt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Je.autoReset,O=ee.enabled,W=ee.autoUpdate,q=ee.needsUpdate,H=ee.type;gt(),Je.autoReset=A,ee.enabled=O,ee.autoUpdate=W,ee.needsUpdate=q,ee.type=H}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){const O=A.target;O.removeEventListener("dispose",de),Le(O)}function Le(A){we(A),Pe.remove(A)}function we(A){const O=Pe.get(A).programs;O!==void 0&&(O.forEach(function(W){Se.releaseProgram(W)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,q,H,pe){O===null&&(O=U);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Ae=Gv(A,O,W,q,H);xe.setMaterial(q,Ee);let De=W.index,je=1;if(q.wireframe===!0){if(De=ne.getWireframeAttribute(W),De===void 0)return;je=2}const Fe=W.drawRange,Oe=W.attributes.position;let yt=Fe.start*je,fn=(Fe.start+Fe.count)*je;pe!==null&&(yt=Math.max(yt,pe.start*je),fn=Math.min(fn,(pe.start+pe.count)*je)),De!==null?(yt=Math.max(yt,0),fn=Math.min(fn,De.count)):Oe!=null&&(yt=Math.max(yt,0),fn=Math.min(fn,Oe.count));const Pt=fn-yt;if(Pt<0||Pt===1/0)return;ke.setup(H,q,Ae,W,De);let ri,ft=Ue;if(De!==null&&(ri=se.get(De),ft=be,ft.setIndex(ri)),H.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Me()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(H.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),xe.setLineWidth(Ve*Me()),H.isLineSegments?ft.setMode(N.LINES):H.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else H.isPoints?ft.setMode(N.POINTS):H.isSprite&&ft.setMode(N.TRIANGLES);if(H.isBatchedMesh)ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ft.renderInstances(yt,Pt,H.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xc=Math.min(W.instanceCount,Ve);ft.renderInstances(yt,Pt,xc)}else ft.render(yt,Pt)};function nt(A,O,W){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,oa(A,O,W),A.side=Qi,A.needsUpdate=!0,oa(A,O,W),A.side=pi):oa(A,O,W)}this.compile=function(A,O,W=null){W===null&&(W=A),m=Ce.get(W),m.init(),v.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const q=new Set;return A.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const Ae=pe[Ee];nt(Ae,W,H),q.add(Ae)}else nt(pe,W,H),q.add(pe)}),v.pop(),m=null,q},this.compileAsync=function(A,O,W=null){const q=this.compile(A,O,W);return new Promise(H=>{function pe(){if(q.forEach(function(Ee){Pe.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){H(A);return}setTimeout(pe,10)}_e.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let it=null;function Ct(A){it&&it(A)}function $t(){qt.stop()}function rt(){qt.start()}const qt=new uv;qt.setAnimationLoop(Ct),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){it=A,He.setAnimationLoop(A),A===null?qt.stop():qt.start()},He.addEventListener("sessionstart",$t),He.addEventListener("sessionend",rt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(O),O=He.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,O,w),m=Ce.get(A,v.length),m.init(),v.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(ge),ce=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ce),x=ve.get(A,u.length),x.init(),u.push(x),Yn(A,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(D,k),this.info.render.frame++,K===!0&&ze.beginShadows();const W=m.state.shadowsArray;if(ee.render(W,A,O),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(x,A),m.setupLights(_._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let H=0,pe=q.length;H<pe;H++){const Ee=q[H];rp(x,A,Ee,Ee.viewport)}}else rp(x,A,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,O),ke.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Yn(A,O,W,q){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){q&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Ee=oe.update(A),Ae=A.material;Ae.visible&&x.push(A,Ee,Ae,W,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Ee=oe.update(A),Ae=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ne.copy(Ee.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ae)){const De=Ee.groups;for(let je=0,Fe=De.length;je<Fe;je++){const Oe=De[je],yt=Ae[Oe.materialIndex];yt&&yt.visible&&x.push(A,Ee,yt,W,Ne.z,Oe)}}else Ae.visible&&x.push(A,Ee,Ae,W,Ne.z,null)}}const pe=A.children;for(let Ee=0,Ae=pe.length;Ee<Ae;Ee++)Yn(pe[Ee],O,W,q)}function rp(A,O,W,q){const H=A.opaque,pe=A.transmissive,Ee=A.transparent;m.setupLightsView(W),K===!0&&ze.setGlobalState(_.clippingPlanes,W),pe.length>0&&Vv(H,pe,O,W),q&&xe.viewport(b.copy(q)),H.length>0&&sa(H,O,W),pe.length>0&&sa(pe,O,W),Ee.length>0&&sa(Ee,O,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Vv(A,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=Te.isWebGL2;me===null&&(me=new Lr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?zo:Ji,minFilter:Bo,samples:pe?4:0})),_.getDrawingBufferSize(Ie),pe?me.setSize(Ie.x,Ie.y):me.setSize(Ud(Ie.x),Ud(Ie.y));const Ee=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(te),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ae=_.toneMapping;_.toneMapping=Yi,sa(A,W,q),C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me);let De=!1;for(let je=0,Fe=O.length;je<Fe;je++){const Oe=O[je],yt=Oe.object,fn=Oe.geometry,Pt=Oe.material,ri=Oe.group;if(Pt.side===pi&&yt.layers.test(q.layers)){const ft=Pt.side;Pt.side=cn,Pt.needsUpdate=!0,sp(yt,W,q,fn,Pt,ri),Pt.side=ft,Pt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me)),_.setRenderTarget(Ee),_.setClearColor(te,I),_.toneMapping=Ae}function sa(A,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let H=0,pe=A.length;H<pe;H++){const Ee=A[H],Ae=Ee.object,De=Ee.geometry,je=q===null?Ee.material:q,Fe=Ee.group;Ae.layers.test(W.layers)&&sp(Ae,O,W,De,je,Fe)}}function sp(A,O,W,q,H,pe){A.onBeforeRender(_,O,W,q,H,pe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,O,W,q,A,pe),H.transparent===!0&&H.side===pi&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,_.renderBufferDirect(W,O,q,H,A,pe),H.side=Qi,H.needsUpdate=!0,_.renderBufferDirect(W,O,q,H,A,pe),H.side=pi):_.renderBufferDirect(W,O,q,H,A,pe),A.onAfterRender(_,O,W,q,H,pe)}function oa(A,O,W){O.isScene!==!0&&(O=U);const q=Pe.get(A),H=m.state.lights,pe=m.state.shadowsArray,Ee=H.state.version,Ae=Se.getParameters(A,H.state,pe,O,W),De=Se.getProgramCacheKey(Ae);let je=q.programs;q.environment=A.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(A.isMeshStandardMaterial?G:M).get(A.envMap||q.environment),je===void 0&&(A.addEventListener("dispose",de),je=new Map,q.programs=je);let Fe=je.get(De);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Ee)return ap(A,Ae),Fe}else Ae.uniforms=Se.getUniforms(A),A.onBuild(W,Ae,_),A.onBeforeCompile(Ae,_),Fe=Se.acquireProgram(Ae,De),je.set(De,Fe),q.uniforms=Ae.uniforms;const Oe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=ze.uniform),ap(A,Ae),q.needsLights=Xv(A),q.lightsStateVersion=Ee,q.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function op(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=cl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ap(A,O){const W=Pe.get(A);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Gv(A,O,W,q,H){O.isScene!==!0&&(O=U),C.resetTextureUnits();const pe=O.fog,Ee=q.isMeshStandardMaterial?O.environment:null,Ae=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ei,De=(q.isMeshStandardMaterial?G:M).get(q.envMap||Ee),je=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,fn=!!W.morphAttributes.color;let Pt=Yi;q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const ri=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=ri!==void 0?ri.length:0,Ve=Pe.get(q),xc=m.state.lights;if(K===!0&&(ce===!0||A!==E)){const bn=A===E&&q.id===P;ze.setState(q,A,bn)}let xt=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xc.state.version||Ve.outputColorSpace!==Ae||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||Ve.envMap!==De||q.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ze.numPlanes||Ve.numIntersection!==ze.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==Fe||Ve.morphTargets!==Oe||Ve.morphNormals!==yt||Ve.morphColors!==fn||Ve.toneMapping!==Pt||Te.isWebGL2===!0&&Ve.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Ve.__version=q.version);let ir=Ve.currentProgram;xt===!0&&(ir=oa(q,O,H));let lp=!1,Hs=!1,vc=!1;const kt=ir.getUniforms(),rr=Ve.uniforms;if(xe.useProgram(ir.program)&&(lp=!0,Hs=!0,vc=!0),q.id!==P&&(P=q.id,Hs=!0),lp||E!==A){kt.setValue(N,"projectionMatrix",A.projectionMatrix),kt.setValue(N,"viewMatrix",A.matrixWorldInverse);const bn=kt.map.cameraPosition;bn!==void 0&&bn.setValue(N,Ne.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&kt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&kt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Hs=!0,vc=!0)}if(H.isSkinnedMesh){kt.setOptional(N,H,"bindMatrix"),kt.setOptional(N,H,"bindMatrixInverse");const bn=H.skeleton;bn&&(Te.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),kt.setValue(N,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(kt.setOptional(N,H,"batchingTexture"),kt.setValue(N,"batchingTexture",H._matricesTexture,C));const yc=W.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0&&Te.isWebGL2===!0)&&We.update(H,W,ir),(Hs||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,kt.setValue(N,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(rr.envMap.value=De,rr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Hs&&(kt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Wv(rr,vc),pe&&q.fog===!0&&fe.refreshFogUniforms(rr,pe),fe.refreshMaterialUniforms(rr,q,Z,X,me),cl.upload(N,op(Ve),rr,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cl.upload(N,op(Ve),rr,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&kt.setValue(N,"center",H.center),kt.setValue(N,"modelViewMatrix",H.modelViewMatrix),kt.setValue(N,"normalMatrix",H.normalMatrix),kt.setValue(N,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const bn=q.uniformsGroups;for(let _c=0,$v=bn.length;_c<$v;_c++)if(Te.isWebGL2){const cp=bn[_c];Ke.update(cp,ir),Ke.bind(cp,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function Wv(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Xv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,W){Pe.get(A.texture).__webglTexture=O,Pe.get(A.depthTexture).__webglTexture=W;const q=Pe.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const W=Pe.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){w=A,R=O,T=W;let q=!0,H=null,pe=!1,Ee=!1;if(A){const De=Pe.get(A);De.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(N.FRAMEBUFFER,null),q=!1):De.__webglFramebuffer===void 0?C.setupRenderTarget(A):De.__hasExternalTextures&&C.rebindTextures(A,Pe.get(A.texture).__webglTexture,Pe.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ee=!0);const Fe=Pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?H=Fe[O][W]:H=Fe[O],pe=!0):Te.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?H=Pe.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[W]:H=Fe,b.copy(A.viewport),j.copy(A.scissor),J=A.scissorTest}else b.copy(B).multiplyScalar(Z).floor(),j.copy(Y).multiplyScalar(Z).floor(),J=Q;if(xe.bindFramebuffer(N.FRAMEBUFFER,H)&&Te.drawBuffers&&q&&xe.drawBuffers(A,H),xe.viewport(b),xe.scissor(j),xe.setScissorTest(J),pe){const De=Pe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,W)}else if(Ee){const De=Pe.get(A.texture),je=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,W||0,je)}P=-1},this.readRenderTargetPixels=function(A,O,W,q,H,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){xe.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const De=A.texture,je=De.format,Fe=De.type;if(je!==Gn&&ye.convert(je)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===zo&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Fe!==Ji&&ye.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Bi&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-q&&W>=0&&W<=A.height-H&&N.readPixels(O,W,q,H,ye.convert(je),ye.convert(Fe),pe)}finally{const De=w!==null?Pe.get(w).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,O,W=0){const q=Math.pow(2,-W),H=Math.floor(O.image.width*q),pe=Math.floor(O.image.height*q);C.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,A.x,A.y,H,pe),xe.unbindTexture()},this.copyTextureToTexture=function(A,O,W,q=0){const H=O.image.width,pe=O.image.height,Ee=ye.convert(W.format),Ae=ye.convert(W.type);C.setTexture2D(W,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,A.x,A.y,H,pe,Ee,Ae,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,q,A.x,A.y,Ee,Ae,O.image),q===0&&W.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W,q,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,De=ye.convert(q.format),je=ye.convert(q.type);let Fe;if(q.isData3DTexture)C.setTexture3D(q,0),Fe=N.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)C.setTexture2DArray(q,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const Oe=N.getParameter(N.UNPACK_ROW_LENGTH),yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Pt=N.getParameter(N.UNPACK_SKIP_ROWS),ri=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=W.isCompressedTexture?W.mipmaps[H]:W.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?N.texSubImage3D(Fe,H,O.x,O.y,O.z,pe,Ee,Ae,De,je,ft.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Fe,H,O.x,O.y,O.z,pe,Ee,Ae,De,ft.data)):N.texSubImage3D(Fe,H,O.x,O.y,O.z,pe,Ee,Ae,De,je,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ri),H===0&&q.generateMipmaps&&N.generateMipmap(Fe),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,xe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?br:Yx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===br?Ut:Ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MT extends vv{}MT.prototype.isWebGL1Renderer=!0;class bT extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class zs extends bi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(s.slice(),3)),this.setAttribute("uv",new _n(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new F,S=new F,R=new F;for(let T=0;T<n.length;T+=3)y(n[T+0],_),y(n[T+1],S),y(n[T+2],R),l(_,S,R,v)}function l(v,_,S,R){const T=R+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const E=v.clone().lerp(S,P/T),b=_.clone().lerp(S,P/T),j=T-P;for(let J=0;J<=j;J++)J===0&&P===T?w[P][J]=E:w[P][J]=E.clone().lerp(b,J/j)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const b=Math.floor(E/2);E%2===0?(p(w[P][b+1]),p(w[P+1][b]),p(w[P][b])):(p(w[P][b+1]),p(w[P+1][b+1]),p(w[P+1][b]))}}function c(v){const _=new F;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(v),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function d(){const v=new F;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const S=m(v)/2/Math.PI+.5,R=u(v)/Math.PI+.5;o.push(S,1-R)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const _=o[v+0],S=o[v+2],R=o[v+4],T=Math.max(_,S,R),w=Math.min(_,S,R);T>.9&&w<.1&&(_<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function p(v){s.push(v.x,v.y,v.z)}function y(v,_){const S=v*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){const v=new F,_=new F,S=new F,R=new F,T=new qe,w=new qe,P=new qe;for(let E=0,b=0;E<s.length;E+=9,b+=6){v.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),T.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),R.copy(v).add(_).add(S).divideScalar(3);const j=m(R);x(T,b+0,v,j),x(w,b+2,_,j),x(P,b+4,S,j)}}function x(v,_,S,R){R<0&&v.x===1&&(o[_]=v.x-1),S.x===0&&S.z===0&&(o[_]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.vertices,e.indices,e.radius,e.details)}}class $f extends zs{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $f(e.radius,e.detail)}}class qf extends zs{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new qf(e.radius,e.detail)}}class Yf extends zs{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yf(e.radius,e.detail)}}class Jf extends zs{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Jf(e.radius,e.detail)}}class Kf extends bi{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new F,h=new F,p=new F;for(let y=0;y<=i;y++)for(let g=0;g<=r;g++){const x=g/r*s,m=y/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(x),h.y=(e+n*Math.cos(m))*Math.sin(x),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(y/i)}for(let y=1;y<=i;y++)for(let g=1;g<=r;g++){const x=(r+1)*y+g-1,m=(r+1)*(y-1)+g-1,u=(r+1)*(y-1)+g,v=(r+1)*y+g;o.push(x,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new _n(a,3)),this.setAttribute("normal",new _n(l,3)),this.setAttribute("uv",new _n(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qm extends Zo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jx,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Tu=new bt,Ym=new F,Jm=new F;class yv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ym),Jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jm),n.updateMatrixWorld(),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Km=new bt,no=new F,Au=new F;class wT extends yv{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),Au.copy(i.position),Au.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Au),i.updateMatrixWorld(),r.makeTranslation(-no.x,-no.y,-no.z),Km.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class TT extends Zf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AT extends yv{constructor(){super(new dv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RT extends Zf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new AT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends Zf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);function _v({type:t="icosahedron",color:e="#7b2fff",size:n=1}){const i=ie.useRef(null);return ie.useEffect(()=>{const r=i.current;if(!r)return;const s=r.clientWidth,o=r.clientHeight,a=new vv({antialias:!0,alpha:!0});a.setPixelRatio(window.devicePixelRatio),a.setSize(s,o),a.setClearColor(0,0),r.appendChild(a.domElement);const l=new bT,c=new gn(50,s/o,.1,100);c.position.set(0,0,4*n);let d;t==="icosahedron"?d=new qf(1.2*n,0):t==="torus"?d=new Kf(.9*n,.35*n,16,60):t==="octahedron"?d=new Yf(1.2*n,0):t==="dodecahedron"?d=new $f(1.1*n,0):d=new Jf(1.3*n,0);const h=new qm({color:new $e(e),wireframe:!0,transparent:!0,opacity:.6}),p=new ei(d,h);l.add(p);const y=new qm({color:new $e(e),transparent:!0,opacity:.08}),g=new ei(d.clone(),y);l.add(g);const x=new CT(16777215,.5);l.add(x);const m=new RT(new $e(e),2);m.position.set(2,3,4),l.add(m);const u=new TT(62932,1.5,10);u.position.set(-3,-2,2),l.add(u);let v={x:0,y:0};const _=P=>{const E=r.getBoundingClientRect();v.x=((P.clientX-E.left)/s-.5)*2,v.y=-((P.clientY-E.top)/o-.5)*2};r.addEventListener("mousemove",_);let S,R=0;const T=()=>{S=requestAnimationFrame(T),R+=.008,p.rotation.x=R*.4+v.y*.3,p.rotation.y=R*.6+v.x*.3,g.rotation.x=p.rotation.x,g.rotation.y=p.rotation.y,u.position.x=Math.sin(R*1.5)*3,u.position.y=Math.cos(R)*2,a.render(l,c)};T();const w=()=>{const P=r.clientWidth,E=r.clientHeight;c.aspect=P/E,c.updateProjectionMatrix(),a.setSize(P,E)};return window.addEventListener("resize",w),()=>{cancelAnimationFrame(S),r.removeEventListener("mousemove",_),window.removeEventListener("resize",w),r.removeChild(a.domElement),a.dispose()}},[t,e,n]),f.jsx("div",{ref:i,style:{width:"100%",height:"100%"}})}const $a=[{id:"cosmic",name:"Cosmic",tag:"Dark · Space · Glassmorphism",desc:"Deep-space dark theme with neon glows, glassmorphism cards, and gradient typography.",geo:"icosahedron",accent:"#7b2fff",accentAlt:"#00f5d4",bg:"#03020a",badge:"Most Popular"},{id:"ember",name:"Ember",tag:"Bold · Warm · Editorial",desc:"Volcanic energy with ember tones, strong Syne typography, and cinematic section flow.",geo:"dodecahedron",accent:"#ff4d00",accentAlt:"#ff9a3c",bg:"#0a0402",badge:"Best for Creatives"},{id:"aurora",name:"Aurora",tag:"Minimal · Arctic · Clean",desc:"Ice-cold minimalism with aurora gradient accents, monospaced precision, and breathable whitespace.",geo:"octahedron",accent:"#06b6d4",accentAlt:"#818cf8",bg:"#020b14",badge:"New"},{id:"forge",name:"Forge",tag:"Industrial · Grid · Bold",desc:"Raw industrial grid layout with acid-yellow accents, oversized numbers, and brutal section breaks.",geo:"torus",accent:"#eab308",accentAlt:"#f97316",bg:"#080701",badge:"Dev Favourite"}];function PT({id:t,accent:e,accentAlt:n,bg:i}){const r={cosmic:f.jsxs("div",{style:{width:"100%",height:"100%",background:i,padding:"14px",overflow:"hidden"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[f.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:`${e}30`,border:`1px solid ${e}50`}}),f.jsxs("div",{children:[f.jsx("div",{style:{width:"60px",height:"8px",background:`linear-gradient(90deg,${e},${n})`,borderRadius:"2px",marginBottom:"4px"}}),f.jsx("div",{style:{width:"40px",height:"5px",background:`${e}30`,borderRadius:"2px"}})]})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"8px"},children:[...Array(4)].map((s,o)=>f.jsxs("div",{style:{background:`${e}08`,border:`1px solid ${e}20`,borderRadius:"5px",padding:"6px 8px"},children:[f.jsx("div",{style:{width:"30px",height:"5px",background:`${o%2===0?e:n}50`,borderRadius:"2px",marginBottom:"4px"}}),f.jsx("div",{style:{width:"100%",height:"3px",background:"rgba(255,255,255,0.06)",borderRadius:"1px",marginBottom:"2px"}}),f.jsx("div",{style:{width:"70%",height:"3px",background:"rgba(255,255,255,0.06)",borderRadius:"1px"}})]},o))}),f.jsx("div",{style:{display:"flex",gap:"4px"},children:["React","Go","AWS","k8s"].map((s,o)=>f.jsx("span",{style:{fontSize:"7px",padding:"2px 5px",border:`1px solid ${e}40`,borderRadius:"2px",color:`${e}cc`,fontFamily:"monospace"},children:s},o))})]}),ember:f.jsxs("div",{style:{width:"100%",height:"100%",background:i,overflow:"hidden"},children:[f.jsx("div",{style:{height:"2px",background:`linear-gradient(90deg,${e},${n})`}}),f.jsxs("div",{style:{padding:"14px"},children:[f.jsx("div",{style:{width:"80px",height:"12px",background:`linear-gradient(90deg,${e},${n})`,borderRadius:"2px",marginBottom:"5px"}}),f.jsx("div",{style:{width:"55px",height:"7px",background:`${e}25`,borderRadius:"2px",marginBottom:"12px"}}),[...Array(3)].map((s,o)=>f.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[f.jsx("div",{style:{width:"2px",height:"20px",background:`${e}${Math.floor((.8-o*.2)*255).toString(16).padStart(2,"0")}`,borderRadius:"1px",flexShrink:0}}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{width:`${65-o*12}%`,height:"5px",background:`${n}25`,borderRadius:"2px",marginBottom:"3px"}}),f.jsx("div",{style:{width:`${85-o*8}%`,height:"3px",background:"rgba(255,255,255,0.06)",borderRadius:"1px"}})]})]},o))]})]}),aurora:f.jsxs("div",{style:{width:"100%",height:"100%",background:i,padding:"14px",overflow:"hidden"},children:[f.jsxs("div",{style:{borderBottom:`1px solid ${e}20`,paddingBottom:"10px",marginBottom:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{width:"55px",height:"9px",background:`linear-gradient(90deg,${e},${n})`,borderRadius:"2px",marginBottom:"4px"}}),f.jsx("div",{style:{width:"38px",height:"5px",background:`${e}25`,borderRadius:"2px"}})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3px",alignItems:"flex-end"},children:[40,28,32].map((s,o)=>f.jsx("div",{style:{width:`${s}px`,height:"3px",background:`${n}${o===0?"80":"30"}`,borderRadius:"1px"}},o))})]}),f.jsx("div",{style:{display:"flex",gap:"6px",marginBottom:"8px"},children:["TS","Rust","Go"].map((s,o)=>f.jsx("span",{style:{fontSize:"7px",padding:"3px 6px",background:`${e}15`,border:`1px solid ${e}30`,borderRadius:"3px",color:`${e}cc`,fontFamily:"monospace"},children:s},o))}),[...Array(3)].map((s,o)=>f.jsx("div",{style:{height:"4px",background:`${e}${o===0?"30":"12"}`,borderRadius:"2px",marginBottom:"4px",width:`${100-o*15}%`}},o))]}),forge:f.jsxs("div",{style:{width:"100%",height:"100%",background:i,padding:"14px",overflow:"hidden"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"},children:[f.jsx("div",{style:{fontFamily:"monospace",fontSize:"28px",fontWeight:"900",color:`${e}`,lineHeight:1,letterSpacing:"-2px",opacity:.9},children:"JD"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px"},children:[...Array(4)].map((s,o)=>f.jsx("div",{style:{width:"10px",height:"10px",background:o%2===0?`${e}40`:`${n}20`,border:`1px solid ${e}30`}},o))})]}),f.jsx("div",{style:{height:"1px",background:`${e}40`,marginBottom:"8px"}}),f.jsx("div",{style:{width:"70px",height:"6px",background:`${e}`,borderRadius:"1px",marginBottom:"5px"}}),[...Array(3)].map((s,o)=>f.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center",marginBottom:"5px"},children:[f.jsx("div",{style:{width:"4px",height:"4px",background:e,flexShrink:0}}),f.jsx("div",{style:{width:`${75-o*15}%`,height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"1px"}})]},o))]})};return r[t]||r.cosmic}function LT({t,selected:e,onSelect:n}){const i=ie.useRef(null),r=o=>{if(!i.current)return;const a=i.current.getBoundingClientRect(),l=(o.clientX-a.left)/a.width-.5,c=(o.clientY-a.top)/a.height-.5;i.current.style.transform=`perspective(900px) rotateY(${l*16}deg) rotateX(${-c*12}deg) scale(1.04)`},s=()=>{i.current&&(i.current.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)")};return f.jsxs("div",{ref:i,onClick:()=>n(t.id),onMouseMove:r,onMouseLeave:s,style:{cursor:"pointer",transition:"transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s",transformStyle:"preserve-3d",borderRadius:"14px",overflow:"hidden",boxShadow:e?`0 0 0 2px ${t.accent}, 0 24px 64px ${t.accent}50, 0 0 100px ${t.accent}15`:"0 8px 40px rgba(0,0,0,0.6)"},children:[f.jsxs("div",{style:{height:"200px",background:t.bg,position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:0,right:0,width:"140px",height:"140px",opacity:.65},children:f.jsx(_v,{type:t.geo,color:t.accent,size:.8})}),f.jsx("div",{style:{position:"absolute",inset:0,right:"60px"},children:f.jsx(PT,{id:t.id,accent:t.accent,accentAlt:t.accentAlt,bg:t.bg})}),f.jsx("div",{style:{position:"absolute",top:0,right:"50px",width:"90px",height:"100%",background:`linear-gradient(90deg, transparent, ${t.bg})`}}),f.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",padding:"3px 10px",background:`${t.accent}22`,border:`1px solid ${t.accent}50`,borderRadius:"20px"},children:f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.1em",color:t.accent},children:t.badge})})]}),f.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(8,7,20,0.98), rgba(12,10,28,0.98))",borderTop:`1px solid ${t.accent}25`,padding:"18px 22px 20px"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"6px"},children:[f.jsxs("div",{children:[f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.2em",color:`${t.accent}80`,textTransform:"uppercase",display:"block",marginBottom:"4px"},children:t.tag}),f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"20px",fontWeight:"800",color:"#fffae6",margin:0,letterSpacing:"-0.01em"},children:t.name})]}),f.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",border:`2px solid ${e?t.accent:"rgba(255,255,255,0.12)"}`,background:e?t.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0,marginTop:"4px"},children:e&&f.jsx("span",{style:{color:"white",fontSize:"11px"},children:"✓"})})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.42)",lineHeight:1.65,margin:"0 0 12px"},children:t.desc}),f.jsx("div",{style:{height:"1.5px",background:`linear-gradient(90deg,${t.accent},${t.accentAlt})`,borderRadius:"1px",opacity:e?1:.25,transition:"opacity 0.3s"}})]})]})}function DT({target:t,suffix:e=""}){const[n,i]=ie.useState(0),r=ie.useRef(null);return ie.useEffect(()=>{const s=new IntersectionObserver(([o])=>{if(o.isIntersecting){let a=0;const l=t/60,c=setInterval(()=>{a+=l,a>=t?(i(t),clearInterval(c)):i(Math.floor(a))},20)}},{threshold:.5});return r.current&&s.observe(r.current),()=>s.disconnect()},[t]),f.jsxs("span",{ref:r,children:[n.toLocaleString(),e]})}function IT({icon:t,title:e,desc:n,accent:i,delay:r=0}){return f.jsxs("div",{className:"fade-up",style:{animationDelay:`${r}s`,background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"12px",padding:"28px 24px",position:"relative",overflow:"hidden",transition:"border-color 0.3s, transform 0.3s"},onMouseEnter:s=>{s.currentTarget.style.borderColor=`${i}40`,s.currentTarget.style.transform="translateY(-4px)"},onMouseLeave:s=>{s.currentTarget.style.borderColor="rgba(255,255,255,0.07)",s.currentTarget.style.transform="translateY(0)"},children:[f.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg, transparent, ${i}50, transparent)`}}),f.jsx("div",{style:{width:"44px",height:"44px",background:`${i}15`,border:`1px solid ${i}30`,borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",marginBottom:"16px"},children:t}),f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"16px",color:"#fffae6",marginBottom:"8px"},children:e}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.42)",lineHeight:"1.7",margin:0},children:n})]})}function NT({selectedTemplate:t,onSelect:e}){var h,p,y;const n=qo(),[i,r]=ie.useState("all"),[s,o]=ie.useState(""),a=$a.filter(g=>i==="dark"?["cosmic","forge","aurora"].includes(g.id):i==="warm"?["ember"].includes(g.id):!0).filter(g=>{if(!s.trim())return!0;const x=s.toLowerCase();return g.name.toLowerCase().includes(x)||g.tag.toLowerCase().includes(x)||g.desc.toLowerCase().includes(x)||g.badge.toLowerCase().includes(x)}),l=[{icon:"⚡",title:"3D Interactive Cards",desc:"Every template features Three.js geometry, mouse-tracked perspective tilt, and particle fields that react to cursor movement.",accent:"#7b2fff"},{icon:"🔗",title:"LinkedIn Auto-Import",desc:"One-click OAuth flow imports your name, title, photo, skills, experience, education, and projects directly from LinkedIn.",accent:"#0A66C2"},{icon:"📄",title:"Resume Parser",desc:"Upload PDF or DOCX and watch AI extract every field — skills, experience, education, projects — into a structured portfolio instantly.",accent:"#00f5d4"},{icon:"🎨",title:"4 Stunning Templates",desc:"Cosmic dark glassmorphism, Ember volcanic editorial, Aurora arctic minimal, and Forge industrial grid — each production-ready.",accent:"#ff4d00"},{icon:"📱",title:"Responsive Preview",desc:"Switch between desktop, tablet, and mobile views in real-time. Every template is pixel-perfect across all screen sizes.",accent:"#eab308"},{icon:"🖨️",title:"One-Click Export",desc:"Export your portfolio as a print-ready PDF directly from the browser. No third-party tools, no watermarks, no accounts needed.",accent:"#06b6d4"}],c=[{value:4,suffix:"",label:"Templates"},{value:12,suffix:"+",label:"Fields Auto-Extracted"},{value:3,suffix:"",label:"Import Methods"},{value:100,suffix:"%",label:"Free to Use"}],d=[{n:"01",title:"Pick a Template",desc:"Choose from 4 immersive 3D-designed templates. Each has a unique visual identity.",color:"#7b2fff"},{n:"02",title:"Import or Fill",desc:"Connect LinkedIn, upload a resume, or fill the form manually. All fields auto-populate.",color:"#00f5d4"},{n:"03",title:"Preview & Export",desc:"See your portfolio live across all devices. Export as PDF with one click.",color:"#ff4d00"}];return f.jsxs("div",{style:{background:"#03020a",color:"#fffae6",overflowX:"hidden",fontFamily:"'Outfit',sans-serif"},children:[f.jsx("style",{children:`
        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 0;
        }
        .stat-item {
          text-align: center;
          padding: 12px 8px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-item:last-child { border-right: none; }
        .stat-number { font-size: 48px; }
        .stat-label  { font-size: 11px; }

        /* How it works */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 0;
          position: relative;
        }
        .steps-connector {
          position: absolute;
          top: 32px;
          left: calc(16.66% + 20px);
          right: calc(16.66% + 20px);
          height: 1px;
          background: linear-gradient(90deg,#7b2fff,#00f5d4,#ff4d00);
          z-index: 0;
          opacity: 0.3;
        }
        .step-card { padding: 0 24px; position: relative; z-index: 1; }

        /* Import methods */
        .import-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Footer */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        /* Navbar links */
        .nav-links { display: flex; align-items: center; gap: 32px; }

        /* Section padding */
        .section-pad { padding: 100px 48px; }
        .hero-pad { padding: 120px 48px 80px; }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2,1fr);
            gap: 0;
          }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 8px; }
          .stat-item:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.06); }
          .stat-item:last-child { border-bottom: none; }
          .stat-item:nth-last-child(2):nth-child(odd) { border-bottom: none; }
          .stat-number { font-size: 40px !important; }
          .stat-label  { font-size: 10px !important; }

          .steps-grid { grid-template-columns: 1fr; gap: 40px; }
          .steps-connector { display: none; }
          .step-card { padding: 0 16px; }

          .import-grid { grid-template-columns: 1fr; gap: 28px; }

          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }

          .nav-links { display: none; }

          .section-pad { padding: 64px 20px; }
          .hero-pad { padding: 100px 20px 60px; }
        }

        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2,1fr); }
          .stat-number { font-size: 36px !important; }
          .footer-grid { grid-template-columns: 1fr; }
          .section-pad { padding: 48px 16px; }
          .hero-pad { padding: 88px 16px 48px; }
        }

        @keyframes ping { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.5);opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
      `}),f.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:f.jsx(Bx,{color:"#7b2fff",count:90,speed:.35})}),f.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,47,255,0.14) 0%, transparent 65%)"}}),f.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",background:"radial-gradient(ellipse 50% 40% at 90% 90%, rgba(0,245,212,0.07) 0%, transparent 55%)"}}),f.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(3,2,10,0.85)",backdropFilter:"blur(24px)",borderBottom:"1px solid rgba(255,255,255,0.05)",height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(16px, 4vw, 48px)"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg,#7b2fff,#00f5d4)",clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{style:{color:"white",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",fontWeight:"700"},children:"P3"})}),f.jsxs("span",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"17px",letterSpacing:"-0.01em"},children:["Portfolio",f.jsx("span",{style:{color:"#7b2fff"},children:"3D"})]})]}),f.jsx("div",{className:"nav-links",children:["Features","Templates","How It Works"].map(g=>f.jsx("a",{href:`#${g.toLowerCase().replace(/ /g,"-")}`,style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.45)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:x=>x.target.style.color="#fffae6",onMouseLeave:x=>x.target.style.color="rgba(255,250,230,0.45)",children:g},g))}),f.jsx("button",{onClick:()=>t?n("/input"):document.getElementById("templates").scrollIntoView({behavior:"smooth"}),style:{padding:"9px 22px",background:"linear-gradient(135deg,#7b2fff,#5518d4)",border:"none",borderRadius:"6px",color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"13px",cursor:"pointer",letterSpacing:"0.03em"},children:t?"Continue →":"Get Started"})]}),f.jsx("section",{className:"hero-pad",style:{position:"relative",zIndex:1,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:f.jsxs("div",{style:{maxWidth:"800px"},children:[f.jsxs("div",{className:"fade-up",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",border:"1px solid rgba(123,47,255,0.35)",borderRadius:"24px",background:"rgba(123,47,255,0.08)",marginBottom:"28px"},children:[f.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00f5d4",boxShadow:"0 0 8px #00f5d4"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"#00f5d4",letterSpacing:"0.15em"},children:"PORTFOLIO GENERATOR · v2.0"})]}),f.jsxs("h1",{className:"fade-up",style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(48px,8vw,96px)",fontWeight:"800",lineHeight:"0.92",letterSpacing:"-0.04em",marginBottom:"24px",animationDelay:"0.1s"},children:[f.jsx("span",{style:{display:"block",color:"#fffae6"},children:"Your portfolio,"}),f.jsx("span",{style:{display:"block",background:"linear-gradient(135deg,#7b2fff 0%,#00f5d4 60%,#a78bfa 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"in another dimension."})]}),f.jsx("p",{className:"fade-up",style:{fontFamily:"'Outfit',sans-serif",fontSize:"18px",color:"rgba(255,250,230,0.45)",lineHeight:"1.75",maxWidth:"560px",margin:"0 auto 40px",animationDelay:"0.2s"},children:"Import from LinkedIn, upload a resume, or fill a form. Get a stunning 3D portfolio in under 2 minutes — no design skills needed."}),f.jsxs("div",{className:"fade-up",style:{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap",animationDelay:"0.3s"},children:[f.jsx("button",{onClick:()=>document.getElementById("templates").scrollIntoView({behavior:"smooth"}),style:{padding:"15px 36px",background:"linear-gradient(135deg,#7b2fff,#5518d4)",border:"none",borderRadius:"8px",color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"15px",cursor:"pointer",boxShadow:"0 8px 32px rgba(123,47,255,0.45)",transition:"all 0.2s",letterSpacing:"0.02em"},onMouseEnter:g=>{g.target.style.transform="translateY(-2px)",g.target.style.boxShadow="0 12px 40px rgba(123,47,255,0.6)"},onMouseLeave:g=>{g.target.style.transform="translateY(0)",g.target.style.boxShadow="0 8px 32px rgba(123,47,255,0.45)"},children:"Browse Templates ✦"}),f.jsx("button",{onClick:()=>document.getElementById("how-it-works").scrollIntoView({behavior:"smooth"}),style:{padding:"15px 36px",background:"transparent",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",color:"rgba(255,250,230,0.7)",fontFamily:"'Outfit',sans-serif",fontWeight:"500",fontSize:"15px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:g=>{g.target.style.borderColor="rgba(0,245,212,0.4)",g.target.style.color="#00f5d4"},onMouseLeave:g=>{g.target.style.borderColor="rgba(255,255,255,0.12)",g.target.style.color="rgba(255,250,230,0.7)"},children:"See How It Works"})]}),f.jsx("div",{className:"fade-up",style:{width:"220px",height:"220px",margin:"48px auto 0",animationDelay:"0.4s"},children:f.jsx(_v,{type:"icosahedron",color:"#7b2fff",size:1.2})})]})}),f.jsx("section",{style:{position:"relative",zIndex:1,borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"40px 24px"},children:f.jsx("div",{className:"stats-grid",style:{maxWidth:"1100px",margin:"0 auto"},children:c.map((g,x)=>f.jsxs("div",{className:"stat-item",children:[f.jsx("div",{className:"stat-number",style:{fontFamily:"'Syne',sans-serif",fontWeight:"800",background:"linear-gradient(135deg,#7b2fff,#00f5d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1,marginBottom:"8px"},children:f.jsx(DT,{target:g.value,suffix:g.suffix})}),f.jsx("div",{className:"stat-label",style:{fontFamily:"'JetBrains Mono',monospace",color:"rgba(255,250,230,0.35)",letterSpacing:"0.15em",textTransform:"uppercase"},children:g.label})]},x))})}),f.jsx("section",{id:"features",className:"section-pad",style:{position:"relative",zIndex:1},children:f.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[f.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[f.jsx("span",{className:"fade-up",style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",letterSpacing:"0.3em",color:"#00f5d4",textTransform:"uppercase",display:"block",marginBottom:"14px"},children:"Why Portfolio3D"}),f.jsxs("h2",{className:"fade-up",style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,5vw,56px)",fontWeight:"800",letterSpacing:"-0.03em",margin:"0 0 16px",animationDelay:"0.1s"},children:["Everything you need.",f.jsx("br",{}),f.jsx("span",{style:{background:"linear-gradient(135deg,#7b2fff,#00f5d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Nothing you don't."})]}),f.jsx("p",{className:"fade-up",style:{fontFamily:"'Outfit',sans-serif",fontSize:"16px",color:"rgba(255,250,230,0.4)",maxWidth:"480px",margin:"0 auto",lineHeight:"1.7",animationDelay:"0.2s"},children:"Built for developers and designers who want a portfolio that actually stands out."})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px"},children:l.map((g,x)=>f.jsx(IT,{...g,delay:x*.08},x))})]})}),f.jsx("section",{id:"templates",style:{position:"relative",zIndex:1,padding:"clamp(48px,8vw,80px) clamp(16px,4vw,48px) clamp(60px,8vw,100px)",background:"rgba(0,0,0,0.3)"},children:f.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[f.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[f.jsx("span",{className:"fade-up",style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",letterSpacing:"0.3em",color:"#7b2fff",textTransform:"uppercase",display:"block",marginBottom:"14px"},children:"Step 01"}),f.jsxs("h2",{className:"fade-up",style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,5vw,56px)",fontWeight:"800",letterSpacing:"-0.03em",margin:"0 0 16px",animationDelay:"0.1s"},children:["Choose your",f.jsx("br",{}),f.jsx("span",{style:{background:"linear-gradient(135deg,#7b2fff,#ff4d00)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"visual universe."})]}),f.jsx("p",{className:"fade-up",style:{fontFamily:"'Outfit',sans-serif",fontSize:"15px",color:"rgba(255,250,230,0.4)",maxWidth:"440px",margin:"0 auto 28px",lineHeight:"1.7",animationDelay:"0.15s"},children:"4 unique templates. Each 3D-interactive. Each production-ready. Each unforgettable."}),f.jsxs("div",{className:"fade-up",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",animationDelay:"0.2s"},children:[f.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"440px"},children:[f.jsx("div",{style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:"rgba(255,250,230,0.3)",fontSize:"15px",pointerEvents:"none"},children:"⌕"}),f.jsx("input",{type:"text",value:s,onChange:g=>o(g.target.value),placeholder:"Search templates… (e.g. dark, minimal, bold)",style:{width:"100%",padding:"12px 44px 12px 42px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",color:"#fffae6",fontFamily:"'Outfit',sans-serif",fontSize:"14px",outline:"none",transition:"border-color 0.2s, box-shadow 0.2s",boxSizing:"border-box"},onFocus:g=>{g.target.style.borderColor="rgba(123,47,255,0.6)",g.target.style.boxShadow="0 0 0 3px rgba(123,47,255,0.1)"},onBlur:g=>{g.target.style.borderColor="rgba(255,255,255,0.1)",g.target.style.boxShadow="none"}}),s&&f.jsx("button",{onClick:()=>o(""),style:{position:"absolute",right:"14px",top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"rgba(255,250,230,0.6)",fontSize:"11px",lineHeight:1},children:"✕"})]}),f.jsx("div",{style:{display:"inline-flex",gap:"4px",background:"rgba(255,255,255,0.04)",padding:"4px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.06)"},children:[{id:"all",label:"All"},{id:"dark",label:"Dark"},{id:"warm",label:"Warm"}].map(g=>f.jsx("button",{onClick:()=>r(g.id),style:{padding:"6px 16px",background:i===g.id?"rgba(123,47,255,0.3)":"transparent",border:`1px solid ${i===g.id?"rgba(123,47,255,0.5)":"transparent"}`,borderRadius:"5px",color:i===g.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",transition:"all 0.2s"},children:g.label},g.id))})]})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"22px",marginBottom:"48px",minHeight:a.length===0?"200px":"auto"},children:a.length>0?a.map((g,x)=>f.jsx("div",{className:"fade-up",style:{animationDelay:`${x*.1}s`},children:f.jsx(LT,{t:g,selected:t===g.id,onSelect:e})},g.id)):f.jsxs("div",{style:{gridColumn:"1/-1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 20px",textAlign:"center"},children:[f.jsx("div",{style:{fontSize:"48px",marginBottom:"16px",opacity:.3},children:"◎"}),f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontSize:"20px",fontWeight:"700",color:"rgba(255,250,230,0.4)",margin:"0 0 8px"},children:"No templates found"}),f.jsxs("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"14px",color:"rgba(255,250,230,0.25)",margin:"0 0 20px"},children:['No results for "',f.jsx("span",{style:{color:"#7b2fff"},children:s}),'"']}),f.jsx("button",{onClick:()=>{o(""),r("all")},style:{padding:"9px 24px",background:"rgba(123,47,255,0.15)",border:"1px solid rgba(123,47,255,0.3)",borderRadius:"6px",color:"#a78bfa",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer"},children:"Clear search"})]})}),f.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[f.jsx("button",{onClick:()=>t?n("/input"):null,disabled:!t,style:{padding:"16px 48px",background:t?"linear-gradient(135deg,#7b2fff,#5518d4)":"rgba(255,255,255,0.05)",border:t?"none":"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",color:t?"white":"rgba(255,250,230,0.25)",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"16px",cursor:t?"pointer":"not-allowed",transition:"all 0.2s",boxShadow:t?"0 8px 32px rgba(123,47,255,0.4)":"none",letterSpacing:"0.02em"},children:t?`Continue with ${(h=$a.find(g=>g.id===t))==null?void 0:h.name} →`:"Select a template above to continue"}),t&&f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"#00f5d4",letterSpacing:"0.1em"},children:["✓ ",(p=$a.find(g=>g.id===t))==null?void 0:p.name," — ",(y=$a.find(g=>g.id===t))==null?void 0:y.tag]})]})]})}),f.jsx("section",{id:"how-it-works",className:"section-pad",style:{position:"relative",zIndex:1},children:f.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",textAlign:"center"},children:[f.jsx("span",{className:"fade-up",style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",letterSpacing:"0.3em",color:"#ff4d00",textTransform:"uppercase",display:"block",marginBottom:"14px"},children:"Process"}),f.jsxs("h2",{className:"fade-up",style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,5vw,52px)",fontWeight:"800",letterSpacing:"-0.03em",margin:"0 0 60px",animationDelay:"0.1s"},children:["Three steps to ",f.jsx("span",{style:{background:"linear-gradient(135deg,#ff4d00,#ff9a3c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"launch."})]}),f.jsxs("div",{className:"steps-grid",children:[f.jsx("div",{className:"steps-connector"}),d.map((g,x)=>f.jsxs("div",{className:"fade-up step-card",style:{animationDelay:`${x*.15}s`},children:[f.jsxs("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:`${g.color}15`,border:`2px solid ${g.color}50`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",position:"relative"},children:[f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"18px",fontWeight:"700",color:g.color},children:g.n}),f.jsx("div",{style:{position:"absolute",inset:"-4px",borderRadius:"50%",border:`1px solid ${g.color}20`,animation:"ping 2s ease-out infinite",animationDelay:`${x*.4}s`}})]}),f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"18px",fontWeight:"700",color:"#fffae6",marginBottom:"10px"},children:g.title}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.4)",lineHeight:"1.7",margin:0},children:g.desc})]},x))]})]})}),f.jsx("section",{style:{position:"relative",zIndex:1,padding:"clamp(40px,6vw,64px) clamp(16px,4vw,48px)",background:"linear-gradient(135deg, rgba(123,47,255,0.08) 0%, rgba(0,245,212,0.04) 100%)",borderTop:"1px solid rgba(123,47,255,0.15)",borderBottom:"1px solid rgba(123,47,255,0.15)"},children:f.jsx("div",{className:"import-grid",children:[{icon:"🔗",color:"#0A66C2",title:"LinkedIn Import",desc:"Connect your LinkedIn profile. We auto-import everything in seconds with full OAuth simulation.",label:"One-click"},{icon:"📄",color:"#00f5d4",title:"Resume Upload",desc:"Drag and drop your PDF or DOCX. Our parser extracts name, skills, experience, education, and projects.",label:"PDF · DOCX"},{icon:"✏️",color:"#7b2fff",title:"Manual Form",desc:"Fill out the sectioned form at your own pace. Skills preview in real-time as you type.",label:"Full Control"}].map((g,x)=>f.jsxs("div",{className:"fade-up",style:{display:"flex",gap:"16px",alignItems:"flex-start",animationDelay:`${x*.1}s`},children:[f.jsx("div",{style:{width:"48px",height:"48px",background:`${g.color}18`,border:`1px solid ${g.color}35`,borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0},children:g.icon}),f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"},children:[f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"15px",fontWeight:"700",color:"#fffae6",margin:0},children:g.title}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",padding:"2px 8px",background:`${g.color}20`,border:`1px solid ${g.color}40`,borderRadius:"10px",color:g.color,letterSpacing:"0.1em"},children:g.label})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.38)",lineHeight:"1.65",margin:0},children:g.desc})]})]},x))})}),f.jsx("section",{className:"section-pad",style:{position:"relative",zIndex:1,textAlign:"center"},children:f.jsxs("div",{style:{maxWidth:"640px",margin:"0 auto"},children:[f.jsxs("h2",{className:"fade-up",style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(40px,6vw,68px)",fontWeight:"800",letterSpacing:"-0.04em",lineHeight:"0.92",marginBottom:"20px"},children:[f.jsx("span",{style:{color:"#fffae6"},children:"Ready to stand"}),f.jsx("br",{}),f.jsx("span",{style:{background:"linear-gradient(135deg,#7b2fff,#00f5d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"out from the crowd?"})]}),f.jsx("p",{className:"fade-up",style:{fontFamily:"'Outfit',sans-serif",fontSize:"16px",color:"rgba(255,250,230,0.4)",marginBottom:"36px",lineHeight:"1.7",animationDelay:"0.1s"},children:"Join thousands of developers who launched their career with a Portfolio3D portfolio."}),f.jsx("div",{className:"fade-up",style:{animationDelay:"0.2s"},children:f.jsx("button",{onClick:()=>document.getElementById("templates").scrollIntoView({behavior:"smooth"}),style:{padding:"18px 52px",background:"linear-gradient(135deg,#7b2fff,#5518d4)",border:"none",borderRadius:"8px",color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"17px",cursor:"pointer",boxShadow:"0 12px 48px rgba(123,47,255,0.5)",transition:"all 0.3s",letterSpacing:"0.02em"},onMouseEnter:g=>{g.target.style.transform="translateY(-3px) scale(1.02)",g.target.style.boxShadow="0 20px 60px rgba(123,47,255,0.65)"},onMouseLeave:g=>{g.target.style.transform="translateY(0) scale(1)",g.target.style.boxShadow="0 12px 48px rgba(123,47,255,0.5)"},children:"Build My Portfolio — Free ✦"})})]})}),f.jsx("footer",{style:{position:"relative",zIndex:1,borderTop:"1px solid rgba(255,255,255,0.06)",background:"rgba(0,0,0,0.4)",padding:"48px 24px 28px"},children:f.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[f.jsxs("div",{className:"footer-grid",children:[f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[f.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg,#7b2fff,#00f5d4)",clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)"}}),f.jsxs("span",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"18px"},children:["Portfolio",f.jsx("span",{style:{color:"#7b2fff"},children:"3D"})]})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.35)",lineHeight:"1.75",maxWidth:"260px",margin:"0 0 20px"},children:"The most immersive portfolio generator on the web. Built with React, Three.js, and a lot of love for craft."}),f.jsx("div",{style:{display:"flex",gap:"10px"},children:[{label:"in",color:"#0A66C2",href:"#"},{label:"gh",color:"#fffae6",href:"#"},{label:"tw",color:"#1DA1F2",href:"#"}].map((g,x)=>f.jsx("a",{href:g.href,style:{width:"32px",height:"32px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:g.color,textDecoration:"none",transition:"all 0.2s"},onMouseEnter:m=>{m.target.style.borderColor=g.color,m.target.style.background=`${g.color}15`},onMouseLeave:m=>{m.target.style.borderColor="rgba(255,255,255,0.1)",m.target.style.background="rgba(255,255,255,0.05)"},children:g.label},x))})]}),[{title:"Templates",links:["Cosmic","Ember","Aurora","Forge"]},{title:"Features",links:["LinkedIn Import","Resume Parser","3D Preview","PDF Export"]},{title:"Resources",links:["Documentation","GitHub","Changelog","Support"]}].map((g,x)=>f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:"'Syne',sans-serif",fontSize:"13px",fontWeight:"700",color:"#fffae6",marginBottom:"16px",letterSpacing:"0.05em"},children:g.title}),g.links.map(m=>f.jsx("a",{href:"#",style:{display:"block",fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.35)",textDecoration:"none",marginBottom:"10px",transition:"color 0.2s"},onMouseEnter:u=>u.target.style.color="#7b2fff",onMouseLeave:u=>u.target.style.color="rgba(255,250,230,0.35)",children:m},m))]},x))]}),f.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.08em"},children:["© ",new Date().getFullYear()," Portfolio3D · Built with React + Three.js"]}),f.jsx("div",{style:{display:"flex",gap:"24px"},children:["Privacy","Terms","MIT License"].map(g=>f.jsx("a",{href:"#",style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.2)",textDecoration:"none",letterSpacing:"0.05em",transition:"color 0.2s"},onMouseEnter:x=>x.target.style.color="#7b2fff",onMouseLeave:x=>x.target.style.color="rgba(255,250,230,0.2)",children:g},g))})]})]})})]})}function Sv(t,e){return function(){return t.apply(e,arguments)}}const{toString:UT}=Object.prototype,{getPrototypeOf:Qf}=Object,{iterator:fc,toStringTag:Ev}=Symbol,pc=(t=>e=>{const n=UT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qn=t=>(t=t.toLowerCase(),e=>pc(e)===t),hc=t=>e=>typeof e===t,{isArray:js}=Array,Is=hc("undefined");function ea(t){return t!==null&&!Is(t)&&t.constructor!==null&&!Is(t.constructor)&&un(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Mv=qn("ArrayBuffer");function FT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Mv(t.buffer),e}const OT=hc("string"),un=hc("function"),bv=hc("number"),ta=t=>t!==null&&typeof t=="object",kT=t=>t===!0||t===!1,ul=t=>{if(pc(t)!=="object")return!1;const e=Qf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Ev in t)&&!(fc in t)},BT=t=>{if(!ta(t)||ea(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},zT=qn("Date"),jT=qn("File"),HT=t=>!!(t&&typeof t.uri<"u"),VT=t=>t&&typeof t.getParts<"u",GT=qn("Blob"),WT=qn("FileList"),XT=t=>ta(t)&&un(t.pipe);function $T(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Zm=$T(),Qm=typeof Zm.FormData<"u"?Zm.FormData:void 0,qT=t=>{let e;return t&&(Qm&&t instanceof Qm||un(t.append)&&((e=pc(t))==="formdata"||e==="object"&&un(t.toString)&&t.toString()==="[object FormData]"))},YT=qn("URLSearchParams"),[JT,KT,ZT,QT]=["ReadableStream","Request","Response","Headers"].map(qn),eA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function na(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),js(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(ea(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function wv(t,e){if(ea(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Tv=t=>!Is(t)&&t!==vr;function Od(){const{caseless:t,skipUndefined:e}=Tv(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&wv(n,s)||s;ul(n[o])&&ul(r)?n[o]=Od(n[o],r):ul(r)?n[o]=Od({},r):js(r)?n[o]=r.slice():(!e||!Is(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&na(arguments[r],i);return n}const tA=(t,e,n,{allOwnKeys:i}={})=>(na(e,(r,s)=>{n&&un(r)?Object.defineProperty(t,s,{value:Sv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),nA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),iA=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rA=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Qf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},sA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},oA=t=>{if(!t)return null;if(js(t))return t;let e=t.length;if(!bv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},aA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Qf(Uint8Array)),lA=(t,e)=>{const i=(t&&t[fc]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},cA=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},uA=qn("HTMLFormElement"),dA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),eg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fA=qn("RegExp"),Av=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};na(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},pA=t=>{Av(t,(e,n)=>{if(un(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(un(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hA=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return js(t)?i(t):i(String(t).split(e)),n},mA=()=>{},gA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function xA(t){return!!(t&&un(t.append)&&t[Ev]==="FormData"&&t[fc])}const vA=t=>{const e=new Array(10),n=(i,r)=>{if(ta(i)){if(e.indexOf(i)>=0)return;if(ea(i))return i;if(!("toJSON"in i)){e[r]=i;const s=js(i)?[]:{};return na(i,(o,a)=>{const l=n(o,r+1);!Is(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},yA=qn("AsyncFunction"),_A=t=>t&&(ta(t)||un(t))&&un(t.then)&&un(t.catch),Rv=((t,e)=>t?setImmediate:e?((n,i)=>(vr.addEventListener("message",({source:r,data:s})=>{r===vr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),vr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",un(vr.postMessage)),SA=typeof queueMicrotask<"u"?queueMicrotask.bind(vr):typeof process<"u"&&process.nextTick||Rv,EA=t=>t!=null&&un(t[fc]),z={isArray:js,isArrayBuffer:Mv,isBuffer:ea,isFormData:qT,isArrayBufferView:FT,isString:OT,isNumber:bv,isBoolean:kT,isObject:ta,isPlainObject:ul,isEmptyObject:BT,isReadableStream:JT,isRequest:KT,isResponse:ZT,isHeaders:QT,isUndefined:Is,isDate:zT,isFile:jT,isReactNativeBlob:HT,isReactNative:VT,isBlob:GT,isRegExp:fA,isFunction:un,isStream:XT,isURLSearchParams:YT,isTypedArray:aA,isFileList:WT,forEach:na,merge:Od,extend:tA,trim:eA,stripBOM:nA,inherits:iA,toFlatObject:rA,kindOf:pc,kindOfTest:qn,endsWith:sA,toArray:oA,forEachEntry:lA,matchAll:cA,isHTMLForm:uA,hasOwnProperty:eg,hasOwnProp:eg,reduceDescriptors:Av,freezeMethods:pA,toObjectSet:hA,toCamelCase:dA,noop:mA,toFiniteNumber:gA,findKey:wv,global:vr,isContextDefined:Tv,isSpecCompliantForm:xA,toJSONObject:vA,isAsyncFn:yA,isThenable:_A,setImmediate:Rv,asap:SA,isIterable:EA};let Re=class Cv extends Error{static from(e,n,i,r,s,o){const a=new Cv(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}};Re.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Re.ERR_BAD_OPTION="ERR_BAD_OPTION";Re.ECONNABORTED="ECONNABORTED";Re.ETIMEDOUT="ETIMEDOUT";Re.ERR_NETWORK="ERR_NETWORK";Re.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Re.ERR_DEPRECATED="ERR_DEPRECATED";Re.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Re.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Re.ERR_CANCELED="ERR_CANCELED";Re.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Re.ERR_INVALID_URL="ERR_INVALID_URL";const MA=null;function kd(t){return z.isPlainObject(t)||z.isArray(t)}function Pv(t){return z.endsWith(t,"[]")?t.slice(0,-2):t}function Ru(t,e,n){return t?t.concat(e).map(function(r,s){return r=Pv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function bA(t){return z.isArray(t)&&!t.some(kd)}const wA=z.toFlatObject(z,{},null,function(e){return/^is[A-Z]/.test(e)});function mc(t,e,n){if(!z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,m){return!z.isUndefined(m[x])});const i=n.metaTokens,r=n.visitor||d,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(e);if(!z.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(z.isDate(g))return g.toISOString();if(z.isBoolean(g))return g.toString();if(!l&&z.isBlob(g))throw new Re("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(g)||z.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,x,m){let u=g;if(z.isReactNative(e)&&z.isReactNativeBlob(g))return e.append(Ru(m,x,s),c(g)),!1;if(g&&!m&&typeof g=="object"){if(z.endsWith(x,"{}"))x=i?x:x.slice(0,-2),g=JSON.stringify(g);else if(z.isArray(g)&&bA(g)||(z.isFileList(g)||z.endsWith(x,"[]"))&&(u=z.toArray(g)))return x=Pv(x),u.forEach(function(_,S){!(z.isUndefined(_)||_===null)&&e.append(o===!0?Ru([x],S,s):o===null?x:x+"[]",c(_))}),!1}return kd(g)?!0:(e.append(Ru(m,x,s),c(g)),!1)}const h=[],p=Object.assign(wA,{defaultVisitor:d,convertValue:c,isVisitable:kd});function y(g,x){if(!z.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));h.push(g),z.forEach(g,function(u,v){(!(z.isUndefined(u)||u===null)&&r.call(e,u,z.isString(v)?v.trim():v,x,p))===!0&&y(u,x?x.concat(v):[v])}),h.pop()}}if(!z.isObject(t))throw new TypeError("data must be an object");return y(t),e}function tg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ep(t,e){this._pairs=[],t&&mc(t,this,e)}const Lv=ep.prototype;Lv.append=function(e,n){this._pairs.push([e,n])};Lv.toString=function(e){const n=e?function(i){return e.call(this,i,tg)}:tg;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function TA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Dv(t,e,n){if(!e)return t;const i=n&&n.encode||TA,r=z.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=z.isURLSearchParams(e)?e.toString():new ep(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class ng{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){z.forEach(this.handlers,function(i){i!==null&&e(i)})}}const tp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},AA=typeof URLSearchParams<"u"?URLSearchParams:ep,RA=typeof FormData<"u"?FormData:null,CA=typeof Blob<"u"?Blob:null,PA={isBrowser:!0,classes:{URLSearchParams:AA,FormData:RA,Blob:CA},protocols:["http","https","file","blob","url","data"]},np=typeof window<"u"&&typeof document<"u",Bd=typeof navigator=="object"&&navigator||void 0,LA=np&&(!Bd||["ReactNative","NativeScript","NS"].indexOf(Bd.product)<0),DA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",IA=np&&window.location.href||"http://localhost",NA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:np,hasStandardBrowserEnv:LA,hasStandardBrowserWebWorkerEnv:DA,navigator:Bd,origin:IA},Symbol.toStringTag,{value:"Module"})),Gt={...NA,...PA};function UA(t,e){return mc(t,new Gt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Gt.isNode&&z.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function FA(t){return z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function OA(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Iv(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&z.isArray(r)?r.length:o,l?(z.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!z.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&z.isArray(r[o])&&(r[o]=OA(r[o])),!a)}if(z.isFormData(t)&&z.isFunction(t.entries)){const n={};return z.forEachEntry(t,(i,r)=>{e(FA(i),r,n,0)}),n}return null}function kA(t,e,n){if(z.isString(t))try{return(e||JSON.parse)(t),z.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ia={transitional:tp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=z.isObject(e);if(s&&z.isHTMLForm(e)&&(e=new FormData(e)),z.isFormData(e))return r?JSON.stringify(Iv(e)):e;if(z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)||z.isReadableStream(e))return e;if(z.isArrayBufferView(e))return e.buffer;if(z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return UA(e,this.formSerializer).toString();if((a=z.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return mc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),kA(e)):e}],transformResponse:[function(e){const n=this.transitional||ia.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(z.isResponse(e)||z.isReadableStream(e))return e;if(e&&z.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Re.from(a,Re.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],t=>{ia.headers[t]={}});const BA=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zA=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&BA[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},ig=Symbol("internals");function io(t){return t&&String(t).trim().toLowerCase()}function dl(t){return t===!1||t==null?t:z.isArray(t)?t.map(dl):String(t)}function jA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const HA=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Cu(t,e,n,i,r){if(z.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!z.isString(e)){if(z.isString(i))return e.indexOf(i)!==-1;if(z.isRegExp(i))return i.test(e)}}function VA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function GA(t,e){const n=z.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let dn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const d=io(l);if(!d)throw new Error("header name must be a non-empty string");const h=z.findKey(r,d);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=dl(a))}const o=(a,l)=>z.forEach(a,(c,d)=>s(c,d,l));if(z.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(z.isString(e)&&(e=e.trim())&&!HA(e))o(zA(e),n);else if(z.isObject(e)&&z.isIterable(e)){let a={},l,c;for(const d of e){if(!z.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(l=a[c])?z.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=io(e),e){const i=z.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return jA(r);if(z.isFunction(n))return n.call(this,r,i);if(z.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=io(e),e){const i=z.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Cu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=io(o),o){const a=z.findKey(i,o);a&&(!n||Cu(i,i[a],a,n))&&(delete i[a],r=!0)}}return z.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Cu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return z.forEach(this,(r,s)=>{const o=z.findKey(i,s);if(o){n[o]=dl(r),delete n[s];return}const a=e?VA(s):String(s).trim();a!==s&&delete n[s],n[a]=dl(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return z.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&z.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[ig]=this[ig]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=io(o);i[a]||(GA(r,o),i[a]=!0)}return z.isArray(e)?e.forEach(s):s(e),this}};dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(dn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});z.freezeMethods(dn);function Pu(t,e){const n=this||ia,i=e||n,r=dn.from(i.headers);let s=i.data;return z.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Nv(t){return!!(t&&t.__CANCEL__)}let ra=class extends Re{constructor(e,n,i){super(e??"canceled",Re.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Uv(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Re("Request failed with status code "+n.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function WA(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function XA(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=i[s];o||(o=c),n[r]=l,i[r]=c;let h=s,p=0;for(;h!==r;)p+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const y=d&&c-d;return y?Math.round(p*1e3/y):void 0}}function $A(t,e){let n=0,i=1e3/e,r,s;const o=(c,d=Date.now())=>{n=d,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const d=Date.now(),h=d-n;h>=i?o(c,d):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-h)))},()=>r&&o(r)]}const Vl=(t,e,n=3)=>{let i=0;const r=XA(50,250);return $A(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),d=o<=a;i=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},rg=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},sg=t=>(...e)=>z.asap(()=>t(...e)),qA=Gt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Gt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,YA=Gt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];z.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),z.isString(i)&&a.push(`path=${i}`),z.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),z.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function JA(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Fv(t,e,n){let i=!JA(e);return t&&(i||n==!1)?KA(t,e):e}const og=t=>t instanceof dn?{...t}:t;function Ir(t,e){e=e||{};const n={};function i(c,d,h,p){return z.isPlainObject(c)&&z.isPlainObject(d)?z.merge.call({caseless:p},c,d):z.isPlainObject(d)?z.merge({},d):z.isArray(d)?d.slice():d}function r(c,d,h,p){if(z.isUndefined(d)){if(!z.isUndefined(c))return i(void 0,c,h,p)}else return i(c,d,h,p)}function s(c,d){if(!z.isUndefined(d))return i(void 0,d)}function o(c,d){if(z.isUndefined(d)){if(!z.isUndefined(c))return i(void 0,c)}else return i(void 0,d)}function a(c,d,h){if(h in e)return i(c,d);if(h in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d,h)=>r(og(c),og(d),h,!0)};return z.forEach(Object.keys({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=z.hasOwnProp(l,d)?l[d]:r,p=h(t[d],e[d],d);z.isUndefined(p)&&h!==a||(n[d]=p)}),n}const Ov=t=>{const e=Ir({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=dn.from(o),e.url=Dv(Fv(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),z.isFormData(n)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(z.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([d,h])=>{c.includes(d.toLowerCase())&&o.set(d,h)})}}if(Gt.hasStandardBrowserEnv&&(i&&z.isFunction(i)&&(i=i(e)),i||i!==!1&&qA(e.url))){const l=r&&s&&YA.read(s);l&&o.set(r,l)}return e},ZA=typeof XMLHttpRequest<"u",QA=ZA&&function(t){return new Promise(function(n,i){const r=Ov(t);let s=r.data;const o=dn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,d,h,p,y,g;function x(){y&&y(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function u(){if(!m)return;const _=dn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:_,config:t,request:m};Uv(function(w){n(w),x()},function(w){i(w),x()},R),m=null}"onloadend"in m?m.onloadend=u:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(u)},m.onabort=function(){m&&(i(new Re("Request aborted",Re.ECONNABORTED,t,m)),m=null)},m.onerror=function(S){const R=S&&S.message?S.message:"Network Error",T=new Re(R,Re.ERR_NETWORK,t,m);T.event=S||null,i(T),m=null},m.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const R=r.transitional||tp;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new Re(S,R.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&z.forEach(o.toJSON(),function(S,R){m.setRequestHeader(R,S)}),z.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([p,g]=Vl(c,!0),m.addEventListener("progress",p)),l&&m.upload&&([h,y]=Vl(l),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",y)),(r.cancelToken||r.signal)&&(d=_=>{m&&(i(!_||_.type?new ra(null,t,m):_),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const v=WA(r.url);if(v&&Gt.protocols.indexOf(v)===-1){i(new Re("Unsupported protocol "+v+":",Re.ERR_BAD_REQUEST,t));return}m.send(s||null)})},eR=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const d=c instanceof Error?c:this.reason;i.abort(d instanceof Re?d:new ra(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new Re(`timeout of ${e}ms exceeded`,Re.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>z.asap(a),l}},tR=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},nR=async function*(t,e){for await(const n of iR(t))yield*tR(n,e)},iR=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},ag=(t,e,n,i)=>{const r=nR(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await r.next();if(c){a(),l.close();return}let h=d.byteLength;if(n){let p=s+=h;n(p)}l.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},lg=64*1024,{isFunction:qa}=z,rR=(({Request:t,Response:e})=>({Request:t,Response:e}))(z.global),{ReadableStream:cg,TextEncoder:ug}=z.global,dg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},sR=t=>{t=z.merge.call({skipUndefined:!0},rR,t);const{fetch:e,Request:n,Response:i}=t,r=e?qa(e):typeof fetch=="function",s=qa(n),o=qa(i);if(!r)return!1;const a=r&&qa(cg),l=r&&(typeof ug=="function"?(g=>x=>g.encode(x))(new ug):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=s&&a&&dg(()=>{let g=!1;const x=new n(Gt.origin,{body:new cg,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!x}),d=o&&a&&dg(()=>z.isReadableStream(new i("").body)),h={stream:d&&(g=>g.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!h[g]&&(h[g]=(x,m)=>{let u=x&&x[g];if(u)return u.call(x);throw new Re(`Response type '${g}' is not supported`,Re.ERR_NOT_SUPPORT,m)})});const p=async g=>{if(g==null)return 0;if(z.isBlob(g))return g.size;if(z.isSpecCompliantForm(g))return(await new n(Gt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(z.isArrayBufferView(g)||z.isArrayBuffer(g))return g.byteLength;if(z.isURLSearchParams(g)&&(g=g+""),z.isString(g))return(await l(g)).byteLength},y=async(g,x)=>{const m=z.toFiniteNumber(g.getContentLength());return m??p(x)};return async g=>{let{url:x,method:m,data:u,signal:v,cancelToken:_,timeout:S,onDownloadProgress:R,onUploadProgress:T,responseType:w,headers:P,withCredentials:E="same-origin",fetchOptions:b}=Ov(g),j=e||fetch;w=w?(w+"").toLowerCase():"text";let J=eR([v,_&&_.toAbortSignal()],S),te=null;const I=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let V;try{if(T&&c&&m!=="get"&&m!=="head"&&(V=await y(P,u))!==0){let Y=new n(x,{method:"POST",body:u,duplex:"half"}),Q;if(z.isFormData(u)&&(Q=Y.headers.get("content-type"))&&P.setContentType(Q),Y.body){const[$,K]=rg(V,Vl(sg(T)));u=ag(Y.body,lg,$,K)}}z.isString(E)||(E=E?"include":"omit");const X=s&&"credentials"in n.prototype,Z={...b,signal:J,method:m.toUpperCase(),headers:P.normalize().toJSON(),body:u,duplex:"half",credentials:X?E:void 0};te=s&&new n(x,Z);let D=await(s?j(te,b):j(x,Z));const k=d&&(w==="stream"||w==="response");if(d&&(R||k&&I)){const Y={};["status","statusText","headers"].forEach(ce=>{Y[ce]=D[ce]});const Q=z.toFiniteNumber(D.headers.get("content-length")),[$,K]=R&&rg(Q,Vl(sg(R),!0))||[];D=new i(ag(D.body,lg,$,()=>{K&&K(),I&&I()}),Y)}w=w||"text";let B=await h[z.findKey(h,w)||"text"](D,g);return!k&&I&&I(),await new Promise((Y,Q)=>{Uv(Y,Q,{data:B,headers:dn.from(D.headers),status:D.status,statusText:D.statusText,config:g,request:te})})}catch(X){throw I&&I(),X&&X.name==="TypeError"&&/Load failed|fetch/i.test(X.message)?Object.assign(new Re("Network Error",Re.ERR_NETWORK,g,te,X&&X.response),{cause:X.cause||X}):Re.from(X,X&&X.code,g,te,X&&X.response)}}},oR=new Map,kv=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,d=oR;for(;a--;)l=s[a],c=d.get(l),c===void 0&&d.set(l,c=a?new Map:sR(e)),d=c;return c};kv();const ip={http:MA,xhr:QA,fetch:{get:kv}};z.forEach(ip,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const fg=t=>`- ${t}`,aR=t=>z.isFunction(t)||t===null||t===!1;function lR(t,e){t=z.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!aR(i)&&(r=ip[(a=String(i)).toLowerCase()],r===void 0))throw new Re(`Unknown adapter '${a}'`);if(r&&(z.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(fg).join(`
`):" "+fg(o[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const Bv={getAdapter:lR,adapters:ip};function Lu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ra(null,t)}function pg(t){return Lu(t),t.headers=dn.from(t.headers),t.data=Pu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Bv.getAdapter(t.adapter||ia.adapter,t)(t).then(function(i){return Lu(t),i.data=Pu.call(t,t.transformResponse,i),i.headers=dn.from(i.headers),i},function(i){return Nv(i)||(Lu(t),i&&i.response&&(i.response.data=Pu.call(t,t.transformResponse,i.response),i.response.headers=dn.from(i.response.headers))),Promise.reject(i)})}const zv="1.13.6",gc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{gc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const hg={};gc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+zv+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Re(r(o," has been removed"+(n?" in "+n:"")),Re.ERR_DEPRECATED);return n&&!hg[o]&&(hg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};gc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function cR(t,e,n){if(typeof t!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Re("option "+s+" must be "+l,Re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Re("Unknown option "+s,Re.ERR_BAD_OPTION)}}const fl={assertOptions:cR,validators:gc},Tn=fl.validators;let wr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ng,response:new ng}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ir(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&fl.assertOptions(i,{silentJSONParsing:Tn.transitional(Tn.boolean),forcedJSONParsing:Tn.transitional(Tn.boolean),clarifyTimeoutError:Tn.transitional(Tn.boolean),legacyInterceptorReqResOrdering:Tn.transitional(Tn.boolean)},!1),r!=null&&(z.isFunction(r)?n.paramsSerializer={serialize:r}:fl.assertOptions(r,{encode:Tn.function,serialize:Tn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),fl.assertOptions(n,{baseUrl:Tn.spelling("baseURL"),withXsrfToken:Tn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&z.merge(s.common,s[n.method]);s&&z.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=dn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const m=n.transitional||tp;m&&m.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let d,h=0,p;if(!l){const g=[pg.bind(this),void 0];for(g.unshift(...a),g.push(...c),p=g.length,d=Promise.resolve(n);h<p;)d=d.then(g[h++],g[h++]);return d}p=a.length;let y=n;for(;h<p;){const g=a[h++],x=a[h++];try{y=g(y)}catch(m){x.call(this,m);break}}try{d=pg.call(this,y)}catch(g){return Promise.reject(g)}for(h=0,p=c.length;h<p;)d=d.then(c[h++],c[h++]);return d}getUri(e){e=Ir(this.defaults,e);const n=Fv(e.baseURL,e.url,e.allowAbsoluteUrls);return Dv(n,e.params,e.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(e){wr.prototype[e]=function(n,i){return this.request(Ir(i||{},{method:e,url:n,data:(i||{}).data}))}});z.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ir(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}wr.prototype[e]=n(),wr.prototype[e+"Form"]=n(!0)});let uR=class jv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new ra(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new jv(function(r){e=r}),cancel:e}}};function dR(t){return function(n){return t.apply(null,n)}}function fR(t){return z.isObject(t)&&t.isAxiosError===!0}const zd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(zd).forEach(([t,e])=>{zd[e]=t});function Hv(t){const e=new wr(t),n=Sv(wr.prototype.request,e);return z.extend(n,wr.prototype,e,{allOwnKeys:!0}),z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Hv(Ir(t,r))},n}const dt=Hv(ia);dt.Axios=wr;dt.CanceledError=ra;dt.CancelToken=uR;dt.isCancel=Nv;dt.VERSION=zv;dt.toFormData=mc;dt.AxiosError=Re;dt.Cancel=dt.CanceledError;dt.all=function(e){return Promise.all(e)};dt.spread=dR;dt.isAxiosError=fR;dt.mergeConfig=Ir;dt.AxiosHeaders=dn;dt.formToJSON=t=>Iv(z.isHTMLForm(t)?new FormData(t):t);dt.getAdapter=Bv.getAdapter;dt.HttpStatusCode=zd;dt.default=dt;const{Axios:LR,AxiosError:DR,CanceledError:IR,isCancel:NR,CancelToken:UR,VERSION:FR,all:OR,Cancel:kR,isAxiosError:BR,spread:zR,toFormData:jR,AxiosHeaders:HR,HttpStatusCode:VR,formToJSON:GR,getAdapter:WR,mergeConfig:XR}=dt;function pR({step:t=1}){const e=qo(),n=[{n:1,label:"Template",path:"/"},{n:2,label:"Details",path:"/input"},{n:3,label:"Preview",path:"/preview"}];return f.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(3,2,10,0.8)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 32px",height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsxs("button",{onClick:()=>e("/"),style:{display:"flex",alignItems:"center",gap:"10px",background:"none",border:"none",cursor:"pointer"},children:[f.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",display:"flex",alignItems:"center",justifyContent:"center",clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"},children:f.jsx("span",{style:{color:"white",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",fontWeight:"700"},children:"P3"})}),f.jsxs("span",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"16px",color:"#fffae6",letterSpacing:"0.02em"},children:["Portfolio",f.jsx("span",{style:{color:"#7b2fff"},children:"3D"})]})]}),f.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:n.map((i,r)=>f.jsxs(Wl.Fragment,{children:[f.jsxs("button",{onClick:()=>i.n<t&&e(i.path),style:{display:"flex",alignItems:"center",gap:"8px",background:"none",border:"none",cursor:i.n<=t?"pointer":"default",padding:"6px 12px",opacity:i.n>t?.35:1,transition:"opacity 0.2s"},children:[f.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontFamily:"'JetBrains Mono', monospace",fontWeight:"500",background:i.n<t?"rgba(0,245,212,0.15)":i.n===t?"rgba(123,47,255,0.3)":"rgba(255,255,255,0.06)",border:i.n<t?"1px solid rgba(0,245,212,0.4)":i.n===t?"1px solid rgba(123,47,255,0.6)":"1px solid rgba(255,255,255,0.1)",color:i.n<t?"#00f5d4":i.n===t?"#c59fff":"#fffae680"},children:i.n<t?"✓":i.n}),f.jsx("span",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",color:i.n===t?"#fffae6":"rgba(255,250,230,0.5)",fontWeight:i.n===t?"500":"400"},children:i.label})]}),r<n.length-1&&f.jsx("div",{style:{width:"20px",height:"1px",background:"rgba(255,255,255,0.1)"}})]},i.n))}),f.jsx("div",{style:{width:"140px"}})]})}function hR({onClose:t,onSuccess:e,accent:n="#7b2fff",accentAlt:i="#00f5d4"}){var R,T,w;const[r,s]=ie.useState("idle"),[o,a]=ie.useState([]),[l,c]=ie.useState(null),[d,h]=ie.useState(""),[p,y]=ie.useState(null);ie.useEffect(()=>{const P=E=>{E.key==="Escape"&&t()};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[t]);const g=async()=>{s("connecting");try{const P=await dt.get("/auth/linkedin"),{authUrl:E}=P.data,j=new URL(E).searchParams.get("code");await x(j)}catch{s("error"),h("Could not connect to LinkedIn. Make sure the server is running.")}},x=async P=>{try{const E=await dt.get(`/auth/linkedin/callback?code=${P}`);a(E.data.profiles),s("picking")}catch{s("error"),h("Failed to fetch LinkedIn profiles.")}},m=async P=>{c(P),s("fetching");try{const E=await dt.get(`/auth/linkedin/profile/${P}`);y(E.data.data),s("done")}catch{s("error"),h("Failed to load profile data.")}},u=()=>{e(p),t()},v={position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},_={background:"linear-gradient(135deg, #0d0b1a 0%, #0a0814 100%)",border:`1px solid ${n}30`,borderRadius:"16px",width:"100%",maxWidth:"520px",boxShadow:`0 0 0 1px ${n}15, 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${n}20`,overflow:"hidden",position:"relative"},S="#0A66C2";return f.jsx("div",{style:v,onClick:P=>P.target===P.currentTarget&&t(),children:f.jsxs("div",{style:_,children:[f.jsx("div",{style:{height:"2px",background:`linear-gradient(90deg, transparent, ${S}, ${i}, transparent)`}}),f.jsxs("div",{style:{padding:"24px 28px 20px",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[f.jsx("div",{style:{width:"36px",height:"36px",background:S,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx("span",{style:{color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"16px",lineHeight:1},children:"in"})}),f.jsxs("div",{children:[f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"15px",color:"#fffae6",margin:0},children:"Connect LinkedIn"}),f.jsxs("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.3)",margin:0,letterSpacing:"0.1em"},children:[r==="idle"&&"Authorize to import your profile",r==="connecting"&&"Authenticating…",r==="picking"&&`${o.length} profiles found`,r==="fetching"&&"Loading full profile…",r==="done"&&"Profile ready to apply",r==="error"&&"Connection failed"]})]})]}),f.jsx("button",{onClick:t,style:{background:"none",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"6px",color:"rgba(255,250,230,0.4)",width:"30px",height:"30px",cursor:"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},children:"✕"})]}),f.jsxs("div",{style:{padding:"24px 28px 28px"},children:[r==="idle"&&f.jsxs("div",{children:[f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.4)",marginBottom:"20px",lineHeight:"1.7"},children:"We'll import your profile data directly into your portfolio. No passwords stored."}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"24px"},children:[{icon:"◈",label:"Name & Title"},{icon:"◎",label:"Profile Photo"},{icon:"◉",label:"Work Experience"},{icon:"◐",label:"Education"},{icon:"◑",label:"Skills & Tools"},{icon:"→",label:"Contact Info"}].map((P,E)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"6px"},children:[f.jsx("span",{style:{color:i,fontSize:"12px",fontFamily:"monospace"},children:P.icon}),f.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.55)"},children:P.label})]},E))}),f.jsxs("button",{onClick:g,style:{width:"100%",padding:"14px",background:S,border:"none",borderRadius:"8px",color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"14px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",transition:"all 0.2s",letterSpacing:"0.02em"},children:[f.jsx("div",{style:{width:"18px",height:"18px",background:"rgba(255,255,255,0.2)",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{style:{fontWeight:"900",fontSize:"11px"},children:"in"})}),"Sign in with LinkedIn"]}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",textAlign:"center",marginTop:"12px",letterSpacing:"0.05em"},children:"DEMO MODE · No real OAuth credentials required"})]}),r==="connecting"&&f.jsxs("div",{style:{textAlign:"center",padding:"32px 0"},children:[f.jsxs("div",{style:{position:"relative",width:"60px",height:"60px",margin:"0 auto 20px"},children:[f.jsx("div",{style:{position:"absolute",inset:0,border:`2px solid ${S}30`,borderRadius:"50%"}}),f.jsx("div",{style:{position:"absolute",inset:0,border:"2px solid transparent",borderTopColor:S,borderRadius:"50%",animation:"spin 0.9s linear infinite"}}),f.jsx("div",{style:{position:"absolute",inset:"12px",background:S,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{style:{color:"white",fontWeight:"800",fontSize:"13px"},children:"in"})})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"14px",color:"rgba(255,250,230,0.6)"},children:"Connecting to LinkedIn…"}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.2)",marginTop:"6px"},children:"Authenticating your account"}),f.jsx("style",{children:"@keyframes spin{to{transform:rotate(360deg)}}"})]}),r==="picking"&&f.jsxs("div",{children:[f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.4)",marginBottom:"16px"},children:"Select which LinkedIn profile to import:"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:o.map(P=>f.jsxs("button",{onClick:()=>m(P.id),style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"10px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",width:"100%"},onMouseEnter:E=>{E.currentTarget.style.borderColor=`${S}60`,E.currentTarget.style.background=`${S}10`},onMouseLeave:E=>{E.currentTarget.style.borderColor="rgba(255,255,255,0.07)",E.currentTarget.style.background="rgba(255,255,255,0.02)"},children:[f.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${S}40`,flexShrink:0,background:"#1a1a2e"},children:f.jsx("img",{src:P.photo,alt:P.name,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{style:{flex:1,minWidth:0},children:[f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"14px",color:"#fffae6",margin:"0 0 2px"},children:P.name}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.4)",margin:"0 0 2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:P.title}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:`${i}60`,margin:0,letterSpacing:"0.05em"},children:P.location})]}),f.jsx("span",{style:{color:"rgba(255,250,230,0.2)",fontSize:"16px"},children:"→"})]},P.id))})]}),r==="fetching"&&f.jsxs("div",{style:{textAlign:"center",padding:"32px 0"},children:[f.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:[0,1,2,3,4].map(P=>f.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:P%2===0?n:i,margin:"0 4px",animation:`bounce 1s ease-in-out ${P*.15}s infinite`}},P))}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"14px",color:"rgba(255,250,230,0.6)"},children:"Fetching profile data…"}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.2)",marginTop:"6px"},children:"Experience · Skills · Projects · Education"}),f.jsx("style",{children:"@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}"})]}),r==="done"&&p&&f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"16px",background:"rgba(255,255,255,0.03)",border:`1px solid ${i}20`,borderRadius:"10px",marginBottom:"20px"},children:[f.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${i}50`,flexShrink:0},children:f.jsx("img",{src:p.photo,alt:p.name,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{children:[f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"15px",color:"#fffae6",margin:"0 0 2px"},children:p.name}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.4)",margin:0},children:p.title})]}),f.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 6px #22c55e"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#22c55e",letterSpacing:"0.1em"},children:"CONNECTED"})]})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"20px"},children:[{label:"Skills",value:`${(R=p.skills)==null?void 0:R.length} items`},{label:"Projects",value:`${(T=p.projects)==null?void 0:T.length} listed`},{label:"Experience",value:`${((w=p.experience)==null?void 0:w.split("@").length)-1} roles`},{label:"Education",value:"Imported"}].map((P,E)=>f.jsxs("div",{style:{padding:"10px 12px",background:"rgba(0,245,212,0.05)",border:"1px solid rgba(0,245,212,0.1)",borderRadius:"6px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.4)"},children:P.label}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:i},children:P.value})]},E))}),f.jsxs("div",{style:{display:"flex",gap:"10px"},children:[f.jsx("button",{onClick:()=>s("picking"),style:{flex:1,padding:"12px",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",color:"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",transition:"all 0.2s"},children:"← Pick Different"}),f.jsx("button",{onClick:u,style:{flex:2,padding:"12px",background:`linear-gradient(135deg, ${n}, ${i})`,border:"none",borderRadius:"8px",color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"14px",cursor:"pointer",transition:"all 0.2s",letterSpacing:"0.02em"},children:"Apply to Portfolio ✦"})]})]}),r==="error"&&f.jsxs("div",{style:{textAlign:"center",padding:"24px 0"},children:[f.jsx("div",{style:{fontSize:"40px",marginBottom:"16px"},children:"⚠"}),f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"15px",color:"#ff4d00",marginBottom:"8px"},children:"Connection Failed"}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.4)",marginBottom:"20px"},children:d}),f.jsx("button",{onClick:()=>s("idle"),style:{padding:"10px 24px",background:"transparent",border:`1px solid ${n}50`,borderRadius:"6px",color:n,fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer"},children:"Try Again"})]})]})]})})}function mR({userData:t,setUserData:e,selectedTemplate:n}){var $,K,ce,me,ge,Ie,Ne;const i=qo(),[r,s]=ie.useState("form"),[o,a]=ie.useState(!1),[l,c]=ie.useState(null),[d,h]=ie.useState(!1),[p,y]=ie.useState("basic"),[g,x]=ie.useState(!1),[m,u]=ie.useState(!1),[v,_]=ie.useState(!1),S=ie.useRef(),R=n==="ember"?"#ff4d00":n==="aurora"?"#06b6d4":n==="forge"?"#eab308":"#7b2fff",T=n==="ember"?"#ff9a3c":n==="aurora"?"#818cf8":n==="forge"?"#f97316":"#00f5d4",w="#0A66C2",[P,E]=ie.useState({name:t.name||"",title:t.title||"",about:t.about||"",photo:t.photo||"",skills:(t.skills||[]).join(", "),education:t.education||"",experience:t.experience||"",projects:($=t.projects)!=null&&$.length?t.projects:[{title:"",description:""}],email:((K=t.contact)==null?void 0:K.email)||"",phone:((ce=t.contact)==null?void 0:ce.phone)||"",linkedin:((me=t.contact)==null?void 0:me.linkedin)||"",github:((ge=t.contact)==null?void 0:ge.github)||"",website:((Ie=t.contact)==null?void 0:Ie.website)||""}),b=(U,Me)=>E(N=>({...N,[U]:Me})),j=(U,Me,N)=>{const tt=[...P.projects];tt[U]={...tt[U],[Me]:N},E(_e=>({..._e,projects:tt}))},J=[{id:"basic",label:"Identity",icon:"◈"},{id:"skills",label:"Skills",icon:"◎"},{id:"projects",label:"Projects",icon:"◉"},{id:"career",label:"Career",icon:"◐"},{id:"contact",label:"Contact",icon:"◑"}],te=(U,Me=!0)=>{var tt,_e,Te,xe,Je,Pe,C;const N={name:U.name||P.name,title:U.title||P.title,about:U.about||P.about,photo:U.photo||P.photo||"",skills:U.skills||P.skills.split(",").map(M=>M.trim()).filter(Boolean),education:U.education||P.education,experience:U.experience||P.experience,projects:(tt=U.projects)!=null&&tt.length?U.projects:P.projects.filter(M=>M.title),contact:U.contact||{email:P.email,phone:P.phone,linkedin:P.linkedin,github:P.github,website:P.website},_linkedinMeta:U._linkedinMeta||null};e(N),E({name:N.name,title:N.title,about:N.about,photo:N.photo,skills:Array.isArray(N.skills)?N.skills.join(", "):N.skills,education:N.education,experience:N.experience,projects:(_e=N.projects)!=null&&_e.length?N.projects:[{title:"",description:""}],email:((Te=N.contact)==null?void 0:Te.email)||"",phone:((xe=N.contact)==null?void 0:xe.phone)||"",linkedin:((Je=N.contact)==null?void 0:Je.linkedin)||"",github:((Pe=N.contact)==null?void 0:Pe.github)||"",website:((C=N.contact)==null?void 0:C.website)||""}),Me&&i("/preview")},I=U=>{U.preventDefault(),te({name:P.name,title:P.title,about:P.about,photo:P.photo,skills:P.skills.split(",").map(Me=>Me.trim()).filter(Boolean),education:P.education,experience:P.experience,projects:P.projects.filter(Me=>Me.title),contact:{email:P.email,phone:P.phone,linkedin:P.linkedin,github:P.github,website:P.website}})},V=async U=>{var tt,_e,Te,xe;if(!U)return;const Me=U.name.split(".").pop().toLowerCase();if(!["pdf","docx"].includes(Me)){c({type:"error",msg:"Only PDF or DOCX files."});return}a(!0),c(null);const N=new FormData;N.append("resume",U);try{const Pe=(await dt.post("/api/parse-resume",N)).data.data;te(Pe,!1),c({type:"success",msg:`Parsed! Found ${((tt=Pe.skills)==null?void 0:tt.length)||0} skills, ${((_e=Pe.projects)==null?void 0:_e.length)||0} projects.`})}catch(Je){c({type:"error",msg:((xe=(Te=Je.response)==null?void 0:Te.data)==null?void 0:xe.error)||"Parse failed."})}finally{a(!1)}},X=U=>{u(!0),te(U,!1),c({type:"linkedin",msg:`LinkedIn profile imported for ${U.name}`}),s("form"),y("basic"),_(!1)},Z=U=>{y(U),_(!1)},D={background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",color:"#fffae6",padding:"12px 16px",fontFamily:"'Outfit',sans-serif",fontSize:"14px",width:"100%",outline:"none",borderRadius:"4px",transition:"border-color 0.2s, box-shadow 0.2s"},k={fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",textTransform:"uppercase",color:`${T}80`,display:"block",marginBottom:"6px"},B=U=>{U.target.style.borderColor=`${T}60`,U.target.style.boxShadow=`0 0 0 3px ${T}08`},Y=U=>{U.target.style.borderColor="rgba(255,255,255,0.08)",U.target.style.boxShadow="none"},Q=((Ne=J.find(U=>U.id===p))==null?void 0:Ne.label)||"Identity";return f.jsxs("div",{style:{minHeight:"100vh",background:"#03020a",position:"relative",paddingTop:"64px"},children:[f.jsx("style",{children:`
        /* ── RESPONSIVE LAYOUT ── */
        .input-layout {
          position: relative; zIndex: 1;
          max-width: 1100px; margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
          padding: 40px 40px 80px;
        }
        .input-sidebar { display: block; }
        .mobile-top-bar { display: none; }
        .mobile-sidebar-drawer {
          display: none;
        }

        @media (max-width: 768px) {
          .input-layout {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 16px 16px 80px;
          }
          .input-sidebar { display: none; }
          .mobile-top-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            padding: 12px 16px;
            background: rgba(0,0,0,0.4);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            position: sticky;
            top: 64px;
            z-index: 50;
            backdrop-filter: blur(12px);
          }
          .mobile-sidebar-drawer {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 200;
          }
          .mobile-drawer-overlay {
            position: absolute; inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(4px);
          }
          .mobile-drawer-panel {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            background: #0d0b1a;
            border-top: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px 20px 0 0;
            padding: 24px 20px 40px;
            max-height: 80vh;
            overflow-y: auto;
          }
          .mobile-drawer-handle {
            width: 40px; height: 4px;
            background: rgba(255,255,255,0.15);
            border-radius: 2px;
            margin: 0 auto 20px;
          }
        }

        /* Section progress pills */
        .section-pills {
          display: flex; gap: 6px; flex-wrap: nowrap;
          overflow-x: auto; padding-bottom: 2px;
        }
        .section-pills::-webkit-scrollbar { display: none; }
        .section-pill {
          padding: 5px 12px;
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.05em;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid;
          transition: all 0.2s;
          background: none;
        }

        /* Form grid */
        .form-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .form-2col { grid-template-columns: 1fr; }
          .form-span2 { grid-column: 1 !important; }
        }
      `}),f.jsx(pR,{step:2}),g&&f.jsx(hR,{onClose:()=>x(!1),onSuccess:X,accent:R,accentAlt:T}),v&&f.jsxs("div",{className:"mobile-sidebar-drawer",children:[f.jsx("div",{className:"mobile-drawer-overlay",onClick:()=>_(!1)}),f.jsxs("div",{className:"mobile-drawer-panel",children:[f.jsx("div",{className:"mobile-drawer-handle"}),f.jsxs("button",{onClick:()=>{x(!0),_(!1)},style:{width:"100%",padding:"13px 14px",background:m?"rgba(10,102,194,0.15)":"rgba(10,102,194,0.1)",border:`1px solid ${m?"rgba(10,102,194,0.6)":"rgba(10,102,194,0.25)"}`,borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[f.jsx("div",{style:{width:"28px",height:"28px",background:w,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx("span",{style:{color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"13px"},children:"in"})}),f.jsxs("div",{style:{flex:1,textAlign:"left"},children:[f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:"600",fontSize:"13px",color:"#fffae6",margin:0},children:m?"LinkedIn Connected":"Import from LinkedIn"}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:m?"#22c55e":"rgba(255,250,230,0.3)",margin:0},children:m?"● SYNCED":"One-click import"})]}),m&&f.jsx("span",{style:{color:"#22c55e"},children:"✓"})]}),f.jsxs("div",{style:{marginBottom:"20px"},children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.15em",color:"rgba(255,250,230,0.3)",marginBottom:"8px",textTransform:"uppercase"},children:"Input Mode"}),f.jsx("div",{style:{display:"flex",gap:"8px"},children:[{id:"form",label:"✏ Manual"},{id:"upload",label:"⬆ Resume"}].map(U=>f.jsx("button",{onClick:()=>{s(U.id),_(!1)},style:{flex:1,padding:"10px",background:r===U.id?`${R}20`:"transparent",border:`1px solid ${r===U.id?R+"50":"rgba(255,255,255,0.08)"}`,color:r===U.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"6px",transition:"all 0.2s"},children:U.label},U.id))})]}),r==="form"&&f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.15em",color:"rgba(255,250,230,0.3)",marginBottom:"8px",textTransform:"uppercase"},children:"Jump to Section"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:J.map(U=>f.jsxs("button",{onClick:()=>Z(U.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"11px 14px",background:p===U.id?`${R}18`:"rgba(255,255,255,0.03)",border:`1px solid ${p===U.id?R+"40":"rgba(255,255,255,0.06)"}`,color:p===U.id?"#fffae6":"rgba(255,250,230,0.5)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"8px",transition:"all 0.2s"},children:[f.jsx("span",{style:{color:`${R}80`},children:U.icon}),U.label]},U.id))})]}),P.photo&&f.jsxs("div",{style:{marginTop:"16px",display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"8px"},children:[f.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${T}40`},children:f.jsx("img",{src:P.photo,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",color:"rgba(255,250,230,0.5)",margin:0},children:"Profile photo loaded"})]})]})]}),f.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,opacity:.3},children:f.jsx(Bx,{color:R,count:60,speed:.2})}),f.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,background:`radial-gradient(ellipse 70% 50% at 20% 30%, ${R}10 0%, transparent 60%)`}}),f.jsxs("div",{className:"mobile-top-bar",children:[f.jsxs("button",{onClick:()=>x(!0),style:{display:"flex",alignItems:"center",gap:"6px",padding:"7px 12px",background:m?"rgba(10,102,194,0.2)":"rgba(10,102,194,0.1)",border:`1px solid rgba(10,102,194,${m?"0.6":"0.3"})`,borderRadius:"6px",cursor:"pointer",flexShrink:0},children:[f.jsx("div",{style:{width:"18px",height:"18px",background:w,borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{style:{color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"10px"},children:"in"})}),f.jsx("span",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"11px",color:m?"#22c55e":"#fffae6",fontWeight:"600"},children:m?"✓ Synced":"LinkedIn"})]}),r==="form"&&f.jsx("div",{className:"section-pills",style:{flex:1},children:J.map(U=>f.jsxs("button",{className:"section-pill",onClick:()=>y(U.id),style:{borderColor:p===U.id?R:"rgba(255,255,255,0.1)",color:p===U.id?"#fffae6":"rgba(255,250,230,0.4)",background:p===U.id?`${R}20`:"transparent"},children:[U.icon," ",U.label]},U.id))}),r==="upload"&&f.jsx("button",{onClick:()=>s("form"),style:{padding:"7px 12px",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"6px",color:"rgba(255,250,230,0.5)",fontFamily:"'Outfit',sans-serif",fontSize:"11px",cursor:"pointer"},children:"✏ Form"}),r==="form"&&f.jsx("button",{onClick:()=>s("upload"),style:{padding:"7px 12px",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"6px",color:"rgba(255,250,230,0.5)",fontFamily:"'Outfit',sans-serif",fontSize:"11px",cursor:"pointer",flexShrink:0},children:"⬆ Resume"}),f.jsx("button",{onClick:()=>_(!0),style:{padding:"7px 10px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"6px",color:"rgba(255,250,230,0.6)",cursor:"pointer",fontSize:"14px",flexShrink:0},children:"☰"})]}),f.jsxs("div",{className:"input-layout",children:[f.jsxs("div",{className:"input-sidebar",children:[f.jsx("div",{style:{marginBottom:"20px"},children:f.jsxs("button",{onClick:()=>x(!0),style:{width:"100%",padding:"12px 14px",background:m?"rgba(10,102,194,0.15)":"rgba(10,102,194,0.08)",border:`1px solid ${m?"rgba(10,102,194,0.6)":"rgba(10,102,194,0.25)"}`,borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"10px",transition:"all 0.2s"},onMouseEnter:U=>U.currentTarget.style.background="rgba(10,102,194,0.2)",onMouseLeave:U=>U.currentTarget.style.background=m?"rgba(10,102,194,0.15)":"rgba(10,102,194,0.08)",children:[f.jsx("div",{style:{width:"28px",height:"28px",background:w,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx("span",{style:{color:"white",fontFamily:"'Syne',sans-serif",fontWeight:"800",fontSize:"13px"},children:"in"})}),f.jsxs("div",{style:{flex:1,textAlign:"left"},children:[f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontWeight:"600",fontSize:"12px",color:"#fffae6",margin:0},children:m?"LinkedIn Connected":"Import from LinkedIn"}),f.jsx("p",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:m?"#22c55e":"rgba(255,250,230,0.3)",margin:0,letterSpacing:"0.08em"},children:m?"● SYNCED":"One-click import"})]}),m&&f.jsx("span",{style:{color:"#22c55e",fontSize:"15px"},children:"✓"})]})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[f.jsx("div",{style:{flex:1,height:"1px",background:"rgba(255,255,255,0.06)"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.15em"},children:"OR"}),f.jsx("div",{style:{flex:1,height:"1px",background:"rgba(255,255,255,0.06)"}})]}),f.jsxs("div",{style:{marginBottom:"28px"},children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",color:"rgba(255,250,230,0.3)",marginBottom:"10px",textTransform:"uppercase"},children:"Input Mode"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{id:"form",label:"✏  Manual Form"},{id:"upload",label:"⬆  Upload Resume"}].map(U=>f.jsx("button",{onClick:()=>s(U.id),style:{padding:"10px 14px",textAlign:"left",background:r===U.id?`${R}18`:"transparent",border:`1px solid ${r===U.id?R+"50":"rgba(255,255,255,0.06)"}`,color:r===U.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"4px",transition:"all 0.2s"},children:U.label},U.id))})]}),r==="form"&&f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.2em",color:"rgba(255,250,230,0.3)",marginBottom:"10px",textTransform:"uppercase"},children:"Sections"}),J.map(U=>f.jsxs("button",{onClick:()=>y(U.id),style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"10px 14px",background:p===U.id?`${R}15`:"transparent",border:`1px solid ${p===U.id?R+"40":"transparent"}`,color:p===U.id?"#fffae6":"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer",borderRadius:"4px",marginBottom:"4px",textAlign:"left",transition:"all 0.2s"},children:[f.jsx("span",{style:{color:`${R}80`,fontFamily:"monospace",fontSize:"14px"},children:U.icon}),U.label]},U.id))]}),P.photo&&f.jsxs("div",{style:{marginTop:"20px",padding:"12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"8px"},children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.15em",marginBottom:"8px",textTransform:"uppercase"},children:"Profile Photo"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${T}40`},children:f.jsx("img",{src:P.photo,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{children:[f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"11px",color:"rgba(255,250,230,0.5)",margin:0},children:"Photo loaded"}),f.jsx("button",{onClick:()=>b("photo",""),style:{background:"none",border:"none",fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:"rgba(255,77,0,0.5)",cursor:"pointer",padding:0},children:"remove ✕"})]})]})]})]}),f.jsxs("div",{children:[f.jsxs("div",{style:{marginBottom:"24px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[f.jsx("div",{style:{width:"20px",height:"1px",background:T}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.3em",color:T,textTransform:"uppercase"},children:"Step 02 of 03"})]}),f.jsx("h1",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,5vw,36px)",fontWeight:"800",letterSpacing:"-0.02em",color:"#fffae6"},children:r==="form"?`${Q}`:"Upload & auto-fill"})]}),l&&f.jsxs("div",{style:{marginBottom:"20px",padding:"12px 16px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap",background:l.type==="linkedin"?"rgba(10,102,194,0.1)":l.type==="success"?"rgba(0,245,212,0.08)":"rgba(255,77,0,0.08)",border:`1px solid ${l.type==="linkedin"?"rgba(10,102,194,0.4)":l.type==="success"?"rgba(0,245,212,0.3)":"rgba(255,77,0,0.3)"}`,color:l.type==="linkedin"?"#60a5fa":l.type==="success"?"#00f5d4":"#ff6b3d",fontFamily:"'Outfit',sans-serif",fontSize:"13px"},children:[l.type==="linkedin"&&f.jsx("div",{style:{width:"20px",height:"20px",background:w,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"800",fontSize:"10px",color:"white",flexShrink:0},children:"in"}),f.jsx("span",{style:{flex:1},children:l.msg}),(l.type==="linkedin"||l.type==="success")&&f.jsx("button",{onClick:()=>i("/preview"),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:"700",fontSize:"12px",whiteSpace:"nowrap"},children:"Preview Portfolio →"})]}),r==="upload"&&f.jsxs("div",{children:[f.jsx("div",{onDragOver:U=>{U.preventDefault(),h(!0)},onDragLeave:()=>h(!1),onDrop:U=>{U.preventDefault(),h(!1),V(U.dataTransfer.files[0])},onClick:()=>S.current.click(),style:{border:`2px dashed ${d?T:R+"40"}`,borderRadius:"8px",padding:"clamp(32px,8vw,60px) 24px",textAlign:"center",cursor:"pointer",background:d?`${T}08`:`${R}05`,transition:"all 0.3s"},children:o?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[f.jsx("div",{style:{width:"40px",height:"40px",border:`2px solid ${R}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",color:"rgba(255,250,230,0.5)",fontSize:"14px",margin:0},children:"Parsing your resume…"}),f.jsx("style",{children:"@keyframes spin{to{transform:rotate(360deg)}}"})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{fontSize:"36px",marginBottom:"12px",opacity:.5},children:"⬆"}),f.jsx("p",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(16px,4vw,20px)",fontWeight:"700",color:"#fffae6",marginBottom:"8px",margin:"0 0 8px"},children:"Drop your resume here"}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",color:"rgba(255,250,230,0.3)",margin:0},children:"PDF or DOCX · max 10MB"})]})}),f.jsx("input",{ref:S,type:"file",accept:".pdf,.docx",style:{display:"none"},onChange:U=>V(U.target.files[0])}),f.jsx("div",{style:{marginTop:"16px",display:"flex",gap:"10px"},children:f.jsx("button",{onClick:()=>s("form"),style:{padding:"10px 20px",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"6px",color:"rgba(255,250,230,0.4)",fontFamily:"'Outfit',sans-serif",fontSize:"13px",cursor:"pointer"},children:"← Manual Form"})})]}),r==="form"&&f.jsxs("form",{onSubmit:I,children:[p==="basic"&&f.jsxs("div",{style:{display:"grid",gap:"16px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"14px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"8px"},children:[f.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${P.photo?T+"60":"rgba(255,255,255,0.1)"}`,background:"rgba(255,255,255,0.05)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:P.photo?f.jsx("img",{src:P.photo,alt:"Profile",style:{width:"100%",height:"100%",objectFit:"cover"}}):f.jsx("span",{style:{fontSize:"18px",opacity:.3},children:"◎"})}),f.jsxs("div",{style:{flex:1,minWidth:0},children:[f.jsx("label",{style:k,children:"Profile Photo URL"}),f.jsx("input",{style:D,value:P.photo,onChange:U=>b("photo",U.target.value),placeholder:"Auto-filled from LinkedIn, or paste a URL",onFocus:B,onBlur:Y})]})]}),f.jsxs("div",{className:"form-2col",children:[f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Full Name *"}),f.jsx("input",{style:D,value:P.name,onChange:U=>b("name",U.target.value),required:!0,placeholder:"Jordan Blake",onFocus:B,onBlur:Y})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Job Title *"}),f.jsx("input",{style:D,value:P.title,onChange:U=>b("title",U.target.value),required:!0,placeholder:"Full Stack Developer",onFocus:B,onBlur:Y})]})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"About / Summary"}),f.jsx("textarea",{style:{...D,resize:"none",minHeight:"100px",lineHeight:"1.7"},value:P.about,onChange:U=>b("about",U.target.value),placeholder:"A compelling story about who you are…",onFocus:B,onBlur:Y})]}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:f.jsx("button",{type:"button",onClick:()=>y("skills"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Skills →"})})]}),p==="skills"&&f.jsxs("div",{style:{display:"grid",gap:"16px"},children:[f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Skills (comma-separated)"}),f.jsx("textarea",{style:{...D,resize:"none",minHeight:"80px",lineHeight:"1.7"},value:P.skills,onChange:U=>b("skills",U.target.value),placeholder:"React, Three.js, Node.js, TypeScript, AWS…",onFocus:B,onBlur:Y})]}),P.skills&&f.jsxs("div",{children:[f.jsx("div",{style:k,children:"Live Preview"}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:P.skills.split(",").map(U=>U.trim()).filter(Boolean).map((U,Me)=>f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",padding:"4px 10px",borderRadius:"3px",border:`1px solid ${R}40`,color:`${R}cc`,background:`${R}10`},children:U},Me))})]}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:f.jsx("button",{type:"button",onClick:()=>y("projects"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Projects →"})})]}),p==="projects"&&f.jsxs("div",{style:{display:"grid",gap:"14px"},children:[P.projects.map((U,Me)=>f.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"8px",padding:"16px"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:`${R}80`,letterSpacing:"0.15em",textTransform:"uppercase"},children:["Project ",Me+1]}),P.projects.length>1&&f.jsx("button",{type:"button",onClick:()=>E(N=>({...N,projects:N.projects.filter((tt,_e)=>_e!==Me)})),style:{background:"none",border:"none",color:"rgba(255,77,0,0.5)",cursor:"pointer",fontSize:"12px",fontFamily:"'JetBrains Mono',monospace"},children:"remove ✕"})]}),f.jsx("input",{style:{...D,marginBottom:"10px"},placeholder:"Project title",value:U.title,onChange:N=>j(Me,"title",N.target.value),onFocus:B,onBlur:Y}),f.jsx("textarea",{style:{...D,resize:"none",minHeight:"56px"},placeholder:"Impact and description",value:U.description,onChange:N=>j(Me,"description",N.target.value),onFocus:B,onBlur:Y})]},Me)),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"8px"},children:[f.jsx("button",{type:"button",onClick:()=>E(U=>({...U,projects:[...U.projects,{title:"",description:""}]})),className:"btn-3d btn-neon",style:{borderRadius:"4px",padding:"10px 20px",fontSize:"12px"},children:"+ Add Project"}),f.jsx("button",{type:"button",onClick:()=>y("career"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Career →"})]})]}),p==="career"&&f.jsxs("div",{style:{display:"grid",gap:"16px"},children:[f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Work Experience"}),f.jsx("textarea",{style:{...D,resize:"none",minHeight:"120px",lineHeight:"1.8"},value:P.experience,onChange:U=>b("experience",U.target.value),placeholder:`Staff Engineer @ Vercel (2022–Present)
Senior Engineer @ Stripe (2020–2022)`,onFocus:B,onBlur:Y})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Education"}),f.jsx("textarea",{style:{...D,resize:"none",minHeight:"80px",lineHeight:"1.8"},value:P.education,onChange:U=>b("education",U.target.value),placeholder:"M.S. Computer Science — Stanford, 2019",onFocus:B,onBlur:Y})]}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:f.jsx("button",{type:"button",onClick:()=>y("contact"),className:"btn-3d btn-plasma",style:{borderRadius:"4px"},children:"Next: Contact →"})})]}),p==="contact"&&f.jsxs("div",{style:{display:"grid",gap:"14px"},children:[f.jsxs("div",{className:"form-2col",children:[f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Email"}),f.jsx("input",{style:D,type:"email",value:P.email,onChange:U=>b("email",U.target.value),placeholder:"you@domain.com",onFocus:B,onBlur:Y})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"Phone"}),f.jsx("input",{style:D,value:P.phone,onChange:U=>b("phone",U.target.value),placeholder:"+1 (555) 000-0000",onFocus:B,onBlur:Y})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"LinkedIn"}),f.jsx("input",{style:D,value:P.linkedin,onChange:U=>b("linkedin",U.target.value),placeholder:"https://linkedin.com/in/...",onFocus:B,onBlur:Y})]}),f.jsxs("div",{children:[f.jsx("label",{style:k,children:"GitHub"}),f.jsx("input",{style:D,value:P.github,onChange:U=>b("github",U.target.value),placeholder:"https://github.com/...",onFocus:B,onBlur:Y})]}),f.jsxs("div",{style:{gridColumn:"1 / -1"},children:[f.jsx("label",{style:k,children:"Website"}),f.jsx("input",{style:D,value:P.website,onChange:U=>b("website",U.target.value),placeholder:"https://yoursite.dev",onFocus:B,onBlur:Y})]})]}),f.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:"8px"},children:f.jsx("button",{type:"submit",className:"btn-3d btn-plasma",style:{borderRadius:"4px",fontSize:"15px",padding:"15px 36px"},children:"Generate Portfolio ✦"})})]})]})]})]})]})}function gR({children:t,style:e={},accentColor:n="#7b2fff"}){return f.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",backdropFilter:"blur(20px)",borderRadius:"12px",padding:"28px",position:"relative",overflow:"hidden",...e},children:[f.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg, transparent, ${n}60, transparent)`}}),t]})}function Ya({children:t}){return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[f.jsx("div",{style:{width:"16px",height:"1px",background:"linear-gradient(90deg, #7b2fff, #00f5d4)"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",letterSpacing:"0.25em",textTransform:"uppercase",color:"#00f5d4",opacity:.7},children:t})]})}function xR({skill:t}){return f.jsx("span",{style:{display:"inline-block",padding:"4px 12px",fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",letterSpacing:"0.03em",border:"1px solid rgba(123,47,255,0.35)",background:"rgba(123,47,255,0.08)",color:"rgba(123,47,255,0.9)",borderRadius:"3px",margin:"3px",transition:"all 0.2s"},children:t})}function vR({proj:t,index:e}){return f.jsxs("div",{style:{background:"rgba(123,47,255,0.04)",border:"1px solid rgba(123,47,255,0.15)",borderRadius:"10px",padding:"20px 22px",position:"relative",overflow:"hidden",transition:"border-color 0.3s"},children:[f.jsx("div",{style:{position:"absolute",top:0,left:0,bottom:0,width:"3px",background:"linear-gradient(180deg, #7b2fff, #00f5d4)"}}),f.jsxs("div",{style:{paddingLeft:"12px"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[f.jsx("h3",{style:{fontFamily:"'Syne', sans-serif",fontSize:"16px",fontWeight:"700",color:"#fffae6",letterSpacing:"-0.01em",margin:0},children:t.title}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(0,245,212,0.5)",border:"1px solid rgba(0,245,212,0.2)",padding:"2px 8px",borderRadius:"3px",flexShrink:0,marginLeft:"12px"},children:String(e+1).padStart(2,"0")})]}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:"rgba(255,250,230,0.45)",margin:0},children:t.description})]})]})}function yR({data:t}){var p,y,g;const{name:e="Your Name",title:n="Your Title",about:i="",photo:r="",skills:s=[],projects:o=[],education:a="",experience:l="",contact:c={}}=t||{},d=l?l.split(`
`).filter(Boolean):[],h=a?a.split(`
`).filter(Boolean):[];return f.jsxs("div",{style:{fontFamily:"'Outfit', sans-serif",background:"#03020a",minHeight:"100vh",color:"#fffae6",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:"-15%",right:"-10%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",bottom:"10%",left:"-10%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",top:"40%",right:"20%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(123,47,255,0.05) 0%, transparent 70%)",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,pointerEvents:"none",opacity:.5}}),f.jsxs("div",{style:{padding:"64px 64px 48px",borderBottom:"1px solid rgba(255,255,255,0.05)",position:"relative"},children:[f.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, rgba(123,47,255,0.4), rgba(0,245,212,0.4), transparent)"}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"40px",flexWrap:"wrap"},children:[f.jsxs("div",{style:{flex:1,minWidth:"300px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[r&&f.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",overflow:"hidden",border:"2px solid rgba(0,245,212,0.5)",flexShrink:0,boxShadow:"0 0 24px rgba(0,245,212,0.25)"},children:f.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 14px",border:"1px solid rgba(0,245,212,0.25)",borderRadius:"20px",background:"rgba(0,245,212,0.04)"},children:[f.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00f5d4",boxShadow:"0 0 8px #00f5d4, 0 0 16px rgba(0,245,212,0.5)"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",color:"#00f5d4",letterSpacing:"0.12em"},children:"Open to opportunities"})]})]}),f.jsx("h1",{style:{fontFamily:"'Syne', sans-serif",fontSize:"clamp(48px, 7vw, 88px)",fontWeight:"800",lineHeight:"0.9",letterSpacing:"-0.04em",marginBottom:"20px",background:"linear-gradient(135deg, #fffae6 0%, rgba(255,250,230,0.7) 40%, #a78bfa 80%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"24px"},children:[f.jsx("div",{style:{width:"24px",height:"2px",background:"linear-gradient(90deg, #7b2fff, #00f5d4)"}}),f.jsx("span",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"16px",fontWeight:"300",color:"#7b2fff",letterSpacing:"0.08em"},children:n})]}),i&&f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"15px",lineHeight:"1.8",color:"rgba(255,250,230,0.45)",maxWidth:"540px",fontWeight:"300"},children:i})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingTop:"8px"},children:[{icon:"✉",val:c.email,href:`mailto:${c.email}`},{icon:"◉",val:c.phone},{icon:"⬡",val:(p=c.linkedin)==null?void 0:p.replace("https://",""),href:c.linkedin},{icon:"◈",val:(y=c.github)==null?void 0:y.replace("https://",""),href:c.github},{icon:"◎",val:(g=c.website)==null?void 0:g.replace("https://",""),href:c.website}].filter(x=>x.val).map((x,m)=>f.jsxs("a",{href:x.href||"#",style:{display:"flex",alignItems:"center",gap:"10px",fontFamily:"'JetBrains Mono', monospace",fontSize:"12px",color:"rgba(255,250,230,0.4)",textDecoration:"none",padding:"6px 12px",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"4px",background:"rgba(255,255,255,0.02)",transition:"all 0.2s",whiteSpace:"nowrap"},children:[f.jsx("span",{style:{color:"#7b2fff",fontSize:"13px"},children:x.icon}),x.val.length>30?x.val.substring(0,28)+"…":x.val]},m))})]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.6fr",minHeight:"70vh"},children:[f.jsxs("div",{style:{borderRight:"1px solid rgba(255,255,255,0.04)",padding:"48px 40px"},children:[s.length>0&&f.jsxs("div",{style:{marginBottom:"44px"},children:[f.jsx(Ya,{children:"Tech Stack"}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",margin:"-3px"},children:s.map((x,m)=>f.jsx(xR,{skill:x},m))})]}),h.length>0&&f.jsxs("div",{style:{marginBottom:"44px"},children:[f.jsx(Ya,{children:"Education"}),f.jsxs("div",{style:{position:"relative",paddingLeft:"20px"},children:[f.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:"linear-gradient(180deg, #7b2fff, transparent)"}}),h.map((x,m)=>f.jsxs("div",{style:{marginBottom:"8px",position:"relative"},children:[m===0&&f.jsx("div",{style:{position:"absolute",left:"-23px",top:"6px",width:"7px",height:"7px",borderRadius:"50%",background:"#7b2fff",boxShadow:"0 0 8px #7b2fff"}}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:m===0||x.includes("—")||x.includes("B.")||x.includes("M.")?"rgba(255,250,230,0.8)":"rgba(255,250,230,0.4)",margin:0,fontWeight:m===0?"500":"400"},children:x})]},m))]})]}),d.length>0&&f.jsxs("div",{children:[f.jsx(Ya,{children:"Experience"}),f.jsxs("div",{style:{position:"relative",paddingLeft:"20px"},children:[f.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:"linear-gradient(180deg, #00f5d4, transparent)"}}),d.map((x,m)=>{const u=x.includes("@");return f.jsxs("div",{style:{marginBottom:"10px",position:"relative"},children:[u&&f.jsx("div",{style:{position:"absolute",left:"-23px",top:"6px",width:"7px",height:"7px",borderRadius:"50%",background:"#00f5d4",boxShadow:"0 0 8px #00f5d4"}}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",margin:0,color:u?"rgba(255,250,230,0.85)":"rgba(255,250,230,0.35)",fontWeight:u?"500":"400"},children:x})]},m)})]})]})]}),f.jsxs("div",{style:{padding:"48px 48px 48px 56px"},children:[o.length>0&&f.jsxs("div",{children:[f.jsx(Ya,{children:"Featured Projects"}),f.jsx("div",{style:{display:"grid",gap:"16px"},children:o.map((x,m)=>f.jsx(vR,{proj:x,index:m},m))})]}),f.jsx("div",{style:{marginTop:"48px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[{label:"Projects",value:o.length||"—"},{label:"Skills",value:s.length||"—"},{label:"Years Exp.",value:(()=>{const x=l==null?void 0:l.match(/\((\d{4})/);return x?`${new Date().getFullYear()-parseInt(x[1])}+`:"—"})()}].map((x,m)=>f.jsxs(gR,{style:{padding:"20px",textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:"28px",fontWeight:"800",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"4px"},children:x.value}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.15em",textTransform:"uppercase"},children:x.label})]},m))})]})]}),f.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.04)",padding:"20px 64px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[f.jsx("div",{style:{width:"20px",height:"20px",background:"linear-gradient(135deg, #7b2fff, #00f5d4)",clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.2em",textTransform:"uppercase"},children:[e," · Cosmic Portfolio"]})]}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,250,230,0.15)",letterSpacing:"0.1em"},children:new Date().getFullYear()})]})]})}function Ja({title:t,children:e}){return f.jsxs("div",{style:{marginBottom:"48px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[f.jsx("div",{style:{width:"4px",height:"28px",background:"linear-gradient(180deg, #ff4d00, #ff9a3c)",borderRadius:"2px"}}),f.jsx("h2",{style:{fontFamily:"'Syne', sans-serif",fontSize:"11px",fontWeight:"600",letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(255,154,60,0.7)",margin:0},children:t}),f.jsx("div",{style:{flex:1,height:"1px",background:"linear-gradient(90deg, rgba(255,77,0,0.3), transparent)"}})]}),e]})}function _R({proj:t,index:e}){const n=["#ff4d00","#ff6b1a","#ff8533","#ff9a4c"],i=n[e%n.length];return f.jsxs("div",{style:{background:"rgba(255,77,0,0.04)",border:"1px solid rgba(255,77,0,0.12)",borderRadius:"8px",padding:"22px 24px",position:"relative",overflow:"hidden",transition:"border-color 0.3s"},children:[f.jsx("div",{style:{position:"absolute",right:"16px",top:"12px",fontFamily:"'Syne', sans-serif",fontSize:"48px",fontWeight:"800",color:`${i}08`,lineHeight:1,letterSpacing:"-0.04em",userSelect:"none"},children:String(e+1).padStart(2,"0")}),f.jsx("h3",{style:{fontFamily:"'Syne', sans-serif",fontSize:"17px",fontWeight:"700",color:"#1a0800",letterSpacing:"-0.01em",marginBottom:"8px"},children:t.title}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:"rgba(26,8,0,0.55)",margin:0},children:t.description}),f.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg, ${i}, transparent)`,opacity:.6}})]})}function SR({data:t}){var p,y,g;const{name:e="Your Name",title:n="Your Title",about:i="",photo:r="",skills:s=[],projects:o=[],education:a="",experience:l="",contact:c={}}=t||{},d=l?l.split(`
`).filter(Boolean):[],h=a?a.split(`
`).filter(Boolean):[];return f.jsxs("div",{style:{fontFamily:"'Outfit', sans-serif",background:"#fdf8f4",minHeight:"100vh",color:"#1a0800",position:"relative",overflow:"hidden"},children:[f.jsxs("div",{style:{background:"linear-gradient(135deg, #0a0402 0%, #1a0800 50%, #0f0400 100%)",padding:"64px 64px 56px",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:"-40%",right:"-10%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,77,0,0.2) 0%, transparent 65%)",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",bottom:"-30%",left:"20%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,154,60,0.1) 0%, transparent 65%)",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"3px",background:"linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80, #ff9a3c, #ff4d00)"}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",position:"relative",zIndex:1},children:[f.jsxs("div",{style:{flex:1,minWidth:"280px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px"},children:[r&&f.jsx("div",{style:{width:"68px",height:"68px",borderRadius:"50%",overflow:"hidden",border:"3px solid rgba(255,77,0,0.5)",flexShrink:0,boxShadow:"0 0 24px rgba(255,77,0,0.3)"},children:f.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("div",{style:{width:"32px",height:"2px",background:"linear-gradient(90deg, #ff4d00, #ff9a3c)"}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",letterSpacing:"0.25em",color:"rgba(255,154,60,0.7)",textTransform:"uppercase"},children:"Portfolio"})]})]}),f.jsxs("h1",{style:{fontFamily:"'Syne', sans-serif",fontSize:"clamp(50px, 7.5vw, 96px)",fontWeight:"800",lineHeight:"0.88",letterSpacing:"-0.04em",marginBottom:"20px"},children:[f.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #fff5ee 0%, rgba(255,245,238,0.75) 60%, #ff9a3c 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.split(" ")[0]}),f.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #ff4d00 0%, #ff9a3c 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.split(" ").slice(1).join(" ")})]}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"17px",fontWeight:"300",color:"rgba(255,245,238,0.5)",letterSpacing:"0.04em"},children:n})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{icon:"→",val:c.email,href:`mailto:${c.email}`},{icon:"→",val:c.phone},{icon:"→",val:(p=c.github)==null?void 0:p.replace("https://",""),href:c.github},{icon:"→",val:(y=c.linkedin)==null?void 0:y.replace("https://",""),href:c.linkedin},{icon:"→",val:(g=c.website)==null?void 0:g.replace("https://",""),href:c.website}].filter(x=>x.val).map((x,m)=>f.jsxs("a",{href:x.href||"#",style:{display:"flex",alignItems:"center",gap:"8px",fontFamily:"'JetBrains Mono', monospace",fontSize:"12px",color:"rgba(255,245,238,0.35)",textDecoration:"none",transition:"color 0.2s"},children:[f.jsx("span",{style:{color:"#ff4d00",fontSize:"14px"},children:x.icon}),x.val.length>32?x.val.substring(0,30)+"…":x.val]},m))})]}),i&&f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"15px",lineHeight:"1.8",color:"rgba(255,245,238,0.4)",maxWidth:"600px",marginTop:"32px",fontWeight:"300",position:"relative",zIndex:1},children:i})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.5fr"},children:[f.jsxs("div",{style:{padding:"48px 40px",borderRight:"1px solid rgba(26,8,0,0.08)"},children:[s.length>0&&f.jsx(Ja,{title:"Skills & Tools",children:f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:s.map((x,m)=>f.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"11px",padding:"5px 12px",background:"rgba(255,77,0,0.06)",border:"1px solid rgba(255,77,0,0.18)",color:"rgba(255,77,0,0.8)",borderRadius:"3px"},children:x},m))})}),d.length>0&&f.jsx(Ja,{title:"Experience",children:d.map((x,m)=>{const u=x.includes("@");return f.jsxs("div",{style:{display:"flex",gap:"14px",marginBottom:"12px",alignItems:"flex-start"},children:[f.jsx("div",{style:{flexShrink:0,marginTop:"6px"},children:f.jsx("div",{style:{width:"7px",height:"7px",borderRadius:"50%",background:u?"#ff4d00":"rgba(255,77,0,0.15)",boxShadow:u?"0 0 6px rgba(255,77,0,0.6)":"none"}})}),f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:u?"#1a0800":"rgba(26,8,0,0.45)",fontWeight:u?"600":"400",margin:0},children:x})]},m)})}),h.length>0&&f.jsx(Ja,{title:"Education",children:h.map((x,m)=>f.jsx("div",{style:{paddingLeft:"16px",borderLeft:"2px solid rgba(255,77,0,0.2)",marginBottom:"10px"},children:f.jsx("p",{style:{fontFamily:"'Outfit', sans-serif",fontSize:"13px",lineHeight:"1.7",color:m===0?"#1a0800":"rgba(26,8,0,0.5)",fontWeight:m===0?"600":"400",margin:0},children:x})},m))})]}),f.jsxs("div",{style:{padding:"48px 48px 48px 48px"},children:[o.length>0&&f.jsx(Ja,{title:"Projects",children:f.jsx("div",{style:{display:"grid",gap:"14px"},children:o.map((x,m)=>f.jsx(_R,{proj:x,index:m},m))})}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(255,77,0,0.1)",border:"1px solid rgba(255,77,0,0.1)",borderRadius:"8px",overflow:"hidden"},children:[{n:o.length||0,l:"Projects"},{n:s.length||0,l:"Technologies"},{n:(()=>{const x=l==null?void 0:l.match(/\((\d{4})/);return x?`${new Date().getFullYear()-parseInt(x[1])}+`:"5+"})(),l:"Years"}].map((x,m)=>f.jsxs("div",{style:{background:"#fdf8f4",padding:"24px 20px",textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:"32px",fontWeight:"800",color:"#ff4d00",lineHeight:1,marginBottom:"6px"},children:x.n}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(26,8,0,0.4)",letterSpacing:"0.15em",textTransform:"uppercase"},children:x.l})]},m))})]})]}),f.jsxs("div",{style:{borderTop:"3px solid",borderImage:"linear-gradient(90deg, #ff4d00, #ff9a3c, #ffcc80) 1",padding:"20px 64px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#0a0402"},children:[f.jsx("span",{style:{fontFamily:"'Syne', sans-serif",fontSize:"14px",fontWeight:"700",background:"linear-gradient(90deg, #ff4d00, #ff9a3c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.01em"},children:e}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"10px",color:"rgba(255,245,238,0.2)",letterSpacing:"0.15em"},children:[new Date().getFullYear()," · EMBER PORTFOLIO"]})]})]})}function ER({data:t}){var g,x,m;const{name:e="Your Name",title:n="Your Title",about:i="",photo:r="",skills:s=[],projects:o=[],education:a="",experience:l="",contact:c={}}=t||{},d=l?l.split(`
`).filter(Boolean):[],h=a?a.split(`
`).filter(Boolean):[],p="#06b6d4",y="#818cf8";return f.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",background:"#020b14",minHeight:"100vh",color:"#e0f2fe",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:"-20%",left:"-10%",width:"70%",height:"60%",background:`radial-gradient(ellipse, ${p}12 0%, transparent 65%)`,pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",bottom:"-10%",right:"-5%",width:"50%",height:"50%",background:`radial-gradient(ellipse, ${y}10 0%, transparent 65%)`,pointerEvents:"none"}}),f.jsx("div",{style:{height:"2px",background:`linear-gradient(90deg, transparent 0%, ${p} 30%, ${y} 70%, transparent 100%)`}}),f.jsx("div",{style:{padding:"56px 64px 48px",borderBottom:"1px solid rgba(6,182,212,0.1)",position:"relative"},children:f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"40px",flexWrap:"wrap"},children:[f.jsxs("div",{style:{flex:1,minWidth:"300px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[r&&f.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",overflow:"hidden",border:`2px solid ${p}50`,flexShrink:0,boxShadow:`0 0 20px ${p}30`},children:f.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.25em",color:`${p}80`,textTransform:"uppercase",marginBottom:"4px"},children:"Portfolio"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:p,boxShadow:`0 0 8px ${p}`}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:`${p}90`,letterSpacing:"0.1em"},children:"Available for work"})]})]})]}),f.jsx("h1",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(44px,6.5vw,80px)",fontWeight:"800",lineHeight:"0.9",letterSpacing:"-0.04em",marginBottom:"16px",color:"#e0f2fe"},children:e}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[f.jsx("div",{style:{height:"1px",width:"28px",background:`linear-gradient(90deg,${p},${y})`}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"13px",color:p,letterSpacing:"0.06em"},children:n})]}),i&&f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"14px",lineHeight:"1.8",color:"rgba(224,242,254,0.45)",maxWidth:"520px",fontWeight:"300"},children:i})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[{k:"Email",v:c.email},{k:"Phone",v:c.phone},{k:"LinkedIn",v:(g=c.linkedin)==null?void 0:g.replace("https://","")},{k:"GitHub",v:(x=c.github)==null?void 0:x.replace("https://","")},{k:"Web",v:(m=c.website)==null?void 0:m.replace("https://","")}].filter(u=>u.v).map((u,v)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:`${p}50`,letterSpacing:"0.15em",textTransform:"uppercase",minWidth:"48px"},children:u.k}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(224,242,254,0.45)"},children:u.v.length>32?u.v.substring(0,30)+"…":u.v})]},v))})]})}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"300px 1fr"},children:[f.jsxs("div",{style:{borderRight:"1px solid rgba(6,182,212,0.08)",padding:"40px 36px"},children:[s.length>0&&f.jsxs("div",{style:{marginBottom:"36px"},children:[f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${p}60`,textTransform:"uppercase",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx("div",{style:{width:"12px",height:"1px",background:p}})," Skills"]}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:s.map((u,v)=>f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",padding:"4px 10px",background:`${p}0d`,border:`1px solid ${p}25`,color:`${p}cc`,borderRadius:"3px"},children:u},v))})]}),h.length>0&&f.jsxs("div",{style:{marginBottom:"36px"},children:[f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${y}60`,textTransform:"uppercase",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx("div",{style:{width:"12px",height:"1px",background:y}})," Education"]}),h.map((u,v)=>f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",lineHeight:"1.7",color:v===0?"rgba(224,242,254,0.8)":"rgba(224,242,254,0.35)",margin:"0 0 4px",fontWeight:v===0?"500":"400"},children:u},v))]}),d.length>0&&f.jsxs("div",{children:[f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${p}60`,textTransform:"uppercase",marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx("div",{style:{width:"12px",height:"1px",background:p}})," Experience"]}),f.jsxs("div",{style:{position:"relative",paddingLeft:"16px"},children:[f.jsx("div",{style:{position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:`linear-gradient(180deg,${p},${y},transparent)`}}),d.map((u,v)=>{const _=u.includes("@");return f.jsxs("div",{style:{marginBottom:"10px",position:"relative"},children:[_&&f.jsx("div",{style:{position:"absolute",left:"-19px",top:"6px",width:"6px",height:"6px",borderRadius:"50%",background:p,boxShadow:`0 0 6px ${p}`}}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",lineHeight:"1.7",color:_?"rgba(224,242,254,0.85)":"rgba(224,242,254,0.35)",margin:0,fontWeight:_?"500":"400"},children:u})]},v)})]})]})]}),f.jsxs("div",{style:{padding:"40px 48px"},children:[o.length>0&&f.jsxs("div",{children:[f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${y}60`,textTransform:"uppercase",marginBottom:"20px",display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx("div",{style:{width:"12px",height:"1px",background:y}})," Projects"]}),f.jsx("div",{style:{display:"grid",gap:"14px"},children:o.map((u,v)=>f.jsxs("div",{style:{background:"rgba(6,182,212,0.04)",border:"1px solid rgba(6,182,212,0.1)",borderRadius:"8px",padding:"18px 20px",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:0,left:0,width:"3px",height:"100%",background:`linear-gradient(180deg,${p},${y})`}}),f.jsxs("div",{style:{paddingLeft:"10px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"15px",fontWeight:"700",color:"#e0f2fe",margin:"0 0 6px",letterSpacing:"-0.01em"},children:u.title}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:`${p}50`,marginLeft:"12px",flexShrink:0},children:["0",v+1]})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",lineHeight:"1.7",color:"rgba(224,242,254,0.4)",margin:"0 0 0 10px"},children:u.description})]},v))})]}),f.jsx("div",{style:{marginTop:"40px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"},children:[{n:o.length||0,l:"Projects"},{n:s.length||0,l:"Skills"},{n:(()=>{const u=l==null?void 0:l.match(/\((\d{4})/);return u?`${new Date().getFullYear()-parseInt(u[1])}+`:"—"})(),l:"Years"}].map((u,v)=>f.jsxs("div",{style:{background:"rgba(6,182,212,0.05)",border:"1px solid rgba(6,182,212,0.12)",borderRadius:"8px",padding:"16px",textAlign:"center"},children:[f.jsx("div",{style:{fontFamily:"'Syne',sans-serif",fontSize:"28px",fontWeight:"800",background:`linear-gradient(135deg,${p},${y})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1,marginBottom:"4px"},children:u.n}),f.jsx("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:"rgba(224,242,254,0.25)",letterSpacing:"0.2em",textTransform:"uppercase"},children:u.l})]},v))})]})]}),f.jsxs("div",{style:{borderTop:"1px solid rgba(6,182,212,0.08)",padding:"20px 64px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(224,242,254,0.18)",letterSpacing:"0.15em"},children:[e," · Aurora"]}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(224,242,254,0.18)"},children:new Date().getFullYear()})]})]})}function MR({data:t}){var m,u;const{name:e="Your Name",title:n="Your Title",about:i="",photo:r="",skills:s=[],projects:o=[],education:a="",experience:l="",contact:c={}}=t||{},d=l?l.split(`
`).filter(Boolean):[],h=a?a.split(`
`).filter(Boolean):[],p="#eab308",y="#f97316",[g,...x]=e.split(" ");return f.jsxs("div",{style:{fontFamily:"'Outfit',sans-serif",background:"#080701",minHeight:"100vh",color:"#fafaf0"},children:[f.jsx("div",{style:{height:"4px",background:`repeating-linear-gradient(90deg,${p} 0px,${p} 20px,transparent 20px,transparent 24px)`}}),f.jsxs("div",{style:{padding:"52px 64px 44px",borderBottom:"1px solid rgba(234,179,8,0.15)",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(234,179,8,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.03) 1px, transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none"}}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"40px",flexWrap:"wrap",position:"relative",zIndex:1},children:[f.jsxs("div",{style:{flex:1,minWidth:"280px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px"},children:[r&&f.jsx("div",{style:{width:"64px",height:"64px",overflow:"hidden",border:`3px solid ${p}`,flexShrink:0},children:f.jsx("img",{src:r,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}})}),f.jsxs("div",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.25em",color:`${p}70`,textTransform:"uppercase"},children:["[ PORTFOLIO · ",new Date().getFullYear()," ]"]})]}),f.jsxs("div",{style:{marginBottom:"14px"},children:[f.jsx("div",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(56px,9vw,104px)",fontWeight:"800",lineHeight:"0.85",letterSpacing:"-0.05em",color:"#fafaf0",display:"inline"},children:g}),x.length>0&&f.jsx("div",{style:{fontFamily:"'Syne',sans-serif",fontSize:"clamp(56px,9vw,104px)",fontWeight:"800",lineHeight:"0.85",letterSpacing:"-0.05em",background:`linear-gradient(135deg,${p},${y})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:x.join(" ")})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"},children:[f.jsx("div",{style:{height:"3px",width:"40px",background:`linear-gradient(90deg,${p},${y})`}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"13px",color:`${p}cc`,letterSpacing:"0.08em",textTransform:"uppercase"},children:n})]}),i&&f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"14px",lineHeight:"1.8",color:"rgba(250,250,240,0.45)",maxWidth:"540px",fontWeight:"300"},children:i})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",gap:"6px 14px",alignContent:"start"},children:[{k:"EMAIL",v:c.email},{k:"PHONE",v:c.phone},{k:"GITHUB",v:(m=c.github)==null?void 0:m.replace("https://","")},{k:"WEB",v:(u=c.website)==null?void 0:u.replace("https://","")}].filter(v=>v.v).map((v,_)=>f.jsxs(Wl.Fragment,{children:[f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:`${p}60`,letterSpacing:"0.2em"},children:v.k}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(250,250,240,0.45)"},children:v.v.length>28?v.v.substring(0,26)+"…":v.v})]},_))})]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1px 1.4fr 1px 1.4fr"},children:[f.jsxs("div",{style:{padding:"36px 32px"},children:[s.length>0&&f.jsxs("div",{style:{marginBottom:"32px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:[f.jsx("div",{style:{width:"16px",height:"3px",background:p}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${p}80`,textTransform:"uppercase"},children:"Skills"})]}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px"},children:s.map((v,_)=>f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",padding:"3px 9px",background:`${p}10`,border:`1px solid ${p}30`,color:`${p}cc`},children:v},_))})]}),h.length>0&&f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:[f.jsx("div",{style:{width:"16px",height:"3px",background:y}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${y}80`,textTransform:"uppercase"},children:"Education"})]}),h.map((v,_)=>f.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[f.jsx("div",{style:{width:"3px",background:`${p}${_===0?"cc":"40"}`,flexShrink:0,borderRadius:"1px"}}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",lineHeight:"1.7",color:_===0?"rgba(250,250,240,0.8)":"rgba(250,250,240,0.35)",margin:0,fontWeight:_===0?"500":"400"},children:v})]},_))]})]}),f.jsx("div",{style:{background:`repeating-linear-gradient(180deg,${p}30 0px,${p}30 4px,transparent 4px,transparent 8px)`}}),f.jsxs("div",{style:{padding:"36px 32px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[f.jsx("div",{style:{width:"16px",height:"3px",background:p}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${p}80`,textTransform:"uppercase"},children:"Experience"})]}),d.map((v,_)=>{const S=v.includes("@");return f.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"10px",alignItems:"flex-start"},children:[f.jsx("div",{style:{width:"8px",height:"8px",background:S?p:"transparent",border:`1px solid ${S?p:`${p}40`}`,flexShrink:0,marginTop:"5px"}}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"13px",lineHeight:"1.7",color:S?"rgba(250,250,240,0.85)":"rgba(250,250,240,0.35)",margin:0,fontWeight:S?"600":"400"},children:v})]},_)})]}),f.jsx("div",{style:{background:`repeating-linear-gradient(180deg,${p}30 0px,${p}30 4px,transparent 4px,transparent 8px)`}}),f.jsxs("div",{style:{padding:"36px 32px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[f.jsx("div",{style:{width:"16px",height:"3px",background:y}}),f.jsx("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.3em",color:`${y}80`,textTransform:"uppercase"},children:"Projects"})]}),o.map((v,_)=>f.jsxs("div",{style:{marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px solid rgba(234,179,8,0.08)"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[f.jsx("h3",{style:{fontFamily:"'Syne',sans-serif",fontSize:"14px",fontWeight:"700",color:"#fafaf0",margin:0},children:v.title}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"18px",fontWeight:"900",color:`${p}15`,lineHeight:1},children:["0",_+1]})]}),f.jsx("p",{style:{fontFamily:"'Outfit',sans-serif",fontSize:"12px",lineHeight:"1.7",color:"rgba(250,250,240,0.38)",margin:0},children:v.description})]},_))]})]}),f.jsxs("div",{style:{borderTop:"3px solid",borderImage:`linear-gradient(90deg,${p},${y}) 1`,padding:"16px 64px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(0,0,0,0.3)"},children:[f.jsx("span",{style:{fontFamily:"'Syne',sans-serif",fontSize:"16px",fontWeight:"800",background:`linear-gradient(90deg,${p},${y})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},children:e}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:`${p}40`,letterSpacing:"0.2em"},children:["FORGE · ",new Date().getFullYear()]})]})]})}function bR({userData:t,selectedTemplate:e}){var l;const n=qo(),[i,r]=ie.useState("desktop"),s=[{id:"desktop",label:"Desktop",width:"100%"},{id:"tablet",label:"Tablet",width:"768px"},{id:"mobile",label:"Mobile",width:"390px"}],o=e==="ember"?"#ff4d00":e==="aurora"?"#06b6d4":e==="forge"?"#eab308":"#7b2fff",a=e==="ember"?"#ff9a3c":e==="aurora"?"#818cf8":e==="forge"?"#f97316":"#00f5d4";return f.jsxs("div",{style:{minHeight:"100vh",background:"#0a0a0f",display:"flex",flexDirection:"column"},children:[f.jsxs("div",{style:{background:"rgba(3,2,10,0.95)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 24px",height:"56px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,flexShrink:0},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[f.jsx("button",{onClick:()=>n("/input"),style:{background:"none",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,250,230,0.5)",padding:"6px 14px",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",cursor:"pointer",letterSpacing:"0.1em",borderRadius:"4px",transition:"all 0.2s"},children:"← Edit"}),f.jsx("div",{style:{width:"1px",height:"24px",background:"rgba(255,255,255,0.08)"}}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"rgba(255,250,230,0.3)",letterSpacing:"0.1em"},children:["LIVE PREVIEW · ",f.jsx("span",{style:{color:a},children:e==="cosmic"?"COSMIC":e==="ember"?"EMBER":e==="aurora"?"AURORA":"FORGE"})]})]}),f.jsx("div",{style:{display:"flex",gap:"2px",background:"rgba(255,255,255,0.04)",padding:"3px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.06)"},children:s.map(c=>f.jsx("button",{onClick:()=>r(c.id),style:{padding:"5px 16px",background:i===c.id?`${o}25`:"transparent",border:`1px solid ${i===c.id?o+"50":"transparent"}`,color:i===c.id?"#fffae6":"rgba(255,250,230,0.35)",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",letterSpacing:"0.1em",cursor:"pointer",borderRadius:"4px",transition:"all 0.2s",textTransform:"uppercase"},children:c.label},c.id))}),f.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[f.jsx("button",{onClick:()=>n("/"),style:{background:"none",border:"1px solid rgba(255,255,255,0.08)",color:"rgba(255,250,230,0.4)",padding:"6px 14px",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",cursor:"pointer",letterSpacing:"0.08em",borderRadius:"4px"},children:"New Template"}),f.jsx("button",{onClick:()=>window.print(),style:{background:`linear-gradient(135deg, ${o}, ${a})`,border:"none",color:"white",padding:"7px 20px",fontFamily:"'Syne',sans-serif",fontWeight:"600",fontSize:"12px",cursor:"pointer",letterSpacing:"0.08em",borderRadius:"4px",textTransform:"uppercase"},children:"Export PDF"})]})]}),f.jsxs("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"32px 24px",background:"#0a0a0f",overflowY:"auto"},children:[f.jsx("div",{style:{position:"fixed",inset:0,background:`radial-gradient(ellipse 60% 40% at 50% 20%, ${o}08 0%, transparent 60%)`,pointerEvents:"none"}}),f.jsx("div",{style:{width:((l=s.find(c=>c.id===i))==null?void 0:l.width)||"100%",maxWidth:"100%",background:"white",boxShadow:`0 0 0 1px rgba(255,255,255,0.1), 0 32px 80px rgba(0,0,0,0.8), 0 0 60px ${o}15`,transition:"width 0.4s cubic-bezier(0.23,1,0.32,1)",minHeight:"90vh",position:"relative",zIndex:1,borderRadius:i==="desktop"?"0":"12px",overflow:"hidden"},children:e==="cosmic"?f.jsx(yR,{data:t}):e==="ember"?f.jsx(SR,{data:t}):e==="aurora"?f.jsx(ER,{data:t}):f.jsx(MR,{data:t})})]}),f.jsxs("div",{style:{background:"rgba(3,2,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.04)",padding:"10px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0},children:[f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.1em"},children:[t.name," · ",e==null?void 0:e.toUpperCase()," TEMPLATE"]}),f.jsxs("span",{style:{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(255,250,230,0.2)",letterSpacing:"0.1em"},children:[new Date().getFullYear()," · Portfolio3D"]})]})]})}const wR={name:"Jordan Blake",title:"Creative Full Stack Developer",about:"I architect digital experiences that live at the intersection of engineering and art. 6 years turning complex problems into elegant, performant solutions.",skills:["React","Three.js","TypeScript","Node.js","Python","WebGL","GraphQL","AWS","Docker","PostgreSQL","Redis","Figma"],projects:[{title:"Neural Canvas",description:"Real-time AI art generation platform processing 50K+ images/day with custom diffusion pipeline."},{title:"Velocity OS",description:"Cloud-native developer toolkit reducing deployment times by 80% for 200+ engineering teams."},{title:"Quantum Chat",description:"End-to-end encrypted messaging with sub-50ms latency serving 1M+ active users globally."},{title:"DataForge",description:"Visual data pipeline builder with drag-and-drop interface handling petabyte-scale ETL jobs."}],education:`M.S. Computer Science — Stanford University, 2019
B.S. Software Engineering — UC Berkeley, 2017`,experience:`Staff Engineer @ Vercel (2022–Present)
Senior Engineer @ Stripe (2020–2022)
Full Stack Developer @ Airbnb (2019–2020)`,contact:{email:"jordan@blake.dev",phone:"+1 (415) 555-0199",linkedin:"https://linkedin.com/in/jordanblake",github:"https://github.com/jordanblake",website:"https://blake.dev"}};function TR(){const t=ie.useRef(null),e=ie.useRef(null),n=ie.useRef({x:0,y:0}),i=ie.useRef({x:0,y:0});return ie.useEffect(()=>{const r=a=>{n.current={x:a.clientX,y:a.clientY},t.current&&(t.current.style.left=a.clientX+"px",t.current.style.top=a.clientY+"px")};window.addEventListener("mousemove",r);let s;const o=()=>{e.current&&(i.current.x+=(n.current.x-i.current.x)*.12,i.current.y+=(n.current.y-i.current.y)*.12,e.current.style.left=i.current.x+"px",e.current.style.top=i.current.y+"px"),s=requestAnimationFrame(o)};return s=requestAnimationFrame(o),()=>{window.removeEventListener("mousemove",r),cancelAnimationFrame(s)}},[]),f.jsxs(f.Fragment,{children:[f.jsx("div",{id:"cursor",ref:t}),f.jsx("div",{id:"cursor-ring",ref:e})]})}function AR(){const[t,e]=ie.useState(null),[n,i]=ie.useState(wR);return f.jsxs(g1,{children:[f.jsx(TR,{}),f.jsxs(p1,{children:[f.jsx(lo,{path:"/",element:f.jsx(NT,{selectedTemplate:t,onSelect:e})}),f.jsx(lo,{path:"/input",element:t?f.jsx(mR,{userData:n,setUserData:i,selectedTemplate:t}):f.jsx(qc,{to:"/",replace:!0})}),f.jsx(lo,{path:"/preview",element:t?f.jsx(bR,{userData:n,selectedTemplate:t}):f.jsx(qc,{to:"/",replace:!0})}),f.jsx(lo,{path:"*",element:f.jsx(qc,{to:"/",replace:!0})})]})]})}Du.createRoot(document.getElementById("root")).render(f.jsx(Wl.StrictMode,{children:f.jsx(AR,{})}));
