<template>
  <section class="ss-orders ss-orders--list">
    <div class="ss-orders-head">
      <h1>Мои заказы</h1>
      <div class="right">
        <div class="balance" @click="$root.$emit('open-modal-balance-show', user.balance)" style="cursor: pointer">
          <i class="lm-icon-wallet"></i>
          <span class="text">Баланс</span>
          <a href="javascript:void(0)"
             v-if="user && user.balance">{{
            user.balance | currency('₽') }}</a>
        </div>
      </div>
    </div>
    <div class="ss-orders--list-wrap">
      <div class="ss-orders-list--left">
        <order v-for="order in orders"
               :key="order.id"
               :order="order"
               @destroy="_handleDestroyOrder"></order>

        <div class="pd-26 no-left" v-if="(count === 0 && !loading) || (orders.length === 0 && !loading)">
          <span>К сожалению, заказов не найдено. <router-link :to="{ name: 'certifying.executor.index' }">Создать</router-link></span>
        </div>

        <loader v-if="loading" class="col-md-12"></loader>
      </div>
      <div class="ss-orders-list--right">
        <div :class="{ 'orders-filter': true, loading }">
          <ul>
            <li :class="{ active: (status == null && dispute == null) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(null, null)">
                <span class="name all">Все заказы</span>
                <span class="count">{{ counters.all }}</span>
              </a>
            </li>

            <li :class="{ active: (status === NOT_PAID && dispute === null) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(NOT_PAID, null)">
                <span class="name not-pay">Не оплачены</span>
                <span class="count">{{ counters.not_paid }}</span>
              </a>
            </li>

            <li :class="{ active: (status === PAID && dispute === null) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(PAID, null)">
                <span class="name payed">Оплачены</span>
                <span class="count">{{ counters.paid }}</span>
              </a>
            </li>

            <li :class="{ active: (status == null && dispute === 1) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(null, 1)">
                <span class="name dispute">Диспут</span>
                <span class="count">{{ counters.dispute }}</span>
              </a>
            </li>

            <li :class="{ active: (status === FINISHED && dispute === null) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(FINISHED, null)">
                <span class="name finished">Завершенные</span>
                <span class="count">{{ counters.finished }}</span>
              </a>
            </li>

            <li :class="{ active: (status === CANCELED && dispute === null) }">
              <a href="javascript:void(0)"
                 @click="setFilterOrders(CANCELED, null)">
                <span class="name canceled">Отмененные</span>
                <span class="count">{{ counters.canceled }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Order
  from '@components/CertifyingSpecialist/Executor/Orders/Card/Rectangle.vue'
import { mapGetters, mapActions } from 'vuex'

import {
  NOT_PAID,
  PAID,
  FINISHED,
  CANCELED
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

export default {
  components: {Order},
  metaInfo: {
    title: 'Все заказы'
  },
  async asyncData ({store, route}) {
    let {status, dispute} = route.query

    await store.dispatch('certifying/getCountersOrdersByExecutor')
    await store.dispatch('certifying/getOrdersByExecutor', {
      status,
      dispute,
      include: 'certifying_specialist,service,dispute'
    })
  },
  data () {
    return {
      NOT_PAID,
      PAID,
      FINISHED,
      CANCELED,
      scroll_busy: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      counters: 'certifying/getCountersExecutorOrdersData',
      loading: 'certifying/getExecutorOrdersLoading',
      orders: 'certifying/getExecutorOrdersData',
      count: 'certifying/getExecutorOrdersCount',
      offset: 'certifying/getExecutorOrdersOffset'
    }),
    status () {
      return this.$route.query.status || null
    },
    dispute () {
      return this.$route.query.dispute ? Number(this.$route.query.dispute) : null
    }
  },
  methods: {
    ...mapActions({
      clearOrders: 'certifying/clearOrdersByExecutor'
    }),
    setFilterOrders (status, dispute) {
      if (status === this.status && dispute === this.dispute) return

      this.clearOrders().then(() => {
        this.$router.replace({
          name: 'certifying.executor.orders.index',
          query: {status, dispute}
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
