<template>
  <div :class="['card', 'declaration__card', 'p_0', { 'card_premium': (isCatalogPage === true && isFasten === true), 'opacity_64': (isArchived === true) } ]">
    <div class="declaration__card_slider_wrap">
      <div class="declaration__card_slider_item">
        <template v-if="(photos && photos.length)">
          <img :src="photo['paths']['640x360']" :alt="`Локация #${location.id}`">
        </template>
        <template v-if="(!photos || photos.length === 0)">
          <img src="https://i.linkmuse.com/404.jpg" :alt="`Локация #${location.id}`">
        </template>
      </div>
    </div>

    <div class="card declaration__card_location">
      <div class="row justify_between row_align_center mb_0_5">
        <div :class="['declaration__type', classColorState ]">
          <template v-if="(isCatalogPage === true)">
            <template>{{ type }}</template>
          </template>
          <template v-if="(isCatalogPage === false)">
            <template v-if="(isCurrentUser === false)">{{ type }}</template>
            <template v-if="(isCurrentUser === true)">
              <template v-if="(isDraft === true)">Черновик</template>
              <template v-else-if="(isModeration === true)">На модерации</template>
              <template v-else-if="(isRejected === true)">
                Отклонен: {{ has(casting, 'rejection.cause.text') ? casting['rejection']['cause']['text'] : '' }}.
                {{ has(casting, 'rejection.comment') ? casting['rejection']['comment'] : '' }}
              </template>
              <template v-else-if="(isPublished === true)">Опубликован</template>
              <template v-else-if="(isArchived === true)">Архив</template>
              <template v-else>Ваше объявление</template>
            </template>
          </template>
        </div>
        <template v-if="(isAuthorized === true)">
          <button class="btn btn_options" @click="_handleClickActionSheet">
            <svg class="icon icon_size_16">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
            </svg>
          </button>
        </template>
      </div>
      <router-link :to="{ name: 'board.locations.show', params: { slug, id } }" class="section declaration__section">
        <div class="heading_h5 declaration__heading">От {{ price | currency(currency) }} / {{ paymentPeriod | lowercase }}</div>
        <div class="declaration__list declaration__list_parameters">
          <template v-if="(city)">
            <div>{{ city }}</div>
          </template>
          <template v-if="(dimension)">
            <div>{{ dimension }} м<sup>2</sup></div>
          </template>
          <template v-if="( roomType )">
            <div>{{ roomType }}</div>
          </template>
        </div>
      </router-link>
      <div class="section declaration__section">
        <div class="row row_justify_center">
          <template v-if="(isCurrentUser === false)">
            <template v-if="(phone)">
              <a :href="`tel:${phone}`" class="btn" @click="_handleClickCallUser">{{ $t('location.location.call') }}</a>
            </template>
            <template v-else-if="(!phone)">
              <router-link :to="{ name: 'board.locations.show', params: { slug, id } }" class="btn">
                Открыть
              </router-link>
            </template>
          </template>
          <template v-if="(isCurrentUser === true)">
            <template v-if="(isArchived === false)">
              <router-link :to="{ name: 'board.locations.edit', params: { id } }" class="btn">
                <template v-if="(isDraft === false)">Редактировать</template>
                <template v-else-if="(isDraft === true)">Продолжить</template>
              </router-link>
            </template>
            <template v-if="(isArchived === true)">
              <button class="btn" @click="_handleClickPublishedLocation">опубликовать</button>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'

  import Location from '@modules/Board/Location'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Location/Enums/LocationState'

  const APP_URL = process.env.APP_URL

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
        APP_URL
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
      type () {
        return (this.location.type && has(this.location.type, 'text')) ? this.location.type.text : null
      },
      state () {
        return this.location.state
      },
      classColorState () {
        return Location.getLocationStateClass(this.state)
      },
      photos () {
        return (this.location.photos && this.location.photos.length) ? this.location.photos : []
      },
      photo () {
        return (this.photos && this.photos.length) ? this.photos[0] : null
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
      city () {
        return (this.location && has(this.location.city, 'text')) ? this.location.city.text : null
      },
      dimension () {
        return Number(this.location.dimension)
      },
      roomType () {
        return (this.location.roomType && has(this.location.roomType, 'text')) ? this.location.roomType.text : null
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
      },
      phone () {
        return (has(this.location, 'phone') && this.location['phone']) ? this.location['phone'] : null
      },
    },
    methods: {
      _handleClickActionSheet () {
        let { id } = this.location
        this.$emit('actionSheet', id, this.isCurrentUser)
      },
      _handleClickPublishedLocation () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          let { id } = this.location

          this.$api.post(`api/v2/boards/locations/${id}/publish`).then((response) => {
            const { data } = response

            if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
              this.$emit('changeState', { id, key: 'state', value: PUBLISHED })
            } else this.$emit('changeState', { id, key: 'state', value: MODERATION })

            Indicator.close()
            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error publish location')
          })
        })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'location_call' })
      }
    }
  }
</script>

<style scoped>

</style>
