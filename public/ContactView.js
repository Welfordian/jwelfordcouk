webpackJsonp([0],{236:function(t,e,n){var o=n(1)(n(253),n(255),!1,function(t){n(251)},"data-v-08fd71be",null);t.exports=o.exports},251:function(t,e,n){var o=n(252);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(6)("16dd1602",o,!0,{})},252:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".input-group-addon[data-v-08fd71be]{min-width:130px;text-align:right}.input-group[data-v-08fd71be]{margin:8px}.error[data-v-08fd71be]{background:rgba(214,44,26,.77);color:#fff}._fade[data-v-08fd71be]{-webkit-transform:scale(.5);transform:scale(.5);opacity:0;-webkit-transition:all .2s linear;transition:all .2s linear}._fade.in[data-v-08fd71be]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}",""])},253:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(254),s=(n.n(o),n(147)),a=n.n(s),i=n(7),r=n(3),l=n(10);e.default={mounted:function(){i.a.$on("service_worker.reg",function(t){this.sw=t}.bind(this)),$("#offlineModal").on("hidden.bs.modal",function(){this.modalMessage="It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent."}.bind(this))},data:function(){return{lang:r.a,loading:!1,sw:!1,modalMessage:"It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent.",form:{name:"",email:"",subject:"",message:""}}},methods:{handleContactSubmit:function(){l.a.post("/contact",this.form).then(function(t){new a.a({layout:"topRight",theme:"bootstrap-v4",type:"success",timeout:5e3,text:"Thanks, your message has been sent!"}).show(),this.clearForm()}.bind(this)).catch(function(t){if(t.hasOwnProperty("response")&&void 0!=t.response){if(t.response.hasOwnProperty("status"))switch(t.response.status){case 422:this.handleValidationErrors(t.response.data);break;default:console.error("Unknown error: ",t)}}else this.showOfflineModal(),this.queueMessage()}.bind(this))},showOfflineModal:function(){$("#offlineModal").modal("show")},handleValidationErrors:function(){new a.a({layout:"topRight",theme:"bootstrap-v4",type:"error",timeout:5e3,text:"Whoops, looks like you might have missed something."}).show()},requestNotifications:function(){this.modalMessage="Sure thing, I'll just need permission to send you notifications.",Notification.requestPermission().then(function(t){"denied"!==t&&"default"!==t?$("#offlineModal").modal("hide"):this.setNoPermissionText()}.bind(this))},setNoPermissionText:function(){this.modalMessage="Sorry, you didn't give me permission. I won't show you a notification but I'll still try to send your message"},queueMessage:function(){o.open("messages",1,function(t){t.createObjectStore("outbox",{autoIncrement:!0,keyPath:"id"})}).then(function(t){return t.transaction("outbox","readwrite").objectStore("outbox").put(this.form)}.bind(this)).then(function(){this.sw.sync.register("outbox"),this.clearForm()}.bind(this))},clearForm:function(){this.form={name:"",email:"",subject:"",message:""}}}}},254:function(t,e,n){"use strict";!function(){function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,o){var s,a=new Promise(function(a,i){e(s=t[n].apply(t,o)).then(a,i)});return a.request=s,a}function o(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function s(t,e,o,s){s.forEach(function(s){s in o.prototype&&(t.prototype[s]=function(){return n(this[e],s,arguments)})})}function a(t,e,n,o){o.forEach(function(o){o in n.prototype&&(t.prototype[o]=function(){return this[e][o].apply(this[e],arguments)})})}function i(t,e,o,s){s.forEach(function(s){s in o.prototype&&(t.prototype[s]=function(){return t=this[e],(o=n(t,s,arguments)).then(function(t){if(t)return new l(t,o.request)});var t,o})})}function r(t){this._index=t}function l(t,e){this._cursor=t,this._request=e}function c(t){this._store=t}function u(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new u(n)}function p(t){this._db=t}o(r,"_index",["name","keyPath","multiEntry","unique"]),s(r,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),i(r,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var n=this,o=arguments;return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,o),e(n._request).then(function(t){if(t)return new l(t,n._request)})})})}),c.prototype.createIndex=function(){return new r(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new r(this._store.index.apply(this._store,arguments))},o(c,"_store",["name","keyPath","indexNames","autoIncrement"]),s(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),i(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(c,"_store",IDBObjectStore,["deleteIndex"]),u.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},o(u,"_tx",["objectStoreNames","mode"]),a(u,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new u(this._db.transaction.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[c,r].forEach(function(e){e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),o=n[n.length-1],s=this._store||this._index,a=s[t].apply(s,n.slice(0,-1));a.onsuccess=function(){o(a.result)}}})}),[r,c].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,o=[];return new Promise(function(s){n.iterateCursor(t,function(t){t?(o.push(t.value),void 0===e||o.length!=e?t.continue():s(o)):s(o)})})})});var f={open:function(t,e,o){var s=n(indexedDB,"open",[t,e]),a=s.request;return a.onupgradeneeded=function(t){o&&o(new d(a.result,t.oldVersion,a.transaction))},s.then(function(t){return new p(t)})},delete:function(t){return n(indexedDB,"deleteDatabase",[t])}};t.exports=f,t.exports.default=t.exports}()},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t.loading?n("i",{staticClass:"fa fa-refresh fa-spin",staticStyle:{"margin-left":"8px","margin-right":"6px"}}):n("i",{staticClass:"fa fa-envelope",staticStyle:{"margin-left":"8px","margin-right":"6px"}}),t._v("\n        "+t._s(t.lang.get("contact.title"))+"\n    ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9"},[n("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.handleContactSubmit(e)}}},[n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon"},[t._v(t._s(t.lang.get("full_name"))+" ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{name:"name",id:"prependedtext",placeholder:"John Doe...",type:"text",required:"",value:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon"},[t._v(t._s(t.lang.get("email_address"))+" ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{name:"email",id:"prependedtext",placeholder:"john.doe@example.com",type:"email",required:"",value:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon"},[t._v(t._s(t.lang.get("subject"))+" ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"form-control",attrs:{name:"subject",id:"prependedtext",placeholder:t.lang.get("subject.placeholder"),type:"text",required:"",value:""},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group"},[n("span",{staticClass:"input-group-addon"},[t._v(t._s(t.lang.get("message"))+" ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{name:"message",placeholder:t.lang.get("message.placeholder"),required:""},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-md-6",staticStyle:{padding:"5px"}},[n("button",{staticClass:"btn btn-success",staticStyle:{width:"100%"}},[t._v(t._s(t.lang.get("send_message")))])]),t._v(" "),n("div",{staticClass:"col-md-6",staticStyle:{padding:"5px"}},[n("a",{staticClass:"btn btn-danger",staticStyle:{width:"100%"},on:{click:t.clearForm}},[t._v(t._s(t.lang.get("clear_form")))])])])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("a",{staticClass:"btn btn-block btn-social btn-twitter",staticStyle:{"margin-top":"7px"},attrs:{href:"https://twitter.com/welfordian",target:"_blank"}},[n("i",{staticClass:"fa fa-twitter",staticStyle:{"margin-top":"3px"}}),t._v(t._s(t.lang.get("find_me_on"))+" Twitter")]),t._v(" "),n("a",{staticClass:"btn btn-block btn-social btn-github",staticStyle:{"margin-top":"7px"},attrs:{href:"https://github.com/welfordian",target:"_blank"}},[n("i",{staticClass:"fa fa-github",staticStyle:{"margin-top":"3px"}}),t._v(t._s(t.lang.get("find_me_on"))+" GitHub")]),t._v(" "),n("a",{staticClass:"btn btn-block btn-social btn-linkedin",staticStyle:{"margin-top":"7px"},attrs:{href:"https://www.linkedin.com/in/josh-welford-1432777a/",target:"_blank"}},[n("i",{staticClass:"fa fa-linkedin",staticStyle:{"margin-top":"3px"}}),t._v(t._s(t.lang.get("find_me_on"))+" LinkedIn")])])]),t._v(" "),n("div",{staticClass:"modal _fade",attrs:{tabindex:"-1",role:"dialog",id:"offlineModal"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body"},[n("p",[t._v(t._s(t.modalMessage))])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.requestNotifications}},[t._v("Notify Me When Sent")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Seems there was a problem...")])])}]}}});