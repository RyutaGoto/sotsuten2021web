(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(t,n,e){var content=e(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(49).default)("38cb6af4",content,!0,{sourceMap:!1})},197:function(t,n,e){"use strict";var r=e(8),o=e(4),c=e(72),l=e(14),d=e(10),f=e(22),h=e(146),m=e(50),_=e(5),x=e(73),v=e(51).f,k=e(21).f,y=e(11).f,w=e(199).trim,j=o.Number,C=j.prototype,I="Number"==f(x(C)),N=function(t){var n,e,r,o,c,l,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=w(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c("Number",!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var E,z=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof z&&(I?_((function(){C.valueOf.call(e)})):"Number"!=f(e))?h(new j(N(n)),e,z):N(n)},D=r?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;D.length>O;O++)d(j,E=D[O])&&!d(z,E)&&y(z,E,k(j,E));z.prototype=C,C.constructor=z,l(o,"Number",z)}},198:function(t,n,e){"use strict";e.r(n);e(197);var r={props:{postID:{type:Number,required:!0},title:{type:String,required:!0},laboratory:{type:String,required:!0},name:{type:String,required:!0},img:{type:String,required:!0}},computed:{styleVariables:function(){return{"--img-url":this.img}}}},o=(e(201),e(26)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"card_components"}},[e("nuxt-link",{staticClass:"card",style:{"background-image":"url("+t.img+")"},attrs:{to:"/research/post/"+t.postID}}),e("div",{staticClass:"bar"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),e("p",{staticClass:"name"},[t._v(t._s(t.name)+" ("+t._s(t.laboratory)+"研究室)")]),e("p",{staticClass:"category"},[t._v(t._s())])])],1)}),[],!1,null,"3176fc05",null);n.default=component.exports},199:function(t,n,e){var r=e(13),o="["+e(200)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e}};t.exports={start:d(1),end:d(2),trim:d(3)}},200:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},201:function(t,n,e){"use strict";e(196)},202:function(t,n,e){(n=e(48)(!1)).push([t.i,'@media screen and (max-width:700px){#card_components[data-v-3176fc05]{width:100vw}#card_components .card[data-v-3176fc05]{background-color:#999;background-position:50% 10%;background-repeat:no-repeat;background-size:120%;display:flex;flex-direction:column;height:200px;margin:8px 0;opacity:1;text-decoration:none;transition:all .5s;width:100%}#card_components .card[data-v-3176fc05]:before{display:block;width:100%;height:200px;content:" ";position:absolute;background:linear-gradient(180deg,transparent,70%,rgba(0,0,0,.6))}.bar[data-v-3176fc05]{color:#fff;display:flex;flex-direction:column;height:32%;justify-content:flex-start;margin:0 auto;position:relative;text-align:left;top:-75px;transition:height .7s;width:320px}.bar .title[data-v-3176fc05]{font-size:10pt;font-weight:700;margin:6px 0 2px}.bar .name[data-v-3176fc05]{font-size:8pt;font-weight:600;margin:2px 0 0}.bar .category[data-v-3176fc05]{display:none}}@media screen and (min-width:701px){.card[data-v-3176fc05]{background-color:#999;background-position:50% 10%;background-repeat:no-repeat;background-size:120%;height:200px;margin:8px 16px;opacity:1;text-decoration:none;transition:all .5s}.bar[data-v-3176fc05],.card[data-v-3176fc05]{display:flex;flex-direction:column;width:300px}.bar[data-v-3176fc05]{color:#000;height:32%;justify-content:flex-start;margin:0 16px 40px;text-align:left;transition:height .7s}.bar .title[data-v-3176fc05]{font-size:12pt;font-weight:700;margin:6px 0}.bar .name[data-v-3176fc05]{font-size:9pt;font-weight:500;margin:4px 0}.bar .category[data-v-3176fc05]{display:inline;font-size:8pt;margin:4px 0}.card[data-v-3176fc05]:hover{opacity:.5}}',""]),t.exports=n},210:function(t,n,e){var content=e(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(49).default)("747d667b",content,!0,{sourceMap:!1})},211:function(t,n,e){var content=e(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(49).default)("60835984",content,!0,{sourceMap:!1})},227:function(t,n,e){"use strict";e(210)},228:function(t,n,e){(n=e(48)(!1)).push([t.i,"",""]),t.exports=n},229:function(t){t.exports=JSON.parse('[{"studentID":"1111000","title":"ほわっとスマイル","tag":["illuminationstars","鳩"],"department":"stella","course":"なんとか","laboratory":"283","name":"櫻木真乃","img":["/img/mano_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"詩が生れて、 山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"今日はぽかぽかしてて、お外でご飯が食べたくなる気分です"},{"studentID":"1989222","title":"柔らかな微笑み","tag":["illuminationstars","Pガチ勢"],"department":"luna","course":"なんとか","laboratory":"283","name":"風野灯織","img":["/img/hiori_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"…えっと、この日はダンスレッスンに…"},{"studentID":"1236549","title":"金色の元気いっぱいガール","tag":["illuminationstars","アメリカ"],"department":"sol","course":"かんとか","laboratory":"283","name":"八宮めぐる","img":["/img/meguru_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"おはよう、プロデューサー！"},{"studentID":"5555060","title":"ばりうまかブルース","tag":"l\'antica","department":"stella","course":"","laboratory":"283","name":"月岡恋鐘","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"うち、もっといろんな仕事してみたかばい！"},{"studentID":"5555060","title":"霧・音・燦・燦","tag":"l\'antica","department":"luna","course":"","laboratory":"283","name":"幽谷霧子","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"あ、あの…朝、スムージーを作ったんですけれど…いかがですか…？"},{"studentID":"5555060","title":"お試し/みつゴコロ","tag":"l\'antica","department":"luna","course":"","laboratory":"283","name":"三峰結華","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"ふわぁ…おはよう、プロデューサー"},{"studentID":"5555060","title":"トリッキーナイト","tag":"l\'antica","department":"luna","course":"","laboratory":"283","name":"田中摩美々","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"んー。なんだか、喉が渇きましたぁ"},{"studentID":"5555060","title":"紺碧のボーダーライン","tag":"l\'antica","department":"sol","course":"","laboratory":"283","name":"白瀬咲耶","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":"一口にアイドルと言っても様々な輝き方"},{"studentID":"5555060","title":"","tag":"","department":"","course":"","laboratory":"283","name":"","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":""},{"studentID":"5555060","title":"","tag":"","department":"","course":"","laboratory":"283","name":"","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":""},{"studentID":"5555060","title":"","tag":"","department":"","course":"","laboratory":"283","name":"","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":""},{"studentID":"5555060","title":"","tag":"","department":"","course":"","laboratory":"283","name":"","img":["/img/resaerch/_01.jpg","/img/resaerch/_02.jpg","/img/resaerch/_03.jpg"],"background":"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。","contents":"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。","simplifiedContents":""}]')},230:function(t,n,e){"use strict";e(211)},231:function(t,n,e){(n=e(48)(!1)).push([t.i,'@media screen and (max-width:700px){#top .container{align-items:center;background:no-repeat 50%/100% url(/background-top-sp.png);background-position:50% 0;display:flex;flex-direction:column;margin:0 auto;z-index:-1}#top .container .container_list .list_card{display:flex;justify-content:space-evenly;width:90%}#top .container .container_list .list_title-en{color:#000;font-size:20pt;margin:-8px 0}#top .container .container_list .list_title-jp{color:#fff;background-color:#000;font-size:12pt;margin:0 0 4vw;padding:2px 5px;width:auto}#top .container .container_list .list_caption{color:#000;font-feature-settings:"palt" 1;font-size:10pt;font-weight:600;line-height:1.8;margin:0;padding:24px 8%;text-align:left}#top .container .container_list .container_link{align-items:center;background-color:#fff;display:flex;flex-direction:row;outline:3px solid #000;padding:0 5% 0 16%;transition:background-color .3s,border-top .3s,border-right .3s;width:50%}#top .container .container_list .container_link:hover{background-color:#000}#top .container .container_list .container_link:hover .arrow-right{border-top:2px solid #fff;border-right:2px solid #fff}#top .container .container_list .container_link a{color:#000;font-size:12pt;font-weight:700;padding:12px 50px 12px 30px;text-decoration:none;transition:color .3s}#top .container .container_list .container_link a:hover{color:#fff}#top .container .container_list .container_link .arrow-right{border-top:2px solid #000;border-right:2px solid #000;width:6px;height:6px;transform:rotate(45deg)}#top .container .top{height:100vh}#top .container .top .container_list-wrap{display:none}#top .container .hamon{align-items:center;display:flex;flex-direction:column;margin-bottom:100px;padding:0;width:80%}#top .container .hamon .list_caption{padding:0}#top .container .introduction{margin-bottom:100px;justify-content:center;width:80%}#top .container .introduction,#top .container .introduction .introduction_right{align-items:center;display:flex;flex-direction:column}#top .container .introduction .introduction_right .list_caption{margin:0;padding:0}#top .container .session{align-items:center;display:flex;flex-direction:column;margin-bottom:100px;padding:10vw 0;width:80%}#top .container .session .list_caption{padding:0}}@media screen and (min-width:701px){#top .container{align-items:center;background:no-repeat 50%/100% url(/background-top.png);background-position:50% -4%;display:flex;flex-direction:column;margin:0 auto;z-index:-1}#top .container:before{display:block;width:100%;height:100%;content:" ";position:absolute;background:linear-gradient(180deg,transparent,80%,hsla(0,0%,100%,.6))}#top .container .container_list .list_card{display:flex;justify-content:space-evenly;width:90%}#top .container .container_list .list_title-en{color:#000;font-size:28pt;margin:-16px 0}#top .container .container_list .list_title-jp{color:#fff;background-color:#000;font-size:16pt;margin:0 0 4vw;padding:5px 8px;width:auto}#top .container .container_list .list_caption{color:#000;font-feature-settings:"palt" 1;font-size:12pt;font-weight:600;line-height:1.8;margin:0;padding:24px 8%}#top .container .container_list .container_link{align-items:center;background-color:#fff;display:flex;flex-direction:row;outline:3px solid #000;padding:0 30px 0 100px;transition:background-color .3s,border-top .3s,border-right .3s}#top .container .container_list .container_link:hover{background-color:#000}#top .container .container_list .container_link:hover .arrow-right{border-top:2px solid #fff;border-right:2px solid #fff}#top .container .container_list .container_link a{color:#000;font-size:12pt;font-weight:700;padding:12px 100px 12px 30px;text-decoration:none;transition:color .3s}#top .container .container_list .container_link a:hover{color:#fff}#top .container .container_list .container_link .arrow-right{border-top:2px solid #000;border-right:2px solid #000;width:8px;height:8px;transform:rotate(45deg)}#top .container .top{height:100vh}#top .container .top .container_list-wrap{align-items:flex-end;display:flex;flex-direction:row;height:95%;justify-content:center}#top .container .top .container_list-wrap a{color:#000;font-size:13pt;font-weight:700;margin:0 80px;padding:10px;text-decoration:none;transition:background-color .3s,color .3s;z-index:30}#top .container .top .container_list-wrap a:hover{background-color:#000;color:#fff}#top .container .hamon{align-items:center;display:flex;flex-direction:column;height:50vh;padding:10vw 0 0;text-align:center;width:80%}#top .container .hamon .list_caption{padding:0}#top .container .introduction{height:70vh;justify-content:center;width:80%}#top .container .introduction,#top .container .introduction .introduction_right{align-items:center;display:flex;flex-direction:column}#top .container .introduction .introduction_right .list_caption{margin:0;padding:0;text-align:center}#top .container .session{align-items:center;display:flex;flex-direction:column;height:50vh;padding:10vw 0;text-align:center;width:80%}#top .container .session .list_caption{padding:0}}',""]),t.exports=n},232:function(t,n,e){"use strict";e.r(n);var r=e(198),o={},c=(e(227),e(26)),l=(Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("p",[this._v("test")])])}],!1,null,"69b53676",null).exports,e(229)),d={components:{Card:r.default},data:function(){return{data:l}}},f=(e(230),Object(c.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"top"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"container_list top"},[e("div",{staticClass:"container_list-wrap"},[e("nuxt-link",{attrs:{to:"/research"}},[t._v("研究紹介")]),e("nuxt-link",{attrs:{to:"/session"}},[t._v("オンラインセッション")]),e("nuxt-link",{attrs:{to:"/contact"}},[t._v("お問い合わせ")])],1)]),t._m(0),e("div",{staticClass:"container_list introduction"},[t._m(1),e("div",{staticClass:"introduction_left"}),e("div",{staticClass:"container_link"},[e("nuxt-link",{attrs:{to:"/research"}},[t._v("MORE")]),e("div",{staticClass:"arrow-right"})],1)]),e("div",{staticClass:"container_list session"},[e("div",{staticClass:"session_right"}),e("div",{staticClass:"session_left"}),e("h2",{staticClass:"list_title-en"},[t._v("ONLINE SESSION")]),e("h2",{staticClass:"list_title-jp"},[t._v("オンラインセッション")]),t._m(2),e("div",{staticClass:"container_link"},[e("nuxt-link",{attrs:{to:"/session"}},[t._v("MORE")]),e("div",{staticClass:"arrow-right"})],1)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container_list hamon"},[n("h2",{staticClass:"list_title-en"},[this._v("ABOUT")]),n("h2",{staticClass:"list_title-jp"},[this._v("波紋")]),n("p",{staticClass:"list_caption"},[this._v("私たち公立はこだて未来大学情報デザインコースは、情報社会で豊かに生きるためのデザイン理論や表現方法に加え、情報科学屋認知科学の最新の理論と実践を学んできました。"),n("br"),n("br"),this._v("\nこれまでの集大成として「波紋」をテーマとした社会に一石を投じる新たなデザインの可能性を提示する展覧会を開催します。"),n("br"),n("br"),this._v("\n本展覧会が社会へ波紋を呼び、形を変えながら新たな波を起こし、起こし続けるきっかけとなることを期待しています。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"introduction_right"},[n("h2",{staticClass:"list_title-en"},[this._v("INTRODUCTION")]),n("h2",{staticClass:"list_title-jp"},[this._v("研究・活動の紹介")]),n("p",{staticClass:"list_caption"},[this._v("今年度の卒業展覧会は新型コロナウイルスの感染拡大防止の観点から、対面形式ではなくオンラインでの開催といたします。"),n("br"),n("br"),this._v("\nそのため、研究活動や作品紹介は当サイトにて常設展示いたします。研究者本人からのコメントや動画での紹介も行っております。"),n("br"),this._v("是非ごゆっくりご覧ください。"),n("br"),n("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"list_caption"},[this._v("出展者と来場者の皆様との対話の場は日時を設定の上、実施いたします。（詳細はこちらをご覧ください）"),n("br"),n("br"),this._v("\n例年と異なる形式となりますが、より多くの方々にご来場いただけることを楽しみにしております。"),n("br"),n("br")])}],!1,null,null,null));n.default=f.exports}}]);