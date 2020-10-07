<template>
  <div class="wrapper" :style="{ paddingTop: 0 }">
    <div class="content message-wrap" :style="{ float: 'none' }">
      <div class="well well-no-padding">
        <div class="dialogs">
          <div class="dialogs__title flex-beetwen">
            <span>{{ (creating === false) ? $t('dialogs.messages-page.messages') : $t('dialogs.unfortunately-nothing-found.create') }}</span>
            <template>
              <template v-if="(creating === false)">
                <tooltip effect="scale" placement="bottom" :content="$t('dialogs.tooltip.new-message')">
                  <div :class="{ 'create-dialog': true, 'icon-plus_L': true, 'active': false }" @click="_handleClickOpenCreating"></div>
                </tooltip>
              </template>
              <template v-if="(creating === true)">
                <div :class="{ 'create-dialog': true, 'icon-plus_L': true, 'active': true }" @click="_handleClickCloseCreating"></div>
              </template>
            </template>
          </div>
          <div class="dialogs__search">
            <template v-if="(creating === false)">
                <template v-if="(searching === false)">
                  <i class="icon-search_L2"></i>
                </template>
                <template v-else-if="(searching === true)">
                  <i class="icon-close2" @click="_handleClickCloseSearching"></i>
                </template>
                <input type="text" name="q"
                       v-validate="'required|max:25'"
                       v-model="search.q"
                       :data-lm-key="'q'"
                       :placeholder="$t('dialogs.messages-page.search')"
                       autocomplete="off"
                       @blur="_handleBlurFieldSearchDialog"
                       @focus="_handleFocusFieldSearchDialog"
                       @input="_handleInputFieldSearchDialog"
                       @keyup.esc="_handleKeyUpEscFieldSearchDialog"
                       :class="['lm-input', 'input-search', { 'error': (verrors.has('q')) } ]">
            </template>

            <template v-if="(creating === true)">
              <template v-if="(!create.keyword)">
                <i class="icon-search_L2"></i>
              </template>
              <template v-else-if="(!!create.keyword)">
                <i class="icon-close2" @click="_handleClickClearFieldSearchUsers"></i>
              </template>
              <input type="text" name="keyword"
                     v-validate="'max:25'"
                     v-model="create.keyword"
                     data-lm-key="keyword"
                     data-vv-name="keyword"
                     key="keyword"
                     :placeholder="$t('dialogs.create-new-messages.enter')"
                     autocomplete="off"
                     @input="_handleInputFieldSearchUsers"
                     :class="['lm-input', 'input-search', { 'error': (verrors.has('keyword')) } ]">
            </template>
          </div>
          <div :class="['dialogs__list', { null: (isEmpty || (searching && isEmptySearch) || (creating && isEmptyCreateUsers)) }]" id="container-dialogs" style="max-height:330px; overflow-y: auto">
            <template v-if="creating === false">
              <template v-if="(searching === false)">
                <template v-if="isEmpty === true">
                  <div class="lm-m-messages--null">
                    <span>Выберите собеседника и начните общение</span>
                    <div class="lm-outline-button middle" @click="_handleClickOpenCreating">Выбрать</div>
                  </div>
                </template>
                <template v-if="(isEmpty === false)">
                  <div v-infinite-scroll="_handleInfiniteScrollDialogs" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="200">
                    <dialog-card :dialog="dialog" v-for="dialog in dialogs" :key="`dialog-${dialog.id}`" @remove="_handleRemoveDialog"></dialog-card>
                  </div>
                </template>

                <lm-loader v-if="loading" :style="{ marginTop: '10px' }"></lm-loader>
              </template>
              <template v-else-if="(searching === true)">
                <template v-if="(isEmptySearch === false)">
                  <div v-infinite-scroll="_handleInfiniteScrollSearchDialogs" infinite-scroll-disabled="searchInfiniteDisabled" infinite-scroll-distance="200">
                    <dialog-card :dialog="dialog" v-for="dialog in searchDialogs" :key="`dialog-${dialog.id}`" @remove="_handleRemoveDialog" @click.native="_handleClickCloseSearching"></dialog-card>
                  </div>
                </template>

                <lm-loader v-if="searchLoading" :style="{ marginTop: '10px' }"></lm-loader>

                <template v-if="(isEmptySearch === true)">
                  <div class="lm-m-messages--null" v-if="(searchInitial === false)">
                    <span>Начните вводить текст</span>
                  </div>
                  <div class="lm-m-messages--null" v-else-if="(searchInitial === true)">
                    <span>{{ $t('dialogs.unfortunately-nothing-found.nothing-found') }}</span>
                  </div>
                </template>
              </template>
            </template>
            <template v-if="creating === true">
              <div class="message-scroll">
                <div class="dialogs__list--item" v-for="profile in create.data" :key="`profile-${profile.user_id}`">
                  <router-link :to="{ name: 'messages.show', params: { uid: formatUidDialog(profile.user_id) } }">
                    <div class="image-user">
                      <img :src="profile.avatar" :alt="profile.name">
                    </div>
                    <div class="from-user">
                      <div class="name-user">{{ profile.name | truncate(25) }}</div>
                    </div>
                  </router-link>
                </div>

                <infinite-loading @infinite="_handleInfiniteScrollUsers" :identifier="create.infiniteId" :style="{ paddingTop: '10px' }"></infinite-loading>

                <div class="lm-m-messages--null" v-if="(isEmptyCreateUsers)">
                  <span>{{ $t('dialogs.unfortunately-nothing-found.nothing-found') }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
        <router-view class="history"></router-view>
        <div class="clr"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { getDataAttribute, generateUUID } from '@utils'
  import { mapGetters,mapActions, mapMutations } from  'vuex'
  import DialogCard from '@components/Message/Dialog/Card.vue'

  export default {
    metaInfo: {
      title: 'Сообщения'
    },
    components: { DialogCard },
    async asyncData ({ store, route }) {
      const initialized = store.getters['message/getInitializedDialogs']
      if (!initialized) await store.dispatch('message/fetchDialogs', { rewrite: true })
    },
    data () {
      return {
        search: {
          q: null,
          enabled: false
        },
        create: {
          keyword: null,
          enabled: false,
          data: [],
          count: 0,
          offset: 0,
          limit: 24,
          error: false,
          loading: false,
          infiniteDisabled: true,
          infiniteId: generateUUID()
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        dialogs: 'message/getDialogs',
        count: 'message/getCountDialogs',
        error: 'message/getDialogsError',
        offset: 'message/getOffsetDialogs',
        loading: 'message/getDialogsLoading',
        searchDialogs: 'message/getSearchDialogs',
        searchCount: 'message/getSearchCountDialogs',
        searchError: 'message/getSearchDialogsError',
        searchLoading: 'message/getSearchDialogsLoading',
        searchInitial: 'message/getSearchDialogsInitial',
        infiniteDisabled: 'message/getDialogsInfiniteDisabled',
        searchInfiniteDisabled: 'message/getSearchDialogsInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      isEmptySearch () {
        return ( !this.searchLoading && this.searchCount === 0 )
      },
      isEmptyCreateUsers () {
        return ( !this.create.loading && this.create.count === 0 )
      },
      searching: {
        get () {
          return this.search.enabled
        },
        set (value) {
          this.search.enabled = value
        }
      },
      creating () {
        return (this.create.enabled)
      }
    },
    mounted () {
      // this.$chatbull.hide()
      if (this.user) {
        this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
          const { uid: id, date, text, sent_time: time, attachments } = data
          console.log(data)

          const dialog = this.$store.getters['message/getDialogById'](id)

          if (dialog) {
            let { count_new: count } = dialog
            this._handleSetDialogFiledById({ id, key: 'count_new', value: ++count })
            this._handleSetDialogFiledById({ id, key: 'message', value: {
              time, date, text,
              me: false, read: false,
              is_attachment: (!!attachments.length)
            }})
          } else {
            const { from: { data: { avatar, name }  } } = data

            this._handleCreateDialog({
              id,
              count_new: 1,
              interlocutor: { avatar, name },
              message: {
                time, date, text,
                me: true, read: false,
                is_attachment: (!!attachments.length)
              }
            })
          }
        })
      }
    },
    methods: {
      ...mapActions({
        _handleDialog: 'message/fetchDialogs',
        _handleCreateDialog: 'message/createDialog',
        _handleDestroyDialog: 'message/destroyDialogById',
        _handleSearchDialog: 'message/fetchSearchDialogs',
        _handleSetDialogFiledById: 'message/setDialogFiledById'
      }),
      ...mapMutations({
        _setSearchDialogInitial: 'message/SET_SEARCH_DIALOGS_INITIAL'
      }),
      _handleInfiniteScrollDialogs () {
        this._handleDialog({ rewrite: false })
      },
      _handleInfiniteScrollSearchDialogs () {
        this._handleSearchDialog({
          q: this.search.q,
          rewrite: false
        })
      },
      _handleClickOpenSearching() {
        this.searching = true
      },
      _handleClickCloseSearching() {
        return new Promise((resolve, reject) => {
          try {
            this.search.q = null
            this.searching = false
            this._setSearchDialogInitial(false)
            resolve && resolve()
          } catch (e) {
            reject && reject()
          }
        })
      },
      _handleFocusFieldSearchDialog () {
        this._handleClickOpenSearching()
      },
      _handleBlurFieldSearchDialog (e) {
        const el = e.target
        if (!el.value) this._handleClickCloseSearching()
      },
      _handleKeyUpEscFieldSearchDialog () {
        this._handleClickCloseSearching()
      },
      _handleInputFieldSearchDialog: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleSearchDialog({
              q: this.search.q,
              rewrite: true
            })
          }
        })
      }, 900),
      _handleClickCloseCreating () {
        this.create.enabled = false
        this.create.keyword = null
        this._clearUsers()
      },
      _handleClickOpenCreating () {
        this.create.enabled = true
        this.create.keyword = null
        this._resetIdentifierInfiniteScrollUsers()

        // this._handleSearchUsers()
      },
      _clearUsers () {
        return new Promise((resolve, reject) => {
          try {
            Object.assign(this.create, {
              data: [],
              count: 0,
              offset: 0
            })
            resolve && resolve()
          } catch (e) {
            reject && reject()
          }
        })
      },
      _handleClickClearFieldSearchUsers () {
        this.create.keyword = null
        this._clearUsers().then(() => {
          this._resetIdentifierInfiniteScrollUsers()
          // this._handleSearchUsers()
        })
      },
      _handleInputFieldSearchUsers: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._clearUsers().then(() => {
              this._resetIdentifierInfiniteScrollUsers()
              // this._handleSearchUsers()
            })
          }
        })
      }, 900),
      _handleInfiniteScrollUsers ($state) {
        // console.log('go go go')
        this._handleSearchUsers().then((infiniteDisabled) => {
          if (infiniteDisabled) {
            $state.complete()
          } else $state.loaded()
        }).catch(() => $state.error())
      },
      _resetIdentifierInfiniteScrollUsers () {
        this.create.infiniteId = generateUUID()
      },
      _handleSearchUsers () {
        return new Promise((resolve, reject) => {
          if (this.create.loading) { reject && reject(); return false }

          this.create.loading = true
          let { offset, keyword, limit } = this.create

          this.$api.get(`api/v1/users`, { offset, keyword, limit }).then((response) => {

            let { data: { data, meta: { count, new_offset } } } = response

            data.forEach(item => this.create.data.push(item))
            this.create.count = count
            this.create.offset = new_offset
            this.create.infiniteDisabled = (new_offset >= count)
            this.create.loading = false

            resolve && resolve((new_offset >= count))

          }, (error) => {
            const { response: { data }, response: { status }} = error
            this.create.loading = false

            reject && reject()

            throw new Error('Error follow user')
          })
        })
      },
      formatUidDialog (user_id) {
        return this._.sortBy([ user_id, this.user.id ]).toString()
      },
      _handleRemoveDialog (id) {
        const dialog = this.$store.getters['message/getDialogById'](id)
        if (dialog) {
          const backup = this._.cloneDeep(dialog)

          this._handleDestroyDialog(id)
          this._removeDialog(id).then(() => {}).catch(() => {
            this._handleCreateDialog(backup)
          })
        }
      },
      _removeDialog (id) {
        return new Promise((resolve, reject) => {
          this.$api.delete(`/api/v1/dialogs/${id}`).then(response => {
            let { data } = response
            resolve && resolve(id)
          }).catch(error => {
            const { response: { data, status } } = error
            reject && reject()
            throw new Error('Error delete dialog')
          })
        })
      }
    },
    beforeDestroy () {
      // this.$chatbull.show()
      this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived')
    }
  }
</script>

<style lang="sass" scoped>
  .message-wrap
    .history
      width: 826px
      &.loading
        &:after
          content: ''
          top: 0
          left: 0
          width: 100%
          height: 100%
          opacity: 0.4
          background: #fff
          position: absolute
    .dialogs__list
      &.null
        flex: 1 auto
        display: flex
        align-items: center
        justify-content: center
      .lm-m-messages--null
        margin: auto
        width: 220px
        display: block
        text-align: center
        span
          display: block
          color: #808792
          font-size: 14px
          line-height: 18px
          text-align: center
          margin-bottom: 12px
</style>
