<template>
  <div class="lm-circle-loader">
    <svg xmlns="http://www.w3.org/2000/svg" :width="width*3+'px'" :height="height*3+'px'" viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid" class="lds-ring" style="background: none;">
      <circle cx="50" cy="50" fill="none" r="16" stroke="#000000" stroke-width="0"/>
      <circle cx="50" cy="50" fill="none" r="16" :stroke="'#'+color" stroke-width="4" stroke-linecap="round" transform="rotate(49.5442 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;180 50 50;720 50 50"
                          keyTimes="0;0.5;1" dur="4s" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="stroke-dasharray" calcMode="linear" :values="values" keyTimes="0;0.5;1" dur="4"
                 begin="0s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      percent: {
        default: 0,
        type: Number
      },
      width: {
        default: 50,
        type: Number
      },
      height: {
        default: 50,
        type: Number
      },
      color: {
        default: '0063da',
        type: String
      }
    },
    data () {
      return { }
    },
    computed: {
      values () {
        return `0 100.53096491487338;${this.percent+1} ${100.53096491487338-this.percent-1};0 100.53096491487338`;
      }
    }
  }
</script>

<style scoped>

</style>
