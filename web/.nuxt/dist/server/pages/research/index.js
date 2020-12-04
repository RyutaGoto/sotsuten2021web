exports.ids = [3];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("84d36f70", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=d8a0171e&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"card",style:({ 'background-image': 'url('+_vm.img+')' }),attrs:{"to":'/research/post?id=' +_vm.postID}},[_c('div',{staticClass:"bar"},[_c('div',{staticClass:"bar_top"},[_c('p',{staticClass:"name"},[_vm._v(_vm._s(_vm.name))]),_c('p',{staticClass:"laboratory"},[_vm._v(_vm._s(_vm.laboratory)+"プロダクション")])]),_c('div',{staticClass:"bar_bottom"},[_c('p',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"bar_hide"},[_c('p',{staticClass:"contents"},[_vm._v(_vm._s(_vm.contents))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=d8a0171e&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: {
    postID: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    laboratory: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    contents: {
      type: String,
      required: true
    }
  },
  computed: {
    styleVariables() {
      return {
        '--img-url': this.img
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d8a0171e",
  "23365397"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("747d667b", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d8a0171e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d8a0171e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d8a0171e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d8a0171e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_d8a0171e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:701px){.card[data-v-d8a0171e]{align-items:center;background-color:#999;background-position:50% 10%;background-repeat:no-repeat;background-size:120%;font-size:16pt;height:240px;justify-content:flex-end;margin:16px;text-decoration:none;transition:all .5s ease;width:380px}.card[data-v-d8a0171e],.card .bar[data-v-d8a0171e]{display:flex;flex-direction:column}.card .bar[data-v-d8a0171e]{background-color:#555;color:#fff;height:32%;justify-content:flex-start;transition:height .7s;width:100%}.card .bar_top[data-v-d8a0171e]{display:flex;height:16px;justify-content:space-between;margin:16px 0 8px}.card .bar_top .laboratory[data-v-d8a0171e],.card .bar_top .name[data-v-d8a0171e]{font-size:10pt;margin:0 16px}.card .bar_bottom[data-v-d8a0171e]{display:flex;height:20px;margin:0 0 16px}.card .bar_bottom .title[data-v-d8a0171e]{font-size:14pt;margin:0 16px}.card .bar_hide[data-v-d8a0171e]{font-size:12pt;margin:0 16px;opacity:0;transition:all .5s ease-in}.card:hover .bar[data-v-d8a0171e]{height:60%}.card:hover .bar_hide[data-v-d8a0171e]{opacity:1}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_69b53676_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_69b53676_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_69b53676_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_69b53676_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_id_69b53676_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 31:
/***/ (function(module) {

module.exports = JSON.parse("[{\"studentID\":\"1111000\",\"title\":\"ほわっとスマイル\",\"tag\":[\"illuminationstars\",\"鳩\"],\"department\":\"stella\",\"laboratory\":\"283\",\"name\":\"櫻木真乃\",\"img\":[\"/img/mano_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"詩が生れて、 山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"今日はぽかぽかしてて、お外でご飯が食べたくなる気分です\"},{\"studentID\":\"1989222\",\"title\":\"柔らかな微笑み\",\"tag\":[\"illuminationstars\",\"Pガチ勢\"],\"department\":\"luna\",\"laboratory\":\"283\",\"name\":\"風野灯織\",\"img\":[\"/img/hiori_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"…えっと、この日はダンスレッスンに…\"},{\"studentID\":\"1236549\",\"title\":\"金色の元気いっぱいガール\",\"tag\":[\"illuminationstars\",\"アメリカ\"],\"department\":\"sol\",\"laboratory\":\"283\",\"name\":\"八宮めぐる\",\"img\":[\"/img/meguru_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"おはよう、プロデューサー！\"},{\"studentID\":\"5555060\",\"title\":\"ばりうまかブルース\",\"tag\":\"l'antica\",\"department\":\"stella\",\"laboratory\":\"283\",\"name\":\"月岡恋鐘\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"うち、もっといろんな仕事してみたかばい！\"},{\"studentID\":\"5555060\",\"title\":\"霧・音・燦・燦\",\"tag\":\"l'antica\",\"department\":\"luna\",\"laboratory\":\"283\",\"name\":\"幽谷霧子\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"あ、あの…朝、スムージーを作ったんですけれど…いかがですか…？\"},{\"studentID\":\"5555060\",\"title\":\"お試し/みつゴコロ\",\"tag\":\"l'antica\",\"department\":\"luna\",\"laboratory\":\"283\",\"name\":\"三峰結華\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"ふわぁ…おはよう、プロデューサー\"},{\"studentID\":\"5555060\",\"title\":\"トリッキーナイト\",\"tag\":\"l'antica\",\"department\":\"luna\",\"laboratory\":\"283\",\"name\":\"田中摩美々\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"んー。なんだか、喉が渇きましたぁ\"},{\"studentID\":\"5555060\",\"title\":\"紺碧のボーダーライン\",\"tag\":\"l'antica\",\"department\":\"sol\",\"laboratory\":\"283\",\"name\":\"白瀬咲耶\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"一口にアイドルと言っても様々な輝き方\"},{\"studentID\":\"5555060\",\"title\":\"\",\"tag\":\"\",\"department\":\"\",\"laboratory\":\"283\",\"name\":\"\",\"img\":[\"/img/resaerch/_01.jpg\",\"/img/resaerch/_02.jpg\",\"/img/resaerch/_03.jpg\"],\"background\":\"山路を登りながら、智に働けば角が立つ。情に棹させば流される。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、画が出来る。意地を通せば窮屈だ。\",\"contents\":\"宇るおうレ荻都トで田歓字止死び情土せくほ瀬年ラスセ更旧ぴ告別え話俳キシロメ転試ゆごえ社58鮮申判悪しうやク。92雄フながる戦高クふー推相サメ報切ケヲツ甲国メナスヒ書面手イ案問タヤレ払可全シノ声百52発ワスミ梗哲岐ほぴ長初業ざす割残四登クる。 強ねぽず悪策ロヨヘノ厳右コクチ行小ぞぎ択断の海14模っ演2村るつほク試味ノシケユ賞材シヘ現入ニロ毎探法ぜべょあ児票徳乏咋よえ。こう考えた。とかくに人の世は住みにくい。\",\"simplifiedContents\":\"\"}]");

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=template&id=69b53676&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"title"},[_vm._ssrNode("<p data-v-69b53676>test</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title.vue?vue&type=template&id=69b53676&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69b53676",
  "54fb0e3e"
  
)

/* harmony default export */ var Title = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2b7e2714", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:701px){.container{align-items:center;background:no-repeat 50%/100% url(/background.jpg);display:flex;flex-direction:column}.container .container_explanation{background-color:#555;color:#fff;padding:16px;text-align:center;width:100%}.container .container_explanation .explanation_title{font-size:20pt}.container .container_explanation .explanation_caption{line-height:1.4em}.container .container_research{display:flex;flex-wrap:wrap;justify-content:center;margin:160px 0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/research/index.vue?vue&type=template&id=ae683d3a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"container_explanation\"><h2 class=\"explanation_title\">研究・活動の紹介</h2><p class=\"explanation_caption\">研究活動や作品紹介は当サイトにて常設展示いたします。<br>\n研究者本人からのコメントや動画での紹介も行っております。<br>\n是非ごゆっくりご覧ください。<br></p></div><div class=\"container_category\"></div>"),_vm._ssrNode("<div class=\"container_research\">","</div>",_vm._l((_vm.data),function(i,index){return _c('Card',{attrs:{"postID":index,"title":i.title,"tag":i.tag,"laboratory":i.laboratory,"name":i.name,"img":i.img[0],"contents":i.simplifiedContents}})}),1),_vm._ssrNode("<div class=\"container_pages\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/research/index.vue?vue&type=template&id=ae683d3a&lang=pug&

// EXTERNAL MODULE: ./components/Card.vue + 4 modules
var Card = __webpack_require__(25);

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(32);

// EXTERNAL MODULE: ./assets/json/research.json
var research = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/research/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var researchvue_type_script_lang_js_ = ({
  components: {
    Card: Card["default"]
  },

  data() {
    return {
      data: research
    };
  }

});
// CONCATENATED MODULE: ./pages/research/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_researchvue_type_script_lang_js_ = (researchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/research/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_researchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c54fdeb"
  
)

/* harmony default export */ var pages_research = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Card: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=index.js.map