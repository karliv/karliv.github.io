<template>
  <div class="page page_feed">
    <div class="page__content">
      <div class="page__body page__body_feed">
        <div class="d-row align_end mb_6">
          <div class="heading heading_h2 mb_0">Уведомления</div>
        </div>
        <div class="d-feed d-feed_notifications">
          <div v-if="sidebar" class="sidebar d-feed__sidebar">
            <!-- active sidebar__content class: sidebar__content_active -->
            <div class="sidebar__content">
              <!-- filters -->
              <div class="filters">
                <div class="d-card">
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center mb_3">
                        <div class="list__header list__header_filters list__header_dropdown">От</div>
                        <svg class="d-icon d-icon_size_16 ml_2">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown" />
                        </svg>
                      </div>
                      <div class="list__body list__body_filters list__body_dropdown">
                        <div class="list__item">
                          <div class="d-radio">
                            <input id="from-all" type="radio" class="d-radio__mark" name="filter-from">
                            <label for="from-all" class="d-radio__label">Всех</label>
                          </div>
                        </div>
                        <div class="list__item">
                          <div class="d-radio">
                            <input id="from-users" type="radio" class="d-radio__mark" name="filter-from">
                            <label for="from-users" class="d-radio__label">Пользователей</label>
                          </div>
                        </div>
                        <div class="list__item">
                          <div class="d-radio">
                            <input id="from-linkmuse" type="radio" class="d-radio__mark" name="filter-from">
                            <label for="from-linkmuse" class="d-radio__label">Linkmuse</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div> <!-- end of filters -->

              <!-- 							<div class="d-card d-card_outline">
                              <div class="d-nav d-nav_inline-bullet">
                                <router-link class="d-nav__item" :to="{ name: 'certifying.index' }">Верификация</router-link>
                                <router-link class="d-nav__item" :to="{ name: 'board.castings.index' }">Кастинги</router-link>
                                <a class="d-nav__item" href="/talents">Таланты</a>
                                <a class="d-nav__item" href="/customers">Заказчики</a>
                                <router-link class="d-nav__item" :to="{ name: 'articles.index' }"> Блог</router-link>
                                <a class="d-nav__item" target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8">App Store</a>
                                <a class="d-nav__item" target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&amp;hl=ru">Google play</a>

                                <template v-if="isAuthorized === false">
                                  <a class="d-nav__item" href="/register">Регистрация</a>
                                  <a class="d-nav__item" href="/login">Вход</a>
                                </template>

                                <a class="d-nav__item" href="https://www.facebook.com/linkmuseofficial" target="_blank">Фейсбук</a>
                                <a class="d-nav__item" href="https://vk.com/link_muse" target="_blank">Вконтакте</a>
                                <a class="d-nav__item" href="https://www.instagram.com/linkmuse" target="_blank">Инстаграм</a>
                                <a class="d-nav__item" href="mailto:help@linkmuse.com">Написать на почту</a>
                              </div>
                              <div class="d-copyright mt_3">© {{ $moment() | moment('Y') }} Linkmuse</div>
                            </div> -->

            </div>
          </div> <!-- end of sidebar -->

          <div :class="['d-feed__body', sidebar ? 'ml-4' : 'no-sidebar']">
            <div class="d-card"
                 infinite-scroll-distance="200"
                 v-infinite-scroll="_handleInfiniteScroll"
                 infinite-scroll-disabled="infiniteDisabled">

              <template v-for="item in notifications">
                <notification-card :item="item" :ref="`notificationCard-${item.id}`" @onRead="addOnRead"></notification-card>
              </template>

              <div class="ta_center" v-if="isEmpty">Новых уведомлений нет</div>

              <lm-loader v-if="loading"></lm-loader>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { on, off } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import NotificationCard from '@modules/Notifications/Index.vue'

  export default {
    components: {
      NotificationCard
    },
    metaInfo: {
      title: 'Мои уведомления'
    },
    async asyncData ({ store, route }) {
      await store.dispatch('notification/fetchNotificationsOnCatalog', { rewrite: true })
    },
    data () {
      return {
        readOnScroll: false,
        unread: [],
        sidebar: false
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
        return ( !this.loading && this.count === 0 )
      }
    },
    mounted () {
      this.$store.dispatch('auth/setUserField', { key: 'countUnreadNotifications', value: 0 })

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
        setNotificationOnCatalogFiledById: 'notification/setNotificationOnCatalogFiledById'
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

          if (!(item.offsetTop > minY && (item.offsetTop + item.offsetHeight) < maxY)) return true

          this._handleRead(e)

          return false
        })
      },
      _handleRead (item) {
        this.$api.patch(`api/v1/notifications/${item.id}/read`).then(response => {
          this.setNotificationOnCatalogFiledById({ id: item.id, key: 'read', value: true })
        }, error => {
          console.error('Error notification read', error);
          throw new Error(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
