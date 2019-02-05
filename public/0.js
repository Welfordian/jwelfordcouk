webpackJsonp([0],{277:function(t,e,a){var i=a(1)(a(354),a(355),!1,function(t){a(352)},"data-v-5fac9ac8",null);t.exports=i.exports},282:function(t,e,a){var i=a(1)(a(285),a(286),!1,function(t){a(283)},null,null);t.exports=i.exports},283:function(t,e,a){var i=a(284);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(9)("72443e66",i,!0,{})},284:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"",""])},285:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={name:"dashboard-layout",props:["fullWidth"],computed:{containerStyle:function(){var t={};return this.fullWidth&&(t.width="100%",t.marginLeft="0",t.marginRight="0"),t}},data:function(){return{lang:i.a}}}},286:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container",style:t.containerStyle},[a("navbar",[a("template",{slot:"left-links"},[a("navbar-link",{attrs:{href:"/dashboard/editor",icon:"paint-brush"}},[t._v("Editor")]),t._v(" "),a("navbar-link",{attrs:{href:"/dashboard/users",icon:"users"}},[t._v("Users")]),t._v(" "),a("navbar-link",{attrs:{href:"/dashboard/posts",icon:"newspaper-o"}},[t._v("Posts")]),t._v(" "),a("navbar-link",{attrs:{href:"/dashboard/files",icon:"file"}},[t._v("Files")]),t._v(" "),a("navbar-link",{attrs:{href:"/dashboard/messages",icon:"envelope"}},[t._v("Messages")])],1),t._v(" "),a("template",{slot:"right-links"},[a("auth-button",[a("li",{staticClass:"dropdown-submenu"},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"glyphicon glyphicon-flash"}),t._v(" Home")])],1)]),t._v(" "),a("language-selector")],1)],2),t._v(" "),a("transition",{attrs:{name:"fade"}},[t._t("default")],2)],1)])},staticRenderFns:[]}},297:function(t,e,a){var i=a(1)(a(300),a(301),!1,function(t){a(298)},"data-v-25a9821c",null);t.exports=i.exports},298:function(t,e,a){var i=a(299);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(9)("32a4e510",i,!0,{})},299:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"input[type=file][data-v-25a9821c]{display:none!important}.buttonContainer[data-v-25a9821c]{position:relative;margin-bottom:10px}.clearFile[data-v-25a9821c]{margin-left:10px;cursor:pointer;font-size:20px;position:relative;top:4px}.buttonContainer button[data-v-25a9821c]{position:relative;overflow:hidden}.buttonContainer button div[data-v-25a9821c]{position:absolute;top:-2px;left:-2px;height:110%;width:0;z-index:999;background-color:#2c3e50ad;border:1px solid #2c3e50ad;border-radius:3px}img[data-v-25a9821c]{position:absolute;right:15px;top:0;width:50px;z-index:999}img.enlarged[data-v-25a9821c]{max-width:800px;width:auto}.loader[data-v-25a9821c]{margin-left:5px;cursor:pointer;font-size:20px;position:relative;top:4px}",""])},300:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(5);e.default={name:"image-upload-button",data:function(){return{buttonText:"Select an Image",hasFile:!1,inputValue:"",error:!1,useURL:!1,imageUrlError:!1,hasURL:!1,checkingURL:!1}},methods:{verifyURL:function(t){var e=this,a=t.target.value.trim();a.length?(this.checkingURL=!0,i.a.post("/posts/image/verify_url",{url:a}).then(function(t){t.data.error?e.error="Please enter a valid URL":(e.hasURL=!0,e.$refs.imagePreview.src=a,e.error=!1),e.checkingURL=!1})):this.error="Please enter a valid URL"},enlargeImagePreview:function(){this.$refs.imagePreview.classList.add("enlarged")},shrinkImagePreview:function(){this.$refs.imagePreview.classList.remove("enlarged")},setImagePreview:function(){var t=this;if(this.$refs.input.files&&this.$refs.input.files[0]){var e=new FileReader;e.onload=function(e){t.$refs.imagePreview.src=e.target.result},e.readAsDataURL(this.$refs.input.files[0])}},clearFile:function(){this.buttonText="Choose File",this.$refs.input.value="",this.hasFile=!1,this.$emit("input","")},validFileExtension:function(t){return-1!==["jpg","jpeg","png","gif","bmp"].indexOf(t.toLowerCase())},setButtonValue:function(t){this.error=!1;var e=t.target.value.replace("C:\\fakepath\\",""),a=/(?:\.([^.]+))?$/.exec(e)[1];this.validFileExtension(a)?this.uploadImage(e):this.error="Invalid file extension"},uploadImage:function(t){var e=this,a=new FormData;a.append("intro_image",this.$refs.input.files[0]);var n={onUploadProgress:function(t){var a=Math.round(100*t.loaded/t.total);e.$refs.uploadProgress.style.width=a+3+"%"}};i.a.post("/posts/images",a,n).then(function(a){e.$refs.uploadProgress.style.width="0%",e.buttonText=t,e.hasFile=!0,e.setImagePreview(),e.$emit("input",a.data.path)})}},watch:{useURL:function(){this.hasURL=!1,this.error=!1}}}},301:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[t.useURL?t._e():a("div",{staticClass:"buttonContainer col-md-6"},[a("button",{ref:"button",staticClass:"btn btn-success",on:{click:function(e){return t.$refs.input.click()}}},[a("div",{ref:"uploadProgress"}),t._v("\n                "+t._s(t.buttonText)+"\n            ")]),t._v(" "),t.hasFile?t._e():a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticStyle:{"margin-left":"10px","margin-right":"10px",color:"#2c3e509e"}},[t._v("OR")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.useURL=!0}}},[t._v("Use image URL")])]),t._v(" "),t.hasFile?a("span",{staticClass:"clearFile",on:{click:function(e){return e.preventDefault(),t.clearFile(e)}}},[t._v("×")]):t._e()]),t._v(" "),t.useURL?a("div",{staticClass:"col-md-6",staticStyle:{"margin-bottom":"10px"}},[a("input",{staticClass:"form-control",staticStyle:{width:"95%",display:"inline-block"},attrs:{type:"text"},on:{blur:t.verifyURL}}),t._v(" "),t.checkingURL?t._e():a("span",{staticClass:"clearFile",on:{click:function(e){e.preventDefault(),t.useURL=!1}}},[t._v("×")]),t._v(" "),t.checkingURL?a("span",{staticClass:"loader"},[a("i",{staticClass:"fa fa-circle-o-notch fa-spin",attrs:{"aria-hidden":"true"}})]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"previewContainer col-md-6"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.hasFile||t.hasURL,expression:"hasFile || hasURL"}],ref:"imagePreview",on:{mouseenter:t.enlargeImagePreview,mouseleave:t.shrinkImagePreview}})])]),t._v(" "),a("input",{ref:"input",attrs:{type:"file"},on:{change:t.setButtonValue}}),t._v(" "),t.error?a("p",{staticClass:"text-danger"},[t._v(t._s(this.error))]):t._e()])},staticRenderFns:[]}},302:function(t,e,a){var i=a(1)(a(305),a(306),!1,function(t){a(303)},null,null);t.exports=i.exports},303:function(t,e,a){var i=a(304);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(9)("19a001e1",i,!0,{})},304:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,".badChars{background:rgba(255,0,0,.35)}.fakeInput{max-height:45px;overflow:auto;white-space:nowrap}",""])},305:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"limited-input",props:["max","type","name","value"],data:function(){return{charCount:0}},mounted:function(){this.checkInput()},beforeMount:function(){this.inputValue=void 0===this.value?"":this.value,this.name=void 0===this.name?"":this.name,this.hasMax=this.max,this.inputType=void 0===this.type?"input":this.type},methods:{setEndOfContenteditable:function(t){var e,a;document.createRange?((e=document.createRange()).selectNodeContents(t),e.collapse(!1),(a=window.getSelection()).removeAllRanges(),a.addRange(e)):document.selection&&((e=document.body.createTextRange()).moveToElementText(t),e.collapse(!1),e.select())},checkInput:function(){this.inputValue=this.$refs.fakeInput.innerText,this.charCount=this.$refs.fakeInput.innerText.length,$(this.$refs.fakeInput).append(this.highlightBadChars()),this.setEndOfContenteditable(this.$refs.fakeInput),this.$emit("input",this.$refs.fakeInput.innerText)},highlightBadChars:function(){var t=this.$refs.fakeInput.innerText.substring(0,this.max),e=this.$refs.fakeInput.innerText.substring(this.max,this.$refs.fakeInput.innerText.length);return $(this.$refs.fakeInput).empty(),e.length?this.$emit("hasBadChars",!0):this.$emit("hasBadChars",!1),t+'<span class="badChars">'+e+"</span>"}}}},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return"input"===t.inputType?a("div",[a("div",{ref:"fakeInput",staticClass:"form-control fakeInput",staticStyle:{"margin-bottom":"10px"},attrs:{contenteditable:"true",type:"text"},on:{keyup:t.checkInput}},[t._v(t._s(t.inputValue))]),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{name:t.name,type:"text"},domProps:{value:t.inputValue}}),t._v(" "),t.hasMax?a("p",{staticClass:"text-right"},[t._v(t._s(t.charCount)+" / "+t._s(t.max))]):t._e()]):t._e()},staticRenderFns:[]}},352:function(t,e,a){var i=a(353);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(9)("00e01c04",i,!0,{})},353:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,".tui-editor-contents pre[data-v-5fac9ac8]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34!important}",""])},354:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(5),n=a(282),s=a.n(n),r=a(297),o=a.n(r),l=a(302),u=a.n(l);e.default={components:{LimitedInput:u.a,ImageUploadButton:o.a,DashboardLayout:s.a},data:function(){return{titleHasBadChars:!1,post:{title:"",intro:"",content:"",image:""}}},beforeMount:function(){this.addStyle("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"),this.addStyle("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css")},mounted:function(){this.watchTuiEditor()},methods:{updateTitleStatus:function(t){this.titleHasBadChars=t},createPost:function(){var t=this;i.a.post("/posts",this.post).then(function(e){t.$router.push("/posts/"+e.data.slug)})},watchTuiEditor:function(){var t=this,e=$(".tui-editor-contents").get(0);new MutationObserver(function(e){var a=!0,i=!1,n=void 0;try{for(var s,r=e[Symbol.iterator]();!(a=(s=r.next()).done);a=!0)"childList"==s.value.type&&(t.post.content=$(".tui-editor-contents").html(),t.$forceUpdate())}catch(t){i=!0,n=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw n}}}).observe(e,{attributes:!0,childList:!0})}},computed:{creatable:function(){return 0!==this.post.title.length&&0!==this.post.intro.length&&0!==this.post.image.length&&0!==this.post.content.length&&!this.titleHasBadChars}}}},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dashboard-layout",[a("div",[a("div",{staticClass:"row"},[a("h1",[t._v("Create a post")]),t._v(" "),a("hr"),t._v(" "),a("div",[a("label",[t._v("Title")]),t._v(" "),a("limited-input",{attrs:{max:"50",name:"title"},on:{hasBadChars:t.updateTitleStatus},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),t._v(" "),a("label",[t._v("Intro Text")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.intro,expression:"post.intro"}],ref:"intro_text",staticClass:"form-control",staticStyle:{"margin-bottom":"10px"},domProps:{value:t.post.intro},on:{input:function(e){e.target.composing||t.$set(t.post,"intro",e.target.value)}}}),t._v(" "),a("label",[t._v("Intro Image")]),t._v(" "),a("image-upload-button",{model:{value:t.post.image,callback:function(e){t.$set(t.post,"image",e)},expression:"post.image"}}),t._v(" "),a("tui-editor",{attrs:{options:{height:"600px",initialValue:"# An Adventure Awaits\nMy next blog post..."}}}),t._v(" "),a("button",{staticClass:"btn btn-success pull-right",staticStyle:{"margin-top":"10px"},attrs:{disabled:!t.creatable},on:{click:function(e){return t.createPost()}}},[t._v("Create Post")])],1)])])])},staticRenderFns:[]}}});