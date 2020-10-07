<template>
  <div class="page page_feed">
    <template v-if="(isCurrentUser === false)">
      <div class="row">
        <router-link :to="{ name: 'user.show', params: { username } }">
          <div class="profile">
            <div class="profile__name">{{ user.fullname }}</div>
          </div>
        </router-link>
      </div>
    </template>

    <div class="page__header page__header_feed">
      <div class="row row_justify_between mb_3">
        <div class="heading_h4">{{ (isCurrentUser) ? 'Мои объявления' : 'Объявления'  }}</div>
        <template v-if="(isCurrentUser === true)">
          <router-link :to="{ name: 'board.locations.create' }" class="btn btn_round btn_primary btn_plus">
            <span>
              <svg class="icon icon_size_16 icon_fill_white">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
              </svg>
            </span>
          </router-link>
        </template>
      </div>
      <div class="row">
        <navigation-categories-user/>
      </div>
    </div>
    <div :class="['page__content', 'page__content_feed', { 'empty': isEmpty }]" ref="wrapper">
      <template v-if="(isEmpty === true)">
        <div class="page__plug page__plug_feed_empty-list" style="height: auto;">
          <svg class="icon icon_size_lg icon_fill_blue mb_5">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
          </svg>
          <div class="heading heading_h5">Тут пока пусто</div>
          <template v-if="(isCurrentUser === true && isAuthorized === true)">
            <div class="mb_3">Для начала работы добавьте <br>новое объявление</div>
            <router-link :to="{ name: 'board.locations.create' }" class="btn btn_primary">Добавить</router-link>
          </template>
        </div>
      </template>

      <template v-if="(isEmpty === false)">
        <mt-loadmore :top-method="_handleLoadTopLocations" @top-status-change="_handleTopStatusChangeLocations" ref="loadmore">
          <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height }">
            <location-card :location="location" v-for="location in locations" :key="location.id"
                          :isCatalogPage="false"
                          @actionSheet="_handleActionSheetLocation"
                          @changeState="_handleChangeState">
            </location-card>
            <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'" :style="{ marginTop: '15px' }"></lm-m-loader>
          </div>

          <div slot="top" class="mint-loadmore-top">
            <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
            <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
          </div>
        </mt-loadmore>
      </template>
    </div>

    <location-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></location-filter>
    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheet" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { getDataAttribute, HEIGHT_FOOTER } from '@utils'

  import LocationCard from '@components/Board/Location/Location.vue'
  import LocationFilter from '@components/Board/Location/FilterUser.vue'
  import NavigationCategoriesUser from '@components/Board/NavigationCategoriesUser.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/location/getField',
    mutationType: 'board/location/updateField',
  })

  import { CASTING, LOCATION } from '@modules/Board/Enums/BoardType'
  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED } from '@modules/Board/Location/Enums/LocationState'

  export default {
    components: { 'mt-loadmore': Loadmore, LocationFilter, LocationCard, NavigationCategoriesUser },
    metaInfo () {
      return {
        title: `${(this.isCurrentUser) ? 'Мои объявления: локации' : 'Объявления: локации'}`
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      let fields = store.state.board.location.locations.userFilter

      await store.dispatch('board/getCountersBoard', { username }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error get counters board user', url })
      })

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error get user', url })
      })

      await store.dispatch('board/location/fetchUserLocations', {
        fields,
        username,
        offset: 0
      }).then(() => {
        store.dispatch('board/location/setHasNewLocationsData', true)
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error fetch user location', url })
      })
    },
    beforeDestroy () {
      this.$store.dispatch('board/location/setHasNewLocationsData', true)
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
    computed: {
      ...mapFields({
        fields: 'locations.userFilter',
        defaultFields: 'locations.defaultUserFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/location/getLocationsTotal',
        error: 'board/location/getLocationsError',
        offset: 'board/location/getLocationsOffset',
        locations: 'board/location/getLocationsData',
        loading: 'board/location/getLocationsLoading',
        infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
      }),
      username () {
        const { username } = this.$route.params
        return username
      },
      isCurrentUser () {
        const { username } = this.$route.params
        return (this.authUser && has(this.authUser, 'username') && this.authUser.username === String(username))
      },
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.authUser && this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true)
      }
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        clearLocations: 'board/location/clearLocations',
        fetchLocations: 'board/location/fetchUserLocations'
      }),
      _handleLoadTopLocations () {
        let { username, fields } = this
        this.fetchLocations({ username, fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeLocations (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { offset, username } = this
        this.fetchLocations({ username, offset })
      },
      _handleApplyFilter () {
        this.clearLocations().then(() => {
          this._toggleFilter()
          let { username, fields } = this
          this.fetchLocations({ username, fields, offset: 0 })
        }).catch(() => {})
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
              name: 'Редактировать',
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
              name: 'Пожаловаться',
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
