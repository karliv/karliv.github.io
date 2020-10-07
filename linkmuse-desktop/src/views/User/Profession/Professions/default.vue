<template>
  <div class="d-row justify_center pt_12">
    <div class="page__body page__body_declaration_creating_second">
      <div class="heading heading_h2 mb_2">{{ title }}</div>
      <div class="d-input__label mb_12">{{ profession }}</div>
    </div>
    <div class="sidebar page__sidebar page__sidebar_declaration_creating">
      <div class="sidebar__content" :style="{ zIndex: 10, marginBottom: '50px' }" v-sticky="{ zIndex: 10, stickyTop: 104 }">
        <div class="section_declaration_creating section_declaration_creating_big pt_0">
          <button class="d-btn d-btn_primary w_100" disabled>Опубликовать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Default',
    computed: {
      title () {
        return 'Новая профессия'
      },
      profession () {
        return 'Профессия не найдена'
      }
    }
  }
</script>

<style scoped>

</style>
