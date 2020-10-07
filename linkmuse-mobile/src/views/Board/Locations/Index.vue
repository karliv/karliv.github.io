<template>
  <div class="page page_feed">
    <mt-loadmore :top-method="_handleLoadTopLocations" @top-status-change="_handleTopStatusChangeLocations" ref="loadmore">
      <div class="page__header page__header_feed">
        <div class="row justify_between mb_4">
          <div class="heading_h4">{{ $t('location.location.ads') }}</div>
          <a href="javascript:void(0)" @click.stop.prevent="_handleClickCreateBoard" class="btn btn_round btn_primary btn_plus">
            <span>
              <svg class="icon icon_size_16 icon_fill_white">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
              </svg>
            </span>
          </a>
        </div>
        <div class="row">
          <navigation-categories></navigation-categories>
        </div>
      </div>
      <div :class="['page__content', 'page__content_feed', { 'fsfads': isEmpty }]" ref="wrapper">
        <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height, paddingBottom: '90px' }">

          <location-card :location="location" v-for="location in locations" :key="location.id"
                        @actionSheet="_handleActionSheetLocation"
                        @changeState="_handleChangeState">
          </location-card>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>
          <div class="page__plug page__plug_feed_empty" v-if="(isEmpty === true)">{{ $t('location.nothing-found.nothing-found') }}</div>
        </div>

        <button :class="['btn', 'btn_icon', 'btn_primary', 'btn_filters', { active: hasFilter }]" @click="_toggleFilter">
          <svg class="icon icon_size_16 btn__icon_left icon_fill_white">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
          </svg>
          {{ $t('location.location.filters') }}
        </button>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>

    <location-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></location-filter>
    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheet" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { omitEmpty, getDataAttribute, HEIGHT_FOOTER, isBrowser } from '@utils'
  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Location/Enums/LocationState'
  import { EQUIPMENT_RENTAL, PARKING, INTERIOR, EXTERIOR, DRESSING_ROOM, SCENE, CHROMAKEY, CYCLORAMA, DAYLIGHT } from '@modules/Board/Location/Enums/LocationEquip'

  import SeoFilterLocation from '@modules/SEO/mixins/Locations'
  import LocationCard from '@components/Board/Location/Location.vue'
  import { getFieldsFromRoute } from '@modules/SEO/mixins/Locations'
  import LocationFilter from '@components/Board/Location/Filter.vue'
  import NavigationCategories from '@components/Board/NavigationCategories.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/location/getField',
    mutationType: 'board/location/updateField',
  })

  export default {
    mixins: [SeoFilterLocation],
    components: { 'mt-loadmore': Loadmore, LocationFilter, LocationCard, NavigationCategories },
    metaInfo () {
      return {
        title: this.seoTitle,
        meta: [
          { name: 'description', content: this.seoDescription },
        ]
      }
    },
    data () {
      return {
        height: 0,
        openFilter: false,
        actionSheet: {
          actions: [],
          value: false,
          location: { id: null, slug: null }
        },
        loadmore: { topStatus: null }
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route

      const loadingSources = store.getters['board/location/getLoadingSources']
      const initializedSources = store.getters['board/location/getInitializedSources']

      if (loadingSources === false && initializedSources === false) {
        await store.dispatch('board/location/getSources').catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error sources locations', url })
        })
      }

      const defaultFields = store.getters['board/location/getCatalogDefaultFieldsFilter']
      const fields = getFieldsFromRoute(route, store.getters['board/location/getSources'], omitEmpty(Object.assign(_.clone(defaultFields), query), { omitZero: false }))
      const isEqualFilter = _.isEqual(fields, omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/location/getField']('locations.filter')), { omitZero: false }))

      // TODO: Convert type input value. ( route === string, v-model === number )
      // console.log(fields)
      // console.log(omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/location/getField']('locations.filter')), { omitZero: false }))

      const hasNew = store.getters['board/location/getLocationsHasNew']
      const loadingData = store.getters['board/location/getLocationsLoading']
      const initializedData = store.getters['board/location/getInitializedData']

      if ( loadingData === false && (isEqualFilter === false || initializedData === false || hasNew === true)) {
        await store.dispatch('board/location/clearLocations')
        await store.commit('board/location/updateField', { path: 'locations.filter', value: Object.assign(_.clone(defaultFields), fields) })
        await store.dispatch('board/location/fetchLocations', { fields, offset: 0 }).then((total) => {
          store.dispatch('board/location/setInitializedLocationsData', true)
          if (typeof window !== 'undefined' && total < 4) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }).catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error fetch locations', url })
        })
      }
    },
    computed: {
      ...mapFields({
        fields: 'locations.filter',
        defaultFields: 'locations.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/location/getSources',
        total: 'board/location/getLocationsTotal',
        error: 'board/location/getLocationsError',
        offset: 'board/location/getLocationsOffset',
        locations: 'board/location/getLocationsData',
        loading: 'board/location/getLocationsLoading',
        infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
      }),
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      hasFilter () {
        const fields = this._.omit(this.fields, ['name'])
        const defaultFields = this._.omit(this.defaultFields, ['name'])

        return (this._.isEqual(fields, defaultFields) === false)
      },
      citiesPlaceholder () {
        return this.fields['countryId'] ? 'Не выбран' : 'Укажите страну'
      },
      equipmentAndFacilities () {
        return [
          { id: EQUIPMENT_RENTAL, text: this.$t('dictionary.equipment-services.' + EQUIPMENT_RENTAL, 'web_ru') },
          { id: PARKING, text: this.$t('dictionary.equipment-services.' + PARKING, 'web_ru') },
          { id: INTERIOR, text: this.$t('dictionary.equipment-services.' + INTERIOR, 'web_ru') },
          { id: EXTERIOR, text: this.$t('dictionary.equipment-services.' + EXTERIOR, 'web_ru') },
          { id: DRESSING_ROOM, text: this.$t('dictionary.equipment-services.' + DRESSING_ROOM, 'web_ru') },
          { id: SCENE, text: this.$t('dictionary.equipment-services.' + SCENE, 'web_ru') },
          { id: CHROMAKEY, text: this.$t('dictionary.equipment-services.' + CHROMAKEY, 'web_ru') },
          { id: CYCLORAMA, text: this.$t('dictionary.equipment-services.' + CYCLORAMA, 'web_ru') },
          { id: DAYLIGHT, text: this.$t('dictionary.equipment-services.' + DAYLIGHT, 'web_ru') }
        ]
      }
    },
    created () {
      const { query } = this.$route
      this._.merge(this.fields, query)
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    beforeRouteUpdate (to, from, next) {
      const { query, params } = to

      if (has(params, 'filter') || Object.keys(query).length) return next()

      this._clearFilter().then(() => {
        console.log('Cleared locations...')
        this.seoGenerate()
        next()
      }).catch(() => {
        this.seoGenerate()
        next()
      })
    },
    methods: {
      ...mapActions({
        fetchLocations: 'board/location/fetchLocations',
        clearLocations: 'board/location/clearLocations',
        _setInitializedLocationsData: 'board/location/setInitializedLocationsData'
      }),
      _handleClickCreateBoard () {
        this.$router.push({ name: 'board.create' })
      },
      _handleLoadTopLocations () {
        let { fields } = this
        this._setInitializedLocationsData(false)
        this.fetchLocations({ fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
          this._setInitializedLocationsData(true)
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeLocations (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchLocations({ fields, offset })
      },
      _handleApplyFilter () {
        this._toggleFilter()
        let { fields } = this
        const { query, params } = this.getSeoRouterParams(omitEmpty(fields, { omitZero: false }))

        this.clearLocations().then(() => {
          this._setInitializedLocationsData(false)

          this.$router.replace({ name: 'board.locations.index', query, params }, () => {
            this.seoGenerate()
            this._setInitializedLocationsData(true)
          })
          this.$gtm.trackEvent({ event: 'location_filter' })
        }).catch(() => {})
      },
      _clearFilter () {
        return new Promise((resolve, reject) => {
          const fields = this.fields

          try {
            this.fields = this._.clone(this.defaultFields)

            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleHideFilter () {
        this._toggleFilter()
      },
      _toggleFilter () {
        return new Promise((resolve, reject) => {
          try {
            this.openFilter = (!this.openFilter)
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/location/setFieldLocationsData', { id, key, value })
      },
      _handleActionSheetLocation ( locationId, isCurrentUser = false ) {
        let location = this._.find(this.locations, (c) => c.id === locationId)
        if (location) {
          const { id, slug } = location
          Object.assign(this.actionSheet.location, { id, slug })

          if (isCurrentUser === true && location.state !== ARCHIVED || this.isAdmin) {
            this.actionSheet.actions.push({
              name: this.$t('location.location.edit'),
              method: this._handleClickEditLocation
            })
          }

          if (isCurrentUser === true) {
            if (location.state === PUBLISHED) {
              this.actionSheet.actions.push({
                name: 'В архив',
                method: this._handleClickArchiveLocation
              })
            }
          }

          if (isCurrentUser === false) {
            this.actionSheet.actions.push({
              name: this.$t('location.location.report'),
              method: this._handleClickAbuseLocation
            })
          }

          if (this.isAdmin === true && location.state === MODERATION) {
            this.actionSheet.actions.push({
              name: 'Одобрить',
              method: this._handleClickApproveLocation
            })
          }

          this.actionSheet.value = true
        }
      },
      _handleInputActionSheet (value) {
        if (value === false) {
          this.actionSheet = {
            actions: [],
            value: false,
            location: { id: null, value: null }
          }
        }
      },
      _handleClickEditLocation () {
        let { id } = this.actionSheet.location
        this.$router.push({ name: 'board.locations.edit', params: { id } })
      },
      _handleClickArchiveLocation () {
        let { id } = this.actionSheet.location

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive(id)
        }).catch(() => {})
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post(`api/v2/boards/locations/${id}/archive`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/location/setFieldLocationsData', { id, key: 'state', value: ARCHIVED })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft location')
          })
        })
      },
      _handleClickAbuseLocation () {
        let { id } = this.actionSheet.location
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_location' })
      },
      _handleClickApproveLocation () {
        Indicator.open()
        let { id } = this.actionSheet.location

        this.$api.post(`/api/admin/v1/boards/locations/${id}/approve`).then((response) => {
          Indicator.close()
          let { data: { data } } = response
          this.$store.dispatch('board/location/setFieldLocationsData', { id, key: 'state', value: PUBLISHED })
        }, (err) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      }
    }
  }
</script>

<style scoped>

</style>
