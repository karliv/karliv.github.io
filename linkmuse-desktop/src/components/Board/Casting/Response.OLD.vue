<template>
  <div :class="['section_casting', 'section_casting_big', { loading }]">
    <div class="d-row">
      <div class="min-w_157px mr_3">Исполнитель</div>
      <div class="profile w_100">
        <div class="d-row w_100 justify_between align_center">
          <div class="preview profile__preview">
            <a :href="author.href" class="d-row align_center">
              <img :src="author.avatar" :alt="author.name" :class="['img', 'preview__img', 'preview__img_profile', { 'preview__img_profile_verified': hasCertification }]">
              <div class="d-column">
                <div class="d-row align_center">
                  <div class="preview__title preview__title_profile">{{ author.name | truncate(50) }}</div>
                  <template v-if="hasCertification">
                    <svg class="d-icon d-icon_size_sm d-icon_verified ml_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification" />
                    </svg>
                  </template>
                </div>
                <div class="preview__role preview__role_profile" v-if="(Array.isArray(author.category) && author.category.length)">
                  {{ author.category.join(', ') | truncate(40) }}
                </div>
              </div>
            </a>
          </div>
          <template v-if="(hasCertification && isCurrentUser === false)">
            <div class="d-column w_auto fsize_8">
              <div class="profile__status profile__status_verificated ta_right">Этот аккаунт верифицирован</div>
              <router-link :to="{ name: 'certifying.executor.index' }" class="d-link ta_right tt_uppercase fw_600 fsize_8 mt_1">Узнать что это значит</router-link>
            </div>
          </template>
        </div>
      </div>
    </div>

    <template v-if="(author.phone)">
      <div class="d-row mt_6">
        <div class="min-w_157px mr_3">Телефон</div>
        <div class="fw_600 color_gray-1">{{ author.phone }}</div>
      </div>
    </template>

    <template v-if="has(author, 'city.text')">
      <div class="d-row mt_4">
        <div class="min-w_157px mr_3">Город</div>
        <div class="fw_600 color_gray-1">{{ author.city.text }}</div>
      </div>
    </template>

    <template v-if="(author.gender || author.age)">
      <div class="d-row mt_4">
        <div class="min-w_157px mr_3">Пол, возраст</div>
        <div class="fw_600 color_gray-1">{{ author.gender === 'male' ? 'Мужской' : 'Женский' }}<template v-if="author.age">, {{ author.age }}</template></div>
      </div>
    </template>

    <template v-if="(media.length)">
      <div class="d-row mt_6">
        <div class="min-w_157px mr_3">{{ hasCertification ? 'Верификация' : 'Портфолио' }}</div>
        <div class="d-column">
          <div class="gallery gallery_casting">
            <div class="gallery__content gallery__content_casting">
              <media :media="item" :type="(item.type.includes(VIDEO)) ? 'video' : 'photo'" v-for="item in media" :key="`media-${item.id}`"
                     :player="has(item, 'player') ? item.player : null" :src="has(item, 'paths.original') ? item.paths['original'] : null"
                     :album="`media-${response.id}`" :class="{ 'd-video': (item.type.includes(VIDEO)) }">
                <img :src="(item.type.includes(PHOTO)) ? has(item, 'paths.thumbnail') ? item.paths['thumbnail'] : item.paths['128x128'] : item.cover_image"
                     :alt="author.name" class="d-img">
                <template v-if="(item.type.includes(VIDEO))"><i class="lm-play"></i></template>
              </media>
            </div>
          </div>
          <template v-if="(measurement)">
            <certification-measurement-updated :measurement="measurement" class="section_specialist-parameters_small mt_3"></certification-measurement-updated>
          </template>
        </div>
      </div>
    </template>

    <template v-if="isCurrentUser === false">
      <div class="d-row mt_6 align_center">
        <div class="d-column min-w_157px mr_3 w_auto">
          <template v-if="(state === RECEIVED)">
            <div :class="['response__status', { 'response__status_new' : (read === false) }]">{{ (read) ? 'Просмотрен' : 'Новый' }}</div>
            <div class="response__date">{{ response.createdAt | moment('D.MM.YYYY') }}</div>
          </template>
        </div>
        <div class="d-column w_100">
          <div class="d-row w_100">
            <lm-loader v-if="loading" class="mr_2 flex_1"></lm-loader>

            <template v-if="loading === false && hideAction === false">
              <template v-if="(state === RECEIVED)">
                <button class="d-btn d-btn_primary mr_2 flex_1" @click="_handleClickChangeStateResponse(SELECTED)">В шорт-лист</button>
              </template>
              <template v-if="(state === SELECTED)">
                <button class="d-btn d-btn_outline mr_2 flex_1" @click="_handleClickChangeStateResponse(RECEIVED)">Убрать</button>
              </template>
            </template>

            <button class="d-btn d-btn_outline ml_2 flex_1" @click="_handleClickMessage">Написать сообщение</button>
          </div>
        </div>
      </div>
    </template>

    <template v-if="(isCurrentUser === true && hasCertification === false)">
      <div class="d-row mt_6">
        <div class="min-w_157px mr_3">&nbsp;</div>
        <div class="d-column">
          <div class="section_certification_notify">
            <div class="heading heading_h5">Больше преимуществ</div>
            <div class="section_certification_notify__description">
              <span>Получите проф. портфолио, приоритет в откликах и статус проверенного исполнителя с помощью верификации</span>
            </div>
            <button class="d-btn d-btn_primary mt_4" @click="_handleClickShowCertifying">Узнать подробнее</button>
          </div>
        </div>
      </div>
    </template>

    <!--    <div class="d-card d-card-np mt_16">-->
    <!--      <a :href="author.href" class="section">-->
    <!--        <div class="d-card__slider">-->
    <!--          <div class="d-card__slider-container">-->
    <!--            <div class="d-card__slider-item">-->
    <!--              <div class="d-card__slider-wrapper">-->
    <!--                <div class="LazyImage d-card__slider-image LazyImage_loaded">-->
    <!--                  <div class="LazyImage__previewContainer"></div>-->
    <!--                  <img :src="author.avatar" :alt="author.name" class="LazyImage__image">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </a>-->

    <!--      <div class="d-card__description column justify_between">-->
    <!--        <div class="d-row justify_between">-->
    <!--          <div class="d-card__type_casting color_main" v-if="(Array.isArray(author.category) && author.category.length)">-->
    <!--            {{ author.category.join(', ') | truncate(40) }}-->
    <!--          </div>-->

    <!--          <div class="d-card__date_casting-creation">-->
    <!--            <div :class="['mr_5', {'color_main' : (read === false)}]">{{ (read) ? 'Просмотрен' : 'Новый отклик' }}</div>-->
    <!--            <div>{{ response.createdAt | moment('D.MM.YYYY') }}</div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <a :href="author.href">-->
    <!--          <div class="heading page-profile__text_1 align-center mb_2">-->
    <!--            {{ author.name | truncate(50) }}-->
    <!--            <template v-if="hasCertification">-->
    <!--              <svg class="d-icon d-icon_size_sm d-icon_verified ml_2">-->
    <!--                <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification" />-->
    <!--              </svg>-->
    <!--            </template>-->
    <!--          </div>-->

    <!--          <div class="d-card__list d-card__list_casting-parameters mb_2">-->
    <!--            <template v-if="has(author, 'city.text')">-->
    <!--              <div>{{ author.city.text }}</div>-->
    <!--            </template>-->
    <!--            <template v-if="author.age">-->
    <!--              <div>{{ author.age }} лет</div>-->
    <!--            </template>-->
    <!--          </div>-->

    <!--          <div class="heading page-profile__text_3 mb_4">От 20 000 ₽ / мес</div>-->
    <!--        </a>-->

    <!--        <div class="d-row w_100 justify_between">-->
    <!--          <div class="d-column w_auto">-->
    <!--            <div class="d-row">-->
    <!--              <template v-if="(isCurrentUser === false)">-->
    <!--                <template v-if="author.phone">-->
    <!--                  <contact-phone-button class="mr_4 min-w_178px" :phone="author.phone" :hovered="false" event="location_show_number"></contact-phone-button>-->
    <!--                </template>-->
    <!--                <button class="d-btn d-btn_outline">В шорт-лист</button>-->
    <!--              </template>-->

    <!--              <template v-else-if="(isCurrentUser === true)">-->
    <!--                <button class="d-btn d-btn_outline">-->
    <!--                  Редактировать-->
    <!--                </button>-->
    <!--              </template>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="d-column w_auto">-->

    <!--            <div class="d-row">-->

    <!--              <template v-if="isCurrentUser === false">-->
    <!--                <button :class="['d-btn', 'd-btn_round', 'd-btn_secondary_filled']">-->
    <!--                  <svg class="d-icon d-icon_size_16">-->
    <!--                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-message" />-->
    <!--                  </svg>-->
    <!--                </button>-->

    <!--                <button :class="['d-btn', 'd-btn_round', 'd-btn_secondary_filled', 'd-btn_like', 'ml_4']">-->
    <!--                  <svg class="d-icon d-icon_size_16">-->
    <!--                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />-->
    <!--                  </svg>-->
    <!--                </button>-->

    <!--                <social-share-updated :hover="true" :url="(author.href)" :clipboard="true" class="d-btn_round ml_4" position="top">-->
    <!--                  <svg class="d-icon d-icon_size_16">-->
    <!--                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />-->
    <!--                  </svg>-->
    <!--                </social-share-updated>-->
    <!--              </template>-->

    <!--              <template v-if="isCurrentUser || isAdmin">-->
    <!--                <more-actions position="top" :hover="true" class="d-btn_secondary_filled ml_4">-->
    <!--                  <a class="list__item" href="javascript:void(0)">В архив</a>-->
    <!--                </more-actions>-->
    <!--              </template>-->

    <!--            </div>-->

    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <template v-if="(isCurrentUser === true && hasCertification === false)">-->
    <!--      <div class="d-row mt_6">-->
    <!--        <div class="d-column">-->
    <!--          <div class="section_certification_notify">-->
    <!--            <div class="heading heading_h5">Больше преимуществ</div>-->
    <!--            <div class="section_certification_notify__description mb_2">-->
    <!--              Получите проф. портфолио, приоритет в откликах и статус проверенного исполнителя с помощью верификации-->
    <!--            </div>-->
    <!--            <a href="javascript:void(0)" class="page-profile__text_1 color_main" @click="_handleClickShowCertifying">Узнать подробнее</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </template>-->
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { PHOTO, VIDEO } from '@utils'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  export default {
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
        PHOTO, VIDEO, RECEIVED, SELECTED
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      isCurrentUser () {
        return (this.user && this.user.id === this.response.user.id)
      },
      state () {
        return this.response.state
      },
      author () {
        return this.response.user
      },
      read () {
        return this.response.read
      },
      portfolio () {
        return (has(this.author, 'portfolio.data.id') ? this.author.portfolio.data : null)
      },
      hasPortfolio () {
        return has(this.author, 'portfolio.data.id') && (has(this.portfolio, 'publish') && this.portfolio.publish) && (has(this.portfolio, 'template') && this.portfolio.template === 0)
      },
      certification () {
        return (has(this.author, 'certification.data.id') ? this.author.certification.data : null)
      },
      hasCertification () {
        return has(this.author, 'certification.data.id')
      },
      media () {
        let portfolio = this.hasPortfolio ? this.portfolio.cells.data.map((item) => {
          return {
            id: has(item,'data.id') ? item.data.id : null,
            type: has(item, 'data.type') ? item.data.type : null,
            created_at: has(item ,'data.created_at') ? item.data.created_at : null,
            width: has(item, 'size.width') ? item.size.width : null,
            height: has(item, 'size.height') ? item.size.height : null,
            player: has(item, 'data.player') ? item.data.player : null,
            cover_image: has(item, 'data.cover_original') ? item.data.cover_original : null,
            paths: {
              'original': has(item, 'data.path') ? item.data.path : null,
              'thumbnail': has(item, 'thumbnail') ? item.thumbnail : null,
              '170x132': has(item, 'data.path_170') ? item.data.path_170 : null,
              '106x106': has(item, 'data.path_106') ? item.data.path_106 : null,
              '128x128': has(item, 'data.path_106') ? item.data.path_106 : null,
              '260x181': has(item, 'data.path_260') ? item.data.path_260 : null,
              '106x133': has(item, 'data.path_106_133') ? item.data.path_106_133 : null
            }
          }
        }) : []

        let certification = this.hasCertification ?
          [
            ...(has(this.certification, 'video.data') ? this.certification.video.data : []),
            ...(has(this.certification, 'photos.data') ? this.certification.photos.data : [])
          ] : []

        return [...portfolio, ...certification]
      },
      measurement () {
        return (has(this.certification, 'measurement.data.body-parameters'))
          ? this.certification['measurement']['data']['body-parameters']
          : false
      }
    },
    methods: {
      _handleClickMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        // this.$router.push({ name: 'messages.show', params: { uid } })
        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickChangeStateResponse (state) {
        if (!state) return false

        return new Promise((resolve, reject) => {
          this.loading = true

          let { id } = this.response
          this.$api.post(`api/v2/boards/castings/responses/${id}/move`, { state }).then((response) => {
            const { data } = response

            this.loading = false
            this.$emit('change', id)

            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.loading = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickShowCertifying () {
        this.$router.push({ name: 'certifying.index' })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
