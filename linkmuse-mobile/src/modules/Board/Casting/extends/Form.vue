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
          <div class="moderate_rules__title mb_2">Будьте внимательны</div>
          <div class="moderate_rules__text mb_2">После публикации объявление будет отправлено на модерацию</div>
          <a class="moderate_rules__link" href="https://m.linkmuse.com/pages/politika-moderacii-obyavlenij-linkmuse" target="_blank">Правила модерации</a>
        </div>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_type" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-type') }}
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
          <label for="form__select_declaration_category" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-category') }}
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('categoryId')) }]"
                     data-vv-name="categoryId"
                     data-vv-as="категория"
                     v-model="fields.categoryId"
                     :input-required="false"
                     input-id="form__select_declaration_category"
                     input-name="category"
                     :placeholder="$t('board-create-casting.new-casting.category-not-selected')"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     v-validate="'required'"
                     @input="_handleInputCategory"
                     @change="_handleBlurUpdateField"
                     :options="sources['categories']">
          </lm-select>

          <template v-if="(verrors.has('categoryId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('categoryId') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration" id="form__group_declaration_role">
          <label for="form__select_declaration_role" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-role') }}
          </label>
          <lm-select :class="[{ 'error': (verrors.has('professions')) }]"
                     data-vv-name="professions"
                     data-vv-as="Роль"
                     v-model="fields.professions"
                     :input-required="false"
                     input-id="form__select_declaration_role"
                     input-name="professions"
                     :placeholder="$t('board-create-casting.new-casting.role-not-selected')"
                     :multiple="true"
                     label=""
                     @input="_handleBlurUpdateField"
                     :disabled="(hasCategory === false || (!sources['professions'].length))"
                     :options="sources['professions']">
          </lm-select>
          <template v-if="(verrors.has('professions'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('professions') }}</div>
          </template>
        </div>

        <!--
        <div class="form__group form__group_declaration form__group_declaration_switch">
          <div class="form__row form__row_declaration form__row_declaration_payment">
            <div class="switch switch_declaration">
              <label for="form__checkbox_for_trusted" class="switch__label">Только с портфолио</label>
              <input id="form__checkbox_for_trusted" type="checkbox" class="switch__mark" true-value="1" false-value="0" name="isOnline" v-model="fields.forTrusted" :disabled="(hasCategory === false || isForActorAndModel === false)" @change="_handleBlurUpdateField">
              <label for="form__checkbox_for_trusted" class="switch__btn"></label>
            </div>
          </div>
          <div class="switch__declaration_description">
            <span class="switch__span_first">Включите этот фильтр, если вам нужны отклики только с портфолио</span>
            <span class="switch__span_second">Фильтр доступен только для кастингов с ролью: модель или актер</span>
          </div>
        </div>
        -->
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false) }]">
        <div class="form__group form__group_declaration">
          <label class="label input__label">{{ $t('boardbox.filters.gender') }}</label>
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration" v-for="gender in sources['genders']">
              <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="checkbox"
                     name="gender" :value="gender.id" v-model="fields['genders']" :disabled="(hasCategory === false)"
                     data-vv-as="Пол"
                     @blur="_handleBlurUpdateField"
                     class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_male">
              <label class="checkbox__label_declaration checkbox__label_declaration_gender" :for="`form__checkbox_declaration_gender_${gender.id}`">{{ gender.text }}</label>
            </div>
          </div>
          <template v-if="(verrors.has('genders'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('genders') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_age_from" class="label input__label">{{ $t('board-create-casting.new-casting.age-from') }}</label>
              <input v-mask-numeric type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     :placeholder="$t('board-create-casting.new-casting.age-from-form')" id="form__select_declaration_age_from" name="ageFrom" ref="ageFrom"
                     v-model="fields['ageFrom']" v-mask-static="'9{1,3}'"
                     :data-vv-as="$t('board-create-casting.new-casting.age-from-form')"
                     :disabled="(hasCategory === false)"
                     @blur="_handleBlurUpdateField"
                     v-validate="'decimal:3|min_value:1|max_value:150'" style="box-sizing: border-box;"
                     :class="[{ 'error': (verrors.has('ageFrom')) }, 'lm-input']">
            </div>
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_age_to" class="label input__label">{{ $t('board-create-casting.new-casting.age-to') }}</label>
              <input v-mask-numeric type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     :placeholder="$t('board-create-casting.new-casting.age-to-form')" id="form__select_declaration_age_to" name="ageTo" ref="ageTo"
                     v-model="fields['ageTo']" v-mask-static="'9{1,3}'" style="box-sizing: border-box;"
                     :data-vv-as="$t('board-create-casting.new-casting.age-to-form')"
                     :disabled="(hasCategory === false)"
                     @blur="_handleBlurUpdateField"
                     v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageFrom'"
                     :class="[{ 'error': (verrors.has('ageTo')) }, 'lm-input']">
            </div>
          </div>
          <template v-if="(verrors.has('ageFrom') || verrors.has('ageTo') )">
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('ageFrom')">{{ verrors.first('ageFrom') }}</div>
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('ageTo')">{{ verrors.first('ageTo') }}</div>
          </template>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false) }]">
        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_casting-title" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-name') }}
            <span class="label_declaration_required">•</span>
          </label>
          <input id="form__input_declaration_casting-title" type="text" name="name" autocomplete="off" :placeholder="$t('board-create-casting.new-casting.casting-headline-form')"
                 v-model="fields.name"
                 @blur="_handleBlurUpdateField"
                 v-validate ="{ rules: { required: (isPublishCastingTransition), min: 3, max: 255 } }"
                 :data-vv-as="$t('board-create-casting.new-casting.casting-name')"
                 :disabled="(hasCategory === false)"
                 :class="[{ 'error': (verrors.has('name')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('name'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('name') }}</div>
          </template>

        </div>
        <div class="form__group form__group_declaration">
          <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
            {{ $t('board-create-casting.new-casting.casting-description') }}
          </label>
          <textarea id="form__textarea_casting-description" rows="13" name="description" v-model="fields.description"
                    :data-vv-as="$t('board-create-casting.new-casting.casting-description')"
                    @blur="_handleBlurUpdateField"
                    v-validate="'min:3|max:65000'"
                    :disabled="(hasCategory === false)"
                    :placeholder="placeholderDescription"
                    :class="[{ 'error': (verrors.has('description')) }, 'textarea', 'form__textarea', 'form__textarea_declaration']">
          </textarea>
          <template v-if="(verrors.has('description'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('description') }}</div>
          </template>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false) }]">
        <div class="form__group form__group_declaration form__group_declaration_switch">
          <div class="form__row form__row_declaration form__row_declaration_payment">
            <div class="switch switch_declaration">
              <label for="form__checkbox_payment" class="switch__label">{{ $t('board-create-casting.new-casting.paid-work') }}</label>
              <input id="form__checkbox_payment" type="checkbox" class="switch__mark" true-value="1" false-value="0" name="fee" v-model="fields.fee" :disabled="(hasCategory === false)" @change="_handleBlurUpdateField">
              <label for="form__checkbox_payment" class="switch__btn"></label>
            </div>
          </div>
          <div class="switch__declaration_description">
            <span class="switch__span_work-is-paid">Включите этот пункт и заполните поля, если у вашего кастинга имеется гонорар</span>
            <span class="switch__span_work-is-paid">Включите этот пункт, но не заполняйте поля, если гонорар обсуждается</span>
            <span class="switch__span_third">Выключите этот пункт, если вы проводите кастинг без гонорара</span>
          </div>
        </div>

        <template v-if="(Boolean(Number(fields.fee)))">
          <div class="form__group form__group_declaration">
            <div class="form__row form__row_declaration">
              <div class="form__column form__column_declaration">
                <label for="form__input_declaration_work-payment" class="label input__label">
                  {{ $t('board-create-casting.work-paid.fee') }}
                </label>
                <input type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                       id="form__input_declaration_work-payment" name="feeAmount" :disabled="(!Boolean(Number(fields.fee)))"
                       placeholder="Введите сумму"
                       v-model="fields.feeAmount" v-mask-numeric
                       @blur="_handleBlurUpdateField"
                       v-validate="'numeric|min:1|max_value:9999999'"
                       :class="[{ 'error': (verrors.has('feeAmount')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>
              <div class="form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency" style="min-width: 72px;">
                <label for="form__select_period_payment" class="label input__label">
                  {{ $t('board-create-casting.work-paid.currency') }}
                </label>
                <lm-select :class="[{ 'error': (verrors.has('feeCurrencyId')) }]"
                           data-vv-name="feeCurrencyId"
                           data-vv-as="Валюта"
                           v-model="fields.feeCurrencyId"
                           :input-required="false"
                           input-id="form__select_period_payment"
                           input-name="feeCurrencyId"
                           placeholder="₽"
                           :placeholderDisabled="true"
                           :placeholderHidden="true"
                           label=""
                           :disabled="(!Boolean(Number(fields.fee)) || !Number(fields.feeAmount))"
                           @change="_handleBlurUpdateField"
                           v-validate ="{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                           :options="feeCurrencies">
                </lm-select>
              </div>
            </div>
            <template v-if="(verrors.has('feeAmount'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('feeAmount') }}</div>
            </template>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_period_payment" class="label input__label">
              {{ $t('board-create-casting.work-paid.fee-period') }}
            </label>
            <lm-select :class="[{ 'error': (verrors.has('feeTypeId')) }]"
                       data-vv-name="feeTypeId"
                       data-vv-as="Период"
                       v-model="fields.feeTypeId"
                       :input-required="false"
                       input-id="form__select_period_payment"
                       input-name="feeTypeId"
                       placeholder="Не выбран"
                       :placeholderDisabled="true"
                       :placeholderHidden="true"
                       label=""
                       :disabled="(!Boolean(Number(fields.fee)) || !Number(fields.feeAmount))"
                       @change="_handleBlurUpdateField"
                       v-validate ="{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                       :options="sources['feeTypes']">
            </lm-select>
            <template v-if="(verrors.has('feeTypeId'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('feeTypeId') }}</div>
            </template>
          </div>
        </template>

      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false) }]">
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_casting-date_from" class="label input__label">{{ $t('board-create-casting.new-casting.casting-date-from') }}</label>
              <input v-mask-date placeholder="дд.мм.гг" id="form__select_declaration_casting-date_from" name="dateStart" ref="dateStart"
                     type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     v-model="fields.dateStart"
                     data-vv-as="Дата начала кастинга"
                     :disabled="(hasCategory === false)"
                     :max="$moment().add('1', 'year').format('DD.MM.YYYY')"
                     @blur="_handleBlurUpdateField"
                     v-validate ="{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                     :class="[{ 'error': (verrors.has('dateStart')) }, 'input', 'form__input', 'form__input_declaration', 'form__input_declaration_from']">
            </div>

            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_casting-date_to" class="label input__label">{{ $t('board-create-casting.new-casting.casting-date-to') }}</label>
              <input v-mask-date placeholder="дд.мм.гг" id="form__select_declaration_casting-date_to" name="dateEnd" ref="dateEnd"
                     type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     v-model="fields.dateEnd"
                     data-vv-as="Дата окончания кастинга"
                     :disabled="(hasCategory === false)"
                     :max="$moment().add('1', 'year').format('DD.MM.YYYY')"
                     @blur="_handleBlurUpdateField"
                     v-validate ="{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateStart) ? 'dateStart' : false } }"
                     :class="[{ 'error': (verrors.has('dateEnd')) }, 'input', 'form__input', 'form__input_declaration', 'form__input_declaration_to']">
            </div>
          </div>
          <template v-if="(verrors.has('dateStart') || verrors.has('dateEnd') )">
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('dateStart')">{{ verrors.first('dateStart') }}</div>
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('dateEnd')">{{ verrors.first('dateEnd') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-date_from" class="label input__label">{{ $t('board-create-casting.new-casting.work-date-from') }}</label>
              <input id="form__input_declaration_work-date_from" v-mask-date placeholder="дд.мм.гг" name="dateWorkStart" ref="dateWorkStart"
                     type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     v-model="fields.dateWorkStart"
                     data-vv-as="Дата начала работы"
                     :disabled="(hasCategory === false)"
                     :max="$moment().add('1', 'year').format('DD.MM.YYYY')"
                     @blur="_handleBlurUpdateField"
                     v-validate ="{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                     :class="[{ 'error': (verrors.has('dateWorkStart')) }, 'input', 'form__input', 'form__input_declaration', 'form__input_declaration_from']">
            </div>
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-date_to" class="label input__label">{{ $t('board-create-casting.new-casting.work-date-to') }}</label>
              <input id="form__input_declaration_work-date_to" v-mask-date placeholder="дд.мм.гг" name="dateWorkEnd" ref="dateWorkEnd"
                     type="tel" min="1" maxlength="20" autocomplete="off" autocapitalize="sentences"
                     v-model="fields.dateWorkEnd"
                     data-vv-as="Дата окончания работы"
                     :disabled="(hasCategory === false)"
                     :min="$moment().format('DD.MM.YYYY')"
                     :max="$moment().add('1', 'year').format('DD.MM.YYYY')"
                     @blur="_handleBlurUpdateField"
                     v-validate ="{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateWorkStart) ? 'dateWorkStart' : false } }"
                     :class="[{ 'error': (verrors.has('dateWorkEnd')) }, 'input', 'form__input', 'form__input_declaration', 'form__input_declaration_to']">
            </div>
          </div>
          <template v-if="(verrors.has('dateWorkStart') || verrors.has('dateWorkEnd') )">
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('dateWorkStart')">{{ verrors.first('dateWorkStart') }}</div>
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has('dateWorkEnd')">{{ verrors.first('dateWorkEnd') }}</div>
          </template>
        </div>
      </div>

      <div :class="['section form__section', 'form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false) }]" id="form__select_declaration_country">
        <div class="form__group form__group_declaration">
          <label class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-country') }}
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('countryId')) }]"
                     :searchable="true" :filterable="true" :title="'Выбор страны'"
                     data-vv-name="countryId"
                     :data-vv-as="$t('board-create-casting.new-casting.casting-country')"
                     v-model="fields.countryId"
                     :input-required="false"
                     input-id="form__select_declaration_coutry"
                     input-name="country"
                     :placeholder="$t('board-create-casting.new-casting.category-not-selected')"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     @input="_handleChangeCountrySelect(...arguments, true, true)"
                     v-validate ="{ rules: { required: (isPublishCastingTransition) } }"
                     :disabled="(hasCategory === false)"
                     :options="sources['countries']">
          </lm-select>
          <template v-if="(verrors.has('countryId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('countryId') }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_city" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-city') }}
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select :class="[{ 'error': (verrors.has('cityId')) }]"
                     @search="_handleSearchCities" :searchable="true" :filterable="false" :loading="loadingCities" :title="'Выбор города'"
                     data-vv-name="cityId"
                     :data-vv-as="$t('board-create-casting.new-casting.casting-city')"
                     :input-required="false"
                     v-model="fields.cityId"
                     input-id="form__select_declaration_city"
                     input-name="city"
                     :placeholder="$t('board-create-casting.new-casting.city-not-selected')"
                     :placeholderDisabled="true"
                     :placeholderHidden="true"
                     label=""
                     @change="_handleBlurUpdateField"
                     v-validate ="{ rules: { required: (isPublishCastingTransition) } }"
                     :disabled="((hasCategory === false) || (hasCountry === false))"
                     :options="sources['cities']">
          </lm-select>
          <template v-if="(verrors.has('cityId'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('cityId') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_address" class="label input__label">
            {{ $t('board-create-casting.new-casting.casting-address') }}
          </label>
          <input type="text" :placeholder="$t('board-create-casting.new-casting.address-form')" id="form__input_declaration_address"
                 @blur="_handleBlurUpdateField"
                 v-validate="'min:3|max:255'"
                 :data-vv-as="$t('board-create-casting.new-casting.casting-address')"
                 v-model="fields['address']" name="address" ref="address"
                 :disabled="(hasCategory === false || isCastingOnline === true)"
                 :class="[{ 'error': (verrors.has('address')) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="(verrors.has('address'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('address') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration form__group_declaration_switch">
          <div class="form__row form__row_declaration form__row_declaration_payment">
            <div class="switch switch_declaration">
              <label for="form__checkbox_isOnline" class="switch__label">Онлайн кастинг</label>
              <input id="form__checkbox_isOnline" type="checkbox" class="switch__mark" true-value="1" false-value="0" name="isOnline" v-model="fields.isOnline" :disabled="(hasCategory === false)" @change="_handleBlurUpdateField">
              <label for="form__checkbox_isOnline" class="switch__btn"></label>
            </div>
          </div>
          <div class="switch__declaration_description">
            <span class="switch__span_online-castings">Включите этот пункт, если ваш кастинг проводится онлайн</span>
          </div>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false)}]">

        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_character" class="label input__label">
            {{ $t('board-create-casting.new-casting.type') }}
          </label>
          <input type="text"  id="form__input_declaration_character" name="characterType"
                 :placeholder="$t('board-create-casting.new-casting.casting-type-form')"
                 v-model="fields.characterType"
                 @blur="_handleBlurUpdateField"
                 v-validate="'min:3|max:255'"
                 :data-vv-as="$t('board-create-casting.new-casting.type')"
                 :disabled="(hasCategory === false)"
                 :class="[{ 'error': (verrors.has('characterType')) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('characterType'))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('characterType') }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label class="label input__label">
            Референс
          </label>
          <template v-if="showFieldForm">
            <lm-dropzone :label="'Загрузить референс'" :mediaModal="false" :max-items="10" :disabled="(hasCategory === false || isAuthorized === false)" class="form__dropzone"
                         :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                         @update="handleUploadItems"
                         @onUpload="_handleAttach"
                         @onRemove="_handleAttachRemove">
            </lm-dropzone>
          </template>
        </div>
      </div>

      <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (hasCategory === false), 'bb_none': edit }]">
        <div class="form__group form__group_declaration">
          <label for="casting__phone" class="label input__label">
            Телефон
          </label>
          <input type="tel" id="casting__phone" name="phone" autocomplete="off" v-mask-phone
             :placeholder="'+7 900 000 00 00'"
             v-model="fields.phone"
             v-validate="'phone'"
             :data-vv-as="'Телефон'"
             @blur="_handleBlurUpdateField"
             :disabled="(hasCategory === false)"
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
             :disabled="(hasCategory === false)"
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
             @blur="_handleBlurUpdateField"
             :disabled="(hasCategory === false)"
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
          <button class="btn btn_secondary" @click="_handleClickPreviousPage">{{ $t('casting-page.edit-ad.back') }}</button>

          <template v-if="(edit && isCurrentUser) || !edit">
            <button class="btn btn_primary" @click="_handleClickActionCasting(PUBLISH)">{{ $t('casting-page.edit-ad.publish') }}</button>
          </template>

          <template v-if="edit && isAdmin && isCurrentUser === false">
            <button class="btn btn_primary" @click="_handleClickActionCasting(PUBLISH)">Изменить</button>
          </template>
        </div>
      </template>

      <template v-if="(isAuthorized === false || (isAuthorized === true && (isRegistered === false)))">
        <sign-block :disabled="(hasCategory === false)"></sign-block>
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
      font-weight: 600
    &__text
      color: #515562
      font-size: 14px
      line-height: 1.29
    &__link
      color: #0d69dc
      font-size: 14px
      font-weight: 600
    padding: 20px
    border-radius: 8px
    background-color: #ebf3fc

</style>
