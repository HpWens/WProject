(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-49e04022"],{"070e":function(t,e,n){"use strict";n.r(e);var i=n("bd86"),a=(n("7f7f"),n("5246"),n("6b41")),s=n("3191"),c={name:"change-password",components:Object(i.a)({},a.a.name,a.a),data:function(){return{user:{userId:"78161",userName:"asdasd16"},content:"",title:""}},mounted:function(){this._sysHomeConfig()},methods:{_sysHomeConfig:function(){var e=this;Object(s.a)({type:"INDEX_ANSWER"}).then(function(t){e.content=t.data.content||"",e.title=t.data.title||"",console.log("res: ",t)})},next:function(){},goBack:function(){this.$router.back()}}},r=(n("86db"),n("bad1"),n("2877")),o=Object(r.a)(c,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticStyle:{height:"100vh",background:"#fff",position:"relative"}},[i("van-nav-bar",{attrs:{title:"问题答疑","left-arrow":""},on:{"click-left":n.goBack}}),n._v(" "),i("div",{staticClass:"message-detail-view"},[i("div",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),i("div",{staticClass:"pubtime"},[n._v("2019-10-28 17:15")]),n._v(" "),n._l(n.content.split(/\n|\r\n/),function(t,e){return i("div",{key:e,staticClass:"content",staticStyle:{"line-height":"1.8"}},[n._v("\n      "+n._s(t)+"\n      ")])})],2)],1)},[],!1,null,"711cc7e2",null);e.default=o.exports},3191:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("b775");function a(t){return Object(i.a)({url:"/sysConfig/index",params:t,method:"get"})}},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("09fe"),n("3743"),n("8a0b")},"6b41":function(t,e,n){"use strict";var i=n("2638"),s=n.n(i),a=n("d282"),c=n("a142"),r=n("ba31"),o=n("b1d2"),l=n("ad06"),f=Object(a.a)("nav-bar"),u=f[0],d=f[1];function v(t,e,n,i){var a;return t("div",s()([{class:[d({fixed:e.fixed}),((a={})[o.c]=e.border,a)],style:{zIndex:e.zIndex}},Object(r.b)(i)]),[t("div",{class:d("left"),on:{click:i.listeners["click-left"]||c.e}},[n.left?n.left():[e.leftArrow&&t(l.a,{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:d("right"),on:{click:i.listeners["click-right"]||c.e}},[n.right?n.right():e.rightText&&t("span",{class:d("text")},[e.rightText])])])}v.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e.a=u(v)},7503:function(t,e,n){},"86db":function(t,e,n){"use strict";var i=n("7503");n.n(i).a},"8a0b":function(t,e,n){},"979c":function(t,e,n){},bad1:function(t,e,n){"use strict";var i=n("979c");n.n(i).a}}]);