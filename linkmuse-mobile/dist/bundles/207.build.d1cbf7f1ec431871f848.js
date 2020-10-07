webpackJsonp([207],{

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1674);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158123b8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2102)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_158123b8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CertifyingSpecialist/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-158123b8", Component.options)
  } else {
    hotAPI.reload("data-v-158123b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Сертификация'
  }
});

/***/ }),

/***/ 2102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("58adcfc7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-158123b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-158123b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.clearfix {\n  overflow: hidden;\n}\na.lm-cs-guest-section p {\n  position: absolute;\n  z-index: 2;\n  margin: auto;\n  color: #fff;\n  font-size: 40px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.25;\n  letter-spacing: 0.5px;\n}\na.lm-cs-guest-section {\n  display: block;\n  width: 50%;\n  min-height: calc(100vh - 96px);\n  font-weight: bold;\n\n  color: white;\n  font-family: sans-serif;\n  font-size: 30px;\n  text-align: center;\n  float: left;\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  text-decoration: none;\n  position: relative;\n}\na.lm-cs-guest-section:hover:after {\n  background-color: rgba(40, 42, 54, 0.32);\n}\na.lm-cs-guest-section:after {\n  opacity: 1;\n  -webkit-transition: .5s all ease-in-out;\n  transition: .5s all ease-in-out;\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(40, 42, 54, 0.64);\n  z-index: 1;\n}\n.one {\n  background-image: url(\"/dist/img/vs/photograph.jpg\")\n}\n.two {\n  background-image: url(\"/dist/img/vs/actor.jpg\")\n}\n@media screen and (max-width: 769px) {\na.lm-cs-guest-section:hover:after {\n}\na.lm-cs-guest-section p {\n    padding: 20px;\n    font-size: 20px;\n}\na.lm-cs-guest-section {\n    width: 100%;\n    padding: 0;\n    min-height: calc(50vh - 48px);\n}\n}\n.lm-cs-guest-header {\n  height: 48px;\n  line-height: 48px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.lm-cs-guest-footer {\n  font-size: 18px;\n}\n.lm-cs-guest-header, .lm-cs-guest-footer {\n  height: 48px;\n  line-height: 48px;\n  background-color: #fff;\n  text-align: center;\n  color: #808792;\n  text-transform: uppercase;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/src/views/CertifyingSpecialist/Index.vue"],"names":[],"mappings":";AA4BA;EACA,iBAAA;CACA;AAEA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;CACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,+BAAA;EACA,kBAAA;;EAEA,aAAA;EACA,wBAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,4BAAA;EACA,uBAAA;EACA,0BAAA;EAAA,4BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;CACA;AAEA;EACA,yCAAA;CACA;AAEA;EACA,WAAA;EACA,wCAAA;EAAA,gCAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;EACA,yCAAA;EACA,WAAA;CACA;AAEA;EACA,oDAAA;CACA;AAEA;EACA,+CAAA;CACA;AAEA;AACA;CAEA;AAEA;IACA,cAAA;IACA,gBAAA;CACA;AAEA;IACA,YAAA;IACA,WAAA;IACA,8BAAA;CACA;CACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;CACA;AAEA;EACA,gBAAA;CACA;AAEA;EACA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,0BAAA;CACA","file":"Index.vue","sourcesContent":["<template>\n  <section>\n    <div class=\"lm-cs-guest-header\">Сделай свой выбор</div>\n\n    <div class=\"lm-cs-guest-section clearfix\">\n      <router-link :to=\"{ name: 'certifying.customer.index' }\" class=\"lm-cs-guest-section one\">\n        <p>Я фотографирую</p>\n      </router-link>\n\n      <router-link :to=\"{ name: 'certifying.executor.index' }\" class=\"lm-cs-guest-section two\">\n        <p>Я позирую</p>\n      </router-link>\n    </div>\n    <div class=\"lm-cs-guest-footer\">\n      <img src=\"/dist/img/vs/lm-logo-text.svg\" alt=\"LinkMuse\" style=\"width: 100px;\">\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  metaInfo: {\n    title: 'Сертификация'\n  }\n}\n</script>\n\n<style lang=\"css\">\n  .clearfix {\n    overflow: hidden;\n  }\n\n  a.lm-cs-guest-section p {\n    position: absolute;\n    z-index: 2;\n    margin: auto;\n    color: #fff;\n    font-size: 40px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.25;\n    letter-spacing: 0.5px;\n  }\n\n  a.lm-cs-guest-section {\n    display: block;\n    width: 50%;\n    min-height: calc(100vh - 96px);\n    font-weight: bold;\n\n    color: white;\n    font-family: sans-serif;\n    font-size: 30px;\n    text-align: center;\n    float: left;\n    background-position: center;\n    background-size: cover;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    text-decoration: none;\n    position: relative;\n  }\n\n  a.lm-cs-guest-section:hover:after {\n    background-color: rgba(40, 42, 54, 0.32);\n  }\n\n  a.lm-cs-guest-section:after {\n    opacity: 1;\n    transition: .5s all ease-in-out;\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(40, 42, 54, 0.64);\n    z-index: 1;\n  }\n\n  .one {\n    background-image: url(\"/dist/img/vs/photograph.jpg\")\n  }\n\n  .two {\n    background-image: url(\"/dist/img/vs/actor.jpg\")\n  }\n\n  @media screen and (max-width: 769px) {\n    a.lm-cs-guest-section:hover:after {\n\n    }\n\n    a.lm-cs-guest-section p {\n      padding: 20px;\n      font-size: 20px;\n    }\n\n    a.lm-cs-guest-section {\n      width: 100%;\n      padding: 0;\n      min-height: calc(50vh - 48px);\n    }\n  }\n\n  .lm-cs-guest-header {\n    height: 48px;\n    line-height: 48px;\n    font-size: 12px;\n    font-weight: 600;\n    letter-spacing: 1px;\n  }\n\n  .lm-cs-guest-footer {\n    font-size: 18px;\n  }\n\n  .lm-cs-guest-header, .lm-cs-guest-footer {\n    height: 48px;\n    line-height: 48px;\n    background-color: #fff;\n    text-align: center;\n    color: #808792;\n    text-transform: uppercase;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("div", { staticClass: "lm-cs-guest-header" }, [
      _vm._v("Сделай свой выбор")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "lm-cs-guest-section clearfix" },
      [
        _c(
          "router-link",
          {
            staticClass: "lm-cs-guest-section one",
            attrs: { to: { name: "certifying.customer.index" } }
          },
          [_c("p", [_vm._v("Я фотографирую")])]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "lm-cs-guest-section two",
            attrs: { to: { name: "certifying.executor.index" } }
          },
          [_c("p", [_vm._v("Я позирую")])]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-cs-guest-footer" }, [
      _c("img", {
        staticStyle: { width: "100px" },
        attrs: { src: "/dist/img/vs/lm-logo-text.svg", alt: "LinkMuse" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-158123b8", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=207.build.d1cbf7f1ec431871f848.js.map