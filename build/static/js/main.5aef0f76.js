/*! For license information please see main.5aef0f76.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:l,props:a,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+T(s,0):a,w(i)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),P(i,t,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var c=a+T(l=e[u],u);s+=P(l,t,o,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,o,c=a+T(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},z={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<o&&0>a(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,z(S);else{var t=r(c);null!==t&&D(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(C),C=-1),h=!0;var a=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&o(u),x(n)}else o(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&D(w,d.startTime-n),s=!1}return s}finally{f=null,p=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,j=!1,E=null,C=-1,_=5,T=-1;function P(){return!(t.unstable_now()-T<_)}function O(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?k():(j=!1,E=null)}}else j=!1}if("function"===typeof b)k=function(){b(O)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,N=R.port2;R.port1.onmessage=O,k=function(){N.postMessage(null)}}else k=function(){y(O,0)};function z(e){E=e,j||(j=!0,k())}function D(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,z(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,a){var i=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?i+a:i:a=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>i?(e.sortIndex=a,n(c,e),null===r(u)&&e===r(c)&&(g?(v(C),C=-1):g=!0,D(w,a-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,z(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var u=a[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var A,F=Object.assign;function I(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var U=!1;function M(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var o=u.stack.split("\n"),a=r.stack.split("\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l]){var s="\n"+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function $(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){J(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ye=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,je=null;function Ee(e){if(e=xo(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=So(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?je?je.push(e):je=[e]:ke=e}function _e(){if(ke){var e=ke,t=je;if(je=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Te(e,t){return e(t)}function Pe(){}var Oe=!1;function Re(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Te(e,t,n)}finally{Oe=!1,(null!==ke||null!==je)&&(Pe(),_e())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=So(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(c)try{var De={};Object.defineProperty(De,"passive",{get:function(){ze=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ce){ze=!1}function Le(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ae=!1,Fe=null,Ie=!1,Ue=null,Me={onError:function(e){Ae=!0,Fe=e}};function $e(e,t,n,r,o,a,i,l,s){Ae=!1,Fe=null,Le.apply(Me,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(a(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return He(o),e;if(i===r)return He(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,Ge=o.unstable_requestPaint,Je=o.unstable_now,Xe=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,at=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~o;0!==l?r=dt(l):0!==(a&=i)&&(r=dt(a))}else 0!==(i=n&~o)?r=dt(i):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||16===o&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-it(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,jt,Et,Ct=!1,_t=[],Tt=null,Pt=null,Ot=null,Rt=new Map,Nt=new Map,zt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function At(e,t,n,r,o,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Ft(e){var t=bo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ut(e,t,n){It(e)&&n.delete(t)}function Mt(){Ct=!1,null!==Tt&&It(Tt)&&(Tt=null),null!==Pt&&It(Pt)&&(Pt=null),null!==Ot&&It(Ot)&&(Ot=null),Rt.forEach(Ut),Nt.forEach(Ut)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return $t(t,e)}if(0<_t.length){$t(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&$t(Tt,e),null!==Pt&&$t(Pt,e),null!==Ot&&$t(Ot,e),Rt.forEach(t),Nt.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Ft(n),null===n.blockedOn&&zt.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function qt(e,t,n,r){var o=bt,a=Wt.transition;Wt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=o,Wt.transition=a}}function Vt(e,t,n,r){var o=bt,a=Wt.transition;Wt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=o,Wt.transition=a}}function Kt(e,t,n,r){if(Ht){var o=Yt(e,t,n,r);if(null===o)Hr(e,t,r,Qt,n),Lt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Tt=At(Tt,e,t,n,r,o),!0;case"dragenter":return Pt=At(Pt,e,t,n,r,o),!0;case"mouseover":return Ot=At(Ot,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Rt.set(a,At(Rt.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Nt.set(a,At(Nt.get(a)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==o;){var a=xo(o);if(null!==a&&wt(a),null===(a=Yt(e,t,n,r))&&Hr(e,t,r,Qt,n),a===o)break;o=a}null!==o&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Qt=null;function Yt(e,t,n,r){if(Qt=null,null!==(e=bo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Xt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Xt,r=n.length,o="value"in Jt?Jt.value:Jt.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===o[a-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,a){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=F({},un,{view:0,detail:0}),fn=on(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(F({},pn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),yn=on(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(vn),xn=on(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return jn}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=on(Cn),Tn=on(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),On=on(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=on(Rn),zn=[9,13,27,32],Dn=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var An=c&&"TextEvent"in window&&!Ln,Fn=c&&(!Dn||Ln&&8<Ln&&11>=Ln),In=String.fromCharCode(32),Un=!1;function Mn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function qn(e,t,n,r){Ce(r),0<(t=Vr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,Kn=null;function Qn(e){Ir(e,0)}function Yn(e){if(K(wo(e)))return e}function Gn(e,t){if("change"===e)return t}var Jn=!1;if(c){var Xn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Xn=Zn}else Xn=!1;Jn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Vn&&(Vn.detachEvent("onpropertychange",nr),Kn=Vn=null)}function nr(e){if("value"===e.propertyName&&Yn(Kn)){var t=[];qn(t,Kn,e,we(e)),Re(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Vn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Kn)}function ar(e,t){if("click"===e)return Yn(t)}function ir(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=void 0===r.end?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=cr(n,a);var i=cr(n,r);o&&i&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Vr(yr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},jr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return kr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=Er("animationend"),_r=Er("animationiteration"),Tr=Er("animationstart"),Pr=Er("transitionend"),Or=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Or.set(e,t),s(t,[e])}for(var zr=0;zr<Rr.length;zr++){var Dr=Rr[zr];Nr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Nr(Cr,"onAnimationEnd"),Nr(_r,"onAnimationIteration"),Nr(Tr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,l,s,u){if($e.apply(this,arguments),Ae){if(!Ae)throw Error(a(198));var c=Fe;Ae=!1,Fe=null,Ie||(Ie=!0,Ue=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Fr(o,l,u),a=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Fr(o,l,u),a=s}}}if(Ie)throw e=Ue,Ie=!1,Ue=null,e}function Ur(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[$r]){e[$r]=!0,i.forEach((function(t){"selectionchange"!==t&&(Ar.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Mr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Gt(t)){case 1:var o=qt;break;case 4:o=Vt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,o){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=bo(l)))return;if(5===(s=i.tag)||6===s){r=a=i;continue e}l=l.parentNode}}r=r.return}Re((function(){var r=a,o=we(n),i=[];e:{var l=Or.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case _r:case Tr:s=yn;break;case Pr:s=On;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(qr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!bo(u)&&!u[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?bo(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==u?l:wo(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,bo(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Hn(l))if(Jn)g=ir;else{g=or;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ar);switch(g&&(g=g(e,r))?qn(i,g,n,o):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?wo(r):window,e){case"focusin":(Hn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,o)}var v;if(Dn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bn?Mn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Bn&&(v=en()):(Xt="value"in(Jt=o)?Jt.value:Jt.textContent,Bn=!0)),0<(y=Vr(r,b)).length&&(b=new xn(b,e,null,n,o),i.push({event:b,listeners:y}),v?b.data=v:null!==(v=$n(n))&&(b.data=v))),(v=An?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(Un=!0,In);case"textInput":return(e=t.data)===In&&Un?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Dn&&Mn(e,t)?(e=en(),Zt=Xt=Jt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Vr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),i.push({event:o,listeners:r}),o.data=v))}Ir(i,t)}))}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=Ne(e,n))&&r.unshift(qr(e,a,o)),null!=(a=Ne(e,t))&&r.push(qr(e,a,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,o){for(var a=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=Ne(n,a))&&i.unshift(qr(n,s,l)):o||null!=(s=Ne(n,a))&&i.push(qr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Yr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Gr,"")}function Xr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(a(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,ao="function"===typeof Promise?Promise:void 0,io="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ao?function(e){return ao.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function uo(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function co(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,mo="__reactContainer$"+fo,go="__reactEvents$"+fo,yo="__reactListeners$"+fo,vo="__reactHandles$"+fo;function bo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=co(e);null!==e;){if(n=e[po])return n;e=co(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function So(e){return e[ho]||null}var ko=[],jo=-1;function Eo(e){return{current:e}}function Co(e){0>jo||(e.current=ko[jo],ko[jo]=null,jo--)}function _o(e,t){jo++,ko[jo]=e.current,e.current=t}var To={},Po=Eo(To),Oo=Eo(!1),Ro=To;function No(e,t){var n=e.type.contextTypes;if(!n)return To;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in n)a[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Do(){Co(Oo),Co(Po)}function Lo(e,t,n){if(Po.current!==To)throw Error(a(168));_o(Po,t),_o(Oo,n)}function Ao(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(a(108,W(e)||"Unknown",o));return F({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||To,Ro=Po.current,_o(Po,e),_o(Oo,Oo.current),!0}function Io(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ao(e,t,Ro),r.__reactInternalMemoizedMergedChildContext=e,Co(Oo),Co(Po),_o(Po,e)):Co(Oo),_o(Oo,n)}var Uo=null,Mo=!1,$o=!1;function Bo(e){null===Uo?Uo=[e]:Uo.push(e)}function Wo(){if(!$o&&null!==Uo){$o=!0;var e=0,t=bt;try{var n=Uo;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Uo=null,Mo=!1}catch(o){throw null!==Uo&&(Uo=Uo.slice(e+1)),Ke(Ze,Wo),o}finally{bt=t,$o=!1}}return null}var Ho=[],qo=0,Vo=null,Ko=0,Qo=[],Yo=0,Go=null,Jo=1,Xo="";function Zo(e,t){Ho[qo++]=Ko,Ho[qo++]=Vo,Vo=e,Ko=t}function ea(e,t,n){Qo[Yo++]=Jo,Qo[Yo++]=Xo,Qo[Yo++]=Go,Go=e;var r=Jo;e=Xo;var o=32-it(r)-1;r&=~(1<<o),n+=1;var a=32-it(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Jo=1<<32-it(t)+o|n<<o|r,Xo=a+e}else Jo=1<<a|n<<o|r,Xo=e}function ta(e){null!==e.return&&(Zo(e,1),ea(e,1,0))}function na(e){for(;e===Vo;)Vo=Ho[--qo],Ho[qo]=null,Ko=Ho[--qo],Ho[qo]=null;for(;e===Go;)Go=Qo[--Yo],Qo[Yo]=null,Xo=Qo[--Yo],Qo[Yo]=null,Jo=Qo[--Yo],Qo[Yo]=null}var ra=null,oa=null,aa=!1,ia=null;function la(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ra=e,oa=uo(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ra=e,oa=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Go?{id:Jo,overflow:Xo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ra=e,oa=null,!0);default:return!1}}function ua(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(aa){var t=oa;if(t){var n=t;if(!sa(e,t)){if(ua(e))throw Error(a(418));t=uo(n.nextSibling);var r=ra;t&&sa(e,t)?la(r,n):(e.flags=-4097&e.flags|2,aa=!1,ra=e)}}else{if(ua(e))throw Error(a(418));e.flags=-4097&e.flags|2,aa=!1,ra=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ra=e}function fa(e){if(e!==ra)return!1;if(!aa)return da(e),aa=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oa)){if(ua(e))throw pa(),Error(a(418));for(;t;)la(e,t),t=uo(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oa=uo(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oa=null}}else oa=ra?uo(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=oa;e;)e=uo(e.nextSibling)}function ha(){oa=ra=null,aa=!1}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=x.ReactCurrentBatchConfig;function ya(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=o.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function xa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var a=n.type;return a===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ba(a)===t.type)?((r=o(t,n.props)).ref=ya(e,t,n),r.return=e,r):((r=Du(n.type,n.key,n.props,null,e.mode,r)).ref=ya(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Du(t.type,t.key,t.props,null,e.mode,n)).ref=ya(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?u(e,t,n,r):null;case S:return n.key===o?c(e,t,n,r):null;case N:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||L(n))return null!==o?null:d(e,t,n,r,null);va(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case N:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,o,null);va(t,r)}return null}function m(o,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(o,d,l[m],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(o,d),a=i(y,a,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===l.length)return n(o,d),aa&&Zo(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return aa&&Zo(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(o,e)})),aa&&Zo(o,m),u}function g(o,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(a(150));if(null==(s=c.call(s)))throw Error(a(151));for(var d=c=null,m=l,g=l=0,y=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=p(o,m,v.value,u);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(o,m),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,m=y}if(v.done)return n(o,m),aa&&Zo(o,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(o,v.value,u))&&(l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return aa&&Zo(o,g),c}for(m=r(o,m);!v.done;g++,v=s.next())null!==(v=h(m,o,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(o,e)})),aa&&Zo(o,g),c}return function e(r,a,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=a;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(a=o(c,i.props.children)).return=r,r=a;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&ba(u)===c.type){n(r,c.sibling),(a=o(c,i.props)).ref=ya(r,c,i),a.return=r,r=a;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((a=Lu(i.props.children,r.mode,s,i.key)).return=r,r=a):((s=Du(i.type,i.key,i.props,null,r.mode,s)).ref=ya(r,a,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===i.containerInfo&&a.stateNode.implementation===i.implementation){n(r,a.sibling),(a=o(a,i.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Iu(i,r.mode,s)).return=r,r=a}return l(r);case N:return e(r,a,(c=i._init)(i._payload),s)}if(te(i))return m(r,a,i,s);if(L(i))return g(r,a,i,s);va(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==a&&6===a.tag?(n(r,a.sibling),(a=o(a,i)).return=r,r=a):(n(r,a),(a=Fu(i,r.mode,s)).return=r,r=a),l(r)):n(r,a)}}var wa=xa(!0),Sa=xa(!1),ka=Eo(null),ja=null,Ea=null,Ca=null;function _a(){Ca=Ea=ja=null}function Ta(e){var t=ka.current;Co(ka),e._currentValue=t}function Pa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oa(e,t){ja=e,Ca=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ra(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===ja)throw Error(a(308));Ea=e,ja.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Na=null;function za(e){null===Na?Na=[e]:Na.push(e)}function Da(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,za(t)):(n.next=o.next,o.next=n),t.interleaved=n,La(e,r)}function La(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Aa=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ia(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ts)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,La(e,n)}return null===(o=r.interleaved)?(t.next=t,za(r)):(t.next=o.next,o.next=t),r.interleaved=t,La(e,n)}function $a(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?o=a=i:a=a.next=i,n=n.next}while(null!==n);null===a?o=a=t:a=a.next=t}else o=a=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var o=e.updateQueue;Aa=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?a=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==a){var d=o.baseState;for(i=0,c=u=s=null,l=a;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Aa=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do{i|=o.lane,o=o.next}while(o!==t)}else null===a&&(o.shared.lanes=0);As|=i,e.lanes=i,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(a(191,o));o.call(r)}}}var qa={},Va=Eo(qa),Ka=Eo(qa),Qa=Eo(qa);function Ya(e){if(e===qa)throw Error(a(174));return e}function Ga(e,t){switch(_o(Qa,t),_o(Ka,e),_o(Va,qa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(Va),_o(Va,t)}function Ja(){Co(Va),Co(Ka),Co(Qa)}function Xa(e){Ya(Qa.current);var t=Ya(Va.current),n=se(t,e.type);t!==n&&(_o(Ka,e),_o(Va,n))}function Za(e){Ka.current===e&&(Co(Va),Co(Ka))}var ei=Eo(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var oi=x.ReactCurrentDispatcher,ai=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(a(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,o,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=null===e||null===e.memoizedState?Zi:el,e=n(r,o),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(a(301));i+=1,ui=si=null,t.updateQueue=null,oi.current=tl,e=n(r,o)}while(di)}if(oi.current=Xi,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(a(300));return e}function yi(){var e=0!==fi;return fi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(a(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=si,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,As|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{i=o.lane,li.lanes|=i,As|=i,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function ji(e,t){var n=li,r=bi(),o=t(),i=!lr(r.memoizedState,o);if(i&&(r.memoizedState=o,bl=!0),r=r.queue,Ai(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Ri(9,Ci.bind(null,n,r,o,t),void 0,null),null===Ps)throw Error(a(349));0!==(30&ii)||Ei(n,t,o)}return o}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Ti(t)&&Pi(e)}function _i(e,t,n){return n((function(){Ti(t)&&Pi(e)}))}function Ti(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=La(e,1);null!==t&&nu(t,e,1,-1)}function Oi(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return bi().memoizedState}function zi(e,t,n,r){var o=vi();li.flags|=e,o.memoizedState=Ri(1|t,n,void 0,void 0===r?null:r)}function Di(e,t,n,r){var o=bi();r=void 0===r?null:r;var a=void 0;if(null!==si){var i=si.memoizedState;if(a=i.destroy,null!==r&&mi(r,i.deps))return void(o.memoizedState=Ri(t,n,a,r))}li.flags|=e,o.memoizedState=Ri(1|t,n,a,r)}function Li(e,t){return zi(8390656,8,e,t)}function Ai(e,t){return Di(2048,8,e,t)}function Fi(e,t){return Di(4,2,e,t)}function Ii(e,t){return Di(4,4,e,t)}function Ui(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Di(4,4,Ui.bind(null,t,e),n)}function $i(){}function Bi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,As|=n,e.baseState=!0),t)}function qi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{bt=n,ai.transition=r}}function Vi(){return bi().memoizedState}function Ki(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yi(e))Gi(t,n);else if(null!==(n=Da(e,t,n,r))){nu(n,e,r,eu()),Ji(n,t,r)}}function Qi(e,t,n){var r=tu(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))Gi(t,o);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(o.next=o,za(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(u){}null!==(n=Da(e,t,o,r))&&(nu(n,e,r,o=eu()),Ji(n,t,r))}}function Yi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ji(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Xi={readContext:Ra,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:Ra,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:Ra,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zi(4194308,4,Ui.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=vi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ki.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:Oi,useDebugValue:$i,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=Oi(!1),t=e[0];return e=qi.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,o=vi();if(aa){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Ps)throw Error(a(349));0!==(30&ii)||Ei(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Li(_i.bind(null,r,i,e),[e]),r.flags|=2048,Ri(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vi(),t=Ps.identifierPrefix;if(aa){var n=Xo;t=":"+t+"R"+(n=(Jo&~(1<<32-it(Jo)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ra,useCallback:Bi,useContext:Ra,useEffect:Ai,useImperativeHandle:Mi,useInsertionEffect:Fi,useLayoutEffect:Ii,useMemo:Wi,useReducer:wi,useRef:Ni,useState:function(){return wi(xi)},useDebugValue:$i,useDeferredValue:function(e){return Hi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:ji,useId:Vi,unstable_isNewReconciler:!1},tl={readContext:Ra,useCallback:Bi,useContext:Ra,useEffect:Ai,useImperativeHandle:Mi,useInsertionEffect:Fi,useLayoutEffect:Ii,useMemo:Wi,useReducer:Si,useRef:Ni,useState:function(){return Si(xi)},useDebugValue:$i,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:ji,useId:Vi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Ua(r,o);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ma(e,a,o))&&(nu(t,e,o,r),$a(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),o=tu(e),a=Ua(r,o);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ma(e,a,o))&&(nu(t,e,o,r),$a(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),o=Ua(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Ma(e,o,r))&&(nu(t,e,r,n),$a(t,e,r))}};function al(e,t,n,r,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,a))}function il(e,t,n){var r=!1,o=To,a=t.contextType;return"object"===typeof a&&null!==a?a=Ra(a):(o=zo(t)?Ro:Po.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?No(e,o):To),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fa(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=Ra(a):(a=zo(t)?Ro:Po.current,o.context=No(e,a)),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rl(e,t,a,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Wa(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var o=n}catch(a){o="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ua(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,qs=r),dl(0,t)},n}function hl(e,t,n){(n=Ua(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Vs?Vs=new Set([this]):Vs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ua(-1,1)).tag=2,Ma(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var vl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?Sa(t,null,n,r):wa(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var a=t.ref;return Oa(t,o),r=gi(e,t,n,r,a,o),n=yi(),null===e||bl?(aa&&n&&ta(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function Sl(e,t,n,r,o){if(null===e){var a=n.type;return"function"!==typeof a||Nu(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Du(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,kl(e,t,a,r,o))}if(a=e.child,0===(e.lanes&o)){var i=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,o)}return t.flags|=1,(e=zu(a,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,o){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=a,0===(e.lanes&o))return t.lanes=e.lanes,Hl(e,t,o);0!==(131072&e.flags)&&(bl=!0)}}return Cl(e,t,n,r,o)}function jl(e,t,n){var r=t.pendingProps,o=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_o(zs,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_o(zs,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,_o(zs,Ns),Ns|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,_o(zs,Ns),Ns|=r;return xl(e,t,o,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,o){var a=zo(n)?Ro:Po.current;return a=No(t,a),Oa(t,o),n=gi(e,t,n,r,a,o),r=yi(),null===e||bl?(aa&&r&&ta(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Hl(e,t,o))}function _l(e,t,n,r,o){if(zo(n)){var a=!0;Fo(t)}else a=!1;if(Oa(t,o),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ra(u):u=No(t,u=zo(n)?Ro:Po.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Aa=!1;var f=t.memoizedState;i.state=f,Wa(t,r,i,o),s=t.memoizedState,l!==r||f!==s||Oo.current||Aa?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Aa||al(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ia(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ra(s):s=No(t,s=zo(n)?Ro:Po.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Aa=!1,f=t.memoizedState,i.state=f,Wa(t,r,i,o);var h=t.memoizedState;l!==d||f!==h||Oo.current||Aa?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Aa||al(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,a,o)}function Tl(e,t,n,r,o,a){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return o&&Io(t,n,!1),Hl(e,t,a);r=t.stateNode,vl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,l,a)):xl(e,t,l,a),t.memoizedState=r.state,o&&Io(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Lo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Lo(0,t.context,!1),Ga(e,t.containerInfo)}function Ol(e,t,n,r,o){return ha(),ma(o),t.flags|=256,xl(e,t,n,r),t.child}var Rl,Nl,zl,Dl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,o=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),_o(ei,1&i),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Au(s,o,0,null),e=Lu(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Al(n),t.memoizedState=Ll,e):Il(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,l,r=cl(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Au({mode:"visible",children:r.children},o,0,null),(i=Lu(i,o,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Ul(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,Ul(e,t,l,r=cl(i=Error(a(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=Ps)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==i.retryLane&&(i.retryLane=o,La(e,o),nu(r,e,o,-1))}return mu(),Ul(e,t,l,r=cl(Error(a(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oa=uo(o.nextSibling),ra=t,aa=!0,ia=null,null!==e&&(Qo[Yo++]=Jo,Qo[Yo++]=Xo,Qo[Yo++]=Go,Jo=e.id,Xo=e.overflow,Go=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,i,n);if(l){l=o.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=u,t.deletions=null):(o=zu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=zu(r,l):(l=Lu(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Al(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,o}return e=(l=e.child).sibling,o=zu(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Il(e,t){return(t=Au({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&ma(r),wa(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function $l(e,t,n,r,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Bl(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_o(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ti(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,a);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),As|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=zu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ql(e,t){if(!aa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vl(t),null;case 1:case 17:return zo(t.type)&&Do(),Vl(t),null;case 3:return r=t.stateNode,Ja(),Co(Oo),Co(Po),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fa(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(iu(ia),ia=null))),Nl(e,t),Vl(t),null;case 5:Za(t);var o=Ya(Qa.current);if(n=t.type,null!==e&&null!=t.stateNode)zl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Vl(t),null}if(e=Ya(Va.current),fa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[po]=t,r[ho]=i,e=0!==(1&t.mode),n){case"dialog":Ur("cancel",r),Ur("close",r);break;case"iframe":case"object":case"embed":Ur("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)Ur(Lr[o],r);break;case"source":Ur("error",r);break;case"img":case"image":case"link":Ur("error",r),Ur("load",r);break;case"details":Ur("toggle",r);break;case"input":G(r,i),Ur("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ur("invalid",r);break;case"textarea":oe(r,i),Ur("invalid",r)}for(var s in ve(n,i),o=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,u,e),o=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Xr(r.textContent,u,e),o=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ur("scroll",r)}switch(n){case"input":V(r),Z(r,i,!0);break;case"textarea":V(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ur("cancel",e),Ur("close",e),o=r;break;case"iframe":case"object":case"embed":Ur("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)Ur(Lr[o],e);o=r;break;case"source":Ur("error",e),o=r;break;case"img":case"image":case"link":Ur("error",e),Ur("load",e),o=r;break;case"details":Ur("toggle",e),o=r;break;case"input":G(e,r),o=Y(e,r),Ur("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=F({},r,{value:void 0}),Ur("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Ur("invalid",e)}for(i in ve(n,o),u=o)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Ur("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":V(e),Z(e,r,!1);break;case"textarea":V(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Vl(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ya(Qa.current),Ya(Va.current),fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(i=r.nodeValue!==n)&&null!==(e=ra))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Vl(t),null;case 13:if(Co(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aa&&null!==oa&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ha(),t.flags|=98560,i=!1;else if(i=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[po]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Vl(t),i=!1}else null!==ia&&(iu(ia),ia=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Ds&&(Ds=3):mu())),null!==t.updateQueue&&(t.flags|=4),Vl(t),null);case 4:return Ja(),Nl(e,t),null===e&&Br(t.stateNode.containerInfo),Vl(t),null;case 10:return Ta(t.type._context),Vl(t),null;case 19:if(Co(ei),null===(i=t.memoizedState))return Vl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)ql(i,!1);else{if(0!==Ds||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,ql(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _o(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Je()>Bs&&(t.flags|=128,r=!0,ql(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ql(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!aa)return Vl(t),null}else 2*Je()-i.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,ql(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Je(),t.sibling=null,n=ei.current,_o(ei,r?1&n|2:1&n),t):(Vl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Vl(t),6&t.subtreeFlags&&(t.flags|=8192)):Vl(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ql(e,t){switch(na(t),t.tag){case 1:return zo(t.type)&&Do(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ja(),Co(Oo),Co(Po),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Za(t),null;case 13:if(Co(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ei),null;case 4:return Ja(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},zl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ya(Va.current);var a,i=null;switch(n){case"input":o=Y(e,o),r=Y(e,r),i=[];break;case"select":o=F({},o,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":o=re(e,o),r=re(e,r),i=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ve(n,r),n=null,o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&null!=o[c])if("style"===c){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=o?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ur("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Gl=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ju(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,void 0!==a&&es(t,n,a)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function as(e){var t=e.alternate;null!==t&&(e.alternate=null,as(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[go],delete t[yo],delete t[vo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,o=ds;cs=null,fs(e,t,n),ds=o,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Bt(e)):so(cs,n.stateNode));break;case 4:r=cs,o=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,void 0!==i&&(0!==(2&a)||0!==(4&a))&&es(n,t,i),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ju(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(a(160));ps(i,l,o),cs=null,ds=!1;var u=o.alternate;null!==u&&(u.return=null),o.return=null}catch(c){ju(o,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){ju(e,e.return,g)}try{ns(5,e,e.return)}catch(g){ju(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(g){ju(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&J(o,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):b(o,d,f,c)}switch(s){case"input":X(o,i);break;case"textarea":ae(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(o,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(o,!!i.multiple,i.defaultValue,!0):ne(o,!!i.multiple,i.multiple?[]:"",!1))}o[ho]=i}catch(g){ju(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(a(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ju(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){ju(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,!i||null!==o.alternate&&null!==o.alternate.memoizedState||($s=Je())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(f=Xl=d;null!==Xl;){switch(h=(p=Xl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ju(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Xl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,c?"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){ju(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){ju(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),us(e,ls(e),o);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(a(161))}}catch(l){ju(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Xl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var o=Xl,a=o.child;if(22===o.tag&&r){var i=null!==o.memoizedState||Yl;if(!i){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Yl;var u=Gl;if(Yl=i,(Gl=s)&&!u)for(Xl=o;null!==Xl;)s=(i=Xl).child,22===i.tag&&null!==i.memoizedState?Ss(o):null!==s?(s.return=i,Xl=s):Ss(o);for(;null!==a;)Xl=a,bs(a,t,n),a=a.sibling;Xl=o,Yl=l,Gl=u}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==a?(a.return=o,Xl=a):xs(e)}}function xs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ha(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(a(163))}Gl||512&t.flags&&os(t)}catch(p){ju(t,t.return,p)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ju(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){ju(t,o,s)}}var a=t.return;try{os(t)}catch(s){ju(t,a,s)}break;case 5:var i=t.return;try{os(t)}catch(s){ju(t,i,s)}}}catch(s){ju(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var ks,js=Math.ceil,Es=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,_s=x.ReactCurrentBatchConfig,Ts=0,Ps=null,Os=null,Rs=0,Ns=0,zs=Eo(0),Ds=0,Ls=null,As=0,Fs=0,Is=0,Us=null,Ms=null,$s=0,Bs=1/0,Ws=null,Hs=!1,qs=null,Vs=null,Ks=!1,Qs=null,Ys=0,Gs=0,Js=null,Xs=-1,Zs=0;function eu(){return 0!==(6&Ts)?Je():-1!==Xs?Xs:Xs=Je()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==Rs?Rs&-Rs:null!==ga.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Js=null,Error(a(185));yt(e,n,r),0!==(2&Ts)&&e===Ps||(e===Ps&&(0===(2&Ts)&&(Fs|=n),4===Ds&&lu(e,Rs)),ru(e,r),1===n&&0===Ts&&0===(1&t.mode)&&(Bs=Je()+500,Mo&&Wo()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-it(a),l=1<<i,s=o[i];-1===s?0!==(l&n)&&0===(l&r)||(o[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}(e,t);var r=ft(e,e===Ps?Rs:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Mo=!0,Bo(e)}(su.bind(null,e)):Bo(su.bind(null,e)),io((function(){0===(6&Ts)&&Wo()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Xs=-1,Zs=0,0!==(6&Ts))throw Error(a(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Rs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var o=Ts;Ts|=2;var i=hu();for(Ps===e&&Rs===t||(Ws=null,Bs=Je()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}_a(),Es.current=i,Ts=o,null!==Os?t=0:(Ps=null,Rs=0,t=Ds)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=au(e,o))),1===t)throw n=Ls,fu(e,0),lu(e,r),ru(e,Je()),n;if(6===t)lu(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!lr(a(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=au(e,i))),1===t))throw n=Ls,fu(e,0),lu(e,r),ru(e,Je()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wu(e,Ms,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=$s+500-Je())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wu.bind(null,e,Ms,Ws),t);break}wu(e,Ms,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>o&&(o=l),r&=~i}if(r=o,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ro(wu.bind(null,e,Ms,Ws),r);break}wu(e,Ms,Ws);break;default:throw Error(a(329))}}}return ru(e,Je()),e.callbackNode===n?ou.bind(null,e):null}function au(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Ms,Ms=n,null!==t&&iu(t)),e}function iu(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lu(e,t){for(t&=~Is,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ts))throw Error(a(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Je()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=au(e,r))}if(1===n)throw n=Ls,fu(e,0),lu(e,t),ru(e,Je()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Ms,Ws),ru(e,Je()),null}function uu(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Bs=Je()+500,Mo&&Wo())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&Ts)&&Su();var t=Ts;Ts|=1;var n=_s.transition,r=bt;try{if(_s.transition=null,bt=1,e)return e()}finally{bt=r,_s.transition=n,0===(6&(Ts=t))&&Wo()}}function du(){Ns=zs.current,Co(zs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Os)for(n=Os.return;null!==n;){var r=n;switch(na(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Do();break;case 3:Ja(),Co(Oo),Co(Po),ri();break;case 5:Za(r);break;case 4:Ja();break;case 13:case 19:Co(ei);break;case 10:Ta(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Os=e=zu(e.current,null),Rs=Ns=t,Ds=0,Ls=null,Is=Fs=As=0,Ms=Us=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var o=r.next,a=n.pending;if(null!==a){var i=a.next;a.next=o,r.next=i}n.pending=r}Na=null}return e}function pu(e,t){for(;;){var n=Os;try{if(_a(),oi.current=Xi,ci){for(var r=li.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){Ds=1,Ls=t,Os=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Rs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(a(426))}else if(aa&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),ma(ul(u,s));break e}}i=u=ul(u,s),4!==Ds&&(Ds=2),null===Us?Us=[i]:Us.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,pl(0,u,t));break e;case 1:s=u;var v=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Vs||!Vs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ba(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,Os===n&&null!==n&&(Os=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Xi,null===e?Xi:e}function mu(){0!==Ds&&3!==Ds&&2!==Ds||(Ds=4),null===Ps||0===(268435455&As)&&0===(268435455&Fs)||lu(Ps,Rs)}function gu(e,t){var n=Ts;Ts|=2;var r=hu();for(Ps===e&&Rs===t||(Ws=null,fu(e,t));;)try{yu();break}catch(o){pu(e,o)}if(_a(),Ts=n,Es.current=r,null!==Os)throw Error(a(261));return Ps=null,Rs=0,Ds}function yu(){for(;null!==Os;)bu(Os)}function vu(){for(;null!==Os&&!Ye();)bu(Os)}function bu(e){var t=ks(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xu(e):Os=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Ns)))return void(Os=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Os=n);if(null===e)return Ds=6,void(Os=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Os=t);Os=t=e}while(null!==t);0===Ds&&(Ds=5)}function wu(e,t,n){var r=bt,o=_s.transition;try{_s.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Qs);if(0!==(6&Ts))throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}(e,i),e===Ps&&(Os=Ps=null,Rs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Pu(tt,(function(){return Su(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=bt;bt=1;var s=Ts;Ts|=4,Cs.current=null,function(e,t){if(eo=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Ht=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),Ht=!!eo,to=eo=null,e.current=n,vs(n,e,o),Ge(),Ts=s,bt=l,_s.transition=i}else e.current=n;if(Ks&&(Ks=!1,Qs=e,Ys=o),i=e.pendingLanes,0===i&&(Vs=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hs)throw Hs=!1,e=qs,qs=null,e;0!==(1&Ys)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Js?Gs++:(Gs=0,Js=e):Gs=0,Wo()}(e,t,n,r)}finally{_s.transition=o,bt=r}return null}function Su(){if(null!==Qs){var e=xt(Ys),t=_s.transition,n=bt;try{if(_s.transition=null,bt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Ys=0,0!==(6&Ts))throw Error(a(331));var o=Ts;for(Ts|=4,Xl=e.current;null!==Xl;){var i=Xl,l=i.child;if(0!==(16&Xl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Xl=c;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Xl=f;else for(;null!==Xl;){var p=(d=Xl).sibling,h=d.return;if(as(d),d===c){Xl=null;break}if(null!==p){p.return=h,Xl=p;break}Xl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Xl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(i=Xl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Xl=v;break e}Xl=i.return}}var b=e.current;for(Xl=b;null!==Xl;){var x=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Xl=x;else e:for(l=b;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){ju(s,s.return,S)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Ts=o,Wo(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(ot,e)}catch(S){}r=!0}return r}finally{bt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Ma(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(yt(e,1,t),ru(e,t))}function ju(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Vs||!Vs.has(r))){t=Ma(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(yt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Rs&n)===n&&(4===Ds||3===Ds&&(130023424&Rs)===Rs&&500>Je()-$s?fu(e,0):Is|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=La(e,t))&&(yt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return Ke(e,t)}function Ou(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Ou(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Du(e,t,n,r,o,i){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Lu(n.children,o,i,t);case j:l=8,o|=8;break;case E:return(e=Ru(12,n,t,2|o)).elementType=E,e.lanes=i,e;case P:return(e=Ru(13,n,t,o)).elementType=P,e.lanes=i,e;case O:return(e=Ru(19,n,t,o)).elementType=O,e.lanes=i,e;case z:return Au(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case _:l=9;break e;case T:l=11;break e;case R:l=14;break e;case N:l=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Ru(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Lu(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Au(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uu(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,o,a,i,l,s){return e=new Uu(e,t,n,l,s),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Ru(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(a),e}function $u(e){if(!e)return To;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zo(n))return Ao(e,n,t)}return t}function Bu(e,t,n,r,o,a,i,l,s){return(e=Mu(n,r,!0,e,0,a,0,l,s)).context=$u(null),n=e.current,(a=Ua(r=eu(),o=tu(n))).callback=void 0!==t&&null!==t?t:null,Ma(n,a,o),e.current.lanes=o,yt(e,o,r),ru(e,r),e}function Wu(e,t,n,r){var o=t.current,a=eu(),i=tu(o);return n=$u(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ua(a,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ma(o,t,i))&&(nu(e,o,i,a),$a(e,o,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vu(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Oo.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ha();break;case 5:Xa(t);break;case 1:zo(t.type)&&Fo(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_o(ka,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_o(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(_o(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);_o(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),_o(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Hl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,aa&&0!==(1048576&t.flags)&&ea(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=No(t,Po.current);Oa(t,n),o=gi(null,t,r,e,o,n);var i=yi();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zo(r)?(i=!0,Fo(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Fa(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Tl(null,t,r,!0,i,n)):(t.tag=0,aa&&i&&ta(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===R)return 14}return 2}(r),e=nl(r,e),o){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,_l(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Pl(t),null===e)throw Error(a(387));r=t.pendingProps,o=(i=t.memoizedState).element,Ia(e,t),Wa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ol(e,t,r,n,o=ul(Error(a(423)),t));break e}if(r!==o){t=Ol(e,t,r,n,o=ul(Error(a(424)),t));break e}for(oa=uo(t.stateNode.containerInfo.firstChild),ra=t,aa=!0,ia=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===o){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ca(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==i&&no(r,i)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Fl(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,_o(ka,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===o.children&&!Oo.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Ua(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Pa(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pa(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Oa(t,n),r=r(o=Ra(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),Sl(e,t,r,o=nl(r.type,o),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Wl(e,t),t.tag=1,zo(r)?(e=!0,Fo(t)):e=!1,Oa(t,n),il(t,r,o),sl(t,r,o,n),Tl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return jl(e,t,n)}throw Error(a(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xu(){}function Zu(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if("function"===typeof o){var l=o;o=function(){var e=Hu(i);l.call(e)}}Wu(t,i,e,o)}else i=function(e,t,n,r,o){if(o){if("function"===typeof r){var a=r;r=function(){var e=Hu(i);a.call(e)}}var i=Bu(t,r,e,0,null,!1,0,"",Xu);return e._reactRootContainer=i,e[mo]=i.current,Br(8===e.nodeType?e.parentNode:e),cu(),i}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=Mu(e,0,!1,null,0,!1,0,"",Xu);return e._reactRootContainer=s,e[mo]=s.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,o,r);return Hu(i)}Yu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Wu(e,t,null,null)},Yu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[mo]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Je()),0===(6&Ts)&&(Bs=Je()+500,Wo()))}break;case 13:cu((function(){var t=La(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Vu(e,1)}},St=function(e){if(13===e.tag){var t=La(e,134217728);if(null!==t)nu(t,e,134217728,eu());Vu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=La(e,t);if(null!==n)nu(n,e,t,eu());Vu(e,t)}},jt=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=So(r);if(!o)throw Error(a(90));K(r),X(r,o)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[xo,wo,So,Ce,_e,uu]},tc={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(nc),at=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(a(299));var n=!1,r="",o=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Mu(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Br(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=qe(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Ju(t))throw Error(a(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,o,0,i,l),e[mo]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yu(t)},t.render=function(e,t,n){if(!Ju(t))throw Error(a(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(a(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>ta,hasStandardBrowserEnv:()=>ra,hasStandardBrowserWebWorkerEnv:()=>oa,navigator:()=>na,origin:()=>aa});var t,r=n(43),o=n.t(r,2),a=n(391);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const l="popstate";function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),i({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e,n,r,o){void 0===o&&(o={});let{window:a=document.defaultView,v5Compat:u=!1}=o,p=a.history,h=t.Pop,m=null,g=y();function y(){return(p.state||{idx:null}).idx}function v(){h=t.Pop;let e=y(),n=null==e?null:e-g;g=e,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(i({},p.state,{idx:g}),""));let x={get action(){return h},get location(){return e(a,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(l,v),m=e,()=>{a.removeEventListener(l,v),m=null}},createHref:e=>n(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){h=t.Push;let o=d(x.location,e,n);r&&r(o,e),g=y()+1;let i=c(o,g),l=x.createHref(o);try{p.pushState(i,"",l)}catch(s){if(s instanceof DOMException&&"DataCloneError"===s.name)throw s;a.location.assign(l)}u&&m&&m({action:h,location:x.location,delta:1})},replace:function(e,n){h=t.Replace;let o=d(x.location,e,n);r&&r(o,e),g=y();let a=c(o,g),i=x.createHref(o);p.replaceState(a,"",i),u&&m&&m({action:h,location:x.location,delta:0})},go:e=>p.go(e)};return x}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let o=R(("string"===typeof t?p(t):t).pathname||"/",n);if(null==o)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let i=null;for(let l=0;null==i&&l<a.length;++l){let e=O(o);i=T(a[l],e,r)}return i}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,a)=>{let i={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};i.relativePath.startsWith("/")&&(s(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=A([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),v(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:_(l,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))o(e,t,r);else o(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return o?[a,""]:[a];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?a:[a,e].join("/")))),o&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const x=/^:[\w-]+$/,w=3,S=2,k=1,j=10,E=-2,C=e=>"*"===e;function _(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=E),t&&(r+=S),n.filter((e=>!C(e))).reduce(((e,t)=>e+(x.test(t)?w:""===t?k:j)),r)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},a="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===a?t:t.slice(a.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),i.push({params:o,pathname:A([a,c.pathname]),pathnameBase:F(A([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=A([a,c.pathnameBase]))}return i}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let a=new RegExp(o,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function N(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=z(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function L(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=p(e):(o=i({},e),s(!o.pathname||!o.pathname.includes("?"),N("?","pathname","search",o)),s(!o.pathname||!o.pathname.includes("#"),N("#","pathname","hash",o)),s(!o.search||!o.search.includes("#"),N("#","search","hash",o)));let a,l=""===e||""===o.pathname,u=l?"/":o.pathname;if(null==u)a=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:I(r),hash:U(o)}}(o,a),d=u&&"/"!==u&&u.endsWith("/"),f=(l||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const A=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function M(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const $=["post","put","patch","delete"],B=(new Set($),["get",...$]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const H=r.createContext(null);const q=r.createContext(null);const V=r.createContext(null);const K=r.createContext(null);const Q=r.createContext({outlet:null,matches:[],isDataRoute:!1});const Y=r.createContext(null);function G(){return null!=r.useContext(K)}function J(){return G()||s(!1),r.useContext(K).location}function X(e){r.useContext(V).static||r.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=r.useContext(Q);return e?function(){let{router:e}=ue(le.UseNavigateStable),t=de(se.UseNavigateStable),n=r.useRef(!1);return X((()=>{n.current=!0})),r.useCallback((function(r,o){void 0===o&&(o={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,W({fromRouteId:t},o)))}),[e,t])}():function(){G()||s(!1);let e=r.useContext(H),{basename:t,future:n,navigator:o}=r.useContext(V),{matches:a}=r.useContext(Q),{pathname:i}=J(),l=JSON.stringify(D(a,n.v7_relativeSplatPath)),u=r.useRef(!1);return X((()=>{u.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!u.current)return;if("number"===typeof n)return void o.go(n);let a=L(n,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:A([t,a.pathname])),(r.replace?o.replace:o.push)(a,r.state,r)}),[t,o,l,i,e])}()}function ee(e,t){let{relative:n}=void 0===t?{}:t,{future:o}=r.useContext(V),{matches:a}=r.useContext(Q),{pathname:i}=J(),l=JSON.stringify(D(a,o.v7_relativeSplatPath));return r.useMemo((()=>L(e,JSON.parse(l),i,"path"===n)),[e,l,i,n])}function te(e,n,o,a){G()||s(!1);let{navigator:i,static:l}=r.useContext(V),{matches:u}=r.useContext(Q),c=u[u.length-1],d=c?c.params:{},f=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let h,m=J();if(n){var y;let e="string"===typeof n?p(n):n;"/"===f||(null==(y=e.pathname)?void 0:y.startsWith(f))||s(!1),h=e}else h=m;let v=h.pathname||"/",b=v;if("/"!==f){let e=f.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!l&&o&&o.matches&&o.matches.length>0?o.matches:g(e,{pathname:b});let w=ie(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:A([f,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:A([f,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,o,a);return n&&w?r.createElement(K.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:t.Pop}},w):w}function ne(){let e=function(){var e;let t=r.useContext(Y),n=ce(se.UseRouteError),o=de(se.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[o]}(),t=M(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:a},n):null,null)}const re=r.createElement(ne,null);class oe extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(Q.Provider,{value:this.props.routeContext},r.createElement(Y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:n,children:o}=e,a=r.useContext(H);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(Q.Provider,{value:t},o)}function ie(e,t,n,o){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var i;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(i=o)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,u=null==(a=n)?void 0:a.errors;if(null!=u){let e=l.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||s(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,o,a)=>{let i,s=!1,f=null,p=null;var h;n&&(i=u&&o.route.id?u[o.route.id]:void 0,f=o.route.errorElement||re,c&&(d<0&&0===a?(h="route-fallback",!1||fe[h]||(fe[h]=!0),s=!0,p=null):d===a&&(s=!0,p=o.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,a+1)),g=()=>{let t;return t=i?f:s?p:o.route.Component?r.createElement(o.route.Component,null):o.route.element?o.route.element:e,r.createElement(ae,{match:o,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===a)?r.createElement(oe,{location:n.location,revalidation:n.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function ue(e){let t=r.useContext(H);return t||s(!1),t}function ce(e){let t=r.useContext(q);return t||s(!1),t}function de(e){let t=function(){let e=r.useContext(Q);return e||s(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||s(!1),n.route.id}const fe={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}o.startTransition;function he(e){let{to:t,replace:n,state:o,relative:a}=e;G()||s(!1);let{future:i,static:l}=r.useContext(V),{matches:u}=r.useContext(Q),{pathname:c}=J(),d=Z(),f=L(t,D(u,i.v7_relativeSplatPath),c,"path"===a),p=JSON.stringify(f);return r.useEffect((()=>d(JSON.parse(p),{replace:n,state:o,relative:a})),[d,p,a,n,o]),null}function me(e){s(!1)}function ge(e){let{basename:n="/",children:o=null,location:a,navigationType:i=t.Pop,navigator:l,static:u=!1,future:c}=e;G()&&s(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo((()=>({basename:d,navigator:l,static:u,future:W({v7_relativeSplatPath:!1},c)})),[d,c,l,u]);"string"===typeof a&&(a=p(a));let{pathname:h="/",search:m="",hash:g="",state:y=null,key:v="default"}=a,b=r.useMemo((()=>{let e=R(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:v},navigationType:i}}),[d,h,m,g,y,v,i]);return null==b?null:r.createElement(V.Provider,{value:f},r.createElement(K.Provider,{children:o,value:b}))}function ye(e){let{children:t,location:n}=e;return te(ve(t),n)}new Promise((()=>{}));r.Component;function ve(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,o)=>{if(!r.isValidElement(e))return;let a=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,ve(e.props.children,a));e.type!==me&&s(!1),e.props.index&&e.props.children&&s(!1);let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ve(e.props.children,a)),n.push(i)})),n}var be=n(950),xe=n.t(be,2);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Vu){}new Map;const je=o.startTransition;xe.flushSync,o.useId;function Ee(e){let{basename:t,children:n,future:o,window:a}=e,i=r.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:a,v5Compat:!0})&&(l={}),h((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return d("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,l)));let s=i.current,[u,c]=r.useState({action:s.action,location:s.location}),{v7_startTransition:p}=o||{},m=r.useCallback((e=>{p&&je?je((()=>c(e))):c(e)}),[c,p]);return r.useLayoutEffect((()=>s.listen(m)),[s,m]),r.useEffect((()=>pe(o)),[o]),r.createElement(ge,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:o})}const Ce="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=r.forwardRef((function(e,t){let n,{onClick:o,relative:a,reloadDocument:i,replace:l,state:u,target:c,to:d,preventScrollReset:p,viewTransition:h}=e,m=Se(e,ke),{basename:g}=r.useContext(V),y=!1;if("string"===typeof d&&_e.test(d)&&(n=d,Ce))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=R(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0}catch(Vu){}let v=function(e,t){let{relative:n}=void 0===t?{}:t;G()||s(!1);let{basename:o,navigator:a}=r.useContext(V),{hash:i,pathname:l,search:u}=ee(e,{relative:n}),c=l;return"/"!==o&&(c="/"===l?o:A([o,l])),a.createHref({pathname:c,search:u,hash:i})}(d,{relative:a}),b=function(e,t){let{target:n,replace:o,state:a,preventScrollReset:i,relative:l,viewTransition:s}=void 0===t?{}:t,u=Z(),c=J(),d=ee(e,{relative:l});return r.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==o?o:f(c)===f(d);u(e,{replace:n,state:a,preventScrollReset:i,relative:l,viewTransition:s})}}),[c,u,d,o,a,n,e,i,l,s])}(d,{replace:l,state:u,target:c,preventScrollReset:p,relative:a,viewTransition:h});return r.createElement("a",we({},m,{href:n||v,onClick:y||i?o:function(e){o&&o(e),e.defaultPrevented||b(e)},ref:t,target:c}))}));var Pe,Oe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Oe||(Oe={}));var Re=function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Re.apply(this,arguments)};Object.create;function Ne(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ze=n(324),De=n.n(ze),Le="-ms-",Ae="-moz-",Fe="-webkit-",Ie="comm",Ue="rule",Me="decl",$e="@keyframes",Be=Math.abs,We=String.fromCharCode,He=Object.assign;function qe(e){return e.trim()}function Ve(e,t){return(e=t.exec(e))?e[0]:e}function Ke(e,t,n){return e.replace(t,n)}function Qe(e,t,n){return e.indexOf(t,n)}function Ye(e,t){return 0|e.charCodeAt(t)}function Ge(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Xe(e){return e.length}function Ze(e,t){return t.push(e),e}function et(e,t){return e.filter((function(e){return!Ve(e,t)}))}var tt=1,nt=1,rt=0,ot=0,at=0,it="";function lt(e,t,n,r,o,a,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:tt,column:nt,length:i,return:"",siblings:l}}function st(e,t){return He(lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ut(e){for(;e.root;)e=st(e.root,{children:[e]});Ze(e,e.siblings)}function ct(){return at=ot>0?Ye(it,--ot):0,nt--,10===at&&(nt=1,tt--),at}function dt(){return at=ot<rt?Ye(it,ot++):0,nt++,10===at&&(nt=1,tt++),at}function ft(){return Ye(it,ot)}function pt(){return ot}function ht(e,t){return Ge(it,e,t)}function mt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gt(e){return tt=nt=1,rt=Je(it=e),ot=0,[]}function yt(e){return it="",e}function vt(e){return qe(ht(ot-1,wt(91===e?e+2:40===e?e+1:e)))}function bt(e){for(;(at=ft())&&at<33;)dt();return mt(e)>2||mt(at)>3?"":" "}function xt(e,t){for(;--t&&dt()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return ht(e,pt()+(t<6&&32==ft()&&32==dt()))}function wt(e){for(;dt();)switch(at){case e:return ot;case 34:case 39:34!==e&&39!==e&&wt(at);break;case 40:41===e&&wt(e);break;case 92:dt()}return ot}function St(e,t){for(;dt()&&e+at!==57&&(e+at!==84||47!==ft()););return"/*"+ht(t,ot-1)+"*"+We(47===e?e:dt())}function kt(e){for(;!mt(ft());)dt();return ht(e,ot)}function jt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Et(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Me:return e.return=e.return||e.value;case Ie:return"";case $e:return e.return=e.value+"{"+jt(e.children,r)+"}";case Ue:if(!Je(e.value=e.props.join(",")))return""}return Je(n=jt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ct(e,t,n){switch(function(e,t){return 45^Ye(e,0)?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 4789:return Ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+Ae+e+Le+e+e;case 5936:switch(Ye(e,t+11)){case 114:return Fe+e+Le+Ke(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Le+Ke(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Le+Ke(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+Le+e+e;case 6165:return Fe+e+Le+"flex-"+e+e;case 5187:return Fe+e+Ke(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Fe+e+Le+"flex-item-"+Ke(e,/flex-|-self/g,"")+(Ve(e,/flex-|baseline/)?"":Le+"grid-row-"+Ke(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+Le+"flex-line-pack"+Ke(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+Le+Ke(e,"shrink","negative")+e;case 5292:return Fe+e+Le+Ke(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ke(e,"-grow","")+Fe+e+Le+Ke(e,"grow","positive")+e;case 4554:return Fe+Ke(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ke(Ke(Ke(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ke(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ke(Ke(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4200:if(!Ve(e,/flex-|baseline/))return Le+"grid-column-align"+Ge(e,t)+e;break;case 2592:case 3360:return Le+Ke(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Ve(e.props,/grid-\w+-end/)}))?~Qe(e+(n=n[t].value),"span",0)?e:Le+Ke(e,"-start","")+e+Le+"grid-row-span:"+(~Qe(n,"span",0)?Ve(n,/\d+/):+Ve(n,/\d+/)-+Ve(e,/\d+/))+";":Le+Ke(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Ve(e.props,/grid-\w+-start/)}))?e:Le+Ke(Ke(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ke(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(45!==Ye(e,t+4))break;case 102:return Ke(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+Ae+(108==Ye(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qe(e,"stretch",0)?Ct(Ke(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ke(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,a,i,l){return Le+n+":"+r+l+(o?Le+n+"-span:"+(a?i:+i-+r)+l:"")+e}));case 4949:if(121===Ye(e,t+6))return Ke(e,":",":"+Fe)+e;break;case 6444:switch(Ye(e,45===Ye(e,14)?18:11)){case 120:return Ke(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(45===Ye(e,14)?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Le+"$2box$3")+e;case 100:return Ke(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ke(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Me:return void(e.return=Ct(e.value,e.length,n));case $e:return jt([st(e,{value:Ke(e.value,"@","@"+Fe)})],r);case Ue:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Ve(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(st(e,{props:[Ke(t,/:(read-\w+)/,":-moz-$1")]})),ut(st(e,{props:[t]})),He(e,{props:et(n,r)});break;case"::placeholder":ut(st(e,{props:[Ke(t,/:(plac\w+)/,":"+Fe+"input-$1")]})),ut(st(e,{props:[Ke(t,/:(plac\w+)/,":-moz-$1")]})),ut(st(e,{props:[Ke(t,/:(plac\w+)/,Le+"input-$1")]})),ut(st(e,{props:[t]})),He(e,{props:et(n,r)})}return""}))}}function Tt(e){return yt(Pt("",null,null,null,[""],e=gt(e),0,[0],e))}function Pt(e,t,n,r,o,a,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,y=1,v=0,b="",x=o,w=a,S=r,k=b;g;)switch(h=v,v=dt()){case 40:if(108!=h&&58==Ye(k,d-1)){-1!=Qe(k+=Ke(vt(v),"&","&\f"),"&\f",Be(u?l[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:k+=vt(v);break;case 9:case 10:case 13:case 32:k+=bt(h);break;case 92:k+=xt(pt()-1,7);continue;case 47:switch(ft()){case 42:case 47:Ze(Rt(St(dt(),pt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=Je(k)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==y&&(k=Ke(k,/\f/g,"")),p>0&&Je(k)-d&&Ze(p>32?Nt(k+";",r,n,d-1,s):Nt(Ke(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ze(S=Ot(k,t,n,u,c,o,l,b,x=[],w=[],d,a),a),123===v)if(0===c)Pt(k,t,S,S,x,a,d,l,w);else switch(99===f&&110===Ye(k,3)?100:f){case 100:case 108:case 109:case 115:Pt(e,S,S,r&&Ze(Ot(e,S,S,0,0,o,l,b,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Pt(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=y=1,b=k="",d=i;break;case 58:d=1+Je(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==ct())continue;switch(k+=We(v),v*m){case 38:y=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Je(k)-1)*y,y=1;break;case 64:45===ft()&&(k+=vt(dt())),f=ft(),c=d=Je(b=k+=kt(pt())),v++;break;case 45:45===h&&2==Je(k)&&(m=0)}}return a}function Ot(e,t,n,r,o,a,i,l,s,u,c,d){for(var f=o-1,p=0===o?a:[""],h=Xe(p),m=0,g=0,y=0;m<r;++m)for(var v=0,b=Ge(e,f+1,f=Be(g=i[m])),x=e;v<h;++v)(x=qe(g>0?p[v]+" "+b:Ke(b,/&\f/g,p[v])))&&(s[y++]=x);return lt(e,t,n,0===o?Ue:l,s,u,c,d)}function Rt(e,t,n,r){return lt(e,t,n,Ie,We(at),Ge(e,2,-2),0,r)}function Nt(e,t,n,r,o){return lt(e,t,n,Me,Ge(e,0,r),Ge(e,r+1,-1),r,o)}var zt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Lt="active",At="data-styled-version",Ft="6.1.17",It="/*!sc*/\n",Ut="undefined"!=typeof window&&"HTMLElement"in window,Mt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),$t=(new Set,Object.freeze([])),Bt=Object.freeze({});function Wt(e,t,n){return void 0===n&&(n=Bt),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vt=/(^-|-$)/g;function Kt(e){return e.replace(qt,"-").replace(Vt,"")}var Qt=/(a)(d)/gi,Yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yt(t%52)+n;return(Yt(t%52)+n).replace(Qt,"$1-$2")}var Jt,Xt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zt=function(e){return Xt(5381,e)};function en(e){return Gt(Zt(e)>>>0)}function tn(e){return e.displayName||e.name||"Component"}function nn(e){return"string"==typeof e&&!0}var rn="function"==typeof Symbol&&Symbol.for,on=rn?Symbol.for("react.memo"):60115,an=rn?Symbol.for("react.forward_ref"):60112,ln={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cn=((Jt={})[an]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt[on]=un,Jt);function dn(e){return("type"in(t=e)&&t.type.$$typeof)===on?un:"$$typeof"in e?cn[e.$$typeof]:ln;var t}var fn=Object.defineProperty,pn=Object.getOwnPropertyNames,hn=Object.getOwnPropertySymbols,mn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,yn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(yn){var r=gn(t);r&&r!==yn&&vn(e,r,n)}var o=pn(t);hn&&(o=o.concat(hn(t)));for(var a=dn(e),i=dn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in sn||n&&n[s]||i&&s in i||a&&s in a)){var u=mn(t,s);try{fn(e,s,u)}catch(e){}}}}return e}function bn(e){return"function"==typeof e}function xn(e){return"object"==typeof e&&"styledComponentId"in e}function wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Sn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function kn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jn(e,t,n){if(void 0===n&&(n=!1),!n&&!kn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=jn(e[r],t[r]);else if(kn(t))for(var r in t)e[r]=jn(e[r],t[r]);return e}function En(e,t){Object.defineProperty(e,"toString",{value:t})}function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _n=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Cn(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=r;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,a=r;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(It);return t},e}(),Tn=new Map,Pn=new Map,On=1,Rn=function(e){if(Tn.has(e))return Tn.get(e);for(;Pn.has(On);)On++;var t=On++;return Tn.set(e,t),Pn.set(t,e),t},Nn=function(e,t){On=t+1,Tn.set(e,t),Pn.set(t,e)},zn="style[".concat(Dt,"][").concat(At,'="').concat(Ft,'"]'),Dn=new RegExp("^".concat(Dt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ln=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},An=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(It),o=[],a=0,i=r.length;a<i;a++){var l=r[a].trim();if(l){var s=l.match(Dn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Nn(c,u),Ln(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},Fn=function(e){for(var t=document.querySelectorAll(zn),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Dt)!==Lt&&(An(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function In(){return n.nc}var Un=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Dt,"]")));return t[t.length-1]}(n),a=void 0!==o?o.nextSibling:null;r.setAttribute(Dt,Lt),r.setAttribute(At,Ft);var i=In();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},Mn=function(){function e(e){this.element=Un(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Cn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),$n=function(){function e(e){this.element=Un(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wn=Ut,Hn={isServer:!Ut,useCSSOMInjection:!Mt},qn=function(){function e(e,t,n){void 0===e&&(e=Bt),void 0===t&&(t={});var r=this;this.options=Re(Re({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ut&&Wn&&(Wn=!1,Fn(this)),En(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Pn.get(e)}(n);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(n);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(Dt,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(It)},a=0;a<n;a++)o(a);return r}(r)}))}return e.registerId=function(e){return Rn(e)},e.prototype.rehydrate=function(){!this.server&&Ut&&Fn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bn(n):t?new Mn(n):new $n(n)}(this.options),new _n(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Rn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Rn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Rn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vn=/&/g,Kn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e}))}function Yn(e){var t,n,r,o=void 0===e?Bt:e,a=o.options,i=void 0===a?Bt:a,l=o.plugins,s=void 0===l?$t:l,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Ue&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Vn,n).replace(r,u))})),i.prefix&&c.push(_t),c.push(Et);var d=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Kn,""),u=Tt(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(u=Qn(u,i.namespace));var d,f=[];return jt(u,function(e){var t=Xe(e);return function(n,r,o,a){for(var i="",l=0;l<t;l++)i+=e[l](n,r,o,a)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||Cn(15),Xt(e,t.name)}),5381).toString():"",d}var Gn=new qn,Jn=Yn(),Xn=r.createContext({shouldForwardProp:void 0,styleSheet:Gn,stylis:Jn}),Zn=(Xn.Consumer,r.createContext(void 0));function er(){return(0,r.useContext)(Xn)}function tr(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],a=er().styleSheet,i=(0,r.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),l=(0,r.useMemo)((function(){return Yn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){De()(n,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return r.createElement(Xn.Provider,{value:s},r.createElement(Zn.Provider,{value:l},e.children))}var nr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Jn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,En(this,(function(){throw Cn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Jn),this.name+e.hash},e}(),rr=function(e){return e>="A"&&e<="Z"};function or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;rr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ar=function(e){return null==e||!1===e||""===e},ir=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!ar(a)&&(Array.isArray(a)&&a.isCss||bn(a)?r.push("".concat(or(o),":"),a,";"):kn(a)?r.push.apply(r,Ne(Ne(["".concat(o," {")],ir(a),!1),["}"],!1)):r.push("".concat(or(o),": ").concat((t=o,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in zt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function lr(e,t,n,r){return ar(e)?[]:xn(e)?[".".concat(e.styledComponentId)]:bn(e)?!bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:lr(e(t),t,n,r):e instanceof nr?n?(e.inject(n,r),[e.getName(r)]):[e]:kn(e)?ir(e):Array.isArray(e)?Array.prototype.concat.apply($t,e.map((function(e){return lr(e,t,n,r)}))):[e.toString()];var o}function sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bn(n)&&!xn(n))return!1}return!0}var ur=Zt(Ft),cr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&sr(e),this.componentId=t,this.baseHash=Xt(ur,t),this.baseStyle=n,qn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=wn(r,this.staticRulesId);else{var o=Sn(lr(this.rules,e,t,n)),a=Gt(Xt(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=n(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}r=wn(r,a),this.staticRulesId=a}else{for(var l=Xt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Sn(lr(c,e,t,n));l=Xt(l,d+u),s+=d}}if(s){var f=Gt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=wn(r,f)}}return r},e}(),dr=r.createContext(void 0);dr.Consumer;function fr(e){var t=r.useContext(dr),n=(0,r.useMemo)((function(){return function(e,t){if(!e)throw Cn(14);if(bn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Cn(8);return t?Re(Re({},t),e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(dr.Provider,{value:n},e.children):null}var pr={};new Set;function hr(e,t,n){var o=xn(e),a=e,i=!nn(e),l=t.attrs,s=void 0===l?$t:l,u=t.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Kt(e);pr[n]=(pr[n]||0)+1;var r="".concat(n,"-").concat(en(Ft+n+pr[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):u,d=t.displayName,f=void 0===d?function(e){return nn(e)?"styled.".concat(e):"Styled(".concat(tn(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Kt(t.displayName),"-").concat(t.componentId):t.componentId||c,h=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new cr(n,p,o?a.componentStyle:void 0);function b(e,t){return function(e,t,n){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=r.useContext(dr),d=er(),f=e.shouldForwardProp||d.shouldForwardProp,p=Wt(t,c,i)||Bt,h=function(e,t,n){for(var r,o=Re(Re({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=bn(r=e[a])?r(o):r;for(var l in i)o[l]="className"===l?wn(o[l],i[l]):"style"===l?Re(Re({},o[l]),i[l]):i[l]}return t.className&&(o.className=wn(o.className,t.className)),o}(o,t,p),m=h.as||u,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===p||("forwardedAs"===y?g.as=h.forwardedAs:f&&!f(y,m)||(g[y]=h[y]));var v=function(e,t){var n=er();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),b=wn(l,s);return v&&(b+=" "+v),h.className&&(b+=" "+h.className),g[nn(m)&&!Ht.has(m)?"class":"className"]=b,n&&(g.ref=n),(0,r.createElement)(m,g)}(x,e,t)}b.displayName=f;var x=r.forwardRef(b);return x.attrs=h,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?wn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=p,x.target=o?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)jn(e,o[r],!0);return e}({},a.defaultProps,e):e}}),En(x,(function(){return".".concat(x.styledComponentId)})),i&&vn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function mr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var gr=function(e){return Object.assign(e,{isCss:!0})};function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bn(e)||kn(e))return gr(lr(mr($t,Ne([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?lr(r):gr(lr(mr(r,t)))}function vr(e,t,n){if(void 0===n&&(n=Bt),!t)throw Cn(1,t);var r=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,yr.apply(void 0,Ne([r],o,!1)))};return r.attrs=function(r){return vr(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return vr(e,t,Re(Re({},n),r))},r}var br=function(e){return vr(hr,e)},xr=br;Ht.forEach((function(e){xr[e]=br(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=sr(e),qn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Sn(lr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&qn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=In(),r=Sn([n&&'nonce="'.concat(n,'"'),"".concat(Dt,'="true"'),"".concat(At,'="').concat(Ft,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Cn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Cn(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[Dt]="",t[At]=Ft,t.dangerouslySetInnerHTML={__html:n},t),a=In();return a&&(o.nonce=a),[r.createElement("style",Re({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new qn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Cn(2);return r.createElement(tr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Cn(3)}})(),"__sc-".concat(Dt,"__");var wr=n(579);const Sr=xr.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,kr=xr(Te)`
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
`,jr=xr.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Er=xr(Te)`
  text-decoration: none;
  color: ${e=>e.active?"#6c5ce7":"#666"};
  font-weight: ${e=>e.active?"bold":"normal"};
  padding-bottom: 0.25rem;
  border-bottom: ${e=>e.active?"2px solid #6c5ce7":"none"};
  transition: all 0.2s ease;
  
  &:hover {
    color: #6c5ce7;
  }
`,Cr=xr.div`
  display: flex;
  gap: 1rem;
`,_r=xr(Te)`
  text-decoration: none;
  color: #6c5ce7;
  font-weight: 500;
`,Tr=xr(Te)`
  text-decoration: none;
  background-color: #6c5ce7;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,Pr=xr.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`,Or=xr.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Rr=e=>{let{isLoggedIn:t=!1}=e;const n=J();return(0,wr.jsxs)(Sr,{children:[(0,wr.jsx)(kr,{to:t?"/dashboard":"/",children:"StudyBuddy"}),t?(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsxs)(jr,{children:[(0,wr.jsx)(Er,{to:"/dashboard",active:"/dashboard"===n.pathname,children:"Dashboard"}),(0,wr.jsx)(Er,{to:"/ai-qna",active:"/ai-qna"===n.pathname,children:"AI-Powered Q&A"}),(0,wr.jsx)(Er,{to:"/study-plan",active:"/study-plan"===n.pathname,children:"Study Plan"}),(0,wr.jsx)(Er,{to:"/quizzes",active:"/quizzes"===n.pathname,children:"Quizzes"}),(0,wr.jsx)(Er,{to:"/flashcards",active:"/flashcards"===n.pathname,children:"Flashcards"}),(0,wr.jsx)(Er,{to:"/pomodoro",active:"/pomodoro"===n.pathname,children:"Pomodoro Timer"})]}),(0,wr.jsx)(Pr,{children:(0,wr.jsx)(Or,{src:"https://media.licdn.com/dms/image/v2/D4D03AQEiOknesJ1i7A/profile-displayphoto-shrink_400_400/B4DZSjWEz7GcAg-/0/1737907261223?e=1750291200&v=beta&t=3oGMZLUrSn3v5fOg6FapKZ04ykHIb649vU7n76b3C_M",alt:"Profile"})})]}):(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsxs)(jr,{children:[(0,wr.jsx)(Er,{to:"/",active:"/"===n.pathname,children:"Home"}),(0,wr.jsx)(Er,{to:"/features",active:"/features"===n.pathname,children:"Features"}),(0,wr.jsx)(Er,{to:"/about",active:"/about"===n.pathname,children:"About"}),(0,wr.jsx)(Er,{to:"/contact",active:"/contact"===n.pathname,children:"Contact"})]}),(0,wr.jsxs)(Cr,{children:[(0,wr.jsx)(_r,{to:"/login",children:"Login"}),(0,wr.jsx)(Tr,{to:"/signup",children:"Sign Up"})]})]})]})},Nr=xr.div`
  font-family: 'Inter', sans-serif;
`,zr=xr.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background-color: #f8f9ff;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`,Dr=xr.div`
  max-width: 500px;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,Lr=xr.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ar=xr.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`,Fr=xr(Te)`
  display: inline-block;
  background-color: #6c5ce7;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,Ir=xr.div`
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
  }
