<template>
  <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
    <div class="lm-m-cs-wait-page--wrap">
      <h3 class="title">Согласование времени</h3>
      <div class="desc">
        <div class="top">Согласуйте со специалистом время проведение верификации в диалоге</div>
      </div>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
      <router-link :to="{ name: 'messages.show', params: { uid } }" class="lm-primary-button middle">В диалог</router-link>
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
