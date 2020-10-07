<template>
  <div class="lm-m-cs-wait-page lm-m-cs-wait-after-meeting-page lm-m-fullh-page">
    <div class="lm-m-cs-wait-page--wrap">
      <template v-if="$moment().isBefore($moment(meeting_at))">
        <h3 class="title">Это свершилось!</h3>
        <div class="desc">
          <div class="top">Вы договорились со специалистом о встрече!</div>
          <div class="middle"></div>
          <div class="bottom">Будьте готовы к ней,  не забудьте, а лучше добавьте в календарь</div>
        </div>
      </template>
      <template v-else>
        <h3 class="title">Ожидайте</h3>
        <div class="desc">
          <div class="top">Ваша встреча прошла, надеемся, что всё прошло отлично</div>
          <div class="middle"></div>
          <div class="bottom">Используйте “диспут” при проблемах со специалистом, мы вам поможем</div>
        </div>
      </template>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
      <template v-if="$moment().isBefore($moment(meeting_at))">
        <router-link :to="{ name: 'messages.show', params: { uid } }" class="lm-primary-button middle">В диалог</router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order_id } }" class="lm-primary-button lm-outline-button red middle">Диспут</router-link>
      </template>
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
      meeting_at: {
        type: String,
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
