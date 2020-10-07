<template>
  <div class="page_declaration_creating">
    <div class="page__body page__body_declaration_creating">
      <div class="heading heading_h2 mb_0">Создание объявления</div>


      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="section_declaration_creating section_declaration_creating_small">
          <div class="d-input d-input_multiple mb_6">
            <label for="casting__date" class="d-input__label mb_2">Укажите дату кастинга (с – по)</label>
            <div class="d-row">
              <no-ssr>
                <datepicker v-model="dateOne" format="dd.MM.yyyy"
                            calendar-class=""
                            id="casting__date"
                            input-class="d-input__field"
                            wrapper-class="mr_2">
                </datepicker>
              </no-ssr>
              <no-ssr>
                <datepicker v-model="dateTwo" format="dd.MM.yyyy"
                            :minimumView="'day'" :maximumView="'year'"  :initialView="'year'"
                            calendar-class=""
                            id="casting__date2"
                            input-class="d-input__field"
                            wrapper-class="ml_2">
                </datepicker>
              </no-ssr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        dateOne: null,
        dateTwo: null,
      }
    }
  }
</script>

<style scoped>

</style>
