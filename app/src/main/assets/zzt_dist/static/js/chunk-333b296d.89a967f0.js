(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-333b296d"],{2691:function(t,a,e){"use strict";var i=e("53f6");e.n(i).a},"39df":function(t,a,e){t.exports=e.p+"static/img/user-avatar.5ed8965a.png"},"53f6":function(t,a,e){},"5c25":function(t,a,e){t.exports=e.p+"static/img/no-data.85975d99.png"},"876d":function(t,a,n){"use strict";n.r(a);var e,i=n("bd86"),s=(n("414a"),n("7a82")),l=(n("66b9"),n("b650")),c=(n("e17f"),n("2241")),o=(n("bda7"),n("5e46")),u=(n("da3c"),n("0b33")),r=(n("7f7f"),n("5246"),n("6b41")),m=n("a4d0"),v={name:"wallet-detail",components:(e={},Object(i.a)(e,r.a.name,r.a),Object(i.a)(e,u.a.name,u.a),Object(i.a)(e,o.a.name,o.a),Object(i.a)(e,c.a.Component.name,c.a.Component),Object(i.a)(e,l.a.name,l.a),Object(i.a)(e,s.a.name,s.a),e),computed:{style:function(){return{width:"80px"}}},data:function(){return{time:108e6,thowFailShow:!1,thowSuccessShow:!1,skuShow:!1,skuSuccessShow:!1,levelList:[],activeName:1,name:[{title:"一级",value:1},{title:"二级",value:2},{title:"三级",value:3}],detailData:[],pageDate:{total:null,pageSize:99,pageNum:1}}},watch:{activeName:function(t){console.log("val: ",t),this._myLevelList(t)}},mounted:function(){this._myLevelList()},methods:{_myLevelList:function(t){var n=this;Object(m.a)({level:t||this.activeName,pageSize:this.pageDate.pageSize,pageNum:this.pageDate.pageNum}).then(function(t){console.log("res",t);var a=t.data,e=a.list,i=a.total;n.levelList=e,n.pageDate.total=i})},goBack:function(){this.$router.back()},thawSku:function(){this.thowFailShow=!0},grabSku:function(){this.skuShow=!0}}},d=(n("2691"),n("2877")),p=Object(d.a)(v,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100vh",background:"#fff",position:"relative"}},[i("van-nav-bar",{attrs:{title:"我的下级","left-arrow":""},on:{"click-left":e.goBack}}),e._v(" "),i("van-tabs",{staticClass:"waller-content",staticStyle:{margin:"7px 0 0"},attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.name,function(t,a){return i("van-tab",{key:a,staticStyle:{"margin-top":"24px"},attrs:{title:t.title,"title-style":e.style,name:t.value}},[0<e.levelList.length?i("ul",{staticClass:"distribution-list"},e._l(e.levelList,function(t,a){return i("li",{key:a,staticClass:"distribution-item"},[i("img",{staticClass:"distribution-img",attrs:{src:n("39df"),alt:""}}),e._v(" "),i("div",{staticClass:"distribution-content"},[e._v(e._s(t.userName))])])}),0):i("div",{staticClass:"no-data"},[i("img",{staticClass:"no-data-img",attrs:{src:n("5c25"),alt:""}}),e._v(" "),i("p",{staticClass:"no-data-text"},[e._v("暂时还没有数据")])])])}),1)],1)},[],!1,null,"56dc20e5",null);a.default=p.exports},a4d0:function(t,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s});var i=e("b775");function n(t){return Object(i.a)({url:"/user/level/page",params:t,method:"get"})}function s(t){return Object(i.a)({url:"/userWalletDetail/page",params:t,method:"get"})}}}]);