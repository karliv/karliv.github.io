<template>
  <transition name="fade">
    <div role="alert" v-show="value" :class="alertClass">
      <i class="icon-close2 close-alert" v-if="dismissible" @click="closeAlert"></i>
      <div class="wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import { Alert } from 'uiv'

  export default {
    mixins: [Alert],
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeAlert () {
        clearTimeout(this.timeout)
        this.$emit('input', false)
      }
    }
  }
</script>

<style>
  .alert.fade-leave-active {
    -webkit-animation: slideDown .5s linear;
    -moz-animation: slideDown .5s linear;
  }

  .alert.fade-enter-active {
    -webkit-animation: slideUp .5s linear;
    -moz-animation: slideUp .5s linear;
  }

  .alert.top {
    position: fixed;
    top: 30px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1050;
  }

  .alert.top-right {
    position: fixed;
    top: 30px;
    right: 50px;
    z-index: 1050;
  }

  @-webkit-keyframes slideDown {
    0% {
      -webkit-transform: translateY(0px);
    }
    100% {
      -webkit-transform: translateY(-69px);
      height: 0;
      margin: 0;
      padding: 0;
    }
  }

  @-webkit-keyframes slideUp {
    0% {
      -webkit-transform: translateY(-69px);
      height: 0;
      margin: 0;
      padding: 0;
    }
    100% {
      -webkit-transform: translateY(0px);
    }
  }

  @-moz-keyframes slideUp {
    0% {
      -moz-transform: translateY(-69px);
      height: 0;
      margin: 0;
      padding: 0;
    }
    100% {
      -moz-transform: translateY(0px);
    }
  }

  @-moz-keyframes slideDown {
    0% {
      -moz-transform: translateY(0px);
    }
    100% {
      -moz-transform: translateY(-69px);
      height: 0;
      margin: 0;
      padding: 0;
    }
  }
</style>
