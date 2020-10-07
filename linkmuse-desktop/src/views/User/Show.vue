<template>
  <div class="page page-profile page_feed lm-content vs-wrapper">

    <template v-if="error">
      <span>Пользователь не найден.</span>
    </template>


    <template v-else-if="(error === false)">
    <!-- page content -->
    <div class="page__content">
      <div class="page__body page__body_feed">
        <template v-if="requestPartners['data'] && requestPartners['data'].length">
          <div class="d-card mb_4">
            <div :class="['d-row', {'mt_4': index >= 1}]" v-for="(partner, index) in requestPartners['data']">
              <router-link :to="{ name: 'user.show', params: { username: partner.username }}" class="d-column w_auto mr_4">
                <img :src="partner.avatar['84x84']" :alt="partner.name" class="d-img d-img_size_40 border-radius_8">
              </router-link>

              <div class="flex-beetwen-center w_100">
                <div class="d-column w_100">
                  <div class="d-row mb_1">
                    <router-link :to="{ name: 'user.show', params: { username: partner.username } }" :title="partner.name" class="d-link_back">
                      {{ partner.name }}&nbsp;
                    </router-link>

                    <div class="notification__text cursor_pointer">предлагает вам стать коллегой</div>
                  </div>
                  <div class="d-card__date_casting-creation">
                    <!--        Время получения проедложения          -->
                  </div>
                </div>

                <div class="d-row w_auto">
                  <button class="d-btn d-btn_primary mr_2" @click="_handleClickResolvePartner(partner.id)">Принять</button>
                  <button class="d-btn d-btn_secondary_filled" @click="_handleClickRejectPartner(partner.id)">Отклонить</button>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- feed -->
        <div class="d-feed">

          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar">

            <div class="sidebar__profile column">
              <div class="sidebar__profile--avatar" :style="{ backgroundImage: `url(${avatar})` }">
                <div class="sidebar__profile--avatar_stub"></div>
                <div class="sidebar__profile--description">
                  <h5>
                    {{ name }}
                    <template v-if="(isCertifiedUser === true)">
                      <tooltip class="tooltip_small ml_1" style="display: inline-flex; vertical-align: middle;" effect="scale" placement="right" :content="'Пройдена процедура верификации'">
                        <svg class="d-icon d-icon_size_16">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification" />
                        </svg>
                      </tooltip>
                    </template>
                  </h5>

                  <span>
                    <template v-if="city">{{ city.text }},</template>
                    <template v-if="(age)">{{ $pluralize(age, ['год', 'года', 'лет']) }}</template>
                  </span>
                </div>
              </div>

              <div class="sidebar__profile--settings">
                <template v-if="(isCurrentUser === true)">
                  <router-link :to="{ name: 'settings.index' }" class="d-btn d-btn_secondary_filled w_100">настройки</router-link>
                </template>
                <template v-if="(isCurrentUser === false)">
                  <div class="d-column">
                    <div class="d-row">
                      <div class="d-row mr_4">
                        <button class="d-btn d-btn_primary w_100 mr_4" @click="_handleClickMessage">{{ $t('unified-profile.professionals-page.write') }}</button>
                      </div>
                      <div class="d-row w_auto">
                        <more-actions :hover="true" position="top" class="d-btn_primary">
                          <template v-if="(isAdmin && !isCurrentUser)">
                            <a href="javascript:void(0)" class="list__item list__item_border mb_3" @click="_handleClickAuthOnUser">
                              <span>Войти как Админ</span>
                            </a>
                          </template>

                          <template v-if="(isAuthorized)">
                            <a href="javascript:void(0)" class="list__item" @click="_handleClickAddToColleagues" v-if="(colleague === 0)"><span>{{ $t('unified-profile.professionals-page.add-to-colleagues') }}</span></a>
                            <a href="javascript:void(0)" class="list__item list__item_red" @click="_handleClickDestroyToColleagues" v-if="(colleague === 1)"><span>Удалить из коллег</span></a>
                            <a href="javascript:void(0)" class="list__item list__item_red" @click="_handleClickDestroyToColleagues" v-if="(colleague === -1)"><span>Отменить запрос в коллеги</span></a>

                            <a href="javascript:void(0)" :class="['list__item', 'list__item_border', 'mb_3', { 'list__item_red': (follow !== 0) }]" @click="_handleClickChangeFollow">
                              <span v-if="(follow === -1)">Отменить запрос на подписку</span>
                              <span v-if="(follow === 0)">{{ $t('unified-profile.professionals-page.subscribe') }}</span>
                              <span v-if="(follow === 1)">Отписаться</span>
                            </a>
                          </template>
                          <a href="javascript:void(0)" class="list__item" @click="_handleClickAbuseUser"><span>{{ $t('unified-profile.professionals-page.report') }}</span></a>
                        </more-actions>
                      </div>
                    </div>
                    <template v-if="( phone )">
                      <div class="d-row mt_3">
                        <contact-phone-button class="w_100 d-btn_outline" :phone="phone" :hovered="false" event="user_show_number"></contact-phone-button>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </div>

            <template v-if="(isCurrentUser && !aboutMe)">
              <router-link :to="{ name: 'settings.index' }" tag="div" class="d-card mt_4" style="cursor: text">
                <div class="sidebar-menu">
                  <span href="javascript:void(0)" class="sidebar-menu__link">
                    Изменить описание
                  </span>
                </div>
              </router-link>
            </template>

            <template v-else-if="aboutMe">
              <div class="d-card mt_4">
                <div class="sidebar-menu">
                  <div class="d-row mb_3">
                    <div class="page-profile__text_1">Обо мне</div>
                  </div>
                  <div class="d-row">
                    <div class="sidebar-menu__text">{{ collapse['aboutMe'] ? aboutMe : $truncate(aboutMe, 100) }}</div>
                  </div>
                  <template v-if="(aboutMe && aboutMe.length > 100)">
                    <div class="d-row">
                      <div class="d-row align_center mt_3" @click="_handleClickToggleCollapse('aboutMe')" :style="{ cursor: 'pointer' }">
                        <div class="page-profile__text_1 color_main mr_1">{{ collapse['aboutMe'] ? 'Скрыть' : 'Читать полностью' }}</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (collapse['aboutMe']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                        </svg>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>

            <div class="d-card d-card__info mt_4">
              <div class="sidebar-menu">
                <template v-if="(isAuthorized && isCurrentUser)">
                  <router-link :to="{ name: 'folders.index' }" class="d-link">
                    <div class="d-row">
                      <div class="page-profile__text_1">Мои подборки</div>
                      <span class="page-profile__text_2">{{ counters['folders'] }}</span>
                    </div>
                  </router-link>
                </template>

                <router-link :to="{ name: 'board.castings.user', params: { username } }" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">{{ (isAuthorized && isCurrentUser) ? 'Мои объявления' : $t('unified-profile.professionals-page.ads') }}</div>
                    <span class="page-profile__text_2">{{ counters['board'] }}</span>
                  </div>
                </router-link>

                <template v-if="(isAuthorized)">
                  <router-link :to="{ name: 'board.castings.responses.user', params: { username } }" class="d-link">
                    <div class="d-row">
                      <div class="page-profile__text_1">{{ (isAuthorized && isCurrentUser) ? 'Мои отклики' : $t('unified-profile.professionals-page.responses') }}</div>
                      <span class="page-profile__text_2">{{ counters['responses'] }}</span>
                    </div>
                  </router-link>
                </template>
              </div>
              <div class="sidebar-menu">
                <a href="javascript:void(0)" v-modal-link="{ name: 'partners.user', props: { username } }" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">{{ (isAuthorized && isCurrentUser) ? 'Мои коллеги' : $t('unified-profile.professionals-page.colleagues') }}</div>
                    <span class="page-profile__text_2">{{ counters['colleagues'] }}</span>
                  </div>
                </a>
                <a href="javascript:void(0)" v-modal-link="{ name: 'followers.user', props: { username } }" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">{{ (isAuthorized && isCurrentUser) ? 'Мои подписчики' : $t('unified-profile.professionals-page.followers') }}</div>
                    <span class="page-profile__text_2">{{ counters['followers'] | numeral('0a') }}</span>
                  </div>
                </a>
                <a href="javascript:void(0)" v-modal-link="{ name: 'following.user', props: { username } }" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">{{ (isAuthorized && isCurrentUser) ? 'Мои подписки' : $t('unified-profile.professionals-page.following') }}</div>
                    <span class="page-profile__text_2">{{ counters['following'] | numeral('0a') }}</span>
                  </div>
                </a>
              </div>

              <template v-if="hasContacts">
                <div class="sidebar-menu sidebar-dropdown-menu">
                  <template v-if="collapse['contacts']">
                    <div class="page-profile__text_1">Контакты</div>
                  </template>
                  <collapse v-model="collapse['contacts']">
                    <template v-if="hasSocialContacts">
                      <div class="sidebar-menu__item">
                        <template v-if="(has(contacts, 'instagram') && contacts['instagram'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Instagram:</span>
                            <a :href="`https://www.instagram.com/${ contacts['instagram'] }`" target="_blank" class="cropped-text color_main">{{ contacts['instagram'] }}</a>
                          </div>
                        </template>
                        <template v-if="(has(contacts, 'facebook') && contacts['facebook'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Facebook:</span>
                            <a :href="`https://www.facebook.com/${ contacts['facebook'] }`" target="_blank" class="cropped-text color_main">{{ contacts['facebook'] }}</a>
                          </div>
                        </template>
                        <template v-if="(has(contacts, 'youtube') && contacts['youtube'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">YouTube:</span>
                            <a :href="`https://www.youtube.com/${ contacts['youtube'] }`" target="_blank" class="cropped-text color_main">{{ contacts['youtube'] }}</a>
                          </div>
                        </template>
                        <template v-if="(has(contacts, 'vk') && contacts['vk'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Вконтакте:</span>
                            <a :href="`https://www.vk.com/${ contacts['vk'] }`" target="_blank" class="cropped-text color_main">{{ contacts['vk'] }}</a>
                          </div>
                        </template>
                      </div>
                    </template>
                    <template v-if="hasMessengerContacts">
                      <div class="sidebar-menu__item">
                        <template v-if="(has(contacts, 'telegram') && contacts['telegram'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Telegram:</span>
                            <a :href="`tg://resolve?domain=${ contacts['telegram'] }`" class="color_main">{{ contacts['telegram'] }}</a>
                          </div>
                        </template>
                        <template v-if="(has(contacts, 'whatsapp') && contacts['whatsapp'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Whatsapp:</span>
                            <a :href="`whatsapp://send?phone=${ contacts['whatsapp'] }`" class="color_main">{{ contacts['whatsapp'] }}</a>
                          </div>
                        </template>
                        <template v-if="(has(contacts, 'viber') && contacts['viber'])">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Viber:</span>
                            <a :href="`viber://chat?number=${ contacts['viber'] }`" class="color_main">{{ contacts['viber'] }}</a>
                          </div>
                        </template>
                      </div>
                    </template>
                    <template v-if="hasOtherContacts">
                      <div class="sidebar-menu__item">
                        <template v-if="(has(contacts, 'site') && contacts['site'] && siteUrl)">
                          <div class="sidebar-menu__contacts">
                            <span class="mr_1">Сайт:</span>
                            <span class="cropped-text" v-html="siteUrl"></span>
                          </div>
                        </template>
                      </div>
                    </template>
                  </collapse>

                  <div :class="['d-row', 'align_center', {'mt_3' : collapse['contacts']}]" @click="_handleClickToggleCollapse('contacts')" :style="{ cursor: 'pointer' }">
                    <template v-if="(collapse['contacts'] === false)">
                      <div class="page-profile__text_1 color_main mr_1" @click="_handleClickShowContacts">Показать контакты</div>
                    </template>
                    <template v-else-if="(collapse['contacts'] === true)">
                      <div class="page-profile__text_1 color_main mr_1">Скрыть</div>
                    </template>
                    <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', { rotate_180: (collapse['contacts']) }]">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                    </svg>
                  </div>
                </div>
              </template>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4">
            <template v-if="(isCurrentUser === false && hasProfessions === false && hasCompanies === false)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Информации нет</div>
                <div class="ta_center mb_4 color_gray-1">{{ name }} пока не заполнил<br> профиль полностью</div>
              </div>
            </template>

            <template v-if="(isCurrentUser || hasProfessions)">
              <div class="d-card mb_1" style="display: inline-flex">
                <div class="d-row">
                  <div class="page-profile__text_1">{{ isCurrentUser ? $t('unified-profile.no-profession.professions') : $t('unified-profile.professionals-page.professions') }}</div>
                  <span class="page-profile__text_2">{{ counters['professions'] }}</span>
                </div>
                <template v-if="isCurrentUser === true">
                  <div class="d-row w_auto">
                    <a href="javascript:void(0)" class="page-profile__text_1 color_main" @click="_handleClickCreateProfession">{{ $t('unified-profile.no-profession.add-new') }}</a>
                  </div>
                </template>
              </div>
              <div class="column">
                <template v-if="isEmptyProfessions">
                  <div class="d-card d-card_feed-plug">
                    <svg class="d-icon d-icon_size_64 fill_main mb_5">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                    </svg>
                    <div class="heading heading_h5">{{ $t('unified-profile.no-profession.no-profession') }}</div>
                    <template v-if="(isCurrentUser === true && isAuthorized === true)">
                      <div class="ta_center mb_4 color_gray-1">{{ $t('unified-profile.no-profession.start-work') }}<br> {{ $t('unified-profile.no-profession.add-new-profession') }}</div>
                      <a href="javascript:void(0)" class="d-btn d-btn_primary" @click="_handleClickCreateProfession">{{ $t('unified-profile.no-profession.add') }}</a>
                    </template>
                  </div>
                </template>

                <lm-loader v-if="loadingProfessions"></lm-loader>
                <profession-card :profession="profession" v-for="profession in professions['data']" :key="profession.id" @changeState="_handleChangeStateProfession" @destroy="_handleDestroyProfession" :isCatalogPage="false"></profession-card>
              </div>
            </template>
            <template v-if="((isCurrentUser || hasCompanies) && isRepresentative)">
              <div class="d-card mb_1" style="display: inline-flex">
                <div class="d-row">
                  <div class="page-profile__text_1">{{ isCurrentUser ? $t('unified-profile.no-company.my-companies') : 'Компании' }}</div>
                  <span class="page-profile__text_2">{{ counters['companies'] }}</span>
                </div>
                <template v-if="isCurrentUser === true">
                  <div class="d-row w_auto">
                    <a href="javascript:void(0)" class="page-profile__text_1 color_main" @click="_handleClickCreateCompany">{{ $t('unified-profile.no-company.add') }}</a>
                  </div>
                </template>
              </div>
              <div class="column">
                <template v-if="isEmptyCompanies">
                  <div class="d-card d-card_feed-plug">
                    <svg class="d-icon d-icon_size_64 fill_main mb_5">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                    </svg>
                    <div class="heading heading_h5">{{ $t('unified-profile.no-company.no-company') }}</div>
                    <template v-if="(isCurrentUser === true && isAuthorized === true)">
                      <div class="ta_center mb_4 color_gray-1">{{ $t('unified-profile.no-company.start') }}<br> {{ $t('unified-profile.no-company.add-new-company') }}</div>
                      <a href="javascript:void(0)" class="d-btn d-btn_primary" @click="_handleClickCreateCompany">{{ $t('unified-profile.no-company.add-button') }}</a>
                    </template>
                  </div>
                </template>

                <lm-loader v-if="loadingCompanies"></lm-loader>
                <company-card :company="company" v-for="company in companies['data']" :key="company.id" @changeState="_handleChangeStateCompany" @destroy="_handleDestroyCompany" :isCatalogPage="false"></company-card>
              </div>
            </template>
          </div> <!-- end of feed__body -->

        </div> <!-- end of feed -->
      </div>
    </div> <!-- end of page content -->
    </template>
  </div> <!-- end of page -->
</template>

<script>
  import { Collapse } from 'uiv'
  import { has, AVATAR } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import CompanyCard from '@components/User/Сompany/Сompany.vue'
  import ProfessionCard from '@components/User/Profession/Profession.vue'

  export default {
    components: { Collapse, ProfessionCard, CompanyCard },
    metaInfo () {
      return {
        title: (this.user) ? this.user.name : 'Ошибка'
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      await store.dispatch('user/getUserByUsername', {
        include: '',
        username: String(username)
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, url })
      })
    },
    data () {
      return {
        has,
        collapse: {
          aboutMe: false,
          contacts: false
        },
        professions: {
          data: [],
          total: 0,
          offset: 0,
          limit: 48,
          error: false,
          loading: false
        },
        companies: {
          data: [],
          total: 0,
          offset: 0,
          limit: 48,
          error: false,
          loading: false
        },
        requestPartners: {
          data: [],
          total: 0,
          offset: 0,
          limit: 48,
          error: false,
          loading: false
        }
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        error: 'user/getShowUserError',
        isAuthorized: 'auth/isAuthorized',
        loading: 'user/getShowUserLoading'
      }),
      isCurrentUser () {
        return (this.authUser && this.user && (this.user.id === this.authUser.id))
      },
      isCertifiedUser () {
        return this.user && this.user.isCertifiedUser ? this.user.isCertifiedUser : false
      },
      isAdmin () {
        return (this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true)
      },
      href () {
        let { username } = this.user

        const { href } = this.$router.resolve({ name: 'user.show', params: { username } })
        return href
      },
      username () {
        return has(this.user, 'username') ? this.user.username : null
      },
      name () {
        return has(this.user, 'name') ? this.user.name : null
      },
      avatar () {
        if (this.user && has( this.user, 'avatar.272x272')) {
          const { avatar: { '272x272': image } } = this.user
          return image || AVATAR
        } else return AVATAR
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
      follow () {
        return this.user.follow
      },
      colleague () {
        return this.user.colleague
      },
      aboutMe () {
        return has(this.user, 'aboutMe') ? this.user.aboutMe : null
      },
      counters () {
        return this.user.counters
      },
      hasProfessions () {
        return (has(this.counters, 'professions') && Boolean(this.counters.professions))
      },
      hasCompanies () {
        return (has(this.counters, 'professions') && Boolean(this.counters.companies))
      },
      hasContacts () {
        return Boolean((has(this.user, 'contacts') && Object.keys(this._.omit(this.user.contacts, ['phone'])).length))
      },
      contacts () {
        return this.user.contacts
      },
      hasSocialContacts () {
        return this.hasContacts
          && ((has(this.contacts, 'instagram') && this.contacts['instagram'])
          || (has(this.contacts, 'facebook') && this.contacts['facebook'])
          || (has(this.contacts, 'youtube') && this.contacts['youtube'])
          || (has(this.contacts, 'vk') && this.contacts['vk']))
      },
      hasMessengerContacts () {
        return this.hasContacts
          && ((has(this.contacts, 'telegram') && this.contacts['telegram'])
            || (has(this.contacts, 'whatsapp') && this.contacts['whatsapp'])
            || (has(this.contacts, 'viber') && this.contacts['viber']))
      },
      hasOtherContacts () {
        return this.hasContacts
          && ((has(this.contacts, 'site') && this.contacts['site']))
      },
      siteUrl () {
        if (has(this.contacts, 'site') && this.contacts['site']) {
          return this.$anchorme(this.contacts['site'], {
            attributes: [
              {
                name: "target",
                value: "_blank"
              },
              {
                name: "rel",
                value: "nofollow noopener"
              },
              {
                name: 'class',
                value: 'color_main'
              }
            ]
          })
        }
      },
      isEmptyProfessions () {
        return (this.counters['professions'] === 0)
      },
      loadingProfessions () {
        return this.professions.loading
      },
      isEmptyCompanies () {
        return (this.counters['companies'] === 0)
      },
      loadingCompanies () {
        return this.companies.loading
      },
      isRepresentative () {
        return has(this.user, 'representative') ? this.user.representative : false
      }
    },
    mounted () {
      if (this.isEmptyProfessions === false) {
        this._clearUserProfessions().then(() => {
          this._fetchUserProfessions()
        }).catch(() => {})
      }

      if (this.isEmptyCompanies === false && this.isRepresentative === true) {
        this._clearUserCompanies().then(() => {
          this._fetchUserCompanies()
        }).catch(() => {})
      }

      if (this.isCurrentUser) {
        this._clearReceivedRequestPartners().then(() => {
          this._fetchReceivedRequestPartners()
        }).catch(() => {})
      }
    },
    beforeRouteUpdate (to, from, next) {
      this._clearUserProfessions().then(() => {
        if (this.isEmptyProfessions === false) {
          this._fetchUserProfessions()
        }
      }).catch(() => {})

      this._clearUserCompanies().then(() => {
        if (this.isEmptyCompanies === false && this.isRepresentative === true) {
          this._fetchUserCompanies()
        }
      }).catch(() => {})

      this._clearReceivedRequestPartners().then(() => {
        if (this.isCurrentUser) {
          this._fetchReceivedRequestPartners()
        }
      })

      next()
    },
    methods: {
      _fetchUserProfessions () {
        this.professions.loading = true
        const { username } = this.$route.params

        const { offset, limit } = this.professions
        this.$api.get(`api/v2/users/${username}/professions`, { offset, limit }).then((response) => {
          let { data: { data, meta: { total, next } } } = response

          Object.assign(this.professions, {
            data,
            total,
            offset: next,
            error: false,
            loading: false
          })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.professions, { error: true, loading: false })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении профессий.' })

          throw new Error('Error fetch user professions')
        })
      },
      _clearUserProfessions () {
        return new Promise((resolve, reject) => {
          try {
            this.professions =  {
              data: [],
              total: 0,
              offset: 0,
              limit: 48,
              error: false,
              loading: false
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
            throw new Error(e)
          }
        })
      },
      _fetchUserCompanies () {
        this.companies.loading = true
        const { username } = this.$route.params

        const { offset, limit } = this.companies
        this.$api.get(`api/v2/users/${username}/companies`, { offset, limit }).then((response) => {
          let { data: { data, meta: { total, next } } } = response

          Object.assign(this.companies, {
            data,
            total,
            offset: next,
            error: false,
            loading: false
          })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.companies, { error: true, loading: false })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении компаний.' })

          throw new Error('Error fetch user companies')
        })
      },
      _clearUserCompanies () {
        return new Promise((resolve, reject) => {
          try {
            this.companies =  {
              data: [],
              total: 0,
              offset: 0,
              limit: 48,
              error: false,
              loading: false
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
            throw new Error(e)
          }
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
        let uid = this._.sortBy([ this.user.id, this.authUser.id ]).toString()

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickCreateProfession () {
        this.$modalRouter.push({ name: 'users.professions.create' })
      },
      _handleClickCreateCompany () {
        this.$modalRouter.push({ name: 'users.companies.create' })
      },
      _handleClickChangeFollow () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.post(`api/v1/follow`, { user_id: this.user.id }).then((response) => {
          const { data: { result } } = response
          this.$store.dispatch('user/setFieldShowUserData', { key: 'follow', value: result })

          let followers = this.user['counters']['followers']
          this.$store.dispatch('user/setFieldShowUserData', {
            key: 'user.counters.followers',
            value: (result === 0 ? followers - 1 : followers + 1)
          })

          this.$notify({ type: 'success', title: 'Успешно', text: (result === 1) ? 'Подписка оформлена.' : 'Подписка отменена.' })

          if (Boolean(result)) {
            this.$gtm.trackEvent({ event: 'subscribe' })
          }

          loader.hide()

        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error follow user')
        })
      },
      _handleClickAddToColleagues () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        const { id } = this.user

        this.$api.post(`api/v1/users/partners/${id}`).then((response) => {
          const { data } = response

          loader.hide()
          this.$gtm.trackEvent({ event: 'add_colleagues' })
          this.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: -1 })
        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error create partner')
        })
      },
      _handleClickDestroyToColleagues () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить пользователя из коллег?'
        }).then(() => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          this.destroyToColleagues().then(() => {
            loader.hide()
            this.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: 0 })
            this.$notify({ type: 'success', title: 'Успешно', text: 'Пользователь удален из коллег.' })
          }).catch(() => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }).catch(() => {})
      },
      destroyToColleagues () {
        return new Promise((resolve, reject) => {
          const { id } = this.user

          this.$api.delete(`api/v1/users/partners/${id}`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error
            reject && reject()
            throw new Error('Error destroy partner')
          })
        })
      },
      _handleClickAbuseUser () {
        if (this.isAuthorized === false) {
          this._handleClickAbuseWithoutAuthorized()
        } else this._handleAbuseUser()
      },
      _handleClickAbuseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleAbuseUser () {
        let { id } = this.user
        this.$root.$emit('open-modal-abuse-create', { id, type: 'user' })
      },
      _handleClickAuthOnUser () {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.post(`api/admin/v1/auth/${this.user.id}`).then((response) => {
          loader.hide()

          this.$notify({ type: 'success', title: 'Успешно', text: 'Идет переадресация.' })

          const { data: { token, role, has_email, locale } } = response
          this.$auth.storeSession({ token, role, has_email })

          this.$store.dispatch('auth/setLocale', locale || 'ru')

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then( user => {
              this._handleRedirectAfterAuth(user.username)
            });
          });
        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error authenticate profile')
        })
      },
      _handleRedirectAfterAuth (username) {
        if (this.$localStorage.get('redirect.register', null, String)) {
          let location = this.$localStorage.get('redirect.register', '/', String)
          this.$localStorage.remove('redirect.register')
          this.$router.push(location)
        } else this.$router.push({ name: 'user.show', params: { username } })
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickShowContacts () {
        this.$gtm.trackEvent({ event: 'show_contancts' })
      },
      _handleClickShowColleagues () {
        const { id } = this.user
        this.$root.$emit('open-modal-show-colleagues-user', id)
      },
      _handleChangeStateProfession ({ id, key, value }) {
        let indexOf = this.professions.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) this.$vueSet(this.professions.data[indexOf], key, value)
      },
      _handleDestroyProfession (id) {
        let indexOf = this.professions.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) {
          this.$delete(this.professions.data, indexOf)

          const total = (this.professions.total > 0) ? --this.professions.total : 0
          const offset = (this.professions.offset > 0) ? --this.professions.offset : 0

          this.$set(this.professions, 'total', total)
          this.$set(this.professions, 'offset', offset)
          this.$set(this.counters, 'professions', total)
        }
      },
      _handleChangeStateCompany ({ id, key, value }) {
        let indexOf = this.companies.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) this.$vueSet(this.companies.data[indexOf], key, value)
      },
      _handleDestroyCompany (id) {
        let indexOf = this.companies.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) {
          this.$delete(this.companies.data, indexOf)

          const total = (this.companies.total > 0) ? --this.companies.total : 0
          const offset = (this.companies.offset > 0) ? --this.companies.offset : 0

          this.$set(this.companies, 'total', total)
          this.$set(this.companies, 'offset', offset)
          this.$set(this.counters, 'companies', total)
        }
      },
      _fetchReceivedRequestPartners () {
        this.requestPartners.loading = true

        const { offset, limit } = this.requestPartners
        this.$api.get(`api/v1/users/partners/requests`, { offset, limit }).then((response) => {
          let { data: { data, meta: { total, next } } } = response

          Object.assign(this.requestPartners, {
            data,
            total,
            offset: next,
            error: false,
            loading: false
          })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.requestPartners, { error: true, loading: false })
          // this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении .' })

          throw new Error('Error fetch received request partners')
        })
      },
      _clearReceivedRequestPartners () {
        return new Promise((resolve, reject) => {
          try {
            this.requestPartners =  {
              data: [],
              total: 0,
              offset: 0,
              limit: 48,
              error: false,
              loading: false
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
            throw new Error(e)
          }
        })
      },
      _handleClickResolvePartner (userId) {
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.post(`api/v1/users/partners/${userId}/approve`).then((response) => {
          const { data } = response

          loader.hide()

          let colleagues = this.user['counters']['colleagues']
          this.$store.dispatch('user/setFieldShowUserData', {
            key: 'user.counters.colleagues',
            value: (colleagues + 1)
          })

          let indexOf = _.findIndex(this.requestPartners.data, (p) => p['id'] === userId)
          if (indexOf > -1) {
            this.$delete(this.requestPartners.data, indexOf)

            const total = (this.requestPartners.total > 0) ? --this.requestPartners.total : 0
            const offset = (this.requestPartners.offset > 0) ? --this.requestPartners.offset : 0

            this.$set(this.requestPartners, 'total', total)
            this.$set(this.requestPartners, 'offset', offset)
          }

          this.$notify({ type: 'success', title: 'Успешно', text: 'Заявка успешно принята.' })
        }, (error) => {
          const { response: { data, status }} = error

          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error('Error resolve partner')
        })
      },
      _handleClickRejectPartner (userId) {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'отклонить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите отклонить заявку?'
        }).then(() => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          this.$api.delete(`api/v1/users/partners/${userId}`).then((response) => {
            const { data } = response

            loader.hide()

            let indexOf = _.findIndex(this.requestPartners.data, (p) => p['id'] === userId)
            if (indexOf > -1) {
              this.$delete(this.requestPartners.data, indexOf)

              const total = (this.requestPartners.total > 0) ? --this.requestPartners.total : 0
              const offset = (this.requestPartners.offset > 0) ? --this.requestPartners.offset : 0

              this.$set(this.requestPartners, 'total', total)
              this.$set(this.requestPartners, 'offset', offset)
            }

            this.$notify({ type: 'success', title: 'Успешно', text: 'Заявка успешно отклонена.' })
          }, (error) => {
            const { response: { data, status }} = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            throw new Error('Error reject partner')
          })
        }).catch(() => {})
      }
    }
  }
</script>

<style scoped>

</style>
