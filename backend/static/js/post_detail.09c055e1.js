(function(t){function e(e){for(var o,n,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={post_detail:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([2,"chunk-vendors"]),a()})({2:function(t,e,a){t.exports=a("815f")},"402c":function(t,e,a){"use strict";var o=a("2b0e"),r=a("f309");o["a"].use(r["a"]),e["a"]=new r["a"]({})},7756:function(t,e,a){"use strict";a("cf95")},"815f":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),r=a("7496"),s=a("553a"),n=a("f6c4"),l=function(){var t=this,e=t._self._c;return e(r["a"],{attrs:{id:"inspire"}},[e("MainMenu"),e(n["a"],[e("PostDetail")],1),e(s["a"],{attrs:{app:""}},[e("span",[t._v("Copyright © 2022 by shkim")])])],1)},i=[],c=a("add6"),u=a("8212"),p=a("b0af"),f=a("cc20"),d=a("62ad"),v=a("a523"),g=a("0fd9"),h=function(){var t=this,e=t._self._c;return e(v["a"],[e(g["a"],{attrs:{align:"center",justify:"center"}},[e(d["a"],{attrs:{cols:"12",lg:"10"}},[e("h1",[t._v(t._s(t.post.title))]),e("p",[t._v(t._s(t.post.modify_dt)+", written by "+t._s(t.post.owner))])])],1),e(g["a"],{attrs:{align:"start",justify:"center"}},[e(d["a"],{attrs:{cols:"12",sm:"8",lg:"7"}},[e(p["a"],{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),e("div",[e("strong",[t._v("TAGS:")]),t._l(t.post.tags,(function(a,o){return e(f["a"],{key:o,staticClass:"ma-2 my-hover",attrs:{outlined:""},on:{click:function(e){return t.serverPage(a)}}},[t._v(t._s(a)+" ")])}))],2)])],1),e(d["a"],{attrs:{cols:"12",sm:"4",lg:"3"}},[e(p["a"],{staticClass:"pa-2 mb-5",attrs:{tile:""}},[e("p",[t._v("prev post")]),t.post.prev?e("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(" "+t._s(t.post.prev.title)+" ")]):t._e()]),e(p["a"],{staticClass:"pa-2 mb-5",attrs:{tile:""}},[e("p",[t._v("next post")]),t.post.next?e("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(" "+t._s(t.post.next.title)+" ")]):t._e()]),e(p["a"],{staticClass:"pa-2",attrs:{tile:""}},[e("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(a,o){return e(f["a"],{key:o,staticClass:"ma-2 my-hover",attrs:{color:a.color,"text-color":"white"},on:{click:function(e){return t.serverPage(a.name)}}},[e(u["a"],{class:a.color+" darken-4",attrs:{left:""}},[t._v(t._s(a.count)+" ")]),t._v(" "+t._s(a.name)+" ")],1)}))],2)],1)],1)],1)},_=[],b=a("cee4"),m={data:()=>({post:{},tagCloud:[]}),created(){console.log("created()...");const t=location.pathname.split("/")[3]||2;this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail(t){console.log("fetchPostDetail()...",t),b["a"].get(`/api/post/${t}/`).then(t=>{console.log("POST DETAIL GET RES",t),this.post=t.data}).catch(t=>{console.log("POST DETAIL GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)})},fetchTagCloud(){console.log("fetchTagCloud()..."),b["a"].get("/api/tag/cloud/").then(t=>{console.log("TAG CLOUD GET RES",t),this.tagCloud=t.data,this.tagCloud.forEach(t=>{3===t.weight?t.color="green":2===t.weight?t.color="blue-grey":1===t.weight&&(t.color="grey")})}).catch(t=>{console.log("TAG CLOUD GET ERR.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)})},serverPage(t){console.log("serverPage()...",t),location.href="/blog/post/list/?tagname="+t}}},y=m,w=(a("7756"),a("2877")),P=Object(w["a"])(y,h,_,!1,null,"76fdf074",null),x=P.exports,O={components:{MainMenu:c["a"],PostDetail:x},data:()=>({})},T=O,C=Object(w["a"])(T,l,i,!1,null,null,null),k=C.exports,S=a("402c");o["a"].config.productionTip=!1,new o["a"]({vuetify:S["a"],render:t=>t(k)}).$mount("#app")},add6:function(t,e,a){"use strict";var o=a("40dc"),r=a("5bc1"),s=a("8336"),n=a("132d"),l=a("8860"),i=a("da13"),c=a("1800"),u=a("5d23"),p=a("e449"),f=a("f774"),d=a("2fa4"),v=a("2a7f"),g=function(){var t=this,e=t._self._c;return e("div",[e(f["a"],{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(l["a"],{attrs:{dense:""}},[e(i["a"],{attrs:{link:""}},[e(c["a"],[e(n["a"],[t._v("mdi-view-dashboard")])],1),e(u["a"],[e(u["b"],[t._v("Dashboard")])],1)],1),e(i["a"],{attrs:{link:""}},[e(c["a"],[e(n["a"],[t._v("mdi-cog")])],1),e(u["a"],[e(u["b"],[t._v("Settings")])],1)],1)],1)],1),e(o["a"],{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[e(r["a"],{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(v["a"],[t._v("Vue.js - Django Web Programming")]),e(d["a"]),e(s["a"],{attrs:{text:"",href:"/"}},[t._v("Home")]),e(s["a"],{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Blog")]),e(s["a"],{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),e(s["a"],{attrs:{text:""}},[t._v("/")]),e(s["a"],{attrs:{text:"",href:"/post_list.html"}},[t._v("PostList")]),e(s["a"],{attrs:{text:"",href:"/post_detail.html"}},[t._v("PostDetail")]),e(d["a"]),e(p["a"],{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:o}){return[e(s["a"],t._g(t._b({attrs:{text:""}},"v-btn",o,!1),a),[e(n["a"],[t._v("mdi-account")]),t._v(" Anonymous "),e(n["a"],[t._v("mdi-dots-vertical")])],1)]}}])},[e(l["a"],[e(i["a"],[e(u["b"],[t._v("Logout")])],1),e(i["a"],[e(u["b"],[t._v("Logout")])],1),e(i["a"],[e(u["b"],[t._v("Logout")])],1),e(i["a"],[e(u["b"],[t._v("Logout")])],1)],1)],1)],1)],1)},h=[],_={data:()=>({drawer:null}),created(){console.log("created()...")}},b=_,m=a("2877"),y=Object(m["a"])(b,g,h,!1,null,null,null);e["a"]=y.exports},cf95:function(t,e,a){}});
//# sourceMappingURL=post_detail.09c055e1.js.map