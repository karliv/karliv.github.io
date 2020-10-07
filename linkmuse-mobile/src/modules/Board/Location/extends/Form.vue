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

      <div class="section form__section_declaration">
        <div class="moderate_rules">
          <div class="moderate_rules__title">Будте внимательны</div>
          <div class="moderate_rules__text">После публикации объявление будет отправлено на модерацию</div>
          <a class="moderate_rules__link" href="https://m.linkmuse.com/pages/politika-moderacii-obyavlenij-linkmuse" target="_blank">Правила модерации</a>
        </div>
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
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_location__type" class="label input__label">
            Тип локации
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('type')) }]"
                     data-vv-name="type"
                     data-vv-as="Тип локации"
                     v-model="fields.type"
                     :input-required="false"
                     input-id="form__select_declaration_location__type"
                     input-name="category"
                     :placeholder="'Не выбрано'"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     v-validate="'required'"
                     @input="_handleInputType"
                     @change="_handleBlurUpdateField"
                     :options="sources['types']">
          </lm-select>

          <template v-if="(verrors.has('type'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('type') }}</div>
          </template>
        </div>
        <template v-if="(isRoom === true)">
          <div class="form__group form__group_declaration" id="form__group_declaration_roomType">
            <label for="form__select_declaration_location__roomType" class="label input__label">
              Тип помещения
              <span class="label_declaration_required">•</span>
            </label>
            <lm-select :class="[{ 'error': (verrors.has('roomType')) }]"
                       data-vv-name="roomType"
                       data-vv-as="Тип помещения"
                       v-model="fields.roomType"
                       :input-required="false"
                       input-id="form__select_declaration_location__roomType"
                       input-name="category"
                       :placeholder="'Не выбрано'"
                       :placeholderDisabled="true"
                       :placeholderHidden="true"
                       label=""
                       v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                       @change="_handleBlurUpdateField"
                       :options="sources['roomTypes']">
            </lm-select>

            <template v-if="(verrors.has('roomType'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('roomType') }}</div>
            </template>
          </div>
        </template>
      </div>
      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasType === false) }]">
        <template v-if="(isRoom === true)">
          <div class="form__group form__group_declaration">
            <label for="form__input_declaration_roomHeight" class="label input__label">
              Высота помещения (м)
            </label>
            <input type="number" inputmode="numeric" pattern="[0-9]*" data-numeric-input="" data-numeric-input-nav-disabled="" data-enhanced-numeric-input=""
                    id="form__input_declaration_roomHeight" name="roomHeight" :placeholder="'Введите число'"
                   v-model="fields.roomHeight" v-mask-decimal="{ digits: 2 }"
                   @blur="_handleBlurUpdateField"
                   v-validate="'decimal:2|min:1|max_value:9999'"
                   :data-vv-as="'Высота помещения'"
                   :disabled="(hasType === false)"
                   :class="[{ 'error': (verrors.has('roomHeight')) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('roomHeight'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('roomHeight') }}</div>
            </template>
          </div>
        </template>

        <div class="form__group form__group_declaration" id="form__group_declaration_dimension">
          <label for="form__input_declaration_casting-title" class="label input__label">
            Общая площадь (м²)
            <span class="label_declaration_required">•</span>
          </label>
          <input type="number" inputmode="numeric" pattern="[0-9]*" data-numeric-input="" data-numeric-input-nav-disabled="" data-enhanced-numeric-input=""
                 id="form__input_declaration_casting-title"name="dimension" :placeholder="'Введите число'"
                 v-model="fields.dimension" v-mask-decimal="{ digits: 2 }"
                 @blur="_handleBlurUpdateField"
                 v-validate ="{ rules: { required: (isPublishLocationTransition), decimal: 2 } }"
                 :data-vv-as="'Общая площадь'"
                 :disabled="(hasType === false)"
                 :class="[{ 'error': (verrors.has('dimension')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('dimension'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('dimension') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_payment" class="label input__label">
                Цена (от)
                <span class="label_declaration_required">•</span>
              </label>
              <input type="number" pattern="[0-9]*" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     id="form__input_declaration_payment" name="price" :disabled="(hasType === false)"
                     data-vv-as="Цена"
                     placeholder="Введите сумму"
                     v-model="fields.price" v-mask-numeric
                     @blur="_handleBlurUpdateField"
                     v-validate ="{ rules: { required: (isPublishLocationTransition), numeric: true, min: 1, max_value: 9999999 } }"
                     :class="[{ 'error': (verrors.has('price')) }, 'input', 'form__input', 'form__input_declaration']">
            </div>
            <div class="form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency" style="min-width: 72px;">
              <label for="form__select_currency" class="label input__label">
                Валюта
              </label>
              <lm-select :class="[{ 'error': (verrors.has('currencyId')) }]"
                         data-vv-name="currencyId"
                         data-vv-as="Валюта"
                         v-model="fields.currencyId"
                         :input-required="false"
                         input-id="form__select_currency"
                         input-name="currencyId"
                         :placeholder="'Валюта'"
                         :placeholderDisabled="true"
                         :placeholderHidden="true"
                         label=""
                         @change="_handleBlurUpdateField"
                         :disabled="(!Number(fields.price))"
                         v-validate ="{ rules: { required: (Number(fields.price)) } }"
                         :options="currencies">
              </lm-select>
            </div>
          </div>
          <template v-if="(verrors.has('price'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('price') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_period_payment" class="label input__label">
            Период оплаты
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('paymentPeriod')) }]"
                     data-vv-name="paymentPeriod"
                     data-vv-as="Период оплаты"
                     v-model="fields.paymentPeriod"
                     :input-required="false"
                     input-id="form__select_period_payment"
                     input-name="paymentPeriod"
                     placeholder="Не выбран"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     @change="_handleBlurUpdateField"
                     :disabled="(!Number(fields.price))"
                     v-validate ="{ rules: { required: (Number(fields.price)) } }"
                     :options="sources['paymentPeriods']">
          </lm-select>
          <template v-if="(verrors.has('paymentPeriod'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('paymentPeriod') }}</div>
          </template>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasType === false) }]">
        <div class="form__group form__group_declaration">
          <label class="label input__label">
            Фотографии
            <span class="label_declaration_required">•</span>
          </label>
          <template v-if="showFieldForm">
            <lm-dropzone :label="'добавить фото'" :mediaModal="false" :max-items="10" :disabled="(hasType === false || isAuthorized === false)" class="form__dropzone"
                         :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                         @update="handleUploadItems"
                         @onUpload="_handleAttach"
                         @onRemove="_handleAttachRemove">
            </lm-dropzone>
          </template>

          <template v-if="(verrors.has('photos'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('photos') }}</div>
          </template>
        </div>
        <template v-if="(isConcertHall === true || isTheater === true || isPavilion === true || isPhotoStudio === true)">
          <div class="form__group form__group_declaration">
            <label for="declaration__facilities" class="label input__label">
              Удобства и услуги
            </label>
            <input id="declaration__facilities" type="text" name="facilities" :placeholder="'Wi-Fi, бар, гример, стилист'"
                   v-model="fields.facilities"
                   @blur="_handleBlurUpdateField"
                   v-validate="'min:3|max:255'"
                   :data-vv-as="'Удобства и услуги'"
                   :disabled="(hasType === false)"
                   :class="[{ 'error': (verrors.has('facilities')) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('facilities'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('facilities') }}</div>
            </template>
          </div>
          <div class="form__group form__group_declaration">
            <label for="declaration__equipment" class="label input__label">
              Оборудование
            </label>
            <input id="declaration__equipment" type="text" name="facilities" :placeholder="'Свет, камеры, крепления'"
                   v-model="fields.equipment"
                   @blur="_handleBlurUpdateField"
                   v-validate="'min:3|max:255'"
                   :data-vv-as="'Оборудование'"
                   :disabled="(hasType === false)"
                   :class="[{ 'error': (verrors.has('equipment')) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('equipment'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('equipment') }}</div>
            </template>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
              Описание
            </label>
            <textarea id="form__textarea_casting-description" rows="13" name="description" v-model="fields.description"
                      :data-vv-as="'Описание'"
                      @blur="_handleBlurUpdateField"
                      v-validate="'min:3|max:65000'"
                      :disabled="(hasType === false)"
                      :placeholder="placeholderDescription"
                      :class="[{ 'error': (verrors.has('description')) }, 'textarea', 'form__textarea', 'form__textarea_declaration']">
            </textarea>
            <template v-if="(verrors.has('description'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('description') }}</div>
            </template>
          </div>
          <div class="form__group form__group_declaration form__group_declaration_switch" style="box-sizing: border-box;">
            <div class="form__row form__row_declaration form__row_declaration_payment">
              <template v-for="item in equipmentAndFacilities" v-if="equipCondition(item.id)">
                <div class="switch switch_declaration">
                  <label :for="`form__checkbox_${item.field}`" class="switch__label">{{ item.text }}</label>
                  <input :id="`form__checkbox_${item.field}`" type="checkbox" class="switch__mark" true-value="1" false-value="0" :name="item.field" v-model="fields[item.field]" :disabled="(hasType === false)" @change="_handleBlurUpdateField">
                  <label :for="`form__checkbox_${item.field}`" class="switch__btn"></label>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasType === false) }]">
        <div class="form__group form__group_declaration">
          <label for="declaration__passSystem" class="label input__label">
            Проходная система
          </label>
          <input id="declaration__passSystem" type="text" name="passSystem" :placeholder="'По записи, по паспорту'" autocomplete="off"
                 v-model="fields.passSystem"
                 @blur="_handleBlurUpdateField"
                 v-validate="'min:3|max:255'"
                 :data-vv-as="'Проходная система'"
                 :disabled="(hasType === false)"
                 :class="[{ 'error': (verrors.has('passSystem')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('passSystem'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('passSystem') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration" id="form__select_declaration_country">
          <label class="label input__label">
            Страна
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('countryId')) }]"
                     :searchable="true" :filterable="true" :title="'Выбор страны'"
                     data-vv-name="countryId"
                     :data-vv-as="'Страна'"
                     v-model="fields.countryId"
                     :input-required="false"
                     input-id="form__select_declaration_coutry"
                     input-name="country"
                     :placeholder="$t('board-create-casting.new-casting.category-not-selected')"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     @input="_handleChangeCountrySelect(...arguments, true, true)"
                     v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                     :disabled="(hasType === false)"
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
                     @search="_handleSearchCities" :searchable="true" :filterable="false" :loading="loadingCities" :title="'Выбор города'"
                     data-vv-name="cityId"
                     :data-vv-as="'Город'"
                     :input-required="false"
                     v-model="fields.cityId"
                     input-id="form__select_declaration_city"
                     input-name="city"
                     :placeholder="'Не выбран'"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     @change="_handleBlurUpdateField"
                     v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                     :disabled="((hasType === false) || (hasCountry === false))"
                     :options="sources['cities']">
          </lm-select>
          <template v-if="(verrors.has('cityId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('cityId') }}</div>
          </template>
        </div>

        <template v-if="noSsr && showFieldForm">
          <div class="form__group form__group_declaration">
            <label for="form__input_declaration_address" class="label input__label">
              Адрес
            </label>
            <gmap-autocomplete type="text" :placeholder="'ул. Большая садовая, д. 1'" id="form__input_declaration_address" autocomplete="off"
                   @blur="_handleBlurUpdateField"
                   v-validate="'min:3|max:255'"
                   :data-vv-as="'Адрес'"
                   v-model="fields['address']['address']" name="address" ref="address"
                   :disabled="(hasType === false)"
                   @place_changed="setPlaceLocation"
                   :class="[{ 'error': (verrors.has('address')) }, 'input', 'form__input', 'form__input_declaration' ]">
              </gmap-autocomplete>
            <template v-if="(verrors.has('address'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('address') }}</div>
            </template>
          </div>
        </template>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasType === false), 'bb_none': edit}]">
        <div class="form__group form__group_declaration">
          <label for="casting__phone" class="label input__label">
            Телефон
            <span class="label_declaration_required">•</span>
          </label>
          <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
                 :placeholder="'+7 900 000 00 00'"
                 v-model="fields.phone"
                 v-validate="'phone'"
                 :data-vv-as="'Телефон'"
                 @blur="_handleBlurUpdateField"
                 :disabled="(hasType === false)"
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
                 @blur="_handleBlurUpdateField"
                 :disabled="(hasType === false)"
                 :class="[{ 'error': (verrors.has('email')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('email'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('email') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label for="casting__site" class="label input__label">
            Сайт
          </label>
          <input type="text" id="casting__site" name="site" autocomplete="off" autocapitalize=off
                 :placeholder="'Введите url'"
                 v-model="fields.site"
                 v-validate="{ url: { require_protocol: false } }"
                 :data-vv-as="'Сайт'"
                 @blur="_handleBlurUpdateField"
                 :disabled="(hasType === false)"
                 :class="[{ 'error': (verrors.has('site')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('site'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('site') }}</div>
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
                 @blur="_handleBlurUpdateField"
                 :disabled="(hasType === false)"
                 :class="[{ 'error': (verrors.has('other')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('other'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('other') }}</div>
          </template>
        </div>
      </div>

      <template v-if="isAuthorized && isRegistered">
        <template v-if="(edit === false && showReset === true)">
          <section class="section form__section form__section_declaration">
            <button class="btn btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
          </section>
        </template>

        <div class="row justify_between">
          <button class="btn btn_secondary" @click="_handleClickPreviousPage">Отмена</button>

          <template v-if="(edit && isCurrentUser) || !edit">
            <button class="btn btn_primary" @click="_handleClickActionLocation(PUBLISH)">Опубликовать</button>
          </template>

          <template v-if="edit && isAdmin && isCurrentUser === false">
            <button class="btn btn_primary" @click="_handleClickActionLocation(PUBLISH)">Изменить</button>
          </template>
        </div>
      </template>

      <template v-if="(isAuthorized === false || (isAuthorized === true && (isRegistered === false)))">
        <sign-block :disabled="(hasType === false)"></sign-block>
      </template>
    </div>
  </div>
</template>

<script>
  import SignBlock from '@components/Board/SignBlock.vue'

  export default {
    components: {
      SignBlock
    }
  }
</script>

<style lang="sass">
  .moderate_rules
    &__title
      color: #282a36
      font-size: 14px
      margin-bottom: 8px
      font-weight: 600
    &__text
      color: #515562
      font-size: 14px
      line-height: 1.29
      margin-bottom: 8px
    &__link
      color: #0d69dc
      font-size: 14px
      font-weight: 600
    padding: 20px
    border-radius: 8px
    background-color: #ebf3fc

</style>
