<template>
  <div class="page page_verification page_verification_setup-studios">

    <div class="section page__section page__section_setup page__section_setup_studios">
      <div class="section__title section__title_setup section__title_setup_studios">Мои студии</div>
      <div class="section__description section__description_setup section__description_setup_studios">Адрес первой студии в списке является приоритетным.</div>

      <!-- form -->
      <div action="" class="from form_setup form_setup_studios">

        <!-- studio's data section -->
        <div class="section form__section form__section_setup form__section_setup_studios" :id="`studio-${index}`" v-for="(studio, index) in studios">
          <div class="label section__label section__label_number-of-section">
            <div class="label__decoration label__decoration_number-of-section">{{ index + 1 }}</div>
          </div>

          <button class="button section__button section__button_delete section__button_delete_section" @click="_handleClickDeleteStudio(index, studio.id)">
            <span class="button__decoration button__decoration_x button__decoration_x_delete-section"></span>
          </button>

          <div class="form__group form__group_input form__group_input_setup form__group_input_setup_studios">
            <span class="input__label input__label_setup input__label_setup_studios">Название студии:</span>
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
                   :class="['input', 'input_setup', 'input_setup_studios', { error: verrors.has(`studio-${index}.name`) }]" />
            <template v-if="verrors.has(`studio-${index}.name`)">
              <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.name`) }}</div>
            </template>

          </div>
          <div class="form__group form__group_input form__group_input_setup form__group_input_setup_studios">
            <span class="input__label input__label_setup input__label_setup_studios">Метро:</span>
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
                   :class="['input', 'input_setup', 'input_setup_studios', { error: verrors.has(`studio-${index}.metro`) }]" />
            <template v-if="verrors.has(`studio-${index}.metro`)">
              <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.metro`) }}</div>
            </template>
          </div>
          <div class="form__group form__group_input form__group_input_setup form__group_input_setup_studios">
            <span class="input__label input__label_setup input__label_setup_studios">Фактический адрес:</span>
            <template v-if="noSsr">
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
                                   :class="['input', 'input_setup', 'input_setup_studios', { error: verrors.has(`studio-${index}.address`) }]">
                </gmap-autocomplete>
              </no-ssr>
            </template>

            <template v-if="verrors.has(`studio-${index}.address`)">
              <div class="form__notification form__notification_verification-step form__notification_verification-step_required">{{ verrors.first(`studio-${index}.address`) }}</div>
            </template>
          </div>
          <div class="section form__section form__section_upload form__section_upload_img">
            <template v-if="(studio.hasOwnProperty('rebuild') === true)">
              <loader class="col-xs-12"></loader>
            </template>
            <template v-else-if="(studio.hasOwnProperty('rebuild') === false)">
              <lm-dropzone :max-items="9" :label="'Загрузить файлы'" :mediaModal="false" :class="{ error: verrors.has(`studio-${index}.images`)  }" :key="`studio-dropzone-${index}`"
                           :multiple="true" :accept="['image/jpeg', 'image/png', 'image/gif']" :defaultItems="(studio.hasOwnProperty('id')) ? studio.images.data : []"
                           @update="handleUploadItems(index, studio.id, ...arguments)"
                           @onRemove="handleRemoveOnStudio(index, studio.id, ...arguments)"
                           @onUpload="handleUploadOnStudio(index, studio.id, ...arguments)">
              </lm-dropzone>
            </template>
          </div>
        </div>

        <div class="form__group form__group_buttons form__group_buttons_setup form__group_buttons_setup_studios" :style="{ paddingTop: (this.studios.length) ? 0: '36px' } ">
          <loader class="col-xs-12" v-if="(loading === true)"></loader>

          <button :class="['button', 'form__button', 'form__button_continue', 'form__button_continue_setup form__button_continue_setup_studios', { 'disabled': (loading) }]" style="width: 100%" @click="_handleClickCreateStudio()">
            Сохранить
          </button>
        </div>
      </div>

      <button :class="['button', 'form__button', 'form__button_add', 'form__button_add_studio', { 'disabled': (loading) }]" @click="_handleClickAddNewStudio">
        <span class="button__decoration button__decoration_plus"></span>
        <span class="button__content button__content_add button__content_add_studio">Добавить студию</span>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { obj2fd } from '@utils'
  import { createHelpers } from 'vuex-map-fields'
  import DropZone from '@components/UI/Dropzone/Custom/Index.vue'

  import { STUDIO_FIELDS } from '@modules/CertifyingSpecialist/Enums/StudioFields'

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  const { mapFields } = createHelpers({
    getterType: 'certifying/getField',
    mutationType: 'certifying/updateField'
  });

  export default {
    components: { 'lm-dropzone': DropZone },
    metaInfo () {
      return {
        title: 'Редактирование студий'
      }
    },
    data () {
      return {
        noSsr: false,
        loading: false
      }
    },
    asyncData ({ store }) {
      return store.dispatch('certifying/fetchSettingsStudios', { include: 'images' })
    },
    mounted () {
      if (!this.studios.length) this.handlePushStudio()

      setTimeout(() => { this.noSsr = true }, 500)
    },
    computed: {
      ...mapFields({
        studios: 'settings.studios.data'
      })
    },
    methods: {
      handlePushStudio () {
        this.studios.push(this._.cloneDeep(STUDIO_FIELDS))
      },
      _handleClickNext () {
        this.$router.push({ name: 'certifying.customer.settings' })
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
              }).catch(() =>{ console.log('stop validate') })
            })
          } else this._handleClickNext()
        } else this._handleClickNext()
      },
      _handleClickAddNewStudio () {
        if (this.studios.length) {
          let indexOf = this.studios.length - 1
          let scope = `studio-${indexOf}`
          if (this.studios[this.studios.length - 1].hasOwnProperty('id') === false) {
            this._handleValidateScopeStudioFields(scope).then(() => {
              this._handleCreateStudio().then(() => {
                this.handlePushStudio()
                this.$nextTick(() => this.$scrollTo(`#studio-${this.studios.length - 1}`, 500))
              })
            }).catch(() => {})
          } else this.handlePushStudio()
        } else this.handlePushStudio()
      },
      _handleCreateStudio () {
        if (this.loading) return

        return new Promise((resolve, reject) => {

          this.loading = true
          let indexOf = (this.studios.length - 1)
          let fields = this.studios[indexOf]

          this.$api.post('api/v2/certifying-specialists/studios', obj2fd(fields) , { timeout: 120000 }).then(response => {
            const { data : { data } } = response

            this.loading = false

            // Need for rebuild DropZone
            let studio = this._.cloneDeep(data)
            this.$set(this.studios, (indexOf), Object.assign(studio, { 'rebuild': true }))

            this.$nextTick(() => this.$set(this.studios, (indexOf), data))

            resolve && resolve()

          }).catch(error => {
            this.loading = false

            const { response: { data }, response: { status }} = error

            if (status === 422 && data && data.errors) {
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
      }
    }
  }
</script>

<style scoped>

</style>
