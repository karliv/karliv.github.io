<template>
  <div :class="['lm-m-profile-page', 'fullprofile', { customer: (user && userIsCustomer), artist: (user && userIsExecutor) }]">
    <template v-if="error">
      <div class="wrapper no-padding" style="text-align: center">
        <span style="padding-top: 50px; display: inline-block;">Пользователь не найден</span>
      </div>
    </template>
    <template v-else-if="(error === false)">
      <template v-if="(isCurrentUser)">
        <no-ssr>
          <VsBanner></VsBanner>
        </no-ssr>
      </template>
      <div class="wrapper no-padding">
        <div class="lm-m-profile-page-head">
          <div class="lm-user-vertical big">
            <img :src="user.avatar" class="lm-user-vertical-avatar" :alt="user.fullname" @click="_handleClickActionSheetAvatar()">
            <template v-if="isCertifiedAnketa"><div class="status status_verified"></div></template>
            <template v-if="isCurrentUser">
              <input type="file" id="upload-avatar" @change="_handleChangeInputAvatar" ref="fileInputAvatar" accept="image/*" style="visibility: hidden;display: none;">
            </template>

            <div class="lm-user-vertical-info">
              <div class="lm-user-vertical-info-name">
                <span>{{ fullname }}</span>
              </div>
              <div class="lm-user-block-vertical-type">
              <span class="type" v-if="has(profile, 'category')">
                <template v-if="(Array.isArray(profile.category) && profile.category.length)">
                  {{ profile.category.join(', ') }}
                </template>
                <template v-else-if="Array.isArray(profile.category) === false && profile.category">
                  {{ profile.category }}
                </template>
              </span>
              </div>
            </div>
          </div>
          <div class="lm-m-profile-actions-button" v-if="(isAuthorized)">
            <template v-if="(authIsAdmin && !isCurrentUser)">
              <a href="javascript:void(0)" class="lm-power-icon" @click="_handleClickAuthOnUser"></a>
            </template>
            <template v-if="(isCurrentUser && authIsExecutor)">
              <a href="javascript:void(0)" class="lm-pdf-icon" @click="_handleClickPdf"></a>
            </template>
            <template v-if="!isCurrentUser">
              <a href="javascript:void(0)" class="lm-pdf-icon" v-if="hasPortfolio && portfolio.template === 0" @click="_handleClickPdf"></a>
              <a href="javascript:void(0)" class="lm-wait-icon" v-if="(user.follow === -1)" @click="_handleClickChangeFollow()"></a>
              <a href="javascript:void(0)" class="lm-follow-icon" v-if="(user.follow === 0)" @click="_handleClickChangeFollow()"></a>
              <a href="javascript:void(0)" class="lm-following-icon" v-if="(user.follow === 1)" @click="_handleClickChangeFollow()"></a>

              <template v-if="privacy['write_messages']">
                <a href="javascript:void(0)" @click="_handleClickOpenMessagePage" class="btn btn_round bg-color_gray-5 mr_4">
                  <svg class="icon icon_size_16 fill_gray-3">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_chat" />
                  </svg>
                </a>
              </template>

              <template v-if="(userIsExecutor && has(profile, 'anketa.contactdetails.phone') && profile.anketa.contactdetails.phone)">
                <a href="javascript:void(0)" class="btn btn_round btn_primary" @click="_handleClickShowPhone(profile.anketa.contactdetails.phone)">
                  <svg class="icon icon_size_16 fill_white">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#social-lm-phone" />
                  </svg>
                </a>
              </template>
            </template>
          </div>
          <template v-if="has(profile, 'counters')">
            <div class="lm-m-profile--subscribe-block">
              <router-link :to="{ name: 'following.user', params: { username: user.username } }">
                <div class="count">{{ profile['counters']['following'] | numeral('0a') }}</div>
                <div class="desc">{{ profile['counters']['following'] | pluralize(['подписка', 'подписки', 'подписок'], false) }}</div>
              </router-link>
              <div></div>
              <router-link :to="{ name: 'followers.user', params: { username: user.username } }">
                <div class="count">{{ profile['counters']['followers'] | numeral('0a') }}</div>
                <div class="desc">{{ profile['counters']['followers'] | pluralize(['подписчик', 'подписчика', 'подписчиков'], false) }} </div>
              </router-link>
            </div>
          </template>
        </div>
        <template v-if="(userIsCustomer && isCurrentUser && isEmptyCastings === false && castingsLoading === false)">
          <div class="lm-m-profile--create-castings">
            <router-link class="lm-outline-button red middle" :to="{ name: 'board.castings.create' }">
              Создать кастинг
            </router-link>
          </div>
        </template>
        <div class="lm-m-profile--partners" v-if="isAuthorized && isCurrentUser">
          <router-link :to="{ name: 'user.partners' }" class="lm-m-profile--partners--wrap">
            <span class="left">{{ userIsCustomer ? 'Коллеги' : 'Коллеги' }}</span>
            <span class="right">Все</span>
          </router-link>
        </div>

        <div class="lm-m-profile--partners" v-if="isAuthorized && isCurrentUser">
          <router-link :to="{ name: 'folders.index' }" class="lm-m-profile--partners--wrap">
            <span class="left">Подборки</span>
            <span class="right">Все</span>
          </router-link>
        </div>

        <div class="lm-m-profile--boards">
          <router-link :to="{ name: 'board.castings.user', params: { username: user.username } }" class="lm-m-profile--boards--wrap">
            <span class="left">{{ (isAuthorized && isCurrentUser) ? 'Мои объявления' : 'Объявления' }}</span>
            <span class="right">Все</span>
          </router-link>
        </div>

        <div class="lm-m-profile--boards">
          <router-link :to="{ name: 'board.castings.responses.user', params: { username: user.username } }" class="lm-m-profile--boards--responses--wrap">
            <span class="left">{{ (isAuthorized && isCurrentUser) ? 'Мои отклики' : 'Отклики' }}</span>
            <span class="right">Все</span>
          </router-link>
        </div>

        <div class="lm-m-nav-menu" v-sticky="{ zIndex: 100, stickyTop: 40, disabled: false }">
          <div class="lm-m-nav-wrapper">
            <div class="lm-m-nav-menu--left" v-scroll-spy-active v-scroll-spy-link="{ selector: 'a.lm-m-nav-menu--item' }">
              <template v-if="userIsExecutor">
                <a href="javascript:void(0)" class="lm-m-nav-menu--item">
                  <span class="text">Портфолио</span>
                </a>
                <a href="javascript:void(0)" class="lm-m-nav-menu--item">
                  <span class="text">Анкета</span>
                </a>
              </template>
              <template v-if="userIsCustomer">
                <a href="javascript:void(0)" class="lm-m-nav-menu--item active">
                  <span class="text">Кастинги</span>
                </a>
                <a href="javascript:void(0)" class="lm-m-nav-menu--item">
                  <span class="text">Инфо</span>
                </a>
              </template>
            </div>
          </div>
        </div>
        <div v-scroll-spy="{ offset: '96' }">
          <template v-if="userIsExecutor">
            <div :class="['lm-m-profile-tablet-right', { null: (hasPortfolio === false) || (!portfolio.publish && !portfolioEdit), 'open-portfolio-edit': !hasNotFullElementsPortfolio }]">
              <template v-if="hasCertification">
                <certification-executor :certification="certification"></certification-executor>
              </template>

              <template v-if="hasPortfolio">
                <template v-if="isCurrentUser">
                  <portfolio-executor-form @removed="_handleRemovedPortfolio" v-if="portfolio.publish || portfolioEdit || !hasNotFullElementsPortfolio"></portfolio-executor-form>
                  <template v-else>
                    <div class="lm-m-profile-portfolio null">
                      <span>😕</span>
                      <div v-if="hasOneElementPortfolio" class="desc">В вашем портфолио не хватает данных</div>
                      <div v-if="!hasOneElementPortfolio" class="desc">Ваше портфолио не опубликовано</div>
                      <a href="javascript:void(0)" class="lm-outline-button red middle" @click="openPortfolioEdit()">
                        <template v-if="!hasOneElementPortfolio">Опубликовать</template>
                        <template v-else>Заполнить</template>
                      </a>
                    </div>
                  </template>
                </template>
                <template v-else-if="(isCurrentUser === false)">
                  <div :class="['lm-m-profile-portfolio', { 'model': (portfolio.template === 0) }]">
                    <template v-if="(portfolio.template === 0)">
                      <template v-if="has(mediaPortfolio[1], 'data.player') && has(mediaPortfolio[1], 'data.id')">
                        <media type="video" :player="mediaPortfolio[1]['data']['player']" :media="mediaPortfolio[1]['data']" :album="`portfolio_${user.id}`">
                          <div class="lm-m-model-portofolio video">
                            <img :src="mediaPortfolio[1]['data']['cover_original']" alt="Портфолио #0" :style="{ height: 'auto' }">
                            <i class="lm-play-button big"></i>
                          </div>
                        </media>
                      </template>

                      <template v-if="has(mediaPortfolio[0], 'thumbnail') && has(mediaPortfolio[0], 'data.id')">
                        <media type="photo" :src="mediaPortfolio[0]['data']['path']" :media="mediaPortfolio[0]['data']" :album="`portfolio_${user.id}`">
                          <div class="lm-m-model-portofolio portret">
                            <img :src="mediaPortfolio[0]['thumbnail']" alt="Портфолио #1" :style="{ height: 'auto' }">
                          </div>
                        </media>
                      </template>

                      <template v-if="has(mediaPortfolio[2], 'thumbnail') && has(mediaPortfolio[2], 'data.id')">
                        <media type="photo" :src="mediaPortfolio[2]['data']['path']" :media="mediaPortfolio[2]['data']" :album="`portfolio_${user.id}`">
                          <div class="lm-m-model-portofolio full-height">
                            <img :src="mediaPortfolio[2]['thumbnail']" alt="Портфолио #2" :style="{ height: 'auto' }">
                          </div>
                        </media>
                      </template>

                      <template v-if="has(mediaPortfolio[3], 'thumbnail') && has(mediaPortfolio[3], 'data.id')">
                        <media type="photo" :src="mediaPortfolio[3]['data']['path']" :media="mediaPortfolio[3]['data']" :album="`portfolio_${user.id}`">
                          <div class="lm-m-model-portofolio full-height">
                            <img :src="mediaPortfolio[3]['thumbnail']" alt="Портфолио #3" :style="{ height: 'auto' }">
                          </div>
                        </media>
                      </template>

                    </template>
                    <template v-if="(portfolio.template === 1)">
                      <p>&nbsp;</p>
                    </template>
                  </div>
                </template>
              </template>
              <template v-else-if="(hasPortfolio === false)">
                <div class="lm-m-profile-portfolio null">
                  <span>😕</span>
                  <template v-if="isCurrentUser">
                    <div class="desc">Ваше портфолио еще не создано</div>
                    <a href="javascript:void(0)" class="lm-primary-button lm-plus-icon lm-icon-button middle" @click="_handleClickCreatePortfolio()">Создать</a>
                  </template>
                  <template v-else-if="(isCurrentUser === false)">
                    <div class="desc"> {{ user.fullname }} пока не {{ profile.sex === MALE ? 'опубликовал' : 'опубликовала' }} портфолио</div>
                  </template>
                </div>
              </template>
            </div>
          </template>
          <template v-if="userIsCustomer">
            <div :class="['lm-m-profile-tablet-right', { castings: (castingsTotal > 0), null: (castingsTotal=== 0) }]">
              <div style="display: none;" class="lm-profile-lock-icon"></div>
              <template v-if="(isEmptyCastings === false)">
                <div :class="['lm-m-casting--list row', { 'lm-m-my-castings--list': isCurrentUser }]" v-infinite-scroll="_handleInfiniteScrollCastings"
                     infinite-scroll-disabled="castingsInfiniteDisabled"
                     infinite-scroll-distance="200">
                  <casting-card :casting="casting" v-for="casting in castings" :key="casting.id"
                                :isCatalogPage="false"
                                @actionSheet="_handleActionSheetCasting"
                                @changeState="_handleChangeStateCasting">
                  </casting-card>

                  <lm-m-loader v-if="castingsLoading"></lm-m-loader>
                </div>
              </template>
              <template v-else-if="(isEmptyCastings === true)">
                <div class="lm-m-profile-portfolio null">
                  <span style="font-size: 27px;">😕</span>
                  <template v-if="isCurrentUser">
                    <div class="desc">У вас нет активных кастингов</div>
                    <router-link class="lm-outline-button red middle" :to="{ name: 'board.castings.create' }">
                      Создать
                    </router-link>
                  </template>
                  <template v-else-if="(isCurrentUser === false)">
                    <div class="desc"> {{ user.fullname }} пока не {{ profile.sex === MALE ? 'добавил' : 'добавила' }} кастнги</div>
                  </template>
                </div>
              </template>
            </div>
          </template>
          <template>
            <div class="lm-m-profile-user-info" id="info">
              <div class="lm-m-profile-user-info--line lock-profile" style="display: none;">
                <div class="title">Этот профиль закрыт</div>
                <div class="desc">Для доступа необходимо <br> отправить запрос</div>
                <div class="lm-center">
                  <a @click="openModalProfileLock()" href="javascript:void(0)" class="lm-outline-button middle">отправить</a>
                </div>
              </div>
              <mt-popup class="lm-m-modal-profile-wrap" v-model="lock" position="center" :modal="true">
                <div class="lm-m-modal-profile-lock">
                  <div class="title">Elnora Weber</div>
                  <div class="desc">Запросила доступ к просмотру вашего профиля</div>
                  <div class="actions">
                    <a href="javascript:void(0)" class="lm-link-button">Отказать</a>
                    <a href="javascript:void(0)" class="lm-primary-button middle">Открыть</a>
                  </div>
                </div>
              </mt-popup>
              <template v-if="isCurrentUser || (aboutme || (city && country) || age || sex)">
                <about-me-card :isCurrentUser="isCurrentUser"
                               :isCustomer="userIsCustomer" :isExecutor="userIsExecutor" :isCompany="userIsCompany"
                               :anketa="{ aboutme, city: profile.city, country: profile.country, age, sex, firstname, lastname, fullname }"
                               :rawAnketa="{ aboutme, city: profile.city, country: profile.country, age, sex, firstname, lastname, fullname }">
                </about-me-card>
              </template>
              <template v-if="isCurrentUser || contactdetails">
                <contacts-card :isCurrentUser="isCurrentUser"
                               :isCustomer="userIsCustomer" :isExecutor="userIsExecutor"
                               :anketa="{ contactdetails }" :rawAnketa="{ contactdetails }">
                </contacts-card>
              </template>
              <template v-if="userIsExecutor">
                <template v-if="isCurrentUser || bodyParameters">
                  <body-parameters-card :isCurrentUser="isCurrentUser"
                                        :isCustomer="userIsCustomer" :isExecutor="userIsExecutor"
                                        :anketa="{ 'body-parameters': bodyParameters }"
                                        :rawAnketa="{ 'body-parameters': rawBodyParameters }">
                  </body-parameters-card>
                </template>
                <template v-if="isCurrentUser || professions">
                  <professions-card :isCurrentUser="isCurrentUser"
                                    :anketa="{ 'profession': professions }"
                                    :rawAnketa="{ 'profession': rawProfessions }">
                  </professions-card>

                </template>
                <template v-if="isCurrentUser || skills">
                  <skills-card :isCurrentUser="isCurrentUser"
                               :isCustomer="userIsCustomer" :isExecutor="userIsExecutor"
                               :anketa="{ skills }"
                               :rawAnketa="{ 'skills': rawSkills }">
                  </skills-card>
                </template>
              </template>
            </div>
          </template>
        </div>
      </div>
    </template>

    <template v-if="isCurrentUser">
      <mt-popup class="lm-m-post-register-page-wrapper lm-m-post-register-select-role lm-m-crop-avatar-image" v-model="avatar.modal" position="bottom" :modal="false">
        <h1 style="margin-bottom: 12px;">Обрежьте фото</h1>

        <div class="lm-m-post-register-crop-wrap">
          <div class="lm-m-cropper">
            <div class="lm-m-cropper-editor">
              <vue-cropper
                class="lm-m-cropper-canvas"
                ref="cropper_avatar"
                :guides="false"

                :background="false"

                :view-mode="1"
                :drag-mode="'move'"
                :aspect-ratio="1"
                :auto-crop-area="0.5"
                :check-orientation="true"

                :cropBoxMovable="false"
                :cropBoxResizable="false"

                :src="avatar.src"
                alt="Avatar"
                :ready="_handleCropReady">
              </vue-cropper>
            </div>
          </div>
          <div class="lm-m-cropper-img" style="width: 48px; height: 48px; display: none;">
            <img :src="avatar.crop" alt="Avatar mini" style="width: 100%; height: auto">
          </div>
        </div>

        <div class="lm-m-post-register-fixed-bottom">
          <a @click="_handleClickCloseCropperAvatar" href="javascript:void(0)" class="lm-link-button">назад</a>
          <button @click="_handleClickCropAvatar" class="lm-primary-button middle">Обрезать</button>
        </div>
      </mt-popup>
      <actionsheet :actions="avatar.sheet.actions" v-model="avatar.sheet.value" cancel-text=""></actionsheet>
    </template>

    <mt-popup class="lm-m-modal-wrap promo pdf-email" v-model="pdf.stateEmail" position="bottom" :modal="true">
      <div class="lm-m-modal-enter-promo">
        <input type="email"
               tabindex="1"
               name="email"
               autocapitalize=off
               placeholder="Введите E-mail"
               :class="['lm-input']"
               v-validate="'required|email'"
               v-model="pdf.fields.email">
        <span class="error" v-if="verrors.has('email')">{{ verrors.first('email')}}</span>
        <a href="javascript:void(0)" @click.stop.prevent="_handleSendPdfToEmail" :class="['lm-link-button','send', { 'disabled': !isValidEmail }]"></a>
      </div>
    </mt-popup>

    <div :class="['lm-m-pdf-success', { 'fade_in': pdf.stateSendEmail, 'fade_out': !pdf.stateSendEmail && pdf.fields.email && pdf.loading }]">
      <span>Отправлено</span>
    </div>

    <show-contact-phone-modal></show-contact-phone-modal>
    <actionsheet :actions="pdf.sheet.actions" v-model="pdf.sheet.value" cancel-text=""></actionsheet>
    <actionsheet :actions="castingSheet.actions" v-model="castingSheet.value" cancel-text="" @input="_handleInputActionSheetCasting"></actionsheet>
  </div>
