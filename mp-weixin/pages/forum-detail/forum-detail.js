(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-detail/forum-detail"],{"165a":function(t,n,e){"use strict";e.r(n);var r=e("a010"),a=e("8e06");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("7166");var o,i=e("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"6a1aab54",null,!1,r["a"],o);n["default"]=c.exports},5737:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,o){try{var i=t[u](o),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)}))}}var i=function(){e.e("components/forum-reply/forum-reply").then(function(){return resolve(e("0947"))}.bind(null,e)).catch(e.oe)},c={components:{userReply:i},data:function(){return{commentData:[],forum:{},id:""}},onLoad:function(){var t=o(r.default.mark((function t(n){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.forumDetail(n.id);case 3:e=t.sent,this.commentData=e.data.childs,this.forum=e.data,console.log(this.commentData);case 7:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var t=o(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.forumDetail(this.id);case 2:n=t.sent,this.commentData=n.data.childs,this.forum=n.data;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};n.default=c},7166:function(t,n,e){"use strict";var r=e("c705"),a=e.n(r);a.a},"8e06":function(t,n,e){"use strict";e.r(n);var r=e("5737"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},a010:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))},c705:function(t,n,e){},f65e:function(t,n,e){"use strict";(function(t){e("8a9e"),e("921b");r(e("66fd"));var n=r(e("165a"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f65e","common/runtime","common/vendor"]]]);