<template>
  <div class="page__content">
    <div class="page page_error page_error_404">
      <div class="container" style="background: #fff; padding: 20px; width: 700px;">
        <div v-if="!status" class="page_mailing page_mailing_unsubscribe">
          <div class="page__container page__container_mailing page__container_mailing_unsubscribe">
            <h1 class="page__title page__title_mailing page__title_mailing_unsubscribe">Решили отписаться?</h1>
            <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Для
              прекращения
              получения от нас рекламных рассылок нажмите “отписаться”.</p>
            <br class="paragraph__break paragraph__break_mobile"/>
            <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Обратите
              внимание, если вы имеете аккаунт, вы продолжите получать <br
                class="paragraph__break paragraph__break_tablet"/>письма об актуальных транзакциях,
              подписчиках и сообщениях.</p>
            <button @click.stop.prevent="_handleSetStatus" class="button button_mailing button_mailing_unsubscribe">
              Отписаться
            </button>
          </div>
        </div>

        <div v-if="status" class="page_mailing page_mailing_unsubscribe">
          <div class="page__container page__container_mailing page__container_mailing_unsubscribe">
            <h1 class="page__title page__title_mailing page__title_mailing_unsubscribe">Решили отписаться?</h1>
            <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Для
              прекращения
              получения от нас рекламных рассылок нажмите “отписаться”.</p>
            <br class="paragraph__break paragraph__break_mobile"/>
            <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Обратите
              внимание, если вы имеете аккаунт, вы продолжите получать <br
                class="paragraph__break paragraph__break_tablet"/>письма об актуальных транзакциях,
              подписчиках и сообщениях.</p>
            <button @click.stop.prevent="_handleSetStatus" class="button button_mailing button_mailing_subscribe">
              Подписаться
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo () {
      return {
        title: `Почтовая рассылка`
      }
    },
    computed: {
      ...mapGetters({
        status: 'unsubscribe/getStatus',
        error: 'unsubscribe/getError',
        loading: 'unsubscribe/getLoading'
      })
    },
    mounted () {
      const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

      let { user_id: userId } = this.$route.params,
        { signature } = this.$route.query

      this.$store.dispatch('unsubscribe/getStatus', { userId, signature })

      this.$store.subscribe(mutation => {
        if (mutation.type === 'unsubscribe/SET_LOADING') {
          if (this.loading) {
            loader.hide()
          } else
            loader.hide()
        }
      })
    },
    methods: {
      _handleSetStatus () {
        let { user_id: userId } = this.$route.params,
          { signature } = this.$route.query

        this.$store.dispatch('unsubscribe/setStatus', { userId, signature })
      }
    }
  }
</script>
