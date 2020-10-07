<script>
  import { has, HEADER_HEIGHT } from '@utils'

  import formBoard from '@modules/Board/mixins/form.js'
  import template from '@modules/Board/Casting/extends/Form.vue'
  import formCasting from '@modules/Board/Casting/mixins/form.js'

  import { PUBLISH, DRAFT } from '@modules/Board/Casting/Enums/CastingTransition'

  export default {
    mixins: [formBoard, formCasting],
    extends: template,
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
        return 'Новое объявление'
      },
      showReset () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
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
      if (fields && typeof fields === 'object')  {
        Object.assign(this.fields, fields)

        if (fields.dateEnd) this.fields.dateEnd = this.$moment(fields.dateEnd).toDate()
        if (fields.dateStart) this.fields.dateStart = this.$moment(fields.dateStart).toDate()
        if (fields.dateWorkEnd) this.fields.dateWorkEnd = this.$moment(fields.dateWorkEnd).toDate()
        if (fields.dateWorkStart) this.fields.dateWorkStart = this.$moment(fields.dateWorkStart).toDate()
      }

      if (this.fields.countryId) {
        this._handleChangeCountrySelect(this.fields.countryId, false, true)
      }

      if (this.fields.categoryId) {
        this.$nextTick(() => {
          if (this.initWysiwyg === false) {
            this.initWysiwyg = true
            this.$refs['wysiwygDescription'].initialize()
          }
        })
      }
    },
    methods: {
      _handleClickActionCasting (transition) {
        this._handleClickCreateCasting(transition)

        let event = transition === PUBLISH ? 'b_opublikovat' : 'b_sohranit-chernovik'
        this.$gtm.trackEvent({ event })
      },
      _handleClickCreateCasting (transition) {
        this.fields.transition = transition
        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            this._createCasting().then(() => {
              const { username } = this.user
              const { transition } = this.fields
              this.$localStorage.remove('board.create')

              if (transition === PUBLISH) {
                if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
                  this.$notify({
                    type: 'success',
                    title: 'Успешно',
                    text: 'Объявление успешно опубликовано.'
                  })
                  this.$router.push({ name: 'board.castings.index' })
                } else {
                  this.$notify({
                    type: 'success',
                    title: 'Успешно',
                    text: 'Объявление отправлено на модерацию.'
                  })
                  this.$router.push({ name: 'board.castings.user', params: { username } })
                }
              } else {
                this.$notify({
                  type: 'success',
                  title: 'Успешно',
                  text: 'Объявление сохранено в черновик.'
                })
                this.$router.push({ name: 'board.castings.user', params: { username } })
              }
            }).catch(() => this._scrollToErrorFields())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
      },
      _createCasting () {
        return new Promise((resolve, reject) => {

          this.loadingForm = true

          let data = this._.cloneDeep(this.fields)
          if (!Boolean(Number(this.fields.fee))) {
            this.$delete(data, 'feeAmount')
            this.$delete(data, 'feeTypeId')
            this.$delete(data, 'feeCurrencyId')
          }

          if (!Boolean(Number(this.isForActorAndModel))) {
            this.$delete(data, 'forTrusted')
          }

          if (data.dateEnd) data.dateEnd = this.$moment(data.dateEnd).format('DD.MM.YYYY')
          if (data.dateStart) data.dateStart = this.$moment(data.dateStart).format('DD.MM.YYYY')
          if (data.dateWorkEnd) data.dateWorkEnd = this.$moment(data.dateWorkEnd).format('DD.MM.YYYY')
          if (data.dateWorkStart) data.dateWorkStart = this.$moment(data.dateWorkStart).format('DD.MM.YYYY')

          this.$api.post('api/v2/boards/castings', data).then((response) => {
            const { data: { data } } = response

            this.loadingForm = false
            resolve(data)
          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.loadingForm = false
            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при создании кастинга.'
            })

            reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create board casting')
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