`,Ur=xr.section`
  padding: 4rem 6rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`,Mr=xr.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #333;
`,$r=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Br=xr.div`
  background-color: #f8f9ff;
  padding: 2rem;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`,Wr=xr.div`
  width: 50px;
  height: 50px;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,Hr=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,qr=xr.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
`,Vr=xr(Te)`
  display: inline-block;
  color: #6c5ce7;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Kr=()=>(0,wr.jsxs)(Nr,{children:[(0,wr.jsx)(Rr,{}),(0,wr.jsxs)(zr,{children:[(0,wr.jsxs)(Dr,{children:[(0,wr.jsx)(Lr,{children:"Study Smarter, Not Harder!"}),(0,wr.jsx)(Ar,{children:"Your AI-powered study companion that adapts to your learning style and helps you achieve academic success."}),(0,wr.jsx)(Fr,{to:"/dashboard",children:"Get Started Free"})]}),(0,wr.jsx)(Ir,{children:(0,wr.jsx)("img",{src:"https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-big-books-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-learning-online-education-using-study-attending-class-back-to-school-pack-illustrations-4779537.png",alt:"Student studying with laptop"})})]}),(0,wr.jsxs)(Ur,{children:[(0,wr.jsx)(Mr,{children:"Key Features"}),(0,wr.jsxs)($r,{children:[(0,wr.jsxs)(Br,{children:[(0,wr.jsx)(Wr,{children:"\ud83e\udd16"}),(0,wr.jsx)(Hr,{children:"AI-powered Q&A"}),(0,wr.jsx)(qr,{children:"Get instant answers to your study questions with our advanced AI assistant."}),(0,wr.jsx)(Vr,{to:"/ai-qna",children:"Learn More"})]}),(0,wr.jsxs)(Br,{children:[(0,wr.jsx)(Wr,{children:"\ud83d\udcdd"}),(0,wr.jsx)(Hr,{children:"Personalized Study Plans"}),(0,wr.jsx)(qr,{children:"Custom learning paths based on your goals, schedule, and learning style."}),(0,wr.jsx)(Vr,{to:"/study-plan",children:"Learn More"})]}),(0,wr.jsxs)(Br,{children:[(0,wr.jsx)(Wr,{children:"\ud83d\udcca"}),(0,wr.jsx)(Hr,{children:"Interactive Quizzes"}),(0,wr.jsx)(qr,{children:"Test your knowledge with adaptive quizzes that focus on your weak areas."}),(0,wr.jsx)(Vr,{to:"/quizzes",children:"Learn More"})]}),(0,wr.jsxs)(Br,{children:[(0,wr.jsx)(Wr,{children:"\ud83d\udd04"}),(0,wr.jsx)(Hr,{children:"Flashcards"}),(0,wr.jsx)(qr,{children:"Create and study digital flashcards with spaced repetition technology."}),(0,wr.jsx)(Vr,{to:"/flashcards",children:"Learn More"})]}),(0,wr.jsxs)(Br,{children:[(0,wr.jsx)(Wr,{children:"\u23f1\ufe0f"}),(0,wr.jsx)(Hr,{children:"Pomodoro Timer"}),(0,wr.jsx)(qr,{children:"Stay focused with our built-in study timer based on the Pomodoro technique."}),(0,wr.jsx)(Vr,{to:"/pomodoro",children:"Learn More"})]})]})]})]});function Qr(e,t){return function(){return e.apply(t,arguments)}}const{toString:Yr}=Object.prototype,{getPrototypeOf:Gr}=Object,{iterator:Jr,toStringTag:Xr}=Symbol,Zr=(eo=Object.create(null),e=>{const t=Yr.call(e);return eo[t]||(eo[t]=t.slice(8,-1).toLowerCase())});var eo;const to=e=>(e=e.toLowerCase(),t=>Zr(t)===e),no=e=>t=>typeof t===e,{isArray:ro}=Array,oo=no("undefined");const ao=to("ArrayBuffer");const io=no("string"),lo=no("function"),so=no("number"),uo=e=>null!==e&&"object"===typeof e,co=e=>{if("object"!==Zr(e))return!1;const t=Gr(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Xr in e)&&!(Jr in e)},fo=to("Date"),po=to("File"),ho=to("Blob"),mo=to("FileList"),go=to("URLSearchParams"),[yo,vo,bo,xo]=["ReadableStream","Request","Response","Headers"].map(to);function wo(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),ro(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let i;for(n=0;n<a;n++)i=r[n],t.call(null,e[i],i,e)}}function So(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const ko="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,jo=e=>!oo(e)&&e!==ko;const Eo=(Co="undefined"!==typeof Uint8Array&&Gr(Uint8Array),e=>Co&&e instanceof Co);var Co;const _o=to("HTMLFormElement"),To=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Po=to("RegExp"),Oo=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};wo(n,((n,o)=>{let a;!1!==(a=t(n,o,e))&&(r[o]=a||n)})),Object.defineProperties(e,r)};const Ro=to("AsyncFunction"),No=(zo="function"===typeof setImmediate,Do=lo(ko.postMessage),zo?setImmediate:Do?((e,t)=>(ko.addEventListener("message",(n=>{let{source:r,data:o}=n;r===ko&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),ko.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var zo,Do;const Lo="undefined"!==typeof queueMicrotask?queueMicrotask.bind(ko):"undefined"!==typeof process&&process.nextTick||No,Ao={isArray:ro,isArrayBuffer:ao,isBuffer:function(e){return null!==e&&!oo(e)&&null!==e.constructor&&!oo(e.constructor)&&lo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||lo(e.append)&&("formdata"===(t=Zr(e))||"object"===t&&lo(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ao(e.buffer),t},isString:io,isNumber:so,isBoolean:e=>!0===e||!1===e,isObject:uo,isPlainObject:co,isReadableStream:yo,isRequest:vo,isResponse:bo,isHeaders:xo,isUndefined:oo,isDate:fo,isFile:po,isBlob:ho,isRegExp:Po,isFunction:lo,isStream:e=>uo(e)&&lo(e.pipe),isURLSearchParams:go,isTypedArray:Eo,isFileList:mo,forEach:wo,merge:function e(){const{caseless:t}=jo(this)&&this||{},n={},r=(r,o)=>{const a=t&&So(n,o)||o;co(n[a])&&co(r)?n[a]=e(n[a],r):co(r)?n[a]=e({},r):ro(r)?n[a]=r.slice():n[a]=r};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&wo(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wo(t,((t,r)=>{n&&lo(t)?e[r]=Qr(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,a,i;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)i=o[a],r&&!r(i,e,t)||l[i]||(t[i]=e[i],l[i]=!0);e=!1!==n&&Gr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Zr,kindOfTest:to,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(ro(e))return e;let t=e.length;if(!so(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Jr]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:_o,hasOwnProperty:To,hasOwnProp:To,reduceDescriptors:Oo,freezeMethods:e=>{Oo(e,((t,n)=>{if(lo(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];lo(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return ro(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:So,global:ko,isContextDefined:jo,isSpecCompliantForm:function(e){return!!(e&&lo(e.append)&&"FormData"===e[Xr]&&e[Jr])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(uo(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=ro(e)?[]:{};return wo(e,((e,t)=>{const a=n(e,r+1);!oo(a)&&(o[t]=a)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Ro,isThenable:e=>e&&(uo(e)||lo(e))&&lo(e.then)&&lo(e.catch),setImmediate:No,asap:Lo,isIterable:e=>null!=e&&lo(e[Jr])};function Fo(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Ao.inherits(Fo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ao.toJSONObject(this.config),code:this.code,status:this.status}}});const Io=Fo.prototype,Uo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Uo[e]={value:e}})),Object.defineProperties(Fo,Uo),Object.defineProperty(Io,"isAxiosError",{value:!0}),Fo.from=(e,t,n,r,o,a)=>{const i=Object.create(Io);return Ao.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Fo.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,a&&Object.assign(i,a),i};const Mo=Fo;function $o(e){return Ao.isPlainObject(e)||Ao.isArray(e)}function Bo(e){return Ao.endsWith(e,"[]")?e.slice(0,-2):e}function Wo(e,t,n){return e?e.concat(t).map((function(e,t){return e=Bo(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ho=Ao.toFlatObject(Ao,{},null,(function(e){return/^is[A-Z]/.test(e)}));const qo=function(e,t,n){if(!Ao.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Ao.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ao.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,a=n.dots,i=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Ao.isSpecCompliantForm(t);if(!Ao.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(Ao.isDate(e))return e.toISOString();if(!l&&Ao.isBlob(e))throw new Mo("Blob is not supported. Use a Buffer instead.");return Ao.isArrayBuffer(e)||Ao.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(Ao.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ao.isArray(e)&&function(e){return Ao.isArray(e)&&!e.some($o)}(e)||(Ao.isFileList(e)||Ao.endsWith(n,"[]"))&&(l=Ao.toArray(e)))return n=Bo(n),l.forEach((function(e,r){!Ao.isUndefined(e)&&null!==e&&t.append(!0===i?Wo([n],r,a):null===i?n:n+"[]",s(e))})),!1;return!!$o(e)||(t.append(Wo(o,n,a),s(e)),!1)}const c=[],d=Object.assign(Ho,{defaultVisitor:u,convertValue:s,isVisitable:$o});if(!Ao.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Ao.isUndefined(n)){if(-1!==c.indexOf(n))throw Error("Circular reference detected in "+r.join("."));c.push(n),Ao.forEach(n,(function(n,a){!0===(!(Ao.isUndefined(n)||null===n)&&o.call(t,n,Ao.isString(a)?a.trim():a,r,d))&&e(n,r?r.concat(a):[a])})),c.pop()}}(e),t};function Vo(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ko(e,t){this._pairs=[],e&&qo(e,this,t)}const Qo=Ko.prototype;Qo.append=function(e,t){this._pairs.push([e,t])},Qo.toString=function(e){const t=e?function(t){return e.call(this,t,Vo)}:Vo;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Yo=Ko;function Go(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jo(e,t,n){if(!t)return e;const r=n&&n.encode||Go;Ao.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let a;if(a=o?o(t,n):Ao.isURLSearchParams(t)?t.toString():new Yo(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const Xo=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ao.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Zo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ea={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Yo,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ta="undefined"!==typeof window&&"undefined"!==typeof document,na="object"===typeof navigator&&navigator||void 0,ra=ta&&(!na||["ReactNative","NativeScript","NS"].indexOf(na.product)<0),oa="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,aa=ta&&window.location.href||"http://localhost",ia={...e,...ea};const la=function(e){function t(e,n,r,o){let a=e[o++];if("__proto__"===a)return!0;const i=Number.isFinite(+a),l=o>=e.length;if(a=!a&&Ao.isArray(r)?r.length:a,l)return Ao.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!i;r[a]&&Ao.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],o)&&Ao.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}(r[a])),!i}if(Ao.isFormData(e)&&Ao.isFunction(e.entries)){const n={};return Ao.forEachEntry(e,((e,r)=>{t(function(e){return Ao.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const sa={transitional:Zo,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Ao.isObject(e);o&&Ao.isHTMLForm(e)&&(e=new FormData(e));if(Ao.isFormData(e))return r?JSON.stringify(la(e)):e;if(Ao.isArrayBuffer(e)||Ao.isBuffer(e)||Ao.isStream(e)||Ao.isFile(e)||Ao.isBlob(e)||Ao.isReadableStream(e))return e;if(Ao.isArrayBufferView(e))return e.buffer;if(Ao.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return qo(e,new ia.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ia.isNode&&Ao.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((a=Ao.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return qo(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Ao.isString(e))try{return(t||JSON.parse)(e),Ao.trim(e)}catch(Vu){if("SyntaxError"!==Vu.name)throw Vu}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||sa.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Ao.isResponse(e)||Ao.isReadableStream(e))return e;if(e&&Ao.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(Vu){if(n){if("SyntaxError"===Vu.name)throw Mo.from(Vu,Mo.ERR_BAD_RESPONSE,this,null,this.response);throw Vu}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ia.classes.FormData,Blob:ia.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ao.forEach(["delete","get","head","post","put","patch"],(e=>{sa.headers[e]={}}));const ua=sa,ca=Ao.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),da=Symbol("internals");function fa(e){return e&&String(e).trim().toLowerCase()}function pa(e){return!1===e||null==e?e:Ao.isArray(e)?e.map(pa):String(e)}function ha(e,t,n,r,o){return Ao.isFunction(r)?r.call(this,t,n):(o&&(t=n),Ao.isString(t)?Ao.isString(r)?-1!==t.indexOf(r):Ao.isRegExp(r)?r.test(t):void 0:void 0)}class ma{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=fa(t);if(!o)throw new Error("header name must be a non-empty string");const a=Ao.findKey(r,o);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=pa(e))}const a=(e,t)=>Ao.forEach(e,((e,n)=>o(e,n,t)));if(Ao.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Ao.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ca[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Ao.isObject(e)&&Ao.isIterable(e)){let n,r,o={};for(const t of e){if(!Ao.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[r=t[0]]=(n=o[r])?Ao.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}a(o,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=fa(e)){const n=Ao.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Ao.isFunction(t))return t.call(this,e,n);if(Ao.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=fa(e)){const n=Ao.findKey(this,e);return!(!n||void 0===this[n]||t&&!ha(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=fa(e)){const o=Ao.findKey(n,e);!o||t&&!ha(0,n[o],o,t)||(delete n[o],r=!0)}}return Ao.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ha(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Ao.forEach(this,((r,o)=>{const a=Ao.findKey(n,o);if(a)return t[a]=pa(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=pa(r),n[i]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ao.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ao.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[da]=this[da]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=fa(e);t[r]||(!function(e,t){const n=Ao.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Ao.isArray(e)?e.forEach(r):r(e),this}}ma.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ao.reduceDescriptors(ma.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Ao.freezeMethods(ma);const ga=ma;function ya(e,t){const n=this||ua,r=t||n,o=ga.from(r.headers);let a=r.data;return Ao.forEach(e,(function(e){a=e.call(n,a,o.normalize(),t?t.status:void 0)})),o.normalize(),a}function va(e){return!(!e||!e.__CANCEL__)}function ba(e,t,n){Mo.call(this,null==e?"canceled":e,Mo.ERR_CANCELED,t,n),this.name="CanceledError"}Ao.inherits(ba,Mo,{__CANCEL__:!0});const xa=ba;function wa(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Mo("Request failed with status code "+n.status,[Mo.ERR_BAD_REQUEST,Mo.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Sa=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,a=0,i=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),u=r[i];o||(o=s),n[a]=l,r[a]=s;let c=i,d=0;for(;c!==a;)d+=n[c++],c%=e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),s-o<t)return;const f=u&&s-u;return f?Math.round(1e3*d/f):void 0}};const ka=function(e,t){let n,r,o=0,a=1e3/t;const i=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=a,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];t>=a?i(s,e):(n=s,r||(r=setTimeout((()=>{r=null,i(n)}),a-t)))},()=>n&&i(n)]},ja=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=Sa(50,250);return ka((n=>{const a=n.loaded,i=n.lengthComputable?n.total:void 0,l=a-r,s=o(l);r=a;e({loaded:a,total:i,progress:i?a/i:void 0,bytes:l,rate:s||void 0,estimated:s&&i&&a<=i?(i-a)/s:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},Ea=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ca=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ao.asap((()=>e(...n)))},_a=ia.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ia.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ia.origin),ia.navigator&&/(msie|trident)/i.test(ia.navigator.userAgent)):()=>!0,Ta=ia.hasStandardBrowserEnv?{write(e,t,n,r,o,a){const i=[e+"="+encodeURIComponent(t)];Ao.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Ao.isString(r)&&i.push("path="+r),Ao.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Pa(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Oa=e=>e instanceof ga?{...e}:e;function Ra(e,t){t=t||{};const n={};function r(e,t,n,r){return Ao.isPlainObject(e)&&Ao.isPlainObject(t)?Ao.merge.call({caseless:r},e,t):Ao.isPlainObject(t)?Ao.merge({},t):Ao.isArray(t)?t.slice():t}function o(e,t,n,o){return Ao.isUndefined(t)?Ao.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function a(e,t){if(!Ao.isUndefined(t))return r(void 0,t)}function i(e,t){return Ao.isUndefined(t)?Ao.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,a){return a in t?r(n,o):a in e?r(void 0,n):void 0}const s={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(e,t,n)=>o(Oa(e),Oa(t),0,!0)};return Ao.forEach(Object.keys(Object.assign({},e,t)),(function(r){const a=s[r]||o,i=a(e[r],t[r],r);Ao.isUndefined(i)&&a!==l||(n[r]=i)})),n}const Na=e=>{const t=Ra({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:i,headers:l,auth:s}=t;if(t.headers=l=ga.from(l),t.url=Jo(Pa(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),Ao.isFormData(r))if(ia.hasStandardBrowserEnv||ia.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(ia.hasStandardBrowserEnv&&(o&&Ao.isFunction(o)&&(o=o(t)),o||!1!==o&&_a(t.url))){const e=a&&i&&Ta.read(i);e&&l.set(a,e)}return t},za="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Na(e);let o=r.data;const a=ga.from(r.headers).normalize();let i,l,s,u,c,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){u&&u(),c&&c(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=ga.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());wa((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new Mo("Request aborted",Mo.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new Mo("Network Error",Mo.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||Zo;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Mo(t,o.clarifyTimeoutError?Mo.ETIMEDOUT:Mo.ECONNABORTED,e,m)),m=null},void 0===o&&a.setContentType(null),"setRequestHeader"in m&&Ao.forEach(a.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ao.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([s,c]=ja(p,!0),m.addEventListener("progress",s)),f&&m.upload&&([l,u]=ja(f),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new xa(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===ia.protocols.indexOf(y)?n(new Mo("Unsupported protocol "+y+":",Mo.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Da=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Mo?t:new xa(t instanceof Error?t.message:t))}};let a=t&&setTimeout((()=>{a=null,o(new Mo(`timeout ${t} of ms exceeded`,Mo.ETIMEDOUT))}),t);const i=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:l}=r;return l.unsubscribe=()=>Ao.asap(i),l}},La=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Aa=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Fa=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Aa(e))yield*La(n,t)}(e,t);let a,i=0,l=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let a=r.byteLength;if(n){let e=i+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},Ia="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Ua=Ia&&"function"===typeof ReadableStream,Ma=Ia&&("function"===typeof TextEncoder?($a=new TextEncoder,e=>$a.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var $a;const Ba=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(Vu){return!1}},Wa=Ua&&Ba((()=>{let e=!1;const t=new Request(ia.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ha=Ua&&Ba((()=>Ao.isReadableStream(new Response("").body))),qa={stream:Ha&&(e=>e.body)};var Va;Ia&&(Va=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!qa[e]&&(qa[e]=Ao.isFunction(Va[e])?t=>t[e]():(t,n)=>{throw new Mo(`Response type '${e}' is not supported`,Mo.ERR_NOT_SUPPORT,n)})})));const Ka=async(e,t)=>{const n=Ao.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Ao.isBlob(e))return e.size;if(Ao.isSpecCompliantForm(e)){const t=new Request(ia.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ao.isArrayBufferView(e)||Ao.isArrayBuffer(e)?e.byteLength:(Ao.isURLSearchParams(e)&&(e+=""),Ao.isString(e)?(await Ma(e)).byteLength:void 0)})(t):n},Qa=Ia&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:a,timeout:i,onDownloadProgress:l,onUploadProgress:s,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=Na(e);u=u?(u+"").toLowerCase():"text";let p,h=Da([o,a&&a.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(s&&Wa&&"get"!==n&&"head"!==n&&0!==(g=await Ka(c,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Ao.isFormData(r)&&(e=n.headers.get("content-type"))&&c.setContentType(e),n.body){const[e,t]=Ea(g,ja(Ca(s)));r=Fa(n.body,65536,e,t)}}Ao.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let a=await fetch(p);const i=Ha&&("stream"===u||"response"===u);if(Ha&&(l||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=a[t]}));const t=Ao.toFiniteNumber(a.headers.get("content-length")),[n,r]=l&&Ea(t,ja(Ca(l),!0))||[];a=new Response(Fa(a.body,65536,n,(()=>{r&&r(),m&&m()})),e)}u=u||"text";let y=await qa[Ao.findKey(qa,u)||"text"](a,e);return!i&&m&&m(),await new Promise(((t,n)=>{wa(t,n,{data:y,headers:ga.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:p})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/Load failed|fetch/i.test(y.message))throw Object.assign(new Mo("Network Error",Mo.ERR_NETWORK,e,p),{cause:y.cause||y});throw Mo.from(y,y&&y.code,e,p)}}),Ya={http:null,xhr:za,fetch:Qa};Ao.forEach(Ya,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(Vu){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ga=e=>`- ${e}`,Ja=e=>Ao.isFunction(e)||null===e||!1===e,Xa=e=>{e=Ao.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!Ja(n)&&(r=Ya[(t=String(n)).toLowerCase()],void 0===r))throw new Mo(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+a]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(Ga).join("\n"):" "+Ga(e[0]):"as no adapter specified";throw new Mo("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Za(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xa(null,e)}function ei(e){Za(e),e.headers=ga.from(e.headers),e.data=ya.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Xa(e.adapter||ua.adapter)(e).then((function(t){return Za(e),t.data=ya.call(e,e.transformResponse,t),t.headers=ga.from(t.headers),t}),(function(t){return va(t)||(Za(e),t&&t.response&&(t.response.data=ya.call(e,e.transformResponse,t.response),t.response.headers=ga.from(t.response.headers))),Promise.reject(t)}))}const ti="1.9.0",ni={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ni[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ri={};ni.transitional=function(e,t,n){function r(e,t){return"[Axios v1.9.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,a)=>{if(!1===e)throw new Mo(r(o," has been removed"+(t?" in "+t:"")),Mo.ERR_DEPRECATED);return t&&!ri[o]&&(ri[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,a)}},ni.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const oi={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Mo("options must be an object",Mo.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],i=t[a];if(i){const t=e[a],n=void 0===t||i(t,a,e);if(!0!==n)throw new Mo("option "+a+" must be "+n,Mo.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Mo("Unknown option "+a,Mo.ERR_BAD_OPTION)}},validators:ni},ai=oi.validators;class ii{constructor(e){this.defaults=e||{},this.interceptors={request:new Xo,response:new Xo}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(Vu){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Ra(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&oi.assertOptions(n,{silentJSONParsing:ai.transitional(ai.boolean),forcedJSONParsing:ai.transitional(ai.boolean),clarifyTimeoutError:ai.transitional(ai.boolean)},!1),null!=r&&(Ao.isFunction(r)?t.paramsSerializer={serialize:r}:oi.assertOptions(r,{encode:ai.function,serialize:ai.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),oi.assertOptions(t,{baseUrl:ai.spelling("baseURL"),withXsrfToken:ai.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=o&&Ao.merge(o.common,o[t.method]);o&&Ao.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ga.concat(a,o);const i=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const s=[];let u;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let c,d=0;if(!l){const e=[ei.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,s),c=e.length,u=Promise.resolve(t);d<c;)u=u.then(e[d++],e[d++]);return u}c=i.length;let f=t;for(d=0;d<c;){const e=i[d++],t=i[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{u=ei.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,c=s.length;d<c;)u=u.then(s[d++],s[d++]);return u}getUri(e){return Jo(Pa((e=Ra(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ao.forEach(["delete","get","head","options"],(function(e){ii.prototype[e]=function(t,n){return this.request(Ra(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ao.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ra(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ii.prototype[e]=t(),ii.prototype[e+"Form"]=t(!0)}));const li=ii;class si{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new xa(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new si((function(t){e=t})),cancel:e}}}const ui=si;const ci={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ci).forEach((e=>{let[t,n]=e;ci[n]=t}));const di=ci;const fi=function e(t){const n=new li(t),r=Qr(li.prototype.request,n);return Ao.extend(r,li.prototype,n,{allOwnKeys:!0}),Ao.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ra(t,n))},r}(ua);fi.Axios=li,fi.CanceledError=xa,fi.CancelToken=ui,fi.isCancel=va,fi.VERSION=ti,fi.toFormData=qo,fi.AxiosError=Mo,fi.Cancel=fi.CanceledError,fi.all=function(e){return Promise.all(e)},fi.spread=function(e){return function(t){return e.apply(null,t)}},fi.isAxiosError=function(e){return Ao.isObject(e)&&!0===e.isAxiosError},fi.mergeConfig=Ra,fi.AxiosHeaders=ga,fi.formToJSON=e=>la(Ao.isHTMLForm(e)?new FormData(e):e),fi.getAdapter=Xa,fi.HttpStatusCode=di,fi.default=fi;const pi=fi,hi=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,mi=xr.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,gi=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,yi=xr.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,vi=xr.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,bi=xr.div`
  margin-bottom: 1.5rem;
