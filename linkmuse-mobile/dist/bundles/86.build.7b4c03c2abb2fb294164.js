webpackJsonp([86],{

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1652);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_654ec59d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2029);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2025)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-654ec59d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_654ec59d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CertifyingSpecialist/Customer/Register/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-654ec59d", Component.options)
  } else {
    hotAPI.reload("data-v-654ec59d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NOT_PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MATCH_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WAIT_CONFIRM_MEETING_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREED_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WAIT_WORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WAIT_CONFIRM_WORK_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCELED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getPaidCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getMeetingCategory; });
/* unused harmony export getInWorkCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getInWorkCategorySpecialist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getArchivalCategory; });
var NOT_PAID = 'not_paid'; // Не оплачен
var PAID = 'paid'; // Оплачен
var MATCH_MEETING = 'match_meeting'; // Согласование даты и времени
var WAIT_CONFIRM_MEETING_CLIENT = 'wait_confirm_meeting_client'; // Ожидается подтверждение времени Клиентом
var AGREED_MEETING = 'agreed_meeting'; // Согласовано время и дата (встреча назначена)
var WAIT_WORK = 'wait_work'; // Ожидает исполнения работы (загрузка данных)
var WAIT_CONFIRM_WORK_CLIENT = 'wait_confirm_work_client'; // Ожидает подтверждения работы Клиентом
var FINALIZING = 'finalizing'; // На доработке
var FINISHED = 'finished'; // Завершен
var CANCELED = 'canceled'; // Отменен

var getPaidCategory = function getPaidCategory() {
  return [PAID];
};

var getMeetingCategory = function getMeetingCategory() {
  return [MATCH_MEETING, WAIT_CONFIRM_MEETING_CLIENT, AGREED_MEETING];
};

var getInWorkCategory = function getInWorkCategory() {
  return [WAIT_WORK, WAIT_CONFIRM_WORK_CLIENT, FINALIZING];
};

var getInWorkCategorySpecialist = function getInWorkCategorySpecialist() {
  return [WAIT_WORK, FINALIZING];
};

var getArchivalCategory = function getArchivalCategory() {
  return [FINISHED, CANCELED];
};

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MEASUREMENT; });
var PHOTO = 'photo';
var VIDEO = 'video';
var MEASUREMENT = 'measurement'; // Обмер

/***/ }),

/***/ 1498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_VAT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enums_Services__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__ = __webpack_require__(1501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_object_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Enums_VAT__ = __webpack_require__(1503);
var _Object$freeze;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



 // Диспут ( может быть в любом статусе)











var DEFAULT_CLASS_ORDER = 'default';
var DEFAULT_STATUS_ORDER = 'Необработанный';
var DEFAULT_WORK = '-';

var DISPUTE = 'dispute';
var DEFAULT_DISPUTE_STATUS = ' Нет решения';
var DEFAULT_DISPUTE_CAUSE = '';
var DEFAULT_DISPUTE_SOLUTION = '';

var DEFAULT_VAT = 'НДС 0%';

var convert = __webpack_require__(1504);

var RULES = Object.freeze((_Object$freeze = {}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["b" /* PHOTO */]] = function (context) {
  return context.photo ? '\u0424\u043E\u0442\u043E (' + context.photo.min + ')' : null;
}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["c" /* VIDEO */]] = function (context) {
  return context.video ? '\u0412\u0438\u0434\u0435\u043E-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 (' + convert(context.video.duration).minutes + ' \u043C\u0438\u043D)' : null;
}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["a" /* MEASUREMENT */]] = function (context) {
  return context.measurement ? '\u041E\u0431\u043C\u0435\u0440' : null;
}, _Object$freeze));

var CertifyingSpecialist = function () {
  function CertifyingSpecialist() {
    var _works, _classes, _statuses, _statuses2, _causes, _solutions, _VAT;

    _classCallCheck(this, CertifyingSpecialist);

    this.service = {
      works: (_works = {}, _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["b" /* PHOTO */]] = 'Фото', _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["c" /* VIDEO */]] = 'Видео', _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["a" /* MEASUREMENT */]] = 'Обмер', _works)
    };

    this.order = {
      card: {
        classes: (_classes = {}, _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["f" /* NOT_PAID */]] = 'not_paid', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["g" /* PAID */]] = 'untreated', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["e" /* MATCH_MEETING */]] = 'agreement', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["h" /* WAIT_CONFIRM_MEETING_CLIENT */]] = 'agreement', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["a" /* AGREED_MEETING */]] = 'meeting', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["j" /* WAIT_WORK */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["i" /* WAIT_CONFIRM_WORK_CLIENT */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["c" /* FINALIZING */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["d" /* FINISHED */]] = 'finished', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["b" /* CANCELED */]] = 'canceled', _classes[DISPUTE] = 'dispute', _classes),
        statuses: (_statuses = {}, _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["f" /* NOT_PAID */]] = 'Неоплаченный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["g" /* PAID */]] = 'Необработанный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["e" /* MATCH_MEETING */]] = 'Согласование встречи', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["h" /* WAIT_CONFIRM_MEETING_CLIENT */]] = 'Согласование встречи', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["a" /* AGREED_MEETING */]] = 'Встреча', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["j" /* WAIT_WORK */]] = 'В работе', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["i" /* WAIT_CONFIRM_WORK_CLIENT */]] = 'Подтверждение работы', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["c" /* FINALIZING */]] = 'На доработке', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["d" /* FINISHED */]] = 'Завершенный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["b" /* CANCELED */]] = 'Отмененный', _statuses[DISPUTE] = 'Диспут', _statuses)
      }
    };

    this.dispute = {
      statuses: (_statuses2 = {}, _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["b" /* PAYMENT_CUSTOMER */]] = 'Выплата клиенту', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["c" /* PAYMENT_SPECIALIST */]] = 'Выплата специалисту', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["a" /* FINALIZING */]] = 'Доработка заказа', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["e" /* REFUSE_FINALIZING */]] = 'Отказ в доработке', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["f" /* SEPARATE_PAYMENT */]] = 'Раздельная выплата(сумма Клиенту, сумма СС)', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["d" /* REFUSE_DISPUTE */]] = 'Отказ в диспуте', _statuses2),
      causes: (_causes = {}, _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["c" /* IGNORE_SPECIALIST */]] = 'Специалист меня игнорирует', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["g" /* QUALITY_WORK */]] = 'Качество работы специалиста меня не устраивает', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["e" /* NOT_MEETING */]] = 'Встреча со специалистом не состоялась', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["h" /* WAS_LATE */]] = 'Опоздал (неявка)', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["d" /* INADEQUATE_STATE */]] = 'Неадекватное состояние /поведение', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["b" /* DISCREPANCY */]] = 'Несоответствие правилам ', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["a" /* ANOTHER_MAN */]] = 'Пришел другой человек', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["f" /* OTHER */]] = 'Другое', _causes),
      solutions: (_solutions = {}, _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["d" /* RETURN_MONEY */]] = 'Вернуть деньги заказчику', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["c" /* REPLACE_SPECIALIST */]] = 'Заменить специалиста на другого', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["a" /* AGAIN */]] = 'Провести сертификацию еще раз', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["b" /* GET_MONEY */]] = 'Получить обратно всю сумму оплаты или ее часть', _solutions)
    };

    this.VAT = (_VAT = {}, _VAT[__WEBPACK_IMPORTED_MODULE_6__Enums_VAT__["a" /* VAT_0 */]] = 'НДС 0%', _VAT);

    // this.VAT = {
    //   [VAT_NULL]: 'НДС не облагается',
    //   [VAT_20]: 'НДС 20%',
    //   [VAT_10]: 'НДС 10%',
    //   [VAT_0]: 'НДС 0%',
    //   [VAT_110]: 'расчетный НДС 10/110',
    //   [VAT_120]: 'расчетный НДС 20/120'
    // }
  }

  CertifyingSpecialist.prototype.getOrderStatusClass = function getOrderStatusClass(status) {
    var item = this.order.card.classes[status];
    return item || DEFAULT_CLASS_ORDER;
  };

  CertifyingSpecialist.prototype.getOrderStatusTranslate = function getOrderStatusTranslate(status) {
    var item = this.order.card.statuses[status];
    return item || DEFAULT_STATUS_ORDER;
  };

  CertifyingSpecialist.prototype.getServiceWorkTranslate = function getServiceWorkTranslate(type) {
    var item = this.service.works[type];
    return item || DEFAULT_WORK;
  };

  CertifyingSpecialist.prototype.getTransformServiceWorkType = function getTransformServiceWorkType(object) {
    if (!object) return;

    var transformer = Object(__WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__["transformerFactory"])(RULES);
    var result = transformer(Object.freeze(object));

    // Removed empty value in transform object
    Object.keys(result).forEach(function (k) {
      return !result[k] && result[k] !== undefined && delete result[k];
    });
    return result;
  };

  CertifyingSpecialist.prototype.getDisputeStatusTranslate = function getDisputeStatusTranslate(status) {
    var item = this.dispute.statuses[status];
    return item || DEFAULT_DISPUTE_STATUS;
  };

  CertifyingSpecialist.prototype.getDisputeCauseTranslate = function getDisputeCauseTranslate(cause) {
    var item = this.dispute.causes[cause];
    return item || DEFAULT_DISPUTE_CAUSE;
  };

  CertifyingSpecialist.prototype.getDisputeSolutionsTranslate = function getDisputeSolutionsTranslate(solution) {
    var item = this.dispute.solutions[solution];
    return item || DEFAULT_DISPUTE_SOLUTION;
  };

  CertifyingSpecialist.prototype.getRatingClass = function getRatingClass(rating) {
    switch (true) {
      case rating >= 4:
        return 'green';
      case rating >= 3 && rating < 4:
        return 'yellow';
      case rating < 3:
        return 'red';
      default:
        return 'gray';
    }
  };

  CertifyingSpecialist.prototype.getVATTranslate = function getVATTranslate(vat) {
    var item = this.VAT[vat];
    return item || DEFAULT_VAT;
  };

  return CertifyingSpecialist;
}();

/* harmony default export */ __webpack_exports__["b"] = (new CertifyingSpecialist());

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAYMENT_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAYMENT_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REFUSE_FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEPARATE_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REFUSE_DISPUTE; });
var PAYMENT_CUSTOMER = 'payment_customer'; // Выплата Клиенту
var PAYMENT_SPECIALIST = 'payment_specialist'; // Выплата Специалисту
var FINALIZING = 'finalizing'; // Доработка заказа
var REFUSE_FINALIZING = 'refuse_finalizing'; // Отказ в доработке
var SEPARATE_PAYMENT = 'separate_payment'; // Раздельная выплата(сумма Клиенту, сумма СС)
var REFUSE_DISPUTE = 'refuse_dispute'; // Отказ в диспуте

/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IGNORE_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QUALITY_WORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NOT_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WAS_LATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INADEQUATE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISCREPANCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANOTHER_MAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSpecialistCauses; });
/* unused harmony export getCertifiedUserCauses */
var IGNORE_SPECIALIST = 'ignore_specialist';
var QUALITY_WORK = 'quality_work';
var NOT_MEETING = 'not_meeting';

var WAS_LATE = 'was_late';
var INADEQUATE_STATE = 'inadequate_state';
var DISCREPANCY = 'discrepancy';
var ANOTHER_MAN = 'another_man';
var OTHER = 'other';

var getSpecialistCauses = function getSpecialistCauses() {
  return [IGNORE_SPECIALIST, QUALITY_WORK, NOT_MEETING];
};

var getCertifiedUserCauses = function getCertifiedUserCauses() {
  return [WAS_LATE, INADEQUATE_STATE, DISCREPANCY, ANOTHER_MAN, OTHER];
};

/***/ }),

/***/ 1501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RETURN_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REPLACE_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSpecialistSolutions; });
/* unused harmony export getCertifiedUserSolutions */
var RETURN_MONEY = 'return_money';
var REPLACE_SPECIALIST = 'replace_specialist';
var AGAIN = 'again';
var GET_MONEY = 'get_money';

var getSpecialistSolutions = function getSpecialistSolutions() {
  return [RETURN_MONEY, REPLACE_SPECIALIST, AGAIN];
};

var getCertifiedUserSolutions = function getCertifiedUserSolutions() {
  return [RETURN_MONEY, GET_MONEY];
};

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transformer = exports.transformer = function transformer(rules, source) {
  return Object.keys(rules).reduce(function (target, name) {
    var rule = rules[name];
    switch (typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) {
      case 'string':
        return _extends({}, target, _defineProperty({}, name, source[rule]));
      case 'function':
        return _extends({}, target, _defineProperty({}, name, rule(source, name)));
      default:
        throw new Error('Wrong transformer rule for property: ', name);
    }
  }, {});
};

var transformerFactory = exports.transformerFactory = function transformerFactory(rules) {
  return function (source) {
    return transformer(rules, source);
  };
};

exports.default = transformerFactory;


/***/ }),

/***/ 1503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VAT_NULL */
/* unused harmony export VAT_20 */
/* unused harmony export VAT_10 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAT_0; });
/* unused harmony export VAT_110 */
/* unused harmony export VAT_120 */
var VAT_NULL = null; // НДС не облагается
var VAT_20 = 20; // НДС 20%
var VAT_10 = 10; // НДС 10%
var VAT_0 = 0; // НДС 0%
var VAT_110 = 110; // расчетный НДС 10/110
var VAT_120 = 120; // расчетный НДС 20/120

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (seconds) {
    seconds = parseInt(seconds, 10);

    if (isNaN(seconds)) {
        throw new TypeError('Invalid value sent to convert-seconds');
    }
    var results = {};
    results.hours = Math.floor(seconds / 60 / 60);
    results.minutes = Math.floor((seconds / 60) % 60);
    results.seconds = Math.floor(seconds % 60);

    return results;
};


/***/ }),

/***/ 1652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_state_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_CertifyingSpecialist__ = __webpack_require__(1498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UI_Dropzone_Enums_Types__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_CertifyingSpecialist_extends_Rules_vue__ = __webpack_require__(2027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_CertifyingSpecialist_Enums_Types_js__ = __webpack_require__(448);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'certifying/getField',
  mutationType: 'certifying/updateField'
}),
    mapFields = _createHelpers.mapFields;

