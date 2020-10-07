<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Заказ</div>
    </div>
    <div class="ss-dispute-warning-content">
      <h3>Данный заказ отменен</h3>
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
