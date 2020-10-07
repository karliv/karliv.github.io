<template>
  <div :style="{ paddingTop: 0 }">
    <div class=" talents-list-v2">

      <div class="talents-list-v2-header">
        <div class="talents-list-v2-header-left">
          <h1>Таланты</h1>
        </div>
      </div>

      <talent-filter v-sticky="{ zIndex: 10, stickyTop: 48, disabled: false }"
                     @hide="_handleHideFilter" @show="_handleShowFilter" @apply="_handleApplyFilter">
      </talent-filter>

      <div class="filter-fixed" v-if="false"></div>

      <div :class="['talents-list-v2-list', { 'opened': openFilter }]" v-infinite-scroll="_handleInfiniteScroll"
           infinite-scroll-disabled="infiniteDisabled"
           infinite-scroll-distance="1725">

        <talent-card :user="talent" v-for="talent in talents" :key="talent.data.user_id"></talent-card>

        <lm-loader v-if="loading" :style="{ marginTop: '10px' }"></lm-loader>

        <div class="lm-m-empty-desc--null" v-if="(isEmpty === true)">
          <span>К сожалению, исполнители с такими параметрами не найдены.</span>
        </div>
      </div>
    </div>
    <div class="clr"></div>
  </div>
</template>

<script>
  import Qs from 'qs'
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import TalentCard from '@components/Talent/Card.vue'
  import { omitEmpty, toggleBodyOverflow } from '@utils'
  import TalentFilter from '@components/Talent/Filter.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'talent/getField',
    mutationType: 'talent/updateField'
  })

  export default {
    components: { TalentCard, TalentFilter },
    metaInfo: {
      title: 'Список талантов'
    },
    data () {
      return {
        height: 0,
        searching: false,
        openFilter: false
      }
    },

    async asyncData ({ store, route }) {
      const { query } = route

      let promises = []
      const count = store.getters['talent/getCountTalentsOnCatalog']
      const initialized = store.getters['talent/getInitializedSources']
      const defaultFields = store.getters['talent/getCatalogFieldsFilter']

      let fields = omitEmpty(_.merge(defaultFields, query), { omitZero: false })

      if (!count)  {
        await store.dispatch('talent/fetchTalentsOnCatalog', { fields, rewrite: true })
      }

      if (!initialized) {
        await store.dispatch('talent/getSources')
      }
    },

    computed: {
      ...mapFields(['catalog.filter']),
      ...mapGetters({
        user: 'auth/getAuthUser',
        role: 'auth/getRole',
        talents: 'talent/getTalentsOnCatalog',
        count: 'talent/getCountTalentsOnCatalog',
        error: 'talent/getTalentsErrorOnCatalog',
        loading: 'talent/getTalentsLoadingOnCatalog',
        infiniteDisabled: 'talent/getTalentInfiniteDisabledOnCatalog'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
    created () {
      const { query } = this.$route
      this._.merge(this.filter, query)
    },
    mounted () {
      this.$gtm.trackEvent({ event: 'BROWSE_ARTISTS' })
    },
    methods: {
      ...mapActions({
        fetchTalentsOnCatalog: 'talent/fetchTalentsOnCatalog',
        clearTalentsOnCatalog: 'talent/clearTalentsOnCatalog'
      }),
      _handleInfiniteScroll() {
        this.fetchTalentsOnCatalog({ fields: this.filter, rewrite: false })
      },
      _handleHideFilter () {
        toggleBodyOverflow(true)
        this._handleFilter(false)
      },
      _handleShowFilter () {
        toggleBodyOverflow(false)
        this._handleFilter(true)
      },
      _handleApplyFilter () {
        this.$gtm.trackEvent({ event: 'USE_TALENTS_FILTER' })
        this.clearTalentsOnCatalog().then(() => {
          if (this.openFilter) this._handleFilter()

          const query = omitEmpty(this.filter, { omitZero: false })
          this.$router.replace({ name: 'talents.index', query })

        }).catch(() => {})
      },
      _handleFilter (value = false) {
        return new Promise((resolve, reject) => {
          try {
            this.openFilter = value
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
