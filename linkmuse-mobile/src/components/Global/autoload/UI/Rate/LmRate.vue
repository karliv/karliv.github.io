<template>
  <div class="rate" v-if="length > 0">
    <input type="hidden" :name="name" v-model="rate" :required="required">
    <template v-for="n in length">
      <button type="button" :key="n" :class="{'rate__star': true, 'hover': n <= over, 'filled': n <= rate}"
              :disabled="disabled"
              @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)"
              @keyup.enter="setRate(n)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="icon">
          <g id="Symbols">
            <g id="icon-like-full">
              <path d="M14.682 2.318a4.5 4.5 0 0 0-6.364 0c-.121.12-.214.259-.318.389-.104-.13-.197-.268-.318-.39a4.5 4.5 0 0 0-6.364 6.365L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364z"/>
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
    padding: 8px 3px
    text-decoration: none
    margin-right: 8px
    cursor: pointer
    background: transparent none
    border: 0
    border-radius: 16px
    background-color: #f3f4f6
    &:last-child
      margin-right: 0

  .rate__star .icon
    top: 0
    vertical-align: middle

  .rate__star.hover
    color: #fc2e5f
    opacity: 1

  .rate__star.filled
    color: #fc2e5f
    opacity: 0.5

  .rate__star.hover.filled
    color: #fc2e5f
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
    color: #fc2e5f

  .rate.has-error .rate__star.filled
    color: #fc2e5f

  .rate__star[disabled]
    color: #CCC
    opacity: 0.8

  .rate__view.disabled .count,
  .rate__view.disabled .desc
    color: #CCC
</style>
