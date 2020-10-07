<template>
  <div :class="['portfolio-template', { 'hidden-in-catalog': user.data['show_in_catalog'] === false }]">
    <template v-if="(user.data['show_in_catalog'] === false)">
      <corner-ribbon style="font-size: 12px;" position="top-right">Скрыто</corner-ribbon>
    </template>
    <div :class="[ 'portfolio-left', { 'is_portfolio_old' : (hasPortfolio && !hasCertification), 'is_certification': (hasCertification), 'has_measurement_certification': hasMeasurementCertification }]">
      <div class="portfolio-left-top">
        <div class="user--info-wrap">
          <a target="_blank" :href="user.data.href" class="user-info-header">
            <div :class="[ 'user-info-img', { 'user-info-verified-img' : isCertifiedUser} ]">
              <img :src="user.data.avatar" :alt="user.data.name">
            </div>
            <div class="user--info--info">
              <div class="d-row align_center">
                <span class="user--info--name">{{ user.data.name | truncate(50) }} </span>
                <template v-if="isCertifiedUser">
                  <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="right" :content="'Верифицированный талант'">
                    <svg class="d-icon d-icon_size_16 ml_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification"/>
                    </svg>
                  </tooltip>
                </template>
              </div>
              <span class="user--info--type" v-bind:title="user.data.category.join(', ')" v-if="(Array.isArray(user.data.category) && user.data.category.length)">
                {{ user.data.category.join(', ') | truncate(50) }}
              </span>
            </div>
          </a>

