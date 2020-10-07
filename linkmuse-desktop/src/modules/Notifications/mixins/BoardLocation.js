import { has } from '@utils'
import truncate from '~/src/filters/string/truncate'
import * as CATEGORIES from '../Enums/BoardLocationCategories'
import { CHECK, ALERT_WARN, ALERT_DANGER } from '../Enums/Types'

const options = {
  [CATEGORIES.BOARD_LOCATION_APPROVED]: {
    type: CHECK,
    text: (_this) => {
      return `Модератор проверил и опубликовал ваше объявление ${_this.location_name ? `<a class="d-link fw_600">“${_this.location_name}”</a>` : ''}`
    }
  },
  [CATEGORIES.BOARD_LOCATION_DELETED]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `Модератор удалил ваше объявление ${_this.location_name ? `<a class="d-link fw_600">“${_this.location_name}”</a>` : ''}
        по причине: “${_this.location_reason}”</a>`
    },
    click: () => {}
  },
  [CATEGORIES.BOARD_LOCATION_FORCE_PUBLISHED]: {
    type: CHECK,
    text: (_this) => {
      return `Ваше объявление ${_this.location_name ? `<a class="d-link fw_600">“${_this.location_name}”</a>` : ''} опубликовано в ленте`
    }
  },
  [CATEGORIES.BOARD_LOCATION_REJECTED]: {
    type: ALERT_WARN,
    text: (_this) => {
      return `Ваше объявление ${_this.location_name ? `<a class="d-link fw_600">“${_this.location_name}”</a>` : ''} снято с публикации`
    }
  }
}

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      location: null,
      locationError: null
    }
  },
  mounted () {
    if (this.isBoardLocation) {
      this.loading = true
      this.getLocation()
      this._handleInit(options[this.item.category], () => { this.$router.push({ name: 'board.locations.show', params: { slug: this.location_slug, id: this.location_id } }) })
    }
  },
  watch: {
    location () {
      if (this.type) {
        this.text = options[this.item.category].text(this)
        this.loading = false
      }
    },
    locationError () {
      if (this.locationError) {
        this.loading = false
      }
    }
  },
  computed: {
    isBoardLocation () {
      return Object.values(CATEGORIES).indexOf(this.item.category) > -1
    },
    location_id () {
      if (!this.isBoardLocation) return

      return has(this.item, 'extra.location.id') ? this.item.extra.location.id : has(this.item, 'extra.id') ? this.item.extra.id : null
    },
    location_slug () {
      if (!this.isBoardLocation) return

      return has(this.item, 'extra.location.slug') ? this.item.extra.location.slug : has(this.item, 'extra.slug') ? this.item.extra.slug : null
    },
    location_reason () {
      if (!this.isBoardLocation) return

      return has(this.item, 'extra.reason') ? truncate(this.item.extra.reason, 150) : null
    },
    location_dimension () {
      return Number(this.location.dimension)
    },
    location_price () {
      return this.location['price']
    },
    location_currency () {
      return (this.location.currency && has(this.location.currency, 'symbol')) ? this.location.currency.symbol : null
    },
    location_paymentPeriod () {
      return (this.location.paymentPeriod && has(this.location.paymentPeriod, 'text')) ? this.location.paymentPeriod.text : null
    },
    location_type () {
      return (this.location.type && has(this.location.type, 'text')) ? this.location.type.text : null
    },
    location_name () {
      if (!this.isBoardLocation) return

      return this.location ? `${this.location_type} ${this.location_dimension ? this.location_dimension : 0}м² - от ${this.location_price ? this.$currency(this.location_price, this.location_currency) : 0} ${this.location_paymentPeriod ? this.location_paymentPeriod.toLowerCase() : ''}` : ''
    }
  },
  methods: {
    getLocation () {
      this.$api.get(`api/v2/boards/locations/${this.location_id}`).then((response) => {
        let { data: { data } } = response

        this.location = data
      }).catch(() => {
        this.locationError = true
      })
    }
  }
}
