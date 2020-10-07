<template>
  <div class="card declaration__card_inner mt_1">
    <div class="profile__wrapper">
      <div class="block_response_casting">
        <div class="row justify_between align_center w_100">
          <template v-if="isCurrentUser">
            <span :class="['declaration__type', {'color_gray-2' : !read}]">{{ (read) ? 'просмотрен' : 'не просмотрен' }}</span>
          </template>
          <template v-else>
            <span :class="['declaration__type', {'color_gray-2' : read}]">{{ (read) ? $t('applications-page.suitbale-response.viewed') : 'новый отклик' }}</span>
          </template>

          <template v-if="state === RECEIVED">
            <span class="response__date">{{ isToday(response.createdAt) ? 'Сегодня' : response.createdAt | moment('D.MM.YYYY') }}</span>
          </template>
        </div>
      </div>

      <div class="block_response_casting">
        <div class="row">
          <router-link :to="{ name: 'users.professions.show', params: { id: professionId } }" class="profile-card__avatar" >
            <img :src="author.avatar" :alt="author.name">
          </router-link>

          <div class="column ml_4">
            <div class="row justify_between align_center mb_2">
              <span class="declaration__type">
                <template v-if="profession">
                  {{ professionName }}
                </template>
              </span>
            </div>

            <router-link :to="{ name: 'users.professions.show', params: { id: professionId } }" class="profile-card__description">
              <div class="row align_center mb_2">
              <span class="m-text_bold color_gray-1">
                {{ author.name | truncate(50) }}
              </span>
                <template v-if="isCertifiedUser === true">
                  <svg class="icon icon_size_16 ml_2">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
                  </svg>
                </template>
              </div>

              <div class="declaration__list declaration__list_parameters">
                <div>{{ author.city ? author.city.text : 'Город не указан' }}</div>
                <template v-if="(author.age)">
                  <div>{{ $pluralize(author.age, ['год', 'года', 'лет']) }}</div>
                </template>
              </div>

              <div class="m-text_bold-2 color_gray-1 row mt_2">
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

        <template v-if="profession">
          <template v-if="hasBodyParameters">
            <div class="section section_specialist-parameters">
              <template v-if="has(bodyParameters, 'height') || has(bodyParameters, 'weight')">
                <div class="row">
                  <template v-if="has(bodyParameters, 'height')">
                    <div class="card card_specialist-parameters">
                      <div class="card__header">
                        <span>Рост</span>
                      </div>
                      <div class="card__body">
                        <span>{{ bodyParameters['height'] }}</span> см
                      </div>
                    </div>
                  </template>
                  <template v-if="has(bodyParameters, 'weight')">
                    <div class="card card_specialist-parameters">
                      <div class="card__header">
                        <span>вес</span>
                      </div>
                      <div class="card__body">
                        <span>{{ bodyParameters['weight'] }}</span> кг
                      </div>
                    </div>
                  </template>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'volume-of-breast') || has(bodyParameters, 'waist') || has(bodyParameters, 'hips')">
                <div class="row">
                  <template v-if="has(bodyParameters, 'volume-of-breast')">
                    <div class="card card_specialist-parameters">
                      <div class="card__header">
                        <span>грудь</span>
                      </div>
                      <div class="card__body">
                        <span>{{ bodyParameters['volume-of-breast'] }}</span> см
                      </div>
                    </div>
                  </template>
                  <template v-if="has(bodyParameters, 'waist')">
                    <div class="card card_specialist-parameters">
                      <div class="card__header">
                        <span>талия</span>
                      </div>
                      <div class="card__body">
                        <span>{{ bodyParameters['waist'] }}</span> см
                      </div>
                    </div>
                  </template>
                  <template v-if="has(bodyParameters, 'hips')">
                    <div class="card card_specialist-parameters">
                      <div class="card__header">
                        <span>бедра</span>
                      </div>
                      <div class="card__body">
                        <span>{{ bodyParameters['hips'] }}</span> см
                      </div>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>

          <template v-if="hasPortfolio">
            <div class="gallery__content mt_3">
              <template v-for="item in portfolio.slice(0, 2)">
                <template v-if="(item.type === 'photo')">
                  <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" :album="`portfolio-user-${author.id}`">
                    <img :src="item['paths']['250x250']" :alt="author.name" class="img img_declaration img_declaration_casting">
                  </media>
                </template>

                <template v-if="(item.type === 'video')">
                  <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" :album="`portfolio-user-${author.id}`" class="video__wrapper">
                    <img :src="item['cover']['original']" :alt="author.name" class="img img_declaration img_declaration_casting">
                    <svg :class="['video__icon', 'icon', 'icon_size_16']">
                      <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-media"></use>
                    </svg>
                  </media>
                </template>
              </template>
            </div>

            <collapse v-model="collapse['portfolio']">
              <div class="gallery__content mt_3">
                <template v-for="item in portfolio.slice(2)">
                  <template v-if="(item.type === 'photo')">
                    <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" :album="`portfolio-user-${author.id}`">
                      <img :src="item['paths']['250x250']" :alt="author.name" class="img img_declaration img_declaration_casting">
                    </media>
                  </template>

                  <template v-if="(item.type === 'video')">
                    <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" :album="`portfolio-user-${author.id}`" class="video__wrapper">
                      <img :src="item['cover']['original']" :alt="author.name" class="img img_declaration img_declaration_casting">
                      <svg :class="['video__icon', 'icon', 'icon_size_16']">
                        <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-media"></use>
                      </svg>
                    </media>
                  </template>
                </template>
              </div>
            </collapse>

            <template v-if="(portfolio.length > 2)">
              <div class="mt_3">
                <div class="btn btn_rounded color_gray-2" @click="_handleClickToggleCollapse('portfolio')">
                  <svg :class="['icon', 'icon_size_16', 'fill_gray-2', { rotate_180: (collapse['portfolio']) }]">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                  </svg>

                  <span >{{ collapse['portfolio'] ? 'Скрыть' : `Показать все (${portfolio.length})` }}</span>
                </div>
              </div>
            </template>
          </template>
        </template>
      </div>

      <template v-if="isCurrentUser">
        <div class="row">
          <router-link :to="{ name: 'settings.index' }" class="btn btn_rounded color_gray-2 w_100">Редактировать</router-link>
        </div>
      </template>

      <template v-if="(isCurrentUser === false)">
        <div class="column">
          <template v-if="( phone )">
            <a :href="`tel:${phone}`" class="btn btn_primary w_100" @click="_handleClickCallUser">Позвонить</a>
          </template>
          <template v-if="( !phone )">
            <a href="javascript:void(0)" class="btn btn_primary w_100" @click="_handleClickMessage">Написать</a>
          </template>

          <div class="row justify_between mt_4">
            <template v-if="response.state === SELECTED">
              <a href="javascript:void(0)" class="btn btn_rounded color_gray-2 w_100" @click="_handleClickChangeStateResponse(RECEIVED)">Убрать</a>
            </template>
            <template v-if="(state === RECEIVED)">
              <a href="javascript:void(0)" class="btn btn_rounded color_gray-2 w_100" @click="_handleClickChangeStateResponse(SELECTED)">В шорт-лист</a>
            </template>

            <div class="row ml_4">
              <button class="btn btn_rounded" @click="_handleClickAddToFolder">
                <svg :class="['icon', 'icon_size_16', { 'icon_fill_red': inFolder }]">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-heart" />
                </svg>
              </button>

              <button class="btn btn_rounded" @click="_handleClickActionSheet">
                <svg class="icon icon_size_16">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
                </svg>
              </button>
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
  import { Indicator, Toast } from 'mint-ui'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

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
        PHOTO, VIDEO, RECEIVED, SELECTED,
        collapse: {
          portfolio: false,
        },
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
      snaps () {
        return (has(this.profession, 'snaps') && this.profession.snaps.length) ? this.profession.snaps : []
      },
      videos () {
        return (has(this.profession, 'videos') && this.profession.videos.length) ? this.profession.videos : []
      },
      portfolio () {
        return [...this.snaps, ...this.photos, ...this.videos]
      },
      hasPortfolio () {
        return this.portfolio.length
      }
    },
    methods: {
      _handleClickActionSheet () {
        this.$emit('actionSheet', this.response.id)
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd');
      },
      _handleClickMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'casting_call' })
      },
      _handleClickChangeStateResponse (state) {
        if (!state) return false

          return new Promise((resolve, reject) => {
            Indicator.open()

            let { id } = this.response
            this.$api.post(`api/v2/boards/castings/responses/${id}/move`, { state }).then((response) => {
              const { data } = response

              Indicator.close()
              this.$emit('destroy', id)

              resolve && resolve()
            }, (error) => {
              const { response: { data, status } } = error

              Indicator.close()
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

              reject && reject()

              throw new Error('Error draft casting')
            })
          })
      },
      _handleClickShowCertifying () {
        this.$router.push({ name: 'certifying.index' })
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      },
    }
  }
</script>

<style scoped>

</style>
