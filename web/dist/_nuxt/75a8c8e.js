(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,e,r){var content=r(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("08e6ddb6",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";r.r(e);r(200);var n={props:{postID:{type:Number,required:!0},title:{type:String,required:!0},laboratory:{type:String,required:!0},name:{type:String,required:!0},img:{type:String,required:!0}},computed:{styleVariables:function(){return{"--img-url":this.img}}}},o=(r(203),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nuxt-link",{staticClass:"card",style:{"background-image":"url("+t.img+")"},attrs:{to:"/research/post?id="+t.postID}}),r("div",{staticClass:"bar"},[r("p",{staticClass:"title"},[t._v(t._s(t.title))]),r("p",{staticClass:"name"},[t._v(t._s(t.name)+" ("+t._s(t.laboratory)+"研究室)")]),r("p",{staticClass:"category"},[t._v(t._s())])])],1)}),[],!1,null,"6bf0da73",null);e.default=component.exports},200:function(t,e,r){"use strict";var n=r(8),o=r(4),c=r(72),l=r(14),d=r(10),f=r(22),h=r(146),x=r(50),m=r(5),v=r(73),_=r(51).f,y=r(21).f,N=r(11).f,I=r(201).trim,C=o.Number,w=C.prototype,E="Number"==f(v(w)),k=function(t){var e,r,n,o,c,l,d,code,f=x(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=I(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(E?m((function(){w.valueOf.call(r)})):"Number"!=f(r))?h(new C(k(e)),r,S):k(e)},z=n?_(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;z.length>T;T++)d(C,A=z[T])&&!d(S,A)&&N(S,A,y(C,A));S.prototype=w,w.constructor=S,l(o,"Number",S)}},201:function(t,e,r){var n=r(13),o="["+r(202)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},202:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},203:function(t,e,r){"use strict";r(196)},204:function(t,e,r){(e=r(48)(!1)).push([t.i,"@media screen and (min-width:701px){.card[data-v-6bf0da73]{background-color:#999;background-position:50% 10%;background-repeat:no-repeat;background-size:120%;height:200px;margin:8px 16px;opacity:1;text-decoration:none;transition:all .5s}.bar[data-v-6bf0da73],.card[data-v-6bf0da73]{display:flex;flex-direction:column;width:300px}.bar[data-v-6bf0da73]{color:#000;height:32%;justify-content:flex-start;margin:0 16px 40px;text-align:left;transition:height .7s}.bar .title[data-v-6bf0da73]{font-size:12pt;font-weight:700;margin:6px 0}.bar .name[data-v-6bf0da73]{font-size:9pt;font-weight:500;margin:4px 0}.bar .category[data-v-6bf0da73]{display:inline;font-size:8pt;margin:4px 0}.card[data-v-6bf0da73]:hover{opacity:.5}}",""]),t.exports=e},209:function(t,e,r){var content=r(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("2b7e2714",content,!0,{sourceMap:!1})},217:function(t,e,r){"use strict";r(209)},218:function(t,e,r){(e=r(48)(!1)).push([t.i,"@media screen and (min-width:701px){#research .container{align-items:center;background:no-repeat 50%/100% url(/background.jpg);background-attachment:fixed;background-position:50% -4%;display:flex;flex-direction:column;position:relative;z-index:10}#research .container .explanation{margin:200px 0 0;padding:2vw 0 0;position:relative;text-align:center;top:20px}#research .container .explanation .explanation_title-en{color:#000;font-size:28pt;margin:-16px 0}#research .container .explanation .explanation_title-jp{background-color:#000;color:#fff;display:inline-block;font-size:16pt;margin:0 0 -30px;padding:0 8px;width:auto}#research .container .research{background:#fff;margin-bottom:120px;padding:5vh 0 0}#research .container .research .research_caption{font-size:12pt;font-weight:600;letter-spacing:2px;line-height:1.6em;padding:0 0 40px;text-align:center}#research .container .research .research_wrap{display:flex;flex-wrap:wrap;justify-content:center;margin:0 0 60px}}",""]),t.exports=e},230:function(t,e,r){"use strict";r.r(e);var n=r(198),o=r(192),c=(r(199),r(208)),l={components:{Card:n.default,Header:o.default},data:function(){return{data:c}}},d=(r(217),r(26)),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"research"}},[e("div",{staticClass:"container"},[e("Header"),this._m(0),e("div",{staticClass:"container_list research"},[this._m(1),e("div",{staticClass:"research_wrap"},this._l(this.data,(function(i,t){return e("Card",{attrs:{postID:t,title:i.title,tag:i.tag,laboratory:i.laboratory,name:i.name,img:i.img[0]}})})),1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container_list explanation"},[e("h2",{staticClass:"explanation_title-en"},[this._v("INTRODUCTION")]),e("h2",{staticClass:"explanation_title-jp"},[this._v("研究・活動の紹介")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"research_caption"},[this._v("研究活動や作品紹介は当サイトにて常設展示いたします。"),e("br"),this._v("\n研究者本人からのコメントや動画での紹介も行っております。"),e("br"),this._v("\n是非ご覧ください。"),e("br")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(192).default,Card:r(198).default})}}]);