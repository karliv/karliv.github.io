<template>
  <div class="page page_feed profession-list">
    <mt-loadmore :top-method="_handleLoadTopProfessions" @top-status-change="_handleTopStatusChangeProfessions" ref="loadmore">
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
                 @focus="_handleFocusFieldSearchProfession"
                 @blur="_handleBlurFieldSearchProfession"
                 @input="_handleInputFieldSearchProfessions"
                 :class="['input__field', 'input__field_search', { 'error': (verrors.has('query')) }]">
          <button class="btn btn_close" v-if="(fields.query)" @click="_handleClickCloseSearching"></button>
        </div>
      </div>
      <div :class="['page__content', 'page__content_feed', { 'fsfads': isEmpty }]" ref="wrapper">
        <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height, paddingBottom: '90px' }">

          <profession-card :profession="profession" v-for="profession in professions" :key="profession.id"
                        @changeState="_handleChangeState">
          </profession-card>

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
    <profession-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></profession-filter>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { omitEmpty, getDataAttribute, has, isBrowser } from '@utils'
  import SeoProfessions from '@modules/SEO/mixins/Professions'
  import ProfessionFilter from '@components/User/Profession/Filter.vue'
  import ProfessionCard from '@components/User/Profession/Profession.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'user/profession/getField',
    mutationType: 'user/profession/updateField'
  })

  export default {
    mixins: [SeoProfessions],
    components: { 'mt-loadmore': Loadmore, ProfessionCard, ProfessionFilter },
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
      if (isBrowser) {
        const { params, query } = route

        let { profession: professionName } = params

        const initialized = store.getters['user/profession/getInitializedSources']
        const defaultFields = store.getters['user/profession/getCatalogDefaultFieldsFilter']

        let fields = omitEmpty(_.merge(defaultFields, { ...query, professionName }), { omitZero: false })

        store.dispatch('user/profession/clearProfessions')
        store.dispatch('user/profession/fetchProfessions', { fields, offset: 0 })

        if (!initialized) {
          store.dispatch('user/profession/getSources')
        }
      }
    },
    async serverPrefetch () {
      const { params, query } = this.$route

      let { profession: professionName } = params

      const initialized = this.$store.getters['user/profession/getInitializedSources']
      const defaultFields = this.$store.getters['user/profession/getCatalogDefaultFieldsFilter']

      let fields = omitEmpty(_.merge(defaultFields, { ...query, professionName }), { omitZero: false })

      if (!initialized) {
        await this.$store.dispatch('user/profession/getSources').catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error fetch sources professions', url })
        })
      }

      await this.$store.dispatch('user/profession/fetchProfessions', { fields, offset: 0 }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error fetch professions', url })
      })
    },
    computed: {
      ...mapFields({
        fields: 'professions.filter',
        defaultFields: 'professions.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        sources: 'user/profession/getSources',
        total: 'user/profession/getProfessionsTotal',
        error: 'user/profession/getProfessionsError',
        offset: 'user/profession/getProfessionsOffset',
        professions: 'user/profession/getProfessionsData',
        loading: 'user/profession/getProfessionsLoading',
        infiniteDisabled: 'user/profession/getProfessionsInfiniteDisabled'
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
        const { profession } = this.$route.params

        // if (profession) return `Работа для ${this.$seo.forProffesion(this, profession)} в ${new Date().getFullYear()}`

        return 'Работа для участников съёмочной группы: препродакшена, продакшена, постпродакшена и талантов'
      },
      description () {
        const { profession } = this.$route.params

        // if (profession) return `Выбирайте лучших ${this.$seo.forProffesion(this, profession)} по вашим критериям, бесплатный подбор, удобный график`

        return 'Выбирайте лучших профессионалов по вашим критериям, бесплатный подбор, удобный график'
      }
    },
    created () {
      const { params, query } = this.$route
      let { profession: professionName } = params
      this._.merge(this.fields, { ...query, professionName })
    },
    beforeDestroy () {
      this._clearFilter().then(() => {
        console.log('Cleared professions...')
      }).catch(() => {})

      this.$root.$off('user-updated-state-folder')
    },
    beforeRouteUpdate (to, from, next) {
      const { params, query } = to
      let { profession: professionName } = params

      this._clearFilter().then(() => {
        console.log('Cleared professions...')
        Object.assign(this.fields, { ...query, professionName: professionName || null })
        next()
      }).catch(() => { next() })
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`

      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let professions = this.professions.filter(p => p['user']['id'] === userId)

        professions.forEach((p) => this.$store.dispatch('user/profession/setFieldProfessionsData', { id: p['id'], key: 'user.inFolder', value: inFolder }))
      })
    },
    methods: {
      ...mapActions({
        fetchProfessions: 'user/profession/fetchProfessions',
        clearProfessions: 'user/profession/clearProfessions'
      }),
      _handleFocusFieldSearchProfession () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchProfession () {
        this.searchFocused = false
      },
      _handleClickCloseSearching() {
        this.fields.query = null

        this.$nextTick(() => {
          this._handleApplyFilter()
        })
      },
      _handleInputFieldSearchProfessions: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleApplyFilter(false)
          }
        })
      }, 900),
      _handleLoadTopProfessions () {
        let { fields } = this
        this.fetchProfessions({ fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeProfessions (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchProfessions({ fields, offset })
      },
      _handleApplyFilter (toggleFilter = true) {
        if (toggleFilter) this._toggleFilter()

        let { fields } = this
        this.$gtm.trackEvent({ event: 'filter_profession' })

        let { professionName: profession } = fields
        const query = omitEmpty(this._.omit(fields, ['professionName']), { omitZero: false })

        this.$router.replace({ name: 'users.professions.index', params:{ profession }, query })
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
        this.$store.dispatch('user/profession/setFieldProfessionsData', { id, key, value })
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
