(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{578:function(e,t,r){},614:function(e,t,r){"use strict";r(578)},644:function(e,t,r){"use strict";r.r(t);r(38),r(50),r(51),r(161);var i=r(47),n=r(30),a=r(164),c=r.n(a),o={props:{aside:{type:Boolean,default:!0},tree:{type:Array}},mounted:function(){var e=this;this.emitPrereqLinks();var t=function(e){e.target.setAttribute("data-header-anchor-text","Copied!"),c()(e.target.href),setTimeout((function(){e.target.setAttribute("data-header-anchor-text","Copy link")}),4e3),e.preventDefault()};if(document.querySelectorAll('h1[id*="requisite"], h2[id*="requisite"], h3[id*="requisite"], h4[id*="requisite"], h5[id*="requisite"], h6[id*="requisite"]').forEach((function(t){t.addEventListener("click",e.prereqToggle)})),document.querySelectorAll(".content__default a.header-anchor").forEach((function(e){e.setAttribute("data-header-anchor-text","Copy link"),e.addEventListener("click",t)})),window.location.hash){var r=document.querySelector(window.location.hash);r&&r.scrollIntoView()}},methods:{emitPrereqLinks:function(){var e=Object(i.a)(document.querySelectorAll("[prereq]")).map((function(e){var t=e.querySelector("[href]");return{href:t.getAttribute("href"),text:t.innerText}}));this.$emit("prereq",e)},prereqToggle:function(e){e.target.classList.contains("header-anchor")||(e.target.classList.toggle("prereqTitleShow"),document.querySelectorAll("[prereq]").forEach((function(e){e.classList.toggle("prereqLinkShow")})))}},computed:{noAside:function(){return!this.aside},linkPrevNext:function(){var e=this;if(this.tree){var t={};return function r(i){return i.forEach((function(i){var a=i.children;if(a){var c=Object(n.findIndex)(a,["regularPath",e.$page.path]);return c>=0&&a[c-1]&&(t.prev=a[c-1]),c>=0&&a[c+1]&&(t.next=a[c+1]),r(i.children)}}))}(this.tree),t}}}},s=(r(614),r(1)),u=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"search__container"},[r("div",{staticClass:"search",on:{click:function(t){return e.$emit("search",!0)}}},[r("div",{staticClass:"search__icon"},[r("icon-search")],1),r("div",{staticClass:"search__text"},[e._v("Search")])])]),r("div",{staticClass:"container"},[e._t("default"),e.$frontmatter.cards?r("tm-content-cards"):e._e()],2)])}),[],!1,null,"c85ed208",null);t.default=u.exports}}]);