<template>
    <div>
      <template v-if="order">
        <div class="lm-m-cs-open-dispute lm-m-fullh-page">
          <div class="lm-m-cs-open-dispute--wrap">

            <template v-if="!is_dispute">
              <div class="title">Решили начать диспут?</div>
            </template>

            <template v-else-if="is_dispute">
              <template v-if="!dispute.status">
                <div class="title">Диспут открыт, ожидайте решения.</div>
              </template>
              <template v-else-if="dispute.status">
                <div class="title">Диспут открыт, ожидайте решения.</div>
                <div class="desc">{{ getDisputeStatusTranslate(dispute.status) }}</div>
              </template>
            </template>

            <template v-if="!is_dispute">
              <div class="desc">Выберите причину, по которой выбранная услуга вам не понравилась, а также способ решения, который удовлетворил бы вас</div>
            </template>

            <template>
              <div class="lm-radio-buttons">
                <span>Причина диспута:</span>
                <span class="lm-input-error" v-if="verrors.has('cause')">{{ verrors.first('cause')}}</span>
                <ul>
                  <li v-for="cause in causes">
                    <input type="radio" name="cause"
                           :key="`cause_${cause}`"
                           :id="`cause_${cause}`"
                           v-validate="'required'"
                           :value="cause"
                           :disabled="is_dispute"
                           v-model="fields.cause">
                    <label :for="`cause_${cause}`">{{ getDisputeCauseTranslate(cause) }}</label>
                  </li>
                </ul>
              </div>
              <div class="lm-radio-buttons">
                <span>Способ решения:</span>
                <span class="lm-input-error" v-if="verrors.has('solution')">{{ verrors.first('solution')}}</span>
                <ul>
                  <li v-for="solution in solutions">
                    <input type="radio" name="solution"
                           :key="`solution_${solution}`"
                           :id="`solution_${solution}`"
                           v-validate="'required'"
                           :value="solution"
                           :disabled="is_dispute"
                           v-model="fields.solution">
                    <label :for="`solution_${solution}`">{{ getDisputeSolutionsTranslate(solution) }}</label>
                  </li>
                </ul>
              </div>
              <div class="separator"></div>
              <div class="lm-input-wrap">
                <label for="comment">Комментарий:</label>
                <input id="comment" name="comment" type="text"
                  v-model="fields.comment"
                  v-validate="'required'"
                  :disabled="is_dispute"
                  placeholder="Пожалуйста, опишите подробнее возникшую ситуацию, это поможет нашему модератору лучше понять ваш конфликт и решить его."
                  :class="{ 'lm-input': true, error: (errors['comment'] || verrors.has('comment')) }">
              </div>
            </template>
          </div>


          <div class="lm-action-buttons lm-bottom-actions-buttons">
            <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>

            <template v-if="!is_dispute">
              <a class="lm-primary-button middle" href="javascript:void(0)" @click="createDispute()">Отправить</a>
            </template>
            <template v-else-if="is_dispute">
              <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-primary-button middle">
                подробнее о заказе
              </router-link>
            </template>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
          <div class="lm-m-cs-wait-page--wrap">
            <h3 class="title">Ошибка</h3>
            <div class="desc">
              <div class="top">Произошла ошибка</div>
            </div>
          </div>
          <div class="lm-action-buttons lm-bottom-actions-buttons">
            <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
          </div>
        </div>
      </template>
    </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'

  import CertifyingSpecialist from '@modules/CertifyingSpecialist'
  import { getSpecialistCauses } from '@modules/CertifyingSpecialist/Enums/DisputeCauses'
  import { getSpecialistSolutions } from '@modules/CertifyingSpecialist/Enums/DisputeSolutions'

  export default {
    data () {
      return {
        loading: false,
        errors: [],
        fields: {
          cause: null,
          solution: null,
          comment: null
        }
      }
    },
    metaInfo () {
      return {
        title: this.title
      }
    },
    async asyncData ({store, route}) {
      await store.dispatch('certifying/getOrderById', {
        id: Number(route.params.order_id),
        include: 'certifying_specialist,dispute'
      })
    },
    computed: {
      ...mapGetters({
        order: 'certifying/getSingleOrderData',
        order_loading: 'certifying/geSingleOrderLoading'
      }),
      title () {
        if (!this.order) return
        return `Диспут заказ #${this.order.id}`
      },
      is_dispute () {
        if (!this.order) return
        return this.order.hasOwnProperty('dispute')
      },
      dispute () {
        if (!this.is_dispute) return
        return this.order.dispute.data
      },
      causes () {
        return getSpecialistCauses()
      },
      solutions () {
        return getSpecialistSolutions()
      }
    },
    created () {
      if (this.is_dispute && this.dispute) {
        this.fields = {...this.dispute}
      }
    },
    methods: {
      ...mapActions({
        setDisputeData: 'certifying/setSingleOrderFieldByKey'
      }),
      getDisputeStatusTranslate (status) {
        return CertifyingSpecialist.getDisputeStatusTranslate(status)
      },
      getDisputeCauseTranslate (cause) {
        return CertifyingSpecialist.getDisputeCauseTranslate(cause)
      },
      getDisputeSolutionsTranslate (solution) {
        return CertifyingSpecialist.getDisputeSolutionsTranslate(solution)
      },
      createDispute () {
        this.$validator.validateAll().then(result => {
          if (result) {
            let {id} = this.order

            if (this.loading || !id) return

            Indicator.open()
            this.loading = true

            this.$api.post(`/api/v2/certifying-specialists/orders/${id}/disputes`, this.fields).then((response) => {
              let {data} = response

              this.setDisputeData({key: 'dispute', data})
              this.loading = false

              Indicator.close()
              Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });

            }).catch((error) => {
              this.loading = false

              Indicator.close()
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

              const {response: {data}, response: {status}} = error
              if (status === 422 && data.errors) {
                this.$setLaravelValidationErrorsFromResponse(data)
              } else throw new Error(`Error create dispute order#${id}`)
            })
          }
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .lm-input-error
    color: red !important

</style>
