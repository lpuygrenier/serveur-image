(function(e){function t(t){for(var c,a,l=t[0],i=t[1],u=t[2],s=0,d=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},o={app:0},r=[];function a(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"19269ba1"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=c);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=a(e);var u=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",u.name="ChunkLoadError",u.type=c,u.request=r,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11c1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={id:"nav"},r=Object(c["f"])("Home"),a=Object(c["f"])(" | "),l=Object(c["f"])("About"),i=Object(c["f"])(" | "),u=Object(c["f"])("Edit");function s(e,t){var n=Object(c["w"])("router-link"),s=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",o,[Object(c["g"])(n,{to:"/"},{default:Object(c["C"])((function(){return[r]})),_:1}),a,Object(c["g"])(n,{to:"/about"},{default:Object(c["C"])((function(){return[l]})),_:1}),i,Object(c["g"])(n,{to:"/edit"},{default:Object(c["C"])((function(){return[u]})),_:1})]),Object(c["g"])(s)],64)}n("e8a4");const b={};b.render=s;var d=b,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=n("cf05"),j=n.n(p),g={class:"home"},O=Object(c["g"])("img",{alt:"Vue logo",src:j.a},null,-1);function m(e,t,n,o,r,a){var l=Object(c["w"])("HelloWorld");return Object(c["p"])(),Object(c["d"])("div",g,[O,Object(c["g"])(l,{msg:"Welcome to Your Vue.js App"})])}n("b0c0");var v=Object(c["E"])("data-v-7d01d015");Object(c["s"])("data-v-7d01d015");var h={class:"hello"},y={class:"large-12 medium-12 small-12 cell"},w=Object(c["g"])("br",null,null,-1),S=Object(c["g"])("br",null,null,-1),_=Object(c["g"])("img",{class:"imgDisplay"},null,-1),k=Object(c["g"])("br",null,null,-1),C=Object(c["g"])("br",null,null,-1),E=Object(c["g"])("br",null,null,-1),R={key:0,class:"grid-container"};Object(c["q"])();var P=v((function(e,t,n,o,r,a){return Object(c["p"])(),Object(c["d"])("div",h,[Object(c["g"])("h1",null,Object(c["y"])(e.msg),1),Object(c["g"])("button",{class:"Search__button",onClick:t[1]||(t[1]=function(t){return e.callRestService()})},"Call Spring Boot REST backend"),Object(c["D"])(Object(c["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selected=t})},[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.response,(function(e){return Object(c["p"])(),Object(c["d"])("option",{value:{name:e.name,id:e.id},key:e.id},Object(c["y"])(e.name),9,["value"])})),128))],512),[[c["A"],e.selected]]),Object(c["g"])("button",{class:"Search__button",onClick:t[3]||(t[3]=function(t){return e.getImage(e.selected)})},"Get image"),Object(c["g"])("div",y,[Object(c["g"])("label",null,[Object(c["g"])("input",{type:"file",id:"file",ref:"file",onChange:t[4]||(t[4]=function(t){return e.handleFileUpload()})},null,544)]),Object(c["g"])("button",{onClick:t[5]||(t[5]=function(t){e.submitFile(),e.callRestService()})},"Submit")]),w,S,_,k,Object(c["g"])("button",{onClick:t[6]||(t[6]=function(t){e.show=!e.show}),class:"Search__button"},"Display Gallery"),C,E,e.show?(Object(c["p"])(),Object(c["d"])("div",R,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.response,(function(e){return Object(c["p"])(),Object(c["d"])("div",{key:e.id},[Object(c["g"])("img",{class:"div-img",src:"/images/"+e.id,alt:e.name},null,8,["src","alt"])])})),128))])):Object(c["e"])("",!0)])})),A=n("bc3a"),x=n.n(A),F={name:"HelloWorld",props:{msg:String},data:function(){return{show:!1,response:[],errors:[],file:"",images:[],selected:{name:null,id:0}}},mounted:function(){this.callRestService()},methods:{callRestService:function(){var e=this;x.a.get("images").then((function(t){e.response=t.data,console.log(e.response.length)})).catch((function(t){e.errors.push(t)}))},getImage:function(e){var t="/images/"+e.id,n=document.querySelector(".imgDisplay");x.a.get(t,{responseType:"blob"}).then((function(e){var t=new window.FileReader;t.readAsDataURL(e.data),t.onload=function(){var e=t.result;n.setAttribute("src",e)}}))},handleFileUpload:function(){this.file=this.$refs.file.files[0]},submitFile:function(){var e=new FormData;e.append("file",this.file),x.a.post("/images",e,{headers:{"Content-Type":"multipart/file"}}).then((function(){console.log("SUCCESS!!")})).catch((function(e){console.log(e),console.log("FAILURE!!")}))}}};n("c5326");F.render=P,F.__scopeId="data-v-7d01d015";var T=F,D={name:"Home",components:{HelloWorld:T}};D.render=m;var H=D,M={class:"edit"},U=Object(c["g"])("img",{alt:"Vue logo",src:j.a},null,-1);function I(e,t,n,o,r,a){var l=Object(c["w"])("Modif");return Object(c["p"])(),Object(c["d"])("div",M,[U,Object(c["g"])(l)])}var q=Object(c["E"])("data-v-b72dfb84");Object(c["s"])("data-v-b72dfb84");var L={class:"edit"};Object(c["q"])();var V=q((function(e,t,n,o,r,a){return Object(c["p"])(),Object(c["d"])("div",L,[Object(c["g"])("button",{class:"Search__button",onClick:t[1]||(t[1]=function(e){return a.callRestService()})},"Print")])})),W={name:"Edit",props:{},data:function(){return{response:[]}},mounted:function(){this.callRestService()},methods:{callRestService:function(){var e=this;x.a.get("images/0?algorithm=contrast").then((function(e){console.log(e)})).catch((function(t){e.errors.push(t)}))}}};W.render=V,W.__scopeId="data-v-b72dfb84";var G=W,J={name:"Edit",components:{Modif:G}};J.render=I;var B=J,Y=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/edit",name:"edit",component:B}],$=Object(f["a"])({history:Object(f["b"])("/"),routes:Y}),z=$;Object(c["c"])(d).use(z).mount("#app")},"601c":function(e,t,n){},c5326:function(e,t,n){"use strict";n("601c")},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},e8a4:function(e,t,n){"use strict";n("11c1")}});
//# sourceMappingURL=app.2596f737.js.map