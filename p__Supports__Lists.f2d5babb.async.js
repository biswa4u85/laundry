(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{MR4F:function(e,t,a){e.exports={tableList:"antd-pro-pages-supports-styles-tableList",tableListOperator:"antd-pro-pages-supports-styles-tableListOperator",tableListForm:"antd-pro-pages-supports-styles-tableListForm",submitButtons:"antd-pro-pages-supports-styles-submitButtons",optional:"antd-pro-pages-supports-styles-optional"}},"UU/N":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("P2fV");var l=n(a("NJEC"));a("Awhp");var o=n(a("KrTs"));a("14J3");var u=n(a("BMrR"));a("jCWc");var s=n(a("kPKH"));a("5NDa");var i=n(a("5rEg")),d=n(a("p0pE"));a("+L6B");var c=n(a("2/Rp"));a("/zsF");var f=n(a("PArb")),p=n(a("2Taf")),m=n(a("vZ4D")),h=n(a("MhPg")),v=n(a("l4Ni")),y=n(a("ujKo"));a("OaEy");var g=n(a("2fM7"));a("y8nQ");var E,b,k,w=n(a("Vl3Y")),D=N(a("q1tI")),S=a("MuoO"),O=n(a("3a4m")),P=n(a("CkN6")),R=n(a("zHco")),I=n(a("wd/R")),A=a("CjPp"),C=n(a("MR4F"));function L(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(L=function(e){return e?a:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=L(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}function M(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=F(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,u=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){u=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(u)throw l}}}}function F(e,t){if(e){if("string"===typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function T(e){var t=x();return function(){var a,n=(0,y.default)(e);if(t){var r=(0,y.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,v.default)(this,a)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var _=w.default.Item,V=g.default.Option,B={open:"red",pending:"blue",resolved:"green"},z={open:"ESCALATE",pending:"RESOLVED",resolved:"CLOSED"},Y=(E=(0,S.connect)(function(e){var t=e.login,a=e.supports,n=e.labs,r=e.loading;return{token:t.currentUser.Authorization,data:a.data,labData:n.data.list,loading:r.models.supports}}),b=w.default.create(),E(k=b(k=function(e){(0,h.default)(a,e);var t=T(a);function a(){var e;(0,p.default)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.state={selectedRows:[],formValues:{}},e.columns=[{title:"Ticket ID",dataIndex:"ticketID",sorter:!0},{title:"Issue Type",dataIndex:"issueType"},{title:"Reported Time",dataIndex:"createdAt",render:function(e){return D.default.createElement("div",null,e?(0,I.default)(e).format("DD/MM/YYYY HH:mm:ss"):"")}},{title:"Status",dataIndex:"status",render:function(e){return D.default.createElement("div",{style:{color:B[e]}},e)}},{title:"Actions",render:function(t,a){return D.default.createElement(D.Fragment,null,D.default.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.viewItem(a)}},D.default.createElement(A.AntDesign,{name:"rightcircle",color:"#6558f5",size:17})),D.default.createElement(f.default,{type:"vertical"}),D.default.createElement(c.default,{style:{cursor:"pointer",background:B[a.status],color:"#fff"},onClick:function(){return e.editItem(a)}},z[a.status]))}}],e.handlePageChange=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.props,l=r.dispatch,o=r.token,u=n||e.state.formValues;u.page=t,u.filter=JSON.stringify({pageNo:t,pageSize:10}),l({type:"supports/fetchData",payload:u,token:o})},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.addItem=function(){O.default.push("/".concat(e.state.pagePath,"/add"))},e.viewItem=function(t){O.default.push("/".concat(e.state.pagePath,"/view/").concat(t._id))},e.editItem=function(t){O.default.push("/".concat(e.state.pagePath,"/").concat(t._id))},e.deleteItem=function(t){var a=e.props,n=a.dispatch,r=a.token;t.id=t._id,n({type:"supports/fetchDeleteData",payload:t,token:r})},e.deleteAll=function(){var t,a=e.state.selectedRows,n=e.props,r=n.dispatch,l=n.token,o=[],u=M(a);try{for(u.s();!(t=u.n()).done;){var s=t.value;o.push(s._id)}}catch(e){u.e(e)}finally{u.f()}if(o.length>0){var i={id:o[0],_id:o};r({type:"supports/fetchDeleteData",payload:i,token:l})}},e.handleFormReset=function(){e.setState({formValues:{}}),e.handlePageChange(1,10,{}),e.props.form.resetFields()},e.handleSearch=function(t){t.preventDefault();var a=e.props.form;a.validateFields(function(t,a){if(!t){var n=(0,d.default)({},a);e.setState({formValues:n}),e.handlePageChange(1,10,n)}})},e}return(0,m.default)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.token,n=e.match,r=n.path.split("/")[1];this.setState({pagePath:r}),t({type:"labs/fetchData",payload:{},token:a}),this.handlePageChange(1,10)}},{key:"renderSimpleForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.labData;return D.default.createElement(w.default,{onSubmit:this.handleSearch,layout:"inline"},D.default.createElement(u.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(s.default,{md:8,sm:24},D.default.createElement(_,{label:"Search"},t("ticketID")(D.default.createElement(i.default,{placeholder:"Ticket ID"})))),D.default.createElement(s.default,{md:8,sm:24},D.default.createElement(_,{label:"Search by Lab"},t("labID")(D.default.createElement(g.default,{placeholder:"Lab Name"},a.map(function(e,t){return D.default.createElement(V,{key:t,value:e._id},e.labName)}))))),D.default.createElement(s.default,{md:4,sm:24},D.default.createElement("span",{className:C.default.submitButtons},D.default.createElement(c.default,{type:"primary",htmlType:"submit"},"Search"),D.default.createElement(c.default,{style:{marginLeft:8},onClick:this.handleFormReset},"Reset")))))}},{key:"render",value:function(){var e,t,a,n,u,s,i=this,d=this.props,f=d.data,p=d.loading,m=this.state.selectedRows;return D.default.createElement(R.default,{title:"supports List"},D.default.createElement(r.default,{bordered:!1},D.default.createElement("div",{className:C.default.tableList},D.default.createElement("div",{style:{float:"right"}},D.default.createElement(o.default,{count:(null===(e=f.status)||void 0===e?void 0:e.open)?null===(t=f.status)||void 0===t?void 0:t.open:"0"},D.default.createElement("div",{style:{margin:20,color:B.open}},"OPEN")),D.default.createElement(o.default,{count:(null===(a=f.status)||void 0===a?void 0:a.pending)?null===(n=f.status)||void 0===n?void 0:n.pending:"0"},D.default.createElement("div",{style:{margin:20,color:B.pending}},"PENDING")),D.default.createElement(o.default,{count:(null===(u=f.status)||void 0===u?void 0:u.resolved)?null===(s=f.status)||void 0===s?void 0:s.resolved:"0"},D.default.createElement("div",{style:{margin:20,color:B.resolved}},"RESOLVED"))),D.default.createElement("div",{className:C.default.tableListForm},this.renderSimpleForm()),D.default.createElement("div",{className:C.default.tableListOperator},m.length>0&&D.default.createElement("span",null,D.default.createElement(l.default,{title:"are you sure delete all checked items?",onConfirm:function(){return i.deleteAll()},okText:"Yes",cancelText:"No"},D.default.createElement(c.default,null,"Delete All")))),D.default.createElement(P.default,{selectedRows:m,loading:p,data:f,columns:this.columns,pageOnChange:this.handlePageChange,onSelectRow:this.handleSelectRows}))))}}]),a}(D.PureComponent))||k)||k),J=Y;t.default=J}}]);