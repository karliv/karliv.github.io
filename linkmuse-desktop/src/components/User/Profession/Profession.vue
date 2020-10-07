<template>
  <div :class="['d-card', 'd-card-np', { 'd-card_premium': (isCatalogPage === true && isFasten === true) }]">
    <template v-if="(isCatalogPage === true)">
      <router-link :to="{ name: 'users.professions.show', params: { id } }" :class="['section', { 'opacity_64' : (isPublished === false) }]">
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
          <div :class="['d-card__type_casting', 'color_main', { 'color_gray-3' : isPublished === false }]">
            <template v-if="(isCatalogPage === true)">{{ professionNode['text'] }}</template>
            <template v-if="(isCatalogPage === false)">
              <template v-if="(isCurrentUser === true)">
                {{ isPublished ? 'опубликовано' : 'снято с публикации' }}
              </template>
              <template v-if="(isCurrentUser === false)">{{ professionNode['group'] }}</template>
            </template>
          </div>

          <template>
            <template v-if="(isFasten === true)">
              <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К профессии была применена опция «Премиум-размещение»'">
                <div class="casting__option casting__option_premium">
                  <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                  </svg>
                  Премиум
                </div>
              </tooltip>
            </template>
            <template v-if="(isFasten === false && profession.publishedAt)">
              <div class="d-card__date_casting-creation">
                {{ isToday(profession.publishedAt) ? 'Сегодня' : $moment(profession.publishedAt).format('DD MMM YYYY') }}
                <span>, {{ $moment(profession.publishedAt).format('HH:mm') }}</span>
              </div>
            </template>
          </template>
        </div>
        <router-link :to="{ name: 'users.professions.show', params: { id } }" :class="[{ 'opacity_64' : (isPublished === false) }]">
          <div class="d-text_bold align-center mb_2">
            <template v-if="(isCatalogPage === true)">{{ name }}</template>
            <template v-if="(isCatalogPage === false)">{{ professionNode['text'] }}</template>
            <template v-if="(isCertifiedUser === true && isCatalogPage === true)">
              <tooltip :class="['align-center', 'tooltip_small']" effect="scale" placement="right" :content="'Пройдена процедура верификации'">
                <svg class="d-icon d-icon_size_16 ml_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification"/>
                </svg>
              </tooltip>
            </template>
          </div>

          <div class="d-card__list d-card__list_casting-parameters mb_2">
            <div>{{ city ? city.text : 'Город не указан' }}</div>

            <template v-if="(age)">
              <div>{{ $pluralize(age, ['год', 'года', 'лет']) }}</div>
            </template>
          </div>

          <div class="d-text_semi-bold mb_4">
            <template v-if="(hasRate === true)">
              {{ $t('unified-profile.professionals.from') }} {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
            </template>
            <template v-else-if="(hasRate === false)">
              {{ $t('unified-profile.professionals.by-agreement') }}
            </template>
          </div>

        </router-link>
        <div class="d-row w_100 justify_between">
          <div class="d-column w_auto">
            <div class="d-row">
              <template v-if="(phone && isPublished === true && isCurrentUser === false)">
                <contact-phone-button class="mr_4 min-w_178px" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
              </template>

              <template v-if="(isCurrentUser === false)">
                <button class="d-btn d-btn_outline mr_4" @click="_handleClickMessage">{{ $t('unified-profile.professionals.write') }}</button>
              </template>

              <template v-else-if="(isCurrentUser === true)">
                <template v-if="(isPublished === false)">
                  <button class="d-btn d-btn_primary mr_4" @click="_handleClickPublishProfession">Опубликовать</button>
                </template>
                <router-link :to="{ name: 'users.professions.edit', params: { id } }" class="d-btn d-btn_outline mr_4">
                  Редактировать
                </router-link>
              </template>
            </div>
          </div>
          <div class="d-column w_auto z-index_3">
            <div class="d-row">
              <template v-if="(isCurrentUser === false || isCatalogPage === true)">
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

              <template v-else-if="(isCurrentUser === true)">
                <more-actions position="top" :hover="true" :class="[ 'd-btn_secondary_filled']">
                  <a class="list__item" href="javascript:void(0)" @click="_handleClickDestroyProfession">Удалить</a>
                  <template v-if="(isPublished === true)">
                    <a class="list__item" href="javascript:void(0)" @click="_handleClickUnPublishProfession">Снять с публикации</a>
                  </template>
                </more-actions>
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
        if (this.author && has( this.author, 'avatar.183x183')) {
          const { avatar: { '183x183': image } } = this.author
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

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickPublishProfession () {
        this._handlePublishProfession()
      },
      _handlePublishProfession () {
        return new Promise((resolve, reject) => {
          let { id } = this.profession

          this.$emit('changeState', { id, key: 'isPublished', value: true })

          this.$api.post(`api/v2/users/professions/${id}/publish`).then((response) => {
            const { data } = response
            this.$gtm.trackEvent({ event: 'publish_profession' })
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$emit('changeState', { id, key: 'isPublished', value: false })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error publish profession')
          })
        })
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      },
      _handleClickDestroyProfession () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Все ваши данные в этой профессии будут удалены безвозвратно!'
        }).then(() => {
          this._handleDestroyProfession()
        }).catch(() => {})
      },
      _handleDestroyProfession () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.profession

          this.$api.delete(`api/v2/users/professions/${id}`).then((response) => {
            const { data } = response
            loader.hide()
            this.$emit('destroy', id)
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error destroy profession')
          })
        })
      },
      _handleClickUnPublishProfession () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять профессию с публикации?'
        }).then(() => {
          this._handleUnPublishProfession()
        }).catch(() => {})
      },
      _handleUnPublishProfession () {
        return new Promise((resolve, reject) => {
          let { id } = this.profession

          this.$emit('changeState', { id, key: 'isPublished', value: false })

          this.$api.post(`api/v2/users/professions/${id}/unpublish`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$emit('changeState', { id, key: 'isPublished', value: true })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error unpublish profession')
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
