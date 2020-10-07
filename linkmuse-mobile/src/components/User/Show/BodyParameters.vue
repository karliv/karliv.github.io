<template>
  <div :class="['lm-m-profile-user-info--line', { 'editing': (editing === true) }]">
    <div :class="{ 'lm-m-profile-user-info--line-edit-wrap': (editing === true) }">
      <div class="title">
        <div class="left">
          <span>Внешность</span>
        </div>
        <div class="right" v-if="(isCurrentUser && editing === false)">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode"></i>
        </div>
      </div>
      <template v-if="(editing === false)">
        <div class="lm-m-profile-user-params">
          <ul>
            <li v-if="has(anketa, KEYS['height']) && _.get(anketa, KEYS['height'])">
              <div class="left">
                <span>Рост</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['height']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['weight']) && _.get(anketa, KEYS['weight'])">
              <div class="left">
                <span>Вес</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['weight']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['bodyType']) && _.get(anketa, KEYS['bodyType'])">
              <div class="left">
                <span>Телосложение</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['bodyType']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['ethnicity']) && _.get(anketa, KEYS['ethnicity'])">
              <div class="left">
                <span>Внешность</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['ethnicity']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['eyeColor']) && _.get(anketa, KEYS['eyeColor'])">
              <div class="left">
                <span>Цвет глаз</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['eyeColor']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['hairColor']) && _.get(anketa, KEYS['hairColor'])">
              <div class="left">
                <span>Цвет волос</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['hairColor']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['hairLength']) && _.get(anketa, KEYS['hairLength'])">
              <div class="left">
                <span>Длина волос</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['hairLength']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['volumeOfBreast']) && _.get(anketa, KEYS['volumeOfBreast'])">
              <div class="left">
                <span>Объем груди</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['volumeOfBreast']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['waist']) && _.get(anketa, KEYS['waist'])">
              <div class="left">
                <span>Объем талии</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['waist']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['hips']) && _.get(anketa, KEYS['hips'])">
              <div class="left">
                <span>Объем бедер</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['hips']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['clothingSize']) && _.get(anketa, KEYS['clothingSize'])">
              <div class="left">
                <span>Размер одежды</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['clothingSize']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['shoeSize']) && _.get(anketa, KEYS['shoeSize'])">
              <div class="left">
                <span>Размер обуви</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['shoeSize']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['bodyPiercing']) && _.get(anketa, KEYS['bodyPiercing'])">
              <div class="left">
                <span>Пирсинг</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['bodyPiercing']) }}</span>
              </div>
            </li>
            <li v-if="has(anketa, KEYS['tattoo']) && _.get(anketa, KEYS['tattoo'])">
              <div class="left">
                <span>Татуировки</span>
              </div>
              <div class="right">
                <span>{{ _.get(anketa, KEYS['tattoo']) }}</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else-if="(editing === true)">
        <div class="lm-column-2">
          <div class="lm-input-wrap">
            <label for="height">Рост</label>
            <input id="height" type="number" pattern="[0-9]*" min="30" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2,3}'"
                   v-validate="'decimal:3|min_value:30|max_value:275'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['height'])"
                   :key="KEYS['height']"
                   :data-lm-key="KEYS['height']"
                   v-model="fields[KEYS['height']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['height']))) }]">
          </div>
          <div class="lm-input-wrap">
            <label for="weight">Вес</label>
            <input id="weight" pattern="[0-9]*" min="30" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2,3}'"
                   v-validate="'decimal:3|min_value:30|max_value:275'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['weight'])"
                   :key="KEYS['weight']"
                   :data-lm-key="KEYS['weight']"
                   v-model="fields[KEYS['weight']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['weight']))) }]">
          </div>
        </div>
        <div class="lm-column-2">
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['bodyType']))) }]"
                     v-model="fields[KEYS['bodyType']]"
                     :data-vv-name="KEYS['bodyType']"
                     :input-id="KEYS['bodyType']"
                     :input-name="KEYS['bodyType']"
                     placeholder="Выберите"
                     label="Телосложение"
                     :options="sources[KEYS['bodyType']]">
          </lm-select>
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['ethnicity']))) }]"
                     v-model="fields[KEYS['ethnicity']]"
                     :data-vv-name="KEYS['ethnicity']"
                     :input-id="KEYS['ethnicity']"
                     :input-name="KEYS['ethnicity']"
                     placeholder="Выберите"
                     label="Внешность"
                     :options="sources[KEYS['ethnicity']]">
          </lm-select>
        </div>
        <div class="lm-column-2">
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['eyeColor']))) }]"
                     v-model="fields[KEYS['eyeColor']]"
                     :data-vv-name="KEYS['eyeColor']"
                     :input-id="KEYS['eyeColor']"
                     :input-name="KEYS['eyeColor']"
                     placeholder="Выберите"
                     label="Цвет глаз"
                     :options="sources[KEYS['eyeColor']]">
          </lm-select>
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairColor']))) }]"
                     v-model="fields[KEYS['hairColor']]"
                     :data-vv-name="KEYS['hairColor']"
                     :input-id="KEYS['hairColor']"
                     :input-name="KEYS['hairColor']"
                     placeholder="Выберите"
                     label="Цвет волос"
                     :options="sources[KEYS['hairColor']]">
          </lm-select>
        </div>
        <div class="lm-column-2">
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairLength']))) }]"
                     v-model="fields[KEYS['hairLength']]"
                     :data-vv-name="KEYS['hairLength']"
                     :input-id="KEYS['hairLength']"
                     :input-name="KEYS['hairLength']"
                     placeholder="Выберите"
                     label="Длина волос"
                     :options="sources[KEYS['hairLength']]">
          </lm-select>
          <div class="lm-input-wrap">
            <label for="volumeOfBreast">Объем груди</label>
            <input id="volumeOfBreast" pattern="[0-9]*" min="25" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2,3}'"
                   v-validate="'decimal:3|min_value:25|max_value:150'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['volumeOfBreast'])"
                   :key="KEYS['volumeOfBreast']"
                   :data-lm-key="KEYS['volumeOfBreast']"
                   v-model="fields[KEYS['volumeOfBreast']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['volumeOfBreast']))) }]">
          </div>
        </div>
        <div class="lm-column-2">
          <div class="lm-input-wrap">
            <label for="waist">Объем талии</label>
            <input id="waist" pattern="[0-9]*" min="25" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2,3}'"
                   v-validate="'decimal:3|min_value:25|max_value:150'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['waist'])"
                   :key="KEYS['waist']"
                   :data-lm-key="KEYS['waist']"
                   v-model="fields[KEYS['waist']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['waist']))) }]">
          </div>
          <div class="lm-input-wrap">
            <label for="hips">Объем бедер</label>
            <input id="hips" pattern="[0-9]*" min="25" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2,3}'"
                   v-validate="'decimal:3|min_value:25|max_value:150'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['hips'])"
                   :key="KEYS['hips']"
                   :data-lm-key="KEYS['hips']"
                   v-model="fields[KEYS['hips']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['hips']))) }]">
          </div>
        </div>
        <div class="lm-column-2">
          <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['clothingSize']))) }]"
                     v-model="fields[KEYS['clothingSize']]"
                     :data-vv-name="KEYS['clothingSize']"
                     :input-id="KEYS['clothingSize']"
                     :input-name="KEYS['clothingSize']"
                     placeholder="Выберите"
                     label="Размер одежды"
                     :options="sources[KEYS['clothingSize']]">
          </lm-select>
          <div class="lm-input-wrap">
            <label for="shoeSize">Размер обуви</label>
            <input id="shoeSize" pattern="[0-9]*" min="10" inputmode="numeric"
                   placeholder="Введите"
                   v-mask-static="'9{2}'"
                   v-validate="'decimal:3|min_value:10|max_value:50'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['shoeSize'])"
                   :key="KEYS['shoeSize']"
                   :data-lm-key="KEYS['shoeSize']"
                   v-model="fields[KEYS['shoeSize']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['shoeSize']))) }]">
          </div>
        </div>
        <div class="lm-column-center">
          <div class="lm-input-wrap">
            <label class="fix-label">Пирсинг</label>
            <ul class="lm-radio-buttons">
              <li>
                <input id="bodyPiercing_no" type="radio"
                       :name="normalizeDotsToArrow(KEYS['bodyPiercing'])"
                       :key="KEYS['bodyPiercing']"
                       :data-lm-key="KEYS['bodyPiercing']"
                       @blur="_handleBlurUpdateField"
                       value="no"
                       v-model="fields[KEYS['bodyPiercing']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['bodyPiercing']))) }]">
                <label for="bodyPiercing_no">Нет</label>
              </li>
              <li>
                <input type="radio" id="bodyPiercing_yes"
                       :name="normalizeDotsToArrow(KEYS['bodyPiercing'])"
                       :key="KEYS['bodyPiercing']"
                       :data-lm-key="KEYS['bodyPiercing']"
                       @blur="_handleBlurUpdateField"
                       value="yes"
                       v-model="fields[KEYS['bodyPiercing']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['bodyPiercing']))) }]">
                <label for="bodyPiercing_yes">Есть</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="lm-column-center">
          <div class="lm-input-wrap">
            <label class="fix-label">Татуировки</label>
            <ul class="lm-radio-buttons">
              <li>
                <input id="tattoo_no" type="radio"
                       :name="normalizeDotsToArrow(KEYS['tattoo'])"
                       :key="KEYS['tattoo']"
                       :data-lm-key="KEYS['tattoo']"
                       @blur="_handleBlurUpdateField"
                       value="no"
                       v-model="fields[KEYS['tattoo']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['tattoo']))) }]">
                <label for="tattoo_no">Нет</label>
              </li>
              <li>
                <input type="radio" id="tattoo_yes"
                       :name="normalizeDotsToArrow(KEYS['tattoo'])"
                       :key="KEYS['tattoo']"
                       :data-lm-key="KEYS['tattoo']"
                       @blur="_handleBlurUpdateField"
                       value="yes"
                       v-model="fields[KEYS['tattoo']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['tattoo']))) }]">
                <label for="tattoo_yes">Есть</label>
              </li>
            </ul>
          </div>
        </div>
        <div class="lm-m-profile-action-edit">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickCloseEditMode">отмена</a>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickSaveFields">сохранить</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, normalizeDotsToArrow } from '@utils'
  import profileFormMixin from '@modules/User/mixins/form'

  const KEYS = {
    height: 'body-parameters.height',
    weight: 'body-parameters.weight',
    ethnicity: 'body-parameters.ethnicity',
    bodyType: 'body-parameters.body-type',
    eyeColor: 'body-parameters.eye-color',
    hairLength: 'body-parameters.hair-length',
    hairColor: 'body-parameters.hair-color',
    volumeOfBreast: 'body-parameters.volume-of-breast',
    waist: 'body-parameters.waist',
    hips: 'body-parameters.hips',
    clothingSize: 'body-parameters.clothing-size',
    shoeSize: 'body-parameters.shoe-size',
    bodyPiercing: 'body-parameters.body-piercing',
    tattoo: 'body-parameters.tattoo',
  }

  export default {
    mixins: [profileFormMixin],
    props: {
      isCurrentUser: {
        type: Boolean,
        default: false
      },
      isCustomer: {
        type: Boolean,
        default: false
      },
      isExecutor: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        has, KEYS, normalizeDotsToArrow,
        fields: {},
        editing: false
      }
    },
    computed: {
      ...mapGetters({
        sourcesValues: 'user/getSources'
      }),
      sources () {
        return this.$deepModel(this.sourcesValues)
      },
      apiUrl () {
        return this.isExecutor ? 'api/v1/profiles/artists' : 'api/v1/profiles/customers'
      }
    },
    methods: {
      _handleClickOpenEditMode () {
        this._handlePushFields().then(() => this.editing = true).catch((e) => { throw new Error(e) })
      },
      _handleClickCloseEditMode () {
        this.editing = false
      },
      _handleClickSaveFields () {
        this._handleValidateFields().then(() => {
          this._handleSaveFields().then(() => {
            this._handleClickCloseEditMode()
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }
</script>
