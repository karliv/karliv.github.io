<template>
  <section>
    <template v-if="not_paid">
      <template v-if="order && !success">
        <div class="lm-m-cs-confirm-page">
          <div class="lm-m-cs-confirm-page-wrap">
            <div class="title">Подтверждение данных</div>
            <div class="desc">Пожалуйста, подтвердите выбор специалиста и способ верификации для перехода к оплате</div>
            <div class="lm-m-cs-confirm-page-line">
              <div class="title">Специалист:</div>
              <div class="lm-user-block">
                <a href="javascript:void(0)">
                  <div>
                    <img :src="specialist.avatar" class="lm-user-block-avatar" :alt="specialist.name">
                    <div class="lm-user-block-info">
                      <div class="lm-user-block-info-name"><b>{{ specialist.name }}</b></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="lm-m-cs-confirm-page-line">
              <div class="title">Адрес:</div>
              <b>{{ service.address }}</b>
            </div>
            <div class="lm-m-cs-confirm-page-line">
              <div class="title">Способ:</div>
              <b>{{ formatWorks(service.works) }}</b>
            </div>
            <div class="lm-m-cs-confirm-page-separator"></div>
            <div class="lm-m-cs-confirm-page-line">
              <div class="title">Итого к оплате:</div>
              <b class="price">{{ order.price | currency('₽')  }}</b>
            </div>
            <div class="lm-m-cs-confirm-page-line">
              <div class="ss-cart-block-info-line-promocode">
                <div class="d-row">
                  <template v-if="(hasPromocode === false)">
                    <input id="promocode" type="text" name="promocode" placeholder="Промокод" autocomplete="off"
                           v-model="promocode.value"
                           v-validate="'max:65000'"
                           data-vv-as="Промокод"
                           :class="[{ 'error': (verrors.has('promocode')) }, 'input form__input form__input_declaration']">

                    <button href="javascript:void(0)" class="btn btn_primary mt_1 w_100" :disabled="(promocode.loading === true || !promocode.value)" @click="_handleClickRedeemPromocode">применить</button>
                  </template>
                  <template v-else-if="(hasPromocode === true)">
                    <div class="promocode-description-info"><span class="promocode-description-title">Промокод: </span>{{ codePromocode }} <span class="promocode-description-reward">( - {{ rewardPromocode | currency('₽') }} )</span></div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="lm-m-certifyingspecialist-select-action">
            <router-link :to="{ name: 'certifying.executor.orders.create', params: { service_id: service.id } }" class="lm-link-button">назад</router-link>
            <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickPaymentOrder" :id="service.slug">продолжить</button>
          </div>
        </div>
      </template>
      <template v-else-if="order && success">
        <div class="lm-m-cs-paid">
          <div class="lm-m-cs-paid-wrap">
            <div class="title">Услуга оплачена!</div>
            <div class="desc" style="margin-bottom: 40px">Квитанцию об оплате и информацию о событии мы отправили вам на почту</div>
            <div class="desc">Напишите специалисту свои пожелания по дате и времени</div>
            <a href="javascript:void(0)" @click="_handleClickOpenMessagePage" class="lm-outline-button middle">Написать</a>
          </div>
        </div>
      </template>
    </template>

    <template v-if="paid">
      <div class="lm-m-cs-paid">
        <div class="lm-m-cs-paid-wrap">
          <div class="title">Данный заказ уже оплачен!</div>
          <div class="desc">Напишите специалисту свои пожелания</div>
          <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-outline-button middle">Мои заказы</router-link>
        </div>
      </div>
    </template>

    <template v-if="error">
      <div class="lm-m-cs-paid">
        <div class="lm-m-cs-paid-wrap">
          <div class="title">Заказ не найден!</div>
          <div class="desc">Произошла ошибка, пожалуйста, повторите попытку</div>
          <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-outline-button middle">Мои заказы</router-link>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
  import { has } from '@utils'
  import { Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapMutations } from 'vuex'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  export default {
    metaInfo: {
      title: 'Оплата верификации'
    },
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
        include: 'certified_user,certifying_specialist,service'
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
      this.$gtm.trackEvent({ event: 'startPayCS', orderId: this.order_id, slug: this.service.slug })


      this.$echo.private(`user.${this.user.id}`).listen('.billing.account.refill', (payload) => {
        let { amount, transfer_id } = payload
        console.log(amount, transfer_id);
      });
    },
    methods: {
      ...mapMutations({
        _setSingleOrderData: 'certifying/SET_SINGLE_ORDER_DATA',
      }),
      _handleClickPaymentOrder () {
        if (this.isEnoughMoney === true) {
          this.paymentOrder(false)
        } else this._initCloudPaymentsWidget()
      },
      paymentOrder (with_receipt = false) {
        Indicator.open()
        this.loading = true

        this.$api.post(`api/v2/certifying-specialists/orders/${this.order_id}/status/payment`, { with_receipt }).then(response => {
          this.success = true
          this.loading = false

          this.$gtm.trackEvent({ event: 'payCS', orderId: this.order_id, slug: this.service.slug })

          Indicator.close()
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });

        }).catch((err) => {
          this.loading = false

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
      formatWorks (works) {
        return Object.values(CertifyingSpecialist.getTransformServiceWorkType(works)).join(', ')
      },
      _handleClickOpenMessagePage () {
        let uid = this._.sortBy([ this.user.id, this.specialist.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickRedeemPromocode () {
        if (this.promocode.loading || !this.promocode.value) return

        Indicator.open()
        this.promocode.loading = true

        let { value } = this.promocode

        this.$api.post(`api/v2/certifying-specialists/orders/${this.order_id}/promocodes?include=certified_user,certifying_specialist,service,service.studio`, { code: value }).then(response => {
          let { data: { data, meta: { payment: { form, url } } } } = response
          this.payment = { form, url }

          this._setSingleOrderData(data)

          Indicator.close()
          this.promocode.loading = false
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
        }).catch((err) => {
          Indicator.close()
          this.promocode.loading = false
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          this.$validator.errors.add({ field: 'promocode', msg: 'Промкод не найден.' })
          throw new Error(`Error Redeem Promocode in order ${this.order_id}`)
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
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
