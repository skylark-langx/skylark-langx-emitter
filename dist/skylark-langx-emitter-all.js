/**
 * skylark-langx-emitter - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(n,r){var t=r.define,e=r.require,i="function"==typeof t&&t.amd,a=!i&&"undefined"!=typeof exports;if(!i&&!t){var o={};t=r.define=function(n,r,t){"function"==typeof t?(o[n]={factory:t,deps:r.map(function(r){return function(n,r){if("."!==n[0])return n;var t=r.split("/"),e=n.split("/");t.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?t.pop():t.push(e[i]));return t.join("/")}(r,n)}),resolved:!1,exports:null},e(n)):o[n]={factory:null,resolved:!0,exports:t}},e=r.require=function(n){if(!o.hasOwnProperty(n))throw new Error("Module "+n+" has not been defined");var t=o[n];if(!t.resolved){var i=[];t.deps.forEach(function(n){i.push(e(n))}),t.exports=t.factory.apply(r,i)||null,t.resolved=!0}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(n,r){n("skylark-langx-ns/_attach",[],function(){return function(n,r,t){"string"==typeof r&&(r=r.split("."));for(var e=r.length,i=n,a=0,o=r[a++];a<e;)i=i[o]=i[o]||{},o=r[a++];return i[o]=t}}),n("skylark-langx-ns/ns",["./_attach"],function(n){var r={attach:function(t,e){return n(r,t,e)}};return r}),n("skylark-langx-ns/main",["./ns"],function(n){return n}),n("skylark-langx-ns",["skylark-langx-ns/main"],function(n){return n}),n("skylark-langx-types/types",["skylark-langx-ns"],function(n){var r,t={}.toString,e=(r={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(n){r["[object "+n+"]"]=n.toLowerCase()}),function(n){return null==n?String(n):r[t.call(n)]||"object"});function i(n){var r;for(r in n)if(null!==n[r])return!1;return!0}function a(n){return"function"==e(n)}function o(n){return n&&n.nodeType}function u(n){return"number"==typeof n}function s(n){return"object"==e(n)}function l(n){return"string"==typeof n}function f(n){return n&&n==n.window}return n.attach("langx.types",{isArray:function(n){return n&&n.constructor===Array},isArrayLike:function(n){return!l(n)&&!o(n)&&"number"==typeof n.length&&!a(n)},isBoolean:function(n){return"boolean"==typeof n},isDefined:function(n){return void 0!==n},isDocument:function(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE},isEmpty:i,isEmptyObject:i,isFunction:a,isHtmlNode:o,isNull:function(n){return"null"===e(n)},isNumber:u,isNumeric:u,isObject:s,isPlainObject:function(n){return s(n)&&!f(n)&&Object.getPrototypeOf(n)==Object.prototype},isString:l,isSameOrigin:function(n){if(n){var r=location.protocol+"//"+location.hostname;return location.port&&(r+=":"+location.port),n.startsWith(r)}},isSymbol:function(n){return"symbol"==typeof n||isObjectLike(n)&&objectToString.call(n)==symbolTag},isUndefined:function(n){return void 0===n},isWindow:f,type:e})}),n("skylark-langx-types/main",["./types"],function(n){return n}),n("skylark-langx-types",["skylark-langx-types/main"],function(n){return n}),n("skylark-langx-numbers/numbers",["skylark-langx-ns","skylark-langx-types"],function(n,r){var t=r.isObject,e=r.isSymbol,i=1/0,a=1.7976931348623157e308,o=NaN,u=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function p(n){if(!n)return 0===n?n:0;if((n=y(n))===i||n===-i){var r=n<0?-1:1;return r*a}return n==n?n:0}function y(n){if("number"==typeof n)return n;if(e(n))return o;if(t(n)){var r="function"==typeof n.valueOf?n.valueOf():n;n=t(r)?r+"":r}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(u,"");var i=l.test(n);return i||f.test(n)?c(n.slice(2),i?2:8):s.test(n)?o:+n}return n.attach("langx.numbers",{toFinite:p,toNumber:y,toInteger:function(n){var r=p(n),t=r%1;return r==r?t?r-t:r:0}})}),n("skylark-langx-numbers/main",["./numbers"],function(n){return n}),n("skylark-langx-numbers",["skylark-langx-numbers/main"],function(n){return n}),n("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types","skylark-langx-numbers"],function(n,r,t,e){var i,a,o=Object.prototype.hasOwnProperty,u=Array.prototype.slice,s=t.isBoolean,l=t.isFunction,f=t.isObject,c=t.isPlainObject,p=t.isArray,y=t.isArrayLike,h=t.isString,v=e.toInteger;var g,k,b="undefined"!=typeof Symbol?Symbol.prototype:null;function x(n){if(!f(n))return[];var r=[];for(var t in n)r.push(t);return r}function d(n,r){if(!p(r))return null!=n&&o.call(n,r);for(var t=r.length,e=0;e<t;e++){var i=r[e];if(null==n||!o.call(n,i))return!1;n=n[i]}return!!t}function m(n,r,t,e){for(var i in r)e&&void 0!==n[i]||(t&&(c(r[i])||p(r[i]))?(c(r[i])&&!c(n[i])&&(n[i]={}),p(r[i])&&!p(n[i])&&(n[i]=[]),m(n[i],r[i],t,e)):void 0!==r[i]&&(n[i]=r[i]));return n}function j(n){var r=u.call(arguments,0),t=r.shift(),e=!1;return s(r[r.length-1])&&(e=r.pop()),{target:t,sources:r,deep:e}}function _(){var n=j.apply(this,arguments);return n.sources.forEach(function(r){m(n.target,r,n.deep,!1)}),n.target}function O(n){for(var r=x(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=n[r[i]];return e}return i=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var i=typeof n;return("function"===i||"object"===i||"object"==typeof r)&&a(n,r,t,e)},a=function(n,r,t,e){var a=toString.call(n);if(a!==toString.call(r))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return b.valueOf.call(n)===b.valueOf.call(r)}var o="[object Array]"===a;if(!o){if("object"!=typeof n||"object"!=typeof r)return!1;var u=n.constructor,s=r.constructor;if(u!==s&&!(l(u)&&u instanceof u&&l(s)&&s instanceof s)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var f=t.length;f--;)if(t[f]===n)return e[f]===r;if(t.push(n),e.push(r),o){if((f=n.length)!==r.length)return!1;for(;f--;)if(!i(n[f],r[f],t,e))return!1}else{var c,p=Object.keys(n);if(f=p.length,Object.keys(r).length!==f)return!1;for(;f--;)if(c=p[f],void 0===r[c]||!i(n[c],r[c],t,e))return!1}return t.pop(),e.pop(),!0},n.attach("langx.objects",{allKeys:x,attach:r,clone:function n(r,t){var e;if(void 0===r||null===r)e=r;else if(t&&r.clone)e=r.clone();else if(p(r)){e=[];for(var i=0;i<r.length;i++)e.push(n(r[i]))}else if(c(r))for(var a in e={},r)e[a]=n(r[a]);else e=r;return e},defaults:(g=x,k=!0,function(n){var r=arguments.length;if(k&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],i=g(e),a=i.length,o=0;o<a;o++){var u=i[o];k&&void 0!==n[u]||(n[u]=e[u])}return n}),each:function(n,r){var t,e,i,a;if(n)if(void 0===(t=n.length)){for(e in n)if(n.hasOwnProperty(e)&&(a=n[e],!1===r.call(a,e,a)))break}else for(i=0;i<t&&(a=n[i],!1!==r.call(a,i,a));i++);return this},extend:function(n){var r,t=u.call(arguments,1);"boolean"==typeof n&&(r=n,n=t.shift());0==t.length&&(t=[n],n=this);return t.forEach(function(t){_(n,t,r)}),n},has:d,isEqual:function(n,r){return i(n,r)},includes:function(n,r,t,e){n=y(n)?n:O(n),t=t&&!e?v(t):0;var i=n.length;t<0&&(t=nativeMax(i+t,0));return h(n)?t<=i&&n.indexOf(r,t)>-1:!!i&&baseIndexOf(n,r,t)>-1},isMatch:function(n,r){var t=t(r),e=t.length;if(null==n)return!e;for(var i=Object(n),a=0;a<e;a++){var o=t[a];if(r[o]!==i[o]||!(o in i))return!1}return!0},keys:function(n){if(f(n))return[];var r=[];for(var t in n)d(n,t)&&r.push(t);return r},mixin:_,omit:function(n,r,t){if(!n)return null;for(var e=_({},n),i=1;i<arguments.length;i++){var a=arguments[i];a in n&&delete e[a]}return e},pick:function(n,r,t){if(!n)return null;for(var e={},i=1;i<arguments.length;i++){var a=arguments[i];a in n&&(e[a]=n[a])}return e},removeItem:function(n,r){if(p(n)){var t=n.indexOf(r);-1!=t&&n.splice(t,1)}else if(c(n))for(var e in n)if(n[e]==r){delete n[e];break}return this},result:function(n,r,t){p(r)||(r=r.split("."));var e=r.length;if(!e)return l(t)?t.call(n):t;for(var i=0;i<e;i++){var a=null==n?void 0:n[r[i]];void 0===a&&(a=t,i=e),n=l(a)?a.call(n):a}return n},safeMixin:function(){var n=j.apply(this,arguments);return n.sources.forEach(function(r){m(n.target,r,n.deep,!0)}),n.target},values:O})}),n("skylark-langx-objects/main",["./objects"],function(n){return n}),n("skylark-langx-objects",["skylark-langx-objects/main"],function(n){return n}),n("skylark-langx-arrays/arrays",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects"],function(n,r,t){var e=Array.prototype.filter,i=r.isArrayLike;function a(n,r,t,e){for(var i=n.length,a=t+(e?1:-1);e?a--:++a<i;)if(r(n[a],a,n))return a;return-1}function o(n){return n!=n}function u(n){if(i(n)){for(var r=[],t=0;t<n.length;t++){var e=n[t];if(i(e))for(var a=0;a<e.length;a++)r.push(e[a]);else r.push(e)}return r}return n}return n.attach("langx.arrays",{baseFindIndex:a,baseIndexOf:function(n,r,t){if(r!=r)return a(n,o,t);var e=t-1,i=n.length;for(;++e<i;)if(n[e]===r)return e;return-1},compact:function(n){return e.call(n,function(n){return null!=n})},first:function(n,r){return r?n.slice(0,r):n[0]},filter:function(n,r){return e.call(n,r)},flatten:u,grep:function(n,r){var e=[];return t.each(n,function(n,t){r(t,n)&&e.push(t)}),e},inArray:function(n,r){if(!r)return-1;var t;if(r.indexOf)return r.indexOf(n);t=r.length;for(;t--;)if(r[t]===n)return t;return-1},makeArray:function(n,r,t){if(i(n))return(t||[]).concat(Array.prototype.slice.call(n,r||0));return[n]},merge:function(n,r){var t=r.length,e=n.length,i=0;if("number"==typeof t)for(;i<t;i++)n[e++]=r[i];else for(;void 0!==r[i];)n[e++]=r[i++];return n.length=e,n},forEach:function(n,r){if(n.forEach)return n.forEach(r);for(var t=0;t<n.length;t++)r(n[t],t)},map:function(n,r){var t,e,a,o=[];if(i(n))for(e=0;e<n.length;e++)null!=(t=r.call(n[e],n[e],e))&&o.push(t);else for(a in n)null!=(t=r.call(n[a],n[a],a))&&o.push(t);return u(o)},reduce:function(n,r,t){return Array.prototype.reduce.call(n,r,t)},uniq:function(n){return e.call(n,function(r,t){return n.indexOf(r)==t})}})}),n("skylark-langx-arrays/main",["./arrays"],function(n){return n}),n("skylark-langx-arrays",["skylark-langx-arrays/main"],function(n){return n}),n("skylark-langx-klass/klass",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays"],function(n,r,t,e){var i=e.uniq,a=t.has,o=t.mixin,u=r.isArray,s=r.isDefined;var l=function(){function n(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function t(e,l,f,c){u(l)&&(c=f,f=l,l=null),l=l||Object,s(f)&&!u(f)&&(c=f,f=!1);var p=l;f&&(f=function(n,r){var t=[];return r.forEach(function(n){if(a(n,"__mixins__"))throw new Error("nested mixins");for(var r=[];n;)r.unshift(n),n=n.superclass;t=t.concat(r)}),(t=(t=i(t)).filter(function(r){for(var t=n;t;){if(r===t)return!1;if(a(t,"__mixins__"))for(var e=t.__mixins__,i=0;i<e.length;i++)if(e[i]===r)return!1;t=t.superclass}return!0})).length>0&&t}(p,f)),f&&(p=function(n,r){for(var t=n,e=0;e<r.length;e++){var i=new Function;i.prototype=Object.create(t.prototype),i.__proto__=t,i.superclass=null,o(i.prototype,r[e].prototype),i.prototype.__mixin__=r[e],t=i}return t}(p,f));var y=e.klassName||"",h=new Function("return function "+y+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return h.prototype=Object.create(p.prototype),h.prototype.constructor=h,h.superclass=l,h.__proto__=p,h._constructor||(h._constructor=n),f&&(h.__mixins__=f),h.partial||(h.partial=function(n,t){return function(n,t,e){var i=n.prototype,a=n.superclass.prototype,o=e&&e.noOverrided;e&&e.overrides;for(var u in t)if("constructor"!==u){var s=t[u];"function"==typeof t[u]?i[u]=s._constructor||o||"function"!=typeof a[u]?s:function(n,r,t){return function(){var n=this.overrided;this.overrided=t;var e=r.apply(this,arguments);return this.overrided=n,e}}(0,s,a[u]):r.isPlainObject(s)&&null!==s&&s.get?Object.defineProperty(i,u,s):i[u]=s}return n}(this,n,t)}),h.inherit||(h.inherit=function(n,r,e){return t(n,this,r,e)}),h.partial(e,c),h}}();return n.attach("langx.klass",l)}),n("skylark-langx-klass/main",["./klass"],function(n){return n}),n("skylark-langx-klass",["skylark-langx-klass/main"],function(n){return n}),n("skylark-langx-emitter/Emitter",["skylark-langx-ns/ns","skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx-klass"],function(n,r,t,e,i){var a=Array.prototype.slice,o=e.compact,u=r.isDefined,s=r.isPlainObject,l=r.isFunction,f=r.isString,c=r.isEmptyObject,p=t.mixin,y=t.safeMixin;function h(n){var r=(""+n).split(".");return{name:r[0],ns:r.slice(1).join(" ")}}var v=i({on:function(n,r,t,e,i,a){var o=this,u=this._hub||(this._hub={});return s(n)?(i=e,each(n,function(n,e){o.on(n,r,t,e,i,a)}),this):(f(r)||l(e)||(i=e,e=t,t=r,r=void 0),l(t)&&(i=e,e=t,t=null),f(n)&&(n=n.split(/\s/)),n.forEach(function(n){var o=h(n),s=o.name,l=o.ns;(u[s]||(u[s]=[])).push({fn:e,selector:r,data:t,ctx:i,ns:l,one:a})}),this)},one:function(n,r,t,e,i){return this.on(n,r,t,e,i,1)},emit:function(n){if(!this._hub)return this;var r=this;f(n)&&(n=new CustomEvent(n)),Object.defineProperty(n,"target",{value:this});var t=a.call(arguments,1);return t=u(t)?[n].concat(t):[n],[n.type||n.name,"all"].forEach(function(e){var i=h(e),a=i.name,u=i.ns,s=r._hub[a];if(s){for(var l=s.length,f=!1,c=0;c<l;c++){var y=s[c];(!u||y.ns&&y.ns.startsWith(u))&&(n.data?y.data&&(n.data=p({},y.data,n.data)):n.data=y.data||null,y.fn.apply(y.ctx,t),y.one&&(s[c]=null,f=!0))}f&&(r._hub[e]=o(s))}}),this},listened:function(n){var r=(this._hub||(this._events={}))[n]||[];return r.length>0},listenTo:function(n,r,t,e){if(!n)return this;f(t)&&(t=this[t]),e?n.one(r,t,this):n.on(r,t,this);for(var i,a=this._listeningTo||(this._listeningTo=[]),o=0;o<a.length;o++)if(a[o].obj==n){i=a[o];break}i||a.push(i={obj:n,events:{}});var u=i.events,s=u[r]=u[r]||[];return-1==s.indexOf(t)&&s.push(t),this},listenToOnce:function(n,r,t){return this.listenTo(n,r,t,1)},off:function(n,r){var t=this._hub||(this._hub={});return f(n)&&(n=n.split(/\s/)),n.forEach(function(n){var e=h(n),i=e.name,a=e.ns,o=t[i];if(o){var u=[];if(r||a)for(var s=0,l=o.length;s<l;s++)r&&o[s].fn!==r&&o[s].fn._!==r?u.push(o[s]):!a||o[s].ns&&0==o[s].ns.indexOf(a)||u.push(o[s]);u.length?t[i]=u:delete t[i]}}),this},unlistenTo:function(n,r,t){var e=this._listeningTo;if(!e)return this;for(var i=0;i<e.length;i++){var a=e[i];if(!n||n==a.obj){var u=a.events;for(var s in u)if(!r||r==s){for(var l=u[s],f=0;f<l.length;f++)t&&t!=l[i]||(a.obj.off(s,l[i],this),l[i]=null);l=u[s]=o(l),c(l)&&(u[s]=null)}c(u)&&(e[i]=null)}}return e=this._listeningTo=o(e),c(e)&&(this._listeningTo=null),this}});return v.prototype.trigger=v.prototype.emit,v.createEvent=function(n,r){var t=new CustomEvent(n,r);return y(t,r)},n.attach("langx.Emitter",v)}),n("skylark-langx-emitter/Evented",["skylark-langx-ns/ns","./Emitter"],function(n,r){return n.attach("langx.Evented",r)}),n("skylark-langx-emitter/main",["./Emitter","./Evented"],function(n){return n}),n("skylark-langx-emitter",["skylark-langx-emitter/main"],function(n){return n})}(t),!i){var u=e("skylark-langx/skylark");a?module.exports=u:r.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-emitter-all.js.map
