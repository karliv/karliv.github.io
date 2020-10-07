<template>
  <div :class="['lm-m-page', 'lm-m-orders-certifying--list', 'lm-customer-orders--list', { null: isEmpty }]">
    <div class="lm-m-notifications-head lm-m-page--head">
      <div class="left">
        <i :class="['lm-icon-wallet']" @click="$root.$emit('open-modal-balance-show', user.balance)"></i>
      </div>
      <div class="center"><span>Мои заказы</span></div>
      <div class="right"><template v-if="false"><i class="lm-icon-settings-gear"></i></template></div>
    </div>

    <template v-if="false">
      <div class="lm-m-filter-categories-wrap">
        <div class="lm-m-filter-categories lm-tags">
          <a href="javascript:void(0)" :class="['lm-tag']" v-if="new_orders.length" v-scroll-to="'#new_orders'">Новые</a>
          <a href="javascript:void(0)" :class="['lm-tag']" v-if="meeting_orders.length" v-scroll-to="'#meeting_orders'">Встреча</a>
          <a href="javascript:void(0)" :class="['lm-tag']" v-if="in_work_orders.length" v-scroll-to="'#in_work_orders'">В работе</a>
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
            <template v-if="new_orders.length">
              <div id="new_orders">
                <div class="lm-m-orders-certifying-list--title"><span>Новые</span></div>
                <order-item v-for="order in new_orders" :key="order.id" :order="order"></order-item>
              </div>
            </template>

            <template v-if="meeting_orders.length">
              <div id="meeting_orders">
                <div class="lm-m-orders-certifying-list--title"><span>Встреча</span></div>
                <order-item v-for="order in meeting_orders" :key="order.id" :order="order"></order-item>
              </div>
            </template>

            <template v-if="in_work_orders.length">
              <div id="in_work_orders">
                <div class="lm-m-orders-certifying-list--title"><span>В работе</span></div>
                <order-item v-for="order in in_work_orders" :key="order.id" :order="order"></order-item>
              </div>
            </template>
          </template>

          <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>

          <div class="lm-m-empty-desc--null" v-if="(isEmpty === true)" :style="{ height }">
            <span>К сожалению ничего не найдено.</span>
          </div>

          <div class="lm-m-empty-desc--archive">
            <router-link :to="{ name: 'certifying.customer.orders.archive' }"><i class="lm-wait-icon"></i> <span>Архив заказов</span></router-link>
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
  import OrderItem from '@components/CertifyingSpecialist/Customer/Orders/Card/Rectangle.vue'

  export default {
    components: { 'mt-loadmore': Loadmore, OrderItem },
    metaInfo: {
      title: 'Все заказы'
    },
    async asyncData ({store}) {
      await Promise.all([
        store.dispatch('certifying/getOrdersByCustomer', { include: 'certified_user,service,dispute' })
      ])
    },
    data () {
      return {
        height: 0,
        loadmore: { topStatus: null }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        orders: 'certifying/getCustomerOrdersData',
        loading: 'certifying/getCustomerOrdersLoading'
      }),
      new_orders () {
        return (this.orders.paid && this.orders.paid.data) ? this.orders.paid.data : []
      },
      meeting_orders () {
        return (this.orders.meeting && this.orders.meeting.data) ? this.orders.meeting.data : []
      },
      in_work_orders () {
        return (this.orders.in_work && this.orders.in_work.data) ? this.orders.in_work.data : []
      },
      count () {
        return [...this.new_orders, ...this.meeting_orders, ...this.in_work_orders].length
      },
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        clearOrders: 'certifying/clearOrdersByCustomer',
        getOrdersByCustomer: 'certifying/getOrdersByCustomer'
      }),
      _handleFetchOrders () {
        return new Promise((resolve, reject) => {
          this.clearOrders().then(() => {
            this.getOrdersByCustomer({
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
    &.null
      .lm-m-orders--list-wrap
        padding-bottom: 0
      .lm-m-empty-desc--archive
        position: fixed
        bottom: 100px

</style>
