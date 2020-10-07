<template>
  <div>
    <div class="lm-m-register-steps">
      <div :style="{ 'width': progress }"></div>
    </div>

    <template v-if="state.is.services">
      <div class="lm-m-cs-register">
        <div class="lm-m-cs-register-wrap" style="width: 272px">
          <template v-if="(services.length === 0)">
            <div class="title">К сожалению, услуги не доступны в Вашем регионе.</div>
          </template>
          <template v-else-if="(services.length)">
            <div class="title">Выбор услуг</div>
            <div class="desc">Вам необходимо выбрать те услуги, <br> которые вы готовы предоставить</div>

            <span class="lm-m-service-wrap-input-error" id="service-input-error" v-show="verrors.has('services')">
            {{ verrors.first('services') }}
          </span>

            <div class="lm-vs-landing-talent">
              <div class="lm-vs-landing-talent-line" style="padding: 0;">
                <div class="lm-vs-landing-talent-service-wrap">
                  <div class="lm-vs-landing-talent-service-item" v-for="service in services" :key="service.id" style="padding: 0 0 24px;">
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
                      <label :class="[{ 'lm-outline-button': (fields.services.includes(service.id) === false), 'lm-primary-button': (fields.services.includes(service.id) === true) }, 'middle', 'service-selected-btn']"
                             :for="`service_${service.id}`"> {{ (fields.services.includes(service.id) === true) ? 'Выбрано' : 'Выбрать' }} </label>
                      <span class="price">{{ service.price | currency('₽') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="lm-action-buttons">
          <router-link :to="{ name: 'certifying.customer.index' }" class="lm-link-button">назад</router-link>
          <button :class="['lm-primary-button', 'middle', { disabled: (fields.services.length === 0)  }]" @click="_handleClickNextRequireOnRole">Продолжить</button>
        </div>
      </div>
    </template>
    <template v-if="state.is.rules">
      <div class="lm-m-cs-register">
        <lm-rules class="lm-m-cs-register-wrap" v-model="acceptRules"></lm-rules>
        <div class="lm-action-buttons">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickBackRequireOnRole">назад</a>
          <button :class="['lm-primary-button', 'middle', { disabled: !acceptRules  }]" @click="_handleClickNextRequireOnRole">Продолжить</button>
        </div>
      </div>
    </template>
    <template v-if="state.is.user">
      <div class="lm-m-cs-register">
        <div class="lm-m-cs-register-wrap">
          <div class="title">Заполните данные о себе</div>
          <div class="desc">Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам</div>
          <div class="lm-radio-buttons">
            <span>Вы:</span>
            <ul>
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
          </div>
          <div class="separator"></div>
          <template v-if="isIndividualEntrepreneur">
            <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['fullname'])) }]">
              <label :for="KEYS['fullname']">ФИО</label>
              <input type="text" placeholder="Как вас зовут?"
                     :key="KEYS['fullname']"
                     :id="KEYS['fullname']"
                     :name="normalizeDotsToArrow(KEYS['fullname'])"
                     v-validate="'required'"
                     v-model="fields[KEYS['fullname']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['fullname'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['fullname']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['fullname'])) }}
              </span>
            </div>
          </template>

          <template v-if="isEntity">
            <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['company_name'])) }]">
              <label :for="KEYS['company_name']">Название организации</label>
              <input type="text" placeholder="Название"
                     :key="KEYS['company_name']"
                     :id="KEYS['company_name']"
                     :name="normalizeDotsToArrow(KEYS['company_name'])"
                     v-validate="'required'"
                     v-model="fields[KEYS['company_name']]"
                     @blur="_handleBlurUpdateField"
                     :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['company_name'])) }">
              <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['company_name']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['company_name'])) }}
              </span>
            </div>
          </template>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['phone'])) }]">
            <label :for="KEYS['phone']">Телефон</label>
            <input v-mask-phone type="text" placeholder="+7 (000) 000-00-00"
                   :key="KEYS['phone']"
                   :id="KEYS['phone']"
                   :name="normalizeDotsToArrow(KEYS['phone'])"
                   v-validate="'required|phone'"
                   v-model="fields[KEYS['phone']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['phone'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['phone']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['phone'])) }}
            </span>
          </div>
        </div>
        <div class="lm-action-buttons">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickBackRequireOnRole">назад</a>
          <button class="lm-primary-button middle" @click="_handleClickNextRequireOnRole">Продолжить</button>
        </div>
      </div>
    </template>
    <template v-if="state.is.bank_account">
      <div class="lm-m-cs-register">
        <div class="lm-m-cs-register-wrap">
          <div class="title">Ввод данных о счете</div>
          <div class="desc">Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам</div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['itn'])) }]">
            <label :for="KEYS['itn']">Ваш ИНН:</label>
            <input type="text" placeholder="0000 0000 0000"
                   :key="KEYS['itn']"
                   :id="KEYS['itn']"
                   :name="normalizeDotsToArrow(KEYS['itn'])"
                   v-mask-static="'9{12}'"
                   v-validate="'required|digits:12'"
                   v-model="fields[KEYS['itn']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['itn'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['itn']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['itn'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['iec'])) }]">
            <label :for="KEYS['iec']">КПП:</label>
            <input type="text" placeholder="0000000000 / 000000000"
                   :key="KEYS['iec']"
                   :id="KEYS['iec']"
                   :name="normalizeDotsToArrow(KEYS['iec'])"
                   v-mask-static="'9{23}'"
                   v-validate="'digits:23'"
                   v-model="fields[KEYS['iec']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['iec'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['iec']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['iec'])) }}
            </span>
          </div>

          <div class="separator"></div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['bank_recipient'])) }]">
            <label :for="KEYS['bank_recipient']">Банк-получатель:</label>
            <input type="text" placeholder="Банк-получатель"
                   :key="KEYS['bank_recipient']"
                   :id="KEYS['bank_recipient']"
                   :name="normalizeDotsToArrow(KEYS['bank_recipient'])"
                   v-validate="'required|min:3|max:200'"
                   v-model="fields[KEYS['bank_recipient']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['bank_recipient'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['bank_recipient']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['bank_recipient'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['correspondent_account'])) }]">
            <label :for="KEYS['correspondent_account']">Кор. счет:</label>
            <input type="text" placeholder="00000000000000000000"
                   :key="KEYS['correspondent_account']"
                   :id="KEYS['correspondent_account']"
                   :name="normalizeDotsToArrow(KEYS['correspondent_account'])"
                   v-mask-static="'9{20}'"
                   v-validate="'required|digits:20'"
                   v-model="fields[KEYS['correspondent_account']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['correspondent_account'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['correspondent_account']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['correspondent_account'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['bic'])) }]">
            <label :for="KEYS['bic']">БИК:</label>
            <input type="text" placeholder="000000000"
                   :key="KEYS['bic']"
                   :id="KEYS['bic']"
                   :name="normalizeDotsToArrow(KEYS['bic'])"
                   v-mask-static="'9{9}'"
                   v-validate="'required|digits:9'"
                   v-model="fields[KEYS['bic']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['bic'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['bic']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['bic'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['checking_account'])) }]">
            <label :for="KEYS['checking_account']">Расчетный счет:</label>
            <input type="text" placeholder="00000000000000000000"
                   :key="KEYS['checking_account']"
                   :id="KEYS['checking_account']"
                   :name="normalizeDotsToArrow(KEYS['checking_account'])"
                   v-mask-static="'9{20}'"
                   v-validate="'required|digits:20'"
                   v-model="fields[KEYS['checking_account']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['checking_account'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['checking_account']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['checking_account'])) }}
            </span>
          </div>

          <div class="separator"></div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['legal_address'])) }]">
            <label :for="KEYS['legal_address']">Юридический адрес:</label>
            <input type="text" placeholder="Юридический адрес"
                   :key="KEYS['legal_address']"
                   :id="KEYS['legal_address']"
                   :name="normalizeDotsToArrow(KEYS['legal_address'])"
                   v-validate="'required|min:5|max:200'"
                   v-model="fields[KEYS['legal_address']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['legal_address'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['legal_address']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['legal_address'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['actual_address'])) }]">
            <label :for="KEYS['actual_address']">Фактический адрес (прописка):</label>
            <input type="text" placeholder="Фактический адрес (прописка)"
                   :key="KEYS['actual_address']"
                   :id="KEYS['actual_address']"
                   :name="normalizeDotsToArrow(KEYS['actual_address'])"
                   v-validate="'required|min:5|max:200'"
                   v-model="fields[KEYS['actual_address']]"
                   @blur="_handleBlurUpdateField"
                   :class="{ 'lm-input': true, error: verrors.has(normalizeDotsToArrow(KEYS['actual_address'])) }">
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['actual_address']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['actual_address'])) }}
            </span>
          </div>

          <div :class="['lm-input-wrap', { error: verrors.has(normalizeDotsToArrow(KEYS['vat'])) }]">
            <lm-select
              :input-id="KEYS['vat']"
              :input-name="KEYS['vat']"
              label="НДС (Работаем только с ПСН и УСН):"
              @blur="_handleBlurUpdateField"
              :options="vat" v-model="fields[KEYS['vat']]"></lm-select>
            <span class="lm-input-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['vat']))">
              {{ verrors.first(normalizeDotsToArrow(KEYS['vat'])) }}
            </span>
          </div>
        </div>
        <div class="lm-action-buttons">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickBackRequireOnRole">назад</a>
          <button class="lm-primary-button middle" @click="_handleClickNextRequireOnRole">Продолжить</button>
        </div>
      </div>
    </template>
    <template v-if="state.is.photos">
      <div class="lm-m-cs-register">
        <div class="lm-m-cs-register-wrap">
          <div class="title">Загрузка ваших работ</div>
          <div class="desc">Пожалуйста, прикрепите свои работы для оценки качества съёмки. Фотографии будут отображаться в вашем профиле, после одобрения заявки</div>
          <lm-dropzone :max-items="30" :label="'Загрузить файлы'" :mediaModal="true" :multiple="true" :accept="['image/*','video/*']" @update="handleUploadItems" @onUpload="handleUpload" @onRemove="handleRemove"></lm-dropzone>
        </div>
        <div class="lm-action-buttons">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickBackRequireOnRole">назад</a>
          <button :class="['lm-primary-button','middle', { 'disabled': !canModerate } ]" @click="_handleClickCreateRequest">Отправить</button>
        </div>
      </div>
    </template>
    <template v-if="state.is.finish">
      <div class="lm-m-cs-paid">
        <div class="lm-m-cs-paid-wrap">
          <div class="title">Заявка принята!</div>
          <div class="desc" style="margin-bottom: 40px">Ваша заявка будет рассмотрена в ближайшее время</div>
          <div class="desc">С нами уже {{ this.specialists.count | pluralize(['спецталист', 'специалиста', 'специалистов']) }}!</div>
          <router-link :to="{ name: 'certifying.catalog.index' }" class="lm-outline-button middle" v-if="false">посмотреть всех</router-link>
          <router-link :to="{ name: 'user.show', params: { username: (user && user.hasOwnProperty('username') ? (user.username) : 'id1') } }" class="lm-outline-button middle">В личный кабинет</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import { createHelpers } from 'vuex-map-fields'
  import { unflatten, normalizeDotsToArrow } from '@utils'
  import DropZone from '@components/UI/Dropzone/Index.vue'
  import { StateMachine, StateHelper } from 'state-machine'
  import { DEFAULT_VAT } from '@modules/CertifyingSpecialist'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'
  import { VIDEO, PHOTO } from '@components/UI/Dropzone/Enums/Types'
  import Rules from '@modules/CertifyingSpecialist/extends/Rules.vue'
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
    asyncData ({ store }) {
      return store.dispatch('certifying/fetchAllServices')
    },
    components: { 'lm-dropzone': DropZone, 'lm-rules': Rules },
    data () {
      return {
        normalizeDotsToArrow, KEYS,
        INDIVIDUAL_ENTREPRENEUR, ENTITY,
        DEFAULT_VAT,
        uploadItems: [],
        state: null,
        error: false,
        loading: false,
        success: false,
        specialists: {
          count: 0,
          data: []
        },
        acceptRules: false
      }
    },
    computed: {
      ...mapFields(['register.data.fields']),
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        services: 'certifying/getAllServicesData'
      }),
      isIndividualEntrepreneur () {
        return (this.fields[KEYS['type']] === INDIVIDUAL_ENTREPRENEUR)
      },
      isEntity () {
        return (this.fields[KEYS['type']] === ENTITY)
      },
      certifying_specialist_status () {
        if (!this.user) return
        return this.user['certifying_specialist_status']
      },
      progress () {
        return ((this.state.index / (this.state.all.states.length - 1)) * 100).toFixed() + '%'
      },
      canModerate () {
        return true
        // return this.uploadItems.length;
      },
      vat () {
        let options = []

        Object.keys(CertifyingSpecialist.VAT).forEach(id => {
          options.push({ id: id === 'null' ? null : id, text: this.getVATTranslate(id) })
        })

        return options
      },
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next : services > rules > user > bank_account > photos > finish',
          'back: services < rules < user < bank_account < photos'
        ],
        handlers: {
          'services@next': this._handleSelectedServices,
          'rules@next': this._handleDrawRules,
          'user@next': this._handleDrawUserInfo,
          'bank_account@next': this._handleDrawBankAccount,
          'photos@next': this._handleUploadedPhotos,
          'finish': this._handleFinishState
        }
      })

      this.state = StateHelper.object(this.fsm).data

      this.checkCertifyingSpecialist()
    },
    mounted () {
      let fields = this.$localStorage.get('register.certifying', null, Object)
      if (fields && typeof fields === 'object') Object.assign(this.fields, fields)
      this.acceptRules = this.$localStorage.get('register.certifying.acceptRules', false)
    },
    watch: {
      acceptRules (value) {
        this.$localStorage.set('register.certifying.acceptRules', this.acceptRules)
      }
    },
    methods: {
      _handleBlurUpdateField () {
        this.$localStorage.set('register.certifying', JSON.stringify(this.fields))
      },
      getVATTranslate (item) {
        return CertifyingSpecialist.getVATTranslate(item)
      },
      handleUploadItems (items) {
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
        this.$api.delete('api/v1/users/photos/' + item.id).then(response => {
          remove(item.uid)
        }).catch(() => {
          remove(item.uid, false)
          throw new Error('Error delete photo')
        })
      },
      handleRemoveVideo (item, remove) {
        this.$api.delete('api/v1/users/videos/' + item.id).then(response => {
          remove(item.uid)
        }).catch(() => {
          remove(item.uid, false)
          throw new Error('Error delete video')
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

            this.$api.get('api/v2/certifying-specialists/helpers/specialists/random', { limit: 2 }).then(response => {
              const { data: { count, specialists: { data } } } = response

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
      _handleSelectedServices (event, fsm) {
        fsm.pause()

        if (this.fields.services.length === 0) { fsm.cancel(); return false; }

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
      _handleDrawRules (event, fsm) {
        fsm.pause()

        if (this.acceptRules)
          fsm.resume()
        else
          fsm.cancel()
      },
      _handleDrawBankAccount (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => fsm.cancel())
      },
      _handleUploadedPhotos (event, fsm) {
        fsm.resume()
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
      /**
       * Next transition
       * @private
       */
      _handleClickNextRequireOnRole () {
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

        if (!this.canModerate) return

        Indicator.open()
        this.loading = true

        this.$api.post('api/v2/certifying-specialists', unflatten(this.fields)).then((response) => {
          const { data: { count, specialists: { data } } } = response

          Indicator.close()
          this.loading = false
          this.success = true
          this.error = false

          this.specialists.data = data
          this.specialists.count = count

          this.$store.dispatch('auth/setUserField', { key: 'certifying_specialist_status', value: 'not_activated' })
          this._handleClickNextRequireOnRole()

        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()
          this.loading = false
          this.success = false
          this.error = true

          if (status === 422) {
            let state = null
            const { errors } = data

            Object.keys(errors).forEach((key) => {
              if (state === null) state = key.split('.')[0]
              this.$validator.errors.add({ field: normalizeDotsToArrow(key), msg: errors[key].join(', ') })
            })

            if (state && this.fsm.has(state)) this.fsm.go(state, true)
          } else throw new Error('Error register CS')
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  @media (min-width: 767px)
    .lm-m-cs-register-wrap
      > .title, > .desc
        text-align: center
    .lm-vs-landing-talent
      .lm-vs-landing-talent-line
        padding-top: 0 !important
  .service-selected-btn
    padding: 0
    width: 172px !important
    font-weight: normal
  .lm-m-service-wrap-input-error
    display: block
    color: #fc2e5f
    margin-bottom: 24px
  .lm-m-rectangle-checked-service
    width: 16px
    height: 16px
    line-height: 12px
    text-align: center
    border-radius: 100%
    background: #deecfc
    display: inline-block
  .lm-m-cs-register /deep/ .lm-dropzone--item--wrap
      width: 112px
      height: 72px
</style>
