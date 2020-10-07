import { has } from '@utils'
import truncate from '~/src/filters/string/truncate'
import * as CATEGORIES from '../Enums/BoardCastingCategories'
import { EYE, INFO, CHECK, ALERT_WARN, ALERT_DANGER } from '../Enums/Types'

const options = {
  [CATEGORIES.CASTING_APPROVE]: {
    type: CHECK,
    text: (_this) => {
      return `Модератор проверил и опубликовал ваше объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a>`
    },
    click: (_this) => {
      _this.$router.push({ name: 'board.castings.show', params: { slug: _this.casting_slug, id: _this.casting_id } })
    }
  },
  [CATEGORIES.BOARD_CASTING_APPROVE]: {
    type: CHECK,
    text: (_this) => {
      return `Модератор проверил и опубликовал ваше объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a>`
    },
    click: (_this) => {
      _this.$router.push({ name: 'board.castings.show', params: { slug: _this.casting_slug, id: _this.casting_id } })
    }
  },
  [CATEGORIES.BOARD_CASTING_DELETE]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `Модератор удалил ваше объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a>
        по причине: “${_this.casting_reason}”</a>`
    },
    click: () => {}
  },
  [CATEGORIES.BOARD_CASTING_FORCE_PUBLISH]: {
    type: CHECK,
    text: (_this) => {
      return `Ваше объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a> опубликовано в ленте`
    }
  },
  [CATEGORIES.BOARD_CASTING_NEW_RESPONSE]: {
    type: INFO,
    text: (_this) => {
      return `Получен новый отклик на объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a>`
    }
  },
  [CATEGORIES.BOARD_CASTING_REJECT]: {
    type: ALERT_WARN,
    text: (_this) => {
      return `Ваше объявление <a class="notifications__link fw_600">“${_this.casting_name}”</a> снято с публикации`
    }
  },
  [CATEGORIES.BOARD_CASTING_RESPONSE_VIEWED]: {
    type: EYE,
    text: (_this) => {
      return `Ваш отклик на объявление  <a class="notifications__link fw_600">“${_this.casting_name}”</a> был просмотрен`
    }
  },
  [CATEGORIES.CASTING_RESPONSE_NEW]: {
    type: INFO,
    text: (_this) => {
      return (_this.grouped ? `Новые (${_this.count}) отклики на кастинг` : 'Новый отклик на кастинг') + ` <a class="notifications__link fw_600">“${_this.casting_name}”</a>`
    }
  }
}

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  mounted () {
    if (this.isBoardCasting) this._handleInit(options[this.item.category], () => { this.$router.push({ name: 'board.castings.show', params: { slug: this.casting_slug, id: this.casting_id } }) })
  },
  computed: {
    isBoardCasting () {
      return Object.values(CATEGORIES).indexOf(this.item.category) > -1
    },
    casting_id () {
      if (!this.isBoardCasting) return

      return has(this.item, 'extra.casting.id') ? this.item.extra.casting.id : has(this.item, 'extra.id') ? this.item.extra.id : null
    },
    casting_slug () {
      if (!this.isBoardCasting) return

      return has(this.item, 'extra.casting.slug') ? this.item.extra.casting.slug : has(this.item, 'extra.slug') ? this.item.extra.slug : null
    },
    casting_name () {
      if (!this.isBoardCasting) return

      return has(this.item, 'extra.casting.name') ? truncate(this.item.extra.casting.name, 50) : has(this.item, 'extra.name') ? truncate(this.item.extra.name, 50) : null
    },
    casting_reason () {
      if (!this.isBoardCasting) return

      return has(this.item, 'extra.reason') ? truncate(this.item.extra.reason, 150) : null
    }
  }
}
