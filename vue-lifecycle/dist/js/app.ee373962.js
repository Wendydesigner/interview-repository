(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],f=0,v=[];f<u.length;f++)a=u[f],r[a]&&v.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(v.length)v.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},l=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"23f7":function(e,t,o){"use strict";var n=o("5b6c"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),o("router-view")],1)},l=[],a={beforeCreate:function(){console.log("Root beforeCreated!")},created:function(){console.log("Root created!")},beforeMount:function(){console.log("Root beforeMounted!")},mounted:function(){console.log("Root mounted!")}},u=a,i=(o("034f"),o("2877")),s=Object(i["a"])(u,r,l,!1,null,null,null),c=s.exports,f=o("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),o("br"),e._v("\n    check out the\n    "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},b=g,_=(o("23f7"),Object(i["a"])(b,d,h,!1,null,"49d867e6",null)),m=_.exports,k={name:"home",components:{HelloWorld:m}},j=k,w=Object(i["a"])(j,v,p,!1,null,null,null),y=w.exports;o("f820");n["a"].use(f["a"]);var C=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",beforeEnter:function(e,t,o){console.log("Child beforeEnter"),o()},component:function(){return Promise.resolve().then(o.bind(null,"f820"))}}]});C.beforeEach(function(e,t,o){console.log("路由全局勾子：beforeEach"),o()}),C.afterEach(function(){console.log("路由全局勾子：afterEach")});var E=C,x=o("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1;var O=new n["a"]({router:E,render:function(e){return e(c)}}).$mount("#app");console.group(O)},"5b6c":function(e,t,o){},"64a9":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},f820:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"about"},[o("h1",{directives:[{name:"ooo",rawName:"v-ooo"}]},[e._v("This is an about page")])])},r=[],l={beforeRouteEnter:function(e,t,o){console.log("Child beforeRouteEnter!"),o(function(){console.log("Child beforeRouteEnter next!")})},beforeRouteUpdate:function(){console.log("Child beforeRouteUpdate!")},beforeCreate:function(){console.log("Child beforeCreated!")},created:function(){console.log("Child created!")},beforeMount:function(){console.log("Child beforeMounted!")},mounted:function(){console.log("Child mounted!"),this.$nextTick(function(){console.log("nextTick")})},directives:{ooo:{bind:function(){console.log("指令binding")},inserted:function(){console.log("指令inserted")}}}},a=l,u=o("2877"),i=Object(u["a"])(a,n,r,!1,null,null,null);t["default"]=i.exports}});
//# sourceMappingURL=app.ee373962.js.map