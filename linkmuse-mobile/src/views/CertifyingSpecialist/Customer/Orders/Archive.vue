<template>
  <div :class="['lm-m-page', 'lm-m-orders-certifying--list', 'lm-customer-orders--list', { null: isEmpty }]">
    <div class="lm-m-notifications-head lm-m-page--head">
      <div class="left">
        <router-link :to="{ name: 'certifying.customer.orders.index' }">
          <i :class="['lm-back-icon']"></i>
        </router-link>
      </div>
      <div class="center"><span>Архив заказов</span></div>
      <div class="right"><template v-if="false"><i class="lm-icon-settings-gear"></i></template></div>
    </div>

    <template v-if="false">
      <div class="lm-m-filter-categories-wrap">
        <div class="lm-m-filter-categories lm-tags">
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === undefined || status === null ) } ]" @click="applyFilterOrders(null)">Все</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status && status === FINISHED) } ]" @click="applyFilterOrders(FINISHED)">Завершен</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status && status === CANCELED) } ]" @click="applyFilterOrders(CANCELED)">Отменен</a>
        </div>
      </div>
    </template>

    <div class="wrapper no-padding" ref="wrapper">
      <div class="lm-m-orders-certifying-list-desc">
        <center>
          К сожалению, этот раздел временно не доступен в мобильной версии сайта.
          Совсем скоро мы возобновим работу.
          Пожалуйста, для продолжения работы с заказами перейдите на полную версию сайта.
        </center>
      </div>
      <mt-loadmore :top-method="_handleLoadTopOrders" @top-status-change="_handleTopStatusChangeOrders" ref="loadmore">
        <div class="lm-m-orders--list-wrap" :style="{ minHeight: height }">

          <template v-if="(isEmpty === false)">
            <template v-if="finishedOrders.length">
                <div class="lm-m-orders-certifying-list--title"><span>Завершеные</span></div>
                <order-item v-for="order in finishedOrders" :key="order.id" :order="order" class="archive"></order-item>
            </template>

            <template v-if="canceledOrders.length">
              <div class="lm-m-orders-certifying-list--title"><span>Отмененные</span></div>
              <order-item v-for="order in canceledOrders" :key="order.id" :order="order" class="archive"></order-item>
            </template>
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
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import { HEIGHT_FOOTER } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { FINISHED, CANCELED } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'
  import OrderItem from '@components/CertifyingSpecialist/Customer/Orders/Card/Rectangle.vue'

  export default {
    components: { 'mt-loadmore': Loadmore, OrderItem },
    metaInfo: {
      title: 'Архив заказов'
    },
    data () {
      return {
        FINISHED, CANCELED,
        height: 0,
        loadmore: { topStatus: null }
      }
    },
    async asyncData ({store, route}) {
      await Promise.all([
        store.dispatch('certifying/getOrdersArchival', {
          include: 'certified_user,service,dispute,',
          status: (route.query.status)
        })
      ])
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        orders: 'certifying/getArchivalOrdersData',
        loading: 'certifying/geArchivalOrdersLoading'
      }),
      status () {
        return this.$route.query.status
      },
      count () {
        return this.orders.length
      },
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      finishedOrders () {
        return this.orders.filter(o => o.status === FINISHED)
      },
      canceledOrders () {
        return this.orders.filter(o => o.status === CANCELED)
      }
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        clearOrders: 'certifying/clearOrdersArchivalByCustomer',
        getOrdersArchival: 'certifying/getOrdersArchival'
      }),
      applyFilterOrders (status) {
        if (status === this.status) return

        this.clearOrders().then(() => {
          this.$router.replace({
            name: 'certifying.customer.orders.archive',
            query: { status }
          })
        })
      },
      _handleFetchOrders () {
        return new Promise((resolve, reject) => {
          this.clearOrders().then(() => {
            this.getOrdersArchival({
              status: this.status,
              include: 'certified_user,service,dispute'
            }).then(() => resolve && resolve())
          }).catch(() => console.log('Error loading'))
        })
      },
      _handleLoadTopOrders () {
        this._handleFetchOrders().then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeOrders (status) {
        this.loadmore.topStatus = status
      }
    }
  }
</script>

<style lang="sass" scoped>
  .lm-customer-orders--list
    .lm-m-orders-certifying-list-desc
      font-size: 8px
      font-weight: 600
      line-height: 12px
      letter-spacing: 1px
      color: #808792
      text-transform: uppercase
      padding: 8px 16px
</style>
