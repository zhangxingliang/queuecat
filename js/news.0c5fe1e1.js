(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{3147:function(t,s,e){},"5b08":function(t,s,e){t.exports=e.p+"img/banner.83871b06.png"},"657d":function(t,s,e){"use strict";var n=e("3147"),a=e.n(n);a.a},a2f9:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"news"},[e("div",{staticClass:"banner"},[e("img",{staticClass:"banner-img",attrs:{src:t.bannerUrl}})]),e("el-row",t._l(t.rows,function(s,n){return e("el-col",{key:n,staticStyle:{"margin-top":"20px"},attrs:{offset:4,span:16}},[e("el-card",{scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"card-header"},[e("h3",[t._v(t._s(s.title))])])]},proxy:!0}],null,!0)},[e("el-row",[s.images?e("el-col",{attrs:{span:24}},[e("div",[e("el-carousel",{staticClass:"carousel",attrs:{interval:2e3,type:"card",height:"300px"}},t._l(s.images,function(t){return e("el-carousel-item",{key:t},[e("img",{attrs:{src:t,height:"500"}})])}),1),e("div",{staticClass:"card-content",domProps:{innerHTML:t._s(s.content)}})],1)]):[e("el-col",{attrs:{span:12}},[e("div",[s.image?e("img",{staticClass:"image",staticStyle:{height:"500px"},attrs:{src:s.image}}):e("img",{attrs:{height:"500",src:t.defaultImgUrl}})])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"card-content",domProps:{innerHTML:t._s(s.content)}})])]],2)],1)],1)}),1)],1)},a=[],r={data:function(){return{defaultImgUrl:e("cf49"),rows:[],bannerUrl:e("5b08")}},created:function(){var t=this;this.$http.get("./json/news.json").then(function(s){t.rows=s.data})}},i=r,c=(e("657d"),e("2877")),l=Object(c["a"])(i,n,a,!1,null,null,null);s["default"]=l.exports},cf49:function(t,s,e){t.exports=e.p+"img/default.60719310.jpg"}}]);
//# sourceMappingURL=news.0c5fe1e1.js.map