(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{m1UU:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("bP8k");var r=n(a("gFTJ"));a("+L6B");var u=n(a("2/Rp"));a("P2fV");var d=n(a("NJEC"));a("Pwec");var o=n(a("CtXQ"));a("/zsF");var i=n(a("PArb")),c=n(a("2Taf")),f=n(a("vZ4D")),s=n(a("MhPg")),p=n(a("l4Ni")),m=n(a("ujKo"));a("y8nQ");var v=n(a("Vl3Y"));a("Znn+");var h=n(a("ZTPi")),g=x(a("q1tI")),y=a("MuoO"),E=n(a("wd/R")),b=n(a("3a4m")),k=n(a("CkN6")),I=a("CjPp"),P=(n(a("wHCo")),n(a("zHco")));a("91UR");var D,C,w,O=n(a("6kIa"));function A(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(A=function(e){return e?a:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=A(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=l?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}function T(e){var t=M();return function(){var a,n=(0,m.default)(e);if(t){var l=(0,m.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,p.default)(this,a)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var N=h.default.TabPane,R=["On","Off"],j=(D=(0,y.connect)(function(e){var t=e.login,a=e.users,n=e.settings,l=e.orders,r=e.loading;return{token:t.currentUser.Authorization,singleData:a.singleData?a.singleData:{},isAddEdit:a.isAddEdit,orderData:l.data,settings:n.data[0]?n.data[0]:{},submitting:r.effects["users/fetchSingleData"]}}),C=v.default.create(),D(w=C(w=function(e){(0,s.default)(a,e);var t=T(a);function a(){var e;(0,c.default)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),e.state={pageId:null},e.handlePageChange=function(t,a){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=e.props,l=n.dispatch,r=n.token,u=n.match,d=u.params?u.params.id:null,o={page:t};o.customerId=d,o.filter=JSON.stringify({pageNo:t,pageSize:10}),l({type:"orders/fetchData",payload:o,token:r})},e.columns=[{title:"Customer Name",dataIndex:"customer",sorter:!0,render:function(e){var t;return g.default.createElement("div",null,e?null===e||void 0===e?void 0:null===(t=e.profile)||void 0===t?void 0:t.name:"")}},{title:"Date",dataIndex:"createdAt",render:function(e){return g.default.createElement("div",null,e?(0,E.default)(e).format("DD/MM/YYYY"):"")}},{title:"Items",dataIndex:"items",render:function(e){return g.default.createElement("div",null,e.length)}},{title:"Test Center",dataIndex:"testCenter",render:function(e){return g.default.createElement("div",null,e?null===e||void 0===e?void 0:e.labName:"")}},{title:"Coll. Type",dataIndex:"collType"},{title:"Booking Slot",dataIndex:"slots",render:function(e){return g.default.createElement("div",null,e?"".concat(e.startTime," - ").concat(e.endTime):"")}},{title:"Reports",dataIndex:"reports"},{title:"Status",dataIndex:"status",render:function(e){return g.default.createElement("div",{style:{color:R[e]}},e)}},{title:"Actions",render:function(t,a){return g.default.createElement(g.Fragment,null,g.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.viewItem(a)}},g.default.createElement(I.AntDesign,{name:"rightcircle",color:"#6558f5",size:17})),g.default.createElement(i.default,{type:"vertical"}),g.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.editItem(a)}},g.default.createElement(I.AntDesign,{name:"edit",color:"green",size:17})),g.default.createElement(i.default,{type:"vertical"}),g.default.createElement(d.default,{title:"Are you sure delete this?",onConfirm:function(){return e.deleteItem(a)},okText:"Yes",cancelText:"No"},g.default.createElement(o.default,{style:{color:"#ff0000"},type:"delete",className:O.default.icon})))}}],e}return(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.token,n=e.match,l=n.params?n.params.id:null,r=n.path.split("/")[1],u=n.path.split("/")[2];this.setState({pageId:l,pagePath:r,pageType:u}),this.handlePageChange(1,10),t(l?{type:"users/fetchSingleData",payload:{id:l},token:a}:{type:"users/fetchSingleDataNull",payload:{id:l},token:a})}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.singleData,d=a.loading,o=a.orderData,i=this.state.pagePath;return g.default.createElement(P.default,{title:"View Details",content:g.default.createElement(u.default,{icon:"caret-left",type:"primary",onClick:function(){return b.default.push("/".concat(i,"/all"))}},"Back")},g.default.createElement(l.default,{bordered:!1},g.default.createElement(h.default,{defaultActiveKey:"1"},g.default.createElement(N,{tab:"Details",key:"1"},g.default.createElement(r.default,{title:"",layout:"vertical",bordered:!0},g.default.createElement(r.default.Item,{label:"Name"},null===n||void 0===n?void 0:null===(e=n.profile)||void 0===e?void 0:e.name),g.default.createElement(r.default.Item,{label:"Email"},n.email),g.default.createElement(r.default.Item,{label:"Phone"},n.countryCode," ",n.phone),g.default.createElement(r.default.Item,{label:"Address"},n.addresses&&n.addresses[0]?n.addresses[0].address1:""),g.default.createElement(r.default.Item,{label:"Status"},n.status),g.default.createElement(r.default.Item,{label:"Actions"},g.default.createElement(u.default,{type:"primary",onClick:function(){return b.default.push("/".concat(t.state.pagePath,"/").concat(n._id))}},"Edit")))),g.default.createElement(N,{tab:"Order Details",key:"2"},g.default.createElement(k.default,{selectedRows:[],loading:d,data:o,pageOnChange:this.handlePageChange,columns:this.columns})))))}}]),a}(g.PureComponent))||w)||w),S=j;t.default=S}}]);