(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{Jm9t:function(e,a,t){"use strict";var l=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var r=l(t("bx4M"));t("7Kak");var s=l(t("9yH6"));t("iQDF");var u=l(t("+eQT")),d=l(t("jehZ"));t("+L6B");var n=l(t("2/Rp")),i=l(t("p0pE")),o=l(t("2Taf")),f=l(t("vZ4D")),p=l(t("MhPg")),c=l(t("l4Ni")),m=l(t("ujKo"));t("OaEy");var g=l(t("2fM7"));t("5NDa");var h=l(t("5rEg"));t("y8nQ");var E=l(t("Vl3Y")),v=A(t("q1tI")),y=t("MuoO"),b=l(t("wd/R")),M=t("Y2fQ"),w=l(t("3a4m")),k=(l(t("rmP6")),l(t("Ztac")),l(t("NpBu"))),D=l(t("zHco"));t("91UR");var F,P,R,q=l(t("E0KS"));l(t("mW0K")),l(t("6kIa"));function O(e){if("function"!==typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(O=function(e){return e?t:a})(e)}function A(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=O(a);if(t&&t.has(e))return t.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=r?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(l,s,u):l[s]=e[s]}return l.default=e,t&&t.set(e,l),l}function U(e){var a=z();return function(){var t,l=(0,m.default)(e);if(a){var r=(0,m.default)(this).constructor;t=Reflect.construct(l,arguments,r)}else t=l.apply(this,arguments);return(0,c.default)(this,t)}}function z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var S=E.default.Item,V=(h.default.TextArea,g.default.Option),j="YYYY/MM/DD",L=(F=(0,y.connect)(function(e){var a=e.login,t=e.users,l=e.settings,r=e.loading;return{token:a.currentUser.Authorization,singleData:t.singleData,settings:l.data,isAddEdit:t.isAddEdit,submitting:r.effects["users/addUsers"]}}),P=E.default.create(),F(R=P(R=function(e){(0,p.default)(t,e);var a=U(t);function t(){var e;(0,o.default)(this,t);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return e=a.call.apply(a,[this].concat(r)),e.state={pageId:null},e.handleSubmit=function(a){var t=e.props,l=t.dispatch,r=t.form,s=t.singleData,u=t.token,d=e.state.pageId;a.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e)if(d){var t=s;Object.assign(t,a),l({type:"users/fetchEditData",payload:(0,i.default)({},t,{profile:{profileURL:a.profileURL,name:a.name}}),token:u})}else a.roles=["user"],l({type:"users/fetchAddData",payload:(0,i.default)({},a,{profile:{profileURL:a.profileURL,name:a.name}}),token:u})})},e}return(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.token,l=e.match,r=l.params?l.params.id:null;this.setState({pageId:r});var s=l.path.split("/")[1];this.setState({pagePath:s}),a(r?{type:"users/fetchSingleData",payload:{id:r},token:t}:{type:"users/fetchSingleDataNull",payload:{id:r},token:t})}},{key:"componentDidUpdate",value:function(e){var a=this.props.isAddEdit;a!==e.isAddEdit&&(a||w.default.push("/".concat(this.state.pagePath,"/all")))}},{key:"render",value:function(){var e,a=this,t=this.props,l=t.submitting,i=t.singleData,o=t.token,f=t.settings,p=this.props.form,c=p.getFieldDecorator,m=p.getFieldValue,y=this.state,F=y.pageId,P=y.pagePath,R=f.userStatus?f.userStatus:[],O={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},A={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return v.default.createElement(D.default,{title:F?"Edit Details":"Add Details",content:v.default.createElement(n.default,{icon:"caret-left",type:"primary",onClick:function(){return w.default.push("/".concat(P,"/all"))}},"Back")},v.default.createElement(r.default,{bordered:!1},v.default.createElement(E.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.name"})}),c("name",{initialValue:null===i||void 0===i?void 0:null===(e=i.profile)||void 0===e?void 0:e.name,rules:[{required:!0,message:(0,M.formatMessage)({id:"app.users.required.name"})}]})(v.default.createElement(h.default,{placeholder:(0,M.formatMessage)({id:"app.users.placeholder.name"})}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.profile"})}),c("profileURL",{initialValue:null===i||void 0===i?void 0:i.profileURL})(v.default.createElement(k.default,{newValue:m("profileURL"),token:o}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.email"})}),c("email",{initialValue:i.email,rules:[{required:!0,message:(0,M.formatMessage)({id:"app.users.required.email"})},{pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,message:(0,M.formatMessage)({id:"app.users.required.invalid"})}]})(v.default.createElement(h.default,{placeholder:(0,M.formatMessage)({id:"app.users.placeholder.email"})}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.mobile"})}),c("phone",{initialValue:i.phone,rules:[{required:!0,message:(0,M.formatMessage)({id:"app.users.required.mobile"},{})},{pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,message:(0,M.formatMessage)({id:"app.users.label.mobile.wrong-format"})}]})(v.default.createElement(q.default,{disabled:!!F}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.password"})}),c("password",{initialValue:i.password,rules:[F?{}:{required:!0,message:(0,M.formatMessage)({id:"app.users.required.password"})}]})(v.default.createElement(h.default.Password,{autoComplete:"new-password",placeholder:(0,M.formatMessage)({id:"app.users.placeholder.password"})}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.date"})}),c("age",{initialValue:i.age?b.default.utc(i.age,j):null,rules:[{required:!0,message:(0,M.formatMessage)({id:"app.users.required.date"})}]})(v.default.createElement(u.default,{style:{width:"100%"},format:j,placeholder:(0,M.formatMessage)({id:"app.users.placeholder.date"})}))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.gender"})}),v.default.createElement("div",null,c("gender",{initialValue:i.gender?i.gender:"Male"})(v.default.createElement(s.default.Group,null,v.default.createElement(s.default,{value:"Male"},v.default.createElement(M.FormattedMessage,{id:"app.users.status.male"})),v.default.createElement(s.default,{value:"Female"},v.default.createElement(M.FormattedMessage,{id:"app.users.status.female"})))))),v.default.createElement(S,(0,d.default)({},O,{label:v.default.createElement(M.FormattedMessage,{id:"app.users.label.status"})}),c("status",{initialValue:i.status,rules:[{required:!0,message:(0,M.formatMessage)({id:"app.users.required.status"})}]})(v.default.createElement(g.default,{placeholder:(0,M.formatMessage)({id:"app.users.placeholder.status"}),style:{width:"100%"}},R.map(function(e,a){return v.default.createElement(V,{key:a,value:e},e)})))),v.default.createElement(S,(0,d.default)({},A,{style:{marginTop:32}}),v.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:l},F?"UPDATE":"ADD"),v.default.createElement(n.default,{onClick:function(){return w.default.push("/".concat(a.state.pagePath,"/all"))},style:{marginLeft:8}},v.default.createElement(M.FormattedMessage,{id:"form.cancel"}))))))}}]),t}(v.PureComponent))||R)||R),I=L;a.default=I}}]);