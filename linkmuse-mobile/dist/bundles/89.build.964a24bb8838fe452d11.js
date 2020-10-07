webpackJsonp([89],{

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__ = __webpack_require__(1892);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_723dc997_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__ = __webpack_require__(2702);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2696)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-723dc997"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_723dc997_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-723dc997", Component.options)
  } else {
    hotAPI.reload("data-v-723dc997", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Carousel */
/* unused harmony export Slide */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collapse; });
/* unused harmony export Dropdown */
/* unused harmony export Modal */
/* unused harmony export Tab */
/* unused harmony export Tabs */
/* unused harmony export DatePicker */
/* unused harmony export Affix */
/* unused harmony export Alert */
/* unused harmony export Pagination */
/* unused harmony export Tooltip */
/* unused harmony export Popover */
/* unused harmony export TimePicker */
/* unused harmony export Typeahead */
/* unused harmony export ProgressBar */
/* unused harmony export ProgressBarStack */
/* unused harmony export Breadcrumbs */
/* unused harmony export BreadcrumbItem */
/* unused harmony export Btn */
/* unused harmony export BtnGroup */
/* unused harmony export BtnToolbar */
/* unused harmony export MultiSelect */
/* unused harmony export Navbar */
/* unused harmony export NavbarNav */
/* unused harmony export NavbarForm */
/* unused harmony export NavbarText */
/* unused harmony export tooltip */
/* unused harmony export popover */
/* unused harmony export scrollspy */
/* unused harmony export MessageBox */
/* unused harmony export Notification */
/* unused harmony export install */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);


function isExist(obj) {
  return typeof obj !== 'undefined' && obj !== null;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isNumber(obj) {
  return typeof obj === 'number';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isBoolean(obj) {
  return typeof obj === 'boolean';
}

function isPromiseSupported() {
  return typeof window !== 'undefined' && isExist(window.Promise);
}

var Carousel = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "carousel slide", attrs: { "data-ride": "carousel" }, on: { "mouseenter": _vm.stopInterval, "mouseleave": _vm.startInterval } }, [_vm.indicators ? _vm._t("indicators", [_c('ol', { staticClass: "carousel-indicators" }, _vm._l(_vm.slides, function (slide, index) {
      return _c('li', { class: { active: index === _vm.activeIndex }, on: { "click": function click($event) {
            _vm.select(index);
          } } });
    }))], { select: _vm.select, activeIndex: _vm.activeIndex }) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "carousel-inner", attrs: { "role": "listbox" } }, [_vm._t("default")], 2), _vm._v(" "), _vm.controls ? _c('a', { staticClass: "left carousel-control", attrs: { "href": "#", "role": "button" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.prev();
        } } }, [_c('span', { class: _vm.iconControlLeft, attrs: { "aria-hidden": "true" } }), _vm._v(" "), _c('span', { staticClass: "sr-only" }, [_vm._v("Previous")])]) : _vm._e(), _vm._v(" "), _vm.controls ? _c('a', { staticClass: "right carousel-control", attrs: { "href": "#", "role": "button" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.next();
        } } }, [_c('span', { class: _vm.iconControlRight, attrs: { "aria-hidden": "true" } }), _vm._v(" "), _c('span', { staticClass: "sr-only" }, [_vm._v("Next")])]) : _vm._e()], 2);
  }, staticRenderFns: [],
  props: {
    value: Number,
    indicators: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    iconControlLeft: {
      type: String,
      default: 'glyphicon glyphicon-chevron-left'
    },
    iconControlRight: {
      type: String,
      default: 'glyphicon glyphicon-chevron-right'
    }
  },
  data: function data() {
    return {
      slides: [],
      activeIndex: 0, // Make v-model not required
      timeoutId: 0,
      intervalId: 0
    };
  },

  watch: {
    interval: function interval() {
      this.startInterval();
    },
    value: function value(index, oldValue) {
      this.run(index, oldValue);
      this.activeIndex = index;
    }
  },
  mounted: function mounted() {
    if (isExist(this.value)) {
      this.activeIndex = this.value;
    }
    if (this.slides.length > 0) {
      this.$select(this.activeIndex);
    }
    this.startInterval();
  },
  beforeDestroy: function beforeDestroy() {
    this.stopInterval();
  },

  methods: {
    run: function run(newIndex, oldIndex) {
      var _this = this;

      var currentActiveIndex = oldIndex || 0;
      var direction = void 0;
      if (newIndex > currentActiveIndex) {
        direction = ['next', 'left'];
      } else {
        direction = ['prev', 'right'];
      }
      this.slides[newIndex].slideClass[direction[0]] = true;
      this.$nextTick(function () {
        _this.slides[newIndex].$el.offsetHeight;
        _this.slides.forEach(function (slide, i) {
          if (i === currentActiveIndex) {
            slide.slideClass.active = true;
            slide.slideClass[direction[1]] = true;
          } else if (i === newIndex) {
            slide.slideClass[direction[1]] = true;
          }
        });
        _this.timeoutId = setTimeout(function () {
          _this.$select(newIndex);
          _this.$emit('change', newIndex);
          _this.timeoutId = 0;
        }, 600);
      });
    },
    startInterval: function startInterval() {
      var _this2 = this;

      this.stopInterval();
      if (this.interval > 0) {
        this.intervalId = setInterval(function () {
          _this2.next();
        }, this.interval);
      }
    },
    stopInterval: function stopInterval() {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    },
    resetAllSlideClass: function resetAllSlideClass() {
      this.slides.forEach(function (slide) {
        slide.slideClass.active = false;
        slide.slideClass.left = false;
        slide.slideClass.right = false;
        slide.slideClass.next = false;
        slide.slideClass.prev = false;
      });
    },
    $select: function $select(index) {
      this.resetAllSlideClass();
      this.slides[index].slideClass.active = true;
    },
    select: function select(index) {
      if (this.timeoutId !== 0 || index === this.activeIndex) {
        return;
      }
      if (isExist(this.value)) {
        this.$emit('input', index);
      } else {
        this.run(index, this.activeIndex);
        this.activeIndex = index;
      }
    },
    prev: function prev() {
      this.select(this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1);
    },
    next: function next() {
      this.select(this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1);
    }
  }
};

function spliceIfExist(arr, item) {
  if (Array.isArray(arr)) {
    var index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  }
}

function range(end) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var arr = [];
  for (var i = start; i < end; i += step) {
    arr.push(i);
  }
  return arr;
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList || []);
}

var Slide = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "item", class: _vm.slideClass }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  data: function data() {
    return {
      slideClass: {
        active: false,
        prev: false,
        next: false,
        left: false,
        right: false
      }
    };
  },
  created: function created() {
    try {
      this.$parent.slides.push(this);
    } catch (e) {
      throw new Error('Slide parent must be Carousel.');
    }
  },
  beforeDestroy: function beforeDestroy() {
    var slides = this.$parent && this.$parent.slides;
    spliceIfExist(slides, this);
  }
};

var EVENTS = {
  MOUSE_ENTER: 'mouseenter',
  MOUSE_LEAVE: 'mouseleave',
  FOCUS: 'focus',
  BLUR: 'blur',
  CLICK: 'click',
  INPUT: 'input',
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
  KEY_PRESS: 'keypress',
  RESIZE: 'resize',
  SCROLL: 'scroll'
};

var TRIGGERS = {
  CLICK: 'click',
  HOVER: 'hover',
  FOCUS: 'focus',
  HOVER_FOCUS: 'hover-focus',
  OUTSIDE_CLICK: 'outside-click',
  MANUAL: 'manual'
};

var PLACEMENTS = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};

function getComputedStyle(el) {
  return window.getComputedStyle(el);
}

function getViewportSize() {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return { width: width, height: height };
}

var scrollbarWidth = null;
var savedScreenSize = null;

function getScrollbarWidth() {
  var recalculate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var screenSize = getViewportSize();
  // return directly when already calculated & not force recalculate & screen size not changed
  if (scrollbarWidth !== null && !recalculate && screenSize.height === savedScreenSize.height && screenSize.width === savedScreenSize.width) {
    return scrollbarWidth;
  }
  if (document.readyState === 'loading') {
    return null;
  }
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  div1.style.width = div2.style.width = div1.style.height = div2.style.height = '100px';
  div1.style.overflow = 'scroll';
  div2.style.overflow = 'hidden';
  document.body.appendChild(div1);
  document.body.appendChild(div2);
  scrollbarWidth = Math.abs(div1.scrollHeight - div2.scrollHeight);
  document.body.removeChild(div1);
  document.body.removeChild(div2);
  // save new screen size
  savedScreenSize = screenSize;
  return scrollbarWidth;
}

function on(element, event, handler) {
  element.addEventListener(event, handler);
}

function off(element, event, handler) {
  element.removeEventListener(event, handler);
}

function isElement(el) {
  return el && el.nodeType === Node.ELEMENT_NODE;
}

function removeFromDom(el) {
  isElement(el) && isElement(el.parentNode) && el.parentNode.removeChild(el);
}

function ensureElementMatchesFunction() {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }
}

function addClass(el, className) {
  if (!isElement(el)) {
    return;
  }
  if (el.className) {
    var classes = el.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
      el.className = classes.join(' ');
    }
  } else {
    el.className = className;
  }
}

function removeClass(el, className) {
  if (!isElement(el)) {
    return;
  }
  if (el.className) {
    var classes = el.className.split(' ');
    var newClasses = [];
    for (var i = 0, l = classes.length; i < l; i++) {
      if (classes[i] !== className) {
        newClasses.push(classes[i]);
      }
    }
    el.className = newClasses.join(' ');
  }
}

function hasClass(el, className) {
  if (!isElement(el)) {
    return false;
  }
  var classes = el.className.split(' ');
  for (var i = 0, l = classes.length; i < l; i++) {
    if (classes[i] === className) {
      return true;
    }
  }
  return false;
}

function setDropdownPosition(dropdown, trigger) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var doc = document.documentElement;
  var containerScrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var containerScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var rect = trigger.getBoundingClientRect();
  var dropdownRect = dropdown.getBoundingClientRect();
  dropdown.style.right = 'auto';
  dropdown.style.bottom = 'auto';
  if (options.menuRight) {
    dropdown.style.left = containerScrollLeft + rect.left + rect.width - dropdownRect.width + 'px';
  } else {
    dropdown.style.left = containerScrollLeft + rect.left + 'px';
  }
  if (options.dropup) {
    dropdown.style.top = containerScrollTop + rect.top - dropdownRect.height - 4 + 'px';
  } else {
    dropdown.style.top = containerScrollTop + rect.top + rect.height + 'px';
  }
}

function isAvailableAtPosition(trigger, popup, placement) {
  var triggerRect = trigger.getBoundingClientRect();
  var popupRect = popup.getBoundingClientRect();
  var viewPortSize = getViewportSize();
  var top = true;
  var right = true;
  var bottom = true;
  var left = true;
  switch (placement) {
    case PLACEMENTS.TOP:
      top = triggerRect.top >= popupRect.height;
      left = triggerRect.left + triggerRect.width / 2 >= popupRect.width / 2;
      right = triggerRect.right - triggerRect.width / 2 + popupRect.width / 2 <= viewPortSize.width;
      break;
    case PLACEMENTS.BOTTOM:
      bottom = triggerRect.bottom + popupRect.height <= viewPortSize.height;
      left = triggerRect.left + triggerRect.width / 2 >= popupRect.width / 2;
      right = triggerRect.right - triggerRect.width / 2 + popupRect.width / 2 <= viewPortSize.width;
      break;
    case PLACEMENTS.RIGHT:
      right = triggerRect.right + popupRect.width <= viewPortSize.width;
      top = triggerRect.top + triggerRect.height / 2 >= popupRect.height / 2;
      bottom = triggerRect.bottom - triggerRect.height / 2 + popupRect.height / 2 <= viewPortSize.height;
      break;
    case PLACEMENTS.LEFT:
      left = triggerRect.left >= popupRect.width;
      top = triggerRect.top + triggerRect.height / 2 >= popupRect.height / 2;
      bottom = triggerRect.bottom - triggerRect.height / 2 + popupRect.height / 2 <= viewPortSize.height;
      break;
  }
  return top && right && bottom && left;
}

function setTooltipPosition(tooltip, trigger, placement, auto, appendToSelector) {
  var container = void 0;
  var containerScrollTop = void 0;
  var containerScrollLeft = void 0;
  if (!isExist(appendToSelector) || appendToSelector === 'body') {
    container = document.body;
    var doc = document.documentElement;
    containerScrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    containerScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  } else {
    container = document.querySelector(appendToSelector);
    containerScrollLeft = container.scrollLeft;
    containerScrollTop = container.scrollTop;
  }
  // auto adjust placement
  if (auto) {
    // Try: right -> bottom -> left -> top
    // Cause the default placement is top
    var placements = [PLACEMENTS.RIGHT, PLACEMENTS.BOTTOM, PLACEMENTS.LEFT, PLACEMENTS.TOP];
    // The class switch helper function
    var changePlacementClass = function changePlacementClass(placement) {
      // console.log(placement)
      placements.forEach(function (placement) {
        removeClass(tooltip, placement);
      });
      addClass(tooltip, placement);
    };
    // No need to adjust if the default placement fits
    if (!isAvailableAtPosition(trigger, tooltip, placement)) {
      for (var i = 0, l = placements.length; i < l; i++) {
        // Re-assign placement class
        changePlacementClass(placements[i]);
        // Break if new placement fits
        if (isAvailableAtPosition(trigger, tooltip, placements[i])) {
          placement = placements[i];
          break;
        }
      }
      changePlacementClass(placement);
    }
  }
  // fix left and top for tooltip
  var rect = trigger.getBoundingClientRect();
  var tooltipRect = tooltip.getBoundingClientRect();
  if (placement === PLACEMENTS.BOTTOM) {
    tooltip.style.top = containerScrollTop + rect.top + rect.height + 'px';
    tooltip.style.left = containerScrollLeft + rect.left + rect.width / 2 - tooltipRect.width / 2 + 'px';
  } else if (placement === PLACEMENTS.LEFT) {
    tooltip.style.top = containerScrollTop + rect.top + rect.height / 2 - tooltipRect.height / 2 + 'px';
    tooltip.style.left = containerScrollLeft + rect.left - tooltipRect.width + 'px';
  } else if (placement === PLACEMENTS.RIGHT) {
    tooltip.style.top = containerScrollTop + rect.top + rect.height / 2 - tooltipRect.height / 2 + 'px';
    tooltip.style.left = containerScrollLeft + rect.left + rect.width + 'px';
  } else {
    tooltip.style.top = containerScrollTop + rect.top - tooltipRect.height + 'px';
    tooltip.style.left = containerScrollLeft + rect.left + rect.width / 2 - tooltipRect.width / 2 + 'px';
  }
}

function hasScrollbar(el) {
  var SCROLL = 'scroll';
  var hasVScroll = el.scrollHeight > el.clientHeight;
  var style = getComputedStyle(el);
  return hasVScroll || style.overflow === SCROLL || style.overflowY === SCROLL;
}

function toggleBodyOverflow(enable) {
  var MODAL_OPEN = 'modal-open';
  var body = document.body;
  if (enable) {
    removeClass(body, MODAL_OPEN);
    body.style.paddingRight = null;
  } else {
    if (hasScrollbar(document.documentElement) || hasScrollbar(document.body)) {
      body.style.paddingRight = getScrollbarWidth() + 'px';
    }
    addClass(body, MODAL_OPEN);
  }
}

function getClosest(el, selector) {
  ensureElementMatchesFunction();
  var parent = void 0;
  var _el = el;
  while (_el) {
    parent = _el.parentElement;
    if (parent && parent.matches(selector)) {
      return parent;
    }
    _el = parent;
  }
  return null;
}

function getParents(el, selector) {
  var until = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  ensureElementMatchesFunction();
  var parents = [];
  var parent = el.parentElement;
  while (parent) {
    if (parent.matches(selector)) {
      parents.push(parent);
    } else if (until && (until === parent || parent.matches(until))) {
      break;
    }
    parent = parent.parentElement;
  }
  return parents;
}

var COLLAPSE = 'collapse';
var IN = 'in';
var COLLAPSING = 'collapsing';

var Collapse = {
  render: function render(h) {
    return h(this.tag, {}, this.$slots.default);
  },

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    value: {
      type: Boolean,
      default: false
    },
    transitionDuration: {
      type: Number,
      default: 350
    }
  },
  data: function data() {
    return {
      timeoutId: 0
    };
  },

  watch: {
    value: function value(show) {
      this.toggle(show);
    }
  },
  mounted: function mounted() {
    var el = this.$el;
    addClass(el, COLLAPSE);
    if (this.value) {
      addClass(el, IN);
    }
  },

  methods: {
    toggle: function toggle(show) {
      var _this = this;

      clearTimeout(this.timeoutId);
      var el = this.$el;
      if (show) {
        this.$emit('show');
        removeClass(el, COLLAPSE);
        el.style.height = 'auto';
        var height = window.getComputedStyle(el).height;
        el.style.height = null;
        addClass(el, COLLAPSING);
        el.offsetHeight; // force repaint
        el.style.height = height;
        this.timeoutId = setTimeout(function () {
          removeClass(el, COLLAPSING);
          addClass(el, COLLAPSE);
          addClass(el, IN);
          el.style.height = null;
          _this.timeoutId = 0;
          _this.$emit('shown');
        }, this.transitionDuration);
      } else {
        this.$emit('hide');
        el.style.height = window.getComputedStyle(el).height;
        removeClass(el, IN);
        removeClass(el, COLLAPSE);
        el.offsetHeight;
        el.style.height = null;
        addClass(el, COLLAPSING);
        this.timeoutId = setTimeout(function () {
          addClass(el, COLLAPSE);
          removeClass(el, COLLAPSING);
          el.style.height = null;
          _this.timeoutId = 0;
          _this.$emit('hidden');
        }, this.transitionDuration);
      }
    }
  }
};

var DEFAULT_TAG = 'div';

var Dropdown = {
  render: function render(h) {
    return h(this.tag, {
      class: {
        'btn-group': this.tag === DEFAULT_TAG,
        dropdown: !this.dropup,
        dropup: this.dropup,
        open: this.show
      }
    }, [this.$slots.default, h('ul', {
      class: {
        'dropdown-menu': true,
        'dropdown-menu-right': this.menuRight
      },
      ref: 'dropdown'
    }, [this.$slots.dropdown])]);
  },

  props: {
    tag: {
      type: String,
      default: DEFAULT_TAG
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    value: Boolean,
    dropup: {
      type: Boolean,
      default: false
    },
    menuRight: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    notCloseElements: Array,
    positionElement: null
  },
  data: function data() {
    return {
      show: false,
      triggerEl: undefined
    };
  },

  watch: {
    value: function value(v) {
      this.toggle(v);
    }
  },
  mounted: function mounted() {
    this.initTrigger();
    if (this.triggerEl) {
      on(this.triggerEl, EVENTS.CLICK, this.toggle);
    }
    on(window, EVENTS.CLICK, this.windowClicked);
    if (this.value) {
      this.toggle(true);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeDropdownFromBody();
    if (this.triggerEl) {
      off(this.triggerEl, EVENTS.CLICK, this.toggle);
    }
    off(window, EVENTS.CLICK, this.windowClicked);
  },

  methods: {
    initTrigger: function initTrigger() {
      var trigger = this.$el.querySelector('[data-role="trigger"]') || this.$el.querySelector('.dropdown-toggle') || this.$el.firstChild;
      this.triggerEl = trigger && trigger !== this.$refs.dropdown ? trigger : null;
    },
    toggle: function toggle(show) {
      if (this.disabled) {
        return;
      }
      if (isBoolean(show)) {
        this.show = show;
      } else {
        this.show = !this.show;
      }
      if (this.appendToBody) {
        this.show ? this.appendDropdownToBody() : this.removeDropdownFromBody();
      }
      this.$emit('input', this.show);
    },
    windowClicked: function windowClicked(event) {
      var target = event.target;
      if (this.show && target) {
        var targetInNotCloseElements = false;
        if (this.notCloseElements) {
          for (var i = 0, l = this.notCloseElements.length; i < l; i++) {
            if (this.notCloseElements[i].contains(target)) {
              targetInNotCloseElements = true;
              break;
            }
          }
        }
        var targetInDropdownBody = this.$refs.dropdown.contains(target);
        var targetInTrigger = this.$el.contains(target) && !targetInDropdownBody;
        if (!targetInTrigger && !targetInNotCloseElements) {
          this.toggle(false);
        }
      }
    },
    appendDropdownToBody: function appendDropdownToBody() {
      try {
        var el = this.$refs.dropdown;
        el.style.display = 'block';
        document.body.appendChild(el);
        var positionElement = this.positionElement || this.$el;
        setDropdownPosition(el, positionElement, this);
      } catch (e) {
        // Silent
      }
    },
    removeDropdownFromBody: function removeDropdownFromBody() {
      try {
        var el = this.$refs.dropdown;
        el.removeAttribute('style');
        this.$el.appendChild(el);
      } catch (e) {
        // Silent
      }
    }
  }
};

var defaultLang = {
  uiv: {
    datePicker: {
      clear: 'Clear',
      today: 'Today',
      month: 'Month',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      year: 'Year',
      week1: 'Mon',
      week2: 'Tue',
      week3: 'Wed',
      week4: 'Thu',
      week5: 'Fri',
      week6: 'Sat',
      week7: 'Sun'
    },
    timePicker: {
      am: 'AM',
      pm: 'PM'
    },
    modal: {
      cancel: 'Cancel',
      ok: 'OK'
    }
  }
};

// https://github.com/ElemeFE/element/blob/dev/src/locale/index.js
var lang = defaultLang;

var i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this).$t;
  if (isFunction(vuei18n)) {
    try {
      return vuei18n.apply(this, arguments);
    } catch (err) {
      //  vuei18n.apply doesn't work with 7.3.3 of vue-i18n
      return this.$t.apply(this, arguments);
    }
  }
};

var t = function t(path, options) {
  var value = i18nHandler.apply(this, arguments);
  if (isExist(value)) {
    return value;
  }
  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return value;
    if (!value) return '';
    current = value;
  }
  return '';
};

var use = function use(l) {
  lang = l || lang;
};

var i18n = function i18n(fn) {
  i18nHandler = fn || i18nHandler;
};

var locale = { use: use, t: t, i18n: i18n };

var Local = {
  methods: {
    t: function t$$1() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return t.apply(this, args);
    }
  }
};

