(function(e){function t(t){for(var o,l,a=t[0],u=t[1],i=t[2],s=0,d=[];s<a.length;s++)l=a[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function l(e){return a.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"c3b3d235"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=l(e);var i=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,n[1](i)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3785:function(e,t,n){"use strict";n("ab23")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["f"])("Home"),l=Object(o["f"])(" | "),a=Object(o["f"])("About");function u(e,t){var n=Object(o["w"])("router-link"),u=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["C"])((function(){return[c]})),_:1}),l,Object(o["g"])(n,{to:"/about"},{default:Object(o["C"])((function(){return[a]})),_:1})]),Object(o["g"])(u)],64)}n("3785");const i={};i.render=u;var s=i,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=n("cf05"),f=n.n(d),p={class:"home"},g=Object(o["g"])("img",{alt:"Vue logo",src:f.a},null,-1);function j(e,t,n,r,c,l){var a=Object(o["w"])("HelloWorld");return Object(o["p"])(),Object(o["d"])("div",p,[g,Object(o["g"])(a,{msg:"Welcome to Your Vue.js App"})])}n("b0c0");var O=Object(o["E"])("data-v-7d01d015");Object(o["s"])("data-v-7d01d015");var m={class:"hello"},v={class:"large-12 medium-12 small-12 cell"},h=Object(o["g"])("br",null,null,-1),y=Object(o["g"])("br",null,null,-1),w=Object(o["g"])("img",{class:"imgDisplay"},null,-1),S=Object(o["g"])("br",null,null,-1),_=Object(o["g"])("br",null,null,-1),k=Object(o["g"])("br",null,null,-1),C={key:0,class:"grid-container"};Object(o["q"])();var P=O((function(e,t,n,r,c,l){return Object(o["p"])(),Object(o["d"])("div",m,[Object(o["g"])("h1",null,Object(o["y"])(e.msg),1),Object(o["g"])("button",{class:"Search__button",onClick:t[1]||(t[1]=function(t){return e.callRestService()})},"Call Spring Boot REST backend"),Object(o["D"])(Object(o["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selected=t})},[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(e.response,(function(e){return Object(o["p"])(),Object(o["d"])("option",{value:{name:e.name,id:e.id},key:e.id},Object(o["y"])(e.name),9,["value"])})),128))],512),[[o["A"],e.selected]]),Object(o["g"])("button",{class:"Search__button",onClick:t[3]||(t[3]=function(t){return e.getImage(e.selected)})},"Get image"),Object(o["g"])("div",v,[Object(o["g"])("label",null,[Object(o["g"])("input",{type:"file",id:"file",ref:"file",onChange:t[4]||(t[4]=function(t){return e.handleFileUpload()})},null,544)]),Object(o["g"])("button",{onClick:t[5]||(t[5]=function(t){e.submitFile(),e.callRestService()})},"Submit")]),h,y,w,S,Object(o["g"])("button",{onClick:t[6]||(t[6]=function(t){e.show=!e.show}),class:"Search__button"},"Display Gallery"),_,k,e.show?(Object(o["p"])(),Object(o["d"])("div",C,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(e.response,(function(e){return Object(o["p"])(),Object(o["d"])("div",{key:e.id},[Object(o["g"])("img",{class:"div-img",src:"/images/"+e.id,alt:e.name},null,8,["src","alt"])])})),128))])):Object(o["e"])("",!0)])})),A=n("bc3a"),R=n.n(A),x={name:"HelloWorld",props:{msg:String},data:function(){return{show:!1,response:[],errors:[],file:"",images:[],selected:{name:null,id:0}}},mounted:function(){this.callRestService()},methods:{callRestService:function(){var e=this;R.a.get("images").then((function(t){e.response=t.data,console.log(e.response.length)})).catch((function(t){e.errors.push(t)}))},getImage:function(e){var t="/images/"+e.id,n=document.querySelector(".imgDisplay");R.a.get(t,{responseType:"blob"}).then((function(e){var t=new window.FileReader;t.readAsDataURL(e.data),t.onload=function(){var e=t.result;n.setAttribute("src",e)}}))},handleFileUpload:function(){this.file=this.$refs.file.files[0]},submitFile:function(){var e=new FormData;e.append("file",this.file),R.a.post("/images",e,{headers:{"Content-Type":"multipart/file"}}).then((function(){console.log("SUCCESS!!")})).catch((function(e){console.log(e),console.log("FAILURE!!")}))}}};n("c5326");x.render=P,x.__scopeId="data-v-7d01d015";var E=x,F={name:"Home",components:{HelloWorld:E}};F.render=j;var T=F,D=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=Object(b["a"])({history:Object(b["b"])("/"),routes:D}),U=H;Object(o["c"])(s).use(U).mount("#app")},ab23:function(e,t,n){},c5326:function(e,t,n){"use strict";n("d931")},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},d931:function(e,t,n){}});
//# sourceMappingURL=app.5fc2d85f.js.map