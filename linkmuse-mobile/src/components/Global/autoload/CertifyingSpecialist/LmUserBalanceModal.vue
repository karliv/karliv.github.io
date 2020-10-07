<template>
  <mt-popup class="lm-m-modal-wrap lm-m-balance" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <div class="lm-m-balance--wrap">
      <div class="lm-m-balance--head">
        <div class="lm-m-balance--head-left" @click="_handleCloseModal">
          <div class="lm-m-modal-close"></div>
        </div>
        <div class="lm-m-balance--head-center">
          <span>{{ balance | currency('₽') }}</span>
        </div>
        <div class="lm-m-balance--head-right">
          <div class="lm-m-modal-withdraw" @click="_handleClickWithdrawAccount"></div>
        </div>
      </div>
      <div class="lm-m-balance--content" ref="wrapper">
        <div class="title"><span>последние операции:</span></div>

        <div class="list-of-operations--list" v-infinite-scroll="_handleInfiniteScroll" :style="{ maxHeight: modal.height }"
             infinite-scroll-disabled="scroll_busy"
             infinite-scroll-distance="200">
          <div class="list-of-operations--item" v-for="operation in operations.data" :key="operation.id">
            <div class="left">
              <div class="date"><span>{{ operation.created_at | moment('DD.MM') }}</span></div>
              <div class="order"><span>{{ operation.name }}</span></div>
            </div>
            <div class="right">
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
          </div>

          <lm-m-loader v-if="modal.loading"></lm-m-loader>

          <div class="empty" v-if="(operations.count === 0 && !modal.loading) || (operations.data.length === 0 && !modal.loading)">
            <span>К сожалению, операций не найдено.</span>
          </div>

        </div>
      </div>
      <div class="lm-m-balance--bottom" v-if="false">
        <a href="javasciprt:void(0)" class="download-list" @click="_handleDownloadBillingOperation"><i class="lm-icon-square-download"></i>скачать детализацию</a>
      </div>
    </div>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'
  import { mapGetters } from 'vuex'

  export default {
    components: { 'mt-popup': Popup },
    data () {
      return {
        modal: {
          height: 0,
          value: false,
          loading: false,
          balance: 0,
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
    mounted () {
      this.$root.$on('open-modal-balance-show', (balance) => {
        this.modal.balance = balance || 0

        this.fetchUserBalance()

        this.$nextTick(() => {
          this.modal.value = true
        })
      });

      this._calculationHeightOperations()
    },
    methods: {
      _calculationHeightOperations () {
        this.modal.height = `${document.documentElement.clientHeight - 230 }px`
      },
      _handleInfiniteScroll () {
        return new Promise((resolve, reject) => {
          this.fetchUserBalance()
        })
      },
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
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleCloseModal () {
        this.modal.value = false
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          this.modal = {
            value: false,
            loading: false,
            balance: 0,
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
