<template>
  <section :class="['ss-main', 'vs-customer-register', { 'bg-fix-color': (state.is.services) } ]">
    <template v-if="state.is.services">
      <div class="ss-main-line how-work-it mt_12">
        <div class="heading heading_h2" style="margin-top: 0;">Выбор услуг</div>
        <div class="how-work-it-text" style="width: 700px; margin-left: auto;margin-right: auto">
          Вам необходимо выбрать те услуги, <br> которые вы готовы предоставить
        </div>
      </div>
      <div class="ss-choice-of-method-wrap lm-vs-landing-talent" style="padding-bottom: 60px !important; margin-bottom: 0 !important;">
        <loader v-if="servicesLoading" class="col-xs-12"></loader>

        <template v-if="services.length">
          <div class="lm-vs-landing-talent-line mb_6" v-for="chunk in _.chunk(services, 3)">
            <div class=" lm-vs-landing-talent-service-wrap" >
              <label :for="`service_${service.id}`" class="lm-vs-landing-talent-service-item" v-for="service in chunk" :key="service.id">
                <img :src="service.cover" :alt="service.name">
                <div class="item-title">
                  {{ service.name | truncate(20) }}
                  <template v-if="(fields.services.includes(service.id) === true)">
                    <div class="lm-m-rectangle-checked-service">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 8">
                        <path fill="#0063DA" d="M2.442 5.77L7.272 1 8 1.718 2.805 6.846A.474.474 0 0 1 2.442 7a.474.474 0 0 1-.364-.154L0 4.795l.727-.718 1.715 1.692z"/>
                      </svg>
                    </div>
                  </template>
                </div>
                <div class="desc">{{ service.description | truncate(100) }}</div>
                <div class="item-footer">
                  <input type="checkbox" :id="`service_${service.id}`"
                         :value="service.id" v-model="fields.services"
                         name="services"
                         v-validate="'required'"
                         data-vv-as="выбор услуг"
                         style="display: none;"
                         @change="_handleBlurUpdateField">
                  <button style="width: 172px; padding: 0" :class="[{ 'd-btn d-btn_outline': (fields.services.includes(service.id) === false), 'd-btn d-btn_primary': (fields.services.includes(service.id) === true) }, 'lm-primary-registered-button', 'middle']"> {{ (fields.services.includes(service.id) === true) ? 'Выбрано' : 'Выбрать' }} </button>
                  <span class="price">{{ service.price | currency('₽') }}</span>
                </div>
              </label>
            </div>
          </div>
          <span class="lm-m-service-wrap-input-error" id="service-input-error" v-show="verrors.has('services')">
            {{ verrors.first('services') }}
          </span>
          <a href="javascript:void(0)" @click="_handleClickNext()" style="width: max-content; margin: 72px auto 0;"
             :class="['d-btn d-btn_primary', { 'disabled': (!fields.services.length) }]" >продолжить</a>
        </template>

        <template v-else-if="(services.length === 0)">
          <div class="lm-vs-landing-talent-line" style="width: 100%;">
            <template v-if="hasGeo">
              <tooltip class="menu-tooltip" effect="scale" placement="top" :content="'Настройки местоположения изменятся по всему ресурсу'">
                <a href="javascript:void(0)" class="lm-vs-landing-talent-header-geo-register" @click="_handleClickOpenModalChangeGeo">
                  <span>{{ profile.country.data.name }},</span><span>{{ profile.city.data.name }}</span>
                </a>
              </tooltip>
            </template>

            <div class="title">К сожалению, услуги не доступны в Вашем регионе.</div>

            <div class="actions">
              <router-link :to="{ name: 'certifying.customer.index' }" class="lm-primary-button">Назад</router-link>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template v-else-if="state.is.user">
      <div class="ss-what-is-it ss-main-line">
        <h1 style="text-align: center;margin-top: 0"><b>Заполните данные о себе</b></h1>
        <div class="ss-what-is-it-text">
          Пожалуйста, будьте внимательны при заполнении формы. Персональная информация проходит политику конфиденциальности и используется в целях модерации пользователя.
          Перед отправкой заявки настоятельно рекомендуется ознакомиться с <a href="javacsript:void(0)" style="color: #0063da" @click.stop.prevent="_handleOpenModalRules">правилами проведения верификации</a> и с
          <a href="https://linkmuse.com/pages/polzovatelskoe-soglashenie-vs" style="color: #0063da" target="_blank">пользовательским соглашением</a>.
        </div>
        <div class="lm-card big" style="width: 490px;margin: 0 auto">
          <div class="lm-card--header">
            <div class="lm-dot-steps">
              <div class="active"><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
            </div>
          </div>
          <div class="lm-card--body lm-input-wrap">
            <label for="">Ваш статус</label>
            <ul class="lm-radio-buttons">
              <li>
                <input type="radio" id="individual_entrepreneur"
                       :name="normalizeDotsToArrow(KEYS['type'])"
                       :key="KEYS['type']"
                       v-validate="'required'"
                       :value="INDIVIDUAL_ENTREPRENEUR"
                       v-model="fields[KEYS['type']]"
                       @change="_handleBlurUpdateField">
                <label for="individual_entrepreneur">ИП</label>
              </li>
              <li>
                <input type="radio" id="entity"
                       :name="normalizeDotsToArrow(KEYS['type'])"
                       :key="KEYS['type']"
                       v-validate="'required'"
                       :value="ENTITY"
                       v-model="fields[KEYS['type']]"
                       @change="_handleBlurUpdateField">
                <label for="entity">Юридическое лицо</label>
              </li>
            </ul>
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['type']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['type'])) }}
            </span>
          </div>
          <div class="lm-card--body row inputs">
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['fullname'])) }"
                 v-if="isIndividualEntrepreneur">
              <label :for="KEYS['fullname']">ФИО</label>
              <input type="text" placeholder="Как вас зовут?"
                     :key="KEYS['fullname']"
                     :id="KEYS['fullname']"
                     :name="normalizeDotsToArrow(KEYS['fullname'])"
                     v-validate="'required'"
                     data-vv-as="ФИО"
                     v-model="fields[KEYS['fullname']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['fullname'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['fullname']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['fullname'])) }}
              </span>
            </div>
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['company_name'])) }"
                 v-if="isEntity">
              <label :for="KEYS['company_name']">Название организации</label>
              <input type="text" placeholder="Название"
                     :key="KEYS['company_name']"
                     :id="KEYS['company_name']"
                     :name="normalizeDotsToArrow(KEYS['company_name'])"
                     v-validate="'required'"
                     data-vv-as="Название организации"
                     v-model="fields[KEYS['company_name']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['company_name'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['company_name']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['company_name'])) }}
              </span>
            </div>

            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['phone'])) }">
              <label :for="KEYS['phone']">Телефон</label>
              <input type="text" placeholder="+7"
                     :key="KEYS['phone']"
                     :id="KEYS['phone']"
                     :name="normalizeDotsToArrow(KEYS['phone'])"
                     v-mask-phone
                     v-validate="'required|phone'"
                     data-vv-as="Телефон"
                     v-model="fields[KEYS['phone']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['phone'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['phone']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['phone'])) }}
            </span>
            </div>
            <div class="lm-flex-bettwen" style="width: 100%">
              <a href="javascript:void(0)" class="lm-secondary-button" @click="_handleClickBackRequireOnRole()">назад</a>
              <a href="javascript:void(0)" class="lm-primary-button" @click="_handleClickNext()">Продолжить</a>
            </div>
          </div>
        </div>
      </div>
      <lm-modal-rules></lm-modal-rules>
    </template>
    <template v-else-if="state.is.bank_account">
      <div class="ss-what-is-it ss-main-line">
        <h1 style="text-align: center;margin-top: 0"><b>Заполните реквизиты</b></h1>
        <div class="ss-what-is-it-text">
          Введите свои данные, чтобы получать деньги за заказы <tooltip content="Эта информация является конфиденциальной и предназначена только для частного использования физическим или юридическим лицом, которому они будут адресованы."><i class="questions-icon-fix"></i></tooltip>
        </div>
        <div class="lm-card big" style="width: 490px;margin: 0 auto">
          <div class="lm-card--header">
            <div class="lm-dot-steps">
              <div class="active complite"><span></span></div>
              <div class="active"><span></span></div>
              <div><span></span></div>
            </div>
          </div>
          <div class="lm-card--body row inputs">
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['itn'])) }">
              <label :for="KEYS['itn']">Ваш ИНН</label>

              <input type="text" placeholder="000000000000"
                     :key="KEYS['itn']"
                     :id="KEYS['itn']"
                     :name="normalizeDotsToArrow(KEYS['itn'])"
                     data-vv-as="Ваш ИНН"
                     v-mask-static="'9{12}'"
                     v-validate="'required|digits:12'"
                     v-model="fields[KEYS['itn']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['itn'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['itn']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['itn'])) }}
              </span>
            </div>
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['iec'])) }">
              <label :for="KEYS['iec']">КПП</label>
              <input type="text" placeholder="0000000000 / 000000000"
                     :key="KEYS['iec']"
                     :id="KEYS['iec']"
                     :name="normalizeDotsToArrow(KEYS['iec'])"
                     data-vv-as="КПП"
                     v-mask-static="'9{23}'"
                     v-validate="'digits:23'"
                     v-model="fields[KEYS['iec']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['iec'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['iec']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['iec'])) }}
              </span>
            </div>
          </div>
          <div class="lm-card--body row inputs">
            <div
              :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['bank_recipient'])) }">
              <label :for="KEYS['bank_recipient']">Банк-получатель</label>
              <input type="text" placeholder="Банк-получатель"
                     :key="KEYS['bank_recipient']"
                     :id="KEYS['bank_recipient']"
                     :name="normalizeDotsToArrow(KEYS['bank_recipient'])"
                     data-vv-as="Банк-получатель"
                     v-validate="'required|min:3|max:200'"
                     v-model="fields[KEYS['bank_recipient']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['bank_recipient'])) }">

              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['bank_recipient']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['bank_recipient'])) }}
              </span>
            </div>
            <div
              :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['correspondent_account'])) }">
              <label :for="KEYS['correspondent_account']">Кор. счет</label>
              <input type="text" placeholder="00000000000000000000"
                     :key="KEYS['correspondent_account']"
                     :id="KEYS['correspondent_account']"
                     :name="normalizeDotsToArrow(KEYS['correspondent_account'])"
                     data-vv-as="Кор. счет"
                     v-mask-static="'9{20}'"
                     v-validate="'required|digits:20'"
                     v-model="fields[KEYS['correspondent_account']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['correspondent_account'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['correspondent_account']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['correspondent_account'])) }}
              </span>
            </div>
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['bic'])) }">
              <label :for="KEYS['bic']">БИК</label>
              <input type="text" placeholder="00000000000000000000"
                     :key="KEYS['bic']"
                     :id="KEYS['bic']"
                     :name="normalizeDotsToArrow(KEYS['bic'])"
                     data-vv-as="БИК"
                     v-mask-static="'9{9}'"
                     v-validate="'required|digits:9'"
                     v-model="fields[KEYS['bic']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['bic'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['bic']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['bic'])) }}
              </span>
            </div>
            <div
              :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['checking_account'])) }">
              <label :for="KEYS['checking_account']">Расчетный счет</label>
              <input type="text" placeholder="00000000000000000000"
                     :key="KEYS['checking_account']"
                     :id="KEYS['checking_account']"
                     :name="normalizeDotsToArrow(KEYS['checking_account'])"
                     data-vv-as="Расчетный счет"
                     v-mask-static="'9{20}'"
                     v-validate="'required|digits:20'"
                     v-model="fields[KEYS['checking_account']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['checking_account'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['checking_account']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['checking_account'])) }}
              </span>
            </div>
            <div
              :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['vat'])) }">
              <label for="vat">НДС (Работаем только с ПСН и УСН)</label>
              <div class="lm-dropdown-wrap">
                <v-select :limit="String(vat.length)" :options="vat" v-model="fields[KEYS['vat']]"></v-select>
              </div>
            </div>
          </div>
          <div class="lm-card--body row inputs">
            <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['legal_address'])) }">
              <label :for="KEYS['legal_address']">Юридический адрес</label>
              <input type="text" placeholder="Юридический адрес"
                     :key="KEYS['legal_address']"
                     :id="KEYS['legal_address']"
                     :name="normalizeDotsToArrow(KEYS['legal_address'])"
                     v-validate="'required|min:5|max:200'"
                     data-vv-as="Юридический адрес"
                     v-model="fields[KEYS['legal_address']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['legal_address'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['legal_address']))">
                  {{ verrors.first(normalizeDotsToArrow(KEYS['legal_address'])) }}
                </span>
            </div>
            <div
              :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(normalizeDotsToArrow(KEYS['actual_address'])) }">
              <label for="actual_address">Фактический адрес (прописка)</label>
              <input type="text" placeholder="Фактический адрес"
                     :key="KEYS['actual_address']"
                     :id="KEYS['actual_address']"
                     :name="normalizeDotsToArrow(KEYS['actual_address'])"
                     data-vv-as="Фактический адрес (прописка)"
                     v-validate="'required|min:5|max:200'"
                     v-model="fields[KEYS['actual_address']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['actual_address'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['actual_address']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['actual_address'])) }}
              </span>
            </div>

            <div class="lm-flex-bettwen" style="width: 100%">
              <a href="javascript:void(0)" class="lm-secondary-button" @click="_handleClickBackRequireOnRole()">назад</a>
              <a href="javascript:void(0)" class="lm-primary-button" @click="_handleClickNext()">Продолжить</a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="state.is.photos">
      <div class="ss-what-is-it ss-main-line">
        <h1 style="text-align: center;margin-top: 0"><b>Заполните данные о себе</b></h1>
        <div class="ss-what-is-it-text">
          Пожалуйста, прикрепите свои работы для оценки качества съемки.
          Фотографии будут отображаться в вашем профиле, после одобрения заявки
        </div>
        <div class="lm-card big" style="width: 490px;margin: 0 auto">
          <div class="lm-card--header">
            <div class="lm-dot-steps">
              <div class="active complite"><span></span></div>
              <div class="active complite"><span></span></div>
              <div class="active complite"><span></span></div>
            </div>
          </div>
          <div class="lm-card--body row inputs" style="width: 418px">
            <lm-dropzone :max-items="30" :label="'Загрузить файлы'" :mediaModal="true"
                         :multiple="true" :accept="['image/*','video/*']" :defaultItems="uploadItems"
                         @update="handleUploadItemsRegister"
                         @onUpload="handleUpload"
                         @onRemove="handleRemove">
            </lm-dropzone>
            <div class="lm-flex-bettwen" style="width: 100%">
              <template v-if="loading === false">
                <a href="javascript:void(0)" class="lm-secondary-button" @click="_handleClickBackRequireOnRole()">назад</a>
                <a href="javascript:void(0)" class="lm-primary-button" @click="_handleClickNext()">{{ this.uploadItems.length ? 'Продолжить' : 'Пропустить' }}</a>
              </template>
              <loader v-else-if="loading" class="col-xs-12"></loader>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="state.is.studios">
      <!-- step of verification -->
      <div class="section page__section page__section_verification-step page__section_verification-step_adding-studios">
        <div class="section__title section__title_verification-step">Добавление студий</div>
        <div class="section__description section__description_verification-step">Адрес первой студии в списке является приоритетным.<br />Последующее редактирование доступно на странице “Настройки”</div>

        <div class="form form_verification-step form_verification-step_adding_studios">

          <div class="section form__section form__section_verification-step form__section_verification-step_studios" :id="`studio-${index}`" v-for="(studio, index) in studios">
            <div class="label section__label section__label_number-of-section">
              <div class="label__decoration label__decoration_number-of-section">{{ index + 1 }}</div>
            </div>
            <button class="button section__button section__button_delete section__button_delete_section" @click="_handleClickDeleteStudio(index, studio.id)">
              <span class="button__decoration button__decoration_x button__decoration_x_delete-section"></span>
            </button>

            <div class="form__group form__group_input form__group_input_verification-step">
              <span class="input__label input__label_verification-step">Название студии:</span>
              <input type="text"
                     placeholder="Название"
                     :id="`studio-name-${index}`"
                     :key="`studio-name-${index}`"
                     name="name"
                     v-validate="'required|min:3|max:255'"
                     data-vv-as="Название студии"
                     :data-vv-scope="`studio-${index}`"
                     v-model="studio.name"
                     @blur="_handleBlurUpdateFieldStudio(studio.id, 'name', `studio-${index}`, $event)"
                     :class="['input', 'input_verification-step', { error: verrors.has(`studio-${index}.name`) }]" />
              <template v-if="verrors.has(`studio-${index}.name`)">
                <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.name`) }}</div>
              </template>
            </div>
            <div class="form__group form__group_input form__group_input_verification-step">
              <span class="input__label input__label_verification-step">Метро:</span>
              <input type="text"
                     placeholder="Метро"
                     :id="`studio-metro-${index}`"
                     :key="`studio-metro-${index}`"
                     name="metro"
                     v-validate="'required|min:3|max:255'"
                     data-vv-as="Метро"
                     :data-vv-scope="`studio-${index}`"
                     v-model="studio.metro"
                     @blur="_handleBlurUpdateFieldStudio(studio.id, 'metro', `studio-${index}`, $event)"
                     :class="['input', 'input_verification-step', { error: verrors.has(`studio-${index}.metro`) }]" />
              <template v-if="verrors.has(`studio-${index}.metro`)">
                <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.metro`) }}</div>
              </template>
            </div>
            <div class="form__group form__group_input form__group_input_verification-step">
              <span class="input__label input__label_verification-step">фактический адрес:</span>
              <no-ssr>
                <gmap-autocomplete :id="`studio-address-${index}`"
                                   :key="`studio-address-${index}`"
                                   v-validate="'required|min:3|max:255'"
                                   :data-vv-scope="`studio-${index}`"
                                   data-vv-as="Адрес"
                                   name="address"
                                   placeholder="Страна, город, улица, номер дома и офиса"
                                   v-model="studio.address"
                                   @place_changed="setPlaceService(index, studio.id, 'metro', `studio-${index}`, ...arguments)"
                                   :class="['input', 'input_verification-step', { error: verrors.has(`studio-${index}.address`) }]">
                </gmap-autocomplete>
              </no-ssr>
              <template v-if="verrors.has(`studio-${index}.address`)">
                <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.address`) }}</div>
              </template>
            </div>
            <div class="section form__section form__section_upload form__section_upload_img">
              <template v-if="(studio.hasOwnProperty('rebuild') === true)">
                <loader class="col-xs-12"></loader>
              </template>
              <template v-else-if="(studio.hasOwnProperty('rebuild') === false)">
                <lm-dropzone :max-items="9" :label="'Загрузить файлы'" :mediaModal="false" :class="{ error: verrors.has(`studio-${index}.images`) }" :key="`studio-dropzone-${index}`"
                             :multiple="true" :accept="['image/jpeg', 'image/png', 'image/gif']" :defaultItems="(studio.hasOwnProperty('id')) ? studio.images.data : []"
                             @update="handleUploadItems(index, studio.id, ...arguments)"
                             @onRemove="handleRemoveOnStudio(index, studio.id, ...arguments)"
                             @onUpload="handleUploadOnStudio(index, studio.id, ...arguments)">
                </lm-dropzone>
              </template>
            </div>
          </div>

          <div class="form__group form__group_buttons form__group_buttons_verification-step" :style="{ paddingTop: (this.studios.length) ? 0: '36px' } ">
            <loader class="col-xs-12" v-if="(loading === true)"></loader>

            <button :class="['button', 'form__button', 'form__button_continue', 'form__button_continue_verification-step', { 'disabled': (loading) }]" @click="_handleClickCreateStudio()" style="width: 100%">
              {{ this.studios.length ? 'Продолжить' : 'Пропустить' }}
            </button>
          </div>
        </div>

        <button :class="['button', 'form__button', 'form__button_add', 'form__button_add_studio', { 'disabled': (loading) }]" @click="_handleClickAddNewStudio">
          <span class="button__decoration button__decoration_plus"></span>
          <span class="button__content button__content_add button__content_add_studio">Добавить студию</span>
        </button>
      </div>
    </template>
    <template v-else-if="state.is.finish">
      <div class="ss-what-is-it ss-main-line">
        <div class="lm-card success" style="width: 490px;margin: 0 auto;text-align: center">
          <div class="lm-card--body">
            <div class="lm-card--body-wrap">
              <h1 style="margin-bottom: 24px;"><b>Ваша заявка принята!</b></h1>
              <p class="desc">Заявка передана на модерацию и <br> будет рассмотрена в ближайшее время. <br/> О результатах мы сообщим Вам на E-mail. </p>
              <br>
              <br>
              <p class="desc">
                <b v-if="specialists.data.length">С нами уже {{ this.specialists.count | pluralize(['специалист', 'специалиста', 'специалистов']) }}!</b>
                <br>Скоро ты станешь
                одним из них, а пока познакомься <br>
                с другими специалистами:</p>
            </div>
            <div class="row" style="margin-bottom: 60px;margin-top: 46px;" v-if="specialists.data.length">
              <div class="lm-user-vertical big col-xs-6" v-for="specialist in specialists.data" :key="specialist.id">
                <img :src="specialist.avatar" class="lm-user-vertical-avatar" :alt="specialist.name">
                <div class="lm-user-vertical-info">
                  <div class="lm-user-vertical-info-name"><span>{{ specialist.name }}</span>
                    <span class="lm-user-status online"></span>
                  </div>
                  <div class="lm-user-block-vertical-type">
                    <span class="type">{{ getTypeCertifyingSpecialist(specialist.type) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <router-link class="lm-primary-button" :to="{ name: 'certifying.catalog.index' }">Посмотреть профили</router-link>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { createHelpers } from 'vuex-map-fields'
  import { has, addClass, removeClass } from '@utils'
  import { StateMachine, StateHelper } from 'state-machine'
  import DropZone from '@components/UI/Dropzone/Custom/Index.vue'
  import ModalRules from '@components/CertifyingSpecialist/Customer/Modals/Rules.vue'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'
  import { arrayItemToggle, unflatten, normalizeDotsToArrow, obj2fd } from '@utils'

  import { VAT_NULL } from '@modules/CertifyingSpecialist/Enums/VAT.js'
  import { VIDEO, PHOTO } from '@components/UI/Dropzone/Custom/Enums/Types'
  import { STUDIO_FIELDS } from '@modules/CertifyingSpecialist/Enums/StudioFields'
  import { INDIVIDUAL_ENTREPRENEUR, ENTITY } from '@modules/CertifyingSpecialist/Enums/Types.js'

  const { mapFields } = createHelpers({
    getterType: 'certifying/getField',
    mutationType: 'certifying/updateField'
  });

  const KEYS = {
    type: 'user.type',
    phone: 'user.phone',
    fullname: 'user.fullname',
    company_name: 'user.company_name',
    itn: 'bank_account.itn',
    iec: 'bank_account.iec',
    bic: 'bank_account.bic',
    legal_address: 'bank_account.legal_address',
    bank_recipient: 'bank_account.bank_recipient',
    actual_address: 'bank_account.actual_address',
    checking_account: 'bank_account.checking_account',
    correspondent_account: 'bank_account.correspondent_account',
    vat: 'bank_account.vat',
  }

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  export default {
    metaInfo () {
      return {
        title: 'Ура! Вы решили стать СС и много зарабатывать'
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next : services > user > bank_account > photos > studios > finish',
          'back: services < user < bank_account < photos < studios'
        ],
        handlers: {
          'services@next': this._handleSelectedServices,
          'user@next': this._handleDrawUserInfo,
          'bank_account@next': this._handleDrawBankAccount,
          'photos@next': this._handleUploadedPhotos,
          'studios@next': this._handleDrawStudios,
          'finish': this._handleFinishState
        }
      })

      this.state = StateHelper.object(this.fsm).data

      this.checkCertifyingSpecialist()
    },
    mounted () {
      let fields = this.$localStorage.get('register.certifying', null, Object)
      if (fields && typeof fields === 'object') Object.assign(this.fields, fields)

      let app = document.getElementById('app')
      addClass(app, 'fix-relative')

      this.$root.$on('user-change-location', () => {
        this.$store.dispatch('certifying/fetchAllServices')
      })
    },
    beforeDestroy () {
      let app = document.getElementById('app')
      removeClass(app, 'fix-relative')
    },
    asyncData ({store}) {
      return store.dispatch('certifying/fetchAllServices')
    },
    components: { 'lm-dropzone': DropZone, 'lm-modal-rules': ModalRules },
    computed: {
      ...mapFields(['register.data.fields']),
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        services: 'certifying/getAllServicesData',
        servicesLoading: 'certifying/getAllServicesLoading'
      }),
      isIndividualEntrepreneur () {
        return (this.fields[KEYS['type']] === INDIVIDUAL_ENTREPRENEUR)
      },
      isEntity () {
        return (this.fields[KEYS['type']] === ENTITY)
      },
      isCustomer () {
        return (this.role === 'customer')
      },
      certifying_specialist_status () {
        if (!this.user) return
        return this.user['certifying_specialist_status']
      },
      vat () {
        let options = []

        Object.keys(CertifyingSpecialist.VAT).forEach(id => {
          options.push({ id: id === 'null' ? null : id, text: this.getVATTranslate(id) })
        })

        return options
      },
      hasGeo () {
        return (this.profile && (has(this.profile, 'country.data.id') || has(this.profile, 'city.data.id')))
      }
    },
    data () {
      return {
        normalizeDotsToArrow, KEYS,
        ENTITY, VAT_NULL, INDIVIDUAL_ENTREPRENEUR,
        state: null,
        studios: [],
        loading: false,
        uploadItems: [],
        specialists: {
          count: 0,
          data: []
        }
      }
    },
    methods: {
      _handleOpenModalRules () {
        this.$root.$emit('open-modal-rules-customer-show')
      },
      getVATTranslate (item) {
        return CertifyingSpecialist.getVATTranslate(item)
      },
      handleUploadItemsRegister (items) {
        this.uploadItems = items
      },
      handleUpload (...args) {
        if (args[0].type === PHOTO)
          this.handleUploadPhoto(...args)
        else if (args[0].type === VIDEO)
          this.handleUploadVideo(...args)
      },
      handleRemove (item, remove) {
        if (item.type === PHOTO)
          this.handleRemovePhoto(item, remove)
        else if (item.type === VIDEO)
          this.handleRemoveVideo(item, remove)
      },
      handleUploadPhoto (item, file, progress, success, error) {
        let data = new FormData()

        data.append('file',file)
        data.append('album_id', -2)

        this.$api.post('api/v1/users/photos', data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { photo_id, path } } = response

          success(item.uid, { id: photo_id, path })
        }).catch((err) => {
          error(item.uid, err, 'file')
          console.error('Error upload photo')
        })
      },
      handleRemovePhoto (item, remove) {
        this.$confirm({
          title: 'Удаление фото',
          message: 'Вы действительно хотите удалить данное фото?'
        }).then((args) => {
          this.$api.delete('api/v1/users/photos/' + item.id).then(response => {
            remove(item.uid)
          }).catch(() => {
            remove(item.uid, false)
            throw new Error('Error delete photo')
          })
        }).catch((args) => {
          remove(item.uid, false)
        })
      },
      handleRemoveVideo (item, remove) {
        this.$confirm({
          title: 'Удаление фото',
          message: 'Вы действительно хотите удалить данное видео?'
        }).then((args) => {
          this.$api.delete('api/v1/users/videos/' + item.id).then(response => {
            remove(item.uid)
          }).catch(() => {
            remove(item.uid, false)
            throw new Error('Error delete video')
          })
        }).catch((args) => {
          remove(item.uid, false)
        })
      },
      handleUploadVideo (item, file, progress, success, error) {
        let data = new FormData()

        data.append('file',file)
        data.append('album_id', -2)

        this.$api.post('api/v1/users/videos', data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { data: { id, url }, data: video } } = response

          success(item.uid, { id, url, video })
        }).catch((err) => {
          error(item.uid, err, 'file')
          console.error('Error upload video')
        })
      },
      checkCertifyingSpecialist () {
        return new Promise((resolve, reject) => {
          if (this.certifying_specialist_status === 'not_activated') {
            this.fsm.go('finish', true)

            this.$api.get('api/v2/certifying-specialists/helpers/specialists/random', {limit: 2}).then(response => {
              const {data: {count, specialists: {data}}} = response

              this.specialists.data = data
              this.specialists.count = count
            }).catch(() => {
              throw new Error('Error fetch random specialists')
            })
          } else if (this.certifying_specialist_status === 'activated') {
            this.fsm.go('finish', true)
            this.$router.replace({'name': 'certifying.customer.orders.index'})
          } else this.fsm.go('services', true)
        })
      },
      toggleSelectedService (service_id) {
        this.fields.services = arrayItemToggle(this.fields.services, service_id)
      },
      _handleSelectedServices (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => {
          fsm.cancel()
          this.$scrollTo('#service-input-error', 500, {  offset: -20 })
        })
      },
      _handleDrawUserInfo (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => fsm.cancel())
      },
      _handleDrawBankAccount (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => fsm.cancel())
      },
      _handleUploadedPhotos (event, fsm) {
        fsm.pause()

        this._handleClickCreateRequest().then(() => {
          this.handlePushStudio()
          fsm.resume()
        }).catch(() => fsm.cancel())
      },
      _handleDrawStudios (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => fsm.cancel())
      },
      _handleFinishState (event, fsm) {

      },
      /**
       * Validate all fields on current transition
       * @returns {Promise<any>}
       * @private
       */
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleValidateScopeStudioFields (scope) {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll(scope).then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      /**
       * Next transition
       * @private
       */
      _handleClickNext () {
        this.fsm.do('next')
      },
      /**
       * Back transition
       * @private
       */
      _handleClickBackRequireOnRole () {
        this.fsm.do('back')
      },
      _handleClickCreateRequest () {
        if (this.loading) return

        return new Promise((resolve, reject) => {
          this.loading = true
          this.$api.post('api/v2/certifying-specialists', unflatten(this.fields)).then(response => {
            this.loading = false

            const {data: {count, specialists: {data}}} = response

            this.specialists.data = data
            this.specialists.count = count

            this.$localStorage.remove('register.certifying')
            this.$store.dispatch('auth/setUserField', { key: 'certifying_specialist_status', value: 'not_activated' })
            this.$store.dispatch('auth/getUserByAPI')

            resolve && resolve()

          }).catch(error => {
            const { response: { data }, response: { status }} = error
            this.loading = false

            if (status === 422 && data.errors) {
              let state = null
              const { errors } = data

              Object.keys(errors).forEach((key) => {
                if (state === null) state = key.split('.')[0]
                this.$validator.errors.add({ field: normalizeDotsToArrow(key), msg: errors[key].join(', ') })
              })

              if (state && this.fsm.has(state)) this.fsm.go(state, true)
            } else throw new Error('Error register CS')

            reject && reject()
          })
        })
      },
      getTransformServiceWorkType (works) {
        return CertifyingSpecialist.getTransformServiceWorkType(works)
      },
      getTypeCertifyingSpecialist ( type ) {
        return CertifyingSpecialist.getTypeCertifyingSpecialist(type)
      },
      handlePushStudio () {
        this.studios.push(this._.cloneDeep(STUDIO_FIELDS))
      },
      _handleBlurUpdateField () {
        this.$localStorage.set('register.certifying', JSON.stringify(this.fields))
      },
      _handleClickDeleteStudio ( index, studio_id ) {
        if (typeof this.studios[index] !== 'undefined') {
          this.$confirm({
            title: 'Удаление студии',
            message: 'Вы действительно хотите удалить данную студию?'
          }).then((args) => {
            let studio = this._.cloneDeep(this.studios[index])
            this.$delete(this.studios, index)
            if (studio_id) {
              this.$api.delete(`api/v2/certifying-specialists/studios/${studio_id}`).then(response => {
                let { data } = response
                console.log('Removed studio')
              }).catch(error => {
                const { response: { data }, response: { status }} = error
                this.studios.push(studio)
                throw new Error('Error delete studio')
              })
            }
          }).catch((args) => { })
        } else throw new Error('Error find studio index.')
      },
      handleRemoveOnStudio (index, studio_id, { id, uid }, remove ) {
        this.$api.delete(`api/v2/certifying-specialists/studios/images/${id}`).then(response => {
          remove(uid)
        }).catch(() => {
          remove(uid, false)
          throw new Error('Error delete photo')
        })
      },
      handleUploadItems (index, studio_id, items) {
        if (!studio_id) {
          this.studios[index]['image_ids'] = items.map((item) => item.id)
        }
      },
      handleUploadOnStudio (index, studio_id, item, file, progress, success, error) {
        const URL = (studio_id) ? `api/v2/certifying-specialists/studios/${studio_id}/images` : 'api/v2/certifying-specialists/studios/images'
        let data = new FormData()
        data.append('image', file)

        this.$api.post(URL, data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { data: { id, paths: { original } } } } = response

          success(item.uid, { id, path: original })
        }).catch((err) => {
          error(item.uid, err, 'image')
          console.error('Error upload photo')
        })
      },
      checkStartDrawStudio ( studio ) {
        return new Promise((resolve, reject) => {
          Object.keys(studio).forEach(k => {
            if (typeof studio[k] === "string" && studio[k]) reject && reject()
            else if (Array.isArray(studio[k]) && studio[k].length) reject && reject()
          })
          resolve && resolve()
        })
      },
      _handleClickCreateStudio () {
        if (this.loading) return

        if (this.studios.length) {
          let studio = this.studios[this.studios.length - 1]
          if (studio.hasOwnProperty('id') === false) {
            this.checkStartDrawStudio(studio).then(() => this._handleClickNext()).catch(() => {
              let scope = `studio-${this.studios.length - 1}`
              this._handleValidateScopeStudioFields(scope).then(() => {
                this._handleCreateStudio().then(() => {
                  this._handleClickNext()
                }).catch(() => { console.log('stop created') })
              }).catch(() => { console.log('stop validate') })
            })
          } else this._handleClickNext()
        } else this._handleClickNext()
      },
      _handleClickAddNewStudio () {
        if (this.studios.length) {
          let indexOf = this.studios.length - 1
          let scope = `studio-${indexOf}`
          this._handleValidateScopeStudioFields(scope).then(() => {
            this._handleCreateStudio().then(() => {
              this.handlePushStudio()
              this.$nextTick(() => this.$scrollTo(`#studio-${this.studios.length - 1}`, 500))
            })
          }).catch(() => {})
        } else this.handlePushStudio()
      },
      _handleCreateStudio () {
        if (this.loading) return

        return new Promise((resolve, reject) => {

          this.loading = true
          let indexOf = (this.studios.length - 1)
          let fields = this.studios[indexOf]

          this.$api.post('api/v2/certifying-specialists/studios', obj2fd(fields)).then(response => {
            const { data : { data } } = response

            this.loading = false

            // Need for rebuild DropZone
            let studio = this._.cloneDeep(data)
            this.$set(this.studios, (indexOf), Object.assign(studio, { 'rebuild': true }))

            this.$nextTick(() => this.$set(this.studios, (indexOf), data))

            resolve && resolve()

          }).catch(error => {
            const { response: { data }, response: { status }} = error
            this.loading = false

            if (status === 422 && data.errors) {
              let state = null
              const { errors } = data

              Object.keys(errors).forEach((key) => {
                if (state === null) state = key.split('.')[0]
                this.$validator.errors.add({ field: `studio-${indexOf}.${key}`, msg: errors[key].join(', ') })
              })

              if (state && this.fsm.has(state)) this.fsm.go(state, true)
            } else throw new Error('Error create studio')

            reject && reject()
          })
        })
      },
      _handleBlurUpdateFieldStudio (studio_id, name, scope, $event) {
        if (studio_id) {
          this.$validator.validate(`${scope}.${name}`).then((result) => {
            if (result) {
              this.$api.patch((`api/v2/certifying-specialists/studios/${studio_id}`), { [name]: $event.target.value }).then((response) => {
                let { data: { data } } = response
              }, (error) => {
                const { response: { data }, response: { status }} = error

                if (status === 422) {
                  const { errors } = data
                  Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `${scope}.${name}`, msg: errors[key].join(', ') }))
                } else throw new Error('Error attach field studio')
              })
            }
          })
        }
      },
      setPlaceService (index, studio_id, name, scope, place) {
        let address = place.formatted_address
        let coordinates = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }

        this.$set(this.studios[index], 'address', address)
        this.$set(this.studios[index], 'coordinates', coordinates)

        if (studio_id) {
          this.$api.patch((`api/v2/certifying-specialists/studios/${studio_id}`), { address, coordinates }).then((response) => {
            let { data: { data } } = response
          }, (error) => {
            const { response: { data }, response: { status }} = error

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `${scope}.${name}`, msg: errors[key].join(', ') }))
            } else throw new Error('Error attach field studio')
          })
        }
      },
      _handleClickOpenModalChangeGeo () {
        this.$root.$emit('open-modal-draw-geo')
      }
    }
  }
