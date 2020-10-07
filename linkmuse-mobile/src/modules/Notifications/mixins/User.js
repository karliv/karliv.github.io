import { has } from '@utils'
import { Indicator, Toast } from 'mint-ui'
import { mapGetters, mapActions } from 'vuex'
import truncate from '~/src/filters/string/truncate'
import * as CATEGORIES from '../Enums/UserCategories'
import { EYE, INFO, CHECK, ALERT_WARN, ALERT_DANGER } from '../Enums/Types'

const options = {
  [CATEGORIES.USER_ANKETA_NOT_FILLED]: {
    type: ALERT_WARN,
    text: (_this) => {
      return `Заполните анкету профиля, чтобы увеличить свою позицию в поисковой выдаче`
    },
    actions: (_this) => {
      return `<button @click="$parent.click" class="btn btn_primary notifications__btn">заполнить</button>`
    },
    click: (_this) => {
      _this.$router.push({ name: 'user.show', params: { username: _this.user.username } })
    }
  },
  [CATEGORIES.USER_PORTFOLIO_NOT_PUBLISHED]: {
    type: ALERT_WARN,
    text: (_this) => {
      return `Опубликуйте портфолио, чтобы увеличить внимание к своему профилю в 2 раза`
    },
    actions: (_this) => {
      return `<button @click="$parent.click" class="btn btn_primary notifications__btn">Опубликовать</button>`
    },
    click: (_this) => {
      _this.$router.push({ name: 'user.show', params: { username: _this.user.username } })
    }
  },
  [CATEGORIES.USER_REFERRAL_WAS_REGISTER]: {
    type: INFO,
    text: (_this) => {
      return `${_this.from.name} зарегистрировался по вашей ссылке.`
    }
  },
  [CATEGORIES.USER_INVITE_ON_CASTING]: {
    type: INFO,
    text: (_this) => {
      return `${_this.from.name} пригласил(а) вас на ${has(_this.item, 'extra.name') ? `кастинг <a class="d-link fw_600">“${_this.item.extra.name}“</a>` : `<a class="d-link fw_600">кастинг</a>`}`
    },
    click: (_this) => {
      document.location = _this.item.url
    }
  },
  [CATEGORIES.USER_LIKE]: {
    type: INFO,
    text: (_this) => {
      return `${_this.from.name} оценил(a) ${_this.typeMedia}`
    },
    avatar: (_this) => {
      return _this.from.avatar
    }
  },
  [CATEGORIES.USER_FOLLOW]: {
    type: INFO,
    text: (_this) => {
      return `${_this.from.name} подписался на вас <a class="notifications__link fw_600">Подписаться в ответ</a>`
    },
    avatar: (_this) => {
      return _this.from.avatar
    }
  },
  [CATEGORIES.USER_PARTNER_REQUESTED]: {
    type: INFO,
    text: (_this) => {
      _this._handleGetPartnersRequests()
      return `<a class="notifications__link fw_600">${_this.from.name}</a> предлагает вам стать коллегой`
    },
    avatar: (_this) => {
      return _this.from.avatar
    },
    actions: (_this) => {
      return !_this.read ? `<button @click="$parent._handleAcceptPartner" class="btn btn_primary notifications__btn">принять</button>
            <button @click="$parent._handleDeclinePartner" class="notifications__btn notifications__btn_disabled">отклонить</button>`
        : '<lm-m-loader></lm-m-loader>'
    }
  },
  [CATEGORIES.USER_PARTNER_DELETE]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `<a class="notifications__link fw_600">${_this.from.name}</a> перестал быть вашим коллегой`
    },
    avatar: (_this) => {
      return _this.from.avatar
    }
  },
  [CATEGORIES.USER_PARTNER_APPROVED]: {
    type: INFO,
    text: (_this) => {
      return `<a class="notifications__link fw_600">${_this.from.name}</a> стал вашим коллегой`
    },
    avatar: (_this) => {
      return _this.from.avatar
    }
  },
  [CATEGORIES.USER_PARTNER_EXCLUSIVE_REQUESTED]: {
    type: INFO,
    text: (_this) => {
      _this._handleGetPartnersRequests()
      return `<a class="notifications__link fw_600">${_this.from.name}</a> предлагает вам эксклюзивное сотрудничество`
    },
    avatar: (_this) => {
      return _this.from.avatar
    },
    actions: (_this) => {
      return !_this.read ? `<button @click="$parent._handleAcceptExclusivePartner" class="btn btn_primary notifications__btn">принять</button>
            <button @click="$parent._handleDeclineExclusivePartner" class="notifications__btn notifications__btn_disabled">отклонить</button>`
        : '<lm-m-loader></lm-m-loader>'
    }
  },
  [CATEGORIES.USER_PARTNER_EXCLUSIVE_DELETE]: {
    type: ALERT_DANGER,
    text: (_this) => {
      return `<a class="notifications__link fw_600">${_this.from.name}</a> расторг эксклюзивное сотрудничество`
    },
    avatar: (_this) => {
      return _this.from.avatar
    }
  },
  [CATEGORIES.USER_PARTNER_EXCLUSIVE_APPROVED]: {
    type: INFO,
    text: (_this) => {
      return `<a class="notifications__link fw_600">${_this.from.name}</a> подтвердил эксклюзивное сотрудничество`
    },
    avatar: (_this) => {
      return _this.from.avatar
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
    if (this.isUser) {
      this._handleInit(options[this.item.category], () => {
        this.$router.push({
          name: 'user.show',
          params: { username: this.from.username }
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      partners: 'partner/getPartnersOnRequests',
      partnersCount: 'partner/getCountPartnersOnRequests',
      partnersError: 'partner/getPartnersErrorOnRequests',
      partnersLoading: 'partner/getPartnersLoadingOnRequests',
      partnersInfiniteDisabled: 'partner/getPartnersInfiniteDisabledOnRequests'
    }),
    isUser () {
      return Object.values(CATEGORIES).indexOf(this.item.category) > -1
    },
    typeMedia () {
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
        case 'profile_portfolio':
          type = 'ваше портфолио'
          break
        default:
          type = 'вашу запись'
      }

      return type
    }
  },
  beforeDestroy () {
    this.clearPartnersOnRequests()
  },
  watch: {
    partners () {
      if ([CATEGORIES.USER_PARTNER_EXCLUSIVE_REQUESTED, CATEGORIES.USER_PARTNER_REQUESTED].indexOf(this.item.category) < 0) return

      if (!this.partnersCount) {
        this.actions = ''
        return
      }

      const isExclusive = CATEGORIES.USER_PARTNER_EXCLUSIVE_REQUESTED === this.item.category

      if (this.partners.findIndex(e => e.user_id === this.from.id && ((isExclusive && e.exclusive === 2) || (!isExclusive && e.exclusive !== 2))) > -1) {
        this.setNotificationOnCatalogFiledById({ id: this.item.id, key: 'read', value: false })
        this.actions = has(options[this.item.category], 'actions') ? options[this.item.category].actions(this) : ''
      } else {
        this.actions = ''
      }
    }
  },
  methods: {
    ...mapActions({
      fetchPartnersOnRequests: 'partner/fetchPartnersOnRequests',
      clearPartnersOnRequests: 'partner/clearPartnersOnRequests'
    }),
    _handleGetPartnersRequests () {
      if (this.partnersLoading || this.partnersInfiniteDisabled) return

      this.fetchPartnersOnRequests({ rewrite: false, user_id: this.user.id }).then(() => {}).catch(() => {
        console.log('Error loading')
        this.actions = ''
      })
    },
    _handleAcceptPartner () {
      Indicator.open()

      this.$api.post(`/api/v1/users/partners/${this.from.id}/approve`).then(response => {
        this.$parent._handleRead(this.item)
        this.actions = ''
        Indicator.close()
        Toast({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        })
      }).catch(err => {
        Indicator.close()
        Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        console.error('Error accept partner', err)
        throw new Error(err)
      })
    },
    _handleDeclinePartner () {
      Indicator.open()

      this.$api.delete(`/api/v1/users/partners/${this.from.id}`).then(response => {
        this.$parent._handleRead(this.item)
        this.actions = ''
        Indicator.close()
        Toast({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        })
      }).catch(err => {
        Indicator.close()
        Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        console.error('Error decline partner', err)
        throw new Error(err)
      })
    },
    _handleAcceptExclusivePartner () {
      Indicator.open()

      this.$api.post(`/api/v1/users/partners/${this.from.id}/exclusive/approve`).then(response => {
        this.$parent._handleRead(this.item)
        this.actions = ''
        Indicator.close()
        Toast({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        })
      }).catch(err => {
        Indicator.close()
        Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        console.error('Error accept exclusive partner', err)
        throw new Error(err)
      })
    },
    _handleDeclineExclusivePartner () {
      Indicator.open()

      this.$api.post(`/api/v1/users/partners/${this.from.id}/exclusive/disapprove`).then(response => {
        this.$parent._handleRead(this.item)
        this.actions = ''
        Indicator.close()
        Toast({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        })
      }).catch(err => {
        Indicator.close()
        Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        console.error('Error decline exclusive partner', err)
        throw new Error(err)
      })
    }
  }
}