`,xi=xr.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`,wi=xr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`,Si=xr.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`,ki=xr.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,ji=xr.button`
  background-color: ${e=>e.secondary?"transparent":"#6c5ce7"};
  color: ${e=>e.secondary?"#6c5ce7":"white"};
  border: ${e=>e.secondary?"1px solid #6c5ce7":"none"};
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0ff":"#5a4ad1"};
  }
`,Ei=e=>{let{isOpen:t,onClose:n,onAddTask:o}=e;const[a,i]=(0,r.useState)(""),[l,s]=(0,r.useState)("\ud83d\udcdd"),[u,c]=(0,r.useState)(""),[d,f]=(0,r.useState)("");return t?(0,wr.jsx)(hi,{children:(0,wr.jsxs)(mi,{children:[(0,wr.jsxs)(gi,{children:[(0,wr.jsx)(yi,{children:"Add New Task"}),(0,wr.jsx)(vi,{onClick:n,children:"\xd7"})]}),(0,wr.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),a.trim()){let e="No due date";if(u){const t=(new Date).toISOString().split("T")[0],n=new Date;n.setDate(n.getDate()+1);const r=n.toISOString().split("T")[0];if(u===t)e="Due today";else if(u===r)e="Due tomorrow";else{const n=new Date(u)-new Date(t);e=`Due in ${Math.ceil(n/864e5)} days`}d&&(e+=` at ${d}`)}o({id:Date.now(),title:a,dueDate:e,icon:l,completed:!1}),i(""),s("\ud83d\udcdd"),c(""),f(""),n()}},children:[(0,wr.jsxs)(bi,{children:[(0,wr.jsx)(xi,{htmlFor:"taskTitle",children:"Task Title"}),(0,wr.jsx)(wi,{id:"taskTitle",type:"text",value:a,onChange:e=>i(e.target.value),placeholder:"e.g., Complete Physics Problem Set",required:!0})]}),(0,wr.jsxs)(bi,{children:[(0,wr.jsx)(xi,{htmlFor:"taskType",children:"Task Type"}),(0,wr.jsxs)(Si,{id:"taskType",value:l,onChange:e=>s(e.target.value),children:[(0,wr.jsx)("option",{value:"\ud83d\udcdd",children:"\ud83d\udcdd Assignment"}),(0,wr.jsx)("option",{value:"\ud83d\udcda",children:"\ud83d\udcda Reading"}),(0,wr.jsx)("option",{value:"\ud83c\udfad",children:"\ud83c\udfad Presentation"}),(0,wr.jsx)("option",{value:"\ud83e\uddea",children:"\ud83e\uddea Lab Work"}),(0,wr.jsx)("option",{value:"\ud83d\udcca",children:"\ud83d\udcca Project"}),(0,wr.jsx)("option",{value:"\ud83d\udccc",children:"\ud83d\udccc Other"})]})]}),(0,wr.jsxs)(bi,{children:[(0,wr.jsx)(xi,{htmlFor:"dueDate",children:"Due Date"}),(0,wr.jsx)(wi,{id:"dueDate",type:"date",value:u,onChange:e=>c(e.target.value)})]}),(0,wr.jsxs)(bi,{children:[(0,wr.jsx)(xi,{htmlFor:"dueTime",children:"Due Time (Optional)"}),(0,wr.jsx)(wi,{id:"dueTime",type:"time",value:d,onChange:e=>f(e.target.value)})]}),(0,wr.jsxs)(ki,{children:[(0,wr.jsx)(ji,{type:"button",secondary:!0,onClick:n,children:"Cancel"}),(0,wr.jsx)(ji,{type:"submit",children:"Add Task"})]})]})]})}):null},Ci="https://5001-i2sesrmd08n4cwajrbajw-437f4b1e.manus.computer/api",_i=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ti=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`,Pi=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`,Oi=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`,Ri=xr.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Ni=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,zi=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,Di=xr.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,Li=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,Ai=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
`,Fi=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Ii=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,Ui=xr.div`
  display: flex;
  gap: 0.5rem;
`,Mi=xr.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,$i=(xr.button`
  background-color: transparent;
  color: #6c5ce7;
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f0ff;
  }
`,xr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`),Bi=xr.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,Wi=xr.div`
  width: 2rem;
  height: 2rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1rem;
`,Hi=xr.div`
  flex: 1;
`,qi=xr.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`,Vi=xr.p`
  font-size: 0.8rem;
  color: #666;
`,Ki=xr.div`
  width: 3rem;
`,Qi=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`,Yi=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`,Gi=xr.div`
  width: 2rem;
  height: 2rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1rem;
`,Ji=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,Xi=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,Zi=xr.button`
  background-color: transparent;
  color: #6c5ce7;
  border: none;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #5a4ad1;
  }
`,el=()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!1);(0,r.useEffect)((()=>{pi.get(`${Ci}/tasks`).then((e=>{t(e.data)})).catch((e=>{console.error("Error fetching tasks:",e)}))}),[]);return(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(_i,{children:[(0,wr.jsx)(Ti,{children:"Dashboard"}),(0,wr.jsxs)(Pi,{children:[(0,wr.jsxs)(Oi,{children:[(0,wr.jsx)(Ri,{children:"QUICK ACCESS"}),(0,wr.jsx)(Ni,{children:"Start Study Session"}),(0,wr.jsx)(zi,{children:"Begin a focused study session with your current materials"}),(0,wr.jsx)(Di,{children:"Start Now"})]}),(0,wr.jsxs)(Oi,{children:[(0,wr.jsx)(Ri,{children:"QUICK ACCESS"}),(0,wr.jsx)(Ni,{children:"Take a Quiz"}),(0,wr.jsx)(zi,{children:"Test your knowledge with a quiz from your recent topics"}),(0,wr.jsx)(Di,{children:"Start Quiz"})]}),(0,wr.jsxs)(Oi,{children:[(0,wr.jsx)(Ri,{children:"QUICK ACCESS"}),(0,wr.jsx)(Ni,{children:"Ask AI Assistant"}),(0,wr.jsx)(zi,{children:"Get instant help with difficult concepts or homework"}),(0,wr.jsx)(Di,{children:"Ask Question"})]})]}),(0,wr.jsx)(Li,{children:"To-Do List"}),(0,wr.jsxs)(Ai,{children:[(0,wr.jsxs)(Fi,{children:[(0,wr.jsxs)("div",{children:[(0,wr.jsx)(Li,{children:"Today's Tasks"}),(0,wr.jsx)(Ii,{children:"Manage your study tasks and track completion"})]}),(0,wr.jsx)(Ui,{children:(0,wr.jsx)(Mi,{onClick:()=>o(!0),children:"Add Task"})})]}),(0,wr.jsxs)($i,{children:[e.map((n=>(0,wr.jsxs)(Bi,{style:{opacity:"Done"===n.status?.6:1},children:[(0,wr.jsx)(Wi,{children:"\ud83d\udcdd"})," ",(0,wr.jsxs)(Hi,{children:[(0,wr.jsx)(qi,{style:{textDecoration:"Done"===n.status?"line-through":"none"},children:n.title}),(0,wr.jsxs)(Vi,{children:[n.dueDate?`Due: ${new Date(n.dueDate).toLocaleDateString()}`:"No due date"," | Priority: ",n.priority," | Status: ",n.status]})]}),(0,wr.jsxs)(Ki,{children:[(0,wr.jsx)("input",{type:"checkbox",checked:"Done"===n.status,onChange:()=>((n,r)=>{const o="Done"===r?"To Do":"Done";pi.post(`${Ci}/tasks/update/${n}`,{status:o}).then((r=>{const o=r.data;t(e.map((e=>e._id===n?o:e)))})).catch((e=>{console.error("Error updating task status:",e)}))})(n._id,n.status),style:{marginRight:"10px"}}),(0,wr.jsx)("button",{onClick:()=>{return r=n._id,void pi.delete(`${Ci}/tasks/${r}`).then((n=>{console.log(n.data),t(e.filter((e=>e._id!==r)))})).catch((e=>{console.error("Error deleting task:",e)}));var r},style:{background:"none",border:"none",color:"red",cursor:"pointer"},children:"X"})]})]},n._id))),0===e.length&&(0,wr.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:'No tasks yet. Click "Add Task" to create your first task.'})]})]}),(0,wr.jsx)(Li,{children:"Progress Tracker"}),(0,wr.jsxs)(Qi,{children:[(0,wr.jsxs)(Yi,{children:[(0,wr.jsx)(Gi,{children:"\ud83d\udcca"}),(0,wr.jsx)(Ji,{children:"Quiz Completion"}),(0,wr.jsx)(Xi,{children:"You've completed 8 of 10 quizzes this week"}),(0,wr.jsx)(Zi,{children:"View Details"})]}),(0,wr.jsxs)(Yi,{children:[(0,wr.jsx)(Gi,{children:"\u23f1\ufe0f"}),(0,wr.jsx)(Ji,{children:"Study Sessions"}),(0,wr.jsx)(Xi,{children:"12 hours of focused study time this week"}),(0,wr.jsx)(Zi,{children:"View Details"})]}),(0,wr.jsxs)(Yi,{children:[(0,wr.jsx)(Gi,{children:"\ud83d\udcc8"}),(0,wr.jsx)(Ji,{children:"Pomodoro Cycles"}),(0,wr.jsx)(Xi,{children:"Completed 24 Pomodoro cycles this week"}),(0,wr.jsx)(Zi,{children:"View Details"})]})]}),(0,wr.jsx)(Ei,{isOpen:n,onClose:()=>o(!1),onAddTask:e=>{pi.post(`${Ci}/tasks/add`,e).then((e=>{const n=e.data;t((e=>[...e,n])),o(!1)})).catch((e=>{console.error("Error adding task:",e)}))}})]})]})},tl="https://5001-i2sesrmd08n4cwajrbajw-437f4b1e.manus.computer/api",nl=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,rl=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`,ol=xr.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`,al=xr.span`
  margin: 0 0.5rem;
  color: #666;
`,il=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`,ll=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`,sl=xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,ul=xr.div`
  flex: 1;
`,cl=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,dl=xr.p`
  font-size: 0.9rem;
  color: #666;
`,fl=xr.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`,pl=xr.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`,hl=xr.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,ml=xr.div`
  margin-top: 3rem;
  /* Removed max-height and overflow for simplicity, can be added back */
  /* border: 1px solid #ddd; */
  /* border-radius: 8px; */
  /* background-color: #f9f9f9; */
`,gl=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,yl=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,vl=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,bl=xr.div`
  width: 2rem;
  height: 2rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1rem;
`,xl=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`,wl=xr.div`
  margin-bottom: 1.5rem;