</script>
<style lang="sass" scoped>
  .lm-vs-landing-talent-header-geo-register
    display: block
    font-size: 10px
    margin-bottom: 20px
    font-weight: 600
    line-height: 1.29
    text-transform: uppercase
    text-decoration: underline
  .bg-fix-color
    background: #fff
    &:after
      content: ''
      display: block
      position: absolute
      background: #fff
      top: 0
      left: 0
      height: 100%
      width: 100%
      z-index: -1
    .questions-icon-fix
      background-size: 14px
      display: inline-block
      vertical-align: middle
      width: 14px
      height: 14px
      cursor: pointer
      background-position: center
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="%23282a36" fill-rule="nonzero"><path d="M8.81 5.252c.207.256.31.557.31.905 0 .249-.07.488-.212.72-.078.13-.18.257-.309.378l-.426.42c-.409.402-.673.758-.793 1.069-.121.31-.181.72-.181 1.228h.948c0-.448.05-.786.152-1.015.101-.229.322-.508.663-.84.47-.454.78-.798.935-1.033.154-.234.232-.54.232-.916 0-.621-.21-1.132-.632-1.532-.42-.4-.98-.599-1.68-.599-.757 0-1.352.234-1.785.7-.433.467-.65 1.084-.65 1.851h.948c.018-.461.091-.815.218-1.06.227-.44.637-.66 1.23-.66.48 0 .824.128 1.031.384z"/><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zM.727 8a7.273 7.273 0 1 1 14.545 0A7.273 7.273 0 0 1 .727 8z"/><path d="M7.177 10.855h1.06v1.108h-1.06z"/></g></svg>')
    .lm-vs-landing-talent
      .lm-primary-registered-button
        cursor: pointer
      .lm-m-rectangle-checked-service
        width: 16px
        height: 16px
        line-height: 12px
        text-align: center
        border-radius: 100%
        background: #deecfc
        display: inline-block
        margin-left: 4px
      .lm-vs-landing-talent-line
        background: transparent
        padding-bottom: 0
        padding-top: 28px
        width: 100%
        & + .lm-vs-landing-talent-line
          border-top: 0
    .lm-switch-step-two
      width: 153px
      display: block
      margin: 0 auto
      margin-top: 72px
    .lm-vs-landing-talent-service-item
      cursor: pointer
      &:hover
        .lm-primary-registered-button
          color: #fff
          background-color: #0063da
      .lm-primary-registered-button
        pointer-events: none
        width: 166px
        border: 1px solid #0063da
        line-height: 34px
    .lm-dropzone
      margin-bottom: 16px
    .lm-m-service-wrap-input-error
      font-size: 11px
      letter-spacing: 0.2px
      color: rgb(252, 46, 95)
      text-align: center
      width: 100%
      margin-top: 20px
</style>
