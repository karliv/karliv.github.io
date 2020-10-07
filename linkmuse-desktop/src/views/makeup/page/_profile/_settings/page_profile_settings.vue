<template>
  <div class="page_declaration_creating page-inner page_user_settings">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_12">{{ title }}</div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Личные данные
            </div>

            <div class="d-input d-input_row mb_6">
              <label class="d-input__label">Фото профиля</label>
              <div class="column">
                <lm-dropzone :label="'добавить фото'" :mediaModal="false" :max-items="1" :class="['form__dropzone', 'd-upload-zone__field', 'user-profile_img', { 'error': (verrors.has('photos')) }]"
                             :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                             :isDropZone="false"
                             @update="handleUploadItems"
                             @onUpload="_handleAttach"
                             @onRemove="_handleAttachRemove">
                </lm-dropzone>

                <a href="#" class="d-input__link d-input__link_blue mt_4">Загрузить фото</a>

                <template v-if="verrors.has('photos')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('photos') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="user__name" class="d-input__label d-input__label_required">Имя</label>
              <div class="column">
                <input type="text" :placeholder="'Иван'" id="user__name" autocomplete="off"
                       v-validate="'min:3|max:255'"
                       :data-vv-as="'Имя'"
                       :class="['d-input__field', 'w_100' ]"
                       @blur="_handleBlurUpdateField">
                <template v-if="verrors.has('passSystem')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('passSystem') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="user__surname" class="d-input__label d-input__label_required">Фамилия</label>
              <div class="column">
                <input type="text" :placeholder="'Иванов'" id="user__surname" autocomplete="off"
                       v-validate="'min:3|max:255'"
                       :data-vv-as="'Фамилия'"
                       :class="['d-input__field', 'w_100' ]">
                <template v-if="verrors.has('passSystem')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('passSystem') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="user__birthday" class="d-input__label d-input__label_required">Дата рождения</label>
              <div class="column">
                <input type="text" :placeholder="'дд.мм.гггг'" id="user__birthday" autocomplete="off"
                       v-validate="`date_format:DD.MM.YYYY|required`"
                       :data-vv-as="'Дата рождения'"
                       name="birthday"
                       :class="['d-input__field', 'w_100' ]">
                <template v-if="verrors.has('passSystem')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('passSystem') }}</div>
                </template>
              </div>
            </div>

            <div class="d-row mb_6">
              <label class="d-select__label d-select__label_required mr_4 min-w_196">Пол</label>

              <div class="column">
                <div class="d-row">
                  <div :class="['d-checkbox', 'd-checkbox_button', 'w_100', { mr_4: (index === 0) }]" v-for="(gender, index) in sources['genders']">
                    <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="checkbox"
                           name="gender" :value="gender.id" v-model="fields['genders']"
                           data-vv-as="Пол"
                           @change="_handleBlurUpdateField"
                           class="d-checkbox__mark">
                    <label class="d-checkbox__label w_100" :for="`form__checkbox_declaration_gender_${gender.id}`">{{ gender.text }}</label>
                  </div>
                </div>

                <template v-if="(verrors.has('genders'))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('genders') }}</div>
                </template>
              </div>
            </div>

            <div class="d-row mb_6">
              <div class="d-select d-select_row w_100 justify_between">
                <label for="declaration__country" class="d-select__label d-select__label_required mr_4">Страна</label>
                <div class="column">
                  <lm-select
                    input-id="declaration__country"
                    input-name="country"
                    data-vv-name="countryId"
                    data-vv-as="Страна"
                    :options="sources['countries']"
                    v-model="fields.countryId"
                    :placeholder="'Не выбрана'"
                    :multiple="false"
                    :filter="true"
                    @change="_handleBlurUpdateField"
                    @input="_handleChangeCountrySelect(...arguments, true, true, true)"
                    v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                    :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('countryId')) }]">
                  </lm-select>

                  <template v-if="(verrors.has('countryId'))">
                    <div class="d-select__notification d-select__notification_required">{{ verrors.first('countryId') }}</div>
                  </template>

                </div>
              </div>
            </div>

            <div class="d-row mb_6" id="form__select_declaration_city">
              <div class="d-select d-select_row w_100 justify_between">
                <label for="declaration__city" class="d-select__label d-select__label_required mr_4">Город</label>
                <div class="column">
                  <lm-select
                    input-id="declaration__city"
                    input-name="city"
                    data-vv-name="cityId"
                    data-vv-as="Город"
                    :options="sources['cities']"
                    v-model="fields.cityId"
                    :placeholder="'Не выбран'"
                    :multiple="false"
                    :filter="true"
                    @change="_handleBlurUpdateField"
                    :disabled="((hasType === false) || (hasCountry === false) || (sources['cities'].length === 0))"
                    v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                    :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('cityId')) }]">
                  </lm-select>

                  <template v-if="(verrors.has('cityId'))">
                    <div class="d-select__notification d-select__notification_required">{{ verrors.first('cityId') }}</div>
                  </template>
                </div>
              </div>
            </div>

            <div class="d-textarea d-textarea_row d-textarea_markdown mb_6">
              <label for="full-description" class="d-textarea__label">Описание</label>
              <div class="column">
                <div class="d-row" ref="descriptionRow">
                  <textarea :placeholder="'Расскажите о себе'" id="full-description" autocomplete="off"
                    v-validate="'max:65000'"
                    :data-vv-as="'Описание'"
                    name="aboutUser"
                    :style="{ minHeight: '76px' }"
                    :autoinit="false"
                    @input="_handleBlurUpdateField"
                    @focus="_handleFocusDescription"
                    @blur="_handleBlurDescription"
                    :class="[ 'd-textarea', 'w_100' ]">
                  </textarea>
                </div>
                <template v-if="verrors.has('description')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('description') }}</div>
                </template>
              </div>
            </div>

            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label for="interior" class="d-switch__label">
                    Представитель
                    <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipRepresentative">
                      <svg class="d-tooltip__icon ml_2">
                        <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                      </svg>
                    </tooltip>
                  </label>
                  <input id="interior" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" v-model="fields.interior" @change="_handleBlurUpdateField">
                  <label for="interior" class="d-switch__btn"></label>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Контакты
            </div>

            <div class="column">
              <div class="d-select d-select_row w_100 justify_between">
                <label for="messengerID" class="d-select__label mr_4">Мессенджер</label>
                <div class="column">
                  <div class="d-row mb_5">
                    <input type="text" id="messenger"
                           :placeholder="''"
                           v-validate="'min:3|max:255'"
                           :data-vv-as="'id аккаунта'"
                           @blur="_handleBlurUpdateField"
                           :class="[{ 'error': (verrors.has('other')) }, 'd-input__field', 'mr_4']">

                    <input type="text" id="messengerID"
                           :placeholder="'id аккаунта'"
                           v-validate="'min:3|max:255'"
                           :data-vv-as="'id аккаунта'"
                           @blur="_handleBlurUpdateField"
                           :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">

                    <template v-if="(verrors.has('countryId'))">
                      <div class="d-select__notification d-select__notification_required">{{ verrors.first('countryId') }}</div>
                    </template>
                  </div>
                </div>
              </div>


              <div class="d-select d-select_row w_100 justify_between">
                <span class="d-select__label mr_4"></span>
                <div class="column ml_10">
                  <div class="d-input_row justify_between">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue">Добавить еще</a>
                    <a href="javascript:void(0)" class="d-input__link d-input__link_disabled">Удалить</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9 d-input_row justify_between">
              Аккаунт
              <a href="javascript:void(0)" class="d-input__link d-input__link_red" @click="_showModal">Удалить аккаунт</a>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="casting__phone" class="d-input__label mb_2 mr_4">Телефон</label>
              <div class="column">
                <div class="d-row align_center justify_flex-end">
                  <a href="javascript:void(0)" class="d-input__change-link">Изменить</a>
                  <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
                         :placeholder="'+7 900 000 00 00'"
                         v-model="fields.phone"
                         v-validate="'phone'"
                         :data-vv-as="'Телефон'"
                         :disabled="true"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">
                </div>
                <template v-if="verrors.has('phone')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="casting__email" class="d-input__label mb_2 mr_4">E-mail</label>
              <div class="column">
                <div class="d-row">
                  <input type="email" id="casting__email" name="email" autocomplete="off" autocapitalize=off
                         :placeholder="'pochta@gmaill.com'"
                         v-model="fields.email"
                         v-validate="'email'"
                         :data-vv-as="'E-mail'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">
                </div>
                <template v-if="verrors.has('email')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="password" class="d-input__label mb_2 mr_4">Пароль</label>

              <div class="column">
                <div class="d-row">
                  <input type="text" id="password"
                         :placeholder="'Пароль'"
                         v-validate="'min:3|max:255'"
                         :data-vv-as="'Пароль'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                </div>

                <template v-if="verrors.has('other')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="userId" class="d-input__label mb_2 mr_4">
                Адрес страницы
                <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipPageAddress">
                  <svg class="d-tooltip__icon ml_2">
                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                  </svg>
                </tooltip>
              </label>

              <div class="column">
                <div class="d-row">
                  <input type="text" id="userId"
                         :placeholder="'Адрес страницы'"
                         v-validate="'min:3|max:255'"
                         :data-vv-as="'Адрес страницы'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                </div>

                <template v-if="verrors.has('other')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                </template>
              </div>
            </div>

            <div class="d-switched__container w_100 mb_6">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label for="serviceNewsletter" class="d-switch__label">
                    Сервисная рассылка
                  </label>

                  <input id="serviceNewsletter" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" @change="_handleBlurUpdateField">
                  <label for="serviceNewsletter" class="d-switch__btn"></label>
                </div>

                <div class="d-switch w_100">
                  <label for="newsletter" class="d-switch__label">
                    Новостная рассылка
                  </label>

                  <input id="newsletter" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" @change="_handleBlurUpdateField">
                  <label for="newsletter" class="d-switch__btn"></label>
                </div>
              </div>
            </div>

            <div class="d-row ml_auto" style="width: 234px">
              <lm-loader v-if="loadingForm"></lm-loader>
              <template v-if="loadingForm === false">
                <template v-if="(edit && isCurrentUser) || !edit">
                  <button class="d-btn d-btn_primary flex_1" @click="_handleClickActionCasting(PUBLISH)">Сохранить</button>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>





      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" style="z-index: 10; margin-bottom: 50px; position: sticky; top: 104px;">
          <div class="section_declaration_creating section_declaration_creating_big pt_0">
