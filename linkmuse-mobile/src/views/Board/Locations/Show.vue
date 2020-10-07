<template>
  <div :class="['page', 'page_declaration', 'page_declaration_location', 'm-text', { 'pb_0': (isCurrentUser === true) }]">
    <div class="container container_declaration">
      <div class="page__header page__header_declaration page__header_absolute">
        <div class="block block_declaration">
          <div class="row row_justify_between row_justify_between_z-index">
            <button class="btn btn_rounded btn_back" @click="_handleClickPreviousPage">
              <svg class="icon icon_back">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back" />
              </svg>
            </button>

            <template v-if="(location && error === false)">
              <div class="row">
                <social-share-popup :url="(APP_URL + href)" :title="title" :description="$truncate(this.$striptags(description), 50)">
                  <button class="btn btn_rounded">
                    <svg class="icon icon_share">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_share" />
                    </svg>
                  </button>
                </social-share-popup>

                <template v-if="(isAuthorized === true)">
                  <template v-if="(isCurrentUser === true)">
                    <button class="btn btn_rounded btn_edit" @click="_handleClickEditLocation">
                      <svg class="icon icon_edit">
                        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit" />
                      </svg>
                    </button>
                  </template>

                  <button class="btn btn_rounded" @click="_handleClickActionSheet">
                    <svg class="icon icon_options">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options" />
                    </svg>
                  </button>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>

      <template v-if="(location && error === false)">
        <div class="page_declaration_location_slider">
          <template v-if="(photos && photos.length)">
            <no-ssr>
              <carousel :perPage="1" :mouseDrag="true" class="d-carousel">
                <slide v-for="photo in photos" :key="`slide-location-${photo.id}`" class="d-carousel-slide">
                  <media type="photo" :src="photo.paths['original']" :media="photo" :album="`locations-${location.id}`" :thumbs="true">
                    <img :src="photo['paths']['640x360']" :alt="`Локация ${type} #${location.id}`">
                  </media>
                </slide>
              </carousel>
            </no-ssr>
          </template>
          <template v-if="(!photos || photos.length === 0)">
            <div class="d-carousel">
              <div class="d-carousel-slide">
                <img src="https://i.linkmuse.com/404.jpg">
              </div>
            </div>
          </template>
        </div>

        <div class="page__body page__body_declaration">
          <template>
            <template v-if="(isRejected === true)">
              <span class="declaration__status declaration__status_refused">Отклонен:
                {{ has(location, 'rejection.cause.text') ? location['rejection']['cause']['text'] : '' }}.
                {{ has(location, 'rejection.comment') ? location['rejection']['comment'] : '' }}</span>
            </template>

            <template v-if="(isModeration === true)">
              <span class="declaration__status declaration__status_moderation">На модерации</span>
            </template>

            <template v-if="(isDraft === true)">
              <span class="declaration__status declaration__status_draft">Черновик</span>
            </template>

            <template v-if="(isArchived === true)">
              <span class="declaration__status declaration__status_archive">Архив</span>
            </template>
          </template>

          <div class="block block_declaration bt_none">
            <div class="list list__title-info mb_3">
              <template v-if="(isFasten === true)">
                <div class="list__item">
                  <svg class="icon icon_size_12 fill_support-3 mr_2">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-favourite" />
                  </svg>
                  Премиум
                </div>
              </template>
              <template v-if="(isPublished === true)">
                <div class="list__item casting__creation-date">
                  {{ isToday(location.publishedAt) ? 'Сегодня' : $moment(location.publishedAt).format('DD MMMM YYYY') }}
                </div>
              </template>
            </div>

            <div class="heading heading_h4 mb_0">От {{ price | currency(currency) }} / {{ paymentPeriod | lowercase }}</div>

            <template v-if="location.description">
              <div class="description description_declaration description_declaration_location" v-html="description"></div>
            </template>
          </div>

          <div class="block block_declaration">
            <template v-if="( type )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.location-type') }}</div>
                <div class="text text_declaration">{{ type }}</div>
              </div>
            </template>
            <template v-if="( roomType )">
              <div class="column column_declaration">
                <div class="label label_declaration">Тип помещения</div>
                <div class="text text_declaration">{{ roomType }}</div>
              </div>
            </template>
            <template v-if="( roomHeight )">
              <div class="column column_declaration">
                <div class="label label_declaration">Высота помещения</div>
                <div class="text text_declaration">{{ roomHeight }} м</div>
              </div>
            </template>
            <template v-if="( dimension )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.total-area') }}</div>
                <div class="text text_declaration">{{ dimension }} м<sup>2</sup></div>
              </div>
            </template>
          </div>

          <template v-if="(hasAdditionally || facilities || equipment)">
            <div class="block block_declaration">
              <template v-if="(facilities)">
                <div class="column column_declaration">
                  <div class="label label_declaration">{{ $t('location.location-page.amenities-and-services') }}</div>
                  <div class="text text_declaration">{{ facilities }}</div>
                </div>
              </template>

              <template v-if="( equipment )">
                <div class="column column_declaration">
                  <div class="label label_declaration">{{ $t('location.location-page.equipment') }}</div>
                  <div class="text text_declaration">{{ equipment }}</div>
                </div>
              </template>

              <template v-if="(hasAdditionally)">
                <div class="column column_declaration">
                  <div class="label label_declaration">{{ $t('location.location-page.extra') }}</div>
                  <div class="text text_declaration">{{ additionally.join(', ') }}</div>
                </div>
              </template>
            </div>
          </template>

          <div class="block block_declaration">
            <template v-if="( passSystem )">
              <div class="column column_declaration">
                <div class="label label_declaration">Проходная система</div>
                <div class="text text_declaration">{{ passSystem }}</div>
              </div>
            </template>

            <template v-if="( location.country )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.country') }}</div>
                <div class="text text_declaration">{{ location.country.text }}</div>
              </div>
            </template>
            <template v-if="( location.city )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.city') }}</div>
                <div class="text text_declaration">{{ location.city.text }}</div>
              </div>
            </template>
            <template v-if="( location.address && has(location.address, 'address') )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.address') }}</div>
                <div class="text text_declaration">{{ location.address['address'] }}</div>
              </div>
            </template>

            <template v-if="( showMap )">
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('location.location-page.map') }}</div>
                <div class="text text_declaration">
                  <show-location-map :lat="lat" :lng="lng"></show-location-map>
                </div>
              </div>
            </template>
          </div>

          <template v-if="(hasContacts === true)">
            <div class="block block_declaration">
              <template v-if="(hideContacts === true)">
                <div class="section_contacts_action">
                  <span>{{ $t('location.location-page.click') }}</span>
                  <button @click="_handleShowContacts" class="btn btn_primary">{{ $t('location.location-page.show') }}</button>
                </div>
              </template>
              <template v-else>
                <template v-if="(phone)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">Телефон</div>
                    <div class="text text_declaration">
                      <a :href="`tel:${phone}`" target="_self">{{ phone }}</a>
                    </div>
                  </div>
                </template>

                <template v-if="(email)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">E-mail</div>
                    <div class="text text_declaration" v-html="$anchorme(email)"></div>
                  </div>
                </template>

                <template v-if="(site)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">Сайт</div>
                    <div class="text text_declaration" v-html="$anchorme(site)"></div>
                  </div>
                </template>

                <template v-if="(otherContact)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">Другое</div>
                    <div class="text text_declaration" v-html="$anchorme(otherContact)"></div>
                  </div>
                </template>
              </template>
            </div>
          </template>

          <div class="block block_declaration">
            <div class="preview profile__preview">
              <router-link :to="{ name: 'user.show', params: { username: author.username } }" class="row row_align_center">
                <img :src="author.avatar" :alt="author.name" class="img preview__img preview__img_profile">
                <div class="column">
                  <div class="column">
                    <div class="preview__title preview__title_profile">{{ author.name }}</div>
                    <div class="preview__role preview__role_profile" v-if="(Array.isArray(author.category) && author.category.length)">
                      {{ author.category.join(', ') | truncate(18) }}
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <template v-if="(isCurrentUser === true && true === false)">
            <div class="block block_declaration">
              <div class="row">
                <div class="widget widget_views">
                  <svg class="icon widget__icon icon_views">
                    <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_eye" />
                  </svg>
                  <div class="widget__count">{{ location.counters.viewed }}</div>
                </div>
                <template v-if="(true === false)">
                  <div class="widget widget_like">
                    <svg class="icon widget__icon icon_like">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
                    </svg>
                    <div class="widget__count">0</div>
                  </div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(isCurrentUser === true && isFasten === false)">
            <lm-m-loader v-if="promotion['prices']['loading']"></lm-m-loader>

            <template v-if="hasPricePromotion">
              <template v-if="(promotion[UP]['success'] === false)">
                <div :class="['card', 'card__placement', 'card__placement_premium',
                  {'mb_4' : promotion[UP]['success'] === false, 'mb_6' : promotion[UP]['success'] === true}]">
                  <div class="card__content">
                    <template v-if="(promotion[FASTEN]['success'] === false)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Премиум-размещение</div>
                        <svg class="icon icon_size_16 fill_support-3 ml_2">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-favourite" />
                        </svg>
                      </div>

                      <div class="m-text_normal mb_3">Увеличивает кол-во звонков в 3 раза</div> <!-- .mb_12 -->

                      <div class="sale-line m-text_bold-2 color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                      <div class="line-border_absolute"></div>

                      <div class="m-text_normal p_t_12 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                      <div class="row justify_between">
                        <button class="btn btn_primary w_100 max-w_272px mr_5" @click="_handleClickCreateLocationPromotion(FASTEN)">Выбрать</button>
                        <div class="card__price">
                          <div class="m-text_bold mb_1">{{ promotion['prices']['data'][FASTEN]['discount'] | currency('₽') }} / 7 дней</div>
                          <div class="m-text_normal">{{ promotion['prices']['data'][FASTEN]['full'] | currency('₽') }} / 7 дней</div>
                        </div>
                      </div>
                    </template>

                    <template v-if="(promotion[FASTEN]['success'] === true)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Объявление закреплено</div>
                        <svg class="icon icon_size_16 icon_check ml_3">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#checkbox__mark" />
                        </svg>
                      </div>
                      <div class="m-text_normal">Ваше обьявление теперь закреплено в топе ленты на семь дней</div>
                    </template>
                  </div>
                </div>
              </template>

              <template v-if="(promotion[UP]['success'] === false)">
                <div class="card card__placement mb_6">
                  <div class="card__content">
                    <template v-if="(promotion[FASTEN]['success'] === false)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Поднятие в топ</div>
                        <svg class="icon icon_size_16 icon_check fill_white rotate_180 ml_2">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron" />
                        </svg>
                      </div>

                      <div class="m-text_normal mb_3">Увеличивает кол-во трафика в 2 раза</div>

                      <div class="line-border mb_3"></div>

                      <div class="m-text_normal mb_4">Срок размещения: единоразово<br> Оплата: за 1 раз</div>

                      <div class="row justify_between align_center">
                        <button class="btn btn_primary w_100 max-w_272px mr_5" @click="_handleClickCreateLocationPromotion(UP)">Выбрать</button>
                        <div class="card__price">
                          <div class="m-text_bold">{{ promotion['prices']['data'][UP]['discount'] | currency('₽') }} / 1 раз</div>
                        </div>
                      </div>
                    </template>

                    <template v-if="(promotion[FASTEN]['success'] === true)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Объявление поднято</div>
                        <svg class="icon icon_size_16 icon_check ml_3">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#checkbox__mark" />
                        </svg>
                      </div>
                      <div class="m-text_normal">Ваше обьявление теперь поднято в топе ленты</div>
                    </template>
                  </div>
                </div>
              </template>
            </template>
          </template>
        </div>
      </template>

      <template v-if="(!location || error)">
        <span>Ошибка, локация не найдена.</span>
      </template>
    </div>

    <template v-if="(isCurrentUser === false && (location && error === false))">
      <div class="page__footer page__footer_declaration">
        <div class="page__block_declaration">
          <div class="row row_justify_between">
            <button class="btn btn_chat btn_rounded" @click="_handleClickMessage">
              <svg class="icon icon_chat">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_chat" />
              </svg>
            </button>
            <a :href="`tel:${phone}`" class="btn btn_primary w_100 max-w_272px ml_9" @click="_handleClickCallUser">{{ $t('location.location-page.call') }}</a>
          </div>
        </div>
      </div>
    </template>

    <actionsheet :actions="sheet.actions" v-model="sheet.value" cancel-text="" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import { has, isBrowser } from '@utils'
  import { Indicator, Toast } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import Location from '@modules/Board/Location'
  import ShowLocationMap from '@components/Board/Location/Show/Map.vue'

  import { viewLocation } from '@modules/Rating/Enums/events'
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
        sheet: {
          value: false,
          actions: []
        },
        promotion: {
          payment: { form: {}, url: null },
          [UP]: { success: false, loading: false },
          [FASTEN]: { success: false, loading: false },
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
          attribute += (has(this.location, 'country.text')) ?  ', ' : ''
          attribute += this.location.city.text
        }

        if (has(this.location, 'address.address')) {
          attribute += (has(this.location, 'country.text') || has(this.location, 'city.text')) ?  ', ' : ''
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
        return ( Boolean(this.phone) || Boolean(this.email) || Boolean(this.site) || Boolean(this.otherContact))
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
      userBalance() {
        return this.user.balance
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

          if (city) desc+= ` в ${city}`
        }

        return `${desc}, дата публикации ${this.$moment(this.location.publishedAt).format('DD.MM.YY')}. Все объявления проходят проверку модератором`
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount'] && Boolean(this.promotion.prices['data'][UP]['discount']) && this.promotion.prices.loading === false))
      }
    },
    created () {
      this._draftSheet()
    },
    mounted () {
      let { query: { ref }, path } = this.$route

      if (ref) {
        this.$localStorage.set('redirect.register', path)
      }

      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false

        this._getPricePromotion()
      } else {
        if (isBrowser) this.$nsWebViewInterface.emit('rating', viewLocation)
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
      _draftSheet () {
        return new Promise((resolve, reject) => {
          try {
            if (this.isCurrentUser === true) {
              if (this.location && this.location.state !== ARCHIVED) {
                this.sheet.actions.push({
                  name: 'Редактировать',
                  method: this._handleClickEditLocation
                })
              }

              if (this.location && this.location.state === ARCHIVED) {
                this.sheet.actions.push({
                  name: 'Опубликовать',
                  method: this._handleClickPublishedLocation
                })
              }

              if (this.location && this.location.state === PUBLISHED) {
                this.sheet.actions.push({
                  name: 'В архив',
                  method: this._handleClickToArchiveLocation
                })
              }
            }

            if (this.isCurrentUser === false) {
              this.sheet.actions.push({
                name: 'Пожаловаться',
                method: this._handleAbuseLocation
              })
            }

            if (this.isAdmin === true && this.location.state === MODERATION) {
              this.sheet.actions.push({
                name: 'Одобрить',
                method: this._handleClickApproveLocation
              })
            }

            if (this.isAuthorized && this.user) {
              this.sheet.actions.push({
                name: 'Скопировать ссылку',
                method: this._handleClickClipBoardLocation
              })
            }

            if (this.isAdmin === true && this.isCurrentUser === false) {
              this.sheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditLocation
              })
            }

            resolve && resolve(true)
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _clearSheet() {
        return new Promise((resolve, reject) => {
          try {
            this.sheet.actions = []
            resolve && resolve(true)
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'board.locations.index' })
      },
      _handleClickEditLocation () {
        let { id } = this.location
        this.$router.push({ name: 'board.locations.edit', params: { id } })
      },
      _handleClickActionSheet () {
        this.sheet.value = true
      },
      _handleClickClipBoardLocation () {
        let { id, slug } = this.location
        const { href } = this.$router.resolve({ name: 'board.locations.show', params: { id, slug }, query: { ref: this.user.id } })

        this.$copyText(APP_URL + href).then((e) => {
          Toast({ message: 'Успешно',  iconClass: 'mintui mintui-success' })
        }, (e) => {
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleAbuseLocation () {
        let { id } = this.location
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_location' })
      },
      _handleClickPublishedLocation () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          let { id } = this.location

          this.$api.post(`api/v2/boards/locations/${id}/publish`).then((response) => {
            const { data } = response

            if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
              this.setFieldLocationData({ key: 'state', value: PUBLISHED })
            } else this.setFieldLocationData({ key: 'state', value: MODERATION })

            Indicator.close()
            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error publish location')
          })
        })
      },
      _handleClickToArchiveLocation () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive()
        }).catch(() => {})
      },
      _handleArchive () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.location
          this.$api.post(`api/v2/boards/locations/${id}/archive`).then((response) => {
            const { data } = response
            this.setFieldLocationData({ key: 'state', value: ARCHIVED })
            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft location')
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
          this.$router.push({ name: 'register' })
        })
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickApproveLocation () {
        Indicator.open()
        let { id } = this.location

        this.$api.post(`/api/admin/v1/boards/locations/${id}/approve`).then((response) => {
          Indicator.close()
          let { data: { data } } = response
          this.setFieldLocationData({ key: 'state', value: PUBLISHED })
          this._clearSheet().then(() => this._draftSheet()).catch(() => {})

        }, (err) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'location_show_contact' })
      },
      _handleClickCreateLocationPromotion (type) {
        let { id } = this.location
        this._createLocationPromotion(id, type)
      },
      _createLocationPromotion (locationId, type) {
        Indicator.open()
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'board_location', promotedId: locationId, typeName: type }

        this.$api.post(`api/v2/boards/promotions`, data).then(response => {
          let { data: { data: { id, type: { price } } } } = response

          if (this.userBalance >= Number(price)) {
            this._activatePromotion(id, type).then(() => {
              Indicator.close()
              this.promotion[type]['success'] = true
              this.promotion[type]['loading'] = false
            }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
          } else {
            this.$nativeCloudPayments.pay(price).then(data => {
              const { status } = data

              if (status === 'success') {
                this.promotion[type]['success'] = true
              }

              this.promotion[type]['loading'] = false
              Indicator.close()
            }).catch(e => {
              this._getPaymentFields(price).then(() => {
                this._initCloudPaymentsWidget(id, type).then(() => {
                  Indicator.close()
                  this.promotion[type]['success'] = true
                  this.promotion[type]['loading'] = false
                }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
              }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
            })
          }
        }).catch((err) => {
          this.promotion[type]['loading'] = false

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error(`Error create location promotion.`)
        })
      },
      _activatePromotion (id, type) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/boards/promotions/${id}/activate`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            reject && reject()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'location_call' })
      }
    }
  }
</script>

<style scoped>

</style>
