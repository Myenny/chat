(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{b656:function(t,e,a){"use strict";var r=a("e707"),s=a.n(r);s.a},e707:function(t,e,a){},e883:function(t,e,a){"use strict";e["a"]={computed:{otherUserDetails:function(){return this.$store.state.store.users[this.$route.params.otherUserId]?this.$store.state.store.users[this.$route.params.otherUserId]:{}}}}},f241:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("div",{staticClass:"absolute-left q-pt-sm"},[t.$route.fullPath.includes("/auth")?t._e():a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$route.fullPath.includes("/chat")?a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{icon:"arrow_back",flat:"",dense:"",label:"Back"}}):t._e()],1),a("q-toolbar-title",{staticClass:"absolute-center"},[t._v(t._s(t.title))]),t.userDetails.userId?a("q-btn",{staticClass:"absolute-right q-pr-sm",attrs:{icon:"account_circle","no-caps":"",flat:"",dense:""},on:{click:t.logoutUser}},[t._v("\n        Logout\n        "),a("br"),t._v("\n        "+t._s(t.userDetails.name)+"\n      ")]):a("q-btn",{staticClass:"absolute-right q-pr-sm",attrs:{to:"/auth",icon:"account_circle","no-caps":"",flat:"",dense:"",label:"Login"}})],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #fff"}},[a("q-list",{attrs:{padding:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"inbox"}})],1),a("q-item-section",[t._v("Inbox")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"star"}})],1),a("q-item-section",[t._v("Star")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"chat"}})],1),a("q-item-section",[t._v("Chat")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"map"}})],1),a("q-item-section",[t._v("Maps")])],1)],1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.userDetails.name))]),a("div",[t._v("@"+t._s(t.userDetails.name))])],1)])],1),a("q-page-container",[a("router-view")],1)],1)},s=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("6762"),a("2fdb"),a("c47a")),n=a.n(i),c=a("2f62"),o=a("e883");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={mixins:[o["a"]],name:"MyLayout",computed:u({},Object(c["d"])("store",["userDetails"]),{title:function(){var t=this.$route.fullPath;return"/"==t?"IDK":t.includes("/chat")?this.otherUserDetails.name:"/auth"==t?"Login":void 0}}),methods:u({},Object(c["b"])("store",["logoutUser"])),data:function(){return{leftDrawerOpen:!1}}},b=p,m=(a("b656"),a("2877")),d=Object(m["a"])(b,r,s,!1,null,null,null);e["default"]=d.exports}}]);