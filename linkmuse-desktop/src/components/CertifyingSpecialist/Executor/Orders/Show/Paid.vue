<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Согласование времени</div>
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
      <h3>Согласуйте время встречи</h3>
      <div class="ss-dispute-warning-desc">
        В диалоге справа вам необходимо договориться о времени и месте встречи со специалистом. Согласовав удобную для вас дату, специалист укажет точное время встречи в системе. В день встречи вам придёт напоминание.
      </div>
      <div class="ss-dispute-warning-desc">
        Будьте вежливы!
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
