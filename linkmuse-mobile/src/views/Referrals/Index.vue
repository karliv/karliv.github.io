<template>
  <div class="page page_feed">
    <mt-loadmore :top-method="_handleLoadTopReferrals" @top-status-change="_handleTopStatusChangeReferrals" ref="loadmore">
      <div class="page__header page__header_feed">
        <div class="row row_justify_between">
          <div class="heading_h4">Рефералы <span class="section__counter_responses">{{ total }}</span></div>
        </div>
      </div>
      <div :class="['page__content', 'page__content_feed', { 'fsfads': isEmpty }]" ref="wrapper">
        <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height, paddingBottom: '90px' }">

          <referral-card :referral="referral" v-for="referral in referrals" :key="referral.id"
                         @changeState="_handleChangeState">
          </referral-card>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>
          <div class="page__plug page__plug_feed_empty" v-if="(isEmpty === true)">По вашему запросу ничего не найдено</div>
        </div>

        <button :class="['btn', 'btn_icon', 'btn_primary', 'btn_filters', { active: hasFilter }]" @click="_toggleFilter">
          <svg class="icon icon_size_16 btn__icon_left icon_fill_white">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
          </svg>
          Фильтры
        </button>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>
    <referral-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></referral-filter>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { omitEmpty } from '@utils'
  import { Loadmore } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import ReferralCard from '@components/Referral/Referral.vue'
  import ReferralFilter from '@components/Referral/Filter.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'referral/getField',
    mutationType: 'referral/updateField'
  })

  export default {
    components: { 'mt-loadmore': Loadmore, ReferralCard, ReferralFilter },
    metaInfo: {
      title: 'Список рефералов'
    },
    data () {
      return {
        height: 0,
        openFilter: false,
        loadmore: { topStatus: null },
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route

      const defaultFields = store.getters['referral/getCatalogDefaultFieldsFilter']

      let fields = omitEmpty(_.merge(defaultFields, { ...query }), { omitZero: false })

      await store.dispatch('referral/clearReferrals')
      await store.dispatch('referral/fetchReferrals', { fields, offset: 0 }).then((total) => {
        if (typeof window !== 'undefined' && total < 4) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      })
    },
    computed: {
      ...mapFields({
        fields: 'referrals.filter',
        defaultFields: 'referrals.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        total: 'referral/getReferralsTotal',
        error: 'referral/getReferralsError',
        offset: 'referral/getReferralsOffset',
        referrals: 'referral/getReferralsData',
        loading: 'referral/getReferralsLoading',
        infiniteDisabled: 'referral/getReferralsInfiniteDisabled'
      }),
      isEmpty () {
        return (this.loading === false && this.total === 0)
      },
      hasFilter () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
    },
    created () {
      const { query } = this.$route
      this._.merge(this.fields, { ...query })
    },
    beforeDestroy () {
      this._clearFilter().then(() => {
        console.log('Cleared referrals...')
      }).catch(() => {})

      this.$root.$off('user-updated-state-folder')
    },
    beforeRouteUpdate (to, from, next) {
      const { query } = to

      this._clearFilter().then(() => {
        console.log('Cleared referrals...')
        Object.assign(this.fields, { ...query })
        next()
      }).catch(() => { next() })
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`

      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let referrals = this.referrals.filter(r => r['id'] === userId)

        referrals.forEach((r) => this.$store.dispatch('referral/setFieldReferralsData', { id: r['id'], key: 'inFolder', value: inFolder }))
      })
    },
    methods: {
      ...mapActions({
        _fetchReferrals: 'referral/fetchReferrals',
        _clearReferrals: 'referral/clearReferrals'
      }),
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
      _handleApplyFilter (toggleFilter = true) {
        if (toggleFilter) this._toggleFilter()

        let { fields } = this
        this.$gtm.trackEvent({ event: 'filter_referral' })

        const query = omitEmpty(fields, { omitZero: false })

        this.$router.replace({ name: 'referrals.index', query })
      },
      _handleLoadTopReferrals () {
        let { fields } = this
        this._fetchReferrals({ fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeReferrals (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll () {
        let { fields, offset } = this
        this._fetchReferrals({ fields, offset })
      },
      _handleClickClearFilter () {
        this._clearFilter().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('referral/setFieldReferralsData', { id, key, value })
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
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
