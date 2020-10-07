<template>
  <div>
    <div class="lm-m-cs-wait-page lm-m-fullh-page">
      <div class="lm-m-cs-wait-page--wrap">
        <h3 class="title">Ожидайте</h3>
        <div class="desc">
          <div class="top">Ваш заказ находится в работе у специалиста</div>
          <div class="middle"></div>
          <div class="bottom">В случае отмены заказа, оплата вернется вам на карту</div>
        </div>
      </div>
      <div class="lm-action-buttons lm-bottom-actions-buttons">
        <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
        <router-link :to="{ name: 'messages.show', params: { uid } }" class="lm-primary-button middle">В диалог</router-link>
      </div>
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