function mergeData() {
  for (var e, a, s = {}, t = arguments.length; t--;) {
    for (var r = 0, c = Object.keys(arguments[t]); r < c.length; r++) {
      switch (e = c[r]) {case "class":case "style":case "directives":
          Array.isArray(s[e]) || (s[e] = []), s[e] = s[e].concat(arguments[t][e]);break;case "staticClass":
          if (!arguments[t][e]) break;void 0 === s[e] && (s[e] = ""), s[e] && (s[e] += " "), s[e] += arguments[t][e].trim();break;case "on":case "nativeOn":
          s[e] || (s[e] = {});for (var o = 0, n = Object.keys(arguments[t][e]); o < n.length; o++) {
            a = n[o], s[e][a] ? s[e][a] = [].concat(s[e][a], arguments[t][e][a]) : s[e][a] = arguments[t][e][a];
          }break;case "attrs":case "props":case "domProps":case "scopedSlots":case "staticStyle":case "hook":case "transition":
          s[e] || (s[e] = {}), s[e] = __assign({}, arguments[t][e], s[e]);break;case "slot":case "key":case "ref":case "tag":case "show":case "keepAlive":default:
          s[e] || (s[e] = arguments[t][e]);}
    }
  }return s;
}var __assign = Object.assign || function (e) {
  for (var a, s = 1, t = arguments.length; s < t; s++) {
    a = arguments[s];for (var r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
  }return e;
};

var linkMixin = {
  props: {
    // <a> props
    href: String,
    target: String,
    // <router-link> props
    to: null,
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    }
  }
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var BtnGroup = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        children = _ref.children,
        data = _ref.data;

    return h('div', mergeData(data, {
      class: defineProperty({
        'btn-group': !props.vertical,
        'btn-group-vertical': props.vertical,
        'btn-group-justified': props.justified
      }, 'btn-group-' + props.size, props.size),
      attrs: {
        role: 'group',
        'data-toggle': 'buttons'
      }
    }), children);
  },

  props: {
    size: String,
    vertical: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    }
  }
};

var INPUT_TYPE_CHECKBOX = 'checkbox';
var INPUT_TYPE_RADIO = 'radio';

var Btn = {
  functional: true,
  mixins: [linkMixin],
  render: function render(h, _ref) {
    var _classes;

    var children = _ref.children,
        props = _ref.props,
        data = _ref.data;

    // event listeners
    var listeners = data.on || {};
    // checkbox: model contain inputValue
    // radio: model === inputValue
    var isInputActive = props.inputType === INPUT_TYPE_CHECKBOX ? props.value.indexOf(props.inputValue) >= 0 : props.value === props.inputValue;
    // button class
    var classes = (_classes = {
      btn: true,
      active: props.inputType ? isInputActive : props.active,
      disabled: props.disabled,
      'btn-block': props.block
    }, defineProperty(_classes, 'btn-' + props.type, Boolean(props.type)), defineProperty(_classes, 'btn-' + props.size, Boolean(props.size)), _classes);
    // prevent event for disabled links
    var on = {
      click: function click(e) {
        if (props.disabled && e instanceof Event) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };
    // render params
    var tag = void 0,
        options = void 0,
        slot = void 0;

    if (props.href) {
      // is native link
      tag = 'a';
      slot = children;
      options = mergeData(data, {
        on: on,
        class: classes,
        attrs: {
          role: 'button',
          href: props.href,
          target: props.target
        }
      });
    } else if (props.to) {
      // is vue router link
      tag = 'router-link';
      slot = children;
      options = mergeData(data, {
        nativeOn: on,
        class: classes,
        props: {
          event: props.disabled ? '' : 'click', // prevent nav while disabled
          to: props.to,
          replace: props.replace,
          append: props.append,
          exact: props.exact
        },
        attrs: {
          role: 'button'
        }
      });
    } else if (props.inputType) {
      // is input checkbox or radio
      tag = 'label';
      options = mergeData(data, {
        on: on,
        class: classes
      });
      slot = [h('input', {
        attrs: {
          autocomplete: 'off',
          type: props.inputType,
          checked: isInputActive ? 'checked' : null,
          disabled: props.disabled
        },
        domProps: {
          checked: isInputActive // required
        },
        on: {
          change: function change() {
            if (props.inputType === INPUT_TYPE_CHECKBOX) {
              if (isInputActive) {
                props.value.splice(props.value.indexOf(props.inputValue), 1);
              } else {
                props.value.push(props.inputValue);
              }
            } else {
              listeners['input'](props.inputValue);
            }
          }
        }
      }), children];
    } else if (props.justified) {
      // is in justified btn-group
      tag = BtnGroup;
      options = {};
      slot = [h('button', mergeData(data, {
        on: on,
        class: classes,
        attrs: {
          type: props.nativeType,
          disabled: props.disabled
        }
      }), children)];
    } else {
      // is button
      tag = 'button';
      slot = children;
      options = mergeData(data, {
        on: on,
        class: classes,
        attrs: {
          type: props.nativeType,
          disabled: props.disabled
        }
      });
    }

    return h(tag, options, slot);
  },

  props: {
    justified: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    block: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // <input> props
    value: null,
    inputValue: null,
    inputType: {
      type: String,
      validator: function validator(value) {
        return value === INPUT_TYPE_CHECKBOX || value === INPUT_TYPE_RADIO;
      }
    }
  }
};

var MODAL_BACKDROP = 'modal-backdrop';
var IN$1 = 'in';
var getOpenModalNum = function getOpenModalNum() {
  return document.querySelectorAll('.' + MODAL_BACKDROP).length;
};

var Modal = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "modal", class: { fade: _vm.transitionDuration > 0 }, attrs: { "tabindex": "-1", "role": "dialog" }, on: { "click": function click($event) {
          if ($event.target !== $event.currentTarget) {
            return null;
          }_vm.backdropClicked($event);
        } } }, [_c('div', { ref: "dialog", staticClass: "modal-dialog", class: _vm.modalSizeClass, attrs: { "role": "document" } }, [_c('div', { staticClass: "modal-content" }, [_vm.header ? _c('div', { staticClass: "modal-header" }, [_vm._t("header", [_vm.dismissBtn ? _c('button', { staticClass: "close", staticStyle: { "position": "relative", "z-index": "1060" }, attrs: { "type": "button", "aria-label": "Close" }, on: { "click": function click($event) {
          _vm.toggle(false);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), _c('h4', { staticClass: "modal-title" }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)])], 2) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "modal-body" }, [_vm._t("default")], 2), _vm._v(" "), _vm.footer ? _c('div', { staticClass: "modal-footer" }, [_vm._t("footer", [_c('btn', { on: { "click": function click($event) {
          _vm.toggle(false, 'cancel');
        } } }, [_c('span', [_vm._v(_vm._s(_vm.cancelText || _vm.t('uiv.modal.cancel')))])]), _vm._v(" "), _c('btn', { attrs: { "type": "primary", "data-action": "auto-focus" }, on: { "click": function click($event) {
          _vm.toggle(false, 'ok');
        } } }, [_c('span', [_vm._v(_vm._s(_vm.okText || _vm.t('uiv.modal.ok')))])])])], 2) : _vm._e()])]), _vm._v(" "), _c('div', { ref: "backdrop", staticClass: "modal-backdrop", class: { fade: _vm.transitionDuration > 0 } })]);
  }, staticRenderFns: [],
  mixins: [Local],
  components: { Btn: Btn },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    size: String,
    backdrop: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    },
    cancelText: String,
    okText: String,
    dismissBtn: {
      type: Boolean,
      default: true
    },
    transitionDuration: {
      type: Number,
      default: 150
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    beforeClose: Function,
    zOffset: {
      type: Number,
      default: 20
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      msg: '',
      timeoutId: 0
    };
  },

  computed: {
    modalSizeClass: function modalSizeClass() {
      return defineProperty({}, 'modal-' + this.size, Boolean(this.size));
    }
  },
  watch: {
    value: function value(v) {
      this.$toggle(v);
    }
  },
  mounted: function mounted() {
    removeFromDom(this.$refs.backdrop);
    on(window, EVENTS.KEY_UP, this.onKeyPress);
    if (this.value) {
      this.$toggle(true);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timeoutId);
    removeFromDom(this.$refs.backdrop);
    removeFromDom(this.$el);
    off(window, EVENTS.KEY_UP, this.onKeyPress);
  },

  methods: {
    onKeyPress: function onKeyPress(event) {
      if (this.keyboard && this.value && event.keyCode === 27) {
        this.toggle(false);
      }
    },
    toggle: function toggle(show, msg) {
      // skip the hiding while show===false & beforeClose returning falsely value
      if (!show && isFunction(this.beforeClose) && !this.beforeClose(msg)) {
        return;
      }
      this.msg = msg;
      this.$emit('input', show);
    },
    $toggle: function $toggle(show) {
      var _this = this;

      var modal = this.$el;
      var backdrop = this.$refs.backdrop;
      clearTimeout(this.timeoutId);
      if (show) {
        var alreadyOpenModalNum = getOpenModalNum();
        document.body.appendChild(backdrop);
        if (this.appendToBody) {
          document.body.appendChild(modal);
        }
        modal.style.display = 'block';
        modal.scrollTop = 0;
        backdrop.offsetHeight; // force repaint
        toggleBodyOverflow(false);
        addClass(backdrop, IN$1);
        addClass(modal, IN$1);
        // fix z-index for nested modals
        // no need to calculate if no modal is already open
        if (alreadyOpenModalNum > 0) {
          var modalBaseZ = parseInt(getComputedStyle(modal).zIndex) || 1050; // 1050 is default modal z-Index
          var backdropBaseZ = parseInt(getComputedStyle(backdrop).zIndex) || 1040; // 1040 is default backdrop z-Index
          var offset = alreadyOpenModalNum * this.zOffset;
          modal.style.zIndex = '' + (modalBaseZ + offset);
          backdrop.style.zIndex = '' + (backdropBaseZ + offset);
        }
        // z-index fix end
        this.timeoutId = setTimeout(function () {
          if (_this.autoFocus) {
            var btn = _this.$el.querySelector('[data-action="auto-focus"]');
            if (btn) {
              btn.focus();
            }
          }
          _this.$emit('show');
          _this.timeoutId = 0;
        }, this.transitionDuration);
      } else {
        removeClass(backdrop, IN$1);
        removeClass(modal, IN$1);
        this.timeoutId = setTimeout(function () {
          modal.style.display = 'none';
          removeFromDom(backdrop);
          if (_this.appendToBody) {
            removeFromDom(modal);
          }
          if (getOpenModalNum() === 0) {
            toggleBodyOverflow(true);
          }
          _this.$emit('hide', _this.msg || 'dismiss');
          _this.msg = '';
          _this.timeoutId = 0;
          // restore z-index for nested modals
          modal.style.zIndex = '';
          backdrop.style.zIndex = '';
          // z-index fix end
        }, this.transitionDuration);
      }
    },
    backdropClicked: function backdropClicked(event) {
      if (this.backdrop) {
        this.toggle(false);
      }
    }
  }
};

var ACTIVE_CLASS = 'active';
var IN_CLASS = 'in';

var Tab = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "tab-pane", class: { fade: _vm.transition > 0 }, attrs: { "role": "tabpanel" } }, [_vm._t("default")], 2);
  }, staticRenderFns: [],
  props: {
    title: {
      type: String,
      default: 'Tab Title'
    },
    htmlTitle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: String,
    pullRight: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      active: true,
      transition: 150
    };
  },

  watch: {
    active: function active(_active) {
      var _this = this;

      if (_active) {
        setTimeout(function () {
          addClass(_this.$el, ACTIVE_CLASS);
          _this.$el.offsetHeight;
          addClass(_this.$el, IN_CLASS);
        }, this.transition);
      } else {
        removeClass(this.$el, IN_CLASS);
        setTimeout(function () {
          removeClass(_this.$el, ACTIVE_CLASS);
        }, this.transition);
      }
    }
  },
  created: function created() {
    try {
      this.$parent.tabs.push(this);
    } catch (e) {
      throw new Error('<tab> parent must be <tabs>.');
    }
  },
  beforeDestroy: function beforeDestroy() {
    var tabs = this.$parent && this.$parent.tabs;
    spliceIfExist(tabs, this);
  },

  methods: {
    show: function show() {
      var _this2 = this;

      this.$nextTick(function () {
        addClass(_this2.$el, ACTIVE_CLASS);
        addClass(_this2.$el, IN_CLASS);
      });
    }
  }
};

var Tabs = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', [_c('ul', { class: _vm.navClasses, attrs: { "role": "tablist" } }, [_vm._l(_vm.groupedTabs, function (tab, index) {
      return [tab.tabs ? _c('dropdown', { class: _vm.getTabClasses(tab), attrs: { "role": "presentation", "tag": "li" } }, [_c('a', { staticClass: "dropdown-toggle", attrs: { "role": "tab", "href": "#" }, on: { "click": function click($event) {
            $event.preventDefault();
          } } }, [_vm._v(_vm._s(tab.group) + " "), _c('span', { staticClass: "caret" })]), _vm._v(" "), _c('template', { slot: "dropdown" }, _vm._l(tab.tabs, function (subTab) {
        return _c('li', { class: _vm.getTabClasses(subTab, true) }, [_c('a', { attrs: { "href": "#" }, on: { "click": function click($event) {
              $event.preventDefault();_vm.select(_vm.tabs.indexOf(subTab));
            } } }, [_vm._v(_vm._s(subTab.title))])]);
      }))], 2) : _c('li', { class: _vm.getTabClasses(tab), attrs: { "role": "presentation" } }, [_c('a', { attrs: { "role": "tab", "href": "#" }, on: { "click": function click($event) {
            $event.preventDefault();_vm.select(_vm.tabs.indexOf(tab));
          } } }, [tab.htmlTitle ? _c('span', { domProps: { "innerHTML": _vm._s(tab.title) } }) : [_vm._v(_vm._s(tab.title))]], 2)])];
    }), _vm._v(" "), !_vm.justified && _vm.$slots['nav-right'] ? _c('li', { staticClass: "pull-right" }, [_vm._t("nav-right")], 2) : _vm._e()], 2), _vm._v(" "), _c('div', { staticClass: "tab-content" }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [],
  components: { Dropdown: Dropdown },
  props: {
    value: {
      type: Number,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    transitionDuration: {
      type: Number,
      default: 150
    },
    justified: Boolean,
    pills: Boolean,
    stacked: Boolean
  },
  data: function data() {
    return {
      tabs: [],
      activeIndex: 0 // Make v-model not required
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        if (isNumber(value)) {
          this.activeIndex = value;
          this.selectCurrent();
        }
      }
    },
    tabs: function tabs(_tabs) {
      var _this = this;

      _tabs.forEach(function (tab, index) {
        tab.transition = _this.transitionDuration;
        if (index === _this.activeIndex) {
          tab.show();
        }
      });
      this.selectCurrent();
    }
  },
  computed: {
    navClasses: function navClasses() {
      return {
        nav: true,
        'nav-justified': this.justified,
        'nav-tabs': !this.pills,
        'nav-pills': this.pills,
        'nav-stacked': this.stacked && this.pills
      };
    },
    groupedTabs: function groupedTabs() {
      var tabs = [];
      var hash = {};
      this.tabs.forEach(function (tab) {
        if (tab.group) {
          if (hash.hasOwnProperty(tab.group)) {
            tabs[hash[tab.group]].tabs.push(tab);
          } else {
            tabs.push({
              tabs: [tab],
              group: tab.group
            });
            hash[tab.group] = tabs.length - 1;
          }
          if (tab.active) {
            tabs[hash[tab.group]].active = true;
          }
          if (tab.pullRight) {
            tabs[hash[tab.group]].pullRight = true;
          }
        } else {
          tabs.push(tab);
        }
      });
      return tabs;
    }
  },
  methods: {
    getTabClasses: function getTabClasses(tab) {
      var isSubTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return {
        active: tab.active,
        disabled: tab.disabled,
        'pull-right': tab.pullRight && !isSubTab
      };
    },
    selectCurrent: function selectCurrent() {
      var _this2 = this;

      var found = false;
      this.tabs.forEach(function (tab, index) {
        if (index === _this2.activeIndex) {
          found = !tab.active;
          tab.active = true;
        } else {
          tab.active = false;
        }
      });
      if (found) {
        this.$emit('change', this.activeIndex);
      }
    },
    select: function select(index) {
      if (!this.tabs[index].disabled) {
        if (isNumber(this.value)) {
          this.$emit('input', index);
        } else {
          this.activeIndex = index;
          this.selectCurrent();
        }
      }
    }
  }
};

function pad(value, num) {
  value = value + '';
  for (var i = num - value.length; i > 0; i--) {
    value = '0' + value;
  }
  return value;
}

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function stringify(date, format) {
  try {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var monthName = monthNames[month - 1];
    return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, pad(month, 2)).replace(/dd/g, pad(day, 2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
  } catch (e) {
    return '';
  }
}

var DateView = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { staticStyle: { "width": "100%" }, attrs: { "role": "grid" } }, [_c('thead', [_c('tr', [_c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goPrevMonth } }, [_c('i', { class: _vm.iconControlLeft })])], 1), _vm._v(" "), _c('td', { attrs: { "colspan": "5" } }, [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.changeView } }, [_c('b', [_vm._v(_vm._s(_vm.yearMonthStr))])])], 1), _vm._v(" "), _c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goNextMonth } }, [_c('i', { class: _vm.iconControlRight })])], 1)]), _vm._v(" "), _c('tr', { attrs: { "align": "center" } }, _vm._l(_vm.weekDays, function (day) {
      return _c('td', { attrs: { "width": "14.2857142857%" } }, [_c('small', [_vm._v(_vm._s(_vm.tWeekName(day === 0 ? 7 : day)))])]);
    }))]), _vm._v(" "), _c('tbody', _vm._l(_vm.monthDayRows, function (row) {
      return _c('tr', _vm._l(row, function (date) {
        return _c('td', [_c('btn', { class: date.classes, staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm", "data-action": "select", "type": _vm.getBtnType(date), "disabled": date.disabled }, on: { "click": function click($event) {
              _vm.select(date);
            } } }, [_c('span', { class: { 'text-muted': _vm.month !== date.month }, attrs: { "data-action": "select" } }, [_vm._v(_vm._s(date.date))])])], 1);
      }));
    }))]);
  }, staticRenderFns: [],
  mixins: [Local],
  props: {
    month: Number,
    year: Number,
    date: Date,
    today: Date,
    limit: Object,
    weekStartsWith: Number,
    iconControlLeft: String,
    iconControlRight: String,
    dateClass: Function
  },
  components: { Btn: Btn },
  computed: {
    weekDays: function weekDays() {
      var days = [];
      var firstDay = this.weekStartsWith;
      while (days.length < 7) {
        days.push(firstDay++);
        if (firstDay > 6) {
          firstDay = 0;
        }
      }
      return days;
    },
    yearMonthStr: function yearMonthStr() {
      return isExist(this.month) ? this.year + ' ' + this.t('uiv.datePicker.month' + (this.month + 1)) : this.year;
    },
    monthDayRows: function monthDayRows() {
      var rows = [];
      var firstDay = new Date(this.year, this.month, 1);
      var prevMonthLastDate = new Date(this.year, this.month, 0).getDate();
      var startIndex = firstDay.getDay();
      // console.log(startIndex)
      var daysNum = daysInMonth(this.month, this.year);
      var weekOffset = 0;
      if (this.weekStartsWith > startIndex) {
        weekOffset = 7 - this.weekStartsWith;
      } else {
        weekOffset = 0 - this.weekStartsWith;
      }
      // console.log(prevMonthLastDate, startIndex, daysNum)
      for (var i = 0; i < 6; i++) {
        rows.push([]);
        for (var j = 0 - weekOffset; j < 7 - weekOffset; j++) {
          var currentIndex = i * 7 + j;
          var date = { year: this.year, disabled: false
            // date in and not in current month
          };if (currentIndex < startIndex) {
            date.date = prevMonthLastDate - startIndex + currentIndex + 1;
            if (this.month > 0) {
              date.month = this.month - 1;
            } else {
              date.month = 11;
              date.year--;
            }
          } else if (currentIndex < startIndex + daysNum) {
            date.date = currentIndex - startIndex + 1;
            date.month = this.month;
          } else {
            date.date = currentIndex - startIndex - daysNum + 1;
            if (this.month < 11) {
              date.month = this.month + 1;
            } else {
              date.month = 0;
              date.year++;
            }
          }
          // process limit dates
          var dateObj = new Date(date.year, date.month, date.date);
          var afterFrom = true;
          var beforeTo = true;
          if (this.limit && this.limit.from) {
            afterFrom = dateObj >= this.limit.from;
          }
          if (this.limit && this.limit.to) {
            beforeTo = dateObj < this.limit.to;
          }
          date.disabled = !afterFrom || !beforeTo;
          date.classes = isFunction(this.dateClass) ? this.dateClass(dateObj) : '';
          rows[i].push(date);
        }
      }
      return rows;
    }
  },
  methods: {
    tWeekName: function tWeekName(index) {
      return this.t('uiv.datePicker.week' + index);
    },
    getBtnType: function getBtnType(date) {
      if (this.date && date.date === this.date.getDate() && date.month === this.date.getMonth() && date.year === this.date.getFullYear()) {
        return 'primary';
      } else if (date.date === this.today.getDate() && date.month === this.today.getMonth() && date.year === this.today.getFullYear()) {
        return 'info';
      } else {
        return 'default';
      }
    },
    select: function select(date) {
      this.$emit('date-change', date);
    },
    goPrevMonth: function goPrevMonth() {
      var month = this.month;
      var year = this.year;
      if (this.month > 0) {
        month--;
      } else {
        month = 11;
        year--;
        this.$emit('year-change', year);
      }
      this.$emit('month-change', month);
    },
    goNextMonth: function goNextMonth() {
      var month = this.month;
      var year = this.year;
      if (this.month < 11) {
        month++;
      } else {
        month = 0;
        year++;
        this.$emit('year-change', year);
      }
      this.$emit('month-change', month);
    },
    changeView: function changeView() {
      this.$emit('view-change', 'm');
    }
  }
};

var MonthView = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { staticStyle: { "width": "100%" }, attrs: { "role": "grid" } }, [_c('thead', [_c('tr', [_c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goPrevYear } }, [_c('i', { class: _vm.iconControlLeft })])], 1), _vm._v(" "), _c('td', { attrs: { "colspan": "4" } }, [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": function click($event) {
          _vm.changeView();
        } } }, [_c('b', [_vm._v(_vm._s(_vm.year))])])], 1), _vm._v(" "), _c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goNextYear } }, [_c('i', { class: _vm.iconControlRight })])], 1)])]), _vm._v(" "), _c('tbody', _vm._l(_vm.rows, function (row, i) {
      return _c('tr', _vm._l(row, function (month, j) {
        return _c('td', { attrs: { "colspan": "2", "width": "33.333333%" } }, [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm", "type": _vm.getBtnClass(i * 3 + j) }, on: { "click": function click($event) {
              _vm.changeView(i * 3 + j);
            } } }, [_c('span', [_vm._v(_vm._s(_vm.tCell(month)))])])], 1);
      }));
    }))]);
  }, staticRenderFns: [],
  components: { Btn: Btn },
  mixins: [Local],
  props: {
    month: Number,
    year: Number,
    iconControlLeft: String,
    iconControlRight: String
  },
  data: function data() {
    return {
      rows: []
    };
  },
  mounted: function mounted() {
    for (var i = 0; i < 4; i++) {
      this.rows.push([]);
      for (var j = 0; j < 3; j++) {
        this.rows[i].push(i * 3 + j + 1);
      }
    }
  },

  methods: {
    tCell: function tCell(cell) {
      return this.t('uiv.datePicker.month' + cell);
    },
    getBtnClass: function getBtnClass(month) {
      if (month === this.month) {
        return 'primary';
      } else {
        return 'default';
      }
    },
    goPrevYear: function goPrevYear() {
      this.$emit('year-change', this.year - 1);
    },
    goNextYear: function goNextYear() {
      this.$emit('year-change', this.year + 1);
    },
    changeView: function changeView(monthIndex) {
      if (isExist(monthIndex)) {
        this.$emit('month-change', monthIndex);
        this.$emit('view-change', 'd');
      } else {
        this.$emit('view-change', 'y');
      }
    }
  }
};

