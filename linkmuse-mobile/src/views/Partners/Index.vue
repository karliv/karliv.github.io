<template>
  <div :class="['lm-m-casting--page', 'lm-m-response-page', 'lm-m-talents--page', { null: isEmpty }]">
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--center">
          <a href="javascript:void(0)" class="lm-m-nav-menu--item">
            <span class="text">{{ userIsCustomer ? 'Коллеги' : 'Агенты' }}</span>
          </a>
        </div>
      </div>
    </div>
    <div :class="['wrapper', 'no-padding']" ref="wrapper">
      <mt-loadmore :top-method="_handleLoadPartners" @top-status-change="_handleTopStatusChangePartners" ref="loadmore">
        <div :class="['lm-m-response-page-user-wrap', 'talents-list', { null: ( isEmpty || (loading && loadmore.topStatus !== 'loading')) }]" v-infinite-scroll="_handleInfiniteScroll"
             infinite-scroll-disabled="infiniteDisabled"
             infinite-scroll-distance="800">

          <template>
            <partner-card :user="partner" v-for="partner in partners" :key="partner.user_id" @sheet="_handleActionSheetShow"></partner-card>
          </template>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>

          <div class="lm-m-empty-desc--null" v-if="(isEmpty === true)" :style="{ height }">
            <span>К сожалению ничего не найдено.</span>
          </div>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
          <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
        </div>
      </mt-loadmore>
    </div>
    <actionsheet :actions="sheet.actions" v-model="sheet.value" cancel-text=""></actionsheet>
  </div>
</template>
<script>
  import { Loadmore } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import { getDataAttribute, HEIGHT_FOOTER } from '@utils'
  import PartnerCard from '@components/User/Partner/Card.vue'

  export default {
    components: { PartnerCard, 'mt-loadmore': Loadmore },
    metaInfo: {
      title: 'Коллеги'
    },
    data () {
      return {
        height: 0,
        sheet: {
          value: false,
          actions: []
        },
        loadmore: { topStatus: null }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        role: 'auth/getRole',
        partners: 'partner/getPartnersOnCatalog',
        count: 'partner/getCountPartnersOnCatalog',
        error: 'partner/getPartnersErrorOnCatalog',
        loading: 'partner/getPartnersLoadingOnCatalog',
        infiniteDisabled: 'partner/getPartnersInfiniteDisabledOnCatalog'
      }),
      userIsCustomer () {
        return this.user.role === 'customer'
      },
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`

      this._handleLoadPartners()
    },
    methods: {
      ...mapActions({
        fetchPartnersOnCatalog: 'partner/fetchPartnersOnCatalog',
        clearPartnersOnCatalog: 'partner/clearPartnersOnCatalog'
      }),
      _handleInfiniteScroll() {
        this.fetchPartnersOnCatalog({ rewrite: false, user_id: this.user.id })
      },
      _handleActionSheetShow (user_id, actions) {
        this.sheet.actions = actions
        this.sheet.value = true
      },
      _handleClickCallPhone () {
        if (!this.phone) return false
        window.open(`tel:${this.phone}`, '_self')
      },
      _handleClickOpenMessagePage () {
        let uid = this._.sortBy([ this.user.data.user_id, this.authUser.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleLoadPartners () {
        this.fetchPartnersOnCatalog({ rewrite: true, user_id: this.user.id }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangePartners (status) {
        this.loadmore.topStatus = status
      }
    }
  }
</script>
<style lang="sass" scoped>
  .lm-m-casting--page
    .talents-list
      &.null
        background: transparent
      .lm-m-response-page-user-item
        position: relative
        overflow: hidden
        background-color: #ffffff
    &.lm-m-talents--page
      overflow-x: inherit !important
      .lm-user-block-avatar_verified
        box-sizing: border-box
        border: 2px solid #0063da
        padding: 2px
    .lm-icon-zoom
      display: block
      width: 16px
      height: 16px
      background-size: contain
      background-position: center
      background-repeat: no-repeat
    .lm-close
      display: block
      width: 16px
      height: 16px
      background-size: contain
      background-position: center
      background-repeat: no-repeat
    .lm-m-empty-desc--null
      display: flex
      align-items: center
      justify-content: center
      flex: 1 auto
      span
        margin-bottom: 12px
        display: block
        text-align: center
        font-size: 14px
        color: #808792
        line-height: 18px
</style>
