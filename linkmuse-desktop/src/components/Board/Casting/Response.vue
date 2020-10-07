<template>
  <div :class="['section_casting', 'section_casting_big', { loading }]">
    <div class="d-card d-card-np d-column mt_16">
      <div class="d-row mb_6">
        <div class="label__title">
          Исполнитель
        </div>

        <template v-if="profession">
          <div class="d-row">
            <router-link :to="{ name: 'users.professions.show', params: { id: professionId } }" target="_blank" class="d-card__img section">
              <img :src="author.avatar" :alt="author.name" class="LazyImage__image">
            </router-link>

            <div class="d-card__description d-column justify_between">
              <div class="d-row justify_between">
                <div class="d-card__type_casting color_main">
                  <template v-if="profession">
                    {{ professionName }}
                  </template>
                </div>

                <div class="d-card__date_casting-creation">
                  <template v-if="isCurrentUser">
                    <div :class="[{ 'color_main' : read }]">{{ read ? 'Просмотрен' : 'Не просмотрен' }}</div>
                  </template>
                  <template v-else>
                    <div :class="[{' color_main' : !read }]">{{ read ? 'Просмотрен' : 'Новый отклик' }}</div>
                  </template>

                  <div>{{ isToday(response.createdAt) ? 'Сегодня' : response.createdAt | moment('D.MM.YYYY') }}</div>
                </div>
              </div>

              <router-link :to="{ name: 'users.professions.show', params: { id: professionId } }" target="_blank">
                <div class="d-text_bold align-center mb_2">
                  {{ author.name | truncate(50) }}
                  <template v-if="isCertifiedUser">
                    <svg class="d-icon d-icon_size_sm d-icon_verified ml_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification" />
                    </svg>
                  </template>
                </div>

                <div class="d-card__list d-card__list_casting-parameters mb_2">
                  <template v-if="has(author, 'city.text')">
                    <div>{{ author.city.text }}</div>
                  </template>
                  <template v-if="author.age">
                    <div>{{ $pluralize(author.age, ['года', 'лет', 'лет']) }}</div>
                  </template>
                </div>
                <div class="d-text_semi-bold">
                  <template v-if="profession">
                    <template v-if="(hasRate === true)">
                      От {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
                    </template>
                    <template v-else-if="(hasRate === false)">
                      По договоренности
                    </template>
                  </template>
                </div>
              </router-link>
            </div>
          </div>
        </template>
      </div>

      <template v-if="profession">
        <div class="d-row">
          <div class="label__title">
            {{ (hasBodyParameters && hasPortfolio) ? 'Портфолио': '&nbsp;' }}
          </div>

          <div class="d-column">
            <template v-if="hasBodyParameters">
              <div class="section section_specialist-parameters section_specialist-parameters_small mb_3">
                <template v-if="has(bodyParameters, 'height')">
                  <div class="card card_specialist-parameters card_specialist-parameters_small">
                    <div class="card__header">
                      <span>Рост</span>
                    </div>
                    <div class="card__body d-text_semi-bold">
                      <span class="d-text_bold">{{ bodyParameters['height'] }}</span>см
                    </div>
                  </div>
                </template>

                <template v-if="has(bodyParameters, 'weight')">
                  <div class="card card_specialist-parameters card_specialist-parameters_small">
                    <div class="card__header">
                      <span>вес</span>
                    </div>
                    <div class="card__body d-text_semi-bold">
                      <span class="d-text_bold">{{ bodyParameters['weight'] }}</span>кг
                    </div>
                  </div>
                </template>

                <template v-if="has(bodyParameters, 'volume-of-breast')">
                  <div class="card card_specialist-parameters card_specialist-parameters_small">
                    <div class="card__header">
                      <span>грудь</span>
                    </div>
                    <div class="card__body d-text_semi-bold">
                      <span class="d-text_bold">{{ bodyParameters['volume-of-breast'] }}</span>см
                    </div>
                  </div>
                </template>

                <template v-if="has(bodyParameters, 'waist')">
                  <div class="card card_specialist-parameters card_specialist-parameters_small">
                    <div class="card__header">
                      <span>талия</span>
                    </div>
                    <div class="card__body d-text_semi-bold">
                      <span class="d-text_bold">{{ bodyParameters['waist'] }}</span>см
                    </div>
                  </div>
                </template>

                <template v-if="has(bodyParameters, 'hips')">
                  <div class="card card_specialist-parameters card_specialist-parameters_small">
                    <div class="card__header">
                      <span>бедра</span>
                    </div>
                    <div class="card__body d-text_semi-bold">
                      <span class="d-text_bold">{{ bodyParameters['hips'] }}</span>см
                    </div>
                  </div>
                </template>
              </div>
            </template>

            <template v-if="hasPortfolio">
              <div class="gallery gallery_casting mb_6">
                <div class="gallery__content gallery__content_casting">
                  <template v-for="item in portfolio.slice(0, 4)">
                    <template v-if="(item.type === PHOTO)">
                      <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" :album="`portfolio-user-${author.id}`" class="photo">
                        <img :src="item['paths']['250x250']" :alt="author.name" class="d-img">
                      </media>
                    </template>

                    <template v-if="(item.type === VIDEO)">
                      <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" :album="`portfolio-user-${author.id}`" class="d-video">
                        <img :src="item['cover']['original']" :alt="author.name" class="d-img">
                        <svg :class="['d-icon', ' d-icon_size_16', 'd-video__icon']">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-play"></use>
                        </svg>
                      </media>
                    </template>
                  </template>

                  <collapse v-model="collapse['portfolio']">
                    <div class="display_flex f-wrap_wrap mt_3">
                      <template v-for="item in portfolio.slice(4)">
                        <template v-if="(item.type === PHOTO)">
                          <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" :album="`portfolio-user-${author.id}`" class="photo">
                            <img :src="item['paths']['250x250']" :alt="author.name" class="d-img">
                          </media>
                        </template>

                        <template v-if="(item.type === VIDEO)">
                          <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" :album="`portfolio-user-${author.id}`" class="d-video">
                            <img :src="item['cover']['original']" :alt="author.name" class="d-img">
                            <svg :class="['d-icon', ' d-icon_size_16', 'd-video__icon']">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-play"></use>
                            </svg>
                          </media>
                        </template>
                      </template>
                    </div>
                  </collapse>

                  <template v-if="(portfolio.length > 4)">
                    <div class="d-btn d-btn_secondary_filled w_100 mt_3" @click="_handleClickToggleCollapse('portfolio')">
                      <svg :class="['d-icon', 'd-icon_size_16', {  rotate_180: (collapse['portfolio']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                      </svg>
                      <div class="ml_2">{{ collapse['portfolio'] ? 'Скрыть' : `Показать все (${portfolio.length})` }}</div>
                    </div>
                  </template>
                </div>
              </div>
            </template>

            <div class="d-row justify_between">
              <div class="d-row w_100">
                <template v-if="(isCurrentUser === false)">
                  <template v-if="( phone )">
                    <contact-phone-button class="mr_4" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
                  </template>
                  <template v-if="( !phone )">
                    <button class="d-btn d-btn_primary mr_4" @click="_handleClickMessage">Написать</button>
                  </template>

                  <template v-if="hideAction === false">
                    <template v-if="(state === RECEIVED)">
                      <button class="d-btn d-btn_outline" :disabled="loading" @click="_handleClickChangeStateResponse(SELECTED)">В шорт-лист</button>
                    </template>
                    <template v-if="(state === SELECTED)">
                      <button class="d-btn d-btn_outline" :disabled="loading" @click="_handleClickChangeStateResponse(RECEIVED)">Убрать</button>
                    </template>
                  </template>
                </template>

                <template v-else-if="(isCurrentUser === true)">
                  <router-link :to="{ name: 'users.professions.edit', params: { id: professionId } }" class="d-btn d-btn_outline">
                    редактировать
                  </router-link>
                </template>
              </div>

              <div class="d-row w_auto">
                <template v-if="(isCurrentUser === false)">
                  <button :class="['d-btn', 'd-btn_round', 'd-btn_secondary_filled', 'd-btn_like', 'mr_4', { 'd-btn_like_active': inFolder }]" @click="_handleClickAddToFolder">
                    <svg class="d-icon d-icon_size_16">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                    </svg>
                  </button>

                  <more-actions :hover="true" position="top" class="d-btn_secondary_filled">
                    <template v-if="( phone )">
                      <a href="javascript:void(0)" class="list__item"><span @click="_handleClickMessage">Написать сообщение</span></a>
                    </template>

                    <a href="javascript:void(0)" class="list__item" @click="_handleClickAddToColleagues" v-if="(colleague === 0)"><span>Добавить в коллеги</span></a>
                    <a href="javascript:void(0)" class="list__item list__item_red" @click="_handleClickDestroyToColleagues" v-if="(colleague === 1)"><span>Удалить из коллег</span></a>
                    <a href="javascript:void(0)" class="list__item list__item_red" @click="_handleClickDestroyToColleagues" v-if="(colleague === -1)"><span>Отменить запрос в коллеги</span></a>

                    <a href="javascript:void(0)" :class="['list__item', { 'list__item_red': (follow !== 0) }]" @click="_handleClickChangeFollow">
                      <span v-if="(follow === -1)">Отменить запрос на подписку</span>
                      <span v-if="(follow === 0)">Подписаться</span>
                      <span v-if="(follow === 1)">Отписаться</span>
                    </a>
                    <a href="javascript:void(0)" class="list__item" @click="_handleClickClipBoardProfession"><span>Скопировать ссылку</span></a>
                    <a href="javascript:void(0)" class="list__item list__item_red" @click="_handleClickAbuseProfession"><span>Пожаловаться</span></a>
                  </more-actions>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { Collapse } from 'uiv'
  import { mapGetters } from 'vuex'
  import { PHOTO, VIDEO } from '@utils'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  const APP_URL = process.env.APP_URL

  export default {
    components: { Collapse },
    props: {
      response: {
        type: Object,
        required: true
      },
      hideAction: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        has,
        loading: false,
        PHOTO, VIDEO, RECEIVED, SELECTED,
        collapse: {
          portfolio: false
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      }),
      isCurrentUser () {
        return (this.user && this.user.id === this.response.user.id)
      },
      read () {
        return this.response.read
      },
      state () {
        return this.response.state
      },
      author () {
        return this.response.user
      },
      isCertifiedUser () {
        return this.author.isCertifiedUser || false
      },
      inFolder () {
        return this.author.inFolder || false
      },
      follow () {
        return this.author.follow || 0
      },
      colleague () {
        return this.author.colleague || 0
      },
      phone () {
        return (has(this.author, 'phone') && this.author['phone']) ? this.author['phone'] : null
      },
      profession () {
        return this.response.profession
      },
      professionId () {
        const { id } = this.response.profession
        return id
      },
      professionName () {
        const { profession: { text } } = this.profession
        return text
      },
      professionHref () {
        let { id } = this.profession
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'users.professions.show', params: { id }, query })
        return href
      },
      anketa () {
        const { anketa } = this.profession
        return anketa
      },
      hasRate () {
        return has(this.anketa, 'rate')
      },
      rate () {
        return this.anketa['rate'][0]
      },
      hasBodyParameters () {
        return has(this.anketa, 'body-parameters')
          && Object.values(this.anketa['body-parameters']).length
          && this._.pick(this.anketa['body-parameters'], [ 'height', 'weight', 'volume-of-breast', 'waist', 'hips' ])
      },
      bodyParameters () {
        return this.hasBodyParameters ? this.anketa['body-parameters'] : null
      },
      photos () {
        return (has(this.profession, 'photos') && this.profession.photos.length) ? this.profession.photos : []
      },
      videos () {
        return (has(this.profession, 'videos') && this.profession.videos.length) ? this.profession.videos : []
      },
      portfolio () {
        return [...this.photos, ...this.videos]
      },
      hasPortfolio () {
        return this.portfolio.length
      }
    },
    methods: {
      _handleClickMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickChangeStateResponse (state) {
        if (!state) return false

        return new Promise((resolve, reject) => {
          this.loading = true
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.response
          this.$api.post(`api/v2/boards/castings/responses/${id}/move`, { state }).then((response) => {
            const { data } = response

            loader.hide()
            this.loading = false
            this.$emit('destroy', id)

            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.loading = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      },
      isToday (date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd');
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickAbuseProfession () {
        let { id } = this.profession
        this.$root.$emit('open-modal-abuse-create', { id, type: 'profession' })
      },
      _handleClickChangeFollow () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        const { id } = this.author
        const { id: responseId } = this.response

        this.$api.post(`api/v1/follow`, { user_id: id }).then((response) => {
          const { data: { result } } = response

          this.$emit('change', responseId, 'user.follow', result)
          this.$notify({ type: 'success', title: 'Успешно', text: (result === 1) ? 'Подписка оформлена.' : 'Подписка отменена.' })

          loader.hide()

        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error follow user')
        })
      },
      _handleClickAddToColleagues () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        const { id } = this.author
        const { id: responseId } = this.response

        this.$api.post(`api/v1/users/partners/${id}`).then((response) => {
          const { data } = response

          loader.hide()
          this.$emit('change', responseId, 'user.colleague', -1)
        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error create partner')
        })
      },
      _handleClickDestroyToColleagues () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить пользователя из коллег?'
        }).then(() => {
          const { id: responseId } = this.response
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          this.destroyToColleagues().then(() => {
            loader.hide()
            this.$emit('change', responseId, 'user.colleague', 0)
            this.$notify({ type: 'success', title: 'Успешно', text: 'Пользователь удален из коллег.' })
          }).catch(() => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }).catch(() => {})
      },
      destroyToColleagues () {
        return new Promise((resolve, reject) => {
          const { id } = this.author

          this.$api.delete(`api/v1/users/partners/${id}`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error
            reject && reject()
            throw new Error('Error destroy partner')
          })
        })
      },
      _handleClickClipBoardProfession () {
        this.$copyText(APP_URL + this.professionHref).then((e) => {
          this.$notify({ type: 'success', title: 'Успешно', text: 'Ссылка успешно скопирована.' })
        }, (e) => {
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