<!--           <div class="user--info-bottom">
            <span class="user--info--info place" v-if="hasGeo">
              <i class="point"></i>{{ country | truncate(10) }}<template v-if="city"><font>, г.</font>{{ city | truncate(9) }}</template>
            </span>

            <template v-if="age">
              <span class="user--info--info">
              <i class="year"></i>{{ age }}
            </span>
            </template>

            <template v-if="isCertifiedUser">
              <div class="portfolio-left-top-cc">
                <span>Исполнитель верифицирован</span>
              </div>
            </template>
          </div> -->


        </div>
        <template v-if="isCurrentUser === false">
          <template v-if="isAuthorized && authUserIsCustomer">
            <template v-if="(has(user, 'anketa.contactdetails.phone') && user.anketa.contactdetails.phone)">
              <contact-phone-button class="mb_4 w_100"
                                    :phone="user.anketa.contactdetails.phone">
              </contact-phone-button>
            </template>
            <template v-if="(openedMenu === false)">
              <div class="user-info-actions">
                <div class="display_flex">
                  <div>
                    <a href="javascript:void(0)" :class="['button', 'write', { 'disabled': loadingFollow } ]" @click="_handleClickToggleFollowUser">{{ isFollowed ? 'Вы подписаны': 'Подписаться' }}</a>
                  </div>
                  <div>
                    <tooltip content="Добавить в подборку" effect="scale" placement="top">
                      <a class="folder-button" href="javascript:void(0)" @click="_handleClickAddToFolder">
                        <template v-if=" folders.length">
                          <span>{{ folders.length }}</span>
                        </template>
                      </a>
                    </tooltip>
                  </div>
                  <div>
                    <a class="plus-button" href="javascript:void(0)" @mouseenter="_handleMouseEnterMenu()">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42" viewBox="0 0 42 42">
                        <defs>
                          <rect id="b" width="1136" height="830" x="163" y="77" rx="2"/>
                          <filter id="a" width="101.1%" height="101.4%" x="-.5%" y="-.6%" filterUnits="objectBoundingBox">
                            <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="shadowSpreadOuter1"/>
                            <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
                            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.174479167 0"/>
                          </filter>
                          <path id="c" d="M178 375h356v80H178z"/><path id="d" d="M0 0h1443v1575H0z"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                          <path fill="#FDFCFD" d="M-216-123.931H923v572H-216z"/>
                          <circle cx="20" cy="20" r="20" stroke="#0E70E5" transform="translate(1 1)"/>
                          <path fill="#006DF0" d="M27.481 20.222H21.52V14.52a.518.518 0 1 0-1.038 0v5.703H14.52a.518.518 0 1 0 0 1.037h5.962v6.222a.518.518 0 1 0 1.038 0V21.26h5.962a.518.518 0 1 0 0-1.037z"/>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="(openedMenu === true)">
              <div class="user-info-actions f-direction_row" @mouseleave="_handleMouseLeaveMenu">
                <a href="javascript:void(0)" @click="_handleClickToggleFollowUser" :class="{ 'disabled': loadingFollow }">{{ isFollowed ? 'Вы подписаны': 'Подписаться' }}</a>
                <a href="javascript:void(0)" @click.prevent="_handleClickOpenMessagePage">Написать</a>
                <a class="close-button" href="javascript:void(0)"></a>
              </div>
            </template>
          </template>
          <template v-if="(!isAuthorized || authUserIsExecutor)">
            <div class="user-info-actions f-direction_row f-wrap_wrap">
              <template v-if="(has(user, 'anketa.contactdetails.phone') && user.anketa.contactdetails.phone)">
                <contact-phone-button class="mb_4 w_100" event="open_phone_catalog"
                                      :phone="user.anketa.contactdetails.phone">
                </contact-phone-button>
              </template>

              <div class="d-row">
                <div style="width: 100%;">
                  <a href="javascript:void(0)" :class="['button', 'write', { 'disabled': loadingFollow } ]" @click="_handleClickToggleFollowUser">{{ isFollowed ? 'Вы подписаны': 'Подписаться' }}</a>
                </div>
                <div style="width: 100%;">
                  <a href="javascript:void(0)" @click.prevent="_handleClickOpenMessagePage" style="text-align: center; line-height: 38px;">Написать</a>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="portfolio-left-center">
        <div class="portfolio-left-center-wrap">

          <div class="user--info-bottom">
            <span class="user--info--info place" v-if="hasGeo">
              <i class="point"></i>{{ country | truncate(10) }}<template v-if="city">, {{ city | truncate(9) }}</template>
            </span>

            <template v-if="age">
              <span class="user--info--info">
              <i class="year"></i>{{ age }}
            </span>
            </template>
          </div>

          <template v-if="has(user, 'data.category')">
            <div class="user-info-list">
              <ul>
                <li v-if="has(user, 'anketa.profession.actor')">
                  <span class="left">Актер</span>
                  <span v-if="has(user, 'anketa.profession.actor.type-experience')" class="right">{{ user.anketa['profession']['actor']['type-experience'] }}</span>
                </li>
                <li v-if="has(user, 'anketa.profession.model')">
                  <span class="left">Модель</span>
                  <span v-if="has(user, 'anketa.profession.model.type-experience')" class="right">{{ user.anketa['profession']['model']['type-experience'] }}</span>
                </li>
                <li v-if="has(user, 'anketa.profession.leading')">
                  <span class="left">Ведущий</span>
                </li>
                <li v-if="has(user, 'anketa.profession.musician')">
                  <span class="left">Музыкант</span>
                </li>
                <li v-if="has(user, 'anketa.profession.dancer')">
                  <span class="left">Танцор</span>
                  <span v-if="has(user, 'anketa.profession.dancer.type-experience')" class="right">{{ user.anketa['profession']['dancer']['type-experience'] }}</span>
                </li>
                <li v-if="has(user, 'anketa.profession.photographer')">
                  <span class="left">Фотограф / видеограф</span>
                </li>
                <li v-if="has(user, 'anketa.profession.designer')">
                  <span class="left">Художник / дизайнер</span>
                </li>
                <li v-if="has(user, 'anketa.profession.visagiste')">
                  <span class="left">Визажист / стилист</span>
                </li>
                <li v-if="has(user, 'anketa.profession.circus-artist')">
                  <span class="left">Артист цирка / каскадер</span>
                </li>
                <li v-if="has(user, 'anketa.profession.film-crew')">
                  <span class="left">Участник сьемочной группы</span>
                </li>
                <li v-if="has(user, 'anketa.profession.composer')">
                  <span class="left">Композитор</span>
                </li>
              </ul>
            </div>
          </template>
          <template v-if="has(user, 'anketa.skills')">
            <!-- <div class="user-info-separator"><span>Навыки</span></div> -->
            <div class="user-info-list">
              <ul>
                <li v-if="has(user.anketa, 'skills.driving')" class="skills">
                  <span class="header-lists">Вождение</span>
                  <div class="lists">
                    <span v-for="(item, key) in user.anketa.skills['driving']">{{ item }}</span>
                  </div>
                </li>
                <li v-if="has(user.anketa, 'skills.dance-styles')" class="skills">
                  <span class="header-lists">Танцевальные стили</span>
                  <div class="lists">
                    <span v-for="(item, key) in user.anketa.skills['dance-styles']">{{ item }}</span>
                  </div>
                </li>
                <li v-if="has(user.anketa, 'skills.instruments')" class="skills">
                  <span class="header-lists">Музыкальные инструменты</span>
                  <div class="lists">
                    <span v-for="(item, key) in user.anketa.skills['instruments']">{{ item }}</span>
                  </div>
                </li>
                <li v-if="has(user.anketa, 'skills.sport')" class="skills">
                  <span class="header-lists">Спорт</span>
                  <div class="lists">
                    <span v-for="(item, key) in user.anketa.skills['sport']">{{ item }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </template>
          <template v-if="showBodyParameters">
<!--             <div class="user-info-separator">
              <span>Внешность</span>
            </div> -->
            <div class="user-info-list">
              <ul>
                <li v-if="has(user.anketa, 'body-parameters.height')">
                  <span class="left">Рост</span>
                  <span class="right">
                    {{ user.anketa['body-parameters']['height'] }} см
                </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.weight')">
                  <span class="left">Вес</span>
                  <span class="right">
                      {{ user.anketa['body-parameters']['weight'] }} кг
                  </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.body-type')">
                  <span class="left">Телосложение</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['body-type'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.ethnicity')">
                  <span class="left">Внешность</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['ethnicity'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.eye-color')">
                  <span class="left">Цвет глаз</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['eye-color'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.hair-color')">
                  <span class="left">Цвет волос</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['hair-color'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.hair-length')">
                  <span class="left">Длина волос</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['hair-length'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.volume-of-breast')">
                  <span class="left">Объем груди</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['volume-of-breast'] }} см
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.waist')">
                  <span class="left">Объем талии</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['waist'] }} см
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.hips')">
                  <span class="left">Объем бедер</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['hips'] }} см
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.clothing-size')">
                  <span class="left">Размер одежды</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['clothing-size'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.shoe-size')">
                  <span class="left">Размер обуви</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['shoe-size'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.body-piercing')">
                  <span class="left">Пирсинг</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['body-piercing'] }}
                            </span>
                </li>
                <li v-if="has(user.anketa, 'body-parameters.tattoo')">
                  <span class="left">Татуировки</span>
                  <span class="right">
                                {{ user.anketa['body-parameters']['tattoo'] }}
                            </span>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="portfolio-right">
      <template v-if="(hasCertification === true)">
        <div style="height: 100%;">
          <certification-card :certification="certification"></certification-card>
        </div>
      </template>
      <template v-if="(hasCertification === false)">
        <template v-if="hasPortfolio">
          <portfolio-card :portfolio="portfolio" :userUrl="user.data.href"></portfolio-card>
        </template>
        <template v-else-if="hasPortfolio === false">
          <div class="no-portfolio" style="height: 100%;">
            <span>Пользователь еще<br/>не создал портфолио</span>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, redirect } from '@utils'
  import PortfolioCard from './Elements/Portfolio.vue'
  import CertificationCard from './Elements/Certification.vue'

  export default {
    components: { PortfolioCard, CertificationCard },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has,
        loadingFollow: false,
        menu: {
          value: false
        }
      }
    },
    computed: {
      ...mapGetters({
        authRole: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      }),
      authUserIsCustomer () {
        return this.authRole === 'customer'
      },
      authUserIsExecutor () {
        return this.authRole === 'executor'
      },
      isCurrentUser () {
        return (this.authUser && this.authUser.id === this.user.data['user_id'])
      },
      hasPortfolio () {
        return has(this.user, 'portfolio.data');
      },
      hasCertification () {
        return has(this.user.data, 'certification.data.id')
      },
      portfolio () {
        return has(this.user.portfolio, 'data.id') ? this.user.portfolio.data : null
      },
      certification () {
        return has(this.user.data, 'certification.data.id') ? this.user.data.certification.data : null
      },
      hasMeasurementCertification () {
        return (has(this.certification, 'measurement.data.body-parameters')) ? this.certification['measurement']['data']['body-parameters'] : false
      },
      privacy () {
        return this.user.data.privacy.data
      },
      showBodyParameters () {
        return this.has(this.user, 'anketa.body-parameters') && ((Object.keys(this.user.anketa['body-parameters']).length > 1)
          || (Object.keys(this.user.anketa['body-parameters']).length === 1 && !this.user.anketa['body-parameters'].hasOwnProperty('sex')))
      },
      isCertifiedUser () {
        return this.user.data['is_certified_anketa']
      },
      hasGeo () {
        return (has(this.user.data, 'country') && this.user.data.country) || (has(this.user.data, 'city') && this.user.data.city)
      },
      country () {
        return has(this.user.data, 'country') ? this.user.data.country : null
      },
      city () {
        return has(this.user.data, 'city') ? this.user.data.city : null
      },
      age () {
        return this.user.data.age
      },
      openedMenu () {
        return this.menu.value
      },
      folders () {
        return has(this.user.data, 'folders.data') ? this.user.data.folders.data : null
      },
      isFollowed () {
        return this.user['data']['is_followed']
      }
    },
    methods: {
      _handleMouseEnterMenu () {
        this.menu.value = true
      },
      _handleMouseLeaveMenu () {
        this.menu.value = false
      },
      _handleClickOpenMessagePage () {
        if (this.isAuthorized) {
          let uid = this._.sortBy([this.user.data.user_id, this.authUser.id]).toString()
          this.$router.push({ name: 'messages.show', params: { uid } })
        } else redirect('/register')
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.user.data } )
      },
      _handleClickInviteToCasting () {
        this.$root.$emit('open-modal-invite-user-on-casting', { user: this.user.data } )
      },
      _handleClickToggleFollowUser () {
        if (this.loadingFollow ) return false

        if (this.isAuthorized) {
          this.loadingFollow = true
          let { user_id } = this.user.data

          this.$store.dispatch('talent/setTalentOnCatalogFiledById', { id: user_id, key: 'data.is_followed', value: (!this.isFollowed) })

          this.$api.post(`api/v1/follow`, { user_id }).then(response => {
            let { data : { result } } = response
            this.$emit('followed', Boolean(result))
            this.$store.dispatch('talent/setTalentOnCatalogFiledById', { id: user_id, key: 'data.is_followed', value: Boolean(result) })

            if (Boolean(result)) {
              this.$gtm.trackEvent({ event: 'SUBSCRIBE_USER' })
            }

            this.loadingFollow = false
          }).catch(error => {
            const { response: { data, status }} = error

            this.loadingFollow = false
            this.$store.dispatch('talent/setTalentOnCatalogFiledById', { id: user_id, key: 'data.is_followed', value: (!this.isFollowed) })

            throw new Error('Error follow user')
          })
        } else redirect('/register')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .portfolio-template
    position: relative
    &.hidden-in-catalog
      overflow: hidden
    .portfolio-left
      height: 518px
      &.is_certification
        height: 518px
        &.has_measurement_certification
          height: 632px
      &.is_portfolio_old
        height: 480px
    .user--info--info
      &.place
        margin-right: 20px
</style>
