(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-46182557"],{"0871":function(t,e,n){"use strict";var i=n("3653");n.n(i).a},"0a3c":function(t,e,n){"use strict";n.r(e);var i,s=n("bd86"),a=(n("e7e5"),n("d399")),o=(n("e17f"),n("2241")),c=(n("414a"),n("7a82")),r=(n("66b9"),n("b650")),l=(n("7f7f"),n("5246"),n("6b41")),u=n("f8b7"),d={name:"grab",components:(i={},Object(s.a)(i,l.a.name,l.a),Object(s.a)(i,r.a.name,r.a),Object(s.a)(i,c.a.name,c.a),Object(s.a)(i,o.a.Component.name,o.a.Component),Object(s.a)(i,a.a.name,a.a),i),data:function(){return{showMask:!1,time:5e3,show:!1,skuShow:!1,i:1,grabInfo:{},randomTimes:0,skuDetail:{},skuSuccessShow:!1,buttonDis:!1}},mounted:function(){this._orderStatistics()},methods:{random:function(t,e){return Math.floor(Math.random()*(e-t))+t},_orderStatistics:function(){var e=this;Object(u.d)().then(function(t){console.log("res: ",t),t.success&&(e.grabInfo=t.data,e.randomTimes=e.random(t.data.randomTimes,t.data.randomTimesLimit+1))})},confirm:function(){var e=this;console.log("confirm"),this.buttonDis||(this.buttonDis=!0,Object(u.b)(this.skuDetail.id).then(function(t){console.log("confirmOrderMaster: ",t),e.buttonDis=!1,200===t.code?(e.skuDetail.backPrice=t.data.backPrice,e.skuDetail.productPrice=t.data.productPrice,e.skuSuccessShow=!0,e._orderStatistics()):a.a.fail(t.message),e.skuShow=!1}).catch(function(){e.buttonDis=!1}))},startGrab:function(){console.log("startGrab"),this.i=1,this.show=!0,this.showMask=!0;try{this.$refs.countDown.reset()}catch(t){}},countDownFinish:function(){var e=this;this.showMask=!1,this.i<this.randomTimes?setTimeout(function(){e.i+=1,e.$refs.countDown.reset()},500):(this.show=!1,Object(u.a)().then(function(t){console.log("res: ",t),200===t.code?(e.skuShow=!0,e.skuDetail=t.data):a.a.fail(t.message),e.randomTimes=e.random(e.grabInfo.randomTimes,e.grabInfo.randomTimesLimit+1)}).catch(function(){a.a.fail("抢单失败")}))},stopGrab:function(){console.log("stopGrab"),this.$refs.countDown.pause(),this.show=!1,this.showMask=!1}},beforeRouteLeave:function(t,e,n){console.log("route"),this.show&&this.showMask||n()}},f=(n("0871"),n("c196"),n("2877")),h=Object(f.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100vh",background:"#f5f5f5"}},[n("van-nav-bar",[n("div",{staticClass:"header-left",attrs:{slot:"left"},slot:"left"},[n("span",{staticClass:"header-name"},[e._v("抢单")])])]),e._v(" "),n("div",{staticClass:"grab-view"},[n("p",[e._v("\n      "+e._s(e.grabInfo.profitPoint)+"%\n      "),n("span",[e._v("佣金")])]),e._v(" "),n("div",{staticClass:"btn-group"},[n("van-button",{staticClass:"btn-grab-item btn-grab-item-red",attrs:{type:"default"},nativeOn:{click:function(t){return e.startGrab(t)}}},[e._v("开始抢单")]),e._v(" "),n("van-button",{staticClass:"btn-grab-item",attrs:{type:"default"},nativeOn:{click:function(t){return e.stopGrab(t)}}},[e._v("停止抢单")])],1)]),e._v(" "),n("div",{staticClass:"grab-info"},[n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("今日佣金")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-red"},[e._v("\n        "+e._s(e.grabInfo.backPrice)+"\n        "),n("span",[e._v("元")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("下级返佣")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-red"},[e._v("\n        "+e._s(e.grabInfo.subBackAmount)+"\n        "),n("span",[e._v("元")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("今日单数")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-orn"},[e._v("\n        "+e._s(e.grabInfo.count)+"\n        "),n("span",[e._v("单")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("冻结单数")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-orn"},[e._v("\n        "+e._s(e.grabInfo.freezeCount)+"\n        "),n("span",[e._v("单")])])]),e._v(" "),n("div",{staticClass:"grab-info-item"},[n("div",{staticClass:"grab-info-title"},[e._v("冻结金额")]),e._v(" "),n("div",{staticClass:"grab-info-num grab-info-num-blue"},[e._v("\n        "+e._s(e.grabInfo.freezePrice)+"\n        "),n("span",[e._v("元")])])])]),e._v(" "),n("van-dialog",{staticClass:"count-down-dialog",attrs:{width:"150px",overlay:!1,"show-cancel-button":!1,"show-confirm-button":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-count-down",{ref:"countDown",attrs:{time:e.time,"auto-start":!0},on:{finish:e.countDownFinish},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"count-down-seconds"},[e._v(e._s(t.seconds))])]}}])})],1),e._v(" "),n("van-dialog",{staticClass:"sku-dialog",attrs:{"show-cancel-button":!1,"show-confirm-button":!1},model:{value:e.skuShow,callback:function(t){e.skuShow=t},expression:"skuShow"}},[n("div",{staticClass:"sku-detail"},[n("img",{staticClass:"sku-detail-avatar",attrs:{src:e.$baseUrl+e.skuDetail.productImg,alt:""}}),e._v(" "),n("div",{staticClass:"sku-detail-info"},[n("div",{staticClass:"sku-detail-name"},[e._v(e._s(e.skuDetail.productName))]),e._v(" "),n("div",{staticClass:"sku-detail-price"},[e._v("¥"+e._s(e.skuDetail.productPrice))])])]),e._v(" "),n("div",{staticClass:"sku-btn-group"},[n("van-button",{staticClass:"sku-btn-item",attrs:{plain:"",hairline:"",type:"default"},nativeOn:{click:function(t){e.skuShow=!1,e.skuDetail={},e._orderStatistics()}}},[e._v("取消")]),e._v(" "),n("van-button",{staticClass:"sku-btn-item",attrs:{type:"danger"},nativeOn:{click:function(t){return e.confirm(t)}}},[e._v("确定")])],1)]),e._v(" "),n("van-dialog",{staticClass:"sku-dialog",attrs:{"show-cancel-button":!1,"show-confirm-button":!1,closeOnClickOverlay:!1},model:{value:e.skuSuccessShow,callback:function(t){e.skuSuccessShow=t},expression:"skuSuccessShow"}},[n("div",{staticClass:"sku-success-detail"},[n("div",{staticClass:"title"},[e._v("抢单成功")]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v("商品价值：¥"+e._s(e.skuDetail.productPrice))]),e._v(" "),n("p",[e._v("返利：¥"+e._s(e.skuDetail.backPrice))])])]),e._v(" "),n("div",{staticClass:"sku-btn-group"},[n("van-button",{staticClass:"sku-btn-item",staticStyle:{width:"100%"},attrs:{hairline:"",type:"default"},nativeOn:{click:function(t){e.skuSuccessShow=!1}}},[e._v("确定")])],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMask,expression:"showMask"}],staticClass:"mask"})],1)},[],!1,null,"2235cbae",null);e.default=h.exports},2241:function(t,e,n){"use strict";var s,a=n("c31d"),o=n("2b0e"),i=n("d282"),l=n("ea8e"),c=n("b1d2"),r=n("6605"),u=n("b650"),d=Object(i.a)("dialog"),f=d[0],h=d[1],m=d[2],v=f({mixins:[Object(r.a)()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(e){var n=this;this.$emit(e),this.value&&(this.beforeClose?(this.loading[e]=!0,this.beforeClose(e,function(t){!1!==t&&n.loading[e]&&n.onClose(e),n.loading.confirm=!1,n.loading.cancel=!1})):this.onClose(e))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[c.f,h("footer",{buttons:i})]},[this.showCancelButton&&n(u.a,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||m("cancel")},class:h("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(u.a,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||m("confirm")},class:[h("confirm"),((t={})[c.d]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(t){var e,n=t;if(this.shouldRender){var i=this.message,s=this.messageAlign,a=this.slots(),o=this.slots("title")||this.title,c=o&&n("div",{class:h("header",{isolated:!i&&!a})},[o]),r=(a||i)&&n("div",{class:h("content")},[a||n("div",{domProps:{innerHTML:i},class:h("message",((e={"has-title":o})[s]=s,e))})]);return n("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[n("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||i},class:[h(),this.className],style:{width:Object(l.a)(this.width)}},[c,r,this.genButtons()])])}}}),b=n("a142");function g(i){return b.e?Promise.resolve():new Promise(function(t,e){var n;s&&(n=s.$el,document.body.contains(n))||(s&&s.$destroy(),(s=new(o.a.extend(v))({el:document.createElement("div"),propsData:{lazyRender:!1}})).$on("input",function(t){s.value=t})),Object(a.a)(s,g.currentOptions,i,{resolve:t,reject:e})})}g.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){s["confirm"===t?"resolve":"reject"](t)}},(g.alert=g).confirm=function(t){return g(Object(a.a)({showCancelButton:!0},t))},g.close=function(){s&&(s.value=!1)},g.setDefaultOptions=function(t){Object(a.a)(g.currentOptions,t)},g.resetDefaultOptions=function(){g.currentOptions=Object(a.a)({},g.defaultOptions)},g.resetDefaultOptions(),g.install=function(){o.a.use(v)},g.Component=v,o.a.prototype.$dialog=g;e.a=g},"2fcb":function(t,e,n){},3653:function(t,e,n){},"40db":function(t,e,n){},"414a":function(t,e,n){"use strict";n("68ef"),n("40db")},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("8a0b")},"6b41":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),s=n("d282"),o=n("a142"),c=n("ba31"),r=n("b1d2"),l=n("ad06"),u=Object(s.a)("nav-bar"),d=u[0],f=u[1];function h(t,e,n,i){var s;return t("div",a()([{style:{zIndex:e.zIndex},class:[f({fixed:e.fixed}),((s={})[r.c]=e.border,s)]},Object(c.b)(i)]),[t("div",{class:f("left"),on:{click:i.listeners["click-left"]||o.f}},[n.left?n.left():[e.leftArrow&&t(l.a,{class:f("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:f("text")},[e.leftText])]]),t("div",{class:[f("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:f("right"),on:{click:i.listeners["click-right"]||o.f}},[n.right?n.right():e.rightText?t("span",{class:f("text")},[e.rightText]):void 0])])}h.props={title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0}},e.a=d(h)},"70e4":function(t,e,n){},"7a82":function(t,e,n){"use strict";var i=n("d282"),s=n("4598"),r=n("68ed");var a=Object(i.a)("count-down"),o=a[0],c=a[1];e.a=o({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return t=this.remain,{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3),milliseconds:Math.floor(t%1e3)};var t},formattedTime:function(){return function(t,e){var n=e.days,i=e.hours,s=e.minutes,a=e.seconds,o=e.milliseconds;if(-1===t.indexOf("DD")?i+=24*n:t=t.replace("DD",Object(r.b)(n)),-1===t.indexOf("HH")?s+=60*i:t=t.replace("HH",Object(r.b)(i)),-1===t.indexOf("mm")?a+=60*s:t=t.replace("mm",Object(r.b)(s)),-1===t.indexOf("ss")?o+=1e3*a:t=t.replace("ss",Object(r.b)(a)),-1!==t.indexOf("S")){var c=Object(r.b)(o,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",c):-1!==t.indexOf("SS")?t.replace("SS",c.slice(0,2)):t.replace("S",c.charAt(0))}return t}(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(s.a)(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.rafId=Object(s.c)(function(){t.counting&&(t.setRemain(t.getRemain()),0<t.remain&&t.microTick())})},macroTick:function(){var i=this;this.rafId=Object(s.c)(function(){if(i.counting){var t,e,n=i.getRemain();t=n,e=i.remain,Math.floor(t/1e3)===Math.floor(e/1e3)&&0!==n||i.setRemain(n),0<i.remain&&i.macroTick()}})},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(t){return t("div",{class:c()},[this.slots("default",this.timeData)||this.formattedTime])}})},"8a0b":function(t,e,n){},c196:function(t,e,n){"use strict";var i=n("70e4");n.n(i).a},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb")},f8b7:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return r});var i=n("b775");function s(t){return Object(i.a)({url:"/orderMaster",data:t,method:"post"})}function a(t){return Object(i.a)({url:"/orderMaster/confirm",data:{id:t},method:"put"})}function o(t){return Object(i.a)({url:"/orderMaster/unfreeze",data:{id:t},method:"put"})}function c(t){return Object(i.a)({url:"/orderMaster/page",params:t,method:"get"})}function r(t){return Object(i.a)({url:"/orderMaster/statistics",params:t,method:"get"})}}}]);