<template>
  <section class="ss-dispute">
    <template v-if="not_paid">
      <template v-if="order && !success">
        <h1>Оплата верификации</h1>
        <div class="ss-dispute-desc" style="width: 640px">
          <div style="margin-bottom: 10px;">Деньги поступят на счет Специалиста, только после одобрения вами готовой Верификации</div>
          <div style="margin-bottom: 10px;">Нажимая на кнопку, вы соглашаетесь с <a href="javascript:void(0)" @click.stop.prevent="_handleModalRulesShow">правилами верификации</a></div>
        </div>
        <div class="ss-cart-block">
          <div class="ss-cart-block-left">
            <div class="ss-cart-block-head">
              <h3>Оплата</h3>
            </div>
            <div class="ss-cart-block-pay-card" style="height: 177px">
              <template>
                <template v-if="(loading === false)">
                  <a href="javascript:void(0)" class="lm-primary-button full" @click="_handleClickPaymentOrder()" :id="service.slug">Оплатить</a>
                </template>

                <div class="row" v-if="(loading === true)">
                  <div class="col-xs-12">
                    <loader style="display: inline-block; vertical-align: middle;"></loader>
                    <span>Оплата заказа...</span>
                  </div>
                </div>
              </template>
              <div class="ss-cart-block-text-bottom">Нажимая на кнопку, вы соглашаетесь с <a href="https://linkmuse.com/pages/polzovatelskoe-soglashenie-vs" target="_blank">условиями сервиса</a></div>
            </div>
          </div>
          <div class="ss-cart-block-right">
            <div class="ss-cart-block-head">
              <h3>Вид верификации</h3>
              <router-link :to="{ name: 'certifying.executor.index' }" class="edit-link">Изменить</router-link>
            </div>
            <div class="ss-cart-block-info">
              <div class="ss-cart-block-info-line">
                <div class="left">Способ:</div>
                <div class="right">
                  <ul>
                    <li v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">
                      <a href="javascript:void(0)">{{ work }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ss-cart-block-info-line">
                <div class="left">Специалист:</div>
                <div class="right">
                  <a :href="specialist.href" class="lm-user-block small">
                    <img :src="specialist.avatar" :alt="specialist.name" class="lm-user-block-avatar">
                    <div class="lm-user-block-info">
                      <div class="lm-user-block-info-name">{{ specialist.name }}</div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="ss-cart-block-info-line">
                <div class="left">Адрес:</div>
                <div class="right">
                  <div class="place">{{ studio.address }}</div>
                </div>
              </div>
              <div class="ss-cart-block-info-line">
                <div class="ss-cart-block-info-line-promocode">
                  <div class="d-row">
                    <template v-if="(hasPromocode === false)">
                      <input id="promocode" type="text" name="promocode" placeholder="Промокод" autocomplete="off"
                             v-model="promocode.value"
                             v-validate="'max:65000'"
                             data-vv-as="Промокод"
                             :class="[{ 'error': (verrors.has('promocode')) }, 'd-input__field', 'flex_2']">

                      <button href="javascript:void(0)" class="d-btn d-btn_primary flex_1 ml_2" :disabled="(promocode.loading === true || !promocode.value)" @click="_handleClickRedeemPromocode">применить</button>
                    </template>
                    <template v-else-if="(hasPromocode === true)">
                      <div class="promocode-description-info"><span class="promocode-description-title">Промокод: </span>{{ codePromocode }} <span class="promocode-description-reward">( - {{ rewardPromocode | currency('₽') }} )</span></div>
                    </template>
                  </div>
                  <lm-loader v-if="(promocode.loading === true)" class="mt_2"></lm-loader>
                </div>
              </div>
            </div>
            <div class="ss-cart-block-bottom">
              <h3>Итого к оплате</h3>
              <div class="total" v-if="order.price">{{ order.price | currency('₽') }}</div>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </template>
      <template v-if="success">
        <div style="position: relative; z-index: 1;">
          <h1>Верификация оплачена!</h1>
          <div class="ss-dispute-desc">
            Вам на почту пришла квитанция об оплате услуги.
          </div>
          <div class="ss-dispute-desc-bottom">
            <b>Почти готово!</b> Оставьте специалисту свои пожелания
            по дате и времени проведения верификации
          </div>
          <div class="ss-dispute-form-comment">
            <textarea placeholder="Например, что вам удобно каждую среду с 12 до 15" v-model="message.text"></textarea>
            <a href="javascript:void(0)" class="lm-primary-button" @click="_handleClickSendMessage" v-if="!message.loading">Отправить</a>
            <loader v-if="message.loading"></loader>
          </div>
        </div>
        <div id="fireworks" ref="fireworks">
        </div>
      </template>
    </template>

    <template v-if="paid">
      <h1>Данный заказ уже оплачен!</h1>
      <div class="ss-dispute-form-comment" style="text-align: center;">
        <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id } }" class="lm-primary-button">Перейти к заказу</router-link>
      </div>
    </template>

    <template v-if="error">
      <h1>Заказ не найден 🙁 </h1>
      <div class="ss-dispute-form-comment" style="text-align: center;">
        <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-primary-button">Мои заказы</router-link>
      </div>
    </template>
    <lm-modal-rules></lm-modal-rules>
  </section>
