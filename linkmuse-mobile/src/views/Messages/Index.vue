<template>
  <div :class="['lm-m-messages', 'lm-m-page', { null: (isEmpty || (searching && isEmptySearch) || create.enabled) } ]">
    <div class="lm-m-messages-head lm-m-page--head">
      <div class="left">
        <template v-if="(!isEmpty)">
          <i :class="['lm-icon-zoom', { 'active': searching }]" @click="_handleClickOpenSearching"></i>
        </template>
      </div>
      <div class="center">
        <template v-if="(searching === false)">
          <span>{{ $t('messages.dialogue.messages') }}</span>
        </template>
        <template v-else-if="(searching === true)">
          <input type="text" name="q"
                 v-validate="'required|max:25'"
                 v-model="search.q"
                 data-lm-key="q"
                 :placeholder="$t('messages.search.search')"
                 @input="_handleInputFieldSearchDialog"
                 :class="['lm-input', 'input-search', { 'error': (verrors.has('q')) } ]">
        </template>
      </div>
      <div class="right">
        <template v-if="(searching === false)">
          <i class="lm-plus-icon" @click="_handleClickOpenCreating"></i>
        </template>
        <template v-else-if="(searching === true)">
          <i class="lm-close" @click="_handleClickCloseSearching"></i>
        </template>
      </div>
    </div>
    <div :class="['lm-m-messages--list', { null: (isEmpty || (searching && isEmptySearch)) }]"  ref="wrapper" :style="{ height }">
      <template v-if="(searching === false)">
        <template v-if="isEmpty === true">
          <div class="lm-m-messages--null">
            <span>Выберите собеседника и начните общение</span>
            <div class="lm-outline-button middle" @click="_handleClickOpenCreating">Выбрать</div>
          </div>
        </template>
        <template v-else-if="(isEmpty === false)">
          <mt-loadmore :top-method="_handleLoadTopDialogs" @top-status-change="_handleTopStatusChangeDialogs" ref="loadmore">
            <div v-infinite-scroll="_handleInfiniteScrollDialogs"
                 infinite-scroll-disabled="infiniteDisabled"
                 infinite-scroll-distance="200">
              <dialog-card :dialog="dialog" v-for="dialog in dialogs" :key="dialog.id"></dialog-card>
            </div>
            <div slot="top" class="mint-loadmore-top">
              <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
              <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
            </div>
          </mt-loadmore>
        </template>
      </template>
      <template v-else-if="(searching === true)">
        <lm-m-loader v-if="searchLoading" style="margin-bottom: 10px"></lm-m-loader>

        <template v-if="(isEmptySearch === true)">
          <div class="lm-m-messages--null" v-if="(searchInitial === false)">
              <span>{{ $t('messages.search.start-typing') }}</span>
            </div>
          <div class="lm-m-messages--null" v-else-if="(searchInitial === true)">
            <span>{{ $t('messages.unfortunately-nothing-found.nothing-found') }}</span>
          </div>
        </template>
        <template v-else-if="(isEmptySearch === false)">
          <div v-infinite-scroll="_handleInfiniteScrollSearchDialogs"
               infinite-scroll-disabled="searchInfiniteDisabled"
               infinite-scroll-distance="200">
            <div>
              <dialog-card :dialog="dialog" v-for="dialog in searchDialogs" :key="dialog.id"></dialog-card>
            </div>
          </div>
        </template>
      </template>
    </div>
    <mt-popup class="lm-m-modal-wrap" v-model="create.enabled" position="bottom" :modal="true">
      <div class="lm-m-modal-list-menu">
        <input type="text" name="keyword"
               v-validate="'max:25'"
               v-model="create.keyword"
               data-lm-key="keyword"
               placeholder="Введите имя или фамилию"
               @input="_handleInputFieldSearchUsers"
               :class="['lm-input', 'search', { 'error': (verrors.has('keyword')) } ]">
        <div class="message-scroll" v-infinite-scroll="_handleInfiniteScrollUsers"
             infinite-scroll-disabled="infiniteDisabledCreated"
             infinite-scroll-distance="200">
          <div class="lm-m-modal-list-menu--item user" v-for="profile in create.data">
            <router-link :to="{ name: 'messages.show', params: { uid: formatUidDialog(profile.user_id) } }">
              <div class="lm-user-block">
                <img :src="profile.avatar" class="lm-user-block-avatar">
                <div class="lm-user-block-info">
                  <div class="lm-user-block-info-name"><span>{{ profile.name | truncate(25) }}</span>
                  </div>
                  <div class="lm-user-block-info-type">
                    <template v-if="(Array.isArray(profile.category) && profile.category.length)">
                      {{ profile.category.join(', ') | truncate(18) }}
                    </template>
                    <template v-else-if="Array.isArray(profile.category) === false && profile.category">
                      {{ profile.category }}
                    </template>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <lm-m-loader v-if="create.loading"></lm-m-loader>
          <div class="lm-m-modal-list-menu--item user" v-if="(!this.create.loading && this.create.count === 0)">
            <span >К сожалению, ничего не найдено</span>
          </div>
        </div>
    </div>
    </mt-popup>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { Popup, Loadmore, Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import { getDataAttribute, HEIGHT_FOOTER } from '@utils'
  import DialogCard from '@components/Message/Dialog/Card.vue'

  export default {
    components: { 'mt-popup': Popup, 'mt-loadmore': Loadmore, DialogCard },
    metaInfo: {
      title: 'Сообщения'
    },
    async asyncData ({ store, route }) {
      await store.dispatch('message/fetchDialogs', { rewrite: true })
    },
    data () {
      return {
        height: '100%',
        search: {
          q: null,
          enabled: false
        },
        loadmore: {
          topStatus: null
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
          infiniteDisabled: true
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        dialogs: 'message/getDialogs',
        count: 'message/getCountDialogs',
        offset: 'message/getOffsetDialogs',
        error: 'message/getDialogsError',
        loading: 'message/getDialogsLoading',
        infiniteDisabled: 'message/getDialogsInfiniteDisabled',
        searchDialogs: 'message/getSearchDialogs',
        searchCount: 'message/getSearchCountDialogs',
        searchError: 'message/getSearchDialogsError',
        searchLoading: 'message/getSearchDialogsLoading',
        searchInitial: 'message/getSearchDialogsInitial',
        searchInfiniteDisabled: 'message/getSearchDialogsInfiniteDisabled',
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      isEmptySearch () {
        return ( !this.searchLoading && this.searchCount === 0)
      },
      searching: {
        get () {
          return this.search.enabled
        },
        set (value) {
          this.search.enabled = value
        }
      },
      infiniteDisabledCreated () {
        return this.create.infiniteDisabled
      }
    },
    beforeDestroy () {
      // this.$chatBull.show()
      this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived')
    },
    mounted () {
      // this.$chatBull.hide()
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`

      if (this.user) {
        this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
          let message = data,
            _ = this._

          let dialog = _.find(this.dialogs, (d) => d.id === message.uid)

          if (dialog) {
            let value = {
              me: false,  read: false, text: message.text,
              date: message.date, time: message.sent_time,
              is_attachment: (message.attachments.length > 0),
            }

            this._handleSetDialogFiledById({ id: dialog.id, key: 'message', value })
            this._handleSetDialogFiledById({ id: dialog.id, key: 'interlocutor.online', value: true })
          } else {
            let data = [{
              id: message.uid,
              interlocutor: {
                id: message.from.data.user_id,
                avatar: message.from.data.avatar,
                name: message.from.data.name,
                username: message.from.data.username,
                online: true
              },
              message: {
                me: false, read: false, text: message.text,
                date: message.date, time: message.sent_time,
                is_attachment: (message.attachments.length > 0),
              }
            }]
            this._handleCreateDialog({ data, count: (this.count + 1), offset: (this.offset + 1), rewrite: false })
          }

          this.$nextTick(() => {
            this._handleSetFirstPositionDialog(message.uid)
          })
        })
      }
    },
    methods: {
      ...mapActions({
        _handleDialog: 'message/fetchDialogs',
        _handleSearchDialog: 'message/fetchSearchDialogs',
        _handleSetDialogFiledById: 'message/setDialogFiledById',
        _handleSetFirstPositionDialog: 'message/setFirstPositionDialog'
      }),
      ...mapMutations({
        _handleCreateDialog: 'message/SET_DIALOGS_DATA'
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
        this.searching = false
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
      _handleLoadTopDialogs () {
        this._handleDialog({ rewrite: true }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeDialogs (status) {
        this.loadmore.topStatus = status
      },
      _handleClickOpenCreating () {
        Indicator.open()
        this._handleSearchUsers().then(() => {
          Indicator.close()
          this.create.enabled = true
        })
      },
      fetchUserFollowers () {
        return new Promise((resolve, reject) => {
          if (this.create.loading) {
            reject && reject()
            return false
          }

          Indicator.open()

          let { offset } = this.create

          this.$api.get(`api/v1/users/${this.user.id}/followers`, { offset }).then((response) => {

            let { data: { data, meta: { count, new_offset } } } = response

            data.forEach(item => this.create.data.push(item))
            /*
            this.create.count = count
            this.create.offset = offset
            this.create.infiniteDisabled = (new_offset >= count)
            */

            if (count === 0 ) {
              this._clearUsers().then(() => {
                this._handleSearchUsers().then(() => {
                  Indicator.close()
                  resolve && resolve()
                })
              })
            } else {
              Indicator.close()
              resolve && resolve()
            }
          }, (error) => {
            const { response: { data }, response: { status }} = error

            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })

            reject && reject()

            throw new Error('Error follow user')
          })
        })
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
      _handleInputFieldSearchUsers: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._clearUsers().then(() => {
              this._handleSearchUsers()
            })
          }
        })
      }, 900),
      _handleInfiniteScrollUsers () {
        this._handleSearchUsers()
      },
      _handleSearchUsers () {
        return new Promise((resolve, reject) => {
          if (this.create.loading) { reject && reject(); return false }

          this.create.loading = true
          let { offset, keyword } = this.create

          this.$api.get(`api/v1/users`, { offset, keyword }).then((response) => {

            let { data: { data, meta: { count, new_offset } } } = response

            data.forEach(item => this.create.data.push(item))
            this.create.count = count
            this.create.offset = new_offset
            this.create.infiniteDisabled = (new_offset >= count)
            this.create.loading = false

            resolve && resolve()

          }, (error) => {
            const { response: { data }, response: { status }} = error
            this.create.loading = false

            reject && reject()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })

            throw new Error('Error follow user')
          })
        })
      },
      formatUidDialog (user_id) {
        return this._.sortBy([ user_id, this.user.id ]).toString()
      }
    }
  }
</script>
<style lang="sass" scoped>
  .mint-loadmore-content
    height: calc(100% + 50px)
    overflow-y: scroll
    margin-top: -50px
    .mint-loadmore-top

  .lm-m-messages--list
    overflow: scroll
    transition: .2s
    -webkit-transition: .2s
    .mint-loadmore
      height: 100%
      overflow: scroll
  .null
    height: 100vh
  .arrow
    display: inline-block
    vertical-align: middle
    -webkit-transition: .2s linear
    transition: .2s linear
    &.rotate
      transform: rotate(180deg)
      -webkit-transform: rotate(180deg)
</style>
