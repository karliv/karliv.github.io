<template>
    <modal class="modal-center ss-modal-balance" v-model="modal.value" :footer="false" :header="true" title="Баланс" @hide="closeModal()">
        <div class="ss-modal-balance-wrap">
            <div class="ss-modal-balance-head">
                <div class="price"><span>{{ balance | currency('₽') }}</span></div>
                <div class="center">
                    <a href="javascript:void(0)" class="lm-primary-button small" @click="_handleClickWithdrawAccount">Вывести на счет</a>
                </div>
            </div>
            <div class="list-of-operations">
                <div class="list-of-operations--head">
                    <div class="text">Список операций</div>
                    <a href="javascript:void(0)" v-if="0" class="download-list" @click="_handleDownloadBillingOperation">СКАЧАТЬ ДЕТАЛИЗАЦИЮ</a>
                </div>
                <div class="list-of-operations--list" v-infinite-scroll="fetchUserBalance" infinite-scroll-disabled="scroll_busy">
                    <div class="list-of-operations--item" v-for="operation in operations.data" :key="operation.id">
                        <div class="date">{{ operation.created_at | moment('DD.MM') }}</div>
                        <div class="order"><span>{{ operation.name }}</span></div>
                        <div :class="[{ 'credit': isDebit(operation.type), 'complite': isCredit(operation.type) }, 'price']">
                            <span>
                                <template>
                                    <template v-if="isDebit(operation.type)">-</template>
                                    <template v-if="isCredit(operation.type)">+</template>
                                    {{ operation.amount | currency('₽') }}
                                </template>
                            </span>
                        </div>
                    </div>

                    <loader v-if="modal.loading" class="pd-26"></loader>
                    <div class="pd-26" v-if="(operations.count === 0 && !modal.loading) || (operations.data.length === 0 && !modal.loading)">
                        <span style="font-size: 14px; color: #000">К сожалению, операций не найдено.</span>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      modal: {
        value: false,
        loading: false,
        balance: null,
        operations: {
          data: [],
          count: 0,
          offset: 0,
          limit: 24,
          scroll_busy: true
        }
      }
    }
  },
  mounted () {
    this.$root.$on('open-modal-balance-show', (balance) => {
      this.modal.balance = balance || 0

      this.fetchUserBalance()

      this.$nextTick(() => {
        this.modal.value = true
      })
    })
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    }),
    balance () {
      return this.modal.balance
    },
    operations () {
      return this.modal.operations
    },
    scroll_busy () {
      return this.modal.operations.scroll_busy
    },
    isCustomer () {
      return (this.role === 'customer')
    },
    isExecutor () {
      return (this.role === 'executor')
    }
  },
  methods: {
    fetchUserBalance () {
      this.modal.loading = true
      this.modal.operations.scroll_busy = true

      let params = {
        limit: this.modal.operations.limit,
        offset: this.modal.operations.offset,
        include: 'operable'
      }

      this.$api.get(`/api/v2/billing/balance`, params).then(response => {
        let { data: { balance, operations: { data, meta: { count, new_offset } } } } = response

        this.modal.balance = balance
        this.$store.dispatch('auth/setUserField', { key: 'balance', value: balance })

        data.forEach(item => this.modal.operations.data.push(item))

        this.modal.operations.scroll_busy = (new_offset >= count)
        this.modal.operations.count = count
        this.modal.operations.offset = new_offset

        this.modal.loading = false
      }).catch((err) => {
        this.modal.loading = false
        throw new Error(`Error get balance user`)
      })
    },
    closeModal () {
      this.clearModal()
      this.modal.value = false
    },
    clearModal () {
      return new Promise((resolve, reject) => {
        this.modal = {
          value: false,
          loading: false,
          balance: null,
          operations: {
            data: [],
            count: 0,
            offset: 0,
            limit: 24,
            scroll_busy: true
          }
        }
        resolve()
      })
    },
    isDebit (type) {
      return (type === 'credit')
    },
    isCredit (type) {
      return (type === 'debit')
    },
    _handleDownloadBillingOperation () {
      alert('¯\\_(ツ)_/¯')
    },
    _handleClickWithdrawAccount () {
      alert('Для вывода средств на счет напишите в поддержку')
    }
  }
}
</script>

<style scoped>

</style>
