(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b1062058"],{"1aef":function(t,e,n){},"1fe3":function(t,e,n){},3191:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var i=n("b775");function a(t){return Object(i.a)({url:"/sysConfig/index",params:t,method:"get"})}function s(t){return Object(i.a)({url:"/sysConfig/appDownloadUrl",params:t,method:"get"})}},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("09fe"),n("3743"),n("8a0b")},"6b41":function(t,e,n){"use strict";var i=n("2638"),s=n.n(i),a=n("d282"),r=n("a142"),c=n("ba31"),o=n("b1d2"),l=n("ad06"),f=Object(a.a)("nav-bar"),u=f[0],d=f[1];function b(t,e,n,i){var a;return t("div",s()([{class:[d({fixed:e.fixed}),((a={})[o.c]=e.border,a)],style:{zIndex:e.zIndex}},Object(c.b)(i)]),[t("div",{class:d("left"),on:{click:i.listeners["click-left"]||r.e}},[n.left?n.left():[e.leftArrow&&t(l.a,{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:d("right"),on:{click:i.listeners["click-right"]||r.e}},[n.right?n.right():e.rightText&&t("span",{class:d("text")},[e.rightText])])])}b.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e.a=u(b)},"7f0d":function(t,e,n){"use strict";var i=n("1fe3");n.n(i).a},"8a0b":function(t,e,n){},ad68:function(t,e,n){"use strict";var i=n("1aef");n.n(i).a},dfa9:function(t,e,n){"use strict";n.r(e);var i=n("bd86"),a=(n("7f7f"),n("5246"),n("6b41")),s=n("3191"),r={name:"change-password",components:Object(i.a)({},a.a.name,a.a),data:function(){return{content:"",title:""}},mounted:function(){this._sysHomeConfig()},methods:{_sysHomeConfig:function(){var e=this;Object(s.b)({type:"INDEX_RULE"}).then(function(t){e.content=t.data.content||"",e.title=t.data.title||""})},next:function(){},goBack:function(){this.$router.back()}}},c=(n("ad68"),n("7f0d"),n("2877")),o=Object(c.a)(r,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticStyle:{height:"100vh",background:"#fff",position:"relative"}},[i("van-nav-bar",{attrs:{title:"规则管理","left-arrow":""},on:{"click-left":n.goBack}}),n._v(" "),i("div",{staticClass:"message-detail-view"},[i("div",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),n._l(n.content.split(/\n|\r\n/),function(t,e){return i("div",{key:e,staticClass:"content",staticStyle:{"line-height":"1.8"}},[n._v(n._s(t))])})],2)],1)},[],!1,null,"564ca6da",null);e.default=o.exports}}]);