<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  import formBoard from '@modules/Board/mixins/form.js'
  import template from '@modules/Board/Casting/extends/Form.vue'
  import formCasting from '@modules/Board/Casting/mixins/form.js'
  import { PUBLISH, DRAFT } from '@modules/Board/Casting/Enums/CastingTransition'

  export default {
    extends: template,
    mixins: [formBoard, formCasting],
    metaInfo: {
      title: 'Редактирование кастинга'
    },
    async asyncData ({ store, route }) {
      await store.dispatch('board/casting/getSources', Number(route.params.id))
      await store.dispatch('board/casting/clearCastingFields')
      await store.dispatch('board/casting/getCastingById', {
        id: Number(route.params.id),
        editable: true
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error edit casting', url })
      })
    },
    data () {
      return {
        edit: true
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        error: 'board/casting/getCastingError',
        casting: 'board/casting/getCastingData',
        loading: 'board/casting/getCastingLoading'
      }),
      title () {
        return 'Редактирование объявления'
      },
      isCurrentUser () {
        return (this.user && this.edit && this.user.id === this.casting.user.id)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
    },
    created () {
      this.uploads = this.casting.references || []
      this.$nextTick(() => {
        this._setFieldsOnCastingEdit().then(() => {
          this.$nextTick(() => {
            if (this.fields.countryId && this.sources.cities.length === 0) {
              this._handleChangeCountrySelect(this.fields.countryId, false, true).then(() => {
                this.fields.cityId = (this.casting.city && has(this.casting.city, 'id')) ? this.casting.city.id : null
              }).catch(() => {})
            }
          })
        })
      })
    },
    mounted () {
      this.initWysiwyg = true
      this.$refs['wysiwygDescription'].initialize()
    },
    methods: {
      _handleClickActionCasting (transition) {
        this._handleClickUpdateCasting(transition)

        if (this.isAdmin) {
          let event = transition === PUBLISH ? 'b_opublikovat' : 'b_sohranit-chernovik'
          this.$gtm.trackEvent({ event })
        }
      },
      _handleClickUpdateCasting (transition) {
        if (this.isAdmin && this.isCurrentUser === false) {
          this.$delete(this.fields, 'transition')
        } else this.fields.transition = transition

        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            const isAfterStart = this.$moment().subtract('1', 'day').isAfter(this.$moment(this.fields.dateStart, 'DD.MM.YYYY'))
            const isSameStart = this.$moment(this.casting.dateStart, 'DD-MM-YYYY').isSame(this.$moment(this.fields.dateStart, 'DD.MM.YYYY'))

            const isAfterWorkStart = this.$moment().subtract('1', 'day').isAfter(this.$moment(this.fields.dateWorkStart, 'DD.MM.YYYY'))
            const isSameWorkStart = this.$moment(this.casting.dateWorkStart, 'DD-MM-YYYY').isSame(this.$moment(this.fields.dateWorkStart, 'DD.MM.YYYY'))

            if ((isAfterStart && isSameStart === false) || (isAfterWorkStart && isSameWorkStart === false)) {
              this.$confirm({
                cancelTxt: 'отмена',
                confirmTxt: 'подтвердить',
                title: 'Подтвердите действие',
                message: 'Проверьте актуальность указанной даты. Кастинги с прошедшими датами могут не пройти модерацию.'
              }).then(() => {
                this.$nextTick(() => this._handleUpdateCasting())
              }).catch(() => {})
            } else this.$nextTick(() => this._handleUpdateCasting())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _handleUpdateCasting () {
        this._updateCasting().then(() => {
          if (this.isAdmin) {
            this.$notify({
              type: 'success',
              title: 'Успешно',
              text: 'Кастинг успешно изменен.'
            })

            let { id, slug } = this.casting

            return this.$router.push({ name: 'board.castings.show', params : { id, slug } })
          }

          const { username } = this.user
          const { transition } = this.fields

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
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: -40 })
      },
      _updateCasting () {
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
          this.$delete(data, 'references')

          if (data.dateEnd) data.dateEnd = this.$moment(data.dateEnd).format('DD.MM.YYYY')
          if (data.dateStart) data.dateStart = this.$moment(data.dateStart).format('DD.MM.YYYY')
          if (data.dateWorkEnd) data.dateWorkEnd = this.$moment(data.dateWorkEnd).format('DD.MM.YYYY')
          if (data.dateWorkStart) data.dateWorkStart = this.$moment(data.dateWorkStart).format('DD.MM.YYYY')

          this.$api.patch(`api/v2/boards/castings/${this.casting.id}`, data).then((response) => {
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
      _setFieldsOnCastingEdit () {
        return new Promise((resolve, reject) => {
          try {
            this.fields.categoryId = (this.casting.category && has(this.casting.category, 'id')) ? this.casting.category.id : null

            this.fields.countryId = (this.casting.country && has(this.casting.country, 'id')) ? this.casting.country.id : null

            if (this.sources['cities'] && this.sources.cities.length) {
              this.fields.cityId = (this.casting.city && has(this.casting.city, 'id')) ? this.casting.city.id : null
            }

            this.fields.professions = (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((p => p.id)) : []
            this.fields.genders = (this.casting.genders && this.casting.genders.length) ? this.casting.genders.map((gender => gender.id)) : []

            this.fields.name = this.casting.name || null
            this.fields.ageTo = this.casting.ageTo ? String(this.casting.ageTo) : null
            this.fields.ageFrom = this.casting.ageFrom ? String(this.casting.ageFrom) : null
            this.fields.address = this.casting.address || null
            this.fields.isOnline = Number(this.casting.isOnline)

            this.fields.forTrusted = Number(this.casting.forTrusted)

            this.fields.description = this.casting.description || null
            this.fields.characterType = this.casting.characterType || null

            this.fields.email = this.casting.email || null
            this.fields.phone = this.casting.phone || null
            this.fields.other = this.casting.other || null

            this.fields.dateEnd = this.casting.dateEnd ? this.$moment( this.casting.dateEnd, 'DD-MM-YYYY' ).toDate() : null
            this.fields.dateStart = this.casting.dateStart ? this.$moment( this.casting.dateStart, 'DD-MM-YYYY' ).toDate() : null

            this.fields.dateWorkEnd = this.casting.dateWorkEnd ? this.$moment( this.casting.dateWorkEnd, 'DD-MM-YYYY' ).toDate() : null
            this.fields.dateWorkStart = this.casting.dateWorkStart ? this.$moment( this.casting.dateWorkStart, 'DD-MM-YYYY' ).toDate() : null

            this.fields.fee = this.casting.fee.available ? 1 : 0
            this.fields.feeAmount = (this.casting.fee.amount && Number(this.casting.fee.amount)) ? Number(this.casting.fee.amount) : null
            this.fields.feeTypeId = (this.casting.fee && has(this.casting.fee, 'type.id')) ? this.casting.fee.type['id'] : null
            this.fields.feeCurrencyId = (this.casting.fee && has(this.casting.fee, 'currency.id')) ? this.casting.fee.currency['id'] : null
            resolve && resolve(true)
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
