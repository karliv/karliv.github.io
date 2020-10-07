<template>
  <div class="page_declaration_creating">
    <template v-if="company">
      <template v-if="(isCurrentUser === true)">
        <template v-if="(isPublished === false)">
          <div class="casting__status casting__status_draft w_100"><span>Снято с публикации</span></div>
        </template>
      </template>
      <div class="d-row justify_center pt_12">
        <div class="page__body page__body_declaration_creating_second">
          <div class="section_declaration_creating section_declaration_creating_big bt_none pt_0">
            <div class="d-row mb_4">
              <ul class="d-breadcrumbs">
                <li class="d-breadcrumbs__item"><router-link :to="{ name: 'user.show', params: { username } }">{{ name }}</router-link></li>
                <li class="d-breadcrumbs__item"><span>{{ companyNode['text'] }}</span></li>
              </ul>
            </div>

            <router-link :to="{ name: 'user.show', params: { username } }" class="d-row">
              <div class="avatar-container mr_12">
                <img :src="avatar" :alt="name" class="d-img">
              </div>

              <div class="column justify_center color_gray-1">
                <div class="d-row mb_1">
                  <div class="heading heading_h2 mb_0">{{ name }}</div>
                </div>

                <div class="mb_3">
                  <span>{{ city ? city.text + ', ' : 'Город не указан, ' }}</span>

                  <template v-if="(age)">
                    <span>{{ $pluralize(age, ['года', 'лет', 'лет']) }}</span>
                  </template>
                </div>

                <span class="d-link_back">
                    Перейти в профиль
                  </span>
              </div>
            </router-link>
          </div>
          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="d-row">
              <div class="label__title">Компания</div>
              <div class="d-text_bold">{{ companyName }}</div>
            </div>

            <template v-if="has(anketa, 'functions')">
              <div class="d-row mt_4">
                <div class="label__title">Функции</div>
                <div class="d-text_bold">{{ anketa['functions'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'other')">
              <div class="d-row mt_4">
                <div class="label__title">Другое</div>
                <div class="d-text_bold">{{ anketa['other'] }}</div>
              </div>
            </template>
          </div>
          <template v-if="hasParticipationInProjects">
            <div class="section_declaration_creating section_declaration_creating_big">
              <template v-for="(item, index) in participationInProjects">
                <div :class="['d-row', { 'mt_6' : index >= 1, '' : index === 0 }]" :key="item.id">
                  <div class="label__title">Проект</div>
                  <div>
                    <div class="d-text_bold">{{ item['project-name'] }}</div>
                    <div class="d-text_normal mt_1" v-if="item.description">{{ item.description }}</div>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="(hasContacts === true)">
            <div class="section_casting section_casting_big">
              <template v-if="(hideContacts === true)">
                <div class="d-row">
                  <div class="min-w_157px mr_3">Контакты</div>
                  <div class="fw_600 color_gray-1">
                    <div class="section_contacts_action">
                      <span>Для просмотра нажмите «Показать контакты»</span>
                      <button @click="_handleShowContacts" class="d-btn d-btn_primary">Показать контакты</button>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <template v-if="(telegram)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Telegram</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`tg://resolve?domain=${ telegram }`" target="_self">{{ telegram }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(whatsapp)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Whatsapp</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`whatsapp://send?phone=${ whatsapp }`" target="_self">{{ whatsapp }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(viber)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Viber</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`viber://chat?number=${ viber }`" target="_self">{{ viber }}</a>
                    </div>
                  </div>
                </template>

                <template v-if="(vk)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Вконтакте</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.vk.com/${ vk }`" target="_blank">{{ vk }}</a>
                    </div>
                  </div>
                </template>

                <template v-if="(instagram)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Instagram</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.instagram.com/${ instagram }`" target="_blank">{{ instagram }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(facebook)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Facebook</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.facebook.com/${ facebook }`" target="_blank">{{ facebook }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(youtube)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">YouTube</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.youtube.com/${ youtube }`" target="_blank">{{ youtube }}</a>
                    </div>
                  </div>
                </template>

                <template v-if="(email)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">E-mail</div>
                    <div class="fw_600 color_gray-1" v-html="$anchorme(email)"></div>
                  </div>
                </template>
                <template v-if="(site)">
                  <div class="d-row mt_4">
                    <div class="min-w_157px mr_3">Сайт</div>
                    <div class="fw_600 color_gray-1" v-html="$anchorme(site)"></div>
                  </div>
                </template>

              </template>
            </div>
          </template>
          <template v-if="(isCurrentUser === false || (isCurrentUser === true && (isPublished )))">
            <div class="section_casting section_casting_big">
              <div class="d-row">
                <div class="d-row w_100 lm-flex-end">
                  <div class="section_casting_small">
                    <template v-if="(isPublished === true)">
                      <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" position="top" :title="title" :description="$truncate(this.$striptags(description), 50)" class="d-btn_round mr_4 flex_1">
                        <svg class="d-icon d-icon_size_sm">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                        </svg>
                      </social-share-updated>
                    </template>
                    <template v-if="(isCurrentUser === false)">
                      <button class="d-btn d-btn_secondary_filled" @click="_handleClickAbuseCompany">Пожаловаться</button>
                    </template>
                    <template v-if="(isCurrentUser === true && (isPublished ))">
                      <button class="d-btn d-btn_secondary_filled" @click="_handleClickUnPublishCompany">снять с публикации</button>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="sidebar page__sidebar page__sidebar_declaration_creating">
          <div class="sidebar__content" v-sticky="{ zIndex: 10, stickyTop: 104 }">
            <div class="section_casting section_casting_big bt_none pt_0">

              <div class="d-list d-list_casting-info">
                <template v-if="isPublished">
                  <div class="d-list__item">
                    <div class="casting__creation-date">{{ isToday(company.publishedAt) ? `Сегодня, ${$moment(company.publishedAt).format('HH:mm')}` : $moment(company.publishedAt).format('DD MMM YYYY, HH:mm') }}</div>
                  </div>
                </template>
              </div>

              <div class="d-column">
                <div class="heading heading_h2 mb_0">
                  <template v-if="(hasRate === true)">
                    от {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
                  </template>
                  <template v-else-if="(hasRate === false)">Без гонорара</template>
                </div>

                <div class="mt_12">
                  <template v-if="( phone )">
                    <contact-phone-button class="mb_3 w_100" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
                  </template>

                  <template v-if="(isCurrentUser)">
                    <template v-if="(isPublished === false)">
                      <button :class="['d-btn', 'd-btn_primary', 'w_100', 'mb_3']" @click="_handleClickPublishCompany">Опубликовать</button>
                    </template>

                    <template v-if="(isPublished === true)">
                      <button :class="['d-btn', 'd-btn_primary', 'w_100', 'mb_3']" @click="_handleClickUnPublishCompany">Снять с публикации</button>
                    </template>

                    <router-link :to="{ name: 'users.companies.edit', params: { id } }" class="d-btn d-btn_outline w_100">Редактировать</router-link>
                  </template>

                  <template v-if="(isCurrentUser === false)">
                    <button :class="['d-btn', 'd-btn_outline', 'w_100']" @click="_handleClickMessage">Написать сообщение</button>
                  </template>

                  <template v-if="(isAuthorized && isCurrentUser === false)">
                    <button class="d-btn d-btn_secondary_filled w_100 mt_6" @click="_handleClickAddToFolder">в подборку</button>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import { has, AVATAR } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  const APP_URL = process.env.APP_URL

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
        has,
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
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'show_contancts' })
      },
      _handleClickAbuseCompany () {
        if (this.isAuthorized === false) {
          this._handleClickAbuseWithoutAuthorized()
        } else this._handleAbuseCompany()
      },
      _handleClickAbuseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleAbuseCompany () {
        let { id } = this.company
        this.$root.$emit('open-modal-abuse-create', { id, type: 'company' })
      },
      _handleClickPublishCompany () {
        this._handlePublishCompany()
      },
      _handlePublishCompany () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.company
          this.$api.post(`api/v2/users/companies/${id}/publish`).then((response) => {
            const { data } = response
            this.setFieldCompanyData({ key: 'isPublished', value: true })
            this.$gtm.trackEvent({ event: 'publish_company' })

            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error publish company')
          })
        })
      },
      _handleClickUnPublishCompany () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять компанию с публикации?'
        }).then(() => {
          this._handleUnPublishCompany()
        }).catch(() => {})
      },
      _handleUnPublishCompany () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.company
          this.$api.post(`api/v2/users/companies/${id}/unpublish`).then((response) => {
            const { data } = response
            this.setFieldCompanyData({ key: 'isPublished', value: false })

            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error unpublish company')
          })
        })
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
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      }
    }
  }
</script>

<style scoped>

</style>
