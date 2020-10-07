<template>
  <div>
    <div class="lm-m-post-register-enter-info lm-portfolio">
      <template-model :portfolio="portfolio" :is_current_user="is_current_user" v-if="portfolio"></template-model>
    </div>
    <div slot="actions" class="lm-m-post-register-fixed-bottom" v-if="is_current_user">
      <a @click="_handleClickSkipPublishPortfolio" href="javascript:void(0)" class="lm-link-button">Пропустить</a>
      <button @click="_handleClickPublishPortfolio" class="lm-primary-button middle" v-if="(disabledPublish === false)">Завершить</button>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { Indicator } from 'mint-ui'
  import TemplateModel from '@components/User/Executor/Portfolio/Templates/Model.vue'

  export default {
    components: { 'template-model': TemplateModel },
    props: {
      is_current_user: {
        type: Boolean,
        required: false
      }
    },
    data () {
      return {
        portfolio: null
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser'
      }),
      isExecutor () {
        return (this.role === 'executor')
      },
      disabledPublish () {
        if (!this.portfolio) return true
        return this.portfolio.cells.data.some(cell => has(cell, 'data.id') === false)
      }
    },
    created () {
      this.$api.get(`api/v1/users/${this.user.id}/portfolio`).then((response) => {
        const { data: { data } } = response
        this.portfolio = data ? data[0] : null
      }, (error) => {
        const { response: { data }, response: { status }} = error

        if (status === 422 && data.errors) {
          const { errors } = data

        } else throw new Error('Error loading portfolio')
      })
    },
    methods: {
      _handleClickSkipPublishPortfolio () {
        this._handleRedirectAfterRegister()
      },
      _handleClickPublishPortfolio () {
        Indicator.open()

        this.$api.patch(`api/v1/profiles/portfolio/${this.portfolio.id}/publish`).then((response) => {
          const { data: { data } } = response

          Indicator.close()
          this._handleRedirectAfterRegister()
        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          if (status === 422 && data.errors) {
            const { errors } = data

          } else throw new Error('Error loading portfolio')
        })
      },
      _handleRedirectAfterRegister () {
        if (this.$localStorage.get('redirect.register', null, String)) {
          let location = this.$localStorage.get('redirect.register', '/', String)
          this.$localStorage.remove('redirect.register')
          this.$router.push(location)
        } else this.$router.push({ name: 'user.show', params: { username: this.user.username } })

        this.$nextTick(() => {
          this.$root.$emit('open-modal-draw-geo')
        })
      }
    }
  }
</script>

<style scoped>

</style>
