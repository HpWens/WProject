(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2e7dbbc3"],{"1dde":function(t,e,i){"use strict";i("e3e8"),i("3f60")},2967:function(t,e,i){},"2eb4":function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a});var s=i("10c7");function n(){return!s.e&&/android/.test(navigator.userAgent.toLowerCase())}function a(){return!s.e&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"3f60":function(t,e,i){},"50d5":function(t,e,i){"use strict";var s=i("23c4"),a=i.n(s),r=i("f39a");var o=i("2eb4"),n=i("368e"),l=i("b8f0"),c=Object(o.b)();var u=i("22a9"),d=i("10c7"),h=i("d4b5"),f=i("9142"),b=i("a763"),p=i("5abf"),m=Object(u.a)("field"),g=m[0],v=m[1];e.a=g({inheritAttrs:!1,props:Object(r.a)({},p.a,{error:Boolean,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d.b)(this.value)&&!this.readonly},listeners:function(){var t=Object(r.a)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(h.a)(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t.value,i=this.maxlength;if(Object(d.b)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),"number"===this.type||"digit"===this.type){var s=e;(e=function(t,e){if(e){var i=t.indexOf(".");-1<i&&(t=t.slice(0,i+1)+t.slice(i).replace(/\./g,""))}var s=e?/[^0-9.]/g:/\D/g;return t.replace(s,"")}(e,"number"===this.type))!==s&&(t.value=e)}if(this.formatter){var n=e;(e=this.formatter(e))!==n&&(t.value=e)}return e}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),c&&Object(l.g)(Object(l.b)())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(n.c)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d.d)(this.autosize)){var i=this.autosize,s=i.maxHeight,n=i.minHeight;s&&(e=Math.min(e,s)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input");if(i)return t("div",{class:v("control",this.inputAlign)},[i]);var s={ref:"input",class:v("control",this.inputAlign),domProps:{value:this.value},attrs:Object(r.a)({},this.$attrs,{disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",a()([{},s]));var n=e;return"number"===e&&(n="text"),"digit"===e&&(Object(o.b)()?(n="number",s.attrs.pattern="\\d*"):n="tel"),t("input",a()([{attrs:{type:n}},s]))},genLeftIcon:function(){var t=this.$createElement;if(this.slots("left-icon")||this.leftIcon)return t("div",{class:v("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(f.a,{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots;if(e("right-icon")||this.rightIcon)return t("div",{class:v("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(f.a,{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength)return t("div",{class:v("word-limit")},[this.value.length,"/",this.maxlength])}},render:function(t){var e,i=t,s=this.slots,n=this.labelAlign,a={icon:this.genLeftIcon};return s("label")&&(a.title=function(){return s("label")}),i(b.a,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[v("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:v(((e={error:this.error})["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:a,on:{click:this.onClick}},[i("div",{class:v("body")},[this.genInput(),this.showClear&&i(f.a,{attrs:{name:"clear"},class:v("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),s("button")&&i("div",{class:v("button")},[s("button")])]),this.genWordLimit(),this.errorMessage&&i("div",{class:v("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"5abf":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},"95af":function(t,e,i){},9648:function(t,e,i){},a763:function(t,e,i){"use strict";var s=i("f39a"),n=i("23c4"),b=i.n(n),a=i("22a9"),p=i("10c7"),m=i("bf5b"),g=i("4748"),r=i("5abf"),v=i("9142"),o=Object(a.a)("cell"),l=o[0],w=o[1];function c(i,s,n,e){var t,a=s.icon,r=s.size,o=s.title,l=s.label,c=s.value,u=s.isLink,d=n.title||Object(p.b)(o);var h=u||s.clickable,f={clickable:h,center:s.center,required:s.required,borderless:!s.border};return r&&(f[r]=r),i("div",b()([{class:w(f),attrs:{role:h?"button":null,tabindex:h?0:null},on:{click:function(t){Object(m.a)(e,"click",t),Object(g.a)(e)}}},Object(m.b)(e)]),[n.icon?n.icon():a?i(v.a,{class:w("left-icon"),attrs:{name:a}}):void 0,function(){if(d)return i("div",{class:[w("title"),s.titleClass],style:s.titleStyle},[n.title?n.title():i("span",[o]),function(){if(n.label||Object(p.b)(l))return i("div",{class:[w("label"),s.labelClass]},[n.label?n.label():l])}()])}(),function(){if(n.default||Object(p.b)(c))return i("div",{class:[w("value",{alone:!d}),s.valueClass]},[n.default?n.default():i("span",[c])])}(),function(){var t=n["right-icon"];if(t)return t();if(u){var e=s.arrowDirection;return i(v.a,{class:w("right-icon"),attrs:{name:e?"arrow-"+e:"arrow"}})}}(),null===(t=n.extra)||void 0===t?void 0:t.call(n)])}c.props=Object(s.a)({},r.a,{},g.c),e.a=l(c)},a874:function(t,e,i){"use strict";var s=i("9648");i.n(s).a},bd26:function(t,e,s){"use strict";s.r(e);var i,n=s("289c"),a=(s("a777"),s("aa15")),r=(s("1dde"),s("e425")),o=(s("3a23"),s("cf28"),s("50d5")),l=s("7ded"),c=s("ed08"),u={data:function(){return{successShow:!1,user:{},form:{username:"",password:"",checkPassword:""},startVal:0,endVal:0,contentArr:[],height:25,modalShow:!1,loading:!1}},components:(i={},Object(n.a)(i,o.a.name,o.a),Object(n.a)(i,r.a.name,r.a),Object(n.a)(i,a.a.name,a.a),i),computed:{parentId:function(){return this.$route.query.parentId||""}},mounted:function(){},methods:{downloadApp:function(){Object(c.c)()?this.modalShow=!0:(console.log("跳转到蒲公英下载地址"),Object(c.b)()&&(window.location="https://ios.ntlyu.net/app.php/Mjg3"))},random:function(t,e){return Math.floor(Math.random()*(e-t))+t},submit:function(){var e=this;return console.log("reg: ",/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/),console.log("数据提交"),""===this.form.username?(Object(a.a)("请填写用户名"),!1):""===this.form.password?(Object(a.a)("请填写密码"),!1):""===this.form.checkPassword?(Object(a.a)("请再次输入密码"),!1):this.form.password!==this.form.checkPassword?(Object(a.a)("两次输入的密码不一致，请您检查一下密码"),!1):void(this.loading||(this.loading=!0,console.log("数据提交2",this.parentId,this.form),Object(l.c)({parentId:this.parentId,userName:this.form.username,password:this.form.password}).then(function(t){console.log("注册成功: ",t),t.success?(e.user=t,a.a.success("注册成功"),console.log(1235765465),window.location.href="http://www.zztao558.com/#/download"):(a.a.fail(t.message),e.loading=!1)}).catch(function(t){console.log("err",t),e.loading=!1})))}}},d=(s("fd70"),s("a874"),s("5511")),h=Object(d.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"invite-view",class:{"success-invite":e.successShow}},[e.successShow?i("div",{staticClass:"invite-form-view invite-form-view-success"},[i("p",{staticClass:"title"},[e._v("注册成功")]),e._v(" "),i("div",{staticClass:"download-app-icon"}),e._v(" "),i("div",{staticClass:"download-app-btn",on:{click:e.downloadApp}},[e._v("下载APP")])]):i("div",{staticClass:"invite-form-view"},[i("div",{staticClass:"invite-form"},[i("van-cell-group",{staticStyle:{"margin-left":"-10px"}},[i("van-field",{staticClass:"form-input",attrs:{placeholder:"请输入您的用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),i("van-field",{staticClass:"form-input",attrs:{type:"password",placeholder:"请输入您的密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),i("van-field",{staticClass:"form-input",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.form.checkPassword,callback:function(t){e.$set(e.form,"checkPassword",t)},expression:"form.checkPassword"}})],1)],1),e._v(" "),i("div",{staticClass:"invite-submit",on:{click:e.submit}},[e._v("注册")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}],staticClass:"wrapper"},[i("div",{staticClass:"wrapper-text"},[e._v("点击右上角“···” 在浏览器中打开")]),e._v(" "),i("img",{attrs:{src:s("cf09"),alt:""}})])])},[],!1,null,"3aa221f0",null);e.default=h.exports},cf09:function(t,e){t.exports="data:image/png;base64,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"},cf28:function(t,e,i){"use strict";i("e3e8"),i("902f"),i("3bd2"),i("e818"),i("2967")},e425:function(t,e,i){"use strict";var s=i("23c4"),o=i.n(s),n=i("22a9"),l=i("bf5b"),c=i("a83a"),a=Object(n.a)("cell-group"),r=a[0],u=a[1];function d(t,e,i,s){var n,a,r=t("div",o()([{class:[u(),((n={})[c.g]=e.border,n)]},Object(l.b)(s,!0)]),[null===(a=i.default)||void 0===a?void 0:a.call(i)]);return e.title||i.title?t("div",[t("div",{class:u("title")},[i.title?i.title():e.title]),r]):r}d.props={title:String,border:{type:Boolean,default:!0}},e.a=r(d)},e818:function(t,e,i){},fd70:function(t,e,i){"use strict";var s=i("95af");i.n(s).a}}]);