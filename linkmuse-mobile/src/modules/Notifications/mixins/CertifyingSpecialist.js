import { has } from '@utils'
import * as CATEGORIES from '../Enums/CertifyingSpecialistCategories'
import { EYE, INFO, CHECK, ALERT_WARN, ALERT_DANGER } from '../Enums/Types'

const options = {
  [CATEGORIES.CERTIFYING_SPECIALIST_APPROVED]: {
    type: CHECK,
    text: (_this) => {
      return `Модератор одобрил вашу заявку на регистрацию в программе ВС`
    },
    click: () => {
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_CANCELED]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `Ваша заявка на верификацию отклонена. <a class="notifications__link fw_600">Узнать причину</a>`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_CONFIRM_MEETING]: {
    type: CHECK,
    text: (_this) => {
      return `Вы успешно назначили встречу <a class="notifications__link fw_600">Посмотреть детали</a>`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_DISPUTE_FINISHED]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `Ваш диспут закрыт <a class="notifications__link fw_600">Узнать решение</a>`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_DISPUTE_OPENED]: {
    type: INFO,
    text: (_this) => {
      return _this.isCustomer ? `На ваш заказ был открыт диспут. Ожидайте решения модератора` : `Вы открыли диспут. Ожидайте решения модератора`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_FINISHED]: {
    type: CHECK,
    text: (_this) => {
      return `Ваш заказ готов <a class="notifications__link fw_600">Посмотреть детали</a>`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_NEW]: {
    type: INFO,
    text: (_this) => {
      return `У вас новый заказ <a class="notifications__link fw_600">Посмотреть</a>`
    }
  },
  [CATEGORIES.CERTIFYING_SPECIALIST_ORDER_PAID]: {
    type: INFO,
    text: (_this) => {
      return `Вы успешно оплатили услугу <a class="notifications__link fw_600">Посмотреть детали</a>`
    }
  }
}

export default {
  data () {
    return {}
  },
  mounted () {
    if (!this.isCertifyingSpecialist) return

    this._handleInit(options[this.item.category], () => {
      if (this.isCustomer) {
        this.$router.push({ name: 'certifying.customer.orders.index', params: { order_id: this.cs_order_id } })
      } else {
        this.$router.push({ name: 'certifying.executor.orders.show', params: { order_id: this.cs_order_id } })
      }
    })
  },
  computed: {
    isCertifyingSpecialist () {
      return Object.values(CATEGORIES).indexOf(this.item.category) > -1
    },
    cs_order_id () {
      return has(this.item, 'extra.order_id') ? this.item.extra.order_id : has(this.item, 'content_id') ? this.item.content_id : null
    }
  }
}
