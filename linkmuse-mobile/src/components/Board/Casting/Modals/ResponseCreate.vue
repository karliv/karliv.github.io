<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions']" v-model="value" position="center" :modal="true" :lockScroll="true" @input="_handleInputPopup">
    <div class="modal__content_tree-professions form_tree-professions">
      <template v-if="casting">
        <div class="modal__content_header modal__content_header_absolute row justify_center">
          <div class="row align_center justify_center">
            <div class="m-text_bold color_gray-3" style="position: absolute; left: 0; cursor: pointer" @click="_handleCloseModal">Отмена</div>
            <div class="heading_h5 mb_0">Отклик</div>
            <template v-if="(hasProfessions === true)">
              <div class="m-text_bold color_main" style="position: absolute; right: 0; cursor: pointer" @click="_handleClickResponse">Отправить</div>
            </template>
          </div>
        </div>
        <div class="modal__content-response_body">
          <div class="response-block">
            <div class="heading_h5">Кастинг</div>
            <div class="m-text_normal-2 color_gray-2">«{{ casting['name'] }}»</div>
          </div>
          <div class="response-block">
            <lm-m-loader v-if="(professions['loading'] === true)"></lm-m-loader>

            <template v-if="(isEmptyProfessions === true)">
              <div class="section_contacts_action mt_4">
                <template v-if="(countUserProfessions === 0)">
                  <div class="heading_h5">У вас нет ни одной профессии</div>
                  <div class="m-text_normal-2 color_gray-2">Чтобы откликаться на объявления, добавьте профессию по своей специальности</div>
                </template>
                <template v-if="(countUserProfessions > 0)">
                  <template v-if="(countCastingProfessions === 1)">
                    <div class="heading_h5">У вас нет подходящей профессии</div>
                    <div class="m-text_normal-2 color_gray-2">Для отклика на кастинг нужно добавить следующую профессию: ({{ castingProfessions.join(', ') }})</div>
                  </template>

                  <template v-if="(countCastingProfessions > 1)">
                    <div class="heading_h5">У вас нет ни одной подходящей профессии</div>
                    <div class="m-text_normal-2 color_gray-2">Для отклика на кастинг нужно добавить одну из следующих профессий: {{ castingProfessions.join(', ') }}</div>
                  </template>
                </template>
              </div>

              <div class="btn btn_primary w_100 mt_4" @click="_handleClickCreateProfession">Добавить профессию</div>
            </template>

            <template v-if="(hasProfessions === true)">
              <div class="heading_h5 mb_3">Профессия для отклика</div>

              <ul class="lm-radio-buttons">
                <li v-for="profession in professions['data']">
                  <input name="profession" type="radio"
                         :id="`profession-${profession.id}`"
                         :value="profession.id"
                         v-validate="'required'"
                         :key="`profession-${profession.id}`"
                         v-model="fields['professionName']">
                  <label :for="`profession-${profession.id}`">{{ profession.text }}</label>
                </li>
              </ul>

              <span class="lm-text-error" v-if="verrors.has('profession')">{{ verrors.first('profession')}}</span>

              <template v-if="description">
                <div class="section_contacts_action section_contacts-alert_action mt_3">
                  <div class="m-text_bold-2">{{ description }}</div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </template>
    </div>
  </mt-popup>
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import PopupMix from '@components/Mixins/Popup'
  import { Popup, Toast, Indicator } from 'mint-ui'
  import { createResponse } from '@modules/Rating/Enums/events'

  export default {
    mixins: [PopupMix],
    components: { 'mt-popup': Popup },
    props: {
      casting: {
        type: Object,
        required: true
      }
    },
    metaInfo: {
      title: 'Отклик на кастинг'
    },
    data () {
      return {
        value: false,
        loading: false,
        fields: { professionName: null },
        professions: {
          data: [],
          error: false,
          loading: false
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      id () {
        return this.casting.id
      },
      castingCity () {
        return has(this.casting, 'city.id') ? this.casting.city : null
      },
      countUserProfessions () {
        return this.user.counters['professions'] || 0
      },
      castingProfessions () {
        return (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((p => p.text)) : []
      },
      countCastingProfessions () {
        return this.castingProfessions.length
      },
      isEmptyProfessions () {
        return ( this.professions['loading'] === false && this.professions['data'].length === 0 )
      },
      hasProfessions () {
        return ( this.professions['loading'] === false && this.professions['data'].length > 0 )
      },
      description () {
        return (this.castingCity && this.user && has(this.user, 'city.id') && this.user.city.id !== this.castingCity.id)
          ? `Кастинг проходит в городе ${this.castingCity.text}` : null
      }
    },
    created () {
      this._fetchSuitableProfessions()
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleCloseModal()
        }
      },
      _handleCloseModal () {
        this._handleClearModal().then(() => {
          setTimeout(() => {
            this._clearUserProfessions()
          }, 500)
        }).catch(() => {})
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
            this.value = false
            this.loading = false
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _fetchSuitableProfessions () {
        this.professions.loading = true
        const { id: castingId } = this.casting

        this.$api.get(`api/v2/boards/castings/${castingId}/responses/suitable`).then((response) => {
          let { data: { data: { professions: data } } } = response

          Object.assign(this.professions, {
            data,
            error: false,
            loading: false
          })

          if (data && data.length) {
            this.fields.professionName = data[0]['id']
          }
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.professions, { error: true, loading: false })
          Toast({ message: 'Ошибка.', iconClass: 'mintui mintui-field-error' })

          throw new Error('Error fetch user professions')
        })
      },
      _clearUserProfessions () {
        return new Promise((resolve, reject) => {
          try {
            this.professions =  {
              data: [],
              error: false,
              loading: false
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
            throw new Error(e)
          }
        })
      },
      _handleClickResponse () {
        this.loading = true
        Indicator.open()

        this._handleResponse().then(() => {
          Indicator.close()
          this.value = false
          this.loading = false
          Toast({ message: 'Отклик отправлен.', iconClass: 'mintui mintui-success' })
          this.$nsWebViewInterface.emit('rating', createResponse)
        }).catch(() => {
          Indicator.close()
          this.loading = false
          Toast({ message: 'Произошла ошибка при создании отклика.', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleResponse () {
        return new Promise((resolve, reject) => {
          const { id: castingId } = this.casting
          const { professionName } = this.fields

          this.$api.post(`api/v2/boards/castings/${castingId}/responses`, { professionName }).then((response) => {
            const { data: { data } } = response
            this.$root.$emit('response-created', castingId, data)
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            reject && reject()

            throw new Error('Error create response')
          })
          })
      },
      _handleClickCreateProfession () {
        let { id, slug } = this.casting
        const { href } = this.$router.resolve({ name: 'board.castings.show', params: { id, slug }, query: { 'response': true } })

        if (this.castingProfessions.length === 1) {
          let profession = this.casting.professions[0]
          this.$router.push({ name: 'users.professions.create.profession', params: { profession: profession.id } })

          this.$localStorage.set('redirect.create.profession', href)

          this.value = false
        } else {
          this.$localStorage.set('redirect.create.profession', href)
          this.$modalRouter.push({ name: 'users.professions.create' })

          this.value = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
