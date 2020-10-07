<template>
  <div :class="['card', 'declaration__card', { 'card_premium': (isCatalogPage === true && isFasten === true), 'opacity_64': (isArchived === true), 'in-moderation': isModeration } ]">
    <div class="row row_justify_between row_align_center mb_0_5">
      <div :class="['declaration__type', classColorState ]">
        <template v-if="(isCatalogPage === true)">
          <template>{{ category }}</template>
        </template>
        <template v-if="(isCatalogPage === false)">
          <template v-if="(isCurrentUser === false)">{{ category }}</template>
          <template v-if="(isCurrentUser === true)">
            <template v-if="(isDraft === true)">{{ $t('casting-page.draft.draft') }}</template>
            <template v-else-if="(isModeration === true)">{{ $t('casting-page.casting-on-moderation.on-moderation') }}</template>
            <template v-else-if="(isRejected === true)">
              {{ $t('casting-page.rejected.rejected') }}: {{ has(casting, 'rejection.cause.text') ? casting['rejection']['cause']['text'] : '' }}.
              {{ has(casting, 'rejection.comment') ? casting['rejection']['comment'] : '' }}
            </template>
            <template v-else-if="(isPublished === true)">Опубликован</template>
            <template v-else-if="(isArchived === true)">{{ $t('casting-page.archive.archive') }}</template>
            <template v-else>{{ $t('boardbox.my-ads.your-ad') }}</template>
          </template>
        </template>
      </div>
      <template v-if="(isAuthorized === true && showMore === true)">
        <button class="btn btn_options" @click="_handleClickActionSheet">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
          </svg>
        </button>
      </template>
    </div>

    <template v-if="( (casting.name && casting.name.length) || (casting.professions && casting.professions.length) )">
      <router-link :to="{ name: 'board.castings.show', params: { slug, id } }" class="section declaration__section" @click.native="_handleClickOpenCasting">
        <template v-if="( casting.name && casting.name.length )">
          <div class="heading_h5 declaration__heading mb_0">
            {{ casting.name | truncate(50) }}
          </div>
        </template>

        <template v-if="( professions && professions.length ) || ( genders && genders.length ) || ( ages )">
          <div class="declaration__list declaration__list_parameters mt_2">
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
        </template>
      </router-link>
    </template>

    <div class="section declaration__section">
      <div class="row">
        <div class="declaration__date">
          <span>{{ $t('boardbox.boardbox-screen.casting-date') }}:</span>
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
          <template v-else>{{ $t('boardbox.boardbox-screen.specified') }}</template>
        </div>
      </div>

      <div class="row">
        <div class="declaration__date">
          <span>{{ $t('boardbox.boardbox-screen.work-date') }}:</span>
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
          <template v-else>{{ $t('boardbox.boardbox-screen.specified') }}</template>
        </div>
      </div>

      <template v-if="(isAdmin === true && casting.publishedAt)">
        <div class="row">
          <div class="declaration__date">
            <span>Дата публикации:</span>
            {{ $moment(casting.publishedAt).format('D.MM.YY HH:mm') }}
          </div>
        </div>
      </template>

      <div class="declaration__fee" >
        <template v-if="fee">
          <template v-if="(fee.amount)">{{ fee.amount | currency(fee.currency) }} <template v-if="(fee.type)">/ {{ fee.type | lowercase }}</template></template>
          <template v-else>{{ $t('boardbox.my-ads.fee-to-be-specified') }}</template>
        </template>
        <template v-else>{{ $t('boardbox.boardbox-screen.no-fee') }}</template>
      </div>

      <template v-if="(isCurrentUser === false && isAdmin === true)">
        <template v-if="(responses.total)">
          <div class="declaration__fee" :style="{ marginTop: '8px' }">
            Уже откликнулись {{ responses.total }} <template v-if="(responses['notRead'])">(+{{ responses['notRead'] }})</template>
          </div>
        </template>
      </template>
    </div>

    <template v-if="(isCatalogPage === true || (isCatalogPage === false && (isPublished === true || isArchived === true || isDraft === true || isRejected === true)))">
      <div class="section declaration__section">
        <div class="row row_justify_center">
          <template v-if="(isCurrentUser === false)">
            <template>
              <template v-if="(canRespond === true || isAuthorized === false || isResponded === true)">
                <button :class="['btn']" :disabled="(isResponded === true)" @click="_handleClickResponse">
                  {{ (isResponded === true) ? $t('boardbox.my-ads.applied') : $t('boardbox.boardbox-screen.apply') }}
                </button>
              </template>
              <template v-else-if="(canRespond === false)">
                <button :class="['btn']" :disabled="true">Кастинг неактуален</button>
              </template>
            </template>
          </template>
          <template v-if="(isCurrentUser === true && (isCatalogPage === true || (isCatalogPage === false && (isPublished === true || isArchived === true))))">
            <router-link :to="{ name: 'board.castings.show', params: { slug, id }, query: { responses: true } }" :class="['btn', { 'btn_secondary': (isArchived === true) }]" @click.native="_handleClickOpenCasting">
              {{ $t('boardbox.my-ads.applications') }}
              <template v-if="(responses.total)">
                <div class="response__number">{{ responses.total }}</div>
                <div class="response__number_new" v-if="(responses['notRead'])">(+{{ responses['notRead'] }})</div>
              </template>
            </router-link>
          </template>
          <template v-if="(isCurrentUser === true && isDraft === true)">
            <router-link :to="{ name: 'board.castings.edit', params: { id } }" class="btn">
              Продолжить
            </router-link>
          </template>
          <template v-if="(isCurrentUser === true && isRejected === true)">
            <router-link :to="{ name: 'board.castings.edit', params: { id } }" class="btn">
              Редактировать
            </router-link>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'

  import Casting from '@modules/Board/Casting'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    props: {
      casting: {
        type: Object,
        required: true
      },
      isCatalogPage: {
        type: Boolean,
        default: true
      },
      showMore: {
        type: Boolean,
        default: true
      },
      gtm: {
        type: String,
        required: false
      }
    },
    data () {
      return {
        has
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
      id () {
        return this.casting.id
      },
      slug () {
        return this.casting.slug
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
      canRespond () {
        return has(this.casting, 'abilities.respond') ? this.casting['abilities']['respond'] : false
      },
      canRespondWithoutSelectProfession () {
        return has(this.casting, 'abilities.respondWithoutSelectProfession') ? this.casting['abilities']['respondWithoutSelectProfession'] : false
      },
      isFasten () {
        return this.casting.isFasten || false
      },
      canRespondOnCasting () {
        return (this.user && this.user.hasOwnProperty('can_respond_on_casting') ? this.user['can_respond_on_casting'] : false)
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
            if (this.canRespond) {
              this.$modalRouter.push({ name: 'board.castings.responses.create', props: { casting: this.casting } })
            } else Toast({ message: 'Ограничение отклика на кастинг', iconClass: 'mintui mintui-field-error' })
          } else Toast({ message: 'Отклик уже отправлен', iconClass: 'mintui mintui-field-error' })
        } else this._handleClickResponseWithoutAuthorized()

        if (this.gtm) this.$gtm.trackEvent({ event: this.gtm })
      },
      _handleClickResponseWithoutAuthorized () {
        this.$root.$emit('open-modal-access-response', this.href)
      },
      _handleResponse () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/responses`).then((response) => {
            const { data } = response

            this.$emit('changeState', { id, key: 'isResponded', value: true })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error create response')
          })
        })
      },
      _handleClickActionSheet () {
        let { id } = this.casting
        this.$emit('actionSheet', id, this.isCurrentUser)
      },
      _handleClickCreateAccount (selectedRole = null) {
        Indicator.open()

        this.$api.patch('api/v1/auth/role').then((response) => {
          let { data: { token, role } } = response

          this.$auth.storeSession({ token, role })

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then(result => {
              Indicator.close()
              this._handleCloseModal()
              Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
              if (selectedRole) this.$localStorage.set('register.role', selectedRole)

              this.$nextTick(() => {
                if (this.isRegistered === false) this.$router.push({ name: 'user.register' })
              })
            })
          })
        }, (error) => {
          const { response: { data }, response: { status }} = error
          Indicator.close()
        })
      },
      _handleClickOpenCasting () {
        if (this.gtm) this.$gtm.trackEvent({ event: this.gtm })
      }
    }
  }
</script>

<style scoped>

</style>
