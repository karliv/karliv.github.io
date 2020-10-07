<template>
    <div :class="['lm-m-page', 'lm-m-orders-certifying--list', { null: isEmpty }]">
      <div class="lm-m-notifications-head lm-m-page--head">
        <div class="left"></div>
        <div class="center"><span>Мои заказы</span></div>
        <div class="right"></div>
      </div>
      <div class="lm-m-filter-categories-wrap">
        <div class="lm-m-filter-categories lm-tags">
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === null && dispute === null) } ]" @click="setFilterOrders(null, null)">Все заказы</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === NOT_PAID && dispute === null) } ]" @click="setFilterOrders(NOT_PAID, null)">Не оплачены</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === PAID && dispute === null) } ]" @click="setFilterOrders(PAID, null)">Оплачены</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === null && dispute === 1) } ]" @click="setFilterOrders(null, 1)">Диспут</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === FINISHED && dispute === null) } ]" @click="setFilterOrders(FINISHED, null)">Завершенные</a>
          <a href="javascript:void(0)" :class="['lm-tag', { active: (status === CANCELED && dispute === null) } ]" @click="setFilterOrders(CANCELED, null)">Отмененные</a>
        </div>
      </div>
      <div class="wrapper no-padding" ref="wrapper">
        <mt-loadmore :top-method="_handleLoadTopOrders" @top-status-change="_handleTopStatusChangeOrders" ref="loadmore">
          <div class="lm-m-orders--list-wrap" v-infinite-scroll="_handleInfiniteScroll" :style="{ minHeight: height }"
                infinite-scroll-disabled="infiniteDisabled"
                infinite-scroll-distance="200">

            <order-item v-for="order in orders" :key="order.id"
                   :order="order">
            </order-item>

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
  import OrderItem from '@components/CertifyingSpecialist/Executor/Orders/Card/Rectangle.vue'

  import {
    NOT_PAID,
    PAID,
    FINISHED,
    CANCELED
  } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

  export default {
    components: { 'mt-loadmore': Loadmore, OrderItem },
    metaInfo: {
      title: 'Все заказы'
    },
    async asyncData ({store, route}) {
      let { status, dispute } = route.query

      await Promise.all([
        store.dispatch('certifying/getOrdersByExecutor', {
          status,
          dispute,
          include: 'certifying_specialist,service,dispute'
        })
      ])
    },
    data () {
      return {
        NOT_PAID,
        PAID,
        FINISHED,
        CANCELED,
        height: 0,
        loadmore: { topStatus: null }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        loading: 'certifying/getExecutorOrdersLoading',
        orders: 'certifying/getExecutorOrdersData',
        count: 'certifying/getExecutorOrdersCount',
        infiniteDisabled: 'certifying/getExecutorOrdersInfiniteDisabled',
      }),
      status () {
        return this.$route.query.status || null
      },
      dispute () {
        return this.$route.query.dispute ? Number(this.$route.query.dispute) : null
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
        clearOrders: 'certifying/clearOrdersByExecutor',
        getOrdersByExecutor: 'certifying/getOrdersByExecutor'
      }),
      _handleInfiniteScroll () {
        return new Promise((resolve, reject) => {
            this.getOrdersByExecutor({
              status: this.status,
              dispute: this.dispute,
              include: 'certifying_specialist,service,dispute'
          }).catch(() => console.log('Error loading'))
        })
      },
      _handleFetchOrders () {
        return new Promise((resolve, reject) => {
          this.clearOrders().then(() => {
            this.getOrdersByExecutor({
              status: this.status,
              dispute: this.dispute,
              include: 'certifying_specialist,service,dispute'
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
      },
      setFilterOrders (status, dispute) {
        if (status === this.status && dispute === this.dispute) return

        this.clearOrders().then(() => {
          this.$router.replace({
            name: 'certifying.executor.orders.index',
            query: { status, dispute }
          })
        })
      },
      _handleDestroyOrder (order_id) {
        if (!order_id) return

        this.$confirm({
          title: 'Удаление заказа',
          message: 'Вы действительно хотите удалить данный заказ?'
        }).then((args) => {
          let index = this.orders.map((order) => order.id).indexOf(order_id)

          if (index > -1) {
            let order = this.orders.splice(index, 1)

            this.$api.delete(`api/v2/certifying-specialists/orders/${order_id}`).then((response) => {
              console.log('Success removed order')
            }, (response) => {
              this.orders.push(order[0])
              throw new Error(`Error remove order#${order_id}`)
            })
          }
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="sass" scoped>
  .lm-m-orders-certifying--list
    .lm-m-orders--list-wrap
    &.null
      .lm-m-orders--list-wrap
        padding-bottom: 0
</style>

