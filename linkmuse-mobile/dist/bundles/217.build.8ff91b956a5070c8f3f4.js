webpackJsonp([217],{

/***/ 1436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(1895);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eb2bc79_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(2706);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eb2bc79_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eb2bc79", Component.options)
  } else {
    hotAPI.reload("data-v-7eb2bc79", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    title: 'Главная'
  },
  data: function data() {
    return {
      slideVS: false,
      sliderTimer: false,
      sliderStart: false
    };
  },
  mounted: function mounted() {
    // this.initSlider()
    this._destroyToken({ reload: false });
  },
  beforeDestroy: function beforeDestroy() {
    // clearInterval(this.sliderTimer)
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    _destroyToken: 'auth/destroyToken'
  }), {
    initSlider: function initSlider() {
      clearInterval(this.sliderTimer);
      this.sliderTimer = setInterval(this.switchSlide, 5000);
    },
    switchSlide: function switchSlide() {
      this.initSlider();
      this.sliderStart = true;
      this.slideVS = !this.slideVS;
    }
  })
});

/***/ }),

/***/ 2706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-main-page" }, [
    _c("div", { staticClass: "lm-block-invisible" }),
    _vm._v(" "),
    _c("div", { staticClass: "lm-block-fixed" }, [
      _c("div", { staticClass: "lm-m-header" }, [
        _c("div", { staticClass: "wrapper" }, [
          _c(
            "div",
            { staticClass: "lm-m-center" },
            [
              _c(
                "router-link",
                { staticClass: "lm-m-logo", attrs: { to: { name: "index" } } },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "129",
                        height: "28",
                        fill: "none",
                        viewBox: "0 0 129 28"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          fill: "#fff",
                          "fill-rule": "evenodd",
                          d:
                            "M0 14.002C-.001 6.271 6.265.002 13.997 0 21.725.01 27.988 6.272 28 14c0 7.732-6.267 14-13.999 14C6.27 28 .001 21.734 0 14.002zM1.08 14c0 7.134 5.783 12.917 12.916 12.917 7.13-.01 12.907-5.787 12.917-12.917 0-7.134-5.783-12.917-12.917-12.917C6.863 1.083 1.08 6.866 1.08 14z",
                          "clip-rule": "evenodd"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          fill: "#fff",
                          "fill-rule": "evenodd",
                          d:
                            "M20.609 8.076a.744.744 0 0 0-.852.147l-5.75 5.881-5.752-5.881a.734.734 0 0 0-.852-.147.693.693 0 0 0-.39.755l2.03 10.922c.01.051.03.1.058.144.388 1.1 2.812 1.603 4.907 1.603 2.974 0 4.601-.797 4.885-1.585l.016-.026.014-.029a.427.427 0 0 0 .03-.098l2.035-10.93a.693.693 0 0 0-.391-.756h.012zm-2.348 10.4l-3.637-3.722 5.35-5.476-1.713 9.199zm-2.132-.634l.306.056-2.428-2.494-2.442 2.497.357-.062h.055l.19-.03.134-.018c.084-.011.168-.02.25-.029h.06a23.69 23.69 0 0 1 .612-.047h.155c.238-.017.437-.017.626-.017h.019c.076 0 .16.003.25.007a10.598 10.598 0 0 0 .36.01h.168c.217.015.406.03.577.047h.147c.14.018.299.039.445.062h.044l.115.018zM8.014 9.278l5.35 5.476-3.637 3.723-1.713-9.199zm1.933 10.307c0 .309 1.372 1.029 4.04 1.03 2.714 0 4.008-.727 4.042-1.02a.24.24 0 0 0-.052-.107.076.076 0 0 1-.019-.023l-.03-.03c-.363-.352-1.48-.755-3.166-.855h-.76l-.019-.07v.07h-.8l-.266.017c-1.566.133-2.506.506-2.84.8a.552.552 0 0 0-.13.153.07.07 0 0 0 0 .035z",
                          "clip-rule": "evenodd"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          fill: "#fff",
                          d:
                            "M43.526 20.57h-4.088c-.399.044-.799-.083-1.094-.348a1.45 1.45 0 0 1-.336-1.089V8.761c0-.995.39-1.5 1.19-1.5.802 0 1.188.505 1.188 1.535v9.641h3.008c1.072 0 1.58.348 1.58 1.068 0 .72-.483 1.082-1.448 1.082v-.017zM48.618 20.695c-.798 0-1.187-.487-1.187-1.479V8.761c0-.995.39-1.5 1.187-1.5s1.187.505 1.187 1.5v10.435c0 .991-.386 1.495-1.187 1.495v.004zM63.34 20.75a1.69 1.69 0 0 1-1.355-.776l-6.35-8.577v7.854c0 .957-.408 1.444-1.206 1.444-.797 0-1.17-.487-1.17-1.461V8.698c0-.957.358-1.444 1.074-1.444.534.03 1.02.314 1.298.759l6.437 8.522V8.76c0-.995.39-1.5 1.169-1.5.78 0 1.208.505 1.208 1.5v10.654c0 .883-.357 1.335-1.072 1.335h-.032zM76.73 20.715c-.358 0-.798-.236-1.263-.695l-5.46-5.566v4.804c0 .974-.408 1.464-1.206 1.464-.797 0-1.173-.49-1.173-1.464V8.76c0-.994.394-1.499 1.173-1.499.78 0 1.206.487 1.206 1.482v3.843l4.96-4.64c.482-.452.89-.695 1.204-.695.3-.012.59.098.802.303.211.206.326.488.314.779 0 .31-.26.695-.78 1.175l-4.344 3.955 5.16 5.144c.314.276.507.658.54 1.068 0 .287-.12.562-.335.76a1.09 1.09 0 0 1-.799.284v-.004zM106.779 7.352h-.029a1.349 1.349 0 0 0-.497-.084 1.01 1.01 0 0 0-.886.407c-.21.323-.308.702-.283 1.082v6.445a4.882 4.882 0 0 1-.358 2.004c0 .028-.025.059-.039.087-.06.116-.13.227-.211.33-.06.081-.124.158-.193.23l-.157.142a2.1 2.1 0 0 1-.286.199c-.061.034-.122.07-.19.1a2.68 2.68 0 0 1-.604.195 2.92 2.92 0 0 1-.311.049c-.122 0-.251.024-.383.028h-.157a4.52 4.52 0 0 1-.784-.07c-1.005-.173-1.792-.938-1.97-1.916a5.971 5.971 0 0 1-.147-1.392V8.743c0-.73-.221-1.186-.654-1.391-.17-.067-.353-.1-.536-.098-.784 0-1.17.487-1.17 1.482v6.609a5.762 5.762 0 0 0 .748 3.03l.071.118c.018.028.04.052.054.08.17.248.362.481.576.695.983.957 2.099 1.427 3.808 1.427 1.709 0 2.843-.47 3.808-1.41.966-.938 1.467-2.257 1.467-3.937V8.74c0-.759-.229-1.221-.683-1.392l-.004.004zM116.999 19.63a5.318 5.318 0 0 1-3.401 1.065 8.114 8.114 0 0 1-2.432-.376c-1.073-.348-1.616-.852-1.616-1.482a.975.975 0 0 1 .322-.751c.214-.194.503-.29.793-.261.295.05.582.135.855.254l.926.348c.476.147.971.22 1.47.219a2.063 2.063 0 0 0 1.43-.578c.38-.354.595-.844.594-1.356 0-.776-.54-1.37-1.616-1.805l-3.008-1.2a3.023 3.023 0 0 1-1.612-2.783 3.257 3.257 0 0 1 1.355-2.744 5.016 5.016 0 0 1 3.064-.922c1.245 0 2.21.254 2.861.758.336.21.543.569.555.957a.838.838 0 0 1-.297.695 1.15 1.15 0 0 1-.78.268 4.014 4.014 0 0 1-1.151-.323 4.097 4.097 0 0 0-1.32-.327 2.053 2.053 0 0 0-1.298.4 1.374 1.374 0 0 0-.518 1.155c-.017.381.181.742.518.939.468.258.959.476 1.466.65 1.022.336 2.001.784 2.918 1.336a3.18 3.18 0 0 1 1.338 2.727 3.83 3.83 0 0 1-1.431 3.13l.015.007zM127.494 20.57h-5.113c-1.037 0-1.431-.349-1.431-1.371V8.903c0-1.009.461-1.516 1.409-1.516h5.167c.966 0 1.449.361 1.449 1.085 0 .72-.483 1.081-1.466 1.081h-4.184v3.162h3.905c.983 0 1.466.348 1.466 1.044 0 .695-.483 1.043-1.466 1.043h-3.92v3.635h4.242c.961 0 1.448.348 1.448 1.103 0 .754-.501 1.043-1.506 1.043v-.014zM93.794 8.482a.364.364 0 0 0 0-.062v-.067a.233.233 0 0 1 0-.048c0-.025 0-.052-.018-.077V8.19l-.025-.077v-.038l-.032-.073v-.035c0-.024-.025-.045-.036-.066l-.029-.041-.039-.056-.032-.045-.04-.046-.107-.059a.56.56 0 0 0-.046-.045l-.04-.035-.06-.045-.036-.028a.586.586 0 0 0-.079-.048h-.021l-.086-.042h-.029l-.085-.031h-.033l-.078-.021h-.662l-.075.024h-.043l-.068.031-.046.021-.058.032-.053.03-.047.032-.053.038-.04.032-.05.055-.035.035-.047.052a.502.502 0 0 0-.036.046.584.584 0 0 0-.039.048l-.04.06v.03l-4.509 8.909-4.513-8.908a.087.087 0 0 0 0-.032c0-.02-.025-.041-.039-.059a.605.605 0 0 0-.04-.048.52.52 0 0 0-.035-.046l-.047-.052-.035-.035-.054-.048-.04-.032-.056-.038-.047-.031-.054-.032-.057-.03-.046-.022-.068-.031h-.043l-.075-.024h-.551a.417.417 0 0 0-.064 0h-.047l-.079.02h-.032l-.086.032h-.028l-.086.042-.075.048-.04.028-.057.045-.043.035-.046.045a.247.247 0 0 0-.04.046l-.042.045-.032.045-.04.056a.256.256 0 0 0-.025.041.417.417 0 0 0-.04.066v.035l-.031.073v.039l-.025.076V8.298a.233.233 0 0 1 0 .049.429.429 0 0 1 0 .066v10.994c.035.658.594 1.173 1.27 1.173.678 0 1.236-.515 1.272-1.173v-6.26l3.219 6.747c.223.373.629.607 1.072.616h.083a1.28 1.28 0 0 0 1.072-.616l3.219-6.747v6.26c0 .684.57 1.239 1.273 1.239s1.273-.555 1.273-1.239V8.524v-.042h-.143z"
                        }
                      })
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-main-slider" }, [
            _c(
              "div",
              {
                class: [
                  "lm-m-main-slider--item",
                  _vm.sliderStart ? (!_vm.slideVS ? "active" : "fadeout") : ""
                ]
              },
              [
                _c("h2", [
                  _vm._v(
                    _vm._s(_vm.$t("mainpage.community.creative-community"))
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-m-desc" }, [
                  _vm._v(
                    _vm._s(_vm.$t("mainpage.community.all-in-one")) +
                      "\n              "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "lm-m-header-btn lm-m-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "lm-primary-button error",
                        attrs: { to: { name: "register" } },
                        nativeOn: {
                          click: function($event) {
                            return _vm._destroyToken({ reload: false })
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("mainpage.community.join")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "lm-link-button",
                        attrs: { to: { name: "login" } },
                        nativeOn: {
                          click: function($event) {
                            return _vm._destroyToken({ reload: false })
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("mainpage.community.sign-in")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "lm-relative" }, [
                  _c("a", {
                    directives: [
                      {
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#content",
                        expression: "'#content'"
                      }
                    ],
                    staticClass: "lm-down-arrow",
                    attrs: { href: "javascript:void(0)" }
                  })
                ]),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src: "/dist/img/main/lm-il-2.svg",
                    alt: "Сообщество творческого роста"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.sliderStart,
                    expression: "sliderStart"
                  }
                ],
                class: [
                  "lm-m-main-slider--item",
                  "lm-lm-vs-slide",
                  _vm.sliderStart ? (_vm.slideVS ? "active" : "fadeout") : ""
                ],
                staticStyle: { display: "none" }
              },
              [
                _c("h2", [
                  _vm._v(_vm._s(_vm.$t("mainpage.casting.pass-casting")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-m-desc" }, [
                  _vm._v(
                    _vm._s(_vm.$t("mainpage.casting.portfolio")) +
                      "\n              "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "lm-m-header-btn lm-m-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "lm-primary-button error",
                        attrs: { to: { name: "register" } },
                        nativeOn: {
                          click: function($event) {
                            return _vm._destroyToken({ reload: false })
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("mainpage.casting.more-button")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "lm-relative" }, [
                  _c("a", {
                    directives: [
                      {
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#content",
                        expression: "'#content'"
                      }
                    ],
                    staticClass: "lm-down-arrow",
                    attrs: { href: "javascript:void(0)" }
                  })
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "lm-vs-slide-image",
                  attrs: {
                    src: "/dist/img/main/lm-il-2.1.svg",
                    alt: "Верифицированные специалисты"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                class: [
                  "lm-m-main-slider--controls",
                  _vm.slideVS ? "active" : ""
                ],
                staticStyle: { display: "none" }
              },
              [
                _c("a", {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      $event.stopPropagation()
                    }
                  }
                }),
                _vm._v(" "),
                _c("a", {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      return _vm.switchSlide()
                    }
                  }
                })
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "lm-block-static" },
      [
        _c("div", { staticClass: "content", attrs: { id: "content" } }, [
          _c("section", { staticClass: "lm-m-section-1" }, [
            _c("div", { staticClass: "wrapper" }, [
              _c("ul", [
                _c("li", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "72",
                        height: "72",
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          width: "72",
                          height: "72",
                          rx: "24",
                          fill: "#0063DA"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M51 26H45.444C45.788 25.409 46 24.732 46 24C46 21.794 44.206 20 42 20C38.87 20 37.004 22.386 36 24.323C34.997 22.386 33.13 20 30 20C27.794 20 26 21.794 26 24C26 24.732 26.212 25.409 26.556 26H21C20.448 26 20 26.447 20 27V31C20 31.553 20.448 32 21 32H51C51.552 32 52 31.553 52 31V27C52 26.447 51.552 26 51 26ZM42 22C43.103 22 44 22.897 44 24C44 25.103 43.103 26 42 26H37.416C38.078 24.446 39.515 22 42 22ZM28 24C28 22.897 28.897 22 30 22C32.472 22 33.914 24.446 34.58 26H30C28.897 26 28 25.103 28 24Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M49 34H38V52H48C48.552 52 49 51.552 49 51V34Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d: "M34 34H23V51C23 51.552 23.448 52 24 52H34V34Z",
                          fill: "white"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("mainpage.features.free-service")))
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "72",
                        height: "72",
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          width: "72",
                          height: "72",
                          rx: "24",
                          fill: "#FC2E5F"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M44 20H21C20.447 20 20 20.448 20 21V47C20 47.552 20.447 48 21 48H37V40.644C35.752 39.099 35 37.136 35 35C35 30.038 39.037 26 44 26C44.338 26 44.671 26.022 45 26.059V21C45 20.448 44.553 20 44 20ZM31 40H24V38H31V40ZM31 35H24V33H31V35ZM33 30H24V28H33V30Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M44 44C42.151 44 40.431 43.438 39 42.478V51.618L44 49.118L49 51.618V42.478C47.569 43.438 45.849 44 44 44Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M44 42C47.866 42 51 38.866 51 35C51 31.134 47.866 28 44 28C40.134 28 37 31.134 37 35C37 38.866 40.134 42 44 42Z",
                          fill: "white"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("mainpage.features.safe-castings")))
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "72",
                        height: "72",
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          width: "72",
                          height: "72",
                          rx: "24",
                          fill: "#20DBA9"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: { d: "M51 33H49V42H51V33Z", fill: "white" }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M37.269 39.7192C36.468 40.0932 35.539 40.0952 34.731 39.7192L25 35.1782V43.0002C25 46.3642 29.832 49.0002 36 49.0002C42.168 49.0002 47 46.3642 47 43.0002V35.1772L37.269 39.7192Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M51.423 29.0942L36.423 22.0942C36.155 21.9692 35.845 21.9692 35.577 22.0942L20.577 29.0942C20.225 29.2582 20 29.6112 20 30.0002C20 30.3892 20.225 30.7422 20.577 30.9062L35.577 37.9062C35.845 38.0312 36.155 38.0312 36.423 37.9062L51.423 30.9062C51.775 30.7422 52 30.3892 52 30.0002C52 29.6112 51.775 29.2582 51.423 29.0942Z",
                          fill: "white"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.$t("mainpage.features.education-development"))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "72",
                        height: "72",
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          width: "72",
                          height: "72",
                          rx: "24",
                          fill: "#F5A623"
                        }
                      }),
                      _vm._v(" "),
                      _c("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                        _c("path", {
                          attrs: {
                            d:
                              "M34.2143 47.5129C34.2542 47.1184 34.2074 46.7198 34.077 46.3452C33.9467 45.9707 33.7359 45.6291 33.4596 45.3446C33.1833 45.0601 32.8481 44.8395 32.4775 44.6982C32.1069 44.557 31.7099 44.4985 31.3143 44.5269C31.3862 44.1073 31.3588 43.6767 31.2343 43.2696C31.1098 42.8625 30.8917 42.4902 30.5975 42.1825C30.3032 41.8748 29.941 41.6404 29.5398 41.4979C29.1386 41.3554 28.7097 41.3088 28.2873 41.3619C28.2969 40.9901 28.231 40.6201 28.0935 40.2744C27.956 39.9287 27.7498 39.6146 27.4873 39.3509C27.2308 39.0943 26.9262 38.8908 26.5911 38.7519C26.2559 38.613 25.8966 38.5415 25.5338 38.5415C25.1709 38.5415 24.8117 38.613 24.4765 38.7519C24.1413 38.8908 23.8368 39.0943 23.5803 39.3509L23.0223 39.9089C22.6317 40.2981 22.3668 40.7953 22.2616 41.3365C22.1564 41.8777 22.2158 42.4379 22.4322 42.945C22.6485 43.4521 23.0119 43.8827 23.4754 44.1812C23.9388 44.4798 24.4811 44.6326 25.0323 44.6199C24.9796 45.0423 25.0264 45.471 25.1691 45.872C25.3117 46.273 25.5462 46.635 25.8538 46.9292C26.1613 47.2233 26.5334 47.4414 26.9404 47.5661C27.3473 47.6907 27.7777 47.7184 28.1973 47.6469C28.1705 48.0272 28.2238 48.4088 28.3537 48.7672C28.4836 49.1256 28.6871 49.4528 28.9512 49.7277C29.2154 50.0025 29.5342 50.219 29.8871 50.363C30.24 50.5071 30.6193 50.5755 31.0003 50.5639C31.0022 51.2088 31.2597 51.8266 31.7163 52.2819C32.1759 52.7415 32.7993 52.9997 33.4493 52.9997C34.0993 52.9997 34.7226 52.7415 35.1823 52.2819L35.7823 51.6819C36.1165 51.3503 36.3476 50.929 36.4478 50.469C36.5481 50.0089 36.5131 49.5297 36.3472 49.0891C36.1812 48.6485 35.8914 48.2652 35.5126 47.9856C35.1338 47.7059 34.6822 47.5418 34.2123 47.5129H34.2143Z",
                            fill: "white"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M51 23H40.9C39.1242 22.9972 37.3989 23.5901 36 24.684C34.6011 23.5901 32.8758 22.9972 31.1 23H21C20.7348 23 20.4804 23.1054 20.2929 23.2929C20.1054 23.4804 20 23.7348 20 24V37C20 37.2652 20.1054 37.5196 20.2929 37.7071C20.4804 37.8947 20.7348 38 21 38C21.2652 38 21.5196 37.8947 21.7071 37.7071C21.8946 37.5196 22 37.2652 22 37V25H31.1C32.3211 24.9982 33.5133 25.3717 34.515 26.07L29.01 31.576C28.5686 32.0142 28.3064 32.6013 28.2746 33.2224C28.2428 33.8436 28.4438 34.4543 28.8381 34.9353C29.2325 35.4163 29.792 35.733 30.4074 35.8235C31.0228 35.9141 31.6498 35.772 32.166 35.425L39.272 30.688L48.542 39.957C48.679 40.094 48.7876 40.2566 48.8618 40.4355C48.9359 40.6145 48.974 40.8063 48.974 41C48.974 41.1937 48.9359 41.3855 48.8618 41.5645C48.7876 41.7434 48.679 41.906 48.542 42.043C48.2611 42.3111 47.8878 42.4606 47.4995 42.4606C47.1112 42.4606 46.7379 42.3111 46.457 42.043L43.707 39.293C43.5184 39.1109 43.2658 39.0101 43.0036 39.0123C42.7414 39.0146 42.4906 39.1198 42.3052 39.3052C42.1198 39.4906 42.0146 39.7414 42.0123 40.0036C42.01 40.2658 42.1108 40.5184 42.293 40.707L45.318 43.732C45.5946 44.0086 45.75 44.3838 45.75 44.775C45.75 45.1662 45.5946 45.5414 45.318 45.818C45.0414 46.0946 44.6662 46.25 44.275 46.25C43.8838 46.25 43.5086 46.0946 43.232 45.818L40.207 42.793C40.0184 42.6109 39.7658 42.5101 39.5036 42.5123C39.2414 42.5146 38.9906 42.6198 38.8052 42.8052C38.6198 42.9906 38.5146 43.2414 38.5123 43.5036C38.51 43.7658 38.6108 44.0184 38.793 44.207L41.042 46.457C41.2482 46.6632 41.3887 46.926 41.4456 47.212C41.5026 47.498 41.4735 47.7945 41.3619 48.064C41.2504 48.3335 41.0615 48.5639 40.8191 48.726C40.5767 48.8882 40.2916 48.9748 40 48.975C39.7348 48.975 39.4804 49.0804 39.2929 49.2679C39.1054 49.4554 39 49.7098 39 49.975C39 50.2402 39.1054 50.4946 39.2929 50.6821C39.4804 50.8697 39.7348 50.975 40 50.975C40.8129 50.9765 41.6004 50.6919 42.2244 50.171C42.8485 49.6501 43.2693 48.9261 43.413 48.126C43.6941 48.2024 43.9837 48.2434 44.275 48.248C44.7313 48.2484 45.1832 48.1589 45.6048 47.9845C46.0265 47.8101 46.4096 47.5543 46.7324 47.2318C47.0551 46.9092 47.3111 46.5262 47.4857 46.1047C47.6603 45.6831 47.7501 45.2313 47.75 44.775C47.75 44.666 47.729 44.561 47.719 44.454C48.5627 44.4066 49.3596 44.0507 49.958 43.454C50.6086 42.8018 50.974 41.9182 50.974 40.997C50.974 40.0758 50.6086 39.1922 49.958 38.54L49.945 38.527L51.719 36.7C51.9004 36.5123 52.0013 36.2611 52 36V24C52 23.7348 51.8946 23.4804 51.7071 23.2929C51.5196 23.1054 51.2652 23 51 23Z",
                            fill: "white"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0" } }, [
                          _c("rect", {
                            attrs: {
                              width: "32",
                              height: "32",
                              fill: "white",
                              transform: "translate(20 22)"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("mainpage.features.useful-contacts")))
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "lm-m-section-2" }, [
            _c("div", { staticClass: "wrapper" }, [
              _c("img", {
                attrs: {
                  src: "/dist/img/main/lm-page-2.svg",
                  alt: "Ты талантлив, но тебе не предлагают работу?"
                }
              }),
              _vm._v(" "),
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("mainpage.job.talented")) + " "),
                _c("br"),
                _vm._v(" " + _vm._s(_vm.$t("mainpage.job.job")))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "desc" }, [
                _vm._v(_vm._s(_vm.$t("mainpage.job.initiative")) + " "),
                _c("br"),
                _vm._v(_vm._s(_vm.$t("mainpage.job.portfolio")) + "  "),
                _c("br"),
                _vm._v(
                  " " +
                    _vm._s(_vm.$t("mainpage.job.acquaintance")) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lm-m-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "lm-m-primary-button",
                      attrs: { to: { name: "register" } },
                      nativeOn: {
                        click: function($event) {
                          return _vm._destroyToken({ reload: false })
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("mainpage.job.get-job")))]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "lm-m-section-3" }, [
            _c("div", { staticClass: "wrapper" }, [
              _c("img", {
                attrs: {
                  src: "/dist/img/main/lm-li-4.svg",
                  alt: "Воплоти свой проект в жизнь"
                }
              }),
              _vm._v(" "),
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("mainpage.project.project")) + " "),
                _c("br"),
                _vm._v(" " + _vm._s(_vm.$t("mainpage.project.come-true")))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "desc" }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.$t("mainpage.project.talent-base")) +
                    " "
                ),
                _c("br"),
                _vm._v(" Услуги по продвижению "),
                _c("br"),
                _vm._v(" Поиск профессионалов\n            ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lm-m-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "lm-m-primary-button red",
                      attrs: { to: { name: "register" } },
                      nativeOn: {
                        click: function($event) {
                          return _vm._destroyToken({ reload: false })
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("mainpage.project.create-project")))]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("section", { staticClass: "lm-m-section-4" }, [
            _c("div", { staticClass: "wrapper" }, [
              _c("img", {
                attrs: {
                  src: "/dist/img/main/lm-page-5.svg",
                  alt: "Хочешь заработать на своём проекте?"
                }
              }),
              _vm._v(" "),
              _c("h2", [_vm._v(_vm._s(_vm.$t("mainpage.download.comfort")))]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ]),
        _vm._v(" "),
        _c("lm-main-footer")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "desc" }, [
      _vm._v("У тебя наверняка есть телефон, а у нас "),
      _c("br"),
      _vm._v(" есть мобильное приложение")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-app-links" }, [
      _c("div", [
        _c(
          "a",
          {
            staticClass: "lm-link-app",
            attrs: {
              target: "_blank",
              href: "https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8"
            }
          },
          [
            _c("img", {
              attrs: { src: "/dist/img/main/app-store.svg", alt: "App store" }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "a",
          {
            staticClass: "lm-link-app",
            attrs: {
              target: "_blank",
              href:
                "https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru"
            }
          },
          [
            _c("img", {
              attrs: {
                src: "/dist/img/main/google-play.svg",
                alt: "Google play"
              }
            })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7eb2bc79", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=217.build.8ff91b956a5070c8f3f4.js.map