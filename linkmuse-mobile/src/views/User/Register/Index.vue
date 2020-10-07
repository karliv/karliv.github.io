<template>
  <div class="wrapper lm-m-register-page-wrapper final-step-register">
    <div class="lm-m-register-wrap-form">
      <h2 class="heading heading_h2 mb_9">
        <template v-if="(isAlreadyRegistered === false)">Регистрация</template>
        <template v-if="(isAlreadyRegistered === true)">Обновите информацию</template>
      </h2>

      <template v-if="(isAlreadyRegistered === true)">
        <div class="fw_600 mb_6">Для продолжения работы с сайтом, пожалуйста, заполните недостающую информацию.</div>
      </template>

      <div class="lm-m-upload-avatar-wrap">
        <template v-if="fields.avatar">
          <img class="lm-m-upload-avatar-image mb_3" :src="fields.avatar" alt="Avatar" @click="_handleClickActionSheetClick()">

          <div class="m-text_bold color_main" @click="_handleClickActionSheetClick()">Загрузить фото</div>
        </template>

        <input type="file" accept="image/*" id="upload-avatar" @change="_handleChangeInputAvatar" ref="fileInputAvatar" style="visibility: hidden; display: none;">
        <template v-if="(fields.avatar === null)">
          <label class="lm-m-upload-avatar mb_3" for="upload-avatar">
            <i class="lm-icon-square-upload"></i>
          </label>

          <label for="upload-avatar" class="m-block m-text_bold color_main">Загрузить фото</label>
        </template>
      </div>

      <div class="lm-input-wrap">
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
        <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['firstname']))">
          {{ verrors.first(normalizeDotsToArrow(KEYS['firstname'])) }}
        </span>
      </div>
      <div class="lm-input-wrap">
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
        <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['lastname']))">
          {{verrors.first(normalizeDotsToArrow(KEYS['lastname']))}}
        </span>
      </div>

      <div class="lm-input-wrap">
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

<!--        <no-ssr>-->
<!--          <datepicker v-model="fields[KEYS['birthday']]" format="dd.MM.yyyy"-->
<!--                      type="text" id="birthday" :name="normalizeDotsToArrow(KEYS['birthday'])"-->
<!--                      placeholder="Дата рождения" @selected="_handleBlurUpdateField"-->
<!--                      inputmode="numeric" pattern="[0-9]*" :data-lm-key="KEYS['birthday']"-->
<!--                      v-validate="'required|date_format:DD.MM.YYYY|dateAfter:' + $moment().subtract('150', 'year').format('DD.MM.YYYY') + '|dateBefore:' + $moment().format('DD.MM.YYYY')"-->

<!--                      :wrapper-class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['birthday']))) }]">-->
<!--          </datepicker>-->
<!--        </no-ssr>-->


        <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['birthday']))">
          {{ verrors.first(normalizeDotsToArrow(KEYS['birthday'])) }}
        </span>
      </div>

      <template v-if="(hasBirthday && isChild === true)">
        <div class="lm-input-wrap">
          <input type="text"
                 :key="KEYS['guardian']"
                 :name="normalizeDotsToArrow(KEYS['guardian'])"
                 :id="KEYS['guardian']"
                 placeholder="Имя родителя"
                 v-validate="'required'"
                 v-model="fields[KEYS['guardian']]"
                 :class="[ { 'error': (verrors.has(normalizeDotsToArrow(KEYS['guardian']))) }, 'lm-input']"
                 :data-lm-key="KEYS['guardian']"
                 @blur="_handleBlurUpdateField">
          <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['guardian']))">
            {{ verrors.first(normalizeDotsToArrow(KEYS['guardian']))}}
          </span>
        </div>
      </template>

      <div class="mb_9">
        <div class="form__row form__row_declaration">
          <div class="form__column form__column_declaration">
            <input id="female1" type="radio"
                   :name="normalizeDotsToArrow(KEYS['gender'])" value="2" v-model="fields[KEYS['gender']]"
                   :data-lm-key="KEYS['gender']" class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
            <label for="female1" class="checkbox__label_declaration checkbox__label_declaration_gender">Женский</label>
          </div>

          <div class="form__column form__column_declaration">
            <input id="male1" type="radio"
                   :name="normalizeDotsToArrow(KEYS['gender'])" value="1" v-model="fields[KEYS['gender']]"
                   :data-lm-key="KEYS['gender']" class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
            <label for="male1" class="checkbox__label_declaration checkbox__label_declaration_gender">Мужской</label>
          </div>
        </div>

        <span class="lm-text-error" v-if="verrors.has(normalizeDotsToArrow(KEYS['gender']))">
            {{ verrors.first(normalizeDotsToArrow(KEYS['gender']))}}
          </span>
      </div>

