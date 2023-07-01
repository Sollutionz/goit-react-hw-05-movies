"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{243:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(683),a=r(689),c=r(87),u=r(184);function o(e){var t=e.id,r=e.title,n=e.poster_path,o=n?"https://image.tmdb.org/t/p/w342".concat(n):"https://via.placeholder.com/342x512?text=Sorry+No+Poster",i=t,s=(0,a.TH)();return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(i),state:{from:s},children:(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:o,alt:r})})})})}function i(e){var t=e.movies;return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)(o,(0,n.Z)({},e),e.id)}))})})}},889:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(243),i=r(791),s=r(87),f=r(184);function p(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],n=t[1],c=(0,s.lr)(),u=(0,a.Z)(c,2)[1];return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=r.toLowerCase().trim();t||alert("Please enter some information for search"),u({search:t})},children:[(0,f.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie you wish",value:r,onChange:function(e){var t=e.target.value;n(t)},name:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})}var v=r(961);function l(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,s.lr)(),h=(0,a.Z)(l,1)[0].get("search");return(0,i.useEffect)((function(){if(h){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.xj)(h);case 3:t=e.sent,c(t),0===t.length&&h&&c(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[h]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{}),r&&(0,f.jsx)(o.Z,{movies:r})]})}},961:function(e,t,r){r.d(t,{BG:function(){return i},DC:function(){return o},r7:function(){return s},uV:function(){return f},xj:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(924).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"fc6e97341dc9ad67e721468f18ba1521"}}),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","day",e.next=4,u.get("/trending/".concat("movie","/").concat("day"));case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=889.09f05dd1.chunk.js.map