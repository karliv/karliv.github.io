<template>
  <div class="page page_feed">
    <mt-loadmore :top-method="_handleLoadTopCastings" @top-status-change="_handleTopStatusChangeCastings" ref="loadmore">
      <div class="page__header page__header_feed">
        <div class="row row_justify_between">
          <div class="heading heading_h4">{{ $t('boardbox.boardbox-screen.ads') }}</div>
          <a href="javascript:void(0)" @click.stop.prevent="_handleClickCreateBoard" class="btn btn_round btn_primary btn_plus">
            <span>
              <svg class="icon icon_size_16 icon_fill_white">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
              </svg>
            </span>
          </a>
        </div>
        <div class="input input_search input_search_feed">
          <svg :class="['icon', 'icon_size_16', 'icon_search', (searchFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
          </svg>
          <input type="text" name="name" ref="name" autocomplete="false"
                 v-validate="'max:25'"
            v-model="fields.name"
            data-lm-key="name"
            :placeholder="$t('boardbox.boardbox-screen.search')"
            @focus="_handleFocusFieldSearchTalent"
            @blur="_handleBlurFieldSearchTalent"
            @input="_handleInputFieldSearchTalent"
            :class="['input__field', 'input__field_search', { 'error': (verrors.has('name')) }]">
          <button class="btn btn_close" v-if="(fields.name)" @click="_handleClickCloseSearching"></button>
        </div>
        <div class="row">
          <navigation-categories></navigation-categories>
        </div>
      </div>

      <div :class="['page__content', 'page__content_feed', { 'fsfads': isEmpty }]" ref="wrapper">
        <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height, paddingBottom: '90px' }">

          <casting-card :casting="casting" v-for="casting in castings" :key="casting.id"
                        @actionSheet="_handleActionSheetCasting"
                        @changeState="_handleChangeState">
          </casting-card>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>
          <div class="page__plug page__plug_feed_empty" v-if="(isEmpty === true)">По вашему запросу ничего не найдено</div>
        </div>

        <button :class="['btn', 'btn_icon', 'btn_primary', 'btn_filters', { active: hasFilter }]" @click="_toggleFilter">
          <svg class="icon icon_size_16 btn__icon_left icon_fill_white">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
          </svg>
          {{ $t('boardbox.boardbox-screen.filters') }}
        </button>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>

    <casting-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></casting-filter>
    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheet" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { has, omitEmpty, getDataAttribute, HEIGHT_FOOTER, isBrowser } from '@utils'

  import SeoFilterCasting from '@modules/SEO/mixins/Casting'
  import CastingCard from '@components/Board/Casting/Casting.vue'
  import { getFieldsFromRoute } from '@modules/SEO/mixins/Casting'
  import CastingFilter from '@components/Board/Casting/Filter.vue'
  import NavigationCategories from '@components/Board/NavigationCategories.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
  })

  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    components: { 'mt-loadmore': Loadmore, CastingFilter, CastingCard, NavigationCategories },
    mixins: [SeoFilterCasting],
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
        searchFocused: false,
        actionSheet: {
          actions: [],
          value: false,
          casting: { id: null, slug: null }
        },
        loadmore: { topStatus: null }
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route

      const loadingSources = store.getters['board/casting/getLoadingSources']
      const initializedSources = store.getters['board/casting/getInitializedSources']

      if (loadingSources === false && initializedSources === false) {
        await store.dispatch('board/casting/getSources').catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error sources castings', url })
        })
      }

      const defaultFields = store.getters['board/casting/getCatalogDefaultFieldsFilter']
      const fields = getFieldsFromRoute(route, store.getters['board/casting/getSources'], omitEmpty(Object.assign(_.clone(defaultFields), query), { omitZero: false }))
      const isEqualFilter = _.isEqual(fields, omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/casting/getField']('castings.filter')), { omitZero: false }))

      // TODO: Convert type input value. ( route === string, v-model === number )
      // console.log(fields)
      // console.log(omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/casting/getField']('castings.filter')), { omitZero: false }))

      const hasNew = store.getters['board/casting/getCastingsHasNew']
      const loadingData = store.getters['board/casting/getCastingsLoading']
      const initializedData = store.getters['board/casting/getInitializedData']

      if ( loadingData === false && (isEqualFilter === false || initializedData === false || hasNew === true)) {
        await store.dispatch('board/casting/clearCastings')
        await store.commit('board/casting/updateField', { path: 'castings.filter', value: Object.assign(_.clone(defaultFields), fields) })
        await store.dispatch('board/casting/fetchCastings', { fields, offset: 0 }).then((total) => {
          store.dispatch('board/casting/setInitializedCastingsData', true)
          if (typeof window !== 'undefined' && total < 4) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }).catch((error) => {
          const { response: { status = 500, url = null } } = error
          throw ({ code: status, message: 'Error fetch castings', url })
        })
      }
    },
    computed: {
      ...mapFields({
        fields: 'castings.filter',
        defaultFields: 'castings.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/casting/getCastingsTotal',
        error: 'board/casting/getCastingsError',
        offset: 'board/casting/getCastingsOffset',
        castings: 'board/casting/getCastingsData',
        loading: 'board/casting/getCastingsLoading',
        infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
      }),
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      hasFilter () {
        const fields = this._.omit(this.fields, ['name'])
        const defaultFields = this._.omit(this.defaultFields, ['name'])

        return (this._.isEqual(fields, defaultFields) === false)
      },
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

      let clearParameters = !(Boolean(Object.keys(query).length) || has(params, 'filter'))
      this._clearFilter(clearParameters).then(() => {
        console.log('Cleared filter castings...')
        this.seoGenerate()

        next()
      }).catch(() => {
        this.seoGenerate()

        next()
      })
    },
    methods: {
      ...mapActions({
        fetchCastings: 'board/casting/fetchCastings',
        clearCastings: 'board/casting/clearCastings',
        _setInitializedCastingsData: 'board/casting/setInitializedCastingsData'
      }),
      _handleInputFieldSearchTalent: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            let { fields } = this
            this.clearCastings().then(() => {
              this.fetchCastings({ fields, offset: 0 })
            }).catch(() => {})
          }
        })
      }, 900),
      _handleLoadTopCastings () {
        let { fields } = this
        this._setInitializedCastingsData(false)
        this.fetchCastings({ fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
          this._setInitializedCastingsData(true)
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeCastings (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchCastings({ fields, offset })
      },
      _clearFilter (parameters = true) {
        return new Promise((resolve, reject) => {
          if (parameters) this.parameters = false

          try {
            this.fields = this._.clone(this.defaultFields)
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleApplyFilter () {
        this.clearCastings().then(() => {
          this._toggleFilter()
          let { fields } = this
          // this.fetchCastings({ fields, offset: 0 })
          this._setInitializedCastingsData(false)
          const { query, params } = this.getSeoRouterParams(omitEmpty(fields, { omitZero: false }))

          this.$router.replace({ name: 'board.castings.index', query, params }, () => {
            this.seoGenerate()
            this._setInitializedCastingsData(true)
          })
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
      _handleClickCloseSearching() {
        this.fields.name = null

        this.$nextTick(() => {
          this.clearCastings().then(() => {
            let { fields } = this
            this.fetchCastings({ fields, offset: 0 })
          }).catch(() => {})
        })
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
      },
      _handleActionSheetCasting ( castingId, isCurrentUser = false ) {
        let casting = this._.find(this.castings, (c) => c.id === castingId)
        if (casting) {
          const { id, slug } = casting
          Object.assign(this.actionSheet.casting, { id, slug })

          this.actionSheet.actions.push({
            name: 'Открыть',
            method: this._handleClickShowCasting
          })

          if (isCurrentUser === true) {
            if (casting.state === PUBLISHED || casting.state === ARCHIVED) {
              this.actionSheet.actions.push({
                name: 'Отклики',
                method: this._handleClickOpenCastingResponses
              })
            }

            if (this.isAdmin) {
              this.actionSheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditCasting
              })
            }

            if (casting.state === PUBLISHED) {
              this.actionSheet.actions.push({
                name: 'В архив',
                method: this._handleClickArchiveCasting
              })
            }
          }

          if (isCurrentUser === false) {
            this.actionSheet.actions.push({
              name: this.$t('boardbox.report.report'),
              method: this._handleClickAbuseCasting
            })

            if (this.isAdmin) {
              this.actionSheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditCasting
              })
            }
          }

          if (this.isAdmin === true && casting.state === MODERATION) {
            this.actionSheet.actions.push({
              name: 'Одобрить',
              method: this._handleClickApproveCasting
            })
          }

          this.actionSheet.value = true
        }
      },
      _handleClickEditCasting () {
        let { id } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },
      _handleClickShowCasting () {
        let { slug, id } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.show', params: { slug, id } })
      },
      _handleClickOpenCastingResponses () {
        let { id, slug } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })
      },
      _handleClickUnpublishedCasting () {
        let { id } = this.actionSheet.casting

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft(id)
        }).catch(() => {})
      },
      _handleClickArchiveCasting () {
        let { id } = this.actionSheet.casting

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive(id)
        }).catch(() => {})
      },
      _handleDraft (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: DRAFT })

            Indicator.close()
            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: ARCHIVED })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleInputActionSheet (value) {
        if (value === false) {
          this.actionSheet = {
            actions: [],
            value: false,
            casting: { id: null, value: null }
          }
        }
      },
      _handleClickAbuseCasting () {
        let { id } = this.actionSheet.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleFocusFieldSearchTalent () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchTalent () {
        this.searchFocused = false
      },
      _handleClickCreateBoard () {
        this.$router.push({ name: 'board.create' })
      },
      _handleClickApproveCasting () {
        Indicator.open()
        let { id } = this.actionSheet.casting

        this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
          Indicator.close()
          let { data: { data } } = response
          this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: PUBLISHED })
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
