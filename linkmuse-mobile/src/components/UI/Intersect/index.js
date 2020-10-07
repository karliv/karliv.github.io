import { throttle } from './utils'

require('intersection-observer')

export default {
  abstract: true,
  name: 'intersect',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: Array,
      required: false,
      default: () => [0, 0.2]
    },
    root: {
      required: false,
      default: () => null
    },
    rootMargin: {
      type: String,
      required: false,
      default: () => '0px 0px 0px 0px'
    },
    throttle: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  data () {
    return {
      observer: null
    }
  },
  created () {
    this.createObserver()
  },
  watch: {
    disabled (value) {
      if (value === true) {
        this.destroyObserver()
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$slots.default && this.$slots.default.length > 1) {
        warn('[VueIntersect] You may only wrap one element in a <intersect> component.')
      } else if (!this.$slots.default || this.$slots.default.length < 1) {
        warn('[VueIntersect] You must have one child inside a <intersect> component.')
        return
      }

      if (this.observer) {
        this.observer.observe(this.$slots.default[0].elm)
      }
    })
  },
  methods: {
    createObserver () {
      if (this.observer) {
        this.destroyObserver()
      }

      if (this.disabled) return

      this.callback = (emit, result, entry) => {
        this.$emit(emit, result, entry)
      }

      // Throttle
      if (this.callback && this.throttle) {
        this.callback = throttle(this.callback, this.throttle)
      }

      this.oldResult = undefined

      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        const result = entry.isIntersecting && entry.intersectionRatio >= this.threshold
        if (result === this.oldResult) return
        this.oldResult = result

        if (entry.isIntersecting) {
          this.callback('enter', result, entry)
        } else this.callback('leave', result, entry)
      }, {
        root: this.root,
        threshold: this.threshold,
        rootMargin: this.rootMargin
      })
    },
    destroyObserver () {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }

      // Cancel throttled call
      if (this.callback && this.callback._clear) {
        this.callback._clear()
        this.callback = null
      }
    }
  },
  destroyed () {
    this.destroyObserver()
  },
  render () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
