<template>
  <div class="page_declaration_creating">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_0">{{ $t('location.create-location-page.new-ad') }}</div>

        <div class="section_declaration_creating section_declaration_creating_big bt_none">
          <div class="d-input d-input_row mb_6">
            <label for="declaration__category" class="d-input__label d-input__label_required">Тип объявления</label>

            <lm-select v-model="fields['categoryBoard']"
                       :options="boardTypes"
                       input-id="declaration__category"
                       input-name="category"
                       :disabled="(edit === true)"
                       :placeholder="$t('location.create-location-page.not-chosen')"
                       @input="_handleInputBoardType"
                       :class="['lm-dropdown-wrap--n', 'w_100']">
            </lm-select>
          </div>

          <div class="d-input d-input_row">
            <label for="location__type" class="d-input__label d-input__label_required">{{ $t('location.create-location-page.location-type') }}</label>

            <div class="column">
              <lm-select
                input-id="location__type"
                input-name="type"
                data-vv-name="type"
                :data-vv-as="$t('location.create-location-page.location-type')"
                :options="sources['types']"
                v-model="fields.type"
                v-validate="'required'"
                :placeholder="$t('location.create-location-page.not-chosen')"
                :multiple="false"
                :filter="false"
                @input="_handleInputType"
                @change="_handleBlurUpdateField"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('type')) }]">
              </lm-select>

              <template v-if="(verrors.has('type'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('type') }}</div>
              </template>
            </div>
          </div>

          <template v-if="(isRoom === true)">
            <div class="d-input d-input_row mt_6" id="form__group_declaration_roomType">
              <label for="casting__roomType" class="d-input__label d-input__label_required">{{ $t('location.location.room-type') }}</label>

              <div class="column">
                <lm-select
                  input-id="casting__roomType"
                  input-name="roomType"
                  data-vv-name="roomType"
                  :data-vv-as="$t('location.location.room-type')"
                  :options="sources['roomTypes']"
                  v-model="fields.roomType"
                  v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                  :placeholder="$t('location.create-location-page.not-chosen')"
                  :multiple="false"
                  :filter="false"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('roomType')) }]">
                </lm-select>

                <template v-if="(verrors.has('roomType'))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('roomType') }}</div>
                </template>
              </div>
            </div>
          </template>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasType === false) }]">
          <template v-if="(isRoom === true)">
            <div class="d-input d-input_row mb_6">
              <label for="input_roomHeight" class="d-input__label">{{ $t('location.location.room-height') }}</label>

              <div class="column">
                <input type="text" min="1" inputmode="numeric" pattern="[0-9]*" autocomplete="off"
                       id="input_roomHeight" name="roomHeight" :placeholder="$t('location.create-location-page.enter-number')"
                       :disabled="(hasType === false)"
                       :data-vv-as="$t('location.location.room-height')"
                       v-model="fields.roomHeight" v-mask-decimal="{ digits: 2 }"
                       v-validate="'decimal:2|min:1|max_value:9999'"
                       @blur="_handleBlurUpdateField"
                       :class="[{ 'error': (verrors.has('roomHeight')) }, 'd-input__field']">

                <template v-if="verrors.has('roomHeight')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('roomHeight') }}</div>
                </template>
              </div>
            </div>
          </template>

          <div class="d-input d-input_row mb_6" id="form__group_declaration_dimension">
            <label for="location-dimension" class="d-input__label d-input__label_required">{{ $t('location.create-location-page.total-area') }} (м²)</label>
            <div class="column">
              <input type="text" min="1" inputmode="numeric" pattern="[0-9]*" autocomplete="off"
                     id="location-dimension" name="dimension" :placeholder="$t('location.create-location-page.enter-number')"
                     :disabled="(hasType === false)"
                     :data-vv-as="$t('location.location-page.total-area')"
                     v-model="fields.dimension" v-mask-decimal="{ digits: 2 }"
                     v-validate ="{ rules: { required: (isPublishLocationTransition), decimal: 2 } }"
                     @blur="_handleBlurUpdateField"
                     :class="[{ 'error': (verrors.has('dimension')) }, 'd-input__field']">

              <template v-if="verrors.has('dimension')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('dimension') }}</div>
              </template>
            </div>
          </div>

          <div class="d-row mb_6">
            <div class="d-input d-input_row justify_between w_100 mr_4">
              <label for="input_payment" class="d-input__label d-input__label_required">{{ $t('location.create-location-page.price-from') }}</label>

              <input type="text" min="1" inputmode="numeric" pattern="[0-9]*" autocomplete="off"
                     id="input_payment" name="price" :disabled="(hasType === false)"
                     data-vv-as="Цена"
                     :placeholder="$t('location.create-location-page.enter-the-amount')"
                     v-model="fields.price" v-mask-numeric
                     v-validate ="{ rules: { required: (isPublishLocationTransition), numeric: true, min: 1, max_value: 9999999 } }"
                     @blur="_handleBlurUpdateField"
                     :class="[{ 'error': (verrors.has('price')) }, 'd-input__field', 'max-w_654px']">
            </div>

            <div class="d-input d-input_row">
              <lm-select
                input-id="form__select_currency"
                input-name="currencyId"
                data-vv-name="currencyId"
                :data-vv-as="$t('location.location.currency')"
                :options="currencies"
                v-model="fields.currencyId"
                :placeholder="$t('location.location.currency')"
                :multiple="false"
                :filter="false"
                :position="'bottom'"
                @change="_handleBlurUpdateField"
                :disabled="(!Number(fields.price))"
                v-validate ="{ rules: { required: (Number(fields.price)) } }"
                :class="['lm-dropdown-wrap--n', { 'error': (verrors.has('currencyId')) }]">
              </lm-select>
            </div>
          </div>

          <div class="d-input d-input_row">
            <label for="select_period_payment" class="d-input__label d-input__label_required">{{ $t('location.create-location-page.payment-period') }}</label>

            <lm-select
              input-id="select_period_payment"
              input-name="paymentPeriod"
              data-vv-name="paymentPeriod"
              data-vv-as="Период оплаты"
              :options="sources['paymentPeriods']"
              v-model="fields.paymentPeriod"
              :placeholder="$t('unified-profile.unified-profile-settings.not-chosen')"
              :multiple="false"
              :filter="false"
              :position="'bottom'"
              @change="_handleBlurUpdateField"
              :disabled="(!Number(fields.price))"
              v-validate ="{ rules: { required: (Number(fields.price)) } }"
              :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('paymentPeriod')) }]">
            </lm-select>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasType === false) }]">
          <div class="d-upload-zone d-input_row mb_6">
            <label class="d-input__label d-input__label_required">{{ $t('location.create-location-page.photo') }}</label>
            <div class="column">
              <template v-if="showFieldForm">
                <lm-dropzone :label="$t('location.create-location-page.download-img')" :mediaModal="false" :max-items="10" :disabled="(hasType === false || isAuthorized === false)" :class="['form__dropzone', 'd-upload-zone__field', { 'error': (verrors.has('photos')) }]"
                             :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                             @update="handleUploadItems"
                             @onUpload="_handleAttach"
                             @onRemove="_handleAttachRemove">
                </lm-dropzone>
              </template>

              <template v-if="verrors.has('photos')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('photos') }}</div>
              </template>
            </div>
          </div>

          <div class="d-textarea d-input_row mb_6">
            <label for="full-description" class="d-input__label">{{ $t('location.create-location-page.description') }}</label>
            <div class="column">
              <div v-show="this.description.tooltip.show" :class="['description_tooltip', { 'bottom': description.tooltip.bottom }]" ref="descriptionTooltip">
                <div class="description_tooltip__wrap" ref="descriptionTooltipWrap">
                  <div class="description_tooltip__item description_tooltip__descr">
                    <div class="description_tooltip__title">Обратите внимание!</div>
                    Мы составили список основых проблем связанных с оформлением объявлений. Для их решения достаточно следовать нашим инструкциям
                  </div>

                  <div class="description_tooltip__item description_tooltip__bad">
                    <div class="description_tooltip__title">Плохо</div>
                    <ul class="description_tooltip__list">
                      <li class="description_tooltip__list-item"><span>•</span> CAPS LOCK и Восклицательные знаки (!!!)</li>
                      <li class="description_tooltip__list-item"><span>•</span> Перенаправление на сторонние ресурсы</li>
                      <li class="description_tooltip__list-item"><span>•</span> Ошибки в тексте и нечитабельные символы</li>
                      <li class="description_tooltip__list-item"><span>•</span> Вставка контактных данных и ссылок</li>
                    </ul>
                  </div>

                  <div class="description_tooltip__item description_tooltip__good">
                    <div class="description_tooltip__title">Хорошо</div>
                    <ul class="description_tooltip__list">
                      <li class="description_tooltip__list-item"><span>•</span> Спокойный и вежливый тон обращения</li>
                      <li class="description_tooltip__list-item"><span>•</span> Добавление поясняющих деталей</li>
                      <li class="description_tooltip__list-item"><span>•</span> Повествование понятным и простым языком</li>
                      <li class="description_tooltip__list-item"><span>•</span> Введение параметров в соответствующих полях ниже</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="d-row" ref="descriptionRow">
                <wysiwyg-markdown id="full-description" rows="5" name="description" v-model="fields.description"
                                  :autoinit="false"
                                  v-validate="'max:65000'"
                                  ref="wysiwygDescription"
                                  :data-vv-as="'Описание'"
                                  :disabled="(hasType === false)"
                                  :placeholder="placeholderDescription"
                                  :style="{ maxWidth: '484px' }"
                                  @input="_handleBlurUpdateField"
                                  @focus="_handleFocusDescription"
                                  @blur="_handleBlurDescription"
                                  :class="[{ 'error': (verrors.has('description')) }, 'w_100']">
                </wysiwyg-markdown>
              </div>
              <template v-if="verrors.has('description')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('description') }}</div>
              </template>
            </div>
          </div>
          <template v-if="(isConcertHall === true || isTheater === true || isPavilion === true || isPhotoStudio === true)">
            <div class="d-row mb_6">
              <div class="d-input d-input_row w_100 justify_between">
                <label for="declaration__facilities" class="d-input__label">{{ $t('location.location-page.amenities-and-services') }}</label>

                <div class="column">
                  <input type="text" :placeholder="'Wi-Fi, бар, гример, стилист'" id="declaration__facilities" autocomplete="off"
                         v-validate="'min:3|max:255'"
                         :data-vv-as="$t('location.location-page.amenities-and-services')"
                         v-model="fields['facilities']" name="facilities" ref="facilities"
                         :disabled="(hasType === false)"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('facilities')) }, 'd-input__field']">
                  <template v-if="verrors.has('facilities')">
                    <div class="d-input__notification d-input__notification_required">{{ verrors.first('facilities') }}</div>
                  </template>
                </div>
              </div>
            </div>

            <div class="d-row mb_6">
              <div class="d-input d-input_row w_100 justify_between">
                <label for="declaration__equipment" class="d-input__label">{{ $t('location.location-page.equipment') }}</label>

                <div class="column">
                  <input type="text" :placeholder="'Свет, камеры, крепления'" id="declaration__equipment" autocomplete="off"
                         v-validate="'min:3|max:255'"
                         :data-vv-as="$t('location.location-page.equipment')"
                         v-model="fields['equipment']" name="equipment" ref="equipment"
                         :disabled="(hasType === false)"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('equipment')) }, 'd-input__field']">
                  <template v-if="verrors.has('equipment')">
                    <div class="d-input__notification d-input__notification_required">{{ verrors.first('equipment') }}</div>
                  </template>
                </div>
              </div>
            </div>

            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <template v-for="item in equipmentAndFacilities" v-if="equipCondition(item.id)">
                  <div class="d-switch w_100">
                    <label :for="`form__checkbox_${item.field}`" class="d-switch__label">{{ item.text }}</label>
                    <input :id="`form__checkbox_${item.field}`" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" :name="item.field" v-model="fields[item.field]" :disabled="(hasType === false)" @change="_handleBlurUpdateField">
                    <label :for="`form__checkbox_${item.field}`" class="d-switch__btn"></label>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasType === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="declaration__passSystem" class="d-input__label">{{ $t('location.location-page.loop-system') }}</label>
            <div class="column">
              <input type="text" :placeholder="'По записи, по паспорту'" id="declaration__passSystem" autocomplete="off"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="$t('location.location-page.loop-system')"
                     v-model="fields['passSystem']" name="passSystem" ref="passSystem"
                     :disabled="(hasType === false)"
                     @blur="_handleBlurUpdateField"
                     :class="[{ 'error': (verrors.has('passSystem')) }, 'd-input__field']">
              <template v-if="verrors.has('passSystem')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('passSystem') }}</div>
              </template>
            </div>
          </div>

          <template v-if="showFieldForm">
            <div class="d-input d-input_row mb_6">
              <label for="declaration__country" class="d-input__label d-input__label_required">{{ $t('location.location.country') }}</label>
              <div class="column">
                <vue-select :filterable="true" :options="sources['countries']" :reduce="option => option.id"
                  :input-id="'declaration__country'"
                  :name="'country'"
                  :data-vv-name="'countryId'"
                  :data-vv-as="$t('location.location.country')"
                  :placeholder="$t('location.location-filter.not-chosen')"
                  v-model="fields.countryId"
                  @input="_handleChangeCountrySelect(...arguments, true, true)"
                  :disabled="(hasType === false)"
                  v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                  :class="[{ 'error': (verrors.has('countryId')) } ]">
                </vue-select>

                <template v-if="(verrors.has('countryId'))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('countryId') }}</div>
                </template>
              </div>
            </div>
          </template>

          <div class="d-input d-input_row mb_6" id="form__select_declaration_city">
            <label for="declaration__city" class="d-input__label d-input__label_required">{{ $t('location.location.city') }}</label>
            <div class="column">
              <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => option.id"
                :loading="loadingCities"
                :input-id="'declaration__city'"
                :name="'cityId'"
                :data-vv-name="'cityId'"
                :data-vv-as="$t('location.location.city')"
                :placeholder="$t('unified-profile.unified-profile-settings.not-chosen')"
                v-model="fields.cityId"
                @input="_handleBlurUpdateField"
                :disabled="((hasType === false) || (hasCountry === false))"
                v-validate ="{ rules: { required: (isPublishLocationTransition) } }"
                :class="[{ 'error': (verrors.has('cityId')) } ]">
              </vue-select>

              <template v-if="(verrors.has('cityId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('cityId') }}</div>
              </template>
            </div>
          </div>

          <template v-if="noSsr && showFieldForm">
            <div class="d-input d-input_row">
              <label for="declaration__address" class="d-input__label">{{ $t('location.create-location-page.address') }}</label>
              <div class="column">
                <gmap-autocomplete placeholder="ул. Большая садовая, д. 1" id="declaration__address" autocomplete="off"
                                   v-validate="'min:3|max:255'"
                                   :data-vv-as="$t('location.create-location-page.address')"
                                   v-model="fields['address']['address']" name="address" ref="address"
                                   :disabled="(hasType === false)"
                                   @blur="_handleBlurUpdateField"
                                   @place_changed="setPlaceLocation"
                                   :class="[{ 'error': (verrors.has('address')) }, 'd-input__field' ]">
                </gmap-autocomplete>
                <template v-if="verrors.has('address')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('address') }}</div>
                </template>
              </div>
            </div>
          </template>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasType === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting__phone" class="d-input__label d-input__label_required">{{ $t('location.create-location-page.telephone-number') }}</label>
            <div class="column">
              <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
                     :placeholder="'+7 900 000 00 00'"
                     v-model="fields.phone"
                     v-validate ="{ rules: { required: (isPublishLocationTransition), phone: true } }"
                     :data-vv-as="$t('location.create-location-page.telephone-number')"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasType === false)"
                     :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">

              <template v-if="verrors.has('phone')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__email" class="d-input__label">E-mail</label>
            <div class="column">
              <input type="email" id="casting__email" name="email" autocomplete="off" autocapitalize=off
                     :placeholder="'pochta@gmaill.com'"
                     v-model="fields.email"
                     v-validate="'email'"
                     :data-vv-as="'E-mail'"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasType === false)"
                     :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">

              <template v-if="verrors.has('email')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__site" class="d-input__label">{{ $t('location.create-location-page.website') }}</label>
            <div class="column">
              <input type="text" id="casting__site" name="site" autocomplete="off" autocapitalize=off
                     :placeholder="'Введите url'"
                     v-model="fields.site"
                     v-validate="{ url: { require_protocol: false } }"
                     :data-vv-as="$t('location.create-location-page.website')"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasType === false)"
                     :class="[{ 'error': (verrors.has('site')) }, 'd-input__field']">

              <template v-if="verrors.has('site')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('site') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__other" class="d-input__label">{{ $t('location.create-location-page.other') }}</label>
            <div class="column">
              <input type="text" id="casting__other" name="other" autocomplete="off" autocapitalize=off
                     :placeholder="'Телефон, почта или соц сеть'"
                     v-model="fields.other"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="$t('location.create-location-page.other')"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasType === false)"
                     :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">

              <template v-if="verrors.has('other')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
              </template>
            </div>
          </div>
        </div>

        <template v-if="(isAuthorized === false || (isAuthorized === true && (isRegistered === false || hasEmail === false)))">
          <sign-block :disabled="(hasType === false)"></sign-block>
        </template>
      </div>

      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" style="z-index: 10; margin-bottom: 50px; position: sticky; top: 126px;">
          <template v-if="isAuthorized && isRegistered">
            <div class="section_declaration_creating section_declaration_creating_big pt_0">
              <lm-loader v-if="loadingForm"></lm-loader>
              <template v-if="(loadingForm === false)">
                <template v-if="(edit && isCurrentUser) || !edit">
                  <button class="d-btn d-btn_primary w_100" @click="_handleClickActionLocation(PUBLISH)">{{ $t('location.create-location-page.publish') }}</button>
                </template>
                <template v-if="edit && isAdmin && isCurrentUser === false">
                  <button class="d-btn d-btn_primary flex_1" @click="_handleClickActionLocation(PUBLISH)">Изменить</button>
                </template>
              </template>
            </div>
          </template>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="column mb_6">
              <div class="heading heading_h5">Самое важное</div>
              <div class="sidebar__text">
                Заполните обязательные поля, чтобы опубликовать объявление
              </div>
            </div>

            <ul class="list list_required-fields">
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Тип объявления
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.location.room-height') }}
              </li>

              <template v-if="(isRoom === true)">
                <li :class="['list__item', { 'list__item_active': (hasType && hasRoomType === true) }]">
                  <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                  </svg>
                  {{ $t('location.location.room-type') }}
                </li>
              </template>

              <li :class="['list__item', { 'list__item_active': (hasType && hasDimension === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.location-page.total-area') }} (м²)
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType && hasPrice === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Цена (от)
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType && hasPhotos === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.create-location-page.photo') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType && hasCountry === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.location.country') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType && hasCity === true ) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.location.city') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasType && hasPhone === true ) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('location.create-location-page.telephone-number') }}
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

          <template v-if="(edit === false && showReset === true)">
            <div class="section_declaration_creating section_declaration_creating_big">
              <button class="d-btn d-btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
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
  .link-moderate-rules
    font-size: 14px
    color: #0063db
    margin-top: 8px
    font-weight: 600
    letter-spacing: 0.3px
</style>
