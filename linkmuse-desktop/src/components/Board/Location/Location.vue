<template>
  <div :class="['d-card', 'd-card-np', { 'd-card_premium': (isCatalogPage === true && isFasten === true) }]">
    <router-link :to="{ name: 'board.locations.show', params: { slug, id } }" :class="['section', { 'opacity_64' : (isArchived === true) }]">
      <div class="d-card__slider">
        <div class="d-card__slider-container">
          <template v-if="(photos && photos.length)">
            <div class="d-card__slider-item" v-for="(photo, index) in photos.slice(0, MAX_PHOTO_COUNT)">
              <div class="d-card__slider-wrapper">
                <div class="LazyImage d-card__slider-image LazyImage_loaded">
                  <div class="LazyImage__previewContainer"></div>
                  <img class="LazyImage__image" :src="photo['paths']['264x164']">
                </div>
                <template v-if="((index + 1) === MAX_PHOTO_COUNT && photos.length > MAX_PHOTO_COUNT)">
                  <div class="d-card__slider-more">
                    <div class="d-card__slider-more-wrapper">
                      <div class="d-card__slider-more-icon"></div>
                      <div class="d-card__slider-more-text">Ещё {{ photos.length - MAX_PHOTO_COUNT }} фото</div>
                    </div>
                  </div>
                </template>
              </div>
              <template v-if="(photos.length > 1)">
                <div class="d-card__slider-button"></div>
              </template>
            </div>
          </template>
          <template v-if="(!photos || photos.length === 0)">
            <div class="d-card__slider-item d-card__slider-item--empty">
              <img class="LazyImage__image" src="https://i.linkmuse.com/404.jpg">
            </div>
          </template>
        </div>
      </div>
    </router-link>

    <div class="d-card__description">
      <div class="d-column">
        <div class="d-row justify_between">
          <template v-if="(isCatalogPage === true)">
            <div class="d-card__type_casting">{{ type }}</div>
          </template>
          <template v-if="(isCatalogPage === false)">
            <div :class="[ 'd-card__type_casting', classColorState ]">
              <template v-if="(isCurrentUser === false)">{{ type }}</template>
              <template v-if="(isCurrentUser === true)">
                <template v-if="(isDraft === true)">Черновик</template>
                <template v-else-if="(isModeration === true)">На модерации</template>
                <template v-else-if="(isRejected === true)">
                  Отклонен: {{ has(location, 'rejection.cause.text') ? location['rejection']['cause']['text'] : '' }}.
                  {{ has(location, 'rejection.comment') ? location['rejection']['comment'] : '' }}
                </template>
                <template v-else-if="(isPublished === true)">Опубликован</template>
                <template v-else-if="(isArchived === true)">Архив</template>
                <template v-else>Ваше объявление</template>
              </template>
            </div>
          </template>

          <template v-if="(isFasten === true)">
            <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К объявлению была применена опция «Премиум-размещение»'">
              <div class="casting__option casting__option_premium">
                <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                </svg>
                Премиум
              </div>
            </tooltip>
          </template>
          <template v-if="(isFasten === false && location.publishedAt)">
            <div class="d-card__date_casting-creation">
              {{ isToday(location.publishedAt) ? 'Сегодня' : $moment(location.publishedAt).format('DD MMM YYYY') }}
              <span>, {{ $moment(location.publishedAt).format('HH:mm') }}</span>
            </div>
          </template>
        </div>

        <router-link :to="{ name: 'board.locations.show', params: { slug, id } }" :class="[{ 'opacity_64' : (isArchived === true) }]">
        <div :class="[ 'heading', 'heading_h4']">От {{ price | currency(currency) }} / {{ paymentPeriod | lowercase }}</div>

        <div :class="['d-card__list', 'd-card__list_casting-parameters', 'mb_4']">
          <template v-if="(city)">
            <div>{{ city.text }}</div>
          </template>
          <template v-if="( dimension )">
          <div>{{ dimension }} м²</div>
          </template>
          <template v-if="( roomType )">
            <div>{{ roomType }}</div>
          </template>
        </div>
        </router-link>

        <div class="d-row w_100 justify_between">
          <div class="d-column w_auto">
            <div class="d-row">
              <template v-if="(isCurrentUser === false)">
                <template v-if="(phone)">
                  <contact-phone-button class="mr_4 min-w_178px" :phone="phone" :hovered="false" event="location_show_number"></contact-phone-button>
                </template>
                <button class="d-btn d-btn_outline mr_4" @click="_handleClickMessage">{{ $t('location.location.write-message') }}</button>
              </template>

              <template v-else-if="(isCurrentUser === true)">
                <template v-if="(isArchived === false)">
                  <button :class="['d-btn ', 'd-btn_primary', { 'lm-bg-gray-1': isFasten }]" @click="_handleClickEditLocation">
                    редактировать
                  </button>
                </template>
                <template v-else-if="(isArchived === true)">
                  <button :class="['d-btn ', 'd-btn_primary', { 'lm-bg-gray-1': isFasten }]" @click="_handleClickPublishedLocation">
                    Опубликовать
                  </button>
                </template>
              </template>
            </div>
          </div>

          <div class="d-column w_auto z-index_3">
            <div class="d-row">
              <template v-if="(isPublished === true)">
                <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" :title="title"
                                      :description="$truncate(this.$htmlspecialchars(this.$striptags(description)), 50)"
                                      class="d-btn_round mr_4" position="top">
                  <svg class="d-icon d-icon_size_16">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                  </svg>
                </social-share-updated>
              </template>

              <more-actions :hover="true" position="top" class="d-btn_secondary_filled">
                <template v-if="(isCurrentUser === false)">
                  <a class="list__item" href="javascript:void(0)" @click="_handleClickAbuseLocation">Пожаловаться</a>
                </template>

                <template v-if="(((isCurrentUser && isRejected === false) || isAdmin))">
                  <template v-if="(isCurrentUser === true)">
                    <template v-if="(isPublished === true)">
                      <a class="list__item" href="javascript:void(0)" @click="_handleClickToArchiveLocation">В архив</a>
                    </template>

                    <template v-if="(isArchived === true)">
                      <a class="list__item" href="javascript:void(0)" @click="_handleClickPublishedLocation">Опубликовать</a>
                    </template>
                  </template>

                  <template v-if="((isCurrentUser === true && isArchived === false) || isAdmin)">
                    <a class="list__item" href="javascript:void(0)" @click="_handleClickEditLocation">Редактировать</a>
                  </template>

                  <template v-if="(isAdmin && isModeration)">
                    <a class="list__item" href="javascript:void(0)" @click="_handleClickApproveLocation">Одобрить</a>
                  </template>
                </template>
              </more-actions>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  import Location from '@modules/Board/Location'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Location/Enums/LocationState'

  const APP_URL = process.env.APP_URL
  const MAX_PHOTO_COUNT = 5

  export default {
    props: {
      location: {
        type: Object,
        required: true
      },
      isCatalogPage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        show: true,
        has,
        APP_URL,
        MAX_PHOTO_COUNT
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized'
      }),
      id () {
        return this.location.id
      },
      slug () {
        return this.location.slug
      },
      href () {
        let { id, slug } = this.location
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'board.locations.show', params: { id, slug }, query })
        return href
      },
      title () {
        return this.location ? `${this.type} ${this.dimension ? this.dimension : 0}м² - от ${this.price ? this.$currency(this.price, this.currency) : 0} ${this.paymentPeriod ? this.paymentPeriod.toLowerCase() : ''}` : 'Ошибка'
      },
      photos () {
        return (this.location.photos && this.location.photos.length) ? this.location.photos : []
      },
      description () {
        let { description } = this.location;

        if (description) {
          description = this.$htmlspecialchars(description) // Escape special characters to HTML
          description = this.$markdown(description) // Transform markdown to html
          description = this.$anchorme(description) // find link and to <a>
        }

        return description;
      },
      state () {
        return this.location.state
      },
      classColorState () {
        return Location.getLocationStateClass(this.state)
      },
      type () {
        return (this.location.type && has(this.location.type, 'text')) ? this.location.type.text : null
      },
      dimension () {
        return Number(this.location.dimension)
      },
      roomType () {
        return (this.location.roomType && has(this.location.roomType, 'text')) ? this.location.roomType.text : null
      },
      city () {
        return has(this.location, 'city.id') ? this.location.city : null
      },
      phone () {
        return (has(this.location, 'phone') && this.location['phone']) ? this.location['phone'] : null
      },
      price () {
        return this.location['price']
      },
      currency () {
        return (this.location.currency && has(this.location.currency, 'symbol')) ? this.location.currency.symbol : null
      },
      paymentPeriod () {
        return (this.location.paymentPeriod && has(this.location.paymentPeriod, 'text')) ? this.location.paymentPeriod.text : null
      },
      author () {
        return this.location.user
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.location.user.id)
      },
      isModeration () {
        return (this.state === MODERATION)
      },
      isPublished () {
        return (this.state === PUBLISHED)
      },
      isDraft () {
        return (this.state === DRAFT)
      },
      isArchived () {
        return (this.state === ARCHIVED)
      },
      isRejected () {
        return (this.state === REJECTED)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      isFasten () {
        return this.location.isFasten || false
      }
    },
    methods: {
      isToday(date) {
          let context = this.$moment(date);
          return this.$moment().isSame(context, 'd');
      },
      _handleClickEditLocation () {
        let { id } = this.location
        this.$router.push({ name: 'board.locations.edit', params: { id } })
      },
      _handleClickMessage () {
        if (this.isAuthorized === true) {
          let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
          let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
          window.open(href, '_blank')
        } else this._handleClickMessageWithoutAuthorized()
      },
      _handleClickMessageWithoutAuthorized () {
        this.$root.$emit('open-modal-access-global')
      },
      _handleClickAbuseLocation () {
        if (this.isAuthorized === true) {
          let { id } = this.location
          this.$root.$emit('open-modal-abuse-create', { id, type: 'board_location' })
        } else this._handleClickAbuseLocationWithoutAuthorized()
      },
      _handleClickAbuseLocationWithoutAuthorized () {
        this.$root.$emit('open-modal-access-global')
      },
      _handleClickToArchiveLocation () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive()
        }).catch(() => {})
      },
      _handleArchive () {
        return new Promise((resolve, reject) => {
          let { id, state } = this.location

          this.$emit('changeState', { id, key: 'state', value: ARCHIVED })

          this.$api.post(`api/v2/boards/locations/${id}/archive`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error draft location')
          })
        })
      },
      _handleClickPublishedLocation () {
        return new Promise((resolve, reject) => {

          let { id, state } = this.location

          if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
            this.$emit('changeState', { id, key: 'state', value: PUBLISHED })
          } else this.$emit('changeState', { id, key: 'state', value: PUBLISHED })

          this.$api.post(`api/v2/boards/locations/${id}/publish`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при публикации локации.' })

            reject && reject()

            throw new Error('Error publish location')
          })
        })
      },
      _handleClickApproveLocation () {
        return new Promise((resolve, reject) => {
          let { id, state } = this.location

          this.$emit('changeState', { id, key: 'state', value: PUBLISHED })

          this.$api.post(`/api/admin/v1/boards/locations/${id}/approve`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при публикации локации.' })

            reject && reject()

            throw new Error('Error publish location')
          })
        })
      },
    }
  }
</script>

<style scoped></style>
