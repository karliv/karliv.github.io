<template>
  <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
    <div class="lm-m-cs-wait-page--wrap">
      <h3 class="title">Оплата</h3>
      <div class="desc">
        <div class="top">Данный заказ еще не оплачен</div>
      </div>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
      <router-link :to="{ name: 'certifying.executor.orders.pay', params: { order_id: order_id } }" class="lm-primary-button middle">Оплатить</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      order_id: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