`,Sl=xr.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`,kl=()=>{const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)([]),[a,i]=(0,r.useState)(!0),[l,s]=(0,r.useState)(null),[u,c]=(0,r.useState)("");(0,r.useEffect)((()=>{i(!0),pi.get(`${tl}/aiqna`).then((e=>{o(e.data.reverse()),i(!1)})).catch((e=>{console.error("Error fetching conversation history:",e),s("Failed to load conversation history."),i(!1)}))}),[]);return l?(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(nl,{children:[(0,wr.jsx)(il,{children:"Error"}),(0,wr.jsx)("p",{style:{color:"red"},children:l})]})]}):(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(nl,{children:[(0,wr.jsxs)(rl,{children:[(0,wr.jsx)(ol,{href:"/dashboard",children:"Dashboard"}),(0,wr.jsx)(al,{children:"\u203a"}),(0,wr.jsx)(ol,{href:"/ai-qna",children:"AI Q&A"})]}),(0,wr.jsx)(il,{children:"Ask Your Academic Questions"}),(0,wr.jsxs)(ll,{children:[(0,wr.jsx)(sl,{children:"\ud83e\udd16"}),(0,wr.jsxs)(ul,{children:[(0,wr.jsx)(cl,{children:"AI Assistant"}),(0,wr.jsx)(dl,{children:"Ask any academic question. Your question and a simulated answer will be saved."})]})]}),(0,wr.jsx)(fl,{htmlFor:"aiQuestion",children:"Your question"}),(0,wr.jsx)(pl,{id:"aiQuestion",placeholder:"Type your academic question here...",value:e,onChange:e=>t(e.target.value),disabled:a}),(0,wr.jsx)(hl,{onClick:()=>{if(""===e.trim())return void c("\u2757 Please enter a question.");c("Asking AI... \ud83e\udd16"),i(!0);const r="This is a simulated AI answer. The backend stores the question and this placeholder answer.";pi.post(`${tl}/aiqna/add`,{question:e,answer:r}).then((a=>{console.log(a.data);const l={_id:Date.now(),question:e,answer:r,createdAt:(new Date).toISOString()};o([l,...n]),t(""),c("Question submitted!"),i(!1)})).catch((e=>{console.error("Error submitting question:",e),s("Failed to submit question."),c("Error submitting question."),i(!1)}))},disabled:a,children:a?"Asking...":"Ask Question"}),u&&(0,wr.jsx)("p",{style:{marginTop:"1rem",fontWeight:"bold",color:u.includes("\u2757")||u.includes("Error")?"red":"#6c5ce7"},children:u}),(0,wr.jsxs)(ml,{children:[(0,wr.jsx)(gl,{children:"Conversation History"}),a&&0===n.length?(0,wr.jsx)("p",{children:"Loading history..."}):n.length>0?n.map((e=>(0,wr.jsxs)(yl,{children:[(0,wr.jsxs)(vl,{children:[(0,wr.jsx)(bl,{children:"\u2753"}),(0,wr.jsx)(xl,{children:"Your Question"})]}),(0,wr.jsxs)(wl,{children:[e.question,(0,wr.jsxs)("p",{style:{fontSize:"0.8em",color:"#888",marginTop:"5px"},children:["Asked on: ",new Date(e.createdAt).toLocaleString()]})]}),(0,wr.jsxs)(Sl,{children:[(0,wr.jsx)("p",{children:(0,wr.jsx)("strong",{children:"AI Answer:"})}),(0,wr.jsx)("p",{children:e.answer})]})]},e._id))):(0,wr.jsx)("p",{children:"No conversation history yet. Ask a question to start!"})]})]})]})},jl=xr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,El=xr.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Cl=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,_l=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,Tl=xr.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,Pl=xr.div`
  margin-bottom: 1.5rem;
`,Ol=xr.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`,Rl=xr.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${e=>e.error?"#e74c3c":"#ddd"};
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`,Nl=xr.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${e=>e.error?"#e74c3c":"#ddd"};
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`,zl=xr.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,Dl=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`,Ll=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,Al=xr.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`,Fl=xr.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    color: #c0392b;
  }
`,Il=xr.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`,Ul=xr.button`
  background-color: ${e=>e.secondary?"transparent":"#6c5ce7"};
  color: ${e=>e.secondary?"#6c5ce7":"white"};
  border: ${e=>e.secondary?"1px solid #6c5ce7":"none"};
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0ff":"#5a4ad1"};
  }
  
  &:disabled {
    background-color: ${e=>e.secondary?"transparent":"#a8a8a8"};
    color: ${e=>e.secondary?"#a8a8a8":"white"};
    border-color: ${e=>e.secondary?"#a8a8a8":"transparent"};
    cursor: not-allowed;
  }
