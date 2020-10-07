<template>
  <div class="page profession-page page_feed lm-m-v2-notifications">
    <template v-if="requestPartners['data'] && requestPartners['data'].length">
      <div class="lm-m-v2-notifications-body">
        <div class="lm-m-v2-notifications-list">
          <div class="lm-m-v2-notifications-item" v-for="partner in requestPartners['data']">
            <router-link :to="{ name: 'user.show', params: { username: partner.username }}" class="notifications-avatar-wrap btn btn_round">
              <img :src="partner.avatar['84x84']" :alt="partner.name" class="notifications-avatar">
            </router-link>

            <div class="notifications-info-wrap ml_3">
              <div class="notifications__text mb_4">
                <router-link :to="{ name: 'user.show', params: { username: partner.username } }" :title="partner.name" class="notifications__link fw_600">
                  {{ partner.name }}&nbsp;
                </router-link>
                предлагает вам стать коллегой

                <!--              <div class="notifications__date mt_2" v-if="date">{{ date | moment('DD MMMM YYYY') }}</div>-->
                <!--              <component v-if="actions" :is="actionTemplate" ></component>-->
              </div>

              <div class="row w_auto">
                <button class="btn btn_primary mr_2" @click="_handleClickResolvePartner(partner.id)">Принять</button>
                <button class="btn btn_secondary" @click="_handleClickRejectPartner(partner.id)">Отклонить</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="error">
      <span>Пользователь не найден.</span>
    </template>

    <template v-else-if="(error === false)">
    <div class="page__content page__content_feed">
      <div class="page__header mb_4">
        <div class="profile__column column mb_4">
          <div class="profile__avatar_wrapper">
            <div class="profile__avatar">
              <img :src="avatar"/>
            </div>
            <div class="profile__avatar_stub"></div>
            <div class="profile__avatar_description">
              <h5>
                {{ name }}

                <template v-if="isCertifiedUser === true">
                  <svg class="icon icon_size_16 ml_1" style="vertical-align: middle;">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
                  </svg>
                </template>
              </h5>
              <span>
                    <template v-if="city">{{ city.text }},</template>
                    <template v-if="(age)">{{ $pluralize(age, ['год', 'года', 'лет']) }}</template>
                  </span>
            </div>
          </div>

          <div class="lm-card">
            <template v-if="(isCurrentUser === true)">
              <router-link :to="{ name: 'settings.index' }" class="btn btn_secondary_filled w_100">{{ $t('unified-profile.profile.settings') }}</router-link>
            </template>

            <template v-if="(isCurrentUser === false)">
              <div class="column">
                <div class="row">
                  <div class="row w_100 mr_4">
                    <button class="btn btn_primary w_100" @click="_handleClickMessage">Написать сообщение</button>
                  </div>

                  <div class="row w_auto">
                    <button class="btn btn_round btn_primary fill_white" @click="_handleActionSheetUser">
                      <svg class="icon icon_size_16">
                        <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
                      </svg>
                    </button>
                  </div>
                </div>

                <template v-if="( phone )">
                  <div class="row mt_4">
                    <a :href="`tel:${phone}`" class="btn btn_outline w_100" @click="_handleClickCallUser">Позвонить</a>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>

        <template v-if="(isCurrentUser && !aboutMe)">
          <router-link :to="{ name: 'settings.index' }" tag="div" class="lm-card column mb_4">
            <span class="m-text_normal-2 color_gray-3">Изменить описание</span>
          </router-link>
        </template>

        <template v-else-if="aboutMe">
          <div class="lm-card column mb_4">
            <div class="mb_3">
              <div class="m-text_bold">{{ $t('unified-profile.profile.about-me') }}</div>
            </div>

            <div class="row">
              <div class="m-text_normal-2 color_gray-2 word_break">{{ collapse['aboutMe'] ? aboutMe : $truncate(aboutMe, 100) }}</div>
            </div>

            <template v-if="(aboutMe && aboutMe.length > 100)">
              <div class="row align_center mt_3" @click="_handleClickToggleCollapse('aboutMe')">
                <div class="m-text_bold color_main mr_1">{{ collapse['aboutMe'] ? 'Скрыть' : 'Читать полностью' }}</div>
                <svg :class="['icon', 'icon_size_16', 'fill_main', { rotate_180: (collapse['aboutMe']) }]">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                </svg>
              </div>
            </template>
          </div>
        </template>

        <div class="lm-card column">
          <div class="profile__block">
            <template v-if="(isAuthorized && isCurrentUser)">
              <div class="row mb_4">
                <router-link :to="{ name: 'folders.index' }" class="link m-flex_inline align_center w_100">
                  <div class="m-text_bold color_gray-1 mr_2">{{ $t('unified-profile.profile.my-compilations') }}</div>
                  <span class="m-text_bold-2 color_gray-2">{{ counters['folders'] }}</span>
                </router-link>
              </div>
            </template>

            <div class="row">
              <router-link :to="{ name: 'board.castings.user', params: { username } }" class="link m-flex_inline align_center w_100">
                <div class="m-text_bold color_gray-1 mr_2">{{ (isAuthorized && isCurrentUser) ? $t('unified-profile.profile.my-ads') : 'Объявления' }}</div>
                <span class="m-text_bold-2 color_gray-2">{{ counters['board'] }}</span>
              </router-link>
            </div>

            <template v-if="(isAuthorized && isCurrentUser)">
              <div class="row mt_4">
                <router-link :to="{ name: 'board.castings.responses.user', params: { username } }" class="link m-flex_inline align_center w_100">
                  <div class="m-text_bold color_gray-1 mr_2">{{ (isAuthorized && isCurrentUser) ? $t('unified-profile.profile.my-responses') : 'Отклики' }}</div>
                  <span class="m-text_bold-2 color_gray-2">{{ counters['responses'] }}</span>
                </router-link>
              </div>
            </template>
          </div>

          <div class="profile__block">
            <div class="row mb_4">
              <router-link :to="{ name: 'partners.user', params: { username } }" class="link m-flex_inline align_center w_100">
                <div class="m-text_bold color_gray-1 mr_2">{{ $t('unified-profile.profile.colleagues') }}</div>
                <span class="m-text_bold-2 color_gray-2">{{ counters['colleagues'] | numeral('0a') }}</span>
              </router-link>
            </div>

            <div class="row mb_4">
              <router-link :to="{ name: 'followers.user', params: { username } }" class="link m-flex_inline align_center w_100">
                <div class="m-text_bold color_gray-1 mr_2">{{ $t('unified-profile.profile.followers') }}</div>
                <span class="m-text_bold-2 color_gray-2">{{ counters['followers'] | numeral('0a') }}</span>
              </router-link>
            </div>

            <div class="row">
              <router-link :to="{ name: 'following.user', params: { username } }" class="link m-flex_inline align_center w_100">
                <div class="m-text_bold color_gray-1 mr_2">{{ $t('unified-profile.profile.following') }}</div>
                <span class="m-text_bold-2 color_gray-2">{{ counters['following'] | numeral('0a') }}</span>
              </router-link>
            </div>
          </div>

          <template v-if="hasContacts">
            <div class="profile__block sidebar-dropdown-menu">
              <template v-if="collapse['contacts']">
                <div class="m-text_bold color_gray-1">{{ $t('unified-profile.profile.contacts') }}</div>
              </template>

              <collapse v-model="collapse['contacts']">
                <template v-if="hasSocialContacts">
                  <div class="profile__contacts m-text_normal-2">
                    <template v-if="(has(contacts, 'instagram') && contacts['instagram'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Instagram:</span>
                        <a :href="`https://instagram.com/${ getPartSocialUrl(contacts['instagram'], 'instagram.com') }`" target="_blank" class="cropped-text color_main">{{ contacts['instagram'] }}</a>
                      </div>
                    </template>
                    <template v-if="(has(contacts, 'facebook') && contacts['facebook'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Facebook:</span>
                        <a :href="`https://facebook.com/${ getPartSocialUrl(getPartSocialUrl(contacts['facebook'], 'facebook.com'), 'fb.com') }`" target="_blank" class="cropped-text color_main">{{ contacts['facebook'] }}</a>
                      </div>
                    </template>
                    <template v-if="(has(contacts, 'youtube') && contacts['youtube'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">YouTube:</span>
                        <a :href="`https://youtube.com/${ getPartSocialUrl(contacts['youtube'], 'youtube.com') }`" target="_blank" class="cropped-text color_main">{{ contacts['youtube'] }}</a>
                      </div>
                    </template>
                    <template v-if="(has(contacts, 'vk') && contacts['vk'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Вконтакте:</span>
                        <a :href="`https://vk.com/${ getPartSocialUrl(contacts['vk'], 'vk.com') }`" target="_blank" class="cropped-text color_main">{{ contacts['vk'] }}</a>
                      </div>
                    </template>
                  </div>
                </template>
                <template v-if="hasMessengerContacts">
                  <div class="profile__contacts m-text_normal-2">
                    <template v-if="(has(contacts, 'telegram') && contacts['telegram'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Telegram:</span>
                        <a :href="`tg://resolve?domain=${ contacts['telegram'] }`" class="color_main">{{ contacts['telegram'] }}</a>
                      </div>
                    </template>
                    <template v-if="(has(contacts, 'whatsapp') && contacts['whatsapp'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Whatsapp:</span>
                        <a :href="`whatsapp://send?phone=${ contacts['whatsapp'] }`" class="color_main">{{ contacts['whatsapp'] }}</a>
                      </div>
                    </template>
                    <template v-if="(has(contacts, 'viber') && contacts['viber'])">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Viber:</span>
                        <a :href="`viber://chat?number=${ contacts['viber'] }`" class="color_main">{{ contacts['viber'] }}</a>
                      </div>
                    </template>
                  </div>
                </template>
                <template v-if="hasOtherContacts">
                  <div class="profile__contacts m-text_normal-2">
                    <template v-if="(has(contacts, 'site') && contacts['site'] && siteUrl)">
                      <div class="profile__contacts-item">
                        <span class="mr_1">Сайт:</span>
                        <span class="cropped-text" v-html="siteUrl"></span>
                      </div>
                    </template>
                  </div>
                </template>
              </collapse>

              <div :class="['row', 'align_center', {'mt_4' : collapse['contacts']}]" @click="_handleClickToggleCollapse('contacts')">
                <template v-if="(collapse['contacts'] === false)">
                  <div class="m-text_bold color_main mr_1" @click="_handleClickShowContacts">{{ $t('unified-profile.profile.show-contacts') }}</div>
                </template>
                <template v-else-if="(collapse['contacts'] === true)">
                  <div class="m-text_bold color_main mr_1">Скрыть</div>
                </template>
                <svg :class="['icon', 'icon_size_16', 'fill_main', { rotate_180: (collapse['contacts']) }]">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                </svg>
              </div>
            </div>
          </template>
        </div>
      </div> <!-- end of header section profile -->

      <div class="page__content">
        <template v-if="(isCurrentUser === false && hasProfessions === false && hasCompanies === false)">
          <div class="page__plug page__plug_feed_empty-list mt_1">
            <svg class="icon icon_size_lg icon_fill_blue mb_5">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
            </svg>
            <div class="heading heading_h5">Информации нет</div>
            <div class="mb_4">{{ name }} пока не заполнил<br> профиль полностью</div>
          </div>
        </template>

        <template v-if="(isCurrentUser || hasProfessions)">
          <div class="lm-card w_100 m-flex_inline justify_between">
            <div class="row align_center">
              <div class="m-text_bold color_gray-1 mr_2">{{ isCurrentUser ? $t('unified-profile.profile.my-professions') : 'Профессии' }}</div>
              <span class="m-text_bold-2 color_gray-2">{{ counters['professions'] }}</span>
            </div>
            <template v-if="isCurrentUser === true">
              <div class="row w_auto">
                <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickCreateProfession">{{ $t('unified-profile.profile.add') }}</a>
              </div>
            </template>
          </div>

          <div class="feed">
            <template v-if="isEmptyProfessions">
              <div class="page__plug page__plug_feed_empty-list mt_1 mb_0">
                <svg class="icon icon_size_lg icon_fill_blue mb_5">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
                </svg>
                <div class="heading heading_h5">Профессий нет</div>
                <template v-if="(isCurrentUser === true && isAuthorized === true)">
                  <div class="mb_4">Для начала работы, необходимо<br> добавить новую профессию</div>
                  <button class="btn btn_primary" @click="_handleClickCreateProfession">Добавить</button>
                </template>
              </div>
            </template>

            <lm-m-loader v-if="loadingProfessions"></lm-m-loader>
            <profession-card :profession="profession" v-for="profession in professions['data']" :key="profession.id" @actionSheet="_handleActionSheetProfession"
                             @changeState="_handleChangeStateProfession" :isCatalogPage="false"></profession-card>
          </div>
        </template>

        <template v-if="((isCurrentUser || hasCompanies) && isRepresentative)">
          <div class="lm-card w_100 m-flex_inline justify_between mt_4">
            <div class="row align_center">
              <div class="m-text_bold color_gray-1 mr_2">{{ isCurrentUser ? $t('unified-profile.profile.my-companies') : 'Компании' }}</div>
              <span class="m-text_bold-2 color_gray-2">{{ counters['companies'] }}</span>
            </div>
            <template v-if="isCurrentUser === true">
              <div class="row w_auto">
                <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickCreateCompany">Добавить</a>
              </div>
            </template>
          </div>

          <div class="d-feed">
            <template v-if="isEmptyCompanies">
              <div class="page__plug page__plug_feed_empty-list mt_1 mb_0">
                <svg class="icon icon_size_lg icon_fill_blue mb_5">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
                </svg>
                <div class="heading heading_h5">Компаний нет</div>
                <template v-if="(isCurrentUser === true && isAuthorized === true)">
                  <div class="mb_4">Для начала работы, необходимо<br> добавить новую компанию</div>
                  <a href="javascript:void(0)" class="btn btn_primary" @click="_handleClickCreateCompany">Добавить</a>
                </template>
              </div>
            </template>

            <lm-m-loader v-if="loadingCompanies"></lm-m-loader>
            <company-card :company="company" v-for="company in companies['data']" :key="company.id" @actionSheet="_handleActionSheetCompany"
                          @changeState="_handleChangeStateCompany" :isCatalogPage="false"></company-card>
          </div>
        </template>
      </div> <!-- end of feed__body -->

    </div>
    </template>

    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheetUser"></actionsheet>
    <actionsheet :actions="professions.actionSheet.actions" v-model="professions.actionSheet.value" cancel-text="" @input="_handleInputActionSheetProfession"></actionsheet>
    <actionsheet :actions="companies.actionSheet.actions" v-model="companies.actionSheet.value" cancel-text="" @input="_handleInputActionSheetCompany"></actionsheet>
  </div>
