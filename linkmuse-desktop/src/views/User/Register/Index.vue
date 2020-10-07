<template>
  <div class="modal-authentication page-container post-register">
    <div class="lm-header header_fixed header_white"> <!-- .lm-home-page  -->
      <div class="lm-wrapper">
        <div class="lm-header-left">
          <router-link :to="{ name: 'board.castings.index' }" class="lm-header-logo">
            <svg class="d-icon">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-logo" />
            </svg>
          </router-link>
        </div>

        <div class="lm-header-right">
          <a href="javascript:void(0)" class="lm-v3-header-link" @click="_handleClickLogout">Выйти</a>
        </div>
      </div>
    </div>

    <div class="wrapper" id="page_register" ref="page_register">
      <div class="flex-aling-center-column">
        <h2 :class="['heading', 'heading_h2', { 'mb_12': (isAlreadyRegistered === false) }]">
          <template v-if="(isAlreadyRegistered === false)">Регистрация</template>
          <template v-if="(isAlreadyRegistered === true)">Обновите информаию</template>
        </h2>

        <template v-if="(isAlreadyRegistered === true)">
          <h5 class="mb_12">Для продолжения работы с сайтом, пожалуйста, заполните недостающую информацию.</h5>
        </template>

        <div class="form-user">
          <div class="flex-aling-center-column mb_12">
            <label for="upload_avatar" class="display_flex">
              <img alt="Аватар" :src="fields.avatar" class="upload-photo" style="opacity: 1;" ref="fileInputAvatar"
                   @click="_handleClickActionSheetClick()" v-if="(avatar.loading === false)"/>
            </label>
            <lm-loader class="upload-photo" v-if="(avatar.loading === true)"></lm-loader>

            <label for="upload_avatar" class="upload-photo-link d-link_back mt_4">
              Загрузить фото
            </label>
            <input type="file" id="upload_avatar" @change="_handleChangeInputAvatar" accept="image/*" style="visibility: hidden; display: none;">
          </div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['firstname']))) }]">
            <div class="lm-relative">
              <input type="text"
                     :key="KEYS['firstname']"
                     :name="normalizeDotsToArrow(KEYS['firstname'])"
                     :id="KEYS['firstname']"
                     :data-vv-as="'Имя'"
                     :placeholder="'Имя'"
                     v-validate="'required'"
                     v-model="fields[KEYS['firstname']]"
                     :data-lm-key="KEYS['firstname']"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['firstname']))) }, 'lm-input']"
                     @blur="_handleBlurUpdateField">

              <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['firstname']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['firstname'])) }}
              </span>
            </div>
          </div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['lastname']))) }]">
            <div class="lm-relative">
              <input type="text"
                     :key="KEYS['lastname']"
                     :name="normalizeDotsToArrow(KEYS['lastname'])"
                     :id="KEYS['lastname']"
                     :data-vv-as="'Фамилия'"
                     :placeholder="'Фамилия'"
                     v-validate="'required'"
                     v-model="fields[KEYS['lastname']]"
                     :data-lm-key="KEYS['lastname']"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['lastname']))) }, 'lm-input']"
                     @blur="_handleBlurUpdateField">

              <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['lastname']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['lastname'])) }}
              </span>
            </div>
          </div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['birthday']))) }]">
            <div class="lm-relative">
              <input v-mask-date type="text"
                     :key="KEYS['birthday']"
                     :name="normalizeDotsToArrow(KEYS['birthday'])"
                     :id="KEYS['birthday']"
                     :data-vv-name="normalizeDotsToArrow(KEYS['birthday'])"
                     :data-vv-as="'Дата рождения'"
                     :placeholder="'Дата рождения'"
                     v-validate="'required|date_format:DD.MM.YYYY|before:' + $moment().format('DD.MM.YYYY')"
                     v-model="fields[KEYS['birthday']]"
                     :data-lm-key="KEYS['birthday']"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['birthday']))) }, 'lm-input']"
                     @blur="_handleBlurUpdateField">

              <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['birthday']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['birthday'])) }}
              </span>
            </div>
          </div>

          <div :class="['select-sex', 'lm-input-wrap' ]">
            <div class="lm-relative d-row">
              <div class="d-checkbox d-checkbox_button w_100 mr_4">
                <input id="form__checkbox_declaration_gender_female" type="radio"
                       value="2" name="gender" v-model="fields[KEYS['genderId']]" v-validate="'required'"
                       data-vv-as="Пол" data-vv-name="genderId"
                       class="d-checkbox__mark">
                <label class="d-checkbox__label w_100" for="form__checkbox_declaration_gender_female">Женский</label>
              </div>

              <div class="d-checkbox d-checkbox_button w_100">
                <input id="form__checkbox_declaration_gender_male" type="radio"
                       value="1" name="gender" v-model="fields[KEYS['genderId']]" v-validate="'required'"
                       data-vv-as="Пол" data-vv-name="genderId"
                       class="d-checkbox__mark">
                <label class="d-checkbox__label w_100" for="form__checkbox_declaration_gender_male">Мужской</label>
              </div>
            </div>
            <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['genderId']))">
                {{ verrors.first(normalizeDotsToArrow(KEYS['genderId'])) }}
              </span>
          </div>

          <template v-if="(hasBirthday && isChild === true)">
            <div :class="['lm-input-wrap', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['guardian']))) }]">
              <div class="lm-relative">
                <input type="text"
                       :key="KEYS['guardian']"
                       :name="normalizeDotsToArrow(KEYS['guardian'])"
                       :id="KEYS['guardian']"
                       :data-vv-as="'Имя законного представителя'"
                       :placeholder="'Имя законного представителя'"
                       v-validate="'required'"
                       v-model="fields[KEYS['guardian']]"
                       :data-lm-key="KEYS['guardian']"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['guardian']))) }, 'lm-input']"
                       @blur="_handleBlurUpdateField">

                <span class="lm-input-error mt_2" v-if="verrors.has(normalizeDotsToArrow(KEYS['guardian']))">
                  {{ verrors.first(normalizeDotsToArrow(KEYS['guardian'])) }}
                </span>
              </div>
            </div>

            <div class="lm-sign-up-content mb_4">
              <template v-if="(isAlreadyRegistered === false)">Для продолжения регистрации необходимо заполнить информацию об опекуне (законном представителе).</template>
              <template v-else-if="(isAlreadyRegistered === true)">Для продолжения обновления необходимо заполнить информацию об опекуне (законном представителе).</template>
            </div>
          </template>
        </div>

        <button class="d-btn d-btn_primary mt_8" @click="_handleOnComplete">
          {{ isAlreadyRegistered ? 'Обновить' : 'Создать аккаунт' }}
        </button>

        <a class="d-row color_main mt_6" v-if="isChild" target="_blank" href="/pages/agreements_children">
          Политика обработки персональных данных несовершеннолетнего
        </a>
      </div>
    </div>
    <cropper-avatar-modal></cropper-avatar-modal>
  </div>
