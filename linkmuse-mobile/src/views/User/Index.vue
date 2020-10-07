<template>
  <div class="page page_feed user-list">
    <mt-loadmore :top-method="_handleLoadTopUsers" @top-status-change="_handleTopStatusChangeUsers" ref="loadmore">
      <div class="page__header page__header_feed">
        <div class="row row_justify_between">
          <div class="heading_h4">{{ $t('unified-profile.professionals.professionals') }} <span class="section__counter_responses">{{ total }}</span></div>
        </div>

        <div class="input input_search input_search_feed mb_0">
          <svg :class="['icon', 'icon_size_16', 'icon_search', (searchFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
          </svg>
          <input type="text" name="query" ref="query" autocomplete="false"
                 v-validate="'max:50'"
                 v-model="fields.query"
                 data-lm-key="query"
                 :placeholder="$t('unified-profile.professionals.search')"
                 @focus="_handleFocusFieldSearchUser"
                 @blur="handleBlurFieldSearchUser"
                 @input="_handleInputFieldSearchUser"
                 :class="['input__field', 'input__field_search', { 'error': (verrors.has('query')) }]">
          <button class="btn btn_close" v-if="(fields.query)" @click="_handleClickCloseSearching"></button>
        </div>
      </div>
      <div :class="['page__content', 'page__content_feed', { 'fsfads': isEmpty }]" ref="wrapper">
        <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height, paddingBottom: '90px' }">

          <user-card :user="user" v-for="user in users" :key="user.id"
                     @changeState="_handleChangeState">
          </user-card>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>
          <div class="page__plug page__plug_feed_empty" v-if="(isEmpty === true)">{{ $t('unified-profile.nothing-found.no-results') }}</div>

          <div class="page__about">
            <div class="d-card d-card_outline">
              <div class="d-nav d-nav_inline-bullet" :class="[{ 'short-view': !seoTextShow }]" v-html="seoText"></div>
              <a href="javascript:void(0)" @click="seoTextShow = !seoTextShow" class="d-nav-more">
                <template v-if="seoTextShow">Свернуть
                  <svg class="d-icon d-icon_size_16 rotate_180">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron-bottom"/>
                  </svg>
                </template>
                <template v-else>Читать польностью
                  <svg class="d-icon d-icon_size_16">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron-bottom"/>
                  </svg>
                </template>
              </a>
            </div>
          </div>
        </div>

        <button :class="['btn', 'btn_icon', 'btn_primary', 'btn_filters', { active: hasFilter }]" @click="_toggleFilter">
          <svg class="icon icon_size_16 btn__icon_left icon_fill_white">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
          </svg>
          {{ $t('unified-profile.professionals.filters') }}
        </button>
      </div>

      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>

    <user-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></user-filter>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { omitEmpty, getDataAttribute, has, isBrowser } from '@utils'
  import SeoProfessions from '@modules/SEO/mixins/Professions'
  import UserFilter from '@components/User/Filter.vue'
  import UserCard from '@components/User/User.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'user/getField',
    mutationType: 'user/updateField'
  })

  export default {
    mixins: [SeoProfessions],
    components: { 'mt-loadmore': Loadmore, UserCard, UserFilter },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'description', content: this.description },
        ]
      }
    },
    data () {
      return {
        height: 0,
        openFilter: false,
        searchFocused: false,
        loadmore: { topStatus: null },
        seoTextShow: false
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route

      const loadingSources = store.getters['user/profession/getLoadingSources']
      const initializedSources = store.getters['user/profession/getInitializedSources']

      if (loadingSources === false && initializedSources === false) {
        await store.dispatch('user/profession/getSources').catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error fetch sources users', url })
        })
      }

      const defaultFields = store.getters['user/getCatalogDefaultFieldsFilter']
      const fields = omitEmpty(_.merge(defaultFields, { ...query }), { omitZero: false })
      const isEqualFilter = _.isEqual(fields, omitEmpty(Object.assign(_.clone(defaultFields), store.getters['user/getField']('users.filter')), { omitZero: false }))

      // TODO: Convert type input value. ( route === string, v-model === number )
      // console.log(fields)
      // console.log(omitEmpty(Object.assign(_.clone(defaultFields), store.getters['user/getField']('users.filter')), { omitZero: false }))

      const loadingData = store.getters['user/getUsersLoading']
      const initializedData = store.getters['user/getInitializedData']

      if ( (isEqualFilter === false || initializedData === false) && loadingData === false) {
        await store.dispatch('user/clearUsers')
        await store.dispatch('user/fetchUsers', { fields, offset: 0 }).then((total) => {
          store.dispatch('user/setInitializedUsersData', true)
          if (typeof window !== 'undefined' && total < 4) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }).catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error fetch users', url })
        })
      }
    },
    computed: {
      ...mapFields({
        fields: 'users.filter',
        defaultFields: 'users.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        users: 'user/getUsersData',
        total: 'user/getUsersTotal',
        error: 'user/getUsersError',
        offset: 'user/getUsersOffset',
        loading: 'user/getUsersLoading',
        isAuthorized: 'auth/isAuthorized',
        sources: 'user/profession/getSources',
        infiniteDisabled: 'user/getUsersInfiniteDisabled'
      }),
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      hasFilter () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
      title () {
        return 'Работа для участников съёмочной группы: препродакшена, продакшена, постпродакшена и талантов'
      },
      description () {
        return 'Выбирайте лучших профессионалов по вашим критериям, бесплатный подбор, удобный график'
      }
    },
    created () {
      const { query } = this.$route
      this._.merge(this.fields, { ...query })
    },
    beforeRouteUpdate (to, from, next) {
      const { query } = to

      this._clearFilter().then(() => {
        console.log('Cleared users...')
        Object.assign(this.fields, { ...query })
        next()
      }).catch(() => { next() })
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`

      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let users = this.users.filter(u => u['id'] === userId)
        users.forEach((p) => this.$store.dispatch('user/setFieldUsersData', { id: p['id'], key: 'inFolder', value: inFolder }))
      })
    },
    methods: {
      ...mapActions({
        fetchUsers: 'user/fetchUsers',
        clearUsers: 'user/clearUsers',
        _setInitializedUsersData: 'user/setInitializedUsersData'
      }),
      _handleFocusFieldSearchUser () {
        this.searchFocused = true
      },
      handleBlurFieldSearchUser () {
        this.searchFocused = false
      },
      _handleClickCloseSearching() {
        this.fields.query = null

        this.$nextTick(() => {
          this._handleApplyFilter()
        })
      },
      _handleInputFieldSearchUser: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleApplyFilter(false)
          }
        })
      }, 900),
      _handleLoadTopUsers () {
        let { fields } = this
        this._setInitializedUsersData(false)
        this.fetchUsers({ fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
          this._setInitializedUsersData(true)
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeUsers (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchUsers({ fields, offset })
      },
      _handleApplyFilter (toggleFilter = true) {
        if (toggleFilter) this._toggleFilter()

        let { fields } = this
        this.$gtm.trackEvent({ event: 'filter_user' })

        let { professionName: profession } = fields
        const query = omitEmpty(this._.omit(fields, ['professionName']), { omitZero: false })

        this._setInitializedUsersData(false)

        if (profession) {
          Indicator.open()
          this.$router.push({ name: 'users.professions.index', params: { profession }, query }, () => {
            Indicator.close()
          }, () => { loader.close() })
        } else this.$router.replace({ name: 'users.index', query }, () => {
          this._setInitializedUsersData(true)
        })
      },
      _clearFilter () {
        return new Promise((resolve, reject) => {
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
        this.$store.dispatch('user/setFieldUsersData', { id, key, value })
      },
    }
  }
</script>

<style lang="sass" scoped>
  .short-view
    overflow: hidden
    height: 90px
  .d-nav-more
    opacity: 0.72
    font-size: 12px
    font-weight: 600
    font-stretch: normal
    font-style: normal
    line-height: 1.33
    letter-spacing: 0.5px
    color: #515562
    display: flex
    align-items: center
    height: 19px
    margin-top: 12px
  .page__about
    padding: 16px
  .d-icon_size_16
    width: 16px
    height: 16px
</style>
