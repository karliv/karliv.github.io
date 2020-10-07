<template>
  <div class="lm-m-v2-notifications lm-m-page">
    <div class="lm-m-v2-notifications-head lm-m-page--head">
      <span>Уведомления</span>
    </div>
    <div class="lm-m-v2-notifications-body" v-if="!isEmpty">
      <div class="lm-m-v2-notifications-list"
           infinite-scroll-distance="200"
           v-infinite-scroll="_handleInfiniteScroll"
           infinite-scroll-disabled="infiniteDisabled">

        <template v-for="item in notifications">
          <notification-card :item="item" :ref="`notificationCard-${item.id}`" @onRead="addOnRead"></notification-card>
        </template>

        <lm-m-loader v-if="loading"></lm-m-loader>
      </div>
    </div>

    <div class="lm-m-v2-notifications-body-isEmpty" v-if="isEmpty">
      Новых уведомлений нет
    </div>
  </div>
</template>

<script>
  import { on, off } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import NotificationCard from '@modules/Notifications/Index.vue'

  export default {
    components: { NotificationCard },
    metaInfo: {
      title: 'Уведомления'
    },
    async asyncData ({ store, route }) {
      await store.dispatch('notification/fetchNotificationsOnCatalog', { rewrite: true })
    },
    data () {
      return {
        readOnScroll: false,
        unread: []
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        count: 'notification/getCountNotificationsOnCatalog',
        error: 'notification/getNotificationsErrorOnCatalog',
        notifications: 'notification/getNotificationsOnCatalog',
        loading: 'notification/getNotificationsLoadingOnCatalog',
        infiniteDisabled: 'notification/getNotificationsInfiniteDisabledOnCatalog'
      }),
      isEmpty () {
        return (!this.loading && this.count === 0)
      },
    },
    mounted () {
      this.$store.dispatch('auth/setUserField', { key: 'counters.unreadNotifications', value: 0 })

      if (this.unread.length) {
        on(window, 'scroll', this._handleScroll)
        this._handleScroll()
        this.readOnScroll = true
      }
    },
    beforeDestroy () {
      this.readOnScroll = false
      off(window, 'scroll', this._handleScroll)
    },
    methods: {
      ...mapActions({
        fetchNotificationsOnCatalog: 'notification/fetchNotificationsOnCatalog',
        clearNotificationsOnCatalog: 'notification/clearNotificationsOnCatalog',
        setNotificationOnCatalogFiledById : 'notification/setNotificationOnCatalogFiledById'
      }),
      _handleInfiniteScroll () {
        this.fetchNotificationsOnCatalog({ rewrite: false })
      },
      addOnRead (item) {
        this.unread.push(item)
        this._handleScroll()

        if (this.readOnScroll) return

        on(window, 'scroll', this._handleScroll)
        this.readOnScroll = true
      },
      _handleScroll () {
        if (!this.unread.length) {
          this.readOnScroll = false
          return off(window, 'scroll', this._handleScroll)
        }

        const minY = window.scrollY
        const maxY = window.scrollY + window.innerHeight

        this.unread = this.unread.filter(e => {
          const item = this.$refs[`notificationCard-${e.id}`][0].$el

          if (!(item.offsetTop >= minY && (item.offsetTop + item.offsetHeight) <= maxY)) return true

          this._handleRead(e)

          return false
        })
      },
      _handleRead (item) {
        this.$api.patch(`api/v1/notifications/${item.id}/read`).then(response => {
          this.setNotificationOnCatalogFiledById({ id: item.id, key: 'read', value: true })
        }, error => {
          console.error('Error notification read', error);
        })
      }
    }
  }
</script>
