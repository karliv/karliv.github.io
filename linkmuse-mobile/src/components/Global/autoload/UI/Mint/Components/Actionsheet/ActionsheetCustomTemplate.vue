<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="mint-actionsheet lm-m-modal-wrap">
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'mint-ui/src/utils/popup';
  import 'mint-ui/src/style/popup.css';
  export default {
    name: 'mt-actionsheet',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },
      modalFade: {
        default: false
      },
      lockScroll: {
        default: false
      },
      closeOnClickModal: {
        default: true
      }
    },
    data() {
      return {
        currentValue: false
      };
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.currentValue = val;
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>

<style>
  @component-namespace mint {
    @component actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      max-height: 100%;
      overflow-y: auto;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;
      transition: transform .3s ease-out;
      @descendent list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      @descendent listitem {
        border-bottom: solid 1px #e0e0e0;
      }
      @descendent listitem, button {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
      &:active {
         background-color: #f0f0f0;
       }
      }
    }
  }
  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>
