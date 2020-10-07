<template>
  <div :class="['lm-loader-page', { 'error': (canSuccess === false) }]" v-show="show">
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="1" stroke="none" fill="none" fill-rule="evenodd">
        <rect id="load" stroke="none" fill="#0063da" x="0" y="0" width="40" height="40" rx="16">
          <animate
            attributeName="fill"
            attributeType="XML"
            begin="0.008s"
            values="#0063DA; #0063DA; #20DBA9; #20DBA9; #F5A623; #F5A623; #FC2E5F; #FC2E5F; #0063DA"
            keyTimes="0; .125; .250; .375; .500; .625; .750; .875; 1"
            keySplines=".25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1; .25 .1 .25 1"
            dur="2s" repeatCount="indefinite"/>
        </rect>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
    }
  },
  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>
