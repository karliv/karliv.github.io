<template>
  <modal class="modal-center modal-abuse  modal-tree-professions" v-model="value" @hide="_handleCloseModal" :header="false" :footer="false">
    <div class="modal-abuse-content">
      <template v-if="casting">
        <div class="modal-abuse-content__wrapper">
          <div class="heading heading_h4 mb_2">Отклик</div>
          <div class="description">«{{ casting['name'] }}»</div>
        </div>

        <div class="modal-response">
          <lm-loader v-if="(professions['loading'] === true)"></lm-loader>

          <template v-if="(isEmptyProfessions === true)">
            <div class="d-row mb_6">
              <div class="d-column d-card_uplift">
                <template v-if="(countUserProfessions === 0)">
                  <div class="heading heading_h5">У вас нет ни одной профессии</div>
                  <div class="d-card__description">Чтобы откликнуться на объявление, добавьте профессию по своей специальности</div>
                </template>
                <template v-if="(countUserProfessions > 0)">
                  <template v-if="(countCastingProfessions === 1)">
                    <div class="heading heading_h5">У вас нет подходящей профессии</div>
                    <div class="d-card__description">Для отклика на кастинг нужно добавить следующую профессию: ({{ castingProfessions.join(', ') }})</div>
                  </template>

                  <template v-if="(countCastingProfessions > 1)">
                    <div class="heading heading_h5">У вас нет ни одной подходящей профессии</div>
                    <div class="d-card__description">Для отклика на кастинг нужно добавить одну из следующих профессий: {{ castingProfessions.join(', ') }}</div>
                  </template>
                </template>
              </div>
            </div>

            <div class="d-row">
              <button class="d-btn d-btn_primary w_100" @click="_handleClickCreateProfession">Добавить профессию</button>
            </div>
          </template>

          <template v-if="(hasProfessions === true)">
            <div class="d-column">
              <div class="heading heading_h5">Выберите профессию для отклика</div>

              <ul class="lm-radio-buttons">
                <li v-for="profession in professions['data']">
                  <input name="profession" type="radio"
                         :id="`profession-${profession.id}`"
                         :value="profession.id"
                         :key="`profession-${profession.id}`"
                         v-model="fields['professionName']">
                  <label :for="`profession-${profession.id}`">{{ profession.text }}</label>
                </li>
              </ul>
            </div>

            <template v-if="description">
              <div class="d-row mt_6">
                <div class="d-card_uplift d-card_uplift-alert d-column">
                  <div class="d-card__description">{{ description }}</div>
                </div>
              </div>
            </template>

            <div class="d-row d-row justify_between mt_6">
              <button class="d-btn d-btn_secondary_filled flex_1 mr_2" @click="_handleCloseModal">Отменить</button>
              <button class="d-btn d-btn_primary flex_1" @click="_handleClickResponse">Отправить</button>
            </div>
          </template>
        </div>
      </template>
    </div>
  </modal>
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
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
      _handleCloseModal () {
        this._handleClearModal().then(() => {
          this._clearUserProfessions()
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
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении профессий.' })

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
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this._handleResponse().then(() => {
          loader.hide()
          this.value = false
          this.loading = false
          this.$notify({ type: 'success', title: 'Успешно', text: 'Отклик отправлен.' })
        }).catch(() => {
          loader.hide()
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при создании отклика.' })
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
