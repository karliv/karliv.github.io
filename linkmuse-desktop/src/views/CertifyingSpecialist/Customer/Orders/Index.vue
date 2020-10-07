<template>
  <section class="ss-orders">
    <div class="ss-orders-head">
      <h1>Ваши заказы</h1>
      <div class="right">
        <div class="balance" @click="$root.$emit('open-modal-balance-show', user.balance)" style="cursor: pointer">
          <i class="lm-icon-wallet"></i>
          <span class="text">Баланс</span>
          <a href="javascript:void(0)" v-if="user && user.balance">{{ user.balance |
            currency('₽') }}</a>
        </div>
        <router-link :to="{ name: 'certifying.customer.orders.archive' }" class="lm-link-button">Архив заказов</router-link>
        <router-link :to="{ name: 'certifying.customer.settings' }" class="ss-settings-button lm-btn-ghost"><i></i><span>Настройки</span>
        </router-link>
      </div>
    </div>
    <div class="ss-orders-content">
      <div class="ss-orders-column">
        <div class="ss-orders-column-head">
          <div class="ss-orders-column-title">Новые</div>
        </div>
        <div class="ss-orders-list">
          <router-link :to="{ name: 'certifying.customer.orders.show', params: { order_id: order.id } }" v-for="order in new_orders" :key="order.id">
            <order :order="order"></order>
          </router-link>

          <span v-if="!new_orders.length">Тут пока пусто ☹</span>
        </div>
      </div>
      <div class="ss-orders-column">
        <div class="ss-orders-column-head">
          <div class="ss-orders-column-title">Встреча</div>
        </div>
        <div class="ss-orders-list">
          <router-link :to="{ name: 'certifying.customer.orders.show', params: { order_id: order.id } }" v-for="order in meeting_orders"
                       :key="order.id">
            <order :order="order"></order>
          </router-link>

          <span v-if="!meeting_orders.length">Тут пока пусто ☹</span>
        </div>
      </div>
      <div class="ss-orders-column">
        <div class="ss-orders-column-head">
          <div class="ss-orders-column-title">В работе</div>
        </div>
        <div class="ss-orders-list">
          <router-link :to="{ name: 'certifying.customer.orders.show', params: { order_id: order.id } }" v-for="order in in_work_orders"
                       :key="order.id">
            <order :order="order"></order>
          </router-link>

          <span v-if="!in_work_orders.length">Тут пока пусто ☹</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Order from '@components/CertifyingSpecialist/Customer/Orders/Card/Square.vue'
import { mapGetters } from 'vuex'

export default {
  metaInfo: {
    title: 'Все заказы'
  },
  components: {Order},
  async asyncData ({store}) {
    await Promise.all([
      store.dispatch('certifying/getOrdersByCustomer', {include: 'certified_user,service,dispute,photos,video,measurement'})
    ])
  },
  computed: {
    ...mapGetters({
      orders: 'certifying/getCustomerOrdersData',
      user: 'auth/getAuthUser'
    }),
    new_orders () {
      return (this.orders.paid && this.orders.paid.data) ? this.orders.paid.data : []
    },
    meeting_orders () {
      return (this.orders.meeting && this.orders.meeting.data) ? this.orders.meeting.data : []
    },
    in_work_orders () {
      return (this.orders.in_work && this.orders.in_work.data) ? this.orders.in_work.data : []
    }
  }
}
</script>

<style>

</style>
