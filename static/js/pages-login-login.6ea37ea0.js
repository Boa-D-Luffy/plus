(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{5848:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{login:function(t){console.log("得到账号:"+t.detail.value.nameValue+";得到密码:"+t.detail.value.passwordValue)},register:function(){console.log("前往注册页面")}}};e.default=a},"7c51":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-form",{staticClass:"loginView",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("账号")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号",name:"nameValue"}})],1),n("v-uni-view",{staticClass:"input-view"},[n("v-uni-view",{staticClass:"label-view"},[n("v-uni-text",{staticClass:"label"},[t._v("密码")])],1),n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",name:"passwordValue"}})],1),n("v-uni-view",{staticClass:"button-view"},[n("v-uni-button",{staticClass:"login",attrs:{type:"default","hover-class":"hover",formType:"submit"}},[t._v("登录")])],1)],1)},u=[]},b3cf:function(t,e,n){"use strict";n.r(e);var a=n("5848"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},e915:function(t,e,n){"use strict";n.r(e);var a=n("7c51"),i=n("b3cf");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var s,l=n("f0c5"),o=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"3e0ba877",null,!1,a["a"],s);e["default"]=o.exports}}]);