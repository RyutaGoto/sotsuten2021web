(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("84d36f70",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";r.r(e);r(195);var n={props:{postID:{type:Number,required:!0},title:{type:String,required:!0},laboratory:{type:String,required:!0},name:{type:String,required:!0},img:{type:String,required:!0},contents:{type:String,required:!0}},computed:{styleVariables:function(){return{"--img-url":this.img}}}},o=(r(198),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"card",style:{"background-image":"url("+t.img+")"},attrs:{to:"/research/post?id="+t.postID}},[r("div",{staticClass:"bar"},[r("div",{staticClass:"bar_top"},[r("p",{staticClass:"name"},[t._v(t._s(t.name))]),r("p",{staticClass:"laboratory"},[t._v(t._s(t.laboratory)+"プロダクション")])]),r("div",{staticClass:"bar_bottom"},[r("p",{staticClass:"title"},[t._v(t._s(t.title))])]),r("div",{staticClass:"bar_hide"},[r("p",{staticClass:"contents"},[t._v(t._s(t.contents))])])])])}),[],!1,null,"d8a0171e",null);e.default=component.exports},195:function(t,e,r){"use strict";var n=r(8),o=r(4),c=r(72),d=r(14),l=r(10),f=r(22),h=r(146),v=r(50),m=r(5),x=r(73),_=r(51).f,y=r(21).f,N=r(11).f,I=r(196).trim,C=o.Number,E=C.prototype,w="Number"==f(x(E)),k=function(t){var e,r,n,o,c,d,l,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=I(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(d=(c=f.slice(2)).length,l=0;l<d;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(w?m((function(){E.valueOf.call(r)})):"Number"!=f(r))?h(new C(k(e)),r,S):k(e)},F=n?_(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;F.length>M;M++)l(C,A=F[M])&&!l(S,A)&&N(S,A,y(C,A));S.prototype=E,E.constructor=S,d(o,"Number",S)}},196:function(t,e,r){var n=r(13),o="["+r(197)+"]",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(d,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},197:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},198:function(t,e,r){"use strict";r(192)},199:function(t,e,r){(e=r(48)(!1)).push([t.i,"@media screen and (min-width:701px){.card[data-v-d8a0171e]{align-items:center;background-color:#999;background-position:50% 10%;background-repeat:no-repeat;background-size:120%;font-size:16pt;height:240px;justify-content:flex-end;margin:16px;text-decoration:none;transition:all .5s ease;width:380px}.card[data-v-d8a0171e],.card .bar[data-v-d8a0171e]{display:flex;flex-direction:column}.card .bar[data-v-d8a0171e]{background-color:#555;color:#fff;height:32%;justify-content:flex-start;transition:height .7s;width:100%}.card .bar_top[data-v-d8a0171e]{display:flex;height:16px;justify-content:space-between;margin:16px 0 8px}.card .bar_top .laboratory[data-v-d8a0171e],.card .bar_top .name[data-v-d8a0171e]{font-size:10pt;margin:0 16px}.card .bar_bottom[data-v-d8a0171e]{display:flex;height:20px;margin:0 0 16px}.card .bar_bottom .title[data-v-d8a0171e]{font-size:14pt;margin:0 16px}.card .bar_hide[data-v-d8a0171e]{font-size:12pt;margin:0 16px;opacity:0;transition:all .5s ease-in}.card:hover .bar[data-v-d8a0171e]{height:60%}.card:hover .bar_hide[data-v-d8a0171e]{opacity:1}}",""]),t.exports=e},204:function(t,e,r){var content=r(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("45f3474c",content,!0,{sourceMap:!1})},208:function(t,e,r){"use strict";r(204)},209:function(t,e,r){(e=r(48)(!1)).push([t.i,"",""]),t.exports=e},216:function(t,e,r){"use strict";r.r(e);var n={components:{Card:r(193).default}},o=(r(208),r(26)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[this._v("ここにお問い合わせ")]),e("Card")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(193).default})}}]);