var YearView = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { staticStyle: { "width": "100%" }, attrs: { "role": "grid" } }, [_c('thead', [_c('tr', [_c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goPrevYear } }, [_c('i', { class: _vm.iconControlLeft })])], 1), _vm._v(" "), _c('td', { attrs: { "colspan": "3" } }, [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" } }, [_c('b', [_vm._v(_vm._s(_vm.yearStr))])])], 1), _vm._v(" "), _c('td', [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm" }, on: { "click": _vm.goNextYear } }, [_c('i', { class: _vm.iconControlRight })])], 1)])]), _vm._v(" "), _c('tbody', _vm._l(_vm.rows, function (row) {
      return _c('tr', _vm._l(row, function (year) {
        return _c('td', { attrs: { "width": "20%" } }, [_c('btn', { staticStyle: { "border": "none" }, attrs: { "block": "", "size": "sm", "type": _vm.getBtnClass(year) }, on: { "click": function click($event) {
              _vm.changeView(year);
            } } }, [_c('span', [_vm._v(_vm._s(year))])])], 1);
      }));
    }))]);
  }, staticRenderFns: [],
  components: { Btn: Btn },
  props: {
    year: Number,
    iconControlLeft: String,
    iconControlRight: String
  },
  computed: {
    rows: function rows() {
      var rows = [];
      var yearGroupStart = this.year - this.year % 20;
      for (var i = 0; i < 4; i++) {
        rows.push([]);
        for (var j = 0; j < 5; j++) {
          rows[i].push(yearGroupStart + i * 5 + j);
        }
      }
      return rows;
    },
    yearStr: function yearStr() {
      var start = this.year - this.year % 20;
      return start + ' ~ ' + (start + 19);
    }
  },
  methods: {
    getBtnClass: function getBtnClass(year) {
      if (year === this.year) {
        return 'primary';
      } else {
        return 'default';
      }
    },
    goPrevYear: function goPrevYear() {
      this.$emit('year-change', this.year - 20);
    },
    goNextYear: function goNextYear() {
      this.$emit('year-change', this.year + 20);
    },
    changeView: function changeView(year) {
      this.$emit('year-change', year);
      this.$emit('view-change', 'm');
    }
  }
};

var DatePicker = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { style: _vm.pickerStyle, attrs: { "data-role": "date-picker" }, on: { "click": _vm.onPickerClick } }, [_c('date-view', { directives: [{ name: "show", rawName: "v-show", value: _vm.view === 'd', expression: "view==='d'" }], attrs: { "month": _vm.currentMonth, "year": _vm.currentYear, "date": _vm.valueDateObj, "today": _vm.now, "limit": _vm.limit, "week-starts-with": _vm.weekStartsWith, "icon-control-left": _vm.iconControlLeft, "icon-control-right": _vm.iconControlRight, "date-class": _vm.dateClass }, on: { "month-change": _vm.onMonthChange, "year-change": _vm.onYearChange, "date-change": _vm.onDateChange, "view-change": _vm.onViewChange } }), _vm._v(" "), _c('month-view', { directives: [{ name: "show", rawName: "v-show", value: _vm.view === 'm', expression: "view==='m'" }], attrs: { "month": _vm.currentMonth, "year": _vm.currentYear, "icon-control-left": _vm.iconControlLeft, "icon-control-right": _vm.iconControlRight }, on: { "month-change": _vm.onMonthChange, "year-change": _vm.onYearChange, "view-change": _vm.onViewChange } }), _vm._v(" "), _c('year-view', { directives: [{ name: "show", rawName: "v-show", value: _vm.view === 'y', expression: "view==='y'" }], attrs: { "year": _vm.currentYear, "icon-control-left": _vm.iconControlLeft, "icon-control-right": _vm.iconControlRight }, on: { "year-change": _vm.onYearChange, "view-change": _vm.onViewChange } }), _vm._v(" "), _vm.todayBtn || _vm.clearBtn ? _c('div', [_c('br'), _vm._v(" "), _c('div', { staticClass: "text-center" }, [_vm.todayBtn ? _c('btn', { attrs: { "data-action": "select", "type": "info", "size": "sm" }, on: { "click": _vm.selectToday } }, [_vm._v(_vm._s(_vm.t('uiv.datePicker.today')))]) : _vm._e(), _vm._v(" "), _vm.clearBtn ? _c('btn', { attrs: { "data-action": "select", "size": "sm" }, on: { "click": _vm.clearSelect } }, [_vm._v(_vm._s(_vm.t('uiv.datePicker.clear')))]) : _vm._e()], 1)]) : _vm._e()], 1);
  }, staticRenderFns: [],
  mixins: [Local],
  components: { DateView: DateView, MonthView: MonthView, YearView: YearView, Btn: Btn },
  props: {
    value: null,
    width: {
      type: Number,
      default: 270
    },
    todayBtn: {
      type: Boolean,
      default: true
    },
    clearBtn: {
      type: Boolean,
      default: true
    },
    closeOnSelected: {
      type: Boolean,
      default: true
    },
    limitFrom: null,
    limitTo: null,
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    initialView: {
      type: String,
      default: 'd'
    },
    dateParser: {
      type: Function,
      default: Date.parse
    },
    dateClass: Function,
    weekStartsWith: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0 && value <= 6;
      }
    },
    iconControlLeft: {
      type: String,
      default: 'glyphicon glyphicon-chevron-left'
    },
    iconControlRight: {
      type: String,
      default: 'glyphicon glyphicon-chevron-right'
    }
  },
  data: function data() {
    return {
      show: false,
      now: new Date(),
      currentMonth: 0,
      currentYear: 0,
      view: 'd'
    };
  },

  computed: {
    valueDateObj: function valueDateObj() {
      var ts = this.dateParser(this.value);
      if (isNaN(ts)) {
        return null;
      } else {
        var date = new Date(ts);
        if (date.getHours() !== 0) {
          date = new Date(ts + date.getTimezoneOffset() * 60 * 1000);
        }
        return date;
      }
    },
    pickerStyle: function pickerStyle() {
      return {
        width: this.width + 'px'
      };
    },
    limit: function limit() {
      var limit = {};
      if (this.limitFrom) {
        var from = this.dateParser(this.limitFrom);
        if (!isNaN(from)) {
          from = new Date(from);
          from.setHours(0, 0, 0, 0);
          limit.from = from;
        }
      }
      if (this.limitTo) {
        var to = this.dateParser(this.limitTo);
        if (!isNaN(to)) {
          to = new Date(to);
          to.setHours(0, 0, 0, 0);
          limit.to = to;
        }
      }
      return limit;
    }
  },
  mounted: function mounted() {
    if (this.value) {
      this.setMonthAndYearByValue(this.value);
    } else {
      this.currentMonth = this.now.getMonth();
      this.currentYear = this.now.getFullYear();
      this.view = this.initialView;
    }
  },

  watch: {
    value: function value(val, oldVal) {
      this.setMonthAndYearByValue(val, oldVal);
    }
  },
  methods: {
    setMonthAndYearByValue: function setMonthAndYearByValue(val, oldVal) {
      var ts = this.dateParser(val);
      if (!isNaN(ts)) {
        var date = new Date(ts);
        if (date.getHours() !== 0) {
          date = new Date(ts + date.getTimezoneOffset() * 60 * 1000);
        }
        if (this.limit && (this.limit.from && date < this.limit.from || this.limit.to && date >= this.limit.to)) {
          this.$emit('input', oldVal || '');
        } else {
          this.currentMonth = date.getMonth();
          this.currentYear = date.getFullYear();
        }
      }
    },
    onMonthChange: function onMonthChange(month) {
      this.currentMonth = month;
    },
    onYearChange: function onYearChange(year) {
      this.currentYear = year;
      this.currentMonth = undefined;
    },
    onDateChange: function onDateChange(date) {
      if (date && isNumber(date.date) && isNumber(date.month) && isNumber(date.year)) {
        var _date = new Date(date.year, date.month, date.date);
        this.$emit('input', stringify(_date, this.format));
      } else {
        this.$emit('input', '');
      }
    },
    onViewChange: function onViewChange(view) {
      this.view = view;
    },
    selectToday: function selectToday() {
      this.view = 'd';
      this.onDateChange({
        date: this.now.getDate(),
        month: this.now.getMonth(),
        year: this.now.getFullYear()
      });
    },
    clearSelect: function clearSelect() {
      this.view = 'd';
      this.onDateChange();
    },
    onPickerClick: function onPickerClick(event) {
      if (event.target.getAttribute('data-action') !== 'select' || !this.closeOnSelected) {
        event.stopPropagation();
      }
    }
  }
};

var HANDLER = '_uiv_scroll_handler';
var events = [EVENTS.RESIZE, EVENTS.SCROLL];

var bind = function bind(el, binding) {
  var callback = binding.value;
  if (!isFunction(callback)) {
    return;
  }
  unbind(el);
  el[HANDLER] = callback;
  events.forEach(function (event) {
    on(window, event, el[HANDLER]);
  });
};

var unbind = function unbind(el) {
  events.forEach(function (event) {
    off(window, event, el[HANDLER]);
  });
  delete el[HANDLER];
};

var update = function update(el, binding) {
  if (binding.value !== binding.oldValue) {
    bind(el, binding);
  }
};

var scroll = { bind: bind, unbind: unbind, update: update };

var Affix = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "hidden-print" }, [_c('div', { directives: [{ name: "scroll", rawName: "v-scroll", value: _vm.onScroll, expression: "onScroll" }], class: _vm.classes, style: _vm.styles }, [_vm._t("default")], 2)]);
  }, staticRenderFns: [],
  directives: {
    scroll: scroll
  },
  props: {
    offset: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      affixed: false
    };
  },

  computed: {
    classes: function classes() {
      return {
        affix: this.affixed
      };
    },
    styles: function styles() {
      return {
        top: this.affixed ? this.offset + 'px' : null
      };
    }
  },
  methods: {
    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
    onScroll: function onScroll() {
      var _this = this;

      // if is hidden don't calculate anything
      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
        return;
      }
      // get window scroll and element position to detect if have to be normal or affixed
      var scroll$$1 = {};
      var element = {};
      var rect = this.$el.getBoundingClientRect();
      var body = document.body;
      var _arr = ['Top', 'Left'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var type = _arr[_i];
        var t = type.toLowerCase();
        scroll$$1[t] = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
        element[t] = scroll$$1[t] + rect[t] - (this.$el['client' + type] || body['client' + type] || 0);
      }
      var fix = scroll$$1.top > element.top - this.offset;
      if (this.affixed !== fix) {
        this.affixed = fix;
        if (this.affixed) {
          this.$emit('affix');
          this.$nextTick(function () {
            _this.$emit('affixed');
          });
        }
      }
    }
  }
};

var Alert = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.alertClass, attrs: { "role": "alert" } }, [_vm.dismissible ? _c('button', { staticClass: "close", attrs: { "type": "button", "aria-label": "Close" }, on: { "click": _vm.closeAlert } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
  }, staticRenderFns: [],
  props: {
    dismissible: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data: function data() {
    return {
      timeout: 0
    };
  },

  computed: {
    alertClass: function alertClass() {
      var _ref;

      return _ref = {
        'alert': true
      }, defineProperty(_ref, "alert-" + this.type, Boolean(this.type)), defineProperty(_ref, 'alert-dismissible', this.dismissible), _ref;
    }
  },
  methods: {
    closeAlert: function closeAlert() {
      clearTimeout(this.timeout);
      this.$emit('dismissed');
    }
  },
  mounted: function mounted() {
    if (this.duration > 0) {
      this.timeout = setTimeout(this.closeAlert, this.duration);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.timeout);
  }
};

var Pagination = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('nav', { class: _vm.navClasses, attrs: { "aria-label": "Page navigation" } }, [_c('ul', { staticClass: "pagination", class: _vm.classes }, [_vm.boundaryLinks ? _c('li', { class: { disabled: _vm.value <= 1 || _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "First" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.onPageChange(1);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("«")])])]) : _vm._e(), _vm._v(" "), _vm.directionLinks ? _c('li', { class: { disabled: _vm.value <= 1 || _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "Previous" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.onPageChange(_vm.value - 1);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("‹")])])]) : _vm._e(), _vm._v(" "), _vm.sliceStart > 0 ? _c('li', { class: { disabled: _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "Previous group" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.toPage(1);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("…")])])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.sliceArray, function (item) {
      return _c('li', { key: item, class: { active: _vm.value === item + 1, disabled: _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button" }, on: { "click": function click($event) {
            $event.preventDefault();_vm.onPageChange(item + 1);
          } } }, [_vm._v(_vm._s(item + 1))])]);
    }), _vm._v(" "), _vm.sliceStart < _vm.totalPage - _vm.maxSize ? _c('li', { class: { disabled: _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "Next group" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.toPage(0);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("…")])])]) : _vm._e(), _vm._v(" "), _vm.directionLinks ? _c('li', { class: { disabled: _vm.value >= _vm.totalPage || _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "Next" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.onPageChange(_vm.value + 1);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("›")])])]) : _vm._e(), _vm._v(" "), _vm.boundaryLinks ? _c('li', { class: { disabled: _vm.value >= _vm.totalPage || _vm.disabled } }, [_c('a', { attrs: { "href": "#", "role": "button", "aria-label": "Last" }, on: { "click": function click($event) {
          $event.preventDefault();_vm.onPageChange(_vm.totalPage);
        } } }, [_c('span', { attrs: { "aria-hidden": "true" } }, [_vm._v("»")])])]) : _vm._e()], 2)]);
  }, staticRenderFns: [],
  props: {
    value: {
      type: Number,
      required: true,
      validator: function validator(v) {
        return v >= 1;
      }
    },
    boundaryLinks: {
      type: Boolean,
      default: false
    },
    directionLinks: {
      type: Boolean,
      default: true
    },
    size: String,
    align: String,
    totalPage: {
      type: Number,
      required: true,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    maxSize: {
      type: Number,
      default: 5,
      validator: function validator(v) {
        return v >= 0;
      }
    },
    disabled: Boolean
  },
  data: function data() {
    return {
      sliceStart: 0
    };
  },

  computed: {
    navClasses: function navClasses() {
      return defineProperty({}, 'text-' + this.align, Boolean(this.align));
    },
    classes: function classes() {
      return defineProperty({}, 'pagination-' + this.size, Boolean(this.size));
    },
    sliceArray: function sliceArray() {
      return range(this.totalPage).slice(this.sliceStart, this.sliceStart + this.maxSize);
    }
  },
  methods: {
    calculateSliceStart: function calculateSliceStart() {
      var currentPage = this.value;
      var chunkSize = this.maxSize;
      var currentChunkStart = this.sliceStart;
      var currentChunkEnd = currentChunkStart + chunkSize;
      if (currentPage > currentChunkEnd) {
        var lastChunkStart = this.totalPage - chunkSize;
        if (currentPage > lastChunkStart) {
          this.sliceStart = lastChunkStart;
        } else {
          this.sliceStart = currentPage - 1;
        }
      } else if (currentPage < currentChunkStart + 1) {
        if (currentPage > chunkSize) {
          this.sliceStart = currentPage - chunkSize;
        } else {
          this.sliceStart = 0;
        }
      }
    },
    onPageChange: function onPageChange(page) {
      if (!this.disabled && page > 0 && page <= this.totalPage) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    },
    toPage: function toPage(pre) {
      if (this.disabled) {
        return;
      }
      var chunkSize = this.maxSize;
      var currentChunkStart = this.sliceStart;
      var lastChunkStart = this.totalPage - chunkSize;
      var start = pre ? currentChunkStart - chunkSize : currentChunkStart + chunkSize;
      if (start < 0) {
        this.sliceStart = 0;
      } else if (start > lastChunkStart) {
        this.sliceStart = lastChunkStart;
      } else {
        this.sliceStart = start;
      }
    }
  },
  created: function created() {
    this.$watch(function (vm) {
      return [vm.value, vm.maxSize, vm.totalPage].join();
    }, this.calculateSliceStart, {
      immediate: true
    });
  }
};

var SHOW_CLASS = 'in';

