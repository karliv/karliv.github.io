<template>
  <mt-popup class="lm-m-modal-wrap lm-m-abuse lm-cs-rules" v-model="modal.value" position="center" :modal="true">
    <div class="title">
      <strong>{{ title }}</strong>
    </div>

    <div class="modal-content">
      <slot></slot>
    </div>

    <div class="lm-m-abuse-actions">
      <a @click="_handleClose" href="javascript:void(0)"
         :class="['lm-primary-button', 'middle']">Закрыть</a>
    </div>
  </mt-popup>
</template>

<script>
    import {Popup, Indicator, Toast} from 'mint-ui'
    import PopupMix from '@components/Mixins/Popup'

    export default {
        components: {'mt-popup': Popup },
        mixins: [PopupMix],
        props: {
            title: {
                default: '',
                type: String
            }
        },
        data() {
            return {
                modal: {
                    state: null,
                    value: false,
                    loading: false,
                }
            }
        },
        computed: {

        },
        methods: {
            _handleOpen () {
                this.modal.value = true
            },
            _handleClose () {
                this.modal.value = false
            }
        }
    }
</script>

<style scoped>

</style>