var KEYS = {
  type: 'user.type',
  phone: 'user.phone',
  fullname: 'user.fullname',
  company_name: 'user.company_name',
  itn: 'bank_account.itn',
  iec: 'bank_account.iec',
  bic: 'bank_account.bic',
  legal_address: 'bank_account.legal_address',
  bank_recipient: 'bank_account.bank_recipient',
  actual_address: 'bank_account.actual_address',
  checking_account: 'bank_account.checking_account',
  correspondent_account: 'bank_account.correspondent_account',
  vat: 'bank_account.vat'
};

var BASE_URL_UPLOAD = "https://feature-single-profile.test.cnt.team";

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: function metaInfo() {
    return {
      title: 'Ура! Вы решили стать СС и много зарабатывать'
    };
  },
  asyncData: function asyncData(_ref) {
    var store = _ref.store;

    return store.dispatch('certifying/fetchAllServices');
  },

  components: { 'lm-dropzone': __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__["a" /* default */], 'lm-rules': __WEBPACK_IMPORTED_MODULE_8__modules_CertifyingSpecialist_extends_Rules_vue__["a" /* default */] },
  data: function data() {
    return {
      normalizeDotsToArrow: __WEBPACK_IMPORTED_MODULE_3__utils__["s" /* normalizeDotsToArrow */], KEYS: KEYS,
      INDIVIDUAL_ENTREPRENEUR: __WEBPACK_IMPORTED_MODULE_9__modules_CertifyingSpecialist_Enums_Types_js__["b" /* INDIVIDUAL_ENTREPRENEUR */], ENTITY: __WEBPACK_IMPORTED_MODULE_9__modules_CertifyingSpecialist_Enums_Types_js__["a" /* ENTITY */],
      DEFAULT_VAT: __WEBPACK_IMPORTED_MODULE_6__modules_CertifyingSpecialist__["a" /* DEFAULT_VAT */],
      uploadItems: [],
      state: null,
      error: false,
      loading: false,
      success: false,
      specialists: {
        count: 0,
        data: []
      },
      acceptRules: false
    };
  },

  computed: _extends({}, mapFields(['register.data.fields']), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    services: 'certifying/getAllServicesData'
  }), {
    isIndividualEntrepreneur: function isIndividualEntrepreneur() {
      return this.fields[KEYS['type']] === __WEBPACK_IMPORTED_MODULE_9__modules_CertifyingSpecialist_Enums_Types_js__["b" /* INDIVIDUAL_ENTREPRENEUR */];
    },
    isEntity: function isEntity() {
      return this.fields[KEYS['type']] === __WEBPACK_IMPORTED_MODULE_9__modules_CertifyingSpecialist_Enums_Types_js__["a" /* ENTITY */];
    },
    certifying_specialist_status: function certifying_specialist_status() {
      if (!this.user) return;
      return this.user['certifying_specialist_status'];
    },
    progress: function progress() {
      return (this.state.index / (this.state.all.states.length - 1) * 100).toFixed() + '%';
    },
    canModerate: function canModerate() {
      return true;
      // return this.uploadItems.length;
    },
    vat: function vat() {
      var _this = this;

      var options = [];

      Object.keys(__WEBPACK_IMPORTED_MODULE_6__modules_CertifyingSpecialist__["b" /* default */].VAT).forEach(function (id) {
        options.push({ id: id === 'null' ? null : id, text: _this.getVATTranslate(id) });
      });

      return options;
    }
  }),
  created: function created() {
    this.fsm = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateMachine"].create({
      transitions: ['next : services > rules > user > bank_account > photos > finish', 'back: services < rules < user < bank_account < photos'],
      handlers: {
        'services@next': this._handleSelectedServices,
        'rules@next': this._handleDrawRules,
        'user@next': this._handleDrawUserInfo,
        'bank_account@next': this._handleDrawBankAccount,
        'photos@next': this._handleUploadedPhotos,
        'finish': this._handleFinishState
      }
    });

    this.state = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateHelper"].object(this.fsm).data;

    this.checkCertifyingSpecialist();
  },
  mounted: function mounted() {
    var fields = this.$localStorage.get('register.certifying', null, Object);
    if (fields && (typeof fields === 'undefined' ? 'undefined' : _typeof(fields)) === 'object') Object.assign(this.fields, fields);
    this.acceptRules = this.$localStorage.get('register.certifying.acceptRules', false);
  },

  watch: {
    acceptRules: function acceptRules(value) {
      this.$localStorage.set('register.certifying.acceptRules', this.acceptRules);
    }
  },
  methods: {
    _handleBlurUpdateField: function _handleBlurUpdateField() {
      this.$localStorage.set('register.certifying', JSON.stringify(this.fields));
    },
    getVATTranslate: function getVATTranslate(item) {
      return __WEBPACK_IMPORTED_MODULE_6__modules_CertifyingSpecialist__["b" /* default */].getVATTranslate(item);
    },
    handleUploadItems: function handleUploadItems(items) {
      this.uploadItems = items;
    },
    handleUpload: function handleUpload() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args[0].type === __WEBPACK_IMPORTED_MODULE_7__components_UI_Dropzone_Enums_Types__["a" /* PHOTO */]) this.handleUploadPhoto.apply(this, args);else if (args[0].type === __WEBPACK_IMPORTED_MODULE_7__components_UI_Dropzone_Enums_Types__["b" /* VIDEO */]) this.handleUploadVideo.apply(this, args);
    },
    handleRemove: function handleRemove(item, remove) {
      if (item.type === __WEBPACK_IMPORTED_MODULE_7__components_UI_Dropzone_Enums_Types__["a" /* PHOTO */]) this.handleRemovePhoto(item, remove);else if (item.type === __WEBPACK_IMPORTED_MODULE_7__components_UI_Dropzone_Enums_Types__["b" /* VIDEO */]) this.handleRemoveVideo(item, remove);
    },
    handleUploadPhoto: function handleUploadPhoto(item, file, progress, success, error) {
      var data = new FormData();

      data.append('file', file);
      data.append('album_id', -2);

      this.$api.post('api/v1/users/photos', data, {
        baseURL: BASE_URL_UPLOAD,
        cancelToken: item.source.token,
        timeout: 120000,
        onUploadProgress: function onUploadProgress(progressEvent) {
          progress(item.uid, progressEvent);
        }
      }).then(function (response) {
        var _response$data = response.data,
            photo_id = _response$data.photo_id,
            path = _response$data.path;


        success(item.uid, { id: photo_id, path: path });
      }).catch(function (err) {
        error(item.uid, err, 'file');
        console.error('Error upload photo');
      });
    },
    handleRemovePhoto: function handleRemovePhoto(item, remove) {
      this.$api.delete('api/v1/users/photos/' + item.id).then(function (response) {
        remove(item.uid);
      }).catch(function () {
        remove(item.uid, false);
        throw new Error('Error delete photo');
      });
    },
    handleRemoveVideo: function handleRemoveVideo(item, remove) {
      this.$api.delete('api/v1/users/videos/' + item.id).then(function (response) {
        remove(item.uid);
      }).catch(function () {
        remove(item.uid, false);
        throw new Error('Error delete video');
      });
    },
    handleUploadVideo: function handleUploadVideo(item, file, progress, success, error) {
      var data = new FormData();

      data.append('file', file);
      data.append('album_id', -2);

      this.$api.post('api/v1/users/videos', data, {
        baseURL: BASE_URL_UPLOAD,
        cancelToken: item.source.token,
        timeout: 120000,
        onUploadProgress: function onUploadProgress(progressEvent) {
          progress(item.uid, progressEvent);
        }
      }).then(function (response) {
        var _response$data2 = response.data,
            _response$data2$data = _response$data2.data,
            id = _response$data2$data.id,
            url = _response$data2$data.url,
            video = _response$data2.data;


        success(item.uid, { id: id, url: url, video: video });
      }).catch(function (err) {
        error(item.uid, err, 'file');
        console.error('Error upload video');
      });
    },
    checkCertifyingSpecialist: function checkCertifyingSpecialist() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.certifying_specialist_status === 'not_activated') {
          _this2.fsm.go('finish', true);

          _this2.$api.get('api/v2/certifying-specialists/helpers/specialists/random', { limit: 2 }).then(function (response) {
            var _response$data3 = response.data,
                count = _response$data3.count,
                data = _response$data3.specialists.data;


            _this2.specialists.data = data;
            _this2.specialists.count = count;
          }).catch(function () {
            throw new Error('Error fetch random specialists');
          });
        } else if (_this2.certifying_specialist_status === 'activated') {
          _this2.fsm.go('finish', true);
          _this2.$router.replace({ 'name': 'certifying.customer.orders.index' });
        } else _this2.fsm.go('services', true);
      });
    },
    _handleSelectedServices: function _handleSelectedServices(event, fsm) {
      var _this3 = this;

      fsm.pause();

      if (this.fields.services.length === 0) {
        fsm.cancel();return false;
      }

      this._handleValidateFields().then(function () {
        fsm.resume();
      }).catch(function () {
        fsm.cancel();
        _this3.$scrollTo('#service-input-error', 500, { offset: -20 });
      });
    },
    _handleDrawUserInfo: function _handleDrawUserInfo(event, fsm) {
      fsm.pause();

      this._handleValidateFields().then(function () {
        fsm.resume();
      }).catch(function () {
        return fsm.cancel();
      });
    },
    _handleDrawRules: function _handleDrawRules(event, fsm) {
      fsm.pause();

      if (this.acceptRules) fsm.resume();else fsm.cancel();
    },
    _handleDrawBankAccount: function _handleDrawBankAccount(event, fsm) {
      fsm.pause();

      this._handleValidateFields().then(function () {
        fsm.resume();
      }).catch(function () {
        return fsm.cancel();
      });
    },
    _handleUploadedPhotos: function _handleUploadedPhotos(event, fsm) {
      fsm.resume();
    },
    _handleFinishState: function _handleFinishState(event, fsm) {},

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },

    /**
     * Next transition
     * @private
     */
    _handleClickNextRequireOnRole: function _handleClickNextRequireOnRole() {
      this.fsm.do('next');
    },

    /**
     * Back transition
     * @private
     */
    _handleClickBackRequireOnRole: function _handleClickBackRequireOnRole() {
      this.fsm.do('back');
    },
    _handleClickCreateRequest: function _handleClickCreateRequest() {
      var _this5 = this;

      if (this.loading) return;

      if (!this.canModerate) return;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
      this.loading = true;

      this.$api.post('api/v2/certifying-specialists', Object(__WEBPACK_IMPORTED_MODULE_3__utils__["y" /* unflatten */])(this.fields)).then(function (response) {
        var _response$data4 = response.data,
            count = _response$data4.count,
            data = _response$data4.specialists.data;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this5.loading = false;
        _this5.success = true;
        _this5.error = false;

        _this5.specialists.data = data;
        _this5.specialists.count = count;

        _this5.$store.dispatch('auth/setUserField', { key: 'certifying_specialist_status', value: 'not_activated' });
        _this5._handleClickNextRequireOnRole();
      }, function (error) {
        var data = error.response.data,
            status = error.response.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this5.loading = false;
        _this5.success = false;
        _this5.error = true;

        if (status === 422) {
          var state = null;
          var errors = data.errors;


          Object.keys(errors).forEach(function (key) {
            if (state === null) state = key.split('.')[0];
            _this5.$validator.errors.add({ field: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* normalizeDotsToArrow */])(key), msg: errors[key].join(', ') });
          });

          if (state && _this5.fsm.has(state)) _this5.fsm.go(state, true);
        } else throw new Error('Error register CS');
      });
    }
  }
});

/***/ }),

/***/ 1653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['value'],
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */]
    };
  },

  computed: {},
  methods: {
    _handleOpenModal: function _handleOpenModal(ref) {
      this.$refs[ref]._handleOpen();
    }
  }
});

/***/ }),

