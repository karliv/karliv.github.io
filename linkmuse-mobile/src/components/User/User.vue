<template>
  <div :class="['card', 'declaration__card', 'pb_16', { 'card_premium': (isFasten === true) }]">
    <div class="row mb_3">
      <div class="profile-card__avatar" >
        <img :src="avatar" :alt="name">
      </div>

      <div :class="['column', 'ml_4']">
        <div class="row justify_between align_center">
          <template v-if="( professions && professions.length )">
            <span class="declaration__type cropped-text">
              {{ professions.slice(0, 5).join(', ') }} <template v-if="(professions.length > 5)">...</template>
            </span>
          </template>
        </div>

        <router-link :to="{ name: 'user.show', params: { username } }" class="profile-card__description">
          <div class="row align_center">
              <span class="m-text_bold color_gray-1 ">{{ name }}</span>
            <template v-if="(isCertifiedUser === true)">
              <svg class="icon icon_size_16 ml_2">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
              </svg>
            </template>
          </div>

          <div class="declaration__list declaration__list_parameters mt_1">
            <div>{{ city ? city.text : 'Город не указан' }}</div>
            <template v-if="(age)">
              <div>{{ $pluralize(age, ['год', 'года', 'лет']) }}</div>
            </template>
          </div>
        </router-link>
      </div>
    </div>

    <div class="section profile-card__buttons justify_between align_center">
      <template v-if="isCurrentUser">
        <div class="row">
          <router-link :to="{ name: 'settings.index' }" class="btn btn_secondary_filled w_100">Настройки</router-link>
        </div>
      </template>

      <template v-else>
        <div class="row">
          <template v-if="phone">
            <a :href="`tel:${phone}`" class="btn btn_primary" @click="_handleClickCallUser">{{ $t('unified-profile.professionals.call') }}</a>
          </template>
          <template v-if="!phone">
            <a href="javascript:void(0)" class="btn btn_primary" @click="_handleClickMessage">{{ $t('unified-profile.professionals.write') }}</a>
          </template>
        </div>

        <div class="row">
          <button :class="['btn', 'btn_rounded', { 'btn_like_active': inFolder }]" @click="_handleClickAddToFolder">
            <svg class="icon' icon_size_16">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-heart" />
            </svg>
          </button>
          <!--        <template v-if="(isAuthorized === true)">-->
          <!--          <button class="btn btn_rounded ml_16" @click="_handleClickActionSheet">-->
          <!--            <svg class="icon icon_options">-->
          <!--              <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options" />-->
          <!--            </svg>-->
          <!--          </button>-->
          <!--        </template>-->
        </div>
      </template>
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
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'call_user_number' })
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.user } )
      },
      _handleClickActionSheet () {
        let { id } = this.profession
        this.$emit('actionSheet', id, this.isCurrentUser)
      }
    }
  }
</script>

<style scoped>

</style>