var popupMixin = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'span'
    },
    placement: {
      type: String,
      default: PLACEMENTS.TOP
    },
    autoPlacement: {
      type: Boolean,
      default: true
    },
    appendTo: {
      type: String,
      default: 'body'
    },
    transitionDuration: {
      type: Number,
      default: 150
    },
    enable: {
      type: Boolean,
      default: true
    },
    enterable: {
      type: Boolean,
      default: true
    },
    target: null
  },
  data: function data() {
    return {
      triggerEl: null,
      timeoutId: 0
    };
  },

  watch: {
    value: function value(v) {
      v ? this.show() : this.hide();
    },
    trigger: function trigger() {
      this.clearListeners();
      this.initListeners();
    },
    target: function target(value) {
      this.clearListeners();
      this.initTriggerElByTarget(value);
      this.initListeners();
    },
    allContent: function allContent(value) {
      var _this = this;

      // can not use value because it can not detect slot changes
      if (this.isNotEmpty()) {
        // reset position while content changed & is shown
        // nextTick is required
        this.$nextTick(function () {
          if (_this.isShown()) {
            _this.resetPosition();
          }
        });
      } else {
        this.hide();
      }
    },
    enable: function enable(value) {
      // hide if enable changed to false
      if (!value) {
        this.hide();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    ensureElementMatchesFunction();
    removeFromDom(this.$refs.popup);
    this.$nextTick(function () {
      _this2.initTriggerElByTarget(_this2.target);
      _this2.initListeners();
      if (_this2.value) {
        _this2.show();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearListeners();
    removeFromDom(this.$refs.popup);
  },

  methods: {
    initTriggerElByTarget: function initTriggerElByTarget(target) {
      if (target) {
        // target exist
        if (isString(target)) {
          // is selector
          this.triggerEl = document.querySelector(target);
        } else if (isElement(target)) {
          // is element
          this.triggerEl = target;
        } else if (isElement(target.$el)) {
          // is component
          this.triggerEl = target.$el;
        }
      } else {
        // find special element
        var trigger = this.$el.querySelector('[data-role="trigger"]');
        if (trigger) {
          this.triggerEl = trigger;
        } else {
          // use the first child
          var firstChild = this.$el.firstChild;
          this.triggerEl = firstChild === this.$refs.popup ? null : firstChild;
        }
      }
    },
    initListeners: function initListeners() {
      if (this.triggerEl) {
        if (this.trigger === TRIGGERS.HOVER) {
          on(this.triggerEl, EVENTS.MOUSE_ENTER, this.show);
          on(this.triggerEl, EVENTS.MOUSE_LEAVE, this.hide);
        } else if (this.trigger === TRIGGERS.FOCUS) {
          on(this.triggerEl, EVENTS.FOCUS, this.show);
          on(this.triggerEl, EVENTS.BLUR, this.hide);
        } else if (this.trigger === TRIGGERS.HOVER_FOCUS) {
          on(this.triggerEl, EVENTS.MOUSE_ENTER, this.handleAuto);
          on(this.triggerEl, EVENTS.MOUSE_LEAVE, this.handleAuto);
          on(this.triggerEl, EVENTS.FOCUS, this.handleAuto);
          on(this.triggerEl, EVENTS.BLUR, this.handleAuto);
        } else if (this.trigger === TRIGGERS.CLICK || this.trigger === TRIGGERS.OUTSIDE_CLICK) {
          on(this.triggerEl, EVENTS.CLICK, this.toggle);
        }
      }
      on(window, EVENTS.CLICK, this.windowClicked);
    },
    clearListeners: function clearListeners() {
      if (this.triggerEl) {
        off(this.triggerEl, EVENTS.FOCUS, this.show);
        off(this.triggerEl, EVENTS.BLUR, this.hide);
        off(this.triggerEl, EVENTS.MOUSE_ENTER, this.show);
        off(this.triggerEl, EVENTS.MOUSE_LEAVE, this.hide);
        off(this.triggerEl, EVENTS.CLICK, this.toggle);
        off(this.triggerEl, EVENTS.MOUSE_ENTER, this.handleAuto);
        off(this.triggerEl, EVENTS.MOUSE_LEAVE, this.handleAuto);
        off(this.triggerEl, EVENTS.FOCUS, this.handleAuto);
        off(this.triggerEl, EVENTS.BLUR, this.handleAuto);
      }
      off(window, EVENTS.CLICK, this.windowClicked);
    },
    resetPosition: function resetPosition() {
      var popup = this.$refs.popup;
      setTooltipPosition(popup, this.triggerEl, this.placement, this.autoPlacement, this.appendTo);
      popup.offsetHeight;
    },
    hideOnLeave: function hideOnLeave() {
      if (this.trigger === TRIGGERS.HOVER || this.trigger === TRIGGERS.HOVER_FOCUS && !this.triggerEl.matches(':focus')) {
        this.$hide();
      }
    },
    toggle: function toggle() {
      if (this.isShown()) {
        this.hide();
      } else {
        this.show();
      }
    },
    show: function show() {
      if (this.enable && this.triggerEl && this.isNotEmpty() && !this.isShown()) {
        var popup = this.$refs.popup;
        if (this.timeoutId > 0) {
          clearTimeout(this.timeoutId);
          this.timeoutId = 0;
        } else {
          popup.className = this.name + ' ' + this.placement + ' fade';
          var container = document.querySelector(this.appendTo);
          container.appendChild(popup);
          this.resetPosition();
        }
        addClass(popup, SHOW_CLASS);
        this.$emit('input', true);
        this.$emit('show');
      }
    },
    hide: function hide() {
      var _this3 = this;

      if (!this.isShown()) {
        return;
      }
      if (this.enterable && (this.trigger === TRIGGERS.HOVER || this.trigger === TRIGGERS.HOVER_FOCUS)) {
        setTimeout(function () {
          if (!_this3.$refs.popup.matches(':hover')) {
            _this3.$hide();
          }
        }, 100);
      } else {
        this.$hide();
      }
    },
    $hide: function $hide() {
      var _this4 = this;

      if (this.isShown()) {
        clearTimeout(this.timeoutId);
        removeClass(this.$refs.popup, SHOW_CLASS);
        this.timeoutId = setTimeout(function () {
          removeFromDom(_this4.$refs.popup);
          _this4.timeoutId = 0;
          _this4.$emit('input', false);
          _this4.$emit('hide');
        }, this.transitionDuration);
      }
    },
    isShown: function isShown() {
      return hasClass(this.$refs.popup, SHOW_CLASS);
    },
    windowClicked: function windowClicked(event) {
      if (this.triggerEl && !this.triggerEl.contains(event.target) && this.trigger === TRIGGERS.OUTSIDE_CLICK && !this.$refs.popup.contains(event.target) && this.isShown()) {
        this.hide();
      }
    },
    handleAuto: function handleAuto() {
      var _this5 = this;

      setTimeout(function () {
        if (_this5.triggerEl.matches(':hover, :focus')) {
          _this5.show();
        } else {
          _this5.hide();
        }
      }, 20); // 20ms make firefox happy
    }
  }
};

var Tooltip = {
  mixins: [popupMixin],
  data: function data() {
    return {
      name: 'tooltip'
    };
  },
  render: function render(h) {
    return h(this.tag, [this.$slots.default, h('div', {
      ref: 'popup',
      attrs: {
        role: 'tooltip'
      },
      on: {
        mouseleave: this.hideOnLeave
      }
    }, [h('div', { 'class': 'tooltip-arrow' }), h('div', {
      'class': 'tooltip-inner',
      domProps: { innerHTML: this.text }
    })])]);
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: TRIGGERS.HOVER_FOCUS
    }
  },
  computed: {
    allContent: function allContent() {
      return this.text;
    }
  },
  methods: {
    isNotEmpty: function isNotEmpty() {
      return this.text;
    }
  }
};

var Popover = {
  mixins: [popupMixin],
  data: function data() {
    return {
      name: 'popover'
    };
  },
  render: function render(h) {
    return h(this.tag, [this.$slots.default, h('div', {
      style: {
        display: 'block'
      },
      ref: 'popup',
      on: {
        mouseleave: this.hideOnLeave
      }
    }, [h('div', { 'class': 'arrow' }), h('h3', {
      'class': 'popover-title',
      directives: [{ name: 'show', value: this.title }]
    }, this.title), h('div', { 'class': 'popover-content' }, [this.content || this.$slots.popover])])]);
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: TRIGGERS.OUTSIDE_CLICK
    }
  },
  computed: {
    allContent: function allContent() {
      return this.title + this.content;
    }
  },
  methods: {
    isNotEmpty: function isNotEmpty() {
      return this.title || this.content || this.$slots.popover;
    }
  }
};

var maxHours = 23;
var zero = 0;
var maxMinutes = 59;
var cutUpAmAndPm = 12;

var TimePicker = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { on: { "click": function click($event) {
          $event.stopPropagation();
        } } }, [_c('table', [_c('tbody', [_vm.controls ? _c('tr', { staticClass: "text-center" }, [_c('td', [_c('btn', { attrs: { "type": "link", "size": "sm", "disabled": _vm.readonly }, on: { "click": function click($event) {
          _vm.changeTime(1, 1);
        } } }, [_c('i', { class: _vm.iconControlUp })])], 1), _vm._v(" "), _c('td', [_vm._v(" ")]), _vm._v(" "), _c('td', [_c('btn', { attrs: { "type": "link", "size": "sm", "disabled": _vm.readonly }, on: { "click": function click($event) {
          _vm.changeTime(0, 1);
        } } }, [_c('i', { class: _vm.iconControlUp })])], 1), _vm._v(" "), _vm.showMeridian ? _c('td') : _vm._e()]) : _vm._e(), _vm._v(" "), _c('tr', [_c('td', { staticClass: "form-group" }, [_c('input', { directives: [{ name: "model", rawName: "v-model.lazy", value: _vm.hoursText, expression: "hoursText", modifiers: { "lazy": true } }], ref: "hoursInput", staticClass: "form-control text-center", staticStyle: { "width": "50px" }, attrs: { "type": "tel", "pattern": "\\d*", "placeholder": "HH", "readonly": _vm.readonly, "maxlength": "2", "size": "2" }, domProps: { "value": _vm.hoursText }, on: { "mouseup": _vm.selectInputValue, "keydown": [function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) {
            return null;
          }$event.preventDefault();_vm.changeTime(1, 1);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) {
            return null;
          }$event.preventDefault();_vm.changeTime(1, 0);
        }], "wheel": function wheel($event) {
          _vm.onWheel($event, true);
        }, "change": function change($event) {
          _vm.hoursText = $event.target.value;
        } } })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', { staticClass: "form-group" }, [_c('input', { directives: [{ name: "model", rawName: "v-model.lazy", value: _vm.minutesText, expression: "minutesText", modifiers: { "lazy": true } }], ref: "minutesInput", staticClass: "form-control text-center", staticStyle: { "width": "50px" }, attrs: { "type": "tel", "pattern": "\\d*", "placeholder": "MM", "readonly": _vm.readonly, "maxlength": "2", "size": "2" }, domProps: { "value": _vm.minutesText }, on: { "mouseup": _vm.selectInputValue, "keydown": [function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) {
            return null;
          }$event.preventDefault();_vm.changeTime(0, 1);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) {
            return null;
          }$event.preventDefault();_vm.changeTime(0, 0);
        }], "wheel": function wheel($event) {
          _vm.onWheel($event, false);
        }, "change": function change($event) {
          _vm.minutesText = $event.target.value;
        } } })]), _vm._v(" "), _vm.showMeridian ? _c('td', [_vm._v("   "), _c('btn', { attrs: { "data-action": "toggleMeridian", "disabled": _vm.readonly }, domProps: { "textContent": _vm._s(_vm.meridian ? _vm.t('uiv.timePicker.am') : _vm.t('uiv.timePicker.pm')) }, on: { "click": _vm.toggleMeridian } })], 1) : _vm._e()]), _vm._v(" "), _vm.controls ? _c('tr', { staticClass: "text-center" }, [_c('td', [_c('btn', { attrs: { "type": "link", "size": "sm", "disabled": _vm.readonly }, on: { "click": function click($event) {
          _vm.changeTime(1, 0);
        } } }, [_c('i', { class: _vm.iconControlDown })])], 1), _vm._v(" "), _c('td', [_vm._v(" ")]), _vm._v(" "), _c('td', [_c('btn', { attrs: { "type": "link", "size": "sm", "disabled": _vm.readonly }, on: { "click": function click($event) {
          _vm.changeTime(0, 0);
        } } }, [_c('i', { class: _vm.iconControlDown })])], 1), _vm._v(" "), _vm.showMeridian ? _c('td') : _vm._e()]) : _vm._e()])])]);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('td', [_vm._v(" "), _c('b', [_vm._v(":")]), _vm._v(" ")]);
  }],
  components: { Btn: Btn },
  mixins: [Local],
  props: {
    value: {
      type: Date,
      required: true
    },
    showMeridian: {
      type: Boolean,
      default: true
    },
    min: Date,
    max: Date,
    hourStep: {
      type: Number,
      default: 1
    },
    minStep: {
      type: Number,
      default: 1
    },
    readonly: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    iconControlUp: {
      type: String,
      default: 'glyphicon glyphicon-chevron-up'
    },
    iconControlDown: {
      type: String,
      default: 'glyphicon glyphicon-chevron-down'
    }
  },
  data: function data() {
    return {
      hours: 0,
      minutes: 0,
      meridian: true,
      hoursText: '',
      minutesText: ''
    };
  },
  mounted: function mounted() {
    this.updateByValue(this.value);
  },

  watch: {
    value: function value(_value) {
      this.updateByValue(_value);
    },
    showMeridian: function showMeridian(value) {
      this.setTime();
    },
    hoursText: function hoursText(value) {
      if (this.hours === 0 && value === '') {
        // Prevent a runtime reset from being overwritten
        return;
      }
      var hour = parseInt(value);
      if (this.showMeridian) {
        if (hour >= 1 && hour <= cutUpAmAndPm) {
          if (this.meridian) {
            this.hours = hour === cutUpAmAndPm ? 0 : hour;
          } else {
            this.hours = hour === cutUpAmAndPm ? cutUpAmAndPm : hour + cutUpAmAndPm;
          }
        }
      } else if (hour >= zero && hour <= maxHours) {
        this.hours = hour;
      }
      this.setTime();
    },
    minutesText: function minutesText(value) {
      if (this.minutes === 0 && value === '') {
        // Prevent a runtime reset from being overwritten
        return;
      }
      var minutesStr = parseInt(value);
      if (minutesStr >= zero && minutesStr <= maxMinutes) {
        this.minutes = minutesStr;
      }
      this.setTime();
    }
  },
  methods: {
    updateByValue: function updateByValue(value) {
      if (isNaN(value.getTime())) {
        this.hours = 0;
        this.minutes = 0;
        this.hoursText = '';
        this.minutesText = '';
        this.meridian = true;
        return;
      }
      this.hours = value.getHours();
      this.minutes = value.getMinutes();
      if (!this.showMeridian) {
        this.hoursText = pad(this.hours, 2);
      } else {
        if (this.hours >= cutUpAmAndPm) {
          if (this.hours === cutUpAmAndPm) {
            this.hoursText = this.hours + '';
          } else {
            this.hoursText = pad(this.hours - cutUpAmAndPm, 2);
          }
          this.meridian = false;
        } else {
          if (this.hours === zero) {
            this.hoursText = cutUpAmAndPm.toString();
          } else {
            this.hoursText = pad(this.hours, 2);
          }
          this.meridian = true;
        }
      }
      this.minutesText = pad(this.minutes, 2);
      // lazy model won't update when using keyboard up/down
      this.$refs.hoursInput.value = this.hoursText;
      this.$refs.minutesInput.value = this.minutesText;
    },
    addHour: function addHour(step) {
      step = step || this.hourStep;
      this.hours = this.hours >= maxHours ? zero : this.hours + step;
    },
    reduceHour: function reduceHour(step) {
      step = step || this.hourStep;
      this.hours = this.hours <= zero ? maxHours : this.hours - step;
    },
    addMinute: function addMinute() {
      if (this.minutes >= maxMinutes) {
        this.minutes = zero;
        this.addHour(1);
      } else {
        this.minutes += this.minStep;
      }
    },
    reduceMinute: function reduceMinute() {
      if (this.minutes <= zero) {
        this.minutes = maxMinutes;
        this.reduceHour(1);
      } else {
        this.minutes -= this.minStep;
      }
    },
    changeTime: function changeTime(isHour, isPlus) {
      if (!this.readonly) {
        if (isHour && isPlus) {
          this.addHour();
        } else if (isHour && !isPlus) {
          this.reduceHour();
        } else if (!isHour && isPlus) {
          this.addMinute();
        } else {
          this.reduceMinute();
        }
        this.setTime();
      }
    },
    toggleMeridian: function toggleMeridian() {
      this.meridian = !this.meridian;
      if (this.meridian) {
        this.hours -= cutUpAmAndPm;
      } else {
        this.hours += cutUpAmAndPm;
      }
      this.setTime();
    },
    onWheel: function onWheel(e, isHour) {
      if (!this.readonly) {
        e.preventDefault();
        this.changeTime(isHour, e.deltaY < 0);
      }
    },
    setTime: function setTime() {
      var time = this.value;
      if (isNaN(time.getTime())) {
        time = new Date();
        time.setHours(0);
        time.setMinutes(0);
      }
      time.setHours(this.hours);
      time.setMinutes(this.minutes);
      if (this.max) {
        var max = new Date(time);
        max.setHours(this.max.getHours());
        max.setMinutes(this.max.getMinutes());
        time = time > max ? max : time;
      }
      if (this.min) {
        var min = new Date(time);
        min.setHours(this.min.getHours());
        min.setMinutes(this.min.getMinutes());
        time = time < min ? min : time;
      }
      this.$emit('input', new Date(time));
    },
    selectInputValue: function selectInputValue(e) {
      // mouseup should be prevented!
      // See various comments in https://stackoverflow.com/questions/3272089/programmatically-selecting-text-in-an-input-field-on-ios-devices-mobile-safari
      e.target.setSelectionRange(0, 2);
    }
  }
};

function getRequest(url) {
  var request = new window.XMLHttpRequest();
  var data = {};
  var p = {
    then: function then(fn1, fn2) {
      return p.done(fn1).fail(fn2);
    },
    catch: function _catch(fn) {
      return p.fail(fn);
    },
    always: function always(fn) {
      return p.done(fn).fail(fn);
    }
  };
  var statuses = ['done', 'fail'];
  statuses.forEach(function (name) {
    data[name] = [];
    p[name] = function (fn) {
      if (fn instanceof Function) data[name].push(fn);
      return p;
    };
  });
  p.done(JSON.parse);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      var e = { status: request.status };
      if (request.status === 200) {
        var response = request.responseText;
        for (var i in data.done) {
          if (data.done.hasOwnProperty(i) && isFunction(data.done[i])) {
            var value = data.done[i](response);
            if (isExist(value)) {
              response = value;
            }
          }
        }
      } else {
        data.fail.forEach(function (fail) {
          return fail(e);
        });
      }
    }
  };
  request.open('GET', url);
  request.setRequestHeader('Accept', 'application/json');
  request.send();
  return p;
}

var Typeahead = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('dropdown', { ref: "dropdown", attrs: { "tag": "section", "append-to-body": _vm.appendToBody, "not-close-elements": _vm.elements, "position-element": _vm.inputEl }, model: { value: _vm.open, callback: function callback($$v) {
          _vm.open = $$v;
        }, expression: "open" } }, [_c('template', { slot: "dropdown" }, [_vm._t("item", _vm._l(_vm.items, function (item, index) {
      return _c('li', { class: { active: _vm.activeIndex === index } }, [_c('a', { attrs: { "href": "#" }, on: { "click": function click($event) {
            $event.preventDefault();_vm.selectItem(item);
          } } }, [_c('span', { domProps: { "innerHTML": _vm._s(_vm.highlight(item)) } })])]);
    }), { items: _vm.items, activeIndex: _vm.activeIndex, select: _vm.selectItem, highlight: _vm.highlight })], 2)], 2);
  }, staticRenderFns: [],
  components: { Dropdown: Dropdown },
  props: {
    value: {
      required: true
    },
    data: Array,
    itemKey: String,
    appendToBody: {
      type: Boolean,
      default: false
    },
    ignoreCase: {
      type: Boolean,
      default: true
    },
    matchStart: {
      type: Boolean,
      default: false
    },
    forceSelect: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 10
    },
    asyncSrc: String,
    asyncKey: String,
    asyncFunction: Function,
    debounce: {
      type: Number,
      default: 200
    },
    openOnFocus: {
      type: Boolean,
      default: true
    },
    openOnEmpty: {
      type: Boolean,
      default: false
    },
    target: {
      required: true
    },
    preselect: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inputEl: null,
      items: [],
      activeIndex: 0,
      timeoutID: 0,
      elements: [],
      open: false,
      dropdownMenuEl: null
    };
  },

  computed: {
    regexOptions: function regexOptions() {
      var options = '';
      if (this.ignoreCase) {
        options += 'i';
      }
      if (!this.matchStart) {
        options += 'g';
      }
      return options;
    }
  },
  mounted: function mounted() {
    var _this = this;

    ensureElementMatchesFunction();
    this.$nextTick(function () {
      _this.initInputElByTarget(_this.target);
      _this.initListeners();
      _this.dropdownMenuEl = _this.$refs.dropdown.$el.querySelector('.dropdown-menu');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
  },

  watch: {
    target: function target(el) {
      this.removeListeners();
      this.initInputElByTarget(el);
      this.initListeners();
    },
    value: function value(_value) {
      if (isString(_value)) {
        // direct
        this.inputEl.value = _value;
      } else if (_value) {
        // is object
        this.inputEl.value = this.itemKey ? _value[this.itemKey] : _value;
      } else if (_value === null) {
        // is null or undefined or something else not valid
        this.inputEl.value = '';
      }
    }
  },
  methods: {
    initInputElByTarget: function initInputElByTarget(target) {
      if (!target) {
        return;
      }
      if (isString(target)) {
        // is selector
        this.inputEl = document.querySelector(target);
      } else if (isElement(target)) {
        // is element
        this.inputEl = target;
      } else if (isElement(target.$el)) {
        // is component
        this.inputEl = target.$el;
      }
    },
    initListeners: function initListeners() {
      if (this.inputEl) {
        this.elements = [this.inputEl];
        on(this.inputEl, EVENTS.FOCUS, this.inputFocused);
        on(this.inputEl, EVENTS.BLUR, this.inputBlured);
        on(this.inputEl, EVENTS.INPUT, this.inputChanged);
        on(this.inputEl, EVENTS.KEY_DOWN, this.inputKeyPressed);
      }
    },
    removeListeners: function removeListeners() {
      this.elements = [];
      if (this.inputEl) {
        off(this.inputEl, EVENTS.FOCUS, this.inputFocused);
        off(this.inputEl, EVENTS.BLUR, this.inputBlured);
        off(this.inputEl, EVENTS.INPUT, this.inputChanged);
        off(this.inputEl, EVENTS.KEY_DOWN, this.inputKeyPressed);
      }
    },
    prepareItems: function prepareItems(data) {
      var disableFilters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (disableFilters) {
        this.items = data.slice(0, this.limit);
        return;
      }
      this.items = [];
      this.activeIndex = this.preselect ? 0 : -1;
      for (var i = 0, l = data.length; i < l; i++) {
        var item = data[i];
        var key = this.itemKey ? item[this.itemKey] : item;
        key = key.toString();
        var index = -1;
        if (this.ignoreCase) {
          index = key.toLowerCase().indexOf(this.inputEl.value.toLowerCase());
        } else {
          index = key.indexOf(this.inputEl.value);
        }
        if (this.matchStart ? index === 0 : index >= 0) {
          this.items.push(item);
        }
        if (this.items.length >= this.limit) {
          break;
        }
      }
    },
    fetchItems: function fetchItems(value, debounce) {
      var _this2 = this;

      clearTimeout(this.timeoutID);
      if (value === '' && !this.openOnEmpty) {
        this.open = false;
      } else if (this.data) {
        this.prepareItems(this.data);
        this.open = Boolean(this.items.length);
      } else if (this.asyncSrc) {
        this.timeoutID = setTimeout(function () {
          _this2.$emit('loading');
          getRequest(_this2.asyncSrc + value).then(function (data) {
            if (_this2.inputEl.matches(':focus')) {
              _this2.prepareItems(_this2.asyncKey ? data[_this2.asyncKey] : data, true);
              _this2.open = Boolean(_this2.items.length);
            }
            _this2.$emit('loaded');
          }).catch(function (err) {
            console.error(err);
            _this2.$emit('loaded-error');
          });
        }, debounce);
      } else if (this.asyncFunction) {
        var cb = function cb(data) {
          if (_this2.inputEl.matches(':focus')) {
            _this2.prepareItems(data, true);
            _this2.open = Boolean(_this2.items.length);
          }
          _this2.$emit('loaded');
        };
        this.timeoutID = setTimeout(function () {
          _this2.$emit('loading');
          _this2.asyncFunction(value, cb);
        }, debounce);
      }
    },
    inputChanged: function inputChanged() {
      var value = this.inputEl.value;
      this.fetchItems(value, this.debounce);
      this.$emit('input', this.forceSelect ? undefined : value);
    },
    inputFocused: function inputFocused() {
      if (this.openOnFocus) {
        var value = this.inputEl.value;
        this.fetchItems(value, 0);
      }
    },
    inputBlured: function inputBlured() {
      if (!this.dropdownMenuEl.matches(':hover')) {
        this.open = false;
      }
    },
    inputKeyPressed: function inputKeyPressed(event) {
      if (this.open) {
        switch (event.keyCode) {
          case 13:
            if (this.activeIndex >= 0) {
              this.selectItem(this.items[this.activeIndex]);
            } else {
              this.open = false;
            }
            break;
          case 27:
            this.open = false;
            break;
          case 38:
            this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
            break;
          case 40:
            var maxIndex = this.items.length - 1;
            this.activeIndex = this.activeIndex < maxIndex ? this.activeIndex + 1 : maxIndex;
            break;
        }
      }
    },
    selectItem: function selectItem(item) {
      this.$emit('input', item);
      this.open = false;
    },
    highlight: function highlight(item) {
      var value = this.itemKey ? item[this.itemKey] : item;
      var inputValue = this.inputEl.value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      return value.replace(new RegExp('' + inputValue, this.regexOptions), '<b>$&</b>');
    }
  }
};

var ProgressBarStack = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;

    return h('div', mergeData(data, {
      class: defineProperty({
        'progress-bar': true,
        'progress-bar-striped': props.striped,
        'active': props.striped && props.active
      }, 'progress-bar-' + props.type, Boolean(props.type)),
      style: {
        minWidth: props.minWidth ? '2em' : null,
        width: props.value + '%'
      },
      attrs: {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuenow': props.value,
        'aria-valuemax': 100
      }
    }), props.label ? props.labelText ? props.labelText : props.value + '%' : null);
  },

  props: {
    value: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    labelText: String,
    type: String,
    label: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};

var ProgressBar = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h('div', mergeData(data, { class: 'progress' }), children && children.length ? children : [h(ProgressBarStack, { props: props })]);
  }
};

var BreadcrumbItem = {
  functional: true,
  mixins: [linkMixin],
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var slot = void 0;
    if (props.active) {
      slot = children;
    } else if (props.to) {
      slot = [h('router-link', {
        props: {
          to: props.to,
          replace: props.replace,
          append: props.append,
          exact: props.exact
        }
      }, children)];
    } else {
      slot = [h('a', {
        attrs: {
          href: props.href,
          target: props.target
        }
      }, children)];
    }
    return h('li', mergeData(data, { class: { active: props.active } }), slot);
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};

var Breadcrumbs = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var slot = [];
    if (children && children.length) {
      slot = children;
    } else if (props.items) {
      slot = props.items.map(function (item, index) {
        return h(BreadcrumbItem, {
          key: item.hasOwnProperty('key') ? item.key : index,
          props: {
            active: item.hasOwnProperty('active') ? item.active : index === props.items.length - 1,
            href: item.href,
            target: item.target,
            to: item.to,
            replace: item.replace,
            append: item.append,
            exact: item.exact
          }
        }, item.text);
      });
    }
    return h('ol', mergeData(data, { class: 'breadcrumb' }), slot);
  },

  props: {
    items: Array
  }
};

var BtnToolbar = {
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data;

    return h('div', mergeData(data, {
      class: {
        'btn-toolbar': true
      },
      attrs: {
        role: 'toolbar'
      }
    }), children);
  }
};

