(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ab03b9da"],{"0a3c":function(t,e,n){"use strict";n.r(e);var i,a=n("289c"),s=(n("a777"),n("aa15")),o=(n("9668"),n("6270")),c=(n("937d"),n("bbff")),r=(n("9749"),n("43df")),l=(n("3a23"),n("0d81"),n("5e14")),u=n("f8b7"),f={name:"grab",components:(i={},Object(a.a)(i,l.a.name,l.a),Object(a.a)(i,r.a.name,r.a),Object(a.a)(i,c.a.name,c.a),Object(a.a)(i,o.a.Component.name,o.a.Component),Object(a.a)(i,s.a.name,s.a),i),data:function(){return{showMask:!1,time:5e3,show:!1,skuShow:!1,i:1,grabInfo:{},randomTimes:0,skuDetail:{},skuSuccessShow:!1,buttonDis:!1}},mounted:function(){this._orderStatistics()},methods:{random:function(t,e){return Math.floor(Math.random()*(e-t))+t},_orderStatistics:function(){var e=this;Object(u.d)().then(function(t){console.log("res: ",t),t.success&&(e.grabInfo=t.data,e.randomTimes=e.random(t.data.randomTimes,t.data.randomTimesLimit+1))})},confirm:function(){var e=this;console.log("confirm"),this.buttonDis||(this.buttonDis=!0,Object(u.b)(this.skuDetail.id).then(function(t){console.log("confirmOrderMaster: ",t),e.buttonDis=!1,200===t.code?(e.skuDetail.backPrice=t.data.backPrice,e.skuDetail.productPrice=t.data.productPrice,e.skuSuccessShow=!0):s.a.fail(t.message),e.skuShow=!1}).catch(function(){e.buttonDis=!1}))},startGrab:function(){console.log("startGrab"),this.i=1,this.show=!0,this.showMask=!0;try{this.$refs.countDown.reset()}catch(t){}},countDownFinish:function(){var e=this;this.showMask=!1,this.i<this.randomTimes?setTimeout(function(){e.i+=1,e.$refs.countDown.reset()},500):(this.show=!1,Object(u.a)().then(function(t){console.log("res: ",t),200===t.code?(e.skuShow=!0,e.skuDetail=t.data):s.a.fail(t.message),e.randomTimes=e.random(e.grabInfo.randomTimes,e.grabInfo.randomTimesLimit+1)}))},stopGrab:function(){console.log("stopGrab"),this.$refs.countDown.pause(),this.show=!1,this.showMask=!1}},beforeRouteLeave:function(t,e,n){console.log("route"),this.show&&this.showMask||n()}},d=(n("5e8a"),n("c196"),n("5511")),h=Object(d.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100vh",background:"#f5f5f5"}},[n("van-nav-bar",[n("div",{staticClass:"header-left",attrs:{slot:"left"},slot:"left"},[n("span",{staticClass:"header-name"},[e._v("抢单")])])]),e._v(" "),n("div",{staticClass:"grab-view"},[n("p",[e._v("\n      "+e._s(e.grabInfo.profitPoint)+"%\n      "),n("span",[e._v("佣金")])]),e._v(" "),n("div",{staticClass:"btn-group"},[n("van-button",{staticClass:"btn-grab-item btn-grab-item-red",attrs:{type:"default"},nativeOn:{click:function(t){return e.startGrab(t)}}},[e._v("开始抢单")]),e._v(" "),n("van-button",{staticClass:"btn-grab-item",attrs:{type:"default"},nativeOn:{click:function(t){return e.stopGrab(t)}}},[e._v("停止抢单")])],1)]),e._v(" "),n("div",{staticClass:"grab-info"},[n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("今日佣金")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-red"},[e._v("\n        "+e._s(e.grabInfo.backPrice)+"\n        "),n("span",[e._v("元")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("下级返佣")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-red"},[e._v("\n        "+e._s(e.grabInfo.subBackAmount)+"\n        "),n("span",[e._v("元")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("今日单数")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-orn"},[e._v("\n        "+e._s(e.grabInfo.count)+"\n        "),n("span",[e._v("单")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("冻结单数")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-orn"},[e._v("\n        "+e._s(e.grabInfo.freezeCount)+"\n        "),n("span",[e._v("单")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("冻结金额")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-blue"},[e._v("\n        "+e._s(e.grabInfo.freezePrice)+"\n        "),n("span",[e._v("元")])])])]),e._v(" "),n("van-dialog",{staticClass:"count-down-dialog",attrs:{width:"150px",overlay:!1,"show-cancel-button":!1,"show-confirm-button":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-count-down",{ref:"countDown",attrs:{time:e.time,"auto-start":!0},on:{finish:e.countDownFinish},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"count-down-seconds"},[e._v(e._s(t.seconds))])]}}])})],1),e._v(" "),n("van-dialog",{staticClass:"sku-dialog",attrs:{"show-cancel-button":!1,"show-confirm-button":!1},model:{value:e.skuShow,callback:function(t){e.skuShow=t},expression:"skuShow"}},[n("div",{staticClass:"sku-detail"},[n("img",{staticClass:"sku-detail-avatar",attrs:{src:e.skuDetail.productImg,alt:""}}),e._v(" "),n("div",{staticClass:"sku-detail-info"},[n("div",{staticClass:"sku-detail-name"},[e._v(e._s(e.skuDetail.productName))]),e._v(" "),n("div",{staticClass:"sku-detail-price"},[e._v("¥"+e._s(e.skuDetail.productPrice))])])]),e._v(" "),n("div",{staticClass:"sku-btn-group"},[n("van-button",{staticClass:"sku-btn-item",attrs:{plain:"",hairline:"",type:"default"},nativeOn:{click:function(t){e.skuShow=!1,e.skuDetail={}}}},[e._v("取消")]),e._v(" "),n("van-button",{staticClass:"sku-btn-item",attrs:{type:"danger"},nativeOn:{click:function(t){return e.confirm(t)}}},[e._v("确定")])],1)]),e._v(" "),n("van-dialog",{staticClass:"sku-dialog",attrs:{"show-cancel-button":!1,"show-confirm-button":!1,closeOnClickOverlay:!1},model:{value:e.skuSuccessShow,callback:function(t){e.skuSuccessShow=t},expression:"skuSuccessShow"}},[n("div",{staticClass:"sku-success-detail"},[n("div",{staticClass:"title"},[e._v("抢单成功")]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v("商品价值：¥"+e._s(e.skuDetail.productPrice))]),e._v(" "),n("p",[e._v("返利：¥"+e._s(e.skuDetail.backPrice))])])]),e._v(" "),n("div",{staticClass:"sku-btn-group"},[n("van-button",{staticClass:"sku-btn-item",staticStyle:{width:"100%"},attrs:{hairline:"",type:"default"},nativeOn:{click:function(t){e.skuSuccessShow=!1}}},[e._v("确定")])],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMask,expression:"showMask"}],staticClass:"mask"})],1)},[],!1,null,"cdab6762",null);e.default=h.exports},"0d81":function(t,e,n){"use strict";n("e3e8"),n("902f"),n("3bd2"),n("202b")},"202b":function(t,e,n){},"5e14":function(t,e,n){"use strict";var i=n("23c4"),s=n.n(i),a=n("22a9"),o=n("10c7"),c=n("bf5b"),r=n("a83a"),l=n("9142"),u=Object(a.a)("nav-bar"),f=u[0],d=u[1];function h(t,e,n,i){var a;return t("div",s()([{style:{zIndex:e.zIndex},class:[d({fixed:e.fixed}),((a={})[r.c]=e.border,a)]},Object(c.b)(i)]),[t("div",{class:d("left"),on:{click:i.listeners["click-left"]||o.f}},[n.left?n.left():[e.leftArrow&&t(l.a,{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:d("right"),on:{click:i.listeners["click-right"]||o.f}},[n.right?n.right():e.rightText?t("span",{class:d("text")},[e.rightText]):void 0])])}h.props={title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0}},e.a=f(h)},"5e8a":function(t,e,n){"use strict";var i=n("c959");n.n(i).a},6270:function(t,e,n){"use strict";var a,s=n("f39a"),o=n("0261"),i=n("22a9"),l=n("d4b5"),c=n("a83a"),r=n("47f9"),u=n("43df"),f=Object(i.a)("dialog"),d=f[0],h=f[1],m=f[2],v=d({mixins:[Object(r.a)()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var n=this;this.$emit(e),this.value&&(this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(t){!1!==t&&n.loading[e]&&n.onClose(e),n.loading.confirm=!1,n.loading.cancel=!1})):this.onClose(e))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[c.f,h("footer",{buttons:i})]},[this.showCancelButton&&n(u.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||m("cancel")},class:h("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(u.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||m("confirm")},class:[h("confirm"),((t={})[c.d]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(t){var e,n=t;if(this.shouldRender){var i=this.message,a=this.messageAlign,s=this.slots(),o=this.slots("title")||this.title,c=o&&n("div",{class:h("header",{isolated:!i&&!s})},[o]),r=(s||i)&&n("div",{class:h("content")},[s||n("div",{domProps:{innerHTML:i},class:h("message",((e={"has-title":o})[a]=a,e))})]);return n("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[n("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||i},class:[h(),this.className],style:{width:Object(l.a)(this.width)}},[c,r,this.genButtons()])])}}}),b=n("10c7");function g(i){return b.e?Promise.resolve():new Promise(function(t,e){var n;a&&(n=a.$el,document.body.contains(n))||(a&&a.$destroy(),(a=new(o.a.extend(v))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){a.value=t})),Object(s.a)(a,g.currentOptions,i,{resolve:t,reject:e})})}g.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){a["confirm"===t?"resolve":"reject"](t)}},(g.alert=g).confirm=function(t){return g(Object(s.a)({showCancelButton:!0},t))},g.close=function(){a&&(a.value=!1)},g.setDefaultOptions=function(t){Object(s.a)(g.currentOptions,t)},(g.resetDefaultOptions=function(){g.currentOptions=Object(s.a)({},g.defaultOptions)})(),g.install=function(){o.a.use(v)},g.Component=v,o.a.prototype.$dialog=g;e.a=g},"937d":function(t,e,n){"use strict";n("e3e8"),n("ea88")},9668:function(t,e,n){"use strict";n("e3e8"),n("3f9b"),n("902f"),n("3bd2"),n("c890"),n("fc33"),n("44c4"),n("9e18")},"9e18":function(t,e,n){},bbff:function(t,e,n){"use strict";var i=n("22a9"),a=n("8910"),r=n("6fa3");var s=Object(i.a)("count-down"),o=s[0],c=s[1];e.a=o({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return t=this.remain,{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3),milliseconds:Math.floor(t%1e3)};var t},formattedTime:function(){return function(t,e){var n=e.days,i=e.hours,a=e.minutes,s=e.seconds,o=e.milliseconds;if(-1===t.indexOf("DD")?i+=24*n:t=t.replace("DD",Object(r.b)(n)),-1===t.indexOf("HH")?a+=60*i:t=t.replace("HH",Object(r.b)(i)),-1===t.indexOf("mm")?s+=60*a:t=t.replace("mm",Object(r.b)(a)),-1===t.indexOf("ss")?o+=1e3*s:t=t.replace("ss",Object(r.b)(s)),-1!==t.indexOf("S")){var c=Object(r.b)(o,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",c):-1!==t.indexOf("SS")?t.replace("SS",c.slice(0,2)):t.replace("S",c.charAt(0))}return t}(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(a.a)(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.rafId=Object(a.c)(function(){t.counting&&(t.setRemain(t.getRemain()),0<t.remain&&t.microTick())})},macroTick:function(){var i=this;this.rafId=Object(a.c)(function(){if(i.counting){var t,e,n=i.getRemain();t=n,e=i.remain,Math.floor(t/1e3)===Math.floor(e/1e3)&&0!==n||i.setRemain(n),0<i.remain&&i.macroTick()}})},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(t){return t("div",{class:c()},[this.slots("default",this.timeData)||this.formattedTime])}})},c196:function(t,e,n){"use strict";var i=n("f20d");n.n(i).a},c959:function(t,e,n){},ea88:function(t,e,n){},f20d:function(t,e,n){},f8b7:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return r});var i=n("b775");function a(t){return Object(i.a)({url:"/orderMaster",data:t,method:"post"})}function s(t){return Object(i.a)({url:"/orderMaster/confirm",data:{id:t},method:"put"})}function o(t){return Object(i.a)({url:"/orderMaster/unfreeze",data:{id:t},method:"put"})}function c(t){return Object(i.a)({url:"/orderMaster/page",params:t,method:"get"})}function r(t){return Object(i.a)({url:"/orderMaster/statistics",params:t,method:"get"})}}}]);