</template>

<script>
  import cookies from 'js-cookie'
  import { mapGetters } from 'vuex'
  import { resizeImage } from '@utils'
  import { createHelpers } from 'vuex-map-fields'
  import CropperAvatarModal from '@components/User/Modals/CropperAvatar.vue'
  import { has, normalizeDotsToArrow, getDataAttribute, flatten, expires, AVATAR as DEFAULT_AVATAR } from '@utils'

  const KEYS = {
    genderId: 'genderId',
    guardian: 'guardian',
    lastname: 'lastName',
    birthday: 'birthday',
    firstname: 'firstName'
  }

  const { mapFields } = createHelpers({
    getterType: 'auth/getField',
    mutationType: 'auth/updateField',
  })

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
          loading: false,
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
      isChild () {
        let date = this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY', true),
          adult = this.$moment().subtract(18, 'years')

        return (!this.verrors.has(normalizeDotsToArrow(KEYS['birthday'])) && this.fields[KEYS['birthday']] && date.isValid() && date.isAfter(adult, 'day'))
      },
      isDisabledRegister () {
        if (Object.keys(this.verrors.items).length) return true
        return false
      },
      hasBirthday () {
        return (!!this.fields[KEYS['birthday']])
      }
    },
    created () {
      this.isAlreadyRegistered = (this.user && has(this.user, 'name') && Boolean(this.user.name.replace(/\s/g, '')))

      if (this.isAlreadyRegistered) {
        let gender = (this.user && has(this.user, 'gender')) ? this.user.gender : null
        let avatar = (this.user && has(this.user, 'avatar')) ? this.user.avatar : DEFAULT_AVATAR
        let name = (this.user && has(this.user, 'name')) ? this.user.name.split(' ') : null

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

          if (this.fields[KEYS['birthday']]) {
            this.fields[KEYS['birthday']] = new Date(this.$moment(this.fields[KEYS['birthday']]))
          }
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
      /**
       *
       * @param e
       * @private
       */

      async _handleClickLogout () {
        try {
          let logout = await this.$auth.logout()

          let redirection = '/' // Default route
          this.$store.dispatch('auth/destroyToken', { reload: true }).then(res => {
            if (this.$route.query.redirect && authentication) {
              redirection = this.$route.query.redirect
            }
            this.$router.replace(redirection)
          }, err => {
            if (err) {}
            this.$router.replace(redirection)
          })

        } catch (error) {
          // Error in Logout
          console.log(error)
          this.$store.dispatch('auth/destroyToken', { reload: true })
        }
      },
      _handleBlurUpdateFieldOld (e) {
        const el = e.target

        let key = getDataAttribute(el, 'key')
        let value = el.value

        this.$validator.validate(normalizeDotsToArrow(key)).then((result) => {
          if (result) {
            this.$api.post('/api/v2/auth/post-register', { 'anketa': { [key]: value } }).then((response) => {
              let { data } = response

            }, (response) => {
              const { data, status } = response

              if (status === 422) {
                const { errors } = data
                Object.keys(errors).forEach((key) => this.$validator.errors.add({
                  field: key.replace('anketa.', ''),
                  msg: errors[key].join(', ')
                }))
              } else throw new Error('Error attach avatar')
            })
          }
        })
      },
      _handleBlurUpdateField () {
        this.$localStorage.set('auth.post-register', JSON.stringify(this.fields))
      },
      _handleOnComplete () {
        if (this.loading) return

        this.loading = true
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$validator.validateAll().then((result) => {
          if (result) {
            let fields = Object.keys(this.fields)
              .filter(key => Object.values(KEYS).includes(key))
              .reduce((obj, key) => ({ ...obj, [key]: this.fields[key] }), {})

            let data = { ...flatten(fields) }

            let roistatVisit = cookies.get('roistat_visit')
            if (roistatVisit) data['roistat_visit'] = roistatVisit

            this.$api.post('/api/v2/auth/post-register', data).then((response) => {
              let { data: { url } } = response

              loader.hide()
              this.loading = false
              this.success = true
              this.error = false

              this.$localStorage.remove('auth.post-register')

              let user = this.$cookies.get('auth_user')
              let age = this.$moment().diff(this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY', true), 'years')

              let fields = {
                age,
                isRegistered: true,
                gender: { id: this.fields[KEYS['genderId']] },
                avatar: { '84x84': this.fields.avatar, '183x183': this.fields.avatar  },
                name: `${this.fields[KEYS['lastname']]} ${this.fields[KEYS['firstname']]}`
              }
              Object.assign(user, fields)
              this.$cookies.set('auth_user', user, { expires })
              Object.keys(fields).forEach(key => {
                this.$store.dispatch('auth/setUserField', { key, value: fields[key] })
              })

              this.$gtm.trackEvent({ event: 'successfulreg' })

              this._handleRedirectAfterRegister()
            }, (response) => {
              const { data, status } = response

              loader.hide()
              this.loading = false
              this.success = false
              this.error = true

              setTimeout(() => {
                this.error = false
              }, 3000)

              if (status === 422) {
                this.$setLaravelValidationErrorsFromResponse(data)
              } else throw new Error('Error complete register user')
            })
          } else {
            loader.hide()

            setTimeout(() => {
              this.error = true
              this.loading = false
            }, 1000)

            setTimeout(() => {
              this.error = false
            }, 3000)
          }
        })
      },
      _handleRedirectAfterRegister () {
        if (this.$localStorage.get('redirect.register', null, String)) {
          let location = this.$localStorage.get('redirect.register', '/', String)
          this.$localStorage.remove('redirect.register')
          this.$router.push(location)
        } else this.$router.push({ name: 'board.castings.index' })
      },
      _handleClickOpenModalUploadAvatar () {

      },
      _handleChangeInputAvatar (el) {
        let files = el.target.files || el.dataTransfer.files
        if (!files.length)
          return

        const file = el.target.files[0]

        if (!file.type.includes('image/')) {
          console.log('Please select an image file')
          return
        }

        if (typeof FileReader === 'function') {
          const reader = new FileReader()

          reader.onload = (event) => {
            const next = (src, file) => {
              this._handleUploadAvatar(file).then(({ path }) => {
                this.fields['avatar'] = src
                this.$root.$emit('open-modal-cropper-avatar', src)
                this.$notify({ type: 'success', title: 'Успешно', text: 'Аватар успешно загружен.' })
              }).catch((data, status) => {
                this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
              })
            }

            resizeImage(event.target.result, 1280, null, 'image/png').then(({ src, blob }) => {
              next(src, blob)
            }).catch(err => {
              next(event.target.result, file)
              console.error(err)
            })
          }
          reader.readAsDataURL(file)
        } else console.log('Sorry, FileReader API not supported')
      },
      _handleUploadAvatar (file) {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let data = new FormData()
          data.append('image', file, 'avatar.png')

          // TODO: нужен ответ со всеми прессетами
          this.$api.post('api/v2/settings/avatar/original', data).then((response) => {
            const { data: { path } } = response

            loader.hide()
            resolve({ path })
            this.$refs.fileInputAvatar.value = ''

          }, (error) => {
            loader.hide()

            const { response: { data, status } } = error

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

<style lang="scss">

</style>