/***/ 2025:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2026);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("31a3ba2d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-654ec59d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-654ec59d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2026:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n@media (min-width: 767px) {\n.lm-m-cs-register-wrap > .title[data-v-654ec59d], .lm-m-cs-register-wrap > .desc[data-v-654ec59d] {\n    text-align: center;\n}\n.lm-vs-landing-talent .lm-vs-landing-talent-line[data-v-654ec59d] {\n    padding-top: 0 !important;\n}\n}\n.service-selected-btn[data-v-654ec59d] {\n  padding: 0;\n  width: 172px !important;\n  font-weight: normal;\n}\n.lm-m-service-wrap-input-error[data-v-654ec59d] {\n  display: block;\n  color: #fc2e5f;\n  margin-bottom: 24px;\n}\n.lm-m-rectangle-checked-service[data-v-654ec59d] {\n  width: 16px;\n  height: 16px;\n  line-height: 12px;\n  text-align: center;\n  border-radius: 100%;\n  background: #deecfc;\n  display: inline-block;\n}\n.lm-m-cs-register[data-v-654ec59d] .lm-dropzone--item--wrap {\n  width: 112px;\n  height: 72px;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/CertifyingSpecialist/Customer/Register/Index.vue"],"names":[],"mappings":";AAAA;AACE;IACE,mBAAmB;CAAE;AACvB;IACE,0BAA0B;CAAE;CAAE;AAElC;EACE,WAAW;EACX,wBAAwB;EACxB,oBAAoB;CAAE;AAExB;EACE,eAAe;EACf,eAAe;EACf,oBAAoB;CAAE;AAExB;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;CAAE;AAE1B;EACE,aAAa;EACb,aAAa;CAAE","file":"Index.vue","sourcesContent":["@media (min-width: 767px) {\n  .lm-m-cs-register-wrap > .title, .lm-m-cs-register-wrap > .desc {\n    text-align: center; }\n  .lm-vs-landing-talent .lm-vs-landing-talent-line {\n    padding-top: 0 !important; } }\n\n.service-selected-btn {\n  padding: 0;\n  width: 172px !important;\n  font-weight: normal; }\n\n.lm-m-service-wrap-input-error {\n  display: block;\n  color: #fc2e5f;\n  margin-bottom: 24px; }\n\n.lm-m-rectangle-checked-service {\n  width: 16px;\n  height: 16px;\n  line-height: 12px;\n  text-align: center;\n  border-radius: 100%;\n  background: #deecfc;\n  display: inline-block; }\n\n.lm-m-cs-register /deep/ .lm-dropzone--item--wrap {\n  width: 112px;\n  height: 72px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Rules_vue__ = __webpack_require__(1653);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7553424_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Rules_vue__ = __webpack_require__(2028);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Rules_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7553424_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Rules_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/CertifyingSpecialist/extends/Rules.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e7553424", Component.options)
  } else {
    hotAPI.reload("data-v-e7553424", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-cs-container-modal" }, [
    _c("div", [
      _c("div", { staticClass: "title" }, [_vm._v("Подтверждение правил")]),
      _vm._v(" "),
      _c("div", { staticClass: "desc" }, [
        _vm._v(
          "Перед заполнением заявки необходимо ознакомиться с документами ниже и подтвердить их"
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "lm-m-cs-link-modal",
          on: {
            click: function($event) {
              return _vm._handleOpenModal("modal1")
            }
          }
        },
        [
          _c("div", { staticClass: "lm-m-cs-wrapper-text" }, [
            _vm._v("Пользовательское соглашение")
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "lm-m-cs-link-modal",
          on: {
            click: function($event) {
              return _vm._handleOpenModal("modal2")
            }
          }
        },
        [
          _c("div", { staticClass: "lm-m-cs-wrapper-text" }, [
            _vm._v("Правила верификации")
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "lm-m-cs-link-modal",
          on: {
            click: function($event) {
              return _vm._handleOpenModal("modal3")
            }
          }
        },
        [
          _c("div", { staticClass: "lm-m-cs-wrapper-text" }, [
            _vm._v("Инструкция")
          ]),
          _vm._v(" "),
          _vm._m(2)
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "lm-m-cs-link-modal",
          on: {
            click: function($event) {
              return _vm._handleOpenModal("modal4")
            }
          }
        },
        [
          _c("div", { staticClass: "lm-m-cs-wrapper-text" }, [
            _vm._v("Договор")
          ]),
          _vm._v(" "),
          _vm._m(3)
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "lm-m-cs-checkbox-container" }, [
        _c("div", { staticClass: "checkbox" }, [
          _c("input", {
            staticClass: "checkbox__mark",
            attrs: { id: "lm-m-cs-checkbox", type: "checkbox" },
            domProps: { checked: _vm.value },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event.target.checked)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "checkbox__label",
              attrs: { for: "lm-m-cs-checkbox" }
            },
            [_vm._v("Я ознакомлен с документами")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "lm-m-cs-modals-text" },
      [
        _c(
          "lm-cs-rules-modal",
          {
            ref: "modal1",
            staticClass: "lm-m-cs-rules-modal-text lm-m-cs-modals-container"
          },
          [
            _c("h2", [_vm._v("Пользовательское соглашение сервиса Linkmuse")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Общество с ограниченной ответственностью «Центр новаций и технологий» в порядке, предусмотренном данным\n         Пользовательским соглашением предоставляет Клиентам сервис Linkmuse.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("1. Термины и определения")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "В данном Пользовательском соглашении нижеприведенные термины используются в следующих значениях:\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.1. Авторизация — процедура принятия решения Сервиса о наличии у Клиента прав на выполнение действий в\n        Личном кабинете, которые он пытается совершить.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.2. Аккаунт — учетная запись Верифицирующего специалиста или Пользователя, создаваемая в момент регистрации\n        в Сервисе, позволяющая им воспользоваться функциями Личного кабинета.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.3. Договор на оказание Услуг верификации – договор, заключаемый на условиях Пользовательского соглашения\n        между Пользователем и Исполнителем, действующим от своего имени, за счет и в интересах выбранного\n        Пользователем Верифицирующего специалиста. Фактическое исполнение по данному договору осуществляется\n        конкретным Верифицирующим специалистом.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.4. Заказ – оформленный Пользователем на Сервисе заказ Услуги верификации с учетом детализированной\n        информации в интерфейсе Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.5. Исполнитель – ООО «Центр новаций и технологий». Исполнитель от своего имени, за счет и в интересах\n        Верифицирующего специалиста на условиях данного Пользовательского соглашения заключает Договоры на оказание\n        Услуг верификации с Пользователем, а также принимать исполнение по такому договору. Непосредственное оказание\n        Услуг Пользователям осуществляется Верифицирующим специалистом в рамках Сессий.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.6. Клиент (Клиенты) – Верифицирующий специалист или(и) Пользователь.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.7. Личный кабинет — часть Сервиса, позволяющая Клиенту управлять своим Аккаунтом, в том числе, размещать,\n        изменять или удалять данные и иную информацию, указанную при создании Аккаунта, получать информацию,\n        создавать и принимать электронные документы, а также использовать иные функции Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.8. Логин – уникальный идентификатор Клиента на Сервисе, указываемый Клиентом в момент создания Аккаунта.\n        Логин может быть привязан к номеру телефона, указанному Клиентом в момент создания Аккаунта.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.9. Пароль/ Код доступа — дополнительный идентификатор Клиента в Личном кабинете. Создается Клиентом\n        самостоятельно, регистрируется Сервисом автоматически. Представляет собой известную только Клиенту\n        последовательность символов/цифр, позволяющую произвести авторизацию Клиента при использовании им Личного кабинета.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.10. Пользователь – физическое лицо, использующее Сервис на условиях, предусмотренных в Пользовательском\n        соглашении, с целью получить Услуги верификации.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.11. Пользовательское соглашение/ Условия – данное пользовательское соглашение.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v("\n        1.12. Сайт - https://linkmuse.com .\n        "),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.13. Сервис Linkmuse/ Сервис - онлайн-платформа в виде Сайта и устанавливаемых на мобильные устройства\n        специализированных приложений, соединяющая Верифицирующих специалистов, которые фактически оказывают Услуги\n        верификации, и Пользователей, которые заказывают Услуги верификации. Посредством Сервиса Пользователи и\n        Верифицирующие специалисты могут  обмениваться юридически значимыми электронными сообщениями.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.14. Верифицирующий специалист – лицо, заключившее с Исполнителем отдельный договор для его участия в\n        Сервисе в качестве Верифицирующего специалиста, а также осуществляющее фото- и видео- съемку Пользователей,\n        а также замер физических параметров Пользователя в соответствии с Пользовательским соглашением.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.15. Сессия/ Процесс верификации – процесс оказания Услуг Верификации. По окончании Сессии создается серия\n        фотографий и(или) видеозаписей (в зависимости от выбранного вида Услуги), объединенных общей тематикой, а\n        также обмер биометрических параметров (сведения, которые характеризуют физиологические и биологические\n        особенности человека, на основании которых можно установить его личность) с использованием шкалы замеров.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.16. Стороны — совместное наименование Исполнителя, Верифицирующего специалиста и Пользователя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.17. Услуги верификации – услуги фото- и видео- съемки. Услуги верификации включают в себя фотографирование\n        или(и) видеозапись Пользователя с соблюдением Верифицирующим специалистом и Пользователем всех требований,\n        предусмотренных интерфейсом Сервиса и(или) Пользовательским соглашением, а также обмер физических параметров\n        Пользователя (сведения, которые характеризуют физиологические и биологические особенности человека, на\n        основании которых можно установить его личность) с использованием шкалы замеров.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.18. Электронная подпись — информация в электронной форме, которая присоединена к другой информации в\n        электронной форме (подписываемой информации) или иным образом связана с такой информацией, которая\n        используется для определения лица, подписывающего информацию. К положениям Условий об Электронных документах\n        применяются положения Федерального закона «Об электронной подписи» о порядке применения простой электронной\n        подписи. Электронная подпись признается аналогом собственноручной подписи, используется Сторонами при\n        взаимодействии через Сервис. Ключом Электронной подписи признается Логин Клиента (открытая часть ключа) и\n        Код доступа (Пароль) (закрытая часть ключа).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.19. В Пользовательском соглашении могут быть использованы термины, не определенные выше. В этом случае\n        толкование такого термина производится в соответствии с содержанием Пользовательского соглашения. В случае\n        отсутствия однозначного толкования термина в тексте Пользовательского соглашения следует руководствоваться\n        толкованием термина, определенным: в первую очередь — на Сервисе (во внутреннем интерфейсе и на Сайте), во\n        вторую очередь — законодательством РФ, в третью очередь — сложившимся (общеупотребимым) в сети Интернет.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("2. Общие положения")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        2.1. Пользовательское соглашение определяет порядок использования Сервиса, а также общие рамочные условия\n        Договора на оказание Услуг верификации. Пользовательское соглашение является юридически обязывающим\n        соглашением, определяет права, обязанности и ответственность Сторон (после акцепта его условий Клиентом).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.2. Клиент считается принявшим (акцептовавшим) Пользовательское соглашение в момент создания Аккаунта.\n        В случае несогласия Клиента с какими-либо из положений Пользовательского соглашения он должен воздержаться\n        от создания Аккаунта.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.3. Исполнитель вправе изменить положения Пользовательского соглашения, Клиент обязан ежедневно\n        ознакамливаться с актуальной редакцией Пользовательского соглашения на Сайте. Продолжение пользования\n        Клиентом Сервисом (неудаление Аккаунта) после изменения Пользовательского соглашения или Регулирующих\n        документов считается согласием с их новой редакцией.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.4. Клиент понимает и соглашается с тем, что использование Клиентом Сервиса возможно лишь на условиях\n        «как есть», т.е. согласно предоставленному Исполнителем в любой момент времени комплексу функционала,\n        информационного наполнения, интерфейса, дизайна, иных составляющих и условий использования Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.5. В случае отсутствия у Исполнителя технической возможности для оказания Клиенту услуг, он информирует об\n        этом Клиента посредством размещения информации на Сайте или (и) в Личном кабинете и приостанавливает оказание\n        соответствующей услуги до момента установления необходимых для ее оказания условий.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.6. Клиент согласен с тем, что Исполнитель может полностью или частично уступать третьим лицам свои права и\n        обязанности по Условиям, предварительно известив об этом Клиента одним из следующих способов: (а). Посредством\n        размещения Условий в новой редакции на Сайте, при этом датой получения уведомления считается дата акцепта\n        Участником соответствующих изменений в Условия, определяемая в соответствии с настоящими Условиями; и/или (б).\n        Посредством размещения уведомления на Сайте, при этом датой получения уведомления Участником считается 3\n        (третий) день с момента размещения соответствующей информации на Сайте; и/или (в). Посредством направления\n        уведомления по адресу электронной почты Участника, указанной им ранее Исполнителю, при этом датой получения\n        уведомления Участником считается следующий день с момента направления Исполнителем Участнику соответствующей\n        информации на электронную почту; и/или (г). Посредством размещения уведомления в Приложении, при этом датой\n        получения уведомления Участником считается следующий день с момента размещения Исполнителем соответствующей\n        информации в Приложении. Исполнитель вправе по своему усмотрению осуществлять выбор способа уведомления\n        Участника о полной или частичной уступке третьим лицам своих прав и обязанностей по Договору. В уведомлении\n        Участника должна содержаться информация о новом Исполнителе. При одновременном уведомлении Участника\n        Исполнителем несколькими различными способами датой получения уведомления Участника считается дата,\n        наступившая раньше остальных в соответствии с настоящими Условиями.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.7. Клиент обязуется не передавать третьим лицам информацию, которая необходима для его входа в Личный\n        кабинет и известна только Клиенту. В случае, если указанная информация стала известна третьим лицам, Клиент\n        должен сообщить об этом Исполнителю, после чего тот ограничивает доступ к Аккаунту по старым параметрам.\n        Исполнитель не несет ответственность за неправомерные действия третьих лиц, а также их доступ к информации\n        Личного кабинета и Аккаунта Клиента до момента получения от Клиента указанного уведомления.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.8. Исполнитель не несет ответственности за какие-либо перебои в обслуживании, связанные с неполадками с\n        оборудованием, системами подачи электроэнергии и/или линиями связи.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.9. В зависимости от региона Клиента, избранной им опции Сервиса, а также от иных обстоятельств, все или\n        некоторые функции Сервиса могут быть недоступны или ограничены. Функции считаются недоступными (ограниченными)\n        для Пользователя, если Пользователь не может ими воспользоваться в явном виде. Положения Пользовательского\n        соглашения, регулирующие недоступные (ограниченные) для Клиента функции Сервиса, не применяются до тех пор,\n        пока такие функции не станут ему доступны в явном виде.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.10. Используя Сервис, Клиент дает свое согласие на получение сообщений рекламного характера от Исполнителя.\n        Клиент вправе отказаться от получения сообщений рекламного характера путем использования соответствующего\n        функционала Сервиса или следуя инструкциям, указанным в полученном сообщении рекламного характера.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.11. Использование отдельных функций Сервиса, в том числе оформление Заказа, доступно Пользователю после\n        прохождения регистрации и авторизации на Сервисе. При регистрации (создании Аккаунта) Пользователь обязуется\n        предоставить данные о себе, запрашиваемые на Сервисе в форме регистрации, а также указать Логин и Пароль.\n        Пользователь обязуется не передавать Логин и Пароль третьим лицам, а также обеспечивать их сохранность и\n        конфиденциальность.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.12. Материалы на Сервисе доступны для лиц, не являющихся Клиентами. Размещая информацию на Сервисе\n        (за исключением контактной информации, идентификаторов (Логина и Пароля)), Клиент дает согласие на то, что\n        его персональная информация, которая размещена в его Личном кабинете (включая результат оказания Услуг\n        верификации), может быть доступна любым посетителям Сервиса. Также Клиент соглашается с тем, что Исполнитель\n        вправе хранить персональную информацию, включая действия, совершенные в Сервисе не менее трех лет с даты\n        исполнения соответствующего Заказа.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [
              _vm._v(
                "3. Заключение и срок действия Договора на оказание Услуг верификации"
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        3.1. Предметом Договора на оказание Услуг верификации является оказание Пользователю Услуг верификации в\n        соответствии с условиями, избранными Пользователем в интерфейсе Сервиса. В частности, в Сервисе Пользователь\n        при формировании Заказа выбирает Верифицирующего специалиста, который будет фактически оказывать услугу, вид,\n        объем, перечень, время и место оказания услуг. При этом указанные параметры оказания услуг устанавливаются\n        Пользователем не произвольно, а выбираются им из возможных опций, доступных в отношении выбранного им\n        Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.2. Договор на оказание Услуг верификации заключается между Пользователем и Исполнителем, фактическое\n        исполнение по данному договору (действия для оказания Услуг верификации) производится Верифицирующим специалистом.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.3. Договор на оказание Услуг верификации заключается в отношении отдельной Сессии. Такой договор действует\n        с момента оформления соответствующего Заказа и до момента принятия Пользователем результата оказанных Услуг\n        верификации/ момента отказа Исполнителя в удовлетворении претензии Пользователя к качеству результата оказанных услуг.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("4. Формирование Заказа")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        4.1. До момента оформления Заказа Пользователь обязуется ознакомиться со всеми условиями оказания Услуги\n        верификации, размещенными на Сервисе. Оформление Заказа означает согласие Пользователя со всеми условиями\n        оказания конкретной услуги, размещенными на Сервисе.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.2. Для формирования Заказа Пользователь выбирает интересующую его опцию из вариантов, предложенных Сервисом\n        (например: 5 профессиональных фотографий плюс верификация физических параметров; видео-визитка и т.п.).\n        Стоимость выбранного Пользователем типа услуги отображается в интерфейсе Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.3. Пользователь выбирает Верифицирующего специалиста. Интерфейс Сервиса сразу отображает, в какой геозоне\n        данный Верифицирующий специалист может оказывать услугу. При этом Верифицирующий специалист имеет возможность\n        отказаться от Заказа. В этом случае Пользователю стоит выбрать другого Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.4. Выбирая определенного Верифицирующего специалиста, Пользователь дает свое согласие на направление\n        Исполнителем этому Верифицирующему специалисту персональных данных Пользователя, включая контактную информацию\n        Пользователя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.5. Информация об оформленном Пользователем Заказе доступна в его Личном кабинете.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.6. Исполнитель вправе заблокировать Пользователю возможность оформления Заказа в случае неурегулированных\n        претензий по ранее произведенным Заказам, включая претензии в связи с жалобами Верифицирующих специалистов на\n        некорректное поведение Пользователя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.7. После выбора всех параметров Заказа Пользователь нажимает кнопку «Оплатить» (иную аналогичную кнопку) на\n        Сервисе, подтверждающую формирование Заказа. Оформляя Заказ, Пользователь подтверждает факт ознакомления и\n        согласия с Пользовательским соглашением, а также факт ознакомления с информацией о Заказе и согласия с ней.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("5. Порядок оплаты Услуг верификации")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        5.1. Пользователь изначально пополняет баланс своего Личного кабинета, указанный платеж признается авансом за\n        Услугу верификации. Пополнение осуществляется с помощью функции безналичной оплаты, доступной в Сервисе. В\n        этом случае Исполнитель действует по поручению Верифицирующего представителя в его интересах и за его счет,\n        но от своего имени. Исполнитель является получателем платежа в качестве агента Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        5.2. После пополнения баланса Пользователя в Личном кабинете он производит оплату соответствующего Заказа.\n        После чего, в случае подтверждения Верифицирующим специалистом Заказа, он и Пользователь договариваются о дате\n        и времени Сессии. Факт оказания Услуг верификации в последующем подтверждается загрузкой результатов Сессии\n        Верифицирующим специалистом в Сервис.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("6. Порядок проведения Сессии")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        6.1. Сессия проводится строго в рамках запланированного при формировании Заказа времени, продолжительность\n        Сессии – 30 минут. Опоздания Пользователя не продлевают запланированное время Сессии. При этом Пользователь\n        вправе подойти в любое время в пределах запланированного времени Сессии, учитывая, что Верифицирующий\n        специалист строго прекращает оказание услуг в запланированное время окончания Сессии. В случае опоздания\n        Пользователя он принимает риск того, что результат оказания Услуг не будет соответствовать оговоренному при\n        формировании Заказа. При этом у Пользователя не будет права ссылаться на это.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.2. Пользователь, оформивший Заказ, обязан присутствовать по согласованному в Заказе адресу встречи с\n        Верифицирующим специалистом в согласованное время. В случае если Пользователь не явился в указанные время и\n        место до момента запланированного окончания Сессии, не предупредив об этом за 48 часов до запланированного\n        времени начала Сессии,  Пользователь считается отказавшимся от оказания ему Услуги верификации. При этом\n        денежные средства, уплаченные им при формировании Заказа, ему не возвращаются, а подлежат передаче\n        Верифицирующему специалисту за время, затраченное на организацию встречи и ожидание Пользователя в течение\n        запланированного времени Сессии.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.3. В конце дня, в который была Сессия, Верифицированный специалист должен направить Пользователю отснятый\n        материал для выбора фото, которые в последующем ретушируются в программном обеспечении для обработки\n        фотографий. Из представленного материала Пользователь выбирает фотографии, которые подлежат последующей\n        обработке Верифицирующим специалистом. Количество таких фотографий должно соответствовать количеству\n        фотографий, которые были указаны в оформленном Заказе в качестве результата Услуг верификации.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.4. Верифицирующий специалист направляет Пользователю результат оказания Услуг верификации в течение 72 часов\n        после того, как получит от Пользователя ответ, указанный в п.6.3 Условий.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [
              _vm._v("7. Принятие результатов Услуг верификации и диспуты")
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        7.1. Результат Услуг верификации считается принятым: (1) после нажатия Пользователем в Личном кабинете кнопки\n        «Принять»; (2) если в течение 7 дней с момента направления его Пользователю в Личном кабинете Пользователь не\n        направил в Личном кабинете комментариев/ команд о необходимости доработки результата услуг или(и) претензий к\n        качеству результата услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        7.2. Если Пользователя по объективным причинам не устраивает направленный Верифицирующим специалистом результат\n        Услуг верификации, он вправе отправить их на доработку, выбрав соответствующую команду в Личном кабинете,\n        указав, что именно требуется доработать. Если Верифицирующий специалист не согласен с Пользователем, он сообщает\n        это в ответ на запрос о доработке. В данном случае любой из участников процесса вправе открыть диспут, который\n        рассматривает Исполнитель как оператор Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        7.3. В случае открытия диспута в соответствии с п.7.2 Условий, Исполнитель в течение 5 рабочих дней\n        рассматривает материалы к диспуту, включая переписку между Пользователем и Верифицирующим специалистом, фото-\n        и видео-материалы, аргументы в пользу позиции каждого из участников процесса. По итогам данного рассмотрения\n        Исполнитель выносит решение по спорному вопросу, решение базируется на объективных требованиях, предъявляемых\n        к качеству оказания Услуг верификации, которые размещены на Сайте и являются составной частью Пользовательского\n        соглашения. Если результат оказания Услуг верификации соответствует вышеуказанным объективным требованиям или\n        (и) если Пользователь явился на Сессию с опозданием (что повлияло на качество результата услуг), то Исполнитель\n        по итогам диспута отказывает в удовлетворении требований Пользователя. Пользователь согласен, что в случае\n        отказа Исполнителя в удовлетворении его требований по итогам диспута, Услуги верификации считаются принятыми\n        Пользователем. Верифицирующий специалист согласен с тем, что в случае поддержки Исполнителем требований\n        Пользователя по итогам диспута, он должен без взимания дополнительных комиссий с Пользователя или (и)\n        Исполнителя учесть замечания Пользователя (даже если для этого требуется проведение дополнительной Сессии).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        7.4. Если по итогам диспута Исполнитель принял решение удовлетворить требования Пользователя, но Верифицирующий\n        специалист не мог их учесть, то Верифицирующий специалист не получает вознаграждение за соответствующую Сессию.\n        Соответствующая сумма восстанавливается в балансе Личного кабинета Пользователя.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("8. Конфиденциальные данные Клиентов")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        8.1. Сервис представляет собой информационную систему, оператором которой является Исполнитель.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.2. Принимая Условия и передавая любую информацию Сервису, Клиенты дают свое согласие на обработку\n        Исполнителем любых данных, загруженных ими в Сервис самостоятельно или другими лицами по их поручению, а также\n        данных, полученных вследствие обработки и систематизации посредством Сервиса. Стороны соглашаются, что загружая\n        какую-либо информацию в Сервис, включая персональные данные или какую-либо конфиденциальную информацию, Клиент\n        выражает согласие на ее обработку Сервисом. Стороны исходят из того, что Клиенты действуют добросовестно в\n        соответствии с требованиями законодательства. В случае, если Клиентами будет загружена в Сервис информация с\n        нарушением требований действующего законодательства или договоров Клиентов с третьими лицами, ответственность\n        за такие действия несут Клиенты.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.3. Обработка указанных данных Клиентов осуществляется в соответствии с действующим законодательством\n        Российской Федерации. Исполнитель обрабатывает данные Пользователей в целях предоставления доступа к\n        использованию Сервиса. Исполнитель принимает все необходимые меры для защиты персональных данных Клиентов от\n        неправомерного доступа, изменения, раскрытия или уничтожения. Исполнитель вправе использовать предоставленную\n        Сторонами информацию, в том числе персональные данные, в целях обеспечения соблюдения требований действующего\n        законодательства Российской Федерации (в том числе в целях предупреждения и/или пресечения незаконных и/или\n        противоправных действий Сторон), а также в целях предложения Клиентам дополнительных услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.4. Стороны пришли к соглашению, что Исполнитель и Верифицирующий специалист  вправе поручить друг другу\n        обработку персональных данных Пользователя, которые будут загружены в Сервис, для целей исполнения договора с\n        Пользователем, в соответствии со ст. 6 Федерального закона «О персональных данных».\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("9. Использование Сервиса")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        9.1. Исполнитель оставляет за собой право на свое усмотрение ограничить доступ Клиента к Сервису (или к\n        определенным функциям Сервиса, если это возможно технологически) при неоднократном нарушении Пользовательского\n        соглашения или(и) требований законодательства или(и) прав и законных интересов третьих лиц, либо применить к\n        Клиенту иные меры с целью соблюдения Пользовательского соглашения, а также требований законодательства или\n        прав и законных интересов третьих лиц.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.2. Пользователь дает Исполнителю согласие на обработку персональной информации (включая персональные данные)\n        Пользователя, на передачу персональной информации Пользователя Верифицирующему специалисту, указанному в Заказе,\n        и согласие на обработку персональной информации партнерами Исполнителя, для целей использования Сервиса,\n        оформления Заказа на Сервисе и оказания Услуг верификации.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.3. При проведении расчетов в соответствии с Пользовательским соглашением Исполнитель не является платежным\n        агентом согласно пп. 1, 4 ч. 2 ст. 1 Федерального закона от 03.06.2009 № 103-ФЗ «О деятельности по приему\n        платежей физических лиц, осуществляемой платежными агентами».\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.4. В случаях, предусмотренных действующим законодательством, кассовый чек направляется на адрес электронной\n        почты, указанный Пользователем при регистрации на Сервисе.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("10. Электронные документы")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        10.1. Пользователь соглашается, что все действия, совершенные в рамках Сервиса с помощью Логина и Пароля, в\n        том числе – по пополнению платежного баланса Личного кабинета, принятию результата услуг, подтверждению оплаты\n        услуг, считаются совершенными Пользователем.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.2. Стороны признают, что все электронные документы, сформированные, используемые и направляемые посредством\n        функций Сервиса, пока Пользователь и (или) Верифицирующий специалист являются авторизованными на Сервисе,\n        признаются подписанными Электронной подписью соответствующей Стороны. Подписание документов на Сервисе может\n        происходить в том числе посредством проставления Пользователем/Компанией специального символа (галочки)\n        напротив соответствующего документа (ссылки на документ).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.3. Стороны согласовали, что все действия и электронные документы, направленные Сторонами друг другу с\n        использованием ключа электронной подписи одной из Сторон, считаются сделанными и направленными этой Стороной.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.4. Стороны соглашаются с тем, что документы, подписанные Электронной подписью, имеют равную юридическую силу\n        с документами, составленными на бумажном носителе и подписанными собственноручной подписью. Документ,\n        подписанный Электронной подписью, порождает права и обязательства Сторон, если он соответствует условиям,\n        определенным Условиями. Свидетельством того, что документ, подписанный Электронной подписью, получен второй\n        Стороной, является отображение соответствующего электронного документа (сообщения) в интерфейсе Сервиса у\n        Исполнителя и в интерфейсе Личного кабинета у Клиента.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.5. В качестве доказательств, подтверждающих авторизации Клиента при использовании Сервиса, а также подписание\n        им Электронной подписью документов/ сообщений/ команд, переданных посредством Сервиса, являются протоколы (логи)\n        действий Клиента и происходящих в связи с этим событий, а также личная переписка между Пользователем и\n        Верифицирующим специалистом. Стороны признают, что это является допустимым доказательством при рассмотрении\n        спорных ситуаций, в том числе в ходе судебных разбирательств.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.6. Стороны обязаны соблюдать конфиденциальность в отношении ключей Электронной подписи. До момента сообщения\n        одной из Сторон о том, что ее Пароль стал известен третьим лицам, все электронные документы, исходящие от этой\n        Стороны, признаются подписанными ею.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("11. Прочие условия")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        11.1. Пользователь подтверждает, что он является дееспособным и достиг возраста, необходимого в соответствии с\n        законодательством Российской Федерации для совершения сделок, предусмотренных Пользовательским соглашением.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        11.2. Исполнитель не несет ответственность за:\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          11.2.1. Временные сбои и перерывы в работе Сервиса и/или доступность функционала, позволяющего Пользователям\n          оформлять Заказ, и вызванные ими потери информации, а также сохранность информации, правильность и\n          своевременность ее передачи и доставки.\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          11.2.2. Скорость работы Сервиса, а также за сохранность создаваемой, используемой и получаемой Пользователем\n          информации.\n        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n        11.3. Все обращения Пользователей Исполнителю должны направляться support@cnt.team.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v("\n        11.4. Информация об Исполнителе:\n        "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v("\n          ООО «Центр новаций и технологий» "),
                _c("br"),
                _vm._v("\n          ИНН 7710559692, КПП 771001001 "),
                _c("br"),
                _vm._v(
                  "\n          Место нахождения: 123056, Москва г. Грузинская Б. ул., д. 60, стр. 1 "
                ),
                _c("br"),
                _vm._v("\n          тел: 8 (495) 268 01 58 "),
                _c("br"),
                _vm._v("\n          Банковские реквизиты: "),
                _c("br"),
                _vm._v("\n          р/с 40702810300340024229 "),
                _c("br"),
                _vm._v("\n          БИК 044525311 "),
                _c("br"),
                _vm._v("\n          к/с 30101810000000000311\n        ")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n        11.5. Дата вступления в силу текущей редакции Пользовательского соглашения 01.04.2019 г.\n      "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "lm-cs-rules-modal",
          {
            ref: "modal2",
            staticClass: "lm-m-cs-rules-modal-text lm-m-cs-modals-container"
          },
          [
            _c("h2", [_vm._v("Правила верификации для фотографов")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [_vm._v("Важно прочитать и запомнить следующее:")]),
            _vm._v(" "),
            _c("section", { staticClass: "lm-m-cs-modal-aside" }, [
              _vm._v("\n        На съемку старайтесь приходить заранее "),
              _c("br"),
              _vm._v(" ~ за 15 минут\n      ")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Пунктуальность — залог успеха")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если вы опаздываете на съемку, помните о том, что вам в любом случае придется продлить съемку до изначально\n        запланированного времени. Съемочная сессия обязана длится 30 минут. Все возможные убытки, например, продление\n        аренды студии, вы в случае опоздания покрываете за свой счет. При этом человек, заказавший съемку, может\n        оставить про вас отзыв и выставить соответствующую оценку по завершении заказа.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Если же на съемку опоздал заказчик, то вы заканчиваете съемку в строго условленное время окончания съемочной\n        сессии, и при этом заказчик не имеет право обжаловать возможно плохое качество итоговых фото-/видеоматериалов.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Приходите на съемку заранее! Так вы обезопасите себя от опозданий и успеете пообщаться и подготовиться к\n        съемке в спокойной обстановке. В среднем стоит прийти за 15 минут до начала съемки, чтобы успеть правильно\n        выставить свет и без суеты настроить технику, пока заказчик сможет привести себя в порядок и переодеться.\n      "
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "lm-m-cs-modal-aside" }, [
              _vm._v("\n        Предупреждайте о "),
              _c("br"),
              _vm._v(" невозможности прийти на "),
              _c("br"),
              _vm._v(" съемку за 48 часов\n      ")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Хочу перенести! Нет, отменить!")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если у одной из сторон не получается прийти на съемку в назначенное время, каждый из вас вправе предупредить\n        об этом за 48 часов до начала съемки, указав при этом уважительную причину. После этого обе стороны могут\n        согласовать дату и время съемки заново. При отмене съемки деньги возвращаются на баланс заказчика.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Забыл, запил или забил")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если же вы вообще не явились на съемку, не предупредив об этом за 48 часов до начала съемочной сессии, то\n        модератор вправе присвоить вам штрафные санкции. Вы получите предупреждение, и если происходят повторные\n        неявки без предупреждения до двух-трех раз, вас помещают в бан и компания прекращает всякое сотрудничество\n        с вами.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Если заказчик не пришел на съемку, не предупредив об этом за 48 часов, то он считается отказавшимся от услуги\n        Верификации. При этом его оплата за заказ отчисляется вам в качестве компенсации за потраченное время и усилия\n        на организацию съемки.\n      "
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "lm-m-cs-modal-aside" }, [
              _vm._v("\n        Выбирайте материалы для "),
              _c("br"),
              _vm._v(" финальной обработки в "),
              _c("br"),
              _vm._v(" течение 72 часов\n      ")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Отфотошопь меня полностью")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Сразу после съемки либо в течение 72 часов после нее вы отправляете заказчику исходники на выбор для финальной\n        обработки (ретушь фото/ монтаж видео). Заказчик выбирает ровно то количество фотографий и видеоматериалов,\n        которое было указано при оформлении заказа. Заказчик вправе открыть диспут, если не получает от вас исходники\n        в тот же день, когда проводилась съемка.\n      "
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "lm-m-cs-modal-aside" }, [
              _vm._v("\n        Обрабатывайте выбранные "),
              _c("br"),
              _vm._v(" материалы в течение 72 "),
              _c("br"),
              _vm._v(" часов\n      ")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("Получите — распишитесь")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        С того момента, когда заказчик утвердил фото/видео на ретушь, в течение 72 часов вы должны обработать\n        выбранные им фото-/видеоматериалы и отправить их обратно. Если по истечению этого срока заказчику ничего не\n        пришло, он вправе открыть диспут.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Если вы не успеваете отправить готовые результаты в срок, предупреждайте об этом заранее и продлевайте время\n        ожидания обработки фото-/видеоматериалов.\n      "
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "lm-m-cs-modal-aside" }, [
              _vm._v(
                "\n        Открывайте диспут — это может сделать любой из участников\n      "
              )
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("А что если ему не нравится?")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если заказчику не понравились обработанные вами фото-/видеоматериалы, он вправе отправить соответствующий\n        запрос на странице заказа, указав, что именно требуется исправить. Если вы не согласны, то сообщаете об этом\n        в ответ на запрос о доработке. Любой из участников может открыть диспут, который рассмотрит модератор.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Сударь, откроем диспут!")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если заказчик просит внести доработки по тем фото-/видеоматериалам, которые вы прислали, но вы не согласны,\n        то обе стороны имеют право открыть диспут.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Слово Модератора — Закон")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Если вы подтвердили запрос на доработку и отправили вновь результаты с учетом правок заказчика, но тот просит\n        переделать всё ещё раз, а вы отказываетесь, обе стороны имеют право открыть диспут.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        По итогам диспута модератор может отказать заказчику либо принять решение о доработках, и тогда вы уже обязаны\n        их выполнить. При невыполнении своих обязательств вы не получаете свое вознаграждение, а оплата возвращается\n        на баланс заказчика.\n      "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "lm-cs-rules-modal",
          {
            ref: "modal3",
            staticClass: "lm-m-cs-rules-modal-text lm-m-cs-modals-container"
          },
          [
            _c("h2", [_vm._v("Инструкция проведения верификации")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [_vm._v("Важно прочитать и запомнить следующее:")]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Описание услуги верификации")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Верификация – услуга по созданию портфолио от платформы Linkmuse. Верификация подтверждает, что физические\n        параметры, указанные в профиле, соответствуют действительности.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Как проводить верификацию")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        • Вы получаете заказ на услугу и подтверждаете его.\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • В диалоге с талантом вы обсуждаете желаемую дату и время встречи, а также подтверждаете её в системе.\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • В день съемки вы, имея с собой необходимое оборудование, проводите фото-/видеосъемку согласно нижеуказанным\n        стандартам. После съемки вы с моделью/актером выбираете несколько фотографий и одно видео на ретушь.\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Далее вы обрабатываете фото и видео согласно рекомендациям в разделе “Ретушь и обработка\n        фото-/видеоматериалов”.\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Высылаете готовый результат таланту, вносите правки при необходимости. Результаты верификации публикуются в\n        системе только после их одобрения талантом (в то же время происходит зачисление оплаты в ваш личный кабинет)\n        "
              ),
              _c("br")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Как проводить фото-/видеосъемку")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Съемка актерского портфолио не связана никаким образом с художественной фотосъемкой. Фотографам нельзя\n        использовать при съемке актерского портрета дополнительный интерьер, игру светотени на лице актера. Лицо\n        должно быть хорошо освещено, чтобы на фотографии были отчетливо видны черты и форма лица, цвет волос и глаз.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Задача фотографа – сделать так, чтобы актер на фото выглядел максимально естественно, как в обычной жизни.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Стандарты")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        • Оплата аренды студии включена в стоимость оплаты для фотографа;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Наличие петличного микрофона для записи видеовизитки;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Осветительное оборудование для видеосъемки;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Использование белого/светло-серого фона;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Продолжительность всей съемки (фото и видео) на человека – 30 минут;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • Наличие ростомера и измерительной ленты для обмера параметров Таланта.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Ретушь и обработка фото-/видеоматериалов")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Допустима легкая цветокоррекция и ретушь таких мелких деталей, как блеск на лице, торчащие волосы, ворс\n        на одежде и прочее. Задача фотошопа в актерском портфолио – убрать все временные несовершенства на лице,\n        которые будут отвлекать от цельного восприятия изображения.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Подтверждение верификации после съемки")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        После съемки клиент утверждает материалы на ретушь.\n        Фотограф ретуширует и отправляет ему результаты, при необходимости правит их.\n        Модель/актер одобряет результаты верификации, и они публикуются в профиле и каталоге талантов.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("Выплаты после одобрения выполненной услуги")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Фотограф получает оплату за свою работу на следующих условиях:\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • по итогам первых 15 календарных дней месяца – в срок не позднее 5 рабочих дней после окончания 15-ого\n        числа месяца за все заказы, которые были утверждены и одобрены в указанный период;\n        "
              ),
              _c("br"),
              _vm._v(
                "\n        • по итогам оставшейся части календарного месяца – в срок не позднее 5 рабочих дней после окончания месяца\n        за заказы, которые были были утверждены и одобрены в этот период.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Фотограф не имеет права требовать перечисления оплаты по заказам, результат которых не был принят и одобрен\n        заказчиками в указанный срок.\n      "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "lm-cs-rules-modal",
          {
            ref: "modal4",
            staticClass: "lm-m-cs-rules-modal-text lm-m-cs-modals-container"
          },
          [
            _c("h2", [
              _vm._v("Договор в рамках сервиса «Сертифицирующий специалист»")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Общество с ограниченной ответственностью «Центр новаций и технологий», именуемое в дальнейшем «Агент/Исполнитель»,\n        в лице Генерального директора Григорьевой Т.В, действующей на основании Устава, и _________, именуем__ в дальнейшем\n        «Принципал/ Верифицирующий специалист», совместно именуемые «Стороны», а по отдельности «Сторона», заключили этот\n        Договор (далее - Договор) о нижеследующем:\n        "
              ),
              _c("br"),
              _c("br")
            ]),
            _vm._v(" "),
            _c("h3", [_vm._v("1. Термины и определения")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        В целях настоящего документа нижеприведенные термины используются в следующем значении:\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.1. Данные статистики — данные об оказании Услуг Верифицирующими специалистами, которые также могут содержать\n        сведения о количестве Заказов, стоимости Услуг, рейтинг на основе оценок Пользователей, отзывы Пользователей,\n        иные сведения, предусмотренные интерфейсом Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.2. Договор — данный договор между Сторонами.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.3. Заказ – оформленный Пользователем на Сервисе заказ Услуги на условиях, указанных в Пользовательском\n        соглашении с учетом детализированной информации в интерфейсе Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.4. Личный кабинет - это индивидуальное рабочее пространство Верифицирующего специалиста для взаимодействия с\n        Исполнителем и с Пользователями, включая подписание электронных документов. Вход в Личный кабинет осуществляется\n        путем ввода логина и пароля. Вся информация, переданная Сторонами посредством Личного кабинета, признается\n        подписанной электронной подписью.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.5. Отчет Исполнителя - отчет об оказанных Исполнителем услугах, который формируется автоматически в Личном\n        кабинете Принципала и обновляется после оплаты Пользователями каждого Заказа.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.6. Пользователь - лицо, использующее Сервис на условиях, предусмотренных в Пользовательском соглашении, с\n        целью осуществить Заказ.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.7. Пользовательское соглашение – документ, размещенный в сети Интернет по адресу:________. Заключается между\n        Пользователем и Агентом (в части положений Пользовательского соглашения, регулирующих порядок оказания Услуг,\n        Агент действует от своего имени, но в интересах и за счет Принципала. Принципал обязан при оказании Услуг и\n        взаимодействии с Пользователем соблюдать порядок, описанный в Пользовательском соглашении.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.8. Сервис - веб-сайт, размещенный в сети Интернет по адресу: ________, а также прикладные программы (в том\n        числе приложения для мобильных устройств) к нему, предоставляющие Пользователям и Верифицирующим специалистам\n        возможность осуществить Заказ и оплату Услуги на условиях, предусмотренных в Пользовательском соглашении.\n        Сервис доступен Верифицирующему специалисту после авторизации с использованием логина и пароля, которые\n        задаются им в момент его регистрации на Сервисе.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.9. Верифицирующий специалист – лицо, осуществляющее фото- и видео- съемку Пользователей в соответствии с\n        Пользовательским соглашением.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.10. Сессия/ Процесс верификации – процесс оказания Услуг (фотографирования или видеозаписи Пользователя с\n        соблюдением Верифиицирующим специалистом и Пользователем всех требований, предусмотренных интерфейсом Сервиса\n        и(или) Пользовательским соглашением). По окончании Сессии создается серия фотографий и(или) видеозаписей\n        (в зависимости от выбранного вида Услуги), объединенных общей тематикой, а также обмер биометрических\n        параметров (сведения, которые характеризуют физиологические и биологические особенности человека, на основании\n        которых можно установить его личность) с использованием шкалы замеров.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.11. Страница Верифицирующего специалиста – персональная страница Верифицирующего специалиста на Сервисе,\n        содержащая персональные данные Верифицирующего специалиста, портфолио с его работами, а также описание типов\n        услуг, которые он может оказать Пользователям (например: модельная сьемка, детская съемка), геолокацию, по\n        которой он может оказывать услуги (для каждой услуги индивидуально).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.12. Услуги – услуги по фото- и видео- съемке, фактически оказываемые Пользователям Верифицирующим\n        специалистом на основании Пользовательского соглашения. Возможные виды Услуг определяются интерфейсом Сервиса\n        и(или) Пользовательским соглашением.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        1.13. В Договоре могут быть использованы термины, не определенные в данном разделе. В этом случае толкование\n        такого термина производится в соответствии с текстом Договора. В случае невозможности однозначного толкования\n        термина в тексте Договора следует руководствоваться толкованием термина, определенным на Сервисе или в\n        контексте интерфейса Сервиса.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("2. Предмет Договора")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        2.1. Договор по своему характеру является смешанным: агентским договором и договором оказания услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.2. Агент обязуется от своего имени, за счет и в интересах Принципала заключать договоры на оказание Услуг с\n        Пользователями, а также принимать исполнение по таким договорам. Непосредственное оказание Услуг Пользователям\n        осуществляется Верифицирующим специалистом в рамках Сессий.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.3. Исполнитель обязуется предоставить Сервис для взаимодействия Потребителя и Верифицирующего специалиста, в\n        том числе предоставить возможности (1) согласования Сессий (согласования времени, даты, объёма услуг\n        Верифицирующего специалиста посредством сообщения через Личный кабинет на Сайте), (2) оформления Заказа, (3)\n        оплаты Сессий. Использование Принципалом Сервиса возможно лишь на условиях «как есть», т.е. согласно\n        предоставленному Исполнителем в любой момент в течение срока действия Договора комплексу функционала,\n        информационного наполнения, интерфейса, дизайна, иных составляющих и условий использования Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.4. Верифицирующий специалист обязуется оказать Услуги в соответствии с Заказом, с учётом требований и\n        критериев, установленных в Пользовательском соглашении. Время и место проведения Сессии согласовывается\n        Пользователем и Верифицирующим специалистом на Сервисе. Конкретные кадры, моменты, места и ракурсы, а равно и\n        стиль Сессии выбираются на усмотрение Пользователя. Не допускается вмешательство третьих лиц в процесс съемки.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        2.5. Верифицирующий специалист должен передать результат Сессии Пользователю путём его размещения на Сервисе в\n        течение 24 часов с момента окончания Сессии.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("3. Условия оказания Услуг")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        3.1. Обязательным условием взаимоотношений Сторон является принятие и соблюдение Верифицирующим специалистом\n        положений  Пользовательского соглашения. Принятием (акцептом) Пользовательского соглашения Верифицирующим\n        специалистом признается создание им Страницы Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.2. По итогам оказания Услуг Верифицирующий специалист должен произвести запись на носитель результата Сессии,\n        имеющего следующие характеристики:\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          3.2.1. для фотографий:\n          а) размер по длинной стороне не менее 3500 точек,\n          б) разрешение не менее 300 точек на дюйм,\n          г) глубина цвета 8 бит,\n          д) формат файла изображения JPEG/TIFF,\n          е) шумы – минимально допустимые для освещения – 1600-3200 ISO,\n          ж) отсутствие хроматических аберраций,\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          3.2.2. для видео:\n          а) продолжительность 3-5 мин,\n          б) формат файла HD/FullHD/UHD,\n          в) разрешение не менее 1280 х 720 пикселей или 1920 х 1080 пикселей,\n          г) частота кадров – 24-30 кадрам/c.,\n          д) глубина цвета - 8 бит (256 цветов), 16 бит (65 536 цветов) и 24 бита (16 777 216 цветов),\n          е) битрейт (ширина видеопотока) – 5-10 Мбит/с.,\n          ж) стандарты сжатия – DV/MPEG\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        3.3. Исполнитель вправе требовать от Верифицирующего специалиста внести изменения в информацию/материалы на\n        Странице Верифицирующего специалиста, направив соответствующее уведомление по электронной почте с указанием на\n        суть изменений. Причинами такого требования могут быть, включая, но не ограничиваясь, следующие обстоятельства:\n        подозрение, что размещенные материалы нарушают права третьих лиц на интеллектуальную собственность; обращения\n        Пользователей; подозрение, что размещенные материалы нарушают законодательство РФ, не соответствуют\n        общепринятым критериям нравственности, не соответствуют внутренней политике Сервиса.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.4. Верифицирующий специалист самостоятельно и в полном объеме несет предусмотренную законодательством\n        ответственность как лицо, осуществившее приведение информации в готовую для распространения форму и гарантирует\n        соответствие материалов на Странице Верифицирующего специалиста всем требованиям действующего законодательства.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.5. Верифицирующий специалист самостоятельно несет ответственность за сохранность и конфиденциальность\n        регистрационных данных (логин и пароль) для доступа к Сервису. Все действия, совершенные в Сервисе с\n        использованием логина и пароля Верифицирующего специалиста, признаются действиями Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.6. Если Пользователь, оформивший Заказ, отказался от принятия Услуг в связи с ненадлежащим качеством и/или в\n        связи с несоответствием Услуг Заказу, оформленному Пользователем, по указанию Исполнителя возможны следующие\n        последствия: (1)  Верифицирующий специалист должен обеспечить предоставление Пользователю Услуг надлежащего\n        качества и соответствующего Заказу, оформленному Пользователем, в рамках стоимости первоначального Заказа; (2)\n        Верифицирующий специалист не получает вознаграждения за Сессию, проведенную в рамках оказания соответствующий\n        Услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.7. Факт наличия или отсутствия вины Верифицирующего специалиста в случаях, предусмотренных выше,\n        устанавливается Исполнителем самостоятельно с учетом информации, полученной от Пользователя, от Верифицирующего\n        специалиста, а также иной имеющейся информации. При этом решение Исполнителя при установлении указанного факта\n        имеет приоритетное значение, и является обязательным для Верифицирующего специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.8. В случае если результат Услуг по определенному Заказу не принят Пользователем, Верифицирующий специалист\n        обязан провести доработку в течение 3 рабочих дней с момента получения от Пользователя возражений, претензий\n        относительно результата Услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        3.9. Правообладателем фото- и видео- материалов в результате оказания Услуг является Пользователь.\n        Верифицирующий специалист признает и предоставляет в пользу Пользователя полные и исключительные права на\n        фотографии, иллюстрации, видео или иные изображения, содержащие изображения Пользователя (равно и изображения\n        третьих лиц, участвующих так или иначе в фотосъемке), а также аудио и текстовую информацию, связанную с этими\n        изображениями, которые созданы Верифицированным специалистом.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        За Верифицированным специалистом сохраняется авторское право и право на воспроизведение и демонстрацию\n        результатов Услуг, использование их в портфолио, опубликованных в открытом доступе.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        Исполнителю переходят права на воспроизведение и демонстрацию результатов Услуг в рамках функционирования\n        Сервиса и рекламы Сервиса.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("4. Условия оплаты Заказов")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        4.1. Агент поручению Принципала, указанное в данном разделе, обязуется от своего имени, но за счет Принципала\n        принимать безналичные платежи Пользователей за Услуги (суммы оплаты Пользователей за Услуги, оказанные\n        Верифицирующим специалистом). Для чего Агент обеспечивает функционирование онлайн-кассы для оплаты Услуг.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.2. Сумма, принимаемая от Пользователей в счет оплаты Услуг, определяется в Заказе и взимается без НДС,\n        поскольку _____ (выбрать в зависимости от статуса фотографа: в отношения с Пользователями Верифицированный\n        специалист вступает лично как самозанятое физическое лицо/  Верифицированный специалист применяет упрощенную\n        систему налогообложения).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.3. Суммы оплаты, полученные Агентом от Пользователей, подлежат перечислению Принципалу за вычетом: (1) сумм,\n        возвращенных Агентом Пользователям; (2) вознаграждения Агента по Договору. Перечисление указанных денежных\n        средств осуществляется Агентом на банковский счет Принципала, в срок, не превышающий ___ календарных дней с\n        момента получения Агентом от Пользователей указанных сумм.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.4. Суммы, полученные Агентом от Пользователей, перечисляются Принципалу по итогам каждого календарного месяца\n        в срок не позднее 5 рабочих дней после окончания месяца, в котором соответствующие им Сессии были утверждены\n        Пользователями. Верифицирующий специалист не вправе требовать перечисления оплаты по Заказам, результат Услуг\n        по которым не принят Пользователями.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.5. Срок действия поручения, предусмотренного этим разделом, равен сроку оказания услуг по Договору.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.6. При проведении расчетов в соответствии с данным разделом Договора Исполнитель не является платежным\n        агентом согласно Федерального закона от 03.06.2009 № 103-ФЗ «О деятельности по приему платежей физических лиц,\n        осуществляемой платежными агентами». Отношения Агента и Принципала в части исполнения поручения регулируются\n        главой 52 Гражданского кодекса Российской Федерации «Агентирование».\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.7. В случае получения Агентом обращений Пользователей в любой форме об их несогласии с фактом и/или суммой\n        безналичной оплаты, произведенной в пользу Принципала при оформлении Заказа, Принципал уполномочивает Агента\n        рассмотреть соответствующее обращение Пользователя и принять решение о возврате Пользователю суммы\n        произведенной оплаты. При рассмотрении обращений Пользователей Агент принимает во внимание сообщенные\n        Пользователем сведения; данные Сервиса; информацию, предоставленную Принципалом по запросу Агента в связи с\n        рассмотрением обращения Пользователя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        На основании указанной информации Агент по своему усмотрению принимает решение по обращению Пользователя, в\n        том числе о полном или частичном возврате Пользователю суммы произведенной оплаты, отказе от возврата и/или\n        иное решение по существу обращения Пользователя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        4.8. В случае принятия Агентом решения о полном или частичном возврате Пользователю суммы оплаты, произведенной\n        в пользу Принципала с использованием Сервиса, сумма, подлежащая возврату Пользователю, подлежит возмещению\n        Агенту Принципалом (в частности, может быть удержана и/или подлежит оплате по счету).\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("5. Права и обязанности сторон")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v("\n        5.1. Исполнитель обязуется:\n        "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          5.1.1. Обеспечивать надлежащее функционирование Сервиса;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.1.2. Обеспечивать принятие исполнений от Пользователей за Услуги, оказанные Сертифицированным\n          специалистом.\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v("\n        5.2. Исполнитель имеет право:\n        "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          5.2.1. Временно приостановить работу Сервиса по техническим, технологическим или иным причинам;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.2. Прекратить работу Сервиса, оповестив Верифицирующего специалиста в Личном кабинете или по электронной\n          почте не позднее, чем за 5 календарных дней до прекращения Работы Сервиса;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.3. Приостановить оказание услуг по Договору в любом из случаев:\n        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-72" }, [
                _vm._v(
                  "\n          5.2.3.1. неоднократного нарушения Верифицирующим специалистом условий Договора и(или) Пользовательского\n          соглашения;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.3.2. необеспечения предоставления Пользователю Услуги надлежащего качества и соответствующей Заказу,\n          оформленному Пользователем;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.3.3. Принципал имеет задолженность перед Агентом;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.3.4. Получение негативных отзывов о Принципале от Пользователей.\n        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          5.2.4. Сопровождать Страницу Сертифицированного специалиста Данными статистики, дополнительными\n          информационными материалами Сервиса.\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.2.5. Осуществлять любые действия (контрольные мероприятия) по проверке качества оказания Услуг.\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v("5.3. Верифицированный специалист обязуется:\n        "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          5.3.1. Указывать на Странице Верифицированного специалиста достоверную информацию и фото-, виде- материалы\n          своего авторства;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.3.2. Сохранять в тайне и не предоставлять третьим лицам логин и пароль от Личного кабинета;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.3.3. Соблюдать все требования к Сессии, Заказу, результату оказания Услуг, предусмотренному\n          Пользовательским соглашением. В противном случае Исполнитель вправе требовать от Принципала возмещения всех\n          понесенных убытков в связи с этим;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.3.4. Своевременно информировать Исполнителя о своем статусе в качестве налогоплательщика, применяемых\n          режимах налогообложения. В противном случае Исполнитель вправе требовать с Принципала возмещения убытков,\n          понесенных первым в случае получения им предписаний от налоговых органов;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.3.5. Самостоятельно уплачивать все налоги и сборы;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.3.6. Без предварительного письменного согласования с Исполнителем не распространять вместе с Услугами\n          какие-либо рекламные материалы (как собственные, так и третьих лиц).\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v("5.4. Верифицированный специалист имеет право:\n        "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("section", { staticClass: "padding-left-36" }, [
                _vm._v(
                  "\n          5.4.1. На доступ к Личному кабинету и формирование Страницы Верифицированного специалиста;\n          "
                ),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n          5.4.2. В случае отсутствия неисполненных Заказов отказаться от Страницы Верифицированного специалиста и\n          использования Сервиса, предупредив Исполнителя не менее, чем за 5 рабочих дней до удаления Страницы. При\n          наличии неисполненных Заказов Верифицированный специалист должен их исполнить.\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("6. Вознаграждение Исполнителя, отчетность")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        6.1. Вознаграждение, получаемое Исполнителем за услуги, оказанные по Договору, составляет ____ за один\n        оплаченный Заказ на Услуги Верифицированного специалиста (в том числе НДС).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.2. Информация по услугам, оказанным Исполнителем, отображается в Личном кабинете и становится доступной\n        сразу после оплаты соответствующего Заказа.  Данная информация по выполненным Заявкам является Отчетом\n        Исполнителя. Информация по каждому оплаченному Заказу является отдельной строкой Отчета Исполнителя. С\n        момента размещения соответствующей редакции Отчета Исполнителя в Личном кабинете Верифицирующего специалиста,\n        такой отчет считается подписанным со стороны Исполнителя.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.3. Отчет считается подписанным Принципалом по прошествии 24 часов с момента его отображения в его Личном\n        кабинете. После этого услуги, оказанные по Договору и указанные в соответствующей редакции Отчета Исполнителя,\n        считаются принятыми Принципалом, дополнительный обмен Сторонами актами о приемке оказанных услуг не требуется.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.4. В случае несогласия с Отчетом Исполнителя Принципал должен посредством Личного кабинета или электронной\n        почты, указанной в Договоре, предоставить Исполнителю мотивированное несогласие с отчетом в течение 24 часов\n        с момента его размещения в Личном кабинете.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        6.5. Вознаграждение Исполнителя уплачивается по итогам календарного месяца. Вознаграждение рассчитывается\n        Исполнителем самостоятельно и удерживается им из сумм, полученных от Пользователей в счет оплаты Услуг\n        Верифицированного специалиста.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("7. Срок действия Договора")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        7.1. Договор вступает в силу с даты подписания и действует в течение года. В случае если ни одна из Сторон за\n        30 дней в письменной форме не заявит о намерении расторгнуть Договор, то он пролонгируется на очередной год.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        7.2. Любая из Сторон вправе расторгнуть Договор в одностороннем порядке, уведомив другую в письменной форме не\n        позднее, чем за 30 дней до планируемой даты расторжения.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("8. Гарантии и согласия")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        8.1. Принципал указывает достоверные данные, в том числе персональные данные на Странице Верифицированного\n        специалиста.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.2. Принципал дает согласие на обработку Исполнителем персональных данных, указанных первым при регистрации\n        на Сервисе и/или при заключении Договора, в том числе на совершение Исполнителем действий, предусмотренных\n        п. 3 ст. 3 Федерального закона от 27.07.2006 года № 152-ФЗ «О персональных данных», любыми способами, для\n        целей заключения и исполнения Договора.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.3. Принципал: а) полностью ознакомился с условиями Пользовательского соглашения, б) согласен с условиями\n        Пользовательского соглашения.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        8.4. Размещение (воспроизведение, показ), иное использование Исполнителем материалов и информации, загружаемой\n        в Сервис  не нарушают и не влекут за собой нарушение каких-либо прав третьих лиц и действующего законодательства.\n        В случае получения Исполнителем претензий от третьих лиц в связи с нарушением их исключительных прав,\n        ответственность по таким претензиям несет Принципал, возмещая Агенту все понесенные убытки.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [
              _vm._v("9. Ответственность и ограничение ответственности")
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        9.1. За нарушение условий Договора Стороны несут ответственность, установленную Договором и/или действующим\n        законодательством РФ.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.2. Исполнитель ни при каких обстоятельствах не несет ответственности по Договору за какие-либо косвенные\n        убытки и/или упущенную выгоду Принципала и/или третьих сторон вне зависимости от того, мог Исполнитель\n        предвидеть возможность таких убытков или нет.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.3. Совокупный размер ответственности Исполнителя по Договору, включая размер штрафных санкций (пеней,\n        неустоек) и/или возмещаемых убытков, по любому иску или претензии в отношении Договора или его исполнения,\n        ограничивается 10 % стоимости услуг Исполнителя Принципалу по Договору за календарный месяц, в котором\n        допущено нарушение (либо в котором было завершено длящееся нарушение).\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.4. Принципал несет ответственность в полном объеме за соблюдение всех требований законодательства, в том\n        числе законодательства о рекламе, об интеллектуальной собственности, но не ограничиваясь перечисленным, в\n        отношении содержания и формы материалов или информации, размещенных на Сервисе.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        9.5. В случае отказа Пользователя от принятия Услуг в связи с ненадлежащим качеством Услуг, несоответствием\n        Услуг Заказу, и/или иными претензиями Пользователя к Услугам, Исполнитель имеет право потребовать от\n        Верифицирующего специалиста возмещения сумму, которую по соответствующему Заказу оплатил Пользователь. В\n        указанном случае Верифицирующий специалист в течение 5 дней с даты направления соответствующего требования\n        Исполнителем обязан выплатить Исполнителю компенсацию суммы Заказа и неустойку в размере 10% от суммы Заказа.\n        Исполнитель вправе удержать соответствующие суммы из суммы денежных средств, полученных им в результате\n        принятия платежей Пользователей по другим Заказам.\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-cs-line" }),
            _vm._v(" "),
            _c("h3", [_vm._v("10. Прочие условия")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        10.1. Все споры и разногласия, которые могут возникнуть в связи с исполнением, расторжением или признанием\n        недействительным Договора, Стороны будут стремиться решить путем переговоров. Если Стороны не придут к\n        соглашению по возникшим претензиям и/или разногласиям, спор подлежит передаче на рассмотрение в Арбитражный\n        суд города Москвы.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.2. Любые уведомления по Договору могут направляться одной Стороной другой Стороне: 1) по электронной почте,\n        официальный адрес со стороны Исполнителя: _________, официальный адрес со стороны Верифицированного\n        специалиста: _________; 2) почтой с уведомлением о вручении или курьерской службой с подтверждением доставки.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.3. Настоящим Стороны подтверждают, что при исполнении (изменении, дополнении, прекращении) Договора, а\n        также при ведении переписки по указанным вопросам, допускается использование электронной подписи Сторон в\n        Личном кабинете. Стороны признают, что учетные данные Принципала в его Личном кабинете являются аналогом\n        собственноручной подписи, имеют юридическую силу, равную документам, подписанным собственноручной подписью, и\n        являются допустимым доказательство в случае наличия спора между Исполнителем и Принципалом.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.4. Стороны признают, что для целей Договора, любая электронная переписка Сторон, признается юридически\n        значимой и является надлежащим доказательством в судебном процессе.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.5. Стороны согласились, что первичные закрывающие документы в рамках Договора также могут быть подписаны с\n        использованием электронной подписи и (или) факсимильного воспроизведения подписи в соответствии с положениями\n        ст. 160 Гражданского кодекса Российской Федерации.\n        "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                "\n        10.6. Принципал не вправе передавать свои права по Договору какой-либо третьей стороне без письменного\n        согласия Исполнителя. Исполнитель вправе передавать права и обязанности по Договору без письменного согласия\n        Принципала.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [_vm._v("11. Реквизиты")]),
            _vm._v(" "),
            _c("section", { staticClass: "padding-bottom-8" }),
            _vm._v(" "),
            _c("p", [
              _vm._v("11.1. "),
              _c("span", { staticClass: "color_support-1" }, [
                _vm._v("“заполнить”")
              ])
            ])
          ]
        )
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
    return _c("div", { staticClass: "lm-m-cs-wrapper-icon" }, [
      _c("img", {
        staticClass: "lm-m-cs-icon-arrow",
        attrs: { src: "/dist/img/icons/svg/lm-arrow-link.svg", alt: "icon" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-wrapper-icon" }, [
      _c("img", {
        staticClass: "lm-m-cs-icon-arrow",
        attrs: { src: "/dist/img/icons/svg/lm-arrow-link.svg", alt: "icon" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-wrapper-icon" }, [
      _c("img", {
        staticClass: "lm-m-cs-icon-arrow",
        attrs: { src: "/dist/img/icons/svg/lm-arrow-link.svg", alt: "icon" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-wrapper-icon" }, [
      _c("img", {
        staticClass: "lm-m-cs-icon-arrow",
        attrs: { src: "/dist/img/icons/svg/lm-arrow-link.svg", alt: "icon" }
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
    require("vue-hot-reload-api")      .rerender("data-v-e7553424", esExports)
  }
}

/***/ }),

/***/ 2029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "lm-m-register-steps" }, [
        _c("div", { style: { width: _vm.progress } })
      ]),
      _vm._v(" "),
      _vm.state.is.services
        ? [
            _c("div", { staticClass: "lm-m-cs-register" }, [
              _c(
                "div",
                {
                  staticClass: "lm-m-cs-register-wrap",
                  staticStyle: { width: "272px" }
                },
                [
                  _vm.services.length === 0
                    ? [
                        _c("div", { staticClass: "title" }, [
                          _vm._v(
                            "К сожалению, услуги не доступны в Вашем регионе."
                          )
                        ])
                      ]
                    : _vm.services.length
                    ? [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("Выбор услуг")
                        ]),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.verrors.has("services"),
                                expression: "verrors.has('services')"
                              }
                            ],
                            staticClass: "lm-m-service-wrap-input-error",
                            attrs: { id: "service-input-error" }
                          },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.verrors.first("services")) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "lm-vs-landing-talent" }, [
                          _c(
                            "div",
                            {
                              staticClass: "lm-vs-landing-talent-line",
                              staticStyle: { padding: "0" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "lm-vs-landing-talent-service-wrap"
                                },
                                _vm._l(_vm.services, function(service) {
                                  return _c(
                                    "div",
                                    {
                                      key: service.id,
                                      staticClass:
                                        "lm-vs-landing-talent-service-item",
                                      staticStyle: { padding: "0 0 24px" }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: service.cover,
                                          alt: service.name
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "item-title" },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm._f("truncate")(
                                                  service.name,
                                                  20
                                                )
                                              ) +
                                              "\n\n                    "
                                          ),
                                          _vm.fields.services.includes(
                                            service.id
                                          ) === true
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "lm-m-rectangle-checked-service"
                                                  },
                                                  [
                                                    _c(
                                                      "svg",
                                                      {
                                                        attrs: {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          width: "8",
                                                          height: "8",
                                                          fill: "none",
                                                          viewBox: "0 0 8 8"
                                                        }
                                                      },
                                                      [
                                                        _c("path", {
                                                          attrs: {
                                                            fill: "#0063DA",
                                                            d:
                                                              "M2.442 5.77L7.272 1 8 1.718 2.805 6.846A.474.474 0 0 1 2.442 7a.474.474 0 0 1-.364-.154L0 4.795l.727-.718 1.715 1.692z"
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
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "desc" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("truncate")(
                                              service.description,
                                              100
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "item-footer" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.fields.services,
                                                expression: "fields.services"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticStyle: { display: "none" },
                                            attrs: {
                                              type: "checkbox",
                                              id: "service_" + service.id,
                                              name: "services",
                                              "data-vv-as": "выбор услуг"
                                            },
                                            domProps: {
                                              value: service.id,
                                              checked: Array.isArray(
                                                _vm.fields.services
                                              )
                                                ? _vm._i(
                                                    _vm.fields.services,
                                                    service.id
                                                  ) > -1
                                                : _vm.fields.services
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  var $$a = _vm.fields.services,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = service.id,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.fields,
                                                          "services",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.fields,
                                                          "services",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.fields,
                                                      "services",
                                                      $$c
                                                    )
                                                  }
                                                },
                                                _vm._handleBlurUpdateField
                                              ]
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              class: [
                                                {
                                                  "lm-outline-button":
                                                    _vm.fields.services.includes(
                                                      service.id
                                                    ) === false,
                                                  "lm-primary-button":
                                                    _vm.fields.services.includes(
                                                      service.id
                                                    ) === true
                                                },
                                                "middle",
                                                "service-selected-btn"
                                              ],
                                              attrs: {
                                                for: "service_" + service.id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.fields.services.includes(
                                                      service.id
                                                    ) === true
                                                      ? "Выбрано"
                                                      : "Выбрать"
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("span", { staticClass: "price" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("currency")(
                                                  service.price,
                                                  "₽"
                                                )
                                              )
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
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
                { staticClass: "lm-action-buttons" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "lm-link-button",
                      attrs: { to: { name: "certifying.customer.index" } }
                    },
                    [_vm._v("назад")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "lm-primary-button",
                        "middle",
                        { disabled: _vm.fields.services.length === 0 }
                      ],
                      on: { click: _vm._handleClickNextRequireOnRole }
                    },
                    [_vm._v("Продолжить")]
                  )
                ],
                1
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.state.is.rules
        ? [
            _c(
              "div",
              { staticClass: "lm-m-cs-register" },
              [
                _c("lm-rules", {
                  staticClass: "lm-m-cs-register-wrap",
                  model: {
                    value: _vm.acceptRules,
                    callback: function($$v) {
                      _vm.acceptRules = $$v
                    },
                    expression: "acceptRules"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "lm-action-buttons" }, [
                  _c(
                    "a",
                    {
                      staticClass: "lm-link-button",
                      attrs: { href: "javascript:void(0)" },
                      on: { click: _vm._handleClickBackRequireOnRole }
                    },
                    [_vm._v("назад")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      class: [
                        "lm-primary-button",
                        "middle",
                        { disabled: !_vm.acceptRules }
                      ],
                      on: { click: _vm._handleClickNextRequireOnRole }
                    },
                    [_vm._v("Продолжить")]
                  )
                ])
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.state.is.user
        ? [
            _c("div", { staticClass: "lm-m-cs-register" }, [
              _c(
                "div",
                { staticClass: "lm-m-cs-register-wrap" },
                [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Заполните данные о себе")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "desc" }, [
                    _vm._v(
                      "Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "lm-radio-buttons" }, [
                    _c("span", [_vm._v("Вы:")]),
                    _vm._v(" "),
                    _c("ul", [
                      _c("li", [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields[_vm.KEYS["type"]],
                              expression: "fields[KEYS['type']]"
                            }
                          ],
                          key: _vm.KEYS["type"],
                          attrs: {
                            type: "radio",
                            id: "individual_entrepreneur",
                            name: _vm.normalizeDotsToArrow(_vm.KEYS["type"])
                          },
                          domProps: {
                            value: _vm.INDIVIDUAL_ENTREPRENEUR,
                            checked: _vm._q(
                              _vm.fields[_vm.KEYS["type"]],
                              _vm.INDIVIDUAL_ENTREPRENEUR
                            )
                          },
                          on: {
                            change: [
                              function($event) {
                                return _vm.$set(
                                  _vm.fields,
                                  _vm.KEYS["type"],
                                  _vm.INDIVIDUAL_ENTREPRENEUR
                                )
                              },
                              _vm._handleBlurUpdateField
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          { attrs: { for: "individual_entrepreneur" } },
                          [_vm._v("ИП")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields[_vm.KEYS["type"]],
                              expression: "fields[KEYS['type']]"
                            }
                          ],
                          key: _vm.KEYS["type"],
                          attrs: {
                            type: "radio",
                            id: "entity",
                            name: _vm.normalizeDotsToArrow(_vm.KEYS["type"])
                          },
                          domProps: {
                            value: _vm.ENTITY,
                            checked: _vm._q(
                              _vm.fields[_vm.KEYS["type"]],
                              _vm.ENTITY
                            )
                          },
                          on: {
                            change: [
                              function($event) {
                                return _vm.$set(
                                  _vm.fields,
                                  _vm.KEYS["type"],
                                  _vm.ENTITY
                                )
                              },
                              _vm._handleBlurUpdateField
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "entity" } }, [
                          _vm._v("Юридическое лицо")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "separator" }),
                  _vm._v(" "),
                  _vm.isIndividualEntrepreneur
                    ? [
                        _c(
                          "div",
                          {
                            class: [
                              "lm-input-wrap",
                              {
                                error: _vm.verrors.has(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["fullname"])
                                )
                              }
                            ]
                          },
                          [
                            _c(
                              "label",
                              { attrs: { for: _vm.KEYS["fullname"] } },
                              [_vm._v("ФИО")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fields[_vm.KEYS["fullname"]],
                                  expression: "fields[KEYS['fullname']]"
                                }
                              ],
                              key: _vm.KEYS["fullname"],
                              class: {
                                "lm-input": true,
                                error: _vm.verrors.has(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["fullname"])
                                )
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Как вас зовут?",
                                id: _vm.KEYS["fullname"],
                                name: _vm.normalizeDotsToArrow(
                                  _vm.KEYS["fullname"]
                                )
                              },
                              domProps: {
                                value: _vm.fields[_vm.KEYS["fullname"]]
                              },
                              on: {
                                blur: _vm._handleBlurUpdateField,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.fields,
                                    _vm.KEYS["fullname"],
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.verrors.has(
                              _vm.normalizeDotsToArrow(_vm.KEYS["fullname"])
                            )
                              ? _c("span", { staticClass: "lm-input-error" }, [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          _vm.normalizeDotsToArrow(
                                            _vm.KEYS["fullname"]
                                          )
                                        )
                                      ) +
                                      "\n            "
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEntity
                    ? [
                        _c(
                          "div",
                          {
                            class: [
                              "lm-input-wrap",
                              {
                                error: _vm.verrors.has(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["company_name"]
                                  )
                                )
                              }
                            ]
                          },
                          [
                            _c(
                              "label",
                              { attrs: { for: _vm.KEYS["company_name"] } },
                              [_vm._v("Название организации")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fields[_vm.KEYS["company_name"]],
                                  expression: "fields[KEYS['company_name']]"
                                }
                              ],
                              key: _vm.KEYS["company_name"],
                              class: {
                                "lm-input": true,
                                error: _vm.verrors.has(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["company_name"]
                                  )
                                )
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Название",
                                id: _vm.KEYS["company_name"],
                                name: _vm.normalizeDotsToArrow(
                                  _vm.KEYS["company_name"]
                                )
                              },
                              domProps: {
                                value: _vm.fields[_vm.KEYS["company_name"]]
                              },
                              on: {
                                blur: _vm._handleBlurUpdateField,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.fields,
                                    _vm.KEYS["company_name"],
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.verrors.has(
                              _vm.normalizeDotsToArrow(_vm.KEYS["company_name"])
                            )
                              ? _c("span", { staticClass: "lm-input-error" }, [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm.verrors.first(
                                          _vm.normalizeDotsToArrow(
                                            _vm.KEYS["company_name"]
                                          )
                                        )
                                      ) +
                                      "\n            "
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: [
                        "lm-input-wrap",
                        {
                          error: _vm.verrors.has(
                            _vm.normalizeDotsToArrow(_vm.KEYS["phone"])
                          )
                        }
                      ]
                    },
                    [
                      _c("label", { attrs: { for: _vm.KEYS["phone"] } }, [
                        _vm._v("Телефон")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-phone", rawName: "v-mask-phone" },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|phone",
                            expression: "'required|phone'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields[_vm.KEYS["phone"]],
                            expression: "fields[KEYS['phone']]"
                          }
                        ],
                        key: _vm.KEYS["phone"],
                        class: {
                          "lm-input": true,
                          error: _vm.verrors.has(
                            _vm.normalizeDotsToArrow(_vm.KEYS["phone"])
                          )
                        },
                        attrs: {
                          type: "text",
                          placeholder: "+7 (000) 000-00-00",
                          id: _vm.KEYS["phone"],
                          name: _vm.normalizeDotsToArrow(_vm.KEYS["phone"])
                        },
                        domProps: { value: _vm.fields[_vm.KEYS["phone"]] },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              _vm.KEYS["phone"],
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has(
                        _vm.normalizeDotsToArrow(_vm.KEYS["phone"])
                      )
                        ? _c("span", { staticClass: "lm-input-error" }, [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.verrors.first(
                                    _vm.normalizeDotsToArrow(_vm.KEYS["phone"])
                                  )
                                ) +
                                "\n          "
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "lm-action-buttons" }, [
                _c(
                  "a",
                  {
                    staticClass: "lm-link-button",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm._handleClickBackRequireOnRole }
                  },
                  [_vm._v("назад")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "lm-primary-button middle",
                    on: { click: _vm._handleClickNextRequireOnRole }
                  },
                  [_vm._v("Продолжить")]
                )
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.state.is.bank_account
        ? [
            _c("div", { staticClass: "lm-m-cs-register" }, [
              _c("div", { staticClass: "lm-m-cs-register-wrap" }, [
                _c("div", { staticClass: "title" }, [
                  _vm._v("Ввод данных о счете")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "desc" }, [
                  _vm._v(
                    "Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["itn"])
                        )
                      }
                    ]
                  },
                  [
                    _c("label", { attrs: { for: _vm.KEYS["itn"] } }, [
                      _vm._v("Ваш ИНН:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-static",
                          rawName: "v-mask-static",
                          value: "9{12}",
                          expression: "'9{12}'"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|digits:12",
                          expression: "'required|digits:12'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["itn"]],
                          expression: "fields[KEYS['itn']]"
                        }
                      ],
                      key: _vm.KEYS["itn"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["itn"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "0000 0000 0000",
                        id: _vm.KEYS["itn"],
                        name: _vm.normalizeDotsToArrow(_vm.KEYS["itn"])
                      },
                      domProps: { value: _vm.fields[_vm.KEYS["itn"]] },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["itn"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["itn"]))
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["itn"])
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["iec"])
                        )
                      }
                    ]
                  },
                  [
                    _c("label", { attrs: { for: _vm.KEYS["iec"] } }, [
                      _vm._v("КПП:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-static",
                          rawName: "v-mask-static",
                          value: "9{23}",
                          expression: "'9{23}'"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "digits:23",
                          expression: "'digits:23'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["iec"]],
                          expression: "fields[KEYS['iec']]"
                        }
                      ],
                      key: _vm.KEYS["iec"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["iec"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "0000000000 / 000000000",
                        id: _vm.KEYS["iec"],
                        name: _vm.normalizeDotsToArrow(_vm.KEYS["iec"])
                      },
                      domProps: { value: _vm.fields[_vm.KEYS["iec"]] },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["iec"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["iec"]))
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["iec"])
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "separator" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["bank_recipient"])
                        )
                      }
                    ]
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: _vm.KEYS["bank_recipient"] } },
                      [_vm._v("Банк-получатель:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:3|max:200",
                          expression: "'required|min:3|max:200'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["bank_recipient"]],
                          expression: "fields[KEYS['bank_recipient']]"
                        }
                      ],
                      key: _vm.KEYS["bank_recipient"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["bank_recipient"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "Банк-получатель",
                        id: _vm.KEYS["bank_recipient"],
                        name: _vm.normalizeDotsToArrow(
                          _vm.KEYS["bank_recipient"]
                        )
                      },
                      domProps: {
                        value: _vm.fields[_vm.KEYS["bank_recipient"]]
                      },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["bank_recipient"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(
                      _vm.normalizeDotsToArrow(_vm.KEYS["bank_recipient"])
                    )
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["bank_recipient"]
                                  )
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS["correspondent_account"]
                          )
                        )
                      }
                    ]
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: _vm.KEYS["correspondent_account"] } },
                      [_vm._v("Кор. счет:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-static",
                          rawName: "v-mask-static",
                          value: "9{20}",
                          expression: "'9{20}'"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|digits:20",
                          expression: "'required|digits:20'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["correspondent_account"]],
                          expression: "fields[KEYS['correspondent_account']]"
                        }
                      ],
                      key: _vm.KEYS["correspondent_account"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS["correspondent_account"]
                          )
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "00000000000000000000",
                        id: _vm.KEYS["correspondent_account"],
                        name: _vm.normalizeDotsToArrow(
                          _vm.KEYS["correspondent_account"]
                        )
                      },
                      domProps: {
                        value: _vm.fields[_vm.KEYS["correspondent_account"]]
                      },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["correspondent_account"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(
                      _vm.normalizeDotsToArrow(
                        _vm.KEYS["correspondent_account"]
                      )
                    )
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["correspondent_account"]
                                  )
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["bic"])
                        )
                      }
                    ]
                  },
                  [
                    _c("label", { attrs: { for: _vm.KEYS["bic"] } }, [
                      _vm._v("БИК:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-static",
                          rawName: "v-mask-static",
                          value: "9{9}",
                          expression: "'9{9}'"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|digits:9",
                          expression: "'required|digits:9'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["bic"]],
                          expression: "fields[KEYS['bic']]"
                        }
                      ],
                      key: _vm.KEYS["bic"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["bic"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "000000000",
                        id: _vm.KEYS["bic"],
                        name: _vm.normalizeDotsToArrow(_vm.KEYS["bic"])
                      },
                      domProps: { value: _vm.fields[_vm.KEYS["bic"]] },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["bic"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["bic"]))
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["bic"])
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["checking_account"])
                        )
                      }
                    ]
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: _vm.KEYS["checking_account"] } },
                      [_vm._v("Расчетный счет:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-static",
                          rawName: "v-mask-static",
                          value: "9{20}",
                          expression: "'9{20}'"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|digits:20",
                          expression: "'required|digits:20'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["checking_account"]],
                          expression: "fields[KEYS['checking_account']]"
                        }
                      ],
                      key: _vm.KEYS["checking_account"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["checking_account"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "00000000000000000000",
                        id: _vm.KEYS["checking_account"],
                        name: _vm.normalizeDotsToArrow(
                          _vm.KEYS["checking_account"]
                        )
                      },
                      domProps: {
                        value: _vm.fields[_vm.KEYS["checking_account"]]
                      },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["checking_account"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(
                      _vm.normalizeDotsToArrow(_vm.KEYS["checking_account"])
                    )
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["checking_account"]
                                  )
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "separator" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["legal_address"])
                        )
                      }
                    ]
                  },
                  [
                    _c("label", { attrs: { for: _vm.KEYS["legal_address"] } }, [
                      _vm._v("Юридический адрес:")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:5|max:200",
                          expression: "'required|min:5|max:200'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["legal_address"]],
                          expression: "fields[KEYS['legal_address']]"
                        }
                      ],
                      key: _vm.KEYS["legal_address"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["legal_address"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "Юридический адрес",
                        id: _vm.KEYS["legal_address"],
                        name: _vm.normalizeDotsToArrow(
                          _vm.KEYS["legal_address"]
                        )
                      },
                      domProps: {
                        value: _vm.fields[_vm.KEYS["legal_address"]]
                      },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["legal_address"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(
                      _vm.normalizeDotsToArrow(_vm.KEYS["legal_address"])
                    )
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["legal_address"]
                                  )
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["actual_address"])
                        )
                      }
                    ]
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: _vm.KEYS["actual_address"] } },
                      [_vm._v("Фактический адрес (прописка):")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|min:5|max:200",
                          expression: "'required|min:5|max:200'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields[_vm.KEYS["actual_address"]],
                          expression: "fields[KEYS['actual_address']]"
                        }
                      ],
                      key: _vm.KEYS["actual_address"],
                      class: {
                        "lm-input": true,
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["actual_address"])
                        )
                      },
                      attrs: {
                        type: "text",
                        placeholder: "Фактический адрес (прописка)",
                        id: _vm.KEYS["actual_address"],
                        name: _vm.normalizeDotsToArrow(
                          _vm.KEYS["actual_address"]
                        )
                      },
                      domProps: {
                        value: _vm.fields[_vm.KEYS["actual_address"]]
                      },
                      on: {
                        blur: _vm._handleBlurUpdateField,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            _vm.KEYS["actual_address"],
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(
                      _vm.normalizeDotsToArrow(_vm.KEYS["actual_address"])
                    )
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS["actual_address"]
                                  )
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "lm-input-wrap",
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["vat"])
                        )
                      }
                    ]
                  },
                  [
                    _c("lm-select", {
                      attrs: {
                        "input-id": _vm.KEYS["vat"],
                        "input-name": _vm.KEYS["vat"],
                        label: "НДС (Работаем только с ПСН и УСН):",
                        options: _vm.vat
                      },
                      on: { blur: _vm._handleBlurUpdateField },
                      model: {
                        value: _vm.fields[_vm.KEYS["vat"]],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, _vm.KEYS["vat"], $$v)
                        },
                        expression: "fields[KEYS['vat']]"
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["vat"]))
                      ? _c("span", { staticClass: "lm-input-error" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.normalizeDotsToArrow(_vm.KEYS["vat"])
                                )
                              ) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lm-action-buttons" }, [
                _c(
                  "a",
                  {
                    staticClass: "lm-link-button",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm._handleClickBackRequireOnRole }
                  },
                  [_vm._v("назад")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "lm-primary-button middle",
                    on: { click: _vm._handleClickNextRequireOnRole }
                  },
                  [_vm._v("Продолжить")]
                )
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.state.is.photos
        ? [
            _c("div", { staticClass: "lm-m-cs-register" }, [
              _c(
                "div",
                { staticClass: "lm-m-cs-register-wrap" },
                [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Загрузка ваших работ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "desc" }, [
                    _vm._v(
                      "Пожалуйста, прикрепите свои работы для оценки качества съёмки. Фотографии будут отображаться в вашем профиле, после одобрения заявки"
                    )
                  ]),
                  _vm._v(" "),
                  _c("lm-dropzone", {
                    attrs: {
                      "max-items": 30,
                      label: "Загрузить файлы",
                      mediaModal: true,
                      multiple: true,
                      accept: ["image/*", "video/*"]
                    },
                    on: {
                      update: _vm.handleUploadItems,
                      onUpload: _vm.handleUpload,
                      onRemove: _vm.handleRemove
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "lm-action-buttons" }, [
                _c(
                  "a",
                  {
                    staticClass: "lm-link-button",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm._handleClickBackRequireOnRole }
                  },
                  [_vm._v("назад")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    class: [
                      "lm-primary-button",
                      "middle",
                      { disabled: !_vm.canModerate }
                    ],
                    on: { click: _vm._handleClickCreateRequest }
                  },
                  [_vm._v("Отправить")]
                )
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.state.is.finish
        ? [
            _c("div", { staticClass: "lm-m-cs-paid" }, [
              _c(
                "div",
                { staticClass: "lm-m-cs-paid-wrap" },
                [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Заявка принята!")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "desc",
                      staticStyle: { "margin-bottom": "40px" }
                    },
                    [_vm._v("Ваша заявка будет рассмотрена в ближайшее время")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "desc" }, [
                    _vm._v(
                      "С нами уже " +
                        _vm._s(
                          _vm._f("pluralize")(this.specialists.count, [
                            "спецталист",
                            "специалиста",
                            "специалистов"
                          ])
                        ) +
                        "!"
                    )
                  ]),
                  _vm._v(" "),
                  false
                    ? _c(
                        "router-link",
                        {
                          staticClass: "lm-outline-button middle",
                          attrs: { to: { name: "certifying.catalog.index" } }
                        },
                        [_vm._v("посмотреть всех")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "lm-outline-button middle",
                      attrs: {
                        to: {
                          name: "user.show",
                          params: {
                            username:
                              _vm.user && _vm.user.hasOwnProperty("username")
                                ? _vm.user.username
                                : "id1"
                          }
                        }
                      }
                    },
                    [_vm._v("В личный кабинет")]
                  )
                ],
                1
              )
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "desc" }, [
      _vm._v("Вам необходимо выбрать те услуги, "),
      _c("br"),
      _vm._v(" которые вы готовы предоставить")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-654ec59d", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=86.build.7b4c03c2abb2fb294164.js.map