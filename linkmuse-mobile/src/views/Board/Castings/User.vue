<template>
  <div class="page page_feed">
    <template v-if="(isCurrentUser === false)">
      <div class="row">
        <router-link :to="{ name: 'user.show', params: { username } }">
          <div class="profile">
            <div class="profile__name">{{ user.fullname }}</div>
          </div>
        </router-link>
      </div>
    </template>

    <div class="page__header page__header_feed">
      <div class="row row_justify_between mb_3">
        <div class="heading heading_h4">{{ (isCurrentUser) ? 'Мои объявления' : 'Объявления' }}</div>
        <template v-if="(isCurrentUser === true)">
          <router-link :to="{ name: 'board.castings.create' }" class="btn btn_round btn_primary btn_plus">
            <span>
              <svg class="icon icon_size_16 icon_fill_white">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
              </svg>
            </span>
          </router-link>
        </template>
      </div>

      <template v-if="(true === false)">
        <div class="input input_search input_search_feed">
          <svg :class="['icon', 'icon_size_16', 'icon_search', (searchFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
          </svg>
          <input type="text" name="name" ref="name" autocomplete="false"
                 v-validate="'max:25'"
                 v-model="fields.name"
                 data-lm-key="name"
                 :placeholder="'Поиск'"
                 @focus="_handleFocusFieldSearchTalent"
                 @blur="_handleBlurFieldSearchTalent"
                 @input="_handleInputFieldSearchTalent"
                 :class="['input__field', 'input__field_search', { 'error': (verrors.has('name')) }]">
          <button class="btn btn_close" v-if="(fields.name)" @click="_handleClickCloseSearching"></button>
        </div>

      </template>

      <div class="row">
        <navigation-categories-user/>
      </div>
    </div>
    <div :class="['page__content', 'page__content_feed', { 'empty': isEmpty }]" ref="wrapper">
      <template v-if="(isEmpty === true)">
        <div class="page__plug page__plug_feed_empty-list" style="height: auto;">
          <svg class="icon icon_size_lg icon_fill_blue mb_5">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
          </svg>
          <div class="heading heading_h5">Тут пока пусто</div>
          <template v-if="(isCurrentUser === true && isAuthorized === true)">
            <div class="mb_3">Для начала работы добавьте <br>новое объявление</div>
            <router-link :to="{ name: 'board.castings.create' }" class="btn btn_primary">Добавить</router-link>
          </template>
        </div>
      </template>

      <template v-if="(isEmpty === false)">
        <mt-loadmore :top-method="_handleLoadTopCastings" @top-status-change="_handleTopStatusChangeCastings" ref="loadmore">
          <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="1900" :style="{ minHeight: height }">
            <casting-card :casting="casting" v-for="casting in castings" :key="casting.id"
                          :isCatalogPage="false"
                          @actionSheet="_handleActionSheetCasting"
                          @changeState="_handleChangeState">
            </casting-card>
            <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'" :style="{ marginTop: '15px' }"></lm-m-loader>
          </div>

          <div slot="top" class="mint-loadmore-top">
            <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
            <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
          </div>
        </mt-loadmore>
      </template>
    </div>

    <casting-filter v-model="openFilter" @hide="_handleHideFilter" @apply="_handleApplyFilter"></casting-filter>
    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheet" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import { getDataAttribute, HEIGHT_FOOTER } from '@utils'

  import CastingCard from '@components/Board/Casting/Casting.vue'
  import CastingFilter from '@components/Board/Casting/FilterUser.vue'
  import NavigationCategoriesUser from '@components/Board/NavigationCategoriesUser.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
  })

  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    components: { 'mt-loadmore': Loadmore, CastingFilter, CastingCard, NavigationCategoriesUser },
    metaInfo () {
      return {
        /* TODO: Придумать заголовки (Мои кастинги) ? (Его кастигнги) */
        title: `${(this.isCurrentUser) ? 'Мои объявления: кастинги' : 'Объявления: кастинги'}`
      }
    },
    data () {
      return {
        height: 0,
        openFilter: false,
        searchFocused: false,
        actionSheet: {
          actions: [],
          value: false,
          casting: { id: null, slug: null }
        },
        loadmore: { topStatus: null }
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      let fields = store.state.board.casting.castings.userFilter

      await store.dispatch('board/getCountersBoard', { username }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error get counters board user', url })
      })

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error get user', url })
      })

      await store.dispatch('board/casting/fetchUserCastings', {
        fields,
        username,
        offset: 0
      }).then(() => {
        store.dispatch('board/casting/setHasNewCastingsData', true)
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error fetch user castings', url })
      })
    },
    computed: {
      ...mapFields({
        fields: 'castings.userFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/casting/getCastingsTotal',
        error: 'board/casting/getCastingsError',
        offset: 'board/casting/getCastingsOffset',
        castings: 'board/casting/getCastingsData',
        loading: 'board/casting/getCastingsLoading',
        infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
      }),
      username () {
        const { username } = this.$route.params
        return username
      },
      isCurrentUser () {
        const { username } = this.$route.params
        return (this.authUser && has(this.authUser, 'username') && this.authUser.username === String(username))
      },
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.authUser && this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true)
      }
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    beforeDestroy () {
      this.$store.dispatch('board/casting/setHasNewCastingsData', true)
    },
    methods: {
      ...mapActions({
        clearCastings: 'board/casting/clearCastings',
        fetchCastings: 'board/casting/fetchUserCastings'
      }),
      _handleLoadTopCastings () {
        let { username, fields } = this
        this.fetchCastings({ username, fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeCastings (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        let { offset, username } = this
        this.fetchCastings({ username, offset })
      },
      _handleInputFieldSearchTalent: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this.clearCastings().then(() => {
              let { username, fields } = this
              this.fetchCastings({ username, fields, offset: 0 })
            }).catch(() => {})
          }
        })
      }, 900),
      _handleFocusFieldSearchTalent () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchTalent () {
        this.searchFocused = false
      },
      _handleClickCloseSearching() {
        this.fields.name = null

        this.$nextTick(() => {
          this.clearCastings().then(() => {
            let { username, fields } = this
            this.fetchCastings({ username, fields, offset: 0 })
          }).catch(() => {})
        })
      },
      _handleApplyFilter () {
        this.clearCastings().then(() => {
          this._toggleFilter()
          let { username, fields } = this
          this.fetchCastings({ username, fields, offset: 0 })
        }).catch(() => {})
      },
      _handleHideFilter () {
        this._toggleFilter()
      },
      _toggleFilter () {
        return new Promise((resolve, reject) => {
          try {
            this.openFilter = (!this.openFilter)
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
      },
      _handleActionSheetCasting ( castingId, isCurrentUser = false ) {
        let casting = this._.find(this.castings, (c) => c.id === castingId)
        if (casting) {
          const { id, slug } = casting
          Object.assign(this.actionSheet.casting, { id, slug })

          this.actionSheet.actions.push({
            name: 'Открыть',
            method: this._handleClickShowCasting
          })

          if (isCurrentUser === true) {
            if (casting.state === PUBLISHED || casting.state === ARCHIVED) {
              this.actionSheet.actions.push({
                name: 'Отклики',
                method: this._handleClickOpenCastingResponses
              })
            }

            if ((casting.state !== PUBLISHED && casting.state !== ARCHIVED) || this.isAdmin) {
              this.actionSheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditCasting
              })
            }

            if (casting.state === PUBLISHED) {
              this.actionSheet.actions.push({
                name: 'В архив',
                method: this._handleClickArchiveCasting
              })
            }

            if (casting.state === ARCHIVED) {
              this.actionSheet.actions.push({
                name: 'Опубликовать',
                method: this._handleClickPublishedCasting
              })
            }
          }

          if (isCurrentUser === false) {
            this.actionSheet.actions.push({
              name: this.$t('boardbox.report.report'),
              method: this._handleClickAbuseCasting
            })
          }

          if (this.isAdmin === true && casting.state === MODERATION) {
            this.actionSheet.actions.push({
              name: 'Одобрить',
              method: this._handleClickApproveCasting
            })
          }

          this.actionSheet.value = true
        }
      },
      _handleClickEditCasting () {
        let { id } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },
      _handleClickShowCasting () {
        let { id, slug } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.show', params: { id, slug } })
      },
      _handleClickOpenCastingResponses () {
        let { id, slug } = this.actionSheet.casting
        this.$router.push({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })
      },
      _handleClickUnpublishedCasting () {
        let { id } = this.actionSheet.casting

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
        let { id } = this.actionSheet.casting

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
        let { id } = this.actionSheet.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleInputActionSheet (value) {
        if (value === false) {
          this.actionSheet = {
            actions: [],
            value: false,
            casting: { id: null, value: null }
          }
        }
      },
      _handleClickApproveCasting () {
        Indicator.open()
        let { id } = this.actionSheet.casting

        this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
          Indicator.close()
          let { data: { data } } = response
          this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: PUBLISHED })
        }, (err) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleClickPublishedCasting () {
        return new Promise((resolve, reject) => {
          Indicator.open()
          let { id } = this.actionSheet.casting

          this.$api.post(`api/v2/boards/castings/${id}/publish`).then((response) => {
            const { data } = response
            if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
              this.setFieldCastingData({ key: 'state', value: PUBLISHED })
            } else this.setFieldCastingData({ key: 'state', value: MODERATION })

            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            Indicator.close()
            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>