var MultiSelect = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('dropdown', { ref: "dropdown", style: _vm.containerStyles, attrs: { "not-close-elements": _vm.els, "append-to-body": _vm.appendToBody, "disabled": _vm.disabled }, nativeOn: { "keydown": function keydown($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) {
            return null;
          }_vm.showDropdown = false;
        } }, model: { value: _vm.showDropdown, callback: function callback($$v) {
          _vm.showDropdown = $$v;
        }, expression: "showDropdown" } }, [_c('div', { staticClass: "form-control dropdown-toggle clearfix", class: _vm.selectClasses, attrs: { "disabled": _vm.disabled, "tabindex": "0" }, on: { "click": function click($event) {
          _vm.showDropdown = true;
        }, "focus": function focus($event) {
          _vm.$emit('focus', $event);
        }, "blur": function blur($event) {
          _vm.$emit('blur', $event);
        }, "keydown": [function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) {
            return null;
          }$event.preventDefault();_vm.goNextOption($event);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) {
            return null;
          }$event.preventDefault();_vm.goPrevOption($event);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
            return null;
          }$event.preventDefault();_vm.selectOption($event);
        }] } }, [_c('div', { class: _vm.selectTextClasses, staticStyle: { "display": "inline-block", "vertical-align": "middle" } }, [_vm._v(_vm._s(_vm.selectedText))]), _vm._v(" "), _c('div', { staticClass: "pull-right", staticStyle: { "display": "inline-block", "vertical-align": "middle" } }, [_c('span', [_vm._v(" ")]), _vm._v(" "), _c('span', { staticClass: "caret" })])]), _vm._v(" "), _c('template', { slot: "dropdown" }, [_vm.filterable ? _c('li', { staticStyle: { "padding": "4px 8px" } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.filterInput, expression: "filterInput" }], staticClass: "form-control input-sm", attrs: { "type": "text", "placeholder": _vm.filterPlaceholder }, domProps: { "value": _vm.filterInput }, on: { "keydown": [function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) {
            return null;
          }$event.preventDefault();_vm.goNextOption($event);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) {
            return null;
          }$event.preventDefault();_vm.goPrevOption($event);
        }, function ($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
            return null;
          }$event.preventDefault();_vm.selectOption($event);
        }], "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.filterInput = $event.target.value;
        } } })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.filteredOptions, function (item, index) {
      return _c('li', { class: _vm.itemClasses(item, index), on: { "click": function click($event) {
            _vm.toggle(item);
          }, "mouseenter": function mouseenter($event) {
            _vm.currentActive = -1;
          } } }, [_vm.isItemSelected(item) ? _c('a', { attrs: { "role": "button" } }, [_c('b', [_vm._v(_vm._s(item[_vm.labelKey]))]), _vm._v(" "), _vm.selectedIcon ? _c('span', { class: _vm.selectedIconClasses }) : _vm._e()]) : _c('a', { attrs: { "role": "button" } }, [_c('span', [_vm._v(_vm._s(item[_vm.labelKey]))])])]);
    })], 2)], 2);
  }, staticRenderFns: [],
  components: { Dropdown: Dropdown },
  props: {
    value: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    limit: {
      type: Number,
      default: 0
    },
    size: String,
    placeholder: {
      type: String,
      default: 'Select...'
    },
    split: {
      type: String,
      default: ', '
    },
    disabled: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    collapseSelected: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    filterFunction: Function,
    filterPlaceholder: {
      type: String,
      default: 'Search...'
    },
    selectedIcon: {
      type: String,
      default: 'glyphicon glyphicon-ok'
    }
  },
  data: function data() {
    return {
      showDropdown: false,
      els: [],
      filterInput: '',
      currentActive: -1
    };
  },

  computed: {
    containerStyles: function containerStyles() {
      return {
        width: this.block ? '100%' : ''
      };
    },
    filteredOptions: function filteredOptions() {
      var _this = this;

      if (this.filterable && this.filterInput) {
        if (this.filterFunction) {
          return this.filterFunction(this.filterInput);
        } else {
          var filterInput = this.filterInput.toLowerCase();
          return this.options.filter(function (v) {
            return v[_this.valueKey].toString().toLowerCase().indexOf(filterInput) >= 0 || v[_this.labelKey].toString().toLowerCase().indexOf(filterInput) >= 0;
          });
        }
      } else {
        return this.options;
      }
    },
    selectClasses: function selectClasses() {
      return defineProperty({}, 'input-' + this.size, this.size);
    },
    selectedIconClasses: function selectedIconClasses() {
      var _ref2;

      return _ref2 = {}, defineProperty(_ref2, this.selectedIcon, true), defineProperty(_ref2, 'pull-right', true), _ref2;
    },
    selectTextClasses: function selectTextClasses() {
      return {
        'text-muted': this.value.length === 0
      };
    },
    labelValue: function labelValue() {
      var _this2 = this;

      var optionsByValue = this.options.map(function (v) {
        return v[_this2.valueKey];
      });
      return this.value.map(function (v) {
        var index = optionsByValue.indexOf(v);
        return index >= 0 ? _this2.options[index][_this2.labelKey] : v;
      });
    },
    selectedText: function selectedText() {
      if (this.value.length) {
        var labelValue = this.labelValue;
        if (this.collapseSelected) {
          var str = labelValue[0];
          str += labelValue.length > 1 ? this.split + '+' + (labelValue.length - 1) : '';
          return str;
        } else {
          return labelValue.join(this.split);
        }
      } else {
        return this.placeholder;
      }
    }
  },
  watch: {
    showDropdown: function showDropdown(v) {
      // clear filter input when dropdown toggles
      this.filterInput = '';
      this.currentActive = -1;
      this.$emit('visible-change', v);
    }
  },
  mounted: function mounted() {
    this.els = [this.$el];
  },

  methods: {
    goPrevOption: function goPrevOption() {
      if (!this.showDropdown) {
        return;
      }
      this.currentActive > 0 ? this.currentActive-- : this.currentActive = this.options.length - 1;
    },
    goNextOption: function goNextOption() {
      if (!this.showDropdown) {
        return;
      }
      this.currentActive < this.options.length - 1 ? this.currentActive++ : this.currentActive = 0;
    },
    selectOption: function selectOption() {
      var index = this.currentActive;
      var options = this.filteredOptions;
      if (!this.showDropdown) {
        this.showDropdown = true;
      } else if (index >= 0 && index < options.length) {
        this.toggle(options[index]);
      }
    },
    itemClasses: function itemClasses(item, index) {
      return {
        disabled: item.disabled,
        active: this.currentActive === index
      };
    },
    isItemSelected: function isItemSelected(item) {
      return this.value.indexOf(item[this.valueKey]) >= 0;
    },
    toggle: function toggle(item) {
      if (item.disabled) {
        return;
      }
      var value = item[this.valueKey];
      var index = this.value.indexOf(value);
      if (index >= 0) {
        this.value.splice(index, 1);
        this.$emit('change', this.value);
      } else if (this.limit === 0 || this.value.length < this.limit) {
        this.value.push(value);
        this.$emit('change', this.value);
      } else {
        this.$emit('limit-exceed');
      }
    }
  }
};

var Navbar = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('nav', { class: _vm.navClasses }, [_c('div', { class: _vm.fluid ? 'container-fluid' : 'container' }, [_c('div', { staticClass: "navbar-header" }, [_vm._t("collapse-btn", [_c('button', { staticClass: "navbar-toggle collapsed", attrs: { "type": "button" }, on: { "click": _vm.toggle } }, [_c('span', { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', { staticClass: "icon-bar" }), _vm._v(" "), _c('span', { staticClass: "icon-bar" }), _vm._v(" "), _c('span', { staticClass: "icon-bar" })])]), _vm._v(" "), _vm._t("brand")], 2), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('collapse', { staticClass: "navbar-collapse", model: { value: _vm.show, callback: function callback($$v) {
          _vm.show = $$v;
        }, expression: "show" } }, [_vm._t("collapse")], 2)], 2)]);
  }, staticRenderFns: [],
  components: { Collapse: Collapse },
  props: {
    value: Boolean,
    fluid: {
      type: Boolean,
      default: true
    },
    fixedTop: Boolean,
    fixedBottom: Boolean,
    staticTop: Boolean,
    inverse: Boolean
  },
  data: function data() {
    return {
      show: false
    };
  },

  computed: {
    navClasses: function navClasses() {
      return {
        navbar: true,
        'navbar-default': !this.inverse,
        'navbar-inverse': this.inverse,
        'navbar-static-top': this.staticTop,
        'navbar-fixed-bottom': this.fixedBottom,
        'navbar-fixed-top': this.fixedTop
      };
    }
  },
  mounted: function mounted() {
    this.show = !!this.value;
  },

  watch: {
    value: function value(v) {
      this.show = v;
    }
  },
  methods: {
    toggle: function toggle() {
      this.show = !this.show;
      this.$emit('input', this.show);
    }
  }
};

var NavbarNav = {
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;

    return h('ul', mergeData(data, {
      class: {
        nav: true,
        'navbar-nav': true,
        'navbar-left': props.left,
        'navbar-right': props.right
      }
    }), children);
  },

  props: {
    left: Boolean,
    right: Boolean
  }
};

var NavbarForm = {
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;

    return h('form', mergeData(data, {
      class: {
        'navbar-form': true,
        'navbar-left': props.left,
        'navbar-right': props.right
      }
    }), children);
  },

  props: {
    left: Boolean,
    right: Boolean
  }
};

var NavbarText = {
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;

    return h('p', mergeData(data, {
      class: {
        'navbar-text': true,
        'navbar-left': props.left,
        'navbar-right': props.right
      }
    }), children);
  },

  props: {
    left: Boolean,
    right: Boolean
  }
};



var components = Object.freeze({
	Carousel: Carousel,
	Slide: Slide,
	Collapse: Collapse,
	Dropdown: Dropdown,
	Modal: Modal,
	Tab: Tab,
	Tabs: Tabs,
	DatePicker: DatePicker,
	Affix: Affix,
	Alert: Alert,
	Pagination: Pagination,
	Tooltip: Tooltip,
	Popover: Popover,
	TimePicker: TimePicker,
	Typeahead: Typeahead,
	ProgressBar: ProgressBar,
	ProgressBarStack: ProgressBarStack,
	Breadcrumbs: Breadcrumbs,
	BreadcrumbItem: BreadcrumbItem,
	Btn: Btn,
	BtnGroup: BtnGroup,
	BtnToolbar: BtnToolbar,
	MultiSelect: MultiSelect,
	Navbar: Navbar,
	NavbarNav: NavbarNav,
	NavbarForm: NavbarForm,
	NavbarText: NavbarText
});

var INSTANCE = '_uiv_tooltip_instance';

var bind$1 = function bind(el, binding) {
  // console.log('bind')
  unbind$1(el);
  var Constructor = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend(Tooltip);
  var vm = new Constructor({
    propsData: {
      target: el,
      appendTo: binding.arg && '#' + binding.arg,
      text: binding.value && binding.value.toString()
    }
  });
  var options = [];
  for (var key in binding.modifiers) {
    if (binding.modifiers.hasOwnProperty(key) && binding.modifiers[key]) {
      options.push(key);
    }
  }
  options.forEach(function (option) {
    if (/(top)|(left)|(right)|(bottom)/.test(option)) {
      vm.placement = option;
    } else if (/(hover)|(focus)|(click)/.test(option)) {
      vm.trigger = option;
    } else if (/unenterable/.test(option)) {
      vm.enterable = false;
    }
  });
  vm.$mount();
  el[INSTANCE] = vm;
};

var unbind$1 = function unbind(el) {
  // console.log('unbind')
  var vm = el[INSTANCE];
  if (vm) {
    vm.$destroy();
  }
  delete el[INSTANCE];
};

var update$1 = function update(el, binding) {
  // console.log('update')
  if (binding.value !== binding.oldValue) {
    bind$1(el, binding);
  }
};

var tooltip = { bind: bind$1, unbind: unbind$1, update: update$1 };

var INSTANCE$1 = '_uiv_popover_instance';

var bind$2 = function bind(el, binding) {
  // console.log('bind')
  unbind$2(el);
  var Constructor = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend(Popover);
  var vm = new Constructor({
    propsData: {
      target: el,
      appendTo: binding.arg && '#' + binding.arg,
      title: binding.value && binding.value.title && binding.value.title.toString(),
      content: binding.value && binding.value.content && binding.value.content.toString()
    }
  });
  var options = [];
  for (var key in binding.modifiers) {
    if (binding.modifiers.hasOwnProperty(key) && binding.modifiers[key]) {
      options.push(key);
    }
  }
  options.forEach(function (option) {
    if (/(top)|(left)|(right)|(bottom)/.test(option)) {
      vm.placement = option;
    } else if (/(hover)|(focus)|(click)/.test(option)) {
      vm.trigger = option;
    } else if (/unenterable/.test(option)) {
      vm.enterable = false;
    }
  });
  vm.$mount();
  el[INSTANCE$1] = vm;
};

var unbind$2 = function unbind(el) {
  // console.log('unbind')
  var vm = el[INSTANCE$1];
  if (vm) {
    vm.$destroy();
  }
  delete el[INSTANCE$1];
};

var update$2 = function update(el, binding) {
  // console.log('update')
  if (binding.value !== binding.oldValue) {
    bind$2(el, binding);
  }
};

var popover = { bind: bind$2, unbind: unbind$2, update: update$2 };

function ScrollSpy(element) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  this.el = element;
  this.opts = _extends({}, ScrollSpy.DEFAULTS, options);
  this.opts.target = target;
  if (target === 'body') {
    this.scrollElement = window;
  } else {
    this.scrollElement = document.querySelector('[id=' + target + ']');
  }
  this.selector = 'li > a';
  this.offsets = [];
  this.targets = [];
  this.activeTarget = null;
  this.scrollHeight = 0;
  if (this.scrollElement) {
    this.refresh();
    this.process();
  }
}

ScrollSpy.DEFAULTS = {
  offset: 10
};

ScrollSpy.prototype.getScrollHeight = function () {
  return this.scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
};

ScrollSpy.prototype.refresh = function () {
  var _this = this;

  this.offsets = [];
  this.targets = [];
  this.scrollHeight = this.getScrollHeight();
  var list = nodeListToArray(this.el.querySelectorAll(this.selector));
  var isWindow = this.scrollElement === window;
  list.map(function (ele) {
    var href = ele.getAttribute('href');
    if (/^#./.test(href)) {
      var doc = document.documentElement;
      var rootEl = isWindow ? document : _this.scrollElement;
      var hrefEl = rootEl.querySelector('[id=\'' + href.slice(1) + '\']');
      var windowScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var offset = isWindow ? hrefEl.getBoundingClientRect().top + windowScrollTop : hrefEl.offsetTop + _this.scrollElement.scrollTop;
      return [offset, href];
    } else {
      return null;
    }
  }).filter(function (item) {
    return item;
  }).sort(function (a, b) {
    return a[0] - b[0];
  }).forEach(function (item) {
    _this.offsets.push(item[0]);
    _this.targets.push(item[1]);
  });
  // console.log(this.offsets, this.targets)
};

ScrollSpy.prototype.process = function () {
  var isWindow = this.scrollElement === window;
  var scrollTop = (isWindow ? window.pageYOffset : this.scrollElement.scrollTop) + this.opts.offset;
  var scrollHeight = this.getScrollHeight();
  var scrollElementHeight = isWindow ? getViewportSize().height : this.scrollElement.getBoundingClientRect().height;
  var maxScroll = this.opts.offset + scrollHeight - scrollElementHeight;
  var offsets = this.offsets;
  var targets = this.targets;
  var activeTarget = this.activeTarget;
  var i = void 0;
  if (this.scrollHeight !== scrollHeight) {
    this.refresh();
  }
  if (scrollTop >= maxScroll) {
    return activeTarget !== (i = targets[targets.length - 1]) && this.activate(i);
  }
  if (activeTarget && scrollTop < offsets[0]) {
    this.activeTarget = null;
    return this.clear();
  }
  for (i = offsets.length; i--;) {
    activeTarget !== targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
  }
};

ScrollSpy.prototype.activate = function (target) {
  this.activeTarget = target;
  this.clear();
  var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
  var active = nodeListToArray(this.el.querySelectorAll(selector));
  active.forEach(function (ele) {
    getParents(ele, 'li').forEach(function (item) {
      addClass(item, 'active');
    });
    if (getParents(ele, '.dropdown-menu').length) {
      addClass(getClosest(ele, 'li.dropdown'), 'active');
    }
  });
};

ScrollSpy.prototype.clear = function () {
  var _this2 = this;

  var list = nodeListToArray(this.el.querySelectorAll(this.selector));
  list.forEach(function (ele) {
    getParents(ele, '.active', _this2.opts.target).forEach(function (item) {
      removeClass(item, 'active');
    });
  });
};

var INSTANCE$2 = '_uiv_scrollspy_instance';
var events$1 = [EVENTS.RESIZE, EVENTS.SCROLL];

var bind$3 = function bind(el, binding) {
  // console.log('bind')
  unbind$3(el);
};

var inserted = function inserted(el, binding) {
  var scrollSpy = new ScrollSpy(el, binding.arg, binding.value);
  if (scrollSpy.scrollElement) {
    scrollSpy.handler = function () {
      scrollSpy.process();
    };
    events$1.forEach(function (event) {
      on(scrollSpy.scrollElement, event, scrollSpy.handler);
    });
  }
  el[INSTANCE$2] = scrollSpy;
};

var unbind$3 = function unbind(el) {
  // console.log('unbind')
  var instance = el[INSTANCE$2];
  if (instance && instance.scrollElement) {
    events$1.forEach(function (event) {
      off(instance.scrollElement, event, instance.handler);
    });
    delete el[INSTANCE$2];
  }
};

var update$3 = function update(el, binding) {
  // console.log('update')
  if (binding.value !== binding.oldValue) {
    bind$3(el, binding);
    inserted(el, binding);
  }
};

var scrollspy = { bind: bind$3, unbind: unbind$3, update: update$3, inserted: inserted };



var directives = Object.freeze({
	tooltip: tooltip,
	popover: popover,
	scrollspy: scrollspy
});

var TYPES = {
  ALERT: 0,
  CONFIRM: 1,
  PROMPT: 2
};

var MessageBox = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('modal', { ref: "modal", class: _vm.customClass, attrs: { "auto-focus": "", "size": _vm.size, "title": _vm.title, "header": !!_vm.title, "backdrop": _vm.closeOnBackdropClick, "cancel-text": _vm.cancelText, "ok-text": _vm.okText }, on: { "hide": _vm.cb }, model: { value: _vm.show, callback: function callback($$v) {
          _vm.show = $$v;
        }, expression: "show" } }, [_vm.html ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.content) } }) : _c('p', [_vm._v(_vm._s(_vm.content))]), _vm._v(" "), _vm.type === _vm.TYPES.PROMPT ? _c('div', [_c('div', { staticClass: "form-group", class: { 'has-error': _vm.inputNotValid } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.input, expression: "input" }], ref: "input", staticClass: "form-control", attrs: { "type": "text", "required": "", "data-action": "auto-focus" }, domProps: { "value": _vm.input }, on: { "change": function change($event) {
          _vm.dirty = true;
        }, "keyup": function keyup($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
            return null;
          }_vm.validate($event);
        }, "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.input = $event.target.value;
        } } }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.inputNotValid, expression: "inputNotValid" }], staticClass: "help-block" }, [_vm._v(_vm._s(_vm.inputError))])])]) : _vm._e(), _vm._v(" "), _vm.type === _vm.TYPES.ALERT ? _c('template', { slot: "footer" }, [_c('btn', { attrs: { "type": _vm.okType, "data-action": "auto-focus" }, on: { "click": function click($event) {
          _vm.toggle(false, 'ok');
        } } }, [_vm._v(_vm._s(_vm.okBtnText))])], 1) : _c('template', { slot: "footer" }, [_c('btn', { attrs: { "type": _vm.cancelType }, on: { "click": function click($event) {
          _vm.toggle(false, 'cancel');
        } } }, [_vm._v(_vm._s(_vm.cancelBtnText))]), _vm._v(" "), _vm.type === _vm.TYPES.CONFIRM ? _c('btn', { attrs: { "type": _vm.okType, "data-action": "auto-focus" }, on: { "click": function click($event) {
          _vm.toggle(false, 'ok');
        } } }, [[_vm._v(_vm._s(_vm.okBtnText))]], 2) : _c('btn', { attrs: { "type": _vm.okType }, on: { "click": _vm.validate } }, [_vm._v(_vm._s(_vm.okBtnText))])], 1)], 2);
  }, staticRenderFns: [],
  mixins: [Local],
  components: { Modal: Modal, Btn: Btn },
  props: {
    backdrop: null,
    title: String,
    content: String,
    html: {
      type: Boolean,
      default: false
    },
    okText: String,
    okType: {
      type: String,
      default: 'primary'
    },
    cancelText: String,
    cancelType: {
      type: String,
      default: 'default'
    },
    type: {
      type: Number,
      default: TYPES.ALERT
    },
    size: {
      type: String,
      default: 'sm'
    },
    cb: {
      type: Function,
      required: true
    },
    validator: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    customClass: null
  },
  data: function data() {
    return {
      TYPES: TYPES,
      show: false,
      input: '',
      dirty: false
    };
  },

  computed: {
    closeOnBackdropClick: function closeOnBackdropClick() {
      // use backdrop prop if exist
      // otherwise, only not available if render as alert
      return isExist(this.backdrop) ? Boolean(this.backdrop) : this.type !== TYPES.ALERT;
    },
    inputError: function inputError() {
      return this.validator(this.input);
    },
    inputNotValid: function inputNotValid() {
      return this.dirty && this.inputError;
    },
    okBtnText: function okBtnText() {
      return this.okText || this.t('uiv.modal.ok');
    },
    cancelBtnText: function cancelBtnText() {
      return this.cancelText || this.t('uiv.modal.cancel');
    }
  },
  methods: {
    toggle: function toggle(show, msg) {
      this.$refs.modal.toggle(show, msg);
    },
    validate: function validate() {
      this.dirty = true;
      if (!isExist(this.inputError)) {
        this.toggle(false, { value: this.input });
      }
    }
  }
};

var queue = [];

var destroy = function destroy(instance) {
  // console.log('destroyModal')
  removeFromDom(instance.$el);
  instance.$destroy();
  spliceIfExist(queue, instance);
};

// handel cancel or ok for confirm & prompt
var shallResolve = function shallResolve(type, msg) {
  if (type === TYPES.CONFIRM) {
    // is confirm
    return msg === 'ok';
  } else {
    // is prompt
    return isExist(msg) && isString(msg.value);
  }
};

var init = function init(type, options, _cb) {
  var resolve = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var reject = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  var i18n = this.$i18n;
  var instance = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    extends: MessageBox,
    i18n: i18n,
    propsData: _extends({
      type: type
    }, options, {
      cb: function cb(msg) {
        destroy(instance);
        if (isFunction(_cb)) {
          if (type === TYPES.CONFIRM) {
            shallResolve(type, msg) ? _cb(null, msg) : _cb(msg);
          } else if (type === TYPES.PROMPT) {
            shallResolve(type, msg) ? _cb(null, msg.value) : _cb(msg);
          } else {
            _cb(msg);
          }
        } else if (resolve && reject) {
          if (type === TYPES.CONFIRM) {
            shallResolve(type, msg) ? resolve(msg) : reject(msg);
          } else if (type === TYPES.PROMPT) {
            shallResolve(type, msg) ? resolve(msg.value) : reject(msg);
          } else {
            resolve(msg);
          }
        }
      }
    })
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.show = true;
  queue.push(instance);
};