`,Ml=xr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: #f0f0ff;
  border: 1px dashed #6c5ce7;
  border-radius: 4px;
  color: #6c5ce7;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  
  &:hover {
    background-color: #e6e6ff;
  }
`,$l=xr.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333;
`,Bl=e=>{let{isOpen:t,onClose:n,onSubmit:o,existingSubjects:a=[]}=e;const[i,l]=(0,r.useState)(""),[s,u]=(0,r.useState)([{id:1,day:"Monday",duration:"1",topic:"",priority:"Medium",completed:!1}]),[c,d]=(0,r.useState)({}),f=(e,t,n)=>{u(s.map((r=>r.id===e?{...r,[t]:n}:r)))};return t?(0,wr.jsx)(jl,{onClick:n,children:(0,wr.jsxs)(El,{onClick:e=>e.stopPropagation(),children:[(0,wr.jsxs)(Cl,{children:[(0,wr.jsx)(_l,{children:"Add New Subject"}),(0,wr.jsx)(Tl,{onClick:n,children:"\xd7"})]}),(0,wr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(()=>{const e={};i.trim()?a.some((e=>e.name.toLowerCase()===i.trim().toLowerCase()))&&(e.subjectName="A subject with this name already exists"):e.subjectName="Subject name is required";const t=[];return s.forEach(((e,n)=>{const r={};e.duration?(isNaN(e.duration)||parseFloat(e.duration)<=0)&&(r.duration="Duration must be a positive number"):r.duration="Duration is required",e.topic.trim()||(r.topic="Topic is required"),Object.keys(r).length>0&&(t[n]=r)})),t.length>0&&(e.sessions=t),d(e),0===Object.keys(e).length})()&&(o({name:i,sessions:s}),l(""),u([{id:1,day:"Monday",duration:"1",topic:"",priority:"Medium"}]),d({}),n())},children:[(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:"subjectName",children:"Subject Name"}),(0,wr.jsx)(Rl,{id:"subjectName",type:"text",value:i,onChange:e=>l(e.target.value),error:c.subjectName}),c.subjectName&&(0,wr.jsx)(zl,{children:c.subjectName})]}),(0,wr.jsx)(Ol,{children:"Sessions"}),s.map(((e,t)=>(0,wr.jsxs)(Dl,{children:[(0,wr.jsxs)(Ll,{children:[(0,wr.jsxs)(Al,{children:["Session ",t+1]}),s.length>1&&(0,wr.jsx)(Fl,{type:"button",onClick:()=>{return t=e.id,void(s.length>1&&u(s.filter((e=>e.id!==t))));var t},children:"\xd7"})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`day-${e.id}`,children:"Day"}),(0,wr.jsxs)(Nl,{id:`day-${e.id}`,value:e.day,onChange:t=>f(e.id,"day",t.target.value),children:[(0,wr.jsx)("option",{value:"Monday",children:"Monday"}),(0,wr.jsx)("option",{value:"Tuesday",children:"Tuesday"}),(0,wr.jsx)("option",{value:"Wednesday",children:"Wednesday"}),(0,wr.jsx)("option",{value:"Thursday",children:"Thursday"}),(0,wr.jsx)("option",{value:"Friday",children:"Friday"}),(0,wr.jsx)("option",{value:"Saturday",children:"Saturday"}),(0,wr.jsx)("option",{value:"Sunday",children:"Sunday"})]})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`duration-${e.id}`,children:"Duration (hours)"}),(0,wr.jsx)(Rl,{id:`duration-${e.id}`,type:"number",min:"0.5",step:"0.5",value:e.duration,onChange:t=>f(e.id,"duration",t.target.value),error:c.sessions&&c.sessions[t]&&c.sessions[t].duration}),c.sessions&&c.sessions[t]&&c.sessions[t].duration&&(0,wr.jsx)(zl,{children:c.sessions[t].duration})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`topic-${e.id}`,children:"Topic"}),(0,wr.jsx)(Rl,{id:`topic-${e.id}`,type:"text",value:e.topic,onChange:t=>f(e.id,"topic",t.target.value),error:c.sessions&&c.sessions[t]&&c.sessions[t].topic}),c.sessions&&c.sessions[t]&&c.sessions[t].topic&&(0,wr.jsx)(zl,{children:c.sessions[t].topic})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`priority-${e.id}`,children:"Priority"}),(0,wr.jsxs)(Nl,{id:`priority-${e.id}`,value:e.priority,onChange:t=>f(e.id,"priority",t.target.value),children:[(0,wr.jsx)("option",{value:"High",children:"High Priority"}),(0,wr.jsx)("option",{value:"Medium",children:"Medium Priority"}),(0,wr.jsx)("option",{value:"Low",children:"Low Priority"})]})]})]},e.id))),(0,wr.jsx)(Ml,{type:"button",onClick:()=>{u([...s,{id:Date.now(),day:"Monday",duration:"1",topic:"",priority:"Medium"}])},children:"+ Add Session"}),(0,wr.jsxs)(Il,{children:[(0,wr.jsx)(Ul,{type:"button",secondary:!0,onClick:n,children:"Cancel"}),(0,wr.jsx)(Ul,{type:"submit",children:"Add Subject"})]})]})]})}):null},Wl=e=>{let{isOpen:t,onClose:n,subject:o,onSubmit:a}=e;const[i,l]=(0,r.useState)(o?o.name:""),[s,u]=(0,r.useState)(o?o.sessions:[{id:1,day:"Monday",duration:"1",topic:"",priority:"Medium"}]),[c,d]=(0,r.useState)({});r.useEffect((()=>{o&&(l(o.name),u(o.sessions))}),[o]);const f=(e,t,n)=>{u(s.map((r=>r.id===e?{...r,[t]:n}:r)))};return t&&o?(0,wr.jsx)(jl,{onClick:n,children:(0,wr.jsxs)(El,{onClick:e=>e.stopPropagation(),children:[(0,wr.jsxs)(Cl,{children:[(0,wr.jsx)(_l,{children:"Edit Subject"}),(0,wr.jsx)(Tl,{onClick:n,children:"\xd7"})]}),(0,wr.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(()=>{const e={};i.trim()||(e.subjectName="Subject name is required");const t=[];return s.forEach(((e,n)=>{const r={};e.duration?(isNaN(e.duration)||parseFloat(e.duration)<=0)&&(r.duration="Duration must be a positive number"):r.duration="Duration is required",e.topic.trim()||(r.topic="Topic is required"),Object.keys(r).length>0&&(t[n]=r)})),t.length>0&&(e.sessions=t),d(e),0===Object.keys(e).length})()&&(a({id:o.id,name:i,sessions:s}),n())},children:[(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:"subjectName",children:"Subject Name"}),(0,wr.jsx)(Rl,{id:"subjectName",type:"text",value:i,onChange:e=>l(e.target.value),error:c.subjectName}),c.subjectName&&(0,wr.jsx)(zl,{children:c.subjectName})]}),(0,wr.jsx)(Ol,{children:"Sessions"}),s.map(((e,t)=>(0,wr.jsxs)(Dl,{children:[(0,wr.jsxs)(Ll,{children:[(0,wr.jsxs)(Al,{children:["Session ",t+1]}),s.length>1&&(0,wr.jsx)(Fl,{type:"button",onClick:()=>{return t=e.id,void(s.length>1&&u(s.filter((e=>e.id!==t))));var t},children:"\xd7"})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`day-${e.id}`,children:"Day"}),(0,wr.jsxs)(Nl,{id:`day-${e.id}`,value:e.day,onChange:t=>f(e.id,"day",t.target.value),children:[(0,wr.jsx)("option",{value:"Monday",children:"Monday"}),(0,wr.jsx)("option",{value:"Tuesday",children:"Tuesday"}),(0,wr.jsx)("option",{value:"Wednesday",children:"Wednesday"}),(0,wr.jsx)("option",{value:"Thursday",children:"Thursday"}),(0,wr.jsx)("option",{value:"Friday",children:"Friday"}),(0,wr.jsx)("option",{value:"Saturday",children:"Saturday"}),(0,wr.jsx)("option",{value:"Sunday",children:"Sunday"})]})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`duration-${e.id}`,children:"Duration (hours)"}),(0,wr.jsx)(Rl,{id:`duration-${e.id}`,type:"number",min:"0.5",step:"0.5",value:e.duration,onChange:t=>f(e.id,"duration",t.target.value),error:c.sessions&&c.sessions[t]&&c.sessions[t].duration}),c.sessions&&c.sessions[t]&&c.sessions[t].duration&&(0,wr.jsx)(zl,{children:c.sessions[t].duration})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`topic-${e.id}`,children:"Topic"}),(0,wr.jsx)(Rl,{id:`topic-${e.id}`,type:"text",value:e.topic,onChange:t=>f(e.id,"topic",t.target.value),error:c.sessions&&c.sessions[t]&&c.sessions[t].topic}),c.sessions&&c.sessions[t]&&c.sessions[t].topic&&(0,wr.jsx)(zl,{children:c.sessions[t].topic})]}),(0,wr.jsxs)(Pl,{children:[(0,wr.jsx)(Ol,{htmlFor:`priority-${e.id}`,children:"Priority"}),(0,wr.jsxs)(Nl,{id:`priority-${e.id}`,value:e.priority,onChange:t=>f(e.id,"priority",t.target.value),children:[(0,wr.jsx)("option",{value:"High",children:"High Priority"}),(0,wr.jsx)("option",{value:"Medium",children:"Medium Priority"}),(0,wr.jsx)("option",{value:"Low",children:"Low Priority"})]})]})]},e.id))),(0,wr.jsx)(Ml,{type:"button",onClick:()=>{u([...s,{id:Date.now(),day:"Monday",duration:"1",topic:"",priority:"Medium"}])},children:"+ Add Session"}),(0,wr.jsxs)(Il,{children:[(0,wr.jsx)(Ul,{type:"button",secondary:!0,onClick:n,children:"Cancel"}),(0,wr.jsx)(Ul,{type:"submit",children:"Save Changes"})]})]})]})}):null},Hl=e=>{let{isOpen:t,onClose:n,subject:r,onConfirm:o}=e;return t&&r?(0,wr.jsx)(jl,{onClick:n,children:(0,wr.jsxs)(El,{onClick:e=>e.stopPropagation(),children:[(0,wr.jsxs)(Cl,{children:[(0,wr.jsx)(_l,{children:"Delete Subject"}),(0,wr.jsx)(Tl,{onClick:n,children:"\xd7"})]}),(0,wr.jsxs)($l,{children:["Are you sure you want to delete ",(0,wr.jsx)("strong",{children:r.name}),"? This action cannot be undone."]}),(0,wr.jsxs)(Il,{children:[(0,wr.jsx)(Ul,{type:"button",secondary:!0,onClick:n,children:"Cancel"}),(0,wr.jsx)(Ul,{type:"button",style:{backgroundColor:"#e74c3c",borderColor:"#e74c3c"},onClick:()=>{o(r.id),n()},children:"Delete"})]})]})}):null},ql=xr.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f8f9ff;
  border-radius: 8px;
`,Vl=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`,Kl=xr.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ql=xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yl=xr.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`,Gl=xr.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`,Jl=xr.div`
  width: 80%;
  background-color: #6c5ce7;
  border-radius: 4px 4px 0 0;
  height: ${e=>e.height}%;
  transition: height 0.3s ease;
