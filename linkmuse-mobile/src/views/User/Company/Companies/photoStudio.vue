<template>
  <div class="page page_declaration">
    <div class="page-inner__container">

      <div class="page__body page-inner__body_declaration pb_24">
        <div class="block block_declaration bt_none">
          <div class="heading heading_h4 mb_2">{{ title }}</div>
          <div class="m-text_semi-bold color_gray-2">Фотостудия</div>
        </div>

        <div class="block block_declaration">
          <div class="m-text_bold mb_4">Основная информация</div>

          <div class="form__group form__group_declaration">
            <label for="profession__category" class="label input__label">
              Компания
              <span class="label_declaration_required">•</span>
            </label>
            <div class="lm-dropdown-wrap">
              <div class="lm-dropdown">
                <select id="profession__category" :disabled="edit" @click="_handleClickChangeCompany">
                  <option selected="selected" disabled="disabled" hidden="hidden">Фотостудия</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form__group form__group_declaration">
            <label :for="KEYS['functions']" class="label input__label">Функции</label>
            <input type="text" autocomplete="off"
                   :id="KEYS['functions']" :name="normalizeDotsToArrow(KEYS['functions'])"
                   :placeholder="'Функции'" :data-vv-as="'Функции'"
                   v-validate="'max:255'"
                   v-model="fields[KEYS['functions']]"
                   :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['functions']))) }, 'input', 'form__input', 'form__input_declaration' ]">

            <template v-if="verrors.has(normalizeDotsToArrow(KEYS['functions']))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['functions'])) }}</div>
            </template>
          </div>

          <div class="form__group form__group_declaration">
            <label :for="KEYS['other']" class="label textarea__label textarea__label_declaration">Другое</label>
            <textarea autocomplete="off" rows="13"
                      :id="KEYS['other']" :name="normalizeDotsToArrow(KEYS['other'])"
                      :placeholder="'Другое'" :data-vv-as="'Другое'"
                      v-validate="'max:65000'"
                      v-model="fields[KEYS['other']]"
                      :style="{ minHeight: '76px' }"
                      :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['other']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
            <template v-if="verrors.has(normalizeDotsToArrow(KEYS['other']))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['other'])) }}</div>
            </template>
          </div>
        </div>

        <div class="block block_declaration">
          <div class="m-text_bold mb_4">Ставка</div>
          <rate-filed v-model="fields[KEYS['rate']]" :currencies="sources['lists']['valyuty']" :periods="sources['lists']['vybor-perioda']"></rate-filed>
        </div>
        <participation-in-projects-filed v-model="fields[KEYS['participationInProjects']]" class="pb_24"></participation-in-projects-filed>

        <template v-if="(edit === false && showReset === true)">
          <div class="form__group form__group_declaration">
            <button class="btn btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
          </div>
        </template>
      </div>
    </div>

    <div class="page__footer page-inner__footer">
      <div class="page-inner__body_declaration">
        <div class="row row_justify_between">
          <button class="btn btn_secondary" @click="_handleClickPreviousPage">
            Назад
          </button>
          <button class="btn btn_primary" @click="_handleClickActionCompany">
            {{ isPublished ? 'Сохранить' :  'Опубликовать' }}
          </button>
        </div>
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
  import ParticipationInProjectsFiled from '@components/User/Сompany/Form/Fields/ParticipationInProjects.vue'

  export default {
    mixins: [UserFormMixin],
    components: { RateFiled, ParticipationInProjectsFiled },
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
        companyName: 'photo-studio',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['other']]: null,
          [KEYS['functions']]: [],
          [KEYS['participationInProjects']]: []
        }
      }
    }
  }
</script>

<style scoped>

</style>