<!--            <lm-loader v-if="loadingForm"></lm-loader>-->
            <button class="d-btn d-btn_primary w_100 mb_3">Сохранить</button>
          </div>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="column mb_6">
              <div class="heading heading_h5">Самое важное</div>
              <div class="sidebar__text">
                Заполните обязательные поля, чтобы сохранить настройки
              </div>
            </div>

            <ul class="list list_required-fields">
              <li :class="['list__item', { 'list__item_active': (hasCategory === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Имя
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Фамилия
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Дата рождения
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Пол
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Страна
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Город
              </li>

            </ul>
          </div>


        </div>
      </div>
    </div>
    <lm-main-footer class="footer-static grey"></lm-main-footer>

    <tempalte v-if="(isModalVisible === true)">
      <div tabindex="-1" @click="_closeModal" role="dialog" :class="['modal', 'modal-center', 'modal_declaration', 'fade', 'in']" style="display: block;">
        <div role="document" class="modal-dialog">
          <div class="modal__content modal__content_declaration modal__content_declaration_casting max-w_360px">
            <div class="modal__title modal__title_declaration_casting">
              Подтвердите действие
            </div>
            <div class="modal__description modal__description_declaration_casting mb_6">
              Вы уверены, что хотите удалить аккаунт и все данные в нем?
            </div>
            <div class="d-row d-row justify_between">
              <button class="d-btn d-btn_secondary flex_1" @click="_closeModal">Отменить</button>
              <button class="d-btn d-btn_delete flex_1">Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade in"></div>
    </tempalte>
  </div>