`,Xl=xr.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
`,Zl=e=>{let{data:t=[]}=e;const n=t.length>0?t:[{day:"Mon",hours:2},{day:"Tue",hours:1.5},{day:"Wed",hours:3},{day:"Thu",hours:2},{day:"Fri",hours:1},{day:"Sat",hours:.5},{day:"Sun",hours:0}],r=Math.max(...n.map((e=>e.hours)));return(0,wr.jsxs)(ql,{children:[(0,wr.jsx)(Vl,{children:"Weekly Study Time Distribution"}),(0,wr.jsx)(Kl,{children:n.map(((e,t)=>(0,wr.jsxs)(Ql,{children:[(0,wr.jsx)(Yl,{children:e.day}),(0,wr.jsx)(Gl,{children:(0,wr.jsx)(Jl,{height:e.hours/r*100})}),(0,wr.jsxs)(Xl,{children:[e.hours,"h"]})]},t)))})]})},es="https://5001-i2sesrmd08n4cwajrbajw-437f4b1e.manus.computer/api",ts=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,ns=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`,rs=xr.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`,os=xr.span`
  margin: 0 0.5rem;
  color: #666;
`,as=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`,is=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`,ls=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
`,ss=xr.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`,us=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,cs=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,ds=xr.button`
  background-color: ${e=>e.secondary?"transparent":"#6c5ce7"};
  color: ${e=>e.secondary?"#6c5ce7":"white"};
  border: ${e=>e.secondary?"1px solid #6c5ce7":"none"};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0ff":"#5a4ad1"};
  }
`,fs=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,ps=xr.div`
  margin-top: 3rem;
`,hs=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,ms=xr.div`
  padding: 2rem;
  text-align: center;
  color: #666;
  font-style: italic;
`,gs=()=>{const[e,t]=(0,r.useState)(null),[n,o]=(0,r.useState)(!0),[a,i]=(0,r.useState)(null),[l,s]=(0,r.useState)(!1),[u,c]=(0,r.useState)(!1),[d,f]=(0,r.useState)(!1),[p,h]=(0,r.useState)(!1),[m,g]=(0,r.useState)(null);(0,r.useEffect)((()=>{o(!0),pi.get(`${es}/study-plans`).then((e=>{t(e.data),o(!1)})).catch((e=>{console.error("Error fetching study plan:",e),e.response&&404===e.response.status?t(null):i("Failed to load study plan."),o(!1)}))}),[]);const y=e=>{o(!0),pi.post(`${es}/study-plans/update`,{subjects:e}).then((e=>{console.log(e.data),pi.get(`${es}/study-plans`).then((e=>t(e.data))).catch((e=>console.error("Error re-fetching study plan:",e))),o(!1),s(!1),c(!1),f(!1)})).catch((e=>{console.error("Error updating study plan:",e),i("Failed to update study plan."),o(!1)}))},v=e?e.subjects.map((e=>({name:e.name,value:e.totalAllocatedTime||0}))):[];return a?(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(ts,{children:[(0,wr.jsx)(as,{children:"Error"}),(0,wr.jsx)("p",{style:{color:"red"},children:a})]})]}):(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(ts,{children:[(0,wr.jsxs)(ns,{children:[(0,wr.jsx)(rs,{href:"/dashboard",children:"Dashboard"}),(0,wr.jsx)(os,{children:"\u203a"}),(0,wr.jsx)(rs,{href:"/study-plan",children:"Study Plan"})]}),(0,wr.jsx)(as,{children:"Study Plan"}),(0,wr.jsxs)(is,{children:[(0,wr.jsxs)(ls,{children:[(0,wr.jsx)(ss,{children:"\ud83d\udcca"}),(0,wr.jsx)(us,{children:"Visualize Time"}),(0,wr.jsx)(cs,{children:"See how your study time is distributed across subjects."})]}),(0,wr.jsxs)(ls,{children:[(0,wr.jsx)(ss,{children:"\u2795"}),(0,wr.jsx)(us,{children:"Add Subject"}),(0,wr.jsx)(cs,{children:"Add a new subject and topics to your plan."}),(0,wr.jsx)(ds,{onClick:()=>s(!0),disabled:n,children:"Add Subject"})]}),(0,wr.jsxs)(ls,{children:[(0,wr.jsx)(ss,{children:"\ud83d\udcc8"}),(0,wr.jsx)(us,{children:"Track Progress"}),(0,wr.jsx)(cs,{children:"Monitor your topic completion and weekly goals."})]})]}),v.length>0&&(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(fs,{children:"Study Time Distribution"}),(0,wr.jsx)("div",{style:{height:"300px",marginBottom:"2rem"},children:(0,wr.jsx)(Zl,{data:v})})]}),(0,wr.jsxs)(ps,{children:[(0,wr.jsx)(hs,{children:(0,wr.jsx)(fs,{children:"Your Study Schedule"})}),n?(0,wr.jsx)("p",{children:"Loading study plan..."}):e&&e.subjects.length>0?(0,wr.jsx)("div",{children:e.subjects.map((t=>(0,wr.jsxs)("div",{style:{marginBottom:"1.5rem",border:"1px solid #eee",borderRadius:"8px",padding:"1rem"},children:[(0,wr.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,wr.jsxs)("h3",{style:{margin:0},children:[t.name," (",t.totalAllocatedTime," mins total)"]}),(0,wr.jsxs)("div",{children:[(0,wr.jsx)(ds,{secondary:!0,style:{marginRight:"0.5rem"},onClick:()=>{g(t),c(!0)},disabled:n,children:"Edit"}),(0,wr.jsx)(ds,{secondary:!0,style:{color:"#dc3545",borderColor:"#dc3545"},onClick:()=>{g(t),f(!0)},disabled:n,children:"Delete"})]})]}),t.topics&&t.topics.length>0?(0,wr.jsx)("ul",{children:t.topics.map((r=>(0,wr.jsxs)("li",{style:{display:"flex",alignItems:"center",marginBottom:"0.5rem"},children:[(0,wr.jsx)("input",{type:"checkbox",checked:r.completed||!1,onChange:()=>((t,n)=>{if(!e)return;const r=e.subjects.map((e=>{if(e._id===t){const t=e.topics.map((e=>e._id===n?{...e,completed:!e.completed}:e));return{...e,topics:t}}return e}));y(r)})(t._id,r._id),style:{marginRight:"10px"},disabled:n}),(0,wr.jsxs)("span",{style:{textDecoration:r.completed?"line-through":"none"},children:[r.name," (",r.allocatedTime," mins)"]})]},r._id)))}):(0,wr.jsx)("p",{children:"No topics added for this subject yet."})]},t._id)))}):(0,wr.jsx)(ms,{children:'Your study plan is empty. Click "Add Subject" to get started.'})]}),(0,wr.jsx)(Bl,{isOpen:l,onClose:()=>s(!1),onAddSubject:t=>{const n=[...e?e.subjects:[],{...t,_id:Date.now().toString()}];y(n)}}),m&&(0,wr.jsx)(Wl,{isOpen:u,onClose:()=>{c(!1),g(null)},subject:m,onEditSubject:t=>{if(!e)return;const n=e.subjects.map((e=>e._id===t._id?{...e,...t}:e));y(n)}}),m&&(0,wr.jsx)(Hl,{isOpen:d,onClose:()=>{f(!1),g(null)},subjectName:m.name,onDelete:()=>(t=>{if(!e)return;const n=e.subjects.filter((e=>e._id!==t));y(n),f(!1)})(m._id)})]})]})},ys=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,vs=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`,bs=xr.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`,xs=xr.span`
  margin: 0 0.5rem;
  color: #666;
`,ws=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`,Ss=xr.div`
  margin-bottom: 3rem;