</template>


<script>
  import FileSaver from 'file-saver'
  import { has, resizeImage } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { Popup, Indicator, Toast } from 'mint-ui'
  import { MALE, FEMALE } from '@modules/User/Enums/Sex'
  import SkillsCard from '@components/User/Show/Skills.vue'
  import AboutMeCard from '@components/User/Show/AboutMe.vue'
  import { getQualityThumbnail } from '@modules/User/index.js'
  import ContactsCard from '@components/User/Show/Contacts.vue'
  import CastingCard from '@components/Board/Casting/Casting.vue'
  import { COMPANY } from '@modules/User/Enums/Customer/Statuses.js'
  import ProfessionsCard from '@components/User/Show/Professions.vue'
  import VsBanner from '@components/UI/Banners/VerifySpecialists/Index.vue'
  import BodyParametersCard from '@components/User/Show/BodyParameters.vue'
  import ShowContactPhoneModal from '@components/User/Modals/ShowContactPhone.vue'
  import PortfolioExecutorForm from '@components/User/Executor/Portfolio/Index.vue'
  import CertificationExecutor from '@components/User/Executor/Certification/Index.vue'

  import { PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    components: { PortfolioExecutorForm, CertificationExecutor, ContactsCard, AboutMeCard, BodyParametersCard, SkillsCard, CastingCard, ProfessionsCard, 'mt-popup': Popup, VsBanner, ShowContactPhoneModal },
    metaInfo () {
      return {
        title: (this.user) ? this.user.fullname : 'Ошибка'
      }
    },
    data () {
      return {
        has, MALE, FEMALE,
        invited: false,
        portfolioEdit: false,
        lock: false,
        avatar: {
          sheet: {
            value: false,
            actions: [
              {
                name: 'Изменить фото',
                method: this._handleClickChangeAvatar
              }
            ]
          },
          modal: false,
          src: null,
          photo_id: null,
          crop: null
        },
        pdf: {
          sheet: {
            value: false,
            actions: [
              {
                name: 'PDF - АНКЕТА',
                method: null,
                color: '#808792'
              },
              {
                name: 'ОТПРАВИТЬ ПО ПОЧТЕ',
                method: this._handleClickSendPdfToEmail
              },
              {
                name: 'СКАЧАТЬ',
                method: this._handleClickDownloadPdf
              }
            ]
          },
          fields: {
            email: ''
          },
          url: {
            send_url: null,
            download_url: null
          },
          stateSendEmail: false,
          stateEmail: false,
          loading: false,
          error: null
        },
        castingSheet: {
          actions: [],
          value: false,
          casting: { id: null, slug: null }
        }
      }
    },
    async asyncData ({ store, route }) {
      await store.dispatch('user/getUserByUsername', {
        username: String(route.params.username),
        include: 'profile,portfolio,profile.country,profile.city,privacy,certification'
      }).catch(() => { throw ({ code: 404, url: '/404', message: 'Page not found.' }) })
    },
    computed: {
      ...mapGetters({
        authRole: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        user: 'user/getShowUserData',
        error: 'user/getShowUserError',
        loading: 'user/getShowUserLoading',
        castings: 'board/casting/getCastingsData',
        castingsTotal: 'board/casting/getCastingsTotal',
        castingsOffset: 'board/casting/getCastingsOffset',
        castingsLoading: 'board/casting/getCastingsLoading',
        castingsInfiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
      }),
      fullname () {
        return this.user.fullname
      },
      profile () {
        return ( this.user && has(this.user, 'profile.data')) ? this.user.profile.data : {}
      },
      userIsCustomer () {
        return this.user.role === 'customer'
      },
      userIsExecutor () {
        return this.user.role === 'executor'
      },
      authIsCustomer () {
        return this.authRole === 'customer'
      },
      authIsExecutor () {
        return this.authRole === 'executor'
      },
      userIsCompany () {
        return (this.authIsCustomer && has(this.rawProfessions, 'customer.status') && this.rawProfessions.customer.status === COMPANY)
      },
      authIsAdmin () {
        return (this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true)
      },
      isCurrentUser () {
        return (this.authUser && this.user && (this.user.id === this.authUser.id))
      },
      hasPortfolio () {
        return has(this.user, 'portfolio.data.template')
      },
      hasOneElementPortfolio () {
        if (!this.portfolio || !this.isCurrentUser) return false
        return this.portfolio.cells.data.some(cell => has(cell, 'data.id') === true)
      },
      hasNotFullElementsPortfolio() {
        if (!this.portfolio || !has(this.portfolio, 'cells.data') || !this.isCurrentUser) return true
        return this.portfolio.cells.data.some(cell => has(cell, 'data.id') === false)
      },
      portfolio () {
        return has(this.user, 'portfolio.data') ? this.user.portfolio.data : null
      },
      mediaPortfolio () {
        return this.portfolio ? this.portfolio.cells.data.filter((item) => ['photo', 'video'].includes(item.type)).map(getQualityThumbnail) : []
      },
      contactdetails () {
        if (has(this.profile, 'anketa.contactdetails') === false) return false
        return this.profile.anketa.contactdetails
      },
      aboutme () {
        if (has(this.profile, 'anketa.aboutme') === false) return false
        return this.profile.anketa['aboutme']
      },
      firstname () {
        return this.user.firstname
      },
      lastname () {
        return this.user.lastname
      },
      age () {
        return this.profile.age
      },
      sex () {
        return this.profile.sex
      },
      city () {
        return this.profile.city
      },
      country () {
        return this.profile.country
      },
      bodyParameters () {
        if (has(this.profile, 'anketa.body-parameters') === false) return false
        return this.profile.anketa['body-parameters']
      },
      rawBodyParameters () {
        if (has(this.profile, 'raw_anketa.body-parameters') === false) return false
        return this.profile.raw_anketa['body-parameters']
      },
      skills () {
        if (has(this.profile, 'anketa.skills') === false) return false
        return this.profile.anketa['skills']
      },
      rawSkills () {
        if (has(this.profile, 'raw_anketa.skills') === false) return false
        return this.profile.raw_anketa['skills']
      },
      professions () {
        if (has(this.profile, 'anketa.profession') === false) return false
        return this.profile.anketa['profession']
      },
      rawProfessions () {
        if (has(this.profile, 'raw_anketa.profession') === false) return false
        return this.profile.raw_anketa['profession']
      },
      defaultProject () {
        return this.authUser['default_project']
      },
      isEmptyCastings () {
        return ( !this.castingsLoading && this.castingsTotal === 0 )
      },
      privacy () {
        return ( this.user && has(this.user, 'privacy.data')) ? this.user.privacy.data : {}
      },
      isValidEmail () {
        return (this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
      certification () {
        return has(this.user, 'certification.data') ? this.user.certification.data : null
      },
      hasCertification () {
        return has(this.user, 'certification.data.id')
      },
      isCertifiedAnketa () {
        return this.profile.is_certified_anketa
      },
      feedbackData () {
        return this.isCurrentUser && this.userIsCustomer ? {
          name: this.user.fullname,
          email: has(this.contactdetails, 'email') ? this.contactdetails.email : '',
          properties: {
            user_id: this.user.id,
            name: this.user.fullname,
            avatar: this.user.avatar,
            email: has(this.contactdetails, 'email') ? this.contactdetails.email : '',
            mobile: true
          },
          error_detail: 1,
          language: 'ru',
        } : {}
      }
    },
    beforeDestroy () {
      this.$root.$off('success-invite-user-on-casting')
    },
    created () {
      if (this.user && this.user.role === 'customer') {
        this.$store.dispatch('board/casting/fetchUserCastings', {
          username: String(this.$route.params.username),
          offset: 0
        })
      }

      let invited = null;
      this.$root.$on('success-invite-user-on-casting', (response) => {
        let { user_id } = response

        if (this.user.id === user_id) {
          this.invited = true
          clearTimeout(invited)
          invited = setTimeout(() => {
            this.invited = false
          }, 2500);
        }
      })
    },
    mounted () {
      if (this.user && this.isCurrentUser) {
        if (this.authIsExecutor) this.$store.dispatch('user/getSourcesExecutor')
        if (this.authIsCustomer) this.$store.dispatch('user/getSourcesCustomer')
      }
    },
    methods: {
      openModalProfileLock() {
        this.lock = true
      },
      openPortfolioEdit() {
        this.portfolioEdit = true
      },
      ...mapActions({
        fetchCastingsOnUser: 'board/casting/fetchUserCastings'
      }),
      _handleInfiniteScrollCastings () {
        this.fetchCastingsOnUser({ username: String(this.$route.params.username), offset: this.castingsOffset })
      },
      _handleActionSheetCasting ( castingId, isCurrentUser = false ) {
        let casting = this._.find(this.castings, (c) => c.id === castingId)
        if (casting) {
          const { id, slug } = casting
          Object.assign(this.castingSheet.casting, { id, slug })

          if (isCurrentUser === true) {
            if (casting.state === PUBLISHED || casting.state === ARCHIVED) {
              this.castingSheet.actions.push({
                name: 'Отклики',
                method: this._handleClickOpenCastingResponses
              })
            }

            if (casting.state !== ARCHIVED) {
              this.castingSheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditCasting
              })
            }

            if (casting.state === PUBLISHED) {
              this.castingSheet.actions.push({
                name: 'Снять с публикации',
                method: this._handleClickUnpublishedCasting
              })
            }

            if (casting.state !== ARCHIVED) {
              this.castingSheet.actions.push({
                name: 'В архив',
                method: this._handleClickArchiveCasting
              })
            }
          }

          if (isCurrentUser === false) {
            this.castingSheet.actions.push({
              name: this.$t('boardbox.report.report'),
              method: this._handleClickAbuseCasting
            })
          }

          this.castingSheet.value = true
        }
      },
      _handleInputActionSheetCasting (value) {
        if (value === false) {
          this.castingSheet = {
            actions: [],
            value: false,
            casting: { id: null, value: null }
          }
        }
      },
      _handleChangeStateCasting ({ id, key, value }) {
        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
      },
      _handleClickEditCasting () {
        let { id } = this.castingSheet.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },
      _handleClickOpenCastingResponses () {
        let { id, slug } = this.castingSheet.casting
        this.$router.push({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })
      },
      _handleClickUnpublishedCasting () {
        let { id } = this.castingSheet.casting

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft(id)
        }).catch(() => {})
      },
      _handleClickArchiveCasting () {
        let { id } = this.castingSheet.casting

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive(id)
        }).catch(() => {})
      },
      _handleDraft (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: DRAFT })

            Indicator.close()
            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: ARCHIVED })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickAbuseCasting () {
        let { id } = this.castingSheet.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleClickChangeFollow () {
        Indicator.open()

        this.$api.post(`api/v1/follow`, { user_id: this.user.id }).then((response) => {
          const { data: { result } } = response
          this.$store.dispatch('user/setFieldShowUserData', { key: 'follow', value: result })

          let followers = this.profile['counters']['followers']
          this.$store.dispatch('user/setFieldShowUserData', {
            key: 'profile.data.counters.followers',
            value: (result === 0 ? followers - 1 : followers + 1)
          })

          Indicator.close()

        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          throw new Error('Error follow user')
        })
      },
      _handleClickCreatePortfolio () {
        this.portfolioEdit = true;
        Indicator.open()
        this.$api.post('api/v1/profiles/portfolio', { template: 0 }).then((response) => {
          const { data: { data } } = response
          this.$store.dispatch('user/setFieldShowUserData', { key: 'portfolio.data', value: data })

          Indicator.close()

        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          throw new Error('Error create portfolio')
        })
      },
      _handleRemovedPortfolio () {
        this.portfolioEdit = false;
        this.$store.dispatch('user/setFieldShowUserData', { key: 'portfolio.data', value: null })
      },
      _handleClickOpenMessagePage () {
        let uid = this._.sortBy([ this.user.id, this.authUser.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handlePublishedCasting (id, value) {
        this.$store.dispatch('casting/setCastingByUserFiledById', { id, key: 'published', value })
      },
      _handleClickActionSheetAvatar () {
        if (this.isCurrentUser === false) return
        this.avatar.sheet.value = true
      },
      _handleClickChangeAvatar () {
        this.$refs.fileInputAvatar.click()
      },
      _handleChangeInputAvatar (el) {
        let files = el.target.files || el.dataTransfer.files;
        if (!files.length)
          return;

        const file = el.target.files[0];

        if (!file.type.includes('image/')) {
          console.log('Please select an image file')
          return
        }

        if (typeof FileReader === 'function') {
          const reader = new FileReader()

          reader.onload = (event) => {
            const next = (src, file) => {
              this._handleUploadAvatar(file).then(({ photo_id, path }) => {
                this.avatar.modal = true
                this.$refs.cropper_avatar.replace(src)
              }).catch((data, status) => {})
            }

            resizeImage(event.target.result, 2560, null, 'image/png').then(({ src, blob }) => {
              this.avatar.src = src
              next(src, blob)
            }).catch(err => {
              this.avatar.src = event.target.result
              next(event.target.result, file)
              console.error(err);
            })
          };
          reader.readAsDataURL(file);
        } else console.log('Sorry, FileReader API not supported');
      },
      _handleUploadAvatar (file) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let data = new FormData();
          data.append('file', file, 'avatar.png')

          this.$api.post('api/v1/profiles/avatar/upload', data).then((response) => {
            const { data: { photo_id, path } } = response

            this.avatar.photo_id = photo_id
            this.$refs.fileInputAvatar.value = ''

            Indicator.close()
            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            });

            resolve({ photo_id, path })

          }, (error) => {
            Indicator.close()
            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            });

            const { response: { data }, response: { status }} = error

            if (status === 422 && data.errors) {
              const { errors } = data

            } else throw new Error('Error upload avatar')

            reject(data, status)
          })
        })
      },
      _handleCropReady () {
        this.$nextTick(() => {
          let context = this.$refs.cropper_avatar;
          context.setCropBoxData({ width: 211, height: 211 });
        });
      },
      _handleCropCropperAvatar () {
        let context = this.$refs.cropper_avatar
        this.avatar.crop = context.getCroppedCanvas({ "width": 211, "height": 211 }).toDataURL()
      },
      _handleClickCloseCropperAvatar () {
        this.avatar.modal = false
      },
      _handleClickCropAvatar () {
        Indicator.open()

        let context = this.$refs.cropper_avatar
        context.getCroppedCanvas({ "width": 211, "height": 211 }).toBlob((blob) => {
          let data = new FormData();
          data.append('file', blob, 'avatar.png')
          data.append('photo_id', this.avatar.photo_id)

          this.$api.post('api/v1/profiles/avatar/attach', data).then((response) => {
            const { data: { path } } = response

            Indicator.close()

            this.$store.dispatch('user/setFieldShowUserData', { key: 'avatar', value: path })
            this._handleClickCloseCropperAvatar()
            this.$gtm.trackEvent({ event: 'UPLOAD_PHOTO_AVATAR' })
          }, (error) => {
            const { response: { data }, response: { status }} = error
            Indicator.close()
            if (status === 422 && data.errors) {
              const { errors } = data

            } else throw new Error('Error attach avatar')
          })
        })
      },
      _handleClickAuthOnUser () {
        Indicator.open()

        this.$api.post(`api/admin/v1/auth/${this.user.id}`).then((response) => {
          Indicator.close()

          Toast({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          const { data: { token, role, hasEmail, locale } } = response
          this.$auth.storeSession({ token, role, hasEmail })

          this.$store.dispatch('auth/setLocale', locale || 'ru')

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then( user => {
              this._handleRedirectAfterAuth(user.username)
            });
          });
        }, (error) => {
          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          const { response: { data }, response: { status }} = error

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
      _handleClickPdf () {
        if (this.isCurrentUser) {
          if (!this.hasPortfolio) {
            return Toast({ message: 'Заполните портфолио', iconClass: 'mintui mintui-field-error' })
          } else if (!this.portfolio.publish) {
            return Toast({ message: 'Опубликуйте портфолио', iconClass: 'mintui mintui-field-error' })
          }
        }

        Indicator.open()

        this.$api.get(`/api/v1/users/${this.user.id}/anketa/pdf/links`).then(response => {
          Indicator.close()

          const { data: { data: { pdf } } } = response

          this.pdf.url = pdf
          this.pdf.sheet.value = true
        }).catch(() => {
          Indicator.close()

          Toast({ message: 'Пользователь ограничил доступ', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleClickSendPdfToEmail () {
        this.pdf.stateEmail = true
      },
      _handleSendPdfToEmail () {
        if (!this.isValidEmail) return

        this.$validator.validateAll().then(result => {
          if (result) {
            Indicator.open()
            this.pdf.stateEmail = false

            this.$api.post(this.pdf.url.send_url, this.pdf.fields).then(() => {
              Indicator.close()

              this.pdf.stateSendEmail = true
              this.clearPdf(1000)

            }).catch(() => {
              Indicator.close()
              this.clearPdf()

              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            })
          }
        }).catch(() => {})
      },
      _handleClickDownloadPdf () {
        Indicator.open()
        this.pdf.loading = true

        this.$api.post(this.pdf.url.download_url, {}, { responseType: 'blob' }).then(response => {
          Indicator.close()
          this.pdf.loading = false

          let { data } = response

          FileSaver.saveAs(data, `anketa-${this.user.id}.pdf`)
        }).catch(() => {
          Indicator.close()

          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      clearPdf (timer) {
        const clear = ()=>{
          this.pdf = {
            ...this.pdf,
            stateEmail: false,
            stateSendEmail: false,
            loading: false,
            fields: {
              email: '',
            }
          }
        }

        if (timer) {
          setTimeout(clear, timer)
        } else
          clear()
      },
      _handleClickShowPhone (phone) {
        this.$gtm.trackEvent({ event: 'open_phone_profile' })
        this.$root.$emit('open-modal-show-contact-phone', phone)
      }
    }
  }
</script>
<style lang="sass" scoped>
  .lm-m-casting--list
    .declaration__card
      &:first-child
        margin-top: 0
</style>
