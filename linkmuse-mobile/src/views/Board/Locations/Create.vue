<script>
  import { has } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

  import formBoard from '@modules/Board/mixins/form.js'
  import template from '@modules/Board/Location/extends/Form.vue'
  import formLocation from '@modules/Board/Location/mixins/form.js'

  import { createLocation } from '@modules/Rating/Enums/events'
  import { PUBLISH, DRAFT } from '@modules/Board/Location/Enums/LocationTransition'

  export default {
    extends: template,
    mixins: [formBoard, formLocation],
    metaInfo: {
      title: 'Создание локации'
    },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('board/location/getSources'),
        store.dispatch('board/location/clearLocationFields')
      ])
    },
    data () {
      return {
        edit: false
      }
    },
    computed: {
      title () {
        return 'Новое объявление'
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

        setTimeout(() => {
          if (has(this.user, 'contacts.phone') && this.user.contacts.phone) {
            this.fields.phone = this.user.contacts.phone
          }
        }, 2000)
      }

      let fields = this.$localStorage.get('board.create.location', null, Object)
      if (fields && typeof fields === 'object') Object.assign(this.fields, fields)

      if (this.fields.countryId) {
        this._handleChangeCountrySelect(this.fields.countryId, false, true)
      }

      this.fields.photos = []
      this.$gtm.trackEvent({ event: 'location_add_announcement' })
    },
    methods: {
      _handleClickActionLocation (transition) {
        this._handleClickCreateLocation(transition)

        let event = (transition === PUBLISH) ? 'location_publication' : 'location_draft'
        this.$gtm.trackEvent({ event })
      },
      _handleClickCreateLocation (transition) {
        this.fields.transition = transition
        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            this._createLocation().then(() => {
              const { username } = this.user
              const { transition } = this.fields
              this.$localStorage.remove('board.create.location')
              this.$store.dispatch('board/location/setHasNewLocationsData', true)

              if (transition === PUBLISH) {
                if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
                  Toast({ message: 'Объявление успешно опубликовано', iconClass: 'mintui mintui-success' })
                  this.$router.push({ name: 'board.locations.index' })
                } else {
                  const openSuccessCreateBoardModal = this.$localStorage.get('success.board.create', false, Boolean)

                  if (openSuccessCreateBoardModal === false) {
                    this.$modalRouter.push({ name: 'success.board.create' })
                  } else Toast({ message: 'Объявление отправлено на модерацию.', iconClass: 'mintui mintui-success' })
                  this.$router.push({ name: 'board.locations.user', params: { username } })
                }

                this.$nsWebViewInterface.emit('rating', createLocation)
              } else {
                Toast({ message: 'Объявление сохранено в черновик.', iconClass: 'mintui mintui-success' })
                this.$router.push({ name: 'board.locations.user', params: { username } })
              }
            }).catch(() => this._scrollToErrorFields())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: -40 })
        Toast({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' })
      },
      _createLocation () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          this.loadingForm = true

          let data = this._.cloneDeep(this.fields)
          if (this.isRoom === false) {
            this.$delete(data, 'roomType')
            this.$delete(data, 'roomHeight')
            this.$delete(data, 'exterior')
          }

          this.$api.post('api/v2/boards/locations', data).then((response) => {
            const { data: { data } } = response

            this.loadingForm = false
            Indicator.close()
            resolve(data)
          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.loadingForm = false
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create board location')
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
