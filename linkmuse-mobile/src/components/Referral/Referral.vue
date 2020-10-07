<template>
  <div :class="['card', 'declaration__card']">
    <div class="row mb_3">
      <router-link :to="{ name: 'user.show', params: { username } }" class="profile-card__avatar" >
        <img :src="avatar" :alt="name">
      </router-link>
      <div :class="['column', 'ml_4']">
        <div class="row justify_between align_center">
          <span :class="['declaration__type', 'color_gray-3']">
            <template>{{ isToday(user.createdAt) ? 'Сегодня' : $moment(user.createdAt).format('DD MMM YYYY') }}</template>
          </span>

          <template v-if="(isAuthorized && isCurrentUser === false)">
            <button class="btn btn_options" @click="_handleClickAddToFolder">
              <svg :class="['icon', 'icon_size_16', { 'icon_fill_red': inFolder }]">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-heart" />
              </svg>
            </button>
          </template>
        </div>
        <router-link :to="{ name: 'user.show', params: { username } }" class="profile-card__description">
          <div class="row align_center">
            <span class="m-text_bold color_gray-1 ">
              <template>{{ name }}</template>
            </span>
            <template v-if="(isCertifiedUser === true)">
              <svg class="icon icon_size_16 ml_2">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
              </svg>
            </template>
          </div>

          <div class="declaration__list declaration__list_parameters mt_1">
            <div>{{ city ? city.name : 'Город не указан' }}</div>
            <template v-if="(age)">
              <div>{{ $pluralize(age, ['год', 'года', 'лет']) }}</div>
            </template>
          </div>

          <div class="m-text_bold-2 color_gray-1 row mt_2">
            <template>{{ user.email }}</template>
          </div>
        </router-link>
      </div>
    </div>
    <div class="section declaration__section profile-card__buttons justify_evenly align_center">
      <template v-if="isCurrentUser">
        <router-link :to="{ name: 'settings.index' }" class="btn">Настройки</router-link>
      </template>
      <template v-else-if="(isCurrentUser === false)">
        <template v-if="phone">
          <a :href="`tel:${phone}`" class="btn" @click="_handleClickCallUser">Позвонить</a>
          <span class="vertical-dash"></span>
        </template>
        <a href="javascript:void(0)" class="btn" @click="_handleClickMessage">Написать</a>
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
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'call_user_number' })
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.user } )
      },
    }
  }
</script>

<style scoped>

</style>
