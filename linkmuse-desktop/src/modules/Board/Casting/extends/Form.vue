<template>
  <div class="page_declaration_creating">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_0">{{ title }}</div>

        <div class="section_declaration_creating section_declaration_creating_big bt_none">
          <div class="d-input d-input_row mb_6">
            <label for="declaration__category" class="d-input__label d-input__label_required">Тип объявления</label>

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

          <div class="d-input d-input_row mb_6">
            <label for="casting__category" class="d-input__label d-input__label_required">Категория кастинга</label>

            <div class="column">
              <lm-select
                input-id="casting__category"
                input-name="categoryId"
                data-vv-name="categoryId"
                data-vv-as="категория"
                :options="sources['categories']"
                v-model="fields.categoryId"
                v-validate="'required'"
                :placeholder="'Не выбрана'"
                :multiple="false"
                :filter="false"
                @input="_handleInputCategory"
                @change="_handleBlurUpdateField"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('categoryId')) }]">
              </lm-select>

              <template v-if="(verrors.has('categoryId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('categoryId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6" id="form__group_declaration_role">
            <label for="casting__role" class="d-input__label">Кого я ищу</label>

            <div class="column">
              <lm-select
                input-id="casting__role"
                input-name="professions"
                data-vv-name="professions"
                data-vv-as="Кого я ищу"
                :options="sources['professions']"
                v-model="fields.professions"
                :placeholder="'Не выбрано'"
                :multiple="true"
                :filter="false"
                @change="_handleBlurUpdateField"
                :disabled="(hasCategory === false || (!sources['professions'].length))"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('professions')) }]">
              </lm-select>

              <template v-if="(verrors.has('professions'))">
                <div class="d-select__notification d-select__notification_required">{{ verrors.first('professions') }}</div>
              </template>
            </div>
          </div>

          <!--
          <div class="d-switched__container w_100">
            <div class="d-switched__item">
              <div :class="['d-switch', 'w_100']">
                <label for="for_trusted" class="d-switch__label">
                  Только с портфолио
                  <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipTrusted">
                    <svg class="d-tooltip__icon ml_2">
                      <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                    </svg>
                  </tooltip>
                </label>

                <input id="for_trusted" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="for_trusted" v-model="fields.forTrusted" :disabled="(hasCategory === false || isForActorAndModel === false)" @change="_handleBlurUpdateField">
                <label for="for_trusted" class="d-switch__btn"></label>
              </div>
            </div>
          </div>
          -->
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div class="d-input d-input_row mb_6">
            <label class="d-input__label">Пол</label>

            <div class="column">
              <div class="d-row">
                <div :class="['d-checkbox', 'd-checkbox_button', 'w_100', { mr_4: (index === 0) }]" v-for="(gender, index) in sources['genders']">
                  <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="checkbox"
                         name="gender" :value="gender.id" v-model="fields['genders']" :disabled="(hasCategory === false)"
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

          <div class="d-input d-input_row">
            <label for="form__select_declaration_age_from" class="d-input__label">Возраст (от – до)</label>

            <div class="column">
              <div class="d-row w_100 align_center">
                <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                       :placeholder="'От'" id="form__select_declaration_age_from" name="ageFrom" ref="ageFrom"
                       v-model="fields['ageFrom']" v-mask-static="'9{1,3}'"
                       :data-vv-as="'ОТ'"
                       :disabled="(hasCategory === false)"
                       @blur="_handleBlurUpdateField"
                       v-validate="'decimal:3|min_value:1|max_value:100'" style="box-sizing: border-box;"
                       :class="[{ 'error': (verrors.has('ageFrom')) }, 'd-input__field', 'mr_2']">

                <div class="color_gray-4">-</div>

                <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                       :placeholder="'До'" id="form__select_declaration_age_to" name="ageTo" ref="ageTo"
                       v-model="fields['ageTo']" v-mask-static="'9{1,3}'" style="box-sizing: border-box;"
                       :data-vv-as="'До'"
                       :disabled="(hasCategory === false)"
                       @blur="_handleBlurUpdateField"
                       v-validate="'decimal:3|min_value:1|max_value:100|minTarget:ageFrom'"
                       :class="[{ 'error': (verrors.has('ageTo')) }, 'd-input__field', 'ml_2']">
              </div>

              <template v-if="(verrors.has('ageFrom') || verrors.has('ageTo') )">
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('ageFrom')">{{ verrors.first('ageFrom') }}</div>
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('ageTo')">{{ verrors.first('ageTo') }}</div>
              </template>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting-title" class="d-input__label d-input__label_required">Название кастинга</label>

            <div class="column">
              <div class="d-row">
                <input id="casting-title" type="text" name="name" placeholder="Кастинг на телешоу..." autocomplete="off"
                       v-model="fields.name"
                       v-validate ="{ rules: { required: (isPublishCastingTransition), min: 3, max: 255 } }"
                       data-vv-as="Название кастинга"
                       :disabled="(hasCategory === false)"
                       @blur="_handleBlurUpdateField"
                       :class="[{ 'error': (verrors.has('name')) }, 'd-input__field']">
              </div>
              <template v-if="verrors.has('name')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('name') }}</div>
              </template>
            </div>
          </div>

          <div class="d-textarea d-input_row">
            <label for="full-description" class="d-input__label">Описание кастинга</label>

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
                                  :data-vv-as="'Описание кастинга'"
                                  :disabled="(hasCategory === false)"
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
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div :class="['d-switched__container', 'w_100', { 'mb_6': (Boolean(Number(fields.fee))) }]">
            <div class="d-switched__item">
              <div class="d-switch w_100">
                <label for="work_payment" class="d-switch__label">
                  Работа оплачивается
                  <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipFee" :enable="(hasCategory === true)">
                    <svg class="d-tooltip__icon ml_2">
                      <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                    </svg>
                  </tooltip>
                </label>
                <input id="work_payment" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="fee" v-model="fields.fee" :disabled="(hasCategory === false)" @change="_handleBlurUpdateField">
                <label for="work_payment" class="d-switch__btn"></label>
              </div>
            </div>
          </div>

          <template v-if="(Boolean(Number(fields.fee)))">
            <div class="d-row mb_6">
              <div class="d-input d-input_row w_100 mr_4">
                <label for="input_payment" class="d-input__label">Гонорар</label>

                <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                       id="input_payment" name="feeAmount" :disabled="(!Boolean(Number(fields.fee)) || hasCategory === false)"
                       placeholder="Введите сумму"
                       v-model="fields.feeAmount" v-mask-numeric
                       v-validate="'numeric|min:1|max_value:9999999'"
                       @blur="_handleBlurUpdateField"
                       :class="[{ 'error': (verrors.has('feeAmount')) }, 'd-input__field', 'max-w_654px']">
              </div>

              <lm-select
                input-id="form__select_period_payment"
                input-name="feeCurrencyId"
                data-vv-name="feeCurrencyId"
                :data-vv-as="$t('location.location.currency')"
                :options="feeCurrencies"
                v-model="fields.feeCurrencyId"
                :placeholder="'₽'"
                :multiple="false"
                :filter="false"
                :position="'bottom'"
                @change="_handleBlurUpdateField"
                :disabled="(!Boolean(Number(fields.fee)) || !Number(fields.feeAmount))"
                v-validate ="{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                style="width: 72px"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('feeCurrencyId')) }]">
              </lm-select>
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="select_period_payment" class="d-input__label">Период оплаты</label>

              <lm-select
                input-id="select_period_payment"
                input-name="feeTypeId"
                data-vv-name="feeTypeId"
                data-vv-as="Период оплаты"
                :options="sources['feeTypes']"
                v-model="fields.feeTypeId"
                :placeholder="'Не выбран'"
                :multiple="false"
                :filter="false"
                :position="'bottom'"
                @change="_handleBlurUpdateField"
                :disabled="(!Boolean(Number(fields.fee)) || !Number(fields.feeAmount))"
                v-validate ="{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('feeTypeId')) }]">
              </lm-select>
            </div>
          </template>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting__date" class="d-input__label">Дата кастинга (с – по)</label>

            <div class="column">
              <no-ssr>
                <div class="d-row align_center">
                  <datepicker v-model="fields.dateStart" format="dd.MM.yyyy"
                              id="casting__date" name="dateStart" ref="dateStart"
                              data-vv-as="Дата начала кастинга"
                              :disabled="(hasCategory === false)"
                              @selected="_handleBlurUpdateField"
                              v-validate ="{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                              :input-class="['d-input__field', { 'error': (verrors.has('dateStart')) }]"
                              wrapper-class="mr_2 w_100">
                  </datepicker>
                  <div class="color_gray-4">-</div>
                  <datepicker v-model="fields.dateEnd" format="dd.MM.yyyy"
                              id="casting-date_to" name="dateEnd" ref="dateEnd"
                              data-vv-as="Дата окончания кастинга"
                              :disabled="(hasCategory === false)"
                              @selected="_handleBlurUpdateField"
                              :disabled-dates="{ to: (new Date(fields.dateStart)) }"
                              v-validate ="{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateStart) ? 'dateStart' : false } }"
                              :input-class="['d-input__field', { 'error': (verrors.has('dateEnd')) }]"
                              wrapper-class="ml_2 w_100">
                  </datepicker>
                </div>
              </no-ssr>
              <template v-if="(verrors.has('dateStart') || verrors.has('dateEnd') )">
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('dateStart')">{{ verrors.first('dateStart') }}</div>
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('dateEnd')">{{ verrors.first('dateEnd') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row">
            <label for="work__date" class="d-input__label">Дата работы (с – по)</label>

            <div class="column">
              <no-ssr>
                <div class="d-row align_center">
                  <datepicker v-model="fields.dateWorkStart" format="dd.MM.yyyy"
                              id="work__date" name="dateWorkStart" ref="dateWorkStart"
                              data-vv-as="Дата начала работы"
                              :disabled="(hasCategory === false)"
                              @selected="_handleBlurUpdateField"
                              v-validate ="{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                              :input-class="['d-input__field', { 'error': (verrors.has('dateWorkStart')) }]"
                              wrapper-class="mr_2 w_100">
                  </datepicker>
                  <div class="color_gray-4">-</div>
                  <datepicker v-model="fields.dateWorkEnd" format="dd.MM.yyyy"
                              id="work-date_to" name="dateWorkEnd" ref="dateWorkEnd"
                              data-vv-as="Дата окончания работы"
                              :disabled="(hasCategory === false)"
                              @selected="_handleBlurUpdateField"
                              :disabled-dates="{ to: (new Date(fields.dateWorkStart)) }"
                              v-validate ="{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateWorkStart) ? 'dateWorkStart' : false } }"
                              :input-class="['d-input__field', { 'error': (verrors.has('dateWorkEnd')) }]"
                              wrapper-class="ml_2 w_100">
                  </datepicker>
                </div>
              </no-ssr>
              <template v-if="(verrors.has('dateWorkStart') || verrors.has('dateWorkEnd') )">
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('dateWorkStart')">{{ verrors.first('dateWorkStart') }}</div>
                <div class="d-input__notification d-input__notification_required" v-if="verrors.has('dateWorkEnd')">{{ verrors.first('dateWorkEnd') }}</div>
              </template>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <template v-if="showFieldForm">
            <div class="d-input d-input_row mb_6">
              <label for="declaration__country" class="d-input__label d-input__label_required">Страна кастинга</label>
              <div class="column">
                <vue-select :filterable="true" :options="sources['countries']" :reduce="option => option.id"
                  :input-id="'declaration__country'"
                  :name="'country'"
                  :data-vv-name="'countryId'"
                  :data-vv-as="'Страна'"
                  :placeholder="'Не выбрана'"
                  v-model="fields.countryId"
                  @input="_handleChangeCountrySelect(...arguments, true, true)"
                  :disabled="(hasCategory === false)"
                  v-validate ="{ rules: { required: (isPublishCastingTransition) } }"
                  :class="[{ 'error': (verrors.has('countryId')) } ]">
                </vue-select>

                <template v-if="(verrors.has('countryId'))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('countryId') }}</div>
                </template>
              </div>
            </div>
          </template>

          <div class="d-input d-input_row mb_6" id="form__select_declaration_city">
            <label for="declaration__city" class="d-input__label d-input__label_required">Город кастинга</label>

            <div class="column">
              <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => option.id"
                :loading="loadingCities"
                :input-id="'declaration__city'"
                :name="'cityId'"
                :data-vv-name="'cityId'"
                :data-vv-as="'Город'"
                :placeholder="'Не выбран'"
                v-model="fields.cityId"
                @input="_handleBlurUpdateField"
                :disabled="((hasCategory === false) || (hasCountry === false))"
                v-validate ="{ rules: { required: (isPublishCastingTransition) } }"
                :class="[{ 'error': (verrors.has('cityId')) } ]">
              </vue-select>

              <template v-if="(verrors.has('cityId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('cityId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="declaration__address" class="d-input__label">Адрес кастинга</label>
            <div class="column">
              <input type="text" :placeholder="'ул. Большая садовая, д. 1'" id="declaration__address" autocomplete="off"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="'Адрес кастинга'"
                     v-model="fields['address']" name="address" ref="address"
                     :disabled="(hasCategory === false || isCastingOnline === true)"
                     @blur="_handleBlurUpdateField"
                     :class="[{ 'error': (verrors.has('address')) }, 'd-input__field', 'w_100' ]">
              <template v-if="verrors.has('address')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('address') }}</div>
              </template>
            </div>
          </div>

          <div class="d-switched__container w_100">
            <div class="d-switched__item">
              <div class="d-switch w_100">
                <label for="isOnline" class="d-switch__label">
                  Онлайн кастинг
                  <tooltip effect="scale" placement="bottom" :content="contentTooltipCastingOnline" :enable="(hasCategory === true)">
                    <svg class="d-tooltip__icon" :style="{ width: '16px', height: '16px', display: 'block', marginLeft: '8px', fill: 'rgba(40, 42, 54, 0.32)' }">
                      <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                    </svg>
                  </tooltip>
                </label>
                <input id="isOnline" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="isOnline" v-model="fields.isOnline" :disabled="(hasCategory === false)" @change="_handleBlurUpdateField">
                <label for="isOnline" class="d-switch__btn"></label>
              </div>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting__character" class="d-input__label">Типаж</label>

            <div class="column">
              <input type="text" id="casting__character" name="characterType" autocomplete="off"
                     :placeholder="'Например, Егор Крид'"
                     v-model="fields.characterType"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="'Типаж'"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasCategory === false)"
                     :class="[{ 'error': (verrors.has('characterType')) }, 'd-input__field']">

              <template v-if="verrors.has('characterType')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('characterType') }}</div>
              </template>
            </div>
          </div>

          <div class="d-upload-zone d-input_row">
            <label class="d-input__label">Референс</label>

            <div class="column">
              <template v-if="showFieldForm">
                <lm-dropzone :label="'Загрузить референс'" :mediaModal="false" :max-items="6" :disabled="(hasCategory === false || isAuthorized === false)" class="form__dropzone d-upload-zone__field"
                             :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                             @update="handleUploadItems"
                             @onUpload="_handleAttach"
                             @onRemove="_handleAttachRemove">
                </lm-dropzone>
              </template>
            </div>
          </div>
        </div>

        <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (hasCategory === false) }]">
          <div class="d-input d-input_row mb_6">
            <label for="casting__phone" class="d-input__label">Телефон</label>

            <div class="column">
              <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
                     :placeholder="'+7 900 000 00 00'"
                     v-model="fields.phone"
                     v-validate="'phone'"
                     :data-vv-as="'Телефон'"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasCategory === false)"
                     :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">

              <template v-if="verrors.has('phone')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="casting__email" class="d-input__label">Email</label>

            <div class="column">
              <input type="email" id="casting__email" name="email" autocomplete="off" autocapitalize=off
                     :placeholder="'pochta@gmaill.com'"
                     v-model="fields.email"
                     v-validate="'email'"
                     :data-vv-as="'Email'"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasCategory === false)"
                     :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">

              <template v-if="verrors.has('email')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
              </template>
            </div>
          </div>

          <div :class="['d-input', 'd-input_row', { 'mb_6': isAuthorized }]">
            <label for="casting__other" class="d-input__label">Другое</label>

            <div class="column">
              <input type="text" id="casting__other" name="other" autocomplete="off" autocapitalize=off
                     :placeholder="'Телефон, почта или соц сеть'"
                     v-model="fields.other"
                     v-validate="'min:3|max:255'"
                     :data-vv-as="'Другое'"
                     @blur="_handleBlurUpdateField"
                     :disabled="(hasCategory === false)"
                     :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">

              <template v-if="verrors.has('other')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
              </template>
            </div>
          </div>
        </div>

        <template v-if="(isAuthorized === false || (isAuthorized === true && (isRegistered === false || hasEmail === false)))">
          <sign-block :disabled="(hasCategory === false)"></sign-block>
        </template>
      </div>

      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" style="z-index: 10; margin-bottom: 50px; position: sticky; top: 126px;">
          <template v-if="isAuthorized && isRegistered && hasEmail">
            <div class="section_declaration_creating section_declaration_creating_big pt_0">
              <lm-loader v-if="loadingForm"></lm-loader>
              <template v-if="(loadingForm === false)">
                <template v-if="(edit && isCurrentUser) || !edit">
                  <button class="d-btn d-btn_primary w_100" :disabled="(canPublished === false)" @click="_handleClickActionCasting(PUBLISH)">Опубликовать</button>
                </template>
                <template v-if="edit && isAdmin && isCurrentUser === false">
                  <button class="d-btn d-btn_primary flex_1" :disabled="(canPublished === false)" @click="_handleClickActionCasting(PUBLISH)">Изменить</button>
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
              <li :class="['list__item', { 'list__item_active': (hasCategory === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Категория кастинга
              </li>
              <li :class="['list__item', { 'list__item_active': (hasCategory && hasName === true ) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Название кастинга
              </li>
              <li :class="['list__item', { 'list__item_active': (hasCategory && hasCountry === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Страна кастинга
              </li>
              <li :class="['list__item', { 'list__item_active': (hasCategory && hasCity === true ) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Город кастинга
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
              <div class="sidebar__text">Вы можете сделать предпросмотр объявления, <br> сохранив его сначала в Черновиках</div>
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