`,ks=xr.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`,js=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,Es=xr.div`
  margin-bottom: 1rem;
`,Cs=xr.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`,_s=xr.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`,Ts=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,Ps=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`,Os=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`,Rs=xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,Ns=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,zs=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
`,Ds=xr.div`
  display: flex;
  gap: 0.5rem;
`,Ls=xr.button`
  background-color: ${e=>e.secondary?"transparent":"#6c5ce7"};
  color: ${e=>e.secondary?"#6c5ce7":"white"};
  border: ${e=>e.secondary?"1px solid #6c5ce7":"none"};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0ff":"#5a4ad1"};
  }
`,As=(xr.div`
  margin-bottom: 3rem;
`,xr.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9ff;
  margin-bottom: 1rem;
`,xr.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`,xr.div`
  flex: 1;
`,xr.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`,xr.div`
  display: flex;
  font-size: 0.8rem;
  color: #666;
`,xr.span`
  margin-right: 1rem;
`,xr.span`
  font-weight: 500;
`,xr.div`
  display: flex;
  gap: 0.5rem;
`,xr.div`
  margin-bottom: 3rem;
`,xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,xr.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`,xr.div`
  font-size: 0.9rem;
  color: #666;
`,xr.div`
  margin-bottom: 3rem;
`,xr.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9ff;
  margin-bottom: 1rem;
  border-left: 4px solid #6c5ce7;
`,xr.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`,xr.div`
  flex: 1;
`,xr.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`,xr.div`
  display: flex;
  font-size: 0.8rem;
  color: #666;
`,xr.span`
  margin-right: 1rem;
`,xr.span`
  font-weight: 500;
`,xr.span`
  margin-left: 1rem;
  font-style: italic;
`,xr.div`
  display: flex;
`,()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!0),[a,i]=(0,r.useState)(null),[l,s]=(0,r.useState)({subject:"",difficulty:""});(0,r.useEffect)((()=>{o(!0),pi.get("https://5001-i2sesrmd08n4cwajrbajw-437f4b1e.manus.computer/api/quizzes").then((e=>{t(e.data),o(!1)})).catch((e=>{console.error("Error fetching quizzes:",e),i("Failed to load quizzes."),o(!1)}))}),[]);const u=e=>{s({...l,[e.target.name]:e.target.value})},c=e.filter((e=>{const t=!l.subject||e.subject&&e.subject.toLowerCase()===l.subject.toLowerCase(),n=!l.difficulty||e.difficulty&&e.difficulty.toLowerCase()===l.difficulty.toLowerCase();return t&&n})),d=(e,t)=>{"Start"===e?alert(`DEMO: Would navigate to quiz ${t} page`):alert(`DEMO: Would show preview for quiz ${t}`)};return a?(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(ys,{children:[(0,wr.jsx)(ws,{children:"Error"}),(0,wr.jsx)("p",{style:{color:"red"},children:a})]})]}):(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(ys,{children:[(0,wr.jsxs)(vs,{children:[(0,wr.jsx)(bs,{href:"/dashboard",children:"Dashboard"}),(0,wr.jsx)(xs,{children:"\u203a"}),(0,wr.jsx)(bs,{href:"/quizzes",children:"Quizzes"}),(0,wr.jsx)(xs,{children:"\u203a"}),(0,wr.jsx)(bs,{href:"/quizzes/selection",children:"Quiz Selection"})]}),(0,wr.jsx)(ws,{children:"Quiz Selection"}),(0,wr.jsxs)(Ss,{children:[(0,wr.jsx)(ks,{children:"Choose a subject and difficulty level to begin your assessment"}),(0,wr.jsxs)(js,{children:[(0,wr.jsxs)(Es,{children:[(0,wr.jsx)(Cs,{children:"Subject"}),(0,wr.jsxs)(_s,{name:"subject",value:l.subject,onChange:u,children:[(0,wr.jsx)("option",{value:"",children:"All Subjects"}),(0,wr.jsx)("option",{value:"math",children:"Mathematics"}),(0,wr.jsx)("option",{value:"biology",children:"Biology"}),(0,wr.jsx)("option",{value:"history",children:"History"})]})]}),(0,wr.jsxs)(Es,{children:[(0,wr.jsx)(Cs,{children:"Difficulty"}),(0,wr.jsxs)(_s,{name:"difficulty",value:l.difficulty,onChange:u,children:[(0,wr.jsx)("option",{value:"",children:"All Difficulties"}),(0,wr.jsx)("option",{value:"beginner",children:"Beginner"}),(0,wr.jsx)("option",{value:"intermediate",children:"Intermediate"}),(0,wr.jsx)("option",{value:"advanced",children:"Advanced"})]})]})]})]}),(0,wr.jsx)(Ts,{children:"Available Quizzes"}),n?(0,wr.jsx)("p",{children:"Loading quizzes..."}):(0,wr.jsx)(Ps,{children:c.length>0?c.map((e=>(0,wr.jsxs)(Os,{children:[" ",(0,wr.jsx)(Rs,{children:"\ud83d\udcdd"})," ",(0,wr.jsx)(Ns,{children:e.title}),(0,wr.jsx)(zs,{children:e.description||"No description available."}),(0,wr.jsxs)(Ds,{children:[(0,wr.jsx)(Ls,{onClick:()=>d("Start",e._id),children:"Start"}),(0,wr.jsx)(Ls,{secondary:!0,onClick:()=>d("Preview",e._id),children:"Preview"})]})]},e._id))):(0,wr.jsx)("p",{children:"No quizzes found matching your criteria."})})]})]})}),Fs=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Is=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`,Us=xr.a`
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #6c5ce7;
    text-decoration: underline;
  }
`,Ms=xr.span`
  margin: 0 0.5rem;
  color: #666;
`,$s=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`,Bs=(xr.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
`,xr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`),Ws=xr.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`,Hs=xr.div`
  perspective: 1000px;
  margin-bottom: 2rem;
`,qs=xr.div`
  position: relative;
  width: 100%;
  height: 300px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${e=>e.flipped?"rotateY(180deg)":"rotateY(0deg)"};
  
  @media (max-width: 768px) {
    height: 250px;
  }
