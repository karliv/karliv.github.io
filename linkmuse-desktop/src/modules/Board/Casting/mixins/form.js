import { mapGetters } from 'vuex'
import { has, HEADER_HEIGHT } from '@utils'
import { createHelpers } from 'vuex-map-fields'
import DropZone from '@components/UI/Dropzone/Custom/Index.vue'

import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

import { MALE, FEMALE } from '@modules/User/Enums/Sex'
import { ACTOR, MODEL } from '@modules/Board/Casting/Enums/CastingRole'
import { PUBLISH, DRAFT } from '@modules/Board/Casting/Enums/CastingTransition'

const { mapFields } = createHelpers({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
})

const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

export default {
  mixins: [AjaxSelectCity],
  components: { 'lm-dropzone': DropZone },
  data () {
    return {
      has,
      MALE,
      DRAFT,
      FEMALE,
      PUBLISH,
      state: null,
      uploads: [],
      initWysiwyg: false,
      loadingForm: false,
      showFieldForm: true,
      description: {
        tooltip: {
          show: false,
          bottom: false
        }
      }
    }
  },

  computed: {
    ...mapFields({ fields: 'form.fields', defaultFields: 'form.defaultFields' }),
    ...mapGetters({
      user: 'auth/getAuthUser',
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
    hasCity () {
      return (!!this.fields.cityId)
    },
    hasName () {
      return (!!this.fields.name)
    },
    isPublishCastingTransition () {
      return (this.fields.transition === PUBLISH)
    },
    feeCurrencies () {
      return this.sources['feeCurrencies'].map((curr) => { return { id: curr.id, text: curr.symbol } })
    },
    canPublished () {
      return this.hasCategory && this.hasCountry && this.hasCity && this.hasName && this.isAuthorized && this.isRegistered
    },
    contentTooltipFee () {
      return `<div style="max-width: 340px">
                <span style="display: block; margin-bottom: 8px">Включите этот фильтр и заполните поля, если у вашего кастинга имеется гонорар</span>
                <span style="display: block; margin-bottom: 8px">Включите этот фильтр, но не заполняйте поля, если гонорар обсуждается</span>
                <span style="display: block; ">Выключите этот фильтр, если вы проводите кастинг без гонорара</span>
              </div>`
    },
    isCastingOnline () {
      return Boolean(Number(this.fields.isOnline))
    },
    contentTooltipCastingOnline () {
      return `<div style="max-width: 193px;">
                <span style="display: block; margin-bottom: 0">Включите этот фильтр, если ваш кастинг проводится онлайн</span>
              </div>`
    },
    contentTooltipTrusted () {
      return `<div style="max-width: 240px">
                <span style="display: block; margin-bottom: 8px">Включите этот фильтр, если вам нужны отклики только с портфолио</span>
                <span style="display: block;">Данный фильтр доступен только для кастингов с ролью: модель или актер.</span>
              </div>`
    },
    isForActorAndModel () {
      if (this.fields.professions.length === 0) return false

      // TODO: Bad method
      let professions = this.sources['professions'].filter(r => this.fields.professions.includes(r.id)).map(r => r.name)
      return (this._.difference(professions, [ACTOR, MODEL]).length === 0) || false
    },
    placeholderDescription () {
      return 'Расскажите в подробностях об объявлении. Опишите необходимые параметры, возможности и время работы\n\n' +
        'Информация из описания должна соответствовать всем заполненным полям\n\n' +
        'В описании запрещено указывать контактные данные и ссылки на другие ресурсы'
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
    /**
     * Handle change category select
     * @private
     */
    _handleInputCategory () {
      if (this.fields.categoryId) {
        this.$nextTick(() => {
          if (this.initWysiwyg === false) {
            this.initWysiwyg = true
            this.$refs['wysiwygDescription'].initialize()
          }
        })

        setTimeout(() => {
          this.$scrollTo('#form__group_declaration_role', 500, { offset: (-20 - HEADER_HEIGHT) })
        }, 250)
      }
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
    },
    _handleFocusDescription () {
      window.addEventListener('scroll', this._handleCheckDescriptionTooltip)
      this.description.tooltip.show = true
      this._handleCheckDescriptionTooltip()
    },
    _handleBlurDescription () {
      window.removeEventListener('scroll', this._handleCheckDescriptionTooltip)
      this.description.tooltip.show = false
      this.description.tooltip.bottom = false
    },
    _handleCheckDescriptionTooltip () {
      if (!this.description.tooltip.show) return

      this.$nextTick(() => {
        if (!this.description.tooltip.bottom) {
          let maxScrollPosY = this.$refs['descriptionTooltip'].offsetTop - this.$refs['descriptionTooltipWrap'].offsetHeight + 50

          if (maxScrollPosY < window.scrollY) {
            this.description.tooltip.bottom = true
          }
        } else {
          let maxScrollPosY = this.$refs['descriptionRow'].offsetTop - this.$refs['descriptionTooltipWrap'].offsetHeight - 100

          if (maxScrollPosY > window.scrollY) {
            this.description.tooltip.bottom = false
          }
        }
      })
    }
  }
}
