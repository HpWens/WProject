(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-350abda6"],{"2f94":function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"e",function(){return d}),a.d(e,"d",function(){return r}),a.d(e,"c",function(){return u}),a.d(e,"b",function(){return i});var n=a("b775");function s(t){return Object(n.a)({url:"/userAddress",data:t,method:"post"})}function d(t){return Object(n.a)({url:"/userAddress",data:t,method:"put"})}function r(t){return Object(n.a)({url:"/userAddress",params:{id:t},method:"delete"})}function u(t){return Object(n.a)({url:"/userAddress/page",params:t,method:"get"})}function i(t){return Object(n.a)({url:"/userAddress",params:{id:t},method:"get"})}},"62ca":function(t,e,a){"use strict";var n=a("7435");a.n(n).a},"67da":function(t,e,a){"use strict";var n=a("a343");a.n(n).a},7435:function(t,e,a){},a343:function(t,e,a){},d12f:function(t,e,a){"use strict";a.r(e);a("7514");var n,s=a("bd86"),d=(a("acb7"),a("67bb9")),r=(a("e7e5"),a("d399")),u=(a("be7f"),a("565f")),i=(a("0653"),a("34e9")),c=(a("c194"),a("7744")),o=(a("c3a6"),a("ad06")),f=(a("7f7f"),a("5246"),a("6b41")),l=a("2f94"),p={name:"change-password",components:(n={},Object(s.a)(n,f.a.name,f.a),Object(s.a)(n,o.a.name,o.a),Object(s.a)(n,c.a.name,c.a),Object(s.a)(n,i.a.name,i.a),Object(s.a)(n,u.a.name,u.a),Object(s.a)(n,r.a.name,r.a),Object(s.a)(n,d.a.name,d.a),n),data:function(){return{form:{bank:""},chosenAddressId:"",list:[],pageDate:{total:null,pageSize:10,pageNum:1}}},mounted:function(){this._addressList()},methods:{_addressList:function(){var s=this;Object(l.c)({pageNum:this.pageDate.pageNum,pageSize:this.pageDate.pageSize}).then(function(t){var e=t.data,a=e.list,n=e.total;s.pageDate.total=n,s.list=a.map(function(t){return{id:t.id,address:t.address,name:t.name,tel:t.phone,isDefault:1===t.isDefault}}),s.chosenAddressId=s.list.find(function(t){return t.isDefault})?s.list.find(function(t){return t.isDefault}).id:"",console.log("res: ",t)})},goBack:function(){this.$router.back()},onAdd:function(){this.$router.push("/add-address")},onEdit:function(t){this.$router.push({path:"/add-address",query:{id:t.id}})}}},b=(a("67da"),a("62ca"),a("2877")),h=Object(b.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100vh",background:"#f5f5f5",position:"relative"}},[a("van-nav-bar",{attrs:{title:"我的地址","left-arrow":""},on:{"click-left":e.goBack}}),e._v(" "),a("van-address-list",{attrs:{list:e.list,"default-tag-text":"默认"},on:{add:e.onAdd,edit:e.onEdit},model:{value:e.chosenAddressId,callback:function(t){e.chosenAddressId=t},expression:"chosenAddressId"}})],1)},[],!1,null,"74168627",null);e.default=h.exports}}]);