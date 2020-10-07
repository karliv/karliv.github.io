<template>
  <div class="page page_feed">
    <div class="page__content">
      <div class="mb_6">
        <div class="heading heading_h2"><router-link :to="{ name: 'board.castings.index' }" class="d-link">Кастинги</router-link></div>
        <div class="heading heading_h2"><router-link :to="{ name: 'board.locations.index' }" class="d-link">Локации</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Объявления'
    },
  }
</script>

<style scoped>

</style>
