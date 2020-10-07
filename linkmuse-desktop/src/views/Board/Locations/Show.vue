<template>
  <div class="page page_casting page_casting_inner">
    <div class="page__content">
      <template v-if="(location && error === false)">
        <div class="casting casting_inner">

          <template v-if="(isCurrentUser === true)">
            <template v-if="(isModeration === true)">
              <div class="casting__status casting__status_moderation"><span>{{ $t('location.create-location-page.on-moderation') }}</span></div>
            </template>
            <template v-if="(isRejected === true)">
              <div class="casting__status casting__status_refused">{{ $t('location.create-location-page.rejected') }}:
                {{ has(location, 'rejection.cause.text') ? location['rejection']['cause']['text'] : '' }}.
                {{ has(location, 'rejection.comment') ? location['rejection']['comment'] : '' }}
              </div>
            </template>

            <template v-if="(isArchived === true)">
              <div class="casting__status casting__status_archive"><span>{{ $t('location.create-location-page.archive-location') }}</span></div>
            </template>

            <template v-if="(isDraft === true)">
              <div class="casting__status casting__status_draft"><span>{{ $t('location.create-location-page.draft') }}</span></div>
            </template>
          </template>

          <div class="d-row justify_center pt_12">

            <div class="page__body page__body_casting_inner">

              <div :class="['section_casting', 'section_casting_big', 'pt_0', { pb_0: (!location.description) }]">
                <div class="d-row justify_between mb_4 align_center">
                  <ul class="d-breadcrumbs">
                    <li class="d-breadcrumbs__item"><router-link :to="{ name: 'board.locations.index' }">{{ $t('location.create-location-page.location') }}</router-link></li>
                    <li class="d-breadcrumbs__item">
                      <router-link :to="{ name: 'board.locations.index', query: { types: [typeId] } }">
                        {{ type }} <template v-if="dimension">{{ dimension }} м²</template> <template v-if="price">- от {{ price | currency(currency) }}</template> <template v-if="paymentPeriod">{{ paymentPeriod | lowercase }}</template>
                      </router-link>
                    </li>
                  </ul>
                </div>

                <div class="d-row mb_8">
                  <!-- Slider here -->
                  <div class="w_100" style="min-height: 320px">
                    <template v-if="(photos && photos.length)">
                      <div class="d-card__slider_big">
                        <div class="d-card__slider-container">
                          <media class="d-card__slider-item" type="photo" :src="photo['paths']['original']" :media="photo" v-for="photo in photos" :key="`photo-${photo.id}`" :album="`locations-${location.id}`" :thumbs="true">
                            <div class="d-card__slider-wrapper">
                              <div class="LazyImage d-card__slider-image LazyImage_loaded">
                                <div class="LazyImage__previewContainer"></div>
                                <img class="LazyImage__image" :src="photo['paths']['640x360']">
                              </div>
                            </div>
                            <template v-if="(photos.length > 1)">
                              <div class="d-card__slider-button"></div>
                            </template>
                          </media>
                        </div>
                      </div>
                    </template>
                    <template v-if="(!photos || photos.length === 0)">
                      <div class="d-carousel">
                        <div class="d-carousel-slide">
                          <img src="https://i.linkmuse.com/404.jpg">
                        </div>
                      </div>
                    </template>
                  </div>
                </div>

                <template v-if="location.description">
                  <div class="d-row">
                    <div class="d-markdown-layout" v-html="description"></div>
                  </div>
                </template>
              </div>

              <div class="section_casting section_casting_big">
                <template v-if="( type )">
                  <div class="d-row">
                    <div class="label__title">{{ $t('location.create-location-page.location-type') }}</div>
                    <div class="d-text_bold">{{ type }}</div>
                  </div>
                </template>

                <template v-if="( roomType )">
                  <div class="d-row mt_4">
                    <div class="label__title">{{ $t('location.create-location-page.room-type') }}</div>
                    <div class="d-text_bold">{{ roomType }}</div>
                  </div>
                </template>

                <template v-if="( roomHeight )">
                  <div class="d-row mt_4">
                    <div class="label__title">{{ $t('location.create-location-page.room-height') }}</div>
                    <div class="d-text_bold">{{ roomHeight }} м</div>
                  </div>
                </template>

                <template v-if="( dimension )">
                  <div class="d-row mt_4">
                    <div class="label__title">{{ $t('location.create-location-page.total-area') }}</div>
                    <div class="d-text_bold">{{ dimension }} м²</div>
                  </div>
                </template>
              </div>

              <template v-if="(hasAdditionally || facilities || equipment)">
                <div class="section_casting section_casting_big">
                  <template v-if="( facilities )">
                    <div class="d-row mb_4">
                      <div class="label__title">{{ $t('location.location-page.amenities-and-services') }}</div>
                      <div class="d-text_bold">{{ facilities }}</div>
                    </div>
                  </template>

                  <template v-if="( equipment )">
                    <div class="d-row mb_4">
                      <div class="label__title">{{ $t('location.location-page.equipment') }}</div>
                      <div class="d-text_bold">{{ equipment }}</div>
                    </div>
                  </template>

                  <template v-if="(hasAdditionally)">
                    <div class="d-row">
                      <div class="label__title">{{ $t('location.location-page.extra') }}</div>
                      <div class="d-text_bold">{{ additionally.join(', ') }}</div>
                    </div>
                  </template>
                </div>
              </template>

              <div class="section_casting section_casting_big">
                <template v-if="( passSystem )">
                  <div class="d-row mb_4">
                    <div class="label__title">{{ $t('location.location-page.loop-system') }}</div>
                    <div class="d-text_bold">{{ passSystem }}</div>
                  </div>
                </template>

                <template v-if="( location.country )">
                  <div class="d-row mb_4">
                    <div class="label__title">{{ $t('location.create-location-page.country') }}</div>
                    <div class="d-text_bold">{{ location.country.text }}</div>
                  </div>
                </template>

                <template v-if="( location.city )">
                  <div class="d-row mb_4">
                    <div class="label__title">{{ $t('location.create-location-page.city') }}</div>
                    <div class="d-text_bold">{{ location.city.text }}</div>
                  </div>
                </template>

                <template v-if="( location.address && has(location.address, 'address') )">
                  <div class="d-row">
                    <div class="label__title">{{ $t('location.create-location-page.address') }}</div>
                    <div class="d-text_bold">{{ location.address['address'] }}</div>
                  </div>
                </template>

                <template v-if="( showMap )">
                  <div class="d-row mt_12">
                    <div class="label__title">{{ $t('location.create-location-page.map') }}</div>
                    <div class="d-text_bold">
                      <div class="location-map-wrap">
                        <show-location-map :lat="lat" :lng="lng"></show-location-map>
                      </div>
                    </div>
                  </div>
                </template>
              </div>

              <template v-if="(hasContacts === true)">
                <div class="section_casting section_casting_big">
                  <template v-if="(hideContacts === true)">
                    <div class="d-row">
                      <div class="label__title">{{ $t('location.location-page.contacts') }}</div>
                      <div class="d-text_bold">

                        <div class="section_contacts_action">
                          <span>{{ $t('location.location-page.click-to-view') }}</span>
                          <button @click="_handleShowContacts" class="d-btn d-btn_primary">{{ $t('location.location-page.show') }}</button>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <template v-if="(phone)">
                      <div class="d-row">
                        <div class="label__title">{{ $t('location.create-location-page.telephone-number') }}</div>
                        <div class="d-text_bold">
                          <a class="d-text_bold" :href="`tel:${phone}`" target="_self">{{ phone }}</a>
                        </div>
                      </div>
                    </template>
                    <template v-if="(email)">
                      <div class="d-row mt_4">
                        <div class="label__title">{{ $t('location.create-location-page.email') }}</div>
                        <div class="d-text_bold" v-html="$anchorme(email)"></div>
                      </div>
                    </template>
                    <template v-if="(site)">
                      <div class="d-row mt_4">
                        <div class="label__title">{{ $t('location.create-location-page.website') }}</div>
                        <div class="d-text_bold" v-html="$anchorme(site)"></div>
                      </div>
                    </template>
                    <template v-if="(otherContact)">
                      <div class="d-row mt_4">
                        <div class="label__title">{{ $t('location.create-location-page.other') }}</div>
                        <div class="d-text_bold" v-html="$anchorme(otherContact)"></div>
                      </div>
                    </template>
                  </template>
                </div>
              </template>

              <template v-if="(isCurrentUser === false || (isCurrentUser === true && ( isPublished )))">
                <div class="section_casting section_casting_big pb_0">
                  <div class="d-row">
                    <div class="label__title">{{ $t('location.create-location-page.author') }}</div>

                    <div class="d-row w_100 justify_between">
                      <router-link :to="{ name: 'user.show', params: { username: author.username } }">
                        <div class="preview profile__preview">
                          <div class="d-row align_center">
                            <img :src="author.avatar" :alt="author.name" class="img preview__img preview__img_profile">
                            <div class="d-column">
                              <div class="preview__title preview__title_profile">{{ author.name }}</div>
                              <div class="preview__role preview__role_profile" v-if="(0)">
                                {{ author.category.join(', ') | truncate(18) }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </router-link>

                      <div class="section_casting_small">
                        <template v-if="(isArchived === true || isPublished === true)">
                          <social-share-updated :url="(APP_URL + href)" :clipboard="true" position="top" :title="title" :description="$truncate(this.$striptags(description), 50)" class="d-btn_round mr_4 flex_1">
                            <svg class="d-icon d-icon_size_sm">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                            </svg>
                          </social-share-updated>
                        </template>
                        <template v-if="(isCurrentUser === false)">
                          <button class="d-btn d-btn_secondary_filled" @click="_handleClickAbuseLocation">{{ $t('location.location-page.report') }}</button>
                        </template>
                        <template v-if="(isCurrentUser === true && (isPublished ))">
                          <button class="d-btn d-btn_secondary_filled" @click="_handleClickToArchiveLocation">
                            <div>{{ $t('location.create-location-page.archive') }}</div>
                          </button>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div class="sidebar page__sidebar page__sidebar_casting">
              <div class="sidebar__content align_between" :style="{ zIndex: 10, marginBottom: (isCurrentUser ? '50px' : '16px') }" v-sticky="{ zIndex: 10, stickyTop: 104, disabled: false }">
                <div class="section_casting section_casting_big bt_none pt_0">
                  <div class="d-list d-list_casting-info">
                    <template v-if="(isFasten === true)">
                      <div class="d-list__item">
                        <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К объявлению была применена опция «Премиум-размещение»'">
                          <div class="casting__option casting__option_premium">
                            <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                            </svg>
                            Премиум
                          </div>
                        </tooltip>
                      </div>
                    </template>
                    <template v-if="(isPublished === true)">
                      <div class="d-list__item">
                        <div class="casting__creation-date">{{ isToday(location.publishedAt) ? `Сегодня, ${$moment(location.publishedAt).format('HH:mm')}` : $moment(location.publishedAt).format('DD MMM YYYY, HH:mm') }}</div>
                      </div>
                    </template>
                  </div>
                  <div class="d-column mb_8">
                    <div class="heading heading_h2 mb_0">
                      {{ $t('location.location-page.from') }} {{ price | currency(currency) }} / {{ paymentPeriod | lowercase }}
                    </div>

                    <div class="d-column w_100 mt_12">
                      <template v-if="(isCurrentUser === true || isAdmin === true)">
                        <template v-if="(isArchived === true)">
                          <button class="d-btn d-btn_outline mb_3 w_100" @click="_handleClickPublishedLocation">Опубликовать</button>
                        </template>

                        <template v-if="(isAdmin === true && isModeration === true)">
                          <button class="d-btn d-btn_outline mb_3 w_100" @click="_handleClickApproveLocation">Одобрить</button>
                        </template>

                        <button class="d-btn d-btn_primary w_100" @click="_handleClickEditLocation">{{ $t('location.location-page.edit') }}</button>
                      </template>
                      <template v-if="(isCurrentUser === false)">
                        <template v-if="( phone )">
                          <contact-phone-button class="mt_3 mb_3 w_100" :phone="phone" :hovered="false" event="location_show_number"></contact-phone-button>
                        </template>

                        <button class="d-btn d-btn_outline w_100" @click="_handleClickMessage">{{ $t('location.location-page.write-message') }}</button>
                      </template>
                    </div>
                  </div>

                  <template v-if="(isCurrentUser === true && isPublished === true)">
                    <div class="d-column">
                      <lm-loader v-if="promotion['prices']['loading']"></lm-loader>
                      <template v-if="hasPricePromotion">
                        <template v-if="(promotion[UP]['success'] === false && isFasten === false)">
                          <div :class="['d-card_placement', 'd-card_placement-premium', {'mb_6' : promotion[FASTEN]['success'] === false}]">
                            <template v-if="(promotion[FASTEN]['success'] === false)">
                              <div class="d-row align_center justify_between mb_3">
                                <div class="d-row align_center">
                                  <div class="heading heading_h4 mb_0 mr_3">Премиум-размещение</div>

                                  <svg class="d-icon d-icon_size_16 fill_support-3">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                                  </svg>
                                </div>

                                <tooltip style="line-height: 0" effect="scale" placement="left" :content="contentTooltipPremium">
                                  <svg class="d-tooltip__icon fill_gray-3">
                                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                                  </svg>
                                </tooltip>
                              </div>

                              <div class="mb_12">Увеличивает кол-во звонков в 3 раза</div>

                              <div class="sale-line d-text_bold color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                              <div class="line-border_absolute"></div>

                              <div class="pt_3 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                              <div class="d-row justify_between">
                                <template v-if="(promotion[FASTEN]['loading'] === false)">
                                  <button class="d-btn d-btn_primary min-w_178px mr_5" @click="_handleClickCreateLocationPromotion(FASTEN)">Выбрать</button>

                                  <div class="card__price">
                                    <div class="d-text_bold mb_1">{{ promotion['prices']['data'][FASTEN]['discount'] | currency('₽') }} / 7 дней</div>
                                    <div class="d-text_normal">{{ promotion['prices']['data'][FASTEN]['full'] | currency('₽') }} / 7 дней</div>
                                  </div>
                                </template>

                                <template v-if="(promotion[FASTEN]['loading'] === true)"><lm-loader class="w_100 mt_4"></lm-loader></template>
                              </div>
                            </template>

                            <template v-if="(promotion[FASTEN]['success'] === true)">
                              <div class="d-row align_center mb_2">
                                <div class="heading heading_h4 mb_0 mr_3">Объявление закреплено</div>
                                <svg class="d-icon d-icon_check d-icon_size_16">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                                </svg>
                              </div>
                              <div>Ваше обьявление теперь закреплено в топе ленты на семь дней</div>
                            </template>
                          </div>
                        </template>

                        <template v-if="(promotion[FASTEN]['success'] === false)">
                          <div class="d-card_placement">
                            <template v-if="(promotion[UP]['success'] === false)">
                              <div class="d-row align_center justify_between mb_3">
                                <div class="d-row align_center">
                                  <div class="heading heading_h4 mb_0 mr_3">Поднятие в топ</div>

                                  <svg class="d-icon d-icon_check d-icon_size_16 fill_white rotate_180">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom" />
                                  </svg>
                                </div>

                                <tooltip style="line-height: 0" effect="scale" placement="left" :content="contentTooltipRepresentative">
                                  <svg class="d-tooltip__icon fill_gray-3">
                                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                                  </svg>
                                </tooltip>
                              </div>

                              <div class="mb_3">Увеличивает кол-во трафика в 2 раза</div>
                              <div class="line-border"></div>
                              <div class="mt_3 mb_4">Срок размещения: единоразово<br> Оплата: за 1 раз</div>

                              <div class="d-row justify_between">
                                <template v-if="(promotion[UP]['loading'] === false)">
                                  <button class="d-btn d-btn_primary min-w_178px mr_5" @click="_handleClickCreateLocationPromotion(UP)">Выбрать</button>

                                  <div class="card__price justify_center">
                                    <div class="d-text_bold">{{ promotion['prices']['data'][UP]['discount'] | currency('₽') }} / 1 раз</div>
                                  </div>
                                </template>

                                <template v-if="(promotion[UP]['loading'] === true)"><lm-loader class="w_100 mt_4"></lm-loader></template>
                              </div>
                            </template>

                            <template v-if="(promotion[UP]['success'] === true)">
                              <div class="d-row align_center mb_2">
                                <div class="heading heading_h4 mb_0 mr_3">Объявление поднято</div>
                                <svg class="d-icon d-icon_check d-icon_size_16">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                                </svg>
                              </div>
                              <div>Ваше обьявление теперь поднято в топе ленты</div>
                            </template>
                          </div>
                        </template>
                      </template>
                    </div>
                  </template>
                </div>
              </div>
            </div>

          </div>
        </div>
      </template>

      <template v-if="(!location || error)">
        <span>Ошибка, локация не найдена.</span>
      </template>

      <lm-main-footer class="footer-static grey"></lm-main-footer>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { has, HEADER_HEIGHT, redirect } from '@utils'

  import Location from '@modules/Board/Location'
  import ShowLocationMap from '@components/Board/Location/Show/Map.vue'

  import { UP, FASTEN } from '@modules/Board/Enums/PromotionType'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Location/Enums/LocationState'

  const APP_URL = process.env.APP_URL

  export default {
    components: { ShowLocationMap },
    metaInfo () {
      return {
        title: this.seoTitle,
        meta: [
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: this.seoTitle },
          { name: 'description', content: this.$truncate(this.$striptags(this.seoDescription), 200) },
          { name: 'og:description', content: this.$truncate(this.$striptags(this.seoDescription), 200) },
          { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' }
        ]
      }
    },
    async asyncData ({ store, route }) {
      const { id } = route.params

      await store.dispatch('board/location/getLocationById', { id }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error show location', url })
      })
    },
    data () {
      return {
        has,
        APP_URL,
        UP, FASTEN,
        promotion: {
          payment: { form: {}, url: null },
          [UP]: { success: false, loading: false, price: null, id: null, name: null },
          [FASTEN]: { success: false, loading: false, price: null, id: null, name: null },
          prices: { data: { [UP]: { full: 0, percent: 0, discount: 0 }, [FASTEN]: { full: 0, percent: 0, discount: 0 } }, loading: false, error: false }
        },
        hideContacts: true
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        error: 'board/location/getLocationError',
        location: 'board/location/getLocationData',
        loading: 'board/location/getLocationLoading'
      }),
      title () {
        return this.location ? `${this.type} ${this.dimension ? this.dimension : 0}м² - от ${this.price ? this.$currency(this.price, this.currency) : 0} ${this.paymentPeriod ? this.paymentPeriod.toLowerCase() : ''}` : 'Ошибка'
      },
      photos () {
        return (this.location.photos && this.location.photos.length) ? this.location.photos : []
      },
      description () {
        let { description } = this.location;

        if (description) {
          description = this.$htmlspecialchars(description) // Escape special characters to HTML
          description = this.$markdown(description) // Transform markdown to html
          description = this.$anchorme(description) // find link and to <a>
        }

        return description;
      },
      state () {
        return this.location.state
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.location.user.id)
      },
      isModeration () {
        return (this.state === MODERATION)
      },
      isPublished () {
        return (this.state === PUBLISHED)
      },
      isDraft () {
        return (this.state === DRAFT)
      },
      isArchived () {
        return (this.state === ARCHIVED)
      },
      isRejected () {
        return (this.state === REJECTED)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      type () {
        return (this.location.type && has(this.location.type, 'text')) ? this.location.type.text : null
      },
      typeId () {
        return (this.location.type && has(this.location.type, 'id')) ? this.location.type.id : null
      },
      dimension () {
        return Number(this.location.dimension)
      },
      price () {
        return this.location['price']
      },
      currency () {
        return (this.location.currency && has(this.location.currency, 'symbol')) ? this.location.currency.symbol : null
      },
      paymentPeriod () {
        return (this.location.paymentPeriod && has(this.location.paymentPeriod, 'text')) ? this.location.paymentPeriod.text : null
      },
      roomType () {
        return (this.location.roomType && has(this.location.roomType, 'text')) ? this.location.roomType.text : null
      },
      roomHeight () {
        return Number(this.location['roomHeight'])
      },
      facilities () {
        return this.location['facilities']
      },
      equipment () {
        return this.location['equipment']
      },
      hasScene () {
        return Boolean(this.location.scene)
      },
      hasParking () {
        return Boolean(this.location.parking)
      },
      hasExterior () {
        return Boolean(this.location.exterior)
      },
      hasInterior () {
        return Boolean(this.location.interior)
      },
      hasDaylight () {
        return Boolean(this.location.daylight)
      },
      hasCyclorama () {
        return Boolean(this.location.cyclorama)
      },
      hasChromakey () {
        return Boolean(this.location.chromakey)
      },
      hasDressingRoom () {
        return Boolean(this.location.dressingRoom)
      },
      hasEquipmentRental () {
        return Boolean(this.location.equipmentRental)
      },
      hasAdditionally () {
        return this.hasScene || this.hasParking || this.hasExterior ||
          this.hasInterior || this.hasDaylight || this.hasCyclorama ||
          this.hasChromakey || this.hasDressingRoom || this.hasEquipmentRental
      },
      additionally () {
        let additionally = []

        if (this.hasScene) additionally.push('Сцена')
        if (this.hasParking) additionally.push('Парковка')
        if (this.hasExterior) additionally.push('Экстерьер')
        if (this.hasInterior) additionally.push('Декорации')
        if (this.hasDaylight) additionally.push('Дневной свет')
        if (this.hasCyclorama) additionally.push('Циклорама')
        if (this.hasChromakey) additionally.push('Хромакей')
        if (this.hasDressingRoom) additionally.push('Гримёрка')
        if (this.hasEquipmentRental) additionally.push('Прокат оборудования')

        return additionally
      },
      passSystem () {
        return this.location['passSystem']
      },
      address () {
        let attribute = ''

        if (has(this.location, 'country.text')) {
          attribute += this.location.country.text
        }

        if (has(this.location, 'city.text')) {
          attribute += (has(this.location, 'country.text')) ? ', ' : ''
          attribute += this.location.city.text
        }

        if (has(this.location, 'address.address')) {
          attribute += (has(this.location, 'country.text') || has(this.location, 'city.text')) ? ', ' : ''
          attribute += this.location.address['address']
        }

        return attribute
      },
      showMap () {
        return this.lat && this.lng
      },
      lat () {
        return (this.location.address && has(this.location.address, 'lat')) ? this.location.address.lat : null
      },
      lng () {
        return (this.location.address && has(this.location.address, 'lng')) ? this.location.address.lng : null
      },
      phone () {
        return (has(this.location, 'phone') && this.location['phone']) ? this.location['phone'] : null
      },
      email () {
        return (has(this.location, 'email') && this.location['email']) ? this.location['email'] : null
      },
      site () {
        return (has(this.location, 'site') && this.location['site']) ? this.location['site'] : null
      },
      otherContact () {
        return (has(this.location, 'other') && this.location['other']) ? this.location['other'] : null
      },
      hasContacts () {
        return (Boolean(this.phone) || Boolean(this.email) || Boolean(this.site) || Boolean(this.otherContact))
      },
      author () {
        return this.location.user
      },
      href () {
        let { id, slug } = this.location
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'board.locations.show', params: { id, slug }, query })
        return href
      },
      isFasten () {
        return this.location.isFasten || false
      },
      userBalance () {
        return Number(this.user.balance)
      },
      seoTitle () {
        let title = `${this.type}`

        if (has(this.location.city, 'name')) {
          const city = this.$seo.inCity(this, this.location.city)

          if (city) title += ` в ${city}`
        }

        return `${title} ${this.dimension ? this.dimension : 0} кв.м. ${this.price ? `от ${this.price} ${this.currency}` : ''} ${this.paymentPeriod ? this.paymentPeriod.toLowerCase() : ''}`
      },
      seoDescription () {
        let desc = this.type

        if (has(this.location.city, 'name')) {
          const city = this.$seo.inCity(this, this.location.city)

          if (city) desc += ` в ${city}`
        }

        return `${desc}, дата публикации ${this.$moment(this.location.publishedAt).format('DD.MM.YY')}. Все объявления проходят проверку модератором`
      },
      contentTooltipPremium () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите в 3 раза больше звонков, закрепив объявление в топе ленты на семь дней
          </span>
        </div>`
      },
      contentTooltipRepresentative () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите новых клиентов и трафик, единоразово подняв объявление в топ ленты
          </span>
        </div>`
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount'] && Boolean(this.promotion.prices['data'][UP]['discount']) && this.promotion.prices.loading === false))
      }
    },
    mounted () {
      let { query: { ref }, path } = this.$route

      if (ref) {
        this.$localStorage.set('redirect.register', path)
      }

      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false

        this._getPricePromotion()
      }
    },
    methods: {
      ...mapActions({
        setFieldLocationData: 'board/location/setFieldLocationData'
      }),
      _getPricePromotion () {
        this.promotion.prices.loading = true

        this.$api.get(`api/v2/promotions/prices/board_location`).then((response) => {
          let { data: { data } } = response

          Object.assign(this.promotion.prices, { data, loading: false, error: false })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.promotion.prices, { error: true, loading: false })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении цен.' })

          throw new Error('Error fetch professions prices promotion')
        })
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'location_show_contact' })
      },
      _handleClickAbuseLocation () {
        if (this.isAuthorized === false) {
          this._handleClickAbuseWithoutAuthorized()
        } else this._handleAbuseLocation()
      },
      _handleClickAbuseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
      },
      _handleAbuseLocation () {
        let { id } = this.location
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_location' })
      },
      _handleClickEditLocation () {
        let { id } = this.location
        this.$router.push({ name: 'board.locations.edit', params: { id } })
      },
      _handleClickToArchiveLocation () {
        this.$confirm({
          cancelTxt: this.$t('location.create-location-page.cancel'),
          confirmTxt: this.$t('location.create-location-page.archive-button'),
          title: this.$t('location.create-location-page.confirm-action'),
          message: this.$t('location.create-location-page.transfer-to-acrhive')
        }).then(() => {
          this._handleArchive()
        }).catch(() => {})
      },
      _handleArchive () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.location
          this.$api.post(`api/v2/boards/locations/${id}/archive`).then((response) => {
            const { data } = response
            this.setFieldLocationData({ key: 'state', value: ARCHIVED })

            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft location')
          })
        })
      },
      _handleClickPublishedLocation () {
        return new Promise((resolve, reject) => {

          let { id, state } = this.location
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
            this.setFieldLocationData({ key: 'state', value: PUBLISHED })
          } else this.setFieldLocationData({ key: 'state', value: MODERATION })

          this.$api.post(`api/v2/boards/locations/${id}/publish`).then((response) => {
            const { data } = response

            loader.hide()
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            loader.hide()
            this.setFieldLocationData({ key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при публикации локации.' })

            reject && reject()

            throw new Error('Error publish location')
          })
        })
      },
      _handleClickApproveLocation () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })
          let { id } = this.location

          this.$api.post(`/api/admin/v1/boards/locations/${id}/approve`).then((response) => {
            loader.hide()
            let { data: { data } } = response
            this.setFieldLocationData({ key: 'state', value: PUBLISHED })
          }, (err) => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при публикации локации.' })
          })
        })
      },
      _handleClickCreateLocationPromotion (type) {
        let { id } = this.location
        this._createLocationPromotion(id, type)

        let event = (type === UP) ? 'up_ad_location' : 'fasten_ad_location'
        this.$gtm.trackEvent({ event })
      },
      _createLocationPromotion (locationId, type) {
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'board_location', promotedId: locationId, typeName: type }

        this.$api.post(`api/v2/boards/promotions`, data).then(response => {
          let { data: { data: { id, type: { price } } } } = response

          if (this.userBalance >= Number(price)) {
            this._activatePromotion(id, type).then(() => {
              this.promotion[type]['success'] = true
              this.promotion[type]['loading'] = false
            }).catch(() => { this.promotion[type]['loading'] = false })
          } else {
            this._getPaymentFields(price).then(() => {
              this._initCloudPaymentsWidget(id, type).then(() => {
                this.promotion[type]['success'] = true
                this.promotion[type]['loading'] = false
              }).catch(() => { this.promotion[type]['loading'] = false })
            }).catch(() => { this.promotion[type]['loading'] = false })
          }
        }).catch((err) => {
          this.promotion[type]['loading'] = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error(`Error create location promotion.`)
        })
      },
      _activatePromotion (id, type) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/boards/promotions/${id}/activate`).then((response) => {
            const { data } = response
            if (type === FASTEN) {
              this.setFieldLocationData({ key: 'isFasten', value: true })
            }
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            reject && reject()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            throw new Error(`Error payment promotion #${id}`)
          })
        })
      },
      _getPaymentFields (price) {
        return new Promise((resolve, reject) => {
          let amount = parseFloat(price).toFixed(2)

          if (!amount) reject && reject('Need price')

          this.$api.post(`api/v2/billing/payment`, { amount }).then(response => {
            const { data: { form, url } } = response
            this.promotion.payment = { form, url }

            resolve && resolve()
          }).catch((err) => {
            reject && reject()
            throw new Error(`Error get payment fields`)
          })
        })
      },
      _initCloudPaymentsWidget (id, type) {
        if (typeof cp !== 'object') {
          throw new Error('Error load CloudPayments')
        }

        return new Promise((resolve, reject) => {
          const widget = new cp.CloudPayments()
          let { publicId, description, amount, currency, invoiceId, accountId } = this.promotion.payment.form

          widget.charge({
            publicId,
            description,
            amount: Number(amount),
            currency,
            invoiceId,
            accountId
          }, (options) => {
            this._activatePromotion(id, type).then(() => {
              resolve && resolve()
            }).catch(() => { reject && reject() })
          }, (reason, options) => {
            reject && reject()
            throw new Error(`Error payment promotion #${id}. ${reason}`)
          })
        })

      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()

        this.$gtm.trackEvent({ event: 'location_write_message' })
      },
      _handleClickMessageWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        // this.$router.push({ name: 'messages.show', params: { uid } })

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .location-map-wrap {
    width: 524px;
    height: 270px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
  }

</style>
