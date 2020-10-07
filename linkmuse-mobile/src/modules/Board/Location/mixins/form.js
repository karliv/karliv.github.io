import { has } from '@utils'
import { mapGetters } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import { createHelpers } from 'vuex-map-fields'
import Dropzone from '@components/UI/Dropzone/Index.vue'

import { PUBLISH, DRAFT } from '@modules/Board/Location/Enums/LocationTransition'
import { ROOM, CONCERT_HALL, THEATER, PAVILION, PHOTO_STUDIO } from '@modules/Board/Location/Enums/LocationType'
import { EQUIPMENT_RENTAL, PARKING, INTERIOR, EXTERIOR, DRESSING_ROOM, SCENE, CHROMAKEY, CYCLORAMA, DAYLIGHT } from '@modules/Board/Location/Enums/LocationEquip'

import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

const { mapFields } = createHelpers({
  getterType: 'board/location/getField',
  mutationType: 'board/location/updateField'
})

const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

export default {
  mixins: [AjaxSelectCity],
  components: { 'lm-dropzone': Dropzone },
  data () {
    return {
      has,
      DRAFT,
      PUBLISH,
      EQUIPMENT_RENTAL,
      PARKING,
      INTERIOR,
      EXTERIOR,
      DRESSING_ROOM,
      SCENE,
      CHROMAKEY,
      CYCLORAMA,
      DAYLIGHT,
      state: null,
      uploads: [],
      noSsr: false,
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
      hasPhone: 'auth/hasPhone',
      profile: 'auth/getProfile',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered',
      sources: 'board/location/getSources'
    }),
    hasType () {
      return (this.fields.type !== null)
    },
    hasRoomType () {
      return (this.fields.roomType !== null)
    },
    hasDimension () {
      return (!!this.fields.dimension)
    },
    hasPrice () {
      return (!!this.fields.price)
    },
    hasPhotos () {
      return (!!this.fields.photos.length)
    },
    hasCountry () {
      return (!!this.fields.countryId)
    },
    hasCity () {
      return (!!this.fields.cityId)
    },
    hasPhoneField () {
      return (!!this.fields.phone)
    },
    isPublishLocationTransition () {
      return (this.fields.transition === PUBLISH)
    },
    currencies () {
      return this.sources['currencies'].map((curr) => { return { id: curr.id, text: curr.symbol } })
    },
    canPublished () {
      return this.hasType && this.hasDimension && this.hasPrice && this.hasPhotos && this.hasCountry && this.hasCity && this.hasPhoneField && (!this.isRoom || (this.isRoom && this.hasRoomType))
    },
    placeholderDescription () {
      return 'Расскажите в подробностях об объявлении. Опишите необходимые параметры, возможности и время работы\n\n' +
      'Информация из описания должна соответствовать всем заполненным полям\n\n' +
      'В описании запрещено указывать контактные данные и ссылки на другие ресурсы\n\n '
    },
    isRoom () {
      return (this.hasType && this.fields.type === ROOM)
    },
    isConcertHall () {
      return (this.hasType && this.fields.type === CONCERT_HALL)
    },
    isTheater () {
      return (this.hasType && this.fields.type === THEATER)
    },
    isPavilion () {
      return (this.hasType && this.fields.type === PAVILION)
    },
    isPhotoStudio () {
      return (this.hasType && this.fields.type === PHOTO_STUDIO)
    },
    equipmentAndFacilities () {
      return [
        { id: EQUIPMENT_RENTAL, text: this.$t('dictionary.equipment-services.' + EQUIPMENT_RENTAL, 'web_ru'), field: this._.camelCase(EQUIPMENT_RENTAL) },
        { id: PARKING, text: this.$t('dictionary.equipment-services.' + PARKING, 'web_ru'), field: this._.camelCase(PARKING) },
        { id: INTERIOR, text: this.$t('dictionary.equipment-services.' + INTERIOR, 'web_ru'), field: this._.camelCase(INTERIOR) },
        { id: EXTERIOR, text: this.$t('dictionary.equipment-services.' + EXTERIOR, 'web_ru'), field: this._.camelCase(EXTERIOR) },
        { id: DRESSING_ROOM, text: this.$t('dictionary.equipment-services.' + DRESSING_ROOM, 'web_ru'), field: this._.camelCase(DRESSING_ROOM) },
        { id: SCENE, text: this.$t('dictionary.equipment-services.' + SCENE, 'web_ru'), field: this._.camelCase(SCENE) },
        { id: CHROMAKEY, text: this.$t('dictionary.equipment-services.' + CHROMAKEY, 'web_ru'), field: this._.camelCase(CHROMAKEY) },
        { id: CYCLORAMA, text: this.$t('dictionary.equipment-services.' + CYCLORAMA, 'web_ru'), field: this._.camelCase(CYCLORAMA) },
        { id: DAYLIGHT, text: this.$t('dictionary.equipment-services.' + DAYLIGHT, 'web_ru'), field: this._.camelCase(DAYLIGHT) }
      ]
    },
    showReset () {
      const fields = this._.omit(this.fields)
      const defaultFields = this._.omit(this.defaultFields)

      return (this._.isEqual(fields, defaultFields) === false)
    }
  },

  created () {

  },

  mounted () {
    setTimeout(() => { this.noSsr = true }, 1000)

    if (!this.fields['currencyId']) {
      this.fields['currencyId'] = (this.sources['currencies'].length) ? this.sources['currencies'][0]['id'] : null
    }
  },

  methods: {
    equipCondition (key) {
      switch (key) {
        case INTERIOR:
          return this.isRoom === true || this.isPhotoStudio === true
        case EXTERIOR:
          return this.isRoom === true
        case DRESSING_ROOM:
        case EQUIPMENT_RENTAL:
          return this.isConcertHall === true || this.isTheater === true || this.isPavilion === true || this.isPhotoStudio === true
        case SCENE:
          return this.isTheater === true
        case CHROMAKEY:
        case CYCLORAMA:
          return this.isPavilion === true || this.isPhotoStudio === true
        case DAYLIGHT:
          return this.isPhotoStudio === true
        default:
          return true
      }
    },
    _handleBlurUpdateField () {
      if (this.edit === false) {
        this.$localStorage.set('board.create.location', JSON.stringify(this.fields))
      }
    },
    _handleClickPreviousPage () {
      if (this.edit === false && this.hasType && this.isAuthorized && this.isRegistered && this.hasEmail) {
        this.$confirm({
          cancelTxt: 'выйти',
          confirmTxt: 'отмена',
          title: 'Вы покидаете страницу',
          message: 'Внесенные данные не сохранятся, желаете покинуть страницу?'
        }).then(() => {
          // this._handleClickCreateLocation(DRAFT)
        }).catch(() => this._handlePreviousPage())
      } else this._handlePreviousPage()
    },
    _handlePreviousPage () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else this.$router.push({ name: 'board.locations.index' })
    },
    /**
     * Handle change type select
     * @private
     */
    _handleInputType () {
      if (this.fields.type) {
        setTimeout(() => {
          if (this.isRoom === false) {
            this.$scrollTo('#form__group_declaration_dimension', 500, { offset: -50 })
          } else this.$scrollTo('#form__group_declaration_roomType', 500, { offset: -50 })
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
      this.fields.photos = items.map(item => item.id)
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
      this.$validator.errors.remove('photos')

      data.append('photo', file)

      let url = (this.edit && this.location)
        ? `api/v2/boards/locations/${this.location.id}/photos`
        : 'api/v2/boards/locations/photos'

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
      }).catch(() => {
        error(item.uid)
        console.error('Error upload photo')
      })
    },
    /**
     * Removed item on DropZone
     * @param item
     * @param remove
     * @private
     */
    _handleAttachRemove (item, remove) {
      this.$api.delete(`api/v2/boards/locations/photos/${item.id}`).then(response => {
        remove(item.uid)
      }).catch(() => {
        remove(item.uid, false)
        throw new Error('Error delete photo')
      })
    },
    setPlaceLocation (place) {
      const address = {
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }

      Object.assign(this.fields.address, address)

      this._handleBlurUpdateField()
    }
  }
}
