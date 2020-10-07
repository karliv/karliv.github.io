import { has } from '@utils'
import * as CATEGORIES from '../Enums/OtherCategories'
import { EYE, INFO, CHECK, ALERT_WARN, ALERT_DANGER } from '../Enums/Types'

const options = {
  [CATEGORIES.MODERATION_BANNED]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `Модератор заблокировал ${_this.typeBanned}`
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
    if (this.isOther) this._handleInit(options[this.item.category], () => {})
  },
  computed: {
    isOther () {
      return Object.values(CATEGORIES).indexOf(this.item.category) > -1
    },
    typeBanned () {
      let type

      switch (this.item.content_type) {
        case 'photo':
          type = 'ваше фото'
          break
        case 'video':
          type = 'ваше видео'
          break
        case 'audio':
          type = 'ваше аудио'
          break
        case 'casting':
          type = 'ваш кастинг'
          break
        case 'project':
          type = 'ваш проект'
          break
        default:
          type = 'вашу запись'
      }

      return type
    }
  }
}
