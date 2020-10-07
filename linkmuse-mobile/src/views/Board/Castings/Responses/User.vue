<template>
  <div class="page page_feed page_my-responses">
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
      <div class="row row_justify_between">
        <div class="heading_h4">{{ (isCurrentUser) ? $t('applications-page.viewed.my-responses') : $t('applications-page.my-applications-page.applications') }}</div>
      </div>
    </div>
    <div :class="['page__content', { 'empty': isEmpty }]" ref="wrapper">
      <template v-if="(isEmpty === true)">
        <div class="page__plug page__plug_feed_empty-list" style="height: auto;">
          <svg class="icon icon_size_lg icon_fill_blue mb_5">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
          </svg>
          <div class="heading heading_h5">Тут пока пусто</div>
        </div>
      </template>
      <template v-if="(isEmpty === false)">
        <mt-loadmore :top-method="_handleLoadTopResponses" @top-status-change="_handleTopStatusChangeResponses" ref="loadmore">
          <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height }">
            <response-card :response="response" v-for="response in responses" :key="response.id">
            </response-card>

            <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'" :style="{ marginTop: '15px' }"></lm-m-loader>
          </div>

          <div slot="top" class="mint-loadmore-top">
            <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
            <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
          </div>
        </mt-loadmore>
      </template>

      <!--<button class="btn btn_icon btn_primary btn_filters" @click="_toggleFilter">
        <svg class="icon icon_size_16 btn__icon_left icon_fill_white">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
        </svg>
        Фильтры
      </button>-->

    </div>

    <casting-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></casting-filter>
  </div>
</template>

<script>
  import { HEIGHT_FOOTER } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/response/getField',
    mutationType: 'board/casting/response/updateField',
  })

  import CastingFilter from '@components/Board/Casting/Response/Filter.vue'
  import ResponseCard from '@components/Board/Casting/Response/Response.vue'

  export default {
    components: { 'mt-loadmore': Loadmore, CastingFilter, ResponseCard },
    metaInfo () {
      return {
        title: `${(this.isCurrentUser) ? 'Мои отклики: кастинги' : 'Отклики: кастинги'}`
      }
    },
    data () {
      return {
        height: 0,
        openFilter: false,
        loadmore: { topStatus: null }
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      let fields = store.state.board.casting.response.responses.userFilter

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) })
      await store.dispatch('board/casting/response/fetchUserResponses', {
        fields,
        username,
        offset: 0
      })
    },
    computed: {
      ...mapFields({
        fields: 'responses.userFilter',
        defaultFields: 'responses.defaultUserFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/casting/response/getResponsesTotal',
        error: 'board/casting/response/getResponsesError',
        offset: 'board/casting/response/getResponsesOffset',
        responses: 'board/casting/response/getResponsesData',
        loading: 'board/casting/response/getResponsesLoading',
        infiniteDisabled: 'board/casting/response/getResponsesInfiniteDisabled'
      }),
      username () {
        const { username } = this.$route.params
        return username
      },
      isCurrentUser () {
        const { username } = this.$route.params
        return (this.authUser.username === String(username))
      },
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      }
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        clearResponses: 'board/casting/response/clearResponses',
        fetchResponses: 'board/casting/response/fetchUserResponses'
      }),
      _handleLoadTopResponses () {
        let { username, fields } = this
        this.fetchResponses({ username, fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeResponses (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { offset, username, fields } = this
        this.fetchResponses({ username, fields, offset })
      },
      _handleApplyFilter () {
        this.clearResponses().then(() => {
          this._toggleFilter()
          let { username, fields } = this
          this.fetchResponses({ username, fields, offset: 0 })
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
      }
    }
  }
</script>

<style scoped>

</style>
