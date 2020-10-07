<template>
  <div class="page_declaration_creating">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_0">{{ title }}</div>

        <div class="section_declaration_creating section_declaration_creating_big bt_none">
          <div class="d-input d-input_row">
            <label for="declaration__category" class="d-input__label d-input__label_required mr_4">Тип объявления</label>

            <lm-select v-model="fields['categoryBoard']"
                       :options="boardTypes"
                       input-id="declaration__category"
                       input-name="category"
                       :disabled="(edit === true)"
                       :placeholder="'Не выбрано'"
                       @input="_handleInputBoardType"
                       :class="['lm-dropdown-wrap--n', 'w_100']">
            </lm-select>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : true }]">
          <div class="d-textarea d-input_row">
            <label for="full-description" class="d-input__label mr_4">Описание</label>

            <div class="column">
              <div class="d-row" ref="descriptionRow">
                <wysiwyg-markdown id="full-description" rows="5" name="description" v-model="fields.description"
                                  :autoinit="false"
                                  v-validate="'max:65000'"
                                  ref="wysiwygDescription"
                                  :data-vv-as="'Описание'"
                                  :disabled="true"
                                  :placeholder="placeholderDescription"
                                  :style="{ maxWidth: '484px' }"
                                  :class="[{ 'error': (verrors.has('description')) }, 'w_100']">
                </wysiwyg-markdown>
              </div>

              <template v-if="verrors.has('description')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('description') }}</div>
              </template>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : true }]">
          <div class="d-input d-input_row mb_6">
            <label for="declaration__country" class="d-input__label d-input__label_required mr_4">{{ $t('location.location.country') }}</label>

            <div class="column">
              <lm-select
                input-id="declaration__country"
                input-name="country"
                data-vv-name="countryId"
                :data-vv-as="$t('location.location.country')"
                :options="sources['countries']"
                v-model="fields.countryId"
                :placeholder="'Не выбрана'"
                :multiple="false"
                :filter="true"
                :disabled="true"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('countryId')) }]">
              </lm-select>

              <template v-if="(verrors.has('countryId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('countryId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="declaration__city" class="d-input__label d-input__label_required mr_4">Город</label>

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
                :disabled="true"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('cityId')) }]">
              </lm-select>

              <template v-if="(verrors.has('cityId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('cityId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row">
            <label for="declaration__address" class="d-input__label mr_4">Адрес</label>

            <div class="column">
              <input type="text" :placeholder="'ул. Большая садовая, д. 1'" id="declaration__address" autocomplete="off"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="'Адрес'"
                     v-model="fields['address']" name="address" ref="address"
                     :disabled="true"
                     :class="['d-input__field', 'w_100', { 'error': (verrors.has('address')) }]">

              <template v-if="verrors.has('address')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('address') }}</div>
              </template>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : true }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting__phone" class="d-input__label d-input__label_required mr_4">Телефон</label>

            <div class="column">
              <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
                     :placeholder="'+7 900 000 00 00'"
                     v-model="fields.phone"
                     :data-vv-as="'Телефон'"
                     :disabled="true"
                     :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">

              <template v-if="verrors.has('phone')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__email" class="d-input__label mr_4">E-mail</label>

            <div class="column">
              <input type="email" id="casting__email" name="email" autocomplete="off" autocapitalize=off
                     :placeholder="'pochta@gmaill.com'"
                     v-model="fields.email"
                     v-validate="'email'"
                     :data-vv-as="'E-mail'"
                     :disabled="true"
                     :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">

              <template v-if="verrors.has('email')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__other" class="d-input__label mr_4">Другое</label>

            <div class="column">
              <input type="text" id="casting__other" name="other" autocomplete="off" autocapitalize=off
                     :placeholder="'Телефон, почта или соц сеть'"
                     v-model="fields.other"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="'Другое'"
                     :disabled="true"
                     :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">

              <template v-if="verrors.has('other')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
              </template>
            </div>
          </div>

          <div class="d-row max-w_484px ml_auto">
            <button class="d-btn d-btn_primary flex_1" :disabled="true">Опубликовать</button>
          </div>
        </div>
      </div>

      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content">
          <div class="section_declaration_creating section_declaration_creating_big pt_0">
            <button class="d-btn d-btn_primary w_100" :disabled="true">Опубликовать</button>
          </div>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="column mb_6">
              <div class="heading heading_h5">Самое важное</div>
              <div class="sidebar__text">
                Заполните обязательные поля, чтобы опубликовать объявление
              </div>
            </div>

            <ul class="list list_required-fields">
              <li class="list__item">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Тип объявления
              </li>
              <li class="list__item">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.location.country') }}
              </li>
              <li class="list__item">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Город
              </li>
              <li class="list__item">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Телефон
              </li>
            </ul>
          </div>

          <div class="section_declaration_creating section_declaration_creating_big">

            <div class="column mb_12">
              <div class="heading heading_h5">Будьте внимательны</div>
              <div class="sidebar__text">После публикации объявление будет отправлено на модерацию</div>
              <a class="link-moderate-rules w_100" href="https://linkmuse.com/pages/politika-moderacii-obyavlenij-linkmuse" target="_blank">Правила модерации</a>
            </div>

            <!--
            <div class="column">
              <div class="heading heading_h5">Простая проверка</div>
              <div class="sidebar__text">Используйте предпросмотр объявления <br> первоначально сохранив его в черновик</div>
            </div>
            -->

          </div>
        </div>
      </div>
    </div>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
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
  }
</script>

<style lang="sass">
  .link-moderate-rules
    font-size: 14px
    color: #0063db
    margin-top: 8px

</style>
