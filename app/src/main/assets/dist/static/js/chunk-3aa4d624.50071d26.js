(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3aa4d624"],{"1d41":function(e,t,a){},"3dde":function(e,t,a){},88840:function(e,t,a){"use strict";var n=a("1d41");a.n(n).a},c83b:function(e,t,a){"use strict";a.r(t);a("8e6e"),a("ac6a"),a("456d"),a("a481");var n,r=a("bd86"),c=(a("e7e5"),a("d399")),i=(a("be7f"),a("565f")),o=(a("0653"),a("34e9")),s=(a("c194"),a("7744")),u=(a("c3a6"),a("ad06")),l=(a("7f7f"),a("5246"),a("6b41")),d=a("d56f"),v=a("2f62"),p=a("ed08");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}var f={name:"change-password",components:(n={},Object(r.a)(n,l.a.name,l.a),Object(r.a)(n,u.a.name,u.a),Object(r.a)(n,s.a.name,s.a),Object(r.a)(n,o.a.name,o.a),Object(r.a)(n,i.a.name,i.a),Object(r.a)(n,c.a.name,c.a),Object(r.a)(n,"VueQrcode",d.a),n),data:function(){return{form:{bank:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach(function(e){Object(r.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},Object(v.d)({user:function(e){return e.user.user}}),{value:function(){return"http://www.jisuhui7.com/#/taotao-register"},copyLink:function(){return this.user&&this.user.id?this.value+"?parentId=".concat(this.user.id):this.value}}),methods:{downOurPhoto:function(){var e=document.getElementsByClassName("invite-code-view")[0].src.replace("data:image/png;base64,","");console.log("replaceImg: ",e),Object(p.b)()?this.$bridge.callhandler("savePhoto",e,function(e){console.log("data: ",e),c.a.success("保存成功"),console.log("保存成功")}):(window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge.savePhoto(this.copyLink),c.a.success("保存成功"))},goBack:function(){this.$router.back()},onCopy:function(){c.a.success("复制成功")},onError:function(){c.a.success("复制失败")}}},w=(a("88840"),a("d7c8"),a("2877")),O=Object(w.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100vh",background:"#f5f5f5",position:"relative"}},[a("van-nav-bar",{attrs:{title:"邀请好友","left-arrow":""},on:{"click-left":e.goBack}}),e._v(" "),a("div",{staticClass:"invite-view"},[a("VueQrcode",{staticClass:"invite-code-view",attrs:{value:e.copyLink,tag:"img"}}),e._v(" "),a("div",{staticClass:"invite-link"},[a("div",{staticClass:"invite-link-title"},[e._v("邀请链接")]),e._v(" "),a("div",{staticClass:"invite-link-url"},[e._v(e._s(e.value))]),e._v(" "),a("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.copyLink,expression:"copyLink",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"invite-link-btn"},[e._v("复制")])]),e._v(" "),a("div",{staticClass:"invite-save-photo",on:{click:e.downOurPhoto}},[e._v("保存到相册")])],1)],1)},[],!1,null,"558a10be",null);t.default=O.exports},d7c8:function(e,t,a){"use strict";var n=a("3dde");a.n(n).a}}]);