</template>

<script>
import { has } from '@utils'
import { mapGetters, mapMutations } from 'vuex'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'
import ModalRules from '@components/CertifyingSpecialist/Executor/Modals/Rules.vue'

const Fireworks = require('fireworks-canvas')

export default {
  metaInfo: {
    title: 'Оплата верификации'
  },
  components: { 'lm-modal-rules': ModalRules },
  data () {
    return {
      errors: [],
      loading: false,
      success: false,
      error: false,
      payment: {
        form: {},
        url: null
      },
      message: {
        loading: false,
        text: null,
        recipient_id: null
      },
      promocode: {
        value: null,
        loading: false
      }
    }
  },
  async asyncData ({store, route}) {
    await store.dispatch('certifying/getOrderById', {
      id: Number(route.params.order_id),
      include: 'certified_user,certifying_specialist,service,service.studio'
    })
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      order: 'certifying/getSingleOrderData'
    }),
    order_id () {
      return Number(this.$route.params.order_id)
    },
    specialist () {
      return this.order.certifying_specialist.data
    },
    service () {
      return this.order.service.data
    },
    not_paid () {
      return (this.order) ? this.order.status === 'not_paid' : null
    },
    paid () {
      return (this.order) ? this.order.status === 'paid' : null
    },
    userBalance() {
      return this.user.balance
    },
    isEnoughMoney() {
      return (this.userBalance >= this.order.price)
    },
    studio () {
      if (has(this.service, 'studio.data')) {
        return this.service.studio.data
      }

      return null
    },
    hasPromocode () {
      return has(this.order, 'promocode.code')
    },
    codePromocode () {
      return this.hasPromocode ? this.order.promocode.code : null
    },
    rewardPromocode () {
      return this.hasPromocode ? this.order.promocode.reward : null
    }
  },
  created () {
    if (!this.order) {
      this.error = true
      return null
    }
  },
  mounted () {
    if (this.isEnoughMoney === false) this.getPaymentFields()

    this.$root.reachGoalGtm({ event: 'startPayCS', orderId: this.order_id, slug: this.service.slug })

    this.$echo.private(`user.${this.user.id}`).listen('.billing.account.refill', (payload) => {
      let { amount, transfer_id } = payload
      console.log(amount, transfer_id);

      /*
      if (parseFloat(amount) >= parseFloat(this.order.price)) {
        this.paymentOrder();
      } else console.log('Недостаточно средств, для оплаты заказа');
      */
    });
  },
  methods: {
    ...mapMutations({
      _setSingleOrderData: 'certifying/SET_SINGLE_ORDER_DATA',
    }),
    _handleModalRulesShow () {
      this.$root.$emit('open-modal-rules-executor-show')
    },
    _handleClickPaymentOrder () {
      if (this.isEnoughMoney === true) {
        this.paymentOrder(false)
      } else this._initCloudPaymentsWidget()
    },
    paymentOrder (with_receipt = false) {
      this.loading = true

      this.$api.post(`api/v2/certifying-specialists/orders/${this.order_id}/status/payment`, { with_receipt }).then(response => {
        this.success = true
        this.loading = false

        this.$root.reachGoalGtm({ event: 'payCS', orderId: this.order_id, slug: this.service.slug })

        this.$nextTick(() => {
          this.initFireworks().then(() => {
            this.startFireworks()
            setTimeout(() => {
              this.stopFireworks()
            }, 60000)
          })
        })
      }).catch((err) => {
        this.loading = false
        throw new Error(`Error payment ${this.order_id}`)
      })
    },
    _initCloudPaymentsWidget () {
      if (typeof cp !== 'object') {
        throw new Error('Error load CloudPayments')
      }

      const widget = new cp.CloudPayments()
      let { publicId, description, amount, currency, invoiceId, accountId } = this.payment.form

      widget.charge({
        publicId,
        description,
        amount: Number(amount),
        currency,
        invoiceId,
        accountId
      }, (options) => {
        this.paymentOrder(true)
      }, (reason, options) => {
        throw new Error(`Error payment ${this.order_id}. ${reason}`)
      })
    },
    getPaymentFields () {
      let amount = parseFloat(this.order['price']).toFixed(2)
      // let amount = parseInt(this.order['price'])
      if (!amount) return

      this.$api.post(`api/v2/billing/payment`, { amount }).then(response => {
        let { data: { form, url } } = response

        new Promise((resolve) => {
          this.payment = { form, url }
          resolve()
        }).then(() => {

        }).catch((err) => {
          throw new Error(err)
        })
      }).catch((err) => {
        throw new Error(`Error get payment fields`)
      })
    },
    getTransformServiceWorkType (works) {
      return CertifyingSpecialist.getTransformServiceWorkType(works)
    },
    initFireworks () {
      return new Promise((resolve, reject) => {
        this.fireworks = new Fireworks(this.$refs.fireworks, {
          maxRockets: 4,
          rocketSpawnInterval: 500,
          numParticles: 100,
          explosionMinHeight: 0.5,
          explosionMaxHeight: 0.9,
          explosionChance: 0.08
        })
        resolve()
      })
    },
    startFireworks () {
      if (!this.fireworks) return
      this.fireworks.start()
    },
    stopFireworks () {
      if (!this.fireworks) return
      this.fireworks.stop()
    },
    _handleClickSendMessage () {
      if (this.message.text) {
        this.message.recipient_id = this.specialist.id
        this.createMessage()
      } else this._handleRedirectToOrder()
    },
    createMessage () {
      if (this.message.loading) return

      this.message.loading = true

      let {text, recipient_id} = this.message

      this.$api.post(`/api/v1/dialogs/messages`, {text, recipient_id}).then(response => {
        this._handleRedirectToOrder()
        this.message.loading = false
      }).catch((err) => {
        this.message.loading = false
        throw new Error(`Error create messages in order ${this.order_id}`)
      })
    },
    _handleRedirectToOrder () {
      this.$router.push({ name: 'certifying.executor.orders.show', params: { order_id: this.order_id } })
    },
    _handleClickRedeemPromocode () {
      if (this.promocode.loading || !this.promocode.value) return

      this.promocode.loading = true

      let { value } = this.promocode

      this.$api.post(`api/v2/certifying-specialists/orders/${this.order_id}/promocodes?include=certified_user,certifying_specialist,service,service.studio`, { code: value }).then(response => {
        let { data: { data, meta: { payment: { form, url } } } } = response
        this.payment = { form, url }

        this._setSingleOrderData(data)

        this.promocode.loading = false
      }).catch((err) => {
        this.promocode.loading = false
        this.$validator.errors.add({ field: 'promocode', msg: 'Промкод не найден.' })
        throw new Error(`Error Redeem Promocode in order ${this.order_id}`)
      })
    }
  }
}
</script>

<style lang="sass">
  #fireworks
    position: absolute
    top: 0
    z-index: 0
    left: 0
    right: 0
    height: 100%
    .loader-button-pay
      height: 64px
      display: flex
      align-items: center
      justify-content: center

  .promocode-description-info
    font-size: 14px

    font-style: normal
    font-stretch: normal
    line-height: 1.29
    letter-spacing: 0.5px
    color: #282a36
    .promocode-description-title
      font-weight: 600
    .promocode-description-reward
      color: #0063da
      font-weight: 600
</style>