`,Vs=xr.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`,Ks=xr(Vs)`
  background-color: #f8f9ff;
`,Qs=xr(Vs)`
  background-color: #f0f0ff;
  transform: rotateY(180deg);
`,Ys=xr.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`,Gs=xr.div`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`,Js=xr.div`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`,Xs=xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`,Zs=xr.button`
  background-color: ${e=>e.primary?"#6c5ce7":"#f0f0f0"};
  color: ${e=>e.primary?"white":"#333"};
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.primary?"#5a4ad1":"#e0e0e0"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,eu=xr.div`
  font-size: 0.9rem;
  color: #666;
`,tu=xr.div`
  margin-bottom: 3rem;
`,nu=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,ru=xr.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`,ou=xr.button`
  background-color: ${e=>{if(e.active){if("need-review"===e.type)return"#ffebee";if("almost"===e.type)return"#fff8e1";if("known"===e.type)return"#e8f5e9"}return"#f0f0f0"}};
  color: ${e=>{if(e.active){if("need-review"===e.type)return"#c62828";if("almost"===e.type)return"#ff8f00";if("known"===e.type)return"#2e7d32"}return"#333"}};
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
`,au=xr.div`
  margin-bottom: 3rem;
`,iu=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`,lu=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`,su=(xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`),uu=xr.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,cu=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 2px dashed #ddd;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: #6c5ce7;
  }
`,du=xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,fu=xr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`,pu=xr.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`,hu=xr.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a4ad1;
  }
`,mu="https://5001-i2sesrmd08n4cwajrbajw-437f4b1e.manus.computer/api",gu=()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(null),[a,i]=(0,r.useState)([]),[l,s]=(0,r.useState)(0),[u,c]=(0,r.useState)(!1),[d,f]=(0,r.useState)(null),[p,h]=(0,r.useState)(!0),[m,g]=(0,r.useState)(null);(0,r.useEffect)((()=>{h(!0),pi.get(`${mu}/flashcards/decks`).then((e=>{t(e.data),e.data.length>0?v(e.data[0]):h(!1)})).catch((e=>{console.error("Error fetching decks:",e),g("Failed to load flashcard decks."),h(!1)}))}),[]),(0,r.useEffect)((()=>{n&&(h(!0),pi.get(`${mu}/flashcards/cards/${n._id}`).then((e=>{i(e.data),s(0),c(!1),f(null),h(!1)})).catch((e=>{console.error(`Error fetching cards for deck ${n._id}:`,e),g(`Failed to load flashcards for ${n.name}.`),i([]),h(!1)})))}),[n]);const y=a.length,v=e=>{o(e)};if(m)return(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(Fs,{children:[(0,wr.jsx)($s,{children:"Error"}),(0,wr.jsx)("p",{style:{color:"red"},children:m})]})]});const b=a[l];return(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(Fs,{children:[(0,wr.jsxs)(Is,{children:[(0,wr.jsx)(Us,{href:"/home",children:"Home"}),(0,wr.jsx)(Ms,{children:"\u203a"}),(0,wr.jsx)(Us,{href:"/flashcards",children:"Flashcards"}),n&&(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Ms,{children:"\u203a"}),(0,wr.jsx)(Us,{href:`/flashcards/${n._id}`,children:n.name})]})]}),(0,wr.jsx)($s,{children:n?n.name:"Flashcards"}),n&&(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsxs)(Bs,{children:[(0,wr.jsx)(Ws,{onClick:()=>{const e=[...a].sort((()=>Math.random()-.5));i(e),s(0),c(!1),f(null)},disabled:p||y<2,children:"Shuffle"}),(0,wr.jsx)(Ws,{onClick:()=>{if(!n)return void alert("Please select a deck first.");const e=prompt("Enter question:");if(!e)return;const t=prompt("Enter answer:");t&&pi.post(`${mu}/flashcards/cards/add`,{deckId:n._id,question:e,answer:t}).then((e=>{console.log(e.data),pi.get(`${mu}/flashcards/cards/${n._id}`).then((e=>{i(e.data),e.data.length>0&&s(e.data.length-1)})).catch((e=>console.error("Error re-fetching cards:",e)))})).catch((e=>{console.error("Error creating flashcard:",e),g("Failed to create flashcard.")}))},disabled:p,children:"Add Card"}),(0,wr.jsx)(Ws,{onClick:()=>{return e=n._id,void(window.confirm("Are you sure you want to delete this deck and all its cards?")&&pi.delete(`${mu}/flashcards/decks/${e}`).then((r=>{console.log(r.data),pi.get(`${mu}/flashcards/decks`).then((r=>{t(r.data),n&&n._id===e?(o(r.data.length>0?r.data[0]:null),i([])):r.data.length>0&&!n&&v(r.data[0])}))})).catch((e=>{console.error("Error deleting deck:",e),g("Failed to delete deck.")})));var e},disabled:p,style:{backgroundColor:"#dc3545"},children:"Delete Deck"})]}),p?(0,wr.jsx)("p",{children:"Loading flashcards..."}):y>0&&b?(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Hs,{onClick:()=>c(!u),children:(0,wr.jsxs)(qs,{flipped:u,children:[(0,wr.jsxs)(Ks,{children:[(0,wr.jsx)(Ys,{children:b.question}),(0,wr.jsx)(Gs,{children:"Tap to reveal answer"})]}),(0,wr.jsxs)(Qs,{children:[(0,wr.jsx)(Js,{children:b.answer}),(0,wr.jsx)(Ws,{onClick:e=>{var t;e.stopPropagation(),t=b._id,window.confirm("Are you sure you want to delete this flashcard?")&&pi.delete(`${mu}/flashcards/cards/${t}`).then((e=>{console.log(e.data),pi.get(`${mu}/flashcards/cards/${n._id}`).then((e=>{i(e.data),l>=e.data.length&&e.data.length>0&&s(e.data.length-1)})).catch((e=>console.error("Error re-fetching cards:",e)))})).catch((e=>{console.error("Error deleting card:",e),g("Failed to delete card.")}))},style:{backgroundColor:"#dc3545",marginTop:"10px"},children:"Delete Card"})]})]})}),(0,wr.jsxs)(Xs,{children:[(0,wr.jsx)(Zs,{onClick:()=>{l>0&&(s(l-1),c(!1),f(null))},disabled:0===l,children:"Previous"}),(0,wr.jsxs)(eu,{children:["Card ",l+1," of ",y]}),(0,wr.jsx)(Zs,{primary:!0,onClick:()=>{l<y-1&&(s(l+1),c(!1),f(null))},disabled:l===y-1,children:"Next"})]}),(0,wr.jsxs)(tu,{children:[(0,wr.jsx)(nu,{children:"Self-Assessment"}),(0,wr.jsxs)(ru,{children:[(0,wr.jsx)(ou,{type:"need-review",active:"need-review"===d,onClick:()=>f("need-review"),children:"Need Review"}),(0,wr.jsx)(ou,{type:"almost",active:"almost"===d,onClick:()=>f("almost"),children:"Almost There"}),(0,wr.jsx)(ou,{type:"known",active:"known"===d,onClick:()=>f("known"),children:"Known"})]})]})]}):(0,wr.jsx)("p",{children:'No flashcards in this deck. Click "Add Card" to create one.'})]}),(0,wr.jsxs)(au,{children:[(0,wr.jsx)(nu,{children:"Decks"}),(0,wr.jsxs)(iu,{children:[e.map((e=>(0,wr.jsxs)(lu,{selected:n&&n._id===e._id,children:[(0,wr.jsx)(su,{children:e.name}),(0,wr.jsx)(uu,{children:e.description||"No description"}),(0,wr.jsx)(Zs,{primary:!0,onClick:()=>v(e),disabled:p,children:"Study"})]},e._id))),(0,wr.jsxs)(cu,{children:[(0,wr.jsx)(du,{children:"+"}),(0,wr.jsx)(fu,{children:"Create New Deck"}),(0,wr.jsx)(pu,{children:"Organize your flashcards"}),(0,wr.jsx)(hu,{onClick:()=>{const e=prompt("Enter new deck name:");if(!e)return;const n=prompt("Enter deck description (optional):");pi.post(`${mu}/flashcards/decks/add`,{name:e,description:n}).then((e=>{console.log(e.data),pi.get(`${mu}/flashcards/decks`).then((e=>t(e.data)))})).catch((e=>{console.error("Error creating deck:",e),g("Failed to create deck.")}))},disabled:p,children:"Create"})]})]})]})]})]})},yu=xr.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,vu=xr.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`,bu=xr.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`,xu=xr.button`
  background-color: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: ${e=>e.active?"600":"400"};
  color: ${e=>e.active?"#6c5ce7":"#666"};
  cursor: pointer;
  border-bottom: ${e=>e.active?"2px solid #6c5ce7":"none"};
  margin-bottom: -1px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #6c5ce7;
  }
`,wu=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`,Su=xr.div`
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`,ku=xr.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`,ju=xr.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`,Eu=xr.button`
  background-color: ${e=>e.secondary?"transparent":"#6c5ce7"};
  color: ${e=>e.secondary?"#6c5ce7":"white"};
  border: ${e=>e.secondary?"1px solid #6c5ce7":"none"};
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.secondary?"#f0f0ff":"#5a4ad1"};
  }
`,Cu=xr.div`
  margin-bottom: 3rem;
`,_u=xr.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`,Tu=xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`,Pu=xr.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Ou=xr.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`,Ru=xr.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`,Nu=xr.div`
  font-size: 0.9rem;
  color: #666;
`,zu=xr.div`
  max-width: 600px;
  margin: 0 auto 3rem;
`,Du=xr.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,Lu=xr.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`,Au=xr.div`
  flex: 1;
`,Fu=xr.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #333;
`,Iu=xr.div`
  font-size: 0.9rem;
  color: #666;
`,Uu=xr.div`
  display: flex;
  align-items: center;
`,Mu=xr.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`,$u=xr.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`,Bu=xr.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + & {
    background-color: #6c5ce7;
  }
  
  input:checked + &:before {
    transform: translateX(24px);
  }
`,Wu=()=>{const[e,t]=(0,r.useState)("focus"),[n,o]=(0,r.useState)(!1),[a,i]=(0,r.useState)(0),[l,s]=(0,r.useState)(!0),[u,c]=(0,r.useState)(!1),[d,f]=(0,r.useState)(25),[p,h]=(0,r.useState)(5),[m,g]=(0,r.useState)(15),[y,v]=(0,r.useState)(60*d),b=(0,r.useRef)(null),x=(0,r.useRef)(new Audio("/simple-notification-152054.mp3")),w=(0,r.useRef)(null);(0,r.useEffect)((()=>()=>{w.current&&clearTimeout(w.current),b.current&&clearInterval(b.current)}),[]),(0,r.useEffect)((()=>{"focus"===e?v(60*d):"short-break"===e?v(60*p):"long-break"===e&&v(60*m),b.current&&(clearInterval(b.current),o(!1))}),[e,d,p,m]),(0,r.useEffect)((()=>(n&&(b.current=setInterval((()=>{v((n=>{if(n<=1){clearInterval(b.current),o(!1);const n="focus"===e?"Focus session complete! Time for a break.":"Break over! Ready to focus again?";if(l&&(x.current.currentTime=0,x.current.play().catch((e=>console.log("Audio error:",e)))),(e=>{w.current&&clearTimeout(w.current),"granted"===Notification.permission?new Notification(e):"denied"!==Notification.permission&&Notification.requestPermission().then((t=>{"granted"===t&&new Notification(e)})),w.current=setTimeout((()=>{alert(e)}),300)})(n),"focus"===e){const e=a+1;if(i(e),u){t(e%4===0?"long-break":"short-break"),setTimeout((()=>{o(!0)}),1e3)}}return 0}return n-1}))}),1e3)),()=>{b.current&&clearInterval(b.current)})),[n,e,u,a,l]);const S=a*d,k=a*p;return(0,wr.jsxs)(wr.Fragment,{children:[(0,wr.jsx)(Rr,{isLoggedIn:!0}),(0,wr.jsxs)(yu,{children:[(0,wr.jsx)(vu,{children:"Pomodoro Timer"}),(0,wr.jsxs)(bu,{children:[(0,wr.jsx)(xu,{active:"focus"===e,onClick:()=>t("focus"),children:"Focus"}),(0,wr.jsx)(xu,{active:"short-break"===e,onClick:()=>t("short-break"),children:"Short Break"}),(0,wr.jsx)(xu,{active:"long-break"===e,onClick:()=>t("long-break"),children:"Long Break"})]}),(0,wr.jsxs)(wu,{children:[(0,wr.jsx)(Su,{children:(e=>{const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`})(y)}),(0,wr.jsx)(ku,{children:"focus"===e?"Focus on your task":"short-break"===e?"Take a short break":"Take a long break"}),(0,wr.jsxs)(ju,{children:[n?(0,wr.jsx)(Eu,{onClick:()=>o(!1),children:"Pause"}):(0,wr.jsx)(Eu,{onClick:()=>o(!0),children:"Start"}),(0,wr.jsx)(Eu,{secondary:!0,onClick:()=>{"focus"===e?v(60*d):"short-break"===e?v(60*p):"long-break"===e&&v(60*m),o(!1)},children:"Reset"})]})]}),(0,wr.jsxs)(Cu,{children:[(0,wr.jsx)(_u,{children:"Today's Progress"}),(0,wr.jsxs)(Tu,{children:[(0,wr.jsxs)(Pu,{children:[(0,wr.jsx)(Ou,{children:"\u23f1\ufe0f"}),(0,wr.jsx)(Ru,{children:a}),(0,wr.jsx)(Nu,{children:"Completed Pomodoros"})]}),(0,wr.jsxs)(Pu,{children:[(0,wr.jsx)(Ou,{children:"\u23f3"}),(0,wr.jsxs)(Ru,{children:[S," min"]}),(0,wr.jsx)(Nu,{children:"Total Focus Time"})]}),(0,wr.jsxs)(Pu,{children:[(0,wr.jsx)(Ou,{children:"\u2615"}),(0,wr.jsxs)(Ru,{children:[k," min"]}),(0,wr.jsx)(Nu,{children:"Total Break Time"})]})]})]}),(0,wr.jsxs)(zu,{children:[(0,wr.jsx)(_u,{children:"Settings"}),(0,wr.jsxs)(Du,{children:[(0,wr.jsx)(Lu,{children:"\u23f1\ufe0f"}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Fu,{children:"Focus Duration"}),(0,wr.jsxs)(Iu,{children:[d," minutes"]})]}),(0,wr.jsx)(Uu,{children:(0,wr.jsxs)(Mu,{value:d,onChange:t=>{const n=parseInt(t.target.value);f(n),"focus"===e&&v(60*n)},children:[(0,wr.jsx)("option",{value:"15",children:"15 minutes"}),(0,wr.jsx)("option",{value:"20",children:"20 minutes"}),(0,wr.jsx)("option",{value:"25",children:"25 minutes"}),(0,wr.jsx)("option",{value:"30",children:"30 minutes"}),(0,wr.jsx)("option",{value:"45",children:"45 minutes"}),(0,wr.jsx)("option",{value:"60",children:"60 minutes"})]})})]}),(0,wr.jsxs)(Du,{children:[(0,wr.jsx)(Lu,{children:"\u2615"}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Fu,{children:"Short Break"}),(0,wr.jsxs)(Iu,{children:[p," minutes"]})]}),(0,wr.jsx)(Uu,{children:(0,wr.jsxs)(Mu,{value:p,onChange:t=>{const n=parseInt(t.target.value);h(n),"short-break"===e&&v(60*n)},children:[(0,wr.jsx)("option",{value:"3",children:"3 minutes"}),(0,wr.jsx)("option",{value:"5",children:"5 minutes"}),(0,wr.jsx)("option",{value:"10",children:"10 minutes"}),(0,wr.jsx)("option",{value:"15",children:"15 minutes"})]})})]}),(0,wr.jsxs)(Du,{children:[(0,wr.jsx)(Lu,{children:"\ud83d\udecb\ufe0f"}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Fu,{children:"Long Break"}),(0,wr.jsxs)(Iu,{children:[m," minutes"]})]}),(0,wr.jsx)(Uu,{children:(0,wr.jsxs)(Mu,{value:m,onChange:t=>{const n=parseInt(t.target.value);g(n),"long-break"===e&&v(60*n)},children:[(0,wr.jsx)("option",{value:"15",children:"15 minutes"}),(0,wr.jsx)("option",{value:"20",children:"20 minutes"}),(0,wr.jsx)("option",{value:"25",children:"25 minutes"}),(0,wr.jsx)("option",{value:"30",children:"30 minutes"}),(0,wr.jsx)("option",{value:"45",children:"45 minutes"})]})})]}),(0,wr.jsxs)(Du,{children:[(0,wr.jsx)(Lu,{children:"\ud83d\udd14"}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Fu,{children:"Sound Notifications"}),(0,wr.jsx)(Iu,{children:l?"Enabled":"Disabled"})]}),(0,wr.jsx)(Uu,{children:(0,wr.jsxs)($u,{children:[(0,wr.jsx)("input",{type:"checkbox",checked:l,onChange:()=>s(!l)}),(0,wr.jsx)(Bu,{})]})})]}),(0,wr.jsxs)(Du,{children:[(0,wr.jsx)(Lu,{children:"\ud83d\udd04"}),(0,wr.jsxs)(Au,{children:[(0,wr.jsx)(Fu,{children:"Auto-start Breaks"}),(0,wr.jsx)(Iu,{children:u?"Enabled":"Disabled"})]}),(0,wr.jsx)(Uu,{children:(0,wr.jsxs)($u,{children:[(0,wr.jsx)("input",{type:"checkbox",checked:u,onChange:()=>c(!u)}),(0,wr.jsx)(Bu,{})]})})]})]})]})]})},Hu=e=>{let{children:t}=e;return t};const qu=function(){return(0,wr.jsx)(Ee,{children:(0,wr.jsxs)(ye,{children:[(0,wr.jsx)(me,{path:"/",element:(0,wr.jsx)(Kr,{})}),(0,wr.jsx)(me,{path:"/dashboard",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(el,{})})}),(0,wr.jsx)(me,{path:"/ai-qna",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(kl,{})})}),(0,wr.jsx)(me,{path:"/study-plan",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(gs,{})})}),(0,wr.jsx)(me,{path:"/quizzes",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(As,{})})}),(0,wr.jsx)(me,{path:"/flashcards",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(gu,{})})}),(0,wr.jsx)(me,{path:"/pomodoro",element:(0,wr.jsx)(Hu,{children:(0,wr.jsx)(Wu,{})})}),(0,wr.jsx)(me,{path:"*",element:(0,wr.jsx)(he,{to:"/",replace:!0})})]})})};a.createRoot(document.getElementById("root")).render((0,wr.jsx)(r.StrictMode,{children:(0,wr.jsx)(fr,{theme:{primary:"#6c5ce7",secondary:"#a29bfe",success:"#00b894",warning:"#fdcb6e",danger:"#d63031",light:"#f8f9ff",dark:"#333333",text:{primary:"#333333",secondary:"#666666",light:"#999999"},breakpoints:{mobile:"480px",tablet:"768px",laptop:"1024px",desktop:"1200px"}},children:(0,wr.jsx)(qu,{})})}))})()})();
//# sourceMappingURL=main.5aef0f76.js.map