</template>

<script>
  import { has, HEADER_HEIGHT } from '@utils'

  import formBoard from '@modules/Board/mixins/form.js'
  import formCasting from '@modules/Board/Casting/mixins/form.js'

  export default {
    mixins: [formBoard, formCasting],
    metaInfo: {
      title: 'Редактирование профиля'
    },

    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('board/casting/getSources'),
        store.dispatch('board/casting/clearCastingFields')
      ])
    },

    data () {
      return {
        edit: false,
        isModalVisible: false
      }
    },

    computed: {
      title () {
        return 'Настройки'
      },

      contentTooltipRepresentative () {
        return `<div style="max-width: 164px;">
          <span style="display: block; margin: 0;">
              Включите фильтр, если вы являетесь представителем компании или агенства
          </span>
        </div>`
      },

      contentTooltipPageAddress() {
        return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Адрес страницы может содержать только буквы (A–Z), цифры (0–9) и точки (.), без расширений (.com, .net)
          </span>
        </div>`
      },
    },

    methods: {
      _showModal () {
          return this.isModalVisible = true;
      },

      _closeModal () {
          return this.isModalVisible = false;
      },


      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error');

        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
      },
    }
  }
</script>

<style lang="sass">
  body
    .tooltip .tooltip-inner, .tooltip
      max-width: 258px
  .user-profile_img
    width: 128px
    height: 128px
  .d-upload-zone__field
    min-height: 128px
    .lm-dropzone--uploader
      width: 100%
      height: 100%
      min-height: 128px
      padding: 0
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      border-radius: 8px
      border: 2px dashed #cbd0d8
      span
        width: 124px
    .lm-dropzone--item
      margin: 0
    .lm-dropzone--item--wrap
      width: 128px
      height: 128px
      display: inherit
</style>