var initModal = function initModal(type) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cb = arguments[2];

  if (isPromiseSupported()) {
    return new Promise(function (resolve, reject) {
      init.apply(_this, [type, options, cb, resolve, reject]);
    });
  } else {
    init.apply(this, [type, options, cb]);
  }
};

var alert = function alert(options, cb) {
  return initModal.apply(this, [TYPES.ALERT, options, cb]);
};

var confirm = function confirm(options, cb) {
  return initModal.apply(this, [TYPES.CONFIRM, options, cb]);
};

var prompt = function prompt(options, cb) {
  return initModal.apply(this, [TYPES.PROMPT, options, cb]);
};

var messageBox = { alert: alert, confirm: confirm, prompt: prompt };

var TYPES$1 = {
  SUCCESS: 'success',
  INFO: 'info',
  DANGER: 'danger',
  WARNING: 'warning'
};

var PLACEMENTS$1 = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right'
};

var IN_CLASS$1 = 'in';
var ICON = 'glyphicon';
var WIDTH = 300;
var TRANSITION_DURATION = 300;

var Notification = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('alert', { staticClass: "fade", class: _vm.customClass, style: _vm.styles, attrs: { "type": _vm.type, "duration": _vm.duration, "dismissible": _vm.dismissible }, on: { "dismissed": _vm.onDismissed } }, [_c('div', { staticClass: "media", staticStyle: { "margin": "0" } }, [_vm.icons ? _c('div', { staticClass: "media-left" }, [_c('span', { class: _vm.icons, staticStyle: { "font-size": "1.5em" } })]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "media-body" }, [_vm.title ? _c('div', { staticClass: "media-heading" }, [_c('b', [_vm._v(_vm._s(_vm.title))])]) : _vm._e(), _vm._v(" "), _vm.html ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.content) } }) : _c('div', [_vm._v(_vm._s(_vm.content))])])])]);
  }, staticRenderFns: [],
  components: { Alert: Alert },
  props: {
    title: String,
    content: String,
    html: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 5000
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    type: String,
    placement: String,
    icon: String,
    customClass: null,
    cb: {
      type: Function,
      required: true
    },
    queue: {
      type: Array,
      required: true
    },
    offsetY: {
      type: Number,
      default: 15
    },
    offsetX: {
      type: Number,
      default: 15
    },
    offset: {
      type: Number,
      default: 15
    }
  },
  data: function data() {
    return {
      height: 0,
      top: 0,
      horizontal: this.placement === PLACEMENTS$1.TOP_LEFT || this.placement === PLACEMENTS$1.BOTTOM_LEFT ? 'left' : 'right',
      vertical: this.placement === PLACEMENTS$1.TOP_LEFT || this.placement === PLACEMENTS$1.TOP_RIGHT ? 'top' : 'bottom'
    };
  },
  created: function created() {
    // get prev notifications total height in the queue
    this.top = this.getTotalHeightOfQueue(this.queue);
  },
  mounted: function mounted() {
    var _this = this;

    var el = this.$el;
    el.style[this.vertical] = this.top + 'px';
    this.$nextTick(function () {
      el.style[_this.horizontal] = '-' + WIDTH + 'px';
      _this.height = el.offsetHeight;
      el.style[_this.horizontal] = _this.offsetX + 'px';
      addClass(el, IN_CLASS$1);
    });
  },

  computed: {
    styles: function styles() {
      var _ref;

      var queue = this.queue;
      var thisIndex = queue.indexOf(this);
      return _ref = {
        position: 'fixed'
      }, defineProperty(_ref, this.vertical, this.getTotalHeightOfQueue(queue, thisIndex) + 'px'), defineProperty(_ref, 'width', WIDTH + 'px'), defineProperty(_ref, 'transition', 'all ' + TRANSITION_DURATION / 1000 + 's ease-in-out'), _ref;
    },
    icons: function icons() {
      if (isString(this.icon)) {
        return this.icon;
      }
      switch (this.type) {
        case TYPES$1.INFO:
        case TYPES$1.WARNING:
          return ICON + ' ' + ICON + '-info-sign';
        case TYPES$1.SUCCESS:
          return ICON + ' ' + ICON + '-ok-sign';
        case TYPES$1.DANGER:
          return ICON + ' ' + ICON + '-remove-sign';
        default:
          return null;
      }
    }
  },
  methods: {
    getTotalHeightOfQueue: function getTotalHeightOfQueue(queue) {
      var lastIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : queue.length;

      var totalHeight = this.offsetY;
      for (var i = 0; i < lastIndex; i++) {
        totalHeight += queue[i].height + this.offset;
      }
      return totalHeight;
    },
    onDismissed: function onDismissed() {
      removeClass(this.$el, IN_CLASS$1);
      setTimeout(this.cb, TRANSITION_DURATION);
    }
  }
};

var _queues;

var queues = (_queues = {}, defineProperty(_queues, PLACEMENTS$1.TOP_LEFT, []), defineProperty(_queues, PLACEMENTS$1.TOP_RIGHT, []), defineProperty(_queues, PLACEMENTS$1.BOTTOM_LEFT, []), defineProperty(_queues, PLACEMENTS$1.BOTTOM_RIGHT, []), _queues);

var destroy$1 = function destroy(queue, instance) {
  // console.log('destroyNotification')
  removeFromDom(instance.$el);
  instance.$destroy();
  spliceIfExist(queue, instance);
};

var init$1 = function init(options, _cb) {
  var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var reject = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var placement = options.placement;
  var queue = queues[placement];
  // check if placement is valid
  if (!isExist(queue)) {
    return;
  }
  var instance = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    extends: Notification,
    propsData: _extends({
      queue: queue,
      placement: placement
    }, options, {
      cb: function cb(msg) {
        destroy$1(queue, instance);
        if (isFunction(_cb)) {
          _cb(msg);
        } else if (resolve && reject) {
          resolve(msg);
        }
      }
    })
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  queue.push(instance);
};

var notify = function notify() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments[1];

  // simplify usage: pass string as option.content
  if (isString(options)) {
    options = {
      content: options
    };
  }
  // set default placement as top-right
  if (!isExist(options.placement)) {
    options.placement = PLACEMENTS$1.TOP_RIGHT;
  }
  if (isPromiseSupported()) {
    return new Promise(function (resolve, reject) {
      init$1(options, cb, resolve, reject);
    });
  } else {
    init$1(options, cb);
  }
};

var notification = { notify: notify };



var services = Object.freeze({
	MessageBox: messageBox,
	Notification: notification
});

var install = function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Setup language, en-US for default
  locale.use(options.locale);
  locale.i18n(options.i18n);
  // Register components
  Object.keys(components).forEach(function (key) {
    var _key = options.prefix ? options.prefix + key : key;
    Vue$$1.component(_key, components[key]);
  });
  // Register directives
  Object.keys(directives).forEach(function (key) {
    var _key = options.prefix ? options.prefix + '-' + key : key;
    Vue$$1.directive(_key, directives[key]);
  });
  // Register services
  Object.keys(services).forEach(function (key) {
    var service = services[key];
    Object.keys(service).forEach(function (serviceKey) {
      var _key = options.prefix ? options.prefix + '_' + serviceKey : serviceKey;
      Vue$$1.prototype['$' + _key] = service[serviceKey];
    });
  });
};


//# sourceMappingURL=uiv.esm.js.map


/***/ }),

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
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





var APP_URL = "http://localhost";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    profession: {
      type: Object,
      required: true
    },
    isCatalogPage: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */],
      APP_URL: APP_URL
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized'
  }), {
    id: function id() {
      return this.profession.id;
    },
    href: function href() {
      var id = this.profession.id;

      var query = this.isAuthorized && this.user ? { ref: this.user.id } : {};

      var _$router$resolve = this.$router.resolve({ name: 'users.professions.show', params: { id: id }, query: query }),
          href = _$router$resolve.href;

      return href;
    },
    author: function author() {
      return this.profession.user;
    },
    name: function name() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'name') ? this.author.name : null;
    },
    avatar: function avatar() {
      if (this.author && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'avatar.84x84')) {
        var image = this.author.avatar['84x84'];

        return image || __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.profession.user.id;
    },
    isPublished: function isPublished() {
      return this.profession.isPublished;
    },
    professionNode: function professionNode() {
      return this.profession.profession;
    },
    isCertifiedUser: function isCertifiedUser() {
      return this.author.isCertifiedUser || false;
    },
    inFolder: function inFolder() {
      return this.author.inFolder || false;
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'city.id') ? this.author.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'age') ? this.author.age : null;
    },
    anketa: function anketa() {
      var anketa = this.profession.anketa;

      return anketa;
    },
    hasRate: function hasRate() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.anketa, 'rate');
    },
    rate: function rate() {
      return this.anketa['rate'][0];
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.phone') && this.author['contacts']['phone'] ? this.author['contacts']['phone'] : null;
    },
    isFasten: function isFasten() {
      return this.profession.isFasten || false;
    }
  }),
  methods: {
    isToday: function isToday(date) {
      var context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    },
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.author.id, this.user.id]).toString();
      this.$router.push({ name: 'messages.show', params: { uid: uid } });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'call_user_number' });
    },
    _handleClickPublishProfession: function _handleClickPublishProfession() {
      this._handlePublishProfession();
    },
    _handlePublishProfession: function _handlePublishProfession() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var id = _this2.profession.id;

        _this2.$api.post('api/v2/users/professions/' + id + '/publish').then(function (response) {
          var data = response.data;

          _this2.$emit('changeState', { id: id, key: 'isPublished', value: true });
          _this2.$gtm.trackEvent({ event: 'publish_profession' });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error publish profession');
        });
      });
    },
    _handleClickAddToFolder: function _handleClickAddToFolder() {
      this.$root.$emit('open-modal-add-user-on-folder', { user: this.author });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {
      var id = this.profession.id;

      this.$emit('actionSheet', id, this.isCurrentUser);
    }
  }
});

/***/ }),

