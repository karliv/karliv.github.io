<template>
  <div>

  </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui'
  import { has, isBrowser, isNative } from '@utils'

  export default {
    metaInfo: {
      title: 'Оплата',
    },
    data () {
      return {
        loading: true,
        payment: {}
      }
    },
    computed: {

    },
    mounted () {
      if (isBrowser) {
        let { params: { amount } } = this.$route

        amount /=100

        this._getPaymentFields(amount).then(() => {
          this._initCloudPaymentsWidget().then(() => {
            window.location.href = 'comlinkmuse://pay/success'
          }).catch(() => {
            window.location.href = 'comlinkmuse://pay/error'
          })
        }).catch(() => {
          window.location.href = 'comlinkmuse://pay/error'
        })
      }
    },
    methods: {
      _getPaymentFields (price) {
        let amount = parseFloat(price).toFixed(2)

        if (!amount) reject && reject('Need price')

        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/billing/payment`, { amount }).then(response => {
            const { data: { form, url } } = response
            this.payment = { form, url }
            resolve && resolve()
          }).catch((err) => {
            reject && reject()
            throw new Error(`Error get payment fields`)
          })
        })
      },
      _initCloudPaymentsWidget () {
        if (typeof cp !== 'object') {
          throw new Error('Error load CloudPayments')
        }

        return new Promise((resolve, reject) => {
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
            resolve()
          }, (reason, options) => {
            reject && reject()
          })
        })

      },
    }
  }
</script>

<style>

</style>
