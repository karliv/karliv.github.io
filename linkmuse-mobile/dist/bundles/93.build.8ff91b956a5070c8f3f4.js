webpackJsonp([93],{

/***/ 1302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dispute_vue__ = __webpack_require__(1662);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f531666c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dispute_vue__ = __webpack_require__(2059);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2057)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f531666c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dispute_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f531666c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dispute_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CertifyingSpecialist/Executor/Orders/Show/Dispute.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f531666c", Component.options)
  } else {
    hotAPI.reload("data-v-f531666c", Component.options)
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

/***/ 1662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_CertifyingSpecialist__ = __webpack_require__(1498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_CertifyingSpecialist_Enums_DisputeCauses__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_CertifyingSpecialist_Enums_DisputeSolutions__ = __webpack_require__(1501);
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








/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      errors: [],
      fields: {
        cause: null,
        solution: null,
        comment: null
      }
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return store.dispatch('certifying/getOrderById', {
                id: Number(route.params.order_id),
                include: 'certifying_specialist,dispute'
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    order: 'certifying/getSingleOrderData',
    order_loading: 'certifying/geSingleOrderLoading'
  }), {
    title: function title() {
      if (!this.order) return;
      return '\u0414\u0438\u0441\u043F\u0443\u0442 \u0437\u0430\u043A\u0430\u0437 #' + this.order.id;
    },
    is_dispute: function is_dispute() {
      if (!this.order) return;
      return this.order.hasOwnProperty('dispute');
    },
    dispute: function dispute() {
      if (!this.is_dispute) return;
      return this.order.dispute.data;
    },
    causes: function causes() {
      return Object(__WEBPACK_IMPORTED_MODULE_3__modules_CertifyingSpecialist_Enums_DisputeCauses__["i" /* getSpecialistCauses */])();
    },
    solutions: function solutions() {
      return Object(__WEBPACK_IMPORTED_MODULE_4__modules_CertifyingSpecialist_Enums_DisputeSolutions__["e" /* getSpecialistSolutions */])();
    }
  }),
  created: function created() {
    if (this.is_dispute && this.dispute) {
      this.fields = _extends({}, this.dispute);
    }
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    setDisputeData: 'certifying/setSingleOrderFieldByKey'
  }), {
    getDisputeStatusTranslate: function getDisputeStatusTranslate(status) {
      return __WEBPACK_IMPORTED_MODULE_2__modules_CertifyingSpecialist__["b" /* default */].getDisputeStatusTranslate(status);
    },
    getDisputeCauseTranslate: function getDisputeCauseTranslate(cause) {
      return __WEBPACK_IMPORTED_MODULE_2__modules_CertifyingSpecialist__["b" /* default */].getDisputeCauseTranslate(cause);
    },
    getDisputeSolutionsTranslate: function getDisputeSolutionsTranslate(solution) {
      return __WEBPACK_IMPORTED_MODULE_2__modules_CertifyingSpecialist__["b" /* default */].getDisputeSolutionsTranslate(solution);
    },
    createDispute: function createDispute() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var id = _this2.order.id;


          if (_this2.loading || !id) return;

          __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].open();
          _this2.loading = true;

          _this2.$api.post('/api/v2/certifying-specialists/orders/' + id + '/disputes', _this2.fields).then(function (response) {
            var data = response.data;


            _this2.setDisputeData({ key: 'dispute', data: data });
            _this2.loading = false;

            __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].close();
            Object(__WEBPACK_IMPORTED_MODULE_0_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
          }).catch(function (error) {
            _this2.loading = false;

            __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].close();
            Object(__WEBPACK_IMPORTED_MODULE_0_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

            var data = error.response.data,
                status = error.response.status;

            if (status === 422 && data.errors) {
              _this2.$setLaravelValidationErrorsFromResponse(data);
            } else throw new Error('Error create dispute order#' + id);
          });
        }
      });
    }
  })
});

/***/ }),

