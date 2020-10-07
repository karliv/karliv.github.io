<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Верификация</div>
      <i class="icon-more" v-if="(refusedDispute === false)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.customer.orders.show.dispute', params: { order_id: order_id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content">
      <h2>Это свершилось!</h2>
      <div class="ss-dispute-warning-desc">
        Вы договорились с заказчиком о встрече! <br>
        Будьте готовы к ней,  не забудьте, а лучше добавьте в календарь
        <br>
        Перед верификацией прочитайте <a href="javascript:void(0)" @click.stop.prevent="_handleOpenModalRules">ПРАВИЛА</a>
      </div>
      <div class="ss-dispute-warning-desc">
        Когда начнете проводить верификацию, нажмите на кнопку снизу
        или перенесите карточку с заказом в колонку «В работе»
      </div>
      <div class="actions">
        <a href="javascript:void(0)" class="lm-primary-button" @click="startWork()" v-if="!loading">НАЧАТЬ ВЕРИФИКАЦИЮ</a>
        <loader v-if="loading" style="height: 44px;"></loader>
      </div>
    </div>
    <lm-modal-rules></lm-modal-rules>
  </div>
</template>

<script>
import ModalRules from '@components/CertifyingSpecialist/Customer/Modals/Rules.vue'

export default {
  props: {
    refusedDispute: {
      type: Boolean,
      default: false
    },
    order_id: {
      type: Number,
      required: true
    }
  },
  components: { 'lm-modal-rules': ModalRules },
  data () {
    return {
      loading: false,
      success: false,
      error: false
    }
  },
  methods: {
    startWork () {
      this.loading = true

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order_id}/status/start_work`).then((response) => {
        this.loading = false
        this.success = true
        this.error = false
        this.$emit('start')
      }, (response) => {
        this.loading = false
        this.success = false
        this.error = true

        throw new Error(`Error confirm meeting specialist order#${this.order_id}`)
      })
    },
    _handleOpenModalRules () {
      this.$root.$emit('open-modal-rules-customer-show')
    }
  }
}
</script>

<style>

</style>
