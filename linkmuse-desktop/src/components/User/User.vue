<template>
  <div :class="['d-card', 'd-card-np', { 'd-card_premium': (isFasten === true) }]">
    <template>
      <router-link :to="{ name: 'user.show', params: { username } }" :class="['section']">
        <div class="d-card__slider">
          <div class="LazyImage d-card__slider-image LazyImage_loaded">
            <img :src="avatar" :alt="name" class="LazyImage__image">
          </div>
        </div>
      </router-link>
    </template>
    <div class="d-card__description">
      <div class="d-column">
        <div class="d-row justify_between">
          <template v-if="( professions && professions.length )">
            <div :class="['d-card__type_casting', 'color_main']">
              {{ professions.slice(0, 5).join(', ') }} <template v-if="(professions.length > 5)">...</template>
            </div>
          </template>

          <template v-if="(isFasten === true)">
            <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К пользователю была применена опция «Премиум-размещение»'">
              <div class="casting__option casting__option_premium">
                <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                </svg>
                Премиум
              </div>
            </tooltip>
          </template>
        </div>
        <router-link :to="{ name: 'user.show', params: { username } }">
          <div class="d-text_bold align-center mb_2">
            <template>{{ name }}</template>
            <template v-if="(isCertifiedUser === true)">
              <tooltip :class="['align-center', 'tooltip_small']" effect="scale" placement="right" :content="'Пройдена процедура верификации'">
                <svg class="d-icon d-icon_size_16 ml_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification"/>
                </svg>
              </tooltip>
            </template>
          </div>

          <div class="d-card__list d-card__list_casting-parameters mb_4">
            <div>{{ city ? city.text : 'Город не указан' }}</div>

            <template v-if="(age)">
              <div>{{ $pluralize(age, ['год', 'года', 'лет']) }}</div>
            </template>
          </div>
        </router-link>
        <div class="d-row w_100 justify_between">
          <div class="d-row w_auto">
            <template v-if="isCurrentUser === false">
              <template v-if="phone">
                <contact-phone-button class="min-w_178px" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
              </template>

              <template v-if="!phone">
                <button class="d-btn d-btn_primary min-w_178px" @click="_handleClickMessage">Написать</button>
              </template>
            </template>

            <template v-else>
              <router-link :to="{ name: 'settings.index' }" class="d-btn d-btn_secondary_filled">
                Настройки
              </router-link>
            </template>
          </div>

          <div class="d-column w_auto z-index_3">
            <div class="d-row">
              <template v-if="isCurrentUser === false">
                <template v-if="(isAuthorized && isCurrentUser === false)">
                  <button :class="['d-btn', 'd-btn_round', 'd-btn_secondary_filled', 'd-btn_like', { 'd-btn_like_active': inFolder }]" @click="_handleClickAddToFolder">
                    <svg class="d-icon d-icon_size_16">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                    </svg>
                  </button>
                </template>
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
      user: {
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
      name () {
        return has(this.user, 'name') ? this.user.name : null
      },
      username () {
        return has(this.user, 'username') ? this.user.username : null
      },
      href () {
        let { username } = this.user
        const query = this.isAuthorized && this.authUser ? { ref: this.authUser.id } : {}

        const { href } = this.$router.resolve({ name: 'user.show', params: { username }, query })
        return href
      },
      avatar () {
        if (this.user && has( this.user, 'avatar.183x183')) {
          const { avatar: { '183x183': image } } = this.user
          return image || AVATAR
        } else return AVATAR
      },
      isCurrentUser () {
        return (this.authUser && this.authUser.id === this.user.id)
      },
      isCertifiedUser () {
        return this.user.isCertifiedUser || false
      },
      inFolder () {
        return this.user.inFolder || false
      },
      city () {
        return has(this.user, 'city.id') ? this.user.city : null
      },
      age () {
        return has(this.user, 'age') ? this.user.age : null
      },
      phone () {
        return (has(this.user, 'contacts.phone') && this.user['contacts']['phone']) ? this.user['contacts']['phone'] : null
      },
      professions () {
        return has(this.user, 'professions') ? this.user.professions.map((p) => p.text) : []
      },
      isFasten () {
        return this.user.isFasten || false
      }
    },
    methods: {
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
        let uid = this._.sortBy([ this.user.id, this.authUser.id ]).toString()

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.user } )
      },
      _handleClickClipBoardUser () {
        this.$copyText(APP_URL + this.href).then((e) => {
          this.$notify({ type: 'success', title: 'Успешно', text: 'Ссылка успешно скопирована.' })
        }, (e) => {
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      }
    }
  }
</script>

<style scoped>

</style>
