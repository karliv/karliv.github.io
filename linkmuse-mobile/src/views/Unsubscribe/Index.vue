<template>
  <div>
    <div v-if="!status" class="page page_mailing page_mailing_unsubscribe">
      <h1 class="page__title page__title_mailing page__title_mailing_unsubscribe">Решили отписаться?</h1>
      <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Для прекращения получения
        от нас рекламных рассылок нажмите “отписаться”.</p>
      <br class="paragraph__break paragraph__break_mobile"/>
      <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe">Обратите внимание, если вы
        имеете аккаунт, вы продолжите получать <br class="paragraph__break paragraph__break_tablet"/>письма об
        актуальных транзакциях, подписчиках и сообщениях.</p>
      <button @click.stop.prevent="_handleSetStatus" class="button button_mailing button_mailing_unsubscribe">
        Отписаться
      </button>
    </div>
    <div v-if="status" class="page page_mailing page_mailing_subscribe">
      <h1 class="page__title page__title_mailing page__title_mailing_subscribe">Очень жаль</h1>
      <p class="page__paragraph page__paragraph_mailing page__paragraph_mailing_subscribe">Если вы передумаете, то
        всегда сможете подписаться на <br class="paragraph__break paragraph__break_tablet">рекламные рассылки снова,
        нажав “подписаться”.</p>
      <button @click.stop.prevent="_handleSetStatus" class="button button_mailing button_mailing_subscribe">
        Подписаться
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Indicator } from 'mint-ui'

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
      Indicator.open()

      let { user_id: userId } = this.$route.params,
        { signature } = this.$route.query

      this.$store.dispatch('unsubscribe/getStatus', { userId, signature })

      this.$store.subscribe(mutation => {
        if (mutation.type === 'unsubscribe/SET_LOADING'){
          if (this.loading) {
            Indicator.open()
          } else
            Indicator.close()
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