/***/ 1604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profession_vue__ = __webpack_require__(1553);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03f5d95b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profession_vue__ = __webpack_require__(1607);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1605)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03f5d95b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profession_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03f5d95b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profession_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Profession/Profession.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03f5d95b", Component.options)
  } else {
    hotAPI.reload("data-v-03f5d95b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5cd3905a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03f5d95b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profession.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03f5d95b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profession.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Profession.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "card",
        "declaration__card",
        { card_premium: _vm.isCatalogPage === true && _vm.isFasten === true }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "row mb_3" },
        [
          _vm.isCatalogPage === true
            ? [
                _c("div", { staticClass: "profile-card__avatar" }, [
                  _c("img", { attrs: { src: _vm.avatar, alt: _vm.name } })
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { class: ["column", { ml_4: _vm.isCatalogPage === true }] },
            [
              _c(
                "div",
                { staticClass: "row justify_between align_center" },
                [
                  _c(
                    "span",
                    {
                      class: [
                        "declaration__type",
                        { "color_gray-3": _vm.isPublished === false }
                      ]
                    },
                    [
                      _vm.isCatalogPage === true
                        ? [_vm._v(_vm._s(_vm.professionNode["text"]))]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isCatalogPage === false
                        ? [
                            _vm.isCurrentUser === true
                              ? [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.isPublished
                                          ? _vm.$t(
                                              "unified-profile.profile.published"
                                            )
                                          : "снято с публикации"
                                      ) +
                                      "\n              "
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentUser === false
                              ? [_vm._v(_vm._s(_vm.professionNode["group"]))]
                              : _vm._e()
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  [
                    _vm.isAuthorized &&
                    _vm.isCurrentUser === true &&
                    _vm.isCatalogPage === false
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_options",
                              on: { click: _vm._handleClickActionSheet }
                            },
                            [
                              _c("svg", { staticClass: "icon icon_size_16" }, [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/svg/sprite.svg#icon_options"
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isAuthorized && _vm.isCurrentUser === false
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_options",
                              on: { click: _vm._handleClickAddToFolder }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  class: [
                                    "icon",
                                    "icon_size_16",
                                    { icon_fill_red: _vm.inFolder }
                                  ]
                                },
                                [
                                  _c("use", {
                                    attrs: {
                                      "xlink:href":
                                        "/dist/img/icons/svg/sprite.svg#lm-heart"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "profile-card__description",
                  attrs: {
                    to: {
                      name: "users.professions.show",
                      params: { id: _vm.id }
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row align_center" },
                    [
                      _c(
                        "span",
                        { staticClass: "m-text_bold color_gray-1 " },
                        [
                          _vm.isCatalogPage === true
                            ? [_vm._v(_vm._s(_vm.name))]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isCatalogPage === false
                            ? [_vm._v(_vm._s(_vm.professionNode["text"]))]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.isCertifiedUser === true && _vm.isCatalogPage === true
                        ? [
                            _c(
                              "svg",
                              { staticClass: "icon icon_size_16 ml_2" },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/svg/sprite.svg#round_lm-verification"
                                  }
                                })
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "declaration__list declaration__list_parameters mt_1"
                    },
                    [
                      _c("div", [
                        _vm._v(
                          _vm._s(_vm.city ? _vm.city.text : "Город не указан")
                        )
                      ]),
                      _vm._v(" "),
                      _vm.age
                        ? [
                            _c("div", [
                              _vm._v(
                                _vm._s(
                                  _vm.$pluralize(_vm.age, [
                                    "год",
                                    "года",
                                    "лет"
                                  ])
                                )
                              )
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "m-text_bold-2 color_gray-1 row mt_2" },
                    [
                      _vm.hasRate === true
                        ? [
                            _vm._v(
                              "\n            От " +
                                _vm._s(
                                  _vm._f("currency")(
                                    _vm.rate["cost-of-work"],
                                    _vm.rate["currency"]["text"]
                                  )
                                ) +
                                " "
                            ),
                            _vm.rate["period-selection"]
                              ? [
                                  _vm._v(
                                    "/ " +
                                      _vm._s(
                                        _vm._f("lowercase")(
                                          _vm.rate["period-selection"]["text"]
                                        )
                                      )
                                  )
                                ]
                              : _vm._e()
                          ]
                        : _vm.hasRate === false
                        ? [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.$t(
                                    "unified-profile.professionals.by-agreement"
                                  )
                                ) +
                                "\n          "
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "section declaration__section profile-card__buttons justify_evenly align_center"
        },
        [
          _vm.isCurrentUser
            ? [
                _vm.isPublished === true
                  ? [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn",
                          attrs: {
                            to: {
                              name: "users.professions.edit",
                              params: { id: _vm.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("unified-profile.profile.edit")))]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPublished === false
                  ? [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm._handleClickPublishProfession }
                        },
                        [_vm._v("Опубликовать")]
                      )
                    ]
                  : _vm._e()
              ]
            : [
                _vm.phone
                  ? [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: "tel:" + _vm.phone },
                          on: { click: _vm._handleClickCallUser }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("unified-profile.professionals.call"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "vertical-dash" })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm._handleClickMessage }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.$t("unified-profile.professionals.write"))
                    )
                  ]
                )
              ]
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03f5d95b", esExports)
  }
}

/***/ }),

/***/ 1892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uiv__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Rating_Enums_events__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_User_ompany_ompany_vue__ = __webpack_require__(2698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_User_Profession_Profession_vue__ = __webpack_require__(1604);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
//









/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Collapse: __WEBPACK_IMPORTED_MODULE_0_uiv__["a" /* Collapse */], ProfessionCard: __WEBPACK_IMPORTED_MODULE_6__components_User_Profession_Profession_vue__["a" /* default */], CompanyCard: __WEBPACK_IMPORTED_MODULE_4__components_User_ompany_ompany_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: this.user ? this.user.name : 'Ошибка'
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var username;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = route.params.username;
              _context.next = 3;
              return store.dispatch('user/getUserByUsername', {
                include: '',
                username: String(username)
              }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, url: url };
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */], getPartSocialUrl: __WEBPACK_IMPORTED_MODULE_5__utils__["k" /* getPartSocialUrl */],
      collapse: {
        aboutMe: false,
        contacts: false
      },
      professions: {
        data: [],
        total: 0,
        offset: 0,
        limit: 100,
        error: false,
        loading: false,
        actionSheet: {
          id: null,
          actions: [],
          value: false
        }
      },
      companies: {
        data: [],
        total: 0,
        offset: 0,
        limit: 48,
        error: false,
        loading: false,
        actionSheet: {
          id: null,
          actions: [],
          value: false
        }
      },
      actionSheet: {
        actions: [],
        value: false
      },
      requestPartners: {
        data: [],
        total: 0,
        offset: 0,
        limit: 48,
        error: false,
        loading: false
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    error: 'user/getShowUserError',
    isAuthorized: 'auth/isAuthorized',
    loading: 'user/getShowUserLoading'
  }), {
    isCurrentUser: function isCurrentUser() {
      return this.authUser && this.user && this.user.id === this.authUser.id;
    },
    isCertifiedUser: function isCertifiedUser() {
      return this.user.isCertifiedUser || false;
    },
    isAdmin: function isAdmin() {
      return this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true;
    },
    href: function href() {
      var username = this.user.username;

      var _$router$resolve = this.$router.resolve({ name: 'user.show', params: { username: username } }),
          href = _$router$resolve.href;

      return href;
    },
    username: function username() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'username') ? this.user.username : null;
    },
    name: function name() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'name') ? this.user.name : null;
    },
    avatar: function avatar() {
      if (this.user && Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'avatar.564x564')) {
        var image = this.user.avatar['564x564'];

        return image || __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* AVATAR */];
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'city.id') ? this.user.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'age') ? this.user.age : null;
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'contacts.phone') && this.user['contacts']['phone'] ? this.user['contacts']['phone'] : null;
    },
    follow: function follow() {
      return this.user.follow;
    },
    colleague: function colleague() {
      return this.user.colleague;
    },
    aboutMe: function aboutMe() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'aboutMe') ? this.user.aboutMe : null;
    },
    counters: function counters() {
      return this.user.counters;
    },
    hasProfessions: function hasProfessions() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.counters, 'professions') && Boolean(this.counters.professions);
    },
    hasCompanies: function hasCompanies() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.counters, 'professions') && Boolean(this.counters.companies);
    },
    hasContacts: function hasContacts() {
      return Boolean(Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'contacts') && Object.keys(this._.omit(this.user.contacts, ['phone'])).length);
    },
    contacts: function contacts() {
      return this.user.contacts;
    },
    isRepresentative: function isRepresentative() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.user, 'representative') ? this.user.representative : false;
    },
    hasSocialContacts: function hasSocialContacts() {
      return this.hasContacts && (Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'instagram') && this.contacts['instagram'] || Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'facebook') && this.contacts['facebook'] || Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'youtube') && this.contacts['youtube'] || Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'vk') && this.contacts['vk']);
    },
    hasMessengerContacts: function hasMessengerContacts() {
      return this.hasContacts && (Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'telegram') && this.contacts['telegram'] || Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'whatsapp') && this.contacts['whatsapp'] || Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'viber') && this.contacts['viber']);
    },
    hasOtherContacts: function hasOtherContacts() {
      return this.hasContacts && Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'site') && this.contacts['site'];
    },
    siteUrl: function siteUrl() {
      if (Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* has */])(this.contacts, 'site') && this.contacts['site']) {
        return this.$anchorme(this.contacts['site'], {
          attributes: [{
            name: "target",
            value: "_blank"
          }, {
            name: "rel",
            value: "nofollow noopener"
          }, {
            name: 'class',
            value: 'color_main'
          }]
        });
      }
    },
    isEmptyProfessions: function isEmptyProfessions() {
      return this.counters['professions'] === 0;
    },
    isEmptyCompanies: function isEmptyCompanies() {
      return this.counters['companies'] === 0;
    },
    loadingProfessions: function loadingProfessions() {
      return this.professions.loading;
    },
    loadingCompanies: function loadingCompanies() {
      return this.companies.loading;
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    if (this.isEmptyProfessions === false) {
      this._clearUserProfessions().then(function () {
        _this2._fetchUserProfessions();
      }).catch(function () {});
    }

    if (this.isEmptyCompanies === false && this.isRepresentative === true) {
      this._clearUserCompanies().then(function () {
        _this2._fetchUserCompanies();
      }).catch(function () {});
    }

    if (this.isCurrentUser) {
      this._clearReceivedRequestPartners().then(function () {
        _this2._fetchReceivedRequestPartners();
      }).catch(function () {});
    } else {
      if (__WEBPACK_IMPORTED_MODULE_5__utils__["n" /* isBrowser */]) this.$nsWebViewInterface.emit('rating', __WEBPACK_IMPORTED_MODULE_3__modules_Rating_Enums_events__["g" /* viewUser */]);
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this3 = this;

    this._clearUserProfessions().then(function () {
      if (_this3.isEmptyProfessions === false) {
        _this3._fetchUserProfessions();
      }
    }).catch(function () {});

    this._clearUserCompanies().then(function () {
      if (_this3.isEmptyCompanies === false && _this3.isRepresentative === true) {
        _this3._fetchUserCompanies();
      }
    }).catch(function () {});

    this._clearReceivedRequestPartners().then(function () {
      if (_this3.isCurrentUser) {
        _this3._fetchReceivedRequestPartners();
      }
    });

    next();
  },

  methods: {
    _fetchUserProfessions: function _fetchUserProfessions() {
      var _this4 = this;

      this.professions.loading = true;
      var username = this.$route.params.username;


      this.$api.get('api/v2/users/' + username + '/professions', { offset: 0, limit: 100 }).then(function (response) {
        var _response$data = response.data,
            data = _response$data.data,
            _response$data$meta = _response$data.meta,
            total = _response$data$meta.total,
            next = _response$data$meta.next;


        Object.assign(_this4.professions, {
          data: data,
          total: total,
          offset: next,
          error: false,
          loading: false
        });
      }, function (error) {
        var _error$response2 = error.response,
            data = _error$response2.data,
            status = _error$response2.status;


        Object.assign(_this4.professions, { error: true, loading: false });

        throw new Error('Error fetch user professions');
      });
    },
    _clearUserProfessions: function _clearUserProfessions() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this5.professions = {
            data: [],
            total: 0,
            offset: 0,
            limit: 100,
            error: false,
            loading: false,
            actionSheet: {
              id: null,
              actions: [],
              value: false
            }
          };
          resolve && resolve();
        } catch (e) {
          reject && reject(e);
          throw new Error(e);
        }
      });
    },
    _fetchUserCompanies: function _fetchUserCompanies() {
      var _this6 = this;

      this.companies.loading = true;
      var username = this.$route.params.username;
      var _companies = this.companies,
          offset = _companies.offset,
          limit = _companies.limit;

      this.$api.get('api/v2/users/' + username + '/companies', { offset: offset, limit: limit }).then(function (response) {
        var _response$data2 = response.data,
            data = _response$data2.data,
            _response$data2$meta = _response$data2.meta,
            total = _response$data2$meta.total,
            next = _response$data2$meta.next;


        Object.assign(_this6.companies, {
          data: data,
          total: total,
          offset: next,
          error: false,
          loading: false,
          actionSheet: {
            id: null,
            actions: [],
            value: false
          }
        });
      }, function (error) {
        var _error$response3 = error.response,
            data = _error$response3.data,
            status = _error$response3.status;


        Object.assign(_this6.companies, { error: true, loading: false });

        throw new Error('Error fetch user companies');
      });
    },
    _clearUserCompanies: function _clearUserCompanies() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this7.companies = {
            data: [],
            total: 0,
            offset: 0,
            limit: 48,
            error: false,
            loading: false,
            actionSheet: {
              id: null,
              actions: [],
              value: false
            }
          };
          resolve && resolve();
        } catch (e) {
          reject && reject(e);
          throw new Error(e);
        }
      });
    },
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this8 = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this8.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.user.id, this.authUser.id]).toString();

      var _$router$resolve2 = this.$router.resolve({ name: 'messages.show', params: { uid: uid } }),
          href = _$router$resolve2.href;

      window.open(href, '_blank');
    },
    _handleClickCreateProfession: function _handleClickCreateProfession() {
      this.$modalRouter.push({ name: 'users.professions.create' });
    },
    _handleClickCreateCompany: function _handleClickCreateCompany() {
      this.$modalRouter.push({ name: 'users.companies.create' });
    },
    _handleClickChangeFollow: function _handleClickChangeFollow() {
      var _this9 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('api/v1/follow', { user_id: this.user.id }).then(function (response) {
        var result = response.data.result;

        _this9.$store.dispatch('user/setFieldShowUserData', { key: 'follow', value: result });

        var followers = _this9.user['counters']['followers'];
        _this9.$store.dispatch('user/setFieldShowUserData', {
          key: 'user.counters.followers',
          value: result === 0 ? followers - 1 : followers + 1
        });

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: result === 1 ? 'Подписка оформлена.' : 'Подписка отменена.', iconClass: 'mintui mintui-success' });

        if (Boolean(result)) {
          _this9.$gtm.trackEvent({ event: 'subscribe' });
        }

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      }, function (error) {
        var _error$response4 = error.response,
            data = _error$response4.data,
            status = _error$response4.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error follow user');
      });
    },
    _handleClickAddToColleagues: function _handleClickAddToColleagues() {
      var _this10 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      var id = this.user.id;


      this.$api.post('api/v1/users/partners/' + id).then(function (response) {
        var data = response.data;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this10.$gtm.trackEvent({ event: 'add_colleagues' });
        _this10.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: -1 });
      }, function (error) {
        var _error$response5 = error.response,
            data = _error$response5.data,
            status = _error$response5.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error create partner');
      });
    },
    _handleClickDestroyToColleagues: function _handleClickDestroyToColleagues() {
      var _this11 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить пользователя из коллег?'
      }).then(function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this11.destroyToColleagues().then(function () {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this11.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: 0 });
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Пользователь удален из коллег.', iconClass: 'mintui mintui-success' });
        }).catch(function () {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        });
      }).catch(function () {});
    },
    destroyToColleagues: function destroyToColleagues() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        var id = _this12.user.id;


        _this12.$api.delete('api/v1/users/partners/' + id).then(function (response) {
          var data = response.data;

          resolve && resolve();
        }, function (error) {
          var _error$response6 = error.response,
              data = _error$response6.data,
              status = _error$response6.status;

          reject && reject();
          throw new Error('Error destroy partner');
        });
      });
    },
    _handleClickAbuseUser: function _handleClickAbuseUser() {
      if (this.isAuthorized === false) {
        this._handleClickAbuseWithoutAuthorized();
      } else this._handleAbuseUser();
    },
    _handleClickAbuseWithoutAuthorized: function _handleClickAbuseWithoutAuthorized() {
      var _this13 = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this13.$router.push({ name: 'register' });
      });
    },
    _handleAbuseUser: function _handleAbuseUser() {
      var id = this.user.id;

      this.$root.$emit('open-modal-abuse-create', { id: id, type: 'user' });
    },
    _handleClickAuthOnUser: function _handleClickAuthOnUser() {
      var _this14 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('api/admin/v1/auth/' + this.user.id).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });

        var _response$data3 = response.data,
            token = _response$data3.token,
            role = _response$data3.role,
            hasEmail = _response$data3.hasEmail,
            locale = _response$data3.locale;

        _this14.$auth.storeSession({ token: token, role: role, hasEmail: hasEmail });

        _this14.$store.dispatch('auth/setLocale', locale || 'ru');

        _this14.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
          _this14.$store.dispatch('auth/getUserByAPI').then(function (user) {
            _this14._handleRedirectAfterAuth(user.username);
          });
        });
      }, function (error) {
        var _error$response7 = error.response,
            data = _error$response7.data,
            status = _error$response7.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error authenticate profile');
      });
    },
    _handleRedirectAfterAuth: function _handleRedirectAfterAuth(username) {
      if (this.$localStorage.get('redirect.register', null, String)) {
        var location = this.$localStorage.get('redirect.register', '/', String);
        this.$localStorage.remove('redirect.register');
        this.$router.push(location);
      } else this.$router.push({ name: 'user.show', params: { username: username } });
    },
    _handleClickToggleCollapse: function _handleClickToggleCollapse(field) {
      if (this.collapse.hasOwnProperty(field)) {
        this.$set(this.collapse, field, !this.collapse[field]);
      } else this.$set(this.collapse, field, true);
    },
    _handleClickShowColleagues: function _handleClickShowColleagues() {
      var id = this.user.id;

      this.$root.$emit('open-modal-show-colleagues-user', id);
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'call_user_number' });
    },
    _handleChangeStateProfession: function _handleChangeStateProfession(_ref2) {
      var id = _ref2.id,
          key = _ref2.key,
          value = _ref2.value;

      var indexOf = this.professions.data.map(function (item) {
        return item.id;
      }).indexOf(id);
      if (indexOf > -1) this.$vueSet(this.professions.data[indexOf], key, value);
    },
    _handleChangeStateCompany: function _handleChangeStateCompany(_ref3) {
      var id = _ref3.id,
          key = _ref3.key,
          value = _ref3.value;

      var indexOf = this.companies.data.map(function (item) {
        return item.id;
      }).indexOf(id);
      if (indexOf > -1) this.$vueSet(this.companies.data[indexOf], key, value);
    },
    _handleActionSheetUser: function _handleActionSheetUser() {
      var _this15 = this;

      if (this.isAdmin && this.isCurrentUser === false) {
        this.actionSheet.actions.push({
          name: 'Войти как админ',
          // color: '#fc2e5f',
          method: this._handleClickAuthOnUser
        });
      }

      if (this.colleague === -1) {
        this.actionSheet.actions.push({
          color: '#fc2e5f',
          name: 'Отменить запрос в коллеги',
          method: this._handleClickDestroyToColleagues
        });
      }

      if (this.colleague === 0) {
        this.actionSheet.actions.push({
          name: 'Добавить в коллеги',
          method: this._handleClickAddToColleagues
        });
      }

      if (this.colleague === 1) {
        this.actionSheet.actions.push({
          color: '#fc2e5f',
          name: 'Удалить из коллег',
          method: this._handleClickDestroyToColleagues
        });
      }

      if (this.isAuthorized === true) {
        var actionFollow = {};

        if (this.follow === -1) {
          actionFollow = { name: 'Отменить запрос на подписку', color: '#fc2e5f' };
        }

        if (this.follow === 0) {
          actionFollow = { name: 'Подписаться' };
        }

        if (this.follow === 1) {
          actionFollow = { name: 'Отписаться', color: '#fc2e5f' };
        }

        this.actionSheet.actions.push(Object.assign(actionFollow, {
          method: this._handleClickChangeFollow
        }));
      }

      this.actionSheet.actions.push({
        name: 'Пожаловаться',
        method: this._handleClickAbuseUser
      });

      this.$nextTick(function () {
        return _this15.actionSheet.value = true;
      });
    },
    _handleInputActionSheetUser: function _handleInputActionSheetUser(value) {
      if (value === false) {
        this.actionSheet = {
          actions: [],
          value: false
        };
      }
    },
    _handleActionSheetProfession: function _handleActionSheetProfession(professionId) {
      var _this16 = this;

      var isCurrentUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var profession = this._.find(this.professions.data, function (p) {
        return p.id === professionId;
      });

      if (profession) {
        var id = profession.id,
            isPublished = profession.isPublished;

        Object.assign(this.professions.actionSheet, { id: id });

        if (isCurrentUser) {
          this.professions.actionSheet.actions.push({
            name: 'Удалить',
            color: '#fc2e5f',
            method: this._handleClickDestroyProfession
          });

          if (isPublished) {
            this.professions.actionSheet.actions.push({
              name: 'Снять с публикации',
              method: this._handleClickUnPublishProfession
            });
          } else {
            this.professions.actionSheet.actions.push({
              name: 'Опубликовать',
              method: this._handleClickPublishProfession
            });
          }
        }

        setTimeout(function () {
          _this16.professions.actionSheet.value = true;
        }, 150);
      }
    },
    _handleClickDestroyProfession: function _handleClickDestroyProfession() {
      var _this17 = this;

      var id = this.professions.actionSheet.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Все ваши данные в этой профессии будут удалены безвозвратно!'
      }).then(function () {
        _this17._handleDestroyProfession(id);
      }).catch(function () {});
    },
    _handleDestroyProfession: function _handleDestroyProfession(id) {
      var _this18 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this18.$api.delete('api/v2/users/professions/' + id).then(function (response) {
          var data = response.data;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this18._destroyProfession(id);
          resolve && resolve();
        }, function (error) {
          var _error$response8 = error.response,
              data = _error$response8.data,
              status = _error$response8.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error destroy profession');
        });
      });
    },
    _destroyProfession: function _destroyProfession(id) {
      var indexOf = this.professions.data.map(function (item) {
        return item.id;
      }).indexOf(id);
      if (indexOf > -1) {
        this.$delete(this.professions.data, indexOf);

        var total = this.professions.total > 0 ? --this.professions.total : 0;
        var offset = this.professions.offset > 0 ? --this.professions.offset : 0;

        this.$set(this.professions, 'total', total);
        this.$set(this.professions, 'offset', offset);
        this.$set(this.counters, 'professions', total);
      }
    },
    _handleClickUnPublishProfession: function _handleClickUnPublishProfession() {
      var _this19 = this;

      var id = this.professions.actionSheet.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'снять',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите снять профессию с публикации?'
      }).then(function () {
        _this19._handleUnPublishProfession(id);
      }).catch(function () {});
    },
    _handleClickPublishProfession: function _handleClickPublishProfession() {
      var _this20 = this;

      var id = this.professions.actionSheet.id;


      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('api/v2/users/professions/' + id + '/publish').then(function (response) {
        var data = response.data;

        _this20._handleChangeStateProfession({ id: id, key: 'isPublished', value: true });
        _this20.$gtm.trackEvent({ event: 'publish_profession' });

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      }, function (error) {
        var _error$response9 = error.response,
            data = _error$response9.data,
            status = _error$response9.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error publish profession');
      });
    },
    _handleUnPublishProfession: function _handleUnPublishProfession(id) {
      var _this21 = this;

      return new Promise(function (resolve, reject) {

        _this21._handleChangeStateProfession({ id: id, key: 'isPublished', value: false });

        _this21.$api.post('api/v2/users/professions/' + id + '/unpublish').then(function (response) {
          var data = response.data;

          resolve && resolve();
        }, function (error) {
          var _error$response10 = error.response,
              data = _error$response10.data,
              status = _error$response10.status;


          _this21._handleChangeStateProfession({ id: id, key: 'isPublished', value: true });
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error unpublish profession');
        });
      });
    },
    _handleInputActionSheetProfession: function _handleInputActionSheetProfession(value) {
      if (value === false) {
        this.professions.actionSheet = {
          id: null,
          actions: [],
          value: false
        };
      }
    },
    _handleActionSheetCompany: function _handleActionSheetCompany(companyId) {
      var _this22 = this;

      var isCurrentUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var company = this._.find(this.companies.data, function (p) {
        return p.id === companyId;
      });

      if (company) {
        var id = company.id;

        Object.assign(this.companies.actionSheet, { id: id });

        if (isCurrentUser) {
          this.companies.actionSheet.actions.push({
            name: 'Удалить',
            color: '#fc2e5f',
            method: this._handleClickDestroyCompany
          });

          this.companies.actionSheet.actions.push({
            name: 'Снять с публикации',
            method: this._handleClickUnPublishCompany
          });
        }

        setTimeout(function () {
          _this22.companies.actionSheet.value = true;
        }, 150);
      }
    },
    _handleClickDestroyCompany: function _handleClickDestroyCompany() {
      var _this23 = this;

      var id = this.companies.actionSheet.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить компанию?'
      }).then(function () {
        _this23._handleDestroyCompany(id);
      }).catch(function () {});
    },
    _handleDestroyCompany: function _handleDestroyCompany(id) {
      var _this24 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this24.$api.delete('api/v2/users/companies/' + id).then(function (response) {
          var data = response.data;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this24._destroyCompany(id);
          resolve && resolve();
        }, function (error) {
          var _error$response11 = error.response,
              data = _error$response11.data,
              status = _error$response11.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error destroy company');
        });
      });
    },
    _destroyCompany: function _destroyCompany(id) {
      var indexOf = this.companies.data.map(function (item) {
        return item.id;
      }).indexOf(id);
      if (indexOf > -1) {
        this.$delete(this.companies.data, indexOf);

        var total = this.companies.total > 0 ? --this.companies.total : 0;
        var offset = this.companies.offset > 0 ? --this.companies.offset : 0;

        this.$set(this.companies, 'total', total);
        this.$set(this.companies, 'offset', offset);
        this.$set(this.counters, 'companies', total);
      }
    },
    _handleClickUnPublishCompany: function _handleClickUnPublishCompany() {
      var _this25 = this;

      var id = this.companies.actionSheet.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'снять',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите снять с публикации?'
      }).then(function () {
        _this25._handleUnPublishCompany(id);
      }).catch(function () {});
    },
    _handleUnPublishCompany: function _handleUnPublishCompany(id) {
      var _this26 = this;

      return new Promise(function (resolve, reject) {

        _this26._handleChangeStateCompany({ id: id, key: 'isPublished', value: false });

        _this26.$api.post('api/v2/users/companies/' + id + '/unpublish').then(function (response) {
          var data = response.data;

          resolve && resolve();
        }, function (error) {
          var _error$response12 = error.response,
              data = _error$response12.data,
              status = _error$response12.status;


          _this26._handleChangeStateCompany({ id: id, key: 'isPublished', value: true });
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error unpublish company');
        });
      });
    },
    _handleInputActionSheetCompany: function _handleInputActionSheetCompany(value) {
      if (value === false) {
        this.companies.actionSheet = {
          id: null,
          actions: [],
          value: false
        };
      }
    },
    _handleClickShowContacts: function _handleClickShowContacts() {
      this.$gtm.trackEvent({ event: 'show_contancts' });
    },
    _fetchReceivedRequestPartners: function _fetchReceivedRequestPartners() {
      var _this27 = this;

      this.requestPartners.loading = true;

      var _requestPartners = this.requestPartners,
          offset = _requestPartners.offset,
          limit = _requestPartners.limit;

      this.$api.get('api/v1/users/partners/requests', { offset: offset, limit: limit }).then(function (response) {
        var _response$data4 = response.data,
            data = _response$data4.data,
            _response$data4$meta = _response$data4.meta,
            total = _response$data4$meta.total,
            next = _response$data4$meta.next;


        Object.assign(_this27.requestPartners, {
          data: data,
          total: total,
          offset: next,
          error: false,
          loading: false
        });
      }, function (error) {
        var _error$response13 = error.response,
            data = _error$response13.data,
            status = _error$response13.status;


        Object.assign(_this27.requestPartners, { error: true, loading: false });
        // this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении .' })

        throw new Error('Error fetch received request partners');
      });
    },
    _clearReceivedRequestPartners: function _clearReceivedRequestPartners() {
      var _this28 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this28.requestPartners = {
            data: [],
            total: 0,
            offset: 0,
            limit: 48,
            error: false,
            loading: false
          };
          resolve && resolve();
        } catch (e) {
          reject && reject(e);
          throw new Error(e);
        }
      });
    },
    _handleClickResolvePartner: function _handleClickResolvePartner(userId) {
      var _this29 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('api/v1/users/partners/' + userId + '/approve').then(function (response) {
        var data = response.data;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

        var colleagues = _this29.user['counters']['colleagues'];
        _this29.$store.dispatch('user/setFieldShowUserData', {
          key: 'counters.colleagues',
          value: colleagues + 1
        });

        var indexOf = _.findIndex(_this29.requestPartners.data, function (p) {
          return p['id'] === userId;
        });
        if (indexOf > -1) {
          _this29.$delete(_this29.requestPartners.data, indexOf);

          var total = _this29.requestPartners.total > 0 ? --_this29.requestPartners.total : 0;
          var offset = _this29.requestPartners.offset > 0 ? --_this29.requestPartners.offset : 0;

          _this29.$set(_this29.requestPartners, 'total', total);
          _this29.$set(_this29.requestPartners, 'offset', offset);
        }

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Заявка успешно принята.', iconClass: 'mintui mintui-success' });
      }, function (error) {
        var _error$response14 = error.response,
            data = _error$response14.data,
            status = _error$response14.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error resolve partner');
      });
    },
    _handleClickRejectPartner: function _handleClickRejectPartner(userId) {
      var _this30 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'отклонить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите отклонить заявку?'
      }).then(function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this30.$api.delete('api/v1/users/partners/' + userId).then(function (response) {
          var data = response.data;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          var indexOf = _.findIndex(_this30.requestPartners.data, function (p) {
            return p['id'] === userId;
          });
          if (indexOf > -1) {
            _this30.$delete(_this30.requestPartners.data, indexOf);

            var total = _this30.requestPartners.total > 0 ? --_this30.requestPartners.total : 0;
            var offset = _this30.requestPartners.offset > 0 ? --_this30.requestPartners.offset : 0;

            _this30.$set(_this30.requestPartners, 'total', total);
            _this30.$set(_this30.requestPartners, 'offset', offset);
          }

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Заявка успешно отклонена.', iconClass: 'mintui mintui-success' });
        }, function (error) {
          var _error$response15 = error.response,
              data = _error$response15.data,
              status = _error$response15.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          throw new Error('Error reject partner');
        });
      }).catch(function () {});
    }
  }
});

/***/ }),

/***/ 1893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
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





var APP_URL = "http://localhost";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    company: {
      type: Object,
      required: true
    },
    isCatalogPage: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */],
      APP_URL: APP_URL
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized'
  }), {
    id: function id() {
      return this.company.id;
    },
    href: function href() {
      var id = this.company.id;

      var query = this.isAuthorized && this.user ? { ref: this.user.id } : {};

      var _$router$resolve = this.$router.resolve({ name: 'users.companies.show', params: { id: id }, query: query }),
          href = _$router$resolve.href;

      return href;
    },
    author: function author() {
      return this.company.user;
    },
    name: function name() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'name') ? this.author.name : null;
    },
    avatar: function avatar() {
      if (this.author && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'avatar.84x84')) {
        var image = this.author.avatar['84x84'];

        return image || __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.company.user.id;
    },
    isPublished: function isPublished() {
      return this.company.isPublished;
    },
    companyNode: function companyNode() {
      return this.company.company;
    },
    isCertifiedUser: function isCertifiedUser() {
      return this.author.isCertifiedUser || false;
    },
    inFolder: function inFolder() {
      return this.author.inFolder || false;
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'city.id') ? this.author.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'age') ? this.author.age : null;
    },
    anketa: function anketa() {
      var anketa = this.company.anketa;

      return anketa;
    },
    hasRate: function hasRate() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.anketa, 'rate');
    },
    rate: function rate() {
      return this.anketa['rate'][0];
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.phone') && this.author['contacts']['phone'] ? this.author['contacts']['phone'] : null;
    }
  }),
  methods: {
    isToday: function isToday(date) {
      var context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    },
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.author.id, this.user.id]).toString();
      this.$router.push({ name: 'messages.show', params: { uid: uid } });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'call_user_number' });
    },
    _handleClickPublishCompany: function _handleClickPublishCompany() {
      this._handlePublishCompany();
    },
    _handlePublishCompany: function _handlePublishCompany() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var id = _this2.company.id;

        _this2.$api.post('api/v2/users/companies/' + id + '/publish').then(function (response) {
          var data = response.data;

          _this2.$emit('changeState', { id: id, key: 'isPublished', value: true });
          _this2.$gtm.trackEvent({ event: 'publish_company' });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error publish company');
        });
      });
    },
    _handleClickAddToFolder: function _handleClickAddToFolder() {
      this.$root.$emit('open-modal-add-user-on-folder', { user: this.author });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {
      var id = this.company.id;

      this.$emit('actionSheet', id, this.isCurrentUser);
    }
  }
});

/***/ }),

