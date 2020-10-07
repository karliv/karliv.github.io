<template>
  <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
    <div class="lm-m-cs-wait-page--wrap">
      <h3 class="title">Ваш заказ завершен</h3>
      <div class="desc">
        <div class="top">Специалист завершил выполнение данного заказа.</div>
      </div>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
      <router-link :to="{ name: 'certifying.executor.orders.show.success', params: { order_id } }" class="lm-primary-button middle">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      order_id: {
        type: Number,
        required: true
      },
      uid: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
