<template>
  <div :class="['lm-m-profile-user-info--line', { 'editing': (editing === true) }]">
    <div :class="{ 'lm-m-profile-user-info--line-edit-wrap': (editing === true) }">
      <div class="title">
        <div class="left">
          <span v-if="isExecutor">Обо мне</span>
          <span v-if="isCustomer">Описание</span>
        </div>
        <div class="right" v-if="(isCurrentUser && editing === false)">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode"></i>
        </div>
      </div>
      <template v-if="(editing === false)">
        <div class="about">
          <div :class="['lm-sex', sex]" v-if="has(anketa, 'sex') && sex"></div>
          <div class="lm-tags" v-if="has(anketa, 'age') && anketa.age">
            <div class="lm-tag small">{{ anketa.age | pluralize(['год', 'года', 'лет']) }}</div>
          </div>
          <span class="city" v-if="has(anketa, 'city.data.name') && has(anketa, 'country.data.name')">
            {{ anketa.city.data.name | truncate(20) }}, {{ anketa.country.data.name | truncate(20) }}
          </span>
        </div>
        <div class="about-text" v-if="has(anketa, KEYS['description']) && _.get(anketa, KEYS['description'])">
          {{ _.get(anketa, KEYS['description']) }}
        </div>
      </template>
      <template v-else-if="(editing === true)">
        <template v-if="(isCompany === false)">
          <div class="lm-input-wrap">
            <label :for="KEYS['firstname']">Имя</label>
            <input type="text"
                   :key="KEYS['firstname']"
                   :name="normalizeDotsToArrow(KEYS['firstname'])"
                   :id="KEYS['firstname']"
                   placeholder="Имя"
                   v-validate="'required'"
                   v-model="fields[KEYS['firstname']]"
                   :class="[ { 'error': (verrors.has(normalizeDotsToArrow(KEYS['firstname']))) }, 'lm-input']"
                   :data-lm-key="KEYS['firstname']"
                   @blur="_handleBlurUpdateField">
          </div>

          <div class="lm-input-wrap">
            <label :for="KEYS['lastname']">Фамилия</label>
            <input type="text"
                   :key="KEYS['lastname']"
                   :name="normalizeDotsToArrow(KEYS['lastname'])"
                   :id="KEYS['lastname']"
                   placeholder="Фамилия"
                   v-validate="'required'"
                   v-model="fields[KEYS['lastname']]"
                   :class="[ { 'error': (verrors.has(normalizeDotsToArrow(KEYS['lastname']))) }, 'lm-input']"
                   :data-lm-key="KEYS['lastname']"
                   @blur="_handleBlurUpdateField">
          </div>

          <template v-if="(isCustomer === false)">
          <div class="lm-input-wrap">
            <label for="birthday">Дата рождения</label>
            <input v-mask-date type="text"
                   :key="KEYS['birthday']"
                   :name="normalizeDotsToArrow(KEYS['birthday'])"
                   id="birthday"
                   placeholder="Дата рождения"
                   v-validate="'required|date_format:DD.MM.YYYY|dateAfter:' + $moment().subtract('150', 'year').format('DD.MM.YYYY') + '|dateBefore:' + $moment().format('DD.MM.YYYY')"
                   inputmode="numeric" pattern="[0-9]*"
                   v-model="fields[KEYS['birthday']]"
                   :class="[ { 'error': (verrors.has(normalizeDotsToArrow(KEYS['birthday']))) }, 'lm-input']"
                   :data-lm-key="KEYS['birthday']"
                   @blur="_handleBlurUpdateField">
          </div>
          </template>
        </template>
        <template v-if="(isCompany === true)">
          <div class="lm-input-wrap">
            <label :for="KEYS['company_name']">Название компании</label>
            <input type="text"
                   :key="KEYS['company_name']"
                   :name="normalizeDotsToArrow(KEYS['company_name'])"
                   :id="KEYS['company_name']"
                   placeholder="Название компании"
                   v-validate="'required'"
                   v-model="fields[KEYS['company_name']]"
                   :class="[ { 'error': (verrors.has(normalizeDotsToArrow(KEYS['company_name']))) }, 'lm-input']"
                   :data-lm-key="KEYS['company_name']"
                   @blur="_handleBlurUpdateField">
          </div>
        </template>

        <div class="lm-input-wrap">
          <label for="description">Описание</label>
          <textarea id="description" type="text"
                    placeholder="Опишите себя"
                    v-validate="'max:512'"
                    @blur="_handleBlurUpdateField"
                    :name="normalizeDotsToArrow(KEYS['description'])"
                    :key="KEYS['description']"
                    :data-lm-key="KEYS['description']"
                    v-model="fields[KEYS['description']]"
                    :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['description']))) }]">
          </textarea>
        </div>
        <div class="lm-m-profile-user-info--line-separator"></div>

        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['country']))) }]" style="margin-top: 16px;"
                   v-model="fields[KEYS['country']]"
                   :data-vv-name="KEYS['country']"
                   :input-id="KEYS['country']"
                   :input-name="KEYS['country']"
                   placeholder="Страна"
                   label="Страна"
                   :placeholderDisabled="true"
                   @change="_handleChangeCountrySelect"
                   :options="sources['countries']">
        </lm-select>

        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['city']))) }]"
                   v-model="fields[KEYS['city']]"
                   :data-vv-name="KEYS['city']"
                   :input-id="KEYS['city']"
                   :input-name="KEYS['city']"
                   :placeholder="(!sources.cities || sources['cities'].length === 0) ? 'Сначала выберите страну' : 'Город'"
                   label="Город"
                   :placeholderDisabled="true"
                   :disabled="(!sources.cities || sources['cities'].length === 0)"
                   @change="_handleChangeCitySelect"
                   :options="sources['cities']">
        </lm-select>
        <div class="lm-m-profile-action-edit">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickCloseEditMode">отмена</a>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickSaveFields">сохранить</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import User from '@modules/User'
  import { Indicator, Toast } from 'mint-ui'
  import { has, normalizeDotsToArrow } from '@utils'
  import profileFormMixin from '@modules/User/mixins/form'

  const KEYS = {
    lastname: 'lastname',
    firstname: 'firstname',
    company_name: 'company_name',
    birthday: 'aboutme.birthday',
    description: 'aboutme.description',
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
      },
      isCompany: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        has, KEYS, normalizeDotsToArrow,
        fields: {},
        editing: false,
        sources: {
          countries: [],
          cities: []
        }
      }
    },
    computed: {
      apiUrl () {
        return this.isExecutor ? 'api/v1/profiles/artists' : 'api/v1/profiles/customers'
      },
      sex () {
        if (!this.anketa.sex) return false
        return User.getAttributeSex(this.anketa.sex)
      }
    },
    methods: {
      _handleClickOpenEditMode () {
        this._handlePushFields().then(() => {

          Object.assign(this.KEYS, { city: 'city', country: 'country', firstname: 'firstname', lastname: 'lastname', company_name: 'company_name' })

          let city = _.get(this.anketa, 'city.data.id', null)
          let country = _.get(this.anketa, 'country.data.id', null)

          let firstname = _.get(this.anketa, 'firstname', null)
          let lastname = _.get(this.anketa, 'lastname', null)
          let company_name = _.get(this.anketa, 'fullname', null)

          this.$set(this.fields, 'city', city ? String(city) : null)
          this.$set(this.fields, 'country', country ? String(country) : null)

          this.$set(this.fields, 'firstname', firstname || null)
          this.$set(this.fields, 'lastname', lastname || null)
          this.$set(this.fields, 'company_name', company_name || null)

          if (this.sources.countries.length === 0) {
            this._handleLoadingCountries().then(() => {
              if (Number(this.fields[KEYS['country']])) {
                this._handleChangeCountrySelect(this.fields[KEYS['country']], false).then(() => {
                  this.editing = true
                }).catch(() => {})
              } else this.editing = true
            }).catch(() => {})
          } else this.editing = true

        }).catch((e) => { throw new Error(e) })
      },
      _handleClickCloseEditMode () {
        this.editing = false
      },
      _handleClickSaveFields () {
        const _ = this._

        this._handleValidateFields().then(() => {
          this._handleSaveFields().then(() => {
            if (this.fields[KEYS['city']] && this.fields[KEYS['country']]) {
              let city = _.find(this.sources.cities, (o) => o.id === Number(this.fields[KEYS['city']]))
              let country = _.find(this.sources.countries, (o) => o.id === Number(this.fields[KEYS['country']]))

              if (city && country) {
                this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.city.data`, value: { id: city.id, name: city.text } })
                this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.country.data`, value: { id: country.id, name: country.text } })
                
                this.$store.dispatch('auth/getUserByAPI')
              }
            }

            if (this.fields[KEYS['birthday']]) {
              let age = this.$moment().diff(this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY'), 'years')
              this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.age`, value: age })
            }

            let fullname = `${this.fields[KEYS['firstname']]} ${this.fields[KEYS['lastname']]}`

            this.$store.dispatch('user/setFieldShowUserData', { key: `fullname`, value: fullname })
            this.$store.dispatch('user/setFieldShowUserData', { key: `firstname`, value: this.fields[KEYS['firstname']] })
            this.$store.dispatch('user/setFieldShowUserData', { key: `lastname`, value: this.fields[KEYS['lastname']] })

            if (this.fields[KEYS['company_name']] && this.isCompany) {
              this.$store.dispatch('user/setFieldShowUserData', { key: `fullname`, value: this.fields[KEYS['company_name']] })
            }

            this._handleClickCloseEditMode()
          }).catch(() => {})
        }).catch(() => {})
      },
      _handleLoadingCountries () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.get('api/v1/geo/countries').then((response) => {
            const {data} = response
            this.sources.countries = data
            Indicator.close()
            resolve()
          }, (error) => {
            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })

            reject && reject()

            const {response: {data}, response: {status}} = error
            throw new Error('Error loading profile countries')
          })
        })
      },
      _handleChangeCountrySelect (country_id, clear = true) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.get('api/v1/geo/cities', {country_id}).then((response) => {
            if (clear) this.fields[KEYS['city']] = null

            const {data} = response
            this.sources.cities = data
            Indicator.close()
            resolve()
          }, (error) => {
            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })

            reject && reject()

            const {response: {data}, response: {status}} = error
            throw new Error('Error loading profile cities')
          })
        })
      },
      _handleChangeCitySelect () {
        this.$validator.errors.clear()
      }
    }
  }
</script>