/***/ 2057:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2058);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b01d2f86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f531666c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dispute.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f531666c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dispute.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2058:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.lm-input-error[data-v-f531666c] {\n  color: red !important;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/CertifyingSpecialist/Executor/Orders/Show/Dispute.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;CAAE","file":"Dispute.vue","sourcesContent":[".lm-input-error {\n  color: red !important; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.order
        ? [
            _c("div", { staticClass: "lm-m-cs-open-dispute lm-m-fullh-page" }, [
              _c(
                "div",
                { staticClass: "lm-m-cs-open-dispute--wrap" },
                [
                  !_vm.is_dispute
                    ? [
                        _c("div", { staticClass: "title" }, [
                          _vm._v("Решили начать диспут?")
                        ])
                      ]
                    : _vm.is_dispute
                    ? [
                        !_vm.dispute.status
                          ? [
                              _c("div", { staticClass: "title" }, [
                                _vm._v("Диспут открыт, ожидайте решения.")
                              ])
                            ]
                          : _vm.dispute.status
                          ? [
                              _c("div", { staticClass: "title" }, [
                                _vm._v("Диспут открыт, ожидайте решения.")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "desc" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.getDisputeStatusTranslate(
                                      _vm.dispute.status
                                    )
                                  )
                                )
                              ])
                            ]
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.is_dispute
                    ? [
                        _c("div", { staticClass: "desc" }, [
                          _vm._v(
                            "Выберите причину, по которой выбранная услуга вам не понравилась, а также способ решения, который удовлетворил бы вас"
                          )
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  [
                    _c("div", { staticClass: "lm-radio-buttons" }, [
                      _c("span", [_vm._v("Причина диспута:")]),
                      _vm._v(" "),
                      _vm.verrors.has("cause")
                        ? _c("span", { staticClass: "lm-input-error" }, [
                            _vm._v(_vm._s(_vm.verrors.first("cause")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.causes, function(cause) {
                          return _c("li", [
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
                                  value: _vm.fields.cause,
                                  expression: "fields.cause"
                                }
                              ],
                              key: "cause_" + cause,
                              attrs: {
                                type: "radio",
                                name: "cause",
                                id: "cause_" + cause,
                                disabled: _vm.is_dispute
                              },
                              domProps: {
                                value: cause,
                                checked: _vm._q(_vm.fields.cause, cause)
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.fields, "cause", cause)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "cause_" + cause } }, [
                              _vm._v(
                                _vm._s(_vm.getDisputeCauseTranslate(cause))
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "lm-radio-buttons" }, [
                      _c("span", [_vm._v("Способ решения:")]),
                      _vm._v(" "),
                      _vm.verrors.has("solution")
                        ? _c("span", { staticClass: "lm-input-error" }, [
                            _vm._v(_vm._s(_vm.verrors.first("solution")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.solutions, function(solution) {
                          return _c("li", [
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
                                  value: _vm.fields.solution,
                                  expression: "fields.solution"
                                }
                              ],
                              key: "solution_" + solution,
                              attrs: {
                                type: "radio",
                                name: "solution",
                                id: "solution_" + solution,
                                disabled: _vm.is_dispute
                              },
                              domProps: {
                                value: solution,
                                checked: _vm._q(_vm.fields.solution, solution)
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.fields,
                                    "solution",
                                    solution
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              { attrs: { for: "solution_" + solution } },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.getDisputeSolutionsTranslate(solution)
                                  )
                                )
                              ]
                            )
                          ])
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "separator" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "lm-input-wrap" }, [
                      _c("label", { attrs: { for: "comment" } }, [
                        _vm._v("Комментарий:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.comment,
                            expression: "fields.comment"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        class: {
                          "lm-input": true,
                          error:
                            _vm.errors["comment"] || _vm.verrors.has("comment")
                        },
                        attrs: {
                          id: "comment",
                          name: "comment",
                          type: "text",
                          disabled: _vm.is_dispute,
                          placeholder:
                            "Пожалуйста, опишите подробнее возникшую ситуацию, это поможет нашему модератору лучше понять ваш конфликт и решить его."
                        },
                        domProps: { value: _vm.fields.comment },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.fields, "comment", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lm-action-buttons lm-bottom-actions-buttons" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "lm-link-button",
                      attrs: {
                        to: { name: "certifying.executor.orders.index" }
                      }
                    },
                    [_vm._v("назад")]
                  ),
                  _vm._v(" "),
                  !_vm.is_dispute
                    ? [
                        _c(
                          "a",
                          {
                            staticClass: "lm-primary-button middle",
                            attrs: { href: "javascript:void(0)" },
                            on: {
                              click: function($event) {
                                return _vm.createDispute()
                              }
                            }
                          },
                          [_vm._v("Отправить")]
                        )
                      ]
                    : _vm.is_dispute
                    ? [
                        _c(
                          "router-link",
                          {
                            staticClass: "lm-primary-button middle",
                            attrs: {
                              to: {
                                name: "certifying.executor.orders.show",
                                params: { order_id: _vm.order.id }
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            подробнее о заказе\n          "
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]
        : [
            _c(
              "div",
              { staticClass: "lm-m-cs-agree-meeting-page lm-m-fullh-page" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lm-action-buttons lm-bottom-actions-buttons"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "lm-link-button",
                        attrs: {
                          to: { name: "certifying.executor.orders.index" }
                        }
                      },
                      [_vm._v("назад")]
                    )
                  ],
                  1
                )
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-wait-page--wrap" }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Ошибка")]),
      _vm._v(" "),
      _c("div", { staticClass: "desc" }, [
        _c("div", { staticClass: "top" }, [_vm._v("Произошла ошибка")])
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
    require("vue-hot-reload-api")      .rerender("data-v-f531666c", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=93.build.8ff91b956a5070c8f3f4.js.map