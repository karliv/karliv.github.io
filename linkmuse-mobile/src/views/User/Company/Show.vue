<template>
  <div class="page page_declaration">
    <div class="page-inner__container">
      <div class="page__header page__header_declaration">
        <div class="block block_declaration bt_none">
          <div class="row row_justify_between">
            <button class="btn btn_rounded btn_back" @click="_handleClickPreviousPage">
              <svg class="icon icon_back">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back"></use>
              </svg>
            </button>
            <div class="row">
              <template v-if="(isPublished === true)">
                <template v-if="(isCurrentUser === true)">
                  <router-link :to="{ name: 'users.companies.edit', params: { id } }" class="btn btn_rounded btn_edit mr_4">
                    <svg class="icon icon_edit">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit"></use>
                    </svg>
                  </router-link>
                </template>
                <social-share-popup :url="(APP_URL + href)" :title="title" :description="$truncate(this.$striptags(description), 50)">
                  <button class="btn btn_rounded">
                    <svg class="icon icon_share">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_share" />
                    </svg>
                  </button>
                </social-share-popup>
                <!--
                <button class="btn btn_rounded" @click="_handleClickActionSheet">
                  <svg class="icon icon_options">
                    <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options"></use>
                  </svg>
                </button>
                -->
              </template>
              <template v-if="(isPublished === false)">
                <router-link :to="{ name: 'users.companies.edit', params: { id } }" class="btn btn_rounded btn_edit">
                  <svg class="icon icon_edit">
                    <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit"></use>
                  </svg>
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>

      <template v-if="(isCurrentUser === true)">
        <template v-if="(isPublished === false)">
          <div class="lm-m-block-text-archival">
            Снято с публикации
          </div>
        </template>
      </template>

      <div class="page__body page-inner__body_declaration">
        <div class="block block_declaration">
          <div class="list list__title-info mb_3">
            <template v-if="(isPublished === true)">
              <div class="list__item casting__creation-date">
                {{ isToday(company.publishedAt) ? `Сегодня, ${$moment(company.publishedAt).format('HH:mm')}` : $moment(company.publishedAt).format('DD MMM YYYY, HH:mm') }}
              </div>
            </template>
          </div>

          <router-link tag="div" :to="{ name: 'user.show', params: { username } }" class="row align_center">
            <div class="avatar-container row mr_5">
              <img :src="avatar" :alt="name" class="d-img">
            </div>

            <div class="row w_100">
              <div class="m-text_normal">
                <div class="d-row" style="margin-bottom: 2px">
                  <div class="heading heading_h4 mb_0">
                    {{ name }}

                    <template v-if="isCertifiedUser">
                      <svg class="icon icon_size_16 ml_1" style="vertical-align: middle;">
                        <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
                      </svg>
                    </template>
                  </div>
                </div>

                <div class="color_gray-1 mb_2">
                  <span>{{ city ? city.text + ', ' : 'Город не указан, ' }}</span>

                  <template v-if="(age)">
                    <span>{{ $pluralize(age, ['год', 'года', 'лет']) }}</span>
                  </template>
                </div>

                <div class="m-text_bold color_main">Перейти в профиль</div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="block block_declaration">
          <div>
            <div class="page-inner__label-title mb_1">Компания</div>
            <div class="m-text_bold">{{ companyName }}</div>
          </div>

          <div class="mt_6">
            <div class="page-inner__label-title mb_1">Стоимость работы</div>
            <div class="m-text_bold">
              <template v-if="(hasRate === true)">
                от {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
              </template>
              <template v-else-if="(hasRate === false)">Без гонорара</template>
            </div>
          </div>
        </div>

        <div class="block block_declaration">
          <template v-if="has(anketa, 'functions')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Функции</div>
              <div class="m-text_bold">{{ anketa['functions'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'other')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Другое</div>
              <div class="m-text_bold">{{ anketa['other'] }}</div>
            </div>
          </template>
        </div>

        <template v-if="hasParticipationInProjects">
          <div class="block block_declaration">
            <template v-for="item in participationInProjects">
              <div class="mt_6">
                <div class="page-inner__label-title">Проект</div>
                <div class="m-text_bold mt_1">{{ item['project-name'] }}</div>
                <div class="m-text_normal mt_1">{{ item.description }}</div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="(hasContacts === true)">
          <div class="block block_declaration">
            <template v-if="(hideContacts === true)">
              <div class="section_contacts_action">
                <span class="m-text_bold">Узнайте контакты, используя «Показать контакты»</span>
                <button @click="_handleShowContacts" class="btn btn_primary">Показать контакты</button>
              </div>
            </template>
            <template v-else>
              <template v-if="(vk)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Вконтакте</div>
                  <div class="m-text_bold mt_1">
                    <a class="fw_600 color_gray-1" :href="`https://vk.com/${ getPartSocialUrl(vk, 'vk.com') }`" target="_blank">{{ vk }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(instagram)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Instagram</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://instagram.com/${ getPartSocialUrl(instagram, 'instagram.com') }`" target="_blank">{{ instagram }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(facebook)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Facebook</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://facebook.com/${ getPartSocialUrl(getPartSocialUrl(facebook, 'facebook.com'), 'fb.com') }`" target="_blank">{{ facebook }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(youtube)">
                <div class="mt_6">
                  <div class="page-inner__label-title">YouTube</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://youtube.com/${ getPartSocialUrl(youtube, 'youtube.com') }`" target="_blank">{{ youtube }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(telegram)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Сайт</div>
                  <div class="m-text_bold mt_1">
                    <a :href="`tg://resolve?domain=${ telegram }`" target="_self" class="color_gray-1">{{ telegram }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(whatsapp)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Whatsapp</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`whatsapp://send?phone=${ whatsapp }`" target="_self">{{ whatsapp }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(viber)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Viber</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`viber://chat?number=${ viber }`" target="_self">{{ viber }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(email)">
                <div class="mt_6">
                  <div class="page-inner__label-title">E-mail</div>
                  <div class="m-text_bold mt_1" v-html="$anchorme(email)"></div>
                </div>
              </template>

              <template v-if="(site)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Сайт</div>
                  <div class="m-text_bold mt_1" v-html="$anchorme(site)"></div>
                </div>
              </template>
            </template>
          </div>
        </template>
      </div>
    </div>

    <template v-if="(isCurrentUser === false)">
      <div class="page__footer page__footer_declaration">
        <div class="page__block_declaration">
          <div class="row row_justify_between">
            <template v-if="phone">
              <button class="btn btn_round btn_primary" @click="_handleClickMessage">
                <svg class="icon icon_size_16 icon_fill_white">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_chat"></use>
                </svg>
              </button>
              <a :href="`tel:${phone}`" class="btn btn_primary w_100 max-w_272px ml_9" @click="_handleClickCallUser">
                Позвонить
              </a>
            </template>
            <template v-else-if="!phone">
              <button class="btn btn_primary w_100" @click="_handleClickMessage">Написать</button>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  const APP_URL = process.env.APP_URL

  import { mapGetters, mapActions } from 'vuex'
  import { has, AVATAR, getPartSocialUrl } from '@utils'

  export default {
    name: 'ShowCompany',
    metaInfo () {
      return {
        title: this.title
      }
    },
    async asyncData ({ store, route }) {
      const { id } = route.params
      await store.dispatch('user/company/getCompanyById', { id: Number(id) })
    },
    data () {
      return {
        has, getPartSocialUrl,
        APP_URL,
        hideContacts: true
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        error: 'user/company/getCompanyError',
        loading: 'user/company/getCompanyLoading',
        company: 'user/company/getCompanyData',
      }),
      id () {
        const { params: { id } } = this.$route
        return id
      },
      href () {
        let { id } = this.company
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'users.companies.show', params: { id }, query })
        return href
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.author.id)
      },
      title () {
        return `${this.name} | ${this.companyName}`
      },
      description () {
        return `${this.name}`
      },
      author () {
        const { user } = this.company
        return user
      },
      username () {
        const { username } = this.author
        return username
      },
      name () {
        return has(this.author, 'name') ? this.author.name : null
      },
      isCertifiedUser () {
        return this.author.isCertifiedUser || false
      },
      avatar () {
        if (this.author && has(this.author, 'avatar.84x84')) {
          const { avatar: { '84x84': image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      originalAvatar () {
        if (this.author && has(this.author, 'avatar.original')) {
          const { avatar: { original : image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      companyNode () {
        const { company } = this.company
        return company
      },
      companyName () {
        const { company: { text } } = this.company
        return text
      },
      anketa () {
        const { anketa } = this.company
        return anketa
      },
      hasParticipationInProjects () {
        return has(this.anketa, 'participation-in-projects')
      },
      participationInProjects () {
        return this.anketa['participation-in-projects']
      },
      phone () {
        return (has(this.author, 'contacts.phone') && this.author['contacts']['phone']) ? this.author['contacts']['phone'] : null
      },
      email () {
        return (has(this.author, 'contacts.email') && this.author['contacts']['email']) ? this.author['contacts']['email'] : null
      },
      site () {
        return (has(this.author, 'contacts.site') && this.author['contacts']['site']) ? this.author['contacts']['site'] : null
      },
      telegram () {
        return (has(this.author, 'contacts.telegram') && this.author['contacts']['telegram']) ? this.author['contacts']['telegram'] : null
      },
      whatsapp () {
        return (has(this.author, 'contacts.whatsapp') && this.author['contacts']['whatsapp']) ? this.author['contacts']['whatsapp'] : null
      },
      viber () {
        return (has(this.author, 'contacts.viber') && this.author['contacts']['viber']) ? this.author['contacts']['viber'] : null
      },
      instagram () {
        return (has(this.author, 'contacts.instagram') && this.author['contacts']['instagram']) ? this.author['contacts']['instagram'] : null
      },
      facebook () {
        return (has(this.author, 'contacts.facebook') && this.author['contacts']['facebook']) ? this.author['contacts']['facebook'] : null
      },
      youtube () {
        return (has(this.author, 'contacts.youtube') && this.author['contacts']['youtube']) ? this.author['contacts']['youtube'] : null
      },
      vk () {
        return (has(this.author, 'contacts.vk') && this.author['contacts']['vk']) ? this.author['contacts']['vk'] : null
      },
      hasContacts () {
        return Boolean((has(this.author, 'contacts') && Object.keys(this._.omit(this.author.contacts, ['phone'])).length))
      },
      hasRate () {
        return has(this.anketa, 'rate')
      },
      rate () {
        return this.anketa['rate'][0]
      },
      isPublished () {
        return Boolean(this.company.isPublished)
      },
      city () {
        return has(this.author, 'city.id') ? this.author.city : null
      },
      age () {
        return has(this.author, 'age') ? this.author.age : null
      },
    },
    mounted () {
      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false
      }
    },
    methods: {
      ...mapActions({
        setFieldCompanyData: 'user/company/setFieldCompanyData'
      }),
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'users.companies.index' })
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'show_contancts' })
      },
      _handleClickActionSheet () {

      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()

        this.$gtm.trackEvent({ event: 'company_write_message' })
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
      }
    }
  }
</script>

<style scoped>

</style>