<!--      <div class="lm-input-wrap moderate_rules " v-if="(isChild)">-->
<!--        <a href="/pages/agreements_children" class="moderate_rules__link">Политика обработки персональных данных несовершеннолетнего</a>-->
<!--      </div>-->

      <div class="lm-input-wrap moderate_rules mb_9" v-if="(isChild)">
        {{ isAlreadyRegistered ? 'Обновляя информацию' : 'Регистрируясь' }}, вы также соглашаетесь с
        <a target="_blank" href="/pages/agreements_children" class="m-text_bold color_main">Политикой обработки персональных данных несовершеннолетнего</a>
      </div>

      <div class="fix"></div>
      <div class="lm-m-post-register-fixed-bottom">
        <button @click="_handleOnComplete" class="lm-primary-button middle">
          {{ isAlreadyRegistered ? 'Обновить' : 'Создать аккаунт' }}
        </button>
      </div>
    </div>

    <cropper-avatar-modal></cropper-avatar-modal>
    <actionsheet :actions="avatar.sheet.actions" v-model="avatar.sheet.value" cancel-text=""></actionsheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import { Indicator, Toast } from 'mint-ui'
import CropperAvatarModal from '@components/User/Modals/CropperAvatar.vue'
import { has, flatten, normalizeDotsToArrow, expires, resizeImage, AVATAR as DEFAULT_AVATAR } from '@utils'

const { mapFields } = createHelpers({
  getterType: 'auth/getField',
  mutationType: 'auth/updateField',
});

const KEYS = {
  gender: 'genderId',
  guardian: 'guardian',
  lastname: 'lastName',
  birthday: 'birthday',
  firstname: 'firstName'
}

