(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6f8"],{afc9:function(t,e,a){},b1e2:function(t,e,a){"use strict";var s=a("afc9"),i=a.n(s);i.a},fbc8:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con-add-blog "},[a("titlex",{attrs:{title:"Add Article"}}),a("div",{staticClass:"con-inputs"},[a("vs-input",{staticClass:"inputx",attrs:{"vs-danger":!t.upload.title&&t.activeDangers,"vs-danger-text":"This value is required",placeholder:"Title of my article","vs-label":"Title"},model:{value:t.upload.title,callback:function(e){t.$set(t.upload,"title",e)},expression:"upload.title"}}),a("vs-input",{staticClass:"inputx",attrs:{"vs-danger":!t.upload.description&&t.activeDangers,"vs-danger-text":"This value is required",placeholder:"Description of my article","vs-label":"Description"},model:{value:t.upload.description,callback:function(e){t.$set(t.upload,"description",e)},expression:"upload.description"}}),a("vs-chips",{class:{"chips-danger":t.activeDangers&&0==t.tags.length},attrs:{placeholder:"Tags"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}},t._l(t.tags,function(e){return a("vs-chip",{key:e,attrs:{closable:""},on:{click:function(a){t.remove(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._m(0),0==t.tags.length&&t.activeDangers?a("span",{staticClass:"span-text-validationx"},[t._v("\n        This value is required\n      ")]):t._e(),a("div",{staticClass:"con-input-file",class:{fileActive:t.cover,fileDanger:!t.cover&&t.activeDangers}},[a("label",{attrs:{for:""}},[t._v("Cover image")]),a("div",{staticClass:"input-file"},[a("i",{staticClass:"material-icons"},[t._v("\n            panorama\n          ")]),a("input",{ref:"file",attrs:{type:"file"},on:{change:t.changeFile}})]),!t.cover&&t.activeDangers?a("span",{staticClass:"span-text-validationx"},[t._v("\n          This value is required\n        ")]):t._e()])],1),a("vs-tabs",{attrs:{"vs-alignment":"center"}},[a("vs-tab",{attrs:{"vs-label":"Markdown"}},[a("header",{staticClass:"headerx"},[a("div",{staticClass:"con-add-img"},[a("input",{ref:"addimage",attrs:{type:"file"},on:{change:t.addImage}}),a("i",{staticClass:"material-icons"},[t._v("\n            photo\n          ")]),t._v("\n\n          Upload Image\n        ")]),a("div",{staticClass:"selectedAll",on:{click:t.selectedAll}},[a("i",{staticClass:"material-icons"},[t._v("\n            select_all\n          ")])]),a("a",{staticClass:"helpx",attrs:{target:"_blank",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet"}},[a("i",{staticClass:"material-icons"},[t._v("\n            live_help\n          ")])])]),a("div",{staticClass:"con-markdownx"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdownx,expression:"markdownx"}],ref:"textarea",staticClass:"textarea-markdown",class:{"textarea-danger":""==t.markdownx&&t.activeDangers},style:{"min-height":t.minHeight},attrs:{placeholder:"Add the markdown of your great article"},domProps:{value:t.markdownx},on:{input:[function(e){e.target.composing||(t.markdownx=e.target.value)},t.textareaResize]}})])]),a("vs-tab",{attrs:{"vs-label":"Preview"}},[a("div",{staticClass:"con-htmlx",domProps:{innerHTML:t._s(t.getHtml)}})])],1),a("footer",{staticClass:"footerx_"},[a("vs-button",{attrs:{"vs-color":"success","vs-type":"filled"},on:{click:t.addArticle}},[t._v("Publish Article")])],1),a("Carbon")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-description-input"},[t._v("\n        After typing the tag press the "),a("b",[t._v(" Enter ")]),t._v(" key to add it\n      ")])}],n=a("c93e"),o=(a("7f7f"),a("cadf"),a("551c"),a("97c7")),r=a("bf39"),l=(a("92d8"),a("1487")),c=a.n(l),d=a("d4cd")({highlight:function(t,e){if(e&&c.a.getLanguage(e))try{return c.a.highlight(e,t).value}catch(t){}return""}});d.use(a("746a"),"warning");var u={components:{titlex:r["a"],Carbon:o["a"]},data:function(){return{cover:!1,activeDangers:!1,tags:[],popupActivo:!1,upload:{tags:"",title:"",description:"",markdown:"",cover:"",user:{},views:0,active:!0,likes:{},timestamp:new Date},htmlx:"",minHeight:"auto",markdownx:"# My Title\n\n::: warning\n\n## The article that I am going to add has\n\n- A very good writing\n- It's about code development or something to do with the community of programmers\n- Does not contain offenses or insults\n- I have the knowledge of how to write in markdown and thus add the best practices and details\n- It is an article of my own and if I am not going to add the reference of the source\n:::\n"}},mounted:function(){var t=this;this.$nextTick(function(){t.minHeight=t.$refs.textarea.scrollHeight+20+"px"})},computed:{getHtml:function(){var t=d.render(this.markdownx);return t},isRoot:function(){return!!this.$store.state.user&&("ldrovira"===this.$store.state.user.displayName||"ManuelRoviraDesign"===this.$store.state.user.displayName)}},methods:{changeFile:function(t){""!==t.target.value?this.cover=!0:this.cover=!1},addArticle:function(){var t=this,e={};if(this.$store.state.user){if(!this.upload.title||!this.upload.description||0===this.tags.length)return this.activeDangers=!0,void this.$vs.notify({title:"Missing fields to fill",text:"Fill in all the fields required to send",color:"danger",icon:"cloud_off"});this.$vs.loading({background:"#231F34"}),fetch("https://api.github.com/search/users?q=".concat(this.$store.state.user.displayName)).then(function(t){return t.json()}).then(function(a){e=t.isRoot?{displayName:"DevAwesome",email:"dev.awesome.app@gmail.com",photoURL:"devAwesome",uid:"devAwesome",githubUrl:"https://github.com/lusaxweb/devAwesome"}:{displayName:t.$store.state.user.displayName,email:t.$store.state.user.email,photoURL:t.$store.state.user.photoURL,uid:t.$store.state.user.uid,githubUrl:a.items[0].html_url},t.upload.markdown=t.markdownx,t.upload.user=e,t.upload.tags=t.tags.join();var s=t.$refs.file.files[0],i=t.$firebase.storage().ref("articles/"+s.name);i.put(s).then(function(e){i.getDownloadURL().then(function(e){t.upload.cover=e,t.$firebase.database().ref("articles/").push(Object(n["a"])({},t.upload)).then(function(e){var a=e.key;t.$vs.loading.close(),t.$router.push({path:"/article/".concat(a)}),t.$vs.notify({title:"Successful Publish",text:"The Article was successfully Published",color:"success",icon:"cloud_done"})})})})})}else this.$vs.notify({title:"Necessary Login User",text:"To be able to do this action you need a user in login",color:"danger"})},selectedAll:function(){this.$refs.textarea.focus(),this.$refs.textarea.select()},insertAtCursor:function(t,e){if(t.selectionStart||"0"===t.selectionStart){var a=t.selectionStart,s=t.selectionEnd;this.markdownx=this.markdownx.substring(0,a)+e+this.markdownx.substring(s,this.markdownx.length)}else this.markdownx+=e},addImage:function(){var t=this,e=this.$refs.addimage.files[0],a=this.$firebase.storage().ref("articles/"+e.name);a.put(e).then(function(s){a.getDownloadURL().then(function(a){console.log("url",a),t.insertAtCursor(t.$refs.textarea,"![".concat(e.name,"](").concat(a,")"))})}),console.log(this.$refs.textarea.selectionStart)},remove:function(t){this.tags.splice(this.tags.indexOf(t),1)},textareaResize:function(){var t=this;this.minHeight="auto",this.$nextTick(function(){t.minHeight=t.$refs.textarea.scrollHeight+20+"px"})}}},h=u,v=(a("b1e2"),a("2877")),g=Object(v["a"])(h,s,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-c6f8.c095f4a7cea6701d8257.js.map