<template>
  <div class="response response_casting" :style="{ paddingBottom: '24px' }">
    <template v-if="(state === RECEIVED && isCurrentUser === false)">
      <div class="block block_response block_response_casting">
        <div class="row row_justify_between row_align_center">
          <div :class="['response__status', { 'response__status_new': (read === false) } ]">{{ (read) ? $t('applications-page.suitbale-response.viewed') : 'Новый' }}</div>
          <div class="response__date">{{ response.createdAt | moment('D.MM.YYYY') }}</div>
        </div>
      </div>
    </template>

    <div class="block block_response block_response_casting">
      <div class="preview profile__preview profile__preview_response">
        <router-link :to="{ name: 'user.show', params: { username: author.username } }" class="row row_align_center">
          <img :src="author.avatar" :alt="author.name" :class="['img', 'preview__img', 'preview__img_profile', { 'preview__img_profile_verified': hasCertification }]">
          <div class="column">
            <div class="row align_center">
              <div class="preview__title preview__title_profile">{{ author.name | truncate(50) }}</div>
              <template v-if="hasCertification">
                <!-- icon_verified -->
                <template v-if="false">
                  <svg class="icon icon_size_16 icon_verified ml_2">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
                  </svg>
                </template>
              </template>
            </div>
            <div class="preview__role preview__role_profile" v-if="(Array.isArray(author.category) && author.category.length)">
              {{ author.category.join(', ') | truncate(40) }}
            </div>
          </div>
        </router-link>
      </div>

      <div class="gallery gallery_horizontal-scroll mb_6" v-if="(media.length)">
        <div class="gallery__content gallery__content_horizontal-scroll">
          <media :media="item" :type="(item.type.includes(VIDEO)) ? 'video' : 'photo'" v-for="item in media" :key="`media-${item.id}`"
          :player="has(item, 'player') ? item.player : null" :src="has(item, 'paths.original') ? item.paths['original'] : null"
          :album="`media-${response.id}`">
            <img :src="(item.type.includes(PHOTO)) ? has(item, 'paths.thumbnail') ? item.paths['thumbnail'] : item.paths['128x128'] : item.cover_image"
            :alt="author.name" class="img img_declaration img_declaration_casting">
            <template v-if="(item.type.includes(VIDEO))"><i class="lm-play"></i></template>
          </media>
        </div>
      </div>

      <template v-if="(measurement)">
        <certification-measurement :measurement="measurement" class="mb_6"></certification-measurement>
      </template>

      <div class="row mb_6">
        <div class="column">
          <div class="profile__number mb_1" v-if="(author.phone)">{{ author.phone }}</div>
          <div class="profile__gender mb_1">{{ author.gender === 'male' ? 'Мужской' : 'Женский' }} <template v-if="author.age">, {{ author.age }}</template></div>
          <template v-if="has(author, 'city.text')">
            <div class="profile__city mb_1">{{ author.city.text }}</div>
          </template>
        </div>
      </div>

      <template v-if="(isCurrentUser === true && hasCertification === false)">
        <div class="d-row mt_1">
          <div class="d-column">
            <div class="section_certification_notify">
              <div class="heading heading_h5">Больше преимуществ</div>
              <div class="section_certification_notify__description">
                <span>Получите проф.портфолио, приоритет в откликах и статус проверенного пользователя с помощью верификации.</span>
              </div>
              <button class="btn btn_primary mt_1" @click="_handleClickShowCertifying">Узнать подробнее</button>
            </div>
          </div>
        </div>
      </template>
    </div>

    <template v-if="isCurrentUser === false">
      <div class="row row_justify_between">
        <div class="row">
          <template v-if="false">
            <button class="btn btn_round bg-color_gray-5 mr_4" @click="_handleClickActionSheet">
              <svg class="icon icon_size_16 icon_fill_lm-gray-3">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options" />
              </svg>
            </button>
          </template>

          <button class="btn btn_round bg-color_gray-5" @click="_handleClickMessage">
            <svg class="icon icon_size_16 icon_fill_lm-gray-3">
              <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_chat" />
            </svg>
          </button>
        </div>

        <template v-if="hideAction === false">
          <div class="row">
            <template v-if="(state === RECEIVED)">
              <button class="btn btn_primary" @click="_handleClickChangeStateResponse(SELECTED)">{{ $t('applications-page.suitbale-response.to-the-suitable') }}</button>
            </template>
            <template v-if="(state === SELECTED)">
              <button class="btn btn_outline" @click="_handleClickChangeStateResponse(RECEIVED)">{{ $t('applications-page.remove-candidate.remove') }}</button>
            </template>
          </div>
        </template>

      </div>
    </template>

  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { PHOTO, VIDEO } from '@utils'
  import { Indicator, Toast } from 'mint-ui'
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
            id: item.data.id,
            type: item.data.type,
            created_at: item.data.created_at,
            width: has(item, 'size.width') ? item.size.width : null,
            height: has(item, 'size.height') ? item.size.height : null,
            player: has(item, 'data.player') ? item.data.player : null,
            cover_image: has(item, 'data.cover_original') ? item.data.cover_original : null,
            paths: {
              'original': item.data.path,
              'thumbnail': item.thumbnail,
              '170x132': item.data.path_170,
              '106x106': item.data.path_106,
              '128x128': item.data.path_106,
              '260x181': item.data.path_260,
              '106x133': item.data.path_106_133
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
      _handleClickActionSheet () {
        alert('¯\\_(ツ)_/¯')
      },
      _handleClickMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickChangeStateResponse (state) {
        if (!state) return false

          return new Promise((resolve, reject) => {
            Indicator.open()

            let { id } = this.response
            this.$api.post(`api/v2/boards/castings/responses/${id}/move`, { state }).then((response) => {
              const { data } = response

              Indicator.close()
              this.$emit('change', id)

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
      }
    }
  }
</script>

<style scoped>

</style>
