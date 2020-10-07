<template>
  <div class="d-row justify_center pt_12">
    <div class="page__body page__body_declaration_creating_second">
      <div class="heading heading_h2 mb_2">{{ title }}</div>
      <div class="d-input__label mb_12">Модельное агенство</div>

      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="column w_100">
          <div class="heading heading_h4 mb_9">Основная информация</div>

          <div class="d-input d-input_row mb_6">
            <label for="profession__category" class="d-input__label d-input__label_required">Компания</label>
            <div class="column">
              <div class="lm-w-dropdown-wrap lm-dropdown-wrap--n w_100">
                <div :class="['lm-w-dropdown', { disabled: edit }]">
                  <input placeholder="Не выбрано" id="profession__category" readonly="readonly" autocomplete="off" :disabled="(edit === true)"
                          value="Модельное агенство" class="readonly lm-w-dropdown-selected" @click="_handleClickChangeCompany">
                  <i class="lm-w-dropdown-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label :for="KEYS['functions']" class="d-input__label">Функции</label>
            <div class="column">
              <input type="text" autocomplete="off"
                     :id="KEYS['functions']" :name="normalizeDotsToArrow(KEYS['functions'])"
                     :placeholder="'Функции'" :data-vv-as="'Функции'"
                     v-validate="'max:255'"
                     v-model="fields[KEYS['functions']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['functions']))) }, 'd-input__field', 'w_100' ]">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['functions']))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['functions'])) }}</div>
              </template>
            </div>
          </div>

          <div class="d-textarea d-input_row">
            <label :for="KEYS['other']" class="d-input__label">Другое</label>
            <div class="column">
              <div class="d-row">
                  <textarea-autosize autocomplete="off"
                            :id="KEYS['other']" :name="normalizeDotsToArrow(KEYS['other'])"
                            :placeholder="'Другое'" :data-vv-as="'Другое'"
                            v-validate="'max:65000'"
                            v-model="fields[KEYS['other']]"
                            :min-height="76" :max-height="350"
                            :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['other']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
              </div>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['other']))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['other'])) }}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="column w_100">
          <div class="heading heading_h4 mb_9">Ставка</div>
          <rate-filed v-model="fields[KEYS['rate']]" :currencies="sources['lists']['valyuty']" :periods="sources['lists']['vybor-perioda']" ></rate-filed>
        </div>
      </div>
      <div class="section_declaration_creating section_declaration_creating_big">
        <participation-in-projects-filed v-model="fields[KEYS['participationInProjects']]"></participation-in-projects-filed>
      </div>
    </div>
    <div class="sidebar page__sidebar page__sidebar_declaration_creating">
      <div class="sidebar__content" :style="{ zIndex: 10, marginBottom: '50px' }" v-sticky="{ zIndex: 10, stickyTop: 104 }">
        <div class="section_declaration_creating section_declaration_creating_big pt_0">
          <button class="d-btn d-btn_primary w_100" @click="_handleClickActionCompany">{{ isPublished ? 'Сохранить' :  'Опубликовать' }}</button>
        </div>
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column mb_6">
            <div class="heading heading_h5">Самое важное</div>
            <div class="sidebar__text">Заполните рекомендуемые поля, чтобы опубликовать профессию</div>
          </div>

          <list-required-fields :fields="fields"></list-required-fields>
        </div>
        <template v-if="(edit === false && showReset === true)">
          <div class="section_declaration_creating section_declaration_creating_big">
            <button class="d-btn d-btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  const KEYS = {
    rate: 'rate',
    other: 'other',
    functions: 'functions',
    participationInProjects: 'participation-in-projects',
  }

  import UserFormMixin from '@modules/User/Company/mixins/form'
  import RateFiled from '@components/User/Сompany/Form/Fields/Rate.vue'
  import ListRequiredFields from '@components/User/Profession/Form/ListRequiredFields.vue'
  import ParticipationInProjectsFiled from '@components/User/Сompany/Form/Fields/ParticipationInProjects.vue'

  export default {
    mixins: [UserFormMixin],
    components: { RateFiled, ParticipationInProjectsFiled, ListRequiredFields },
    props: {
      edit: {
        type: Boolean
      }
    },
    provide() {
      return {
        $validator: this.$validator
      }
    },
    data () {
      return {
        KEYS,
        companyName: 'model-agency',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['other']]: null,
          [KEYS['functions']]: null,
          [KEYS['participationInProjects']]: []
        }
      }
    }
  }
</script>

<style scoped>

</style>
