<template>
  <div class="page page_settings page_settings_verification-specialist">
    <div class="section page__section page__section_profile-settings page__section_profile-settings_verification-specialist">
      <!-- settings header -->
      <div class="section__header section__header_profile-settings section__header_profile-settings_verification-specialist">
        <router-link :to="{ name: 'certifying.customer.studios' }" class="link section__link section__link_studios section__link_studios_profile-settings section__link_studios_profile-settings_verification-specialist">Мои студии</router-link>

        <div class="title section__title section__title_profile-settings section__title_profile-settings_verification-specialist">
          Настройки
        </div>
        <!-- pay attention for modificator of button's disable state -->
        <router-link :to="{ name: 'certifying.customer.orders.index' }" class="link section__link section__link_orders section__link_orders_profile-settings section__link_orders_profile-settings_verification-specialist">Мои заказы</router-link>
      </div>

      <div class="section__body section__body_profile-settings section__body_profile-settings_verification-specialist">
        <!-- settings form -->
        <div class="form form_profile-settings form_profile-settings_verification-specialist">
          <div class="section form__section form__section_cards form__section_cards_profile-settings form__section_cards_profile-settings_verification-specialist">

            <template v-if="duplicate">
              <div class="card form__card form__card_profile-settings form__card_profile-settings_verification-specialist">
                <div class="card__header card__header_profile-settings card__header_profile-settings_verification-specialist">
                  <div class="card__title card__title_profile-settings card__title_profile-settings_verification-specialist">Все услуги</div>
                </div>
                <div class="card__body card__body_profile-settings card__body_profile-settings_verification-specialist">
                  <div class="card__group card__group_select card__group_select_profile-settings card__group_select_profile-settings_verification-specialist">
                    <span class="select__label select__label_profile-settings">Название студии:</span>
                    <div class="lm-dropdown-wrap">
                      <v-select :options="options" :filter="true" :placeholder="'Выберите студию'" v-model="duplication.fields.studio_id" @input="_handleInputStudio"></v-select>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else-if="(duplicate === false)">
              <loader class="col-xs-12" v-if="services.loading"></loader>
              <div class="card form__card form__card_profile-settings form__card_profile-settings_verification-specialist" v-for="(service, index) in services.data" :key="service.id">
                <div class="card__header card__header_profile-settings card__header_profile-settings_verification-specialist">
                  <div class="card__title card__title_profile-settings card__title_profile-settings_verification-specialist">{{ service.name | truncate(25) }}</div>
                </div>
                <div class="card__body card__body_profile-settings card__body_profile-settings_verification-specialist">
                  <div class="card__group card__group_select card__group_select_profile-settings card__group_select_profile-settings_verification-specialist">
                    <span class="select__label select__label_profile-settings">Название студии:</span>
                    <div :class="['lm-dropdown-wrap', { 'error': verrors.has(`services.${index}.studio_id`) }]">
                      <v-select :data-vv-name="`services.${index}.studio_id`" :options="options" v-model="service.studio.data.id" :filter="true" :placeholder="'Выберите студию'" @input="_handleInputStudio"></v-select>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <div class="form__group form__group_checkbox form__group_checkbox_profile-settings form__group_checkbox_profile-settings_verification-specialist">
            <v-checkbox
              v-model="duplicate"
              id="form__checkbox_profile-settings_verification-specialist"
              class="form__checkbox_profile-settings form__checkbox_profile-settings_verification-specialist">
              Все верификации в одной студии
            </v-checkbox>
          </div>
          <loader class="col-xs-12" v-if="loading" style="margin-top: 36px;"></loader>
          <template v-if="loading === false">
            <button :class="['button', 'form__button', 'form__button_save', 'form__button_save_profile-settings', 'form__button_save_profile-settings_verification-specialist', { disabled: (duplicate && !duplication.fields.studio_id) }]"
                    @click="_handleClickSavedDuplication">Сохранить</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  const CREATE_VALUE_OPTION = 'create_option'

  export default {
    metaInfo: {
      title: 'Настройки'
    },
    computed: {
      ...mapGetters({
        studios: 'certifying/getSettingsStudiosData'
      }),
      duplicate: {
        get () {
          return this.duplication.enabled
        },
        set (value) {
          this.duplication.enabled = value
        }
      },
      options () {
        let options = []
        this.studios.forEach(item => options.push({ id: item.id, text: item.name }))
        options.push({ id: CREATE_VALUE_OPTION, text: '+ Добавить' })
        return options
      }
    },
    asyncData ({ store }) {
      return store.dispatch('certifying/fetchSettingsStudios', { include: 'images' })
    },
    data () {
      return {
        duplication: {
          enabled: false,
          fields: {
            studio_id: null
          }
        },
        services: {
          data: [],
          error: false,
          loading: false
        },
        errors: [],
        loading: false
      }
    },
    created () {
      this.fetchServices()
    },
    methods: {
      fetchServices () {
        this.services.loading = true
        this.$api.get('api/v2/certifying-specialists/settings', { include: 'studio' }).then(response => {
          let { data: { data } } = response
          this.services = {
            data,
            loading: false,
            error: false
          }

          this.duplicate = data.every((service) => service['studio']['data']['id'] === data[0]['studio']['data']['id']) && typeof data[0]['studio']['data']['id'] !== 'undefined'
          this.duplication.fields.studio_id = this.duplicate ? data[0]['studio']['data']['id'] : null
        }).catch((err) => {
          this.services = {
            data: [],
            loading: false,
            error: true
          }
          throw new Error('Error fetch my services in settings')
        })
      },
      _handleInputStudio (value) {
        if (value === CREATE_VALUE_OPTION)
          this.$router.push({'name': 'certifying.customer.studios'})
      },
      _handleInputStudioDuplication (value) {
        if (value === CREATE_VALUE_OPTION)
          this.$router.push({'name': 'certifying.customer.studios'})

        this._formatFromData().then(data => {
          this._handleSaved(data)
        }).catch(() => {})
      },
      _formatFromData () {
        return new Promise((resolve, reject) => {
          try {
            let data = []
            this.services.data.forEach((service) => {
              let { id, studio: { data : { id : studio_id } }  } = service
              studio_id = (this.duplicate) ? this.duplication.fields.studio_id : studio_id

              data.push({ id, studio_id })
            })
            resolve(data)
          } catch (e) {
            reject(e)
          }
        })
      },
      _handleSaved (services) {
        return new Promise((resolve, reject) => {
          this.loading = true

          this.$api.post('api/v2/certifying-specialists/settings', { services }).then(response => {
            this.loading = false
            const { data } = response
            resolve && resolve()
          }).catch((error) => {
            this.loading = false

            const { response: { data }, response: { status }} = error
            if (status === 422 && data.errors) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error save settings CS')

            reject && reject()
          })
        })
      },
      _handleClickSavedDuplication () {
        if (this.loading) return
        if (this.duplicate && !this.duplication.fields.studio_id) return

        this._formatFromData().then(data => {
          this._handleSaved(data).then(() => {
            this.$router.push({'name': 'certifying.customer.orders.index'})
          })
        }).catch(() => {})
      }
    }
  }
</script>

<style>

</style>
