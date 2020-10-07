<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Согласование времени</div>
      <i class="icon-more" v-if="(refusedDispute === false)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.customer.orders.show.dispute', params: { order_id: order_id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content">
      <h3>Ожидается подтверждение</h3>
      <div class="ss-dispute-warning-desc">
        Дождитесь согласования встречи со стороны заказчика. В случае если заказчик не подтвердит дату встречи и не ответит в диалоге, начните диспут. Спор будет передан на рассмотрение модераторам Linkmuse.
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
