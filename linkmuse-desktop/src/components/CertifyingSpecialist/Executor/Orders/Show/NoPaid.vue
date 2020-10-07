<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Оплата заказа</div>
      <i class="icon-more" v-if="(refusedDispute === false)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order_id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content">
      <h3>Данный заказ еще не оплачен</h3>
      <div class="ss-dispute-warning-desc">
        Будьте вежливы!
      </div>
      <div class="actions">
        <router-link class="lm-primary-button" :to="{ name: 'certifying.executor.orders.pay', params: { order_id: order_id } }">Перейти к оплате
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    refusedDispute: {
      type: Boolean,
      default: false
    },
    order_id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>
