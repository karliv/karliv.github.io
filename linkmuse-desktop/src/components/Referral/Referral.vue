<template>
  <div :class="['d-card', 'd-card-np']">
    <router-link :to="{ name: 'user.show', params: { username } }" :class="['section']">
      <div class="d-card__slider" style="height: 150px; width: 150px;">
        <div class="LazyImage d-card__slider-image LazyImage_loaded">
          <img :src="avatar" :alt="name" class="LazyImage__image">
        </div>
      </div>
    </router-link>
    <div class="d-card__description">
      <div class="d-column">
        <div class="d-row justify_between">
          <div :class="['d-card__type_casting', 'color_main']">
            <template>{{ user.email }}</template>
          </div>

          <template v-if="(user.createdAt)">
            <div class="d-card__date_casting-creation">
              {{ isToday(user.createdAt) ? 'Сегодня' : $moment(user.createdAt).format('DD MMM YYYY') }}
              <span>, {{ $moment(user.createdAt).format('HH:mm') }}</span>
            </div>
          </template>
        </div>
        <router-link :to="{ name: 'user.show', params: { username } }">
          <div class="heading page-profile__text_1 align-center mb_2">
            <template>{{ name }}</template>
            <template v-if="(isCertifiedUser === true)">
              <tooltip :class="['align-center', 'tooltip_small']" effect="scale" placement="right" :content="'Пройдена процедура верификации'">
                <svg class="d-icon d-icon_size_16 ml_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification"/>
                </svg>
              </tooltip>
            </template>
          </div>

          <div class="d-card__list d-card__list_casting-parameters mb_2">
            <div>{{ city ? city.name : 'Город не указан' }}</div>

            <template v-if="(age)">
              <div>{{ $pluralize(age, ['год', 'года', 'лет']) }}</div>
            </template>
          </div>
        </router-link>
        <div class="d-row w_100 justify_between">
          <div class="d-column w_auto">
            <div class="d-row">
              <template v-if="(isCurrentUser === false)">
                <template v-if="(phone)">
                  <contact-phone-button class="mr_4 min-w_178px" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
                </template>

                <button class="d-btn d-btn_outline mr_4" @click="_handleClickMessage">Написать сообщение</button>
              </template>
              <template v-else-if="(isCurrentUser === true)">
                <router-link :to="{ name: 'settings.index' }" class="d-btn d-btn_secondary_filled">
                  Редактировать
                </router-link>
              </template>
            </div>
          </div>
          <div class="d-column w_auto z-index_3">
            <div class="d-row">
              <template v-if="(isCurrentUser === false)">
                <template v-if="(isAuthorized && isCurrentUser === false)">
                  <button :class="['d-btn', 'd-btn_round', 'mr_4', 'd-btn_secondary_filled', 'd-btn_like', { 'd-btn_like_active': inFolder }]" @click="_handleClickAddToFolder">
                    <svg class="d-icon d-icon_size_16">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                    </svg>
                  </button>
                </template>

                <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" class="d-btn_round" position="top">
                  <svg class="d-icon d-icon_size_16">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                  </svg>
                </social-share-updated>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, AVATAR } from '@utils'

  const APP_URL = process.env.APP_URL

  export default {
    props: {
      referral: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has,
        APP_URL
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      }),
      id () {
        return this.referral.id
      },
      user () {
        return this.referral
      },
      username () {
        return this.user.id
      },
      name () {
        return has(this.user, 'name') ? this.user.name : null
      },
      href () {
        let { username } = this.user
        const query = this.isAuthorized && this.authUser ? { ref: this.authUser.id } : {}

        const { href } = this.$router.resolve({ name: 'user.show', params: { username }, query })
        return href
      },
      avatar () {
        if (this.user && has( this.user, 'avatar')) {
          const { avatar: image } = this.user
          return image || AVATAR
        } else return AVATAR
      },
      isCertifiedUser () {
        return this.user.isCertifiedUser || false
      },
      inFolder () {
        return this.user.inFolder || false
      },
      city () {
        return has(this.user, 'city.data.id') ? this.user.city['data'] : null
      },
      age () {
        return has(this.user, 'age') ? this.user.age : null
      },
      phone () {
        return (has(this.user, 'contacts.phone') && this.user['contacts']['phone']) ? this.user['contacts']['phone'] : null
      },
      isCurrentUser () {
        return (this.authUser && this.authUser.id === this.user.id)
      },
    },
    methods: {
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd');
      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()

        this.$gtm.trackEvent({ event: 'write_message' })
      },
      _handleClickMessageWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.authUser.id, this.user.id ]).toString()

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.user } )
      },
    }
  }
</script>

<style scoped>

</style>
