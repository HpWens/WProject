(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d4609da"],{"070e":function(t,e,n){"use strict";n.r(e);var a=n("bd86"),i=(n("7f7f"),n("5246"),n("6b41")),s=n("3191"),c={name:"change-password",components:Object(a.a)({},i.a.name,i.a),data:function(){return{user:{userId:"78161",userName:"asdasd16"},content:"",title:""}},mounted:function(){this._sysHomeConfig()},methods:{_sysHomeConfig:function(){var e=this;Object(s.a)({type:"INDEX_ANSWER"}).then(function(t){e.content=t.data.content||"",e.title=t.data.title||"",console.log("res: ",t)})},next:function(){},goBack:function(){this.$router.back()}}},r=(n("2ab8"),n("bad1"),n("2877")),o=Object(r.a)(c,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticStyle:{height:"100vh",background:"#fff",position:"relative"}},[a("van-nav-bar",{attrs:{title:"问题答疑","left-arrow":""},on:{"click-left":n.goBack}}),n._v(" "),a("div",{staticClass:"message-detail-view"},[a("div",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),n._l(n.content.split(/\n|\r\n/),function(t,e){return a("div",{key:e,staticClass:"content",staticStyle:{"line-height":"1.8"}},[n._v("\n      "+n._s(t)+"\n      ")])})],2)],1)},[],!1,null,"04a3bbcb",null);e.default=o.exports},"0aea":function(t,e,n){},"2ab8":function(t,e,n){"use strict";var a=n("0aea");n.n(a).a},3191:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("b775");function i(t){return Object(a.a)({url:"/sysConfig/index",params:t,method:"get"})}},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("09fe"),n("3743"),n("8a0b")},"6b41":function(t,e,n){"use strict";var a=n("2638"),s=n.n(a),i=n("d282"),c=n("a142"),r=n("ba31"),o=n("b1d2"),l=n("ad06"),f=Object(i.a)("nav-bar"),u=f[0],d=f[1];function b(t,e,n,a){var i;return t("div",s()([{class:[d({fixed:e.fixed}),((i={})[o.c]=e.border,i)],style:{zIndex:e.zIndex}},Object(r.b)(a)]),[t("div",{class:d("left"),on:{click:a.listeners["click-left"]||c.e}},[n.left?n.left():[e.leftArrow&&t(l.a,{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:d("right"),on:{click:a.listeners["click-right"]||c.e}},[n.right?n.right():e.rightText&&t("span",{class:d("text")},[e.rightText])])])}b.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e.a=u(b)},"8a0b":function(t,e,n){},"979c":function(t,e,n){},bad1:function(t,e,n){"use strict";var a=n("979c");n.n(a).a}}]);