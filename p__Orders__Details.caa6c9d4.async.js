(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"/ezw":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r("eHJ2"),o=r.n(a);function l(e){"@babel/helpers - typeof";return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=y();return function(){var r,n=b(e);if(t){var a=b(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var g=function(e){s(r,e);var t=m(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"render",value:function(){var e,t,r=this.props,a=r.prefixCls,l=r.className,c=r.style,f=r.size,d=r.shape,s=o()((e={},u(e,"".concat(a,"-lg"),"large"===f),u(e,"".concat(a,"-sm"),"small"===f),e)),p=o()((t={},u(t,"".concat(a,"-circle"),"circle"===d),u(t,"".concat(a,"-square"),"square"===d),t)),m="number"===typeof f?{width:f,height:f,lineHeight:"".concat(f,"px")}:{};return n["createElement"]("span",{className:o()(a,l,s,p),style:i(i({},m),c)})}}]),r}(n["Component"]);g.defaultProps={size:"large"};var E=g;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var k=function(e){var t=e.prefixCls,r=e.className,a=e.width,l=e.style;return n["createElement"]("h3",{className:o()(t,r),style:w({width:a},l)})},O=k;function S(e){"@babel/helpers - typeof";return S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function R(e){return D(e)||x(e)||j(e)||P()}function P(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){if(e){if("string"===typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}function x(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function D(e){if(Array.isArray(e))return I(e)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}function M(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function N(e){var t=G();return function(){var r,n=Y(e);if(t){var a=Y(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}var U=function(e){M(r,e);var t=N(r);function r(){return C(this,r),t.apply(this,arguments)}return L(r,[{key:"getWidth",value:function(e){var t=this.props,r=t.width,n=t.rows,a=void 0===n?2:n;return Array.isArray(r)?r[e]:a-1===e?r:void 0}},{key:"render",value:function(){var e=this,t=this.props,r=t.prefixCls,a=t.className,l=t.style,i=t.rows,u=R(Array(i)).map(function(t,r){return n["createElement"]("li",{key:r,style:{width:e.getWidth(r)}})});return n["createElement"]("ul",{className:o()(r,a),style:l},u)}}]),r}(n["Component"]),V=U,q=r("H84U");function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t,r){return t&&H(e.prototype,t),r&&H(e,r),e}function J(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function Z(e){var t=ee();return function(){var r,n=te(e);if(t){var a=te(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Q(this,r)}}function Q(e,t){return!t||"object"!==re(t)&&"function"!==typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}function re(e){"@babel/helpers - typeof";return re="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ne(e){return e&&"object"===re(e)?e:{}}function ae(e,t){return e&&!t?{shape:"square"}:{shape:"circle"}}function oe(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function le(e,t){var r={};return e&&t||(r.width="61%"),r.rows=!e&&t?3:2,r}var ie=function(e){J(r,e);var t=Z(r);function r(){var e;return z(this,r),e=t.apply(this,arguments),e.renderSkeleton=function(t){var r=t.getPrefixCls,a=e.props,l=a.prefixCls,i=a.loading,u=a.className,c=a.children,f=a.avatar,d=a.title,s=a.paragraph,p=a.active,m=r("skeleton",l);if(i||!("loading"in e.props)){var v,h,y,b=!!f,g=!!d,w=!!s;if(b){var k=W(W({prefixCls:"".concat(m,"-avatar")},ae(g,w)),ne(f));h=n["createElement"]("div",{className:"".concat(m,"-header")},n["createElement"](E,k))}if(g||w){var S,R;if(g){var P=W(W({prefixCls:"".concat(m,"-title")},oe(b,w)),ne(d));S=n["createElement"](O,P)}if(w){var j=W(W({prefixCls:"".concat(m,"-paragraph")},le(b,g)),ne(s));R=n["createElement"](V,j)}y=n["createElement"]("div",{className:"".concat(m,"-content")},S,R)}var x=o()(m,u,(v={},B(v,"".concat(m,"-with-avatar"),b),B(v,"".concat(m,"-active"),p),v));return n["createElement"]("div",{className:x},h,y)}return c},e}return X(r,[{key:"render",value:function(){return n["createElement"](q["a"],null,this.renderSkeleton)}}]),r}(n["Component"]);ie.defaultProps={avatar:!1,title:!0,paragraph:!0};t["default"]=ie},TuUK:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("5NDa");var a=n(r("5rEg")),o=n(r("jehZ"));r("2qtc");var l=n(r("kLXV"));r("14J3");var i=n(r("BMrR"));r("jCWc");var u=n(r("kPKH"));r("tU7J");var c=n(r("wFql"));r("cWXX");var f=n(r("/ezw"));r("Mwp2");var d=n(r("VXEj"));r("bP8k");var s=n(r("gFTJ"));r("/zsF");var p=n(r("PArb"));r("+L6B");var m=n(r("2/Rp"));r("miYZ");var v=n(r("tsqr")),h=n(r("1l/V")),y=n(r("2Taf")),b=n(r("vZ4D")),g=n(r("MhPg")),E=n(r("l4Ni")),w=n(r("ujKo"));r("OaEy");var k=n(r("2fM7"));r("y8nQ");var O=n(r("Vl3Y"));r("IzEo");var S=n(r("bx4M")),R=A(r("q1tI")),P=r("MuoO"),j=n(r("wd/R")),x=n(r("EW/T")),D=r("Y2fQ"),I=n(r("3a4m")),C=n(r("wHCo")),_=(n(r("rmP6")),n(r("NpBu"))),L=n(r("zHco"));r("91UR");var M,T,N;n(r("XwBy"));function F(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(F=function(e){return e?r:t})(e)}function A(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=F(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function G(){G=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),l=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return R()}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var i=E(l,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,l),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function d(){}function s(){}function p(){}var m={};i(m,a,function(){return this});var v=Object.getPrototypeOf,h=v&&v(v(S([])));h&&h!==t&&r.call(h,a)&&(m=h);var y=p.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function g(e,t){function n(a,o,l,i){var u=c(e[a],e,o);if("throw"!==u.type){var f=u.arg,d=f.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,l,i)},function(e){n("throw",e,l,i)}):t.resolve(d).then(function(e){f.value=e,l(f)},function(e){return n("throw",e,l,i)})}i(u.arg)}var a;this._invoke=function(e,r){function o(){return new t(function(t,a){n(e,r,t,a)})}return a=a?a.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return s.prototype=p,i(y,"constructor",p),i(p,"constructor",s),s.displayName=i(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),i(g.prototype,o,function(){return this}),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var l=new g(u(t,r,n,a),o);return e.isGeneratorFunction(r)?l:l.next().then(function(e){return e.done?e.value:l.next()})},b(y),i(y,l,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function Y(e){var t=U();return function(){var r,n=(0,w.default)(e);if(t){var a=(0,w.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,E.default)(this,r)}}function U(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}S.default.Meta;var V=O.default.Item,q=k.default.Option,B=(M=(0,P.connect)(function(e){var t=e.login,r=e.orders,n=e.settings,a=e.loading;return{token:t.currentUser.Authorization,singleData:r.singleData?r.singleData:{},isAddEdit:r.isAddEdit,settings:n.data[0]?n.data[0]:{},submitting:a.effects["orders/fetchSingleData"]}}),T=O.default.create(),M(N=T(N=function(e){(0,g.default)(r,e);var t=Y(r);function r(){var e;(0,y.default)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),e.state={pagePath:null,showReport:null,editReport:null,editGlobalReport:!1,key:null},e.handleChangeStatus=function(t){var r=e.props,n=r.dispatch,a=r.singleData,o=r.token;a.status=t,n({type:"orders/fetchEditData",payload:a,token:o})},e.handleSubmit=function(t){var r=e.props,n=r.dispatch,a=r.form,o=r.singleData,l=r.token,i=e.state,u=i.key,c=i.editReport;t.preventDefault(),a.validateFieldsAndScroll(function(){var t=(0,h.default)(G().mark(function t(r,a){var i,f;return G().wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=14;break}if(a.reportURL){t.next=4;break}return alert("Please upload report"),t.abrupt("return");case 4:if(!a.reportURL){t.next=9;break}return t.next=7,x.default.addDataApi({orderID:o._id,itemID:c.itemID,url:a.reportURL},"orders/updateReport",l);case 7:i=t.sent,"success"===i.status&&v.default.success("Update Report sucessfully");case 9:f=c,Object.assign(f,a),o.items[u]=f,n({type:"orders/fetchEditData",payload:o,token:l}),e.setState({editReport:null});case 14:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}())},e.handleGlobalSubmit=function(t){var r=e.props,n=r.dispatch,a=r.form,o=r.singleData,l=r.token;e.state.key;t.preventDefault(),a.validateFieldsAndScroll(function(t,r){if(r.report){var a={summary:r.summary,report:r.report};o.results=a,n({type:"orders/fetchEditData",payload:o,token:l}),e.setState({editGlobalReport:!1})}else alert("Please upload report")})},e}return(0,b.default)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,r=e.token,n=e.match,a=n.params?n.params.id:null,o=n.path.split("/")[1];this.setState({pagePath:o}),t(a?{type:"orders/fetchSingleData",payload:{id:a},token:r}:{type:"orders/fetchSingleDataNull",payload:{id:a},token:r})}},{key:"render",value:function(){var e,t,r,n,v,h,y,b,g,E,w,P,x,M,T,N,F,A,G=this,Y=this.props,U=Y.singleData,B=Y.token,W=this.state,z=W.pagePath,H=W.showReport,X=W.editReport,J=W.editGlobalReport,K=this.props.form,Z=K.getFieldDecorator,Q=K.getFieldValue,$={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},ee={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return R.default.createElement(L.default,{title:"View Details",content:R.default.createElement(m.default,{icon:"caret-left",type:"primary",onClick:function(){return I.default.push("/".concat(z,"/all"))}},"Back")},R.default.createElement(p.default,{orientation:"left"},"Patient Details"),R.default.createElement(S.default,null,R.default.createElement(s.default,{title:null===U||void 0===U?void 0:null===(e=U.patient)||void 0===e?void 0:e.name},R.default.createElement(s.default.Item,{label:"Telephone"},"+91-".concat((null===U||void 0===U?void 0:null===(t=U.patient)||void 0===t?void 0:t.address.mobile)||"")),R.default.createElement(s.default.Item,{label:"Gender"},null===U||void 0===U?void 0:null===(r=U.patient)||void 0===r?void 0:r.gender),R.default.createElement(s.default.Item,{label:"DOB"},(null===U||void 0===U?void 0:null===(n=U.patient)||void 0===n?void 0:n.date)?(0,j.default)(null===U||void 0===U?void 0:null===(v=U.patient)||void 0===v?void 0:v.date).format("DD/MM/YYYY"):""),R.default.createElement(s.default.Item,{label:"Address"},null===U||void 0===U?void 0:null===(h=U.patient)||void 0===h?void 0:h.address.address1,null===U||void 0===U?void 0:null===(y=U.patient)||void 0===y?void 0:y.address.city),R.default.createElement(s.default.Item,{label:"Slot Date"},(null===U||void 0===U?void 0:null===(b=U.patient)||void 0===b?void 0:null===(g=b.slot)||void 0===g?void 0:g.date)?(0,j.default)(null===U||void 0===U?void 0:null===(E=U.patient)||void 0===E?void 0:null===(w=E.slot)||void 0===w?void 0:w.date).format("DD/MM/YYYY"):""),R.default.createElement(s.default.Item,{label:"Slot Time"},null===U||void 0===U?void 0:null===(P=U.patient)||void 0===P?void 0:null===(x=P.slot)||void 0===x?void 0:x.name))),R.default.createElement(p.default,{orientation:"left"},"Lab Details"),R.default.createElement(S.default,null,R.default.createElement(s.default,{title:null===U||void 0===U?void 0:null===(M=U.testCenter)||void 0===M?void 0:M.labName},R.default.createElement(s.default.Item,{label:"No. of Tests"},0===(null===U||void 0===U?void 0:null===(T=U.items)||void 0===T?void 0:T.length)?null===U||void 0===U?void 0:U.groups[0].listoftests.length:null===U||void 0===U?void 0:null===(N=U.items)||void 0===N?void 0:N.length),R.default.createElement(s.default.Item,{label:"Payment Mode"},null===U||void 0===U?void 0:U.paymentMode),R.default.createElement(s.default.Item,{label:"Payment Status"},null===U||void 0===U?void 0:U.paymentStatus),R.default.createElement(s.default.Item,{label:"Order ID"},null===U||void 0===U?void 0:U.orderID),R.default.createElement(s.default.Item,{label:"Coll. Type"},null===U||void 0===U?void 0:U.collType),R.default.createElement(s.default.Item,{label:"Order Date"},(null===U||void 0===U?void 0:U.createdAt)?(0,j.default)(null===U||void 0===U?void 0:U.createdAt).format("DD/MM/YYYY"):""))),(null===U||void 0===U?void 0:U.items)&&(null===U||void 0===U?void 0:U.items.length)>0&&R.default.createElement(R.Fragment,null,R.default.createElement(p.default,{orientation:"left"},"Test Details"),R.default.createElement(S.default,null,R.default.createElement(d.default,{bordered:!0,dataSource:null===U||void 0===U?void 0:U.items,renderItem:function(e,t){return R.default.createElement(d.default.Item,{actions:[R.default.createElement("a",{onClick:function(){return G.setState({editReport:e,key:t})}},"Edit"),R.default.createElement("a",{onClick:function(){return G.setState({showReport:e})}},"View Report")]},R.default.createElement(f.default,{avatar:!0,title:!1,loading:e.loading,active:!0},R.default.createElement(d.default.Item.Meta,{title:e.name,description:e.details})))}}))),(null===U||void 0===U?void 0:U.groups)&&(null===U||void 0===U?void 0:U.groups.length)>0&&R.default.createElement(R.Fragment,null,R.default.createElement(p.default,{orientation:"left"},"Package Details"),R.default.createElement(S.default,null,R.default.createElement(d.default,{bordered:!0,dataSource:null===U||void 0===U?void 0:U.groups,renderItem:function(e,t){return R.default.createElement(d.default.Item,{actions:[R.default.createElement("a",{onClick:function(){return G.setState({editReport:e,key:t})}},"Edit"),R.default.createElement("a",{onClick:function(){return G.setState({showReport:e})}},"View Report")]},R.default.createElement(f.default,{avatar:!0,title:!1,loading:e.loading,active:!0},R.default.createElement(d.default.Item.Meta,{title:e.groupName,description:(0,C.default)(e.description||"<p> </p>")})),R.default.createElement("div",{style:{clear:"both"}},e.listoftests.map(function(e,t){return R.default.createElement("p",{style:{margin:2},key:t},e.name)})))}}))),R.default.createElement(i.default,{justify:"center"},R.default.createElement(u.default,{span:12},(null===U||void 0===U?void 0:U.items)&&(null===U||void 0===U?void 0:U.items.length)>0&&R.default.createElement(R.Fragment,null,R.default.createElement(p.default,{orientation:"left"},"Test Price Details"),R.default.createElement(S.default,null,R.default.createElement(d.default,{bordered:!0,dataSource:null===U||void 0===U?void 0:U.items,renderItem:function(e){return R.default.createElement(d.default.Item,null,R.default.createElement(c.default.Text,{style:{marginRight:20},mark:!0},e.name)," \u20b9",e.price," /-")}}))),(null===U||void 0===U?void 0:U.groups)&&(null===U||void 0===U?void 0:U.groups.length)>0&&R.default.createElement(R.Fragment,null,R.default.createElement(p.default,{orientation:"left"},"Package Price Details"),R.default.createElement(S.default,null,R.default.createElement(d.default,{bordered:!0,dataSource:null===U||void 0===U?void 0:U.groups,renderItem:function(e){return R.default.createElement(d.default.Item,null,R.default.createElement(c.default.Text,{style:{marginRight:20},mark:!0},e.groupName)," \u20b9",e.price," /-")}})))),R.default.createElement(u.default,{span:11,offset:1},R.default.createElement(p.default,{orientation:"left"},"Order Details"),R.default.createElement(S.default,null,R.default.createElement(s.default,{title:""},R.default.createElement(s.default.Item,{label:"Discount"},"- \u20b9",(null===U||void 0===U?void 0:U.discount)?Number(null===U||void 0===U?void 0:U.discount).toFixed(2):0),R.default.createElement(s.default.Item,{label:"Home Coll."},"\u20b9",(null===U||void 0===U?void 0:U.homeCollectionCharges)?Number(null===U||void 0===U?void 0:U.homeCollectionCharges).toFixed(2):0),R.default.createElement(s.default.Item,{label:"Total"},"\u20b9",(Number((null===U||void 0===U?void 0:U.total)-(null===U||void 0===U?void 0:U.discount))+Number(null===U||void 0===U?void 0:U.homeCollectionCharges)).toFixed(2)),R.default.createElement(s.default.Item,{label:"Order Status"},null===U||void 0===U?void 0:U.status))),R.default.createElement(p.default,{orientation:"left"},"Edit Details"),R.default.createElement(S.default,null,R.default.createElement(s.default,{title:""},U&&R.default.createElement(s.default.Item,{label:"Change Order Status"},R.default.createElement(k.default,{style:{minWidth:100},placeholder:"Status",onChange:this.handleChangeStatus,value:null===U||void 0===U?void 0:U.status},R.default.createElement(q,{key:"placed"},"Placed"),R.default.createElement(q,{key:"inProgress"},"In Progress"),R.default.createElement(q,{key:"completed"},"Completed"),R.default.createElement(q,{key:"cancelled"},"Cancelled"),R.default.createElement(q,{key:"rejected"},"Rejected"))),R.default.createElement(s.default.Item,{label:""},R.default.createElement("a",{onClick:function(){return G.setState({editGlobalReport:!0})}},"Edit Global Report")))))),R.default.createElement(l.default,{title:"View Report",visible:!!H,onOk:function(){return G.setState({showReport:null})},onCancel:function(){return G.setState({showReport:null})}},R.default.createElement(S.default,{style:{width:"100%",marginTop:5,marginBottom:15,float:"left",clear:"both"}},R.default.createElement("p",{style:{marginTop:16}},"Issue: ",null===H||void 0===H?void 0:H.issue),R.default.createElement("p",null,"Symptoms: ",null===H||void 0===H?void 0:H.symptoms)),R.default.createElement("div",{style:{clear:"both"}})),R.default.createElement(l.default,{width:600,title:"Edit Report",visible:!!X,footer:null,onOk:function(){return G.setState({editReport:null})},onCancel:function(){return G.setState({editReport:null})}},R.default.createElement(S.default,{style:{width:"100%",marginTop:5,marginBottom:15,float:"left",clear:"both"}},R.default.createElement(O.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},R.default.createElement(p.default,{orientation:"left"},"Update Report"),R.default.createElement(V,(0,o.default)({},$,{label:R.default.createElement(D.FormattedMessage,{id:"app.orders.label.report"})}),Z("reportURL",{initialValue:null})(R.default.createElement(_.default,{newValue:Q("reportURL"),type:"pdf",token:B}))),R.default.createElement(p.default,{orientation:"left"},"Issues"),R.default.createElement(V,(0,o.default)({},$,{label:R.default.createElement(D.FormattedMessage,{id:"app.orders.label.issue"})}),Z("issue",{initialValue:null===X||void 0===X?void 0:X.issue,rules:[{required:!0,message:(0,D.formatMessage)({id:"app.orders.required.issue"})}]})(R.default.createElement(a.default,{placeholder:(0,D.formatMessage)({id:"app.orders.placeholder.issue"})}))),R.default.createElement(V,(0,o.default)({},$,{label:R.default.createElement(D.FormattedMessage,{id:"app.orders.label.symptoms"})}),Z("symptoms",{initialValue:null===X||void 0===X?void 0:X.symptoms,rules:[{required:!0,message:(0,D.formatMessage)({id:"app.orders.required.symptoms"})}]})(R.default.createElement(a.default,{placeholder:(0,D.formatMessage)({id:"app.orders.placeholder.symptoms"})}))),R.default.createElement(V,(0,o.default)({},ee,{style:{marginTop:32}}),R.default.createElement(m.default,{type:"primary",htmlType:"submit"},"UPDATE"),R.default.createElement(m.default,{onClick:function(){return G.setState({editReport:null})},style:{marginLeft:8}},R.default.createElement(D.FormattedMessage,{id:"form.cancel"}))))),R.default.createElement("div",{style:{clear:"both"}})),R.default.createElement(l.default,{width:600,title:"Edit Global Report",visible:J,footer:null,onOk:function(){return G.setState({editGlobalReport:!1})},onCancel:function(){return G.setState({editGlobalReport:!1})}},R.default.createElement(S.default,{style:{width:"100%",marginTop:5,marginBottom:15,float:"left",clear:"both"}},R.default.createElement(O.default,{onSubmit:this.handleGlobalSubmit,hideRequiredMark:!0,style:{marginTop:8}},R.default.createElement(p.default,{orientation:"left"},"Update Report"),R.default.createElement(V,(0,o.default)({},$,{label:R.default.createElement(D.FormattedMessage,{id:"app.orders.label.summary"})}),Z("summary",{initialValue:null===U||void 0===U?void 0:null===(F=U.results)||void 0===F?void 0:F.summary,rules:[]})(R.default.createElement(a.default,{placeholder:(0,D.formatMessage)({id:"app.orders.placeholder.summary"})}))),R.default.createElement(V,(0,o.default)({},$,{label:R.default.createElement(D.FormattedMessage,{id:"app.orders.label.report"})}),Z("report",{initialValue:null===U||void 0===U?void 0:null===(A=U.results)||void 0===A?void 0:A.report})(R.default.createElement(_.default,{newValue:Q("report"),type:"pdf",token:B}))),R.default.createElement(V,(0,o.default)({},ee,{style:{marginTop:32}}),R.default.createElement(m.default,{type:"primary",htmlType:"submit"},"UPDATE"),R.default.createElement(m.default,{onClick:function(){return G.setState({editGlobalReport:!1})},style:{marginLeft:8}},R.default.createElement(D.FormattedMessage,{id:"form.cancel"}))))),R.default.createElement("div",{style:{clear:"both"}})))}}]),r}(R.PureComponent))||N)||N),W=B;t.default=W},cWXX:function(e,t,r){"use strict";r.r(t);r("cIOH"),r("oIFs")},oIFs:function(e,t,r){e.exports={"ant-skeleton":"ant-skeleton","ant-skeleton-header":"ant-skeleton-header","ant-skeleton-avatar":"ant-skeleton-avatar","ant-skeleton-avatar-circle":"ant-skeleton-avatar-circle","ant-skeleton-avatar-lg":"ant-skeleton-avatar-lg","ant-skeleton-avatar-sm":"ant-skeleton-avatar-sm","ant-skeleton-content":"ant-skeleton-content","ant-skeleton-title":"ant-skeleton-title","ant-skeleton-paragraph":"ant-skeleton-paragraph","ant-skeleton-with-avatar":"ant-skeleton-with-avatar","ant-skeleton-active":"ant-skeleton-active","ant-skeleton-loading":"ant-skeleton-loading"}}}]);