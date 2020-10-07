<script>
import { Tooltip } from 'uiv'

export default {
  mixins: [Tooltip],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transitionDuration: {
      type: Number,
      default: 150
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: 'tooltip'
    }
  },
  mounted () {
    this.name = `${this.name} ${this.$el.className}`
  },
  render (h) {
    return h(
      this.tag,
      [
        this.$slots.default,
        h('div',
          {
            ref: 'popup',
            attrs: { role: 'tooltip' },
            on: { mouseleave: this.hideOnLeave },
            class: { 'hide-tooltip': true }
          },
          [
            h('div', { 'class': 'tooltip-arrow' }),
            h('div', { 'class': 'tooltip-inner' },
              [
                h('div', { domProps: { innerHTML: this.content } })
              ]
            )
          ]
        )
      ]
    )
  },
  computed: {
    allContent () {
      return this.content
    }
  },
  methods: {
    isNotEmpty () {
      return this.content
    }
  }
}
</script>

<style>
  .tooltip {
    box-sizing: border-box;
    padding: 12px 16px;
    border-radius: 8px;
  }

  .tooltip .tooltip-inner {
    padding: 12px 16px !important;
    max-width: max-content;
    letter-spacing: .5px;
  }

  .tooltip-inner div {
    padding: 0 !important;
  }

  .tooltip.top,
  .tooltip.left,
  .tooltip.right,
  .tooltip.bottom {
    opacity: 1;
    height: auto !important;
    color:  #ffffff;
    font-size: 12px;
    letter-spacing: 0.5px;
    background-color: #282a36;
    box-shadow: 0 4px 16px 0 rgba(40, 42, 54, 0.16);
  }

  .tooltip.bottom {
    margin-top: 13px;
    padding: 0;
  }
  .tooltip.right {
    margin-left: 13px;
    padding: 0;
  }
  .tooltip.top {
    margin-bottom: 13px;
    padding: 0;
  }
  .tooltip.left {
    margin-right: 13px;
    padding: 0;
  }

  .tooltip-arrow {
    /*border-bottom-color: #282a36;*/
    box-shadow: 0 4px 16px 0 rgba(40, 42, 54, 0.16);
  }

  .hide-tooltip {
    display: none !important;
  }


  .questions-icon:hover {
    fill: #282a36;
  }
</style>
