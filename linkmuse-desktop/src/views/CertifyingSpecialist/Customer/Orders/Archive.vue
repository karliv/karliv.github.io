<template>
  <section class="ss-orders">
    <div class="ss-orders-head">
      <h1>Архив заказов</h1>
      <div class="right">
        <div class="balance" @click="$root.$emit('open-modal-balance-show', user.balance)" style="cursor: pointer">
          <i class="lm-icon-wallet"></i>
          <span class="text">Баланс</span>
          <a href="javascript:void(0)" v-if="user && user.balance">{{ user.balance |
            currency('₽') }}</a>
        </div>
        <router-link :to="{ name: 'certifying.customer.orders.index' }" class="lm-link-button">Активные заказы</router-link>
        <router-link :to="{ name: 'certifying.customer.settings' }" class="ss-settings-button lm-btn-ghost"><i></i><span>Настройки</span>
        </router-link>
      </div>
    </div>
    <div class="ss-orders-content full">
      <div class="ss-orders-content-filter">
        <div class="left">
          <ul>
            <li><a href="javascript:void(0)" :class="[{ 'disabled': (status && status !== FINISHED) }, 'cancel']"
                   @click="applyFilterOrders(FINISHED)">Успешно завершенные</a></li>
            <li><a href="javascript:void(0)" :class="[{ 'disabled': (status && status !== CANCELED) }, 'success']"
                   @click="applyFilterOrders(CANCELED)">Отмененные</a></li>
          </ul>
        </div>
        <div class="right">

        </div>
      </div>
      <div class="ss-orders-list">
        <router-link :to="{ name: 'certifying.customer.orders.show', params: { order_id: order.id } }" v-for="order in orders" :key="order.id">
          <order :order="order"></order>
        </router-link>

        <loader v-if="loading"></loader>
        <span v-if="(!orders.length && !loading)">Тут пока пусто ☹</span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Order from '@components/CertifyingSpecialist/Customer/Orders/Card/Rectangle.vue'
import { FINISHED, CANCELED } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

export default {
  components: {Order},
  metaInfo: {
    title: 'Архив заказов'
  },
  data () {
    return {
      FINISHED, CANCELED
    }
  },
  async asyncData ({store, route}) {
    await Promise.all([
      store.dispatch('certifying/getOrdersArchival', {include: 'certified_user,certifying_specialist,service,photos', status: (route.query.status)})
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
    }
  },
  methods: {
    applyFilterOrders (status) {
      this.$router.replace({name: 'certifying.customer.orders.archive', query: {status}})
    }
  }
}
</script>

<style>

</style>
