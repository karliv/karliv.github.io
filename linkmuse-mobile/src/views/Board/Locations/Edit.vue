<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
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
      title: 'Редактирование локации'
    },
    async asyncData ({ store, route }) {
      await store.dispatch('board/location/getSources', Number(route.params.id))
      await store.dispatch('board/location/clearLocationFields')
      await store.dispatch('board/location/getLocationById', {
        id: Number(route.params.id),
        editable: true
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error edit location', url })
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
        error: 'board/location/getLocationError',
        location: 'board/location/getLocationData',
        loading: 'board/location/getLocationLoading'
      }),
      title () {
        return 'Редактирование объявления'
      },
      isCurrentUser () {
        return (this.user && this.edit && this.user.id === this.location.user.id)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
    },
    created () {
      this.uploads = this.location.photos || []
      this.fields.photos = this.uploads.map(item => item.id)

      this.$nextTick(() => {
        this._setFieldsOnLocationEdit().then(() => {
          this.$nextTick(() => {
            if (this.fields.countryId && this.sources.cities.length === 0) {
              this._handleChangeCountrySelect(this.fields.countryId, false, true).then(() => {
                this.fields.cityId = (this.location.city && has(this.location.city, 'id')) ? this.location.city.id : null
              }).catch(() => {})
            }
          })
        })
      })
    },
    methods: {
      _handleClickActionLocation (transition) {
        this._handleClickUpdateLocation(transition)

        let event = (transition === PUBLISH) ? 'location_publication' : 'location_draft'
        this.$gtm.trackEvent({ event })
      },
      _handleClickUpdateLocation (transition) {
        if (this.isAdmin && this.isCurrentUser === false) {
          this.$delete(this.fields, 'transition')
        } else this.fields.transition = transition

        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            this.$nextTick(() => this._handleUpdateLocation())
          }).catch(() => this._scrollToErrorFields())
        })
      },
      _handleUpdateLocation () {
        this._updateLocation().then(() => {
          let { id, slug } = this.location

          if (this.isAdmin && this.isCurrentUser === false) {
            Toast({ message: 'Локация успешно изменена.', iconClass: 'mintui mintui-success' })

            return this.$router.push({ name: 'board.locations.show', params : { id, slug } })
          }

          const { username } = this.user
          const { transition } = this.fields
          this.$store.dispatch('board/location/setHasNewLocationsData', true)

          if (transition === PUBLISH) {
            if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
              Toast({ message: 'Объявление успешно опубликовано', iconClass: 'mintui mintui-success' })
              // this.$router.push({ name: 'board.locations.index' })
              this.$router.push({ name: 'board.locations.show', params : { id, slug } })
            } else {
              Toast({ message: 'Объявление отправлено на модерацию.', iconClass: 'mintui mintui-success' })
              // this.$router.push({ name: 'board.locations.user', params: { username } })
              this.$router.push({ name: 'board.locations.show', params : { id, slug } })
            }

            this.$nsWebViewInterface.emit('rating', createLocation)
          } else {
            Toast({ message: 'Объявление сохранено в черновик.', iconClass: 'mintui mintui-success' })
            // this.$router.push({ name: 'board.locations.user', params: { username } })
            this.$router.push({ name: 'board.locations.show', params : { id, slug } })
          }
        }).catch(() => this._scrollToErrorFields())
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: -40 })
        Toast({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' })
      },
      _updateLocation () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          this.loadingForm = true

          let data = this._.cloneDeep(this.fields)
          if (this.isRoom === false) {
            this.$delete(data, 'roomType')
            this.$delete(data, 'roomHeight')
            this.$delete(data, 'exterior')
          }

          this.$delete(data, 'photos')

          this.$api.patch(`api/v2/boards/locations/${this.location.id}`, data).then((response) => {
            const { data: { data } } = response

            Indicator.close()
            this.loadingForm = false
            resolve(data)
          }, (error) => {
            const { response: { data }, response: { status }} = error

            Indicator.close()
            this.loadingForm = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create board location')
          })
        })
      },
      _setFieldsOnLocationEdit () {
        return new Promise((resolve, reject) => {
          try {
            this.fields.type = (this.location.type && has(this.location.type, 'id')) ? this.location.type.id : null

            this.fields.roomType = (has(this.location.roomType, 'id') && this.location.roomType) ? this.location.roomType.id : null
            this.fields.roomHeight = (Number(this.location.roomHeight)) ? Number(this.location.roomHeight) : null

            this.fields.price = (Number(this.location.price)) ? Number(this.location.price) : null
            this.fields.currencyId = (has(this.location, 'currency.id')) ? this.location.currency['id'] : null
            this.fields.paymentPeriod = (has(this.location, 'paymentPeriod.id')) ? this.location.paymentPeriod['id'] : null

            this.fields.countryId = (this.location.country && has(this.location.country, 'id')) ? this.location.country.id : null

            if (this.sources['cities'] && this.sources.cities.length) {
              this.fields.cityId = (this.location.city && has(this.location.city, 'id')) ? this.location.city.id : null
            }

            this.fields.dimension = (Number(this.location.dimension)) ? Number(this.location.dimension) :  null
            this.fields.equipment = this.location.equipment || null
            this.fields.passSystem = this.location.passSystem || null
            this.fields.facilities = this.location.facilities || null
            this.fields.description = this.location.description || null

            this.fields.site = this.location.site || null
            this.fields.email = this.location.email || null
            this.fields.phone = this.location.phone || null
            this.fields.other = this.location.other || null

            this.fields.scene = this.location.scene ? 1 : 0
            this.fields.parking = this.location.parking ? 1 : 0
            this.fields.exterior = this.location.exterior ? 1 : 0
            this.fields.interior = this.location.interior ? 1 : 0
            this.fields.daylight = this.location.daylight ? 1 : 0
            this.fields.cyclorama = this.location.cyclorama ? 1 : 0
            this.fields.chromakey = this.location.chromakey ? 1 : 0
            this.fields.dressingRoom = this.location.dressingRoom ? 1 : 0
            this.fields.equipmentRental = this.location.equipmentRental ? 1 : 0

            if (has(this.location, 'address')) {
              this.fields.address['lat'] = (has(this.location.address, 'lat')) ? this.location.address.lat : null
              this.fields.address['lng'] = (has(this.location.address, 'lng')) ? this.location.address.lng : null
              this.fields.address['address'] = (has(this.location.address, 'address')) ? this.location.address.address : null
            }
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
