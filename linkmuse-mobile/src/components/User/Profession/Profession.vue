<template>
  <div :class="['card', 'declaration__card', { 'card_premium': (isCatalogPage === true && isFasten === true) }]">
    <div class="row mb_3">
      <template v-if="(isCatalogPage === true)">
        <div class="profile-card__avatar" >
          <img :src="avatar" :alt="name">
        </div>
      </template>

      <div :class="['column', { 'ml_4': (isCatalogPage === true) }]">
        <div class="row justify_between align_center">
            <span :class="['declaration__type', { 'color_gray-3' : (isPublished === false) }]">
              <template v-if="(isCatalogPage === true)">{{ professionNode['text'] }}</template>
              <template v-if="(isCatalogPage === false)">
                <template v-if="(isCurrentUser === true)">
                  {{ isPublished ? $t('unified-profile.profile.published') : 'снято с публикации' }}
                </template>
                <template v-if="(isCurrentUser === false)">{{ professionNode['group'] }}</template>
              </template>
            </span>

          <template>
            <template v-if="(isAuthorized && isCurrentUser === true && isCatalogPage === false)">
              <button class="btn btn_options" @click="_handleClickActionSheet">
                <svg class="icon icon_size_16">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
                </svg>
              </button>
            </template>
            <template v-if="(isAuthorized && isCurrentUser === false)">
              <button class="btn btn_options" @click="_handleClickAddToFolder">
                <svg :class="['icon', 'icon_size_16', { 'icon_fill_red': inFolder }]">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-heart" />
                </svg>
              </button>
            </template>
          </template>
        </div>

        <router-link :to="{ name: 'users.professions.show', params: { id } }" class="profile-card__description">
          <div class="row align_center">
              <span class="m-text_bold color_gray-1 ">
                <template v-if="(isCatalogPage === true)">{{ name }}</template>
                <template v-if="(isCatalogPage === false)">{{ professionNode['text'] }}</template>
              </span>
            <template v-if="(isCertifiedUser === true && isCatalogPage === true)">
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

          <div class="m-text_bold-2 color_gray-1 row mt_2">
            <template v-if="(hasRate === true)">
              От {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
            </template>
            <template v-else-if="(hasRate === false)">
              {{ $t('unified-profile.professionals.by-agreement') }}
            </template>
          </div>
        </router-link>
      </div>
    </div>

    <div class="section declaration__section profile-card__buttons justify_evenly align_center">
      <template v-if="isCurrentUser">
        <template v-if="(isPublished === true)">
          <router-link :to="{ name: 'users.professions.edit', params: { id } }" class="btn">{{ $t('unified-profile.profile.edit') }}</router-link>
        </template>
        <template v-if="(isPublished === false)">
          <a href="javascript:void(0)" class="btn" @click="_handleClickPublishProfession">Опубликовать</a>
        </template>
      </template>
      <template v-else>
        <template v-if="phone">
          <a :href="`tel:${phone}`" class="btn" @click="_handleClickCallUser">{{ $t('unified-profile.professionals.call') }}</a>
          <span class="vertical-dash"></span>
        </template>
        <a href="javascript:void(0)" class="btn" @click="_handleClickMessage">{{ $t('unified-profile.professionals.write') }}</a>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, AVATAR } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

  const APP_URL = process.env.APP_URL

  export default {
    props: {
      profession: {
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
        has,
        APP_URL
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized'
      }),
      id () {
        return this.profession.id
      },
      href () {
        let { id } = this.profession
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'users.professions.show', params: { id }, query })
        return href
      },
      author () {
        return this.profession.user
      },
      name () {
        return has(this.author, 'name') ? this.author.name : null
      },
      avatar () {
        if (this.author && has( this.author, 'avatar.84x84')) {
          const { avatar: { '84x84': image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.profession.user.id)
      },
      isPublished () {
        return this.profession.isPublished
      },
      professionNode () {
        return this.profession.profession
      },
      isCertifiedUser () {
        return this.author.isCertifiedUser || false
      },
      inFolder () {
        return this.author.inFolder || false
      },
      city () {
        return has(this.author, 'city.id') ? this.author.city : null
      },
      age () {
        return has(this.author, 'age') ? this.author.age : null
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
      phone () {
        return (has(this.author, 'contacts.phone') && this.author['contacts']['phone']) ? this.author['contacts']['phone'] : null
      },
      isFasten () {
        return this.profession.isFasten || false
      }
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
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'call_user_number' })
      },
      _handleClickPublishProfession () {
        this._handlePublishProfession()
      },
      _handlePublishProfession () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.profession
          this.$api.post(`api/v2/users/professions/${id}/publish`).then((response) => {
            const { data } = response
            this.$emit('changeState', { id, key: 'isPublished', value: true })
            this.$gtm.trackEvent({ event: 'publish_profession' })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error publish profession')
          })
        })
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
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
