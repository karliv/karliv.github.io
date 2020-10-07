<template lang="html">
  <mt-popup class="lm-m-modal-wrap modal modal_talent-phone" v-model="value" position="center" :modal="true">
    <div class="modal__content">
      <a href="#" class="modal__phone">+7 960 838-32-71</a>
      <div class="mt_4">Сообщите таланту, что вы нашли его на Линкмьюсе</div>
    </div>
  </mt-popup>
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }

  }
</script>

<style lang="css" scoped>
</style>