export default {
  components: { CropperAvatarModal },
  metaInfo: {
    title: 'Регистрация',
  },
  async asyncData ({ store, route }) {
    await store.dispatch('auth/getUserByAPI')
  },
  data () {
    return {
      has, normalizeDotsToArrow, KEYS,
      loading: false,
      error: false,
      success: false,
      avatar: {
        sheet: {
          value: false,
          actions: [
            {
              name: 'Изменить фото',
              method: this._handleClickChangeAvatar
            },
            {
              name: 'Удалить фото',
              method: this._handleClickRemoveAvatar,
              color: '#fc2e5f'
            }
          ]
        },
        modal: false,
        src: null,
        photo_id: null,
        crop: null
      },
      isAlreadyRegistered: false
    }
  },
  computed: {
    ...mapFields(['register.data.fields']),
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    hasBirthday () {
      return (!!this.fields[KEYS['birthday']])
    },
    isChild () {
      let date = this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY', true),
        adult = this.$moment().subtract(18, 'years')

      return (!this.verrors.has(normalizeDotsToArrow(KEYS['birthday'])) && this.fields[KEYS['birthday']] && date.isValid() && date.isAfter(adult, 'day'))
    }
  },
  created () {
    this.isAlreadyRegistered = Boolean(this.user.name.replace(/\s/g, ''))

    if (this.isAlreadyRegistered) {
      let gender = this.user.gender
      let avatar = this.user.avatar
      let name = this.user.name.split(' ')

      this.fields[KEYS['firstname']] = (name && name.length) ? name[0] : null
      this.fields[KEYS['lastname']] = (name && name.length && name.length > 1) ? name[1] : null

      this.fields[KEYS['genderId']] = (gender && has(gender, 'id')) ? gender['id'] : null
      this.fields.avatar = (avatar && has(avatar, '183x183')) ? avatar['183x183'] : DEFAULT_AVATAR
    }
  },
  mounted () {
    if (this.isAlreadyRegistered === false) {
      let fields = this.$localStorage.get('auth.post-register', null, Object)

      if (fields && typeof fields === 'object') {
        Object.assign(this.fields, fields)
      }
    } else this._handleOnComplete()

    this.$root.$on('updated-avatar', ({ '183x183': image }) => {
      this.fields['avatar'] = image
    })
  },
  beforeDestroy () {
    this.$root.$off('updated-avatar')
  },
  methods: {
    _handleBlurUpdateField ()  {
      this.$localStorage.set('auth.post-register', JSON.stringify(this.fields))
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
     * Handler save all form
     * @param event
     * @param fsm
     * @private
     */
    _handleOnComplete () {
      if (this.loading) return

      this._handleValidateFields().then(() => {
        Indicator.open()
        this.loading = true;

        let fields = Object.keys(this.fields)
          .filter(key => Object.values(KEYS).includes(key))
          .reduce((obj, key) => ({ ...obj, [key]: this.fields[key] }), {})

        let data = { ...flatten(fields) }

        this.$api.post('/api/v2/auth/post-register', data).then((response) => {
          let { data: { url } } = response

          Indicator.close()
          this.loading = false
          this.success = true
          this.error = false

          this.$localStorage.remove('auth.post-register')

          let user = this.$cookies.get('auth_user')
          let age = this.$moment().diff(this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY', true), 'years')

          let fields = {
            age,
            isRegistered: true,
            avatar: this.fields.avatar,
            gender: { id: this.fields[KEYS['genderId']] },
            name: `${this.fields[KEYS['lastname']]} ${this.fields[KEYS['firstname']]}`
          }
          Object.assign(user, fields)
          this.$cookies.set('auth_user', user, { expires })
          Object.keys(fields).forEach(key => {
            this.$store.dispatch('auth/setUserField', { key, value: fields[key] })
          })

          this.$gtm.trackEvent({ event: 'successfulreg'})

          this._handleRedirectAfterRegister()
        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          this.loading = false
          this.success = false
          this.error = true

          if (status === 422) {
            this.$setLaravelValidationErrorsFromResponse(data)
          } else throw new Error('Error complete register user')
        })
      }).catch(() => {})
    },
    _handleRedirectAfterRegister () {
      if (this.$localStorage.get('redirect.register', null, String)) {
        let location = this.$localStorage.get('redirect.register', '/', String)
        this.$localStorage.remove('redirect.register')
        this.$router.push(location)
      } else if (this.$localStorage.get('redirect.freekino', null, String)) {
        this.$localStorage.remove('redirect.freekino')
        window.location.href = `${process.env.FREEKINO_URL}/?ak=${this.$cookies.get('id_token')}`
      } else this.$router.push({ name: 'board.castings.index' })
    },
    _handleChangeInputAvatar (el) {
      let files = el.target.files || el.dataTransfer.files;
      if (!files.length)
        return;

      const file = el.target.files[0];

      if (!file.type.includes('image/')) {
        console.log('Please select an image file')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          const next = (src, file) => {
            this._handleUploadAvatar(file).then(({ path, width, height }) => {
              this.fields['avatar'] = src
              this.$root.$emit('open-modal-cropper-avatar', src)
            }).catch((data, status) => {
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            })
          }

          resizeImage(event.target.result, 1280, null, 'image/png').then(({ src, blob }) => {
            next(src, blob)
          }).catch(err => {
            next(event.target.result, file)
            console.error(err);
          })
        };
        reader.readAsDataURL(file);
      } else console.log('Sorry, FileReader API not supported');
    },
    _handleUploadAvatar (file) {
      return new Promise((resolve, reject) => {
        Indicator.open()

        let data = new FormData();
        data.append('image', file, 'avatar.png')

        this.$api.post('api/v2/settings/avatar/original', data).then((response) => {
          const { data: { path, width, height } } = response

          Indicator.close()
          resolve({ path, width, height })
          this.$refs.fileInputAvatar.value = ''
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
        }, (error) => {
          Indicator.close()

          const { response: { data, status }} = error
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          if (status === 422 && data.errors) {
            const { errors } = data
          } else throw new Error('Error upload avatar')

          reject(data, status)
        })
      })
    },
    _handleClickActionSheetClick () {
      this.avatar.sheet.value = true
    },
    _handleClickChangeAvatar () {
      this._handleClickRemoveAvatar().then(() => {
        this.$refs.fileInputAvatar.click()
      })
    },
    _handleClickRemoveAvatar () {
      return new Promise((resolve, reject) => {
        try {
          this.fields.avatar = null
          this.avatar.sheet.value = false
          resolve()
        } catch (e) {
          reject()
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .moderate_rules
    padding: 20px
    border-radius: 8px
    background-color: #ebf3fc
</style>
