(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cc1e8306"],{"0653":function(t,e,i){"use strict";i("68ef"),i("5c56")},1146:function(t,e,i){},"1ba6":function(t,e,i){},"32d7":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var s=i("a142");function a(){return!s.e&&/android/.test(navigator.userAgent.toLowerCase())}function n(){return!s.e&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"34e9":function(t,e,i){"use strict";var s=i("2638"),o=i.n(s),a=i("d282"),r=i("ba31"),c=i("b1d2"),n=Object(a.a)("cell-group"),l=n[0],u=n[1];function h(t,e,i,s){var a,n=t("div",o()([{class:[u(),((a={})[c.g]=e.border,a)]},Object(r.b)(s,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",[t("div",{class:u("title")},[i.title?i.title():e.title]),n]):n}h.props={title:String,border:{type:Boolean,default:!0}},e.a=l(h)},"55bf":function(t,e,i){},"565f":function(t,e,i){"use strict";var s=i("2638"),n=i.n(s),o=i("c31d");var r=i("32d7"),a=i("1325"),c=i("a8c1"),l=Object(r.b)();var u=i("d282"),h=i("a142"),d=i("ea8e"),f=i("ad06"),p=i("7744"),m=i("dfaf"),b=Object(u.a)("field"),g=b[0],v=b[1];e.a=g({inheritAttrs:!1,props:Object(o.a)({},m.a,{error:Boolean,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(h.b)(this.value)&&!this.readonly},listeners:function(){var t=Object(o.a)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(d.a)(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t.value,i=this.maxlength;if(Object(h.b)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),"number"===this.type||"digit"===this.type){var s=e;(e=function(t,e){if(e){var i=t.indexOf(".");-1<i&&(t=t.slice(0,i+1)+t.slice(i).replace(/\./g,""))}var s=e?/[^0-9.]/g:/\D/g;return t.replace(s,"")}(e,"number"===this.type))!==s&&(t.value=e)}if(this.formatter){var a=e;(e=this.formatter(e))!==a&&(t.value=e)}return e}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),l&&Object(c.g)(Object(c.b)())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(a.c)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(h.d)(this.autosize)){var i=this.autosize,s=i.maxHeight,a=i.minHeight;s&&(e=Math.min(e,s)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input");if(i)return t("div",{class:v("control",this.inputAlign)},[i]);var s={ref:"input",class:v("control",this.inputAlign),domProps:{value:this.value},attrs:Object(o.a)({},this.$attrs,{disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",n()([{},s]));var a=e;return"number"===e&&(a="text"),"digit"===e&&(Object(r.b)()?(a="number",s.attrs.pattern="\\d*"):a="tel"),t("input",n()([{attrs:{type:a}},s]))},genLeftIcon:function(){var t=this.$createElement;if(this.slots("left-icon")||this.leftIcon)return t("div",{class:v("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(f.a,{attrs:{name:this.leftIcon}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots;if(e("right-icon")||this.rightIcon)return t("div",{class:v("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(f.a,{attrs:{name:this.rightIcon}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:v("word-limit")},[t("span",{class:v("word-num",{full:i})},[e]),"/",this.maxlength])}}},render:function(t){var e,i=t,s=this.slots,a=this.labelAlign,n={icon:this.genLeftIcon};return s("label")&&(n.title=function(){return s("label")}),i(p.a,{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[v("label",a),this.labelClass],arrowDirection:this.arrowDirection},class:v(((e={error:this.error})["label-"+a]=a,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:n,on:{click:this.onClick}},[i("div",{class:v("body")},[this.genInput(),this.showClear&&i(f.a,{attrs:{name:"clear"},class:v("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),s("button")&&i("div",{class:v("button")},[s("button")])]),this.genWordLimit(),this.errorMessage&&i("div",{class:v("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"5c56":function(t,e,i){},a874:function(t,e,i){"use strict";var s=i("55bf");i.n(s).a},bd26:function(t,e,s){"use strict";s.r(e);s("34ef");var i,a=s("bd86"),n=(s("e7e5"),s("d399")),o=(s("0653"),s("34e9")),r=(s("7f7f"),s("be7f"),s("565f")),c=s("7ded"),l=s("ed08"),u={data:function(){return{successShow:!1,user:{},form:{username:"",password:"",checkPassword:"",captcha:""},startVal:0,endVal:0,contentArr:[],height:25,modalShow:!1,loading:!1,imageSrc:"",captchaid:""}},components:(i={},Object(a.a)(i,r.a.name,r.a),Object(a.a)(i,o.a.name,o.a),Object(a.a)(i,n.a.name,n.a),i),computed:{parentId:function(){return this.$route.query.parentId||""}},mounted:function(){this._sendCaptcha()},methods:{_sendCaptcha:function(){var e=this;Object(c.b)().then(function(t){console.log("res: ",t),e.imageSrc="data:image/png;base64,"+btoa(new Uint8Array(t.imageSrc).reduce(function(t,e){return t+String.fromCharCode(e)},"")),e.captchaid=t.captchaid})},downloadApp:function(){Object(l.c)()?this.modalShow=!0:(console.log("跳转到蒲公英下载地址"),Object(l.b)()&&(window.location="https://ios.ntlyu.net/app.php/Mjg3"))},random:function(t,e){return Math.floor(Math.random()*(e-t))+t},submit:function(){var e=this;return console.log("reg: ",/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/),console.log("数据提交"),""===this.form.username?(Object(n.a)("请填写用户名"),!1):""===this.form.password?(Object(n.a)("请填写密码"),!1):""===this.form.checkPassword?(Object(n.a)("请再次输入密码"),!1):""===this.form.captcha?(Object(n.a)("请输入验证码"),!1):this.form.password!==this.form.checkPassword?(Object(n.a)("两次输入的密码不一致，请您检查一下密码"),!1):void(this.loading||(this.loading=!0,console.log("数据提交2",this.parentId,this.form),Object(c.d)({parentId:this.parentId,userName:this.form.username,password:this.form.password,captchaId:this.captchaid,captcha:this.form.captcha}).then(function(t){console.log("注册成功: ",t),t.success?(e.user=t,n.a.success("注册成功"),console.log(1235765465),window.location.href="http://www.jisuhui7.com/#/download"):(n.a.fail(t.message),e.loading=!1)}).catch(function(t){console.log("err",t),e.loading=!1})))}}},h=(s("f2c2"),s("a874"),s("2877")),d=Object(h.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"invite-view",class:{"success-invite":e.successShow}},[e.successShow?i("div",{staticClass:"invite-form-view invite-form-view-success"},[i("p",{staticClass:"title"},[e._v("注册成功")]),e._v(" "),i("div",{staticClass:"download-app-icon"}),e._v(" "),i("div",{staticClass:"download-app-btn",on:{click:e.downloadApp}},[e._v("下载APP")])]):i("div",{staticClass:"invite-form-view"},[i("div",{staticClass:"invite-form"},[i("van-cell-group",{staticStyle:{"margin-left":"-10px"}},[i("van-field",{staticClass:"form-input",attrs:{placeholder:"请输入您的用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),i("van-field",{staticClass:"form-input",attrs:{type:"password",placeholder:"请输入您的密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),i("van-field",{staticClass:"form-input",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.form.checkPassword,callback:function(t){e.$set(e.form,"checkPassword",t)},expression:"form.checkPassword"}}),e._v(" "),i("van-field",{staticClass:"form-input",attrs:{placeholder:"请输入验证码"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}}),e._v(" "),i("div",{staticClass:"refresh-code"},[i("span",[e._v("点击刷新验证码")]),e._v(" "),i("img",{staticClass:"captcha",attrs:{src:e.imageSrc,alt:""},on:{click:function(t){return e._sendCaptcha()}}})])],1)],1),e._v(" "),i("div",{staticClass:"invite-submit",on:{click:e.submit}},[e._v("注册")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.modalShow,expression:"modalShow"}],staticClass:"wrapper"},[i("div",{staticClass:"wrapper-text"},[e._v("点击右上角“···” 在浏览器中打开")]),e._v(" "),i("img",{attrs:{src:s("cf09"),alt:""}})])])},[],!1,null,"c4dcceae",null);e.default=d.exports},be7f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146")},cf09:function(t,e){t.exports="data:image/png;base64,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"},f2c2:function(t,e,i){"use strict";var s=i("1ba6");i.n(s).a}}]);