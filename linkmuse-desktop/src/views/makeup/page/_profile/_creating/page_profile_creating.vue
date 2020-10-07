<template>
  <div class="page_declaration_creating page-inner">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_2">{{ title }}</div>
        <div class="d-input__label mb_12">Актёр</div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Основная информация
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="profession__category" class="d-input__label d-input__label_required">Профессия</label>
              <div class="column">
                <lm-select
                  input-id="profession__category"
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
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('categoryId')) }]">
                </lm-select>

                <template v-if="(verrors.has('categoryId'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('categoryId') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="form__select_declaration_age_from" class="d-input__label d-input__label_required mr_4">Игровой возраст</label>
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


            <div class="d-input d-input_row mb_6">
              <label for="directions" class="d-input__label d-input__label_required">Направления</label>
              <div class="column">
                <input type="text" :placeholder="'Массовка, Реклама, Выставки'" id="directions" autocomplete="off"
                       :data-vv-as="'Направления'"
                       name="directions"
                       v-model="tabProfession"
                       :class="['d-input__field', 'w_100' ]">
<!--                <div id="additionTags" class="d-input__field w_100" style="position: absolute"></div>-->
                <template v-if="verrors.has('passSystem')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('passSystem') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="theater_service" class="d-input__label">Служба в театрах</label>
              <div class="column">
                <input type="text" :placeholder="'Голос 2018, январь - март 2018, финалист'" id="theater_service" autocomplete="off"
                       :data-vv-as="'Служба в театрах'"
                       name="theater_service"
                       :class="['d-input__field', 'w_100' ]">
                <template v-if="verrors.has('theater_service')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('theater_service') }}</div>
                </template>
              </div>
            </div>


            <div class="d-textarea d-textarea_row">
              <label for="full-description" class="d-textarea__label">Конкурсы и награды</label>
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


          </div>

        </div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Ставка
            </div>

            <div class="d-input d-input_row mb_6">
              <label for="input_payment" class="d-input__label mr_4">Стоимость работы (от)</label>
              <div class="w_100 mr_4">
                <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                       id="input_payment" name="feeAmount" :disabled="(!Boolean(Number(fields.fee)) || hasCategory === false)"
                       placeholder="Введите сумму"
                       v-model="fields.feeAmount" v-mask-numeric
                       v-validate="'numeric|min:1|max_value:9999999'"
                       @blur="_handleBlurUpdateField"
                       :class="[{ 'error': (verrors.has('feeAmount')) }, 'd-input__field']">
              </div>
              <div class="d-select" style="width: 72px">
                <lm-select
                  input-id="form__select_period_payment"
                  input-name="feeCurrencyId"
                  data-vv-name="feeCurrencyId"
                  data-vv-as="Валюта"
                  :options="feeCurrencies"
                  v-model="fields.feeCurrencyId"
                  :placeholder="'₽'"
                  :multiple="false"
                  :filter="false"
                  :position="'bottom'"
                  @change="_handleBlurUpdateField"
                  :disabled="(!Boolean(Number(fields.fee)) || !Number(fields.feeAmount))"
                  v-validate ="{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'd-select__field_currency', { 'error': (verrors.has('feeCurrencyId')) }]">
                </lm-select>

              </div>
            </div>

            <div class="d-select d-select_row justify_between w_100 mb_6">
              <label for="select_period_payment" class="d-select__label mr_4">Период оплаты</label>
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
                :class="['lm-dropdown-wrap--n', 'd-select__field', { 'error': (verrors.has('feeTypeId')) }]">
              </lm-select>
            </div>

            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label for="work_payment" class="d-switch__label">
                    Работа бесплатно
                    <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipFee" :enable="(hasCategory === true)">
                      <svg class="d-tooltip__icon ml_2">
                        <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                      </svg>
                    </tooltip>
                  </label>
                  <input id="work_payment" type="checkbox" class="d-switch__mark" true-value="0" false-value="1" name="fee" v-model="fields.fee" :disabled="(hasCategory === false)" @change="_handleBlurUpdateField">
                  <label for="work_payment" class="d-switch__btn"></label>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Портфолио
            </div>

            <div class="d-upload-zone d-upload-zone_row mb_6">
              <label class="d-upload-zone__label mr_4">Фото</label>
              <div class="column">
                <lm-dropzone :label="'добавить фото'" :mediaModal="false" :max-items="10" :disabled="(hasCategory === false)" class="form__dropzone d-upload-zone__field"
                             :multiple="true" :accept="['image/*']" :defaultItems="uploads"
                             @update="handleUploadItems"
                             @onUpload="_handleAttach"
                             @onRemove="_handleAttachRemove">
                </lm-dropzone>
              </div>
            </div>

            <div class="d-upload-zone d-upload-zone_row mb_6">
              <label class="d-upload-zone__label mr_4">Видео</label>
              <div class="column">
                <lm-dropzone :label="'добавить видео'" :mediaModal="false" :max-items="10" :disabled="(hasCategory === false)" class="form__dropzone d-upload-zone__field"
                             :multiple="true" :accept="['video/*']" :defaultItems="uploads"
                             @update="handleUploadItems"
                             @onUpload="_handleAttach"
                             @onRemove="_handleAttachRemove">
                </lm-dropzone>
              </div>
            </div>

            <template v-if="videoCount >= 1">
              <div class="column">
                <template v-for="(video, index) in videoCount">
                  <div class="d-input d-input_row mb_6" :key="index">
                    <label :for="`link_to_video_${index}`" class="d-input__label d-input__label_required mr_4">Ссылка на видео</label>
                    <div class="d-row">
                      <input type="text" :id="`link_to_video_${index}`"
                             :placeholder="'Youtube, Rutube или Vimeo'"
                             v-validate="'min:3|max:255'"
                             :data-vv-as="'Ссылка на видео'"
                             :data-vv-name="`link_to_video_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">

                      <template v-if="(verrors.has('countryId'))">
                        <div class="d-select__notification d-select__notification_required">{{ verrors.first('countryId') }}</div>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </template>


            <div class="d-select d-select_row w_100 justify_between">
              <span class="d-select__label mr_4"></span>
              <div class="column">
                <template v-if="videoCount >= 1">
                  <div class="d-input_row justify_between">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++videoCount">Добавить еще</a>
                    <a href="javascript:void(0)" class="d-input__link d-input__link_disabled" @click="--videoCount">Удалить</a>
                  </div>
                </template>

                <template v-else>
                  <div class="d-input_row justify_flex-end">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++videoCount">Добавить ссылку на видео</a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>


        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Параметры тела
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="growth" class="d-input__label mr_4">Рост (см)</label>

              <div class="column">
                <div class="d-row">
                  <input type="text" id="growth"
                         :placeholder="'185'"
                         v-validate="'min:2|max:255'"
                         :data-vv-as="'Рост'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                </div>

                <template v-if="verrors.has('other')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="weight" class="d-input__label mr_4">Вес (кг)</label>

              <div class="column">
                <div class="d-row">
                  <input type="text" id="weight"
                         :placeholder="'65'"
                         v-validate="'min:1|max:255'"
                         :data-vv-as="'Вес'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                </div>

                <template v-if="verrors.has('other')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="shoe_size" class="d-input__label mr_4">Размер обуви</label>

              <div class="column">
                <div class="d-row">
                  <input type="text" id="shoe_size"
                         :placeholder="'38'"
                         v-validate="'min:2|max:2'"
                         :data-vv-as="'Размер обуви'"
                         @blur="_handleBlurUpdateField"
                         :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                </div>

                <template v-if="verrors.has('other')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="clothing_size" class="d-input__label">Размер одежды</label>
              <div class="column">
                <lm-select
                  input-id="clothing_size"
                  input-name="clothing_size_id"
                  data-vv-name="clothing_size_id"
                  data-vv-as="Размер одежды"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('clothing_size_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('clothing_size_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('clothing_size_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="body_type" class="d-input__label">Телосложение</label>
              <div class="column">
                <lm-select
                  input-id="body_type"
                  input-name="body_type_id"
                  data-vv-name="body_type_id"
                  data-vv-as="Телосложение"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('body_type_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('body_type_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('body_type_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="type_appearance" class="d-input__label">Тип внешности</label>
              <div class="column">
                <lm-select
                  input-id="type_appearance"
                  input-name="type_appearance_id"
                  data-vv-name="type_appearance_id"
                  data-vv-as="Тип внешности"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('type_appearance_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('type_appearance_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('type_appearance_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="eyes_color" class="d-input__label">Цвет глаз</label>
              <div class="column">
                <lm-select
                  input-id="eyes_color"
                  input-name="eyes_color_id"
                  data-vv-name="eyes_color_id"
                  data-vv-as="Цвет глаз"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('eyes_color_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('eyes_color_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('eyes_color_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="hair_color" class="d-input__label">Цвет волос</label>
              <div class="column">
                <lm-select
                  input-id="hair_color"
                  input-name="hair_color_id"
                  data-vv-name="hair_color_id"
                  data-vv-as="Цвет волос"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('hair_color_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('hair_color_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('hair_color_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-input d-input_row mb_6">
              <label for="hair_length" class="d-input__label">Длина волос</label>
              <div class="column">
                <lm-select
                  input-id="hair_length"
                  input-name="hair_length_id"
                  data-vv-name="hair_length_id"
                  data-vv-as="Длина волос"
                  :options="sources['categories']"
                  v-model="fields.categoryId"
                  v-validate="'required'"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  @input="_handleInputCategory"
                  @change="_handleBlurUpdateField"
                  :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('hair_length_id')) }]">
                </lm-select>

                <template v-if="(verrors.has('hair_length_id'))">
                  <div class="d-select__notification d-select__notification_required">{{ verrors.first('hair_length_id') }}</div>
                </template>
              </div>
            </div>


            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label for="dyed_hair" class="d-switch__label">
                    Окрашенные волосы
                  </label>

                  <input id="dyed_hair" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" @change="_handleBlurUpdateField">
                  <label for="dyed_hair" class="d-switch__btn"></label>
                </div>

                <div class="d-switch w_100">
                  <label for="tattoos" class="d-switch__label">
                    Татуировки
                  </label>

                  <input id="tattoos" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" @change="_handleBlurUpdateField">
                  <label for="tattoos" class="d-switch__btn"></label>
                </div>

                <div class="d-switch w_100">
                  <label for="piercings" class="d-switch__label">
                    Пирсинг
                  </label>

                  <input id="piercings" type="checkbox" class="d-switch__mark" true-value="1" false-value="0" name="interior" @change="_handleBlurUpdateField">
                  <label for="piercings" class="d-switch__btn"></label>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_0 d-input_row justify_between">
              <div class="align-center">
                Участие в проектах
                <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipParticipation">
                  <svg class="d-tooltip__icon ml_2">
                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                  </svg>
                </tooltip>
              </div>


              <template v-if="participationCount < 1">
                <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++participationCount">Добавить</a>
              </template>
            </div>

            <template v-if="participationCount >= 1">
              <template v-for="(participation, index) in participationCount">
                <div :class="['column', {'mt_12' : index >= 1, 'mt_9' : index === 0}]" :key="`participation_${index}`">
                  <div class="d-input d-input_row mb_6">
                    <label :for="`project_name_${index}`" class="d-input__label d-input__label_required mr_4">Проект</label>
                    <div class="d-row">
                      <input type="text" :id="`project_name_${index}`"
                             :placeholder="'Поле чудес'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Проект'"
                             :data-vv-name="`project_name_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-textarea d-textarea_row">
                    <label :for="`project_description_${index}`" class="d-textarea__label">Описание</label>
                    <div class="d-row" ref="descriptionRow">
                    <textarea :placeholder="'Художник-постановщик в 12-13 годах'" :id="`project_description_${index}`" autocomplete="off"
                              v-validate="'max:65000'"
                              :data-vv-as="'Описание'"
                              :data-vv-name="`project_description_${index}`"
                              name="aboutUser"
                              :style="{ minHeight: '76px' }"
                              :autoinit="false"
                              @input="_handleBlurUpdateField"
                              @focus="_handleFocusDescription"
                              @blur="_handleBlurDescription"
                              :class="[ 'd-textarea', 'w_100' ]">
                    </textarea>
                    </div>
                    <template v-if="verrors.has('project_description')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('project_description') }}</div>
                    </template>
                  </div>
                </div>
              </template>


              <div class="d-select d-select_row w_100 justify_between mt_6">
                <span class="d-select__label mr_4"></span>
                <div class="column">
                  <div class="d-input_row justify_between">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++participationCount">Добавить еще</a>
                    <a href="javascript:void(0)" class="d-input__link d-input__link_disabled" @click="--participationCount">Удалить</a>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_0 d-input_row justify_between">
              <div class="align-center">
                Высшее образование
                <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipEducation">
                  <svg class="d-tooltip__icon ml_2">
                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                  </svg>
                </tooltip>
              </div>


              <template v-if="educationCount < 1">
                <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++educationCount">Добавить</a>
              </template>
            </div>

            <template v-if="educationCount >= 1">
              <template v-for="(education, index) in educationCount">
                <div :class="['column', {'mt_12' : index >= 1, 'mt_9' : index === 0}]" :key="`education_${index}`">
                  <div class="d-input d-input_row mb_6">
                    <label :for="`university_${index}`" class="d-input__label d-input__label_required mr_4">ВУЗ</label>
                    <div class="d-row">
                      <input type="text" :id="`university_${index}`"
                             :placeholder="'МГИК'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'ВУЗ'"
                             :data-vv-name="`university_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`specialty_${index}`" class="d-input__label mr_4">Специальность</label>
                    <div class="d-row">
                      <input type="text" :id="`specialty_${index}`"
                             :placeholder="'Художник кино и телевидения'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Специальность'"
                             :data-vv-name="`specialty_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`supervisor_${index}`" class="d-input__label mr_4">Научный руководитель</label>
                    <div class="d-row">
                      <input type="text" :id="`supervisor_${index}`"
                             :placeholder="'Котт Александр Константинович'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Научный руководитель'"
                             :data-vv-name="`supervisor_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`form__select_years_study_from_${index}`" class="d-input__label d-input__label_required mr_4">Года обучения (с – по)</label>
                    <div class="column">
                      <div class="d-row w_100 align_center">
                        <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                               :placeholder="'От'" :id="`form__select_years_study_from_${index}`"  name="ageFrom" ref="ageFrom"
                               v-mask-static="'9{1,3}'"
                               :data-vv-as="'ОТ'"
                               @blur="_handleBlurUpdateField"
                               v-validate="'decimal:3|min_value:1|max_value:100'" style="box-sizing: border-box;"
                               :class="[{ 'error': (verrors.has('ageFrom')) }, 'd-input__field', 'mr_2']">
                        <div class="color_gray-4">-</div>
                        <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                               :placeholder="'До'"  :id="`form__select_years_study_to_${index}`" name="ageTo" ref="ageTo"
                               v-mask-static="'9{1,3}'" style="box-sizing: border-box;"
                               :data-vv-as="'До'"
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


                  <div class="d-textarea d-textarea_row">
                    <label :for="`project_description_${index}`" class="d-textarea__label">Описание</label>
                    <div class="d-row" ref="descriptionRow">
                    <textarea :placeholder="'Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии'" :id="`project_description_${index}`" autocomplete="off"
                              v-validate="'max:65000'"
                              :data-vv-as="'Описание'"
                              :data-vv-name="`project_description_${index}`"
                              name="aboutUser"
                              :style="{ minHeight: '76px' }"
                              :autoinit="false"
                              @input="_handleBlurUpdateField"
                              @focus="_handleFocusDescription"
                              @blur="_handleBlurDescription"
                              :class="[ 'd-textarea', 'w_100' ]">
                    </textarea>
                    </div>
                    <template v-if="verrors.has('project_description')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('project_description') }}</div>
                    </template>
                  </div>
                </div>
              </template>


              <div class="d-select d-select_row w_100 justify_between mt_6">
                <span class="d-select__label mr_4"></span>
                <div class="column">
                  <div class="d-input_row justify_between">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++educationCount">Добавить еще</a>
                    <a href="javascript:void(0)" class="d-input__link d-input__link_disabled" @click="--educationCount">Удалить</a>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>


        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_0 d-input_row justify_between">
              <div class="align-center">
                Повышение квалификации
                <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipTraining">
                  <svg class="d-tooltip__icon ml_2">
                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                  </svg>
                </tooltip>
              </div>


              <template v-if="trainingCount < 1">
                <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++trainingCount">Добавить</a>
              </template>
            </div>

            <template v-if="trainingCount >= 1">
              <template v-for="(training, index) in trainingCount">
                <div :class="['column', {'mt_12' : index >= 1, 'mt_9' : index === 0}]" :key="`training_${index}`">
                  <div class="d-input d-input_row mb_6">
                    <label :for="`organization_${index}`" class="d-input__label d-input__label_required mr_4">Организация</label>
                    <div class="d-row">
                      <input type="text" :id="`organization_${index}`"
                             :placeholder="'МосКино'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Организация'"
                             :data-vv-name="`organization_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`thing_${index}`" class="d-input__label mr_4">Предмет</label>
                    <div class="d-row">
                      <input type="text" :id="`thing_${index}`"
                             :placeholder="'Режиссура игровых сцен'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Предмет'"
                             :data-vv-name="`thing_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`teacher_${index}`" class="d-input__label mr_4">Преподаватель</label>
                    <div class="d-row">
                      <input type="text" :id="`teacher_${index}`"
                             :placeholder="'Скопина Яна Алексеевна'"
                             v-validate="'min:2|max:255'"
                             :data-vv-as="'Преподаватель'"
                             :data-vv-name="`teacher_${index}`"
                             @blur="_handleBlurUpdateField"
                             :class="[{ 'error': (verrors.has('other')) }, 'd-input__field']">
                    </div>

                    <template v-if="verrors.has('other')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('other') }}</div>
                    </template>
                  </div>


                  <div class="d-input d-input_row mb_6">
                    <label :for="`form__select_years_training_from_${index}`" class="d-input__label d-input__label_required mr_4">Года обучения (с – по)</label>
                    <div class="column">
                      <div class="d-row w_100 align_center">
                        <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                               :placeholder="'От'" :id="`form__select_years_training_from_${index}`" name="ageFrom" ref="ageFrom"
                               v-mask-static="'9{1,3}'"
                               :data-vv-as="'ОТ'"
                               @blur="_handleBlurUpdateField"
                               v-validate="'decimal:3|min_value:1|max_value:100'" style="box-sizing: border-box;"
                               :class="[{ 'error': (verrors.has('ageFrom')) }, 'd-input__field', 'mr_2']">
                        <div class="color_gray-4">-</div>
                        <input v-mask-numeric type="number" min="1" max="150" inputmode="numeric" pattern="[0-9]*"
                               :placeholder="'До'" :id="`form__select_years_training_to_${index}`" name="ageTo" ref="ageTo"
                               v-mask-static="'9{1,3}'" style="box-sizing: border-box;"
                               :data-vv-as="'До'"
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


                  <div class="d-textarea d-textarea_row mb_6">
                    <label :for="`training_description_${index}`" class="d-textarea__label">Описание</label>
                    <div class="d-row" ref="descriptionRow">
                    <textarea :placeholder="'Игровые сцены в малых группах, в больших группах, массовые сцены'" :id="`training_description_${index}`" autocomplete="off"
                              v-validate="'max:65000'"
                              :data-vv-as="'Описание'"
                              :data-vv-name="`training_description_${index}`"
                              name="aboutUser"
                              :style="{ minHeight: '76px' }"
                              :autoinit="false"
                              @input="_handleBlurUpdateField"
                              @focus="_handleFocusDescription"
                              @blur="_handleBlurDescription"
                              :class="[ 'd-textarea', 'w_100' ]">
                    </textarea>
                    </div>
                    <template v-if="verrors.has('project_description')">
                      <div class="d-input__notification d-input__notification_required">{{ verrors.first('training_description') }}</div>
                    </template>
                  </div>
                </div>
              </template>


              <div class="d-select d-select_row w_100 justify_between">
                <span class="d-select__label mr_4"></span>
                <div class="column">
                  <div class="d-input_row justify_between">
                    <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="++trainingCount">Добавить еще</a>
                    <a href="javascript:void(0)" class="d-input__link d-input__link_disabled" @click="--trainingCount">Удалить</a>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="d-row ml_auto" style="width: 234px">
            <lm-loader v-if="loadingForm"></lm-loader>
            <template v-if="loadingForm === false">
              <template v-if="(edit && isCurrentUser) || !edit">
                <button class="d-btn d-btn_primary flex_1" @click="_handleClickActionCasting(PUBLISH)">Опубликовать</button>
              </template>
            </template>
          </div>
        </div>
      </div>





      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" style="z-index: 10; margin-bottom: 50px; position: sticky; top: 104px;">
          <div class="section_declaration_creating section_declaration_creating_big pt_0">
<!--            <lm-loader v-if="loadingForm"></lm-loader>-->
            <button class="d-btn d-btn_primary w_100">Опубликовать</button>
          </div>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="column mb_6">
              <div class="heading heading_h5">Самое важное</div>
              <div class="sidebar__text">
                Заполните обязательные поля, чтобы
                опубликовать профессию
              </div>
            </div>

            <ul class="list list_required-fields">
              <li :class="['list__item', { 'list__item_active': (hasCategory === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Профессия
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Игровой возраст
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Направления
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Ссылка на видео
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Проект
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Название ВУЗа
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Года обучения
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Название организации
              </li>
              <li class="list__item list__item_active">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                Года обучения
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import { has, HEADER_HEIGHT } from '@utils'

  import formBoard from '@modules/Board/mixins/form.js'
  import formCasting from '@modules/Board/Casting/mixins/form.js'

  export default {
    mixins: [formBoard, formCasting],
    metaInfo: {
      title: 'Новая профессия'
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
        isModalVisible: false,
        videoCount: 0,
        participationCount: 0,
        educationCount: 0,
        trainingCount: 0,
        tabProfession: '',
      }
    },

    computed: {
      title () {
        return 'Новая профессия'
      },

      contentTooltipFee () {
          return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Включите фильтр, если вы готовы работать в студенческих, короткометражных или некоммерческих проектах
          </span>
        </div>`;
      },

      contentTooltipParticipation () {
          return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
              Добавьте данные, если вы уже участвовали или участвуете в данный момент в проектах
          </span>
        </div>`;
      },

      contentTooltipEducation () {
          return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
              Добавьте данные, если вы уже получили или получаете в данный момент высшее образование
          </span>
        </div>`;
      },

      contentTooltipTraining () {
          return `<div style="max-width: 226px;">
        <span style="display: block; margin: 0;">
            Добавьте данные, если вы уже прошли или проходите в данный момент дополнительное обазование, курсы
        </span>
      </div>`;
      }

    },

    methods: {
      // _tabTrim () {
      //     let lengthWord = this.tabProfession.trim().split(/\s+/);
      //     for (let i = 0; i < lengthWord.length; i++) {
      //         lengthWord[i] = `<span>${lengthWord[i]}</span>`;
      //         console.log(lengthWord.length);
      //     }
      //
      //     document.getElementById('additionTags').innerHTML = lengthWord.join(' ');
      // },


      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error');

        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
      },
    }
  }
</script>

<style lang="sass">

</style>
