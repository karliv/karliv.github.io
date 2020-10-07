<template>
  <div class="page page_feed professionals-list">
    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed">
        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">Рефералы</div>
          <div class="d-feed__counter">{{ total }}</div>
        </div>
        <!-- feed -->
        <div class="d-feed" id="d-feed_professions" data-v-sticky-container>
          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar" v-sticky-sidebar="optionsStickySidebar">
            <!-- filters -->
            <div class="sidebar__content" data-v-sticky-inner>
              <div :class="['filters', { loading }]">
                <div class="d-card">
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('period')" :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Периоид регистрации</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['period']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['period'] && (fields.startFrom || fields.endTo))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <collapse v-model="collapse['period']">
                      <div class="d-row align_center mt_3">
                        <div class="d-input">
                          <input type="text" name="startFrom" ref="startFrom" v-mask-date
                                 v-validate="{ rules: { date_format: 'DD.MM.YYYY' } }"
                                 v-model="fields.startFrom"
                                 data-vv-name="startFrom"
                                 data-vv-as="От"
                                 data-lm-key="startFrom"
                                 placeholder="От"
                                 @input="_handleChangeFieldSearchProfession"
                                 :class="['d-input__field', { 'error': (verrors.has('startFrom')) } ]">
                        </div>
                        <div class="color_gray-4 ml_1 mr_1">-</div>
                        <div class="d-input">
                          <input type="text" name="endTo" ref="endTo" v-mask-date
                                 v-validate="{ rules: { date_format: 'DD.MM.YYYY', after: ['startFrom', true] } }"
                                 v-model="fields.endTo"
                                 data-vv-name="endTo"
                                 data-vv-as="До"
                                 data-lm-key="endTo"
                                 placeholder="До"
                                 @input="_handleChangeFieldSearchProfession"
                                 :class="['d-input__field', { 'error': (verrors.has('endTo')) } ]">
                        </div>
                      </div>
                    </collapse>
                  </div>
                  <template v-if="showReset">
                    <div class="section filters__section">
                      <button class="d-btn d-btn_outline w_100" @click="_handleClickClearFilter" :disabled="(loading)">
                        Сбросить фильтры
                      </button>
                    </div>
                  </template>
                </div>
              </div>

            </div> <!-- end of filters -->
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">
            <referral-card :referral="referral" v-for="referral in referrals" :key="referral.id"
                             @changeState="_handleChangeState">
            </referral-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Мы ничего не нашли</div>
                <div class="ta_center mb_4 color_gray-1">Попробуйте другой запрос <template v-if="showReset">или сбросьте фильтры</template></div>
                <template v-if="showReset">
                  <a href="javascript:void(0)" class="d-btn d-btn_primary" @click="_handleClickClearFilter">Сбросить фильтры</a>
                </template>
              </div>
            </template>
          </div> <!-- end of feed__body -->

        </div> <!-- end of feed -->
      </div> <!-- end of page__body -->

    </div> <!-- end of page content -->
  </div> <!-- end of page -->
</template>

<script>
  import _ from 'lodash'
  import { Collapse } from 'uiv'
  import { omitEmpty } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import ReferralCard from '@components/Referral/Referral.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'referral/getField',
    mutationType: 'referral/updateField'
  })

  export default {
    components: { Collapse, ReferralCard },
    metaInfo: {
      title: 'Список рефералов'
    },
    data () {
      return {
        collapse: {
          period: true
        },
        optionsStickySidebar: {
          topSpacing: 108,
          bottomSpacing: 16
        },
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
      showReset () {
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
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
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
      _handleApplyFilter () {
        let { fields } = this
        this.$gtm.trackEvent({ event: 'filter_referral' })

        this._clearReferrals().then(() => {
          const query = omitEmpty(fields, { omitZero: false })

          this.$router.replace({ name: 'referrals.index', query })
        }).catch(() => {})
      },
      _handleInfiniteScroll () {
        let { fields, offset } = this
        this._fetchReferrals({ fields, offset })
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
      _handleChangeFieldSearchProfession: _.debounce(function(e) {
        this._handleValidateFields().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      }, 900),
      _handleClickClearFilter () {
        this._clearFilter().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('referral/setFieldReferralsData', { id, key, value })
      },
    }
  }
</script>
