webpackJsonp([5],{228:function(t,s,a){function e(t){a(249)}var i=a(1)(a(251),a(252),e,"data-v-bb466924",null);t.exports=i.exports},249:function(t,s,a){var e=a(250);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(6)("12138b8e",e,!0)},250:function(t,s,a){s=t.exports=a(5)(void 0),s.push([t.i,".title[data-v-bb466924]{margin-top:0;margin-bottom:35px;margin-left:15px}",""])},251:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(4),i=a(10);s.default={data:function(){return{store:e.a,stats:{users:!1,posts:!1,messages:!1,files:!1},analytics:this.$analytics}},mounted:function(){this.analytics.bind("client-route-navigate",function(){})},beforeMount:function(){i.a.get("/dashboard/stats").then(function(t){this.stats=t.data}.bind(this)).catch(function(t){})}}},252:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("h1",{staticClass:"title"},[t._v("Welcome "+t._s(t.store.user.get("name")))]),t._v(" "),a("dashboard-stat",{attrs:{data:t.stats.users,link:"/dashboard/users",title:"Users",icon:"users",size:"6"}}),t._v(" "),a("dashboard-stat",{attrs:{data:t.stats.posts,link:"/dashboard/posts",title:"Posts",icon:"newspaper-o",size:"6"}}),t._v(" "),a("dashboard-stat",{attrs:{data:t.stats.messages,link:"/dashboard/messages",title:"Emails",icon:"envelope",size:"4"}}),t._v(" "),a("dashboard-stat",{attrs:{data:t.stats.files,link:"/dashboard/files",title:"Files",icon:"file",size:"4"}}),t._v(" "),a("dashboard-stat",{attrs:{data:t.analytics.members.count,link:"/dashboard/analytics",title:"Analytics",icon:"line-chart",size:"4"}})],1)},staticRenderFns:[]}}});