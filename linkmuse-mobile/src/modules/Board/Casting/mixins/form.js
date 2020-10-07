import { has } from '@utils'
import { mapGetters } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import { createHelpers } from 'vuex-map-fields'
import Dropzone from '@components/UI/Dropzone/Index.vue'

import { MALE, FEMALE } from '@modules/User/Enums/Sex'
import { ACTOR, MODEL } from '@modules/Board/Casting/Enums/CastingRole'
import { PUBLISH, DRAFT } from '@modules/Board/Casting/Enums/CastingTransition'

import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

const { mapFields } = createHelpers({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
})

const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

export default {
  mixins: [AjaxSelectCity],
  components: { 'lm-dropzone': Dropzone },
  data () {
    return {
      has,
      MALE,
      FEMALE,
      PUBLISH,
      DRAFT,
      state: null,
      uploads: [],
      showFieldForm: true
    }
  },
  computed: {
    ...mapFields({ fields: 'form.fields', defaultFields: 'form.defaultFields' }),
    ...mapGetters({
      user: 'auth/getAuthUser',
      hasPhone: 'auth/hasPhone',
      hasEmail: 'auth/hasEmail',
      profile: 'auth/getProfile',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered',
      sources: 'board/casting/getSources'
    }),
    hasCategory () {
      return (this.fields.categoryId !== null)
    },
    hasCountry () {
      return (!!this.fields.countryId)
    },
    isPublishCastingTransition () {
      return (this.fields.transition === PUBLISH)
    },
    feeCurrencies () {
      return this.sources['feeCurrencies'].map((curr) => { return { id: curr.id, text: curr.symbol } })
    },
    isCastingOnline () {
      return Boolean(Number(this.fields.isOnline))
    },
    isCurrentUser () {
      return ((this.user && this.edit && this.user.id === this.casting.user.id) || !this.edit)
    },
    isAdmin () {
      return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
    },
    isForActorAndModel () {
      if (this.fields.professions.length === 0) return false

      // TODO: Bad method
      let professions = this.sources['professions'].filter(r => this.fields.professions.includes(r.id)).map(r => r.name)
      return (this._.difference(professions, [ACTOR, MODEL]).length === 0) || false
    },
    placeholderDescription () {
      return `Расскажите в подробностях об объявлении. Опишите необходимые параметры, обязанности и время работы

Информация из описания должна соответствовать всем заполненным полям 

В описании запрещено указывать контактные данные и ссылки на другие ресурсы`
    },
    showReset () {
      const fields = this._.omit(this.fields)
      const defaultFields = this._.omit(this.defaultFields)

      return (this._.isEqual(fields, defaultFields) === false)
    }
  },
  created () {
    this.fields['isOnline'] = 0
    this.fields['fee'] = 1
  },

  mounted () {
    if (!this.fields['feeCurrencyId']) {
      this.fields['feeCurrencyId'] = (this.sources['feeCurrencies'].length) ? this.sources['feeCurrencies'][0]['id'] : null
    }
  },

  methods: {
    _handleBlurUpdateField () {
      if (this.edit === false) {
        this.$localStorage.set('board.create', JSON.stringify(this.fields))
      }
    },
    _handleClickPreviousPage () {
      if (this.edit === false && this.hasCategory && this.isAuthorized && this.isRegistered && this.hasEmail) {
        this.$confirm({
          cancelTxt: 'выйти',
          confirmTxt: 'отмена',
          title: 'Вы покидаете страницу',
          message: 'Внесенные данные не сохранятся, желаете ?'
        }).then(() => {
          // this._handleClickCreateCasting(DRAFT)
        }).catch(() => this._handlePreviousPage())
      } else this._handlePreviousPage()
    },
    _handlePreviousPage () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else this.$router.push({ name: 'board.castings.index' })
    },
    /**
     * Handle change category select
     * @private
     */
    _handleInputCategory () {
      setTimeout(() => {
        this.$scrollTo('#form__group_declaration_role', 500, { offset: -20 })
      }, 250)
    },
    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (result) {
            resolve(result)
          } else reject()
        })
      })
    },
    /**
     * Next transition
     * @private
     */
    _handleClickNextTransition () {
      this.fsm.do('next')
    },
    /**
     * Back transition
     * @private
     */
    _handleClickBackTransition () {
      this.fsm.do('back')
    },
    /**
     * Handle updated items DropZone
     * @param items
     */
    handleUploadItems (items) {
      this.uploads = items
      this.fields.references = items.map(item => item.id)
    },
    /**
     * Add item on DropZone
     *
     * @param item
     * @param file
     * @param progress
     * @param success
     * @param error
     * @private
     */
    _handleAttach (item, file, progress, success, error) {
      let data = new FormData()

      data.append('reference', file)

      let url = (this.edit && this.casting)
        ? `api/v2/boards/castings/${this.casting.id}/references`
        : 'api/v2/boards/castings/references'

      this.$api.post(url, data, {
        baseURL: BASE_URL_UPLOAD,
        cancelToken: item.source.token,
        timeout: 120000,
        onUploadProgress (progressEvent) {
          progress(item.uid, progressEvent)
        }
      }).then(response => {
        const { data: { data: { id, path } } } = response

        success(item.uid, { id, path })
      }).catch((err) => {
        error(item.uid, err, 'reference')
        console.error('Error upload reference')
      })
    },
    /**
     * Removed item on DropZone
     * @param item
     * @param remove
     * @private
     */
    _handleAttachRemove (item, remove) {
      this.$api.delete(`api/v2/boards/castings/references/${item.id}`).then(response => {
        remove(item.uid)
      }).catch(() => {
        remove(item.uid, false)
        throw new Error('Error delete reference')
      })
    }
  }
}
