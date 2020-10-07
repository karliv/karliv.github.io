<template>
  <section class="ss-dispute">
    <template v-if="order">
      <template v-if="!is_dispute">
        <h1>Вы начали диспут</h1>
      </template>

      <template v-else-if="is_dispute">
        <template v-if="!dispute.status">
          <h1>Диспут открыт, ожидайте решения.</h1>
        </template>
        <template v-else-if="dispute.status">
          <h1>Диспут завершен.</h1>
          <h3 style="text-align: center">{{ getDisputeStatusTranslate(dispute.status) }}</h3>
        </template>
      </template>

      <div class="ss-dispute-desc" v-if="!is_dispute">
        Выберите причину, по которой оказываемая специалистом
        услуга вам не понравилась, и способ решения конфликта, который
        вас бы удовлетворил
      </div>

      <div class="ss-dispute-form">
        <div class="ss-dispute-form-wrap top">
          <div class="title">Причина диспута:</div>
          <ul class="lm-radio-buttons">
            <li v-for="cause in causes">
              <input type="radio" name="cause"
                     :key="`cause_${cause}`"
                     :id="`cause_${cause}`"
                     v-validate="'required'"
                     data-vv-as="причина диспута"
                     :value="cause"
                     :disabled="is_dispute"
                     v-model="fields.cause">
              <label :for="`cause_${cause}`">{{ getDisputeCauseTranslate(cause) }}</label>
            </li>

            <span class="lm-input-error" v-if="errors['cause'] && !verrors.has('cause')">{{ errors['cause'][0] }}</span>
            <span class="lm-input-error" v-else-if="verrors.has('cause')">{{ verrors.first('cause')}}</span>
          </ul>
        </div>
        <div class="ss-dispute-form-wrap">
          <div class="title">Способ решения:</div>
          <ul class="lm-radio-buttons">
            <li v-for="solution in solutions">
              <input type="radio" name="solution"
                     :key="`solution_${solution}`"
                     :id="`solution_${solution}`"
                     v-validate="'required'"
                     data-vv-as="способ решения"
                     :value="solution"
                     :disabled="is_dispute"
                     v-model="fields.solution">
              <label :for="`solution_${solution}`">{{ getDisputeSolutionsTranslate(solution) }}</label>
            </li>

            <span class="lm-input-error" v-if="errors['solution'] && !verrors.has('solution')">{{ errors['solution'][0] }}</span>
            <span class="lm-input-error" v-else-if="verrors.has('solution')">{{ verrors.first('solution')}}</span>
          </ul>
          <div :class="[{ error: (errors['comment'] || verrors.has('comment')) }, 'ss-dispute-form-comment', 'lm-input-wrap']">
            <label for="comment">Комментарий</label>
            <textarea id="comment" name="comment"
                      v-model="fields.comment"
                      v-validate="'required'"
                      :disabled="is_dispute"
                      placeholder="Пожалуйста, опишите подробнее возникшую ситуацию, это поможет нашему модератору лучше понять ваш конфликт и решить его."
                      :class="{ 'lm-input': true, error: (errors['comment'] || verrors.has('comment')) }">
            </textarea>
          </div>
          <div class="action">
            <template v-if="!is_dispute">
              <a class="lm-primary-button" href="javascript:void(0)" @click="createDispute()" v-if="!loading">ОТПРАВИТЬ</a>
              <loader v-if="loading" class="pd-26 col-md-12"></loader>
            </template>
            <template v-else-if="is_dispute">
              <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-primary-button">
                подробнее о заказе
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="ss-dispute-desc">
        <h1>Произошла ошибка</h1>
        <div class="ss-dispute-desc">
          <a href="javascript:history.go(-1)" class="lm-primary-button" style="color: #fff;">назад</a>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
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

          this.loading = true

          this.$api.post(`/api/v2/certifying-specialists/orders/${id}/disputes`, this.fields).then((response) => {
            let {data} = response

            this.setDisputeData({key: 'dispute', data})
            this.loading = false
          }).catch((error) => {
            this.loading = false

            const {response: {data}, response: {status}} = error
            if (status === 422 && data.errors) {
              this.errors = data.errors
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
    font-size: 11px
    letter-spacing: 0.2px
    display: block
    text-align: left
    color: #fc2e5f
    margin-top: 15px
</style>
