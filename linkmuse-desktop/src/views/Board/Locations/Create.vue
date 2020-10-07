<script>
  import { has, HEADER_HEIGHT } from '@utils'

  import formBoard from '@modules/Board/mixins/form.js'
  import template from '@modules/Board/Location/extends/Form.vue'
  import formLocation from '@modules/Board/Location/mixins/form.js'

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
      },
      showReset () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
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
      if (fields && typeof fields === 'object')  {
        Object.assign(this.fields, fields)
      }

      if (this.fields.countryId) {
        this._handleChangeCountrySelect(this.fields.countryId, false, true)
      }

      if (this.fields.type) {
        this.$nextTick(() => {
          if (this.initWysiwyg === false) {
            this.initWysiwyg = true
            this.$refs['wysiwygDescription'].initialize()
          }
        })
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

              if (transition === PUBLISH) {
                if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
                  this.$notify({
                    type: 'success',
                    title: 'Успешно',
                    text: 'Объявление успешно опубликовано.'
                  })
                  this.$router.push({ name: 'board.locations.index' })
                } else {
                  this.$notify({
                    type: 'success',
                    title: 'Успешно',
                    text: 'Объявление отправлено на модерацию.'
                  })
                  this.$router.push({ name: 'board.locations.user', params: { username } })
                }
              } else {
                this.$notify({
                  type: 'success',
                  title: 'Успешно',
                  text: 'Объявление сохранено в черновик.'
                })
                this.$router.push({ name: 'board.locations.user', params: { username } })
              }
            }).catch(() => this._scrollToErrorFields())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
        this.$notify({ type: 'error', title: 'Ошибка', text: 'Проверьте правильность ввода.' })
      },
      _createLocation () {
        return new Promise((resolve, reject) => {

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
            resolve(data)
          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.loadingForm = false
            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при создании локации.'
            })

            reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create board location')
          })
        })
      },
      _handleClickClearForm () {
        this._clearForm().then(() => {
          this.$notify({
            type: 'success',
            title: 'Успешно',
            text: 'Форма очищена.'
          })
          this.$gtm.trackEvent({ event: 'clear_form' })
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
