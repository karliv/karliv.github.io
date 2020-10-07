<template>
    <div :class="['d-card', { 'd-card_premium': (isCatalogPage === true && isFasten === true) }]">
      <router-link :to="{ name: 'board.castings.show', params: { slug, id } }" :class="['section', 'd-card__section', { 'opacity_64' : (isArchived === true) }]">
        <div class="d-row justify_between">
          <div class="d-column">
            <div class="d-row justify_between">
              <template v-if="(isCatalogPage === true)">
                <div :class="[ 'd-card__type_casting' ]">
                  <template>{{ category }}</template>
                </div>
              </template>
              <template v-if="(isCatalogPage === false)">
                <div :class="[ 'd-card__status_casting', classColorState, { 'mb_2': (!casting.name) } ]">
                  <template v-if="(isCurrentUser === false)">{{ category }}</template>
                  <template v-if="(isCurrentUser === true)">
                    <template v-if="(isDraft === true)">Черновик</template>
                    <template v-else-if="(isModeration === true)">На модерации</template>
                    <template v-else-if="(isRejected === true)">
                      Отклонен: {{ has(casting, 'rejection.cause.text') ? casting['rejection']['cause']['text'] : '' }}.
                      {{ has(casting, 'rejection.comment') ? casting['rejection']['comment'] : '' }}
                    </template>
                    <template v-else-if="(isPublished === true)">Опубликован</template>
                    <template v-else-if="(isArchived === true)">Архив</template>
                    <template v-else>Ваше объявление</template>
                  </template>
                </div>
              </template>

              <template>
                <template v-if="(isFasten === true)">
                  <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К объявлению была применена опция «Премиум-размещение»'">
                    <div class="casting__option casting__option_premium">
                      <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                      </svg>
                      Премиум
                    </div>
                  </tooltip>
                </template>
                <template v-if="(isFasten === false && casting.publishedAt)">
                  <div class="d-card__date_casting-creation">
                    {{ isToday(casting.publishedAt) ? 'Сегодня' : $moment(casting.publishedAt).format('DD MMM YYYY') }}
                    <span>, {{ $moment(casting.publishedAt).format('HH:mm') }}</span>
                  </div>
                </template>
              </template>
            </div>

            <template v-if="casting.name">
              <div class="heading heading_h4" v-html="casting.name"></div>
            </template>

            <template v-if="casting.description">
              <div class="d-card__description_casting" v-html="description"></div>
            </template>

            <div class="d-card__list d-card__list_casting-parameters">
              <template v-if="(isCastingOnline === true)">
                <div>Онлайн</div>
              </template>
              <template v-if="(city && isCastingOnline === false)">
                <div>{{ city.text }}</div>
              </template>
              <template v-if="( professions && professions.length )">
                <div>{{ professions.slice(0, 2).join(', ') }} <template v-if="(professions.length > 2)">...</template></div>
              </template>
              <template v-if="( genders && genders.length )">
                <div>{{ genders.join(', ') | truncate(18) }}</div>
              </template>
              <template v-if="( ages )">
                <div>{{ ages }}</div>
              </template>
            </div>
          </div>
        </div>
      </router-link>
      <div class="section d-card__section">
        <div :class="['d-row', { 'opacity_64' : (isArchived === true) }]">
          <div class="d-column">
            <div class="d-card__date_casting">
              <span>Дата кастинга:</span>
              <template v-if="(casting.dateStart || casting.dateEnd)">
                <template v-if="(casting.dateStart && casting.dateEnd && (casting.dateStart === casting.dateEnd))">
                  {{ $moment(casting.dateStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                </template>
                <template v-else>
                  <template v-if="casting.dateStart">
                    {{ casting.dateEnd ? '' : 'с' }}
                    {{ $moment(casting.dateStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                  </template>
                  <template v-if="casting.dateEnd">
                    {{ casting.dateStart ? '-' : 'до' }}
                    {{ $moment(casting.dateEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
                  </template>
                </template>
              </template>
              <template v-else>уточняется</template>
            </div>
            <div class="d-card__date_work">
              <span>Дата работы:</span>
              <template v-if="(casting.dateWorkStart || casting.dateWorkEnd)">
                <template v-if="(casting.dateWorkStart && casting.dateWorkEnd && (casting.dateWorkStart === casting.dateWorkEnd))">
                  {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                </template>
                <template v-else>
                  <template v-if="casting.dateWorkStart">
                    {{ casting.dateWorkEnd ? '' : 'с' }}
                    {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                  </template>
                  <template v-if="casting.dateWorkEnd">
                    {{ casting.dateWorkStart ? '-' : 'до' }}
                    {{ $moment(casting.dateWorkEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
                  </template>
                </template>
              </template>
              <template v-else>уточняется</template>
            </div>

            <div class="d-card__fee_casting">
              <template v-if="fee">
                <template v-if="(fee.amount)">{{ fee.amount | currency(fee.currency) }} <template v-if="(fee.type)">/ {{ fee.type | lowercase }}</template></template>
                <template v-else>Гонорар обсуждается</template>
              </template>
              <template v-else>Без гонорара</template>
            </div>
          </div>
        </div>
        <div class="d-row w_100 justify_between mt_5">
          <template>
            <div class="d-column w_auto">
              <div class="d-row">
                <template v-if="(isCurrentUser === false)">
                  <template v-if="(canRespond === true || isAuthorized === false || isResponded === true)">
                    <button :class="['d-btn', 'd-btn_primary', 'mr_4']" :disabled="(isResponded === true)" @click="_handleClickResponse">
                      {{ (isResponded === true) ? 'Отклик отправлен' : 'Откликнуться' }}
                    </button>

                    <button class="d-btn d-btn_outline mr_4" @click="_handleClickMessage">Написать сообщение</button>
                  </template>

                  <template v-else-if="(canRespond === false)">
                    <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'Вы не можете откликнуться – данные в этом объявлении устарели.'">
                      <a href="javascript:void(0)" :class="['d-btn', 'd-btn_primary', 'mr_4', 'disabled']" :style="{ pointerEvents: 'auto' }">
                        Кастинг неактуален
                      </a>
                    </tooltip>
                  </template>
                </template>
                <template v-if="((isCurrentUser === true || (isCurrentUser === false && isAdmin === true)) && (isCatalogPage === true || (isCatalogPage === false && (isPublished === true || isArchived === true))))">
                  <router-link :to="{ name: 'board.castings.show', params: { slug, id }, query: { responses: true } }" :class="['d-btn', 'mr_4', { 'd-btn_primary': isCurrentUser, 'd-btn_outline': (isCurrentUser === false && isAdmin === true) }]">
                    отклики
                    <template v-if="(responses.total)">
                      {{ responses.total }}
                      <template v-if="(responses['notRead'])">(+{{ responses['notRead'] }})</template>
                    </template>
                  </router-link>
                </template>
                <template v-if="(isCurrentUser === true && isCatalogPage === false && isModeration === true)">
                  <button :class="['d-btn', 'd-btn_primary', 'mr_4']" :disabled="isModeration">
                    отклики
                  </button>
                </template>
                <template v-if="(isCurrentUser === true && isDraft === true)">
                  <router-link :to="{ name: 'board.castings.edit', params: { id } }" class="d-btn d-btn_primary">
                    Продолжить
                  </router-link>
                </template>
                <template v-if="(isCurrentUser === true && isRejected === true)">
                  <router-link :to="{ name: 'board.castings.edit', params: { id } }" class="d-btn d-btn_primary">
                    Редактировать
                  </router-link>
                </template>
              </div>
            </div>
            <div class="d-column w_auto z-index_3">
              <div class="d-row">
                <template v-if="isCurrentUser === false">
                  <template v-if="(true === false)">
                    <button :class="['d-btn', 'd-btn_round', 'd-btn_secondary_filled', 'mr_4', 'd-btn_like', { 'd-btn_like_active': casting['isFavorited'] }]" @click="_handleClickFavorite">
                      <svg class="d-icon d-icon_size_16">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                      </svg>
                    </button>
                  </template>

                  <template v-if="isAdmin">
                    <button :class="['d-btn', 'd-btn_round', 'd-btn_edit', 'd-btn_secondary_filled', 'mr_4']" @click="_handleClickEditCasting">
                      <svg class="d-icon d-icon_size_16">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
                      </svg>
                    </button>
                  </template>

                  <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" :title="title" :description="$truncate(this.$htmlspecialchars(this.$striptags(description)), 50)" class="d-btn_round mr_4" position="top">
                    <svg class="d-icon d-icon_size_16">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                    </svg>
                  </social-share-updated>

                  <more-actions :hover="true" position="top" class="d-btn_secondary_filled">
                    <a class="list__item" href="javascript:void(0)" @click="_handleClickAbuseCasting">Пожаловаться</a>
                  </more-actions>
                </template>

                <template v-if="((isCurrentUser && isRejected === false) || (isAdmin && isModeration))">
                  <template v-if="(isPublished === true)">
                    <social-share-updated :url="(APP_URL + href)" :clipboard="true" :title="title" :description="$truncate(this.$htmlspecialchars(this.$striptags(description)), 50)"
                                          :class="['d-btn_round', 'mr_4', 'd-btn_secondary_filled' ]" position="top">
                      <svg class="d-icon d-icon_size_16">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                      </svg>
                    </social-share-updated>
                  </template>

                  <template v-if="(isDraft === false)">
                    <template v-if="isCurrentUser && ((isPublished === false && isCatalogPage === false) || isAdmin)">
                      <button :class="['d-btn', 'd-btn_round', 'd-btn_edit', 'd-btn_secondary_filled']" @click="_handleClickEditCasting">
                        <svg class="d-icon d-icon_size_16">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_edit" />
                        </svg>
                      </button>
                    </template>

                    <template v-if="(isPublished === true || isCatalogPage === true || isArchived === true || (isAdmin && isModeration))">
                      <more-actions position="top" :hover="true" :class="[ 'ml_4', 'd-btn_secondary_filled']">
                        <template v-if="(isPublished === true || isCatalogPage === true)">
                          <a class="list__item" href="javascript:void(0)" @click="_handleClickArchiveCasting">В архив</a>
                        </template>

                        <template v-if="(isArchived === true)">
                          <a class="list__item" href="javascript:void(0)" @click="_handleClickPublishedCasting">Опубликовать</a>
                        </template>

                        <template v-if="(isAdmin && isModeration)">
                          <a class="list__item" href="javascript:void(0)" @click="_handleClickApproveCasting">Одобрить</a>
                        </template>
                      </more-actions>
                    </template>
                  </template>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  import Casting from '@modules/Board/Casting'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Casting/Enums/CastingState'

  const APP_URL = process.env.APP_URL

  export default {
    props: {
      casting: {
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
        show: true,
        has,
        APP_URL
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized'
      }),
      isCustomer () {
        return (this.role === 'customer')
      },
      isExecutor () {
        return (this.role === 'executor')
      },
      hasSecondaryUser () {
        return (this.user && this.user.hasOwnProperty('secondary_user')) ? this.user['secondary_user'] : false
      },
      title () {
        return `Кастинг ${this.casting ? this.casting.name : 'ошибка'}`
      },
      description () {
        let { description } = this.casting;

        if (description) {
          description = this.$htmlspecialchars(description) // Escape special characters to HTML
          description = this.$markdown(description) // Transform markdown to html
          description = this.$anchorme(description) // find link and to <a>
          description = this.$striptags(description) // find link and to <a>
        }

        return description;
      },
      id () {
        return this.casting.id
      },
      slug () {
        return this.casting.slug
      },
      href () {
        let { id, slug } = this.casting
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'board.castings.show', params: { id, slug }, query })
        return href
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.casting.user.id)
      },
      professions () {
        return (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((p => p.text)) : []
      },
      genders () {
        return (this.casting.genders && this.casting.genders.length) ? this.casting.genders.map((gender => gender.text)) : []
      },
      category () {
        return (this.casting.category && has(this.casting.category, 'text')) ? this.casting.category.text : null
      },
      fee () {
        if (!this.casting.fee || (this.casting.fee && this.casting.fee.available === false)) return false
        return Casting.getAmountSemanticCatalog(this.casting.fee)
      },
      author () {
        return this.casting.user
      },
      ages () {
        let attribute = ''
        if (this.casting.ageFrom || this.casting.ageTo) {
          if (this.casting.ageFrom ) {
            attribute += this.casting.ageTo
              ? this.casting.ageFrom + ' - '
              : 'от ' + this.casting.ageFrom
          }

          if (this.casting.ageTo && this.casting.ageFrom) {
            attribute += this.casting.ageTo
          } else if (this.casting.ageTo && !this.casting.ageFrom) {
            attribute += 'до ' + this.casting.ageTo
          }
        }

        if ((this.casting.ageFrom && this.casting.ageTo) && this.casting.ageFrom === this.casting.ageTo) {
          attribute = this.casting.ageFrom
        }

        return attribute
      },
      isResponded () {
        return this.casting.isResponded || false
      },
      responses () {
        if (this.isCurrentUser === false && this.isAdmin === false) return false
        return has(this.casting, 'counters.responses') ? this.casting.counters.responses : false
      },
      city () {
        return has(this.casting, 'city.id') ? this.casting.city : null
      },
      state () {
        return this.casting.state
      },
      classColorState () {
        return Casting.getCastingStateClass(this.state)
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
      isCastingOnline () {
        return Boolean(this.casting.isOnline)
      },
      canRespond () {
        return has(this.casting, 'abilities.respond') ? this.casting['abilities']['respond'] : false
      },
      canRespondWithoutSelectProfession () {
        return has(this.casting, 'abilities.respondWithoutSelectProfession') ? this.casting['abilities']['respondWithoutSelectProfession'] : false
      },
      isFasten () {
        return this.casting.isFasten || false
      },
      forTrusted () {
        return this.casting.forTrusted || false
      },
      portfolioBadQuality () {
        return (this.user && this.user.hasOwnProperty('portfolio_bad_quality') ? this.user['portfolio_bad_quality'] : null)
      },
      hasCertification () {
        return (this.user && this.user.hasOwnProperty('has_certification') ? this.user['has_certification'] : false)
      },
      hasPortfolio () {
        return (this.user && this.user.hasOwnProperty('has_portfolio') ? this.user['has_portfolio'] : false)
      }
    },
    mounted () {
      let { id } = this.casting
      this.$root.$on('response-created', (castingId, response) => {
        if (castingId === id) {
          this.$emit('changeState', { id: castingId, key: 'isResponded', value: true })
        }
      })
    },
    methods: {
      _handleClickResponse () {
        if (this.isAuthorized === true) {
          if (this.isResponded === false) {
            if (this.canRespond && this.canRespondWithoutSelectProfession) {
              let message = (this.city && this.user && has(this.user, 'city.id') && this.user.city.id !== this.city.id)
                ? `Кастинг проходит в городе ${this.city.text}` : ''
              this.$confirmResponse({
                message,
                cancelTxt: '',
                confirmTxt: 'Отправить',
                title: this.casting.name
              }).then(() => this._handleResponse()).catch(() => {})
            } else if (this.canRespond && this.canRespondWithoutSelectProfession === false) {
              this.$modalRouter.push({ name: 'board.castings.responses.create', props: { casting: this.casting } })
            } else this.$notify({ type: 'error', title: 'Ошибка', text: 'Ограничение отклика на кастинг.' })
          } else this.$notify({ type: 'error', title: 'Ошибка', text: 'Отклик уже отправлен.' })
        } else this._handleClickResponseWithoutAuthorized()
      },
      _handleClickResponseWithoutAuthorized () {
        this.$root.$emit('open-modal-access-response')
      },
      _handleResponse () {
        return new Promise((resolve, reject) => {

          let { id } = this.casting
          this.$emit('changeState', { id, key: 'isResponded', value: true })

          this.$api.post(`api/v2/boards/castings/${id}/responses`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$emit('changeState', { id, key: 'isResponded', value: false })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error create response')
          })
        })
      },
      _handleClickMessage () {
        if (this.isAuthorized === true) {
          let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
          // this.$router.push({ name: 'messages.show', params: { uid } })
          let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
          window.open(href, '_blank')
        } else this._handleClickMessageWithoutAuthorized()
      },
      _handleClickMessageWithoutAuthorized () {
        this.$root.$emit('open-modal-access-global')
      },
      _handleClickFavorite () {
        if (this.isAuthorized === false) {
          this._handleClickFavoriteWithoutAuthorized()
        } else this._handleFavorite()
      },
      _handleClickFavoriteWithoutAuthorized () {
        this.$root.$emit('open-modal-access-favorite')
      },
      _handleFavorite () {
        return new Promise((resolve, reject) => {

          let { id, isFavorited } = this.casting
          this.$emit('changeState', { id, key: 'isFavorited', value: (!isFavorited) })

          this.$api.post('api/v2/boards/favorites', { id, type: 'board_casting' }).then((response) => {
            const { data: { isFavorited } } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.$emit('changeState', { id, key: 'isFavorited', value: (isFavorited) })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error create favorites')
          })
        })
      },
      _handleClickEditCasting () {
        let { id } = this.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },
      _handleClickAbuseCasting () {
        let { id } = this.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleClickPublishedCasting () {
        return new Promise((resolve, reject) => {
          let { id, state } = this.casting

          if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
            this.$emit('changeState', { id, key: 'state', value: PUBLISHED })
          } else this.$emit('changeState', { id, key: 'state', value: MODERATION })

          this.$api.post(`api/v2/boards/castings/${id}/publish`).then((response) => {
            const { data } = response
            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickArchiveCasting () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive()
        }).catch(() => {})
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {
          let { id, state } = this.casting
          this.$emit('changeState', { id, key: 'state', value: ARCHIVED })

          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickUnpublishedCasting () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft()
        }).catch(() => {})
      },
      _handleDraft () {
        return new Promise((resolve, reject) => {
          let { id, state } = this.casting
          this.$emit('changeState', { id, key: 'state', value: DRAFT })

          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$emit('changeState', { id, key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickApproveCasting () {
        let { id, state } = this.casting
        this.$emit('changeState', { id, key: 'state', value: PUBLISHED })

        this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
          let { data: { data } } = response
        }, (err) => {
          this.$emit('changeState', { id, key: 'state', value: state })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd');
      },
      _handleClickCreateAccount (selectedRole = null) {
        this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.patch('api/v1/auth/role').then((response) => {
          let { data: { token, role } } = response

          this.$auth.storeSession({ token, role })

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then(result => {

              if (selectedRole) this.$localStorage.set('register.role', selectedRole)
              this.$nextTick(() => {
                this.authUserOnSession(token, this.user.href)
              })
            })
          })
        }, (error) => {
          const { response: { data }, response: { status }} = error
          throw new Error('Error change role')
        })
      },
      authUserOnSession (token, url) {
        this.createAuthForm(token, url)
      },
      createAuthForm (token, url) {
        let form = document.createElement("form")

        let elToken = document.createElement("input")
        let elUrl = document.createElement("input")

        form.method = "POST"
        form.action = "/api/auth/by-token"

        elToken.type = "hidden"
        elToken.value = token
        elToken.name = 'token'
        form.appendChild(elToken)

        elUrl.type = "hidden"
        elUrl.value = url
        elUrl.name = "url"
        form.appendChild(elUrl);

        document.body.appendChild(form);

        this.$nextTick(() => {
          form.submit()
        })
      }
    }
  }
</script>

<style scoped>

</style>
