(function(t){function e(e){for(var r,n,i=e[0],l=e[1],u=e[2],f=0,d=[];f<i.length;f++)n=i[f],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={home:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("7cf4")},"402c":function(t,e,a){"use strict";var r=a("2b0e"),s=a("f309");r["a"].use(s["a"]),e["a"]=new s["a"]({})},"7cf4":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=a("7496"),o=a("553a"),n=a("f6c4"),i=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{id:"inspire"}},[e("MainMenu"),e(n["a"],[e("HelloWorld")],1),e(o["a"],{attrs:{app:""}},[e("span",[t._v("Copyright © 2022 by shkim")])])],1)},l=[],u=a("add6"),c=a("62ad"),f=a("a523"),d=a("adda"),h=a("0fd9"),p=function(){var t=this,e=t._self._c;return e(f["a"],[e(h["a"],{staticClass:"text-center"},[e(c["a"],{attrs:{cols:"12"}},[e(d["a"],{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),e(c["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify (Home) ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(h["a"],{attrs:{justify:"center"}},t._l(t.whatsNext,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(h["a"],{attrs:{justify:"center"}},t._l(t.importantLinks,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(h["a"],{attrs:{justify:"center"}},t._l(t.ecosystem,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1)],1)],1)},v=[],m={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},b=m,y=a("2877"),_=Object(y["a"])(b,p,v,!1,null,null,null),g=_.exports,x={components:{MainMenu:u["a"],HelloWorld:g},data:()=>({})},w=x,j=Object(y["a"])(w,i,l,!1,null,null,null),k=j.exports,C=a("402c");r["a"].config.productionTip=!1,new r["a"]({vuetify:C["a"],render:t=>t(k)}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.63a7d78d.svg"},add6:function(t,e,a){"use strict";var r=a("40dc"),s=a("5bc1"),o=a("8336"),n=a("132d"),i=a("8860"),l=a("da13"),u=a("1800"),c=a("5d23"),f=a("e449"),d=a("f774"),h=a("2fa4"),p=a("2a7f"),v=function(){var t=this,e=t._self._c;return e("div",[e(d["a"],{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(i["a"],{attrs:{dense:""}},[e(l["a"],{attrs:{link:""}},[e(u["a"],[e(n["a"],[t._v("mdi-view-dashboard")])],1),e(c["a"],[e(c["b"],[t._v("Dashboard")])],1)],1),e(l["a"],{attrs:{link:""}},[e(u["a"],[e(n["a"],[t._v("mdi-cog")])],1),e(c["a"],[e(c["b"],[t._v("Settings")])],1)],1)],1)],1),e(r["a"],{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[e(s["a"],{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(p["a"],[t._v("Vue.js - Django Web Programming")]),e(h["a"]),e(o["a"],{attrs:{text:"",href:"/"}},[t._v("Home")]),e(o["a"],{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Blog")]),e(o["a"],{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),e(o["a"],{attrs:{text:""}},[t._v("/")]),e(o["a"],{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),e(o["a"],{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),e(h["a"]),e(f["a"],{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(o["a"],t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[e(n["a"],[t._v("mdi-account")]),t._v(" Anonymous "),e(n["a"],[t._v("mdi-dots-vertical")])],1)]}}])},[e(i["a"],[e(l["a"],[e(c["b"],[t._v("Logout")])],1),e(l["a"],[e(c["b"],[t._v("Logout")])],1),e(l["a"],[e(c["b"],[t._v("Logout")])],1),e(l["a"],[e(c["b"],[t._v("Logout")])],1)],1)],1)],1)],1)},m=[],b={data:()=>({drawer:null}),created(){console.log("created()...")}},y=b,_=a("2877"),g=Object(_["a"])(y,v,m,!1,null,null,null);e["a"]=g.exports}});
//# sourceMappingURL=home.8926a9c1.js.map