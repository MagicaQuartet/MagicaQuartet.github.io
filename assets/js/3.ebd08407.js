(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{368:function(t,e,a){},369:function(t,e,a){},370:function(t,e,a){},371:function(t,e,a){},372:function(t,e,a){},396:function(t,e,a){"use strict";a(368)},397:function(t,e,a){"use strict";a(369)},398:function(t,e,a){"use strict";a(370)},404:function(t,e,a){"use strict";a(371)},405:function(t,e,a){"use strict";a(372)},406:function(t,e){},414:function(t,e,a){"use strict";a.r(e);a(353),a(202),a(39),a(7),a(190),a(191);var n=a(411),s=a(410),i={components:{PageEdit:a(412).a}},r=(a(396),a(56)),o=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page"},[this._t("top"),this._v(" "),e("Content",{staticClass:"theme-default-content"}),this._v(" "),e("PageEdit"),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,c={name:"PageListItem",props:["page"]},u=(a(397),{name:"PageList",components:{PageListItem:Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"page-list-item",attrs:{to:this.page.regularPath}},[e("div",{staticClass:"title"},[this._v(this._s(this.page.frontmatter.title))]),this._v(" "),e("div",{staticClass:"description"},[this._v(this._s(this.page.frontmatter.shortDescription))])])}),[],!1,null,"521dc8e0",null).exports},props:["pageList"]}),l=(a(398),Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page page-list theme-default-content"},this._l(this.pageList,(function(t){return e("PageListItem",{key:t.frontmatter.title,attrs:{page:t}})})),1)}),[],!1,null,"51642fb6",null).exports),h=a(413),g=a(401),d=(a(113),a(402),{name:"Tag",props:{tag:String,count:Number,isSelected:Boolean},methods:{handleClick:function(){this.$emit("click")}}}),f=(a(404),Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag",class:{selected:t.isSelected},on:{click:t.handleClick}},[a("div",{staticClass:"tag-name"},[t._v(t._s(t.tag))]),t._v(" "),a("div",{staticClass:"tag-count"},[t._v(t._s(t.count))])])}),[],!1,null,null,null).exports),p={name:"TagSearch",props:{value:String},methods:{updateKeyword:function(t){var e=t.toLowerCase();this.$emit("input",e)}}},m={name:"TagNavigator",components:{Tag:f,TagSearch:Object(r.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{id:"search-form"}},[a("input",{attrs:{id:"search-input"},domProps:{value:t.value},on:{input:function(e){return t.updateKeyword(e.target.value)}}})])}),[],!1,null,null,null).exports},data:function(){return{tagList:[],tagInfo:{},searchKeyword:""}},computed:{sortedTagList:function(){var t=this;return this.tagList.sort((function(e,a){return t.tagInfo[e].count<t.tagInfo[a].count}))}},mounted:function(){var t,e=Object(g.a)(this.$site.pages);try{for(e.s();!(t=e.n()).done;){var a=t.value;if(null!=a.frontmatter.tags){var n,s=Object(g.a)(a.frontmatter.tags);try{for(s.s();!(n=s.n()).done;){var i=n.value;this.tagList.includes(i)||(this.tagList.push(i),this.tagInfo[i]={count:0,isSelected:!1}),this.tagInfo[i].count++}}catch(t){s.e(t)}finally{s.f()}}}}catch(t){e.e(t)}finally{e.f()}},methods:{handleTagClick:function(t){var e=this,a=Object(h.a)({},this.tagInfo);a[t].isSelected=!a[t].isSelected,this.tagInfo=a;var n=Object.keys(this.tagInfo).filter((function(t){return e.tagInfo[t].isSelected}));this.$emit("tag-select-change",n)},showTag:function(t){return""===this.searchKeyword||t.toLowerCase().includes(this.searchKeyword)}}},v=(a(405),Object(r.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"sidebar"},[a("div",{staticClass:"title"},[t._v("Tags")]),t._v(" "),a("div",{staticClass:"tag-list"},t._l(t.sortedTagList,(function(e){return t.showTag(e)?a("Tag",{key:e,attrs:{tag:e,count:t.tagInfo[e].count,isSelected:t.tagInfo[e].isSelected},on:{click:function(a){return t.handleTagClick(e)}}}):t._e()})),1),t._v(" "),a("div",{staticClass:"tag-search"},[a("TagSearch",{model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}})],1)])}),[],!1,null,null,null).exports),b={mounted:function(){try{t=document,(e=t.createElement("script")).src="https://magicaquartet.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}catch(t){console.log(t)}var t,e}},_=a(406),S=a.n(_),C=Object(r.a)(b,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);"function"==typeof S.a&&S()(C);var w=C.exports,L={name:"Layout",components:{Home:n.a,Navbar:s.a,Page:o,PageList:l,TagNavigator:v,Disqus:w},data:function(){return{isSidebarOpen:!1,pageList:null}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]},sortedPageList:function(){return this.pageList&&this.pageList.sort((function(t,e){return new Date(t.frontmatter.writtenDate)<new Date(e.frontmatter.writtenDate)}))}},mounted:function(){var t=this;this.$page.frontmatter.tags||this.loadInitialPageList(),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{loadInitialPageList:function(){this.pageList=this.$site.pages.filter((function(t){return t.frontmatter.tags}))},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},handleTagSelectChange:function(t){var e=t.length>0?this.$site.pages.filter((function(e){return e.frontmatter.tags&&e.frontmatter.tags.filter((function(e){return t.includes(e)})).length>0})):this.$site.pages.filter((function(t){return t.frontmatter.tags}));this.pageList=e}}},$=Object(r.a)(L,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("TagNavigator",{on:{"toggle-sidebar":t.toggleSidebar,"tag-select-change":t.handleTagSelectChange}}),t._v(" "),t.$page.frontmatter.tags||"About"===t.$page.frontmatter.title?a("Page",{scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),t.$page.frontmatter.tags?a("Disqus"):t._e()]},proxy:!0}],null,!0)}):a("PageList",{attrs:{pageList:t.sortedPageList}})],1)}),[],!1,null,null,null);e.default=$.exports}}]);