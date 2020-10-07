<template>
  <div class="page page_declaration">
    <div class="form form_declaration">
      <!-- header -->
      <div class="form__header form__header_declaration">
        <div class="form__title form__title_declaration">{{ title }}</div>

        <button class="form__button_close_declaration" @click="_handleClickPreviousPage">
          <svg class="btn__icon icon_fill_white">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-close" />
          </svg>
        </button>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_type" class="label input__label">
            Тип объявления
            <span class="label_declaration_required">•</span>
          </label>

          <lm-select label=""
                     data-vv-as="Тип объявления"
                     v-model="fields['categoryBoard']"
                     :input-required="false"
                     input-id="form__select_declaration_type"
                     input-name="categoryBoard"
                     :placeholder="'Не выбрано'"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     :disabled="(edit === true)"
                     @input="_handleInputBoardType"
                     :options="boardTypes">
          </lm-select>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': true }]">
        <div class="form__group form__group_declaration">
          <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
            Описание
          </label>
          <textarea id="form__textarea_casting-description" rows="13" name="description" v-model="fields.description"
                    :data-vv-as="'Описание'"
                    v-validate="'min:3|max:65000'"
                    :disabled="true"
                    :placeholder="placeholderDescription"
                    :class="[{ 'error': (verrors.has('description')) }, 'textarea', 'form__textarea', 'form__textarea_declaration']">
          </textarea>
          <template v-if="(verrors.has('description'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('description') }}</div>
          </template>
        </div>
      </div>
      <div :class="['section form__section', 'form__section_declaration', { 'form__section_declaration_disabled': true }]">
        <div class="form__group form__group_declaration">
          <label class="label input__label">
            Страна
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('countryId')) }]"
                     data-vv-name="countryId"
                     :data-vv-as="'Страна'"
                     v-model="fields.countryId"
                     :input-required="false"
                     input-id="form__select_declaration_coutry"
                     input-name="country"
                     placeholder="Страна"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     :disabled="true"
                     :options="sources['countries']">
          </lm-select>
          <template v-if="(verrors.has('countryId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('countryId') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_city" class="label input__label">
            Город
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('cityId')) }]"
                     data-vv-name="cityId"
                     :data-vv-as="'Город'"
                     :input-required="false"
                     v-model="fields.cityId"
                     input-id="form__select_declaration_city"
                     input-name="city"
                     :placeholder="'Город'"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     :disabled="true"
                     :options="sources['cities']">
          </lm-select>
          <template v-if="(verrors.has('cityId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('cityId') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_address" class="label input__label">
            Адрес
          </label>
          <input type="text" :placeholder="'ул. Большая садовая, д. 1'" id="form__input_declaration_address"
                 v-validate="'min:3|max:255'"
                 :data-vv-as="'Адрес'"
                 v-model="fields['address']" name="address" ref="address"
                 :disabled="true"
                 :class="[{ 'error': (verrors.has('address')) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="(verrors.has('address'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('address') }}</div>
          </template>
        </div>
      </div>
      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': true }]">
        <div class="form__group form__group_declaration">
          <label for="casting__phone" class="label input__label">
            Телефон
          </label>
          <input type="tel" id="casting__phone" name="phone" autocomplete="off"
                 :placeholder="'+7 900 000 00 00'"
                 v-model="fields.phone"
                 v-validate="'phone'"
                 :data-vv-as="'Телефон'"
                 :disabled="true"
                 :class="[{ 'error': (verrors.has('phone')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('phone'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('phone') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label for="casting__email" class="label input__label">
            E-mail
          </label>
          <input type="email" id="casting__email" name="email" autocomplete="off" autocapitalize=off
                 :placeholder="'pochta@gmaill.com'"
                 v-model="fields.email"
                 v-validate="'email'"
                 :data-vv-as="'E-mail'"
                 :disabled="true"
                 :class="[{ 'error': (verrors.has('email')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('email'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('email') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label for="casting__other" class="label input__label">
            Другое
          </label>
          <input type="text" id="casting__other" name="other" autocomplete="off" autocapitalize=off
                 :placeholder="'Телефон, почта или соц сеть'"
                 v-model="fields.other"
                 v-validate="'min:3|max:255'"
                 :data-vv-as="'Другое'"
                 :disabled="true"
                 :class="[{ 'error': (verrors.has('other')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('other'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('other') }}</div>
          </template>
        </div>
      </div>

      <div class="row justify_between">
        <button class="btn btn_secondary" @click="_handleClickPreviousPage">отмена</button>
        <button class="btn btn_primary" disabled>опубликовать</button>
      </div>
    </div>
  </div>
</template>

<script>
  import formBoard from '@modules/Board/mixins/form.js'

  export default {
    mixins: [formBoard],
    metaInfo: {
      title: 'Создание объявления'
    },
    data () {
      return {
        edit: false,
        sources: {

        },
        fields: {
          categoryBoard: null,
          description: null,
          countryId: null,
          cityId: null
        }
      }
    },
    computed: {
      title () {
        return 'Новое объявление'
      },
      placeholderDescription () {
        return 'Расскажите в подробностях об объявлении. Опишите необходимые параметры, возможности и время работы\n\n' +
          'Информация из описания должна соответствовать всем заполненным полям\n\n' +
          'В описании запрещено указывать контактные данные и ссылки на другие ресурсы\n\n '
      },
    },
    methods: {
      _handleClickPreviousPage () {
        this._handlePreviousPage()
      },
      _handlePreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'board.castings.index' })
      },
    }
  }
</script>

<style scoped>

</style>
