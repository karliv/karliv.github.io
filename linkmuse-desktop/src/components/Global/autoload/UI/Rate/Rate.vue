<template>
  <div class="rate" v-if="length > 0">
    <input type="hidden" :name="name" v-model="rate" :required="required">
    <template v-for="n in length">
      <button type="button" :key="n" :class="{'rate__star': true, 'hover': n <= over, 'filled': n <= rate}" :disabled="disabled"
              @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)" @keyup.enter="setRate(n)">
        <svg width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon">
          <g id="Symbols">
            <g id="icon-like-full" >
              <path d="M13.3,6 L9,6 L9,2 C9,0.5 8.2,0 7,0 C6.7,0 6.4,0.2 6.4,0.5 C6.4,0.5 4.1,8 4,8 L4,16 L12.6,16 C13.9,16 15,15 15.2,13.7 L16,9.1 C16.1,8.3 15.9,7.5 15.4,7 C14.9,6.3 14.1,6 13.3,6 Z" id="Shape"></path>
              <rect id="Rectangle-path" x="0" y="8" width="2" height="8"></rect>
            </g>
          </g>
        </svg>
      </button>
    </template>
    <div class="rate__view" :class=" { disabled }">
      <span class="count" v-if="showcount">{{ over }}</span>
      <span class="desc" v-if="ratedesc.length > 0">{{ ratedesc[over - 1] }}</span>
    </div>
  </div>
</template>

<script>
/*
* Based https://github.com/SinanMtl/vue-rate
*/

export default {
  props: {
    value: { type: [Number, String] },
    name: { type: String, default: 'rate' },
    length: { type: Number },
    showcount: { type: Boolean },
    required: { type: Boolean },
    ratedesc: { type: Array, default () { return [] } },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  data () {
    return {
      over: 0,
      rate: 0
    }
  },
  watch: {
    value (val) {
      this.rate = this.convertValue(this.value)
      this.over = this.convertValue(this.value)
    }
  },
  created () {
    if (this.value >= this.length) {
      this.value = this.length
    } else if (this.value < 0) {
      this.value = 0
    }
    this.rate = this.convertValue(this.value)
    this.over = this.convertValue(this.value)
  },
  methods: {
    convertValue (value) {
      if (value >= this.length) {
        value = this.length
      } else if (value < 0) {
        value = 0
      }
      return value
    },
    onOver (index) { if (!this.readonly) this.over = index },
    onOut () { if (!this.readonly) this.over = this.rate },
    setRate (index) {
      if (this.readonly) return false
      this.$emit('before-rate', this.rate)
      this.rate = index
      this.$emit('input', this.rate)
      this.$emit('after-rate', this.rate)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .icon
        display: inline-block
        width: 20px
        height: 20px
        fill: currentColor
        vertical-align: middle
        top: -2px
        position: relative
        margin: 0 5px

    .rate
        cursor: default

    .rate__star
        color: #cbd0d8
        display: inline-block
        padding: 7px
        text-decoration: none
        cursor: pointer
        background: transparent none
        border: 0

    .rate__star .icon
        top: 0
        vertical-align: middle

    .rate__star.hover
        color: #0063da
        opacity: 1

    .rate__star.filled
        color: #0063da
        opacity: 0.5

    .rate__star.hover.filled
        color: #0063da
        opacity: 1

    .rate__star:hover,
    .rate__star:focus
        text-decoration: none

    .rate__view .count,
    .rate__view .desc
        display: inline-block
        vertical-align: middle
        padding: 7px

    .rate.has-error .rate__star
        color: #f37a77

    .rate.has-error .rate__star.hover
        color: #0063da

    .rate.has-error .rate__star.filled
        color: #0063da

    .rate__star[disabled]
        color: #CCC
        opacity: 0.8

    .rate__view.disabled .count,
    .rate__view.disabled .desc
        color: #CCC
</style>
