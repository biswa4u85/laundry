(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{ZDHk:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("bP8k");var l=n(a("gFTJ"));a("+L6B");var u=n(a("2/Rp")),o=n(a("2Taf")),i=n(a("vZ4D")),c=n(a("MhPg")),f=n(a("l4Ni")),d=n(a("ujKo"));a("y8nQ");var s,p,h,m=n(a("Vl3Y")),v=E(a("q1tI")),y=a("MuoO"),g=n(a("3a4m")),b=n(a("wHCo")),k=n(a("zHco"));function D(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(D=function(e){return e?a:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=D(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=r?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function P(e){var t=w();return function(){var a,n=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,f.default)(this,a)}}function w(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}a("91UR");var O=(s=(0,y.connect)(function(e){var t=e.login,a=e.tests,n=e.settings,r=e.orders,l=e.loading;return{token:t.currentUser.Authorization,singleData:a.singleData?a.singleData:{},isAddEdit:a.isAddEdit,orderData:r.data,settings:n.data[0]?n.data[0]:{},submitting:l.effects["tests/fetchSingleData"]}}),p=m.default.create(),s(h=p(h=function(e){(0,c.default)(a,e);var t=P(a);function a(){var e;(0,o.default)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.state={pagePath:null},e}return(0,i.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.token,n=e.match,r=n.params?n.params.id:null,l=n.path.split("/")[1];this.setState({pagePath:l}),t(r?{type:"tests/fetchSingleData",payload:{id:r},token:a}:{type:"tests/fetchSingleDataNull",payload:{id:r},token:a})}},{key:"render",value:function(){var e,t=this,a=this.props.singleData,n=this.state.pagePath;return v.default.createElement(k.default,{title:"View Details",content:v.default.createElement(u.default,{icon:"caret-left",type:"primary",onClick:function(){return g.default.push("/".concat(n,"/all"))}},"Back")},v.default.createElement(r.default,{bordered:!1},v.default.createElement(l.default,{title:"",layout:"vertical",bordered:!0},v.default.createElement(l.default.Item,{label:"Name"},null===a||void 0===a?void 0:null===(e=a.masterID)||void 0===e?void 0:e.title),v.default.createElement(l.default.Item,{label:"Home Collection"},a.homeColl?"Yes":"No"),v.default.createElement(l.default.Item,{label:"Description"},(0,b.default)(a.description||"<p> </p>")),v.default.createElement(l.default.Item,{label:"Price"},"\u20b9",a.price),v.default.createElement(l.default.Item,{label:"List of Tests"},(0,b.default)(a.listofTests||"<p> </p>")),v.default.createElement(l.default.Item,{label:"Actions"},v.default.createElement(u.default,{type:"primary",onClick:function(){return g.default.push("/".concat(t.state.pagePath,"/").concat(a._id))}},"Edit")))))}}]),a}(v.PureComponent))||h)||h),I=O;t.default=I}}]);