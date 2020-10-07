<script>
  import { has } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

  import formBoard from '@modules/Board/mixins/form.js'
  import { createCasting } from '@modules/Rating/Enums/events'
  import formCasting from '@modules/Board/Casting/mixins/form'
  import template from '@modules/Board/Casting/extends/Form.vue'
  import { PUBLISH } from '@modules/Board/Casting/Enums/CastingTransition'

  export default {
    extends: template,
    mixins: [formBoard, formCasting],
    metaInfo: {
      title: 'Создание кастинга'
    },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('board/casting/getSources'),
        store.dispatch('board/casting/clearCastingFields')
      ])
    },
    data () {
      return {
        edit: false
      }
    },
    computed: {
      title () {
        return this.$t('board-create-casting.new-casting.new-casting-form')
      }
    },
    mounted () {
      if (this.isAuthorized && this.user) {
        if (has(this.user, 'country.id') && this.user.country.id) {
          this.fields.countryId = this.user.country.id
        }
        if (this.fields.countryId && has(this.user, 'city.id') && this.user.city.id) {
          this.fields.cityId = this.user.city.id
        }
      }

      let fields = this.$localStorage.get('board.create', null, Object)
      if (fields && typeof fields === 'object') Object.assign(this.fields, fields)

      if (this.fields.countryId) {
        this._handleChangeCountrySelect(this.fields.countryId, false, true)
      }
    },
    methods: {
      _handleClickActionCasting (transition) {
        this._handleClickCreateCasting(transition)
      },
      _handleClickCreateCasting (transition) {
        this.fields.transition = transition
        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            this._createCasting().then(() => {
              const { username } = this.user
              const { transition } = this.fields
              this.$localStorage.remove('board.create')
              this.$store.dispatch('board/casting/setHasNewCastingsData', true)

              if (transition === PUBLISH) {
                if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
                  Toast({ message: 'Кастинг опубликован', iconClass: 'mintui mintui-success' })
                  this.$router.push({ name: 'board.castings.index' })
                } else {
                  const openSuccessCreateBoardModal = this.$localStorage.get('success.board.create', false, Boolean)

                  if (openSuccessCreateBoardModal === false) {
                    this.$modalRouter.push({ name: 'success.board.create' })
                  } else Toast({ message: 'Кастинг отправлен на модерацию', iconClass: 'mintui mintui-success' })

                  this.$router.push({ name: 'board.castings.user', params: { username } })
                }

                this.$nsWebViewInterface.emit('rating', createCasting)
              } else {
                Toast({ message: 'Кастинг сохранен в черновик', iconClass: 'mintui mintui-success' })
                this.$router.push({ name: 'board.castings.user', params: { username } })
              }
            }).catch(() => this._scrollToErrorFields())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: -40 })
      },
      _createCasting () {
        return new Promise((resolve, reject) => {

          Indicator.open()

          let data = this._.cloneDeep(this.fields)
          if (!Boolean(Number(this.fields.fee))) {
            this.$delete(data, 'feeAmount')
            this.$delete(data, 'feeTypeId')
            this.$delete(data, 'feeCurrencyId')
          }

          if (!Boolean(Number(this.isForActorAndModel))) {
            this.$delete(data, 'forTrusted')
          }

          this.$api.post('api/v2/boards/castings', data).then((response) => {
            const { data: { data } } = response

            Indicator.close()
            resolve(data)
          }, (error) => {
            const { response: { data }, response: { status }} = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create board casting')
          })
        })
      },
      _handleClickClearForm () {
        this._clearForm().then(() => {
          this.$gtm.trackEvent({ event: 'clear_form' })
          Toast({ message: 'Форма очищена', iconClass: 'mintui mintui-success' })
        }).catch(() => {})
      },
      _clearForm () {
        return new Promise((resolve, reject) => {
          try {
            this.uploads = []
            this.showFieldForm = false
            this.$nextTick(() => this.showFieldForm = true)
            this.fields = this._.cloneDeep(this.defaultFields)
            // this.$store.dispatch('board/casting/clearCastingFields')
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
