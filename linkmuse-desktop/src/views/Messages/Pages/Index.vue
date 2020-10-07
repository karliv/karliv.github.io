<template>
    <div class="history_empty">
      <div class="center-empty flex-aling-center">
        <div>
          Пожалуйста, выберите диалог  или <a href="javascript:void(0)" class="start_new" @click="_handleClickCreateDialog">создайте новый</a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    methods: {
      _handleClickCreateDialog () {
        this.$emit('create-dialog')
      }
    }
  }
</script>

<style scoped>

</style>