/***/ 2696:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2697);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("dae8baca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-723dc997\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-723dc997\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Show.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ompany_vue__ = __webpack_require__(1893);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cdb29d3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ompany_vue__ = __webpack_require__(2701);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2699)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cdb29d3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ompany_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cdb29d3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ompany_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Сompany/Сompany.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cdb29d3", Component.options)
  } else {
    hotAPI.reload("data-v-3cdb29d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2699:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2700);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fb01d45a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cdb29d3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Сompany.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cdb29d3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Сompany.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Сompany.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card declaration__card" }, [
    _c(
      "div",
      { staticClass: "row mb_3" },
      [
        _vm.isCatalogPage === true
          ? [
              _c(
                "router-link",
                {
                  staticClass: "profile-card__avatar",
                  attrs: {
                    to: { name: "users.companies.show", params: { id: _vm.id } }
                  }
                },
                [_c("img", { attrs: { src: _vm.avatar, alt: _vm.name } })]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { class: ["column", { ml_4: _vm.isCatalogPage === true }] },
          [
            _c(
              "div",
              { staticClass: "row justify_between align_center" },
              [
                _c(
                  "span",
                  {
                    class: [
                      "declaration__type",
                      { "color_gray-3": _vm.isPublished === false }
                    ]
                  },
                  [
                    _vm.isCatalogPage === true
                      ? [_vm._v(_vm._s(_vm.companyNode["text"]))]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isCatalogPage === false
                      ? [
                          _vm.isCurrentUser === true
                            ? [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.isPublished
                                        ? "опубликовано"
                                        : "снято с публикации"
                                    ) +
                                    "\n              "
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isCurrentUser === false
                            ? [_vm._v(_vm._s(_vm.companyNode["group"]))]
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                [
                  _vm.isAuthorized &&
                  _vm.isCurrentUser === true &&
                  _vm.isCatalogPage === false
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_options",
                            on: { click: _vm._handleClickActionSheet }
                          },
                          [
                            _c("svg", { staticClass: "icon icon_size_16" }, [
                              _c("use", {
                                attrs: {
                                  "xlink:href":
                                    "/dist/img/icons/svg/sprite.svg#icon_options"
                                }
                              })
                            ])
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isAuthorized && _vm.isCurrentUser === false
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_options",
                            on: { click: _vm._handleClickAddToFolder }
                          },
                          [
                            _c(
                              "svg",
                              {
                                class: [
                                  "icon",
                                  "icon_size_16",
                                  { icon_fill_red: _vm.inFolder }
                                ]
                              },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/svg/sprite.svg#lm-heart"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ]
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "profile-card__description",
                attrs: {
                  to: { name: "users.companies.show", params: { id: _vm.id } }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "row align_center" },
                  [
                    _c(
                      "span",
                      { staticClass: "m-text_bold color_gray-1 " },
                      [
                        _vm.isCatalogPage === true
                          ? [_vm._v(_vm._s(_vm.name))]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isCatalogPage === false
                          ? [_vm._v(_vm._s(_vm.companyNode["text"]))]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.isCertifiedUser === true && _vm.isCatalogPage === true
                      ? [
                          _c("svg", { staticClass: "icon icon_size_16 ml_2" }, [
                            _c("use", {
                              attrs: {
                                "xlink:href":
                                  "/dist/img/icons/svg/sprite.svg#round_lm-verification"
                              }
                            })
                          ])
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "declaration__list declaration__list_parameters mt_1"
                  },
                  [
                    _c("div", [
                      _vm._v(
                        _vm._s(_vm.city ? _vm.city.text : "Город не указан")
                      )
                    ]),
                    _vm._v(" "),
                    _vm.age
                      ? [
                          _c("div", [
                            _vm._v(
                              _vm._s(
                                _vm.$pluralize(_vm.age, ["год", "года", "лет"])
                              )
                            )
                          ])
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "m-text_bold-2 color_gray-1 row mt_2" },
                  [
                    _vm.hasRate === true
                      ? [
                          _vm._v(
                            "\n            От " +
                              _vm._s(
                                _vm._f("currency")(
                                  _vm.rate["cost-of-work"],
                                  _vm.rate["currency"]["text"]
                                )
                              ) +
                              " "
                          ),
                          _vm.rate["period-selection"]
                            ? [
                                _vm._v(
                                  "/ " +
                                    _vm._s(
                                      _vm._f("lowercase")(
                                        _vm.rate["period-selection"]["text"]
                                      )
                                    )
                                )
                              ]
                            : _vm._e()
                        ]
                      : _vm.hasRate === false
                      ? [_vm._v("\n            По договоренности\n          ")]
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ],
          1
        )
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "section declaration__section profile-card__buttons justify_evenly align_center"
      },
      [
        _vm.isCurrentUser
          ? [
              _vm.isPublished === true
                ? [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn",
                        attrs: {
                          to: {
                            name: "users.companies.edit",
                            params: { id: _vm.id }
                          }
                        }
                      },
                      [_vm._v("Редактировать")]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.isPublished === false
                ? [
                    _c(
                      "a",
                      {
                        staticClass: "btn",
                        attrs: { href: "javascript:void(0)" },
                        on: { click: _vm._handleClickPublishCompany }
                      },
                      [_vm._v("Опубликовать")]
                    )
                  ]
                : _vm._e()
            ]
          : [
              _vm.phone
                ? [
                    _c(
                      "a",
                      {
                        staticClass: "btn",
                        attrs: { href: "tel:" + _vm.phone },
                        on: { click: _vm._handleClickCallUser }
                      },
                      [_vm._v("Позвонить")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "vertical-dash" })
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn",
                  attrs: { href: "javascript:void(0)" },
                  on: { click: _vm._handleClickMessage }
                },
                [_vm._v("Написать")]
              )
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cdb29d3", esExports)
  }
}

/***/ }),

/***/ 2702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page profession-page page_feed lm-m-v2-notifications" },
    [
      _vm.requestPartners["data"] && _vm.requestPartners["data"].length
        ? [
            _c("div", { staticClass: "lm-m-v2-notifications-body" }, [
              _c(
                "div",
                { staticClass: "lm-m-v2-notifications-list" },
                _vm._l(_vm.requestPartners["data"], function(partner) {
                  return _c(
                    "div",
                    { staticClass: "lm-m-v2-notifications-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "notifications-avatar-wrap btn btn_round",
                          attrs: {
                            to: {
                              name: "user.show",
                              params: { username: partner.username }
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "notifications-avatar",
                            attrs: {
                              src: partner.avatar["84x84"],
                              alt: partner.name
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "notifications-info-wrap ml_3" },
                        [
                          _c(
                            "div",
                            { staticClass: "notifications__text mb_4" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "notifications__link fw_600",
                                  attrs: {
                                    to: {
                                      name: "user.show",
                                      params: { username: partner.username }
                                    },
                                    title: partner.name
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(partner.name) +
                                      " \n              "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n              предлагает вам стать коллегой\n\n              "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row w_auto" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn_primary mr_2",
                                on: {
                                  click: function($event) {
                                    return _vm._handleClickResolvePartner(
                                      partner.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("Принять")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn_secondary",
                                on: {
                                  click: function($event) {
                                    return _vm._handleClickRejectPartner(
                                      partner.id
                                    )
                                  }
                                }
                              },
                              [_vm._v("Отклонить")]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                0
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.error
        ? [_c("span", [_vm._v("Пользователь не найден.")])]
        : _vm.error === false
        ? [
            _c("div", { staticClass: "page__content page__content_feed" }, [
              _c(
                "div",
                { staticClass: "page__header mb_4" },
                [
                  _c("div", { staticClass: "profile__column column mb_4" }, [
                    _c("div", { staticClass: "profile__avatar_wrapper" }, [
                      _c("div", { staticClass: "profile__avatar" }, [
                        _c("img", { attrs: { src: _vm.avatar } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "profile__avatar_stub" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "profile__avatar_description" },
                        [
                          _c(
                            "h5",
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.name) +
                                  "\n\n              "
                              ),
                              _vm.isCertifiedUser === true
                                ? [
                                    _c(
                                      "svg",
                                      {
                                        staticClass: "icon icon_size_16 ml_1",
                                        staticStyle: {
                                          "vertical-align": "middle"
                                        }
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "/dist/img/icons/svg/sprite.svg#round_lm-verification"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            [
                              _vm.city
                                ? [_vm._v(_vm._s(_vm.city.text) + ",")]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.age
                                ? [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$pluralize(_vm.age, [
                                          "год",
                                          "года",
                                          "лет"
                                        ])
                                      )
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "lm-card" },
                      [
                        _vm.isCurrentUser === true
                          ? [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn_secondary_filled w_100",
                                  attrs: { to: { name: "settings.index" } }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("unified-profile.profile.settings")
                                    )
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isCurrentUser === false
                          ? [
                              _c(
                                "div",
                                { staticClass: "column" },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "row w_100 mr_4" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn_primary w_100",
                                            on: {
                                              click: _vm._handleClickMessage
                                            }
                                          },
                                          [_vm._v("Написать сообщение")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row w_auto" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn_round btn_primary fill_white",
                                          on: {
                                            click: _vm._handleActionSheetUser
                                          }
                                        },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              staticClass: "icon icon_size_16"
                                            },
                                            [
                                              _c("use", {
                                                attrs: {
                                                  "xlink:href":
                                                    "/dist/img/icons/svg/sprite.svg#icon_options"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _vm.phone
                                    ? [
                                        _c("div", { staticClass: "row mt_4" }, [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn_outline w_100",
                                              attrs: {
                                                href: "tel:" + _vm.phone
                                              },
                                              on: {
                                                click: _vm._handleClickCallUser
                                              }
                                            },
                                            [_vm._v("Позвонить")]
                                          )
                                        ])
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm.isCurrentUser && !_vm.aboutMe
                    ? [
                        _c(
                          "router-link",
                          {
                            staticClass: "lm-card column mb_4",
                            attrs: {
                              to: { name: "settings.index" },
                              tag: "div"
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "m-text_normal-2 color_gray-3" },
                              [_vm._v("Изменить описание")]
                            )
                          ]
                        )
                      ]
                    : _vm.aboutMe
                    ? [
                        _c(
                          "div",
                          { staticClass: "lm-card column mb_4" },
                          [
                            _c("div", { staticClass: "mb_3" }, [
                              _c("div", { staticClass: "m-text_bold" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("unified-profile.profile.about-me")
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "m-text_normal-2 color_gray-2 word_break"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.collapse["aboutMe"]
                                        ? _vm.aboutMe
                                        : _vm.$truncate(_vm.aboutMe, 100)
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _vm.aboutMe && _vm.aboutMe.length > 100
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "row align_center mt_3",
                                      on: {
                                        click: function($event) {
                                          return _vm._handleClickToggleCollapse(
                                            "aboutMe"
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "m-text_bold color_main mr_1"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.collapse["aboutMe"]
                                                ? "Скрыть"
                                                : "Читать полностью"
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "svg",
                                        {
                                          class: [
                                            "icon",
                                            "icon_size_16",
                                            "fill_main",
                                            {
                                              rotate_180:
                                                _vm.collapse["aboutMe"]
                                            }
                                          ]
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "/dist/img/icons/svg/sprite.svg#lm-chevron"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "lm-card column" },
                    [
                      _c(
                        "div",
                        { staticClass: "profile__block" },
                        [
                          _vm.isAuthorized && _vm.isCurrentUser
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "row mb_4" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "link m-flex_inline align_center w_100",
                                        attrs: { to: { name: "folders.index" } }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "m-text_bold color_gray-1 mr_2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "unified-profile.profile.my-compilations"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "m-text_bold-2 color_gray-2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.counters["folders"])
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "link m-flex_inline align_center w_100",
                                  attrs: {
                                    to: {
                                      name: "board.castings.user",
                                      params: { username: _vm.username }
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "m-text_bold color_gray-1 mr_2"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.isAuthorized && _vm.isCurrentUser
                                            ? _vm.$t(
                                                "unified-profile.profile.my-ads"
                                              )
                                            : "Объявления"
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "m-text_bold-2 color_gray-2"
                                    },
                                    [_vm._v(_vm._s(_vm.counters["board"]))]
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.isAuthorized && _vm.isCurrentUser
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "row mt_4" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "link m-flex_inline align_center w_100",
                                        attrs: {
                                          to: {
                                            name:
                                              "board.castings.responses.user",
                                            params: { username: _vm.username }
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "m-text_bold color_gray-1 mr_2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.isAuthorized &&
                                                  _vm.isCurrentUser
                                                  ? _vm.$t(
                                                      "unified-profile.profile.my-responses"
                                                    )
                                                  : "Отклики"
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "m-text_bold-2 color_gray-2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.counters["responses"])
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "profile__block" }, [
                        _c(
                          "div",
                          { staticClass: "row mb_4" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "link m-flex_inline align_center w_100",
                                attrs: {
                                  to: {
                                    name: "partners.user",
                                    params: { username: _vm.username }
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "m-text_bold color_gray-1 mr_2"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "unified-profile.profile.colleagues"
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "m-text_bold-2 color_gray-2" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("numeral")(
                                          _vm.counters["colleagues"],
                                          "0a"
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row mb_4" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "link m-flex_inline align_center w_100",
                                attrs: {
                                  to: {
                                    name: "followers.user",
                                    params: { username: _vm.username }
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "m-text_bold color_gray-1 mr_2"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "unified-profile.profile.followers"
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "m-text_bold-2 color_gray-2" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("numeral")(
                                          _vm.counters["followers"],
                                          "0a"
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "link m-flex_inline align_center w_100",
                                attrs: {
                                  to: {
                                    name: "following.user",
                                    params: { username: _vm.username }
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "m-text_bold color_gray-1 mr_2"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "unified-profile.profile.following"
                                        )
                                      )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "m-text_bold-2 color_gray-2" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("numeral")(
                                          _vm.counters["following"],
                                          "0a"
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm.hasContacts
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "profile__block sidebar-dropdown-menu"
                              },
                              [
                                _vm.collapse["contacts"]
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "m-text_bold color_gray-1"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "unified-profile.profile.contacts"
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "collapse",
                                  {
                                    model: {
                                      value: _vm.collapse["contacts"],
                                      callback: function($$v) {
                                        _vm.$set(_vm.collapse, "contacts", $$v)
                                      },
                                      expression: "collapse['contacts']"
                                    }
                                  },
                                  [
                                    _vm.hasSocialContacts
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "profile__contacts m-text_normal-2"
                                            },
                                            [
                                              _vm.has(
                                                _vm.contacts,
                                                "instagram"
                                              ) && _vm.contacts["instagram"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Instagram:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "cropped-text color_main",
                                                            attrs: {
                                                              href:
                                                                "https://instagram.com/" +
                                                                _vm.getPartSocialUrl(
                                                                  _vm.contacts[
                                                                    "instagram"
                                                                  ],
                                                                  "instagram.com"
                                                                ),
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "instagram"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.has(
                                                _vm.contacts,
                                                "facebook"
                                              ) && _vm.contacts["facebook"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Facebook:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "cropped-text color_main",
                                                            attrs: {
                                                              href:
                                                                "https://facebook.com/" +
                                                                _vm.getPartSocialUrl(
                                                                  _vm.getPartSocialUrl(
                                                                    _vm
                                                                      .contacts[
                                                                      "facebook"
                                                                    ],
                                                                    "facebook.com"
                                                                  ),
                                                                  "fb.com"
                                                                ),
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "facebook"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.has(
                                                _vm.contacts,
                                                "youtube"
                                              ) && _vm.contacts["youtube"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("YouTube:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "cropped-text color_main",
                                                            attrs: {
                                                              href:
                                                                "https://youtube.com/" +
                                                                _vm.getPartSocialUrl(
                                                                  _vm.contacts[
                                                                    "youtube"
                                                                  ],
                                                                  "youtube.com"
                                                                ),
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "youtube"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.has(_vm.contacts, "vk") &&
                                              _vm.contacts["vk"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Вконтакте:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "cropped-text color_main",
                                                            attrs: {
                                                              href:
                                                                "https://vk.com/" +
                                                                _vm.getPartSocialUrl(
                                                                  _vm.contacts[
                                                                    "vk"
                                                                  ],
                                                                  "vk.com"
                                                                ),
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "vk"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasMessengerContacts
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "profile__contacts m-text_normal-2"
                                            },
                                            [
                                              _vm.has(
                                                _vm.contacts,
                                                "telegram"
                                              ) && _vm.contacts["telegram"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Telegram:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "color_main",
                                                            attrs: {
                                                              href:
                                                                "tg://resolve?domain=" +
                                                                _vm.contacts[
                                                                  "telegram"
                                                                ]
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "telegram"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.has(
                                                _vm.contacts,
                                                "whatsapp"
                                              ) && _vm.contacts["whatsapp"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Whatsapp:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "color_main",
                                                            attrs: {
                                                              href:
                                                                "whatsapp://send?phone=" +
                                                                _vm.contacts[
                                                                  "whatsapp"
                                                                ]
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "whatsapp"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.has(_vm.contacts, "viber") &&
                                              _vm.contacts["viber"]
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Viber:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "color_main",
                                                            attrs: {
                                                              href:
                                                                "viber://chat?number=" +
                                                                _vm.contacts[
                                                                  "viber"
                                                                ]
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.contacts[
                                                                  "viber"
                                                                ]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasOtherContacts
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "profile__contacts m-text_normal-2"
                                            },
                                            [
                                              _vm.has(_vm.contacts, "site") &&
                                              _vm.contacts["site"] &&
                                              _vm.siteUrl
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "profile__contacts-item"
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "mr_1"
                                                          },
                                                          [_vm._v("Сайт:")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", {
                                                          staticClass:
                                                            "cropped-text",
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              _vm.siteUrl
                                                            )
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    class: [
                                      "row",
                                      "align_center",
                                      { mt_4: _vm.collapse["contacts"] }
                                    ],
                                    on: {
                                      click: function($event) {
                                        return _vm._handleClickToggleCollapse(
                                          "contacts"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.collapse["contacts"] === false
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "m-text_bold color_main mr_1",
                                              on: {
                                                click:
                                                  _vm._handleClickShowContacts
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "unified-profile.profile.show-contacts"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm.collapse["contacts"] === true
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "m-text_bold color_main mr_1"
                                            },
                                            [_vm._v("Скрыть")]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "svg",
                                      {
                                        class: [
                                          "icon",
                                          "icon_size_16",
                                          "fill_main",
                                          {
                                            rotate_180: _vm.collapse["contacts"]
                                          }
                                        ]
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "/dist/img/icons/svg/sprite.svg#lm-chevron"
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  2
                                )
                              ],
                              2
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "page__content" },
                [
                  _vm.isCurrentUser === false &&
                  _vm.hasProfessions === false &&
                  _vm.hasCompanies === false
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "page__plug page__plug_feed_empty-list mt_1"
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass:
                                  "icon icon_size_lg icon_fill_blue mb_5"
                              },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/svg/sprite.svg#icon_info"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "heading heading_h5" }, [
                              _vm._v("Информации нет")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mb_4" }, [
                              _vm._v(_vm._s(_vm.name) + " пока не заполнил"),
                              _c("br"),
                              _vm._v(" профиль полностью")
                            ])
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCurrentUser || _vm.hasProfessions
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "lm-card w_100 m-flex_inline justify_between"
                          },
                          [
                            _c("div", { staticClass: "row align_center" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "m-text_bold color_gray-1 mr_2"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.isCurrentUser
                                        ? _vm.$t(
                                            "unified-profile.profile.my-professions"
                                          )
                                        : "Профессии"
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "m-text_bold-2 color_gray-2" },
                                [_vm._v(_vm._s(_vm.counters["professions"]))]
                              )
                            ]),
                            _vm._v(" "),
                            _vm.isCurrentUser === true
                              ? [
                                  _c("div", { staticClass: "row w_auto" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "m-text_bold color_main",
                                        attrs: { href: "javascript:void(0)" },
                                        on: {
                                          click:
                                            _vm._handleClickCreateProfession
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "unified-profile.profile.add"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "feed" },
                          [
                            _vm.isEmptyProfessions
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "page__plug page__plug_feed_empty-list mt_1 mb_0"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "icon icon_size_lg icon_fill_blue mb_5"
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "/dist/img/icons/svg/sprite.svg#icon_info"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "heading heading_h5" },
                                        [_vm._v("Профессий нет")]
                                      ),
                                      _vm._v(" "),
                                      _vm.isCurrentUser === true &&
                                      _vm.isAuthorized === true
                                        ? [
                                            _vm._m(0),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass: "btn btn_primary",
                                                on: {
                                                  click:
                                                    _vm._handleClickCreateProfession
                                                }
                                              },
                                              [_vm._v("Добавить")]
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.loadingProfessions
                              ? _c("lm-m-loader")
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.professions["data"], function(
                              profession
                            ) {
                              return _c("profession-card", {
                                key: profession.id,
                                attrs: {
                                  profession: profession,
                                  isCatalogPage: false
                                },
                                on: {
                                  actionSheet: _vm._handleActionSheetProfession,
                                  changeState: _vm._handleChangeStateProfession
                                }
                              })
                            })
                          ],
                          2
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  (_vm.isCurrentUser || _vm.hasCompanies) &&
                  _vm.isRepresentative
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "lm-card w_100 m-flex_inline justify_between mt_4"
                          },
                          [
                            _c("div", { staticClass: "row align_center" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "m-text_bold color_gray-1 mr_2"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.isCurrentUser
                                        ? _vm.$t(
                                            "unified-profile.profile.my-companies"
                                          )
                                        : "Компании"
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "m-text_bold-2 color_gray-2" },
                                [_vm._v(_vm._s(_vm.counters["companies"]))]
                              )
                            ]),
                            _vm._v(" "),
                            _vm.isCurrentUser === true
                              ? [
                                  _c("div", { staticClass: "row w_auto" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "m-text_bold color_main",
                                        attrs: { href: "javascript:void(0)" },
                                        on: {
                                          click: _vm._handleClickCreateCompany
                                        }
                                      },
                                      [_vm._v("Добавить")]
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-feed" },
                          [
                            _vm.isEmptyCompanies
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "page__plug page__plug_feed_empty-list mt_1 mb_0"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "icon icon_size_lg icon_fill_blue mb_5"
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "/dist/img/icons/svg/sprite.svg#icon_info"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "heading heading_h5" },
                                        [_vm._v("Компаний нет")]
                                      ),
                                      _vm._v(" "),
                                      _vm.isCurrentUser === true &&
                                      _vm.isAuthorized === true
                                        ? [
                                            _vm._m(1),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                staticClass: "btn btn_primary",
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                },
                                                on: {
                                                  click:
                                                    _vm._handleClickCreateCompany
                                                }
                                              },
                                              [_vm._v("Добавить")]
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.loadingCompanies ? _c("lm-m-loader") : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.companies["data"], function(company) {
                              return _c("company-card", {
                                key: company.id,
                                attrs: {
                                  company: company,
                                  isCatalogPage: false
                                },
                                on: {
                                  actionSheet: _vm._handleActionSheetCompany,
                                  changeState: _vm._handleChangeStateCompany
                                }
                              })
                            })
                          ],
                          2
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: { actions: _vm.actionSheet.actions, "cancel-text": "" },
        on: { input: _vm._handleInputActionSheetUser },
        model: {
          value: _vm.actionSheet.value,
          callback: function($$v) {
            _vm.$set(_vm.actionSheet, "value", $$v)
          },
          expression: "actionSheet.value"
        }
      }),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: {
          actions: _vm.professions.actionSheet.actions,
          "cancel-text": ""
        },
        on: { input: _vm._handleInputActionSheetProfession },
        model: {
          value: _vm.professions.actionSheet.value,
          callback: function($$v) {
            _vm.$set(_vm.professions.actionSheet, "value", $$v)
          },
          expression: "professions.actionSheet.value"
        }
      }),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: {
          actions: _vm.companies.actionSheet.actions,
          "cancel-text": ""
        },
        on: { input: _vm._handleInputActionSheetCompany },
        model: {
          value: _vm.companies.actionSheet.value,
          callback: function($$v) {
            _vm.$set(_vm.companies.actionSheet, "value", $$v)
          },
          expression: "companies.actionSheet.value"
        }
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_4" }, [
      _vm._v("Для начала работы, необходимо"),
      _c("br"),
      _vm._v(" добавить новую профессию")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_4" }, [
      _vm._v("Для начала работы, необходимо"),
      _c("br"),
      _vm._v(" добавить новую компанию")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-723dc997", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=89.build.964a24bb8838fe452d11.js.map