</template>

<script>
  import { Collapse } from 'uiv'
  import { Indicator, Toast } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import { viewUser } from '@modules/Rating/Enums/events'
  import CompanyCard from '@components/User/Сompany/Сompany.vue'
  import { has, AVATAR, isBrowser, getPartSocialUrl } from '@utils'
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
        has, getPartSocialUrl,
        collapse: {
          aboutMe: false,
          contacts: false
        },
        professions: {
          data: [],
          total: 0,
          offset: 0,
          limit: 100,
          error: false,
          loading: false,
          actionSheet: {
            id: null,
            actions: [],
            value: false
          },
        },
        companies: {
          data: [],
          total: 0,
          offset: 0,
          limit: 48,
          error: false,
          loading: false,
          actionSheet: {
            id: null,
            actions: [],
            value: false
          },
        },
        actionSheet: {
          actions: [],
          value: false
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
        return this.user.isCertifiedUser || false
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
        if (this.user && has( this.user, 'avatar.564x564')) {
          const { avatar: { '564x564': image } } = this.user
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
      isRepresentative () {
        return has(this.user, 'representative') ? this.user.representative : false
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
      isEmptyCompanies () {
        return (this.counters['companies'] === 0)
      },
      loadingProfessions () {
        return this.professions.loading
      },
      loadingCompanies () {
        return this.companies.loading
      },
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
      } else {
        if (isBrowser) this.$nsWebViewInterface.emit('rating', viewUser)
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

        this.$api.get(`api/v2/users/${username}/professions`, { offset: 0, limit: 100 }).then((response) => {
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
              limit: 100,
              error: false,
              loading: false,
              actionSheet: {
                id: null,
                actions: [],
                value: false
              }
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
            loading: false,
            actionSheet: {
              id: null,
              actions: [],
              value: false
            }
          })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.companies, { error: true, loading: false })

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
              loading: false,
              actionSheet: {
                id: null,
                actions: [],
                value: false
              }
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
        Indicator.open()

        this.$api.post(`api/v1/follow`, { user_id: this.user.id }).then((response) => {
          const { data: { result } } = response
          this.$store.dispatch('user/setFieldShowUserData', { key: 'follow', value: result })

          let followers = this.user['counters']['followers']
          this.$store.dispatch('user/setFieldShowUserData', {
            key: 'user.counters.followers',
            value: (result === 0 ? followers - 1 : followers + 1)
          })

          Toast({ message: (result === 1) ? 'Подписка оформлена.' : 'Подписка отменена.', iconClass: 'mintui mintui-success' });

          if (Boolean(result)) {
            this.$gtm.trackEvent({ event: 'subscribe' })
          }

          Indicator.close()

        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error('Error follow user')
        })
      },
      _handleClickAddToColleagues () {
        Indicator.open()

        const { id } = this.user

        this.$api.post(`api/v1/users/partners/${id}`).then((response) => {
          const { data } = response

          Indicator.close()
          this.$gtm.trackEvent({ event: 'add_colleagues' })
          this.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: -1 })
        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
          Indicator.open()

          this.destroyToColleagues().then(() => {
            Indicator.close()
            this.$store.dispatch('user/setFieldShowUserData', { key: 'colleague', value: 0 })
            Toast({ message: 'Пользователь удален из коллег.', iconClass: 'mintui mintui-success' });
          }).catch(() => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
        Indicator.open()

        this.$api.post(`api/admin/v1/auth/${this.user.id}`).then((response) => {
          Indicator.close()

          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });

          const { data: { token, role, hasEmail, locale } } = response
          this.$auth.storeSession({ token, role, hasEmail })

          this.$store.dispatch('auth/setLocale', locale || 'ru')

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then( user => {
              this._handleRedirectAfterAuth(user.username)
            });
          });
        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
      _handleClickShowColleagues () {
        const { id } = this.user
        this.$root.$emit('open-modal-show-colleagues-user', id)
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'call_user_number' })
      },
      _handleChangeStateProfession ({ id, key, value }) {
        let indexOf = this.professions.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) this.$vueSet(this.professions.data[indexOf], key, value)
      },
      _handleChangeStateCompany ({ id, key, value }) {
        let indexOf = this.companies.data.map(item => item.id).indexOf(id)
        if (indexOf > -1) this.$vueSet(this.companies.data[indexOf], key, value)
      },
      _handleActionSheetUser () {
        if (this.isAdmin && this.isCurrentUser === false) {
          this.actionSheet.actions.push({
            name: 'Войти как админ',
            // color: '#fc2e5f',
            method: this._handleClickAuthOnUser
          })
        }

        if (this.colleague === -1) {
          this.actionSheet.actions.push({
            color: '#fc2e5f',
            name: 'Отменить запрос в коллеги',
            method: this._handleClickDestroyToColleagues
          })
        }

        if (this.colleague === 0) {
          this.actionSheet.actions.push({
            name: 'Добавить в коллеги',
            method: this._handleClickAddToColleagues
          })
        }

        if (this.colleague === 1) {
          this.actionSheet.actions.push({
            color: '#fc2e5f',
            name: 'Удалить из коллег',
            method: this._handleClickDestroyToColleagues
          })
        }

        if (this.isAuthorized === true) {
          let actionFollow = {}

          if (this.follow === -1) {
            actionFollow = { name: 'Отменить запрос на подписку', color: '#fc2e5f' }
          }

          if (this.follow === 0) {
            actionFollow = { name: 'Подписаться' }
          }

          if (this.follow === 1) {
            actionFollow = { name: 'Отписаться', color: '#fc2e5f' }
          }

          this.actionSheet.actions.push(Object.assign(actionFollow, {
            method: this._handleClickChangeFollow,
          }))
        }

        this.actionSheet.actions.push({
          name: 'Пожаловаться',
          method: this._handleClickAbuseUser
        })

        this.$nextTick(() => this.actionSheet.value = true)
      },
      _handleInputActionSheetUser (value) {
        if (value === false) {
          this.actionSheet = {
            actions: [],
            value: false
          }
        }
      },
      _handleActionSheetProfession (professionId, isCurrentUser = false) {
        let profession = this._.find(this.professions.data, (p) => p.id === professionId)

        if (profession) {
          const { id, isPublished } = profession
          Object.assign(this.professions.actionSheet, { id })

          if (isCurrentUser) {
            this.professions.actionSheet.actions.push({
              name: 'Удалить',
              color: '#fc2e5f',
              method: this._handleClickDestroyProfession
            })

            if (isPublished) {
              this.professions.actionSheet.actions.push({
                name: 'Снять с публикации',
                method: this._handleClickUnPublishProfession
              })
            } else {
              this.professions.actionSheet.actions.push({
                name: 'Опубликовать',
                method: this._handleClickPublishProfession
              })
            }
          }

          setTimeout(() => {
            this.professions.actionSheet.value = true
          }, 150)
        }
      },
      _handleClickDestroyProfession () {
        let { id } = this.professions.actionSheet

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Все ваши данные в этой профессии будут удалены безвозвратно!'
        }).then(() => {
          this._handleDestroyProfession(id)
        }).catch(() => {})
      },
      _handleDestroyProfession (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.delete(`api/v2/users/professions/${id}`).then((response) => {
            const { data } = response
            Indicator.close()
            this._destroyProfession(id)
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error destroy profession')
          })
        })
      },
      _destroyProfession (id) {
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
      _handleClickUnPublishProfession () {
        let { id } = this.professions.actionSheet

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять профессию с публикации?'
        }).then(() => {
          this._handleUnPublishProfession(id)
        }).catch(() => {})
      },
      _handleClickPublishProfession () {
        let { id } = this.professions.actionSheet

        Indicator.open()

        this.$api.post(`api/v2/users/professions/${id}/publish`).then((response) => {
          const { data } = response
          this._handleChangeStateProfession({ id, key: 'isPublished', value: true })
          this.$gtm.trackEvent({ event: 'publish_profession' })

          Indicator.close()
        }, (error) => {
          const { response: { data, status } } = error

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error('Error publish profession')
        })
      },
      _handleUnPublishProfession (id) {
        return new Promise((resolve, reject) => {

          this._handleChangeStateProfession({ id, key: 'isPublished', value: false })

          this.$api.post(`api/v2/users/professions/${id}/unpublish`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this._handleChangeStateProfession({ id, key: 'isPublished', value: true })
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error unpublish profession')
          })
        })
      },
      _handleInputActionSheetProfession (value) {
        if (value === false) {
          this.professions.actionSheet = {
            id: null,
            actions: [],
            value: false
          }
        }
      },
      _handleActionSheetCompany (companyId, isCurrentUser = false) {
        let company = this._.find(this.companies.data, (p) => p.id === companyId)

        if (company) {
          const { id } = company
          Object.assign(this.companies.actionSheet, { id })

          if (isCurrentUser) {
            this.companies.actionSheet.actions.push({
              name: 'Удалить',
              color: '#fc2e5f',
              method: this._handleClickDestroyCompany
            })

            this.companies.actionSheet.actions.push({
              name: 'Снять с публикации',
              method: this._handleClickUnPublishCompany
            })
          }

          setTimeout(() => {
            this.companies.actionSheet.value = true
          }, 150)
        }
      },
      _handleClickDestroyCompany () {
        let { id } = this.companies.actionSheet

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить компанию?'
        }).then(() => {
          this._handleDestroyCompany(id)
        }).catch(() => {})
      },
      _handleDestroyCompany (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.delete(`api/v2/users/companies/${id}`).then((response) => {
            const { data } = response
            Indicator.close()
            this._destroyCompany(id)
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error destroy company')
          })
        })
      },
      _destroyCompany (id) {
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
      _handleClickUnPublishCompany () {
        let { id } = this.companies.actionSheet

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять с публикации?'
        }).then(() => {
          this._handleUnPublishCompany(id)
        }).catch(() => {})
      },
      _handleUnPublishCompany (id) {
        return new Promise((resolve, reject) => {

          this._handleChangeStateCompany({ id, key: 'isPublished', value: false })

          this.$api.post(`api/v2/users/companies/${id}/unpublish`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this._handleChangeStateCompany({ id, key: 'isPublished', value: true })
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error unpublish company')
          })
        })
      },
      _handleInputActionSheetCompany (value) {
        if (value === false) {
          this.companies.actionSheet = {
            id: null,
            actions: [],
            value: false
          }
        }
      },
      _handleClickShowContacts () {
        this.$gtm.trackEvent({ event: 'show_contancts' })
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
        Indicator.open()

        this.$api.post(`api/v1/users/partners/${userId}/approve`).then((response) => {
          const { data } = response

          Indicator.close()

          let colleagues = this.user['counters']['colleagues']
          this.$store.dispatch('user/setFieldShowUserData', {
            key: 'counters.colleagues',
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

          Toast({ message: 'Заявка успешно принята.', iconClass: 'mintui mintui-success' })
        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

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
          Indicator.open()

          this.$api.delete(`api/v1/users/partners/${userId}`).then((response) => {
            const { data } = response

            Indicator.close()

            let indexOf = _.findIndex(this.requestPartners.data, (p) => p['id'] === userId)
            if (indexOf > -1) {
              this.$delete(this.requestPartners.data, indexOf)

              const total = (this.requestPartners.total > 0) ? --this.requestPartners.total : 0
              const offset = (this.requestPartners.offset > 0) ? --this.requestPartners.offset : 0

              this.$set(this.requestPartners, 'total', total)
              this.$set(this.requestPartners, 'offset', offset)
            }

            Toast({ message: 'Заявка успешно отклонена.', iconClass: 'mintui mintui-success' })
          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            throw new Error('Error reject partner')
          })
        }).catch(() => {})
      }
    }
  }
</script>
<style lang="sass" scoped>

</style>
