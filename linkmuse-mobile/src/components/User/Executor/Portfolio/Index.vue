<template>
  <div>
    <template v-if="(!loading && portfolio)">
      <div class="lm-portfolio">
        <template-model v-if="(portfolio.template === 0)"
                        :portfolio="portfolio"
                        @updated="_handleUpdatedCell"
                        @unpublished="_handleUnpublishedPortfolio">
        </template-model>
      </div>
      <div class="lm-m-profile-action-edit">
        <template>
          <template v-if="(portfolio.publish === true)">
            <a href="javascript:void(0)"
               class="lm-link-button"
               @click="_handleClickDestroyPortfolio">Удалить</a>
          </template>
          <template v-if="(portfolio.publish === false)">
            <span>&nbsp;</span>
          </template>
        </template>

        <template>
          <button href="javascript:void(0)"
                  @click="_handleClickPublishPortfolio"
                  :class="['lm-primary-button middle', { disabled: (disabledPublish) }]"
                  v-if="(portfolio.publish === false)">опубликовать</button>

          <button href="javascript:void(0)"
                  class="lm-outline-button middle"
                  @click="_handleClickPublishPortfolio"
                  v-if="(portfolio.publish === true)">Снять с публикации</button>
        </template>
      </div>
    </template>

    <lm-m-loader v-else-if="(loading && !portfolio)"></lm-m-loader>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import TemplateModel from './Templates/Model.vue'

  export default {
    components: { 'template-model': TemplateModel },
    data () {
      return {
        portfolio: null,
        loading: false
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
    mounted () {
      this.loading = true

      this.$api.get(`/api/v1/users/${this.user.id}/portfolio`).then((response) => {
        const { data: { data } } = response
        this.portfolio = data ? data[0] : null

        this.loading = false
      }, (error) => {
        const { response: { data }, response: { status }} = error

        this.loading = false

        if (status === 422 && data.errors) {
          const { errors } = data
        } else throw new Error('Error loading portfolio')
      })
    },
    methods: {
      _handleClickPublishPortfolio () {
        if (this.disabledPublish) return false

        Indicator.open()

        this.$api.patch(`api/v1/profiles/portfolio/${this.portfolio.id}/publish`).then((response) => {
          const { data: { result } } = response

          Indicator.close()
          this.portfolio.publish = result

          this.$store.commit('user/SET_SHOW_USER_DATA_PORTFOLIO_PUBLISH', result)

          this.$emit('updated', this.portfolio)
        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          if (status === 422 && data.errors) {
            const { errors } = data

          } else throw new Error('Error loading portfolio')
        })
      },
      _handleClickDestroyPortfolio () {
        Indicator.open()

        this.$api.delete(`api/v1/profiles/portfolio/${this.portfolio.id}`).then((response) => {
          const { data: { result } } = response

          Indicator.close()
          this.portfolio = null
          this.$emit('removed')
        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          if (status === 422 && data.errors) {
            const { errors } = data

          } else throw new Error('Error loading portfolio')
        })
      },
      _handleUnpublishedPortfolio () {
        this.$set(this.portfolio, 'publish', false)
      },
      _handleUpdatedCell (cell, value) {
        this.$set(this.portfolio.cells.data, cell, value)
      }
    }
  }
</script>

<style scoped>

</style>
